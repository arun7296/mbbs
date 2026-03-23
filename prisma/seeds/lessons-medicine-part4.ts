import type { TopicLessons } from "./content-loader";

export const medicinePart4Lessons: TopicLessons[] = [
  {
    topicCode: "IM-MOD-04-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "nephrotic-nephritic-layer-1-foundation",
        title: "Nephrotic & Nephritic Syndrome - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of glomerulonephritis pathophysiology, definitions of nephrotic and nephritic syndromes, major causes, and clinical features in Indian context.",
        contentMd: `# Nephrotic & Nephritic Syndrome - Foundation

## Nephrotic Syndrome

### Definition
Clinical syndrome with:
- **Proteinuria** ≥3.5 g/day (24-hour urine collection)
- **Hypoalbuminemia** <2.5 g/dL
- **Edema** (periorbital, peripheral, ascites)
- **Hyperlipidemia** (↑ cholesterol, LDL)

### Pathophysiology
1. Glomerular basement membrane (GBM) damage
2. ↑ Glomerular permeability to proteins
3. Loss of negative charge from GBM
4. Massive proteinuria (mostly albumin initially, then globulins)
5. Reduced plasma oncotic pressure → fluid transudation → edema

### Major Causes

**Primary GN (50-70% in developed countries):**
- Minimal Change Disease (MCD) - most common in children
- Focal Segmental Glomerulosclerosis (FSGS)
- Membranoproliferative GN (MPGN)
- Membranous GN

**Secondary (30-50%, more common in India):**
- **Diabetes mellitus** - most common in developed countries (25-45%)
- **Infections**: Chronic TB, leprosy, syphilis, hepatitis B, hepatitis C
- **Autoimmune**: SLE, rheumatoid arthritis
- **Malignancy**: Lung, colon, stomach cancer
- **Drugs**: NSAIDs, gold, penicillamine
- **Hereditary**: Alport syndrome

## Nephritic Syndrome

### Definition
Clinical syndrome with:
- **Hematuria** (RBC casts, dysmorphic RBCs)
- **Proteinuria** <3.5 g/day (usually <1 g/day)
- **Hypertension**
- **Azotemia** (↑ Cr, ↑ BUN)
- **Edema** (usually mild, periorbital)
- **Oliguria** (in severe cases)

### Pathophysiology
1. Immune-mediated glomerular injury (antibodies, immune complex deposition)
2. Glomerular proliferation and inflammation
3. ↓ GFR (from glomerular swelling, infiltration)
4. RBC leakage through damaged GBM → hematuria

### Major Causes

**Post-Infectious:**
- **Post-streptococcal GN (PSGN)** - most common in children
  - 1-3 weeks after group A streptococcal infection (pharyngitis, impetigo)
  - Self-limited, usually complete recovery
  - More common in India (tropical regions)

**IgA Nephropathy (IgAN)**
- Most common primary GN worldwide
- Serum IgA immune complex deposition
- Can progress to chronic kidney disease

**Lupus Nephritis**
- Seen in 50% of SLE patients
- Class I-VI based on histology
- More aggressive in Indians, Hispanics

**Anti-GBM Disease (Goodpasture)**
- Rare, antibodies against type IV collagen
- Rapidly progressive, pulmonary involvement possible

## Key Differences: Nephrotic vs Nephritic

| Feature | Nephrotic | Nephritic |
|---------|-----------|-----------|
| Proteinuria | ≥3.5 g/day | <3.5 g/day |
| Hematuria | Absent/rare | Present (dysmorphic, RBC casts) |
| Hypertension | Absent/mild | Present |
| Renal Function | Usually preserved initially | Often impaired |
| Azotemia | Absent | Present |
| Edema | Significant | Mild |
| Serum Albumin | Markedly ↓ | Normal or mildly ↓ |
| Lipiduria | Present | Absent |

## Glomerular Filtration Barrier

### Normal Structure
1. **Fenestrated capillary endothelium** (pores 50-100 nm)
2. **Basement membrane** (size and charge barrier)
   - Type IV collagen (negative charge)
   - Proteoglycans (heparan sulfate - negative)
3. **Podocytes** (epithelial cells with slit diaphragm)
   - Negative glycocalyx
   - Selective barrier to large proteins

### Mechanisms of Proteinuria
1. **Size-selective**: Small proteins leak (albumin 66 kDa)
2. **Charge-selective**: Loss of negative charge barrier
3. **Combinedmechanism**: Both size and charge barrier loss`,
        mnemonics: [
          { text: "Nephrotic: 3 P's", explanation: "Proteinuria (≥3.5g/d), Proteins ↓ (hypoalbuminemia), Puffiness (edema)" },
          { text: "Nephritic: HARMED", explanation: "Hematuria (with casts), Azotemia (↑Cr), Reduced GFR, Mixed proteinuria, Edema (mild), Dysmorphic RBCs" },
          { text: "Common GN in India: Post-strep, IgA, Lupus, Infectious (TB, hepatitis)", explanation: "Post-strep and infectious causes more common in tropical regions" }
        ],
        keyPoints: [
          "Nephrotic: massive proteinuria (≥3.5 g/day) with hypoalbuminemia and edema",
          "Nephritic: hematuria with RBC casts, hypertension, azotemia, mild proteinuria",
          "Most common primary GN: IgAN worldwide, MCD in children",
          "Most common secondary GN: Diabetes mellitus in developed countries; infections (TB, hepatitis) in India",
          "Post-streptococcal GN most common in children; self-limited, 1-3 weeks after strep infection"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "265: Glomerulonephritis", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "9: Renal System", edition: "11th" }
        ]
      },
      {
        layer: 2,
        slug: "nephrotic-nephritic-layer-2-mechanism",
        title: "Nephrotic & Nephritic Syndrome - Mechanism",
        estimatedMinutes: 30,
        summary: "Detailed pathophysiology of immune-mediated glomerulonephritis, mechanisms of proteinuria, complement activation, and progression to chronic kidney disease.",
        contentMd: `# Nephrotic & Nephritic Syndrome - Mechanism

## Immune-Mediated Glomerulonephritis

### Pathogenic Mechanisms

**1. Immune Complex Deposition (Type III Hypersensitivity)**
- Circulating immune complexes (antigen + antibody) deposit in glomeruli
- Size, charge, and avidity of immune complex determine location
- Larger complexes → mesangium; smaller → subendothelial
- Seen in: Post-PSGN, lupus, infective endocarditis

**2. In Situ Immune Complex Formation (Type II)**
- Antibodies bind directly to antigens already in glomerulus
- Antigens on GBM or deposited in glomerulus
- Example: Anti-GBM disease (Goodpasture)

**3. Pauci-Immune GN (ANCA-associated)**
- ANCA (anti-neutrophil cytoplasmic antibodies) activate neutrophils
- Neutrophil-mediated glomerular damage without immune deposits
- Example: Granulomatosis with polyangiitis (GPA, formerly Wegener's)

### Post-Streptococcal GN (PSGN) Mechanism

1. **Streptococcal antigen deposition** in GBM
2. **Antibody response** → immune complex formation
3. **Complement activation** (classical pathway via C1q)
4. **C3 deposition** in glomeruli (on immunofluorescence)
5. **Inflammatory cell infiltration** (neutrophils, macrophages)
6. **Glomerular injury** → hematuria, azotemia
7. **Self-limited course** → spontaneous recovery (usually)

### IgA Nephropathy (IgAN) Mechanism

1. **Abnormal IgA1 glycosylation** (reduced O-linked galactose)
2. **IgA1 immune complex formation** in circulation
3. **Glomerular mesangial deposition** of IgA1 complexes
4. **Mesangial expansion** (proliferation and hypertrophy)
5. **Progressive glomerular injury** (proteinuria increases)
6. **Progression to FSGS** (in 40% over 10 years)

## Mechanism of Proteinuria

### Nephrotic-Range Proteinuria

**Charge-Selective Loss (Early)**
- Loss of negative charge from GBM (heparan sulfate damage)
- Allows passage of small, positively charged proteins
- Albumin (negatively charged) still retained by size barrier
- Seen in: MCD (charge loss without glomerulosclerosis)

**Non-Selective Loss (Advanced)**
- Severe glomerular damage
- Large proteins (globulins, large immune complexes) pass through
- Seen in: FSGS, membranous, MPGN

**Mechanisms of GBM Damage**
1. Complement activation → C3b, C5a → membrane attack complex
2. Proteolytic enzymes from neutrophils → collagen, proteoglycan damage
3. ROS generation → oxidative injury to GBM
4. Direct antibody-mediated injury

## Nephritic vs Nephrotic Manifestations

### Why Nephritic: Hematuria + RBC Casts?
1. Glomerular inflammation causes epithelial cell loss
2. RBCs leak through damaged GBM
3. Tamm-Horsfall protein + RBCs → RBC casts
4. Dysmorphic RBCs indicate glomerular origin (vs non-glomerular hematuria)

### Why Nephrotic: Massive Proteinuria + Edema?
1. **Nephrotic proteinuria mechanism**:
   - Loss of size selectivity (GBM thickness)
   - Loss of charge selectivity (endothelial glycocalyx, basement membrane)
   - Example: podocyte disease (MCD) → selective proteinuria

2. **Edema formation** (Starling forces):
   - ↓ Plasma oncotic pressure (from albumin loss) >> ↑ interstitial pressure
   - Fluid transudation from intravascular to interstitial space
   - Renal sodium retention (aldosterone activation) → worsens edema

## Progression to Chronic Kidney Disease

### Mechanisms of Glomerular Sclerosis
1. **Glomerular hyperfiltration** → increased shear stress
2. **Proteinuria** → toxic to tubular epithelial cells
3. **Complement activation** → progressive glomerular damage
4. **Epithelial-mesenchymal transition (EMT)** → podocyte loss
5. **Fibrosis** → collagen deposition, glomerular sclerosis
6. **RAAS activation** → glomerular hypertension, mesangial proliferation

### Factors Predicting Progression
- Degree of proteinuria (>3 g/day worse prognosis)
- Degree of azotemia at presentation
- Presence of tubulointerstitial fibrosis on biopsy
- Presence of sclerotic glomeruli (percentage on biopsy)
- Persistent hematuria
- Hypertension`,
        mnemonics: [
          { text: "Immune GN Pathways: IC-ISM-PAUCI", explanation: "Immune Complex, In Situ formation, ANCA-associated pauci-immune" },
          { text: "PSGN Cause: Strep → IC → C3 → Infiltration → Resolution", explanation: "Post-strep GN usually self-limited" },
          { text: "IgAN Mechanism: Abnormal IgA1 → IC → Mesangial deposition → Proliferation → Sclerosis", explanation: "Can progress to FSGS (40% over 10 years)" },
          { text: "Proteinuria Mechanism: Size + Charge selectivity loss", explanation: "Charge loss early (MCD), size loss later (FSGS)" }
        ],
        keyPoints: [
          "Post-streptococcal GN: immune complex deposition → C3 activation → self-limited glomerular injury with eventual recovery",
          "IgA nephropathy: abnormal IgA1 glycosylation → mesangial immune complex deposition → progressive glomerular sclerosis",
          "Nephrotic proteinuria: loss of both charge and size selectivity of GBM",
          "Nephritic hematuria: glomerular inflammation → epithelial damage → RBC leakage and RBC cast formation",
          "Progression to CKD: persistent proteinuria, hyperfiltration, glomerular hypertension, and epithelial-mesenchymal transition"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "265: Glomerulonephritis", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "9: Glomerulonephritis", edition: "11th" }
        ]
      },
      {
        layer: 3,
        slug: "nephrotic-nephritic-layer-3-clinical",
        title: "Nephrotic & Nephritic Syndrome - Clinical",
        estimatedMinutes: 35,
        summary: "Clinical diagnosis, investigations, management of nephrotic and nephritic syndromes, kidney biopsy indications, and treatment strategies in Indian context.",
        contentMd: `# Nephrotic & Nephritic Syndrome - Clinical Diagnosis & Management

## Clinical Presentation

### Nephrotic Syndrome Symptoms
- **Edema**: Periorbital (morning), peripheral (evening), ascites (severe), pleural effusion
- **Weight gain**: Rapid (2-3 kg in days)
- **Fatigue**, dyspnea (from anemia, hypoalbuminemia)
- **Foamy urine**: From proteinuria (lipid-containing)
- **Abdominal pain**: From ascites, mesenteric thrombosis risk

### Nephritic Syndrome Symptoms
- **Hematuria**: Brown/cola-colored urine
- **Edema**: Usually mild (periorbital)
- **Hypertension**: Often present
- **Dyspnea**: From fluid overload, pulmonary edema risk
- **Oliguria**: In severe cases, progressing to AKI

## Investigations

### Nephrotic Syndrome Workup

**Urinalysis**:
- Proteinuria 3-30 g/day (usually >4 g/day)
- Oval fat bodies (cholesterol, phospholipids in epithelial cells)
- Few RBCs, few casts (if MCD); absent in primary nephrotic

**24-hour Urine Protein**:
- Gold standard, collect on dietary salt and protein control
- Normal <0.15 g/day, nephrotic ≥3.5 g/day

**Serum Chemistry**:
- ↓ Albumin (<2.5 g/dL), ↓ total protein
- ↑ Cholesterol (>300 mg/dL), ↑ LDL
- Hypocalcemia (from ↓ vitamin D-binding protein)
- ↑ Creatinine (if azotemic)

**Serologies for Secondary Causes**:
- ANA (lupus), anti-GBM (Goodpasture), ANCA (vasculitis)
- HBsAg, anti-HCV (hepatitis B, C)
- ESR, CRP (infection, malignancy)
- Chest X-ray (malignancy, TB in India)

**Renal Imaging**:
- Ultrasound: assess kidney size, echotexture, rule out obstruction
- Normal size argues against chronic kidney disease

### Nephritic Syndrome Workup

**Urinalysis**:
- RBCs (dysmorphic, RBC casts)
- Proteinuria usually <1 g/day (may reach 2-3 g/day)
- WBCs, WBC casts possible (if GN with vasculitis)

**Serum Chemistry**:
- ↑ Creatinine (indicates glomerular injury)
- ↑ BUN (azotemia)
- Hyperkalemia (if severe AKI)
- Hypocalcemia, hyperphosphatemia

**Immunology for Specific Diagnosis**:
- **Post-PSGN**: ↓ C3 levels (consumed by classical complement pathway), normal C4
- **IgAN**: Serum IgA levels elevated (not diagnostic but suggestive)
- **Lupus**: ANA (nearly 100% sensitive), anti-dsDNA, low C3/C4
- **ANCA-GN**: c-ANCA/PR3 or p-ANCA/MPO

## Kidney Biopsy Indications

### Nephrotic Syndrome:
- Non-diabetic with nephrotic proteinuria (to confirm MCD vs FSGS vs membranous)
- Diabetic with atypical features (non-nephrotic proteinuria, absence of diabetic retinopathy, rapidly rising Cr)
- No response to empiric therapy after 8 weeks

### Nephritic Syndrome:
- All cases (except post-PSGN with typical presentation)
- Post-PSGN: if atypical presentation or prolonged renal dysfunction

## Management

### Nephrotic Syndrome Management

**Supportive Care**:
1. **Sodium restriction**: <2 g/day (reduces edema)
2. **Fluid restriction**: 800-1000 mL/day (if severe hyponatremia)
3. **Diuretics**: Loop diuretics (furosemide 40-80 mg BD/TDS) if symptomatic edema
4. **Bed rest**: Minimal evidence, may help in acute phase

**Cardiovascular Protection**:
1. **Lipid management**: Statin (atorvastatin 20 mg OD)
2. **Anticoagulation**: Consider in membranous GN (VTE risk)
   - Hypercoagulability from loss of anticoagulant proteins (protein C, S, fibrinogen)

**Renoprotection**:
1. **ACE-I or ARB**: Standard therapy
   - Losartan 50 mg OD or enalapril 5 mg OD
   - Reduces proteinuria, slows progression to CKD
   - Start low dose, uptitrate as tolerated

**Disease-Specific Therapy**:

**Minimal Change Disease**:
- **Corticosteroids**: Prednisolone 1 mg/kg/day (max 80 mg) for 4-6 weeks, then taper
- **Response rate**: 90% in children, 50% in adults
- Maintain steroid therapy 6-12 weeks total

**Focal Segmental Glomerulosclerosis**:
- **Corticosteroids**: Similar dosing to MCD, longer duration (8-12 weeks)
- **Add immunosuppressants** if steroid-resistant:
  - Mycophenolate mofetil 1-2 g/day OR
  - Calcineurin inhibitor (ciclosporin)

**Membranous GN**:
- Observation if stable, <3 g/day proteinuria
- If progressive or nephrotic: **Corticosteroids + cyclophosphamide** (or rituximab)
  - 6-monthly IV cyclophosphamide × 6 cycles

### Nephritic Syndrome Management

**Acute Management**:
1. **Blood pressure control**: Target MAP >90 mmHg (adequate perfusion)
2. **Fluid management**: Restrict if volume overloaded
3. **Diuretics**: Loop diuretics if pulmonary edema
4. **Hyperkalemia management**: If K⁺ >5.5

**Disease-Specific Therapy**:

**Post-Streptococcal GN**:
- Usually self-limited, resolves in 4-12 weeks
- Supportive care, BP control
- No specific therapy needed
- Penicillin for active strep infection (eradicate organism)

**IgA Nephropathy**:
- Supportive: BP control, ACE-I/ARB
- **Corticosteroids** if rapid decline in GFR or severe proteinuria:
  - Methylprednisolone IV (0.5-1 g × 3 days) followed by oral prednisolone
  - Then azathioprine or mycophenolate mofetil

**Lupus Nephritis** (Class III-IV):
- **Immunosuppression**: Corticosteroids + cyclophosphamide (IV monthly × 6 months)
- **Maintenance**: Azathioprine or mycophenolate
- Target: remission of proteinuria and preservation of GFR

**Rapidly Progressive GN**:
- **Emergency management**: Immediate immunosuppression
- **Corticosteroids**: High-dose IV methylprednisolone ± plasmapheresis
- **Cyclophosphamide** or rituximab

## Monitoring & Follow-up

- Serum creatinine every 2-4 weeks initially
- 24-hour urine protein monthly (assess response to therapy)
- BP control (target <130/80)
- Lipid profile every 3 months
- Monitor for steroid side effects (infection, hyperglycemia, osteoporosis)`,
        mnemonics: [
          { text: "Nephrotic Presentation: FOAMING", explanation: "Foamy urine, Oval fat bodies, Albumin ↓, Massive proteinuria, Increased lipids, N/Cr normal, Globulin loss" },
          { text: "Nephritic Presentation: RBCCASH", explanation: "RBC casts, Brown urine, C3 ↓ (PSGN), Azotemia, Strep recent (PSGN), HTN" },
          { text: "Post-PSGN: Strep 1-3 weeks, C3 ↓, Self-limited", explanation: "Most common GN in children, good prognosis" },
          { text: "MCD vs FSGS: MCD steroid-responsive, FSGS resistant", explanation: "FSGS may need additional immunosuppression" }
        ],
        keyPoints: [
          "Nephrotic: proteinuria ≥3.5 g/day, hypoalbuminemia, edema, hyperlipidemia",
          "Nephritic: hematuria with RBC casts, azotemia, hypertension, mild proteinuria",
          "Post-PSGN: self-limited, 1-3 weeks after strep infection, C3 ↓, usually complete recovery",
          "IgAN: most common primary GN, can progress to chronic kidney disease (40% over 10 years)",
          "Kidney biopsy: indicated for non-diabetic nephrotic (confirm etiology) and all nephritic cases",
          "Nephrotic management: sodium/fluid restriction, ACE-I/ARB, disease-specific therapy (steroids ± immunosuppression)",
          "Nephritic management: BP control, ACE-I/ARB, immunosuppression if severe/rapidly progressive"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "265: Glomerulonephritis", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "9: Nephrotic & Nephritic Syndromes", edition: "11th" }
        ]
      },
      {
        layer: 4,
        slug: "nephrotic-nephritic-layer-4-exam",
        title: "Nephrotic & Nephritic Syndrome - Exam Prep",
        estimatedMinutes: 25,
        summary: "Comprehensive exam-focused review of nephrotic and nephritic syndromes, NEET-PG pattern questions, high-yield facts, and clinical pearls.",
        contentMd: `# Nephrotic & Nephritic Syndrome - Exam Preparation

## Differential Diagnosis

### Massive Proteinuria Causes
1. **Nephrotic syndromes** (≥3.5 g/day)
2. **Diabetic nephropathy** (progressive, albuminuria >300 mg/day)
3. **Severe glomerulonephritis** (some GN can present with nephrotic range)
4. **Tubular proteinuria** (rare, usually <3.5 g/day)

### Hematuria Differential
1. **Glomerular**: RBC casts, dysmorphic RBCs, proteinuria
2. **Non-glomerular**: Isomorphic RBCs, no casts, no proteinuria
   - Stones, tumors, UTI, bleeding disorders

## High-Yield Facts

### Nephrotic Syndrome Criteria:
- Proteinuria ≥3.5 g/day (or ≥3 g/day in some definitions)
- Serum albumin <2.5 g/dL (or total protein <6 g/dL)
- Edema (not required for diagnosis)
- Hyperlipidemia (cholesterol >300 mg/dL)

### Common Primary GN Causes (India-specific):
1. **IgAN** - most common primary GN (25-30% in India)
2. **Post-PSGN** - common in children (tropical regions)
3. **Membranous** - second most common cause of nephrotic syndrome
4. **FSGS** - increasingly common, associated with HIV, obesity
5. **MCD** - most common in children; rare in adults

### Secondary Nephrotic Causes (India-specific):
1. **Diabetes** - leading cause overall
2. **Infections**: TB (extrapulmonary), leprosy, hepatitis B/C, syphilis
3. **Autoimmune**: SLE, RA
4. **Malignancy**: Lung, colon, stomach cancer

### Post-Streptococcal GN Features:
- **Antecedent**: Throat or skin infection (impetigo)
- **Latency**: 1-3 weeks after acute strep
- **Immunology**: C3 ↓ (classical complement pathway), C4 normal
- **Prognosis**: Usually self-limited, complete recovery (especially children)
- **Treatment**: Supportive, no specific therapy (except treat active strep)

### IgA Nephropathy Features:
- **Most common** primary GN (25-30% in India, 40-50% in Asia)
- **Serum IgA** often elevated (not diagnostic)
- **Kidney biopsy**: IgA deposits on immunofluorescence
- **Clinical**: Variable - asymptomatic hematuria to RPGN
- **Prognosis**: 40% progress to ESRD in 10 years

### Minimal Change Disease (MCD):
- **Most common** nephrotic GN in children (90%)
- **Serology**: Normal C3, C4, negative ANA
- **Biopsy**: Glomeruli appear normal on light microscopy (hence "minimal change")
- **EM**: Podocyte foot process effacement (diagnostic)
- **Treatment**: Corticosteroids (90% remission in children, 50% in adults)
- **Prognosis**: Excellent if steroid-responsive

### Membranous Glomerulonephritis:
- **Epidemiology**: Most common cause of nephrotic syndrome in adults (India)
- **Antigen**: Phospholipase A2 receptor (PLA2R) in 70% of primary membranous
- **Biopsy findings**: Subepithelial "spike and dome" deposits
- **Treatment**: Observation vs immunosuppression (steroid + cyclophosphamide or rituximab)
- **Prognosis**: Variable (30% spontaneous remission, 30% stable, 30-40% progression)

### Focal Segmental Glomerulosclerosis (FSGS):
- **Pathology**: Segmental sclerosis in some glomeruli
- **Causes**: Primary vs secondary (HIV, obesity, heroin use)
- **Treatment**: Difficult to treat; steroids + additional immunosuppression needed
- **Prognosis**: Often progresses to ESRD (especially primary FSGS)

### RapidlyProgressive GN (RPGN):
- **Definition**: Rapid decline in GFR (days to weeks)
- **Biopsy**: Crescents (>50% of glomeruli)
- **Causes**: ANCA-GN, anti-GBM disease, immune complex RPGN
- **Treatment**: Emergency immunosuppression (steroids + cyclophosphamide or rituximab)
- **Outcome**: Worst prognosis; need dialysis if delayed treatment

## Common Exam Questions

**Q: 35-year-old with foamy urine, edema, albumin 1.8, cholesterol 350. C3 normal. Likely diagnosis?**
A: Primary nephrotic syndrome (likely MCD or membranous). Perform kidney biopsy for diagnosis. Negative ANA and normal C3 argue against lupus.

**Q: 6-year-old with gross hematuria, brown urine, 1-week post-strep pharyngitis. C3 ↓. Management?**
A: Post-streptococcal GN. Supportive care, BP control, penicillin for strep. Usually self-limited with complete recovery.

**Q: 40-year-old with IgA nepropathy presenting with gross hematuria. No hypertension initially. Long-term management?**
A: ACE-I/ARB for renoprotection. Monitor GFR; if rapid decline or severe proteinuria, add corticosteroids.

**Q: Patient with nephrotic syndrome unresponsive to steroids at 8 weeks. Next step?**
A: Likely FSGS. Add additional immunosuppression: mycophenolate mofetil or calcineurin inhibitor (ciclosporin)`,
        mnemonics: [
          { text: "Nephrotic GN: MFM (children)", explanation: "Minimal Change, FSGS, Membranous (adults)" },
          { text: "Secondary Nephrotic: DIM-SUM", explanation: "Diabetes, Infections, Malignancy | SLE, Autoimmune, Malignancy" },
          { text: "Post-PSGN: 60-90-100", explanation: "6 weeks (latency typically 2-3 weeks), 90% children recover, 100% self-limited" },
          { text: "IgAN: 25-40-10", explanation: "25-30% of all GN in India, 40% progress to ESRD in 10 years" },
          { text: "C3 Status: ↓ in post-strep and MPGN, normal in MCD, membranous, IgAN, lupus (usually)", explanation: "C3 helps differentiate etiologies" },
          { text: "Steroid Response: MCD>Membranous>FSGS", explanation: "MCD 90% respond, Membranous 60%, FSGS <20%" },
          { text: "RBC Casts = Glomerular Hematuria", explanation: "Indicates glomerular origin of RBCs" },
          { text: "Oval Fat Bodies = Nephrotic", explanation: "Cholesterol and phospholipids in epithelial cells" },
          { text: "Post-PSGN Immunology: C3 ↓, C4 normal, ASO ↑", explanation: "Classical complement pathway activation" },
          { text: "IgAN Biopsy: IgA deposits on IF, normal LM, foot process effacement on EM", explanation: "IgA on immunofluorescence is diagnostic" }
        ],
        keyPoints: [
          "Nephrotic: proteinuria ≥3.5 g/day, hypoalbuminemia, edema, hyperlipidemia",
          "Nephritic: hematuria with RBC casts, azotemia, hypertension, mild proteinuria",
          "Post-PSGN: self-limited GN 1-3 weeks after strep, C3 ↓, usually complete recovery",
          "IgAN: most common primary GN (25-30% in India), can progress to CKD (40% over 10 years)",
          "MCD: 90% of nephrotic syndrome in children, excellent steroid response",
          "Membranous: most common adult nephrotic syndrome cause, variable prognosis (30% spontaneous remission)",
          "FSGS: poor prognosis, steroid-resistant, need additional immunosuppression",
          "RPGN: medical emergency, rapid GFR decline, crescents on biopsy, need immediate immunosuppression",
          "Kidney biopsy indicated: all nephritic cases, non-diabetic nephrotic syndrome",
          "Management: ACE-I/ARB for all, disease-specific immunosuppression based on diagnosis"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "265: Glomerulonephritis", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "9: Nephrotic & Nephritic Syndromes", edition: "11th" }
        ]
      },
      {
        layer: 5,
        slug: "nephrotic-nephritic-layer-5-active-recall",
        title: "Nephrotic & Nephritic Syndrome - Active Recall",
        estimatedMinutes: 20,
        summary: "Flashcard-based active recall for rapid learning and retention of critical nephrotic and nephritic concepts.",
        contentMd: `# Nephrotic & Nephritic Syndrome - Active Recall Flashcards

**Q1: Define nephrotic syndrome with specific numerical criteria.**
A: Proteinuria ≥3.5 g/day (24-hour urine) + serum albumin <2.5 g/dL + edema + hyperlipidemia.

**Q2: Define nephritic syndrome and contrast with nephrotic.**
A: Nephritic: hematuria (RBC casts, dysmorphic RBCs) + proteinuria <3.5 g/day + hypertension + azotemia + edema (mild). Unlike nephrotic: no massive proteinuria or hypoalbuminemia.

**Q3: What is post-streptococcal glomerulonephritis and what is the typical presentation timeline?**
A: GN occurring 1-3 weeks after group A streptococcal infection (pharyngitis or impetigo). Immune complex deposition → C3 activation → glomerular injury. Self-limited, usually complete recovery.

**Q4: What immunological finding is characteristic of post-streptococcal GN?**
A: ↓ C3 levels (classical complement pathway consumption), normal C4. ASO titers elevated (evidence of recent strep).

**Q5: What is IgA nephropathy and what is its prevalence and prognosis?**
A: Most common primary GN worldwide (25-30% in India, 40-50% in Asia). IgA immune complex deposition in mesangium. 40% progress to ESRD in 10 years.

**Q6: What are the three main causes of nephrotic syndrome in India?**
A: (1) Diabetes mellitus (most common overall), (2) Infections (TB, hepatitis B/C, leprosy), (3) IgA nephropathy, membranous GN, FSGS.

**Q7: What is minimal change disease and why is it called "minimal"?**
A: Most common nephrotic syndrome in children (90%). Called "minimal" because glomeruli appear normal on light microscopy; diagnosis requires electron microscopy showing podocyte foot process effacement.

**Q8: What is the treatment response to corticosteroids for different GN types?**
A: MCD: 90% remission in children, 50% in adults. Membranous: 60% respond. FSGS: <20% respond; need additional immunosuppression.

**Q9: What is the mechanism of edema formation in nephrotic syndrome?**
A: Proteinuria → ↓ plasma albumin → ↓ plasma oncotic pressure → fluid transudation from intravascular to interstitial space + renal Na⁺ retention (aldosterone activation).

**Q10: What are dysmorphic RBCs and why do they indicate glomerular hematuria?**
A: RBCs deformed by passage through damaged glomeruli. Indicate glomerular origin. Non-glomerular hematuria shows isomorphic (uniform) RBCs.

**Q11: What is RBC cast and why is it seen in nephritic syndrome?**
A: Cast of Tamm-Horsfall protein containing RBCs. Forms in renal tubules when RBCs leak through damaged glomeruli. Indicates glomerulonephritis.

**Q12: What is focal segmental glomerulosclerosis (FSGS) and what is its significance?**
A: Partial sclerosis of some glomeruli. Can be primary (bad prognosis, steroid-resistant) or secondary (HIV, obesity, heroin). Often progresses to ESRD.

**Q13: What is membranous glomerulonephritis and how is it diagnosed?**
A: Most common adult nephrotic syndrome cause. Caused by IgG immune complex deposition on GBM subepithelial side. Diagnostic: "spike and dome" appearance on electron microscopy.

**Q14: What is the role of kidney biopsy in nephrotic and nephritic syndromes?**
A: Nephrotic: indicated in non-diabetic to determine cause and guide treatment (MCD vs FSGS vs membranous). Nephritic: indicated in all cases except typical post-PSGN.

**Q15: What is rapidly progressive glomerulonephritis (RPGN) and how should it be managed?**
A: GN with rapid GFR decline (days to weeks), >50% glomeruli with crescents. Causes: ANCA-GN, anti-GBM, lupus. Management: emergency immunosuppression (steroids + cyclophosphamide).

**Q16: What causes can result in secondary nephrotic syndrome?**
A: Diabetes, infections (TB, hepatitis B/C, leprosy), autoimmune (SLE, RA), malignancy, drugs (NSAIDs, gold).

**Q17: What is the significance of C3 levels in different glomerulonephritis?**
A: ↓ C3: post-strep GN, MPGN, lupus (sometimes). Normal C3: IgAN, MCD, membranous, ANCA-GN.

**Q18: How does proteinuria contribute to progression of kidney disease?**
A: Proteinuria is directly toxic to tubular epithelial cells → tubulointerstitial fibrosis → glomerular sclerosis. Greater proteinuria = faster progression to CKD.

**Q19: What is the mechanism of hyperlipidemia in nephrotic syndrome?**
A: ↓ Plasma oncotic pressure → ↑ hepatic lipoprotein synthesis. Urinary loss of apoB-containing lipoproteins less significant. Results in ↑ cholesterol and LDL.

**Q20: What is the hypercoagulable state in nephrotic syndrome and how should it be managed?**
A: From loss of anticoagulant proteins (protein C, S) and platelet-stimulating factors. Risk of DVT, pulmonary embolism. Anticoagulation (warfarin or LMWH) in membranous GN if proteinuria >10 g/day or after VTE.`,
        mnemonics: [
          { text: "Nephrotic: 3-2.5-3.5", explanation: "Proteinuria ≥3.5 g/day, Albumin <2.5 g/dL, Cholesterol >300 mg/dL" },
          { text: "Nephritic: HARd", explanation: "Hematuria (with casts), Azotemia, Reduced GFR, Dysmorphic RBCs" },
          { text: "Post-PSGN: 1-3 weeks, C3 ↓, Self-limited", explanation: "Latency 1-3 weeks after strep, immune complex GN" },
          { text: "Primary GN (India): I-M-F", explanation: "IgAN, Membranous, FSGS most common" },
          { text: "GN Serology: PICA", explanation: "Post-strep (C3 ↓), IgAN (normal), Lupus (ANA, low C3), ANCA (p/c-ANCA)" },
          { text: "Steroid Response: MFM ladder", explanation: "MCD best response, FSGS worst, Membranous intermediate" },
          { text: "Edema Mechanism: Oncotic pressure ↓, Na+ retention", explanation: "Both factors contribute to fluid accumulation" },
          { text: "RPGN Red Flags: Rapid Cr rise, Crescents, ANCA+/Anti-GBM+", explanation: "Emergency requiring immediate immunosuppression" },
          { text: "Biopsy Findings: Light + Immune + Electron microscopy", explanation: "Three modalities needed for complete diagnosis" },
          { text: "ACE-I/ARB Benefits: ↓ Proteinuria, ↓ GFR decline, BP control", explanation: "Indicated in all GN with proteinuria" }
        ],
        keyPoints: [
          "Nephrotic: massive proteinuria (≥3.5 g/day), hypoalbuminemia, edema, hyperlipidemia",
          "Nephritic: hematuria with RBC casts, azotemia, hypertension, mild proteinuria",
          "Post-streptococcal GN: self-limited GN 1-3 weeks after strep infection, C3 ↓, usually complete recovery in children",
          "IgAN: most common primary GN (25-30% in India), IgA immune complex deposition, 40% progress to ESRD in 10 years",
          "MCD: 90% of pediatric nephrotic syndrome, excellent steroid response (90% in children)",
          "Membranous: most common adult nephrotic syndrome cause, variable prognosis (30% spontaneous remission, 40% progression)",
          "FSGS: poor prognosis, steroid-resistant, often requires additional immunosuppression",
          "RPGN: medical emergency with crescents on biopsy, requires immediate immunosuppression",
          "Kidney biopsy: essential for diagnosis of GN (except clear post-PSGN in children)",
          "Management: ACE-I/ARB for renoprotection, disease-specific immunosuppression based on etiology and severity"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "265: Glomerulonephritis", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "9: Renal System", edition: "11th" }
        ]
      }
    ]
  }
];
