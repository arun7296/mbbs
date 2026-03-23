import type { TopicLessons } from "./content-loader";

export const surgeryLessonsPart14: TopicLessons[] = [
  {
    topicCode: "SU-MOD-10-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "pyloric-stenosis-intussusception-layer-1-foundation",
        title: "Pyloric Stenosis & Intussusception - Foundation",
        estimatedMinutes: 22,
        summary: "Infantile hypertrophic pyloric stenosis and childhood intussusception: definition, epidemiology, and clinical features.",
        contentMd: `# Pyloric Stenosis & Intussusception - Foundation

## Infantile Hypertrophic Pyloric Stenosis (IHPS)
### Definition
- Hypertrophy and hyperplasia of circular muscle of pylorus
- Causes gastric outlet obstruction in neonates/infants
- Not present at birth; develops over first 2-8 weeks of life

### Epidemiology
- Incidence: 2-5 per 1000 live births
- Male:Female = 4-5:1 (strong male predominance)
- First-born males most commonly affected
- Family history in 15%; multifactorial inheritance
- Associated with macrolide antibiotics (erythromycin) in early infancy

### Clinical Features
- **Onset**: 2-8 weeks of age (peak 3-5 weeks)
- **Projectile non-bilious vomiting**: Hallmark; immediately after feeds
- **Hungry baby**: Wants to feed again immediately after vomiting
- **Weight loss and dehydration**: Progressive if untreated
- **Visible gastric peristalsis**: Left to right wave visible on abdomen
- **Palpable "olive"**: Firm, mobile mass in right upper quadrant/epigastrium (best felt during feed)
- **Metabolic derangement**: Hypochloremic, hypokalemic metabolic alkalosis (loss of HCl from vomiting)

## Intussusception
### Definition
- Telescoping of proximal bowel (intussusceptum) into distal bowel (intussuscipiens)
- Most common cause of intestinal obstruction in infants (3 months to 2 years)

### Epidemiology
- Peak age: 6-9 months
- Male:Female = 3:1
- Most common type: Ileocolic (ileum into colon through ileocecal valve) - 90%
- Seasonal variation: Higher in spring/autumn (viral illness peaks)

### Etiology
- **Children** (<2 years): Usually idiopathic (95%); viral lymphoid hyperplasia (Peyer patches) acts as lead point
- **Older children/Adults**: Usually pathological lead point (Meckel diverticulum, polyp, lymphoma, duplication cyst)

### Clinical Features (Classic Triad - present in only 20%)
1. **Colicky abdominal pain**: Episodic, severe; child draws up legs and screams
2. **Vomiting**: Initially non-bilious, later bilious
3. **Red currant jelly stool**: Blood and mucus from mucosal ischemia (late sign)

### Other Features
- **Sausage-shaped mass**: Palpable in right upper quadrant/transverse colon
- **Dance sign**: Empty right iliac fossa (caecum drawn up)
- **Lethargy**: Between episodes of pain (may be misdiagnosed as sepsis/meningitis)
- **Dehydration and shock**: If presentation delayed`,
        mnemonics: [
          { text: "IHPS: Projectile + Non-bilious + Olive + Hungry baby + Alkalosis", explanation: "Five cardinal features of infantile hypertrophic pyloric stenosis" },
          { text: "Intussusception: Red Currant Jelly + Sausage mass + Dance sign + Colicky pain", explanation: "Classic clinical features of childhood intussusception" },
        ],
        keyPoints: [
          "IHPS: 2-8 weeks age, projectile non-bilious vomiting, palpable olive, hypochloremic hypokalemic metabolic alkalosis",
          "Intussusception: 6-9 months peak, ileocolic (90%), red currant jelly stool is late sign",
          "IHPS: first-born males; Intussusception: idiopathic in <2 years (viral lymphoid hyperplasia)",
          "Dance sign: empty RIF in intussusception (caecum drawn up with intussusception)",
          "Lethargy between pain episodes in intussusception may mimic sepsis/meningitis",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 35: Pediatric Surgery", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 8: Pediatric Surgery", edition: "28th" },
        ],
      },
      {
        layer: 2,
        slug: "pyloric-stenosis-intussusception-layer-2-mechanism",
        title: "Pyloric Stenosis & Intussusception - Mechanism",
        estimatedMinutes: 22,
        summary: "Pathophysiology of pyloric muscle hypertrophy, intussusception vascular compromise, and metabolic derangements.",
        contentMd: `# Pyloric Stenosis & Intussusception - Mechanism

## IHPS Pathophysiology
### Muscle Hypertrophy
- Circular muscle layer of pylorus undergoes progressive hypertrophy
- Pyloric channel becomes elongated and narrowed ("string sign" on imaging)
- Mucosa is folded and may prolapse into gastric antrum
- Not present at birth; develops postnatally (hence presentation at 2-8 weeks)

### Proposed Mechanisms
- Deficiency of nitric oxide synthase (nNOS) in pyloric muscle
- Reduced nitric oxide → failure of smooth muscle relaxation
- Elevated gastrin levels may contribute
- Genetic predisposition + environmental triggers (macrolides, bottle feeding)

### Metabolic Consequences
- Persistent vomiting of gastric contents (HCl-rich)
- **Loss of H+ and Cl-** → Hypochloremic metabolic alkalosis
- **Renal compensation**: Kidneys retain H+ and excrete HCO3- (but limited by volume depletion)
- **K+ depletion**: Kidneys exchange K+ for H+ to retain acid → hypokalemia
- **Paradoxical aciduria**: Despite systemic alkalosis, kidneys excrete acidic urine (Na+/K+ depleted → H+ exchange prioritized)
- Dehydration from fluid losses

### Correction Priority
1. Correct dehydration first (NS bolus)
2. Replace chloride (NS with KCl)
3. Monitor electrolytes
4. Surgery ONLY after metabolic correction (not an immediate emergency)

## Intussusception Pathophysiology
### Telescoping Mechanism
1. Lead point (lymphoid tissue/pathological mass) carried distally by peristalsis
2. Proximal bowel invaginates into distal bowel
3. Mesentery drawn in between bowel layers
4. Mesenteric vessels compressed → venous congestion

### Vascular Compromise Sequence
1. **Venous obstruction** (first): Congestion, edema, blood oozing from mucosa
2. **"Red currant jelly" stool**: Blood + mucus from ischemic mucosa
3. **Arterial obstruction** (later): Full-thickness ischemia
4. **Gangrene and perforation**: If untreated (usually after 24-48 hours)

### Lead Points by Age
- **Infants (<2 years)**: Hypertrophied Peyer patches (viral); IDIOPATHIC in 95%
- **Children (>2 years)**: Meckel diverticulum, polyps, Henoch-Schonlein purpura
- **Adults**: Tumors (lymphoma, adenoma, lipoma), Meckel diverticulum

### Types of Intussusception
- **Ileocolic (90%)**: Ileum into colon through ileocecal valve (most common)
- **Ileoileal**: Small bowel into small bowel (Henoch-Schonlein purpura)
- **Colocolic**: Colon into colon (rare; usually pathological lead point)`,
        mnemonics: [
          { text: "IHPS metabolic: HCl loss → Alkalosis + Low Cl + Low K + Paradoxical aciduria", explanation: "Sequential metabolic derangement from persistent vomiting of gastric acid" },
          { text: "Intussusception: Venous first → Edema → Red currant jelly → Arterial → Gangrene", explanation: "Progressive vascular compromise sequence" },
        ],
        keyPoints: [
          "IHPS: nNOS deficiency → pyloric muscle fails to relax → hypertrophy and narrowing",
          "Metabolic derangement: hypochloremic hypokalemic metabolic alkalosis with paradoxical aciduria",
          "MUST correct metabolic derangement BEFORE surgery (IHPS is not an immediate surgical emergency)",
          "Intussusception: mesentery trapped → venous obstruction first → ischemia → gangrene",
          "Idiopathic in 95% of infants; pathological lead point in older children/adults",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 35", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 8", edition: "28th" },
        ],
      },
      {
        layer: 3,
        slug: "pyloric-stenosis-intussusception-layer-3-clinical",
        title: "Pyloric Stenosis & Intussusception - Clinical",
        estimatedMinutes: 25,
        summary: "Diagnostic imaging, Ramstedt pyloromyotomy, and air/hydrostatic reduction of intussusception.",
        contentMd: `# Pyloric Stenosis & Intussusception - Clinical Management

## IHPS Investigations
### Ultrasound Abdomen (Gold Standard)
- **Pyloric muscle thickness >3 mm** (most important criterion)
- **Pyloric channel length >15 mm**
- **Target sign**: Cross-section shows thickened muscle around narrowed lumen
- Sensitivity and specificity >95%

### Upper GI Contrast Study (If USG Equivocal)
- "String sign": Narrow elongated pyloric channel
- "Shoulder sign": Mass effect of pylorus on gastric antrum
- "Double track sign": Contrast in narrowed channel with mucosal folds

### Blood Gas and Electrolytes
- Metabolic alkalosis (pH >7.45, HCO3- elevated)
- Low Cl- (<95 mEq/L), Low K+ (<3.5 mEq/L)
- Must be corrected before surgery

## IHPS Management
### Pre-operative Correction (CRITICAL)
- IV fluids: NS with 5% dextrose; add KCl once urine output established
- Target: Cl- >100, K+ >3.5, HCO3- <26 before surgery
- NG tube decompression
- Usually takes 24-48 hours to correct

### Ramstedt Pyloromyotomy (Definitive)
- **Procedure**: Longitudinal incision through hypertrophied pyloric muscle down to mucosa (but NOT through mucosa)
- Muscle fibers split apart; mucosa bulges through (Fredet-Ramstedt operation)
- **Open** (RUQ incision or periumbilical) or **Laparoscopic** (increasingly preferred)
- **Complications**: Mucosal perforation (1-2%; recognized by air leak), incomplete myotomy, wound infection
- **Post-op**: Start feeds 4-6 hours post-surgery; rapid recovery
- Cure rate: >99%

## Intussusception Investigations
### Ultrasound Abdomen (Gold Standard)
- **Target sign/Doughnut sign**: Cross-section shows layers of intussuscepted bowel
- **Pseudokidney sign**: Longitudinal view resembles kidney
- **Crescent-in-doughnut sign**: Mesenteric fat within intussusception
- Sensitivity >98%; also assesses blood flow and lead points

### X-ray Abdomen
- Soft tissue mass (usually RUQ)
- Absence of gas in caecum/ascending colon
- Signs of obstruction in late presentation

## Intussusception Management
### Non-operative Reduction (First-line in Uncomplicated Cases)
- **Air enema reduction** (preferred): Air insufflated per rectum under fluoroscopy
  - Pressure limit: 120 mmHg; 3 attempts of 3 minutes each
  - Success rate: 80-90%
  - Contraindicated if peritonitis, perforation, or shock

- **Hydrostatic reduction**: Saline under ultrasound guidance
  - Increasingly popular; no radiation
  - Success rate: 80-85%

### Criteria for Attempting Reduction
- Duration <48 hours (relative)
- No peritonitis, no perforation
- Hemodynamically stable child
- No lead point suspected (age <2 years)

### Operative Management
- **Indications**: Failed reduction, peritonitis, perforation, shock, pathological lead point suspected, recurrent intussusception
- **Procedure**: Laparotomy or laparoscopy
  - Manual reduction: "Milking" intussusceptum out of intussuscipiens (push from distal end, NOT pull)
  - If gangrenous or irreducible: Resection + primary anastomosis
  - Appendicectomy often performed incidentally

### Recurrence
- After non-operative reduction: 10% recurrence rate
- After surgical reduction: 2-5% recurrence
- Recurrent cases: Investigate for pathological lead point`,
        mnemonics: [
          { text: "IHPS USG: 3 and 15 = Thickness >3mm, Length >15mm", explanation: "Two key ultrasound measurements for pyloric stenosis diagnosis" },
          { text: "Reduce intussusception: PUSH (from distal), never PULL", explanation: "Manual reduction technique: milk intussusceptum out by pushing from distal end" },
        ],
        keyPoints: [
          "IHPS: USG gold standard; muscle >3mm, channel >15mm; target sign",
          "Correct metabolic alkalosis BEFORE Ramstedt pyloromyotomy (24-48h resuscitation)",
          "Intussusception: USG target/doughnut sign; air enema reduction 80-90% success",
          "Air enema contraindicated in peritonitis/perforation/shock",
          "Surgical reduction: push from distal (milk out), never pull; resect if gangrenous",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 35", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 8", edition: "28th" },
        ],
      },
      {
        layer: 4,
        slug: "pyloric-stenosis-intussusception-layer-4-exam",
        title: "Pyloric Stenosis & Intussusception - Exam Prep",
        estimatedMinutes: 18,
        summary: "High-yield exam facts on pediatric surgical emergencies for NEXT pattern questions.",
        contentMd: `# Pyloric Stenosis & Intussusception - Exam Prep

## IHPS Must-Know Facts
- Age: 2-8 weeks; Male:Female = 4-5:1; first-born males
- Projectile NON-BILIOUS vomiting (below ampulla = bilious; IHPS is above = non-bilious)
- Palpable olive (right upper quadrant during feeding)
- Metabolic alkalosis: Hypochloremic, hypokalemic with paradoxical aciduria
- USG: Muscle >3mm, channel >15mm
- Ramstedt pyloromyotomy: Split muscle to mucosa, NOT through mucosa
- CORRECT METABOLIC DERANGEMENT FIRST (not a surgical emergency)

## Intussusception Must-Know Facts
- Peak: 6-9 months; Male > Female; ileocolic 90%
- Classic triad (only 20%): Colicky pain + vomiting + red currant jelly stool
- Sausage-shaped mass; Dance sign (empty RIF)
- USG: Target/doughnut sign
- Treatment: Air/hydrostatic reduction (80-90% success); surgery if failed
- Recurrence: 10% after non-operative; investigate lead point if recurrent

## Common Exam Traps
- "3-week-old with projectile vomiting" = IHPS (non-bilious = above ampulla)
- "3-week-old with bilious vomiting" = Malrotation with volvulus (surgical emergency!)
- "Correct metabolic alkalosis BEFORE pyloromyotomy" = Yes! IHPS can wait; metabolic correction first
- "8-month-old with episodic crying and red stool" = Intussusception; USG then air enema
- "2-year-old with recurrent intussusception" = Look for lead point (Meckel, polyp, lymphoma)
- "Lethargy in infant misdiagnosed as sepsis" = Consider intussusception

## Bilious vs Non-Bilious Vomiting in Neonates
| Feature | Non-Bilious | Bilious |
|---------|-------------|---------|
| Implies | Obstruction ABOVE ampulla | Obstruction BELOW ampulla |
| Examples | IHPS, Overfeeding, GERD | Malrotation, Duodenal atresia, NEC |
| Urgency | Investigate; not immediate emergency | SURGICAL EMERGENCY until proven otherwise |

## High-Yield Questions
- Most common cause of intestinal obstruction in infants = Intussusception
- Gold standard for IHPS diagnosis = USG (muscle >3mm, length >15mm)
- Procedure for IHPS = Ramstedt pyloromyotomy
- Most common type of intussusception = Ileocolic
- First-line treatment for intussusception = Air enema reduction
- Metabolic picture of IHPS = Hypochloremic hypokalemic metabolic alkalosis`,
        mnemonics: [
          { text: "Non-bilious = Above ampulla (IHPS); Bilious = Below ampulla (EMERGENCY)", explanation: "Critical distinction in neonatal vomiting that guides urgency" },
          { text: "3 and 15: Muscle >3mm, Channel >15mm = IHPS on USG", explanation: "Diagnostic criteria for pyloric stenosis" },
        ],
        keyPoints: [
          "IHPS: non-bilious projectile vomiting; metabolic correction before surgery",
          "Bilious vomiting in neonate = surgical emergency (malrotation until proven otherwise)",
          "Intussusception: air enema first-line; surgery if failed, peritonitis, or lead point",
          "USG gold standard for both conditions; target sign in intussusception",
          "Recurrent intussusception in older child = investigate for pathological lead point",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 35", edition: "6th" },
        ],
      },
      {
        layer: 5,
        slug: "pyloric-stenosis-intussusception-layer-5-active-recall",
        title: "Pyloric Stenosis & Intussusception - Active Recall",
        estimatedMinutes: 15,
        summary: "Flashcard Q&A for spaced repetition on pyloric stenosis and intussusception.",
        contentMd: `# Active Recall - Pyloric Stenosis & Intussusception

**Q1:** At what age does IHPS typically present?
**A1:** 2-8 weeks (peak 3-5 weeks). Not present at birth. Male:Female = 4-5:1. First-born males most commonly affected.

**Q2:** What is the hallmark vomiting pattern in IHPS?
**A2:** Projectile, non-bilious vomiting immediately after feeds. Baby remains hungry and wants to feed again immediately. Non-bilious because obstruction is above the ampulla of Vater.

**Q3:** What is the metabolic derangement in IHPS?
**A3:** Hypochloremic, hypokalemic metabolic alkalosis with paradoxical aciduria. From loss of HCl in vomitus. Kidneys exchange K+ and Na+ for H+ retention.

**Q4:** What are the USG criteria for IHPS?
**A4:** Pyloric muscle thickness >3 mm AND pyloric channel length >15 mm. Target sign on cross-section. Sensitivity and specificity >95%.

**Q5:** What is Ramstedt pyloromyotomy?
**A5:** Longitudinal incision through hypertrophied pyloric muscle down to (but NOT through) the mucosa. Muscle fibers split apart allowing mucosa to bulge through. Cure rate >99%.

**Q6:** Why must metabolic correction precede surgery in IHPS?
**A6:** Uncorrected alkalosis and hypokalemia increase anesthetic risk (cardiac arrhythmias, respiratory depression). IHPS is NOT an immediate emergency; safe to correct electrolytes over 24-48 hours first.

**Q7:** What is the most common type of intussusception in children?
**A7:** Ileocolic (90%). Ileum telescopes into colon through the ileocecal valve. Idiopathic in 95% of children <2 years (viral lymphoid hyperplasia as lead point).

**Q8:** What is the classic triad of intussusception?
**A8:** Colicky abdominal pain (episodic), vomiting, and red currant jelly stool. Only present in 20% of cases. Lethargy between episodes may be only finding.

**Q9:** What is the target/doughnut sign?
**A9:** USG cross-sectional appearance of intussusception showing concentric rings of bowel wall layers. Pathognomonic. Also called "bull's eye" sign.

**Q10:** What is the first-line treatment for uncomplicated intussusception?
**A10:** Air enema reduction under fluoroscopy (80-90% success). Pressure limit 120 mmHg. Three attempts of 3 minutes each. Contraindicated if peritonitis, perforation, or shock.

**Q11:** When is surgery needed for intussusception?
**A11:** Failed non-operative reduction, peritonitis, perforation, hemodynamic instability, suspected pathological lead point, and recurrent intussusception.

**Q12:** How do you differentiate IHPS vomiting from malrotation vomiting?
**A12:** IHPS: Non-bilious (obstruction above ampulla); not an immediate emergency. Malrotation with volvulus: Bilious (obstruction below ampulla); SURGICAL EMERGENCY. Bilious vomiting in a neonate = urgent investigation.`,
        mnemonics: [
          { text: "IHPS: Olive + Non-bilious + Alkalosis + 3-5 weeks + First-born male", explanation: "Complete clinical picture of infantile pyloric stenosis" },
          { text: "Intussusception: 6-9 months, Ileocolic, Idiopathic, Red currant jelly, Air enema", explanation: "Five key facts about childhood intussusception" },
        ],
        keyPoints: [
          "IHPS: 2-8 weeks, projectile non-bilious vomiting, olive, metabolic alkalosis, Ramstedt pyloromyotomy",
          "Correct metabolic derangement BEFORE pyloromyotomy (not an immediate emergency)",
          "Intussusception: 6-9 months, ileocolic 90%, red currant jelly stool, target sign on USG",
          "Air enema first-line (80-90%); surgery if failed or complicated",
          "Bilious vomiting in neonate = surgical emergency (malrotation) vs non-bilious = IHPS",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 35", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 8", edition: "28th" },
        ],
      },
    ],
  },
];
