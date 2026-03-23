export const fmMcqs2 = [
  {
    type: "single-best-answer" as const,
    stem: "A 35-year-old male is found unconscious in a closed room with a charcoal burning stove. What is the likely cause of death?",
    clinicalVignette: "Police bring a body from an accident scene. Autopsy findings show cherry-red discoloration of skin and tissues.",
    options: [
      { id: "a", text: "Carbon monoxide poisoning", isCorrect: true },
      { id: "b", text: "Cyanide poisoning", isCorrect: false },
      { id: "c", text: "Hydrogen sulfide poisoning", isCorrect: false },
      { id: "d", text: "Oxygen deprivation asphyxia", isCorrect: false }
    ],
    explanation: "Carbon monoxide (CO) from incomplete combustion binds hemoglobin forming carboxyhemoglobin, preventing oxygen binding. Cherry-red discoloration is pathognomonic. Cyanide causes pink discoloration; H2S causes greenish discoloration; general asphyxia causes cyanosis.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Thanatology", "Toxicology", "Asphyxia", "CBME-Competency-001"],
    subjectCode: "FM",
    topicCode: "FM-MOD-TOX-CO",
    textbookRefs: ["Modi's Medical Jurisprudence & Toxicology", "Reddy's Forensic Medicine"]
  },
  {
    type: "single-best-answer" as const,
    stem: "Which sign indicates that death occurred several hours before autopsy?",
    clinicalVignette: "An elderly woman found dead at home. Examiner notes green discoloration of abdomen.",
    options: [
      { id: "a", text: "Hypostasis", isCorrect: false },
      { id: "b", text: "Rigor mortis", isCorrect: false },
      { id: "c", text: "Pallor mortis", isCorrect: false },
      { id: "d", text: "Early putrefaction (green discoloration)", isCorrect: true }
    ],
    explanation: "Putrefaction begins 24-48 hours post-mortem in warm climate. Bacterial action produces hydrogen sulfide causing green discoloration (usually right iliac fossa). Hypostasis appears within 30min-2hr; rigor mortis 2-6 hours; pallor mortis immediate.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Thanatology", "Post-mortem Changes", "CBME-Competency-002"],
    subjectCode: "FM",
    topicCode: "FM-MOD-TANAT-PM",
    textbookRefs: ["Reddy's Forensic Medicine", "Modi's Medical Jurisprudence"]
  },
  {
    type: "single-best-answer" as const,
    stem: "A person is found with petechiae, nail scratches, and ligature marks on the neck. What is the probable cause of death?",
    clinicalVignette: "A 45-year-old male found hanging in his bedroom by family.",
    options: [
      { id: "a", text: "Ligature strangulation", isCorrect: true },
      { id: "b", text: "Manual strangulation", isCorrect: false },
      { id: "c", text: "Garroting", isCorrect: false },
      { id: "d", text: "Suffocation", isCorrect: false }
    ],
    explanation: "Ligature strangulation: ligature (rope, cloth) tightens neck, obstructing blood flow. Signs: ligature mark, petechiae (above ligature), nail scratches (if trying to remove), tongue protrusion. Manual strangulation has hand marks; garroting uses stick twisted; suffocation has no external marks.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Asphyxia", "Strangulation", "CBME-Competency-003"],
    subjectCode: "FM",
    topicCode: "FM-MOD-ASP-STRANG",
    textbookRefs: ["Reddy's Forensic Medicine", "Modi's Medical Jurisprudence"]
  },
  {
    type: "single-best-answer" as const,
    stem: "Which organ is most commonly damaged in blunt force trauma to the abdomen?",
    clinicalVignette: "A 28-year-old struck by vehicle. On autopsy, massive internal bleeding noted.",
    options: [
      { id: "a", text: "Liver", isCorrect: true },
      { id: "b", text: "Spleen", isCorrect: false },
      { id: "c", text: "Pancreas", isCorrect: false },
      { id: "d", text: "Kidneys", isCorrect: false }
    ],
    explanation: "Liver is largest abdominal organ, vulnerable to blunt trauma. High vascularity causes severe hemorrhage. Spleen also frequently injured but smaller. Pancreas/kidneys less commonly injured in typical blunt trauma patterns. Liver injuries commonly fatal if major vessels damaged.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Injury Patterns", "Internal Trauma", "CBME-Competency-004"],
    subjectCode: "FM",
    topicCode: "FM-MOD-INJ-ABD",
    textbookRefs: ["Reddy's Forensic Medicine", "Modi's Medical Jurisprudence"]
  },
  {
    type: "single-best-answer" as const,
    stem: "What is the legal definition of rape under Indian Penal Code Section 375?",
    clinicalVignette: "A medical examiner conducting forensic evaluation of sexual assault victim.",
    options: [
      { id: "a", text: "Non-consensual penetration of vagina/anus/mouth with penis or objects, without consent or through force/threat/fraud/incapacity", isCorrect: true },
      { id: "b", text: "Only penetration of vagina by penis", isCorrect: false },
      { id: "c", text: "Only vaginal penetration without consent", isCorrect: false },
      { id: "d", text: "Sexual contact with any body part without permission", isCorrect: false }
    ],
    explanation: "IPC Section 375 (as amended 2013): Rape includes penetration of vagina, urethra, anus, or mouth with penis or any object. Requires absence of consent obtained by force, threat, fraud, deceit, coercion, or when victim incapable of consenting (unconscious, mental illness, age).",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "REMEMBER" as const,
    examTags: ["Sexual Offences", "IPC Sections", "Legal Definition", "CBME-Competency-005"],
    subjectCode: "FM",
    topicCode: "FM-MOD-SO-RAPE",
    textbookRefs: ["Modi's Medical Jurisprudence", "Indian Penal Code"]
  },
  {
    type: "single-best-answer" as const,
    stem: "Which forensic sign indicates death occurred within 12 hours in temperate climate?",
    clinicalVignette: "Body discovered in apartment. Hypostasis is prominent, rigor mortis present.",
    options: [
      { id: "a", text: "Rigor mortis and hypostasis", isCorrect: true },
      { id: "b", text: "Pallor mortis and algor mortis", isCorrect: false },
      { id: "c", text: "Corneal opacity only", isCorrect: false },
      { id: "d", text: "Skin slippage", isCorrect: false }
    ],
    explanation: "Timeline of post-mortem changes (temperate): Pallor mortis (0-15 min), Algor mortis (1-8 hr), Hypostasis (30 min-2 hr, fixed >12 hr), Rigor mortis (2-6 hr, peak 12 hr), Corneal opacity (2-3 hr), Skin slippage (24-48 hr). Combination of rigor+hypostasis suggests 2-12 hours.",
    difficulty: "HARD" as const,
    bloomsLevel: "ANALYZE" as const,
    examTags: ["Thanatology", "Time of Death", "CBME-Competency-006"],
    subjectCode: "FM",
    topicCode: "FM-MOD-TANAT-TOD",
    textbookRefs: ["Reddy's Forensic Medicine"]
  },
  {
    type: "single-best-answer" as const,
    stem: "A woman reports sexual assault. What is the legal age of consent for sexual intercourse in India (as per IPC)?",
    clinicalVignette: "Young girl presenting to hospital after alleged sexual assault.",
    options: [
      { id: "a", text: "18 years", isCorrect: true },
      { id: "b", text: "16 years", isCorrect: false },
      { id: "c", text: "21 years", isCorrect: false },
      { id: "d", text: "16 with parental consent", isCorrect: false }
    ],
    explanation: "Under IPC Section 375, age of consent = 18 years (Protection of Children from Sexual Offences Act 2012). Any sexual contact with person <18 without consent is statutory rape. No exception for marriage or parental consent under current law.",
    difficulty: "EASY" as const,
    bloomsLevel: "REMEMBER" as const,
    examTags: ["Sexual Offences", "IPC Sections", "Child Protection", "CBME-Competency-007"],
    subjectCode: "FM",
    topicCode: "FM-MOD-SO-CONSENT",
    textbookRefs: ["Indian Penal Code", "POCSO Act 2012"]
  },
  {
    type: "single-best-answer" as const,
    stem: "Which finding on genital examination is MOST specific for recent sexual intercourse?",
    clinicalVignette: "Forensic medical examiner evaluating victim of alleged rape within 24 hours.",
    options: [
      { id: "a", text: "Spermatozoa in vaginal smear", isCorrect: true },
      { id: "b", text: "Vaginal lacerations", isCorrect: false },
      { id: "c", text: "Loss of hymenal tissue", isCorrect: false },
      { id: "d", text: "Vaginal discharge", isCorrect: false }
    ],
    explanation: "Spermatozoa in vaginal/anal smear is most specific for sexual intercourse (if from alleged assailant). Present up to 72 hours. Vaginal lacerations/hymenal damage NOT specific (can occur in consensual intercourse or from other trauma). Discharge is non-specific.",
    difficulty: "HARD" as const,
    bloomsLevel: "ANALYZE" as const,
    examTags: ["Sexual Offences", "Forensic Evidence", "Medical Examination", "CBME-Competency-008"],
    subjectCode: "FM",
    topicCode: "FM-MOD-SO-EXAM",
    textbookRefs: ["Reddy's Forensic Medicine", "Modi's Medical Jurisprudence"]
  },
  {
    type: "single-best-answer" as const,
    stem: "Under IPC, what is the punishment for causing death by negligence?",
    clinicalVignette: "A doctor inadvertently administers wrong drug causing patient death. Investigating magistrate considering charges.",
    options: [
      { id: "a", text: "Section 304: imprisonment up to 2 years and/or fine up to Rs. 1000", isCorrect: true },
      { id: "b", text: "Section 304A: only fine, no imprisonment", isCorrect: false },
      { id: "c", text: "Section 302: life imprisonment", isCorrect: false },
      { id: "d", text: "Section 336: warning and community service", isCorrect: false }
    ],
    explanation: "IPC Section 304: Death caused by act endangering life (rash/negligent). Punishment: imprisonment up to 2 years and/or fine up to Rs.1000. Section 304A (mere negligence): up to 6 months/fine Rs.250. Section 302: murder (with criminal intent).",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "REMEMBER" as const,
    examTags: ["IPC Sections", "Criminal Law", "Medical Negligence", "CBME-Competency-009"],
    subjectCode: "FM",
    topicCode: "FM-MOD-LAW-304",
    textbookRefs: ["Indian Penal Code", "Modi's Medical Jurisprudence"]
  },
  {
    type: "single-best-answer" as const,
    stem: "A 55-year-old male dies from inhalation of gas after inhaling fumes from a chemical factory. Which type of poisoning is this?",
    clinicalVignette: "Occupational health officer investigating workplace death.",
    options: [
      { id: "a", text: "Acute poisoning (inhalation route)", isCorrect: true },
      { id: "b", text: "Chronic poisoning (occupational)", isCorrect: false },
      { id: "c", text: "Cumulative poisoning", isCorrect: false },
      { id: "d", text: "Therapeutic poisoning", isCorrect: false }
    ],
    explanation: "Classification of poisoning by onset: Acute (immediate effect, single exposure), Chronic (repeated exposure, symptoms develop gradually), Cumulative (poison not excreted, accumulates in body). This case: acute inhalation poisoning. Route matters for diagnosis and legal implications.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Toxicology", "Poisoning Classification", "Occupational Health", "CBME-Competency-010"],
    subjectCode: "FM",
    topicCode: "FM-MOD-TOX-CLASS",
    textbookRefs: ["Modi's Medical Jurisprudence & Toxicology"]
  },
  {
    type: "single-best-answer" as const,
    stem: "Which identification method is MOST reliable for determining identity of severely decomposed remains?",
    clinicalVignette: "Police investigating missing person. Decomposed body recovered after 2 months.",
    options: [
      { id: "a", text: "DNA analysis from bone/teeth", isCorrect: true },
      { id: "b", text: "Dental records comparison", isCorrect: false },
      { id: "c", text: "Facial features", isCorrect: false },
      { id: "d", text: "Clothing and personal effects", isCorrect: false }
    ],
    explanation: "DNA analysis most reliable for severely decomposed bodies. Can obtain DNA from bone, teeth, hair roots despite decomposition. Dental records good if pre-mortem records available. Facial features destroyed in advanced decomposition. Clothing/effects not specific for identity.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Identification", "DNA Analysis", "Thanatology", "CBME-Competency-011"],
    subjectCode: "FM",
    topicCode: "FM-MOD-ID-DNA",
    textbookRefs: ["Reddy's Forensic Medicine", "Modi's Medical Jurisprudence"]
  },
  {
    type: "single-best-answer" as const,
    stem: "What is the most common sign of blunt force head injury?",
    clinicalVignette: "Assault victim with head trauma. CT scan shows intracranial bleeding.",
    options: [
      { id: "a", text: "Epidural hematoma", isCorrect: false },
      { id: "b", text: "Subdural hematoma", isCorrect: true },
      { id: "c", text: "Subarachnoid hemorrhage", isCorrect: false },
      { id: "d", text: "Intracerebral hemorrhage", isCorrect: false }
    ],
    explanation: "Subdural hematoma most common in blunt head trauma, especially in elderly (bridging veins fragile). Follows impact. Epidural hematoma less common, requires skull fracture. Subarachnoid from violent shaking/falls. Intracerebral less common in simple blunt trauma.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Head Injury", "Trauma", "CBME-Competency-012"],
    subjectCode: "FM",
    topicCode: "FM-MOD-INJ-HEAD",
    textbookRefs: ["Reddy's Forensic Medicine"]
  },
  {
    type: "single-best-answer" as const,
    stem: "Under IPC Section 376, what is the punishment for rape?",
    clinicalVignette: "Court proceedings for rape case conviction.",
    options: [
      { id: "a", text: "Imprisonment not less than 7 years, and may extend to life imprisonment, with fine", isCorrect: true },
      { id: "b", text: "Imprisonment not less than 2 years, and fine only", isCorrect: false },
      { id: "c", text: "Life imprisonment without fine", isCorrect: false },
      { id: "d", text: "Imprisonment at judge's discretion, minimum 1 year", isCorrect: false }
    ],
    explanation: "IPC Section 376: Rape punishment = imprisonment not less than 7 years, may extend to life imprisonment, with fine. Enhanced punishment if victim <16 years (10 years minimum) or if committed by person in authority (10 years minimum). Section 376D (gang rape): 20 years or life.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "REMEMBER" as const,
    examTags: ["IPC Sections", "Sexual Offences", "Criminal Punishment", "CBME-Competency-013"],
    subjectCode: "FM",
    topicCode: "FM-MOD-LAW-376",
    textbookRefs: ["Indian Penal Code", "Modi's Medical Jurisprudence"]
  },
  {
    type: "single-best-answer" as const,
    stem: "Which organ shows earliest post-mortem change?",
    clinicalVignette: "Forensic pathologist noting post-mortem changes during autopsy.",
    options: [
      { id: "a", text: "Brain (putrefaction begins earliest)", isCorrect: true },
      { id: "b", text: "Liver", isCorrect: false },
      { id: "c", text: "Heart", isCorrect: false },
      { id: "d", text: "Stomach", isCorrect: false }
    ],
    explanation: "Brain putrefies earliest due to high water content and bacterial load. Putrefaction timeline depends on organ: brain 2-3 days, intestines 1-2 days, liver 3-5 days. Putrefaction accelerated by warm weather, delayed by cold.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Thanatology", "Putrefaction", "CBME-Competency-014"],
    subjectCode: "FM",
    topicCode: "FM-MOD-TANAT-PUTR",
    textbookRefs: ["Reddy's Forensic Medicine"]
  },
  {
    type: "single-best-answer" as const,
    stem: "What is the definition of 'grievous injury' under IPC?",
    clinicalVignette: "Legal professional defining injury categories in criminal case.",
    options: [
      { id: "a", text: "Injury causing loss of function of any organ/member for >20 days", isCorrect: true },
      { id: "b", text: "Any visible injury on body", isCorrect: false },
      { id: "c", text: "Injury requiring hospitalization only", isCorrect: false },
      { id: "d", text: "Injury causing permanent disability only", isCorrect: false }
    ],
    explanation: "IPC Section 320-328: Grievous injury = 8 types including injury causing loss of body member function >20 days. Simple injury = causing loss of body function <20 days. This distinction affects criminal charges and punishment significantly.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "REMEMBER" as const,
    examTags: ["IPC Sections", "Injury Classification", "Criminal Law", "CBME-Competency-015"],
    subjectCode: "FM",
    topicCode: "FM-MOD-LAW-GRIEV",
    textbookRefs: ["Indian Penal Code", "Modi's Medical Jurisprudence"]
  },
  {
    type: "single-best-answer" as const,
    stem: "Which poison primarily affects the cardiovascular system?",
    clinicalVignette: "Autopsy findings show pulmonary edema and cardiac dysfunction in poisoning victim.",
    options: [
      { id: "a", text: "Digitalis/cardiac glycosides", isCorrect: true },
      { id: "b", text: "Cyanide", isCorrect: false },
      { id: "c", text: "Strychnine", isCorrect: false },
      { id: "d", text: "Corrosive acids", isCorrect: false }
    ],
    explanation: "Digitalis (foxglove) toxin inhibits Na-K ATPase, causing arrhythmias, bradycardia, AV block, eventually cardiac failure. Cyanide affects respiration; strychnine causes muscle rigidity; corrosive acids cause GI perforation.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Toxicology", "Organ-specific Poisons", "CBME-Competency-016"],
    subjectCode: "FM",
    topicCode: "FM-MOD-TOX-CARDIAC",
    textbookRefs: ["Modi's Medical Jurisprudence & Toxicology"]
  },
  {
    type: "single-best-answer" as const,
    stem: "What is the most common cause of death in hanging?",
    clinicalVignette: "A person found hanging. Forensic pathologist determining mechanism of death.",
    options: [
      { id: "a", text: "Vagal inhibition (sudden reflex cardiac arrest)", isCorrect: true },
      { id: "b", text: "Cerebral anoxia only", isCorrect: false },
      { id: "c", text: "Tracheal compression only", isCorrect: false },
      { id: "d", text: "Carotid artery compression only", isCorrect: false }
    ],
    explanation: "In hanging, death usually from vagal inhibition (sudden reflex cardiac arrest from neck pressure on vagus nerve and carotid bifurcation) rather than asphyxia. Complete loss of consciousness occurs within seconds. High knot position increases vagal effect risk.",
    difficulty: "HARD" as const,
    bloomsLevel: "ANALYZE" as const,
    examTags: ["Asphyxia", "Hanging", "Mechanism of Death", "CBME-Competency-017"],
    subjectCode: "FM",
    topicCode: "FM-MOD-ASP-HANG",
    textbookRefs: ["Reddy's Forensic Medicine", "Modi's Medical Jurisprudence"]
  },
  {
    type: "single-best-answer" as const,
    stem: "Under IPC Section 304A, what is the punishment for causing death by negligence?",
    clinicalVignette: "Medical professional charged with negligence causing patient death.",
    options: [
      { id: "a", text: "Imprisonment up to 6 months and/or fine up to Rs. 250", isCorrect: true },
      { id: "b", text: "Imprisonment up to 2 years and/or fine up to Rs. 1000", isCorrect: false },
      { id: "c", text: "Life imprisonment only", isCorrect: false },
      { id: "d", text: "Fine only, no imprisonment", isCorrect: false }
    ],
    explanation: "IPC Section 304A: Causing death by negligence. Punishment = imprisonment up to 6 months and/or fine up to Rs.250. Less severe than Section 304 (rash act endangering life: 2 years). 304A requires pure negligence without any rash element.",
    difficulty: "EASY" as const,
    bloomsLevel: "REMEMBER" as const,
    examTags: ["IPC Sections", "Medical Negligence", "CBME-Competency-018"],
    subjectCode: "FM",
    topicCode: "FM-MOD-LAW-304A",
    textbookRefs: ["Indian Penal Code", "Modi's Medical Jurisprudence"]
  },
  {
    type: "single-best-answer" as const,
    stem: "Which finding indicates drowning as cause of death?",
    clinicalVignette: "Body recovered from river. Pathologist investigating cause of death.",
    options: [
      { id: "a", text: "Frothy fluid in airways and lungs", isCorrect: true },
      { id: "b", text: "Pallor of face only", isCorrect: false },
      { id: "c", text: "Skin wrinkling from water contact", isCorrect: false },
      { id: "d", text: "Dependent hypostasis only", isCorrect: false }
    ],
    explanation: "Frothy fluid in trachea and lungs (pulmonary edema with foam - 'pulmonary spume') is most characteristic of drowning. Formed by water mixing with respiratory secretions in terminal gasping. Other signs: waterlogging of lungs, water in stomach/GI tract, weed in mouth.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Asphyxia", "Drowning", "Post-mortem Findings", "CBME-Competency-019"],
    subjectCode: "FM",
    topicCode: "FM-MOD-ASP-DROWN",
    textbookRefs: ["Reddy's Forensic Medicine"]
  },
  {
    type: "single-best-answer" as const,
    stem: "Which substance when ingested causes gastrointestinal perforation and corrosive injury?",
    clinicalVignette: "Poisoning victim with severe abdominal pain and vomiting blood.",
    options: [
      { id: "a", text: "Corrosive acids (sulfuric, nitric, hydrochloric)", isCorrect: true },
      { id: "b", text: "Organophosphorus compounds", isCorrect: false },
      { id: "c", text: "Barbiturates", isCorrect: false },
      { id: "d", text: "Morphine alkaloids", isCorrect: false }
    ],
    explanation: "Corrosive acids cause chemical burns of lips, mouth, esophagus, stomach causing perforation, peritonitis, and death. Burns appear brown/black due to charring. Alkalis (caustic soda) cause liquefactive necrosis. Fatality rate high in corrosive ingestion (30-50%).",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Toxicology", "Corrosive Poisoning", "CBME-Competency-020"],
    subjectCode: "FM",
    topicCode: "FM-MOD-TOX-CORR",
    textbookRefs: ["Modi's Medical Jurisprudence & Toxicology"]
  },
  {
    type: "single-best-answer" as const,
    stem: "What is the legal definition of 'insanity' in criminal law under IPC Section 84?",
    clinicalVignette: "Accused in murder case claims insanity defense. Psychiatrist evaluating mental state.",
    options: [
      { id: "a", text: "Unsoundness of mind at time of act causing person not to know nature/quality/consequences or not knowing it wrong", isCorrect: true },
      { id: "b", text: "Any mental illness or hospitalization history", isCorrect: false },
      { id: "c", text: "Inability to stand trial", isCorrect: false },
      { id: "d", text: "Presence of psychiatric symptoms", isCorrect: false }
    ],
    explanation: "IPC Section 84: Insanity defense requires: (1) Unsoundness of mind at time of act, (2) Due to this unsoundness: person didn't know nature/quality of act OR didn't know it was wrong. Burden on accused to prove on balance of probabilities. Differs from fitness to stand trial.",
    difficulty: "HARD" as const,
    bloomsLevel: "ANALYZE" as const,
    examTags: ["IPC Sections", "Insanity Defense", "Criminal Psychology", "CBME-Competency-021"],
    subjectCode: "FM",
    topicCode: "FM-MOD-LAW-INSANE",
    textbookRefs: ["Indian Penal Code", "Modi's Medical Jurisprudence"]
  },
  {
    type: "single-best-answer" as const,
    stem: "Which finding indicates ante-mortem injury in forensic pathology?",
    clinicalVignette: "Pathologist examining gunshot wound on autopsy.",
    options: [
      { id: "a", text: "Blood and tissue around wound entrance, vital reaction", isCorrect: true },
      { id: "b", text: "Absence of blood in wound", isCorrect: false },
      { id: "c", text: "Clean edges of wound", isCorrect: false },
      { id: "d", text: "Hypostasis in wound area only", isCorrect: false }
    ],
    explanation: "Ante-mortem injury shows vital reaction: blood in wound, inflammatory response, tissue vitality. Post-mortem injury: no blood, no vital reaction, clean edges. Differentiation crucial in forensic pathology for determining injury timing relative to death.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Thanatology", "Injury Timing", "CBME-Competency-022"],
    subjectCode: "FM",
    topicCode: "FM-MOD-TANAT-VITAL",
    textbookRefs: ["Reddy's Forensic Medicine"]
  },
  {
    type: "single-best-answer" as const,
    stem: "Which IPC section deals with wrongful restrain and unlawful confinement?",
    clinicalVignette: "Police investigating kidnapping and unlawful detention case.",
    options: [
      { id: "a", text: "Section 339-348 (Wrongful Restraint and Confinement)", isCorrect: true },
      { id: "b", text: "Section 364 (Kidnapping) only", isCorrect: false },
      { id: "c", text: "Section 375 (Rape) only", isCorrect: false },
      { id: "d", text: "Section 420 (Cheating) only", isCorrect: false }
    ],
    explanation: "IPC Sections 339-348: Wrongful restraint (holding person against will without authority), wrongful confinement (restraint with threat/deceit), kidnapping (conveying beyond jurisdiction), abduction (inducing to go). These form sequence of related offences with increasing severity.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "REMEMBER" as const,
    examTags: ["IPC Sections", "Criminal Law", "CBME-Competency-023"],
    subjectCode: "FM",
    topicCode: "FM-MOD-LAW-RESTRAIN",
    textbookRefs: ["Indian Penal Code", "Modi's Medical Jurisprudence"]
  },
  {
    type: "single-best-answer" as const,
    stem: "What is the window period for detecting spermatozoa in sexual assault cases?",
    clinicalVignette: "Sexual assault victim presenting 48 hours after alleged assault.",
    options: [
      { id: "a", text: "Up to 72 hours in vagina; up to 7 days in anus", isCorrect: true },
      { id: "b", text: "Only up to 24 hours", isCorrect: false },
      { id: "c", text: "Up to 2 weeks in all sites", isCorrect: false },
      { id: "d", text: "Spermatozoa cannot be detected after 12 hours", isCorrect: false }
    ],
    explanation: "Spermatozoa survival: Vagina 72 hours (average), Rectum/anus up to 7 days, Mouth 24 hours. Presence of spermatozoa from alleged assailant strongly suggests sexual contact. Absence doesn't exclude assault (assailant may be azoospermic, contraception used, etc.)",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "REMEMBER" as const,
    examTags: ["Sexual Offences", "Forensic Evidence", "CBME-Competency-024"],
    subjectCode: "FM",
    topicCode: "FM-MOD-SO-SPERM",
    textbookRefs: ["Reddy's Forensic Medicine", "Modi's Medical Jurisprudence"]
  },
  {
    type: "single-best-answer" as const,
    stem: "Under IPC Section 377, what is the punishment for 'unnatural offences'?",
    clinicalVignette: "Legal case involving consensual acts between adults.",
    options: [
      { id: "a", text: "Section 377 criminalized consensual acts; now decriminalized by 2018 SC verdict except with minors or without consent", isCorrect: true },
      { id: "b", text: "Life imprisonment for all acts", isCorrect: false },
      { id: "c", text: "Fine only, no imprisonment", isCorrect: false },
      { id: "d", text: "No punishment as it's not criminal", isCorrect: false }
    ],
    explanation: "IPC Section 377: Originally criminalized consensual sexual acts. September 2018 Supreme Court verdict: Decriminalized consensual sexual acts between adults in private. Remains criminal for non-consensual acts, with minors, or causing harm. Significant legal reform.",
    difficulty: "HARD" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["IPC Sections", "Legal Reform", "Human Rights", "CBME-Competency-025"],
    subjectCode: "FM",
    topicCode: "FM-MOD-LAW-377",
    textbookRefs: ["Indian Penal Code", "Modi's Medical Jurisprudence"]
  },
  {
    type: "single-best-answer" as const,
    stem: "Which pattern of rib fractures indicates significant blunt chest trauma?",
    clinicalVignette: "Motor vehicle accident victim with multiple rib fractures on autopsy.",
    options: [
      { id: "a", text: "Bilateral fractures in 3+ ribs causing flail chest segment", isCorrect: true },
      { id: "b", text: "Single rib fracture", isCorrect: false },
      { id: "c", text: "Stress fractures from CPR only", isCorrect: false },
      { id: "d", text: "Rib fractures always indicate fatal injury", isCorrect: false }
    ],
    explanation: "Flail chest: Bilateral fractures of 3+ consecutive ribs creating floating segment. Causes painful breathing, reduced ventilation, hypoxia. Indicates high-force trauma. Associated with pulmonary contusion, hemothorax. Paradoxical breathing characteristic of flail segment.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Blunt Trauma", "Chest Injuries", "CBME-Competency-026"],
    subjectCode: "FM",
    topicCode: "FM-MOD-INJ-CHEST",
    textbookRefs: ["Reddy's Forensic Medicine"]
  },
  {
    type: "single-best-answer" as const,
    stem: "What is the primary purpose of a forensic autopsy?",
    clinicalVignette: "Judicial magistrate ordering autopsy in suspicious death case.",
    options: [
      { id: "a", text: "Determine cause and manner of death for legal purposes", isCorrect: true },
      { id: "b", text: "Solely for medical education and training", isCorrect: false },
      { id: "c", text: "Only to identify the deceased", isCorrect: false },
      { id: "d", text: "To provide therapy to the deceased", isCorrect: false }
    ],
    explanation: "Forensic autopsy objectives: Determine cause of death (what killed person), manner of death (natural/accidental/suicide/homicide/undetermined), and circumstances. Provides evidence for criminal prosecution. Different from clinical autopsy (medical learning). Requires trained forensic pathologist.",
    difficulty: "EASY" as const,
    bloomsLevel: "REMEMBER" as const,
    examTags: ["Forensic Pathology", "Autopsy", "CBME-Competency-027"],
    subjectCode: "FM",
    topicCode: "FM-MOD-AUTO-PURPOSE",
    textbookRefs: ["Reddy's Forensic Medicine", "Modi's Medical Jurisprudence"]
  },
  {
    type: "single-best-answer" as const,
    stem: "Which poison acts primarily on the nervous system causing seizures and rigidity?",
    clinicalVignette: "Poisoning victim presenting with violent muscle contractions and opisthotonus.",
    options: [
      { id: "a", text: "Strychnine (blocks glycine inhibitory neurotransmitter)", isCorrect: true },
      { id: "b", text: "Carbon monoxide", isCorrect: false },
      { id: "c", text: "Corrosive acids", isCorrect: false },
      { id: "d", text: "Barbiturates", isCorrect: false }
    ],
    explanation: "Strychnine antagonizes glycine receptors in spinal cord, removing inhibitory control. Causes violent muscle contractions, opisthotonus (extreme arching), risus sardonicus (facial grimace). Fatal dose 50-100 mg. Death from respiratory muscle paralysis.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Toxicology", "Nervous System Poisons", "CBME-Competency-028"],
    subjectCode: "FM",
    topicCode: "FM-MOD-TOX-STRYCHN",
    textbookRefs: ["Modi's Medical Jurisprudence & Toxicology"]
  },
  {
    type: "single-best-answer" as const,
    stem: "Under IPC, what is the definition of 'criminal intimidation'?",
    clinicalVignette: "Case involving threats and intimidation of witness.",
    options: [
      { id: "a", text: "Threat of injury to person/property intending to cause fear or knowing it will likely cause fear", isCorrect: true },
      { id: "b", text: "Any verbal disagreement between persons", isCorrect: false },
      { id: "c", text: "Only physical threats, no verbal threats", isCorrect: false },
      { id: "d", text: "Threats made only in private, not public", isCorrect: false }
    ],
    explanation: "IPC Section 503-506: Criminal intimidation = threat of injury (injury to person, reputation, property, family) intending to cause alarm or knowing it will likely cause fear. Includes written/verbal threats. Public intimidation (Section 506) more severe than private.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["IPC Sections", "Criminal Law", "CBME-Competency-029"],
    subjectCode: "FM",
    topicCode: "FM-MOD-LAW-INTIM",
    textbookRefs: ["Indian Penal Code", "Modi's Medical Jurisprudence"]
  },
  {
    type: "single-best-answer" as const,
    stem: "Which factor MOST influences the rate of post-mortem decomposition?",
    clinicalVignette: "Forensic expert estimating time since death in two bodies recovered from different environments.",
    options: [
      { id: "a", text: "Environmental temperature (warm accelerates, cold delays decomposition)", isCorrect: true },
      { id: "b", text: "Deceased's age alone", isCorrect: false },
      { id: "c", text: "Cause of death alone", isCorrect: false },
      { id: "d", text: "Body position only", isCorrect: false }
    ],
    explanation: "Temperature is paramount factor in decomposition. Rule of thumb: for every 5°C increase, decomposition rate doubles. Also: humidity, oxygen availability, soil pH, bacterial load, body size, injuries. Cold storage preserves, mummification occurs in dry heat.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Thanatology", "Decomposition", "Taphonomy", "CBME-Competency-030"],
    subjectCode: "FM",
    topicCode: "FM-MOD-TANAT-TEMP",
    textbookRefs: ["Reddy's Forensic Medicine"]
  }
];
