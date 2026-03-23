import type { TopicLessons } from "./content-loader";

export const surgeryPart10Lessons: TopicLessons[] = [
  {
    topicCode: "SU-MOD-08-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "renal-calculi-layer-1-foundation",
        title: "Renal Calculi - Foundation",
        estimatedMinutes: 22,
        summary: "Types of renal stones, composition, risk factors, and clinical presentation of urolithiasis.",
        contentMd: `# Renal Calculi - Foundation

## Epidemiology
- Prevalence: 5-15% worldwide; very common in India (stone belt: Rajasthan, Gujarat, Maharashtra, Punjab)
- Male:Female = 3:1; peak age 30-50 years
- Recurrence rate: 50% within 5-10 years without prevention
- Most common site of impaction: Pelviureteric junction (PUJ), pelvic brim, vesicoureteric junction (VUJ)

## Types of Renal Stones
### Calcium Stones (75-80%)
- **Calcium oxalate** (most common overall): Envelope-shaped crystals; hard, dark, irregular
- **Calcium phosphate**: Smooth, white; forms in alkaline urine
- Causes: Hypercalciuria (most common), hyperparathyroidism, RTA type 1, hypocitraturia

### Struvite (Magnesium Ammonium Phosphate) Stones (10-15%)
- "Infection stones" or "triple phosphate"
- Caused by urease-producing organisms: Proteus, Klebsiella, Pseudomonas
- Form staghorn calculi (fill renal pelvis and calyces)
- Alkaline urine (pH >7); coffin-lid shaped crystals

### Uric Acid Stones (5-10%)
- Radiolucent (not visible on X-ray KUB; seen on CT)
- Form in acidic urine (pH <5.5)
- Associated with gout, myeloproliferative disorders, chronic diarrhea
- Can be dissolved with alkalinization (potassium citrate)

### Cystine Stones (1-2%)
- Autosomal recessive disorder of amino acid transport (cystinuria)
- Hexagonal crystals; positive cyanide-nitroprusside test
- Recurrent from childhood; may form staghorn calculi
- Radiopaque (ground-glass appearance)

## Risk Factors
- Dehydration (most important modifiable factor)
- Diet: High oxalate (spinach, chocolate), high sodium, high animal protein
- Family history, obesity, diabetes
- Metabolic: Hyperparathyroidism, RTA, medullary sponge kidney
- Anatomical: PUJ obstruction, horseshoe kidney, medullary sponge kidney

## Clinical Presentation
### Renal Colic
- Sudden onset severe colicky flank pain radiating to groin/testis/labia
- Patient writhes in agony (cannot find comfortable position)
- Nausea and vomiting common
- Hematuria (microscopic or gross) in 85%

### By Stone Location
- **Renal pelvis**: Dull flank pain; may be asymptomatic
- **Upper ureter**: Flank pain radiating to abdomen
- **Mid ureter**: Pain radiating to inguinal region
- **Lower ureter (VUJ)**: Urgency, frequency, dysuria (mimics UTI)`,
        mnemonics: [
          { text: "Stone Types by frequency: Calcium > Struvite > Uric acid > Cystine", explanation: "80% > 10-15% > 5-10% > 1-2%; calcium oxalate is most common single type" },
          { text: "Struvite = Staghorn = Infection = Proteus = Alkaline urine", explanation: "Infection stones from urease-producing bacteria creating alkaline environment" },
        ],
        keyPoints: [
          "Calcium oxalate: most common stone type (75-80%); radiopaque",
          "Struvite: infection stones (urease producers); form staghorn calculi; alkaline urine",
          "Uric acid stones: radiolucent on X-ray; form in acidic urine; can be dissolved",
          "India is in the 'stone belt'; dehydration is the most important modifiable risk factor",
          "Renal colic: severe colicky flank pain radiating to groin; hematuria in 85%",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 31: Urinary Calculi", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 76: The Kidney and Ureter", edition: "28th" },
        ],
      },
      {
        layer: 2,
        slug: "renal-calculi-layer-2-mechanism",
        title: "Renal Calculi - Mechanism",
        estimatedMinutes: 22,
        summary: "Pathogenesis of stone formation, supersaturation theory, and metabolic evaluation.",
        contentMd: `# Renal Calculi - Mechanism

## Stone Formation Theory
### Supersaturation
- Urine becomes supersaturated with stone-forming salts
- Exceeds the metastable limit → spontaneous crystallization
- Factors: Low urine volume, high solute excretion, low inhibitors

### Nucleation
- **Homogeneous**: Crystals form de novo in pure supersaturated solution (rare)
- **Heterogeneous**: Crystals form on pre-existing surfaces (cell debris, other crystals, Randall plaques)
- Randall plaques: Calcium phosphate deposits in renal papillae; serve as nidus for calcium oxalate

### Crystal Growth and Aggregation
- Nucleated crystals grow by adding more ions
- Crystal aggregation forms larger particles that cannot pass through collecting system
- Retention in kidney = stone formation

## Inhibitors of Stone Formation
- **Citrate**: Most important inhibitor; binds calcium, reduces supersaturation
- **Magnesium**: Binds oxalate, reduces calcium oxalate formation
- **Pyrophosphate**: Inhibits crystal growth
- **Nephrocalcin, uropontin, Tamm-Horsfall protein**: Glycoprotein inhibitors
- Hypocitraturia is the most common metabolic abnormality in stone formers

## Metabolic Abnormalities
### Hypercalciuria (Most Common Cause of Calcium Stones)
- **Absorptive** (Type I): Increased intestinal calcium absorption; normal serum calcium
- **Resorptive**: Primary hyperparathyroidism; elevated serum calcium + PTH
- **Renal leak**: Defective renal tubular reabsorption of calcium

### Hyperoxaluria
- **Primary**: Genetic enzyme deficiency (rare, severe)
- **Enteric**: Crohn disease, short bowel syndrome (fat malabsorption → increased oxalate absorption)
- **Dietary**: Excess oxalate intake (spinach, rhubarb, chocolate, tea)

### Hyperuricosuria
- Gout, myeloproliferative disorders, high purine diet
- Uric acid acts as nidus for calcium oxalate stones too

### Cystinuria
- Autosomal recessive; defective renal tubular reabsorption of cystine, ornithine, lysine, arginine (COLA)
- Cystine is poorly soluble; precipitates in acidic urine

## Obstructive Complications
- Stone causes ureteric obstruction → hydronephrosis → back-pressure on kidney
- Prolonged obstruction → renal parenchymal damage → loss of function
- Complete obstruction: Renal damage begins within 24 hours; irreversible after 6 weeks
- Infected hydronephrosis (pyonephrosis): Surgical emergency requiring drainage`,
        mnemonics: [
          { text: "Citrate = Chief inhibitor; Hypocitraturia = Most common metabolic defect", explanation: "Citrate binds calcium, preventing stone formation; low citrate is most treatable cause" },
          { text: "COLA = Cystine, Ornithine, Lysine, Arginine", explanation: "Amino acids with defective tubular reabsorption in cystinuria" },
        ],
        keyPoints: [
          "Stone formation: supersaturation → nucleation → crystal growth → aggregation",
          "Citrate is the most important inhibitor; hypocitraturia is most common metabolic defect",
          "Hypercalciuria: most common cause of calcium stones; check PTH if serum calcium elevated",
          "Cystinuria: autosomal recessive, COLA amino acids, hexagonal crystals",
          "Complete ureteric obstruction: kidney damage begins in 24 hours; irreversible after 6 weeks",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 31", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 76", edition: "28th" },
        ],
      },
      {
        layer: 3,
        slug: "renal-calculi-layer-3-clinical",
        title: "Renal Calculi - Clinical",
        estimatedMinutes: 25,
        summary: "Diagnostic workup, NCCT, treatment by stone size and location, and surgical options.",
        contentMd: `# Renal Calculi - Clinical Management

## Investigations
### Non-Contrast CT KUB (Gold Standard)
- Sensitivity >95%, specificity >98% for all stone types (including uric acid)
- Identifies stone size, location, number, and hydronephrosis
- First-line imaging in acute renal colic

### X-ray KUB
- Shows radiopaque stones (calcium, struvite, cystine)
- Misses uric acid stones (radiolucent) and small stones
- Useful for follow-up of known radiopaque stones

### Ultrasound
- First-line in pregnancy and children (no radiation)
- Good for hydronephrosis and renal stones; poor for ureteric stones
- Sensitivity 45% for ureteric stones vs >95% for CT

### Urine Analysis
- Microscopic hematuria (85%), pyuria if infection
- Urine culture (rule out UTI)
- 24-hour urine collection: Calcium, oxalate, uric acid, citrate, creatinine, volume (metabolic workup)

### Blood Tests
- Serum calcium, phosphate, PTH (hyperparathyroidism screen)
- Serum uric acid, creatinine (renal function)

## Management by Stone Size
### Conservative (Medical Expulsive Therapy)
- Stones <5 mm: 90% pass spontaneously
- Stones 5-10 mm: 50% pass; trial of MET for 4-6 weeks
- **Tamsulosin** (alpha-blocker): Relaxes ureteric smooth muscle; increases passage rate
- Adequate hydration (>2.5 L/day), NSAIDs for pain (diclofenac first-line)

### Interventional
- Stones >10 mm or failed MET or complicated (infection, obstruction, single kidney)

## Surgical Options
### ESWL (Extracorporeal Shock Wave Lithotripsy)
- Non-invasive; shock waves fragment stones
- Best for: Renal stones <2 cm, upper ureteric stones <1 cm
- Contraindicated: Pregnancy, coagulopathy, aortic aneurysm, obstruction distal to stone
- Stone-free rate: 70-90% for stones <1 cm

### URS (Ureteroscopy) with Laser Lithotripsy
- Semi-rigid or flexible ureteroscope with Holmium laser
- Best for: Ureteric stones (all sizes), lower pole renal stones
- Stone-free rate: >90% for ureteric stones
- Day-case procedure; stent placement may be needed

### PCNL (Percutaneous Nephrolithotomy)
- For large renal stones (>2 cm), staghorn calculi
- Percutaneous tract into renal collecting system → nephroscope → fragmentation + extraction
- Stone-free rate: >90% for large stones
- Requires hospitalization; bleeding risk

### Open Surgery (Rarely Needed)
- <1% of cases; complex anatomy, failed endoscopic approaches, very large staghorn

## Emergency Management
### Acute Renal Colic
- Analgesia: IV/IM diclofenac (first-line NSAID) or IV paracetamol; opioids if refractory
- Antiemetics: Ondansetron
- CT KUB for diagnosis

### Infected Obstructed Kidney (Pyonephrosis)
- Surgical emergency: Fever + obstruction + infection
- Urgent decompression: DJ stent or percutaneous nephrostomy
- IV antibiotics (ceftriaxone + gentamicin)
- Definitive stone treatment AFTER infection resolves`,
        mnemonics: [
          { text: "Stone <5mm = 90% pass; 5-10mm = MET trial; >10mm = Intervene", explanation: "Size-based management algorithm for ureteric stones" },
          { text: "ESWL <2cm renal; URS for ureter; PCNL >2cm renal", explanation: "Choosing the right procedure based on stone size and location" },
        ],
        keyPoints: [
          "NCCT KUB is gold standard (>95% sensitivity); detects all stone types including uric acid",
          "Stones <5 mm: 90% spontaneous passage; Tamsulosin aids expulsion",
          "ESWL for renal stones <2 cm; URS for ureteric stones; PCNL for stones >2 cm or staghorn",
          "Infected obstructed kidney (pyonephrosis): emergency drainage (DJ stent or nephrostomy)",
          "Diclofenac is first-line analgesic for renal colic (NSAID preferred over opioids)",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 31", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 76", edition: "28th" },
        ],
      },
      {
        layer: 4,
        slug: "renal-calculi-layer-4-exam",
        title: "Renal Calculi - Exam Prep",
        estimatedMinutes: 18,
        summary: "High-yield exam facts on urolithiasis for NEXT pattern questions.",
        contentMd: `# Renal Calculi - Exam Prep

## Must-Know Facts
- Most common stone: Calcium oxalate (envelope-shaped crystals)
- Most common metabolic abnormality: Hypocitraturia
- Only radiolucent stone: Uric acid (all others radiopaque on X-ray)
- Staghorn calculus: Struvite (infection stone); urease producers (Proteus)
- Hexagonal crystals: Cystine; positive cyanide-nitroprusside test
- Investigation of choice: Non-contrast CT KUB

## Common Exam Traps
- "Radiolucent stone on X-ray, seen on CT" = Uric acid stone
- "Staghorn calculus + alkaline urine + UTI" = Struvite (infection stone)
- "Recurrent stones from childhood + hexagonal crystals" = Cystine stones (cystinuria)
- "Hypercalcemia + renal stones" = Primary hyperparathyroidism (check PTH)
- "Stone in pregnancy" = USG first (no radiation); definitive treatment after delivery
- "Fever + obstructed kidney + stone" = Pyonephrosis; emergency drainage

## Stone Radiopacity (Most to Least)
1. Calcium phosphate (most opaque)
2. Calcium oxalate
3. Struvite (magnesium ammonium phosphate)
4. Cystine (ground-glass)
5. Uric acid (RADIOLUCENT - not seen on X-ray)

## Treatment Selection
| Stone | Size/Location | Treatment |
|-------|--------------|-----------|
| Ureteric <5 mm | Any | MET (Tamsulosin + hydration) |
| Ureteric 5-10 mm | Any | MET trial 4-6 weeks → URS if failed |
| Ureteric >10 mm | Any | URS with laser |
| Renal <2 cm | Not lower pole | ESWL |
| Renal <2 cm | Lower pole | URS (flexible) or ESWL |
| Renal >2 cm | Any | PCNL |
| Staghorn | Any | PCNL (may need multiple sessions) |

## High-Yield Questions
- First-line analgesic for renal colic = Diclofenac (NSAID)
- Drug for MET = Tamsulosin (alpha-blocker)
- Dissolve uric acid stones with = Potassium citrate (alkalinize urine)
- Prevention of calcium stones = High fluid intake + potassium citrate + low sodium diet`,
        mnemonics: [
          { text: "Uric Acid = Unseen (radiolucent) = acidic Urine = dissolves with Alkalinization", explanation: "Three key facts about uric acid stones for exams" },
          { text: "ESWL = External, Small (<2cm), Wave, Litho", explanation: "ESWL for renal stones under 2 cm" },
        ],
        keyPoints: [
          "Calcium oxalate: most common; envelope crystals; uric acid: only radiolucent stone",
          "Struvite: infection stone, staghorn, Proteus, alkaline urine, coffin-lid crystals",
          "NCCT KUB: gold standard investigation; diclofenac: first-line analgesic",
          "Treatment: MET <5mm, URS for ureter, ESWL <2cm renal, PCNL >2cm renal",
          "Pyonephrosis (infected obstructed kidney) = emergency drainage",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 31", edition: "6th" },
        ],
      },
      {
        layer: 5,
        slug: "renal-calculi-layer-5-active-recall",
        title: "Renal Calculi - Active Recall",
        estimatedMinutes: 15,
        summary: "Flashcard Q&A for spaced repetition on urolithiasis.",
        contentMd: `# Active Recall - Renal Calculi

**Q1:** What is the most common type of renal stone?
**A1:** Calcium oxalate (75-80% of all stones). Envelope-shaped crystals on urine microscopy. Radiopaque on X-ray.

**Q2:** Which stone is radiolucent on X-ray?
**A2:** Uric acid stone. Not visible on X-ray KUB but clearly seen on NCCT. Forms in acidic urine (pH <5.5). Can be dissolved with alkalinization.

**Q3:** What causes staghorn calculi?
**A3:** Struvite (magnesium ammonium phosphate) stones. Caused by urease-producing organisms (Proteus, Klebsiella). Alkaline urine. Fill the renal pelvis and calyces.

**Q4:** What is the gold standard investigation for renal colic?
**A4:** Non-contrast CT KUB. Sensitivity >95%, specificity >98%. Detects all stone types including radiolucent uric acid stones.

**Q5:** At what size do ureteric stones usually pass spontaneously?
**A5:** <5 mm: 90% pass spontaneously. 5-10 mm: 50% pass with MET (Tamsulosin). >10 mm: Usually need intervention (URS).

**Q6:** What is the first-line analgesic for renal colic?
**A6:** Diclofenac (NSAID). More effective than opioids for renal colic and reduces ureteric spasm. IV/IM route preferred.

**Q7:** When do you use ESWL vs URS vs PCNL?
**A7:** ESWL: Renal stones <2 cm (not lower pole). URS: Ureteric stones of any size, lower pole renal. PCNL: Renal stones >2 cm, staghorn calculi.

**Q8:** What is the most common metabolic abnormality in stone formers?
**A8:** Hypocitraturia. Citrate is the most important inhibitor of stone formation; binds calcium. Treatment: Potassium citrate supplementation.

**Q9:** What is pyonephrosis and how is it managed?
**A9:** Infected obstructed kidney. Surgical emergency. Urgent decompression with DJ stent or percutaneous nephrostomy + IV antibiotics. Stone treatment after infection resolves.

**Q10:** What is cystinuria?
**A10:** Autosomal recessive disorder. Defective tubular reabsorption of COLA (Cystine, Ornithine, Lysine, Arginine). Hexagonal crystals. Positive cyanide-nitroprusside test. Recurrent from childhood.

**Q11:** How do you prevent stone recurrence?
**A11:** High fluid intake (>2.5 L/day) is most important. Potassium citrate for calcium stones. Low sodium, moderate calcium diet. Specific treatment based on metabolic workup.

**Q12:** What are the three common sites of ureteric stone impaction?
**A12:** PUJ (pelviureteric junction), pelvic brim (where ureter crosses iliac vessels), and VUJ (vesicoureteric junction, most narrow point).`,
        mnemonics: [
          { text: "PUJ → Brim → VUJ: Three narrow points where stones impact", explanation: "Pelviureteric junction, pelvic brim (iliac vessels), vesicoureteric junction" },
          { text: "Cystine = COLA + Hexagonal + Childhood + Cyanide-nitroprusside positive", explanation: "Complete cystine stone identification for exams" },
        ],
        keyPoints: [
          "Calcium oxalate most common; uric acid radiolucent; struvite = staghorn + infection",
          "NCCT gold standard; diclofenac first-line; tamsulosin for MET",
          "Size guides treatment: <5mm observe, URS for ureter, ESWL <2cm, PCNL >2cm",
          "Hypocitraturia: most common metabolic defect; potassium citrate for prevention",
          "Pyonephrosis = emergency; three impaction sites: PUJ, brim, VUJ",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 31", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 76", edition: "28th" },
        ],
      },
    ],
  },
];
