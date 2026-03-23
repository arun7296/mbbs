import type { TopicLessons } from "./content-loader";

export const surgeryPart6Lessons: TopicLessons[] = [
  {
    topicCode: "SU-MOD-05-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "intestinal-obstruction-layer-1-foundation",
        title: "Intestinal Obstruction - Foundation",
        estimatedMinutes: 22,
        summary: "Classification, etiology, and pathophysiology of intestinal obstruction including mechanical vs functional types.",
        contentMd: `# Intestinal Obstruction - Foundation

## Definition
Physical or functional blockage of the intestinal lumen preventing normal passage of intestinal contents. Surgical emergency when strangulation occurs.

## Classification
### By Mechanism
- **Mechanical**: Physical barrier to passage (most common)
- **Functional (Paralytic ileus)**: Loss of peristalsis without physical barrier
- **Vascular (Mesenteric ischemia)**: Compromised blood supply causes functional obstruction

### By Location
- **Small bowel obstruction (SBO)**: 80% of mechanical obstructions
- **Large bowel obstruction (LBO)**: 20% of mechanical obstructions

### By Completeness
- **Complete**: Total luminal blockage; no passage of flatus or stool
- **Incomplete (Partial)**: Some passage of gas/liquid stool continues

### By Blood Supply
- **Simple**: No vascular compromise
- **Strangulated**: Blood supply compromised; surgical emergency

## Common Causes
### Small Bowel Obstruction
- **Adhesions**: 60-70% (most common cause overall; post-surgical)
- **Hernias**: 15-20% (second most common; external > internal)
- **Neoplasms**: 10-15%
- **Intussusception**: Common in children
- **Gallstone ileus**: Rare; stone >2.5 cm impacts at ileocecal valve
- **Strictures**: TB, Crohn disease, radiation

### Large Bowel Obstruction
- **Colorectal carcinoma**: 60% (most common cause)
- **Volvulus**: 15-20% (sigmoid > caecal)
- **Diverticular disease**: Stricture from repeated inflammation
- **Faecal impaction**: Elderly, bedridden patients

### In Indian Context
- Obstructed hernia is the most common cause of SBO in India (vs adhesions in West)
- Intestinal tuberculosis causing strictures is more common
- Sigmoid volvulus more common than in Western countries

## Clinical Features
- **Cardinal symptoms**: Colicky abdominal pain, vomiting, distension, absolute constipation
- **SBO**: Early vomiting (bilious/feculent), less distension, more pain
- **LBO**: Late vomiting, more distension, earlier constipation
- **Strangulation signs**: Continuous pain, fever, tachycardia, peritonism, blood in stool`,
        mnemonics: [
          { text: "4 Cardinal Signs: Pain, Vomiting, Distension, Constipation (PVDC)", explanation: "The four hallmark features of intestinal obstruction in order of appearance" },
          { text: "Adhesions = Adults; Intussusception = Infants", explanation: "Most common cause of SBO by age group" },
        ],
        keyPoints: [
          "Adhesions are the most common cause of SBO worldwide; obstructed hernia most common in India",
          "Colorectal carcinoma is the most common cause of large bowel obstruction",
          "Simple obstruction: no vascular compromise; Strangulated: blood supply compromised",
          "SBO: early vomiting, less distension; LBO: late vomiting, more distension",
          "Strangulation signs: continuous pain, fever, tachycardia, peritonism",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 22: Intestinal Obstruction", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 71: Intestinal Obstruction", edition: "28th" },
        ],
      },
      {
        layer: 2,
        slug: "intestinal-obstruction-layer-2-mechanism",
        title: "Intestinal Obstruction - Mechanism",
        estimatedMinutes: 25,
        summary: "Pathophysiology of intestinal obstruction including fluid shifts, closed-loop obstruction, and strangulation cascade.",
        contentMd: `# Intestinal Obstruction - Mechanism

## Proximal Bowel Changes
- Accumulation of gas and fluid proximal to obstruction
- Sources of gas: Swallowed air (70%), bacterial fermentation (30%)
- Fluid: Normal GI secretions (6-8 L/day) accumulate; cannot be reabsorbed
- Progressive distension increases intraluminal pressure

## Fluid and Electrolyte Derangements
- **Third-space losses**: Fluid sequestered in bowel wall and peritoneal cavity
- **Vomiting losses**: HCl, K+, Na+, water
- **Proximal SBO**: Metabolic alkalosis (loss of gastric acid)
- **Distal SBO/LBO**: Metabolic acidosis (loss of alkaline intestinal secretions + bacterial metabolism)
- **Dehydration**: Can lose 4-6 L/day; hypovolemic shock if untreated

## Bacterial Overgrowth
- Stasis promotes bacterial proliferation (especially anaerobes)
- Bacterial translocation across compromised mucosa
- Endotoxin absorption leads to systemic inflammatory response
- Feculent vomiting indicates advanced SBO with bacterial overgrowth

## Closed-Loop Obstruction
- Segment of bowel obstructed at TWO points (e.g., volvulus, obstructed loop of hernia)
- No proximal decompression possible
- Rapid increase in intraluminal pressure
- Early progression to strangulation and perforation
- Surgical emergency: Cannot wait for conservative management

## Strangulation Pathophysiology
### Sequence
1. Venous obstruction (lower pressure compromised first)
2. Arterial obstruction follows
3. Hemorrhagic infarction of bowel wall
4. Mucosal barrier breakdown
5. Bacterial translocation and peritonitis
6. Perforation, sepsis, multi-organ failure

### Competent Ileocecal Valve in LBO
- If ileocecal valve is competent: Creates closed-loop obstruction
- Caecum distends maximally (thinnest wall, largest diameter - Laplace law)
- Caecal perforation when diameter >12 cm
- If valve is incompetent: Decompresses retrogradely into small bowel

## Specific Mechanisms
### Volvulus
- Sigmoid (75%): Redundant sigmoid loop twists on mesentery; "coffee bean" sign on X-ray
- Caecal (25%): Mobile caecum twists; "kidney bean" shape
- Sigmoid volvulus: Can try endoscopic decompression first
- Caecal volvulus: Usually requires surgery

### Intussusception
- Proximal bowel (intussusceptum) telescopes into distal bowel (intussuscipiens)
- Children: Usually ileocolic; idiopathic (viral lymphoid hyperplasia)
- Adults: Usually has lead point (polyp, tumor, Meckel diverticulum)
- "Red currant jelly" stool from mucosal ischemia`,
        mnemonics: [
          { text: "Closed Loop = Double block = Dangerous", explanation: "Bowel obstructed at two points; rapid pressure rise; early strangulation" },
          { text: "Laplace Law: Tension = Pressure x Radius; Caecum perforates first in LBO", explanation: "Caecum has largest diameter and thinnest wall; highest wall tension" },
        ],
        keyPoints: [
          "Third-space fluid losses can reach 4-6 L/day causing hypovolemic shock",
          "Proximal SBO causes metabolic alkalosis; distal SBO/LBO causes metabolic acidosis",
          "Closed-loop obstruction is a surgical emergency; rapid progression to strangulation",
          "Competent ileocecal valve in LBO creates closed-loop; caecum perforates at >12 cm diameter",
          "Strangulation: venous obstruction first, then arterial, then infarction and perforation",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 22", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 71", edition: "28th" },
        ],
      },
      {
        layer: 3,
        slug: "intestinal-obstruction-layer-3-clinical",
        title: "Intestinal Obstruction - Clinical",
        estimatedMinutes: 25,
        summary: "Diagnostic workup, imaging findings, and management of intestinal obstruction in Indian clinical practice.",
        contentMd: `# Intestinal Obstruction - Clinical Management

## Clinical Examination
### Inspection
- Distension (LBO > SBO), visible peristalsis (ladder pattern in thin patients)
- Surgical scars (adhesion risk), hernial orifices

### Auscultation
- **Mechanical**: High-pitched tinkling bowel sounds, borborygmi
- **Paralytic ileus**: Absent bowel sounds
- **Strangulation**: Initially hyperactive then absent

### Palpation
- Tenderness (localized = strangulation; generalized = peritonitis)
- Hernial orifices must ALWAYS be examined
- Rectal examination: Empty rectum (complete obstruction), mass (tumor), blood (strangulation)

## Investigations
### X-ray Abdomen (Erect + Supine) - First-line
- **SBO**: Multiple central air-fluid levels; valvulae conniventes (cross entire lumen)
- **LBO**: Peripheral air-fluid levels; haustra (do NOT cross entire lumen)
- **Volvulus**: Coffee bean sign (sigmoid); kidney bean sign (caecal)
- **Free gas under diaphragm**: Perforation (erect CXR)

### CT Abdomen with Contrast - Gold Standard
- Identifies site, cause, and complications (strangulation, perforation)
- Transition point: Dilated proximal bowel meets collapsed distal bowel
- "Small bowel feces sign": Particulate material in dilated SB proximal to obstruction
- Strangulation signs: Bowel wall thickening, mesenteric haziness, poor enhancement

### Blood Investigations
- CBC: Raised WBC (strangulation, perforation)
- Serum electrolytes: Hypokalemia, hyponatremia
- ABG: Metabolic acidosis (strangulation, dehydration)
- Serum lactate: Elevated in bowel ischemia (>2 mmol/L concerning)

## Management
### Initial Resuscitation (All Cases)
- NPO (nil per os)
- NG tube decompression (Ryle tube)
- IV fluids: Aggressive crystalloid resuscitation (correct electrolytes)
- Urinary catheter: Monitor urine output (target >0.5 mL/kg/hr)
- Antibiotics if strangulation suspected

### Conservative Management (Trial for 24-48 hours)
- Indicated for: Adhesive SBO without strangulation, paralytic ileus, partial obstruction
- NG decompression + IV fluids + monitoring
- Water-soluble contrast (Gastrografin): Diagnostic AND therapeutic in adhesive SBO
- If contrast reaches caecum in 24 hours: Likely to resolve conservatively
- Failure of conservative management: Proceed to surgery

### Surgical Management
**Indications for Emergency Surgery:**
- Strangulation (continuous pain, fever, tachycardia, peritonism)
- Complete obstruction not responding to conservative management
- Closed-loop obstruction
- Large bowel obstruction (except sigmoid volvulus)
- Peritonitis or free perforation

**Procedures:**
- Adhesiolysis for adhesive obstruction
- Hernia repair for obstructed hernia
- Resection + anastomosis for gangrenous bowel or tumor
- Hartmann procedure for obstructing left colon cancer
- Stenting as bridge to surgery for LBO in select cases

### Sigmoid Volvulus Management
1. Flatus tube decompression via sigmoidoscopy (80% success)
2. If failed or recurrent: Sigmoid colectomy (definitive)
3. If gangrenous: Emergency Hartmann procedure`,
        mnemonics: [
          { text: "SBO: Central, Valvulae; LBO: Peripheral, Haustra", explanation: "X-ray differences: SBO has central air-fluid levels with valvulae conniventes; LBO has peripheral levels with haustra" },
          { text: "Drip and Suck: IV fluids (drip) + NG tube (suck)", explanation: "Basic resuscitation for intestinal obstruction: IV fluid replacement and NG decompression" },
        ],
        keyPoints: [
          "Always examine hernial orifices in intestinal obstruction",
          "X-ray: SBO = central air-fluid levels with valvulae; LBO = peripheral with haustra",
          "CT abdomen is gold standard: identifies site, cause, and strangulation",
          "Conservative management (drip and suck) for adhesive SBO without strangulation for 24-48 hours",
          "Emergency surgery for strangulation, closed-loop, peritonitis, and failed conservative management",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 22", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 71", edition: "28th" },
        ],
      },
      {
        layer: 4,
        slug: "intestinal-obstruction-layer-4-exam",
        title: "Intestinal Obstruction - Exam Prep",
        estimatedMinutes: 20,
        summary: "High-yield exam facts on intestinal obstruction for NEXT pattern questions.",
        contentMd: `# Intestinal Obstruction - Exam Prep

## Must-Know Differentials
| Feature | SBO | LBO |
|---------|-----|-----|
| Vomiting | Early, bilious/feculent | Late |
| Distension | Less | More |
| Pain | Colicky, central | Colicky, lower |
| Constipation | Late | Early |
| X-ray | Central, valvulae | Peripheral, haustra |
| Common cause | Adhesions/Hernia | Cancer/Volvulus |

## Common Exam Traps
- "Previous surgery + colicky pain + vomiting" = Adhesive SBO
- "Groin swelling + obstruction" = Obstructed hernia (examine hernial orifices!)
- "Elderly + absolute constipation + massive distension" = LBO (think cancer or volvulus)
- "Coffee bean sign on X-ray" = Sigmoid volvulus
- "Child with red currant jelly stool + sausage-shaped mass" = Intussusception
- "Gallstone on X-ray + SBO + air in biliary tree" = Gallstone ileus (Rigler triad)

## Key X-ray Signs
- **3-6-9 Rule**: SB >3 cm, LB >6 cm, Caecum >9 cm = dilated
- **Coffee bean sign**: Sigmoid volvulus
- **Pneumobilia + SBO + gallstone**: Rigler triad (gallstone ileus)
- **Free gas under diaphragm**: Perforation
- **Stepladder pattern**: Multiple air-fluid levels in SBO

## High-Yield Questions
- Most common cause of SBO worldwide = Adhesions
- Most common cause of SBO in India = Obstructed hernia
- Most common cause of LBO = Colorectal carcinoma
- Investigation of choice = CT abdomen with contrast
- First investigation = X-ray abdomen (erect + supine)
- Most common site of volvulus = Sigmoid colon
- Caecum perforation threshold = >12 cm (Laplace law)
- Gastrografin in adhesive SBO: Both diagnostic and therapeutic

## Management Decision Tree
- Strangulation signs present → Emergency surgery
- Closed-loop obstruction → Emergency surgery
- Adhesive SBO, no strangulation → Conservative 24-48h (Gastrografin challenge)
- LBO from cancer → Surgery (Hartmann or resection)
- Sigmoid volvulus → Flatus tube decompression first; surgery if failed/recurrent`,
        mnemonics: [
          { text: "3-6-9: Small bowel 3cm, Large bowel 6cm, Caecum 9cm", explanation: "Diameters above these thresholds on X-ray indicate abnormal dilation" },
          { text: "Rigler Triad: Pneumobilia + SBO + Ectopic gallstone = Gallstone ileus", explanation: "Three classic radiological findings of gallstone ileus" },
        ],
        keyPoints: [
          "Adhesions: most common cause of SBO worldwide; obstructed hernia in India",
          "3-6-9 rule for X-ray: SB >3cm, LB >6cm, Caecum >9cm = dilated",
          "Coffee bean sign = sigmoid volvulus; Rigler triad = gallstone ileus",
          "CT abdomen gold standard; Gastrografin diagnostic + therapeutic in adhesive SBO",
          "Strangulation and closed-loop = emergency surgery; adhesive SBO = trial of conservative",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 22", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 71", edition: "28th" },
        ],
      },
      {
        layer: 5,
        slug: "intestinal-obstruction-layer-5-active-recall",
        title: "Intestinal Obstruction - Active Recall",
        estimatedMinutes: 15,
        summary: "Flashcard Q&A for spaced repetition on intestinal obstruction.",
        contentMd: `# Active Recall - Intestinal Obstruction

**Q1:** What is the most common cause of SBO in India vs worldwide?
**A1:** India: Obstructed hernia. Worldwide: Post-surgical adhesions (60-70%).

**Q2:** What are the four cardinal features of intestinal obstruction?
**A2:** Colicky abdominal pain, vomiting, abdominal distension, and absolute constipation (no flatus or stool).

**Q3:** How do you differentiate SBO from LBO on X-ray?
**A3:** SBO: Central air-fluid levels, valvulae conniventes (cross entire lumen). LBO: Peripheral air-fluid levels, haustra (do not cross entire lumen).

**Q4:** What is a closed-loop obstruction and why is it dangerous?
**A4:** Bowel obstructed at two points (e.g., volvulus). No proximal decompression possible, rapid pressure rise, early strangulation. Surgical emergency.

**Q5:** What is the 3-6-9 rule?
**A5:** On X-ray, abnormal dilation thresholds: Small bowel >3 cm, Large bowel >6 cm, Caecum >9 cm. Caecum >12 cm = perforation risk.

**Q6:** What is the role of Gastrografin in adhesive SBO?
**A6:** Both diagnostic and therapeutic. If contrast reaches caecum within 24 hours, obstruction likely to resolve conservatively. Also has osmotic effect drawing fluid into lumen.

**Q7:** What is Rigler triad?
**A7:** Pneumobilia (air in biliary tree) + SBO + ectopic gallstone on X-ray. Diagnostic of gallstone ileus.

**Q8:** What is the initial management of intestinal obstruction?
**A8:** NPO, NG tube decompression (Ryle tube), aggressive IV fluid resuscitation, urinary catheter, correct electrolytes. "Drip and suck."

**Q9:** When is emergency surgery indicated?
**A9:** Strangulation signs (continuous pain, fever, peritonism), closed-loop obstruction, failed conservative management (48 hours), peritonitis/perforation.

**Q10:** How is sigmoid volvulus managed?
**A10:** First: Endoscopic decompression with flatus tube (80% success). Definitive: Sigmoid colectomy for recurrence. Emergency Hartmann if gangrenous.

**Q11:** What causes metabolic alkalosis vs acidosis in obstruction?
**A11:** Proximal SBO: metabolic alkalosis (loss of gastric HCl from vomiting). Distal SBO/LBO: metabolic acidosis (loss of alkaline secretions, dehydration, lactate).

**Q12:** What is the most important clinical step in evaluating intestinal obstruction?
**A12:** Examine all hernial orifices. Obstructed hernia is a common and treatable cause that must not be missed.`,
        mnemonics: [
          { text: "Drip and Suck = IV fluids + NG tube = Initial management", explanation: "Universal first step in all intestinal obstruction cases before deciding on conservative vs surgical" },
          { text: "Coffee Bean = Sigmoid Volvulus; Kidney Bean = Caecal Volvulus", explanation: "Classic X-ray appearances of the two types of colonic volvulus" },
        ],
        keyPoints: [
          "Obstructed hernia: most common cause of SBO in India; always examine hernial orifices",
          "SBO: central air-fluid levels + valvulae; LBO: peripheral + haustra",
          "Gastrografin: diagnostic and therapeutic in adhesive SBO",
          "Emergency surgery for strangulation, closed-loop, peritonitis, failed conservative",
          "Sigmoid volvulus: endoscopic decompression first, then elective colectomy",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 22", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 71", edition: "28th" },
        ],
      },
    ],
  },
];
