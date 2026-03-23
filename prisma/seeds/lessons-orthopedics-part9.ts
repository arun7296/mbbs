import type { TopicLessons } from "./content-loader";

export const orthopedicsLessonsPart9: TopicLessons[] = [
  {
    topicCode: "OR-MOD-03-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "tibia-ankle-layer-1-foundation",
        title: "Tibia & Ankle Fractures - Foundation",
        estimatedMinutes: 20,
        summary: "Epidemiology, anatomy, and classification of tibial and ankle fractures.",
        contentMd: `# Tibia & Ankle Fractures - Foundation

## Epidemiology
- **Incidence**: Common lower limb fractures; tibial fractures in ~500 per 100,000/year
- **Age**: All ages; bimodal (young high-energy, elderly low-energy)
- **Mechanism**: High-energy (RTA, fall) in young; low-energy in elderly
- **Complexity**: Often associated with soft tissue injury, compartment syndrome

## Tibial Plateau Fractures (Schatzker I-VI)
- **Type I**: Simple split; **Type II**: Split-depression; **Type III**: Pure depression
- **Type IV**: Medial plateau; **Type V**: Bicondylar; **Type VI**: Metaphyseal separation
- Associated injuries: Meniscal tears (50-80%), ACL/PCL, collateral ligament injury

## Tibial Shaft Fractures
- **Simple**: Transverse, oblique, spiral
- **Comminuted**: Multiple fragments
- **Open (Gustilo-Anderson)**: I (small wound), II (moderate), III (severe, IIIB with bone loss, IIIC with vascular injury)
- Associated: Fibular fracture (80%), compartment syndrome, vascular injury (2-5%)

## Ankle Fractures - Weber Classification
- **Type A**: Below syndesmosis (simple, stable)
- **Type B**: At syndesmosis (intermediate, variable)
- **Type C**: Above syndesmosis (unstable)
- Components: Medial malleolus (tibia), lateral malleolus (fibula), posterior malleolus, syndesmosis`,
        mnemonics: [
          { text: "Schatzker I-VI", explanation: "I simple, II split-depression, III depression, IV medial, V bicondylar, VI separation" },
          { text: "Weber A-B-C", explanation: "Below-At-above syndesmosis" }
        ],
        keyPoints: [
          "Tibial plateau: Schatzker I-VI; intra-articular; meniscal tears 50-80%",
          "Tibial shaft: Gustilo-Anderson for open; fibular fracture 80%",
          "Compartment syndrome risk with high-energy fractures",
          "Ankle: Weber classification (A below, B at, C above syndesmosis)",
          "Vascular injury 2-5% risk with tibial fractures"
        ],
        textbookRefs: [
          { book: "Maheshwari's Essential Orthopaedics", chapter: "Tibia and Ankle Fractures", edition: "6th" },
          { book: "Apley's System of Orthopaedics and Fractures", chapter: "Lower Limb Fractures", edition: "10th" }
        ]
      },
      {
        layer: 2,
        slug: "tibia-ankle-layer-2-mechanism",
        title: "Tibia & Ankle Fractures - Mechanisms and Complications",
        estimatedMinutes: 25,
        summary: "Pathophysiology of fractures, vascular injuries, and compartment syndrome.",
        contentMd: `# Tibia & Ankle Fractures - Mechanisms and Complications

## Vascular Injury Risk
- **Incidence**: 2-5% with tibial fractures (anterior tibial artery most common)
- **Mechanism**: Direct laceration from bone fragment, traction injury
- **Assessment**: Check distal pulses, capillary refill, Doppler if needed
- **Management**: Emergent vascular surgery consult if suspected

## Compartment Syndrome Pathophysiology
1. **Muscle swelling**: Crush, ischemia, bleeding
2. **Pressure increase**: Exceeds capillary perfusion pressure
3. **Ischemia develops**: Muscle hypoxia
4. **Muscle necrosis**: Irreversible after 6-8 hours
5. **Rhabdomyolysis**: Myoglobin release → AKI risk

### Risk Factors
- High-energy mechanisms (RTA, crush), significant bleeding
- Comminuted fractures, anterior compartment most common

### Clinical Signs (5 P's)
- **Pain**: Out of proportion (MOST SENSITIVE)
- **Pressure**: Tense compartment
- **Paresthesia**: Numbness/tingling (late)
- **Pallor**: Pale skin (late)
- **Pulselessness**: Absent pulses (very late)

### Diagnosis
- Clinical suspicion based on mechanism
- Compartment pressure: >30 mmHg or within 30 mmHg of diastolic BP
- Management: Urgent fasciotomy (within 6-8 hours)

## Healing Timeline
- **Tibial plateau**: 12-16 weeks (intra-articular)
- **Tibial shaft**: 12-20 weeks (simple 12-16, comminuted 16-20, open 16-24)
- **Ankle**: 8-12 weeks`,
        mnemonics: [
          { text: "Compartment 5 P's", explanation: "Pain-Pressure-Paresthesia-Pallor-Pulselessness (pain out of proportion most sensitive)" },
          { text: "Compartment Pressure >30 mmHg", explanation: "Fasciotomy needed" },
          { text: "Vascular injury 2-5%", explanation: "Anterior tibial most common" }
        ],
        keyPoints: [
          "Vascular injury 2-5%; anterior tibial artery most common",
          "Compartment syndrome emergency; fasciotomy within 6-8 hours",
          "Pain out of proportion most sensitive sign",
          "Compartment pressure >30 mmHg → fasciotomy",
          "Healing: plateau 12-16 weeks, shaft 12-20 weeks, ankle 8-12 weeks"
        ],
        textbookRefs: [
          { book: "Maheshwari's Essential Orthopaedics", chapter: "Lower Limb Fractures", edition: "6th" },
          { book: "Apley's System of Orthopaedics and Fractures", chapter: "Compartment Syndrome", edition: "10th" }
        ]
      },
      {
        layer: 3,
        slug: "tibia-ankle-layer-3-clinical",
        title: "Tibia & Ankle Fractures - Clinical Management",
        estimatedMinutes: 25,
        summary: "Treatment approaches and management strategies for tibial and ankle fractures.",
        contentMd: `# Tibia & Ankle Fractures - Clinical Management

## Tibial Plateau Management
- **Assessment**: X-ray (AP, lateral, 45°), CT essential for operative planning
- **Non-op**: Non-displaced (<5 mm), no varus/valgus; cast 4-6 weeks, protected weight-bearing
- **ORIF**: Displaced >5 mm, steps/gaps, comminuted; plate fixation, bone graft for depression
- **Post-op**: Immobilize 4-6 weeks, protected weight-bearing 6-12 weeks, early ROM

## Tibial Shaft Fractures
- **IM Nailing** (Gold standard): 95% union, early mobilization, full weight-bearing, low infection
- **Plate Fixation**: Alternative (IM nail contraindicated, segmental, pathological)
- **Open Fractures**: IV antibiotics <3 hours, wound debridement, external fixation initially, vascular assessment, serial debridements, plastic surgery for Type IIIB

## Ankle Fractures
- **Non-op**: Non-displaced Type A Weber; cast 4-6 weeks, non-weight-bearing 2-3 weeks
- **ORIF**: Displaced (especially Weber B, C); fix lateral (plate), medial (screw), posterior if >25% plafond, syndesmosis if disrupted
- **Timing**: Urgent 24-48 hours
- **Post-op**: Cast 4-6 weeks, non-weight-bearing 4-6 weeks, ROM early`,
        mnemonics: [
          { text: "Plateau ORIF: >5mm or comminuted", explanation: "Complex fractures need surgery" },
          { text: "Shaft IM Nail", explanation: "95% union, early weight-bearing" },
          { text: "Ankle ORIF: Lateral, Medial, Syndesmosis", explanation: "Fix all components" }
        ],
        keyPoints: [
          "Plateau: CT for operative planning; ORIF if displaced or comminuted",
          "Shaft: IM nailing gold standard; 95% union, early weight-bearing",
          "Open: Antibiotics <3 hours, serial debridement, external fix initially",
          "Ankle ORIF: Fix lateral, medial, assess syndesmosis",
          "Weight-bearing: IM nail immediate; comminuted protected 4-6 weeks"
        ],
        textbookRefs: [
          { book: "Maheshwari's Essential Orthopaedics", chapter: "Lower Limb Fractures", edition: "6th" },
          { book: "Apley's System of Orthopaedics and Fractures", chapter: "Fracture Treatment", edition: "10th" }
        ]
      },
      {
        layer: 4,
        slug: "tibia-ankle-layer-4-exam",
        title: "Tibia & Ankle Fractures - Exam Preparation",
        estimatedMinutes: 20,
        summary: "Case-based management decisions and high-yield exam scenarios.",
        contentMd: `# Tibia & Ankle Fractures - Exam Preparation

## Case 1: Tibial Plateau Type V Fracture
**Scenario**: 45-year-old RTA, Schatzker Type V bicondylar fracture.
**Management**: (1) CT scan essential, (2) ORIF indicated (dual incisions), (3) Buttress plates medial and lateral, (4) Bone graft if depression, (5) Post-op immobilize 4-6 weeks, protected weight-bearing 6-12 weeks.

## Case 2: Compartment Syndrome with Fracture
**Scenario**: 32-year-old crush injury, comminuted fracture, pain out of proportion.
**Management**: (1) High clinical suspicion, (2) Compartment pressure if doubt, (3) Urgent fasciotomy within 6-8 hours, (4) IM nailing post-fasciotomy, (5) Monitor rhabdomyolysis (myoglobin, hyperkalemia, AKI).

## Case 3: Type IIIB Open Fracture
**Scenario**: 28-year-old RTA, Type IIIB, significant soft tissue loss.
**Management**: (1) Vascular assessment, (2) IV antibiotics <3 hours, (3) Debridement devitalized tissue, (4) External fixation initially, (5) Plastic surgery consult (flap coverage), (6) Serial debridements, (7) Definitive IM nailing once soft tissue stable.

## Case 4: Weber Type C Ankle with Syndesmosis
**Scenario**: 55-year-old fall, Weber C fibular, medial malleolus, syndesmosis disruption.
**Management**: (1) ORIF urgent (24-48 hours), (2) Lateral: plate fixation fibula, (3) Medial: screw fixation, (4) Syndesmosis: screw or suture button if disrupted, (5) Post-op cast/boot 4-6 weeks, non-weight-bearing 4-6 weeks.`,
        mnemonics: [
          { text: "Compartment: Pain >> findings", explanation: "Fasciotomy within 6-8 hours" },
          { text: "Shaft IM Nail: 95% union", explanation: "Early weight-bearing" },
          { text: "Ankle ORIF: Lateral, Medial, Syndesmosis", explanation: "All components" }
        ],
        keyPoints: [
          "Plateau Type V: ORIF for displaced intra-articular",
          "Shaft: IM nailing; 95% union, early mobilization",
          "Compartment syndrome: Emergency fasciotomy within 6-8 hours",
          "Open Type IIIB: External fixation, plastic surgery, flap coverage",
          "Ankle: ORIF for displaced; fix all components"
        ],
        textbookRefs: [
          { book: "Maheshwari's Essential Orthopaedics", chapter: "Lower Limb Fractures", edition: "6th" },
          { book: "Apley's System of Orthopaedics and Fractures", chapter: "Fracture Treatment", edition: "10th" }
        ]
      },
      {
        layer: 5,
        slug: "tibia-ankle-layer-5-active-recall",
        title: "Tibia & Ankle Fractures - Active Recall",
        estimatedMinutes: 15,
        summary: "Key Q&A for tibial and ankle fracture management mastery.",
        contentMd: `# Active Recall - Tibia & Ankle Fractures

**Q1**: Classify Schatzker tibial plateau fractures and how type affects management.
**A1**: **Schatzker Types**: (I) Simple split, (II) Split-depression, (III) Pure depression, (IV) Medial, (V) Bicondylar, (VI) Metaphyseal separation. **Management**: Types I-II non-op if <5mm displacement; Types III-VI usually ORIF (plates, screws, bone graft). **Key**: CT scan essential for operative planning in complex types.

**Q2**: What are risk factors for compartment syndrome and why is early recognition critical?
**A2**: **Risk factors**: High-energy crush, significant bleeding, comminuted fractures, anterior compartment. **Signs**: Pain out of proportion (MOST SENSITIVE), pressure, paresthesia, pallor, pulselessness. **Critical**: Muscle necrosis irreversible after 6-8 hours. Waiting for all "5 P's" delays treatment. **Management**: Urgent fasciotomy if suspicion high or pressure >30 mmHg.

**Q3**: Describe management of Type IIIB open tibial fracture.
**A3**: **Type IIIB**: Severe soft tissue damage, bone loss, flap coverage needed. **Management**: (1) Vascular assessment, (2) IV antibiotics <3 hours (broad-spectrum), (3) Wound debridement, (4) External fixation initially, (5) Plastic surgery consult (flap transfer), (6) Serial debridements, (7) IM nailing once soft tissue stable, (8) Monitor infection, compartment syndrome.

**Q4**: Why is IM nailing gold standard for tibial shaft fractures?
**A4**: **Advantages**: (1) Load-sharing (nail shares load), (2) Preserves blood supply, (3) 95-98% union rate, (4) Early mobilization/weight-bearing, (5) Low infection, (6) Minimal soft tissue trauma. **vs Plate**: Larger incisions, more soft tissue stripping, slower union, higher infection. **Plate indications**: IM nail contraindicated (distal fractures, small bone), segmental.

**Q5**: Why do 80% of tibial shaft fractures have fibular fractures?
**A5**: **Reason**: Tibia and fibula connected; high-energy fracture breaks both. **Significance**: (1) Indicates comminuted, unstable fracture, (2) IM nail provides stability for both, (3) Fibular support lost; fracture heals slower, (4) Don't miss on imaging.

**Q6**: What is syndesmotic injury and how is it managed?
**A6**: **Syndesmosis**: Tibiofibular ligament. **Injury**: Disruption from external rotation. **Associated**: Weber B (may) and C (usually). **Assessment**: External rotation stress test, widened medial clear space. **Management**: (1) Fix fibula first, (2) Assess syndesmosis, (3) If disrupted: syndesmotic screw or suture button, (4) Screw removal at 8-12 weeks. **Outcome**: Untreated → chronic instability.

**Q7**: Compare Schatzker and Weber classifications.
**A7**: **Schatzker**: Tibial PLATEAU fractures (knee, intra-articular), Types I-VI based on pattern. **Weber**: Fibular fractures (ankle), Types A-C based on location relative to syndesmosis. **Different sites**: Knee vs ankle. **Different purposes**: Schatzker guides knee treatment; Weber indicates ankle stability.

**Q8**: Patient has pain out of proportion after tibial fracture. Differential diagnosis?
**A8**: **Differential**: (1) **Compartment syndrome** (most concerning, hallmark), (2) Severe fracture pain, (3) Vascular injury, (4) Fat embolism. **Action**: (1) High clinical suspicion, (2) Examine compartments, (3) Measure pressure if doubt, (4) Prepare fasciotomy, (5) Check pulses. **Key**: Pain out of proportion = compartment syndrome until proven otherwise.

**Q9**: Manage Weber Type C ankle with syndesmosis disruption.
**A9**: **Weber Type C**: Above syndesmosis, unstable. **Management**: (1) ORIF urgent (24-48 hours), (2) Lateral: fix fibula first with plate, (3) Medial: fix if displaced, (4) Syndesmosis: screw or suture button if disrupted, (5) Post-op: cast 4-6 weeks, non-weight-bearing 4-6 weeks, (6) Screw removal at 8-12 weeks. **Critical**: Proper syndesmotic fixation essential for stability.

**Q10**: Differences between simple and open tibial fractures?
**A10**: **Simple**: Skin intact, no communication. **Open**: Communicates with skin (Gustilo I-III). **Management**: Antibiotics simple=prophylaxis, open=IV <3 hours; wound care simple=clean, open=debride/leave open; fixation simple=ORIF, open=external initially. **Complications**: Simple non-union 5-10%, malunion, stiffness. **Open**: Infection 20-50% Type I, 50%+ Type IIIB, osteomyelitis, amputation. **Outcomes**: Open worse prognosis, longer healing.`,
        mnemonics: [
          { text: "Schatzker I-VI", explanation: "Simple to Bicondylar to Separation" },
          { text: "Weber A-B-C", explanation: "Below-At-above syndesmosis" },
          { text: "Compartment: Pain >> findings", explanation: "Fasciotomy 6-8 hours" }
        ],
        keyPoints: [
          "Schatzker Type V: ORIF dual fixation",
          "Shaft: IM nailing gold standard; 95% union",
          "Fibular fracture 80% with shaft fractures",
          "Compartment syndrome: Pain out of proportion, urgent fasciotomy",
          "Open Type IIIB: External fixation, plastic surgery flap, serial debridement"
        ],
        textbookRefs: [
          { book: "Maheshwari's Essential Orthopaedics", chapter: "Lower Limb Fractures", edition: "6th" },
          { book: "Apley's System of Orthopaedics and Fractures", chapter: "Lower Limb Fractures", edition: "10th" }
        ]
      }
    ]
  }
];
