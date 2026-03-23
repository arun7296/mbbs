import type { TopicLessons } from "./content-loader";

export const microbiologyVirologyLessons4: TopicLessons[] = [
  {
    topicCode: "MI-MOD-05-TOP-05",
    layers: [
      {
        layer: 1,
        slug: "resp-enteric-virus-layer-1-foundation",
        title: "Respiratory & Enteric Viruses - Foundation",
        estimatedMinutes: 25,
        summary: "Influenza, SARS-CoV-2, RSV, parainfluenza, rotavirus, norovirus, poliovirus epidemiology and transmission.",
        contentMd: `# Respiratory & Enteric Viruses - Foundation

## Respiratory Viruses
- **Influenza**: Segmented -RNA; antigenic drift/shift; neuraminidase inhibitor targets
- **SARS-CoV-2**: Enveloped +RNA; ACE2 receptor; high transmissibility variants (delta, omicron)
- **RSV**: Non-enveloped -RNA; most common viral lower respiratory infants; bronchiolitis
- **Parainfluenza**: Causes croup (laryngotracheobronchitis); barking cough, stridor
- **Rhinovirus**: Most common cold; >150 serotypes; reinfection common

## Enteric Viruses
- **Poliovirus**: Non-enveloped +RNA; fecal-oral; motor neuron paralysis; eradication near complete
- **Rotavirus**: Non-enveloped dsRNA; most common gastroenteritis children <5; vaccine prevents
- **Norovirus**: Non-enveloped +RNA; epidemic gastroenteritis adults; outbreaks (ships, schools, facilities)
- **Coxsackievirus/Echovirus**: Acute febrile illness, exanthema, meningitis

## Key Characteristics
- **Respiratory transmission**: Droplet/aerosol (influenza <50% secondary attack; delta/omicron higher)
- **Fecal-oral**: Poliovirus (R0 5-7), rotavirus, norovirus
- **Incubation**: Influenza 2-3d, COVID 5d mean, RSV 4-5d, rotavirus 1-3d
- **Seasonality**: Winter respiratory; summer GI (temperate); year-round tropics`,
        mnemonics: [
          { text: "Segmented RNA Viruses", explanation: "Influenza (8 segments), Rotavirus (11 segments)" },
          { text: "Respiratory vs Enteric Routes", explanation: "Respiratory: droplet/aerosol; Fecal-oral: stable GI" }
        ],
        keyPoints: [
          "Influenza: Segmented; antigenic drift yearly, shift pandemic potential",
          "RSV: Most common viral lower respiratory infants <2 years; bronchiolitis",
          "SARS-CoV-2: Novel pandemic; ACE2 receptor; asymptomatic 40-50%",
          "Poliovirus: Fecal-oral transmission; motor neuron paralysis; eradication ongoing",
          "Rotavirus: Most common gastroenteritis <5 years; vaccine effective",
          "Norovirus: Epidemic gastroenteritis adults; airborne possible"
        ],
        textbookRefs: [
          { book: "Jawetz Melnick & Adelberg's Medical Microbiology", chapter: "37-38: Respiratory & Enteric", edition: "28th" }
        ]
      },
      {
        layer: 2,
        slug: "resp-enteric-virus-layer-2-mechanism",
        title: "Respiratory & Enteric Viruses - Mechanism",
        estimatedMinutes: 30,
        summary: "Viral replication in respiratory epithelium, intestinal tropism, antigenic drift/shift, and pathophysiology of complications.",
        contentMd: `# Pathophysiology & Pathogenesis

## Influenza Antigenic Variation
- **Drift**: Point mutations HA/NA yearly; gradual antibody loss
- **Shift**: Reassortment of 8 segments in co-infection; novel virus, pandemic potential
- **Neuraminidase inhibitors**: Block sialic acid cleavage; prevent viral release

## Respiratory Epithelial Infection
- **HA receptor binding**: Sialic acid (α-2,6 linked in humans; α-2,3 in avian)
- **Cytopathology**: Epithelial damage → loss of ciliary clearance
- **Secondary bacterial**: S. aureus, S. pneumoniae (day 5-7 after viral onset)
- **Cytokine storm**: TNF-α, IL-6 → ARDS (especially 2009 H1N1)

## Poliovirus Motor Neuron Pathogenesis
- **Replication**: Peyer's patches → viremia → anterior horn motor neurons
- **Neuronal necrosis**: Lytic infection of motor neurons
- **Paralysis**: Lower motor neuron pattern; typically asymmetric
- **Recovery**: Nerve sprouting; incomplete strength recovery

## Rotavirus Diarrhea Mechanism
- **Villous atrophy**: Epithelial loss, shortened villi
- **Osmotic diarrhea**: Loss of absorptive surface; increased osmolarity
- **Secretory component**: NSP4 toxin-mediated secretion
- **Dehydration**: Major complication; electrolyte loss

## SARS-CoV-2 Pathogenesis
- **ACE2 receptor**: Epithelial cells (respiratory, GI, endothelium)
- **Type I IFN response**: Initial control; delayed in severe disease
- **Hyperinflammation**: IL-6, TNF-α, IL-1 dysregulation
- **Endothelial damage**: Microthrombi, DIC, ARDS
- **IRIS-like**: Post-COVID syndrome (fatigue, dyspnea, cognitive dysfunction)`,
        mnemonics: [
          { text: "Influenza Antigenic Changes", explanation: "Drift (mutations yearly), Shift (reassortment pandemic)" },
          { text: "SARS-CoV-2 ACE2 Tropism", explanation: "ACE2 on respiratory, GI, endothelium; multi-system disease" }
        ],
        keyPoints: [
          "Influenza: Segmented genome enables shift (reassortment); drift gradual change",
          "Respiratory epithelial damage → secondary bacterial (S. aureus, S. pneumoniae)",
          "Poliovirus: Motor neuron lytic infection; flaccid paralysis",
          "Rotavirus: Villous atrophy, osmotic diarrhea; dehydration complication",
          "SARS-CoV-2: ACE2 tropism; hyperinflammation in severe; microthrombi"
        ],
        textbookRefs: [
          { book: "Jawetz Melnick & Adelberg's Medical Microbiology", chapter: "37-38: Pathogenesis", edition: "28th" }
        ]
      },
      {
        layer: 3,
        slug: "resp-enteric-virus-layer-3-clinical",
        title: "Respiratory & Enteric Viruses - Clinical",
        estimatedMinutes: 35,
        summary: "Influenza presentations, RSV bronchiolitis, COVID-19 severity, polio paralysis, rotavirus/norovirus management, and Indian context.",
        contentMd: `# Clinical Presentations & Management

## Influenza
- **Presentation**: Sudden fever, malaise, myalgia, headache
- **Complications**: Pneumonia (viral, secondary bacterial), myositis, encephalitis
- **High-risk**: Age >65, chronic disease, pregnancy, immunocompromised
- **Treatment**: Oseltamivir <48h (60% duration reduction); neuraminidase inhibitors
- **Secondary bacterial**: S. aureus (MRSA), S. pneumoniae (day 5-7 post-flu onset)

## RSV (Bronchiolitis)
- **Peak**: 2-12 months; wheezing, tachypnea, hypoxemia
- **Pathophysiology**: Small airway inflammation, air trapping
- **Diagnosis**: Immunofluorescence, RT-PCR
- **Management**: Supportive (oxygen, fluids); ribavirin in severe/immunocompromised

## SARS-CoV-2 (COVID-19)
- **Mild (80-85%)**: Cough, sore throat, fever; no hospitalization
- **Moderate (10-15%)**: Bilateral infiltrates, mild hypoxemia (SpO2 >90%)
- **Severe (3-5%)**: ARDS (SpO2 <90%), bilateral infiltrates, PaO2/FiO2 <300
- **Treatment**:
  - Mild: Supportive only
  - Moderate-severe (SpO2 <94%): Remdesivir + dexamethasone
  - High-risk mild (within 5d): Paxlovid (nirmatrelvir/ritonavir)
  - Thrombosis risk: Anticoagulation
- **Mortality**: 1-2% overall; higher age >60, comorbidities

## Poliovirus (Poliomyelitis)
- **Minor illness** (most): Nonspecific fever, resolves
- **Non-paralytic**: Meningitis signs; recovery typical
- **Paralytic** (0.1-1%): Flaccid asymmetric paralysis (lower motor neuron)
  - Bulbar: Dysphagia, dysarthria, respiratory paralysis
  - Spinal: Leg weakness/paralysis
- **Mortality**: Bulbar ~5-10% (respiratory failure)
- **Eradication**: Endemic only Afghanistan, Pakistan; India polio-free since 2011

## Rotavirus Gastroenteritis
- **Peak**: 6-24 months; watery diarrhea (5-10 stools/day), vomiting, fever
- **Duration**: 3-8 days; diarrhea outlasts vomiting
- **Complication**: Dehydration; electrolyte loss
- **Management**: ORS primary; continue feeding; vaccine prevents severe disease
- **Vaccine**: RotaTeq (3 doses), Rotarix (2 doses)

## Norovirus Outbreaks
- **Settings**: Schools, cruise ships, healthcare facilities
- **Attack rate**: >50%; explosive onset
- **Duration**: 24-72 hours
- **Management**: ORS, isolation 48h post-symptom resolution
- **Disinfection**: Bleach/hypochlorite (alcohol NOT effective)

## India Context
- **Polio surveillance**: AFP program monitors for vaccine-derived poliovirus
- **Influenza**: Winter peaks; dual burden with COVID
- **Rotavirus**: High burden despite vaccine availability
- **COVID-19**: High prevalence; ongoing vaccination campaigns`,
        mnemonics: [
          { text: "Flu Complications Severe", explanation: "Secondary bacterial pneumonia day 5-7; S. aureus/S. pneumoniae" },
          { text: "COVID ARDS", explanation: "Bilateral infiltrates, SpO2<90%, PaO2/FiO2<300; remdesivir+dexamethasone" },
          { text: "Norovirus Bleach Disinfection", explanation: "Bleach/hypochlorite 1:10 effective; alcohol NOT" }
        ],
        keyPoints: [
          "Influenza: Neuraminidase inhibitors <48h; secondary bacterial day 5-7",
          "RSV: Infants <2 years, wheezing, supportive care, ribavirin in severe",
          "COVID-19: Bilateral infiltrates, remdesivir+dex if SpO2<94%, Paxlovid if high-risk <5d",
          "Polio: Flaccid paralysis asymmetric, bulbar/spinal variants, eradication ongoing",
          "Rotavirus: Watery diarrhea, ORS (main treatment), vaccine effective",
          "Norovirus: Explosive outbreaks, bleach disinfection, airborne possible"
        ],
        textbookRefs: [
          { book: "Jawetz Melnick & Adelberg's Medical Microbiology", chapter: "37-38: Diseases", edition: "28th" }
        ]
      },
      {
        layer: 4,
        slug: "resp-enteric-virus-layer-4-exam",
        title: "Respiratory & Enteric Viruses - Exam Prep",
        estimatedMinutes: 25,
        summary: "High-yield diagnostic clues, treatment algorithms, and rapid reference.",
        contentMd: `# Exam High-Yield

## Rapid Diagnostic Clues
- **Sudden fever + myalgia**: Influenza >> RSV
- **Barking cough**: Parainfluenza (croup) > RSV
- **Wheezing infant**: RSV (bronchiolitis)
- **Watery diarrhea <5y**: Rotavirus > Norovirus
- **Explosive GI outbreak**: Norovirus >> Rotavirus
- **Flaccid paralysis asymmetric**: Poliovirus (GBS ascending)

## Treatment Timing
- **Influenza oseltamivir**: <48h optimal (60% duration ↓)
- **COVID Paxlovid**: <5 days high-risk (90% hospitalization ↓)
- **Rotavirus ORS**: Anytime (supportive)
- **Polio**: Supportive only (no antiviral)

## Vaccines Quick Reference
| Vaccine | Type | Efficacy | Duration |
|---------|------|----------|----------|
| **Influenza** | Inactivated | 40-60% | 1 year |
| **IPV** | Inactivated | >95% | Boosters |
| **OPV** | Live-attenuated | >95% | Lifelong |
| **RotaTeq** | Live-attenuated | 85-98% | Lifelong |
| **COVID mRNA** | mRNA | 90-95% | Waning 1yr |`,
        mnemonics: [
          { text: "Oseltamivir <48h", explanation: "Most effective within 48 hours of symptom onset" },
          { text: "Paxlovid <5d High-Risk", explanation: "COVID: within 5 days; high-risk only (age, comorbidity)" }
        ],
        keyPoints: [
          "Influenza: Oseltamivir <48h; secondary bacterial day 5-7",
          "RSV: Diagnosis IF/RT-PCR; supportive care; ribavirin severe",
          "COVID: RT-PCR gold std; remdesivir+dex SpO2<94%; Paxlovid high-risk <5d",
          "Polio: RT-PCR; flaccid paralysis; eradication ongoing",
          "Rotavirus: ELISA; ORS primary; vaccine prevents",
          "Norovirus: PCR; bleach disinfection; self-limited"
        ],
        textbookRefs: [
          { book: "Jawetz Melnick & Adelberg's Medical Microbiology", chapter: "37-38: Summary", edition: "28th" }
        ]
      },
      {
        layer: 5,
        slug: "resp-enteric-virus-layer-5-active-recall",
        title: "Respiratory & Enteric Viruses - Active Recall",
        estimatedMinutes: 20,
        summary: "Case-based Q&A on diagnostics, management, and complications.",
        contentMd: `# Active Recall Q&A

**Q1:** 6-month-old with cough, wheezing, tachypnea (60/min), SpO2=85%. CXR hyperinflation. Diagnosis?
**A1:** RSV bronchiolitis; oxygen+supportive; no antibiotics; ribavirin only if severe/immunocompromised

**Q2:** 68-year-old, fever, malaise, myalgia, cough × 2d. Rapid flu positive. Management?
**A2:** Oseltamivir 75mg BID × 5 days immediately; high-risk (age 68); assess for pneumonia

**Q3:** 3-year-old, barking cough, inspiratory stridor, subglottic narrowing CXR. Diagnosis?
**A3:** Parainfluenza croup; dexamethasone 0.6mg/kg; supportive (humidified air)

**Q4:** 45-year-old hospitalized, bilateral infiltrates, SpO2=88% on room air, fever, COVID PCR+. Treatment?
**A4:** Remdesivir 200mg IV day 1, then 100mg × 4 more + dexamethasone 6mg daily; oxygen; anticoagulation

**Q5:** 18-month-old with 5 watery stools/day, fever, low oral intake. Rotavirus Ag+. Management?
**A5:** ORS primary treatment; continue breastfeeding; no antivirals; dehydration main complication

**Q6:** Cruise ship: 150 passengers/crew with acute vomiting/diarrhea, 24-72h duration, attack rate >50%. Diagnosis?
**A6:** Norovirus (explosive outbreak, high attack rate); bleach disinfection; self-limited

**Q7:** 9-month-old, flaccid bilateral leg paralysis, fever × 2w, diarrhea. CSF lymphocytic, normal glucose. Diagnosis?
**A7:** Poliomyelitis (flaccid asymmetric); stool RT-PCR; India surveillance critical

**Q8:** Influenza patient, day 7, sudden SOB, RLL infiltrate, MRSA in sputum. What happened?
**A8:** Secondary bacterial pneumonia (S. aureus MRSA); occurred day 5-7 post-flu; requires antibiotics

**Q9:** 2-day-old, respiratory distress, bilateral infiltrates CXR. Mother COVID PCR+ at delivery. Diagnosis?
**A9:** Vertical transmission COVID; neonatal COVID pneumonia; likely mild; supportive care

**Q10:** Pandemic alert: New influenza strain H1N2 (swine+avian combination) emerges. Mechanism?
**A10:** Antigenic shift; reassortment of genome segments; co-infection → novel virus, pandemic potential`,
        mnemonics: [],
        keyPoints: [
          "RSV bronchiolitis: Infants <2yr, wheezing, hyperinflation, supportive care",
          "Influenza: Oseltamivir <48h; secondary bacterial day 5-7 (S. aureus/pneumo)",
          "COVID: RT-PCR gold std; remdesivir+dex SpO2<94%; Paxlovir high-risk <5d",
          "Polio: Flaccid asymmetric paralysis; eradication ongoing",
          "Rotavirus: ORS main therapy; vaccine effective",
          "Norovirus: Explosive outbreaks, bleach effective, self-limited"
        ],
        textbookRefs: [
          { book: "Jawetz Melnick & Adelberg's Medical Microbiology", chapter: "37-38: Cases", edition: "28th" }
        ]
      }
    ]
  }
];
