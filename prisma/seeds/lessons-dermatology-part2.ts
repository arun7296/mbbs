import type { TopicLessons } from "./content-loader";

export const dermatologyPart2Lessons: TopicLessons[] = [
  {
    topicCode: "DR-MOD-02-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "fungal-infections-layer-1-foundation",
        title: "Fungal Infections - Foundation",
        estimatedMinutes: 25,
        summary: "Overview of dermatophytes, candidiasis, and pityriasis versicolor with clinical presentations and epidemiology.",
        contentMd: `# Fungal Infections - Foundation

## Dermatophytosis (Ringworm)
### Epidemiology
- **Organisms**: Trichophyton, Microsporum, Epidermophyton (keratinophilic fungi)
- **Prevalence**: Most common fungal infection worldwide, 20-25% population in India
- **Transmission**: Anthropophilic (person-person), zoophilic (animals), geophilic (soil)
- **Risk factors**: Warm humid climate, poor hygiene, friction, immunosuppression

### Clinical Classification by Site
- **Tinea corporis** (body): Annular erythematous plaques, scaling border, central clearing
- **Tinea pedis** (athlete's foot): Web space maceration, scaling, fissuring, hyperkeratosis
- **Tinea cruris**: Groin/inner thigh, bilateral symmetry, spares scrotum
- **Tinea unguium** (onychomycosis): Nail thickening, yellowing, subungual debris
- **Tinea capitis** (scalp): Patchy alopecia, scaling, may have pustules (kerion)

### Diagnosis
- **KOH mount**: 10-20% KOH dissolves cellular material, shows fungal septate hyphae
- **Wood's lamp**: Slight yellow-brown (not diagnostic)
- **Culture**: Sabouraud dextrose agar, identifies organism

## Candidiasis
### Candida Species
- **C. albicans**: Most common (80%)
- **C. tropicalis, C. glabrata**: Increasingly resistant
- **Normal flora**: Skin, mucous membranes, GI tract

### Clinical Presentations
- **Oral candidiasis (Thrush)**: White plaques on tongue/buccal mucosa, erythematous base
- **Esophageal candidiasis**: Dysphagia, chest pain; in immunocompromised
- **Vulvovaginal candidiasis**: Vaginal itching, white curd-like discharge, vulvar erythema
- **Cutaneous candidiasis**: Maceration in skin folds (inframammary, groin, web spaces)
- **Diaper dermatitis**: Erythema with satellite lesions in infants

### Risk Factors
- Immunosuppression (HIV/AIDS, chemotherapy)
- Antibiotics (destroy normal flora)
- Pregnancy (hormonal changes)
- Diabetes mellitus (hyperglycemia)
- Occlusion and moisture (intertriginous areas)

## Pityriasis Versicolor
### Characteristics
- **Organism**: Malassezia furfur (lipophilic yeast)
- **Presentation**: Multiple hypo- or hyper-pigmented patches on trunk/neck
- **Color variants**: "Tinea" versicolor = pityriasis versicolor (misnomer, not dermatophyte)
- **Fine scaling**: Minimal, non-inflammatory
- **Distribution**: Upper back, chest, shoulders, neck

### Diagnosis
- **KOH mount**: "Spaghetti and meatballs" pattern (short septate hyphae + round yeast)
- **Wood's lamp**: Pale yellow-green or coppery-orange fluorescence
- **Culture**: Grows on lipid-rich media`,
        mnemonics: [
          { text: "Trichophyton, Microsporum, Epidermophyton = TME (Dermatophytes)", explanation: "Three main dermatophyte genera" },
          { text: "Tinea Corporis Annular = TCA (ring-shaped with clear center)", explanation: "Classic presentation" },
          { text: "KOH = Candida/Fungal visualization; Sabouraud = Culture/ID", explanation: "Diagnostic techniques" },
          { text: "Malassezia = Pityriasis Versicolor (not tinea)", explanation: "Common misnomer" }
        ],
        keyPoints: [
          "Dermatophytes are keratinophilic (need keratin to survive)",
          "Tinea corporis classically presents with annular lesion with central clearing",
          "Tinea pedis most common in tropical climate and with poor hygiene",
          "KOH mount shows septate hyphae for dermatophytes",
          "Candidiasis is opportunistic; common in immunocompromised and diabetic patients",
          "Malassezia is lipophilic yeast; causes pityriasis versicolor with hypopigmentation",
          "Pityriasis versicolor shows 'spaghetti and meatballs' on KOH mount",
          "Malassezia fluorescence with Wood's lamp is pathognomonic"
        ],
        textbookRefs: [
          { book: "IADVL Textbook of Dermatology", chapter: "12 - Fungal Infections", edition: "4th" },
          { book: "Roxburgh's Common Skin Diseases", chapter: "Fungal Infections", edition: "20th" }
        ],
      },
      {
        layer: 2,
        slug: "fungal-infections-layer-2-mechanism",
        title: "Fungal Infections - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathogenesis of fungal infection, fungal cell wall structure, and immune mechanisms.",
        contentMd: `# Fungal Infections - Mechanism

## Dermatophyte Pathogenesis
- **Keratinolytic enzymes**: Produce keratinases that degrade alpha-keratin, collagen (Type I, III), elastin
- **Adhesion**: Specialized adhesins bind to keratinocytes; fungal surface proteins interact with host cells
- **Invasion**: Germination within stratum corneum; mycelial growth in keratinized tissue
- **Immune evasion**: Produce antigens that trigger Th2 response (less protective than Th1)
- **Persistence**: In nails, difficult to treat due to poor penetration; in chronic infections

## Candida Pathogenesis
- **Transition**: Yeast (commensal) → Hyphal (invasive) form driven by pH, temperature, glucose
- **Adhesion**: Agglutinin-like sequence (Als) proteins bind to epithelial cells
- **Invasion**: Hyphae penetrate epithelium using protease secretion
- **Immune response**: Neutrophils crucial for superficial candidiasis; cellular immunity for invasive disease
- **Biofilm formation**: Protected community of yeasts/hyphae; resistant to antifungals

## Malassezia Pathogenesis
- **Lipid dependency**: Requires long-chain fatty acids (C11-C24) for growth
- **Hydrophobic growth**: Occurs in sebaceous-rich areas (chest, back)
- **Polymorphic transition**: Yeast-mycelial transformation in pityriasis versicolor
- **Enzymatic activity**: Lipases degrade lipids; phosphatase activity modulates lipid metabolism
- **Immune dysregulation**: Triggers Th17 response; reduced Th1 response

## Fungal Cell Wall & Drug Target
- **Composition**: Chitin (N-acetylglucosamine), β-glucan, mannoproteins
- **Ergosterol**: Unique to fungi (vs cholesterol in human cells); target for azoles, polyenes
- **β-1,3-glucan synthase**: Target for echinocandins
- **Chitin/cellulose synthesis**: Target for morpholine antifungals

## Host Immune Response
- **Innate immunity**: Keratinocytes produce antimicrobial peptides (β-defensins); neutrophils phagocytose
- **Adaptive immunity**: Th1 response protective (IFN-γ, IL-2); Th2 response less protective
- **Complement**: Activation via alternative pathway
- **Antifungal factors**: Skin surface lipids, low pH, antimicrobial proteins (lysozyme)`,
        mnemonics: [
          { text: "Keratinases = Fungal proteases that degrade keratin", explanation: "Why dermatophytes infect skin" },
          { text: "Candida: Yeast→Hyphal transition (temperature, pH, glucose)", explanation: "Virulence switch mechanism" },
          { text: "Malassezia = Lipid-loving (lipophilic); grows in oily areas", explanation: "Ecological niche" }
        ],
        keyPoints: [
          "Dermatophytes produce keratinases to invade and survive in keratin",
          "Th2 response predominates in dermatophyte infection (less protective)",
          "Candida transition from yeast to hyphal form increases pathogenicity",
          "Neutrophils are critical for superficial candidiasis immunity",
          "Malassezia requires lipids; thrives in sebaceous-rich areas",
          "Ergosterol is unique to fungi; target for azole antifungals",
          "β-glucan synthesis targeted by echinocandins",
          "Biofilm formation in candidiasis confers antifungal resistance"
        ],
        textbookRefs: [
          { book: "IADVL Textbook of Dermatology", chapter: "12 - Fungal Infections", edition: "4th" },
          { book: "Robbins & Kumar Pathologic Basis of Disease", chapter: "25 - Skin Disorders", edition: "10th" }
        ],
      },
      {
        layer: 3,
        slug: "fungal-infections-layer-3-clinical",
        title: "Fungal Infections - Clinical",
        estimatedMinutes: 35,
        summary: "Clinical diagnosis, treatment approaches, and management of fungal skin infections.",
        contentMd: `# Fungal Infections - Clinical

## Clinical Diagnosis Methods
- **KOH Mount Preparation**: Scrape scale, mount on KOH, visualize septate hyphae for dermatophytes
- **Gram Stain**: Candida appears as Gram-positive cocci (yeast) and pseudohyphae
- **Fungal Culture**: Sabouraud dextrose agar (dermatophytes), blood agar (candida)
- **Wood's Lamp**: Pityriasis versicolor fluoresces (coppery-orange); microsporum canis (blue-green)
- **Dermoscopy**: Polarized microscopy for fungal elements
- **Histopathology**: PAS stain highlights fungal elements within tissue

## Treatment Approaches
### Topical Antifungals
- **Azoles** (clotrimazole, miconazole, ketoconazole): Target ergosterol; broad spectrum
- **Allylamines** (terbinafine): Target squalene epoxidase; highly effective for dermatophytes
- **Polyenes** (nystatin): Bind ergosterol; less effective for dermatophytes, good for candida
- **Morpholines** (amorolfine): Nail lacquer; penetrates nail plate
- **Duration**: 2-4 weeks for tinea corporis; 4-12 weeks for onychomycosis

### Systemic Antifungals
- **Griseofulvin**: Fungistatic; used historically, now less common
- **Terbinafine** (allylamine): Fungicidal; first-line for onychomycosis (12 weeks)
- **Azoles** (fluconazole, itraconazole): Broad spectrum; for systemic candidiasis, pityriasis versicolor
- **Echinocandins** (caspofungin): For invasive candidiasis in hospitalized patients

## Specific Infection Management
### Tinea Corporis
- Topical azole or terbinafine for uncomplicated lesions
- Systemic therapy if extensive, failed topical, immunocompromised
- Avoid occlusive clothing; maintain dryness

### Tinea Pedis
- Topical treatment with good foot hygiene and drying
- Antifungal powder for moisture control
- Oral therapy if severe or unresponsive

### Candidiasis
- Topical azole for limited cutaneous disease
- Systemic azole for extensive, oral, esophageal candidiasis
- Fluconazole for invasive disease or in immunocompromised

## Prevention & Management
- **Environmental**: Keep skin dry, avoid humidity, proper hygiene
- **Contact**: Avoid sharing towels, fomites in tinea pedis
- **Immunization**: No vaccine available
- **Prophylaxis**: Fluconazole for high-risk immunocompromised patients (CD4 <50)`,
        mnemonics: [
          { text: "KOH = fungal visualization; Sabouraud = fungal culture", explanation: "Diagnostic techniques" },
          { text: "Azoles (ketoconazole), Allylamines (terbinafine), Polyenes (nystatin)", explanation: "Antifungal classes" },
          { text: "Onychomycosis = Oral terbinafine 12 weeks", explanation: "Standard therapy" }
        ],
        keyPoints: [
          "KOH mount shows septate hyphae for dermatophytes; yeast for candida",
          "Pityriasis versicolor fluorescence is pathognomonic with Wood's lamp",
          "Terbinafine is most effective for dermatophyte infection",
          "Azoles cover both dermatophytes and candida",
          "Onychomycosis requires prolonged systemic therapy (months)",
          "Candidiasis in immunocompromised needs systemic azole therapy",
          "Fluconazole prophylaxis for CD4 <50 in HIV/AIDS",
          "Good hygiene and dryness prevent recurrence"
        ],
        textbookRefs: [
          { book: "IADVL Textbook of Dermatology", chapter: "12 - Fungal Infections", edition: "4th" },
          { book: "Roxburgh's Common Skin Diseases", chapter: "Fungal Infections", edition: "20th" }
        ],
      },
      {
        layer: 4,
        slug: "fungal-infections-layer-4-exam",
        title: "Fungal Infections - Exam Prep",
        estimatedMinutes: 25,
        summary: "High-yield facts, differentials, and NEXT-pattern questions for fungal infections.",
        contentMd: `# Fungal Infections - Exam Prep

## High-Yield Exam Facts
- **Most common fungal infection**: Tinea corporis (20-25% of India population)
- **Most common organism**: Trichophyton (anthropophilic > zoophilic > geophilic)
- **Pityriasis versicolor**: NOT a dermatophyte; caused by Malassezia (lipophilic yeast)
- **KOH 'spaghetti and meatballs'**: Pathognomonic for pityriasis versicolor
- **Oral candidiasis**: White plaques on erythematous base; pseudomembranous candidiasis
- **Diaper dermatitis**: Satellite lesions (candida); Ammoniacal odor

## Differential Diagnosis
### Annular Lesions (Tinea Corporis vs Others):
- **Tinea corporis**: Scaly, raised border, central clearing, KOH +ve
- **Pityriasis rosea**: Non-scaly, trunk, Herald patch, viral
- **Discoid lupus**: Scarring, photosensitive, ANA +ve
- **Granuloma annulare**: Deep lesions, non-scaly, epithelioid granuloma

### Nail Changes (Onychomycosis vs Others):
- **Dermatophyte onychomycosis**: Distal subungual, yellow, debris
- **Psoriatic nails**: Pitting, onycholysis, oil drop sign
- **Lichen planus**: Thinning, pterygium unguium, red streaks

## NEXT-Pattern Questions
### Recall (10%):
- Q: "Malassezia furfur causes?" → A: Pityriasis versicolor (not tinea versicolor)
- Q: "KOH mount finding in candidiasis?" → A: Pseudohyphae and budding yeast

### Analysis (30%):
- Q: "Patient with annular lesion, erythema, scaling. KOH negative. What else?" → A: Rule out pityriasis rosea (viral), discoid lupus
- Q: "Onychomycosis resistant to topical therapy. Why?" → A: Poor penetration, biofilm formation in nail

### Problem-Solving (60%):
- Q: "32-year-old with CD4 <50, white plaques on tongue. First-line treatment?" → A: Fluconazole 200mg daily for oral candidiasis
- Q: "Extensive tinea corporis in immunocompromised. 6-week topical treatment failed. Next step?" → A: Systemic terbinafine or azole

## Clinical Pearls
- **Kerion**: Severe tinea capitis with pustules; may indicate host immune response
- **Id reaction**: Autosensitization to fungal antigen causing vesicles; treat primary infection
- **Malassezia**: Lipid-dependent growth; thrives in oily, humid areas
- **Candida albicans**: Normal flora but becomes pathogenic with immunosuppression or disrupted ecology
- **Griseofulvin**: Concentrates in nails due to lipophilic nature; FDA pregnancy category X

## Common Mistakes
- Confusing pityriasis versicolor with tinea versicolor (not dermatophyte)
- Missing candidiasis in diabetics (hyperglycemia favors candida)
- Not recognizing id reaction (hypersensitivity to dermatophyte)
- Inadequate duration of therapy (onychomycosis needs months)
- Not screening for immunosuppression in recurrent candidiasis`,
        mnemonics: [
          { text: "TERBINAFINE = First-line for dermatophytes (especially nails)", explanation: "Antifungal of choice" },
          { text: "MALASSEZIA = Lipophilic; causes Pityriasis Versicolor (NOT tinea)", explanation: "Common exam error" },
          { text: "KOH: Septate hyphae (dermatophyte), Pseudohyphae + budding (candida), Spores + hyphae (versicolor)", explanation: "Morphology patterns" }
        ],
        keyPoints: [
          "Dermatophytes cause 80% of fungal skin infections in India",
          "Trichophyton tonsurans most common anthropophilic dermatophyte",
          "Pityriasis versicolor: KOH shows 'spaghetti and meatballs', Wood's lamp fluorescence",
          "Candida pseudohyphae on KOH; confirmed with culture on Sabouraud agar",
          "Onychomycosis: terbinafine 250mg daily × 12 weeks (dermatophyte)",
          "Oral candidiasis prophylaxis: fluconazole 200mg daily if CD4 <50",
          "Kerion indicates severe host immune response; may need systemic therapy",
          "Id reaction is hypersensitivity; treat primary infection"
        ],
        textbookRefs: [
          { book: "IADVL Textbook of Dermatology", chapter: "12 - Fungal Infections", edition: "4th" },
          { book: "Roxburgh's Common Skin Diseases", chapter: "Fungal Infections", edition: "20th" }
        ],
      },
      {
        layer: 5,
        slug: "fungal-infections-layer-5-active-recall",
        title: "Fungal Infections - Active Recall",
        estimatedMinutes: 30,
        summary: "Flashcard Q&A pairs for fungal infections diagnosis and management.",
        contentMd: `# Fungal Infections - Active Recall Flashcards

## Q1: Dermatophyte Organisms
**Q: Name the three genera of dermatophytes and give one organism from each.**
A: Trichophyton (T. rubrum, T. mentagrophytes), Microsporum (M. canis, M. gypseum), Epidermophyton (E. floccosum)

## Q2: Epidemiology India
**Q: What is the prevalence of tinea corporis in India?**
A: 20-25% of population; highest prevalence in tropical/subtropical regions

## Q3: Tinea Classification Sites
**Q: List five types of tinea based on location.**
A: Tinea corporis (body), Tinea pedis (foot), Tinea cruris (groin), Tinea unguium/onychomycosis (nail), Tinea capitis (scalp)

## Q4: KOH Mount Technique
**Q: What is the purpose of KOH in fungal diagnosis?**
A: 10-20% KOH dissolves cellular components (keratin, nuclear material), allowing visualization of fungal elements (septate hyphae, yeast)

## Q5: Culture Medium
**Q: What is the standard culture medium for dermatophytes?**
A: Sabouraud dextrose agar (SDA); slow growth (2-4 weeks), requires room temperature incubation

## Q6: Candidiasis Risk Factors
**Q: Name five risk factors for candidiasis.**
A: Immunosuppression (HIV), antibiotics (destroy normal flora), pregnancy, diabetes mellitus, occlusion/moisture

## Q7: Candida Species
**Q: Which Candida species is most common, and which are increasingly resistant?**
A: C. albicans is most common (80%); C. tropicalis and C. glabrata increasingly resistant

## Q8: Pityriasis Versicolor Organism
**Q: What organism causes pityriasis versicolor, and what is its unique characteristic?**
A: Malassezia furfur (lipophilic yeast); requires long-chain fatty acids (C11-C24) for growth

## Q9: Wood's Lamp Findings
**Q: What are the Wood's lamp findings for pityriasis versicolor?**
A: Pale yellow-green or coppery-orange fluorescence (pathognomonic)

## Q10: KOH Pattern Versicolor
**Q: What is the characteristic KOH mount finding in pityriasis versicolor?**
A: "Spaghetti and meatballs" pattern (short septate hyphae + round yeast cells)

## Q11: Terbinafine Indication
**Q: What is the standard dose and duration of terbinafine for onychomycosis?**
A: 250 mg daily for 12 weeks (dermatophyte); 6 weeks for toenail, 12 weeks for fingernail

## Q12: Systemic Candidiasis Treatment
**Q: What is the first-line treatment for oral candidiasis in CD4 <50 patients?**
A: Fluconazole 200 mg daily; prophylaxis if CD4 <50 to prevent recurrence

## Q13: Diaper Dermatitis
**Q: Why does candida cause satellite lesions in diaper dermatitis?**
A: Occlusion and moisture in diaper area creates ideal environment; satellite lesions indicate cutaneous candida spread

## Q14: Kerion Definition
**Q: What is a kerion, and what does it indicate?**
A: Severe tinea capitis with pustules and lymphadenopathy; indicates strong host immune response; may need systemic therapy

## Q15: Id Reaction
**Q: What is an id reaction in fungal infection?**
A: Hypersensitivity skin reaction to fungal antigens manifesting as vesicles/urticaria; treat primary fungal infection to resolve id reaction`,
        mnemonics: [
          { text: "TME = Trichophyton, Microsporum, Epidermophyton (dermatophyte genera)", explanation: "Three main dermatophytes" },
          { text: "KOH: Septate hyphae (dermatophyte), Pseudohyphae (candida), Spores+hyphae (versicolor)", explanation: "Morphology patterns" },
          { text: "TERBINAFINE 12 weeks = Onychomycosis gold standard", explanation: "Drug of choice for nails" }
        ],
        keyPoints: [
          "Dermatophytes are keratinophilic; produce keratinases to invade skin",
          "KOH mount shows septate hyphae for dermatophytes; pseudohyphae for candida",
          "Sabouraud agar is standard culture medium for fungal identification",
          "Malassezia is lipophilic; causes pityriasis versicolor (NOT a dermatophyte)",
          "Pityriasis versicolor: 'spaghetti and meatballs' on KOH, fluorescence with Wood's lamp",
          "Candida transition from yeast to hyphal form increases virulence",
          "Terbinafine is fungicidal and highly effective for dermatophytes",
          "Onychomycosis requires prolonged systemic therapy (months); topical insufficient",
          "Fluconazole prophylaxis for CD4 <50 prevents oral candidiasis",
          "Id reaction is immune response to fungal antigen; improves with primary treatment"
        ],
        textbookRefs: [
          { book: "IADVL Textbook of Dermatology", chapter: "12 - Fungal Infections", edition: "4th" },
          { book: "Roxburgh's Common Skin Diseases", chapter: "Fungal Infections", edition: "20th" }
        ],
      },
    ],
  },
];
