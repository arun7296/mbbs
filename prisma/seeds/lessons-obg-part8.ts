import type { TopicLessons } from "./content-loader";

export const obgPart8Lessons: TopicLessons[] = [
  {
    topicCode: "OG-MOD-03-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "cesarean-section-layer-1-foundation",
        title: "Cesarean Section - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of cesarean delivery, indications, types, and when operative delivery becomes necessary in modern obstetrics.",
        contentMd: `# Cesarean Section - Foundation

## Definition and Significance
Cesarean section is the delivery of fetus, placenta, and membranes through an incision in the uterus. It is the most common major abdominal surgery performed worldwide and accounts for 15-45% of deliveries globally.

## Prevalence in India
- Varies from 15-30% in urban centers to 5-15% in rural areas
- Normal vaginal delivery remains the standard in India
- LSCS is reserved for specific indications per NMC guidelines

## Classification of Cesarean Sections

### By Urgency
- **Elective**: Planned before labor onset
- **Emergency**: During labor or in urgent situations
- **Perimortem**: During cardiopulmonary resuscitation

### By Timing
- **Planned (Primary)**: First LSCS
- **Repeat**: Subsequent LSCS

## Indications for Cesarean Delivery

### Maternal Indications
- Previous LSCS (relative)
- Cephalopelvic disproportion
- Placenta previa
- Placental abruption
- Uterine rupture
- Severe pre-eclampsia/eclampsia
- Medical conditions (cardiac disease, severe asthma)

### Fetal Indications
- Fetal distress/abnormal CTG
- Malpresentation (transverse lie, brow)
- Fetal anomalies incompatible with vaginal delivery

### Combined Indications
- Prolonged labor unresponsive to augmentation
- Failed induction of labor

## Legal and Ethical Aspects in India
- LSCS on demand without medical indication is controversial
- Informed consent mandatory
- Documentation of indications required
- LSCS for failure to progress should attempt trial of labor after prior vaginal delivery`,
        mnemonics: [
          { text: "LSCS indications = Previous scar, Placenta (previa/abruption), Fetal distress, Malpresentation, Cephalopelvic disproportion, Pre-eclampsia", explanation: "Major maternal and fetal indications" },
          { text: "CEPHALIC vs NON-CEPHALIC = Only cephalic suitable for vaginal trial", explanation: "Presentation type determines delivery route" }
        ],
        keyPoints: [
          "LSCS is major abdominal surgery with significant maternal morbidity",
          "Vaginal birth after cesarean (VBAC) acceptable in appropriate candidates",
          "Repeat LSCS increases complications: adhesions, placenta previa, accreta",
          "India has high rates of unnecessary LSCS in private practice",
          "Emergency LSCS carries higher maternal mortality than elective"
        ],
        textbookRefs: [
          { book: "DC Dutta's Textbook of Obstetrics", chapter: "Operative Obstetrics - Cesarean Section", edition: "9th" },
          { book: "Padubidri & Shirish's Obstetrics and Gynaecology", chapter: "Cesarean Delivery", edition: "3rd" }
        ]
      },
      {
        layer: 2,
        slug: "cesarean-section-layer-2-mechanism",
        title: "Cesarean Section - Mechanism",
        estimatedMinutes: 25,
        summary: "Surgical anatomy, technique variations, and physiological changes during and after cesarean delivery.",
        contentMd: `# Cesarean Section - Mechanism

## Surgical Anatomy
**Abdominal layers traversed**:
1. Skin and subcutaneous tissue
2. Anterior rectus sheath
3. Rectus abdominis muscle
4. Peritoneum
5. Bladder peritoneum (reflected downward)
6. Myometrium
7. Visceral peritoneum

## Lower Segment Transverse Cesarean (LSCS) - Most Common
- **Incision location**: Lower uterine segment (non-contracting)
- **Advantages**:
  - Lower repeat LSCS requirement
  - Less uterine rupture in subsequent pregnancy
  - Easier repair
  - Less blood loss
- **Disadvantages**:
  - Slightly longer operative time
  - More bladder mobilization required

## Classical Cesarean Section
- **Incision location**: Upper uterine segment
- **Indications**:
  - Placenta previa covering lower segment
  - Massive hemorrhage
  - Failed LSCS trial
- **Disadvantages**:
  - Higher infection risk
  - Greater blood loss
  - Increased uterine rupture in future pregnancies (contraindication to VBAC)

## Operative Sequence for LSCS
1. Abdominal incision (Pfannenstiel preferred in India)
2. Peritoneal incision and bladder mobilization
3. Uterine incision (transverse preferred)
4. Amniotic fluid assessment
5. Fetal extraction
6. Placental delivery (spontaneous vs manual)
7. Uterine repair (1-2 layers)
8. Peritoneal closure vs non-closure (both acceptable)
9. Fascial and skin closure

## Anesthesia for LSCS
- **Neuraxial (Regional)**: Spinal/epidural preferred in India
- **General anesthesia**: Emergency cases, failed regional
- **Local anesthesia**: Rare, only in resource-limited settings

## Hemodynamic Changes During LSCS
- Aortocaval compression from supine position (left uterine displacement reduces)
- Blood loss: 800-1200 mL (higher in emergency)
- Third spacing: 1-2 L during and after LSCS`,
        mnemonics: [
          { text: "LSCS advantages = Lower infection, Better repair, Future VBAC possible, Less rupture risk", explanation: "Why lower segment LSCS preferred" },
          { text: "Classical LSCS = Previa, Placenta accreta risk, Emergency massive bleed, Repeat failed LSCS", explanation: "Limited indications" }
        ],
        keyPoints: [
          "LSCS is major abdominal surgery requiring careful anesthesia and monitoring",
          "Blood loss averages 1000 mL - anticipate need for fluid resuscitation",
          "Regional anesthesia preferred in India for LSCS in absence of contraindications",
          "Peritoneal closure is optional and doesn't affect outcomes",
          "Double-layer uterine closure reduces dehiscence risk"
        ],
        textbookRefs: [
          { book: "DC Dutta's Textbook of Obstetrics", chapter: "Operative Obstetrics - Cesarean Section Technique", edition: "9th" },
          { book: "Williams Obstetrics", chapter: "Delivery via Cesarean Section", edition: "26th" }
        ]
      },
      {
        layer: 3,
        slug: "cesarean-section-layer-3-clinical",
        title: "Cesarean Section - Clinical Applications",
        estimatedMinutes: 25,
        summary: "Clinical decision-making, trial of labor after cesarean, management of complications during and after LSCS.",
        contentMd: `# Cesarean Section - Clinical Applications

## Pre-operative Assessment for Elective LSCS
- Anemia screening and correction
- Infection screen (COVID, TB in India context)
- Cardiovascular and respiratory assessment
- Discuss risks: thromboembolism, infection, anesthesia complications
- Obtain informed consent documenting indication

## Emergency vs Elective LSCS
**Elective LSCS**:
- Scheduled for 39 weeks for first LSCS (reduces neonatal morbidity)
- No labor contractions
- Normal hemodynamics

**Emergency LSCS**:
- Variable blood loss
- Risk of aspiration with general anesthesia
- Fetal distress complicates decision-making
- Maternal exhaustion and dehydration

## Maternal Morbidity After LSCS
- **Infection**: Wound (2-5%), endometritis (3-5%)
- **Thromboembolism**: DVT (0.5-2%), PE (0.1-0.3%)
- **Hemorrhage**: Major (1-2%), requiring transfusion
- **Anesthesia**: Headache, neurological injury (rare)
- **Adhesions**: Lead to infertility, ectopic pregnancy, bowel obstruction
- **Uterine rupture**: In future pregnancy (0.3-0.5% after LSCS)
- **Hysterectomy**: 0.1-0.4% (peripartum hysterectomy)

## Trial of Labor After Cesarean (TOLAC) in India
**Candidates for TOLAC**:
- Previous LSCS with low transverse incision
- No other contraindications to vaginal delivery
- Adequate maternal pelvis
- Single pregnancy
- Informed consent after counseling

**Success rate**: 60-80% achieve vaginal delivery
**Risk of uterine rupture**: 0.3-0.5% (vs 0% with repeat LSCS)

**Contraindications to TOLAC**:
- Previous classical LSCS
- Previous uterine rupture
- Placenta previa
- Malpresentation
- Cephalopelvic disproportion

## Neonatal Outcomes
- Planned LSCS at 39 weeks: Lower respiratory distress
- Emergency LSCS: Higher admission to NICU
- Planned LSCS at term: Excellent neonatal outcomes

## Post-operative Care After LSCS
1. Monitor vital signs, urine output (target >0.5 mL/kg/hour)
2. Prophylactic antibiotics (cephalosporin within 60 minutes)
3. Thromboprophylaxis: LMWH for risk factors
4. Early ambulation (reduce VTE risk)
5. Delayed first oral intake (risk of aspiration)
6. Catheter removal when mobilizing
7. Pain management: Spinal morphine, NSAIDs, acetaminophen
8. Breastfeeding support from early postoperative period`,
        mnemonics: [
          { text: "VBAC CANDIDATES = Previous LSCS only, Adequate pelvis, Informed consent, No absolute contraindication", explanation: "Eligibility criteria" },
          { text: "Morbidity after LSCS = Infection, Hemorrhage, Thrombosis, Adhesions, Future rupture", explanation: "Major complications" }
        ],
        keyPoints: [
          "Elective LSCS at 39 weeks reduces respiratory distress without increasing stillbirth",
          "TOLAC success rate is 60-80% with proper patient selection in India",
          "Prophylactic antibiotics reduce infection by 60%",
          "Early mobilization and LMWH reduce VTE risk",
          "Repeated LSCS increases accreta risk: 1% after 2nd, 3% after 3rd, rising exponentially",
          "Antibiotic choice should include gram-negative coverage for Indian setting"
        ],
        textbookRefs: [
          { book: "DC Dutta's Textbook of Obstetrics", chapter: "Postoperative Care and Complications of LSCS", edition: "9th" },
          { book: "FOGSI Guidelines on Cesarean Section", chapter: "TOLAC and Repeat LSCS", edition: "Latest" }
        ]
      },
      {
        layer: 4,
        slug: "cesarean-section-layer-4-exam",
        title: "Cesarean Section - Exam Prep",
        estimatedMinutes: 20,
        summary: "Important clinical scenarios, decision-making algorithms, and examination-focus topics for LSCS.",
        contentMd: `# Cesarean Section - Exam Prep

## Common LSCS Scenarios in Exams

### Scenario 1: Failed Induction
**Case**: 24-year-old G1P0 with meconium-stained liquor, CTG shows late deceleration, cervix 3 cm at 24 hours
- **Management**: Continuous monitoring, assess progress over next 4-6 hours
- **If no progress**: LSCS for failed induction + fetal distress
- **Not indication alone**: Many induce again or continue

### Scenario 2: Placenta Previa
**Case**: 35-week G2P1 with placenta previa completely covering os on ultrasound
- **Management**: Hospitalization, bed rest, anemia correction, corticosteroids if <37 weeks, LSCS delivery (transabdominal approached carefully to avoid placenta), pelvic preparation in OR, cross-matched blood available
- **If massive hemorrhage**: Emergency LSCS by experienced surgeon

### Scenario 3: Previous LSCS Wanting TOLAC
**Case**: G2P1 with previous LSCS for failure to progress, now in active labor at 38 weeks
- **Suitability**: Assess pelvis (pelvimetry if indicated), discuss rupture risk
- **Decision**: If adequate pelvis + informed consent = trial TOLAC
- **Monitoring**: Continuous CTG, prepare for emergency LSCS

### Scenario 4: Preeclampsia at 34 Weeks
**Case**: Severe preeclampsia with uncontrolled hypertension, platelets 80,000
- **Timing**: LSCS delivery (not vaginal)
- **Anesthesia**: Epidural safer than general if platelets >80,000
- **Adjuvants**: MgSO4, antihypertensives perioperatively

## Clinical Pearls for Exams
- **Indication documentation**: Always document exact indication in records
- **LSCS on demand**: Describe risks to patient before consent
- **Vaginal delivery trial**: Can attempt even after 1-2 previous LSCS if appropriate
- **Repeat LSCS timing**: Elective LSCS should be at 39 weeks, not 37-38 weeks
- **Morbidity increases with**: Emergency status, prolonged labor before LSCS, previous LSCS
- **Success TOLAC predictors**: Maternal age <35, BMI <30, vaginal delivery before LSCS

## Operative Indications - Ranking by Frequency in India
1. Previous LSCS (most common)
2. Failure to progress/CPD
3. Fetal distress
4. Malpresentation
5. Placenta previa
6. Pre-eclampsia/eclampsia
7. Placental abruption
8. Medical complications`,
        mnemonics: [
          { text: "LSCS TIMING = 39 weeks elective, 37 weeks placenta previa, ASAP fetal distress/abruption", explanation: "Appropriate timing" },
          { text: "EMERGENCY LSCS = Fetal distress, Abruption, Cord prolapse, Failed emergency induction", explanation: "Requires delivery within 30 minutes" }
        ],
        keyPoints: [
          "Document indication clearly: 'Failure to progress grade 2' vs vague 'prolonged labor'",
          "Discuss cesarean delivery risks before labor in high-risk patients",
          "Most common indication worldwide is previous LSCS",
          "India-specific: Awareness about unnecessary LSCS in private sector",
          "NMC competency: Manage LSCS indication, technique, and complications"
        ],
        textbookRefs: [
          { book: "DC Dutta's Textbook of Obstetrics", chapter: "Indications and Complications of LSCS", edition: "9th" },
          { book: "FOGSI Guide to Operative Obstetrics", chapter: "Cesarean Delivery Indications and Timing", edition: "Latest" }
        ]
      },
      {
        layer: 5,
        slug: "cesarean-section-layer-5-active-recall",
        title: "Cesarean Section - Q&A Review",
        estimatedMinutes: 30,
        summary: "Essential questions and answers about LSCS indications, technique, and complications for active recall.",
        contentMd: `# Cesarean Section - Q&A Review

## Q1: What is the most common indication for primary LSCS in India?
**A**: Failure to progress/cephalopelvic disproportion (CPD), though previous LSCS is most common overall in multiparous women. In private sector, non-progressive labor and patient request also drive LSCS.

## Q2: At what gestational age should elective LSCS for first indication be scheduled?
**A**: 39+0 weeks or later. Delivery before 39 weeks increases neonatal respiratory morbidity. Exception: planned LSCS before 39 weeks for recurrent late stillbirth or other specific indications.

## Q3: What is the success rate for VBAC in carefully selected candidates?
**A**: 60-80% achieve vaginal delivery after one prior LSCS. Higher success with vaginal delivery history, maternal age <35, BMI <30, spontaneous labor.

## Q4: Describe double-layer uterine closure during LSCS. What is its advantage?
**A**: Two layers of continuous absorbable suture (typically 1-0 PDS or vicryl) approximating the myometrium. Advantages: reduces uterine dehiscence risk and hemostasis. Some studies suggest reduced uterine rupture in subsequent pregnancy.

## Q5: A patient with placenta previa covering the entire internal os presents with painless bleeding at 36 weeks. Management?
**A**: Hospitalization, bed rest, anemia correction, corticosteroids if <37 weeks, LSCS delivery (transabdominal approached carefully to avoid placenta), pelvic preparation in OR, cross-matched blood available. If massive hemorrhage: emergency LSCS by experienced surgeon.

## Q6: Post-LSCS, when is peritoneal closure recommended?
**A**: Closure is optional. Most studies show no benefit of closure vs non-closure. Reduces operative time if non-closure practiced. Many use closure for infection prevention in setting of contamination.

## Q7: What is the approximate blood loss in an uncomplicated LSCS?
**A**: 800-1200 mL for vaginal deliveries; cesarean typically 1000-1500 mL blood loss. Emergency LSCS may have 1500-2000 mL loss. Measured blood loss typically underestimated by 30-50%.

## Q8: Which anesthesia is preferred for LSCS in India and why?
**A**: Neuraxial anesthesia (spinal or epidural) is preferred because it: avoids aspiration risk, allows early maternal-infant bonding, has lower complication rates, reduces postoperative pain with intrathecal opioids. General anesthesia reserved for emergency cases, contraindicated neuraxial, or failed regional block.

## Q9: A patient with previous LSCS for failed induction now wants TOLAC. You assess cephalopelvic adequacy. What pelvimetry method is best?
**A**: Clinical pelvimetry by experienced examiner is adequate for most. MRI pelvimetry reserved for clinical suspicion of inadequate pelvis. Pelvimetry should NOT be routine but can guide counseling for borderline cases.

## Q10: What is peripartum hysterectomy and when is it indicated?
**A**: Surgical removal of uterus at or near delivery. Indications: placenta accreta spectrum (most common), massive PPH uncontrolled by other measures, uterine rupture, uterine atony unresponsive to uterotonics and tamponade. Morbidity 2-3 times higher than LSCS alone. Should be last resort after all conservative measures.

## Q11: At what thickness is lower uterine segment considered "thin" and potentially at risk for rupture?
**A**: <1.5 mm on postoperative ultrasound correlates with increased dehiscence risk in literature. However, no absolute cutoff below which rupture is guaranteed. Clinical judgment and ultrasound assessment guide counseling.

## Q12: How long should a patient avoid heavy lifting/exercise after LSCS?
**A**: Generally 6 weeks for routine activities. Return to strenuous exercise (gym, running) at 8-12 weeks after uncomplicated LSCS. Heavy lifting >5 kg avoided for 6 weeks to reduce hernia risk.`,
        mnemonics: [],
        keyPoints: [
          "Elective LSCS at 39 weeks reduces respiratory distress without increasing stillbirth",
          "TOLAC success 60-80%; requires previous low transverse LSCS and adequate pelvis",
          "Double-layer uterine closure reduces dehiscence risk",
          "Blood loss 1000-1500 mL typical; emergency cases may lose 1500-2000 mL",
          "Regional anesthesia preferred in India; avoids aspiration and allows early bonding",
          "Peripartum hysterectomy only if massive hemorrhage uncontrolled by other means",
          "Previous LSCS most common indication overall; CPD most common for primary LSCS"
        ],
        textbookRefs: [
          { book: "DC Dutta's Textbook of Obstetrics", chapter: "LSCS Technique and Outcomes", edition: "9th" },
          { book: "FOGSI Guide to Operative Obstetrics", chapter: "Cesarean Delivery", edition: "Latest" }
        ]
      }
    ]
  }
];
