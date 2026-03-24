import type { TopicLessons } from "./content-loader";

export const forensicMedicineGapLessons: TopicLessons[] = [
  {
    topicCode: "FM-MOD-01-TOP-05",
    layers: [
      {
        layer: 1,
        slug: "medical-ethics-legislation-foundation",
        title: "Medical Ethics & Legislation - Foundation",
        estimatedMinutes: 25,
        summary: "Introduction to Indian medical legislation including MTP Act, PCPNDT, organ transplant law, and POCSO Act.",
        contentMd: `# Medical Ethics & Legislation - Foundation

## Medical Termination of Pregnancy (MTP) Act, 1972
- **Definition**: Legal framework for termination of pregnancy
- **Amendments**: Amended in 2021 (Medical Termination of Pregnancy Act 2021)
- **Gestational Age Limits**:
  - Up to 12 weeks: Consent of one doctor required
  - 12-20 weeks: Consent of two doctors required
  - 20-24 weeks: Approved in special circumstances (fetal abnormality, danger to mother)

- **Eligible Practitioners**: Registered medical practitioners with recognized qualifications
- **Facility Requirements**: Registered clinic/hospital with proper infrastructure
- **Documentation**: Proper consent forms, documentation of indication, follow-up

## Pre-Conception and Pre-Natal Diagnostic Techniques (PCPNDT) Act, 1994
- **Objective**: Prevent female foeticide/infanticide
- **Prohibition**: All techniques for determining sex of fetus before birth are illegal
- **Includes**: Ultrasound, amniocentesis, chorionic villus sampling for sex determination
- **Exceptions**: If sex determination is incidental to other medical procedures
- **Penalties**:
  - Pregnant woman: Counseling (not punishment)
  - Medical practitioner: Fine up to Rs. 10,000 and/or imprisonment
  - Relatives/influencers: Fine up to Rs. 10,000 and imprisonment

## Organ Transplantation Act, 1994
- **Definition**: Transfer of organ from donor to recipient
- **Types of Donors**:
  - **Living Donor**: Related or unrelated
  - **Deceased Donor**: Brain-dead or donation after cardiac death

- **Living Donor Requirements**:
  - Must be >18 years, competent
  - Can be related by marriage/blood or emotionally related
  - Donor authorization and recipient consent documented

- **Deceased Donor**: Declared brain-dead by specialist team (not involved in transplant)
  - Brain death criteria applied
  - Family consent obtained (if alive) or registered donor card

- **Authorization**: Only registered hospitals can perform transplants
- **Ethical Principles**: Beneficence, autonomy, justice, non-maleficence

## Euthanasia and Right to Die
- **Definition**: Euthanasia = deliberate termination of life to relieve suffering
- **Types**:
  - **Active**: Direct action to cause death
  - **Passive**: Withholding/withdrawing life-sustaining treatment
  - **Voluntary**: Patient requests
  - **Non-voluntary**: Patient incapable of decision

- **Legal Status in India**:
  - Active euthanasia: Illegal (constitutes culpable homicide/murder)
  - Passive euthanasia: Legal (Supreme Court judgment 2018)
  - Advance directives: Recognized for living wills

- **Palliative Care**: Emphasis on comfort and symptom relief as alternative

## Protection of Children from Sexual Offences (POCSO) Act, 2012
- **Objective**: Provide special protection to children from sexual abuse
- **Definition of Child**: Anyone <18 years
- **Offences Covered**:
  - Penetrative sexual assault: Any penetration of any orifice
  - Non-penetrative sexual assault: Touch, exposure, etc.
  - Sexual harassment: Repeated unwanted remarks, contact
  - Pornography: Production, distribution of child pornography

- **Reporting**: Mandatory reporting of suspected abuse to police
- **Medical Role**: Examine, document injuries, collect forensic evidence
- **Rehabilitation**: Psychosocial support, reintegration assistance
- **Penalties**: Severe punishment depending on offense severity
`,
        mnemonics: [
          { text: "MTP Limits = 12 wks (1 doctor) → 12-20 wks (2 doctors) → 20-24 wks (special)", explanation: "MTP Act gestational age requirements" },
          { text: "PCPNDT = Sex Determination Prohibited (female foeticide prevention)", explanation: "Core principle of PCPNDT Act" },
          { text: "Organ Donation = Living (related/unrelated) or Deceased (brain-dead/cardiac death)", explanation: "Types of organ donors" },
        ],
        keyPoints: [
          "MTP Act 2021: allows termination up to 24 weeks in special circumstances",
          "PCPNDT Act prohibits sex determination; serious penalties for practitioners",
          "Organ Transplant Act regulates living and deceased donor transplants",
          "Passive euthanasia legal in India; active euthanasia illegal",
          "POCSO Act mandates reporting of child sexual abuse",
        ],
        textbookRefs: [{ book: "Reddy's Essentials of Forensic Medicine", chapter: "Ch 6", edition: "34th" }],
      },
      {
        layer: 2,
        slug: "medical-ethics-legislation-mechanism",
        title: "Medical Ethics & Legislation - Mechanism",
        estimatedMinutes: 30,
        summary: "Procedural aspects, documentation requirements, and forensic roles in medical legislation.",
        contentMd: `# Medical Ethics & Legislation - Mechanism

## MTP Act Procedural Requirements
- **Informed Consent**: Counseling about risks, benefits, alternatives
- **Documentation**: Indication for termination, date, practitioner signature
- **Method Selection**: Based on gestational age and clinical circumstances
- **Complications Management**: Access to higher care if needed
- **Follow-up**: Contraceptive counseling, post-abortion care
- **Confidentiality**: Non-disclosure of patient identity

## PCPNDT Compliance Mechanisms
- **Pre-Procedure Screening**: Ultrasound indication documented (legitimate medical reason)
- **Equipment Registration**: Ultrasound machines registered with medical council
- **Practitioner Training**: Training on ethical use of ultrasound
- **Record Keeping**: Technical details of examination documented
- **Audits**: Regular inspection of facilities for compliance
- **Complaint Mechanism**: Public can report violations

## Organ Donation Process
### Living Donor Evaluation
- **Medical Assessment**: Health status, risks explained
- **Psychological Assessment**: Competence, voluntariness, no coercion
- **Informed Consent**: Written consent with understanding of lifelong follow-up
- **ABO/HLA Matching**: Laboratory compatibility testing
- **Minimum Waiting Period**: Reflects consideration period

### Deceased Donor Process
- **Brain Death Declaration**: Neurologist and neurosurgeon examine
- **Test Requirements**: Clinical tests (apnea test, etc.) + confirmatory tests
- **Documentation**: Two-physician certification
- **Organ Retrieval**: Surgical team operates
- **Tissue Typing**: Compatibility assessment for recipient

## Forensic Role in Transplant Legislation
- **Donor Authentication**: Verify identity of organ donor
- **Consent Verification**: Ensure legitimate authorization
- **Timing Issues**: Death certification must precede organ retrieval
- **Records Maintenance**: Document chain of custody
- **Conflict Resolution**: Mediate disputes over donation
- **Abuse Detection**: Identify illegal organ trade or exploitation

## Child Sexual Abuse Examination
- **History Taking**: Age-appropriate, non-leading questions
- **Physical Examination**: Systematic genital, anal examination
- **Documentation**: Detailed drawings/photographs of injuries
- **Forensic Evidence**: Collect swabs, hair, DNA evidence
- **Laboratory Tests**: Pregnancy test, STI screening, toxicology
- **Psychological Assessment**: Trauma screening, support referral
- **Reporting**: Mandatory notification to police/child welfare

## Advance Directives and Living Wills
- **Definition**: Written instructions for healthcare when incapable of decision
- **Components**: Organ donation wishes, CPR preferences, life support decisions
- **Legal Recognition**: Recognized under Indian law
- **Execution**: Signed by patient, witnesses, registered
- **Modification**: Can be changed any time while competent
- **Implementation**: Healthcare providers follow written wishes
`,
        mnemonics: [
          { text: "MTP Documentation = Indication + Date + Signature + Counseling + Follow-up", explanation: "Required documentation for MTP procedure" },
          { text: "Brain Death = 2 Physicians + Clinical tests + Confirmatory tests (apnea test)", explanation: "Declaration requirements for deceased donor" },
          { text: "Child Exam = History + Physical + Evidence Collection + Imaging + Testing + Reporting", explanation: "POCSO examination protocol" },
        ],
        keyPoints: [
          "MTP requires documented informed consent with counseling",
          "PCPNDT requires legitimate medical indication for all ultrasounds",
          "Organ donation process: living donor (evaluation + consent) or deceased (brain death declaration)",
          "Forensic role in transplantation ensures legitimacy and prevents organ trade",
          "Child sexual abuse examination requires systematic documentation and evidence collection",
        ],
        textbookRefs: [{ book: "Reddy's Essentials of Forensic Medicine", chapter: "Ch 6", edition: "34th" }],
      },
      {
        layer: 3,
        slug: "medical-ethics-legislation-clinical",
        title: "Medical Ethics & Legislation - Clinical Applications",
        estimatedMinutes: 28,
        summary: "Clinical implementation of medical laws and ethical decision-making in practice.",
        contentMd: `# Medical Ethics & Legislation - Clinical Applications

## MTP Implementation in Clinical Practice
- **Patient Counseling**: Discuss method options, success rates, complications
- **Complications Management**: Hemorrhage, infection, perforation, failed procedure
- **Documentation Standards**: Maintain records for legal protection and audit
- **Confidentiality Maintenance**: Protect patient privacy despite sensitive nature
- **Support Services**: Counseling before and after, contraceptive options
- **Complication Reporting**: Report severe complications to authorities if needed
- **Follow-up Care**: Post-abortion syndrome screening, family planning

## PCPNDT in Clinical Practice
- **Legitimate Indications**: Fetal anomaly detection, structural assessment, dating
- **Communication**: Explain why sex is determined incidentally
- **Counseling if Anomaly Detected**: Discuss options with counselor present
- **Documentation**: Record clinical indication clearly in notes
- **Equipment Maintenance**: Ensure proper calibration and registration
- **Staff Training**: Regular training on ethical ultrasound practice
- **Awareness**: Educate patients about gender justice

## Organ Transplant Coordination in Hospitals
- **Transplant Team**: Coordination between ICU, laboratory, surgery, anesthesia
- **Donor Identification**: ICU protocols for identifying potential donors
- **Family Communication**: Sensitively discuss organ donation with family
- **Organ Retrieval**: Minimize ischemia time; proper preservation
- **Recipient Matching**: Equitable allocation based on urgency and compatibility
- **Post-Transplant Follow-up**: Long-term immunosuppression, monitoring
- **Complications Management**: Rejection episodes, opportunistic infections

## Euthanasia Decision-Making in Palliative Care
- **Advance Directives**: Review and respect documented wishes
- **Family Discussion**: Explore patient values and preferences
- **Symptom Management**: Aggressive palliation before considering withdrawal
- **Withdrawal Decisions**: Joint decision (patient/family/team)
- **Withdrawal Process**: Medication, comfort measures, support
- **Documentation**: Record decision-making process and reasoning
- **Follow-up Support**: Bereavement counseling for family

## Child Abuse Investigation and Reporting
- **Suspicion Recognition**: Any unexplained injury patterns
- **Reporting**: Inform police and child welfare authorities
- **Examination**: Systematic documentation of physical findings
- **Photographic Evidence**: Obtain with family consent (or court order)
- **Interview**: Sensitive, non-leading questioning
- **Medical Management**: Treat injuries, vaccination, STI prophylaxis
- **Psychological Support**: Immediate and ongoing counseling
- **Court Testimony**: Be prepared to present findings in court

## Ethical Practice in Resource-Limited Settings
- **Access Issues**: Balancing individual care with population health
- **Resource Allocation**: Fairness in distributing limited resources
- **Informed Consent**: Adapt to literacy, cultural contexts
- **Confidentiality**: Maintain despite small community concerns
- **Conflict of Interest**: Manage in dual provider-researcher roles
- **Sustainable Practice**: Consider community capacity and resources
`,
        mnemonics: [
          { text: "MTP Care = Counseling + Procedure + Complications Management + Contraception", explanation: "Comprehensive MTP care pathway" },
          { text: "Organ Donation = Identify + Family Communication + Retrieval + Matching + Follow-up", explanation: "Steps in transplant coordination" },
          { text: "Child Abuse Approach = Recognize + Document + Report + Treat + Support + Court", explanation: "Comprehensive child abuse response" },
        ],
        keyPoints: [
          "MTP counseling should be non-directive and comprehensive",
          "PCPNDT compliance ensures legitimate use of imaging technology",
          "Organ transplantation requires sensitive family communication and equitable allocation",
          "Passive euthanasia acceptable; requires advance directives and family consensus",
          "Child abuse reporting is mandatory; documentation is critical for legal proceedings",
        ],
        textbookRefs: [{ book: "Reddy's Essentials of Forensic Medicine", chapter: "Ch 6", edition: "34th" }],
      },
      {
        layer: 4,
        slug: "medical-ethics-legislation-exam-prep",
        title: "Medical Ethics & Legislation - Exam Preparation",
        estimatedMinutes: 25,
        summary: "NEXT-pattern exam questions on medical legislation and ethical decision-making.",
        contentMd: `# Medical Ethics & Legislation - Exam Preparation

## High-Yield Concepts
1. **MTP Act 2021**: Termination up to 12 weeks (1 doctor), 12-20 (2 doctors), 20-24 special cases
2. **PCPNDT Act**: Sex determination prohibited; penalties for practitioners
3. **Organ Transplant Act**: Regulates living and deceased donors; requires consent
4. **Euthanasia**: Active illegal; passive legal with advance directives
5. **POCSO Act**: Mandatory reporting of child sexual abuse; special protections
6. **Brain Death**: Declared by 2 physicians with clinical and confirmatory tests

## Problem-Solving (60%)
- Woman at 14 weeks requests MTP; design counseling and consent process.
- Identify organ donation potential in brain-dead patient; plan family communication.
- Child with suspicious genital trauma presents. Plan examination, documentation, reporting.
- Patient with metastatic cancer requests euthanasia. Explain legal options and alternatives.

## Analysis (30%)
- Discuss ethical tensions between individual autonomy and social responsibility in PCPNDT.
- Compare legal and ethical frameworks for living donor organ transplantation.
- Analyze role of advance directives in resolving end-of-life care conflicts.
- Evaluate adequacy of POCSO Act in protecting children from abuse.

## Recall (10%)
- MTP Act gestational age limits
- PCPNDT Act penalties
- Organ donor types and requirements
- Legal status of euthanasia in India
- POCSO Act definition of child and offenses
`,
        mnemonics: [
          { text: "MTP = 12 (1doc) → 20 (2doc) → 24 (special) weeks (gestational limits)", explanation: "MTP Act requirements by gestation" },
          { text: "PCPNDT Penalty = Doctor (fine + jail) but Pregnant woman (counseling not punishment)", explanation: "Differential penalties in PCPNDT" },
          { text: "Brain Death = 2 Doctors + Apnea Test + Confirmatory Tests (declaration criteria)", explanation: "Requirements for brain death declaration" },
        ],
        keyPoints: [
          "MTP Act 2021: flexible access up to 24 weeks for special indications",
          "PCPNDT primarily affects practitioners; pregnant woman counseled not punished",
          "Organ transplantation: both living (with safeguards) and deceased donor options",
          "Passive euthanasia legal; requires advance directives or family consensus",
          "POCSO: mandatory reporting by all professionals; child protection priority",
        ],
        textbookRefs: [{ book: "Reddy's Essentials of Forensic Medicine", chapter: "Ch 6", edition: "34th" }],
      },
      {
        layer: 5,
        slug: "medical-ethics-legislation-active-recall",
        title: "Medical Ethics & Legislation - Active Recall",
        estimatedMinutes: 20,
        summary: "Flashcard Q&A for retention on medical legislation and ethics.",
        contentMd: `# Medical Ethics & Legislation - Active Recall

## Flashcard Questions & Answers

**Q1: What are the gestational age limits for MTP under the Medical Termination of Pregnancy Act 2021?**
A: Up to 12 weeks: One registered medical practitioner required. 12-20 weeks: Two registered medical practitioners required. 20-24 weeks: Permitted in special cases (fetal abnormality, danger to mother, marital rape).

**Q2: Describe penalties under the Pre-Conception and Pre-Natal Diagnostic Techniques (PCPNDT) Act.**
A: Medical practitioners: Fine up to Rs. 10,000 and/or imprisonment up to 3 years (first offense). Relatives/influencers encouraging sex-selective abortion: Fine up to Rs. 10,000 and imprisonment. Pregnant woman: Counseling only; no punishment.

**Q3: What are the requirements for organ donation under the Organ Transplantation Act?**
A: Living donor: Must be >18 years, competent, can be related or emotionally related, informed consent required. Deceased donor: Must be brain-dead or cardiac death, family consent (if available), organ retrieval only in authorized hospitals.

**Q4: What is the legal status of euthanasia in India?**
A: Active euthanasia (direct action to cause death) is illegal and constitutes culpable homicide or murder. Passive euthanasia (withholding/withdrawing life-sustaining treatment) is legal per Supreme Court 2018 judgment. Advance directives/living wills are recognized.

**Q5: What is the Protection of Children from Sexual Offences (POCSO) Act?**
A: Enacted 2012 to protect children <18 years from sexual abuse. Covers penetrative assault, non-penetrative assault, harassment, pornography. Mandates reporting; provides rehabilitation; prescribes severe penalties.

**Q6: Describe the process for declaring brain death of an organ donor.**
A: (1) Neurologist and neurosurgeon clinically examine patient, (2) Perform apnea test (breathing without ventilation), (3) Conduct confirmatory tests (EEG, angiography, or other), (4) Two-physician certification documenting brain death.

**Q7: What documentation is required for MTP procedure?**
A: Consent form signed by pregnant woman (and husband if present), indication for termination, date and time of procedure, name of medical practitioner, follow-up plan, contraceptive counseling provided.

**Q8: Explain the forensic role in organ transplantation.**
A: Verify donor identity and legitimacy of consent, ensure proper documentation of brain death declaration, authenticate organ chain of custody, prevent organ trafficking and exploitation, mediate disputes, maintain records for legal protection.

**Q9: What are key features of an advance directive or living will?**
A: Written instructions by competent person about healthcare when incapable of decision. Specifies organ donation wishes, CPR preferences, life support decisions. Legally recognized; can be modified. Healthcare providers must follow documented wishes.

**Q10: Describe the forensic examination protocol for suspected child sexual abuse.**
A: (1) Detailed history (age-appropriate, non-leading), (2) Systematic physical examination (genital/anal), (3) Document injuries (drawings, photographs), (4) Collect forensic evidence (swabs, hair), (5) STI screening, pregnancy test, (6) Psychological assessment, (7) Mandatory reporting to police/child welfare.
`,
        keyPoints: [
          "MTP: up to 12 weeks (1 doctor), 12-20 (2 doctors), 20-24 (special indications)",
          "PCPNDT: sex determination prohibited; practitioners penalized; pregnant woman counseled",
          "Organ transplant: living/deceased donors; requires proper consent and authorization",
          "Euthanasia: active illegal, passive legal with advance directives",
          "POCSO: mandatory reporting; special protections for children <18 years",
        ],
        textbookRefs: [{ book: "Reddy's Essentials of Forensic Medicine", chapter: "Ch 6", edition: "34th" }],
      },
    ],
  },

  // ─── FM-MOD-05-TOP-04: Forensic Psychiatry ─────────────────────────
  {
    topicCode: "FM-MOD-05-TOP-04",
    layers: [
      { layer: 1, slug: "forensic-psychiatry-foundation", title: "Forensic Psychiatry - Foundation", estimatedMinutes: 25, summary: "Criminal responsibility, fitness to stand trial, MHA 2017.",
        contentMd: `# Forensic Psychiatry\n\n## McNaughten Rule (1843)\nPerson not guilty by reason of insanity if they did not know the nature of the act or did not know it was wrong.\n\n## IPC Section 84\nNothing is an offence done by a person of unsound mind incapable of knowing the nature of the act.\n\n## Fitness to Stand Trial\nCan accused understand charges, follow proceedings, instruct counsel?\n\n## Mental Healthcare Act 2017\n- Advance directives recognized for first time in India\n- Suicide attempt decriminalized (amends IPC 309)\n- Prohibits involuntary ECT\n- Mental Health Review Board for grievances\n\n## Civil Capacity\n- Testamentary capacity: ability to make valid will\n- Contractual capacity: ability to enter valid contracts`,
        mnemonics: [{ text: "McNaughten = Man Cannot kNow", explanation: "Didn't know nature of act OR didn't know it was wrong" }, { text: "MHA 2017 = AD + SD", explanation: "Advance Directives recognized + Suicide Decriminalized" }],
        keyPoints: ["McNaughten Rule: insanity if person didn't know nature or wrongness of act", "IPC Section 84: Indian law on unsoundness of mind", "MHA 2017 recognizes advance directives", "Suicide attempt decriminalized under MHA 2017", "Fitness to trial: understand charges, proceedings, instruct counsel"],
        textbookRefs: [{ book: "Reddy's Essentials of Forensic Medicine", chapter: "Ch 26", edition: "34th" }],
      },
      { layer: 2, slug: "forensic-psychiatry-mechanism", title: "Forensic Psychiatry - Mechanism", estimatedMinutes: 25, summary: "Assessment of criminal responsibility, malingering detection, narcoanalysis.",
        contentMd: `# Forensic Psychiatry Mechanisms\n\n## Assessing Criminal Responsibility\n1. Was there mental illness at time of offence?\n2. Did it affect understanding of nature/quality of act?\n3. Could person appreciate act was wrong?\n\n## Key Conditions in Forensic Practice\n| Condition | Forensic Relevance |\n|-----------|-------------------|\n| Schizophrenia | Command hallucinations may drive acts |\n| Mania | Impaired judgment, reckless behavior |\n| Psychopathy | Understand but don't care (NOT insanity) |\n| Automatism | Epileptic/sleepwalking — no voluntary control |\n\n## Malingering vs Factitious\n- Malingering: feigning for external gain (avoiding jail)\n- Factitious: feigning for sick role\n- Detection: MMPI validity scales, inconsistencies\n\n## Narcoanalysis\nIV sodium pentothal — Supreme Court ruled unconstitutional (Selvi vs State of Karnataka, 2010). Polygraph also NOT admissible.`,
        mnemonics: [{ text: "Malingering = Money motive", explanation: "External gain motivation distinguishes malingering" }, { text: "Selvi 2010 = Narcoanalysis banned", explanation: "SC landmark ruling against involuntary narcoanalysis/polygraph" }],
        keyPoints: ["Psychopathy NOT valid insanity defense", "Malingering: external gain; detected by MMPI", "Narcoanalysis unconstitutional (Selvi 2010)", "Polygraph not admissible in Indian courts", "Automatism may be valid defense (no voluntary control)"],
        textbookRefs: [{ book: "Reddy's Essentials of Forensic Medicine", chapter: "Ch 26", edition: "34th" }],
      },
      { layer: 3, slug: "forensic-psychiatry-clinical", title: "Forensic Psychiatry - Clinical", estimatedMinutes: 20, summary: "Involuntary admission, patient rights, Indian mental health statistics.",
        contentMd: `# Clinical Forensic Psychiatry\n\n## Involuntary Admission (MHA 2017)\n- Allowed only with mental illness AND risk of harm\n- Supported admission: family applies, reviewed in 30 days\n- Maximum 90 days without Board approval\n\n## Rights of Mentally Ill (MHA 2017)\n- Access to healthcare, community living, confidentiality\n- Advance directives, personal contacts\n- No chaining, no unmodified ECT\n\n## Indian Statistics\n- Mental illness affects ~150 million Indians\n- Treatment gap >80%\n- Only 0.3 psychiatrists per 100,000 (WHO recommends 3)\n- District Mental Health Programme (DMHP) under NMHP`,
        mnemonics: [{ text: "Treatment gap = 80%", explanation: "80% of mentally ill Indians receive no treatment" }, { text: "0.3 per lakh psychiatrists", explanation: "India's severe psychiatrist shortage vs WHO recommendation of 3" }],
        keyPoints: ["MHA 2017: involuntary admission needs mental illness + harm risk", "Max 90 days without Board approval", "Treatment gap >80% in India", "0.3 psychiatrists per 100,000 in India", "DMHP aims to decentralize mental health care"],
        textbookRefs: [{ book: "Reddy's Essentials of Forensic Medicine", chapter: "Ch 26", edition: "34th" }],
      },
      { layer: 4, slug: "forensic-psychiatry-exam-prep", title: "Forensic Psychiatry - Exam Prep", estimatedMinutes: 15, summary: "High-yield facts for forensic psychiatry exams.",
        contentMd: `# Exam Prep: Forensic Psychiatry\n\n| Topic | Answer |\n|-------|--------|\n| McNaughten Rule | Didn't know nature OR wrongness |\n| IPC Section | 84 (unsoundness of mind) |\n| MHA 2017 change | Advance directives + suicide decriminalized |\n| Narcoanalysis | Unconstitutional (Selvi 2010) |\n| Malingering detection | MMPI validity scales |\n| Treatment gap India | >80% |\n| Psychiatrist density | 0.3 per 100,000 |\n\n## Malingering vs Genuine\n| Feature | Malingering | Genuine |\n|---------|------------|----------|\n| Motivation | External gain | None apparent |\n| Consistency | Variable | Consistent |\n| MMPI | Validity elevated | Normal |`,
        mnemonics: [{ text: "IPC 84 = Insanity", explanation: "Section 84 is the insanity defense" }, { text: "309 freed by 2017", explanation: "IPC 309 suicide attempt decriminalized by MHA 2017" }],
        keyPoints: ["IPC 84 = insanity defense", "McNaughten: nature + wrongness test", "MHA 2017 decriminalized suicide", "Narcoanalysis unconstitutional (Selvi 2010)", "Treatment gap >80%"],
        textbookRefs: [{ book: "Reddy's Essentials of Forensic Medicine", chapter: "Ch 26", edition: "34th" }],
      },
      { layer: 5, slug: "forensic-psychiatry-active-recall", title: "Forensic Psychiatry - Active Recall", estimatedMinutes: 12, summary: "Flashcard Q&A.",
        contentMd: `# Active Recall\n\n**Q1:** McNaughten Rule?\n> Didn't know nature of act or that it was wrong\n\n**Q2:** IPC section for unsoundness of mind?\n> Section 84\n\n**Q3:** MHA 2017 landmarks?\n> Advance directives + suicide decriminalized + involuntary ECT banned\n\n**Q4:** Narcoanalysis legal in India?\n> No — unconstitutional (Selvi 2010)\n\n**Q5:** Malingering vs factitious?\n> Malingering = external gain; Factitious = sick role\n\n**Q6:** Can psychopath use insanity defense?\n> No — understands right from wrong\n\n**Q7:** Max involuntary admission without Board?\n> 90 days\n\n**Q8:** India treatment gap?\n> >80%\n\n**Q9:** Automatism defense?\n> Valid — no voluntary control (epilepsy/sleepwalking)\n\n**Q10:** Polygraph admissible?\n> No — not admissible in Indian courts`,
        textbookRefs: [{ book: "Reddy's Essentials of Forensic Medicine", chapter: "Ch 26", edition: "34th" }],
      },
    ],
  },

  // ─── FM-MOD-05-TOP-05: Forensic Sciences ─────────────────────────
  {
    topicCode: "FM-MOD-05-TOP-05",
    layers: [
      { layer: 1, slug: "forensic-sciences-foundation", title: "Forensic Sciences - Foundation", estimatedMinutes: 25, summary: "DNA fingerprinting, ballistics, forensic serology, identification.",
        contentMd: `# Forensic Sciences\n\n## DNA Fingerprinting\n- STR analysis: current standard (13+ loci)\n- PCR amplifies trace DNA (blood, hair, semen)\n- Paternity testing: exclusion probability >99.99%\n\n## Forensic Ballistics\n- Entry wound: inverted margins, collar of abrasion\n- Exit wound: everted margins, larger, no collar\n\n## Forensic Serology\n- Precipitin test: determines if blood is human\n- ABO grouping for paternity/identification\n\n## Identification Methods\n| Method | Basis |\n|--------|-------|\n| Fingerprints | Ridge patterns (loops 65%, whorls 30%, arches 5%) |\n| DNA profiling | STR analysis |\n| Dental records | Rugae patterns |\n\n## Locard's Exchange Principle\nEvery contact leaves a trace — fundamental forensic principle.`,
        mnemonics: [{ text: "Locard = Every Contact Leaves a Trace", explanation: "Fundamental principle of forensic science" }, { text: "Entry = IN-verted; Exit = OUT-verted", explanation: "Gunshot wound margin direction" }],
        keyPoints: ["STR analysis is gold standard for DNA profiling", "PCR can amplify DNA from trace evidence", "Entry: inverted + collar; Exit: everted + larger", "Locard: every contact leaves a trace", "Loops most common fingerprint pattern (65%)"],
        textbookRefs: [{ book: "Reddy's Essentials of Forensic Medicine", chapter: "Ch 4", edition: "34th" }],
      },
      { layer: 2, slug: "forensic-sciences-mechanism", title: "Forensic Sciences - Mechanism", estimatedMinutes: 25, summary: "DNA analysis workflow, fingerprint science, polygraph mechanism.",
        contentMd: `# Forensic Science Mechanisms\n\n## DNA Analysis Workflow\n1. Evidence collection\n2. DNA extraction\n3. PCR amplification of STR loci\n4. Capillary electrophoresis\n5. Allele calling and profile generation\n6. Database comparison\n\n## Fingerprint Science\n- Formed in utero (12-16 weeks), permanent\n- Identical twins: same DNA, different fingerprints\n- Henry-Galton classification in India\n\n## Polygraph Mechanism\n- Measures BP, pulse, respiration, GSR\n- Not admissible in Indian courts (Selvi 2010)\n\n## Forensic Odontology\n- Dental records survive decomposition/fire\n- Rugae patterns unique like fingerprints\n- Key in mass disaster victim identification`,
        mnemonics: [{ text: "LAW = Loops 65%, Arches 5%, Whorls 30%", explanation: "Fingerprint pattern frequencies" }, { text: "Polygraph = BPRG", explanation: "Blood Pressure, Pulse, Respiration, Galvanic skin response" }],
        keyPoints: ["STR-based DNA profiling is current gold standard", "Identical twins: same DNA, different fingerprints", "Polygraph not admissible in Indian courts", "Dental records invaluable in mass disaster ID", "Henry-Galton fingerprint classification used in India"],
        textbookRefs: [{ book: "Reddy's Essentials of Forensic Medicine", chapter: "Ch 4", edition: "34th" }],
      },
      { layer: 3, slug: "forensic-sciences-clinical", title: "Forensic Sciences - Clinical", estimatedMinutes: 20, summary: "DNA evidence in Indian courts, firearm injuries, sexual assault examination.",
        contentMd: `# Clinical Forensic Sciences\n\n## DNA in Indian Courts\n- Admissible under Evidence Act Section 45\n- CDFD Hyderabad: premier DNA lab\n- DNA Bill 2019 proposes national databank\n\n## Firearm Injuries (India)\n- Country-made firearms (desi katta) common\n- Blackening (close), tattooing (intermediate), neither (distant)\n\n## Sexual Assault Examination\n- Section 164A CrPC: exam within 24 hours\n- Two-finger test banned (SC 2013)\n- DNA from semen can identify assailant years later\n\n## Indian Forensic Labs\n| Lab | Location |\n|-----|----------|\n| CFSL | Delhi, Hyderabad, Kolkata, Chandigarh |\n| CDFD | Hyderabad |`,
        mnemonics: [{ text: "CFSL = 4 locations", explanation: "Delhi, Hyderabad, Kolkata, Chandigarh" }, { text: "Two-finger test = banned 2013", explanation: "SC declared it unconstitutional" }],
        keyPoints: ["DNA admissible under Evidence Act Section 45", "CDFD Hyderabad is India's premier DNA center", "Two-finger test banned by SC 2013", "Desi katta produces irregular wound patterns", "Evidence collection within 24 hours (164A CrPC)"],
        textbookRefs: [{ book: "Reddy's Essentials of Forensic Medicine", chapter: "Ch 4", edition: "34th" }],
      },
      { layer: 4, slug: "forensic-sciences-exam-prep", title: "Forensic Sciences - Exam Prep", estimatedMinutes: 15, summary: "High-yield forensic science facts.",
        contentMd: `# Exam Prep\n\n| Topic | Answer |\n|-------|--------|\n| DNA standard | STR analysis |\n| Identical twins | Same DNA, different fingerprints |\n| Most common fingerprint | Loops (65%) |\n| Precipitin test | Human blood identification |\n| Entry wound | Inverted margins + collar |\n| Exit wound | Everted + larger + no collar |\n| Polygraph | Not admissible (India) |\n| Two-finger test | Unconstitutional (2013) |\n| India DNA center | CDFD Hyderabad |`,
        mnemonics: [{ text: "STR = Standard Today Recognition", explanation: "STR is current gold standard" }, { text: "Entry IN, Exit OUT", explanation: "Margin direction for gunshot wounds" }],
        keyPoints: ["STR is current DNA gold standard", "Identical twins: same DNA, different fingerprints", "Entry: inverted + collar; Exit: everted + no collar", "Loops most common fingerprint (65%)", "Polygraph not admissible in India"],
        textbookRefs: [{ book: "Reddy's Essentials of Forensic Medicine", chapter: "Ch 4", edition: "34th" }],
      },
      { layer: 5, slug: "forensic-sciences-active-recall", title: "Forensic Sciences - Active Recall", estimatedMinutes: 12, summary: "Flashcard Q&A.",
        contentMd: `# Active Recall\n\n**Q1:** Current DNA profiling method?\n> STR analysis\n\n**Q2:** Identical twins fingerprints?\n> Different (same DNA, different fingerprints)\n\n**Q3:** Locard's principle?\n> Every contact leaves a trace\n\n**Q4:** Entry wound features?\n> Inverted margins, collar of abrasion\n\n**Q5:** Precipitin test?\n> Determines if blood is human origin\n\n**Q6:** Most common fingerprint?\n> Loops (65%)\n\n**Q7:** Polygraph admissible?\n> No — not in Indian courts\n\n**Q8:** CDFD location?\n> Hyderabad\n\n**Q9:** Two-finger test?\n> Banned by SC 2013\n\n**Q10:** Fingerprint classification in India?\n> Henry-Galton system`,
        textbookRefs: [{ book: "Reddy's Essentials of Forensic Medicine", chapter: "Ch 4", edition: "34th" }],
      },
    ],
  },

  // ─── FM-MOD-06-TOP-05: Environmental & Industrial Toxicology ─────────────────────────
  {
    topicCode: "FM-MOD-06-TOP-05",
    layers: [
      { layer: 1, slug: "environmental-industrial-toxicology-foundation", title: "Environmental & Industrial Toxicology - Foundation", estimatedMinutes: 25, summary: "Pollution, occupational diseases, food adulteration.",
        contentMd: `# Environmental & Industrial Toxicology\n\n## Pollution Types\n| Type | Examples | Health Effects |\n|------|---------|---------------|\n| Air | PM2.5, SO₂, CO | COPD, lung cancer |\n| Water | Arsenic, fluoride | Arsenicosis, fluorosis |\n| Soil | Pesticides, metals | Cancer, neurological |\n\n## Occupational Diseases\n| Disease | Agent |\n|---------|-------|\n| Silicosis | Silica dust |\n| Asbestosis + mesothelioma | Asbestos |\n| CWP (black lung) | Coal dust |\n| Byssinosis | Cotton dust |\n| Lead poisoning | Lead |\n\n## Food Adulteration\nGoverned by FSSAI (FSS Act 2006). Common: metanil yellow in turmeric, brick in chili, water/urea in milk.\n\n## Indian Context\n- Delhi AQI >300 in winter\n- Arsenic: West Bengal, Bihar\n- Fluoride belt: Rajasthan, AP, Gujarat`,
        mnemonics: [{ text: "SIL-A-COAL", explanation: "Silicosis, Asbestosis, Coal worker's pneumoconiosis" }, { text: "FSSAI = Food Safety 2006", explanation: "Food Safety and Standards Authority of India" }],
        keyPoints: ["Silicosis is most common pneumoconiosis", "Asbestos causes asbestosis + mesothelioma", "Arsenic in groundwater: West Bengal, Bihar", "Fluorosis endemic in Rajasthan, AP, Gujarat", "FSSAI governs food safety (FSS Act 2006)"],
        textbookRefs: [{ book: "Reddy's Essentials of Forensic Medicine", chapter: "Ch 27", edition: "34th" }],
      },
      { layer: 2, slug: "environmental-industrial-toxicology-mechanism", title: "Environmental & Industrial Toxicology - Mechanism", estimatedMinutes: 25, summary: "Pathophysiology of silicosis, lead, arsenic, fluoride poisoning.",
        contentMd: `# Toxicology Mechanisms\n\n## Silicosis\nSilica particles → macrophage engulfment → lysosomal damage → macrophage death → fibroblast activation → fibrosis. Predisposes to TB.\n\n## Lead Poisoning\n- Inhibits δ-ALA dehydratase + ferrochelatase → impaired heme synthesis\n- Basophilic stippling, Burton's line, encephalopathy, colic, wrist drop\n- ABCDE: Anemia, Burton's line, Colic, Drop (wrist), Encephalopathy\n\n## Arsenic\n- Binds sulfhydryl groups → inhibits pyruvate dehydrogenase\n- Mee's lines, rain drop pigmentation, keratosis\n- Chronic: skin/lung/bladder cancer\n\n## Fluoride\n- Substitutes OH in hydroxyapatite → fluoroapatite\n- Dental fluorosis >1.5 ppm; skeletal >4 ppm`,
        mnemonics: [{ text: "Lead ABCDE", explanation: "Anemia, Burton's line, Colic, Drop, Encephalopathy" }, { text: "Arsenic = Mee's + Rain drops + Cancer", explanation: "Nail lines, pigmentation, carcinogenicity" }],
        keyPoints: ["Silicosis: macrophage death → fibrosis → TB predisposition", "Lead inhibits heme synthesis → basophilic stippling", "Lead ABCDE: Anemia, Burton's, Colic, Drop, Encephalopathy", "Arsenic inhibits pyruvate dehydrogenase", "Fluorosis: dental >1.5ppm, skeletal >4ppm"],
        textbookRefs: [{ book: "Reddy's Essentials of Forensic Medicine", chapter: "Ch 27", edition: "34th" }],
      },
      { layer: 3, slug: "environmental-industrial-toxicology-clinical", title: "Environmental & Industrial Toxicology - Clinical", estimatedMinutes: 20, summary: "Treatment and Indian legislation.",
        contentMd: `# Clinical Management\n\n## Lead Treatment\n- Remove from exposure\n- Mild (BLL 45-69): Succimer (DMSA) oral\n- Severe (BLL ≥70): BAL + CaNa₂EDTA\n- Encephalopathy: BAL first, then EDTA (never EDTA alone)\n\n## Silicosis\nNo cure. Prevention: dust suppression, N95 masks. Treat co-existing TB.\n\n## Indian Laws\n- Factories Act 1948: worker health/safety\n- Mines Act 1952: mining safety\n- Environment Protection Act 1986: umbrella legislation\n- CPCB/SPCB: pollution control boards`,
        mnemonics: [{ text: "BAL first for lead brain", explanation: "Dimercaprol first for encephalopathy, then EDTA" }, { text: "EFW = 1986, 1948, 1974", explanation: "Environment, Factories, Water Acts" }],
        keyPoints: ["Lead encephalopathy: BAL first, then EDTA", "Silicosis has no cure — prevention key", "Screen silicosis for TB", "Factories Act 1948 governs occupational health", "EPA 1986 is umbrella environmental law"],
        textbookRefs: [{ book: "Reddy's Essentials of Forensic Medicine", chapter: "Ch 27", edition: "34th" }],
      },
      { layer: 4, slug: "environmental-industrial-toxicology-exam-prep", title: "Environmental & Industrial Toxicology - Exam Prep", estimatedMinutes: 15, summary: "High-yield facts.",
        contentMd: `# Exam Prep\n\n| Topic | Answer |\n|-------|--------|\n| Most common pneumoconiosis | Silicosis |\n| Pneumoconiosis + TB | Silicosis |\n| Asbestos cancer | Mesothelioma |\n| Burton's line | Lead (gums) |\n| Mee's lines | Arsenic (nails) |\n| Wrist drop poison | Lead |\n| Safe fluoride | <1.5 ppm |\n| Lead chelation severe | BAL + EDTA |\n| Egg-shell calcification | Silicosis |\n| Monday tightness | Byssinosis (cotton) |`,
        mnemonics: [{ text: "Egg-shell = Silicosis", explanation: "Egg-shell calcification of hilar nodes" }, { text: "Monday tightness = Byssinosis", explanation: "Cotton dust, worse on Mondays" }],
        keyPoints: ["Silicosis: egg-shell calcification", "Asbestosis: lower lobe fibrosis + pleural plaques", "Byssinosis: Monday morning tightness", "BAL first for lead encephalopathy", "Safe fluoride <1.5 ppm"],
        textbookRefs: [{ book: "Reddy's Essentials of Forensic Medicine", chapter: "Ch 27", edition: "34th" }],
      },
      { layer: 5, slug: "environmental-industrial-toxicology-active-recall", title: "Environmental & Industrial Toxicology - Active Recall", estimatedMinutes: 12, summary: "Flashcard Q&A.",
        contentMd: `# Active Recall\n\n**Q1:** Most common pneumoconiosis?\n> Silicosis\n\n**Q2:** Which predisposes to TB?\n> Silicosis\n\n**Q3:** Asbestos cancer?\n> Mesothelioma\n\n**Q4:** Lead ABCDE?\n> Anemia, Burton's line, Colic, Drop, Encephalopathy\n\n**Q5:** Mee's lines?\n> Arsenic (white nail bands)\n\n**Q6:** Lead encephalopathy treatment?\n> BAL first, then EDTA\n\n**Q7:** Safe fluoride?\n> <1.5 ppm\n\n**Q8:** Egg-shell calcification?\n> Silicosis (hilar nodes)\n\n**Q9:** Byssinosis feature?\n> Monday morning chest tightness\n\n**Q10:** India food safety body?\n> FSSAI (FSS Act 2006)`,
        textbookRefs: [{ book: "Reddy's Essentials of Forensic Medicine", chapter: "Ch 27", edition: "34th" }],
      },
    ],
  },
];
