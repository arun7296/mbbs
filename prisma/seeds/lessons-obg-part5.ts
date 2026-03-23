import type { TopicLessons } from "./content-loader";

export const obgPart5Lessons: TopicLessons[] = [
  {
    topicCode: "OG-MOD-04-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "normal-puerperium-layer-1-foundation",
        title: "Normal Puerperium - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of postpartum period, normal physiological changes, and routine puerperal care.",
        contentMd: `# Normal Puerperium - Foundation

## Definition and Duration

**Puerperium**: Time from delivery of placenta to return of body to non-pregnant state
**Duration**: Approximately 6 weeks (42 days)
**Divisions**: Immediate (24 hours), early (first 2 weeks), late (2-6 weeks)

## Uterine Involution

**Weight changes**:
- Immediately: 1000 g
- 1 week: 500 g
- 6 weeks: 100 g

**Fundal descent**:
- Day 1: Fundus at umbilicus
- Day 3: 2-3 fingerbreadths below umbilicus
- Day 7: Impalpable
- Descent: ~1 cm per day

**Placental site healing**:
- Week 1: Raw area (500 cm²), slough separates
- Week 2-4: Epithelialization from endometrial edges
- Week 4-6: Complete healing

## Lochia (Postpartum Bleeding)

**Lochia rubra** (Days 1-3):
- Bright red blood
- 250-500 mL/day
- Normal finding

**Lochia serosa** (Days 4-10):
- Pinkish-brown
- Gradual decrease
- Normal finding

**Lochia alba** (Days 10-42):
- Yellowish-white
- Minimal amount
- Should NOT be foul-smelling (foul = infection)

## Cervical Changes

**Cervix diameter**:
- Immediately: 10 cm (dilated)
- By 1 week: Normal size (4-5 cm, closed)
- External os: Remains patulous (never returns to nulliparous)

## Vital Signs in Puerperium

**Normal values**:
- Temperature: <37.5°C (fever = abnormal)
- Pulse: Slightly elevated initially, normalizes by 1 week
- BP: Returns to baseline
- Respiratory rate: Normal

## Afterpains

**Definition**: Uterine contractions felt by mother postpartum
**Mechanism**: Contractions during involution and lochia expulsion
**Characteristics**:
- More pronounced in multiparas
- Worse during breastfeeding (oxytocin stimulation)
- Usually improves by day 3-4
**Management**: NSAIDs, reassurance (normal process)`,
        mnemonics: [
          {
            text: "FUNDAL DESCENT = Umbilicus (Day 1) → 3 FB below (Day 3) → Impalpable (Day 7); ~1 cm/day",
            explanation: "Pattern of uterine involution"
          },
          {
            text: "LOCHIA PROGRESSION = Rubra (red, Days 1-3) → Serosa (pink, Days 4-10) → Alba (white, Days 10-42)",
            explanation: "Postpartum bleeding progression"
          },
          {
            text: "CERVICAL OS = Remains patulous (never returns to nulliparous); NOT a sign of abnormality",
            explanation: "Normal postpartum cervical change"
          },
          {
            text: "AFTERPAINS = Stronger in multiparas, worse with breastfeeding, improve by day 3-4",
            explanation: "Characteristics of postpartum contractions"
          }
        ],
        keyPoints: [
          "Puerperium lasts 6 weeks; most critical changes in first 2 weeks",
          "Fundal descent ~1 cm/day; deviation suggests abnormal involution",
          "Lochia character changes from red → pink → white; foul odor = infection",
          "Fever >37.5°C in puerperium = abnormal, investigate for infection",
          "Breastfeeding stimulates uterine contractions via oxytocin; helps involution"
        ],
        textbookRefs: [
          { book: "DC Dutta's Textbook of Obstetrics", chapter: "Puerperium", edition: "9th" },
          { book: "Williams Obstetrics", chapter: "Postpartum Period", edition: "25th" }
        ]
      },
      {
        layer: 2,
        slug: "normal-puerperium-layer-2-physiology",
        title: "Normal Puerperium - Physiology",
        estimatedMinutes: 25,
        summary: "Physiological mechanisms of postpartum involution and organ system recovery.",
        contentMd: `# Normal Puerperium - Physiology

## Uterine Involution Mechanisms

**Myometrial contraction and retraction**:
- Myometrial cells contract and remain shortened (retraction)
- Reduces uterine volume dramatically
- Mediated by: Oxytocin, prostaglandins, catecholamines
- Most rapid: First week
- Continued: Weeks 2-6

**Myometrial cell size reduction**:
- Protein synthesis decreases
- Protein breakdown (catabolism) increases
- Weight loss: 1000 g → 100 g (90% reduction)

**Endometrial regeneration**:
- Healing from edges inward
- Epithelialization: 2-3 weeks
- Complete regeneration: 4-6 weeks
- Basal layer regenerates new endometrium

## Cardiovascular Physiology

**Blood volume changes**:
- Decreases 10-15% in first 2 weeks
- Via diuresis and polyuria (days 2-5)
- Plasma volume decreases
- RBC relatively stable

**Cardiac output**: Elevated immediately, normalizes by 2 weeks

**Thrombosis risk**:
- Elevated coagulation factors
- Decreased protein S (anticoagulant)
- Peak risk: Days 1-14
- Risk: 5-10× increased vs non-pregnant

## Endocrine Changes

**Progesterone withdrawal**:
- Rapid decrease after placental removal
- Causes: Uterine contractions, mood changes, vasomotor symptoms

**Gonadotropins**:
- Breastfeeding: Elevated prolactin suppresses FSH/LH → Amenorrhea
- Non-breastfeeding: Rapid rise in FSH/LH → First ovulation 2-4 weeks

## Renal Physiology

**GFR**: Elevated (hyperfiltration state)
**Diuresis**: Days 2-5, up to 2-3 L urine daily
**Glycosuria**: May appear transiently

## Gastrointestinal Physiology

**Bowel function**:
- Decreased motility from anesthesia
- Constipation common (pain, opioids, dehydration)
- Usually resumes by day 2-3`,
        mnemonics: [
          {
            text: "UTERINE INVOLUTION = Myometrial contraction + retraction → Protein catabolism → 1000g → 100g",
            explanation: "Mechanism of dramatic size reduction"
          },
          {
            text: "BLOOD VOLUME = Decreases 10-15% in first 2 weeks via diuresis",
            explanation: "Cardiovascular adaptation"
          },
          {
            text: "THROMBOSIS RISK = Elevated factors + immobility = 5-10× increased first 2 weeks",
            explanation: "Why DVT/PE risk high postpartum"
          }
        ],
        keyPoints: [
          "Uterine involution driven by myometrial contractions and retraction",
          "Blood volume decreases via diuresis; anemia worsens if significant blood loss",
          "Thrombosis risk peak first 2 weeks; early mobilization crucial for prevention",
          "Endometrial healing by epithelialization; complete by 4-6 weeks",
          "Hormonal withdrawal causes afterpains, mood changes, vasomotor symptoms"
        ],
        textbookRefs: [
          { book: "Robbins & Kumar Pathologic Basis of Disease", chapter: "Female Genital Tract", edition: "10th" }
        ]
      },
      {
        layer: 3,
        slug: "normal-puerperium-layer-3-clinical",
        title: "Normal Puerperium - Clinical Management",
        estimatedMinutes: 30,
        summary: "Routine postpartum care, monitoring for complications, and discharge management.",
        contentMd: `# Normal Puerperium - Clinical Management

## Immediate Postpartum (First 24 Hours)

**Vital sign monitoring**:
- Every 15 minutes × 4, then every 30 minutes × 4, then every 4 hours
- Red flags: Temperature ≥38°C, pulse >120 or <60, BP below baseline

**Fundal assessment**:
- Palpate daily for fundal height
- Check firmness (soft = atony; massage if needed)
- Position (midline expected)

**Lochia assessment**:
- Quantify amount (light, moderate, heavy)
- Character and odor
- Foul odor = abnormal, investigate

**Perineal examination**:
- Check for hematoma, separation
- Assess pain and healing

**Bladder care**:
- Encourage voiding by 6-8 hours
- Monitor for retention
- Catheterize if retained >8 hours

## First 2 Weeks Management

**Daily monitoring**:
- Vital signs (fever critical)
- Fundal height (should descend 1 cm/day)
- Lochia character (decreasing expected)
- Perineal healing

**Pain management**:
- NSAIDs: Ibuprofen 400-600 mg q6h (very effective for afterpains)
- Acetaminophen: 650 mg q6h
- Sitz baths for perineal pain

**Early mobilization**:
- Ambulate within 4-6 hours
- Reduces thrombosis risk, improves gut motility
- Careful: Orthostatic hypotension common

**Pelvic floor exercises**:
- Start early (Kegel exercises)
- Helps restore tone, improve continence

## Antibiotic Use

**Prophylaxis**:
- Vaginal delivery: Usually not given
- Cesarean: Prophylactic antibiotics preoperatively

**Therapeutic**:
- If fever or infection signs: Broad-spectrum (ampicillin + gentamicin or ceftriaxone)
- Continue ≥48 hours afebrile

## Discharge Counseling

**Expected at home**:
- Continued lochia for 4-6 weeks
- Afterpains may persist 1-2 weeks
- Perineal discomfort normal if healing well
- Fatigue expected; improve by 2-4 weeks

**Warning signs (return if)**:
- Heavy vaginal bleeding (soaking >1 pad/hour)
- Fever ≥38°C
- Severe abdominal pain
- Foul-smelling lochia
- Chest pain or shortness of breath
- Calf pain/swelling
- Suicidal ideation

**Activity**:
- Unrestricted after 1-2 weeks if healing well
- Avoid heavy lifting ×4-6 weeks

**Sexual intercourse**:
- Usually cleared after 6 weeks (when bleeding stopped, perineum healed)
- Discuss: Pain expectations, contraception

**Contraception**:
- Discuss: Can become pregnant before menses returns
- Options: IUD (can insert at 6 weeks), barrier, hormonal (caution if breastfeeding)

## Follow-up Visits

**At 2 weeks**:
- General well-being, mood
- Vital signs
- Fundal height (should be impalpable)
- Perineal healing

**At 6 weeks** (routine postpartum visit):
- Vital signs, abdominal exam
- Pelvic exam (cervix, uterus, adnexa)
- Screening: Depression, domestic violence
- Contraceptive counseling`,
        mnemonics: [
          {
            text: "FUNDAL DESCENT = 1 cm/day; impalpable by Day 7 (if not, investigate retention)",
            explanation: "Normal involution rate"
          },
          {
            text: "LOCHIA AMOUNT = Light-moderate normal; soaking >1 pad/hour = abnormal (PPH)",
            explanation: "Abnormal bleeding threshold"
          },
          {
            text: "RED FLAGS = Temp ≥38°C, Foul lochia, Heavy bleeding, Severe pain, Calf swelling",
            explanation: "Signs requiring return to hospital"
          }
        ],
        keyPoints: [
          "Vital signs monitoring critical first 24 hours; fever abnormal",
          "Fundal descent ~1 cm/day reflects normal involution",
          "Lochia character changes predictably; deviation suggests problems",
          "Early mobilization and pelvic floor exercises improve recovery",
          "Mental health screening critical; postpartum depression common"
        ],
        textbookRefs: [
          { book: "DC Dutta's Textbook of Obstetrics", chapter: "Puerperium", edition: "9th" },
          { book: "ACOG Guidelines", chapter: "Postpartum Care", edition: "2023" }
        ]
      },
      {
        layer: 4,
        slug: "normal-puerperium-layer-4-exam",
        title: "Normal Puerperium - Exam Preparation",
        estimatedMinutes: 30,
        summary: "Board-level topics on normal puerperium and puerperal complications.",
        contentMd: `# Normal Puerperium - Exam Preparation

## High-Yield Facts

### Fundal Descent Pattern
- Day 0 (delivery): Fundus at umbilicus
- Day 7: Fundus impalpable
- Slower descent suggests: Retained placenta, blood clots, subinvolution

### Lochia Progression and Abnormalities
**Normal progression**:
- Rubra (Days 1-3): Heavy bleeding, red
- Serosa (Days 4-10): Moderate, pink
- Alba (Days 10-42): Light, white/yellow

**Red flags**:
- Lochia rubra lasting >3 days = prolonged
- Foul odor = infection (endometritis)
- Heavy bleeding = postpartum hemorrhage or subinvolution

### Temperature and Infection
- Normal: <37.5°C postpartum
- Fever >38°C: Abnormal, investigate for:
  - Endometritis (most common)
  - Wound infection
  - UTI
  - Pneumonia
  - Thrombophlebitis

## Scenarios

### Scenario 1: Abnormal Fundal Descent
**Case**: Day 3, fundus still at umbilicus, lochia moderate to heavy, no fever.

**Answer**: Subinvolution/retained products. Ultrasound to assess. If confirmed → Evacuation of uterus, antibiotics if infected.

### Scenario 2: Fever on Day 5
**Case**: Temperature 38.5°C, uterine tenderness, lochia serosa, WBC 18,000.

**Answer**: Endometritis. Blood/urine cultures, broad-spectrum antibiotics, IV fluids. Monitor response.

### Scenario 3: Postpartum Hemorrhage
**Case**: Day 2, soaking 2 pads/hour, fundus 2-3 cm above expected, tachycardia, hypotension, Hb 7 g/dL.

**Answer**: Postpartum hemorrhage. STAT IV access, type and cross, fluids, oxytocin/misoprostol, uterine evacuation if needed.

## Common Exam Questions

1. **What is normal fundal descent rate?** ~1 cm/day
2. **When should lochia stop smelling of blood?** By day 4-5 (lochia serosa phase)
3. **Postpartum fever definition?** Temperature ≥38°C is abnormal
4. **Distinguish baby blues from postpartum depression:** Blues are mild, transient; PPD is severe, persistent
5. **When is LSCS scar check done?** 6 weeks (with pelvic exam)`,
        mnemonics: [
          {
            text: "FUNDAL HEIGHT = Day 1 (umbilicus), Day 3 (2-3 FB below), Day 7 (impalpable)",
            explanation: "Expected involution pattern"
          },
          {
            text: "LOCHIA = Rubra (1-3d, heavy) → Serosa (4-10d) → Alba (10-42d, light)",
            explanation: "Normal postpartum bleeding changes"
          },
          {
            text: "POSTPARTUM FEVER = Endometritis most common; assess lochia, uterine tenderness",
            explanation: "Approach to fever"
          }
        ],
        keyPoints: [
          "Fundal descent ~1 cm/day is gold standard for normal involution",
          "Fever ≥38°C abnormal; investigate for endometritis, UTI, aspiration, DVT",
          "Lochia follows predictable pattern; deviation suggests problems",
          "Postpartum depression requires professional treatment; safe medications exist",
          "Hemorrhage in puerperium = emergency requiring IV access, transfusion readiness, evacuation"
        ],
        textbookRefs: [
          { book: "DC Dutta's Textbook of Obstetrics", chapter: "Puerperium & Puerperal Complications", edition: "9th" },
          { book: "NEET-PG Previous Years", chapter: "Postpartum Care", edition: "2023" }
        ]
      },
      {
        layer: 5,
        slug: "normal-puerperium-layer-5-recall",
        title: "Normal Puerperium - Active Recall",
        estimatedMinutes: 25,
        summary: "Q&A on postpartum physiology, normal findings, and recognition of complications.",
        contentMd: `# Normal Puerperium - Active Recall

**Q1: Explain the relationship between fundal involution and lochia. Why does fundal descent correlate with normal recovery?**

A: Fundal descent indicates: (1) Myometrial contraction and retraction → Uterus smaller; (2) Placental site healing and slough separation → Lochia expelled; (3) Overall physiological involution on track. Uterine contractions serve dual purpose: compress myometrial vessels (hemostasis) and expel lochia (blood, debris). Expected pattern: Fundus at umbilicus Day 1 → Day 7 impalpable. Deviation (slower descent) suggests: uterus not contracting adequately, or distended with blood/clots (subinvolution). Lochia correlation: Heavy lochia Days 1-3 (active slough separation), decreases as healing progresses. Heavy lochia beyond Day 3 or prolonged rubra suggests continued bleeding from placental site (subinvolution) or retained fragments.

**Q2: Why are afterpains more severe in multiparas? Explain the mechanism.**

A: Multipara uterine muscle has: (1) Stronger contractions (trained muscle from previous pregnancies); (2) Faster involution (compared to primigravida); (3) More oxytocin receptors. Result: Stronger contractions → Stronger pain sensations. Oxytocin role: Suckling → Pituitary oxytocin release → Myometrial contractions → Milk letdown AND afterpains. Timeline: Peak Days 1-3, resolve by Day 4-5. Management: NSAIDs very effective (ibuprofen 400-600 mg q6h). Reassurance: Normal, indicates good contraction (good sign for hemostasis).

**Q3: A postpartum woman has temperature 37.8°C on Day 2, WBC 22,000, mild uterine tenderness. Is this abnormal?**

A: Temperature 37.8°C is below fever threshold (≥38°C). Normal postpartum physiology: Mild temperature elevation (up to 37.5°C) acceptable 24-48 hours post-delivery (response to trauma, inflammation). WBC up to 20,000 normal; 22,000 borderline. Uterine tenderness mild and acceptable Day 2. Assessment: (1) Repeat temperature in 4 hours; (2) Assess for other infection signs (foul lochia, excessive bleeding, chills); (3) Examine abdomen, perineum, breasts; (4) Check for other sources (UTI, respiratory); (5) Reassess in 24 hours. If temperature remains <38°C without other signs → Likely normal response. If fever develops → Investigate as postpartum infection.

**Q4: Explain endocrine changes in non-breastfeeding vs breastfeeding mothers.**

A: Non-breastfeeding: Prolactin drops rapidly (no suckling stimulation) → returns to normal 1-2 weeks. FSH/LH rise quickly (no lactation-induced suppression). First ovulation 2-4 weeks, menses usually 6-8 weeks. Breast engorgement Days 3-5 (milk production triggered), resolves over 1-2 weeks. Breastfeeding: Prolactin remains elevated (continuous, stimulated by suckling) → maintains lactation. FSH/LH suppressed (prolactin inhibits GnRH) → lactational amenorrhea common (weeks to months). Ovulation delayed. Menses delayed (typically months to 6+ months with exclusive breastfeeding). Contraceptive effect of lactational amenorrhea: 98% efficacy with exclusive breastfeeding but not reliable without additional contraception. Fertility returns quickly in formula feeders - contraception counseling immediate.

**Q5: Describe complete process of placental separation and delivery in third stage.**

A: After fetal delivery, placental site rapidly shrinks from uterine contraction → myometrial retraction → placental anchoring points compressed and torn → maternal vessels compressed by contracting myometrium → hemostasis occurs. Signs of separation: (1) Gush of blood; (2) Cord lengthens; (3) Uterus firm, rises higher. Delivery of placenta: (1) Actively managed: Oxytocin 10 units IM post-fetal delivery; after separation signs → controlled cord traction → placenta delivered within 5-10 minutes; (2) Spontaneously managed: Placenta delivered by maternal pushing, gravity; takes longer (10-30 minutes), higher PPH risk. Post-delivery: Fundal massage to expel clots; inspect placenta (ensure complete). Active management reduces PPH by 60%.

**Q6: How do you distinguish prolonged latent phase from false labor?**

A: False labor: Irregular contractions (variable intervals), painless/mildly uncomfortable (abdominal, not radiating), NO cervical changes (dilation does NOT progress), cease spontaneously. Prolonged latent (true, slow): Regular contractions (consistently spaced), painful/uncomfortable (abdomen and back), cervical changes present but slow (progressive dilation <3 cm, 50% effaced), contractions persist, descent progressive. KEY: Cervical dilation progression - if dilating progressively → true labor (even if slow); if unchanged → false labor. Management: False labor → reassure, send home. Prolonged latent → admit, analgesia, rest, hydration, reassess in hours.`,
        mnemonics: [
          {
            text: "FUNDAL CONTRACTION = Expels lochia + Compresses vessels (hemostasis) = Lower fundus + Normal bleeding",
            explanation: "Two critical functions"
          },
          {
            text: "AFTERPAINS = Multipara > primigravida; worse with oxytocin (breastfeeding); NSAIDs effective",
            explanation: "Characteristics and management"
          },
          {
            text: "POSTPARTUM FEVER = ≥38°C abnormal; investigate endometritis, UTI, aspiration, DVT",
            explanation: "Definition and differential"
          },
          {
            text: "THROMBOSIS RISK = Virchow triad: Stasis + vessel injury + hypercoagulability; peak Days 1-14",
            explanation: "Why thromboembolism risk high postpartum"
          }
        ],
        keyPoints: [
          "Fundal descent ~1 cm/day reflects normal myometrial contraction and involution",
          "Lochia character changes predictably; deviation suggests retained products or infection",
          "Afterpains expected, stronger in multiparas, managed with NSAIDs",
          "Postpartum fever ≥38°C requires investigation; endometritis most common",
          "Thromboembolism risk peaks first 2 weeks; early mobilization essential"
        ],
        textbookRefs: [
          { book: "DC Dutta's Textbook of Obstetrics", chapter: "Puerperium", edition: "9th" },
          { book: "Williams Obstetrics", chapter: "Postpartum Period", edition: "25th" }
        ]
      }
    ]
  }
];
