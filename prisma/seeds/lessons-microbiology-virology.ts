import type { TopicLessons } from "./content-loader";

export const microbiologyVirologyLessons: TopicLessons[] = [
  {
    topicCode: "MI-MOD-05-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "general-virology-layer-1-foundation",
        title: "General Virology - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of viral structure, genome organization, classification (DNA/RNA, enveloped/non-enveloped), replication strategies, and host cell interactions.",
        contentMd: `# General Virology: Foundations

## Viral Structure & Organization
- **Genome**: DNA or RNA (single/double-stranded)
- **Capsid**: Protein shell (icosahedral, helical, complex)
- **Envelope**: Lipid bilayer with viral glycoproteins (derived from host)
- **Enzymes**: Polymerases, reverse transcriptase, proteases
- **Tropism**: Determined by receptor expression on host cells`,
        mnemonics: [
          { text: "DNA RNA Classification", explanation: "dsDNA (herpes), ssDNA (parvo), +RNA (polio), -RNA (flu)" },
          { text: "Enveloped = Fragile", explanation: "Lipid sensitive to heat/soap; non-enveloped tough protein capsid" }
        ],
        keyPoints: [
          "Viruses: genome + capsid + (envelope) + enzymes",
          "Replication: Attachment → Penetration → Uncoating → Replication → Assembly → Release",
          "Enveloped sensitive; non-enveloped resistant (fecal-oral stable)",
          "+RNA = mRNA; -RNA = needs RdRp; retroviruses = reverse transcriptase"
        ],
        textbookRefs: [
          { book: "Jawetz Melnick & Adelberg's Medical Microbiology", chapter: "32-34: Viral Structure", edition: "28th" }
        ]
      },
      {
        layer: 2,
        slug: "general-virology-layer-2-mechanism",
        title: "General Virology - Mechanism",
        estimatedMinutes: 25,
        summary: "RNA-dependent RNA polymerase kinetics, reverse transcriptase, integration, viral recombination and reassortment.",
        contentMd: `# Viral Replication Mechanisms

## RdRp Error Rates & Quasispecies
- **RNA viruses**: 10^-3 to 10^-5 per base (no proofreading)
- **DNA viruses**: 10^-9 per base (polymerase has 3'→5' exonuclease)
- **Consequence**: Rapid evolution, antigenic escape, resistance mutations

## Reverse Transcriptase (HIV)
- **Two functions**: RNA→DNA + DNA→DNA synthesis
- **Error rate**: 10^-4 to 10^-5 (high, enables resistance)
- **Integration**: Integrase inserts DNA into chromosome as provirus
- **Persistence**: Latent reservoirs survive antivirals`,
        mnemonics: [
          { text: "RdRp ERROR-PRONE", explanation: "RNA polymerase: 10^-3 to 10^-5 (high); DNA polymerase: 10^-9 (low)" }
        ],
        keyPoints: [
          "RNA viruses mutate faster (quasispecies); DNA viruses more stable",
          "RT: reverse transcriptase in retroviruses; integrase for chromosome insertion",
          "Reassortment: segmented viruses co-infect → novel combinations (influenza pandemic)"
        ],
        textbookRefs: [
          { book: "Jawetz Melnick & Adelberg's Medical Microbiology", chapter: "32-34: Mechanisms", edition: "28th" }
        ]
      },
      {
        layer: 3,
        slug: "general-virology-layer-3-clinical",
        title: "General Virology - Clinical",
        estimatedMinutes: 30,
        summary: "Diagnostics (PCR, serology, antigen), antiviral classes, vaccines (live-attenuated, inactivated, mRNA).",
        contentMd: `# Diagnosis & Treatment

## Diagnostic Methods
- **PCR/RT-PCR**: Gold standard (sensitive, specific); 4-24 hour turnaround
- **Antigen Detection**: Fast (rapid tests <30 min); less sensitive (70-90%)
- **Serology**: IgM (acute), IgG (past/chronic); delayed appearance
- **Culture**: Slow (days-weeks); rarely used now

## Antiviral Drug Classes
- **NRTI/NtRTI**: Block RT (HIV); chain terminators; low barrier to resistance
- **NNRTI**: Non-competitive RT inhibitor (HIV); single mutation = resistance
- **PI**: Protease inhibitor (HIV, HCV); high barrier to resistance
- **INSTI**: Integrase inhibitor (HIV); high barrier; well-tolerated
- **NAI**: Neuraminidase inhibitor (influenza); <48h most effective
- **RdRp Inhibitors**: Remdesivir (broad -RNA viruses)

## Vaccines
- **Live-attenuated**: Strong immunity; lifelong protection; contraindicated immunocompromised
- **Inactivated**: Safe; weaker immunity; boosters needed
- **mRNA**: Rapid production; strong immunity; requires cold storage initially`,
        mnemonics: [
          { text: "PCR = Gold Standard", explanation: "Most sensitive/specific for viral diagnosis" },
          { text: "Live = Strong; Inactivated = Safe", explanation: "Live vaccines stronger but risky in immunocompromised" }
        ],
        keyPoints: [
          "PCR most sensitive; serology delayed; antigen detection fast but less sensitive",
          "Combination antivirals reduce resistance (multiple targets)",
          "Antiviral efficacy time-dependent (early is better)",
          "Enveloped viruses fragile; non-enveloped stable",
          "Live vaccines contraindicated in immunocompromised"
        ],
        textbookRefs: [
          { book: "Jawetz Melnick & Adelberg's Medical Microbiology", chapter: "35-36: Diagnosis & Treatment", edition: "28th" }
        ]
      },
      {
        layer: 4,
        slug: "general-virology-layer-4-exam",
        title: "General Virology - Exam Prep",
        estimatedMinutes: 25,
        summary: "High-yield facts on classification, diagnostics, antivirals, vaccines, and treatment timing.",
        contentMd: `# Exam High-Yield Summary

## Diagnostic Algorithm
- Respiratory fever: Rapid antigen/PCR (influenza, COVID)
- Diarrhea: Rotavirus ELISA or Norovirus PCR
- Fever + rash: Dengue NS1 + IgM serology
- Fever + CNS: CSF IgM serology or RT-PCR

## Antiviral Efficacy Timing
- Influenza: <48h (60% duration reduction)
- COVID Paxlovid: <5 days (high-risk)
- HIV: Anytime (test-and-treat)
- HCV DAAs: Anytime (8-12 weeks cure)

## Vaccine Types & Duration
- Live-attenuated (measles): 97% efficacy, lifelong immunity
- Inactivated (polio IPV): >95%, boosters needed
- mRNA (COVID): 90-95% vs severe, waning at 1 year
- Recombinant (Hep B): 95%, revaccinate at 30+ years`,
        mnemonics: [
          { text: "Enveloped = Fragile; Non-enveloped = Tough", explanation: "Lipid envelope sensitive; protein capsid resistant" },
          { text: "RNA Virus Error: 10^-3; DNA Virus: 10^-9", explanation: "RNA much higher mutation rate" }
        ],
        keyPoints: [
          "PCR gold standard; antigen detection rapid; serology for past infection",
          "Combination antivirals always better than monotherapy",
          "Early treatment most effective for many viruses",
          "Live vaccines strong but risky in immunocompromised",
          "Enveloped viruses fragile (heat, drying, detergent)",
          "Non-enveloped viruses stable in GI tract (fecal-oral)"
        ],
        textbookRefs: [
          { book: "Jawetz Melnick & Adelberg's Medical Microbiology", chapter: "32-36: Summary", edition: "28th" }
        ]
      },
      {
        layer: 5,
        slug: "general-virology-layer-5-active-recall",
        title: "General Virology - Active Recall",
        estimatedMinutes: 20,
        summary: "Q&A on viral classification, diagnostics, antivirals, and vaccines.",
        contentMd: `# Active Recall Q&A

**Q1:** What are the six steps of viral replication?
**A1:** Attachment → Penetration → Uncoating → Replication → Assembly → Release

**Q2:** Why do RNA viruses mutate faster than DNA viruses?
**A2:** RdRp error rate 10^-3 to 10^-5 (no proofreading); DNA polymerase 10^-9 (with exonuclease)

**Q3:** What is antigenic drift vs shift?
**A3:** Drift = point mutations yearly; Shift = reassortment in co-infection (pandemic)

**Q4:** Why are enveloped viruses fragile?
**A4:** Lipid bilayer sensitive to heat, drying, detergents, alcohols

**Q5:** How do protease inhibitors work?
**A5:** Block viral protease → prevent polyprotein cleavage → immature non-infectious virions

**Q6:** When are neuraminidase inhibitors most effective for influenza?
**A6:** Within 48 hours of symptom onset (~60% duration reduction)

**Q7:** Why is combination ART superior to monotherapy for HIV?
**A7:** Multiple drugs target different mechanisms → resistance to one doesn't compromise others

**Q8:** What is the difference between live and inactivated vaccines?
**A8:** Live: weakened virus, strong immunity, lifelong protection, contraindicated immunocompromised; Inactivated: killed virus, safe, weaker immunity, boosters needed

**Q9:** How do mRNA vaccines work?
**A9:** Lipid nanoparticles deliver mRNA encoding viral spike protein; host ribosomes translate into antigen

**Q10:** What is a viral quasispecies?
**A10:** Population of related viral variants arising from high RdRp error rate; enables immune escape and resistance`,
        mnemonics: [],
        keyPoints: [
          "6 steps: Attachment → Penetration → Uncoating → Replication → Assembly → Release",
          "RNA error 10^-3 to 10^-5; DNA error 10^-9 (much lower)",
          "Drift yearly; Shift pandemic potential (reassortment)",
          "Enveloped fragile; non-enveloped tough",
          "PI blocks protease; NRTI blocks RT; INSTI blocks integrase",
          "Early treatment most effective; combination therapy reduces resistance",
          "Live vaccines strong but risky; inactivated safe but weaker"
        ],
        textbookRefs: [
          { book: "Jawetz Melnick & Adelberg's Medical Microbiology", chapter: "32-36: Review", edition: "28th" }
        ]
      }
    ]
  }
];
