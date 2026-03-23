import type { TopicLessons } from "./content-loader";

export const orthopedicsLessonsPart12: TopicLessons[] = [
  {
    topicCode: "OR-MOD-06-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "osteomyelitis-layer-1-foundation",
        title: "Osteomyelitis - Foundation",
        estimatedMinutes: 20,
        summary: "Osteomyelitis is bone infection (usually bacterial). Acute osteomyelitis: hematogenous (most common in children), direct inoculation, or contiguous spread. Chronic: follows inadequately treated acute. Staphylococcus aureus (50-80%), Gram-negatives. Metaphyseal location in children. Brodie's abscess, involucrum (new bone), sequestrum (dead bone). Complications: pathologic fracture, sinus tracts, septic arthritis.",
        contentMd: `# Osteomyelitis - Foundation

## Classification
**Acute Hematogenous** (50%, children): Metaphyseal region common
**Acute Contiguous** (30%): Adjacent soft tissue or direct inoculation
**Chronic** (20%): Inadequately treated acute

## Common Causative Organisms
- Staphylococcus aureus (50-80%)
- Streptococcus (10-15%)
- Gram-negative bacilli (10-20%)
- Mycobacterium tuberculosis (5%)

## Anatomical Features
- **Metaphysis**: Vascular loops trap bacteria
- **Brodie's abscess**: Localized metaphyseal abscess
- **Involucrum**: New bone around infection
- **Sequestrum**: Dead bone fragment

## Clinical Presentation
- Fever, bone pain, refusal to use limb
- Swelling, erythema over infected bone
- Chronic: sinus tract drainage

## Diagnostic Approach
- ESR/CRP elevated
- Blood culture (40-50% positive)
- Bone aspirate culture (gold standard)
- MRI most sensitive`,
        mnemonics: [
          {
            text: "STAPH RULES: Staphylococcus aureus (50-80%), Toxic quickly, Acute hematogenous, Purulent abscess",
            explanation: "Staphylococcus aureus predominance in osteomyelitis"
          }
        ],
        keyPoints: [
          "Osteomyelitis: bone infection; acute hematogenous most common in children",
          "Staphylococcus aureus = 50-80% of cases",
          "Metaphysis most common site (distal femur, proximal tibia)",
          "Acute presentation: fever, severe bone pain, refusal to use limb",
          "Early diagnosis critical: MRI most sensitive"
        ],
        textbookRefs: [
          { book: "Maheshwari's Essential Orthopaedics", chapter: "Bone Infections", edition: "6th" },
          { book: "Apley & Solomon's System of Orthopaedics", chapter: "Osteomyelitis", edition: "10th" }
        ]
      },
      {
        layer: 2,
        slug: "osteomyelitis-layer-2-mechanism",
        title: "Osteomyelitis - Mechanism",
        estimatedMinutes: 25,
        summary: "Bacteria lodge in metaphyseal capillaries due to sluggish flow, multiply in nutrient-rich marrow, cause abscess formation. Intramedullary pressure rises, vascular compromise occurs, bone necrosis (sequestrum) develops. Periosteum elevates, forms new bone (involucrum) around dead bone. Infection tracks through Haversian/Volkmann canals, spreads to soft tissues. Chronic: inadequate drainage leads to persistent sequestrum.",
        contentMd: `# Osteomyelitis - Mechanism

## Pathophysiology
**Metaphyseal Trapping**: Capillaries narrow, sluggish flow → bacteria lodge → multiply in nutrient-rich marrow

**Acute Phase**: Abscess formation → intramedullary pressure rise → vascular compromise → bone necrosis

**Involucrum**: Periosteum responds with new bone formation (living bone around dead sequestrum)

**Sequestrum**: Dead bone fragment, cannot remodel, persists months/years

**Suppurative Phase**: Pus perforates cortex → soft tissues → sinus tract formation

**Chronic**: Inadequate drainage → persistent sequestrum → recurrent flares

## Bone Necrosis Mechanism
- Hypoxia from vascular compromise kills osteocytes
- Creates necrotic bone (sequestrum) surrounded by sclerotic bone
- Involucrum forms as periosteal response

## Spread Mechanisms
- Haversian/Volkmann canals: intraosseous spread
- Cortical perforation: soft tissue extension
- Epiphyseal involvement: septic arthritis risk`,
        mnemonics: [
          {
            text: "METAPHYSIS FATE: Marrow infection, Edema inflammation, Trapped bacteria, Abscess pressure, Pus flow blocked, Hypoxia kills bone, Yenosis creates sequestrum",
            explanation: "Acute osteomyelitis pathophysiology"
          }
        ],
        keyPoints: [
          "Metaphyseal location: sluggish blood flow → bacterial trapping → abscess",
          "Intramedullary pressure rises → vascular compromise → bone necrosis (sequestrum)",
          "Periosteum responds with new bone formation (involucrum) around dead sequestrum",
          "Perforation of cortex → soft tissue abscess, sinus tract formation",
          "Chronic osteomyelitis: inadequate drainage → persistent sequestrum"
        ],
        textbookRefs: [
          { book: "Maheshwari's Essential Orthopaedics", chapter: "Osteomyelitis Pathophysiology", edition: "6th" },
          { book: "Apley & Solomon's System of Orthopaedics", chapter: "Mechanisms", edition: "10th" }
        ]
      },
      {
        layer: 3,
        slug: "osteomyelitis-layer-3-clinical",
        title: "Osteomyelitis - Clinical Management",
        estimatedMinutes: 25,
        summary: "Diagnosis: MRI (most sensitive), blood/bone cultures. Empiric: vancomycin + ceftriaxone. Acute: 4-6 weeks IV antibiotics. Surgery if abscess or non-response. Chronic: sequestrectomy (remove dead bone) + sinus tract excision + 6-8 weeks antibiotics. Complications: pathologic fracture, permanent deformity, septic arthritis. Prevention: prompt wound treatment.",
        contentMd: `# Osteomyelitis - Clinical Management

## Diagnostic Approach
**Laboratory**: ESR >20, CRP elevated, blood culture (40-50% positive), bone culture (gold standard)
**Imaging**: MRI (90-100% sensitivity), X-ray (normal initially), CT/bone scan complementary

## Antibiotic Therapy
**Empiric**: Vancomycin 15-20 mg/kg IV Q8-12H + Ceftriaxone 1-2 g IV Q12H
**S. aureus MSSA**: Nafcillin 2 g IV Q4H (superior to vancomycin)
**MRSA**: Continue vancomycin (trough 15-20 mcg/mL)
**Duration**: 4-6 weeks IV for acute; 6-8 weeks for chronic

## Surgical Management
**Acute (Early Diagnosis)**: Antibiotics alone if improvement within 48 hours; drainage if abscess
**Chronic**: Sequestrectomy (remove dead bone), sinus tract excision, fill cavity with antibiotic cement/flap/graft

## Complications
- Septic arthritis if epiphyseal involvement
- Pathologic fracture from bone loss
- Permanent deformity from growth disruption
- Sinus tract malignancy (rare, long-term)`,
        mnemonics: [
          {
            text: "ACUTE MANAGEMENT: Antibiotics empiric, Cultures blood/bone, Urgent MRI, Temporal urgency critical, Early drainage if abscess",
            explanation: "Acute osteomyelitis management"
          }
        ],
        keyPoints: [
          "Diagnosis: MRI most sensitive; blood/bone cultures essential",
          "Empiric: vancomycin + ceftriaxone (S. aureus + Gram-negative coverage)",
          "Acute: 4-6 weeks IV; surgery if abscess or non-response",
          "Chronic: sequestrectomy + sinus tract excision + 6-8 weeks antibiotics",
          "Prevention: prompt wound treatment, prophylactic antibiotics"
        ],
        textbookRefs: [
          { book: "Maheshwari's Essential Orthopaedics", chapter: "Osteomyelitis Treatment", edition: "6th" },
          { book: "Apley & Solomon's System of Orthopaedics", chapter: "Management", edition: "10th" }
        ]
      },
      {
        layer: 4,
        slug: "osteomyelitis-layer-4-exam",
        title: "Osteomyelitis - Exam Prep",
        estimatedMinutes: 20,
        summary: "Key facts: Staphylococcus aureus (50-80%); acute hematogenous in children (metaphysis). ESR/CRP elevated; blood culture 40-50%. MRI most sensitive. Empiric: vancomycin + ceftriaxone. Duration: 4-6 weeks. Involucrum = living bone (healing); sequestrum = dead bone (requires removal). Common errors: confusing involucrum vs sequestrum, dismissing normal WBC, waiting for culture before antibiotics.",
        contentMd: `# Osteomyelitis - Exam Prep

## Critical Facts
- Staphylococcus aureus (50-80%) most common
- Metaphysis most common site in children (slow blood flow)
- MRI (90-100% sensitivity) > X-ray (normal first 7-10 days)
- ESR/CRP elevated; normal WBC does NOT exclude
- Blood culture 40-50% positive; bone culture gold standard

## High-Yield Concepts
- Involucrum: new living bone (periosteal response) = healing sign
- Sequestrum: dead bone fragment (cannot remodel) = requires surgical removal
- Empiric antibiotics: vancomycin + ceftriaxone (start immediately, don't wait for culture)
- Duration: 4-6 weeks IV for acute; 6-8 weeks for chronic
- Sinus tract: indicates chronic osteomyelitis (>6 weeks)

## Common Mistakes
- Wait for culture before antibiotics (WRONG: start empiric immediately)
- Confuse involucrum (healing) vs sequestrum (chronic marker)
- Dismiss normal WBC (doesn't exclude)
- Miss sinus tract chronicity (requires sequestrectomy)`,
        mnemonics: [
          {
            text: "OSTEOMYELITIS EXAM: Organism S.aureus, Stab with MRI, Temporal urgency, Early antibiotics, Operative if abscess",
            explanation: "Osteomyelitis key points"
          }
        ],
        keyPoints: [
          "Staphylococcus aureus (50-80%); metaphysis common in children",
          "MRI most sensitive; normal WBC does NOT exclude",
          "Empiric: vancomycin + ceftriaxone; start immediately",
          "Duration: 4-6 weeks IV for acute; 6-8 weeks for chronic",
          "Involucrum = healing sign; sequestrum = requires surgical removal"
        ],
        textbookRefs: [
          { book: "Maheshwari's Essential Orthopaedics", chapter: "Quick Reference - Osteomyelitis", edition: "6th" },
          { book: "NEET/DNB Orthopedics - Bone Infections", chapter: "Exam Review", edition: "2024" }
        ]
      },
      {
        layer: 5,
        slug: "osteomyelitis-layer-5-active-recall",
        title: "Osteomyelitis - Active Recall",
        estimatedMinutes: 15,
        summary: "Active recall on diagnostic criteria, organism identification, antibiotic selection, management decisions. Distinguishing acute from chronic, organism-specific considerations, and complications.",
        contentMd: `# Active Recall - Osteomyelitis

**Q1: Most common organism in osteomyelitis?**
> Staphylococcus aureus (50-80%). Aggressive, rapidly progressive, common in bacteremia.

**Q2: Why is metaphysis common site in children?**
> Vascular anatomy: capillaries narrow → sluggish blood flow → bacterial trapping in nutrient-rich marrow → rapid growth.

**Q3: Does normal WBC exclude osteomyelitis?**
> No! ESR/CRP more reliable. Suspect osteomyelitis with fever + bone pain + elevated ESR/CRP regardless of WBC.

**Q4: MRI shows T2 hyperintense marrow + T1 hypointense. Diagnosis?**
> Acute hematogenous osteomyelitis (marrow edema). MRI 90-100% sensitive. Confirm with blood/bone culture.

**Q5: Empiric antibiotic regimen before culture?**
> Vancomycin 15-20 mg/kg IV Q8-12H + Ceftriaxone 1-2 g IV Q12H.

**Q6: Chronic osteomyelitis with sinus tract draining pus. Diagnosis?**
> Sequestrum (dead bone) present. Requires sequestrectomy + 6-8 weeks antibiotics.

**Q7: Involucrum vs sequestrum?**
> Involucrum = new living bone (periosteal response). Sequestrum = dead necrotic bone.

**Q8: Duration of antibiotic therapy for acute osteomyelitis?**
> 4-6 weeks IV. May switch to oral after 2-3 weeks if improvement.

**Q9: When is surgical drainage needed for acute osteomyelitis?**
> Soft tissue abscess, non-response (>48 hours), septicemia, immunocompromised, TB/fungi.

**Q10: Differentiate early vs late chronic osteomyelitis by surgical approach timing.**
> Early (2-8 weeks): can attempt sequestrectomy. Late (>8 weeks): involucrum fully formed, easier to identify/remove sequestrum.`,
        mnemonics: [
          {
            text: "OSTEOMYELITIS APPROACH: Organism S.aureus, Suspect metaphysis, Temporal urgency, Early diagnosis MRI, Obtain cultures, Mediate antibiotics, Yank sequestrum if chronic",
            explanation: "Complete osteomyelitis management"
          }
        ],
        keyPoints: [
          "Staphylococcus aureus (50-80%); metaphysis common in children",
          "MRI most sensitive; normal WBC does NOT exclude",
          "Empiric: vancomycin + ceftriaxone",
          "Duration: 4-6 weeks IV for acute; 6-8 weeks for chronic",
          "Involucrum = healing; sequestrum = requires removal"
        ],
        textbookRefs: [
          { book: "Maheshwari's Essential Orthopaedics", chapter: "Osteomyelitis", edition: "6th" }
        ]
      }
    ]
  }
];
