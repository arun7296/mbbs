import type { TopicLessons } from "./content-loader";

export const radiologyGapLessons: TopicLessons[] = [
  {
    topicCode: "RD-MOD-04-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "interventional-radiology-foundation",
        title: "Interventional Radiology - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of image-guided procedures, biopsy, drainage, embolization fundamentals.",
        contentMd: `# Interventional Radiology - Foundation
## Image-Guided Basics
- Fluoroscopy: live X-ray guidance for vascular, biliary procedures
- Ultrasound: real-time, portable, needle visualization in-plane
- CT: cross-sectional, accurate for deep lesions, multiple passes
## Biopsy Procedures
- FNA 22-25G: cytology, 85-90% accuracy
- Core needle 18-20G: tissue architecture, 95-99% accuracy
- Approaches: transthoracic (lung), transabdominal (liver/kidney/pancreas), transrectal (prostate), breast
## Drainage
- Abscess: catheter placement, culture, pressure relief, output monitoring
- Biliary: PTC for malignant obstruction, bilioenteric stent
- Nephrostomy: posterior calyx access for ureteral obstruction
## Embolization
- Agents: coils (permanent), particles (temporary), liquid NBCA (permanent)
- Selective branch catheterization; preserve organ function`,
        mnemonics: [
          { text: "IMAGE guidance = fluoroscopy + US + CT + real-time = accuracy key", explanation: "Modality selection" },
          { text: "BIOPSY = FNA 22-25G cytology vs core 18-20G tissue = trade accuracy vs safety", explanation: "Needle choice" },
          { text: "DRAINAGE = catheter stays + culture + imaging follow-up + output monitor = therapeutic", explanation: "Management" },
          { text: "EMBOLIZATION = selective branch only = preserve organ = permanent vs temporary agents", explanation: "Principle" }
        ],
        keyPoints: [
          "Image-guided procedures: real-time ultrasound most accurate",
          "Biopsy complication rate <5%; tissue diagnosis critical for treatment planning",
          "Drainage: catheter relief + therapeutic aspiration; follow-up imaging confirms position",
          "Embolization: selective branch vessel targeting preserves organ function",
          "India context: urban tertiary centers; fluoroscopy standard; expertise growing"
        ],
        textbookRefs: [
          { book: "Interventional Radiology: A Survival Guide", chapter: "Core Procedures", edition: "4th" },
          { book: "Grainger & Allison's Diagnostic Radiology", chapter: "Interventional Techniques", edition: "7th" }
        ]
      },
      {
        layer: 2,
        slug: "interventional-radiology-mechanism",
        title: "Interventional Radiology - Mechanism",
        estimatedMinutes: 25,
        summary: "Needle mechanics, guidance physiology, complication pathways, hemostasis, embolization thrombosis.",
        contentMd: `# Interventional Radiology - Mechanism
## Ultrasound Guidance
- In-plane: needle parallel to beam, entire length visualized, tip position clear
- Out-of-plane: perpendicular approach, faster needle advancement
- Color Doppler: identifies vessels, prevents puncture
## CT Guidance Mechanics
- Scout imaging identifies target; measure distance from surface to lesion center
- Calculate angle, depth; mark skin entry point
- Repeat CT every 1-2 cm needle advancement to confirm position
- Advantage: deep lesions, complex anatomy; disadvantage: radiation, slower than real-time
## Biopsy Mechanics
- FNA 22-25G: suction applied, cells aspirated, cytology (85-90% accuracy)
- Core 18-20G: spring-loaded, tissue cylinder obtained (3-6 passes), histopathology (95-99% accuracy)
- Complications: hemorrhage (most common), pneumothorax (lung), infection, seeding (rare)
## Drainage Physiology
- Abscess: walled-off infection, pressure relief via catheter, culture guides antibiotics
- Biliary: tumor blocks bile duct, cholestasis; PTC catheter across stricture
- Nephrostomy: hydronephrosis relief, urine output initially high, normalize over days
## Embolization Thrombosis
- Coils: mechanical occlusion, thrombosis cascade initiation on coil surface
- Particles: distal penetration, temporary ischemia (allows collaterals)
- NBCA liquid: polymerizes on blood contact, permanent; risk uncontrolled distal occlusion`,
        mnemonics: [
          { text: "ULTRASOUND in-plane = entire needle visualized = tip clarity = highest accuracy", explanation: "Technique" },
          { text: "CT guided = scout + measure + angle + depth + repeat scan = slow but accurate", explanation: "Mechanics" },
          { text: "BIOPSY complications = hemorrhage > pneumothorax > infection, <5% major", explanation: "Risk profile" },
          { text: "EMBOLIZATION = coils permanent + mechanical, particles temporary, NBCA permanent + risky", explanation: "Agent comparison" }
        ],
        keyPoints: [
          "US in-plane guidance: needle entire length visualized; highest accuracy",
          "CT guidance: calculate angle/depth; repeat scans confirm needle position; slower but accurate",
          "FNA cytology 85-90%; core needle tissue 95-99%; tissue architecture preservation matters",
          "Drainage complications: hemorrhage <5%; infection rare with sterile technique",
          "Embolization: coils/NBCA permanent; particles temporary; selective branch targeting critical"
        ],
        textbookRefs: [
          { book: "Vascular and Interventional Radiology", chapter: "Techniques and Physiology", edition: "3rd" },
          { book: "Interventional Radiology: A Survival Guide", chapter: "Complications and Management", edition: "4th" }
        ]
      },
      {
        layer: 3,
        slug: "interventional-radiology-clinical",
        title: "Interventional Radiology - Clinical",
        estimatedMinutes: 25,
        summary: "Clinical protocols: biopsy techniques, drainage management, embolization procedures, Indian practice context.",
        contentMd: `# Interventional Radiology - Clinical
## Ultrasound-Guided Biopsy Protocol
1. Prep: sterile field, local anesthesia, patient positioned
2. Transducer in-plane: visualize target lesion + needle path
3. Advance needle under direct visualization to lesion
4. Confirm position: needle tip at lesion center
5. FNA: 5-10 passes with suction; spread on slides
6. OR core needle: 3-6 passes with spring-loaded device
7. Withdraw; apply pressure 5 min; bandage
## CT-Guided Lung Biopsy
1. Scout CT: identify lesion, measure depth from body surface
2. Mark skin entry point with marking pen
3. Calculate needle angle to lesion: arctan(lateral distance/depth)
4. Local anesthesia; make small skin incision (prevents track dilation)
5. Advance needle to predetermined depth (depth = surface to lesion distance)
6. Repeat CT after each 1 cm advancement to confirm position
7. Once needle tip at lesion: obtain core/FNA samples
8. Withdraw; post-op CXR (assess pneumothorax risk)
## Abscess Drainage Technique
1. Imaging: US/CT identify collection; measure size, location
2. Route: safest path avoiding organs/major vessels
3. Needle aspiration: 18-22G needle, confirm purulent fluid
4. Catheter placement: Seldinger technique (guide wire → dilators → pigtail catheter)
5. Catheter fixation: suture to skin; side holes prevent occlusion
6. Fluid analysis: culture/sensitivity (guide antibiotics), chemistry
7. Follow-up: repeat imaging at 48-72 hrs; assess collection shrinkage
8. Removal: when output <10-20 mL/day × 2 days, no fever, clinical improvement
## Percutaneous Transhepatic Cholangiography (PTC)
- Indication: malignant/benign biliary obstruction, cholangitis risk
- Technique: Needle through liver parenchyma into dilated intrahepatic duct
- Guidewire advancement: cross stricture into duodenum
- Stent placement: plastic (temporary, frequent clogging) vs SEMS (permanent, expensive)
- Outcome: bilirubin ↓ over 1-2 weeks; repeat imaging confirms stent position
## Embolization Procedure
1. Arterial access: femoral artery (most common), radial alternative
2. Catheterization: guide wire into target vessel branches
3. Selective catheter positioning: distal to lesion, proximal to normal tissue
4. Embolization agent:
   - Coils: mechanical lock 100%, instant occlusion, permanent
   - Particles: gelfoam (temporary 4-6 weeks), microspheres (biodegradable)
   - NBCA: liquid adhesive, polymerizes instantly, high-risk uncontrolled polymerization
5. Post-embolization: angiography confirms occlusion, checks collateral flow
6. Recovery: monitor access site for hematoma; anticoagulation prophylaxis if prolonged bed rest
## India-Specific Context
- GI hemorrhage embolization: peptic ulcer (UGIB) most common
- Biliary drainage: cholangiocarcinoma endemic; malignant obstruction frequent
- Abscess drainage: TB-related (tuberculous peritonitis), appendicitis, diverticulitis
- Access: femoral preferred (familiar to radiologists); radial less common
- Cost: drives percutaneous drainage choice over surgery; cheaper long-term`,
        mnemonics: [
          { text: "US-guided biopsy = in-plane visualization + needle advancement + FNA 5-10 passes OR core 3-6", explanation: "Protocol" },
          { text: "CT lung biopsy = scout → mark skin → calculate angle/depth → needle advance → repeat CT → sample", explanation: "Step sequence" },
          { text: "ABSCESS drainage = Seldinger (guide wire path) → catheter stays → culture → imaging follow-up → remove when output <10-20", explanation: "Technique" },
          { text: "PTC = hepatic puncture → cross stricture → stent (plastic temporary vs SEMS expensive)", explanation: "Biliary relief" },
          { text: "EMBOLIZATION = selective branch → coils instant permanent vs particles temporary vs NBCA risky", explanation: "Agent selection" }
        ],
        keyPoints: [
          "US biopsy: in-plane guidance most accurate; FNA 5-10 passes or core 3-6 passes",
          "CT lung biopsy: calculate angle/depth; repeat CT confirms position; post-op CXR essential",
          "Abscess: Seldinger technique safer; catheter output 10-20 mL/day removal threshold",
          "PTC: plastic stent cheap but needs exchange q3-4 months; SEMS longer patency but expensive",
          "Embolization: selective branch catheterization preserves organ function; coils permanent safe choice",
          "India: GI hemorrhage, cholangiocarcinoma, TB-related drainage common indications"
        ],
        textbookRefs: [
          { book: "Interventional Radiology: A Survival Guide", chapter: "Clinical Protocols", edition: "4th" },
          { book: "Vascular and Interventional Radiology", chapter: "Procedures in India", edition: "3rd" }
        ]
      },
      {
        layer: 4,
        slug: "interventional-radiology-exam-prep",
        title: "Interventional Radiology - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield comparison tables, complications, common exam questions.",
        contentMd: `# Interventional Radiology - Exam Prep
## Biopsy Comparison
| Technique | Needle | Accuracy | Time | Complications | Best Use |
|-----------|--------|----------|------|--------------|----------|
| FNA | 22-25G | 85-90% | Fast | Minimal | Cytology, screening |
| Core needle | 18-20G | 95-99% | Moderate | Slight bleed | Tissue diagnosis |
## Drainage Indications
| Type | Indication | Approach | Catheter | Follow-up |
|------|-----------|----------|----------|-----------|
| Abscess | Infected collection | US/CT | Pigtail stay | Culture, imaging |
| Biliary | Malignant obstruction | PTC | Stent | Bilirubin trend |
| Nephrostomy | Ureteral obstruction | US/CT | Pigtail | Output, imaging |
## Embolization Agents
| Agent | Type | Onset | Duration | Risk |
|-------|------|-------|----------|------|
| Coils | Mechanical | Instant | Permanent | None |
| Gelfoam | Particles | Min | 4-6 weeks | Recanalization |
| NBCA | Liquid | Instant | Permanent | Uncontrolled polymerization |
## High-Yield Facts
- US-guided > CT-guided > fluoroscopy for accuracy (real-time advantage)
- Lung biopsy: pneumothorax risk 20-30%; post-op CXR mandatory
- Abscess removal: output threshold 10-20 mL/day
- Biliary PTC: plastic stent q3-4 mo exchange; SEMS longer
- Embolization selective: branch vessels only, preserve main trunk
- India: cholangiocarcinoma, peptic ulcer GIB, TB abscess common`,
        mnemonics: [
          { text: "BIOPSY = FNA fast/safe 85-90% vs core tissue 95-99% = choose accuracy needed", explanation: "Selection" },
          { text: "LUNG biopsy = 20-30% pneumothorax = post-op CXR mandatory = manage if symptomatic", explanation: "Complication" },
          { text: "ABSCESS = remove when output <10-20 mL/day = culture guides antibiotics = clinical improvement needed", explanation: "Removal criteria" },
          { text: "EMBOLIZATION = selective branch = coils safest permanent = particles temporary = NBCA risky instant", explanation: "Agent strategy" }
        ],
        keyPoints: [
          "US-guided most accurate due to real-time visualization",
          "Core needle 95-99% vs FNA 85-90%; choose based on diagnostic need",
          "Lung biopsy: 20-30% pneumothorax; post-op CXR mandatory",
          "Abscess: catheter output 10-20 mL/day threshold for removal",
          "Biliary: plastic stent cheaper but needs exchange; SEMS longer but expensive",
          "Embolization: coils best first-line; particles temporary; NBCA liquid risky"
        ],
        textbookRefs: [
          { book: "Pocket Guide to Interventional Radiology", chapter: "Quick Reference", edition: "2nd" }
        ]
      },
      {
        layer: 5,
        slug: "interventional-radiology-active-recall",
        title: "Interventional Radiology - Active Recall",
        estimatedMinutes: 10,
        summary: "Clinical scenarios: biopsy complications, drainage management, embolization decisions.",
        contentMd: `# Interventional Radiology - Active Recall
## Q1: Lung Biopsy Pneumothorax
Scenario: 58yo lung nodule, CT biopsy performed. Post-op CXR shows 15% pneumothorax, patient asymptomatic, SpO2 95%. Management?

Answer: Observation. Spontaneous pneumothorax <2cm from chest wall in asymptomatic patient: observe 6-24 hours, repeat CXR. Most resorb spontaneously. Supplemental O2 (FiO2 100%) increases absorption rate. If symptomatic (dyspnea) or expanding → needle decompression or chest tube. This small pneumothorax expected risk; no intervention needed.

## Q2: Abscess Drainage Output
Scenario: Appendicitis abscess drained 48 hours ago. Output day 1 = 150mL, day 2 = 50mL. Patient afebrile, feels better, imaging shows smaller collection. Can remove catheter?

Answer: NOT YET. Standard removal criterion: output <10-20 mL/day × 2 consecutive days. Day 2 is 50 mL (still above threshold). Continue drain 1-2 more days, recheck output. Premature removal risks reaccumulation. Also: culture already sent? Antibiotic coverage based on sensitivities. Repeat imaging before removal to confirm adequate shrinkage.

## Q3: Core Needle Biopsy Decision
Scenario: Liver mass, differential hepatocellular carcinoma vs benign. FNA cytology scheduled. Is this sufficient?

Answer: NO. FNA cytology 85-90% accuracy; misses benign lesions (architecture not seen). Core needle 95-99% with tissue architecture = better characterization HCC vs benign. For liver lesion diagnosis-critical decision (HCC affects staging/treatment), core needle better. Use core biopsy.

## Q4: Embolization Agent Choice
Scenario: Bleeding duodenal ulcer, angiography shows bleeding vessel. Plan embolization. Coils vs gelfoam? Discuss.

Answer: Coils preferred. Permanent occlusion needed for peptic ulcer (high rebleeding risk with temporary agents). Gelfoam temporary (4-6 weeks) → risk rebleeding in 2 weeks when absorbed. Coils: permanent, safe mechanical occlusion, no risk recanalization. NBCA liquid risky (uncontrolled). Coils best choice for this indication.

## Q5: Biliary Stent Type
Scenario: Malignant biliary obstruction from cholangiocarcinoma, obstructive jaundice, bilirubin 12. Need stent. Patient has limited funds. Plastic vs SEMS?

Answer: Plastic stent initially (cost). Plastic: cheaper, requires exchange q3-4 months (outpatient procedure), frequent clogging risk. SEMS: 3-4× cost, longer patency (1-2+ years), metal may risk further obstruction if malignancy grows. In India with cost constraints: plastic stent reasonable, plan follow-up endoscopy/PTC for exchange. If patient can afford: SEMS longer patency, fewer interventions.

## Q6: CT-Guided Biopsy Depth Calculation
Scenario: Pancreatic mass 8cm from body surface (measured on CT scout). Calculate needle insertion depth for biopsy.

Answer: Insertion depth = distance to target. Needle advanced 8cm from marked skin point = needle tip reaches lesion center. Advance in 1cm increments; repeat CT after each cm to confirm position. Once tip at lesion: obtain samples. This prevents over-insertion or under-insertion; staged advancement safer.

## Q7: US-Guided Biopsy Complication
Scenario: Liver biopsy under ultrasound, needle advanced in-plane. Suddenly bright echogenic streak appears (acoustic artifact). Needle still visible?

Answer: Likely needle partially withdrawn or deflected. The streak = cavitation (gas bubble from probe heating at needle tip, rare). Reposition transducer; visualize needle tip directly. If tip not visible: withdraw, reposition, reattempt. Never sample blind; confirm needle tip at lesion first.

## Q8: Drainage Catheter Occlusion
Scenario: Pelvic abscess drain placed 3 days ago. Suddenly output drops to 5mL (was 50mL), no fever, imaging unclear. Possible causes?

Answer: Catheter occlusion (most likely). Check: (1) Kink in catheter tubing, (2) Catheter side holes clogged with debris, (3) Catheter tip adhered to collection wall. Management: (1) Straighten tubing, (2) Flush with 10-20mL saline gently (NOT forcefully → risk abscess rupture), (3) Repeat imaging (ultrasound good for catheter position check), (4) If persistent: catheter exchange OR percutaneous needle re-drainage to confirm collection still present.

## Q9: PTC Guidewire Advancement
Scenario: Malignant biliary obstruction, needle through liver, contrast injection shows stricture. Guidewire placed but won't cross stricture into duodenum. Next step?

Answer: Do NOT force (risk perforation). Options: (1) Change wire (hydrophilic wire slides easier), (2) Tandem catheter technique (second catheter over first to provide support), (3) Dilate stricture first with balloon before stent (risky in malignancy), (4) Accept external drainage (catheter left draining to external bag, not stent across lesion). In malignancy: sometimes stent placement fails; external drainage temporary solution, definitive treatment (bypass surgery, chemotherapy) addressed separately.

## Q10: Embolization Coil Thrombosis
Scenario: AVM embolization with coils, angiography shows coils in place. At 1 week post-embolization, rebleeding occurs. Coils shouldn't clot? What happened?

Answer: Coil thrombosis mechanism: coil placement initiates blood contact → clotting cascade → thrombus formation around coil. Takes 7-14 days for complete thrombosis. Rebleeding at 1 week = incomplete thrombosis (rare) or collateral vessel development through AVM (more common). Management: (1) Repeat angiography to identify rebleeding source, (2) Additional coils if main vessel incomplete occlusion, (3) Assess collaterals feeding AVM (may need additional embolization branches). Monoplane coil deployment (not complex packed coils) → risks incomplete thrombosis.`,
        mnemonics: [
          { text: "PNEUMOTHORAX <2cm asymptomatic = observation + O2 = spontaneous resorption = no tube needed", explanation: "Conservative management" },
          { text: "ABSCESS remove = output <10-20 mL/day × 2 days = culture-based antibiotics = imaging shrinkage", explanation: "Removal criteria" },
          { text: "BIOPSY tissue diagnosis = core needle 95-99% >> FNA 85-90% = tissue architecture matters", explanation: "Accuracy" },
          { text: "PEPTIC ulcer bleeding = coils permanent safe >> gelfoam temporary >> NBCA risky", explanation: "Indication-specific" },
          { text: "BILIARY stent = plastic cheap/frequent exchange vs SEMS longer/expensive = cost-benefit", explanation: "Choice factors" }
        ],
        keyPoints: [
          "Lung biopsy pneumothorax <20% asymptomatic: observe, O2, repeat CXR",
          "Abscess output threshold: <10-20 mL/day × 2 days before removal",
          "Core needle always better tissue diagnosis vs FNA for diagnostic clarity",
          "Embolization: coils best for permanent; gelfoam for temporary; NBCA risky",
          "PTC guidewire: hydrophilic wire easier crossing; tandem catheter for support",
          "Coil thrombosis: 7-14 days for complete; rebleeding may indicate collaterals"
        ],
        textbookRefs: [
          { book: "Interventional Radiology: A Survival Guide", chapter: "Clinical Problem-Solving", edition: "4th" }
        ]
      }
    ]
  }
];
,
  {
    topicCode: "RD-MOD-01-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "radiation-safety-aerb-foundation",
        title: "Radiation Safety & AERB Guidelines - Foundation",
        estimatedMinutes: 20,
        summary: "Radiation physics basics, biological effects, AERB regulations, dose limits, protection principles for patients and healthcare workers.",
        contentMd: `# Radiation Safety & AERB Guidelines - Foundation
## Radiation Physics Basics
- Ionizing radiation: X-rays, gamma rays create charged particles in tissue
- Dose: Absorbed dose (Gray Gy), Effective dose (Sievert Sv, accounts tissue sensitivity)
- Dose rate: Important for repair capability
## Biological Effects
- Stochastic (random): cancer, mutation (no safe threshold, probability-based)
- Deterministic (threshold-based): cataracts, burns, sterility (requires minimum dose)
## AERB Regulations (Atomic Energy Regulatory Board - India)
- Occupational limit: 20 mSv/year averaged, 50 mSv single year
- Public limit: 1 mSv/year
- Patient: no limit (justified by benefit); as low as reasonably achievable (ALARA)
- Pregnant worker: 1 mSv during pregnancy
## Dose Limits by Tissue
- Lens of eye: 20 mSv/year (cataract risk)
- Skin: 500 mSv/year (burn threshold much higher)
- Extremities: 500 mSv/year
## Protection Principles
- Justification: procedure benefit exceeds radiation risk
- Optimization: use minimum dose achieving diagnostic/therapeutic goal
- Dose limitation: follow regulatory limits`,
        mnemonics: [
          { text: "AERB occupational = 20 mSv/year average, 50 mSv single year, pregnant 1 mSv total", explanation: "India limits" },
          { text: "STOCHASTIC = cancer/mutation = no safe threshold = probability increases with dose", explanation: "No threshold harm" },
          { text: "DETERMINISTIC = cataracts/burns = threshold 20 mSv lens, 500 mSv skin = above this occurs", explanation: "Threshold effects" },
          { text: "ALARA = As Low As Reasonably Achievable = justify + optimize + limit = three principles", explanation: "Protection strategy" }
        ],
        keyPoints: [
          "AERB occupational limit: 20 mSv/year average; pregnant worker 1 mSv total",
          "Stochastic effects (cancer, mutation) have no safe threshold; risk increases with dose",
          "Deterministic effects (cataracts, burns) require threshold dose; <20 mSv lens safe",
          "ALARA principle: Justification (benefit>risk), Optimization (minimum dose), Limitation (follow limits)",
          "Patient dose: no regulatory limit; benefit justifies exposure; minimize unnecessary imaging"
        ],
        textbookRefs: [
          { book: "Radiobiology for the Radiologist", chapter: "Radiation Protection", edition: "8th" },
          { book: "AERB Guidelines", chapter: "Safety Code", edition: "2020" }
        ]
      },
      {
        layer: 2,
        slug: "radiation-safety-aerb-mechanism",
        title: "Radiation Safety & AERB Guidelines - Mechanism",
        estimatedMinutes: 25,
        summary: "Dose calculation, radiation protection mechanisms, hazard pathways, contamination control, regulatory compliance mechanisms.",
        contentMd: `# Radiation Safety & AERB Guidelines - Mechanism
## Dose Calculation
- Entrance skin dose (ESD): radiation at skin surface
- Effective dose: organ sensitivity weighted (mSv); thyroid 0.05, lung 0.12, gonads 0.2
- CT dose index (CTDI): standard CT phantom measurement
- Dose length product (DLP): DLP = CTDI × scan length; allows dose comparison across scanners
## Radiation Protection Mechanisms
- Time: reduce exposure duration (shorter fluoroscopy time, optimize imaging protocol)
- Distance: increase distance from source (inverse square law: dose ∝ 1/distance²)
- Shielding: lead aprons (0.5mm lead = 90% X-ray attenuation), thyroid collars, lead glasses
## Hazard Pathways
- External exposure: X-rays, gamma (shielding protective)
- Internal contamination: radioactive material ingestion/inhalation (dose internal)
- Contamination control: prevent spread via decontamination, waste segregation
## AERB Compliance Mechanisms
- Area radiation survey: baseline mapping dose rates (identify hot spots)
- Personal dosimetry: badge monitoring occupational exposure (TLD, electronic badges)
- Dose audit: periodic review procedures (CT DLP, fluoroscopy dose); compare benchmarks
- Training: safety protocol, emergency procedures (spill handling, evacuation)
## Regulatory Documentation
- Safety protocols written (radiation protection plan, emergency procedures)
- Equipment maintenance: calibration, QA testing (ensure output accurate)
- Waste disposal: radioactive waste segregation (decay-in-storage, licensed disposal)
- Incident reporting: overexposure/accident documentation (AERB notification)`,
        mnemonics: [
          { text: "DOSE calculation = ESD entrance skin, effective weighted by organ, CTDI/DLP for CT", explanation: "Measurement types" },
          { text: "PROTECTION = Time (short exposure) + Distance (far from source) + Shielding (lead)", explanation: "TDS principle" },
          { text: "AERB compliance = survey baseline + personal dosimetry + audit dose + training + documentation", explanation: "Program components" },
          { text: "CONTAMINATION = external safe with shielding, internal dangerous → prevent ingestion/inhalation", explanation: "Hazard distinction" }
        ],
        keyPoints: [
          "Dose measurement: ESD (skin), effective dose (organ-weighted, mSv), CTDI/DLP (CT)",
          "Protection: Time reduction (optimize protocols), Distance (inverse square law), Shielding (0.5mm lead 90% attenuation)",
          "AERB compliance: baseline survey, personal dosimetry, periodic audits, training, documentation",
          "Contamination: external (shielding protective) vs internal (ingestion/inhalation risky)",
          "Lead aprons 0.5mm attenuation ~90% X-rays; thyroid collar critical for occupational protection"
        ],
        textbookRefs: [
          { book: "Diagnostic Radiology Physics", chapter: "Radiation Protection Dosimetry", edition: "IAEA" },
          { book: "AERB Safety Manual", chapter: "Dose Assessment", edition: "2020" }
        ]
      },
      {
        layer: 3,
        slug: "radiation-safety-aerb-clinical",
        title: "Radiation Safety & AERB Guidelines - Clinical",
        estimatedMinutes: 25,
        summary: "AERB compliance protocols, personal protection practices, patient communication, pregnancy management, emergency procedures.",
        contentMd: `# Radiation Safety & AERB Guidelines - Clinical
## AERB Compliance Protocol
1. **Baseline area survey**: Map radiation dose rates (identify hot spots >background)
2. **Personal dosimetry**: Issue TLD/electronic badges; monthly monitoring
3. **Shielding maintenance**: Check lead aprons (no tears/cracks), thyroid collars, glasses
4. **Equipment QA**: Validate X-ray output accuracy (annually, post-repair)
5. **Dose audit**: Monthly review fluoroscopy/CT doses vs benchmarks; identify outliers
6. **Training records**: Annual safety training, emergency procedures, new staff orientation
7. **Incident reporting**: Document any overexposure (notify AERB if threshold exceeded)
## Personal Protection Practices
- Lead apron 0.5mm standard (protects trunk, not limbs; remove between procedures to reduce fatigue)
- Thyroid collar: critical protective device (thyroid sensitive; 0.05 effective dose per organ)
- Lead glasses: protect lens (cataract threshold 20 mSv; cumulative occupational risk)
- Gloves: minimal X-ray attenuation; mainly contamination prevention
- Time management: minimize fluoroscopy/interventional time (inverse relationship exposure-duration)
## Patient Communication
- Inform: explain procedure necessity, radiation involved (lay terms, not scare)
- Risk vs benefit: diagnostic benefit outweighs stochastic cancer risk in most cases
- Pregnancy: ask all women childbearing age (fetal dose <1 mSv below threshold, usually safe)
- Contrast reaction: discuss iodine allergy history before contrast injection
## Pregnancy Management
- Fetal radiation threshold: ~50-100 mGy organogenesis risk; typical diagnostic <1 mSv (safe)
- Occupied vs unoccupied uterus: dose calculation depends placental position
- Common imaging: CXR <0.01 mSv (safe), abdominal X-ray 1-3 mSv (usually safe), CT abdomen 10-25 mSv (borderline, justify)
- If exposure >5 mSv: fetal dose assessment by physicist; consultation with obstetrics
## Emergency Procedures (AERB mandated)
**Spill Response**:
1. Evacuate area (post "Danger Radioactive Material" sign)
2. Identify contamination: survey meter detect hot spots
3. Contain: use absorbent sheets, prevent spread
4. Decontamination: wash with soap/water, recheck survey
5. Report: notify radiation safety officer; AERB if significant (>reportable threshold)

**Overexposure Response**:
1. Document: identify individual, dose received, circumstances
2. Medical evaluation: assess symptoms (>100 mSv whole body → acute syndrome possible)
3. Counseling: explain risk (stochastic, not deterministic at diagnostic doses)
4. Notification: AERB report if occupational limit exceeded
5. Follow-up: dosimetry review, retraining as needed
## India-Specific Context
- AERB oversight increasing but tier-2/3 compliance variable
- Fluoroscopy dose audit: not always performed; benchmark comparison rare
- Personal dosimetry: urban centers consistent; rural often absent
- Pregnant worker protection: advocacy improving, but awareness gaps remain
- Contrast allergy: iodine prevalence higher in iodine-deficient regions; screen carefully`,
        mnemonics: [
          { text: "AERB protocol = baseline survey + personal dosimetry + QA + dose audit + training + incident report", explanation: "Compliance checklist" },
          { text: "LEAD protection = 0.5mm apron (trunk only) + thyroid collar (critical) + glasses (cumulative lens risk)", explanation: "Protection hierarchy" },
          { text: "PREGNANCY fetal dose = <1 mSv diagnostic safe, <5 mSv usual safe, >5 mSv assess by physicist", explanation: "Risk thresholds" },
          { text: "SPILL response = evacuate → survey → contain → decontaminate → report → document", explanation: "Emergency sequence" }
        ],
        keyPoints: [
          "AERB compliance: baseline survey, personal dosimetry, QA, dose audit, training, incident reporting",
          "Personal protection: lead apron 0.5mm, thyroid collar (critical), glasses, minimal time exposure",
          "Patient communication: justify benefit, explain risk, ask pregnancy/iodine allergy",
          "Pregnancy: typical diagnostic <1 mSv safe; borderline CT 10-25 mSv needs physicist assessment",
          "Spill/overexposure: evacuate, survey, contain, decontaminate, report AERB if threshold exceeded",
          "India: compliance variable; urban centers better; rural/tier-2 gaps exist"
        ],
        textbookRefs: [
          { book: "AERB Radiation Protection", chapter: "Clinical Protocols", edition: "2020" },
          { book: "Diagnostic Radiology Physics", chapter: "Patient and Occupational Dosimetry", edition: "IAEA" }
        ]
      },
      {
        layer: 4,
        slug: "radiation-safety-aerb-exam-prep",
        title: "Radiation Safety & AERB Guidelines - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield dose values, AERB limits, protection quick reference, common exam questions.",
        contentMd: `# Radiation Safety & AERB Guidelines - Exam Prep
## AERB Limits Quick Reference
| Exposure | Limit (mSv/year) | Notes |
|----------|-----------------|-------|
| Occupational average | 20 | Averaged over 5 years |
| Occupational single year | 50 | Can exceed 20 if average ≤20 |
| Pregnant worker | 1 | Total during pregnancy |
| Public | 1 | Annual general public |
| Patient | No limit | Justified by benefit |

## Radiation Dose Examples
- CXR: 0.1 mSv
- CT chest: 7-8 mSv
- CT abdomen: 10-15 mSv
- Fluoroscopy (1 min): 0.5-2 mSv
- Angiography: 5-10 mSv (procedure-dependent)

## Organ Effective Dose Coefficients
- Thyroid: 0.05 (most sensitive)
- Lung: 0.12
- Breast: 0.12
- Gonads: 0.20
- Colon: 0.06

## Protection Principles
- **Justification**: Medical benefit outweighs risk
- **Optimization**: ALARA (As Low As Reasonably Achievable)
- **Limitation**: Follow AERB limits

## Dose Limit Thresholds
- Stochastic: no threshold (cancer risk probability-based)
- Lens cataract: 20 mSv (deterministic threshold)
- Skin erythema: 200 mSv (deterministic threshold)
- Acute syndrome (whole body): >100 mSv (immediate effects)

## High-Yield Facts
- Pregnant worker: 1 mSv total; fetal dose <1 mSv diagnostic safe
- Fluoroscopy dose: proportional to time; minimize by optimization
- Lead shielding 0.5mm attenuation: ~90% X-rays, negligible gamma
- Personal dosimetry: TLD (passive), electronic (real-time); measure effective dose
- AERB registration: required for all radiologic facilities India`,
        mnemonics: [
          { text: "AERB limits = occupational 20 mSv avg/50 single, pregnant 1, public 1, patient no limit", explanation: "Regulatory values" },
          { text: "ORGAN sensitive = thyroid 0.05 > lung 0.12 > breast 0.12 > gonads 0.20 = tissue weighting", explanation: "Effective dose coefficients" },
          { text: "THRESHOLD effects = cataract 20 mSv, skin 200 mSv, acute >100 = deterministic minimum dose", explanation: "Injury thresholds" },
          { text: "LEAD 0.5mm = 90% X-ray attenuation BUT thyroid collar critical (high sensitivity)", explanation: "Shielding effectiveness" }
        ],
        keyPoints: [
          "AERB occupational: 20 mSv/year average, 50 mSv single year; pregnant 1 mSv total",
          "Dose examples: CXR 0.1, CT 7-15, fluoroscopy 0.5-2 per min",
          "Stochastic effects (cancer) no safe threshold; deterministic (cataracts 20 mSv, skin 200) have thresholds",
          "Thyroid most sensitive (0.05 effective dose coefficient); thyroid collar critical",
          "Lead 0.5mm 90% X-ray attenuation; personal dosimetry tracks occupational exposure",
          "Pregnancy: fetal dose <1 mSv diagnostic safe; CT borderline >5 mSv"
        ],
        textbookRefs: [
          { book: "Pocket Guide to Radiation Safety", chapter: "Quick Reference", edition: "IAEA" }
        ]
      },
      {
        layer: 5,
        slug: "radiation-safety-aerb-active-recall",
        title: "Radiation Safety & AERB Guidelines - Active Recall",
        estimatedMinutes: 10,
        summary: "Clinical scenarios: occupational exposure limits, pregnancy decisions, contamination response.",
        contentMd: `# Radiation Safety & AERB Guidelines - Active Recall
## Q1: Occupational Limit Compliance
Scenario: Interventional radiologist, TLD badge shows 8 mSv year 1, 12 mSv year 2, 10 mSv year 3, 11 mSv year 4, 9 mSv year 5. Compliant?

Answer: YES. AERB limit = 20 mSv averaged over 5 years. Sum: 8+12+10+11+9 = 50 mSv ÷ 5 = 10 mSv/year average. Below 20 mSv compliant. Single year never exceeded 50 mSv (max was 12). Compliant with regulations.

## Q2: Pregnant Radiologic Technician
Scenario: Tech announces pregnancy (estimated 2 months). Current dosimetry year-to-date: 2 mSv. Remaining 10 months assigned to routine radiography (estimated 0.08 mSv/month). Will exceed AERB limit?

Answer: YES. Total exposure = 2 (YTD) + 10 × 0.08 (projected) = 2 + 0.8 = 2.8 mSv. AERB pregnant worker limit = 1 mSv total. Will exceed. Solution: (1) Reassign away from fluoroscopy/interventional, (2) Keep only low-dose areas (CXR, general radiography), (3) Verify dosimetry monthly, (4) Declare pregnancy formally to institution (occupational health), (5) Assess fetal dose if procedures already done (likely <1 mSv, safe).

## Q3: Cataract Risk Assessment
Scenario: Ophthalmologist performing fluoroscopic eye injection, no lead glasses worn. 15 minutes cumulative fluoroscopy over 10 years. Estimated lens dose 2 mSv/minute = 30 mSv total. Cataract risk?

Answer: YES. Lens cataract threshold = 20 mSv. Accumulated 30 mSv exceeds threshold. Ophthalmology cataract risk established in literature. Management: (1) Immediate ophthalmology exam (establish baseline), (2) Annual slit-lamp exam (monitor for early opacity), (3) Protective measures going forward: lead glasses ALWAYS, minimize fluoroscopy time, distance from source, (4) Personal dosimetry lens badge (direct eye measurement).

## Q4: Contamination Spill
Scenario: Radiopharmaceutical technician drops 99mTc vial (technetium-99m, half-life 6 hours). Spill on floor (5cm radius, 100 µCi activity). No one nearby. Response?

Answer: (1) **Evacuate area** (post warning sign), (2) **Survey with radiation detector**: map contamination (dose rate at 30cm?), (3) **Contain**: absorbent paper sheets over spill (prevent tracking), (4) **Decontaminate**: trained staff with gloves wash area with soap/water, repeat surveys, (5) **Dispose**: contaminated materials to radioactive waste (decay-in-storage for Tc-99m 10 half-lives = 60 hours), (6) **Report**: dose rate, area affected, decontamination confirmation, AERB notification if >reportable threshold (typically >100 µCi uncontained Tc-99m).

## Q5: Patient Pregnancy Imaging Decision
Scenario: Woman of childbearing age, 6 weeks pregnant (didn't know), had CT abdomen for appendicitis (12 mSv effective dose). Counseling needed?

Answer: REASSURE. Fetal dose from CT abdomen ~0.5-1 mSv (much less than effective dose due to abdominal shield, low gonadal exposure 6 weeks). Risk threshold deterministic effects >50 mGy organogenesis. Stochastic cancer risk 0.001-0.002 per mSv (1-2 in 1,000 above baseline). Benefit diagnosis/treatment appendicitis >> stochastic risk. Prognosis: pregnancy can continue; monitor normally. If dose >5 mSv: fetal dose assessment by medical physicist; joint obstetric counseling.`,
        mnemonics: [
          { text: "OCCUPATIONAL compliance = 20 mSv average over 5 years (not single year average)", explanation: "5-year window" },
          { text: "PREGNANT worker = 1 mSv TOTAL remaining pregnancy = reassign from high-dose areas immediately", explanation: "Strict limit" },
          { text: "CATARACT threshold = 20 mSv lens dose = lead glasses prevent BUT cumulative fluoroscopy risk", explanation: "Occupational hazard" },
          { text: "SPILL response = evacuate → survey → contain → decontaminate → report AERB = sequence", explanation: "Emergency protocol" }
        ],
        keyPoints: [
          "Occupational: 20 mSv/year average over 5 years; pregnant 1 mSv total (reassign away)",
          "Cataract: threshold 20 mSv lens dose; lead glasses critical protective device",
          "Contamination: evacuate, survey, contain, decontaminate, report; Tc-99m decays 10 half-lives",
          "Patient pregnancy: CT abdomen ~0.5-1 mSv fetal dose (safe); >5 mSv warrants physicist assessment",
          "Reassurance: stochastic cancer risk 1-2/1000; benefit diagnosis outweighs risk in most cases"
        ],
        textbookRefs: [
          { book: "AERB Radiation Protection Guidelines", chapter: "Clinical Scenarios", edition: "2020" }
        ]
      }
    ]
  },
  {
    topicCode: "RD-MOD-01-TOP-05",
    layers: [
      {
        layer: 1,
        slug: "nuclear-medicine-petct-foundation",
        title: "Nuclear Medicine & PET-CT - Foundation",
        estimatedMinutes: 20,
        summary: "Radioisotopes basics, thyroid scans, bone scans, PET-CT principles, clinical applications.",
        contentMd: `# Nuclear Medicine & PET-CT - Foundation
## Radioisotopes Basics
- Radionuclide: unstable nucleus emitting ionizing radiation (alpha, beta, gamma)
- Half-life: time for activity to reduce to 50% (Tc-99m 6 hrs, I-131 8 days, F-18 110 min)
- Activity: number of decays/second (measured Becquerel Bq or Curie Ci)
- Specificity: radiopharmaceutical targets organ/function (labeled with radioisotope)
## Thyroid Scans
- **Agent**: Tc-99m pertechnetate or I-131 sodium iodide
- **Mechanism**: Iodine uptake by thyroid follicular cells; images uptake distribution
- **Uses**: Thyroid nodule function (hot vs cold), Graves disease assessment, thyroiditis
- **Advantages**: Functional information (not size/morphology like ultrasound)
## Bone Scans
- **Agent**: Tc-99m MDP (methylene diphosphonate) or HDP (hydroxydiphosphonate)
- **Mechanism**: MDP accumulates at bone formation sites (osteoblastic activity)
- **Uses**: Metastatic cancer detection, stress fractures, osteomyelitis
- **Sensitivity**: >90% for bone mets (earlier than plain X-ray)
## PET-CT Basics
- **PET**: Positron emission tomography (detect positron-electron annihilation)
- **Agent**: F-18 fluorodeoxyglucose (FDG), uptake in high metabolism tissues
- **Mechanism**: Cancer cells high glucose metabolism > normal; FDG accumulates
- **CT component**: Anatomic localization (coregistration with PET)
- **Application**: Oncology (staging, restaging), cardiology (viability), neurology (dementia)`,
        mnemonics: [
          { text: "RADIOISOTOPE = unstable nucleus + emit radiation + half-life = Tc-99m 6hr (imaging)", explanation: "Definition" },
          { text: "THYROID scan = iodine uptake visualization = hot (thyroiditis, Graves) vs cold (nodule malignancy)", explanation: "Functional imaging" },
          { text: "BONE scan = osteoblastic activity = mets >osteolytic early, stress fracture, infection", explanation: "Uptake mechanism" },
          { text: "PET-CT = F-18 FDG high metabolism + CT anatomy = cancer staging/viability = combined modality", explanation: "Hybrid advantage" }
        ],
        keyPoints: [
          "Radioisotopes: unstable nuclei emitting radiation; half-life determines imaging window",
          "Thyroid scan: iodine uptake distribution (functional); identifies hot/cold nodules",
          "Bone scan: Tc-99m MDP accumulates osteoblastic activity; >90% sensitive metastatic cancer",
          "PET-CT: F-18 FDG high-metabolism uptake (cancer) + CT anatomy localization = combined imaging",
          "India context: PET-CT urban centers only; thyroid/bone scans more widely available"
        ],
        textbookRefs: [
          { book: "Nuclear Medicine: A Comprehensive Review", chapter: "Radiopharmaceuticals and Imaging", edition: "9th" },
          { book: "PET and PET-CT in Clinical Oncology", chapter: "Principles and Applications", edition: "2nd" }
        ]
      },
      {
        layer: 2,
        slug: "nuclear-medicine-petct-mechanism",
        title: "Nuclear Medicine & PET-CT - Mechanism",
        estimatedMinutes: 25,
        summary: "Radiopharmaceutical biodistribution, PET detection physics, image reconstruction, clinical interpretation.",
        contentMd: `# Nuclear Medicine & PET-CT - Mechanism
## Radiopharmaceutical Biodistribution
- **Targeting**: Radiopharmaceutical designed to concentrate in target tissue
- **Thyroid**: Iodine (I-131) or Tc-99m pertechnetate mimics iodine, actively transported into thyroid
- **Bone**: MDP/HDP phosphonate compounds bind hydroxyapatite at osteoblastic sites
- **FDG-PET**: Glucose analog; high-metabolism tissues (cancer, infection, inflammation) accumulate
## PET Detection Physics
- **Positron emission**: Unstable F-18 nucleus emits positron (antimatter electron)
- **Annihilation**: Positron meets electron → both annihilate → 2 gamma photons (511 keV) opposite directions
- **Coincidence detection**: Detector ring captures both gamma rays simultaneously (confirms annihilation at center)
- **Localization**: Annihilation occurs along line connecting detectors → image reconstructed from many coincidences
## Image Reconstruction
- **Filtered back-projection**: Traditional algorithm; fast, adequate image
- **Iterative reconstruction**: Modern; improves noise, better lesion detection
- **Attenuation correction**: CT co-registration corrects for tissue attenuation (PET-CT advantage)
- **Scatter correction**: Removes scattered photons (improves image quality)
## Clinical Interpretation
- **Standardized uptake value (SUV)**: Quantifies FDG accumulation normalized to body weight/blood glucose
- **SUV >2.5**: Generally considered suspicious for malignancy (site-dependent)
- **SUV kinetics**: Uptake increase over time (malignancy) vs early plateau (benign)
- **Distribution pattern**: Focal (likely lesion) vs diffuse (metabolic, infection, inflammation)`,
        mnemonics: [
          { text: "RADIOPHARMACEUTICAL = targeting specific tissue + radioisotope label = concentration creates image", explanation: "Design principle" },
          { text: "PET positron = emitted, annihilates electron = 2 gamma 511keV opposite = coincidence detection", explanation: "Physics" },
          { text: "ATTENUATION correction = CT co-registration compensates tissue density differences = PET-CT advantage", explanation: "Hybrid benefit" },
          { text: "SUV >2.5 = suspicious malignancy (uptake normalized to body/glucose) but site-dependent interpretation", explanation: "Quantification" }
        ],
        keyPoints: [
          "Radiopharmaceutical targeting: designed to accumulate in specific tissues via active/passive transport",
          "PET positron-electron annihilation produces gamma rays detected in coincidence",
          "Attenuation correction: CT co-registration corrects for tissue density effects (improves PET-CT accuracy)",
          "SUV >2.5 suspicious for malignancy; interpretation depends on location, kinetics, clinical context",
          "Image reconstruction: iterative better than filtered back-projection; scatter correction improves quality"
        ],
        textbookRefs: [
          { book: "Positron Emission Tomography", chapter: "Physics and Instrumentation", edition: "IAEA" },
          { book: "Clinical PET-CT", chapter: "Image Reconstruction and Correction", edition: "3rd" }
        ]
      },
      {
        layer: 3,
        slug: "nuclear-medicine-petct-clinical",
        title: "Nuclear Medicine & PET-CT - Clinical",
        estimatedMinutes: 25,
        summary: "Clinical protocols, indications, interpretation, patient preparation, India context.",
        contentMd: `# Nuclear Medicine & PET-CT - Clinical
## Thyroid Scan Protocol
1. **Preparation**: No iodine contrast 2 weeks pre-scan (interferes with uptake)
2. **Injection**: Tc-99m pertechnetate 10 mCi IV or I-131 sodium iodide (10 µCi oral)
3. **Timing**: Images at 20 minutes (pertechnetate) or 6-24 hours (I-131)
4. **Positioning**: Anterior neck images; thyroid gland fills field
5. **Interpretation**: 
   - Normal: homogeneous uptake, symmetrical
   - Graves disease: diffusely increased uptake
   - Thyroiditis: low/absent uptake (inflammation, not iodine uptake)
   - Cold nodule: area of photopenia (suggests malignancy 20% risk)
   - Hot nodule: increased uptake (thyroid cancer rare <5%)
## Bone Scan Protocol
1. **Preparation**: Patient hydration (improves renal clearance)
2. **Injection**: Tc-99m MDP or HDP 20-30 mCi IV
3. **Timing**: 3-4 hours post-injection (clearance from soft tissue, good bone/background ratio)
4. **Imaging**: Whole body planar (head to foot) ± spot images lesions ± SPECT (3D if focal)
5. **Interpretation**:
   - Normal: symmetric skeletal uptake, minimal extraosseous activity
   - Metastatic cancer: focal areas increased uptake (osteoblastic response)
   - Osteomyelitis: early phase (perfusion) → late phase (4 hr) asymmetric uptake
   - Stress fracture: intense focal uptake (early detection before radiographic signs)
## PET-CT Oncology Protocol
1. **Preparation**: NPO 4-6 hours (glucose interference), blood glucose <150 mg/dL
2. **Injection**: F-18 FDG 10 mCi (370 MBq) IV, patient rests 50-60 min (uptake equilibration)
3. **Imaging**: 
   - Low-dose CT attenuation correction
   - PET acquisition 3-5 min per bed position (whole body)
   - Coregistered images (CT + PET overlay)
4. **Interpretation**:
   - Focal FDG uptake SUV >2.5: suspicious primary/metastatic cancer
   - Diffuse uptake: infection, inflammation, benign metabolic activity
   - Photopenia (no uptake): necrotic tumor, treated lesion
5. **Common applications**:
   - Lung cancer: staging (mets), post-treatment surveillance
   - Lymphoma: initial staging, response assessment
   - Colorectal cancer: recurrence detection
   - Breast cancer: mets evaluation, residual disease
## India Context
- **Availability**: PET-CT limited to urban tertiary centers (expensive, need cyclotron)
- **Thyroid scans**: Available in nuclear medicine departments (common, cost-effective)
- **Bone scans**: Widely available (good sensitivity, cheap vs CT/MRI)
- **Cost**: PET-CT 15,000-30,000 INR (high accessibility barrier)
- **Cyclotron**: Few F-18 centers (limited to major cities); Tc-99m generator more accessible`,
        mnemonics: [
          { text: "THYROID scan = Tc-99m 20 min OR I-131 24hr = hot nodule (cancer <5%) vs cold (cancer 20%)", explanation: "Interpretation risk" },
          { text: "BONE scan = Tc-99m MDP 3-4 hrs post = metastatic cancer focal uptake >> osteolytic early miss", explanation: "Timing" },
          { text: "PET-CT prep = NPO 4-6 hrs, glucose <150 = F-18 FDG 50-60 min uptake = avoid eating", explanation: "Patient preparation" },
          { text: "SUV >2.5 = suspicious cancer but diffuse uptake = infection/inflammation/benign, depend location", explanation: "Interpretation nuance" }
        ],
        keyPoints: [
          "Thyroid scan: pertechnetate (20 min) or I-131 (24 hr); cold nodule cancer 20% risk",
          "Bone scan: 3-4 hr post-Tc-99m MDP optimal; sensitive early metastases (before radiographic)",
          "PET-CT: NPO 4-6 hrs, glucose <150; F-18 FDG 50-60 min equilibration before imaging",
          "SUV >2.5 suspicious malignancy; interpretation depends location, kinetics, clinical context",
          "India: PET-CT urban only (expensive); thyroid/bone scans more available; cyclotron limit F-18 access"
        ],
        textbookRefs: [
          { book: "Nuclear Medicine Clinical Application", chapter: "Protocols and Interpretation", edition: "SNMMI" },
          { book: "PET-CT Clinical Practice Guide", chapter: "Patient Preparation and Imaging", edition: "EANM" }
        ]
      },
      {
        layer: 4,
        slug: "nuclear-medicine-petct-exam-prep",
        title: "Nuclear Medicine & PET-CT - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield facts, radioisotope comparison, clinical applications, common exam questions.",
        contentMd: `# Nuclear Medicine & PET-CT - Exam Prep
## Radioisotope Comparison
| Isotope | Half-life | Use | Uptake Mechanism |
|---------|-----------|-----|------------------|
| Tc-99m | 6 hours | Thyroid/bone/cardiac | Phagocytosis, active transport |
| I-131 | 8 days | Thyroid (therapy+imaging) | Iodine uptake, follicular cells |
| F-18 | 110 min | PET-CT (oncology) | Glucose metabolism |
| Tc-99m sestamibi | 6 hours | Cardiac viability | Mitochondrial uptake |

## Thyroid Scan Findings
- **Normal**: Homogeneous uptake, symmetric
- **Graves disease**: Diffusely increased (hyperthyroidism)
- **Thyroiditis**: Minimal uptake (inflammation)
- **Cold nodule**: Photopenia (20% cancer risk)
- **Hot nodule**: Increased uptake (<5% cancer risk)

## Bone Scan Sensitivity
- **Osteoblastic lesions**: 90%+ (most mets)
- **Osteolytic lesions**: 50-70% (breast, multiple myeloma)
- **Stress fracture**: 100% (before radiographic signs)
- **Osteomyelitis**: 90%+ (early phase perfusion key)

## PET-CT SUV Interpretation
- **SUV <2.5**: Usually benign (infection, inflammation, benign metabolic)
- **SUV 2.5-5**: Indeterminate (location-dependent; lung lesion vs thyroid nodule different)
- **SUV >5**: Highly suspicious malignancy (organ-dependent threshold varies)

## High-Yield Clinical Applications
- **Thyroid**: Nodule risk stratification, Graves assessment, thyroiditis
- **Bone**: Metastatic cancer detection, stress fracture, osteomyelitis
- **PET-CT oncology**: Lymphoma (most sensitive), lung cancer staging, colorectal recurrence
- **Cardiac PET**: Viability assessment post-MI (hibernating vs infarcted myocardium)`,
        mnemonics: [
          { text: "THYROID cold nodule = photopenia = cancer 20% risk > hot nodule <5% malignancy", explanation: "Risk assessment" },
          { text: "BONE scan = 90% osteoblastic mets vs 50-70% osteolytic (early detection, radiation safe)", explanation: "Sensitivity" },
          { text: "PET-CT = F-18 FDG high metabolism = cancer uptake > normal background = SUV quantify", explanation: "Principle" },
          { text: "CARDIAC PET = viability (increased FDG = hibernating recoverable) vs infarction (no uptake)", explanation: "Myocardial assessment" }
        ],
        keyPoints: [
          "Thyroid scan: cold nodule 20% malignancy; hot nodule <5%; diffuse uptake Graves disease",
          "Bone scan: 90%+ osteoblastic mets, 50-70% osteolytic; sensitive early stress fracture",
          "PET-CT: SUV interpretation location-dependent; 2.5-5 indeterminate, >5 suspicious cancer",
          "Cardiac PET: viability (FDG uptake) vs infarction (photopenia)",
          "India context: PET-CT limited urban; thyroid/bone scans more available; cost accessibility factor"
        ],
        textbookRefs: [
          { book: "Nuclear Medicine: A Comprehensive Review", chapter: "Quick Reference", edition: "9th" }
        ]
      },
      {
        layer: 5,
        slug: "nuclear-medicine-petct-active-recall",
        title: "Nuclear Medicine & PET-CT - Active Recall",
        estimatedMinutes: 10,
        summary: "Clinical scenarios: thyroid nodule evaluation, bone scan interpretation, PET-CT decision making.",
        contentMd: `# Nuclear Medicine & PET-CT - Active Recall
## Q1: Cold Thyroid Nodule
Scenario: 45yo woman, thyroid ultrasound shows 1.5cm nodule. Thyroid function normal. Thyroid scan shows photopenia at nodule location. FNA scheduled. Malignancy risk?

Answer: 20%. Cold nodule (photopenia) = non-functioning nodule = cancer risk ~20%. Compare hot nodule <5% cancer. This warrants FNA (cytology) for diagnosis. Benign possibilities: cyst, nonfunctioning adenoma. Malignancy possibilities: papillary, follicular cancer. FNA will differentiate.

## Q2: Bone Scan vs CT Staging
Scenario: 58yo lung cancer patient, staging workup. Chest CT shows primary + mediastinal nodes. Considering bone scan vs PET-CT for mets. Which prefer?

Answer: **PET-CT superior**. Bone scan: 90% osteoblastic mets BUT 50-70% osteolytic (breast, myeloma), slower. PET-CT: F-18 FDG detects ALL high-metabolism lesions (bone + visceral + brain), plus CT anatomic detail. Modern standard = PET-CT. Bone scan useful if PET-CT unavailable or specific osteomyelitis suspected (early phase perfusion).

## Q3: Thyroiditis vs Graves
Scenario: Young woman, hyperthyroid (TSH low, T4 high). Thyroid scan shows minimal uptake. Graves or thyroiditis?

Answer: **THYROIDITIS**. Graves disease = diffusely increased uptake (hyperfunction). Thyroiditis = low/absent uptake (inflammation suppresses function). This patient: minimal uptake = thyroiditis (likely subacute/silent). Graves would show increased. Thyroiditis management: NSAIDs, beta blockers; self-limited. Graves = antithyroid drugs, RAI/surgery.

## Q4: PET-CT False Positive
Scenario: Lung cancer patient, PET-CT shows focal F-18 FDG uptake in right lower lobe. SUV 3.2. Known primary left upper lobe. New mets?

Answer: NOT necessarily. Focal FDG uptake SUV 3.2 = indeterminate (2.5-5 range). Differentials: (1) Metastasis (most likely), (2) Infection/pneumonia, (3) Benign inflammatory nodule. CT component: morphology appearance helps (round = mets likely vs cavitary = infection). Clinical context: fever/respiratory symptoms suggest infection. Management: (1) CT follow-up (monitor growth), (2) Biopsy if diagnostic uncertainty, (3) Correlate with clinical symptoms.

## Q5: Cardiac Viability PET
Scenario: Post-MI patient, reduced EF 25%, planned for revascularization. Viability PET shows anterior wall: (A) High F-18 FDG uptake, (B) No perfusion (cold on rest imaging). Viable?

Answer: **YES, viable tissue**. F-18 FDG viability = high glucose metabolism (hibernating, recoverable myocardium). Mismatch pattern (FDG uptake, perfusion defect) = ischemic stunning/hibernation = WILL recover with revascularization. If FDG uptake also absent = scar (no viability). This patient: anterior wall hibernating = revascularization will improve function.

## Q6: Bone Scan Stress Fracture
Scenario: Runner, calf pain 4 weeks. X-ray negative. Bone scan shows focal intense uptake fibula mid-shaft. Diagnosis?

Answer: **STRESS FRACTURE**. Bone scan sensitivity 100% early (before radiographic signs 2-3 weeks). Fibula stress fracture common runners. Intense focal uptake = high osteoblastic activity (healing). X-ray may show subtle line (4-6 weeks late). Management: relative rest, gradual return activity, calcium/vitamin D.

## Q7: Lymphoma Response Assessment
Scenario: Lymphoma patient, interim PET-CT post-chemotherapy. Baseline PET showed multiple focal lesions SUV 8-10 (Deauville score 5). Post-chemo PET shows 50% size reduction, SUV 2-3 (Deauville score 2). Response?

Answer: **GOOD RESPONSE**. Deauville score (5-point scale): Score 2-3 = responsive disease. Reduction SUV 8→3 indicates chemotherapy working. Prognosis better. Continue planned chemotherapy. Complete response if achieves Deauville 1 (no FDG uptake).

## Q8: Thyroid Cancer Post-RAI
Scenario: Thyroid papillary cancer, total thyroidectomy + radioactive iodine treatment. Follow-up I-131 whole body scan: (A) Neck uptake only (thyroid remnant), (B) Lung/bone foci uptake. Recurrence?

Answer: Depends on timing. If early (6 months post-RAI): (A) Neck uptake = normal remnant (expected), NOT recurrence. (B) Lung/bone uptake = LIKELY metastases (worrisome). Management: (1) Repeat I-131 therapy if mets confirmed, (2) Increase TSH-suppressive levothyroxine dose, (3) Monitor thyroglobulin levels (tumor marker).

## Q9: PET-CT Timing Issue
Scenario: Patient prepared for PET-CT, mistakenly ate sandwich 30 min before F-18 FDG injection. Proceed with scan?

Answer: DELAY/RESCHEDULE. Oral glucose interferes with F-18 FDG biodistribution: (1) Hyperglycemia suppresses tumor uptake (glucose competition), (2) False negative lesions possible, (3) Bowel/GI uptake increases (noise). Wait 4-6 hours after oral intake, recheck blood glucose <150 mg/dL. Better to reschedule high-quality study than low-quality compromised.

## Q10: Osteomyelitis vs Cellulitis
Scenario: Foot infection, diabetic patient. Plain film shows subtle lucency distal foot. Bone scan shows (A) Early phase: increased perfusion soft tissue, (B) Late phase (3-4hr): focal intense uptake bone. Bone involved?

Answer: **YES, OSTEOMYELITIS likely**. Three-phase bone scan: (1) Perfusion phase = soft tissue inflammation (both cellulitis + osteomyelitis), (2) Blood pool = vascular activity, (3) Delayed (3-4hr) = bone uptake. Late phase focal uptake bone = osteomyelitis. Cellulitis alone = no delayed bone uptake. This shows bone involvement → requires antibiotic + imaging (MRI detail), possibly surgical debridement.`,
        mnemonics: [
          { text: "COLD thyroid nodule = 20% cancer risk > hot <5% = FNA indicated for cold", explanation: "Risk stratification" },
          { text: "THYROIDITIS = low uptake (inflammation) vs Graves = high uptake (hyperfunction) = scan differentiates", explanation: "Diagnosis" },
          { text: "PET-CT SUV 3.2 = indeterminate (2.5-5) = need CT morphology + clinical correlation + follow-up", explanation: "Interpretation" },
          { text: "VIABILITY = FDG uptake + perfusion defect = hibernating recoverable = revascularize benefit", explanation: "Cardiac application" }
        ],
        keyPoints: [
          "Cold nodule 20% cancer; hot nodule <5%; cold warrants FNA",
          "Thyroiditis: low uptake (inflammation); Graves: high uptake (hyperfunction)",
          "PET-CT SUV 2.5-5 indeterminate; need CT morphology + clinical context",
          "Viability: FDG uptake mismatch (perfusion deficit) = hibernating recoverable",
          "Bone scan three-phase: early/blood pool/delayed; osteomyelitis = late bone uptake",
          "Pre-imaging NPO critical: oral intake interferes FDG biodistribution"
        ],
        textbookRefs: [
          { book: "Clinical PET-CT", chapter: "Case Studies", edition: "3rd" },
          { book: "Nuclear Medicine: A Comprehensive Review", chapter: "Problem-Solving Scenarios", edition: "9th" }
        ]
      }
    ]
  }
];
