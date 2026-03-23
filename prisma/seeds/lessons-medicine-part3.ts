import type { TopicLessons } from "./content-loader";

export const medicinePart3Lessons: TopicLessons[] = [
  {
    topicCode: "IM-MOD-04-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "aki-layer-1-foundation",
        title: "Acute Kidney Injury - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of acute kidney injury pathophysiology, classification, major causes, and physiological responses to sudden loss of renal function.",
        contentMd: `# Acute Kidney Injury - Foundation

## Definition
- Rapid loss of renal function (hours to days) causing ↑ serum creatinine and ↑ serum urea
- Previously called acute renal failure (ARF)

## AKI Classification (KDIGO)

### Stage 1 (Mild)
- Serum creatinine 1.5-1.9x baseline OR
- ≥0.3 mg/dL increase above baseline
- Urine output 0.5-0.9 mL/kg/hr (6-12 hours)

### Stage 2 (Moderate)
- Serum creatinine 2-2.9x baseline
- Urine output 0.5 mL/kg/hr (≥12 hours)

### Stage 3 (Severe)
- Serum creatinine ≥3x baseline OR
- ≥4 mg/dL increase OR
- Urine output <0.3 mL/kg/hr (≥24 hours) OR
- Anuria ≥12 hours
- Requires dialysis in many cases

## Causes of AKI (Clinical Classification)

### Prerenal AKI (60% of cases)
**Mechanisms**: Reduced renal perfusion
- **Hypovolemia**: Dehydration, GI losses, hemorrhage
- **Hypotension**: Shock, sepsis, cardiogenic
- **Renal vasoconstriction**: NSAIDs, ACE-I, ARBs, contrast agents
- **Increased renal vascular resistance**: Hepatorenal syndrome

### Intrinsic Renal AKI (35% of cases)

**Glomerular**:
- Post-infectious GN, IgAN, lupus nephritis

**Tubular Injury (ATN - most common)**:
- **Ischemic**: Prolonged hypotension, sepsis
- **Toxic**: Medications (aminoglycosides, cisplatin), contrast, myoglobin (rhabdomyolysis), hemoglobin

**Tubulointerstitial**:
- Interstitial nephritis (drugs, infections)
- Pyelonephritis

**Vascular**:
- Thrombotic microangiopathy, vasculitis, renal infarction

### Postrenal AKI (5% of cases)
**Mechanisms**: Obstruction to urine flow
- **Upper urinary tract**: Kidney stones, tumors, strictures
- **Lower urinary tract**: BPH, prostate cancer, urethral strictures, bladder stones

## Pathophysiology of AKI

### Prerenal AKI Mechanism
1. ↓ Renal perfusion pressure
2. ↓ Glomerular filtration rate (GFR)
3. Activation of RAAS (preserves renal blood flow)
4. **Reversible** if perfusion restored quickly

### Acute Tubular Necrosis (ATN) Mechanism
1. Ischemic or toxic tubular injury
2. Tubular epithelial cell death and sloughing
3. ↓ GFR (tubular obstruction + loss of barrier function)
4. Tubular epithelial regeneration required (days to weeks)

## Diagnostic Approach

### History & Examination
- **Fluid status**: Assess volume (JVD, edema, orthostasis, dry mucosa)
- **Urine output**: Oliguria (<400 mL/day), anuria (<50 mL/day)
- **Medications**: NSAIDs, ACE-I, contrast, aminoglycosides
- **Systemic symptoms**: Fever (infection), rash (drug reaction), arthralgia

### Laboratory Findings

**Serum Creatinine**:
- Rises 0.3-0.7 mg/dL/day in ATN
- In prerenal: may rise >1 mg/dL/day if severe
- Affected by age, muscle mass, gender

**Blood Urea Nitrogen (BUN)**:
- BUN/Cr ratio >20 suggests prerenal
- BUN/Cr ratio 10-15 suggests intrinsic renal or postrenal

**Urinalysis**
- Prerenal: concentrated urine, minimal proteinuria, few cells
- ATN: muddy brown casts, epithelial cells, granular casts
- GN: RBCs, RBC casts, proteinuria
- Obstruction: normal or few casts

**Electrolytes**
- Hyperkalemia (from ↓ renal excretion and cell death)
- Hyperphosphatemia
- Hypocalcemia
- Metabolic acidosis`,
        mnemonics: [
          { text: "AKI Classification: KDIGO (1-2-3)", explanation: "Stage 1: Cr 1.5-1.9x or increase 0.3 mg/dL | Stage 2: Cr 2-2.9x | Stage 3: Cr ≥3x or anuria" },
          { text: "AKI Causes: 60-35-5 Rule", explanation: "Prerenal 60%, Intrinsic 35%, Postrenal 5%" },
          { text: "BUN/Cr Ratio: Prerenal >20, Intrinsic 10-15, Postrenal variable", explanation: "Higher ratio favors prerenal" },
          { text: "ATN Casts: Muddy Brown", explanation: "Muddy brown/granular casts suggest acute tubular necrosis" }
        ],
        keyPoints: [
          "AKI is rapid loss of renal function (hours to days) with rise in serum creatinine and urea",
          "Prerenal AKI (60%): reduced renal perfusion - most common and usually reversible",
          "Intrinsic renal AKI (35%): direct kidney damage (ATN most common)",
          "Postrenal AKI (5%): obstruction to urine flow",
          "Muddy brown granular casts on urinalysis suggest acute tubular necrosis"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "275: Acute Kidney Injury", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "9: Renal System", edition: "11th" }
        ]
      },
      {
        layer: 2,
        slug: "aki-layer-2-mechanism",
        title: "Acute Kidney Injury - Mechanism",
        estimatedMinutes: 30,
        summary: "Detailed pathophysiology of prerenal vs intrinsic renal AKI, mechanisms of tubular injury, recovery phases, and prevention strategies.",
        contentMd: `# Acute Kidney Injury - Mechanism

## Prerenal AKI Pathophysiology

### Compensatory Mechanisms
1. **RAAS Activation**
   - ↓ Renal perfusion → ↑ renin release
   - Angiotensin II → afferent vasoconstriction (less than efferent)
   - Maintains GFR in early stages

2. **Sympathetic Nervous System**
   - ↑ Norepinephrine → systemic vasoconstriction
   - Renal blood flow preserved by autoregulation

3. **Antidiuretic Hormone (ADH)**
   - Released → water reabsorption in collecting duct
   - Maintains intravascular volume

### Progression to ATN
- If hypoperfusion continues >2-3 hours
- Tubular epithelial cells are ischemic
- Conversion to intrinsic AKI (ATN)

## Acute Tubular Necrosis (ATN) Mechanism

### Ischemic ATN (Most Common)
**Initial Phase (Minutes to Hours)**
1. ↓ Renal perfusion
2. ↓ ATP production (switch to anaerobic metabolism)
3. Loss of Na⁺/K⁺-ATPase function
4. ↑ Intracellular Na⁺, Ca²⁺
5. Cell swelling and injury

**Extension Phase (Hours to Days)**
6. Mitochondrial dysfunction
7. Generation of reactive oxygen species (ROS)
8. Oxidative stress
9. Tubular epithelial cell necrosis and apoptosis
10. Cell debris occludes tubules

**Maintenance Phase (Days)**
- Decreased GFR due to:
  - Tubular obstruction from cell debris
  - Tubular epithelial barrier breakdown (loss of tight junctions)
  - ↓ Glomerular capillary permeability
  - Backleak of filtrate through damaged epithelium

### Toxic ATN Pathogenesis
1. **Nephrotoxins** (drugs, contrast, myoglobin, hemoglobin)
2. Direct tubular epithelial cell toxicity
3. ROS generation
4. Apoptosis and necrosis
5. Similar repair phase as ischemic ATN

## Recovery Phase of AKI

### Initiation Phase (Days 1-3)
- GFR reaches nadir
- Urine output minimal (oliguria persists)
- Serum creatinine plateaus then begins to decline slowly

### Recovery Phase (Days 3-14)
- **Polyuric phase** (if AKI was severe)
  - Urine output increases dramatically (>1-2 L/day)
  - Serum creatinine still elevated but declining
  - Risk of hypokalemia, dehydration from excessive urine loss
  
- **Epithelial repair and regeneration**
  - Tubular epithelial cells regenerate from progenitor cells
  - Restoration of tight junctions and epithelial integrity
  - Mitochondrial function recovers
  - Brush border membranes reform

### Resolution Phase (Weeks)
- Serum creatinine normalizes (or near baseline)
- GFR returns to normal (usually completely)
- Full epithelial restitution

### Chronic Phase (If Occurs)
- Incomplete recovery → chronic kidney disease (CKD)
- Fibrosis and scarring may develop
- Risk factors: severe AKI, advanced age, diabetes, baseline CKD

## Complications of AKI

### Electrolyte Disorders
- **Hyperkalemia**: Risk of cardiac arrhythmias (peaked T waves, widened QRS)
- **Hyponatremia**: From ADH release and fluid retention
- **Hypocalcemia**: From ↑ phosphate, impaired calcitriol synthesis
- **Hyperphosphatemia**: From ↓ renal excretion

### Metabolic Acidosis
- ↓ Renal acid excretion
- Accumulation of organic acids
- Respiratory compensation (Kussmaul breathing)

### Fluid Overload
- ↑ Intravascular volume → pulmonary edema
- ↑ Interstitial volume → peripheral edema
- Risk of hypertension and cardiac decompensation

### Uremia
- Accumulation of uremic toxins (urea, creatinine, other waste products)
- Symptoms: nausea, vomiting, lethargy, seizures
- Indication for dialysis if severe`,
        mnemonics: [
          { text: "Prerenal → ATN Progression: Time-dependent", explanation: "Prolonged hypoperfusion (>2-3 hours) converts prerenal to ATN" },
          { text: "ATN Mechanism: ATP ↓ → Na⁺/K⁺ pump fails → Cell swells → ROS → Death", explanation: "Ischemic cascade in tubular epithelium" },
          { text: "AKI Phases: Initiation (1-3d) → Recovery (3-14d) → Resolution (weeks)", explanation: "Recovery phase may be polyuric with high urine output" },
          { text: "AKI Complications: HFEU", explanation: "Hyperkalemia, Fluid overload, Electrolyte disorders, Uremia" }
        ],
        keyPoints: [
          "Prerenal AKI: functional (no tubular injury) and potentially reversible if perfusion restored within 24-48 hours",
          "ATN: intrinsic renal injury with tubular epithelial cell death and necrosis",
          "Ischemic ATN results from prolonged hypoperfusion; toxic ATN from nephrotoxic drugs or myoglobin",
          "Recovery of AKI requires tubular epithelial cell regeneration (days to weeks); polyuric phase may occur",
          "Complications of AKI: hyperkalemia (cardiac risk), fluid overload (pulmonary edema), metabolic acidosis, uremia"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "275: Acute Kidney Injury", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "9: AKI Pathophysiology", edition: "11th" }
        ]
      },
      {
        layer: 3,
        slug: "aki-layer-3-clinical",
        title: "Acute Kidney Injury - Clinical",
        estimatedMinutes: 35,
        summary: "Clinical diagnosis and management of AKI, fluid and electrolyte management, dialysis indications, and prevention strategies.",
        contentMd: `# Acute Kidney Injury - Clinical Diagnosis & Management

## Clinical Diagnosis

### History
- **Exposure history**: NSAIDs, ACE-I/ARBs, contrast, aminoglycosides, cisplatin
- **Symptoms**: Oliguria, nausea, vomiting, lethargy
- **Risk factors**: Diabetes, CKD, advanced age, liver disease, heart failure

### Physical Examination
**Assessment of volume status (critical)**:
- **Hypovolemic**: Dry mucosa, orthostasis, tachycardia, flat JVD
- **Euvolemic**: Normal findings
- **Hypervolemic**: JVD elevation, peripheral edema, rales, hepatomegaly

### Laboratory Investigations

**Serum Creatinine & BUN**:
- Serial measurements track AKI stage
- Establish baseline for comparison (may not be available)

**Fractional Excretion of Sodium (FENa)**
- **Formula**: FENa = (Urine Na × Serum Cr) / (Serum Na × Urine Cr) × 100
- **Prerenal**: FENa <1%
- **ATN/Intrinsic**: FENa >2%
- **Intermediate**: FENa 1-2%
- **Limitations**: On diuretics, contrast agents may give false results

**Urinalysis & Sediment**
- **Prerenal**: Concentrated urine, few cells, no casts
- **ATN**: Muddy brown casts, granular casts, tubular epithelial cells
- **GN**: RBC casts, RBCs, significant proteinuria
- **Obstruction**: Usually normal or few cells

**Electrolytes**:
- Hyperkalemia (ECG changes: peaked T waves, prolonged PR, widened QRS)
- Hyponatremia, hypocalcemia, hyperphosphatemia
- Metabolic acidosis (low HCO3, low pH)

**Imaging Studies**

**Renal Ultrasound**:
- Rule out obstruction (hydronephrosis)
- Assess kidney size (normal ~11-14 cm)
- Small kidneys suggest chronic kidney disease

## Management of AKI

### Immediate Management

### 1. Assess and Correct Volume Status
**If Hypovolemic**:
- IV fluid resuscitation with 0.9% saline (Ringer's lactate less preferred due to K⁺ content)
- Target: urine output 0.5-1 mL/kg/hr
- Monitor for overcorrection (hypervolemia)

**If Hypervolemic**:
- Restrict fluids to insensible losses + measured urine output
- Diuretics (furosemide) if pulmonary edema present
- Monitor daily weights, serial electrolytes

**If Euvolemic**:
- Maintenance fluids only
- Monitor and adjust based on output

### 2. Eliminate Nephrotoxic Agents
- Discontinue NSAIDs, ACE-I, ARBs immediately
- Hold aminoglycosides (adjust dosing if essential)
- Avoid further contrast exposure

### 3. Blood Pressure Management
- Target MAP >60 mmHg (perfusion pressure)
- Vasopressors if shock (norepinephrine preferred)
- Avoid antihypertensive drugs initially (may worsen AKI)

### 4. Metabolic Support
**Hyperkalemia Management** (if K⁺ >5.5 or ECG changes):
- **Membrane stabilization**: Calcium gluconate 10 mL IV (calcium channel blockade)
- **Shift intracellular**: Insulin 10 units + Dextrose 25g IV, or Albuterol nebulized
- **Removal**: Diuretics (furosemide), cation exchange resins (polystyrene sulfonate), dialysis
- **Dietary restriction**: K⁺ <2g/day

**Acidosis**:
- Usually managed by treating underlying cause and fluids
- Sodium bicarbonate rarely needed in AKI

**Hypocalcemia**:
- Usually corrects with phosphate binders and recovery
- Avoid calcium supplementation (precipitation of calcium phosphate)

**Hyperphosphatemia**:
- Phosphate binders: calcium carbonate 1.25-2.5g with meals (poor efficacy in renal failure)
- Better binders: aluminum hydroxide (neurotoxicity risk), sevelamer

### 5. Nutrition
- Avoid protein (urea accumulation) - target 0.6-0.8 g/kg/day or less
- Calories: 25-35 kcal/kg/day (reduce catabolism)
- Avoid excess potassium, phosphorus, sodium
- Low sodium diet (<2g/day)

### 6. Monitor Complications
- **Infection** (catheter-related, aspiration)
- **Bleeding** (uremia causes platelet dysfunction)
- **Seizures** (uremia, hyperammonemia)

## Dialysis Indications in AKI

### Absolute Indications:
1. **Refractory hyperkalemia** (K⁺ >6.5 with ECG changes despite medical therapy)
2. **Severe acidosis** (pH <7.15)
3. **Pulmonary edema** (refractory to diuretics)
4. **Uremia with symptoms** (confusion, seizures, pericarditis)

### Relative Indications:
1. **Oliguria** refractory to fluid challenge + diuretics (>5-7 days)
2. **Rapid rise in creatinine** (suggests severe AKI)
3. **BUN >100 mg/dL**
4. **Fluid overload** with inability to diurese
5. **Severe metabolic abnormalities**

### Types of Renal Replacement Therapy (RRT):
- **Hemodialysis**: Most efficient (4 hrs, 3x/week)
- **Continuous venovenous hemofiltration (CVVH)**: Gentler for hemodynamically unstable patients
- **Peritoneal dialysis**: If access not available, minimal infrastructure
- **Slow low-efficiency dialysis (SLED)**: Intermediate option

## Prevention of AKI

### Risk Assessment
- Identify high-risk patients (diabetes, CKD, elderly, heart failure, liver disease)

### Volume Status Optimization
- Aggressive hydration perioperatively and with contrast exposure
- Monitor fluid balance carefully

### Medication Management
- Avoid NSAIDs in at-risk patients
- Use ACE-I/ARBs cautiously (stop if AKI develops)
- Adjust drug dosing in renal impairment

### Contrast-Induced Nephropathy Prevention
- **IV hydration**: 0.9% NaCl 1 mL/kg/hr before and after contrast
- **Consider alternative imaging**: MRI, ultrasound
- **N-acetylcysteine**: May provide modest benefit`,
        mnemonics: [
          { text: "FENa: <1% = Prerenal, >2% = ATN", explanation: "Fractional excretion of sodium helps differentiate causes" },
          { text: "Hyperkalemia ECG: Peaked T, Prolonged PR, Widened QRS", explanation: "Progressive EKG changes indicate severity" },
          { text: "K⁺ Management: Calcium (stabilize) → Insulin+Dextrose (shift) → Dialysis (remove)", explanation: "Three steps to treat hyperkalemia" },
          { text: "Dialysis Indications: SHURE", explanation: "Severe hyperkalemia, Hypervolemia (pulmonary edema), URemia (symptoms), Refractory acidosis, Electrolyte abnormalities" }
        ],
        keyPoints: [
          "FENa <1% suggests prerenal AKI (functional, reversible); FENa >2% suggests ATN (intrinsic injury)",
          "Immediate management: assess volume status, give fluids if hypovolemic, restrict if hypervolemic",
          "Eliminate nephrotoxic drugs (NSAIDs, ACE-I, contrast) immediately upon AKI diagnosis",
          "Hyperkalemia is major life-threatening complication; ECG changes (peaked T) indicate urgency for treatment",
          "Dialysis indicated for: refractory hyperkalemia, severe acidosis, pulmonary edema, uremic symptoms"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "275: Acute Kidney Injury", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "9: AKI Management", edition: "11th" },
          { book: "KDIGO Clinical Practice Guideline for AKI", chapter: "Diagnosis and management", edition: "2021" }
        ]
      },
      {
        layer: 4,
        slug: "aki-layer-4-exam",
        title: "Acute Kidney Injury - Exam Prep",
        estimatedMinutes: 25,
        summary: "Comprehensive exam-focused review of AKI, NEET-PG pattern questions, high-yield facts, differentials, and clinical pearls.",
        contentMd: `# Acute Kidney Injury - Exam Preparation

## Differential Diagnosis of Elevated Creatinine

### Acute Kidney Injury (hours to days)
- KDIGO criteria: ↑ Cr or ↓ urine output
- Reversible or may progress to CKD

### Chronic Kidney Disease (>3 months)
- Irreversible renal damage
- Small kidneys on imaging (AKI: normal size)

### Acute-on-Chronic Kidney Disease
- Baseline CKD with superimposed AKI
- More severe prognosis

## High-Yield Facts for Exams

### AKI Classification (KDIGO):
- **Stage 1**: Cr 1.5-1.9x baseline or ↑ 0.3 mg/dL
- **Stage 2**: Cr 2-2.9x baseline
- **Stage 3**: Cr ≥3x baseline OR ≥4 mg/dL increase OR anuria ≥12 hrs

### Causes Distribution:
- **Prerenal**: 60% (hypovolemia, hypotension, renal vasoconstriction)
- **Intrinsic**: 35% (ATN most common, GN, interstitial nephritis)
- **Postrenal**: 5% (obstruction)

### Urinary Biomarkers for ATN:
- **FENa**: <1% (prerenal), 1-2% (intermediate), >2% (ATN)
- **Casts**: Muddy brown granular casts = ATN hallmark
- **Cells**: Tubular epithelial cells suggest ATN

### Risk Factors for AKI:
- Diabetes, CKD, advanced age (>65 years)
- Heart failure, liver disease
- Exposure to nephrotoxins (NSAIDs, ACE-I, contrast, aminoglycosides)

### Drugs Causing AKI:
- **NSAIDs**: Reduce renal blood flow via PG inhibition
- **ACE-I/ARBs**: Vasodilation of efferent arteriole
- **Aminoglycosides**: Direct tubular toxicity
- **Cisplatin**: Proximal tubular toxicity
- **Contrast**: Osmotic + direct toxic effect
- **Amphotericin B**: Tubular injury
- **Allopurinol**: (Crystalluria from metabolites)

### Hyperkalemia ECG Changes:
- **Early**: Peaked T waves (narrowed apex)
- **Progressive**: Prolonged PR interval, widened QRS
- **Late**: Loss of P wave, "sine wave" pattern (cardiac arrest imminent)

### K⁺ Management Algorithm:
1. **Stabilize**: Calcium gluconate 10 mL IV (membrane stabilization)
2. **Shift intracellular**: Insulin 10 units + 25g dextrose IV
3. **Alternative shift**: Albuterol nebulized or NaHCO3 IV
4. **Remove**: Diuretics (furosemide), cation exchange resins, dialysis

### Dialysis Indications (SHURE):
- **S**: Severe/refractory hyperkalemia
- **H**: Hypervolemia (pulmonary edema)
- **U**: URemia (symptoms)
- **R**: Refractory acidosis
- **E**: Electrolyte abnormalities

## Common Exam Questions

**Q: 65-year-old diabetic with serum Cr 1.2 baseline, now 3.2 mg/dL. FENa 0.8%. Diagnosis?**
A: Prerenal AKI (FENa <1%). Likely from hypovolemia or renal vasoconstriction (ACE-I, NSAIDs). Stop offending agents, give IV fluids.

**Q: Patient with ATN after sepsis. Serial Cr: Day 1=2.5, Day 3=3.5, Day 5=3.2, Day 7=2.8. What phase?**
A: Polyuric recovery phase has started (Cr declining from peak). Expect high urine output; risk of hypokalemia and dehydration.

**Q: Patient with serum K⁺ 6.8 mg/dL and peaked T waves. ECG shows prolonged QRS. Immediate management?**
A: IV calcium gluconate first for membrane stabilization, then insulin + dextrose. Consider dialysis if K⁺ not responding.

## Exam Mnemonics Worth Remembering

**Prerenal AKI Causes**: AHHH + HRS
- **A**: Anemia (reduced O2 carrying)
- **HHH**: Hemorrhage, Hypovolemia, Heart failure
- **HRS**: Hepatorenal Syndrome
- Plus: NSAIDs, contrast, ACE-I (renal vasoconstriction)

**ATN Causes**: I-ATION
- **I**: Ischemia (hypotension, sepsis)
- **A**: Aminoglycosides
- **T**: Toxins (myoglobin, hemoglobin, contrast, cisplatin)
- **I**: Interstitial nephritis
- **O**: Obstruction (postrenal)
- **N**: NSAIDs`,
        mnemonics: [
          { text: "KDIGO AKI Stages: 1-2-3 (Cr multipliers 1.5-2-3x baseline)", explanation: "Or absolute increases 0.3-0.5-4 mg/dL" },
          { text: "Cause Distribution: 60-35-5 (Prerenal-Intrinsic-Postrenal)", explanation: "Prerenal most common, most reversible" },
          { text: "FENa Interpretation: <1 Prerenal, 1-2 Gray, >2 ATN", explanation: "Gray zone may be either, clinical context helps" },
          { text: "ECG Changes in Hyperkalemia: Peaked T → Prolonged PR → Widened QRS → Sine wave", explanation: "Progressive changes, sine wave = cardiac arrest imminent" },
          { text: "K⁺ Management: Calcium (stabilize) → Shift (insulin) → Remove (dialysis)", explanation: "Three steps in order" },
          { text: "Dialysis Indications: SHURE", explanation: "Severe hyperkalemia, Hypervolemia, URemia, Refractory acidosis, Electrolyte abnormalities" },
          { text: "Prerenal Causes: AHHH+HRS+Meds", explanation: "Anemia, Hemorrhage, Hypovole, Heart failure | Hepatorenal | NSAIDs/ACE-I/Contrast" },
          { text: "ATN Causes: I-ATION", explanation: "Ischemia, Aminoglycosides, Toxins, Interstitial, Obstruction, NSAIDs" },
          { text: "AKI Phases: Initiation (1-3d) → Recovery (3-14d) → Resolution (weeks)", explanation: "Recovery phase polyuric phase may occur" },
          { text: "Urinary Sediment: Prerenal=clean, ATN=muddy brown, GN=RBC casts, Obstruction=normal", explanation: "Microscopy helps differentiate" }
        ],
        keyPoints: [
          "AKI: rapid loss of renal function with ↑ Cr, classified into 3 stages by KDIGO",
          "Prerenal AKI (60%): functional, reversible if perfusion restored; FENa <1%",
          "Intrinsic renal AKI (35%): direct kidney injury; ATN most common with muddy brown casts",
          "Postrenal AKI (5%): obstruction; ultrasound shows hydronephrosis",
          "Hyperkalemia is major life-threatening complication; ECG changes indicate urgency",
          "Management: fluid status optimization, stop nephrotoxic drugs, dialysis if indicated",
          "Recovery usually complete unless severe AKI with fibrosis (risk of chronic kidney disease)"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "275: Acute Kidney Injury", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "9: Renal System", edition: "11th" }
        ]
      },
      {
        layer: 5,
        slug: "aki-layer-5-active-recall",
        title: "Acute Kidney Injury - Active Recall",
        estimatedMinutes: 20,
        summary: "Flashcard-based active recall for rapid learning and retention of critical AKI concepts.",
        contentMd: `# Acute Kidney Injury - Active Recall Flashcards

**Q1: What is the definition of acute kidney injury?**
A: Rapid loss of renal function (hours to days) with elevation of serum creatinine and BUN, classified by KDIGO into 3 stages based on Cr rise and urine output.

**Q2: What are the KDIGO AKI stages and their serum creatinine thresholds?**
A: Stage 1: Cr 1.5-1.9x baseline or ≥0.3 mg/dL increase | Stage 2: Cr 2-2.9x baseline | Stage 3: Cr ≥3x baseline or ≥4 mg/dL increase.

**Q3: What are the three major categories of AKI causes and their approximate prevalence?**
A: Prerenal 60% (reduced renal perfusion), Intrinsic 35% (direct kidney injury), Postrenal 5% (obstruction).

**Q4: Define fractional excretion of sodium (FENa) and its interpretation.**
A: FENa = (UNa × SCr) / (SNa × UCr) × 100. FENa <1% suggests prerenal, >2% suggests ATN, 1-2% is gray zone.

**Q5: What are the main causes of prerenal AKI?**
A: Hypovolemia (dehydration, hemorrhage), hypotension (shock, sepsis), renal vasoconstriction (NSAIDs, ACE-I, contrast).

**Q6: What is acute tubular necrosis and how does it differ from prerenal AKI?**
A: ATN is intrinsic renal injury with tubular epithelial cell death. Unlike prerenal, it involves direct tissue damage and takes days-weeks to recover.

**Q7: What are the phases of AKI recovery and the typical timeline?**
A: Initiation phase (1-3 days, GFR nadir), Recovery phase (3-14 days, polyuric phase if severe), Resolution phase (weeks, Cr normalizes).

**Q8: What are the ECG changes in severe hyperkalemia and their progression?**
A: Peaked T waves → Prolonged PR interval → Widened QRS → Loss of P wave → Sine wave pattern (cardiac arrest imminent).

**Q9: What is the mechanism of hyperkalemia in AKI?**
A: ↓ Renal K⁺ excretion (due to oliguria and low GFR) + K⁺ release from damaged cells (tumor lysis, rhabdomyolysis).

**Q10: Describe the three-step management of hyperkalemia in AKI.**
A: (1) Stabilize: IV calcium gluconate (membrane stabilization) | (2) Shift intracellular: Insulin + dextrose or albuterol | (3) Remove: Diuretics, exchange resins, dialysis.

**Q11: What is muddy brown granular cast and what does it indicate?**
A: Casts composed of degenerated tubular epithelial cells and Tamm-Horsfall protein. Hallmark of acute tubular necrosis (ATN).

**Q12: What is the difference between prerenal AKI and volume-responsive oliguria?**
A: Volume-responsive oliguria (as in dehydration) can be corrected with fluid challenge; prerenal AKI refers to the pathophysiology of ↓ GFR from reduced renal perfusion.

**Q13: What are the absolute indications for dialysis in AKI?**
A: Refractory hyperkalemia (K⁺ >6.5 with ECG changes), severe acidosis (pH <7.15), pulmonary edema (refractory to diuretics), uremia with symptoms.

**Q14: How do NSAIDs cause AKI?**
A: NSAIDs inhibit COX enzymes → ↓ prostaglandins → renal vasoconstriction + loss of protective effects on glomerular perfusion.

**Q15: What is the polyuric phase of AKI and what complications can occur?**
A: Occurs during recovery when urine output increases dramatically (>1-2 L/day) while Cr still elevated. Risk of severe hypokalemia and dehydration.

**Q16: When should you check FENa and what are its limitations?**
A: Check FENa in oliguric AKI to differentiate prerenal from ATN. Limitations: unreliable on diuretics, contrast agents, acute GN.

**Q17: What is contrast-induced nephropathy (CIN) and how is it prevented?**
A: Acute kidney injury after IV contrast exposure. Prevention: IV hydration (0.9% saline 1 mL/kg/hr before and after), avoid NSAIDS, consider alternatives (MRI, ultrasound).

**Q18: What is hepatorenal syndrome and how does it differ from other prerenal causes?**
A: Functional renal vasoconstriction in advanced cirrhosis. Represents severe prerenal AKI. Diagnosis: AKI without proteinuria, normal kidney imaging, renal failure reversible with liver transplant.

**Q19: What are the risk factors for mortality in AKI?**
A: Advanced age, multiple organ failure, underlying chronic disease (diabetes, CKD), high creatinine at presentation, requirement for dialysis.

**Q20: What is the difference between AKI recovery and chronic kidney disease (CKD)?**
A: AKI: rapid onset (hours-days), potentially reversible, usually complete recovery | CKD: gradual onset (>3 months), irreversible, progressive.`,
        mnemonics: [
          { text: "AKI Causes: 60-35-5 (Prerenal-Intrinsic-Postrenal)", explanation: "Prerenal most common (60%), most reversible" },
          { text: "KDIGO Stages: 1.5-2-3 (Creatinine multipliers)", explanation: "Or absolute increases: 0.3, 0.5, 4 mg/dL" },
          { text: "FENa: <1 Prerenal, 1-2 Gray, >2 ATN", explanation: "Fractional excretion of sodium helps differentiate" },
          { text: "ATN Casts: Muddy Brown with Granules", explanation: "Degenerated epithelial cells + Tamm-Horsfall protein" },
          { text: "Hyperkalemia ECG: T peak → PR long → QRS wide → Sine wave (arrest)", explanation: "Progressive severity of changes" },
          { text: "K⁺ Treatment: Calcium (stabilize) → Insulin+Dextrose (shift) → Dialysis (remove)", explanation: "Three-step management" },
          { text: "Dialysis Indications: SHURE", explanation: "Severe hyperkalemia, Hypervolemia, URemia, Refractory acidosis, Electrolyte abnormalities" },
          { text: "AKI Phases: Initiation (1-3d) → Recovery (3-14d) → Resolution (weeks)", explanation: "Recovery phase may be polyuric" },
          { text: "NSAIDs Mechanism: COX inhibition → ↓ PGs → renal vasoconstriction → ↓ GFR", explanation: "Direct renal vasoconstriction effect" },
          { text: "Prerenal → ATN: Time-dependent (>2-3 hrs ischemia), irreversible transformation possible", explanation: "Early recognition and treatment crucial" }
        ],
        keyPoints: [
          "AKI: rapid loss of renal function with ↑ serum creatinine and ↑ BUN, staged 1-3 by KDIGO",
          "Prerenal AKI (60%): functional, ↓ renal perfusion; FENa <1%; reversible if perfusion restored quickly",
          "Intrinsic renal AKI (35%): direct kidney injury; ATN most common with muddy brown granular casts",
          "Postrenal AKI (5%): obstruction to urine flow; ultrasound shows hydronephrosis",
          "Key diagnostic tests: serum Cr/BUN, FENa, urinalysis with microscopy, electrolytes, renal ultrasound",
          "Management: (1) Assess volume status, (2) Give fluids if hypovolemic, (3) Stop nephrotoxic drugs, (4) Treat complications",
          "Hyperkalemia is major life-threatening complication; ECG changes (peaked T) indicate urgency for treatment",
          "Dialysis indications: refractory hyperkalemia, severe acidosis, pulmonary edema, uremic symptoms",
          "Recovery: tubular epithelial cell regeneration (days-weeks); usually complete recovery unless severe fibrosis",
          "Prevention: aggressive hydration, avoid nephrotoxic drugs, optimize volume status perioperatively"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "275: Acute Kidney Injury", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "9: Renal System", edition: "11th" }
        ]
      }
    ]
  }
];
