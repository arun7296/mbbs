import type { TopicLessons } from "./content-loader";

export const surgeryPart5Lessons: TopicLessons[] = [
  {
    topicCode: "SU-MOD-05-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "inguinal-hernia-layer-1-foundation",
        title: "Inguinal & Femoral Hernia - Foundation",
        estimatedMinutes: 20,
        summary: "Anatomy of inguinal canal, classification of inguinal and femoral hernias, and clinical features.",
        contentMd: `# Inguinal & Femoral Hernia - Foundation

## Anatomy of the Inguinal Canal
### Boundaries
- **Length**: 4 cm, directed medially and downward
- **Anterior wall**: External oblique aponeurosis (reinforced laterally by internal oblique)
- **Posterior wall**: Transversalis fascia (reinforced medially by conjoint tendon)
- **Roof**: Arching fibers of internal oblique and transversus abdominis
- **Floor**: Inguinal ligament + lacunar ligament medially

### Important Landmarks
- **Deep (internal) ring**: Opening in transversalis fascia; lateral to inferior epigastric vessels
- **Superficial (external) ring**: Triangular opening in external oblique aponeurosis above pubic tubercle
- **Hesselbach triangle**: Bounded by inferior epigastric artery (lateral), rectus sheath (medial), inguinal ligament (inferior)

### Contents
- Males: Spermatic cord (vas deferens, testicular artery, pampiniform plexus, cremasteric artery, ilioinguinal nerve)
- Females: Round ligament of uterus

## Classification of Groin Hernias
### Inguinal Hernia (75% of all abdominal wall hernias)
- **Indirect**: Through deep ring, lateral to inferior epigastric vessels; 65% of inguinal hernias
- **Direct**: Through Hesselbach triangle, medial to inferior epigastric vessels; 35%
- **Pantaloon hernia**: Both direct and indirect components straddling epigastric vessels

### Femoral Hernia (5% of groin hernias)
- Through femoral canal, below inguinal ligament
- Femoral canal boundaries: Inguinal ligament (anterior), pectineal ligament (posterior), lacunar ligament (medial), femoral vein (lateral)
- More common in females (F:M = 4:1)
- HIGH strangulation risk due to rigid femoral ring

## Clinical Features
- **Inguinal hernia**: Swelling above and medial to pubic tubercle; reduces on lying down
- **Femoral hernia**: Swelling below and lateral to pubic tubercle; may be irreducible
- **Cough impulse**: Expansile impulse on coughing = hallmark sign
- **Indirect vs Direct**: Deep ring occlusion test (Zieman technique)

## Epidemiology
- Inguinal hernia: Most common surgical condition worldwide
- Lifetime risk: 27% males, 3% females
- Right side > Left (due to later descent of right testis)
- Risk factors: Heavy lifting, chronic cough, BPH, constipation, ascites, obesity`,
        mnemonics: [
          { text: "NAVEL: Nerve, Artery, Vein, Empty space, Lymphatics", explanation: "Contents of femoral sheath from lateral to medial (femoral canal is the empty space)" },
          { text: "MID rule: Medial = Direct, Indirect = Deep ring (lateral)", explanation: "Direct hernia is medial to epigastric vessels; Indirect passes through deep ring laterally" },
        ],
        keyPoints: [
          "Indirect hernia: through deep ring, lateral to inferior epigastric vessels; most common type",
          "Direct hernia: through Hesselbach triangle, medial to inferior epigastric vessels",
          "Femoral hernia: below inguinal ligament, high strangulation risk, more common in females",
          "Cough impulse is the hallmark clinical sign of a hernia",
          "Deep ring occlusion test differentiates indirect from direct inguinal hernia",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 11: Hernia", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 60: Abdominal Wall Hernias", edition: "28th" },
        ],
      },
      {
        layer: 2,
        slug: "inguinal-hernia-layer-2-mechanism",
        title: "Inguinal & Femoral Hernia - Mechanism",
        estimatedMinutes: 25,
        summary: "Pathogenesis of inguinal and femoral hernias, processus vaginalis, strangulation pathophysiology, and special hernia types.",
        contentMd: `# Inguinal & Femoral Hernia - Mechanism

## Pathogenesis of Indirect Inguinal Hernia
- Patent processus vaginalis (PPV) is the congenital predisposition
- PPV present in 80% neonates; obliterates in most by age 2
- Patent in 20% adults but only a fraction develop hernia
- Increased intra-abdominal pressure forces abdominal contents through patent deep ring
- Progressive enlargement: Bubonocele → Funicular → Complete (inguinoscrotal)

## Pathogenesis of Direct Inguinal Hernia
- Acquired weakness of transversalis fascia in Hesselbach triangle
- Collagen metabolism abnormality: Decreased type I:III collagen ratio
- Risk factors: Smoking (inhibits collagen synthesis), aging, connective tissue disorders
- Usually occurs in older men (>40 years)
- Does NOT descend into scrotum (blocked by transversalis fascia at deep ring)

## Pathogenesis of Femoral Hernia
- Pre-existing potential space (femoral canal) allows herniation
- Enlarged femoral ring in multiparous women
- Rigid boundaries (lacunar ligament medially) prevent expansion
- This rigidity explains high strangulation rate (30-40%)

## Strangulation Pathophysiology
### Sequence of Events
1. Hernia becomes irreducible (adhesions or narrow neck)
2. Venous obstruction first (lower pressure) → congestion and edema
3. Arterial compromise follows → ischemia
4. Mucosal necrosis → bacterial translocation
5. Full-thickness gangrene → perforation → peritonitis

### Timeline
- 6 hours: Tissue ischemia begins
- 12-24 hours: Gangrenous changes
- 24-48 hours: Perforation risk significantly increases

## Special Types of Hernia
### Richter Hernia
- Only antimesenteric border of bowel wall involved
- May NOT cause intestinal obstruction (lumen still patent)
- Can strangulate and perforate without obstructive symptoms
- Most common in femoral hernia (small rigid ring)

### Littre Hernia
- Meckel diverticulum in the hernia sac
- Can present with inflammation mimicking strangulation

### Maydl Hernia (W-hernia)
- Two loops of bowel in sac; intervening loop in abdomen may strangulate
- Retrograde strangulation of the connecting loop

### Sliding Hernia (Hernia en glissade)
- Viscus forms part of the sac wall
- Sigmoid colon (left), Caecum (right), Bladder
- Important: Do not excise sac completely; risk of visceral injury`,
        mnemonics: [
          { text: "Hernia progression: BFC", explanation: "Bubonocele (at deep ring) → Funicular (in canal) → Complete (inguinoscrotal)" },
          { text: "Richter = Rim (antimesenteric border only); No obstruction but can perforate", explanation: "Only rim/edge of bowel wall trapped; lumen patent so no obstruction signs" },
        ],
        keyPoints: [
          "Patent processus vaginalis is the congenital basis for indirect inguinal hernia",
          "Direct hernia: acquired weakness in Hesselbach triangle; altered collagen metabolism",
          "Femoral hernia has highest strangulation rate (30-40%) due to rigid ring boundaries",
          "Strangulation: venous obstruction first, then arterial, then gangrene within 6-24 hours",
          "Richter hernia: antimesenteric border only; can perforate without obstruction symptoms",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 11", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 60", edition: "28th" },
        ],
      },
      {
        layer: 3,
        slug: "inguinal-hernia-layer-3-clinical",
        title: "Inguinal & Femoral Hernia - Clinical",
        estimatedMinutes: 25,
        summary: "Clinical examination, deep ring occlusion test, surgical repair techniques, and emergency management of strangulation.",
        contentMd: `# Inguinal & Femoral Hernia - Clinical Management

## Clinical Examination
### Inspection
- Ask patient to stand; inspect groin for visible swelling
- Note site relative to pubic tubercle: Above + medial = inguinal; Below + lateral = femoral
- Ask patient to cough: Look for expansile cough impulse

### Palpation
- Confirm cough impulse with hand over swelling
- Attempt reduction (patient supine): Reducible vs irreducible
- Check for tenderness (suggests complications)

### Deep Ring Occlusion Test (Zieman Technique)
- Reduce hernia completely
- Press firmly over deep ring (midpoint of inguinal ligament)
- Ask patient to cough or strain
- Hernia controlled = Indirect (comes through deep ring)
- Hernia NOT controlled = Direct (comes through posterior wall)

### Differentiating from Other Groin Swellings
- Inguinal lymph node: Multiple, firm, non-reducible, no cough impulse
- Saphena varix: Disappears on lying down, thrill on coughing (not impulse)
- Ectopic testis/lipoma of cord: Fixed position, no cough impulse

## Surgical Management
### Open Mesh Repair (Lichtenstein Technique) - Gold Standard
- Tension-free mesh repair; recurrence rate <1-2%
- Polypropylene mesh placed over posterior wall
- Can be done under local anesthesia (ideal for high-risk patients)
- Steps: Open external oblique → identify cord → dissect sac → reduce/ligate sac → place mesh → close

### Laparoscopic Repair
- **TEP (Totally Extraperitoneal)**: Preferred; does not enter peritoneal cavity
- **TAPP (Transabdominal Preperitoneal)**: Enters peritoneum; mesh placed preperitoneally
- Advantages: Less postoperative pain, faster recovery, ideal for bilateral/recurrent hernias
- Disadvantage: Requires general anesthesia, higher cost, learning curve

### Bassini Repair (Historical)
- Posterior wall reconstruction by suturing conjoint tendon to inguinal ligament
- Tissue repair (no mesh); higher recurrence (5-10%)
- Largely replaced by mesh repair

### Shouldice Repair
- 4-layer repair of posterior wall; recurrence 1-2% in expert hands
- Gold standard tissue repair (Shouldice Hospital, Canada)

### Femoral Hernia Repair
- **Lockwood (low/crural approach)**: Through thigh below inguinal ligament
- **Lotheissen (high/inguinal approach)**: Through inguinal canal
- **McEvedy (high/extraperitoneal approach)**: Through rectus sheath; preferred for strangulated femoral hernia
- Always use mesh if not contaminated

## Emergency Management of Strangulated Hernia
1. Resuscitation: IV fluids, NG tube, catheterization
2. Broad-spectrum antibiotics: Cefotaxime + Metronidazole
3. Emergency surgery within 4-6 hours
4. Assess bowel viability: Color, peristalsis, mesenteric pulsation, bleeding on incision
5. Viable bowel: Reduce and repair
6. Non-viable bowel: Resect with primary anastomosis if possible
7. Never attempt forceful manual reduction (taxis) of suspected strangulation

## Indian Context
- Inguinal hernia repair is the most commonly performed elective surgery in India
- Open mesh repair (Lichtenstein) is standard in most centers
- Laparoscopic repair increasing in urban tertiary centers
- Desarda technique (no mesh, using external oblique strip) popular in resource-limited settings`,
        mnemonics: [
          { text: "Lichtenstein = Tension-free mesh = Gold standard", explanation: "Polypropylene mesh, <2% recurrence, can do under local anesthesia" },
          { text: "McEvedy for strangulated femoral hernia", explanation: "High extraperitoneal approach gives best access for bowel assessment in strangulated femoral hernia" },
        ],
        keyPoints: [
          "Deep ring occlusion test: controlled = indirect; not controlled = direct",
          "Lichtenstein tension-free mesh repair is the gold standard; <2% recurrence",
          "TEP is preferred laparoscopic approach; does not enter peritoneal cavity",
          "McEvedy approach preferred for strangulated femoral hernia",
          "Never attempt taxis (forceful manual reduction) in suspected strangulation",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 11", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 60", edition: "28th" },
        ],
      },
      {
        layer: 4,
        slug: "inguinal-hernia-layer-4-exam",
        title: "Inguinal & Femoral Hernia - Exam Prep",
        estimatedMinutes: 20,
        summary: "High-yield exam facts on groin hernias for NEXT pattern questions.",
        contentMd: `# Inguinal & Femoral Hernia - Exam Prep

## Must-Know Differentials
| Feature | Indirect Inguinal | Direct Inguinal | Femoral |
|---------|------------------|----------------|---------|
| Site | Lateral to epigastric | Medial to epigastric | Below inguinal ligament |
| Age | Any (common young) | Older (>40) | Middle-aged women |
| Sac relation | Through deep ring | Hesselbach triangle | Through femoral canal |
| Descent to scrotum | Yes | No | No |
| Deep ring test | Controlled | Not controlled | N/A |
| Strangulation | Moderate risk | Low risk | HIGH risk (30-40%) |
| Relation to pubic tubercle | Above and medial | Above and medial | Below and lateral |

## Must-Know Facts
- Most common hernia overall: Indirect inguinal
- Most common hernia in females: Indirect inguinal (NOT femoral)
- Femoral hernia: Most common hernia to strangulate
- Richter hernia: Most common in femoral hernia; partial bowel wall; no obstruction
- Sliding hernia: Sigmoid (left), Caecum (right)
- Pantaloon hernia: Both direct + indirect components

## Common Exam Traps
- "Most common hernia in females" = Still indirect inguinal (femoral is most common ONLY among hernias that strangulate)
- "Hernia does not descend into scrotum" = Direct inguinal (or femoral)
- "Groin swelling below inguinal ligament" = Femoral hernia (not inguinal)
- "Strangulated hernia with no obstructive symptoms" = Richter hernia
- "Irreducible hernia + bowel sounds normal" = Think Richter hernia

## Surgical Approach Quick Reference
| Situation | Preferred Repair |
|-----------|-----------------|
| Primary unilateral | Lichtenstein (open mesh) |
| Bilateral | Laparoscopic TEP/TAPP |
| Recurrent after open | Laparoscopic TEP |
| Recurrent after lap | Open Lichtenstein |
| Strangulated inguinal | Open exploration + repair |
| Strangulated femoral | McEvedy approach |
| Pediatric | Herniotomy (no mesh needed) |

## High-Yield Questions
- Gold standard for primary inguinal hernia repair = Lichtenstein tension-free mesh
- Preferred lap approach = TEP (totally extraperitoneal)
- Best approach for strangulated femoral hernia = McEvedy (high extraperitoneal)
- Hernia in children = Herniotomy only (sac ligation); mesh not needed
- Most common complication post hernia repair = Chronic groin pain (inguinodynia)
- Structure at risk during inguinal hernia repair = Ilioinguinal nerve`,
        mnemonics: [
          { text: "Femoral: Female, Fatal (strangulates), Below ligament", explanation: "More common in females, highest strangulation risk, below inguinal ligament" },
          { text: "Direct = Doesn't Descend to scrotum", explanation: "Direct hernia bulges forward through posterior wall; does not follow spermatic cord into scrotum" },
        ],
        keyPoints: [
          "Most common hernia in both sexes: indirect inguinal (NOT femoral in females)",
          "Femoral hernia: highest strangulation rate; below and lateral to pubic tubercle",
          "Richter hernia: antimesenteric border only; strangulates without obstruction",
          "Lichtenstein = gold standard open repair; TEP = preferred laparoscopic",
          "Pediatric hernia: herniotomy only (sac ligation); mesh not needed",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 11", edition: "6th" },
        ],
      },
      {
        layer: 5,
        slug: "inguinal-hernia-layer-5-active-recall",
        title: "Inguinal & Femoral Hernia - Active Recall",
        estimatedMinutes: 15,
        summary: "Flashcard Q&A for spaced repetition on groin hernias.",
        contentMd: `# Active Recall - Inguinal & Femoral Hernia

**Q1:** What are the boundaries of the inguinal canal?
**A1:** Anterior: external oblique aponeurosis. Posterior: transversalis fascia + conjoint tendon. Roof: internal oblique + transversus. Floor: inguinal ligament.

**Q2:** How do you differentiate indirect from direct inguinal hernia clinically?
**A2:** Deep ring occlusion test: press over deep ring (midpoint of inguinal ligament); if hernia is controlled = indirect; if not controlled = direct.

**Q3:** What defines Hesselbach triangle?
**A3:** Inferior epigastric artery (lateral), lateral border of rectus (medial), inguinal ligament (inferior). Direct hernia protrudes through this triangle.

**Q4:** Why does femoral hernia have such high strangulation risk?
**A4:** Rigid boundaries of femoral ring (inguinal ligament anterior, pectineal ligament posterior, lacunar ligament medial, femoral vein lateral) prevent expansion, causing constriction.

**Q5:** What is the gold standard surgical repair for primary inguinal hernia?
**A5:** Lichtenstein tension-free mesh repair. Polypropylene mesh over posterior wall. Recurrence <1-2%. Can be done under local anesthesia.

**Q6:** What is a Richter hernia and why is it dangerous?
**A6:** Only antimesenteric border of bowel is trapped. Dangerous because it can strangulate and perforate WITHOUT causing intestinal obstruction symptoms.

**Q7:** What is the preferred approach for strangulated femoral hernia?
**A7:** McEvedy approach (high extraperitoneal through rectus sheath). Provides best access for bowel assessment and resection if needed.

**Q8:** What is the difference between TEP and TAPP?
**A8:** TEP (Totally Extraperitoneal): does not enter peritoneum; preferred. TAPP (Transabdominal Preperitoneal): enters peritoneum, mesh placed preperitoneally. Both place mesh in same position.

**Q9:** What is a sliding hernia?
**A9:** A hernia where a viscus forms part of the sac wall. Sigmoid colon on left, caecum on right, sometimes bladder. Risk of visceral injury during sac excision.

**Q10:** What is the most common hernia in females?
**A10:** Indirect inguinal hernia (NOT femoral). Femoral hernia is more common in females compared to males, but indirect inguinal is still the overall most common.

**Q11:** What nerve is most commonly injured during inguinal hernia repair?
**A11:** Ilioinguinal nerve. Injury causes chronic inguinodynia (groin pain) and loss of sensation over medial thigh and scrotum/labia.

**Q12:** How is pediatric inguinal hernia managed?
**A12:** Herniotomy (ligation and excision of sac at deep ring). Mesh is NOT needed in children as tissues are healthy and defect is congenital (PPV), not acquired weakness.`,
        mnemonics: [
          { text: "NAVEL for femoral sheath (lateral to medial): Nerve, Artery, Vein, Empty space, Lymphatics", explanation: "Femoral canal (empty space) is where femoral hernia occurs; medial to femoral vein" },
          { text: "Strangulation sequence: VAGGP", explanation: "Venous obstruction → Arterial compromise → Gangrene → Gas (bacterial) → Perforation" },
        ],
        keyPoints: [
          "Indirect hernia: lateral to epigastric vessels, through deep ring; most common type",
          "Femoral hernia: below inguinal ligament, highest strangulation risk, rigid ring",
          "Lichtenstein mesh repair: gold standard, <2% recurrence, local anesthesia possible",
          "Richter hernia: antimesenteric border; strangulates without obstruction",
          "Pediatric hernia: herniotomy only (no mesh needed); always indirect",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 11", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 60", edition: "28th" },
        ],
      },
    ],
  },
];
