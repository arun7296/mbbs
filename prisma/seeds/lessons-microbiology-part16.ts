import type { TopicLessons } from "./content-loader";

export const microbiologyLessonsPart16: TopicLessons[] = [
  {
    topicCode: "MI-MOD-04-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "spirochetes-layer-1-foundation",
        title: "Spirochetes - Foundation",
        estimatedMinutes: 20,
        summary: "Spirochetes are motile, spiral gram-negative bacteria with axial filaments enabling movement. Major pathogens: Treponema pallidum (syphilis), Leptospira (leptospirosis), Borrelia (Lyme disease, relapsing fever). Diagnosis via dark-field microscopy or serology; treatment with penicillin generally effective.",
        contentMd: `# Spirochetes: Overview

## Morphology & Structure
- **Shape**: Helical/spiral morphology (6-20 µm long, 0.1-0.2 µm diameter)
- **Gram stain**: Gram-negative but NOT stained well (visualized by dark-field, fluorescence, silver stains)
- **Motility**: Flagella-like **axial filaments** (located between cell wall and outer membrane) enable corkscrew motion
- **Cell wall**: Gram-negative, outer membrane more permeable than gram-positive

## Major Spirochetes in Medicine

| Organism | Disease | Transmission | Geographic |
|----------|---------|--------------|-----------|
| **Treponema pallidum** | Syphilis | Sexual (STI) | Worldwide |
| **Leptospira interrogans** | Leptospirosis | Rodent urine contamination | Tropical, rainy season |
| **Borrelia burgdorferi** | Lyme disease | Tick bite | North America, Europe |
| **Borrelia recurrentis** | Relapsing fever | Human louse (epidemic) | Africa, Central Asia |
| **Borrelia hermsii** | Relapsing fever | Soft tick (endemic) | Western USA |

## Treponema pallidum (Syphilis)

### Epidemiology
- Obligate human pathogen
- **Incubation**: 3-90 days (average 21 days)
- Transmission: Sexual contact (primary/secondary), transplacental (congenital)
- Rising trend in India, especially among MSM

### Syphilis Stages
1. **Primary**: Chancre at inoculation site (painless, indurated, with clean base)
2. **Secondary**: Rash (including palm/sole involvement), lymphadenopathy, fever (6-8 weeks after primary)
3. **Latent**: Asymptomatic; early latent (<1 year) infectious; late latent non-infectious
4. **Tertiary**: Gumma (granuloma), neurosyphilis (tabes dorsalis, GPI), cardiovascular (aortic aneurysm)

## Leptospira interrogans (Leptospirosis)

### Epidemiology
- Zoonosis: Rats, cattle, pigs are reservoirs
- Transmission: Contact of skin/mucous membranes with contaminated urine (often occupational)
- Seasonal: Monsoon/rainy season in India (high incidence)
- Occupations at risk: Farmers, sewage workers, slaughterhouse workers

### Clinical Features
- **Biphasic illness**: Leptospiremia phase → immune phase
- Fever, headache, myalgia (esp. calf muscle pain)
- **Weil's disease** (severe): Renal failure, hepatic dysfunction, pulmonary hemorrhage, jaundice
- Case fatality: 5-15% in severe form

## Borrelia species (Lyme Disease & Relapsing Fever)

### Lyme Disease (B. burgdorferi)
- Vector: Ixodes tick (hard tick)
- Clinical: Erythema migrans rash (bull's eye appearance), arthralgia, neuroborreliosis
- Geographic: Rare in India; common in North America, Europe

### Relapsing Fever
- **Epidemic**: B. recurrentis, human body louse (Pediculus humanus) transmission
- **Endemic**: B. hermsii, soft ticks (Ornithodoros)
- Clinical: Recurrent fever episodes (fever-apyrexia cycles) due to antigenic variation
- Geographic: Tropical Africa, Central Asia (epidemic); Western USA (endemic)`,
        mnemonics: [
          { text: "TSL = Treponema, Spirochetes are Spiraled, Leptospira", explanation: "Three major spirochetes: Treponema (syphilis), Leptospira (leptospirosis), and others like Borrelia" },
          { text: "Primary-Secondary-Latent-Tertiary for Syphilis Stages", explanation: "Four stages of untreated syphilis: Chancre → Rash → Asymptomatic → Gumma/Neuro" }
        ],
        keyPoints: [
          "Spirochetes: helical bacteria with axial filaments (not true flagella); gram-negative; move by corkscrew motion",
          "Not stained well by Gram; visualized by dark-field, fluorescence, or silver stains",
          "Treponema pallidum: obligate human pathogen; syphilis via sexual contact; four stages",
          "Leptospira: zoonosis from rodent urine; severe form (Weil's disease) has renal, hepatic, pulmonary involvement",
          "Borrelia burgdorferi: Lyme disease via Ixodes tick; erythema migrans rash (bull's eye)",
          "Borrelia recurrentis/hermsii: Relapsing fever with fever-apyrexia cycles; rare in India"
        ],
        textbookRefs: [
          { book: "Ananthanarayan & Paniker's Textbook of Microbiology", chapter: "Spirochetes", edition: "11th" }
        ]
      },
      {
        layer: 2,
        slug: "spirochetes-layer-2-mechanism",
        title: "Spirochetes - Mechanism",
        estimatedMinutes: 25,
        summary: "Pathophysiology of spirochete infections. How T. pallidum evades immunity, antigenic variation in Borrelia. Leptospira toxins and tissue damage. Immune response and immunopathology in each infection.",
        contentMd: `# Pathophysiology & Pathogenesis

## Treponema pallidum Pathogenesis

### Immune Evasion Mechanisms
- **Limited surface antigens**: Few outer membrane proteins (Omps) exposed
- **Molecular mimicry**: Treponemal antigens resemble host antigens (hyaluronic acid-like) → poor immune recognition
- **Antigenic variation** (limited): Slow rate compared to Borrelia
- **IgG coating**: Treponemal surface coated with IgG → impairs complement activation

### Tissue Invasion & Damage
1. **Chancre formation** (primary syphilis):
   - Treponemes invade mucous membranes/abraded skin
   - Local inflammatory response → induration with clean base
   - Healing occurs with formation of scar in untreated

2. **Secondary syphilis**:
   - Hematogenous dissemination of treponemes
   - Immune complex deposition (treponeme + IgM/IgG) → vasculitis
   - Rash distribution: Entire body, including palms and soles
   - Lymph node hyperplasia from antigenic stimulation

3. **Neurosyphilis**:
   - CSF invasion → meningitis or meningovascular disease
   - Late manifestations: Tabes dorsalis (dorsal root/spinal cord degeneration), GPI (parenchymal neurosyphilis)
   - Pathology: Perivascular inflammation, gliosis, neuronal loss

## Leptospira interrogans Pathogenesis

### Biphasic Illness Mechanism
- **Leptospiremia phase** (Days 0-7):
  - Leptospires multiply in blood and tissue (liver, kidney, brain)
  - Endotoxin-like activity → fever, myalgia, hypotension
  - CSF invasion possible → aseptic meningitis

- **Immune phase** (Days 7-30+):
  - Antibody production (IgM then IgG) → spiremes clear from blood
  - BUT organisms persist in kidney tubules, eye, CNS
  - Immune complex deposition → vasculitis, hemorrhage, inflammation

### Weil's Disease (Severe Form)
- High-grade leptospiremia with organ tropism
- **Renal damage**: Acute tubular necrosis → acute kidney injury, oliguria
- **Hepatic involvement**: Hepatocyte necrosis → jaundice (relatively mild hepatic dysfunction despite high bilirubin)
- **Pulmonary**: Alveolar hemorrhage → hemoptysis, ARDS
- **Hemorrhage**: DIC-like coagulopathy → bleeding manifestations
- Case fatality: 5-15% (deaths mainly from renal failure and pulmonary involvement)

## Borrelia Pathogenesis

### Antigenic Variation (Relapsing Fever)
- **VLP (Variable Lipoprotein) switch**: Spirochete switches surface lipoprotein expression
- Process: DNA rearrangement → new VLP variant escapes prior antibodies
- Result: Multiple fever episodes as new variants emerge
- Host mounts antibody response → brief apyrexia until next variant appears

### Lyme Disease Pathogenesis (B. burgdorferi)
- **Local**: Erythema migrans rash at tick bite site
  - Hyaluronic acid in cell wall → mimics host tissue → poor immune recognition initially
  - Antigens: OspA (tick midgut), OspC (mammalian host) help transmission
- **Disseminated**: Hematogenous spread → arthritis (Lyme arthritis), neuroborreliosis
- **Chronic**: Joint inflammation persists despite antibiotics in some cases

## Immune Response

### Treponema
- **Humoral**: Treponemal antibodies (FTA, TP-PA) and non-treponemal (RPR, VDRL)
- **Cellular**: Th1 response; but immune evasion limits control

### Leptospira
- **Early IgM**: Appears 5-7 days, peaks at 1 month, then declines
- **Late IgG**: Persists long-term; indicates past/current infection
- **Complement activation**: Potential exacerbation of inflammation

### Borrelia
- **Antigenic variation**: Host antibodies ineffective against variant antigens
- **Immune evasion**: Antigenic variation allows persistence despite antibody response`,
        mnemonics: [
          { text: "Treponema = Mimics = Not Cleared", explanation: "T. pallidum: molecular mimicry helps evade immune response; limited surface antigens impair recognition" },
          { text: "Leptospira Biphasic: Leptospiremia (7d) then Immune (7-30d)", explanation: "Week 1: spiremes in blood; Week 2+: antibodies clear blood but renal persistence occurs" },
          { text: "Borrelia Variation = Relapsing Fever", explanation: "Antigenic variation in VLP → escape from antibodies → new fever episode" }
        ],
        keyPoints: [
          "T. pallidum: molecular mimicry and limited surface antigens → immune evasion; IgG coating impairs complement",
          "Syphilis pathology: Chancre (local), secondary rash (vasculitis from immune complexes), neurosyphilis (CNS invasion)",
          "Leptospira biphasic: leptospiremia phase (fever, myalgia) → immune phase (antibodies, but renal persistence)",
          "Weil's disease: High leptospiremia with organ tropism → renal failure, hepatic jaundice, pulmonary hemorrhage",
          "Borrelia: Antigenic variation via VLP switch → escape from antibodies → multiple fever episodes",
          "Lyme disease: Hyaluronic acid mimicry → poor initial immune response; disseminated → arthritis, neuroborreliosis"
        ],
        textbookRefs: [
          { book: "Ananthanarayan & Paniker's Textbook of Microbiology", chapter: "Spirochetes & Pathogenesis", edition: "11th" }
        ]
      },
      {
        layer: 3,
        slug: "spirochetes-layer-3-clinical",
        title: "Spirochetes - Clinical",
        estimatedMinutes: 25,
        summary: "Diagnosis and management of spirochete infections. Serological tests (RPR, VDRL, FTA, TP-PA for syphilis), dark-field microscopy for treponemes, culture for leptospira. Treatment with penicillin (first-line), doxycycline alternatives. Congenital syphilis and latent syphilis management.",
        contentMd: `# Diagnosis & Management

## Treponema pallidum (Syphilis) Diagnosis

### Clinical Diagnosis
- **Primary**: Chancre examination; dark-field microscopy of exudate (spirochetes visible)
- **Secondary**: Serological tests; clinical findings (rash with palms/soles involvement)
- **Tertiary**: Clinical + serological; neurosyphilis requires CSF examination

### Serological Tests

**Non-Treponemal Tests** (Lipid antibodies in host; not spirochete-specific)
- **RPR** (Rapid Plasma Reagin): Quantitative, detects IgG + IgM
- **VDRL** (Venereal Disease Research Lab): Similar to RPR
- High titers: Active infection
- **Prozone effect**: Very high titers may show false-negative (dilute specimen)
- Decline after treatment (good treatment response marker)

**Treponemal Tests** (Spiral-specific antigens)
- **FTA-ABS** (Fluorescent Treponemal Antibody - Absorption): Gold standard, most sensitive
- **TP-PA** (Treponema pallidum Particle Agglutination): Automated, convenient
- Remain positive even after treatment (indicate past infection)

**Interpretation**
| Tests | Meaning |
|-------|---------|
| Non-treponemal (+), Treponemal (+) | Active infection |
| Non-treponemal (-), Treponemal (+) | Past infection treated, or false-positive treponemal |
| Non-treponemal (+), Treponemal (-) | Likely biological false positive (check for autoimmune disease, malignancy) |

### Special Scenarios
- **Neurosyphilis**: CSF VDRL/RPR + elevated protein + pleocytosis
- **Congenital syphilis**: Maternal serology + infant RPR (may be passive maternal transfer) + clinical findings
- **Primary chancre**: Dark-field microscopy of exudate

## Leptospira Diagnosis

### Culture
- **First week (leptospiremia)**: Blood culture in Fletcher medium or bovine serum albumin medium
- Slow growth (days to weeks)
- Not practical for acute diagnosis

### Serology
- **IgM ELISA**: Appears day 5-7; diagnostic
- **MAT (Microscopic Agglutination Test)**: Gold standard; identifies serovar
- **PCR**: Molecular confirmation; available in reference labs

### Urine Culture
- From second week onwards (during immune phase)
- **Leptospiruria** persists weeks to months → indicates persistence
- Culture from urine in advanced labs

## Borrelia Diagnosis

### Relapsing Fever
- **Thick blood smear** (Wright-Giemsa stain): Spirochetes visible during fever episodes
- Serology: Not helpful (due to antigenic variation)
- PCR: Species identification

### Lyme Disease
- **Erythema migrans**: Clinical diagnosis sufficient
- **Serology**: Two-tier testing (ELISA then confirmatory Western blot)
- **PCR**: Joint fluid for arthritis confirmation

## Treatment

### Syphilis
- **Penicillin G**: First-line
  - Primary/secondary: 2.4 MU IM once
  - Latent <1 year: 2.4 MU IM weekly × 3
  - Late/tertiary: 2.4 MU IM weekly × 3
- **Alternatives**: Doxycycline 100 mg BD × 2-4 weeks (for penicillin allergy)
- **Monitoring**: RPR/VDRL at 3, 6, 12 months; should decline (4-fold drop indicates cure)

### Leptospirosis
- **Penicillin G IV**: 1-2 MU 6-hourly (severe, Weil's disease)
- **Doxycycline**: 100 mg BD (milder cases, prophylaxis)
- **Supportive care**: Dialysis for renal failure, mechanical ventilation for pulmonary hemorrhage

### Relapsing Fever
- **Penicillin G IV**: 1 MU 6-hourly × 10 days
- **Doxycycline**: 100 mg BD × 10 days
- **Jarisch-Herxheimer reaction**: Fever spike after treatment from endotoxin release

## Prevention

### Syphilis
- Sexual health education, partner notification, screening in pregnancy
- Congenital syphilis prevention: Maternal screening + early treatment

### Leptospirosis
- Rodent control, worker PPE (gloves, boots)
- Vaccination: Occupational protection available in some countries (limited efficacy in India)

### Relapsing Fever
- Louse control, tick avoidance, housing improvements

## Congenital Syphilis
- **Manifestations**: Hepatosplenomegaly, jaundice, rash, bone changes, neurosyphilis
- **Early** (<2 years): Mucocutaneous, hepatic, renal, bone involvement
- **Late** (>2 years): Interstitial keratitis, 8th nerve deafness, Hutchinson triad (peg teeth, interstitial keratitis, 8th nerve deafness)
- **Prevention**: Maternal screening + penicillin treatment during pregnancy`,
        mnemonics: [
          { text: "Non-treponemal (RPR/VDRL) declines with treatment; Treponemal (FTA/TP-PA) stays positive", explanation: "Test choice guides interpretation: non-treponemal for monitoring treatment, treponemal for confirming diagnosis" },
          { text: "VDRL-FTA: V=Vital (monitor treatment), F=Fixed (indicates past infection)", explanation: "VDRL (non-treponemal) declines with cure; FTA (treponemal) remains positive" },
          { text: "Penicillin: Primary 1×, Latent 3×, Late 3× dosing", explanation: "Syphilis treatment regimen: once for primary, weekly × 3 for latent <1 year, weekly × 3 for late" }
        ],
        keyPoints: [
          "Dark-field microscopy diagnoses primary chancre; RPR/VDRL screens; FTA/TP-PA confirms treponeme",
          "Biological false-positive non-treponemal tests: check for autoimmune disease, malignancy",
          "Penicillin first-line syphilis treatment; doxycycline alternative for allergy",
          "Leptospirosis: culture (first week), serology (IgM day 5-7), MAT gold standard",
          "Relapsing fever: thick smear shows spirochetes during fever; serology unhelpful due to antigenic variation",
          "Congenital syphilis preventable with maternal screening and penicillin; Hutchinson triad late manifestation"
        ],
        textbookRefs: [
          { book: "Ananthanarayan & Paniker's Textbook of Microbiology", chapter: "Spirochetes & Diagnosis", edition: "11th" }
        ]
      },
      {
        layer: 4,
        slug: "spirochetes-layer-4-exam",
        title: "Spirochetes - Exam Prep",
        estimatedMinutes: 20,
        summary: "High-yield facts on spirochete morphology, syphilis stages, serological tests, and treatment regimens.",
        contentMd: `# Exam High Yield

## One-Liners
- Spirochetes visualized by: **Dark-field, fluorescence, or silver stains (NOT Gram stain)**
- Motility in spirochetes: **Axial filaments** (not true flagella)
- Syphilis incubation: **3-90 days (avg 21 days)**
- Primary syphilis lesion: **Painless indurated chancre with clean base**
- Secondary syphilis timing: **6-8 weeks after primary**
- Tertiary syphilis manifestations: **Gumma, neurosyphilis (tabes, GPI), vascular**
- RPR/VDRL: **Non-treponemal, decline with treatment**
- FTA/TP-PA: **Treponemal, remain positive after treatment**
- Syphilis first-line treatment: **Penicillin G (IM or IV)**
- Leptospirosis incubation: **7-10 days**
- Weil's disease: **Severe leptospirosis with renal, hepatic, pulmonary involvement**
- Leptospirosis diagnosis: **IgM serology day 5-7, MAT confirms serovar**
- Relapsing fever cycles: **Fever-apyrexia due to antigenic variation**
- Lyme disease rash: **Erythema migrans (bull's eye appearance)**
- Borrelia relapsing fever: **Multiple fever spikes** due to VLP switch

## Syphilis Stages Quick Reference

| Stage | Timing | Lesion | Serology |
|-------|--------|--------|----------|
| **Primary** | 3-90d | Chancre (painless) | Positive after 2-3 weeks |
| **Secondary** | 6-8w after 1° | Rash (palms/soles) | Both high titers |
| **Latent** | Months-years | None | Both positive |
| **Tertiary** | Years | Gumma, neuro, vascular | Both positive |

## Serological Test Interpretation

| Non-treponemal | Treponemal | Interpretation |
|---|---|---|
| + | + | Active syphilis (confirm with FTA) |
| + | - | Biological false positive (BFP) |
| - | + | Past treated syphilis or false positive |
| - | - | No syphilis |

## NEXT Themes
- Spirochete morphology and visualization
- Syphilis stages and clinical features
- Serological tests and interpretation
- Treatment regimens and monitoring
- Leptospirosis and relapsing fever diagnosis`,
        mnemonics: [
          { text: "Dark-field sees Spirals", explanation: "Spirochetes NOT visible by Gram; use dark-field, fluorescence, or silver stains" },
          { text: "RPR drops; FTA stays", explanation: "Non-treponemal RPR declines with cure; treponemal FTA remains positive" }
        ],
        keyPoints: [
          "Spirochetes: helical morphology, axial filaments, gram-negative but visualized by special stains",
          "Syphilis: Primary chancre → Secondary rash (palms/soles) → Latent → Tertiary (gumma, neurosyphilis)",
          "RPR/VDRL (non-treponemal) decline with treatment; FTA/TP-PA (treponemal) remain positive",
          "Penicillin G: 2.4 MU IM once for primary, weekly × 3 for latent <1 year, weekly × 3 for late",
          "Leptospirosis: IgM serology (day 5-7), MAT for serovar, culture (first week)",
          "Relapsing fever: spirochetes visible on thick smear during fever; multiple fever episodes from antigenic variation"
        ],
        textbookRefs: [
          { book: "Ananthanarayan & Paniker's Textbook of Microbiology", chapter: "Spirochetes", edition: "11th" }
        ]
      },
      {
        layer: 5,
        slug: "spirochetes-layer-5-active-recall",
        title: "Spirochetes - Active Recall",
        estimatedMinutes: 15,
        summary: "Flashcard-style questions on spirochete morphology, diagnosis, and treatment.",
        contentMd: `# Active Recall

**Q1:** How are spirochetes visualized microscopically?
**A1:** Dark-field microscopy, fluorescence microscopy, or silver stains (not well-stained by Gram stain)

**Q2:** What enables spirochete motility?
**A2:** Axial filaments (located between cell wall and outer membrane)

**Q3:** What is the incubation period for syphilis?
**A3:** 3-90 days (average 21 days)

**Q4:** Describe the primary syphilis lesion.
**A4:** Painless, indurated chancre with clean base at inoculation site

**Q5:** When does secondary syphilis appear after primary infection?
**A5:** 6-8 weeks after primary syphilis

**Q6:** What is the difference between RPR/VDRL and FTA/TP-PA?
**A6:** RPR/VDRL are non-treponemal (decline with treatment); FTA/TP-PA are treponemal (remain positive after treatment)

**Q7:** What is the first-line treatment for syphilis?
**A7:** Penicillin G (IM or IV depending on stage)

**Q8:** What is Weil's disease?
**A8:** Severe form of leptospirosis with renal failure, hepatic dysfunction, and pulmonary hemorrhage

**Q9:** What causes the recurrent fever episodes in relapsing fever?
**A9:** Antigenic variation in spirochete surface lipoproteins (VLP switch) allowing escape from antibodies

**Q10:** What is the causative agent of Lyme disease?
**A10:** Borrelia burgdorferi (transmitted by Ixodes tick)`,
        mnemonics: [],
        keyPoints: ["10 key questions on spirochete diagnosis, syphilis staging, and treatment"],
        textbookRefs: [
          { book: "Ananthanarayan & Paniker's Textbook of Microbiology", chapter: "Spirochetes", edition: "11th" }
        ]
      }
    ]
  }
];
