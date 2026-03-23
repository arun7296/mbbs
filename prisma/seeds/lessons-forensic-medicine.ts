import type { TopicLessons } from "./content-loader";

export const forensicMedicineLessons: TopicLessons[] = [
  {
    topicCode: "FM-MOD-01-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "medical-ethics-code-layer-1-foundation",
        title: "Medical Ethics & Code of Conduct - Foundation",
        estimatedMinutes: 25,
        summary: "Four pillars of medical ethics (Autonomy, Beneficence, Non-maleficence, Justice), physician duties, and Indian professional standards.",
        contentMd: `# Medical Ethics & Code of Conduct - Foundation

## Four Pillars of Medical Ethics

### 1. Autonomy (Respect for Persons)
Right of individuals to make decisions about their own medical care.
- Patient self-determination and choice
- Informed decision-making
- Confidentiality and privacy
- Right to refuse treatment

### 2. Beneficence (Do Good)
Physicians should act in patient's best interests.
- Provide competent care
- Use best available treatments
- Promote patient welfare
- Balance risks and benefits

### 3. Non-Maleficence (Do No Harm)
Avoid harming patients; primum non nocere.
- Minimize adverse effects
- Avoid unnecessary procedures
- Use proven treatments
- Acknowledge limits of knowledge

### 4. Justice (Fairness)
Fair distribution of healthcare resources and benefits.
- Equal treatment for all
- Access regardless of status
- Fair allocation of scarce resources
- Non-discrimination

## Informed Consent: Four Essential Elements

1. **Information**: Disclosure of diagnosis, treatment, risks, benefits, alternatives
2. **Understanding**: Patient comprehends information
3. **Voluntariness**: Decision made freely without coercion
4. **Capacity**: Patient is legally and mentally competent

## Physician Duties (Indian Medical Council Standards)

- **Duty of Care**: Provide standard of care; thorough evaluation; evidence-based treatment
- **Duty of Confidentiality**: Protect patient information (exceptions: legal mandate, public health, abuse)
- **Duty of Candor**: Be honest; disclose errors and adverse events
- **Duty to Report**: Communicable diseases, abuse, professional misconduct
- **Duty to Continue Education**: Keep knowledge current

## Doctor-Patient Relationship

### Foundation Principles
- Built on mutual trust and respect
- Non-judgmental attitude
- Compassion and empathy
- Confidentiality and privacy

### Patient Rights (Indian Healthcare)
- Right to know diagnosis and treatment
- Right to refuse treatment
- Right to confidentiality
- Right to quality care
- Right to grievance redressal`,
        mnemonics: [
          {
            text: "Four Pillars of Ethics = Autonomy, Beneficence, Non-maleficence, Justice (A-BNJ)",
            explanation: "Fundamental framework for medical ethics"
          },
          {
            text: "Informed Consent = Information, Understanding, Voluntariness, Capacity (IUVC)",
            explanation: "Four elements required for valid consent"
          }
        ],
        keyPoints: [
          "Autonomy: Respect patient's right to make own medical decisions",
          "Beneficence: Act in patient's best interest",
          "Non-maleficence: Minimize harm and adverse effects",
          "Justice: Equitable treatment and fair resource allocation",
          "Informed consent requires all four elements: Information, Understanding, Voluntariness, Capacity",
          "Doctor-patient relationship built on trust, respect, and confidentiality"
        ],
        textbookRefs: [
          { book: "Reddy's Essentials of Forensic Medicine & Toxicology", chapter: "Medical Ethics and Code of Conduct", edition: "34th" }
        ]
      },
      {
        layer: 2,
        slug: "medical-ethics-code-layer-2-mechanism",
        title: "Medical Ethics & Code of Conduct - Mechanism",
        estimatedMinutes: 25,
        summary: "Detailed mechanisms of informed consent, confidentiality management, exceptions, and ethical decision-making.",
        contentMd: `# Medical Ethics & Code of Conduct - Mechanism

## Informed Consent Process

### Required Information
- Diagnosis and condition severity
- Proposed treatment/procedure details
- Benefits and likelihood of success
- Risks and side effects (common and serious)
- Alternative treatments available
- Consequences of refusing treatment
- Opportunity for questions and clarification

### Capacity Assessment

**Legal Capacity**:
- Age >18 years = competent
- Age <18 years = parents/guardians consent (with exceptions)
- Exception: Emergency, life-saving treatment; parents unavailable

**Cognitive Capacity**:
- Ability to understand information
- Ability to retain information
- Ability to weigh options
- Ability to communicate decision
- Not under influence of substances

### Special Situations

**Minors (<18 years)**:
- Parents/guardians provide consent
- Life-saving emergency: Treat without parental consent if unavailable
- Mature minor doctrine: Adolescent may have voice in decision

**Jehovah's Witnesses Refusing Blood**:
- Respect adult autonomy; document refusal in writing
- Offer bloodless alternatives
- Child: May override refusal with court order if life-saving

**Advance Directives**:
- Living will: Patient's wishes for future care
- Medical power of attorney: Designate surrogate decision-maker
- Allow informed choice when patient becomes incompetent

## Confidentiality Management

### Protected Information
- What patient tells physician
- Observations during examination
- Investigation results
- Diagnoses and treatment plans
- All medical records and documents

### Permitted Disclosure (Without Explicit Consent)
- Other treating physicians (continuity of care)
- Healthcare team with need-to-know
- Insurance companies (limited information)
- Hospital administration for billing
- Quality assurance and de-identified research

### Mandatory Exceptions to Confidentiality

**Legal Mandate**:
- Court subpoena or order
- Statutory reporting (vital statistics)
- Criminal investigation with legal authority

**Public Health Emergency**:
- Communicable disease (TB, plague, cholera)
- Risk of epidemic/pandemic
- Report to health authorities
- Breach justified

**Abuse and Vulnerable Persons**:
- Child abuse: Mandatory reporting
- Elder abuse: Mandatory reporting
- Intimate partner violence: Varying requirements

**Duty to Warn (Tarasoff Duty)**:
- Patient threatens serious harm to identifiable person
- Warn threatened person, notify police, consider hospitalization
- Breach confidentiality justified

## Ethical Decision-Making Framework

### Seven-Step Process

1. **Identify the Ethical Issue**: What is the core dilemma? Which values conflict?
2. **Gather Information**: Medical facts, patient preferences, legal requirements, cultural factors
3. **Consider Principles**: Autonomy? Beneficence? Non-maleficence? Justice?
4. **Identify Stakeholders**: Patient, family, healthcare team, institution, society
5. **Generate Alternatives**: List all possible options
6. **Analyze Consequences**: Effects on patient, family, team, institution
7. **Decide and Document**: Make decision, implement, review outcome

## Managing Common Ethical Conflicts

### Autonomy vs. Beneficence
**Scenario**: Patient refuses necessary treatment.
**Resolution**: Provide education, respect competent decision, document refusal with witness.

### Confidentiality vs. Public Safety
**Scenario**: Patient with TB refuses isolation.
**Resolution**: Explain, persuade, then report to health authorities if refuses.

### Professional Loyalty vs. Patient Safety
**Scenario**: Colleague showing signs of impairment.
**Resolution**: Approach privately, suggest help, report if continues unsafe practice.

## Institutional Ethics Committees

**Institutional Ethics Committee (IEC)**:
- Reviews research protocols
- Approves informed consent forms
- Protects research participant rights
- Monitors ongoing research

**Clinical Ethics Committee**:
- Advises on clinical dilemmas
- Helps resolve conflicts
- Develops institutional policies
- Education and consultation`,
        mnemonics: [
          {
            text: "Informed Consent Information = Diagnosis, Treatment details, Benefits, Risks, Alternatives",
            explanation: "Key information needed in informed consent"
          },
          {
            text: "Confidentiality Exceptions = Legal mandate, Public health, Abuse, Serious threat (LPAST)",
            explanation: "When duty to disclose overrides confidentiality"
          }
        ],
        keyPoints: [
          "Informed consent requires detailed disclosure of risks, benefits, alternatives",
          "Capacity assessment: Legal (age >18) and cognitive (understand, retain, weigh, communicate)",
          "Minors: Parents consent; emergency: treat without parental consent if life-saving",
          "Confidentiality exceptions: Legal, public health, abuse, threat to third party",
          "Mandatory reporting: Communicable diseases, abuse, professional misconduct",
          "Seven-step framework helps systematically resolve ethical dilemmas"
        ],
        textbookRefs: [
          { book: "Reddy's Essentials of Forensic Medicine & Toxicology", chapter: "Medical Ethics and Code of Conduct", edition: "34th" }
        ]
      },
      {
        layer: 3,
        slug: "medical-ethics-code-layer-3-clinical",
        title: "Medical Ethics & Code of Conduct - Clinical Scenarios",
        estimatedMinutes: 25,
        summary: "Real-world ethical dilemmas with Indian legal context and clinical management.",
        contentMd: `# Medical Ethics & Code of Conduct - Clinical Scenarios

## Scenario 1: Terminally Ill Patient Requesting Assisted Death

**Situation**: 65-year-old male with metastatic cancer, severe pain, requests physician assistance to end life.

**Legal Status in India**: Assisted death (physician-assisted suicide) is ILLEGAL under IPC Section 306.

**Ethical Approach**:
- Reassess pain control; escalate opioids
- Psychological support for depression (often modifiable)
- Offer palliative care and symptom management
- Respect autonomy: Allow refusal of further treatment, DNR orders
- Document advance directives and wishes
- NEVER actively assist death

## Scenario 2: Minor Refusing Life-Saving Blood Transfusion

**Situation**: 16-year-old Jehovah's witness with severe bleeding (hemophilia) refuses transfusion; parents support.

**Legal Framework**: Medical decisions for minors rest with parents. Court can override (parens patriae) if necessary for child's welfare.

**Ethical Approach**:
- Explain necessity to child and parents
- Respect religious beliefs
- Offer bloodless alternatives (colloids, medications, cell salvage)
- Assess adolescent's own wishes
- If life-saving and no alternatives: Seek court order
- Document all discussions

## Scenario 3: Communicable Disease Patient Refusing Isolation

**Situation**: 45-year-old with untreated TB refuses isolation, wants to return to teaching.

**Legal Framework**: TB reporting mandatory. Health officer can enforce isolation if necessary.

**Ethical Approach**:
- Educate about transmission risk
- Explain benefits of treatment (cure, stops transmission)
- Attempt voluntary compliance
- If refuses: Report to health authorities
- Breach confidentiality justified for public health
- Support contact tracing and treatment

## Scenario 4: Colleague Showing Signs of Impairment

**Situation**: Senior surgeon arrives at work smelling of alcohol, has tremor, makes poor decisions.

**Legal Requirement**: Mandatory reporting of impaired colleagues.

**Ethical Approach**:
- Document specific observed behaviors
- Express concern privately
- Suggest evaluation and help
- If refuses and continues unsafe practice: Report to
  - Hospital administration
  - Medical council
  - Chief medical officer
- Patient safety is paramount

## Scenario 5: Research Study Without Informed Consent

**Situation**: Discover research study enrolled patients without IEC approval or informed consent.

**Ethical Approach**:
- Report to IEC immediately
- Inform study participants
- Offer withdrawal without penalty
- Investigate how this occurred
- Institute preventive measures
- Report serious violations to authorities

## Scenario 6: Financial Conflict of Interest

**Situation**: Pharmaceutical company offers kickback for prescribing their expensive antibiotic.

**Ethical Approach**:
- REFUSE the offer (illegal and unethical)
- Prescribe based on clinical benefit, not profit
- Disclose any pharmaceutical company interactions
- Choose cost-effective treatment
- Report unethical solicitation if repeated

## Scenario 7: Breach of Confidentiality Request

**Situation**: Police arrive requesting patient records without court order.

**Ethical Approach**:
- Inform that court order required
- Decline to disclose without legal authority
- Document the request
- Notify hospital legal team
- If court order received: Disclose only relevant information

## Scenario 8: Intimate Partner Violence

**Situation**: Woman with injuries inconsistent with stated cause; denies abuse when husband present.

**Legal Requirement**: Mandatory reporting in most Indian states.

**Ethical Approach**:
- Interview woman alone
- Create safe space to disclose
- Document injuries objectively
- Provide safety planning assistance
- Offer referrals to social services and legal aid
- Follow up regularly
- Respect victim's autonomy but prioritize safety`,
        mnemonics: [
          {
            text: "Legal Status of Euthanasia in India = Active (ILLEGAL) vs. Passive (ALLOWED with safeguards)",
            explanation: "Distinction in Indian law regarding end-of-life decisions"
          }
        ],
        keyPoints: [
          "Assisted death illegal in India; focus on pain management and palliative care",
          "Minors: Parents consent; court can override if life-saving",
          "Public health emergency justifies breaching confidentiality",
          "Mandatory reporting of colleague impairment; patient safety paramount",
          "Research ethics: IEC approval and informed consent mandatory",
          "Conflict of interest must be disclosed; prescribe based on clinical benefit"
        ],
        textbookRefs: [
          { book: "Reddy's Essentials of Forensic Medicine & Toxicology", chapter: "Medical Ethics and Code of Conduct", edition: "34th" }
        ]
      },
      {
        layer: 4,
        slug: "medical-ethics-code-layer-4-exam",
        title: "Medical Ethics & Code of Conduct - Exam Preparation",
        estimatedMinutes: 20,
        summary: "Key definitions, recall facts, and typical exam questions.",
        contentMd: `# Medical Ethics & Code of Conduct - Exam Preparation

## Key Definitions

| Term | Definition |
|------|-----------|
| Autonomy | Right to self-determination; make own medical decisions |
| Beneficence | Act in patient's best interest |
| Non-maleficence | Do no harm (primum non nocere) |
| Justice | Fair, equitable treatment |
| Confidentiality | Protect patient information |
| Informed Consent | Agreement based on adequate information |
| Parens Patriae | State acts as guardian when needed |
| Therapeutic Privilege | Rare exception to disclose information |

## The Four Ethical Principles

**Autonomy**: Self-determination; respect even if irrational
**Beneficence**: Act in patient's best interest
**Non-maleficence**: Minimize harm
**Justice**: Fairness and equal treatment

## Informed Consent: Four Essential Elements

1. **Information** - Disclosure of diagnosis, treatment, risks, benefits, alternatives
2. **Understanding** - Patient comprehends information
3. **Voluntariness** - Decision made freely
4. **Capacity** - Legal competence and mental ability

## Exceptions to Informed Consent

- **Emergency**: Immediate life-saving treatment
- **Therapeutic Privilege**: Rare; withhold info if disclosure harmful
- **Patient Waiver**: Patient explicitly declines information

## Exceptions to Confidentiality

1. **Legal mandate**: Court order, subpoena
2. **Public health emergency**: Communicable disease
3. **Abuse**: Child, elder, intimate partner violence
4. **Threat to third party**: Serious harm to identifiable person

## Common Exam Questions & Answers

**Q: Can you treat 12-year-old without parental consent?**
A: No, except emergency (life-saving). Require parent/guardian consent.

**Q: Adult refuses blood transfusion (religious). What do you do?**
A: Respect autonomy. Document refusal with witness. Explore alternatives. Document in record.

**Q: What are four ethical principles?**
A: Autonomy, Beneficence, Non-maleficence, Justice (ABNJ).

**Q: List four elements of informed consent.**
A: Information, Understanding, Voluntariness, Capacity (IUVC).

**Q: When can you breach confidentiality?**
A: Legal mandate, public health emergency, abuse, threat to third party.

**Q: Colleague smells of alcohol at work. What should you do?**
A: Document. Approach privately. Suggest evaluation. Report if continues unsafe practice.

**Q: What is duty to warn (Tarasoff duty)?**
A: If patient threatens serious harm to identifiable person, warn that person, alert police, consider hospitalization.

**Q: Assisted death: Legal in India?**
A: NO. Active euthanasia illegal. Passive euthanasia allowed with advance directive.

## Important Indian Context

- **NMC** (National Medical Commission): Oversees medical practice
- **IPC Sections**: 304-A (death by negligence), 306 (abetment of suicide), 336-338 (causing hurt)
- **Patient Rights**: Right to know, refuse, confidentiality, access records
- **Mandatory Reporting**: Communicable diseases, abuse, professional misconduct`,
        mnemonics: [
          {
            text: "Four Pillars = ABNJ (Autonomy, Beneficence, Non-maleficence, Justice)",
            explanation: "Memory aid for ethical principles"
          },
          {
            text: "Informed Consent = IUVC (Information, Understanding, Voluntariness, Capacity)",
            explanation: "Memory aid for four elements"
          },
          {
            text: "Confidentiality Exceptions = LPAST (Legal, Public health, Abuse, Serious threat)",
            explanation: "When to breach confidentiality"
          }
        ],
        keyPoints: [
          "Autonomy: Respect competent patient's decisions even if seem irrational",
          "Informed consent: All four elements required; document",
          "Confidentiality: Fundamental; only breach for legal, public health, abuse, threat exceptions",
          "Conflict of interest: Disclose, do not accept improper incentives",
          "Colleague impairment: Document, approach, report if unsafe continues",
          "End-of-life: Active euthanasia illegal; passive allowed with advance directive"
        ],
        textbookRefs: [
          { book: "Reddy's Essentials of Forensic Medicine & Toxicology", chapter: "Medical Ethics and Code of Conduct", edition: "34th" }
        ]
      },
      {
        layer: 5,
        slug: "medical-ethics-code-layer-5-active-recall",
        title: "Medical Ethics & Code of Conduct - Active Recall",
        estimatedMinutes: 15,
        summary: "Self-assessment flashcard Q&A for spaced repetition.",
        contentMd: `# Medical Ethics & Code of Conduct - Active Recall

## Flashcard Q&A

**Q1: Define autonomy in medical ethics with an example.**
A: Autonomy is the right of individuals to make decisions about their own medical care. Example: A patient with cancer chooses palliative care instead of chemotherapy despite physician's recommendation; physician must respect this choice.

**Q2: What are the four pillars of medical ethics?**
A: (1) Autonomy = self-determination. (2) Beneficence = act in patient's best interest. (3) Non-maleficence = avoid harm. (4) Justice = fair, equitable treatment.

**Q3: List the four elements of informed consent.**
A: (1) Information = adequate disclosure. (2) Understanding = patient comprehends. (3) Voluntariness = freedom from coercion. (4) Capacity = legal and mental ability.

**Q4: Name three exceptions to informed consent.**
A: (1) Emergency = immediate life-saving treatment. (2) Therapeutic privilege = withhold info if disclosure harmful (rare). (3) Patient waiver = patient declines information.

**Q5: What are the exceptions to physician-patient confidentiality?**
A: (1) Legal mandate = court order. (2) Public health emergency = communicable disease. (3) Abuse = child, elder, intimate partner violence. (4) Threat to third party = serious harm to identifiable person.

**Q6: What is therapeutic privilege?**
A: Rare exception where physician may withhold information if disclosure would seriously harm patient. Generally NOT justified; patients have right to information.

**Q7: How do you manage a 16-year-old Jehovah's witness refusing blood transfusion?**
A: (1) Explain medical necessity. (2) Respect religious beliefs. (3) Offer bloodless alternatives. (4) Assess adolescent's own wishes. (5) If life-saving and no alternatives: Seek court order.

**Q8: What are your duties if colleague is impaired from alcohol?**
A: (1) Document specific behaviors. (2) Approach privately. (3) Suggest evaluation. (4) If continues unsafe practice: Report to hospital, medical council.

**Q9: Define conflict of interest in medical practice.**
A: Conflict of interest occurs when personal/financial interests may compromise clinical judgment. Example: Pharmaceutical kickback for prescribing their drug. Management: Refuse offer, disclose relationships, prescribe based on clinical benefit.

**Q10: What is duty to warn (Tarasoff duty)?**
A: When patient threatens serious, imminent harm to identifiable person, physician has duty to warn that person, alert police, or consider hospitalization. Breach of confidentiality justified.

**Q11: How do you handle patient's request for information to be kept from family?**
A: Respect patient's autonomy. Keep information confidential unless exception applies. Document patient's wishes. Explain benefits of family involvement but respect choice.

**Q12: What are patient rights in Indian healthcare?**
A: (1) Right to know diagnosis and treatment. (2) Right to refuse treatment. (3) Right to confidentiality. (4) Right to quality care. (5) Right to grievance redressal.

**Q13: How do you manage terminally ill patient requesting assisted death?**
A: (1) Assisted death is ILLEGAL in India. (2) Optimize pain control. (3) Provide psychological support. (4) Offer palliative care and hospice. (5) Allow refusal of treatment and DNR orders.

**Q14: What is difference between active and passive euthanasia in India?**
A: Active euthanasia (physician causes death) = ILLEGAL. Passive euthanasia (withhold/withdraw life support) = allowed with advance directive (2018 Supreme Court ruling).

**Q15: What should you do if police request records without court order?**
A: (1) Inform court order required. (2) Decline to disclose. (3) Document request. (4) Consult hospital legal team. (5) If court order received: Disclose only relevant information.

**Q16: Explain ethical decision-making framework steps.**
A: (1) Identify issue. (2) Gather information. (3) Consider principles. (4) Identify stakeholders. (5) Generate alternatives. (6) Analyze consequences. (7) Decide and document.

**Q17: Explain justice in medical ethics with an example.**
A: Justice = fair, equitable treatment regardless of socioeconomic status, religion, caste, gender. Example: Poor patient receives same quality care as wealthy patient.

**Q18: What is difference between general and informed consent?**
A: General consent = patient agrees to routine care. Informed consent = specific agreement after disclosure of risks/benefits/alternatives for particular treatment/procedure.

**Q19: How do you handle autonomy vs. beneficence conflict?**
A: Example: Patient refuses necessary amputation. Actions: (1) Provide education. (2) Respect competent autonomy. (3) Document refusal. (4) Seek alternatives if possible.

**Q20: What is role of Institutional Ethics Committee (IEC)?**
A: IEC reviews research protocols, ensures informed consent, protects research participant rights, monitors ongoing research, addresses ethical concerns.`,
        mnemonics: [
          {
            text: "Four Pillars = ABNJ (Autonomy, Beneficence, Non-maleficence, Justice)",
            explanation: "Ethical principles framework"
          },
          {
            text: "Informed Consent = IUVC (Information, Understanding, Voluntariness, Capacity)",
            explanation: "Four required elements"
          }
        ],
        keyPoints: [
          "Autonomy: Respect competent patient's decisions even if irrational",
          "Beneficence/Non-maleficence: Balance benefits and harms",
          "Justice: Equitable treatment regardless of status",
          "Informed consent: All four elements required; document",
          "Confidentiality: Protected; breach only for legal, public health, abuse, threat",
          "End-of-life: Active euthanasia illegal; passive allowed with advance directive"
        ],
        textbookRefs: [
          { book: "Reddy's Essentials of Forensic Medicine & Toxicology", chapter: "Medical Ethics and Code of Conduct", edition: "34th" }
        ]
      }
    ]
  }
];
