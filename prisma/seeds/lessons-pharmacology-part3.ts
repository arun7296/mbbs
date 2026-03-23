import type { TopicLessons } from "./content-loader";

export const pharmacologyPart3Lessons: TopicLessons[] = [
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // MODULE 5 — CHEMOTHERAPY (Topics 5-6)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // ─── Topic 5: Antifungal & Antiviral Drugs ─────────────────
  {
    topicCode: "PH-MOD-05-TOP-05",
    layers: [
      {
        layer: 1,
        slug: "antifungal-antiviral-foundation",
        title: "Antifungal & Antiviral Drugs - Foundation",
        estimatedMinutes: 20,
        summary:
          "Antifungal drugs target ergosterol in fungal membranes or cell wall glucan. Antiviral drugs interfere with specific steps in viral replication. Antiretroviral therapy (ART) for HIV uses combination of drugs targeting reverse transcriptase, protease, and integrase.",
        contentMd: `# Antifungal & Antiviral Drugs

## Antifungal Drugs

### Classification by Mechanism

| Class | Drugs | Target |
|-------|-------|--------|
| **Polyenes** | Amphotericin B, Nystatin | Ergosterol binding (pore formation) |
| **Azoles** | Fluconazole, Itraconazole, Voriconazole, Ketoconazole | Ergosterol synthesis (CYP14-demethylase) |
| **Echinocandins** | Caspofungin, Micafungin, Anidulafungin | Beta-1,3-glucan synthase (cell wall) |
| **Allylamines** | Terbinafine | Squalene epoxidase (ergosterol synthesis) |
| **Antimetabolite** | Flucytosine (5-FC) | DNA/RNA synthesis |
| **Griseofulvin** | Griseofulvin | Microtubule disruption |

### Key Drugs
- **Amphotericin B**: DOC for severe systemic fungal infections (cryptococcal meningitis, mucormycosis)
- **Fluconazole**: DOC for cryptococcal meningitis (maintenance), oral/esophageal candidiasis
- **Itraconazole**: Aspergillosis, histoplasmosis, dermatophytes
- **Terbinafine**: DOC for dermatophytosis (onychomycosis)

## Antiviral Drugs

### Classification by Virus

| Virus | Drugs | Mechanism |
|-------|-------|-----------|
| **HSV/VZV** | Acyclovir, Valacyclovir | Thymidine kinase-dependent DNA polymerase inhibition |
| **CMV** | Ganciclovir, Foscarnet | DNA polymerase inhibition |
| **Influenza** | Oseltamivir, Zanamivir | Neuraminidase inhibitors |
| **HBV** | Tenofovir, Entecavir | Reverse transcriptase inhibition |
| **HCV** | Sofosbuvir, Daclatasvir | NS5B polymerase, NS5A inhibitors |

### Antiretroviral Therapy (ART) for HIV

| Class | Drugs | Mechanism |
|-------|-------|-----------|
| **NRTIs** | Tenofovir (TDF), Lamivudine (3TC), Zidovudine (AZT) | Nucleoside/tide RT inhibitors |
| **NNRTIs** | Efavirenz, Nevirapine, Dolutegravir | Non-nucleoside RT inhibitors |
| **PIs** | Lopinavir/ritonavir, Atazanavir | Protease inhibitors |
| **INSTIs** | Dolutegravir (DTG), Raltegravir | Integrase strand transfer inhibitors |

**India's NACO First-Line ART**: TDF + 3TC + DTG (Tenofovir + Lamivudine + Dolutegravir)

> **Clinical Pearl**: India is the "pharmacy of the world" for generic ART. Indian companies produce >80% of global generic antiretrovirals, making treatment affordable in low-income countries.`,
        mnemonics: [
          {
            text: "Ampho-TERRIBLE: Amphotericin B is terribly toxic (nephrotoxicity, hypokalemia, fever/chills) but terribly effective",
            explanation:
              "Amphotericin B is the most effective systemic antifungal but has severe dose-limiting nephrotoxicity. Liposomal formulation reduces toxicity.",
          },
          {
            text: "ART = TLD in India: Tenofovir + Lamivudine + Dolutegravir (first-line)",
            explanation:
              "India's NACO-recommended first-line ART regimen is TLD: Tenofovir (NRTI) + Lamivudine (NRTI) + Dolutegravir (INSTI).",
          },
        ],
        keyPoints: [
          "Amphotericin B: binds ergosterol, creates pores, DOC for severe systemic mycoses",
          "Azoles: inhibit CYP14-demethylase (ergosterol synthesis), fluconazole most commonly used",
          "Echinocandins: inhibit beta-1,3-glucan synthase (cell wall), used for invasive candidiasis",
          "Acyclovir: activated by viral thymidine kinase, selective for HSV/VZV-infected cells",
          "India NACO first-line ART: TDF + 3TC + DTG",
          "Oseltamivir: neuraminidase inhibitor for influenza, given within 48 hours of symptoms",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 57-58 - Antifungal & Antiviral Drugs", page: "831-870", edition: "8th" },
          { book: "Rang & Dale", chapter: "Ch 53 - Antifungal Drugs, Ch 54 - Antiviral Drugs", edition: "9th" },
        ],
      },
      {
        layer: 2,
        slug: "antifungal-antiviral-mechanism",
        title: "Antifungal & Antiviral Drugs - Mechanism",
        estimatedMinutes: 30,
        summary:
          "Detailed mechanisms of antifungal drug action on ergosterol pathway and cell wall, and antiviral mechanisms including nucleoside analogue activation, neuraminidase inhibition, and the HIV replication cycle targets.",
        contentMd: `# Detailed Mechanisms

## Amphotericin B
1. Binds **ergosterol** in fungal cell membrane (selective - human cells have cholesterol)
2. Forms **barrel-like pores** (aqueous channels) across the membrane
3. Leakage of K+, Mg2+, and other ions
4. Cell death by osmotic lysis

### Toxicity
- **Nephrotoxicity** (dose-limiting): renal vasoconstriction + direct tubular damage
  - Presents as: rising creatinine, hypokalemia, hypomagnesemia, renal tubular acidosis
  - Prevention: adequate hydration, normal saline loading before infusion
- **Infusion-related reactions**: fever, chills, rigors (premedicate with paracetamol + diphenhydramine)
- **Liposomal amphotericin B**: reduced nephrotoxicity, DOC for visceral leishmaniasis (kala-azar) in India

## Azole Antifungals
1. Inhibit **lanosterol 14-alpha-demethylase** (CYP51 / CYP14-DM)
2. Block conversion of lanosterol to ergosterol
3. Ergosterol depletion + toxic methylated sterol accumulation
4. Membrane dysfunction and growth arrest (fungistatic, mostly)

### Drug Interactions
- Azoles are **CYP3A4 inhibitors** (ketoconazole > itraconazole > fluconazole)
- Ketoconazole: also inhibits CYP17 (steroid synthesis) causing gynecomastia, decreased libido

## Echinocandins
- Inhibit **beta-1,3-D-glucan synthase**
- Glucan is essential for fungal cell wall (absent in mammalian cells - selective toxicity)
- Fungicidal against Candida, fungistatic against Aspergillus
- IV only, no oral absorption

## Acyclovir - Antiviral Mechanism
1. Selectively taken up by HSV/VZV-infected cells
2. First phosphorylation by **viral thymidine kinase** (absent in uninfected cells - selectivity)
3. Second and third phosphorylation by host kinases
4. Acyclovir triphosphate inhibits **viral DNA polymerase**
5. Incorporates into viral DNA, causes **chain termination** (lacks 3'-OH)

### Resistance: mutation in thymidine kinase (TK) gene or DNA polymerase gene

## HIV Drug Mechanisms

### NRTIs (e.g., Tenofovir, Lamivudine, Zidovudine)
- Nucleoside/nucleotide analogues
- Phosphorylated intracellularly to active triphosphate form
- Competitive inhibitors of **reverse transcriptase**
- Incorporate into DNA chain causing **chain termination**

### NNRTIs (e.g., Efavirenz, Nevirapine)
- Bind to **allosteric site** on reverse transcriptase
- Non-competitive inhibition
- Do not require phosphorylation (active as parent drug)
- Low barrier to resistance (single mutation)

### Integrase Inhibitors (e.g., Dolutegravir)
- Block **integrase strand transfer** step
- Prevent integration of viral DNA into host chromosome
- DTG has high barrier to resistance (preferred first-line)

### Protease Inhibitors (e.g., Lopinavir/ritonavir)
- Block HIV protease that cleaves Gag-Pol polyprotein
- Prevent maturation of viral particles
- Ritonavir used as **pharmacokinetic booster** (CYP3A4 inhibitor)`,
        mnemonics: [
          {
            text: "Acyclovir needs TK to TRICK the virus: viral Thymidine Kinase activates acyclovir selectively in infected cells",
            explanation:
              "Acyclovir's selectivity comes from requiring viral thymidine kinase for initial phosphorylation. Only HSV/VZV-infected cells activate the drug, sparing normal cells.",
          },
        ],
        keyPoints: [
          "Amphotericin B: binds ergosterol, forms pores, nephrotoxicity is dose-limiting",
          "Azoles: inhibit CYP14-demethylase (lanosterol to ergosterol), CYP3A4 inhibitors themselves",
          "Acyclovir: activated by viral thymidine kinase, causes DNA chain termination",
          "NRTIs: chain terminators of reverse transcriptase, require intracellular phosphorylation",
          "Dolutegravir (INSTI): high barrier to resistance, preferred first-line in India",
          "Ritonavir: used as CYP3A4 inhibitor (booster) to increase levels of other PIs",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 57-58", page: "835-865", edition: "8th" },
          { book: "Goodman & Gilman", chapter: "Ch 62-63", edition: "13th" },
        ],
      },
      {
        layer: 3,
        slug: "antifungal-antiviral-clinical",
        title: "Antifungal & Antiviral Drugs - Clinical Application",
        estimatedMinutes: 20,
        summary:
          "Clinical use of antifungals in common Indian infections (mucormycosis, cryptococcal meningitis, dermatophytosis) and antivirals including ART initiation, PEP, and hepatitis C treatment in India.",
        contentMd: `# Clinical Applications

## Antifungal Drug Selection

| Infection | Drug of Choice | Notes |
|-----------|---------------|-------|
| Oral candidiasis (thrush) | Fluconazole 150 mg/Nystatin | Topical nystatin for mild |
| Esophageal candidiasis | Fluconazole 200 mg/day x 14 days | HIV-associated |
| Invasive candidiasis | Echinocandin (Caspofungin) | Step-down to fluconazole |
| Cryptococcal meningitis | Amphotericin B + Flucytosine (induction) then Fluconazole (maintenance) | Common in AIDS |
| Aspergillosis | Voriconazole | DOC for invasive aspergillosis |
| Mucormycosis | Liposomal Amphotericin B | Seen in uncontrolled DM, post-COVID in India |
| Dermatophytosis | Terbinafine (oral for nails) | Griseofulvin alternative |
| Tinea versicolor | Topical azoles / Oral fluconazole | Malassezia furfur |
| Visceral leishmaniasis | Liposomal Amphotericin B | DOC in India (NLEM) |

> **Clinical Pearl**: Mucormycosis cases surged during COVID-19 in India (2021), especially in patients with uncontrolled diabetes on steroids. Liposomal amphotericin B was the DOC, with posaconazole for step-down.

## Antiviral Clinical Use

| Infection | Drug | Regimen |
|-----------|------|---------|
| Herpes simplex (genital) | Acyclovir | 400 mg TDS x 7-10 days |
| Herpes zoster | Valacyclovir | 1g TDS x 7 days (within 72 hrs) |
| CMV retinitis (HIV) | Ganciclovir IV then Valganciclovir | Maintenance therapy |
| Influenza | Oseltamivir | 75 mg BD x 5 days (start within 48 hrs) |
| Hepatitis B (chronic) | Tenofovir or Entecavir | Indefinite until HBsAg loss |
| Hepatitis C | Sofosbuvir + Daclatasvir | 12 weeks (cure rate >95%) |

## ART in India (NACO Guidelines)
### First-Line: TLD (TDF + 3TC + DTG)
- Tenofovir 300 mg + Lamivudine 300 mg + Dolutegravir 50 mg
- Single pill, once daily
- DTG preferred over Efavirenz (better efficacy, fewer side effects, high resistance barrier)

### When to Start ART
- **Test and Treat**: All HIV-positive patients start ART regardless of CD4 count
- Start within 7 days of diagnosis (same-day start if ready)

### Post-Exposure Prophylaxis (PEP)
- Start within **72 hours** of exposure (earlier is better)
- Regimen: TDF + 3TC + DTG x 28 days
- Indications: needlestick injury, sexual assault, unprotected exposure

### Key ART ADRs
| Drug | ADR |
|------|-----|
| Zidovudine (AZT) | Bone marrow suppression (anemia, neutropenia) |
| Tenofovir (TDF) | Renal tubular dysfunction, decreased BMD |
| Efavirenz (EFV) | CNS effects (vivid dreams, dizziness), teratogenic |
| Nevirapine (NVP) | Hepatotoxicity, Stevens-Johnson syndrome |
| Lopinavir/r | Metabolic syndrome (dyslipidemia, insulin resistance) |
| Dolutegravir | Weight gain, insomnia (generally well-tolerated) |`,
        mnemonics: [
          {
            text: "PEP within 72: Post-Exposure Prophylaxis within 72 hours, TLD for 28 days",
            explanation:
              "HIV post-exposure prophylaxis must be started within 72 hours and continued for 28 days. Regimen: TDF + 3TC + DTG.",
          },
          {
            text: "ZAP the marrow: Zidovudine causes Anemia and Pancytopenia (bone marrow suppression)",
            explanation:
              "Zidovudine (AZT) is the NRTI most associated with bone marrow suppression, causing macrocytic anemia and neutropenia.",
          },
        ],
        keyPoints: [
          "Mucormycosis: liposomal amphotericin B is DOC (major concern during COVID-19 in India)",
          "Voriconazole: DOC for invasive aspergillosis",
          "HCV: sofosbuvir + daclatasvir (12 weeks, >95% cure rate) - available generically in India",
          "India NACO: Test and Treat policy - ART for all HIV+ regardless of CD4",
          "PEP: TLD within 72 hours for 28 days",
          "Zidovudine: bone marrow suppression; Efavirenz: CNS effects and teratogenicity",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 57-58", edition: "8th" },
          { book: "Harrison's", chapter: "HIV/AIDS Treatment", edition: "21st" },
        ],
      },
      {
        layer: 4,
        slug: "antifungal-antiviral-exam",
        title: "Antifungal & Antiviral Drugs - Exam Prep",
        estimatedMinutes: 15,
        summary:
          "High-yield one-liners and comparison tables for antifungal and antiviral drugs.",
        contentMd: `# Exam High Yield

## One-Liners - Antifungals
- DOC for severe systemic fungal infections: **Amphotericin B**
- Antifungal targeting cell wall: **Echinocandins (beta-1,3-glucan synthase)**
- Azole causing gynecomastia: **Ketoconazole (inhibits CYP17)**
- DOC for dermatophyte nail infections: **Terbinafine (oral)**
- Antifungal used only topically: **Nystatin (too toxic for systemic use)**
- DOC for invasive aspergillosis: **Voriconazole**
- DOC for mucormycosis: **Liposomal Amphotericin B**
- Antifungal acting on microtubules: **Griseofulvin**
- DOC for visceral leishmaniasis in India: **Liposomal Amphotericin B**

## One-Liners - Antivirals
- Antiviral activated by viral thymidine kinase: **Acyclovir**
- Neuraminidase inhibitor for influenza: **Oseltamivir**
- ART drug causing bone marrow suppression: **Zidovudine**
- Teratogenic ART drug: **Efavirenz**
- NNRTI causing SJS: **Nevirapine**
- ART drug used as pharmacokinetic booster: **Ritonavir (CYP3A4 inhibitor)**
- DOC for chronic Hepatitis B: **Tenofovir / Entecavir**
- Cure for Hepatitis C: **Sofosbuvir + Daclatasvir (12 weeks)**
- PEP timeline: **Within 72 hours, for 28 days**

## Comparison: Antifungal Mechanisms

| Class | Target | Action | Key Drug |
|-------|--------|--------|----------|
| Polyenes | Ergosterol (binding) | Fungicidal | Amphotericin B |
| Azoles | CYP14-demethylase | Fungistatic | Fluconazole |
| Echinocandins | Glucan synthase | Fungicidal (Candida) | Caspofungin |
| Allylamines | Squalene epoxidase | Fungicidal | Terbinafine |
| Griseofulvin | Microtubules | Fungistatic | Griseofulvin |

## Comparison: ART Drug Classes

| Class | Target | Activation | Resistance Barrier |
|-------|--------|------------|-------------------|
| NRTIs | Reverse transcriptase | Requires phosphorylation | Moderate |
| NNRTIs | RT allosteric site | Active as parent drug | Low (single mutation) |
| PIs | HIV protease | Active as parent drug | Moderate |
| INSTIs | Integrase | Active as parent drug | High (DTG) |

## Previous Year Themes
- Amphotericin B toxicity and lipid formulations
- Acyclovir mechanism (thymidine kinase selectivity)
- ART drug classes and mechanisms
- PEP regimen and timing
- DOC for specific fungal infections`,
        mnemonics: [
          {
            text: "Ergosterol pathway: Squalene --(Terbinafine blocks)--> Lanosterol --(Azoles block)--> Ergosterol <--(AmB binds)",
            explanation:
              "Three drug targets in ergosterol pathway: terbinafine blocks squalene epoxidase, azoles block 14-alpha-demethylase, amphotericin B binds the final product ergosterol.",
          },
        ],
        keyPoints: [
          "Amphotericin B: binds ergosterol (fungicidal), nephrotoxicity is dose-limiting",
          "Azoles: CYP14-demethylase inhibitors, ketoconazole also inhibits CYP17",
          "Acyclovir: selective activation by viral thymidine kinase",
          "DTG: preferred INSTI with high resistance barrier for first-line ART",
          "PEP: TLD within 72 hours for 28 days",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 57-58", edition: "8th" },
        ],
      },
      {
        layer: 5,
        slug: "antifungal-antiviral-recall",
        title: "Antifungal & Antiviral Drugs - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-style Q&A for antifungal and antiviral drugs.",
        contentMd: `# Active Recall

**Q1:** How does amphotericin B work?
> Binds ergosterol in the fungal cell membrane, forming barrel-like pores that cause leakage of intracellular ions (K+, Mg2+) and cell death.

**Q2:** What is the dose-limiting toxicity of amphotericin B?
> Nephrotoxicity (renal vasoconstriction + direct tubular damage). Prevention: saline loading before infusion.

**Q3:** How do azoles work?
> Inhibit lanosterol 14-alpha-demethylase (CYP51), blocking ergosterol synthesis.

**Q4:** Why does ketoconazole cause gynecomastia?
> Ketoconazole also inhibits CYP17 (involved in steroid hormone synthesis), reducing androgen production.

**Q5:** How is acyclovir selectively activated in virus-infected cells?
> First phosphorylation by viral thymidine kinase (present only in HSV/VZV-infected cells). Host kinases complete further phosphorylation.

**Q6:** What is the mechanism of oseltamivir?
> Inhibits neuraminidase, preventing release of new viral particles from infected cells. Must be given within 48 hours of symptom onset.

**Q7:** What is India's first-line ART regimen?
> TLD: Tenofovir + Lamivudine + Dolutegravir (single tablet, once daily).

**Q8:** What is the PEP regimen for HIV exposure?
> TDF + 3TC + DTG within 72 hours, continued for 28 days.

**Q9:** Which ART drug causes bone marrow suppression?
> Zidovudine (AZT) - macrocytic anemia, neutropenia.

**Q10:** What is the DOC for mucormycosis?
> Liposomal Amphotericin B (surged during COVID-19 in India, especially in diabetic patients on steroids).

**Q11:** How does sofosbuvir cure Hepatitis C?
> NS5B RNA polymerase inhibitor. Combined with daclatasvir (NS5A inhibitor) for 12 weeks, achieving >95% sustained virological response.

**Q12:** What is the role of ritonavir in ART?
> Pharmacokinetic booster - inhibits CYP3A4, increasing plasma levels of co-administered protease inhibitors (e.g., lopinavir/ritonavir).`,
        mnemonics: [],
        keyPoints: [
          "12 recall questions covering antifungal mechanisms, antiviral selectivity, ART regimens, and clinical applications",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 57-58", edition: "8th" },
        ],
      },
    ],
  },

  // ─── Topic 6: Anthelmintics & Antiprotozoals ───────────────
  {
    topicCode: "PH-MOD-05-TOP-06",
    layers: [
      {
        layer: 1,
        slug: "anthelmintics-antiprotozoals-foundation",
        title: "Anthelmintics & Antiprotozoals - Foundation",
        estimatedMinutes: 20,
        summary:
          "Anthelmintics treat worm infestations (nematodes, cestodes, trematodes). Antiprotozoals target amoeba, Giardia, Trichomonas, and Leishmania. Albendazole and metronidazole are the workhorses in Indian practice.",
        contentMd: `# Anthelmintics & Antiprotozoals

## Anthelmintics (Anti-Worm Drugs)

### Classification by Worm Type

| Worm Type | Common Infections | Drugs |
|-----------|------------------|-------|
| **Nematodes (roundworms)** | Ascaris, hookworm, pinworm, Wuchereria | Albendazole, Mebendazole, Ivermectin, DEC |
| **Cestodes (tapeworms)** | Taenia, Echinococcus, Cysticercosis | Praziquantel, Albendazole, Niclosamide |
| **Trematodes (flukes)** | Schistosoma, liver flukes | Praziquantel, Triclabendazole |

### Key Drugs

| Drug | Mechanism | Spectrum |
|------|-----------|----------|
| **Albendazole** | Inhibits beta-tubulin polymerization | Broad-spectrum nematodes + cestodes |
| **Mebendazole** | Inhibits beta-tubulin polymerization | Similar to albendazole, less systemic absorption |
| **Ivermectin** | Glutamate-gated Cl- channel agonist (paralysis) | Strongyloides, Onchocerciasis, Scabies |
| **Praziquantel** | Ca2+ influx causing spastic paralysis | All trematodes + cestodes |
| **DEC (Diethylcarbamazine)** | Microfilaricidal (mechanism unclear) | Lymphatic filariasis |
| **Niclosamide** | Uncouples oxidative phosphorylation | Tapeworms (not cysticercosis) |

## Antiprotozoal Drugs

| Infection | Drug of Choice |
|-----------|---------------|
| **Amoebiasis (intestinal)** | Metronidazole + Diloxanide furoate (luminal) |
| **Amoebic liver abscess** | Metronidazole |
| **Giardiasis** | Metronidazole / Tinidazole |
| **Trichomoniasis** | Metronidazole |
| **Visceral Leishmaniasis** | Liposomal Amphotericin B / Miltefosine |
| **Toxoplasmosis** | Pyrimethamine + Sulfadiazine |

### Metronidazole
- **Most important antiprotozoal drug**
- Also effective against anaerobic bacteria
- Mechanism: reduced by anaerobic metabolism to cytotoxic free radicals that damage DNA

> **Clinical Pearl**: India's National Deworming Day (NDD) uses single-dose albendazole (400 mg) for all children aged 1-19 years biannually. This is one of the world's largest public health deworming programs.`,
        mnemonics: [
          {
            text: "ALBENdazole = ALL BENds tubulin: inhibits beta-tubulin polymerization in worms",
            explanation:
              "Albendazole and mebendazole inhibit beta-tubulin polymerization, disrupting microtubule-dependent glucose uptake in helminths, leading to energy depletion and death.",
          },
          {
            text: "Metro for AMOEBA, GIARDIA, TRICH, and ANAerobes: Metronidazole covers the M-A-G-T-A spectrum",
            explanation:
              "Metronidazole is the DOC for amoebiasis, giardiasis, trichomoniasis, and anaerobic bacterial infections. It generates cytotoxic free radicals under anaerobic conditions.",
          },
        ],
        keyPoints: [
          "Albendazole: inhibits beta-tubulin, broad-spectrum anthelmintic, used in NDD",
          "Praziquantel: causes Ca2+ influx and spastic paralysis, DOC for schistosomiasis and tapeworms",
          "Ivermectin: glutamate-gated Cl- channel agonist, DOC for strongyloides and onchocerciasis",
          "Metronidazole: reduced anaerobically to free radicals, DOC for amoebiasis and giardiasis",
          "DEC: microfilaricidal, used for lymphatic filariasis (also in MDA programs)",
          "National Deworming Day: albendazole 400 mg single dose for children 1-19 years",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 59-60 - Anthelmintics, Antiprotozoals", page: "871-900", edition: "8th" },
          { book: "Park's Textbook", chapter: "Helminthic Infections", edition: "26th" },
        ],
      },
      {
        layer: 2,
        slug: "anthelmintics-antiprotozoals-mechanism",
        title: "Anthelmintics & Antiprotozoals - Mechanism",
        estimatedMinutes: 30,
        summary:
          "Detailed mechanisms, pharmacokinetics, and resistance patterns for anthelmintic and antiprotozoal drugs.",
        contentMd: `# Detailed Mechanisms

## Albendazole/Mebendazole (Benzimidazoles)
1. Bind selectively to **parasite beta-tubulin** (low affinity for mammalian tubulin)
2. Inhibit **microtubule polymerization**
3. Disrupt **glucose uptake** (microtubule-dependent)
4. Energy depletion and worm immobilization
5. Worm expelled by peristalsis

### Pharmacokinetics
| Parameter | Albendazole | Mebendazole |
|-----------|------------|-------------|
| Absorption | Moderate (enhanced by fatty food) | Poor (<10%) |
| Active metabolite | Albendazole sulfoxide (systemic) | Minimal |
| Systemic use | Yes (neurocysticercosis, hydatid) | No (mainly GI worms) |
| Half-life | 8-12 hours | 2-6 hours |

## Ivermectin
- Binds **glutamate-gated chloride channels** (unique to invertebrates)
- Increased Cl- permeability causes **hyperpolarization and flaccid paralysis**
- Does NOT cross BBB in humans (P-glycoprotein efflux at BBB)
- Safe because mammalian CNS protected by BBB

## Praziquantel
1. Increases **permeability of cell membrane to Ca2+**
2. Massive Ca2+ influx causes **spastic paralysis** and tegumental disruption
3. Exposed antigens trigger host immune attack
4. Effective against all trematodes and most cestodes

## Metronidazole - Detailed Mechanism
1. Enters anaerobic/microaerophilic cells
2. Nitro group is **reduced by ferredoxin** (in anaerobes) or equivalent system
3. Reduced intermediates generate **cytotoxic free radicals**
4. Free radicals cause **DNA strand breakage** and cell death
5. Only works in organisms with anaerobic electron transport (selectivity)

### Key Pharmacokinetics
- Excellent oral absorption (>90%)
- Good CNS penetration (crosses BBB - useful for brain abscess)
- Hepatic metabolism, renal excretion
- **Disulfiram-like reaction** with alcohol (avoid alcohol during and 48 hrs after)
- Metallic taste, dark urine

### Metronidazole Limitations
- Kills tissue amoebae (trophozoites) but NOT cysts
- Must add **luminal amoebicide** (diloxanide furoate or paromomycin) to eliminate cyst carriers

## DEC (Diethylcarbamazine)
- Mechanism not fully understood
- Sensitizes microfilariae to **phagocytosis** by host immune cells
- May alter surface membrane of microfilariae
- Causes rapid killing of microfilariae - risk of **Mazzotti reaction** in onchocerciasis (severe inflammatory response)`,
        mnemonics: [
          {
            text: "PraziQUAKE: Praziquantel causes calcium QUAKE (Ca2+ influx) leading to spastic paralysis of worms",
            explanation:
              "Praziquantel increases membrane permeability to calcium ions, causing massive Ca2+ influx, spastic paralysis, and tegumental disruption of trematodes and cestodes.",
          },
        ],
        keyPoints: [
          "Benzimidazoles: selective for parasite beta-tubulin, disrupt glucose uptake",
          "Ivermectin: glutamate-gated Cl- channels (unique to invertebrates), does not cross BBB",
          "Praziquantel: Ca2+ influx causing spastic paralysis, effective against all flukes",
          "Metronidazole: reduced by ferredoxin to cytotoxic free radicals, causes DNA damage",
          "Metronidazole kills trophozoites but NOT cysts - must add luminal amoebicide",
          "DEC: sensitizes microfilariae to phagocytosis, Mazzotti reaction risk",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 59-60", page: "875-895", edition: "8th" },
          { book: "Goodman & Gilman", chapter: "Ch 64-65", edition: "13th" },
        ],
      },
      {
        layer: 3,
        slug: "anthelmintics-antiprotozoals-clinical",
        title: "Anthelmintics & Antiprotozoals - Clinical Application",
        estimatedMinutes: 20,
        summary:
          "Clinical treatment protocols for helminth and protozoal infections in Indian context, including mass drug administration, neurocysticercosis management, and kala-azar treatment.",
        contentMd: `# Clinical Applications

## Helminth Treatment Protocols

| Infection | Drug | Regimen |
|-----------|------|---------|
| Ascariasis | Albendazole | 400 mg single dose |
| Hookworm | Albendazole | 400 mg single dose (or 3 days if heavy) |
| Pinworm (Enterobius) | Mebendazole/Albendazole | Single dose, repeat at 2 weeks |
| Strongyloides | Ivermectin | 200 mcg/kg/day x 2 days |
| Lymphatic filariasis | DEC + Albendazole | MDA annually (DEC 6 mg/kg + ALB 400 mg) |
| Neurocysticercosis | Albendazole + Steroids | 15 mg/kg/day x 28 days + dexamethasone |
| Hydatid cyst | Albendazole (pre/post surgery) | 400 mg BD x 1-6 months |
| Tapeworm (intestinal) | Praziquantel | 5-10 mg/kg single dose |
| Schistosomiasis | Praziquantel | 40 mg/kg single dose |

> **Clinical Pearl**: In neurocysticercosis, steroids (dexamethasone) MUST be given with albendazole to prevent worsening edema from dying cysts. Anti-epileptics also needed.

## Amoebiasis Treatment
### Amoebic Dysentery
- **Metronidazole** 800 mg TDS x 5-7 days (tissue amoebicide)
- FOLLOWED BY **Diloxanide furoate** 500 mg TDS x 10 days (luminal amoebicide)
- Metronidazole alone does NOT eliminate cysts - relapse if luminal agent omitted

### Amoebic Liver Abscess
- **Metronidazole** 800 mg TDS x 10 days (preferred)
- Large abscess: ultrasound-guided aspiration + metronidazole
- Follow with diloxanide furoate

## Leishmaniasis (Kala-Azar) in India
- Endemic in Bihar, Jharkhand, West Bengal, UP
- **DOC**: Liposomal Amphotericin B (10 mg/kg single infusion - NLEM)
- **Alternative**: Miltefosine (oral, first oral drug for VL)
- Elimination target under Kala-Azar Elimination Programme

## Mass Drug Administration (MDA) Programs in India
| Programme | Target | Drugs |
|-----------|--------|-------|
| **National Deworming Day** | Children 1-19 yrs | Albendazole 400 mg single dose |
| **Lymphatic Filariasis MDA** | Endemic districts | DEC + Albendazole (annual) |
| **Triple Drug Therapy (IDA)** | Filariasis accelerated | Ivermectin + DEC + Albendazole |

## Adverse Effects

| Drug | Key ADRs |
|------|----------|
| Albendazole | Hepatotoxicity (high dose), bone marrow suppression (prolonged use), teratogenic |
| Metronidazole | Metallic taste, disulfiram-like reaction, peripheral neuropathy (prolonged) |
| Praziquantel | Headache, dizziness, abdominal pain (from dying worms) |
| DEC | Mazzotti reaction (onchocerciasis), fever, headache |
| Ivermectin | Generally well-tolerated, Mazzotti-like in onchocerciasis |`,
        mnemonics: [
          {
            text: "Amoeba treatment = METRO + DILO: Metronidazole (kills trophozoites) then Diloxanide (kills cysts)",
            explanation:
              "Two-step amoebiasis treatment: metronidazole as tissue amoebicide (kills invasive trophozoites), followed by diloxanide furoate as luminal amoebicide (eliminates cysts and prevents relapse).",
          },
        ],
        keyPoints: [
          "Neurocysticercosis: albendazole + steroids + anti-epileptics",
          "Amoebiasis: metronidazole (trophozoites) THEN diloxanide (cysts) - both needed",
          "Kala-azar DOC in India: liposomal amphotericin B (single infusion)",
          "National Deworming Day: albendazole 400 mg for children 1-19 years",
          "Metronidazole: disulfiram-like reaction with alcohol - strictly avoid",
          "Albendazole is teratogenic - contraindicated in pregnancy",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 59-60", edition: "8th" },
          { book: "Park's Textbook", chapter: "Helminthic Infections, Leishmaniasis", edition: "26th" },
        ],
      },
      {
        layer: 4,
        slug: "anthelmintics-antiprotozoals-exam",
        title: "Anthelmintics & Antiprotozoals - Exam Prep",
        estimatedMinutes: 15,
        summary:
          "High-yield facts, comparison tables, and frequently tested themes for anthelmintics and antiprotozoals.",
        contentMd: `# Exam High Yield

## One-Liners
- DOC for all roundworms (nematodes): **Albendazole**
- DOC for all flukes (trematodes): **Praziquantel**
- DOC for Strongyloides: **Ivermectin**
- DOC for lymphatic filariasis (acute): **DEC (Diethylcarbamazine)**
- DOC for neurocysticercosis: **Albendazole + Steroids**
- DOC for intestinal amoebiasis: **Metronidazole + Diloxanide furoate**
- DOC for Giardiasis: **Metronidazole (or Tinidazole)**
- DOC for Trichomoniasis: **Metronidazole**
- DOC for visceral Leishmaniasis (India): **Liposomal Amphotericin B**
- First oral drug for Leishmaniasis: **Miltefosine**
- Luminal amoebicide: **Diloxanide furoate**
- Anthelmintic contraindicated in pregnancy: **Albendazole (teratogenic)**
- Drug causing Mazzotti reaction: **DEC (in onchocerciasis)**
- Drug with disulfiram-like reaction: **Metronidazole (with alcohol)**
- Mechanism of ivermectin: **Glutamate-gated Cl- channel agonist**

## Comparison: Anthelmintic Mechanisms

| Drug | Mechanism | Worm Selectivity |
|------|-----------|-----------------|
| Albendazole | Beta-tubulin polymerization inhibition | Nematodes, Cestodes |
| Ivermectin | Glutamate-gated Cl- channel agonist | Nematodes (not cestodes/trematodes) |
| Praziquantel | Ca2+ influx, spastic paralysis | Cestodes, Trematodes |
| DEC | Sensitizes to phagocytosis | Microfilariae |
| Niclosamide | Uncouples oxidative phosphorylation | Cestodes (intestinal only) |

## Previous Year Themes
- DOC for specific helminth infections
- Metronidazole mechanism (anaerobic reduction)
- Luminal vs tissue amoebicide concept
- Mass drug administration programs
- Neurocysticercosis management
- Mazzotti reaction`,
        mnemonics: [
          {
            text: "PRAZIQUANTEL = PRAZI-CALCIUM: PraziQUANTEL causes massive calcium influx",
            explanation:
              "Praziquantel's key mechanism is increasing Ca2+ permeability in trematode and cestode cell membranes, causing spastic paralysis.",
          },
        ],
        keyPoints: [
          "Albendazole: beta-tubulin inhibitor, broad-spectrum nematocide, teratogenic",
          "Praziquantel: Ca2+ influx, DOC for all flukes and tapeworms",
          "Ivermectin: Cl- channel agonist, safe because does not cross human BBB",
          "Metronidazole: tissue amoebicide only, must add luminal agent",
          "DEC: Mazzotti reaction in onchocerciasis (not used for Onchocerca)",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 59-60", edition: "8th" },
        ],
      },
      {
        layer: 5,
        slug: "anthelmintics-antiprotozoals-recall",
        title: "Anthelmintics & Antiprotozoals - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-style Q&A for anthelmintics and antiprotozoals.",
        contentMd: `# Active Recall

**Q1:** What is the mechanism of albendazole?
> Inhibits parasite beta-tubulin polymerization, disrupting microtubule-dependent glucose uptake, causing energy depletion and worm death.

**Q2:** Why is ivermectin safe for humans despite being neurotoxic in worms?
> Ivermectin acts on glutamate-gated Cl- channels (invertebrate-specific). It does not cross the human BBB due to P-glycoprotein efflux, protecting the mammalian CNS.

**Q3:** How does praziquantel kill flukes and tapeworms?
> Increases Ca2+ membrane permeability causing massive calcium influx, spastic paralysis, and tegumental disruption exposing parasite antigens to host immune attack.

**Q4:** Why must metronidazole be followed by diloxanide furoate in amoebiasis?
> Metronidazole kills only trophozoites (tissue amoebicide) but NOT cysts. Diloxanide furoate (luminal amoebicide) eliminates cysts to prevent relapse and transmission.

**Q5:** What is the Mazzotti reaction?
> Severe inflammatory reaction caused by DEC in onchocerciasis - due to massive killing of microfilariae releasing antigens. Features: fever, pruritus, edema, hypotension.

**Q6:** What drug is used for National Deworming Day in India?
> Albendazole 400 mg single dose for all children aged 1-19 years (biannual program).

**Q7:** How does metronidazole work?
> In anaerobic conditions, the nitro group is reduced by ferredoxin, generating cytotoxic free radicals that cause DNA strand breakage and cell death.

**Q8:** What is the DOC for neurocysticercosis?
> Albendazole (15 mg/kg/day x 28 days) with dexamethasone (to reduce inflammation from dying cysts) and anti-epileptics.

**Q9:** What is the DOC for visceral leishmaniasis in India?
> Liposomal Amphotericin B (10 mg/kg single dose infusion) under the Kala-Azar Elimination Programme.

**Q10:** Why is albendazole contraindicated in pregnancy?
> Albendazole is teratogenic (embryotoxic in animal studies). Contraindicated in pregnancy.

**Q11:** What is the disulfiram-like reaction with metronidazole?
> Metronidazole inhibits aldehyde dehydrogenase. Alcohol consumption during treatment causes accumulation of acetaldehyde - nausea, vomiting, flushing, headache.`,
        mnemonics: [],
        keyPoints: [
          "11 recall questions on anthelmintic mechanisms, clinical protocols, and Indian public health programs",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 59-60", edition: "8th" },
        ],
      },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // MODULE 6 — AUTACOIDS, NSAIDs & IMMUNOPHARMACOLOGY
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // ─── Topic 1: Histamine & Antihistamines ───────────────────
  {
    topicCode: "PH-MOD-06-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "histamine-antihistamines-foundation",
        title: "Histamine & Antihistamines - Foundation",
        estimatedMinutes: 20,
        summary:
          "Histamine is an autacoid stored in mast cells and basophils, acting on H1-H4 receptors. H1 antihistamines (1st gen: sedating; 2nd gen: non-sedating) are used for allergies, while H2 blockers are used for peptic ulcer disease.",
        contentMd: `# Histamine & Antihistamines

## Histamine
- Synthesized from **histidine** by histidine decarboxylase
- Stored in **mast cell granules** (with heparin and proteases)
- Released by: IgE-mediated degranulation (allergy), drugs (morphine, d-tubocurarine), complement (C3a, C5a)

## Histamine Receptors

| Receptor | Location | Effects | Blockers |
|----------|----------|---------|----------|
| **H1** | Smooth muscle, endothelium, CNS | Bronchoconstriction, vasodilation, pruritus, wakefulness | Cetirizine, Chlorpheniramine |
| **H2** | Gastric parietal cells, heart | Gastric acid secretion, positive chronotropy | Ranitidine, Famotidine |
| **H3** | CNS (presynaptic) | Autoreceptor - inhibits histamine release | Pitolisant (narcolepsy) |
| **H4** | Eosinophils, mast cells | Chemotaxis, inflammation | Under investigation |

## H1 Antihistamines

### First Generation (Sedating)
| Drug | Key Feature |
|------|-------------|
| **Chlorpheniramine** | Sedating, anti-pruritic, widely available in India |
| **Diphenhydramine** | Sedating, antiemetic, available as Benadryl |
| **Promethazine** | Antiemetic, sedative, anticholinergic |
| **Hydroxyzine** | Anxiolytic, anti-pruritic |
| **Cyproheptadine** | Appetite stimulant (anti-serotonin), used in children |

### Second Generation (Non-Sedating)
| Drug | Key Feature |
|------|-------------|
| **Cetirizine** | Minimal sedation, most commonly prescribed in India |
| **Loratadine** | Non-sedating, OTC in India |
| **Fexofenadine** | Truly non-sedating, no CYP metabolism |
| **Levocetirizine** | Active enantiomer of cetirizine |
| **Desloratadine** | Active metabolite of loratadine |

> **Clinical Pearl**: Cetirizine is the most prescribed antihistamine in India. First-gen antihistamines cross BBB causing sedation and anticholinergic effects. Second-gen are preferred for allergic rhinitis due to non-sedating profile.`,
        mnemonics: [
          {
            text: "H1 = Histamine-1 = Hives, Hay fever, Horrible itch: allergic symptoms blocked by H1 antihistamines",
            explanation:
              "H1 receptors mediate allergic symptoms: urticaria (hives), allergic rhinitis (hay fever), and pruritus (itch). H1 antihistamines block these effects.",
          },
          {
            text: "1st gen SEDATES, 2nd gen SEPARATES (from BBB): 1st gen crosses BBB causing sedation, 2nd gen does not",
            explanation:
              "First-generation H1 antihistamines are lipophilic and cross the BBB causing sedation. Second-generation are less lipophilic and are P-gp substrates, so they do not cross significantly.",
          },
        ],
        keyPoints: [
          "Histamine: from mast cells, acts on H1-H4 receptors",
          "H1: allergic symptoms (bronchoconstriction, pruritus, vasodilation); H2: gastric acid secretion",
          "1st gen H1 blockers: sedating, cross BBB, anticholinergic effects",
          "2nd gen H1 blockers: non-sedating, do not cross BBB, preferred for allergies",
          "Cetirizine: most prescribed antihistamine in India",
          "Cyproheptadine: anti-serotonin + antihistamine, used as appetite stimulant in children",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 11 - Histamine and Antihistamines", page: "155-170", edition: "8th" },
          { book: "Rang & Dale", chapter: "Ch 27 - Histamine", edition: "9th" },
        ],
      },
      {
        layer: 2,
        slug: "histamine-antihistamines-mechanism",
        title: "Histamine & Antihistamines - Mechanism",
        estimatedMinutes: 30,
        summary:
          "Detailed pharmacology of histamine receptor signaling, mechanism of H1 blockers as inverse agonists, pharmacokinetics of 1st vs 2nd generation, and the role of H2 blockers in acid suppression.",
        contentMd: `# Detailed Mechanisms

## Histamine Receptor Signaling

| Receptor | G-protein | Second Messenger | Effects |
|----------|-----------|-----------------|---------|
| **H1** | Gq | IP3/DAG -> Ca2+ release | Smooth muscle contraction, vasodilation (via NO), pruritus |
| **H2** | Gs | cAMP increase | Gastric acid secretion, positive inotropy/chronotropy |
| **H3** | Gi/o | cAMP decrease | Presynaptic autoinhibition of histamine release |
| **H4** | Gi/o | cAMP decrease | Eosinophil chemotaxis |

## H1 Antihistamines as Inverse Agonists
- H1 antihistamines are NOT simple competitive antagonists
- They are **inverse agonists**: stabilize the inactive conformation of H1 receptor
- This reduces constitutive (basal) receptor activity even without histamine

## 1st vs 2nd Generation Pharmacokinetics

| Feature | 1st Generation | 2nd Generation |
|---------|---------------|----------------|
| BBB penetration | Yes (lipophilic) | No (P-gp substrates) |
| Sedation | Marked | Minimal |
| Anticholinergic | Yes (dry mouth, urinary retention) | No |
| Duration | 4-6 hours | 12-24 hours |
| Cardiotoxicity | Rare | Terfenadine, astemizole (withdrawn - QT prolongation) |
| Metabolism | Hepatic (CYP) | Variable (fexofenadine: not metabolized) |

## H2 Blockers in Acid Suppression
- Block histamine stimulation of **H2 receptors on parietal cells**
- Reduce basal and stimulated acid secretion (about 70% reduction)
- Less potent than PPIs (which block the final common pathway - H+/K+ ATPase)

| H2 Blocker | Relative Potency | Notes |
|-----------|------------------|-------|
| Cimetidine | 1x | CYP inhibitor, anti-androgen effects |
| Ranitidine | 5-10x | Withdrawn in many countries (NDMA contamination) |
| Famotidine | 20-50x | Most potent H2 blocker, preferred currently |
| Nizatidine | 5-10x | Also prokinetic |

### Cimetidine - Special Toxicity
- **CYP450 inhibitor**: increases levels of warfarin, phenytoin, theophylline
- **Anti-androgen**: gynecomastia, impotence, decreased libido (blocks androgen receptors)
- These effects NOT seen with famotidine (preferred H2 blocker)`,
        mnemonics: [
          {
            text: "CIMEtidine = CYP Inhibitor, Male hormone Effects (anti-androgen): the two unique problems of cimetidine",
            explanation:
              "Cimetidine is unique among H2 blockers for being a CYP450 inhibitor (drug interactions) and having anti-androgen effects (gynecomastia, impotence). Other H2 blockers lack these effects.",
          },
        ],
        keyPoints: [
          "H1: Gq-coupled (IP3/DAG/Ca2+); H2: Gs-coupled (cAMP); H3/H4: Gi-coupled",
          "H1 antihistamines are inverse agonists, not just antagonists",
          "2nd gen H1 blockers: non-sedating because they are P-gp substrates and do not cross BBB",
          "Cimetidine: CYP450 inhibitor + anti-androgen (gynecomastia)",
          "Famotidine: most potent H2 blocker, preferred (no CYP or androgen effects)",
          "H2 blockers reduce acid ~70%; PPIs reduce ~90% (more potent)",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 11 - Histamine", page: "158-168", edition: "8th" },
          { book: "Goodman & Gilman", chapter: "Ch 39 - Histamine", edition: "13th" },
        ],
      },
      {
        layer: 3,
        slug: "histamine-antihistamines-clinical",
        title: "Histamine & Antihistamines - Clinical Application",
        estimatedMinutes: 20,
        summary:
          "Clinical use of antihistamines for allergic rhinitis, urticaria, motion sickness, and as premedication. Drug interactions and contraindications.",
        contentMd: `# Clinical Applications

## Indications for H1 Antihistamines

| Condition | Preferred Drug | Notes |
|-----------|---------------|-------|
| Allergic rhinitis | Cetirizine/Fexofenadine (2nd gen) | First-line, daily use |
| Acute urticaria | Cetirizine/Levocetirizine | Up-dosing (2-4x) if standard dose fails |
| Chronic urticaria | Fexofenadine/Desloratadine | Long-term, non-sedating preferred |
| Anaphylaxis (adjunct) | Chlorpheniramine IV + Adrenaline IM | Antihistamine is ADJUNCT, not primary |
| Motion sickness | Promethazine/Diphenhydramine | 1st gen preferred (anticholinergic CNS effect) |
| Pre-anesthetic | Promethazine | Sedation + antiemetic |
| Pruritus (dermatoses) | Hydroxyzine | Sedating, anxiolytic |
| Appetite stimulation | Cyproheptadine | Children with poor appetite |

> **Clinical Pearl**: In anaphylaxis, adrenaline IM is the FIRST and most important drug. H1 antihistamine is only adjunctive therapy - never rely on antihistamine alone for anaphylaxis.

## H2 Blocker Clinical Use
- **Peptic ulcer disease**: famotidine 20 mg BD (less effective than PPIs)
- **GERD**: mild cases, on-demand use
- **Stress ulcer prophylaxis**: IV famotidine in ICU patients
- **Zollinger-Ellison syndrome**: PPIs preferred, H2 blockers inadequate

## Drug Interactions & Contraindications

### 1st Gen Antihistamines
- Potentiate CNS depressants (alcohol, benzodiazepines, opioids)
- Anticholinergic effects: urinary retention (avoid in BPH), angle-closure glaucoma risk
- Avoid in elderly (Beers criteria): increased fall risk, confusion

### Terfenadine & Astemizole (Withdrawn)
- Caused fatal **QT prolongation and torsades de pointes**
- Metabolized by CYP3A4: co-administration with ketoconazole/erythromycin increased levels
- Led to development of safer alternatives (fexofenadine = active metabolite of terfenadine)

## Indian Market Context
- OTC availability of cetirizine, loratadine, chlorpheniramine
- Fixed-dose combos common: cetirizine + ambroxol, cetirizine + pseudoephedrine
- Ranitidine largely withdrawn (NDMA issue); famotidine replacing it
- Cough syrups containing 1st gen antihistamines widely used`,
        mnemonics: [
          {
            text: "Anaphylaxis = ADRENALINE first, Antihistamine adjunct: A before A",
            explanation:
              "In anaphylaxis, adrenaline (epinephrine) IM is the first-line life-saving drug. H1 antihistamine is only an adjunct. Never delay adrenaline for antihistamine.",
          },
        ],
        keyPoints: [
          "Allergic rhinitis: 2nd gen H1 blockers first-line (cetirizine, fexofenadine)",
          "Anaphylaxis: adrenaline IM first, antihistamine only adjunct",
          "Motion sickness: 1st gen preferred (promethazine, diphenhydramine)",
          "1st gen: avoid in elderly (Beers criteria) - falls, confusion, anticholinergic burden",
          "Terfenadine/astemizole withdrawn for fatal QT prolongation",
          "Ranitidine largely withdrawn due to NDMA contamination; famotidine preferred H2 blocker",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 11", edition: "8th" },
          { book: "Harrison's", chapter: "Allergic Diseases", edition: "21st" },
        ],
      },
      {
        layer: 4,
        slug: "histamine-antihistamines-exam",
        title: "Histamine & Antihistamines - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield one-liners and comparisons for histamine pharmacology.",
        contentMd: `# Exam High Yield

## One-Liners
- H1 receptor second messenger: **Gq -> IP3/DAG -> Ca2+**
- H2 receptor second messenger: **Gs -> cAMP**
- H1 antihistamine that is an appetite stimulant: **Cyproheptadine**
- H2 blocker with anti-androgen effects: **Cimetidine**
- Most potent H2 blocker: **Famotidine**
- H1 antihistamine for motion sickness: **Promethazine**
- Non-sedating antihistamine not metabolized by CYP: **Fexofenadine**
- Withdrawn antihistamines (QT prolongation): **Terfenadine, Astemizole**
- Active metabolite of terfenadine: **Fexofenadine**
- H1 blockers are: **Inverse agonists (not simple antagonists)**
- Histamine is released from: **Mast cells and basophils**
- Triple response of Lewis: **Red spot (direct vasodilation) -> Flare (axon reflex) -> Wheal (edema)**

## Comparison: 1st vs 2nd Gen H1 Blockers

| Feature | 1st Generation | 2nd Generation |
|---------|---------------|----------------|
| Sedation | +++ | +/- |
| Anticholinergic | +++ | - |
| Duration | Short (4-6 hr) | Long (12-24 hr) |
| BBB penetration | Yes | No |
| Uses | Motion sickness, premed, pruritus | Allergic rhinitis, urticaria |

## Previous Year Themes
- H1 vs H2 receptor signaling
- 1st vs 2nd gen antihistamine comparison
- Cimetidine toxicity (CYP inhibition, anti-androgen)
- Triple response of Lewis
- Terfenadine withdrawal reason`,
        mnemonics: [
          {
            text: "Triple response of Lewis: RSF-W: Red Spot (vasodilation), Surrounding Flare (axon reflex), Wheal (edema from capillary leak)",
            explanation:
              "Intradermal histamine injection causes the classic triple response: local red spot from direct vasodilation, surrounding flare from axon reflex, and central wheal from increased capillary permeability.",
          },
        ],
        keyPoints: [
          "H1: Gq, IP3/Ca2+; H2: Gs, cAMP",
          "H1 antihistamines are inverse agonists",
          "Cimetidine: CYP inhibitor + anti-androgen",
          "Fexofenadine: non-sedating, not CYP-metabolized, safest",
          "Triple response: red spot, flare, wheal",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 11", edition: "8th" },
        ],
      },
      {
        layer: 5,
        slug: "histamine-antihistamines-recall",
        title: "Histamine & Antihistamines - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-style Q&A for histamine and antihistamines.",
        contentMd: `# Active Recall

**Q1:** What are the four histamine receptors and their primary functions?
> H1: allergic responses (bronchoconstriction, pruritus); H2: gastric acid secretion; H3: presynaptic autoinhibition in CNS; H4: eosinophil chemotaxis.

**Q2:** Why are 1st gen antihistamines sedating but 2nd gen are not?
> 1st gen are lipophilic and cross the BBB. 2nd gen are P-glycoprotein substrates and less lipophilic, so they do not penetrate the BBB significantly.

**Q3:** What is the triple response of Lewis?
> Intradermal histamine injection causes: (1) Red spot from direct vasodilation, (2) Surrounding flare from axon reflex, (3) Central wheal from increased capillary permeability and edema.

**Q4:** Why is cimetidine problematic compared to famotidine?
> Cimetidine is a CYP450 inhibitor (drug interactions with warfarin, phenytoin) and has anti-androgen effects (gynecomastia, impotence). Famotidine lacks both.

**Q5:** What is the role of antihistamines in anaphylaxis?
> Only adjunctive. Adrenaline IM is the first-line life-saving treatment. H1 antihistamine (chlorpheniramine IV) is given as adjunct.

**Q6:** Why was terfenadine withdrawn?
> Terfenadine caused fatal QT prolongation (torsades de pointes), especially when CYP3A4 was inhibited by ketoconazole or erythromycin.

**Q7:** Name the antihistamine used as an appetite stimulant.
> Cyproheptadine - has anti-serotonin activity in addition to antihistamine effect, stimulating appetite.

**Q8:** What is the preferred H1 antihistamine for allergic rhinitis?
> 2nd generation: cetirizine, fexofenadine, or loratadine (non-sedating, once daily).

**Q9:** Which antihistamine is preferred for motion sickness?
> 1st generation: promethazine or diphenhydramine (anticholinergic CNS effect helps in motion sickness).

**Q10:** Are H1 antihistamines competitive antagonists or inverse agonists?
> Inverse agonists - they stabilize the inactive conformation of the H1 receptor, reducing constitutive activity.`,
        mnemonics: [],
        keyPoints: [
          "10 recall questions on histamine receptors, antihistamine generations, and clinical applications",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 11", edition: "8th" },
        ],
      },
    ],
  },

  // ─── Topic 2: NSAIDs & Antipyretics ────────────────────────
  {
    topicCode: "PH-MOD-06-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "nsaids-antipyretics-foundation",
        title: "NSAIDs & Antipyretics - Foundation",
        estimatedMinutes: 20,
        summary:
          "NSAIDs inhibit cyclooxygenase (COX) enzymes, reducing prostaglandin synthesis. They have analgesic, anti-inflammatory, and antipyretic effects. COX-1 is constitutive (GI protection, platelets); COX-2 is inducible (inflammation). Paracetamol is an analgesic-antipyretic without significant anti-inflammatory action.",
        contentMd: `# NSAIDs & Antipyretics

## Prostaglandin Synthesis Pathway
$$\\text{Membrane phospholipids} \\xrightarrow{\\text{Phospholipase A2}} \\text{Arachidonic acid} \\xrightarrow{\\text{COX-1/COX-2}} \\text{Prostaglandins, Thromboxane}$$

## COX-1 vs COX-2

| Feature | COX-1 | COX-2 |
|---------|-------|-------|
| Type | Constitutive | Inducible |
| Location | Stomach, platelets, kidney | Inflammatory sites, kidney, brain |
| Function | GI mucosal protection, platelet TXA2 | Inflammation, pain, fever |
| Inhibition effect | GI ulcers, bleeding | Anti-inflammatory, analgesic |

## Classification of NSAIDs

| Category | Drugs | COX Selectivity |
|----------|-------|----------------|
| **Non-selective COX inhibitors** | Aspirin, Ibuprofen, Diclofenac, Indomethacin, Piroxicam | Both COX-1 and COX-2 |
| **Preferential COX-2** | Nimesulide, Meloxicam, Nabumetone | More COX-2 |
| **Selective COX-2 (Coxibs)** | Celecoxib, Etoricoxib | COX-2 only |
| **Analgesic-antipyretic** | Paracetamol (Acetaminophen) | Weak COX inhibitor, central action |

## Key Drugs

### Aspirin (Acetylsalicylic Acid)
- **Irreversible** COX inhibitor (acetylates serine residue)
- Low dose (75-150 mg): antiplatelet (TXA2 inhibition)
- Analgesic dose (300-600 mg): pain relief
- Anti-inflammatory dose (3-6 g/day): rheumatic fever

### Paracetamol (Acetaminophen)
- Analgesic and antipyretic but NOT anti-inflammatory
- Acts centrally (possibly on COX-3 or peroxidase pathway)
- Safest analgesic-antipyretic in therapeutic doses
- **Hepatotoxic in overdose** (N-acetyl-p-benzoquinoneimine - NAPQI)

> **Clinical Pearl**: Paracetamol is the most widely used analgesic in India. Available OTC at Jan Aushadhi stores. Maximum dose: 4g/day for adults. N-acetylcysteine (NAC) is the antidote for overdose.`,
        mnemonics: [
          {
            text: "COX-1 = COX-ONE = protects your STOMACH (constitutive); COX-2 = COX-TWO = inflammation brew (inducible)",
            explanation:
              "COX-1 is constitutive and protects gastric mucosa. COX-2 is induced at sites of inflammation. Non-selective NSAIDs block both, causing GI ulcers.",
          },
          {
            text: "Aspirin is IRREVERSIBLE: it permanently acetylates COX (unlike other NSAIDs which are reversible)",
            explanation:
              "Aspirin covalently acetylates a serine residue on COX, making it the only NSAID with irreversible inhibition. This is why low-dose aspirin has sustained antiplatelet effect for the entire platelet lifespan (7-10 days).",
          },
        ],
        keyPoints: [
          "NSAIDs inhibit COX enzymes, reducing prostaglandin synthesis",
          "COX-1: constitutive (GI protection, platelets); COX-2: inducible (inflammation)",
          "Aspirin: only irreversible COX inhibitor; low dose = antiplatelet",
          "Paracetamol: analgesic-antipyretic but NOT anti-inflammatory; hepatotoxic in overdose",
          "NAPQI is the toxic metabolite of paracetamol; antidote is N-acetylcysteine (NAC)",
          "Coxibs (celecoxib): selective COX-2, reduced GI toxicity but increased CV risk",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 14-15 - NSAIDs", page: "192-220", edition: "8th" },
          { book: "Rang & Dale", chapter: "Ch 26 - Anti-inflammatory Drugs", edition: "9th" },
        ],
      },
      {
        layer: 2,
        slug: "nsaids-antipyretics-mechanism",
        title: "NSAIDs & Antipyretics - Mechanism",
        estimatedMinutes: 30,
        summary:
          "Detailed COX inhibition mechanisms, aspirin's irreversible acetylation, paracetamol toxicity pathway, and COX-2 selective inhibitor cardiovascular risk.",
        contentMd: `# Detailed Mechanisms

## Aspirin - Irreversible COX Inhibition
1. Aspirin **acetylates serine-530** of COX-1 (serine-516 of COX-2)
2. Covalent modification permanently inactivates the enzyme
3. Platelets (no nucleus) cannot synthesize new COX - antiplatelet effect lasts **7-10 days** (platelet lifespan)
4. Other cells regenerate COX - anti-inflammatory effect requires repeated dosing

### Dose-Dependent Effects
| Dose | Effect | Mechanism |
|------|--------|-----------|
| 75-150 mg | Antiplatelet | TXA2 inhibition (COX-1 in platelets) |
| 300-600 mg | Analgesic | Peripheral + central prostaglandin inhibition |
| 3-6 g/day | Anti-inflammatory | Full COX-1/2 inhibition |
| >6 g/day | Uricosuric | Blocks tubular reabsorption of uric acid |

### Aspirin and Reye's Syndrome
- **Reye's syndrome**: acute hepatic encephalopathy in children with viral infections (influenza, varicella)
- Aspirin is CONTRAINDICATED in children <16 years with fever
- Use paracetamol or ibuprofen instead

## Paracetamol Toxicity
### Therapeutic Dose
- Metabolized by glucuronidation (60%) and sulfation (35%)
- Small amount (<5%) oxidized by CYP2E1 to **NAPQI** (toxic metabolite)
- NAPQI conjugated with **glutathione** and safely excreted

### Overdose (>150 mg/kg or >7.5 g in adults)
1. Glucuronidation/sulfation pathways saturated
2. More NAPQI formed by CYP2E1
3. **Glutathione stores depleted** (<30% of normal)
4. NAPQI binds to hepatocyte proteins causing **centrilobular hepatic necrosis**
5. Liver failure, coagulopathy, death

### Treatment: N-Acetylcysteine (NAC)
- Replenishes glutathione stores
- Most effective if given within **8 hours** of overdose
- Rumack-Matthew nomogram guides treatment decision

## COX-2 Selectivity and CV Risk
- COX-2 in vascular endothelium produces **PGI2 (prostacyclin)**: vasodilator, antiplatelet
- COX-1 in platelets produces **TXA2**: vasoconstrictor, pro-aggregatory
- Selective COX-2 inhibitors block PGI2 but NOT TXA2
- Results in **prothrombotic imbalance**: increased MI and stroke risk
- **Rofecoxib (Vioxx)** withdrawn in 2004 due to increased CV events
- Celecoxib: lower CV risk than rofecoxib, still used with caution`,
        mnemonics: [
          {
            text: "NAPQI needs NAC: N-Acetyl-p-benzoquinoneimine (toxic) needs N-AcetylCysteine (antidote)",
            explanation:
              "In paracetamol overdose, NAPQI depletes glutathione and causes liver necrosis. N-acetylcysteine replenishes glutathione to detoxify NAPQI. Most effective within 8 hours.",
          },
        ],
        keyPoints: [
          "Aspirin: irreversible COX acetylation; antiplatelet effect lasts 7-10 days (platelet lifespan)",
          "Low-dose aspirin: antiplatelet (TXA2 inhibition); high dose: anti-inflammatory",
          "Aspirin contraindicated in children <16 (Reye's syndrome with viral infections)",
          "Paracetamol overdose: NAPQI depletes glutathione causing centrilobular hepatic necrosis",
          "NAC (N-acetylcysteine): antidote for paracetamol, most effective within 8 hours",
          "COX-2 inhibitors: reduced GI toxicity but increased CV risk (prothrombotic imbalance)",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 14-15 - NSAIDs", page: "195-215", edition: "8th" },
          { book: "Goodman & Gilman", chapter: "Ch 38 - NSAIDs", edition: "13th" },
        ],
      },
      {
        layer: 3,
        slug: "nsaids-antipyretics-clinical",
        title: "NSAIDs & Antipyretics - Clinical Application",
        estimatedMinutes: 20,
        summary:
          "Clinical use of NSAIDs for pain, fever, and inflammation. Adverse effects including GI ulceration, renal toxicity, and aspirin-exacerbated respiratory disease. Indian prescribing context.",
        contentMd: `# Clinical Applications

## NSAID Selection by Indication

| Indication | Preferred Drug | Notes |
|-----------|---------------|-------|
| Fever (general) | Paracetamol | Safest, first-line |
| Fever in children | Paracetamol / Ibuprofen | NEVER aspirin (Reye's) |
| Mild-moderate pain | Ibuprofen / Diclofenac | Short course |
| Migraine (acute) | Ibuprofen / Naproxen | With antiemetic |
| Rheumatoid arthritis | Naproxen / Celecoxib | Long-term use |
| Osteoarthritis | Paracetamol first, then topical NSAIDs | Avoid systemic if possible |
| Dysmenorrhoea | Mefenamic acid / Ibuprofen | Start at onset of menses |
| Closure of PDA | Indomethacin / Ibuprofen IV | Neonatal |
| Antiplatelet | Aspirin 75-150 mg | Post-MI, stroke prevention |
| Acute gout | Indomethacin / Naproxen / Colchicine | NOT aspirin (alters uric acid handling) |

## NSAID Adverse Effects

### GI Toxicity
- **Peptic ulcer and bleeding**: due to COX-1 inhibition reducing PGE2 (cytoprotective)
- Risk factors: elderly, H. pylori, concurrent steroids/anticoagulants
- Prevention: co-prescribe PPI (omeprazole) or use COX-2 selective drug
- **Diclofenac and aspirin** have highest GI risk among non-selective NSAIDs

### Renal Toxicity
- Prostaglandins maintain renal blood flow (especially in CKD, HF, dehydration)
- NSAIDs can cause: acute kidney injury, sodium/water retention, hyperkalemia
- **Avoid NSAIDs in CKD** and dehydrated patients

### Cardiovascular Risk
- All NSAIDs (except aspirin) increase CV risk to varying degrees
- **Naproxen**: lowest CV risk among non-selective NSAIDs
- **Diclofenac**: highest CV risk among non-selective NSAIDs (comparable to coxibs)

### Aspirin-Exacerbated Respiratory Disease (AERD)
- Triad: asthma + nasal polyps + aspirin sensitivity
- Due to shunting of arachidonic acid to **leukotriene pathway** when COX is blocked
- Cross-reactive with all NSAIDs (not paracetamol at low doses)

## Indian Prescribing Context
- **Nimesulide**: banned in children <12 years in India (hepatotoxicity reports)
- **Fixed-dose combos**: paracetamol + ibuprofen, paracetamol + tramadol widely available
- **Diclofenac IM**: overused in India, associated with injection-site complications
- **NLEM includes**: aspirin, paracetamol, ibuprofen, diclofenac
- **Diclofenac banned for veterinary use** (vulture conservation - renal failure in vultures)

> **Clinical Pearl**: Diclofenac injection caused near-extinction of Indian vultures (who consumed carcasses of cattle treated with diclofenac). Now banned for veterinary use under Wildlife Protection Act.`,
        mnemonics: [
          {
            text: "NSAID GI protection = PPI: always co-prescribe a PPI (omeprazole) for high-risk patients on chronic NSAIDs",
            explanation:
              "Patients at high GI risk (elderly, H. pylori positive, on steroids/anticoagulants) should receive a PPI when taking chronic NSAIDs to prevent peptic ulceration.",
          },
          {
            text: "Samter's Triad = AAA: Asthma + Aspirin sensitivity + nasal polyps (Aspirin-Exacerbated Respiratory Disease)",
            explanation:
              "AERD (formerly Samter's triad): bronchial asthma + nasal polyposis + aspirin/NSAID hypersensitivity. Due to leukotriene overproduction when COX is blocked.",
          },
        ],
        keyPoints: [
          "Paracetamol: first-line antipyretic, safest NSAID alternative",
          "Aspirin contraindicated in children with viral fever (Reye's syndrome)",
          "NSAID GI toxicity: co-prescribe PPI for high-risk patients",
          "Naproxen: lowest CV risk; Diclofenac: highest CV risk among traditional NSAIDs",
          "Nimesulide banned in children <12 years in India",
          "Diclofenac banned for veterinary use (vulture conservation)",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 14-15", edition: "8th" },
          { book: "Harrison's", chapter: "Pain Management", edition: "21st" },
        ],
      },
      {
        layer: 4,
        slug: "nsaids-antipyretics-exam",
        title: "NSAIDs & Antipyretics - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield facts and comparison tables for NSAIDs.",
        contentMd: `# Exam High Yield

## One-Liners
- Only irreversible COX inhibitor: **Aspirin**
- NSAID for PDA closure: **Indomethacin / Ibuprofen (IV)**
- NSAID for dysmenorrhoea: **Mefenamic acid**
- Safest NSAID in pregnancy (1st/2nd trimester): **Paracetamol**
- NSAID contraindicated in children: **Aspirin (Reye's syndrome)**
- Paracetamol antidote: **N-acetylcysteine (NAC)**
- Paracetamol toxic metabolite: **NAPQI**
- COX-2 inhibitor withdrawn for CV events: **Rofecoxib (Vioxx)**
- NSAID with lowest CV risk: **Naproxen**
- NSAID causing vulture deaths: **Diclofenac (veterinary)**
- Aspirin-exacerbated respiratory disease triad: **Asthma + Nasal polyps + Aspirin sensitivity**
- Low-dose aspirin duration of antiplatelet effect: **7-10 days (platelet lifespan)**

## Comparison: Key NSAIDs

| Feature | Aspirin | Ibuprofen | Diclofenac | Celecoxib | Paracetamol |
|---------|---------|-----------|-----------|-----------|-------------|
| COX selectivity | Non-selective (irreversible) | Non-selective | Non-selective | COX-2 selective | Weak/central |
| Anti-inflammatory | +++ (high dose) | ++ | +++ | +++ | - |
| Antiplatelet | +++ (low dose) | + | + | - | - |
| GI risk | High | Moderate | High | Low | Very low |
| CV risk | Protective (low dose) | Moderate | High | Moderate | None |

## Previous Year Themes
- Aspirin dose-dependent effects
- Paracetamol overdose management (NAC, NAPQI)
- COX-1 vs COX-2 functions
- COX-2 inhibitor CV risk mechanism
- NSAID selection in specific clinical scenarios
- Reye's syndrome`,
        mnemonics: [
          {
            text: "Aspirin doses: 75 Plate, 300 Pain, 3000 Plus (anti-inflammatory), 6000 Pee (uricosuric)",
            explanation:
              "Aspirin dose-effect: 75 mg = antiplatelet, 300 mg = analgesic, 3 g = anti-inflammatory, >6 g = uricosuric. A classic exam question on dose-dependent pharmacology.",
          },
        ],
        keyPoints: [
          "Aspirin: irreversible COX, dose-dependent effects (75 mg antiplatelet to 6g uricosuric)",
          "Paracetamol: NAPQI causes liver necrosis, NAC antidote within 8 hours",
          "Rofecoxib withdrawn for CV events; celecoxib still available",
          "Naproxen: lowest CV risk; diclofenac: highest among non-selective",
          "Aspirin contraindicated in children <16 with fever (Reye's)",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 14-15", edition: "8th" },
        ],
      },
      {
        layer: 5,
        slug: "nsaids-antipyretics-recall",
        title: "NSAIDs & Antipyretics - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-style Q&A for NSAIDs and antipyretics.",
        contentMd: `# Active Recall

**Q1:** What is the difference between COX-1 and COX-2?
> COX-1 is constitutive (always present) - protects gastric mucosa, regulates platelet TXA2, maintains renal blood flow. COX-2 is inducible - expressed at sites of inflammation, producing prostaglandins that mediate pain, fever, and inflammation.

**Q2:** Why does aspirin have a prolonged antiplatelet effect?
> Aspirin irreversibly acetylates COX in platelets. Since platelets have no nucleus and cannot synthesize new COX, the antiplatelet effect lasts the entire platelet lifespan (7-10 days).

**Q3:** What is Reye's syndrome?
> Acute hepatic encephalopathy in children given aspirin during viral infections (influenza, varicella). Characterized by hepatic failure and cerebral edema. Aspirin is contraindicated in children <16 with fever.

**Q4:** Describe the paracetamol overdose mechanism.
> Normal metabolism (glucuronidation/sulfation) is saturated. CYP2E1 produces excess NAPQI. Glutathione stores deplete below 30%. NAPQI binds hepatocyte proteins, causing centrilobular necrosis.

**Q5:** What is the antidote for paracetamol overdose?
> N-acetylcysteine (NAC) - replenishes glutathione stores. Most effective within 8 hours of overdose. Rumack-Matthew nomogram guides treatment.

**Q6:** Why do COX-2 inhibitors increase cardiovascular risk?
> COX-2 in endothelium produces PGI2 (vasodilator, antiaggregatory). COX-2 inhibitors block PGI2 without affecting platelet TXA2 (COX-1), creating a prothrombotic imbalance.

**Q7:** What is aspirin-exacerbated respiratory disease?
> Triad of asthma + nasal polyps + aspirin/NSAID sensitivity. COX blockade shunts arachidonic acid to the leukotriene pathway, causing bronchospasm.

**Q8:** Which NSAID is used to close a patent ductus arteriosus?
> Indomethacin or ibuprofen (IV). PDA is kept open by PGE2; NSAIDs inhibit PGE2 synthesis to close the ductus.

**Q9:** What NSAID has the lowest cardiovascular risk?
> Naproxen has the lowest CV risk among non-selective NSAIDs.

**Q10:** Why was nimesulide banned in children in India?
> Reports of hepatotoxicity (fulminant hepatic failure) in children. Banned for use in children <12 years by CDSCO.`,
        mnemonics: [],
        keyPoints: [
          "10 recall questions covering COX enzymes, aspirin pharmacology, paracetamol toxicity, and clinical applications",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 14-15", edition: "8th" },
        ],
      },
    ],
  },

  // ─── Topic 3: Drugs for Gout ───────────────────────────────
  {
    topicCode: "PH-MOD-06-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "drugs-gout-foundation",
        title: "Drugs for Gout - Foundation",
        estimatedMinutes: 20,
        summary:
          "Gout results from hyperuricemia causing monosodium urate crystal deposition. Treatment targets acute inflammation (colchicine, NSAIDs, corticosteroids) and chronic urate lowering (allopurinol, febuxostat, uricosurics). Understanding purine metabolism is key to drug action.",
        contentMd: `# Drugs for Gout

## Pathophysiology
- Hyperuricemia (serum urate >6.8 mg/dL) leads to monosodium urate (MSU) crystal deposition in joints
- Crystals activate NLRP3 inflammasome -> IL-1beta release -> acute inflammation
- Acute gout: excruciating pain, swelling, redness (most commonly 1st MTP joint - podagra)

## Drug Classification

### Acute Gout Treatment
| Drug | Mechanism | Notes |
|------|-----------|-------|
| **Colchicine** | Microtubule depolymerization, inhibits neutrophil migration | Most specific for gout |
| **NSAIDs** | COX inhibition (anti-inflammatory) | Indomethacin/Naproxen preferred |
| **Corticosteroids** | Anti-inflammatory | When NSAIDs/colchicine contraindicated |
| **IL-1 inhibitors** | Anakinra, Canakinumab | Refractory cases |

### Chronic Urate-Lowering Therapy
| Drug | Mechanism | Notes |
|------|-----------|-------|
| **Allopurinol** | Xanthine oxidase inhibitor (competitive) | Most commonly used |
| **Febuxostat** | Xanthine oxidase inhibitor (non-purine) | More selective |
| **Probenecid** | Uricosuric (blocks URAT1 transporter) | Promotes urate excretion |
| **Benzbromarone** | Uricosuric | More potent |
| **Rasburicase** | Recombinant uricase (converts urate to allantoin) | Tumor lysis syndrome |
| **Pegloticase** | PEGylated uricase | Refractory chronic gout |

## Purine Metabolism
$$\\text{Hypoxanthine} \\xrightarrow{\\text{Xanthine oxidase}} \\text{Xanthine} \\xrightarrow{\\text{Xanthine oxidase}} \\text{Uric acid}$$

Allopurinol/Febuxostat block xanthine oxidase, reducing uric acid production.

> **Clinical Pearl**: Never start allopurinol during an acute gout attack - it can worsen the flare. Start with colchicine/NSAIDs first, then initiate allopurinol after the acute attack resolves (with colchicine cover for 3-6 months).`,
        mnemonics: [
          {
            text: "ALLO-PURINOL blocks xanthine oxidase: ALLOws less PURINE conversion to uric acid",
            explanation:
              "Allopurinol is a purine analogue that inhibits xanthine oxidase, reducing conversion of hypoxanthine and xanthine to uric acid.",
          },
          {
            text: "Colchicine = COLlapses microtubules: inhibits microtubule polymerization, preventing neutrophil migration to the joint",
            explanation:
              "Colchicine binds tubulin, preventing microtubule assembly. This inhibits neutrophil chemotaxis and phagocytosis of urate crystals, reducing inflammation in acute gout.",
          },
        ],
        keyPoints: [
          "Acute gout: colchicine, NSAIDs (indomethacin/naproxen), or corticosteroids",
          "Chronic gout: allopurinol (xanthine oxidase inhibitor) is first-line urate-lowering therapy",
          "Colchicine: binds tubulin, inhibits microtubule assembly and neutrophil migration",
          "Never start allopurinol during acute attack (worsens flare)",
          "Uricosurics (probenecid): increase renal urate excretion via URAT1 blockade",
          "Rasburicase: recombinant uricase for tumor lysis syndrome",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 16 - Drugs for Gout", page: "221-230", edition: "8th" },
          { book: "Goodman & Gilman", chapter: "Ch 40 - Pharmacotherapy of Gout", edition: "13th" },
        ],
      },
      {
        layer: 2,
        slug: "drugs-gout-mechanism",
        title: "Drugs for Gout - Mechanism",
        estimatedMinutes: 30,
        summary: "Detailed mechanisms, pharmacokinetics, and drug interactions for gout medications.",
        contentMd: `# Detailed Mechanisms

## Colchicine
1. Binds **tubulin** monomers, preventing polymerization into microtubules
2. Inhibits **neutrophil chemotaxis** and phagocytosis
3. Reduces **NLRP3 inflammasome** activation (IL-1beta suppression)
4. Highly specific for gout (no analgesic/anti-inflammatory effect otherwise)

### Pharmacokinetics
- Oral absorption: rapid, peak at 1-2 hours
- Enterohepatic recycling (causes GI toxicity)
- Narrow therapeutic index
- **Dose**: 0.5 mg BD-TDS (low-dose regimen preferred - fewer GI side effects)

### Toxicity (Overdose)
- **GI**: diarrhea, nausea, vomiting (most common, dose-limiting)
- **Severe**: bone marrow suppression, multiorgan failure (rare with low-dose regimen)

## Allopurinol
1. Structural analogue of **hypoxanthine**
2. Competitively inhibits **xanthine oxidase**
3. Metabolized to **oxypurinol** (active metabolite, also inhibits XO)
4. Both allopurinol and oxypurinol reduce uric acid production
5. Xanthine and hypoxanthine are excreted instead (more soluble than uric acid)

### Important Drug Interaction
- **Azathioprine/6-Mercaptopurine**: metabolized by xanthine oxidase
- Allopurinol blocks their metabolism -> **toxic accumulation** (bone marrow suppression)
- **Reduce azathioprine dose by 75%** if co-administered with allopurinol

### Allopurinol Hypersensitivity Syndrome (AHS)
- Severe reaction: skin rash (SJS/TEN), fever, eosinophilia, hepatitis, renal failure
- Associated with **HLA-B*5801** allele (common in Southeast Asians, African Americans)
- Screen HLA-B*5801 before starting allopurinol in high-risk populations

## Febuxostat
- **Non-purine** selective xanthine oxidase inhibitor
- More potent than allopurinol
- Does NOT require dose adjustment in mild-moderate renal impairment
- May increase CV events (CARES trial) - use with caution in CVD patients

## Uricosurics (Probenecid)
1. Block **URAT1 transporter** in proximal tubule
2. Prevent reabsorption of uric acid from tubular fluid
3. Increase urinary uric acid excretion
4. **Contraindicated**: renal stones, CKD, overproducers of uric acid
5. Require adequate hydration and alkalinized urine to prevent urate stone formation`,
        mnemonics: [
          {
            text: "AZA + ALLO = DANGER: Azathioprine + Allopurinol causes toxic accumulation (reduce AZA dose by 75%)",
            explanation:
              "Azathioprine is metabolized by xanthine oxidase. Allopurinol blocks this enzyme, causing dangerous accumulation of 6-MP (active metabolite) leading to severe bone marrow suppression.",
          },
        ],
        keyPoints: [
          "Colchicine: tubulin binding, neutrophil migration inhibition, NLRP3 inflammasome suppression",
          "Allopurinol: hypoxanthine analogue, competitive XO inhibition, oxypurinol is active metabolite",
          "Allopurinol + azathioprine: reduce azathioprine dose by 75% (XO metabolizes AZA)",
          "AHS (allopurinol hypersensitivity): screen HLA-B*5801 in high-risk populations",
          "Febuxostat: non-purine XO inhibitor, no renal dose adjustment needed",
          "Probenecid: blocks URAT1, increases urate excretion, contraindicated in renal stones",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 16 - Drugs for Gout", page: "223-228", edition: "8th" },
          { book: "Goodman & Gilman", chapter: "Ch 40", edition: "13th" },
        ],
      },
      {
        layer: 3,
        slug: "drugs-gout-clinical",
        title: "Drugs for Gout - Clinical Application",
        estimatedMinutes: 20,
        summary: "Clinical management of acute and chronic gout, tumor lysis syndrome, and prescribing in Indian context.",
        contentMd: `# Clinical Applications

## Acute Gout Management
1. **First-line**: NSAIDs (indomethacin 50 mg TDS or naproxen 500 mg BD)
2. **Alternative**: Colchicine 0.5 mg TDS (low-dose preferred)
3. **If NSAIDs/colchicine contraindicated**: Prednisolone 30 mg/day tapering over 7-10 days
4. **Refractory**: IL-1 inhibitors (anakinra)

### Important: Do NOT use aspirin in acute gout
- Low-dose aspirin reduces urate excretion (worsens hyperuricemia)
- High-dose aspirin is uricosuric but unpredictable

## Chronic Urate-Lowering Therapy
- **Start when**: recurrent gout (>2 attacks/year), tophi, urate stones, CKD
- **Target**: serum urate <6 mg/dL (or <5 mg/dL with tophi)
- **First-line**: Allopurinol 100 mg/day, titrate up (max 800 mg/day)
- Always start with **colchicine prophylaxis** (0.5 mg OD-BD) for 3-6 months when initiating ULT

## Tumor Lysis Syndrome
- Massive uric acid release from dying cancer cells during chemotherapy
- Prevention: **Rasburicase** (recombinant uricase) - converts uric acid to allantoin (soluble)
- Alternative prevention: Allopurinol + hydration + urinary alkalinization

## Drug Interactions and Contraindications

| Drug | Contraindication | Key Interaction |
|------|-----------------|----------------|
| Colchicine | Hepatic/renal impairment (dose reduce) | CYP3A4 inhibitors increase toxicity |
| Allopurinol | Acute gout attack | Azathioprine (reduce dose 75%) |
| Probenecid | Renal stones, CKD | Reduces penicillin excretion (historically used to boost) |
| Febuxostat | Severe CVD (CARES trial) | Azathioprine (same as allopurinol) |

> **Clinical Pearl**: Probenecid was historically used to increase penicillin levels by blocking its tubular secretion. During WWII, this was critical due to limited penicillin supply.`,
        mnemonics: [
          {
            text: "Start LOW, go SLOW with allopurinol: Low dose initially (100 mg), Slowly titrate, add cOlchicine cover for 3-6 months, Watch for HLA-B*5801",
            explanation:
              "Allopurinol should be initiated at low dose (100 mg/day), gradually titrated, with colchicine prophylaxis to prevent gout flares during ULT initiation.",
          },
        ],
        keyPoints: [
          "Acute gout: NSAIDs (indomethacin) > colchicine > steroids; never aspirin",
          "Never start allopurinol during acute attack",
          "Allopurinol: start low (100 mg), titrate with colchicine cover for 3-6 months",
          "Screen HLA-B*5801 before allopurinol in high-risk populations",
          "Rasburicase: DOC for tumor lysis syndrome prevention",
          "Probenecid: contraindicated in renal stones and overproducers",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 16", edition: "8th" },
          { book: "Harrison's", chapter: "Gout", edition: "21st" },
        ],
      },
      {
        layer: 4,
        slug: "drugs-gout-exam",
        title: "Drugs for Gout - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield facts for gout pharmacology.",
        contentMd: `# Exam High Yield

## One-Liners
- Most specific drug for acute gout: **Colchicine**
- Colchicine mechanism: **Tubulin binding, microtubule depolymerization**
- First-line chronic urate-lowering: **Allopurinol**
- Allopurinol mechanism: **Xanthine oxidase inhibition (competitive)**
- Active metabolite of allopurinol: **Oxypurinol**
- Allopurinol + azathioprine interaction: **Reduce AZA dose by 75%**
- HLA associated with allopurinol hypersensitivity: **HLA-B*5801**
- Drug for tumor lysis syndrome: **Rasburicase (recombinant uricase)**
- Uricosuric drug: **Probenecid (blocks URAT1)**
- NSAID NOT used in acute gout: **Aspirin (alters urate handling)**
- Non-purine XO inhibitor: **Febuxostat**
- Target serum urate in gout: **<6 mg/dL**
- Colchicine dose-limiting toxicity: **Diarrhea (GI)**

## Comparison: Acute vs Chronic Gout Treatment

| Feature | Acute | Chronic |
|---------|-------|---------|
| Goal | Reduce inflammation | Lower serum urate |
| Drugs | Colchicine, NSAIDs, steroids | Allopurinol, febuxostat, uricosurics |
| Timing | Immediate | After acute attack resolves |
| Duration | Days | Lifelong |

## Previous Year Themes
- Colchicine mechanism of action
- Allopurinol-azathioprine interaction
- Tumor lysis syndrome management
- HLA-B*5801 screening
- Aspirin dose-dependent urate effects`,
        mnemonics: [
          {
            text: "Gout treatment timeline: FIRE then PREVENT: First Indomethacin/Colchicine (acute), then PREvent with allopurinol (chronic)",
            explanation:
              "Treat the acute gout fire with anti-inflammatory drugs (NSAIDs, colchicine), then prevent future attacks with urate-lowering therapy (allopurinol) after the acute episode resolves.",
          },
        ],
        keyPoints: [
          "Colchicine: tubulin binder, most specific for gout",
          "Allopurinol: purine analogue XO inhibitor, AZA interaction critical",
          "HLA-B*5801: screen before allopurinol in at-risk populations",
          "Rasburicase: converts urate to allantoin (tumor lysis)",
          "Aspirin: not used in gout (alters urate handling unpredictably)",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 16", edition: "8th" },
        ],
      },
      {
        layer: 5,
        slug: "drugs-gout-recall",
        title: "Drugs for Gout - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-style Q&A for gout pharmacology.",
        contentMd: `# Active Recall

**Q1:** How does colchicine work in acute gout?
> Binds tubulin, prevents microtubule assembly, inhibits neutrophil chemotaxis and phagocytosis of urate crystals. Also suppresses NLRP3 inflammasome activation.

**Q2:** Why should allopurinol NOT be started during an acute gout attack?
> Changing urate levels during an acute attack can mobilize urate crystals from deposits, paradoxically worsening inflammation and prolonging the attack.

**Q3:** What is the mechanism of allopurinol?
> Structural analogue of hypoxanthine that competitively inhibits xanthine oxidase, reducing conversion of hypoxanthine/xanthine to uric acid. Active metabolite: oxypurinol.

**Q4:** Why must azathioprine dose be reduced with allopurinol?
> Azathioprine is metabolized to 6-MP, which is further metabolized by xanthine oxidase. Allopurinol blocks this pathway, causing toxic accumulation of 6-MP (bone marrow suppression). Reduce AZA dose by 75%.

**Q5:** What is allopurinol hypersensitivity syndrome?
> Severe reaction: SJS/TEN, fever, eosinophilia, hepatitis, renal failure. Associated with HLA-B*5801 allele. Screen before prescribing in high-risk populations.

**Q6:** How do uricosurics (probenecid) work?
> Block URAT1 transporter in the proximal tubule, preventing reabsorption of uric acid and increasing urinary excretion.

**Q7:** Why is aspirin avoided in acute gout?
> Low-dose aspirin reduces uric acid excretion (worsens hyperuricemia). Dose-dependent effects on urate handling make it unpredictable and contraindicated.

**Q8:** What is rasburicase used for?
> Recombinant uricase enzyme that converts uric acid to allantoin (highly soluble). Used for prevention and treatment of tumor lysis syndrome.

**Q9:** What is the recommended colchicine prophylaxis when starting allopurinol?
> Colchicine 0.5 mg once or twice daily for 3-6 months when initiating urate-lowering therapy, to prevent gout flares.

**Q10:** What is the target serum urate level in chronic gout management?
> <6 mg/dL (or <5 mg/dL in patients with tophi).`,
        mnemonics: [],
        keyPoints: [
          "10 recall questions covering acute and chronic gout management, drug mechanisms, and interactions",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 16", edition: "8th" },
        ],
      },
    ],
  },

  // ─── Topic 4: Immunosuppressants ───────────────────────────
  {
    topicCode: "PH-MOD-06-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "immunosuppressants-foundation",
        title: "Immunosuppressants - Foundation",
        estimatedMinutes: 20,
        summary:
          "Immunosuppressants reduce immune system activity for organ transplant rejection prevention, autoimmune diseases, and inflammatory conditions. Key drugs include calcineurin inhibitors (cyclosporine, tacrolimus), antimetabolites (azathioprine, mycophenolate), mTOR inhibitors, and biologics.",
        contentMd: `# Immunosuppressants

## Classification

| Class | Drugs | Mechanism |
|-------|-------|-----------|
| **Calcineurin inhibitors** | Cyclosporine, Tacrolimus | Block T-cell IL-2 production |
| **Antimetabolites** | Azathioprine, Mycophenolate mofetil (MMF) | Inhibit purine synthesis |
| **mTOR inhibitors** | Sirolimus (Rapamycin), Everolimus | Block IL-2 signal transduction |
| **Corticosteroids** | Prednisolone, Methylprednisolone | Multiple anti-inflammatory mechanisms |
| **Alkylating agents** | Cyclophosphamide | Cross-links DNA |
| **Biologics** | Basiliximab, Rituximab, Infliximab, Adalimumab | Target specific immune molecules |

## Calcineurin Inhibitors

### Cyclosporine
- Binds **cyclophilin** (intracellular immunophilin)
- Cyclosporine-cyclophilin complex inhibits **calcineurin** (phosphatase)
- Calcineurin normally activates NFAT (transcription factor for IL-2)
- Result: reduced **IL-2 production** by T-helper cells
- Selective for T cells; does NOT affect neutrophils

### Tacrolimus (FK506)
- Binds **FKBP-12** (FK-binding protein)
- Tacrolimus-FKBP complex also inhibits **calcineurin**
- Same final pathway as cyclosporine but **10-100x more potent**
- Currently preferred over cyclosporine in most transplant centers

## Key Biologics

| Drug | Target | Use |
|------|--------|-----|
| **Basiliximab** | IL-2 receptor (CD25) | Transplant induction |
| **Rituximab** | CD20 (B cells) | NHL, RA, AIHA |
| **Infliximab** | TNF-alpha | RA, IBD, psoriasis |
| **Adalimumab** | TNF-alpha | RA, IBD, psoriasis |
| **Etanercept** | TNF receptor fusion | RA |
| **Trastuzumab** | HER2 | Breast cancer |

> **Clinical Pearl**: Tacrolimus has largely replaced cyclosporine as the preferred calcineurin inhibitor in transplantation due to better efficacy. Both require therapeutic drug monitoring (TDM) due to narrow therapeutic index.`,
        mnemonics: [
          {
            text: "CyClo-CyClo-CalCI-NFAT-IL2: CYClosporine binds CYClophilin, inhibits CalCINeurin, blocks NFAT, reduces IL-2",
            explanation:
              "The cyclosporine pathway: drug binds cyclophilin, the complex inhibits calcineurin phosphatase, preventing NFAT activation, which reduces IL-2 gene transcription in T cells.",
          },
          {
            text: "Tacrolimus binds FKBP, same CalcI-NFAT path but 10x more potent than CsA",
            explanation:
              "Tacrolimus (FK506) binds FKBP-12 (not cyclophilin), but the complex also inhibits calcineurin, blocking the same NFAT-IL-2 pathway. It is 10-100x more potent than cyclosporine.",
          },
        ],
        keyPoints: [
          "Cyclosporine: binds cyclophilin, inhibits calcineurin, blocks IL-2 production",
          "Tacrolimus: binds FKBP-12, same calcineurin pathway, 10-100x more potent",
          "Azathioprine: purine antimetabolite, metabolized to 6-MP by xanthine oxidase",
          "Mycophenolate: IMPDH inhibitor, blocks de novo purine synthesis in lymphocytes",
          "Sirolimus: mTOR inhibitor, blocks IL-2 signaling downstream",
          "Biologics target specific immune molecules: anti-TNF (infliximab), anti-CD20 (rituximab)",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 65 - Immunosuppressants", page: "929-945", edition: "8th" },
          { book: "Goodman & Gilman", chapter: "Ch 35 - Immunosuppressants", edition: "13th" },
        ],
      },
      {
        layer: 2,
        slug: "immunosuppressants-mechanism",
        title: "Immunosuppressants - Mechanism",
        estimatedMinutes: 30,
        summary: "Detailed mechanisms, pharmacokinetics, and adverse effect profiles for immunosuppressants.",
        contentMd: `# Detailed Mechanisms

## Calcineurin Pathway (Cyclosporine/Tacrolimus)
1. T-cell receptor activation increases intracellular Ca2+
2. Ca2+ activates **calcineurin** (serine-threonine phosphatase)
3. Calcineurin dephosphorylates **NFAT** (Nuclear Factor of Activated T-cells)
4. Dephosphorylated NFAT enters nucleus, promotes **IL-2 gene transcription**
5. IL-2 drives T-cell proliferation
6. **Cyclosporine-cyclophilin** or **Tacrolimus-FKBP** complex blocks calcineurin at step 2-3

### Adverse Effects Comparison
| ADR | Cyclosporine | Tacrolimus |
|-----|-------------|-----------|
| Nephrotoxicity | +++ (dose-limiting) | +++ |
| Neurotoxicity | + (tremor) | ++ (more common) |
| Diabetes (NODAT) | + | +++ |
| Hypertension | +++ | + |
| Gingival hyperplasia | +++ | - |
| Hirsutism | +++ | - |
| Hyperlipidemia | +++ | + |
| Alopecia | - | ++ |

## Antimetabolites

### Azathioprine
1. Prodrug converted to **6-mercaptopurine (6-MP)** in the liver
2. 6-MP metabolized to thiopurine nucleotides
3. Inhibits **purine synthesis** (de novo pathway)
4. Blocks DNA/RNA synthesis in rapidly dividing lymphocytes
5. Metabolized by **xanthine oxidase** and **TPMT**
- **TPMT polymorphism**: poor metabolizers accumulate 6-MP (severe myelosuppression)
- **Allopurinol interaction**: blocks XO metabolism, requiring 75% dose reduction

### Mycophenolate Mofetil (MMF)
1. Active metabolite: **mycophenolic acid (MPA)**
2. Inhibits **IMPDH** (inosine monophosphate dehydrogenase)
3. Blocks **de novo purine synthesis** in lymphocytes
4. Lymphocytes lack salvage pathway (unlike other cells) - selective for lymphocytes
5. More selective and better tolerated than azathioprine
- **Main ADR**: GI disturbances (diarrhea, nausea), myelosuppression

## mTOR Inhibitors (Sirolimus/Everolimus)
1. Sirolimus (Rapamycin) binds **FKBP-12** (same protein as tacrolimus!)
2. BUT the sirolimus-FKBP complex does NOT inhibit calcineurin
3. Instead, it inhibits **mTOR** (mechanistic Target of Rapamycin)
4. Blocks **IL-2-driven T-cell proliferation** (G1 to S phase transition)
5. Antiproliferative rather than calcineurin-inhibiting

### Key Differences from Calcineurin Inhibitors
- NOT nephrotoxic (advantage in transplant)
- Anti-proliferative: impairs wound healing
- Causes **hyperlipidemia** and **thrombocytopenia**
- Used in drug-eluting stents (prevents restenosis)`,
        mnemonics: [
          {
            text: "CsA side effects = CHANGE: Cosmetic (hirsutism, gingival hyperplasia), Hypertension, Azotemia (nephrotoxicity), Nephrotoxicity, Gout (hyperuricemia), Elevated lipids",
            explanation:
              "Major cyclosporine adverse effects: cosmetic changes (hirsutism, gingival hyperplasia), hypertension, nephrotoxicity (dose-limiting), and metabolic effects (hyperlipidemia, hyperuricemia).",
          },
        ],
        keyPoints: [
          "Calcineurin inhibitors: block NFAT activation, reduce IL-2 production in T cells",
          "Cyclosporine ADRs: nephrotoxicity, hypertension, hirsutism, gingival hyperplasia",
          "Tacrolimus ADRs: nephrotoxicity, neurotoxicity, diabetes (NODAT), alopecia",
          "Azathioprine: prodrug to 6-MP, TPMT polymorphism affects toxicity, XO interaction with allopurinol",
          "MMF: IMPDH inhibitor, selective for lymphocytes (lack purine salvage pathway)",
          "Sirolimus: mTOR inhibitor, NOT nephrotoxic, but impairs wound healing",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 65", page: "932-942", edition: "8th" },
          { book: "Goodman & Gilman", chapter: "Ch 35", edition: "13th" },
        ],
      },
      {
        layer: 3,
        slug: "immunosuppressants-clinical",
        title: "Immunosuppressants - Clinical Application",
        estimatedMinutes: 20,
        summary: "Clinical use in transplantation, autoimmune diseases, and biologics in Indian practice.",
        contentMd: `# Clinical Applications

## Transplant Immunosuppression Phases

### 1. Induction (perioperative)
- **Basiliximab** (anti-IL-2R) or **Antithymocyte globulin (ATG)**
- High-dose corticosteroids

### 2. Maintenance (lifelong)
- **Triple therapy**: Tacrolimus + Mycophenolate + Prednisolone
- Tacrolimus requires **therapeutic drug monitoring** (trough levels 5-10 ng/mL)

### 3. Rejection Treatment
- Acute: High-dose IV methylprednisolone (pulse therapy)
- Steroid-resistant: ATG or OKT3

## Autoimmune Disease Applications

| Disease | Drugs Used |
|---------|-----------|
| Rheumatoid arthritis | Methotrexate, Leflunomide, anti-TNF biologics |
| SLE | Hydroxychloroquine, MMF, Cyclophosphamide |
| Psoriasis | Methotrexate, Cyclosporine, Biologics (anti-TNF, anti-IL-17) |
| IBD (Crohn's, UC) | Azathioprine, Infliximab, Adalimumab |
| Multiple sclerosis | Interferon-beta, Fingolimod, Natalizumab |
| Nephrotic syndrome | Cyclophosphamide, Cyclosporine, Rituximab |

## Biologics in Indian Practice
- **Biosimilars** widely available and affordable in India
- Indian companies produce biosimilar rituximab, infliximab, adalimumab, trastuzumab
- Cost: 1/10th to 1/5th of originator biologics
- **TB screening** mandatory before starting anti-TNF therapy (reactivation risk)

> **Clinical Pearl**: Before starting any anti-TNF biologic (infliximab, adalimumab), screen for latent TB with Mantoux test/IGRA. Reactivation of latent TB is a serious risk. Treat latent TB with INH before biologic initiation.

## Monitoring Requirements
| Drug | Monitor |
|------|---------|
| Cyclosporine/Tacrolimus | Trough drug levels, renal function, BP, glucose |
| Azathioprine | CBC (myelosuppression), LFTs |
| MMF | CBC, GI symptoms |
| Sirolimus | Lipid profile, wound healing, CBC |
| Anti-TNF biologics | TB screening, hepatitis B, infections |`,
        mnemonics: [
          {
            text: "Transplant TRIPLE: Tacrolimus + MMF + Prednisolone = standard maintenance immunosuppression",
            explanation:
              "Standard maintenance immunosuppression after organ transplant uses three drugs targeting different immune pathways: calcineurin inhibitor (tacrolimus) + antimetabolite (MMF) + steroid (prednisolone).",
          },
        ],
        keyPoints: [
          "Transplant maintenance: triple therapy (tacrolimus + MMF + prednisolone)",
          "Tacrolimus requires TDM (trough 5-10 ng/mL)",
          "Anti-TNF biologics: screen for latent TB before starting",
          "Indian biosimilars: affordable biologics for RA, IBD, cancer",
          "Azathioprine: monitor CBC for myelosuppression",
          "Cyclophosphamide: hemorrhagic cystitis (prevent with mesna)",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 65", edition: "8th" },
          { book: "Harrison's", chapter: "Transplantation Immunology", edition: "21st" },
        ],
      },
      {
        layer: 4,
        slug: "immunosuppressants-exam",
        title: "Immunosuppressants - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield facts for immunosuppressant pharmacology.",
        contentMd: `# Exam High Yield

## One-Liners
- Cyclosporine binds: **Cyclophilin**
- Tacrolimus binds: **FKBP-12**
- Both inhibit: **Calcineurin (blocks NFAT -> IL-2)**
- More potent calcineurin inhibitor: **Tacrolimus (10-100x)**
- Immunosuppressant causing gingival hyperplasia + hirsutism: **Cyclosporine**
- Immunosuppressant causing diabetes (NODAT): **Tacrolimus (most common)**
- mTOR inhibitor: **Sirolimus (Rapamycin)**
- Sirolimus binds: **FKBP-12 (but does NOT inhibit calcineurin)**
- IMPDH inhibitor: **Mycophenolate mofetil (MMF)**
- Anti-CD20 monoclonal antibody: **Rituximab**
- Anti-TNF biologics: **Infliximab, Adalimumab, Etanercept**
- Must screen for TB before: **Anti-TNF therapy**
- Cyclophosphamide side effect prevented by mesna: **Hemorrhagic cystitis**
- TPMT deficiency increases toxicity of: **Azathioprine (6-MP accumulation)**

## Comparison: Calcineurin vs mTOR Inhibitors

| Feature | Cyclosporine/Tacrolimus | Sirolimus |
|---------|------------------------|-----------|
| Binding protein | Cyclophilin / FKBP-12 | FKBP-12 |
| Target | Calcineurin | mTOR |
| Mechanism | Blocks IL-2 production | Blocks IL-2 response |
| Nephrotoxicity | +++ | - |
| Wound healing | Normal | Impaired |
| Hyperlipidemia | + | +++ |
| Use in stents | No | Yes (drug-eluting) |

## Previous Year Themes
- Calcineurin pathway and drug targets
- Cyclosporine vs tacrolimus ADRs
- Transplant immunosuppression protocols
- Biologic targets (anti-CD20, anti-TNF)
- TB screening before biologics`,
        mnemonics: [
          {
            text: "SirOlimus = Sir NO Nephrotoxicity: sirolimus (mTOR inhibitor) does NOT cause nephrotoxicity unlike calcineurin inhibitors",
            explanation:
              "A key advantage of sirolimus over cyclosporine/tacrolimus is the absence of nephrotoxicity. However, sirolimus impairs wound healing and causes hyperlipidemia.",
          },
        ],
        keyPoints: [
          "CsA: cyclophilin; Tacrolimus: FKBP-12; both inhibit calcineurin",
          "Sirolimus: FKBP-12 but inhibits mTOR (not calcineurin), NOT nephrotoxic",
          "Tacrolimus causes more diabetes; CsA causes more hirsutism/gingival hyperplasia",
          "Screen TB before anti-TNF; screen TPMT before azathioprine",
          "Cyclophosphamide: mesna prevents hemorrhagic cystitis",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 65", edition: "8th" },
        ],
      },
      {
        layer: 5,
        slug: "immunosuppressants-recall",
        title: "Immunosuppressants - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-style Q&A for immunosuppressants.",
        contentMd: `# Active Recall

**Q1:** What is the mechanism of cyclosporine?
> Binds cyclophilin; the complex inhibits calcineurin (phosphatase), preventing NFAT dephosphorylation, blocking IL-2 gene transcription in T cells.

**Q2:** How does tacrolimus differ from cyclosporine?
> Tacrolimus binds FKBP-12 (not cyclophilin) but inhibits the same calcineurin-NFAT pathway. It is 10-100x more potent and is the preferred calcineurin inhibitor.

**Q3:** What cosmetic side effects are unique to cyclosporine?
> Gingival hyperplasia and hirsutism. Tacrolimus actually causes alopecia instead.

**Q4:** How does sirolimus differ from tacrolimus despite binding the same protein?
> Both bind FKBP-12, but sirolimus-FKBP inhibits mTOR (not calcineurin). Sirolimus blocks IL-2-driven proliferation rather than IL-2 production. It is NOT nephrotoxic.

**Q5:** Why is mycophenolate more selective for lymphocytes than azathioprine?
> Lymphocytes depend exclusively on de novo purine synthesis (lack salvage pathway). MMF inhibits IMPDH (key de novo enzyme), so lymphocytes are preferentially affected.

**Q6:** What is the standard maintenance immunosuppression after organ transplant?
> Triple therapy: Tacrolimus + Mycophenolate Mofetil + Prednisolone.

**Q7:** Why must TB be screened before anti-TNF therapy?
> TNF-alpha is critical for granuloma maintenance that contains latent TB bacilli. Anti-TNF therapy disrupts granulomas, causing reactivation of latent tuberculosis.

**Q8:** What is the TPMT enzyme's relevance to azathioprine therapy?
> TPMT (thiopurine methyltransferase) metabolizes 6-MP. Patients with TPMT deficiency accumulate toxic thiopurine metabolites, leading to severe myelosuppression.

**Q9:** What prevents cyclophosphamide-induced hemorrhagic cystitis?
> Mesna (2-mercaptoethane sulfonate) - inactivates acrolein, the toxic metabolite that damages bladder urothelium.

**Q10:** Name three anti-TNF biologics.
> Infliximab (chimeric mAb), Adalimumab (fully human mAb), Etanercept (TNF receptor fusion protein).`,
        mnemonics: [],
        keyPoints: [
          "10 recall questions covering calcineurin/mTOR pathways, transplant protocols, and biologic safety",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 65", edition: "8th" },
        ],
      },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // MODULE 7 — ENDOCRINE PHARMACOLOGY (Topic 1 only)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // ─── Topic 1: Insulin & Oral Hypoglycemics ─────────────────
  {
    topicCode: "PH-MOD-07-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "insulin-oral-hypoglycemics-foundation",
        title: "Insulin & Oral Hypoglycemics - Foundation",
        estimatedMinutes: 20,
        summary:
          "Insulin is essential for Type 1 DM and advanced Type 2 DM. Oral hypoglycemics (metformin, sulfonylureas, DPP-4 inhibitors, SGLT2 inhibitors) are used for Type 2 DM. Metformin is the first-line drug worldwide. Understanding insulin types and oral agent mechanisms is critical.",
        contentMd: `# Insulin & Oral Hypoglycemics

## Insulin Preparations

| Type | Examples | Onset | Peak | Duration |
|------|---------|-------|------|----------|
| **Rapid-acting** | Lispro, Aspart, Glulisine | 15 min | 1 hr | 3-4 hr |
| **Short-acting** | Regular insulin (soluble) | 30 min | 2-3 hr | 6-8 hr |
| **Intermediate** | NPH (Isophane) | 2 hr | 6-8 hr | 12-18 hr |
| **Long-acting** | Glargine, Detemir | 2-4 hr | No peak | 20-24 hr |
| **Ultra-long** | Degludec | 1-2 hr | No peak | >42 hr |
| **Premixed** | 70/30 (NPH/Regular) | 30 min | Dual | 12-18 hr |

## Oral Hypoglycemic Classification

| Class | Drug | Mechanism |
|-------|------|-----------|
| **Biguanides** | Metformin | Activates AMPK, reduces hepatic glucose output |
| **Sulfonylureas** | Glimepiride, Gliclazide, Glipizide | Close K-ATP channels, stimulate insulin secretion |
| **Meglitinides** | Repaglinide, Nateglinide | Short-acting insulin secretagogues |
| **DPP-4 inhibitors (Gliptins)** | Sitagliptin, Vildagliptin | Prolong incretin (GLP-1) action |
| **SGLT2 inhibitors (Gliflozins)** | Dapagliflozin, Empagliflozin | Block renal glucose reabsorption |
| **GLP-1 receptor agonists** | Liraglutide, Semaglutide | Incretin mimetics |
| **Thiazolidinediones (Glitazones)** | Pioglitazone | PPAR-gamma agonist, insulin sensitizer |
| **Alpha-glucosidase inhibitors** | Acarbose, Voglibose | Delay carbohydrate digestion |

## Metformin - First-Line for Type 2 DM
- **Mechanism**: Activates AMP-activated protein kinase (AMPK)
- Reduces hepatic gluconeogenesis (primary)
- Increases peripheral glucose uptake
- Does NOT cause hypoglycemia (euglycemic agent)
- Additional benefits: weight neutral/loss, improved lipids, CV protection

> **Clinical Pearl**: Metformin is the most prescribed antidiabetic drug in India and globally. It is first-line for all Type 2 DM patients unless contraindicated. Available at Rs 1-2 per tablet in Jan Aushadhi stores.`,
        mnemonics: [
          {
            text: "Insulin types RINS: Rapid (Lispro, 15 min), Intermediate (NPH, 2 hr), Normal/Regular (30 min), Slow/Long (Glargine, no peak)",
            explanation:
              "Quick memory aid for insulin onset: Rapid acting starts in 15 min, Regular in 30 min, Intermediate (NPH) in 2 hours, and Long-acting (Glargine) provides peakless basal coverage.",
          },
          {
            text: "MET-for-MIN glucose: METformin MINimizes glucose output from liver (AMPK activation)",
            explanation:
              "Metformin's primary mechanism is reducing hepatic glucose production via AMPK activation. It does not cause hypoglycemia and is weight-neutral.",
          },
        ],
        keyPoints: [
          "Insulin: essential for T1DM; rapid-acting for meals, long-acting for basal coverage",
          "Glargine: peakless long-acting insulin (24-hour basal), given once daily",
          "Metformin: first-line T2DM, AMPK activator, does NOT cause hypoglycemia",
          "Sulfonylureas: close K-ATP channels, stimulate insulin release, risk of hypoglycemia",
          "SGLT2 inhibitors: block renal glucose reabsorption, CV and renal benefits",
          "DPP-4 inhibitors: prolong GLP-1 action, weight-neutral, well-tolerated",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 19 - Insulin & Oral Hypoglycemics", page: "258-285", edition: "8th" },
          { book: "Goodman & Gilman", chapter: "Ch 47 - Pancreatic Hormones", edition: "13th" },
        ],
      },
      {
        layer: 2,
        slug: "insulin-oral-hypoglycemics-mechanism",
        title: "Insulin & Oral Hypoglycemics - Mechanism",
        estimatedMinutes: 30,
        summary: "Detailed mechanisms of insulin signaling, sulfonylurea K-ATP channel physiology, incretin axis, and SGLT2 inhibitor renal pharmacology.",
        contentMd: `# Detailed Mechanisms

## Insulin Signaling
1. Insulin binds **insulin receptor** (receptor tyrosine kinase)
2. Autophosphorylation activates **IRS-1** (Insulin Receptor Substrate)
3. Activates **PI3K -> Akt/PKB** pathway
4. **GLUT4 translocation** to cell membrane (muscle, adipose)
5. Increased glucose uptake, glycogen synthesis, lipogenesis, protein synthesis

## Sulfonylurea Mechanism
1. Bind **SUR1 subunit** of K-ATP channels on beta-cell membrane
2. Close K-ATP channels -> membrane **depolarization**
3. Voltage-gated **Ca2+ channels** open
4. Ca2+ influx triggers **insulin exocytosis**
5. Work only if functional beta cells exist (ineffective in T1DM)

### Generations
| Generation | Drugs | Duration | Notes |
|-----------|-------|----------|-------|
| 1st | Tolbutamide, Chlorpropamide | Long | Chlorpropamide: SIADH, disulfiram reaction |
| 2nd | Glibenclamide (Glyburide), Gliclazide, Glipizide, Glimepiride | Moderate-Long | Glimepiride safest (less hypoglycemia) |

## Incretin Axis
- **GLP-1** (Glucagon-Like Peptide-1): released from L-cells of intestine after meals
- Effects: stimulates insulin, suppresses glucagon, delays gastric emptying, satiety
- Rapidly degraded by **DPP-4** (half-life ~2 min)

### DPP-4 Inhibitors (Gliptins)
- Inhibit DPP-4 enzyme, prolonging endogenous GLP-1 action
- Weight-neutral, low hypoglycemia risk
- Oral, once daily

### GLP-1 Receptor Agonists
- Synthetic GLP-1 analogues resistant to DPP-4 degradation
- **Liraglutide**: daily SC injection
- **Semaglutide**: weekly SC or oral (first oral GLP-1 RA)
- Cause **weight loss** (appetite suppression) and **CV benefit**

## SGLT2 Inhibitors (Gliflozins)
1. Block **SGLT2** (Sodium-Glucose Co-Transporter 2) in proximal tubule
2. SGLT2 normally reabsorbs ~90% of filtered glucose
3. Blocking SGLT2 causes **glycosuria** (glucose excreted in urine)
4. Insulin-independent mechanism (works regardless of beta-cell function)

### Additional Benefits
- **Weight loss** (calorie loss via glycosuria)
- **BP reduction** (osmotic diuresis, natriuresis)
- **CV protection**: reduced HF hospitalization, CV death (EMPA-REG, DAPA-HF)
- **Renal protection**: slows CKD progression (CREDENCE, DAPA-CKD)

### Risks
- **Genital mycotic infections** (candidiasis due to glycosuria)
- **Euglycemic DKA** (rare but serious, especially in T1DM)
- **Fournier's gangrene** (very rare, FDA warning)`,
        mnemonics: [
          {
            text: "SULFonylureas CLOSE K-ATP, OPEN Ca2+, SECRETE insulin: the channel cascade",
            explanation:
              "Sulfonylureas close K-ATP channels on beta cells, causing depolarization, opening voltage-gated calcium channels, and triggering insulin granule exocytosis.",
          },
          {
            text: "SGLT2i = Sugar Goes to Lavatory Too: glucose excreted in urine by blocking renal reabsorption",
            explanation:
              "SGLT2 inhibitors block glucose reabsorption in the kidney, causing glycosuria. This insulin-independent mechanism also provides weight loss, CV, and renal benefits.",
          },
        ],
        keyPoints: [
          "Insulin receptor: tyrosine kinase, PI3K-Akt pathway, GLUT4 translocation",
          "Sulfonylureas: close K-ATP channels (SUR1), Ca2+ influx triggers insulin release",
          "GLP-1: incretin hormone, stimulates insulin and suppresses glucagon; degraded by DPP-4",
          "SGLT2 inhibitors: cause glycosuria, weight loss, CV and renal protection",
          "Semaglutide: first oral GLP-1 RA, significant weight loss and CV benefit",
          "SGLT2i risks: genital infections, euglycemic DKA, Fournier's gangrene",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 19", page: "262-280", edition: "8th" },
          { book: "Goodman & Gilman", chapter: "Ch 47", edition: "13th" },
        ],
      },
      {
        layer: 3,
        slug: "insulin-oral-hypoglycemics-clinical",
        title: "Insulin & Oral Hypoglycemics - Clinical Application",
        estimatedMinutes: 20,
        summary: "Clinical management of Type 1 and Type 2 diabetes, insulin regimens, oral drug selection algorithm, and Indian diabetic care context.",
        contentMd: `# Clinical Applications

## Type 1 DM Management
- **Mandatory insulin** (no oral drug effective alone)
- **Basal-Bolus Regimen**: Long-acting (Glargine OD) + Rapid-acting (Lispro/Aspart before meals)
- Alternative: Premixed insulin (70/30 NPH/Regular) twice daily
- **Insulin pump**: continuous SC insulin infusion (CSII) for intensive control

## Type 2 DM - Stepwise Approach

### Step 1: Lifestyle + Metformin
- First-line for ALL T2DM patients (unless contraindicated)
- Start 500 mg OD, titrate to 2g/day in divided doses
- Contraindicated: eGFR <30, acute illness, liver failure, alcoholism (lactic acidosis risk)

### Step 2: Add Second Agent
- **If ASCVD/HF/CKD**: SGLT2 inhibitor (empagliflozin/dapagliflozin) or GLP-1 RA
- **If cost-concern**: Sulfonylurea (glimepiride cheapest)
- **If weight concern**: GLP-1 RA (weight loss) or SGLT2i
- **If hypoglycemia concern**: DPP-4 inhibitor (sitagliptin)

### Step 3: Triple Therapy or Insulin
- Add third oral agent or initiate basal insulin (Glargine at bedtime)

## Insulin in Indian Practice
- **Human insulin** (biosynthetic): widely available, affordable
- **Insulin analogues**: costlier but better pharmacokinetics
- **NPH + Regular premixed (70/30)**: most commonly prescribed in India
- **Pen devices**: improving compliance (NovoPen, FlexPen)
- **Storage**: insulin must be refrigerated (2-8 degrees C); in-use vial stable at room temp for 28 days

## Diabetic Emergencies

### Diabetic Ketoacidosis (DKA)
- **Regular insulin IV infusion**: 0.1 U/kg/hr
- Fluid resuscitation (normal saline)
- Potassium replacement (insulin drives K+ intracellularly)
- Monitor blood glucose hourly

### Hypoglycemia (Drug-Induced)
- Sulfonylureas (especially glibenclamide) and insulin are common causes
- Mild: oral glucose (15-20g) + recheck in 15 min
- Severe: IV dextrose (25-50 mL of 50% dextrose) or IM glucagon

> **Clinical Pearl**: India is the "diabetes capital of the world" with >77 million diabetics. RSSDI (Research Society for Study of Diabetes in India) guidelines recommend metformin first-line, with SGLT2i/GLP-1 RA preferred add-on for CV/renal benefit.`,
        mnemonics: [
          {
            text: "Metformin contraindications = LACE: Lactic acidosis risk, Alcoholism, CKD (eGFR <30), Extreme illness (acute)",
            explanation:
              "Metformin is contraindicated in conditions predisposing to lactic acidosis: severe renal impairment, alcoholism, acute illness with hypoxia/dehydration, and hepatic failure.",
          },
          {
            text: "DKA treatment = FIG-K: Fluids (NS), Insulin (regular IV), Glucose monitoring, K+ replacement",
            explanation:
              "Four pillars of DKA management: aggressive IV fluids (normal saline), regular insulin infusion, hourly glucose monitoring, and potassium replacement (insulin shifts K+ into cells).",
          },
        ],
        keyPoints: [
          "T1DM: basal-bolus insulin (glargine + rapid-acting before meals)",
          "T2DM: metformin first-line, add SGLT2i/GLP-1 RA if ASCVD/HF/CKD",
          "Metformin contraindicated: eGFR <30, lactic acidosis risk",
          "DKA: regular insulin IV + fluids + K+ replacement",
          "Sulfonylureas: cheapest add-on but risk hypoglycemia and weight gain",
          "India: 77 million diabetics, RSSDI guidelines for management",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 19", edition: "8th" },
          { book: "Harrison's", chapter: "Diabetes Mellitus", edition: "21st" },
        ],
      },
      {
        layer: 4,
        slug: "insulin-oral-hypoglycemics-exam",
        title: "Insulin & Oral Hypoglycemics - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield facts and comparisons for diabetes pharmacology.",
        contentMd: `# Exam High Yield

## One-Liners
- First-line drug for T2DM: **Metformin (AMPK activator)**
- Metformin does NOT cause: **Hypoglycemia (euglycemic)**
- Metformin feared ADR: **Lactic acidosis (rare but fatal)**
- Sulfonylurea mechanism: **Close K-ATP channels on beta cells**
- Longest-acting sulfonylurea: **Chlorpropamide (also causes SIADH)**
- Safest sulfonylurea in elderly: **Glipizide (short acting) or Gliclazide**
- DPP-4 inhibitor prolongs: **GLP-1 (incretin)**
- Oral GLP-1 RA: **Semaglutide (first oral)**
- SGLT2 inhibitor with CV benefit: **Empagliflozin (EMPA-REG trial)**
- Insulin for DKA: **Regular insulin IV infusion**
- Peakless long-acting insulin: **Glargine**
- Fastest-onset insulin: **Lispro/Aspart (15 min)**
- Insulin causing most weight gain: **NPH (intermediate)**
- Thiazolidinedione ADR: **Weight gain, edema, fractures, CHF**
- Alpha-glucosidase inhibitor: **Acarbose (delays carb absorption, flatulence)**

## Comparison: Oral Hypoglycemic Classes

| Feature | Metformin | Sulfonylurea | DPP-4i | SGLT2i | GLP-1 RA |
|---------|----------|-------------|--------|--------|----------|
| Mechanism | AMPK activator | K-ATP closure | Prolong GLP-1 | Block renal glucose reabs | Incretin mimetic |
| Hypoglycemia | No | Yes (+++) | No | No | No |
| Weight effect | Neutral/loss | Gain | Neutral | Loss | Loss |
| CV benefit | + | Neutral | Neutral | +++ | +++ |
| Renal benefit | - | - | - | +++ | + |
| Cost (India) | Very cheap | Cheap | Moderate | Expensive | Expensive |

## Previous Year Themes
- Insulin types and onset/duration comparison
- Metformin mechanism and contraindications
- Sulfonylurea mechanism (K-ATP channels)
- SGLT2 inhibitor CV/renal trials
- DKA management
- Incretin physiology (GLP-1, GIP)`,
        mnemonics: [
          {
            text: "SGLT2i benefits = WCRB: Weight loss, Cardioprotection, Renal protection, BP reduction",
            explanation:
              "SGLT2 inhibitors provide four key benefits beyond glucose lowering: weight loss from glycosuria-related calorie loss, cardiovascular protection, renal protection, and blood pressure reduction.",
          },
        ],
        keyPoints: [
          "Metformin: AMPK, no hypoglycemia, lactic acidosis risk, CI in eGFR <30",
          "Sulfonylureas: K-ATP channel closure, hypoglycemia and weight gain risks",
          "SGLT2i: glycosuria, CV + renal benefits, genital infections risk",
          "GLP-1 RA: weight loss + CV benefit, injectable (semaglutide also oral)",
          "DKA: regular insulin IV, fluids, K+ replacement",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 19", edition: "8th" },
        ],
      },
      {
        layer: 5,
        slug: "insulin-oral-hypoglycemics-recall",
        title: "Insulin & Oral Hypoglycemics - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-style Q&A for insulin and oral hypoglycemics.",
        contentMd: `# Active Recall

**Q1:** What is the first-line drug for Type 2 DM?
> Metformin - activates AMPK, reduces hepatic gluconeogenesis, does not cause hypoglycemia, weight-neutral/loss.

**Q2:** How do sulfonylureas stimulate insulin release?
> Bind SUR1 subunit of K-ATP channels on beta cells, closing the channel, causing membrane depolarization, Ca2+ influx via voltage-gated channels, and insulin exocytosis.

**Q3:** What is the difference between rapid-acting and long-acting insulin?
> Rapid (lispro/aspart): onset 15 min, duration 3-4 hr, used for prandial coverage. Long (glargine): onset 2-4 hr, peakless, duration 20-24 hr, used for basal coverage.

**Q4:** What are the extra-glycemic benefits of SGLT2 inhibitors?
> Weight loss, blood pressure reduction, cardiovascular protection (reduced HF hospitalization, CV death), and renal protection (slowed CKD progression).

**Q5:** What is the incretin effect?
> Oral glucose produces a greater insulin response than IV glucose (same plasma glucose). This is due to gut hormones GLP-1 and GIP that enhance insulin secretion. DPP-4 degrades these incretins.

**Q6:** Why is metformin contraindicated in severe renal impairment?
> Metformin is renally excreted unchanged. In severe CKD (eGFR <30), it accumulates, increasing risk of lactic acidosis.

**Q7:** What insulin is used for DKA management?
> Regular (soluble) insulin by continuous IV infusion at 0.1 U/kg/hr, with hourly blood glucose monitoring.

**Q8:** What is the feared complication of SGLT2 inhibitors?
> Euglycemic DKA (diabetic ketoacidosis with normal blood glucose). Also genital mycotic infections and rarely Fournier's gangrene.

**Q9:** Name the oral GLP-1 receptor agonist.
> Semaglutide (oral formulation). Most GLP-1 RAs are injectable (liraglutide, exenatide, dulaglutide).

**Q10:** Why are sulfonylureas risky in elderly patients?
> Risk of prolonged hypoglycemia (especially with long-acting agents like glibenclamide). Elderly have impaired counter-regulatory mechanisms. Prefer short-acting agents (glipizide, gliclazide).

**Q11:** What is pioglitazone's mechanism?
> PPAR-gamma agonist (nuclear receptor) that improves insulin sensitivity in adipose tissue and muscle. ADRs: weight gain, edema, fractures, bladder cancer concern.

**Q12:** What are the landmark trials for SGLT2 inhibitors?
> EMPA-REG OUTCOME (empagliflozin - CV death reduction), DAPA-HF (dapagliflozin - HF benefit), CREDENCE/DAPA-CKD (renal protection).`,
        mnemonics: [],
        keyPoints: [
          "12 recall questions covering insulin types, oral hypoglycemic mechanisms, SGLT2i trials, and clinical management",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 19", edition: "8th" },
        ],
      },
    ],
  },
];
