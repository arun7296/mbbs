import type { TopicLessons } from "./content-loader";

export const microbiologyVirologyLessons5: TopicLessons[] = [
  {
    topicCode: "MI-MOD-05-TOP-06",
    layers: [
      {
        layer: 1,
        slug: "arboviruses-rabies-layer-1-foundation",
        title: "Arboviruses & Rabies - Foundation",
        estimatedMinutes: 25,
        summary: "Dengue, chikungunya, JE, yellow fever, and rabies epidemiology, transmission, and Indian context.",
        contentMd: `# Arboviruses & Rabies - Foundation

## Arboviruses (Arthropod-Borne)
- **Dengue**: Aedes aegypti (daytime); 4 serotypes; monsoon peaks
- **Chikungunya**: Aedes mosquito; severe joint pain; chronic arthritis 30-60%
- **Japanese Encephalitis (JE)**: Culex (nighttime); endemic Bihar/Jharkhand/UP
- **Yellow fever**: Absent Asia; not relevant India
- **General mechanism**: Virus → mosquito → human amplification cycle

## Dengue Epidemiology
- 4 serotypes (variable regional); secondary infection = DHF risk
- Aedes aegypti (urban, daytime biter)
- Incubation 3-14d (mean 4-6d)
- Monsoon peaks (water accumulation)
- India: All states affected; hyperendemic urban/semi-urban

## Chikungunya
- Severe arthralgia (knees, ankles, wrists, shoulders) = hallmark
- Post-chikungunya chronic arthritis: 30-60%; months-years duration
- Recent epidemics India (2006 Kerala); recurring seasonal

## Japanese Encephalitis
- Culex vector (nighttime); pigs, birds amplify
- Endemic Bihar, Uttar Pradesh, Jharkhand, Assam (Northern India)
- High pediatric mortality: 20-30% clinical encephalitis
- Brainstem/basal ganglia preferentially affected

## Rabies (Not Arbovirus - Rhabdovirus)
- ~20-40,000 deaths India annually (highest global burden)
- Dog bite 85-90%; bats, cats, wildlife
- Incubation weeks-months (distance-dependent)
- **100% fatal once symptomatic** (only ~6-10 survivors globally with Milwaukee protocol)
- **PEP >99% effective** if started pre-symptomatic`,
        mnemonics: [
          { text: "Dengue D4 Severity", explanation: "D=Fever, D=DHF (secondary), D=DSS, D=Death risk" },
          { text: "JE-JI Geographic", explanation: "J=Japanese, E=Endemic Bihar/UP, I=India high burden" },
          { text: "Rabies R.A.B.I.E.S", explanation: "Rhabdovirus, Animal bite, Bullet-shaped, India burden, Fatal, Saliva" }
        ],
        keyPoints: [
          "Dengue: 4 serotypes, Aedes vector, monsoon peaks, secondary infection = DHF",
          "Chikungunya: Severe arthralgia, chronic joint pain 30-60%",
          "JE: Culex vector, endemic Bihar/UP, high pediatric mortality",
          "Rabies: 100% fatal untreated, 20-40k deaths India, PEP >99% if pre-symptomatic"
        ],
        textbookRefs: [
          { book: "Jawetz Melnick & Adelberg's Medical Microbiology", chapter: "40-41: Arboviruses & Rabies", edition: "28th" }
        ]
      },
      {
        layer: 2,
        slug: "arboviruses-rabies-layer-2-mechanism",
        title: "Arboviruses & Rabies - Mechanism",
        estimatedMinutes: 30,
        summary: "Antibody-dependent enhancement in dengue, JE neuroinvasion, rabies axonal transport and immune evasion, antigenic variation.",
        contentMd: `# Pathophysiology

## Dengue ADE (Antibody-Dependent Enhancement)
- **Primary infection**: Type-specific IgG neutralizes homologous serotype
- **Secondary (different serotype)**: Non-neutralizing IgG from prior infection enhances uptake (Fc-receptor bearing cells)
- **Result**: 10-100 fold viremia increase → DHF/DSS risk
- **Thrombocytopenia**: Direct viral infection of megakaryocytes + immune destruction
- **Plasma leakage**: Immune-mediated endothelial damage (day 4-5 critical phase)

## JE Neuroinvasion
- **BBB crossing**: Mechanism unclear; possibly dendritic cell, direct endothelial
- **Preferential CNS sites**: Brainstem, basal ganglia, thalamus
- **Cytokine storm**: TNF-α, IL-6, IL-8 → BBB disruption, edema
- **Neuronal loss**: Movement disorders (Parkinsonian), seizures, paralysis

## Rabies Pathogenesis (Unique)
- **Slow progression**: Weeks-months incubation allows PEP window
- **Axonal transport route**: Bite wound → sensory/motor nerves → spinal cord → brainstem
- **Distance-dependent**: Face bite ~30d; arm ~60d; leg ~90+d
- **Phosphoprotein (P)**: Blocks interferon; prevents innate immune response
- **Result**: Minimal immune activation during long incubation; when symptomatic, too late

## Chikungunya Chronic Arthritis
- **Viral persistence**: Viral antigen/RNA in synovial tissue
- **Immune-mediated**: IgG deposition, CD8+ infiltration
- **Chronic phase**: Months-years duration; NSAIDs, physiotherapy, corticosteroid injection`,
        mnemonics: [
          { text: "ADE = Antibody-Dependent Enhancement", explanation: "Non-neutralizing IgG enhances viral uptake 10-100x" },
          { text: "Rabies DISTANCE & DELAY", explanation: "D=Distance (face shortest), D=Delay (long incubation), E=Evasion (P protein), L=Late immune (symptomatic = fatal), A=Allow PEP window" }
        ],
        keyPoints: [
          "Dengue ADE: Secondary infection with different serotype = DHF/DSS risk",
          "JE: Basal ganglia/brainstem; seizures, movement disorder",
          "Rabies: Slow axonal transport; P protein blocks interferon",
          "Incubation: Distance-dependent (face <hand <leg)",
          "Chikungunya: Chronic arthritis from viral persistence"
        ],
        textbookRefs: [
          { book: "Jawetz Melnick & Adelberg's Medical Microbiology", chapter: "40-41: Pathophysiology", edition: "28th" }
        ]
      },
      {
        layer: 3,
        slug: "arboviruses-rabies-layer-3-clinical",
        title: "Arboviruses & Rabies - Clinical",
        estimatedMinutes: 35,
        summary: "DHF/DSS management, JE clinical features, chikungunya arthritis, rabies presentations, and PEP protocols.",
        contentMd: `# Clinical Presentations & Management

## Dengue Fever (Classic)
- **Day 1-3**: Fever (39-40°C), headache, retro-orbital pain, myalgia, rash
- **Day 4-5 (Critical)**: Fever defervescence, BUT hemodynamic instability begins
- **Day 6-7**: Rash fades, appetite returns, recovery
- **Self-limited**: 95% recover in 5-7 days

## DHF/DSS (Plasma Leakage)
- **Warning signs** (day 4-5): Abdominal pain, vomiting, bleeding (petechiae, GI), lethargy
- **Lab**: Hematocrit rise >20% (plasma leakage), platelet decline (<100k)
- **Pathophysiology**: ADE-driven high viremia → intense immune activation → endothelial permeability
- **Management**: Fluid resuscitation (isotonic crystalloid), platelet transfusion (<20k with bleeding)
- **Complication**: Fluid overload → pulmonary edema (meticulous volume balance essential)
- **Mortality**: 2-5% with supportive care; 50% if untreated

## JE (Japanese Encephalitis)
- **Acute phase**: High fever, altered consciousness, seizures (30-50%)
- **Movement disorders**: Tremor, rigidity, dystonia (unusual for viral encephalitis)
- **Flaccid paralysis possible**: Anterior horn involvement (polio-like)
- **CSF**: Lymphocytic pleocytosis, elevated protein, normal/low glucose
- **Mortality**: 20-30% with treatment
- **Sequelae** (survivors): Cognitive deficits, behavioral problems, epilepsy (30-40%), movement disorder, muscle weakness (10-20%)
- **Prevention**: Vaccine (Vero-derived inactivated JE vaccine); highly effective

## Chikungunya (Acute & Chronic)
- **Acute**: Fever (biphasic), severe arthralgia (knees, ankles, wrists), maculopapular rash, myalgia
- **Chronic arthritis**: 30-60% develop persistent joint pain; months to years
- **Risk factors**: Female, age >40
- **Management**: NSAIDs, physiotherapy, corticosteroid joint injection (severe)

## Rabies
- **Prodromal** (days 1-4): Fever, malaise, paresthesias at bite site (diagnostic if present)
- **Acute encephalitis** (days 4-10):**
  - Furious (80%): Hyperactivity, aggression, hypersalivation, hydrophobia (water → laryngeal spasm)
  - Paralytic (20%): Ascending paralysis, respiratory/bladder dysfunction
- **Death**: Brainstem death, respiratory failure (median survival 4-7 days post-symptom)
- **Milwaukee Protocol**: Rare success (6 survivors); induced coma + ribavirin + IVIg
- **100% fatal** once symptomatic

## Rabies Diagnosis
- **During life**: DFA on corneal impression smears (80-90% sensitivity), saliva RT-PCR, brain imaging
- **Post-mortem**: Negri bodies in brain (pathognomonic), DFA on brain tissue

## Rabies PEP (Post-Exposure Prophylaxis)
- **Window**: <14 days (ideally <24h); >99% effective if started pre-symptomatic
- **Wound care**: Wash soap/water, 70% alcohol, povidone-iodine (critical first step)
- **HBIG** (rabies immunoglobulin): 20 IU/kg at wound site (first dose); not if >7d
- **Vaccine**: Days 0, 3, 7, 14 (4 doses); IM deltoid or anterolateral thigh
- **Efficacy**: >99% if within 14 days; 0% if symptomatic

## Rabies Exposure Categories (NACO)
- **Category I**: Intact skin; observation
- **Category II**: Single bite/scratch no profuse bleed; HBIG + vaccine
- **Category III**: Multiple bites, head/neck/hands/genitals, visible saliva; urgent HBIG + vaccine`,
        mnemonics: [
          { text: "DHF Warning Signs CRASH", explanation: "C=Cramps/abdominal pain, R=Rash, A=Abdominal, S=Serous (pleural), H=Hemorrhage" },
          { text: "Rabies Phases FED", explanation: "F=Furious (80%), E=Encephalitis (days 4-10), D=Death (4-7 days)" },
          { text: "Rabies PEP WASH", explanation: "W=Wound (wash immediately), A=Aggressive cleaning, S=Soap/water/alcohol, H=HBIG/vaccine" }
        ],
        keyPoints: [
          "Dengue: Biphasic fever, critical phase day 4-5 with warning signs",
          "DHF: ADE-driven plasma leakage; fluid resuscitation key; avoid volume overload",
          "JE: Basal ganglia/brainstem; seizures, movement disorder, high mortality",
          "Chikungunya: Severe arthralgia, chronic joint pain 30-60%",
          "Rabies: 100% fatal symptomatic; furious vs paralytic; PEP >99% pre-symptomatic",
          "Rabies PEP: Wound care, HBIG at wound (<7d), vaccine series days 0,3,7,14"
        ],
        textbookRefs: [
          { book: "Jawetz Melnick & Adelberg's Medical Microbiology", chapter: "40-41: Diseases", edition: "28th" }
        ]
      },
      {
        layer: 4,
        slug: "arboviruses-rabies-layer-4-exam",
        title: "Arboviruses & Rabies - Exam Prep",
        estimatedMinutes: 25,
        summary: "High-yield diagnostics, rapid protocols, and rabies risk categorization.",
        contentMd: `# Exam High-Yield

## Rapid Diagnostics
- **Dengue**: NS1 antigen (day 1-5), IgM serology (day 5-7), PCR
- **JE**: IgM in CSF (preferred), serum IgM (less specific)
- **Rabies**: DFA corneal impression (80-90%), saliva PCR, brain imaging
- **Chikungunya**: Serology (IgM), PCR (not widely available)

## Rabies Exposure Categorization
| Category | Risk | Action |
|----------|------|--------|
| **I** | Low (intact skin) | Observation |
| **II** | Moderate (local wound) | HBIG + vaccine mandatory |
| **III** | High (multiple/head/neck) | Urgent HBIG + vaccine |

## PEP Regimen (Rabies)
```
Day 0: 2 doses (0.5 mL IM in 2 shoulders OR intradermal split-dose)
Day 3: 1 dose (0.5 mL IM)
Day 7: 1 dose (0.5 mL IM)
Day 14: 1 dose (0.5 mL IM)
Total: 4 doses × 0.5 mL = 2 mL
```

## High-Yield Facts
- **Dengue R0**: 1.5-2 (moderate)
- **Dengue viremia**: 4-5 days (overlaps with fever)
- **JE vaccine**: Highly effective in endemic regions
- **Chikungunya incubation**: 3-7 days (mean 4)
- **Rabies incubation**: 5 days to 19 months (variable)
- **Rabies mortality**: 100% symptomatic; 0% if PEP >99%
- **India rabies deaths**: 20-40k annually (highest globally)
- **DHF mortality**: 2-5% with care; 50% untreated`,
        mnemonics: [
          { text: "PEP = Post-Exposure Prophylaxis", explanation: "Days 0,3,7,14 vaccine; HBIG wound infiltration" },
          { text: "Category Rabies III Urgent", explanation: "Category I=observe, II=HBIG+vax, III=urgent HBIG+vax" }
        ],
        keyPoints: [
          "Dengue: IgM peak day 4-7; NS1 antigen day 1-5",
          "DHF: Plasma leakage, thrombocytopenia, hemoconcentration",
          "JE: DFA; endemic Bihar/UP; high pediatric mortality",
          "Chikungunya: Severe joint pain, chronic arthritis 30-60%",
          "Rabies: Category III = urgent; PEP <14d ideally",
          "Rabies PEP: 4 doses (days 0,3,7,14); HBIG at wound site only"
        ],
        textbookRefs: [
          { book: "Jawetz Melnick & Adelberg's Medical Microbiology", chapter: "40-41: Summary", edition: "28th" }
        ]
      },
      {
        layer: 5,
        slug: "arboviruses-rabies-layer-5-active-recall",
        title: "Arboviruses & Rabies - Active Recall",
        estimatedMinutes: 20,
        summary: "Case-based Q&A on dengue, JE, chikungunya, and rabies diagnosis and management.",
        contentMd: `# Active Recall Q&A

**Q1:** 5-year-old Bihar, fever × 5d, seizures, altered consciousness. CSF lymphocytic, normal glucose. Diagnosis?
**A1:** JE (endemic Bihar); high pediatric mortality; dexamethasone for edema; supportive care

**Q2:** 32-week pregnant Kerala, fever × 4d, severe joint pain (knees, wrists). Rash present. Diagnosis?
**A2:** Chikungunya; monitor vertical transmission (rare, ~30%); congenital effects unknown

**Q3:** 8-year-old, bitten stray dog forearm × 6h, bleeding wound. Category and management?
**A3:** Category III (local wound on arm) → Category II or III (depends on depth/profusion); HBIG + vaccine immediately

**Q4:** 45-year-old Delhi, fever × 3d, rash, mild headache. Dengue IgM+, NS1+, platelet 80k. Assessment?
**A4:** Uncomplicated dengue fever (day 3); follow-up day 5-7 for critical phase; warning signs review

**Q5:** Man bitten bat × 15d, now fever, hydrophobia, confusion. Prognosis?
**A5:** Symptomatic rabies; 100% fatal; no effective treatment (Milwaukee protocol rare); supportive only

**Q6:** 6-month-old, 5 watery stools/day, fever, low intake. Rotavirus+. Management?
**A6:** ORS primary; continue breastfeeding; dehydration complication, not virus itself

**Q7:** 72-year-old dengue (day 4), sudden abdominal pain, bleeding, narrowed pulse pressure. Status?
**A7:** DHF with progression to DSS (shock); fluid resuscitation critical; avoid volume overload; platelet transfusion if bleeding

**Q8:** Healthcare worker stuck contaminated needle from rabies patient. PEP protocol?
**A8:** Category III (percutaneous); immediate HBIG + vaccine; days 0,3,7,14; repeat HIV testing

**Q9:** Chikungunya patient acute phase asks prognosis of joint pain. Risk chronic?
**A9:** 30-60% develop persistent arthritis lasting months-years; female, age >40 = higher risk

**Q10:** Bitten dog × 8d ago, now requesting rabies PEP. Recommendation?
**A10:** Within 14-day window; HBIG still option if <7d, vaccine mandatory (days 0,3,7,14); delayed is less ideal`,
        mnemonics: [],
        keyPoints: [
          "JE: Endemic Bihar/UP, seizures, high pediatric mortality",
          "Dengue DHF: Critical phase day 4-5, plasma leakage, fluid resuscitation",
          "Chikungunya: Severe arthralgia, chronic 30-60%",
          "Rabies: 100% fatal symptomatic; Category III urgent PEP",
          "Rabies PEP: Wound care, HBIG/vaccine <14d; >99% effective",
          "Incubation: Dengue/JE short; Rabies long (5d to 19m)"
        ],
        textbookRefs: [
          { book: "Jawetz Melnick & Adelberg's Medical Microbiology", chapter: "40-41: Cases", edition: "28th" }
        ]
      }
    ]
  }
];
