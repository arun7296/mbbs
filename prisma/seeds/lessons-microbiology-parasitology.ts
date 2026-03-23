import type { TopicLessons } from "./content-loader";

export const microbiologyParasitologyLessons: TopicLessons[] = [
  {
    topicCode: "MI-MOD-06-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "protozoa-layer-1-foundation",
        title: "Protozoa: Intestinal & Blood Parasites - Foundation",
        estimatedMinutes: 25,
        summary: "Protozoan parasites: Plasmodium (malaria), Leishmania, Entamoeba, Giardia. Morphology, transmission, life cycles, and epidemiology in India.",
        contentMd: `# Protozoa: Intestinal & Blood Parasites - Foundation

## Protozoan Classification

### Blood Parasites
| Parasite | Disease | Vector | Geographic |
|----------|---------|--------|-----------|
| **Plasmodium** | Malaria | Anopheles mosquito | Tropical; endemic India |
| **Leishmania** | Leishmaniasis (visceral/cutaneous) | Sand fly | Tropical/subtropical; India endemic |

### Intestinal Parasites
| Parasite | Disease | Transmission | Epidemiology |
|----------|---------|--------------|-------------|
| **Entamoeba histolytica** | Dysentery, amebic liver abscess | Fecal-oral (cysts) | Tropical; high India prevalence |
| **Giardia lamblia** | Giardiasis (diarrhea) | Fecal-oral (cysts) | Worldwide; waterborne outbreaks |

## Plasmodium Species

### Four Human Species
- **P. vivax** (Tertian): Most common India; mild-moderate disease; hypnozoites (relapse)
- **P. falciparum** (Aestivoautumnal): Most severe; cerebral malaria, severe anemia, renal failure
- **P. malariae** (Quartan): Fever every 3rd day; mild; chronic parasitemia
- **P. ovale** (Tertian): Rare; oval RBCs; tertian fever; hypnozoites present

### Life Cycle (2 Hosts)
1. **In Mosquito**: Sporogony (sexual replication) → sporozoites in salivary glands
2. **In Human**: Exoerythrocytic (liver) → Erythrocytic (RBC) stages → gametocytes → back to mosquito

## Leishmaniasis

### Leishmania Species
| Species | Disease | Vector | Geography |
|---------|---------|--------|-----------|
| **L. donovani** | Visceral leishmaniasis (kala azar) | Sand fly | India endemic (Bihar) |
| **L. tropica** | Cutaneous leishmaniasis | Sand fly | Middle East, North Africa, India |

### Visceral Leishmaniasis (Kala-Azar)
- Endemic foci: Bihar, Eastern Uttar Pradesh, West Bengal
- Sandfly vector: Phlebotomus argentipes (indoor, anthropophilic)
- Amastigote forms in macrophages (spleen, liver, bone marrow)

## Intestinal Protozoa

### Entamoeba histolytica
- **Transmission**: Fecal-oral (mature cysts, NOT trophozoites)
- **Epidemiology**: Tropical; high India prevalence
- **Disease**: Dysentery (bloody diarrhea), amebic liver abscess
- **Morphology**: Trophozoites (RBC ingestion), cysts (4 nuclei, mature)

### Giardia lamblia
- **Transmission**: Cysts in water; waterborne outbreaks
- **Disease**: Giardiasis (watery diarrhea, steatorrhea, malabsorption)
- **Epidemiology**: Worldwide; daycare, camping outbreaks
- **Morphology**: Trophozoites (pear-shaped, binucleate); cysts (4 nuclei)

## Malaria Epidemiology in India

### Endemic Zones
- **High Transmission**: Western Ghats, Eastern Ghats, Northeast states
- **Moderate**: Rural plains
- **Low**: Urban areas

### Seasonal Pattern
- **Peak**: June-October (monsoon, post-monsoon)
- **Low**: Winter

### Species Distribution
- **P. vivax**: 70-80% India; all regions
- **P. falciparum**: 20-30%; increasing in some states
`,
        mnemonics: [
          {
            text: "PVFO for Plasmodium species",
            explanation: "P. vivax, P. falciparum, P. malariae, P. ovale"
          },
          {
            text: "Falciparum = Festive = Fatal",
            explanation: "P. falciparum most severe; no relapse (vs P. vivax hypnozoites)"
          }
        ],
        keyPoints: [
          "Plasmodium: 4 species; P. vivax most common India (70-80%)",
          "P. falciparum: Most severe; crescent gametocytes diagnostic",
          "Leishmaniasis: L. donovani visceral (kala-azar Bihar); sand fly vector",
          "Entamoeba: Cysts fecal-oral; dysentery and liver abscess",
          "Giardia: Waterborne; steatorrhea, malabsorption",
          "Malaria India: Endemic monsoon; Anopheles stephensi (urban), culicifacies (rural)"
        ],
        textbookRefs: [
          { book: "Ananthanarayan & Paniker's Textbook of Microbiology", chapter: "Protozoa", edition: "11th" },
          { book: "Jawetz Melnick & Adelberg's Medical Microbiology", chapter: "46-47", edition: "28th" }
        ]
      },
      {
        layer: 2,
        slug: "protozoa-layer-2-mechanism",
        title: "Protozoa: Intestinal & Blood - Mechanism",
        estimatedMinutes: 30,
        summary: "Plasmodium life cycle, immune evasion, pathophysiology. Entamoeba invasive mechanisms, Giardia intestinal pathology.",
        contentMd: `# Protozoa: Intestinal & Blood - Mechanism

## Plasmodium Life Cycle & Pathophysiology

### Human Phase
1. **Hepatic Schizonts**: Days 1-6 asymptomatic; parasite multiplies in hepatocytes
2. **RBC Invasion**: Merozoites recognize RBC via receptors
3. **Asexual Replication**: Trophozoites → schizonts
4. **Synchronous Rupture**: All RBCs rupture together → pyrogenic response (fever)
5. **Gametocyte Formation**: Some merozoites → gametocytes

### Fever Periodicity
- **Tertian** (P. vivax, P. ovale, P. falciparum): Fever q48h
- **Quartan** (P. malariae): Fever q72h

### Hypnozoites (P. vivax, P. ovale)
- **Dormant Stage** in liver; reactivate weeks-months-years later → relapse

## Plasmodium Immune Evasion

### Antigenic Variation
- **PfEMP1**: Surface antigen; ~60 var genes enable switching
- **Cytoadherence**: Infected RBCs adhere to endothelium; avoid splenic clearing

### Parasite-Induced Cytokine Dysregulation
- **Toll-Like Receptor (TLR) Activation**: GPI anchors → TNF-α, IL-1β, IL-6
- **High Cytokine Levels**: TNF-α correlates with severe malaria
- **Endothelial Dysfunction**: TNF-α → BBB disruption, pulmonary edema

## Entamoeba Invasive Mechanisms

### Trophozoite Virulence Factors
- **Cysteine Proteases**: Degrade intestinal mucus, epithelial tight junctions
- **Contact-Dependent Cytolysis**: Trophozoite membrane triggers cell lysis

### Dysentery Pathophysiology
- **Colonic Ulceration**: Proteases → epithelial breach
- **Hemorrhage**: Mucosal blood vessels exposed

### Amebic Liver Abscess
- **Portal Route**: Trophozoites penetrate colon → portal vein → liver
- **Abscess Formation**: Hepatocyte liquefactive necrosis (sterile, not purulent)

## Giardia Pathophysiology

### Epithelial Damage
- **Trophozoite Attachment**: Ventral adhesive disc covers 80% duodenal epithelium
- **Villous Atrophy**: Villous shortening, crypt hyperplasia
- **Brush Border Enzyme Loss**: Lactase, sucrase deficiency

### Diarrhea Mechanisms
- **Osmotic**: Increased intraluminal carbohydrate (unabsorbed)
- **Malabsorption**: Fat-soluble vitamin deficiencies
`,
        mnemonics: [
          {
            text: "Plasmodium Fever CYCLE",
            explanation: "C=Cyclical (synchronized RBC rupture), Y=Years sometimes (hypnozoites relapse)"
          }
        ],
        keyPoints: [
          "Plasmodium: Exoerythrocytic then erythrocytic; fever from synchronous RBC rupture",
          "P. vivax/ovale: Hypnozoites = relapse weeks-years later",
          "Entamoeba: Proteases invade epithelium; dysentery from mucosal ulceration",
          "Giardia: Villous atrophy, tight junction disruption → osmotic diarrhea, malabsorption"
        ],
        textbookRefs: [
          { book: "Jawetz Melnick & Adelberg's Medical Microbiology", chapter: "46-47", edition: "28th" }
        ]
      },
      {
        layer: 3,
        slug: "protozoa-layer-3-clinical",
        title: "Protozoa: Intestinal & Blood - Clinical",
        estimatedMinutes: 35,
        summary: "Malaria presentations, diagnosis, severe complications. Kala-azar, amebiasis, giardiasis management.",
        contentMd: `# Protozoa: Intestinal & Blood - Clinical

## Malaria: Clinical Presentations

### Uncomplicated Malaria
**Paroxysm Pattern**:
- **Cold Stage**: Shivering, teeth chattering; core temperature rising
- **Hot Stage**: High fever (39-40°C), headache, myalgia, nausea
- **Sweating Stage**: Profuse diaphoresis, temperature drops

### Severe Malaria (P. falciparum mostly)
- **Cerebral Malaria**: Seizures, coma; mortality 15-20%
- **Severe Malarial Anemia**: Hemoglobin <5 g/dL
- **Acute Kidney Injury**: Creatinine >3 mg/dL; dialysis often necessary
- **Metabolic Acidosis**: Lactate >5 mmol/L = severe prognostic marker

### Diagnosis
**Blood Smear**: Shows morphology (P. falciparum crescent gametocytes diagnostic)
**RDT**: Sensitivity 95-100%, Specificity 95-98%
**Parasitemia**: <1% = uncomplicated; >2-5% = risk severe

### Management
**First-Line (India)**: Artemether-lumefantrine (ACT); 3-day course; >95% efficacy
**Severe Malaria**: Artesunate IV/IM 2.4 mg/kg 0, 12, 24h, then daily

## Visceral Leishmaniasis (Kala-Azar)

### Clinical Presentation
- Fever (high grade, weeks to months)
- Hepatosplenomegaly (marked)
- Pancytopenia (anemia, leukopenia, thrombocytopenia)
- Weight loss, emaciation (end-stage)

### Diagnosis
- **Splenic Aspiration**: Gold standard; >95% sensitivity
- **Serology**: IgG antibodies highly sensitive/specific (>95%)

### Treatment (India)
- **Liposomal Amphotericin B**: 5 mg/kg IV × 10 days; efficacy >95%
- **Miltefosine** (Oral): 100 mg daily × 28 days; teratogenic

## Amebic Dysentery & Liver Abscess

### Intestinal Amebiasis
- **Acute Dysentery**: Bloody diarrhea (trophozoites in stool)
- **Diagnosis**: Stool microscopy; serology negative acute
- **Treatment**: Metronidazole 750 mg TID × 7-10 days

### Amebic Liver Abscess
- **Presentation**: RUQ pain, fever (days to weeks)
- **Serology**: Positive in >90%
- **Imaging**: Round/oval hypoechoic lesion, right lobe
- **Treatment**: Metronidazole 750 mg TID × 7-10 days; aspiration if large/rupture risk

## Giardiasis

### Presentation
**Acute**:
- Watery diarrhea, steatorrhea
- Abdominal cramping, bloating
- Duration: 1-2 weeks typically

**Chronic**:
- Weight loss, failure to thrive (children)
- Vitamin A deficiency, B12 deficiency

### Diagnosis
- **Stool Antigen (ELISA)**: >95% sensitivity
- **Stool Microscopy**: Trophozoites/cysts (cysts diagnostic)

### Treatment (India)
- **Metronidazole**: 400 mg TID × 7 days; efficacy 80-90%
- **Tinidazole**: 2 g single dose; same efficacy; convenience
`,
        mnemonics: [
          {
            text: "Malaria CSP cycle",
            explanation: "C=Cold stage (shivering), S=Sweating stage (profuse), P=Paroxysm (fever spike)"
          }
        ],
        keyPoints: [
          "Malaria: Paroxysmal fever (cold/hot/sweat); diagnosis by smear (crescent gametocytes)",
          "Severe malaria: Artesunate IV/IM first-line; 35% mortality reduction",
          "Kala-azar: Fever + hepatosplenomegaly + pancytopenia; miltefosine or amphotericin B",
          "Amebic dysentery: Bloody diarrhea; metronidazole treatment",
          "Giardia: Steatorrhea, malabsorption; tinidazole 2g single dose"
        ],
        textbookRefs: [
          { book: "Ananthanarayan & Paniker's Textbook of Microbiology", chapter: "Clinical", edition: "11th" }
        ]
      },
      {
        layer: 4,
        slug: "protozoa-layer-4-exam-prep",
        title: "Protozoa: Intestinal & Blood - Exam Prep",
        estimatedMinutes: 25,
        summary: "High-yield facts, diagnostic algorithms, treatment regimens for board exams.",
        contentMd: `# Protozoa: Intestinal & Blood - Exam Prep

## Rapid Diagnostic Features

### Blood Smear Differentiation
| Feature | P. vivax | P. falciparum | P. malariae | P. ovale |
|---------|----------|---------------|-----------|---------|
| **RBC Size** | Large | Normal | Small | Oval |
| **Gametocyte** | Oval | Crescent (diagnostic) | Oval | Oval |
| **Parasitemia** | <1% | Up to 40%+ | <1% | <1% |

## Malaria Treatment Quick Reference

### Uncomplicated Malaria
**Artemether-Lumefantrine**: India first-line; days 0, 1, 2; >95% efficacy

### Severe Malaria
**Artesunate IV/IM**: 2.4 mg/kg @ 0, 12, 24h, then daily (35% mortality reduction)

## Leishmaniasis Treatment

### Visceral Leishmaniasis
| Drug | Dose | Efficacy |
|------|------|----------|
| **Miltefosine** | 100 mg daily × 28 days | >95%; teratogenic |
| **Amphotericin B** | 0.7-1 mg/kg IV × 10-30 days | >95% |

## Amebiasis Regimen

### Intestinal Amebiasis
1. **Metronidazole**: 750 mg TID × 7-10 days
2. **Paromomycin**: Post-metronidazole to eradicate cysts

### Amebic Liver Abscess
1. **Metronidazole**: 750 mg TID × 7-10 days
2. **Aspiration**: If diameter >5 cm or no improvement day 4-5

## Giardiasis Treatment

| Drug | Dose | Efficacy |
|------|------|----------|
| **Metronidazole** | 400 mg TID × 7 days | 80-90% |
| **Tinidazole** | 2 g single dose | 90-95% |

## Rapid-Fire Facts
- **Malaria R0**: 1-3
- **Parasitemia**: <1% = uncomplicated; >2-5% = risk severe
- **Gametocyte**: P. falciparum crescent-shaped (diagnostic)
- **Hypnozoites**: P. vivax/ovale only (relapse weeks-years)
- **Kala-azar**: Splenic aspiration 95% sensitivity
`,
        mnemonics: [
          {
            text: "Smear Diagnosis = PVFO",
            explanation: "P. vivax (large RBC), P. falciparum (crescent), P. malariae (small), P. ovale (oval RBC)"
          }
        ],
        keyPoints: [
          "P. falciparum: Normal RBC size, CRESCENT gametocytes (diagnostic)",
          "Severe malaria: Artesunate 2.4 mg/kg @ 0, 12, 24h, then daily",
          "Kala-azar: Splenic aspiration 95%, miltefosine or amphotericin B",
          "Amebic liver abscess: Aspiration if no improvement day 4-5 or large",
          "Giardia: ELISA diagnostic; tinidazole 2g single dose"
        ],
        textbookRefs: [
          { book: "Jawetz Melnick & Adelberg's Medical Microbiology", chapter: "Summary", edition: "28th" }
        ]
      },
      {
        layer: 5,
        slug: "protozoa-layer-5-active-recall",
        title: "Protozoa: Intestinal & Blood - Active Recall",
        estimatedMinutes: 20,
        summary: "Case-based Q&A for deep retention on malaria, kala-azar, amebiasis, giardiasis.",
        contentMd: `# Protozoa: Intestinal & Blood - Active Recall Q&A

**Q1: 8-year-old from Bihar with fever × 5 days, hepatosplenomegaly, pancytopenia (Hb 7, WBC 2, Plt 60), serology IgG+. Diagnosis and management?**
A) TB; B) Kala-azar; miltefosine or amphotericin B; C) Malaria; D) Sepsis
**Answer: B) Kala-azar; miltefosine or amphotericin B** — Bihar endemic; fever + splenomegaly + pancytopenia + IgG+ = kala-azar. Miltefosine 100mg daily × 28 days or amphotericin B 5mg/kg IV × 10 days.

---

**Q2: Smear with crescent gametocytes, normal RBC, parasitemia 8%. Species and risk?**
A) P. vivax uncomplicated; B) P. falciparum high-risk severe; C) P. malariae; D) P. ovale
**Answer: B) P. falciparum high-risk severe** — Crescent gametocytes (pathognomonic); parasitemia 8% = high-risk (>5%). Artesunate indicated.

---

**Q3: P. vivax malaria treated, fever resolves day 3. Fever recurs week 4. Why and treatment?**
A) Failure; B) Relapse from hypnozoites; repeat artemether-lumefantrine + primaquine; C) Reinfection; D) Resistance
**Answer: B) Relapse from hypnozoites; repeat artemether-lumefantrine + primaquine** — P. vivax hypnozoites (dormant liver). Primaquine 0.5mg/kg × 14 days eradicates (G6PD screen).

---

**Q4: Bloody diarrhea × 3 days, fever, RUQ pain, stool motile trophozoites, serology negative. Diagnosis?**
A) Bacterial dysentery; B) Amebic dysentery + liver abscess; metronidazole; C) IBD; D) Hookworm
**Answer: B) Amebic dysentery + liver abscess; metronidazole** — Serology negative in acute (antibodies weeks later). Metronidazole 750mg TID × 7-10 days; ultrasound for abscess; aspiration if large/no improvement day 4-5.

---

**Q5: 3-year-old watery diarrhea × 5d, steatorrhea, antigen ELISA+ giardia, microcytic anemia (Hb 9.5). Treatment?**
A) Iron alone; B) Tinidazole 2g single dose + micronutrient supplementation; C) Celiac diet; D) Tetracycline
**Answer: B) Tinidazole 2g single dose + micronutrient supplementation** — Giardia ELISA+. Tinidazole 2g single dose; replenish iron/B12/folate.

---

**Q6: 22-year-old fever × 10d, P. falciparum 3%, GCS 14, SBP 90, Cr 2.5, lactate 4.5. Management?**
A) Oral artemether; B) Artesunate IV/IM + ICU, fluids, transfusion; C) Chloroquine; D) Observe
**Answer: B) Artesunate IV/IM + ICU, fluids, transfusion** — SEVERE (cerebral GCS<15, renal Cr>3, shock SBP<90). Artesunate 2.4mg/kg @ 0,12,24h, then daily.

---

**Q7: Amebic liver abscess on metronidazole day 1. Day 5 fever/pain unchanged, abscess unchanged. Action?**
A) Continue metronidazole; B) Add ceftriaxone; C) Needle aspiration; D) Open drainage
**Answer: C) Needle aspiration** — No improvement day 4-5 = aspiration indicated (diagnostic + therapeutic).

---

**Q8: Healthcare worker needle-stick from Giardia patient. PEP?**
A) Tinidazole; B) No prophylaxis (fecal-oral); C) Metronidazole; D) Observation
**Answer: B) No prophylaxis (fecal-oral)** — Giardia requires ingestion (not parenteral). Needle-stick unlikely transmit.

---

**Q9: 55-year-old endemic area, fever/myalgia/headache, rapid test negative, PCR pending. Management?**
A) Rule out malaria; B) Repeat test, blood smear, empiric antimalarial if high suspicion; C) Assume false; treat; D) Wait PCR
**Answer: B) Repeat test, blood smear, empiric antimalarial if high suspicion** — RDT can be falsely negative (low parasitemia, early, sequestration). Use smear; start antimalarial empirically if endemic + clinical.

---

**Q10: P. vivax malaria (uncomplicated) post-treatment fever recurs week 4. What is the relapse mechanism?**
A) New infection; B) Hypnozoites (dormant liver); primaquine eradicates; C) Drug resistance; D) Relapse not P. vivax
**Answer: B) Hypnozoites (dormant liver); primaquine eradicates** — P. vivax hypnozoites cause relapse weeks-years.
`,
        mnemonics: [
          {
            text: "Severe Malaria = CAKR",
            explanation: "C=Cerebral, A=Anemia, K=Kidney, R=Respiratory"
          }
        ],
        keyPoints: [
          "Kala-azar: Fever + splenomegaly + pancytopenia; miltefosine or amphotericin B",
          "P. falciparum crescent gametocytes (diagnostic); parasitemia >5% = severe",
          "P. vivax relapse: Primaquine 14 days (screen G6PD)",
          "Amebic abscess: Aspiration if no improvement day 4-5 or large (>5cm)",
          "Giardia: Tinidazole 2g single dose"
        ],
        textbookRefs: [
          { book: "Board Exam Questions", chapter: "Parasitology", edition: "Current" }
        ]
      }
    ]
  }
];
