import type { TopicLessons } from "./content-loader";

export const dermatologyLessonsPartSeven: TopicLessons[] = [
  {
    topicCode: "DR-MOD-03-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "sjs-ten-layer-1-foundation",
        title: "Stevens-Johnson Syndrome & Toxic Epidermal Necrolysis - Foundation",
        estimatedMinutes: 25,
        summary: "Overview of SJS and TEN, epidemiology, clinical presentation, and pathophysiology.",
        contentMd: `# Stevens-Johnson Syndrome & Toxic Epidermal Necrolysis - Foundation

## Classification & Epidemiology
### Terminology
- **Erythema Multiforme (EM)**: Mild form; target lesions, <10% BSA involvement
- **Stevens-Johnson Syndrome (SJS)**: Intermediate; 10-30% body surface area (BSA) involvement
- **Toxic Epidermal Necrolysis (TEN)**: Severe; >30% BSA involvement
- **Overlap SJS/TEN**: 30-31% BSA involvement (intermediate between SJS and TEN)

### Epidemiology
- **Incidence**: 
  - SJS: 1-6 cases per million per year
  - TEN: 0.4-1.2 cases per million per year
- **Mortality**: 
  - SJS: 1-5%
  - TEN: 25-35% (higher with complications)
- **Peak age**: 20-40 years
- **Sex**: Slight female predominance
- **Risk factors**: 
  - Medications (most common; NSAIDs, antibiotics, anticonvulsants)
  - Infections (Mycoplasma pneumoniae, HSV, TB)
  - Malignancy
  - Vaccines

### Triggers
- **Medications**: 
  - NSAIDs (ibuprofen, naproxen)
  - Antibiotics (TMP-SMX, penicillins, aminoglycosides)
  - Anticonvulsants (phenytoin, carbamazepine, phenobarbital)
  - Allopurinol, corticosteroids
- **Infections**: 
  - Mycoplasma pneumoniae
  - Herpes simplex virus (HSV)
  - Tuberculosis
  - Other viral infections
- **Malignancy**: Lung, lymphoma, gastric cancers

## Clinical Features
### Prodrome
- **Onset**: Sudden, 1-3 weeks after trigger exposure
- **Symptoms**: Fever, malaise, myalgias, cough, pharyngitis
- **Duration**: 24-48 hours before rash appears

### Cutaneous Features
- **Initial lesion**: Red macules/flat erythema, non-pruritic, non-blanching
- **Evolution**: Macules → papules → hemorrhagic bullae (hours to days)
- **Target lesions**: Classic EM lesions with three zones (in EM; less in SJS/TEN)
  - Central bulla or necrosis
  - Edematous middle zone
  - Erythematous outer zone
- **Distribution**: 
  - Symmetric on extremities
  - Face, trunk, flexural areas
  - May spare palms/soles initially
- **Bullae**: Flaccid (vs pemphigus tense); due to subepidermal separation

### Mucosal Involvement
- **Oral mucosa**: 90% of SJS/TEN patients
  - Erythema, erosions, ulcers, difficulty eating/drinking
  - Hemorrhagic crusts on lips
- **Ocular**: 25-90% of TEN patients
  - Conjunctivitis, corneal erosions, photophobia
  - Potential for scarring and blindness
- **Genital/anal**: Ulcers, erosions (severe discomfort)
- **Respiratory**: Tracheal involvement (rare but fatal)

### Systemic Involvement
- **Constitutional**: Fever (often >39°C), chills, malaise
- **Hepatic**: Elevated LFTs (hepatitis)
- **Renal**: Acute renal failure, proteinuria
- **Cardiovascular**: Hypotension, arrhythmias
- **Pulmonary**: Pneumonitis, respiratory distress`,
        mnemonics: [
          { text: "SJS = <30% BSA; TEN = >30% BSA (BSA determines severity)", explanation: "Key classification" },
          { text: "Target lesions + Mucosal erosions + Systemic symptoms = SJS/TEN", explanation: "Diagnostic triad" },
          { text: "NSAIDs, Antibiotics, Anticonvulsants (Most common triggers)", explanation: "Drug triggers" },
          { text: "Flaccid bullae (vs pemphigus tense) = subepidermal separation", explanation: "Histologic feature" }
        ],
        keyPoints: [
          "SJS vs TEN based on BSA: SJS <30%, TEN >30%",
          "Mortality: SJS 1-5%, TEN 25-35%",
          "Medications most common trigger (NSAIDs, antibiotics, anticonvulsants)",
          "Prodrome: fever, malaise 1-3 weeks before rash",
          "Target lesions may be present in EM/SJS but less common in TEN",
          "Flaccid bullae from epidermal necrosis and subepidermal separation",
          "Mucosal involvement in 90% of SJS/TEN (oral most common)",
          "Ocular involvement in 25-90% (risk of scarring, blindness)",
          "Systemic involvement: hepatic, renal, pulmonary, cardiovascular",
          "High-dose corticosteroids controversial; early cessation of trigger essential"
        ],
        textbookRefs: [
          { book: "IADVL Textbook of Dermatology", chapter: "22 - Erythema Multiforme and SJS-TEN", edition: "4th" },
          { book: "Roxburgh's Common Skin Diseases", chapter: "Severe Adverse Reactions", edition: "20th" }
        ],
      },
      {
        layer: 2,
        slug: "sjs-ten-layer-2-mechanism",
        title: "Stevens-Johnson Syndrome & Toxic Epidermal Necrolysis - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathogenesis of SJS/TEN, immune mechanisms, and drug metabolism.",
        contentMd: `# Stevens-Johnson Syndrome & Toxic Epidermal Necrolysis - Mechanism

## Immune Pathogenesis
### Drug-Immune Complex Formation
- **Drug metabolism**: 
  - NSAIDs, antibiotics, anticonvulsants → metabolized to reactive intermediates (haptens)
  - Hapten-carrier proteins form immunogens
  - Genetic polymorphisms in drug-metabolizing enzymes (CYP2C9, CYP3A4, NAT2) influence risk
- **HLA associations**: 
  - Carbamazepine + HLA-B*1502 (Southeast Asian populations)
  - Allopurinol + HLA-B*5801
  - Suggests T-cell mediated response

### T Cell-Mediated Immune Response
- **CD8+ T cells**: Primary cytotoxic effectors
  - Drug-specific CD8+ T cells infiltrate skin
  - CTL kills keratinocytes (apoptosis)
  - Mediated by FasL/Fas interaction, granzyme B/perforin
- **CD4+ T cells**: Helper function
  - IL-2, TNF-α, IFN-γ production (Th1 response)
  - Amplify CD8+ T cell response
- **NK cells**: Non-major histocompatibility complex (non-MHC) restricted cytotoxicity

### Apoptosis Mechanisms
- **Fas ligand (FasL) → Fas death receptors**: Triggering apoptosis
  - Upregulated on infiltrating lymphocytes
  - Keratinocytes express Fas
- **Granzyme B/perforin**: From CD8+ T cells
  - Perforin creates pores in keratinocyte membrane
  - Granzyme B enters and activates caspases → apoptosis
- **TNF-α**: Amplifies inflammatory cascade
  - Activates endothelial cells → increased vascular permeability
  - Contributes to systemic complications

### Genetic Susceptibility
- **CYP polymorphisms**: Slow metabolizers accumulate toxic intermediates
- **HLA polymorphisms**: Predispose to recognition of drug-hapten complexes
- **Inflammatory mediators**: IL-15, IL-18, IL-12 genetic variations

## Histopathologic Mechanisms

### Epidermal Necrosis
- **Keratinocyte apoptosis**: Widespread in suprabasal epidermis
- **Mechanism of bullae**: 
  - Necrosis and apoptosis of epidermis → separation from dermis
  - Subepidermal bulla with flaccid roof (vs bullous pemphigoid tense)
  - Complete loss of epidermis in full-thickness areas

### Dermal Changes
- **Lymphocytic infiltration**: CD8+ and CD4+ T cells, macrophages, NK cells
- **Dermal edema**: From increased vascular permeability
- **Vascular involvement**: Endothelial swelling, minimal vasculitis

### Full-Thickness Necrosis
- **TEN**: Complete epidermal necrosis with dermal involvement
- **Regeneration phase**: Epithelial regrowth from appendages (hair follicles, sweat glands)
  - Dependent on depth of destruction
  - Deep destruction may leave permanent scarring (ocular, genital)

## Triggers and Risk Factors

### Drug-Related Risk
- **Temporal association**: Onset typically 2-6 weeks after drug initiation
  - Shorter if previous exposure
  - Longer if chronic drug use
- **Dose-independent**: Not dose-related reaction
- **Recurrence risk**: 25-80% risk of recurrence with same drug

### Infection-Related
- **Mycoplasma pneumoniae**: 
  - Produces IL-8, TNF-α
  - May act as superantigen
- **HSV**: Triggers EM-like lesions; less common for SJS/TEN
- **TB**: Isoniazid and other TB drugs also implicated`,
        mnemonics: [
          { text: "CD8+ CTL = Primary cytotoxic effector; FasL/Fas and Granzyme B mediate apoptosis", explanation: "Key immune mechanism" },
          { text: "HLA-B*1502 (Carbamazepine) and HLA-B*5801 (Allopurinol) = Genetic predisposition", explanation: "HLA associations" },
          { text: "Hapten formation → T cell response → Keratinocyte apoptosis", explanation: "Drug-mediated pathway" }
        ],
        keyPoints: [
          "T-cell mediated hypersensitivity reaction (Type IV)",
          "CD8+ cytotoxic T lymphocytes are primary effectors",
          "Apoptosis mediated by FasL/Fas and granzyme B/perforin",
          "Drug metabolism to reactive intermediates (haptens) by CYP enzymes",
          "HLA polymorphisms determine susceptibility (carbamazepine, allopurinol)",
          "Epidermal necrosis from keratinocyte apoptosis",
          "Subepidermal separation due to epidermal death",
          "Flaccid bullae due to necrotic roof",
          "T cell infiltration but minimal vasculitis (distinguishes from vasculitis)",
          "Regeneration from appendages; deep burns may scar"
        ],
        textbookRefs: [
          { book: "IADVL Textbook of Dermatology", chapter: "22 - Erythema Multiforme and SJS-TEN", edition: "4th" },
          { book: "Robbins & Kumar Pathologic Basis of Disease", chapter: "25 - Skin Disorders", edition: "10th" }
        ],
      },
      {
        layer: 3,
        slug: "sjs-ten-layer-3-clinical",
        title: "Stevens-Johnson Syndrome & Toxic Epidermal Necrolysis - Clinical",
        estimatedMinutes: 35,
        summary: "Diagnosis, management, and complications of SJS/TEN.",
        contentMd: `# Stevens-Johnson Syndrome & Toxic Epidermal Necrolysis - Clinical

## Diagnosis
### Clinical Diagnosis
- **History**: Recent medication use, fever, mucositis preceding rash
- **Examination**: 
  - Skin lesions at various stages
  - Mucosal involvement (oral, ocular, genital)
  - Assess BSA involvement (SJS <30%, TEN >30%)
  - Positive Nikolsky sign (gentle pressure causes epidermis to separate)
- **Tzanck smear**: May show apoptotic keratinocytes (vs multinucleate in HSV)

### Histopathology
- **Full-thickness epidermal necrosis**: Especially in TEN
- **Lymphocytic infiltrate**: Predominantly CD8+ in dermis
- **Minimal vasculitis**: Distinguishes from other vasculitic conditions
- **Subepidermal blister**: With necrotic roof
- **Variable**: EM may have milder changes (vasculitis around vessels)

### Investigations
- **CBC, CMP**: Baseline; monitor for complications (infection, organ dysfunction)
- **LFTs**: May be elevated (hepatitis)
- **Cultures**: Blood/wound to rule out bacterial infection
- **Imaging**: CXR if respiratory involvement suspected
- **Patch/drug testing**: After resolution to confirm trigger (not acute phase)

## Management
### Immediate Actions
- **STOP suspected medication**: IMMEDIATELY upon diagnosis
  - Do NOT continue with hope that reaction will resolve
  - Withdrawal of trigger is most important intervention
- **Supportive care**: IV fluids, electrolyte monitoring, nutritional support
- **Infection prevention**: Sterile technique, isolate if possible

### Corticosteroids (Controversial)
- **Early high-dose**: Some recommend prednisone 1-2 mg/kg/day
  - Evidence mixed; may reduce disease progression
  - Do NOT start if suspect infection
- **Tapering**: Gradual taper (rebound flare common)
- **Topical**: For mucosal erosions (benzocaine, topical steroids)

### Immunomodulatory Therapy
- **IVIG (Intravenous immunoglobulin)**:
  - 2 g/kg over 3-5 days
  - May block FasL-Fas interaction
  - Mixed evidence of efficacy
- **Cyclosporine**: For severe, rapidly progressive SJS/TEN
  - 3-5 mg/kg/day
  - Faster disease arrest than steroids
- **Plasmapheresis**: Not routinely recommended
- **TNF-α inhibitors**: Limited evidence; not standard

### Supportive Care (Most Important)
- **Wound care**: Daily gentle cleaning with saline/antiseptic
  - Avoid adhesive dressings
  - Use non-adherent gauze
- **Temperature control**: Isothermal conditions (SJS/TEN patients lose thermoregulation)
- **Fluid/electrolyte management**: IV fluids (large losses); monitor electrolytes
- **Nutritional support**: High protein diet (high catabolism); may need TPN
- **Pain management**: Opioids as needed
- **Ocular care**: CRITICAL
  - Lubricating drops, preservative-free
  - Ophthalmology referral early
  - Prevent symblepharon (adhesion) with separators
- **Infection prevention**: Barrier precautions, topical antiseptics
- **Psychological support**: Trauma of severe illness; long-term sequelae

## Complications
### Early Complications
- **Infection**: Sepsis most common cause of death (treat empirically with broad-spectrum antibiotics)
- **Hypovolemia**: From fluid loss; requires aggressive IV replacement
- **Electrolyte imbalance**: Sodium, potassium abnormalities
- **Hepatic failure**: Fulminant hepatitis
- **Renal failure**: Acute tubular necrosis

### Late Complications
- **Ocular scarring**: Symblepharon, corneal opacification, blindness (10-30% of TEN survivors)
- **Genital/anal scarring**: Chronic urinary retention, pain
- **Esophageal scarring**: Dysphagia, strictures
- **Skin scarring**: Post-inflammatory hypopigmentation, contractures
- **Psychological**: PTSD, depression

## Trigger Avoidance and Prevention
- **Drug documentation**: List culprit drugs prominently in medical record
- **Cross-reactivity**: Some drugs in same class may cause recurrence
- **Patient education**: Inform about risk of recurrence (25-80%)
- **Alternative agents**: Plan for future antibiotic/analgesic use`,
        mnemonics: [
          { text: "STOP medication FIRST (most important intervention)", explanation: "Immediate action" },
          { text: "Supportive care > Corticosteroids > Immunomodulation", explanation: "Management priority" },
          { text: "Sepsis most common cause of death; broad-spectrum antibiotics", explanation: "High mortality risk" }
        ],
        keyPoints: [
          "Discontinue suspected medication immediately (most critical)",
          "Clinical diagnosis based on history, examination, BSA involvement",
          "Nikolsky sign positive; epidermal necrosis on histology",
          "Supportive care: fluids, wound care, infection prevention, nutrition",
          "Ocular involvement requires early ophthalmology referral",
          "Corticosteroids: early high-dose may reduce progression (evidence mixed)",
          "IVIG and cyclosporine: alternative immunomodulation",
          "Sepsis: most common complication and cause of death",
          "Ocular scarring in 10-30% of TEN survivors",
          "Document culprit drug; 25-80% recurrence risk with same drug"
        ],
        textbookRefs: [
          { book: "IADVL Textbook of Dermatology", chapter: "22 - Erythema Multiforme and SJS-TEN", edition: "4th" },
          { book: "Roxburgh's Common Skin Diseases", chapter: "Severe Adverse Reactions", edition: "20th" }
        ],
      },
      {
        layer: 4,
        slug: "sjs-ten-layer-4-exam",
        title: "Stevens-Johnson Syndrome & Toxic Epidermal Necrolysis - Exam Prep",
        estimatedMinutes: 25,
        summary: "High-yield facts, differentials, and NEXT-pattern questions for SJS/TEN.",
        contentMd: `# Stevens-Johnson Syndrome & Toxic Epidermal Necrolysis - Exam Prep

## High-Yield Exam Facts
- **SJS vs TEN**: <30% BSA = SJS; >30% BSA = TEN (BSA is key differentiator)
- **Mortality**: SJS 1-5%; TEN 25-35%
- **Most common trigger**: NSAIDs, antibiotics, anticonvulsants
- **Mucosal involvement**: 90% of SJS/TEN (oral most common)
- **Ocular involvement**: 25-90% of TEN (risk of scarring, blindness)
- **Most important management**: STOP the offending medication
- **CD8+ T cells**: Primary cytotoxic effectors

## Differential Diagnosis
### Bullous Rashes with Mucosal Involvement:
- **SJS/TEN**: Target lesions, recent drug/infection exposure, epidermal necrosis
- **Pemphigus vulgaris**: Positive Nikolsky, intraepidermal acantholysis, oral erosions
- **Bullous pemphigoid**: Tense bullae, subepidermal, negative Nikolsky, older patient
- **Kawasaki disease**: Rash, mucosal involvement, but different distribution (strawberry tongue, conjunctivitis)

### Drug Reactions:
- **SJS/TEN**: Epidermal necrosis, systemic symptoms, mucositis, >10% BSA
- **DRESS syndrome**: Facial edema, lymphadenopathy, hepatomegaly, atypical lymphocytes
- **Acute generalized exanthematous pustulosis (AGEP)**: Non-follicular pustules, neutrophilic infiltration, resolution within days

## NEXT-Pattern Questions
### Recall (10%):
- Q: "SJS is defined by involvement of what % of body surface area?" → A: 10-30%
- Q: "TEN is defined by involvement of what % of body surface area?" → A: >30%

### Analysis (30%):
- Q: "Patient on carbamazepine for seizures develops fever, oral ulcers, and 25% BSA rash. Diagnosis?" → A: SJS (carbamazepine is known trigger; 25% BSA = SJS not EM or TEN)
- Q: "45% BSA with target lesions, mucosal involvement, recent NSAID use. Mortality risk?" → A: TEN (>30% BSA); 25-35% mortality risk

### Problem-Solving (60%):
- Q: "23-year-old admitted with SJS on day 3 of illness. Offending drug stopped yesterday. Appropriate management?" → A: Continue supportive care (fluids, wound care, infection prevention), consider early ophthalmology referral, monitor for complications (sepsis, organ failure); timing of steroids/IVIG depends on disease severity and progression
- Q: "Patient with TEN recovering clinically; develops fever, hemodynamic instability. What is likely complication?" → A: Sepsis (most common cause of death); obtain blood cultures, start broad-spectrum antibiotics empirically

## Clinical Pearls
- **Nikolsky sign**: Positive in SJS/TEN and pemphigus; helpful for diagnosis
- **Tzanck smear**: Apoptotic keratinocytes in SJS/TEN (vs multinucleate in HSV)
- **Early recognition**: Key to mortality reduction; discontinue drug immediately
- **Symblepharon prevention**: Critical to prevent blindness; early ophthalmology involvement
- **Skin tension**: Avoid stretching skin (trauma worsens condition)
- **Time to healing**: SJS (~2-3 weeks), TEN (~4-6 weeks); depends on BSA and complications

## Common Mistakes
- Continuing offending medication while waiting for lab confirmation (WRONG)
- Focusing on treating lesions without stopping drug trigger
- Starting corticosteroids without securing airway/ruling out infection (dangerous)
- Missing ocular involvement (leads to permanent blindness)
- Not recognizing sepsis as leading cause of death
- Delaying ophthalmology referral
- Not documenting culprit drug prominently`,
        mnemonics: [
          { text: "STOP DRUG (most critical intervention)", explanation: "First action" },
          { text: "SJS <30%, TEN >30% BSA (key classification)", explanation: "BSA determines severity" },
          { text: "Sepsis + Ocular scarring = Major complications", explanation: "Leading causes of death and sequelae" }
        ],
        keyPoints: [
          "SJS/TEN: T-cell mediated (CD8+ primary); triggered by drugs, infection, malignancy",
          "Discontinue offending drug immediately (most important intervention)",
          "SJS: 1-5% mortality; TEN: 25-35% mortality",
          "Target lesions + epidermal necrosis + mucosal involvement = diagnosis",
          "Nikolsky sign positive; epidermal necrosis on histology",
          "Supportive care cornerstone: fluids, wound care, infection prevention",
          "Ocular involvement: 25-90% of TEN; risk of blindness without ophthalmology care",
          "Sepsis most common cause of death",
          "Corticosteroids: early high-dose (1-2 mg/kg) may reduce progression",
          "IVIG and cyclosporine: alternative immunomodulators",
          "Document culprit drug; 25-80% recurrence risk with rechallenge"
        ],
        textbookRefs: [
          { book: "IADVL Textbook of Dermatology", chapter: "22 - Erythema Multiforme and SJS-TEN", edition: "4th" },
          { book: "Roxburgh's Common Skin Diseases", chapter: "Severe Adverse Reactions", edition: "20th" }
        ],
      },
      {
        layer: 5,
        slug: "sjs-ten-layer-5-active-recall",
        title: "Stevens-Johnson Syndrome & Toxic Epidermal Necrolysis - Active Recall",
        estimatedMinutes: 30,
        summary: "Flashcard Q&A pairs for SJS/TEN diagnosis, management, and complications.",
        contentMd: `# Stevens-Johnson Syndrome & Toxic Epidermal Necrolysis - Active Recall Flashcards

## Q1: SJS vs TEN Classification
**Q: How are Stevens-Johnson Syndrome and Toxic Epidermal Necrolysis differentiated by body surface area?**
A: SJS = 10-30% BSA involvement; TEN = >30% BSA involvement; Overlap SJS/TEN = 30-31% BSA

## Q2: Mortality Rates
**Q: What are the mortality rates for SJS and TEN?**
A: SJS: 1-5% mortality; TEN: 25-35% mortality (significantly higher in TEN due to extensive involvement)

## Q3: Common Triggers
**Q: Name the three most common drug triggers for SJS/TEN.**
A: NSAIDs (ibuprofen, naproxen), Antibiotics (TMP-SMX, penicillins), Anticonvulsants (phenytoin, carbamazepine)

## Q4: Infection Triggers
**Q: What is the most common infectious trigger for SJS/TEN?**
A: Mycoplasma pneumoniae (causes atypical pneumonia); other triggers include HSV, TB

## Q5: Genetic Predisposition
**Q: What is the association between HLA and SJS/TEN?**
A: HLA-B*1502 with carbamazepine (especially Southeast Asians); HLA-B*5801 with allopurinol

## Q6: Prodrome Duration
**Q: What is the typical timeline from drug exposure to SJS/TEN onset?**
A: 1-3 weeks after drug initiation; can be shorter if previous exposure (1-3 days); rare if chronic use

## Q7: Mucosal Involvement
**Q: What percentage of SJS/TEN patients have mucosal involvement, and which sites are most commonly affected?**
A: 90% have mucosal involvement; oral (90%), ocular (25-90%), genital/anal also common

## Q8: Nikolsky Sign
**Q: What does a positive Nikolsky sign indicate, and is it specific to SJS/TEN?**
A: Positive Nikolsky (epidermal separation with gentle rubbing) indicates loss of epidermal-dermal adhesion; also positive in pemphigus

## Q9: Histopathology
**Q: What are the characteristic histopathologic findings in SJS/TEN?**
A: Full-thickness epidermal necrosis, CD8+ T lymphocyte infiltration, subepidermal bulla, minimal vasculitis (distinguishes from other conditions)

## Q10: CD8+ T Cells
**Q: What is the role of CD8+ T lymphocytes in SJS/TEN pathogenesis?**
A: CD8+ cytotoxic T lymphocytes are primary effectors; mediate keratinocyte apoptosis via FasL/Fas and granzyme B/perforin

## Q11: Most Important Management
**Q: What is the single most important intervention in managing SJS/TEN?**
A: Immediate discontinuation of the offending medication (do NOT continue while awaiting confirmation)

## Q12: Supportive Care Priorities
**Q: Name four key supportive care measures in SJS/TEN management.**
A: (1) IV fluid resuscitation, (2) wound care with non-adherent dressings, (3) infection prevention and monitoring, (4) nutritional support (high protein diet or TPN)

## Q13: Ocular Complications
**Q: Why is early ophthalmology involvement critical in SJS/TEN management?**
A: To prevent symblepharon (adhesion between eyelids and conjunctiva) and corneal scarring/opacification leading to blindness (affects 10-30% of TEN survivors)

## Q14: Sepsis Risk
**Q: Why is sepsis the most common cause of death in SJS/TEN, and what is the treatment approach?**
A: Extensive epidermal necrosis allows bacterial translocation; treat with broad-spectrum antibiotics empirically (do NOT wait for culture confirmation)

## Q15: Recurrence Prevention
**Q: What is the risk of recurrence if a patient with SJS/TEN is re-exposed to the offending drug?**
A: 25-80% risk of recurrence; culprit drug must be prominently documented in medical record; inform patient to avoid the drug and related agents`,
        mnemonics: [
          { text: "SJS <30%, TEN >30% BSA; 1-5% vs 25-35% mortality", explanation: "Key differences" },
          { text: "STOP DRUG, Supportive care, Sepsis prevention (3 S's)", explanation: "Management priorities" },
          { text: "CD8+ T cells → FasL/Fas and Granzyme B → Keratinocyte apoptosis", explanation: "Pathogenic mechanism" }
        ],
        keyPoints: [
          "SJS/TEN: T-cell mediated hypersensitivity reaction (Type IV)",
          "Triggered by medications (NSAIDs, antibiotics, anticonvulsants), infections, malignancy",
          "SJS: 10-30% BSA, 1-5% mortality; TEN: >30% BSA, 25-35% mortality",
          "Discontinue offending drug immediately (most critical intervention)",
          "Mucosal involvement in 90% (oral most common; ocular in 25-90%)",
          "Nikolsky sign positive; epidermal necrosis on histology",
          "CD8+ T cells primary effectors; apoptosis via FasL/Fas and granzyme B",
          "Supportive care: IV fluids, wound care, infection prevention, nutrition",
          "Early ophthalmology referral to prevent blindness",
          "Sepsis most common cause of death; use broad-spectrum antibiotics",
          "Corticosteroids: early high-dose may reduce disease progression",
          "25-80% recurrence risk with rechallenge; document culprit drug prominently"
        ],
        textbookRefs: [
          { book: "IADVL Textbook of Dermatology", chapter: "22 - Erythema Multiforme and SJS-TEN", edition: "4th" },
          { book: "Roxburgh's Common Skin Diseases", chapter: "Severe Adverse Reactions", edition: "20th" }
        ],
      },
    ],
  },
];
