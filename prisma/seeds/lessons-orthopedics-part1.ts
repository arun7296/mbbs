import type { TopicLessons } from "./content-loader";

export const orthopedicsLessons: TopicLessons[] = [
  {
    topicCode: "OR-MOD-01-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "fracture-healing-layer-1-foundation",
        title: "Fracture Healing & Classification - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of fracture types, classification systems, healing phases, and factors affecting fracture healing.",
        contentMd: `# Fracture Healing & Classification - Foundation

## Definition
A fracture is a break in the continuity of bone. Can be partial or complete, affecting skeletal biomechanics.

## Fracture Classification by Anatomical Site
- **Metaphyseal**: Near joint
- **Diaphyseal**: Shaft/middle third
- **Epiphyseal**: Involving joint surface
- **Intra-articular**: Extends into joint
- **Extra-articular**: Does not involve joint

## Fracture Classification by Completeness
- **Complete**: Bone separated into fragments
- **Incomplete**: Partial break (greenstick, hairline, stress)
- **Comminuted**: Multiple fragments
- **Segmental**: Bone loss with two or more fracture lines

## Fracture Classification by Integrity
- **Closed (Simple)**: No skin breach
- **Open (Compound)**: Skin breach with wound
  - Grade I: <1 cm wound
  - Grade II: 1-10 cm wound
  - Grade III: >10 cm or extensive damage

## Fracture Healing Phases

### Phase 1: Inflammatory (0-3 days)
- Hematoma formation
- Inflammatory cell infiltration
- Debris removal
- Medullary and periosteal reactions begin

### Phase 2: Soft Callus Formation (3-21 days)
- Fibroblasts produce collagen (woven bone)
- Cartilage matrix formation
- Blood vessel ingrowth
- Provisional callus bridges fracture

### Phase 3: Hard Callus Formation (3-6 months)
- Osteoblasts replace cartilage with bone
- Woven bone gradually replaced by lamellar bone
- Fracture becomes clinically united

### Phase 4: Remodeling (Months to Years)
- Excess bone removed
- Lamellar bone orientation improves
- Restoration of medullary canal
- Can take 2-5 years for complete remodeling

## Factors Affecting Fracture Healing

### Positive Factors
- Young age (faster healing)
- Good blood supply
- Proper reduction
- Immobilization
- Early mobilization

### Negative Factors
- Age >60 years
- Infection
- Poor nutrition
- Smoking
- Excessive soft tissue damage
- Certain medications (NSAIDs, corticosteroids)`,
        mnemonics: [
          {
            text: "Fracture healing: FISHR",
            explanation: "Fibrin clot, Inflammation, Soft callus, Hard callus, Remodeling"
          },
          {
            text: "Open fracture Grades: 1=small, 2=medium, 3=extensive",
            explanation: "Based on wound size and tissue damage"
          }
        ],
        keyPoints: [
          "Comminution increases severity and healing time",
          "Open fractures require emergency treatment (antibiotic within 3 hours)",
          "Immobilization essential for early healing phases",
          "Age >60 years significantly delays healing",
          "Smoking reduces bone healing by 50%"
        ],
        textbookRefs: [
          { book: "Maheshwari's Essential Orthopaedics", chapter: "Ch 1", edition: "6th" },
          { book: "Apley & Solomon's System of Orthopaedics", chapter: "Ch 2", edition: "10th" }
        ]
      },
      {
        layer: 2,
        slug: "fracture-healing-layer-2-mechanism",
        title: "Fracture Healing & Classification - Mechanism",
        estimatedMinutes: 25,
        summary: "Cellular and molecular mechanisms of fracture healing, growth factors, callus formation.",
        contentMd: `# Fracture Healing & Classification - Mechanism

## Vascular Response
- Fracture causes vessel disruption
- Hematoma acts as scaffold
- Angiogenesis begins within 24 hours
- New vessels at periphery, increasing blood flow
- Restoration critical for healing

## Cellular Events

### Osteoblast Activation
- Derived from mesenchymal stem cells (periosteum, marrow)
- Produce collagen matrix and mineralize bone
- Respond to growth factors and mechanical signals
- Proliferate in soft callus phase

### Osteoclasts
- Remove necrotic bone and excess callus
- Essential for remodeling phase
- Coordinate with osteoblasts
- Activation delayed compared to osteoblasts

### Chondroblasts
- Produce cartilage matrix in soft callus
- Gradual replacement by bone (endochondral ossification)
- Cartilage acts as temporary scaffold

## Growth Factors in Fracture Healing

### Bone Morphogenetic Proteins (BMP)
- BMP-2, BMP-7 most important
- Promote osteoblast differentiation
- Accelerate healing in delayed/non-unions
- FDA-approved for clinical use

### Fibroblast Growth Factor (FGF)
- Promotes angiogenesis
- Stimulates osteoblast proliferation
- Multiple isoforms (FGF-2 most studied)

### Insulin-Like Growth Factor (IGF)
- Produced locally by osteoblasts
- Stimulates matrix production
- Enhances osteoblast activity

### Vascular Endothelial Growth Factor (VEGF)
- Promotes angiogenesis
- Essential for vascular invasion
- Coordinate with bone formation

## Mechanical Factors

### Callus Stiffening
- Soft callus gradually stiffens
- Mechanical loading stimulates callus formation
- Excessive motion delays healing
- Micromotion stimulates cartilage formation

### Strain Theory
- Low strain (<5%): Bone formation
- Moderate strain (5-10%): Cartilage formation
- High strain (>10%): Fibrous tissue, poor healing

## Metabolic Changes
- Increased metabolic rate at fracture site
- Enhanced bone turnover (increased by 5-8 fold)
- Increased calcium and phosphate mobilization
- Protein synthesis increases significantly`,
        mnemonics: [
          {
            text: "BMP-FIGV: Growth factors in fracture",
            explanation: "BMP, FGF, IGF, Growth hormone, VEGF"
          },
          {
            text: "Strain theory: Low=bone, Moderate=cartilage, High=fibrosis",
            explanation: "Mechanical environment determines fracture healing pattern"
          }
        ],
        keyPoints: [
          "Hematoma rich in growth factors - don't remove routinely",
          "BMPs most potent osteogenic factors",
          "Angiogenesis essential for all fracture healing",
          "Mechanical loading accelerates healing through callus formation",
          "NSAIDs inhibit PGE2, reducing healing in some studies"
        ],
        textbookRefs: [
          { book: "Maheshwari's Essential Orthopaedics", chapter: "Ch 1", edition: "6th" },
          { book: "Campbell's Operative Orthopaedics", chapter: "Ch 2", edition: "13th" }
        ]
      },
      {
        layer: 3,
        slug: "fracture-healing-layer-3-clinical",
        title: "Fracture Healing & Classification - Clinical Assessment",
        estimatedMinutes: 25,
        summary: "Clinical diagnosis of fractures, radiological assessment, classification systems.",
        contentMd: `# Fracture Healing & Classification - Clinical Assessment

## Clinical Examination

### Inspection
- Deformity, swelling, bruising
- Skin integrity (open vs closed)
- Limb position (angulation, rotation)
- Neurovascular status

### Palpation
- Localized tenderness
- Crepitus (bone ends grinding)
- Deformity confirmation
- Distal pulses and sensory function

### Movement
- Abnormal movement at fracture site
- Pain reproduction
- Loss of function

## Radiological Assessment

### X-ray Views
- Minimum 2 planes (AP and lateral)
- Include joints above and below
- Stress views if ligamentous injury suspected

### Fracture Lines on X-ray
- Complete vs incomplete
- Pattern (transverse, oblique, spiral, comminuted)
- Alignment (anatomic, acceptable, unacceptable)
- Displacement, angulation, rotation

### Healing Assessment
- Soft callus visible at 2-3 weeks
- Hard callus bridging at 6-8 weeks
- Complete bridging indicates clinical union
- Remodeling continues for months

## Classification Systems

### Fracture Pattern Classification
- **Transverse**: Perpendicular to long axis
- **Oblique**: At 45° angle
- **Spiral**: Twisting mechanism (high-energy)
- **Butterfly**: Wedge-shaped fragment
- **Comminuted**: Multiple fragments

### Location in Bone
- **Metaphyseal**: Cancellous bone (faster healing)
- **Diaphyseal**: Cortical bone (slower healing)
- **Epiphyseal**: Intra-articular
- **Growth plate**: Special concern in children

### Open Fracture Grading (Gustilo-Anderson)
- **Grade I**: <1 cm wound, minimal soft tissue injury
- **Grade II**: 1-10 cm wound, moderate soft tissue injury
- **Grade IIIa**: >10 cm or high-velocity, soft tissue damage, adequate periosteal coverage
- **Grade IIIb**: Loss of periosteal coverage, requires flap
- **Grade IIIc**: Vascular injury requiring repair

## Union Timeline by Bone

| Bone | Time to Union |
|------|----------------|
| Scaphoid | 12-16 weeks |
| Femur shaft | 12-16 weeks |
| Tibia shaft | 16-20 weeks |
| Fibula | 8-12 weeks |
| Humerus shaft | 12-16 weeks |`,
        mnemonics: [
          {
            text: "Gustilo grades: I=small, II=medium, III=big",
            explanation: "IIIa=adequate coverage, IIIb=flap needed, IIIc=vascular injury"
          },
          {
            text: "Fracture patterns: TOCS",
            explanation: "Transverse, Oblique, Comminuted, Spiral"
          }
        ],
        keyPoints: [
          "Open fractures require antibiotics within 3 hours",
          "Grade III requires surgical coverage and possible amputation",
          "Metaphyseal fractures heal faster (2-3 weeks vs 6-8 weeks)",
          "Comminuted fractures have worse outcomes",
          "Scaphoid has high non-union risk due to poor blood supply"
        ],
        textbookRefs: [
          { book: "Maheshwari's Essential Orthopaedics", chapter: "Ch 1", edition: "6th" },
          { book: "SRB Manual", chapter: "Fractures", edition: "Latest" }
        ]
      },
      {
        layer: 4,
        slug: "fracture-healing-layer-4-exam",
        title: "Fracture Healing & Classification - Exam Prep",
        estimatedMinutes: 20,
        summary: "Board-level concepts, healing timelines, complications, and high-yield facts.",
        contentMd: `# Fracture Healing & Classification - Exam Preparation

## Complications of Fracture Healing

### Early Complications (Days to Weeks)
- **Infection**: Especially in open fractures
- **Fat embolism**: From bone marrow (long bones)
- **Compartment syndrome**: Increased pressure in fascial compartment
- **Vascular injury**: Thrombosis, pseudoaneurysm
- **Nerve injury**: Compression or transection

### Late Complications
- **Delayed union**: Healing slower than expected
- **Non-union**: Complete failure of bone union
- **Malunion**: Union in wrong position
- **Contracture**: Muscle shortening
- **Arthrofibrosis**: Joint stiffness

## Healing Timeline Summary

| Week | Event |
|------|-------|
| 0-3 | Hematoma, inflammation |
| 3-7 | Soft callus appears |
| 7-14 | Soft callus growth |
| 2-3 months | Hard callus formation |
| 3-6 months | Clinical union possible |
| 6+ months | Remodeling phase |

## Factors Prolonging Healing

### Intrinsic
- Age >60 years (healing 20-30% slower)
- Poor nutrition (protein, vitamin C, D)
- Smoking (50% slower healing)
- Alcohol abuse
- Chronic disease (diabetes, kidney disease)

### Extrinsic
- Infection
- Poor immobilization
- Excessive motion
- Inadequate reduction
- Vascular compromise

## Delayed Union Criteria
- No callus bridging at expected time
- Varies by bone and fracture pattern
- Requires imaging confirmation
- Management: Assess for infection, malreduction

## Non-Union Definition
- Fracture ends become sclerotic
- No healing progression for 6+ months
- Requires surgical intervention (grafting, plating)
- Pseudarthrosis: False joint forms

## NEET High-Yield Facts
- Fracture healing phases: Inflammatory, soft callus, hard callus, remodeling
- Soft callus at 3 weeks, hard callus at 6-8 weeks
- Open fractures need antibiotics within 3 hours
- Age doubles healing time after age 60
- Smoking reduces healing rate by 50%
- Scaphoid non-union rate highest (5-10%)`,
        mnemonics: [
          {
            text: "Phases: ISHR",
            explanation: "Inflammatory, Soft callus, Hard callus, Remodeling"
          },
          {
            text: "Complications: INFECT",
            explanation: "Infection, Non-union, Fat embolism, Compartment, Emboli, Contracture, Thrombosis"
          }
        ],
        keyPoints: [
          "Soft callus visible at 2-3 weeks, hard callus at 6-8 weeks",
          "Open fractures need emergency antibiotic treatment",
          "Age and smoking major negative factors",
          "Immobilization critical during early phases",
          "Remodeling phase longest (can take years)"
        ],
        textbookRefs: [
          { book: "Maheshwari's Essential Orthopaedics", chapter: "Ch 1", edition: "6th" },
          { book: "SRB Manual", chapter: "Fractures and Their Management", edition: "Latest" }
        ]
      },
      {
        layer: 5,
        slug: "fracture-healing-layer-5-active-recall",
        title: "Fracture Healing & Classification - Active Recall Quiz",
        estimatedMinutes: 15,
        summary: "Q&A testing healing phases, complications, classification, and clinical decision-making.",
        contentMd: `# Fracture Healing - Active Recall Questions

## Question 1: Healing Phases
**Q: What is the primary cellular event in the soft callus phase of fracture healing?**

A: Osteoblast and chondroblast proliferation producing woven bone and cartilage matrix
- Occurs from 3-21 days post-fracture
- Soft callus not visible on X-ray yet
- Cartilage provides temporary support

## Question 2: Gustilo-Anderson Classification
**Q: 35-year-old with open fracture, 5 cm wound, moderate soft tissue injury, skin over fracture. Gustilo grade?**

A: Grade II
- Grade I: <1 cm, minimal injury
- Grade II: 1-10 cm, moderate injury (your case)
- Grade III: >10 cm or high-velocity injury

## Question 3: Open Fracture Management
**Q: What is the most time-sensitive intervention in open fracture management?**

A: Antibiotic administration within 3 hours
- Antibiotics more important than surgical reduction initially
- First-generation cephalosporin for Grade I-II
- Add gentamicin and clindamycin for Grade III

## Question 4: Healing Timeline
**Q: At what time point can soft callus be seen on X-ray?**

A: Soft callus NOT visible on standard X-ray
- Soft callus begins at 3 days but radiolucent
- Hard callus visible at 2-3 weeks
- Bridging callus at 6-8 weeks

## Question 5: Age and Healing
**Q: How does age affect fracture healing rate?**

A: Age >60 years increases healing time by 20-30% and increases complication rates
- Elderly have delayed inflammatory response
- Reduced growth factor production
- Decreased osteoblast activity

## Question 6: Non-union Diagnosis
**Q: What findings on X-ray indicate non-union?**

A: Sclerotic bone ends, no callus bridge, fracture line still visible after 6+ months
- Pseudarthrosis: False joint with smooth edges
- Requires surgical intervention (plating, grafting)

## Question 7: Smoking Effects
**Q: What is the effect of smoking on fracture healing?**

A: Reduces healing rate by 50% and increases non-union risk
- Nicotine causes vasoconstriction
- Reduced blood flow to fracture
- Must quit before fracture for benefit

## Question 8: Strain Theory
**Q: According to strain theory, what type of callus forms with moderate micromotion at fracture site?**

A: Cartilage callus (endochondral ossification)
- Low strain (<5%): Primary bone formation
- Moderate strain (5-10%): Cartilage formation
- High strain (>10%): Fibrous tissue, poor healing

## Question 9: Scaphoid Healing
**Q: Why do scaphoid fractures have highest non-union rate?**

A: Retrograde blood supply (distal to proximal) leaves proximal pole at risk
- Proximal pole has limited blood supply
- Ischemic necrosis common in non-displaced proximal fractures
- Requires 12-16 weeks immobilization

## Question 10: Growth Factor in Healing
**Q: Which growth factor is most osteogenic and approved for clinical use in delayed/non-unions?**

A: Bone Morphogenetic Proteins (BMP-2 and BMP-7)
- BMP-2: FDA approved for spinal fusion and open tibia fractures
- BMP-7: FDA approved for non-unions
- Both promote osteoblast differentiation`,
        mnemonics: [
          {
            text: "Soft callus = NOT visible, Hard callus = visible",
            explanation: "Soft callus radiolucent, hard callus appears at 2-3 weeks"
          },
          {
            text: "Open fracture: ABCs = Antibiotics, Bleeding control, Contamination prevention",
            explanation: "Immediate management priorities"
          }
        ],
        keyPoints: [
          "Soft callus 3-21 days, hard callus 3-6 months",
          "Open fractures need antibiotics within 3 hours",
          "Age >60 significantly slows healing",
          "Smoking reduces healing by 50%",
          "Scaphoid highest non-union risk among small bones"
        ],
        textbookRefs: [
          { book: "Maheshwari's Essential Orthopaedics", chapter: "Ch 1", edition: "6th" },
          { book: "SRB Manual", chapter: "Fractures", edition: "Latest" }
        ]
      }
    ]
  }
];
