import type { TopicLessons } from "./content-loader";

export const medicineGapInfectiousLessons: TopicLessons[] = [
  {
    topicCode: "IM-MOD-09-TOP-06",
    layers: [
      {
        layer: 1,
        slug: "protozoal-infections-foundation",
        title: "Protozoal Infections - Foundation",
        estimatedMinutes: 25,
        summary: "Overview of key protozoal infections endemic to India including malaria, leishmaniasis, and amoebiasis with classification and epidemiology.",
        contentMd: `# Protozoal Infections - Foundation

## Classification of Medically Important Protozoa

### Sporozoa (Intracellular)
- **Malaria**: Plasmodium species
- **Toxoplasmosis**: Toxoplasma gondii
- **Cryptosporidiosis**: Cryptosporidium

### Flagellates (Motile by Flagella)
- **Leishmaniasis**: Leishmania donovani, L. tropica, L. braziliensis
- **Sleeping sickness**: Trypanosoma brucei
- **Chagas disease**: Trypanosoma cruzi

### Ciliates
- **Balantidiasis**: Balantidium coli (rare)

### Amoebae
- **Amoebiasis**: Entamoeba histolytica
- **Brain infection**: Naegleria fowleri

## Malaria - Indian Context

### Epidemiology in India
- **Endemic areas**: Malaria belt (20°N latitude) - entire states of Jharkhand, Chhattisgarh, Odisha, parts of AP, MP
- **Transmission**: Monsoonal (June-November), year-round in some areas
- **Vectors**: Anopheles culicifacies (rural), A. stephensi (urban), A. fluviatilis (hilly)
- **Drug resistance**: High chloroquine resistance in P. falciparum, emerging artemisinin resistance in Southeast Asia

### Plasmodium Species and Clinical Differences
| Species | RBC Type | Fever Pattern | Severity | Incubation |
|---------|----------|---------------|----------|------------|
| P. vivax | Young RBCs | Tertian (48h) | Benign | 10-14 days |
| P. falciparum | Any RBC | Quotidian/irregular | Malignant | 9-14 days |
| P. malariae | Mature RBCs | Quartan (72h) | Mild | 18-40 days |
| P. ovale | Young RBCs | Tertian | Mild | 12-18 days |

## Leishmaniasis

### Types Endemic to India
1. **Visceral Leishmaniasis (VL) - Kala-azar**
   - Caused by Leishmania donovani
   - Endemic in Bihar, Jharkhand, West Bengal, Uttar Pradesh
   - Man is the only reservoir
   - Transmitted by female Phlebotomus argentipes (anthroponotic)
   - Incubation: 2 weeks to 10 months

2. **Cutaneous Leishmaniasis**
   - L. tropica (anthroponotic, urban)
   - L. major (zoonotic, rural/desert)
   - Self-limiting in 3-12 months

3. **Mucocutaneous Leishmaniasis**
   - Caused by L. braziliensis (mainly in Americas)
   - Rare in India

## Amoebiasis

### Classification
1. **Intestinal Amoebiasis**
   - Asymptomatic cyst passer (10% of world)
   - Acute amoebic dysentery (bloody diarrhea)
   - Amoeboma (granuloma formation)

2. **Extraintestinal Amoebiasis**
   - Amoebic liver abscess (10% of patients with intestinal disease)
   - Brain abscess (rare, fatal)
   - Lung abscess
   - Pericardial involvement

### Epidemiology
- Worldwide: 50 million infected
- India: 5-20% infected in endemic areas
- Urban slums with poor sanitation
- Fecal-oral transmission via contaminated water

## Transmission and Epidemiology Summary

| Infection | Vector/Mode | Endemic Areas | Incubation |
|-----------|------------|----------------|------------|
| Malaria | Anopheles mosquito | Malaria belt, year-round tropical | 9-40 days |
| VL (Kala-azar) | Phlebotomus sand fly | Bihar, Jharkhand, WB, UP | 2 weeks-10 months |
| CL | Sand fly | Arid, semi-arid regions | Variable |
| Amoebiasis | Fecal-oral (water) | Poor sanitation areas | 2-4 weeks |`,
        mnemonics: [
          { text: "PVFO: Plasmodium order", explanation: "P. vivax, P. falciparum, P. ovale, P. malariae" },
          { text: "Malaria Fever: V=Vivax (48h), F=Falciparum (irregular), M=Malariae (72h)", explanation: "Vivax and ovale tertian; malariae quartan; falciparum quotidian" },
          { text: "Kala-azar: K=Know Bihar, A=Anthroponotic, L=Leishmania, A=Anopheles", explanation: "Endemic in Bihar/Jharkhand, man-to-man via Phlebotomus sand fly" },
          { text: "Leish belt: Donovani=Desh (India), Tropica=Tropical drylands, Major=Middle east", explanation: "L. donovani = visceral (India); L. tropica = cutaneous (urban); L. major = cutaneous (rural)" }
        ],
        keyPoints: [
          "Malaria is transmitted by Anopheles mosquito; P. vivax and P. ovale tertian fever; P. falciparum quotidian/irregular",
          "P. falciparum causes severe malaria with cerebral complications, renal failure, pulmonary edema",
          "Kala-azar (VL) endemic in Bihar, transmitted by Phlebotomus sand fly, affects spleen and liver",
          "Amoebiasis transmitted via fecal-oral route; intestinal disease asymptomatic in 90%; liver abscess in 10%",
          "India's malaria belt includes Jharkhand, Chhattisgarh, Odisha with high chloroquine resistance"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "219: Malaria", edition: "21st" },
          { book: "Harrison's Principles of Internal Medicine", chapter: "221: Leishmaniasis", edition: "21st" },
          { book: "Harrison's Principles of Internal Medicine", chapter: "228: Intestinal Nematodes", edition: "21st" }
        ]
      },
      {
        layer: 2,
        slug: "protozoal-infections-mechanism",
        title: "Protozoal Infections - Mechanism",
        estimatedMinutes: 30,
        summary: "Detailed pathophysiology of malaria parasitaemia, immune evasion, P. vivax vs P. falciparum pathology, and mechanism of amoebiasis tissue invasion.",
        contentMd: `# Protozoal Infections - Pathophysiology

## Malaria Parasitaemia and Clinical Features

### Life Cycle in Human Host
1. **Inoculation by mosquito**: Sporozoites injected into bloodstream
2. **Hepatic schizonts (exoerythrocytic)**: Sporozoites travel to liver, multiply (6-30 days)
3. **Erythrocytic schizonts**: Released RBCs → parasite multiplication
4. **Gametocyte formation**: Sexual stage for mosquito transmission

### Hemolysis and Pathology Mechanisms

**P. falciparum:**
- Produces knobs on RBC surface (cytoadherence)
- Sequestration in microvasculature (brain, kidneys, lungs)
- Causes RBC rigidity and obstruction
- Parasite toxins (GPI anchor) activate TLR → cytokine storm (TNF, IL-6)
- Rosetting: infected RBCs adhere to uninfected RBCs
- Results: severe anemia, cerebral malaria, acute kidney injury

**P. vivax/P. ovale:**
- Prefer young RBCs → lower parasitaemia (<1%)
- Less cytoadherence
- Dormant hypnozoites in liver → relapse (6 months to 2 years)
- Generally milder disease

**P. malariae:**
- Prefers mature RBCs
- Quartan fever (72-hour cycle)
- Can cause chronic infections (years)
- Associated with immune complex glomerulonephritis

### Fever Pattern Mechanism
- Synchronized RBC rupture releases merozoites
- Toxic metabolites + cytokines (TNF, IL-1, IL-6) cause fever spike
- Tertian (48h): synchronized with 2 RBC cycles
- Quartan (72h): synchronized with 3 RBC cycles

## Leishmaniasis Pathophysiology

### Visceral Leishmaniasis (Kala-azar)

**Parasite Mechanisms:**
- Leishmania donovani preferentially infects macrophages
- Escapes phagolysosome by blocking fusion
- Produces lipophosphoglycan (LPG) coat → antigenic variation
- Th1 → Th2 shift → immunosuppression (IL-10, TGF-β)

**Host Response:**
- Initial Th1 response (IFN-γ activation of macrophages)
- Immune evasion → Th2 shift → disease progression
- Massive splenic hyperplasia (parasites in macrophages)
- Hepatomegaly from liver infiltration
- Pancytopenia from bone marrow infiltration

**Tissue Involvement:**
- Liver: hepatomegaly, cirrhosis with chronic infection
- Spleen: massive splenomegaly (up to 3-5 kg)
- Bone marrow: hemophagocytosis, pancytopenia
- Skin: post-kala-azar dermatitis (PKDL) from immune reconstitution

## Amoebiasis Pathophysiology

### Intestinal Invasion
- Trophozoite adherence to colonic mucosa via lectin binding
- Secretion of cysteine proteases and collagenase
- Invasion through epithelium → ulceration (flask-shaped)
- Can perforate colon → peritonitis

### Immune Response
- Most infected individuals remain asymptomatic
- IgG antibodies appear after tissue invasion
- Cell-mediated immunity (T cells) important for control
- Antibody-mediated complement activation aids parasite killing

### Extraintestinal Spread
- Trophozoites enter portal blood via hepatic sinusoids
- Ameboid invasion of liver parenchyma
- Liquefactive necrosis (unlike bacterial abscess which has pus)
- "Anchovy paste" appearance (sterile, brownish-red material)
- Can rupture into peritoneal cavity, pleura, pericardium

## Immunity and Immune Evasion

**Malaria:**
- Variant surface antigens (VSA) → antibody escape
- Falciparum erythrocyte membrane protein-1 (PfEMP1) changes
- Partial immunity develops after repeated exposure (premunition)
- Age/transmission intensity-dependent

**Leishmaniasis:**
- Th1→Th2 shift critical for disease progression
- IL-10 and TGF-β suppress Th1 response
- Cure requires restoration of Th1 immunity

**Amoebiasis:**
- Intestinal: mucosal IgA important
- Extraintestinal: serology becomes positive (95% in liver abscess)`,
        mnemonics: [
          { text: "Malaria Life Cycle: SHEG", explanation: "Sporozoite → Hepatic schizonts → Erythrocytic schizonts → Gametocytes" },
          { text: "P. falciparum: Knobs, Sequestration, Cytokine storm", explanation: "Cytoadherence via knobs → sequestration → TNF/IL-6 surge → severe disease" },
          { text: "Kala-azar Organs: SSB", explanation: "Spleen (massive), Skin (PKDL), Bone marrow (pancytopenia)" },
          { text: "Amoebiasis Liver: Flask-shaped ulcers, Anchovy paste, Sterile", explanation: "Liquefactive necrosis (sterile unlike bacterial) with anchovy paste appearance" }
        ],
        keyPoints: [
          "P. falciparum cytoadherence via RBC knobs causes sequestration in microvasculature → cerebral malaria, AKI, ARDS",
          "P. vivax/ovale have hypnozoites in liver → relapses; P. malariae causes chronic infections with immune complex GN",
          "Fever timing: tertian (48h) with vivax/falciparum, quartan (72h) with malariae",
          "Kala-azar: massive splenomegaly from macrophage infiltration; Th1→Th2 shift enables disease progression",
          "Amoebiasis: liver abscess is sterile liquefactive necrosis (anchovy paste) from trophozoite invasion via portal blood"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "219: Malaria", edition: "21st" },
          { book: "Robbins & Cotran Pathologic Basis of Disease", chapter: "8: Infectious Diseases", edition: "10th" },
          { book: "API Textbook of Medicine", chapter: "11: Parasitic Infections", edition: "11th" }
        ]
      },
      {
        layer: 3,
        slug: "protozoal-infections-clinical",
        title: "Protozoal Infections - Clinical",
        estimatedMinutes: 25,
        summary: "Clinical presentation, diagnosis, and management of malaria, leishmaniasis, and amoebiasis with Indian context.",
        contentMd: `# Protozoal Infections - Clinical Features and Management

## Malaria Clinical Presentation

### Uncomplicated Malaria
**Prodromal Phase (24-48 hrs):**
- Headache, chills, myalgia, malaise
- Non-specific symptoms

**Febrile Phase:**
- Cold stage: shivering, rigor (15-60 mins)
- Hot stage: fever (39-41°C), flushed skin (2-6 hours)
- Sweating stage: profuse diaphoresis (2-4 hours)
- **Tertian** (P. vivax/ovale): fever every 48 hours
- **Quartan** (P. malariae): fever every 72 hours
- **Quotidian** (P. falciparum): daily or irregular fever

**Associated Symptoms:**
- Splenomegaly (most common, 50-80%)
- Hepatomegaly (20-50%)
- Jaundice
- Anemia

### Severe Malaria (P. falciparum)
**Cerebral Malaria:**
- Altered mental status, seizures, coma
- Fundoscopy: retinal hemorrhages, papilledema
- Mortality 15-20% even with treatment

**Acute Kidney Injury:**
- Rhabdomyolysis + direct parasitic toxins
- Acute tubular necrosis
- Oliguria, azotemia

**Severe Anemia:**
- Hemolysis + marrow suppression
- Hb <7 g/dL
- Risk of cardiac decompensation

**Acute Respiratory Distress Syndrome:**
- Pulmonary edema, respiratory failure
- P. falciparum sequestration in lungs

**Hypoglycemia:**
- Glucose <40 mg/dL
- Can present as seizures
- Especially in severe disease, pregnancy, children

## Diagnosis of Malaria

### Blood Smear (Gold Standard)
- **Thick smear**: Detects parasitemia (1-10 parasites/μL)
- **Thin smear**: Species identification, parasite count
- **Timing**: Morning and afternoon samples (periodicity)
- Sensitivity: 80-90% in high transmission

### RDTs (Rapid Diagnostic Tests)
- **HRP-2 antigen** (P. falciparum)
- **pLDH antigen** (all species)
- Sensitivity/Specificity: 85-95%
- Point-of-care testing

### PCR
- Gold standard for species identification
- >99% sensitivity
- Not routine in India due to cost

## Malaria Management

### Uncomplicated Malaria
**First-line: Artemisinin-based Combination Therapy (ACT)**
- **Artesunate + Amodiaquine** (Asia-resistant P. falciparum)
- **Artemether + Lumefantrine**
- **Dihydroartemisinin + Piperaquine**
- **Dosing**: Artemisinin derivative 2 mg/kg days 1-3, partner drug accordingly

**P. vivax/ovale (Relapse Prevention):**
- Add Primaquine 0.75 mg/kg/day × 14 days (check G6PD first!)
- Or Tafenoquine 300 mg (single dose, post-blood feed confirmation)

**P. malariae:**
- Quinine + tetracycline (7 days)

### Severe Malaria
**Parenteral Artemisinin:**
- Artesunate IV/IM 2.4 mg/kg at 0, 24h, 48h
- Follow with ACT once able to tolerate
- Superior to quinine (25% mortality reduction)

**Supportive Care:**
- Fluid management (avoid overload, risk of ARDS)
- RBC transfusion (Hb <7)
- Dialysis for AKI
- Mechanical ventilation for ARDS
- Anticonvulsants for seizures

## Leishmaniasis Clinical Features and Management

### Visceral Leishmaniasis (Kala-azar)
**Presentation:**
- Fever (irregular, low-grade or high)
- Progressive hepatosplenomegaly (90% cases)
- Weight loss, weakness
- Cough (pulmonary involvement)
- Skin changes, darkening of skin

**Complications:**
- Secondary bacterial infection (20%)
- Bleeding (thrombocytopenia)
- Splenic rupture (rare)
- Post-kala-azar dermatitis (10-15% after treatment)

**Diagnosis:**
- Serology: rK39 rapid test (>95% specificity)
- Splenic/bone marrow aspiration: LD bodies (Leishman-Donovan bodies)
- PCR for confirmation

**Treatment:**
- **First-line**: Liposomal amphotericin B 3 mg/kg/day (cumulative 21 mg/kg)
- **Alternatives**: Miltefosine 2.5 mg/kg/day × 28 days; Paromomycin 15 mg/kg/day × 21 days
- Cure rate >95% with liposomal ampho B

### Cutaneous Leishmaniasis
- Self-limited in 3-12 months
- Intralesional amphotericin B or local heat therapy
- Systemic therapy if multiple lesions

## Amoebiasis Clinical Features and Management

### Intestinal Amoebiasis
**Asymptomatic:**
- 90% of infected individuals
- Cyst passage only

**Acute Dysentery:**
- Bloody diarrhea (20-30 stools/day)
- Tenesmus, abdominal cramps
- Fever and chills
- Weight loss

**Chronic Amoebiasis:**
- Intermittent loose stools
- Abdominal pain
- Weight loss
- Can persist years

### Extraintestinal Amoebiasis
**Amoebic Liver Abscess:**
- Most common (10% of intestinal cases, up to 70% in fulminant disease)
- Right lobe most common (80%)
- Presentation: RUQ pain, hepatomegaly, fever, jaundice
- "Anchovy paste" on aspiration (sterile, brown-red fluid)
- Ultrasound: hypoechoic or anechoic lesion

**Diagnosis:**
- **Serology**: IHA or ELISA (>95% positive in liver abscess)
- **Stool antigen**: PCR (90% in dysentery, 10% in liver abscess)
- **Imaging**: Ultrasound or CT (single or multiple lesions)

**Treatment:**
- **Intestinal**: Luminal agents - Diloxanide furoate 500 mg TDS × 10 days OR Iodoquinol 650 mg TDS × 20 days
- **Extraintestinal**: Tissue agents - Metronidazole 750 mg TDS × 7-10 days (or Tinidazole)
- **Then add luminal agent**
- **Aspiration** only if: impending rupture, diagnosis uncertain, or therapeutic purpose (large >100 mL)

### Post-treatment Followup
- Repeat imaging at 4-6 weeks
- May take months to completely resolve
- Permanent scarring common`,
        mnemonics: [
          { text: "Malaria Fever Patterns: TV QuarMal", explanation: "Tertian=Vivax/Falciparum (48h), Quartan=Malariae (72h)" },
          { text: "Cerebral Malaria: CRISP", explanation: "Coma, Retinal hemorrhages, Impaired consciousness, Seizures, Paralysis" },
          { text: "Severe Malaria: CRASH-B", explanation: "Cerebral, Renal (AKI), Anemia, Severe (respiratory/metabolic), Hypoglycemia, Bleeding" },
          { text: "Kala-azar Management: LAM-PTS", explanation: "Liposomal ampho B (first-line), Alternatives = Miltefosine, Paromomycin" },
          { text: "Amoebiasis Treatment: TMLD", explanation: "Tissue agents (Metronidazole), Luminal agents (Diloxanide, Iodoquinol)" }
        ],
        keyPoints: [
          "Malaria fever patterns: tertian (48h) with P. vivax/ovale/falciparum; quartan (72h) with P. malariae",
          "Severe P. falciparum: cerebral malaria, AKI, severe anemia, ARDS, hypoglycemia; treat with IV artesunate",
          "Kala-azar: massive splenomegaly + fever + weight loss; diagnose by serology (rK39) or LD bodies; treat with liposomal amphotericin B",
          "Amoebiasis: 90% asymptomatic cyst passers; liver abscess in 10% with 'anchovy paste' fluid; serology >95% positive",
          "Amoebiasis treatment: tissue agent (metronidazole) PLUS luminal agent (diloxanide/iodoquinol)"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "219: Malaria", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "11: Parasitic Infections", edition: "11th" },
          { book: "Harrison's Principles of Internal Medicine", chapter: "228: Amebiasis", edition: "21st" }
        ]
      },
      {
        layer: 4,
        slug: "protozoal-infections-exam",
        title: "Protozoal Infections - Exam Prep",
        estimatedMinutes: 20,
        summary: "High-yield exam facts, tables, differentials, and NEET-PG pattern MCQ concepts for protozoal infections.",
        contentMd: `# Protozoal Infections - Exam Preparation

## High-Yield Facts

### Malaria at a Glance
| Feature | P. vivax | P. falciparum | P. malariae | P. ovale |
|---------|----------|----------------|------------|----------|
| RBC preference | Young | Any | Mature | Young |
| Fever pattern | Tertian (48h) | Quotidian/irregular | Quartan (72h) | Tertian (48h) |
| Severity | Benign | Malignant | Mild | Mild |
| Hypnozoites | Yes (relapse) | No | No | Yes |
| Parasitaemia | <1% | 5-10% | <1% | <1% |
| Incubation | 10-14 days | 9-14 days | 18-40 days | 12-18 days |
| Drug of choice | ACT + Primaquine | ACT | Quinine + Tet | ACT + Primaquine |

### Severe Malaria Features
- Cerebral malaria (altered mental status, seizures, coma)
- Acute kidney injury (oliguria, azotemia)
- Severe anemia (Hb <7)
- ARDS (acute respiratory distress)
- Hypoglycemia (<40 mg/dL, may present as seizures)
- Bleeding/DIC
- Parasitaemia >5%

### Key Diagnostic Tests
**Blood Smear:** Gold standard, species ID, parasite count
**RDT:** Point-of-care, HRP-2 (P. fal) or pLDH (all species), 85-95% sensitivity
**PCR:** Gold standard for species, >99% sensitivity, not routine

### Malaria Drug Resistance in India
- P. falciparum: High chloroquine resistance (don't use)
- ACTs: No resistance yet in India
- P. vivax: Chloroquine resistance emerging in Northeast

### Treatment: Must-Knows
- **Uncomplicated P. falciparum**: ACT (artesunate-amodiaquine preferred)
- **P. vivax/ovale**: ACT + Primaquine 0.75 mg/kg/day × 14 days (check G6PD!)
- **Severe malaria**: Artesunate IV 2.4 mg/kg at 0, 24h, 48h
- **G6PD deficiency**: Cannot give Primaquine (risk of hemolysis)

## Leishmaniasis Quick Facts

| Feature | VL (Kala-azar) | CL | MCL |
|---------|----------------|-----|-----|
| Parasite | L. donovani | L. tropica, L. major | L. braziliensis |
| Geographic | Bihar, Jharkhand, WB, UP | Arid/semi-arid | Americas |
| Transmission | Phlebotomus sand fly (anthroponotic) | Sand fly | Sand fly |
| Incubation | 2 weeks-10 months | Variable | Variable |
| Clinical | Fever, hepatosplenomegaly, anemia | Skin lesion(s) | Skin + mucosal |
| Diagnosis | rK39 antigen, LD bodies | Smear, culture, serology | Biopsy, serology |
| Treatment | Liposomal ampho B (first-line) | Intralesional ampho B | Systemic therapy |

### Kala-azar Red Flags
- Massive splenomegaly (up to 5 kg)
- Pancytopenia
- Post-kala-azar dermatitis (PKDL): 10-15% after treatment
- Secondary bacterial infection: 20%

## Amoebiasis Key Points

| Feature | Intestinal | Liver Abscess |
|---------|-----------|----------------|
| Prevalence | 50 million worldwide | 10% of intestinal |
| Asymptomatic | 90% | Nil |
| Presentation | Bloody diarrhea, dysentery | RUQ pain, fever, jaundice |
| Diagnosis | Stool antigen/PCR, serology | Serology >95%, imaging |
| Fluid | N/A | Anchovy paste (sterile) |
| Treatment | Luminal agent (Diloxanide) | Metronidazole + Diloxanide |

### Critical Concept: Amoebiasis and Antibiotics
- Antidysenteric agents (Diloxanide, Iodoquinol) for luminal infection
- Tissue agents (Metronidazole, Tinidazole) for invasive disease
- **Must use BOTH**: Tissue agent for abscess + luminal agent to prevent relapse

### Exam Differential: Bloody Diarrhea
**Infectious:**
- Amoebic dysentery (blood + mucus, severe)
- Bacterial (Shigella, Salmonella) - fever, fecal leukocytes
- Campylobacter - bloody, milder
- C. difficile - colitis, pseudomembranes

**Non-infectious:**
- IBD (UC, Crohn's) - chronic, bloody
- Hemorrhoids - bright red, pain with defecation
- Diverticulitis - older patients, LLQ pain

## Common Exam Question Patterns

**Q: Fever with hepatosplenomegaly in Bihar**
A: Think kala-azar first; diagnose with rK39 antigen or serology

**Q: Cerebral malaria management**
A: IV artesunate 2.4 mg/kg, supportive care, treat as medical emergency

**Q: P. vivax treatment**
A: ACT + Primaquine (after G6PD screen); primaquine prevents relapse from hypnozoites

**Q: RUQ pain with fever, recent travel to endemic area**
A: Amoebic liver abscess; serology positive in >95%; treat with metronidazole + diloxanide

**Q: Asymptomatic person with malaria in blood smear**
A: Still treat; risk of progression especially with P. falciparum

## NVBDCP (National Vector Borne Disease Control Programme) in India
- Focuses on malaria, dengue, chikungunya, Japanese encephalitis, Kala-azar
- Kala-azar elimination program in endemic foci
- Artemisinin-based combination therapy (ACT) policy
- Free testing and treatment through public health system`,
        mnemonics: [
          { text: "PVFOM: Plasmodium order by RBC preference", explanation: "Vivax/Ovale=young; Falciparum=any; Malariae=old" },
          { text: "Fever Timing: V=48, F=quotidian, M=72", explanation: "Vivax/Ovale tertian 48h, Malariae quartan 72h, Falciparum irregular" },
          { text: "Severe Malaria: CRASH-B", explanation: "Cerebral, Renal (AKI), Anemia (Hb<7), Severe respiratory, Hypoglycemia, Bleeding" },
          { text: "Kala-azar = Bihar belt", explanation: "Leishmania donovani endemic in Bihar, Jharkhand, West Bengal, UP" },
          { text: "Amoebiasis: Anchovy paste=Sterile, unlike pus", explanation: "Amoebic abscess is liquefactive necrosis, not suppurative" }
        ],
        keyPoints: [
          "P. vivax/ovale: tertian fever (48h), benign, have hypnozoites (relapse); P. falciparum: quotidian/irregular, severe, no relapse",
          "Severe P. falciparum: cerebral malaria, AKI, ARDS, hypoglycemia, parasitaemia >5%; treat with IV artesunate",
          "Kala-azar: endemic in Bihar belt; massive splenomegaly; diagnose rK39 antigen or serology; treat liposomal amphotericin B",
          "Amoebiasis: 90% asymptomatic; liver abscess in 10% with serology >95% positive; anchovy paste is sterile",
          "Amoebiasis treatment: BOTH tissue agent (metronidazole) AND luminal agent (diloxanide) required"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "219: Malaria", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "11: Parasitic Infections", edition: "11th" }
        ]
      },
      {
        layer: 5,
        slug: "protozoal-infections-active-recall",
        title: "Protozoal Infections - Active Recall",
        estimatedMinutes: 15,
        summary: "Flashcard-based active recall for rapid learning and retention of protozoal infection concepts.",
        contentMd: `# Protozoal Infections - Active Recall Flashcards

**Q1: What are the four human Plasmodium species and how do they differ by RBC preference?**
A: P. vivax (young RBCs), P. ovale (young RBCs), P. falciparum (any RBC), P. malariae (mature RBCs).

**Q2: Describe the fever pattern of each Plasmodium species.**
A: Tertian (48h) = vivax, ovale, falciparum (though falciparum irregular); Quartan (72h) = malariae.

**Q3: Which Plasmodium species have hypnozoites and what is their clinical significance?**
A: P. vivax and P. ovale have dormant hypnozoites in liver causing relapse weeks to years later; primaquine needed for cure.

**Q4: What is the mechanism of cytoadherence in P. falciparum and why is it clinically important?**
A: P. falciparum produces knobs on RBC surface → sequestration in microvasculature (brain, kidneys, lungs) → severe complications like cerebral malaria, AKI, ARDS.

**Q5: Explain the pathophysiology of cerebral malaria.**
A: Cytoadherence → sequestration in cerebral vessels → obstruction → hypoxia; parasitic toxins (GPI anchors) activate TLR → massive TNF/IL-6 release → blood-brain barrier disruption → altered mental status, seizures, coma.

**Q6: What are the components of severe malaria (WHO criteria)?**
A: Cerebral malaria, severe anemia (Hb <7), AKI (creatinine >3), severe acidosis, severe hypoglycemia (<40 mg/dL), parasitaemia >5%, circulatory collapse, pulmonary edema (ARDS), spontaneous bleeding/DIC.

**Q7: What is the drug of choice for uncomplicated malaria in India and why?**
A: Artemisinin-based combination therapy (ACT) because of high chloroquine resistance in P. falciparum; options include artesunate-amodiaquine, artemether-lumefantrine, DHA-piperaquine.

**Q8: How do you treat P. vivax malaria and what is the critical additional step?**
A: ACT + Primaquine 0.75 mg/kg/day for 14 days to eliminate hypnozoites. CRITICAL: Check G6PD first as primaquine causes hemolysis in deficient patients.

**Q9: What is the treatment for severe malaria?**
A: IV artesunate 2.4 mg/kg at 0, 24h, 48h hours, then switch to oral ACT once tolerable; supportive care (fluid management, transfusion, dialysis, mechanical ventilation as needed).

**Q10: What is the parasitemia threshold above which malaria is considered severe?**
A: >5% parasitaemia (any species, even P. vivax) indicates severe/complicated malaria.

**Q11: Describe the endemic areas of malaria in India.**
A: Malaria belt along 20°N latitude; endemic in Jharkhand, Chhattisgarh, Odisha, Andhra Pradesh, Madhya Pradesh; year-round in tropical areas; monsoonal pattern (June-November) in temperate areas.

**Q12: What is kala-azar and which geographic regions in India are affected?**
A: Visceral leishmaniasis caused by Leishmania donovani; endemic in Bihar, Jharkhand, West Bengal, Uttar Pradesh; man is only reservoir; transmitted by Phlebotomus argentipes sand fly (anthroponotic).

**Q13: Describe the clinical presentation of kala-azar.**
A: Fever (irregular), progressive hepatosplenomegaly (spleen up to 5 kg), weight loss, weakness, anemia, pancytopenia, darkening of skin.

**Q14: How is kala-azar diagnosed?**
A: Serology (rK39 rapid test >95% specific), LD bodies (Leishman-Donovan bodies) on splenic or bone marrow aspiration, PCR.

**Q15: What is the first-line treatment for visceral leishmaniasis?**
A: Liposomal amphotericin B 3 mg/kg/day, cumulative dose 21 mg/kg; cure rate >95%; alternatives = miltefosine or paromomycin.

**Q16: What is post-kala-azar dermatitis (PKDL) and when does it occur?**
A: Occurs in 10-15% of treated kala-azar patients; presents with hypopigmented or hyperpigmented skin lesions; indicates incomplete parasite clearance or immune reconstitution phenomenon.

**Q17: Describe the epidemiology and transmission of amoebiasis.**
A: 50 million infected worldwide, 5-20% in endemic Indian areas; fecal-oral transmission via contaminated water; associated with poor sanitation, urban slums.

**Q18: What percentage of amoebiasis patients are asymptomatic?**
A: 90% are asymptomatic cyst passers; only 10% develop intestinal symptoms, 10% of those develop extraintestinal disease (liver abscess most common).

**Q19: Describe amoebic liver abscess appearance on imaging and on aspiration.**
A: Ultrasound: hypoechoic or anechoic lesion (right lobe 80%); aspiration shows "anchovy paste" - sterile, brown-red, liquefactive necrosis (unlike bacterial pus).

**Q20: What is the diagnostic serology for amoebic liver abscess and how sensitive is it?**
A: IHA (indirect hemagglutination assay) or ELISA; >95% positive in liver abscess; <10% positive in asymptomatic intestinal infection.

**Q21: Explain the treatment regimen for amoebic liver abscess.**
A: BOTH required: tissue agent (metronidazole 750 mg TDS × 7-10 days OR tinidazole) PLUS luminal agent (diloxanide furoate 500 mg TDS × 10 days OR iodoquinol 650 mg TDS × 20 days) to eradicate intestinal infection.

**Q22: When should amoebic liver abscess be aspirated?**
A: Only if: impending rupture (thin-walled, large >100 mL), uncertain diagnosis, or therapeutic aspiration for decompression.

**Q23: Distinguish between asymptomatic malaria and clinical malaria.**
A: Asymptomatic parasitaemia (especially P. vivax/malariae with <1%) can occur; still must treat due to transmission risk and potential progression (especially P. falciparum).

**Q24: How does immunity to malaria develop and what is "premunition"?**
A: Partial immunity develops after repeated exposure; "premunition" = individuals with active parasitaemia remain asymptomatic (immunity suppresses clinical symptoms but not parasites); age/transmission intensity dependent.

**Q25: What is the mechanism of drug resistance in Plasmodium and what is the status in India?**
A: Resistance mechanisms include altered drug metabolism (PfDHFR mutations), altered drug target (PfDHPS mutations), P-glycoprotein efflux pumps; chloroquine resistance high in P. falciparum (don't use); ACTs have no resistance in India yet.`
,
        mnemonics: [
          { text: "Plasmodium RBC: Young=VO, Any=F, Old=M", explanation: "Vivax/Ovale prefer young; Falciparum any; Malariae mature" },
          { text: "Fever: Vivax=V(48h), Falciparum=F(quotidian), Malariae=M(72h)", explanation: "Tertian vs Quartan patterns" },
          { text: "Hypnozoites: VO only", explanation: "P. vivax and P. ovale have dormant liver forms → relapse" },
          { text: "Severe Malaria: CRASH-B", explanation: "Cerebral, Renal, Anemia (<7), Severe respiratory, Hypoglycemia, Bleeding" },
          { text: "Kala-azar: Bihar+Donovani=Bad", explanation: "L. donovani in Bihar belt causes visceral disease" },
          { text: "Amoebiasis: 90-10-10", explanation: "90% asymptomatic, 10% intestinal disease, 10% liver abscess" },
          { text: "Amoebic Abscess: Anchovy=Sterile", explanation: "Liquefactive necrosis NOT bacterial pus" },
          { text: "Amoebiasis Rx: TL", explanation: "Tissue agent (Metronidazole) + Luminal agent (Diloxanide)" },
          { text: "ACT > Chloroquine", explanation: "Don't use chloroquine for P. falciparum in India; use ACT" },
          { text: "Primaquine: G6PD check first", explanation: "Risk of severe hemolysis if deficient" }
        ],
        keyPoints: [
          "Plasmodium vivax/ovale: young RBCs, tertian fever, have hypnozoites (relapse), benign course",
          "P. falciparum: any RBC, quotidian/irregular fever, cytoadherence → sequestration → severe disease (cerebral, renal, ARDS)",
          "Severe malaria: cerebral manifestations, AKI, ARDS, hypoglycemia, parasitaemia >5%; treat with IV artesunate",
          "Kala-azar endemic in Bihar belt; massive splenomegaly; diagnose with serology/LD bodies; treat with liposomal amphotericin B",
          "Amoebiasis: 90% asymptomatic; 10% develop liver abscess with sterile anchovy paste fluid; treat with both tissue and luminal agents"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "219: Malaria", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "11: Parasitic Infections", edition: "11th" }
        ]
      }
    ]
  },
  {
    topicCode: "IM-MOD-09-TOP-07",
    layers: [
      {
        layer: 1,
        slug: "helminthic-infections-foundation",
        title: "Helminthic Infections - Foundation",
        estimatedMinutes: 25,
        summary: "Classification and overview of medically important helminths endemic to India including filariasis, hookworm, and other nematodes.",
        contentMd: `# Helminthic Infections - Foundation

## Classification of Medically Important Helminths

### Nematodes (Roundworms)
**Soil-transmitted:**
- **Hookworm** (Necator americanus, Ancylostoma duodenale)
- **Ascaris lumbricoides** (roundworm)
- **Strongyloides stercoralis**
- **Trichuris trichiura** (whipworm)

**Tissue-dwelling:**
- **Wuchereria bancrofti** (lymphatic filariasis)
- **Brugia malayi** (lymphatic filariasis)
- **Onchocerca volvulus** (river blindness)

### Cestodes (Tapeworms)
- **Taenia solium** (pork tapeworm, neurocysticercosis)
- **Taenia saginata** (beef tapeworm)
- **Diphyllobothrium latum** (fish tapeworm)
- **Echinococcus** (hydatid disease)

### Trematodes (Flukes)
- **Schistosoma** (blood flukes)
- **Clonorchis** (liver fluke)

## Lymphatic Filariasis (Indian Context)

### Epidemiology in India
- **Endemic belt**: Entire India, concentrated in coastal, delta, and river regions
- **Vectors**:
  - **W. bancrofti** (90% of cases): Culex fatigans (urban)
  - **B. malayi** (10% of cases): Anopheles, Mansonia (rural)
- **Global burden**: 120 million infected, 40 million with clinical disease
- **India-specific**: Highest burden, particularly in coastal states

### Clinical Manifestations
1. **Asymptomatic Microfilaremia** (70-80%)
   - Circulating microfilariae
   - Mostly asymptomatic (nocturnal periodicity)

2. **Acute Adenolymphangitis** (ALN)
   - Fever, tender lymphadenopathy
   - Lymphangitis
   - Can relapse multiple times

3. **Chronic Manifestations**
   - **Lymphedema**: Localized swelling (arm, leg)
   - **Elephantiasis**: Chronic lymphedema with skin thickening, fibrosis
   - **Scrotal elephantiasis** (genital filariasis)
   - **Tropical pulmonary eosinophilia** (TPE): cough, asthma, fever, hypereosinophilia

## Hookworm (Indian Context)

### Epidemiology
- **India**: Highest burden globally (100-200 million infected)
- **Prevalence**: 20-30% in endemic areas (rural, poor sanitation)
- **Iron deficiency**: Significant public health burden
- **Species**:
  - **Ancylostoma duodenale** (Mediterranean, Middle East, North Africa)
  - **Necator americanus** (tropical, subtropical including India)

### Pathophysiology
- Larvae penetrate skin → bloodstream → lungs → airways → swallowed → intestine
- Adult worms in small intestine cause blood loss (0.03-0.3 mL per worm daily)
- **300 worms** = 0.5 kg iron loss annually

### Clinical Features
- **Acute**: Ground itch (itching at inoculation site), pneumonitis (during lung passage)
- **Chronic**: Iron deficiency anemia, protein malnutrition, growth retardation in children
- **Heavy infections**: Severe anemia, cardiac failure, death

## Other Important Nematodes

### Ascaris lumbricoides (Roundworm)
- Largest intestinal nematode (25 cm)
- **India**: Common, especially children (30-50% prevalence in endemic areas)
- **Clinical**: Abdominal pain, malnutrition, pneumonitis, intestinal obstruction (rare)
- **Diagnosis**: Stool microscopy (distinctive eggs)

### Strongyloides stercoralis
- **Unique**: Autoinfection possible
- **Hyperinfection syndrome**: In immunocompromised (HIV, steroids) → CNS involvement, fatal if untreated
- **Clinical**: Abdominal pain, diarrhea, rash (larva currens)

## Hydatid Disease (Echinococcosis)

### Epidemiology
- **Causal agent**: Echinococcus granulosus (cystic hydatid disease) or E. multilocularis (alveolar)
- **Definitive host**: Dogs, wolves
- **Intermediate host**: Sheep, cattle, pigs, humans (accidental)
- **India**: Endemic in Rajasthan, Gujarat, Kashmir, parts of Himalayas
- **Transmission**: Ingestion of eggs in contaminated food/water or from infected dog fur

### Clinical Presentation
- **Liver** (70% of cases): Right lobe masses
- **Lung** (20%): Cough, hemoptysis
- **Brain**, **bone**, **kidney**: Less common
- Many asymptomatic, found incidentally

### Diagnosis
- **Imaging**: Ultrasound (cysts with daughter cysts), CT/MRI
- **Serology**: Casoni intradermal test (high specificity, not available everywhere), ELISA, IHA
- **Stool**: Cannot diagnose (humans are intermediate host)

## Transmission and Distribution Summary

| Helminth | Mode | Endemic Areas | Clinical |
|----------|------|----------------|----------|
| W. bancrofti | Mosquito | Coastal, delta | Elephantiasis |
| Hookworm | Soil (skin) | Rural, poor sanitation | Iron deficiency |
| Ascaris | Soil (oral) | Rural, children | Malnutrition, obstruction |
| Strongyloides | Soil (skin) | Tropical | Hyperinfection in immunocompromised |
| Echinococcus | Dog (contamination) | Rajasthan, Kashmir | Liver/lung cysts |`,
        mnemonics: [
          { text: "Nematodes: SHAAW", explanation: "Strongyloides, Hookworm, Ascaris, Anisakis, Whipworm" },
          { text: "Filariasis: WB + TPE", explanation: "Wuchereria bancrofti (90%) causes elephantiasis; Tropical pulmonary eosinophilia" },
          { text: "Hookworm burden: 300 worms = 0.5 kg iron loss/year", explanation: "Each worm = 0.03-0.3 mL blood loss daily" },
          { text: "Hydatid: H=Host(dog), Y=Yolk(eggs), D=Daughter cysts", explanation: "Dogs shed eggs → sheep/cattle/humans infected → cyst formation" }
        ],
        keyPoints: [
          "Lymphatic filariasis endemic in India; W. bancrofti (90%) causes elephantiasis; transmitted by Culex mosquito",
          "Hookworm most common helminth globally; India has highest burden; causes iron deficiency anemia",
          "Ascaris lumbricoides largest intestinal nematode; common in India children; causes malnutrition",
          "Strongyloides: autoinfection possible; hyperinfection syndrome fatal in immunocompromised",
          "Hydatid disease: Echinococcus granulosus; endemic in Rajasthan, Kashmir; liver cysts most common (70%)"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "224: Helminth Infections", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "11: Parasitic Infections", edition: "11th" }
        ]
      },
      {
        layer: 2,
        slug: "helminthic-infections-mechanism",
        title: "Helminthic Infections - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathophysiology of helminthic infections including filariasis lymphedema, hookworm anemia, and immune evasion mechanisms.",
        contentMd: `# Helminthic Infections - Pathophysiology

## Lymphatic Filariasis Pathophysiology

### Parasite Life Cycle
1. **Mosquito bite**: Infective larvae injected
2. **Development**: Larvae travel to lymph nodes → mature into adults (6-12 months)
3. **Microfilaremia**: Adult worms produce millions of microfilariae (nocturnal periodicity)
4. **Transmission**: Microfilariae ingested by vector → mature → cycle repeats

### Lymphedema and Elephantiasis Mechanism
**Acute Phase (Acute Lymphadenitis):**
- Adult worm death → immune response (Th1)
- TNF-α, IL-1, IL-6 production
- Lymphangitis, adenitis, fever

**Chronic Phase (Lymphedema):**
- **Lymphatic damage**: Worms lodge in lymph vessels → obstruction, valvular incompetence
- **Fibrosis**: Chronic inflammation → lymphatic vessel fibrosis and dilation
- **Lymphatic dysfunction**: Impaired lymph flow → tissue fluid accumulation
- **Secondary infection**: Bacterial superinfection worsens edema

**Elephantiasis Development:**
- Severe chronic lymphedema → hypertrophy of skin and subcutaneous tissue
- Hyperkeratosis, lichification
- Increased infection risk → further inflammation
- Can progress to severe disability

### Tropical Pulmonary Eosinophilia (TPE)
- **Mechanism**: Occult filariasis (microfilariae in lungs, not blood)
- **Immune response**: Th2-mediated hypersensitivity
- **Pathology**: Granuloma formation in lungs
- **Clinical**: Interstitial pneumonitis, eosinophilia (2000-3000/μL), IgE ↑

## Hookworm Pathophysiology

### Lifecycle and Iron Loss
1. **Larvae in soil** → Percutaneous penetration (feet, legs)
2. **Lung passage** → Damage to alveoli, hemorrhage
3. **Tracheal ascent** → Cough, swallowing
4. **Small intestine** → Attachment via buccal capsule
5. **Blood feeding** → Direct intestinal blood loss + anticoagulation

### Iron Deficiency Anemia Mechanism
- **Blood loss**: 0.03-0.3 mL per worm daily
- **Heavy infection** (300-500 worms): 10-50 mL blood loss daily
- **Iron loss**: One worm = 0.5-1 g iron loss per year
- **Protein malnutrition**: Worms consume amino acids
- **Impaired absorption**: Intestinal mucosal damage

### Immune Response
- **IgE** and **IgA** antibodies produced
- **Mast cell degranulation** at hookworm site
- **Th2 response** dominant (IL-4, IL-5, IL-10)
- But parasites survive through immune evasion (antigen shedding, mimicry)

### Clinical Consequences
- **Microcytic, hypochromic anemia** (target cells)
- **Growth retardation** in children
- **Cognitive impairment** from iron deficiency
- **Cardiac complications**: High-output cardiac failure in severe anemia
- **Pregnancy complications**: Preterm delivery, low birth weight

## Ascaris Pathophysiology

### Mechanical Effects
- **Largest intestinal nematode** (25 cm) → physical obstruction
- **Malabsorption**: Damage to intestinal mucosa, reduced nutrient absorption
- **Migration**: Can obstruct biliary, pancreatic ducts → pancreatitis, cholecystitis
- **Perforation**: Rare, but possible with heavy infection

### Immune Response
- **Th2 predominant** (IgE ↑, eosinophilia)
- **Local mucosal IgA** important
- **Mast cell mediators** → allergy-like symptoms (urticaria, asthma)

## Strongyloides Hyperinfection

### Unique Autoinfection Mechanism
- **Larva currens**: Filariform larvae in intestine → reinfection of skin (unique to S. stercoralis)
- **Autoinfection in bowel**: Can cause persistent, chronic infection
- **Risk in immunocompromised**: Loss of IgE-mediated mast cell response → exponential increase in worm burden

### Hyperinfection Syndrome Pathophysiology
- **Massive parasitemia**: Larvae migrate to lungs, CNS, other tissues
- **Sepsis-like picture**: Gram-negative septicemia (from gut translocation with larvae)
- **Complications**: Meningitis, respiratory failure, multi-organ failure, death

## Echinococcus (Hydatid Disease) Pathophysiology

### Cyst Formation
1. **Ingestion**: Echinococcus eggs → intestinal penetration
2. **Bloodstream**: Larvae travel to target organs
3. **Larval development**: Transforms into hydatid cyst (acephalic stage)
4. **Cyst composition**:
   - **Outer membrane**: Acellular host-derived laminated layer
   - **Middle layer**: Germinal layer (proliferative)
   - **Internal**: Fluid + daughter cysts (secondary cysts)

### Daughter Cysts and Complications
- **Multiplication**: Protoscolices and daughter cysts form within parent cyst
- **Rupture risk**: Spillage of cyst fluid → anaphylaxis, cyst seeding
- **Secondary infection**: Bacteria may colonize cyst fluid
- **Cyst calcification**: Over years → decreased viability

### Immune Response
- **Local**: Granulomatous reaction at cyst interface
- **Systemic**: IgE and IgG antibodies (detected in serology)
- **Allergic phenomena**: Urticaria, asthma (from parasite antigen release)`,
        mnemonics: [
          { text: "Filariasis: LADS", explanation: "Lymphedema, Adenitis, Disability, Skin fibrosis" },
          { text: "Hookworm Anemia: BAG", explanation: "Blood loss, Absorption loss, Growth failure" },
          { text: "Strongyloides: Auto=Autoinfection, Hyper=Hyperinfection in immunocompromised", explanation: "Unique larva currens reinfection mechanism" },
          { text: "Echinococcus: LCD", explanation: "Laminated layer, Central germinal, Daughter cysts" }
        ],
        keyPoints: [
          "Filariasis: adult worms obstruct lymphatics → chronic inflammation → fibrosis → lymphedema → elephantiasis",
          "Hookworm: percutaneous larvae entry → intestinal attachment → 0.03-0.3 mL blood loss per worm daily → iron deficiency anemia",
          "Ascaris: largest nematode causes mechanical obstruction, malabsorption; can migrate to biliary/pancreatic ducts",
          "Strongyloides: unique autoinfection via larva currens; hyperinfection in immunocompromised causes sepsis-like syndrome",
          "Hydatid cyst: protoscolices in germinal layer → daughter cysts form; rupture risk causes anaphylaxis and seeding"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "224: Helminth Infections", edition: "21st" },
          { book: "Robbins & Cotran Pathologic Basis of Disease", chapter: "8: Infectious Diseases", edition: "10th" }
        ]
      },
      {
        layer: 3,
        slug: "helminthic-infections-clinical",
        title: "Helminthic Infections - Clinical",
        estimatedMinutes: 25,
        summary: "Clinical presentation, diagnosis, and management of filariasis, hookworm, and hydatid disease in Indian context.",
        contentMd: `# Helminthic Infections - Clinical Features and Management

## Lymphatic Filariasis Clinical Presentation

### Asymptomatic Microfilaremia (70-80% of infected)
- **Presentation**: No symptoms despite circulating microfilariae
- **Diagnosis**: Incidental finding on blood smear (nocturnal periodicity)
- **Management**: Treat to prevent progression and reduce transmission

### Acute Lymphadenitis (Acute Filaria)
- **Fever**: High, intermittent (episodic)
- **Lymphangitis**: Red streaking along lymphatic channels
- **Lymphadenopathy**: Tender, enlarged nodes (often inguinal, epitrochlear)
- **Location**: Follows lymphatic distribution
- **Duration**: Days to weeks, may relapse multiple times

### Chronic Manifestations

**Lymphedema (Chronic Pathological Condition of Lymphatics)**
- **Location**: Legs (most common), arms, genitals
- **Presentation**: Progressive swelling, skin thickening
- **Stages**: 1) Soft pitting edema → 2) Non-pitting edema → 3) Elephantiasis
- **Complications**: Recurrent infections, lymphatic insufficiency

**Elephantiasis**
- **Gross enlargement**: Limb circumference 5-10× normal
- **Skin changes**: Thickened, lichenified, hyperkeratotic
- **Social impact**: Severe disability, stigma in India
- **Prevalence**: 40 million cases globally, significant in India

**Genital Manifestations**
- **Scrotal enlargement**: Scrotal elephantiasis
- **Hydrocele**: Fluid accumulation around testes (most common urogenital manifestation)
- **Lymphedema of penis**, labial swelling

**Tropical Pulmonary Eosinophilia (TPE)**
- **Presentation**: Chronic cough, dyspnea, wheezing, fever
- **Exam**: Fine crackles bilaterally
- **Lab**: Marked eosinophilia (2000-3000/μL), ↑ IgE
- **Imaging**: Fine reticulonodular infiltrates
- **If untreated**: Progressive pulmonary fibrosis

## Diagnosis of Filariasis

### Blood Smear Microscopy
- **Thick drop/thin smear** at **night** (nocturnal periodicity of W. bancrofti)
- **Identification**: Characteristic morphology of microfilariae
- **Sensitivity**: 60-80% in endemic areas

### Rapid Diagnostic Tests
- **Immunochromatographic tests** (RDT) for filariasis antigen
- Sensitivity/specificity: 90-95%

### Serology
- **ELISA**: IgG4 antibodies (most specific)
- Useful in TPE and low parasitemia areas

### Ultrasound
- **"Filarial dance sign"**: Movement of adult worms in lymph vessels (pathognomonic)
- Best visualized in inguinal, epitrochlear lymph nodes

## Lymphatic Filariasis Management

### Drug Treatment
**Microfilaricide (kills microfilariae):**
- **Diethylcarbamazine (DEC)** 6 mg/kg/day × 12 days (standard)
- **Side effects**: Fever, chills, malaise from microfilarial death

**Macrofilaricide (kills adult worms):**
- **Albendazole** 400 mg BD × 21 days (emerging preference)
- **Doxycycline** 100 mg BD × 4-6 weeks (targets Wolbachia)

**Symptomatic Treatment:**
- **Hydrocele**: Surgical aspiration/repair
- **Lymphedema**: Limb elevation, compression therapy, infection prevention
- **Elephantiasis**: Surgical debulking in severe cases

### India's Elimination Strategy
- **NVBDCP**: Annual mass drug administration (DEC + albendazole)
- **Goal**: Interrupt transmission in endemic districts

## Hookworm Clinical Features and Management

### Acute Phase ("Ground Itch")
- **Itching, erythema** at site of larval penetration (feet, legs)
- **Can progress to**: Vesicles, pustules
- **Pneumonitis**: During lung migration (cough, dyspnea, fever)

### Chronic Phase
- **Iron deficiency anemia**: Microcytic, hypochromic
- **GI symptoms**: Abdominal pain, diarrhea
- **Protein malnutrition**: Hypoproteinemia, edema
- **Growth retardation**: In children
- **Cognitive impairment**: From iron deficiency

### Diagnosis
- **Stool microscopy**: Hookworm eggs (characteristic morphology)
- **PCR**: For species differentiation (rarely done)

### Management
**First-line Anthelmintics:**
- **Albendazole** 400 mg single dose (or BD × 3 days)
- **Mebendazole** 500 mg BD × 3 days OR 100 mg BD × 6 days
- **Efficacy**: 90-95%

**Iron Supplementation:**
- **Iron therapy** essential (12 weeks minimum)
- Ferrous salts 200 mg elemental iron daily
- Reassess Hb post-treatment

**Prevention:**
- **Sanitation**: Proper toilet facilities
- **Footwear**: Wearing shoes in endemic areas
- **Health education**

## Hydatid Disease (Echinococcosis)

### Clinical Presentation
**Hepatic (70% of cases):**
- Often asymptomatic, found incidentally
- Right lobe involvement common
- **Large cysts**: RUQ pain, mass, hepatomegaly
- **Rupture**: Peritoneal seeding (multiple new cysts)
- **Biliary obstruction**: Jaundice, cholangitis

**Pulmonary (20%):**
- Cough, hemoptysis
- Chest pain, dyspnea
- Spontaneous rupture → pneumothorax, hemoptysis

**Brain, bone, kidney** (rare):
- Depending on location: seizures, focal deficits, hematuria
- Often symptomatic due to mass effect

### Diagnosis

**Imaging (Primary):**
- **Ultrasound**: Cystic lesion with daughter cysts (pathognomonic)
- **CT/MRI**: Clarifies size, location, extent
- Classification: CL (complicated) vs CU (uncomplicated)

**Serology:**
- **Casoni test**: Intradermal (high specificity, not available in most centers)
- **ELISA/IHA**: IgG antibodies (70-90% positive in hepatic, 50-80% in pulmonary)

**Imaging findings:**
- Parent cyst + daughter cysts = pathognomonic
- Cyst contents may calcify over years

### Management

**Observation:**
- Small, asymptomatic, uncomplicated cysts: surveillance ultrasound
- May spontaneously die/calcify over years

**Medical Therapy:**
- **Albendazole** 10-15 mg/kg/day × 3 months (multiple cycles if needed)
- Improves surgical outcomes by killing parasites
- Standard pre-operative therapy

**Surgical Options:**
- **Indications**: Large (>5 cm), symptomatic, complicated, multiplecysts, cysts near vital structures
- **ERCP**: If cyst communicates with bile ducts
- **Percutaneous aspiration-injection-reaspiration (PAIR)** + albendazole
- **Hepatic resection**: For complicated cysts

**Lung Cysts:**
- Often asymptomatic, good prognosis
- Surgical removal if symptomatic or rupture risk

## Ascaris and Strongyloides Management

**Ascaris:**
- **Albendazole** 400 mg single dose (preferred)
- **Mebendazole** 100 mg BD × 3 days
- **Complications** (obstruction, biliary migration): Surgical intervention
- **Prevention**: Improved sanitation, hand hygiene

**Strongyloides:**
- **Ivermectin** 200 μg/kg/day × 1-2 days (preferred)
- **Albendazole** 400 mg daily × 7 days (alternative)
- **Hyperinfection**: Prolonged therapy (6 weeks) ± corticosteroid tapering
- **Critical**: Avoid corticosteroids without antihelmintics (risk of hyperinfection)`,
        mnemonics: [
          { text: "Filariasis Drugs: DAD", explanation: "DEC (microfilaricide), Albendazole (macrofilaricide), Doxycycline (Wolbachia)" },
          { text: "Hookworm Rx: AMBE", explanation: "Albendazole, Mebendazole both effective" },
          { text: "Hydatid Imaging: PCD", explanation: "Parent cyst, Cystic fluid, Daughter cysts" },
          { text: "Strongyloides: Ivy kills", explanation: "Ivermectin first-line for strongyloidosis" }
        ],
        keyPoints: [
          "Filariasis: DEC for microfilariae; albendazole/doxycycline for adults; hydrocele common urogenital manifestation",
          "Hookworm: albendazole 400 mg single dose; must supplement iron for 12+ weeks; prevention through footwear and sanitation",
          "Hydatid disease: diagnosis by imaging (daughter cysts pathognomonic); medical therapy (albendazole) pre-op; surgical resection for large/complicated cysts",
          "Ascaris: albendazole 400 mg single dose; watch for biliary/pancreatic migration complications",
          "Strongyloides: ivermectin preferred; hyperinfection in immunocompromised requires prolonged therapy"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "224: Helminth Infections", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "11: Parasitic Infections", edition: "11th" }
        ]
      },
      {
        layer: 4,
        slug: "helminthic-infections-exam",
        title: "Helminthic Infections - Exam Prep",
        estimatedMinutes: 20,
        summary: "High-yield exam facts, tables, and NEET-PG pattern MCQ concepts for helminthic infections.",
        contentMd: `# Helminthic Infections - Exam Preparation

## High-Yield Facts

### Lymphatic Filariasis At a Glance
| Feature | W. bancrofti | B. malayi |
|---------|-------------|-----------|
| Prevalence in India | 90% | 10% |
| Geographic | Coastal, urban, delta | Rural, forested |
| Vector | Culex fatigans (urban) | Anopheles, Mansonia |
| Clinical | Elephantiasis, hydrocele | Lymphedema |
| Incubation | 6-12 months to adults | 6-12 months |
| Microfilaremia | Nocturnal periodicity | Nocturnal/subperiodic |
| Diagnosis | Blood smear at night | Blood smear at night |

### Filariasis Clinical Manifestations Spectrum
- **70-80%**: Asymptomatic microfilaremia
- **Acute**: Adenolymphangitis, fever, lymphangitis
- **Chronic**: Lymphedema, elephantiasis, hydrocele, scrotal enlargement
- **TPE**: Occult filariasis with pulmonary manifestations

### Key Diagnostic Findings
**Blood Smear:**
- **Nocturnal sampling** critical (W. bancrofti)
- **Thick drop** for quantification
- **Thin smear** for morphology

**Ultrasound:**
- **Filarial dance sign** = pathognomonic worm movement in lymph vessel

**Serology:**
- **IgG4** most specific antibody

## Hookworm At a Glance

| Feature | Details |
|---------|---------|
| India burden | Highest globally (100-200 million) |
| Prevalence | 20-30% in endemic rural areas |
| Transmission | Percutaneous penetration of larvae |
| Blood loss | 0.03-0.3 mL per worm daily |
| Heavy infection (300-500 worms) | 10-50 mL daily blood loss |
| Iron loss | 0.5-1 g/year per worm |
| Anemia type | Microcytic, hypochromic |
| Diagnosis | Stool microscopy (eggs) |
| Treatment | Albendazole 400 mg single dose |
| Iron therapy | 12 weeks minimum post-treatment |

### Hookworm Complications
- Iron deficiency anemia (severe Hb <5 g/dL)
- Protein malnutrition, hypoproteinemia, edema
- Growth retardation in children
- Cognitive impairment (from iron deficiency)
- High-output cardiac failure (in severe anemia)
- Increased maternal mortality and low birth weight

### Ascaris Key Facts
- **Largest intestinal nematode** (25 cm)
- **India**: 30-50% prevalence in children (endemic areas)
- **Diagnosis**: Stool microscopy (large, fertilized eggs)
- **Complications**: Intestinal obstruction (rare), biliary/pancreatic migration → cholecystitis, pancreatitis
- **Treatment**: Albendazole 400 mg single dose

## Strongyloides Key Facts

| Feature | Details |
|---------|---------|
| Unique feature | Autoinfection via larva currens |
| Geographic | Tropical regions including India (rare) |
| Transmission | Percutaneous (soil) |
| Diagnosis | Stool microscopy (larvae, NOT eggs) |
| Hyperinfection risk | Immunocompromised (HIV CD4 <200, steroids, malignancy) |
| Hyperinfection presentation | Meningitis, septicemia, respiratory failure, death |
| Treatment standard | Ivermectin 200 μg/kg/day × 1-2 days |
| Critical warning | AVOID steroids without concurrent antihelmintics (risk hyperinfection) |

## Hydatid Disease Key Facts

| Feature | Details |
|---------|---------|
| Causal agent | Echinococcus granulosus (cystic), E. multilocularis (alveolar) |
| Endemic in India | Rajasthan, Gujarat, Kashmir, Himalayas |
| Definitive host | Dogs, wolves |
| Intermediate host | Sheep, cattle, pigs, HUMANS |
| Transmission | Ingestion of eggs (contaminated food/water, dog fur) |
| Humans | Dead-end hosts (no transmission) |
| **Common sites** | **Liver (70%), Lung (20%), Brain/Bone/Kidney (10%)** |
| Cyst composition | Parent cyst with daughter cysts (pathognomonic) |
| Diagnosis imaging | Ultrasound/CT (daughter cysts = definitive) |
| Casoni test | Intradermal (high specificity, not routine) |
| Serology | ELISA (70-90% positive hepatic, 50-80% pulmonary) |
| Medical therapy | Albendazole 10-15 mg/kg/day × 3 months pre-op |
| Surgical indications | Large (>5 cm), symptomatic, complicated, near vital structures |
| Small cyst approach | Observation (may calcify/die spontaneously) |

### Echinococcus vs. Taenia (Tapeworms) Comparison
| Feature | Echinococcus (Hydatid) | Taenia (Tapeworm) |
|---------|---------|---------|
| Transmission | Eggs in food/water | Undercooked meat (pork/beef) |
| Host | Intermediate (accidental) | Definitive host |
| Location in body | Cystic tissue lesions | Intestinal adult worm |
| Diagnosis | Imaging, serology | Stool microscopy (eggs) |
| Treatment | Albendazole ± surgery | Niclosamide 2 g single dose |

## Exam Question Patterns

**Q: Young child with massive hepatomegaly, asymptomatic, imaging shows cyst with daughter cysts**
A: Hydatid disease; give albendazole pre-operatively; plan surgery

**Q: Villager with elephantiasis of leg, inguinal lymphadenopathy**
A: Filariasis (W. bancrofti); diagnose with night blood smear; treat with DEC + albendazole

**Q: Pregnant woman with IDA, rural endemic area**
A: Hookworm (most common parasitic cause of IDA in India); treat with albendazole, supplement iron

**Q: Man from endemic area with fever, chills, tender inguinal nodes**
A: Acute filaria/lymphadenitis; may have microfilaremia on blood smear

**Q: Patient on steroids for lupus, now with meningitis, septicemia, respiratory distress**
A: Strongyloides hyperinfection; start ivermectin immediately

## NVBDCP Strategy in India
- **Annual mass drug administration (MDA)** of DEC + albendazole in endemic districts
- **Goal**: Interrupt transmission (break cycle)
- **Filariasis elimination program** in endemic areas
- **Coverage**: Target >80% of population

## Common Test Findings

**Filariasis:**
- Eosinophilia (mild)
- IgE ↑ (especially TPE)
- Positive serology (IgG4)

**Hookworm:**
- Microcytic, hypochromic anemia
- ↓ Ferritin, ↓ serum iron
- Eosinophilia (mild)

**Ascaris:**
- Eosinophilia (marked, up to 2000-3000/μL)
- Mild anemia

**Strongyloides:**
- Eosinophilia (elevated)
- Larvae in stool (NOT eggs, distinguishes from other nematodes)

**Hydatid:**
- Usually normal CBC
- Eosinophilia (if cyst ruptures)
- Elevated IgG on serology`,
        mnemonics: [
          { text: "Filariasis: Bancrofti=90%, malayi=10%", explanation: "W. bancrofti most common in India" },
          { text: "Hookworm: 300 worms = 0.5 kg iron/year", explanation: "Each worm = 0.03-0.3 mL blood daily" },
          { text: "Ascaris: Largest nematode, biliary migration risk", explanation: "25 cm worm can obstruct bile ducts" },
          { text: "Strongyloides: Larva currens, Hyperinfection", explanation: "Unique autoinfection, fatal if immunocompromised + steroids" },
          { text: "Hydatid: Liver-70%, Lung-20%, Other-10%", explanation: "Daughter cysts pathognomonic" }
        ],
        keyPoints: [
          "Filariasis: W. bancrofti 90%; diagnosis by nocturnal blood smear or filarial dance sign on ultrasound",
          "Hookworm: India has highest global burden; each worm causes 0.03-0.3 mL daily blood loss; causes IDA",
          "Ascaris: largest nematode; can migrate to biliary/pancreatic ducts → cholecystitis/pancreatitis",
          "Strongyloides: unique autoinfection; hyperinfection fatal in immunocompromised; avoid steroids without antihelmintics",
          "Hydatid: daughter cysts pathognomonic; 70% liver; treat with albendazole pre-op; small cysts observe"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "224: Helminth Infections", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "11: Parasitic Infections", edition: "11th" }
        ]
      },
      {
        layer: 5,
        slug: "helminthic-infections-active-recall",
        title: "Helminthic Infections - Active Recall",
        estimatedMinutes: 15,
        summary: "Flashcard-based active recall for rapid learning of helminthic infection concepts.",
        contentMd: `# Helminthic Infections - Active Recall Flashcards

**Q1: What are the two main species of filarial worms in India and their prevalence?**
A: Wuchereria bancrofti (90%) and Brugia malayi (10%); both cause lymphatic filariasis.

**Q2: What is the vector for W. bancrofti and how is it different from B. malayi?**
A: W. bancrofti = Culex fatigans (urban areas); B. malayi = Anopheles and Mansonia (rural/forested areas).

**Q3: Describe the microfilaremia pattern of W. bancrofti.**
A: Nocturnal periodicity - microfilariae appear in blood at night (10 PM-2 AM) to coincide with vector feeding behavior.

**Q4: What is the mechanism of elephantiasis development in filariasis?**
A: Adult worms obstruct lymphatics → inflammation → fibrosis → lymphatic dysfunction → chronic lymphedema → skin hypertrophy, hyperkeratosis → elephantiasis.

**Q5: What is tropical pulmonary eosinophilia (TPE) and how does it differ from typical filariasis?**
A: TPE is occult filariasis with microfilariae sequestered in lungs (not blood) causing Th2-mediated hypersensitivity; presents with cough, asthma, fever, marked eosinophilia; can progress to pulmonary fibrosis if untreated.

**Q6: What is the diagnostic test for filariasis and when should it be done?**
A: Blood smear (thick drop for counting, thin for morphology) collected at NIGHT due to nocturnal periodicity of microfilariae; sensitivity 60-80%.

**Q7: What is the filarial dance sign and how specific is it?**
A: Movement of adult worms in lymph vessels on ultrasound; pathognomonic (100% specific) for filariasis when present.

**Q8: List the drugs used to treat filariasis and what each targets.**
A: Diethylcarbamazine (DEC) kills microfilariae; Albendazole and Doxycycline kill adult worms (by targeting Wolbachia); standard regimen = DEC + albendazole.

**Q9: What is the most common urogenital manifestation of filariasis?**
A: Hydrocele (fluid around testes); also genital elephantiasis, scrotal enlargement.

**Q10: What is the hookworm burden (worm count) in a heavily infected individual?**
A: 300-500 worms; causes 10-50 mL blood loss daily and 0.5-1 kg iron loss per year.

**Q11: How much blood does a single hookworm cause to be lost daily?**
A: 0.03-0.3 mL per worm per day; individual variation due to attachment mechanism and anticoagulant secretion.

**Q12: What is the incubation period (time to develop anemia) from hookworm infection?**
A: 4-8 weeks to develop symptomatic anemia depending on worm burden and existing iron stores.

**Q13: What are the chronic complications of heavy hookworm infection?**
A: Iron deficiency anemia (microcytic, hypochromic), protein malnutrition, growth retardation in children, cognitive impairment, cardiac failure in severe cases.

**Q14: How do you diagnose hookworm?**
A: Stool microscopy showing characteristic eggs; larvae appear in stools 4-6 weeks after infection.

**Q15: What is the treatment for hookworm and iron supplementation duration?**
A: Albendazole 400 mg single dose (or mebendazole 500 mg BD × 3 days); followed by iron supplementation for minimum 12 weeks (ferrous salts 200 mg elemental iron daily).

**Q16: What makes Strongyloides different from other nematodes?**
A: Autoinfection via larva currens (filariform larvae reinfect host through skin/bowel); can cause chronic infection even with minimal exposure.

**Q17: What is larva currens in Strongyloides infection?**
A: Migratory rash caused by migration of filariform larvae through skin; characteristic serpiginous tracks on abdomen and buttocks; pruritic.

**Q18: What is hyperinfection syndrome in Strongyloides and when does it occur?**
A: Massive parasite burden with dissemination to lungs, CNS, GI tract; occurs in immunocompromised (HIV CD4 <200, high-dose steroids, malignancy); presents with meningitis, septicemia, respiratory failure, high mortality if untreated.

**Q19: Why is it dangerous to give steroids to a Strongyloides-infected immunocompromised patient?**
A: Steroids suppress Th2 response (which normally produces IgE → mast cell → worm control); loss of IgE-mediated immunity → exponential worm multiplication → hyperinfection syndrome.

**Q20: What is the first-line treatment for Strongyloides?**
A: Ivermectin 200 μg/kg/day × 1-2 days; alternative = albendazole 400 mg daily × 7 days.

**Q21: What is Ascaris lumbricoides and how large is it?**
A: The largest intestinal nematode in humans; up to 25-35 cm long; females larger than males.

**Q22: What are the potential complications of Ascaris infection?**
A: Intestinal obstruction (rare, mainly in children with heavy infections), biliary migration → cholecystitis, pancreatic duct migration → pancreatitis, appendicitis.

**Q23: How do you diagnose Ascaris?**
A: Stool microscopy showing large fertilized eggs with characteristic morphology (thick shell, internal lipoid plug).

**Q24: What causes eosinophilia in helminthic infections and is it present in all?**
A: Th2 response to parasites produces IL-5 → eosinophil recruitment; present in most but NOT prominent in Ascaris heavy infections (immune tolerance develops).

**Q25: What is hydatid disease and what organism causes it?**
A: Larval stage of Echinococcus granulosus (cystic hydatid) or E. multilocularis (alveolar); humans are accidental intermediate hosts (acquired by eating eggs).

**Q26: What are the geographic regions in India where hydatid disease is endemic?**
A: Rajasthan, Gujarat, Kashmir, Himalayas; associated with sheep-raising areas.

**Q27: What is the pathognomonic imaging finding in hydatid disease?**
A: Parent cyst with internal daughter cysts (multiple smaller cysts within the parent); seen on ultrasound, CT, or MRI.

**Q28: What is the Casoni test and how specific is it for hydatid disease?**
A: Intradermal hypersensitivity test using hydatid antigen; highly specific (>90%) but rarely available; has been replaced by serological tests.

**Q29: What serology test is used for hydatid disease and what is the sensitivity by organ?**
A: ELISA for IgG antibodies; sensitivity varies: hepatic 70-90%, pulmonary 50-80%, bone/CNS lower due to better cyst encapsulation.

**Q30: What is the management approach for a small, asymptomatic hydatid cyst?**
A: Observation with serial ultrasound; many cysts calcify and die spontaneously over years; no intervention needed unless symptomatic, large (>5 cm), or near vital structures.

**Q31: What is the indication for medical therapy (albendazole) in hydatid disease?**
A: Pre-operative therapy to kill parasites and reduce risk of peritoneal seeding if cyst ruptures during surgery; also used as sole therapy for inoperable patients.

**Q32: What is albendazole dosing for hydatid disease?**
A: 10-15 mg/kg/day in divided doses × 3 months (may require multiple cycles for large/multiple cysts).

**Q33: What is PAIR procedure in hydatid disease management?**
A: Percutaneous aspiration-injection-reaspiration; cyst fluid aspirated, scolicidal agent injected (ethanol, hypertonic saline), then reaspired; followed by albendazole; minimally invasive alternative to surgery.

**Q34: What are the indications for surgery in hydatid disease?**
A: Large cysts (>5 cm), symptomatic, complicated (infected, ruptured, communicating with bile ducts), cysts near vital structures, multiple cysts causing organ dysfunction.

**Q35: What is the difference between cystic and alveolar echinococcosis?**
A: Cystic (E. granulosus): slow-growing, better encapsulation, better prognosis. Alveolar (E. multilocularis): infiltrative growth, worse prognosis, may metastasize, more common in Europe/North America.`
,
        mnemonics: [
          { text: "Filariasis: Bancrofti=Coastal/urban, malayi=Rural/forest", explanation: "W. bancrofti 90% (Culex urban); B. malayi 10% (Anopheles rural)" },
          { text: "Blood smear: Nocturnal Bancrofti", explanation: "W. bancrofti microfilariae appear at night; collect sample 10 PM-2 AM" },
          { text: "Filarial dance=Pathognomonic", explanation: "Worm movement on ultrasound = 100% specific" },
          { text: "Hookworm: 300 worms = 0.5 kg iron loss/year", explanation: "Each worm = 0.03-0.3 mL blood daily" },
          { text: "Strongyloides: Larva currens + Auto", explanation: "Unique autoinfection, filariform larvae reinfect through skin" },
          { text: "Strongyloides hyperinfection: Steroids = Death", explanation: "Avoid steroids without antihelmintics (hyperinfection risk)" },
          { text: "Ascaris: 25 cm, Biliary migration risk", explanation: "Largest nematode, can cause cholecystitis/pancreatitis" },
          { text: "Hydatid: Parent + Daughter cysts = Pathognomonic", explanation: "Echinococcus cystic stage with daughter cysts inside" },
          { text: "Hydatid Sites: Liver-70%, Lung-20%, Other-10%", explanation: "Right lobe liver most common location" },
          { text: "Hydatid Rx: Albendazole pre-op, then surgery", explanation: "Medical therapy kills parasites, reduces spillage risk" }
        ],
        keyPoints: [
          "W. bancrofti 90% of filariasis in India; nocturnal periodicity; diagnose with night blood smear",
          "Filarial dance sign on ultrasound is pathognomonic; therapy with DEC + albendazole",
          "Hookworm: India highest burden; single worm = 0.03-0.3 mL blood loss daily; causes IDA; albendazole single dose + iron 12 weeks",
          "Ascaris: largest nematode (25 cm); can migrate to biliary/pancreatic ducts; albendazole single dose",
          "Strongyloides: autoinfection via larva currens; hyperinfection fatal in immunocompromised + steroids; avoid steroids without antihelmintics",
          "Hydatid: daughter cysts pathognomonic; liver 70%; albendazole pre-op, surgery for large/complicated cysts; observation for small asymptomatic"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "224: Helminth Infections", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "11: Parasitic Infections", edition: "11th" }
        ]
      }
    ]
  },
  {
    topicCode: "IM-MOD-09-TOP-08",
    layers: [
      {
        layer: 1,
        slug: "fungal-infections-foundation",
        title: "Fungal Infections - Foundation",
        estimatedMinutes: 25,
        summary: "Overview of medically important fungi including mucormycosis, aspergillosis, candidiasis with Indian context and post-COVID surge.",
        contentMd: `# Fungal Infections - Foundation

## Classification of Medically Important Fungi

### Dimorphic Fungi (Thermal Dimorphism)
- **Histoplasma capsulatum** - histoplasmosis
- **Coccidioides immitis** - coccidioidomycosis
- **Blastomyces dermatitidis** - blastomycosis
- **Paracoccidioides brasiliensis** - paracoccidioidomycosis

### Opportunistic Fungi (in Immunocompromised)
- **Candida species** - candidiasis (oral, esophageal, systemic)
- **Aspergillus fumigatus** - aspergillosis, ABPA
- **Cryptococcus neoformans** - cryptococcosis, meningitis
- **Pneumocystis jirovecii** - PCP (formerly PcP)
- **Mucor, Rhizopus** - mucormycosis (zygomycosis)

### Dermatophytes
- **Trichophyton, Microsporum, Epidermophyton** - tinea infections

## Mucormycosis (India's Post-COVID Challenge)

### Epidemiology in India
- **Surge post-COVID**: 2020-2022 dramatic increase (Black fungus pandemic)
- **Risk factors**: COVID-19 infection, corticosteroid use, diabetes (especially DKA), hematologic malignancy, transplantation
- **Mortality**: 50-90% if untreated, depends on organ involvement
- **Endemic**: Tropical/subtropical regions including India

### Causative Agents
- **Mucor** (most common, >50%)
- **Rhizopus** (20-30%)
- **Rhizomucor, Lichtheimia** (rare)

### Clinical Forms
1. **Rhinocerebral** (most common, 40%)
   - Nasal turbinate necrosis, palatal eschar
   - Rapid progression to sinusitis, brain involvement
   - High mortality

2. **Pulmonary** (20%)
   - Cough, hemoptysis, chest pain
   - Can progress to angioinvasion → pulmonary infarction

3. **Cutaneous** (20%)
   - Necrotic skin lesions
   - Often from direct inoculation

4. **Gastrointestinal** (rare)
   - Abdominal pain, bleeding
   - Transmural necrosis

5. **Disseminated** (worst prognosis)
   - Multi-organ involvement
   - Often fatal

## Aspergillosis Spectrum

### ABPA (Allergic Bronchopulmonary Aspergillosis)
- **Pathophysiology**: Hypersensitivity (IgE-mediated) to Aspergillus fumigatus in lungs
- **Presentation**: Asthma, bronchiectasis, pulmonary infiltrates
- **Geographic**: Endemic in humid regions (India included)
- **India context**: Significant burden in asthmatic patients

### Invasive Aspergillosis
- **Risk groups**: Neutropenic patients, post-transplant, advanced HIV
- **Lung most common** (pneumonia, nodules, cavitation)
- **Dissemination**: Brain, kidneys, heart

### Aspergilloma
- **Fungus ball** in pre-existing cavity
- **Causes**: TB cavitation (most common in India), pneumoconiosis, bullae
- **Complications**: Hemoptysis, secondary infection

## Candidiasis

### Oral Candidiasis
- **Thrush**: Pseudomembranous white plaques on tongue, palate
- **Erythematous**: Red patches
- **Risk**: Broad-spectrum antibiotics, corticosteroids, immunocompromised

### Esophageal Candidiasis
- **Indicator of AIDS** (when CD4 <50)
- **Dysphagia, odynophagia**
- **Risk: HIV, chemotherapy, steroids**

### Systemic/Invasive Candidiasis
- **Bloodstream infection** (candidemia)
- **From Candida albicans, C. auris** (emerging resistant strain)
- **Risk**: Central lines, ICU, immunocompromised

## Cryptococcosis

### Cryptococcal Meningitis
- **Most common fungal meningitis** globally
- **India**: Significant burden in HIV/AIDS patients
- **Mortality**: 15-25% with treatment, >90% without
- **CD4 threshold**: Occurs when CD4 <100

### Pulmonary Cryptococcosis
- **Often asymptomatic**, found incidentally
- **Can progress**: Dissemination to CNS

## PCP (Pneumocystis jirovecii Pneumonia)

### Epidemiology
- **CD4 <200**: Risk of PCP in untreated HIV
- **India**: Still significant in late-stage AIDS
- **India context**: Less common now with ART availability

### Clinical Features
- **Subacute** cough, dyspnea, chest discomfort
- **CXR**: Bilateral interstitial infiltrates (classic), but can be normal in early disease
- **Hypoxia**: Marked (Pa-a gradient >35)`,
        mnemonics: [
          { text: "Dimorphic: HCBP", explanation: "Histoplasma, Coccidioides, Blastomyces, Paracoccidioides" },
          { text: "Opportunistic: CACP", explanation: "Candida, Aspergillus, Cryptococcus, Pneumocystis" },
          { text: "Mucormycosis: RCP", explanation: "Rhino-cerebral, Cutaneous, Pulmonary (most common rhino-cerebral)" },
          { text: "Mucor Post-COVID: Steroids + Diabetes + Hypoxia", explanation: "Risk factors: high-dose steroids, uncontrolled DM, COVID-19" }
        ],
        keyPoints: [
          "Mucormycosis surge in India post-COVID; rhinocerebral most common; rapid progression to brain; mortality 50-90%",
          "ABPA endemic in humid regions; hypersensitivity to Aspergillus causing asthma/bronchiectasis; aspergilloma from TB cavitation",
          "Candidiasis: oral thrush common in immunocompromised; esophageal = AIDS indicator; systemic from central lines/ICU",
          "Cryptococcal meningitis most common fungal meningitis; CD4 <100; India significant burden in AIDS",
          "PCP occurs CD4 <200; subacute onset; bilateral interstitial infiltrates; high mortality if untreated"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "209-218: Fungal Infections", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "12: Fungal Infections", edition: "11th" }
        ]
      },
      {
        layer: 2,
        slug: "fungal-infections-mechanism",
        title: "Fungal Infections - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathophysiology of mucormycosis angioinvasion, ABPA hypersensitivity, candidiasis immune evasion, and PCP pneumonitis.",
        contentMd: `# Fungal Infections - Pathophysiology

## Mucormycosis Angioinvasion

### Pathogenic Mechanisms
- **Rapid angioinvasion**: Fungal hyphae invade blood vessel walls
- **Thrombosis**: Vascular occlusion → tissue infarction and necrosis
- **Tissue necrosis**: Black eschar (necrotic tissue) in rhinocerebral form
- **Rapid progression**: Hours to days from infection to dissemination

### Rhinocerebral Pathophysiology
1. **Nasal inhalation** of spores
2. **Colonization** of nasal turbinates/sinuses
3. **Angioinvasion** → vascular thrombosis
4. **Palatal necrosis** (black eschar)
5. **Extension** to sinuses, orbit, brain
6. **Cavernous sinus thrombosis** → ophthalmoplegia, altered mental status
7. **Brain abscess/infarction** → death

### Why Post-COVID Epidemic?
- **Corticosteroids**: Impair neutrophil function, T-cell immunity
- **Hyperglycemia**: Diabetes + steroids → DKA → immune suppression
- **COVID-induced hypoxia**: Tissue damage, ischemia
- **Epithelial damage**: COVID-19 damages respiratory epithelium
- **Spore inhalation**: Environment + hospital settings

## ABPA Pathophysiology

### Immune Mechanism
- **Type III hypersensitivity**: Immune complex deposition
- **Type IV hypersensitivity**: Delayed-type reaction to Aspergillus antigens
- **IgE overproduction**: Massive (often >1000 IU/mL)
- **Eosinophil infiltration**: Allergic inflammation in lungs

### Bronchiectasis Development
- **Chronic inflammation** → bronchial wall remodeling
- **Bronchial obstruction** from mucus plugging
- **Atelectasis** (lung collapse)
- **Bronchial wall thickening** → bronchiectasis (cylindrical or bronchiolectasis)
- **Fibrosis** in later stages (ABPA-CF)

### Two Forms
- **ABPA-S (Serological)**: IgE elevation, no bronchiectasis
- **ABPA-CB (Chronic Bronchitis)**: Bronchiectasis, fibrosis

## Candidiasis Pathophysiology

### Oral/Esophageal Candidiasis
- **Normal flora suppression**: Antibiotics → local flora imbalance
- **Epithelial adhesion**: Candida adhesins bind to epithelial cells
- **Pseudohypha formation**: Invasion into mucosa
- **Epithelial damage**: Inflammatory response → ulceration

### Systemic Candidiasis
- **Translocation**: From GI tract or indwelling catheters
- **Biofilm formation**: On foreign bodies (central lines, prosthetics)
- **Immune evasion**: Mannan coating, antigen shedding
- **Dissemination**: Bloodstream → multi-organ spread
- **Organ tropism**: Kidneys, heart, CNS

### C. auris Emergence
- **Multidrug resistance**: Resistance to azoles, echinocandins
- **Nosocomial spread**: Rapid transmission in hospitals
- **High mortality**: 30-60% even with treatment

## Cryptococcal Meningitis Mechanism

### CNS Invasion
- **Inhalation** of spores (environmental)
- **Lung infection** (often asymptomatic)
- **Bloodstream dissemination**
- **CNS invasion**: Crosses blood-brain barrier (exact mechanism not fully understood)

### Meningitis Pathology
- **Minimal inflammation**: Paradoxically little CSF pleocytosis (Crypto is antiphlogistic)
- **Gelatinous exudate** in meninges and Virchow-Robin spaces
- **Cryptococcomas** (granulomas) in brain parenchyma
- **Hydrocephalus**: From exudate obstruction

### Why CD4 <100?
- **T-cell immunity critical**: Th1 response (IFN-γ) essential for Crypto control
- **Macrophage activation**: Requires CD4 T-cells via IFN-γ
- **Loss of immunity**: CD4 decline → loss of control → dissemination

## PCP Pathophysiology

### Pneumonitis Development
- **P. jirovecii colonization** (when CD4 <200)
- **Proliferation** within alveoli
- **Inflammatory response**: Alveolar damage
- **Exudative filling**: Alveoli fill with proteinaceous material
- **Gas exchange impairment**: Hypoxia (marked)

### Why Hypoxemia?
- **Alveolar filling**: Foam-like exudate ("honeycomb" appearance)
- **V/Q mismatch**: Ventilation but no perfusion
- **Diffusion impairment**: Thick alveolar walls
- **Marked A-a gradient**: >35 mmHg (hallmark)

### Immune Recovery Inflammation (IRIS)
- **When CD4 recovers** on ART
- **Exaggerated inflammatory response** to PCP
- **Can worsen respiratory status**`,
        mnemonics: [
          { text: "Mucor: Angio-invasive = Necrosis", explanation: "Vascular invasion → thrombosis → tissue death" },
          { text: "ABPA: Type III & IV hypersensitivity", explanation: "Immune complexes + delayed-type allergy to Aspergillus" },
          { text: "Candida: Biofilm + Immune evasion", explanation: "Forms biofilm on catheters, sheds antigens" },
          { text: "Crypto: CD4 <100, Minimal inflammation", explanation: "Crypto is antiphlogistic (little CSF response)" },
          { text: "PCP: A-a gap >35 = Hypoxemia", explanation: "Alveolar filling → diffusion impairment" }
        ],
        keyPoints: [
          "Mucormycosis: angioinvasion → vascular thrombosis → tissue necrosis (black eschar); post-COVID from steroids + DM",
          "ABPA: Type III/IV hypersensitivity to Aspergillus; IgE >1000; causes bronchiectasis; ABPA-S vs ABPA-CB",
          "Candidiasis: biofilm on catheters; C. auris multidrug-resistant; disseminates in immunocompromised",
          "Cryptococcal meningitis: CD4 <100; minimal CSF inflammation (antiphlogistic); gelatinous exudate",
          "PCP: alveolar filling with exudate; marked A-a gradient >35; hypoxemia out of proportion to CXR findings"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "209-218: Fungal Infections", edition: "21st" },
          { book: "Robbins & Cotran Pathologic Basis of Disease", chapter: "8: Infectious Diseases", edition: "10th" }
        ]
      },
      {
        layer: 3,
        slug: "fungal-infections-clinical",
        title: "Fungal Infections - Clinical",
        estimatedMinutes: 25,
        summary: "Clinical presentation, diagnosis, and management of mucormycosis, ABPA, candidiasis, cryptococcosis, and PCP.",
        contentMd: `# Fungal Infections - Clinical & Management

## Mucormycosis Clinical Presentation

### Rhinocerebral (40%, High Mortality)
- **Nasal/palatal necrosis**: Black eschar (pathognomonic)
- **Sinusitis**: Pain, nasal discharge
- **Orbital involvement**: Proptosis, ophthalmoplegia, vision loss
- **CNS**: Headache, altered mental status, hemiparesis
- **Rapid progression**: Hours to days

### Pulmonary (20%)
- **Cough, hemoptysis**: From angioinvasion → hemorrhage
- **Chest pain, dyspnea**
- **CXR**: Nodules, cavitation, infiltrates

### Cutaneous (20%)
- **Necrotic lesion** at inoculation site
- **Can progress** if not debrided

### Diagnosis
- **Histopathology**: Broad, non-septate hyphae (key feature)
- **Culture**: Slow-growing, may take weeks
- **Imaging**: CT/MRI shows tissue necrosis, sinusitis

### Management
- **URGENT CARE**: Medical emergency, needs ICU
- **Surgical debridement**: Immediate, often multiple procedures
- **Antifungal**: Amphotericin B lipid formulation 5 mg/kg/day IV
- **Control hyperglycemia**: Critical (DKA increases mortality)
- **Mortality**: 50-90% despite treatment (worse with delay)

## ABPA Clinical & Management

### Clinical Presentation
- **Asthma symptoms**: Exacerbations, poor control
- **Pulmonary infiltrates**: Fleeting, migratory
- **Bronchiectasis**: Bronchial wall thickening, cylindrical bronchiectasis
- **Hemoptysis**: From bronchiectasis or bronchial artery erosion
- **Fever, malaise**: During acute exacerbations

### Diagnostic Criteria (Agarwal's)
1. Asthma or CF with pulmonary infiltrates
2. Central bronchiectasis (bronchial diameter > vessel diameter)
3. Total IgE >1000 IU/mL
4. IgE/IgG antibodies to Aspergillus
5. Eosinophilia >500/μL (at some point)
6. Radiologic infiltrates

### Laboratory
- **Total IgE**: >1000 IU/mL (often much higher)
- **Specific IgE/IgG**: To Aspergillus antigens
- **Eosinophilia**: 500-5000/μL
- **Sputum**: Aspergillus fumigatus isolated
- **Imaging**: Bronchiectasis, "gloved finger" appearance of bronchi

### Management
- **Oral corticosteroids**: Prednisone 0.5-1 mg/kg/day (essential, may taper slowly)
- **Antifungal**: Itraconazole 200 mg BD (reduces IgE, prevents progression)
- **Bronchodilators/mucus clearance**: Standard asthma care
- **Avoid**: Corticosteroid withdrawal too fast (rebound)

## Candidiasis Management

### Oral/Esophageal
- **Mild (thrush)**: Nystatin oral suspension, clotrimazole lozenges
- **Esophageal**: Fluconazole 100-200 mg daily × 2-3 weeks (or itraconazole)
- **Azole-resistant**: Caspofungin IV
- **Prevention in CD4 <50**: Fluconazole prophylaxis

### Systemic/Invasive
- **Candidemia**: Anidulafungin or caspofungin IV (echinocandins preferred)
- **Alternative**: Fluconazole IV (if azole-susceptible strain)
- **Source control**: Remove central lines if possible
- **Duration**: 2 weeks after last positive blood culture
- **Follow-up cultures**: To document clearance

### C. auris
- **Antifungal options**: Echinocandins (caspofungin, micafungin, anidulafungin)
- **Isolation precautions**: Contact isolation in hospital

## Cryptococcal Meningitis

### Clinical Presentation
- **Subacute meningitis**: Fever, headache, meningeal signs may be absent
- **Altered mental status**: Lethargy, confusion
- **Minimal neck stiffness**: Unlike bacterial meningitis
- **Mass lesion symptoms**: If cryptococcomas present

### Diagnosis
- **CSF India ink**: Positive in 50-80% (visualization of capsule)
- **CSF Crypto antigen**: >95% sensitive (current preferred test)
- **Serum Crypto antigen**: Also positive in disseminated disease
- **CSF culture**: Positive but slow
- **Opening pressure**: Often elevated (>25 cm H2O) → risk of hydrocephalus

### Management
- **Induction**: Amphotericin B lipid formulation 3-4 mg/kg/day IV (2 weeks)
- **Consolidation**: Fluconazole 400-800 mg daily (8 weeks)
- **Maintenance**: Fluconazole 200 mg daily (until CD4 >100 × 3 months on ART)
- **CSF drainage**: If increased pressure/impending herniation

## PCP (Pneumocystis jirovecii Pneumonia)

### Clinical Presentation
- **Subacute dyspnea**: Weeks of progressive respiratory symptoms
- **Cough**: Usually non-productive, may be dry
- **Fever, malaise**: Often low-grade
- **Chest pain**: Pleuritic (less common)
- **Hypoxia**: Marked (SpO2 may drop significantly with exertion)
- **CXR may be normal early** (classic: bilateral interstitial infiltrates in established disease)

### Diagnosis
- **Clinical suspicion**: CD4 <200, subacute dyspnea, hypoxia
- **Chest X-ray**: Bilateral interstitial (classic), but can be normal in early PCP
- **CT**: High-resolution shows ground-glass opacities (more sensitive)
- **Induced sputum**: Positive for P. jirovecii (silver stain, direct fluorescence)
- **Bronchoscopy with BAL**: More sensitive if induced sputum negative
- **LDH**: Markedly elevated (>300)

### Management
- **First-line**: Trimethoprim-sulfamethoxazole (TMP-SMX) DS BID × 21 days (preferred)
- **Alternative**: Pentamidine IV, dapsone-trimethoprim, atovaquone-proguanil
- **Adjunctive steroid**: If PaO2 <70 or A-a gradient >35 (prednisone 40 mg BD × 5 days, then taper)
- **Prophylaxis**: TMP-SMX daily when CD4 <200 (until CD4 >200 × 3 months on ART)

### IRIS (Immune Reconstitution Inflammatory Syndrome)
- **When CD4 recovers** on ART
- **Can worsen respiratory status** initially
- **May require steroids** during immune recovery`,
        mnemonics: [
          { text: "Mucor: BLACK eschar + urgent debridement", explanation: "Necrosis is pathognomonic; needs immediate surgery" },
          { text: "ABPA Criteria: ABC + ER", explanation: "Asthma + Bronchiectasis + Central | IgE>1000, eosinophilia" },
          { text: "Candida: Fluconazole oral, Echinocandin IV", explanation: "Azole for milder; echinocandin for invasive" },
          { text: "Crypto Meningitis: India ink + Antigen test", explanation: "Antigen >95% sensitive; ink 50-80%" },
          { text: "PCP: Hypoxia > CXR findings, High LDH", explanation: "Marked hypoxia out of proportion to imaging" }
        ],
        keyPoints: [
          "Mucormycosis: black eschar pathognomonic; urgent surgical debridement + amphotericin B lipid; control DM critical",
          "ABPA: IgE >1000; central bronchiectasis; treat with steroids (essential) + itraconazole",
          "Candidiasis: nystatin/clotrimazole for oral; fluconazole for esophageal; echinocandins for invasive/C. auris",
          "Cryptococcal meningitis: India ink + antigen test; amphotericin B induction + fluconazole consolidation/maintenance; CD4 <100 risk",
          "PCP: hypoxia + interstitial infiltrates; TMP-SMX is first-line; add steroids if PaO2 <70; prophylaxis when CD4 <200"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "209-218: Fungal Infections", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "12: Fungal Infections", edition: "11th" }
        ]
      },
      {
        layer: 4,
        slug: "fungal-infections-exam",
        title: "Fungal Infections - Exam Prep",
        estimatedMinutes: 20,
        summary: "High-yield facts, tables, differentials, and NEET-PG concepts for fungal infections.",
        contentMd: `# Fungal Infections - Exam Preparation

## Mucormycosis Quick Facts
- **Causative**: Mucor (50%), Rhizopus (20-30%)
- **Morphology**: Broad, non-septate hyphae (histology)
- **Forms**: Rhinocerebral (40%, highest mortality), Pulmonary (20%), Cutaneous (20%), Systemic (worst)
- **Pathognomonic**: Black eschar (tissue necrosis)
- **Risk factors**: Post-COVID, high-dose steroids, diabetes (DKA), hematologic malignancy
- **Management**: Urgent debridement + amphotericin B lipid + glycemic control
- **Mortality**: 50-90% if untreated/delayed

## ABPA vs Other Aspergillus Diseases

| Feature | ABPA | Aspergilloma | Invasive Aspergillosis |
|---------|------|--------------|------------------------|
| Immune status | Atopy/asthma | Pre-existing cavity | Immunocompromised |
| IgE | >1000 | Normal | Normal |
| Bronchiectasis | Yes (central) | No | No |
| CXR | Infiltrates, bronchiectasis | Fungus ball in cavity | Nodules, cavitation |
| Treatment | Steroids + itraconazole | Surgical (if bleeding) | Amphotericin B/voriconazole |

## Candidiasis Classification

| Type | Risk Factors | Diagnosis | Treatment |
|------|------------|-----------|-----------|
| Oral thrush | Antibiotics, steroids, AIDS | Visual, culture | Nystatin, clotrimazole |
| Esophageal | CD4 <50, cancer chemo | Endoscopy | Fluconazole |
| Candidemia | Central lines, ICU | Blood culture | Echinocandin (preferred) |
| C. auris | Healthcare setting | Culture, ID | Echinocandin (azole-resistant) |

## Cryptococcosis Key Facts
- **Causative**: Cryptococcus neoformans
- **CD4 threshold**: <100 (AIDS-defining in HIV)
- **CNS tropism**: Causes meningitis
- **CSF findings**: Low cell count (antiphlogistic), high protein, low glucose
- **India burden**: Significant in untreated AIDS
- **Diagnosis**: India ink (50-80%), antigen test (>95%), culture (slow)
- **Management**: Amphotericin B induction + fluconazole consolidation/maintenance
- **Mortality**: 15-25% with treatment, >90% without

## PCP Quick Facts

| Feature | Details |
|---------|---------|
| Organism | Pneumocystis jirovecii |
| CD4 threshold | <200 (prophylaxis starts) |
| Presentation | Subacute dyspnea, cough, hypoxia |
| CXR | Bilateral interstitial (can be normal early) |
| Key finding | Hypoxia OUT OF PROPORTION to imaging |
| LDH | Markedly elevated (>300) |
| Diagnosis | Induced sputum/BAL (silver stain) |
| First-line | TMP-SMX DS BID × 21 days |
| Adjunctive steroid | If PaO2 <70 or A-a >35 |
| Prophylaxis | TMP-SMX when CD4 <200 |

## Fungal Meningitis Differential

| Organism | CSF Cell Type | Glucose | Protein | India Ink | Antigen |
|----------|---------------|---------|---------|-----------|---------|
| Cryptococcus | Lymph (low) | Low | High | 50-80% | >95% |
| TB | Lymph | Low | Very high | N/A | N/A |
| Viral | Lymph initially | Normal | Mild ↑ | N/A | N/A |
| Bacterial | PMN | Low | High | N/A | N/A |

## Exam Question Patterns

**Q: Post-COVID diabetic with black palatal necrosis and sinusitis**
A: Mucormycosis; urgent imaging, debridement, amphotericin B lipid

**Q: Asthmatic with hemoptysis, IgE >1500, central bronchiectasis**
A: ABPA; treat with prednisone + itraconazole

**Q: CD4 <50, subacute meningitis, CSF lymphocytes, low glucose**
A: Cryptococcal meningitis; India ink, antigen test; amphotericin B + fluconazole

**Q: CD4 <200, dyspnea, normal CXR initially, high LDH**
A: PCP; induce sputum/BAL, TMP-SMX, steroids if hypoxic

## Key Diagnostic Tests Summary

| Fungus | Best Test | Sensitivity | Specificity |
|--------|----------|------------|------------|
| Mucor | Histology (broad non-septate) | High | High |
| ABPA | Total IgE >1000 + specific IgG | High | High |
| Candida | Culture (blood, sputum) | Variable | High |
| Crypto | Antigen (CSF/serum) | >95% | >95% |
| PCP | Induced sputum/BAL | 80-90% | 99% |`,
        mnemonics: [
          { text: "Mucor: Black + Broad non-septate", explanation: "Necrosis + non-septate hyphae on histology" },
          { text: "ABPA: IgE >1000 + Central bronchiectasis", explanation: "Diagnostic criteria: 6 features including IgE and imaging" },
          { text: "Crypto: India ink + Antigen test", explanation: "Antigen >95% sensitive; ink 50-80% sensitive" },
          { text: "PCP: Hypoxia > CXR, High LDH", explanation: "Marked hypoxia out of proportion; LDH >300" }
        ],
        keyPoints: [
          "Mucormycosis: non-septate hyphae; black eschar pathognomonic; urgent debridement + amphotericin B",
          "ABPA: IgE >1000; central bronchiectasis; steroids essential + itraconazole; ABPA-S vs ABPA-CB",
          "Candidiasis: nystatin for oral thrush; fluconazole for esophageal; echinocandin for invasive; C. auris multidrug-resistant",
          "Cryptococcal meningitis: antigen >95% sensitive; CSF antigen diagnostic; amphotericin B + fluconazole; CD4 <100",
          "PCP: hypoxia out of proportion to CXR; high LDH; TMP-SMX first-line; prophylaxis when CD4 <200"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "209-218: Fungal Infections", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "12: Fungal Infections", edition: "11th" }
        ]
      },
      {
        layer: 5,
        slug: "fungal-infections-active-recall",
        title: "Fungal Infections - Active Recall",
        estimatedMinutes: 15,
        summary: "Flashcard-based active recall for fungal infection concepts and management.",
        contentMd: `# Fungal Infections - Active Recall

**Q1: What is the causative organism of mucormycosis and what is its morphology?**
A: Mainly Mucor (>50%) and Rhizopus (20-30%); histology shows broad, non-septate hyphae with right-angle branching.

**Q2: Describe the clinical presentation of rhinocerebral mucormycosis.**
A: Nasal/palatal necrosis (black eschar), sinusitis, rapid progression to orbital involvement (proptosis, ophthalmoplegia) and CNS (headache, altered mental status, hemiparesis).

**Q3: Why did mucormycosis surge in India post-COVID?**
A: High-dose corticosteroids + hyperglycemia/DKA + COVID-induced epithelial damage + hypoxia = immune suppression + fungal colonization.

**Q4: What is the emergency management of mucormycosis?**
A: Urgent surgical debridement (often multiple procedures), IV amphotericin B lipid formulation 5 mg/kg/day, aggressive glycemic control, ICU monitoring.

**Q5: What is ABPA and what immune mechanism underlies it?**
A: Allergic Bronchopulmonary Aspergillosis; Type III (immune complex) and Type IV (delayed-type) hypersensitivity to Aspergillus fumigatus in lungs.

**Q6: List the diagnostic criteria for ABPA.**
A: Asthma/CF with infiltrates, central bronchiectasis, IgE >1000, specific IgE/IgG to Aspergillus, eosinophilia >500, radiologic findings (must have all 6).

**Q7: How do you differentiate ABPA-S from ABPA-CB?**
A: ABPA-S = serological form with IgE elevation but NO bronchiectasis; ABPA-CB = chronic bronchitis with bronchiectasis and fibrosis.

**Q8: What is the treatment of ABPA?**
A: Oral corticosteroids (0.5-1 mg/kg prednisone, taper slowly) + itraconazole 200 mg BD (reduces IgE, prevents progression).

**Q9: What is an aspergilloma and what predisposes to it?**
A: Fungus ball (Aspergillus in pre-existing cavity); predisposed by TB cavitation (most common in India), pneumoconiosis, bullae; complications = hemoptysis.

**Q10: How do you differentiate oral candidiasis from esophageal candidiasis clinically?**
A: Oral = visible plaques on tongue/palate (thrush); esophageal = dysphagia/odynophagia without visible lesions, suggests CD4 <50 in HIV.

**Q11: What is the treatment for oral candidiasis (thrush)?**
A: Nystatin oral suspension (swish and swallow) or clotrimazole lozenges; topical agents usually sufficient.

**Q12: What is the treatment for esophageal candidiasis?**
A: Fluconazole 100-200 mg daily × 2-3 weeks (preferred); alternative = itraconazole; refractory cases = caspofungin IV.

**Q13: What is C. auris and why is it concerning?**
A: Emerging Candida species with multidrug resistance (resistant to azoles and sometimes echinocandins); spreads in healthcare settings; requires contact isolation.

**Q14: What is the treatment for invasive candidiasis (candidemia)?**
A: Echinocandins (anidulafungin, caspofungin, micafungin) IV preferred over fluconazole; continue 2 weeks after last positive blood culture; remove central lines if possible.

**Q15: What causes cryptococcal meningitis and what CD4 threshold is critical?**
A: Cryptococcus neoformans; CD4 <100 (AIDS-defining); disseminates from lungs (often asymptomatic) to CNS.

**Q16: Describe the CSF findings in cryptococcal meningitis.**
A: Low cell count (antiphlogistic - <20 cells typically), high protein, low glucose, high opening pressure (>25 cm H2O = hydrocephalus risk).

**Q17: What is India ink test and what is its sensitivity?**
A: Microscopy showing Cryptococcus with capsule appearing as "halo"; sensitivity 50-80%; less sensitive than antigen test.

**Q18: What is the preferred diagnostic test for cryptococcal meningitis?**
A: CSF antigen test (>95% sensitive and specific); also available for serum antigen (positive in disseminated disease).

**Q19: What is the treatment regimen for cryptococcal meningitis?**
A: Induction = amphotericin B lipid 3-4 mg/kg/day × 2 weeks; Consolidation = fluconazole 400-800 mg daily × 8 weeks; Maintenance = fluconazole 200 mg daily until CD4 >100 × 3 months.

**Q20: What is PCP and what organism causes it?**
A: Pneumocystis jirovecii pneumonia; occurs when CD4 <200; presents with subacute dyspnea, cough, marked hypoxia.

**Q21: Describe the typical CXR findings in PCP.**
A: Bilateral interstitial infiltrates (classic); but CXR can be normal in early disease; CT shows ground-glass opacities (more sensitive).

**Q22: What is the key clinical finding in PCP that helps diagnosis?**
A: Hypoxia OUT OF PROPORTION to CXR findings; marked A-a gradient (>35 mmHg); LDH markedly elevated (>300).

**Q23: What is the gold standard diagnosis for PCP?**
A: Induced sputum or bronchoscopy with BAL showing P. jirovecii on silver stain or direct fluorescence antibody; sensitivity 80-90%.

**Q24: What is the first-line treatment for PCP?**
A: Trimethoprim-sulfamethoxazole DS BID × 21 days; alternative agents include pentamidine, dapsone-trimethoprim, atovaquone-proguanil.

**Q25: When should steroids be added in PCP treatment?**
A: Adjunctive corticosteroids (prednisone 40 mg BD × 5 days then taper) if PaO2 <70 mmHg or A-a gradient >35 mmHg; improves oxygenation and survival.

**Q26: What is PCP prophylaxis and when should it be started?**
A: TMP-SMX daily (single strength or DS) when CD4 <200; discontinue when CD4 >200 for ≥3 months on ART.

**Q27: What is IRIS in the context of PCP and how should it be managed?**
A: Immune Reconstitution Inflammatory Syndrome; when CD4 recovers on ART, exaggerated inflammatory response can worsen respiratory status; may need steroids during immune recovery.

**Q28: Compare the CSF findings between cryptococcal and tuberculous meningitis.**
A: Crypto: low cells (lymph), high protein, low glucose, antigen positive. TB: high cells initially (lymph), very high protein, low glucose, AFB negative often (culture positive).

**Q29: What is the pathognomonic finding in mucormycosis?**
A: Black necrotic eschar on palate/nasal septum from angioinvasion and tissue infarction.

**Q30: Why is glycemic control critical in mucormycosis treatment?**
A: Hyperglycemia/DKA impairs neutrophil function and T-cell immunity; euglycemia essential for immune clearance of fungus; uncontrolled diabetes = worse prognosis.`
,
        mnemonics: [
          { text: "Mucor: BLACK eschar, Non-septate", explanation: "Pathognomonic findings; urgent debridement needed" },
          { text: "ABPA: IgE >1000, Central bronchiectasis", explanation: "6 diagnostic criteria including both" },
          { text: "Crypto CSF: Low cells, High protein, Low glucose", explanation: "Antiphlogistic (minimal inflammation)" },
          { text: "PCP: Hypoxia > CXR, High LDH", explanation: "Marked hypoxia out of proportion" },
          { text: "Candida: Nystatin (oral), Fluconazole (esophageal), Echinocandin (invasive)", explanation: "Escalation based on severity" }
        ],
        keyPoints: [
          "Mucormycosis: black eschar pathognomonic; broad non-septate hyphae; urgent debridement + amphotericin B; mortality 50-90%",
          "ABPA: IgE >1000; central bronchiectasis; steroids + itraconazole; avoid rapid steroid withdrawal",
          "Aspergilloma: TB cavity most common; hemoptysis risk; may need surgery",
          "Candidiasis: oral thrush with nystatin; esophageal/invasive with fluconazole; C. auris requires echinocandin + isolation",
          "Cryptococcal meningitis: antigen >95% sensitive; amphotericin B + fluconazole; CD4 <100 risk",
          "PCP: hypoxia out of proportion; high LDH; TMP-SMX ± steroids; prophylaxis when CD4 <200"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "209-218: Fungal Infections", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "12: Fungal Infections", edition: "11th" }
        ]
      }
    ]
  },
  {
    topicCode: "IM-MOD-09-TOP-09",
    layers: [
      {
        layer: 1,
        slug: "rickettsial-spirochetal-foundation",
        title: "Rickettsial & Spirochetal Infections - Foundation",
        estimatedMinutes: 25,
        summary: "Overview of rickettsial and spirochetal infections endemic to India including scrub typhus and leptospirosis.",
        contentMd: `# Rickettsial & Spirochetal Infections - Foundation

## Classification

### Rickettsiae (Obligate Intracellular Gram-Negative)
**Spotted Fever Group:**
- Rickettsia rickettsii (Rocky Mountain spotted fever - Americas)
- Orientia tsutsugamushi (Scrub typhus - Asia)
- Rickettsia conorii (Mediterranean spotted fever)

**Typhus Group:**
- Rickettsia prowazekii (Epidemic typhus - louse-borne)
- Rickettsia typhi (Endemic typhus - flea-borne)

**Other:**
- Ehrlichia chaffeensis (Human monocytotropic ehrlichiosis - HME)
- Anaplasma phagocytophilum (Human granulocytotropic anaplasmosis - HGA)

### Spirochetes
**Relapsing Fever:**
- Borrelia recurrentis (epidemic)
- Borrelia hermsii (endemic)

**Lyme Disease:**
- Borrelia burgdorferi

**Leptospirosis:**
- Leptospira interrogans

**Treponematoses:**
- Treponema pallidum (syphilis)

## Scrub Typhus (India's Endemic Rickettsial Disease)

### Epidemiology in India
- **Most common rickettsial disease** in Asia
- **Endemic areas**: Foothills of Himalayas, Northeast India, coastal plains
- **Vector**: Larval stage of Leptotrombidium mite (trombiculid mite)
- **Seasonal**: Monsoon and post-monsoon (increased mite vector activity)
- **Transmission**: Mite bite inoculates bacteria

### Causative Agent
- **Orientia tsutsugamushi** (obligate intracellular bacterium)
- **Antigen variations**: 3 serotypes (Karp, Gilliam, TA716) → reinfection possible

### Clinical Features
- **Incubation**: 6-21 days
- **Prodrome**: Fever, chills, headache
- **Pathognomonic sign**: Eschar (blackened scar at inoculation site, 50-80% present)
- **Rash**: Maculopapular, trunk → limbs (appears on day 3-5)
- **Lymphadenopathy**: Tender nodes (regional lymph nodes draining eschar site)

## Leptospirosis (Flood-Related in India)

### Epidemiology in India
- **After monsoons/flooding**: Major outbreaks
- **Occupational risk**: Rice farmers, sewer workers, veterinarians
- **Transmission**: Contact with infected rodent urine (contaminated water/soil)
- **Leptospira interrogans**: Different serovars cause disease

### Biphasic Course

**Leptospiremic Phase (Days 1-7):**
- Fever (often high, 39-40°C)
- Headache, myalgia, back pain
- Conjunctival suffusion (without exudate - distinguishes from other fevers)
- Gastrointestinal symptoms

**Immune Phase (Days 8-30):**
- Fever may recur
- Aseptic meningitis (most common CNS manifestation)
- Weil's disease (severe form): Hemorrhage, renal failure, hepatic dysfunction, pulmonary hemorrhage

### Weil's Disease (Severe Leptospirosis)
- **Occurs in 5-10%** of leptospirosis cases
- **Presentation**: High fever, jaundice (hence "yellow fever" misnomer), renal failure, hemorrhagic manifestations
- **Mortality**: 5-15% even with treatment
- **Pathophysiology**: Severe vascular damage, thrombocytopenia, coagulopathy

## Epidemic Typhus

### Overview
- **Causative**: Rickettsia prowazekii
- **Vector**: Human human louse (Pediculus humanus)
- **Geographic**: Wars, famines, refugee camps (not endemic in India currently)
- **Historical significance**: Major causes of death in wars

## Comparison Table

| Feature | Scrub Typhus | Leptospirosis | Epidemic Typhus |
|---------|-------------|---------------|-----------------|
| Agent | Orientia tsutsugamushi | Leptospira interrogans | Rickettsia prowazekii |
| Vector | Mite larva | Rodent urine | Louse |
| Endemic area (India) | Foothills, Northeast | Monsoon areas | Not endemic |
| Incubation | 6-21 days | 2-30 days | 8-14 days |
| Pathognomonic | Eschar | Conjunctival suffusion | Rash spares palms/soles |
| Severity | Mild-moderate | Mild-severe | Severe |
| Diagnosis | PCR, serology | PCR, culture (early) | Serology |`,
        mnemonics: [
          { text: "Scrub Typhus: OT = Orientia Tsutsugamushi", explanation: "With eschar and regional lymphadenopathy" },
          { text: "Leptospirosis: Conjunctival suffusion (no exudate)", explanation: "Distinguishing feature from other fevers" },
          { text: "Weil's Disease: W = Yellow (jaundice) + Hemorrhage + Renal failure", explanation: "Severe form of leptospirosis" },
          { text: "Rickettsiae: Obligate intracellular, Gram-negative, arthropod-borne", explanation: "OX reactions positive in spotted/typhus fever" }
        ],
        keyPoints: [
          "Scrub typhus: Orientia tsutsugamushi; endemic in India foothills/Northeast; eschar + regional lymphadenopathy pathognomonic",
          "Leptospirosis: Leptospira interrogans; flood-related outbreaks; conjunctival suffusion (no exudate) distinguishing feature",
          "Weil's disease: severe leptospirosis with jaundice, renal failure, hemorrhage; 5-15% mortality",
          "Epidemic typhus: louse-borne; Rickettsia prowazekii; rash spares palms/soles (unlike Rocky Mountain spotted fever)",
          "All rickettsial/spirochetal infections treatable with doxycycline early in course"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "175-181: Rickettsial & Spirochetal Infections", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "13: Vector-Borne Infections", edition: "11th" }
        ]
      },
      {
        layer: 2,
        slug: "rickettsial-spirochetal-mechanism",
        title: "Rickettsial & Spirochetal Infections - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathophysiology of rickettsial endothelial injury, Weil's disease pathogenesis, and immune response.",
        contentMd: `# Rickettsial & Spirochetal Infections - Pathophysiology

## Rickettsial Endothelial Injury

### Mechanism of Tissue Damage
1. **Rickettsial entry**: Into endothelial cells via phagocytosis
2. **Intracellular replication**: In cytoplasm (obligate intracellular)
3. **Direct invasion**: Spreads to adjacent endothelial cells
4. **Endothelial injury**: Direct cytopathic effect + inflammatory mediators
5. **Vascular leakage**: Increased permeability → fluid extravasation
6. **Thrombosis**: Platelet activation, microthrombi formation

### Rickettsial Immune Response
- **Antibodies**: Develop after 7-10 days (Weil-Felix reaction = OX proteins reactive)
- **Cell-mediated**: Th1 response with IFN-γ → macrophage activation
- **Complement activation**: Both classical and alternative pathways

### Rash Pathogenesis
- **Vasculitis**: Rickettsiae in endothelium → inflammation → rash
- **Spotted fever rash**: Maculopapular → petechial (from microvascular damage)
- **Rickettsial rash distribution**: Trunk, limbs, includes palms/soles (unlike meningococcemia)

## Scrub Typhus Pathophysiology

### Eschar Formation
- **Inoculation**: Mite larva injects rickettsiae
- **Local replication**: At bite site
- **Necrosis**: Central tissue necrosis from rickettsial cytotoxicity
- **Eschar**: Black/brownish necrotic center with erythematous halo
- **Regional lymphadenopathy**: Drainage from eschar → lymphangitis, adenitis

### Systemic Manifestations
- **Vasculitis**: Multiorgan involvement (skin, heart, lungs, brain)
- **Myocarditis**: Can cause congestive heart failure
- **Pneumonitis**: Interstitial pneumonia in severe cases
- **Meningoencephalitis**: CNS invasion → altered mental status, seizures

## Leptospirosis Pathophysiology

### Biphasic Course Mechanism

**Leptospiremic Phase (Bacterial Presence):**
- Leptospires multiply in liver, kidneys, other organs
- **Cytokine storm**: TNF-α, IL-6 production → systemic manifestations
- **Direct toxin effects**: Leptospiral endotoxin-like effects
- **Conjunctival suffusion**: From vasculitis (distinct from bacterial conjunctivitis which has exudate)

**Immune Phase (Antibody-Mediated):**
- IgM antibodies develop → immune complex formation
- **Aseptic meningitis**: Immune-mediated (not direct bacterial CNS invasion usually)
- **Vasculitis continues**: Even as bacteria clear

### Weil's Disease Pathogenesis
- **Severe vascular damage**: Extensive endothelial injury
- **Hemorrhage**: From vasculitis, thrombocytopenia
- **Coagulopathy**: DIC from endotoxin + platelet consumption
- **Renal failure**: Acute tubular necrosis from hypotension, direct toxins, immune complexes
- **Hepatic dysfunction**: Cholestasis from immune-mediated injury
- **Pulmonary hemorrhage**: Life-threatening complication (ARDS-like)
- **High mortality**: Despite antibiotics (irreversible end-organ damage)

### Conjuguctival Suffusion Feature
- **Vasculitis of conjunctival vessels** (not conjunctivitis)
- **No exudate** (distinguishes from bacterial conjunctivitis)
- **Hallmark sign** of leptospirosis
- **Conjunctival hemorrhage** may occur

## Immune Response Patterns

**Rickettsial infections:**
- Th1-predominant (IFN-γ for control)
- Antibodies important for clearance
- Cross-protection possible (same serotype/strain)

**Leptospirosis:**
- Both innate (neutrophils, macrophages) and adaptive (Th1/Th2)
- IgM early, IgG later
- Reinfection possible with different serovars`,
        mnemonics: [
          { text: "Rickettsial: Endothelial vasculitis", explanation: "Direct infection of endothelium → vascular leakage → rash" },
          { text: "Eschar: E = Eschar (necrotic center)", explanation: "Pathognomonic for scrub typhus" },
          { text: "Leptospirosis biphasic: Leptospiremic (bacterial) then Immune (antibodies)", explanation: "Different pathophysiology each phase" },
          { text: "Weil's: Hemorrhage + Hepatitis + Hemolysis", explanation: "Severe form from extensive vasculitis" }
        ],
        keyPoints: [
          "Rickettsiae: obligate intracellular parasites causing endothelial vasculitis → vascular leakage → rash",
          "Eschar: necrotic center at mite inoculation site; due to rickettsial cytotoxicity; surrounded by erythema",
          "Leptospirosis biphasic: phase 1 = leptospiremia (bacteria killing); phase 2 = immune-mediated (antibodies form)",
          "Weil's disease: severe vasculitis causing hemorrhage, coagulopathy (DIC), renal/hepatic failure, pulmonary hemorrhage",
          "Conjunctival suffusion: vasculitis without exudate; pathognomonic for leptospirosis"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "175-181: Rickettsial & Spirochetal Infections", edition: "21st" },
          { book: "Robbins & Cotran Pathologic Basis of Disease", chapter: "8: Infectious Diseases", edition: "10th" }
        ]
      },
      {
        layer: 3,
        slug: "rickettsial-spirochetal-clinical",
        title: "Rickettsial & Spirochetal Infections - Clinical",
        estimatedMinutes: 25,
        summary: "Clinical presentation, diagnosis, and management of scrub typhus, leptospirosis, and epidemic typhus.",
        contentMd: `# Rickettsial & Spirochetal Infections - Clinical & Management

## Scrub Typhus Clinical Presentation

### Early Phase (Days 1-3)
- **Fever**: High (39-40°C), sustained
- **Headache**: Severe, prominent
- **Myalgia**: Generalized, trunk prominent
- **Malaise, chills**

### Diagnostic Phase (Days 4-7)
- **Eschar**: Small (5-10 mm), blackened central necrosis with erythematous halo
  - **Location**: Common on groin, axilla, buttocks (areas where mites feed)
  - **Pathognomonic** if present (50-80% of cases)
- **Rash**: Maculopapular, appears day 3-5, trunk → limbs
- **Lymphadenopathy**: Regional nodes draining eschar site (tender, 1-3 cm)
- **Splenomegaly**: 40-50% of cases

### Severe Disease Complications
- **Myocarditis**: Conduction abnormalities, cardiogenic shock
- **Pneumonitis**: Interstitial infiltrates, respiratory compromise
- **Meningoencephalitis**: Altered mental status, seizures
- **Multi-organ failure**: In untreated/delayed treatment

### Diagnosis
- **Clinical + epidemiology**: High fever + eschar + regional lymphadenopathy in endemic area
- **Weil-Felix test**: OX19, OX2, OXK reactions (OXK typically positive in scrub typhus)
- **PCR**: From blood (early phase) or eschar
- **Serology**: IgM/IgG antibodies (develop by day 7-10)
- **Culture**: Difficult, biosafety level 3

### Management
- **First-line**: Doxycycline 100 mg BD × 7 days (excellent outcomes if early)
- **Alternative**: Chloramphenicol 1 g QID × 7 days (in pregnancy, children <8y)
- **Support**: Fluid management, management of complications

## Leptospirosis Clinical Presentation

### Leptospiremic Phase (Days 1-7)
- **Fever**: Abrupt, high (40°C), biphasic pattern common
- **Headache**: Frontal, severe
- **Myalgia**: Severe, especially in calf/back
- **Gastrointestinal**: Nausea, vomiting, abdominal pain, diarrhea
- **Conjunctival suffusion**: Without exudate (pathognomonic sign)
- **Rash**: May appear early (maculopapular)
- **Asymptomatic phase**: Brief remission possible between phases

### Immune Phase (Days 8-30)
- **Recurrent fever**
- **Aseptic meningitis**: Headache, neck stiffness, altered mental status
- **Uveitis**: Ocular involvement (rare)
- **Myalgia continues**

### Weil's Disease (Severe, 5-10% of cases)
- **Earlier hemorrhagic manifestations**:
  - Petechial/purpuric rash
  - Mucosal bleeding (gums, epistaxis)
- **Jaundice**: From hepatic involvement (hence "yellow fever")
- **Renal failure**: Oliguria, azotemia
- **Pulmonary hemorrhage**: Hemoptysis, ARDS (life-threatening)
- **Myocarditis/arrhythmias**
- **DIC**: Coagulopathy
- **High mortality**: 5-15% despite antibiotics

### Diagnosis
- **Serology**: IgM (positive by day 7-10), IgG (later, indicates immunity)
- **PCR**: Early leptospiremia phase (first 5-7 days)
- **Culture**: From blood (first week), CSF, urine (later)
- **Dark-field microscopy**: Leptospires in urine (days 8-30)
- **Clinical + Conjunctival suffusion** = strong indicator

### Management
- **Early phase**: Doxycycline 100 mg BD × 7 days OR Penicillin G IV (if severe)
- **Immune phase**: Continue antibiotics but less effective; supportive care
- **Severe/Weil's disease**: IV Penicillin G 1.5 million units Q4H or Ceftriaxone 1 g IV daily
- **ICU support**: Mechanical ventilation (pulmonary hemorrhage), dialysis (renal failure), management of DIC

## Epidemic Typhus

### Clinical Features (Similar to other rickettsial infections)
- **Fever**: High (40-41°C), sustained
- **Headache**: Severe
- **Rash**: Appears day 5-6
  - Maculopapular → petechial
  - **Spares palms and soles** (unlike Rocky Mountain spotted fever)
  - Becomes confluent in severe cases
- **CNS involvement**: Delirium, altered mental status (common, hence "typhus" = smoky state of mind)
- **Complications**: Gangrene (digital, earlobes), disseminated intravascular coagulation

### Diagnosis & Management
- **Serology**: Weil-Felix test (OX2, OX19 positive; OXK usually negative)
- **Treatment**: Doxycycline or chloramphenicol
- **Prevention**: Louse control (DDT, hygiene)

## Differential Diagnosis: High Fever + Rash

| Disease | Vector | Eschar/Sign | Rash | Key Finding |
|---------|--------|-------------|------|------------|
| Scrub typhus | Mite | Eschar + regional LAD | Trunk→limbs | OXK positive |
| Leptospirosis | Rodent urine | Conjunctival suffusion | May be absent | Biphasic fever |
| Epidemic typhus | Louse | No eschar | Spares palms/soles | OX2/19 positive |
| Meningococcemia | Person | Petechiae | Palms/soles | N. meningitidis culture |
| Measles | Airborne | Koplik spots | Cephalocaudal | High IgM |`,
        mnemonics: [
          { text: "Scrub: Eschar + OXK", explanation: "Eschar pathognomonic, OXK Weil-Felix positive" },
          { text: "Lepto: Conjunctival suffusion + Biphasic fever", explanation: "Suffusion without exudate distinguishes from bacterial conjunctivitis" },
          { text: "Weil's: CHARD", explanation: "Coagulopathy, Hemorrhage, Acute kidney injury, Respiratory (pulmonary hemorrhage), Dysfunction (multi-organ)" },
          { text: "Epidemic typhus: OX2+OX19-OXK negative", explanation: "Weil-Felix pattern different from scrub typhus" }
        ],
        keyPoints: [
          "Scrub typhus: eschar + regional lymphadenopathy + fever + rash; doxycycline × 7 days; excellent outcome if treated early",
          "Leptospirosis: conjunctival suffusion without exudate (pathognomonic); biphasic fever; aseptic meningitis in immune phase",
          "Weil's disease: hemorrhage + jaundice + renal failure + pulmonary hemorrhage; 5-15% mortality; IV penicillin/ceftriaxone",
          "Epidemic typhus: louse-borne; rash spares palms/soles; doxycycline effective; historical but rare now",
          "All rickettsial/spirochetal: doxycycline or chloramphenicol effective if given early (within 5-7 days)"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "175-181: Rickettsial & Spirochetal Infections", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "13: Vector-Borne Infections", edition: "11th" }
        ]
      },
      {
        layer: 4,
        slug: "rickettsial-spirochetal-exam",
        title: "Rickettsial & Spirochetal Infections - Exam Prep",
        estimatedMinutes: 20,
        summary: "High-yield facts, tables, and NEET-PG concepts for rickettsial and spirochetal infections.",
        contentMd: `# Rickettsial & Spirochetal Infections - Exam Prep

## Scrub Typhus Facts

| Feature | Details |
|---------|---------|
| Organism | Orientia tsutsugamushi |
| Vector | Larval Leptotrombidium mite |
| Incubation | 6-21 days |
| Endemic in India | Himalayas foothills, Northeast |
| Seasonal | Monsoon/post-monsoon |
| Pathognomonic | Eschar (50-80%), regional LAD |
| Fever pattern | High (39-40°C), sustained |
| Rash | Maculopapular, day 3-5, trunk→limbs |
| Diagnosis | Weil-Felix (OXK+), serology, PCR |
| Treatment | Doxycycline 100 mg BD × 7 days |
| Mortality untreated | 30-50% |
| With treatment | <5% if early |

## Leptospirosis Key Facts

| Feature | Leptospiremic Phase | Immune Phase |
|---------|-------------------|--------------|
| Duration | Days 1-7 | Days 8-30 |
| Pathology | Bacterial | Antibody-mediated |
| Fever | High, abrupt | Recurrent |
| Conjunctival suffusion | Present (pathognomonic) | Resolved |
| Culture positive | Yes (blood) | No |
| Antibiotics effective | Yes | Less effective |
| CSF | Minimal cells initially | Aseptic meningitis pattern |

### Weil's Disease Features
- **Occurs in**: 5-10% of leptospirosis
- **Mortality**: 5-15% even with treatment
- **Triad**: Jaundice + Renal failure + Hemorrhage
- **Pulmonary hemorrhage**: Life-threatening, most common cause of death
- **DIC**: Coagulopathy from severe vasculitis
- **Treatment**: IV Penicillin G or Ceftriaxone (more effective than oral doxycycline)

## Weil-Felix Reaction

| Test | Scrub Typhus | Epidemic Typhus | Spotted Fever | Rickettsial Pox |
|------|------------|-----------------|---------------|-----------------|
| OX19 | + | + | + | - |
| OX2 | - | + | + | - |
| OXK | + | - | - | - |

*Note: OXK typically positive in scrub typhus (Indian endemic form)*

## Epidemic Typhus Key Facts
- **Organism**: Rickettsia prowazekii
- **Vector**: Pediculus humanus (human louse)
- **Geographic**: Wars, famines, refugee camps (not endemic in India)
- **Rash**: Spares palms and soles (distinguishes from Rocky Mountain)
- **CNS**: Delirium (altered mental state, "typhus"=smoky)
- **Weil-Felix**: OX2+, OX19+ (OXK negative)
- **Treatment**: Doxycycline or chloramphenicol

## Differential Diagnosis: Fever + Rash + Regional LAD

| Disease | Eschar | Conjunctival Suffusion | Rash Pattern | LAD | Diagnosis |
|---------|--------|----------------------|-------------|-----|-----------|
| Scrub typhus | Yes | No | Trunk→limbs | Yes | OXK+ |
| Lepto (Weil's) | No | Yes | Petechial | No | Serology |
| Epidemic typhus | No | No | Spares palms | No | OX2+ |
| Cat scratch | Scratch mark | No | Regional only | Yes | Culture, serology |
| Measles | No | No | Cephalocaudal | No | IgM, contact hx |

## Exam Question Patterns

**Q: Farmer with fever, headache, eschar on groin, regional LAD in endemic area**
A: Scrub typhus; doxycycline × 7 days; OXK Weil-Felix likely positive

**Q: Flood aftermath, fever + conjunctival suffusion + severe headache**
A: Leptospirosis; check for jaundice/renal failure (Weil's disease); IV penicillin if severe

**Q: Fever + rash sparing palms/soles + delirium in refugee camp**
A: Epidemic typhus; louse-borne; OX2 positive; doxycycline

**Q: High fever + myalgia + rash, OXK positive on Weil-Felix**
A: Scrub typhus; endemic typhus confirmed

## High-Yield Management Points

**Scrub typhus:**
- Doxycycline 100 mg BD × 7 days (first-line, excellent outcomes if early)
- Chloramphenicol 1 g QID × 7 days (pregnancy, <8 years)
- Treatment within 5 days → 99% cure

**Leptospirosis early:**
- Doxycycline 100 mg BD × 7 days (if leptospiremic phase, first 5-7 days)
- Penicillin G IV (if severe/Weil's)

**Leptospirosis severe (Weil's):**
- IV Penicillin G 1.5M units Q4H OR Ceftriaxone 1 g daily
- ICU for pulmonary hemorrhage, renal failure
- Dialysis if oliguria

## Prevention

**Scrub typhus:**
- Avoid brushy areas during monsoon
- Check for ticks/mites
- Protective clothing
- Tetracycline prophylaxis for high-risk groups (doxycycline weekly)

**Leptospirosis:**
- Avoid contaminated water (especially flooding)
- Use protective equipment (farmers, sewer workers)
- Boil water in endemic areas
- Rodent control`,
        mnemonics: [
          { text: "Scrub: O.tsutsugamushi = OXK", explanation: "Weil-Felix OXK positive in scrub typhus" },
          { text: "Lepto: Conjunctival suffusion = no exudate", explanation: "Vasculitis not inflammation" },
          { text: "Weil's: W=Yellow (jaundice), A=Acute kidney injury, W=Withdraw fluid (hemorrhage)", explanation: "Severe leptospirosis" },
          { text: "Epidemic: OX2+OX19+, OXK negative", explanation: "Different Weil-Felix than scrub typhus" }
        ],
        keyPoints: [
          "Scrub typhus endemic India; eschar + OXK positive; doxycycline × 7 days early gives excellent outcomes",
          "Leptospirosis biphasic: phase 1 = leptospiremic (doxycycline effective); phase 2 = immune (antibody-mediated, ABx less effective)",
          "Weil's disease 5-10% of leptospirosis; jaundice + renal failure + hemorrhage + pulmonary involvement; mortality 5-15%",
          "Epidemic typhus louse-borne; OX2 Weil-Felix positive; rare now but important historically",
          "All rickettsial infections: early doxycycline/chloramphenicol effective within therapeutic window (5-7 days of onset)"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "175-181: Rickettsial & Spirochetal Infections", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "13: Vector-Borne Infections", edition: "11th" }
        ]
      },
      {
        layer: 5,
        slug: "rickettsial-spirochetal-active-recall",
        title: "Rickettsial & Spirochetal Infections - Active Recall",
        estimatedMinutes: 15,
        summary: "Flashcard-based active recall for rickettsial and spirochetal infection concepts.",
        contentMd: `# Rickettsial & Spirochetal Infections - Active Recall

**Q1: What is the causative organism of scrub typhus?**
A: Orientia tsutsugamushi, an obligate intracellular gram-negative bacterium transmitted by larval Leptotrombidium mites.

**Q2: Describe the pathognomonic finding of scrub typhus.**
A: Eschar - a small (5-10 mm) blackened necrotic center with erythematous halo at the mite inoculation site; present in 50-80% of cases, commonly on groin, axilla, buttocks.

**Q3: What is regional lymphadenopathy in scrub typhus and how does it relate to the eschar?**
A: Tender, enlarged lymph nodes (1-3 cm) that drain the area of the eschar; lymphangitis and adenitis result from bacterial inoculation.

**Q4: What are the three serotypes of Orientia tsutsugamushi and why does reinfection occur?**
A: Karp, Gilliam, TA716; antigenic variation between serotypes allows reinfection with different strains.

**Q5: What is the Weil-Felix reaction and what is its significance in scrub typhus?**
A: A heterophile antibody test using Proteus OX strains; in scrub typhus, OXK is typically positive (OX19 and OX2 negative).

**Q6: What is the first-line treatment for scrub typhus and what is the outcome if given early?**
A: Doxycycline 100 mg BD × 7 days; if given within 5 days of onset, cure rate approaches 99% with mortality <5%.

**Q7: What is the biphasic course of leptospirosis?**
A: Phase 1 (Leptospiremic, days 1-7): leptospires in blood, bacteria killing; Phase 2 (Immune, days 8-30): antibodies form, immune-mediated manifestations, aseptic meningitis.

**Q8: What is conjunctival suffusion and why is it pathognomonic for leptospirosis?**
A: Vasculitis of conjunctival vessels WITHOUT exudate (distinguishes from bacterial conjunctivitis); red conjunctivae without discharge is hallmark of leptospirosis.

**Q9: What is Weil's disease and what percentage of leptospirosis patients develop it?**
A: Severe form of leptospirosis occurring in 5-10% of infected individuals; characterized by jaundice, renal failure, hemorrhage, and pulmonary hemorrhage.

**Q10: What is the triad of Weil's disease?**
A: Jaundice (hepatic involvement), renal failure (acute kidney injury), and hemorrhage (mucosal/petechial/pulmonary).

**Q11: What is the most common cause of death in Weil's disease?**
A: Pulmonary hemorrhage (hemoptysis, ARDS-like presentation) requiring mechanical ventilation and ICU support.

**Q12: How does the treatment of leptospiremia phase differ from the immune phase?**
A: Leptospiremic phase (first 5-7 days): Doxycycline 100 mg BD effective; Immune phase (day 8+): Antibodies already formed, ABX less effective, supportive care predominant.

**Q13: What is the treatment for severe leptospirosis (Weil's disease)?**
A: IV Penicillin G 1.5 million units Q4H OR Ceftriaxone 1 g daily; more effective than oral doxycycline in severe cases.

**Q14: What is the mortality of Weil's disease even with antibiotic treatment?**
A: 5-15% mortality despite antibiotics; high due to irreversible end-organ damage (pulmonary hemorrhage, renal failure, DIC).

**Q15: What causes the biphasic fever pattern in leptospirosis?**
A: Leptospiremic phase causes fever; brief remission during transition; immune phase causes recurrent fever (aseptic meningitis).

**Q16: What is the pathophysiology of aseptic meningitis in leptospirosis?**
A: Not direct bacterial CNS invasion, but immune-mediated (immune complex deposition, antibody formation causing meningeal inflammation).

**Q17: What is epidemic typhus and what is the vector?**
A: Caused by Rickettsia prowazekii, transmitted by human louse (Pediculus humanus); associated with wars, famines, refugee camps.

**Q18: How does the rash of epidemic typhus differ from Rocky Mountain spotted fever?**
A: Epidemic typhus rash SPARES palms and soles; Rocky Mountain spotted fever rash INCLUDES palms and soles (key differentiator).

**Q19: What is the significance of the term "typhus"?**
A: Derived from Greek "typhos" meaning smoky/hazy state of mind; reflects the CNS involvement with delirium in epidemic typhus.

**Q20: What is the Weil-Felix pattern in epidemic typhus?**
A: OX2 positive, OX19 positive, OXK NEGATIVE (opposite of scrub typhus where OXK positive).

**Q21: What is the incubation period of scrub typhus?**
A: 6-21 days, typically 8-10 days before fever onset.

**Q22: What is the incubation period of leptospirosis?**
A: 2-30 days, typically 7-10 days; longer incubations associated with milder disease.

**Q23: Why is scrub typhus endemic in Indian foothills and Northeast?**
A: Presence of Leptotrombidium mites (vector) in these ecologic regions; seasonal increase during monsoon/post-monsoon (increased mite activity).

**Q24: Why are occupational groups at high risk for leptospirosis in India?**
A: Rice farmers, sewer workers, veterinarians exposed to contaminated water and rodent urine; especially after flooding.

**Q25: What is the treatment of conjunctival suffusion in leptospirosis?**
A: Supportive care (artificial tears, cool compresses); it resolves spontaneously as infection resolves; antibiotic therapy treats the systemic disease.

**Q26: What is the pathophysiology of jaundice in Weil's disease?**
A: Immune-mediated hepatocellular injury from vasculitis and immune complexes; cholestasis from hepatic dysfunction.

**Q27: Why does doxycycline lose efficacy as leptospirosis progresses?**
A: Leptospires clear from blood by immune phase (day 8+); antibodies (not active infection) cause immune phase manifestations; antibiotics can't treat antibody-mediated disease.

**Q28: What diagnostic test would be most useful to differentiate scrub typhus from other rickettsial infections?**
A: Weil-Felix reaction (OXK specific for scrub typhus) or PCR targeting Orientia-specific sequences.

**Q29: What is the role of dark-field microscopy in diagnosing leptospirosis?**
A: Can visualize spirochetes in urine during immune phase (days 8-30); helpful when culture unavailable; requires specific equipment.

**Q30: What is the significance of early doxycycline treatment in rickettsial infections?**
A: Dramatic improvement in outcomes if given within 5-7 days of symptom onset; delays beyond this window allow irreversible tissue damage and complications.`
,
        mnemonics: [
          { text: "Scrub: O.T. = Orientia Tsutsugamushi", explanation: "OXK Weil-Felix, Eschar" },
          { text: "Leptospirosis: Suffusion = no exudate", explanation: "Vasculitis (vessel inflammation), not infection" },
          { text: "Weil's: JARring diagnosis", explanation: "Jaundice, Acute kidney injury, Respiratory hemorrhage" },
          { text: "Epidemic: OX2+ vs Scrub OXK+", explanation: "Different Weil-Felix patterns" },
          { text: "Doxycycline window: 5-7 days", explanation: "Effective only in early phase" }
        ],
        keyPoints: [
          "Scrub typhus: Orientia tsutsugamushi; eschar + regional LAD pathognomonic; OXK Weil-Felix positive; doxycycline × 7 days curative if early",
          "Leptospirosis biphasic: phase 1 = bacterial (doxycycline works); phase 2 = immune (antibodies form, less effective)",
          "Weil's disease: 5-10% of leptospirosis; jaundice + renal failure + hemorrhage (pulmonary most fatal); IV penicillin/ceftriaxone",
          "Conjunctival suffusion: vasculitis without exudate; pathognomonic for leptospirosis",
          "Epidemic typhus: louse-borne; rash spares palms/soles; OX2 Weil-Felix positive; rare in modern era"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "175-181: Rickettsial & Spirochetal Infections", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "13: Vector-Borne Infections", edition: "11th" }
        ]
      }
    ]
  },
  {
    topicCode: "IM-MOD-09-TOP-10",
    layers: [
      {
        layer: 1,
        slug: "hai-immunocompromised-foundation",
        title: "HAI & Immunocompromised Host Infections - Foundation",
        estimatedMinutes: 25,
        summary: "Overview of hospital-acquired infections (MRSA, ESBL, VRE, Acinetobacter, C. difficile) and opportunistic infections in immunocompromised hosts (neutropenic, post-transplant, HIV/AIDS).",
        contentMd: `# HAI & Immunocompromised Host Infections - Foundation

## Hospital-Acquired Infections (Nosocomial)

### Multidrug-Resistant (MDR) Pathogens

**MRSA (Methicillin-Resistant Staphylococcus aureus)**
- **Mechanism**: PBP2a (altered penicillin-binding protein) confers beta-lactam resistance
- **Epidemiology**: 40-60% of S. aureus in Indian hospitals
- **Risk factors**: Prolonged hospitalization, ICU stay, central lines, surgery

**ESBL (Extended-Spectrum Beta-Lactamase)**
- **Producers**: E. coli, Klebsiella, Proteus, Citrobacter
- **Prevalence**: 30-50% in India (highest globally)
- **Mechanism**: Beta-lactamase that hydrolyzes 3rd gen cephalosporins
- **Risk**: Common in urinary/respiratory tract infections

**VRE (Vancomycin-Resistant Enterococci)**
- **Organisms**: E. faecalis, E. faecium
- **Van genes**: VanA, VanB types determine resistance profile
- **Colonization**: Can persist asymptomatically

**Acinetobacter baumannii**
- **Carbapenem resistance**: Via OXA enzymes
- **Environmental**: Survives on surfaces, equipment
- **Outbreak potential**: Rapid nosocomial spread
- **Difficult to treat**: Limited options

**Clostridioides difficile (C. difficile)**
- **Toxins**: Toxin A (enterotoxin) and Toxin B (cytotoxin)
- **Antibiotic-associated**: Caused by fluoroquinolones, clindamycin, cephalosporins
- **Spore formation**: Resistant to disinfectants, persists in environment
- **Risk**: Severe colitis, fulminant disease in elderly

### Infection Sites in HAI
- **Surgical site infections** (SSI): Skin, superficial incision, organ/space
- **Bloodstream infections** (BSI): Central line-associated (CLABSI)
- **Urinary tract**: Catheter-associated UTI (CAUTI)
- **Respiratory**: Ventilator-associated pneumonia (VAP)
- **Surgical/traumatic wounds**

## Immunocompromised Host Infections

### Categories of Immunocompromise

**Neutropenia (ANC <500/μL)**
- **Causes**: Chemotherapy, leukemia, aplastic anemia, severe infection
- **Risk**: Bacterial, fungal (Aspergillus), viral infections
- **Timing**: Risk increases as ANC falls below 500

**Post-Transplant**
- **Timing of infections**:
  - 0-1 month: Bacterial, candida (surgical, donor-derived)
  - 1-6 months: CMV, PCP, cryptococcus (CD4 <200 equivalent)
  - >6 months: Community-acquired + opportunistic
- **Immunosuppression**: Tacrolimus, cyclosporine, mycophenolate, corticosteroids

**HIV/AIDS (CD4 <200)**
- **Early AIDS** (CD4 50-200): Fungal (Crypto, Histoplasma, Coccidioides), mycobacterial (TB, MAC)
- **Advanced AIDS** (CD4 <50): CMV, MAC, PCP, cryptococcal meningitis, toxoplasmosis

## CD4 Count-Based Opportunistic Infections

| CD4 Count | OIs |
|-----------|-----|
| <500 | TB, Pneumonia, Fever of unknown origin |
| <200 | PCP, Oral candidiasis, Toxoplasmosis, Cryptococcus, Histoplasmosis |
| <100 | Cryptococcal meningitis, CMV, Microsporidiosis, Cryptosporidiosis |
| <50 | MAC, CMV retinitis, CNS lymphoma, Toxoplasma encephalitis |

## Common Organisms in Immunocompromised

**Bacterial:**
- S. aureus (including MRSA), gram-negative (E. coli, Klebsiella, Pseudomonas), Legionella

**Fungal:**
- Candida (mucosal, disseminated), Aspergillus (invasive), Cryptococcus (meningitis), Histoplasma, Pneumocystis

**Viral:**
- CMV (retinitis, esophagitis, colitis), EBV (lymphomas), HHV-8 (Kaposi sarcoma), Hepatitis B/C

**Parasitic:**
- Toxoplasma (brain abscess), Cryptosporidium (diarrhea), Microsporidium

**Mycobacterial:**
- Mycobacterium tuberculosis, M. avium complex (MAC) CD4 <50
- Non-tuberculous mycobacteria`,
        mnemonics: [
          { text: "MRSA: PBP2a = Beta-lactam resistance", explanation: "Altered penicillin-binding protein" },
          { text: "ESBL: ESC = Extended-spectrum cephalosporin hydrolyzing", explanation: "3rd gen cephalosporins not effective" },
          { text: "HAI: MRSA, ESBL, VRE, Acineto, C.diff", explanation: "Major MDR pathogens in hospitals" },
          { text: "CD4 <200: PCP, Crypto, Candida prophylaxis", explanation: "Major OIs requiring prevention/treatment" }
        ],
        keyPoints: [
          "MRSA: 40-60% in Indian hospitals; altered PBP2a; major nosocomial pathogen",
          "ESBL: 30-50% in India (highest globally); E. coli, Klebsiella; 3rd gen cephalosporins ineffective",
          "VRE: vancomycin-resistant enterococci; VanA/VanB types; nosocomial spread risk",
          "Acinetobacter baumannii: carbapenem-resistant; environmental persistence; difficult to treat",
          "C. difficile: toxins A+B; antibiotic-associated colitis; spore persistence on surfaces",
          "CD4 <200: PCP, Crypto, Candida, Toxoplasma; CD4 <50: MAC, CMV, CNS lymphoma"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "139: Hospital-Acquired Infections", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "18: Immunocompromised Host Infections", edition: "11th" }
        ]
      },
      {
        layer: 2,
        slug: "hai-immunocompromised-mechanism",
        title: "HAI & Immunocompromised Host Infections - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathophysiology of antibiotic resistance mechanisms, neutropenia susceptibility, and immune reconstitution.",
        contentMd: `# HAI & Immunocompromised Host Infections - Pathophysiology

## Antibiotic Resistance Mechanisms

### Beta-Lactam Resistance

**MRSA (PBP2a Mechanism):**
- **Normal**: Beta-lactams bind penicillin-binding proteins (PBPs) → inhibit cell wall synthesis
- **MRSA**: PBP2a (mecA gene product) has low affinity for beta-lactams
- **Result**: Cell wall synthesis continues → survival despite antibiotic
- **Transmission**: Horizontal transfer via mecA plasmid

**ESBL Production:**
- **Enzyme**: Extended-spectrum beta-lactamase (TEM-1, SHV variants, CTX-M)
- **Mechanism**: Hydrolyzes 3rd gen cephalosporins (ceftriaxone, ceftazidime)
- **Substrate spectrum**: Beta-lactams but NOT inhibited by clavulanic acid (unlike AmpC)
- **Geographic**: TEM/SHV in Latin America; CTX-M prevalent in Asia/Europe/India

### Vancomycin Resistance (VRE)

**Van Genes (VanA, VanB):**
- **VanA**: Inducible, high-level resistance to vancomycin AND teicoplanin (Tn1546 transposon)
- **VanB**: Inducible, resistance to vancomycin only (van genes on chromosome)
- **Mechanism**: Altered cell wall peptidoglycan (D-Ala → D-Lac) reduces vancomycin binding

### Carbapenem Resistance (Acinetobacter)

**OXA Enzymes:**
- **OXA-23, OXA-24, OXA-58**: Serine beta-lactamases that hydrolyze carbapenems
- **Environmental**: Acinetobacter can acquire resistance genes from environmental sources
- **Biofilm**: Acinetobacter forms biofilms → increased antibiotic penetration difficulty

## Pathogenesis of C. difficile Infection

### Antibiotic Disruption → Overgrowth

1. **Antibiotic exposure**: Fluoroquinolones, clindamycin, cephalosporins
2. **Normal flora disruption**: Loss of protective anaerobes (Bacteroides, etc.)
3. **C. difficile overgrowth**: Spores germinate → vegetative cells produce toxins
4. **Toxin production**:
   - **Toxin A**: Enterotoxin (fluid secretion, inflammation)
   - **Toxin B**: Cytotoxin (cell rounding, death)

### Pathologic Changes
- **Mucosal inflammation**: Neutrophil infiltration, edema
- **Pseudomembrane formation**: Fibrinopurulent exudate (yellowish plaques)
- **Ulceration**: Loss of epithelial lining
- **Toxic megacolon**: Severe colitis with dilated colon (fulminant CDI)

## Neutropenia Mechanisms

### Infection Susceptibility in Neutropenia (ANC <500)

1. **Loss of primary defense**: Neutrophils are main innate immunity
2. **Bacterial translocation**: GI barrier breakdown from chemotherapy
3. **Fungal overgrowth**: Candida, Aspergillus (especially A. fumigatus)
4. **Limited inflammatory response**: Reduced fever/signs (temperature paradox)
5. **Rapid dissemination**: Lack of local containment → bacteremia/fungemia

### Risk Stratification
- **Mild neutropenia** (500-1000): Low risk if brief
- **Moderate** (100-500): Moderate risk
- **Severe** (<100): High risk, especially if prolonged (>7 days)

## Post-Transplant Immunosuppression

### Timeline of Infections

**0-1 month (Early):**
- Source: Donor-derived, surgical, nosocomial
- Organisms: Bacterial (MRSA, ESBL), Candida, Herpes simplex
- Mechanism: Acute surgical stress, mechanical complications

**1-6 months (Late):**
- Mechanism: T-cell mediated immunity impaired by immunosuppression
- Organisms: CMV, PCP, Cryptococcus, Mycobacteria
- Equivalent to CD4 50-200 in HIV

**>6 months (Very late):**
- Community-acquired predominate if good graft function
- Opportunistic if graft rejection/chronic rejection (increased IS)

## HIV/AIDS Pathophysiology

### CD4 Depletion Cascade

1. **Initial infection**: Th1 response (IFN-γ production)
2. **Viral replication**: CD4+ T-cells primary target
3. **CD4 decline**: Rate 50-100/year without treatment
4. **Threshold effects**:
   - **CD4 <200**: Loss of T-cell dependent OI control (PCP, Crypto)
   - **CD4 <100**: MAC, CMV, advanced dissemination
   - **CD4 <50**: CNS complications (toxo, CMV retinitis, lymphoma)

### Immune Dysfunction by CD4 Count

**CD4 >500:** Relatively preserved immunity (community-acquired infections dominant)

**CD4 200-500:** Th1 cells declining, early opportunism (TB, fungal)

**CD4 <200:** Th1 severely impaired, fungal/parasitic OIs emerge

**CD4 <50:** T-cell immunity essentially absent, risk of disseminated infections

## IRIS (Immune Reconstitution Inflammatory Syndrome)

### Mechanism
- **When CD4 recovers** on ART (usually CD4 >50-100)
- **Paradoxical worsening**: Restored T-cell response to pre-existing OI
- **Pathophysiology**: Exuberant Th1 response to poorly cleared pathogens
- **Timing**: Weeks to months after ART initiation
- **Example**: PCP-IRIS (respiratory worsening despite PCP treatment)`,
        mnemonics: [
          { text: "MRSA: PBP2a = altered penicillin-binding", explanation: "mecA gene product resists beta-lactams" },
          { text: "ESBL: Serine beta-lactamase, hydrolyzes 3rd gen cephalosporins", explanation: "CTX-M prevalent in India" },
          { text: "VRE: Van genes alter cell wall (D-Ala→D-Lac)", explanation: "Reduces vancomycin binding" },
          { text: "CDI: Toxin A+B from overgrowth after ABX", explanation: "Disrupts normal flora" },
          { text: "Neutropenia: Loss of primary defense", explanation: "Bacteria/fungi disseminate unchecked" }
        ],
        keyPoints: [
          "MRSA: PBP2a confers beta-lactam resistance; horizontal transfer of mecA gene",
          "ESBL: Hydrolyzes 3rd generation cephalosporins; CTX-M prevalent in India; clavulanic acid ineffective",
          "VRE: VanA (vancomycin + teicoplanin resistant); VanB (vancomycin resistant only) via altered peptidoglycan",
          "C. difficile: disrupted flora allows overgrowth → toxin A+B production → pseudomembrane formation",
          "Neutropenia: loss of primary defense; rapid dissemination; temperature paradox (no fever despite infection)",
          "CD4 <200: PCP, Crypto; CD4 <100: CMV, MAC; CD4 <50: CNS complications, advanced dissemination"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "139: Hospital-Acquired Infections", edition: "21st" },
          { book: "Robbins & Cotran Pathologic Basis of Disease", chapter: "8: Infectious Diseases", edition: "10th" }
        ]
      },
      {
        layer: 3,
        slug: "hai-immunocompromised-clinical",
        title: "HAI & Immunocompromised Host Infections - Clinical",
        estimatedMinutes: 25,
        summary: "Clinical presentation, diagnosis, and management of HAI and opportunistic infections in immunocompromised hosts.",
        contentMd: `# HAI & Immunocompromised Host Infections - Clinical & Management

## Hospital-Acquired Infections Management

### MRSA Infection

**Clinical Presentation:**
- **Skin/Soft tissue**: Cellulitis, abscesses, surgical site infection
- **Bloodstream**: Fever, hypotension, sepsis (CLABSI)
- **Pneumonia**: VAP → respiratory failure

**Diagnosis:**
- **Culture**: Blood, wound, sputum (depends on site)
- **Methicillin resistance**: MRSA confirmed by oxacillin/cefoxitin disk testing or PBP2a detection

**Management:**
- **First-line**: Vancomycin IV 15-20 mg/kg Q8-12H (trough 15-20 μg/mL)
- **Alternative**: Linezolid 600 mg BD, daptomycin IV 4-6 mg/kg daily
- **Source control**: Drainage of abscesses, removal of central lines

### ESBL-Producing Gram-Negative

**Clinical Presentation:**
- **UTI**: Dysuria, frequency, fever (catheter-associated)
- **Bloodstream**: Sepsis (from UTI or other source)
- **Respiratory**: Pneumonia

**Diagnosis:**
- **Culture**: Identifies organism (E. coli, Klebsiella, etc.)
- **ESBL testing**: Double-disk synergy test or E-test confirms ESBL

**Management:**
- **Not effective**: 3rd gen cephalosporins (ceftriaxone, ceftazidime)
- **First-line**: Carbapenems (imipenem, meropenem, ertapenem)
- **Alternative**: Fluoroquinolones (if susceptible), aminoglycosides

### C. difficile Infection (CDI)

**Clinical Presentation:**
- **Mild-moderate**: Diarrhea (3-5 stools/day), abdominal pain, fever <38.5°C
- **Severe**: >6 stools/day, fever >38.5°C, severe abdominal pain, elevated WBC (>15)
- **Fulminant**: Toxic megacolon, shock, hypotension, altered mental status, mortality >50%

**Diagnosis:**
- **Stool testing**:
  - **NAAT (PCR)** for tcdB gene (most sensitive, detects colonization)
  - **Toxin A/B enzyme immunoassay** (EIA, less sensitive but specific)
  - **GDH (glutamate dehydrogenase)** screening (>95% sensitive, less specific)
- **Colonoscopy**: Shows pseudomembranes (yellowish plaques) if fulminant

**Management:**
- **Mild-moderate**: Vancomycin 125 mg QID × 10 days OR fidaxomicin 200 mg BD × 10 days
- **Severe**: Vancomycin 125 mg QID × 10 days (fidaxomicin preferred if affordable)
- **Fulminant**: Vancomycin + metronidazole + surgical consultation (toxic megacolon risk)
- **Recurrent CDI**: Fidaxomicin or prolonged vancomycin taper

### Acinetobacter baumannii

**Clinical Presentation:**
- **Nosocomial pneumonia**: VAP (ventilator-associated)
- **Bloodstream**: CLABSI
- **Wound infections**: After trauma/surgery

**Diagnosis:**
- **Culture**: Oxidase negative, gram-negative coccobacillus
- **Carbapenem susceptibility**: OXA genes confer resistance

**Management:**
- **Carbapenem-sensitive**: Imipenem or meropenem
- **Carbapenem-resistant**: Limited options
  - Polymyxin B/Colistin (nephrotoxic, neurotoxic)
  - Tigecycline (broad-spectrum tetracycline)
  - Combination therapy (meropenem + polymyxin, aminoglycoside)

## Neutropenic Fever Management

### Approach to Fever (ANC <500)

**Workup:**
- **Blood cultures** (before antibiotics)
- **Imaging**: CXR, abdominal imaging (if appropriate)
- **Specific sites**: Cultures from indwelling lines, sputum (if cough)

**Management:**
- **Empiric antibiotics**: Within 1 hour of fever recognition
  - **Monotherapy**: Ceftazidime 2 g Q8H (covers gram-negative including Pseudomonas, gram-positive)
  - **Alternative**: Imipenem 500 mg Q6H OR combination (piperacillin-tazobactam + aminoglycoside)
- **Adjust based on culture/clinical response** at 48-72 hours
- **Duration**: Continue until neutrophil recovery (ANC >500) and clinical improvement

### Risk Stratification
- **Low-risk** (brief neutropenia expected to recover): Oral fluoroquinolone acceptable if well
- **High-risk** (prolonged neutropenia, hemodynamic instability): IV broad-spectrum mandatory

## Post-Transplant Infection Prophylaxis

### Graft Type-Specific

**Solid Organ Transplant (SOT):**
- **CMV prophylaxis**: Valganciclovir 900 mg daily × 3-6 months (if at risk)
- **PCP prophylaxis**: TMP-SMX daily × 1 year
- **Fungal**: Fluconazole if high-risk or azathioprine use
- **TB prophylaxis**: If latent TB, INH × 12 months

### Monitoring
- **CMV**: Viral load monitoring (CMV antigenemia or PCR)
- **BK virus**: PCR for BK viremia (monitor in renal transplant)

## HIV/AIDS OI Management

### CD4 <200 Prophylaxis

**PCP:**
- TMP-SMX DS daily (first-line) OR pentamidine monthly inhaled
- Continue until CD4 >200 × 3 months on ART

**Toxoplasmosis:**
- TMP-SMX (same as PCP) covers toxo
- If sulfa allergy: Dapsone + pyrimethamine + leucovorin

**Cryptococcal Meningitis:**
- Amphotericin B lipid 3-4 mg/kg/day × 2 weeks, then fluconazole consolidation/maintenance

### CD4 <50 (Advanced AIDS)
- **MAC prophylaxis**: Azithromycin 1200 mg weekly (start at CD4 <50)
- **CMV prophylaxis**: Controversial; not routinely given
- **Treatment of active CMV**: Ganciclovir/valganciclovir, cidofovir, or foscarnet

### ART Initiation
- **When to start**: Ideally immediately in most OIs; delay 2 weeks in TB/Crypto meningitis (to reduce IRIS)
- **Post-ART monitoring**: Watch for IRIS (fever, worsening symptoms weeks after starting)`,
        mnemonics: [
          { text: "MRSA: Vancomycin first-line", explanation: "Check trough 15-20 μg/mL" },
          { text: "ESBL: Carbapenem (imipenem/meropenem)", explanation: "3rd gen cephalosporins ineffective" },
          { text: "CDI: Vancomycin (mild-severe), Fidaxomicin (recurrent)", explanation: "Metronidazole NOT effective" },
          { text: "Neutropenic fever: ABX within 1 hour", explanation: "Empiric broad-spectrum mandatory" },
          { text: "CD4 <200: PCP + Toxo + Crypto prophylaxis", explanation: "TMP-SMX covers PCP and toxo" }
        ],
        keyPoints: [
          "MRSA: vancomycin IV (trough 15-20); linezolid/daptomycin alternative; source control critical",
          "ESBL: carbapenems (imipenem/meropenem); NOT 3rd gen cephalosporins",
          "C. difficile: vancomycin/fidaxomicin NOT metronidazole; fidaxomicin for recurrent; pseudomembrane on colonoscopy",
          "Neutropenic fever: blood cultures first, empiric antibiotics <1 hour; ceftazidime monotherapy or combination",
          "CD4 <200: TMP-SMX daily prevents PCP + toxoplasmosis; start MAC prophylaxis at CD4 <50"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "139: Hospital-Acquired Infections", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "18: Immunocompromised Host Infections", edition: "11th" }
        ]
      },
      {
        layer: 4,
        slug: "hai-immunocompromised-exam",
        title: "HAI & Immunocompromised Host Infections - Exam Prep",
        estimatedMinutes: 20,
        summary: "High-yield facts, tables, and NEET-PG concepts for HAI and immunocompromised infections.",
        contentMd: `# HAI & Immunocompromised Host Infections - Exam Prep

## HAI Summary Table

| Organism | Prevalence India | Risk Factors | First-Line | Comment |
|----------|-----------------|--------------|-----------|---------|
| MRSA | 40-60% | ICU, central lines, prolonged stay | Vancomycin (trough 15-20) | PBP2a resistant |
| ESBL | 30-50% (highest) | UTI, respiratory, intra-abdominal | Carbapenem | 3rd gen ceph ineffective |
| VRE | <10% | Prolonged ICU, ICU mortality | Linezolid/daptomycin | Vancomycin resistant |
| Acineto | Rising | ICU, ventilator, wounds | Carbapenem (if sensitive) | Biofilm, environmental |
| C.diff | Variable | Antibiotics (fluoroquinolone, clinda) | Vancomycin 125 mg QID | Not metronidazole |

## CD4-Based OI Thresholds and Management

| CD4 Count | OI | Prophylaxis | Treatment |
|-----------|-----|------------|-----------|
| <500 | TB, pneumonia | INH if LTBI | Standard |
| <200 | PCP, Toxo, Crypto | TMP-SMX | As needed |
| <100 | CMV, MAC, Histo | Azithro (CD4<50) for MAC | IV agents |
| <50 | MAC, CMV retinitis | Azithro weekly | Ganciclovir, etc. |

## MRSA Quick Facts
- **Resistance mechanism**: PBP2a (altered penicillin-binding protein)
- **Prevalence India**: 40-60% of S. aureus (hospitals), lower community
- **Treatment**: Vancomycin IV preferred (NOT cephalosporins)
- **Vancomycin dosing**: 15-20 mg/kg Q8-12H, target trough 15-20 μg/mL
- **Alternatives**: Linezolid 600 mg BD, daptomycin 4-6 mg/kg daily
- **Sites**: Skin/soft tissue, CLABSI, VAP

## ESBL Quick Facts
- **Prevalence India**: 30-50% (highest in world)
- **Organisms**: E. coli, Klebsiella, Proteus, Citrobacter
- **Enzyme types**: TEM, SHV (classic); CTX-M (predominant in Asia, India)
- **Mechanism**: Hydrolyzes 3rd generation cephalosporins
- **NOT effective**: Ceftriaxone, ceftazidime, cefotaxime
- **Treatment**: Carbapenems (imipenem, meropenem, ertapenem)
- **Clavulanic acid**: Does NOT inhibit ESBL (unlike AmpC)

## C. difficile CDI

| Feature | Mild-Moderate | Severe | Fulminant |
|---------|---------------|--------|-----------|
| Stools | 3-5/day | >6/day | Toxic megacolon |
| Fever | <38.5°C | >38.5°C | Shock |
| WBC | <15 | >15 | Elevated |
| Abdomen | Mild pain | Severe pain | Acute abdomen |
| Treatment | Vanc/Fidax | Vanc/Fidax | Vanc+Metro, Surgery |

**Key Point**: Metronidazole is NO LONGER recommended (only in resource-limited settings); vancomycin 125 mg QID or fidaxomicin 200 mg BD × 10 days

## Neutropenic Fever Management

**Fever Definition**: Single temp >38.3°C OR sustained >38°C × 1 hour

**Risk Stratification:**
- **Low-risk**: Expected brief recovery, stable, no underlying comorbidity → oral fluoroquinolone acceptable
- **High-risk**: Prolonged neutropenia, hemodynamic instability, comorbidities → IV broad-spectrum mandatory

**Empiric Antibiotics:**
- **Monotherapy**: Ceftazidime 2 g Q8H (covers gram-neg including Pseudomonas, gram-pos)
- **Alternative combo**: Piperacillin-tazobactam + aminoglycoside
- **Adjust at 48-72 hours** based on culture results and clinical response

## Post-Transplant OI Timeline

| Timing | Organisms | Mechanism | Prophylaxis |
|--------|-----------|-----------|------------|
| 0-1 month (Early) | Bacterial, Candida, HSV | Surgical, nosocomial | Antibacterial, antifungal |
| 1-6 months (Late) | CMV, PCP, Crypto, TB | T-cell immunity suppressed | CMV prophylaxis, TMP-SMX, TB prophylaxis |
| >6 months (Very late) | Community-acquired | Good graft function | Standard for general pop |

## Common Exam Questions

**Q: MRSA bacteremia treatment**
A: Vancomycin IV 15-20 mg/kg Q8-12H (target trough 15-20 μg/mL); NOT cephalosporins

**Q: UTI with E. coli resistant to ceftriaxone (ESBL)**
A: Carbapenem (imipenem/meropenem); cephalosporin ineffective

**Q: Post-antibiotic diarrhea, >6 stools/day, fever 39°C, high WBC**
A: C. difficile severe CDI; vancomycin 125 mg QID or fidaxomicin 200 mg BD

**Q: Fever in ANC <200, rapid sepsis development**
A: Empiric ceftazidime or combo therapy within 1 hour; blood cultures before ABX

**Q: Lung transplant patient, month 4, fever, cough, CD4-equivalent <200**
A: PCP likely; TMP-SMX treatment; CMV ruled out with viral load

**Q: HIV CD4 50, asymptomatic, no OI history**
A: Start MAC prophylaxis (azithromycin weekly); continue PCP/toxo prophylaxis

## High-Yield Antibiotic Guidelines

**For MRSA**: Vancomycin, linezolid, daptomycin
**For ESBL**: Carbapenems (beta-lactamase stable)
**For VRE**: Linezolid, daptomycin (vancomycin ineffective)
**For Acineto carbapenem-resistant**: Polymyxin B/colistin, tigecycline
**For C.diff**: Vancomycin, fidaxomicin (metronidazole obsolete)`,
        mnemonics: [
          { text: "MRSA: PBP2a = Vancomycin", explanation: "Trough 15-20 μg/mL" },
          { text: "ESBL: CTX-M = Carbapenem", explanation: "3rd gen ceph + clavulanic acid ineffective" },
          { text: "CDI: Vanc/Fidax NOT Metro", explanation: "Fidaxomicin for recurrent" },
          { text: "Neutropenic: ABX <1 hour", explanation: "Ceftazidime monotherapy or combo" },
          { text: "CD4 thresholds: <200=PCP, <100=MAC, <50=CMV", explanation: "OI prophylaxis by CD4 count" }
        ],
        keyPoints: [
          "MRSA: PBP2a mechanism; vancomycin 15-20 mg/kg with trough 15-20; alternatives linezolid/daptomycin",
          "ESBL: 30-50% prevalence in India (highest globally); CTX-M predominant; carbapenems only effective class",
          "C. difficile: vancomycin/fidaxomicin (NOT metronidazole); pseudomembrane on colonoscopy; toxic megacolon risk",
          "VRE: vancomycin-resistant; linezolid/daptomycin; nosocomial spread risk",
          "Neutropenic fever: <1 hour empiric broad-spectrum; ceftazidime monotherapy gold standard",
          "CD4 <200: TMP-SMX prophylaxis (PCP + toxo); CD4 <100: MAC prophylaxis with azithromycin; CD4 <50: CMV risk"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "139: Hospital-Acquired Infections", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "18: Immunocompromised Host Infections", edition: "11th" }
        ]
      },
      {
        layer: 5,
        slug: "hai-immunocompromised-active-recall",
        title: "HAI & Immunocompromised Host Infections - Active Recall",
        estimatedMinutes: 15,
        summary: "Flashcard-based active recall for HAI and immunocompromised infections concepts.",
        contentMd: `# HAI & Immunocompromised Host Infections - Active Recall

**Q1: What is MRSA and what genetic mechanism confers resistance?**
A: Methicillin-resistant S. aureus; mecA gene encodes PBP2a (altered penicillin-binding protein) with low affinity for beta-lactams.

**Q2: What is the prevalence of MRSA in Indian hospitals?**
A: 40-60% of S. aureus nosocomial isolates (high prevalence); lower in community (but increasing).

**Q3: What is the treatment of choice for MRSA and what are the target vancomycin levels?**
A: Vancomycin IV 15-20 mg/kg Q8-12H; target trough 15-20 μg/mL (ensures adequate penetration, especially for CNS infections).

**Q4: What are the alternative antibiotics for MRSA if vancomycin cannot be used?**
A: Linezolid 600 mg BD (good tissue penetration, reliable levels) or daptomycin 4-6 mg/kg daily (except lung infections).

**Q5: What is ESBL and what is its prevalence in India?**
A: Extended-spectrum beta-lactamase; 30-50% prevalence in India (HIGHEST globally); enzyme hydrolyzes 3rd generation cephalosporins.

**Q6: What organisms produce ESBL and which are most common in India?**
A: E. coli, Klebsiella, Proteus, Citrobacter; CTX-M type most common in Asia/India; TEM/SHV in Americas.

**Q7: Which antibiotics are NOT effective for ESBL infections and why?**
A: 3rd generation cephalosporins (ceftriaxone, ceftazidime, cefotaxime) are NOT effective because they are hydrolyzed by ESBL.

**Q8: What is the treatment of choice for ESBL infections?**
A: Carbapenems (imipenem, meropenem, ertapenem) - these are resistant to beta-lactamase hydrolysis.

**Q9: What is the difference between VRE and MRSA?**
A: VRE = vancomycin-resistant enterococci (against vancomycin); MRSA = methicillin-resistant S. aureus. Mechanisms different (Van genes vs PBP2a).

**Q10: What are the Van genes in VRE and what resistance do they confer?**
A: VanA (high-level resistance to vancomycin AND teicoplanin); VanB (resistance to vancomycin only); both alter peptidoglycan D-Ala to D-Lac.

**Q11: What are the treatment options for VRE?**
A: Linezolid 600 mg BD or daptomycin 4-6 mg/kg daily (vancomycin and carbapenems ineffective).

**Q12: What is Acinetobacter baumannii and why is it a nosocomial problem?**
A: Gram-negative coccobacillus; produces OXA carbapenem-resistant enzymes; survives on surfaces/equipment; rapid nosocomial spread.

**Q13: What are the treatment options for carbapenem-resistant Acinetobacter?**
A: Polymyxin B/colistin (nephrotoxic, neurotoxic), tigecycline (broad-spectrum tetracycline), or combination therapy (meropenem + polymyxin).

**Q14: What is C. difficile infection (CDI) and what causes it?**
A: Caused by Clostridioides difficile; produces toxins A (enterotoxin) and B (cytotoxin); follows disruption of normal flora by antibiotics.

**Q15: What antibiotics are most commonly associated with C. difficile?**
A: Fluoroquinolones, clindamycin, 3rd generation cephalosporins; also beta-lactams and macrolides.

**Q16: What is the modern treatment for C. difficile CDI?**
A: Vancomycin 125 mg QID × 10 days or fidaxomicin 200 mg BD × 10 days (NOT metronidazole anymore).

**Q17: What is the treatment for recurrent C. difficile CDI?**
A: Fidaxomicin preferred; or prolonged vancomycin taper; bezlotoxumab (monoclonal antibody) if high recurrence risk.

**Q18: What are the diagnostic tests for C. difficile?**
A: NAAT/PCR for tcdB gene (most sensitive), toxin A/B EIA (specific), GDH (glutamate dehydrogenase, >95% sensitive); colonoscopy shows pseudomembranes.

**Q19: What is fulminant CDI and what are its features?**
A: Severe disease with toxic megacolon, shock, hypotension, altered mental status, mortality >50%; requires ICU, possible surgical consultation.

**Q20: What is the management approach to fever in a neutropenic patient (ANC <500)?**
A: Blood cultures immediately, empiric broad-spectrum antibiotics within 1 hour (before culture results); ceftazidime 2 g Q8H monotherapy is standard.

**Q21: What is neutropenic fever and how is it defined?**
A: Fever in patient with ANC <500; defined as single temperature >38.3°C OR sustained >38°C × 1 hour.

**Q22: What risk stratification is used for neutropenic fever?**
A: Low-risk (brief expected neutropenia recovery, stable) = oral fluoroquinolone acceptable; High-risk (prolonged, unstable) = IV broad-spectrum mandatory.

**Q23: What organisms cause infection in post-transplant patients 1-6 months post-transplantation?**
A: CMV (most common viral), PCP, Cryptococcus, Mycobacterium tuberculosis; mechanism = T-cell immunity suppressed by immunosuppressive drugs.

**Q24: What is the CMV prophylaxis strategy in post-transplant patients?**
A: Valganciclovir 900 mg daily × 3-6 months (or ganciclovir IV) for high-risk recipients (especially D+/R- or higher-risk organs).

**Q25: What OI prophylaxis is given to post-transplant patients at CD4 equivalent <200?**
A: TMP-SMX daily × 1 year (covers PCP and toxoplasmosis); fluconazole if fungal risk; TB prophylaxis if latent TB.

**Q26: What is the CD4 threshold for PCP prophylaxis in HIV/AIDS?**
A: CD4 <200 → start TMP-SMX daily (first-line) or pentamidine inhaled monthly; discontinue when CD4 >200 × 3 months on ART.

**Q27: What is the CD4 threshold for MAC prophylaxis in HIV/AIDS?**
A: CD4 <50 → start azithromycin 1200 mg weekly (monotherapy is acceptable for MAC prophylaxis in this setting).

**Q28: What organisms are responsible for OI at CD4 <50?**
A: MAC (Mycobacterium avium complex), CMV retinitis, CNS lymphoma, Toxoplasma encephalitis, disseminated Histoplasma/Coccidioides.

**Q29: What is IRIS (Immune Reconstitution Inflammatory Syndrome) and when does it occur?**
A: Paradoxical worsening of or new OI manifestation when CD4 recovers on ART (usually CD4 >50-100); due to exuberant T-cell response to pre-existing pathogen.

**Q30: How is IRIS managed?**
A: Continue ART (crucial), NSAIDs for mild symptoms, corticosteroids for severe IRIS (after ruling out active infection); temporary interruption of ART rare.`
,
        mnemonics: [
          { text: "MRSA: PBP2a = Vancomycin (trough 15-20)", explanation: "NOT cephalosporins" },
          { text: "ESBL: E=CTX-M in India, C=Carbapenem only", explanation: "3rd gen ceph ineffective" },
          { text: "CDI: Vanc/Fidax × 10 days, NOT Metro", explanation: "Pseudomembrane on colonoscopy" },
          { text: "Neutropenic: ABX within 1 hour, Ceftazidime", explanation: "Before culture results" },
          { text: "HIV CD4: <200=PCP prophylaxis, <100=MAC, <50=CMV risk", explanation: "Threshold-based OI prevention" }
        ],
        keyPoints: [
          "MRSA: PBP2a mechanism; 40-60% in Indian hospitals; vancomycin 15-20 mg/kg (trough 15-20); linezolid/daptomycin alternative",
          "ESBL: 30-50% India (highest); CTX-M predominant; carbapenems ONLY effective; 3rd gen cephalosporins NOT effective",
          "C. difficile: vancomycin 125 mg QID × 10 days (fidaxomicin for recurrent); toxin A+B from flora disruption by antibiotics",
          "VRE: vancomycin-resistant enterococci; Van genes alter peptidoglycan; linezolid/daptomycin for treatment",
          "Neutropenic fever: empiric ABX within 1 hour; ceftazidime 2 g Q8H standard; risk stratification guides intensity",
          "Post-transplant: early (0-1 mo) = bacterial/candida; late (1-6 mo) = CMV/PCP/Crypto; prophylaxis critical",
          "HIV CD4: <200 = TMP-SMX (PCP + toxo); <100 = MAC azithro; <50 = CMV risk; IRIS watch during ART initiation"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "139: Hospital-Acquired Infections", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "18: Immunocompromised Host Infections", edition: "11th" }
        ]
      }
    ]
  }
];
