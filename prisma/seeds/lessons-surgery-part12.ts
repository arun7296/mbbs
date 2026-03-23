import type { TopicLessons } from "./content-loader";

export const surgeryLessonsPartXX: TopicLessons[] = [
  {
    topicCode: "SU-MOD-08-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "urethral-stricture-layer-1-foundation",
        title: "Urethral Stricture & Phimosis - Foundation",
        estimatedMinutes: 20,
        summary: "Urethral anatomy, causes of stricture, phimosis and paraphimosis definitions and classification.",
        contentMd: `# Urethral Stricture & Phimosis - Foundation

## Urethral Anatomy (Male)
- **Prostatic urethra** (3-4 cm): Widest part; through prostate
- **Membranous urethra** (1-2 cm): Through urogenital diaphragm; narrowest fixed part
- **Bulbar urethra** (3-4 cm): In perineum; most common site of stricture
- **Penile (spongy) urethra** (15 cm): Through corpus spongiosum
- **Navicular fossa**: Within glans; external meatus is narrowest point overall
- Total length: ~20 cm

## Urethral Stricture
### Definition
Narrowing of urethral lumen due to fibrosis of surrounding spongiosum (spongiofibrosis). Affects mainly anterior urethra in males.

### Etiology
- **Post-inflammatory/Infective** (most common in India): Gonococcal urethritis, TB, BXO (lichen sclerosus)
- **Post-traumatic**: Pelvic fracture (posterior urethra), straddle injury (bulbar urethra), iatrogenic (catheterization, instrumentation, hypospadias repair)
- **Post-catheterization**: Prolonged catheter use; chemical urethritis
- **Idiopathic**: No identifiable cause (30%)
- **Congenital**: Rare; meatal stenosis

### Clinical Features
- Poor urinary stream (most common symptom)
- Straining to void, prolonged micturition, terminal dribbling
- Recurrent UTI, urethral discharge
- Acute urinary retention (late/severe)
- Periurethral abscess, urethral fistula (chronic cases)

## Phimosis
### Definition
- Inability to retract the prepuce (foreskin) over the glans penis
- Physiological: Normal in infants; 90% resolve by age 3; 99% by age 17
- Pathological: BXO (lichen sclerosus), recurrent balanitis, trauma, diabetes

### Clinical Features
- Ballooning of prepuce during micturition
- Difficulty with hygiene; recurrent balanitis/posthitis
- Pain during erection; dyspareunia in adults
- BXO: White, scarred, narrowed prepuce (whitish ring)

## Paraphimosis
### Definition
- Retracted foreskin trapped behind glans; cannot be pulled forward
- Constriction causes venous congestion → edema → arterial compromise
- Urological emergency: Risk of glans necrosis if untreated

### Clinical Features
- Swollen, edematous, congested glans
- Pain, inability to reduce foreskin
- If delayed: Ischemia and necrosis of glans`,
        mnemonics: [
          { text: "Bulbar = Most common stricture site; Membranous = Pelvic fracture injury", explanation: "Anterior (bulbar) strictures from infection/straddle; posterior (membranous) from pelvic fracture" },
          { text: "Phimosis = can't Pull back; Paraphimosis = can't Push forward", explanation: "Key distinction between the two foreskin conditions" },
        ],
        keyPoints: [
          "Bulbar urethra: most common site of stricture; gonococcal urethritis most common cause in India",
          "Pelvic fracture urethral injury: membranous urethra (posterior); straddle injury: bulbar (anterior)",
          "Phimosis: can't retract foreskin; pathological causes include BXO and recurrent balanitis",
          "Paraphimosis: retracted foreskin trapped; urological emergency; risk of glans necrosis",
          "Urethral stricture presents with poor stream, straining, recurrent UTI",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 33: Urethra and Penis", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 79: Urethra and Penis", edition: "28th" },
        ],
      },
      {
        layer: 2,
        slug: "urethral-stricture-layer-2-mechanism",
        title: "Urethral Stricture & Phimosis - Mechanism",
        estimatedMinutes: 22,
        summary: "Pathophysiology of spongiofibrosis, BXO mechanism, and urethral injury classification.",
        contentMd: `# Urethral Stricture & Phimosis - Mechanism

## Spongiofibrosis (Basis of Urethral Stricture)
### Pathological Process
1. Urethral mucosal injury (infection, trauma, instrumentation)
2. Inflammation of corpus spongiosum
3. Fibroblast proliferation and collagen deposition
4. Scar tissue contracts and narrows lumen
5. Spongiofibrosis extends beyond visible mucosal damage
6. Progressive stricture formation

### Grades of Spongiofibrosis
- Grade 1: Mucosal fold only (no spongiofibrosis)
- Grade 2: Submucosal fibrosis (partial spongiofibrosis)
- Grade 3: Full-thickness spongiofibrosis
- Grade 4: Spongiofibrosis extending beyond corpus spongiosum
- Grade 5: Complex stricture with fistula/abscess

## BXO (Balanitis Xerotica Obliterans) / Lichen Sclerosus
### Pathogenesis
- Chronic inflammatory condition of unknown etiology
- T-cell mediated autoimmune process
- Fibrosis and atrophy of epidermis and dermis
- Affects prepuce, glans, and urethral meatus
- Progressive: BXO → meatal stenosis → pan-urethral stricture

### Histology
- Hyalinization of subepithelial collagen (pathognomonic)
- Epidermal atrophy with hyperkeratosis
- Lymphocytic infiltrate at base

## Posterior Urethral Injury (Pelvic Fracture)
### Mechanism
- Shearing force disrupts prostatomembranous junction
- Prostate displaced superiorly by pelvic hematoma
- Types (Unified classification):
  - Partial disruption: Stretch/contusion; urethra intact but elongated
  - Complete disruption: Gap between prostatic and bulbar urethra
- Blood at meatus + inability to void + pelvic fracture = posterior urethral injury
- Do NOT catheterize blindly; perform retrograde urethrogram first

## Anterior Urethral Injury (Straddle Injury)
### Mechanism
- Bulbar urethra compressed against pubic symphysis
- Fall astride, bicycle crossbar, kick to perineum
- "Butterfly hematoma" in perineum (Buck fascia rupture → spreads in Colles fascia)
- If Buck fascia intact: Hematoma confined to penis (sleeve of bruising)

## Phimosis Mechanism
### Physiological
- Normal developmental adhesions between prepuce and glans in infants
- Desquamation and intermittent erections gradually separate layers
- Forced retraction causes micro-tears → scarring → secondary phimosis

### Pathological (BXO-related)
- Progressive fibrosis of prepuce from chronic inflammation
- White scarring ring at prepuce tip (classic appearance)
- Risk factor for penile squamous cell carcinoma`,
        mnemonics: [
          { text: "Pelvic fracture: Blood at meatus + Can't void + High-riding prostate = Posterior urethral injury", explanation: "Classic triad; retrograde urethrogram before catheterization" },
          { text: "Butterfly hematoma = Straddle injury = Bulbar urethra = Buck fascia ruptured", explanation: "Perineal hematoma pattern from anterior urethral injury" },
        ],
        keyPoints: [
          "Spongiofibrosis: progressive fibrosis of corpus spongiosum causes urethral stricture",
          "BXO: chronic inflammatory condition; hyalinized collagen; causes meatal stenosis and stricture",
          "Posterior urethral injury: pelvic fracture; do NOT blind catheterize; retrograde urethrogram first",
          "Straddle injury: bulbar urethra against symphysis; butterfly hematoma if Buck fascia ruptured",
          "Forced foreskin retraction in children causes secondary phimosis (micro-tears → scarring)",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 33", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 79", edition: "28th" },
        ],
      },
      {
        layer: 3,
        slug: "urethral-stricture-layer-3-clinical",
        title: "Urethral Stricture & Phimosis - Clinical",
        estimatedMinutes: 25,
        summary: "Diagnostic workup, urethroplasty types, circumcision, and paraphimosis management.",
        contentMd: `# Urethral Stricture & Phimosis - Clinical Management

## Urethral Stricture Investigations
### Retrograde Urethrogram (RGU) - Gold Standard
- Contrast injected into urethra; X-ray images
- Shows: Site, length, number of strictures, false passages
- First investigation in suspected urethral injury

### Micturating Cystourethrogram (MCU)
- Assesses posterior urethra (prostatic + membranous)
- Complementary to RGU for complete picture

### Uroflowmetry
- Non-invasive; measures peak flow rate (Qmax)
- Qmax <15 mL/s suggests obstruction; <10 mL/s = significant stricture
- Flat, prolonged curve pattern typical of stricture

### Urethroscopy
- Direct visualization of stricture; assesses mucosal appearance
- Can be combined with treatment (visual internal urethrotomy)

## Urethral Stricture Management
### Urethral Dilation
- Serial dilators (bougies/Hegar dilators) or balloon dilation
- Temporary relief; high recurrence rate (50-70%)
- Suitable for short (<1 cm), non-complex strictures

### Visual Internal Urethrotomy (VIU/Optical Urethrotomy)
- Endoscopic incision of stricture (cold knife at 12 o'clock position)
- Best for: Short (<1 cm), single, bulbar strictures
- First-time success: 60-70%; recurrence after repeat VIU >90%
- Should not repeat more than once (diminishing returns)

### Urethroplasty (Definitive)
- **Anastomotic urethroplasty**: Excision of stricture + end-to-end anastomosis
  - Best for short (<2 cm) bulbar strictures; success >90%
- **Substitution urethroplasty**: Tissue grafting for longer strictures
  - **Buccal mucosal graft (BMG)**: Gold standard graft; wet epithelium, easy harvest, good take
  - Dorsal onlay (Barbagli) or ventral onlay technique
  - For strictures >2 cm
- **Staged urethroplasty (Johanson)**: For complex/pan-urethral strictures
  - Stage 1: Open stricture, lay mucosa open (marsupialization)
  - Stage 2: Tubularize after 6 months

### Posterior Urethral Distraction Defect
- Delayed repair (3-6 months after pelvic fracture)
- Transpubic or perineal anastomotic urethroplasty
- Success rate: 85-90% in experienced hands
- Immediate: Suprapubic catheter (SPC) for urinary diversion

## Phimosis Management
### Conservative
- **Topical steroids** (betamethasone 0.05%): First-line for children with physiological phimosis
- Applied to tight prepuce twice daily for 4-6 weeks; 80% success rate
- Gentle retraction exercises after steroid application

### Circumcision (Definitive)
- Indications: Failed conservative management, pathological phimosis (BXO), recurrent balanitis, paraphimosis
- Religious/cultural reasons
- Complications: Bleeding, infection, meatal stenosis (especially with BXO)

### Preputioplasty
- Alternative to circumcision; dorsal slit + widening of tight prepuce
- Preserves foreskin; lower complication rate

## Paraphimosis Management
### Emergency Reduction
1. Ice pack and manual compression to reduce edema (10-15 minutes)
2. Gentle sustained pressure on glans while pulling foreskin forward
3. "Dundee technique": Multiple punctures of edematous foreskin with needle to drain fluid
4. Osmotic reduction: Apply granulated sugar to draw fluid out osmotically
5. If all fail: Dorsal slit (emergency release) under local anesthesia
6. Definitive: Circumcision after inflammation settles`,
        mnemonics: [
          { text: "RGU = Retrograde Urethrogram = Gold standard for stricture", explanation: "Shows site, length, and number of strictures; first investigation in urethral injury" },
          { text: "BMG = Buccal Mucosal Graft = Best graft for urethroplasty", explanation: "Wet epithelium, easy to harvest, excellent take rate; gold standard for substitution urethroplasty" },
        ],
        keyPoints: [
          "RGU is gold standard for urethral stricture diagnosis; uroflowmetry for screening",
          "VIU: best for short (<1cm) bulbar strictures; do not repeat more than once",
          "Buccal mucosal graft: gold standard for substitution urethroplasty (>2cm strictures)",
          "Topical steroids: first-line for childhood phimosis (80% success)",
          "Paraphimosis: emergency; manual reduction, Dundee technique, dorsal slit if failed",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 33", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 79", edition: "28th" },
        ],
      },
      {
        layer: 4,
        slug: "urethral-stricture-layer-4-exam",
        title: "Urethral Stricture & Phimosis - Exam Prep",
        estimatedMinutes: 18,
        summary: "High-yield exam facts on urethral stricture and phimosis for NEXT pattern questions.",
        contentMd: `# Urethral Stricture & Phimosis - Exam Prep

## Must-Know Facts
- Most common cause of stricture in India: Post-gonococcal/infective
- Most common site: Bulbar urethra (anterior)
- Pelvic fracture injury: Membranous urethra (posterior)
- Straddle injury: Bulbar urethra (anterior)
- Gold standard investigation: Retrograde urethrogram
- Gold standard graft: Buccal mucosal graft

## Common Exam Traps
- "Blood at meatus + pelvic fracture + can't void" = Posterior urethral injury; do NOT catheterize; RGU first
- "Butterfly perineal hematoma" = Bulbar urethral injury (straddle)
- "Repeated VIU for stricture" = Wrong! Only attempt VIU once; urethroplasty for recurrence
- "Child with ballooning prepuce" = Physiological phimosis; topical steroids first
- "White scarred prepuce" = BXO; circumcision needed; check for meatal stenosis
- "Trapped foreskin behind glans" = Paraphimosis; emergency reduction

## Urethral Injury Quick Reference
| Injury Type | Mechanism | Site | Initial Management |
|-------------|-----------|------|-------------------|
| Posterior | Pelvic fracture | Membranous | SPC → delayed urethroplasty |
| Anterior (straddle) | Fall astride | Bulbar | RGU → surgical repair if needed |
| Iatrogenic | Catheter/instrumentation | Any | Remove cause → assess stricture |

## High-Yield Questions
- Blood at meatus investigation = Retrograde urethrogram (NOT catheterization)
- Narrowest fixed part of urethra = Membranous
- Narrowest point overall = External meatus
- BXO histology = Hyalinized subepithelial collagen
- Physiological phimosis treatment = Topical steroids (betamethasone 0.05%)
- Paraphimosis emergency = Manual reduction → Dundee technique → dorsal slit`,
        mnemonics: [
          { text: "Blood at Meatus = DON'T catheterize = DO urethrogram", explanation: "Critical emergency protocol for suspected urethral injury" },
          { text: "VIU: Once is enough; Twice = diminishing returns; Urethroplasty for recurrence", explanation: "Repeat VIU has >90% recurrence; definitive repair needed" },
        ],
        keyPoints: [
          "Blood at meatus + pelvic fracture: RGU first, NOT catheterization",
          "Bulbar: most common stricture site; membranous: pelvic fracture site",
          "VIU for short strictures (<1cm); BMG urethroplasty for longer (>2cm)",
          "Physiological phimosis: topical steroids first; BXO: circumcision",
          "Paraphimosis: urological emergency; manual reduction → dorsal slit if failed",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 33", edition: "6th" },
        ],
      },
      {
        layer: 5,
        slug: "urethral-stricture-layer-5-active-recall",
        title: "Urethral Stricture & Phimosis - Active Recall",
        estimatedMinutes: 15,
        summary: "Flashcard Q&A for spaced repetition on urethral stricture and phimosis.",
        contentMd: `# Active Recall - Urethral Stricture & Phimosis

**Q1:** What is the most common site of urethral stricture?
**A1:** Bulbar urethra (anterior). Most common cause in India: post-gonococcal urethritis. Worldwide: iatrogenic (catheterization/instrumentation).

**Q2:** What investigation must be done before catheterization in suspected urethral injury?
**A2:** Retrograde urethrogram (RGU). Never blind-catheterize when blood at meatus, high-riding prostate, or pelvic fracture is present.

**Q3:** What is spongiofibrosis?
**A3:** Fibrosis of the corpus spongiosum surrounding the urethra. The pathological basis of urethral stricture. Extends beyond visible mucosal damage. Graded 1-5 based on severity.

**Q4:** What is BXO?
**A4:** Balanitis Xerotica Obliterans (lichen sclerosus of the genitalia). Chronic inflammatory condition causing fibrosis of prepuce, glans, and meatus. Histology: hyalinized subepithelial collagen. Treated with circumcision.

**Q5:** What is the best graft material for urethroplasty?
**A5:** Buccal mucosal graft (BMG). Advantages: wet epithelium (similar to urethral mucosa), easy harvest, excellent vascular take, robust tissue.

**Q6:** When should VIU NOT be repeated?
**A6:** After one failed VIU, recurrence rate exceeds 90%. A second VIU adds more scar tissue. Definitive urethroplasty should be performed instead.

**Q7:** What is the butterfly hematoma?
**A7:** Perineal hematoma from bulbar urethral injury (straddle injury). Occurs when Buck fascia ruptures, allowing blood to spread in the superficial perineal space (Colles fascia) creating a butterfly-shaped bruise.

**Q8:** What is the first-line treatment for physiological phimosis in children?
**A8:** Topical steroids (betamethasone 0.05%) applied to tight prepuce twice daily for 4-6 weeks. 80% success rate. Gentle retraction exercises after application.

**Q9:** How is paraphimosis managed?
**A9:** Emergency: Ice + compression → gentle manual reduction (push glans while pulling foreskin forward). If failed: Dundee technique (needle punctures of edematous skin) or granulated sugar. Last resort: dorsal slit.

**Q10:** How is posterior urethral distraction defect (pelvic fracture) managed?
**A10:** Immediate: Suprapubic catheter for urinary diversion. Delayed repair (3-6 months): Transpubic or perineal anastomotic urethroplasty. Success rate 85-90%.

**Q11:** What is the narrowest fixed part of the male urethra?
**A11:** Membranous urethra (through urogenital diaphragm). The external meatus is the narrowest point overall but is distensible.

**Q12:** What are the complications of circumcision?
**A12:** Bleeding (most common), infection, meatal stenosis (especially with BXO), excess/insufficient skin removal, damage to glans, and rarely urethral fistula.`,
        mnemonics: [
          { text: "Stricture Management Ladder: Dilation → VIU (once) → Urethroplasty (definitive)", explanation: "Escalating treatment for urethral stricture based on complexity and recurrence" },
          { text: "Paraphimosis: Ice → Squeeze → Reduce → Dundee → Slit", explanation: "Step-by-step emergency management of paraphimosis" },
        ],
        keyPoints: [
          "Bulbar urethra: most common stricture site; RGU gold standard investigation",
          "Blood at meatus + pelvic fracture: NEVER catheterize blindly; SPC + delayed repair",
          "VIU: once only; BMG urethroplasty for recurrent/long strictures",
          "Phimosis: steroids first in children; circumcision for BXO",
          "Paraphimosis: emergency reduction; dorsal slit as last resort",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 33", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 79", edition: "28th" },
        ],
      },
    ],
  },
];
