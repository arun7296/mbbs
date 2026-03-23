import type { TopicLessons } from "./content-loader";

export const obgPart4Lessons: TopicLessons[] = [
  {
    topicCode: "OG-MOD-03-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "abnormal-labor-layer-1-foundation",
        title: "Abnormal Labor & Dystocia - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of abnormal labor patterns, dystocia causes, and classification.",
        contentMd: `# Abnormal Labor & Dystocia - Foundation

## Dystocia Definition

**Dystocia**: Abnormally slow labor progression due to inadequate uterine contractions, pelvic outlet obstruction, fetal malpresentation, or combination.

## Abnormal Labor Patterns

- **Prolonged latent phase**: >20 hours (primigravida), >14 hours (multiparous)
- **Prolonged active phase**: Cervical dilation <1.5 cm/hour (primigravida) for >2-4 hours
- **Prolonged deceleration phase**: >3 hours (primigravida), >1 hour (multiparous)
- **Secondary arrest**: Cervical dilation arrest >2 hours despite adequate contractions
- **Failure to descend**: Descent <1 cm/hour in active phase

## Causes of Dystocia: The "3 Ps"

**Power** (Uterine contractions):
- Normal: 3-5 per 10 minutes, 40-60 mmHg, 30-60 seconds
- **Inadequate power**: Primary or secondary uterine inertia
- **Causes**: Overdistension (polyhydramnios, macrosomia), maternal exhaustion, sedatives

**Passage** (Pelvic anatomy):
- **Pelvic contraction**: Inlet (<10 cm obstetric conjugate), midpelvic (<8 cm inter-ischial), outlet
- Common in India: TB (Pott's disease), rickets, malnutrition

**Passenger** (Fetal factors):
- **Cephalopelvic disproportion (CPD)**: Large fetus, deflexed head
- **Malpresentations**: Brow, face, transverse lie, posterior occipital

## Clinical Features

**Maternal**: Prolonged labor, excessive/weak contractions, exhaustion, fever, vulval edema
**Fetal**: Tachycardia, meconium staining, molding, caput succedaneum

## Partograph

**Tool**: Plots cervical dilation vs time
- **Alert line**: If crossed → Increase monitoring
- **Action line**: 4 hours right of alert; if crossed → LSCS indicated
- **Value**: Identifies prolonged labor early, prevents obstructed labor in low-resource settings`,
        mnemonics: [
          {
            text: "DYSTOCIA 3Ps = Power (contractions), Passage (pelvis), Passenger (fetus)",
            explanation: "Classification of causes"
          },
          {
            text: "PARTOGRAPH = Alert line + Action line (4 hours apart); action line crossing = LSCS",
            explanation: "Simple tool for labor monitoring"
          },
          {
            text: "PELVIC CONTRACTIONS = Inlet <10cm, Midpelvic <8cm, Outlet varies",
            explanation: "Measurement thresholds"
          },
          {
            text: "FETAL SIGNS = Molding, caput succedaneum, cephalohematoma, posterior fontanelle bulging",
            explanation: "Manifestations of trauma"
          }
        ],
        keyPoints: [
          "Dystocia results from power, passage, or passenger factors",
          "Prolonged labor increases infection and fetal hypoxia risk",
          "Partograph prevents unnecessary cesareans while identifying obstructed labor",
          "Pelvic contractions common in India from malnutrition and rickets"
        ],
        textbookRefs: [
          { book: "DC Dutta's Textbook of Obstetrics", chapter: "Abnormalities of Labor", edition: "9th" }
        ]
      },
      {
        layer: 2,
        slug: "abnormal-labor-layer-2-pathophysiology",
        title: "Abnormal Labor & Dystocia - Pathophysiology",
        estimatedMinutes: 25,
        summary: "Mechanisms of prolonged labor, uterine inertia, and pelvic obstruction effects.",
        contentMd: `# Abnormal Labor & Dystocia - Pathophysiology

## Uterine Inertia Mechanisms

**Primary inertia**: Never achieved adequate contractions
- Inadequate myometrial cell recruitment
- Poor gap junction formation
- Dyscoordinated contractions

**Secondary inertia**: Contractions weaken/cease
- Myometrial fatigue from prolonged work
- Metabolic depletion (glycogen stores)
- Hypoxia in myometrial cells
- Consequence: Arrest after initial progress
- Maternal exhaustion from lactate accumulation, ketosis

## CPD Physiology

**Mechanisms of obstruction**:
- Fetal head diameter > pelvic diameter
- Head cannot advance despite adequate contractions
- Continued contractions cause fetal trauma

**Progressive effects**:
1. **Molding**: Skull bones overlap, reducing diameter to fit pelvis
   - Can cause brain compression if excessive

2. **Caput succedaneum**: Subcutaneous edema at presenting part
   - Crosses suture lines
   - Forms in first 12-24 hours of labor
   - Resorbs within 3-5 days

3. **Cephalohematoma**: Bleeding under periosteum
   - Does NOT cross suture lines
   - Appears days after labor
   - Resorbs over weeks/months

**Fetal consequences**: Cerebral edema, ventricular compression, possible intracranial hemorrhage

## Pelvic Trauma from Obstruction

**Maternal**:
- Uterine rupture (if labor forced beyond mechanical limit)
- Urinary fistula (bladder ischemia)
- Rectovaginal fistula (pressure necrosis)
- Infection (bacterial contamination)

## Hypoxic Stress Mechanism

- Prolonged contractions >60 mmHg → Placental blood flow reduction
- Metabolic acidosis develops
- Fetal distress → Meconium passage into amniotic fluid`,
        mnemonics: [
          {
            text: "UTERINE INERTIA = Primary (weak from start) vs Secondary (exhaustion)",
            explanation: "Two types of inadequate action"
          },
          {
            text: "FETAL HEAD TRAUMA = Molding (reversible) → Caput (edema) → Cephalohematoma (blood)",
            explanation: "Progressive trauma sequence"
          },
          {
            text: "CAPUT vs CEPHALOHEMATOMA = Caput crosses sutures, Cephalohematoma bordered by sutures",
            explanation: "Key distinguishing feature"
          }
        ],
        keyPoints: [
          "Uterine inertia results from inadequate coordination or myometrial fatigue",
          "CPD causes progressive fetal head trauma: molding → caput → cephalohematoma",
          "Obstructed labor risks fistula formation and uterine rupture"
        ],
        textbookRefs: [
          { book: "Robbins & Kumar Pathologic Basis of Disease", chapter: "Female Genital Tract", edition: "10th" }
        ]
      },
      {
        layer: 3,
        slug: "abnormal-labor-layer-3-clinical",
        title: "Abnormal Labor & Dystocia - Clinical Management",
        estimatedMinutes: 35,
        summary: "Diagnosis, management of prolonged labor, and prevention of obstructed labor complications.",
        contentMd: `# Abnormal Labor & Dystocia - Clinical Management

## Diagnosis of Abnormal Labor

**Partograph**: Cervical dilation vs time with alert/action lines
**Cervical assessment**: Dilation, effacement, consistency, station
**Vital signs**: Temperature, pulse, BP, urine output
**Fetal assessment**: Heart rate, meconium staining, molding

## Management Approaches

**Expectant management** (prolonged latent phase):
- Analgesia (pethidine, NSAIDs)
- Rest period (sedation)
- Hydration (IV fluids)
- Review in 4-6 hours

**Oxytocin augmentation** (inadequate contractions, no CPD):
- Start: 2-5 mIU/minute
- Increase by 2-5 mIU/minute every 15-30 minutes
- Maximum: Usually 20-40 mIU/minute
- Target: 3-5 strong contractions per 10 minutes

**Monitoring**:
- Partograph (cervical dilation, contraction pattern)
- Maternal vital signs, urine output
- Fetal heart rate (CTG if available)
- Response: Good progress = 1-2 cm dilation per hour

**Intervention indicators**:
- Action line crossing on partograph
- No progress despite oxytocin (likely CPD)
- Fetal distress
- Maternal complications (infection, exhaustion)

## Prevention Strategies

**Antenatal screening**:
- Clinical pelvimetry assessment
- Imaging pelvimetry if borderline
- Fetal weight estimation for macrosomia
- Counseling on LSCS for high-risk women

**Intrapartum interventions**:
- Partograph use universally
- Early detection of suboptimal progress
- Timely LSCS before full obstruction
- Infection prevention

**Community level**:
- Training health workers on partograph
- Accessible referral systems (JSY program)
- Organized transport for emergency transfer`,
        mnemonics: [
          {
            text: "PROLONGED LABOR ASSESSMENT = Partograph + Pelvimetry + Contraction strength",
            explanation: "Multiple parameters evaluated"
          },
          {
            text: "OXYTOCIN = Start 2-5, increase by 2-5 q15-30min, max 20-40 mIU/min",
            explanation: "Standard augmentation protocol"
          },
          {
            text: "ACTION LINE = Threshold for LSCS; if crossed, risk increases",
            explanation: "When to intervene"
          }
        ],
        keyPoints: [
          "Partograph identifies prolonged labor early, enabling timely intervention",
          "Oxytocin effective for inadequate contractions but not CPD",
          "Action line crossing strongly suggests need for LSCS",
          "Clinical pelvimetry guides decision on augmentation vs primary LSCS"
        ],
        textbookRefs: [
          { book: "DC Dutta's Textbook of Obstetrics", chapter: "Abnormal Labor", edition: "9th" }
        ]
      },
      {
        layer: 4,
        slug: "abnormal-labor-layer-4-exam",
        title: "Abnormal Labor & Dystocia - Exam Preparation",
        estimatedMinutes: 35,
        summary: "Board examination topics on dystocia and prolonged labor with scenarios.",
        contentMd: `# Abnormal Labor & Dystocia - Exam Preparation

## High-Yield Topics

**Partograph**: Simple tool, widely used in India (JSY)
- Alert line: When to increase attention
- Action line: When to refer/LSCS
- Space between lines: Safe period for conservative management

**Diagnosis of Prolonged Labor**:
- Latent: >20 hours (P), >14 hours (M)
- Active dilation: <1.5 cm/hr (P), <2 cm/hr (M)
- Descent: <1 cm/hr

**Differential Diagnosis**:
- Prolonged latent: Usually managed expectantly
- Prolonged active with inadequate contractions: Can augment with oxytocin
- Prolonged active with adequate contractions but no dilation: CPD, LSCS needed
- Obstructed labor: Adequate/excessive contractions + NO dilation progress = LSCS

## Scenarios

### Scenario 1: Partograph Alert Line
**Case**: Primigravida 12 hours labor, dilation at alert line, moderate contractions, normal CTG.

**Answer**: Assess pelvimetry and contraction adequacy. If contractions weak → Augment. If adequate → Close monitoring. If CPD suspected → LSCS. If progress resumes → Continue.

### Scenario 2: Action Line Crossing
**Case**: Primigravida 18 hours labor, partograph at action line, weak contractions, fetal tachycardia.

**Answer**: LSCS indicated. High risk for obstructed labor. Proceed with delivery.

### Scenario 3: Obstructed Labor Recognition
**Case**: Multiparous woman 16 hours labor, dilation 7 cm unchanged ×4 hours, strong contractions, excessive molding, meconium staining.

**Answer**: Obstructed labor (CPD). LSCS indicated (don't augment further).`,
        mnemonics: [
          {
            text: "DYSTOCIA 3Ps = Power + Passage + Passenger",
            explanation: "Cause classification"
          },
          {
            text: "PARTOGRAPH ALERT vs ACTION = Alert: Watch; Action: Refer/LSCS",
            explanation: "When to escalate care"
          }
        ],
        keyPoints: [
          "Partograph action line is critical threshold for intervention",
          "Oxytocin augmentation works for power problems, not passage problems",
          "Obstructed labor: strong contractions with NO progress = LSCS needed",
          "Infection risk increases with prolonged labor; antibiotics if >12 hours ROM"
        ],
        textbookRefs: [
          { book: "DC Dutta's Textbook of Obstetrics", chapter: "Abnormal Labor", edition: "9th" }
        ]
      },
      {
        layer: 5,
        slug: "abnormal-labor-layer-5-recall",
        title: "Abnormal Labor & Dystocia - Active Recall",
        estimatedMinutes: 25,
        summary: "Q&A on prolonged labor, dystocia diagnosis, and management principles.",
        contentMd: `# Abnormal Labor & Dystocia - Active Recall

**Q1: Distinguish inadequate uterine action from obstructed labor.**

A: Inadequate action: Weak/infrequent contractions (<1.5 cm/hr dilation), no excessive molding, responds to oxytocin. Obstructed labor (CPD): Strong contractions (>60 mmHg) with arrested dilation, excessive molding, fetal distress, no response to oxytocin. Key difference: Contraction strength and fetal head trauma severity.

**Q2: Explain partograph action line significance.**

A: Alert line identifies slower than expected progress. Action line (4 hours right of alert) indicates: if dilation reaches action line → already 4+ hours suboptimal progress → high obstructed labor and complication risk. Crossing action line is threshold for LSCS recommendation - prevents serious maternal/fetal morbidity.

**Q3: How does oxytocin augmentation work in prolonged labor?**

A: Oxytocin binds myometrial receptors → Increased calcium influx → Stronger, more coordinated contractions. Increases contraction frequency/intensity. Effective ONLY if inadequate contractions are cause. If CPD (mechanical obstruction), oxytocin won't overcome obstruction - increased contractions just cause more fetal trauma and uterine rupture risk.

**Q4: What are signs of obstructed labor requiring LSCS?**

A: (1) Strong contractions ×2+ hours with NO dilation progress; (2) Excessive molding; (3) Large caput succedaneum; (4) Fetal distress (meconium staining, heart rate abnormalities); (5) Maternal signs (fever, exhaustion, tachycardia). Combination of adequate/excessive contractions + mechanical obstruction signs = LSCS indicated.

**Q5: How does prolonged obstructed labor cause fistula formation?**

A: Prolonged fetal head pressure against pelvic bones → Ischemic necrosis of bladder/rectal wall caught between fetal head and maternal skeleton → Tissue death and sloughing → Fistula opening develops. Prevents with timely LSCS (before pressure necrosis develops, usually before full obstructed labor established). This is why Janani Suraksha Yojana (JSY) critical in India - ensures LSCS access.

**Q6: Secondary inertia management approach?**

A: Diagnosis: Initial good progress, then contractions weaken. Management: (1) Optimize mother: IV fluids (restore intravascular volume), analgesia/rest (sleep restores myometrial function); (2) Reassess for CPD (sometimes only apparent after good initial progress); (3) If CPD ruled out: Augment with oxytocin (often effective after maternal rest); (4) Monitor response; (5) LSCS if no progress with augmentation (likely CPD revealed).`,
        mnemonics: [
          {
            text: "INADEQUATE ACTION vs OBSTRUCTED = Weak contractions vs strong; Slow dilation vs arrested; Minimal molding vs excessive",
            explanation: "Key clinical differences"
          },
          {
            text: "SECONDARY INERTIA = Good progress initially then contractions weaken = Maternal exhaustion/CPD",
            explanation: "What causes second-stage arrest"
          },
          {
            text: "FAILED AUGMENTATION = Confirms CPD (mechanical obstruction) = LSCS, not more oxytocin",
            explanation: "Interpretation of augmentation failure"
          }
        ],
        keyPoints: [
          "Inadequate action shows weak contractions with slow dilation; responds to augmentation",
          "Obstructed labor shows strong contractions with arrested dilation; requires LSCS",
          "Partograph action line crossing = high obstructed labor risk; threshold for LSCS",
          "Secondary inertia suggests fatigue/metabolic; optimize mother before escalating care",
          "Failure of augmentation confirms mechanical obstruction; LSCS to prevent fistula"
        ],
        textbookRefs: [
          { book: "DC Dutta's Textbook of Obstetrics", chapter: "Abnormal Labor & Dystocia", edition: "9th" },
          { book: "Williams Obstetrics", chapter: "Dystocia", edition: "25th" }
        ]
      }
    ]
  }
];
