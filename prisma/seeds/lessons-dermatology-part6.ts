import type { TopicLessons } from "./content-loader";

export const dermatologyLessonsPartSix: TopicLessons[] = [
  {
    topicCode: "DR-MOD-02-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "viral-infections-scabies-layer-1-foundation",
        title: "Viral Infections & Scabies - Foundation",
        estimatedMinutes: 25,
        summary: "Overview of common viral skin infections and scabies infestation with clinical presentations.",
        contentMd: `# Viral Infections & Scabies - Foundation

## Viral Infections

### Varicella (Chickenpox)
- **Agent**: Varicella-zoster virus (VZV); Herpesvirus 3
- **Transmission**: Respiratory droplets; highly contagious
- **Incubation**: 10-21 days
- **Clinical features**: 
  - Prodrome (malaise, fever 1-2 days)
  - Vesicular rash in crops: macule → papule → vesicle → pustule → crust (over 6-10 days)
  - "Dew drop on rose petal" appearance (vesicle on erythematous base)
  - Lesions at various stages of maturation ("crops")
  - Distribution: centripetalStart on trunk, spreads to face/extremities
- **Complications**: Bacterial superinfection, scarring, encephalitis, pneumonia

### Herpes Simplex Virus (HSV)
- **HSV-1**: Oral herpes; above waist typically
- **HSV-2**: Genital herpes; below waist typically
- **Primary infection**: Vesicles on erythematous base; painful, erosions
  - Prodrome: tingling, burning
  - Grouped vesicles ("cluster of pearls")
  - Regional lymphadenopathy
  - Duration: 7-10 days
- **Recurrent infection**: 
  - Shorter duration (3-7 days)
  - Triggered by stress, fever, immunosuppression, sun exposure
  - Prodrome often precedes lesions (hours to days)

### Molluscum Contagiosum
- **Agent**: Poxvirus (Molluscipoxvirus)
- **Transmission**: Direct contact, autoinoculation
- **Clinical features**: 
  - Umbilicated papules (2-5mm)
  - Firm, flesh-colored
  - Central dimple/umbilication with keratinous core
  - Often grouped
  - Painless
  - Itching may occur (molluscum dermatitis)

### Hand-Foot-and-Mouth Disease (HFMD)
- **Agent**: Enterovirus (Coxsackievirus A16, Enterovirus 71)
- **Presentation**: 
  - Vesicles on palms, soles
  - Erosions in mouth (painful)
  - May have rash on buttocks
  - Fever, malaise
  - Duration: 7-10 days

## Scabies

### Characteristics
- **Agent**: Sarcoptes scabiei var. hominis (mite)
- **Transmission**: Skin-to-skin contact, fomites
- **Incubation**: 2-6 weeks (primary infestation), hours to days (reinfection)
- **Prevalence**: Higher in developing countries; annual 130-300 million infections worldwide

### Clinical Features
- **Intense pruritus**: Worse at night; often no visible lesions in early phase
- **Burrows**: Thin, short (5-15mm), serpentine, grayish tracks between fingers
- **Distribution**: Hands (web spaces, fingers), wrists, armpits, groin, buttocks, genitalia
- **Secondary lesions**: Excoriations, pyogenic infection, lichenification
- **Nodular scabies**: Flesh-colored or erythematous nodules, pruritic

### Crusted (Norwegian) Scabies
- **High mite burden**: Thousands to millions of mites (vs 10-15 in typical scabies)
- **Presentation**: Hyperkeratotic, crusted plaques; often mistaken for psoriasis or eczema
- **Risk**: Immunocompromised (HIV, elderly, severe malnutrition)
- **Appearance**: Crusted, hyperkeratotic, plaques on palms, soles, elbows`,
        mnemonics: [
          { text: "Chickenpox = Crops of vesicles at various stages + 'dew drop on rose petal'", explanation: "Classic presentation" },
          { text: "HSV = Grouped vesicles + Prodrome + Recurrence", explanation: "Key features" },
          { text: "Molluscum = Umbilicated papule + Keratinous core", explanation: "Pathognomonic" },
          { text: "Scabies = Intense nocturnal pruritus + Burrows + Hands/wrists", explanation: "Clinical triad" }
        ],
        keyPoints: [
          "Varicella: highly contagious respiratory droplet transmission",
          "VZV lesions in crops at various stages; centripetal distribution",
          "HSV-1: oral lesions; HSV-2: genital (conventionally)",
          "Grouped vesicles (cluster of pearls) classic for HSV",
          "Molluscum: umbilicated papule with central keratinous core",
          "Hand-foot-mouth: vesicles on palms/soles + oral erosions",
          "Scabies: intense pruritus (worse at night), burrows in web spaces",
          "Burrows: thin, serpentine tracks (5-15mm); difficult to see",
          "Crusted scabies: high mite burden; immunocompromised patients",
          "Nodular scabies: flesh-colored/erythematous nodules; pruritic"
        ],
        textbookRefs: [
          { book: "IADVL Textbook of Dermatology", chapter: "11 - Viral Infections", edition: "4th" },
          { book: "Roxburgh's Common Skin Diseases", chapter: "Viral Infections & Parasitic Infestations", edition: "20th" }
        ],
      },
      {
        layer: 2,
        slug: "viral-infections-scabies-layer-2-mechanism",
        title: "Viral Infections & Scabies - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathogenesis of viral infections and scabies infestation mechanisms.",
        contentMd: `# Viral Infections & Scabies - Mechanism

## Viral Pathogenesis

### Varicella-Zoster Virus (VZV)
- **Entry**: Respiratory mucosa → viremia → dissemination to skin
- **Latency**: Remains in dorsal root ganglia after primary infection
- **Reactivation**: Herpes zoster (shingles) from VZV reactivation in nerve ganglia
- **Lesion formation**: 
  - Viral replication in epidermis → multinucleated giant cells (Langerhans giant cells)
  - Ballooning degeneration → vesicle formation
  - Inflammatory response → erythema, edema
- **Immunity**: Cell-mediated immunity critical; antibodies also important

### Herpes Simplex Virus (HSV)
- **Entry**: Mucosal or cutaneous epithelium
- **Replication**: Rapid in epithelial cells; destroys cellular architecture
- **Latency**: Dorsal root ganglion neurons; reactivation triggered by stress, fever, immunosuppression
- **Lesion formation**: 
  - Viral replication → syncytia formation
  - Multinucleated giant cells on Tzanck smear (diagnostic)
  - Ballooning degeneration → vesicle
- **Immune response**: Type I IFN, complement, NK cells limit spread

### Molluscum Contagiosum Virus (MCV)
- **Replication**: Cytoplasmic replication (unlike other viruses)
- **Lesion formation**: 
  - Hyperplasia of epidermis
  - Central core of keratinous debris and viral particles
  - Umbilication from pressure/trauma
- **Immune response**: Mild immune response; lesions persist without treatment
- **Molluscum dermatitis**: Type IV hypersensitivity to viral antigen causing perilesional eczema

## Scabies Pathogenesis

### Sarcoptes scabiei Lifecycle
- **Life cycle**: 10-14 days
- **Reproduction**: Fertilized female burrows into stratum corneum; lays eggs in burrow
- **Nymphs**: Hatch and migrate to skin surface
- **Adults**: Move to new sites; reinfect or transmit
- **Transmission**: Direct skin contact (most common); fomites (bedding, clothing)

### Host-Mite Interaction
- **Immune response**:
  - Sensitization phase (2-6 weeks): Asymptomatic mite colonization
  - Delayed hypersensitivity to mite antigens → pruritus, nodules
  - CD4+ T cell-mediated response
- **Pruritus mechanism**: 
  - Mite and feces trigger pruritus (sensitization)
  - Itch-scratch cycle → secondary bacterial infection
- **Burrow formation**: 
  - Female mite tunnels into stratum corneum
  - Deposits eggs and feces
  - Burrow ~2-3 mm per day
  - Burrows contain mites, eggs, feces (antigenic)

### Crusted Scabies
- **Pathophysiology**: 
  - Defective cell-mediated immunity → unrestricted mite multiplication
  - Thousands to millions of mites
  - Reduced pruritus (immune dysregulation)
  - Hyperkeratosis, crust formation
- **Risk factors**: HIV/AIDS (CD4 <50), elderly, malnutrition, immunosuppressive therapy`,
        mnemonics: [
          { text: "VZV → Chickenpox (primary) → Dorsal root ganglion latency → Shingles (reactivation)", explanation: "VZV lifecycle" },
          { text: "HSV = Multinucleated giant cells (Tzanck), latency in ganglia", explanation: "Key pathology" },
          { text: "Sarcoptes = Burrow in stratum corneum, lay eggs, cause sensitization", explanation: "Mite behavior" }
        ],
        keyPoints: [
          "VZV: respiratory entry → viremia → skin dissemination",
          "Latency in dorsal root ganglia; reactivation causes herpes zoster",
          "Ballooning degeneration in epidermis creates vesicles",
          "HSV: syncytia and multinucleated giant cells on histology",
          "Tzanck smear: multinucleated giant cells diagnostic for HSV/VZV",
          "Molluscum: cytoplasmic viral replication, central umbilication",
          "Molluscum dermatitis: Type IV hypersensitivity around lesions",
          "Scabies: 2-6 week sensitization before pruritus onset",
          "Burrows contain eggs, feces (antigenic); female burrows and reproduces",
          "Crusted scabies: millions of mites due to immune dysfunction"
        ],
        textbookRefs: [
          { book: "IADVL Textbook of Dermatology", chapter: "11 - Viral Infections", edition: "4th" },
          { book: "Robbins & Kumar Pathologic Basis of Disease", chapter: "25 - Skin Disorders", edition: "10th" }
        ],
      },
      {
        layer: 3,
        slug: "viral-infections-scabies-layer-3-clinical",
        title: "Viral Infections & Scabies - Clinical",
        estimatedMinutes: 35,
        summary: "Clinical diagnosis, management, and treatment of viral infections and scabies.",
        contentMd: `# Viral Infections & Scabies - Clinical

## Viral Infection Diagnosis & Management

### Varicella
- **Diagnosis**: Clinical (crops of vesicles at various stages)
- **Tzanck smear**: Multinucleated giant cells (helpful if diagnosis unclear)
- **PCR**: Sensitive; useful for immunocompromised patients
- **Management**:
  - Supportive: Analgesics, antipyretics, calamine lotion
  - Antiviral: Acyclovir 800mg 5× daily (15mg/kg/dose) for 7 days if high-risk
    - Indicated: >12 years old, immunocompromised, severe disease
  - Avoid aspirin (Reye syndrome risk)
  - Vaccination: 95% effective

### Herpes Simplex
- **Diagnosis**: 
  - Tzanck smear: Multinucleated giant cells
  - HSV PCR: Most sensitive
  - Viral culture: Slower but confirms
- **Management**:
  - **Primary HSV-1/2**: 
    - Acyclovir 400-800mg 5× daily × 7-10 days
    - Valacyclovir 500mg 3× daily × 7 days (better oral bioavailability)
  - **Recurrent HSV**: 
    - Episodic therapy: Acyclovir/valacyclovir at first sign of prodrome
    - Suppressive therapy: For frequent recurrences (>6/year)
  - **Severe/immunocompromised**: IV acyclovir 5-10 mg/kg 8-hourly
- **Topical**: Acyclovir cream or vidarabine (less effective than systemic)

### Molluscum Contagiosum
- **Diagnosis**: Clinical (umbilicated papules)
- **Dermoscopy**: Umbilication and central core visible
- **Management**:
  - **Observation**: Often self-limited; may resolve in 6-12 months
  - **Topical**:
    - Tretinoin, imiquimod, cantharidin, silver nitrate
    - Salicylic acid, lactic acid peels
  - **Destructive**:
    - Curettage under local anesthesia
    - Cryotherapy
    - Electrocautery
  - **Systemic**: Consider antiretrovirals in HIV patients

### Hand-Foot-Mouth Disease
- **Diagnosis**: Clinical (vesicles on palms/soles + oral erosions)
- **Management**:
  - Supportive: Analgesics, topical anesthetics for oral pain
  - Fluid intake: Monitor for dehydration
  - No specific antiviral therapy
  - Self-limited: Resolves in 7-10 days

## Scabies Diagnosis & Management

### Diagnosis
- **Burrow detection**: 
  - Ink test: Apply ink to skin, wipe off; burrows retain ink
  - Dermoscopy: Direct visualization of mite, eggs, feces
- **Microscopy**: Scrape burrow, mount on KOH; visualize mite, eggs, feces
- **Histology**: Hyperkeratosis, burrow with mite in stratum corneum
- **Clinical**: History of pruritus + distribution + response to treatment

### Scabicide Options
| Drug | Dose | Notes |
|------|------|-------|
| Permethrin 5% cream | Apply neck to toes; repeat after 1 week | First-line; safe in pregnancy |
| Benzyl benzoate 25% | Full-body application × 3 days | Irritating; inexpensive |
| Sulfur 5-10% ointment | Daily × 3 days | Safe in pregnancy/infants |
| Lindane 1% lotion | Single application | Avoid pregnancy/infants; neurotoxicity risk |
| Ivermectin oral | 200 μg/kg; repeat at 1-2 weeks | For crusted scabies; immunocompromised |

### Management
- **First-line**: Permethrin 5% cream (neck to toes); repeat after 1 week
- **Infants/pregnancy**: Sulfur 5% ointment daily × 3 days
- **Crusted scabies**: Oral ivermectin (higher doses, multiple doses)
- **Fomite treatment**: 
  - Wash bedding, clothing in hot water
  - Vacuum furniture
  - Dry clean non-washable items
- **Contact treatment**: Family, sexual contacts should be treated
- **Follow-up**: Reassess at 2 weeks; retreatment if needed`,
        mnemonics: [
          { text: "Varicella = Acyclovir (if >12y or high-risk); supportive care + vaccination", explanation: "Management approach" },
          { text: "HSV = Acyclovir/Valacyclovir; Episodic vs Suppressive", explanation: "Treatment choice" },
          { text: "Molluscum = Observation or destructive; curettage/cryo", explanation: "Management options" },
          { text: "Scabies = Permethrin 5% (neck to toes) × 2 weeks apart", explanation: "First-line treatment" }
        ],
        keyPoints: [
          "Chickenpox: mostly supportive; antivirals for high-risk patients",
          "Avoid aspirin in varicella (Reye syndrome risk)",
          "HSV: acyclovir/valacyclovir for primary and episodic treatment",
          "Suppressive therapy: for frequent HSV recurrences (>6/year)",
          "Molluscum: self-limited but may take months; treatable with curettage/cryo",
          "HFMD: self-limited; no specific antiviral therapy",
          "Scabies: permethrin 5% cream is first-line",
          "Ink test/dermoscopy helpful for scabies diagnosis",
          "Crusted scabies: treat with oral ivermectin + topical scabicide",
          "Contact tracing essential; treat family/sexual partners"
        ],
        textbookRefs: [
          { book: "IADVL Textbook of Dermatology", chapter: "11 - Viral Infections", edition: "4th" },
          { book: "Roxburgh's Common Skin Diseases", chapter: "Viral Infections & Parasitic Infestations", edition: "20th" }
        ],
      },
      {
        layer: 4,
        slug: "viral-infections-scabies-layer-4-exam",
        title: "Viral Infections & Scabies - Exam Prep",
        estimatedMinutes: 25,
        summary: "High-yield facts, differentials, and NEXT-pattern questions for viral infections and scabies.",
        contentMd: `# Viral Infections & Scabies - Exam Prep

## High-Yield Exam Facts
- **Varicella**: Highly contagious; incubation 10-21 days; crops of vesicles at various stages
- **"Dew drop on rose petal"**: Pathognomonic for chickenpox
- **HSV**: Grouped vesicles + prodrome; recurrent HSV common after primary infection
- **Molluscum**: Umbilicated papule; self-limited but takes months to resolve
- **Scabies**: Intense nocturnal pruritus + burrows + hands/wrists
- **Tzanck smear**: Multinucleated giant cells for HSV/VZV (diagnostic)

## Differential Diagnosis
### Vesicular Rashes:
- **Varicella**: Crops at various stages, centripetal, fever, highly contagious
- **HSV**: Grouped vesicles, recurrent, prodrome (tingling), localized
- **Bullous pemphigoid**: Tense bullae, negative Nikolsky, older patients
- **Hand-foot-mouth**: Vesicles on palms/soles + oral erosions, enterovirus

### Papules (Molluscum vs Others):
- **Molluscum**: Umbilicated, keratinous core, flesh-colored
- **Verruca**: No umbilication, rough surface, often multiple
- **Lichen nitidus**: Tiny papules, not umbilicated

### Pruritus with No Visible Lesions (Early Scabies):
- **Scabies**: Intense nocturnal pruritus, family involvement, burrows if looked for
- **Atopic dermatitis**: Flexural, family history, dry skin
- **Urticaria**: Transient, blanching, evanescent

## NEXT-Pattern Questions
### Recall (10%):
- Q: "Clustered vesicles on lip with prodromal tingling is?" → A: Herpes simplex
- Q: "Umbilicated papules with central keratinous core is?" → A: Molluscum contagiosum

### Analysis (30%):
- Q: "Crops of vesicles at various stages on trunk + fever. Most likely diagnosis?" → A: Varicella (chickenpox)
- Q: "Intense pruritus at night, web spaces of fingers, no visible lesions initially. Likely diagnosis?" → A: Scabies (early phase before burrows visible)

### Problem-Solving (60%):
- Q: "24-year-old with primary HSV-2, erosions on genitalia. Appropriate treatment and duration?" → A: Acyclovir 400mg 5× daily × 10 days (or valacyclovir 500mg 3× daily × 7 days)
- Q: "Severely immunocompromised patient (CD4 <50) with crusted scabies. Why is oral ivermectin preferred?" → A: Topical scabicides may not penetrate thick crusts; oral ivermectin achieves systemic levels; higher parasite burden requires multiple doses

## Clinical Pearls
- **Reye syndrome**: Avoid aspirin in chickenpox (use acetaminophen/ibuprofen)
- **Eczema herpeticum**: HSV disseminating in eczema patients; potentially life-threatening
- **Erythema multiforme**: Can be triggered by HSV recurrences
- **Varicella vaccination**: 95% efficacy; booster may be needed
- **Scabies transmission**: Asymptomatic contact transmission before symptoms appear
- **Norwegian scabies**: Medical emergency; requires aggressive treatment

## Common Mistakes
- Confusing varicella with chickenpox (same disease)
- Missing HSV diagnosis because lesions not examined (clinician error)
- Prescribing aspirin for chickenpox (Reye syndrome risk)
- Using lindane in children (neurotoxicity)
- Not treating scabies contacts (reinfection occurs)
- Missing crusted scabies (mistaken for psoriasis/eczema)`,
        mnemonics: [
          { text: "TZANCK = Multinucleated giant cells (HSV/VZV diagnostic)", explanation: "Rapid diagnostic test" },
          { text: "Varicella = Crops + Centripetal + Highly contagious", explanation: "Key features" },
          { text: "Scabies = Intense nocturnal + Burrows + Hands/wrists + Contacts", explanation: "Diagnostic triad" }
        ],
        keyPoints: [
          "Chickenpox: vesicles in crops at various stages ('dew drop on rose petal')",
          "Tzanck smear: multinucleated giant cells diagnostic for HSV and VZV",
          "Acyclovir: first-line antiviral; varicella if >12 yrs or high-risk",
          "HSV: episodic therapy at prodrome; suppressive for frequent recurrences",
          "Molluscum: self-limited but persists for months; curettage definitive",
          "Scabies diagnosis: clinical + ink test/dermoscopy + response to therapy",
          "Permethrin 5%: first-line scabicide; repeat after 1 week",
          "Crusted scabies: treat contacts, wash fomites, use ivermectin + topical",
          "Post-streptococcal sequelae not relevant; varicella can cause bacterial superinfection",
          "Avoid aspirin in chickenpox (Reye syndrome); use acetaminophen/ibuprofen"
        ],
        textbookRefs: [
          { book: "IADVL Textbook of Dermatology", chapter: "11 - Viral Infections", edition: "4th" },
          { book: "Roxburgh's Common Skin Diseases", chapter: "Viral Infections & Parasitic Infestations", edition: "20th" }
        ],
      },
      {
        layer: 5,
        slug: "viral-infections-scabies-layer-5-active-recall",
        title: "Viral Infections & Scabies - Active Recall",
        estimatedMinutes: 30,
        summary: "Flashcard Q&A pairs for viral infections and scabies diagnosis and treatment.",
        contentMd: `# Viral Infections & Scabies - Active Recall Flashcards

## Q1: Varicella Incubation
**Q: What is the incubation period for varicella (chickenpox)?**
A: 10-21 days; average 14 days

## Q2: VZV Classification
**Q: What virus causes varicella and where does it establish latency?**
A: Varicella-zoster virus (VZV, Herpesvirus 3); establishes latency in dorsal root ganglia

## Q3: Chicken Pox Distribution
**Q: What is the distribution pattern of varicella lesions, and what term describes this?**
A: Centripetal distribution (chest/trunk first, then face and extremities); crops appear in waves

## Q4: Dew Drop
**Q: What is the "dew drop on rose petal" appearance in chickenpox?**
A: Clear or turbid vesicle (dew drop) on an erythematous base (rose petal); pathognomonic for varicella

## Q5: HSV Clustering
**Q: Why are HSV lesions classically described as appearing in clusters?**
A: Multiple vesicles arise from same area due to virus spreading between adjacent keratinocytes ("cluster of pearls")

## Q6: Prodrome Duration
**Q: What is the typical duration of HSV prodrome before visible lesions appear?**
A: Hours to 1-2 days; symptoms include tingling, burning, or pain at site of future lesions

## Q7: HSV-1 vs HSV-2
**Q: Compare the typical locations of HSV-1 and HSV-2 infections.**
A: HSV-1: above waist (oral, labial); HSV-2: below waist (genital); overlap exists (non-exclusive)

## Q8: Molluscum Epidemiology
**Q: What is the epidemiologic significance of molluscum contagiosum in immunocompromised patients?**
A: More common and extensive lesions; may persist for years without treatment in HIV/AIDS patients

## Q9: Molluscum Dermatitis
**Q: What is molluscum dermatitis, and what type of immune response causes it?**
A: Eczematous reaction around molluscum lesions; Type IV hypersensitivity to viral antigens

## Q10: HFMD Enteroviruses
**Q: What are the causative organisms of hand-foot-and-mouth disease?**
A: Coxsackievirus A16 (most common) and Enterovirus 71 (associated with severe disease)

## Q11: Scabies Sensitization
**Q: Why does scabies typically not cause pruritus immediately upon transmission?**
A: Requires sensitization phase (2-6 weeks) for immune response to develop; asymptomatic colonization first

## Q12: Burrow Characteristics
**Q: Describe the characteristics of scabies burrows and where they are most commonly found.**
A: Thin (5-15mm), serpentine, grayish tracks in stratum corneum; most common in web spaces between fingers, wrists, flexural areas

## Q13: Scabies Mite Burden
**Q: Compare the typical mite burden in regular scabies versus crusted scabies.**
A: Regular scabies: 10-15 mites; Crusted scabies: thousands to millions of mites

## Q14: Permethrin Application
**Q: What is the proper application technique for permethrin 5% cream for scabies?**
A: Apply from neck downward to entire body including web spaces, genitalia, and under nails; repeat application after 1 week

## Q15: Crusted Scabies Risk
**Q: What populations are at highest risk for developing crusted scabies?**
A: Immunocompromised (HIV/AIDS with CD4 <50), elderly, severe malnutrition, chronic systemic diseases`,
        mnemonics: [
          { text: "VARICELLA = VZV + Chickenpox + Dorsal root latency + Shingles reactivation", explanation: "VZV pathology" },
          { text: "HSV = Grouped + Prodrome + Recurrence + Ganglia latency", explanation: "Key features" },
          { text: "SCABIES = Nocturnal + Burrows + Hands + Sensitization 2-6 weeks", explanation: "Clinical presentation" }
        ],
        keyPoints: [
          "Varicella: crops at various stages; 'dew drop on rose petal' pathognomonic",
          "VZV: respiratory entry → viremia → skin → latency in ganglia",
          "Tzanck smear: multinucleated giant cells for HSV/VZV diagnosis",
          "HSV-1: above waist (oral); HSV-2: below waist (genital)",
          "Primary HSV: acyclovir 400mg 5× daily × 7-10 days",
          "Suppressive HSV therapy: for frequent recurrences (>6/year)",
          "Molluscum: umbilicated papule; self-limited (6-12 months)",
          "HFMD: vesicles on palms/soles + oral erosions; self-limited",
          "Scabies: intense nocturnal pruritus; 2-6 week sensitization",
          "Permethrin 5%: first-line; apply neck to toes; repeat after 1 week",
          "Crusted scabies: millions of mites; treat with ivermectin + topical",
          "Contact tracing essential; treat family and sexual partners"
        ],
        textbookRefs: [
          { book: "IADVL Textbook of Dermatology", chapter: "11 - Viral Infections", edition: "4th" },
          { book: "Roxburgh's Common Skin Diseases", chapter: "Viral Infections & Parasitic Infestations", edition: "20th" }
        ],
      },
    ],
  },
];
