import type { TopicLessons } from "./content-loader";

export const medicineLessonsPart19: TopicLessons[] = [
  {
    topicCode: "IM-MOD-10-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "snakebite-layer-1-foundation",
        title: "Snake Bite & Envenomation - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of venomous snakes in India, classification of snake venoms, epidemiology of snakebite in the Indian subcontinent, and basic first aid principles.",
        contentMd: `# Snake Bite & Envenomation - Foundation

## Epidemiology - India
- India has the highest snakebite mortality worldwide (~50,000 deaths/year)
- ~3 million bites annually, ~1.5 million envenomations
- Peak incidence: monsoon and post-monsoon (June-November)
- Rural agricultural workers most affected
- Most bites occur during farming, walking barefoot at night, sleeping on ground

## Venomous Snakes of India ("Big Four")

| Snake | Local Names | Habitat | Venom Type |
|-------|------------|---------|------------|
| **Spectacled Cobra** (Naja naja) | Nag | Throughout India | Neurotoxic |
| **Common Krait** (Bungarus caeruleus) | Karait | Plains, enters houses at night | Neurotoxic |
| **Russell's Viper** (Daboia russelii) | Koriwala, Ghonas | Grasslands, farmlands | Hemotoxic + Vasculotoxic |
| **Saw-scaled Viper** (Echis carinatus) | Phoorsa | Arid/semi-arid regions | Hemotoxic |

## Additional Venomous Snakes
- **King Cobra** (Ophiophagus hannah): Largest venomous snake, forests of Western Ghats/NE India
- **Hump-nosed pit viper** (Hypnale hypnale): South India, causes local necrosis + AKI
- **Green pit vipers**: NE India, hemotoxic

## Venom Classification

### Neurotoxic Venoms (Cobra, Krait)
- **Pre-synaptic neurotoxins** (beta-bungarotoxin in krait): Destroy nerve terminals, irreversible
- **Post-synaptic neurotoxins** (alpha-cobratoxin in cobra): Block nicotinic ACh receptors, reversible with neostigmine

### Hemotoxic Venoms (Vipers)
- Procoagulant toxins → consume clotting factors → DIC → incoagulable blood
- Hemorrhagins → damage vessel walls → bleeding
- Russell's viper: activates Factor V and Factor X

### Cytotoxic/Myotoxic
- Local tissue necrosis
- Rhabdomyolysis (sea snakes, some vipers)

## First Aid - WHO Guidelines
**DO:**
- Immobilize the bitten limb (splint like a fracture)
- Remove constrictive jewelry/clothing
- Transport to hospital IMMEDIATELY
- Keep patient calm and still (reduces venom absorption)
- Note time of bite and snake description if possible

**DO NOT:**
- Apply tourniquet (causes ischemia, increased local damage)
- Cut/suck the wound
- Apply ice or chemicals
- Give aspirin or NSAIDs
- Apply pressure immobilization bandage for viper bites (worsens local necrosis)`,
        mnemonics: [
          { text: "Big Four = CKRS: Cobra, Krait, Russell's viper, Saw-scaled viper", explanation: "Four most medically important venomous snakes in India" },
          { text: "Neuro = CK (Cobra, Krait); Hemo = VV (Vipers - Russell's, Saw-scaled)", explanation: "Neurotoxic snakes (elapids) vs hemotoxic snakes (viperids) in India" },
          { text: "Krait bites at NIGHT, inside HOUSES while sleeping", explanation: "Common krait is nocturnal and enters houses, bites painlessly during sleep" }
        ],
        keyPoints: [
          "India has the highest snakebite mortality globally (~50,000 deaths/year)",
          "Big Four venomous snakes: Spectacled Cobra, Common Krait, Russell's Viper, Saw-scaled Viper",
          "Cobra and Krait are neurotoxic; Russell's Viper and Saw-scaled Viper are hemotoxic",
          "Krait bites are often painless and occur at night during sleep",
          "Russell's viper venom activates Factors V and X causing consumption coagulopathy",
          "First aid: immobilize limb, transport immediately; do NOT tourniquet, cut, or suck"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "396: Venomous Snakebites", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "Emergency Medicine: Snakebite", edition: "11th" },
          { book: "Davidson's Principles and Practice of Medicine", chapter: "9: Envenomation", edition: "24th" }
        ]
      },
      {
        layer: 2,
        slug: "snakebite-layer-2-mechanism",
        title: "Snake Bite & Envenomation - Mechanism",
        estimatedMinutes: 30,
        summary: "Detailed pathophysiology of neurotoxic and hemotoxic envenomation including pre-synaptic vs post-synaptic neurotoxicity, venom-induced consumption coagulopathy, and organ damage mechanisms.",
        contentMd: `# Snake Bite & Envenomation - Mechanism

## Neurotoxic Envenomation

### Post-synaptic Neurotoxicity (Cobra)
- Alpha-neurotoxins (alpha-cobratoxin, alpha-bungarotoxin)
- **Competitively block nicotinic acetylcholine receptors** at NMJ
- Similar to curare mechanism
- **Reversible** with anticholinesterases (neostigmine)
- Clinical onset: 1-6 hours after bite
- Progression: ptosis → ophthalmoplegia → bulbar palsy → respiratory paralysis

### Pre-synaptic Neurotoxicity (Krait)
- Beta-bungarotoxin (phospholipase A2 based)
- **Damages pre-synaptic nerve terminal** → prevents ACh release
- Destroys synaptic vesicles and nerve terminal architecture
- **Irreversible** — neostigmine has limited effect
- Recovery requires regeneration of nerve terminals (days to weeks)
- Explains why krait envenomation is more dangerous than cobra
- Clinical onset: often delayed 6-12 hours (bite painless, may be missed)

### Autonomic Effects
- Parasympathetic stimulation: salivation, bradycardia, hypotension
- Pupillary changes: initial miosis (parasympathetic), later mydriasis (paralysis)

## Hemotoxic Envenomation (Vipers)

### Venom-Induced Consumption Coagulopathy (VICC)
1. Viper venoms contain procoagulant toxins:
   - Russell's viper: Factor V activator (RVV-V) + Factor X activator (RVV-X)
   - Saw-scaled viper: Prothrombin activator (ecarin)
2. Massive activation of coagulation cascade
3. Consumption of fibrinogen, Factors V, VIII, X, platelets
4. Resulting in **incoagulable blood** (paradoxically)
5. Secondary fibrinolysis → elevated D-dimer, FDPs
6. Different from classical DIC: primarily consumption, less microthrombosis

### Hemorrhagic Effects
- **Hemorrhagins**: Zinc-dependent metalloproteinases
- Degrade basement membrane of blood vessels
- Cause spontaneous bleeding from gums, injection sites, mucous membranes
- Can lead to intracranial hemorrhage (most feared complication)

### Vasculotoxic Effects (Russell's Viper)
- Direct endothelial damage → increased capillary permeability
- Hypotension from vasodilation and third-spacing
- Myocardial depression from cardiotoxins

## Renal Damage Mechanisms
- **Russell's viper**: Cortical necrosis (direct nephrotoxin) or ATN
- **Hump-nosed pit viper**: AKI from rhabdomyolysis and DIC
- **Sea snakes**: Myoglobinuric AKI from rhabdomyolysis
- Additional: Hemoglobinuria from intravascular hemolysis, shock-related ATN

## Local Tissue Damage
- Cytotoxins, phospholipases A2, hyaluronidases
- Local edema (spreading factor = hyaluronidase)
- Tissue necrosis, blistering, compartment syndrome
- More severe with vipers (hemotoxic + cytotoxic components)
- Cobra bites can also cause significant local necrosis

## Venom Absorption and Distribution
- Venom enters lymphatic system primarily, then bloodstream
- Movement increases absorption (hence immobilization is critical)
- Dry bites (no venom injected) occur in 20-50% of bites
- Amount of venom injected varies significantly between bites`,
        mnemonics: [
          { text: "Post = Reversible, Pre = Permanent: Post-synaptic (cobra) responds to neostigmine; Pre-synaptic (krait) does NOT", explanation: "Critical distinction: post-synaptic blockade is reversible, pre-synaptic destruction is irreversible" },
          { text: "VICC = Venom-Induced Consumption Coagulopathy: Viper venoms CONSUME clotting factors → incoagulable blood", explanation: "Vipers activate coagulation so aggressively that all factors are consumed, resulting in paradoxical bleeding" },
          { text: "Russell's Viper = RVV-5 + RVV-10: activates Factor V and Factor X", explanation: "Specific procoagulant toxins in Russell's viper venom" }
        ],
        keyPoints: [
          "Post-synaptic (cobra): blocks NMJ receptors, REVERSIBLE with neostigmine",
          "Pre-synaptic (krait): destroys nerve terminals, IRREVERSIBLE, delayed onset",
          "VICC: viper venoms consume clotting factors causing paradoxically incoagulable blood",
          "Russell's viper causes AKI through direct cortical necrosis (unique among Indian snakes)",
          "Hemorrhagins are zinc metalloproteinases that degrade vascular basement membranes",
          "Dry bites (no envenomation) occur in 20-50% of snakebites"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "396: Venomous Snakebites", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "Emergency Medicine: Snakebite", edition: "11th" },
          { book: "Davidson's Principles and Practice of Medicine", chapter: "9: Envenomation", edition: "24th" }
        ]
      },
      {
        layer: 3,
        slug: "snakebite-layer-3-clinical",
        title: "Snake Bite & Envenomation - Clinical Application",
        estimatedMinutes: 25,
        summary: "Clinical features of envenomation syndromes, 20-minute whole blood clotting test, anti-snake venom administration protocol, and management of complications per Indian national guidelines.",
        contentMd: `# Snake Bite & Envenomation - Clinical Application

## Clinical Features by Syndrome

### Neurotoxic Envenomation (Cobra/Krait)
**Progression** (descending paralysis):
1. **Ptosis** (earliest sign, within 1-6 hours)
2. External ophthalmoplegia (diplopia)
3. Facial muscle weakness, difficulty opening mouth
4. Bulbar palsy: dysarthria, dysphagia, drooling
5. Neck muscle weakness (broken neck sign)
6. Limb weakness (proximal before distal)
7. **Respiratory paralysis** (diaphragm) — cause of death
8. Pupil dilation (late sign)

**Krait-specific**: Bite painless, often during sleep, patient may not realize bitten. Abdominal pain and vomiting common. Delayed onset (6-12 hours).

### Hemotoxic Envenomation (Vipers)
- **Local**: Severe pain, progressive swelling (measure hourly), ecchymosis, blistering, necrosis
- **Systemic bleeding**: Gum bleeding, epistaxis, hematemesis, melena, hematuria
- **Coagulopathy**: Incoagulable blood (detected by 20WBCT)
- **Specific to Russell's viper**: Bilateral ptosis (not from neurotoxin but pituitary hemorrhage — Sheehan-like), AKI, DIC

## 20-Minute Whole Blood Clotting Test (20WBCT)
- **Most important bedside test** for hemotoxic envenomation
- Procedure: Place 2 mL venous blood in clean, dry glass tube. Leave undisturbed for 20 minutes at room temperature. Tilt tube gently.
- **Positive** (non-clotting): Blood remains liquid → confirms coagulopathy → indicates viper envenomation
- **Negative** (clotting): Normal clot forms → no coagulopathy
- Repeat every 6 hours for 24 hours (venom may have delayed absorption)
- Sensitivity ~90% for significant coagulopathy

## Anti-Snake Venom (ASV) - Indian Polyvalent

### Indications for ASV
**Neurotoxic signs:**
- Ptosis, ophthalmoplegia, any neurological deficit

**Hemotoxic signs:**
- Non-clotting 20WBCT
- Spontaneous systemic bleeding
- Cardiovascular instability (hypotension, shock)

**Local signs (not usually sufficient alone):**
- Rapidly progressive swelling (crossing a major joint within 2 hours)
- Swelling >50% of bitten limb

### ASV Administration Protocol (Indian National Guidelines)
- **Dose**: 8-10 vials (80-100 mL) IV in 200 mL NS, infused over 1 hour
- Start slow (first 15 min at 2-3 mL/min), then increase if no reaction
- **Same dose for adults and children** (neutralizes venom, not body-weight based)
- Repeat dose: if 20WBCT still non-clotting at 6 hours, or neurological signs worsen
- Maximum: usually 20-30 vials total
- **Pre-medication**: SC epinephrine 0.25 mg (reduces anaphylaxis risk by 50%)

### ASV Reactions
- **Early anaphylactic**: Urticaria, bronchospasm, hypotension (10-20% of patients)
- Management: Stop ASV, IM epinephrine, IV antihistamine, IV hydrocortisone
- Resume ASV at slower rate after reaction controlled
- **Late serum sickness**: Fever, arthralgia, rash (5-7 days later), treat with prednisolone

## Additional Management

### Neostigmine Test (for Neurotoxic Envenomation)
- **Neostigmine 1.5-2 mg IM** + Atropine 0.6 mg IV (to block muscarinic effects)
- Assess response in 30 minutes (improved ptosis, eye movements)
- **Positive response**: Suggests post-synaptic toxin (cobra) → continue neostigmine q30min
- **No response**: Pre-synaptic toxin (krait) → mechanical ventilation, wait for recovery

### Ventilation
- Intubation + mechanical ventilation for respiratory failure
- Krait envenomation may require ventilation for days-weeks
- Low threshold for intubation (monitor single breath count <20, neck lift <5 sec)

### Renal Support
- Russell's viper → monitor urine output, creatinine
- Dialysis if oliguric AKI develops
- Recovery possible even after cortical necrosis (partial)

### Wound Care
- Clean wound, tetanus prophylaxis
- Surgical debridement for necrotic tissue
- Fasciotomy only if confirmed compartment syndrome (clinical + intracompartmental pressure >40 mmHg)`,
        mnemonics: [
          { text: "Neurotoxic progression = POFBNLR: Ptosis, Ophthalmoplegia, Facial, Bulbar, Neck, Limb, Respiratory", explanation: "Descending paralysis sequence in neurotoxic envenomation" },
          { text: "20WBCT: 2 mL blood, 20 minutes, glass tube, tilt to check", explanation: "Bedside test for hemotoxic envenomation — non-clotting = coagulopathy = viper" },
          { text: "ASV dose = Same for all ages (treats VENOM not BODY)", explanation: "Anti-snake venom dose is the same for adults and children because it neutralizes circulating venom" }
        ],
        keyPoints: [
          "Ptosis is the earliest sign of neurotoxic envenomation",
          "20WBCT is the most important bedside test for detecting viper coagulopathy",
          "ASV dose is the SAME for adults and children (8-10 vials)",
          "SC epinephrine 0.25 mg pre-medication reduces ASV anaphylaxis risk by 50%",
          "Neostigmine reverses cobra (post-synaptic) but NOT krait (pre-synaptic) paralysis",
          "Krait envenomation may require prolonged mechanical ventilation (days to weeks)"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "396: Venomous Snakebites", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "Emergency Medicine: Snakebite", edition: "11th" },
          { book: "Davidson's Principles and Practice of Medicine", chapter: "9: Envenomation", edition: "24th" }
        ]
      },
      {
        layer: 4,
        slug: "snakebite-layer-4-exam",
        title: "Snake Bite & Envenomation - Exam Preparation",
        estimatedMinutes: 20,
        summary: "High-yield NEXT exam topics for snakebite including snake identification, envenomation syndromes, ASV protocols, and clinical vignette patterns commonly tested.",
        contentMd: `# Snake Bite & Envenomation - Exam Preparation

## Snake Identification Table (High-Yield)

| Feature | Cobra | Krait | Russell's Viper | Saw-scaled Viper |
|---------|-------|-------|-----------------|-----------------|
| Venom | Neurotoxic | Neurotoxic | Hemotoxic + Nephrotoxic | Hemotoxic |
| Bite time | Day | Night (indoor) | Day/Evening | Day |
| Local signs | Necrosis, swelling | Minimal/none | Severe swelling, blister | Moderate swelling |
| Pain at bite | Severe | Painless | Very severe | Moderate |
| Earliest systemic sign | Ptosis | Ptosis (delayed) | Bleeding/coagulopathy | Bleeding |
| Unique feature | Hood, spectacle mark | Alternating B/W bands | Chain pattern, loud hiss | Sawed scales, rasping sound |
| AKI | Rare | Rare | Common (cortical necrosis) | Uncommon |
| Neostigmine response | Yes (post-synaptic) | No (pre-synaptic) | N/A | N/A |

## Clinical Vignettes

### Vignette 1: Krait Bite
"A farmer is brought to ER at 6 AM with ptosis and breathing difficulty. He was found in bed with a dead snake with black and white bands. Bite marks on foot, no pain or swelling at site."
→ **Krait envenomation**. Clues: nocturnal bite during sleep, painless, no local signs, neurotoxic features, black/white bands.
→ Management: ASV + intubation/ventilation. Neostigmine trial likely negative (pre-synaptic).

### Vignette 2: Russell's Viper
"25-year-old farmer bitten while working. Severe pain and swelling at bite site. 20WBCT at 6 hours shows non-clotting blood. Urine output decreased."
→ **Russell's viper**. Clues: daytime bite, severe local signs, coagulopathy, AKI.
→ Management: ASV 8-10 vials, repeat 20WBCT at 6 hours, monitor renal function, consider dialysis.

### Vignette 3: Cobra Bite with Neostigmine
"Patient with snakebite has ptosis and ophthalmoplegia. After IV neostigmine + atropine, ptosis improves significantly within 30 minutes."
→ **Cobra envenomation** (post-synaptic neurotoxin responds to neostigmine).
→ Continue neostigmine every 30 minutes + ASV.

### Vignette 4: ASV Reaction
"During ASV infusion, patient develops urticaria, wheeze, and hypotension."
→ **ASV anaphylaxis**. Stop infusion, give IM epinephrine + IV antihistamine + IV hydrocortisone. Resume ASV at slower rate after stabilization.

### Vignette 5: Dry Bite
"Snakebite patient: no local swelling, 20WBCT normal at 0, 6, and 12 hours, no neurological signs."
→ **Dry bite** (no envenomation). Continue observation for 24 hours. No ASV needed.

## Common Exam Traps
1. Krait bite is PAINLESS — patient may not know they were bitten
2. ASV dose is SAME for children and adults
3. Neostigmine works for cobra (post-synaptic) NOT krait (pre-synaptic)
4. 20WBCT must be repeated every 6 hours (delayed envenomation possible)
5. Russell's viper can cause BOTH hemotoxic AND neurotoxic features (ptosis from pituitary hemorrhage)
6. Do NOT apply tourniquet or pressure bandage for viper bites
7. Fasciotomy is rarely indicated — most swelling is subcutaneous, not compartmental

## Quick Reference: Antidote Summary
| Envenomation | Antidote/Key Treatment |
|-------------|----------------------|
| All snakebites | Indian Polyvalent ASV (covers Big Four) |
| Neurotoxic (cobra) | ASV + Neostigmine + Atropine |
| Neurotoxic (krait) | ASV + Mechanical ventilation |
| Hemotoxic (vipers) | ASV + Monitor 20WBCT + Blood products if needed |
| ASV anaphylaxis | Epinephrine IM + Antihistamine + Steroid |
| AKI (Russell's) | Dialysis support |`,
        mnemonics: [
          { text: "Krait = Night + Painless + No local + Neostigmine-resistant", explanation: "Four distinguishing features of krait envenomation for exam identification" },
          { text: "Russell's Viper = RVR: Renal failure, VICC (coagulopathy), Really painful local swelling", explanation: "Three hallmark features of Russell's viper envenomation" },
          { text: "ASV pre-med = Epi-SC 0.25: Subcutaneous Epinephrine 0.25 mg before ASV", explanation: "Pre-medication protocol to reduce ASV anaphylaxis by 50%" }
        ],
        keyPoints: [
          "Krait envenomation: painless nocturnal bite, no local signs, delayed neurotoxicity, neostigmine-resistant",
          "Russell's viper: severe local signs + coagulopathy (20WBCT+) + AKI (cortical necrosis)",
          "Neostigmine test differentiates cobra (responds) from krait (no response) envenomation",
          "ASV dose is the same for adults and children — it neutralizes venom, not body-weight dependent",
          "20WBCT must be repeated every 6 hours for 24 hours to detect delayed coagulopathy"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "396: Venomous Snakebites", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "Emergency Medicine: Snakebite", edition: "11th" },
          { book: "Davidson's Principles and Practice of Medicine", chapter: "9: Envenomation", edition: "24th" }
        ]
      },
      {
        layer: 5,
        slug: "snakebite-layer-5-active-recall",
        title: "Snake Bite & Envenomation - Active Recall",
        estimatedMinutes: 15,
        summary: "Flashcard-style active recall covering Indian venomous snakes, envenomation mechanisms, clinical management, and ASV protocols.",
        contentMd: `# Snake Bite & Envenomation - Active Recall

## Flashcard Q&A

**Q1:** Name the "Big Four" venomous snakes of India and their venom types.
**A1:** 1) Spectacled Cobra (Naja naja) — neurotoxic, 2) Common Krait (Bungarus caeruleus) — neurotoxic, 3) Russell's Viper (Daboia russelii) — hemotoxic + nephrotoxic, 4) Saw-scaled Viper (Echis carinatus) — hemotoxic.

**Q2:** What is the difference between pre-synaptic and post-synaptic neurotoxicity?
**A2:** Post-synaptic (cobra): alpha-neurotoxins block nicotinic ACh receptors at NMJ — REVERSIBLE with neostigmine. Pre-synaptic (krait): beta-bungarotoxin destroys nerve terminal and synaptic vesicles — IRREVERSIBLE, requires nerve terminal regeneration over days-weeks.

**Q3:** What is the 20-minute Whole Blood Clotting Test (20WBCT)?
**A3:** Bedside test: 2 mL venous blood in clean dry glass tube, left undisturbed for 20 minutes, then tilted gently. Non-clotting = coagulopathy from viper envenomation. Repeat every 6 hours for 24 hours to detect delayed envenomation.

**Q4:** What is the ASV dose for a 5-year-old child vs a 70 kg adult?
**A4:** The SAME: 8-10 vials (80-100 mL). ASV neutralizes circulating venom, not body weight. The amount of venom injected by a snake is the same regardless of victim size.

**Q5:** How does the neostigmine test help differentiate cobra from krait envenomation?
**A5:** Give neostigmine 1.5-2 mg IM + atropine 0.6 mg IV. Assess at 30 minutes. Positive response (improved ptosis/eye movements) = cobra (post-synaptic, reversible blockade). No response = krait (pre-synaptic, irreversible nerve terminal destruction).

**Q6:** What makes Russell's viper envenomation unique compared to other Indian snakes?
**A6:** Russell's viper causes a triad: 1) Hemotoxicity with VICC (activates Factors V and X), 2) Nephrotoxicity with bilateral renal cortical necrosis (direct nephrotoxin), 3) Can cause pituitary hemorrhage (Sheehan-like syndrome with bilateral ptosis mimicking neurotoxicity).

**Q7:** What is the pre-medication before ASV and why?
**A7:** Subcutaneous epinephrine 0.25 mg given before ASV infusion. Reduces anaphylactic reactions by approximately 50%. ASV reactions occur in 10-20% of patients (urticaria, bronchospasm, hypotension) due to horse-derived antiserum.

**Q8:** What first aid measures are recommended and which are harmful?
**A8:** DO: Immobilize bitten limb (splint), remove jewelry, transport to hospital immediately. DO NOT: Apply tourniquet (ischemia), cut/suck wound (infection, worsens damage), apply ice/chemicals, give aspirin. Pressure immobilization bandage is contraindicated for viper bites (worsens local necrosis).

**Q9:** Why is krait envenomation often more dangerous than cobra?
**A9:** Three reasons: 1) Bite is painless (often during sleep) so presentation is delayed, 2) Minimal local signs so envenomation may not be suspected initially, 3) Pre-synaptic neurotoxicity is irreversible — neostigmine does not help, requires prolonged mechanical ventilation.

**Q10:** When is fasciotomy indicated in snakebite?
**A10:** RARELY indicated. Most swelling is subcutaneous, not true compartment syndrome. Only perform if clinical signs of compartment syndrome AND intracompartmental pressure >40 mmHg on measurement. Must correct coagulopathy with ASV before surgery.

**Q11:** How do you manage ASV anaphylaxis?
**A11:** 1) Stop ASV infusion immediately, 2) IM epinephrine 0.5 mg (1:1000), 3) IV antihistamine (chlorpheniramine 10 mg), 4) IV hydrocortisone 200 mg, 5) IV fluids for hypotension, 6) Once stabilized, RESUME ASV at slower rate — the snakebite is still life-threatening.

**Q12:** What is the significance of dry bites?
**A12:** 20-50% of snakebites are "dry" (no venom injected). Diagnosis: no local progression, no systemic signs, 20WBCT remains normal over 24 hours, no neurological deficit. Important: observe for 24 hours because envenomation can be delayed. ASV is NOT indicated for confirmed dry bites.

**Q13:** Name three indications for ASV in hemotoxic envenomation.
**A13:** 1) Non-clotting 20WBCT (incoagulable blood), 2) Spontaneous systemic bleeding (gum bleeding, hematemesis, hematuria), 3) Cardiovascular instability (hypotension, shock). Also: rapidly progressive local swelling crossing a major joint within 2 hours.

**Q14:** What complications should you monitor for in Russell's viper bite?
**A14:** 1) Coagulopathy (20WBCT every 6 hours), 2) AKI — monitor urine output and serum creatinine (bilateral cortical necrosis), 3) Pituitary hemorrhage — bilateral ptosis, Sheehan-like (panhypopituitarism), 4) Local necrosis and compartment syndrome, 5) DIC with multiorgan failure.`,
        mnemonics: [
          { text: "Krait = 3 Ns: Nocturnal, No pain, No local signs", explanation: "Three key features that make krait bites dangerous — delayed recognition" },
          { text: "Russell's Viper triad = HNP: Hemotoxic, Nephrotoxic, Pituitary hemorrhage", explanation: "Three unique complications of Russell's viper envenomation" }
        ],
        keyPoints: [
          "Big Four: Cobra (neurotoxic), Krait (neurotoxic), Russell's Viper (hemotoxic+nephrotoxic), Saw-scaled Viper (hemotoxic)",
          "Post-synaptic (cobra) = reversible with neostigmine; Pre-synaptic (krait) = irreversible",
          "20WBCT is the key bedside test for hemotoxic envenomation — repeat every 6 hours",
          "ASV dose is SAME for all ages; pre-medicate with SC epinephrine 0.25 mg",
          "Krait: painless nocturnal bite, no local signs, delayed neurotoxicity, needs ventilator",
          "Russell's viper: hemotoxic + nephrotoxic (cortical necrosis) + pituitary hemorrhage"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "396: Venomous Snakebites", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "Emergency Medicine: Snakebite", edition: "11th" },
          { book: "Davidson's Principles and Practice of Medicine", chapter: "9: Envenomation", edition: "24th" }
        ]
      }
    ]
  }
];
