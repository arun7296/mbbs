import type { TopicLessons } from "./content-loader";

export const surgeryPart9Lessons: TopicLessons[] = [
  {
    topicCode: "SU-MOD-07-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "varicose-veins-layer-1-foundation",
        title: "Varicose Veins - Foundation",
        estimatedMinutes: 20,
        summary: "Anatomy of venous system of lower limb, classification, and etiology of varicose veins.",
        contentMd: `# Varicose Veins - Foundation

## Venous Anatomy of Lower Limb
### Superficial Veins
- **Great saphenous vein (GSV)**: Longest vein; from medial malleolus → saphenofemoral junction (SFJ) at groin
- **Small saphenous vein (SSV)**: Behind lateral malleolus → saphenopopliteal junction (SPJ) at popliteal fossa

### Deep Veins
- Follow arterial system: Posterior tibial, anterior tibial, peroneal → popliteal → femoral → iliac

### Perforating Veins
- Connect superficial to deep systems; have one-way valves directing flow deep
- Important perforators: Cockett (lower leg), Boyd (below knee), Hunterian (mid-thigh), Dodd (above knee)

### Venous Valves
- Bicuspid valves ensuring unidirectional flow (superficial → deep)
- Muscle pump mechanism: Calf muscles compress deep veins during walking
- Valve incompetence = reflux = varicose veins

## Definition
Dilated, tortuous, elongated superficial veins of the lower limb due to valvular incompetence.

## Classification
### Primary Varicose Veins (95%)
- Idiopathic valve incompetence; no underlying deep vein pathology
- Risk factors: Family history, prolonged standing, obesity, pregnancy, female sex

### Secondary Varicose Veins (5%)
- Secondary to deep venous disease: DVT causing post-thrombotic syndrome
- Pelvic tumors compressing iliac veins
- AV fistula (traumatic or congenital)

### CEAP Classification (Clinical, Etiology, Anatomy, Pathophysiology)
- C0: No visible disease; C1: Telangiectases/spider veins; C2: Varicose veins
- C3: Edema; C4: Skin changes (pigmentation, eczema, lipodermatosclerosis)
- C5: Healed ulcer; C6: Active venous ulcer

## Clinical Features
- Dilated, tortuous superficial veins (worse on standing)
- Heaviness, aching, fatigue in legs (worse end of day, relieved by elevation)
- Ankle edema (evening)
- Skin changes: Pigmentation (hemosiderin), eczema, lipodermatosclerosis
- Venous ulcer: Typically above medial malleolus (gaiter area)`,
        mnemonics: [
          { text: "GSV: Groin (SFJ); SSV: behind knee (SPJ)", explanation: "Great saphenous joins at saphenofemoral junction in groin; Small saphenous at saphenopopliteal junction" },
          { text: "Venous ulcer = Medial malleolus; Arterial ulcer = Lateral/toes", explanation: "Distinguishing location of venous vs arterial ulcers on exam" },
        ],
        keyPoints: [
          "Varicose veins: dilated tortuous superficial veins due to valvular incompetence",
          "GSV drains at SFJ (groin); SSV at SPJ (popliteal fossa)",
          "Primary (95%): idiopathic valve failure; Secondary (5%): post-DVT or compression",
          "CEAP classification: C0-C6 grading from no disease to active ulcer",
          "Venous ulcers: gaiter area above medial malleolus; hemosiderin pigmentation",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 14: Venous Disorders", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 56: Venous Disorders", edition: "28th" },
        ],
      },
      {
        layer: 2,
        slug: "varicose-veins-layer-2-mechanism",
        title: "Varicose Veins - Mechanism",
        estimatedMinutes: 22,
        summary: "Pathophysiology of venous hypertension, valve failure cascade, and chronic venous insufficiency.",
        contentMd: `# Varicose Veins - Mechanism

## Normal Venous Physiology
- Calf muscle pump: Contracts during walking, squeezes deep veins, propels blood upward
- Valves prevent retrograde flow between contractions
- Perforator valves ensure flow from superficial → deep only
- Standing still: Hydrostatic pressure at ankle approximately 90 mmHg
- Walking: Calf pump reduces venous pressure to 20-30 mmHg

## Pathophysiology of Varicose Veins
### Valve Incompetence
- Primary: Congenital weakness of valve cusps or vein wall
- Vein wall weakness → dilation → valve cusps fail to coapt → reflux
- Reflux creates column of blood under hydrostatic pressure
- Progressive dilation of downstream veins

### Venous Hypertension Cascade
1. Valve incompetence (SFJ, SPJ, or perforators)
2. Reflux during standing/muscle relaxation
3. Ambulatory venous hypertension (pressure remains elevated during walking)
4. Capillary hypertension and increased permeability
5. Extravasation of RBCs → hemosiderin deposition (brown pigmentation)
6. Fibrin cuff theory: Pericapillary fibrin deposition impairs O2 diffusion
7. White cell trapping: Leukocytes adhere to capillary endothelium → inflammation
8. Tissue hypoxia → lipodermatosclerosis → ulceration

### Post-Thrombotic Syndrome
- DVT damages deep vein valves → permanent reflux
- Deep venous hypertension transmitted to superficial system
- Secondary varicose veins develop
- Higher risk of ulceration than primary varicose veins

## Complications
### Bleeding
- Thin-walled varicose veins rupture (usually at ankle); profuse venous bleeding
- Management: Elevation + direct pressure (NOT tourniquet)

### Thrombophlebitis
- Thrombus in superficial varicose vein; painful, red, cord-like swelling
- Treatment: NSAIDs, compression; anticoagulation if near SFJ/SPJ (risk of DVT extension)

### Venous Eczema
- Chronic venous hypertension causes inflammatory skin changes
- Pruritic, scaly, erythematous skin around ankles

### Venous Ulcer
- End-stage of chronic venous insufficiency
- Location: Gaiter area (above medial malleolus)
- Shallow, irregular margins, granulation tissue base
- Surrounding lipodermatosclerosis and hemosiderin staining`,
        mnemonics: [
          { text: "Venous Hypertension Cascade: Reflux → RBCs leak → Hemosiderin → Fibrosis → Ulcer", explanation: "Progressive tissue damage from sustained venous hypertension" },
          { text: "Varicose bleeding: ELEVATE + PRESS (never tourniquet)", explanation: "Emergency management of ruptured varicose vein" },
        ],
        keyPoints: [
          "Valve incompetence → reflux → ambulatory venous hypertension → tissue damage",
          "Calf muscle pump normally reduces ankle venous pressure from 90 to 20-30 mmHg",
          "Hemosiderin from extravasated RBCs causes brown pigmentation around ankle",
          "Post-thrombotic syndrome: DVT damages deep valves; secondary varicose veins; higher ulcer risk",
          "Venous ulcer: gaiter area, shallow, irregular margins; from chronic venous hypertension",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 14", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 56", edition: "28th" },
        ],
      },
      {
        layer: 3,
        slug: "varicose-veins-layer-3-clinical",
        title: "Varicose Veins - Clinical",
        estimatedMinutes: 25,
        summary: "Clinical tests, duplex ultrasound, and management options for varicose veins.",
        contentMd: `# Varicose Veins - Clinical Management

## Clinical Tests
### Trendelenburg Test (SFJ Competence)
- Patient supine → elevate leg → empty veins → apply tourniquet at SFJ → stand
- Positive: Veins fill rapidly from above when tourniquet released = SFJ incompetence
- Negative: Veins fill slowly (controlled by tourniquet) = SFJ competent

### Modified Trendelenburg (Multiple Tourniquet Test)
- Multiple tourniquets at different levels to identify incompetent perforators
- Level at which veins fill below tourniquet = site of incompetent perforator

### Tap Test (Schwartz Test)
- Tap varicose vein distally; feel impulse proximally
- Transmitted impulse = continuous column of blood (valve incompetence)

### Perthes Test (Deep Vein Patency)
- Apply tourniquet to compress superficial veins → ask to walk
- Varicose veins empty: Deep system patent and perforators competent
- Varicose veins distend and become painful: Deep system obstructed (DO NOT operate on superficial veins)

## Investigations
### Duplex Ultrasound (Gold Standard)
- Combines B-mode imaging + Doppler flow assessment
- Identifies: Reflux sites (SFJ, SPJ, perforators), vein diameter, thrombus
- Reflux >0.5 seconds on Valsalva = pathological
- Maps anatomy for surgical planning

### Venography (Rarely Used)
- Ascending: Assesses deep vein patency
- Descending: Assesses reflux
- Replaced by duplex in most centers

## Management
### Conservative
- Lifestyle: Avoid prolonged standing, leg elevation, weight loss, exercise
- Compression stockings (Class II: 18-24 mmHg): Symptom relief, ulcer prevention
- Not curative; lifelong commitment needed

### Interventional (Minimally Invasive)
- **Endovenous Laser Ablation (EVLA)**: Laser fiber in vein; thermal ablation; >95% closure rate
- **Radiofrequency Ablation (RFA)**: Similar to EVLA; less post-op pain; >90% closure
- **Foam Sclerotherapy**: Inject sclerosant foam (sodium tetradecyl sulfate); for recurrent/small veins
- **Glue Ablation (VenaSeal)**: Cyanoacrylate glue; no tumescent anesthesia needed

### Surgical
- **Saphenofemoral ligation + stripping (SFL)**: Traditional; ligate SFJ, strip GSV to below knee
- **Saphenopopliteal ligation**: For SSV incompetence
- **Subfascial Endoscopic Perforator Surgery (SEPS)**: For incompetent perforators with venous ulcer
- **Phlebectomy**: Hook extraction of varicosities through small incisions

### Venous Ulcer Management
- **Compression therapy**: Graduated compression bandaging (four-layer); most important treatment
- Wound care: Regular dressing changes, debridement if needed
- Treat underlying venous hypertension: Ablation of incompetent veins
- Skin grafting for large non-healing ulcers

## Indian Context
- Varicose veins very common (occupations: farming, traffic police, teachers, surgeons)
- Compression stockings: Patient compliance is major challenge (hot climate)
- EVLA and RFA increasingly available in urban centers
- Traditional surgery (stripping) still common in many centers`,
        mnemonics: [
          { text: "Trendelenburg: Tourniquet at SFJ → Stand → Release → Rapid fill = Incompetent SFJ", explanation: "Tests competence of saphenofemoral junction" },
          { text: "Perthes: Walk with tourniquet; Veins EMPTY = deep OK; FILL = deep blocked", explanation: "Critical test to ensure deep system patency before operating on superficial veins" },
        ],
        keyPoints: [
          "Duplex ultrasound is gold standard; reflux >0.5 seconds = pathological",
          "Perthes test: must confirm deep vein patency before surgery on superficial veins",
          "EVLA/RFA: minimally invasive, >90-95% closure rate; replacing open surgery",
          "Venous ulcer: compression therapy is most important treatment",
          "Trendelenburg test: identifies SFJ incompetence; modified version identifies perforator sites",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 14", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 56", edition: "28th" },
        ],
      },
      {
        layer: 4,
        slug: "varicose-veins-layer-4-exam",
        title: "Varicose Veins - Exam Prep",
        estimatedMinutes: 18,
        summary: "High-yield exam facts on varicose veins for NEXT pattern questions.",
        contentMd: `# Varicose Veins - Exam Prep

## Must-Know Facts
- GSV drains at SFJ (groin); SSV drains at SPJ (popliteal fossa)
- Venous ulcer: gaiter area (above medial malleolus); arterial ulcer: toes/lateral
- Trendelenburg: SFJ competence; Perthes: deep vein patency
- Duplex ultrasound: gold standard investigation
- Compression therapy: most important treatment for venous ulcers
- EVLA/RFA: modern minimally invasive treatment; >90% success

## Common Exam Traps
- "Varicose veins with deep vein obstruction (positive Perthes)" = Do NOT operate on superficial veins
- "Ulcer above medial malleolus with pigmentation" = Venous ulcer (not arterial)
- "Painful, red, cord-like swelling over varicose vein" = Thrombophlebitis
- "Profuse bleeding from ankle varicosity" = Elevate + press; NOT tourniquet
- "Varicose veins in pregnancy" = Usually improve post-delivery; conservative management

## Venous vs Arterial Ulcer
| Feature | Venous | Arterial |
|---------|--------|----------|
| Location | Gaiter area (medial malleolus) | Toes, pressure points |
| Pain | Mild; relieved by elevation | Severe; worse at night |
| Base | Granulation tissue | Pale, necrotic |
| Margins | Irregular, sloping | Punched out |
| Surrounding skin | Pigmentation, eczema | Pale, shiny, hairless |
| Pulses | Present | Absent/weak |

## High-Yield Questions
- Most important investigation = Duplex ultrasound
- Test for deep vein patency = Perthes test
- Test for SFJ incompetence = Trendelenburg test
- Treatment of venous ulcer = Compression bandaging (four-layer)
- Most common perforator = Cockett perforators (lower leg)
- Pigmentation around ankle = Hemosiderin deposition (extravasated RBCs)`,
        mnemonics: [
          { text: "Venous ulcer: Medial, Moist, Mild pain; Arterial: Lateral, punched Out, Painful", explanation: "Quick comparison for exam questions on lower limb ulcers" },
          { text: "CEAP: C0-C6, from nothing to ulcer", explanation: "Clinical grading of chronic venous disease severity" },
        ],
        keyPoints: [
          "Trendelenburg = SFJ competence; Perthes = deep vein patency (must check before surgery)",
          "Duplex US gold standard; reflux >0.5 sec pathological",
          "Venous ulcer: medial malleolus, hemosiderin, compression therapy",
          "Arterial ulcer: toes/lateral, painful, punched out, absent pulses",
          "EVLA/RFA replacing open stripping; foam sclerotherapy for recurrences",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 14", edition: "6th" },
        ],
      },
      {
        layer: 5,
        slug: "varicose-veins-layer-5-active-recall",
        title: "Varicose Veins - Active Recall",
        estimatedMinutes: 15,
        summary: "Flashcard Q&A for spaced repetition on varicose veins.",
        contentMd: `# Active Recall - Varicose Veins

**Q1:** Where does the great saphenous vein drain?
**A1:** At the saphenofemoral junction (SFJ) in the groin. GSV runs from medial malleolus, anterior to medial malleolus, along medial leg and thigh to the femoral vein.

**Q2:** What is the Trendelenburg test?
**A2:** Tests SFJ competence. Elevate leg to empty veins → apply tourniquet at SFJ → stand. Release tourniquet: rapid filling from above = SFJ incompetent.

**Q3:** Why is the Perthes test critical before surgery?
**A3:** It confirms deep vein patency. If deep veins are blocked (post-DVT), superficial veins are the only drainage pathway. Operating on them would worsen venous congestion.

**Q4:** What is the gold standard investigation?
**A4:** Duplex ultrasound. Combines B-mode imaging with Doppler to identify reflux sites, vein diameter, and thrombus. Reflux >0.5 seconds = pathological.

**Q5:** What causes hemosiderin pigmentation around the ankle?
**A5:** Chronic venous hypertension → capillary permeability → RBC extravasation → hemoglobin breakdown → hemosiderin deposition in dermis (permanent brown staining).

**Q6:** Where do venous ulcers typically occur?
**A6:** Gaiter area, above medial malleolus. Shallow, irregular margins, granulation tissue base, surrounded by lipodermatosclerosis and hemosiderin pigmentation.

**Q7:** What is the most important treatment for venous ulcers?
**A7:** Compression therapy (graduated compression bandaging, four-layer technique). Addresses the underlying venous hypertension. Not addressing reflux → recurrence.

**Q8:** What are the modern minimally invasive treatments?
**A8:** EVLA (endovenous laser ablation), RFA (radiofrequency ablation), foam sclerotherapy, and glue ablation (VenaSeal). EVLA/RFA have >90-95% closure rates.

**Q9:** How do you manage bleeding from a ruptured varicose vein?
**A9:** Elevation of the leg + direct pressure over the bleeding point. Never apply a tourniquet. Definitive: treat the underlying varicose veins.

**Q10:** What is lipodermatosclerosis?
**A10:** Chronic inflammation and fibrosis of skin and subcutaneous tissue around the ankle. Results from chronic venous hypertension. Skin becomes woody, hard, and constricted ("inverted champagne bottle" appearance of leg).

**Q11:** What is the CEAP classification?
**A11:** Clinical (C0-C6), Etiology (congenital/primary/secondary), Anatomy (superficial/deep/perforator), Pathophysiology (reflux/obstruction). C6 = active venous ulcer.

**Q12:** What are Cockett perforators?
**A12:** Perforating veins connecting posterior tibial veins to GSV in the lower leg (behind medial malleolus). Most commonly incompetent perforators. Connect superficial to deep venous system.`,
        mnemonics: [
          { text: "Champagne Bottle Leg = Lipodermatosclerosis", explanation: "Inverted champagne bottle shape: fibrosed narrow ankle with edematous calf above" },
          { text: "Perforators: Cockett (calf), Boyd (below knee), Dodd (thigh)", explanation: "Named perforating veins from distal to proximal" },
        ],
        keyPoints: [
          "GSV → SFJ (groin); SSV → SPJ (popliteal); perforators connect superficial to deep",
          "Trendelenburg = SFJ; Perthes = deep patency (essential before surgery)",
          "Duplex US gold standard; compression therapy most important for venous ulcers",
          "EVLA/RFA: modern treatment; >90-95% success; replacing open stripping",
          "Hemosiderin pigmentation + lipodermatosclerosis = chronic venous insufficiency",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 14", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 56", edition: "28th" },
        ],
      },
    ],
  },
];
