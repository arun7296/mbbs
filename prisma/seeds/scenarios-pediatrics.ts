// ---------------------------------------------------------------------------
// Clinical Decision Simulator — Seed Scenarios for Pediatrics (PE)
// High-yield topics: Neonatal Resuscitation, Febrile Seizures, Acute Diarrhea
// Following NRP guidelines, WHO standards, and Indian pediatric context
// ---------------------------------------------------------------------------

export const pediatricsScenarios = [
  // ─── 1. Neonatal Resuscitation — Birth Asphyxia in Term Neonate ──────────
  {
    topicCode: "PE-MOD-02-TOP-01",
    scenario: {
      patientAge: 0,
      patientSex: "Male",
      patientOccupation: null,
      patientLocation: "Government Medical College Hospital, Lucknow, UP",
      chiefComplaint: "Non-responsive limp newborn at birth; not crying or breathing spontaneously",
      historyOfPresent: `
- Delivery: Full-term vaginal delivery (40 weeks by dates, normal labor progression)
- Fetal history: Meconium-stained liquor noted at rupture of membranes (Grade II/III thick meconium)
- Delivery details: Delivery completed 5 minutes ago. Baby delivered limp, not crying, not responding to stimulation
- Maternal factors: 34-year-old primigravida, spontaneous labor, no antepartum complications. No fetal heart rate deceleration noted during labor monitoring, but irregular CTG patterns observed in last 30 minutes of labor
- Birth weight: Expected 3.2 kg (appropriate for gestational age)
- Appearance at birth: Cyanotic, limp, floppy, meconium on skin and nails
- Apgar score: 2 at 1 minute (0 for appearance, 0 for pulse, 1 for grimace, 1 for activity, 0 for respiration) — likely even lower, critically depressed
      `.trim(),
      pastHistory: "No past medical history (newborn). Prenatal: No intrauterine growth restriction noted on USG. No viral TORCH serology abnormalities in mother.",
      familyHistory: "No relevant family history known at this stage. Maternal grandmother reports history of 'blue baby' in family (possibly congenital heart disease — unclear).",
      socialHistory: "Unplanned home delivery initially, transferred to hospital by local birth attendant 15 minutes after delivery. No prior resuscitation attempted.",
      drugHistory: "Oxytocin given to mother during labor (standard practice). No maternal medications affecting baby.",
      vitals: { pulse: "Not palpable/unreliable", bp: "Not recorded", temp: "Not recorded (will be hypothermic)", rr: "Absent/gasping", spo2: "Cannot measure — not breathing" },
      generalExam: `
- General appearance: LIMP, unresponsive, cyanotic (blue-grey discoloration of skin)
- Pallor: Present — severe pallor suggesting poor perfusion
- Icterus: Absent (too early)
- Cyanosis: CENTRAL cyanosis — indicates severe hypoxemia. Lips, tongue, mucosa all blue
- Clubbing: Absent (newborn)
- Edema: No peripheral edema
- Posture: Floppy, no muscle tone, arms and legs lax — severe hypotonia
- Meconium: Meconium-stained skin, nails, and in mouth/nose — needs airway clearing
      `.trim(),
      systemicExam: {
        cardiovascular: {
          heart_rate: "Barely palpable or absent at carotid/femoral pulse — critical bradycardia expected",
          heart_sounds: "Faint/inaudible due to poor perfusion and absence of ventilation",
          skin_perfusion: "Severely delayed capillary refill (>3 seconds) — poor cardiac output",
        },
        respiratory: {
          chest_inspection: "Chest wall movement ABSENT. No spontaneous respiratory effort. Gasping reflex only (agonal breathing).",
          breath_sounds: "Absent — no air entry. Gurgly sounds from meconium in airway.",
          stridor_wheeze: "Not assessed yet — first priority is clearing airway and ventilation",
        },
        neurological: {
          consciousness: "UNRESPONSIVE — does not cry, grimace, or withdraw from stimuli",
          reflexes: "Absent or severely depressed — no suck, rooting, or Moro reflex. Pain reflex absent.",
          muscle_tone: "Severely decreased (flaccid) — floppy like a rag doll",
        },
        abdominal: {
          abdo_inspection: "Abdomen soft, non-distended",
          umbilicus: "Single umbilical cord — arterial and venous pulsations not assessed (not applicable in this critical state)",
        },
      },
      availableInvestigations: [
        { id: "apgar_1min", name: "Apgar Score at 1 minute", cost: 0, turnaround: "Immediate", category: "Assessment", result: "Apgar 2: Appearance (0 — cyanotic), Pulse (0 — absent/not palpable), Grimace (1 — minimal response), Activity (1 — minimal tone), Respiration (0 — absent)", isAbnormal: true, interpretation: "CRITICALLY LOW — indicates severe birth asphyxia. Immediate resuscitation required. Score <3 = cardiopulmonary resuscitation indicated.", isEssential: true },
        { id: "apgar_5min", name: "Apgar Score at 5 minutes", cost: 0, turnaround: "Repeat at 5 min", category: "Assessment", result: "To be determined after resuscitation efforts. If still <5 at 5 min — prognostic indicator of severe hypoxic-ischemic encephalopathy.", isAbnormal: false, interpretation: "Repeat Apgar at 5 min and 10 min. Persistently low scores (<5) indicate severe asphyxia and high risk of HIE.", isEssential: true },
        { id: "hr_monitor", name: "Heart Rate (Cardiac monitor)", cost: 100, turnaround: "Immediate", category: "Vital Signs", result: "HR <60 bpm — bradycardia indicating severe hypoxemia. Monitor shows slow rate with poor perfusion noted on palpation.", isAbnormal: true, interpretation: "HR <60 in newborn during resuscitation is indication for chest compressions and epinephrine. Bradycardia reflects severe hypoxia.", isEssential: true },
        { id: "spo2_monitor", name: "Pulse Oximetry (Saturation)", cost: 500, turnaround: "Immediate", category: "Vital Signs", result: "SpO2 reading: Unable to obtain (poor perfusion prevents reliable reading). Assumed to be severely low (<60% on room air).", isAbnormal: true, interpretation: "During resuscitation, SpO2 may not register initially due to poor perfusion. Target SpO2 target during NRP: Initially room air (21%) for term infants, can increase to 40% O2 if not improving by 60 sec.", isEssential: true },
        { id: "glucose", name: "Capillary Blood Glucose (after stabilization)", cost: 50, turnaround: "2 minutes", category: "Biochemistry", result: "To be checked after initial resuscitation. Hypoglycemia common in asphyxiated neonates (<40 mg/dL expected).", isAbnormal: false, interpretation: "Asphyxiated infants often develop hypoglycemia from depleted glycogen stores. Check after resuscitation and provide IV dextrose if low.", isEssential: false },
        { id: "urea_creatinine", name: "Renal Function (Urea, Creatinine) — defer", cost: 200, turnaround: "1 hour", category: "Biochemistry", result: "To be done after stabilization. Expected elevated creatinine (maternal) and assessment of renal injury from hypoperfusion.", isAbnormal: false, interpretation: "Asphyxia causes acute tubular necrosis and oliguria. Check UOP closely. Elevated creatinine may take 24-48 hours to reflect renal injury.", isEssential: false },
        { id: "blood_gas_umbilical", name: "Umbilical Arterial Blood Gas (within 30 min of delivery)", cost: 600, turnaround: "5 minutes", category: "Biochemistry", result: "URGENT: Collect umbilical arterial sample immediately. Expected: pH <7.0, BE <-16, lactate >6 mmol/L indicating severe metabolic acidosis.", isAbnormal: true, interpretation: "Umbilical artery pH <7.0 with base excess <-16 confirms birth asphyxia. Lactate >6 mmol/L indicates tissue hypoperfusion. Critical evidence of asphyxia.", isEssential: true },
        { id: "serum_lactate", name: "Serum Lactate (after initial stabilization)", cost: 400, turnaround: "30 minutes", category: "Biochemistry", result: "Markedly elevated lactate (expected >8 mmol/L) reflecting severe anaerobic metabolism and tissue hypoxia.", isAbnormal: true, interpretation: "High lactate in asphyxiated newborns indicates severe cellular injury and hypoperfusion. Takes time to clear — correlates with degree of hypoxic-ischemic encephalopathy.", isEssential: false },
        { id: "neonatal_screening", name: "Neonatal Neurological Examination (Sarnat scoring) — deferred", cost: 0, turnaround: "After 6 hours", category: "Neurological", result: "To be assessed at 6-12 hours. Expected Stage 2-3 hypoxic-ischemic encephalopathy (HIE) given Apgar 2 at 1 minute.", isAbnormal: false, interpretation: "Sarnat score at 6 hours predicts long-term outcomes. Stage 2-3 HIE has high risk of death/disability. Therapeutic hypothermia indicated if criteria met.", isEssential: false },
        { id: "eeg_aEEG", name: "Amplitude-Integrated EEG (aEEG) — if available, defer", cost: 5000, turnaround: "30 minutes after placement", category: "Neuromonitoring", result: "To be considered if severe HIE suspected. Expected burst suppression or low voltage pattern indicating severe cerebral dysfunction.", isAbnormal: false, interpretation: "aEEG helps predict outcomes in HIE. Normal background voltage correlates with better prognosis. Helps guide need for therapeutic hypothermia.", isEssential: false },
      ],
      correctDiagnosis: "Birth Asphyxia with Hypoxic-Ischemic Encephalopathy (HIE) — Severe; Immediate Neonatal Resuscitation Indicated (NRP Protocol)",
      differentials: [
        { diagnosis: "Congenital Heart Disease (Cyanotic)", likelihood: "MEDIUM", reasoning: "Baby is cyanotic and not breathing, but limp posture and unresponsiveness favor asphyxia over primary cardiac disease. Maternal history of 'blue baby' in family raises suspicion. Would expect better perfusion signs initially. Murmur or abnormal pulses would be clues." },
        { diagnosis: "Meconium Aspiration Syndrome", likelihood: "HIGH-associated", reasoning: "Thick meconium is PRESENT. However, MAS develops AFTER birth — the current problem is BIRTH ASPHYXIA requiring immediate resuscitation. MAS would be a consequence if aspiration occurs." },
        { diagnosis: "Sepsis/Intrauterine Infection (TORCH)", likelihood: "LOW", reasoning: "No maternal fever. Sepsis typically develops after 24-48 hours. Current presentation is acute hypoxia, not infection. Prenatal serology negative." },
        { diagnosis: "Maternal Medications/Anesthesia Effect", likelihood: "LOW", reasoning: "Oxytocin doesn't cause respiratory depression. Vaginal delivery = minimal anesthesia. Apgar score is too low for simple medication effect." },
      ],
      diagnosticReasoning: "Term neonate (40 weeks) born via vaginal delivery with meconium-stained liquor presenting as limp, non-responsive, non-breathing baby with Apgar 2 at 1 minute. Severe central cyanosis, absent respiratory effort, critically slow heart rate, poor perfusion (delayed capillary refill). This is PERINATAL ASPHYXIA — defined as inadequate cerebral perfusion and oxygenation around time of birth. Meconium aspiration risk is HIGH if baby gasps during asphyxia. Umbilical arterial gas will show severe acidosis (pH <7.0, BE <-16). Baby requires immediate NRP resuscitation starting with airway management (meconium aspiration precautions), positive pressure ventilation, and possible chest compressions if HR <60.",
      managementPlan: {
        immediateActions: [
          { action: "RESUSCITATION AREA PREPARATION: Clear space, preheat radiant warmer, assemble equipment before delivery", reasoning: "NRP Guideline: All deliveries should occur in area with resuscitation equipment ready. High-risk delivery (thick meconium) — must have full team present.", priority: "STAT — before delivery completion" },
          { action: "Call for HELP immediately — get pediatrician, anesthesia, 2-3 nurses", reasoning: "Severe birth asphyxia requires full resuscitation team. Do not attempt alone.", priority: "STAT" },
          { action: "Position baby on back, head neutral (not hyperextended)", reasoning: "Proper positioning for airway management and chest compression access", priority: "STAT" },
          { action: "MECONIUM ASPIRATION PRECAUTION: Suction mouth/nose ONLY if meconium present and baby non-vigorous", reasoning: "NRP 2020 Update: Routine intubation for meconium is NOT recommended unless baby is non-vigorous (which this baby is). Gentle suctioning of mouth/nose first, then assess responsiveness.", priority: "STAT" },
          { action: "Stimulate baby — tap heels, rub back gently while assessing response", reasoning: "Check if baby responds to tactile stimulation. This baby is clearly non-responsive, so move immediately to ventilation.", priority: "STAT" },
          { action: "Dry baby and remove wet linens to prevent heat loss", reasoning: "Temperature regulation critical in newborns — hypothermia worsens outcomes in asphyxia", priority: "IMMEDIATE" },
          { action: "Start POSITIVE PRESSURE VENTILATION (PPV) via bag-mask with room air for TERM infant", reasoning: "NRP Guideline: Term infants — START with room air (FiO2 21%). If not improving (HR remains <100, color remains cyanotic, chest movement inadequate) by 60 seconds, increase to blended O2 (target SpO2 goal: <30% at 1 min to 50-80% by 5 min, 80-90% by 10 min). This baby shows NO response to stimulation — PPV urgently needed.", priority: "STAT" },
          { action: "Assess for adequate chest rise during PPV", reasoning: "Confirms mask seal and adequate pressure. If no chest rise — reposition head, apply jaw thrust, or consider intubation.", priority: "IMMEDIATE" },
          { action: "Assess heart rate — palpate umbilical/brachial pulse for 6-10 seconds", reasoning: "If HR <60 after 15 sec of PPV — START CHEST COMPRESSIONS. Current baby likely has HR <60 (critical bradycardia from asphyxia).", priority: "CONTINUOUS" },
          { action: "If HR <60 after 15 seconds of adequate PPV → START CHEST COMPRESSIONS + prepare Epinephrine", reasoning: "NRP Guideline: HR <60 after initial PPV = indication for compressions. Coordinate 3:1 compression:ventilation ratio. Prepare IV line or umbilical catheter for meds.", priority: "URGENT" },
          { action: "Establish umbilical venous catheter OR peripheral IV line for medications", reasoning: "For Epinephrine, fluids, supportive medications. Umbilical line is standard in resuscitation.", priority: "URGENT" },
          { action: "Collect UMBILICAL ARTERIAL BLOOD SAMPLE for blood gas immediately", reasoning: "Document degree of acidosis (pH, BE, lactate). Critical prognostic indicator for HIE risk. NRP guideline: should be collected within 30 min of delivery.", priority: "URGENT — during/after initial resuscitation" },
        ],
        pharmacological: [
          { drugClass: "Oxygen", examples: ["Room air initially (FiO2 21%) if term infant, escalate to blended O2 if needed"], route: "Inhalation", duration: "Throughout resuscitation as needed", reasoning: "NRP 2020: Start term infants on room air. If no improvement after 60 sec on room air (still cyanotic, HR <100, minimal chest rise) → increase to blended oxygen targeting SpO2 goals. Avoid hyperoxia (>95% early) which increases free radicals.", contraindications: ["None — oxygen is life-saving in this context"], indianContext: "Oxygen cylinders standard in all hospitals. Cost: ₹100-200 per session." },
          { drugClass: "Epinephrine (IV/Umbilical)", examples: ["Epinephrine 1:10,000 solution: 0.1-0.3 mL/kg IV push (NRP guideline: 0.01-0.03 mg/kg = 0.1-0.3 mL/kg)", "Repeat every 3-5 minutes if HR remains <60"], route: "IV (umbilical venous preferred) or endotracheal (if no IV access)", duration: "Every 3-5 min as needed", reasoning: "Indicated if HR <60 after 15 sec PPV + chest compressions. Increases coronary and cerebral perfusion pressure. Only medication proven to help in neonatal resuscitation.", contraindications: ["None in asystole/profound bradycardia"], indianContext: "Epinephrine 1:10,000 (1 mg in 10 mL) injection available at ₹50-100 per vial." },
          { drugClass: "Normal Saline (Fluid bolus)", examples: ["10 mL/kg IV bolus (0.9% NS), given as rapid infusion if no response to meds"], route: "IV bolus", duration: "Once, can repeat if no response", reasoning: "If hypovolemia suspected (pallor, poor perfusion despite compressions). Gives intravascular volume to support cardiac output. This baby shows severe pallor — may benefit.", contraindications: ["Overhydration risk — monitor carefully"], indianContext: "NS 500 mL bottle at ₹50-100." },
          { drugClass: "Sodium Bicarbonate", examples: ["0.5 mEq/mL (4.2% solution) — 2 mEq/kg IV push"], route: "IV (after established access only)", duration: "Once during prolonged resuscitation", reasoning: "CONTROVERSIAL in neonatal resuscitation. NRP recommends ONLY after adequate ventilation/circulation achieved (30 min of resuscitation) if severe metabolic acidosis documented. Asphyxiated babies have combined respiratory + metabolic acidosis — correct hypoxia first.", contraindications: ["Poor perfusion (delays drug delivery)", "Not used in initial resuscitation"], indianContext: "Sodium Bicarbonate 4.2% amp at ₹30-50." },
        ],
        nonPharmacological: [
          { intervention: "Positive Pressure Ventilation using self-inflating bag or T-piece resuscitator with appropriate-sized mask (term neonate = 40-60 mm mask)", reasoning: "Provides oxygenation and ventilation. Target chest rise = 1-2 cm (similar to spontaneous breath).", duration: "15 seconds initial assessment, then continued as needed" },
          { intervention: "Chest Compressions using two-thumb technique (thumbs placed on lower third of sternum, fingers encircling thorax) or two-finger method if inadequate access", reasoning: "NRP: Compress to approximately one-third depth of chest (1-1.5 cm in term newborn). Maintain 90 compressions + 30 ventilations per minute (3:1 ratio unique to neonates, NOT 30:2).", duration: "Until HR >60 for 15+ seconds" },
          { intervention: "Meconium management if aspirated — gentle suctioning, watch for meconium aspiration syndrome development (tachypnea, grunting, hyperinflation on CXR)", reasoning: "Meconium in airways worsens gas exchange. Avoid aggressive intubation unless necessary to protect airway during ongoing resuscitation.", duration: "Initial + ongoing monitoring" },
          { intervention: "HYPOTHERMIA INDUCTION if severe HIE suspected (Apgar <5 at 10 min and severe acidosis) — target core temperature 33.5°C for 72 hours", reasoning: "Therapeutic hypothermia reduces death/disability in moderately-severely asphyxiated infants by ~50%. Initiate as soon as possible if criteria met. Active cooling contraindicated during initial resuscitation (after stabilization).", duration: "After initial resuscitation, if indications met" },
          { intervention: "Support metabolic/hemodynamic status: IV dextrose (5-10%), maintain urine output, avoid hypovolemia", reasoning: "Asphyxiated infants develop hypoglycemia, oliguria, DIC risk. Careful fluid management needed.", duration: "Throughout ICU care (hours-days)" },
        ],
        monitoring: [
          { parameter: "Heart rate (continuous cardiac monitor)", frequency: "Continuous during and after resuscitation", target: "HR >100 bpm (robust; previously 120-160 for healthy term newborn, but lower acceptable if improving)", escalation: "HR <60 after 15 sec PPV → add chest compressions. HR <60 after compressions + epi → consider intubation, check IV/UVC placement" },
          { parameter: "SpO2 (pulse oximeter once perfusion adequate)", frequency: "Continuous", target: "Target saturation: <30% at 1 min → 50-80% at 5 min → 80-90% by 10 min", escalation: "Delayed rise in SpO2 despite adequate ventilation → consider meconium aspiration, tension pneumothorax, or cardiac cause" },
          { parameter: "Respiratory effort (chest wall movement, breath sounds)", frequency: "Every 30 seconds during resuscitation", target: "Adequate bilateral chest rise with each ventilation", escalation: "No chest rise → reposition, jaw thrust, intubation. Asymmetrical rise → rule out pneumothorax" },
          { parameter: "Apgar score", frequency: "At 1 min, 5 min, 10 min", target: "Improvement from 2 at 1 min to ideally >7 by 10 min (indicates adequate response to resuscitation)", escalation: "Still <5 at 10 min → ongoing severe depression, proceed with full resuscitation, consider ECMO if available" },
          { parameter: "Umbilical artery blood gas", frequency: "Once, within 30 min of delivery", target: "Document pH, BE, lactate to assess asphyxia severity", escalation: "pH <7.0, BE <-16, lactate >6 → severe asphyxia, high HIE risk, consider therapeutic hypothermia" },
        ],
        lifestyle: {
          dos: ["Supportive care in NICU with temperature control", "Gentle handling — minimize agitation in asphyxiated infants", "Frequent monitoring for complications (seizures, DIC, renal failure, cardiac issues)", "Parental counseling regarding prognosis (varies by Apgar score, acidosis severity)"],
          donts: ["Do NOT delay resuscitation for any reason", "Do NOT hyperventilate (causes alkalosis, poor cerebral perfusion)", "Do NOT use routine intubation for meconium alone in non-vigorous infants (NRP 2020 change)", "Do NOT overheat baby — hypothermia therapeutic if HIE; prevent hyperthermia"],
          indianSpecific: ["Ensure delivery in hospital with resuscitation team available — home delivery remains high-risk in India", "Train birth attendants/midwives in basic neonatal resuscitation (NRP training programs available)", "Access to NICU care critical — asphyxiated babies need intensive monitoring", "Counsel parents about therapeutic hypothermia (if indicated) — newer treatment, not routine"],
        },
        followUp: {
          when: "Continuous for first 72 hours in NICU, then daily until discharge",
          what: ["Neurological examination (Sarnat score at 6 hours to risk-stratify for HIE)", "Repeat EEG/aEEG if available to assess seizure risk and prognosis", "Renal function monitoring (daily until urine output normalized)", "Calcium, glucose monitoring (hypocalcemia and hypoglycemia common)", "Liver enzymes, PT/INR (DIC risk in asphyxia)", "Head ultrasound at 3-5 days to rule out IVH, congestion", "Long-term neurodevelopmental follow-up at 6 months, 12 months, 2 years (high-risk for CP, developmental delay)"],
        },
        referral: {
          needed: true,
          to: "Neonatology team / Level 3 NICU for intensive care and monitoring; Pediatric Neurology if seizures or severe HIE",
          urgency: "IMMEDIATE",
        },
      },
      redFlags: [
        { flag: "HR remains <60 after 15 seconds of adequate PPV", action: "Initiate chest compressions (3:1 compression:ventilation ratio) and prepare epinephrine", urgency: "IMMEDIATE" },
        { flag: "No improvement in color/tone/respiratory effort after 30 seconds of resuscitation", action: "Reassess ventilation adequacy, consider intubation, rule out tension pneumothorax", urgency: "IMMEDIATE" },
        { flag: "Severe bradycardia or asystole (HR <30 or absent)", action: "Full code resuscitation, continue CPR, epinephrine every 3-5 min, consider ECMO if available", urgency: "IMMEDIATE" },
        { flag: "Persistent metabolic acidosis (pH <7.0, BE <-16) with low Apgar at 10 min", action: "High risk of HIE — consider therapeutic hypothermia, transfer to NICU capable of cooling, pediatric neurology consultation", urgency: "URGENT" },
        { flag: "Seizures develop in first hours/days", action: "Phenobarbital or other anticonvulsants; EEG to assess status; investigate for HIE, metabolic derangement, sepsis", urgency: "URGENT" },
      ],
      keyLearningPoints: [
        "Birth asphyxia defined as inadequate cerebral perfusion and oxygenation around delivery — presents as limp, non-responsive newborn with Apgar <3",
        "NRP Protocol: ABC = Airway (position, clear if needed), Breathing (PPV), Circulation (assess HR, start compressions if <60 after 15 sec PPV)",
        "Term infants START on room air (FiO2 21%) — increased to blended oxygen if no improvement by 60 seconds. Avoid early hyperoxia.",
        "Epinephrine (0.1-0.3 mL/kg of 1:10,000 solution) ONLY indicated if HR <60 after adequate PPV + chest compressions",
        "Compression:ventilation ratio in neonates is 3:1 (NOT 30:2 like adults) — unique to newborns",
        "Umbilical artery blood gas pH <7.0 with BE <-16 and lactate >6 indicates severe asphyxia and high HIE risk",
        "Therapeutic hypothermia (core temp 33.5°C for 72 hours) reduces death/disability by ~50% in moderately-severely asphyxiated infants — must start ASAP if criteria met",
        "Apgar score <5 at 10 minutes (despite resuscitation) = poor prognosis; prognostic significance used for counseling, not to withhold resuscitation",
        "Meconium aspiration syndrome is CONSEQUENCE of aspiration during asphyxia — manage initial asphyxia first, then monitor for MAS",
      ],
      commonMistakes: [
        "DELAYING resuscitation while waiting for other assistance — START immediately with available personnel",
        "Routine intubation for meconium in non-vigorous infants — NRP 2020 recommends suctioning mouth/nose, NOT routine intubation (increases aspiration risk)",
        "Using high FiO2 (100% oxygen) from start — causes oxidative stress in asphyxiated infants, associated with worse outcomes. START room air, increase if needed.",
        "Hyperventilation (too fast, too deep) — causes respiratory alkalosis and paradoxically reduces cerebral perfusion by vasoconstriction. Target rate: 40-60 bpm in neonates.",
        "Not assessing for RV infarction/myocardial dysfunction — prolonged severe asphyxia damages RV; may need inotropic support",
        "Forgetting to collect UMBILICAL ARTERIAL blood gas — critical for documenting asphyxia severity and counseling parents on prognosis",
        "Not considering therapeutic hypothermia — many hospitals in India still not offering it despite proven benefit",
        "Poor parental communication — asphyxiated infants may not survive or may have permanent disability. Early honest counseling crucial.",
      ],
      relevantHistoryQs: ["onset", "delivery_type", "fetal_history", "maternal_complications", "meconium_present", "resuscitation_needed"],
      relevantExamIds: ["apgar_score", "general_appearance", "cyanosis", "muscle_tone", "heart_sounds", "respiratory_effort", "color"],
      difficulty: "CRITICAL",
      estimatedMinutes: 30,
      subjectTags: ["PE", "NICU"],
      examRelevance: ["NEXT_STEP1", "NEET_PG", "CLINICAL_EXAM"],
      nmcCompetencyCode: "PE1.1",
      maxScore: 100,
      passingScore: 60,
    },
  },

  // ─── 2. Febrile Seizures — High Fever with Generalized Tonic-Clonic Seizure ────
  {
    topicCode: "PE-MOD-04-TOP-02",
    scenario: {
      patientAge: 2,
      patientSex: "Female",
      patientOccupation: null,
      patientLocation: "Private clinic, Bangalore, Karnataka",
      chiefComplaint: "High fever and unconsciousness with jerking movements of all four limbs",
      historyOfPresent: `
- Onset: Mother reports child was well yesterday evening, had normal sleep
- Fever: This morning (6 AM) — temperature 104°F (40°C) at home, child felt hot and lethargic
- Prodrome: Mild cough and running nose for 2 days (URI symptoms), no ear pain, no vomiting initially
- SEIZURE: 30 minutes ago — suddenly child became "stiff" and started "shaking" of all four limbs
- Duration: Witnessed by mother — lasted approximately 2-3 minutes (generalized tonic-clonic seizure)
- Character: First phase — body went rigid (tonic phase), then rhythmic jerking of all limbs (clonic phase)
- Associated: Eyes rolled upward, baby turned "pale/blue", drooling, loss of urine (incontinence during seizure)
- Consciousness: Child was UNRESPONSIVE during seizure, not responding to loud calls or stimulation
- Post-ictal: After 2-3 minutes — seizure stopped spontaneously, child is now lethargic, drowsy, breathing normally
- Currently: Fever still present, child groggy but able to open eyes when called loudly
- No prior seizures in this child
      `.trim(),
      pastHistory: "Born at 39 weeks (full term), normal delivery, birth weight 3 kg (normal). Immunizations up to date (routine vaccines given). Developmental milestones normal for age (walking, saying 50+ words). No neurological problems. No head injury. No previous febrile seizure.",
      familyHistory: "Father reports his sister had 'fits' during childhood (likely febrile seizures, unclear exact history). Maternal grandfather has hypertension. No family history of epilepsy.",
      socialHistory: "Only child, attends day care. Mother is a nurse. Good socioeconomic status. Lives in air-conditioned apartment.",
      drugHistory: "No regular medications. Mother gave Paracetamol 120 mg at home when fever started (2 hours ago), did NOT give fever sponging because 'was busy'. NO aspirin given.",
      vitals: { pulse: 140, bp: "100/65", temp: 40.2, rr: 32, spo2: 95 },
      generalExam: `
- General appearance: Groggy, post-ictal, lethargic, responds to loud call but closes eyes and drifts off
- Pallor: Mild pallor present
- Icterus: Absent
- Cyanosis: Mild cyanosis noted during seizure (now resolved), lips pink
- Clubbing: Absent
- Edema: No pedal edema
- Rash: Absent (no meningococcal rash, no petechiae)
- Skin: Warm, dry, fevered to touch (high fever)
      `.trim(),
      systemicExam: {
        cardiovascular: {
          heart_rate: "Tachycardia — 140 bpm (expected in high fever and post-ictal state)",
          heart_sounds: "S1 S2 normal, no murmurs",
          blood_pressure: "100/65 mmHg (normal for 2-year-old: systolic 95-105)",
          capillary_refill: "Normal (<2 seconds)",
        },
        respiratory: {
          chest_inspection: "Bilateral equal chest movements, tachypneic (RR 32)",
          breath_sounds: "Bilateral equal air entry, no added sounds (mild upper respiratory sounds)",
          stridor_wheeze: "Absent",
        },
        neurological: {
          consciousness: "GCS 13/15 (Eyes 3 — opens to loud voice, Verbal 4 — confused/irritable, Motor 6 — obeys commands). Post-ictal, improving.",
          cranial_nerves: "Pupils 4mm, round, reactive to light. Eye movements normal. Facial symmetry present. Gag reflex present (strong).",
          motor: "Power 5/5 all limbs (no post-ictal paralysis). Tone normal (was increased during seizure — now normal).",
          reflexes: "Deep tendon reflexes 2+ symmetrically (normal)",
          plantar: "Plantar reflex — flexor bilaterally (normal)",
          meningeal_signs: "Neck stiffness: ABSENT — neck flexes easily. Kernig's sign: NEGATIVE. Brudzinski's sign: NEGATIVE. (Rules out meningitis)",
          fontanelle: "Not assessed (child >18 months — anterior fontanelle closed)",
        },
        abdominal: {
          abdo_inspection: "Abdomen soft, normal",
          palpation_superficial: "No tenderness",
          liver_palpation: "Liver not palpable",
          bowel_sounds: "Normal",
        },
      },
      availableInvestigations: [
        { id: "temp_measure", name: "Core Temperature (Tympanic/Axillary)", cost: 50, turnaround: "1 minute", category: "Vital Signs", result: "Tympanic temperature: 40.2°C. Confirms high fever as seizure trigger.", isAbnormal: true, interpretation: "Temperature >39.5°C (103°F) in young child increases febrile seizure risk exponentially. Rapid fever rise is key risk factor.", isEssential: true },
        { id: "cbc", name: "Complete Blood Count", cost: 300, turnaround: "1 hour", category: "Hematology", result: "Hb: 11.5 g/dL (normal for age), WBC: 14,200/μL (moderate leukocytosis — 78% neutrophils), Platelets: 3.2 lakhs", isAbnormal: true, interpretation: "Neutrophilic leukocytosis suggests viral or bacterial infection. Normal Hb rules out anemia.", isEssential: true },
        { id: "peripheral_smear", name: "Peripheral Blood Smear", cost: 200, turnaround: "30 minutes", category: "Hematology", result: "WBC morphology normal. No atypical cells. Toxic granulations in some neutrophils (suggests infection).", isAbnormal: false, interpretation: "Normal morphology. Toxic granulations consistent with acute infection/inflammation.", isEssential: false },
        { id: "rbs", name: "Random Blood Sugar", cost: 100, turnaround: "10 minutes", category: "Biochemistry", result: "RBS: 142 mg/dL (normal for age <110 mg/dL, but stress hyperglycemia acceptable post-seizure)", isAbnormal: true, interpretation: "Mildly elevated glucose from stress of seizure and fever. Not indicative of diabetes.", isEssential: false },
        { id: "rft", name: "Renal Function Test (Urea, Creatinine)", cost: 300, turnaround: "1 hour", category: "Biochemistry", result: "Urea: 28 mg/dL, Creatinine: 0.6 mg/dL (normal for 2-year-old)", isAbnormal: false, interpretation: "Normal renal function. Good hydration status (urea not elevated).", isEssential: false },
        { id: "sodium_potassium", name: "Serum Sodium & Potassium", cost: 200, turnaround: "1 hour", category: "Biochemistry", result: "Na: 138 mEq/L, K: 4.1 mEq/L (both normal)", isAbnormal: false, interpretation: "Normal electrolytes. Rules out hyponatremia (which can cause seizures).", isEssential: false },
        { id: "cxr", name: "Chest X-ray", cost: 200, turnaround: "15 minutes", category: "Imaging", result: "Clear bilateral lung fields. Slight bronchial wall thickening (consistent with mild URI). No focal consolidation.", isAbnormal: false, interpretation: "Confirms viral URI, not pneumonia. Fits with 2-day history of cough and rhinorrhea.", isEssential: false },
        { id: "urine_routine", name: "Urine Routine & Microscopy", cost: 150, turnaround: "30 minutes", category: "Urinalysis", result: "Color pale yellow, no protein, no RBC, no WBC. Nitrites negative. (Seizure-related incontinence — sample may be dilute)", isAbnormal: false, interpretation: "Normal urinalysis. Rules out UTI as source of fever.", isEssential: false },
        { id: "lumbar_puncture_defer", name: "Lumbar Puncture (Deferred — NOT indicated)", cost: 1000, turnaround: "30 minutes", category: "Microbiology", result: "NOT PERFORMED. Child has NO meningeal signs (no neck stiffness, kernig/brudzinski negative). Normal alertness improving post-ictal. No rash. LP not indicated for simple febrile seizure.", isAbnormal: false, interpretation: "NRP guideline: LP NOT routinely indicated in simple febrile seizures unless meningeal signs present. This child lacks them. Unnecessary LP increases infection risk and trauma.", isEssential: false },
      ],
      correctDiagnosis: "Simple Febrile Seizure (Generalized Tonic-Clonic) — Secondary to Acute Viral URI with High Fever",
      differentials: [
        { diagnosis: "Bacterial Meningitis", likelihood: "LOW", reasoning: "No meningeal signs (neck stiffness absent, kernig/brudzinski negative). Alert and improving. No rash. Normal CSF would be expected but examination doesn't support meningitis." },
        { diagnosis: "Complex Febrile Seizure (Focal, Prolonged, or Multiple)", likelihood: "LOW", reasoning: "This seizure was generalized, lasted 2-3 min (simple = <15 min), no focal features. Single seizure event. Fits criteria for SIMPLE febrile seizure." },
        { diagnosis: "Epilepsy (unprovoked seizure)", likelihood: "VERY LOW", reasoning: "Seizure is clearly provoked by high fever. First seizure. No family history of epilepsy. Classic presentation of febrile seizure, NOT epilepsy." },
        { diagnosis: "Hypoglycemia or Electrolyte Imbalance", likelihood: "VERY LOW", reasoning: "RBS 142 (not low), Na/K normal. Seizure preceded by fever, not preceded by altered consciousness/hyperventilation." },
      ],
      diagnosticReasoning: "2-year-old girl with acute onset (30 min ago) of generalized tonic-clonic seizure during high fever (40.2°C). Seizure lasted 2-3 minutes, resolved spontaneously, post-ictal period now improving. Mother witnessed seizure — classic description of febrile seizure. Prodrome of 2-day viral URI (cough, rhinorrhea) is common trigger. Examination shows NO meningeal signs (neck stiffness absent, kernig/brudzinski negative), normal alertness improving, no rash — rules out meningitis. SIMPLE febrile seizure diagnosis = fever provoked, generalized, <15 min duration, no focal features, no recurrence in same febrile illness. Excellent prognosis.",
      managementPlan: {
        immediateActions: [
          { action: "Ensure airway safety — position child on side (recovery position)", reasoning: "Post-ictal child may aspirate. Side position drains secretions.", priority: "STAT" },
          { action: "Monitor vitals continuously (HR, RR, SpO2, temperature)", reasoning: "Watch for recurrent seizures during fever", priority: "STAT" },
          { action: "Obtain IV access (if available, for potential future meds)", reasoning: "Prepare for recurrent seizure management if it occurs", priority: "URGENT" },
          { action: "Aggressive fever management: Tepid sponging (lukewarm water, NOT cold water), remove excess clothing", reasoning: "Fever control is KEY to prevent recurrent seizures. Target temp <39°C.", priority: "STAT" },
          { action: "Give Paracetamol 15 mg/kg IV/PO (child weighs ~12-13 kg, give 180-195 mg ≈ 200 mg = 1 tablet) AND/OR Ibuprofen 10 mg/kg (120-130 mg)", reasoning: "Fever-reducing medications. Paracetamol every 4-6 hours. Combine paracetamol + ibuprofen for better fever control (within 12 hour dosing limits).", priority: "STAT" },
          { action: "Establish cause of fever: Examine for source (ear, throat, lymph nodes, rash, abdominal findings)", reasoning: "Most common: viral URI (this child). Rule out UTI, pneumonia, meningitis.", priority: "IMMEDIATE" },
          { action: "Educate parents on fever management: Do NOT over-bundle child, use light clothing, frequent sips of water, tepid sponging", reasoning: "Parents often panic and over-heat child. Proper cooling is essential.", priority: "IMMEDIATE" },
        ],
        pharmacological: [
          { drugClass: "Antipyretic", examples: ["Paracetamol 15 mg/kg per dose (max 60 mg/kg/day or 5 doses) — this child: 180-200 mg per dose, every 4-6 hours", "Ibuprofen 10 mg/kg per dose (max 40 mg/kg/day or 4 doses) — this child: 120-130 mg per dose, every 6-8 hours"], route: "PO or IV", duration: "Until fever resolves (typically 3-5 days for viral URI)", reasoning: "Fever reduction is cornerstone of management. Combination therapy (paracetamol + ibuprofen alternated) more effective than single agent. Reduces seizure recurrence risk.", contraindications: ["Paracetamol: avoid in severe liver disease", "Ibuprofen: avoid in bleeding disorders, severe renal impairment"], indianContext: "Paracetamol 125 mg syrup at ₹15-25/bottle. Ibuprofen suspension at ₹20-30." },
          { drugClass: "Anticonvulsant (ONLY if recurrent seizures during fever)", examples: ["Rectal Diazepam 0.5 mg/kg (this child: 6-6.5 mg) given rectally if seizure recurs", "Alternatively: Midazolam 0.2 mg/kg IM/IV if accessible"], route: "Rectal or IV", duration: "Acute seizure management only", reasoning: "SIMPLE febrile seizure: Benzodiazepine is RESCUE therapy IF recurrent seizure occurs during fever episode. NOT given prophylactically for all febrile seizure children.", contraindications: ["None in acute seizure setting"], indianContext: "Diazepam 5 mg rectal tube at ₹50-80. Most households in India do NOT keep this at home — parents need education and prescription." },
          { drugClass: "Prophylactic Anticonvulsant (Phenobarbital or Valproate) — RARELY indicated", examples: ["Phenobarbital 3-4 mg/kg/day (this child: 36-52 mg daily) — if VERY frequent febrile seizures", "Valproate 15-30 mg/kg/day — alternative"], route: "Oral", duration: "Long-term (months-years if indicated)", reasoning: "NOT indicated in simple febrile seizures or even complex febrile seizures per current guidelines. Research shows cognitive side effects outweigh benefit. Consider only if >1 seizure per febrile illness, or child with >4 febrile seizure episodes — CONTROVERSIAL.", contraindications: ["Hepatic disease", "Metabolic disorders"], indianContext: "Phenobarbital 100 mg tablet at ₹2-3. But used rarely in India now for febrile seizures." },
          { drugClass: "Fluid & Electrolytes", examples: ["Oral rehydration solution (ORS) — Jhora/Electral — frequent sips", "If unable to take oral: IV Normal Saline 20 mL/kg over 2-4 hours"], route: "PO or IV", duration: "Until hydration adequate", reasoning: "High fever + seizure → dehydration risk. Maintain hydration to support brain perfusion and prevent further seizures.", contraindications: ["None"], indianContext: "ORS packet (1 liter): ₹5-10. Available everywhere in India." },
        ],
        nonPharmacological: [
          { intervention: "Tepid sponging with lukewarm water (26-28°C) on forehead, neck, armpits, groins", reasoning: "Evaporation helps cool body. Avoid cold water (causes shivering, increases heat production). Avoid ice baths (causes peripheral vasoconstriction, traps heat).", duration: "Every 15-30 min until fever comes down" },
          { intervention: "Light clothing, avoid multiple blankets/quilts", reasoning: "Heavy clothing/quilts trap heat and worsen fever", duration: "While febrile" },
          { intervention: "Maintain cool environment (use fan, air conditioning if available)", reasoning: "Ambient temperature affects cooling", duration: "While febrile" },
          { intervention: "Frequent oral fluids (water, juice, broth — clear liquids)", reasoning: "Prevents dehydration from fever", duration: "Throughout fever" },
          { intervention: "Rest — avoid strenuous activity", reasoning: "Reduces metabolic heat production", duration: "While unwell" },
        ],
        monitoring: [
          { parameter: "Temperature (4-hourly chart)", frequency: "Every 4 hours or when fever expected", target: "Temperature <39°C, ideally <38.5°C", escalation: "If temp remains >40°C despite paracetamol + ibuprofen + sponging → reassess for other sources (UTI, pneumonia, meningitis)" },
          { parameter: "Seizure activity (watch for recurrence)", frequency: "Continuous monitoring for first 24 hours", target: "No further seizures. (Recurrent seizure = complex febrile seizure, needs intervention)", escalation: "If seizure recurs → give rectal diazepam, admit for observation" },
          { parameter: "Consciousness/alertness (GCS trending)", frequency: "Every 30 min × 2 hours, then hourly", target: "GCS returning to 15/15 (normal for age)", escalation: "If GCS <13 or deteriorating → assess for meningitis, metabolic derangement, recurrent seizure" },
          { parameter: "Vital signs (HR, RR, BP, SpO2)", frequency: "Every 30 min × 2 hours, then hourly", target: "HR <120 (post-ictal tachycardia resolving), RR <30, SpO2 >95%", escalation: "If vital signs remain abnormal or worsen → escalate care" },
        ],
        lifestyle: {
          dos: ["Complete course of treatment for underlying illness (antibiotics if bacterial, supportive care if viral)", "Ensure good hydration during fever", "Promote normal development — febrile seizures do NOT cause brain damage or affect IQ", "Parents should LEARN fever management techniques"],
          donts: ["Do NOT wrap child in heavy quilts/blankets while febrile — worsens fever", "Do NOT use cold water for sponging (causes shivering, increases heat)", "Do NOT give aspirin (increases Reye's syndrome risk in viral infections)", "Do NOT assume child has epilepsy after febrile seizure (febrile seizure ≠ epilepsy; ~15% of children with febrile seizures develop epilepsy later, but NOT due to seizure itself)"],
          indianSpecific: ["Educate parents that febrile seizures are common (5-10% of Indian children) and NOT dangerous in simple form", "Teach proper fever management — many families in India use over-wrapping incorrectly", "Provide printed handout: 'What to do if fever returns/seizure recurs' with rectal diazepam instructions", "Community health workers can help reinforce fever management education"],
        },
        followUp: {
          when: "1 week after fever resolves, then as needed",
          what: ["Clinical assessment for complete recovery", "Developmental screening to ensure no cognitive impact (reassure parents)", "If recurrent febrile seizures (>1 episode) — may need EEG to rule out underlying epilepsy syndrome", "No routine investigations needed unless fever returns/seizure recurs"],
        },
        referral: {
          needed: false,
          to: "Pediatric Neurology if: Recurrent seizures in same fever, focal seizure, seizure lasting >15 min, or post-ictal state lasting >30 min (complex febrile seizure)",
          urgency: "Routine if indicated; not urgent for simple febrile seizure",
        },
      },
      redFlags: [
        { flag: "Seizure recurs during same febrile illness (recurrent seizure or status epilepticus)", action: "Give Rectal Diazepam 0.5 mg/kg immediately. Admit for observation. Rule out meningitis if fever persists.", urgency: "IMMEDIATE" },
        { flag: "Seizure lasts >15 minutes or has focal features", action: "This is COMPLEX febrile seizure — needs EEG, pediatric neurology evaluation, consider prophylactic antiepileptic", urgency: "URGENT" },
        { flag: "Meningeal signs develop (neck stiffness, kernig positive, brudzinski positive) or rash appears", action: "MENINGITIS alert — perform lumbar puncture immediately, start empiric antibiotics (ceftriaxone + vancomycin)", urgency: "IMMEDIATE" },
        { flag: "Consciousness NOT improving 30 minutes post-seizure", action: "Assess for recurrent seizure, post-ictal complications, or separate pathology (meningitis, metabolic disorder). EEG if available.", urgency: "URGENT" },
      ],
      keyLearningPoints: [
        "Febrile seizure defined as seizure triggered by fever (>38.5°C) in child 6 months to 5 years WITHOUT CNS infection",
        "SIMPLE febrile seizure: Generalized, <15 minutes, <1 seizure per febrile illness, post-ictal confusion <30 min — EXCELLENT prognosis, do NOT cause brain damage",
        "COMPLEX febrile seizure: Focal, >15 min, or multiple in same illness — higher epilepsy risk, needs EEG",
        "Risk factors for recurrence: Age <18 months, family history, fast fever onset, low seizure threshold. NOT prevented by prophylactic antiepileptics in simple febrile seizures.",
        "Fever management is key: Aggressive fever reduction reduces seizure risk. Tepid sponging + paracetamol + ibuprofen combination most effective.",
        "Meningitis must be excluded by examination (meningeal signs, rash) — LP not routine unless signs present. This child: no signs, no LP needed.",
        "Febrile seizure does NOT lead to epilepsy in most children (only ~15% develop epilepsy later, but not caused by seizure itself)",
        "Parents need reassurance and education: Febrile seizures look scary but are usually benign. Do NOT lead to cognitive damage or special needs.",
        "Rectal Diazepam at home: Parents of children with febrile seizure history should be given prescription + training to use if seizure recurs.",
      ],
      commonMistakes: [
        "Over-investigating simple febrile seizure with lumbar puncture, EEG, neuroimaging — NOT indicated without meningeal signs",
        "Starting prophylactic anticonvulsants (phenobarbital) for all febrile seizures — research shows cognitive harm outweighs benefit in simple febrile seizure",
        "Missing meningitis because of febrile seizure diagnosis — MUST assess for meningeal signs; LP indicated if signs present",
        "Parents wrapping child in heavy quilts to 'manage fever' — actually worsens fever. Needs counseling on proper cooling.",
        "Not teaching parents rectal diazepam use — many families do NOT have rescue medication at home, increasing anxiety about recurrence",
        "Diagnosing epilepsy after first febrile seizure — febrile seizure is NOT epilepsy; epilepsy = unprovoked seizures",
        "Using cold water/ice for sponging — causes vasoconstriction, shivering, increases metabolic heat, worsens fever",
        "Not identifying underlying source of fever — simple URI in this case, but important to treat underlying cause",
      ],
      relevantHistoryQs: ["fever_onset", "seizure_description", "duration", "associated_symptoms", "family_seizure", "prior_seizures", "immunization_status", "developmental"],
      relevantExamIds: ["temperature", "consciousness", "meningeal_signs", "neurological_exam", "rash_check"],
      difficulty: "MODERATE",
      estimatedMinutes: 15,
      subjectTags: ["PE", "Neuro"],
      examRelevance: ["NEXT_STEP1", "NEET_PG", "CLINICAL_EXAM"],
      nmcCompetencyCode: "PE4.2",
      maxScore: 100,
      passingScore: 60,
    },
  },

  // ─── 3. Acute Diarrhea with Severe Dehydration ─────────────────────────────
  {
    topicCode: "PE-MOD-05-TOP-01",
    scenario: {
      patientAge: 1,
      patientSex: "Male",
      patientOccupation: null,
      patientLocation: "Rural village, Begusarai district, Bihar",
      chiefComplaint: "Frequent loose watery stools and vomiting for 2 days; child becoming very weak and not passing urine",
      historyOfPresent: `
- Onset: 2 days ago (48 hours), sudden onset after eating food from community event/fair
- Stools: Watery, non-bloody, increased frequency — 8-10 stools in past 24 hours. Stools appear "rice-water" colored (cholera-like but likely viral)
- Vomiting: Associated vomiting, projectile (not bilious). Has vomited 5-6 times in past 24 hours
- Associated: Abdominal cramping pain (child holds stomach and cries), no fever initially, now low-grade fever 37.8°C
- Fluid intake: Mother tried giving breastmilk and home remedies (gur with salt), child refuses most feeds, vomits back
- Urine output: NO URINE PASSED for last 8-10 hours (previously was passing urine normally)
- Activity: Child was playful 2 days ago, now is very lethargic, weak, does not play or interact
- Weight: Mother reports child was 10 kg 1 month ago, no recent weighing today
      `.trim(),
      pastHistory: "Born at 39 weeks, normal vaginal delivery, birth weight 2.8 kg (small for date but acceptable). Currently breastfeeding (has been since birth, exclusive BF for 6 months, now on complementary feeds + BF). Received routine immunizations (BCG, rotavirus vaccine given at 6, 10, 14 weeks). No previous episodes of severe diarrhea.",
      familyHistory: "No significant family history. Mother is 28 years old, healthy. Father works in city, comes home once a month.",
      socialHistory: "Rural setting, no piped water facility, water from hand pump (shared with other households). No latrine — open defecation practiced. Attended community fair/gathering 3 days ago where food was prepared in unhygienic conditions (likely source of infection). Siblings: 3-year-old sister who also has loose stools but less severe (mother is managing at home).",
      drugHistory: "No medications. No antibiotics given yet. Mother gave antidiarrheal (loperamide) once at home (contraindicated in bloody diarrhea/inflammatory causes).",
      vitals: { pulse: 150, bp: "Not recorded (difficult in agitated child)", temp: 37.8, rr: 38, spo2: 96 },
      generalExam: `
- General appearance: ALERT but LETHARGIC (weak, does not smile, appears ill)
- Pallor: MARKED pallor present (very pale lips, conjunctivae)
- Icterus: Absent
- Cyanosis: Absent
- Clubbing: Absent
- Edema: No pedal edema; skin turgor POOR — when skin of abdomen pinched, returns slowly (>2 seconds) — SIGN OF SEVERE DEHYDRATION
- Eyes: SUNKEN — eyeballs appear withdrawn into sockets (clear sign of severe dehydration)
- Anterior fontanelle: SUNKEN (soft spot on head depressed, not at level of surrounding bone) — dehydration sign
- Lips & mucous membranes: DRY (sticky mucosa, no saliva visible) — severe dehydration
- Temperature: 37.8°C (mild fever, likely from dehydration/infection)
      `.trim(),
      systemicExam: {
        cardiovascular: {
          heart_rate: "150 bpm (severe tachycardia, expected from hypovolemia/shock)",
          heart_sounds: "S1 S2 normal but distant (from poor perfusion)",
          blood_pressure: "Not easily measured (child distressed), likely low-normal to LOW (estimated <80 systolic systolic in infant shock state)",
          capillary_refill: "DELAYED >3 seconds (severe sign — indicates poor peripheral perfusion)",
          skin_perfusion: "Mottled, cool extremities — concerning for shock",
          femoral_pulse: "Difficult to palpate (weak, thready)",
        },
        respiratory: {
          chest_inspection: "Tachypneic (RR 38), uses accessory muscles (intercostal/subcostal indrawing in mild degree)",
          breath_sounds: "Clear bilaterally, no added sounds",
          odor: "Fruity breath odor NOT present (so DKA unlikely)",
        },
        abdominal: {
          abdo_inspection: "Abdomen scaphoid (sunken/concave appearance — from loss of subcutaneous fat and dehydration). No abdominal distension.",
          palpation_superficial: "Mild tenderness over epigastrium (consistent with gastroenteritis)",
          palpation_deep: "Liver edge palpable at 2 cm below costal margin (likely from dehydration/downward displacement from ascites absent)",
          spleen: "Not palpable",
          bowel_sounds: "Increased — hyperactive peristaltic sounds (consistent with diarrheal illness)",
        },
        neurological: {
          consciousness: "Alert but lethargic (can be aroused, responds to commands, but does not appear interested in surroundings) — GCS 14/15",
          irritability: "Child is irritable and cries if moved/examined",
          fontanelle: "SUNKEN (sign of dehydration)",
          reflexes: "Normal but sluggish",
        },
      },
      availableInvestigations: [
        { id: "stool_exam", name: "Stool Routine & Microscopy", cost: 200, turnaround: "30 minutes", category: "Microbiology", result: "Consistency: Watery, rice-water colored. No blood or mucus (NOT bloody diarrhea). WBC <5/hpf (not significantly inflammatory). RBC absent. No parasites visualized. Culture: Pending (48-72 hours).", isAbnormal: true, interpretation: "Rice-water stool without inflammatory markers suggests non-invasive viral diarrhea (rotavirus, norovirus, enterovirus) OR cholera (rare in vaccinated children, but pattern fits). Absence of RBCs/WBCs argues against invasive bacteria.", isEssential: true },
        { id: "cbc", name: "Complete Blood Count", cost: 300, turnaround: "1 hour", category: "Hematology", result: "Hb: 14.2 g/dL (elevated from hemoconcentration due to severe dehydration), WBC: 11,800/μL (normal range), Platelets: 2.5 lakhs", isAbnormal: true, interpretation: "Elevated Hb indicates hemoconcentration — key finding in severe dehydration. WBC normal argues against invasive bacterial infection.", isEssential: true },
        { id: "rft", name: "Renal Function Test (Urea, Creatinine, Electrolytes)", cost: 400, turnaround: "1 hour", category: "Biochemistry", result: "Urea: 52 mg/dL (normal <18 for age, ELEVATED), Creatinine: 1.0 mg/dL (normal ~0.3-0.5 for age, ELEVATED), Na: 148 mEq/L (normal 135-145, hypernatremia), K: 5.8 mEq/L (normal 3.5-5, ELEVATED), Cl: 110 mEq/L (high normal, indicating hyponatremic diarrhea)", isAbnormal: true, interpretation: "Elevated urea/creatinine = pre-renal azotemia from dehydration. Hypernatremia + hyperkalemia = signs of SEVERE DEHYDRATION with electrolyte losses. Kidney function will improve with rehydration.", isEssential: true },
        { id: "blood_gas", name: "Venous Blood Gas", cost: 600, turnaround: "15 minutes", category: "Biochemistry", result: "pH: 7.28 (acidemia), PaCO2: 28 mmHg (respiratory alkalosis trying to compensate), HCO3: 14 mEq/L (metabolic acidosis), Base excess: -12", isAbnormal: true, interpretation: "METABOLIC ACIDOSIS with respiratory compensation — from loss of bicarbonate in diarrhea and poor tissue perfusion (lactic acidosis). Severity reflects hypovolemic shock.", isEssential: true },
        { id: "glucose", name: "Blood Glucose", cost: 100, turnaround: "5 minutes", category: "Biochemistry", result: "Glucose: 98 mg/dL (normal fasting for age 70-100, this is slightly high from stress)", isAbnormal: false, interpretation: "Normal glucose rules out hypoglycemia (risk in malnourished children with severe diarrhea). Stress hyperglycemia is minor.", isEssential: false },
        { id: "stool_culture", name: "Stool Culture & Sensitivity", cost: 800, turnaround: "72 hours", category: "Microbiology", result: "Pending — takes 48-72 hours. Culture growth expected: Likely rotavirus (if viral PCR), or Vibrio cholerae if endemic/high suspicion (but less likely given rotavirus vaccination history).", isAbnormal: false, interpretation: "Culture will identify causative organism and guide targeted therapy. However, treatment should not be delayed while awaiting culture (fluid resuscitation is immediate, antibiotics ONLY if bloody diarrhea or culture positive for invasive organism).", isEssential: false },
        { id: "rapid_rotavirus", name: "Rapid Rotavirus Antigen (ELISA) — if available", cost: 500, turnaround: "30 minutes", category: "Virology", result: "If performed: Expected Positive for Rotavirus (given clinical picture and epidemiology, though not always tested in rural settings)", isAbnormal: false, interpretation: "Confirms viral etiology. Does NOT change management (rotavirus is supportive care only — ORS/IV fluids).", isEssential: false },
        { id: "urine_output", name: "Urine Output Monitoring", cost: 0, turnaround: "Ongoing", category: "Clinical", result: "Zero urine output for past 8-10 hours. Current status: Severe oliguria/anuria indicating prerenal failure from hypovolemia.", isAbnormal: true, interpretation: "No urine = warning sign of severe dehydration. Target: Restore UOP to 0.5-1 mL/kg/hour after IV resuscitation. If UOP does not improve with fluids → consider acute kidney injury (AKI).", isEssential: true },
        { id: "stool_volume", name: "Stool Output Measurement", cost: 0, turnaround: "Ongoing", category: "Clinical", result: "8-10 stools in past 24 hours (approximately 100-150 mL per stool, totaling 800-1500 mL fluid loss in 24 hours)", isAbnormal: true, interpretation: "Ongoing fluid loss continues. Estimated stool losses over 48 hours: ~1500-2000 mL. Needs fluid replacement PLUS ongoing losses.", isEssential: true },
      ],
      correctDiagnosis: "Acute Gastroenteritis (likely Rotavirus) with Severe Dehydration (Hypovolemic Shock)",
      differentials: [
        { diagnosis: "Cholera (Vibrio cholerae infection)", likelihood: "LOW-MEDIUM", reasoning: "Rice-water stools fit cholera, but rotavirus more common in vaccinated populations. Cholera outbreak would show multiple cases in community (sister has milder diarrhea). Culture will differentiate. Treatment is similar (ORS/IV fluids) in both." },
        { diagnosis: "Bacterial Gastroenteritis (Salmonella, Shigella, Campylobacter)", likelihood: "MEDIUM", reasoning: "Community fair exposure could cause bacterial diarrhea. However, absence of blood/WBCs in stool and normal WBC count argue against invasive bacteria. Culture will differentiate." },
        { diagnosis: "Viral Gastroenteritis other than Rotavirus (Norovirus, Enterovirus)", likelihood: "HIGH", reasoning: "Clinical presentation and stool findings fit non-invasive viral diarrhea. Rotavirus is most common but other viruses possible." },
        { diagnosis: "Intussusception", likelihood: "LOW", reasoning: "Intussusception typically presents with colicky pain, palpable mass, passage of 'currant jelly' stools (bloody mucoid). This child has watery non-bloody stools, no mass." },
      ],
      diagnosticReasoning: "12-month-old male from rural Bihar with 48-hour history of watery non-bloody diarrhea (8-10 stools/day) and vomiting after eating food at community fair. Now presenting with SEVERE DEHYDRATION: Marked pallor, sunken eyes, poor skin turgor (>2 sec return), sunken fontanelle, dry mucous membranes, oliguria (no urine × 8-10 hours), tachycardia (HR 150), delayed capillary refill (>3 sec), cold mottled extremities — concerning for HYPOVOLEMIC SHOCK. Stool findings (rice-water, no blood/WBCs) suggest viral gastroenteritis (likely rotavirus, despite vaccination coverage). Elevated Hb from hemoconcentration, elevated urea/creatinine (pre-renal azotemia), hypernatremia (148), metabolic acidosis (pH 7.28, HCO3 14) confirm severe dehydration with shock physiology. This child needs URGENT IV fluid resuscitation (bolus therapy) + ongoing maintenance/replacement.",
      managementPlan: {
        immediateActions: [
          { action: "SHOCK ASSESSMENT: Confirm hypovolemic shock criteria (HR >120 for age, BP <5th percentile, delayed capillary refill, cold extremities, oliguria, altered mental status)", reasoning: "This child meets multiple shock criteria — requires ICU-level care. DO NOT delay for investigations.", priority: "STAT" },
          { action: "Establish TWO large-bore IV lines (18-20 gauge cannula if possible)", reasoning: "Two lines allow rapid fluid resuscitation and blood sampling simultaneously. Easier to place before child deteriorates further.", priority: "STAT" },
          { action: "Rapid IV bolus of Normal Saline: 100 mL/kg given as 20 mL/kg per aliquot over 15-20 min", reasoning: "NRP Guideline for severe dehydration in shock: 100 mL/kg (over 1 hour in 3-4 boluses). This child weighs ~10 kg → 1000 mL total. Start 20 mL/kg (200 mL) rapidly, reassess, repeat.", priority: "STAT" },
          { action: "Send blood for investigations while placing IV: CBC, RFT (urea/Cr/Na/K/Cl), ABG, glucose, blood culture (if high fever/sepsis suspected)", reasoning: "Early blood work guides ongoing fluid composition and identifies complications (hyperkalemia, metabolic acidosis, AKI).", priority: "URGENT" },
          { action: "Nasogastric tube (NG) placement if child unable to tolerate oral fluids AND continuing to vomit (high aspiration risk in shock)", reasoning: "NG allows resting stomach while providing slow liquid intake (if needed). Careful placement in child with altered consciousness.", priority: "URGENT" },
          { action: "Obtain stool sample for culture, viral antigen (rotavirus), ova/parasites", reasoning: "Guides organism identification and allows tracking for waterborne/foodborne outbreak", priority: "URGENT" },
          { action: "Monitor urine output hourly — pass Foley catheter if oliguria persists after IV resuscitation (to accurately measure UOP and assess kidney function)", reasoning: "Target UOP: 0.5-1 mL/kg/hour after resuscitation. No urine improvement after fluids = AKI or persistent shock", priority: "URGENT" },
          { action: "Vitamin A supplementation (single high-dose): 200,000 IU IM/PO (standard in diarrhea in India)", reasoning: "WHO recommendation for all children with diarrhea + malnutrition risk. Improves immune response and reduces mortality in India.", priority: "URGENT" },
          { action: "Zinc supplementation: 10 mg elemental zinc daily × 10-14 days (as separate from ongoing replacement)", reasoning: "WHO/UNICEF recommendation: Zinc shortens diarrhea duration and reduces severity. Continued post-diarrhea.", priority: "URGENT" },
        ],
        pharmacological: [
          { drugClass: "Intravenous Crystalloid Fluid (Normal Saline)", examples: ["100 mL/kg total: given as 20 mL/kg boluses over 15-20 min each, repeat 3-4 times over 1 hour"], route: "IV rapid push/bolus", duration: "First 1 hour for initial shock resuscitation", reasoning: "Restores intravascular volume, improves perfusion. Normal saline is isotonic (not hypotonic) — avoids hyponatremia in already hyponatremic patient.", contraindications: ["Overload risk if ongoing losses > fluid input — reassess after each bolus"], indianContext: "NS 500 mL bottle at ₹50-100. Rural setting may require IV setup from private clinic/hospital." },
          { drugClass: "Oral Rehydration Solution (ORS)", examples: ["WHO-recommended low-osmolarity ORS: 2.6g/L NaCl + 2.6g/L KCl + 2g/L glucose + 1.5g/L trisodium citrate (available as pre-made packets)", "Homemade: 1 liter water + 6 teaspoons sugar + ½ teaspoon salt"], route: "Oral (once vomiting controlled)", duration: "After IV shock reversal, transition to ORS for ongoing losses (until diarrhea stops)", reasoning: "ORS replaces ongoing losses (typically 50-100 mL/kg/day in moderate-severe diarrhea). Glucose-coupled sodium absorption enhances uptake.", contraindications: ["Persistent vomiting (switch to NG ORS) or continued shock (needs IV)"], indianContext: "WHO ORS packet available at Jan Aushadhi stores at ₹10-15 per liter. Mothers can prepare home solution if ORS unavailable." },
          { drugClass: "Zinc Supplementation", examples: ["Elemental zinc 10 mg per day (as zinc gluconate/acetate) for 10-14 days"], route: "Oral", duration: "10-14 days starting within 24 hours of diarrhea onset", reasoning: "WHO recommendation: Reduces diarrhea duration by ~25% and prevents diarrhea in next 2-3 months. Especially beneficial in undernourished children.", contraindications: ["None (well-tolerated)"], indianContext: "Zinc lozenges/syrups available at ₹50-100 for 2-week course." },
          { drugClass: "Vitamin A Supplementation", examples: ["Retinyl palmitate 200,000 IU (single high-dose), IM or PO"], route: "IM or PO", duration: "Single dose at admission (can repeat at 2 weeks if severe malnutrition)", reasoning: "WHO recommends for all children with diarrhea in India (malnutrition risk). Reduces mortality by ~20% in developing countries.", contraindications: ["Hypervitaminosis A (rare from single dose)"], indianContext: "Vitamin A capsule at ₹5-10." },
          { drugClass: "Probiotics (optional)", examples: ["Saccharomyces boulardii 250-500 mg BID, OR Lactobacillus GG"], route: "Oral", duration: "5-7 days during diarrhea", reasoning: "Some evidence for faster resolution of viral diarrhea. Not essential but can help. NOT first-line.", contraindications: ["Immunocompromised (vanishingly rare in this age)"], indianContext: "Probiotic powders available at ₹300-500 for 2-week course." },
          { drugClass: "Antibiotics (ONLY IF invasive/bloody diarrhea or culture-positive for invasive organism)", examples: ["Avoid routine antibiotics. Only if: Bloody diarrhea + fever → Ceftriaxone 80 mg/kg/day (this child: ~800 mg/day in 2 divided doses) or Azithromycin 10 mg/kg/day", "NOT indicated in non-bloody viral diarrhea (increases resistance, no benefit)"], route: "IV/PO", duration: "5-7 days if indicated", reasoning: "Antibiotics are CONTRAINDICATED in non-invasive viral diarrhea. Increase resistance. Not needed in this case (no blood, normal WBC). However, if culture grows invasive pathogen (Shigella, Salmonella, Campylobacter, Cholera) → antibiotic therapy.", contraindications: ["Indication for antibiotics absent in this case — viral etiology"], indianContext: "Ceftriaxone injection at ₹30-50. But NOT needed in this case." },
          { drugClass: "Anti-motility agents (AVOID)", examples: ["Loperamide, diphenoxylate — CONTRAINDICATED in diarrhea"], route: "Oral", duration: "Do not use", reasoning: "Anti-motility agents increase risk of toxic megacolon, intussusception, and bacterial translocation. Worse outcomes in children. This child's mother INCORRECTLY gave loperamide at home — should be stopped.", contraindications: ["ALL diarrheal illnesses in children <5 years"], indianContext: "Common mistake in rural India — OTC loperamide available at ₹20-30/strip. EDUCATE mothers to avoid." },
        ],
        nonPharmacological: [
          { intervention: "Continued breastfeeding once child can tolerate (even if vomiting initially)", reasoning: "Breast milk provides partial hydration + immune factors. Do not stop BF. Start with small frequent feeds.", duration: "Can resume after IV resuscitation once vomiting controlled" },
          { intervention: "Maintain strict intake/output charting: Note stool volume, vomitus volume, IV intake, oral intake, urine output", reasoning: "Guides ongoing fluid prescriptions. Essential in severe dehydration management.", duration: "Throughout hospitalization" },
          { intervention: "Monitor electrolytes (Na, K, Cl) during resuscitation — adjust IV fluids if hyperkalemia develops", reasoning: "Hyperkalemia (K 5.8 in this case) can cause cardiac arrhythmias. IV saline + glucose + insulin can lower K if critical.", duration: "First 24-48 hours" },
          { intervention: "Head elevation 30°, keep child NPO initially (nothing by mouth) — switch to ORS once vomiting controlled", reasoning: "Prevents aspiration. Allows bowel rest initially.", duration: "First 4-6 hours" },
          { intervention: "Frequent handling and gentle care — child is already stressed and ill", reasoning: "Minimizes further sympathetic activation, maintains calm", duration: "Throughout stay" },
        ],
        monitoring: [
          { parameter: "Vital signs (HR, RR, BP, SpO2)", frequency: "Every 15 min × 1 hour, then every 30 min × 2 hours, then hourly", target: "HR decreasing toward 120-140 (not 150+), RR <35, SBP >80 (acceptable for 12-month-old in resuscitation), cap refill <2 sec", escalation: "If HR remains >150, cap refill >3 sec, or BP dropping → ongoing shock, continue/escalate fluids, consider sepsis" },
          { parameter: "Urine output (if Foley in place)", frequency: "Hourly", target: "0.5-1 mL/kg/hour (this child: 5-10 mL/hour minimum). Any urine is improvement from oliguria.", escalation: "If no improvement with fluids → AKI, may need ICU monitoring, fluid restriction, dopamine/dobutamine if persistent shock" },
          { parameter: "Stool/vomitus output (total daily)", frequency: "Record each episode", target: "Decreasing trend; <10 stools/day by day 2-3 of treatment", escalation: "If increasing output despite treatment → reassess diagnosis, consider invasive organism, malabsorption" },
          { parameter: "Skin turgor, fontanelle appearance, eye position", frequency: "Every 2 hours", target: "Skin turgor improving (<1 sec return), fontanelle normalizing, eyes less sunken", escalation: "Persistent or worsening dehydration signs → reassess IV rate, ongoing losses" },
          { parameter: "Electrolytes (Na, K, Cl, HCO3) and renal function (urea, Cr)", frequency: "Repeat at 4-6 hours, then daily", target: "Na normalizing toward 135-145, K decreasing toward 3.5-5, HCO3 improving (metabolic acidosis resolving), Cr trending down as perfusion improves", escalation: "Rising creatinine despite fluid resuscitation = AKI progression, may need ICU + renal monitoring" },
          { parameter: "Temperature trend", frequency: "Every 4 hours", target: "Fever resolving (typically resolves within 24-48 hours in viral gastroenteritis)", escalation: "Persistent fever despite fluids → consider bacterial infection, secondary infection, complications (UTI, pneumonia)" },
        ],
        lifestyle: {
          dos: ["Resume breastfeeding as soon as able — breast milk is ideal rehydration + nutrition source", "Feed frequent small amounts once child tolerates (avoid large meals initially, can cause vomiting)", "Maintain hygiene: Hand washing, separate utensils, sanitation to prevent spread to siblings", "Complete course of zinc (10-14 days) and vitamin A supplementation", "Return to normal diet (age-appropriate) as soon as diarrhea stops (avoid unnecessary dietary restrictions)"],
          donts: ["Do NOT give anti-diarrheal medications (loperamide, diphenoxylate) — dangerous in children", "Do NOT restrict fluids (common mistake) — dehydration is the danger, not fluid itself", "Do NOT use hypotonic fluids (water, tea, dilute juice) — can worsen hyponatremia", "Do NOT delay IV fluids while waiting for oral ORS — severe dehydration needs IV resuscitation", "Do NOT give antibiotics unless blood in stool or positive culture"],
          indianSpecific: ["Educate on boiling/chlorination of drinking water — open defecation + poor sanitation main cause of diarrhea in rural Bihar", "Teach proper ORS preparation (1 liter water + 1 packet WHO-ORS, or salt/sugar solution if ORS unavailable)", "Rotavirus vaccination reduces severity — encourage community vaccination programs", "Zinc supplementation post-diarrhea — continues even after diarrhea stops for 10-14 days (many mothers stop early)", "Teach mothers: Diarrhea is treatable at home with ORS if no severe dehydration signs (only severe dehydration needs hospital)"],
        },
        followUp: {
          when: "Daily during hospitalization (typically 2-3 days), then at 1 week, 2 weeks, and 1 month",
          what: ["Daily clinical assessment (hydration status, stool output, urine output)", "Nutritional assessment — at-risk for post-diarrheal malnutrition. Consider high-protein supplementation (fortified rice, eggs, dal)", "Zinc levels: Ensure compliance with 10-14 day course", "Growth monitoring at 1 month (weight gain expected once diarrhea resolves)", "If prolonged diarrhea (>7-10 days) — investigate for secondary lactose intolerance, post-infectious IBS, or persistent infection"],
        },
        referral: {
          needed: true,
          to: "Pediatric ICU if: Persistent shock unresponsive to 2-3 boluses, severe hyperkalemia (>6.5 with ECG changes), acute kidney injury (rising Cr despite fluids), or severe malnutrition (weight <7 kg for age)",
          urgency: "IMMEDIATE if shock persists",
        },
      },
      redFlags: [
        { flag: "Hypotension (SBP <80 mmHg) or persistent tachycardia (HR >150) after 2 boluses of IV saline", action: "Ongoing hypovolemic shock — escalate to ICU, prepare for inotropic support (dopamine 5-10 mcg/kg/min), consider transfusion if severe anemia", urgency: "IMMEDIATE" },
        { flag: "No urine output despite adequate IV resuscitation (>1 hour post-bolus)", action: "Assess for acute kidney injury (check trending creatinine). May need Foley catheter if not placed. Consider nephrology consultation. Fluid management should become restrictive if AKI confirmed.", urgency: "URGENT" },
        { flag: "Serum potassium >6.0 with peaked T-waves on ECG", action: "Life-threatening hyperkalemia — give calcium chloride 0.1-0.2 mL/kg IV (stabilizes myocardium), then glucose + insulin (drives K into cells), or NaHCO3 if available. Arrange dialysis if K >7.", urgency: "IMMEDIATE" },
        { flag: "Worsening acidosis (pH <7.2, HCO3 <10) or altered consciousness post-resuscitation", action: "Risk of cerebral edema from rapid rehydration in hypernatremia — slow rehydration (over 48 hours) if Na >150. ICU care needed.", urgency: "URGENT" },
        { flag: "Seizure development during resuscitation (from hyponatremia, hypoglycemia, or hypoxia)", action: "Assess glucose immediately. If hypoglycemic — give IV dextrose 0.25-0.5 g/kg. If Na <120 — restrict fluid rate. Manage airway, give seizure medication if prolonged.", urgency: "IMMEDIATE" },
      ],
      keyLearningPoints: [
        "Severe dehydration in diarrhea presents as: Sunken fontanelle/eyes, poor skin turgor (>2 sec), dry mucous membranes, tachycardia, delayed cap refill, oliguria, altered mental status",
        "Severe dehydration with shock needs IV bolus (100 mL/kg in 1 hour): 20 mL/kg boluses × 3-4 aliquots, reassess after each. This is different from maintenance — must give rapidly.",
        "Use isotonic fluid (Normal Saline) NOT hypotonic (causes hyponatremia). Child is already hypernatremic (148) — avoid worsening.",
        "Stool findings guide diagnosis: Rice-water (non-invasive viral/cholera), bloody (invasive bacteria) → treat accordingly.",
        "Antibiotics NOT indicated in non-bloody viral diarrhea — increases resistance. Only if bloody or culture-positive invasive pathogen.",
        "WHO recommendation: ALL diarrhea children get zinc (10 mg × 10-14 days) and vitamin A (200,000 IU single dose) — reduces duration/mortality in India.",
        "ORS is gold standard maintenance after shock reversal — safe, inexpensive, effective. Teach mothers correct preparation.",
        "Continue breastfeeding even during diarrhea/dehydration — do NOT withhold. Resume regular diet quickly once diarrhea resolves.",
        "Rural sanitation crucial: Open defecation, contaminated water = diarrhea reservoir. Community education on latrine use, water boiling.",
        "Post-diarrhea nutrition: Children at risk for malnutrition, protein deficiency. Fortified foods, eggs, dal for recovery.",
      ],
      commonMistakes: [
        "Over-researching before treating: Severe dehydration/shock needs IV fluids NOW, not after all blood tests. Start fluids immediately.",
        "Using hypotonic fluids (D5W, half-normal saline) — worsens hyponatremia. Use Normal Saline ALWAYS in dehydration.",
        "Slow IV fluid rate in shock: Boluses must be rapid (15-20 min per 20 mL/kg), not slow infusion. Shock needs fast resuscitation.",
        "Giving antibiotics routinely — increases resistance, no benefit in viral diarrhea. Only if bloodstained or invasive organism proven.",
        "Giving anti-motility drugs (loperamide) — dangerous, increases toxic megacolon risk. CONTRAINDICATED in ALL children <5 years with diarrhea.",
        "Stopping breastfeeding — WRONG. Continue BF even during diarrhea. BF provides hydration + immunity.",
        "Restricting diet long-term — children need nutrition to recover. Resume normal age-appropriate diet within 1-2 days of diarrhea onset.",
        "Not continuing zinc supplementation — many mothers stop once diarrhea stops. Zinc needs 10-14 day course minimum for benefit.",
        "Missing severe malnutrition (MUAC <11.5 cm) — worsens prognosis. Nutritional rehabilitation needed.",
        "Poor sanitation/water advice — if child goes back to same unsanitary environment, diarrhea will recur. Address root causes (latrine, water).",
      ],
      relevantHistoryQs: ["onset", "stool_character", "frequency", "associated_symptoms", "fluid_intake", "urine_output", "exposures", "hygiene_practices"],
      relevantExamIds: ["dehydration_signs", "sunken_fontanelle", "skin_turgor", "capillary_refill", "vital_signs", "urine_output", "stool_volume"],
      difficulty: "MODERATE",
      estimatedMinutes: 25,
      subjectTags: ["PE", "GI"],
      examRelevance: ["NEXT_STEP1", "NEET_PG", "CLINICAL_EXAM"],
      nmcCompetencyCode: "PE5.1",
      maxScore: 100,
      passingScore: 60,
    },
  },
];
