import type { TopicLessons } from "./content-loader";

export const dermatologyPart4Lessons: TopicLessons[] = [
  {
    topicCode: "DR-MOD-03-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "pemphigus-bullous-pemphigoid-layer-1-foundation",
        title: "Pemphigus & Bullous Pemphigoid - Foundation",
        estimatedMinutes: 25,
        summary: "Overview of autoimmune blistering disorders including clinical presentation, epidemiology, and classification.",
        contentMd: `# Pemphigus & Bullous Pemphigoid - Foundation

## Pemphigus
### Classification
- **Pemphigus Vulgaris**: Most common form (50-60% of pemphigus cases)
  - Oral involvement: 90% of patients (mucosal onset)
  - Skin involvement: May follow or precede oral lesions
  - Age: 40-60 years; lower age in Indian population (35-45 years)
- **Pemphigus Foliaceus**: Superficial pemphigus
  - Absence of mucosal involvement (distinguishing feature)
  - Flaccid bullae and crusting more prominent than erosions
  - Age: Slightly older than pemphigus vulgaris

### Clinical Features - Pemphigus Vulgaris
- **Oral lesions**: Painful erosions on buccal mucosa, palate, tongue; mucosal onset
- **Flaccid bullae**: Easily ruptured; appear on erythematous base
- **Negative Nikolsky sign**: In intact skin (positive in bullae/erosions)
- **Positive intraoral Nikolsky**: Mucosal involvement (90% of cases)
- **Distribution**: Face, scalp, chest, flexural areas
- **Secondary bacterial infection**: Common complication

### Clinical Features - Pemphigus Foliaceus
- **Superficial bullae**: Rapid rupture → crusting (resembles impetigo)
- **Absence of mucosal involvement**: Key distinguishing feature
- **No oral erosions**: Differentiates from pemphigus vulgaris
- **Crusts on face, scalp, chest**: Golden crusts (can mimic impetigo)
- **Seborrheic distribution**: Face, scalp, upper chest

## Bullous Pemphigoid
### Characteristics
- **Tense bullae**: Do not rupture easily (unlike pemphigus)
- **Negative Nikolsky sign**: Bullae intact; Nikolsky negative
- **Age**: Usually >60 years; older population
- **Distribution**: Lower abdomen, inner thighs, flexural areas
- **Oral involvement**: Rare (<10% of cases)

### Clinical Features
- **Urticarial phase**: Erythematous urticarial lesions preceding bullae (weeks to months)
- **Large tense bullae**: Thick roof, fluid clear to hemorrhagic
- **Erosions**: Due to rupture of bullae; heal without scarring
- **Pruritus**: Can be severe, may precede lesions
- **Systemic involvement**: Associated with internal malignancy in 10-15% of cases

## Comparisons
| Feature | Pemphigus Vulgaris | Bullous Pemphigoid |
|---------|-------------------|-------------------|
| Bullae | Flaccid | Tense |
| Nikolsky | Positive in lesions | Negative |
| Mucosal | Yes (90%) | Rare |
| Age | 40-60 years | >60 years |
| Antigens | Desmoglein 3 (mucosal), Desmoglein 1 (skin) | BP180, BP230 |
| IgG target | Desmosomes | Hemidesmosomes |`,
        mnemonics: [
          { text: "Pemphigus = Flaccid bullae + Positive Nikolsky + Mucosal", explanation: "Key features" },
          { text: "Bullous Pemphigoid = Tense bullae + Negative Nikolsky + No mucosal", explanation: "Key differences" },
          { text: "Pemphigus Foliaceus = No mucosal involvement (vs Vulgaris)", explanation: "Distinguishing feature" }
        ],
        keyPoints: [
          "Pemphigus: autoimmune against desmogleins (cell-to-cell adhesion)",
          "Bullous pemphigoid: autoimmune against hemidesmosomes (epidermal anchoring)",
          "Pemphigus vulgaris: oral mucosal involvement in 90% (early sign)",
          "Pemphigus foliaceus: NO mucosal involvement (key differentiator)",
          "Pemphigus: flaccid bullae rupture easily; erosions on erythematous base",
          "Bullous pemphigoid: tense bullae; may be preceded by urticarial phase",
          "Nikolsky sign: positive in pemphigus, negative in pemphigoid",
          "Age: pemphigus (40-60 yrs), bullous pemphigoid (>60 yrs)"
        ],
        textbookRefs: [
          { book: "IADVL Textbook of Dermatology", chapter: "15 - Autoimmune Bullous Disorders", edition: "4th" },
          { book: "Roxburgh's Common Skin Diseases", chapter: "Bullous Disorders", edition: "20th" }
        ],
      },
      {
        layer: 2,
        slug: "pemphigus-bullous-pemphigoid-layer-2-mechanism",
        title: "Pemphigus & Bullous Pemphigoid - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathogenesis of autoimmune blistering disorders, antibody mechanisms, and immune dysregulation.",
        contentMd: `# Pemphigus & Bullous Pemphigoid - Mechanism

## Pemphigus Pathogenesis
### Target Antigens
- **Pemphigus Vulgaris**:
  - Desmoglein 3 (Dsg3): Mucosal involvement, ~95% of cases
  - Desmoglein 1 (Dsg1): Skin involvement, ~50% of cases
  - Anti-Dsg3 alone → mucosal-dominant disease
  - Anti-Dsg1 + Dsg3 → mucocutaneous disease
- **Pemphigus Foliaceus**: Desmoglein 1 (Dsg1) alone; NO Dsg3

### Antibody-Mediated Pathogenesis
- **IgG autoantibodies**: Bind to desmoglein on keratinocyte surface
- **Complement activation**: Classical pathway; C3 deposition on keratinocytes
- **Acantholysis mechanism**: 
  - Direct IgG binding → steric hindrance of Dsg-Dsg interactions
  - Signaling through keratinocyte receptors → loss of adhesion
  - Complement-mediated: C3a/C5a activation → neutrophil infiltration
- **Result**: Loss of cell-to-cell adhesion (acantholysis) → intraepidermal bulla formation

### Bulla Formation
- **Intraepidermal location**: Acantholysis occurs in spinosum/granulosum layer
- **"Suprabasal acantholysis"**: Pemphigus vulgaris; basal layer cells remain attached to BMZ
- **"Subcorneal acantholysis"**: Pemphigus foliaceus; very superficial (stratum corneum)
- **Tombstone appearance**: Basal cells appear rounded, attached to BMZ

## Bullous Pemphigoid Pathogenesis
### Target Antigens
- **BP180** (XVIIIC): Transmembrane component of hemidesmosomes
- **BP230** (BPAG1): Intracellular plakin protein
- **Hemidesmosomes**: Anchor basal keratinocytes to basement membrane zone

### Antibody-Mediated Pathogenesis
- **IgG autoantibodies**: Bind to BP180 and BP230 at hemidesmosomes
- **IgE involvement**: IgE autoantibodies also present; activate mast cells → inflammatory response
- **Complement activation**: Classical pathway; C3 deposition; IgE-mediated degranulation
- **Inflammation**: Neutrophils, mast cells infiltrate BMZ; release protease, elastase, heparin
- **Subepidermal blister**: Formation due to destruction of hemidesmosomes and anchoring filaments

### Bulla Formation
- **Subepidermal location**: Separation occurs between epidermis and dermis
- **Thick-roofed bulla**: Roof is intact epidermis (tense bullae)
- **Dermal side**: May contain fibrin, inflammatory cells
- **Healing**: Without scarring (unlike dermatitis herpetiformis)

## Genetic Factors
- **HLA associations**: 
  - Pemphigus vulgaris: HLA-DRB1*04:02 (strongest), HLA-DQ5 (DQA1*05, DQB1*05:01)
  - Bullous pemphigoid: Weaker HLA associations; older population, more environmental factors
- **T cell response**: Th1-mediated autoimmune response; helper T cells specific for Dsg3/Dsg1

## Immune Dysregulation
- **Regulatory T cells (Tregs)**: Reduced numbers/function in pemphigus
- **Th17 cells**: Elevated; produce IL-17 (inflammatory)
- **B cell activation**: Polyclonal B cell activation; production of pathogenic IgG
- **Loss of tolerance**: Breakdown of immune tolerance to Dsg antigens`,
        mnemonics: [
          { text: "Dsg3 = Mucosal (pemphigus vulgaris); Dsg1 = Skin (pemphigus foliaceus)", explanation: "Antigen distribution" },
          { text: "BP180 + BP230 = Hemidesmosomes; Bullous Pemphigoid", explanation: "Target antigens" },
          { text: "Acantholysis = Pemphigus (intraepidermal); Hemidesmosomes lost = Pemphigoid (subepidermal)", explanation: "Mechanism and location" }
        ],
        keyPoints: [
          "Pemphigus: IgG against desmogleins; intraepidermal acantholysis",
          "Dsg3-only disease → mucosal pemphigus vulgaris",
          "Dsg1+Dsg3 disease → mucocutaneous pemphigus vulgaris",
          "Dsg1-only disease → pemphigus foliaceus",
          "Bullous pemphigoid: IgG against hemidesmosomes; subepidermal bulla",
          "BP180 is target for both IgG and IgE; IgE-mediated inflammation",
          "Complement activation in both disorders; C3 deposition at target antigen",
          "HLA-DRB1*04:02 strong association with pemphigus vulgaris",
          "Reduced Tregs and elevated Th17 in autoimmune blistering disorders"
        ],
        textbookRefs: [
          { book: "IADVL Textbook of Dermatology", chapter: "15 - Autoimmune Bullous Disorders", edition: "4th" },
          { book: "Robbins & Kumar Pathologic Basis of Disease", chapter: "25 - Skin Disorders", edition: "10th" }
        ],
      },
      {
        layer: 3,
        slug: "pemphigus-bullous-pemphigoid-layer-3-clinical",
        title: "Pemphigus & Bullous Pemphigoid - Clinical",
        estimatedMinutes: 35,
        summary: "Diagnosis, investigations, and management of pemphigus and bullous pemphigoid.",
        contentMd: `# Pemphigus & Bullous Pemphigoid - Clinical

## Diagnosis and Investigations
### Clinical Diagnosis
- **Nikolsky sign**: Positive in pemphigus (fragile epidermis); negative in bullous pemphigoid
- **Presentation**: Pemphigus = oral onset common; bullous pemphigoid = skin lesions primarily

### Histopathology
- **Pemphigus Vulgaris**: 
  - Suprabasal acantholysis
  - Intact basal layer cells ("tombstone cells") anchored to BMZ
  - Minimal inflammatory infiltrate
- **Pemphigus Foliaceus**: 
  - Subcorneal acantholysis
  - Intraepidermal bulla formation very superficial
- **Bullous Pemphigoid**: 
  - Subepidermal blister
  - Dense eosinophilic infiltrate at BMZ
  - Intact epidermis (tense roof)

### Immunofluorescence
- **Direct Immunofluorescence (DIF)**:
  - Pemphigus: IgG + C3 deposition on keratinocyte surface (intercellular pattern)
  - Bullous pemphigoid: IgG + C3 deposition at basement membrane zone
- **Indirect Immunofluorescence (IIF)**:
  - Detects circulating antibodies in serum
  - Titer correlates with disease activity

### Serologic Tests
- **ELISA/Western blot**: Anti-Dsg3 and anti-Dsg1 antibodies
  - Dsg3 alone → mucosal-dominant pemphigus vulgaris
  - Dsg1+Dsg3 → mucocutaneous pemphigus vulgaris
- **Anti-BP180, anti-BP230**: In bullous pemphigoid

## Management
### Pemphigus Management
- **Systemic corticosteroids**: First-line
  - Prednisone 0.5-1.5 mg/kg/day initially
  - Gradual taper based on clinical response
- **Corticosteroid-sparing agents**:
  - Azathioprine 1-2 mg/kg/day
  - Mycophenolate mofetil 1-3 g/day
  - Cyclosporine 3-5 mg/kg/day
- **Biologics**:
  - Rituximab (anti-B cell monoclonal antibody): Effective for severe, refractory disease
  - IVIG (intravenous immunoglobulin): For resistant cases
- **Supportive care**: Topical anesthetics, antimicrobial therapy for secondary infection

### Bullous Pemphigoid Management
- **Systemic corticosteroids**: Prednisone 0.5-1 mg/kg/day
  - Lower doses often effective than in pemphigus
  - Gradual taper
- **Topical corticosteroids**: High-potency (clobetasol propionate) for localized lesions
- **Corticosteroid-sparing agents**:
  - Azathioprine: Second-line steroid-sparing agent
  - Cyclosporine: Alternative
- **Dapsone**: 50-100 mg/day (steroid-sparing in some patients)

## Complications
### Pemphigus
- **Secondary bacterial infection**: Common due to erosions
- **Septicemia**: From spread of infection
- **Electrolyte imbalance**: Fluid loss from extensive erosions
- **Malnutrition**: Due to oral ulcers and pain
- **Medication side effects**: Corticosteroid complications (osteoporosis, infection risk)

### Bullous Pemphigoid
- **Internal malignancy**: Associated in 10-15% of older patients (paraneoplastic)
- **Secondary infection**: Less common than pemphigus
- **Drug-induced**: Medications can trigger (ACE inhibitors, penicillamine, NSAIDs)

## Monitoring & Follow-up
- **Disease activity**: Clinical examination, photographic documentation
- **Antibody titers**: Serial IgG titers (Dsg3, Dsg1, BP180, BP230)
- **Corticosteroid monitoring**: Bone density, metabolic screening
- **Medication monitoring**: LFTs, CBC for azathioprine/cyclosporine
- **Malignancy screening**: Bullous pemphigoid >60 years old`,
        mnemonics: [
          { text: "Pemphigus = Nikolsky +ve, Intraepidermal, Desmoglein IgG", explanation: "Diagnostic triad" },
          { text: "Bullous Pemphigoid = Nikolsky -ve, Subepidermal, BMZ IgG", explanation: "Diagnostic triad" },
          { text: "Rituximab = Severe/Refractory pemphigus", explanation: "Biologic therapy" }
        ],
        keyPoints: [
          "Nikolsky sign: positive in pemphigus (loss of cell adhesion), negative in bullous pemphigoid",
          "DIF: intercellular IgG pattern in pemphigus; linear BMZ pattern in bullous pemphigoid",
          "Anti-Dsg3 serology = mucosal pemphigus vulgaris",
          "Anti-Dsg1+Dsg3 = mucocutaneous pemphigus vulgaris",
          "Suprabasal acantholysis in pemphigus vulgaris (basal cells remain)",
          "Subepidermal blister in bullous pemphigoid (intact epidermis as roof)",
          "Systemic corticosteroids: first-line for both disorders",
          "Rituximab effective for refractory pemphigus",
          "Bullous pemphigoid: screen for internal malignancy in older patients"
        ],
        textbookRefs: [
          { book: "IADVL Textbook of Dermatology", chapter: "15 - Autoimmune Bullous Disorders", edition: "4th" },
          { book: "Roxburgh's Common Skin Diseases", chapter: "Bullous Disorders", edition: "20th" }
        ],
      },
      {
        layer: 4,
        slug: "pemphigus-bullous-pemphigoid-layer-4-exam",
        title: "Pemphigus & Bullous Pemphigoid - Exam Prep",
        estimatedMinutes: 25,
        summary: "High-yield facts, differentials, and NEXT-pattern questions for blistering disorders.",
        contentMd: `# Pemphigus & Bullous Pemphigoid - Exam Prep

## High-Yield Exam Facts
- **Pemphigus vulgaris**: Oral erosions in 90% (mucosal onset); most common pemphigus type (50-60%)
- **Pemphigus foliaceus**: NO oral involvement (key differentiator); more superficial bullae
- **Bullous pemphigoid**: Older patients (>60 yrs); tense bullae; associated with malignancy (10-15%)
- **Nikolsky sign**: Positive in pemphigus; negative in bullous pemphigoid (determines diagnosis)
- **DIF pattern**: Intercellular (pemphigus) vs linear BMZ (bullous pemphigoid)

## Differential Diagnosis
### Erosions with Flaccid Bullae:
- **Pemphigus**: Positive Nikolsky, intraepidermal, intercellular IgG on DIF
- **Herpes simplex**: Viral prodrome, vesicles grouped, Tzanck multinucleate cells
- **Bullous diabetic blisters**: Bullae on lower extremities, diabetes history, trauma-induced

### Tense Bullae:
- **Bullous pemphigoid**: Negative Nikolsky, subepidermal, linear IgG on DIF
- **Dermatitis herpetiformis**: Associated celiac disease, intensely pruritic, IgA at BMZ
- **Porphyria cutanea tarda**: Blisters on sun-exposed areas, photosensitivity, porphyrin elevation

## NEXT-Pattern Questions
### Recall (10%):
- Q: "90% of pemphigus vulgaris presents with?" → A: Oral mucosal erosions
- Q: "Tense vs flaccid bullae?" → A: Tense = bullous pemphigoid; Flaccid = pemphigus

### Analysis (30%):
- Q: "Patient with positive Nikolsky sign, intercellular IgG on DIF. Diagnosis?" → A: Pemphigus
- Q: "Oral erosions + skin bullae + anti-Dsg3 + anti-Dsg1 serology?" → A: Mucocutaneous pemphigus vulgaris

### Problem-Solving (60%):
- Q: "72-year-old with tense bullae, linear IgG at BMZ on DIF, not responding to 1 mg/kg prednisone after 4 weeks. Next step?" → A: Add corticosteroid-sparing agent (azathioprine) or consider cyclosporine; screen for malignancy
- Q: "30-year-old with anti-Dsg3 serology only, oral erosions, no skin lesions. Counseling?" → A: Mucosal-dominant pemphigus vulgaris; may progress to mucocutaneous with time

## Clinical Pearls
- **Dsg3-only disease**: Mucosal-dominant; less aggressive, may remain localized
- **Dsg1+Dsg3 disease**: Mucocutaneous; more extensive, systemic corticosteroids needed
- **Tombstone cells**: Diagnostic feature of pemphigus vulgaris; basal cells anchored, suprabasal acantholysis
- **Drug-induced bullous pemphigoid**: ACE inhibitors, penicillamine, NSAIDs (withdraw medication)
- **Paraneoplastic pemphigus**: Rare, associated with malignancy; different antibody profile

## Common Mistakes
- Confusing flaccid (pemphigus) with tense (bullous pemphigoid) bullae
- Forgetting Nikolsky negative in bullous pemphigoid
- Not screening for malignancy in bullous pemphigoid >60 years
- Starting high-dose corticosteroids when lower doses often sufficient in bullous pemphigoid
- Missing mucosal involvement in pemphigus vulgaris (90% have oral erosions)`,
        mnemonics: [
          { text: "PEMPHIGUS = Positive Nikolsky + intercellular IgG + intraepidermal", explanation: "Diagnostic features" },
          { text: "BULLOUS PEMPHIGOID = Negative Nikolsky + linear BMZ IgG + subepidermal", explanation: "Diagnostic features" },
          { text: "Dsg3 alone = Mucosal; Dsg1+Dsg3 = Mucocutaneous", explanation: "Serology correlation" }
        ],
        keyPoints: [
          "Pemphigus vulgaris: oral erosions (90%), positive Nikolsky, intraepidermal acantholysis",
          "Pemphigus foliaceus: no oral involvement, superficial bullae, subcorneal acantholysis",
          "Bullous pemphigoid: older patients, tense bullae, negative Nikolsky, subepidermal",
          "DIF shows intercellular pattern in pemphigus; linear BMZ pattern in bullous pemphigoid",
          "Anti-Dsg3 serology = mucosal pemphigus vulgaris",
          "Anti-Dsg1+Dsg3 = mucocutaneous pemphigus vulgaris",
          "Corticosteroids first-line; lower doses effective in bullous pemphigoid",
          "Rituximab for refractory pemphigus",
          "Paraneoplastic pemphigus has different antibody pattern"
        ],
        textbookRefs: [
          { book: "IADVL Textbook of Dermatology", chapter: "15 - Autoimmune Bullous Disorders", edition: "4th" },
          { book: "Roxburgh's Common Skin Diseases", chapter: "Bullous Disorders", edition: "20th" }
        ],
      },
      {
        layer: 5,
        slug: "pemphigus-bullous-pemphigoid-layer-5-active-recall",
        title: "Pemphigus & Bullous Pemphigoid - Active Recall",
        estimatedMinutes: 30,
        summary: "Flashcard Q&A pairs for autoimmune blistering disorder diagnosis and management.",
        contentMd: `# Pemphigus & Bullous Pemphigoid - Active Recall Flashcards

## Q1: Pemphigus Definition
**Q: Define pemphigus and name its most common form.**
A: Autoimmune blistering disorder with intraepidermal bulla formation; pemphigus vulgaris is most common (50-60% of pemphigus cases)

## Q2: Oral Involvement
**Q: What percentage of pemphigus vulgaris cases present with oral mucosal involvement?**
A: 90% of pemphigus vulgaris patients have oral mucosal erosions as presenting symptom

## Q3: Pemphigus Foliaceus Distinction
**Q: What distinguishes pemphigus foliaceus from pemphigus vulgaris?**
A: Pemphigus foliaceus: NO oral mucosal involvement (key differentiator); subcorneal acantholysis; only anti-Dsg1 serology

## Q4: Target Antigens Vulgaris
**Q: What are the target antigens in pemphigus vulgaris?**
A: Desmoglein 3 (Dsg3) in mucosal-dominant disease; Desmoglein 1 (Dsg1) + Dsg3 in mucocutaneous disease

## Q5: Bullae Location
**Q: What is the anatomical location of blister formation in pemphigus?**
A: Intraepidermal (within epidermis); specifically suprabasal in pemphigus vulgaris (basal cells remain attached to BMZ)

## Q6: Nikolsky Sign
**Q: What is the Nikolsky sign, and what does a positive result indicate?**
A: Gentle rubbing of skin causes epidermis to separate; positive indicates loss of keratinocyte-to-keratinocyte adhesion (acantholysis)

## Q7: Bullous Pemphigoid Characteristics
**Q: What are the key clinical characteristics of bullous pemphigoid?**
A: Tense (firm) bullae, negative Nikolsky sign, subepidermal blister location, rare oral involvement, older patients (>60 yrs)

## Q8: Target Antigens Bullous Pemphigoid
**Q: What are the target antigens in bullous pemphigoid?**
A: BP180 (transmembrane hemidesmosmal component) and BP230 (intracellular plakin protein)

## Q9: Hemidesmosomes Function
**Q: What are hemidesmosomes, and what is their function?**
A: Anchoring junctions connecting basal keratinocytes to basement membrane zone via integrin-collagen interactions; provide mechanical attachment

## Q10: DIF Patterns
**Q: What are the direct immunofluorescence patterns in pemphigus and bullous pemphigoid?**
A: Pemphigus = intercellular IgG pattern (surface of keratinocytes); Bullous pemphigoid = linear IgG at basement membrane zone

## Q11: Corticosteroid Dosing
**Q: What is the typical starting dose of systemic corticosteroids for pemphigus vulgaris?**
A: Prednisone 0.5-1.5 mg/kg/day; higher doses often needed than in bullous pemphigoid

## Q12: Steroid-Sparing Agents
**Q: Name three corticosteroid-sparing agents used in pemphigus management.**
A: Azathioprine (1-2 mg/kg/day), Mycophenolate mofetil (1-3 g/day), Cyclosporine (3-5 mg/kg/day)

## Q13: Rituximab Indication
**Q: When is rituximab indicated in pemphigus management?**
A: For severe, refractory pemphigus that fails conventional therapy; anti-B cell monoclonal antibody targeting CD20

## Q14: Malignancy Association
**Q: What is the association between bullous pemphigoid and internal malignancy?**
A: 10-15% of bullous pemphigoid patients have underlying malignancy; screen all patients >60 years

## Q15: Serology Interpretation
**Q: Interpret serology: Anti-Dsg3 positive, Anti-Dsg1 negative.**
A: Mucosal-dominant pemphigus vulgaris; localized to oral mucosa; may progress to include skin involvement`,
        mnemonics: [
          { text: "PEMPHIGUS = Flaccid + Nikolsky +ve + Intraepidermal + Desmoglein IgG", explanation: "Complete diagnostic picture" },
          { text: "BULLOUS PEMPHIGOID = Tense + Nikolsky -ve + Subepidermal + Hemidesmosomes IgG", explanation: "Complete diagnostic picture" },
          { text: "Dsg3 = Mucosal; Dsg1 = Skin; Dsg3+Dsg1 = Both", explanation: "Serology-clinical correlation" }
        ],
        keyPoints: [
          "Pemphigus: intraepidermal acantholysis; antibodies against desmoglein (cell-cell adhesion)",
          "Pemphigus vulgaris: 90% oral involvement (mucosal erosions)",
          "Pemphigus foliaceus: NO oral involvement; only anti-Dsg1",
          "Bullous pemphigoid: subepidermal blister; antibodies against hemidesmosomes",
          "Nikolsky sign: positive in pemphigus (cell adhesion loss); negative in bullous pemphigoid",
          "DIF: intercellular in pemphigus; linear at BMZ in bullous pemphigoid",
          "Systemic corticosteroids: first-line treatment for both",
          "Rituximab: effective for refractory pemphigus",
          "Bullous pemphigoid: malignancy screening in older patients (10-15% association)",
          "Dsg3 alone = mucosal-dominant (may progress); Dsg1+Dsg3 = mucocutaneous"
        ],
        textbookRefs: [
          { book: "IADVL Textbook of Dermatology", chapter: "15 - Autoimmune Bullous Disorders", edition: "4th" },
          { book: "Roxburgh's Common Skin Diseases", chapter: "Bullous Disorders", edition: "20th" }
        ],
      },
    ],
  },
];
