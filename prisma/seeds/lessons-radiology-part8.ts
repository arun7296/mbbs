import type { TopicLessons } from "./content-loader";

export const radiologyLessonsPart8: TopicLessons[] = [
  {
    topicCode: "RD-MOD-01-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "contrast-media-foundation",
        title: "Contrast Media - Foundation",
        estimatedMinutes: 20,
        summary: "Iodinated contrast (ionic, non-ionic, iso-osmolar), gadolinium (MRI), mechanism of enhancement, osmolality importance.",
        contentMd: `# Contrast Media - Foundation

## Iodinated Contrast Media (ICM)
- **Ionic HOCM**: Osmolarity 1500-2000 mOsm/kg; old generation; causes dehydration
- **Non-ionic LOCM**: Osmolarity 600-850; modern standard for CT, angiography
- **Non-ionic IOCM**: Osmolarity 290 (iso-osmolar); safest but expensive
- **Iodine content**: 370 mgI/mL typical (higher = better visualization)

## Gadolinium (MRI)
- **Linear**: Less stable; gadolinium dissociation/retention risk
- **Macrocyclic**: More stable; safer in renal disease
- **Paramagnetic**: Alters T1/T2 relaxation; brightens on T1

## Enhancement Mechanism
- **Iodine**: High atomic number (Z=53); increases X-ray attenuation
- **Gadolinium**: Paramagnetic; shortens T1 (bright on T1-weighted MRI)`,
        mnemonics: [
          { text: "Osmolarity hierarchy: Ionic 1500-2000, LOCM 600-850, IOCM 290", explanation: "Safety order" },
          { text: "Iodine Z=53 = high atomic number = high attenuation", explanation: "Enhancement mechanism" }
        ],
        keyPoints: [
          "LOCM standard osmolarity 600-850; safest modern option",
          "IOCM iso-osmolar but higher cost; limited superiority proof",
          "Macrocyclic gadolinium safer than linear in renal disease"
        ],
        textbookRefs: [
          { book: "Grainger & Allison's Diagnostic Radiology", chapter: "Contrast Agents", edition: "7th" },
          { book: "ACR Manual on Contrast Media", edition: "2023" }
        ]
      },
      {
        layer: 2,
        slug: "contrast-reactions-mechanisms",
        title: "Contrast Reactions - Types & Pathophysiology",
        estimatedMinutes: 30,
        summary: "Allergic reactions, anaphylaxis, contrast-induced nephropathy, NSF mechanisms.",
        contentMd: `# Contrast Reactions - Mechanisms

## Acute Allergic Reactions (Iodine)
- **Mild** (urticaria): 5% ionic, 0.1-0.3% non-ionic; IgE-mediated
- **Anaphylaxis** (hypotension, angioedema): 0.04% non-ionic; life-threatening
- **Iodine allergy myth**: True iodine allergy <1%; organic iodine in contrast culprit

## Contrast-Induced Nephropathy (CIN)
- **Mechanism**: Osmolarity vasoconstriction + tubular toxicity
- **Risk factors**: Cr >1.5, diabetes, dehydration, advanced age
- **Incidence**: High-risk (Cr >1.5 + diabetes) = 10-30% without prevention

## Nephrogenic Systemic Fibrosis (NSF)
- **Mechanism**: Gadolinium dissociation (linear > macrocyclic)
- **Risk**: GFR <30 + linear gadolinium
- **Prevention**: Use macrocyclic agents; NSF extremely rare now`,
        mnemonics: [
          { text: "Anaphylaxis 0.04% modern non-ionic contrast", explanation: "Reaction incidence" },
          { text: "CIN high-risk 10-30% (Cr >1.5 + diabetes)", explanation: "Prevention critical" },
          { text: "NSF risk: GFR <30 + linear (use macrocyclic)", explanation: "NSF prevention" }
        ],
        keyPoints: [
          "True iodine allergy rare; osmolarity/organic compound issue",
          "CIN mechanism: vasoconstriction + tubular toxicity + oxidative stress",
          "NSF: gadolinium dissociation with linear agents in renal failure"
        ],
        textbookRefs: [
          { book: "ACR Manual on Contrast Media", chapter: "Reactions", edition: "2023" },
          { book: "Grainger & Allison's Diagnostic Radiology", chapter: "Complications", edition: "7th" }
        ]
      },
      {
        layer: 3,
        slug: "contrast-clinical-management",
        title: "Contrast - Risk Assessment & Clinical Management",
        estimatedMinutes: 35,
        summary: "Risk stratification, CIN prevention, anaphylaxis prevention, patient preparation.",
        contentMd: `# Contrast - Clinical Management

## CIN Risk Stratification
- **Low**: Cr <1.2, no diabetes → standard contrast
- **Intermediate**: Cr 1.2-1.5 OR diabetes → hydration recommended
- **High**: Cr >1.5 OR Cr >1.2 + diabetes → aggressive prevention mandatory

## CIN Prevention (High-Risk Patients)
1. **Hydration** (most critical): NaCl 1 mL/kg/hr × 12h before/after
2. **Low-osmolar contrast**: LOCM/IOCM preferred
3. **Minimize volume**: Use lowest necessary
4. **Avoid nephrotoxins**: Hold NSAIDs (48h), metformin (resume 48h if stable)
5. **Monitor**: Cr 48-72h post-contrast

## Anaphylaxis Prevention (Prior Reaction)
1. **Corticosteroids**: Prednisone 50mg (12h before, 1h before) OR dexamethasone 24mg
2. **Antihistamine**: Diphenhydramine 50mg (1h before)
3. **Non-ionic LOCM**: Use instead of ionic
4. **Reduces risk**: From 1/50 → 1/2500 (99%+ effective)

## Acute Reaction Management
- **Mild (urticaria)**: Antihistamine; observe; usually self-limited
- **Anaphylaxis**: IM epinephrine 0.3-0.5mg immediately → IV access → fluids → steroids/antihistamine → ICU monitoring`,
        mnemonics: [
          { text: "CIN prevention: HVM = Hydration, Volume (minimize), Meds (avoid nephrotoxins)", explanation: "3 pillars" },
          { text: "Premedication: Steroids (12h, 1h before) + antihistamine (1h before)", explanation: "Timing critical" },
          { text: "Epinephrine first: IM 0.3-0.5mg (don't wait for IV)", explanation: "Anaphylaxis emergency" }
        ],
        keyPoints: [
          "Hydration most important CIN prevention factor",
          "Premedication reduces anaphylaxis risk 50-100×",
          "Anaphylaxis: IM epinephrine immediately; steroids/antihistamine secondary",
          "Consider non-contrast CT or ultrasound alternatives"
        ],
        textbookRefs: [
          { book: "ACR Manual on Contrast Media", chapter: "Management", edition: "2023" },
          { book: "Grainger & Allison's Diagnostic Radiology", chapter: "Clinical Approach", edition: "7th" }
        ]
      },
      {
        layer: 4,
        slug: "contrast-exam-prep",
        title: "Contrast Media - Exam Prep",
        estimatedMinutes: 20,
        summary: "High-yield facts, thresholds, management algorithms.",
        contentMd: `# Contrast Media - Exam Prep

## High-Yield Facts
- **LOCM osmolarity**: 600-850 (standard modern)
- **IOCM osmolarity**: 290 (iso-osmolar; safest)
- **Anaphylaxis risk**: 0.04% modern non-ionic
- **CIN high-risk incidence**: 10-30% (Cr >1.5 + diabetes without prevention)
- **Premedication effectiveness**: Reduces risk 50-100×
- **Hydration**: Most important CIN prevention
- **NSF threshold**: GFR <30 (use macrocyclic gadolinium)
- **True iodine allergy**: <1% (rare)

## Risk Stratification
- **Low CIN risk**: Cr <1.2 alone
- **High CIN risk**: Cr >1.5 OR (Cr >1.2 + diabetes)
- **Anaphylaxis risk**: Prior reaction or severe allergies

## Management Pearls
- Epinephrine first in anaphylaxis (IM, don't wait for IV)
- Hydration 12h before, 6-12h after (continuous IV preferred)
- Stop NSAIDs 48h around contrast (major CIN risk)
- Premedication mandatory if prior reaction`,
        mnemonics: [
          { text: "Osmolarity HOCM 1500, LOCM 600-850, IOCM 290", explanation: "Hierarchy" },
          { text: "CIN prevention: Hydration (most important) + low-osmolar + minimize volume", explanation: "3 steps" },
          { text: "Anaphylaxis: Epi IM first, then IV/fluids/steroids", explanation: "Emergency order" }
        ],
        keyPoints: [
          "LOCM standard; IOCM safest osmolarity",
          "Hydration >all else for CIN prevention",
          "Premedication reduces anaphylaxis recurrence significantly",
          "NSF prevention: use macrocyclic if GFR <30",
          "IM epinephrine immediately for anaphylaxis"
        ],
        textbookRefs: [
          { book: "ACR Manual on Contrast Media", chapter: "Summary", edition: "2023" },
          { book: "Grainger & Allison's Diagnostic Radiology", edition: "7th" }
        ]
      },
      {
        layer: 5,
        slug: "contrast-active-recall",
        title: "Contrast Media - Active Recall Cases",
        estimatedMinutes: 20,
        summary: "CIN prevention, anaphylaxis management, risk stratification.",
        contentMd: `# Contrast Media - Active Recall

## Q1: High-Risk CIN Patient
**Q: Creatinine 2.2, eGFR 28, diabetic. Needs CT abdomen contrast. Prevention?**

A: **HIGH-RISK** (Cr >1.5 + diabetes). **CIN incidence 10-30% without prevention**. **Prevention**: (1) Hydration: NaCl 1 mL/kg/hr ×12h before/after (most critical), (2) LOCM contrast, (3) Minimize volume, (4) Stop NSAIDs 48h, hold metformin (resume 48h if stable), (5) Monitor Cr 48-72h.

## Q2: Prior Anaphylaxis
**Q: Prior contrast anaphylaxis (hypotension, bronchospasm). Now needs CTA. Proceed?**

A: **YES with premedication**. **Protocol**: (1) Prednisone 50mg at 12h & 1h before, (2) Diphenhydramine 50mg 1h before, (3) Use LOCM, (4) IV access before injection, (5) Observe 15-30min post-injection. **Effectiveness**: Reduces recurrence from 1/50 → 1/2500.

## Q3: Anaphylaxis During Injection
**Q: Patient develops hypotension 85/50, dyspnea, throat tightness during contrast injection. Immediate management?**

A: **ANAPHYLAXIS - EMERGENCY**: (1) **STOP injection**, (2) **IM epinephrine 0.3-0.5mg** immediately (don't wait for IV), (3) Supine + legs elevated, (4) IV access, (5) Fluids (NaCl bolus), (6) O2, (7) Steroids (methylprednisolone 125mg IV), (8) Antihistamine (diphenhydramine 50mg IV), (9) ICU monitoring ≥4h.

## Q4: Gadolinium in Renal Failure
**Q: eGFR 22, needs MRI brain. Gadolinium safe?**

A: **YES if MACROCYCLIC gadolinium**. **Avoid linear** (NSF risk if GFR <30). **Macrocyclic examples**: Gadoteridol, gadoterate. **Proceed confidently** - modern macrocyclic agents much safer than iodine in renal disease.

## Q5: Iodine Allergy History
**Q: Patient reports "iodine allergy" and shellfish allergy. Safe for contrast?**

A: **LIKELY SAFE**. **Clarify**: True iodine allergy <1%; true prior contrast reaction? **Shellfish ≠ iodine** (protein allergy, not iodine). **Clinical decision**: No prior contrast reaction + shellfish allergy alone = standard contrast OK. If true prior contrast reaction = premedication mandatory.`
      }
    ]
  }
];
