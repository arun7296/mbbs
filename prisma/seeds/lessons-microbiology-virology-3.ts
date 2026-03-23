import type { TopicLessons } from "./content-loader";

export const microbiologyVirologyLessons3: TopicLessons[] = [
  {
    topicCode: "MI-MOD-05-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "hiv-retroviruses-layer-1-foundation",
        title: "HIV & Retroviruses - Foundation",
        estimatedMinutes: 25,
        summary: "HIV structure, genome, replication, epidemiology, CD4 decline, and opportunistic infections.",
        contentMd: `# HIV & Retroviruses - Foundation

## Retrovirus Structure
- Enveloped ssRNA+ (diploid genome)
- Reverse transcriptase (RT), integrase, protease
- gp120 (CD4 binding), gp41 (fusion)
- Integration into host chromosome as provirus

## HIV Replication Cycle (9 Steps)
1. Attachment (gp120→CD4)
2. Co-receptor binding (CCR5/CXCR4)
3. Fusion (gp41-mediated)
4. Entry (endocytosis/fusion)
5. Reverse transcription (RNA→DNA)
6. Nuclear import
7. Integration (integrase)
8. Transcription (host RNA pol II)
9. Translation & assembly

## CD4+ Count & OI Thresholds
- **<200**: PCP, toxo, candidiasis
- **<100**: CMV, cryptococcal
- **<50**: MAC, CMV colitis, CNS lymphoma

## Indian Epidemiology
- ~2.3 million PLHIV (3rd largest, 2% adult population)
- Heterosexual 80-90%; MSM 5-10%; IVDU 5-10%
- Free ART via NACO (ICTC centers)
- Genotypes: B predominant`,
        mnemonics: [
          { text: "gp120-gp41 Attachment & Fusion", explanation: "120=binds CD4, 41=causes fusion" },
          { text: "CD4 OI CLOCK", explanation: "200=PCP, 100=CMV, 50=MAC" }
        ],
        keyPoints: [
          "HIV diploid ssRNA+ with RT/integrase/protease",
          "Integration creates persistent infection; latent reservoirs",
          "CD4 decline ~50/year without treatment",
          "AIDS defined CD4 <200 + OI",
          "India: heterosexual transmission 80-90%"
        ],
        textbookRefs: [
          { book: "Jawetz Melnick & Adelberg's Medical Microbiology", chapter: "44: HIV", edition: "28th" }
        ]
      },
      {
        layer: 2,
        slug: "hiv-retroviruses-layer-2-mechanism",
        title: "HIV & Retroviruses - Mechanism",
        estimatedMinutes: 30,
        summary: "Reverse transcription, integration, immune evasion (Nef protein, antigenic variation), and CD4+ depletion pathophysiology.",
        contentMd: `# HIV Molecular Mechanisms

## Reverse Transcription
- RT (p66 + p51): No proofreading; error rate 10^-4 to 10^-5
- RNA degradation (RNase H); cDNA synthesis
- High mutation rate enables quasispecies, escape from immune/antivirals

## Integration
- Integrase catalyzes insertion into host chromosome
- Pre-integration complex (PIC) with Vpr, MA, IN
- Provirus (9.7 kb) transcribed by host RNA pol II
- Multiple integrations per cell possible

## Immune Evasion (Nef, Tat, Vif, Vpu)
- **Nef**: Downregulates CD4/MHC-I; activates bystander apoptosis
- **Tat**: Activates LTR; induces Tregs (immunosuppression)
- **Vif**: Inactivates APOBEC3G (host antiviral)
- **Vpu**: Downregulates CD4, tetherin (BST2)

## CD4+ Depletion Mechanisms
- **Direct lytic infection**: Productively infected cells die
- **Bystander apoptosis**: gp120-CD4 binding without infection triggers death
- **Syncytia formation**: Fusion of infected+uninfected cells
- **Thymic depletion**: Loss of CD4+ production
- **Chronic activation**: Continuous turnover, apoptosis

## Latent Reservoirs
- Resting CD4+ T cells, macrophages, lymphoid tissue
- Size: ~1-10 million cells; half-life 14 months
- Provirus persists despite ART; rebound in weeks if stopped`,
        mnemonics: [
          { text: "RT-Error Rate = Resistance", explanation: "R=RNA-dependent, E=Error (10^-4), R=Rapid resistance" },
          { text: "Nef = NEF (Negative Factor)", explanation: "N=Downregulates CD4/MHC, E=Enables bystander death" }
        ],
        keyPoints: [
          "RT high error rate (10^-4 to 10^-5); no proofreading",
          "Integration creates persistent infection",
          "Nef downregulates CD4/MHC-I; promotes apoptosis",
          "CD4 loss: direct lysis, bystander apoptosis, syncytia, chronic activation",
          "Latent reservoirs 1-10M cells; persist despite ART"
        ],
        textbookRefs: [
          { book: "Jawetz Melnick & Adelberg's Medical Microbiology", chapter: "44: Mechanisms", edition: "28th" }
        ]
      },
      {
        layer: 3,
        slug: "hiv-retroviruses-layer-3-clinical",
        title: "HIV & Retroviruses - Clinical",
        estimatedMinutes: 35,
        summary: "ARS, asymptomatic phase, AIDS OIs, ART regimens, TB-HIV, IRIS, and Indian management context.",
        contentMd: `# HIV Clinical Management

## Acute Retroviral Syndrome (ARS)
- Window period (days 1-30); p24 antigen detectable before antibodies
- Fever, rash, lymphadenopathy, myalgia
- High infectivity; VL >100,000 copies/mL
- Diagnosis: p24 antigen or HCV RNA (gold standard)

## Asymptomatic Phase (Clinical Latency)
- Average 10 years without treatment
- CD4 decline ~50-100/year
- Infectious throughout despite asymptomatic

## AIDS (CD4 <200)
- **PCP**: TMP-SMX prophylaxis if <200
- **Toxo**: CD4 <100; dapsone + pyrimethamine
- **MAC**: CD4 <50; azithromycin 1200mg weekly
- **CMV**: CD4 <50; retinitis, colitis
- **Cryptococcal**: Meningitis; amphotericin B + fluconazole

## ART Regimens (NACO India)
- **First-line TLD**: Tenofovir/Lamivudine/Dolutegravir (preferred)
- **Alternative**: EFV-based (older, more side effects)
- **Start immediately**: Test-and-treat strategy
- **Target**: VL <50 copies/mL (undetectable = untransmittable)

## TB-HIV Coinfection
- TB is highest OI in India (26x risk)
- TB first 2 weeks, then ART (avoid overlap)
- Rifampicin induces PI/NNRTI metabolism; use DTG
- TB-IRIS common; manage with corticosteroids if severe

## IRIS (Immune Reconstitution Inflammatory Syndrome)
- Paradoxical worsening with CD4 recovery (2-8 weeks post-ART)
- TB-IRIS, MAC-IRIS, CMV-IRIS common
- Manage: Continue ART; add corticosteroids if severe

## Drug Resistance
- **NRTI**: M184V (lamivudine), TAMs (thymidine analogues)
- **NNRTI**: K103N, Y181C (single mutation = resistance)
- **PI**: Multiple mutations required (high barrier)
- **INSTI**: R263K, R138K (rare; very high barrier)`,
        mnemonics: [
          { text: "ARS = Acute Retroviral Syndrome Triad", explanation: "A=Acute (days 1-30), R=Rash, S=Symptoms (fever, lymph)" },
          { text: "TLD = Tenofovir-Lamivudine-Dolutegravir", explanation: "T=NRTI, L=NRTI, D=INSTI; India first-line" },
          { text: "TB-ART Timing", explanation: "TB first 2 weeks, then ART; DTG (less RF interaction)" }
        ],
        keyPoints: [
          "ARS: High VL (>100,000), p24 antigen diagnostic",
          "Asymptomatic: 10 years average; infectious throughout",
          "AIDS OIs: CD4 <200 PCP, <100 toxo/crypto, <50 MAC/CMV",
          "TLD: Preferred India; high barrier INSTI; well-tolerated",
          "TB-HIV: TB first, ART after 2 weeks; DTG preferred",
          "IRIS: Expected low CD4 start; manage with corticosteroids"
        ],
        textbookRefs: [
          { book: "Jawetz Melnick & Adelberg's Medical Microbiology", chapter: "44: Clinical Disease", edition: "28th" }
        ]
      },
      {
        layer: 4,
        slug: "hiv-retroviruses-layer-4-exam",
        title: "HIV & Retroviruses - Exam Prep",
        estimatedMinutes: 30,
        summary: "High-yield facts, CD4 thresholds, resistance patterns, treatment algorithms, and India context.",
        contentMd: `# HIV Exam High-Yield

## CD4 OI Thresholds Quick
| CD4 | OI | Prophylaxis |
|-----|----|----|
| **<200** | PCP | TMP-SMX |
| **<100** | Toxo, Crypto | Dapsone+Pyrimethamine |
| **<50** | MAC, CMV | Azithromycin |

## Resistance Patterns
- **NNRTI**: Single mutation sufficient (K103N)
- **INSTI**: Very high barrier (R263K rare)
- **PI**: Multiple mutations needed
- **NRTI**: M184V (lamivudine quick)

## Treatment Algorithms
- **First-line**: TLD (tenofovir/lamivudine/dolutegravir)
- **Second-line (Failure)**: PI-based (lopinavir/ritonavir)
- **Always combination**: 2+ new agents if resistance

## Rapid Facts
- **ARS incidence**: ~70% of acute infections
- **Asymptomatic duration**: 10 years average
- **CD4 decline**: 50-100 cells/year
- **VL production**: 10^9-10^10 virions daily
- **Latent reservoir**: 1-10 million cells, 14-month half-life
- **U=U**: Undetectable <50 = untransmittable
- **TB-HIV**: 26x higher TB risk; most common OI India`,
        mnemonics: [
          { text: "CD4 OI CLOCK", explanation: "C=CD4 200 (PCP), L=Low <100 (toxo), O=Or <50 (MAC), C=CD4 dependent, K=Know thresholds" },
          { text: "NNRTI single; PI multiple mutations", explanation: "N=Single mutation (K103N) = resistance; P=Multiple needed" }
        ],
        keyPoints: [
          "ARS: Window period, p24 diagnostic, high VL",
          "CD4 <200: PCP risk; <100: toxo/crypto; <50: MAC/CMV",
          "TLD: Preferred first-line, single tablet, high barrier",
          "NNRTI resistance: Single mutation (K103N) sufficient",
          "TB-ART timing: TB 2 weeks first, then ART",
          "U=U: Undetectable VL (<50) = untransmittable"
        ],
        textbookRefs: [
          { book: "Jawetz Melnick & Adelberg's Medical Microbiology", chapter: "44: Summary", edition: "28th" }
        ]
      },
      {
        layer: 5,
        slug: "hiv-retroviruses-layer-5-active-recall",
        title: "HIV & Retroviruses - Active Recall",
        estimatedMinutes: 25,
        summary: "Case-based Q&A on diagnostics, management, complications, and treatment resistance.",
        contentMd: `# Active Recall Q&A

**Q1:** 28-year-old with fever, rash, sore throat, lymphadenopathy × 2 weeks. Rapid HIV negative; p24 antigen positive. Diagnosis?
**A1:** ARS (acute retroviral syndrome); window period; confirm with HIV RNA; start ART immediately

**Q2:** CD4=45, VL=250,000 on ART × 6 months. Assessment?
**A2:** Virological failure; assess adherence; check resistance; likely need regimen switch

**Q3:** CD4=150, fever, bilateral infiltrates CXR, cough × 2 weeks. Diagnosis?
**A3:** PCP (Pneumocystis pneumonia); TMP-SMX therapy; CD4 <200 PCP risk; prophylaxis with ART

**Q4:** Patient with TB + HIV (CD4=120). Timing for ART?
**A4:** TB therapy first (2 weeks), then ART; DTG-based (less RF interaction); watch for TB-IRIS

**Q5:** HEV RT-positive, EFV-resistant (K103N mutation). Next regimen?
**A5:** Switch to INSTI-based (dolutegravir) with retained NRTIs; K103N = cross-resistant to EFV/ETR

**Q6:** CD4=400, asymptomatic, VL <50 on TLD × 6 months. Any changes needed?
**A6:** Continue ART; recheck CD4 in 3-6 months; no OI prophylaxis needed; virological success

**Q7:** MSM requesting PrEP (negative HIV, CD4=650). Counseling?
**A7:** PrEP indicated high-risk; TDF/FTC daily; baseline STI/HIV; repeat testing 4 weeks (exclude window); effectiveness >90%

**Q8:** Pregnant woman CD4=150, wants delivery plan. Counseling?
**A8:** Suppress VL <50 by delivery; TLD safe pregnancy; vaginal delivery if VL <1000; infant prophylaxis + formula feeding

**Q9:** CD4=25 patient develops flaccid paralysis feet, CSF lymphocytic, normal glucose. Diagnosis?
**A9:** Likely vacuolar myelopathy or CMV polyradiculomyelitis; CD4 <50 risk; consider CMV colitis/retinitis workup

**Q10:** Positive rapid HIV, negative P24, negative RNA. Interpretation?
**A10:** Likely false positive (no confirmatory test positive); repeat different assay; not diagnostic for HIV`,
        mnemonics: [],
        keyPoints: [
          "ARS: Window period, p24 diagnostic before antibodies, high VL",
          "CD4=45: MAC/CMV/CRY risk; MAC prophylaxis; CD4 <200 PCP",
          "TB-ART timing: TB first 2 weeks; DTG preferred (less RF)",
          "NNRTI resistance: K103N = cross-resistant to EFV/ETR/RPV",
          "Pregnancy: VL <50 at delivery <1% MTCT; infant prophylaxis",
          "PrEP: TDF/FTC daily, HIV test 4 weeks (confirm not in window)"
        ],
        textbookRefs: [
          { book: "Jawetz Melnick & Adelberg's Medical Microbiology", chapter: "44: Case Review", edition: "28th" }
        ]
      }
    ]
  }
];
