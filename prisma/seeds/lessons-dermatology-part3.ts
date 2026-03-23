import type { TopicLessons } from "./content-loader";

export const dermatologyPart3Lessons: TopicLessons[] = [
  {
    topicCode: "DR-MOD-02-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "bacterial-infections-layer-1-foundation",
        title: "Bacterial Skin Infections - Foundation",
        estimatedMinutes: 25,
        summary: "Overview of common bacterial skin infections including impetigo, cellulitis, and skin structure involvement.",
        contentMd: `# Bacterial Skin Infections - Foundation

## Impetigo
### Characteristics
- **Definition**: Non-bullous and bullous forms of superficial bacterial skin infection
- **Common organisms**: Staphylococcus aureus (most common, 60-80%), Streptococcus pyogenes (GAS)
- **Age group**: Children 2-6 years; can occur at any age
- **MRSA prevalence**: Increasing in community-acquired infections

### Non-Bullous Impetigo (60-70%)
- **Presentation**: Pustules on erythematous base progressing to crusted lesions
- **Golden crusts**: Characteristic honey-colored crusts on face, limbs
- **Distribution**: Face (most common), lips, lower legs, sites of minor trauma
- **Contagious**: Highly contagious; spread by contact

### Bullous Impetigo
- **Presentation**: Flaccid bullae leading to erosions and crusting
- **Exotoxin**: Exfoliative toxins (ETA, ETB) from S. aureus cause blister
- **Bulla location**: Subcorneal (superficial), ruptures easily
- **Bullae fluid**: Clear to turbid, non-purulent initially

### Complications
- **Local**: Autoinoculation spreading to other body sites
- **Systemic**: Post-streptococcal glomerulonephritis (especially M protein types 2, 49, 60)
- **Scarring**: Usually minimal unless bullous with deep erosions

## Cellulitis
### Characteristics
- **Definition**: Acute, spreading, purulent inflammation of dermis and subcutaneous tissue
- **Common organisms**: S. pyogenes (GAS), S. aureus; Gram-negative bacteria less common
- **Predisposing factors**: Lymphedema, venous insufficiency, obesity, immunosuppression

### Clinical Features
- **Presentation**: Erythema, edema, warmth, pain; no distinct borders (diffuse)
- **Distribution**: Usually unilateral (one leg); lower extremities most common
- **Systemic signs**: Fever, chills, malaise, lymphadenopathy
- **Progression**: Spreads rapidly; can lead to abscess formation

### Differential from Erysipelas
- **Cellulitis**: Diffuse borders, deeper involvement (dermis/subcutis), non-suppurative usually
- **Erysipelas**: Well-demarcated borders, superficial (dermis/superficial lymphatics), may have fluid-filled bullae

## Folliculitis
### Types
- **Superficial folliculitis**: Involves hair follicle infundibulum; common with S. aureus, pseudomonas
- **Deep folliculitis (furuncle)**: Involves entire hair follicle; forms painful nodule with central pus
- **Carbuncle**: Multiple interconnected furuncles involving deep dermis/subcutis

### Pseudomonas Folliculitis ("Hot Tub Folliculitis")
- **Risk factor**: Exposure to contaminated water (hot tubs, whirlpools)
- **Presentation**: Pustules on torso, neck, extremities within 48 hours of exposure
- **Self-limited**: Usually resolves without treatment in 7-10 days

## Erythrasma
### Characteristics
- **Organism**: Corynebacterium minutissimum
- **Presentation**: Non-itchy, scaly patch, reddish-brown (maceration in skin folds)
- **Distribution**: Inframammary, groin, web spaces, axillae
- **Wood's lamp**: Pathognomonic coral-red fluorescence (porphyrin production)`,
        mnemonics: [
          { text: "Golden crusts = Impetigo (honey-colored, contagious)", explanation: "Characteristic presentation" },
          { text: "Bullae subcorneal = Bullous impetigo (exotoxin-mediated)", explanation: "Location of bulla formation" },
          { text: "Cellulitis = Diffuse, no borders; Erysipelas = Well-demarcated, superficial", explanation: "Differential diagnosis" },
          { text: "Coral-red fluorescence = Erythrasma (C. minutissimum)", explanation: "Wood's lamp finding" }
        ],
        keyPoints: [
          "Impetigo most common in children; golden crusts are pathognomonic",
          "S. aureus most common cause; MRSA prevalence increasing",
          "Bullous impetigo caused by exfoliative toxins (ETA, ETB)",
          "Cellulitis: diffuse borders, deeper involvement, fever/systemic signs",
          "Erysipelas: well-demarcated borders, superficial, painful",
          "Post-streptococcal glomerulonephritis associated with impetigo",
          "Folliculitis: superficial vs deep (furuncle); carbuncle = multiple furuncles",
          "Erythrasma: coral-red with Wood's lamp; non-itchy patch in skin folds"
        ],
        textbookRefs: [
          { book: "IADVL Textbook of Dermatology", chapter: "9 - Bacterial Infections", edition: "4th" },
          { book: "Roxburgh's Common Skin Diseases", chapter: "Bacterial Infections", edition: "20th" }
        ],
      },
      {
        layer: 2,
        slug: "bacterial-infections-layer-2-mechanism",
        title: "Bacterial Skin Infections - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathogenesis of bacterial skin infections, virulence factors, and immune mechanisms.",
        contentMd: `# Bacterial Skin Infections - Mechanism

## Staphylococcus aureus Virulence
- **Adhesion**: Protein A binds Fc region of IgG; clumping factor binds fibrinogen; fibronectin-binding proteins
- **Toxins**: Alpha-toxin (pore-forming), Exfoliative toxins (ETA/ETB = serine proteases targeting desmoglein-1)
- **Enzymes**: Hyaluronidase (spreads infection), lipases, proteases, collagenase
- **Biofilm formation**: Polysaccharide capsule (PIA/PNAG); resistant to antibiotics and immune cells
- **Panton-Valentine Leukocidin (PVL)**: Exotoxin killing neutrophils and macrophages

## Streptococcus pyogenes (GAS) Virulence
- **Hyaluronic acid capsule**: Mimics host connective tissue; molecular mimicry evades immune response
- **M protein**: Major virulence factor; prevents complement deposition and opsonization
- **Streptokinase**: Fibrinolytic enzyme; dissolves fibrin clots, spreads infection
- **Hyaluronidase**: "Spreading factor"; breaks down hyaluronic acid in connective tissue
- **Exotoxins**: Streptococcal pyrogenic exotoxins (SPE A, B, C); trigger superantigen response
- **Post-infectious sequelae**: M protein cross-reactivity with myosin, tropomyosin, keratin

## Cellulitis Pathogenesis
- **Breach of skin barrier**: Trauma, surgical wound, dermatitis, lymphedema, obesity
- **Bacterial entry**: S. pyogenes and S. aureus enter through break in skin
- **Spreading**: Hyaluronidase and streptokinase promote local spread
- **Inflammation**: Recruitment of neutrophils; IL-6, TNF-α production
- **Diffuse borders**: Unlike abscess (localized), cellulitis spreads along tissue planes

## Folliculitis Mechanism
- **Follicular occlusion**: Sebum accumulation, keratin, poor hygiene
- **Bacterial colonization**: S. aureus or Pseudomonas proliferation within hair follicle
- **Inflammation**: Neutrophilic response to bacterial antigens/toxins
- **Progression**: Superficial → Deep (abscess formation in dermis/subcutis)
- **Furuncle formation**: Necrosis of follicle with pus pocket; coalescence → carbuncle

## Exfoliative Toxin Mechanism
- **ETA and ETB**: Serine proteases that cleave desmoglein-1 (cell adhesion protein)
- **Result**: Loss of cell-to-cell adhesion in stratum granulosum/corneum
- **Bulla formation**: Subcorneal bulla (superficial) vs pemphigus vulgaris (intraepidermal acantholysis)
- **Flaccid bullae**: Thin-roofed due to superficial location; rupture easily

## Immunity to Bacterial Infection
- **Innate immunity**: Antimicrobial peptides (β-defensins, LL-37), lysozyme, normal skin flora
- **Neutrophils**: Primary defense; PMNL infiltration in cellulitis
- **Complement**: Activation via alternative pathway; opsonization of bacteria
- **Adaptive immunity**: Specific antibodies (anti-M protein, anti-toxin) develop post-infection`,
        mnemonics: [
          { text: "S. aureus toxins: Alpha, Exfoliative, PVL (kills neutrophils)", explanation: "Key virulence factors" },
          { text: "S. pyogenes: Hyaluronidase (spreads), Streptokinase (fibrinolysis), M protein (immune evasion)", explanation: "GAS pathogenesis" },
          { text: "ETA/ETB = Serine proteases cleaving desmoglein-1", explanation: "Mechanism of subcorneal bulla" }
        ],
        keyPoints: [
          "S. aureus M protein and biofilm formation confer antibiotic resistance",
          "S. pyogenes hyaluronic acid capsule mimics host tissue (molecular mimicry)",
          "Exfoliative toxins target desmoglein-1 in stratum granulosum",
          "Cellulitis: diffuse spread due to hyaluronidase and streptokinase",
          "Folliculitis: occlusion + bacterial proliferation in hair follicle",
          "Furuncle: abscessed follicle with necrotic core and pus",
          "Post-streptococcal sequelae: M protein cross-reactivity with host myosin",
          "Neutrophils critical for immune response to superficial bacterial infections"
        ],
        textbookRefs: [
          { book: "IADVL Textbook of Dermatology", chapter: "9 - Bacterial Infections", edition: "4th" },
          { book: "Robbins & Kumar Pathologic Basis of Disease", chapter: "25 - Skin Disorders", edition: "10th" }
        ],
      },
      {
        layer: 3,
        slug: "bacterial-infections-layer-3-clinical",
        title: "Bacterial Skin Infections - Clinical",
        estimatedMinutes: 35,
        summary: "Clinical diagnosis, treatment, and management of bacterial skin infections.",
        contentMd: `# Bacterial Skin Infections - Clinical

## Diagnosis Methods
- **Clinical diagnosis**: Based on morphology, distribution, and clinical presentation
- **Gram Stain**: Shows Gram-positive cocci in clusters (S. aureus) or chains (S. pyogenes)
- **Culture**: Blood agar, selective media; identifies organism and antibiotic susceptibility
- **Wood's lamp**: Erythrasma shows coral-red fluorescence; folliculitis fluorescens from Pseudomonas
- **Histopathology**: Neutrophilic infiltration, bacterial clusters, PMN involvement

## Treatment Approaches
### Impetigo
- **Non-bullous**: Topical antibiotics (mupirocin) for localized lesions (1-2% of body surface)
- **Bullous or extensive**: Systemic antibiotics
  - First-line: Amoxicillin + clavulanic acid, cephalexin, or cloxacillin
  - MRSA: Clindamycin, TMP-SMX, or fluoroquinolone
- **Duration**: 5-7 days
- **Hygiene**: Frequent bathing, trim nails, cover lesions to prevent spread

### Cellulitis
- **Systemic antibiotics**: Required (cannot use topical for deep infection)
- **First-line**: Cloxacillin (S. aureus) + Penicillin G (S. pyogenes)
- **Alternatives**: Cephalexin, amoxicillin-clavulanic acid, fluoroquinolone
- **MRSA**: Clindamycin, vancomycin, linezolid
- **Duration**: 7-14 days depending on severity
- **Adjunctive**: Elevation, ice packs, NSAIDs for inflammation
- **Monitoring**: Clinical improvement in 48-72 hours; repeat imaging if abscess suspected

### Folliculitis
- **Superficial**: Topical antibiotics (mupirocin, gentamicin) or antiseptics
- **Deep (furuncle)**: Oral antibiotics (cloxacillin, cephalexin)
- **Recurrent**: Investigate for carrier state; nasal mupirocin eradication
- **Incision and drainage**: For fluctuant lesions
- **Hot compresses**: Promote drainage and resolution

## Specific Conditions Management
### Cellulitis Complications
- **Abscess formation**: Requires incision and drainage
- **Necrotizing fasciitis**: Life-threatening; requires emergency surgical debridement
- **Lymphangitis**: Red streaking along lymphatic vessels; indicates systemic spread
- **Septicemia**: Fever, chills, malaise; blood cultures, broad-spectrum antibiotics

### Folliculitis Management
- **Pseudomonas (hot tub)**: Usually self-limited; topical antibiotics; chlorine exposure prophylaxis
- **Recurrent furunculosis**: Culture for MRSA; screen for diabetes, immunosuppression
- **Carbuncle**: Requires incision/drainage and systemic antibiotics

## Prevention and Public Health
- **Contact precautions**: Separate towels, avoid sharing fomites
- **Hygiene**: Hand washing, wound care, nail trimming
- **Screening**: Post-streptococcal glomerulonephritis screening with urinalysis (hematuria, proteinuria)
- **Prophylaxis**: Penicillin V for recurrent S. pyogenes infection`,
        mnemonics: [
          { text: "Mupirocin = Topical antibiotic for localized impetigo", explanation: "First-line topical" },
          { text: "Cloxacillin + Penicillin = Cellulitis (S. aureus + GAS)", explanation: "First-line combination" },
          { text: "MRSA = Clindamycin, TMP-SMX, or Fluoroquinolone", explanation: "Alternative agents" }
        ],
        keyPoints: [
          "Impetigo topical therapy (mupirocin) for localized; systemic for extensive",
          "Cellulitis requires systemic antibiotics; topical ineffective for deep infection",
          "Cloxacillin covers S. aureus; penicillin G covers S. pyogenes",
          "MRSA prevalence increasing; clindamycin alternative for community-acquired",
          "Furuncle requires incision/drainage plus systemic antibiotics",
          "Recurrent furunculosis: culture, investigate for diabetes/immunosuppression",
          "Post-streptococcal glomerulonephritis possible; screen with urinalysis",
          "Hot compresses promote drainage; good hygiene prevents recurrence"
        ],
        textbookRefs: [
          { book: "IADVL Textbook of Dermatology", chapter: "9 - Bacterial Infections", edition: "4th" },
          { book: "Roxburgh's Common Skin Diseases", chapter: "Bacterial Infections", edition: "20th" }
        ],
      },
      {
        layer: 4,
        slug: "bacterial-infections-layer-4-exam",
        title: "Bacterial Skin Infections - Exam Prep",
        estimatedMinutes: 25,
        summary: "High-yield facts, differentials, and NEXT-pattern questions for bacterial infections.",
        contentMd: `# Bacterial Skin Infections - Exam Prep

## High-Yield Exam Facts
- **Impetigo**: Most common pyoderma in children; golden crusts pathognomonic
- **S. aureus**: Most common cause of impetigo and skin infections (60-80%)
- **MRSA**: Increasing prevalence in community-acquired infections; check local patterns
- **Cellulitis**: Unilateral, diffuse borders, fever/systemic symptoms
- **Erysipelas**: Well-demarcated borders, superficial, facial involvement common
- **Erythrasma**: Coral-red with Wood's lamp; C. minutissimum, painless

## Differential Diagnosis
### Golden Crusts (Impetigo vs Others):
- **Impetigo**: Golden crusts, non-bullous or bullous, positive Gram stain
- **Eczema with secondary infection**: Vesicles/excoriations first; lichenification
- **Psoriasis with infection**: Silvery scale, well-demarcated plaques

### Cellulitis vs Erysipelas:
- **Cellulitis**: Diffuse borders, involves dermis/subcutis, deeper inflammation
- **Erysipelas**: Well-demarcated raised borders, superficial dermis, facial involvement
- **Necrotizing fasciitis**: Pain out of proportion, skin changes (mottled, blister), systemic toxicity

### Folliculitis vs Carbuncle:
- **Superficial folliculitis**: Small pustules, involve follicle only
- **Furuncle**: Painful nodule, abscess formation, single follicle
- **Carbuncle**: Multiple interconnected furuncles, larger, deep dermis/subcutis involvement

## NEXT-Pattern Questions
### Recall (10%):
- Q: "Golden crusts on face are characteristic of?" → A: Impetigo
- Q: "Coral-red fluorescence is seen in?" → A: Erythrasma

### Analysis (30%):
- Q: "Child with pustules on face and lower legs, contagious to others. Likely diagnosis?" → A: Impetigo (S. aureus, highly contagious)
- Q: "Patient with unilateral leg cellulitis, fever, diffuse borders. Next step?" → A: Systemic antibiotics (no topical, deep infection)

### Problem-Solving (60%):
- Q: "30-year-old with cellulitis not improving after 72 hours of cloxacillin. What to consider?" → A: Abscess formation (ultrasound/imaging), MRSA (change to clindamycin), gram-negative organisms
- Q: "Post-streptococcal complication to screen for in impetigo patient?" → A: Glomerulonephritis (urinalysis for hematuria/proteinuria)

## Clinical Pearls
- **Bullous impetigo**: Exotoxin-mediated; flaccid bullae (not pemphigus which is intraepidermal)
- **Hot tub folliculitis**: Pseudomonas, self-limited (7-10 days without treatment)
- **Necrotizing fasciitis**: Medical emergency; pain out of proportion, rapidly spreading, systemic toxicity
- **Staphylococcal scalded skin syndrome (SSSS)**: Exfoliative toxin in infants/children; entire skin can slough
- **Recurrent impetigo**: Screen for carrier state (nasal carriage); eradicate with mupirocin in nares

## Common Mistakes
- Using topical antibiotics for cellulitis (requires systemic)
- Not considering MRSA in community-acquired infections
- Missing erysipelas (superficial) vs cellulitis (deep) distinction
- Not screening for post-streptococcal glomerulonephritis
- Forgetting carbuncle can lead to bacteremia`,
        mnemonics: [
          { text: "Golden crusts = Impetigo (contagious, common in children)", explanation: "Classic presentation" },
          { text: "Cellulitis = Diffuse, deep, systemic signs; Erysipelas = Demarcated, superficial", explanation: "Key differential" },
          { text: "MRSA = Clindamycin or TMP-SMX (adjust from beta-lactam)", explanation: "Antibiotic change" }
        ],
        keyPoints: [
          "Impetigo most common in children; contagious via contact",
          "S. aureus most common (60-80% of cases)",
          "Golden/honey-colored crusts are pathognomonic for impetigo",
          "Bullous impetigo: exotoxin-mediated, flaccid bullae, subcorneal",
          "Cellulitis: deep infection, diffuse borders, requires systemic antibiotics",
          "Erysipelas: superficial, well-demarcated, painful, facial involvement",
          "Post-streptococcal glomerulonephritis: screen with urinalysis",
          "MRSA prevalence increasing; adjust therapy if no improvement in 72 hours",
          "Necrotizing fasciitis: emergency; pain out of proportion, rapid spread"
        ],
        textbookRefs: [
          { book: "IADVL Textbook of Dermatology", chapter: "9 - Bacterial Infections", edition: "4th" },
          { book: "Roxburgh's Common Skin Diseases", chapter: "Bacterial Infections", edition: "20th" }
        ],
      },
      {
        layer: 5,
        slug: "bacterial-infections-layer-5-active-recall",
        title: "Bacterial Skin Infections - Active Recall",
        estimatedMinutes: 30,
        summary: "Flashcard Q&A pairs for bacterial infections diagnosis and management.",
        contentMd: `# Bacterial Skin Infections - Active Recall Flashcards

## Q1: Impetigo Definition
**Q: Define impetigo and list its two main clinical variants.**
A: Superficial pyoderma characterized by golden/honey-colored crusts or flaccid bullae; variants are non-bullous (60-70%) and bullous (30-40%)

## Q2: Common Organisms
**Q: What are the two most common causative organisms of impetigo?**
A: Staphylococcus aureus (60-80%, most common) and Streptococcus pyogenes (Group A Streptococcus)

## Q3: Bullous Impetigo Toxin
**Q: What toxins cause bullous impetigo, and how do they work?**
A: Exfoliative toxins ETA and ETB; these are serine proteases that cleave desmoglein-1, disrupting cell-to-cell adhesion

## Q4: Golden Crusts
**Q: Why are golden/honey-colored crusts characteristic of non-bullous impetigo?**
A: The crusts are composed of dried serum, fibrin, and bacterial debris with carotenoid pigmentation from S. aureus

## Q5: Cellulitis Definition
**Q: Define cellulitis and list its predisposing factors.**
A: Acute spreading inflammation of dermis and subcutaneous tissue; predisposing factors include lymphedema, venous insufficiency, obesity, and immunosuppression

## Q6: Cellulitis vs Erysipelas
**Q: Compare cellulitis and erysipelas in terms of borders, depth, and distribution.**
A: Cellulitis = diffuse borders, deeper (dermis/subcutis), unilateral lower extremity; Erysipelas = well-demarcated raised borders, superficial (dermis), facial involvement common

## Q7: Systemic Signs Cellulitis
**Q: What systemic signs suggest cellulitis?**
A: Fever, chills, malaise, lymphadenopathy, lymphangitis (red streaking along lymphatic vessels)

## Q8: Folliculitis Types
**Q: Name three types of folliculitis and their depth of involvement.**
A: Superficial folliculitis (follicle infundibulum only), Furuncle (entire hair follicle), Carbuncle (multiple interconnected furuncles)

## Q9: Hot Tub Folliculitis
**Q: What organism causes hot tub folliculitis, and what is its natural course?**
A: Pseudomonas aeruginosa; usually self-limited, resolves in 7-10 days without treatment

## Q10: Erythrasma Organism
**Q: What organism causes erythrasma, and what is its characteristic finding on Wood's lamp?**
A: Corynebacterium minutissimum; produces porphyrins causing pathognomonic coral-red fluorescence with Wood's lamp

## Q11: Topical Antibiotic
**Q: What is the first-line topical antibiotic for localized impetigo?**
A: Mupirocin (pseudomonic acid); effective for both S. aureus and S. pyogenes

## Q12: Systemic Antibiotics Impetigo
**Q: What are the first-line systemic antibiotics for impetigo?**
A: Amoxicillin-clavulanic acid, cephalexin, or cloxacillin for 5-7 days

## Q13: Cellulitis Antibiotic
**Q: What is the first-line antibiotic combination for cellulitis?**
A: Cloxacillin (S. aureus) plus Penicillin G (S. pyogenes); alternatives include cephalexin or amoxicillin-clavulanic acid

## Q14: MRSA Therapy
**Q: What are alternatives if MRSA is suspected in cellulitis or folliculitis?**
A: Clindamycin, trimethoprim-sulfamethoxazole (TMP-SMX), fluoroquinolone, or vancomycin (severe)

## Q15: Post-Streptococcal Screening
**Q: What complication should be screened for after S. pyogenes impetigo?**
A: Post-streptococcal glomerulonephritis; screen with urinalysis for hematuria and proteinuria`,
        mnemonics: [
          { text: "Golden crusts = Impetigo; Bullae = Bullous impetigo (exotoxin)", explanation: "Clinical variants" },
          { text: "Cellulitis = Diffuse borders, fever, systemic signs", explanation: "Key features" },
          { text: "MRSA = Switch to Clindamycin or TMP-SMX", explanation: "Antibiotic adjustment" }
        ],
        keyPoints: [
          "Impetigo: most common pyoderma in children; highly contagious",
          "Non-bullous impetigo: golden crusts on erythematous base",
          "Bullous impetigo: exotoxin-mediated (ETA/ETB), flaccid bullae",
          "Cellulitis: requires systemic antibiotics (topical ineffective)",
          "Erysipelas: superficial, well-demarcated, facial involvement common",
          "Post-streptococcal glomerulonephritis possible; screen with urinalysis",
          "MRSA prevalence increasing; culture if no improvement in 72 hours",
          "Furuncle: abscess of entire hair follicle; requires incision/drainage",
          "Carbuncle: multiple furuncles; can lead to bacteremia",
          "Erythrasma: coral-red with Wood's lamp; treat with erythromycin/azithromycin"
        ],
        textbookRefs: [
          { book: "IADVL Textbook of Dermatology", chapter: "9 - Bacterial Infections", edition: "4th" },
          { book: "Roxburgh's Common Skin Diseases", chapter: "Bacterial Infections", edition: "20th" }
        ],
      },
    ],
  },
];
