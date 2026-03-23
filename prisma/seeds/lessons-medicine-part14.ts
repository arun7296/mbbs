import type { TopicLessons } from "./content-loader";

export const medicineLessonsPart14: TopicLessons[] = [
  {
    topicCode: "IM-MOD-09-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "malaria-layer-1-foundation",
        title: "Malaria - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of malaria parasitology, Plasmodium species, life cycle, Anopheles vector biology, and Indian epidemiology with NVBDCP data.",
        contentMd: `# Malaria - Foundation

## The Malaria Parasite
Malaria is caused by protozoan parasites of the genus **Plasmodium**, transmitted by the bite of infected female **Anopheles** mosquitoes. Five species infect humans:

| Species | Fever Pattern | RBC Preference | Indian Relevance |
|---------|--------------|----------------|-----------------|
| P. vivax | Tertian (48h) | Reticulocytes | Most common in India (50-60%) |
| P. falciparum | Malignant tertian (36-48h) | All RBCs | Most dangerous, rising in India |
| P. ovale | Tertian (48h) | Reticulocytes | Rare in India |
| P. malariae | Quartan (72h) | Older RBCs | Very rare in India |
| P. knowlesi | Quotidian (24h) | All RBCs | Zoonotic, NE India reports |

## Life Cycle

### In Mosquito (Sexual Cycle - Sporogony)
1. Female Anopheles ingests gametocytes during blood meal
2. Male and female gametes fuse in mosquito gut → zygote
3. Zygote → ookinete → oocyst on gut wall
4. Oocyst ruptures → sporozoites migrate to salivary glands
5. Duration: 10-21 days depending on temperature

### In Human Host
**Hepatic Phase (Exo-erythrocytic Schizogony):**
- Sporozoites injected during mosquito bite reach liver within 30 minutes
- Enter hepatocytes → grow into hepatic schizonts
- Schizont ruptures releasing thousands of merozoites
- Duration: P. falciparum 5-7 days, P. vivax 6-8 days
- P. vivax and P. ovale form **hypnozoites** (dormant liver stage → relapses)

**Erythrocytic Phase (Erythrocytic Schizogony):**
- Merozoites invade RBCs → ring form → trophozoite → schizont
- Schizont ruptures → merozoites released → new RBC invasion
- Cycle duration determines fever periodicity
- Some merozoites develop into gametocytes (sexual forms)

## Indian Epidemiology
- India contributes ~2% of global malaria cases (NVBDCP data)
- P. vivax: 50-60%, P. falciparum: 40-50% of cases
- Endemic states: Odisha, Chhattisgarh, Jharkhand, Meghalaya, Mizoram, Tripura
- Transmission peak: post-monsoon (July-November)
- National Framework for Malaria Elimination (NFME) 2016-2030 targets elimination by 2030
- Urban malaria increasing due to An. stephensi breeding in water storage

## Vector Biology
- **Anopheles stephensi**: primary urban vector in India
- **Anopheles culicifacies**: primary rural vector
- **Anopheles fluviatilis**: forest/hilly areas
- Female mosquitoes bite between dusk and dawn
- Only female Anopheles transmits malaria (needs blood meal for egg maturation)`,
        mnemonics: [
          { text: "VFOMK - Very Few Old Mosquitoes Kill", explanation: "Five Plasmodium species: Vivax, Falciparum, Ovale, Malariae, Knowlesi" },
          { text: "Vivax = reVIVAL (relapses)", explanation: "P. vivax forms hypnozoites in liver causing relapses months-years later" },
          { text: "Falciparum = FATAL", explanation: "P. falciparum causes severe/cerebral malaria, highest mortality" }
        ],
        keyPoints: [
          "P. vivax is most common in India (50-60%), P. falciparum most dangerous (40-50%)",
          "Only female Anopheles mosquitoes transmit malaria",
          "P. vivax and P. ovale form hypnozoites in liver causing relapses",
          "Erythrocytic cycle duration determines fever periodicity: 48h tertian, 72h quartan",
          "India targets malaria elimination by 2030 under NFME",
          "An. stephensi (urban) and An. culicifacies (rural) are primary Indian vectors"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "219: Malaria", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "Infectious Diseases: Malaria", edition: "11th" },
          { book: "Davidson's Principles and Practice of Medicine", chapter: "13: Infectious Disease - Malaria", edition: "24th" }
        ]
      },
      {
        layer: 2,
        slug: "malaria-layer-2-mechanism",
        title: "Malaria - Mechanism",
        estimatedMinutes: 30,
        summary: "Detailed pathophysiology of malaria including erythrocytic invasion, cytoadherence in P. falciparum, cerebral malaria mechanisms, and host genetic protective factors.",
        contentMd: `# Malaria - Mechanism

## Merozoite Invasion of RBCs
The invasion process involves specific receptor-ligand interactions:

### P. falciparum Invasion
- Uses multiple invasion pathways (redundancy = virulence)
- **EBA-175** binds Glycophorin A on RBC surface
- **PfRh** family proteins bind other RBC receptors
- Can invade RBCs of ALL ages → high parasitemia possible (>50%)

### P. vivax Invasion
- **DBP (Duffy Binding Protein)** binds **Duffy antigen (DARC)** on RBC
- Duffy-negative individuals (common in West Africa) resistant to P. vivax
- Preferentially invades reticulocytes → parasitemia usually <2%

## P. falciparum Cytoadherence - Key to Virulence

### PfEMP1 (P. falciparum Erythrocyte Membrane Protein 1)
- Expressed on surface of infected RBCs via **knobs**
- Encoded by ~60 **var** genes → antigenic variation → immune evasion
- Binds endothelial receptors:
  - **CD36** → most common, muscle/fat vasculature
  - **ICAM-1** → cerebral vasculature (cerebral malaria)
  - **CSA (Chondroitin Sulfate A)** → placenta (pregnancy malaria)
  - **EPCR** → endothelial protein C receptor (severe malaria)

### Sequestration
- Infected RBCs adhere to venular endothelium
- Disappear from peripheral blood (only rings seen on smear)
- Causes microvascular obstruction → tissue hypoxia
- Explains organ-specific complications

### Rosetting
- Infected RBCs bind uninfected RBCs forming rosettes
- Increases microvascular obstruction
- Associated with severe malaria

## Cerebral Malaria Pathogenesis
Multiple mechanisms contribute:
1. **Sequestration**: Parasitized RBCs in cerebral microvasculature
2. **Inflammation**: TNF-alpha, IL-1, IL-6 release → BBB disruption
3. **Endothelial activation**: Upregulation of ICAM-1, VCAM-1
4. **Nitric oxide**: Impaired NO bioavailability
5. **Metabolic**: Hypoglycemia (parasite glucose consumption + quinine effect)
6. **Mechanical**: Microvascular obstruction → ischemia

## Malarial Anemia Mechanisms
- Direct RBC destruction by parasite
- Splenic clearance of parasitized and unparasitized RBCs
- Dyserythropoiesis (TNF-alpha suppresses erythropoiesis)
- Autoimmune hemolysis (antibodies against altered RBC surface)
- Blackwater fever: massive intravascular hemolysis → hemoglobinuria (dark urine)

## Fever Mechanism
- Schizont rupture releases merozoites + hemozoin + GPI anchors
- GPI activates macrophages → TNF-alpha, IL-1 release
- Cytokine cascade → hypothalamic set point elevation → rigors → fever
- Synchronized rupture → periodic fever (tertian/quartan)

## Host Genetic Protection
| Factor | Mechanism of Protection |
|--------|----------------------|
| Sickle cell trait (HbAS) | Impaired parasite growth in sickled cells, enhanced splenic clearance |
| HbC | Reduced PfEMP1 display on RBC surface |
| Thalassemia trait | Oxidative damage to parasite, enhanced phagocytosis |
| G6PD deficiency | Oxidative stress kills intracellular parasite |
| Duffy negativity | Blocks P. vivax invasion (no DARC receptor) |
| HLA-B53 | Enhanced CD8+ T-cell response to liver-stage antigens |
| Blood group O | Reduced rosetting compared to groups A and B |`,
        mnemonics: [
          { text: "PfEMP1 binds CICE: CD36, ICAM-1, CSA, EPCR", explanation: "Four major endothelial receptors for cytoadherence in P. falciparum" },
          { text: "Cerebral malaria = SINEM: Sequestration, Inflammation, NO depletion, Endothelial activation, Metabolic", explanation: "Five mechanisms of cerebral malaria pathogenesis" },
          { text: "Anemia in malaria = DADS: Destruction, Autoimmune, Dyserythropoiesis, Splenic clearance", explanation: "Four mechanisms causing malarial anemia" }
        ],
        keyPoints: [
          "PfEMP1 on infected RBC surface mediates cytoadherence via var gene products",
          "P. falciparum invades all-age RBCs causing high parasitemia; P. vivax only reticulocytes",
          "Cerebral malaria involves sequestration + inflammation + endothelial activation",
          "Duffy-negative individuals are resistant to P. vivax infection",
          "Sickle cell trait provides ~60% protection against severe falciparum malaria",
          "Blackwater fever = massive intravascular hemolysis with hemoglobinuria"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "219: Malaria", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "Infectious Diseases: Malaria", edition: "11th" },
          { book: "Davidson's Principles and Practice of Medicine", chapter: "13: Infectious Disease - Malaria", edition: "24th" }
        ]
      },
      {
        layer: 3,
        slug: "malaria-layer-3-clinical",
        title: "Malaria - Clinical Application",
        estimatedMinutes: 25,
        summary: "Clinical features, WHO severe malaria criteria, diagnostic methods, and treatment protocols per Indian National Guidelines including ACT, chloroquine, and artesunate.",
        contentMd: `# Malaria - Clinical Application

## Clinical Presentation

### Uncomplicated Malaria
- **Classic paroxysm**: Cold stage (rigors, 15-60 min) → Hot stage (fever 39-41C, 2-6h) → Sweating stage (defervescence, 2-4h)
- Fever periodicity often irregular initially, becomes regular after few cycles
- Headache, myalgia, arthralgia, malaise
- Splenomegaly (most consistent sign, palpable by day 4-5)
- Mild hepatomegaly, mild jaundice
- Anemia (normocytic normochromic initially)

### Severe Malaria (P. falciparum) - WHO Criteria
**Clinical criteria:**
- Cerebral malaria (GCS <11 or BCS <3)
- Prostration (unable to sit/walk/breastfeed)
- Multiple convulsions (>2 in 24 hours)
- Respiratory distress (acidotic breathing)
- Pulmonary edema / ARDS
- Circulatory collapse / shock
- Clinical jaundice + organ dysfunction
- Significant bleeding

**Laboratory criteria:**
- Severe anemia (Hb <5 g/dL or Hct <15%)
- Hypoglycemia (glucose <40 mg/dL)
- Metabolic acidosis (pH <7.25, bicarbonate <15 mmol/L)
- Renal impairment (creatinine >3 mg/dL)
- Hyperlactatemia (lactate >5 mmol/L)
- Hyperparasitemia (>10% in low-transmission, >5% elsewhere)

### Specific Complications
- **Cerebral malaria**: Altered sensorium, seizures, retinal changes (Malarial retinopathy: hemorrhages, whitening, vessel changes), mortality 15-20% even with treatment
- **Algid malaria**: Septic shock-like presentation
- **Malarial nephropathy**: AKI from ATN, hemoglobinuria
- **Tropical splenomegaly syndrome**: Chronic massive splenomegaly from repeated infections

## Diagnosis

### Peripheral Blood Smear (Gold Standard)
- **Thick smear**: Screening (20x more sensitive), detects parasitemia >50/microL
- **Thin smear**: Species identification, parasite morphology
- P. falciparum: multiple ring forms, banana-shaped gametocytes, Maurer's clefts
- P. vivax: enlarged RBCs, Schuffner's dots, ameboid trophozoites
- Repeat smear every 12-24h if initial negative (3 smears before ruling out)

### Rapid Diagnostic Tests (RDTs)
- Detect parasite antigens: HRP-2 (P. falciparum), pLDH (all species), aldolase
- Sensitivity 95% for >100 parasites/microL
- HRP-2 remains positive 2-4 weeks after treatment (not for monitoring)
- pLDH clears rapidly → useful for treatment response

### Other Tests
- PCR: Most sensitive, detects <5 parasites/microL, species confirmation
- QBC (Quantitative Buffy Coat): Fluorescent staining, rapid screening

## Treatment - Indian National Guidelines (NVBDCP)

### Uncomplicated P. vivax
- **Chloroquine** 25 mg/kg over 3 days (Day 1: 10 mg/kg, Day 2: 10 mg/kg, Day 3: 5 mg/kg)
- **Primaquine** 0.25 mg/kg daily x 14 days (radical cure - kills hypnozoites)
- G6PD testing before primaquine (risk of hemolysis)

### Uncomplicated P. falciparum
- **ACT (Artemisinin-based Combination Therapy)**:
  - Artesunate + Sulfadoxine-Pyrimethamine (AS+SP) in most states
  - Artemether-Lumefantrine (AL) in NE India (SP resistance)
- Single dose Primaquine 0.75 mg/kg on Day 2 (gametocytocidal)

### Severe Malaria (Any Species)
- **IV Artesunate** 2.4 mg/kg at 0, 12, 24h then daily until oral tolerated
- Minimum 3 doses IV before switching to oral ACT
- If artesunate unavailable: IV Quinine 20 mg/kg loading then 10 mg/kg q8h
- Supportive: IV fluids, blood transfusion, anticonvulsants, ventilation if needed

### Pregnancy
- 1st trimester: Quinine + Clindamycin (7 days)
- 2nd/3rd trimester: ACT (artemether-lumefantrine preferred)
- Primaquine CONTRAINDICATED in pregnancy

## Chemoprophylaxis (Travelers)
- Doxycycline 100 mg/day (start 1-2 days before, continue 4 weeks after)
- Mefloquine 250 mg weekly (start 2 weeks before)
- Atovaquone-proguanil daily (start 1-2 days before, continue 1 week after)`,
        mnemonics: [
          { text: "Malaria paroxysm = CHS: Cold-Hot-Sweating", explanation: "Three stages of classic malarial fever paroxysm in sequence" },
          { text: "Severe malaria ABCDEFGH: Acidosis, Bleeding, Cerebral, DIC, Edema (pulmonary), Fluid (renal failure), Glucose low, Hemoglobin low", explanation: "WHO severe malaria criteria grouped by letter" },
          { text: "P. falciparum smear = Banana Rings Maurer: Banana gametocytes, Ring forms (multiple), Maurer's clefts", explanation: "Three key peripheral smear findings in P. falciparum" }
        ],
        keyPoints: [
          "Splenomegaly is the most consistent physical finding in malaria",
          "Thick smear for screening, thin smear for species identification",
          "IV artesunate is the drug of choice for severe malaria (not quinine)",
          "Primaquine required for P. vivax radical cure (kills hypnozoites) - check G6PD first",
          "ACT is first-line for uncomplicated P. falciparum in India",
          "Cerebral malaria: GCS <11, malarial retinopathy is pathognomonic finding"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "219: Malaria", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "Infectious Diseases: Malaria", edition: "11th" },
          { book: "Davidson's Principles and Practice of Medicine", chapter: "13: Infectious Disease - Malaria", edition: "24th" }
        ]
      },
      {
        layer: 4,
        slug: "malaria-layer-4-exam",
        title: "Malaria - Exam Preparation",
        estimatedMinutes: 20,
        summary: "High-yield NEXT exam topics covering species comparison, severe malaria criteria, drug choices, and clinical vignette patterns for malaria.",
        contentMd: `# Malaria - Exam Preparation

## Species Comparison Table (High-Yield)

| Feature | P. vivax | P. falciparum | P. malariae | P. ovale |
|---------|----------|---------------|-------------|----------|
| Fever | Tertian 48h | Malignant tertian | Quartan 72h | Tertian 48h |
| RBC preference | Reticulocytes | All ages | Old RBCs | Reticulocytes |
| Parasitemia | <2% | Up to >50% | <1% | <2% |
| RBC size | Enlarged | Normal | Normal | Enlarged, oval |
| Dots | Schuffner's | Maurer's clefts | Ziemann's | Schuffner's |
| Gametocyte | Round | Banana/crescent | Round | Round |
| Hypnozoites | Yes | No | No | Yes |
| Relapse | Yes | No (recrudescence) | No (recrudescence) | Yes |
| Band forms | No | No | Yes | No |
| Nephrotic | No | Rare | Yes (chronic) | No |

## Drug Choice Decision Tree

### Which antimalarial for which scenario?
1. Uncomplicated P. vivax → Chloroquine + Primaquine (14 days)
2. Uncomplicated P. falciparum → ACT (AS+SP or AL)
3. Severe malaria (any) → IV Artesunate
4. Pregnancy 1st trimester → Quinine + Clindamycin
5. Pregnancy 2nd/3rd trimester → ACT
6. Chloroquine-resistant P. vivax → ACT
7. Radical cure P. vivax → Primaquine (check G6PD)
8. Gametocytocidal → Single-dose Primaquine

## Common NEXT Exam Patterns

### Vignette 1: Species Identification
"A 25-year-old from Odisha presents with fever every 48 hours. Peripheral smear shows enlarged RBCs with Schuffner's dots and ameboid trophozoites."
→ **P. vivax** (enlarged RBCs + Schuffner's dots = vivax)

### Vignette 2: Severe Malaria
"A 30-year-old returns from Chhattisgarh with high fever, altered sensorium, GCS 8, parasitemia 15%. What is the immediate treatment?"
→ **IV Artesunate** (severe malaria = IV artesunate, NOT quinine first-line)

### Vignette 3: Drug Side Effect
"A patient on primaquine develops dark urine and jaundice. What was the missed investigation?"
→ **G6PD level** (primaquine causes hemolysis in G6PD deficiency)

### Vignette 4: Relapse vs Recrudescence
"A patient treated for P. vivax malaria 6 months ago presents with similar symptoms. Smear positive for P. vivax."
→ **Relapse from hypnozoites** (P. vivax relapse = incomplete primaquine/hypnozoites)

### Vignette 5: Pregnancy
"A pregnant woman at 8 weeks gestation diagnosed with uncomplicated P. falciparum. What is the treatment?"
→ **Quinine + Clindamycin x 7 days** (ACT not recommended in 1st trimester)

### Vignette 6: Diagnostic Approach
"RDT shows positive HRP-2 and positive pLDH. Patient was treated 3 weeks ago. Is this a new infection?"
→ **HRP-2 can remain positive for weeks** after treatment. Use pLDH or smear to confirm active infection.

## High-Yield Facts for NEXT
- Banana-shaped gametocytes = pathognomonic for P. falciparum
- P. malariae causes quartan nephropathy (immune complex deposition)
- Blackwater fever = massive hemolysis with hemoglobinuria (dark urine)
- Malarial retinopathy = pathognomonic for cerebral malaria
- Tropical splenomegaly syndrome = chronic hyperreactive malaria
- Exchange transfusion considered when parasitemia >10% with severe disease
- Artesunate reduces mortality by 35% compared to quinine in severe malaria (SEAQUAMAT trial)

## Common Exam Traps
1. Confusing relapse (vivax/ovale from hypnozoites) with recrudescence (falciparum from blood-stage persistence)
2. Forgetting G6PD testing before primaquine
3. Using chloroquine for P. falciparum (resistance widespread)
4. Not recognizing cerebral malaria as indication for IV artesunate
5. Forgetting that HRP-2 RDT stays positive weeks after treatment`,
        mnemonics: [
          { text: "Vivax = Schuffner, Falciparum = Maurer, Malariae = Ziemann", explanation: "RBC stippling pattern for species identification on peripheral smear" },
          { text: "RELAPSE = RE-Liver (vivax/ovale hypnozoites); RECRUDESCENCE = RE-Circulation (falciparum blood stage)", explanation: "Distinguishing relapse from recrudescence by site of persistent parasites" },
          { text: "G6PD before PQ: Get 6 Points Done before PrimaQuine", explanation: "Always check G6PD level before prescribing primaquine" }
        ],
        keyPoints: [
          "Banana gametocytes are pathognomonic for P. falciparum on peripheral smear",
          "IV artesunate is superior to IV quinine for severe malaria (SEAQUAMAT/AQUAMAT trials)",
          "Relapse = hypnozoites in liver (vivax/ovale); Recrudescence = blood-stage persistence (falciparum)",
          "G6PD testing is mandatory before primaquine to prevent hemolytic crisis",
          "HRP-2 based RDTs remain positive weeks after treatment - use pLDH for monitoring"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "219: Malaria", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "Infectious Diseases: Malaria", edition: "11th" },
          { book: "Davidson's Principles and Practice of Medicine", chapter: "13: Infectious Disease - Malaria", edition: "24th" }
        ]
      },
      {
        layer: 5,
        slug: "malaria-layer-5-active-recall",
        title: "Malaria - Active Recall",
        estimatedMinutes: 15,
        summary: "Flashcard-style Q&A pairs for active recall of key malaria concepts including parasitology, pathophysiology, diagnosis, and treatment.",
        contentMd: `# Malaria - Active Recall

## Flashcard Q&A

**Q1:** Which Plasmodium species is most common in India and which is most dangerous?
**A1:** P. vivax is most common (50-60%), P. falciparum is most dangerous (causes severe/cerebral malaria).

**Q2:** What are hypnozoites and which species form them?
**A2:** Hypnozoites are dormant liver-stage parasites formed by P. vivax and P. ovale. They cause relapses months to years after initial infection. Primaquine is used to eliminate them (radical cure).

**Q3:** What is PfEMP1 and why is it important?
**A3:** PfEMP1 (P. falciparum Erythrocyte Membrane Protein 1) is expressed on infected RBC surfaces via knob proteins. It mediates cytoadherence to endothelial receptors (CD36, ICAM-1, CSA, EPCR), causing sequestration in microvasculature. Encoded by ~60 var genes enabling antigenic variation.

**Q4:** Name the receptor that P. vivax uses for RBC invasion and the genetic resistance mechanism.
**A4:** P. vivax uses DBP (Duffy Binding Protein) to bind DARC (Duffy Antigen Receptor for Chemokines) on RBCs. Duffy-negative individuals lack DARC and are resistant to P. vivax infection.

**Q5:** What are the three stages of the classic malarial fever paroxysm?
**A5:** Cold stage (rigors, 15-60 min) → Hot stage (high fever 39-41C, 2-6h) → Sweating stage (defervescence, 2-4h). Periodicity: 48h for tertian (vivax/falciparum), 72h for quartan (malariae).

**Q6:** List the WHO criteria for severe malaria (at least 5).
**A6:** Cerebral malaria (GCS <11), severe anemia (Hb <5), hypoglycemia (<40 mg/dL), metabolic acidosis (pH <7.25), renal failure (Cr >3), pulmonary edema/ARDS, hyperparasitemia (>10%), shock, significant bleeding, multiple convulsions.

**Q7:** What is the first-line treatment for severe malaria and the dosing schedule?
**A7:** IV Artesunate 2.4 mg/kg at 0h, 12h, 24h, then once daily. Minimum 3 IV doses before switching to oral ACT. Superior to IV quinine per SEAQUAMAT trial (35% mortality reduction).

**Q8:** How do you differentiate P. vivax from P. falciparum on peripheral smear?
**A8:** P. vivax: enlarged RBCs, Schuffner's dots, ameboid trophozoites, round gametocytes. P. falciparum: normal-sized RBCs, Maurer's clefts, multiple ring forms, banana-shaped gametocytes, typically only rings seen (mature forms sequestered).

**Q9:** Why must G6PD be tested before prescribing primaquine?
**A9:** Primaquine is an oxidant drug that causes severe hemolysis in G6PD-deficient individuals. G6PD deficiency is X-linked and common in malaria-endemic areas (evolutionary advantage). Without testing, primaquine can cause life-threatening hemolytic anemia.

**Q10:** What is the treatment for uncomplicated P. falciparum malaria in India?
**A10:** ACT: Artesunate + Sulfadoxine-Pyrimethamine (AS+SP) in most states, or Artemether-Lumefantrine (AL) in NE India where SP resistance is high. Plus single-dose primaquine 0.75 mg/kg on Day 2 as gametocytocidal.

**Q11:** What is blackwater fever?
**A11:** Massive intravascular hemolysis in severe P. falciparum malaria causing hemoglobinuria (dark brown/black urine). Associated with high parasitemia, G6PD deficiency, and historically with quinine use. Can lead to AKI from hemoglobin nephrotoxicity.

**Q12:** How does sickle cell trait protect against malaria?
**A12:** HbAS (sickle trait) provides ~60% protection against severe falciparum malaria through: impaired parasite growth in sickled cells under low O2, enhanced splenic clearance of parasitized sickled RBCs, and reduced PfEMP1 display leading to less cytoadherence.

**Q13:** What is malarial retinopathy and its significance?
**A13:** Malarial retinopathy includes retinal whitening, hemorrhages, and vessel changes. It is pathognomonic for cerebral malaria and helps distinguish malarial coma from other causes. Present in ~60% of cerebral malaria cases.

**Q14:** What is the treatment for malaria in first trimester of pregnancy?
**A14:** Quinine + Clindamycin for 7 days. ACT is not recommended in 1st trimester due to limited safety data. Primaquine is absolutely contraindicated in pregnancy. In 2nd/3rd trimester, ACT (artemether-lumefantrine) can be used.

**Q15:** Explain the difference between relapse and recrudescence in malaria.
**A15:** Relapse = reactivation of hypnozoites in the liver, occurring months-years later (P. vivax, P. ovale only). Recrudescence = reappearance of parasitemia from persistent blood-stage parasites due to incomplete treatment (P. falciparum, P. malariae). Treatment: relapse needs primaquine for hypnozoites; recrudescence needs different antimalarial.`,
        mnemonics: [
          { text: "5 species order by frequency in India: Vi-Fa-Ma-Ov-Kn", explanation: "Vivax > Falciparum >> Malariae > Ovale > Knowlesi in order of Indian prevalence" },
          { text: "Severe malaria treatment: ART-2.4 at 0-12-24", explanation: "IV Artesunate 2.4 mg/kg at 0, 12, and 24 hours then daily" }
        ],
        keyPoints: [
          "P. vivax most common in India, P. falciparum most dangerous",
          "Hypnozoites (vivax/ovale) cause relapses; primaquine is the only drug that kills them",
          "IV artesunate is first-line for severe malaria, not quinine",
          "PfEMP1-mediated cytoadherence causes sequestration - the hallmark of falciparum pathogenesis",
          "Always test G6PD before primaquine to prevent hemolytic crisis",
          "Thick smear for detection, thin smear for species identification"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "219: Malaria", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "Infectious Diseases: Malaria", edition: "11th" },
          { book: "Davidson's Principles and Practice of Medicine", chapter: "13: Infectious Disease - Malaria", edition: "24th" }
        ]
      }
    ]
  }
];
