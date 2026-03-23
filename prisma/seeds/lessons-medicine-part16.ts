import type { TopicLessons } from "./content-loader";

export const medicineLessonsPart16: TopicLessons[] = [
  {
    topicCode: "IM-MOD-08-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "gout-layer-1-foundation",
        title: "Gout & Pseudogout - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of crystal arthropathies including uric acid metabolism, purine pathway, classification of hyperuricemia, and basic understanding of gout and CPPD disease.",
        contentMd: `# Gout & Pseudogout - Foundation

## Uric Acid Metabolism
- Uric acid is the end product of purine metabolism in humans
- Humans lack **uricase** enzyme (present in other mammals) → cannot convert uric acid to allantoin
- Normal serum uric acid: Males 3.5-7.0 mg/dL, Females 2.5-6.0 mg/dL
- Hyperuricemia defined as >7.0 mg/dL (supersaturation point for monosodium urate)

## Purine Pathway
- **De novo synthesis**: PRPP + Glutamine → IMP → AMP/GMP → Hypoxanthine → Xanthine → Uric Acid
- **Salvage pathway**: HGPRT enzyme recycles hypoxanthine/guanine back to nucleotides
- **Xanthine oxidase**: Final enzyme converting xanthine to uric acid (target of allopurinol)
- 2/3 of uric acid excreted by kidneys, 1/3 by gut

## Classification of Hyperuricemia

### Overproduction (10%)
- Primary: HGPRT deficiency (Lesch-Nyhan syndrome), PRPP synthetase overactivity
- Secondary: Myeloproliferative disorders, tumor lysis syndrome, psoriasis, hemolytic anemias
- High purine diet: red meat, organ meats, seafood, beer

### Underexcretion (90%)
- Primary: Idiopathic renal urate underexcretion
- Secondary: CKD, dehydration, diuretics (thiazides, loop), low-dose aspirin, cyclosporine
- Metabolic syndrome: insulin resistance reduces renal urate excretion

## Gout Overview
- **Definition**: Inflammatory arthritis caused by deposition of monosodium urate (MSU) crystals
- Prevalence in India: ~0.12-0.3% (lower than Western countries but rising)
- Male:Female = 4:1 (females protected by estrogen-mediated uricosuria until menopause)
- Peak incidence: males 40-60 years, females post-menopausal

## Pseudogout (CPPD Disease) Overview
- Caused by calcium pyrophosphate dihydrate (CPPD) crystal deposition
- Usually affects elderly (>60 years), equal sex distribution
- Most commonly affects knee (vs gout = 1st MTP)
- Associated with metabolic diseases: hyperparathyroidism, hemochromatosis, hypothyroidism, hypomagnesemia

## Crystal Comparison

| Feature | Gout (MSU) | Pseudogout (CPPD) |
|---------|------------|-------------------|
| Crystal shape | Needle-shaped | Rhomboid/rod-shaped |
| Birefringence | Strong negative | Weak positive |
| Joint | 1st MTP (podagra) | Knee most common |
| Age | 40-60 years | >60 years |
| Gender | Male predominant | Equal |
| X-ray | Erosions, tophi | Chondrocalcinosis |`,
        mnemonics: [
          { text: "Gout crystals: Negative Needles (N-N)", explanation: "MSU crystals are Needle-shaped with strong Negative birefringence under polarized light" },
          { text: "CPPD = Positive Pseudogout: Positively birefringent, Pseudogout", explanation: "CPPD crystals show weak Positive birefringence, distinguishing from gout" },
          { text: "Uric acid excretion: 2/3 Kidney, 1/3 Gut (2K-1G)", explanation: "Two-thirds renal excretion, one-third intestinal elimination of uric acid" }
        ],
        keyPoints: [
          "Hyperuricemia is defined as serum uric acid >7.0 mg/dL (supersaturation point)",
          "90% of hyperuricemia is due to underexcretion, only 10% from overproduction",
          "Gout: needle-shaped MSU crystals with strong negative birefringence",
          "Pseudogout: rhomboid CPPD crystals with weak positive birefringence",
          "Xanthine oxidase converts xanthine to uric acid (target of allopurinol/febuxostat)",
          "Gout prevalence rising in India due to dietary changes and metabolic syndrome"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "365: Gout and Other Crystal-Associated Arthropathies", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "Rheumatology: Crystal Arthropathies", edition: "11th" },
          { book: "Davidson's Principles and Practice of Medicine", chapter: "25: Musculoskeletal Disease", edition: "24th" }
        ]
      },
      {
        layer: 2,
        slug: "gout-layer-2-mechanism",
        title: "Gout & Pseudogout - Mechanism",
        estimatedMinutes: 30,
        summary: "Detailed pathophysiology of MSU crystal formation and inflammatory response, NLRP3 inflammasome activation, stages of gout, and CPPD crystal deposition mechanisms.",
        contentMd: `# Gout & Pseudogout - Mechanism

## MSU Crystal Formation
- At serum urate >7 mg/dL, supersaturation occurs
- Crystal nucleation favored by: low temperature (peripheral joints), low pH, dehydration
- First MTP affected first due to: lowest temperature, mechanical stress, lower pH
- NOT all hyperuricemic patients develop gout (~5% develop clinical gout)

## NLRP3 Inflammasome Pathway (Key Mechanism)
1. MSU crystals phagocytosed by resident macrophages
2. Crystals destabilize lysosomal membranes → lysosomal rupture
3. Released cathepsins activate **NLRP3 inflammasome**
4. NLRP3 + ASC + Caspase-1 → active Caspase-1
5. Active Caspase-1 cleaves pro-IL-1beta → **active IL-1beta**
6. IL-1beta is the master cytokine driving gouty inflammation
7. Neutrophil recruitment → massive inflammatory response
8. Self-limiting: NETs (Neutrophil Extracellular Traps) aggregate and degrade crystals

## Stages of Gout

### Stage 1: Asymptomatic Hyperuricemia
- Elevated serum urate without clinical manifestations
- Crystal deposition may already be occurring silently
- Duration: years to decades before first attack

### Stage 2: Acute Gouty Arthritis
- Sudden onset monoarthritis, exquisitely painful
- Triggered by: alcohol, dehydration, surgery, trauma, purine-rich food
- Self-limiting (3-10 days) even without treatment
- Resolution involves anti-inflammatory switch: TGF-beta, IL-10

### Stage 3: Intercritical Period
- Asymptomatic intervals between attacks
- Crystal deposition continues silently
- Intercritical periods shorten over time without treatment

### Stage 4: Chronic Tophaceous Gout
- Tophi: aggregates of MSU crystals + granulomatous tissue
- Locations: ear helix, olecranon, Achilles tendon, fingers
- Chronic destructive arthropathy
- Renal complications: urate nephropathy, uric acid nephrolithiasis

## CPPD Crystal Deposition Mechanism
- CPPD crystals form in articular cartilage (chondrocalcinosis)
- **Inorganic pyrophosphate (PPi)** excess from:
  - Increased production: overactivity of nucleotide pyrophosphohydrolase (NTPPH)
  - Decreased clearance: reduced alkaline phosphatase activity
- Crystal shedding from cartilage into joint space triggers acute inflammation
- Same NLRP3 inflammasome pathway as gout
- Associated conditions alter PPi metabolism:
  - Hyperparathyroidism (calcium promotes crystallization)
  - Hemochromatosis (iron inhibits pyrophosphatase)
  - Hypothyroidism, hypomagnesemia

## Renal Effects of Hyperuricemia
- **Uric acid nephrolithiasis**: uric acid stones (radiolucent on X-ray)
- **Acute urate nephropathy**: crystal precipitation in tubules (tumor lysis syndrome)
- **Chronic urate nephropathy**: interstitial crystal deposition → CKD
- Uric acid stone risk factors: low urine pH (<5.5), low urine volume, hyperuricosuria`,
        mnemonics: [
          { text: "NLRP3 pathway: Crystals → Lysosomes → NLRP3 → Caspase-1 → IL-1beta", explanation: "Sequential activation of the inflammasome pathway in crystal arthropathies" },
          { text: "Gout stages = AAIC: Asymptomatic, Acute attack, Intercritical, Chronic tophaceous", explanation: "Four clinical stages of gout progression" },
          { text: "CPPD associations = 4 Hs: Hyperparathyroidism, Hemochromatosis, Hypothyroidism, Hypomagnesemia", explanation: "Four metabolic conditions associated with CPPD disease" }
        ],
        keyPoints: [
          "IL-1beta released via NLRP3 inflammasome is the master cytokine in gouty inflammation",
          "Only ~5% of hyperuricemic individuals develop clinical gout",
          "Gout attacks are self-limiting due to anti-inflammatory switch (TGF-beta, NETs)",
          "CPPD disease is associated with hyperparathyroidism, hemochromatosis, hypothyroidism, hypomagnesemia",
          "Uric acid stones are radiolucent on X-ray (unlike calcium stones)",
          "First MTP joint affected first due to low temperature, mechanical stress, and low pH"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "365: Gout and Other Crystal-Associated Arthropathies", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "Rheumatology: Crystal Arthropathies", edition: "11th" },
          { book: "Davidson's Principles and Practice of Medicine", chapter: "25: Musculoskeletal Disease", edition: "24th" }
        ]
      },
      {
        layer: 3,
        slug: "gout-layer-3-clinical",
        title: "Gout & Pseudogout - Clinical Application",
        estimatedMinutes: 25,
        summary: "Clinical presentation, diagnostic approach including synovial fluid analysis, imaging findings, and management protocols for acute gout, chronic gout, and CPPD disease.",
        contentMd: `# Gout & Pseudogout - Clinical Application

## Acute Gout - Clinical Features
- **Podagra**: Acute 1st MTP arthritis (most common presentation, ~50% of first attacks)
- Rapid onset (peaks within 12-24 hours), exquisitely tender
- Erythema, swelling, warmth — can mimic cellulitis or septic arthritis
- Fever, leukocytosis may be present (confusing with infection)
- Triggers: alcohol (beer > spirits > wine), dehydration, red meat, surgery, diuretics
- Untreated attack resolves in 7-10 days with desquamation of overlying skin

## Chronic Tophaceous Gout
- Tophi: firm, white/yellowish nodules of MSU crystals
- Sites: ear helix, olecranon bursa, finger pulps, Achilles tendon, prepatellar bursa
- Chronic polyarthritis mimicking rheumatoid arthritis
- Joint destruction, deformity if untreated

## Pseudogout (Acute CPP Crystal Arthritis)
- Acute monoarthritis, commonly **knee** (>50%)
- Also wrist, ankle, shoulder
- Similar to gout but less explosive onset
- Often post-surgical or post-illness trigger
- Self-limiting in 1-3 weeks

## Diagnosis

### Synovial Fluid Analysis (Gold Standard for Both)
| Finding | Gout | Pseudogout | Septic |
|---------|------|------------|--------|
| Appearance | Turbid, yellow | Turbid, yellow | Purulent |
| WBC count | 10,000-50,000 | 10,000-50,000 | >50,000 |
| Crystals | MSU: needle, neg birefringent | CPPD: rhomboid, pos birefringent | None |
| Gram stain | Negative | Negative | Positive |
| Culture | Negative | Negative | Positive |

### Imaging
- **X-ray (Gout)**: Rat-bite erosions with overhanging edges, preserved joint space (early), tophi as soft tissue nodules
- **X-ray (CPPD)**: Chondrocalcinosis (calcification of articular cartilage), especially knee menisci, wrist triangular fibrocartilage
- **Dual-energy CT (DECT)**: Can identify urate crystal deposits (green color coding), useful for atypical presentations
- **Ultrasound**: Double contour sign (MSU on cartilage surface) in gout

## Management

### Acute Gout Attack
- **NSAIDs**: Indomethacin 50 mg TDS or naproxen 500 mg BD (first-line if no contraindications)
- **Colchicine**: 0.5 mg TDS (within 12 hours of onset for best effect). Low-dose regimen: 1.2 mg then 0.6 mg 1 hour later
- **Corticosteroids**: Prednisolone 30-35 mg/day x 5 days (if NSAIDs/colchicine contraindicated)
- **Joint aspiration + intra-articular steroid**: For large joint monoarthritis
- **Do NOT start/stop/change urate-lowering therapy during acute attack**

### Urate-Lowering Therapy (Long-term)
- **Indications**: 2+ attacks/year, tophi, urate nephropathy, uric acid stones
- **Allopurinol**: Xanthine oxidase inhibitor, start low (100 mg/day), titrate to target urate <6 mg/dL
- **Febuxostat**: Non-purine xanthine oxidase inhibitor, if allopurinol intolerant
- **Probenecid**: Uricosuric (increases renal urate excretion), if underexcretor, normal renal function, no stones
- **Prophylaxis during initiation**: Colchicine 0.5 mg BD for 3-6 months (prevents mobilization flares)

### Pseudogout Management
- NSAIDs or colchicine for acute attacks
- Joint aspiration + intra-articular steroid
- No equivalent of urate-lowering therapy — treat underlying metabolic disorder
- Low-dose colchicine for prophylaxis in recurrent attacks

## Indian Context
- Rising gout prevalence due to urbanization, dietary changes, metabolic syndrome
- Allopurinol hypersensitivity syndrome (AHS): potentially fatal, associated with HLA-B*5801 (higher in certain populations) — consider testing before starting
- Colchicine widely available and affordable in India
- Traditional remedies (turmeric, cherry extract) lack strong evidence`,
        mnemonics: [
          { text: "Gout treatment acute = NCC: NSAIDs, Colchicine, Corticosteroids", explanation: "Three options for acute gout attack management in order of preference" },
          { text: "Do NOT START or STOP ULT during acute attack", explanation: "Changing urate-lowering therapy during acute gout can worsen or prolong the attack" },
          { text: "Allopurinol: Start Low Go Slow (100mg, titrate to urate <6)", explanation: "Low starting dose prevents mobilization flares, target serum urate below 6 mg/dL" }
        ],
        keyPoints: [
          "Synovial fluid crystal analysis under polarized microscopy is the gold standard for diagnosis",
          "Gout: MSU crystals are needle-shaped with strong negative birefringence",
          "Never start or change urate-lowering therapy during an acute gout attack",
          "Allopurinol must be started at low dose (100 mg) with colchicine prophylaxis",
          "Chondrocalcinosis on X-ray is the hallmark radiological finding of CPPD disease",
          "Target serum urate <6 mg/dL (or <5 mg/dL if tophi present) for chronic management"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "365: Gout and Other Crystal-Associated Arthropathies", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "Rheumatology: Crystal Arthropathies", edition: "11th" },
          { book: "Davidson's Principles and Practice of Medicine", chapter: "25: Musculoskeletal Disease", edition: "24th" }
        ]
      },
      {
        layer: 4,
        slug: "gout-layer-4-exam",
        title: "Gout & Pseudogout - Exam Preparation",
        estimatedMinutes: 20,
        summary: "High-yield NEXT exam topics for crystal arthropathies including crystal identification, drug mechanisms, clinical vignettes, and differential diagnosis patterns.",
        contentMd: `# Gout & Pseudogout - Exam Preparation

## Crystal Identification (Most Asked Topic)

| Property | MSU (Gout) | CPPD (Pseudogout) |
|----------|-----------|-------------------|
| Shape | Needle | Rhomboid/rectangular |
| Birefringence | Strong negative | Weak positive |
| Color parallel to axis | Yellow | Blue |
| Color perpendicular | Blue | Yellow |
| Mnemonic | Yellow Parallel = Negative = Gout | Blue Parallel = Positive = Pseudogout |

**Remember**: "Yellow is Negative for Gout" — when crystal is parallel to compensator axis, yellow color = negative birefringence = MSU = Gout.

## Drug Mechanisms (High-Yield)

| Drug | Mechanism | Key Points |
|------|-----------|------------|
| Allopurinol | Xanthine oxidase inhibitor (purine analog) | Start 100mg, titrate to urate <6, risk of AHS |
| Febuxostat | Xanthine oxidase inhibitor (non-purine) | Alternative if allopurinol-intolerant |
| Colchicine | Tubulin polymerization inhibitor → impairs neutrophil migration | Low therapeutic index, GI side effects |
| Probenecid | Blocks URAT1 → increases renal urate excretion | Contraindicated if stones or CKD |
| Rasburicase | Recombinant uricase → converts urate to allantoin | Used in tumor lysis syndrome only |
| Pegloticase | PEGylated uricase | Refractory tophaceous gout |

## Clinical Vignettes

### Vignette 1: Classic Gout
"45-year-old man presents with sudden severe pain, redness, and swelling of the right great toe after a party. What is the most likely diagnosis?"
→ **Acute gouty arthritis (podagra)**. Confirm with synovial fluid showing MSU crystals.

### Vignette 2: Crystal Under Microscope
"Synovial fluid shows needle-shaped crystals that appear yellow when parallel to the compensator axis. What are these crystals?"
→ **Monosodium urate (MSU)** — yellow parallel = negative birefringence = gout.

### Vignette 3: Drug Choice
"Patient with acute gout and peptic ulcer disease. NSAIDs are contraindicated. What is the next best acute treatment?"
→ **Colchicine** (within 12-24 hours of onset) or **oral corticosteroids** if colchicine also contraindicated.

### Vignette 4: Pseudogout
"70-year-old woman with acute knee swelling. X-ray shows calcification of menisci. Synovial fluid shows rhomboid crystals with weak positive birefringence."
→ **Pseudogout (CPPD arthritis)**. Check for hyperparathyroidism, hemochromatosis.

### Vignette 5: When to Start ULT
"Patient had 3 gout attacks this year. Currently asymptomatic. Should you start allopurinol?"
→ **Yes** — 2+ attacks/year is an indication for urate-lowering therapy. Start allopurinol 100 mg with colchicine prophylaxis.

### Vignette 6: Allopurinol Hypersensitivity
"Patient started on allopurinol develops fever, rash, eosinophilia, hepatitis. What happened?"
→ **Allopurinol hypersensitivity syndrome (AHS)** — DRESS-like reaction. Associated with HLA-B*5801 and renal impairment. Requires immediate drug cessation.

## Common Exam Traps
1. Starting allopurinol during acute attack (WRONG — worsens flare)
2. Confusing negative vs positive birefringence
3. Not checking G6PD before rasburicase (contraindicated in G6PD deficiency)
4. Forgetting colchicine prophylaxis when starting ULT
5. Missing CPPD associations (hyperparathyroidism, hemochromatosis)
6. Confusing gout erosions (overhanging edge) with RA erosions (marginal)`,
        mnemonics: [
          { text: "Yellow Parallel Negative Gout = YPNG", explanation: "Crystal identification: Yellow when Parallel to compensator = Negative birefringence = Gout" },
          { text: "Colchicine = Catches tubulin", explanation: "Colchicine inhibits tubulin polymerization, blocking neutrophil migration and phagocytosis" },
          { text: "AHS risk: HLA-B*5801 + CKD = danger with Allopurinol", explanation: "Screen HLA-B*5801 before starting allopurinol, especially with renal impairment" }
        ],
        keyPoints: [
          "Yellow parallel to compensator = negative birefringence = MSU = Gout",
          "Blue parallel to compensator = positive birefringence = CPPD = Pseudogout",
          "Colchicine inhibits tubulin polymerization blocking neutrophil chemotaxis",
          "Rasburicase contraindicated in G6PD deficiency (generates hydrogen peroxide)",
          "Allopurinol hypersensitivity syndrome associated with HLA-B*5801 and renal impairment"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "365: Gout and Other Crystal-Associated Arthropathies", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "Rheumatology: Crystal Arthropathies", edition: "11th" },
          { book: "Davidson's Principles and Practice of Medicine", chapter: "25: Musculoskeletal Disease", edition: "24th" }
        ]
      },
      {
        layer: 5,
        slug: "gout-layer-5-active-recall",
        title: "Gout & Pseudogout - Active Recall",
        estimatedMinutes: 15,
        summary: "Flashcard-style active recall covering crystal arthropathy diagnosis, pathophysiology, pharmacology, and clinical management decisions.",
        contentMd: `# Gout & Pseudogout - Active Recall

## Flashcard Q&A

**Q1:** What is the defining birefringence pattern for MSU vs CPPD crystals?
**A1:** MSU (gout): needle-shaped, strong NEGATIVE birefringence (yellow when parallel to compensator). CPPD (pseudogout): rhomboid, weak POSITIVE birefringence (blue when parallel to compensator).

**Q2:** What is the NLRP3 inflammasome pathway in gout?
**A2:** MSU crystals phagocytosed by macrophages → lysosomal destabilization → cathepsin release → NLRP3 inflammasome activation → Caspase-1 activation → cleavage of pro-IL-1beta to active IL-1beta → neutrophil recruitment → acute inflammation.

**Q3:** Why is the 1st MTP joint most commonly affected in gout?
**A3:** Three factors: lowest body temperature (crystals form at lower temperatures), highest mechanical stress (weight-bearing), and lower local pH. All favor MSU crystal nucleation and deposition.

**Q4:** What are the four stages of gout?
**A4:** 1) Asymptomatic hyperuricemia, 2) Acute gouty arthritis (podagra), 3) Intercritical period (asymptomatic between attacks), 4) Chronic tophaceous gout (tophi, chronic arthropathy, renal disease).

**Q5:** Why should you NOT start allopurinol during an acute gout attack?
**A5:** Rapid changes in serum urate level (either increase or decrease) can trigger crystal shedding from existing deposits, precipitating or worsening acute attacks. Always wait until the acute attack has fully resolved.

**Q6:** What is the mechanism of action of colchicine in gout?
**A6:** Colchicine binds tubulin and inhibits microtubule polymerization. This blocks neutrophil chemotaxis, adhesion, phagocytosis, and NLRP3 inflammasome assembly. Must be given early (within 12-24 hours of onset) for maximum efficacy.

**Q7:** What metabolic conditions are associated with CPPD disease?
**A7:** The 4 Hs: Hyperparathyroidism (calcium promotes crystallization), Hemochromatosis (iron inhibits pyrophosphatase), Hypothyroidism, and Hypomagnesemia. Also: Wilson disease, hypophosphatasia.

**Q8:** What is the target serum urate level for long-term gout management?
**A8:** Target serum urate <6 mg/dL (below supersaturation point). If tophi are present, target <5 mg/dL for faster tophus dissolution. Allopurinol is started at 100 mg/day and titrated up every 2-4 weeks.

**Q9:** How does probenecid work and when is it contraindicated?
**A9:** Probenecid blocks URAT1 transporter in the proximal tubule, increasing renal urate excretion (uricosuric). Contraindicated in: uric acid nephrolithiasis, CKD (eGFR <30), overproducers of urate. Requires adequate hydration and urine alkalinization.

**Q10:** What is the radiological hallmark of CPPD disease?
**A10:** Chondrocalcinosis — calcification of articular cartilage visible on X-ray. Best seen in knee menisci, wrist triangular fibrocartilage complex, and symphysis pubis. Absence does not rule out CPPD (crystals may be too small).

**Q11:** What is allopurinol hypersensitivity syndrome (AHS)?
**A11:** Severe drug reaction (DRESS-like) with fever, rash, eosinophilia, hepatitis, renal failure. Mortality 20-25%. Associated with HLA-B*5801 allele (screen before starting). Risk factors: renal impairment, high starting dose, thiazide co-administration.

**Q12:** What is rasburicase and when is it used?
**A12:** Rasburicase is recombinant uricase that converts uric acid to allantoin (soluble, easily excreted). Used for prevention/treatment of tumor lysis syndrome (not chronic gout). Contraindicated in G6PD deficiency (generates hydrogen peroxide during reaction).

**Q13:** How do you differentiate acute gout from septic arthritis?
**A13:** Both cause acute monoarthritis with fever and leukocytosis. Key: synovial fluid analysis — gout shows MSU crystals with negative culture; septic arthritis shows WBC >50,000, positive Gram stain/culture. Note: gout and septic arthritis can coexist. Always send culture even if crystals found.

**Q14:** What dietary modifications help in gout management?
**A14:** Avoid: red meat, organ meats, shellfish, beer (high purines + inhibits urate excretion), fructose-sweetened drinks. Moderate: poultry, fish. Safe: low-fat dairy (increases urate excretion), cherries (reduce flares), coffee, vitamin C. Limit alcohol overall.`,
        mnemonics: [
          { text: "Gout diet avoid = ROSBF: Red meat, Organ meats, Shellfish, Beer, Fructose", explanation: "High-purine foods and beverages that trigger or worsen gout" },
          { text: "ULT prophylaxis: Colchicine 0.5 BD for 6 months when starting allopurinol", explanation: "Prophylactic colchicine prevents mobilization flares when initiating urate-lowering therapy" }
        ],
        keyPoints: [
          "MSU = needle, negative birefringence, yellow parallel; CPPD = rhomboid, positive, blue parallel",
          "NLRP3 inflammasome → IL-1beta is the key inflammatory pathway in crystal arthropathies",
          "Never start/stop urate-lowering therapy during acute gout attack",
          "Target urate <6 mg/dL (<5 if tophi present) with colchicine prophylaxis during ULT initiation",
          "CPPD associated with 4 Hs: hyperparathyroidism, hemochromatosis, hypothyroidism, hypomagnesemia",
          "Synovial fluid crystal analysis is the gold standard — always send culture to rule out coexisting septic arthritis"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "365: Gout and Other Crystal-Associated Arthropathies", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "Rheumatology: Crystal Arthropathies", edition: "11th" },
          { book: "Davidson's Principles and Practice of Medicine", chapter: "25: Musculoskeletal Disease", edition: "24th" }
        ]
      }
    ]
  }
];
