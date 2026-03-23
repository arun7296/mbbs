import type { TopicLessons } from "./content-loader";

export const communityMedicineLessonsPartXII: TopicLessons[] = [
  {
    topicCode: "CM-MOD-04-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "family-planning-layer-1-foundation",
        title: "Family Planning (contraceptives, national program) - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of family planning in India, contraceptive methods, national family planning program, demographic targets, and integration with reproductive health services.",
        contentMd: `# Family Planning - Foundation

## Family Planning in India

**Definition:** Planned parenthood through use of contraceptives and reproductive health services

**Objectives:**
- Improve maternal and child health
- Enable couples to space and plan pregnancies
- Reduce fertility rate
- Improve quality of life

**Current Status:**
- Total Fertility Rate (TFR) 2023: ~2.0 (target <2.0)
- Contraceptive Prevalence Rate (CPR) 2021: ~67% (target 75%)
- Unmet need: ~12% (couples wanting contraception but not using)

## Contraceptive Methods in India

**Temporary Methods (Spacing):**
1. **Hormonal Contraceptives:**
   - Combined oral contraceptive pills (COC)
   - Progestin-only pills (POP/mini-pill)
   - Injectable contraceptives (DMPA, NET-EN)
   - Implants (single-rod, 3-5 year duration)
   - Patch, vaginal ring
   - Intrauterine contraceptives (copper T, hormonal)

2. **Barrier Methods:**
   - Condoms (male, female)
   - Diaphragm, cervical cap
   - Spermicides

3. **Fertility Awareness:**
   - Calendar method (rhythm method)
   - Symptothermal method
   - Lactational amenorrhea method (LAM)

**Permanent Methods (Termination):**
- Male sterilization (NSV - No-Scalpel Vasectomy)
- Female sterilization (tubal ligation, mini-laparotomy)

## Contraceptive Choice & Effectiveness

**Failure Rates (% of women with unintended pregnancy per year of use):**
- Male condom: 18% (typical), 2% (perfect)
- COC: 9% (typical), 0.3% (perfect)
- Copper IUD: 0.8% (typical/perfect)
- Implant: 0.05% (very effective)
- Vasectomy: 0.1% (very effective)
- Tubal ligation: 0.5% (very effective)

**Most Popular Methods in India:**
- Tubal ligation: ~35% of contraceptive users
- IUD: ~12%
- Condoms: ~10%
- Oral contraceptives: ~10%

## National Family Planning Program

**Evolution:**
- 1952: Family Planning Program established
- 1977: Shift from targets to NTFP (target-free approach)
- 1994: Target-free policy formalized
- 2014: NHP target TFR <2.1 by 2030
- 2023: TFR ~2.0, CPR 67%, unmet need 12%

**Key Components:**
- Contraceptive counseling and provision
- Reproductive tract infection (RTI) management
- Infertility assessment and referral
- Breast health screening
- Cervical cancer screening
- Postpartum/post-abortion family planning

**Integration with Other Programs:**
- ANC (antenatal care): Counsel on postpartum contraception
- PNC (postnatal care): Postpartum family planning (within 48 hours)
- IMNCI: Child health and family planning coordination
- NHM: Strengthen service delivery

## Demographic Indicators

**Fertility Indicators:**
- **TFR:** Average number of children per woman (target <2.0)
- **CBR:** Crude Birth Rate (number of births per 1000 population)
- **CDR:** Crude Death Rate (deaths per 1000 population)
- **NRR:** Net Reproduction Rate (replacement level = 1.0)

**Current (2023):**
- TFR: 2.0 (below replacement in urban areas, 1.7)
- CBR: 17.7 per 1000
- CDR: 7.5 per 1000
- NRR: 0.95 (slight decline below replacement)

**Regional Variations:**
- South India: TFR <2.0 (Kerala 1.7, Tamil Nadu 1.6)
- North India: TFR 2.5-3.0 (UP, MP, Rajasthan >2.5)

## Family Planning Policy & Guidelines

**NFWP (National Family Welfare Program 2017):**
- Focus on quality of care
- Comprehensive reproductive health
- Integration of family planning with other health services
- Emphasis on choice and informed decision-making

**Focus Areas:**
- Spacing methods (interval between births)
- Terminal methods (permanent contraception)
- Men's involvement in family planning
- Adolescent sexual and reproductive health
- LGBTQ+ inclusive policies (emerging)`,
        mnemonics: [
          {
            text: "CONTRACEPTIVE EFFECTIVENESS",
            explanation: "Condom 18%, COC 9%, IUD 0.8%, Implant 0.05%, Sterilization <0.5%",
          },
          {
            text: "TEMPORARY METHODS",
            explanation: "Hormonal (pills, injections, implants, IUD), Barrier (condoms), Fertility awareness",
          },
          {
            text: "DEMOGRAPHIC INDICATORS",
            explanation: "TFR (children/woman), CBR (births/1000), CDR (deaths/1000), NRR (replacement)",
          },
        ],
        keyPoints: [
          "TFR India 2023: ~2.0 (target <2.0); CPR 67% (target 75%); unmet need 12%",
          "Most popular: Tubal ligation (35%), IUD (12%), condoms (10%), pills (10%)",
          "Temporary methods: Hormonal (COC, POP, injection, implant, IUD), barrier, fertility awareness",
          "Permanent methods: Male (NSV), female (tubal ligation); highly effective but irreversible",
          "Shift from targets (pre-1977) to target-free approach emphasizing quality and choice",
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Ch 7", edition: "26th" },
          { book: "NFWP Guidelines", chapter: "Family planning programs", edition: "2017" },
        ],
      },
      {
        layer: 2,
        slug: "family-planning-layer-2-mechanism",
        title: "Family Planning (contraceptives, national program) - Mechanism",
        estimatedMinutes: 30,
        summary: "Mechanisms of action of contraceptive methods, biological basis of effectiveness, how fertility is reduced, and population-level impacts of family planning.",
        contentMd: `# Family Planning - Mechanism

## Mechanisms of Contraceptive Action

**Combined Oral Contraceptive Pills (COCs):**
- **Hormones:** Estrogen (ethinyl estradiol) + progestin (levonorgestrel, norethisterone)
- **Primary mechanism:** Suppress ovulation
  - GnRH inhibition → ↓FSH/LH → no follicular development
  - No LH surge → no ovulation
- **Secondary mechanisms:**
  - Thickened cervical mucus → ↓ sperm penetration
  - Endometrial atrophy → reduced implantation
  - Altered tubal motility
- **Timing:** Must start day 1 of cycle for immediate protection
- **Efficacy:** ~91-99% with perfect use (typical use ~91%)

**Progestin-Only Pills (POP/Mini-pill):**
- **Mechanism:** Primarily cervical mucus thickening (ovulation sometimes occurs)
- **Advantage:** No estrogen side effects (safe in lactation, older women)
- **Efficacy:** Slightly less than COC (~90-98%)
- **Timing:** Must be taken at same time daily (narrow window)

**Intrauterine Contraceptives:**
1. **Copper IUD (Cu-T):**
   - **Mechanism:** Toxic to sperm and ovum
   - Copper ions released → spermicide effect
   - Foreign body reaction → inflammatory response
   - Impairs fertilization, implantation
   - **Duration:** 5-10 years (depends on type)
   - **Efficacy:** 99.2% (very effective)
   - **Non-hormonal:** Can use with any medical condition

2. **Hormonal IUD (LNG-IUS):**
   - **Mechanism:** Local progestin release
   - Cervical mucus thickening (primary)
   - Endometrial atrophy
   - Occasional ovulation suppression
   - **Duration:** 3-5 years
   - **Benefit:** ↓ Menstrual bleeding
   - **Efficacy:** 99.8%

**Barrier Methods (Condoms):**
- **Mechanism:** Physically prevents sperm from reaching ovum
- **Protection:** Also prevents STI transmission
- **Efficacy:** 82-98% (depends on consistent use)
- **Advantage:** No systemic effects, accessible, reversible
- **Disadvantage:** Requires motivation for every act

**Fertility Awareness Methods:**
- **Mechanisms:** Identifying fertile window and avoiding intercourse
- **Methods:**
  - Calendar/rhythm: Counting cycle days (days 8-19 fertile in 28-day cycle)
  - Symptothermal: Temperature rise (0.4-0.8°C after ovulation) + cervical mucus
  - Lactational amenorrhea: Breastfeeding delays ovulation (duration ~6 months)
- **Efficacy:** 76-99% (highly dependent on compliance)
- **Advantage:** No side effects, natural
- **Disadvantage:** Requires regular cycles, user motivation

**Sterilization - Permanent Methods:**
1. **Male Sterilization (Vasectomy/NSV):**
   - **Mechanism:** Surgical interruption of vas deferens
   - Prevents sperm transport (not production)
   - **Semen analysis post-op:** Azoospermia within 8-12 weeks
   - **Efficacy:** 99.85% (rare recanalization)
   - **Reversibility:** Difficult (low success with reversal)
   - **Safety:** Minimal complications, no hormonal effects

2. **Female Sterilization (Tubal Ligation):**
   - **Mechanism:** Surgical interruption of fallopian tubes
   - Blocks oocyte transport → prevents fertilization
   - **Methods:** Mini-laparotomy, laparoscopy, hysteroscopic sterilization
   - **Timing:** Can be done postpartum (within 48 hours) or interval
   - **Efficacy:** 99.5% (rare failure from recanalization/misplacement)
   - **Reversibility:** Difficult

**Injectable Contraceptives:**
- **DMPA (Depot Medroxyprogesterone Acetate):**
  - Ovulation suppression (primary)
  - Cervical mucus thickening
  - Endometrial atrophy
  - **Duration:** 3 months (IM injection)
  - **Efficacy:** 97-99%
- **NET-EN (Norethisterone Enantate):**
  - Similar to DMPA, shorter interval (2 months)

**Subdermal Implants:**
- **Mechanism:** Continuous progestin release
- **Effects:** Ovulation suppression, cervical mucus, endometrial changes
- **Duration:** 3-5 years (depending on type)
- **Efficacy:** 99.95% (highest of reversible methods)
- **Advantages:** No user action after insertion, highly effective, long-duration

## Population-Level Effects of Family Planning

**Demographic Transition Model:**
- **High fertility phase:** High mortality → high fertility (equilibrium)
- **Transition phase:** Mortality ↓ (medical advances) → fertility remains high → population explosion
- **Low fertility phase:** Both mortality and fertility ↓ → stable population

**India's Position:** Mostly in transition phase → emphasis on contraception to reduce fertility

**Impact Metrics:**
1. **Fertility Decline:** TFR reduction from 5.4 (1970) to 2.0 (2023)
   - From high fertility to near-replacement level
2. **Population Growth:** Annual growth rate reduced
3. **Demographic Dividend:** Growing working-age population (if utilized)
4. **Female Education & Empowerment:** Correlates with contraceptive use

**Pathways to Fertility Reduction:**
- **Education:** Especially female education (strongest predictor)
- **Contraceptive access:** Increases with program implementation
- **Economic development:** Reduces need for large families
- **Women's autonomy:** Greater decision-making power
- **Infant/child mortality reduction:** Reduces need for high fertility

## Unmet Need for Contraception

**Definition:** Women wanting to delay/space/stop childbearing but not using contraception

**Causes of Unmet Need:**
- Lack of knowledge about methods
- Side effect concerns
- Cost barriers
- Lack of access/availability
- Spousal disapproval
- Cultural/religious opposition
- Fear of medical complications

**Strategies to Address:**
- Improve counseling and education
- Expand method availability
- Reduce side effect burden
- Male involvement programs
- Community mobilization`,
        mnemonics: [
          {
            text: "COC MECHANISM",
            explanation: "GnRH ↓ → FSH/LH ↓ → no ovulation, + mucus thickening, + endometrial atrophy",
          },
          {
            text: "IUD COPPER",
            explanation: "Spermicide, Foreign body reaction, Impairs fertilization/implantation",
          },
          {
            text: "STERILIZATION EFFICACY",
            explanation: "Vasectomy 99.85%, Tubal ligation 99.5%",
          },
          {
            text: "IMPLANT BEST",
            explanation: "Subdermal implant: 99.95% efficacy (highest reversible method)",
          },
        ],
        keyPoints: [
          "COCs suppress GnRH/FSH/LH → no ovulation; also thicken mucus, atrophy endometrium",
          "Cu-IUD: Toxic to sperm/ovum, 99.2% effective, non-hormonal; Hormonal IUD 99.8%",
          "Fertility awareness: Identify fertile window (ovulation day ±5 days); symptothermal combines basal temp + mucus",
          "Sterilization: Vasectomy/tubal ligation >99% effective, permanent, minimal complications",
          "Implants: Highest reversible efficacy (99.95%), 3-5 year duration, no user action",
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Ch 7", edition: "26th" },
          { book: "Contraceptive Technology", chapter: "Methods of action", edition: "20th" },
        ],
      },
      {
        layer: 3,
        slug: "family-planning-layer-3-clinical",
        title: "Family Planning (contraceptives, national program) - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical counseling for family planning, contraceptive selection, screening and eligibility, management of adverse effects, and postpartum/post-abortion family planning.",
        contentMd: `# Family Planning - Clinical

## Pre-Contraception Counseling

**Key Counseling Points:**
- Method choice: Spacing vs terminal, reversibility, duration
- Effectiveness: Perfect vs typical use failure rates
- Side effects and benefits
- Protection against STIs (only condoms)
- Medical eligibility (contraindications)
- Return to fertility after discontinuation
- Regular monitoring needs

**Informed Decision-Making:**
- No coercion or targets (NFWP policy)
- Respect for individual choice
- Adequate time for questions
- Written information materials
- Opportunities to discuss with family/partner

## Contraceptive Method Selection

**Selection Criteria:**
1. **Medical eligibility (WHO MEC guidelines):**
   - Category 1: No restrictions
   - Category 2: Benefits generally outweigh risks
   - Category 3: Risks outweigh benefits (caution, case-by-case)
   - Category 4: Absolute contraindication

2. **User characteristics:**
   - Age
   - Parity
   - Frequency of intercourse
   - Desire for reversibility
   - Breastfeeding status
   - Chronic conditions

3. **Method characteristics:**
   - Effectiveness
   - Duration
   - Ease of use
   - Reversibility
   - Cost
   - Availability

## Contraindications to Common Methods

**Combined Oral Contraceptives (COC) - WHO Category 3-4:**
- Category 4 (absolute): Age >35 + smoking, migraine with aura, uncontrolled hypertension, history of VTE/stroke, major surgery with immobilization, estrogen-dependent cancers
- Category 3: Age 35-39 + smoking, controlled hypertension, minor migraine without aura

**Cu-IUD - WHO Category 3-4:**
- Category 4: Pregnancy, current PID, post-septum abortion PID, severe TTI/gonorrhea, immunosuppression (HIV CD4 <200), anatomical distortion
- Category 3: History of PID (single episode), multiple partners of partner, undiagnosed vaginal bleeding, Wilson's disease (copper IUD)

**Progestin-Only Methods:**
- Generally safe in lactation, postpartum, >35 years, smokers
- Few Category 3-4 contraindications

**Sterilization:**
- Category 1 for most (but informed consent, counseling critical)
- Category 4: No absolute contraindications if surgery safe

## Postpartum Family Planning (PPFP)

**Window of Opportunity:** 48 hours to 1 year postpartum

**Advantages (if started early):**
- Prevents rapid successive pregnancies (spacing)
- Improves maternal/child health outcomes
- Reduces maternal mortality
- Allows time to recover from pregnancy

**Methods by Timing:**
1. **Immediate Postpartum (within 10 minutes-48 hours):**
   - IUD insertion (Cu-T): Safe, effective, highly accepted
   - Sterilization: Tubal ligation during cesarean or mini-laparotomy
   - Implants: Can be inserted

2. **Early Postpartum (1-7 days):**
   - IUD, sterilization, implants
   - Oral contraceptives: Can start (no interference with lactation - POP preferred)

3. **Later Postpartum (>7 days):**
   - All methods safe
   - Standard eligibility criteria apply

**Lactational Amenorrhea Method (LAM):**
- 98-99% effective first 6 months if:
  - Exclusive/predominant breastfeeding
  - Amenorrhea present
  - <6 months postpartum
- After 6 months or return of menses, require backup method

## Post-Abortion Family Planning (PAFP)

**Window:** Immediately after abortion (medical or surgical)

**Rationale:**
- Prevent unintended pregnancy
- Allow spacing after pregnancy loss
- Psychological support

**Methods by Abortion Type:**
1. **First Trimester Abortion (Medical/Surgical):**
   - All methods safe and appropriate
   - IUD insertion: Immediately after aspiration (safe, not ↑ complications)
   - Sterilization: If desired
   - Hormonal methods: Immediately (no increased risk)

2. **Second Trimester Abortion:**
   - Similar to first trimester
   - IUD insertion may vary by provider comfort

**Contraceptive Counseling:**
- Prevent repeat abortion
- Allow recovery time
- Choice between spacing and terminal methods

## Monitoring and Follow-Up

**COC Users:**
- First pill: Day 1 of cycle (immediate protection)
- Follow-up: 3 months, then annually
- BP check annually
- Side effects: Nausea (take with food, often resolves in 2-3 months), breakthrough bleeding, decreased libido

**IUD Users:**
- Insertion: During menstruation or within 12 days of onset
- First follow-up: 6 weeks (check for displacement, expulsion)
- Annual check: Palpate string, clinical assessment
- Remove if: Expulsion, infection (PID), perforation, request for pregnancy
- Complications: Cramping, increased bleeding, rarely: perforation (0.1%), PID (rare)

**Sterilization Follow-Up:**
- Post-operative: 24 hours, 1 week, 3 months (assess wound healing, complications)
- Vasectomy: Semen analysis at 8-12 weeks (confirm azoospermia)
- Tubal ligation: Ensure closure of abdomen, rule out bowel/bladder injury

**Side Effect Management:**
- Hormonal: Nausea, breast tenderness, headaches (reassure, consider changing dose/type)
- IUD: Cramping (NSAIDs), increased bleeding (tranexamic acid)
- Barrier: Allergies (latex-free options), reduced sensation (partner adjustment)

## Integration with Other Reproductive Health Services

**Antenatal Care + FP:**
- Counsel on postpartum contraception
- Identify preferred method
- Prepare for immediate postpartum insertion (if IUD/sterilization)

**Postnatal Care + FP:**
- Provide PPFP within 48 hours
- Support lactation while discussing contraception
- Postpartum depression screening + FP counseling

**STI Management + FP:**
- Screen before IUD insertion
- Counsel on STI prevention (only condoms effective)
- Dual method approach if high risk`,
        mnemonics: [
          {
            text: "COC CONTRAINDICATIONS",
            explanation: "Age >35 + smoking, Migraine with aura, VTE/stroke history, Major surgery immobilization, Estrogen-dependent cancers",
          },
          {
            text: "POSTPARTUM FP TIMING",
            explanation: "Immediate (IUD/sterilization <48h), Early (1-7d), Later (>7d, all methods)",
          },
          {
            text: "LAM CRITERIA",
            explanation: "Exclusive breastfeeding, Amenorrhea, <6 months postpartum",
          },
        ],
        keyPoints: [
          "Informed consent critical; no coercion or targets per NFWP policy",
          "WHO MEC categories guide eligibility: 1 (unrestricted), 2 (benefits outweigh), 3 (caution), 4 (absolute CI)",
          "Postpartum: IUD within 48 hours most effective, sterilization during cesarean, LAM until 6 months/menses return",
          "Post-abortion: All methods safe immediately; IUD safe without ↑ complications",
          "Monitoring: COC annually + BP, IUD check at 6 weeks then annually, sterilization post-op visits + semen analysis",
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Ch 7", edition: "26th" },
          { book: "WHO MEC Guidelines", chapter: "Contraceptive eligibility", edition: "2023" },
        ],
      },
      {
        layer: 4,
        slug: "family-planning-layer-4-exam",
        title: "Family Planning (contraceptives, national program) - Exam Prep",
        estimatedMinutes: 15,
        summary: "NEXT-pattern MCQ preparation on contraceptive methods, effectiveness, mechanisms, eligibility criteria, and family planning program implementation.",
        contentMd: `# Family Planning - Exam Preparation

## High-Yield Facts

**Key Statistics:**
- TFR India 2023: 2.0 (target <2.0)
- CPR: 67% (target 75%)
- Unmet need: 12%
- Most common methods: Tubal ligation (35%), IUD (12%), condoms (10%), pills (10%)

**Contraceptive Efficacy (typical use):**
- Condom: 82-98%
- COC: 91-99%
- POP: 90-98%
- Cu-IUD: 99.2%
- Implants: 99.95%
- Vasectomy: 99.85%
- Tubal ligation: 99.5%

**Mechanisms:**
- COC: GnRH ↓ → ovulation suppression + mucus thickening
- Cu-IUD: Spermicide + foreign body reaction
- Sterilization: Mechanical interruption (irreversible)
- Fertility awareness: Avoid fertile window

**PPFP Methods:**
- Immediate (<48h): IUD, sterilization, implants
- Early (1-7d): All methods
- LAM: <6 months, exclusive breastfeeding, amenorrhea

**Contraindications (WHO Category 4):**
- COC: Age >35 + smoking, VTE/stroke, migraine with aura
- Cu-IUD: Pregnancy, current PID, immunosuppression (CD4 <200)

## Problem-Solving Cases

**Case 1: Spacing Method for Lactating Mother**
- Exclusively breastfeeding, 2 months postpartum
- Options: LAM (counseling), POP (safe in lactation), Cu-IUD
- Preference if no lactation: COC (estrogen-free if concerned)

**Case 2: Terminal Method - Counseling**
- 35-year-old, 3 children, wants no more
- High acceptance, highly effective
- Tubal ligation or vasectomy (partner preference)

**Case 3: IUD Complications**
- Severe cramping with Cu-IUD
- Management: NSAIDs, consider removal if intolerable

## Analysis Topics

- Why is fertility reduction critical for India's development?
- Mechanisms of contraceptive action and why multiple mechanisms enhance efficacy
- Benefits of postpartum family planning on maternal/child health
- Cultural barriers to family planning and strategies to address`,
        mnemonics: [
          {
            text: "METHOD EFFICACY",
            explanation: "Implant 99.95%, Sterilization >99.5%, IUD 99.2%, COC 91-99%, Condom 82-98%",
          },
          {
            text: "COC MECHANISM",
            explanation: "GnRH ↓ → FSH/LH ↓ → ovulation suppression + mucus + endometrial",
          },
          {
            text: "PPFP TIMING",
            explanation: "Immediate <48h (IUD/ster), Early 1-7d (all), Later >7d (all)",
          },
        ],
        keyPoints: [
          "TFR 2.0, CPR 67%, unmet need 12%; tubal ligation most common method (35%)",
          "Contraceptive efficacy: Implants highest (99.95%), sterilization >99%, IUD 99.2%, pills ~91-99%",
          "COCs suppress ovulation via GnRH reduction and ↓FSH/LH; also thicken mucus",
          "Postpartum: IUD within 48h most effective; LAM if exclusive breastfeeding, amenorrhea, <6mo",
          "COC contraindications: Age >35+smoking, VTE/stroke, migraine with aura; Cu-IUD CI: PID, CD4 <200",
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Ch 7", edition: "26th" },
          { book: "NFWP Guidelines", chapter: "Contraceptive methods, family planning", edition: "2017" },
        ],
      },
      {
        layer: 5,
        slug: "family-planning-layer-5-active-recall",
        title: "Family Planning (contraceptives, national program) - Active Recall",
        estimatedMinutes: 10,
        summary: "Quick recall of contraceptive methods, effectiveness, mechanisms, contraindications, and postpartum/post-abortion family planning strategies.",
        contentMd: `# Active Recall - Family Planning

**Q1:** What is the current TFR, CPR, and unmet need for contraception in India, and what are the targets?
> TFR 2.0 (target <2.0); CPR 67% (target 75%); unmet need 12% (to be reduced). CPR definition: % of married women using any contraceptive method.

**Q2:** List the most commonly used contraceptive methods in India with their approximate prevalence.
> Tubal ligation (35%), IUD (12%), Condoms (10%), Oral contraceptive pills (10%), Vasectomy (5%), Injections/implants/traditional methods make up remainder.

**Q3:** Compare the efficacy of different contraceptive methods and explain typical vs perfect use failure rates.
> Implants 99.95%, Vasectomy 99.85%, Tubal ligation 99.5%, Cu-IUD 99.2%, COC 91% (typical) to 99% (perfect), Condom 82% (typical) to 98% (perfect). Typical use = inconsistent/incorrect use; Perfect = consistent/correct use.

**Q4:** Describe the mechanism of action of combined oral contraceptive pills (COCs).
> Primary: GnRH inhibition → ↓FSH/LH → suppression of ovulation (no follicular development, no LH surge). Secondary: Thickened cervical mucus (↓ sperm penetration), endometrial atrophy (↓ implantation), altered tubal motility.

**Q5:** What are the advantages and disadvantages of copper IUDs (Cu-T) compared to hormonal IUDs?
> Advantages: Non-hormonal (no systemic effects), highly effective (99.2%), longer duration (5-10y), can use in any reproductive state. Disadvantages: May increase menstrual bleeding/cramping. Hormonal IUD: May reduce bleeding, 3-5y duration, progestin-related side effects possible.

**Q6:** What are WHO Category 3 and 4 contraindications for combined oral contraceptive pills?
> Category 3 (benefits outweigh risks, use with caution): Age 35-39 + smoking, controlled hypertension, migraine without aura. Category 4 (absolute contraindication): Age >35 + smoking, uncontrolled hypertension, migraine with aura, history of VTE/PE/stroke, active cancer, estrogen-dependent cancer.

**Q7:** Explain postpartum family planning (PPFP) timing and methods for a woman who delivered vaginally.
> Immediate (<48h): IUD insertion (Cu-T), implants safe. Early (1-7d): All methods. Later (>7d): All standard methods. LAM: If exclusively breastfeeding, amenorrhea, <6 months (98-99% efficacy). After 6 months or menses return, switch method.

**Q8:** What are the key conditions for lactational amenorrhea method (LAM) to be effective?
> Exclusive/predominant breastfeeding, continued amenorrhea, AND within 6 months postpartum. If any condition lost (menses return, partial breastfeeding, >6 months), efficacy drops to ~90%; backup method advised. Efficacy 98-99% if all conditions met.

**Q9:** Describe post-abortion family planning (PAFP) approach including timing and safety of IUD insertion.
> Provided immediately after abortion (medical or surgical). IUD insertion is safe immediately after aspiration (does NOT increase complication risk). All methods effective and appropriate. Dual approach recommended if high STI risk (IUD + condoms).

**Q10:** What is the target-free approach in NFWP and why is informed decision-making critical in family planning?
> NFWP (2017) shifted from fertility targets to emphasis on quality of care and choice. Informed decision-making: No coercion, adequate counseling, written materials, respect for autonomy. Prevents abuse (previous periods had sterilization targets and abuses). Ensures sustainable, ethical program.`,
        mnemonics: [
          {
            text: "CONTRACEPTIVE EFFICACY",
            explanation: "Implant 99.95%, Vasectomy 99.85%, Tubal 99.5%, IUD 99.2%, Pills ~91%",
          },
          {
            text: "COC MECHANISM",
            explanation: "GnRH ↓, FSH/LH ↓, Ovulation suppressed, Mucus thickened, Endometrium atrophied",
          },
          {
            text: "PPFP METHODS",
            explanation: "Immediate <48h: IUD/implant/ster, Early 1-7d: All, Later >7d: All",
          },
          {
            text: "LAM CRITERIA",
            explanation: "Exclusive breastfeeding, Amenorrhea, <6 months postpartum (all 3 required)",
          },
        ],
        keyPoints: [
          "TFR 2.0, CPR 67%, unmet need 12%; tubal ligation (35%) and IUD (12%) most common",
          "Implants highest efficacy (99.95%); sterilization >99%; COC ~91-99%; condom ~82-98%",
          "COC: Suppresses ovulation via GnRH ↓; Cu-IUD toxic to sperm/ovum; sterilization irreversible",
          "Postpartum: IUD <48h safe; LAM requires exclusive breastfeeding + amenorrhea + <6mo",
          "NFWP target-free approach emphasizes informed consent and quality over quotas",
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Ch 7", edition: "26th" },
          { book: "WHO MEC & NFWP Guidelines", chapter: "Family planning, contraception, PPFP, PAFP", edition: "2023" },
        ],
      },
    ],
  },
];
