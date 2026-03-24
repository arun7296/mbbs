import type { TopicLessons } from "./content-loader";

export const pharmacologyGapLessons: TopicLessons[] = [
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // PH-MOD-01-TOP-06: Pharmacogenomics & Rational Prescribing
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  {
    topicCode: "PH-MOD-01-TOP-06",
    layers: [
      {
        layer: 1,
        slug: "pharmacogenomics-rational-prescribing-foundation",
        title: "Pharmacogenomics & Rational Prescribing - Foundation",
        estimatedMinutes: 20,
        summary:
          "Pharmacogenomics studies how genetic variations affect drug response. Rational prescribing involves selecting the right drug, right dose, right route, and right duration for individual patients. The P-drug concept and Essential Medicines List guide clinical decision-making in India.",
        contentMd: `# Pharmacogenomics & Rational Prescribing

## What is Pharmacogenomics?
**Pharmacogenomics** = Study of how genetic polymorphisms influence drug efficacy and safety.

A patient's **genetic makeup** determines:
- How quickly they metabolize a drug
- How much drug reaches target sites
- Whether adverse reactions occur
- Which drug class works best for them

## Key Cytochrome P450 Polymorphisms

### CYP2D6 Polymorphism (Metabolism of CNS drugs)
| Phenotype | Activity | Example | Clinical Effect |
|-----------|----------|---------|-----------------|
| **Poor Metabolizer (PM)** | <25% of normal | ~7-10% Caucasians, ~3-5% Indians | Drug accumulation, toxicity at normal dose |
| **Extensive Metabolizer (EM)** | 100% (normal) | Most population | Standard dosing works |
| **Ultrarapid Metabolizer (UM)** | >100% | ~1-2% population | Subtherapeutic at normal dose |

**Affected Drugs**: Codeine (prodrug—inactive in PMs), tricyclic antidepressants (TCAs), fluoxetine, haloperidol, carvedilol

> **Clinical Pearl**: Codeine is **ineffective in poor metabolizers** (CYP2D6 PMs) because it must be converted to morphine by this enzyme. Alternative: morphine directly or tramadol.

### CYP2C19 Polymorphism (Metabolism of antiplatelet & proton pump inhibitors)
| Phenotype | Activity | Clinical Effect |
|-----------|----------|-----------------|
| **Poor Metabolizer** | <10% normal | Clopidogrel non-responder; pantoprazole and omeprazole reduce clopidogrel efficacy |
| **Extensive Metabolizer** | 100% | Normal response to clopidogrel |

**Affected Drugs**: Clopidogrel (inactive prodrug), omeprazole, pantoprazole, some anticonvulsants

### CYP2C9 Polymorphism (Warfarin Metabolism)
- **Slow metabolizers** → increased warfarin effect, higher bleeding risk
- **Fast metabolizers** → decreased warfarin effect, risk of thrombosis
- **Genetic testing recommended** before warfarin initiation (GenRx available in some centers in India)

### NAT2 Acetylation Phenotypes (Slow vs Fast Acetylators)
| Phenotype | Effect | Drugs |
|-----------|--------|-------|
| **Slow Acetylator** | Drug accumulation, toxicity | Isoniazid, sulfasalazine, dapsone, procainamide |
| **Fast Acetylator** | Rapid clearance, subtherapeutic levels | Same drugs - need higher or more frequent doses |

**Indian Context**: Tuberculosis therapy—slow acetylators have higher INH toxicity risk (peripheral neuropathy). Addition of pyridoxine (vitamin B6) reduces risk.

## Rational Prescribing: The 5 A's

### 1. **Acceptability** - Patient compliance
- Oral form for chronic conditions
- Dosing frequency: once or twice daily preferred
- Side effects acceptable to patient
- Cost within patient's budget

### 2. **Accessibility** - Available in locality
- Drug available at patient's local pharmacy
- On essential medicines list (India: NLEM)
- Affordable generics

### 3. **Appropriateness** - Correct drug for diagnosis
- Based on evidence (NCCIM, WHO guidelines)
- Allergies checked
- Drug interactions ruled out
- Contraindications absent

### 4. **Affordability** - Cost to patient
- Generic vs branded (equally effective)
- Generic amoxicillin Rs. 10-20 vs branded Amoxin Rs. 50
- Average patient can't afford monotherapy with new biologics

### 5. **Adverse Effects** - Minimized
- Drug with best safety profile chosen
- Monitoring plan for known ADRs
- Patient education on side effects

## Essential Medicines List (EML) - India

The **National List of Essential Medicines (NLEM) 2023** (Ministry of Health, India) contains ~376 drugs across all specialties.

### Why Essential Medicines List?
- Ensures **cost-effective treatment**
- Reduces irrational polypharmacy
- Maintains quality through standardized procurement
- Enables DOTS, immunization, TB-HIV programs

### Examples from NLEM 2023
| Condition | Essential Drug | Why Essential |
|-----------|----------------|---------------|
| HTN | Amlodipine, metoprolol, lisinopril | First-line, proven efficacy, cheap generics |
| Diabetes | Metformin, glibenclamide, insulin | Effective, affordable, available nationwide |
| Asthma | Salbutamol (albuterol), beclomethasone | Effective in acute and chronic disease |
| TB | INH, rifampicin, pyrazinamide, ethambutol | DOTS protocol requirement |
| Schizophrenia | Chlorpromazine, haloperidol, clozapine | Older agents still most cost-effective |

## The P-Drug Concept (Personal Formulary)

**P-Drug** = the drug each doctor chooses for a particular condition, based on:
1. Evidence (RCTs, guidelines)
2. Personal experience
3. Drug availability in locality
4. Cost to patient
5. Safety profile

### Example: Hypertension Management

A doctor in urban Delhi might choose:
- **First-line P-drug**: Amlodipine 5 mg once daily
  - Evidence: Multiple RCTs show benefit
  - Availability: Generic, ₹20-30/month
  - Experience: Good response, mild ankle edema only

A doctor in rural Bihar might choose:
- **First-line P-drug**: Hydrochlorothiazide 25 mg once daily
  - Availability: Government PHCs stock it
  - Cost: Free under NRHM
  - Experience: Works in local population

**Key Principle**: P-drug approach prevents irrational prescribing. Doctor masters one drug per condition rather than prescribing 5 different agents.

## Avoiding Irrational Prescribing

### Common Errors in India
1. **Polypharmacy**: Prescribing 10+ drugs for one patient
   - Example: Patient with cough given 5 syrups + 3 tablets instead of simple lozenges
2. **Fixed-Dose Combinations (FDCs)**: Inappropriate drug pairs
   - Example: Paracetamol + aspirin (same mechanism, just increases ADR risk)
3. **Antibiotics in viral illness**: Unnecessary and breeds resistance
4. **Branded over generic**: Equivalent generic costs 80% less
5. **Using new drugs when old ones work**: Cephalosporin for community-acquired pneumonia when amoxicillin+clavulanic acid suffices

### Rational Approach
- **Start with essentials**
- **Monotherapy preferred** over combinations
- **Lowest effective dose**
- **Regular review**: Continue only if beneficial`,
        mnemonics: [
          {
            text: "CYP2D6 PMs Can't metabolize Codeine - Codeine Produces no effect",
            explanation:
              "Poor metabolizers of CYP2D6 cannot convert codeine to morphine, so codeine is ineffective. They need morphine directly.",
          },
          {
            text: "AAAA for Rational Prescribing: Acceptability, Accessibility, Appropriateness, Affordability, Adverse effects",
            explanation:
              "Five key principles to guide drug selection ensuring patient compliance and safety.",
          },
          {
            text: "NAT2 = INH Toxicity: Slow acetylators need pyridoxine prophylaxis",
            explanation:
              "TB patients who are slow acetylators of isoniazid accumulate the drug, causing peripheral neuropathy. Addition of vitamin B6 prevents this.",
          },
        ],
        keyPoints: [
          "Pharmacogenomics uses genetic testing to personalize drug therapy",
          "CYP2D6 poor metabolizers cannot convert codeine to morphine (codeine is a prodrug)",
          "CYP2C19 polymorphisms affect clopidogrel and omeprazole efficacy",
          "Warfarin dosing should be guided by CYP2C9 and VKORC1 genetics when available",
          "Essential Medicines List (NLEM) in India ensures affordable, proven treatments",
          "P-drug concept: each doctor masters one drug per condition to prevent irrational prescribing",
          "Rational prescribing requires assessment of acceptability, accessibility, appropriateness, affordability, and adverse effects",
          "Slow acetylators of INH need vitamin B6 supplementation to prevent neuropathy",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 1 - Pharmacogenetics", edition: "8th" },
          { book: "Goodman & Gilman", chapter: "Ch 5 - Pharmacogenomics", edition: "13th" },
          { book: "Essentials of Medical Pharmacology", chapter: "Ch 1 - Rational Drug Use", edition: "7th" },
        ],
      },
      {
        layer: 2,
        slug: "pharmacogenomics-rational-prescribing-mechanism",
        title: "Pharmacogenomics & Rational Prescribing - Mechanism",
        estimatedMinutes: 25,
        summary:
          "Detailed mechanisms of genetic polymorphisms: how mutations alter enzyme activity, protein expression, and drug metabolism. Rational prescribing frameworks and algorithms for drug selection in Indian clinical practice.",
        contentMd: `# Mechanisms of Pharmacogenomics & Rational Prescribing

## Genetic Basis of Drug Metabolism Variation

### Single Nucleotide Polymorphisms (SNPs)
A SNP is a single DNA base change at one position.
- **CYP2D6*1**: Normal/wild-type allele (functional)
- **CYP2D6*4**: Non-functional (deletion or mutation)
- **CYP2D6*2**: Reduced function

When a patient has:
- Two normal alleles (*1/*1) → Extensive metabolizer
- One defective allele (*1/*4) → Intermediate metabolizer
- Two defective alleles (*4/*4) → Poor metabolizer

### Effect on Drug Clearance
$$Clearance = \\frac{Dose}{AUC}$$

In poor metabolizers of CYP2D6:
- Drug clearance is **25% of normal**
- AUC is **4x higher** than extensive metabolizers
- Same dose → 4x higher plasma levels → toxicity risk

### Example: TCAs in Different CYP2D6 Phenotypes
For amitriptyline 75 mg daily in major depression:
| Phenotype | Plasma Level | Effect |
|-----------|--------------|--------|
| Poor Metabolizer | 8000-10000 ng/mL | Toxicity (arrhythmia, delirium) |
| Intermediate | 3000-4000 ng/mL | Suboptimal |
| Extensive | 1000-1500 ng/mL | Therapeutic, no toxicity |
| Ultrarapid | 200-400 ng/mL | Subtherapeutic |

## Induction & Inhibition of Drug Metabolism

### CYP Induction (Enzyme Upregulation)
When a drug **induces** a CYP enzyme, it increases expression of that enzyme, speeding up metabolism of other drugs.

**Enzyme Inducers: SCAMP**
- **Smoking** (polycyclic hydrocarbons)
- **Carbamazepine**
- **Alcohol** (chronic use)
- **Methotrexate**
- **Phenytoin**
- **Rifampicin** (most potent in India - used for TB)

**Clinical Consequence**: Oral contraceptive pills fail because rifampicin speeds up ethinyl estradiol metabolism → contraceptive failure, unwanted pregnancies (common in TB patients on DOTS).

### CYP Inhibition (Enzyme Inhibition)
When a drug **inhibits** a CYP enzyme, metabolism slows and other drugs accumulate.

**Enzyme Inhibitors: SICK Cs**
- **Sodium cimetidine** (H2 blocker)
- **Isoniazid**
- **Ciprofloxacin**
- **Ketoconazole**
- **Cimetidine** (H2 blocker)
- **Clarithromycin** (macrolide antibiotic)

**Example**: When ketoconazole (CYP3A4 inhibitor) is given with terfenadine (antihistamine):
- Ketoconazole blocks terfenadine metabolism
- Terfenadine accumulates to toxic levels
- Causes **torsades de pointes** (ventricular arrhythmia)
- Risk of sudden cardiac death

## NAT2 Acetylation Phenotypes - Molecular Basis

**N-Acetyltransferase 2 (NAT2)** is an enzyme that acetylates drugs.

### NAT2 Genotypes & Phenotypes
| Genotype | Activity | Phenotype |
|----------|----------|-----------|
| Homozygous defective | <50% | Slow acetylator |
| Heterozygous | 50-90% | Intermediate acetylator |
| Normal alleles | >90% | Fast acetylator |

### Indian Population NAT2 Distribution
- **Slow acetylators**: ~50% (varies by ethnicity)
- **Intermediate**: ~35%
- **Fast acetylators**: ~15%

### Isoniazid (INH) Metabolism in TB

**Slow Acetylators**:
- INH half-life = 3-4 hours
- Drug accumulates with daily dosing
- **Peripheral neuropathy risk**: 15-20% (vs 2% in fast acetylators)
- **Hepatotoxicity risk**: Increased (INH is converted to toxic metabolite acetyl-INH)

**Prevention in slow acetylators**:
- Prophylactic **Vitamin B6 (pyridoxine) 10 mg daily** during TB treatment
- Prevents peripheral neuropathy in ~95% of cases
- Standard recommendation in India (NCCIM guidelines)

**Fast Acetylators**:
- INH cleared rapidly
- **Thrice-weekly dosing preferred** in DOTS programs (allows higher dose less frequently)
- Example: DOTS standard regimen = INH/RIF/PZA/ETB 3 times weekly for 4 months

## Rational Prescribing Algorithm (Indian Context)

### Step 1: Diagnosis Confirmation
- Clinical features + investigations
- Document presenting complaint clearly

### Step 2: Check Essential Medicines List (NLEM 2023)
- Drug must be on NLEM OR appropriate if NLEM drugs contraindicated
- Exception: Specialized agents (biologics) not on NLEM for approved indications

### Step 3: Verify No Contraindications
- Pregnancy: Check FDA category (especially first trimester)
- Renal/hepatic impairment: Adjust dose or avoid
- Drug allergies: Document in notes
- Current medications: Check interactions

### Step 4: Assess Patient Factors
- **Age**: Pediatric dosing rules apply
- **Weight**: Critical for antibiotics, chemotherapy
- **Renal function**: Adjust for creatinine clearance
- **Hepatic function**: Adjust for Child-Pugh grade
- **Genetics** (if available): CYP2D6, NAT2 for key drugs

### Step 5: Choose P-Drug
Based on:
- Evidence (guidelines, RCTs)
- Availability in locality
- Cost (preference for generics)
- Personal experience
- Safety in this specific patient

### Step 6: Set Stopping Rules
- Antibiotic: Total duration (e.g., 7 days for UTI)
- Antidiabetic: Diabetes control achieved (HbA1c <7%)
- Antihypertensive: BP target reached (140/90 in older adults, 130/80 in younger)

## Drug Interaction Mechanisms in Metabolism

### Type A Interaction: Enzyme Induction (Decreased Effect)
**Example**: Rifampicin + oral contraceptives
- Rifampicin induces CYP3A4
- CYP3A4 metabolizes ethinyl estradiol
- OCP plasma levels drop 40-50%
- Contraceptive failure → unplanned pregnancy
- **Solution**: Alternative contraception (copper IUD, depo-medroxyprogesterone) or different TB regimen

### Type B Interaction: Enzyme Inhibition (Increased Effect)
**Example**: Ketoconazole + sildenafil
- Ketoconazole inhibits CYP3A4
- CYP3A4 metabolizes sildenafil
- Sildenafil plasma levels increase 3-4 fold
- Risk of hypotension, priapism
- **Solution**: Reduce sildenafil dose or use different antifungal

### Type C Interaction: Protein Binding Displacement
**Example**: Aspirin + warfarin
- Both highly protein-bound (>95%)
- Aspirin displaces warfarin from albumin
- Warfarin free (unbound) fraction increases
- INR rises, bleeding risk increases
- **Solution**: Avoid aspirin; use acetaminophen for pain

## Personalized Dosing

### Loading Dose Adjusted for Genetics
$$Loading\\ Dose = \\frac{V_d \\times Target\\ C_p}{F \\times Bioavailability\\ corrected\\ for\\ phenotype}$$

For digoxin in a CYP3A4 poor metabolizer taking clarithromycin:
- Normal clearance = 7 mL/min/kg
- With clarithromycin inhibition = 3 mL/min/kg
- Loading dose should be **REDUCED by 40-50%**
- Monitor digoxin levels: therapeutic range 0.5-2 ng/mL (check at 5 days post-load)`,
        mnemonics: [
          {
            text: "SCAMP = Inducers: Smoking, Carbamazepine, Alcohol, Methotrexate, Phenytoin (+ Rifampicin for India)",
            explanation:
              "These drugs upregulate CYP enzymes, speeding metabolism of other drugs. Rifampicin is especially important in India due to TB prevalence.",
          },
          {
            text: "SICK Cs = CYP Inhibitors: cimetidine, Isoniazid, Clarithromycin, Ketoconazole, Ciprofloxacin",
            explanation:
              "These drugs block CYP enzymes, causing drug accumulation. Leads to toxicity and drug interactions.",
          },
          {
            text: "INH + Slow Acetylator = Neuropathy risk → Add B6 (pyridoxine)",
            explanation:
              "Standard TB treatment modification in slow NAT2 acetylators to prevent peripheral nerve damage.",
          },
        ],
        keyPoints: [
          "SNPs in CYP genes alter enzyme activity: poor (0-25%), intermediate (25-75%), extensive (75-150%), ultrarapid (>150%)",
          "Poor CYP2D6 metabolizers have 4x higher AUC than extensive metabolizers with same dose",
          "CYP inducers (rifampicin, carbamazepine) decrease levels of other drugs - OCP failure common in TB patients",
          "CYP inhibitors (ketoconazole, clarithromycin) increase levels of other drugs - toxicity risk",
          "NAT2 slow acetylators are ~50% of Indian population - INH neuropathy risk, need vitamin B6",
          "Rational prescribing algorithm: diagnosis → NLEM check → contraindications → patient factors → P-drug → stopping rules",
          "Enzyme induction & inhibition mechanisms underlie major drug-drug interactions",
          "Personalized dosing in poor metabolizers requires 40-50% dose reduction to prevent toxicity",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 1-3 - Pharmacokinetics & Genetics", edition: "8th" },
          { book: "Goodman & Gilman", chapter: "Ch 5-6 - Pharmacogenomics & Interactions", edition: "13th" },
          { book: "Essentials of Medical Pharmacology", chapter: "Ch 1-2 - Rational Drug Use", edition: "7th" },
        ],
      },
      {
        layer: 3,
        slug: "pharmacogenomics-rational-prescribing-clinical",
        title: "Pharmacogenomics & Rational Prescribing - Clinical Application",
        estimatedMinutes: 25,
        summary:
          "Real-world clinical scenarios: personalized dosing based on genetics, managing drug interactions in Indian practice, case studies of irrational prescribing and corrections, and implementation of P-drug concept in different clinical settings.",
        contentMd: `# Clinical Applications

## Case 1: Codeine in Different CYP2D6 Phenotypes

**Patient A (Poor Metabolizer)**
- Post-op pain, prescribed codeine 30 mg 6-hourly
- Expected: 30 mg prodrug → 1 mg morphine → modest analgesia
- Actual: Codeine accumulates, minimal morphine formed
- **Outcome**: Inadequate pain control, patient continues in pain

**Intervention**:
- Stop codeine
- Switch to **tramadol** (works via different mechanism - SNRI + weak NMDA antagonist)
- OR: **Morphine** 5 mg 4-hourly (skip the metabolic step)

**Patient B (Ultrarapid Metabolizer)**
- Same codeine 30 mg 6-hourly
- 30 mg codeine → 10-15 mg morphine rapidly
- **Outcome**: Excessive analgesia, respiratory depression, toxicity

**Intervention**:
- Reduce codeine to 10-15 mg
- OR: Switch to non-opioid analgesic (paracetamol, NSAID)

## Case 2: Isoniazid Neuropathy in TB Patient

**Patient C (Slow NAT2 Acetylator)**
- TB patient started on standard DOTS: INH/RIF/PZA/ETB
- At 3 months: Develops burning feet, unable to walk
- Diagnosis: **INH-induced peripheral neuropathy**
- Reason: INH accumulates in slow acetylators

**Management**:
- **Continue INH** (still effective despite accumulation)
- Add **Vitamin B6 (pyridoxine) 10 mg daily**
- Symptoms resolve in 2-4 weeks
- Continue B6 throughout TB treatment
- Monthly clinical review

**Prevention in Future TB Patients**:
- **Routine vitamin B6** given to ALL TB patients on INH in India (as per NCCIM)
- No need to test NAT2 phenotype - universal prophylaxis more cost-effective

## Case 3: Oral Contraceptive Failure in TB

**Patient D (Woman with TB)**
- On DOTS regimen: INH/RIF/PZA/ETB
- Using OCP: Levonorgestrel + ethinyl estradiol
- After 4 months of TB treatment: **Unplanned pregnancy**

**Why?**
- **Rifampicin induces CYP3A4 potently**
- CYP3A4 metabolizes ethinyl estradiol
- OCP levels drop 40-50% in first 2 weeks of rifampicin
- Ovulation occurs despite OCP use

**Prevention**:
- At TB diagnosis, counsel woman: OCP will fail during TB treatment
- Offer alternatives:
  - **Copper IUD** (T-shaped, non-hormonal, 99.2% efficacy)
  - **Medroxyprogesterone acetate (DMPA) injection** 150 mg IM every 3 months (used in NFPP)
  - **Barrier methods** (condoms) + spermicide
- Resume OCP 2 weeks after rifampicin stopped (when CYP3A4 normalizes)

## Case 4: Antibiotic-Induced Irrational Prescribing

**Scenario**: Patient with common cold (viral) visits rural primary health center

**Irrational Approach** (unfortunately common):
- Patient requests "strong medicine" and willing to pay
- Provider prescribes: Ceftriaxone 1 g IM daily x 3 days
- Cost: ₹300 per injection x 3 = ₹900
- Duration: Only 3 days (suboptimal for most infections)

**Problems**:
1. **Unnecessary**: Viral URI needs only symptomatic treatment
2. **Expensive**: Generic paracetamol + throat lozenges cost ₹20
3. **Promotes resistance**: Unnecessary antibiotic use kills normal flora, selects resistant organisms
4. **Wrong drug choice**: Ceftriaxone is reserved for serious infections (meningitis, severe pneumonia)

**Rational Approach**:
- Take history, examine for red flags (high fever, respiratory distress, altered mental status)
- Diagnosis: Viral URI (no bacterial indicators)
- **Reassure patient**: Most colds self-resolve in 7-10 days
- Management:
  - Paracetamol 500 mg BD for fever/malaise (₹5-10)
  - Lozenges + honey for cough (₹2)
  - Adequate fluids and rest
  - Return if symptoms worsen or persist >10 days
- Total cost: ₹20 (vs ₹900 for unnecessary antibiotic)

## Case 5: Polypharmacy in Elderly Patient

**Patient E (75-year-old with multiple comorbidities)**

**Irrational Prescriptions** (from various doctors):
1. Amlodipine 5 mg daily (HTN)
2. Metoprolol 50 mg BD (HTN, post-MI)
3. Atorvastatin 20 mg nocte (cholesterol)
4. Aspirin 75 mg daily (post-MI)
5. Levothyroxine 50 μg daily (hypothyroidism)
6. Omeprazole 20 mg daily (GERD)
7. Metformin 500 mg BD (diabetes)
8. Glibenclamide 5 mg BD (diabetes) ← **Inappropriate in elderly**
9. Sertraline 50 mg daily (depression)
10. Loratadine 10 mg daily (allergy) ← **Chronic use unjustified**
11. Cough syrup with chlorpheniramine, codeine, ammonium chloride ← **Irrational FDC**

**Problems Identified**:
- **Dual antidiabetic therapy** (metformin + glibenclamide) increases hypoglycemia risk without better glycemic control; glibenclamide is high-risk in elderly
- **Omeprazole + aspirin**: Omeprazole reduces aspirin's antiplatelet effect; should use pantoprazole instead
- **Chronic antihistamine** (loratadine) for seasonal allergy is irrational

**Rational Approach** (P-drug simplification):
1. Amlodipine 5 mg daily ✓ (continue)
2. Metoprolol 50 mg BD ✓ (continue)
3. Atorvastatin 20 mg nocte ✓ (continue)
4. Aspirin 75 mg daily ✓ (continue)
5. Levothyroxine 50 μg daily ✓ (continue)
6. **SWITCH Omeprazole → Pantoprazole 40 mg daily** (better interaction profile)
7. **STOP Glibenclamide** → Continue **Metformin 500 mg BD** only (safer in elderly)
8. Sertraline 50 mg daily ✓ (continue)
9. **STOP Loratadine** → Use as-needed during allergy season
10. **STOP Cough syrup** → Teach patient to use honey + lozenges

**Result**: 11 drugs → 9 drugs (still on target therapies), reduced ADR risk, cost ₹50/month → ₹35/month

## Case 6: Using P-Drug in Rural vs Urban Settings

### Urban Tertiary Center (Delhi)
**Hypertension P-drug**: Amlodipine 5 mg daily
- Rationale:
  - Evidence-based (SPRINT trial, NCCIM guidelines)
  - Excellent availability as generic
  - Cost: ₹20-30/month
  - Easy once-daily dosing (compliance)
  - My experience: Works in 70% of patients

### Rural PHC (Uttarakhand)
**Hypertension P-drug**: Hydrochlorothiazide 25 mg daily
- Rationale:
  - Available free under government scheme
  - Proven efficacy, simple to monitor (U&E check annually)
  - Works well in this population
  - Once-daily dosing
  - Experience: Effective locally

**Both approaches rational**—choosing based on **local context, not just guidelines**.

## Managing Drug Interactions in Indian Polypharmacy

### Interaction 1: Clarithromycin (antibiotic) + Atorvastatin (statin)

**Mechanism**: Clarithromycin inhibits CYP3A4 → atorvastatin accumulates

**Clinical Effect**:
- Atorvastatin levels increase 4-5 fold
- Risk of **statin-induced myositis, rhabdomyolysis**
- Patient develops severe muscle pain, dark urine (myoglobinuria)

**Management**:
- **Option 1**: Temporarily **STOP atorvastatin** during clarithromycin course (usually 5-7 days)
- **Option 2**: **Switch antibiotic** → use amoxicillin-clavulanate (CYP3A4 non-inhibitor)
- **Option 3**: Reduce atorvastatin to 10 mg if must continue with clarithromycin

### Interaction 2: Ketoconazole (antifungal) + Terfenadine (antihistamine) — CONTRAINDICATED

**Mechanism**: Ketoconazole inhibits CYP3A4 → terfenadine accumulates

**Clinical Effect**:
- Terfenadine blocks cardiac K+ channels
- Prolonged QT interval on ECG
- Risk of **torsades de pointes** (polymorphic VT) → sudden death

**Management**:
- **AVOID this combination completely**
- If patient needs antifungal: switch to itraconazole or fluconazole
- If patient needs antihistamine: use cetirizine (non-cardiac toxic alternative)

## Genetic Testing Implementation (Where Available)

### CYP2C9 + VKORC1 Testing Before Warfarin (Some Private Hospitals in India)
- Test cost: ₹3000-5000 (one-time)
- Guides warfarin loading dose
- Reduces bleeding complications in first month
- Example:
  - Patient with CYP2C9*3/*3 + VKORC1 -1639G/A
  - Normal dose = 5 mg/day
  - Adjusted dose = 2-3 mg/day (50% reduction)
  - Prevents over-anticoagulation

### NAT2 Testing Before TB (Not Routine in India Yet)
- Test cost: ₹2000-3000
- Identifies slow acetylators early
- Prescribe prophylactic vitamin B6 from start
- More cost-effective than treating neuropathy later
- Recommendation: **Universal B6 prophylaxis cheaper than testing** (testing cost > drug cost)`,
        mnemonics: [
          {
            text: "Codeine in PM = Pain remains; codeine in UM = Respiratory depression risk",
            explanation:
              "Poor metabolizers don't form morphine from codeine (ineffective); ultrarapid metabolizers form too much (toxicity).",
          },
          {
            text: "TB + OCP = Failure; Solution = Copper IUD or DMPA injection",
            explanation:
              "Rifampicin induces OCP metabolism, causing contraceptive failure. Non-hormonal alternatives essential.",
          },
          {
            text: "Clarithromycin + Statin = Myositis risk → Stop statin or change antibiotic",
            explanation:
              "CYP3A4 inhibition by clarithromycin causes statin accumulation, muscle damage.",
          },
        ],
        keyPoints: [
          "Codeine dosing depends on CYP2D6 phenotype; poor metabolizers need alternative analgesics (morphine, tramadol)",
          "All TB patients on INH should receive vitamin B6 to prevent neuropathy (especially slow acetylators)",
          "Rifampicin induces OCP metabolism; women with TB need non-hormonal contraception",
          "Viral URIs require only symptomatic care, not antibiotics; irrational prescribing costs patient money and promotes resistance",
          "Polypharmacy in elderly requires deprescribing: glibenclamide avoided, omeprazole changed to pantoprazole if on aspirin",
          "P-drug approach varies by setting: urban specialist vs rural PHC, based on availability and experience",
          "Clarithromycin blocks statin metabolism; either stop statin or switch antibiotic",
          "Ketoconazole + terfenadine is contraindicated (torsades risk); switch antifungal or antihistamine",
          "CYP2C9/VKORC1 testing guides warfarin dosing where available; reduces bleeding in first month",
          "Universal vitamin B6 prophylaxis in TB more cost-effective than NAT2 testing",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 1-3 - Pharmacokinetics, Interactions, Rational Use", edition: "8th" },
          { book: "Goodman & Gilman", chapter: "Ch 5-7 - Pharmacogenomics, Interactions, Therapeutics", edition: "13th" },
          { book: "Essentials of Medical Pharmacology", chapter: "Ch 1 - Rational Drug Use", edition: "7th" },
        ],
      },
      {
        layer: 4,
        slug: "pharmacogenomics-rational-prescribing-exam",
        title: "Pharmacogenomics & Rational Prescribing - Exam Prep",
        estimatedMinutes: 15,
        summary:
          "High-yield exam facts, one-liners, and comparison tables on pharmacogenomics, rational prescribing, and essential medicines relevant to NEXT and NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners

### Pharmacogenomics
- **CYP2D6 poor metabolizer**: Codeine is ineffective; use morphine instead
- **CYP2C19 poor metabolizer**: Clopidogrel non-responder; consider ticagrelor
- **CYP2C9 slow metabolizer**: Warfarin accumulates; start at 2-3 mg/day (vs normal 5 mg)
- **NAT2 slow acetylator**: INH neuropathy risk; give vitamin B6 prophylaxis
- **Codeine is a prodrug**: Converted to morphine by CYP2D6; inactive in poor metabolizers

### Rational Prescribing
- **P-drug**: Personal formulary—one drug per condition that each doctor masters
- **Essential Medicines List (NLEM)**: ~376 drugs covering all specialties in India
- **5 A's of rational prescribing**: Acceptability, Accessibility, Appropriateness, Affordability, Adverse effects
- **Irrational polypharmacy**: >5 drugs in outpatient without evidence = irrational
- **Fixed-dose combinations (FDCs)**: Irrational if no synergy (e.g., paracetamol + aspirin)

### Drug Interactions
- **Rifampicin induces OCP**: Contraceptive failure; switch to copper IUD or DMPA
- **Clarithromycin inhibits CYP3A4**: Statin myositis risk
- **Ketoconazole + terfenadine**: **CONTRAINDICATED** (torsades de pointes)
- **Omeprazole reduces clopidogrel**: CYP2C19 inhibition; use pantoprazole instead
- **INH + aspirin**: Risk of salicylate toxicity; avoid co-prescription

## Pharmacogenomics Comparison Table

| CYP Enzyme | Poor Metabolizer | Normal | Ultrarapid | Common Drugs |
|-----------|-----------------|--------|-----------|--------------|
| **CYP2D6** | Codeine X, TCA toxicity | Normal dosing | TCA toxicity risk | Codeine, TCAs, haloperidol |
| **CYP2C19** | Clopidogrel X, PPIs ↓effect | Normal dosing | PPIs ↓effect | Clopidogrel, omeprazole, pantoprazole |
| **CYP2C9** | Warfarin ↑effect | Normal dosing | Warfarin ↓effect | Warfarin, NSAIDs, phenytoin |
| **CYP3A4** | Statin toxicity | Normal dosing | Statin ↓effect | Statins, CCBs, digoxin |

## NAT2 Acetylation & INH

| NAT2 Phenotype | INH Metabolism | Peripheral Neuropathy Risk | Management |
|---|---|---|---|
| **Slow** | ↓↓ (Half-life 3-4 h) | 15-20% without B6 | Vitamin B6 10 mg daily |
| **Intermediate** | Normal | 5-10% | Vitamin B6 generally recommended |
| **Fast** | ↑↑ (Half-life 1-2 h) | 2% | No B6 needed; thrice-weekly dosing in DOTS |

## Enzyme Inducers vs Inhibitors

### **Inducers** (SCAMP + Rifampicin)
- **Effect**: ↓ Metabolism = ↓ Drug levels = Loss of efficacy
- **Key Example**: Rifampicin + OCP = Contraceptive failure
- **Time to onset**: 5-7 days
- **Time to recovery**: 2 weeks after stopping

### **Inhibitors** (SICK Cs + Ketoconazole, Clarithromycin)
- **Effect**: ↓ Metabolism = ↑ Drug levels = Toxicity risk
- **Key Example**: Clarithromycin + Statin = Myositis
- **Time to onset**: 1-2 days
- **Time to recovery**: 1-2 days after stopping

## Rational Prescribing Algorithm (Short Version)

```
1. Diagnosis (clinical features + investigations)
   ↓
2. Check NLEM availability
   ↓
3. Rule out contraindications (allergy, pregnancy, renal/hepatic)
   ↓
4. Assess patient factors (age, weight, genetics if available)
   ↓
5. Select P-drug (evidence + availability + experience)
   ↓
6. Set stopping rule (when to stop therapy)
   ↓
7. Monitor for ADRs and efficacy
```

## Previous Year Exam Themes

### NEXT Themes
- Codeine dosing in different CYP2D6 phenotypes
- INH-induced peripheral neuropathy management
- Rifampicin interaction with OCP
- Essential Medicines List drugs
- Rational antibiotic use in URIs

### NEET PG Themes
- CYP polymorphisms affecting drug metabolism
- NAT2 acetylation in TB patients
- P-drug concept and polypharmacy
- Drug interactions: induction vs inhibition
- Warfarin dosing based on CYP2C9 genotype

## Quick Facts for MCQs

1. **Codeine**: Prodrug activated by CYP2D6 → Ineffective in poor metabolizers
2. **Rifampicin**: Potent CYP3A4 inducer → Reduces OCP, corticosteroid, antiretroviral levels
3. **Ketoconazole**: CYP3A4 inhibitor → Increases levels of statins, CCBs, terfenadine (contraindicated)
4. **Vitamin B6**: Prevents INH neuropathy; given routinely in TB patients in India
5. **P-drug**: Each doctor should master ONE drug per condition, not prescribe everything available
6. **NLEM**: ~376 essential drugs; any deviation requires strong justification
7. **Drug interaction**: Rifampicin + warfarin = INR ↓ (increased dosing needed)
8. **TB + OCP**: Rifampicin induces OCP metabolism → copper IUD or DMPA better

## High-Frequency Drug Interactions (Exam Favorites)

1. **Rifampicin + OCP**: ↑ Metabolism → Contraceptive failure
2. **Rifampicin + Warfarin**: ↑ Metabolism → INR ↓, need ↑ warfarin dose
3. **Rifampicin + Methadone**: ↑ Metabolism → Withdrawal symptoms in addiction treatment
4. **Clarithromycin + Statin**: ↓ Metabolism → Myositis risk
5. **Omeprazole + Clopidogrel**: Inhibits CYP2C19 → ↓ Antiplatelet effect
6. **Ketoconazole + Terfenadine**: CONTRAINDICATED (torsades de pointes)
7. **ACE-I + K-sparing diuretics**: ↑ Hyperkalemia risk
8. **NSAIDs + ACE-I**: ↑ Acute kidney injury in elderly`,
        mnemonics: [
          {
            text: "Codeine = Corpse in Poor Metabolizers (no morphine formed)",
            explanation:
              "Crude but memorable: codeine is a prodrug, completely ineffective in CYP2D6 poor metabolizers.",
          },
          {
            text: "SCAMP + Rifampicin = Inducers (Speed up drug metabolism)",
            explanation:
              "These drugs increase CYP enzyme expression, reducing levels of other drugs.",
          },
          {
            text: "INH + Slow = Neuropathy: Always add B6",
            explanation:
              "Standard TB management in India: vitamin B6 prevents INH-induced peripheral neuropathy.",
          },
        ],
        keyPoints: [
          "Codeine ineffective in CYP2D6 poor metabolizers (7-10% Caucasians, 3-5% Indians); use morphine instead",
          "Clopidogrel requires CYP2C19 activation; poor metabolizers are non-responders",
          "Rifampicin + OCP = contraceptive failure due to CYP3A4 induction; use copper IUD or injection contraception",
          "Warfarin dosing adjusted based on CYP2C9 genotype where testing available",
          "NAT2 slow acetylators accumulate INH; vitamin B6 prophylaxis prevents neuropathy",
          "P-drug concept: master one drug per condition to prevent irrational polypharmacy",
          "NLEM in India: ~376 essential drugs; deviation requires justification",
          "5 A's: Acceptability, Accessibility, Appropriateness, Affordability, Adverse effects",
          "Enzyme inducers decrease drug levels (loss of effect); inhibitors increase levels (toxicity)",
          "Clarithromycin blocks CYP3A4; stop statin or switch antibiotic",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 1-3", edition: "8th" },
        ],
      },
      {
        layer: 5,
        slug: "pharmacogenomics-rational-prescribing-recall",
        title: "Pharmacogenomics & Rational Prescribing - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-style Q&A for self-testing on pharmacogenomics, genetic polymorphisms, and rational prescribing principles.",
        contentMd: `# Active Recall

**Q1:** Why is codeine ineffective in CYP2D6 poor metabolizers?
> Codeine is a prodrug that requires CYP2D6 to convert it to morphine (the active form). Poor metabolizers cannot perform this conversion, so no analgesia occurs.

**Q2:** What is a P-drug?
> P-drug = Personal formulary. Each doctor selects one drug per condition based on evidence, availability, cost, and personal experience, rather than prescribing multiple drugs.

**Q3:** How should NAT2 slow acetylators on isoniazid be managed?
> Give vitamin B6 (pyridoxine) 10 mg daily to prevent peripheral neuropathy, which occurs in 15-20% of slow acetylators without prophylaxis.

**Q4:** Why do oral contraceptives fail in TB patients?
> Rifampicin (TB drug) induces CYP3A4, which metabolizes ethinyl estradiol. Increased metabolism reduces OCP levels 40-50%, leading to ovulation and contraceptive failure.

**Q5:** What are the 5 A's of rational prescribing?
> Acceptability (compliance), Accessibility (availability), Appropriateness (evidence-based), Affordability (cost), and Adverse effects (minimize toxicity).

**Q6:** Name 3 CYP enzyme inducers important in India.
> Rifampicin (TB), Carbamazepine (epilepsy), Phenytoin (epilepsy). Secondary: Alcohol, Methotrexate, Smoking.

**Q7:** What is the mechanism of clarithromycin + statin interaction?
> Clarithromycin inhibits CYP3A4, reducing statin metabolism. Statin accumulates to toxic levels, causing myositis and risk of rhabdomyolysis.

**Q8:** How many drugs are on India's Essential Medicines List (NLEM 2023)?
> Approximately 376 drugs covering all specialties, intended to ensure cost-effective, evidence-based treatment.

**Q9:** What is the half-life of INH in slow vs fast NAT2 acetylators?
> Slow acetylators: 3-4 hours (drug accumulates). Fast acetylators: 1-2 hours (rapid clearance, thrice-weekly DOTS dosing used).

**Q10:** If a patient on warfarin starts ketoconazole, what should be done?
> Ketoconazole inhibits CYP2C9 (warfarin metabolism). INR will rise, increasing bleeding risk. REDUCE warfarin dose by 30-40% or switch to different antifungal.`,
        mnemonics: [],
        keyPoints: [
          "10 high-yield recall questions on pharmacogenomics, rational prescribing, and clinical interactions",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 1-3", edition: "8th" },
        ],
      },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // PH-MOD-08-TOP-05: Immunopharmacology & Biologics
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  {
    topicCode: "PH-MOD-08-TOP-05",
    layers: [
      {
        layer: 1,
        slug: "immunopharmacology-biologics-foundation",
        title: "Immunopharmacology & Biologics - Foundation",
        estimatedMinutes: 20,
        summary:
          "Immunopharmacology studies drugs modulating immune responses. Immunosuppressants (conventional & targeted), immunostimulants, monoclonal antibodies, and biologic therapies. Applications in autoimmune diseases, organ transplant, and cancer immunotherapy.",
        contentMd: `# Immunopharmacology & Biologics

## Overview of Immune Modulation

The immune system exists in balance:
- **Excessive immunity** → Autoimmune disease, allergy, transplant rejection
- **Deficient immunity** → Infections, cancer
- **Balanced immunity** → Optimal health

**Immunopharmacology** uses drugs to restore balance.

## Classification of Immunomodulators

### 1. Immunosuppressants (Suppress Excess Immune Response)

#### Conventional Immunosuppressants

| Drug | Mechanism | Uses | Major ADR |
|------|-----------|------|----------|
| **Corticosteroids** (Prednisolone, methylprednisolone) | ↓ Cytokine production, T-cell proliferation | Autoimmune, transplant, allergy, asthma | Infection, osteoporosis, hyperglycemia |
| **Azathioprine** | Purine analogue, ↓ lymphocyte proliferation | SLE, autoimmune hepatitis, transplant | Bone marrow suppression, infection |
| **Methotrexate** | DHFR inhibitor, ↓ T & B cell proliferation | RA, SLE, IBD | Hepatotoxicity, bone marrow toxicity, mucositis |
| **Mycophenolate mofetil (MMF)** | IMPDH inhibitor, ↓ lymphocyte proliferation | Transplant rejection, lupus nephritis | GI toxicity, bone marrow suppression |

#### Calcineurin Inhibitors (Targeted Immunosuppressants)

| Drug | Mechanism | Uses | Major ADR |
|------|-----------|------|----------|
| **Cyclosporine** | Calcineurin inhibitor, ↓ IL-2 production | Organ transplant, psoriasis, uveitis | Nephrotoxicity, HTN, gingival hyperplasia |
| **Tacrolimus** | More potent calcineurin inhibitor | Organ transplant, refractory autoimmune | Nephrotoxicity, neurotoxicity, hyperglycemia |

**Mechanism**: Block calcineurin (protein phosphatase) → ↓ IL-2 & T-cell activation

#### TNF-α Inhibitors (Biologic)

| Drug | Type | Uses | ADR |
|------|------|------|-----|
| **Infliximab** | Chimeric monoclonal antibody | RA, IBD, psoriasis | TB reactivation, infection risk |
| **Etanercept** | TNF receptor fusion protein | RA, ankylosing spondylitis | TB, infection risk |
| **Adalimumab** | Fully human mAb | RA, IBD, psoriasis | TB, infection, demyelination risk |

### 2. Immunostimulants (Enhance Immune Response)

| Drug | Mechanism | Uses | ADR |
|------|-----------|------|-----|
| **Interferons (IFN-α, IFN-β, IFN-γ)** | Enhance NK cell activity, MHC expression | Viral hepatitis, Multiple sclerosis, melanoma | Flu-like illness, bone marrow suppression |
| **Interleukin-2 (IL-2)** | T-cell proliferation | Renal cell carcinoma, melanoma | Vascular leak syndrome (hypotension, pulmonary edema) |
| **BCG vaccine** | Non-specific immunity | Bladder cancer (intravesical) | Granulomatous reactions, rare TB dissemination |
| **Imiquimod** | TLR7 agonist | Basal cell carcinoma, genital warts | Local inflammation (intended), systemic symptoms |

### 3. Monoclonal Antibodies (mAbs) - Biologic Therapeutics

#### T-Cell Targeted mAbs
- **Anti-CD3** (OKT3): Depletes T cells → used in acute transplant rejection
- **Anti-CD25** (Basiliximab): Blocks IL-2 receptor → prevents T-cell activation

#### B-Cell Targeted mAbs
- **Anti-CD20** (Rituximab): Depletes B cells → RA, Non-Hodgkin's lymphoma, lupus nephritis
- **Anti-CD19** (Inebilizumab): Emerging in autoimmune

#### Cytokine-Targeted mAbs
- **Anti-IL-6** (Tocilizumab): Blocks IL-6 receptor → RA, cytokine release syndrome (CRS) in CAR-T
- **Anti-IL-17** (Secukinumab): Blocks IL-17 → Psoriasis, ankylosing spondylitis
- **Anti-TNF-α** (Infliximab, Adalimumab, Etanercept): Blocks TNF-α → RA, IBD, psoriasis

## Structure of Monoclonal Antibodies

Nomenclature tells you the antibody type:
- **-ximab** = CHImeric (mouse-human hybrid, e.g., **infliximab**)
- **-zumab** = HUManized (mostly human with mouse variable region, e.g., **adalimumab**)
- **-umab** = Fully human (e.g., **adalimumab**)

The more human the antibody, the less likely immune rejection.

## Clinical Applications in Indian Practice

### Rheumatoid Arthritis (RA)

**Standard Management** (NCCIM guidelines):
1. **DMARDs** (Disease-modifying antirheumatic drugs):
   - Conventional: Methotrexate 15 mg weekly (first-line)
   - Sulfasalazine 2 g daily
   - Leflunomide 10-20 mg daily
2. **Biologics** (if inadequate response to conventional DMARDs):
   - TNF-α inhibitors: Infliximab, etanercept, adalimumab
   - IL-6 inhibitors: Tocilizumab
3. **Corticosteroids**: Low-dose prednisolone (7.5 mg/day max)
4. **NSAIDs**: For symptom control

**Cost Barrier in India**: Biologics cost ₹50,000-200,000/month; most patients cannot afford. Conventional DMARDs (methotrexate cost ₹1000-2000/month) used for majority.

### Systemic Lupus Erythematosus (SLE)

**Management**:
1. **Mild disease** (arthritis, rash): NSAIDs + hydroxychloroquine
2. **Moderate disease**: Prednisolone 0.5-1 mg/kg/day + hydroxychloroquine
3. **Severe/renal involvement** (lupus nephritis): Methylprednisolone + Cyclophosphamide or MMF
4. **Biologic** (refractory): Belimumab (anti-BAFF) or rituximab (anti-CD20)

### Inflammatory Bowel Disease (Crohn's disease, Ulcerative Colitis)

**Management**:
1. **Mild-moderate disease**: Mesalamine (5-ASA), corticosteroids
2. **Severe disease**: TNF-α inhibitors (infliximab preferred for Crohn's)
3. **Steroid-refractory**: Azathioprine, methotrexate, or second TNF-α inhibitor

### Organ Transplantation

**Induction Therapy** (prevent acute rejection):
- **Anti-thymocyte globulin (ATG)** or **Basiliximab** (anti-CD25 mAb)

**Maintenance Therapy**:
- **Calcineurin inhibitor**: Cyclosporine or tacrolimus
- **Purine analogue**: Azathioprine or mycophenolate mofetil
- **Corticosteroids**: Low-dose prednisolone

**Acute Rejection** (if occurs):
- High-dose methylprednisolone IV
- OKT3 or anti-thymocyte globulin

## Major Adverse Effects & Monitoring

### Conventional Immunosuppressants

| Drug | Toxicity | Monitoring |
|------|----------|-----------|
| **Corticosteroids** | HTN, DM, osteoporosis, PCP | BP, glucose, DEXA scan |
| **Azathioprine** | Bone marrow suppression, hepatotoxicity | CBC, LFTs monthly |
| **Methotrexate** | Hepatotoxicity, bone marrow, mucositis | LFTs, CBC, baseline CXR (PCP prophylaxis) |
| **Mycophenolate** | GI toxicity, infection | CBC, monitor for diarrhea |
| **Cyclosporine** | Nephrotoxicity, gingival hyperplasia | Creatinine, cyclosporine levels, gum care |
| **Tacrolimus** | Nephrotoxicity, hyperglycemia, neurotoxicity | Glucose, creatinine, tacrolimus levels |

### Biologic Therapies (TNF-α Inhibitors)

**Major Concerns**:
1. **TB Reactivation**: 10-15 fold increased risk
   - All patients tested for TB (mantoux or QuantiFERON) before starting
   - Prophylaxis with INH if latent TB detected
2. **Opportunistic infections**: Fungal, CMV, Nocardia
3. **Demyelination**: Risk of MS-like syndrome
4. **Hepatotoxicity**: Rare but serious
5. **Hematologic**: Bone marrow suppression (rare)
6. **Lupus-like syndrome**: With anti-TNF therapy

**Monitoring**:
- Baseline TB screening
- Regular infection surveillance
- LFTs and CBC
- Counsel on signs of infection (fever, cough)`,
        mnemonics: [
          {
            text: "CIM for Conventional Immunosuppressants: Corticosteroids, Immunosuppressive purines/antimetabolites, Methotrexate",
            explanation:
              "Main conventional agents used in autoimmune diseases and transplantation.",
          },
          {
            text: "CABBAGE = Calcineurin inhibitors, Anti-IL agents, B-cell mAbs, Biologics, Antibodies, Glucocorticoids, Enzymes (purine pathway)",
            explanation:
              "Mnemonic for classes of immunomodulators, though slightly forced.",
          },
          {
            text: "TNF-α blockers = TB test BEFORE starting (TB reactivation risk)",
            explanation:
              "Critical safety concern: all patients need TB screening (mantoux or QuantiFERON) before starting any TNF-α inhibitor.",
          },
        ],
        keyPoints: [
          "Immunosuppressants target excess immunity in autoimmune disease and transplant rejection",
          "Conventional immunosuppressants: corticosteroids, azathioprine, methotrexate, mycophenolate",
          "Calcineurin inhibitors (cyclosporine, tacrolimus) block IL-2 production and T-cell activation",
          "Monoclonal antibodies target specific immune cells: T-cells (anti-CD3, anti-CD25), B-cells (anti-CD20), cytokines (anti-TNF, anti-IL-6)",
          "TNF-α inhibitors (infliximab, adalimumab, etanercept) used in RA, IBD, psoriasis but increase TB and infection risk",
          "All patients starting TNF-α inhibitors must be screened for tuberculosis (mantoux or QuantiFERON)",
          "Monoclonal antibody nomenclature: -ximab (chimeric), -zumab (humanized), -umab (human)",
          "Cost barrier in India: biologics ₹50,000-200,000/month; conventional agents affordable (methotrexate ₹1000-2000/month)",
          "Immunostimulants (interferons, IL-2, BCG, imiquimod) enhance immune response for cancer and chronic infections",
          "Monitoring conventional agents: LFTs, CBC; monitoring biologics: TB screening, infection surveillance, LFTs, CBC",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 33-34 - Immunosuppressants, Biologics", edition: "8th" },
          { book: "Goodman & Gilman", chapter: "Ch 34-35 - Immunopharmacology", edition: "13th" },
          { book: "Essentials of Medical Pharmacology", chapter: "Ch 31 - Immunomodulators", edition: "7th" },
        ],
      },
      {
        layer: 2,
        slug: "immunopharmacology-biologics-mechanism",
        title: "Immunopharmacology & Biologics - Mechanism",
        estimatedMinutes: 25,
        summary:
          "Detailed mechanisms of immune modulation: T-cell signaling, calcineurin pathway, JAK-STAT inhibition, monoclonal antibody mechanism of action, complement activation, ADCC, and CDC. Cellular and molecular basis of immunotherapy.",
        contentMd: `# Mechanisms of Immune Modulation

## T-Cell Activation & Signaling

### Normal T-Cell Activation (Dual Signal Model)

**Signal 1** (TCR stimulation):
- Antigen presented by MHC on APC
- TCR recognizes antigen-MHC complex
- CD3 and CD8/CD4 clusters form
- Intracellular signaling via Lck and ZAP-70

**Signal 2** (Co-stimulation):
- B7 (on APC) binds CD28 (on T-cell)
- Results in IL-2 production, T-cell proliferation
- **CTLA-4** (negative regulator on T-cell) also binds B7; stronger affinity than CD28 but delivers inhibitory signal

**Full T-cell activation** requires BOTH signals. Without signal 2 → T-cell anergy (programmed cell death).

## Conventional Immunosuppressants - Mechanisms

### Corticosteroids

**Mechanism**:
1. Bind cytoplasmic glucocorticoid receptor (GR)
2. Complex translocates to nucleus
3. Transactivation: Upregulates inhibitory proteins (IκBα) → ↓ NF-κB
4. Transrepression: Inhibits IL-2, TNF-α, IL-6 genes
5. Result: ↓ Cytokine production, ↓ lymphocyte proliferation, ↓ adhesion molecules

**Net Effect**: Non-specific immune suppression affecting both T and B cells

### Azathioprine (AZA) & Mycophenolate Mofetil (MMF)

**Mechanism**:
- Both interfere with **purine synthesis** (de novo pathway)
- Azathioprine: Converted to 6-mercaptopurine → inhibits HGPRT
- MMF: Irreversibly inhibits IMPDH (inosine monophosphate dehydrogenase)

**Selective toxicity to lymphocytes**:
- Lymphocytes rely heavily on de novo purine synthesis
- Other cells can use salvage pathway
- Result: ↓ Lymphocyte proliferation

### Methotrexate (MTX)

**Mechanism**:
- Inhibits **dihydrofolate reductase (DHFR)**
- Blocks tetrahydrofolate synthesis
- Prevents DNA synthesis (rapidly dividing cells affected most)
- Secondary mechanism: Adenosine accumulation → adenosine A2A receptor activation → ↑ IL-10 and TGF-β (anti-inflammatory)

**Effect on immunity**:
- ↓ T & B cell proliferation (selective)
- Anti-inflammatory effects via adenosine signaling

## Calcineurin Inhibitors - Molecular Mechanism

### Cyclosporine & Tacrolimus

**Mechanism**:
1. Both bind to intracellular proteins:
   - Cyclosporine: Binds **cyclophilin**
   - Tacrolimus: Binds **FK506-binding protein (FKBP)**
2. Complex inhibits **calcineurin** (protein phosphatase 2B)
3. Calcineurin normally dephosphorylates **NFAT** (nuclear factor of activated T-cells)
4. Unphosphorylated NFAT enters nucleus → transcribes IL-2 gene
5. When calcineurin inhibited:
   - NFAT remains phosphorylated
   - NFAT cannot enter nucleus
   - **IL-2 production blocked**
   - **T-cell activation blocked**

**Potency**: Tacrolimus ~100x more potent than cyclosporine in inhibiting calcineurin

**Specificity**: Targets T-cell IL-2 production specifically (more selective than corticosteroids)

## Monoclonal Antibodies - Mechanisms of Action

### Direct Effects

#### 1. Opsonization (Cell Marking)
mAb binds to target antigen on cell surface → marks cell for destruction by immune cells

**Example**: Anti-CD20 (rituximab) on B cells
- Rituximab binds CD20 (B-cell surface antigen)
- Immune cells recognize the antibody constant region (Fc)
- B cell is phagocytosed by macrophages

#### 2. Antibody-Dependent Cellular Cytotoxicity (ADCC)
- mAb constant region (Fc) binds **FcγRIII** on NK cells, macrophages
- NK cells release perforins & granzymes
- **Cell lysis occurs**

**Example**: Rituximab-mediated B-cell lysis via ADCC

#### 3. Complement-Dependent Cytotoxicity (CDC)
- mAb Fc region binds **C1q** (complement protein)
- Classical complement cascade activated
- **Membrane attack complex (MAC)** forms
- **Cell lysis**

**Example**: Rituximab also mediates B-cell lysis via complement activation

#### 4. Receptor Blockade
mAb blocks binding of ligand to receptor

**Example**:
- Anti-TNF-α (infliximab, adalimumab): Block TNF-α binding to TNFR
- Anti-CD25 (basiliximab): Block IL-2 binding to IL-2 receptor
- Result: Inhibition of downstream signaling

#### 5. Receptor Agonism (Rare)
mAb activates receptor signaling

**Example**:
- Anti-CD3 (OKT3): Activates T-cell receptor signaling
- Causes massive T-cell activation initially
- Followed by T-cell depletion

### JAK-STAT Inhibitors (Targeted Biologics)

**Mechanism**:
1. Cytokines (IFN-γ, IL-6, IL-2) bind to cytokine receptors
2. Receptors recruit **JAK kinases**
3. JAKs phosphorylate **STAT proteins**
4. Phospho-STATs dimerize, enter nucleus, transcribe inflammatory genes
5. JAK inhibitors (tofacitinib, baricitinib) block JAK kinases

**Effect**: ↓ Inflammatory signaling via IL-6, TNF-α, and IFN-γ

**Advantage over TNF-α blockers**: Wider anti-inflammatory effect, may not increase TB risk

## Immunostimulant Mechanisms

### Interferons (IFN-α, IFN-β, IFN-γ)

**Mechanism**:
1. Bind to **Type I interferon receptors** (IFN-α, IFN-β)
2. Activate **JAK-STAT pathway**
3. Upregulate **MHC-I and MHC-II** on all cells
4. Enhance **NK cell activity**
5. Increase antiviral and anti-tumor immunity
6. IFN-γ activates macrophages → Th1 differentiation

**Clinical effects**:
- Enhanced antiviral immunity (hepatitis C, MS)
- Enhanced tumor immunity (melanoma, renal cell cancer)
- **Side effects**: Flu-like illness (myalgia, fever, fatigue), bone marrow suppression

### IL-2 (Interleukin-2)

**Mechanism**:
1. Binds IL-2 receptor on activated T-cells
2. **T-cell proliferation and activation** (acts as T-cell growth factor)
3. Enhances NK cell cytotoxicity
4. Promotes Th1 differentiation

**Clinical effect**: Used in melanoma and RCC (immunotherapy)

**Side effect**: **Vascular leak syndrome** (capillary permeability increases)
- Hypotension, pulmonary edema, ARF
- Requires ICU monitoring
- Reversible with fluid restriction and diuretics

## Mechanism of TB Reactivation with TNF-α Inhibitors

**Normal immunity to TB**:
- **TNF-α** secreted by macrophages infected with *Mycobacterium tuberculosis*
- TNF-α activates macrophages to kill intracellular bacilli
- TNF-α required for **granuloma formation** (walls off infection)

**With TNF-α inhibitors**:
- TNF-α blocked (by infliximab, adalimumab, etanercept)
- **Macrophage activation impaired**
- **Granulomas unable to form or maintain**
- Latent TB can reactivate
- **10-15 fold increased risk of TB** (compared to general population)

**Prevention**: TB testing before starting TNF-α inhibitor; if latent TB detected, prophylactic INH

## Monoclonal Antibody Kinetics

### Pharmacokinetics of mAbs

**Absorption**:
- Cannot be given orally (peptides destroyed by GI enzymes)
- Given IV (infliximab, rituximab, tocilizumab) or SC (adalimumab, etanercept)
- Bioavailability of SC: 60-80%

**Distribution**:
- Large molecules (150 kDa), distributed to ECF
- Minimal CSF penetration (BBB blocks them)
- Accumulate in target tissues (e.g., B-cell areas of lymph nodes)

**Metabolism**:
- Proteolytic degradation (like all proteins)
- Target cell internalization and degradation (some mAbs)
- Half-life: 10-20 days for most mAbs

**Elimination**:
- Renal: Minimal (too large to filter)
- Hepatic: Proteolytic breakdown
- Non-specific mAbs may have longer half-life (less target-mediated elimination)

### Antibody Kinetics vs Small-Molecule Drugs

| Parameter | Small-Molecule Drug | Monoclonal Antibody |
|-----------|-------------------|-------------------|
| **Oral bioavailability** | Variable | None (peptide) |
| **Half-life** | Hours to days | 10-20 days |
| **Volume of distribution** | Varies widely | ~3-5 L (plasma/ECF) |
| **Metabolism** | Phase I, II enzymes | Proteolysis |
| **Renal clearance** | Often significant | Minimal |
| **Immunogenicity** | Rare | High for non-human, low for humanized |

**Clinical implication**: mAbs need less frequent dosing (weekly to monthly intervals)`,
        mnemonics: [
          {
            text: "T-cell activation = TCR (Signal 1) + CD28 (Signal 2); CTLA-4 = Brake pedal",
            explanation:
              "Full T-cell activation requires both TCR and co-stimulation. CTLA-4 provides inhibitory signal (breaks immune response).",
          },
          {
            text: "Calcineurin inhibitors = Block IL-2 production (via NFAT dephosphorylation)",
            explanation:
              "Cyclosporine and tacrolimus both inhibit calcineurin, preventing NFAT nuclear entry and IL-2 transcription.",
          },
          {
            text: "mAb mechanisms = ORCA: Opsonization, Receptor blockade, Complement, Antibody-dependent cellular cytotoxicity",
            explanation:
              "Four main ways monoclonal antibodies work: marking cells, blocking signaling, activating complement, and recruiting killer cells.",
          },
        ],
        keyPoints: [
          "T-cell activation requires dual signal: TCR signaling (Signal 1) and CD28-B7 interaction (Signal 2)",
          "CTLA-4 has higher affinity for B7 than CD28; delivers inhibitory signal (negative costimulation)",
          "Corticosteroids inhibit NF-κB and suppress cytokine genes (IL-2, TNF-α, IL-6)",
          "Purine antagonists (AZA, MMF) preferentially affect lymphocytes which rely on de novo pathway",
          "Methotrexate blocks DHFR and also activates adenosine signaling (anti-inflammatory)",
          "Calcineurin inhibitors block NFAT dephosphorylation, preventing IL-2 gene transcription",
          "Tacrolimus ~100x more potent than cyclosporine but similar mechanism",
          "mAbs work via opsonization, receptor blockade, CDC (complement), and ADCC (antibody-dependent cellular cytotoxicity)",
          "Humanized mAbs have less immunogenicity than chimeric antibodies",
          "TNF-α critical for macrophage activation and granuloma formation in TB; TNF-α inhibitors increase TB reactivation 10-15 fold",
          "JAK-STAT inhibitors block multiple cytokine pathways; emerging alternative to TNF-α inhibitors",
          "IL-2 causes vascular leak syndrome (hypotension, pulmonary edema); requires ICU monitoring and fluid restriction",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 33-34 - Immunopharmacology", edition: "8th" },
          { book: "Goodman & Gilman", chapter: "Ch 34-35", edition: "13th" },
          { book: "Essentials of Medical Pharmacology", chapter: "Ch 31", edition: "7th" },
        ],
      },
      {
        layer: 3,
        slug: "immunopharmacology-biologics-clinical",
        title: "Immunopharmacology & Biologics - Clinical Application",
        estimatedMinutes: 25,
        summary:
          "Real-world clinical scenarios: managing RA with DMARDs and biologics, lupus nephritis treatment, IBD management, organ transplantation protocols, tumor immunotherapy with CAR-T cells, and adverse effect management in Indian practice.",
        contentMd: `# Clinical Applications

## Case 1: Rheumatoid Arthritis Management - From Conventional to Biologic

**Patient A (Early RA, 45-year-old woman)**

**Initial Presentation**:
- Morning stiffness >1 hour
- Symmetrical swelling of PIP, MCP joints (both hands)
- CRP 40 mg/L (elevated)
- RF and anti-CCP positive

**Starting Therapy** (NCCIM guidelines):
1. **Methotrexate 15 mg weekly** (first-line DMARD)
   - Efficacy: 50% remission rate in early RA
   - Cost: ₹1000-1500/month (affordable in government facilities)
   - Baseline tests: LFTs, CBC, CXR (screen for latent TB and PCP)
   - Monthly monitoring: LFTs, CBC for first 3 months, then 3-monthly
   - Counseling: Avoid pregnancy during MTX (teratogenic)

2. **NSAIDs**: Indomethacin 25 mg TID for joint pain

3. **Prednisolone**: 7.5 mg daily (lowest effective dose)

**Response at 12 weeks**:
- CRP normalized
- Joint pain improved 70%
- No disease remission yet

**Escalation at 6 months if inadequate response**:
- Add second DMARD: **Sulfasalazine 2 g/day**
- OR switch to **Leflunomide 10-20 mg/day**

**Inadequate response to dual therapy → Biologic**:
- Start **TNF-α inhibitor: Infliximab 3 mg/kg IV at 0, 2, 6 weeks, then every 8 weeks**
  - Contraindications check: TB, active infection, HBV, recent surgery
  - **Baseline TB screening**: Mantoux test (induration >5 mm) or QuantiFERON
  - If latent TB → start **INH 300 mg daily × 3 months** before infliximab
  - Cost: ₹50,000 per IV infusion (~₹100,000/month in private practice; not affordable for most Indians)
  - Efficacy: 60-70% achieve remission when combined with MTX
  - Monitoring: Monthly LFTs and CBC; annual TB screening

**Alternative in Cost-Constrained Setting**:
- Continue **Triple therapy**: MTX + Sulfasalazine + Leflunomide
- Efficacy: ~40-50% remission rate
- Cost: ₹3000-4000/month

---

## Case 2: Lupus Nephritis (WHO Class IV)

**Patient B (28-year-old woman with SLE)**

**Presentation**:
- Proteinuria: 3.5 g/24 hours
- Serum creatinine: 1.8 mg/dL (elevated from baseline 0.9)
- Serologies: ANA +ve, anti-dsDNA +ve, low C3/C4 (active disease)
- Renal biopsy: WHO Class IV (diffuse proliferative)

**Induction Therapy**:

1. **High-dose corticosteroid**:
   - **Methylprednisolone 500 mg IV daily × 3 days** (pulse therapy)
   - Then prednisolone 1 mg/kg/day (e.g., 60 mg) tapering

2. **Immunosuppression**:
   - **Cyclophosphamide 500-1000 mg/m² IV** every month × 6 cycles
   - OR **Mycophenolate mofetil 1-3 g/day**
   - Evidence: Cyclophosphamide superior for severe nephrotic class IV but higher toxicity
   - MMF preferred in young women (less teratogenic, less gonadal toxicity)

3. **Supportive care**:
   - ACE-I (lisinopril 10 mg daily) for proteinuria reduction
   - NSAID or acetaminophen for arthralgia (avoid NSAIDs if renal dysfunction)
   - Hydroxychloroquine 200-400 mg daily (continued, improves SLE outcomes)

**Maintenance Therapy** (after 6 months induction):
- **Azathioprine 50-100 mg daily** OR **MMF 1-2 g/day**
- Low-dose prednisolone 7.5-10 mg daily
- Continued ACE-I

**Refractory Lupus Nephritis** (if no response at 6 months):
- **Rituximab** 1000 mg IV on days 1 and 15 (anti-CD20 mAb)
- OR **Belimumab** (anti-BAFF, emerging in India)

**Monitoring**:
- Monthly: Creatinine, proteinuria, complement levels, anti-dsDNA
- Baseline and annual: CXR (cyclophosphamide causes cystitis risk)
- Avoid pregnancy on these drugs (teratogenic)

---

## Case 3: Crohn's Disease with Fistulizing Disease

**Patient C (32-year-old male)**

**Presentation**:
- Diarrhea (8-10 times/day)
- Abdominal pain and fever
- MRI enterography: Ileal involvement with **fistula to sigmoid colon**
- Elevated inflammatory markers: CRP 60 mg/L, ESR 50 mm/h

**Treatment Approach** (NCCIM IBD guidelines):

1. **Induction therapy**:
   - **Infliximab 5 mg/kg IV** at 0, 2, 6 weeks (loading doses)
   - Evidence: 60-70% fistula closure rate (superior to conventional agents)
   - TB screening before starting (mandatory)
   - **Combination therapy**: Infliximab + Azathioprine 50 mg daily (better outcomes than monotherapy)

2. **Maintenance**:
   - Infliximab 5 mg/kg IV every 8 weeks indefinitely
   - Azathioprine 50 mg daily

3. **Supportive**:
   - Antibiotics if infection (metronidazole 400 mg TID)
   - Nutritional support
   - Assess for perianal complications (abscesses)

**Monitoring**:
- Monthly during induction: LFTs, CBC, TB screening
- 3-6 monthly maintenance: LFTs, CBC
- CRP/inflammatory markers every 3 months
- MRI enterography at 6-12 months to assess fistula healing

**Cost issue**: Private infliximab cost ₹40,000 per dose (~₹200,000 for induction); government hospitals have limited access. Most Indian patients managed with conventional agents (mesalamine, azathioprine).

---

## Case 4: Heart Transplant Immunosuppression Protocol

**Patient D (55-year-old male with end-stage heart failure)**

**Procedure**: Orthotopic heart transplant

**Induction Immunosuppression** (Day 0 - prevent acute rejection):

1. **Intraoperative/immediately post-op**:
   - **Basiliximab** 20 mg IV immediately + 20 mg IV on day 4
   - (Anti-CD25 mAb, blocks IL-2 receptor on T-cells)
   - OR **Anti-thymocyte globulin (ATG)** 1.5 mg/kg daily × 3-5 days

2. **Immediate post-op corticosteroid**:
   - **Methylprednisolone 1-2 g IV** perioperatively
   - Taper to prednisolone 0.5-1 mg/kg/day orally

**Maintenance Immunosuppression** (after transplant):

1. **Calcineurin inhibitor** (target trough level):
   - **Tacrolimus** 0.15 mg/kg/day divided BD
   - Target level: 8-12 ng/mL (early post-op), taper to 5-10 ng/mL (chronic)
   - Monitoring: Tacrolimus levels, renal function (Cr, eGFR), glucose (new-onset DM risk)

2. **Purine antagonist**:
   - **Mycophenolate mofetil** 1 g BD
   - Monitoring: CBC (bone marrow suppression risk)

3. **Corticosteroid**:
   - Prednisolone 0.1-0.2 mg/kg/day (chronic dose after tapering)
   - Goal: Minimize dose to reduce long-term toxicity

**Triple therapy**: Tacrolimus + MMF + Prednisolone (standard regimen)

**Monitoring Schedule**:
- **First month**: Weekly tacrolimus levels, CBC, LFTs, renal function
- **3-12 months**: Monthly monitoring
- **Yearly**: Annual coronary angiography (screen for transplant CAD)

**Acute Rejection** (if develops):
- Endomyocardial biopsy to confirm
- High-dose methylprednisolone 500 mg IV × 3 days
- If steroid-refractory → OKT3 or ATG

---

## Case 5: Methotrexate Toxicity Management

**Patient E (52-year-old with RA on MTX)**

**Presentation after 4 months MTX**:
- Severe mouth ulcers (painful, bleeding)
- Low CBC: WBC 2.8 (normal 4.5-11), Hb 8.9 (anemia)
- LFTs abnormal: ALT 120 (normal <40)
- Patient reports diarrhea, nausea

**Diagnosis**: **MTX Toxicity** (mucositis, bone marrow suppression, hepatotoxicity)

**Causes**:
- Chronic MTX accumulation (not metabolized if renal impairment)
- Patient may have mild renal dysfunction (Cr 1.2) undetected
- Possibly patient took higher dose accidentally

**Management**:

1. **Immediate**:
   - **STOP methotrexate**
   - **Folinic acid (leucovorin) 5-10 mg daily** (rescues normal cells from MTX toxicity)
   - Expected recovery: 5-7 days

2. **Supportive**:
   - Oral care: saline gargles, avoid spicy food
   - Monitor CBC and LFTs (repeat in 1 week)
   - Transfuse if Hb <7 g/dL or WBC <1.5

3. **Renal assessment**:
   - Measure creatinine clearance (Cockcroft-Gault)
   - If eGFR <60: Avoid MTX in future

4. **Restart when recovered**:
   - Reduced MTX dose: 7.5 mg weekly (vs previous 15 mg)
   - Add folic acid 1 mg daily (routine MTX prophylaxis in India, prevents toxicity)
   - Frequent monitoring: Baseline LFTs/CBC, then monthly × 3, then 3-monthly

---

## Case 6: TB Reactivation on TNF-α Inhibitor

**Patient F (48-year-old with RA on Infliximab)**

**Timeline**:
- Started infliximab 3 months ago for RA
- TB screening done: Mantoux 15 mm induration (positive) but CXR normal → latent TB
- Was NOT given INH prophylaxis (omission error)
- Presents with: Low-grade fever, cough, night sweats, weight loss

**Findings**:
- CXR: New cavitating lesion in right upper lobe
- Sputum smear: AFB positive (infectious TB)
- Diagnosis: **TB Reactivation on TNF-α inhibitor**

**Risk**: Patient became infectious; contacts need screening

**Management**:

1. **STOP infliximab immediately**

2. **Start TB therapy** (standard DOTS regimen):
   - INH/RIF/PZA/ETB × 2 months, then INH/RIF × 4 months
   - Add **vitamin B6 10 mg daily** (INH neuropathy prophylaxis)

3. **Restart infliximab after**:
   - Complete TB treatment (6 months minimum)
   - Clinical and radiological confirmation of TB cure
   - Restart at original dose (immune system recovers quickly after stopping TNF-α inhibitor)

4. **Prevent recurrence**:
   - Use different biologic: Consider non-TNF inhibitor (IL-6 inhibitor, JAK inhibitor) if available
   - Some data suggests JAK inhibitors don't increase TB risk as much

**Prevention in Future TB+ Patients**:
- All patients with latent TB before TNF-α inhibitor → **Prophylactic INH 300 mg daily × 3-6 months**
- Can overlap with TNF-α inhibitor safely
- Reduces TB reactivation risk from 10-15% to <2%`,
        mnemonics: [
          {
            text: "RA progression: MTX → Dual DMARD → Biologic (when inadequate response)",
            explanation:
              "Stepwise escalation in RA treatment from first-line MTX to biologics only if conventional agents fail.",
          },
          {
            text: "Lupus nephritis: High-dose steroid pulse + Cyclophosphamide/MMF → Azathioprine maintenance",
            explanation:
              "Induction therapy aggressive to achieve remission, then step down to maintenance to prevent relapse.",
          },
          {
            text: "TNF-α inhibitor = Must do TB screening; if latent TB, give INH first",
            explanation:
              "Critical safety step to prevent TB reactivation, 10-15x increased risk without prophylaxis.",
          },
        ],
        keyPoints: [
          "RA: Start MTX 15 mg weekly; escalate to dual DMARD or biologic if inadequate response at 6 months",
          "Cost barrier in India: Biologics ₹50,000-200,000/month; most patients managed with conventional agents",
          "Lupus nephritis Class IV: Induction with methylprednisolone pulse + cyclophosphamide or MMF; maintenance with azathioprine",
          "Crohn's disease with fistulizing disease: TNF-α inhibitor (infliximab) has superior fistula closure rate vs conventional agents",
          "Heart transplant: Triple therapy tacrolimus + MMF + low-dose prednisolone; weekly monitoring early post-op, then taper",
          "MTX toxicity: Mucositis, bone marrow suppression, hepatotoxicity; manage with folinic acid rescue and dose reduction",
          "TB reactivation on TNF-α inhibitor: Stop biologic, start TB therapy, restart only after TB cure (6 months minimum)",
          "Latent TB before TNF-α inhibitor: Give prophylactic INH 3-6 months; reduces reactivation risk from 10-15% to <2%",
          "Folic acid 1 mg daily given with MTX to prevent toxicity (routine in India)",
          "Baseline tests before biologics: TB screening (mandatory for TNF-α inhibitors), CBC, LFTs, viral serology (HIV, HBV, HCV)",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 33-34 - Immunosuppressants", edition: "8th" },
          { book: "Goodman & Gilman", chapter: "Ch 34-35 - Immunopharmacology", edition: "13th" },
          { book: "Essentials of Medical Pharmacology", chapter: "Ch 31 - Immunomodulators", edition: "7th" },
        ],
      },
      {
        layer: 4,
        slug: "immunopharmacology-biologics-exam",
        title: "Immunopharmacology & Biologics - Exam Prep",
        estimatedMinutes: 15,
        summary:
          "High-yield exam facts, one-liners, and comparison tables on immunosuppressants, biologics, and immunostimulants relevant to NEXT and NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners

### Immunosuppressants
- **Methotrexate**: Inhibits DHFR and blocks de novo folate; also adenosine-mediated anti-inflammatory
- **Azathioprine**: Purine analogue; selective for lymphocytes (they lack salvage pathway)
- **Mycophenolate mofetil**: Inhibits IMPDH; selective de novo inosinate pathway inhibition
- **Calcineurin inhibitors**: Block IL-2 production via NFAT dephosphorylation
- **Cyclosporine**: ↑ Gingival hyperplasia, nephrotoxicity, HTN
- **Tacrolimus**: More potent than cyclosporine; neurotoxicity, hyperglycemia
- **Corticosteroids**: Non-specific; ↓ All cytokines via NF-κB inhibition

### Biologics (mAbs)
- **TNF-α inhibitors**: Infliximab (chimeric), adalimumab (human), etanercept (receptor fusion)
- **Anti-CD20**: Rituximab → B-cell depletion; used in NHL, RA, lupus
- **Anti-CD25**: Basiliximab → blocks IL-2 receptor; used in transplant
- **Anti-IL-6**: Tocilizumab → RA, CRS
- **Anti-BAFF**: Belimumab → SLE
- **Mechanism**: Opsonization, ADCC, CDC, receptor blockade, agonism
- **Nomenclature**: -ximab (chimeric), -zumab (humanized), -umab (human)

### Immunostimulants
- **IFN-α**: Hepatitis C, melanoma; flu-like ADRs
- **IFN-γ**: Macrophage activation; Chronic granulomatous disease
- **IL-2**: RCC, melanoma; **Vascular leak syndrome** (hypotension, pulmonary edema)
- **BCG**: Intravesical for bladder cancer (non-specific immunity)

### Critical Safety Points
- **TNF-α inhibitor + Latent TB**: 10-15 fold increased reactivation risk
- **All patients on TNF-α inhibitor**: Mantoux/QuantiFERON BEFORE starting
- **Latent TB found**: Give INH 300 mg daily × 3-6 months before TNF-α inhibitor
- **MTX toxicity**: Mucositis, bone marrow suppression, hepatotoxicity; reversed by folinic acid
- **IL-2 side effect**: Vascular leak syndrome (capillary leak); requires ICU, fluid restriction

## Comparison Tables

### Conventional Immunosuppressants

| Drug | Target | Selectivity | Time to Effect | Monitoring |
|------|--------|-----------|----------------|-----------|
| **Corticosteroids** | All lymphocytes, cytokines | Non-specific | 1-2 hours | BP, glucose |
| **Methotrexate** | De novo folate pathway | Lymphocyte-selective | 4-6 weeks | LFTs, CBC, CXR |
| **Azathioprine** | De novo purine pathway | Lymphocyte-selective | 6-8 weeks | CBC, LFTs |
| **Mycophenolate** | IMPDH (inosinate pathway) | Lymphocyte-selective | 2-4 weeks | CBC |
| **Cyclosporine** | T-cell IL-2 production | T-cell selective | 2-4 weeks | Creatinine, levels |
| **Tacrolimus** | T-cell IL-2 production | T-cell selective | 1-2 weeks | Creatinine, glucose |

### Biologic Immunosuppressants (mAbs)

| Target | Drug | Type | Indication | ADR |
|--------|------|------|-----------|-----|
| **TNF-α** | Infliximab | Chimeric mAb | RA, IBD, psoriasis | TB reactivation, infection |
| | Adalimumab | Fully human mAb | RA, IBD, psoriasis | TB reactivation, infection |
| | Etanercept | TNF-R fusion | RA, AS | TB, infection, demyelination |
| **IL-6R** | Tocilizumab | Humanized mAb | RA, CRS | Infection, hepatotoxicity |
| **CD20 (B cells)** | Rituximab | Chimeric mAb | NHL, RA, SLE | Infection, GI bleeding |
| **CD25 (IL-2R)** | Basiliximab | Chimeric mAb | Transplant prevention | Minimal (induction only) |

### TB Risk with Immunosuppressants

| Drug | TB Reactivation Risk | Prophylaxis Needed |
|------|-------------------|-------------------|
| **Corticosteroids** (high dose) | ~2-3% | INH if latent TB |
| **Methotrexate** | Minimal | No |
| **Azathioprine** | Minimal | No |
| **TNF-α inhibitors** | 10-15 fold ↑ | **Mandatory INH × 3-6 months** |
| **IL-6 inhibitors** | ~1% (lower than TNF-α) | Possibly INH if latent TB |
| **JAK inhibitors** | ~2% (lower risk) | Possibly INH if latent TB |

## Exam Themes

### NEXT Themes
- Calcineurin inhibitor mechanism (cyclosporine vs tacrolimus)
- TB screening before TNF-α inhibitor
- Methotrexate toxicity and management
- Monoclonal antibody nomenclature
- RA stepwise treatment algorithm

### NEET PG Themes
- Molecular mechanisms: NF-κB, NFAT, JAK-STAT pathways
- mAb mechanisms: ADCC, CDC, opsonization, receptor blockade
- Drug interactions: MTX + NSAIDs (↑ toxicity)
- Adverse effects: TB reactivation, vascular leak with IL-2, gingival hyperplasia with cyclosporine
- Cost-benefit: Conventional agents vs biologics in resource-limited settings

## Quick Facts for MCQs

1. **Methotrexate**: Blocks DHFR; selectivity for lymphocytes due to weak salvage pathway
2. **Cyclosporine**: Binds cyclophilin (not calcineurin directly); complex inhibits calcineurin
3. **Tacrolimus**: Binds FKBP; ~100x more potent than cyclosporine
4. **Rituximab**: Anti-CD20; causes B-cell depletion; used in NHL, RA, SLE
5. **TNF-α inhibitor**: Do TB screening BEFORE starting; if latent TB present, give INH first
6. **IL-2**: Causes vascular leak syndrome; requires ICU and fluid restriction
7. **Infliximab**: Chimeric mAb; IV infusion; requires combination with MTX for better efficacy in RA
8. **Etanercept**: Fusion protein (soluble TNF receptor); SC injection; works via different mechanism than infliximab
9. **Basiliximab**: Anti-CD25 (IL-2 receptor); used for transplant rejection prevention; minimal ADRs
10. **TB + TNF-α inhibitor**: Risk 10-15 fold increased; latent TB needs INH × 3-6 months before starting biologic

## High-Frequency Drug Interactions

1. **MTX + NSAIDs**: ↑ MTX nephrotoxicity (avoid together if possible)
2. **MTX + Folate antagonists** (trimethoprim, sulfamethoxazole): ↑ MTX toxicity
3. **Cyclosporine + NSAIDs**: ↑ Nephrotoxicity (avoid together)
4. **Tacrolimus + Macrolide antibiotics** (clarithromycin): ↑ Tacrolimus levels (CYP3A4 inhibition)
5. **TNF-α inhibitor + Live vaccine**: **CONTRAINDICATED** (uses biologic); use inactivated vaccines instead
6. **IL-2 + Beta-blockers**: Interaction may occur (both affect cardiac output)

## Dosing Pearls

### Methotrexate in RA
- **Induction**: 7.5-15 mg weekly (po or parenteral)
- **Monitoring**: Baseline LFTs, CBC, CXR; monthly × 3, then 3-monthly
- **Renal impairment** (Cr >1.5): Avoid or use very cautiously

### TNF-α Inhibitors in RA
- **Infliximab**: 3 mg/kg IV at 0, 2, 6 weeks, then q8 weeks
- **Adalimumab**: 40 mg SC every 2 weeks (or 40 mg every week if combined MTX monotherapy)
- **Etanercept**: 25 mg SC twice weekly or 50 mg once weekly

### Azathioprine
- **RA/autoimmune**: 50-100 mg/day; increase by 0.5-1 mg/kg every 2 weeks to max 2-2.5 mg/kg/day
- **Monitor**: CBC (bone marrow suppression); watch for low WBC/Hb/Plt

### Tacrolimus (Transplant)
- **Target levels**: 8-12 ng/mL (early post-op), 5-10 ng/mL (chronic)
- **Typical dose**: 0.15 mg/kg/day divided BD
- **Adjust based on levels, renal function**`,
        mnemonics: [
          {
            text: "MTX = DHFR block → selective lymphocyte toxicity (lack salvage pathway)",
            explanation:
              "Methotrexate preferentially kills rapidly dividing cells, especially lymphocytes.",
          },
          {
            text: "Tacrolimus = FKBP-based calcineurin inhibitor (100x more potent than cyclosporine)",
            explanation:
              "Key difference in structure and potency between two calcineurin inhibitors.",
          },
          {
            text: "TNF-α inhibitor = TB test before, INH after if latent TB detected",
            explanation:
              "Critical safety algorithm for TNF-α inhibitors due to TB reactivation risk.",
          },
        ],
        keyPoints: [
          "Methotrexate: DHFR inhibitor with secondary adenosine-mediated anti-inflammatory effect",
          "Azathioprine: Purine analogue; selective for lymphocytes; onset 6-8 weeks",
          "Mycophenolate: IMPDH inhibitor; selective for lymphocytes; faster onset than AZA",
          "Cyclosporine: Calcineurin inhibitor; gingival hyperplasia, nephrotoxicity, HTN; needs blood levels",
          "Tacrolimus: ~100x more potent than cyclosporine; neurotoxicity, hyperglycemia; gold standard for transplant",
          "Rituximab: Anti-CD20 mAb; depletes B cells; used in NHL, RA, lupus; low infection risk vs TNF-α inhibitors",
          "TNF-α inhibitors: 10-15 fold increased TB reactivation; mandatory TB screening and INH prophylaxis",
          "IL-2 immunostimulant: Causes vascular leak syndrome (capillary permeability); requires ICU, fluid restriction, diuretics",
          "mAb mechanisms: Opsonization (marking), ADCC (NK cell killing), CDC (complement), receptor blockade, agonism",
          "Methotrexate toxicity managed with folinic acid rescue; reversible if caught early",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 33-34", edition: "8th" },
        ],
      },
      {
        layer: 5,
        slug: "immunopharmacology-biologics-recall",
        title: "Immunopharmacology & Biologics - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-style Q&A for self-testing on immunosuppressants, biologics, and clinical applications.",
        contentMd: `# Active Recall

**Q1:** What is the mechanism of methotrexate in immunosuppression?
> Methotrexate inhibits dihydrofolate reductase (DHFR), blocking tetrahydrofolate synthesis and DNA synthesis. Preferentially affects lymphocytes (weak salvage pathway). Secondary mechanism: adenosine accumulation activates adenosine A2A receptor, promoting anti-inflammatory cytokines.

**Q2:** Why is calcineurin inhibited in immunosuppression and what does it normally do?
> Calcineurin is a protein phosphatase that normally dephosphorylates NFAT (nuclear factor of activated T-cells). Dephosphorylated NFAT enters nucleus and transcribes IL-2 gene. When calcineurin is inhibited, NFAT remains phosphorylated and cannot activate IL-2 production, blocking T-cell proliferation.

**Q3:** What are the 4 mechanisms by which monoclonal antibodies cause cell destruction?
> 1) Opsonization (antibody marks cell for phagocytosis), 2) ADCC (antibody-dependent cellular cytotoxicity via FcγR on NK cells), 3) CDC (complement-dependent cytotoxicity via C1q binding), 4) Receptor blockade (mAb prevents ligand binding to receptor).

**Q4:** What is the major concern when starting a TNF-α inhibitor in a patient with latent TB?
> TNF-α is critical for macrophage activation and granuloma formation in TB. TNF-α inhibitors increase TB reactivation risk 10-15 fold. All patients must be screened for TB (mantoux or QuantiFERON) BEFORE starting TNF-α inhibitor. If latent TB detected, give prophylactic INH 300 mg daily × 3-6 months before starting biologic.

**Q5:** How does IL-2 cause vascular leak syndrome and how is it managed?
> IL-2 increases capillary permeability, leading to fluid extravasation. Results in hypotension, pulmonary edema, acute renal failure. Managed with fluid restriction (NOT fluid bolus), diuretics (IV furosemide), vasopressors (norepinephrine) if severe hypotension. Requires ICU monitoring. Effects are reversible with drug discontinuation.

**Q6:** What is the difference between chimeric, humanized, and fully human monoclonal antibodies?
> Chimeric mAbs (-ximab): ~30% mouse, ~70% human constant region; example: infliximab. Humanized mAbs (-zumab): ~10% mouse variable region, ~90% human; example: tocilizumab. Fully human mAbs (-umab): 100% human; example: adalimumab. Fully human antibodies have lowest immunogenicity.

**Q7:** How is methotrexate toxicity (mucositis, bone marrow suppression) managed?
> Stop methotrexate immediately. Give folinic acid (leucovorin) 5-10 mg daily to rescue normal cells from MTX toxicity. CBC and LFTs recover in 5-7 days. When restarting MTX, use reduced dose (e.g., 7.5 mg weekly vs previous 15 mg) and add folic acid 1 mg daily for prophylaxis.

**Q8:** Name 3 monoclonal antibodies and their targets in autoimmune disease.
> 1) Rituximab (anti-CD20): Depletes B cells; used in RA, NHL, lupus. 2) Infliximab (anti-TNF-α): Blocks TNF-α; used in RA, IBD, psoriasis. 3) Tocilizumab (anti-IL-6R): Blocks IL-6 receptor; used in RA, CRS. Other examples: basiliximab (anti-CD25), belimumab (anti-BAFF), secukinumab (anti-IL-17).

**Q9:** What is triple therapy for rheumatoid arthritis and when is it used?
> Triple therapy = Methotrexate + Sulfasalazine + Leflunomide. Used in early RA when single DMARD therapy (MTX alone) achieves inadequate response at 6 months. Before escalating to expensive biologics, double or triple conventional DMARD therapy can achieve 40-50% remission rates at much lower cost (₹3000-4000/month vs ₹100,000/month for biologics).

**Q10:** Why is baseline TB screening mandatory before starting TNF-α inhibitors but optional for other immunosuppressants?
> TNF-α is uniquely critical for macrophage activation and granuloma formation in TB. TNF-α inhibitors increase TB reactivation risk dramatically (10-15 fold). Other agents (corticosteroids, methotrexate) have minimal TB risk (<1%). This selective high risk for TNF-α inhibitors mandates universal TB screening and prophylaxis before initiation.`,
        mnemonics: [],
        keyPoints: [
          "10 high-yield recall questions on immunosuppressant mechanisms, biologics, and clinical management",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 33-34", edition: "8th" },
        ],
      },
    ],
  },
];
