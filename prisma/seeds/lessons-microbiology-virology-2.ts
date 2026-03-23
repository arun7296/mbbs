import type { TopicLessons } from "./content-loader";

export const microbiologyVirologyLessons2: TopicLessons[] = [
  {
    topicCode: "MI-MOD-05-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "hepatitis-viruses-layer-1-foundation",
        title: "Hepatitis Viruses - Foundation",
        estimatedMinutes: 25,
        summary: "Overview of HAV, HBV, HCV, HDV, HEV. Classification, transmission, epidemiology, chronicity patterns.",
        contentMd: `# Hepatitis Viruses - Foundation

## Classification Table
| Virus | Type | Transmission | Chronic | Vaccine |
|-------|------|------------|---------|---------|
| **HAV** | +RNA | Fecal-oral | No | Yes |
| **HBV** | dsDNA | Blood/sexual | 5-10% | Yes |
| **HCV** | +RNA | Blood | 85% | No |
| **HDV** | -RNA | Blood | Requires HBV | No |
| **HEV** | +RNA | Fecal-oral | No (chronic in immunocompromised) | Developing |

## HAV (Acute Only)
- Non-enveloped +RNA (picornavirus)
- Fecal-oral transmission (contaminated food/water)
- Incubation: 30-50 days
- IgM appears at jaundice; IgG persists (lifetime immunity)
- Self-limited; no chronicity

## HBV (Chronic Risk)
- Enveloped dsDNA (hepadnavirus); uses reverse transcriptase
- Blood, sexual, vertical transmission (85-90% if peripartum)
- Incubation: 45-180 days
- Chronic: 5-10% adults, 85-90% if <5 years
- HBsAg+ = infection; HBeAg+ = high infectivity

## HCV (High Chronicity)
- Enveloped +RNA (flavivirus)
- Bloodborne only (IVDU, transfusion)
- Incubation: 14-180 days
- Chronic: 85% (15% spontaneously clear)
- 6 genotypes; genotype 3 in India

## HDV (Defective)
- Requires HBV for replication
- Co-infection (with HBV) vs superinfection (after chronic HBV)
- Superinfection higher risk fulminant hepatitis

## HEV (Severe in Pregnancy)
- +RNA (hepevirus); 4 genotypes
- Fecal-oral; endemic India (genotype 1)
- Pregnancy: 15-25% mortality (unknown mechanism)
- Monsoon epidemics in India`,
        mnemonics: [
          { text: "HAV-BCDe Routes", explanation: "H=HAV fecal, B=Blood (HBV/HCV), C=Co/superinfection (HDV), D=Defective (HDV), e=High infectivity if present" },
          { text: "Chronic: HBV 5-10%, HCV 85%", explanation: "HBV mostly clear; HCV mostly chronic" }
        ],
        keyPoints: [
          "HAV: Acute only, fecal-oral, vaccine available",
          "HBV: Enveloped dsDNA, blood/sexual, chronic 5-10%, HBeAg = infectivity",
          "HCV: Bloodborne only, chronic 85%, genotype-dependent treatment",
          "HDV: Defective, requires HBV, can cause fulminant disease",
          "HEV: Fecal-oral, severe pregnancy (15-25% mortality), endemic India"
        ],
        textbookRefs: [
          { book: "Jawetz Melnick & Adelberg's Medical Microbiology", chapter: "39: Hepatitis Viruses", edition: "28th" }
        ]
      },
      {
        layer: 2,
        slug: "hepatitis-viruses-layer-2-mechanism",
        title: "Hepatitis Viruses - Mechanism",
        estimatedMinutes: 30,
        summary: "HBV cccDNA persistence, HCV quasispecies, ADE in dengue (not hepatitis), immune evasion, fibrosis pathogenesis.",
        contentMd: `# Hepatitis Virus Pathophysiology

## HBV Persistence
- **cccDNA**: Covalent closure circular DNA in nucleus; persists despite therapy
- **Integration**: Viral DNA integrates into chromosome; reactivation possible
- **T-cell exhaustion**: PD-1 upregulation on virus-specific CD8+ cells
- **CD4+ helper dysfunction**: Reduced IL-2 production by CD4+ cells

## HCV Immune Evasion
- **Quasispecies**: High error rate (10^-3) creates diverse viral populations
- **NS5A**: Blocks PKR (interferon-induced kinase)
- **NS3 Protease**: Cleaves IFN signaling proteins
- **E1/E2 glycoprotein variation**: Antigenic drift escapes antibodies
- **Weak CD8+ response**: Tolerogenic dendritic cells

## HAV Clearance (No Persistence)
- **Vigorous CD8+ response**: Effective viral clearance
- **Viral determinants**: HAV capsid prevents persistent infection
- **Result**: Self-limited; antibodies prevent reinfection

## HEV Chronic Infection
- **Immunocompromised only**: CD4 <200, transplant recipients
- **Pregnancy**: Immune tolerance (Th2 shift) enables prolonged replication
- **Mechanism**: Unknown; placental damage possible

## Fibrosis Progression (HBV, HCV)
- **Stellate cell activation**: HSCs transform to myofibroblasts
- **TGF-β signaling**: Fibrogenic cytokine axis
- **Steatosis**: HCV core protein induces hepatic fat (worsens fibrosis)
- **Stages**: 0 (none) → 4 (cirrhosis)`,
        mnemonics: [
          { text: "HBV cccDNA = Durable Despite Drugs", explanation: "Episomal cccDNA nucleus; persists, reactivation risk" },
          { text: "HCV = Quasispecies Escape", explanation: "High mutation rate; antigenic variation; weak CD8 response" }
        ],
        keyPoints: [
          "HBV: cccDNA nucleus persistence; integrated genome; T-cell exhaustion",
          "HCV: Quasispecies from high error rate; NS proteins evade IFN",
          "HAV: No persistence mechanisms; vigorous CD8+ response",
          "HEV: Chronic in immunocompromised; pregnancy severe (unknown why)",
          "Fibrosis: Stellate cell activation; TGF-β; steatosis (HCV)"
        ],
        textbookRefs: [
          { book: "Jawetz Melnick & Adelberg's Medical Microbiology", chapter: "39: Mechanisms", edition: "28th" }
        ]
      },
      {
        layer: 3,
        slug: "hepatitis-viruses-layer-3-clinical",
        title: "Hepatitis Viruses - Clinical",
        estimatedMinutes: 35,
        summary: "Acute hepatitis presentations, DHF/DSS management, cirrhosis complications, HCC, diagnostic serology, and Indian context.",
        contentMd: `# Clinical Presentations & Management

## Acute Hepatitis Features (All Types)
- **Prodrome**: Fatigue, anorexia, malaise, myalgia (1-2 weeks)
- **Icteric phase**: Jaundice, dark urine, pale stools, pruritus
- **Labs**: ALT>AST, elevated bilirubin, ALP mild elevation

## HAV (Acute Only)
- **Symptoms**: More prominent than HBV; RUQ tenderness common
- **Duration**: 2-6 weeks; complete recovery
- **Fulminant**: Rare (<0.1%); higher if chronic liver disease
- **Diagnosis**: IgM anti-HAV (gold standard)

## HBV (Acute & Chronic)
- **Acute**: 30% asymptomatic; chronic 5-10% in adults
- **HBeAg+**: High infectivity marker
- **Phases chronic**: Immune tolerant → immune reactive → inactive carrier
- **HCC risk**: Even without cirrhosis (HBx protein oncogenic)
- **Diagnosis**: HBsAg+, IgM anti-HBc (acute); HBeAg indicates viremia

## HCV (Chronic Majority)
- **Acute**: 70-80% asymptomatic; alanine aminotransferase modest elevation
- **Chronic**: 85%; genotype 3 in India
- **Natural history**: ~20% to cirrhosis 20 years (faster if age >40, alcohol, male)
- **Treatment**: DAAs (sofosbuvir-based) 8-12 weeks; 95-99% SVR
- **Diagnosis**: Anti-HCV+, HCV RNA (gold standard)

## Cirrhosis Complications
- **Variceal bleeding**: Endoscopic banding; mortality ~30%
- **Ascites**: Sodium avidity, hypoalbuminemia
- **Hepatic encephalopathy**: Ammonia accumulation
- **Hepatorenal syndrome**: Progressive renal failure; poor prognosis
- **Spontaneous bacterial peritonitis**: Ascitic fluid infection; mortality ~50%

## HCC (Hepatocellular Carcinoma)
- **Risk factors**: Chronic HBV (even non-cirrhotic), HCV cirrhosis (F4), cirrhosis any etiology
- **Diagnosis**: Imaging (CT/MRI arterial enhancement) + AFP >400 ng/mL
- **Screening**: Annual for cirrhotic patients; ultrasound ± AFP
- **Treatment**: Resection, TACE, sorafenib, transplant

## Serology Interpretation
| HAV | HBV | HCV | Meaning |
|-----|-----|-----|---------|
| IgM+ | - | - | Acute HAV |
| IgG+ | - | - | Past HAV, immune |
| - | HBsAg+, IgM anti-HBc+ | - | Acute HBV |
| - | HBsAg+, anti-HBc+ | - | Chronic HBV |
| - | Anti-HBs+ | - | Past HBV, immune |
| - | - | Anti-HCV+, HCV RNA+ | Chronic HCV |
| - | - | Anti-HCV+, HCV RNA- | Past/cleared HCV |

## India-Specific Epidemiology
- **HAV**: Endemic; monsoon peaks; high child exposure
- **HBV**: Intermediate (2-4% HBsAg); vaccine now universal
- **HCV**: 0.5-1% prevalence; genotype 3 dominant
- **HEV**: Hyperendemic; genotype 1 epidemics (monsoon); 15-25% pregnancy mortality`,
        mnemonics: [
          { text: "ACUTE Hepatitis Workup", explanation: "A=ALT/AST ratio, C=Check bilirubin, U=Ultrasound, T=Tests (serology), E=Encephalopathy (FHF)" },
          { text: "Chronic HBV FIRE", explanation: "F=Fibrosis, I=Immune tolerant, R=Reactive, E=End-stage" }
        ],
        keyPoints: [
          "HAV: IgM/IgG serology, acute only, vaccine prevents",
          "HBV: HBsAg+ chronic, HBeAg+ = infectivity, cccDNA persistence",
          "HCV: Anti-HCV+ (persists), HCV RNA (active), DAAs curative",
          "HDV: Requires HBV, superinfection more severe",
          "HEV: Fecal-oral, severe pregnancy (15-25% mortality)",
          "Cirrhosis: Variceal bleed, ascites, encephalopathy, HCC risk",
          "HCC: Annual screening cirrhotic; imaging + AFP diagnostic"
        ],
        textbookRefs: [
          { book: "Jawetz Melnick & Adelberg's Medical Microbiology", chapter: "39: Clinical Diseases", edition: "28th" }
        ]
      },
      {
        layer: 4,
        slug: "hepatitis-viruses-layer-4-exam",
        title: "Hepatitis Viruses - Exam Prep",
        estimatedMinutes: 30,
        summary: "High-yield serology interpretation, treatment regimens, diagnostic markers, and India context.",
        contentMd: `# Hepatitis Exam High-Yield

## Serology Quick Reference
- **IgM anti-HAV+**: Acute HAV
- **HBsAg+, IgM anti-HBc+**: Acute HBV
- **HBsAg+, anti-HBc+, IgM anti-HBc-**: Chronic HBV
- **Anti-HBs+ only**: Past HBV (immune)
- **Anti-HCV+ with HCV RNA+**: Active HCV
- **Anti-HCV+ with HCV RNA-**: Past HCV (cleared)

## Treatment Regimens
- **HAV**: Supportive only
- **HBV**: Entecavir/tenofovir if HBV DNA >2000 + ALT >1x ULN; IFN-α option
- **HCV**: DAAs sofosbuvir-based; 8-12 weeks; SVR 95-99%
- **HDV**: Limited options (IFN-α, tenofovir off-label)
- **HEV**: Supportive; ribavirin if chronic (immunocompromised)

## CD4 Thresholds & OIs
- **<200**: PCP prophylaxis (TMP-SMX)
- **<100**: Toxo prophylaxis
- **<50**: MAC prophylaxis (azithromycin)

## India Board Exam Factoids
- **HEV-specific**: Genotype 1 (epidemics), genotype 3/4 rare; monsoon peaks; pregnant women 15-25% mortality
- **HBV**: Vaccine efficacy 95%; protective antibody (anti-HBs) indicates immunity
- **HCV**: Genotype 3 most common; DAA availability increasing (generic sofosbuvir)`,
        mnemonics: [
          { text: "IgM = Acute (Remember)", explanation: "IgM antibodies = recent infection; IgG = past/chronic" },
          { text: "HBIG + VAX for Exposure", explanation: "H=HBIG within 24h, B=Baseline test, V=Vaccine series" }
        ],
        keyPoints: [
          "IgM anti-HAV/HBc = acute; IgG/anti-HBc = chronic or past",
          "HBsAg alone insufficient; need anti-HBc to characterize stage",
          "HCV: Anti-HCV+ persists; HCV RNA confirms active infection",
          "Acute HBV: 90% recover; 5-10% chronic if adult",
          "HCV: 85% chronic; genotype 3 India (younger acquisition)",
          "HEV pregnancy: 15-25% mortality; endemic India",
          "Needle-stick HBV: HBIG + vaccine if not immune"
        ],
        textbookRefs: [
          { book: "Jawetz Melnick & Adelberg's Medical Microbiology", chapter: "39: Summary", edition: "28th" }
        ]
      },
      {
        layer: 5,
        slug: "hepatitis-viruses-layer-5-active-recall",
        title: "Hepatitis Viruses - Active Recall",
        estimatedMinutes: 25,
        summary: "Case-based Q&A on serology, management, and complications.",
        contentMd: `# Active Recall Q&A

**Q1:** HBsAg+, IgM anti-HBc+. Diagnosis?
**A1:** Acute HBV (5-10% risk chronic in adults; 85-90% if <5 years)

**Q2:** Anti-HCV+, HCV RNA-. Status?
**A2:** Past HCV (cleared); or false positive anti-HCV; HCV RNA confirms active

**Q3:** HEV in pregnant woman at 24 weeks. Expected outcome?
**A3:** 15-25% maternal mortality; preterm labor, fetal loss risks; unknown mechanism

**Q4:** CD4=35 patient, fever, headache, CSF: 100 WBC, low glucose, India ink+. Diagnosis?
**A4:** Cryptococcal meningitis (India ink positive = pathognomonic); requires amphotericin B + fluconazole

**Q5:** HBV patient stops entecavir abruptly. Risk?
**A5:** Rapid reactivation with severe ALT flare; risk acute hepatitis, fulminant failure in cirrhotic

**Q6:** Chronic HCV (genotype 3) treated with DAAs. At week 24 post-treatment, HCV RNA undetectable. Interpretation?
**A6:** SVR (cure); durable virological response; no relapse; treatment success

**Q7:** Pregnant woman IgM anti-HEV+. Transmission risk to fetus?
**A7:** ~30% vertical transmission if mother viremic; intrauterine fetal death possible

**Q8:** Coinfected TB + HBV (CD4=120). Timing ART?
**A8:** TB therapy first (2 weeks), then ART; DTG-based (less RF interaction)

**Q9:** Anti-HBc+ alone (HBsAg-, anti-HBs-). Interpretation?
**A9:** Occult HBV or late antibody waning; check HBV DNA to confirm; if DNA+ = infectious

**Q10:** HAV IgM+, bilirubin 8, ALT 2000. Fulminant risk?
**A10:** <0.1% in immunocompetent; higher if chronic liver disease; supportive care, monitor encephalopathy`,
        mnemonics: [],
        keyPoints: [
          "Acute HBV: IgM anti-HBc+, HBsAg+; 5-10% chronic in adults",
          "HCV diagnosis: Anti-HCV+; must confirm with HCV RNA",
          "HEV pregnancy: 15-25% mortality; fetal loss risk",
          "Cirrhosis complications: Variceal bleed, ascites, encephalopathy, HCC",
          "DAAs curative HCV: SVR12 (HCV RNA undetectable 12 weeks post-treatment)",
          "Needle-stick HBV: HBIG + vaccine if not immune; repeat testing"
        ],
        textbookRefs: [
          { book: "Jawetz Melnick & Adelberg's Medical Microbiology", chapter: "39: Case Review", edition: "28th" }
        ]
      }
    ]
  }
];
