import type { TopicLessons } from "./content-loader";

export const surgeryPart1Lessons: TopicLessons[] = [
  {
    topicCode: "SU-MOD-01-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "wound-healing-layer-1-foundation",
        title: "Wound Healing & Surgical Infections - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of wound healing phases, types of wound closure, and classification of surgical infections.",
        contentMd: `# Wound Healing & Surgical Infections - Foundation

## Types of Wounds
- **Clean wounds**: Uninfected, no inflammation, closed primarily (e.g., thyroidectomy). SSI rate <2%
- **Clean-contaminated**: Respiratory, GI, GU tract entered under controlled conditions. SSI rate 5-10%
- **Contaminated**: Open fresh wounds, spillage from GI tract, break in technique. SSI rate 10-20%
- **Dirty/Infected**: Old traumatic wounds, existing infection, perforated viscera. SSI rate >20%

## Phases of Wound Healing
1. **Hemostasis (immediate)**: Platelet plug, fibrin clot, vasoconstriction
2. **Inflammatory phase (0-5 days)**: Neutrophils first (48h), then macrophages (key orchestrator cell)
3. **Proliferative phase (5-21 days)**: Fibroblasts deposit collagen, angiogenesis, granulation tissue
4. **Remodeling phase (21 days-1 year)**: Type III collagen replaced by Type I; max tensile strength ~80%

## Types of Wound Closure
- **Primary intention (1st)**: Clean wound closed immediately with sutures
- **Secondary intention (2nd)**: Left open, heals by granulation and contraction
- **Tertiary intention (delayed primary)**: Left open 4-7 days, then closed when clean

## Factors Affecting Wound Healing
- **Local**: Infection, foreign body, blood supply, radiation, mechanical stress
- **Systemic**: Diabetes, malnutrition (Vitamin C, Zinc), steroids, immunosuppression, smoking`,
        mnemonics: [
          { text: "HIPRE for healing phases", explanation: "Hemostasis, Inflammation, Proliferation, Remodeling/Epithelialization" },
          { text: "Wound classification: CC-CD", explanation: "Clean, Clean-Contaminated, Contaminated, Dirty" },
        ],
        keyPoints: [
          "Macrophages are the most important cell in wound healing",
          "Maximum wound tensile strength is only ~80% of original skin",
          "Type III collagen is deposited first, replaced by Type I during remodeling",
          "Vitamin C deficiency impairs collagen cross-linking (hydroxylation of proline/lysine)",
          "SSI rate: Clean <2%, Clean-contaminated 5-10%, Contaminated 10-20%, Dirty >20%",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 1: Wound Healing", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 3: Wounds, Tissue Repair and Scars", edition: "28th" },
        ],
      },
      {
        layer: 2,
        slug: "wound-healing-layer-2-mechanism",
        title: "Wound Healing & Surgical Infections - Mechanism",
        estimatedMinutes: 25,
        summary: "Molecular mechanisms of wound healing, collagen synthesis, and pathophysiology of surgical infections.",
        contentMd: `# Wound Healing - Mechanism

## Inflammatory Phase Details
- Platelet degranulation releases PDGF, TGF-beta to attract inflammatory cells
- Neutrophils (first 24-48h): Phagocytosis, release proteases and ROS
- Macrophages (48-96h): Most critical cell; secrete PDGF, FGF, VEGF, TGF-beta
- Cytokine cascade: IL-1, TNF-alpha drive inflammation; IL-10 modulates resolution

## Collagen Synthesis Pathway
- Proline and Lysine hydroxylation requires Vitamin C, Iron, alpha-ketoglutarate
- Procollagen secreted → Tropocollagen → Cross-linked collagen fibrils
- Type III collagen deposited first (ratio 3:1); later replaced by Type I (ratio 1:3)

## Angiogenesis and Granulation
- VEGF stimulates endothelial cell proliferation and new vessel formation
- Granulation tissue = fibroblasts + new capillaries + ECM (red, granular appearance)
- Myofibroblasts contain actin → wound contraction (key in secondary intention)

## Abnormal Healing
- **Keloid**: Collagen extends BEYOND wound margins; no regression; common in dark skin, earlobes, sternum
- **Hypertrophic scar**: Stays WITHIN margins; spontaneous regression over 1-2 years
- **Wound dehiscence**: Mechanical failure; risk factors - malnutrition, infection, cough, obesity

## Pathophysiology of Surgical Infections
- Bacterial inoculum >10^5 organisms/gram of tissue → infection likely
- Biofilm formation: Bacteria produce extracellular polysaccharide matrix → antibiotic resistance
- Necrotizing fasciitis: Type I (polymicrobial) or Type II (Group A Strep) → rapid tissue destruction`,
        mnemonics: [
          { text: "Vitamin C for Collagen Cross-linking", explanation: "Vitamin C is essential cofactor for prolyl and lysyl hydroxylase" },
          { text: "Keloid Beyond, Hypertrophic Within", explanation: "Keloid goes Beyond wound margins; Hypertrophic stays Within" },
        ],
        keyPoints: [
          "Macrophages secrete PDGF, FGF, VEGF, TGF-beta - master regulator of healing",
          "Collagen hydroxylation requires Vitamin C, Iron, and alpha-ketoglutarate",
          "Keloids extend beyond margins, never regress; hypertrophic scars stay within margins, may regress",
          "Bacterial load >10^5/gram is the threshold for surgical site infection",
          "Myofibroblasts with actin filaments mediate wound contraction",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 1", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 3", edition: "28th" },
        ],
      },
      {
        layer: 3,
        slug: "wound-healing-layer-3-clinical",
        title: "Wound Healing & Surgical Infections - Clinical",
        estimatedMinutes: 25,
        summary: "Clinical management of wounds, SSI prevention, antibiotic prophylaxis, and management of surgical infections.",
        contentMd: `# Wound Healing - Clinical Management

## Wound Assessment and Debridement
- Assess wound size, depth, contamination, tissue viability, neurovascular status
- Friedrich debridement: Excision of wound edges within 6 hours (Golden period)
- Tetanus prophylaxis: TT booster if immunized >5 years ago; TIG + TT if not immunized

## Closure Decision
- Clean wounds <6h old → Primary closure
- Contaminated/older → Delayed primary closure (4-7 days)
- Heavily contaminated → Secondary intention

## SSI Prevention (WHO Surgical Safety Checklist)
- Preoperative: Chlorhexidine-alcohol skin prep, clip hair (not shave), prophylactic antibiotics within 60 min
- Intraoperative: Maintain normothermia, glycemic control, proper technique
- Postoperative: Early mobilization, wound care, drain removal when output <30 mL/day

## Antibiotic Prophylaxis
- Clean (cardiac, orthopedic): Cefazolin
- Clean-contaminated (GI): Cefazolin + Metronidazole
- Contaminated: Cefazolin + Metronidazole + Gentamicin

## Management of Specific Infections
- **SSI**: Open wound, drain pus, culture, antibiotics if cellulitis
- **Necrotizing fasciitis**: Emergency debridement + Piperacillin-tazobactam + Clindamycin; finger test positive
- **Gas gangrene**: Clostridium perfringens alpha-toxin; extensive debridement + high-dose Penicillin + HBO`,
        mnemonics: [
          { text: "Golden Period: 6 hours", explanation: "Friedrich debridement within 6 hours for contaminated wound" },
          { text: "SSI prevention: ABC", explanation: "Antibiotics within 60 min, Body temperature maintained, Chlorhexidine prep" },
        ],
        keyPoints: [
          "Prophylactic antibiotics within 60 minutes before skin incision",
          "Friedrich debridement within 6 hours converts contaminated wound to clean wound",
          "Necrotizing fasciitis is a surgical emergency - antibiotics alone are insufficient",
          "Gas gangrene: C. perfringens alpha-toxin (lecithinase); debridement + Penicillin",
          "Chlorhexidine-alcohol superior to povidone-iodine for preoperative skin preparation",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 2: Surgical Infections", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 4", edition: "28th" },
        ],
      },
      {
        layer: 4,
        slug: "wound-healing-layer-4-exam",
        title: "Wound Healing & Surgical Infections - Exam Prep",
        estimatedMinutes: 20,
        summary: "High-yield exam facts on wound healing and surgical infections for NEXT pattern questions.",
        contentMd: `# Wound Healing - Exam Prep

## Must-Know Facts
- Most important cell in wound healing: Macrophage
- First cell at wound: Platelet (immediate), then Neutrophil (6-24h)
- Most important growth factor: TGF-beta (stimulates collagen synthesis)
- Max tensile strength: 80% of normal (never 100%)
- First collagen deposited: Type III; final dominant: Type I
- Wound contraction: Myofibroblasts (contain actin)
- Vitamin C deficiency → Scurvy → impaired collagen cross-linking
- Zinc deficiency → impaired epithelialization

## Key Differentials
| Feature | Keloid | Hypertrophic Scar |
|---------|--------|-------------------|
| Beyond margins | Yes | No |
| Regression | No | Yes (1-2 years) |
| Genetic | Strong | Weak |
| Sites | Earlobes, sternum, deltoid | Across joints |

## Common Exam Scenarios
- Post-op wound breakdown day 5 → SSI; open and drain
- Keloid on earlobe → Intralesional triamcinolone + pressure earrings; excision + adjuvant
- Crepitus around wound → Gas gangrene; emergency debridement + Penicillin
- Wound tensile strength timeline: 5% at 1 week, 20% at 3 weeks, 80% at 3 months

## Quick Recall Table
| Infection | Organism | Treatment |
|-----------|----------|-----------|
| Gas gangrene | C. perfringens | Debridement + Penicillin + HBO |
| Necrotizing fasciitis Type II | Group A Strep | Debridement + Pip-Taz + Clindamycin |
| Tetanus | C. tetani | TIG + Metronidazole + debridement |`,
        mnemonics: [
          { text: "Tensile strength: 5-20-80 rule", explanation: "5% at 1 week, 20% at 3 weeks, 80% at 3 months" },
          { text: "Gas gangrene: PDP", explanation: "Penicillin + Debridement + Pressure (hyperbaric oxygen)" },
        ],
        keyPoints: [
          "Macrophage is THE most important cell in wound healing (most tested fact)",
          "Type III collagen first, replaced by Type I during remodeling",
          "Keloid: beyond margins, no regression; Hypertrophic: within margins, regresses",
          "C. perfringens alpha-toxin (lecithinase) causes gas gangrene",
          "Wound tensile strength 5-20-80 rule by weeks 1-3-12",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 1-2", edition: "6th" },
        ],
      },
      {
        layer: 5,
        slug: "wound-healing-layer-5-active-recall",
        title: "Wound Healing & Surgical Infections - Active Recall",
        estimatedMinutes: 15,
        summary: "Flashcard Q&A for spaced repetition on wound healing and surgical infections.",
        contentMd: `# Active Recall - Wound Healing & Surgical Infections

**Q1:** Which cell is the most important orchestrator of wound healing?
**A1:** Macrophage - secretes PDGF, FGF, VEGF, TGF-beta and coordinates all phases.

**Q2:** What is the maximum tensile strength a healed wound can achieve?
**A2:** ~80% of normal unwounded skin, reached at approximately 60-90 days.

**Q3:** What vitamin deficiency impairs collagen cross-linking?
**A3:** Vitamin C (ascorbic acid) - cofactor for prolyl and lysyl hydroxylase.

**Q4:** How do you differentiate keloid from hypertrophic scar?
**A4:** Keloid extends BEYOND wound margins, does not regress. Hypertrophic stays WITHIN margins, may regress in 1-2 years.

**Q5:** What is Friedrich debridement and its time limit?
**A5:** Excision of contaminated wound edges within 6 hours (Golden period).

**Q6:** What is the bacterial threshold for wound infection?
**A6:** >10^5 organisms per gram of tissue.

**Q7:** When should prophylactic antibiotics be given?
**A7:** Within 60 minutes before skin incision.

**Q8:** What organism causes gas gangrene and its key toxin?
**A8:** Clostridium perfringens; alpha-toxin (lecithinase/phospholipase C).

**Q9:** What type of collagen is deposited first in wound healing?
**A9:** Type III collagen, later replaced by Type I during remodeling.

**Q10:** What is the finger test in necrotizing fasciitis?
**A10:** Blunt finger dissection along fascial plane meets no resistance - confirms fascial necrosis.

**Q11:** Name the phases of wound healing in order.
**A11:** Hemostasis, Inflammation, Proliferation, Remodeling (HIPR).

**Q12:** What cells mediate wound contraction?
**A12:** Myofibroblasts containing smooth muscle actin filaments.`,
        mnemonics: [
          { text: "HIPR phases", explanation: "Hemostasis, Inflammation, Proliferation, Remodeling" },
          { text: "SSI rates: 2-10-20-40", explanation: "Clean <2%, Clean-contaminated <10%, Contaminated <20%, Dirty >20%" },
        ],
        keyPoints: [
          "Macrophage = master cell of wound healing",
          "Vitamin C for collagen hydroxylation, Zinc for epithelialization",
          "Golden period for debridement: 6 hours",
          "Prophylactic antibiotics within 60 min of incision",
          "Necrotizing fasciitis: surgical emergency requiring debridement",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 1-2", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 3-4", edition: "28th" },
        ],
      },
    ],
  },
];
