import type { TopicLessons } from "./content-loader";

export const radiologyPart5Lessons: TopicLessons[] = [
  {
    topicCode: "RD-MOD-01-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "radiation-physics-foundation",
        title: "Radiation Physics & Protection - Foundation",
        estimatedMinutes: 25,
        summary: "Ionizing radiation types, dose measurement, biological effects, ALARA principle.",
        contentMd: `# Radiation Physics & Protection - Foundation

## Types of Ionizing Radiation
### X-rays & Gamma Rays
- **Photons**: Electromagnetic radiation with no mass/charge
- **X-rays**: Generated artificially in tube (diagnostic imaging)
- **Gamma rays**: From radioactive decay (nuclear medicine)
- **Energy**: Measured in keV (kiloelectronvolts); 10-150 keV diagnostic X-rays

### Particulate Radiation
- **Alpha particles**: Helium nuclei (heavy, low penetration)
- **Beta particles**: Electrons (intermediate penetration)
- **Neutrons**: Uncharged nucleons (high LET, high biological effect)

## Dose Measurement
### Units
- **Exposure**: Roentgen (R) - measure of ionization in air (outdated)
- **Absorbed dose**: Gray (Gy) = 1 joule/kg; rad (older) = 0.01 Gy
- **Equivalent dose**: Sievert (Sv) = Gy × weighting factor; rem (older) = 0.01 Sv
- **Weighting factors**: X-rays/gamma = 1; alpha = 20; neutrons = 5-20

### Effective Dose
- **Purpose**: Accounts for organ sensitivity to radiation
- **Expressed in**: mSv (millisieverts)
- **Background**: ~3 mSv/year (varies by location, altitude)
- **Diagnostic**: CXR ~0.1 mSv; CT abdomen ~10 mSv; Fluoroscopy ~50-100 mSv

## Biological Effects of Radiation
### Deterministic (Threshold) Effects
- **Requires minimum dose**: Below threshold, no effect
- **Dose-dependent**: Severity increases with dose
- **Examples**: Cataracts (>2 Gy), erythema (>6 Gy), sterility (>0.5 Gy)
- **Clinical**: Rare with diagnostic radiation

### Stochastic (Random) Effects
- **No threshold**: Any dose has probability
- **Risk increases linearly** with dose (at low doses)
- **Examples**: Leukemia, solid cancer
- **Clinical**: Main concern for diagnostic radiation exposure

## Radiation Protection Principles
### ALARA (As Low As Reasonably Achievable)
- Minimize dose while maintaining diagnostic quality
- Balance benefits vs risks

### Time, Distance, Shielding (TDS)
- **Time**: Minimize exposure duration
- **Distance**: Increase distance from source (inverse square law)
- **Shielding**: Lead aprons, barriers`,
        mnemonics: [
          { text: "Dose units: Gray (Gy) = absorbed, Sievert (Sv) = equivalent (biologic effect)", explanation: "Radiation units" },
          { text: "Weighting factors: X-rays=1, beta=1, alpha=20, neutrons=5-20", explanation: "Biological effectiveness" },
          { text: "ALARA = As Low As Reasonably Achievable", explanation: "Radiation protection philosophy" }
        ],
        keyPoints: [
          "X-rays photons (no mass), 10-150 keV diagnostic energy",
          "Dose measured in Sv (sievert); mSv for typical studies",
          "Background radiation ~3 mSv/year",
          "Deterministic: threshold effects (rare in diagnostic); Stochastic: cancer risk (main concern)",
          "ALARA: minimize dose while maintaining diagnostic quality"
        ],
        textbookRefs: [
          { book: "Grainger & Allison's Diagnostic Radiology", chapter: "Radiation Physics & Protection", edition: "7th" },
          { book: "NCRP Report 160: Ionizing Radiation Exposure of the Population", edition: "2009" }
        ]
      },
      {
        layer: 2,
        slug: "radiation-dosimetry-mechanism",
        title: "Radiation Physics - Dosimetry & Mechanism",
        estimatedMinutes: 30,
        summary: "Dose calculation, organ sensitivity, linear energy transfer, dose-response relationships.",
        contentMd: `# Radiation Dosimetry - Mechanism

## Dose Calculation
### Effective Dose Formula
- E = Σ (HT × wT)
  - HT = equivalent dose to organ (Sv)
  - wT = tissue weighting factor (0.01-0.25 depending on radiosensitivity)

### Organ Weighting Factors (wT)
- **High sensitivity** (0.12 each): Gonads, marrow, colon, lung, stomach
- **Medium** (0.05 each): Breast, liver, esophagus, thyroid, bladder, bone surface, brain
- **Low** (0.01 each): Skin, limbs, teeth
- **Remainder**: 0.05 (split among remaining organs)

## Linear Energy Transfer (LET)
- **Definition**: Energy deposited per unit length of particle path
- **Low LET** (X-rays, electrons): Less biological damage per Gy
- **High LET** (alpha, neutrons): More biological damage per Gy
- **Relative biological effectiveness (RBE)**: Ratio of biological effect to X-rays

## Dose-Response Relationship
### Linear-Quadratic Model
- **At low doses** (<200 mSv): Linear relationship (doubling dose = doubling risk)
- **At high doses**: Quadratic component becomes significant
- **Threshold debate**: Recent evidence suggests no safe threshold (UNSCEAR 2020)

### Cancer Risk from Radiation
- **Baseline risk**: ~20% lifetime cancer (all causes)
- **From 100 mSv exposure**: Increased risk ~0.5-1% (small but real)
- **Dose-dependent**: Risk increases with dose
- **Age-dependent**: Younger age = higher lifetime risk (more time for cancer development)

## Doubling Dose
- **Definition**: Dose that doubles spontaneous mutation rate
- **Estimate**: ~1-2 Sv for humans (extrapolated from animal studies, atomic bomb data)
- **Diagnostic significance**: CXR (~0.1 mSv) = 1/10,000 of doubling dose`,
        mnemonics: [
          { text: "High radiosensitivity organs: Gonads, marrow, colon, lung (wT=0.12)", explanation: "Weighting factors" },
          { text: "Linear-quadratic: low dose linear, high dose quadratic", explanation: "Dose-response model" },
          { text: "RBE = relative biologic effectiveness (alpha >neutrons >electrons)", explanation: "Biological effectiveness" }
        ],
        keyPoints: [
          "Effective dose = absorbed dose × organ weighting × LET factor",
          "Gonadal exposure most concerning (reproductive risk, genetic effects)",
          "LET higher for alpha/neutrons = greater biological damage per Gy",
          "Linear-quadratic model: low dose ~linear risk; high dose increases quadratically",
          "Doubling dose ~1-2 Sv (very high; diagnostic doses <<< doubling dose)"
        ],
        textbookRefs: [
          { book: "Grainger & Allison's Diagnostic Radiology", chapter: "Radiation Dosimetry", edition: "7th" },
          { book: "UNSCEAR Report: Effects of Ionizing Radiation", edition: "2020" }
        ]
      },
      {
        layer: 3,
        slug: "radiation-pregnancy-pediatric",
        title: "Radiation - Pregnancy & Pediatric Considerations",
        estimatedMinutes: 35,
        summary: "Fetal dose, teratogenic effects, pediatric radiosensitivity, risk assessment.",
        contentMd: `# Radiation in Special Populations

## Radiation in Pregnancy
### Gestational Stage Sensitivity
- **Preimplantation** (0-10 days): "All or nothing" - high lethality or normal
- **Organogenesis** (2-8 weeks): Peak teratogenic risk
  - Microcephaly, intellectual disability, growth retardation
  - Risk >100 mGy (10 rad)
- **Fetal period** (8+ weeks): Lower risk; growth retardation, cancer risk remain

### Fetal Dose by Procedure
- **CXR**: <0.01 mGy (essentially no risk)
- **CT head**: ~0.05 mGy (no fetal risk; below teratogenic threshold)
- **CT abdomen/pelvis**: ~30-50 mGy (approach cautionary threshold; discuss with OB)
- **Fluoroscopy (prolonged)**: Dose-dependent (can accumulate >100 mGy)

### Risk Assessment
- **<50 mGy**: No increased teratogenic risk
- **50-100 mGy**: Gray zone; discuss benefits vs risks
- **>100 mGy**: Consider termination (risk of malformation ~10-20%)

### Clinical Approach
- (1) Confirm pregnancy dates; assess timing (organogenesis highest risk)
- (2) Calculate fetal dose (physics/radiation safety)
- (3) Discuss with OB + patient (informed decision)
- (4) If diagnostic value high: proceed with reasonable precautions (shield pelvis if possible)
- (5) Avoid unnecessary imaging; MRI preferred if safe alternative available

## Pediatric Radiosensitivity
### Why Children at Higher Risk
- **Dividing cells**: Rapidly dividing cells (marrow, GI) more radiosensitive
- **Lifetime risk**: More time for cancer to develop (follow child decades)
- **Organ dose higher**: Smaller body size = concentration of dose

### Lifetime Risk Comparison
- **Adult 50 mSv CT**: Risk ~0.1-0.3%
- **Child 50 mSv CT**: Risk ~0.5-1% (3-5× higher)
- **Cumulative risk**: Repeated CTs in child (multiple studies) → higher lifetime risk

### Clinical Optimization
- (1) **Justified imaging**: Only when clinically indicated
- (2) **Optimize dose**: Use lowest mAs, shortest exposure time
- (3) **Right study**: Choose imaging modality (US/MRI preferred if diagnostic)
- (4) **Shielding**: Protect radiosensitive organs (gonads, thyroid, lens)
- (5) **Tracking**: Document cumulative dose if multiple studies

### Age-Specific Sensitivities
- **<5 years**: Peak sensitivity (rapid growth, development)
- **5-15 years**: Still elevated risk (ongoing growth)
- **>15 years**: Approaching adult risk
- **Prenatal**: Highest sensitivity (organogenesis)

## Cancer Risk Estimates
- **Baseline childhood cancer risk**: ~0.3-0.4%
- **From 50 mSv CT**: Increased risk ~0.1-0.2% (small but real)
- **Cumulative risk**: 5 CT studies = ~0.5-1% increased risk`,
        mnemonics: [
          { text: "Fetal dose <50 mGy safe, 50-100 mGy gray zone, >100 mGy concerning", explanation: "Pregnancy risk thresholds" },
          { text: "Organogenesis (2-8 weeks) = peak teratogenic risk", explanation: "Critical period" },
          { text: "Pediatric risk 3-5× adult (longer lifetime, dividing cells)", explanation: "Age-dependent sensitivity" }
        ],
        keyPoints: [
          "Pregnancy: <50 mGy = no teratogenic risk; >100 mGy = significant risk",
          "Organogenesis (2-8 weeks) = peak teratogenic risk (microcephaly, ID, growth retardation)",
          "Pediatric lifetime cancer risk 3-5× adult (small absolute risk, but multiplicative)",
          "CXR in pregnancy: <0.01 mGy (essentially no fetal risk)",
          "CT abdomen in pregnancy: 30-50 mGy (discuss benefits vs risks with OB)"
        ],
        textbookRefs: [
          { book: "ACR Manual: MRI Safety & Bioeffects", chapter: "Pregnancy & Radiation", edition: "2024" },
          { book: "Grainger & Allison's Diagnostic Radiology", chapter: "Radiation Risk in Pregnancy & Pediatrics", edition: "7th" }
        ]
      },
      {
        layer: 4,
        slug: "radiation-protection-exam",
        title: "Radiation Protection - Exam Prep",
        estimatedMinutes: 20,
        summary: "High-yield facts, risk numbers, clinical decision-making.",
        contentMd: `# Radiation Protection - Exam Prep

## High-Yield Facts
- **Background radiation**: ~3 mSv/year
- **CXR dose**: ~0.1 mSv (equivalent to 10 days background)
- **CT abdomen dose**: ~10 mSv (equivalent to 3+ years background)
- **Effective dose**: Accounts for organ sensitivity (Sv, not Gy)
- **ALARA principle**: As Low As Reasonably Achievable
- **Teratogenic threshold**: >100 mGy (50 mGy = safe)
- **Pediatric risk**: 3-5× adult (longer lifetime)
- **Linear relationship**: Doubling dose = doubling cancer risk (low-dose model)
- **Stochastic effects**: No safe threshold; any dose has probability of cancer
- **Time, Distance, Shielding**: Main protection mechanisms

## Dose Equivalents (Quick Reference)
- **CXR**: 0.1 mSv (10 days background)
- **CT head**: 2 mSv (2/3 year background)
- **CT chest**: 7 mSv (2+ years background)
- **CT abdomen/pelvis**: 10 mSv (3+ years background)
- **Fluoroscopy (1 hour)**: 50-100 mSv (15-30+ years background)

## Pregnancy Risk Thresholds
- **<50 mGy**: No increase teratogenic risk → proceed if clinical indication
- **50-100 mGy**: Gray zone → discuss benefits vs risks
- **>100 mGy**: Increased risk malformation (10-20%) → consider alternatives/termination

## Common Exam Questions
- "ALARA principle?" = As Low As Reasonably Achievable dose
- "Fetal dose <50 mGy safety?" = Safe; no teratogenic risk
- "Pediatric lifetime cancer risk?" = 3-5× adult (smaller body, longer lifetime)
- "Teratogenic threshold?" = >100 mGy (organogenesis most sensitive period)
- "CXR in pregnancy?" = <0.01 mGy; safe throughout pregnancy
- "Doubling dose?" = ~1-2 Sv (diagnostic doses <<< doubling dose)
- "Relative biological effectiveness alpha?" = ~20 (20× more damaging than X-rays)`,
        mnemonics: [
          { text: "Dose time: CXR = 1 mSv/10, CT head = 1 mSv/0.5, CT abd = 1 mSv/0.1", explanation: "mSv to years background" },
          { text: "Fetal: <50 safe, 50-100 gray, >100 concerning", explanation: "Pregnancy risk zones" },
          { text: "Organogenesis = 2-8 weeks = peak teratogenic risk", explanation: "Critical period" },
          { text: "ALARA = Time, Distance, Shielding (minimize exposure)", explanation: "Protection methods" }
        ],
        keyPoints: [
          "ALARA: minimize dose while maintaining diagnostic quality",
          "Background ~3 mSv/year; CXR ~0.1 mSv (low risk)",
          "CT abdomen ~10 mSv (3+ years background); evaluate necessity",
          "Pregnancy: <50 mGy safe; >100 mGy = increased malformation risk",
          "Pediatric risk 3-5× adult (longer lifetime for cancer development)"
        ],
        textbookRefs: [
          { book: "Grainger & Allison's Diagnostic Radiology", chapter: "Radiation Protection", edition: "7th" },
          { book: "ACR Manual: Radiation Safety & Bioeffects", edition: "2024" }
        ]
      },
      {
        layer: 5,
        slug: "radiation-clinical-decisions",
        title: "Radiation Protection - Active Recall",
        estimatedMinutes: 20,
        summary: "Clinical scenarios: pregnancy imaging, pediatric dose optimization, risk communication.",
        contentMd: `# Radiation Protection - Active Recall

## Q1: Pregnant Woman with Suspected PE
**Q: 28-week pregnant woman with acute dyspnea, chest pain, suspected PE. Conventional CXR normal. Should CTPA be done? Calculate fetal dose risk.**

A: **Diagnosis critical** - PE can be fatal if missed; benefits of CTPA likely outweigh risks. **Fetal dose analysis**: (1) CTPA involves irradiation of chest (not direct pelvis), (2) Fetal dose from CTPA ~1-2 mGy (well below 50 mGy threshold), (3) **Fetal risk negligible** (<50 mGy = no teratogenic risk). **Procedure**: (1) Discuss with OB (inform of radiation dose), (2) Proceed with CTPA if clinical suspicion high (diagnostic yield high), (3) Perform with optimization (reduce mA if possible, limit scout/repeat exposures), (4) Shield abdomen/pelvis if possible (protective apron may help). **Alternative considered**: VQ scan (lower fetal dose ~1 mGy, but CTPA more sensitive/specific for PE in pregnancy). **Decision**: CTPA reasonable if clinical suspicion high (benefits >> risks). **Reassurance**: Fetal dose far below teratogenic threshold.

## Q2: Child with Head Injury - CT Indications
**Q: 5-year-old with minor fall, normal neuro exam. Parents insist on CT head. Is imaging indicated? Discuss radiation risk.**

A: **CT NOT indicated** (minor mechanism, normal exam). **Clinical decision**: PECARN criteria recommend CT only if: (1) GCS <15, (2) Severe mechanism (MVA, fall >1.5m), (3) Vomiting, headache, altered behavior, skull fracture signs. **This child**: Meets NONE of criteria. **Radiation risk**:
- **CT head in 5-year-old**: ~2 mSv
- **Pediatric lifetime cancer risk**: 3-5× adult (~0.1-0.2% excess risk)
- **Lifetime context**: Small absolute risk, but real; child has 80+ years for cancer development

**Parent education**: (1) Explain imaging not indicated (avoids unnecessary radiation), (2) Reassure about exam findings (normal = low risk), (3) Provide head injury precautions, (4) "Choosing wisely" principle (reducing low-value imaging in pediatrics). **Appropriate approach**: Observation at home with return precautions (vomiting, severe headache, behavioral changes = return).

## Q3: Occupational Radiation Exposure
**Q: Interventional radiologist chronically exposed to fluoroscopy. Annual badge reading shows 2000 mrem/year (20 mSv). Is this acceptable? What precautions needed?**

A: **Annual dose EXCESSIVE** (occupational limit 5 rem/year = 50 mSv; this is 40% of limit). **Concern**: (1) Cumulative dose over career (40 years × 20 mSv = 800 mSv total), (2) Cataracts risk (threshold 2 Gy acutely; chronic exposure lower), (3) Cancer risk (doubling approach with cumulative dose). **Precautions needed**:
- (1) **Lead apron**: Wear consistently (reduces exposure by 90%+)
- (2) **Thyroid collar**: Protects thyroid from scattered radiation
- (3) **Distance**: Step away from fluoroscopy when not actively intervening (inverse square law)
- (4) **Time**: Minimize procedure duration; optimize technique
- (5) **Shielding**: Ceiling-suspended shields, table-mounted shields
- (6) **Monitoring**: Use extremity badges (ring dosimeter) to track hand dose

**Dose reduction targets**: Goal is <10 mSv/year (well below occupational limit) through optimization. **Investigate**: Review technique; may have facility-wide optimization opportunities (equipment maintenance, procedural modifications).

## Q4: Risk Communication in Pregnancy
**Q: 32-week pregnant woman needs CT abdomen/pelvis for hematuria evaluation. Calculated fetal dose = 45 mGy. How to communicate risk?**

A: **Fetal dose 45 mGy = in safe range** (<50 mGy threshold). **Risk communication approach**:

1. **Contextualize**: "Your fetal dose of 45 mGy is below the threshold (50 mGy) where we see increased birth defects. In fact, it's far below the dose where teratogenic effects occur."

2. **Baseline comparison**: "Background radiation exposes your fetus to ~1 mGy over your entire pregnancy. This single CT = 45× that."

3. **Perspective**: "Studies of radiation exposure in pregnancy show that below 100 mGy, we do not see increased birth defects. Your dose is below that."

4. **Benefits frame**: "For your hematuria workup, CT is highly likely to find the cause (tumor, stone, etc.), which is important for your health."

5. **Discussion**: Confirm patient understands; address specific concerns; document shared decision-making.

6. **Proceed confidently** with imaging (benefits clearly outweigh risks).

## Q5: Pediatric CT Optimization
**Q: 8-year-old needs abdominal CT for appendicitis evaluation. How can dose be minimized while maintaining diagnostic quality?**

A: **Dose optimization strategies**:

1. **Justification**: Confirm ultrasound not diagnostic first (US preferred in children if feasible)

2. **Technique optimization**:
   - Use **lower mA** (80-120 mA, vs. 250+ in adults)
   - Use **lower kV** if soft tissue contrast acceptable (80 kV vs. 120 kV) - reduces dose significantly
   - **Limit field of view**: Scan abdomen only (not entire trunk)
   - **Single phase**: Avoid multiphasic imaging (diagnostic for appendicitis with portal venous phase only)
   - **Reduce scout**: One or two scout views (not multiple)

3. **Iterative reconstruction**: Modern CT uses iterative reconstruction (reduces noise, maintains quality at lower dose)

4. **Shielding**: Thyroid collar if not interfering with diagnostic area

5. **Goal**: Target dose ~3-5 mSv (vs. 10+ mSv adult standard), maintaining diagnostic quality

6. **Result**: ~50% dose reduction possible with optimization without loss of diagnostic accuracy for appendicitis.`
      }
    ]
  }
];
