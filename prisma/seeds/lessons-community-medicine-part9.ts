import type { TopicLessons } from "./content-loader";

export const communityMedicinePart9Lessons: TopicLessons[] = [
  {
    topicCode: "CM-MOD-01-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "biostatistics-layer-1-foundation",
        title: "Biostatistics - Foundation",
        estimatedMinutes: 20,
        summary: "Core biostatistical concepts including measures of central tendency, variability, and distribution types relevant to health research.",
        contentMd: `# Biostatistics - Foundation

## Introduction to Biostatistics

Biostatistics applies statistical methods to biological and medical data. Essential for interpreting research, designing studies, and understanding disease patterns in India's diverse population.

## Types of Data

### Numerical (Quantitative)
**Continuous**: Can take any value within range
- Height, weight, blood pressure
- Age, temperature
- Laboratory values (hemoglobin, glucose)

**Discrete**: Whole number values only
- Number of children, hospitalizations
- Counts of disease cases

### Categorical (Qualitative)
**Nominal**: No natural ordering
- Blood groups (A, B, AB, O)
- Gender, religion, caste
- Disease presence/absence

**Ordinal**: Natural ordering
- Severity (mild, moderate, severe)
- Educational level
- Clinical grades

## Measures of Central Tendency

**Used to describe center of distribution**

### Mean (Average)
- Sum of all values divided by number of values
- Most common measure
- Affected by extreme values (outliers)
- Example: Average weight of 100 adult males

### Median
- Middle value when data arranged in order
- Useful when data skewed (contains outliers)
- 50% of values fall below, 50% above
- Example: Median income (less affected by billionaires)

### Mode
- Most frequently occurring value
- Only measure for nominal data
- Example: Most common blood group

## Measures of Dispersion/Variability

**Describe spread of data around center**

### Range
- Difference between maximum and minimum values
- Simplest measure, affected by outliers
- Example: Hemoglobin range 8-15 g/dL

### Standard Deviation (SD)
- Average deviation from mean
- Most common measure of dispersion
- Normal distribution: 68% within ±1 SD, 95% within ±2 SD
- Larger SD = more spread

### Variance
- Square of standard deviation
- Less intuitive, used in statistical tests

### Coefficient of Variation (CV)
- SD/Mean × 100%
- Allows comparison between datasets with different units
- Expressed as percentage

## Distribution Types

### Normal (Gaussian) Distribution
- Bell-shaped, symmetric curve
- Mean = Median = Mode
- 68% within ±1 SD, 95% within ±2 SD, 99.7% within ±3 SD
- Described by mean and SD
- Used for many biological measurements

### Skewed Distributions
**Positive skew** (right skew):
- Tail extends right
- Mean > Median > Mode
- Example: Income distribution

**Negative skew** (left skew):
- Tail extends left
- Mean < Median < Mode
- Example: Age at death distribution

### Bimodal Distribution
- Two peaks
- Example: Hemoglobin levels in anemic vs. non-anemic population

## Sampling Methods

### Random Sampling
- Every individual has equal chance of selection
- Reduces selection bias
- Example: Lottery method, random number table

### Stratified Sampling
- Population divided into groups (strata)
- Sample selected from each group
- Ensures representation of subgroups
- Example: Sampling from different socioeconomic classes

### Cluster Sampling
- Population divided into clusters (geographic areas)
- Random clusters selected, all individuals in cluster sampled
- Cost-effective for large populations
- Example: Village selection in rural India survey

### Systematic Sampling
- Every nth individual selected
- Simple to implement
- Risk of bias if pattern exists in population

## Sample Size Calculation

### Factors Affecting Sample Size
- **Confidence level**: Usually 95% (z = 1.96)
- **Margin of error**: Acceptable precision (usually ±5%)
- **Expected proportion**: Previous studies or pilot data
- **Effect size**: Magnitude of difference to detect

### Formula (Proportions)
n = (z² × p × q) / e²

Where:
- z = critical value (1.96 for 95% CI)
- p = expected proportion
- q = 1 - p
- e = acceptable margin of error

### Larger sample needed if:
- Higher confidence required (99% vs. 95%)
- Smaller margin of error needed
- Less variable population estimate`,
        mnemonics: [
          {
            text: "DATA TYPES: Continuous (measurements), Discrete (counts), Nominal (categories), Ordinal (ranked)",
            explanation: "Classification of data types guides statistical analysis"
          },
          {
            text: "CENTRAL TENDENCY: Mean (arithmetic), Median (middle), Mode (frequent)",
            explanation: "Three measures of data center"
          },
          {
            text: "NORMAL DISTRIBUTION: 68-95-99.7 rule (1-2-3 SD)",
            explanation: "Quick recall of normal distribution percentages"
          }
        ],
        keyPoints: [
          "Continuous data (height, weight) vs. discrete (counts), nominal (categories) vs. ordinal (ranked)",
          "Mean most common but affected by outliers; median preferred for skewed data",
          "Standard deviation measures spread; 95% data within ±2 SD in normal distribution",
          "Random sampling reduces bias; stratified sampling ensures subgroup representation",
          "Sample size depends on confidence level (95%), margin of error (5%), and expected proportion"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive and Social Medicine", chapter: "Biostatistics and Research Methods", edition: "26th" },
          { book: "Mahajan & Gupta - Community Medicine", chapter: "Statistical Methods", edition: "5th" }
        ]
      },
      {
        layer: 2,
        slug: "biostatistics-layer-2-mechanism",
        title: "Biostatistics - Mechanism",
        estimatedMinutes: 25,
        summary: "Statistical inference, hypothesis testing, confidence intervals, and probability concepts.",
        contentMd: `# Biostatistics - Mechanism

## Probability and Risk Measures

### Basic Probability
- Ranges from 0 (impossible) to 1 (certain)
- P(disease) = Number with disease / Total population
- Used to predict outcomes and make inferences

### Relative Risk (RR)
- Risk in exposed group / Risk in unexposed group
- RR = 1: No difference in risk
- RR > 1: Increased risk with exposure
- RR < 1: Decreased risk with exposure (protective)
- Example: RR = 2 means twice the risk in exposed group

### Odds Ratio (OR)
- Odds of disease in exposed / Odds of disease in unexposed
- Used in case-control studies (can't calculate RR directly)
- OR approximates RR when disease is rare
- Interpretation similar to RR

### Absolute Risk Reduction (ARR)
- Risk in control - Risk in treatment
- ARR = 0.30 - 0.20 = 0.10 = 10% risk reduction
- Used to understand clinical significance

### Number Needed to Treat (NNT)
- 1 / ARR
- How many patients must treat to prevent one adverse outcome
- NNT = 10 means treat 10 to prevent 1 outcome
- Lower NNT = more effective treatment

## Hypothesis Testing

### Null and Alternative Hypotheses
- **H₀ (Null)**: No difference or association exists
- **H₁ (Alternative)**: Difference or association exists
- Test determines whether evidence supports rejecting H₀

### Type I and Type II Errors
**Type I Error (α, false positive)**:
- Rejecting H₀ when it's actually true
- Significance level (usually 5%, α = 0.05)
- P-value < 0.05 indicates Type I error probability <5%

**Type II Error (β, false negative)**:
- Failing to reject H₀ when it's actually false
- Power = 1 - β (usually 80%, so β = 0.20)
- Related to sample size and effect size

### P-value
- Probability of obtaining results as extreme if H₀ is true
- P < 0.05: Reject H₀ (statistically significant)
- P > 0.05: Fail to reject H₀ (not significant)
- Doesn't indicate magnitude of effect or clinical significance

## Confidence Intervals (CI)

### Interpretation
- 95% CI: If study repeated 100 times, 95 would contain true value
- Narrow CI: More precise estimate
- CI crossing 1 (for RR) or 0 (for difference): Not significant
- Example: RR = 2.0, 95% CI (1.5-2.5): Probably true effect

### Calculation (Proportions)
CI = p ± (z × SE)

Where:
- p = observed proportion
- z = 1.96 for 95% CI
- SE = √(p×q/n)

### Interpretation of Width
- Wider CI: Less precision (larger sample needed)
- Narrower CI: More precision (larger study)

## Statistical Tests

### Parametric Tests (Assume normal distribution)
- **t-test**: Compare means between 2 groups
- **ANOVA**: Compare means among 3+ groups
- **Pearson correlation**: Linear relationship between continuous variables

### Non-parametric Tests (No normality assumption)
- **Mann-Whitney U**: Compare 2 independent groups (non-normal data)
- **Kruskal-Wallis**: Compare 3+ independent groups
- **Spearman correlation**: Relationship between ranked variables

### Categorical Data
- **Chi-square test**: Association between categorical variables
- **Fisher's exact**: When expected frequencies <5
- **McNemar's test**: Paired categorical data

### When to Use Which Test
- **Check data distribution** (normal vs. non-normal)
- **Check group type** (independent vs. paired)
- **Check number of groups** (2 vs. 3+)
- **Check data type** (continuous vs. categorical)

## Sensitivity and Specificity

### Sensitivity
- True positive rate
- Ability to identify those with disease
- Sensitivity = TP / (TP + FN)
- High sensitivity: Few false negatives (good screening test)

### Specificity
- True negative rate
- Ability to identify those without disease
- Specificity = TN / (TN + FP)
- High specificity: Few false positives (good confirmation test)

### Predictive Values
**Positive Predictive Value (PPV)**:
- Probability of disease if test positive
- PPV = TP / (TP + FP)
- Depends on disease prevalence

**Negative Predictive Value (NPV)**:
- Probability of no disease if test negative
- NPV = TN / (TN + FN)
- Depends on disease prevalence

### 2×2 Table Analysis
```
        Disease +    Disease -
Test +  TP           FP
Test -  FN           TN

Sensitivity = TP / (TP + FN)
Specificity = TN / (TN + FP)
PPV = TP / (TP + FP)
NPV = TN / (TN + FN)
````,
        mnemonics: [
          {
            text: "RISK MEASURES: RR (exposed/unexposed), OR (odds ratio), ARR (absolute reduction), NNT (1/ARR)",
            explanation: "Different ways to express treatment effects"
          },
          {
            text: "ERRORS: Type I (reject true H₀, α), Type II (accept false H₀, β), Power = 1 - β",
            explanation: "Hypothesis testing error concepts"
          },
          {
            text: "TEST CHARACTERISTICS: Sensitivity (TP identify), Specificity (TN identify), PPV (test+ = disease), NPV (test- = no disease)",
            explanation: "Diagnostic accuracy measures"
          }
        ],
        keyPoints: [
          "RR > 1: increased risk; RR < 1: protective effect; RR = 1: no effect",
          "Type I error (α, 5%): false positive; Type II error (β, 20%): false negative",
          "P-value < 0.05: statistically significant (reject H₀); doesn't indicate clinical significance",
          "95% CI: If repeated 100 times, 95 would contain true value; narrow = more precise",
          "Sensitivity: ability to identify disease; Specificity: ability to identify non-disease",
          "Sensitivity/NPV important for screening; Specificity/PPV important for diagnosis"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive and Social Medicine", chapter: "Biostatistics and Research Methods", edition: "26th" },
          { book: "Epidemiology Design and Analysis", chapter: "Statistical Methods", edition: "3rd" }
        ]
      },
      {
        layer: 3,
        slug: "biostatistics-layer-3-clinical",
        title: "Biostatistics - Clinical",
        estimatedMinutes: 20,
        summary: "Application of biostatistics in study design, interpretation of research, and quality assessment.",
        contentMd: `# Biostatistics - Clinical

## Study Designs and Statistical Implications

### Descriptive Studies
- **Cross-sectional**: Snapshot at point in time
  - Measures prevalence
  - Cannot determine causation
  - Quick, inexpensive
  - Example: Surveys of disease prevalence in India

- **Case reports/series**: Individual cases or small groups
  - Hypothesis-generating
  - Statistically weak
  - Useful for rare conditions

### Analytical Studies
- **Case-control**: Disease status identified, exposure history examined
  - Odds ratio calculated
  - Good for rare diseases
  - Retrospective (recall bias)
  - Example: Study of risk factors for TB

- **Cohort**: Exposure status known, disease outcome followed
  - Relative risk calculated
  - Can establish temporal relationship
  - Prospective or retrospective
  - Example: Occupational exposure and lung disease

### Experimental Studies
- **Randomized Controlled Trial (RCT)**: Gold standard
  - Intervention randomly assigned
  - Reduces confounding
  - Expensive, time-consuming
  - Example: Drug efficacy trials

## Interpreting Research Studies

### Statistical vs. Clinical Significance
- **Statistical significance**: P < 0.05 (real effect, not by chance)
- **Clinical significance**: Effect size matters clinically
- Example: Drug reduces fever by 0.1°C (significant but not clinically relevant)

### Effect Size
- Magnitude of effect independent of sample size
- Cohen's d (standardized difference)
- d = 0.2 (small), 0.5 (medium), 0.8 (large)
- Important for understanding practical importance

### Bias in Studies
**Selection bias**: Systematic difference in choosing participants
- Volunteers may differ from non-volunteers
- Loss to follow-up in cohort studies

**Information bias**: Systematic error in measuring exposure/outcome
- Recall bias (case-control): Diseased remember differently
- Measurement error: Inaccurate instruments

**Confounding**: Third variable causes association
- Example: Age confounds association of alcohol and cardiovascular disease
- Adjust in analysis or match in design

## Quality Assessment

### Levels of Evidence (GRADE)
1. **High**: RCT without quality issues
2. **Moderate**: RCT with limitations or observational study strength
3. **Low**: Observational study with serious limitations
4. **Very Low**: Case reports, expert opinion

### Critical Appraisal Tools
- **STROBE checklist**: Observational studies
- **CONSORT statement**: RCTs
- **Jadad score**: Randomized trial quality
- **Newcastle-Ottawa**: Case-control and cohort quality

### Red Flags for Poor Quality
- Small sample size without power calculation
- High loss to follow-up (>20%)
- No adjustment for known confounders
- Publication bias (positive results more likely published)
- Conflict of interest undisclosed

## Application in Clinical Practice

### Evidence-Based Medicine Steps
1. **Ask**: Clear clinical question
2. **Search**: Find best available evidence
3. **Appraise**: Assess study quality and relevance
4. **Apply**: Implement findings appropriately
5. **Evaluate**: Monitor outcomes and adjust

### Number Needed to Treat (NNT) in Practice
- NNT = 1/ARR
- NNT = 10: Treat 10 patients to prevent 1 adverse outcome
- Used to counsel patients about treatment benefits
- Consider NNT vs. NNH (number needed to harm)

### Likelihood Ratios (LR)
- Combines sensitivity and specificity
- LR+ = Sensitivity / (1 - Specificity)
- LR- = (1 - Sensitivity) / Specificity
- LR > 10: Strong diagnostic rule-in
- LR < 0.1: Strong diagnostic rule-out

## Meta-analysis and Systematic Reviews

### Meta-analysis
- Statistical combination of multiple studies
- Increases power and precision
- Studies must be homogeneous (similar populations, interventions)
- Forest plot visualizes effect estimates

### Heterogeneity
- I² statistic (0-100%)
- I² < 25%: Low heterogeneity
- I² > 75%: High heterogeneity
- High heterogeneity suggests individual study analysis preferred

### Publication Bias
- Positive studies more likely published
- Funnel plot assesses publication bias
- May overestimate true effect`,
        mnemonics: [
          {
            text: "STUDY DESIGNS: Descriptive (prevalence), Case-control (OR), Cohort (RR), RCT (gold standard)",
            explanation: "Hierarchy of study designs and measures"
          },
          {
            text: "BIAS TYPES: Selection (who enrolled), Information (how measured), Confounding (third variable)",
            explanation: "Three main sources of bias in studies"
          },
          {
            text: "LR CUTOFFS: LR+ >10 (rule-in), LR- <0.1 (rule-out)",
            explanation: "Using likelihood ratios for clinical decisions"
          }
        ],
        keyPoints: [
          "Case-control calculates OR; cohort calculates RR; RCT is gold standard",
          "Recall bias: diseased remember exposure differently; selection bias: who enrolled differs",
          "Adjust for confounders in analysis; match in study design to prevent confounding",
          "NNT: Number needed to treat to prevent 1 outcome (lower = more effective)",
          "Statistical significance (P < 0.05) ≠ clinical significance (effect size matters)",
          "LR+ > 10 strong rule-in; LR- < 0.1 strong rule-out; more intuitive than sensitivity/specificity"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive and Social Medicine", chapter: "Research Methods and Epidemiology", edition: "26th" },
          { book: "Epidemiology by Design", chapter: "Study Designs and Bias", edition: "2nd" }
        ]
      },
      {
        layer: 4,
        slug: "biostatistics-layer-4-exam",
        title: "Biostatistics - Exam Prep",
        estimatedMinutes: 15,
        summary: "NEXT-pattern MCQ preparation on data analysis, study design interpretation, and statistical concepts.",
        contentMd: `# Biostatistics - Exam Preparation

## High-Yield Facts

**Data Types & Analysis**:
- Continuous: Height, weight, BP (mean, SD, t-test)
- Discrete: Counts (counts analysis)
- Nominal: Categories (chi-square, mode)
- Ordinal: Ranked (median, Mann-Whitney)

**Central Tendency**:
- Mean: Affected by outliers
- Median: Better for skewed data
- Mode: Only for nominal data

**Normal Distribution**:
- 68% within ±1 SD, 95% within ±2 SD, 99.7% within ±3 SD
- Mean = Median = Mode in normal distribution

**Risk Measures**:
- RR: Risk exposed / Risk unexposed
- OR: Odds exposed / Odds unexposed
- ARR: Risk difference (risk control - risk treatment)
- NNT: 1/ARR (how many treat to prevent 1)

**Hypothesis Testing**:
- Type I error (α): Reject true H₀ (usually 5%)
- Type II error (β): Accept false H₀ (usually 20%)
- Power = 1 - β (usually 80%)
- P-value < 0.05: Reject H₀

**Test Characteristics**:
- Sensitivity: TP/(TP+FN) - identify disease
- Specificity: TN/(TN+FP) - identify non-disease
- PPV: TP/(TP+FP) - probability disease if positive
- NPV: TN/(TN+FN) - probability no disease if negative

**Study Designs**:
- Cross-sectional: Prevalence, no causation
- Case-control: OR, good for rare disease
- Cohort: RR, temporal relationship
- RCT: Gold standard, causation

## Problem-Solving Cases

**Case 1: Data Distribution**
- Blood pressure readings in population
- Mean 130, SD 15
- What % between 115-145 mmHg?
> Answer: ±1 SD from mean = 68%

**Case 2: Sample Size**
- Want to detect 30% vs 20% proportion
- 95% confidence, 5% error
- Estimate sample size needed
> Use formula: n = (z² × p × q) / e² ≈ 350-400

**Case 3: Test Interpretation**
- Sensitivity 90%, Specificity 80%
- Disease prevalence 10%
- Interpret positive test result
> Calculate PPV; probability disease if test positive depends on prevalence

**Case 4: Study Design Selection**
- Investigating tuberculosis risk factors
- Disease rare in general population
- Which design best?
> Case-control (good for rare disease, quick, OR calculated)

## Analysis Topics

- Why normal distribution important in statistics
- Relationship between effect size and sample size
- Confounding variable control methods
- Publication bias in systematic reviews`,
        mnemonics: [
          {
            text: "DATA ANALYSIS: Continuous (mean/SD/t-test), Nominal (frequency/chi-square), Ordinal (median/Mann-Whitney)",
            explanation: "Data type determines appropriate analysis"
          },
          {
            text: "NORMAL DISTRIBUTION: 68-95-99.7 (1-2-3 SD)",
            explanation: "Percentage within standard deviations"
          },
          {
            text: "TEST PERFORMANCE: Sensitivity (TPR, rule-in), Specificity (TNR, rule-out), PPV (prevalence-dependent)",
            explanation: "Diagnostic accuracy interpretation"
          }
        ],
        keyPoints: [
          "Continuous data: Describe with mean/SD if normal, median if skewed",
          "Sample size depends on confidence (95%), error margin (5%), expected proportion",
          "RR from cohort studies; OR from case-control; RCT provides causation evidence",
          "Sensitivity/NPV for screening; Specificity/PPV for diagnosis",
          "Type I error (5%) vs Type II error (20%); Power (1-β) usually 80%",
          "P < 0.05 statistically significant; check effect size for clinical significance"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive and Social Medicine", chapter: "Biostatistics", edition: "26th" },
          { book: "Bland & Altman Statistical Methods", chapter: "Data Interpretation" }
        ]
      },
      {
        layer: 5,
        slug: "biostatistics-layer-5-active-recall",
        title: "Biostatistics - Active Recall",
        estimatedMinutes: 10,
        summary: "Quick recall of statistical concepts, formulas, and study interpretation.",
        contentMd: `# Active Recall - Biostatistics

**Q1:** What percentage of data falls within ±2 standard deviations in a normal distribution?
> 95% of data falls within ±2 SD. This is the 95-99.7 rule: ±1 SD = 68%, ±2 SD = 95%, ±3 SD = 99.7%.

**Q2:** Explain the difference between relative risk (RR) and odds ratio (OR).
> RR = Risk in exposed / Risk in unexposed (from cohort studies). OR = Odds in exposed / Odds in unexposed (from case-control studies). OR approximates RR when disease is rare (<10%).

**Q3:** What is the formula for Number Needed to Treat (NNT) and how is it interpreted?
> NNT = 1 / ARR. Example: If ARR = 0.10 (10% reduction), NNT = 10 (treat 10 patients to prevent 1 outcome). Lower NNT indicates more effective treatment.

**Q4:** Define Type I and Type II errors in hypothesis testing.
> Type I error (α, usually 5%): Rejecting H₀ when it's true (false positive). Type II error (β, usually 20%): Accepting H₀ when it's false (false negative). Power = 1 - β (usually 80%).

**Q5:** What does a p-value of 0.03 mean and when do we reject the null hypothesis?
> P = 0.03 means there's a 3% probability of obtaining these results if H₀ is true. Since 0.03 < 0.05, we reject H₀ and conclude result is statistically significant. Does not indicate effect size or clinical significance.

**Q6:** Calculate 95% confidence interval if observed proportion is 0.4 in sample of 400.
> CI = p ± (z × SE). SE = √(0.4 × 0.6 / 400) = 0.0245. CI = 0.4 ± (1.96 × 0.0245) = 0.4 ± 0.048 = (0.352-0.448) or 35.2%-44.8%.

**Q7:** Distinguish between sensitivity and specificity in a diagnostic test.
> Sensitivity = TP/(TP+FN) = ability to identify those with disease (high sensitivity = few false negatives, good screening test). Specificity = TN/(TN+FP) = ability to identify those without disease (high specificity = few false positives, good confirmation test).

**Q8:** When would you use Mann-Whitney U test instead of t-test?
> Mann-Whitney U is used for non-normal distributions (skewed data, ordinal data, small samples) comparing 2 independent groups. T-test assumes normality; use Mann-Whitney if normality assumption violated.

**Q9:** Explain how confounding differs from bias and give an example.
> Confounding: Third variable causes association (age confounds alcohol-CVD relation). Bias: Systematic error in measurement/selection (recall bias in case-control). Confounding adjusted in analysis; bias prevented by design.

**Q10:** What is a forest plot in meta-analysis and what does a CI crossing 1.0 mean?
> Forest plot visualizes effect estimates (RR or OR) and 95% CIs from multiple studies. CI crossing 1.0 means the effect is not statistically significant (no difference between groups). Vertical line at 1.0 is line of no effect.`,
        mnemonics: [
          {
            text: "NORMAL DISTRIBUTION: 68-95-99.7 RULE (1-2-3 SD)",
            explanation: "Percentage within standard deviations"
          },
          {
            text: "HYPOTHESIS TESTING: H₀ (no difference), Type I (α=5%, reject true), Type II (β=20%, accept false)",
            explanation: "Null hypothesis and error types"
          },
          {
            text: "RISK: RR (cohort, exposed/unexposed), OR (case-control, odds), ARR (difference), NNT (1/ARR)",
            explanation: "Measures of effect from different studies"
          },
          {
            text: "TEST CHARACTERISTICS: Sensitivity (identify disease), Specificity (identify non-disease), PPV (test+ = disease), NPV (test- = no disease)",
            explanation: "Diagnostic test interpretation"
          }
        ],
        keyPoints: [
          "Normal distribution: 68% within ±1 SD, 95% within ±2 SD",
          "RR from cohort; OR from case-control; or approximates RR when disease rare",
          "Type I error (reject true H₀, 5%); Type II error (accept false H₀, 20%); Power = 1 - β",
          "P-value < 0.05 rejects H₀ (statistically significant); doesn't indicate magnitude of effect",
          "Sensitivity (TP identify) for screening; Specificity (TN identify) for diagnosis",
          "NNT = 1/ARR; lower NNT = more effective treatment; applies to individual patient counseling"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive and Social Medicine", chapter: "Biostatistics and Research Methods", edition: "26th" },
          { book: "Mahajan & Gupta Textbook of Preventive & Social Medicine", chapter: "Statistical Methods", edition: "5th" }
        ]
      }
    ]
  }
];
