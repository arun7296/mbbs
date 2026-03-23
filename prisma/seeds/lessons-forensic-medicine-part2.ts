import type { TopicLessons } from "./content-loader";

export const forensicMedicinePart2Lessons: TopicLessons[] = [
  {
    topicCode: "FM-MOD-01-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "ipc-sections-relevant-medicine-foundation",
        title: "IPC Sections Relevant to Medicine - Foundation",
        estimatedMinutes: 25,
        summary: "Overview of Indian Penal Code sections most relevant to medical practice including sections on bodily injury, medical negligence, and causing death.",
        contentMd: `# IPC Sections Relevant to Medicine - Foundation

## Overview of Critical Sections for Healthcare

### IPC Section 304: Causing Death by Negligence
- **Definition**: Act causing death by rash/negligent behavior not amounting to culpable homicide
- **Punishment**: Fine up to 250 rupees OR 6 months imprisonment
- **Medical context**: Medical error directly causing patient death
- **Key element**: Negligence (not intentional); gross deviation from standard care

### IPC Section 304-A: Death by Negligence (General)
- Similar to 304; used in medical negligence cases
- Physician must have duty of care (established by doctor-patient relationship)
- Must breach that duty (fall below standard of care)
- Breach must cause death (but-for causation)

### IPC Section 336: Act Endangering Life/Safety
- **Definition**: Rash/negligent act endangering human life/safety
- **Punishment**: Fine up to 250 rupees
- **Medical example**: Prescribing without checking contraindications, unsafe injection technique
- **Severity**: Lowest in negligence scale (risk without actual injury)

### IPC Section 337: Causing Hurt
- **Definition**: Causing bodily pain/disease/infirmity by rash/negligent act
- **Punishment**: Fine up to 250 rupees OR 6 months imprisonment
- **Hurt vs. Grievous**: Hurt = simple pain, temporary condition
- **Medical example**: Negligent injection causing bruising, mild swelling

### IPC Section 338: Causing Grievous Hurt
- **Definition**: Rash/negligent act causing grievous hurt
- **Punishment**: Fine up to 500 rupees OR 6 months imprisonment
- **Grievous hurt**: Permanent disfigurement, disability, or danger to life
- **Eight types**: Emasculation, eye loss, ear loss, limb loss, face disfigurement, fracture, bone layering, life-endangering harm
- **Medical example**: Surgical complication causing permanent paralysis

### IPC Section 326: Causing Hurt by Poison/Corrosive Substance
- **Definition**: Administering poison/corrosive substance causing hurt
- **Punishment**: 6 months to 7 years imprisonment
- **Medical context**: Drug overdose, wrong chemical administration

### IPC Section 375: Rape
- **Definition**: Non-consensual sexual penetration (penile penetration of vagina, anus, or mouth)
- **Punishment**: 7 years to life imprisonment
- **Medical role**: Recognize and document rape; mandatory reporting

### IPC Section 376: Punishment for Rape (Enhanced)
- **Aggravated rape**: <12 years old, gang rape, married woman, police/authority figures
- **Punishment**: Often life imprisonment with hard labor
- **Medical examination**: Forensic examination critical for evidence

### IPC Section 354: Outraging Modesty
- **Definition**: Assault/use of force intending to outrage modesty
- **Punishment**: 3 years imprisonment
- **Medical context**: Inappropriate examination, improper exposure, unwanted touching

## Sections on Bodily Harm Progression

**Progressive Severity**:
1. **Section 336**: Rash/negligent act (risk only)
2. **Section 337**: Act causing simple hurt (temporary pain)
3. **Section 338**: Act causing grievous hurt (permanent disability)
4. **Section 304**: Act causing death

## Medical Negligence Concept

### Definition of Medical Negligence
- **Deviation from standard**: Fall below standard of care expected of competent physician
- **Competent physician**: In similar circumstances with similar resources
- **Negligence vs. Error**: Error of judgment acceptable; negligence is not
- **Standard**: What reasonable physician would do

### Doctor's Duty of Care
- Establish in doctor-patient relationship
- Must exercise reasonable care and skill
- Follow accepted medical practices
- Inform patient of risks
- Refer when beyond competence

## Sections on Child Protection

### IPC Section 509: Words/Gesture Insulting Modesty
- **Definition**: Words, sounds, or gestures intended to insult modesty
- **Punishment**: 3 years imprisonment
- **Medical context**: Harassment, inappropriate remarks by healthcare provider`,
        mnemonics: [
          {
            text: "IPC NEGLIGENCE SECTIONS: 336→337→338→304 (Risk, Hurt, Grievous, Death)",
            explanation: "Escalating severity of negligent harm"
          },
          {
            text: "HURT vs GRIEVOUS: Hurt=Temporary pain, Grievous=Permanent disability/disfigurement",
            explanation: "Key distinction in IPC definitions"
          },
          {
            text: "MEDICAL NEGLIGENCE: Duty + Breach + Causation = Liability",
            explanation: "Three elements for establishing negligence"
          },
          {
            text: "RAPE PENALTIES: 375-376 (7yr-life), <12 yr often=LIFE, Gang rape=LIFE",
            explanation: "Sexual offense sections and enhanced penalties"
          }
        ],
        keyPoints: [
          "IPC Section 304/304-A: Most common criminal charge against physicians for medical negligence causing death",
          "Sections 336-338 progress from endangering life → hurt → grievous hurt (based on severity)",
          "Grievous hurt defined as 8 types including emasculation, permanent eye/ear loss, limb loss, permanent disfigurement",
          "Medical negligence requires fall below standard of care; error of judgment alone insufficient",
          "Doctor-patient relationship establishes duty of care (legal obligation exists)",
          "IPC Sections 375-376: Rape sections; <12 years victim often results in life imprisonment"
        ],
        textbookRefs: [
          { book: "Reddy's Essentials of Forensic Medicine & Toxicology", chapter: "Ch 2 - IPC & Medical Jurisprudence", edition: "34th" },
          { book: "Parikh's Textbook of Medical Jurisprudence", chapter: "Ch IPC Sections in Medical Practice", edition: "8th" }
        ]
      },
      {
        layer: 2,
        slug: "ipc-sections-relevant-medicine-mechanism",
        title: "IPC Sections - Mechanism of Liability",
        estimatedMinutes: 25,
        summary: "How courts establish criminal liability using IPC sections; negligence doctrine, breach of duty, causation, and proximate cause analysis.",
        contentMd: `# IPC Sections - Mechanism of Liability

## Establishing Criminal Negligence

### Four Elements of Medical Negligence
1. **Duty of care**: Legal obligation to patient (established by doctor-patient relationship)
2. **Breach of duty**: Action/omission falling below standard of care
3. **Causation**: But-for breach, harm would not have occurred
4. **Damages**: Actual harm/loss resulted from breach

### Standard of Care Doctrine (Bolam Test)
- **Principle**: Physician NOT negligent if acted in manner accepted by competent physicians
- **Comparison**: Competent physician in similar circumstances
- **Expert testimony**: Medical experts establish what standard is
- **Variation**: Different schools of thought acceptable

### How Courts Prove Breach of Duty
1. **Compare to standard**: What would competent physician do?
2. **Expert evidence**: Medical experts testify about standard
3. **Deviation shown**: Physician's action deviated from standard
4. **No reasonable justification**: Deviation not justified by circumstances

## Causation Analysis

### But-For Causation
- **Test**: But for physician's negligence, would harm not have occurred?
- **Example**: But for giving wrong drug, patient would not have died
- **Requirement**: Breach must be necessary cause of harm

### Proximate Cause (Legal Cause)
- **Requirement**: Harm must be foreseeable result of breach
- **Remoteness test**: Is harm too distant from breach?
- **Intervening cause**: Did another event break chain of causation?

### Breaking Chain of Causation
- **New independent event**: Another person's negligent act intervenes
- **Patient non-compliance**: Patient refuses recommended treatment
- **Unknown medical condition**: Unknown serious illness unrelated to breach
- **Effect**: Physician's negligence not legal cause of ultimate harm

## Examples of Clear Breach in Medical Practice

### Diagnostic Negligence
- Missing obvious diagnosis despite clear symptoms
- Not ordering appropriate investigation
- Misinterpreting imaging/lab results

### Surgical Negligence
- Wrong site surgery (without marking/verification)
- Retained foreign body (sponge, instrument)
- Improper surgical technique

### Medication Errors
- Wrong drug given
- Overdose (calculation error)
- Contraindicated drug given despite known allergy
- No verification system for high-risk drugs

### Omission Negligence
- Not following up on abnormal lab results
- Not referring to specialist when needed
- Not monitoring post-operative patient adequately

## Defenses Against Negligence

### Defense 1: Accepted Medical Practice
- **Argument**: Physician followed practice accepted by competent physicians
- **Evidence**: Medical guidelines, expert testimony, published literature
- **Strength**: Strong defense if practice genuinely accepted

### Defense 2: Reasonable Alternative Approach
- **Argument**: Deviation from standard justified by circumstances
- **Example**: Limited resources, emergency situation
- **Requirement**: Alternative approach must be reasonable

### Defense 3: No Causation
- **Argument**: Breach did not cause harm
- **Example**: Patient would have died anyway (terminal condition)
- **Proof**: Expert evidence on natural history of condition

### Defense 4: Patient Contribution (Comparative Negligence)
- **Argument**: Patient's own negligence contributed
- **Example**: Patient refused medication, didn't report allergy
- **Effect**: Reduces physician's liability percentage

### Defense 5: Intervening Cause
- **Argument**: Another cause broke chain of causation
- **Example**: Hospital error (not physician's) caused death
- **Effect**: Physician not liable for subsequent harm

## Negligence vs. Different Levels

### Gross Negligence (Criminal Standard)
- **Severity**: Egregious; shocks conscience
- **Example**: Operating while intoxicated, performing surgery without training
- **Threshold for Section 304**: Criminal negligence must be gross

### Ordinary Negligence (Civil Standard)
- **Severity**: Any breach of duty
- **Example**: Missed diagnosis, minor medication error
- **Standard**: Lower threshold than criminal

### Recklessness
- **Consciousness**: Aware of risk
- **Difference**: Negligence = unaware; recklessness = aware but disregard
- **Criminal liability**: Recklessness higher culpability

## Burden of Proof

### Criminal Negligence (IPC)
- **Burden**: Beyond reasonable doubt (very high standard)
- **Proof**: Clear and compelling evidence of gross negligence
- **Consequence**: Criminal penalties (imprisonment)
- **Protection**: High standard protects innocent

### Civil Negligence
- **Burden**: Preponderance of evidence (more likely than not)
- **Proof**: Balance of probabilities sufficient
- **Consequence**: Financial compensation

## Medical Malpractice vs. Negligence

### Malpractice (Broader Term)
- Includes breach of contract
- Includes deviation from duty
- Includes technical errors

### Negligence (Specific Type of Malpractice)
- Unintentional breach of duty
- Deviation from standard of care
- Carelessness, not intentional wrongdoing`,
        mnemonics: [
          {
            text: "NEGLIGENCE ELEMENTS: DBCD (Duty, Breach, Causation, Damage)",
            explanation: "Four elements for establishing negligence"
          },
          {
            text: "CAUSATION: But-for breach = harm?, Proximate cause = foreseeable?, Intervening cause = breaks chain?",
            explanation: "Causation analysis questions"
          },
          {
            text: "BREACH EXAMPLES: WSDO (Wrong diagnosis, Surgery wrong, Drug error, Omission/no follow-up)",
            explanation: "Common types of breach"
          },
          {
            text: "STANDARDS: Gross negligence (criminal) vs Ordinary negligence (civil) vs Recklessness",
            explanation: "Different levels of culpability"
          }
        ],
        keyPoints: [
          "Four elements of negligence: Duty + Breach + Causation + Damage",
          "Bolam test: Physician not negligent if acted in manner accepted by competent physicians",
          "But-for causation: Breach must be necessary cause of harm",
          "Proximate cause: Harm must be foreseeable result of breach",
          "Intervening cause may break chain of causation (relieves physician of liability)",
          "Criminal negligence requires gross negligence + beyond reasonable doubt standard",
          "Civil negligence requires ordinary negligence + preponderance of evidence"
        ],
        textbookRefs: [
          { book: "Reddy's Essentials of Forensic Medicine & Toxicology", chapter: "Ch 2 - Medical Negligence & Liability", edition: "34th" },
          { book: "Parikh's Textbook of Medical Jurisprudence", chapter: "Ch Criminal Liability in Medical Practice", edition: "8th" }
        ]
      },
      {
        layer: 3,
        slug: "ipc-sections-relevant-medicine-clinical",
        title: "IPC Sections - Clinical Application",
        estimatedMinutes: 20,
        summary: "Real-world application of IPC sections in medical cases. Examples of criminal negligence, case studies, and how courts determine liability.",
        contentMd: `# IPC Sections - Clinical Application

## Case Study 1: Surgical Negligence - Wrong Site Surgery

### Facts
- Patient scheduled for right knee arthroscopy
- Surgeon performs surgery on left knee
- Patient suffers unnecessary surgery and loses functional knee

### IPC Section Applicable
- **IPC Section 338**: Causing grievous hurt by negligence (permanent disability)
- Alternatively: **IPC Section 304** if resulted in death

### Negligence Analysis
- **Duty**: Surgeon has duty to operate on correct site
- **Breach**: Gross breach (universal protocol: mark surgical site, timeout verification)
- **Causation**: Clearly caused harm (unnecessary surgery + lost functioning knee)
- **Damages**: Permanent disability (lost knee function, disfigurement)

### Legal Outcome
- Physician liable (indefensible negligence)
- Criminal charges likely under IPC 338
- Civil compensation for damages
- Professional disciplinary action

### Lesson
- Surgical safety checklist mandatory
- Mark surgical site with permanent marker
- Timeout before surgery (entire team verifies)
- Not following protocol = presumed negligence

## Case Study 2: Medical Negligence - Drug Overdose

### Facts
- Neonate prescribed morphine for post-operative pain
- Nurse calculates dose with decimal point error (10x normal)
- Neonate receives 10x dose; respiratory depression; death

### IPC Section Applicable
- **IPC Section 304**: Causing death by negligence

### Negligence Analysis
- **Duty**: Nurse has duty to calculate correctly, verify with standard
- **Breach**: Arithmetic error; no double-check system in place
- **Causation**: Clear (overdose directly caused respiratory depression and death)
- **Damages**: Death of patient

### Legal Outcome
- Criminal charges against nurse under IPC 304
- Hospital vicariously liable
- System failure identified (no double-checking, no computerized verification)
- Criminal penalties: Fine + 6 months imprisonment
- Civil compensation for family

### Lesson
- High-risk drugs need verification system
- Double-checking mandatory for critical calculations
- Electronic prescribing reduces errors
- Nursing protocols need fail-safe mechanisms

## Case Study 3: Diagnostic Negligence - Missed MI

### Facts
- 50-year-old male presents to ER with chest pain, sweating
- Physician evaluates but does not order ECG
- Patient sent home; has massive MI; dies at home

### IPC Section Applicable
- **IPC Section 304**: Causing death by negligence

### Negligence Analysis
- **Duty**: ER physician has duty to evaluate chest pain
- **Breach**: Not ordering ECG for classic MI symptoms (clear breach)
- **Causation**: Early diagnosis might have prevented death (death caused by failure to diagnose)
- **Damages**: Death of patient

### Legal Outcome
- Criminal charges likely under IPC 304
- Expert testimony: ECG should have been done (standard of care)
- Physician liable
- Civil compensation for family

### Lesson
- Appropriate investigations based on clinical suspicion
- Chest pain always warrants ECG
- Documentation of clinical reasoning important

## Case Study 4: Anesthesia Negligence - Awareness During Surgery

### Facts
- Patient paralyzed for surgery but anesthetic agent depleted
- Patient aware during procedure (conscious but unable to move)
- Severe psychological trauma, PTSD

### IPC Section Applicable
- **IPC Section 338**: Causing grievous hurt (permanent psychological harm)
- Or **IPC Section 337**: Causing hurt

### Negligence Analysis
- **Duty**: Anesthesiologist has duty to maintain adequate anesthesia
- **Breach**: Monitoring failure; anesthetic agent not verified
- **Causation**: Failure to maintain anesthesia caused awareness
- **Damages**: Severe psychological trauma, PTSD

### Legal Outcome
- Negligence established
- Civil liability for psychological damages
- Disciplinary action
- Criminal charges possible if gross negligence

### Lesson
- Anesthetic monitoring mandatory (capnography, agent concentration)
- Equipment verification pre-operative
- Protocols for anesthetic machine checks

## Case Study 5: Infection Control Negligence

### Facts
- Post-operative patient develops surgical site infection
- Investigation shows non-sterile technique was used (gloves reused)
- Patient develops sepsis, requires prolonged hospitalization

### IPC Section Applicable
- **IPC Section 338**: Causing grievous hurt (prolonged hospitalization, systemic infection)

### Negligence Analysis
- **Duty**: Surgeon has duty to maintain sterile technique
- **Breach**: Clear breach (gloves reused, standard requires new sterile gloves)
- **Causation**: Poor infection control caused surgical site infection
- **Damages**: Severe infection, prolonged hospitalization

### Legal Outcome
- Negligence established
- Criminal charges likely
- Hospital system failure in supply provision
- Disciplinary action

### Lesson
- Infection control protocols mandatory
- Proper sterilization of instruments
- Use of sterile gloves, drapes, technique
- Hospital responsibility for adequate supplies

## Criminal vs. Civil Proceedings

### Criminal Proceedings (IPC)
- **Initiated by**: Police (FIR filed)
- **Prosecutor**: State/government
- **Standard**: Beyond reasonable doubt
- **Burden**: High evidence threshold
- **Punishment**: Criminal penalties (imprisonment, fine)
- **Outcome**: Guilty or not guilty

### Civil Proceedings (Tort)
- **Initiated by**: Patient/family (lawsuit)
- **Plaintiff**: Individual filing suit
- **Standard**: Preponderance of evidence
- **Burden**: Lower evidence threshold
- **Punishment**: Monetary compensation
- **Outcome**: Liable or not liable

## Role of Expert Witnesses

### Expert Testimony in Criminal Case
- **Scope**: Did physician meet standard of care?
- **Basis**: Medical knowledge, case-specific facts
- **Opinion**: Negligent or not negligent
- **Credibility**: Subject to cross-examination
- **Weight**: Court determines how much weight to give

### Medical Experts Usually Testify On
- Standard of care in given situation
- Whether physician met standard
- Whether deviation from standard occurred
- Causation (did negligence cause harm)
- Alternative management that should have occurred`,
        mnemonics: [
          {
            text: "SURGICAL NEGLIGENCE: WLF (Wrong site, Left sponge/instrument, Faulty technique)",
            explanation: "Common surgical negligence patterns"
          },
          {
            text: "DIAGNOSTIC NEGLIGENCE: MFTI (Missed diagnosis, Failed investigation, Test misinterpreted)",
            explanation: "Common diagnostic errors"
          },
          {
            text: "DRUG NEGLIGENCE: WDW (Wrong drug, Wrong dose/calculation, contraindication/allergy Warning missed)",
            explanation: "Common medication errors"
          },
          {
            text: "CRIMINAL vs CIVIL: Criminal=Police+Imprisonment, Civil=Individual sues+Money damages",
            explanation: "Different legal proceedings"
          }
        ],
        keyPoints: [
          "Wrong site surgery: Indefensible negligence (requires mark, timeout, verification)",
          "Drug calculation errors: High-risk medications need double-check system",
          "Missed diagnosis: Must order appropriate investigations based on clinical suspicion",
          "Anesthetic awareness: Requires proper monitoring (capnography, agent concentration)",
          "Infection control: Breach of sterile technique causes preventable complications",
          "Criminal negligence requires gross negligence beyond reasonable doubt",
          "Civil negligence lower threshold (preponderance of evidence); patient sues for compensation"
        ],
        textbookRefs: [
          { book: "Reddy's Essentials of Forensic Medicine & Toxicology", chapter: "Ch 2 - Medical Negligence Cases", edition: "34th" },
          { book: "Parikh's Textbook of Medical Jurisprudence", chapter: "Ch Landmark Cases in Medical Negligence", edition: "8th" }
        ]
      },
      {
        layer: 4,
        slug: "ipc-sections-relevant-medicine-exam",
        title: "IPC Sections - Exam Preparation",
        estimatedMinutes: 15,
        summary: "High-yield facts on IPC sections relevant to medicine. Focus on section numbers, punishments, definitions, and medical applications.",
        contentMd: `# IPC Sections - Exam Preparation

## Quick Reference: Key IPC Sections

| Section | Offense | Punishment | Medical Context |
|---------|---------|-----------|---|
| **304** | Death by negligence | Fine 250 OR 6 mo. jail | Medical error causing death |
| **336** | Act endangering life | Fine 250 | Rash/negligent act (no injury) |
| **337** | Causing hurt | Fine 250 OR 6 mo. | Rash/negligent act causing pain |
| **338** | Causing grievous hurt | Fine 500 OR 6 mo. | Rash/negligent act causing permanent harm |
| **325** | Voluntarily causing grievous hurt | 6 mo.-2 yr. OR fine 500 | Intentional harm (rare in medicine) |
| **375** | Rape | 7 yr.-life | Non-consensual sexual penetration |
| **376** | Rape punishment (enhanced) | Life imprisonment | <12 yr, gang rape, authority figures |
| **354** | Outraging modesty | 3 years | Inappropriate examination/harassment |

## IPC Section Hierarchy for Negligence

**Ascending Order of Severity**:
1. **Section 336**: Act endangering life/safety (risk only, no injury)
2. **Section 337**: Causing hurt (simple pain, temporary condition)
3. **Section 338**: Causing grievous hurt (permanent disability/disfigurement)
4. **Section 304**: Causing death by negligence

## Definitions to Know

### What is "Hurt"?
- Bodily pain
- Disease
- Infirmity
- Temporary condition (healing expected)

### What is "Grievous Hurt"? (8 Types)
1. Emasculation
2. Permanent loss of eye
3. Permanent loss of hearing
4. Privation of any limb
5. Permanent disfigurement of head/face
6. Fracture of bone
7. Layering of bone
8. Hurt endangering life/personal safety

### What is "Negligence"?
- Rash or negligent conduct
- Deviation from standard of care
- Unintentional; not intentional harm
- Less culpable than recklessness

## Medical Negligence Three-Part Test

1. **Duty**: Physician has duty of care (established by doctor-patient relationship)
2. **Breach**: Fell below standard of care (competent physician in similar circumstances)
3. **Damage + Causation**: Harm resulted from breach (but-for causation)

## Common Exam Scenarios & Answers

### Scenario 1: Wrong Drug Dose
**Q**: Patient given 10x normal dose of morphine; respiratory depression; dies. What IPC section?
- A: Section 304 (Death by negligence) - CORRECT
- B: Section 328 (Poisoning)
- C: Section 325 (Voluntarily causing grievous hurt)
- D: Section 336 (Endangering life)

### Scenario 2: Missed Diagnosis
**Q**: Physician does not order ECG for chest pain; patient has MI; dies. What IPC section?
- A: **Section 304 (Death by negligence)** - CORRECT
- B: Section 337 (Causing hurt)
- C: Section 326 (Poisoning)
- D: Section 336 (Endangering)

### Scenario 3: Surgical Complication
**Q**: Surgeon leaves sponge in abdomen; patient develops peritonitis; requires reoperation. What IPC section?
- A: Section 336 (Endangering)
- B: Section 337 (Causing hurt)
- C: **Section 338 (Causing grievous hurt)** - CORRECT (permanent complications possible)
- D: Section 304 (Death by negligence)

### Scenario 4: Informed Consent Breach
**Q**: Hysterectomy performed without discussing infertility risk. What IPC section?
- A: **Section 337 (Causing hurt) or assault** - CORRECT
- B: Section 304 (Death)
- C: Section 354 (Outraging modesty)
- D: Section 375 (Rape)

### Scenario 5: Drug Allergy
**Q**: Physician gives drug despite patient's documented allergy; patient has anaphylaxis. What IPC section?
- A: Section 336 (Endangering)
- B: Section 337 (Causing hurt)
- C: **Section 338 or 304 (depending on severity/death)** - CORRECT
- D: Section 326 (Poisoning)

## High-Yield Facts to Remember

1. **Section 304 most common**: Criminal charge against physicians for medical negligence
2. **Sections 336-338 progression**: Based on severity of harm (risk → hurt → grievous → death)
3. **Burden of proof criminal**: Beyond reasonable doubt (very high standard)
4. **Bolam test**: Standard of care is what competent physician would do
5. **Error vs. Negligence**: Mere error of judgment NOT negligence; negligence is deviation from standard
6. **Res ipsa loquitur**: Negligence inferred from result (e.g., wrong site surgery)
7. **Causation critical**: Breach must cause harm (but-for test)
8. **Documentation key**: Good records prove standard of care was met

## Examination-Type Questions

**Q1: IPC Section 336 applies when:**
- A: Negligence causes death
- B: **Negligence endangers life but causes no injury** - CORRECT
- C: Negligence causes permanent disfigurement
- D: Intentional harm

**Q2: The standard for determining medical negligence is:**
- A: Perfect outcome required
- B: **Competent physician in similar circumstances** - CORRECT
- C: Standard set by hospital policy
- D: Standard set by patient's wishes

**Q3: Bolam test states physician NOT negligent if:**
- A: Outcome was good
- B: **Acted in manner accepted by competent physicians** - CORRECT
- C: No one complained
- D: Followed hospital protocol

**Q4: Which requires LOWEST level of proof?**
- A: Criminal negligence (IPC)
- B: **Civil negligence (tort)** - CORRECT
- C: Intentional harm
- D: Gross negligence

**Q5: Res ipsa loquitur applies in which situation?**
- A: Physician explains treatment
- B: **Negligence inferred from result (wrong site surgery)** - CORRECT
- C: Patient consents to risky procedure
- D: Physician documents reasoning`,
        mnemonics: [
          {
            text: "IPC SECTIONS: 336→337→338→304 (Endangering, Hurt, Grievous, Death)",
            explanation: "Progression of negligence severity"
          },
          {
            text: "GRIEVOUS HURT: 8 Types - Eye, Ear, Emasculation, limb, face, fracture, layering, life-danger",
            explanation: "Definition of grievous hurt"
          },
          {
            text: "MEDICAL NEGLIGENCE: Duty + Breach + Damage (caused by breach)",
            explanation: "Three elements"
          },
          {
            text: "STANDARD OF CARE: Competent physician + Similar circumstances + Reasonable conduct",
            explanation: "Bolam test application"
          }
        ],
        keyPoints: [
          "IPC Section 304: Death by negligence - most common charge against physicians",
          "Sections 336-338: Progress from endangering life → causing hurt → causing grievous hurt",
          "Negligence = deviation from standard of care (not mere error of judgment)",
          "Bolam test: Standard is what competent physician in similar circumstances would do",
          "Burden: Criminal negligence requires proof beyond reasonable doubt (very high)",
          "Causation critical: But-for test determines if breach caused harm",
          "Res ipsa loquitur: Negligence inferred from result (wrong site surgery, retained sponge)",
          "Documentation: Good records prove standard of care was met"
        ],
        textbookRefs: [
          { book: "Reddy's Essentials of Forensic Medicine & Toxicology", chapter: "Ch 2 - IPC Sections", edition: "34th" },
          { book: "Parikh's Textbook of Medical Jurisprudence", chapter: "Ch IPC in Medical Practice", edition: "8th" }
        ]
      },
      {
        layer: 5,
        slug: "ipc-sections-relevant-medicine-recall",
        title: "IPC Sections - Active Recall",
        estimatedMinutes: 10,
        summary: "Active recall questions on IPC sections relevant to medicine and medical negligence standards.",
        contentMd: `# IPC Sections - Active Recall

**Q1: List IPC Sections 336, 337, 338, and 304 in order of increasing severity and explain the difference between each.**
> A: **Section 336 (Endangering life)**: Rash/negligent act that endangers life/safety; risk of harm but NO actual injury occurs. **Section 337 (Causing hurt)**: Rash/negligent act causing bodily pain, disease, infirmity; actual hurt but temporary (expected to heal). **Section 338 (Causing grievous hurt)**: Rash/negligent act causing grievous hurt (permanent disfigurement, disability, or danger to life); one of 8 types of serious harm. **Section 304 (Causing death by negligence)**: Rash/negligent act directly causing death. Progression: Risk only → Actual pain → Permanent disability → Death.

**Q2: Define the Bolam test and explain how it applies to establishing medical negligence in India.**
> A: Bolam test = Physician is NOT negligent if they acted in a manner accepted by a reasonable body of competent physicians in similar circumstances. Application: Physician's conduct measured against what competent physician would do in similar circumstances (not by what perfect physician would do). In India, courts modified Bolam by adding reasonableness requirement - not just customary practice but practice that is reasonable. If physician followed accepted medical practice AND exercised reasonable judgment AND result was poor outcome, NOT negligent. Expert witnesses testify about what competent physicians would do.

**Q3: Explain the three essential elements required to establish medical negligence and why all three must be present.**
> A: **(1) Duty of care**: Physician has legal duty to exercise reasonable care (established by doctor-patient relationship; every physician owes duty to their patients). **(2) Breach of duty**: Physician fell below standard of care expected of competent physician in similar circumstances (action or omission that violates the duty). **(3) Damage with causation**: Harm resulted from breach; must prove but-for causation (but for breach, harm would not have occurred). All three must be proven because: Duty without breach = no liability. Breach without damage = no liability. Damage without causation = no liability. Example: Doctor prescribes wrong drug (breach), but patient finds error and doesn't take it (no damage). No liability because no damage resulted.

**Q4: What is the difference between "hurt" and "grievous hurt" under IPC Sections 337 and 338, and give medical examples of each.**
> A: **Hurt (Section 337)**: Bodily pain, disease, infirmity; temporary condition expected to heal; minor harm. Examples: Bruise from injection, swelling from vaccination, temporary pain from procedure. **Grievous hurt (Section 338)**: Permanent disfigurement, permanent disability, or danger to life; one of 8 specific types (emasculation, eye loss, ear loss, limb loss, face disfigurement, bone fracture, bone layering, life-endangering harm). Examples: Permanent paralysis from spinal cord injury, blindness from retrobulbar hemorrhage, permanent facial scarring. Key distinction: Hurt = temporary/recoverable. Grievous = permanent/disabling. Legal consequence: More serious punishment for grievous hurt (fine 500 + 6 mo. jail vs. fine 250 + 6 mo. for simple hurt).

**Q5: Discuss the burden of proof and standard of proof in criminal vs. civil negligence cases and why they differ.**
> A: **Criminal negligence (IPC)**: Burden = State/prosecution must prove. Standard = Beyond reasonable doubt (very high, ~95% certainty). Why? Criminal penalties (imprisonment, criminal record) are serious consequences; high standard protects innocent from wrongful conviction. Consequence: If doubt exists about negligence, physician acquitted. **Civil negligence (Tort)**: Burden = Plaintiff/patient must prove. Standard = Preponderance of evidence/balance of probabilities (>50% likelihood). Why? Civil remedy is money damages (less serious than imprisonment); lower threshold reasonable. Consequence: More patients able to recover damages because standard is easier to meet. Result: Many cases have criminal acquittal but civil liability (physician found not guilty criminally but liable civilly for same act).

**Q6: What is "res ipsa loquitur" doctrine and give examples of when it applies in medical negligence cases.**
> A: Res ipsa loquitur = "thing speaks for itself." Doctrine: Negligence may be inferred from result alone without direct proof of negligence; shifts burden to defendant to explain how negligence didn't occur. Applies when: (1) Event doesn't normally occur without negligence, (2) Event was within defendant's exclusive control, (3) Patient did not contribute to injury. Medical examples: **(1) Wrong site surgery**: Should never occur with proper surgical site verification; negligence presumed. **(2) Sponge/instrument left in abdomen post-surgery**: Doesn't happen in absence of negligence; negligence presumed. **(3) Anesthetic awareness during surgery**: With proper monitoring should not occur; negligence presumed. **(4) Burn to patient during surgery**: Should not occur with proper precautions. Significance: Physician must prove they WERE NOT negligent; burden shifts from patient to physician.

**Q7: Explain comparative negligence and how it affects physician's liability when patient contributes to harm.**
> A: Comparative negligence = Both physician and patient may be negligent; liability apportioned based on percentage contribution. Example 1: Patient told to take medication; refuses because of side effects without asking physician; later develops complication. Patient's refusal to take medication = patient's negligence. Liability: If harm 70% physician's fault + 30% patient's fault, physician pays 70% of damages. Example 2: Patient fails to report known drug allergy despite physician asking; given drug causing allergic reaction. Patient's failure to communicate = patient's negligence. Result: Physician's liability reduced because patient contributed. Legal principle: Both parties' actions considered for overall causation and damages allocation. Limitation: Patient cannot be solely responsible if physician's breach was gross negligence.

**Q8: Distinguish between criminal negligence and recklessness, and explain why recklessness carries higher criminal liability.**
> A: **Negligence**: Unintentional disregard for safety; person unaware they are creating risk; inadvertent failure to meet standard of care. Example: Physician makes calculation error prescribing drug dose without double-checking. **Recklessness**: Conscious/aware of substantial risk but disregards it anyway; deliberate risk-taking. Example: Physician knows patient has drug allergy, prescribes drug anyway (aware of risk but disregards). Criminal liability: Negligence = Section 304 (fine 250, 6 mo. jail). Recklessness = Higher charge possible (Section 304-A could be aggravated). Why recklessness worse? Person consciously decided to create risk (higher moral culpability); endangers others knowingly. Negligence: Unintentional (less culpable); may have been accident/oversight.

**Q9: What defenses can a physician offer against criminal negligence charges under IPC Section 304?**
> A: **(1) Accepted medical practice**: Physician followed practice accepted by competent physicians; expert testimony shows conduct was standard. Defense: "I acted in manner accepted by my peers." **(2) Reasonable alternative approach**: Deviation from standard was reasonable given circumstances (emergency, limited resources). Defense: "Alternative approach was reasonable in this situation." **(3) No causation**: Breach did not cause death (patient would have died anyway). Defense: "Patient had terminal illness; death inevitable regardless of my treatment." **(4) No breach**: Physician met standard of care. Defense: "I met standard of care; no breach occurred." **(5) Patient contributed**: Patient's own negligence broke chain of causation. Defense: "Patient refused recommended treatment; that caused death, not my negligence." **(6) Intervening cause**: Another person's negligent act (not physician's) caused death. Defense: "Hospital error caused death, not my decision." All defenses must be proven with expert evidence and documentation.

**Q10: Explain the importance of documentation in defending against negligence charges and what makes documentation protective.**
> A: Documentation importance: Medical records are key evidence in negligence cases; documents clinical decision-making and standard of care. Protective documentation must be: (1) **Contemporaneous**: Written at time of encounter, not retroactively (proves accuracy and credibility). (2) **Objective**: Facts documented (findings, test results, actions), not opinions about patient character. (3) **Complete**: Shows thorough history, examination, investigations, reasoning for decisions. (4) **Legible**: Can be read by others; illegible records suggest sloppy care. (5) **Explains reasoning**: Documents WHY decisions made (differential diagnosis considered, why test ordered or not ordered). (6) **Accurate**: Errors corrected with single line, initialed, dated (not whited out). (7) **Timely**: No alterations suggesting later manipulation. Poor documentation effects: (1) Jury assumes worst if records vague/missing. (2) Cannot demonstrate standard of care was met. (3) Appears physician hiding something. (4) Makes physician's testimony less credible. Good documentation effects: (1) Strongest defense by showing standard of care met. (2) Demonstrates physician's clinical judgment. (3) Corroborates physician's memory at trial (years later). (4) Shows systematic approach to patient care. Golden rule: Write notes as if you'll defend them in court.`,
        mnemonics: [],
        keyPoints: [
          "IPC Sections 336-338 progress by severity: Endangering → Hurt → Grievous Hurt",
          "Section 304 most common criminal charge for medical negligence causing death",
          "Bolam test: Not negligent if acted in manner accepted by competent physicians",
          "Three elements of negligence: Duty + Breach + Damage (with causation)",
          "Criminal standard beyond reasonable doubt (very high); civil standard preponderance of evidence",
          "Res ipsa loquitur: Negligence inferred from result (wrong site surgery, retained sponge)",
          "Comparative negligence: Patient's own negligence may reduce physician's liability",
          "Good documentation: Contemporaneous, objective, complete, legible, explains reasoning - strongest defense"
        ],
        textbookRefs: [
          { book: "Reddy's Essentials of Forensic Medicine & Toxicology", chapter: "Ch 2 - IPC Sections & Medical Negligence", edition: "34th" },
          { book: "Parikh's Textbook of Medical Jurisprudence", chapter: "Ch Criminal Liability & Medical Negligence", edition: "8th" }
        ]
      }
    ]
  }
];
