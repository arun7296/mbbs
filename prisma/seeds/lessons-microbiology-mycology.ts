import type { TopicLessons } from "./content-loader";

export const microbiologyMycologyLessons: TopicLessons[] = [
  {
    topicCode: "MI-MOD-06-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "mycoses-layer-1-foundation",
        title: "Superficial & Deep Mycoses - Foundation",
        estimatedMinutes: 25,
        summary: "Fungal classification, morphology, dermatophytes, Candida, Aspergillus, Cryptococcus. Pathogenic mechanisms and epidemiology in immunocompetent vs immunocompromised hosts.",
        contentMd: `# Superficial & Deep Mycoses - Foundation

## Fungal Classification

### Morphology & Growth
- **Filamentous Fungi (Molds)**: Hyphae (septate or aseptate), mycelium
- **Yeasts**: Unicellular, reproduce by budding (Candida, Cryptococcus)
- **Dimorphic Fungi**: Yeast in body (37°C), mold in environment (25°C)

### Medically Important Fungi Classification
| Category | Examples | Growth Characteristics |
|----------|----------|----------------------|
| **Dermatophytes** | Trichophyton, Microsporum, Epidermophyton | Septate mold, keratinolytic |
| **Candida** | Candida albicans (most common) | Yeast + pseudohyphae |
| **Aspergillus** | A. fumigatus, A. niger, A. flavus | Septate mold, spore-forming |
| **Cryptococcus** | C. neoformans | Encapsulated yeast |
| **Dimorphic** | Histoplasma, Blastomyces, Coccidioides | Yeast in vivo, mold in vitro |

## Dermatophytes

### Epidemiology
- **Causative Agents**: Trichophyton tonsurans, T. rubrum (most common globally), T. mentagrophytes, Microsporum canis, Epidermophyton floccosum
- **Keratinolytic**: Specific ability to digest keratin (skin, nails, hair)
- **Transmission**: Person-to-person (anthropophilic), animal contact (zoophilic), soil (geophilic)

### Clinical Forms (Tinea)
- **Tinea Pedis (Athlete's Foot)**: Interdigital maceration, scaling, itching
- **Tinea Corporis (Ringworm)**: Annular lesions with raised borders, central clearing
- **Tinea Capitis (Scalp Ringworm)**: Hair loss, scaling, alopecia (children)
- **Tinea Unguium (Onychomycosis)**: Nail discoloration, thickening, crumbling
- **Tinea Cruris (Jock Itch)**: Groin/gluteal region, similar to corporis

### Indian Context
- **Prevalence**: High in tropical, humid climate; increased with poor hygiene, overcrowding
- **Common Species**: T. mentagrophytes, T. rubrum, Microsporum canis (animal contact)
- **Seasonal**: Year-round; peaks monsoon (humidity)

## Candida Albicans

### Virology & Commensalism
- **Normal Flora**: Colonizes mouth, vagina, GI tract
- **Polymorphic**: Yeast (asexual reproduction), pseudohyphae (hyphal-like structures), true hyphae
- **Opportunistic**: Pathogenic when immunity compromised
- **Virulence Factors**: Adhesins, phospholipases, aspartic proteases, phenotypic switching

### Superficial Candidiasis
- **Oral Candidiasis (Thrush)**: White patches on tongue, palate, esophagus; immunocompromised or antibiotic use
- **Vaginal Candidiasis**: Vulvovaginal itching, discharge; risk with antibiotics, immunosuppression
- **Cutaneous Candidiasis**: Inframammary, perianal, diaper areas; maceration, satellite lesions

### Invasive Candidiasis
- **Candidemia**: Bloodborne disseminated infection; ICU, central lines, neutropenia risk
- **Disseminated**: Organs (kidneys, lungs, CNS), endocarditis (IV drug use)
- **Risk Factors**: CD4 <50 (AIDS), neutropenia, central vascular catheter, recent antibiotics

## Aspergillus

### Virology & Environmental
- **Spore-Forming Mold**: Conidiophore with spore chains
- **Ubiquitous**: Soil, decaying vegetation, air (building contamination)
- **Inhalation Route**: Spores inhaled; deposit in lungs
- **Thermotolerant**: A. fumigatus grows at body temperature (37°C)

### Forms of Aspergillosis
- **Allergic**: Hypersensitivity to spores; ABPA (Allergic Bronchopulmonary Aspergillosis)
- **Aspergilloma (Fungal Ball)**: Colonization of pre-existing cavities (TB cavities, bullae)
- **Invasive Aspergillosis**: Pneumonia, disseminated; neutropenic/immunocompromised

## Cryptococcus Neoformans

### Virology & Epidemiology
- **Encapsulated Yeast**: Polysaccharide capsule (virulence factor)
- **Environmental Source**: Pigeon droppings, soil (worldwide)
- **Inhalation**: Primary pulmonary infection; can disseminate to CNS
- **Meningitis Risk**: CD4 <100 (AIDS); cryptococcal meningitis leading cause of death in sub-Saharan Africa
`,
        mnemonics: [
          {
            text: "CAD for Candida-Aspergillus-Dermatophyte",
            explanation: "C=Candida albicans (yeast, normal flora, CD4<200 risk), A=Aspergillus fumigatus (spores, ABPA, invasive), D=Dermatophytes (keratinolytic, tinea)"
          },
          {
            text: "Crypto = Capsule Protection",
            explanation: "C=Capsule antiphagocytic, R=RNA fungal, Y=Yeast form, P=Pigeon droppings source, T=Treacherous CNS dissemination, O=Opportunistic CD4<100"
          }
        ],
        keyPoints: [
          "Dermatophytes: Keratinolytic fungi causing tinea in various body sites; human/animal/soil sources",
          "Candida: Yeast, normal flora; superficial (oral/vaginal) in immunocompetent; invasive CD4<50",
          "Aspergillus: Spore-forming mold; ABPA in asthmatics, aspergilloma in cavitary disease, invasive in neutropenic",
          "Cryptococcus: Encapsulated yeast; pulmonary then CNS dissemination; CD4<100 meningitis risk",
          "India context: Dermatophytes endemic, tinea common; Candida vaginal infections frequent; Aspergillus pulmonary disease emerging"
        ],
        textbookRefs: [
          { book: "Jawetz Melnick & Adelberg's Medical Microbiology", chapter: "42-43: Fungi", edition: "28th" },
          { book: "Ananthanarayan & Paniker's Textbook of Microbiology", chapter: "Mycology", edition: "11th" }
        ]
      },
      {
        layer: 2,
        slug: "mycoses-layer-2-mechanism",
        title: "Superficial & Deep Mycoses - Mechanism",
        estimatedMinutes: 30,
        summary: "Fungal pathogenesis mechanisms, immune evasion strategies, CD4 count thresholds for opportunistic mycoses, and tissue invasion mechanisms.",
        contentMd: `# Superficial & Deep Mycoses - Mechanism

## Dermatophyte Mechanisms

### Keratinolytic Enzyme System
- **Keratinolytic Proteases**: Serine proteases, metalloproteases digest keratin structure
- **Lipases**: Break down lipid barrier
- **Elastase**: Cleaves elastin in dermal connective tissue
- **Chronic Infection**: Immune tolerance allows continued fungal colonization
- **Host Immune Response**: CD4+ T cells, IL-17 producing cells (Th17) critical for resolution

## Candida Pathogenesis in Immunocompromised

### CD4 Count Thresholds
- **CD4 >200**: Uncommon candidiasis; superficial only (thrush, vaginitis)
- **CD4 100-200**: Oral candidiasis common; esophageal possible
- **CD4 <50**: Esophageal candidiasis frequent; invasive disease risk

### Yeast-Hyphal Transition
- **Morphologic Polymorphism**: Environmental signals (temperature, CO2, nutrients) trigger switch
- **Hyphal Pseudohyphae**: More invasive; higher virulence
- **Protease Production**: Increased at hyphal form; Sap genes (serine aspartic proteases)
- **Tissue Invasion**: Pseudohyphae penetrate epithelial barriers; abscess formation in deep tissues

### Virulence Factors
- **Adhesins**: Als (Agglutinin-like substances), Int1p bind epithelial cells
- **Hydrolytic Enzymes**: Secreted aspartic proteases (Sap1-10), lipases
- **Superoxide Dismutase (SOD)**: Detoxifies ROS; immune evasion
- **Phenotypic Switching**: White-opaque switching changes adhesion, virulence patterns

## Aspergillus Fumigatus Immune Evasion

### Spore Deposition & Germination
- **Particle Size**: 2-3 μm spores bypass upper airway, deposit deep in alveoli
- **Conidia Coating**: Hydrophobic layer (RodA, MODA) initially prevents immune recognition
- **Swelling & Germination**: 24-48 hours; β-glucan exposed → TLR/Dectin-1 recognition

### Antigen Masking
- **Melanin Production**: Black pigment absorbs ROS (superoxide, peroxide); increases survival
- **Catabolite Repression**: β-glucan and mannans hidden from immune recognition in certain growth phases
- **Cell Wall Remodeling**: Dynamic changes in exposed antigens
- **Result**: Prolonged survival in immunocompromised hosts

### ABPA Pathophysiology
- **Allergic Response**: Th2 dominance, high IgE against Aspergillus antigens
- **Non-invasive Colonization**: Hypersensitivity to fungal antigens, not direct invasion
- **Type III Hypersensitivity**: Immune complexes in lungs → inflammation
- **Result**: Eosinophilic infiltrates, pulmonary infiltrates, bronchiectasis

## Cryptococcus Neoformans Evasion

### Capsule & Polysaccharides
- **Capsule Antiphagocytic**: Polysaccharide coating prevents C3b deposition (complement evasion)
- **Shedding**: Shed capsule polysaccharides circulate; create immunologic "noise"
- **Glucuronoxylomannan (GXM)**: Main capsular antigen; immunosuppressive (IL-10 increase, IL-12 decrease)
- **Molecular Mimicry**: GXM resembles mammalian hyaluronic acid; reduced immune response

### CNS Invasion Mechanisms
- **BBB Penetration**: Possible via infected macrophages (Trojan horse mechanism), direct transcytosis
- **Meningitis Pathophysiology**: Inflammation (minimal due to capsule antiphagocytic properties), vasculitis, hydrocephalus
- **Increased ICP**: Impaired CSF absorption + hydrocephalus → high intracranial pressure
`,
        mnemonics: [
          {
            text: "Candida CD4 Threshold",
            explanation: "C=CD4>200 (rare), D=CD4 100-200 (oral), I=CD4<50 (invasive), A=All count-dependent risk"
          },
          {
            text: "Aspergillus SPORE Escape",
            explanation: "S=Spore small 2-3μm, P=Penetrates alveoli, O=Opacity (RodA coating), R=ROS scavenging (melanin), E=Escape antigen masking"
          }
        ],
        keyPoints: [
          "Candida: Yeast-hyphal transition increases virulence; proteases (Sap) tissue invasion; CD4-dependent risk",
          "Aspergillus: Melanin antioxidant evasion; ABPA non-invasive Th2 response; angioinvasion in neutropenic",
          "Cryptococcus: Capsule antiphagocytic; GXM immunosuppressive; Trojan horse CNS penetration",
          "CD4 thresholds critical: <200 fluconazole indicated; <100 multiple OI risk; <50 invasive mycoses likely",
          "Immune restoration: CD4 recovery on ART restores anti-fungal immunity; prophylaxis can stop when CD4>200×3mo"
        ],
        textbookRefs: [
          { book: "Jawetz Melnick & Adelberg's Medical Microbiology", chapter: "42-43: Fungal Pathogenesis", edition: "28th" },
          { book: "Molecular Virology textbooks", chapter: "Fungal Mechanisms", edition: "Current" }
        ]
      },
      {
        layer: 3,
        slug: "mycoses-layer-3-clinical",
        title: "Superficial & Deep Mycoses - Clinical",
        estimatedMinutes: 35,
        summary: "Clinical presentations of dermatophytosis, candidiasis, aspergillosis, cryptococcosis. Diagnosis (KOH, culture, antigen), treatment regimens, and prophylaxis in immunocompromised.",
        contentMd: `# Superficial & Deep Mycoses - Clinical

## Dermatophytosis (Tinea)

### Clinical Presentations
- **Tinea Pedis**: Interdigital maceration, scaling, fissuring; itching, burning
- **Tinea Corporis**: Annular erythematous plaques, raised borders, central clearing (classic ringworm appearance)
- **Tinea Capitis**: Alopecia (hair loss), scaling; children typically; rare in adults
- **Tinea Unguium (Onychomycosis)**: Distal subungual (most common), lateral, proximal; distal = yellow-brown discoloration
- **Tinea Cruris (Jock Itch)**: Groin/upper medial thighs, sparing scrotum (differentiates from candida)

### Diagnosis
- **KOH Mount**: Specimen scrapings with 10-20% KOH; shows branching septate hyphae; specificity ~85%
- **Culture**: Sabouraud dextrose agar (SDA), Dermatophyte Test Medium (DTM); 2-4 weeks incubation
- **Wood Lamp**: Limited utility; most dermatophytes don't fluoresce

### Treatment
- **Topical**: Terbinafine, miconazole, tolnaftate (tinea pedis/corporis/cruris); 2-4 weeks duration
- **Oral**: Terbinafine (first-line for tinea unguium), griseofulvin, itraconazole
  - Terbinafine: 250 mg daily × 6 weeks (fingernails), 12 weeks (toenails)
  - Griseofulvin: Older; longer treatment

## Candidiasis

### Oral Candidiasis (Thrush)
- **Presentation**: White patches on tongue, palate, buccal mucosa; can be scraped off (pseudomembrane)
- **Risk**: Antibiotics (disrupts flora), inhaled corticosteroids, CD4 <200 (AIDS)
- **Diagnosis**: Clinical; KOH shows budding yeast
- **Treatment**: Topical miconazole/nystatin; oral fluconazole 100-200 mg daily × 7-14 days for esophageal

### Vaginal Candidiasis
- **Presentation**: Vulvovaginal itching, erythema, thick white vaginal discharge ("cottage cheese")
- **Predisposing**: Antibiotics, diabetes, pregnancy, hormonal contraceptives
- **Diagnosis**: Wet mount (budding yeast, pseudohyphae), culture if recurrent
- **Treatment**: Fluconazole 150 mg single dose OR topical azoles (miconazole, clotrimazole)

### Esophageal Candidiasis
- **Presentation**: Dysphagia, odynophagia (pain with swallowing), heartburn
- **Risk**: CD4 <100 (AIDS-defining illness in HIV)
- **Diagnosis**: Endoscopy (white plaques); biopsy culture
- **Treatment**: Fluconazole 200-400 mg daily × 14-21 days; IV amphotericin B if severe

### Invasive Candidiasis (Candidemia)
- **Presentation**: Fever, positive blood cultures; may have disseminated lesions (skin, fundus)
- **Risk**: Central venous catheter, broad-spectrum antibiotics, neutropenia, ICU
- **Diagnosis**: Blood culture (grows in 3-5 days), Candida PCR (emerging; faster)
- **Treatment**: Fluconazole 400 mg daily (step-down from IV echinocandin); remove line if possible

## Aspergillosis

### Aspergilloma (Fungal Ball)
- **Risk**: Pre-existing cavitary disease (TB cavity, bullae, cyst)
- **Presentation**: Hemoptysis, cough, dyspnea
- **Diagnosis**: CXR/CT shows "air crescent sign" (mass with halo in cavity); IgG anti-Aspergillus+
- **Treatment**: Surgical resection (curative); antifungal (itraconazole, voriconazole) if not surgical candidate

### Invasive Aspergillosis
- **Risk**: Neutropenia (<500 neutrophils), hematologic malignancy, transplantation, prolonged corticosteroids
- **Presentation**: Fever unresponsive to antibiotics, dyspnea, chest pain, hemoptysis
- **Diagnosis**: CT (halo sign = hemorrhage around nodule), bronchoalveolar lavage (BAL) culture, galactomannan antigen
- **Treatment**: Voriconazole 6 mg/kg IV Q12h (preferred); itraconazole, liposomal amphotericin B (alternatives)
- **Prognosis**: Mortality 50-80% in neutropenic; dependent on immune recovery

### ABPA (Allergic Bronchopulmonary Aspergillosis)
- **Risk**: Asthmatics, cystic fibrosis
- **Presentation**: Asthma exacerbation, fever, hemoptysis, cough
- **Diagnosis**: High IgE (often >500), IgG anti-Aspergillus+, eosinophilia (>1000), pulmonary infiltrates
- **Treatment**: Corticosteroids (prednisolone 0.5 mg/kg daily tapered) + antifungal (itraconazole 200 mg BID)
- **Monitoring**: IgE levels (decline indicates response); repeat CT imaging

## Cryptococcosis

### Pulmonary Cryptococcosis
- **Presentation**: Asymptomatic to mild pneumonia; cough, dyspnea
- **Diagnosis**: Sputum culture, serum/CSF cryptococcal antigen (PCR >95% sensitivity)
- **Treatment**: Fluconazole 400 mg daily (mild-moderate); amphotericin B + flucytosine (severe)

### Cryptococcal Meningitis
- **Risk**: CD4 <100 (AIDS); India endemic in certain regions
- **Presentation**: Subacute fever, headache, neck stiffness (often minimal)
- **CSF Findings**: Lymphocytic pleocytosis (10-100 WBC), elevated protein, low glucose, India ink positive (60%)
- **Diagnosis**: Cryptococcal antigen in CSF (>95% sensitivity); culture (1-2 weeks)
- **Treatment**:
  - **Induction** (2 weeks): Amphotericin B 0.7 mg/kg IV daily + Flucytosine 25 mg/kg QID
  - **Consolidation** (8 weeks): Fluconazole 400 mg daily
  - **Maintenance** (until CD4 >200 × 3 months): Fluconazole 200 mg daily
- **Prognosis**: Mortality 25% with treatment; 100% without
`,
        mnemonics: [
          {
            text: "Tinea CURE Locations",
            explanation: "C=Corporis (body), U=Unguium (nails), R=Rubrum (most common species), E=Extensive distribution"
          },
          {
            text: "Crypto CNS Treatment Days",
            explanation: "C=Consolidation (8 weeks fluconazole), N=Needs induction (2 weeks ampho+fluco), S=Sequel fluconazole long-term"
          }
        ],
        keyPoints: [
          "Tinea: KOH mount diagnostic; topical terbinafine/azoles for superficial; oral for nails/extensive",
          "Candida oral/vaginal: Common in immunocompetent; invasive disease in CD4<50; fluconazole first-line",
          "Aspergillus: Spore-forming; ABPA Th2 response (IgE high, steroids+antifungal); invasive high mortality",
          "Cryptococcal meningitis: CD4<100 risk; amphotericin B+flucytosine induction, fluconazole consolidation/maintenance",
          "Prophylaxis: Fluconazole 200mg daily when CD4<200; discontinue when CD4>200×3 months on ART"
        ],
        textbookRefs: [
          { book: "Jawetz Melnick & Adelberg's Medical Microbiology", chapter: "42-43: Fungal Clinical Diseases", edition: "28th" },
          { book: "Harrison's Principles of Internal Medicine", chapter: "213-219: Fungal Diseases", edition: "21st" }
        ]
      },
      {
        layer: 4,
        slug: "mycoses-layer-4-exam-prep",
        title: "Superficial & Deep Mycoses - Exam Prep",
        estimatedMinutes: 25,
        summary: "High-yield facts, diagnostic approaches, rapid treatments, and CD4 thresholds for board exams.",
        contentMd: `# Superficial & Deep Mycoses - Exam Prep

## Rapid Diagnostics Quick Reference

### KOH Mount Features
| Fungus | Appearance | Special Features |
|--------|-----------|------------------|
| **Dermatophyte** | Branching septate hyphae | Chains, regular pattern |
| **Candida** | Budding yeast, pseudohyphae | Branching angles, smaller |
| **Cryptococcus** | Budding yeast (usually round) | Broad base buds, India ink capsule |

### Culture Growth Characteristics
| Fungus | Growth Rate | Medium | Colony Appearance |
|--------|-----------|--------|-------------------|
| **Dermatophyte** | 2-4 weeks | DTM, SDA | White/tan; DTM red color |
| **Candida** | 24-48 hours | SDA | White, smooth (can take 2-4d) |
| **Aspergillus** | 3-7 days | SDA | White/tan, powdery spores |
| **Cryptococcus** | 2-7 days | SDA | Mucoid (capsule), tan/brown |

## Treatment Quick Reference

### Dermatophytes
| Location | Topical | Oral |
|----------|---------|------|
| **Corporis/Pedis/Cruris** | Terbinafine, miconazole (2-4 wks) | Not usually needed |
| **Unguium** | NOT effective | Terbinafine 250mg daily (6-12 wks) |
| **Capitis (Children)** | Ineffective | Griseofulvin or terbinafine (4-6 wks) |

### Candidiasis
| Form | First-Line | Alternative |
|------|-----------|------------|
| **Oral Thrush** | Nystatin swish/spit OR Fluconazole 100mg daily | Miconazole topical |
| **Esophageal** | Fluconazole 200-400mg daily | Amphotericin B IV |
| **Vaginal** | Fluconazole 150mg single dose | Topical azole (3-7d) |
| **Invasive/Candidemia** | Fluconazole 400mg daily | Echinocandin IV, then fluconazole |

### Aspergillosis
| Form | First-Line | Duration |
|------|-----------|----------|
| **ABPA** | Prednisone 0.5mg/kg + Itraconazole 200mg BID | 8-12 weeks |
| **Aspergilloma** | Surgical resection | Definitive |
| **Invasive** | Voriconazole 6mg/kg IV Q12h | Until CD4 >200 (if HIV) |

### Cryptococcosis
| Phase | Regimen | Duration |
|-------|---------|----------|
| **Induction** | Ampho B 0.7mg/kg IV + Flucytosine 25mg/kg QID | 2 weeks |
| **Consolidation** | Fluconazole 400mg daily | 8 weeks |
| **Maintenance** | Fluconazole 200mg daily | Until CD4 >200 × 3 months |

## CD4 Count Thresholds (HIV-Associated)

### Prophylaxis Indications
- **CD4 <200**: Start fluconazole 200mg daily (Candida + Cryptococcus prophylaxis)
- **CD4 <50**: Add prophylaxis for Aspergillus (data limited, not universal)

### Can Discontinue Prophylaxis
- **CD4 >200 × 3 consecutive months on ART**: Safe to stop fluconazole

## Rapid-Fire Facts
- **Dermatophyte Incubation**: 7-10 days typically
- **Candida Growth**: 24-48 hours in culture (fastest)
- **Cryptococcal Antigen**: Most sensitive diagnosis (>95%)
- **ABPA IgE**: Often >500 IU/mL (markedly elevated)
- **Invasive Aspergillus Mortality**: 50-80% even with treatment
- **Cryptococcal Meningitis**: Most common cause CNS infection in sub-Saharan Africa with HIV
- **KOH Sensitivity**: ~85% for dermatophytes; requires microscopy skill
- **Terbinafine Advantage**: Better for nails than griseofulvin; shorter duration
`,
        mnemonics: [
          {
            text: "CD4 Mycoses Risk",
            explanation: "C=CD4 <200 (start prophylaxis), D=Declines with immune loss, 4=Fungi four major (C.alb, A.fum, C.neo, Dermatophyte), M=Multiple agents used"
          },
          {
            text: "CRYPTO-TREATMENT",
            explanation: "C=CNS involvement, R=Requires amphotericin B, Y=Years of prophylaxis?, P=Prolonged consolidation, T=Two-week induction, O=Only fluconazole after induction"
          }
        ],
        keyPoints: [
          "KOH mount: Branching septate hyphae dermatophytes; budding yeast candida",
          "Culture: Dermatophytes 2-4 weeks; Candida 24-48h; Cryptococcus 2-7d; Aspergillus 3-7d",
          "Terbinafine preferred for tinea unguium; griseofulvin older, longer treatment",
          "Cryptococcal antigen: Most sensitive diagnosis; PCR >95%",
          "CD4<200: Start fluconazole 200mg daily; stop when CD4>200×3 months",
          "ABPA: High IgE (>500), steroids + antifungal; ABPA vs invasive differentiated by IgE/clinical"
        ],
        textbookRefs: [
          { book: "Jawetz Melnick & Adelberg's Medical Microbiology", chapter: "42-43: Treatment Tables", edition: "28th" },
          { book: "Board Exam Review Books", chapter: "Mycology High-Yield", edition: "Latest" }
        ]
      },
      {
        layer: 5,
        slug: "mycoses-layer-5-active-recall",
        title: "Superficial & Deep Mycoses - Active Recall",
        estimatedMinutes: 20,
        summary: "Q&A on fungal diagnosis, management, and CD4-dependent risk stratification.",
        contentMd: `# Superficial & Deep Mycoses - Active Recall Q&A

**Q1: 6-year-old with alopecia on scalp, scaling, and pruritus × 3 weeks. KOH mount shows branching septate hyphae. Diagnosis and management?**
A) Bacterial infection; start antibiotics
B) Tinea capitis; systemic antifungal treatment
C) Alopecia areata; corticosteroids
D) Head lice; topical permethrin
**Answer: B) Tinea capitis; systemic antifungal treatment** — Hyphae on KOH = fungal. Scalp involvement (tinea capitis) in children requires oral treatment (topical ineffective). Griseofulvin or terbinafine 4-6 weeks; terbinafine newer, shorter. Hair culture confirms species.

---

**Q2: 35-year-old woman with thick white vaginal discharge, vulvovaginal itching. Recently completed course of amoxicillin for UTI. Most likely diagnosis?**
A) Candida albicans vaginitis (post-antibiotic)
B) Trichomoniasis (sexually transmitted)
C) Bacterial vaginosis (dysbiosis)
D) HSV-2 (vesicular lesions expected)
**Answer: A) Candida albicans vaginitis (post-antibiotic)** — Antibiotics disrupt normal flora, allowing Candida overgrowth. Thick white discharge, itching = candida. Fluconazole 150 mg single dose or topical azoles 3-7 days. Trichomoniasis = frothy discharge + male partner symptoms. BV = clue cells, fishy odor.

---

**Q3: Patient with HIV (CD4=75) develops fever, headache, stiff neck. CSF: 50 WBC (lymphocytic), glucose low 30, protein 120, India ink positive. Diagnosis and treatment?**
A) Tuberculous meningitis (high protein, low glucose, Mycobacterium)
B) Cryptococcal meningitis; amphotericin B + flucytosine induction, fluconazole consolidation
C) Bacterial meningitis (N. meningitidis)
D) Viral meningitis (normal glucose expected)
**Answer: B) Cryptococcal meningitis; amphotericin B + flucytosine induction, fluconazole consolidation** — India ink positive = Cryptococcus neoformans. CD4<100 high risk. CSF cryptococcal antigen >95% sensitivity. Treatment: Amphotericin B 0.7 mg/kg IV + Flucytosine 25 mg/kg QID × 2 weeks (induction), then fluconazole 400 mg daily × 8 weeks (consolidation), then 200 mg daily until CD4>200.

---

**Q4: Asthmatic patient with cough, hemoptysis, and pulmonary infiltrates. Sputum IgG anti-Aspergillus+, IgE elevated (600), eosinophilia 1200. High-risk diagnosis?**
A) Tuberculosis (hemoptysis, infiltrates)
B) Aspergilloma (fungal ball in cavity)
C) ABPA (allergic bronchopulmonary aspergillosis)
D) Aspergillus pneumonia (invasive)
**Answer: C) ABPA (allergic bronchopulmonary aspergillosis)** — Asthma, high IgE (>500), anti-Aspergillus IgG, eosinophilia, pulmonary infiltrates = ABPA. Prednisone 0.5 mg/kg daily + itraconazole 200 mg BID. Not invasive (no neutropenia); immune-mediated.

---

**Q5: Toenail with yellow-brown discoloration, subungual debris, thickening × 6 months. KOH mount shows hyphae. What is the appropriate treatment?**
A) Topical miconazole; 2-4 weeks
B) Oral terbinafine 250 mg daily × 12 weeks
C) Itraconazole pulse therapy (no proof vs terbinafine)
D) Observation; nails naturally shed (too late for treatment)
**Answer: B) Oral terbinafine 250 mg daily × 12 weeks** — Onychomycosis (nail fungus) requires systemic therapy (topical ineffective; poor penetration). Terbinafine preferred (6 weeks fingernails, 12 weeks toenails); better efficacy than griseofulvin. Cure rates ~90%.

---

**Q6: 48-year-old smoker with chronic TB cavitary disease now presents with hemoptysis. CXR shows "air crescent sign" in cavity. Diagnosis?**
A) TB reactivation with hemorrhage
B) Aspergilloma (fungal ball colonizing TB cavity)
C) Lung cancer (smoking history)
D) Pulmonary embolism
**Answer: B) Aspergilloma (fungal ball colonizing TB cavity)** — Air crescent sign = aspergilloma in pre-existing cavity. TB cavity ideal nidus for Aspergillus colonization. Management: Surgical resection (curative) if feasible; otherwise antifungal (itraconazole, voriconazole). IgG anti-Aspergillus+ confirms diagnosis.

---

**Q7: 70-year-old with history of pulmonary TB (cavitary, treated 10 years ago). Now presents with fever, cough, dyspnea × 2 weeks not responding to antibiotics. High CD4 count (>500). What investigation for Aspergillus risk?**
A) Sputum culture (slow, takes 7 days)
B) Galactomannan antigen in serum (emerging test)
C) CT chest + BAL for culture
D) Tuberculin skin test (already TB history)
**Answer: C) CT chest + BAL for culture** — Not immunocompromised (CD4>500), so invasive aspergillosis less likely, but aspergilloma possible. CT shows lesion; BAL culture identifies organism. Galactomannan useful in neutropenic; less sensitive in non-immunocompromised.

---

**Q8: HIV patient (CD4=85) started on fluconazole prophylaxis (200 mg daily). Asks: When can I stop this medication?**
A) After 2 weeks of treatment (sufficient)
B) When CD4 >200 × 3 consecutive months on antiretroviral therapy
C) Never (lifelong)
D) When symptoms resolve
**Answer: B) When CD4 >200 × 3 consecutive months on antiretroviral therapy** — Fluconazole stopped once immune recovery documented (CD4>200 sustained for 3 months on ART). Re-start if CD4 drops <200 again. Prophylaxis not lifelong with ART.

---

**Q9: 42-year-old with psoriasis develops thickened, discolored toenails. Denies recent travel/exposure. KOH negative. What is the likely diagnosis?**
A) Tinea unguium (fungal)
B) Psoriatic nail dystrophy (non-fungal)
C) Melanoma (pigmented)
D) Onychomycosis from Candida
**Answer: B) Psoriatic nail dystrophy (non-fungal)** — KOH negative = NOT fungal. Known psoriasis → psoriatic nails (pitting, thickening, discoloration). Tinea unguium (fungal onychomycosis) would have positive KOH/culture. Treat underlying psoriasis; no antifungal needed.

---

**Q10: CD4=210, patient starts fluconazole 200 mg daily for prophylaxis. Six months later, CD4=350 × 3 months on ART. Can prophylaxis be discontinued?**
A) No; once CD4<200, lifetime prophylaxis
B) Yes; CD4>200 × 3 consecutive months = can discontinue
C) Only if repeated CD4 counts >200 (4 counts required)
D) Start antiretrovirals longer before discontinuing
**Answer: B) Yes; CD4>200 × 3 consecutive months = can discontinue** — Standard guideline: discontinue prophylaxis when CD4>200 sustained for 3 months on ART. Re-start if CD4 drops <200. This patient meets criteria (350 for 3 months = safe).
`,
        mnemonics: [
          {
            text: "Fungal DiAgnosis Quick",
            explanation: "D=Dermatophyte septate hyphae, I=India ink (crypto), A=Antigen/PCR (crypto most sensitive), G=Growth slow (fungal), N=Nails need systemic (topical fails)"
          }
        ],
        keyPoints: [
          "Tinea capitis children: Oral treatment essential; hyphae on KOH; griseofulvin/terbinafine 4-6 weeks",
          "Onychomycosis: Systemic terbinafine 12 weeks toenails; topical ineffective",
          "ABPA: High IgE (>500), asthma, steroids + antifungal; NOT invasive",
          "Aspergilloma: TB cavity + hemoptysis + air crescent; surgical resection curative",
          "Cryptococcal meningitis: Ampho B+fluco induction, fluconazole consolidation/maintenance",
          "CD4<200: Start fluconazole; discontinue when CD4>200×3 months on ART"
        ],
        textbookRefs: [
          { book: "Jawetz Melnick & Adelberg's Medical Microbiology", chapter: "42-43: Case Studies", edition: "28th" },
          { book: "Board Exam Question Banks", chapter: "Mycology Clinical Scenarios", edition: "Current" }
        ]
      }
    ]
  }
];
