import type { TopicLessons } from "./content-loader";

export const pediatricsLessonsPart16: TopicLessons[] = [
  {
    topicCode: "PE-MOD-06-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "agn-uti-layer-1-foundation",
        title: "Acute Glomerulonephritis & UTI in Children - Foundation",
        estimatedMinutes: 20,
        summary: "Acute glomerulonephritis (AGN) post-streptococcal presents 1-3 weeks after pharyngitis with hematuria, proteinuria, hypertension, edema. UTI includes cystitis (dysuria) and pyelonephritis (fever, flank pain). Diagnosis via urinalysis and culture.",
        contentMd: `# Acute Glomerulonephritis and Urinary Tract Infection - Foundation

## Acute Glomerulonephritis (Post-Streptococcal)

### Epidemiology
- **Age**: Peak 5-12 years
- **Preceding infection**: Group A streptococcus pharyngitis (1-3 weeks before)
- **Latency period**: Average 10 days post-pharyngitis
- **Incidence**: Decreasing in developed countries; still common in India
- **Prognosis**: Excellent; most children recover fully

### Pathophysiology Overview
- Type III hypersensitivity reaction
- Immune complex deposition in glomeruli
- Complement activation (C3 deposition)
- Glomerular inflammation and proliferation
- Results in hematuria, proteinuria, reduced GFR

### Clinical Presentation
- **Hematuria**: "Cola-colored" or "smoky" urine (hallmark)
- **Proteinuria**: Causes foamy urine
- **Hypertension**: Due to sodium retention and renin activation
- **Edema**: Periorbial (morning), lower extremities
- **Systemic**: Malaise, headache, mild fever
- **Nephritic syndrome**: Hematuria + proteinuria + hypertension + reduced GFR

## Urinary Tract Infection (UTI)

### Classification

**Cystitis (Lower UTI):**
- **Location**: Bladder inflammation
- **Symptoms**: Dysuria, frequency, urgency, suprapubic pain
- **Exam**: Suprapubic tenderness
- **Fever**: Absent or low-grade
- **Labs**: Pyuria, bacteriuria, positive culture

**Pyelonephritis (Upper UTI):**
- **Location**: Kidney/renal pelvis
- **Symptoms**: Flank pain, fever, CVA tenderness
- **Exam**: Costovertebral angle tenderness, fever
- **Systemic**: High fever, chills, malaise
- **Risk**: Sepsis if untreated; renal scarring

### Epidemiology
- **Prevalence**: 1-2% of children; more common in girls >1 year
- **Age**: Can occur at any age; neonates highest risk of complications
- **Risk factors**: Vesicoureteral reflux, obstruction, neurogenic bladder, female gender
- **India**: E. coli most common in community; nosocomial often resistant

### Pathophysiology
- Bacterial ascension from urethra to bladder
- Mucosal invasion and colonization
- Inflammatory response
- If untreated: Ascending infection to kidney
- Pyelonephritis risk: Renal scarring if delayed treatment`,
        mnemonics: [
          {
            text: "PSGN Presentation - HEPSE",
            explanation: "Hematuria (cola-colored), Edema (periorbital), Proteinuria, Strep history, Hypertension, E (edema lower extremities)"
          },
          {
            text: "UTI Red Flags - FEVER",
            explanation: "Fever (pyelonephritis), Elevated WBC, Vesicoureteral concern, E coli (most common), Recurrent infections"
          }
        ],
        keyPoints: [
          "PSGN: 1-3 weeks post-streptococcal pharyngitis; excellent prognosis",
          "Cola-colored hematuria hallmark; hypertension from sodium retention",
          "UTI: E. coli most common; more common in girls",
          "Pyelonephritis risk: Renal scarring if delayed treatment",
          "Cystitis: Lower UTI with dysuria; pyelonephritis: upper UTI with fever and flank pain"
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Chapter 8: Nephrology", edition: "9th" },
          { book: "Nelson Textbook of Pediatrics", chapter: "Chapter 518: Glomerulonephritis", edition: "21st" }
        ]
      },
      {
        layer: 2,
        slug: "agn-uti-layer-2-mechanism",
        title: "AGN & UTI - Mechanism",
        estimatedMinutes: 30,
        summary: "PSGN: Immune complex (streptococcal antigen + antibody) deposition in glomeruli → complement activation → proliferative GN. UTI: bacterial uroepithelial invasion → mucosal inflammation → dysuria; ascending infection → pyelonephritis.",
        contentMd: `# AGN and UTI - Molecular Mechanisms

## Post-Streptococcal GN Pathogenesis

### Immune Complex Formation
1. **Streptococcal antigen presentation**:
   - Group A strep surface antigens processed
   - Streptococcal pyrogenic exotoxins (SPE) activate T cells
   - Molecular mimicry: Strep antigens cross-react with glomerular components

2. **Antibody production**:
   - Anti-streptolysin O (ASO)
   - Anti-DNase B
   - Anti-streptococcal hyaluronate
   - Anti-streptococcal M protein

3. **Immune complex formation**:
   - Antigen + Antibody → Circulating immune complexes
   - In antibody excess: Larger soluble complexes
   - Deposition in glomeruli

### Glomerular Deposition and Complement Activation

**Glomerular Immune Complex Deposition:**
- Subepithelial location (typical "hump" appearance on electron microscopy)
- Complement fixation: Classical pathway
- C3 deposition (most prominent)
- C1q, C4 also deposited

**Complement Activation Effects:**
1. **C5a generation**: Potent chemotactic factor
   - Attracts neutrophils and macrophages to glomerulus

2. **C3a, C5a**: Anaphylatoxins
   - Mast cell degranulation
   - Increased vascular permeability

3. **Membrane attack complex (MAC/C5b-9)**:
   - Glomerular damage
   - Podocyte injury

### Glomerular Inflammation and Proliferation

**Histopathology:**
- **Light microscopy**: Proliferative GN
  - Endocapillary proliferation (endothelial, mesangial cells)
  - Hypercellularity in glomerular tuft
  - Minimal crescent formation (unlike ANCA-associated)

- **Immunofluorescence**: "Starry sky" pattern
  - Granular C3 and IgG deposition
  - Predominantly subepithelial

- **Electron microscopy**: "Humps"
  - Subepithelial electron-dense deposits
  - Epithelial cell foot process fusion (minor)

### Functional Consequences

**Hypertension Mechanism:**
1. **Reduced GFR** → Sodium and fluid retention
2. **Renin-angiotensin activation** → Vasoconstriction
3. **Complement-mediated endothelial dysfunction** → Reduced NO (vasodilator)
4. Result: Mild-moderate hypertension (BP 140-160 systolic in 10-year-old)

## Urinary Tract Infection Pathogenesis

### Bacterial Uroepithelial Invasion

**E. coli Virulence Factors:**
1. **Pili (Fimbriae)**:
   - Type 1 pili: Bind to uroplakin Ia on uroepithelial cells
   - P pili: Bind to P antigen (globoseries glycolipids)
   - Attachment essential for colonization

2. **Lipopolysaccharide (LPS)**:
   - Endotoxin activation of TLR4
   - Local and systemic inflammation

3. **Hemolysin and Aerobactin**:
   - Toxins for tissue damage
   - Iron acquisition for survival

### Cystitis vs Pyelonephritis Pathogenesis

**Cystitis Pathogenesis:**
1. Bacterial adherence: P and type 1 pili bind uroepithelium
2. Epithelial invasion: Some bacteria internalize
3. Mucosal inflammation: IL-8 production → Neutrophil recruitment
4. Clinical symptoms: Dysuria from mucosal irritation

**Pyelonephritis Pathogenesis:**
1. Initial bladder colonization: Bacteria multiply
2. Ureteral peristalsis disruption: P fimbriae interference
3. Bacterial ascension: Via ureteral lumen to kidney
4. Renal pelvic inflammation: Epithelial invasion

**Renal Scarring Mechanism:**
- Acute phase: Interstitial inflammation
- Chronic phase: Fibrosis and scar formation
- Risk factors: Delay in treatment, vesicoureteral reflux, repeated infections`,
        mnemonics: [
          {
            text: "PSGN Pathology - HECC",
            explanation: "Hump deposits (subepithelial), Endocapillary proliferation, C3/C1q complement, Complex immune-mediated"
          },
          {
            text: "E. coli Virulence - PAHL",
            explanation: "Pili (adhesion), Aerobactin (iron), Hemolysin (toxin), LPS (endotoxin)"
          }
        ],
        keyPoints: [
          "PSGN: Type III hypersensitivity; immune complex deposition glomeruli",
          "Complement C3 predominates; 'starry sky' immunofluorescence pattern",
          "Hypertension: Sodium retention + renin-angiotensin activation",
          "UTI: E. coli P fimbriae critical for uroepithelial adhesion",
          "Renal scarring: Risk increased with delayed treatment and VUR"
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 20: Kidney", edition: "10th" },
          { book: "Nelson Textbook of Pediatrics", chapter: "Chapter 518: Glomerulonephritis", edition: "21st" }
        ]
      },
      {
        layer: 3,
        slug: "agn-uti-layer-3-clinical",
        title: "AGN & UTI - Clinical Features",
        estimatedMinutes: 25,
        summary: "PSGN: Cola-colored hematuria, edema, hypertension 1-3 weeks post-strep. UTI: dysuria in cystitis; fever + flank pain in pyelonephritis. Diagnosis via urinalysis, urine culture, ASO titer. RBC casts pathognomonic for PSGN.",
        contentMd: `# AGN and UTI - Clinical Features and Diagnosis

## Post-Streptococcal GN - Presentation

### Classic Presentation
- **Age**: 5-12 years typically
- **Timing**: 1-3 weeks post-pharyngitis (average 10 days)
- **Onset**: Often abrupt

### Clinical Features

**Urinary Findings:**
- **Hematuria**: "Cola-colored" or "tea-colored" urine (hallmark)
  - May be visible or microscopic
  - RBC casts pathognomonic
- **Proteinuria**: "Foamy" urine
  - Usually <3 g/24 hours (non-nephrotic)
  - Up to 5-6 g if nephrotic features present

**Systemic Features:**
- **Hypertension**: Present in 50% of cases
  - Mild to moderate elevation
  - BP 140-160 systolic typical
  - Usually asymptomatic
- **Edema**: 50% of patients
  - Periorbital (morning)
  - Lower extremity edema
  - Usually mild
- **General symptoms**:
  - Malaise, headache
  - Low-grade fever
  - Lethargy (if severe)

### Physical Examination
| Finding | Frequency | Significance |
|---|---|---|
| Periorbital edema | 40% | Usually pitting |
| Lower extremity edema | 50% | May involve sacrum if severe |
| Hypertension | 50% | Measured in all extremities |
| Pulmonary edema | Rare | Indicates severe fluid overload |

## Urinary Tract Infection - Presentation

### Cystitis (Lower UTI)
- **Frequency**: Dysuria, pollakiuria (frequent voiding)
- **Pain**: Suprapubic discomfort, dysuria
- **Urine character**: May see turbid urine, hematuria
- **Systemic**: Asymptomatic or low-grade fever
- **Exam**: Suprapubic tenderness; no CVA tenderness

### Pyelonephritis (Upper UTI)
- **Fever**: High, often >38.5°C with chills
- **Flank pain**: Unilateral or bilateral CVA tenderness
- **GI symptoms**: Vomiting, abdominal pain
- **Systemic**: Malaise, headache, myalgias
- **Exam**: CVA tenderness, fever, ill-appearing
- **Sepsis risk**: High in neonates and young infants

### Age-Specific Presentations

**Neonates/Young Infants (<1 year):**
- Fever or hypothermia
- Irritability, lethargy
- Poor feeding
- Jaundice possible
- Sepsis signs (tachycardia, hypotension)
- Dysuria symptoms absent

**Older Children (>3 years):**
- Classic symptoms of UTI or pyelonephritis
- Dysuria often reported
- Better able to localize pain

## Diagnosis

### Urinalysis

**Microscopic Examination (PSGN):**
- **RBC**: >5 RBC/hpf (often >50)
- **RBC casts**: Pathognomonic (protein + RBC in cylindrical form)
- **Protein**: 1-4+ proteinuria
- **WBC**: <5 WBC/hpf (pyuria minimal)
- **Culture**: Sterile (no bacteria)

**Urinalysis (UTI):**
- **WBC**: >5 WBC/hpf (cystitis) or >10 (pyelonephritis)
- **Bacteria**: Present on uncentrifuged specimen
- **Nitrites**: Positive (gram-negative bacteria)
- **Leukocyte esterase**: Positive (from pyuria)

### Laboratory Tests (PSGN)

**Serology:**
- **ASO titer**: Elevated in 80-90% (peak 3-5 weeks post-infection)
- **Anti-DNase B**: Also elevated; more specific for strep

**Renal Function:**
- **Serum creatinine**: Usually normal or mildly elevated (0.7-1.2 mg/dL)
- **BUN**: May be elevated if fluid overload present
- **Electrolytes**: Usually normal; watch for hyperkalemia

**Complement Levels:**
- **C3 levels**: Depressed during acute phase (recovers 6-8 weeks)
- **C4 levels**: Usually normal

### Urine Culture

**Diagnostic threshold:**
- **PSGN**: Sterile culture (no bacteria)
- **UTI**: >10⁵ CFU/mL in midstream clean-catch
- **Catheterized specimen**: >10² CFU/mL positive`,
        mnemonics: [
          {
            text: "PSGN vs UTI - CON vs PUN",
            explanation: "PSGN: Cola hematuria, Old history (1-3 wks), Negative culture. UTI: Pyuria, Urine positive culture, New symptoms"
          },
          {
            text: "RBC Casts Significance - GN",
            explanation: "Glomerular disease indicator, Nephritic syndrome, only in kidney (not bladder infection)"
          }
        ],
        keyPoints: [
          "PSGN: Cola-colored hematuria; RBC casts pathognomonic",
          "PSGN: ASO titer elevated 80-90%; C3 depressed acutely",
          "Cystitis: Dysuria, suprapubic pain; usually afebrile",
          "Pyelonephritis: Fever, flank pain, CVA tenderness; sepsis risk in neonates",
          "Urine culture: Positive in UTI, negative in PSGN",
          "PSGN: Excellent prognosis; >95% recover completely"
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Chapter 8: Nephrology", edition: "9th" },
          { book: "Nelson Textbook of Pediatrics", chapter: "Chapter 518: Glomerulonephritis", edition: "21st" }
        ]
      },
      {
        layer: 4,
        slug: "agn-uti-layer-4-exam",
        title: "AGN & UTI - Exam Prep",
        estimatedMinutes: 20,
        summary: "PSGN: Supportive care (salt/fluid restriction if edema/HTN); monitor BP; most recover without specific therapy. UTI: Antibiotics based on culture; cefixime first-line in India. Follow-up: BP monitoring in PSGN; imaging for VUR in pyelonephritis.",
        contentMd: `# AGN and UTI - Management and Treatment

## Post-Streptococcal GN Management

### Supportive Care (Primary)

**Fluid and Electrolyte Management:**
- **Fluid restriction**: If edema or hypertension present
  - Restrict to insensible losses + urine output
  - Usually 800-1000 mL/day for school-age child
- **Sodium restriction**: 1-2 g/day (help reduce BP)
- **Potassium restriction**: If hyperkalemia or oliguric
- **Monitor**: Daily weights, strict intake/output

**Dietary Management:**
- Normal protein intake (growth requirement)
- Avoid high-sodium foods
- Provide balanced calories

**Activity:**
- Bed rest during acute phase (reduce proteinuria)
- Gradual activity increase as improves
- Usually resolves within 1-2 weeks

### Specific Treatments (Limited)

**Hypertension Management:**
- **Observation first**: Many improve with salt restriction
- **Antihypertensive if**: SBP >160 or signs of hypertensive encephalopathy
- **First-line**:
  - ACE inhibitor: Enalapril 0.1 mg/kg BD
  - Calcium channel blocker: Amlodipine
- **Avoid**: NSAIDs (reduce GFR further); diuretics (unless volume overload)

**Immunosuppression:**
- **Generally NOT used**: PSGN is self-limited
- **Consider if**: Rapidly progressive GN with crescent formation (rare)

### Monitoring and Follow-up

**Follow-up Schedule:**
- **1 week**: Reassess BP, clinical status
- **2-4 weeks**: Repeat urinalysis (should show improvement)
- **3 months**: BP, creatinine, C3 level
- **6 months**: Repeat UA, BP

**Resolution Timeline:**
- **Hematuria**: Resolves within weeks to months (90% by 3 months)
- **Proteinuria**: May persist 6-12 months
- **Hypertension**: Resolves in 50% within 1 week; all within 2-3 weeks

## Urinary Tract Infection Management

### Antibiotics Selection

**Community-Acquired UTI (Cystitis):**
- **First-line (India)**:
  - Cefixime 8 mg/kg/day TDS × 5-7 days
  - TMP-SMX if susceptible
- **Oral agents preferred**: If tolerating well and non-toxic appearing

**Community-Acquired Pyelonephritis:**
- **Parenteral initial** (if vomiting, ill-appearing):
  - Ceftriaxone 50-80 mg/kg/day (IV/IM)
  - Duration: 2-3 days, then switch to oral for total 10-14 days
- **Oral agents** (if child well):
  - Cefixime or oral fluoroquinolone (older children)
  - Total duration: 10-14 days

### Imaging in UTI

**First Episode of Cystitis (Girls):**
- **Current practice**: No routine imaging (low risk of VUR and scarring)

**First Episode of Pyelonephritis:**
- **Renal ultrasound**: Assess for hydronephrosis, scarring, abscess
- **VCUG**: Determine if VUR present
- **DMSA scan**: Assess scarring at 6 months

### Prevention of Recurrence

**Bladder Emptying:**
- Regular voiding schedule (every 2-3 hours during day)
- Complete emptying

**Hydration:**
- Adequate fluid intake (promotes frequent voiding)
- Avoid dehydration

**Antibiotic Prophylaxis** (If VUR or recurrent infections):
- **Low-dose nitrofurantoin**: 1-2 mg/kg/day at bedtime
- **Low-dose TMP-SMX**: If susceptible organism`,
        mnemonics: [
          {
            text: "PSGN Management - SAFE",
            explanation: "Salt restriction, Antihypertensives if needed, Fluids restrict if HTN, Excellent prognosis"
          },
          {
            text: "UTI Antibiotics - CFT",
            explanation: "Cefixime first-line, Focus on culture results, Treatment duration 5-14 days"
          }
        ],
        keyPoints: [
          "PSGN: Supportive care (salt/fluid restriction); no specific therapy needed",
          "Hypertension: Usually resolves within 2-3 weeks with salt restriction",
          "Hematuria: Resolves 90% within 3 months; proteinuria may persist longer",
          "Excellent prognosis: >95% recover completely; permanent damage rare",
          "UTI: Oral antibiotics (cefixime first-line); hospitalize if pyelonephritis/toxic",
          "Imaging: VCUG for pyelonephritis; assess for VUR",
          "Follow imaging: DMSA to assess scarring at 6 months post-pyelonephritis"
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Chapter 8: Nephrology", edition: "9th" },
          { book: "Nelson Textbook of Pediatrics", chapter: "Chapter 518: Glomerulonephritis", edition: "21st" }
        ]
      },
      {
        layer: 5,
        slug: "agn-uti-layer-5-active-recall",
        title: "AGN & UTI - Active Recall",
        estimatedMinutes: 15,
        summary: "Test your knowledge of AGN and UTI pathophysiology, diagnosis, and management with clinical case questions.",
        contentMd: `# Active Recall - AGN and UTI

**Q1: A 7-year-old boy presents with dark urine, periorbital edema, and hypertension 2 weeks after strep throat. What is the diagnosis and what makes it post-streptococcal?**
> Post-streptococcal GN (PSGN). Diagnosis based on timing (1-3 weeks post-pharyngitis), clinical presentation (hematuria, edema, hypertension), and ASO titer elevation. It's post-streptococcal because immune complexes form against Group A strep antigens, deposit in glomeruli, activate complement, causing proliferative GN.

**Q2: Explain why RBC casts are pathognomonic for PSGN but absent in UTI.**
> RBC casts require both hemoglobin and cylindrical protein matrix formation in renal tubules—indicate glomerular bleeding (PSGN pathology). UTI is bladder/urinary tract inflammation; no glomerular involvement, so no RBC casts form. Glomerular disease = RBC casts; urinary tract infection = pyuria, bacteria, no casts.

**Q3: A urine sample shows hematuria, proteinuria, WBC, and bacteria with positive nitrites. Is this PSGN or UTI?**
> UTI. Positive nitrites and bacteria culture are the key differentiators. PSGN: Hematuria + proteinuria but NEGATIVE culture (no bacteria). Presence of bacteria and positive nitrites = bacterial infection (UTI). Culture will confirm organism and guide antibiotics.

**Q4: Why is the C3 level depressed in acute PSGN, and what does recovery of C3 indicate?**
> C3 consumed during complement activation (classical pathway) when immune complexes deposit. Depressed C3 during acute phase (indicator of active disease). C3 recovery over 6-8 weeks indicates resolution of immune complex disease and glomerular inflammation. Persistently low C3 suggests alternative diagnosis (MPGN, lupus).

**Q5: A 3-year-old girl has fever, flank pain, and pyuria. Urine culture grows E. coli. What is your initial management?**
> Pyelonephritis (fever + flank pain = upper UTI). Initial management: Parenteral antibiotic (ceftriaxone 50-80 mg/kg/day IV) if ill-appearing/vomiting; oral if well. Hospitalize if: toxic appearance, sepsis signs, vomiting, age <3 months. Total duration: 10-14 days. Follow with renal ultrasound and VCUG to assess for VUR.

**Q6: Why does cystitis cause dysuria but pyelonephritis causes fever?**
> Cystitis: Local mucosal inflammation (bladder epithelium) → neurogenic pain signals (dysuria) but no systemic inflammation (fever absent). Pyelonephritis: Systemic inflammatory response (TNF-α, IL-1 elevation) → fever; also flank pain from renal inflammation. Same organism (E. coli) but different tissue involved = different symptom pattern.

**Q7: A girl has recurrent UTIs. Why is VCUG imaging important, and what is vesicoureteral reflux?**
> VCUG assesses for vesicoureteral reflux (VUR)—abnormal retrograde flow of urine from bladder back to ureters/kidneys. Risk: Intrarenal reflux damages kidney parenchyma during infection; increases scarring risk. Management depends on grade (I-II: prophylaxis; III-V: prophylaxis ± surgery).

**Q8: What is the expected timeline for hematuria, proteinuria, and hypertension resolution in PSGN?**
> Hematuria: 90% resolve within 3 months. Hypertension: Resolves within 2-3 weeks (50% within 1 week) with salt restriction. Proteinuria: May persist 6-12 months but usually asymptomatic. Overall: Excellent prognosis; >95% return to normal renal function.

**Q9: Explain why penicillin therapy doesn't treat PSGN, and what is the benefit of penicillin in PSGN?**
> Antibiotics don't treat PSGN glomerulonephritis itself (already an immune response). Penicillin eradicates residual streptococcus (completes treatment of preceding infection), prevents transmission to others, but doesn't alter GN course. PSGN resolves with supportive care alone in vast majority.

**Q10: What distinguishes PSGN from IgA nephropathy (IgAN) in a child with hematuria?**
> PSGN: Post-streptococcal (1-3 weeks after pharyngitis), elevated ASO titer, depressed C3 acutely, resolves within weeks-months. IgAN: No preceding infection, persistently normal C3, may have recurrent hematuria episodes, more chronic course. Kidney biopsy shows IgA predominance in IgAN vs C3 predominance in PSGN on immunofluorescence.

**Q11: A 6-month-old infant with fever and irritability has urine culture positive for E. coli. Why is neonatal UTI more dangerous than in older children?**
> Neonates: Immature immunity, lack specific IgA, higher risk of systemic dissemination and sepsis. Presentation atypical (no dysuria, no localized symptoms). Risk: Bacteremia, septic shock, renal scarring. Diagnosis often delayed (attributed to other causes). Requires hospitalization, parenteral antibiotics, aggressive management.

**Q12: Describe the mechanism of renal scarring in pyelonephritis and how VUR increases this risk.**
> Acute pyelonephritis: Interstitial inflammation (neutrophils, TNF-α, IL-1 elevation), bacterial invasion. Chronic: Fibrosis and scar formation. VUR increases risk because: Intrarenal reflux (high-pressure reflux) forces infected urine directly into kidney parenchyma, increasing parenchymal contact and inflammation. Scarring prevention: Early antibiotic treatment, VUR grading, prophylaxis for high-grade reflux.`,
        mnemonics: [
          {
            text: "PSGN vs UTI Differentiation - CRAB",
            explanation: "Culture (sterile=PSGN, positive=UTI), Rash/systemic (post-strep=PSGN), ASO titer (elevated=PSGN), Bacteria (absent=PSGN, present=UTI)"
          },
          {
            text: "Child UTI Management - CAFE",
            explanation: "Culture-directed therapy, Antibiotics (cefixime first-line), Fluids (hydration), Evaluate for VUR (especially pyelonephritis)"
          }
        ],
        keyPoints: [
          "PSGN: Type III hypersensitivity; complement-mediated; self-limited",
          "RBC casts: Pathognomonic for PSGN; absent in UTI",
          "C3 depression: Indicator of active PSGN; recovery indicates resolution",
          "Management: Supportive care; antihypertensives if BP >160",
          "Prognosis: Excellent; >95% recover completely",
          "UTI: Culture-directed antibiotics; differentiate cystitis from pyelonephritis",
          "VUR screening: Important in pyelonephritis to prevent scarring"
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Chapter 8: Nephrology", edition: "9th" },
          { book: "Nelson Textbook of Pediatrics", chapter: "Chapter 518: Glomerulonephritis", edition: "21st" }
        ]
      }
    ]
  }
];
