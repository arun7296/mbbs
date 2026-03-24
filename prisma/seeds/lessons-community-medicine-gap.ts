import type { TopicLessons } from "./content-loader";

export const communityMedicineGapLessons: TopicLessons[] = [
  {
    topicCode: "CM-MOD-01-TOP-06",
    layers: [
      {
        layer: 1,
        slug: "demography-population-foundation",
        title: "Demography & Population Dynamics - Foundation",
        estimatedMinutes: 25,
        summary: "Introduction to demographic concepts, census methods, and population dynamics in India.",
        contentMd: `# Demography & Population Dynamics - Foundation

## Definition
Demography is the scientific study of populations, including their size, structure, distribution, and changes over time.

## Key Demographic Indicators
1. **Crude Birth Rate (CBR)**: Number of live births per 1000 population per year
2. **Crude Death Rate (CDR)**: Number of deaths per 1000 population per year
3. **Infant Mortality Rate (IMR)**: Deaths per 1000 live births before age 1
4. **Under-5 Mortality**: Deaths per 1000 live births before age 5
5. **Maternal Mortality Ratio (MMR)**: Maternal deaths per 100,000 live births

## Census in India
- **Definition**: Complete enumeration of population conducted every 10 years
- **First Census**: 1872
- **Current Schedule**: Decennial census (2001, 2011, 2021)
- **Data Collected**: Age, sex, occupation, education, religion, caste, migration
- **Tools**: Census enumeration, household schedules, population registers

## Population Pyramid
- **Definition**: Graphical representation of population structure by age and sex
- **Shape Types**:
  - **Pyramid/Triangular**: Expanding population (high fertility)
  - **Bell-shaped**: Stable population
  - **Urn-shaped**: Declining population (low fertility)

## Demographic Transition Model (DTM)
- **Stage 1 (High Stationary)**: High birth and death rates, low population growth (pre-industrial)
- **Stage 2 (Early Transition)**: Death rates fall, birth rates high, rapid growth (developing)
- **Stage 3 (Late Transition)**: Birth rates decline, death rates low, slowing growth (industrializing)
- **Stage 4 (Low Stationary)**: Low birth and death rates, near-zero growth (developed)

## India's Demographic Position
- Currently in Stage 2-3 transition
- CBR: ~18 per 1000
- CDR: ~7 per 1000
- IMR: ~30 per 1000 (down from 73 in 2005)
- Total Fertility Rate (TFR): ~2.2 (below replacement in urban areas)

## Population Policy Framework
- **National Population Policy 2000**: Voluntary family planning
- **Vision**: Achieve replacement-level fertility (TFR 2.1)
- **Strategies**: Female education, economic development, healthcare access
`,
        mnemonics: [
          { text: "Census = Complete COUNT of population (enumeration every 10 years)", explanation: "Definition and frequency of census in India" },
          { text: "DTM = Death rate falls first, then birth rate (demographic transition)", explanation: "Sequence of changes in demographic transition" },
          { text: "IMR = Infant Mortality Rate (deaths <1 year per 1000 births)", explanation: "Key indicator of child health" },
        ],
        keyPoints: [
          "Demography studies population size, structure, and changes",
          "Census is decennial enumeration providing demographic data",
          "Population pyramid shape indicates population structure and growth pattern",
          "Demographic transition shows progression from high to low fertility/mortality",
          "India transitioning from Stage 2-3 of demographic transition model",
        ],
        textbookRefs: [{ book: "Park's Textbook of PSM", chapter: "Ch 2", edition: "26th" }],
      },
      {
        layer: 2,
        slug: "demography-population-mechanism",
        title: "Demography & Population Dynamics - Mechanism",
        estimatedMinutes: 30,
        summary: "Mechanisms of population change, fertility patterns, migration, and population momentum.",
        contentMd: `# Demography & Population Dynamics - Mechanism

## Population Change Equation
Population Change = Births - Deaths + Immigration - Emigration

## Fertility Patterns in India
- **Total Fertility Rate (TFR)**: Average children per woman
  - National average: 2.2 (varies by state)
  - Rural: 2.5; Urban: 1.8
  - Influenced by education, income, healthcare access
- **Age-Specific Fertility Rate (ASFR)**: Births per 1000 women in specific age group
- **General Fertility Rate (GFR)**: Births per 1000 women of reproductive age

## Factors Affecting Fertility
- **Socioeconomic**: Education, income, occupation
- **Biological**: Age, nutrition, health status
- **Cultural**: Religion, tradition, marriage age
- **Policy**: Family planning programs, incentives
- **Health Services**: Contraception availability, maternal healthcare

## Migration Patterns
- **Internal Migration**: Movement within country (rural-urban, interstate)
- **International Migration**: Emigration, immigration
- **Effects**: Changes in population density, age structure, remittances

## Population Momentum
- Population continues to grow even if fertility drops to replacement level
- Due to large proportion of young, reproductive-age population
- Takes 60-70 years to stabilize after fertility reduction

## Vital Statistics Registration
- **System**: CRVS (Civil Registration and Vital Statistics)
- **Components**: Birth and death registration
- **Coverage**: Improving but gaps exist in rural areas
- **Importance**: Basis for demographic planning and health program monitoring
`,
        mnemonics: [
          { text: "Fertility = TFR (Total Fertility Rate) - average children per woman", explanation: "Key measure of population reproduction" },
          { text: "Migration = Internal (rural-urban) + International (emigration/immigration)", explanation: "Types of population movement" },
          { text: "Momentum = Population growth continues despite low fertility (lag effect)", explanation: "Demographic lag phenomenon" },
        ],
        keyPoints: [
          "Population change driven by births, deaths, and migration",
          "TFR varies significantly by education, urbanization, and income",
          "Rural fertility (2.5) higher than urban fertility (1.8) in India",
          "Population momentum explains continued growth despite fertility decline",
          "CRVS system essential for vital statistics and planning",
        ],
        textbookRefs: [{ book: "Park's Textbook of PSM", chapter: "Ch 2-3", edition: "26th" }],
      },
      {
        layer: 3,
        slug: "demography-population-clinical",
        title: "Demography & Population Dynamics - Clinical Applications",
        estimatedMinutes: 28,
        summary: "Application of demographic data in healthcare planning, disease control, and program evaluation.",
        contentMd: `# Demography & Population Dynamics - Clinical Applications

## Healthcare Planning Using Demographic Data
- **Facility Planning**: Number of hospitals, PHCs, CHCs based on population size
- **Human Resource Planning**: Doctors, nurses, paramedics required
- **Supply Planning**: Medicines, vaccines, equipment based on population projections
- **Service Planning**: Antenatal care, immunization coverage goals

## Target Setting for Health Programs
- **MCH Services**: Estimate pregnant women, children <5 years based on population
- **Immunization**: Target populations for vaccine coverage
- **Disease Control**: Population at risk for TB, malaria, HIV

## Population Projections
- **Methods**: Component method (fertility, mortality, migration), time series
- **Uses**: Plan healthcare infrastructure, estimate disease burden
- **Indian Projections**: Up to 2036 available (Census 2011 based)
- **Current Trends**: Population stabilization expected by 2050

## Disease Burden & Age Structure
- **Young Population**: Higher burden of communicable diseases, MCH issues
- **Aging Population**: Increasing NCDs, geriatric care needs
- **Window of Opportunity**: Favorable age structure for economic development

## Demographic Dividend
- Occurs when working-age population larger than dependents
- India: Currently in demographic dividend phase (will peak ~2030)
- Opportunities: Economic growth if opportunities provided
- Challenges: Job creation, skill development needed

## Program Evaluation Using Demographics
- **Coverage Indicators**: % of target population reached
- **Service Utilization**: Compare with expected from demographic projections
- **Impact Assessment**: Changes in mortality, fertility related to program
`,
        mnemonics: [
          { text: "Demographic Dividend = Favorable age structure with more workers than dependents", explanation: "Economic opportunity window in population pyramid" },
          { text: "Projections = Estimate future population for service planning", explanation: "Forward planning tool for healthcare infrastructure" },
          { text: "Program Evaluation = Use demographics to assess coverage and impact", explanation: "Basis for monitoring and evaluation" },
        ],
        keyPoints: [
          "Demographic data essential for healthcare facility and HR planning",
          "Population projections guide long-term health system development",
          "Age structure determines disease burden and healthcare needs",
          "India in demographic dividend phase providing economic opportunity",
          "Program targets derived from demographic estimates of at-risk populations",
        ],
        textbookRefs: [{ book: "Park's Textbook of PSM", chapter: "Ch 2-3", edition: "26th" }],
      },
      {
        layer: 4,
        slug: "demography-population-exam-prep",
        title: "Demography & Population Dynamics - Exam Preparation",
        estimatedMinutes: 25,
        summary: "NEXT-pattern exam questions on demographic concepts, calculations, and policy applications.",
        contentMd: `# Demography & Population Dynamics - Exam Preparation

## High-Yield Concepts
1. **Census Definition & Frequency**: Decennial, complete enumeration, 2011 last census
2. **Population Pyramid Interpretation**: Shape reflects fertility/mortality patterns
3. **Demographic Transition Model**: 4 stages, India in Stage 2-3
4. **TFR vs CBR**: TFR is children per woman; CBR is births per 1000 population
5. **IMR Calculation**: Deaths <1 year per 1000 live births
6. **Demographic Dividend**: Favorable age structure for economic development

## Problem-Solving (60%)
- A population of 10,000 has 200 births and 50 deaths in a year. Calculate CBR and CDR.
- Age pyramid is triangular. What stage of demographic transition?
- State has TFR 2.8, high illiteracy. What interventions recommended?
- Population projections show 30% increase in elderly. Plan geriatric services.

## Analysis (30%)
- Compare demographic indicators between states. Explain differences in fertility.
- Discuss relationship between education levels and demographic transition.
- Analyze impact of population momentum on achieving replacement fertility.
- Evaluate demographic dividend opportunities and challenges for India.

## Recall (10%)
- Definition of demography
- Four stages of DTM
- Components of vital statistics
- National Population Policy targets
- Census schedule in India
`,
        mnemonics: [
          { text: "CBR vs CDR: CBR = Births per 1000; CDR = Deaths per 1000 (similar but opposite)", explanation: "Distinguish between birth and death rates" },
          { text: "4 Stages DTM: High-High → Low-High → Low-Low → High-Low (transition order)", explanation: "Sequence of demographic transition" },
          { text: "Demographic Dividend Window = 15-65 year olds > dependents (temporary advantage)", explanation: "Timing of economic opportunity" },
        ],
        keyPoints: [
          "Census occurs every 10 years; 2011 was latest, 2021 completed",
          "Population pyramid shape indicates population growth pattern",
          "India's TFR 2.2 but varies: rural 2.5, urban 1.8",
          "Demographic dividend peaks ~2030 in India",
          "Education of women is strongest predictor of fertility decline",
        ],
        textbookRefs: [{ book: "Park's Textbook of PSM", chapter: "Ch 2-3", edition: "26th" }],
      },
      {
        layer: 5,
        slug: "demography-population-active-recall",
        title: "Demography & Population Dynamics - Active Recall",
        estimatedMinutes: 20,
        summary: "Flashcard Q&A for retention and spaced repetition on demographic concepts.",
        contentMd: `# Demography & Population Dynamics - Active Recall

## Flashcard Questions & Answers

**Q1: What is the definition of demography?**
A: Scientific study of human populations including their size, structure, distribution, composition, and changes over time.

**Q2: How often is census conducted in India?**
A: Every 10 years (decennial). Last census: 2011. Previous: 2001. Next: 2031 (2021 enumeration completed but not fully released).

**Q3: Name the four stages of Demographic Transition Model.**
A: Stage 1 (High Stationary): High birth/death rates. Stage 2 (Early Transition): Death rates fall, high birth rates. Stage 3 (Late Transition): Birth rates decline. Stage 4 (Low Stationary): Low birth/death rates.

**Q4: What is India's current TFR and which stage of DTM is India in?**
A: TFR ~2.2 (replacement level). India is in late Stage 2 to early Stage 3 of DTM, transitioning from high to moderate growth.

**Q5: Define Infant Mortality Rate (IMR) and its current value in India.**
A: Deaths of children <1 year per 1000 live births. India's IMR approximately 30-35 per 1000 (varies by state; lower in urban areas, higher in rural areas).

**Q6: What is population pyramid and name three types.**
A: Graphical representation of population by age and sex. Types: (1) Pyramid/Triangular (expanding), (2) Bell-shaped (stable), (3) Urn-shaped (declining).

**Q7: Explain demographic dividend.**
A: Period when working-age population (15-64 years) is larger than dependent population (<15 and >64). Provides economic opportunity if employment created.

**Q8: What is population momentum?**
A: Continued population growth even after fertility falls to replacement level, due to large proportion of reproductive-age population.

**Q9: Compare rural and urban TFR in India.**
A: Rural TFR ~2.5; Urban TFR ~1.8. Urban areas show lower fertility due to education, economic opportunities, and lower infant mortality.

**Q10: Name three factors affecting fertility in India.**
A: (1) Female education (strongest factor), (2) Income/socioeconomic status, (3) Access to contraception, (4) Healthcare services, (5) Urbanization.
`,
        keyPoints: [
          "Demography = scientific study of populations",
          "Census = decennial enumeration; India Stage 2-3 of DTM",
          "IMR = key child health indicator (~30 per 1000 in India)",
          "Population pyramid shape reflects growth pattern",
          "Demographic dividend = economic opportunity from favorable age structure",
        ],
        textbookRefs: [{ book: "Park's Textbook of PSM", chapter: "Ch 2-3", edition: "26th" }],
      },
    ],
  },
  {
    topicCode: "CM-MOD-01-TOP-07",
    layers: [
      {
        layer: 1,
        slug: "health-education-communication-foundation",
        title: "Health Education & Communication - Foundation",
        estimatedMinutes: 25,
        summary: "Introduction to health education, IEC, BCC concepts and importance in public health.",
        contentMd: `# Health Education & Communication - Foundation

## Definition
Health education is planned, systematic educational process aimed at improving health knowledge, attitudes, and practices for individual and community benefit.

## Importance of Health Education
- **Knowledge Creation**: Awareness of health issues and prevention methods
- **Behavior Change**: Modifying unhealthy practices
- **Disease Prevention**: Reducing communicable and non-communicable disease burden
- **Health Promotion**: Improving overall health status
- **Empowerment**: Community involvement in health decisions

## IEC (Information, Education, Communication)
- **Information**: Dissemination of facts about health
- **Education**: Process of learning and behavior change
- **Communication**: Two-way dialogue between provider and community
- **Goals**: Increase awareness and facilitate behavior change
- **Use**: National health programs, disease prevention campaigns

## BCC (Behavior Change Communication)
- **Focus**: Systematic approach to modify health behaviors
- **Methods**: Evidence-based, culturally appropriate strategies
- **Phases**: Awareness → Knowledge → Attitude → Behavior → Practice
- **Applications**: Sanitation, nutrition, immunization, family planning, STI prevention
- **Success Indicators**: Adoption of recommended behaviors

## Health Education Levels
1. **Individual Level**: One-to-one counseling (clinic, OPD)
2. **Community Level**: Group talks, village meetings, anganwadi centers
3. **Population Level**: Mass media campaigns, national programs

## Target Audiences
- **General Public**: Health awareness campaigns
- **Vulnerable Groups**: Women, children, elderly, low-income
- **Healthcare Providers**: Doctors, nurses, paramedics
- **School Children**: Through school health programs

## Barriers to Health Education
- **Educational**: Low literacy rates, lack of awareness
- **Cultural**: Beliefs, traditions, gender norms
- **Socioeconomic**: Poverty, limited resources
- **Organizational**: Lack of trained educators, funding
- **Behavioral**: Established habits, lack of motivation
`,
        mnemonics: [
          { text: "Health Education = Knowledge + Attitude + Behavior change", explanation: "Three components of health education" },
          { text: "IEC = Information-Education-Communication (dissemination + learning + dialogue)", explanation: "Three functions of health education strategy" },
          { text: "BCC = Behavior Change Communication (systematic, evidence-based approach)", explanation: "Focused behavior change strategy" },
        ],
        keyPoints: [
          "Health education aimed at improving knowledge, attitudes, and practices",
          "IEC includes information dissemination, education, and two-way communication",
          "BCC is systematic approach for behavior change through evidence-based methods",
          "Operates at individual, community, and population levels",
          "Barriers include educational, cultural, socioeconomic, and organizational factors",
        ],
        textbookRefs: [{ book: "Park's Textbook of PSM", chapter: "Ch 4", edition: "26th" }],
      },
      {
        layer: 2,
        slug: "health-education-communication-mechanism",
        title: "Health Education & Communication - Mechanism",
        estimatedMinutes: 30,
        summary: "Models of health education, communication theories, and implementation strategies.",
        contentMd: `# Health Education & Communication - Mechanism

## Health Belief Model
- **Components**: Perceived susceptibility, perceived severity, perceived benefits, perceived barriers, cues to action
- **Application**: Predicts health behavior adoption
- **Example**: Vaccination uptake based on belief in disease severity and vaccine effectiveness

## Stages of Change Model (Transtheoretical Model)
1. **Precontemplation**: Not considering change
2. **Contemplation**: Thinking about change
3. **Preparation**: Planning to change
4. **Action**: Active behavior change
5. **Maintenance**: Sustaining new behavior
6. **Relapse**: Return to old behavior (common)

## Social Cognitive Theory
- **Self-Efficacy**: Person's confidence in ability to perform action
- **Observational Learning**: Learning from observing others
- **Reciprocal Determinism**: Interaction between person, behavior, environment
- **Application**: Designing achievable behavior change goals

## Communication Process
- **Source**: Health educator/provider
- **Message**: Health information (clear, simple, culturally appropriate)
- **Channel**: Media (oral, print, electronic, digital)
- **Receiver**: Individual or community
- **Feedback**: Response to message

## Health Promotion Models
1. **Ottawa Charter**: Empower individuals and communities
2. **Lalonde Model**: Health field concept (genetics, environment, healthcare, lifestyle)
3. **Dahlgren-Whitehead Model**: Social determinants of health

## Behavior Change Techniques
- **Education**: Awareness raising, knowledge sharing
- **Motivation**: Incentives, peer influence, role models
- **Skill-Building**: Training, demonstration, practice
- **Environmental Support**: Policy changes, community support
- **Monitoring**: Track progress, provide feedback

## Methods of Health Communication
- **Oral**: Lectures, discussions, group meetings
- **Print**: Posters, pamphlets, comics
- **Digital**: Social media, websites, mobile apps
- **Visual**: Demonstrations, videos, infographics
- **Interpersonal**: Counseling, peer education
`,
        mnemonics: [
          { text: "Health Belief Model = Susceptibility + Severity + Benefits - Barriers (perceived)", explanation: "Four key perceptions affecting health behavior" },
          { text: "Stages of Change = Pre → Contemplation → Preparation → Action → Maintenance → Relapse", explanation: "Six stages of behavior change process" },
          { text: "Self-Efficacy = Confidence in ability to perform action (key to success)", explanation: "Important component of behavior change" },
        ],
        keyPoints: [
          "Health belief model predicts adoption based on perceptions of disease and solution",
          "Stages of change show progression from thinking about change to maintaining it",
          "Self-efficacy is crucial determinant of successful behavior change",
          "Communication process includes source, message, channel, receiver, feedback",
          "Multiple methods available: oral, print, digital, visual, interpersonal",
        ],
        textbookRefs: [{ book: "Park's Textbook of PSM", chapter: "Ch 4-5", edition: "26th" }],
      },
      {
        layer: 3,
        slug: "health-education-communication-clinical",
        title: "Health Education & Communication - Clinical Applications",
        estimatedMinutes: 28,
        summary: "Implementation of health education in clinical practice and community health programs.",
        contentMd: `# Health Education & Communication - Clinical Applications

## Patient Counseling in Clinical Settings
- **Prenatal Counseling**: Nutrition, danger signs, safe delivery, breastfeeding
- **STI Prevention**: Safer sex practices, partner notification
- **Chronic Disease**: Diabetes, HTN management, medication adherence
- **Surgical**: Preoperative preparation, postoperative care
- **Vaccination**: Benefits, safety, scheduling

## School Health Programs
- **Components**: Health screening, nutrition, sanitation, health education
- **Topics**: Hygiene, nutrition, menstrual health, substance abuse, mental health
- **Teachers Training**: Enable school staff to deliver health education
- **Environment**: Safe water, toilets, cleanliness

## Community-Based Programs
- **Anganwadi Centers**: Nutrition, immunization, health education to mothers
- **ASHA/ANM**: Health education at household level
- **Village Health Guide**: Train community members as educators
- **Self-Help Groups**: Women empowerment with health education

## National Health Programs with IEC Component
- **NTEP (TB)**: Awareness on TB, DOT, cure rates
- **RNTCP**: TB case finding, treatment completion
- **Immunization**: UIP promotion, myth dispelling
- **Family Planning**: Contraceptive methods, benefits
- **Sanitation**: Swachh Bharat Mission awareness

## Monitoring & Evaluation of Health Education
- **Knowledge Assessment**: Pre/post tests, surveys
- **Behavior Indicators**: Adoption rates, coverage, compliance
- **Health Outcomes**: Reduction in disease incidence/prevalence
- **Sustainability**: Long-term behavior maintenance

## Challenges in Indian Context
- **Literacy**: Low health literacy in rural areas
- **Beliefs**: Traditional beliefs vs. scientific information
- **Resources**: Limited funds, trained educators
- **Reach**: Difficulty accessing remote populations
- **Adherence**: Sustaining behavior change over time

## Digital Health Communication
- **mHealth**: Mobile-based health information and services
- **Social Media**: WhatsApp, Facebook for health messages
- **Apps**: Health tracking, appointment scheduling
- **Telemedicine**: Remote counseling and consultation
`,
        mnemonics: [
          { text: "Anganwadi = Nutrition + Immunization + Health Education (integrated approach)", explanation: "Three functions of ICDS centers" },
          { text: "Program Evaluation = Knowledge + Behavior + Health Outcomes (three levels)", explanation: "Three-level assessment framework" },
          { text: "Digital Tools = Mobile + Social Media + Apps (modern communication channels)", explanation: "Contemporary health communication methods" },
        ],
        keyPoints: [
          "Patient counseling essential in OPD, antenatal, STI, chronic disease clinics",
          "School health programs integrate screening, sanitation, nutrition, education",
          "Anganwadi, ASHA, ANM provide household-level health education",
          "National programs include IEC as integral component",
          "Evaluation measures knowledge, behavior adoption, and health outcomes",
        ],
        textbookRefs: [{ book: "Park's Textbook of PSM", chapter: "Ch 4-5", edition: "26th" }],
      },
      {
        layer: 4,
        slug: "health-education-communication-exam-prep",
        title: "Health Education & Communication - Exam Preparation",
        estimatedMinutes: 25,
        summary: "NEXT-pattern exam questions on health education models, strategies, and program implementation.",
        contentMd: `# Health Education & Communication - Exam Preparation

## High-Yield Concepts
1. **Health Education Definition**: Process to improve knowledge, attitudes, practices
2. **IEC vs BCC**: IEC broader (information+education+communication); BCC focused behavior change
3. **Health Belief Model**: Four perceptions drive health behavior
4. **Stages of Change**: Six stages from precontemplation to maintenance
5. **Self-Efficacy**: Confidence in ability to perform action (key factor)
6. **Communication Process**: Source → Message → Channel → Receiver → Feedback

## Problem-Solving (60%)
- A village has low vaccination coverage (40%). Design IEC strategy to improve uptake.
- Patient non-compliant with TB treatment. Explain using Stages of Change model.
- School has high malnutrition. Plan integrated health education program.
- Design BCC campaign for family planning in conservative community.

## Analysis (30%)
- Compare Health Belief Model with Stages of Change Model in predicting behavior.
- Discuss barriers to health education in rural India and strategies to overcome.
- Analyze effectiveness of different communication channels for health messages.
- Evaluate role of self-efficacy in sustaining behavior change.

## Recall (10%)
- Definition of IEC and BCC
- Components of Health Belief Model
- Six stages of change
- Definition of self-efficacy
- Levels of health education (individual, community, population)
`,
        mnemonics: [
          { text: "IEC: Information → Education → Communication (sequential)", explanation: "Three components in order" },
          { text: "PSEC = Precontemplation → Stages → Everyone → Changes (mnemonic for stages)", explanation: "Remember six stages of change" },
          { text: "HBM = Susceptibility + Severity + Benefits - Barriers (perceived) = action", explanation: "Health Belief Model formula" },
        ],
        keyPoints: [
          "Health education operates at individual, community, population levels",
          "IEC broader strategy; BCC specifically for behavior change",
          "Health Belief Model based on four perceptions + cues to action",
          "Stages of Change shows progression and possibility of relapse",
          "Self-efficacy critical for behavior change success and maintenance",
        ],
        textbookRefs: [{ book: "Park's Textbook of PSM", chapter: "Ch 4-5", edition: "26th" }],
      },
      {
        layer: 5,
        slug: "health-education-communication-active-recall",
        title: "Health Education & Communication - Active Recall",
        estimatedMinutes: 20,
        summary: "Flashcard Q&A for retention and spaced repetition on health education concepts.",
        contentMd: `# Health Education & Communication - Active Recall

## Flashcard Questions & Answers

**Q1: Define health education.**
A: Planned, systematic educational process aimed at improving health knowledge, attitudes, and practices at individual and community levels for improved health outcomes.

**Q2: What are the three components of IEC?**
A: Information (dissemination of facts), Education (process of learning), Communication (two-way dialogue between provider and community).

**Q3: How does BCC differ from IEC?**
A: IEC is broader strategy including information dissemination; BCC is systematic approach specifically focused on changing health behaviors through evidence-based methods.

**Q4: Name the four components of Health Belief Model.**
A: (1) Perceived susceptibility to disease, (2) Perceived severity of disease, (3) Perceived benefits of action, (4) Perceived barriers to action. Plus cues to action and self-efficacy.

**Q5: List the six stages of Change Model (Transtheoretical Model).**
A: (1) Precontemplation, (2) Contemplation, (3) Preparation, (4) Action, (5) Maintenance, (6) Relapse (common, back to earlier stages).

**Q6: What is self-efficacy in behavior change?**
A: Person's confidence or belief in their ability to perform the desired health behavior successfully.

**Q7: Name three levels of health education.**
A: (1) Individual level (one-to-one counseling), (2) Community level (group talks, meetings), (3) Population level (mass media campaigns).

**Q8: List five communication channels for health messages.**
A: (1) Oral (lectures, discussion), (2) Print (posters, pamphlets), (3) Digital (apps, websites), (4) Visual (videos, demonstrations), (5) Interpersonal (counseling).

**Q9: What are three functions of Anganwadi centers in India?**
A: (1) Nutrition (supplementary nutrition), (2) Immunization, (3) Health education to mothers and children.

**Q10: Explain the communication process in health education.**
A: Source (health educator) → Message (health information) → Channel (media) → Receiver (individual/community) → Feedback (response to message). Process is cyclical.
`,
        keyPoints: [
          "Health education = knowledge + attitude + behavior improvement",
          "IEC broader; BCC focused on behavior change",
          "HBM: Perceptions + cues + self-efficacy drive behavior",
          "Stages of Change shows progression with possible relapse",
          "Self-efficacy = confidence in ability to perform action",
        ],
        textbookRefs: [{ book: "Park's Textbook of PSM", chapter: "Ch 4-5", edition: "26th" }],
      },
    ],
  },
  {
    topicCode: "CM-MOD-01-TOP-08",
    layers: [
      {
        layer: 1,
        slug: "behavioral-sciences-health-psychology-foundation",
        title: "Behavioral Sciences & Health Psychology - Foundation",
        estimatedMinutes: 25,
        summary: "Introduction to behavioral sciences, health psychology, and psychosocial factors affecting health.",
        contentMd: `# Behavioral Sciences & Health Psychology - Foundation

## Definition
Behavioral sciences apply scientific methods to study human behavior. Health psychology examines how psychological factors affect health, illness, and healthcare.

## Psychosocial Factors Affecting Health
1. **Psychological**: Stress, anxiety, depression, personality, beliefs, attitudes
2. **Social**: Family, relationships, community, culture, socioeconomic status
3. **Behavioral**: Diet, exercise, sleep, substance use, adherence
4. **Environmental**: Housing, education, employment, access to healthcare

## Health Belief Model (in Behavioral Context)
- **Perceived Susceptibility**: Risk perception for developing disease
- **Perceived Severity**: Belief about seriousness of disease
- **Perceived Benefits**: Belief that action will reduce risk
- **Perceived Barriers**: Obstacles to taking action
- **Cues to Action**: Triggers to initiate behavior
- **Self-Efficacy**: Confidence in ability to perform action

## Stress and Health
- **Stress Definition**: Body's response to demands exceeding resources
- **Acute Stress**: Short-term response (event-triggered)
- **Chronic Stress**: Long-term, persistent stress
- **Health Effects**: Hypertension, heart disease, immunosuppression, mental health

## Types of Stress
- **Physiological Stress**: Disease, injury, environmental factors
- **Psychological Stress**: Fear, anxiety, grief, loss
- **Social Stress**: Relationship conflict, social isolation
- **Occupational Stress**: Work pressure, job insecurity

## Coping Mechanisms
1. **Problem-Focused**: Address the stressor directly
2. **Emotion-Focused**: Manage emotional response to stress
3. **Social Support**: Seek help from others
4. **Positive Coping**: Exercise, meditation, hobbies
5. **Maladaptive Coping**: Substance abuse, denial, aggression

## Compliance and Adherence
- **Compliance**: Patient follows doctor's orders (passive)
- **Adherence**: Active involvement in treatment decisions
- **Factors**: Side effects, cost, complexity, social support, health beliefs
- **Importance**: Essential for chronic disease management
`,
        mnemonics: [
          { text: "Psychosocial = Psychological + Social (together affect health)", explanation: "Two domains of health psychology" },
          { text: "HBM = Susceptibility + Severity + Benefits - Barriers + Self-Efficacy", explanation: "Components predicting health behavior" },
          { text: "Coping = Problem-Focused OR Emotion-Focused (two main strategies)", explanation: "Two types of coping mechanisms" },
        ],
        keyPoints: [
          "Behavioral sciences study how psychology influences health",
          "Health psychology integrates psychological and biological factors",
          "Stress affects immunity, cardiovascular function, mental health",
          "Coping mechanisms help manage stress responses",
          "Adherence to treatment depends on beliefs, side effects, social support",
        ],
        textbookRefs: [{ book: "Park's Textbook of PSM", chapter: "Ch 6", edition: "26th" }],
      },
      {
        layer: 2,
        slug: "behavioral-sciences-health-psychology-mechanism",
        title: "Behavioral Sciences & Health Psychology - Mechanism",
        estimatedMinutes: 30,
        summary: "Psychological theories, personality factors, and mechanisms of health behavior.",
        contentMd: `# Behavioral Sciences & Health Psychology - Mechanism

## Theory of Planned Behavior
- **Attitude**: Belief about outcome of behavior
- **Subjective Norm**: Perceived pressure from others
- **Perceived Control**: Belief in ability to control behavior
- **Intention**: Plan to perform behavior
- **Behavior**: Actual action taken
- **Application**: Predicts health behavior adoption

## Locus of Control
- **Internal Locus**: Belief that outcomes controlled by self
- **External Locus**: Belief that outcomes determined by fate/others
- **Health Context**: Internal locus associated with better health behaviors
- **Cultural Variation**: Varies by culture and background

## Mental Health and Health Behavior
- **Depression**: Reduced motivation for self-care, poor adherence
- **Anxiety**: Can improve or impair health behavior
- **Stress Response**: Activation of sympathetic nervous system (fight-or-flight)
- **Neuroendocrine Changes**: Cortisol, adrenaline affecting immune function

## Personality and Health
- **Type A Personality**: Competitive, hostile, increased cardiac risk
- **Type B Personality**: Relaxed, easygoing, lower stress response
- **Type C Personality**: Suppressed emotions, cancer risk (debated)
- **Hardiness**: Resilience to stress, protective factor

## Social Support Mechanisms
- **Emotional Support**: Empathy, caring, love
- **Practical Support**: Financial, material, time assistance
- **Informational Support**: Advice, information, guidance
- **Social Companionship**: Shared activities, sense of belonging
- **Effect on Health**: Buffering against stress, better health outcomes

## Behavioral Risk Factors
- **Modifiable**: Smoking, alcohol, physical inactivity, poor diet
- **Consequences**: Disease, disability, premature death
- **Intervention**: Education, counseling, incentives, policy changes

## Health Anxiety and Illness Behavior
- **Health Anxiety**: Excessive worry about health (hypochondriasis)
- **Illness Behavior**: How people respond to illness/symptoms
- **Sick Role**: Socially accepted behavior when ill
- **Placebo Effect**: Improvement from belief in treatment
`,
        mnemonics: [
          { text: "TPB = Attitude + Norm + Control → Intention → Behavior", explanation: "Theory of Planned Behavior pathway" },
          { text: "LOC: Internal = personal control; External = fate/others (health belief)", explanation: "Locus of control in health" },
          { text: "Social Support = Emotional + Practical + Info + Companionship (four types)", explanation: "Components of social support" },
        ],
        keyPoints: [
          "Theory of Planned Behavior predicts behavior from attitude, norm, control",
          "Internal locus of control associated with better health outcomes",
          "Mental health significantly influences health behavior and disease outcomes",
          "Personality traits affect stress response and health risk",
          "Social support buffers against stress and improves health",
        ],
        textbookRefs: [{ book: "Park's Textbook of PSM", chapter: "Ch 6-7", edition: "26th" }],
      },
      {
        layer: 3,
        slug: "behavioral-sciences-health-psychology-clinical",
        title: "Behavioral Sciences & Health Psychology - Clinical Applications",
        estimatedMinutes: 28,
        summary: "Application of behavioral sciences in clinical practice, chronic disease management, and health promotion.",
        contentMd: `# Behavioral Sciences & Health Psychology - Clinical Applications

## Counseling Approaches in Clinical Practice
- **Patient-Centered Counseling**: Understand patient perspective and beliefs
- **Motivational Interviewing**: Enhance intrinsic motivation for change
- **Cognitive-Behavioral Therapy (CBT)**: Identify and modify unhelpful thoughts
- **Crisis Intervention**: Support during acute psychological distress

## Chronic Disease Management
- **Adherence Support**: Reminders, simplified regimens, addressing barriers
- **Stress Management**: Relaxation techniques, exercise, counseling
- **Lifestyle Modification**: Diet, exercise, sleep, stress reduction
- **Psychological Support**: Address depression, anxiety, adjustment issues
- **Patient Education**: Understanding disease and self-management

## Behavior Change Interventions
- **Motivational Interviewing**: Explore ambivalence, build confidence
- **Contingency Management**: Rewards for healthy behaviors
- **Habit Formation**: Repetition, cues, environmental modification
- **Group Programs**: Peer support, shared learning, accountability
- **Digital Interventions**: Apps, text reminders, online support

## Stress Management Techniques
- **Relaxation**: Progressive muscle relaxation, deep breathing
- **Meditation**: Mindfulness, transcendental meditation
- **Exercise**: Physical activity reduces stress hormones
- **Social Activities**: Engagement, leisure, hobbies
- **Professional Help**: Counseling, psychotherapy for severe stress

## Health Risk Behavior Reduction
- **Smoking Cessation**: NRT, behavioral support, medication
- **Alcohol Reduction**: Counseling, support groups, medication
- **Substance Abuse**: Detoxification, rehabilitation, counseling
- **Physical Inactivity**: Promote exercise through behavioral incentives
- **Poor Diet**: Nutritional counseling, behavior change strategies

## Mental Health and Wellness Promotion
- **Depression Screening**: Early identification in OPD
- **Anxiety Management**: Teach coping skills, relaxation
- **Sleep Hygiene**: Promote healthy sleep habits
- **Social Connection**: Encourage community engagement, relationships
- **Resilience Building**: Develop adaptive coping strategies

## Behavioral Epidemiology
- **Population Risk Factors**: Prevalence of smoking, alcohol, inactivity
- **Disparities**: Health behavior differences by socioeconomic status
- **Environmental Factors**: Food environment, walkability, substance availability
- **Policy Interventions**: Regulations, taxes, environmental modifications
`,
        mnemonics: [
          { text: "Counseling = Patient-Centered + Motivational + CBT + Crisis support (approaches)", explanation: "Four counseling approaches in clinical practice" },
          { text: "Adherence = Education + Reminders + Support + Barrier Removal (strategies)", explanation: "Components of adherence support" },
          { text: "Stress Management = Relaxation + Exercise + Social + Professional (methods)", explanation: "Multiple stress management techniques" },
        ],
        keyPoints: [
          "Patient-centered counseling essential for understanding barriers to behavior",
          "Motivational interviewing effective for enhancing intrinsic motivation",
          "Adherence requires addressing beliefs, simplifying regimens, removing barriers",
          "Multiple stress management techniques available (relaxation, exercise, social)",
          "Behavioral epidemiology identifies population-level risk factors and disparities",
        ],
        textbookRefs: [{ book: "Park's Textbook of PSM", chapter: "Ch 6-7", edition: "26th" }],
      },
      {
        layer: 4,
        slug: "behavioral-sciences-health-psychology-exam-prep",
        title: "Behavioral Sciences & Health Psychology - Exam Preparation",
        estimatedMinutes: 25,
        summary: "NEXT-pattern exam questions on psychological theories, stress, adherence, and behavior change.",
        contentMd: `# Behavioral Sciences & Health Psychology - Exam Preparation

## High-Yield Concepts
1. **Psychosocial Factors**: Psychological, social, behavioral influence health
2. **Health Belief Model**: Susceptibility, severity, benefits, barriers, self-efficacy
3. **Stress Effects**: Sympathetic activation, immunosuppression, disease risk
4. **Coping**: Problem-focused and emotion-focused strategies
5. **Adherence**: Influenced by beliefs, side effects, social support, complexity
6. **Social Support**: Emotional, practical, informational, companionship

## Problem-Solving (60%)
- Patient with TB non-adherent due to social stigma. Plan counseling approach.
- Elderly diabetic patient with depression affecting self-care. Design intervention.
- Workplace smoking prevalent. Plan behavioral intervention for cessation.
- Stressed healthcare worker with hypertension. Recommend stress management.

## Analysis (30%)
- Compare Health Belief Model with Theory of Planned Behavior in predicting behavior.
- Discuss relationship between locus of control and health outcomes.
- Analyze how mental health affects chronic disease management.
- Evaluate effectiveness of motivational interviewing vs. direct counseling.

## Recall (10%)
- Definition of compliance vs. adherence
- Components of Health Belief Model
- Types of coping mechanisms
- Definition of locus of control
- Components of social support
`,
        mnemonics: [
          { text: "Stress Effects = Sympath↑ + Immune↓ + Disease Risk↑ (physiological)", explanation: "Health effects of chronic stress" },
          { text: "Adherence Factors = Belief + Side Effects + Cost + Complexity + Support", explanation: "Determinants of treatment adherence" },
          { text: "HBM = Perception-Based model; TPB = Intention-Based model (difference)", explanation: "Key difference between two models" },
        ],
        keyPoints: [
          "Psychosocial factors significantly affect health and disease outcomes",
          "Health Belief Model based on four perceptions plus self-efficacy",
          "Stress activates sympathetic nervous system with health consequences",
          "Social support acts as buffer against stress",
          "Adherence influenced by multiple factors including beliefs and barriers",
        ],
        textbookRefs: [{ book: "Park's Textbook of PSM", chapter: "Ch 6-7", edition: "26th" }],
      },
      {
        layer: 5,
        slug: "behavioral-sciences-health-psychology-active-recall",
        title: "Behavioral Sciences & Health Psychology - Active Recall",
        estimatedMinutes: 20,
        summary: "Flashcard Q&A for retention and spaced repetition on behavioral sciences concepts.",
        contentMd: `# Behavioral Sciences & Health Psychology - Active Recall

## Flashcard Questions & Answers

**Q1: Define behavioral sciences in health context.**
A: Application of scientific methods to study human behavior and its relationship to health, illness, and healthcare. Integrates psychology, sociology, anthropology with medicine.

**Q2: What are the four components of Health Belief Model?**
A: (1) Perceived susceptibility, (2) Perceived severity, (3) Perceived benefits of action, (4) Perceived barriers to action. Plus cues to action and self-efficacy.

**Q3: Distinguish between stress and stressor.**
A: Stressor is the external event/demand. Stress is the body's physical, mental, emotional response to that demand.

**Q4: Name two types of coping mechanisms.**
A: (1) Problem-focused coping (address stressor directly), (2) Emotion-focused coping (manage emotional response to stress).

**Q5: What is the difference between compliance and adherence?**
A: Compliance = patient passively follows doctor's orders. Adherence = patient actively participates in treatment decisions and follows treatment plan willingly.

**Q6: Define locus of control and its health significance.**
A: Locus of control = belief in whether outcomes controlled by self or external forces. Internal locus (self-control) associated with better health behaviors and outcomes.

**Q7: List four types of social support.**
A: (1) Emotional support (empathy, love), (2) Practical support (material, financial, time), (3) Informational support (advice, guidance), (4) Social companionship.

**Q8: What is self-efficacy and why is it important in health behavior?**
A: Self-efficacy = person's confidence in ability to perform specific health behavior. Important because high self-efficacy predicts behavior change success and maintenance.

**Q9: Explain the placebo effect from a behavioral perspective.**
A: Improvement in symptoms resulting from belief in treatment effectiveness, not from active ingredient. Shows power of psychological factors in health outcomes.

**Q10: Name three behavioral risk factors affecting health.**
A: (1) Smoking, (2) Alcohol use, (3) Physical inactivity, (4) Poor diet, (5) Poor sleep, (6) Stress without coping. Any three are acceptable.
`,
        keyPoints: [
          "Behavioral sciences integrate psychology with health/medicine",
          "Psychosocial factors significantly affect health outcomes",
          "Health Belief Model: perceptions + self-efficacy predict behavior",
          "Stress triggers physiological responses affecting immunity and disease",
          "Social support and coping mechanisms buffer against stress",
        ],
        textbookRefs: [{ book: "Park's Textbook of PSM", chapter: "Ch 6-7", edition: "26th" }],
      },
    ],
  },
  {
    topicCode: "CM-MOD-04-TOP-06",
    layers: [
      {
        layer: 1,
        slug: "adolescent-school-health-foundation",
        title: "Adolescent & School Health - Foundation",
        estimatedMinutes: 25,
        summary: "Introduction to adolescent health, school health programs, and ARSH framework in India.",
        contentMd: `# Adolescent & School Health - Foundation

## Definition of Adolescence
Period from 10-19 years of age (WHO definition). Key developmental changes: physical, psychological, social, cognitive maturation.

## Adolescent Health Problems
- **Reproductive Health**: Early marriage, contraception, STIs, unsafe abortion
- **Nutrition**: Anemia, micronutrient deficiency, eating disorders
- **Mental Health**: Depression, anxiety, suicide (leading cause of death)
- **Injuries**: Road accidents, violence, self-harm
- **Substance Use**: Tobacco, alcohol, drug abuse
- **School Issues**: Dropout, poor performance
- **Sexual Health**: Early sexual activity, unplanned pregnancy

## ARSH (Adolescent Reproductive Sexual Health)
- **Objectives**: Improve health knowledge, reduce risk behaviors, access services
- **Components**:
  - Education on reproductive health, contraception, STIs, HIV
  - Clinical services for contraception, diagnosis, treatment
  - Counseling and support
- **Strategy**: School-based and community-based approaches
- **Target**: Both in-school and out-of-school adolescents

## School Health Program Components
1. **Health Screening**: Vision, hearing, growth monitoring, nutritional assessment
2. **Immunization**: Ensure up-to-date vaccines
3. **Sanitation/WASH**: Safe water, toilets, handwashing facilities
4. **Health Education**: Hygiene, nutrition, reproductive health, substance abuse
5. **Nutrition**: Mid-day meal scheme, micronutrient fortification
6. **Counseling**: Academic, personal, social support

## Rationale for School Health
- **Access**: Reaches majority of adolescents during formative years
- **Prevention**: Early intervention prevents disease and risk behaviors
- **Equity**: Reaches all socioeconomic groups through schools
- **Education**: Multiplier effect (children educate families)

## Challenges in India
- **Gender Disparities**: Lower enrollment and retention of girls
- **Dropout**: Particularly among girls at adolescence
- **Resource Gaps**: Limited trained teachers, funding
- **Social Barriers**: Menstruation stigma, social norms
- **Health Literacy**: Limited health knowledge in adolescents
`,
        mnemonics: [
          { text: "Adolescence = Age 10-19 (WHO definition)", explanation: "Age range for adolescence" },
          { text: "ARSH = Adolescent Reproductive Sexual Health (knowledge, services, support)", explanation: "Three components of ARSH program" },
          { text: "School Health = Screening + Immunization + Sanitation + Education + Nutrition", explanation: "Five components of comprehensive school health" },
        ],
        keyPoints: [
          "Adolescence spans 10-19 years with rapid physical and psychosocial development",
          "Major health concerns: reproductive, nutrition, mental health, substance use",
          "ARSH provides reproductive health education and clinical services",
          "School health programs integrate screening, education, nutrition, sanitation",
          "Schools provide efficient reach and equity for adolescent health interventions",
        ],
        textbookRefs: [{ book: "Park's Textbook of PSM", chapter: "Ch 15-16", edition: "26th" }],
      },
      {
        layer: 2,
        slug: "adolescent-school-health-mechanism",
        title: "Adolescent & School Health - Mechanism",
        estimatedMinutes: 30,
        summary: "Developmental changes in adolescence, school health implementation, and evidence-based programs.",
        contentMd: `# Adolescent & School Health - Mechanism

## Developmental Changes in Adolescence
### Physical Development
- **Growth Spurt**: Rapid increase in height and weight
- **Sexual Maturation**: Secondary sexual characteristics, reproductive capacity
- **Hormonal Changes**: Increased androgens, estrogen driving changes
- **Brain Development**: Prefrontal cortex maturation (impulse control, judgment)

### Psychological Development
- **Identity Formation**: Who am I? (Erikson's identity vs. role confusion)
- **Cognitive Development**: Abstract thinking, future planning, moral reasoning
- **Emotional Changes**: Mood swings, increased sensitivity to peer opinion
- **Independence**: Seeking autonomy while still needing family support

### Social Development
- **Peer Influence**: Peers increasingly important; parental influence decreases
- **Risk-Taking**: Experimentation with behaviors (normative for some adolescents)
- **Relationships**: Romantic interests, dating, sexual exploration
- **Social Identity**: Group belonging, subculture adoption

## School Health Implementation
1. **Policy Level**: Integration of health in curriculum, supportive environment
2. **Infrastructure**: Water, sanitation, safe spaces, school clinic
3. **Personnel**: Trained teachers, health workers, counselors
4. **Curriculum**: Age-appropriate health topics delivered regularly
5. **Community**: Parent involvement, linkages with health services
6. **Monitoring**: Regular assessment of health status and program effectiveness

## ARSH Program Implementation
- **School-Based**: Health education, life skills training, menstrual health
- **Community-Based**: Youth centers, peer education, contraceptive services
- **Clinical Services**: STI diagnosis/treatment, contraception provision, pregnancy management
- **Counseling**: One-to-one support for high-risk adolescents
- **Partnership**: Schools, health sector, NGOs, community leaders

## Evidence-Based Interventions
- **Life Skills Education**: Decision-making, communication, coping skills
- **Comprehensive Sex Education**: Evidence shows reduces risky behavior
- **Menstrual Health**: Address stigma, provide hygiene materials
- **Mental Health Support**: Screening, counseling, referral
- **Substance Abuse Prevention**: Information, skill-building, peer support

## Digital Health for Adolescents
- **Mobile Apps**: Health information, symptom checking, appointment booking
- **Online Counseling**: Telemedicine consultations
- **Social Media**: Health information, peer support groups (moderated)
- **Digital Literacy**: Teaching safe internet use, recognizing misinformation
`,
        mnemonics: [
          { text: "Development = Physical (growth) + Psychological (identity) + Social (peer influence)", explanation: "Three domains of adolescent development" },
          { text: "School Health = Policy + Infrastructure + Personnel + Curriculum + Community + Monitoring", explanation: "Six implementation levels" },
          { text: "ARSH = School + Community + Clinical + Counseling (four service delivery points)", explanation: "ARSH implementation approaches" },
        ],
        keyPoints: [
          "Adolescence involves rapid physical, psychological, social changes",
          "Peer influence increases while parental influence decreases",
          "School-based programs reach majority of adolescents during formative years",
          "ARSH integrates education, clinical services, and counseling",
          "Life skills education and comprehensive sex education evidence-based",
        ],
        textbookRefs: [{ book: "Park's Textbook of PSM", chapter: "Ch 15-16", edition: "26th" }],
      },
      {
        layer: 3,
        slug: "adolescent-school-health-clinical",
        title: "Adolescent & School Health - Clinical Applications",
        estimatedMinutes: 28,
        summary: "Counseling adolescents, managing health concerns, and supporting school health implementation.",
        contentMd: `# Adolescent & School Health - Clinical Applications

## Counseling Adolescents
- **Confidentiality**: Create safe, private environment; assure confidentiality
- **Respect**: Acknowledge their autonomy, avoid judgment
- **Active Listening**: Understand concerns, feelings, perspectives
- **Explore Options**: Help think through choices and consequences
- **Support Decision-Making**: Empower them to make informed decisions
- **Follow-up**: Continuity of care, monitoring progress

## Reproductive Health Counseling
- **STI Prevention**: Safer sex practices, abstinence, partner notification
- **Contraception**: Options, efficacy, side effects, access
- **Pregnancy**: Options counseling (continue, adopt, abortion), support services
- **Sexuality**: Address questions, normalize healthy sexual development
- **Consent**: Emphasize importance of consent in sexual relationships

## Mental Health Support
- **Screening**: Assess for depression, anxiety, self-harm, suicidal ideation
- **Early Intervention**: Counseling, psychotherapy, medication if needed
- **Support System**: Family, peers, school, community involvement
- **Crisis Management**: Referral for acute suicidal ideation
- **Follow-up**: Regular monitoring, relapse prevention

## Nutrition Counseling
- **Assessment**: Dietary intake, nutritional status (height, weight, hemoglobin)
- **Anemia Prevention**: Iron supplementation, dietary fortification, dietary counseling
- **Healthy Eating**: Promote balanced diet, reduce junk food, increase fruits/vegetables
- **Body Image**: Address concerns about weight, avoid eating disorders
- **Special Needs**: Athletes, high-risk nutritional deficiencies

## Substance Abuse Prevention and Management
- **Screening**: Assess substance use (tobacco, alcohol, drugs)
- **Brief Intervention**: Motivational counseling, discuss harms, promote cessation
- **Support**: Peer programs, family involvement, referral if addiction
- **School Policy**: Enforce no-tobacco, alcohol rules in school

## Menstrual Health and Hygiene
- **Education**: Normal cycle, duration, variations, what's abnormal
- **Hygiene**: Safe practices (pads, tampons), regular bathing, changing frequency
- **Stigma**: Address myths, encourage normal activities during menstruation
- **Materials**: Provide or subsidize menstrual products
- **Complications**: Screen and manage dysmenorrhea, abnormal bleeding

## Physical Activity Promotion
- **Benefits**: Improves physical health, mental health, academic performance
- **Barriers**: Safety, equipment, cultural norms, time
- **School Role**: Physical education, sports, extracurricular activities
- **Community Role**: Safe places for recreation, sports facilities
- **Individual**: Encourage daily activity, reduce screen time
`,
        mnemonics: [
          { text: "Adolescent Counseling = Confidential + Respectful + Supportive + Non-judgmental", explanation: "Four attributes of effective adolescent counseling" },
          { text: "RH Counseling = STI + Contraception + Pregnancy + Sexuality + Consent (topics)", explanation: "Five reproductive health counseling topics" },
          { text: "Mental Health = Screen + Intervene + Support + Crisis Plan + Follow-up (steps)", explanation: "Mental health support process" },
        ],
        keyPoints: [
          "Confidentiality critical for building trust with adolescents",
          "Reproductive health counseling covers STI, contraception, pregnancy, consent",
          "Early screening for depression and mental health issues important",
          "Nutrition support includes iron supplementation, anemia prevention",
          "Menstrual health promotion reduces stigma and improves hygiene",
        ],
        textbookRefs: [{ book: "Park's Textbook of PSM", chapter: "Ch 15-16", edition: "26th" }],
      },
      {
        layer: 4,
        slug: "adolescent-school-health-exam-prep",
        title: "Adolescent & School Health - Exam Preparation",
        estimatedMinutes: 25,
        summary: "NEXT-pattern exam questions on adolescent development, school health, ARSH programs.",
        contentMd: `# Adolescent & School Health - Exam Preparation

## High-Yield Concepts
1. **Adolescence**: Age 10-19 years; rapid physical, psychological, social development
2. **Major Health Concerns**: Reproductive, nutrition, mental health, substance use, injuries
3. **ARSH**: Adolescent Reproductive Sexual Health program with education + services + counseling
4. **School Health**: Screening, immunization, sanitation, nutrition, health education
5. **Peer Influence**: Increases during adolescence; important in behavior formation
6. **Life Skills**: Decision-making, communication, coping, relationship skills

## Problem-Solving (60%)
- School with high dropout rate among girls. Plan school health intervention.
- Adolescent with irregular menstruation and anemia. Design counseling and management.
- Community with high adolescent pregnancy rate. Design ARSH program.
- Teenage girl with depression and suicidal thoughts. Plan intervention and referral.

## Analysis (30%)
- Compare school-based vs. community-based approaches for ARSH.
- Discuss role of peer influence in adolescent health behaviors.
- Analyze barriers to girls' school enrollment and strategies to improve.
- Evaluate effectiveness of comprehensive sex education in reducing risky behavior.

## Recall (10%)
- Age range for adolescence
- Five components of school health program
- Definition of ARSH
- Three developmental domains in adolescence
- National health programs for adolescents
`,
        mnemonics: [
          { text: "Adolescent Age = 10-19 years (WHO definition)", explanation: "Standard age range" },
          { text: "Health Concerns = Reproductive + Nutrition + Mental + Substance + Injury", explanation: "Five major health concerns" },
          { text: "School Health = Screening + Immunization + Sanitation + Education + Nutrition", explanation: "Five program components" },
        ],
        keyPoints: [
          "Adolescence critical period for habit formation and risk behaviors",
          "Peer influence increasingly important during adolescence",
          "Schools provide efficient reach for health interventions",
          "ARSH integrates education, services, and counseling",
          "Early intervention for mental health issues critical during adolescence",
        ],
        textbookRefs: [{ book: "Park's Textbook of PSM", chapter: "Ch 15-16", edition: "26th" }],
      },
      {
        layer: 5,
        slug: "adolescent-school-health-active-recall",
        title: "Adolescent & School Health - Active Recall",
        estimatedMinutes: 20,
        summary: "Flashcard Q&A for retention and spaced repetition on adolescent and school health.",
        contentMd: `# Adolescent & School Health - Active Recall

## Flashcard Questions & Answers

**Q1: Define adolescence according to WHO.**
A: Period from 10-19 years of age characterized by rapid physical, psychological, social, and cognitive development.

**Q2: List five major health problems in adolescents in India.**
A: (1) Reproductive health (early marriage, STIs, unplanned pregnancy), (2) Anemia/malnutrition, (3) Mental health (depression, suicide), (4) Substance use, (5) Injuries/violence.

**Q3: What is ARSH and what are its three main components?**
A: ARSH = Adolescent Reproductive Sexual Health program. Components: (1) Health education (knowledge, life skills), (2) Clinical services (contraception, STI treatment), (3) Counseling and support.

**Q4: Name five components of comprehensive school health program.**
A: (1) Health screening (vision, hearing, growth), (2) Immunization, (3) Sanitation/WASH, (4) Health education, (5) Nutrition (mid-day meal), (6) Counseling (any five).

**Q5: Why are schools effective setting for adolescent health interventions?**
A: Schools reach majority of adolescents during formative years, provide access to all socioeconomic groups (equity), offer platform for health education, and have multiplier effect (children educate families).

**Q6: What are the key principles of counseling adolescents?**
A: (1) Assure confidentiality, (2) Respect their autonomy, (3) Avoid judgment, (4) Active listening, (5) Non-directive approach helping them explore options.

**Q7: Discuss the role of peer influence in adolescent health behaviors.**
A: Peer influence increases during adolescence. Peers important in forming habits, behaviors, attitudes. Can be protective (healthy peers) or risk factor (substance use peers). Understanding peer influence important for health interventions.

**Q8: What are life skills and why are they taught in schools?**
A: Life skills = decision-making, communication, coping, relationship skills, stress management. Taught because they help adolescents cope with challenges, resist peer pressure, make healthy choices.

**Q9: Describe two developmental changes that occur during adolescence.**
A: (1) Physical: Growth spurt, sexual maturation, hormonal changes. (2) Psychological: Identity formation, abstract thinking, independence seeking. (3) Social: Peer influence increases, romantic interests, risk-taking behavior.

**Q10: How should menstrual health and hygiene be addressed in schools?**
A: Provide health education (normal cycle, variations), address stigma and myths, promote safe hygiene practices, provide or subsidize menstrual products, screen for complications (dysmenorrhea, abnormal bleeding), encourage normal activities during menstruation.
`,
        keyPoints: [
          "Adolescence 10-19 years; critical period for habit/risk behavior formation",
          "Major concerns: reproductive, nutrition, mental, substance use, injuries",
          "ARSH integrates education, clinical services, counseling",
          "Schools provide efficient equitable reach for interventions",
          "Peer influence significant; life skills help resist peer pressure",
        ],
        textbookRefs: [{ book: "Park's Textbook of PSM", chapter: "Ch 15-16", edition: "26th" }],
      },
    ],
  },
  {
    topicCode: "CM-MOD-07-TOP-05",
    layers: [
      {
        layer: 1,
        slug: "disaster-management-foundation",
        title: "Disaster Management - Foundation",
        estimatedMinutes: 25,
        summary: "Introduction to disaster management, types of disasters, and phases of disaster response.",
        contentMd: `# Disaster Management - Foundation

## Definition
Disaster = a serious disruption of normal functioning causing widespread loss of life, property, environment, or livelihood exceeding community's capacity to cope using own resources.

## Types of Disasters
### Natural Disasters
- **Geological**: Earthquakes, tsunamis, landslides, volcanic eruptions
- **Meteorological**: Cyclones, floods, droughts, storms
- **Hydrological**: Floods, tsunamis
- **Biological**: Epidemics, pandemics, pest infestations

### Man-Made Disasters
- **Technological**: Industrial accidents, chemical releases, nuclear accidents
- **Conflicts**: Wars, terrorism, civil unrest
- **Transportation**: Accidents, crashes
- **Environmental**: Pollution, deforestation

## Phases of Disaster Management
1. **Mitigation**: Reduce impact, build resilience (pre-disaster)
2. **Preparedness**: Plan, train, resources (pre-disaster)
3. **Response**: Immediate actions, rescue, relief (during/immediate after)
4. **Recovery**: Restore services, rehabilitation, rebuild (post-disaster)
5. **Rehabilitation**: Return to normalcy

## Disaster Cycle
- **Disaster Impact**: Event causes damage
- **Emergency Phase**: Chaos, multiple casualties, overwhelming demand
- **Relief Phase**: Provide shelter, food, water, basic healthcare
- **Recovery Phase**: Restore infrastructure, normalcy
- **Development Phase**: Rebuild, improve preparedness

## Scale of Disaster Impact
- **Deaths**: Immediate and long-term mortality
- **Injuries**: Physical and psychological injuries
- **Displacement**: Loss of shelter, migration
- **Economic Loss**: Infrastructure damage, productivity loss
- **Environmental Damage**: Contamination, resource depletion
- **Psychosocial**: Trauma, mental health disorders, grief

## Vulnerable Populations in Disasters
- **Children**: Separated from families, malnutrition, disease
- **Elderly**: Health conditions, mobility issues, dependency
- **Disabled**: Access barriers, special needs
- **Women**: Violence, reproductive health needs
- **Poor**: Limited resources, inadequate shelter
- **Marginalized**: Discrimination in relief distribution
`,
        mnemonics: [
          { text: "Natural Disasters = Geological + Meteorological + Hydrological + Biological", explanation: "Four types of natural disasters" },
          { text: "Disaster Phases = Mitigation → Preparedness → Response → Recovery → Rehabilitation", explanation: "Five phases of disaster management cycle" },
          { text: "Vulnerable = Children + Elderly + Disabled + Women + Poor + Marginalized", explanation: "Populations at increased risk in disasters" },
        ],
        keyPoints: [
          "Disaster = serious disruption exceeding community's coping capacity",
          "Natural disasters include earthquakes, floods, cyclones, epidemics",
          "Man-made disasters include accidents, conflicts, technological failures",
          "Five phases: mitigation, preparedness, response, recovery, rehabilitation",
          "Vulnerable populations need special attention in disaster response",
        ],
        textbookRefs: [{ book: "Park's Textbook of PSM", chapter: "Ch 23", edition: "26th" }],
      },
      {
        layer: 2,
        slug: "disaster-management-mechanism",
        title: "Disaster Management - Mechanism",
        estimatedMinutes: 30,
        summary: "Disaster risk reduction, triage systems, mass casualty management, and coordination frameworks.",
        contentMd: `# Disaster Management - Mechanism

## Disaster Risk Reduction (DRR)
- **Risk = Hazard × Vulnerability × Exposure**
- **Mitigation**: Reduce hazard impact (earthquake-proof buildings, flood barriers)
- **Preparedness**: Planning, training, drills, stockpiling supplies
- **Early Warning**: Systems to alert public before impact
- **Community-Based**: Involve communities in risk assessment and planning

## Triage Systems
### START Triage (Simple Triage and Rapid Treatment)
- **Immediate (Red)**: Life-threatening, salvageable (airway, breathing, circulation issues)
- **Delayed (Yellow)**: Serious but stable; can wait hours
- **Minor (Green)**: Walking wounded; minor injuries
- **Expectant (Black)**: Dead or unsurvivable injuries
- **Used**: Rapid field assessment in mass casualty situations

### Triage Categories Assessment
1. **Respiratory Effort**: Normal → Immediate. Abnormal (stridor, severe respiratory distress) → Immediate
2. **Perfusion**: Normal → Check mental status. Abnormal (pale, cool, cap refill >2 sec) → Immediate
3. **Mental Status**: Alert → Minor or Delayed. Unresponsive/altered → Immediate

## Mass Casualty Management
- **Incident Command System (ICS)**: Clear chain of command, defined roles
- **Coordination**: Police, military, civil administration, health sector
- **Field Medical Care**: First aid, stabilization, transport to hospitals
- **Hospital Response**: Mass causality protocol, surge capacity
- **Supply Chain**: Equipment, drugs, blood, vaccines distributed
- **Communication**: Between rescue teams, hospitals, command center
- **Documentation**: Casualty tracking, family reunification

## Disaster Healthcare Response
1. **Search and Rescue**: Immediate extrication of survivors
2. **First Aid**: Provision of basic life support at site
3. **Field Hospitals**: Set up temporary medical facilities
4. **Hospital Preparedness**: Activate disaster protocols, arrange beds
5. **Referral**: Transport to distant hospitals if local overwhelmed
6. **Management**: Treat injuries, prevent disease, provide water, food, shelter
7. **Surveillance**: Monitor for communicable disease, mental health issues

## Water, Sanitation, and Disease Control
- **Water Supply**: Boiled/purified water provision; prevent contamination
- **Sanitation**: Latrines, waste management, hygiene promotion
- **Disease Control**: Immunization (if diarrhea/cholera risk), disease surveillance
- **Food Safety**: Ensure safe food preparation and distribution
- **Hygiene**: Promote handwashing, personal cleanliness

## Psychosocial Support
- **Immediate**: Psychological first aid, reunion with families
- **Short-term**: Counseling, support groups, information provision
- **Medium-term**: Mental health services, grief counseling
- **Long-term**: PTSD treatment, rehabilitation, community rebuilding
`,
        mnemonics: [
          { text: "START Triage = Immediate (Red) → Delayed (Yellow) → Minor (Green) → Expectant (Black)", explanation: "Four triage categories by color" },
          { text: "Risk = Hazard × Vulnerability × Exposure (multiplicative)", explanation: "Disaster risk formula" },
          { text: "ICS = Clear chain of command, defined roles, coordination (Incident Command System)", explanation: "Key principle for mass casualty management" },
        ],
        keyPoints: [
          "Disaster risk reduction includes hazard mitigation, preparedness, early warning",
          "START triage allows rapid assessment in mass casualty situations",
          "Triage based on respiratory status, perfusion, mental status",
          "Incident Command System ensures clear coordination in mass disasters",
          "Psychosocial support important throughout disaster cycle",
        ],
        textbookRefs: [{ book: "Park's Textbook of PSM", chapter: "Ch 23", edition: "26th" }],
      },
      {
        layer: 3,
        slug: "disaster-management-clinical",
        title: "Disaster Management - Clinical Applications",
        estimatedMinutes: 28,
        summary: "Disaster preparedness planning, community involvement, and managing specific disaster types.",
        contentMd: `# Disaster Management - Clinical Applications

## Hospital Disaster Preparedness
- **Disaster Plan**: Written protocols, roles defined, communication systems
- **Drills and Training**: Regular simulation exercises for staff
- **Supplies**: Stockpiling medicines, equipment, blood, vaccines
- **Surge Capacity**: Ability to increase beds, staff during mass casualty
- **External Communication**: Coordination with other hospitals, agencies
- **Documentation System**: Tracking casualties, outcomes, family reunion

## Community-Based Disaster Preparedness
- **Community Assessment**: Identify hazards, vulnerabilities, resources
- **Disaster Plan**: Develop with community participation
- **Training**: First aid, rescue techniques, psychological support
- **Warning Systems**: Early alert mechanisms, escape routes
- **Shelters**: Identified, stocked with supplies
- **Resources**: Stockpiled medicines, food, water, blankets

## Managing Specific Disaster Types
### Earthquake Response
- Search and rescue from debris
- Treat crush injuries, fractures, head injuries
- Prevent communicable diseases in crowded shelters
- Provide psychological support for trauma

### Flood Disaster
- Water sanitation; prevent waterborne disease (cholera, typhoid)
- Vector control for mosquito-borne diseases
- Nutrition support; malaria/dengue surveillance
- Mental health support for displacement trauma

### Cyclone Disaster
- Wind injury management; storm surge casualties
- Disease control (malaria, dengue from stagnant water)
- Water and sanitation in post-storm situation
- Psychological support for displaced population

### Epidemic/Pandemic Response
- Case identification and isolation
- Contact tracing and quarantine
- Testing, treatment, vaccination
- PPE and infection control for healthcare workers
- Communication to prevent misinformation and panic

## Vulnerable Group Support
- **Children**: Tracing, reunification, psychosocial support, nutrition
- **Elderly**: Healthcare maintenance, mobility support, psychosocial care
- **Pregnant Women**: ANC, normal delivery services, postpartum care
- **Disabled**: Accessibility of shelters, accommodations, support services
- **Women**: Safety, privacy, reproductive health services
- **Marginalized**: Inclusion in relief distribution, anti-discrimination

## Disaster Recovery and Rehabilitation
- **Immediate**: Restore essential services (water, sanitation, healthcare)
- **Short-term**: Rebuild healthcare facilities, restart public health programs
- **Medium-term**: Restore education, livelihood, housing
- **Long-term**: Build back better, strengthen resilience
- **Development**: Incorporate lessons learned in development planning

## International Health Response
- **WHO Support**: Guidelines, technical assistance, resource coordination
- **SPHERE Standards**: Minimum standards for humanitarian response
- **Rights-Based Approach**: Respect dignity, participation, equity
- **Coordination**: With UN agencies, NGOs, local authorities
`,
        mnemonics: [
          { text: "Hospital Preparedness = Plan + Drills + Supplies + Surge Capacity + Communication + Tracking", explanation: "Six components of hospital disaster plan" },
          { text: "Community Preparedness = Assessment + Plan + Training + Warnings + Shelters + Stocks", explanation: "Six elements of community disaster plan" },
          { text: "Vulnerable Groups = Children + Elderly + Disabled + Women + Poor + Marginalized (attention)", explanation: "Populations needing special support" },
        ],
        keyPoints: [
          "Hospital disaster preparedness includes written plan, drills, surge capacity",
          "Community-based approach with participation in planning and training",
          "Specific disaster types require tailored response strategies",
          "Vulnerable populations need special attention and support",
          "Recovery and rehabilitation should build resilience for future",
        ],
        textbookRefs: [{ book: "Park's Textbook of PSM", chapter: "Ch 23", edition: "26th" }],
      },
      {
        layer: 4,
        slug: "disaster-management-exam-prep",
        title: "Disaster Management - Exam Preparation",
        estimatedMinutes: 25,
        summary: "NEXT-pattern exam questions on disaster types, triage, mass casualty management, and preparedness.",
        contentMd: `# Disaster Management - Exam Preparation

## High-Yield Concepts
1. **Definition**: Serious disruption exceeding community's capacity to cope
2. **Types**: Natural (earthquakes, floods, cyclones, epidemics); Man-made (accidents, conflicts)
3. **Phases**: Mitigation → Preparedness → Response → Recovery → Rehabilitation
4. **START Triage**: Red (immediate), Yellow (delayed), Green (minor), Black (expectant)
5. **Triage Assessment**: Respiratory status → Perfusion → Mental status
6. **Mass Casualty Management**: ICS system, coordination, surge capacity

## Problem-Solving (60%)
- Community in earthquake-prone area. Design disaster preparedness program.
- Hospital receives 100 casualties from flood. Design triage and management.
- Use START triage to categorize: Patient A (normal respiration, alert, normal perfusion), Patient B (respiratory distress, altered mental status).
- Design response for epidemic in resource-limited setting.

## Analysis (30%)
- Compare vulnerability in natural vs. man-made disasters.
- Discuss role of community participation in disaster risk reduction.
- Analyze triage system effectiveness in resource-limited settings.
- Evaluate disaster recovery strategies for building resilience.

## Recall (10%)
- Definition of disaster
- Five phases of disaster management cycle
- START triage categories and colors
- Components of hospital disaster preparedness
- Vulnerable populations in disasters
`,
        mnemonics: [
          { text: "Disaster Phases = Miti → Prep → Resp → Reco → Rehab (cycle)", explanation: "Five phases in order" },
          { text: "START = Respiratory → Perfusion → Mental Status (assessment order)", explanation: "Triage assessment sequence" },
          { text: "ICS = Incident Command System (clear chain, coordination, roles defined)", explanation: "Key for mass casualty management" },
        ],
        keyPoints: [
          "Disaster definition: serious disruption exceeding coping capacity",
          "Natural disasters: earthquakes, floods, cyclones, epidemics",
          "START triage: Red (immediate), Yellow (delayed), Green (minor), Black (expectant)",
          "Triage based on respiratory status, perfusion, mental status",
          "Hospital preparedness includes plan, drills, supplies, surge capacity",
        ],
        textbookRefs: [{ book: "Park's Textbook of PSM", chapter: "Ch 23", edition: "26th" }],
      },
      {
        layer: 5,
        slug: "disaster-management-active-recall",
        title: "Disaster Management - Active Recall",
        estimatedMinutes: 20,
        summary: "Flashcard Q&A for retention and spaced repetition on disaster management concepts.",
        contentMd: `# Disaster Management - Active Recall

## Flashcard Questions & Answers

**Q1: Define disaster.**
A: Serious disruption of normal functioning causing widespread loss of life, property, environment, or livelihood that exceeds the community's capacity to cope using its own resources.

**Q2: List four types of natural disasters.**
A: (1) Geological (earthquakes, tsunamis, volcanic eruptions), (2) Meteorological (cyclones, floods, droughts), (3) Hydrological (floods, tsunamis), (4) Biological (epidemics, pandemics).

**Q3: Name the five phases of disaster management.**
A: (1) Mitigation (reduce impact), (2) Preparedness (plan, train, stockpile), (3) Response (rescue, relief immediate), (4) Recovery (restore services), (5) Rehabilitation (rebuild and return to normal).

**Q4: Describe the START triage system and its four categories.**
A: START = Simple Triage and Rapid Treatment. Four categories: (1) Red/Immediate (life-threatening but salvageable), (2) Yellow/Delayed (serious but stable), (3) Green/Minor (walking wounded), (4) Black/Expectant (dead or unsurvivable).

**Q5: Explain the assessment order in START triage.**
A: (1) Respiratory Status: If severe distress/abnormal → Immediate. (2) Perfusion: If pale, cool, cap refill >2 sec → Immediate. (3) Mental Status: If unresponsive/altered → Immediate. Alert with normal breathing/perfusion → Yellow or Green.

**Q6: What is the Incident Command System (ICS)?**
A: Organizational system that establishes clear chain of command, defines roles and responsibilities, and ensures coordination of multiple agencies during mass casualty/disaster events.

**Q7: List six components of hospital disaster preparedness.**
A: (1) Written disaster plan with protocols, (2) Regular drills and staff training, (3) Stockpiling medicines and equipment, (4) Surge capacity planning, (5) External communication systems, (6) Documentation and casualty tracking system.

**Q8: Name four vulnerable populations in disasters and why they need special attention.**
A: (1) Children (family separation, malnutrition), (2) Elderly (health conditions, mobility), (3) Disabled (access barriers, special needs), (4) Women (violence, reproductive health), (5) Poor (limited resources), (6) Marginalized (discrimination).

**Q9: What are the main public health priorities in immediate post-disaster response?**
A: (1) Water and sanitation (prevent waterborne disease), (2) Food and nutrition, (3) Healthcare services, (4) Disease surveillance, (5) Shelter and hygiene, (6) Psychosocial support.

**Q10: Explain the relationship between hazard, vulnerability, and disaster risk.**
A: Disaster Risk = Hazard × Vulnerability × Exposure. Higher hazard (severe event), higher vulnerability (weak coping capacity), or greater exposure (population in harm's way) = greater disaster risk. Reducing any component reduces overall risk.
`,
        keyPoints: [
          "Disaster = serious disruption exceeding community's coping capacity",
          "Natural disasters include earthquakes, floods, cyclones, epidemics",
          "Five phases: mitigation, preparedness, response, recovery, rehabilitation",
          "START triage: Red (immediate), Yellow (delayed), Green (minor), Black (expectant)",
          "ICS ensures clear coordination in mass casualty situations",
        ],
        textbookRefs: [{ book: "Park's Textbook of PSM", chapter: "Ch 23", edition: "26th" }],
      },
    ],
  },
  {
    topicCode: "CM-MOD-07-TOP-06",
    layers: [
      {
        layer: 1,
        slug: "geriatric-palliative-care-community-foundation",
        title: "Geriatric & Palliative Care in Community - Foundation",
        estimatedMinutes: 25,
        summary: "Introduction to geriatric health, palliative care principles, and community-based care models.",
        contentMd: `# Geriatric & Palliative Care in Community - Foundation

## Definitions
- **Geriatrics**: Medical care of elderly (>60 years in India, >65 in developed countries)
- **Palliative Care**: Holistic care for incurable, terminal illness aimed at quality of life and comfort
- **Community-Based Care**: Healthcare delivered in home and community settings rather than institutions

## Aging Demographics in India
- **Elderly Population**: ~10% of population (>140 million); increasing rapidly
- **Urbanization**: Breakdown of joint family; increased elderly living alone
- **Healthcare Challenge**: Limited geriatric services, untrained workforce
- **Burden of Illness**: Multiple chronic conditions, functional limitations

## Geriatric Health Problems
- **Chronic Diseases**: Hypertension, diabetes, heart disease, cancer, arthritis
- **Functional Decline**: Mobility, ADL (activities of daily living), cognitive function
- **Mental Health**: Depression, cognitive impairment, dementia, behavioral issues
- **Social Issues**: Isolation, dependency, financial stress, abuse/neglect
- **Geriatric Syndromes**: Falls, incontinence, malnutrition, pressure ulcers
- **Medication Issues**: Polypharmacy, adverse effects, non-adherence

## Palliative Care Principles
1. **Whole Person Care**: Address physical, emotional, social, spiritual needs
2. **Symptom Management**: Pain, dyspnea, nausea, other distressing symptoms
3. **Dignity and Autonomy**: Respect patient wishes, shared decision-making
4. **Family Support**: Include family in care, provide counseling
5. **Team Approach**: Doctors, nurses, social workers, spiritual advisors
6. **Continuity of Care**: From diagnosis through death and bereavement

## End-of-Life Care Issues in India
- **Communication**: Difficulty discussing death, cultural/religious considerations
- **Decision-Making**: Who decides? Advanced directives uncommon
- **Pain Management**: Opioid availability issues, prescriber reluctance
- **Spiritual Care**: Religious practices important for many
- **Bereavement**: Family support, grief counseling post-death

## Community-Based Geriatric Services
- **Home-Based Care**: Nursing care, monitoring, rehabilitation at home
- **Day Centers**: Social engagement, activities, health monitoring
- **Community Health Workers**: ANM, ASHA provide basic care
- **Volunteer Support**: Community members assist with care
- **Telemedicine**: Remote consultations for homebound elderly
`,
        mnemonics: [
          { text: "Geriatrics = Medicine for elderly (>60 in India)", explanation: "Definition of geriatric medicine" },
          { text: "Palliative Care = Comfort + Symptom Relief + Quality of Life (not cure)", explanation: "Focus of palliative care" },
          { text: "Geriatric Syndromes = Falls + Incontinence + Malnutrition + Pressure Ulcers (common)", explanation: "Four common geriatric syndromes" },
        ],
        keyPoints: [
          "Elderly population in India >140 million and rapidly increasing",
          "Geriatric problems include chronic diseases, functional decline, mental health",
          "Palliative care focuses on comfort and quality of life for terminal illness",
          "Community-based care provides home-based services and support",
          "End-of-life care requires cultural sensitivity and communication",
        ],
        textbookRefs: [{ book: "Park's Textbook of PSM", chapter: "Ch 18-19", edition: "26th" }],
      },
      {
        layer: 2,
        slug: "geriatric-palliative-care-community-mechanism",
        title: "Geriatric & Palliative Care in Community - Mechanism",
        estimatedMinutes: 30,
        summary: "Comprehensive geriatric assessment, palliative care models, and community service delivery.",
        contentMd: `# Geriatric & Palliative Care in Community - Mechanism

## Comprehensive Geriatric Assessment (CGA)
- **Physical Health**: History, examination, functional status (ADL, IADL)
- **Mental Health**: Cognition (MMSE), mood (depression), behavioral issues
- **Social Assessment**: Living situation, family support, financial status
- **Medications Review**: Drug interactions, appropriateness, side effects
- **Nutritional Status**: Weight, dietary intake, swallowing ability
- **Sensory Function**: Vision, hearing assessment
- **Fall Risk**: Balance, mobility, home hazards
- **Outcomes**: Individualized care plan, resource coordination

## Activities of Daily Living (ADL) vs. Instrumental ADL
- **ADL**: Basic self-care (bathing, dressing, toileting, feeding, continence, transfer)
- **IADL**: Functional independence (cooking, shopping, managing finances, medications)
- **Assessment**: Determines level of care needed, caregiver support
- **Outcome**: Used to plan community services and support

## Palliative Care Models
### Hospital-Based Palliative Care
- **Inpatient Units**: Dedicated beds for symptom management
- **Consultation Service**: Support to patients with incurable disease
- **Day Centers**: Outpatient palliative care services

### Community-Based Palliative Care
- **Home Care**: Nurses visit for symptom management, wound care
- **Hospice**: In-home or facility-based end-of-life care
- **Mobile Teams**: Travel to homes to provide care

### Primary Care Integration
- **General Practitioners**: Provide palliative care alongside curative treatment
- **Training**: GPs need skills in symptom management and communication
- **Coordination**: Referral to specialists when needed

## Symptom Management in Palliative Care
- **Pain**: WHO analgesic ladder (non-opioid → weak opioid → strong opioid)
- **Dyspnea**: Oxygen, bronchodilators, opioids, fan, positioning
- **Nausea/Vomiting**: Anti-emetics, dietary modifications, relaxation
- **Constipation**: Laxatives, stool softeners, hydration, mobility
- **Insomnia**: Sleep hygiene, medication review, relaxation
- **Anxiety/Depression**: Counseling, medication, spiritual support

## Family and Caregiver Support
- **Education**: Teach care skills (hygiene, feeding, medication administration)
- **Counseling**: Support with emotional burden, grief, coping
- **Respite Care**: Temporary relief from caregiving responsibilities
- **Support Groups**: Peer support with others in similar situations
- **Bereavement**: Continue support after patient's death

## Community Service Models
- **Primary Health Centers (PHC)**: Basic geriatric care, health education
- **Sub-centers**: ASHA/ANM provide home visits, basic care
- **NGO Programs**: Elderly care centers, day programs, home-based care
- **Government Programs**: Pension schemes, health schemes (PMJAY), old age homes
- **Volunteer Networks**: Community members trained to support elderly

## Technology in Community Geriatric Care
- **Telemedicine**: Remote consultation for isolated elderly
- **Wearable Devices**: Fall detection, health monitoring
- **Medication Apps**: Reminder systems, drug interaction checker
- **Communication Apps**: Easy contact with healthcare providers
`,
        mnemonics: [
          { text: "CGA = Physical + Mental + Social + Meds + Nutrition + Sensory + Fall Risk", explanation: "Seven domains of comprehensive geriatric assessment" },
          { text: "ADL = Bathing, Dressing, Toileting, Feeding, Continence, Transfer (basic)", explanation: "Six activities of daily living" },
          { text: "Pain Ladder = Non-opioid → Weak Opioid → Strong Opioid (WHO ladder)", explanation: "Approach to pain management" },
        ],
        keyPoints: [
          "CGA comprehensive assessment including physical, mental, social, functional status",
          "ADL and IADL assess functional independence and care needs",
          "Palliative care models: hospital-based, community-based, hospice",
          "Symptom management using WHO guidelines for pain and other symptoms",
          "Family/caregiver support essential for sustaining community-based care",
        ],
        textbookRefs: [{ book: "Park's Textbook of PSM", chapter: "Ch 18-19", edition: "26th" }],
      },
      {
        layer: 3,
        slug: "geriatric-palliative-care-community-clinical",
        title: "Geriatric & Palliative Care in Community - Clinical Applications",
        estimatedMinutes: 28,
        summary: "Managing elderly in community settings, end-of-life communication, and nursing care.",
        contentMd: `# Geriatric & Palliative Care in Community - Clinical Applications

## Assessment and Planning
- **Home Visit**: Assess physical environment, safety, accessibility
- **Functional Capacity**: Determine ability to perform ADL, IADL
- **Social Support**: Family availability, financial resources, community services
- **Medical Conditions**: Manage chronic diseases, prevent complications
- **Care Plan**: Individualized plan with patient/family involvement
- **Monitoring**: Regular follow-up, adjust plan as needs change

## Managing Chronic Diseases in Elderly
- **Hypertension**: Control, prevent stroke/MI, avoid over-treatment
- **Diabetes**: Achieve reasonable control, prevent hypoglycemia, foot care
- **Heart Disease**: Limit activity appropriately, medication management
- **Arthritis**: Pain control, mobility support, assistive devices
- **Dementia**: Support function, behavior management, caregiver support
- **Cancer**: Symptom relief, supportive care, quality of life focus

## Pain Management
- **Assessment**: Use appropriate pain scales (numeric, visual), assess impact
- **Non-Pharmacological**: Hot/cold, positioning, massage, distraction, counseling
- **Pharmacological**: Start low, go slow (elderly sensitive to drugs)
- **Opioids**: Use when needed for moderate-severe pain (ensure availability)
- **Monitoring**: Regular assessment for effectiveness and side effects

## End-of-Life Communication
- **Prognostication**: Discuss realistic expectations about disease course
- **Patient Wishes**: Explore what matters to patient (values, goals, preferences)
- **Advance Directives**: Document decisions about resuscitation, life support
- **DNR Orders**: Respect patient's decision not to pursue aggressive intervention
- **Spiritual Support**: Facilitate religious practices, involve spiritual advisors
- **Family Conferences**: Discuss plan with family, address concerns

## Nursing Care in Community
- **Hygiene**: Bathing, grooming, catheter care, pressure ulcer prevention
- **Nutrition**: Safe feeding, food preparation, nutritional supplementation
- **Medications**: Adherence support, managing polypharmacy, education
- **Mobility**: Positioning, transfers, preventing falls, range of motion
- **Wound Care**: Dressing changes, infection prevention, monitoring
- **Catheter Care**: Urinary catheter management, prevent infection
- **Psychological**: Emotional support, addressing fears, maintaining dignity

## Managing Geriatric Syndromes
- **Falls**: Environmental modification, strength/balance training, medication review
- **Incontinence**: Pelvic floor exercises, scheduled toileting, absorbent products
- **Malnutrition**: Easy-to-eat foods, supplements, swallowing assessment
- **Pressure Ulcers**: Frequent repositioning, nutrition, skin care, special mattresses
- **Cognitive Impairment**: Orientation, simple tasks, safe environment, caregiver support
- **Depression**: Screen with PHQ-9, counseling, medication, activity engagement

## Social Support and Integration
- **Community Engagement**: Day centers, volunteer activities, social groups
- **Intergenerational Programs**: Activities with children, storytelling, mentoring
- **Peer Support**: Older adult groups, walking clubs, hobby groups
- **Financial Support**: Pension schemes, health insurance, assistance programs
- **Legal Support**: Will preparation, guardianship, elder abuse prevention

## Bereavement Care
- **Immediate Support**: Presence, listening, practical help
- **Follow-up**: Contact at significant dates, monitoring for complicated grief
- **Counseling**: Professional support if needed
- **Support Groups**: Grief support groups with others experiencing loss
`,
        mnemonics: [
          { text: "Pain Management = Assessment + Non-Pharm + Pharm + Monitoring (approach)", explanation: "Four components of pain management" },
          { text: "EOL Communication = Prognosis + Wishes + Directives + DNR + Spiritual + Family", explanation: "Six elements of end-of-life discussion" },
          { text: "Geriatric Syndromes = Falls + Incontinence + Malnutrition + Pressure + Cognitive + Depression", explanation: "Six common syndromes" },
        ],
        keyPoints: [
          "Home assessment essential for planning community-based care",
          "Chronic disease management: treat appropriately, avoid over-treatment",
          "Pain management: non-pharmacological + pharmacological approaches",
          "End-of-life communication: discuss prognosis, patient wishes, advance directives",
          "Nursing care includes hygiene, nutrition, medication, mobility, wound care",
        ],
        textbookRefs: [{ book: "Park's Textbook of PSM", chapter: "Ch 18-19", edition: "26th" }],
      },
      {
        layer: 4,
        slug: "geriatric-palliative-care-community-exam-prep",
        title: "Geriatric & Palliative Care in Community - Exam Preparation",
        estimatedMinutes: 25,
        summary: "NEXT-pattern exam questions on geriatric assessment, palliative care, community service delivery.",
        contentMd: `# Geriatric & Palliative Care in Community - Exam Preparation

## High-Yield Concepts
1. **Geriatrics**: Medical care of elderly (>60 years in India)
2. **Elderly Population**: >140 million in India, rapidly increasing
3. **CGA**: Comprehensive assessment of physical, mental, social, functional status
4. **ADL**: Six basic activities (bathing, dressing, toileting, feeding, continence, transfer)
5. **Palliative Care**: Comfort, symptom relief, quality of life (not cure)
6. **Community-Based Care**: Home-based, day centers, hospice, primary care integration

## Problem-Solving (60%)
- 75-year-old with hypertension, diabetes, arthritis, living alone. Plan community care.
- Patient with terminal cancer experiencing severe pain. Design pain management plan.
- Elderly with functional decline; family requesting home-based care. Plan services.
- Design end-of-life communication for patient with advanced dementia.

## Analysis (30%)
- Compare hospital-based vs. community-based palliative care models.
- Discuss barriers to community geriatric care in India and solutions.
- Analyze role of family/caregivers in sustaining community-based care.
- Evaluate approach to managing multiple chronic conditions in elderly.

## Recall (10%)
- Definition of geriatrics and palliative care
- Six components of ADL
- Comprehensive Geriatric Assessment domains
- WHO pain management ladder
- Common geriatric syndromes
`,
        mnemonics: [
          { text: "Elderly India = >140 million, >60 years, rapidly increasing", explanation: "Demographics of Indian elderly" },
          { text: "CGA = Physical + Mental + Social + Meds + Nutrition + Sensory + Fall", explanation: "Seven CGA domains" },
          { text: "Care Models = Hospital + Community + Hospice + Primary Care Integration", explanation: "Four palliative care models" },
        ],
        keyPoints: [
          "Geriatrics care for >60 years; elderly population rapidly increasing in India",
          "CGA comprehensive assessment including functional, mental, social status",
          "Palliative care focuses on comfort and quality of life, not cure",
          "Community-based care more sustainable and cost-effective than institutional",
          "Family/caregiver support essential for community care success",
        ],
        textbookRefs: [{ book: "Park's Textbook of PSM", chapter: "Ch 18-19", edition: "26th" }],
      },
      {
        layer: 5,
        slug: "geriatric-palliative-care-community-active-recall",
        title: "Geriatric & Palliative Care in Community - Active Recall",
        estimatedMinutes: 20,
        summary: "Flashcard Q&A for retention and spaced repetition on geriatric and palliative care.",
        contentMd: `# Geriatric & Palliative Care in Community - Active Recall

## Flashcard Questions & Answers

**Q1: Define geriatrics in the Indian context.**
A: Medical specialty focused on care of elderly persons >60 years of age in India (>65 years in developed countries). Addresses unique health needs and challenges of older adults.

**Q2: What are seven domains of Comprehensive Geriatric Assessment (CGA)?**
A: (1) Physical health (history, exam, function), (2) Mental health (cognition, mood), (3) Social assessment (living situation, support), (4) Medications review, (5) Nutritional status, (6) Sensory function, (7) Fall risk assessment.

**Q3: List the six activities of daily living (ADL).**
A: (1) Bathing, (2) Dressing, (3) Toileting, (4) Feeding, (5) Continence, (6) Transferring (bed to chair). These basic self-care activities determine level of care needed.

**Q4: Differentiate between ADL and IADL.**
A: ADL (Activities of Daily Living) = basic self-care (bathing, dressing). IADL (Instrumental ADL) = functional independence (cooking, shopping, managing finances, medications).

**Q5: Define palliative care and its main principles.**
A: Holistic care for patients with incurable, terminal illness aimed at comfort and quality of life. Principles: (1) Whole person care, (2) Symptom management, (3) Dignity/autonomy, (4) Family support, (5) Team approach.

**Q6: What is the WHO pain management ladder for palliative care?**
A: (1) Non-opioid analgesics (acetaminophen, NSAIDs), (2) Weak opioids (codeine) for mild-moderate pain, (3) Strong opioids (morphine) for moderate-severe pain. Escalate as pain increases.

**Q7: List four models of palliative care delivery.**
A: (1) Hospital-based inpatient units and consultation services, (2) Community-based home care, (3) Hospice programs, (4) Integration into primary care.

**Q8: What should be discussed in end-of-life communication with elderly patients?**
A: (1) Prognostication (realistic disease course), (2) Patient's wishes and values, (3) Advance directives, (4) DNR (Do Not Resuscitate) orders, (5) Spiritual/religious preferences, (6) Family concerns/involvement.

**Q9: Name five common geriatric syndromes and one management approach for each.**
A: (1) Falls (environmental modification, strength training), (2) Incontinence (pelvic floor exercises, scheduled toileting), (3) Malnutrition (easy-to-eat foods, supplements), (4) Pressure ulcers (frequent repositioning, nutrition), (5) Cognitive impairment (orientation, safe environment).

**Q10: What are the main components of community-based geriatric care?**
A: (1) Home-based nursing care, (2) Primary health center services, (3) Day centers for social engagement, (4) Community health worker support (ASHA, ANM), (5) Volunteer networks, (6) Caregiver training and support, (7) Linkage with health and social services.
`,
        keyPoints: [
          "Geriatrics care for >60 years; elderly population in India rapidly increasing",
          "CGA comprehensive assessment covering physical, mental, social, functional domains",
          "ADL basic self-care; IADL functional independence activities",
          "Palliative care focuses on comfort, symptom relief, quality of life",
          "Community-based care sustainable through home visits, day centers, trained workers",
        ],
        textbookRefs: [{ book: "Park's Textbook of PSM", chapter: "Ch 18-19", edition: "26th" }],
      },
    ],
  },
];
