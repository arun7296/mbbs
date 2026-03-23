import type { TopicLessons } from "./content-loader";

export const dermatologyPart5Lessons: TopicLessons[] = [
  {
    topicCode: "DR-MOD-01-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "eczema-atopic-dermatitis-layer-1-foundation",
        title: "Eczema & Atopic Dermatitis - Foundation",
        estimatedMinutes: 25,
        summary: "Overview of eczema and atopic dermatitis, clinical features, and epidemiology.",
        contentMd: `# Eczema & Atopic Dermatitis - Foundation

## Eczema Classification
### Types of Eczema
- **Atopic dermatitis**: Most common (80% of eczema); genetic predisposition, "atopic march"
- **Contact dermatitis**: Allergic (delayed hypersensitivity) or irritant
- **Seborrheic dermatitis**: Scalp, face, flexural areas; Malassezia furfur association
- **Dyshidrotic eczema**: Vesicles on palms/soles; intensely pruritic
- **Nummular eczema**: Coin-shaped lesions; common in men, winter months
- **Lichenoid eczema**: Chronic, lichenified plaques from prolonged friction

## Atopic Dermatitis
### Epidemiology
- **Prevalence**: 10-20% of children; 1-3% of adults
- **Age of onset**: Infants (50-80%), childhood (20-30%), adults (10%)
- **Female predominance**: Slightly higher in females
- **Heritability**: 60-80% (genetic predisposition)
- **"Atopic march"**: Progression from AD → asthma → allergic rhinitis

### Clinical Features
- **Intense pruritus**: "Itch that rashes" (pruritus precedes lesion appearance)
- **Acute phase**: Erythema, vesicles, oozing exudate
- **Chronic phase**: Lichenification, thickened plaques, excoriations, hyperpigmentation
- **Distribution**: Face (young children), neck, flexural areas (older children/adults)
  - Antecubital/popliteal fossae
  - Wrists, ankles
  - Eyelids, lips

### Diagnostic Criteria (UK Working Party)
- Requires 4 of 6:
  1. History of itching
  2. Onset <4 years (for childhood AD)
  3. Flexural involvement
  4. Tendency toward dry skin
  5. Personal history of other atopic disease
  6. Visible flexural dermatitis

## Pathologic Features
- **Acute phase**: Spongiosis (intercellular edema), Langerhans cell infiltration
- **Chronic phase**: Acanthosis, hyperkeratosis, parakeratosis, lichenification
- **Normal epidermis**: CD4+ T cells; AD increased Th2 cells (IL-4, IL-5, IL-13)`,
        mnemonics: [
          { text: "Atopic = Eczema + Asthma + Allergic Rhinitis (Atopic March)", explanation: "Classic triad progression" },
          { text: "AD = Itch that Rashes (pruritus precedes lesion)", explanation: "Distinguishing feature" },
          { text: "Flexural + Xerosis + Pruritus = Atopic Dermatitis", explanation: "Key features" }
        ],
        keyPoints: [
          "Atopic dermatitis: most common eczema (80%); genetic predisposition",
          "Intense pruritus ('itch that rashes') is hallmark symptom",
          "Flexural involvement in children and adults",
          "Acute phase: erythema, vesicles, exudate",
          "Chronic phase: lichenification, thickened plaques, excoriations",
          "Atopic march: AD → asthma → allergic rhinitis progression",
          "High heritability (60-80%); familial clustering common",
          "Spongiosis on histology (acute phase); acanthosis/hyperkeratosis (chronic)"
        ],
        textbookRefs: [
          { book: "IADVL Textbook of Dermatology", chapter: "6 - Eczematous Dermatitis", edition: "4th" },
          { book: "Roxburgh's Common Skin Diseases", chapter: "Eczema", edition: "20th" }
        ],
      },
      {
        layer: 2,
        slug: "eczema-atopic-dermatitis-layer-2-mechanism",
        title: "Eczema & Atopic Dermatitis - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathogenesis of atopic dermatitis, immune mechanisms, and barrier dysfunction.",
        contentMd: `# Eczema & Atopic Dermatitis - Mechanism

## Barrier Dysfunction in AD
### Structural Defects
- **Filaggrin mutations**: Most common genetic association (10-30% of AD)
  - Filaggrin = filament-aggregating protein in stratum corneum
  - Loss of function → defective barrier, increased transepidermal water loss (TEWL)
- **Tight junction proteins**: Claudins, occludin, junction adhesion molecules disrupted
- **Lipid abnormalities**: Reduced ceramides, cholesterol, fatty acids in stratum corneum
  - Reduced ceramide synthesis (reduced β-glucocerebrosidase activity)
  - Altered lipid composition → increased permeability

### Clinical Consequence
- **Xerosis (dry skin)**: Increased TEWL, reduced skin hydration
- **Increased allergen penetration**: Breach of barrier facilitates antigen entry
- **Enhanced irritant penetration**: Lower threshold for irritant reactions

## Immune Dysregulation
### Th2 Shift
- **Normal skin**: Th1/Th2 balance
- **Acute AD**: Th2 cytokines predominate
  - IL-4, IL-5: Th2 differentiation, IgE production
  - IL-13: Alternative macrophage activation, barrier dysfunction
- **Chronic AD**: IL-17 (Th17), IFN-γ (residual Th1) involvement

### Immune Cell Infiltration
- **Langerhans cells**: Increased activation, antigen presentation
- **T cells**: CD4+ predominance; expansion of skin-homing T cells (CLA+)
- **Eosinophils**: Infiltration in acute lesions; produce IL-4, IL-5
- **Mast cells**: Degranulation (histamine, tryptase) → pruritus

### IgE Elevation
- **Polyclonal IgE**: Elevated serum IgE in 80% of patients
- **Specific IgE**: Against allergens (dust mites, pollen, food allergens)
- **IgE-mediated**: Mast cell and basophil activation

## Pruritus Mechanism
- **Neurogenic inflammation**: TRPV1 and TRPA1 sensory neurons (itch-specific)
- **Histamine**: Released by mast cells; activates H1 and H4 receptors on nerves
- **Protease-activated receptors (PAR-2)**: Activated by kallikrein-related peptidases
- **Neuropeptides**: Substance P, CGRP involved in neurogenic inflammation
- **Itch-scratch cycle**: Mechanical trauma → further barrier disruption

## Microbial Colonization
- **Staphylococcus aureus**: 90% of AD patients colonized (vs 5% of normal)
- **Mechanisms**: 
  - Increased serum IgE against S. aureus
  - Lack of antimicrobial peptides (reduced β-defensins, LL-37)
  - Impaired innate immunity
- **Exotoxins**: S. aureus enterotoxins (TSST-1) act as superantigens; amplify T cell response`,
        mnemonics: [
          { text: "Filaggrin mutations → Barrier dysfunction → TEWL ↑ → AD", explanation: "Genetic pathway" },
          { text: "Th2 shift: IL-4, IL-5, IL-13 → IgE ↑, Eosinophils ↑", explanation: "Immune pathway" },
          { text: "Staphylococcus aureus: 90% AD patients colonized", explanation: "Microbial factor" }
        ],
        keyPoints: [
          "Filaggrin mutations most common genetic association (10-30% of AD)",
          "Reduced ceramides and lipids in stratum corneum → increased TEWL",
          "Th2 cytokines predominate (IL-4, IL-5, IL-13)",
          "IgE elevated in 80% of AD patients",
          "Langerhans cell activation increases antigen presentation",
          "TRPV1/TRPA1 neurons mediate itch sensation",
          "Histamine, PAR-2 activation contribute to pruritus",
          "Itch-scratch cycle perpetuates barrier disruption",
          "S. aureus colonization in 90% of AD (vs 5% normal skin)"
        ],
        textbookRefs: [
          { book: "IADVL Textbook of Dermatology", chapter: "6 - Eczematous Dermatitis", edition: "4th" },
          { book: "Robbins & Kumar Pathologic Basis of Disease", chapter: "25 - Skin Disorders", edition: "10th" }
        ],
      },
      {
        layer: 3,
        slug: "eczema-atopic-dermatitis-layer-3-clinical",
        title: "Eczema & Atopic Dermatitis - Clinical",
        estimatedMinutes: 35,
        summary: "Clinical assessment, triggers, and comprehensive management of atopic dermatitis.",
        contentMd: `# Eczema & Atopic Dermatitis - Clinical

## Clinical Assessment
### Severity Scoring
- **EASI (Eczema Area and Severity Index)**: Measures area and intensity; 0-72 scale
- **SCORAD (Scoring Atopic Dermatitis)**: Area, intensity, subjective symptoms; 0-103 scale
- **IGA (Investigator Global Assessment)**: 5-point scale (clear to severe)
- **Mild**: Localized, minimal impact on QoL
- **Moderate**: Multiple sites, moderate pruritus, impacts daily activities
- **Severe**: Extensive involvement, severe pruritus, sleep disruption, school/work impact

### Diagnostic Confirmation
- **Clinical diagnosis**: Based on criteria (UK Working Party 4/6)
- **Serum IgE**: Elevated in 80% (nonspecific)
- **Specific IgE/Allergy testing**: Identify triggers if atopic
- **Patch testing**: Rule out allergic contact dermatitis
- **Skin biopsy**: When diagnosis unclear; shows spongiosis, acanthosis

## Trigger Identification
### Common Triggers
- **Allergens**: House dust mite, pollen, animal dander, food allergens
- **Irritants**: Soaps, detergents, fragrances, rough textiles (wool)
- **Environmental**: Dry air, cold, humidity changes, temperature extremes
- **Stress**: Emotional stress exacerbates lesions
- **Infections**: Viral (HSV, EBV) or bacterial (S. aureus superinfection)
- **Food**: Milk, peanuts, tree nuts, fish, eggs (in children)

## Management Approach
### Skin Care (Most Important)
- **Cleansing**: Lukewarm water, non-soap cleansers (seborrheic areas use soap-free)
- **Emollient therapy**: 
  - Immediately after bathing (within 3 minutes)
  - Creams (oil-in-water) or ointments (water-in-oil), petrolatum base
  - Frequent application (3-4× daily)
  - Urea/lactic acid creams for ichthyosis
- **Avoid irritants**: Fragrance, preservatives, sulfates

### Topical Anti-inflammatory
- **Topical corticosteroids**: First-line
  - Mild: Hydrocortisone 1%
  - Moderate: Mometasone, fluticasone
  - Potent: Clobetasol propionate for short-term use
  - Taper once control achieved
- **Topical calcineurin inhibitors** (TCI): Tacrolimus, pimecrolimus
  - Non-steroidal; especially useful on face, intertriginous areas
  - Steroid-sparing in maintenance

### Systemic Therapy (for moderate-severe)
- **Systemic corticosteroids**: Short-term only (rebound on withdrawal)
- **Antihistamines**: For pruritus; first-generation (sedating) useful for sleep
- **Biologic agents**: 
  - Dupilumab (anti-IL-4Rα): FDA-approved, highly effective
  - JAK inhibitors: Baricitinib, upadacitinib (newer agents)
- **Cyclosporine**: For severe, refractory AD
- **Azathioprine, mycophenolate**: Steroid-sparing agents

### Infection Management
- **Prophylaxis**: Antimicrobial ointments (mupirocin) if high S. aureus colonization
- **Treatment**: Systemic antibiotics for active infection (cellulitis, impetigo)
- **Dilute bleach baths**: May reduce S. aureus colonization`,
        mnemonics: [
          { text: "Emollient FIRST, then topical corticosteroid, then systemic if severe", explanation: "Step-wise approach" },
          { text: "Avoid: Soap, irritants, fragrance, rough textiles", explanation: "Trigger avoidance" },
          { text: "Dupilumab = Anti-IL-4Rα for moderate-severe AD", explanation: "Biologic therapy" }
        ],
        keyPoints: [
          "Emollient therapy cornerstone of management (before other treatments)",
          "Cleanse with non-soap cleanser; moisturize within 3 minutes of bathing",
          "Topical corticosteroids: mild to moderate, taper when controlled",
          "Calcineurin inhibitors: useful on face and intertriginous areas",
          "Antihistamines: first-generation for pruritus and sleep",
          "Dupilumab: highly effective for moderate-severe AD",
          "Manage S. aureus: prophylactic mupirocin or dilute bleach baths",
          "Identify and avoid triggers: allergens, irritants, environmental",
          "Stress management important (psychological trigger)",
          "Regular monitoring for complications (infection, sleep disruption)"
        ],
        textbookRefs: [
          { book: "IADVL Textbook of Dermatology", chapter: "6 - Eczematous Dermatitis", edition: "4th" },
          { book: "Roxburgh's Common Skin Diseases", chapter: "Eczema", edition: "20th" }
        ],
      },
      {
        layer: 4,
        slug: "eczema-atopic-dermatitis-layer-4-exam",
        title: "Eczema & Atopic Dermatitis - Exam Prep",
        estimatedMinutes: 25,
        summary: "High-yield facts, differentials, and NEXT-pattern questions for atopic dermatitis.",
        contentMd: `# Eczema & Atopic Dermatitis - Exam Prep

## High-Yield Exam Facts
- **AD prevalence**: 10-20% of children; 1-3% of adults
- **Onset**: 50-80% before age 5 years
- **Hallmark**: Intense pruritus ("itch that rashes")
- **Heritability**: 60-80% (genetic predisposition)
- **Filaggrin mutations**: Most common genetic association (10-30%)
- **S. aureus colonization**: 90% of AD patients (vs 5% normal)
- **IgE elevation**: 80% of AD patients

## Differential Diagnosis
### Flexural Dermatitis in Children:
- **Atopic dermatitis**: Intense pruritus, family history, age <4 years, dry skin
- **Seborrheic dermatitis**: Yellow scale, scalp/face, less pruritus
- **Contact dermatitis**: Clear exposure history, linear/geometric distribution
- **Tinea corporis**: Scaling, KOH positive, annular lesions

### Chronic Lichenified Lesions:
- **Chronic eczema (AD)**: History of acute phase, flexural locations
- **Lichen planus**: Purple papules with Wickham's striae, wickets on shins
- **Psoriasis**: Silvery scale, non-flexural, well-demarcated, mica sign

## NEXT-Pattern Questions
### Recall (10%):
- Q: "Intense itching preceding rash is characteristic of?" → A: Atopic dermatitis
- Q: "Most common genetic association in AD?" → A: Filaggrin mutations

### Analysis (30%):
- Q: "Child with flexural eczema, family history of asthma, IgE 500. Likely diagnosis?" → A: Atopic dermatitis with atopic family history
- Q: "Acute exacerbation of eczema with pustules/oozing. Most likely cause?" → A: S. aureus superinfection

### Problem-Solving (60%):
- Q: "6-year-old with moderate AD failing topical corticosteroids and emollients for 2 months. Next step?" → A: Consider systemic therapy; screen for triggers (allergy testing); add calcineurin inhibitors; evaluate for S. aureus infection
- Q: "Patient with severe AD resistant to topical therapy, dupilumab not tolerated. Alternative?" → A: JAK inhibitors (baricitinib, upadacitinib) or cyclosporine

## Clinical Pearls
- **Atopic march**: AD → asthma → allergic rhinitis (preventive therapy in AD)
- **Flare triggers**: Stress, irritants, allergens, infections, climate change
- **Dupilumab efficacy**: 50-75% clear/almost clear at 16 weeks
- **Systemic corticosteroids**: Avoid long-term (rebound flares); reserve for acute severe flares
- **Itch-scratch cycle**: Breaking this is key to management
- **Infection risk**: S. aureus and herpes simplex (can disseminate as eczema herpeticum)

## Common Mistakes
- Starting systemic corticosteroids without trying emollients and topical steroids first
- Using irritant soaps instead of non-soap cleanser
- Moisturizing hours after bathing (should be <3 minutes)
- Missing S. aureus superinfection (oozing, pustules, crust)
- Not identifying triggers (allergy testing in atopic patients)
- Discontinuing emollient therapy (maintenance therapy)`,
        mnemonics: [
          { text: "EMOLLIENT > TOPICAL CS > SYSTEMIC (escalating therapy)", explanation: "Treatment algorithm" },
          { text: "Filaggrin → Barrier → TEWL ↑ → Pruritus ↑ → Itch-scratch cycle", explanation: "Pathogenic cascade" },
          { text: "Atopic march: AD → Asthma → Rhinitis", explanation: "Disease progression" }
        ],
        keyPoints: [
          "Atopic dermatitis: intense pruritus is hallmark ('itch that rashes')",
          "Filaggrin mutations: 10-30% of AD (most common genetic association)",
          "Barrier dysfunction: increased TEWL, lipid abnormalities",
          "Th2 shift: IL-4, IL-5, IL-13 predominance; IgE elevated (80%)",
          "S. aureus: colonizes 90% of AD patients; produces superantigens",
          "Emollient therapy: cornerstone of management (non-negotiable)",
          "Flexural involvement: neck, antecubital/popliteal fossae",
          "Dupilumab: highly effective (anti-IL-4Rα); FDA-approved",
          "Itch-scratch cycle: breaking this is key to preventing flares",
          "Atopic march prevention: treat AD early to prevent asthma/rhinitis"
        ],
        textbookRefs: [
          { book: "IADVL Textbook of Dermatology", chapter: "6 - Eczematous Dermatitis", edition: "4th" },
          { book: "Roxburgh's Common Skin Diseases", chapter: "Eczema", edition: "20th" }
        ],
      },
      {
        layer: 5,
        slug: "eczema-atopic-dermatitis-layer-5-active-recall",
        title: "Eczema & Atopic Dermatitis - Active Recall",
        estimatedMinutes: 30,
        summary: "Flashcard Q&A pairs for atopic dermatitis diagnosis and management.",
        contentMd: `# Eczema & Atopic Dermatitis - Active Recall Flashcards

## Q1: Atopic Dermatitis Definition
**Q: Define atopic dermatitis and list its key clinical features.**
A: Chronic inflammatory eczema with intense pruritus, flexural involvement, barrier dysfunction, and genetic predisposition; characterized by "itch that rashes"

## Q2: Prevalence and Age
**Q: What is the prevalence of atopic dermatitis, and when does it typically onset?**
A: 10-20% of children and 1-3% of adults; 50-80% of cases onset before age 5 years

## Q3: Filaggrin Mutations
**Q: What is the role of filaggrin, and how do mutations contribute to AD?**
A: Filaggrin = filament-aggregating protein providing barrier function; mutations cause loss of function → increased TEWL, xerosis, barrier disruption

## Q4: Heritability
**Q: What is the heritability of atopic dermatitis?**
A: 60-80% heritable; familial clustering common; genetic predisposition is major risk factor

## Q5: Atopic March
**Q: What is the atopic march, and what is its clinical significance?**
A: Progression from atopic dermatitis → asthma → allergic rhinitis; early AD treatment may prevent development of other atopic diseases

## Q6: Immune Dysregulation
**Q: What is the primary immune dysregulation in atopic dermatitis?**
A: Th2 shift with elevation of IL-4, IL-5, and IL-13; increased IgE production (80% of patients); enhanced eosinophilic response

## Q7: Staphylococcus aureus
**Q: What is the prevalence of S. aureus colonization in AD patients, and why is it significant?**
A: 90% of AD patients are colonized (vs 5% of normal skin); S. aureus produces superantigens and exotoxins that amplify immune response

## Q8: IgE Elevation
**Q: Is serum IgE elevation diagnostic for atopic dermatitis?**
A: No; serum IgE is elevated in 80% of AD patients, but elevation is nonspecific; polyclonal IgE, not diagnostic alone

## Q9: Diagnostic Criteria
**Q: What are the UK Working Party diagnostic criteria for atopic dermatitis?**
A: Requires 4 of 6: (1) history of itching, (2) onset <4 years, (3) flexural involvement, (4) tendency toward dry skin, (5) personal history of atopic disease, (6) visible flexural dermatitis

## Q10: Histopathology
**Q: What are the histopathologic findings in atopic dermatitis?**
A: Acute phase = spongiosis (intercellular edema), Langerhans cell infiltration; Chronic phase = acanthosis, hyperkeratosis, parakeratosis, lichenification

## Q11: Pruritus Mechanism
**Q: What are the mechanisms of pruritus in atopic dermatitis?**
A: Neurogenic inflammation via TRPV1/TRPA1 neurons; histamine from mast cells; PAR-2 activation; elevated substance P and CGRP

## Q12: Trigger Identification
**Q: Name five common triggers for AD exacerbation.**
A: Allergens (dust mites, pollen), irritants (soaps, detergents), environmental (dry air, cold), stress, infections (S. aureus, HSV)

## Q13: Emollient Therapy
**Q: What is the most important time to apply emollient therapy?**
A: Immediately after bathing (within 3 minutes); prevents water loss and maintains skin hydration; apply 3-4 times daily

## Q14: Dupilumab Mechanism
**Q: What is the mechanism of action of dupilumab in atopic dermatitis?**
A: Monoclonal antibody against IL-4 receptor alpha (IL-4Rα); blocks both IL-4 and IL-13 signaling; addresses Th2 immune dysregulation

## Q15: Treatment Algorithm
**Q: What is the general step-wise treatment algorithm for atopic dermatitis?**
A: Step 1: Emollient therapy (ALL patients); Step 2: Topical corticosteroids (mild-moderate); Step 3: Topical calcineurin inhibitors (face, folds); Step 4: Systemic agents (severe); Step 5: Biologic therapy (dupilumab, JAK inhibitors)`,
        mnemonics: [
          { text: "AD = Itch + Flexural + Dry + Family history + Pruritus", explanation: "Key diagnostic features" },
          { text: "Emollient ALWAYS first; then topical CS; then systemic if needed", explanation: "Treatment escalation" },
          { text: "Filaggrin → TEWL ↑ → Allergen entry ↑ → Immune activation ↑", explanation: "Pathogenic cascade" }
        ],
        keyPoints: [
          "Atopic dermatitis: intense pruritus precedes rash ('itch that rashes')",
          "Filaggrin mutations: 10-30% of AD; cause barrier dysfunction",
          "Heritability 60-80%; strong family history common",
          "Th2 immune shift: IL-4, IL-5, IL-13; IgE elevated (80%)",
          "S. aureus colonization: 90% of AD patients; produces superantigens",
          "Flexural involvement: neck, antecubital/popliteal fossae",
          "Spongiosis on histology (acute phase); acanthosis (chronic phase)",
          "Emollient therapy: cornerstone; apply within 3 minutes of bathing",
          "Topical corticosteroids: mild-moderate disease first-line",
          "Dupilumab: anti-IL-4Rα; highly effective for moderate-severe AD"
        ],
        textbookRefs: [
          { book: "IADVL Textbook of Dermatology", chapter: "6 - Eczematous Dermatitis", edition: "4th" },
          { book: "Roxburgh's Common Skin Diseases", chapter: "Eczema", edition: "20th" }
        ],
      },
    ],
  },
];
