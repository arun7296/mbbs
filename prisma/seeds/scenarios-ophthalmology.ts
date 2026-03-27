// ---------------------------------------------------------------------------
// Clinical Decision Simulator — Seed Scenarios for Ophthalmology (OP)
// High-yield emergency and chronic management cases
// ---------------------------------------------------------------------------

export const ophthalmologyScenarios = [
  // ─── 1. Acute Angle-Closure Glaucoma (Emergency) ─────────────────────────
  {
    topicCode: "OP-MOD-01-TOP-01",
    scenario: {
      patientAge: 62,
      patientSex: "Female",
      patientOccupation: "Homemaker",
      patientLocation: "Delhi NCR",
      chiefComplaint: "Sudden onset severe eye pain with blurred vision for 4 hours",
      historyOfPresent: `
- Onset: Sudden onset 4 hours ago while watching television in dim light
- Character: Severe, throbbing eye pain — patient says "worst pain of my life"
- Location: Left eye only (unilateral), pain radiates to left forehead and temple
- Severity: 9/10 on pain scale, unbearable
- Timing: Continuous and progressive over 4 hours
- Associated: Sudden loss of vision in left eye, sees rainbow halos around lights, intense nausea and 1 episode of vomiting
- Photophobia: Severe — cannot tolerate light in left eye
- Aggravating: Dim lighting and eye movements worsen pain
- Relieving: Pressing on the eye gives temporary slight relief
- No trauma, no recent eye surgery, no eye drops used at home
      `.trim(),
      pastHistory: "No previous eye problems. No surgery. No diabetes. No hypertension (newly diagnosed BP 168/104 today). No migraine history.",
      familyHistory: "Mother had eye problems in old age (cause unknown). Sister has diabetes.",
      socialHistory: "Non-smoker, non-drinker. Sedentary lifestyle. Lives in Delhi. No recent travel.",
      drugHistory: "No regular medications. Takes iron supplements occasionally. No eye drops. No allergies.",
      vitals: { pulse: 104, bp: "168/104", temp: 37.2, rr: 24, spo2: 96 },
      generalExam: `
- General appearance: Distressed, in severe pain, grimacing, clutching left eye
- Pallor: Mild pallor present
- Icterus: Absent
- Cyanosis: Absent
- Clubbing: Absent
- Edema: No facial edema
- Diaphoresis: Present — patient sweating
      `.trim(),
      systemicExam: {
        cardiovascular: {
          apex_beat: "Apex beat in 5th ICS, mid-clavicular line — normal position",
          heart_sounds: "S1, S2 normal. Tachycardic at 104 bpm. No murmurs.",
          peripheral_pulses: "All pulses palpable, bounding",
          blood_pressure: "Right arm: 168/104 mmHg, Left arm: 166/102 mmHg",
        },
        respiratory: {
          chest_inspection: "Bilateral equal chest movements, normal rate",
          trachea: "Trachea central",
          percussion: "Resonant bilaterally",
          auscultation_lungs: "Bilateral vesicular breath sounds, no crepitations",
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
          consciousness: "GCS 15/15 — fully conscious, alert but in severe pain",
          cranial_nerves: "Pupils: Left pupil mid-dilated (5mm) and fixed (does not react to light). Right pupil normal (3mm), reacts briskly to light.",
          reflexes: "Deep tendon reflexes normal",
          plantar: "Plantar reflex — flexor bilaterally",
        },
        ophthalmic: {
          visual_acuity: "Right eye: 6/6. Left eye: Hand movements only (severely reduced)",
          anterior_chamber: "Right eye: Deep anterior chamber. Left eye: SHALLOW anterior chamber — van Hericke's sign positive (shallow chamber visible on side view)",
          cornea: "Right eye: Clear. Left eye: HAZY cornea due to corneal edema (appears dull, not shiny)",
          conjunctiva: "Left eye: Conjunctival injection present (red eye) — ciliary flush (red at limbus more than periphery)",
          iris: "Left eye: Iris appears pale/atrophic (ischemic) with loss of details. Sector iris ischemia visible.",
          intraocular_pressure_estimate: "Left eye: VERY HIGH — eye feels hard as stone on gentle palpation (Tono-pen reading estimated >50 mmHg). Right eye: normal (15-16 mmHg)",
          lens: "Left eye: Mild posterior subcapsular lens changes (early Glaukomflecken formation)",
          media: "Left eye: Vitreous haze may be present due to IOP elevation",
          disc_macula: "Unable to visualize due to hazy media and corneal edema",
          angle_assessment: "Unable to assess gonioscopy during acute phase due to corneal haze and patient discomfort",
        },
      },
      availableInvestigations: [
        { id: "tonometry", name: "Intraocular Pressure (IOP) — Tonopen", cost: 200, turnaround: "5 min", category: "Ophthalmic", result: "Left eye: 58 mmHg. Right eye: 14 mmHg. (Normal: 12-21 mmHg)", isAbnormal: true, interpretation: "Severely elevated IOP in left eye — >50 mmHg indicates acute angle closure. Right eye normal.", isEssential: true },
        { id: "a_scan", name: "A-scan Biometry (Right eye)", cost: 400, turnaround: "15 min", category: "Imaging", result: "Axial length: 21.2 mm (SHORT eye). Anterior chamber depth: 2.1 mm (SHALLOW). Keratometry: 45.5 D (STEEP cornea).", isAbnormal: true, interpretation: "Short axial length, shallow anterior chamber, and steep cornea are RISK FACTORS for angle closure.", isEssential: true },
        { id: "gonioscopy_re", name: "Gonioscopy — Right Eye (after IOP controlled)", cost: 300, turnaround: "20 min", category: "Ophthalmic", result: "Angle grades II-III (narrow but not completely closed). Schwalbe's line visible. No peripheral anterior synechiae. Angle anatomy: normal trabecular meshwork visible.", isAbnormal: true, interpretation: "Right eye has narrow angles — at risk for angle closure. Prophylactic laser peripheral iridotomy indicated.", isEssential: true },
        { id: "gonioscopy_le", name: "Gonioscopy — Left Eye (after IOP controlled)", cost: 300, turnaround: "20 min", category: "Ophthalmic", result: "Angle completely closed — 360° peripheral anterior synechiae (PAS). Schwalbe's line not visible. Trabecular meshwork not visible.", isAbnormal: true, interpretation: "Left eye: Angle completely closed with extensive PAS — explains acute angle closure. Goniodysgenesis visible.", isEssential: true },
        { id: "visual_fields", name: "Automated Visual Field (Humphrey 24-2) — Both eyes", cost: 1500, turnaround: "30 min", category: "Ophthalmic", result: "Right eye: Borderline normal with slight nasal step (early glaucomatous change). Left eye: Severe arcuate defect superior and inferior — advanced glaucomatous field loss.", isAbnormal: true, interpretation: "Left eye shows advanced glaucomatous field loss from chronic angle closure. Right eye shows early changes from narrow angles.", isEssential: false },
        { id: "oct_nerve", name: "OCT — Optic Nerve Head (ONH) — Both eyes", cost: 800, turnaround: "15 min", category: "Imaging", result: "Right eye: C/D ratio 0.4, normal neuroretinal rim. Left eye: C/D ratio 0.8, severely thinned neuroretinal rim, notching of rim (especially superior and inferior).", isAbnormal: true, interpretation: "Left eye shows advanced optic neuropathy with severe cupping from chronic elevated IOP. Right eye shows early changes.", isEssential: false },
        { id: "oct_rnfl", name: "OCT — Retinal Nerve Fiber Layer (RNFL)", cost: 800, turnaround: "15 min", category: "Imaging", result: "Right eye: RNFL thickness relatively normal. Left eye: RNFL severely thinned globally, especially at superior and inferior poles. Red coloration indicating thinning.", isAbnormal: true, interpretation: "Left eye: Advanced RNFL loss consistent with chronic glaucoma. Right eye: Relative preservation but evidence of early loss.", isEssential: false },
        { id: "corneal_thickness", name: "Pachymetry (Central Corneal Thickness)", cost: 300, turnaround: "10 min", category: "Ophthalmic", result: "Right eye: 540 micrometers (thin cornea — increases glaucoma risk). Left eye: 535 micrometers.", isAbnormal: true, interpretation: "Both eyes have thin corneas — increases susceptibility to angle closure and glaucomatous damage.", isEssential: false },
        { id: "fundus_photo", name: "Fundus Photography (when media clear)", cost: 400, turnaround: "20 min", category: "Imaging", result: "Left eye optic disc: Cup very deep (C/D 0.9), vertical elongation, nasalization of vessels, pits at disc margin. Peripapillary atrophy beta-zone. Retina shows arc-like pattern of nerve fiber layer loss.", isAbnormal: true, interpretation: "Optic disc shows advanced glaucomatous damage — deep cup, vertical elongation, nasalization of vessels.", isEssential: false },
        { id: "b_scan", name: "B-scan Ultrasound (if media opaque)", cost: 600, turnaround: "20 min", category: "Imaging", result: "Axial length normal. No retinal detachment. Vitreous haze. No posterior segment mass. Optic nerve head not elongated.", isAbnormal: false, interpretation: "Rules out other causes of vision loss. Helpful when anterior vitreous haze prevents visualization.", isEssential: false },
        { id: "blood_pressure", name: "Blood Pressure Measurement", cost: 0, turnaround: "2 min", category: "Vital", result: "Systolic: 168 mmHg, Diastolic: 104 mmHg. Elevated — likely secondary to acute angle closure pain.", isAbnormal: true, interpretation: "Hypertension secondary to acute pain and anxiety. Will normalize after IOP control and pain relief.", isEssential: true },
      ],
      correctDiagnosis: "Acute Angle-Closure Glaucoma (Left Eye) with chronic component; Narrow angles (Right Eye) at risk for angle closure",
      differentials: [
        { diagnosis: "Acute Anterior Uveitis", likelihood: "MEDIUM", reasoning: "Presents with red eye, pain, photophobia, vision loss. However, anterior chamber appears shallow, IOP very high (>50), and pupil fixed mid-dilated — more consistent with angle closure." },
        { diagnosis: "Acute Iritis/Iris Ischemic Syndrome", likelihood: "LOW", reasoning: "Pain and photophobia present, but IOP is >50 which is too high for simple iritis. Iris ischemia can occur WITH angle closure but not independently." },
        { diagnosis: "Acute Keratitis", likelihood: "LOW", reasoning: "Cornea is hazy but this is due to corneal edema from high IOP, not primary keratitis." },
        { diagnosis: "Acute Optic Neuritis", likelihood: "LOW", reasoning: "Vision loss is present, but usually painless or mild pain with eye movements. Here, severe spontaneous pain with halo vision and mid-dilated fixed pupil point to angle closure." },
        { diagnosis: "Retrobulbar Hemorrhage", likelihood: "VERY LOW", reasoning: "Would cause exophthalmos, restricted eye movements, pain. IOP would be normal or mildly elevated. No trauma history." },
      ],
      diagnosticReasoning: "62-year-old female with acute onset severe left eye pain with rainbow halos, nausea/vomiting, and vision loss (hand movements). Examination reveals shallow anterior chamber, corneal edema (hazy cornea), mid-dilated fixed pupil, iris ischemia, and IOP >50 mmHg. A-scan confirms short axial length (21.2mm), shallow AC (2.1mm), and steep cornea — classic anatomical risk factors. Gonioscopy (after IOP control) shows 360° angle closure with PAS in left eye, and narrow angles grade II-III in right eye. Visual fields and OCT show advanced glaucomatous optic neuropathy with advanced cupping (C/D 0.8) and RNFL loss in left eye. This is acute angle-closure glaucoma with chronic component — patient likely had chronic intermittent angle closure episodes that progressed to acute attack.",
      managementPlan: {
        immediateActions: [
          { action: "Instill topical Pilocarpine 2% every 5 minutes x3 doses to affected eye", reasoning: "Pilocarpine causes pupillary miosis — pulls iris away from angle to allow aqueous outflow through peripheral iridotomy", priority: "STAT" },
          { action: "Instill topical Beta-blocker (Timolol 0.5%) every 2 hours to affected eye", reasoning: "Reduces aqueous humor production. Starts working in 20-30 minutes.", priority: "STAT" },
          { action: "Instill topical Carbonic Anhydrase Inhibitor (Dorzolamide 2% or Brinzolamide 1%) TDS to both eyes", reasoning: "Reduces aqueous production by 20-30%. Useful for narrow angles bilaterally.", priority: "URGENT" },
          { action: "Give IV Mannitol 20% (1-2 g/kg IV bolus)", reasoning: "Osmotic diuretic — shrinks vitreous body and dehydrates vitreous, allows IOP to drop 20-30% in 30 minutes. Essential for very high pressures (>50).", priority: "STAT" },
          { action: "Give Systemic Carbonic Anhydrase Inhibitor — Acetazolamide 500mg IV stat, then 250mg TDS", reasoning: "Reduces aqueous production by 50%. Oral forms absorbed more slowly — IV preferred for emergency.", priority: "STAT" },
          { action: "Continuous cardiac and blood pressure monitoring", reasoning: "Acetazolamide and mannitol can affect electrolytes and fluid balance. Hypertension is from pain — monitor as it should normalize.", priority: "URGENT" },
          { action: "Analgesics: IV Diclofenac 75mg or Tramadol 100mg IV for pain relief", reasoning: "Severe pain needs aggressive management. Avoid morphine as it may constrict pupil further.", priority: "STAT" },
          { action: "Anti-emetic: IV Ondansetron 4-8mg or Metoclopramide 10mg IV", reasoning: "Nausea and vomiting are severe. Metoclopramide may help with gastric distension.", priority: "URGENT" },
        ],
        pharmacological: [
          { drugClass: "Topical Prostaglandin Analog", examples: ["Latanoprost 0.005% one drop every night (once IOP <40)", "Travoprost 0.004% OD"], route: "Topical", duration: "Long-term after acute phase controlled", reasoning: "Increases uveoscleral outflow. Added after acute phase as monotherapy or adjunct. Contraindicated in acute angle closure (may cause anterior chamber shallowing).", contraindications: ["Active angle closure", "Pregnancy (Latanoprost Category C)"], indianContext: "Latanoprost 2.5 mL bottle at ₹250-350 (Jan Aushadhi). Long-term cost ~₹300-400/month." },
          { drugClass: "Topical Beta-blocker", examples: ["Timolol 0.5% BD"], route: "Topical", duration: "Long-term maintenance", reasoning: "First-line agent. Reduces aqueous humor production by 25%. Used in both acute and chronic management.", contraindications: ["Bradycardia", "Heart block", "Asthma/COPD"], indianContext: "Timolol 5 mL bottle at ₹40-60. Cost ~₹50-100/month for lifetime." },
          { drugClass: "Topical CAI", examples: ["Dorzolamide 2% TDS", "Brinzolamide 1% TDS"], route: "Topical", duration: "Long-term", reasoning: "Reduces aqueous production by 20%. Often used as add-on therapy. Good for narrow angles.", contraindications: ["Corneal endothelial dysfunction", "Allergy to sulfonamides"], indianContext: "Dorzolamide bottle at ₹180-250. Generic versions at ₹100-150." },
          { drugClass: "Systemic CAI", examples: ["Acetazolamide 250mg OD or BD"], route: "Oral", duration: "7-14 days acute phase, then taper; may continue long-term if needed", reasoning: "Reduces aqueous production by 50%. Essential in emergency. Long-term use (>1 week) may cause metabolic acidosis.", contraindications: ["Renal impairment", "Hypokalemia", "Sulfonamide allergy"], indianContext: "Acetazolamide 250mg tablet at ₹2-4 (generic). Emergency IV form at ₹60-100/vial." },
          { drugClass: "Osmotic Agent", examples: ["IV Mannitol 20% (1-2 g/kg)", "Oral Glycerol 50% (1-1.5 g/kg, less preferred)"], route: "IV preferred, oral alternative", duration: "Single acute dose", reasoning: "Osmotic diuretics shrink vitreous volume and lower IOP by 20-30% within 30 minutes. IV mannitol is gold standard for emergency.", contraindications: ["Renal failure", "Dehydration", "Congestive heart failure"], indianContext: "IV Mannitol 500 mL bottle at ₹150-200. Limited availability in smaller towns." },
          { drugClass: "Analgesic/Anti-inflammatory", examples: ["Topical NSAIDs — Indomethacin 1% QID or Ketorolac 0.5% TDS", "Systemic NSAIDs — Diclofenac 75mg IM/IV"], route: "Topical or systemic", duration: "Acute phase", reasoning: "Reduces inflammation and pain. Topical NSAIDs reduce corneal edema and improve view for laser. Avoid systemic NSAIDs long-term.", contraindications: ["GI ulcer", "Recent surgery"], indianContext: "Indomethacin eye drops at ₹60-80. Diclofenac 75mg IM at ₹15-25." },
        ],
        nonPharmacological: [
          { intervention: "Dark room/dim lighting until IOP controlled", reasoning: "Bright light causes pupillary dilation which worsens angle closure. Keep patient in dim room.", duration: "First 12-24 hours" },
          { intervention: "Head elevated 30-45 degrees", reasoning: "Facilitates aqueous drainage through trabecular meshwork by gravity", duration: "While acute" },
          { intervention: "Avoid mydriatic eye drops completely", reasoning: "Any mydriatic agent (tropicamide, homatropine) will push iris forward and worsen angle closure", duration: "Until laser iridotomy done" },
        ],
        monitoring: [
          { parameter: "Intraocular Pressure (IOP)", frequency: "Every 15 minutes x1 hour, then every 30 minutes x2 hours, then hourly", target: "Target IOP <30 mmHg within 2 hours, ideally <20 mmHg by 6 hours", escalation: "If IOP not dropping with medical therapy — escalate to laser peripheral iridotomy urgently" },
          { parameter: "Anterior chamber depth", frequency: "Every 30 minutes on ultrasound pachymetry or A-scan", target: "Deepening of anterior chamber as IOP drops", escalation: "If AC remains shallow despite IOP drop — may need IV mannitol repeated or immediate laser" },
          { parameter: "Visual acuity", frequency: "Every 1 hour", target: "Gradual improvement toward baseline as corneal edema resolves", escalation: "If vision worsens or remains hand movements after 6 hours of treatment — poor prognosis" },
          { parameter: "Pain severity", frequency: "Every 30 minutes", target: "Gradual resolution with analgesia and IOP control", escalation: "Persistent pain despite IOP control suggests anterior uveitis component or retrobulbar involvement" },
        ],
        definitiveTreatment: {
          intervention: "Laser Peripheral Iridotomy (LPI) — Both eyes",
          timing: "Within 24 hours of IOP control (target IOP <30 mmHg to clear cornea for laser)",
          technique: "Nd:YAG laser — create superior peripheral iridotomy (2 clock hours) to bypass pupillary block. Creates patent opening in iris for aqueous to flow from posterior to anterior chamber.",
          purpose: "Definitive treatment of pupillary block. Laser creates opening to equalize pressures between posterior and anterior chambers.",
          bilateralIridotomy: "YES — both eyes need LPI because both have narrow angles and right eye at high risk. Prophylactic LPI in right eye prevents future acute attack.",
          successCriteria: "Patent iridotomy confirmed. IOP normalizes. AC deepens. Patient symptom-free.",
          failurePlans: "If LPI fails (rare) — may need trabeculectomy or glaucoma drainage device for chronic management.",
        },
        afterLaserFollow: [
          { intervention: "Continue topical medical therapy for 5-7 days post-LPI", reasoning: "Continue beta-blocker, CAI drops, and analgesics until inflammation resolves and IOP stable", duration: "1 week" },
          { intervention: "Taper systemic Acetazolamide over 5-7 days", reasoning: "Long-term acetazolamide can cause side effects. Taper as IOP controlled by topical therapy and laser.", duration: "Days 5-14" },
          { intervention: "Gonioscopy re-assessment 1 week post-LPI", reasoning: "Confirm iridotomy patent and assess for peripheral anterior synechiae (PAS). PAS limits prognosis.", duration: "1 week" },
          { intervention: "Long-term glaucoma medications", reasoning: "Left eye likely has residual elevated IOP and glaucoma from chronic component. Needs long-term IOP-lowering therapy.", duration: "Lifelong" },
        ],
        lifestyle: {
          dos: ["Take all prescribed eye drops on schedule", "Attend all follow-up appointments — glaucoma is lifelong disease", "Maintain low sodium diet", "Keep head slightly elevated while sleeping"],
          donts: ["NEVER use any mydriatic eye drops (tropicamide, homatropine, phenylephrine) — will precipitate angle closure", "Avoid dim light environments — keep room well-lit", "Avoid antihistamines and decongestants — they can have anticholinergic effects and dilate pupil", "Do NOT stop eye drops without doctor approval — leads to IOP spike"],
          indianSpecific: ["Check medication labels carefully — some common cold remedies contain pseudo-ephedrine which dilates pupils", "Educate family about angle closure risk — right eye at high risk", "Avoid herbal supplements that claim to improve vision — some may have mydriatic effects", "Government eye hospitals in India offer LPI at affordable cost (₹2,000-5,000) vs private (₹8,000-15,000)"],
        },
        followUp: {
          when: "Day 1 (next day) for IOP check, 1 week after LPI, 1 month, 3 months, then every 3-6 months for life",
          what: ["IOP measurement (primary outcome)", "Visual acuity assessment", "Slit lamp examination for patent iridotomy and PAS", "Gonioscopy to assess angle", "Optic disc assessment", "Visual fields every 1-2 years (annual if glaucoma diagnosis)", "OCT RNFL annual monitoring"],
        },
        referral: {
          needed: true,
          to: "Glaucoma Specialist / Ophthalmologist trained in laser and glaucoma surgery",
          urgency: "IMMEDIATE — do not delay. Aim for LPI within 24 hours of IOP control. Each hour of high IOP causes irreversible optic nerve damage.",
        },
      },
      redFlags: [
        { flag: "IOP remains >50 mmHg after 2 hours of medical therapy", action: "Do not delay — proceed to emergency laser peripheral iridotomy. Medical therapy alone may fail.", urgency: "IMMEDIATE" },
        { flag: "Vision remains hand movements or worse after 24 hours despite IOP control", action: "Advanced glaucomatous optic neuropathy. Prognosis for vision recovery poor. Prevent fellow eye damage by LPI.", urgency: "URGENT" },
        { flag: "Corneal decompensation (corneal whitening/edema worsening despite IOP drop)", action: "Indicates corneal endothelial damage from sustained high IOP. May need corneal transplant long-term.", urgency: "URGENT" },
        { flag: "Shallow anterior chamber persists despite IOP <20 mmHg", action: "May have supraciliary hemorrhage or plateau iris. Needs imaging. May require vitrectomy or ciliary body ablation.", urgency: "URGENT" },
        { flag: "Iris necrosis (pale, whitish iris) or iris atrophy progressing", action: "Indicates severe ischemia from extreme IOP elevation. Permanent iris damage — poor cosmetic outcome.", urgency: "EMERGENT" },
      ],
      keyLearningPoints: [
        "Acute angle-closure glaucoma is an OPHTHALMIC EMERGENCY — if IOP not lowered within hours, permanent blindness results",
        "Classic triad: Shallow anterior chamber, elevated IOP (>50 mmHg), and symptoms of severe pain with rainbow halos",
        "Pilocarpine miosis + IV Mannitol are the two most important immediate treatments before laser",
        "Nd:YAG Laser Peripheral Iridotomy is DEFINITIVE treatment — converts angle closure to open angle",
        "BILATERAL prophylactic LPI needed because fellow eye has narrow angles — prevents 50% bilateral attack rate",
        "Short axial length, shallow anterior chamber, and steep cornea are anatomical risk factors for angle closure",
        "Never use any mydriatic agents in narrow angle eyes — can precipitate acute angle closure",
        "Even after LPI, long-term IOP-lowering medical therapy often needed because of glaucomatous damage",
        "Early diagnosis and treatment preserves vision — delayed treatment (>24 hours) results in irreversible optic nerve damage",
      ],
      commonMistakes: [
        "Diagnosing as 'migraine' and delaying referral to eye hospital — delays critical treatment by hours or days",
        "Instilling mydriatic eye drops (like tropicamide for refraction) — worsens angle closure and raises IOP further",
        "Using only topical medications and delaying systemic therapy — medical therapy alone often insufficient for IOP >50",
        "Not giving IV Mannitol — osmotic agents provide rapid IOP lowering and allow cornea to clear for laser",
        "Delaying LPI waiting for IOP to drop completely with medical therapy — if IOP not <30 mmHg in 2 hours, proceed to laser",
        "Not doing prophylactic LPI in fellow eye — 50% of untreated fellow eyes develop acute angle closure within 5 years",
        "Starting long-term prostaglandin analogs without understanding risks — some PG analogs can shallow anterior chamber further",
        "Not counseling on NEVER using mydriatic drops — patients may apply antihistamine drops or use dilating drops unknowingly",
      ],
      relevantHistoryQs: ["onset", "severity", "associated_vision", "halos", "nausea", "photophobia", "trauma", "medications", "eye_surgery", "family_eye_disease"],
      relevantExamIds: ["visual_acuity", "anterior_chamber_depth", "cornea_clarity", "pupil_size", "pupil_reactivity", "iop_estimate", "iris_color", "conjunctival_injection", "gonioscopy", "optic_disc"],
      difficulty: "HARD",
      estimatedMinutes: 25,
      subjectTags: ["OP", "PH"],
      examRelevance: ["NEXT_STEP1", "NEET_PG", "CLINICAL_EXAM"],
      nmcCompetencyCode: "OP1.2",
      maxScore: 100,
      passingScore: 60,
    },
  },

  // ─── 2. Diabetic Retinopathy (Screening and Management) ────────────────────
  {
    topicCode: "OP-MOD-02-TOP-01",
    scenario: {
      patientAge: 58,
      patientSex: "Male",
      patientOccupation: "Farmer",
      patientLocation: "Karnataka rural area",
      chiefComplaint: "Routine eye check-up; asymptomatic vision loss detected on screening",
      historyOfPresent: `
- Chief complaint: Patient came for routine eye check after being told by local health worker that he needs eye screening for diabetes
- Patient denies any vision problems, denies floaters, denies blurred vision, denies eye pain
- However, on direct questioning: "Sometimes things look a bit hazy after waking up, but clears after washing face"
- No diplopia, no photophobia, no discharge
- Occasional headache, not related to vision
      `.trim(),
      pastHistory: "Type 2 Diabetes Mellitus diagnosed 12 years ago. Initially on metformin, but control poor — HbA1c never <8%. Recently started insulin 20 units BD 6 months ago. No acute complications (no DKA, no HHS). No hypertension initially, but developed BP 148/94 mmHg 2 years ago — on Amlodipine 5mg irregularly. No kidney disease (last creatinine 0.9 mg/dL 1 year ago). No previous eye problems. No previous eye surgery.",
      familyHistory: "Father had diabetes and 'went blind in old age' (patient doesn't know exact diagnosis — likely DR). Mother has hypertension.",
      socialHistory: "Farmer, physically active (works in fields daily). Smoker — 10 cigarettes/day for 30 years. Occasional alcohol. Diet: Simple rural diet with rice, dal, seasonal vegetables. Does not follow diabetes diet strictly. Poor medication adherence — takes insulin and amlodipine irregularly.",
      drugHistory: "Metformin 500mg TDS (initially), Insulin Human 20 units BD (started 6 months ago), Amlodipine 5mg OD (irregular). NO other medications. Complains of 'burning in feet' but not on any neuropathy treatment. No allergies.",
      vitals: { pulse: 82, bp: "150/96", temp: 36.8, rr: 18, spo2: 97 },
      generalExam: `
- General appearance: Healthy-looking, well-built, no obvious distress
- Pallor: Absent
- Icterus: Absent
- Cyanosis: Absent
- Clubbing: Absent
- Edema: No pedal edema, but feels feet
- Other: Calluses on feet from farm work. Diminished sensation in feet (stocking distribution) — diabetic neuropathy present
      `.trim(),
      systemicExam: {
        cardiovascular: {
          apex_beat: "Apex beat in 5th ICS, mid-clavicular line — normal position",
          heart_sounds: "S1, S2 normal. Regular rate and rhythm. No murmurs.",
          peripheral_pulses: "Dorsalis pedis pulses diminished bilaterally (suggests peripheral arterial disease)",
          blood_pressure: "Right arm: 150/96 mmHg, Left arm: 148/94 mmHg. Elevated — inadequately controlled.",
        },
        respiratory: {
          chest_inspection: "Bilateral equal chest movements",
          trachea: "Trachea central",
          percussion: "Resonant bilaterally",
          auscultation_lungs: "Bilateral vesicular breath sounds, no crepitations",
          vocal_resonance: "Normal",
        },
        abdominal: {
          abdo_inspection: "Abdomen soft, non-distended",
          palpation_superficial: "No tenderness",
          palpation_deep: "Liver edge just palpable — may be fatty infiltration from metabolic disease",
          spleen_palpation: "Not palpable",
          bowel_sounds: "Normal",
        },
        neurological: {
          consciousness: "GCS 15/15 — fully conscious",
          monofilament_sensation: "Diminished sensation to 10g monofilament over dorsum of foot, plantar surface, and dorsal foot — stocking distribution bilateral",
          vibration_sense: "Reduced over metatarsal heads",
          ankle_jerks: "Diminished or absent bilaterally",
          plantar: "Flexor bilaterally",
        },
        ophthalmic: {
          visual_acuity_unaided: "Right eye: 6/9. Left eye: 6/12. (Reduced from expected due to diabetic changes)",
          visual_acuity_pinhole: "Right eye: 6/9. Left eye: 6/12. (No improvement with pinhole — not refractive error, indicates retinal pathology)",
          anterior_segment_findings: "Bilateral clear cornea. Lens: Right eye — early cataracts (posterior subcapsular changes). Left eye — early cataract (anterior cortical changes). Iris: Normal. Angle: Not assessed (not indicated). Anterior chamber: Normal depth.",
          pupils: "Pupils round, reactive to light. No APD.",
          extra_ocular_movements: "Full in all directions. No restriction.",
          fundus_findings_right: "MODERATE NON-PROLIFERATIVE DIABETIC RETINOPATHY (MNPDR): Multiple flame-shaped hemorrhages at 1 o'clock and 4 o'clock positions. Cotton-wool spots at 12 o'clock and 5 o'clock. Hard exudates scattered throughout macula in a circinate pattern. Microaneurysms visible on close inspection (appear as small red dots). Venous beading inferior nasal quadrant. Macular edema present — macula appears thickened and slightly elevated (OCT will confirm). Optic disc normal color and margins. Cup:Disc ratio 0.4. Vessels tortuous.",
          fundus_findings_left: "SEVERE NON-PROLIFERATIVE DIABETIC RETINOPATHY (SNPDR): More extensive hemorrhages than right — scattered throughout all four quadrants, some appearing blot-shaped in posterior pole. Numerous cotton-wool spots suggesting retinal ischemia. Extensive hard exudates in macula. Significant macular edema — clinically evident edema and exudates threatening macula. Venous beading prominent in superior nasal and inferior temporal quadrants (two quadrants involved — sign of severity). Multiple microaneurysms. Optic disc normal but vessels show more tortuosity and irregularity than right eye.",
          redFlags_present: "YES — Macular edema present bilaterally. Left eye shows clinically significant macular edema (CSME) — hard exudates within 500 microns of fovea and thickening within 500 microns of fovea.",
        },
      },
      availableInvestigations: [
        { id: "fasting_glucose", name: "Fasting Blood Sugar", cost: 80, turnaround: "10 min", category: "Biochemistry", result: "FBS: 186 mg/dL (Normal: 70-100 mg/dL). Elevated despite insulin therapy.", isAbnormal: true, interpretation: "Poor glycemic control. Contributes to progression of retinopathy. Patient needs better adherence or insulin titration.", isEssential: true },
        { id: "hba1c", name: "HbA1c", cost: 250, turnaround: "2 hours", category: "Biochemistry", result: "HbA1c: 9.2% (Normal: <5.7%). Target for diabetics is usually <7-8%.", isAbnormal: true, interpretation: "Chronically poor glycemic control over past 3 months. Reflects inadequate diabetes management and major risk factor for DR progression.", isEssential: true },
        { id: "lipid_profile", name: "Lipid Profile", cost: 400, turnaround: "2 hours", category: "Biochemistry", result: "Total Cholesterol: 245 mg/dL, LDL: 162 mg/dL, HDL: 35 mg/dL, Triglycerides: 185 mg/dL", isAbnormal: true, interpretation: "Dyslipidemia — high LDL and low HDL. Elevated triglycerides associated with harder exudates in DR.", isEssential: true },
        { id: "rft", name: "Renal Function Test", cost: 400, turnaround: "1 hour", category: "Biochemistry", result: "Urea: 38 mg/dL, Creatinine: 0.98 mg/dL, Na: 140, K: 4.1 mEq/L", isAbnormal: false, interpretation: "Normal renal function. No evidence of diabetic nephropathy yet. Proteinuria testing needed (urine albumin) for full assessment.", isEssential: true },
        { id: "urine_albumin", name: "Urine Microalbumin (24-hour or random with creatinine)", cost: 300, turnaround: "2 hours", category: "Biochemistry", result: "Urine Albumin: 45 mg/day (Normal: <30 mg/day). Urine Creatinine: 1.2 g/day. Albumin:Creatinine ratio: 37.5 mg/g (Abnormal: >30 mg/g)", isAbnormal: true, interpretation: "Microalbuminuria present — indicates early diabetic kidney disease. Associated with higher risk of severe DR progression.", isEssential: true },
        { id: "bp_daytime_avg", name: "Average Daytime Blood Pressure", cost: 0, turnaround: "Immediate", category: "Vital", result: "Systemic Systolic: 150 mmHg, Diastolic: 96 mmHg (averaged from multiple readings during visit)", isAbnormal: true, interpretation: "Stage 2 Hypertension — inadequately controlled. BP control is crucial in DR to slow progression. Target should be <130/80.", isEssential: true },
        { id: "oct_macula", name: "OCT Macula (Both Eyes)", cost: 800, turnaround: "15 min", category: "Imaging", result: "Right eye: Central macular thickness (CMT) 315 micrometers (Normal: 200-250 micrometers). Intra-retinal fluid (IRF) visible in outer plexiform layer. Left eye: CMT 385 micrometers. More extensive IRF in inner and outer plexiform layers. Subretinal fluid (SRF) NOT present (would indicate advanced edema). Both show disrupted foveal contour.", isAbnormal: true, interpretation: "Right eye: Mild macular edema (thickness 300-400 micrometers). Left eye: Moderate macular edema (thickness >350 micrometers). Both meet criteria for Clinically Significant Macular Edema (CSME) which needs treatment.", isEssential: true },
        { id: "oct_rnfl", name: "OCT RNFL (Optic Nerve Fiber Layer) — Both Eyes", cost: 800, turnaround: "15 min", category: "Imaging", result: "Right eye: Global RNFL thickness 95 micrometers (borderline low — normal >100). Left eye: Global RNFL thickness 92 micrometers (low). No significant localized defects.", isAbnormal: true, interpretation: "Borderline thinning suggests either early glaucomatous changes or chronic ischemic changes from diabetes. Follow-up needed to distinguish.", isEssential: false },
        { id: "fundus_angiography", name: "Fundus Fluorescein Angiography (FFA) — Both Eyes", cost: 1200, turnaround: "30 min", category: "Imaging", result: "Right eye: Dot and blot hemorrhages at 1-2 o'clock and 4-5 o'clock positions. Multiple microaneurysms distributed throughout posterior pole (count: >5 microaneurysms). Cotton-wool spots show early capillary non-perfusion (appear as dark areas in late phase). Hard exudates appear as blocked fluorescence (light yellow areas in early phase). Macular leakage visible in late phase (diffuse pooling of dye in macula). Optic disc: Normal with intact blood-retinal barrier. Venous beading in superior nasal quadrant (sign of venous occlusive disease/ischemia). Left eye: More extensive pathology — larger areas of capillary non-perfusion (compare size of non-perfused areas to optic disc diameter — appears to be 2-3 disc diameter areas). Venous beading in BOTH superior nasal AND inferior temporal quadrants (=2 quadrants affected — indicates severe retinal ischemia). Microaneurysms more numerous. Significant intra-retinal edema visible on late-phase dye pooling.", isAbnormal: true, interpretation: "Confirms moderate to severe NPDR. Shows retinal ischemia with non-perfused areas. Macular edema evident from dye leakage in macula. No neovascularization visible (would indicate PDR). Risk of progression to PDR is high if glycemic control not improved.", isEssential: true },
        { id: "visual_fields", name: "Automated Visual Field (Humphrey 24-2) — Both Eyes", cost: 1500, turnaround: "30 min", category: "Ophthalmic", result: "Right eye: Overall defect depth slight. No specific pattern. Left eye: Overall defect depth slightly deeper. Inferior visual field shows relative depression (suggests inferior retinal involvement). No typical glaucomatous pattern visible.", isAbnormal: false, interpretation: "VF changes if present are non-specific and likely from macular involvement rather than glaucoma. Baseline for future monitoring.", isEssential: false },
        { id: "ultrasound_doppler", name: "Carotid Doppler Ultrasound", cost: 2000, turnaround: "30 min", category: "Imaging", result: "Bilateral carotid arteries: Intima-media thickness (IMT) 1.1 mm (upper normal). No stenosis. No plaque. Normal flow patterns.", isAbnormal: false, interpretation: "Good news — no carotid stenosis. However, increased IMT suggests atherosclerotic risk. Monitor annually given multiple risk factors.", isEssential: false },
      ],
      correctDiagnosis: "Type 2 Diabetes Mellitus with Severe Non-Proliferative Diabetic Retinopathy (Left Eye) and Moderate NPDR (Right Eye), with Clinically Significant Macular Edema (CSME) Bilaterally, Diabetic Cataracts (early), Diabetic Peripheral Neuropathy, and Microalbuminuria",
      differentials: [
        { diagnosis: "Hypertensive Retinopathy", likelihood: "LOW", reasoning: "Patient has hypertension, but retinal findings are more consistent with diabetes — microaneurysms and cotton-wool spots are specific to DR, not hypertensive retinopathy." },
        { diagnosis: "Central Retinal Vein Occlusion (CRVO)", likelihood: "LOW", reasoning: "Can cause hemorrhages and edema, but CRVO typically shows more dilated veins, more extensive 'pizza pie' hemorrhages, and disc swelling. FFA would show CRVO pattern with extensive non-perfusion." },
        { diagnosis: "Branch Retinal Artery Occlusion (BRAO)", likelihood: "LOW", reasoning: "Would show cotton-wool spots and hemorrhages only in one arterial territory. Our patient has diffuse changes throughout all quadrants." },
        { diagnosis: "Proliferative Diabetic Retinopathy (PDR)", likelihood: "VERY LOW", reasoning: "SNPDR with extensive non-perfusion and venous beading is at HIGH RISK for progression to PDR, but currently NO neovascularization visible on exam or FFA. Still in NPDR stage." },
      ],
      diagnosticReasoning: "58-year-old male farmer with Type 2 DM for 12 years, poor glycemic control (HbA1c 9.2%), inadequately treated hypertension (BP 150/96), and dyslipidemia presenting for routine diabetic eye screening. Examination reveals: (1) Bilateral cataracts (early); (2) Right eye MNPDR with mild macular edema; (3) Left eye SNPDR with clinically significant macular edema; (4) Systemic diabetic complications: microalbuminuria (evidence of early kidney disease), diabetic peripheral neuropathy (diminished sensation, absent ankle jerks). FFA confirms extensive non-perfusion areas, especially in left eye with 2-quadrant venous beading (sign of severe ischemia). OCT confirms macular edema (CMT >300 micrometers bilaterally). This patient is at HIGH RISK for progression to PDR and vision loss if glycemic and BP control not urgently improved.",
      managementPlan: {
        immediateActions: [
          { action: "Refer urgently to Retina Specialist for assessment of CSME and need for anti-VEGF or laser treatment", reasoning: "Clinically significant macular edema is present and needs treatment to prevent vision loss. Anti-VEGF injections or focal laser are indicated.", priority: "URGENT" },
          { action: "Urgent referral to Endocrinologist to optimize diabetes management", reasoning: "HbA1c 9.2% is unacceptable. Patient on insulin but control poor — suggests non-adherence or inadequate dosing. Needs intensive management to slow DR progression.", priority: "URGENT" },
          { action: "Refer to Physician to optimize blood pressure control", reasoning: "BP 150/96 is inadequately controlled. Target should be <130/80 in diabetes. Amlodipine dose inadequate or non-adherence issue.", priority: "URGENT" },
          { action: "Counsel on smoking cessation", reasoning: "Smoking accelerates DR progression. Patient smoking 10 cigs/day is major modifiable risk factor.", priority: "STAT" },
        ],
        pharmacological: {
          ophthalmicTreatment: [
            { drugClass: "Anti-VEGF Injection (Intravitreal)", examples: ["Bevacizumab (Avastin) 1.25mg/0.05mL", "Ranibizumab (Lucentis) 0.5mg/0.02mL", "Aflibercept (Eylea) 2mg/0.05mL"], route: "Intravitreal injection", duration: "Every 4 weeks x 3 doses, then as needed based on response", reasoning: "First-line treatment for diabetic macular edema (DME). VEGF is elevated in diabetes and causes vascular permeability and edema. Anti-VEGF agents reduce edema and improve vision. Bevacizumab is most cost-effective in India (generic biosimilars available).", contraindications: ["Active iris neovascularization (relative — if present, may need panretinal photocoagulation first)", "Hyphema", "Media opacity (if media clear enough for injection)"], indianContext: "Bevacizumab (off-label) at ₹2,000-3,000/dose (generic in some centers). Ranibizumab at ₹8,000-12,000/dose. Aflibercept at ₹10,000-15,000/dose. Most affordable option: Bevacizumab biosimilars at ₹1,500-2,000/dose in government hospitals." },
            { drugClass: "Corticosteroid Injection (Intravitreal)", examples: ["Triamcinolone Acetonide 40mg/mL (0.1mL)", "Dexamethasone implant (Ozurdex) 700mcg"], route: "Intravitreal injection", duration: "Single injection, effect lasts 3-6 months", reasoning: "Alternative to anti-VEGF or adjunct. Effective especially when edema is from inflammation (not pure vascular leak). Less effective than anti-VEGF in most DR cases but useful if poor response to anti-VEGF.", contraindications: ["Steroid-induced glaucoma risk", "Ocular infection"], indianContext: "Triamcinolone 40mg/mL at ₹300-500/vial. Ozurdex at ₹8,000-10,000 (expensive, not commonly used in India)." },
            { drugClass: "Focal Laser Photocoagulation", examples: ["Argon laser 532nm green wavelength"], route: "Ophthalmic laser", duration: "Single session, may need retreatment at 4 weeks if needed", reasoning: "Traditional treatment for DME. Laser creates small burns that seal leaking microaneurysms and hard exudates. Less effective than anti-VEGF for vision improvement but less expensive. Often used as adjunct. Useful when anti-VEGF not available.", contraindications: ["Media opacity (need clear view to apply laser)"], indianContext: "Laser cost ₹1,000-2,000 per session. Government hospitals provide free laser treatment." },
            { drugClass: "Topical NSAID Eye Drops", examples: ["Ketorolac 0.5% (Acular) TDS", "Indomethacin 1% TDS"], route: "Topical", duration: "While on anti-VEGF or laser treatment", reasoning: "Reduces inflammation and may help with edema. Used as adjunct to injections. Some evidence of benefit in diabetic macular edema.", contraindications: ["Corneal epithelial defects"], indianContext: "Ketorolac 5mL at ₹80-100. Indomethacin at ₹60-80." },
          ],
          systemicTreatment: [
            { drugClass: "GLP-1 Receptor Agonist", examples: ["Dulaglutide 1.5mg SC weekly", "Semaglutide 1mg SC weekly"], route: "Subcutaneous", duration: "Lifelong", reasoning: "GLP-1 agonists improve glycemic control, reduce weight, and reduce cardiovascular events. Some evidence of slowing DR progression. Preferred in patients with inadequate control on metformin+insulin.", contraindications: ["History of pancreatitis", "Medullary thyroid cancer family history"], indianContext: "Dulaglutide expensive — ₹3,000-4,000/month (not accessible to most farmers). Semaglutide similarly expensive. Used mainly in urban settings." },
            { drugClass: "SGLT2 Inhibitor", examples: ["Dapagliflozin 10mg daily", "Empagliflozin 10mg daily"], route: "Oral", duration: "Lifelong", reasoning: "Reduces glycemia, promotes weight loss, reduces BP. Cardio-renal protective. May slow DR progression. Good adjunct to insulin.", contraindications: ["eGFR <30", "Type 1 DM", "Acute illness"], indianContext: "Dapagliflozin generic at ₹30-50/tablet. Empagliflozin at ₹40-60/tablet. Cost ~₹1,000-1,500/month but affordable compared to GLP-1." },
            { drugClass: "Optimize Existing Insulin", examples: ["Insulin Aspart (rapid-acting) before meals", "Insulin Glargine (long-acting basal)"], route: "Subcutaneous injection", duration: "Lifelong", reasoning: "Patient already on insulin 20 units BD but HbA1c 9.2% — suggests inadequate dosing or poor adherence. Needs dose titration. Target HbA1c <7% to slow DR.", contraindications: ["Hypoglycemia unawareness (relative)"], indianContext: "Human insulin ~₹40-50/vial. Rapid-acting insulin ~₹100-150/vial. Patient likely on cheaper human insulin." },
          ],
          bloodPressureManagement: [
            { drugClass: "ACE Inhibitor or ARB (upgrade from amlodipine monotherapy)", examples: ["Ramipril 5-10mg daily", "Losartan 50-100mg daily"], route: "Oral", duration: "Lifelong", reasoning: "ACE-I/ARB are first-line in diabetics with hypertension or albuminuria. Provide renal protection in addition to BP lowering. This patient has microalbuminuria — MUST add ACE-I/ARB. Also shown to slow DR progression.", contraindications: ["Bilateral renal artery stenosis", "Pregnancy", "K+ >5.5 (for ACEI)"], indianContext: "Ramipril 5mg at ₹2-3/tablet. Losartan 50mg at ₹3-5/tablet. Cost ~₹100-200/month." },
            { drugClass: "Amlodipine (Increase dose from 5mg)", examples: ["Amlodipine 10mg daily"], route: "Oral", duration: "Lifelong", reasoning: "Patient on 5mg amlodipine but BP remains 150/96. Either increase dose to 10mg or add second agent. Current monotherapy inadequate.", contraindications: ["Bradycardia"], indianContext: "Amlodipine 10mg at ₹2-3/tablet." },
          ],
          lipidManagement: [
            { drugClass: "Statin (High-intensity)", examples: ["Atorvastatin 80mg", "Rosuvastatin 20mg"], route: "Oral", duration: "Lifelong", reasoning: "Patient has LDL 162 mg/dL (target <70 in diabetics). High-intensity statin needed. Also shown to slow DR progression by improving retinal perfusion.", contraindications: ["Myopathy"], indianContext: "Atorvastatin 80mg generic at ₹8-15/tablet. Rosuvastatin at ₹20-30/tablet. Cost ~₹300-500/month." },
            { drugClass: "Ezetimibe (if LDL still not at goal after statin)", examples: ["Ezetimibe 10mg daily"], route: "Oral", duration: "Lifelong if needed", reasoning: "Adjunct to statin. Blocks cholesterol absorption. Can lower LDL by additional 20-25%.", contraindications: ["Active liver disease"], indianContext: "Ezetimibe 10mg at ₹10-15/tablet. Cost ~₹300-400/month." },
          ],
          otherManagement: [
            { drugClass: "Aspirin (for cardiovascular protection)", examples: ["Aspirin 75mg daily"], route: "Oral", duration: "Lifelong", reasoning: "Diabetics have high MI/stroke risk. Aspirin reduces cardiovascular events. Patient has multiple risk factors: age 58, smoking, hypertension, dyslipidemia, neuropathy.", contraindications: ["Peptic ulcer disease", "Hemorrhagic diathesis"], indianContext: "Aspirin 75mg at ₹0.50-1/tablet." },
          ],
        },
        nonPharmacological: [
          { intervention: "URGENT SMOKING CESSATION — This is MOST important lifestyle change", reasoning: "Smoking accelerates DR progression by 2-3 fold. Patient smoking 10 cigs/day for 30 years — MUST quit completely. Even passive exposure worsens DR.", duration: "Immediate and lifelong" },
          { intervention: "Diabetes education: Importance of regular glucose monitoring and medication adherence", reasoning: "Patient has poor adherence — takes insulin and amlodipine irregularly. Needs counseling that DR progression is preventable with good control. Home glucose monitoring with glucometer recommended.", duration: "Initial intensive counseling, then reinforced at each visit" },
          { intervention: "Low glycemic index (GI) diet — structured dietary counseling", reasoning: "Current diet is rice-based with high refined carbohydrates. Needs shift to whole grains, fiber-rich foods, legumes. Portion control. Reduce sugar-sweetened beverages.", duration: "Initial 1-hour session with dietitian, then monthly follow-ups" },
          { intervention: "Weight reduction if overweight (Patient appears well-built but no BMI given — calculate)", reasoning: "Weight loss of 5-10% improves insulin sensitivity and reduces DR progression risk", duration: "Gradual loss of 0.5 kg/week" },
          { intervention: "Regular physical activity: 150 minutes/week moderate intensity exercise", reasoning: "Farmer is already active but can increase structured exercise (brisk walking, cycling). Improves glycemic control and cardiovascular health.", duration: "Lifelong" },
          { intervention: "Foot care education — Diabetic neuropathy present so high ulceration risk", reasoning: "Patient has absent ankle jerks and diminished sensation — high risk for foot ulcers. Daily foot inspection, proper footwear, avoid walking barefoot.", duration: "Immediate education and lifelong adherence" },
        ],
        specificRetinalManagement: {
          anti_vegf_protocol: {
            indication: "Clinically Significant Macular Edema (CSME) in both eyes",
            treatment: "Intravitreal anti-VEGF injection (Bevacizumab or Ranibizumab or Aflibercept)",
            dosing: "Monthly (every 4 weeks) for first 3 months, then reassess. If stable, can extend to 8-week intervals or PRN based on OCT findings.",
            criteria_for_retreatment: "Increase in central macular thickness >50 micrometers from prior visit, or decrease in visual acuity, or patient reports vision decline.",
            expectedOutcome: "Regression of macular edema (CMT decrease by 50-100 micrometers), stabilization or improvement of vision",
          },
          laser_photocoagulation: {
            indication: "Consider if: (1) Anti-VEGF not available or patient cannot afford, (2) Anti-VEGF inadequate response, (3) Need for panretinal photocoagulation (PRP) if progression to PDR",
            technique: "Focal laser to leaking microaneurysms and hard exudates within 500 micrometers of fovea. Avoid foveal center. Grid laser if diffuse macular edema.",
            timing: "Can be done concurrently with anti-VEGF or as monotherapy",
          },
          prp_indications: {
            present: "No — not yet. Patient currently NPDR, no neovascularization.",
            future_consideration: "If progresses to PDR (neovascularization disc or elsewhere) or if extensive non-perfusion (>10 disc areas) develops on repeat FFA — PRP urgently indicated",
            technique: "Panretinal photocoagulation with argon laser — covers entire retina except macula with laser burns to cause regression of new vessels",
          },
          cataract_management: {
            finding: "Early cataracts present bilaterally (posterior subcapsular and anterior cortical)",
            current_management: "No intervention needed — visual acuity preserved (6/9 and 6/12). Monitor at each visit for progression.",
            future_cataract_surgery: "When cataract progresses and vision drops to 6/24 or worse (or patient wishes), cataract surgery indicated. Important: MUST stabilize retinopathy (no active edema or neovascularization) BEFORE cataract surgery to avoid intraoperative complications.",
          },
        },
        monitoring: [
          { parameter: "Fasting Blood Sugar (FBS) and HbA1c", frequency: "Every 2-3 months initially (to assess response to treatment), then every 3 months", target: "FBS 100-130 mg/dL, HbA1c <7% (or <8% if high hypoglycemia risk)", escalation: "If HbA1c not improving after 3 months — reassess adherence, consider insulin escalation or additional agents" },
          { parameter: "Blood Pressure", frequency: "Every visit (every 4-6 weeks initially)", target: "SBP 130-140 mmHg, DBP 80-90 mmHg. Stricter control if albuminuria present.", escalation: "If BP remains >150/90 after 4 weeks — increase amlodipine to 10mg and ADD ACE-I (ramipril 5mg)" },
          { parameter: "Lipid Profile", frequency: "Repeat at 6 weeks after statin initiation, then every 3-6 months", target: "LDL <70 mg/dL, HDL >40 mg/dL, TG <150 mg/dL", escalation: "If LDL not at goal — increase statin dose or add ezetimibe" },
          { parameter: "Serum Creatinine and Potassium", frequency: "Every 3-6 months (monitoring for ACE-I effects)", target: "Creatinine stable, K+ <5.5 mEq/L", escalation: "If K+ >5.5 — reduce ACE-I or stop if severe" },
          { parameter: "Urine Microalbumin", frequency: "Every 6-12 months", target: "Regression to <30 mg/g (albumin:creatinine ratio)", escalation: "If worsening (progressing to proteinuria >300 mg/day) — refer to Nephrologist for kidney disease management" },
          { parameter: "Visual Acuity", frequency: "Every visit (every 4-6 weeks initially, then every 2-3 months)", target: "Stable or improved. Left eye currently 6/12 — goal is at least maintenance, ideally improvement to 6/9", escalation: "If vision drops by 2 or more lines (e.g., 6/9 to 6/15) — urgent retinal assessment, may need additional injections" },
          { parameter: "Dilated Fundus Examination", frequency: "Every visit", target: "Monitor for regression of DR, reduction in hemorrhages and hard exudates, improvement of edema", escalation: "If worsening — suggests poor glycemic control or inadequate DR treatment" },
          { parameter: "OCT Macula", frequency: "Every 4 weeks initially (during anti-VEGF treatment), then every 8 weeks if stable, then every 3 months", target: "CMT <250 micrometers (normal), reduction from baseline by >50 micrometers", escalation: "If CMT increases by >50 micrometers or remains static after 3 months of treatment — consider treatment failure, may need PRP or switch therapy" },
          { parameter: "FFA (Fundus Fluorescein Angiography)", frequency: "Every 6-12 months or if clinical worsening", target: "No progression of non-perfused areas, regression of microaneurysms, reduction of macular leakage", escalation: "If non-perfused areas expanding or approaching 10+ disc areas — risk of PDR, urgent referral for PRP consideration" },
          { parameter: "Visual Field Testing", frequency: "Baseline now, then annually", target: "No progressive loss", escalation: "If progression visible — may suggest glaucoma development (common in diabetics), refer to glaucoma specialist" },
        ],
        lifestyle: {
          dos: ["QUIT smoking completely — this is the single most important modifiable risk factor for DR progression", "Maintain strict glycemic control — HbA1c target <7%", "Keep BP <130/80 — use combination therapy if needed", "Maintain LDL cholesterol <70 mg/dL with statins", "Take all medications (insulin, BP, lipid meds) on schedule — no irregular use", "Self-monitor blood glucose at least 2-3 times daily", "Follow low-glycemic diet with whole grains, vegetables, lean protein", "Exercise 150 minutes/week moderate intensity", "Attend regular eye checkups (every 4-6 weeks during active treatment)", "Inspect feet daily for ulcers or cracks — diabetic neuropathy present"],
          donts: ["Do NOT smoke — cessation is non-negotiable for slowing DR", "Do NOT skip insulin doses", "Do NOT eat refined carbohydrates (white rice, white bread, sugary foods) — switch to whole grains", "Do NOT skip follow-up appointments — DR requires close monitoring", "Do NOT delay presenting with vision changes — early intervention prevents blindness", "Do NOT rely on traditional remedies for diabetes — stick to evidence-based medical treatment"],
          indianSpecific: ["Switch from white rice to brown rice or jowar (sorghum) — commonly available in rural India", "Use jaggary (gur) sparingly instead of refined sugar", "Local vegetables (spinach, methi, drumstick leaves) are good for diabetes", "Avoid sugary drinks — plain water or buttermilk (low-fat) are better", "If cannot afford expensive anti-VEGF drugs, government hospitals offer Bevacizumab biosimilars at ₹1,500-2,000/dose", "Laser photocoagulation is freely available at government eye hospitals", "Enroll in government diabetes screening programs for free fundus examinations", "Quit smoking completely — counseling available at government health centers free of cost"],
        },
        followUp: {
          immediate: "Refer to Retina Specialist within 1 week for anti-VEGF or laser planning",
          retinalCare: "Every 4 weeks during anti-VEGF induction phase (3 months), then 8 weeks if stable, then 12 weeks. Annual FFA.",
          endocrinology: "Within 2 weeks of eye visit — optimize diabetes medications. Repeat HbA1c at 3 months.",
          cardiology: "Consider if developing significant CVD risk (elevated troponin, EKG changes) — patient has smoking, HTN, dyslipidemia, PAD signs.",
          nephrology: "At baseline and if albuminuria worsens — microalbuminuria now but must prevent progression to overt proteinuria",
          generalPractitioner: "Every 4 weeks initially to monitor adherence, then every 8 weeks for ongoing management",
        },
        referral: {
          immediate: [
            { to: "Retina Specialist", for: "Macular edema treatment planning (anti-VEGF vs laser)", urgency: "URGENT — within 1 week" },
            { to: "Endocrinologist", for: "Glycemic control optimization (HbA1c target <7%)", urgency: "URGENT — within 2 weeks" },
            { to: "Cardiologist", for: "CVD risk assessment (smoking, PAD, dyslipidemia signs)", urgency: "URGENT" },
          ],
          followUp: [
            { to: "Nephrologist", for: "Microalbuminuria management (prevent progression)", urgency: "Soon — within 4 weeks" },
            { to: "Counselor/Smoking Cessation", for: "Behavioral support for smoking cessation", urgency: "URGENT" },
          ],
        },
      },
      redFlags: [
        { flag: "Sudden vision loss (especially if floaters/flashes precede loss)", action: "Vitreous hemorrhage — bleeding from new vessels. Urgent retinal ultrasound (B-scan). Possible need for vitrectomy.", urgency: "EMERGENT" },
        { flag: "Vision loss with shadow in superior or lateral visual field", action: "Rhegmatogenous retinal detachment. Urgent retinal surgery consultation (vitreoretinal surgeon).", urgency: "EMERGENT" },
        { flag: "Neovascularization visible on exam (new vessels on disc or elsewhere)", action: "Progression to Proliferative DR. URGENT panretinal photocoagulation (PRP) within 48-72 hours. Risk of vitreous hemorrhage, neovascular glaucoma.", urgency: "EMERGENT" },
        { flag: "Rapid worsening of macular edema despite anti-VEGF (CMT increasing by >100 micrometers/month)", action: "May indicate refractory edema. Consider switching anti-VEGF agent, adding steroid injection, or PRP if neovascularization present.", urgency: "URGENT" },
        { flag: "HbA1c remains >9% after 3 months of treatment optimization", action: "Poor glycemic control — major driver of DR progression. Intensify diabetes management. Consider hospitalization for insulin initiation/titration.", urgency: "URGENT" },
        { flag: "Development of new-onset eye pain or photophobia", action: "May indicate anterior uveitis or glaucoma. Examine closely. Check IOP. Do not confuse with DR alone.", urgency: "URGENT" },
      ],
      keyLearningPoints: [
        "Diabetic retinopathy is the LEADING CAUSE OF BLINDNESS in working-age adults (20-64) in developed countries — same trend emerging in India",
        "Glycemic control (HbA1c <7%) is the MOST important modifiable factor to slow DR progression — more important than individual drugs",
        "Anti-VEGF injections are now FIRST-LINE for diabetic macular edema — superior to laser alone in improving vision",
        "Smoking DOUBLES the rate of DR progression — counsel all diabetics to quit, not just reduce",
        "Microalbuminuria indicates both kidney disease AND increased DR severity — ACE-I/ARB are essential in this patient",
        "Diabetic patients should have annual dilated eye exams starting at diagnosis (Type 2) or 5 years after diagnosis (Type 1)",
        "Classification: Mild NPDR (hemorrhages <5 per quadrant), Moderate NPDR (hemorrhages in 1 quadrant or venous beading), Severe NPDR (>2 quadrants with hemorrhages/microaneurysms OR 4-quadrant venous beading OR 1-quadrant IRMA), PDR (neovascularization)",
        "Clinically Significant Macular Edema (CSME) = macular thickening within 500 micrometers of fovea OR hard exudates within 500 micrometers of fovea = needs treatment",
        "India has highest DR burden globally due to large diabetes population — government screening programs essential",
      ],
      commonMistakes: [
        "Waiting for symptoms before screening — DR is asymptomatic in early stages. By the time patient has vision loss, damage is irreversible.",
        "Assuming laser alone is sufficient for macular edema — anti-VEGF is now preferred as first-line, offers better vision outcomes than laser monotherapy",
        "Not optimizing blood pressure and lipids alongside glycemic control — all three are necessary to slow DR",
        "Not addressing smoking — single most modifiable risk factor that patients often forget",
        "Not counseling on medication adherence — patient with HbA1c 9.2% on insulin suggests non-adherence, not inadequate drug",
        "Missing microalbuminuria or assuming it will resolve spontaneously — needs ACE-I/ARB to prevent progression to kidney disease",
        "Not referring to endocrinology — many ophthalmologists manage the eye but diabetes control is primary responsibility of endocrinologist",
        "Giving up too early if first anti-VEGF injection doesn't work completely — DME often requires repeated injections over months",
        "Not considering cataract surgery timing properly — must stabilize retinopathy first to avoid intraoperative ischemia",
      ],
      relevantHistoryQs: ["diabetes_duration", "hba1c_previous", "medications_adherence", "complications_yes", "hypertension", "smoking", "family_blindness", "vision_changes", "neuropathy_symptoms", "previous_eye_exam"],
      relevantExamIds: ["visual_acuity", "anterior_chamber", "cataracts_presence", "dilated_fundus", "hemorrhages", "microaneurysms", "hard_exudates", "cotton_wool_spots", "optic_disc", "macular_edema"],
      difficulty: "MODERATE",
      estimatedMinutes: 22,
      subjectTags: ["OP", "IM"],
      examRelevance: ["NEXT_STEP1", "NEET_PG", "CLINICAL_EXAM"],
      nmcCompetencyCode: "OP2.1",
      maxScore: 100,
      passingScore: 60,
    },
  },
];
