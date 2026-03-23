import type { TopicLessons } from "./content-loader";

export const communityMedicinePart5Lessons: TopicLessons[] = [
  {
    topicCode: "CM-MOD-01-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "disease-frequency-layer-1-foundation",
        title: "Measures of Disease Frequency - Foundation",
        estimatedMinutes: 25,
        summary: "Overview of prevalence, incidence, rates, and ratios used in epidemiology.",
        contentMd: `# Measures of Disease Frequency - Foundation

## Concept of Disease Frequency
**Disease frequency**: Occurrence of disease in populations expressed as counts or proportions.

**Purpose**: Allow comparison of disease burden across populations, time periods, and between exposed and unexposed groups.

## Basic Definitions

### Prevalence
**Definition**: Proportion of population with disease at a specific point in time (point prevalence) or during a period (period prevalence).

Formula: Prevalence = Number with disease at specific time / Total population at that time × 100 or 1000

**Characteristics**:
- Dimensionless (expressed as percentage or per 1000)
- Measures existing cases (old and new)
- Used for healthcare planning, resource allocation
- Higher in chronic diseases

### Incidence
**Definition**: Number of new cases of disease arising in an at-risk population during a specified time period.

Formula: Incidence rate = Number of new cases during period / Population at risk during same period × (base)

**Characteristics**:
- Has time dimension (measured over specific period)
- Measures only new cases
- More difficult to measure (requires follow-up)
- Better indicator of disease risk
- Essential for causality assessment

### Difference Between Prevalence and Incidence
- **Prevalence = Incidence × Duration**
- Chronic diseases: high prevalence, low incidence
- Acute diseases: low prevalence, high incidence

## Rates and Ratios

### Rate
**Definition**: Measure of frequency with time component; numerator is count of events, denominator is population at risk over specified time.

**Components**: Numerator, denominator, time period, specified population, multiplier (base)

**Types**:
- Crude rate: Total events / Total population
- Specific rate: Events in subgroup / Population in subgroup
- Adjusted rate: Weighted average of specific rates

### Ratio
**Definition**: Comparison of two quantities; may or may not have time component.

Formula: Ratio = A / B

**Does not require**: Population at risk in denominator; time component

**Example of ratio**: Sex ratio, death-to-case ratio

## Important Disease Frequency Measures

### Cumulative Incidence
- Proportion developing disease in defined population during specific period
- Formula: (Number of new cases / Population at start of period) × 100
- Expressed as percentage

### Incidence Density
- Number of new cases per person-time of observation
- Formula: Number of new cases / Total person-years of observation
- Accounts for varying follow-up duration
- More precise measure

### Case Fatality Rate (CFR)
- Proportion of cases who die from the disease
- Formula: (Deaths from disease / Total cases) × 100
- Expressed as percentage
- Indicates disease severity

### Mortality Rate
- Deaths in population / Total population × base (usually per 1000)
- Can be specific (age-specific, cause-specific, occupation-specific)

### Morbidity Rate
- Number of new cases of disease / Population at risk
- Similar to incidence; often used interchangeably

### Birth Rate
- Number of live births / Total mid-year population × 1000 per year

### Death Rate (Crude Mortality Rate)
- Total deaths / Total mid-year population × 1000 per year

### Infant Mortality Rate (IMR)
- Deaths in children <1 year / Live births in same year × 1000
- Key indicator of population health

### Maternal Mortality Ratio (MMR)
- Maternal deaths per 100,000 live births
- Includes pregnancy-related deaths during pregnancy, childbirth, within 42 days of termination
`,
        mnemonics: [
          {
            text: "Prevalence vs Incidence = Prevalence (snapshot at point/period), Incidence (new cases over time)",
            explanation: "Key distinction between two measures"
          },
          {
            text: "Disease Frequency Formula = (Events / At-Risk Population) × Base",
            explanation: "Basic structure for calculating any frequency measure"
          },
          {
            text: "P = I × D = Prevalence = Incidence × Duration of disease",
            explanation: "Mathematical relationship"
          }
        ],
        keyPoints: [
          "Prevalence measures existing cases; incidence measures new cases",
          "Prevalence depends on incidence and duration of disease",
          "Incidence better reflects causality and disease risk",
          "Rates have time component; ratios may not",
          "Crude vs. specific rates: crude simple but may mask subgroup differences",
          "CFR indicates severity; mortality indicates impact on population"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Epidemiology: Basic Concepts", edition: "26th" },
          { book: "Mahajan & Gupta Textbook of Preventive & Social Medicine", chapter: "Disease Frequency Measures", edition: "5th" }
        ]
      },
      {
        layer: 2,
        slug: "disease-frequency-layer-2-mechanism",
        title: "Measures of Disease Frequency - Mechanism",
        estimatedMinutes: 25,
        summary: "Standardized rates, life expectancy, and population indicators.",
        contentMd: `# Measures of Disease Frequency - Mechanism

## Standardization of Rates

### Why Standardize?
Crude rates don't account for age, sex, or other demographic differences between populations. Standardization allows fair comparison.

### Direct Standardization
- Uses age-specific rates from population of interest
- Applies these rates to a standard population structure
- Formula: Σ (Age-specific rate × Standard population in that age group) / Total standard population

**Advantage**: Reflects actual age-specific rates
**Disadvantage**: Requires age-specific rates for all groups

### Indirect Standardization
- Uses age-specific rates from a standard population
- Applies to age structure of population of interest
- Produces Standardized Mortality Ratio (SMR)
- Formula: SMR = Observed deaths / Expected deaths × 100

**Advantage**: Can be used when age-specific rates not available
**Disadvantage**: Less interpretable; less useful for comparisons

## Population Indicators

### Life Expectancy
- Average number of years a newborn is expected to live
- Calculated from life tables
- Influenced by: infant mortality, age-specific mortality
- Indian life expectancy: ~70 years (varies by state)

### Healthy Life Expectancy (HALE)
- Average number of years in full health
- Accounts for disability-adjusted life years (DALYs)
- WHO measure of population health

### Infant Mortality Rate (IMR)
- Deaths in children <1 year / Live births in same year × 1000
- Key indicator of population health and development
- Higher in developing countries (India ~35 per 1000)
- Reflects nutritional status, sanitation, healthcare

### Under-5 Mortality Rate (U5MR)
- Deaths in children <5 years / Live births in same year × 1000
- Broader indicator of child health
- Higher than IMR by definition

## Attributable and Population Attributable Measures

### Attributable Risk (AR)
- Excess risk in exposed group compared to unexposed
- Formula: Risk in exposed - Risk in unexposed
- Absolute measure of disease burden

### Attributable Fraction (AF)
- Proportion of disease in exposed group attributable to exposure
- Formula: (Risk in exposed - Risk in unexposed) / Risk in exposed × 100
- Expressed as percentage

### Population Attributable Risk (PAR)
- Excess risk in total population attributable to exposure
- Formula: (Overall risk in population - Risk in unexposed) / Overall risk × 100
- Indicates impact on entire population

### Population Attributable Fraction (PAF)
- Proportion of disease in population due to exposure
- Depends on: Relative risk AND prevalence of exposure
- Critical for public health prioritization
- Formula: [p(RR-1)] / [p(RR-1) + 1], where p = prevalence of exposure

## Relative Risk (RR) and Odds Ratio (OR)

### Relative Risk (RR)
**Definition**: Ratio of risk in exposed group to risk in unexposed group

**Formula**: RR = Risk in exposed / Risk in unexposed

**Interpretation**:
- RR = 1: No difference between groups
- RR >1: Increased risk in exposed
- RR <1: Decreased risk in exposed (protective)

**Example**: If lung cancer risk in smokers = 20/100 and in non-smokers = 2/100, then RR = 20/2 = 10 (smokers have 10-fold higher risk)

### Odds Ratio (OR)
**Definition**: Ratio of odds of disease in exposed to odds in unexposed

**Formula**: OR = (a×d) / (b×c)

**Used in**: Case-control studies (cannot calculate relative risk directly)

**When rare disease**: OR approximates RR

## Sensitivity and Specificity

### Sensitivity (True Positive Rate)
- Ability of test to correctly identify those with disease
- Formula: Sensitivity = TP / (TP + FN)
- "Sick test" - high sensitivity means few false negatives
- Important for screening tests (want to catch all cases)

### Specificity (True Negative Rate)
- Ability of test to correctly identify those without disease
- Formula: Specificity = TN / (TN + FP)
- "Negative test" - high specificity means few false positives
- Important for confirmatory tests (want to exclude non-disease)

### Positive Predictive Value (PPV)
- Probability of having disease if test positive
- Formula: PPV = TP / (TP + FP)
- Depends on disease prevalence (higher prevalence = higher PPV)

### Negative Predictive Value (NPV)
- Probability of not having disease if test negative
- Formula: NPV = TN / (TN + FN)
- Depends on disease prevalence (higher prevalence = lower NPV)
`,
        mnemonics: [
          {
            text: "PAF (Population Attributable Fraction) = most important for public health priority",
            explanation: "Identifies which exposures cause most disease burden in population"
          },
          {
            text: "Life Expectancy vs HALE = Life expectancy (total years), HALE (healthy years)",
            explanation: "Different indicators of population health"
          },
          {
            text: "Sensitivity = SN (SN-out: rule out disease), Specificity = SP (SP-in: confirm disease)",
            explanation: "Mnemonic for remembering which is used when"
          }
        ],
        keyPoints: [
          "Standardization allows fair comparison between populations with different age structures",
          "Direct standardization preferred when age-specific rates available",
          "IMR and U5MR key indicators of population health and development",
          "Attributable risk useful for understanding individual-level exposure impact",
          "Population attributable fraction guides public health interventions",
          "Relative risk measures strength of association; >1 indicates increased risk",
          "Sensitivity for screening (high sensitivity = few false negatives)",
          "Specificity for confirmation (high specificity = few false positives)",
          "Prevalence affects PPV (higher prevalence = higher PPV)",
          "RR from cohort/trial; OR from case-control studies"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Epidemiology: Measures of Disease", edition: "26th" },
          { book: "Mahajan & Gupta Textbook of Preventive & Social Medicine", chapter: "Disease Frequency and Measures", edition: "5th" }
        ]
      },
      {
        layer: 3,
        slug: "disease-frequency-layer-3-clinical",
        title: "Measures of Disease Frequency - Clinical Application",
        estimatedMinutes: 25,
        summary: "Practical application of epidemiological measures in disease surveillance and control programs.",
        contentMd: `# Measures of Disease Frequency - Clinical Application

## Surveillance and Monitoring

### Purpose of Disease Surveillance
- Track disease occurrence over time
- Detect outbreaks and unusual patterns
- Evaluate effectiveness of control programs
- Allocate resources

### Types of Surveillance

**Passive Surveillance**
- Facilities report notifiable diseases to health authorities
- Routine procedure in India (NDHM)
- Measures: Case numbers, prevalence, death rates
- Less complete but cost-effective

**Active Surveillance**
- Health workers actively collect data from facilities
- More complete; identifies cases that may go unreported
- Used during outbreaks, programs
- Example: Polio surveillance during eradication

**Sentinel Surveillance**
- Selected sites report all cases (whether notifiable or not)
- For diseases not formally notifiable
- Provides early warning

## Application in Indian Health Programs

### TB Control (RNTCP)
- Measures: Case detection rate, treatment success rate
- Target: Detect all TB cases; cure rate >85%
- Monitored through: TB registers, NTM module

### Malaria Control (NVBDCP)
- Measures: Parasite prevalence, case incidence
- Blood slide positivity rate indicates transmission intensity
- Used to assess malaria elimination progress

### Immunization Programs (UIP)
- Measures: Immunization coverage, dropout rates
- Coverage ≥95% needed for herd immunity (measles)
- Monitored through: Vaccination registers, surveys

### Maternal Health (RCH)
- Measures: MMR, ANC coverage, institutional delivery rate
- India target: MMR <70 per 100,000 live births
- JSY program tracks safe delivery indicators

## Calculation Examples

### Example 1: Calculating Prevalence
**Data**: Hospital with 100 TB patients among 2000 total patients
- Prevalence = 100/2000 × 100 = 5% (or 50 per 1000)
- Indicates disease burden at that point

### Example 2: Calculating Incidence
**Data**: 500 malaria-negative individuals followed 1 year; 50 develop malaria
- Annual incidence = 50/500 = 0.1 or 10% (or 100 per 1000)
- Indicates risk of developing malaria in that year

### Example 3: Standardized Rate (Direct Method)
**Compare two districts**:
- Age-specific malaria rate District A: 5-14 years (100/1000), 15-44 years (80/1000)
- Age-specific rate District B: 5-14 years (120/1000), 15-44 years (90/1000)
- Using standard population: Calculate weighted average by applying these to standard age distribution

### Example 4: Attributable Fraction
**Tobacco and COPD**:
- Risk in smokers: 30%
- Risk in non-smokers: 5%
- AF = (30-5)/30 × 100 = 83%
- Means 83% of COPD in smokers is attributable to smoking

### Example 5: Population Attributable Fraction
- If 40% of population smokes
- Indicates proportion of all COPD cases in population due to smoking

## Public Health Response Based on Measures

### Outbreak Management Example: Measles
1. **Incidence monitoring**: Track number of new cases
2. **Age-specific rates**: Identify affected age groups
3. **Epidemic curve**: Visualize outbreak progression
4. **Response**: Vaccination of susceptible contacts

### Chronic Disease Management Example: Hypertension
1. **Prevalence**: Identify disease burden
2. **Incidence**: Track new cases
3. **Mortality rate**: Monitor outcomes
4. **Intervention**: Screening programs, treatment

## Comparing Disease Burden Across Populations

### Using Prevalence
- Useful for: Chronic diseases, healthcare planning
- Compares disease burden at single point
- Affected by: Disease incidence AND duration

### Using Incidence
- Useful for: Understanding disease risk, causality assessment
- Compares new case occurrence
- Not affected by disease duration
- Better for exposure-disease relationships

### Using Mortality Rate
- Useful for: Assessing impact, outcomes
- Indicates disease severity
- Influenced by: Access to treatment
`,
        mnemonics: [
          {
            text: "Surveillance types = Passive (routine reporting), Active (active case finding), Sentinel (selected sites)",
            explanation: "Different approaches to disease monitoring"
          },
          {
            text: "Disease comparison = Prevalence (burden), Incidence (risk), Mortality (impact)",
            explanation: "Different measures for different questions"
          }
        ],
        keyPoints: [
          "Prevalence for planning services; incidence for understanding risk",
          "Standardized rates essential for comparing populations",
          "Passive surveillance cost-effective but incomplete",
          "Active surveillance more complete; used during outbreaks",
          "Attributable fraction guides individual-level prevention",
          "Population attributable fraction guides population-level interventions",
          "Sensitivity (screen for disease), Specificity (confirm disease)",
          "Outbreak detection: Track incidence, calculate epidemic curve",
          "Disease burden comparison: Use incidence (new cases) for risk assessment",
          "Healthcare planning: Use prevalence (existing cases) for resource allocation"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Epidemiology and Disease Control", edition: "26th" },
          { book: "Mahajan & Gupta Textbook of Preventive & Social Medicine", chapter: "Application of Epidemiological Measures", edition: "5th" }
        ]
      },
      {
        layer: 4,
        slug: "disease-frequency-layer-4-exam",
        title: "Measures of Disease Frequency - Exam Preparation",
        estimatedMinutes: 20,
        summary: "Quick reference for disease frequency measures and calculations.",
        contentMd: `# Measures of Disease Frequency - Exam Preparation

## Quick Reference Table

| Measure | Definition | Formula | Time Component |
|---------|-----------|---------|-----------------|
| Prevalence | Existing cases | Cases / Total population × 100 | Point/period |
| Incidence | New cases | New cases / Population at risk × base | Yes (rate) |
| CFR | Case fatality | Deaths from disease / Total cases × 100 | Time-specific |
| Mortality | Deaths | Deaths / Population × 1000 | Yes |
| IMR | Infant deaths | Deaths <1 year / Live births × 1000 | Annual |
| RR | Risk ratio | Risk exposed / Risk unexposed | Comparing groups |
| OR | Odds ratio | (a×d)/(b×c) | Case-control |
| Sensitivity | TP rate | TP / (TP+FN) | Test accuracy |
| Specificity | TN rate | TN / (TN+FP) | Test accuracy |

## Common Calculations

### Prevalence Calculation
**Problem**: In a city with 100,000 people, 500 have diabetes. What is prevalence?
- Solution: 500/100,000 × 100 = 0.5%

### Incidence Calculation
**Problem**: Follow 1000 TB-negative individuals; 20 develop TB in 2 years.
- Solution: 20/1000 = 2% (or 20 per 1000) over 2-year period
- Annual incidence = 20/(1000×2) = 10 per 1000 per year (incidence density)

### Attributable Risk
**Problem**: Lung cancer risk in smokers = 20/1000; in non-smokers = 2/1000. Calculate AR.
- Solution: AR = 20/1000 - 2/1000 = 0.018 or 1.8 per 1000
- Interpretation: Smoking causes 18 extra cases per 10,000 people

### Attributable Fraction
**Problem**: Using above data, calculate AF in smokers.
- Solution: AF = (20-2)/20 × 100 = 90%
- Interpretation: 90% of lung cancer in smokers due to smoking

### Relative Risk
**Problem**: Flu vaccination: 10% get flu if vaccinated, 30% if not vaccinated.
- Solution: RR = 10/30 = 0.33
- Interpretation: Vaccination reduces risk by 67% (or 1-0.33)

## Key Indian Health Indicators (2024)

| Indicator | Target | Current (India) |
|-----------|--------|-----------------|
| MMR | 70 per 100,000 LB | ~97 |
| IMR | 25 per 1000 | ~28 |
| U5MR | 30 per 1000 | ~34 |
| TB incidence | <10 per 100,000 | ~194 per 100,000 |
| Measles coverage | ≥95% | ~92% |

## Common Exam Questions

**Q1: Difference between incidence and prevalence?**
A: Prevalence = existing cases at point/period in time; Incidence = new cases over time period. Prevalence has no time dimension; incidence has.

**Q2: Formula for Case Fatality Rate?**
A: Deaths from disease / Total cases × 100 (expressed as percentage)

**Q3: What does RR = 2 mean?**
A: Exposure doubles the risk of disease; 100% increased risk

**Q4: When is Indirect Standardization used?**
A: When age-specific rates not available in population of interest

**Q5: Define Population Attributable Fraction and its use.**
A: Proportion of disease in population due to exposure; guides public health interventions

**Q6: Relationship between prevalence and incidence?**
A: Prevalence = Incidence × Duration of disease

**Q7: What is incidence density and when used?**
A: New cases per person-time (accounts for varying follow-up); more precise measure

**Q8: Difference between Rate and Ratio?**
A: Rate has time dimension and population at risk; ratio is simple comparison of two quantities

**Q9: Define sensitivity and specificity. When used?**
A: Sensitivity = TP/(TP+FN) = ability to identify disease. Specificity = TN/(TN+FP) = ability to identify non-disease. High sensitivity for screening (catch all cases); high specificity for confirmation (exclude false positives).

**Q10: What affects Positive Predictive Value (PPV)?**
A: Disease prevalence - high prevalence = high PPV (most positives are true disease). Low prevalence = low PPV (more false positives).
`,
        mnemonics: [
          {
            text: "P = I × D (Prevalence = Incidence × Duration)",
            explanation: "Relationship between prevalence and incidence"
          },
          {
            text: "CFR uses CASES, Mortality uses POPULATION (denominators different)",
            explanation: "Key difference in denominators"
          },
          {
            text: "Sensitivity SN-out (rule out), Specificity SP-in (rule in)",
            explanation: "Mnemonic for clinical use"
          }
        ],
        keyPoints: [
          "Prevalence for healthcare planning; incidence for understanding disease risk",
          "Always include base multiplier (×100, ×1000) and time period in answers",
          "Standardization essential for fair comparison between populations",
          "RR from cohort/trial; OR from case-control studies",
          "Attributable fraction guides individual prevention; PAF guides population intervention",
          "Know Indian national health indicators and targets",
          "Sensitivity for screening (high = few false negatives)",
          "Specificity for confirmation (high = few false positives)",
          "Crude rates simple but may mask important subgroup differences",
          "CFR (case fatality) indicates disease severity; mortality indicates population impact"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Epidemiology", edition: "26th" }
        ]
      },
      {
        layer: 5,
        slug: "disease-frequency-layer-5-active-recall",
        title: "Measures of Disease Frequency - Active Recall",
        estimatedMinutes: 15,
        summary: "Self-assessment on disease frequency measures and epidemiological calculations.",
        contentMd: `# Measures of Disease Frequency - Active Recall

## Q&A for Self-Assessment

**Q1: Define prevalence and give the formula.**
A: Prevalence is the proportion of population with disease at a specific point/period in time. Formula: (Number with disease / Total population) × 100 or 1000.

**Q2: Define incidence and explain how it differs from prevalence.**
A: Incidence is number of new cases arising in at-risk population during specified time period. Differs: Prevalence (existing cases), Incidence (new cases only); Prevalence has no time dimension, Incidence has time dimension.

**Q3: What is the relationship between prevalence and incidence?**
A: Prevalence = Incidence × Duration of disease. In chronic diseases, prevalence high but incidence low. In acute diseases, prevalence low but incidence high.

**Q4: Explain the difference between Rate and Ratio with examples.**
A: Rate has time component and population at risk in denominator (e.g., mortality rate per 1000 per year). Ratio is simple comparison of two quantities without time component (e.g., sex ratio, death-to-case ratio).

**Q5: What is Case Fatality Rate and how is it calculated?**
A: CFR is proportion of confirmed cases who die from disease. Formula: (Deaths from disease / Total confirmed cases) × 100. Expressed as percentage. Indicates disease severity.

**Q6: Define and explain Attributable Risk (AR) and Attributable Fraction (AF).**
A: AR = Risk in exposed - Risk in unexposed (absolute measure). AF = [(Risk exposed - Risk unexposed) / Risk exposed] × 100 (expressed as percentage). AF indicates proportion of disease in exposed due to exposure.

**Q7: What is Population Attributable Fraction and its significance?**
A: PAF is proportion of disease in total population attributable to specific exposure. Depends on both RR and prevalence of exposure. Critical for public health prioritization.

**Q8: Explain Relative Risk (RR) interpretation. What does RR = 3 mean?**
A: RR = Risk in exposed / Risk in unexposed. RR = 3 means exposed group has 3× the risk (200% increased risk). RR = 1 (no difference), RR >1 (increased risk), RR <1 (protective).

**Q9: Calculate incidence: 800 people followed for 3 years; 40 develop disease.**
A: Incidence = 40/800 = 0.05 or 5% over 3 years. Incidence density = 40/(800×3) = 0.0167 per person-year or 16.7 per 1000 person-years.

**Q10: Define Standardized Rate and explain when Direct Standardization is preferred.**
A: Standardized rate adjusts for differences in population structure (age, sex). Direct standardization preferred when age-specific rates available; reflects actual age-specific rates; more interpretable for comparisons.

**Q11: Explain sensitivity and specificity. Differentiate high vs low values.**
A: Sensitivity = TP/(TP+FN) = ability to identify disease. High sensitivity = few false negatives (good for screening, ruling out disease). Specificity = TN/(TN+FP) = ability to identify non-disease. High specificity = few false positives (good for confirming disease).

**Q12: Explain how disease prevalence affects Positive Predictive Value (PPV).**
A: High prevalence → most people with positive test have disease → high PPV. Low prevalence → many false positives → low PPV. PPV = (Sensitivity × Prevalence) / (Sensitivity × Prevalence + (1-Specificity) × (1-Prevalence)).

**Q13: What is the difference between passive and active surveillance?**
A: Passive surveillance: Facilities report notifiable diseases (routine, cost-effective, less complete). Active surveillance: Health workers actively collect data (more complete, identifies unreported cases, used during outbreaks).

**Q14: Compare IMR and U5MR. What do they indicate about population health?**
A: IMR = deaths <1 year. U5MR = deaths <5 years. Both indicate: nutritional status, sanitation quality, healthcare access. U5MR > IMR by definition. Lower rates indicate better population health and development.

**Q15: Calculate attributable fraction: Smoking and lung cancer - smoker risk 30%, non-smoker risk 5%.**
A: AF = (30-5)/30 × 100 = 83%. Interpretation: 83% of lung cancer in smokers is attributable to smoking. 17% due to other factors.

**Q16: Explain Odds Ratio (OR) and when it's used. How does it compare to RR?**
A: OR = (a×d)/(b×c) = ratio of odds of disease in exposed to unexposed. Used in case-control studies (cannot calculate RR directly). When disease rare, OR approximates RR.

**Q17: What is incidence density and what problem does it solve?**
A: Incidence density = new cases / total person-years of follow-up. Solves problem of varying follow-up duration between participants. More precise measure than cumulative incidence.

**Q18: Calculate Population Attributable Fraction scenario: 40% of population smokes, RR of COPD in smokers = 2.5.**
A: PAF = [p(RR-1)] / [p(RR-1) + 1] = [0.4(2.5-1)] / [0.4(2.5-1) + 1] = 0.6/1.6 = 37.5%. Interpretation: 37.5% of all COPD in population due to smoking.
`,
        mnemonics: [
          {
            text: "P = I × D (Prevalence = Incidence × Duration)",
            explanation: "Relationship between prevalence and incidence"
          },
          {
            text: "CFR uses CASES, Mortality uses POPULATION",
            explanation: "Key difference in denominators"
          },
          {
            text: "SN-out, SP-in (Sensitivity rule-out, Specificity rule-in)",
            explanation: "When to use sensitivity vs specificity"
          }
        ],
        keyPoints: [
          "Prevalence cross-sectional snapshot; incidence longitudinal measure",
          "Always specify time period and base multiplier in your answer",
          "Crude rates simple but may mask important subgroup differences",
          "Attributable measures guide individual-level prevention strategies",
          "Population attributable fraction guides population-level public health interventions",
          "RR, OR measure strength of association; AR, AF measure disease burden",
          "Sensitivity identifies disease; specificity identifies non-disease",
          "High prevalence increases PPV; low prevalence decreases PPV",
          "Direct standardization preferred when age-specific rates available",
          "IMR, U5MR, MMR key indicators of population health and development"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Epidemiology", edition: "26th" },
          { book: "Mahajan & Gupta Textbook of Preventive & Social Medicine", chapter: "Disease Frequency Measures", edition: "5th" }
        ]
      }
    ]
  }
];
