import type { TopicLessons } from "./content-loader";

export const surgeryGapLessons: TopicLessons[] = [
  {
    topicCode: "SU-MOD-01-TOP-05",
    layers: [
      {
        layer: 1,
        slug: "burns-wound-management-foundation",
        title: "Burns & Wound Management - Foundation",
        estimatedMinutes: 25,
        summary: "Introduction to burn classification, assessment, and initial management using Wallace rule and Parkland formula.",
        contentMd: `# Burns & Wound Management - Foundation

## Definition and Classification
### By Depth (Thickness)
- **First Degree (Superficial)**: Epidermis only; erythema, pain, no blistering
- **Second Degree (Partial Thickness)**: Epidermis and partial dermis; blistering, pain, pink/red
- **Third Degree (Full Thickness)**: Entire dermis destroyed; white/black, no sensation, leathery
- **Fourth Degree**: Extends into subcutaneous tissue, muscle, bone

### By Cause
- **Thermal**: Flames, hot liquids, contact
- **Chemical**: Acids, alkalis
- **Electrical**: High voltage, low voltage
- **Radiation**: Sunburn, radiation therapy

## Wallace Rule of Nines
Body Surface Area (BSA) estimation in adults:
- **Head and Neck**: 9%
- **Each Arm**: 9% (total 18%)
- **Chest**: 9%
- **Abdomen**: 9%
- **Each Leg (anterior)**: 9% (total 18%)
- **Each Leg (posterior)**: 9% (total 18%)
- **Perineum**: 1%

### Rule of Nines in Children
- Head: 18%
- Legs: 14% each (instead of 18%)
- Adjust proportions

## Burn Severity Assessment
- **Minor**: <10% BSA, outpatient treatment possible
- **Moderate**: 10-20% BSA second-degree, requires hospital
- **Major**: >20% BSA second-degree OR >10% third-degree, or special areas (face, hands, perineum)
- **Critical**: >40% BSA, inhalation injury, electrical burns, trauma

## Immediate Management Priorities
1. **Stop Burning**: Remove from heat source, extinguish flames
2. **Cool the Burn**: Cool water 10-20 minutes (no ice)
3. **Cover Burn**: Clean cloth, prevent contamination
4. **Assess Airway**: Check for inhalation injury (singed nasal hairs, carbonaceous sputum)
5. **Start Fluids**: Large-bore IV, estimate fluid requirements
6. **Pain Control**: Analgesia, anxiolytics
7. **Tetanus Prophylaxis**: If needed
8. **Transport**: Referral to burn center if major burn

## Pathophysiology
- **Burn Shock**: Hypovolemic shock from fluid loss (first 24-48 hours)
- **Hypermetabolism**: Increased metabolic rate up to 2x normal
- **Inflammation**: Cytokine release, third-spacing of fluids
- **Infection**: Major cause of death (loss of skin barrier)
`,
        mnemonics: [
          { text: "Wallace Rule = 9-9-18-9-9-18-1 (head/neck, arms, chest, abdomen, legs, perineum)", explanation: "Percentage BSA in adults for rule of nines" },
          { text: "Burn Degrees = 1st (erythema) → 2nd (blistering) → 3rd (white) → 4th (charring)", explanation: "Progression of burn depth" },
          { text: "Immediate Management = Stop + Cool + Cover + Airway + Fluids + Pain + Tetanus + Transfer", explanation: "Seven steps of initial burn care" },
        ],
        keyPoints: [
          "Wallace rule of nines essential for quick BSA estimation",
          "Burn severity based on %BSA and depth; major >20% or >10% third-degree",
          "Immediate management: stop burning, cool, cover, assess airway, start fluids",
          "Burns >10-15% BSA require hospitalization",
          "Burn shock and infection major concerns in burn management",
        ],
        textbookRefs: [{ book: "Bailey & Love's Short Practice of Surgery", chapter: "Ch 19", edition: "27th" }],
      },
      {
        layer: 2,
        slug: "burns-wound-management-mechanism",
        title: "Burns & Wound Management - Mechanism",
        estimatedMinutes: 30,
        summary: "Parkland formula, fluid resuscitation, wound healing, and pathophysiology of burn injury.",
        contentMd: `# Burns & Wound Management - Mechanism

## Parkland Formula for Fluid Resuscitation
- **Formula**: 4 mL × %BSA × body weight (kg) = total crystalloid (Ringer's lactate)
- **First 24 hours**: Half given in first 8 hours, remaining over next 16 hours
- **Goal**: Maintain urine output (0.5 mL/kg/hr for adults, 1 mL/kg/hr for children)
- **Adjustments**: Based on urine output (add 5% dextrose if inadequate)
- **Monitoring**: Vital signs, urine output, serum osmolarity

### Modified Parkland Formula
- Some institutions use 2-3 mL × %BSA × kg
- Individual variation; adjust based on response
- Monitor for fluid overload (pulmonary edema)

## Phases of Burn Injury
### Immediate Phase (0-48 hours)
- **Hypovolemia**: Plasma loss into interstitium
- **Burn Shock**: Distributive/hypovolemic shock
- **Management**: Aggressive fluid resuscitation (Parkland formula)

### Acute Phase (2-21 days)
- **Infection Risk**: Loss of skin barrier, immunosuppression
- **Hypermetabolism**: Fever, tachycardia, weight loss
- **Management**: Infection prevention, nutrition, wound care

### Convalescent Phase (3 weeks - 2 years)
- **Scarring and Contractures**: Hypertrophic scars, contractures develop
- **Psychological Issues**: Appearance changes, depression
- **Rehabilitation**: Physical therapy, psychological support

## Wound Healing in Burns
- **Primary Intention**: Minor superficial burns with intact skin
- **Secondary Intention**: Deeper burns requiring granulation and epithelialization
- **Autografting**: Skin graft from patient's own unburned area
- **Biological Dressings**: Temporary coverage (xenograft, allograft, synthetic)

## Inhalation Injury
- **Types**: Thermal (upper airway), chemical (lower airway)
- **Symptoms**: Stridor, carbonaceous sputum, hoarseness, respiratory distress
- **Assessment**: Fiberoptic laryngoscopy, carboxyhemoglobin levels
- **Management**: Intubation, oxygen, smoke evacuation, ventilation
- **Mortality**: Major cause of death in burn injuries

## Infection Prevention and Management
- **Local Infection**: Cellulitis, abscess formation, delayed healing
- **Systemic Infection**: Septicemia, the leading cause of death
- **Prevention**: Sterile technique, regular wound cleaning, antimicrobial dressings
- **Topical Agents**: Silver nitrate, silver sulfadiazine, mafenide acetate
- **Systemic Antibiotics**: Only if signs of systemic infection

## Special Considerations
- **Electrical Burns**: Assess for cardiac arrhythmias, deep tissue injury, rhabdomyolysis
- **Chemical Burns**: Continue flushing until pH normal; specific antidotes for some
- **Circumferential Burns**: Risk of compartment syndrome; may need escharotomy
- **Facial/Hand Burns**: Preserve function and appearance; early specialist involvement
`,
        mnemonics: [
          { text: "Parkland = 4 mL × %BSA × kg (RL), half in 8 hrs, rest in 16 hrs", explanation: "Parkland formula for fluid resuscitation" },
          { text: "Burn Phases = Immediate (shock) → Acute (infection) → Convalescent (scarring)", explanation: "Three phases of burn recovery" },
          { text: "Inhalation Injury = Thermal (upper) + Chemical (lower) + Monitor CO (carbon monoxide)", explanation: "Types and assessment of inhalation injury" },
        ],
        keyPoints: [
          "Parkland formula standard for fluid resuscitation in major burns",
          "Fluid needs titrated to urine output; avoid overload",
          "Three phases: immediate (shock), acute (infection), convalescent (scarring)",
          "Inhalation injury major cause of mortality in burn patients",
          "Infection prevention through sterile technique and topical agents",
        ],
        textbookRefs: [{ book: "Bailey & Love's Short Practice of Surgery", chapter: "Ch 19", edition: "27th" }],
      },
      {
        layer: 3,
        slug: "burns-wound-management-clinical",
        title: "Burns & Wound Management - Clinical Applications",
        estimatedMinutes: 28,
        summary: "Management of specific burn types, wound care, surgical treatment, and rehabilitation.",
        contentMd: `# Burns & Wound Management - Clinical Applications

## Wound Care and Dressing
- **Initial Cleansing**: Gentle cleaning with mild soap, remove loose tissue
- **Debridement**: Removal of necrotic tissue (surgical or enzymatic)
- **Dressing Types**:
  - **Topical Agents**: Silver sulfadiazine, silver nitrate, mafenide
  - **Biological Dressings**: Xenograft, allograft, amniotic membrane
  - **Synthetic**: Silicone-based, polyurethane, hydrocolloids
  - **Gauze**: Standard but non-adherent, requires frequent changes
- **Frequency**: Daily changes, assessment for infection
- **Pain Management**: Analgesia before dressing changes

## Nutritional Support
- **Hypermetabolism**: Caloric needs 1.5-2x normal for large burns
- **Protein**: 1.5-2 g/kg/day to prevent muscle wasting
- **Route**: Enteral feeding preferred (oral or nasogastric)
- **Timing**: Early feeding within 24 hours reduces infection risk
- **Supplements**: High-protein, high-calorie formulas
- **Monitoring**: Weight, albumin, nitrogen balance

## Surgical Management of Burns
- **Escharotomy**: Surgical incision of burn eschar to relieve pressure and restore circulation
  - Indicated when full-thickness burn is circumferential or limiting function
  - Performed at bedside or OR
  - Followed by grafting when eschar separates

- **Skin Grafting**: Gold standard for large burns
  - **Autograft**: Patient's own skin (gold standard)
  - **Xenograft**: Animal skin (temporary coverage)
  - **Allograft**: Cadaveric skin (temporary coverage)
  - **Timing**: When wound bed ready (after eschar removal)

- **Tangential Excision**: Surgical removal of burned tissue layer by layer
  - Preserves viable tissue below burn
  - Faster healing compared to allowing natural separation

## Management of Specific Burn Types
### Thermal Burns
- Remove clothing, assess for compartment syndrome
- Standard Parkland resuscitation and wound care
- Watch for rhabdomyolysis (electrical or crush component)

### Chemical Burns
- Continuous irrigation with water (30-60 minutes minimum)
- Specific neutralization (not recommended by most centers; dilution preferred)
- Cover to prevent evaporation of chemical
- Systemic toxicity assessment (e.g., fluoride from HF burns)

### Electrical Burns
- ECG and cardiac monitoring (arrhythmias common)
- Assess for deep tissue injury (often underestimated)
- Urine myoglobin monitoring; fluid overload to prevent rhabdomyolysis
- Fluid needs often exceed Parkland prediction

### Radiation Burns
- Usually superficial unless high-dose exposure
- Standard wound care
- Monitor for delayed healing

## Rehabilitation and Long-Term Management
- **Physical Therapy**: Range of motion exercises, prevent contractures
- **Compression Garments**: Reduce hypertrophic scarring
- **Silicone Gel Sheets**: Improve scar appearance
- **Psychological Support**: Counseling, support groups, body image issues
- **Reconstructive Surgery**: Later correction of deformities, contractures
- **Return to Function**: Work, school, activities of daily living

## Complications
- **Acute**: Hypovolemia, acute kidney injury, inhalation injury, compartment syndrome
- **Subacute**: Infection, sepsis, malnutrition, stress ulcer, DIC
- **Chronic**: Scarring, contractures, psychological trauma, social reintegration issues
`,
        mnemonics: [
          { text: "Wound Care = Clean + Debride + Dress + Change Daily + Assess Infection", explanation: "Five steps of burn wound management" },
          { text: "Nutrition = Calories 1.5-2x + Protein 1.5-2 g/kg + Enteral Route + Early", explanation: "Key nutrition principles for burn patients" },
          { text: "Grafting = Autograft (best) > Allograft (temporary) > Xenograft (temporary)", explanation: "Hierarchy of skin grafting options" },
        ],
        keyPoints: [
          "Daily wound care with topical agents or dressings",
          "Enteral nutrition within 24 hours; high protein and calories",
          "Skin grafting gold standard for major burns (autograft preferred)",
          "Escharotomy for circumferential burns to restore circulation",
          "Electrical burns require ECG, cardiac monitoring, assess deep tissue damage",
        ],
        textbookRefs: [{ book: "Bailey & Love's Short Practice of Surgery", chapter: "Ch 19", edition: "27th" }],
      },
      {
        layer: 4,
        slug: "burns-wound-management-exam-prep",
        title: "Burns & Wound Management - Exam Preparation",
        estimatedMinutes: 25,
        summary: "NEXT-pattern exam questions on burn classification, Parkland formula, and burn management.",
        contentMd: `# Burns & Wound Management - Exam Preparation

## High-Yield Concepts
1. **Wallace Rule**: 9-9-18-9-9-18-1 for %BSA in adults
2. **Burn Severity**: Minor <10%, Moderate 10-20%, Major >20% or special areas
3. **Parkland Formula**: 4 mL × %BSA × kg (RL), half in first 8 hrs
4. **Burn Degrees**: 1st (erythema) → 2nd (blistering) → 3rd (white) → 4th (charring)
5. **Major Mortality Causes**: Inhalation injury, infection, hypovolemia
6. **Immediate Management**: Stop, cool, cover, airway, fluids, pain, tetanus, transfer

## Problem-Solving (60%)
- 50 kg man with 30% BSA second-degree burn. Calculate Parkland formula and fluid plan.
- 8-year-old with 25% BSA burns. Modify Wallace rule; plan resuscitation.
- Patient with circumferential chest burn showing respiratory distress. Plan management.
- Burn victim with singed nasal hairs and carbonaceous sputum. Assess inhalation injury.

## Analysis (30%)
- Compare thermal, chemical, and electrical burns in terms of injury pattern and management.
- Discuss infection prevention strategies in burn wound management.
- Analyze nutritional needs in large burns and optimal feeding strategy.
- Evaluate timing and type of skin grafting based on wound readiness.

## Recall (10%)
- Wallace rule percentages for head, arms, chest, abdomen, legs
- Burn degree definitions
- Four phases of burn care (immediate, acute, etc.)
- Topical agents for burn wounds
- Signs of inhalation injury
`,
        mnemonics: [
          { text: "Wallace = 9s (Head + neck), 18s (arms + chest + abdomen) + 18s (legs) + 1% (perineum)", explanation: "Wallace rule of nines breakdown" },
          { text: "Parkland = 4 × %BSA × kg ÷ 2 in 8 hrs, then ÷ 2 in 16 hrs (urine output goal 0.5 mL/kg)", explanation: "Parkland formula and monitoring" },
          { text: "Major Burn = >20% 2nd degree OR >10% 3rd degree OR special areas (face, hands, perineum)", explanation: "Criteria for major burn" },
        ],
        keyPoints: [
          "Wallace rule of nines essential for quick BSA estimation",
          "Parkland formula: 4 mL × %BSA × kg; half in first 8 hours",
          "Major burns >20% BSA or >10% third-degree require ICU care",
          "Inhalation injury most common cause of burn death",
          "Infection major complication; prevent with sterile technique",
        ],
        textbookRefs: [{ book: "Bailey & Love's Short Practice of Surgery", chapter: "Ch 19", edition: "27th" }],
      },
      {
        layer: 5,
        slug: "burns-wound-management-active-recall",
        title: "Burns & Wound Management - Active Recall",
        estimatedMinutes: 20,
        summary: "Flashcard Q&A for retention and spaced repetition on burns and wound management.",
        contentMd: `# Burns & Wound Management - Active Recall

## Flashcard Questions & Answers

**Q1: Describe the Wallace Rule of Nines for BSA estimation in adults.**
A: Head/Neck 9%, Each Arm 9% (18% total), Chest 9%, Abdomen 9%, Each Leg (anterior) 9% (18% total), Each Leg (posterior) 9% (18% total), Perineum 1%. Total = 100%.

**Q2: Classify burns by depth and describe appearance of each degree.**
A: 1st (Superficial): Erythema, no blistering. 2nd (Partial thickness): Blistering, pink/red. 3rd (Full thickness): White/charred, insensate, leathery. 4th: Extends to subcutaneous/muscle/bone.

**Q3: What is the Parkland Formula for fluid resuscitation?**
A: 4 mL × %BSA × body weight (kg) = total crystalloid (Ringer's lactate) for first 24 hours. Half given in first 8 hours, remaining half in next 16 hours. Titrate based on urine output (goal 0.5 mL/kg/hr).

**Q4: Classify burn severity and when hospitalization is required.**
A: Minor <10% BSA (outpatient). Moderate 10-20% BSA 2nd degree (hospitalize). Major >20% 2nd degree or >10% 3rd degree or special areas (hospitalize ICU). Critical >40% or inhalation (ICU).

**Q5: List five immediate management steps for a burn patient.**
A: (1) Stop burning/remove from heat, (2) Cool with water 10-20 min, (3) Cover with clean cloth, (4) Assess airway/inhalation injury, (5) Start IV fluids (Parkland), (6) Pain control, (7) Tetanus, (8) Transfer if major.

**Q6: What are signs of inhalation injury and how is it assessed?**
A: Signs: Singed nasal hairs, carbonaceous sputum, hoarseness, stridor, respiratory distress. Assessment: Fiberoptic laryngoscopy, carboxyhemoglobin levels, arterial blood gas, chest X-ray.

**Q7: Name three topical agents used for burn wound care.**
A: (1) Silver sulfadiazine (most common, broad spectrum), (2) Silver nitrate (antimicrobial, but stains), (3) Mafenide acetate (penetrates eschar, may cause acidosis).

**Q8: Describe the three phases of burn recovery and main focus of each.**
A: (1) Immediate Phase (0-48 hrs): Burn shock, hypovolemia, focus on fluid resuscitation. (2) Acute Phase (2-21 days): Infection risk, hypermetabolism, focus on infection prevention, nutrition. (3) Convalescent Phase (>3 weeks): Scarring, contractures, focus on rehabilitation, reconstruction.

**Q9: What is escharotomy and when is it indicated?**
A: Surgical incision through burn eschar to relieve pressure and restore circulation. Indicated when burn is circumferential (chest, abdomen, extremity) or limiting function/respiration.

**Q10: Explain nutritional management in major burns.**
A: Caloric needs 1.5-2x normal. Protein 1.5-2 g/kg/day. Prefer enteral feeding (oral or nasogastric) started within 24 hours (reduces infection). High-protein, high-calorie formulas. Monitor weight and albumin.
`,
        keyPoints: [
          "Wallace rule: 9-9-18-9-9-18-1 for quick %BSA estimation",
          "Parkland: 4 mL × %BSA × kg; half in first 8 hours",
          "Major burn: >20% 2nd degree or >10% 3rd degree",
          "Immediate management: stop, cool, cover, airway, fluids, pain, tetanus, transfer",
          "Inhalation injury major cause of mortality in burn patients",
        ],
        textbookRefs: [{ book: "Bailey & Love's Short Practice of Surgery", chapter: "Ch 19", edition: "27th" }],
      },
    ],
  },
  {
    topicCode: "SU-MOD-07-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "arterial-diseases-foundation",
        title: "Arterial Diseases - Foundation",
        estimatedMinutes: 25,
        summary: "Introduction to arterial diseases including acute limb ischemia, chronic ischemia, and aneurysms.",
        contentMd: `# Arterial Diseases - Foundation

## Definition and Classification
### Acute Limb Ischemia
- **Sudden onset** (<2 weeks) of limb ischemia
- **Severity**: Threatens limb viability
- **Causes**: Embolism (60%), thrombosis (25-30%), trauma, dissection

### Chronic Limb Ischemia
- **Gradual onset** (weeks to months/years)
- **Due to**: Atherosclerosis, stenosis, occlusion
- **Stages**: Claudication → Rest pain → Tissue loss

### Aneurysm
- **Localized dilation** of artery >50% normal diameter
- **Aortic Aneurysms**: Abdominal (AAA), thoracic
- **Peripheral Aneurysms**: Femoral, popliteal

## Presentation of Acute Limb Ischemia
### 6 Ps of Acute Ischemia
1. **Pain**: Sudden severe pain
2. **Pallor**: Pale, white limb
3. **Pulselessness**: Absent pulses
4. **Paresthesia**: Numbness, tingling
5. **Paralysis**: Late sign (irreversible)
6. **Poikilothermia**: Cold limb

### Rutherford Classification
- **Category I**: Viable limb (minimal symptoms)
- **Category IIa**: Threatened but salvageable (mild symptoms)
- **Category IIb**: Threatened, immediate intervention needed
- **Category III**: Irreversible, amputation needed

## Chronic Limb Ischemia Presentations
### Claudication
- **Definition**: Reproducible limb pain with exercise, relieved by rest
- **Location**: Calf (most common), buttock, thigh
- **Distance**: Claudication distance indicates severity
- **Features**: No pain at rest, leg appearance normal

### Rest Pain
- **Indicates**: Severe ischemia, critical limb ischemia
- **Pain at night** in lower leg/foot
- **Relieved by**: Hanging leg down (gravity helps perfusion)
- **Outcome**: Without treatment, likely leads to tissue loss

### Tissue Loss
- **Gangrene**: Dead tissue, black appearance
- **Ulcers**: Non-healing foot ulcers
- **Amp risk**: Imminent without revascularization

## Buerger's Disease (Thromboangiitis Obliterans)
- **Definition**: Segmental inflammation and thrombosis of small/medium arteries
- **Risk Factor**: Smoking (almost exclusive); strong association
- **Presentation**: Claudication, rest pain, tissue loss in younger patients
- **Distribution**: Often affects upper extremities (unusual)
- **Pathology**: Segmental occlusion with preserved collaterals between segments
- **Diagnosis**: Clinical + imaging (angiography shows skip lesions)
- **Management**: Absolute smoking cessation (key); symptomatic treatment; amputation if severe
`,
        mnemonics: [
          { text: "6 Ps Acute Ischemia = Pain + Pallor + Pulselessness + Paresthesia + Paralysis + Poikilothermia", explanation: "Clinical presentation of acute limb ischemia" },
          { text: "Claudication = Reproducible pain with EXERCISE relieved by REST (chronic)", explanation: "Key features of claudication" },
          { text: "Buerger's = Smoking + Young + Inflammation + Segmental (skip lesions)", explanation: "Key features of Buerger's disease" },
        ],
        keyPoints: [
          "Acute limb ischemia: sudden onset, 6 Ps presentation, requires urgent intervention",
          "Claudication: reproducible pain with exercise, relieved by rest",
          "Rest pain: indicates critical ischemia; pain worse at night",
          "Buerger's disease: young smokers, segmental occlusion with skip lesions",
          "Risk of amputation increases with severity of ischemia",
        ],
        textbookRefs: [{ book: "Bailey & Love's Short Practice of Surgery", chapter: "Ch 47", edition: "27th" }],
      },
      {
        layer: 2,
        slug: "arterial-diseases-mechanism",
        title: "Arterial Diseases - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathophysiology of atherosclerosis, ischemia, and investigations for vascular disease.",
        contentMd: `# Arterial Diseases - Mechanism

## Pathophysiology of Atherosclerosis
### Formation of Atherosclerotic Lesions
- **Intimal Injury**: Endothelial damage from smoking, hypertension, hyperlipidemia
- **Lipid Accumulation**: LDL infiltration and oxidation in intima
- **Inflammatory Response**: Macrophage activation, foam cell formation
- **Smooth Muscle Proliferation**: Fibrous cap formation over lipid core
- **Thrombosis**: Plaque rupture leads to thrombosis and acute occlusion

### Stages of Atherosclerotic Obstruction
- **0-50% Stenosis**: Hemodynamically insignificant
- **50-70% Stenosis**: Starting to affect flow
- **>70% Stenosis**: Significant obstruction; symptoms likely
- **100% Occlusion**: Complete blockage

## Ischemia and Tissue Damage
### Acute Ischemia Cascade
- **Immediate**: Stopped perfusion → anaerobic metabolism → lactate accumulation
- **Minutes**: ATP depletion → loss of cellular function → reversible injury
- **Hours**: Irreversible cell death, necrosis
- **6-8 hours**: Severe tissue damage; muscular necrosis begins
- **>12 hours**: Extensive necrosis; high amputation risk

### Collateral Circulation Development
- **Chronic Ischemia**: Gradual stenosis allows collateral development
- **Natural Bypass**: Alternative vessels develop around blockage
- **Improved Symptoms**: Collaterals can improve walking distance
- **Acute Occlusion**: No time for collateral development; worse outcome

## Diagnostic Investigations
### Ankle-Brachial Index (ABI)
- **Calculation**: Ankle systolic pressure / Brachial systolic pressure
- **Normal**: 0.9-1.1
- **Mild Disease**: 0.7-0.9
- **Moderate Disease**: 0.5-0.7
- **Severe Disease**: <0.5
- **Advantage**: Simple, non-invasive, reproducible
- **Limitation**: Falsely elevated in calcified vessels

### Duplex Ultrasonography
- **Method**: Combined B-mode imaging + Doppler flow
- **Information**: Location and degree of stenosis
- **Advantage**: Non-invasive, no radiation, repeatable
- **Limitation**: Operator-dependent, difficult in obese patients

### CT and MR Angiography
- **CTA**: Fast, good for acute ischemia, radiation exposure
- **MRA**: No radiation, but contraindicated with some implants
- **Use**: Preoperative planning, assess collaterals, identify occlusion level

### Digital Subtraction Angiography
- **Gold Standard**: Direct visualization of vessels
- **Invasive**: Requires arterial puncture
- **Use**: When intervention planned (allows simultaneous balloon/stent)
- **Risk**: Contrast reaction, renal dysfunction, atheroemboli

## Risk Factors and Prevention
### Modifiable Risk Factors
- Smoking (strongest; can reduce symptoms 40%)
- Hypertension
- Hypercholesterolemia
- Diabetes
- Physical inactivity

### Non-Modifiable
- Age
- Male gender
- Family history

### Medical Management
- **Antiplatelet Agents**: Aspirin, clopidogrel
- **Statins**: Reduce lipids and plaque rupture
- **Beta-Blockers**: For associated CAD
- **ACE Inhibitors**: For associated hypertension/renal protection
- **Exercise**: Supervised walking program (improves claudication)
`,
        mnemonics: [
          { text: "ABI = Ankle Pressure / Brachial Pressure (normal 0.9-1.1)", explanation: "Ankle-brachial index calculation" },
          { text: "Ischemia Cascade = Minutes (ATP↓) → Hours (necrosis) → >12 hrs (severe)", explanation: "Timeline of ischemic tissue damage" },
          { text: "Stenosis Severity = 50% (mild) → 70% (significant) → 100% (occlusion)", explanation: "Degree of arterial obstruction" },
        ],
        keyPoints: [
          "Atherosclerosis develops through endothelial injury, lipid accumulation, inflammation",
          "Acute ischemia more severe than chronic (no collateral development)",
          "ABI simple, non-invasive initial screening for arterial disease",
          "Duplex ultrasound best first-line imaging (non-invasive, repeatable)",
          "Medical management with antiplatelet, statin, exercise reduces progression",
        ],
        textbookRefs: [{ book: "Bailey & Love's Short Practice of Surgery", chapter: "Ch 47-48", edition: "27th" }],
      },
      {
        layer: 3,
        slug: "arterial-diseases-clinical",
        title: "Arterial Diseases - Clinical Applications",
        estimatedMinutes: 28,
        summary: "Management of acute and chronic limb ischemia, revascularization procedures, and outcomes.",
        contentMd: `# Arterial Diseases - Clinical Applications

## Management of Acute Limb Ischemia
### Immediate Steps
1. **Assess Viability**: Determine if limb salvageable (Rutherford category)
2. **Anticoagulation**: Heparin immediately (prevent propagation of thrombus)
3. **Imaging**: Duplex or CTA to identify occlusion site
4. **Revascularization**: Urgent intervention needed

### Revascularization Options
- **Catheter Embolectomy (Fogarty)**: For emboli, especially recent
  - Balloon catheter retrieves clot
  - Performed under local anesthesia
  - Quick, effective for proximal occlusions

- **Thrombolysis**: Intra-arterial thrombolytic agents (tPA, urokinase)
  - Good for in-situ thrombosis
  - Takes time (24-48 hours); not suitable if irreversibility
  - Risk of distal embolization

- **Bypass Surgery**: For thrombosed bypass or extensive atherosclerosis
  - Femoral-distal grafts (vein > prosthetic)
  - Takes time; reserved for salvageable limbs
  - Lower limb salvage rate

### Management by Category
- **Category I (Viable)**: Heparin + elective investigation + vascular clinic
- **Category IIa (Threatened)**: Immediate revascularization (embolectomy/lysis)
- **Category IIb (Threatened, severe)**: Emergency revascularization + consider amputation
- **Category III (Irreversible)**: Primary amputation, comfort care

## Management of Chronic Limb Ischemia
### Conservative Management (First-Line)
- **Risk Factor Modification**: Smoking cessation (most important), BP control, lipid lowering
- **Antiplatelet Therapy**: Aspirin or clopidogrel
- **Exercise Program**: Supervised walking 30-60 min, 3-5 times/week (improves claudication)
- **Foot Care**: Prevent ulceration, proper footwear, nail care
- **Outcome**: 70-80% improve or stabilize with conservative management

### Interventional Management
- **Indications**: Disabling claudication or critical limb ischemia
- **Angioplasty ± Stent**: For short, focal lesions (<5 cm)
  - High success rate (>90%)
  - Low morbidity
  - Lower durability than bypass

- **Bypass Surgery**: For long occlusions or failed angioplasty
  - **Autologous Vein**: Best patency (saphenous vein preferred)
  - **Prosthetic Graft**: Used if vein unavailable
  - **Patency**: Vein better than prosthetic (5-year >50% vs <50%)

## Management of Aneurysms
### Abdominal Aortic Aneurysm (AAA)
- **Screening**: Men 65-75 years who smoked
- **Repair Indications**: Diameter >5.5 cm or rapidly expanding (>0.5 cm/year)
- **Open Repair**: Gold standard, proven durable
- **EVAR**: Endovascular, less invasive, faster recovery
- **Mortality**: Ruptured AAA ~50% even with surgery

### Peripheral Aneurysms
- **Popliteal**: Most common; rupture/thrombosis risk; repair if >2 cm
- **Femoral**: Repair if >2 cm or symptomatic
- **Repair**: Bypass with vein or prosthetic graft

## Amputation Decision
- **When to Amputate**:
  - Category III ischemia (irreversible)
  - Failed revascularization + tissue loss
  - Infected gangrene
  - Quality of life considerations

- **Timing**:
  - Demarcation of gangrene (2-4 weeks) if stable
  - Urgent if infection/sepsis

- **Level**:
  - BKA (below-knee): Better function if possible
  - AKA (above-knee): If extensive tissue loss, vascular disease

- **Outcomes**: Prosthetic fitting success varies; patient rehabilitation important

## Buerger's Disease Management
- **Smoking Cessation**: Absolute requirement; non-smokers may stabilize or improve
- **Angioplasty**: Limited role; vascular injury from inflammation complicates intervention
- **Sympathectomy**: Historical; limited evidence
- **Amputation**: If severe tissue loss and smoking continues
- **Prognosis**: Dependent on smoking cessation; continued smoking leads to amputation
`,
        mnemonics: [
          { text: "Acute Ischemia Management = Heparin + Imaging + Revascularize (urgent)", explanation: "Initial management approach" },
          { text: "Chronic Management = Risk Factor Modification (1st) → Exercise → Intervention if needed", explanation: "Step-wise approach to claudication" },
          { text: "AAA Repair Indications = >5.5 cm diameter OR rapidly expanding (>0.5 cm/yr)", explanation: "When to repair AAA" },
        ],
        keyPoints: [
          "Acute ischemia: urgent intervention needed; Fogarty embolectomy or thrombolysis",
          "Chronic claudication: smoking cessation, exercise, antiplatelet therapy first",
          "Revascularization: angioplasty for short lesions, bypass for long occlusions",
          "Autologous vein bypass superior patency compared to prosthetic graft",
          "Buerger's disease requires smoking cessation; amputation if non-compliant",
        ],
        textbookRefs: [{ book: "Bailey & Love's Short Practice of Surgery", chapter: "Ch 47-48", edition: "27th" }],
      },
      {
        layer: 4,
        slug: "arterial-diseases-exam-prep",
        title: "Arterial Diseases - Exam Preparation",
        estimatedMinutes: 25,
        summary: "NEXT-pattern exam questions on acute/chronic ischemia, aneurysms, and management.",
        contentMd: `# Arterial Diseases - Exam Preparation

## High-Yield Concepts
1. **6 Ps of Acute Ischemia**: Pain, Pallor, Pulselessness, Paresthesia, Paralysis, Poikilothermia
2. **Claudication**: Reproducible pain with exercise, relieved by rest
3. **Rest Pain**: Critical ischemia; pain at night relieved by hanging leg down
4. **ABI**: Ankle/Brachial pressure; normal 0.9-1.1
5. **Rutherford Classification**: I (viable) → IIa → IIb → III (irreversible)
6. **Buerger's Disease**: Young smokers, segmental occlusion with skip lesions

## Problem-Solving (60%)
- Patient presents with acute left foot pain, pallor, pulselessness. Diagnose and manage.
- Calculate ABI: Ankle 80 mmHg, Brachial 120 mmHg. Interpret severity.
- 70-year-old with claudication. Design conservative management plan.
- 5.8 cm AAA found on screening. Recommend management approach.

## Analysis (30%)
- Compare acute vs. chronic limb ischemia in terms of pathophysiology and outcome.
- Discuss advantages and disadvantages of angioplasty vs. bypass surgery.
- Analyze when amputation is necessary vs. attempted revascularization.
- Evaluate role of smoking cessation in Buerger's disease management.

## Recall (10%)
- Six Ps of acute ischemia
- Rutherford categories and management by category
- Risk factors for atherosclerotic disease
- Indications for AAA repair
- Features of Buerger's disease
`,
        mnemonics: [
          { text: "Rutherford = Viable (I) → Threatened mild (IIa) → Threatened severe (IIb) → Irreversible (III)", explanation: "Classification and severity progression" },
          { text: "ABI Interpretation = Normal 0.9-1.1, Mild 0.7-0.9, Moderate 0.5-0.7, Severe <0.5", explanation: "ABI values and disease severity" },
          { text: "AAA Repair = >5.5 cm OR rapidly expanding >0.5/year (criteria)", explanation: "When to repair abdominal aortic aneurysm" },
        ],
        keyPoints: [
          "6 Ps present in acute ischemia; urgent intervention needed",
          "Claudication manageable with conservative therapy for most patients",
          "ABI screening useful; >70% stenosis if ABI <0.7",
          "Autologous vein bypasses have better long-term patency",
          "Buerger's disease: smoking cessation is key; continued smoking leads to amputation",
        ],
        textbookRefs: [{ book: "Bailey & Love's Short Practice of Surgery", chapter: "Ch 47-48", edition: "27th" }],
      },
      {
        layer: 5,
        slug: "arterial-diseases-active-recall",
        title: "Arterial Diseases - Active Recall",
        estimatedMinutes: 20,
        summary: "Flashcard Q&A for retention and spaced repetition on arterial diseases.",
        contentMd: `# Arterial Diseases - Active Recall

## Flashcard Questions & Answers

**Q1: Name the 6 Ps of acute limb ischemia and their meanings.**
A: (1) Pain - sudden severe pain, (2) Pallor - pale/white limb, (3) Pulselessness - absent pulses, (4) Paresthesia - numbness/tingling, (5) Paralysis - late irreversible sign, (6) Poikilothermia - cold limb.

**Q2: Define claudication and contrast with rest pain.**
A: Claudication = reproducible pain with walking/exercise relieved by rest; no pain at rest; indicates chronic ischemia. Rest pain = pain at rest, worse at night, indicates critical ischemia; relieved by hanging leg down.

**Q3: What is the Rutherford classification for acute limb ischemia?**
A: Category I (Viable): Minimal symptoms, no intervention urgent. IIa (Threatened mild): Mild symptoms, revascularization needed soon. IIb (Threatened severe): Rest pain, revascularize immediately. III (Irreversible): Dead tissue/sepsis, amputation needed.

**Q4: How is Ankle-Brachial Index (ABI) calculated and interpreted?**
A: ABI = Ankle systolic pressure / Brachial systolic pressure. Normal 0.9-1.1. Mild disease 0.7-0.9. Moderate 0.5-0.7. Severe <0.5. Useful screening but falsely elevated in calcified vessels.

**Q5: Describe presentation and pathophysiology of Buerger's disease.**
A: Buerger's = Thromboangiitis obliterans. Presentation: Young patient (30-50s), smoker with claudication, often affects upper extremities (unusual). Pathology: Segmental inflammation/thrombosis with skip lesions between segments. Diagnosis: Angiography shows characteristic skip lesions.

**Q6: Compare management of acute vs. chronic limb ischemia.**
A: Acute: Urgent (within hours); anticoagulation + immediate revascularization (embolectomy or thrombolysis) to salvage limb. Chronic: Conservative initially (risk factor modification, exercise); intervene if disabling symptoms or critical ischemia.

**Q7: List three revascularization options for acute limb ischemia.**
A: (1) Fogarty catheter embolectomy - for emboli, quick, local anesthesia. (2) Intra-arterial thrombolysis - for in-situ thrombosis, takes time. (3) Bypass surgery - for extensive disease, lower limb salvage.

**Q8: What are indications for repair of abdominal aortic aneurysm (AAA)?**
A: (1) Diameter >5.5 cm (risk of rupture), (2) Rapidly expanding (>0.5 cm/year), (3) Symptomatic or pain. Repair either open or endovascular (EVAR).

**Q9: Compare autologous vein vs. prosthetic graft for bypass surgery.**
A: Autologous vein (saphenous) = gold standard, better patency (5-year >50%), preferred. Prosthetic graft = used if vein unavailable, lower patency (5-year <50%), used in emergency.

**Q10: What is the critical management principle in Buerger's disease?**
A: Absolute smoking cessation is essential. Non-smokers may stabilize or improve. Continued smoking despite intervention leads to progression and amputation. Smoking cessation has greater impact than any intervention.
`,
        keyPoints: [
          "6 Ps of acute ischemia; urgent intervention within hours required",
          "Claudication vs. rest pain: claudication with exercise, rest pain indicates critical ischemia",
          "ABI <0.7 indicates significant stenosis (>70%)",
          "Autologous vein grafts superior patency to prosthetic",
          "Buerger's disease: smoking cessation mandatory; continued smoking leads to amputation",
        ],
        textbookRefs: [{ book: "Bailey & Love's Short Practice of Surgery", chapter: "Ch 47-48", edition: "27th" }],
      },
    ],
  },

  // ─── SU-MOD-07-TOP-05: Venous Diseases ─────────────────────────
  {
    topicCode: "SU-MOD-07-TOP-05",
    layers: [
      {
        layer: 1, slug: "venous-diseases-foundation", title: "Venous Diseases - Foundation",
        estimatedMinutes: 25, summary: "Overview of DVT, PE, varicose veins, CVI, and venous ulcers.",
        contentMd: `# Venous Diseases

## Deep Vein Thrombosis (DVT)
Virchow's triad: stasis, endothelial injury, hypercoagulability.
- **Risk factors**: Surgery, immobilization, pregnancy, OCP, malignancy, thrombophilia
- **Sites**: 90% in lower limb — iliac, femoral, popliteal, calf veins
- **Phlegmasia alba dolens**: Massive iliofemoral DVT → pale swollen limb
- **Phlegmasia cerulea dolens**: Complete venous obstruction → cyanotic, gangrenous limb

## Pulmonary Embolism (PE)
Most PE arise from DVT (propagation through IVC → pulmonary arteries).
- **Massive PE**: >50% pulmonary vasculature occluded → hemodynamic collapse
- **Saddle embolus**: Lodges at bifurcation of main pulmonary artery

## Varicose Veins
Dilated, tortuous superficial veins due to valvular incompetence.
- **Primary**: Idiopathic valve failure (90%)
- **Secondary**: Post-thrombotic, pregnancy, pelvic tumor
- **Great saphenous vein** most commonly affected
- **Clinical tests**: Trendelenburg, Perthes, modified Schwartz tap test

## Chronic Venous Insufficiency (CVI)
Long-term sequela of DVT or varicose veins → venous hypertension → skin changes.
- **Lipodermatosclerosis**: Indurated, hyperpigmented skin (hemosiderin)
- **Venous ulcer**: Gaiter area (medial malleolus), shallow, irregular edges`,
        mnemonics: [
          { text: "Virchow's Triad = SEH", explanation: "Stasis, Endothelial injury, Hypercoagulability — 3 factors predisposing to thrombosis" },
          { text: "Venous ulcer = Medial Malleolus; Arterial ulcer = Lateral/Distal", explanation: "Location differentiates venous from arterial ulcers" },
        ],
        keyPoints: [
          "Virchow's triad: stasis, endothelial injury, hypercoagulability",
          "DVT most commonly affects lower limb deep veins (iliofemoral, popliteal)",
          "PE is the most dangerous complication of DVT — can cause sudden death",
          "Varicose veins: primary (90% valve failure) vs secondary (post-thrombotic)",
          "Venous ulcers occur at gaiter area (medial malleolus) — unlike arterial ulcers",
        ],
        textbookRefs: [{ book: "Bailey & Love's Short Practice of Surgery", chapter: "Ch 56: Venous Disorders", edition: "27th" }],
      },
      {
        layer: 2, slug: "venous-diseases-mechanism", title: "Venous Diseases - Mechanism",
        estimatedMinutes: 30, summary: "Pathophysiology of DVT propagation, PE hemodynamics, and venous valve failure.",
        contentMd: `# Venous Disease Mechanisms

## DVT Pathogenesis
1. Endothelial damage → tissue factor exposure → extrinsic pathway activation
2. Stasis → local accumulation of clotting factors → failure to dilute/clear
3. Hypercoagulability → Factor V Leiden, protein C/S deficiency, antithrombin III deficiency

## Propagation and Embolization
- Thrombus forms in venous valve sinuses (slow flow areas)
- Propagates proximally — calf DVT → popliteal → femoral → iliac
- Fragment detaches → travels via IVC → right heart → pulmonary arteries

## PE Hemodynamics
- Obstruction increases pulmonary vascular resistance (PVR)
- Right ventricle dilates under pressure overload → RV failure
- Decreased LV filling → decreased cardiac output → shock
- V/Q mismatch in remaining lung → hypoxemia

## Varicose Vein Pathophysiology
- Vein wall weakness + valve incompetence → retrograde flow
- Increased hydrostatic pressure → vein dilation → further valve incompetence (vicious cycle)
- Superficial veins lack external support (unlike deep veins protected by muscle)

## Post-Thrombotic Syndrome
DVT damages deep vein valves → persistent venous hypertension → CVI
- Ambulatory venous pressure fails to decrease with exercise
- Capillary leak → edema, hemosiderin deposition, lipodermatosclerosis`,
        mnemonics: [
          { text: "DVT propagates CPFI", explanation: "Calf → Popliteal → Femoral → Iliac — proximal propagation of DVT" },
          { text: "PE = RV failure + V/Q mismatch", explanation: "Two main mechanisms: right heart strain and gas exchange impairment" },
        ],
        keyPoints: [
          "DVT starts in valve sinuses and propagates proximally",
          "PE causes RV pressure overload → RV dilation → decreased cardiac output",
          "V/Q mismatch in PE causes hypoxemia despite some areas having normal ventilation",
          "Varicose veins result from a vicious cycle of valve incompetence → dilation → more incompetence",
          "Post-thrombotic syndrome is the long-term consequence of deep vein valve damage",
        ],
        textbookRefs: [{ book: "Bailey & Love's Short Practice of Surgery", chapter: "Ch 56", edition: "27th" }],
      },
      {
        layer: 3, slug: "venous-diseases-clinical", title: "Venous Diseases - Clinical",
        estimatedMinutes: 25, summary: "Diagnosis and management of DVT, PE, and varicose veins.",
        contentMd: `# Clinical Management of Venous Diseases

## DVT Diagnosis
- **Wells score**: Clinical probability assessment
- **D-dimer**: High NPV (negative predictive value) — rules out if negative
- **Doppler ultrasound**: First-line imaging — non-compressibility of vein
- **CT venography**: For iliac/pelvic DVT

## DVT Management
1. **Anticoagulation**: LMWH → Warfarin (INR 2-3) for 3-6 months; or DOACs (rivaroxaban, apixaban)
2. **Thrombolysis**: Catheter-directed for massive iliofemoral DVT
3. **IVC filter**: When anticoagulation is contraindicated
4. **Compression stockings**: 30-40 mmHg for post-thrombotic syndrome prevention

## PE Diagnosis & Management
- **CTPA** (CT Pulmonary Angiography): Gold standard
- **Massive PE**: Systemic thrombolysis (alteplase) or embolectomy
- **Submassive PE**: Anticoagulation ± thrombolysis based on RV strain

## Varicose Vein Management
- **Conservative**: Compression stockings (20-30 mmHg), leg elevation, exercise
- **Sclerotherapy**: Injection of sclerosant (sodium tetradecyl sulfate)
- **Radiofrequency/Laser ablation**: Minimally invasive, preferred
- **Surgery**: Saphenofemoral ligation + stripping (Trendelenburg procedure)
- **EVLA**: Endovenous laser ablation — outpatient, high success rate

## Indian Context
- DVT is underdiagnosed in India; awareness campaigns needed
- Varicose veins common in occupations requiring prolonged standing (traffic police, teachers)`,
        mnemonics: [
          { text: "Wells Score for DVT: CAST PAD", explanation: "Cancer, Active bedridden, Swelling (calf >3cm), Tenderness, Pitting edema, Alternative diagnosis less likely, DVT history" },
          { text: "PE: CTPA is gold standard", explanation: "CT Pulmonary Angiography confirms PE with sensitivity >95%" },
        ],
        keyPoints: [
          "D-dimer is useful to EXCLUDE DVT (high NPV); positive D-dimer needs imaging",
          "Doppler ultrasound showing non-compressible vein confirms DVT",
          "CTPA is the gold standard for PE diagnosis",
          "Massive PE requires systemic thrombolysis or surgical embolectomy",
          "Varicose veins: EVLA/radiofrequency ablation preferred over stripping",
        ],
        textbookRefs: [{ book: "Bailey & Love's Short Practice of Surgery", chapter: "Ch 56", edition: "27th" }, { book: "SRB's Manual of Surgery", chapter: "Venous Disorders", edition: "6th" }],
      },
      {
        layer: 4, slug: "venous-diseases-exam-prep", title: "Venous Diseases - Exam Prep",
        estimatedMinutes: 15, summary: "High-yield comparisons and exam-focused facts.",
        contentMd: `# Exam Prep: Venous Diseases

## Venous vs Arterial Ulcer Comparison
| Feature | Venous Ulcer | Arterial Ulcer |
|---------|-------------|----------------|
| Location | Gaiter area (medial malleolus) | Tips of toes, heel, lateral malleolus |
| Edge | Sloping, irregular | Punched out |
| Base | Granulation tissue | Pale, no granulation |
| Pain | Mild (worse standing) | Severe (worse at night, relieved by dependency) |
| Skin | Pigmented, lipodermatosclerosis | Shiny, hairless, atrophic |
| Pulses | Present | Absent/diminished |
| ABI | Normal (>0.9) | Low (<0.9) |

## Key Facts for NEXT
| Topic | Key Point |
|-------|-----------|
| Virchow's triad | Stasis + Endothelial injury + Hypercoagulability |
| Most common inherited thrombophilia | Factor V Leiden |
| D-dimer in DVT | High sensitivity, low specificity |
| Most dangerous varicose vein complication | PE from DVT |
| Trendelenburg test | SFJ incompetence |
| Brodie-Trendelenburg test | Perforator incompetence |
| Saphena varix | Swelling at SFJ, cough impulse positive |`,
        mnemonics: [
          { text: "Factor V Leiden = Most common inherited thrombophilia", explanation: "Resistance to activated protein C — increases DVT risk 3-8 fold" },
          { text: "Venous ulcer = MEDIAL + Granulating; Arterial = LATERAL + Punched out", explanation: "Key exam differentiator between venous and arterial ulcers" },
        ],
        keyPoints: [
          "Factor V Leiden is the most common inherited thrombophilia",
          "Venous ulcers: gaiter area, sloping edges, granulation base",
          "Arterial ulcers: distal toes/heel, punched out, pale base",
          "ABI <0.9 suggests arterial disease; normal in venous disease",
          "Saphena varix: swelling at SFJ with cough impulse — do NOT confuse with femoral hernia",
        ],
        textbookRefs: [{ book: "Bailey & Love's Short Practice of Surgery", chapter: "Ch 56", edition: "27th" }],
      },
      {
        layer: 5, slug: "venous-diseases-active-recall", title: "Venous Diseases - Active Recall",
        estimatedMinutes: 12, summary: "Flashcard Q&A for venous diseases.",
        contentMd: `# Active Recall: Venous Diseases

**Q1:** What is Virchow's triad?
> Stasis, endothelial injury, hypercoagulability

**Q2:** Most common inherited thrombophilia?
> Factor V Leiden (resistance to activated protein C)

**Q3:** Gold standard investigation for PE?
> CT Pulmonary Angiography (CTPA)

**Q4:** D-dimer negative in suspected DVT — next step?
> DVT is excluded (high negative predictive value)

**Q5:** Location of venous ulcer?
> Gaiter area — above medial malleolus

**Q6:** What is phlegmasia cerulea dolens?
> Complete venous obstruction → cyanotic, swollen, gangrenous limb (emergency)

**Q7:** Trendelenburg test assesses?
> Saphenofemoral junction (SFJ) incompetence

**Q8:** Treatment of massive PE with hemodynamic instability?
> Systemic thrombolysis (alteplase) or surgical embolectomy

**Q9:** Duration of anticoagulation for first episode provoked DVT?
> 3 months

**Q10:** What is the preferred modern treatment for varicose veins?
> Endovenous laser ablation (EVLA) or radiofrequency ablation

**Q11:** ABI in venous ulcer vs arterial ulcer?
> Venous: normal (>0.9); Arterial: low (<0.9)

**Q12:** What is post-thrombotic syndrome?
> CVI after DVT due to deep vein valve damage → venous hypertension, edema, ulceration`
      },
    ],
  },

  // ─── SU-MOD-09-TOP-04: Skin Tumors ─────────────────────────
  {
    topicCode: "SU-MOD-09-TOP-04",
    layers: [
      {
        layer: 1, slug: "skin-tumors-surgical-foundation", title: "Skin Tumors - Foundation",
        estimatedMinutes: 25, summary: "Classification and overview of BCC, SCC, and melanoma from a surgical perspective.",
        contentMd: `# Skin Tumors — Surgical Perspective

## Classification
| Tumor | Origin | Behavior | Commonest Site |
|-------|--------|----------|---------------|
| **BCC** | Basal cells of epidermis | Locally invasive, rarely metastasizes | Sun-exposed areas (nose, eyelid) |
| **SCC** | Squamous cells of epidermis | Locally invasive, can metastasize | Sun-exposed, scars, chronic ulcers |
| **Melanoma** | Melanocytes | Highly aggressive, early metastasis | Anywhere (legs in women, trunk in men) |

## Basal Cell Carcinoma (BCC)
- **Most common skin cancer** worldwide
- "Rodent ulcer" — slowly eroding, rarely fatal
- Types: nodular (most common, pearly papule with telangiectasia), superficial, morphoeiform (aggressive)
- Rolled pearly border with central ulceration

## Squamous Cell Carcinoma (SCC)
- Second most common skin cancer
- Premalignant conditions: actinic keratosis, Bowen's disease, leukoplakia, Marjolin's ulcer (SCC in chronic scar/ulcer)
- Can metastasize to regional lymph nodes (5-10%)

## Malignant Melanoma
- Most lethal skin cancer despite being less common
- **ABCDE criteria**: Asymmetry, Border irregularity, Color variation, Diameter >6mm, Evolving
- Types: Superficial spreading (most common), Nodular (worst prognosis), Lentigo maligna, Acral lentiginous
- **Breslow thickness** is the most important prognostic factor

## Indian Context
- Lower incidence than Western countries due to melanin protection
- Acral lentiginous melanoma more common in Indian/darker-skinned populations (palms, soles, nail beds)
- Marjolin's ulcer seen in chronic burn scars — common in India`,
        mnemonics: [
          { text: "ABCDE for melanoma", explanation: "Asymmetry, Border irregularity, Color variation, Diameter >6mm, Evolving" },
          { text: "BCC = Basal = Benign behavior (almost never metastasizes)", explanation: "BCC is locally invasive but metastasis is exceedingly rare (<0.1%)" },
        ],
        keyPoints: [
          "BCC is the most common skin cancer; melanoma is the most lethal",
          "BCC: pearly papule with rolled border and central ulceration (rodent ulcer)",
          "SCC can arise from premalignant conditions (Bowen's, Marjolin's ulcer)",
          "Breslow thickness is the single most important prognostic factor for melanoma",
          "Acral lentiginous melanoma is more common in Indian/darker-skinned populations",
        ],
        textbookRefs: [{ book: "Bailey & Love's Short Practice of Surgery", chapter: "Ch 40: Skin and Subcutaneous Tissue", edition: "27th" }],
      },
      {
        layer: 2, slug: "skin-tumors-surgical-mechanism", title: "Skin Tumors - Mechanism",
        estimatedMinutes: 25, summary: "Molecular pathogenesis of BCC (Hedgehog pathway), SCC (p53), and melanoma (BRAF, NRAS).",
        contentMd: `# Skin Tumor Pathogenesis

## BCC: Hedgehog Signaling Pathway
- Patched (PTCH1) gene mutation → loss of Hedgehog pathway inhibition
- Smoothened (SMO) constitutively activated → uncontrolled basal cell proliferation
- UV radiation is the primary carcinogen
- **Gorlin syndrome**: Germline PTCH1 mutation → multiple BCCs from young age

## SCC: p53 and UV Damage
- UV-B radiation causes pyrimidine dimers in DNA
- p53 tumor suppressor mutations → loss of cell cycle arrest and apoptosis
- Immunosuppression (transplant patients) dramatically increases risk (65x)
- HPV (types 16, 18) contributes to some mucosal SCCs

## Melanoma: MAPK Pathway
- **BRAF mutation** (V600E) — present in ~50% of melanomas → targeted therapy (vemurafenib)
- **NRAS mutation** — 15-20%
- UV radiation → mutation accumulation → melanocyte transformation
- Tumor microenvironment: immune evasion via PD-L1 expression → basis for immunotherapy

## Clark's Levels vs Breslow Thickness
| Clark's Level | Depth | Breslow (mm) |
|--------------|-------|-------------|
| I | Epidermis only (in situ) | <1.0 |
| II | Papillary dermis | 1.0-2.0 |
| III | Papillary-reticular junction | 2.0-4.0 |
| IV | Reticular dermis | >4.0 |
| V | Subcutaneous fat | >4.0 |

Breslow thickness has REPLACED Clark's levels as the primary prognostic indicator.`,
        mnemonics: [
          { text: "BCC = Hedgehog pathway; Melanoma = BRAF (MAP Kinase)", explanation: "Key molecular pathways for each skin cancer type" },
          { text: "BRAF V600E in 50% melanomas", explanation: "Valine to Glutamate at position 600 — targeted by vemurafenib/dabrafenib" },
        ],
        keyPoints: [
          "BCC arises from Hedgehog/PTCH1 pathway mutations; Gorlin syndrome = germline PTCH1",
          "SCC involves p53 mutations from UV-B damage; immunosuppression increases risk 65x",
          "BRAF V600E mutation in ~50% melanomas — targeted by vemurafenib",
          "Breslow thickness (mm) is the most important prognostic factor, replacing Clark's levels",
          "Melanoma immune evasion via PD-L1 — basis for pembrolizumab/nivolumab therapy",
        ],
        textbookRefs: [{ book: "Bailey & Love's Short Practice of Surgery", chapter: "Ch 40", edition: "27th" }],
      },
      {
        layer: 3, slug: "skin-tumors-surgical-clinical", title: "Skin Tumors - Clinical",
        estimatedMinutes: 25, summary: "Surgical management of BCC, SCC, and melanoma including margins and staging.",
        contentMd: `# Surgical Management of Skin Tumors

## BCC Treatment
- **Excision**: 3-4 mm margin for nodular BCC; 5-10 mm for morphoeiform
- **Mohs micrographic surgery**: Best for high-risk locations (eyelid, nose, ear) — 99% cure rate
- **Curettage & electrodesiccation**: For superficial BCC
- **Radiotherapy**: For elderly/unfit patients
- **Vismodegib**: Hedgehog pathway inhibitor for advanced/metastatic BCC

## SCC Treatment
- **Wide local excision**: 4-6 mm margin for low-risk; >6 mm for high-risk
- **Sentinel lymph node biopsy**: For high-risk SCC (>2cm, poorly differentiated, perineural invasion)
- **Lymph node dissection**: If nodes palpable
- **Radiotherapy**: Adjuvant for positive margins or perineural invasion

## Melanoma Treatment — Excision Margins
| Breslow Thickness | Recommended Margin |
|------------------|-------------------|
| In situ | 5 mm |
| <1.0 mm | 1 cm |
| 1.0–2.0 mm | 1–2 cm |
| 2.0–4.0 mm | 2 cm |
| >4.0 mm | 2 cm |

- **SLNB** (Sentinel Lymph Node Biopsy): For melanomas >1mm Breslow
- **CLND**: Completion lymph node dissection if SLN positive
- **Immunotherapy**: Pembrolizumab, nivolumab (anti-PD-1) for advanced melanoma
- **Targeted therapy**: Vemurafenib + cobimetinib for BRAF-mutated melanoma`,
        mnemonics: [
          { text: "Melanoma margins: IN-1-2-2 for increasing Breslow", explanation: "In situ=5mm, <1mm=1cm, 1-2mm=1-2cm, >2mm=2cm excision margin" },
          { text: "Mohs = Most precise for face BCC", explanation: "Mohs micrographic surgery provides highest cure rate with minimal tissue loss" },
        ],
        keyPoints: [
          "BCC excision margin: 3-4mm (nodular), Mohs for facial BCC",
          "SCC excision margin: 4-6mm; sentinel node biopsy for high-risk tumors",
          "Melanoma margins increase with Breslow thickness: 5mm (in situ) to 2cm (>2mm)",
          "SLNB for melanomas >1mm Breslow thickness",
          "Anti-PD-1 immunotherapy (pembrolizumab) has revolutionized advanced melanoma treatment",
        ],
        textbookRefs: [{ book: "Bailey & Love's Short Practice of Surgery", chapter: "Ch 40", edition: "27th" }],
      },
      {
        layer: 4, slug: "skin-tumors-surgical-exam-prep", title: "Skin Tumors - Exam Prep",
        estimatedMinutes: 15, summary: "High-yield comparisons and NEXT-pattern facts.",
        contentMd: `# Exam Prep: Skin Tumors

## BCC vs SCC vs Melanoma
| Feature | BCC | SCC | Melanoma |
|---------|-----|-----|----------|
| Frequency | Most common | 2nd most common | Less common but most lethal |
| Metastasis | Extremely rare | 5-10% | Early and widespread |
| Key mutation | PTCH1/Hedgehog | p53 | BRAF V600E |
| Key feature | Pearly rolled border | Ulcerated/keratotic | ABCDE criteria |
| Treatment | Excision/Mohs | WLE + node assessment | WLE + SLNB + systemic |

## High-Yield Points
| Topic | Answer |
|-------|--------|
| Most common skin malignancy | BCC |
| Most lethal skin malignancy | Melanoma |
| Rodent ulcer | BCC |
| Marjolin's ulcer | SCC in chronic scar |
| Best prognostic factor for melanoma | Breslow thickness |
| Melanoma subtype in dark-skinned | Acral lentiginous |
| Gorlin syndrome | Multiple BCCs (PTCH1 germline) |
| Drug for advanced BCC | Vismodegib |
| Drug for BRAF+ melanoma | Vemurafenib + cobimetinib |`,
        mnemonics: [
          { text: "Marjolin = SCC in Scar", explanation: "SCC arising from chronic burn scars or non-healing ulcers — important in Indian context" },
          { text: "Gorlin = BCC from Birth (germline PTCH1)", explanation: "Autosomal dominant, multiple BCCs, skeletal anomalies, calcified falx cerebri" },
        ],
        keyPoints: [
          "BCC: most common. SCC: 2nd most common. Melanoma: most lethal",
          "Marjolin's ulcer = SCC arising from chronic scar — common NEXT question",
          "Breslow thickness determines melanoma excision margin and prognosis",
          "Acral lentiginous melanoma is the most common subtype in Indian population",
          "Vismodegib for advanced BCC; vemurafenib for BRAF+ melanoma",
        ],
        textbookRefs: [{ book: "Bailey & Love's Short Practice of Surgery", chapter: "Ch 40", edition: "27th" }],
      },
      {
        layer: 5, slug: "skin-tumors-surgical-active-recall", title: "Skin Tumors - Active Recall",
        estimatedMinutes: 12, summary: "Flashcard Q&A for skin tumors.",
        contentMd: `# Active Recall: Skin Tumors

**Q1:** Most common skin malignancy?
> BCC (basal cell carcinoma)

**Q2:** Most lethal skin malignancy?
> Malignant melanoma

**Q3:** What is a rodent ulcer?
> BCC — pearly rolled border with central ulceration, locally destructive

**Q4:** Molecular pathway in BCC?
> Hedgehog/PTCH1 pathway — treated with vismodegib

**Q5:** ABCDE criteria for melanoma?
> Asymmetry, Border irregularity, Color variation, Diameter >6mm, Evolving

**Q6:** Most important prognostic factor for melanoma?
> Breslow thickness (depth of invasion in mm)

**Q7:** Excision margin for melanoma 1.5mm Breslow?
> 1-2 cm

**Q8:** What is Marjolin's ulcer?
> SCC arising from chronic scar or non-healing ulcer

**Q9:** BRAF mutation in melanoma — percentage and drug?
> ~50% of melanomas; treated with vemurafenib/dabrafenib

**Q10:** When is SLNB indicated in melanoma?
> Breslow thickness >1mm

**Q11:** Gorlin syndrome?
> Multiple BCCs from germline PTCH1 mutation (autosomal dominant)

**Q12:** Most common melanoma subtype in dark-skinned populations?
> Acral lentiginous melanoma (palms, soles, nail beds)`
      },
    ],
  },
];
