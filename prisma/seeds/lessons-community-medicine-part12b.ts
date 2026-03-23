import type { TopicLessons } from "./content-loader";

export const communityMedicineLessonsPartXIIB: TopicLessons[] = [
  {
    topicCode: "CM-MOD-04-TOP-05",
    layers: [
      {
        layer: 1,
        slug: "demography-population-layer-1-foundation",
        title: "Demography & Population - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of demography, key population indicators, India's demographic profile, census data, age structure, and demographic transition model.",
        contentMd: `# Demography & Population - Foundation

## Demography Definition & Scope

**Definition:** Study of population characteristics, vital events, and changes over time

**Key Aspects:**
- Population size and growth
- Age and sex structure
- Fertility, mortality, migration
- Health status indicators
- Socioeconomic characteristics

## Key Demographic Indicators

**Fertility Indicators:**
- **Total Fertility Rate (TFR):** Average number of children per woman (lifetime)
- **Crude Birth Rate (CBR):** Births per 1000 population per year
- **Age-Specific Fertility Rate (ASFR):** Births per 1000 women of specific age
- **General Fertility Rate (GFR):** Births per 1000 women aged 15-49 years

**Mortality Indicators:**
- **Crude Death Rate (CDR):** Deaths per 1000 population per year
- **Infant Mortality Rate (IMR):** Infant deaths per 1000 live births
- **Under-5 Mortality Rate (U5MR):** Deaths <5 years per 1000 live births
- **Maternal Mortality Ratio (MMR):** Maternal deaths per 100,000 live births
- **Life Expectancy at Birth (LE):** Average years expected to live

**Growth & Migration:**
- **Natural Increase Rate:** CBR - CDR
- **Net Migration Rate:** In-migration - out-migration per 1000 population
- **Population Growth Rate:** (Natural increase + net migration) / total population

**Other Indicators:**
- **Net Reproduction Rate (NRR):** Net daughters per woman (accounts for mortality)
- **Replacement Level:** NRR = 1.0 (2 children per woman in low-mortality populations)
- **Dependency Ratio:** (Young <15 + Elderly ≥65) / Working-age (15-64)
- **Sex Ratio:** Females per 1000 males

## India's Demographic Profile (2023)

**Population:**
- Total: ~1.43 billion (world's most populous country)
- Growth rate: 0.81% annually

**Fertility:**
- **TFR:** 2.0 (below replacement in urban areas, ~1.7; above in rural, ~2.3)
- **CBR:** 17.7 per 1000
- **Regional variation:** South India <2.0 (Kerala 1.7, TN 1.6); North >2.5

**Mortality:**
- **CDR:** 7.5 per 1000
- **IMR:** 28 per 1000 live births (rural 35, urban 20)
- **U5MR:** 34 per 1000
- **MMR:** ~103 per 100,000 (target 2030: <70)
- **Life expectancy:** 71.5 years

**Sex Ratio:**
- National: 943 females per 1000 males (concern: female deficit)
- Urban areas better than rural
- Female infanticide, sex-selective abortion cause deficit

**Age Structure:**
- Young population (34% <15 years)
- Working-age majority (60% aged 15-64)
- Elderly (6% >65 years)
- Median age: ~27 years

## Census Data Collection

**Indian Census:**
- Conducted every 10 years
- Last: 2021 Census
- Provides population data by states, districts
- Age, sex, occupation, education, religion data

**Vital Statistics:**
- Birth registration: Compulsory under Registration of Births and Deaths Act 1969
- Death registration: Similarly compulsory
- Coverage: ~85-90% (though improving)

## Demographic Transition Model

**Stage 1 (Pre-Transition):** High fertility, high mortality
- No population growth (equilibrium)

**Stage 2 (Transition):** Mortality ↓ (medical advances), fertility remains high
- Rapid population growth (India's position)
- "Population explosion" period
- Emphasis on fertility reduction through family planning

**Stage 3 (Late Transition):** Both mortality and fertility declining
- Growth rate slowing
- Fertility approaching replacement

**Stage 4 (Post-Transition):** Low fertility, low mortality
- Stable/declining population
- Aging population
- Japan, most European countries at this stage

**Stage 5 (Emerging):** Below-replacement fertility, low mortality
- Declining population
- Highly aged populations
- Some developed countries experiencing

## Population Pyramids & Age Structure

**Types:**
- **Expanding (Triangular):** Young population, high fertility, rapid growth
  - Typical of developing countries
  - India pre-2000s

- **Stationary (Rectangular):** Stable age structure, low fertility
  - Developed countries, Sri Lanka, China

- **Contracting (Inverted):** Declining population, very low fertility
  - Japan, Germany, Southern Europe

**Implications:**
- Expanding: Need for schools, jobs, healthcare for youth
- Stationary: Balance across age groups
- Contracting: Aging population → healthcare for elderly, pension burden

## National Family Welfare Program Targets

**2030 Targets (National Health Policy 2017):**
- TFR: <2.1 (achievement level, not elimination targets)
- IMR: <30 per 1000 (ongoing)
- MMR: <70 per 100,000
- Life expectancy: >75 years
- Improved access to reproductive health services`,
        mnemonics: [
          {
            text: "FERTILITY INDICATORS",
            explanation: "TFR (children/woman), CBR (births/1000), ASFR (age-specific), GFR (women 15-49)",
          },
          {
            text: "MORTALITY INDICATORS",
            explanation: "CDR (deaths/1000), IMR (infant/1000), U5MR (under-5/1000), MMR (maternal/100K)",
          },
          {
            text: "DEMOGRAPHIC TRANSITION STAGES",
            explanation: "1: High both, 2: Mortality ↓ fertility high (growth), 3: Both ↓, 4: Low both, 5: Below replacement",
          },
        ],
        keyPoints: [
          "TFR 2.0 India (replacement level); regional variation: South <2.0, North >2.5",
          "IMR 28 (rural 35, urban 20); MMR ~103 (target 2030: <70)",
          "Sex ratio 943/1000 (female deficit from infanticide, sex-selective abortion)",
          "Age structure: 34% youth <15y, 60% working-age, 6% elderly; median age 27y",
          "India in Stage 2 (transition): Mortality ↓ but fertility still elevated → rapid growth",
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Ch 4", edition: "26th" },
          { book: "Census of India 2021", chapter: "Demographic profile", edition: "2021" },
        ],
      },
      {
        layer: 2,
        slug: "demography-population-layer-2-mechanism",
        title: "Demography & Population - Mechanism",
        estimatedMinutes: 30,
        summary: "Mechanisms of demographic change, factors influencing fertility and mortality, population pyramids interpretation, and relationship between development and demographics.",
        contentMd: `# Demography & Population - Mechanism

## Fertility Determinants

**Proximate Determinants (Bongaarts Model):**
1. **Proportion married:** Marriage → increase fertility
   - Child marriage ↑ fertility
   - Age at marriage: Earlier marriage → longer reproductive span

2. **Contraceptive use:** ↑ Contraception → ↓ Fertility
   - CPR directly reduces unwanted pregnancies
   - Method effectiveness critical

3. **Duration of breastfeeding:** Lactational amenorrhea
   - Longer breastfeeding → longer spacing
   - Traditional 2-3 year spacing now reduced to 6-12 months

4. **Abortion incidence:** Abortion → reduced births
   - Safe vs unsafe abortion impacts
   - Access to reproductive services

5. **Frequency of intercourse:** ↑ Frequency → ↑ Fertility
   - Affected by marriage patterns, separation

**Ultimate Determinants (Socioeconomic):**
1. **Female education:**
   - Strongest predictor of fertility
   - Each year of education → ~0.5 reduction in TFR
   - Mechanism: Delayed marriage, contraceptive knowledge, autonomy
   - Education + employment → career focus

2. **Economic development:**
   - ↑ Income → ↓ Fertility (not linear, but general trend)
   - Better healthcare access → lower need for high fertility
   - Urban areas typically lower than rural

3. **Female employment:**
   - ↑ Women working → ↓ Fertility
   - Opportunity cost of childbearing
   - Income provides autonomy

4. **Infant/child mortality:**
   - ↓ Child mortality → ↓ Fertility
   - Lower need for "replacement" births
   - Universal health coverage reduces fertility

5. **Gender equality & women's autonomy:**
   - Women's decision-making power ↑ → ↓ Fertility
   - Education, employment, legal rights
   - Reduces domestic violence, forced pregnancies

6. **Cultural/religious beliefs:**
   - Desired family size norms
   - Status of women in society
   - Variation across religions, regions

## Mortality Determinants

**Exogenous Mortality (Non-preventable):**
- Accidents, genetic disorders, very advanced age
- Limited impact on overall mortality

**Endogenous Mortality (Preventable):**
- Infectious diseases (malaria, TB, diarrhea, pneumonia)
- Nutritional deficiencies (anemia, vitamin A)
- Maternal/neonatal causes
- Chronic diseases (CVD, diabetes, cancers)

**Factors Reducing Mortality:**
1. **Healthcare access & quality:**
   - Vaccination programs → ↓ Childhood mortality
   - Antibiotics for infections
   - Emergency care for complications

2. **Nutrition & food security:**
   - ↓ Malnutrition → ↓ Infection, improved development
   - Adequate micronutrients (iron, vitamin A, iodine)

3. **Sanitation & water:**
   - Clean water → ↓ Diarrheal diseases
   - Toilet access → ↓ Fecal-oral transmission
   - Hand hygiene → ↓ Infections

4. **Education (health literacy):**
   - Awareness of prevention
   - Early care-seeking
   - Vaccination acceptance

5. **Economic development:**
   - Poverty → higher mortality
   - Employment → healthcare access
   - Housing quality → health

6. **Female education (maternal):**
   - ↓ Infant mortality (known best care practices)
   - ↓ Maternal mortality (ANC uptake)
   - ↑ Child nutrition

## Population Projection & Growth

**Population Growth Equation:**
P(t) = P₀ × e^(rt)
- P(t) = Population at time t
- P₀ = Initial population
- r = Growth rate
- t = Time in years

**India's Growth:**
- 1970: ~550 million
- 2000: ~1.0 billion
- 2023: ~1.43 billion
- Doubling time at current rate: ~85-90 years (slowing)

**Demographic Momentum:**
- Even if TFR drops to replacement (2.1), population will continue growing for 50+ years
- Reason: Large proportion of reproductive-age population
- Result: India's population will likely peak ~2050-2060 at ~1.6-1.7 billion

## Age Structure & Dependency Burden

**Dependency Ratio Components:**
- **Youth Dependency:** Children <15 / Working-age 15-64
  - India: ~57 (relatively high)
  - Need for education, healthcare, nutrition

- **Elderly Dependency:** Elderly ≥65 / Working-age 15-64
  - India: ~10 (currently low, but rising)
  - Future burden: Healthcare, pensions, social support

- **Total Dependency:** (Youth + Elderly) / Working-age
  - India: ~67 (moderate)

**Demographic Dividend Opportunity:**
- Window when working-age population is largest
- Potential for economic growth if jobs created
- Risk: If jobs not created, unemployment increases

## Sex Ratio Dynamics

**India's Sex Ratio: 943 females per 1000 males**
- Causes of female deficit:
  - Female infanticide (historical)
  - Sex-selective abortion (ultrasound technology)
  - Maternal mortality
  - Differential care/nutrition in childhood
  - Women marrying into other states (inter-state migration)

**Consequences:**
- Reduced marriage prospects for males
- Potential for violence, trafficking
- Loss of female human capital
- Skewed family structures

**Regional Variation:**
- South better (Andhra Pradesh 993, Karnataka 973)
- North worse (Haryana 877, Punjab 895)
- Punjab worst due to sex-selective abortion

**Interventions:**
- Female education empowerment
- Economic independence
- Legal prosecution of sex-selective abortion
- Social campaigns (e.g., "Beti Bachao, Beti Padhao")
- Conditional cash transfers for girls

## Urbanization & Demographic Change

**Urbanization Trends:**
- 1970: 20% urban India
- 2023: ~35% urban
- Growth rate: Rural ~0.5%, Urban ~2.3%

**Urban-Rural Differences:**
- **Fertility:** Urban TFR 1.8, Rural 2.3
- **Mortality:** Urban lower (better healthcare access, infrastructure)
- **Literacy:** Urban higher (education access)
- **Family planning:** Urban higher adoption

**Challenges:**
- Urban slums → overcrowding, poor sanitation
- Migration → breakdown of family support
- Healthcare disparities despite urban setting`,
        mnemonics: [
          {
            text: "FERTILITY DETERMINANTS ULTIMATE",
            explanation: "Female Education (strongest), Economic development, Female employment, Infant mortality ↓, Gender equality, Cultural beliefs",
          },
          {
            text: "MORTALITY PREVENTABLE",
            explanation: "Infections, Nutrition, Sanitation/water, Education, Economic, Maternal care",
          },
          {
            text: "DEMOGRAPHIC DIVIDEND WINDOW",
            explanation: "Large working-age population opportunity for economic growth if jobs created",
          },
        ],
        keyPoints: [
          "Female education strongest predictor of ↓fertility (each year → ~0.5 TFR reduction)",
          "Economic development, female employment, child mortality reduction all → ↓fertility",
          "Mortality primarily preventable (infections, nutrition, sanitation); healthcare access critical",
          "Demographic momentum ensures India's population growth continues 50+ years despite replacement TFR",
          "Sex ratio deficit (943/1000) from infanticide, sex-selective abortion; North worse than South",
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Ch 4", edition: "26th" },
          { book: "Demographic Transitions & Population Dynamics", chapter: "Fertility/mortality determinants", edition: "2023" },
        ],
      },
      {
        layer: 3,
        slug: "demography-population-layer-3-clinical",
        title: "Demography & Population - Clinical",
        estimatedMinutes: 20,
        summary: "Application of demographic data in health planning, program monitoring, population health interventions, and relationship between demographics and health policy.",
        contentMd: `# Demography & Population - Clinical

## Using Demographics in Health Planning

**Needs Assessment:**
1. **Population size & growth:**
   - Baseline population
   - Projected growth
   - Calculate healthcare infrastructure needed (beds, clinics, staff)

2. **Age structure analysis:**
   - Pediatric services: High if young population (India ~34% <15y)
   - Geriatric services: Growing need as population ages
   - Reproductive-age women: For maternal/child health services

3. **Fertility & mortality profiles:**
   - High fertility, high mortality → emphasis on MCH, infectious disease control
   - Low fertility, chronic disease predominance → shift to NCD management

**Example Calculation:**
- District population: 1 million
- Expected growth: 2% per year
- Projected population (5 years): 1.1 million
- Estimate pediatric (0-14y): 34% = 374,000 children
- Estimate maternal-age (15-49y): 25% = 250,000 women
- Staffing needs, facility capacity based on these numbers

## Monitoring & Evaluation Using Demographics

**Key Performance Indicators (KPIs):**
- IMR reduction year-over-year
- MMR trends (track toward target <70 by 2030)
- TFR tracking (progress toward <2.1)
- Immunization coverage (% of age group)
- ANC coverage (% of pregnant women)
- Institutional delivery rate (% of births)

**Data Sources:**
- Census (decennial, detailed)
- Sample Registration System (SRS): Annual mortality estimates
- National Family Health Survey (NFHS): 5-yearly fertility, health indicators
- District Level Household Survey (DLHS): Reproductive health indicators
- Vital Statistics reports

**Interpretation:**
- Compare within-state regions
- Rural-urban comparisons
- Trend analysis (improving vs deteriorating)
- Identify outlier districts → targeted intervention

## Population Health Interventions Based on Demographics

**High Fertility Regions (North India, TFR >2.5):**
- Emphasis on: Family planning access, female education, contraceptive availability
- Services: Spacing methods widely available, sterilization camps
- Monitoring: CPR increase, spacing adoption

**High Mortality Regions (IMR >40, U5MR >50):**
- Focus on: Immunization coverage, IMNCI, nutrition programs, ANC/PNC
- Services: Health camps, community health worker training
- Targets: Reduce IMR through vaccination, skilled birth attendance, neonatal care

**High MMR Areas (>150 per 100,000):**
- Interventions: Institutional delivery access, skilled birth attendance, referral networks
- Services: Safe abortion services, emergency obstetric care (EmOC)
- Monitoring: ANC coverage, delivery outcome tracking

**Demographic Dividend States (large working-age %):**
- Opportunity: Invest in education, vocational training, job creation
- Health focus: NCD prevention, occupational health
- Economic growth potential if utilized well

## Demographic Transition Stage-Specific Strategies

**Stage 2 (Transition - India's current):**
- High growth, declining mortality, still-elevated fertility
- Strategies:
  1. Family planning emphasis (CPR increase)
  2. Disease surveillance (infectious disease control)
  3. Infrastructure expansion (schools, healthcare facilities)
  4. Female education promotion
  5. Employment generation

**Stage 3 (Late Transition - Southern India trajectory):**
- Both declining, slowing growth
- Strategies:
  1. Consolidate gains (maintain vaccination coverage, safe delivery)
  2. NCD prevention (awareness, screening)
  3. Healthcare quality improvement
  4. Social security expansion (for aging)

**Stage 4 (Post-Transition - Future India):**
- Low fertility/mortality, stable/declining population
- Strategies:
  1. Aging population care (geriatric services)
  2. Chronic disease management
  3. Healthcare for elderly (arthritis, diabetes, hypertension)
  4. Pension systems, social safety nets

## Demographic Data in Policy Making

**Evidence-Based Policy:**
- Census data → Resource allocation (higher IMR districts get more funds)
- Fertility trends → Contraceptive choice in guidelines
- Mortality patterns → Disease surveillance priorities

**Examples:**
1. **Janani Suraksha Yojana (JSY):** Response to high MMR, high home delivery rate
   - Incentivize institutional delivery
   - Monitored by delivery outcomes

2. **Mission Indradhanush:** Response to low immunization coverage in pockets
   - Mobile teams to low-coverage areas
   - Tracked by district vaccination rates

3. **ICDS (Integrated Child Development Services):** Response to malnutrition
   - Target children <6 years, pregnant women
   - Nutritional supplementation based on prevalence data

## Calculating & Interpreting Rates

**IMR Example:**
- Deaths <1 year in a district: 1,200
- Live births in same district: 43,000
- IMR = (1,200 / 43,000) × 1000 = 27.9 per 1000 LB
- Interpretation: For every 1000 babies born, ~28 die before age 1

**MMR Example:**
- Maternal deaths in state: 800
- Live births in state: 800,000
- MMR = (800 / 800,000) × 100,000 = 100 per 100,000 LB

**TFR Calculation:**
- Sum of age-specific fertility rates (15-19, 20-24, ... 45-49) × 5-year interval width
- TFR ~2.0 means average woman has 2 children in lifetime

## Demographic Data Limitations

**Registration Undercount:**
- Birth/death registration incomplete (~10-15% undercount)
- Affects accuracy of vital statistics
- Improvement programs ongoing

**Census Limitations:**
- Decennial gaps (changes between censuses missed)
- Migration underestimation (temporary migration not captured)
- Self-reported data (education, occupation may be inaccurate)

**Survey Limitations (SRS, NFHS):**
- Sample-based → confidence intervals
- Recall bias (deaths in past year vs past few months)
- Non-response bias`,
        mnemonics: [
          {
            text: "DEMOGRAPHIC KPIs",
            explanation: "IMR (infant mortality), MMR (maternal), TFR (total fertility), CPR (contraceptive prevalence), ANC, Institutional delivery",
          },
          {
            text: "STAGE 2 PRIORITIES (India)",
            explanation: "Family planning, Disease surveillance, Infrastructure, Female education, Employment",
          },
          {
            text: "DATA SOURCES",
            explanation: "Census (10y), SRS (annual mortality), NFHS (5y fertility), DLHS (reproductive health)",
          },
        ],
        keyPoints: [
          "Demographics guide health planning: Age structure determines pediatric/geriatric needs",
          "IMR, MMR, TFR, CPR track as KPIs; compare rural-urban and within-state regions",
          "High fertility regions: Family planning emphasis; high mortality: IMNCI, immunization focus",
          "Demographic dividend opportunity (large working-age population) if jobs created",
          "Census, SRS, NFHS provide data; decennial gaps and registration undercount are limitations",
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Ch 4", edition: "26th" },
          { book: "NHP 2017", chapter: "Demographic targets, health planning", edition: "2017" },
        ],
      },
      {
        layer: 4,
        slug: "demography-population-layer-4-exam",
        title: "Demography & Population - Exam Prep",
        estimatedMinutes: 15,
        summary: "NEXT-pattern MCQ preparation on demographic indicators, India's demographic profile, determinants of fertility/mortality, and policy implications.",
        contentMd: `# Demography & Population - Exam Preparation

## High-Yield Facts

**India's Demographics (2023):**
- Population: 1.43 billion
- TFR: 2.0 (target <2.1)
- IMR: 28 per 1000 LB
- MMR: ~103 per 100,000
- Life expectancy: 71.5 years
- Growth rate: 0.81% annually
- Sex ratio: 943 females per 1000 males

**Key Indicators:**
- CBR: 17.7 per 1000
- CDR: 7.5 per 1000
- U5MR: 34 per 1000 LB
- Dependency ratio: ~67
- Age structure: 34% <15y, 60% working-age, 6% >65y

**Regional Variation:**
- South India: TFR <2.0 (Kerala 1.7, TN 1.6)
- North India: TFR >2.5 (UP, MP, Rajasthan)
- Urban: TFR 1.8, Rural: 2.3

**Demographic Stage:** Stage 2 (Transition) - mortality declining, fertility still elevated

**Fertility Determinants:**
- Female education (strongest)
- Economic development
- Female employment
- Child mortality reduction

**Mortality Determinants:**
- Healthcare access
- Nutrition
- Sanitation/water
- Female education

## Problem-Solving Cases

**Case 1: High Fertility District**
- TFR 3.2, IMR 45, female literacy 30%
- Strategy: Female education, contraceptive access, maternal-child health
- Monitoring: CPR increase, female education enrollment, IMR decline

**Case 2: Demographic Dividend Window**
- Large working-age population (63%)
- Opportunity: Job creation, economic growth
- Risk: Unemployment if jobs not created

**Case 3: Sex Ratio Imbalance**
- District: 890 females per 1000 males
- Cause: Sex-selective abortion
- Intervention: Legal enforcement, female education, economic empowerment

## Analysis Topics

- Why is female education the strongest predictor of fertility decline?
- Demographic transition stages and health system changes needed
- How to calculate IMR, MMR, TFR from raw data
- Impact of demographic dividend if utilized vs if not`,
        mnemonics: [
          {
            text: "INDIA DEMOGRAPHICS",
            explanation: "1.43B population, TFR 2.0, IMR 28, MMR 103, LE 71.5y, Growth 0.81%",
          },
          {
            text: "KEY INDICATORS",
            explanation: "CBR 17.7, CDR 7.5, U5MR 34, Sex ratio 943/1000, Age: 34% youth",
          },
          {
            text: "FERTILITY DRIVERS",
            explanation: "Female education (strongest), Economic development, Female employment, Child mortality ↓",
          },
        ],
        keyPoints: [
          "TFR 2.0, IMR 28, MMR 103 (target 70), sex ratio 943/1000 with female deficit",
          "South India TFR <2.0 (Kerala 1.7); North >2.5; urban 1.8, rural 2.3",
          "Female education strongest predictor of fertility decline (~0.5 per year of education)",
          "India in Stage 2 demographic transition: mortality declining, fertility still elevated → rapid growth",
          "Demographic dividend window: Large working-age population; risk if jobs not created",
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Ch 4", edition: "26th" },
          { book: "Census of India 2021", chapter: "Demographic indicators", edition: "2021" },
        ],
      },
      {
        layer: 5,
        slug: "demography-population-layer-5-active-recall",
        title: "Demography & Population - Active Recall",
        estimatedMinutes: 10,
        summary: "Quick recall of demographic indicators, India's statistics, determinants of fertility/mortality, and policy implications.",
        contentMd: `# Active Recall - Demography & Population

**Q1:** Define key demographic indicators: TFR, IMR, MMR, CBR, CDR, and provide India's current values (2023).
> TFR: Average children per woman (India 2.0). IMR: Infant deaths per 1000 LB (28). MMR: Maternal deaths per 100,000 LB (103). CBR: Births per 1000 population (17.7). CDR: Deaths per 1000 population (7.5). NRR: Net daughters per woman (accounts for mortality).

**Q2:** What is India's current population, growth rate, and projected population by 2050?
> Population 2023: ~1.43 billion. Growth rate: 0.81% annually. Demographic momentum: Population will continue growing for 50+ years despite TFR at replacement; likely peak ~2050-2060 at ~1.6-1.7 billion.

**Q3:** Compare TFR, IMR, and sex ratio between South and North India, and between urban and rural areas.
> South (Kerala 1.7, TN 1.6) vs North (UP, MP >2.5). Urban TFR 1.8 vs Rural 2.3. Urban IMR ~20 vs Rural ~35. Urban sex ratio better than rural (infrastructure, healthcare, education differences).

**Q4:** Describe the stages of demographic transition model and identify India's current stage.
> Stage 1: High fertility, high mortality (equilibrium). Stage 2: Mortality ↓, fertility high (rapid growth) - INDIA HERE. Stage 3: Both declining (slowing growth). Stage 4: Low both (stable population). Stage 5: Below-replacement (declining population).

**Q5:** What are the ultimate determinants of fertility and why is female education the strongest predictor?
> Ultimate determinants: Female education (STRONGEST - each year ~0.5 TFR reduction), Economic development, Female employment, Infant/child mortality reduction, Gender equality, Cultural beliefs. Female education → delayed marriage, contraceptive knowledge, career focus, autonomy.

**Q6:** Explain how mortality reduction contributes to fertility reduction over time.
> Lower infant/child mortality → reduced "need" for replacement births. Couples confident children will survive to adulthood. Gradual shift: More children survive → smaller family desires. Process takes 10-20 years (lag effect).

**Q7:** What is the sex ratio of India and what are the causes and consequences of female deficit?
> Sex ratio: 943 females per 1000 males (deficit). Causes: Female infanticide, sex-selective abortion (ultrasound technology), maternal mortality, differential child care. Consequences: Reduced marriage prospects (males), potential for violence/trafficking, loss of female human capital.

**Q8:** Define demographic dividend and explain conditions needed to realize it as economic growth opportunity.
> Demographic dividend: Period when working-age population is largest relative to dependents (high proportion working-age). Opportunity: Economic growth if jobs created for young workers. Risk: If jobs not created, unemployment increases. India experiencing now (window ~2020-2050).

**Q9:** How is IMR calculated and what are the implications for different values?
> IMR = (Deaths <1 year / Live births) × 1000 per year. IMR 28 (India) means 28 infants per 1000 die before age 1. ↓IMR (toward <20 target) indicates improving neonatal/infant care, nutrition, healthcare access. Regional IMR <20 (urban) vs >35 (rural) shows disparities.

**Q10:** Describe how demographic data are used in health planning and what are the limitations?
> Uses: Population projections → facility capacity planning. Age structure → pediatric/geriatric service needs. Mortality patterns → disease surveillance priorities. Fertility trends → family planning program emphasis. Limitations: Census decennial gaps, birth/death registration undercount (~10-15%), survey sampling error, recall bias.`,
        mnemonics: [
          {
            text: "INDIA INDICATORS 2023",
            explanation: "TFR 2.0, IMR 28, MMR 103, CBR 17.7, CDR 7.5, LE 71.5, Growth 0.81%",
          },
          {
            text: "DEMOGRAPHIC TRANSITION INDIA",
            explanation: "Stage 2: Mortality ↓, fertility high, rapid growth",
          },
          {
            text: "FERTILITY DETERMINANTS",
            explanation: "Female education (strongest), Economic development, Employment, Mortality ↓, Gender equality, Culture",
          },
          {
            text: "SEX RATIO CAUSES",
            explanation: "Infanticide, Sex-selective abortion, Maternal mortality, Differential care",
          },
        ],
        keyPoints: [
          "TFR 2.0, IMR 28, MMR 103 (target 70 by 2030), sex ratio 943/1000 with female deficit",
          "South TFR <2.0; North >2.5; urban lower than rural across all indicators",
          "Stage 2 transition: rapid growth (0.81%) despite declining mortality; demographic momentum extends growth 50+ years",
          "Female education strongest fertility predictor (each year → ~0.5 reduction); also reduces MMR/IMR",
          "Demographic dividend: Large working-age population now; opportunity for growth if jobs created",
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Ch 4", edition: "26th" },
          { book: "Census of India 2021 & SRS Reports", chapter: "Demographic indicators, regional variation", edition: "2023" },
        ],
      },
    ],
  },
];
