import type { TopicLessons } from "./content-loader";

export const forensicMedicineLessonsPartXXI: TopicLessons[] = [
  {
    topicCode: "FM-MOD-04-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "sexual-offences-layer-1-foundation",
        title: "Sexual Offences (Examination & POCSO) - Foundation",
        estimatedMinutes: 25,
        summary: "Introduction to sexual assault forensics and medico-legal examination. Understanding IPC rape definitions, POCSO Act provisions, and basic examination protocols.",
        contentMd: `# Sexual Offences (Examination & POCSO) - Foundation

## Legal Definitions (Indian Law)

### Rape (IPC Section 375)
- **Definition**: Non-consensual sexual intercourse
- **Elements**: Penetration of penis into vagina, anus, or mouth
- **Lack of consent**: Force, fear, incapacity, fraud, below 16 years
- **Punishment**: 7 years to life imprisonment (amended 2013)
- **Important**: Recent amendment removed marital rape exception in some cases

### Sexual Assault (IPC Section 354)
- Unwanted sexual contact without penile penetration
- Groping, unwanted touching, forced kissing
- Punishment: 3-7 years imprisonment

### Outraging Modesty (IPC Section 509)
- Words, gesture, acts intended to insult or outrage
- Harassment, stalking, indecent exposure
- Punishment: 3 years imprisonment

### Statutory Rape
- Sexual intercourse with child <16 years
- Automatic offense even with "consent" (child cannot consent)
- No need to prove lack of consent

## POCSO Act 2012

### Key Provisions
- **Protection of children <18 years** from sexual abuse and exploitation
- **Stricter penalties** than general rape law (minimum 7 years, often life)
- **Section 3 (Penetrative abuse)**: Child sexual abuse (CSA)
- **Section 7 (Non-penetrative)**: Sexual assault on child
- **Section 11 (Online)**: Pornography, grooming, online exploitation
- **Section 21 (Mandatory reporting)**: Medical professionals MUST report to police

### Aggravating Factors
- Repeated abuse (serial offence)
- Offender in position of authority/trust (teacher, priest, parent)
- Gang rape (multiple offenders)
- Injury with bleeding
- Child with disability

### Mandatory Reporting Requirement
- **Medical professionals legally obligated** to report suspected child sexual abuse
- **Cannot wait for family permission** or victim's request
- **Overrides confidentiality** - reporting requirement takes precedence
- **Failure to report**: Criminal offense under POCSO Section 21

## Epidemiology of Sexual Assault

### Victim Profile
- **Age**: Infants to elderly (children 6-12 highest risk)
- **Gender**: 90% female; male victims underreported
- **Relationship to perpetrator**:
  - Acquaintance (50%)
  - Partner/spouse (30%)
  - Stranger (20%)

### Timing of Presentation
- **Immediate**: Within 72 hours (best for evidence recovery)
- **Delayed**: Days to months (shame, fear, trauma response)
- **Some never report** (up to 60% unreported)

## Types of Sexual Offences

### Rape
- Penetrative offense (penile)
- Most severe trauma
- Causes physical and psychological injury

### Child Sexual Abuse (POCSO Definition)
- Penetrative abuse of child <18 years
- Includes digital/object penetration, not just penile
- Broader than traditional rape definition

### Incest
- Sexual activity between family members
- Often underreported due to family dynamics
- Particularly harmful to children

### Sexual Harassment/Workplace Assault
- Unwanted sexual advances
- Quid pro quo (job/promotion contingent on sexual favor)
- Creating hostile environment

## Phases of Sexual Assault

### Phase 1: Approach
- Offender gains access to victim
- May involve grooming, manipulation, or force

### Phase 2: Assault
- Actual sexual violence occurs
- May involve restraint, threat, violence

### Phase 3: Post-Assault
- Offender may flee, clean evidence, threaten victim
- Victim may be injured, traumatized, in shock

### Phase 4: Presentation/Reporting
- Victim reports to police/medical facility
- **Evidence collection window critical (72 hours optimal)**
- Medical examination performed
- Police investigation initiated

## Medico-Legal Responsibilities

### Medical Examiner's Role
- Document findings objectively
- Collect evidence properly (chain of custody)
- Assess consistency with alleged mechanism
- **NOT to determine guilt/innocence** (court's role)

### Informed Consent
- Explicit consent for examination
- Consent for evidence collection and photography
- Can withdraw consent at any time
- Victim's assent in minors (even with guardian consent)

### Confidentiality & Mandatory Reporting
- Confidentiality protected (with exception for reporting)
- POCSO mandates reporting to police
- Cannot refuse based on victim's preference
- Must report "reasonable suspicion"

`,
        mnemonics: [
          {
            text: "IPC SEXUAL OFFENCES: 375=Rape, 354=Sexual Assault, 509=Outraging Modesty",
            explanation: "IPC section numbers"
          },
          {
            text: "POCSO KEY: <18 years, Stricter penalties (7yr min), Mandatory reporting, Online included",
            explanation: "POCSO Act main features"
          },
          {
            text: "RAPE ELEMENTS: Non-consensual, Penetration (penis), Coercion/force/fraud",
            explanation: "Three key elements of rape"
          },
          {
            text: "VICTIM RELATIONSHIPS: ACE (Acquaintance 50%, Child risk high, Estranged/partner 30%, Stranger 20%)",
            explanation: "Relationship statistics"
          }
        ],
        keyPoints: [
          "Rape = non-consensual penile penetration; sexual assault = non-penetrative unwanted contact",
          "POCSO protects children <18 with stricter penalties than general rape law",
          "Child cannot legally consent even if willing (statutory protection)",
          "POCSO includes non-penetrative abuse and online exploitation",
          "Mandatory reporting by medical professionals to police (overrides confidentiality)"
        ],
        textbookRefs: [
          { book: "Reddy's Essentials of Forensic Medicine & Toxicology", chapter: "Sexual Offences", edition: "34th" },
          { book: "Parikh's Textbook of Medical Jurisprudence", chapter: "Sexual Offences & POCSO", edition: "8th" }
        ]
      },
      {
        layer: 2,
        slug: "sexual-offences-layer-2-mechanism",
        title: "Sexual Offences (Examination & POCSO) - Examination Protocols",
        estimatedMinutes: 25,
        summary: "Forensic medical examination protocols for sexual assault victims. Evidence collection procedures, trauma-informed care, and special considerations for children.",
        contentMd: `# Sexual Offences (Examination & POCSO) - Examination Protocols

## Pre-Examination Preparation

### Informed Consent
- **Explicit written consent** for examination and evidence collection
- **Assent from minors**: Parents/guardians consent; child's assent also important
- **Confidentiality disclosure**: Explain mandatory POCSO reporting requirement
- **Voluntary**: Victim can refuse or withdraw consent anytime

### History Taking
- **Detailed account**: When, where, what happened, with whom
- **Types of penetration**: Vaginal, anal, oral, digital, object
- **Force/threat**: Physical force, weapon, threat of harm
- **Last consensual intercourse**: Timeline for interpretation
- **Hygiene since assault**: Bathing, urination, defecation (affects evidence)
- **Emotional state**: Document affect, coherence, cooperation

### Chain of Custody
- **All evidence labeled**: Patient name, date, time, examiner name
- **Sealed containers**: Prevent contamination/tampering
- **Documentation**: Who collected, stored, transferred evidence (signed log)
- **Critical for court**: Breaks in chain may render evidence inadmissible

## Physical Examination

### External Genital Examination (Female)
1. **Vulva**: Erythema (redness), edema (swelling), abrasions, lacerations
2. **Hymen**: Character (intact, lacerated, scarred, healed tears)
   - Hymenal tears suggest penetration
   - Absence doesn't rule out penetration (heals quickly)
   - Normal variations common (fimbriae, microperforate, crescentic)
3. **Vaginal vestibule**: Abrasions, bruising, discharge, inflammation
4. **Perineum**: Bruising, lacerations, anal findings
5. **Anal area**: Erythema, edema, lacerations, anal fissures

### External Genital Examination (Male)
1. **Penis**: Abrasions, bruising, discharge, ulcerations, bite marks
2. **Scrotum**: Trauma, bruising
3. **Anal area**: Similar to females (if anal rape)

### Internal Examination (Female)
- **Vaginal speculum exam**: Examine cervix, vaginal walls, fornices
- **Bimanual pelvic exam**: Assess for internal injury
- **Rectal exam**: Tears, bleeding, discharge

### Other Body Areas
- **Breasts**: Bruising, bite marks, lacerations, tenderness
- **Neck**: Ligature marks, bite marks, bruising (manual strangulation)
- **Arms/legs**: Defensive wounds, bruising from restraint
- **Back**: Abrasions, bruising from position during assault
- **Mouth**: Lacerations, bleeding
- **Hair**: Pulling, damage
- **Overall**: Systematic photography of all injuries

## Forensic Evidence Collection

### Biological Evidence

**Blood/Saliva Swabs**:
- External genitalia
- Anal area
- Mouth/throat
- Purpose: DNA typing, blood group, STI screening

**Vaginal Swabs**:
- Pooled secretions from fornices
- Purpose: DNA (offender's), spermatozoa, STI testing
- Timing: Within 72 hours optimal for sperm recovery

**Anal Swabs**:
- Even without penetration, semen can migrate
- Collect high and low from anal canal

**Oral Swabs**:
- If oral rape alleged
- Purpose: DNA, spermatozoa

**Body Hair Samples**:
- Pubic hair (sample + plucked, not cut)
- Head hair (control from victim)
- Loose hairs from body
- Purpose: Comparison with offender's hair

**Fingernail Scrapings**:
- Victim's fingernails if scratched assailant
- **High-yield evidence** if victim fought back
- Purpose: Skin, blood, DNA under nails

### Trace Evidence
- **Fibers**: From offender's clothing
- **Glass/soil**: On victim's clothing
- **DNA on clothing**: Blood, saliva, semen stains
- **Condom fragments**: If condom ruptured

### Clothing
- **Entire outfit**: Bagged separately (not washed)
- **Stains documented**: Location, size, appearance
- **Purpose**: Fiber evidence, semen/blood analysis

### Special Examination: Child Victims (POCSO)

**Minimizing Trauma**:
- Smaller speculum (appropriate to age)
- Minimal invasive examination if possible
- Play-based communication (younger children)
- Support person present (caregiver, counselor)

**Hymenal Findings in Children**:
- Normal variations common (fimbriae, microperforate, crescentic)
- **Absence of tears does NOT rule out penetration** (tissues elastic)
- **Hymenal scarring/clefts**: Highly suggestive of previous penetration
- **Anal changes**: Anal fissures, scarring, laxity more specific

**STI Screening**:
- Baseline testing (gonorrhea, chlamydia, syphilis, HIV, hepatitis B)
- Follow-up at 6 weeks, 3 months
- Treatment offered (prophylactic antibiotics)

**Pregnancy Testing**:
- Urine/serum HCG in postmenarchal girls
- Emergency contraception discussed

## Documentation Standards

### Medical Record Content
1. **History**: Detailed account (time, location, type, perpetrator)
2. **Emotional state**: Affect, coherence, cooperation
3. **Physical findings**: Describe, measure, photograph
4. **Evidence collected**: List all specimens, chain of custody
5. **Impression**: Assessment of consistency with alleged trauma
6. **Recommendations**: Medical treatment, counseling, safety planning

### Photography Protocol
- **Consent**: Explicit consent documented
- **Quality**: Clear, well-lit, anatomical identification
- **Scale**: Include ruler/scale for size reference
- **Labeling**: Location, date, time
- **Storage**: Secure, restricted access

`,
        mnemonics: [
          {
            text: "EXAMINATION SEQUENCE: History, Examination (external→internal), Evidence Collection, Documentation",
            explanation: "Main components of sexual assault exam"
          },
          {
            text: "EVIDENCE TYPES: Biological (DNA), Fibers/trace, Clothing",
            explanation: "Three main evidence categories"
          },
          {
            text: "CHILD EXAM: Smaller speculum, Age-appropriate communication, Play-based approach",
            explanation: "Special considerations for children"
          },
          {
            text: "HYMEN INTERPRETATION: Absence≠No penetration in children (tissues elastic), Scars/clefts=Previous trauma",
            explanation: "Hymenal findings interpretation"
          }
        ],
        keyPoints: [
          "Evidence collection within 72 hours optimal (spermatozoa recoverable)",
          "Chain of custody critical for court admissibility",
          "Hymenal tears heal quickly; absence doesn't exclude penetration",
          "Fingernail scrapings high-yield if victim scratched assailant",
          "Child sexual abuse: minimal invasive exam, age-appropriate communication, support person present"
        ],
        textbookRefs: [
          { book: "Reddy's Essentials of Forensic Medicine & Toxicology", chapter: "Sexual Offences", edition: "34th" },
          { book: "WHO Clinical Handbook on Sexual Assault Examination", website: "who.int" }
        ]
      },
      {
        layer: 3,
        slug: "sexual-offences-layer-3-clinical",
        title: "Sexual Offences (Examination & POCSO) - Clinical Interpretation & Management",
        estimatedMinutes: 25,
        summary: "Interpretation of forensic findings in sexual assault cases. Assessment of consistency with alleged assault, management of acute assault, and POCSO responsibilities.",
        contentMd: `# Sexual Offences (Examination & POCSO) - Clinical Interpretation & Management

## Assessment of Victim & Findings

### Medical Examiner's Role & Limitations
- **Document findings objectively** - describe what you observe
- **NOT to determine guilt/innocence** - that's for court
- **NOT to judge victim credibility** - that's for investigation
- **Assess consistency** with alleged mechanism of assault
- **Avoid assumptions** about victim based on lack of injuries

### Absence of Injury
- **Absence of genital injury does NOT mean no rape**
- **40-60% of rape victims have no genital injury**
- **Reasons**: Victim may not resist (fear, threat), semen/lubrication reduce friction, examination days/weeks after assault (injuries healed), anal/oral rape may leave minimal injury
- **Key teaching**: Lack of injury doesn't mean fabrication

### Presence of Injury
- **Genital injury increases likelihood** of penetrative offense
- **Injury location**: Specific patterns suggest particular activities
- **Injuries typical of sexual assault**: Hymenal tears, anal fissures, perineal lacerations
- **Other injuries**: Bruising of thighs, breasts, neck suggest struggle

## Interpretation of Findings

### Semen Findings
- **Spermatozoa presence**: Indicates recent sexual contact (within 72 hours)
- **Absence of spermatozoa**: Does NOT exclude sexual assault
- **Reasons for absence**: Condom used, infertility, azoospermia, dilution, examination >72 hours
- **Seminal fluid markers**: PSA (prostate), acid phosphatase positive even without sperm
- **Medico-legal point**: Absence cannot be used to discredit victim

### STI Findings
- **Gonorrhea/Chlamydia**: Indicate sexual contact; test at 0, 6 weeks, 3 months
- **Syphilis**: May take weeks to manifest; test at 6 weeks, 3 months
- **HIV**: Test baseline, then follow-up (window period 2-8 weeks)
- **Hepatitis B**: Vaccination offered if non-immune
- **Interpretation**: STI presence supports sexual contact; absence doesn't exclude

### Pregnancy from Rape
- **Emergency contraception**: Within 72 hours (levonorgestrel) or 120 hours (mifepristone)
- **Medical support**: Throughout pregnancy and all options
- **Fetal DNA testing**: Can establish biological father (legal purposes)

## POCSO Act Special Considerations

### Mandatory Reporting
- **MUST report** suspected child sexual abuse to police
- **Overrides confidentiality** and family preferences
- **Failure to report**: Criminal offense (POCSO Section 21)
- **"Reasonable suspicion"** sufficient to report (no need to prove)

### Testimony in Court (If Case Proceeds)
- **Medical examiner presents findings** objectively
- **Child victim support**: Video recording, support person present
- **Sensitive questioning**: Avoid further trauma
- **Expert witness**: Explain medical findings

### Investigation Role
- **Police investigation**: Criminal prosecution
- **Medical documentation**: Evidence for investigation
- **Child protection services**: Referral for safety assessment
- **Multidisciplinary**: Medical, legal, social services coordination

## Acute Sexual Assault Management

### Immediate Priorities
1. **Safety**: Screen for immediate danger; secure location
2. **Medical treatment**: Life-threatening injuries requiring emergency care
3. **STI prophylaxis**: Ceftriaxone 250mg IM + doxycycline 100mg BID × 7 days
4. **Hepatitis B**: Vaccination if non-immune
5. **HIV PEP**: Tenofovir + emtricitabine + raltegravir within 72 hours
6. **Emergency contraception**: Within 72 hours (levonorgestrel 1.5mg single dose)
7. **Psychological support**: Referral to trauma counseling
8. **Safety planning**: Risk assessment, safe housing if needed

### Ongoing Support (Follow-up)
- **STI testing**: 6 weeks, 3 months, 6 months (account for incubation)
- **Mental health**: PTSD, depression, anxiety common; therapy essential
- **Legal support**: Victim advocate to navigate criminal justice
- **Victim services**: Financial assistance, safe housing, support groups

## Documentation Pearls

### What TO Document
1. **Detailed history**: Exact words of victim (in quotes when possible)
2. **Timeline**: Date/time of assault, time of examination, time since assault
3. **Physical findings**: Location, size, color, shape, photograph
4. **Specimens collected**: List all evidence with chain of custody
5. **Impression**: "Findings consistent with alleged sexual assault"

### What NOT To Document
- Opinion on victim's truthfulness ("victim credible" - not medical examiner's role)
- Assumption of guilt ("perpetrator was..." - for legal system)
- Moral judgments about victim's behavior/clothing
- Names of accused (unless legally required)

## Special Scenarios

### Delayed Presentation (Days/Weeks After Assault)
- **Evidence collection**: May still be productive if semen present
- **Injuries healed**: Focus on healing patterns, scarring
- **Witness corroboration**: Important when physical evidence limited
- **Psychological effects**: PTSD, trauma response explains delay

### Assault by Partner/Marital Rape
- **Legal change**: Marital rape increasingly prosecuted in India
- **Challenges**: Witness testimony, lack of obvious injury
- **Power dynamics**: Victim may fear retaliation
- **Documentation**: Same thorough approach as other cases

### Assault of Person with Disability
- **Vulnerability**: Higher risk of abuse
- **Communication barriers**: Adapt examination/questioning for understanding
- **Consent capacity**: Assess ability to consent (may be diminished)
- **POCSO applies** regardless of developmental status if <18 years

### Gang Rape (Multiple Offenders)
- **Multiple trauma**: Increased violence, injury severity often severe
- **DNA evidence**: Mixed DNA from multiple offenders
- **Identification**: DNA profiling can identify individuals if in database
- **Aggravating factor**: Enhanced penalties (life imprisonment usual)

`,
        mnemonics: [
          {
            text: "EXAM ROLE: Document (YES), Judge credibility (NO), Determine guilt (NO)",
            explanation: "Clear boundaries of medical examiner role"
          },
          {
            text: "NO INJURY ≠ NO RAPE: 40-60% of rape victims lack genital injury",
            explanation: "Critical teaching point for exam"
          },
          {
            text: "POCSO KEY: Mandatory reporting (MUST tell police), <18 years, Stricter penalties",
            explanation: "POCSO essentials for medical professionals"
          },
          {
            text: "STI TESTING: Baseline + 6 weeks + 3 months (account for incubation periods)",
            explanation: "Follow-up protocol for all offenses"
          }
        ],
        keyPoints: [
          "Medical examiner documents objectively; court determines guilt/innocence",
          "Absence of genital injury doesn't exclude sexual assault (40-60% of cases)",
          "Spermatozoa absence doesn't exclude assault (condom, infertility, dilution)",
          "POCSO mandatory reporting; failure to report is criminal offense",
          "Emergency contraception, STI prophylaxis, HIV PEP, vaccinations within 72 hours"
        ],
        textbookRefs: [
          { book: "Reddy's Essentials of Forensic Medicine & Toxicology", chapter: "Sexual Offences", edition: "34th" },
          { book: "Parikh's Textbook of Medical Jurisprudence", chapter: "Sexual Offences & POCSO", edition: "8th" }
        ]
      },
      {
        layer: 4,
        slug: "sexual-offences-layer-4-exam",
        title: "Sexual Offences (Examination & POCSO) - Exam Preparation",
        estimatedMinutes: 20,
        summary: "High-yield facts about sexual assault examination and POCSO Act. Focus on evidence interpretation, legal requirements, and special provisions for children.",
        contentMd: `# Sexual Offences (Examination & POCSO) - Exam Preparation

## High-Yield Facts

### Legal Framework
- **Rape (IPC 375)**: Non-consensual penile penetration
- **Sexual Assault (IPC 354)**: Unwanted sexual contact without penetration
- **POCSO (2012)**: Protection of children <18 with stricter penalties
- **Statutory rape**: Automatic offense with child <16 (even with "consent")

### Examination Timeline
- **72 hours**: Optimal window for spermatozoa recovery
- **Immediate**: Priority for life-threatening injuries
- **Delayed**: Still valuable within weeks/months (healing patterns, STI serology)

### Key Examination Findings
- **40-60% of rape victims: NO genital injury** (absence ≠ no rape)
- **Hymenal tears**: Suggestive but heal quickly
- **Anal findings**: More specific than vaginal (fissures, scarring)
- **Fingernail scrapings**: High-yield if victim scratched assailant
- **Spermatozoa**: Indicates sexual contact within 72 hours

### Evidence Collection
- **Chain of custody**: CRITICAL for admissibility
- **All evidence labeled**: Patient name, date, time, examiner name
- **Sealed containers**: Prevent contamination
- **Photography**: With consent; location, time, scale documented

### POCSO Act Essentials
- **Mandatory reporting**: Medical professionals MUST report child sexual abuse
- **Failure to report**: Criminal offense (6 months jail + 10,000 rupees fine)
- **Stricter penalties**: Minimum 7 years (vs. general rape law)
- **Includes non-penetrative**: Touching, grooming, online exploitation
- **Child cannot consent**: Even if willing; automatic offense

### STI Prophylaxis
- **Baseline + 6 weeks + 3 months testing** (incubation periods)
- **Antibiotics**: Ceftriaxone 250mg IM + doxycycline 100mg BID × 7 days
- **HIV PEP**: Within 72 hours (tenofovir/emtricitabine/raltegravir, 28 days)
- **Hepatitis B**: Vaccination if non-immune
- **Emergency contraception**: Within 72 hours

## Common Exam Scenarios

### Scenario 1: Woman presents 5 hours after rape, minimal genital injury, no spermatozoa found
- **Assessment**: No injury/spermatozoa doesn't rule out rape
- **Approach**: Continue examination, DNA swabs, STI testing, support
- **Key point**: Absence of physical findings NOT proof of fabrication

### Scenario 2: 8-year-old girl, normal hymen, mother wants "clearance"
- **Assessment**: Normal hymen does NOT rule out abuse
- **POCSO response**: Mandatory reporting to police (regardless of findings)
- **Critical**: Mandatory reporting required even without visible injury

### Scenario 3: Gang rape victim with severe bruising, multiple semen sources
- **Evidence**: Multiple DNA sources from different offenders
- **DNA profiling**: Can identify individual offenders
- **Charges**: Aggravating factor; enhanced penalties (life imprisonment)

### Scenario 4: 10-year-old boy with anal scarring and laxity
- **Findings**: Highly suggestive of repeated penetration
- **POCSO**: <18 years; mandatory reporting regardless of gender
- **Investigation**: Child protection services, safety assessment

## Examination-Type Questions

**Q: What is the primary significance of absence of genital injury in sexual assault?**
- A: Indicates no sexual contact occurred
- B: **Does not exclude sexual assault** ✓
- C: Proves victim consented
- D: Rules out rape diagnosis

**Q: In POCSO Act, what is the mandatory reporting requirement?**
- A: Report if victim wishes
- B: **Report suspected child sexual abuse to police immediately** ✓
- C: Consult family before reporting
- D: Not required if victim is teenager

**Q: Spermatozoa are typically recoverable up to:**
- A: 24 hours
- B: **72 hours** ✓ (optimal recovery window)
- C: 1 week
- D: Indefinitely if refrigerated

**Q: A 6-year-old with normal hymen but disclosure of penetration. Management:**
- A: Tell child nothing happened
- B: **Report to police and child protection services (mandatory)** ✓
- C: Examine only if parents agree
- D: Wait for obvious signs

**Q: Emergency contraception is effective up to:**
- A: 24 hours
- B: 48 hours
- C: **72 hours (levonorgestrel)** ✓
- D: 1 week

## Medicolegal Pearls for Exam

**Remember:**
1. **Absence of injury ≠ No rape** (40-60% have no genital injury)
2. **Hymenal findings unreliable in children** (elastic tissues)
3. **POCSO mandatory reporting is MANDATORY** (not optional)
4. **Chain of custody CRITICAL** (for admissibility)
5. **Examiner documents, NOT judge credibility** (court decides)

## Quick Reference Table

| Finding | Interpretation |
|---------|---|
| Normal genital exam | Does NOT exclude sexual assault |
| Hymenal tear | Consistent with penetration; heals quickly |
| Hymen normal in child | Does NOT rule out penetration |
| Spermatozoa present | Sexual contact within 72 hours |
| Spermatozoa absent | Does NOT exclude assault |
| STI positive | Confirms sexual contact; baseline + follow-up |
| Anal scarring | Highly suggestive of previous penetration |
| Defensive wounds | Suggests struggle; supports allegation |

`,
        mnemonics: [
          {
            text: "POCSO MANDATORY: Report to Police (Or criminally liable)",
            explanation: "Reporting requirement - non-negotiable"
          },
          {
            text: "NO INJURY ≠ NO RAPE: 40-60% of rape victims lack genital injury",
            explanation: "Critical teaching point"
          },
          {
            text: "SPERMATOZOA WINDOW: 72 hours optimal recovery (but absence ≠ no assault)",
            explanation: "Evidence timeline"
          },
          {
            text: "EXAM ROLE: Document (YES), Judge credibility (NO), Determine guilt (NO)",
            explanation: "Clear boundaries"
          }
        ],
        keyPoints: [
          "Absence of genital injury doesn't exclude sexual assault",
          "Hymenal findings unreliable in children",
          "POCSO mandatory reporting is legally required",
          "Spermatozoa recovery optimal within 72 hours",
          "Medical examiner documents objectively; court determines outcome"
        ],
        textbookRefs: [
          { book: "Reddy's Essentials of Forensic Medicine & Toxicology", chapter: "Sexual Offences", edition: "34th" },
          { book: "Parikh's Textbook of Medical Jurisprudence", chapter: "Sexual Offences & POCSO", edition: "8th" }
        ]
      },
      {
        layer: 5,
        slug: "sexual-offences-layer-5-active-recall",
        title: "Sexual Offences (Examination & POCSO) - Active Recall",
        estimatedMinutes: 15,
        summary: "Self-assessment on sexual assault examination protocols, POCSO Act requirements, and forensic interpretation of findings.",
        contentMd: `# Sexual Offences (Examination & POCSO) - Active Recall

**Q1: Explain why absence of genital injury is common in rape cases and what this means for interpretation.**
> Absence of genital injury occurs in 40-60% of rape cases for multiple reasons: (1) Victim may not resist due to fear, threat, or incapacity (reducing friction/injury), (2) Lubrication (victim's or assailant's) reduces friction, (3) Genital tissues elastic and distensible (especially in young women and children), (4) Examination days/weeks after assault when injuries already healed, (5) Offender may use condom, (6) Anal/oral rape may leave minimal genital injury. Interpretation: Absence of injury does NOT mean no rape occurred. Medical examiner must document objectively without bias. Absence of injury should never be used to conclude victim's fabrication.

**Q2: Describe the role and limitations of hymenal examination in child sexual abuse.**
> Role: Hymen may show signs of previous penetrative trauma (tears, scarring, clefts, loss of tissue). Limitations: (1) Normal anatomic variations common in children (fimbriae, microperforate, crescentic hymen all normal), (2) Hymenal tissue elastic in children - penetration may leave no visible changes, (3) Hymenal tears heal quickly (days to weeks), so absence doesn't exclude previous penetration, (4) Hymenal changes can result from non-sexual trauma (falls, sports, masturbation), (5) Hymenal scarring/clefts more specific for previous penetration but less common. Modern approach: Hymenal examination one component only. Cannot be sole basis for including/excluding abuse. Absence of hymenal changes DOES NOT rule out child sexual abuse.

**Q3: What are the mandatory reporting requirements under POCSO Act and consequences for failure?**
> POCSO Section 19 & 21 requirements: Medical professionals MUST report "reasonable suspicion" of child sexual abuse to police immediately. No need to confirm abuse; suspicion sufficient. Cannot wait for family permission or victim's request. Reporting overrides confidentiality privilege. Legal consequences for failure: Criminal offense under POCSO Section 21 - imprisonment up to 6 months and/or fine up to 10,000 rupees. This applies regardless of whether abuse ultimately proven. Medical professional's obligation is to report suspected abuse; court determines guilt/innocence.

**Q4: Explain the significance of spermatozoa findings and why absence doesn't exclude assault.**
> Spermatozoa presence in genital tract indicates sexual contact within 72 hours (optimal recovery window). Motile sperm recoverable within 24 hours; degenerates over 72 hours. Spermatozoa absence common and does NOT exclude assault because: (1) Offender may be azoospermic (vasectomy, infertility, absence of sperm production), (2) Condom used (prevents semen transfer), (3) Non-penile intercourse (oral, anal) may not deposit semen in sampled area, (4) Victim bathed/urinated after assault (dilution/washout), (5) Examination after 72 hours (sperm degraded), (6) Victim had consensual intercourse after assault (mixing of semen), (7) Retrograde ejaculation (reduced semen transfer). Significance: Spermatozoa presence confirms sexual contact; absence must NOT be used to discredit victim.

**Q5: Describe proper chain of custody protocol for maintaining evidence admissibility.**
> Chain of custody protocol: (1) All evidence clearly labeled with patient name, date, time of collection, specimen type, examiner name, (2) Each item in separate sealed container (prevent cross-contamination), (3) Document who collected evidence, when, where stored, (4) Any transfer documented: who transferred, when, to whom, signature required, (5) Evidence stored secure, temperature-controlled (if DNA testing), (6) Photograph sealed evidence with label, (7) Each person handling evidence signs chain of custody form. Breaks in chain: If any gap in documentation, evidence may be inadmissible in court (defense claims tampering/contamination). Medical examiner's responsibility: Maintain documentation rigorously. Proper documentation serves victim's interests even without prosecution.

**Q6: What are immediate medical management priorities for acute sexual assault victim?**
> Immediate priorities with timelines: (1) **Safety assessment**: Is victim safe from further harm? (2) **Life-threatening injuries**: Immediate emergency care if needed, (3) **STI prophylaxis**: Within 72 hours (ceftriaxone 250mg IM + doxycycline 100mg BID × 7 days), (4) **Hepatitis B vaccination**: If non-immune, within 72 hours, (5) **HIV PEP (post-exposure prophylaxis)**: Within 72 hours ideally (tenofovir/emtricitabine/raltegravir × 28 days), (6) **Emergency contraception**: Within 72 hours (levonorgestrel 1.5mg), (7) **STI testing baseline**: Immediate (for follow-up comparison), (8) **Pregnancy test**: If postmenarchal, (9) **Psychological support**: Immediate referral to trauma counseling/therapy.

**Q7: How should examination findings be documented to ensure court admissibility?**
> Documentation standards: (1) **Objective description**: Use precise measurements, descriptive language, avoid interpretation ("2cm laceration mid-perineum" NOT "torn from intercourse"), (2) **Patient's own words**: Quote victim's account directly when possible; note if patient reports fear, pain, force, (3) **Separate history from findings**: Two distinct sections, (4) **Location and measurement**: Use anatomic location, size (with ruler/scale in photos), (5) **Avoid speculation**: Don't conclude guilt/innocence or judge credibility (court's role), (6) **Chain of custody**: Document all evidence collected, labeled, stored, transferred, (7) **Photographs**: Clear, well-lit, with anatomic identification and scale; consent documented, (8) **Signature and credentials**: Examiner signs with name, credentials, date, time. Court admissibility depends on proper documentation; incomplete/speculative records may be excluded.

**Q8: Explain special considerations for examination of children suspected of sexual abuse.**
> Special considerations: (1) **Minimizing trauma**: Smaller speculum, minimal invasive procedures, support person present, play-based communication (age-appropriate), (2) **Assent and consent**: Child's assent important even if guardian consents; explain in child-friendly language, (3) **Hymenal interpretation different**: Tissues elastic, may not show changes despite penetration; scarring/clefts more significant, (4) **Anal findings more specific**: Anal fissures, scarring, laxity more suggestive of previous penetration than vaginal findings, (5) **STI testing baseline**: Same as adults (0, 6 weeks, 3 months), (6) **Behavioral observations**: Note affect, cooperation, age-appropriate vs. concerning knowledge, (7) **Psychological assessment**: Trauma response, regression, behavioral changes; referral to child psychology, (8) **POCSO mandatory reporting**: Regardless of hymenal/physical findings; suspicion sufficient.

**Q9: What is the difference between hymenal tears and hymenal scarring in child sexual abuse?**
> Hymenal tears (acute): Result from recent penetrative trauma; appear as acute laceration, bleeding, unhealed edges. Hymenal scarring (chronic): Result from previous penetration with healing; appears as permanent tissue loss (cleft), retracted edges, whitened/fibrotic appearance. Why scarring more specific: (1) Hymenal tears heal quickly (days to weeks); absence of tears doesn't mean no previous penetration, (2) Scarring permanent, indicates previous trauma significant enough to cause tissue loss, (3) Normal anatomic variations don't show scarring pattern, (4) Scarring in specific locations (posterior fourchette, lateral hymenal) highly suggestive of previous penetration. Clinical significance: Hymenal scarring is strong evidence of previous penetration. Absence of tears/scars does NOT exclude abuse (elastic tissues in children may heal without visible change).

**Q10: Discuss STI testing protocol and rationale for baseline plus repeat testing timeline.**
> STI testing protocol: Baseline testing at time of examination (within 72 hours) for gonorrhea (NAAT), chlamydia (NAAT), syphilis (RPR/VDRL), HIV (antibody + antigen), hepatitis B (HBsAg, anti-HBc, anti-HBs). Rationale for baseline: Documents victim's pre-assault STI status. Follow-up timeline: (1) **6 weeks**: Repeat gonorrhea, chlamydia (incubation 3-7 days), syphilis (may not be detectable immediately), (2) **3 months**: Repeat all (HIV antibody, incubation 2-8 weeks), (3) **6 months**: Final HIV testing (window period closure). Rationale: Organisms have incubation periods; testing too early may be negative despite exposure. Multiple tests account for window periods. Treatment decisions: If baseline positive, treat regardless (partner notification); if baseline negative, offer prophylactic antibiotics (ceftriaxone + doxycycline), then retest per timeline to confirm no new acquisition.

`,
        mnemonics: [
          {
            text: "MARK EXAMINER ROLE: Document (must), Judge credibility (cannot), Determine guilt (cannot)",
            explanation: "Clear boundaries of responsibility"
          },
          {
            text: "NO INJURY ≠ NO RAPE: 40-60% of cases have no genital injury - critical fact",
            explanation: "Important distinction for exam"
          },
          {
            text: "POCSO MANDATORY: Report (must), Overrides confidentiality (yes), Failure is crime (yes)",
            explanation: "Reporting requirements"
          },
          {
            text: "SPERMATOZOA RECOVERY: 72 hours optimal, Absence ≠ no assault, Condom/infertility explanations",
            explanation: "Evidence interpretation"
          }
        ],
        keyPoints: [
          "Absence of genital injury in 40-60% of rape cases",
          "Hymenal findings unreliable in children as sole basis for diagnosis",
          "POCSO mandatory reporting overrides confidentiality and family wishes",
          "Spermatozoa recovery optimal within 72 hours; absence doesn't exclude assault",
          "Medical examiner documents objectively; never judges credibility or guilt"
        ],
        textbookRefs: [
          { book: "Reddy's Essentials of Forensic Medicine & Toxicology", chapter: "Sexual Offences", edition: "34th" },
          { book: "Parikh's Textbook of Medical Jurisprudence", chapter: "Sexual Offences & POCSO", edition: "8th" }
        ]
      }
    ]
  }
];
