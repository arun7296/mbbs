// 5-layer lessons for all General Anatomy topics (Module AN-MOD-08)
import type { TopicLessons } from "./content-loader";

export const generalAnatomyLessons: TopicLessons[] = [
  // ─── Topic 1: Bones: Classification & Ossification ──────────
  {
    topicCode: "AN-MOD-08-TOP-01",
    layers: [
      { layer: 1, slug: "bones-classification-ossification-foundation", title: "Bones: Classification & Ossification - Foundation", estimatedMinutes: 20,
        summary: "Bones form the rigid framework of the body. They are classified by shape into long, short, flat, irregular, sesamoid, and pneumatic types. Ossification is the process of bone formation, occurring via intramembranous or endochondral pathways.",
        contentMd: `# Bones: Classification & Ossification

## Functions of Bone
- **Support**: Framework for body
- **Protection**: Brain (skull), heart/lungs (thoracic cage), spinal cord (vertebral column)
- **Movement**: Lever system for muscles
- **Mineral storage**: Calcium and phosphorus reservoir
- **Haematopoiesis**: Red marrow produces blood cells

## Classification of Bones by Shape

| Type | Features | Examples |
|------|----------|----------|
| **Long** | Length > width; shaft (diaphysis) + 2 ends (epiphyses); medullary cavity present | Humerus, femur, tibia, fibula, metacarpals, phalanges |
| **Short** | Roughly cuboidal; spongy bone covered by thin compact bone | Carpal bones, tarsal bones |
| **Flat** | Two plates of compact bone with spongy bone (diploe) between | Skull vault bones, sternum, ribs, scapula |
| **Irregular** | Complex shapes that do not fit other categories | Vertebrae, hip bone, sphenoid, ethmoid |
| **Sesamoid** | Develop within tendons; reduce friction | Patella (largest), pisiform, fabella |
| **Pneumatic** | Contain air-filled spaces (sinuses) | Maxilla, frontal, sphenoid, ethmoid, mastoid part of temporal |

## Parts of a Long Bone

Think of a long bone as a **bamboo stick** - hollow in the middle with thickened ends.

- **Diaphysis (shaft)**: Compact bone surrounding the medullary (marrow) cavity
- **Epiphysis**: Expanded articular ends; covered by articular cartilage
- **Metaphysis**: Region between diaphysis and epiphysis; growth plate (physis) is located here in growing bone
- **Periosteum**: Outer covering of bone (except at articular surfaces)
- **Endosteum**: Inner lining of medullary cavity

## Ossification: Basic Concepts

Ossification = process of bone formation from mesenchymal tissue.

### Two Types of Ossification

| Feature | Intramembranous | Endochondral |
|---------|----------------|--------------|
| **Template** | Mesenchyme directly | Cartilage model first |
| **Process** | Mesenchymal cells differentiate directly into osteoblasts | Cartilage model replaced by bone |
| **Examples** | Flat bones of skull vault, clavicle (partly) | Most long bones, vertebrae, bones of base of skull |
| **Analogy** | Building directly on bare ground | First making a clay model, then replacing with concrete |

### Ossification Centers
- **Primary center**: Appears first, usually in the shaft (diaphysis) of long bones; appears during intrauterine life
- **Secondary center**: Appears later, usually at the ends (epiphyses); appears mostly after birth

> **Clinical Pearl**: The pattern and timing of ossification center appearance is used to determine bone age in medicolegal practice and pediatric endocrinology.`,
        mnemonics: [
          { text: "FLAT bones = FLAt plates with Diploe", explanation: "Flat bones have two plates of compact bone with diploe (spongy bone) sandwiched between them. Examples: skull vault, sternum, ribs, scapula." },
          { text: "Some People Find Irregular Skeletons Puzzling", explanation: "Classification of bones by shape: Sesamoid, Pneumatic, Flat, Irregular, Short (cuboidal), and (P)Long. Helps remember all 6 types." }
        ],
        keyPoints: [
          "6 types of bones by shape: Long, Short, Flat, Irregular, Sesamoid, Pneumatic",
          "Patella is the largest sesamoid bone in the body",
          "Long bones have diaphysis (shaft), epiphysis (ends), and metaphysis (growth plate region)",
          "Intramembranous ossification: mesenchyme directly to bone (flat bones of skull vault)",
          "Endochondral ossification: cartilage model replaced by bone (most long bones)",
          "Primary ossification center appears in diaphysis during intrauterine life",
          "Secondary ossification center appears in epiphysis, mostly after birth"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "General Anatomy - Ch 3 (Osteology)", edition: "8th" }] },

      { layer: 2, slug: "bones-classification-ossification-mechanism", title: "Bones: Classification & Ossification - Mechanism", estimatedMinutes: 30,
        summary: "Detailed mechanisms of intramembranous and endochondral ossification, growth in length and width, and laws governing ossification center appearance.",
        contentMd: `# Ossification Mechanisms in Detail

## Intramembranous Ossification - Step by Step
1. **Mesenchymal condensation**: Mesenchymal cells aggregate at site of future bone
2. **Osteoblast differentiation**: Cells differentiate into osteoblasts
3. **Osteoid secretion**: Osteoblasts secrete osteoid (unmineralized bone matrix)
4. **Mineralization**: Calcium and phosphate deposited in osteoid
5. **Woven bone formation**: Irregular woven bone formed first
6. **Remodeling**: Woven bone replaced by lamellar (mature) bone

> Bones formed: Frontal, parietal, parts of occipital and temporal, clavicle (partly)

## Endochondral Ossification - Step by Step
1. **Cartilage model**: Hyaline cartilage model forms in shape of future bone
2. **Perichondrial ossification**: Collar of bone forms around mid-shaft via periosteal bud invasion
3. **Primary center**: Cartilage cells in center hypertrophy, calcify, and die; osteoblasts invade and lay down bone (diaphysis)
4. **Medullary cavity**: Osteoclasts resorb central bone creating marrow cavity
5. **Secondary centers**: Epiphyseal cartilage undergoes same process
6. **Growth plate (physis)**: Persists between epiphysis and diaphysis until skeletal maturity

## Zones of Growth Plate (Epiphyseal Plate)

From epiphysis toward diaphysis:

| Zone | Activity |
|------|----------|
| **Reserve (Resting)** | Storage of lipids and glycogen; stem cell reservoir |
| **Proliferative** | Active chondrocyte division; columns of flattened cells |
| **Hypertrophic** | Chondrocytes enlarge; matrix calcifies |
| **Calcification** | Matrix calcification; chondrocyte death |
| **Ossification** | Osteoblasts lay down bone on calcified cartilage scaffold |

**Mnemonic**: **R**emember **P**eople **H**ave **C**alloused **O**ld feet

## Growth in Length vs Width

| Parameter | Length | Width |
|-----------|--------|-------|
| **Mechanism** | Endochondral (at growth plate) | Appositional (from periosteum) |
| **Location** | Epiphyseal plate | Periosteal surface |
| **Cells** | Chondrocytes proliferate | Osteoblasts on periosteum deposit bone |
| **Ceases at** | Closure of growth plate (epiphyseal fusion) | Continues throughout life (slowly) |

## Laws of Ossification

### 1. Law of Ossification of Epiphyses
- The epiphysis that is the **growing end** of a bone (i.e., the end contributing more to longitudinal growth) is the **last to fuse**
- Growing end of a bone = end where secondary center appears first but fuses last

### 2. Applied Rule for Upper and Lower Limbs
| Limb | Growing End | Appears First | Fuses Last |
|------|-------------|---------------|------------|
| **Upper limb** | Upper end of humerus, Lower ends of radius and ulna | Elbow: appears first | Shoulder/wrist: fuses last |
| **Lower limb** | Lower end of femur, Upper end of tibia | Knee: appears first | Hip/ankle: fuses last |

**Key Rule**: In both limbs, the growing ends are **towards the knee** conceptually - Upper limb grows AWAY from elbow, Lower limb grows TOWARDS knee.

### 3. Exceptions to Growing End Rule
- The clavicle ossifies first in intramembranous bone yet has a secondary center at its sternal end (appears at 15-17 years, fuses at 25 years - last epiphysis to fuse in body)

## Timetable of Important Ossification Centers

| Center | Appears | Fuses |
|--------|---------|-------|
| Lower end of femur | 36th week IUL (9th month) | 20 years |
| Upper end of tibia | At birth / soon after | 20 years |
| Calcaneum | 3rd month IUL | - |
| Talus | 6th month IUL | - |
| Sternal end of clavicle | 15-17 years | 25 years (last to fuse) |

> **Clinical Pearl**: Lower end of femur ossification center is present at birth - used as a sign of full-term maturity in medicolegal cases.`,
        mnemonics: [
          { text: "Remember People Have Calloused Old feet", explanation: "Zones of epiphyseal growth plate from epiphysis to diaphysis: Reserve, Proliferative, Hypertrophic, Calcification, Ossification" },
          { text: "Elbow First to Come, Last to Go from KNEE", explanation: "In upper limb, secondary centers appear first around elbow but growing ends (shoulder/wrist) fuse last. In lower limb, knee region secondary centers appear first (lower femur at 36 weeks IUL) and growing ends are toward the knee." }
        ],
        keyPoints: [
          "Endochondral ossification involves cartilage model replacement by bone",
          "5 zones of growth plate: Reserve, Proliferative, Hypertrophic, Calcification, Ossification",
          "Growth in length = at epiphyseal plate; Growth in width = from periosteum (appositional)",
          "Growing end: secondary center appears first but fuses last",
          "Lower end of femur: first secondary center to appear (36th week IUL) - sign of full-term maturity",
          "Sternal end of clavicle: last epiphysis to fuse in the body (25 years)",
          "Upper limb grows away from elbow; Lower limb grows toward knee"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "General Anatomy - Ch 3 (Osteology)", edition: "8th" }] },

      { layer: 3, slug: "bones-classification-ossification-clinical", title: "Bones: Classification & Ossification - Clinical", estimatedMinutes: 20,
        summary: "Clinical applications of ossification knowledge including bone age determination, fractures in children, rickets, achondroplasia, and medicolegal significance.",
        contentMd: `# Clinical Applications

## Bone Age Determination
- X-ray of left hand and wrist compared with standard atlas (Greulich and Pyle atlas)
- Used in:
  - **Pediatric endocrinology**: Growth hormone deficiency, precocious puberty, hypothyroidism
  - **Medicolegal practice**: Age estimation of juveniles (important in Indian courts for determining if accused is minor)
  - **Orthodontics**: Timing of treatment

> **Indian Clinical Context**: Bone age estimation is frequently requested by courts under the Juvenile Justice Act. The appearance and fusion of ossification centers is a key tool used by forensic medicine experts.

## Fractures and Growth Plate

### Salter-Harris Classification (Epiphyseal Injuries in Children)
- Type I: Fracture through growth plate only (slip)
- Type II: Through growth plate + metaphysis (most common)
- Type III: Through growth plate + epiphysis
- Type IV: Through metaphysis + growth plate + epiphysis
- Type V: Crush injury to growth plate

**Mnemonic**: **S**traight across, **A**bove, **L**ower (below), **T**hrough everything, **E**rasure (crush)

- Growth plate injuries can lead to **growth arrest** and **limb length discrepancy**
- The **germinal (proliferative) zone** is the weakest zone and fractures usually pass through the **hypertrophic zone**

## Rickets (Vitamin D Deficiency)
- Defective mineralization of growth plate cartilage and osteoid
- **Growth plate widens** (especially hypertrophic zone) as cartilage fails to calcify
- Clinical features: Bow legs (genu varum), knock knees (genu valgum), rachitic rosary (beading at costochondral junctions), craniotabes
- Common in India due to vegetarian diets, dark skin, and indoor lifestyle

## Achondroplasia
- Most common form of short-limbed dwarfism
- Autosomal dominant (FGFR3 gene mutation)
- **Endochondral ossification impaired** (growth plate dysfunction) but **intramembranous ossification normal**
- Result: Short limbs (rhizomelic shortening) with normal trunk and large head
- Skull vault (intramembranous) grows normally but base of skull (endochondral) is affected → foramen magnum stenosis

## Osteogenesis Imperfecta
- Defective type I collagen → brittle bones
- Multiple fractures with minimal trauma
- Blue sclera, hearing loss, dental abnormalities

## Avascular Necrosis (AVN)
- Common sites: Head of femur, scaphoid, head of humerus, talus
- These areas have **retrograde blood supply** that is vulnerable
- Common in India: Post-traumatic (neck of femur fracture), steroid use, alcoholism

## Medicolegal Significance
- **Full-term maturity**: Ossification center at lower end of femur (present at 36 weeks)
- **Age of criminal responsibility**: Based on ossification center appearance/fusion
- **Identification**: Bone age helps determine age of skeletal remains`,
        mnemonics: [
          { text: "SALTER for Salter-Harris types", explanation: "Straight across (Type I - through plate), Above (Type II - metaphysis), Lower/beLow (Type III - epiphysis), Through all (Type IV - all three), Erasure/crush (Type V)" },
          { text: "Rickets = Rotten Cartilage at Growth Plate", explanation: "In rickets, growth plate widens because the hypertrophic zone cartilage fails to calcify (mineralization defect). Remember: Rickets affects the GROWTH PLATE, Osteomalacia affects the OSTEOID in adults." }
        ],
        keyPoints: [
          "Bone age: X-ray of left hand and wrist, used for age estimation in medicolegal and endocrine contexts",
          "Salter-Harris Type II (through growth plate + metaphysis) is the most common epiphyseal injury",
          "Rickets: growth plate widens due to failure of calcification in hypertrophic zone",
          "Achondroplasia: endochondral ossification impaired, intramembranous normal - short limbs, normal skull vault",
          "Lower end of femur ossification center at birth = sign of full-term maturity (medicolegal importance)",
          "AVN common at femoral head, scaphoid, humeral head, talus due to retrograde blood supply"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "General Anatomy - Osteology", edition: "8th" }] },

      { layer: 4, slug: "bones-classification-ossification-exam", title: "Bones: Classification & Ossification - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield one-liners and frequently tested points on bone classification and ossification for NEXT and NEET PG examinations.",
        contentMd: `# Exam High Yield

## One-Liners

- Largest sesamoid bone: **Patella**
- Only long bone to ossify by intramembranous ossification: **Clavicle** (partly)
- First bone to ossify in the body: **Clavicle** (5th-6th week IUL)
- First secondary ossification center to appear: **Lower end of femur** (36th week IUL)
- Last epiphysis to fuse: **Sternal end of clavicle** (25 years)
- Growing end of humerus: **Upper end** (fuses last at ~20 years)
- Growing end of femur: **Lower end** (fuses last at ~20 years)
- Growing end of radius: **Lower end**
- Growing end of tibia: **Upper end**
- Weakest zone of growth plate for fractures: Passes through **hypertrophic zone**
- Most common Salter-Harris type: **Type II**
- Bone age X-ray: **Left hand and wrist**
- Bones forming by intramembranous ossification: **Skull vault bones, face bones, clavicle**
- Sign of full-term maturity: **Ossification center at lower end of femur**
- Diploe is found in: **Flat bones of skull**

## Comparison Table: Intramembranous vs Endochondral

| Feature | Intramembranous | Endochondral |
|---------|----------------|--------------|
| Template | Mesenchyme | Cartilage |
| Cartilage model | Absent | Present |
| Examples | Skull vault, clavicle | Long bones, base of skull |
| Affected in achondroplasia | No | Yes |
| Defective in rickets | No | Yes (growth plate) |

## Previous Year Themes
- Ossification centers and their timing (frequently asked in NEXT Step 1)
- Growing end of individual bones
- Salter-Harris classification (especially Type II)
- Bone age estimation (medicolegal importance)
- Achondroplasia mechanism (endochondral vs intramembranous)`,
        mnemonics: [
          { text: "CLAvicle = First to Come, Last to Leave", explanation: "Clavicle is the first bone to start ossifying (5-6 weeks IUL) and its sternal end is the last epiphysis to fuse (25 years)." },
          { text: "Knee to Know: Lower Femur, Upper Tibia", explanation: "Growing ends of lower limb bones point toward the knee. Lower end of femur and upper end of tibia are the growing ends. Lower end of femur is the first secondary center to appear." }
        ],
        keyPoints: [
          "Clavicle: first bone to ossify (5-6 weeks IUL), only long bone with intramembranous ossification",
          "Lower end of femur: first secondary center (36 weeks IUL), sign of full-term maturity",
          "Sternal end of clavicle: last epiphysis to fuse (25 years)",
          "Salter-Harris Type II is most common epiphyseal fracture",
          "Achondroplasia: endochondral affected, intramembranous spared"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "General Anatomy - Ch 3", edition: "8th" }] },

      { layer: 5, slug: "bones-classification-ossification-recall", title: "Bones: Classification & Ossification - Active Recall", estimatedMinutes: 10,
        summary: "Flashcard-style questions for rapid self-testing on bone classification and ossification.",
        contentMd: `# Active Recall

**Q1:** Name the 6 types of bones by shape.
> Long, Short, Flat, Irregular, Sesamoid, Pneumatic

**Q2:** What is the largest sesamoid bone?
> Patella

**Q3:** Which is the first bone to ossify in the body?
> Clavicle (5th-6th week of intrauterine life)

**Q4:** What are the two types of ossification?
> Intramembranous (mesenchyme to bone directly) and Endochondral (cartilage model replaced by bone)

**Q5:** Name the 5 zones of the growth plate from epiphysis to diaphysis.
> Reserve, Proliferative, Hypertrophic, Calcification, Ossification

**Q6:** Which is the first secondary ossification center to appear and when?
> Lower end of femur, at 36th week of intrauterine life

**Q7:** Which is the last epiphysis to fuse in the body?
> Sternal end of clavicle (25 years)

**Q8:** What is the growing end of the humerus?
> Upper end

**Q9:** Which ossification type is affected in achondroplasia?
> Endochondral (intramembranous is normal)

**Q10:** What X-ray is used for bone age determination?
> X-ray of left hand and wrist

**Q11:** What is the most common Salter-Harris fracture type?
> Type II (through growth plate + metaphysis)

**Q12:** What bone finding indicates full-term maturity at birth?
> Presence of ossification center at lower end of femur`,
        mnemonics: [],
        keyPoints: ["12 recall questions covering classification, ossification types, centers, laws, and clinical applications"],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "General Anatomy - Ch 3", edition: "8th" }] },
    ],
  },

  // ─── Topic 2: Joints: Classification & Movements ────────────
  {
    topicCode: "AN-MOD-08-TOP-02",
    layers: [
      { layer: 1, slug: "joints-classification-movements-foundation", title: "Joints: Classification & Movements - Foundation", estimatedMinutes: 20,
        summary: "Joints (articulations) are points where two or more bones meet. They are classified structurally into fibrous, cartilaginous, and synovial types. Understanding joint classification is fundamental to predicting the range and type of movements possible.",
        contentMd: `# Joints: Classification & Movements

## Definition
A joint (articulation) is a point of contact between two or more bones, or between bone and cartilage.

## Structural Classification of Joints

### 1. Fibrous Joints (Synarthroses)
Bones united by fibrous tissue. Generally **immovable**.

| Type | Description | Example |
|------|-------------|---------|
| **Suture** | Thin layer of fibrous tissue; found only in skull | Coronal, sagittal, lambdoid sutures |
| **Syndesmosis** | Bones joined by interosseous membrane or ligament | Inferior tibiofibular joint, interosseous membrane of forearm |
| **Gomphosis** | Peg-in-socket; periodontal ligament | Tooth in its socket |

### 2. Cartilaginous Joints (Amphiarthroses)
Bones united by cartilage. **Slightly movable**.

| Type | Cartilage | Movability | Example |
|------|-----------|------------|---------|
| **Primary (Synchondrosis)** | Hyaline cartilage | Immovable; temporary (replaced by bone) | Epiphyseal growth plate, 1st sternocostal joint, spheno-occipital synchondrosis |
| **Secondary (Symphysis)** | Fibrocartilage disc | Slightly movable; permanent | Pubic symphysis, intervertebral disc, manubriosternal joint |

### 3. Synovial Joints (Diarthroses)
Bones separated by a joint cavity. **Freely movable**.

**Features of ALL synovial joints**:
- Articular cartilage (hyaline) covering bone ends
- Joint cavity filled with synovial fluid
- Articular capsule (fibrous + synovial membrane)
- Synovial membrane (lines capsule, does NOT cover articular cartilage)
- Ligaments (stabilize the joint)

> **Analogy**: Think of a synovial joint as a **plastic bag** (capsule) enclosing two ice-cream scoops (bone ends covered in smooth cartilage), with a thin layer of oil (synovial fluid) between them to reduce friction.

## Types of Synovial Joints

| Type | Shape | Axes | Movements | Example |
|------|-------|------|-----------|---------|
| **Plane (Gliding)** | Flat surfaces | Multi-axial (gliding) | Gliding/sliding | Intercarpal, intertarsal, acromioclavicular |
| **Hinge (Ginglymus)** | Pulley-shaped | Uniaxial | Flexion-Extension | Elbow (humeroulnar), ankle, interphalangeal |
| **Pivot (Trochoid)** | Ring + pivot | Uniaxial | Rotation | Atlanto-axial (median), superior radioulnar |
| **Condyloid (Ellipsoid)** | Oval convex in oval concave | Biaxial | Flex-Ext + Ab-Add | Wrist (radiocarpal), MCP joints, atlanto-occipital |
| **Saddle (Sellar)** | Both surfaces concavo-convex | Biaxial | Flex-Ext + Ab-Add + (some rotation) | 1st carpometacarpal (thumb), sternoclavicular |
| **Ball-and-Socket (Spheroidal)** | Sphere in cup | Multi-axial | All movements + rotation | Shoulder (glenohumeral), hip |

## Basic Movements at Joints

- **Flexion**: Bending, decreasing angle between parts
- **Extension**: Straightening, increasing angle
- **Abduction**: Movement away from midline
- **Adduction**: Movement toward midline
- **Rotation**: Movement around longitudinal axis (medial/lateral)
- **Circumduction**: Combination of flexion, extension, abduction, adduction (cone-shaped movement)
- **Pronation/Supination**: Forearm rotation
- **Inversion/Eversion**: Sole of foot turned inward/outward`,
        mnemonics: [
          { text: "SuSyGo for Fibrous joints", explanation: "Suture (skull), Syndesmosis (tibiofibular membrane), Gomphosis (tooth in socket) - the three types of fibrous joints." },
          { text: "Happy People Play Catch Every Saturday Before School", explanation: "Types of synovial joints: Hinge, Pivot, Plane, Condyloid, Ellipsoid (=Condyloid), Saddle, Ball-and-socket, Spheroidal (=Ball-and-socket). Simplified: Hinge, Pivot, Plane, Condyloid, Saddle, Ball-and-socket = 6 types." }
        ],
        keyPoints: [
          "3 structural types of joints: Fibrous (immovable), Cartilaginous (slightly movable), Synovial (freely movable)",
          "Fibrous joints: Suture, Syndesmosis, Gomphosis",
          "Primary cartilaginous (synchondrosis) = hyaline cartilage, temporary; Secondary (symphysis) = fibrocartilage, permanent",
          "All synovial joints have: articular cartilage, joint cavity, synovial membrane, capsule, synovial fluid",
          "6 types of synovial joints: Plane, Hinge, Pivot, Condyloid, Saddle, Ball-and-socket",
          "Ball-and-socket (shoulder, hip) = most mobile; Hinge (elbow, IP joints) = uniaxial",
          "Circumduction is a combination movement (not rotation) producing a cone-shaped path"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "General Anatomy - Ch 4 (Joints)", edition: "8th" }] },

      { layer: 2, slug: "joints-classification-movements-mechanism", title: "Joints: Classification & Movements - Mechanism", estimatedMinutes: 30,
        summary: "Detailed mechanism of synovial joint function, synovial fluid production, joint stability factors, and biomechanics of different joint types.",
        contentMd: `# Joint Mechanisms in Detail

## Synovial Membrane & Synovial Fluid

### Synovial Membrane
- Lines the inner surface of the joint capsule
- Does NOT cover articular cartilage or intra-articular discs
- Two layers:
  - **Intimal layer** (inner): Synoviocytes (Type A = macrophage-like, Type B = fibroblast-like)
  - **Subintimal layer** (outer): Vascular connective tissue
- Highly vascular - responsible for nourishing the avascular articular cartilage

### Synovial Fluid
- Produced by Type B synoviocytes
- **Composition**: Dialysate of plasma + hyaluronic acid (gives viscosity)
- **Functions**: Lubrication, nutrition of articular cartilage, shock absorption
- Normal volume: 0.5-4 mL in knee joint
- Viscosity due to **hyaluronic acid** (thixotropic - viscosity decreases with movement)

## Articular Cartilage
- **Type**: Hyaline cartilage (except at TMJ and sternoclavicular joint where it is fibrocartilage)
- **Avascular**: Nourished by synovial fluid (diffusion)
- **Aneural**: No nerve supply (hence damage is painless initially)
- Cannot regenerate effectively once damaged

## Factors Maintaining Joint Stability

| Factor | Contribution | Example |
|--------|-------------|---------|
| **Bony configuration** | Shape of articular surfaces | Hip joint (deep acetabulum) |
| **Ligaments** | Passive stabilizers; resist abnormal movement | Cruciate ligaments of knee |
| **Muscles (tone)** | Dynamic (active) stabilizers | Rotator cuff at shoulder |
| **Atmospheric pressure** | Suction effect in sealed cavity | Hip joint |
| **Menisci/Labrum** | Deepen socket, improve congruence | Knee menisci, glenoid labrum |

> **Key Concept**: The most mobile joints sacrifice stability (shoulder), while the most stable joints sacrifice mobility (hip). This is the **stability-mobility trade-off**.

## Intra-articular Structures

### Menisci (Fibrocartilage Discs)
- Found in knee joint (medial and lateral menisci)
- Function: Shock absorption, load distribution, improve congruence, lubrication
- **Medial meniscus**: C-shaped, attached to MCL (more often injured)
- **Lateral meniscus**: O-shaped, not attached to LCL (more mobile, less injured)

### Labrum
- Fibrocartilaginous rim that deepens the socket
- **Glenoid labrum**: Shoulder joint
- **Acetabular labrum**: Hip joint

### Bursae
- Sac-lined synovial membrane filled with fluid
- Reduce friction between structures
- Examples: Suprapatellar bursa, prepatellar bursa, olecranon bursa

## Special Movements at Specific Joints

| Movement | Definition | Joint |
|----------|-----------|-------|
| **Protraction** | Forward movement in horizontal plane | TMJ, scapula |
| **Retraction** | Backward movement in horizontal plane | TMJ, scapula |
| **Elevation** | Upward movement | Mandible (closing mouth), scapula (shrugging) |
| **Depression** | Downward movement | Mandible (opening mouth), scapula |
| **Opposition** | Thumb touches finger tips | 1st CMC joint |
| **Reposition** | Return from opposition | 1st CMC joint |
| **Dorsiflexion** | Foot/toes pulled upward | Ankle |
| **Plantarflexion** | Foot/toes pushed downward | Ankle |

## Blood Supply of Joints (Hilton's Law)
> The nerve supplying a joint also supplies the muscles moving that joint and the skin over the insertion of those muscles.

This law is clinically important: pain from a diseased joint may be referred to the skin area supplied by the same nerve.`,
        mnemonics: [
          { text: "BALM for Joint Stability", explanation: "Bony configuration, Atmospheric pressure, Ligaments (passive), Muscles (active dynamic stabilizers). These 4 factors maintain joint stability." },
          { text: "Hilton's HAM: Hip pain felt At Knee via obturator Medially", explanation: "Hilton's law explains referred pain. Hip joint disease (supplied by obturator nerve) causes pain referred to the medial side of knee (also obturator nerve territory). Important in Indian pediatric practice for detecting hip pathology." }
        ],
        keyPoints: [
          "Synovial membrane has Type A (macrophage) and Type B (fibroblast, produces synovial fluid) synoviocytes",
          "Synovial fluid viscosity is due to hyaluronic acid; it nourishes avascular articular cartilage",
          "Articular cartilage is avascular and aneural - nourished by synovial fluid diffusion",
          "Joint stability: Bony shape + Ligaments (passive) + Muscles (active) + Atmospheric pressure + Menisci/labrum",
          "Stability-mobility trade-off: shoulder (most mobile, least stable) vs hip (very stable, less mobile)",
          "Medial meniscus is C-shaped and attached to MCL - more commonly injured than lateral meniscus",
          "Hilton's Law: nerve supplying a joint also supplies muscles moving it and skin over those muscles' insertions"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "General Anatomy - Ch 4 (Joints)", edition: "8th" }] },

      { layer: 3, slug: "joints-classification-movements-clinical", title: "Joints: Classification & Movements - Clinical", estimatedMinutes: 20,
        summary: "Clinical correlations of joint anatomy including osteoarthritis, rheumatoid arthritis, joint dislocation, ankylosis, and common injuries relevant to Indian clinical practice.",
        contentMd: `# Clinical Applications

## Osteoarthritis (OA)
- **Degenerative joint disease**: Wear and tear of articular cartilage
- Most common joint disease worldwide and in India
- Commonly affected joints: Knee (most common in India), hip, DIP joints (Heberden's nodes), PIP (Bouchard's nodes)
- Pathology: Cartilage destruction, subchondral sclerosis, osteophyte formation, joint space narrowing
- Risk factors in Indian population: Obesity, squatting posture, cross-legged sitting

> **Indian Clinical Context**: Knee OA is extremely common in India, partly due to habitual squatting (Indian toilet, floor sitting). This is a frequent topic in community medicine and orthopedic practice.

## Rheumatoid Arthritis (RA)
- **Autoimmune synovitis**: Inflammatory destruction of synovial membrane
- Primarily affects small joints of hands and feet (MCP, PIP joints)
- **Pannus formation**: Granulation tissue over articular cartilage
- Characteristic: Symmetrical joint involvement, morning stiffness >1 hour
- Spares DIP joints (differentiates from OA)

## Gout
- Monosodium urate crystal deposition in joints
- Classically affects 1st MTP joint (podagra)
- Common in India with changing dietary habits and urbanization

## Joint Dislocations - Key Points
| Joint | Most Common Direction | Structure at Risk |
|-------|-----------------------|-------------------|
| Shoulder | Anterior (95%) | Axillary nerve |
| Hip | Posterior (dashboard injury) | Sciatic nerve |
| Elbow | Posterior | Ulnar nerve |
| Knee | Anterior | Popliteal artery |

## Ankylosis
- **Bony ankylosis**: Complete fusion of joint surfaces by bone (fibrous → bony)
- **Fibrous ankylosis**: Fusion by fibrous tissue
- Causes: Chronic infection (TB - common in India), RA, ankylosing spondylitis, post-traumatic
- TB of joints is a significant cause in Indian clinical practice

## Synovial Joint Pathologies

### Effusion
- Excess synovial fluid in joint cavity
- Tested by **patellar tap test** (knee) or **bulge sign** (small effusions)
- Causes: Trauma, infection, inflammation, OA

### Hemarthrosis
- Blood in joint cavity
- Causes: Fracture extending into joint, hemophilia, ACL tear
- Hemophilia A (Factor VIII deficiency): recurrent hemarthrosis of knees is common

### Baker's Cyst (Popliteal Cyst)
- Herniation of synovial membrane through posterior knee capsule
- Associated with knee OA and RA
- Can rupture and mimic deep vein thrombosis

## Arthroscopy
- Minimally invasive visualization of joint interior
- Most commonly performed on knee joint
- Diagnostic and therapeutic (meniscal repair, ACL reconstruction)

## Congenital Dislocation of Hip (Developmental Dysplasia of Hip - DDH)
- Important pediatric condition in India
- Barlow's test (dislocatable) and Ortolani's test (reducible)
- Screening done at birth in India under universal immunization program visits`,
        mnemonics: [
          { text: "Heberden = DIP, Bouchard = PIP in OA", explanation: "In osteoarthritis, Heberden's nodes affect DIP joints and Bouchard's nodes affect PIP joints. Remember: H comes before B in alphabet, D comes before P. Also: Her(D)en = DIP." },
          { text: "APES for structures at risk in common dislocations", explanation: "Anterior shoulder = Axillary nerve, Posterior hip = sciatic (Pelvic nerve), Elbow posterior = ulnar nerve (E), knee = popliteal artery (S for arterial Supply)" }
        ],
        keyPoints: [
          "OA: degenerative, affects knee most commonly in India; risk factors include squatting and obesity",
          "RA: autoimmune synovitis with pannus formation; affects MCP/PIP, spares DIP",
          "Anterior shoulder dislocation: axillary nerve at risk; Posterior hip dislocation: sciatic nerve at risk",
          "Ankylosis (bony/fibrous): TB of joints is an important cause in India",
          "Hemarthrosis in hemophilia most commonly affects the knee",
          "Baker's cyst: popliteal synovial cyst, can mimic DVT when ruptured"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "General Anatomy - Joints + Clinical Anatomy", edition: "8th" }] },

      { layer: 4, slug: "joints-classification-movements-exam", title: "Joints: Classification & Movements - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield exam-focused content on joint classification, types, and clinical correlations for NEXT Step 1 and NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners
- Most mobile joint: **Shoulder (glenohumeral)**
- Most stable joint: **Hip joint**
- Most commonly dislocated joint: **Shoulder**
- Most commonly affected joint in OA in India: **Knee**
- Only synovial joint with fibrocartilage covering: **TMJ and Sternoclavicular joint**
- Largest synovial joint: **Knee**
- Type of joint at pubic symphysis: **Secondary cartilaginous (symphysis)**
- Type of joint at 1st sternocostal joint: **Primary cartilaginous (synchondrosis)**
- Type of joint at 1st CMC (thumb): **Saddle (sellar)**
- Type of joint at atlanto-axial (median): **Pivot**
- Type of joint at atlanto-occipital: **Condyloid (ellipsoid)**
- Gomphosis is found at: **Tooth in socket**
- Synovial fluid viscosity due to: **Hyaluronic acid**
- Hilton's Law refers to: **Nerve supply of joints, muscles, and overlying skin**
- Pannus formation seen in: **Rheumatoid Arthritis**
- Heberden's nodes at: **DIP joints (OA)**
- Podagra (gout) affects: **1st MTP joint**

## Comparison Table: OA vs RA

| Feature | Osteoarthritis | Rheumatoid Arthritis |
|---------|---------------|---------------------|
| Type | Degenerative | Autoimmune inflammatory |
| Age | Elderly | Young/middle-aged |
| Joints | Weight-bearing (knee, hip), DIP | Small joints (MCP, PIP), symmetrical |
| DIP involvement | Yes (Heberden's) | No |
| Morning stiffness | <30 min | >1 hour |
| Pathology | Cartilage loss, osteophytes | Pannus formation, synovitis |

## Frequently Asked Joint Types
| Joint | Classification |
|-------|---------------|
| Knee | Modified hinge (synovial) |
| Elbow (humeroulnar) | Hinge |
| Superior radioulnar | Pivot |
| Wrist (radiocarpal) | Condyloid (ellipsoid) |
| Hip | Ball-and-socket |
| Shoulder | Ball-and-socket |
| 1st CMC | Saddle |
| TMJ | Modified hinge (condyloid) |
| Intervertebral | Secondary cartilaginous (symphysis) between bodies; Plane (synovial) between facets |
| Sacroiliac | Upper 1/3 synovial, lower 2/3 fibrous |`,
        mnemonics: [
          { text: "1st = Special: 1st rib = Synchondrosis, 1st CMC = Saddle", explanation: "The first sternocostal joint is a primary cartilaginous joint (synchondrosis), while 2nd-7th are synovial. The 1st CMC joint (thumb) is saddle type allowing opposition. Both '1st' joints are special and different from the rest." },
          { text: "SMOOTH for Synovial Joint Features", explanation: "Synovial membrane, Menisci/discs (some), O (= cavity/space), Oily fluid (synovial), Tough capsule, Hyaline cartilage covering articular surfaces" }
        ],
        keyPoints: [
          "Shoulder = most mobile; Hip = most stable; Knee = largest synovial joint",
          "TMJ and sternoclavicular joint: synovial joints with fibrocartilage (not hyaline) covering",
          "1st sternocostal = synchondrosis; rest are synovial. 1st CMC = saddle",
          "OA: DIP (Heberden's), weight-bearing; RA: MCP/PIP, pannus, spares DIP",
          "Hilton's Law is a commonly tested concept in NEXT examinations"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "General Anatomy - Ch 4", edition: "8th" }] },

      { layer: 5, slug: "joints-classification-movements-recall", title: "Joints: Classification & Movements - Active Recall", estimatedMinutes: 10,
        summary: "Self-test flashcard questions for rapid revision of joint classification and movements.",
        contentMd: `# Active Recall

**Q1:** Name the 3 structural types of joints.
> Fibrous (immovable), Cartilaginous (slightly movable), Synovial (freely movable)

**Q2:** What are the 3 types of fibrous joints?
> Suture, Syndesmosis, Gomphosis

**Q3:** Differentiate primary and secondary cartilaginous joints.
> Primary (synchondrosis): hyaline cartilage, temporary, immovable (e.g., growth plate). Secondary (symphysis): fibrocartilage, permanent, slightly movable (e.g., pubic symphysis).

**Q4:** Name the 6 types of synovial joints.
> Plane, Hinge, Pivot, Condyloid (Ellipsoid), Saddle, Ball-and-socket

**Q5:** What type of joint is the 1st CMC joint?
> Saddle (sellar) - allows opposition of thumb

**Q6:** What provides viscosity to synovial fluid?
> Hyaluronic acid

**Q7:** State Hilton's Law.
> The nerve supplying a joint also supplies the muscles moving that joint and the skin over the insertion of those muscles.

**Q8:** Which joint is most commonly affected in OA in India?
> Knee joint

**Q9:** What are Heberden's and Bouchard's nodes?
> Heberden's = DIP joint nodes in OA; Bouchard's = PIP joint nodes in OA

**Q10:** What nerve is at risk in posterior hip dislocation?
> Sciatic nerve

**Q11:** What is pannus formation and where is it seen?
> Granulation tissue growing over articular cartilage; seen in Rheumatoid Arthritis

**Q12:** Which are the only synovial joints with fibrocartilage covering?
> TMJ and Sternoclavicular joint`,
        mnemonics: [],
        keyPoints: ["12 recall questions covering classification, synovial joint features, movements, and clinical correlations"],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "General Anatomy - Ch 4", edition: "8th" }] },
    ],
  },

  // ─── Topic 3: Muscles: Types & Actions ──────────────────────
  {
    topicCode: "AN-MOD-08-TOP-03",
    layers: [
      { layer: 1, slug: "muscles-types-actions-foundation", title: "Muscles: Types & Actions - Foundation", estimatedMinutes: 20,
        summary: "Muscles are contractile tissues that produce movement. The three types are skeletal (voluntary, striated), smooth (involuntary, non-striated), and cardiac (involuntary, striated). Understanding origin, insertion, and action concepts is fundamental to musculoskeletal anatomy.",
        contentMd: `# Muscles: Types & Actions

## Three Types of Muscle

| Feature | Skeletal Muscle | Smooth Muscle | Cardiac Muscle |
|---------|----------------|---------------|----------------|
| **Also called** | Voluntary, striated | Involuntary, non-striated, visceral | Involuntary, striated |
| **Striations** | Present | Absent | Present |
| **Control** | Voluntary (somatic nerves) | Involuntary (autonomic) | Involuntary (intrinsic conduction + autonomic modulation) |
| **Nuclei** | Multiple, peripheral | Single, central | 1-2, central |
| **Shape** | Long, cylindrical fibers | Spindle-shaped cells | Branching fibers |
| **Intercalated discs** | Absent | Absent | Present |
| **Regeneration** | Limited (satellite cells) | Good | Very limited |
| **Location** | Attached to skeleton | Walls of viscera, blood vessels | Heart wall (myocardium) |
| **Fatigue** | Yes | Resistant | Highly resistant |

> **Analogy**: Think of skeletal muscle as a **puppet on strings** (voluntary control), smooth muscle as a **thermostat** (automatic regulation), and cardiac muscle as an **electric pump** (self-generating rhythm with automatic control).

## Skeletal Muscle Structure

### Gross Structure
- **Origin**: Proximal attachment, usually fixed (less movable end)
- **Insertion**: Distal attachment, usually mobile (moves during contraction)
- **Belly**: Fleshy, contractile part between origin and insertion
- **Tendon**: Non-contractile fibrous cord attaching muscle to bone
- **Aponeurosis**: Flat, sheet-like tendon (e.g., palmar aponeurosis, abdominal obliques)

### Classification by Shape (Arrangement of Fibers)

| Type | Fiber Arrangement | Example |
|------|-------------------|---------|
| **Parallel (Strap)** | Fibers parallel to line of pull | Sartorius, sternohyoid |
| **Fusiform** | Spindle-shaped with central belly | Biceps brachii, pronator teres |
| **Pennate** | Feather-like: fibers oblique to tendon | - |
| - Unipennate | Fibers on one side of tendon | Extensor digitorum longum |
| - Bipennate | Fibers on both sides | Rectus femoris, dorsal interossei |
| - Multipennate | Multiple rows of fibers | Deltoid |
| **Circular (Sphincter)** | Ring-shaped around an opening | Orbicularis oculi, orbicularis oris |
| **Convergent (Triangular)** | Fan-shaped, converge to single tendon | Pectoralis major, temporalis |

> **Key Concept**: Pennate muscles sacrifice range of motion for **power** (more fibers per unit area). Parallel muscles have greater range of motion but less power.

## Types of Muscle Action

| Type | Definition | Example |
|------|-----------|---------|
| **Prime mover (Agonist)** | Main muscle performing the movement | Biceps in elbow flexion |
| **Antagonist** | Opposes the prime mover | Triceps during elbow flexion |
| **Synergist** | Assists the prime mover | Brachialis assisting biceps |
| **Fixator (Stabilizer)** | Stabilizes the origin so prime mover can act efficiently | Rotator cuff stabilizing shoulder during biceps action |

## Nerve Supply
- **Motor nerve**: Supplies muscle fibers for contraction
- **Sensory nerve**: From muscle spindles (proprioception) and Golgi tendon organs
- **Motor unit**: Single motor neuron + all muscle fibers it innervates
- **Neuromuscular junction**: Motor end plate where nerve meets muscle

## Blood Supply
- Each muscle receives 1-2 named arteries
- Enters at the **neurovascular hilum** (where nerve and vessels enter together)`,
        mnemonics: [
          { text: "Skeletal = Striated + Somatic + Side nuclei", explanation: "Skeletal muscle has striations, is under somatic (voluntary) nerve control, and has peripherally (side) placed multiple nuclei. All three S's." },
          { text: "CARD-I-AC = Central nuclei, Auto-rhythmic, Resistant to fatigue, Discs (intercalated), Involuntary, Always Contracting", explanation: "Key features of cardiac muscle: centrally placed nuclei, intrinsic rhythm, fatigue-resistant, intercalated discs present, involuntary control, contracts throughout life." }
        ],
        keyPoints: [
          "3 types of muscle: Skeletal (voluntary, striated), Smooth (involuntary, non-striated), Cardiac (involuntary, striated)",
          "Only cardiac muscle has intercalated discs (gap junctions for electrical coupling)",
          "Origin = fixed/proximal attachment; Insertion = mobile/distal attachment",
          "Pennate muscles: more power, less range; Parallel muscles: more range, less power",
          "Motor unit = 1 motor neuron + all muscle fibers it innervates",
          "4 types of muscle action: Prime mover (agonist), Antagonist, Synergist, Fixator",
          "Skeletal muscle has limited regeneration via satellite cells; cardiac has very poor regeneration"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "General Anatomy - Ch 5 (Muscles)", edition: "8th" }] },

      { layer: 2, slug: "muscles-types-actions-mechanism", title: "Muscles: Types & Actions - Mechanism", estimatedMinutes: 30,
        summary: "Detailed mechanisms of muscle contraction, types of contraction, lever systems, and the physiological basis of muscle actions including group action of muscles.",
        contentMd: `# Muscle Mechanisms in Detail

## Types of Muscle Contraction

| Type | Length Change | Tension | Example |
|------|-------------|---------|---------|
| **Isotonic (Concentric)** | Shortens | Constant | Lifting a weight (biceps curling) |
| **Isotonic (Eccentric)** | Lengthens | Constant | Lowering a weight slowly |
| **Isometric** | No change | Increases | Holding a weight steady; pushing against a wall |
| **Isokinetic** | Changes at constant speed | Varies | Rehabilitation exercises with special machines |

## Lever Systems in the Body

### Components
- **Fulcrum (F)**: Joint
- **Effort (E)**: Muscle force applied
- **Load (L)**: Resistance (weight of body part + external load)

### Types of Levers

| Class | Arrangement | Example | Advantage |
|-------|-------------|---------|-----------|
| **1st class** | F between E and L | Atlanto-occipital joint (nodding head) | Balance |
| **2nd class** | L between F and E | Standing on tiptoes (ankle) | Power (mechanical advantage) |
| **3rd class** | E between F and L | Elbow flexion (biceps) | Speed and range of motion |

> **Most joints in the body act as 3rd class levers** - the effort (muscle insertion) is between the fulcrum (joint) and the load (distal weight). This sacrifices force for speed and range.

## Group Action of Muscles

No muscle works alone. Muscles work in coordinated groups:

1. **Agonist (Prime Mover)**: Produces the desired movement
2. **Antagonist**: Must relax to allow movement (reciprocal inhibition)
3. **Synergist**: Assists the agonist or prevents unwanted movements
4. **Fixator**: Stabilizes proximal joints so distal joints can move efficiently

### Example: Flexion of Elbow
- Agonist: Biceps brachii + Brachialis
- Antagonist: Triceps brachii (relaxes)
- Synergist: Brachioradialis
- Fixator: Rotator cuff muscles (fix shoulder), scapular stabilizers (fix scapula)

## Muscle-Tendon Relationship: Special Structures

| Structure | Description | Clinical Significance |
|-----------|-------------|----------------------|
| **Tendon sheath (synovial)** | Double-layered sheath around tendon with synovial fluid | Tenosynovitis (inflammation); trigger finger |
| **Retinaculum** | Thickening of deep fascia holding tendons in place | Carpal tunnel (flexor retinaculum) |
| **Bursa** | Synovial fluid-filled sac reducing friction | Bursitis (prepatellar, olecranon, subacromial) |
| **Sesamoid bone** | Bone within tendon changing its angle of pull | Patella (increases quadriceps efficiency) |

## Muscle Fiber Types

| Feature | Type I (Slow Twitch) | Type II (Fast Twitch) |
|---------|---------------------|----------------------|
| **Other name** | Red fibers | White fibers |
| **Metabolism** | Oxidative (aerobic) | Glycolytic (anaerobic) |
| **Fatigue** | Resistant | Fatigues quickly |
| **Myoglobin** | High (red color) | Low |
| **Mitochondria** | Many | Few |
| **Function** | Endurance, posture | Rapid, powerful movements |
| **Example** | Soleus (postural) | Gastrocnemius (jumping) |

## Fascial Compartments
- Deep fascia divides limbs into **compartments**
- Each compartment contains muscles with similar function, nerve supply, and blood supply
- **Intermuscular septa**: Extensions of deep fascia separating compartments
- Important for understanding **compartment syndrome** (raised pressure within a closed fascial space)

## Proprioception
- **Muscle spindles**: Detect muscle stretch (length changes); parallel to muscle fibers
- **Golgi tendon organs (GTO)**: Detect tension; in series with muscle fibers at musculotendinous junction
- Both send information to cerebellum and cortex for coordinated movement`,
        mnemonics: [
          { text: "1-2-3 Lever = FEL, FLE, FEL rearranged", explanation: "1st class: Fulcrum in middle (F-E/L). 2nd class: Load in middle (E-L is near F, so F-L-E). 3rd class: Effort in middle (F-E-L). Most body joints = 3rd class." },
          { text: "Red Slow Ox vs White Fast Sugar", explanation: "Type I (Red, Slow twitch, Oxidative/aerobic, fatigue-Resistant) vs Type II (White, Fast twitch, glycolytic/Sugar-burning, fatigues quickly). Soleus = red/slow, Gastrocnemius = white/fast." }
        ],
        keyPoints: [
          "Isotonic: muscle length changes; Isometric: tension changes without length change",
          "Most body joints work as 3rd class levers (effort between fulcrum and load) - sacrifices force for speed",
          "Group action: Agonist, Antagonist (reciprocal inhibition), Synergist, Fixator - no muscle works alone",
          "Type I (red, slow, oxidative, fatigue-resistant) vs Type II (white, fast, glycolytic, fatigues quickly)",
          "Muscle spindles detect stretch (parallel); Golgi tendon organs detect tension (in series)",
          "Deep fascia divides limbs into compartments with muscles of similar function and nerve supply",
          "Sesamoid bones (e.g., patella) improve mechanical efficiency by changing tendon angle of pull"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "General Anatomy - Ch 5 (Muscles)", edition: "8th" }] },

      { layer: 3, slug: "muscles-types-actions-clinical", title: "Muscles: Types & Actions - Clinical", estimatedMinutes: 20,
        summary: "Clinical applications of muscle anatomy including muscular dystrophy, myasthenia gravis, compartment syndrome, tendon injuries, and muscle testing in Indian clinical practice.",
        contentMd: `# Clinical Applications

## Muscular Dystrophy
- **Duchenne Muscular Dystrophy (DMD)**:
  - X-linked recessive; deficiency of **dystrophin** protein
  - Onset: 3-5 years; progressive weakness starting from proximal muscles
  - **Gower's sign**: Child uses hands to "climb up" own body to stand (from floor)
  - **Pseudohypertrophy of calves**: Fat and fibrous tissue replace muscle
  - Wheelchair-bound by 12 years, death by late teens/early twenties
- **Becker's**: Similar but milder; partial dystrophin function

> **Indian Context**: DMD is the most common muscular dystrophy. Genetic counseling is important as carrier mothers have a 50% chance of passing it to sons.

## Myasthenia Gravis
- **Autoimmune disorder**: Antibodies against acetylcholine receptors at neuromuscular junction
- Fatigable weakness: worsens with activity, improves with rest
- Ptosis and diplopia (extraocular muscles affected first)
- **Thymus** abnormality in 75% (thymoma in 10-15%)
- Tensilon (edrophonium) test: rapid improvement with anticholinesterase

## Compartment Syndrome
- **Raised pressure** within a closed fascial compartment
- Most common: Anterior compartment of leg (after tibial fracture)
- Pathology: Pressure exceeds capillary perfusion → muscle and nerve ischemia
- **5 P's of compartment syndrome**: Pain (out of proportion, worsened by passive stretch), Pressure (tense compartment), Paresthesia, Paralysis, Pulselessness (late sign)
- Treatment: **Emergency fasciotomy** (surgical release of fascia)

> **Clinical Pearl**: Pulselessness is a LATE sign. Diagnosis should be made before loss of pulse. Pain on passive stretching of involved muscles is the earliest and most reliable sign.

## Tendon Injuries

### Trigger Finger (Stenosing Tenosynovitis)
- Thickening of tendon sheath (A1 pulley) at MCP joint
- Finger locks in flexion, then snaps straight
- Common in diabetics (common in Indian population)

### De Quervain's Tenosynovitis
- Inflammation of 1st dorsal compartment tendons (APL + EPB) at radial styloid
- Pain on ulnar deviation of wrist (Finkelstein's test positive)
- Common in new mothers (repetitive lifting of baby)

### Achilles Tendon Rupture
- Most commonly injured tendon in the body
- Sudden pop during forceful push-off (sports injury)
- Thompson test positive (squeezing calf does not plantarflex foot)

## Muscle Testing (MRC Grading)

| Grade | Description |
|-------|-------------|
| 0 | No contraction |
| 1 | Flicker/trace of contraction |
| 2 | Movement with gravity eliminated |
| 3 | Movement against gravity |
| 4 | Movement against resistance (weak) |
| 5 | Normal power |

## Volkmann's Ischemic Contracture
- End result of untreated forearm compartment syndrome
- Flexor muscles undergo fibrosis → permanent flexion contracture of wrist and fingers
- Common after supracondylar fracture in children (brachial artery injury)
- Classic posture: wrist flexed, MCP hyperextended, IP flexed

## Muscle Wasting Patterns
- **Upper Motor Neuron (UMN)**: Spasticity, hypertonia, no significant wasting initially
- **Lower Motor Neuron (LMN)**: Flaccidity, hypotonia, marked wasting, fasciculations
- Pattern of wasting helps localize the lesion in clinical neurology`,
        mnemonics: [
          { text: "5 Ps of Compartment Syndrome: Pain, Pressure, Paresthesia, Paralysis, Pulselessness", explanation: "In order of appearance: Pain (first - on passive stretch), Pressure (tense compartment), Paresthesia, Paralysis, Pulselessness (last - do not wait for this). Emergency fasciotomy needed." },
          { text: "GOWER = Going Over With Effort Rising", explanation: "Gower's sign in Duchenne muscular dystrophy: child uses hands to 'climb up' own legs to stand from floor due to proximal muscle weakness. Think of the child putting in great effort to 'go over' (stand up)." }
        ],
        keyPoints: [
          "Duchenne MD: X-linked, dystrophin absent, Gower's sign, calf pseudohypertrophy, onset 3-5 years",
          "Myasthenia gravis: autoimmune anti-AChR antibodies, fatigable weakness, thymus abnormality in 75%",
          "Compartment syndrome: Pain on passive stretch is earliest sign; treatment = emergency fasciotomy",
          "MRC muscle grading: 0 (no contraction) to 5 (normal power)",
          "Volkmann's contracture: end result of forearm compartment syndrome, common after supracondylar fracture in children",
          "Trigger finger: stenosing tenosynovitis at A1 pulley, common in diabetics in India"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "General Anatomy - Muscles + Clinical Anatomy", edition: "8th" }] },

      { layer: 4, slug: "muscles-types-actions-exam", title: "Muscles: Types & Actions - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield exam points on muscle types, actions, and clinical correlations for NEXT and NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners
- Only muscle type with intercalated discs: **Cardiac muscle**
- Muscle type with peripheral nuclei: **Skeletal muscle**
- Largest muscle in the body: **Gluteus maximus**
- Longest muscle in the body: **Sartorius**
- Smallest skeletal muscle: **Stapedius**
- Most powerful muscle: **Masseter** (per unit weight)
- Strongest muscle (overall force): **Quadriceps femoris** (or soleus for sustained force)
- Protein deficient in Duchenne MD: **Dystrophin**
- Antibodies in myasthenia gravis against: **Nicotinic acetylcholine receptors**
- Earliest sign of compartment syndrome: **Pain on passive stretch**
- Treatment of compartment syndrome: **Fasciotomy**
- Gower's sign seen in: **Duchenne muscular dystrophy**
- Most common muscular dystrophy: **Duchenne**
- Motor unit: **One motor neuron + all muscle fibers it supplies**
- Most body levers are: **3rd class** (speed > power)
- Muscle spindle detects: **Stretch (length change)**
- Golgi tendon organ detects: **Tension**

## Comparison: Skeletal vs Smooth vs Cardiac

| Feature | Skeletal | Smooth | Cardiac |
|---------|----------|--------|---------|
| Striations | Yes | No | Yes |
| Nuclei | Multiple, peripheral | Single, central | 1-2, central |
| Intercalated discs | No | No | Yes |
| Voluntary | Yes | No | No |
| T-tubules | At A-I junction | Absent | At Z line |
| Troponin | Present | Absent (calmodulin) | Present |
| Regeneration | Limited | Good | Very poor |

## Previous Year Themes
- Muscle fiber types comparison table (Type I vs Type II)
- Duchenne vs Becker muscular dystrophy
- Myasthenia gravis mechanism and diagnosis
- Compartment syndrome 5 P's
- Lever systems in the body
- Origin, insertion, action of named muscles (integrated with regional anatomy)`,
        mnemonics: [
          { text: "Sartorius = Longest, Stapedius = Smallest, Gluteus Maximus = Largest", explanation: "Three superlatives of skeletal muscles. Sartorius: tailor's muscle (longest, crosses hip and knee). Stapedius: in middle ear. Gluteus maximus: largest and heaviest." },
          { text: "Smooth Muscles CALM down: CAlModulin, not troponin", explanation: "Smooth muscle uses Calmodulin (not troponin) for calcium regulation of contraction. Skeletal and Cardiac muscles use troponin. This is a commonly tested difference." }
        ],
        keyPoints: [
          "Cardiac muscle: striated + involuntary + intercalated discs (unique combination)",
          "Skeletal: peripheral nuclei; Cardiac + Smooth: central nuclei",
          "Smooth muscle uses calmodulin instead of troponin for calcium-mediated contraction",
          "DMD: dystrophin absent (X-linked); Becker: dystrophin partially functional",
          "Most body joints = 3rd class levers (speed over power)"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "General Anatomy - Ch 5", edition: "8th" }] },

      { layer: 5, slug: "muscles-types-actions-recall", title: "Muscles: Types & Actions - Active Recall", estimatedMinutes: 10,
        summary: "Flashcard-style self-test questions for rapid revision of muscle types and actions.",
        contentMd: `# Active Recall

**Q1:** Name the 3 types of muscle tissue.
> Skeletal (voluntary, striated), Smooth (involuntary, non-striated), Cardiac (involuntary, striated)

**Q2:** Which muscle type has intercalated discs?
> Cardiac muscle

**Q3:** Where are the nuclei located in skeletal muscle?
> Peripherally (multiple nuclei under sarcolemma)

**Q4:** Define origin and insertion.
> Origin: proximal/fixed attachment. Insertion: distal/mobile attachment.

**Q5:** What is the difference between a tendon and an aponeurosis?
> Tendon: cord-like; Aponeurosis: flat, sheet-like tendon (e.g., palmar aponeurosis)

**Q6:** What are the 4 types of muscle action?
> Prime mover (agonist), Antagonist, Synergist, Fixator

**Q7:** What type of lever is most common in the body?
> 3rd class lever (effort between fulcrum and load)

**Q8:** What is the protein deficient in Duchenne muscular dystrophy?
> Dystrophin

**Q9:** What are the 5 P's of compartment syndrome?
> Pain (passive stretch), Pressure, Paresthesia, Paralysis, Pulselessness

**Q10:** What is Gower's sign?
> Child uses hands to climb up own legs to stand from floor - seen in Duchenne MD due to proximal muscle weakness

**Q11:** Difference between Type I and Type II muscle fibers?
> Type I: slow, red, oxidative, fatigue-resistant (postural). Type II: fast, white, glycolytic, fatigues quickly (power movements).

**Q12:** What detects muscle stretch vs tension?
> Muscle spindles detect stretch (parallel to fibers); Golgi tendon organs detect tension (in series at musculotendinous junction)`,
        mnemonics: [],
        keyPoints: ["12 recall questions covering muscle types, actions, fiber types, clinical conditions, and proprioception"],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "General Anatomy - Ch 5", edition: "8th" }] },
    ],
  },

  // ─── Topic 4: Blood Vessels, Lymphatics & Nerves ────────────
  {
    topicCode: "AN-MOD-08-TOP-04",
    layers: [
      { layer: 1, slug: "blood-vessels-lymphatics-nerves-foundation", title: "Blood Vessels, Lymphatics & Nerves - Foundation", estimatedMinutes: 20,
        summary: "Blood vessels (arteries, veins, capillaries), lymphatic system (lymph vessels, lymph nodes), and nerves (spinal nerves, cranial nerves, dermatomes, myotomes) form the neurovascular framework of the body. Understanding their general features is essential before studying regional anatomy.",
        contentMd: `# Blood Vessels, Lymphatics & Nerves

## Blood Vessels

### Arteries
Carry blood **away** from the heart (usually oxygenated, except pulmonary arteries).

| Type | Wall | Features | Example |
|------|------|----------|---------|
| **Elastic (Conducting)** | Thick, elastic tissue | Large, close to heart; expand and recoil with pulse | Aorta, pulmonary trunk, brachiocephalic, common carotid, subclavian, common iliac |
| **Muscular (Distributing)** | Thick smooth muscle | Medium-sized; regulate blood flow | Brachial, radial, femoral, popliteal |
| **Arterioles** | Thin smooth muscle | Small; major site of peripheral resistance | Precapillary arterioles |

> **Analogy**: Elastic arteries are like **large highways** (high-capacity), muscular arteries are like **city roads** (with traffic signals/smooth muscle to regulate flow), and arterioles are like **narrow lanes** (where most resistance/traffic jams occur).

### End Arteries
- **Anatomical end artery**: No anastomosis at all → occlusion causes infarction
  - Example: Central artery of retina, labyrinthine artery
- **Functional end artery**: Anastomoses exist but are insufficient
  - Example: Splenic artery, renal artery, coronary arteries

### Veins
Carry blood **toward** the heart (usually deoxygenated, except pulmonary veins).

| Feature | Arteries | Veins |
|---------|----------|-------|
| Wall | Thick, elastic | Thin, less elastic |
| Lumen | Narrow, round | Wide, collapsed |
| Valves | Absent (except pulmonary) | Present (except in brain, liver, bone, thorax, abdomen) |
| Blood pressure | High | Low |
| Direction | Away from heart | Toward heart |

**Types of veins**:
- **Superficial veins**: In subcutaneous tissue, drain skin and superficial fascia (e.g., great saphenous, cephalic)
- **Deep veins**: Accompany arteries (venae comitantes), drain muscles and deep structures
- **Perforating veins**: Connect superficial to deep (valves direct flow deep → superficial is abnormal)
- **Venous sinuses**: Endothelium-lined venous channels in dura mater and bone

### Capillaries
- Thinnest blood vessels (single endothelial cell layer)
- Site of exchange of gases, nutrients, and waste
- 3 types: Continuous (most tissues), Fenestrated (kidney, endocrine glands), Sinusoidal/Discontinuous (liver, spleen, bone marrow)

### Anastomoses
- Connections between vessels providing alternative blood supply
- Important for collateral circulation when one vessel is blocked
- Common sites: around joints (periarticular anastomosis), at base of brain (Circle of Willis)

## Lymphatic System

### Lymph
- Clear fluid derived from interstitial fluid
- Composition similar to plasma but with less protein
- Contains lymphocytes (important for immune function)

### Lymph Vessels
- Thin-walled vessels with valves
- Begin as blind-ended **lymph capillaries** in tissues
- Drain into lymph nodes → lymph trunks → thoracic duct or right lymphatic duct

### Lymph Nodes
- Bean-shaped, 1-25 mm in size
- Filter lymph and produce immune cells
- Arranged in groups along lymph vessels
- **Hilum**: Where efferent vessel exits and blood vessels enter/exit
- **Afferent vessels**: Enter at convex surface (multiple)
- **Efferent vessel**: Exits at hilum (single)

### Major Lymph Drainage

| Region | Drains Into |
|--------|-------------|
| Right upper limb + Right half of head/neck + Right half of thorax | **Right lymphatic duct** → Right venous angle |
| All remaining body | **Thoracic duct** → Left venous angle |

> **Clinical Pearl**: The thoracic duct drains approximately 75% of the body's lymph. It begins as the cisterna chyli at L1-L2 level.

## Nerves

### Spinal Nerves
- 31 pairs: 8 Cervical, 12 Thoracic, 5 Lumbar, 5 Sacral, 1 Coccygeal
- Each spinal nerve = **dorsal root (sensory)** + **ventral root (motor)**
- After exiting intervertebral foramen, divides into dorsal and ventral rami

### Dermatomes and Myotomes
- **Dermatome**: Area of skin supplied by a single spinal nerve
- **Myotome**: Group of muscles supplied by a single spinal nerve

### Key Dermatome Landmarks

| Dermatome | Landmark |
|-----------|----------|
| C5 | Lateral arm (regimental badge area) |
| C6 | Thumb and lateral forearm |
| C7 | Middle finger |
| C8 | Little finger and medial forearm |
| T4 | Nipple level |
| T10 | Umbilicus |
| L1 | Inguinal region |
| L4 | Medial leg + medial malleolus |
| L5 | Dorsum of foot + big toe |
| S1 | Lateral foot + little toe + sole |
| S2-S4 | Perineum (saddle area) |`,
        mnemonics: [
          { text: "T4 = Teat (nipple), T10 = Ten = umBILICus (BELLY button)", explanation: "Important dermatome landmarks: T4 is at the nipple level and T10 is at the umbilicus. These are the two most commonly tested dermatome levels." },
          { text: "Right Lymphatic Duct = Right upper body only (3 Rs: Right arm, Right thorax, Right head/neck)", explanation: "The right lymphatic duct drains only the right upper quadrant of the body. Everything else (approximately 75% of body) drains into the thoracic duct." }
        ],
        keyPoints: [
          "Arteries: Elastic (large, near heart), Muscular (medium, distributing), Arterioles (small, resistance vessels)",
          "End arteries: Central artery of retina (anatomical), coronary arteries (functional) - occlusion causes infarction",
          "Veins have valves (absent in brain, liver, thorax, abdomen); superficial veins drain to deep via perforating veins",
          "3 types of capillaries: Continuous, Fenestrated, Sinusoidal",
          "Lymph nodes: afferent vessels enter at convex surface, efferent exits at hilum",
          "Thoracic duct drains 75% of body lymph; Right lymphatic duct drains right upper quadrant only",
          "31 pairs of spinal nerves; Key dermatomes: T4 = nipple, T10 = umbilicus, L4 = knee, S1 = lateral foot"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "General Anatomy - Ch 6 (Blood Vessels), Ch 7 (Lymphatics), Ch 8 (Nerves)", edition: "8th" }] },

      { layer: 2, slug: "blood-vessels-lymphatics-nerves-mechanism", title: "Blood Vessels, Lymphatics & Nerves - Mechanism", estimatedMinutes: 30,
        summary: "Detailed mechanisms of collateral circulation, venous return, lymph drainage pathways, nerve plexus formation, and the autonomic nervous system basics.",
        contentMd: `# Detailed Mechanisms

## Arterial Anastomoses & Collateral Circulation

### Types of Anastomoses
1. **Actual anastomosis**: Two arteries directly connect (e.g., palmar arches)
2. **Potential anastomosis**: Through capillary networks (e.g., coronary circulation)
3. **Arterial arcade**: Series of arches (e.g., mesenteric arcades in intestine)
4. **Arteriovenous anastomosis (AVA)**: Direct artery-to-vein connection bypassing capillaries (in skin of fingers, toes, nose - for temperature regulation)

### Important Anastomoses

| Location | Arteries Involved | Clinical Significance |
|----------|-------------------|----------------------|
| Scapular anastomosis | Branches of subclavian + axillary | Collateral if axillary artery blocked |
| Cruciate anastomosis | Around hip | Collateral if femoral artery blocked |
| Genicular anastomosis | Around knee | Collateral if popliteal artery blocked |
| Circle of Willis | ICA + vertebrobasilar | Protects brain from ischemia |
| Palmar arches | Radial + ulnar | Safe to ligate one artery |

## Venous Return Mechanisms

Blood in veins returns to the heart aided by:
1. **Muscle pump**: Contraction of skeletal muscles compresses deep veins (most important in lower limbs)
2. **Respiratory pump**: Negative intrathoracic pressure during inspiration sucks blood into thorax
3. **Venous valves**: Prevent backflow
4. **Vis a tergo**: Remaining push from cardiac output
5. **Cardiac suction**: During ventricular diastole

> **Clinical Relevance**: Failure of venous valves (especially in perforating veins) leads to **varicose veins** - extremely common in India among people with prolonged standing occupations.

## Lymphatic Drainage - Detailed Pathways

### Thoracic Duct
- Largest lymph vessel in the body (38-45 cm)
- Begins as **cisterna chyli** (at L1-L2 level, behind right crus of diaphragm)
- Ascends through posterior mediastinum to the left of midline
- Arches over left subclavian artery
- Drains into **left venous angle** (junction of left subclavian + left internal jugular vein)
- Drains: Both lower limbs, abdomen, left half of thorax, left upper limb, left half of head and neck

### Right Lymphatic Duct
- Short (about 1 cm)
- Drains into right venous angle
- Drains: Right upper limb, right half of thorax, right half of head and neck

### Lymph Node Structure
- **Cortex**: B-cell follicles (humoral immunity)
- **Paracortex**: T-cell zone (cell-mediated immunity)
- **Medulla**: Medullary cords and sinuses
- **Germinal centers**: Active B-cell proliferation (enlarge during immune response)

## Nerve Plexus Formation

Ventral rami of spinal nerves form plexuses:

| Plexus | Roots | Location | Major Nerves |
|--------|-------|----------|-------------|
| **Cervical** | C1-C4 | Neck | Phrenic (C3,4,5), ansa cervicalis |
| **Brachial** | C5-T1 | Neck/axilla | Musculocutaneous, median, ulnar, radial, axillary |
| **Lumbar** | L1-L4 | Posterior abdominal wall | Femoral, obturator, lateral cutaneous of thigh |
| **Sacral** | L4-S3 | Pelvis | Sciatic (tibial + common peroneal), pudendal |

> Dorsal rami do NOT form plexuses. They supply muscles and skin of the back.

## Autonomic Nervous System (Overview)

| Feature | Sympathetic | Parasympathetic |
|---------|-------------|-----------------|
| **Origin** | T1-L2 (thoracolumbar outflow) | Craniosacral (CN III, VII, IX, X + S2-S4) |
| **Ganglia** | Paravertebral chain + prevertebral | Near/within target organ |
| **Preganglionic fiber** | Short | Long |
| **Postganglionic fiber** | Long | Short |
| **Neurotransmitter (postganglionic)** | Noradrenaline (adrenergic) | Acetylcholine (cholinergic) |
| **Function** | Fight or flight | Rest and digest |

### Referred Pain
- Pain from viscera perceived in somatic dermatome sharing the same spinal segment
- Example: Heart (T1-T4) → left arm/jaw; Diaphragm (C3-5) → shoulder tip; Appendix (T10) → umbilicus initially

## Myotome Summary (Key)

| Movement | Myotome |
|----------|---------|
| Shoulder abduction | C5 |
| Elbow flexion | C5, C6 |
| Wrist extension | C6 |
| Elbow extension | C7 |
| Finger flexion | C8 |
| Finger abduction | T1 |
| Hip flexion | L1, L2 |
| Knee extension | L3, L4 |
| Ankle dorsiflexion | L4, L5 |
| Big toe extension | L5 |
| Ankle plantarflexion | S1, S2 |`,
        mnemonics: [
          { text: "C3, 4, 5 keeps the diaphragm alive", explanation: "Phrenic nerve arises from C3, C4, C5 (mainly C4). It is the sole motor nerve supply of the diaphragm. This is one of the most important nerve root facts in anatomy." },
          { text: "Sympathetic = Thoracolumbar (T1-L2); Parasympathetic = Craniosacral (III, VII, IX, X + S2-S4)", explanation: "The two divisions of the autonomic nervous system arise from different segments. Remember: Sympathetic is in the middle (thoracolumbar), Parasympathetic is at the extremes (cranial + sacral)." }
        ],
        keyPoints: [
          "Circle of Willis is the most important arterial anastomosis protecting the brain",
          "Venous return: muscle pump (most important in lower limb), respiratory pump, valves, vis a tergo",
          "Thoracic duct: begins as cisterna chyli at L1-L2, drains into left venous angle, drains 75% of body",
          "Ventral rami form plexuses: Cervical (C1-4), Brachial (C5-T1), Lumbar (L1-4), Sacral (L4-S3)",
          "Phrenic nerve (C3,4,5): sole motor supply to diaphragm",
          "Sympathetic: T1-L2 (thoracolumbar outflow); Parasympathetic: craniosacral",
          "Referred pain: visceral pain perceived in somatic dermatome of same spinal segment"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "General Anatomy - Ch 6, 7, 8", edition: "8th" }] },

      { layer: 3, slug: "blood-vessels-lymphatics-nerves-clinical", title: "Blood Vessels, Lymphatics & Nerves - Clinical", estimatedMinutes: 20,
        summary: "Clinical correlations including atherosclerosis, aneurysm, DVT, varicose veins, lymphedema, nerve injuries, and their relevance to Indian clinical practice.",
        contentMd: `# Clinical Applications

## Arterial Diseases

### Atherosclerosis
- Most common cause of arterial disease; progressive narrowing by plaque
- Risk factors common in India: Diabetes, hypertension, smoking, sedentary lifestyle, vegetarian diet with high carb/ghee intake
- Common sites: Coronary arteries, carotid bifurcation, aortic bifurcation, femoral artery
- Complications: Myocardial infarction, stroke, peripheral vascular disease, gangrene

### Aneurysm
- Abnormal dilatation of an artery
- **True aneurysm**: Involves all 3 layers (intima, media, adventitia)
- **False (pseudo) aneurysm**: Contained rupture; blood held by adventitia/surrounding tissue only
- Common sites: Abdominal aorta (below renal arteries), popliteal artery, cerebral arteries (Berry aneurysm at Circle of Willis)

### Peripheral Arterial Disease
- **Intermittent claudication**: Cramping pain in calf on walking, relieved by rest
- Buerger's disease (Thromboangiitis obliterans): Affects young male smokers in India, especially bidi smokers
- May progress to critical limb ischemia and gangrene

## Venous Diseases

### Deep Vein Thrombosis (DVT)
- Thrombus in deep veins (usually lower limb)
- Virchow's triad: Stasis, Endothelial injury, Hypercoagulability
- Risk: Pulmonary embolism (PE) - a life-threatening complication
- Common in post-operative patients, prolonged immobilization, long flights

### Varicose Veins
- Dilated, tortuous superficial veins due to valve incompetence
- Most common in great saphenous vein territory
- Very common in India among people with prolonged standing occupations (traffic police, teachers, surgeons)
- Complications: Eczema, pigmentation, lipodermosclerosis, venous ulcer (above medial malleolus)

> **Indian Context**: Varicose veins are extremely common in India. The saphenofemoral junction is the most common site of valve incompetence. Trendelenburg test and Brodie-Trendelenburg test are used for clinical evaluation.

## Lymphatic Diseases

### Lymphedema
- Swelling due to lymphatic obstruction
- **Primary**: Congenital malformation of lymphatics (Milroy's disease)
- **Secondary**: Obstruction due to:
  - Filariasis (Wuchereria bancrofti): Most common cause in India → leads to **elephantiasis**
  - Mastectomy with axillary clearance
  - Radiation therapy
  - Malignant infiltration of lymph nodes

> **Indian Context**: Filariasis is endemic in many parts of India (UP, Bihar, Kerala, Odisha, Jharkhand). Mass drug administration (DEC + Albendazole) is the national strategy for elimination.

### Lymphadenopathy
- Enlarged lymph nodes
- Causes: Infection (most common), malignancy (lymphoma, metastasis), autoimmune disease
- **Virchow's node (left supraclavicular)**: Enlarged in gastric carcinoma (Troisier's sign)
- **Sister Mary Joseph nodule**: Umbilical metastasis from intra-abdominal malignancy

## Nerve Injuries

### Types of Nerve Injury (Seddon's Classification)
| Type | Pathology | Recovery |
|------|-----------|----------|
| **Neuropraxia** | Conduction block, no structural damage | Complete recovery (days to weeks) |
| **Axonotmesis** | Axon damaged, endoneurium intact | Recovery possible (1 mm/day regeneration) |
| **Neurotmesis** | Complete severance of nerve | No recovery without surgical repair |

### Wallerian Degeneration
- After nerve transection, the distal segment degenerates
- Proximal stump sprouts and grows at ~1 mm/day
- Recovery depends on distance from injury to target

### Common Nerve Injuries and Clinical Signs

| Nerve | Injury | Clinical Sign |
|-------|--------|--------------|
| Radial | Spiral groove of humerus | Wrist drop |
| Ulnar | Behind medial epicondyle | Claw hand (4th, 5th fingers) |
| Median | Carpal tunnel / supracondylar fracture | Ape thumb (hand of benediction in high lesion) |
| Common peroneal | Neck of fibula | Foot drop |
| Axillary | Shoulder dislocation | Regimental badge anesthesia + deltoid paralysis |
| Long thoracic | Mastectomy | Winging of scapula |

## Dermatomes in Clinical Practice
- Loss of dermatome sensation helps localize spinal cord lesion level
- **Saddle anesthesia (S2-S4)**: Indicates cauda equina syndrome (surgical emergency)
- Herpes zoster (shingles): Reactivation of varicella in dorsal root ganglion - rash follows dermatome`,
        mnemonics: [
          { text: "Virchow's Triad for DVT: SHE = Stasis, Hypercoagulability, Endothelial injury", explanation: "Three factors predisposing to DVT. Important for surgery and medicine alike. Remember: SHE gets DVT." },
          { text: "WRIST drop = Radial, CLAW = Ulnar, APE = Median, FOOT drop = Common Peroneal", explanation: "Quick association for the 4 most commonly tested nerve injuries and their characteristic deformities." }
        ],
        keyPoints: [
          "Atherosclerosis: commonest arterial disease; Indian risk factors include diabetes, smoking, high-carb diet",
          "Varicose veins: saphenous vein valve incompetence; very common in India with prolonged standing",
          "Filariasis (W. bancrofti): most common cause of secondary lymphedema in India → elephantiasis",
          "Virchow's node: left supraclavicular node enlargement in gastric carcinoma (Troisier's sign)",
          "Seddon's classification: Neuropraxia (conduction block), Axonotmesis (axon damaged), Neurotmesis (complete cut)",
          "Nerve regeneration rate: approximately 1 mm per day from proximal to distal",
          "Saddle anesthesia (S2-S4) = cauda equina syndrome = surgical emergency"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "General Anatomy - Clinical Anatomy", edition: "8th" }] },

      { layer: 4, slug: "blood-vessels-lymphatics-nerves-exam", title: "Blood Vessels, Lymphatics & Nerves - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield exam points on blood vessels, lymphatics, and nerves for NEXT Step 1 and NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners

### Blood Vessels
- Anatomical end artery: **Central artery of retina**
- Most common site of aortic aneurysm: **Infrarenal abdominal aorta**
- Largest artery: **Aorta**
- Veins without valves: **Brain (dural sinuses), hepatic portal system, IVC, SVC, pulmonary veins**
- AV anastomoses found in: **Skin of fingers, toes, nose, lips** (temperature regulation)
- Berry aneurysm location: **Circle of Willis (anterior communicating artery most common)**
- Vasa vasorum supplies: **Walls of large arteries and veins**
- Artery with highest blood pressure: **Aorta**
- Site of maximum peripheral resistance: **Arterioles**

### Lymphatics
- Largest lymph vessel: **Thoracic duct**
- Thoracic duct begins as: **Cisterna chyli (L1-L2)**
- Thoracic duct drains into: **Left venous angle**
- Right lymphatic duct drains: **Right upper quadrant of body only**
- Virchow's node: **Left supraclavicular** (gastric CA)
- Most common cause of lymphedema in India: **Filariasis**
- Organ without lymphatics: **CNS, cartilage, cornea, epidermis, bone marrow**

### Nerves
- Total spinal nerves: **31 pairs** (8C + 12T + 5L + 5S + 1Co)
- Dermatome at nipple: **T4**
- Dermatome at umbilicus: **T10**
- Nerve to diaphragm: **Phrenic (C3, 4, 5)**
- Wrist drop: **Radial nerve injury**
- Foot drop: **Common peroneal nerve injury**
- Claw hand: **Ulnar nerve injury**
- Ape thumb deformity: **Median nerve injury**
- Winging of scapula: **Long thoracic nerve injury**
- Saddle anesthesia: **Cauda equina syndrome (S2-S4)**
- Referred pain from diaphragm: **Shoulder tip (C3-C5)**
- Nerve regeneration rate: **1 mm/day**

## Comparison: Sympathetic vs Parasympathetic

| Feature | Sympathetic | Parasympathetic |
|---------|-------------|-----------------|
| Outflow | T1-L2 | Craniosacral |
| Effect on heart | Increases rate/force | Decreases rate |
| Effect on pupil | Dilates (mydriasis) | Constricts (miosis) |
| Effect on bronchi | Dilates | Constricts |
| Effect on gut | Decreases motility | Increases motility |
| Effect on sphincters | Constricts | Relaxes |
| Postganglionic NT | Noradrenaline | Acetylcholine |

## Previous Year Themes
- Dermatome levels (T4, T10, L4, S1 most tested)
- Nerve injury patterns (wrist drop, foot drop, claw hand)
- Thoracic duct vs right lymphatic duct drainage
- End arteries and their clinical significance
- Virchow's triad and DVT
- Referred pain patterns`,
        mnemonics: [
          { text: "No Lymph in CECBE: CNS, Epidermis, Cornea, Bone marrow, Ear (inner)", explanation: "Organs/tissues that lack lymphatic drainage. CNS relies on CSF and glymphatic system instead." },
          { text: "Dermatome Clock: C5 at 5 o'clock (lateral arm), T4 at 4 (nipple), T10 at 10 (umbilicus)", explanation: "A quick way to recall key dermatome levels using a clock analogy. T4 = nipple (think 4 = teat), T10 = navel (ten = belly button)." }
        ],
        keyPoints: [
          "Central artery of retina = anatomical end artery; occlusion causes sudden painless blindness",
          "Thoracic duct: cisterna chyli (L1-L2) → left venous angle; drains 75% of body",
          "No lymphatics in: CNS, epidermis, cornea, cartilage, bone marrow",
          "31 spinal nerve pairs; T4 = nipple, T10 = umbilicus are most tested",
          "Sympathetic = thoracolumbar (T1-L2), fight or flight; Parasympathetic = craniosacral, rest and digest"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "General Anatomy - Ch 6, 7, 8", edition: "8th" }] },

      { layer: 5, slug: "blood-vessels-lymphatics-nerves-recall", title: "Blood Vessels, Lymphatics & Nerves - Active Recall", estimatedMinutes: 10,
        summary: "Flashcard-style self-test questions for blood vessels, lymphatics, and nerves.",
        contentMd: `# Active Recall

**Q1:** Name the 3 types of arteries.
> Elastic (conducting), Muscular (distributing), Arterioles (resistance vessels)

**Q2:** What is an anatomical end artery? Give an example.
> An artery with no anastomosis; occlusion causes infarction. Example: Central artery of retina.

**Q3:** Name 3 structures where veins do NOT have valves.
> Brain (dural sinuses), hepatic portal system, IVC/SVC

**Q4:** What is Virchow's triad?
> Stasis, Endothelial injury, Hypercoagulability - predisposing factors for DVT

**Q5:** Where does the thoracic duct begin and where does it drain?
> Begins as cisterna chyli at L1-L2; drains into left venous angle (junction of left subclavian + left IJV)

**Q6:** What does the right lymphatic duct drain?
> Right upper limb, right half of head/neck, right half of thorax

**Q7:** What is Virchow's node and what does it signify?
> Left supraclavicular lymph node; enlargement suggests gastric carcinoma (Troisier's sign)

**Q8:** How many pairs of spinal nerves are there?
> 31 pairs (8C, 12T, 5L, 5S, 1Co)

**Q9:** What dermatome level is the nipple? The umbilicus?
> Nipple = T4; Umbilicus = T10

**Q10:** State the phrenic nerve root value and its importance.
> C3, C4, C5 - sole motor supply to the diaphragm. "C3, 4, 5 keeps the diaphragm alive."

**Q11:** Match: Wrist drop, Foot drop, Claw hand with nerves.
> Wrist drop = Radial nerve; Foot drop = Common peroneal nerve; Claw hand = Ulnar nerve

**Q12:** What is the most common cause of lymphedema in India?
> Filariasis (Wuchereria bancrofti) - causes elephantiasis

**Q13:** What are Seddon's 3 types of nerve injury?
> Neuropraxia (conduction block), Axonotmesis (axon damaged), Neurotmesis (complete severance)

**Q14:** What is referred pain? Give an example.
> Visceral pain perceived in a somatic dermatome of the same spinal segment. Example: Heart pain referred to left arm (T1-T2 shared segments).`,
        mnemonics: [],
        keyPoints: ["14 recall questions covering arteries, veins, lymphatics, nerves, dermatomes, and clinical correlations"],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "General Anatomy - Ch 6, 7, 8", edition: "8th" }] },
    ],
  },
];
