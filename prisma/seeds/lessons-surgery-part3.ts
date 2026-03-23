import type { TopicLessons } from "./content-loader";

export const surgeryPart3Lessons: TopicLessons[] = [
  {
    topicCode: "SU-MOD-03-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "neck-swellings-layer-1-foundation",
        title: "Neck Swellings & Lymph Nodes - Foundation",
        estimatedMinutes: 20,
        summary: "Classification of neck swellings, anatomical triangles, and lymph node groups of the neck.",
        contentMd: `# Neck Swellings & Lymph Nodes - Foundation

## Anatomical Triangles of the Neck
### Anterior Triangle (bounded by: midline, SCM, mandible)
- Submental, Submandibular, Carotid, Muscular triangles
### Posterior Triangle (bounded by: SCM, trapezius, clavicle)
- Occipital and Supraclavicular sub-triangles

## Classification of Neck Swellings
### By Location
- **Midline**: Thyroglossal cyst, thyroid swelling, dermoid cyst, submental lymph node
- **Lateral**: Branchial cyst, cystic hygroma, lymph nodes, carotid body tumor, cold abscess

### By Pathology
- Congenital: Thyroglossal cyst, branchial cyst, cystic hygroma, dermoid
- Inflammatory: Reactive lymphadenitis, cold abscess (TB), Ludwig angina
- Neoplastic: Lymphoma, metastatic lymph nodes, salivary gland tumors

## Cervical Lymph Node Levels (Memorial Sloan-Kettering Classification)
- Level I: Submental (IA) and Submandibular (IB)
- Level II: Upper jugular (jugulodigastric node)
- Level III: Middle jugular
- Level IV: Lower jugular (supraclavicular)
- Level V: Posterior triangle
- Level VI: Central compartment (pretracheal, paratracheal)

## Common Neck Swellings in Indian Practice
- TB lymphadenitis (cold abscess/collar stud abscess) is extremely common
- Thyroglossal cyst: Most common congenital midline neck swelling
- Cystic hygroma: Most common in posterior triangle, transilluminant`,
        mnemonics: [
          { text: "Midline swellings: TDD", explanation: "Thyroglossal cyst, Dermoid, (sub)mental lymph node - midline structures" },
          { text: "Thyroglossal cyst test: Swallow + Tongue protrusion", explanation: "Moves with swallowing AND tongue protrusion (attached to hyoid-foramen cecum tract)" },
        ],
        keyPoints: [
          "Thyroglossal cyst: most common congenital midline neck swelling; moves with swallowing AND tongue protrusion",
          "Branchial cyst: anterior to SCM at junction of upper and middle thirds; from 2nd branchial arch remnant",
          "TB lymphadenitis is the commonest cause of cervical lymphadenopathy in India",
          "Cervical lymph node levels I-VI used for staging head and neck cancers",
          "Cystic hygroma: transilluminant, posterior triangle, commonly presents at birth",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 13: Neck", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 50: Neck", edition: "28th" },
        ],
      },
      {
        layer: 2,
        slug: "neck-swellings-layer-2-mechanism",
        title: "Neck Swellings & Lymph Nodes - Mechanism",
        estimatedMinutes: 25,
        summary: "Embryological basis of congenital neck swellings, pathophysiology of lymphadenopathy, and metastatic patterns.",
        contentMd: `# Neck Swellings - Mechanism

## Embryology of Congenital Neck Swellings
### Thyroglossal Cyst
- Thyroid descends from foramen cecum (base of tongue) through hyoid to final position
- Persistent thyroglossal duct → cyst formation
- Can occur anywhere along tract: most common at/below hyoid
- Contains thyroid tissue in 1-3%; malignancy risk 1% (usually papillary carcinoma)

### Branchial Cyst
- From 2nd branchial cleft remnant (most common)
- Located anterior to SCM, junction of upper 1/3 and middle 1/3
- Contains cholesterol crystals in aspirate
- Lined by squamous epithelium with lymphoid tissue

### Cystic Hygroma
- Lymphatic malformation (sequestration of lymphatic tissue fails to connect with venous system)
- Most common in posterior triangle, can extend into axilla/mediastinum
- Brilliantly transilluminant, soft, compressible
- 50% present at birth, 90% by age 2

## Pathophysiology of Cervical Lymphadenopathy
- **Reactive**: Infection draining to node → follicular hyperplasia → enlarged tender nodes
- **Granulomatous**: TB → caseating granulomas → matted, firm nodes, collar stud abscess
- **Metastatic**: Cancer cells via lymphatics → hard, fixed, non-tender nodes
- **Lymphoma**: Clonal proliferation → rubbery, non-tender, may be matted

## Metastatic Patterns
- Nasopharynx → Level II-V (bilateral)
- Oral cavity → Level I-III
- Thyroid → Level III-IV, VI
- Left supraclavicular (Virchow node/Troisier sign) → GI malignancy (stomach)`,
        mnemonics: [
          { text: "Virchow node = Left supraclavicular = Stomach cancer", explanation: "Troisier sign: left supraclavicular node enlargement suggests intra-abdominal malignancy" },
          { text: "Branchial cyst: Cholesterol Crystals", explanation: "Aspirate shows cholesterol crystals; lined by squamous epithelium with lymphoid tissue" },
        ],
        keyPoints: [
          "Thyroglossal cyst arises from persistent thyroglossal duct between foramen cecum and thyroid",
          "Branchial cyst from 2nd branchial cleft; cholesterol crystals in aspirate",
          "Cystic hygroma: lymphatic malformation, transilluminant, posterior triangle, 90% by age 2",
          "Virchow node (left supraclavicular) suggests intra-abdominal malignancy (Troisier sign)",
          "TB lymphadenitis: caseating granulomas, matted nodes, collar stud abscess in India",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 13", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 50", edition: "28th" },
        ],
      },
      {
        layer: 3,
        slug: "neck-swellings-layer-3-clinical",
        title: "Neck Swellings & Lymph Nodes - Clinical",
        estimatedMinutes: 25,
        summary: "Clinical examination, FNAC approach, management of common neck swellings, and neck dissection types.",
        contentMd: `# Neck Swellings - Clinical Management

## Clinical Examination Approach
1. Inspection: Site, size, shape, skin changes, pulsation, movement with swallowing/tongue protrusion
2. Palpation: Consistency, tenderness, fixity, fluctuation, transillumination, pulsatility
3. Percussion/Auscultation: Retrosternal extension (thyroid), bruit (carotid body tumor)
4. Special tests: Swallowing test, tongue protrusion test, Valsalva (laryngocele)

## Investigation Algorithm
- **FNAC**: First-line investigation for any neck lump (sensitivity >90% for malignancy)
- **Ultrasound neck**: Assess solid vs cystic, vascularity, nodal architecture
- **CT/MRI**: For deep lesions, staging of malignancy, relationship to vessels
- **Core biopsy/Excision biopsy**: If FNAC inconclusive; mandatory for lymphoma diagnosis

## Management of Common Neck Swellings
### Thyroglossal Cyst
- Sistrunk operation: Excision of cyst + central portion of hyoid bone + tissue up to foramen cecum
- Simple excision has high recurrence (50%); Sistrunk reduces to <5%

### Branchial Cyst
- Surgical excision via transverse incision
- Trace tract to pharynx (between internal and external carotid arteries)

### TB Lymphadenitis (India)
- FNAC shows caseating granulomas with Langhans giant cells
- Anti-tubercular therapy (ATT) as per RNTCP: 2HRZE + 4HRE
- Surgery only for: large cold abscess, sinus formation, diagnostic uncertainty

## Neck Dissection Types
- **Radical**: Removes Levels I-V + SCM + IJV + Accessory nerve
- **Modified radical**: Preserves one or more of: SCM, IJV, Accessory nerve
- **Selective**: Removes specific levels based on primary tumor site`,
        mnemonics: [
          { text: "Sistrunk = Cyst + Hyoid + Foramen cecum tract", explanation: "Complete excision of thyroglossal cyst including central hyoid bone to prevent recurrence" },
          { text: "Radical neck dissection removes: SJA", explanation: "SCM, Jugular (internal) vein, Accessory nerve + all 5 levels" },
        ],
        keyPoints: [
          "FNAC is the first-line investigation for any neck lump",
          "Sistrunk operation for thyroglossal cyst: cyst + hyoid bone + tract to foramen cecum",
          "TB lymphadenitis: FNAC → ATT (2HRZE/4HRE); surgery only for complications",
          "Radical neck dissection removes Levels I-V + SCM + IJV + Accessory nerve",
          "Left supraclavicular node (Virchow) → investigate for abdominal malignancy",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 13", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 50", edition: "28th" },
        ],
      },
      {
        layer: 4,
        slug: "neck-swellings-layer-4-exam",
        title: "Neck Swellings & Lymph Nodes - Exam Prep",
        estimatedMinutes: 20,
        summary: "High-yield exam facts on neck swellings for NEXT pattern questions.",
        contentMd: `# Neck Swellings - Exam Prep

## Quick Differential by Location
| Midline | Anterior Triangle | Posterior Triangle |
|---------|-------------------|-------------------|
| Thyroglossal cyst | Branchial cyst | Cystic hygroma |
| Thyroid swelling | Carotid body tumor | Cervical rib |
| Dermoid | Cold abscess (TB) | Subclavian aneurysm |
| Submental LN | Lymph nodes | Lymph nodes |

## Must-Know Facts
- Thyroglossal cyst: Moves with swallowing AND tongue protrusion
- Thyroid swelling: Moves with swallowing only (NOT tongue protrusion)
- Branchial cyst: Anterior to SCM, upper 1/3-middle 1/3 junction
- Cystic hygroma: Brilliantly transilluminant, posterior triangle
- Carotid body tumor: Pulsatile, laterally mobile but not vertically (Fontaine sign)

## Examination Pearls
- Fluctuant + Transilluminant = Cystic (cystic hygroma, branchial cyst, cold abscess)
- Hard, fixed, non-tender = Likely malignant (metastatic or primary)
- Rubbery, non-tender = Lymphoma
- Warm, tender, fluctuant = Acute abscess

## High-Yield Questions
- Most common congenital midline neck mass → Thyroglossal cyst
- Collar stud abscess → TB lymphadenitis
- Cholesterol crystals in aspirate → Branchial cyst
- Sistrunk operation → Thyroglossal cyst (includes hyoid bone excision)
- Troisier sign → Left supraclavicular node (Virchow) → GI malignancy`,
        mnemonics: [
          { text: "Fontaine sign for carotid body tumor", explanation: "Laterally mobile but vertically immobile - attached to carotid bifurcation" },
          { text: "Collar stud = TB, Cholesterol = Branchial", explanation: "Collar stud abscess is TB lymphadenitis; Cholesterol crystals in branchial cyst aspirate" },
        ],
        keyPoints: [
          "Thyroglossal cyst moves with swallowing AND tongue protrusion; thyroid only with swallowing",
          "Sistrunk operation: cyst + central hyoid + tract to foramen cecum",
          "Cystic hygroma: brilliantly transilluminant, posterior triangle",
          "Carotid body tumor: Fontaine sign (lateral mobility, vertical fixity)",
          "Virchow node (left supraclavicular) = Troisier sign = GI malignancy",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 13", edition: "6th" },
        ],
      },
      {
        layer: 5,
        slug: "neck-swellings-layer-5-active-recall",
        title: "Neck Swellings & Lymph Nodes - Active Recall",
        estimatedMinutes: 15,
        summary: "Flashcard Q&A for spaced repetition on neck swellings.",
        contentMd: `# Active Recall - Neck Swellings

**Q1:** What is the most common congenital midline neck swelling?
**A1:** Thyroglossal cyst - arises from persistent thyroglossal duct.

**Q2:** How does a thyroglossal cyst differ from thyroid on examination?
**A2:** Thyroglossal cyst moves with both swallowing AND tongue protrusion. Thyroid moves only with swallowing.

**Q3:** What operation is done for thyroglossal cyst and why?
**A3:** Sistrunk operation: excision of cyst + central hyoid bone + tissue to foramen cecum. Simple excision has 50% recurrence vs <5% with Sistrunk.

**Q4:** What is found on aspiration of a branchial cyst?
**A4:** Cholesterol crystals in a straw-colored fluid. Lined by squamous epithelium with lymphoid tissue.

**Q5:** What is a collar stud abscess and what causes it?
**A5:** Abscess that has breached deep fascia creating a dumbbell/collar stud shape. Caused by TB lymphadenitis (most common cause of cervical lymphadenopathy in India).

**Q6:** What is the Troisier sign and what does it indicate?
**A6:** Enlarged left supraclavicular lymph node (Virchow node). Suggests intra-abdominal malignancy, classically stomach cancer.

**Q7:** What is cystic hygroma and where does it most commonly occur?
**A7:** Lymphatic malformation (sequestrated lymphatic tissue). Most common in posterior triangle of neck. Brilliantly transilluminant.

**Q8:** What is the Fontaine sign?
**A8:** Carotid body tumor can be moved laterally but not vertically (attached to carotid bifurcation).

**Q9:** What are the cervical lymph node levels?
**A9:** Level I (submental/submandibular), II (upper jugular), III (middle jugular), IV (lower jugular), V (posterior triangle), VI (central compartment).

**Q10:** What structures are removed in a radical neck dissection?
**A10:** All five lymph node levels (I-V) + SCM + Internal Jugular Vein + Spinal Accessory nerve.

**Q11:** What is the first-line investigation for a neck lump?
**A11:** FNAC (Fine Needle Aspiration Cytology) - sensitivity >90% for malignancy.

**Q12:** What is the treatment of TB lymphadenitis?
**A12:** Anti-tubercular therapy (ATT) per RNTCP: 2 months HRZE + 4 months HRE. Surgery only for large cold abscess or diagnostic uncertainty.`,
        mnemonics: [
          { text: "Sistrunk = complete excision", explanation: "Cyst + central hyoid bone + tract to foramen cecum" },
          { text: "Neck swelling transillumination: CHB", explanation: "Cystic Hygroma (brilliant), Branchial cyst, cold abscess (Hydatid)" },
        ],
        keyPoints: [
          "Thyroglossal cyst: moves with swallowing + tongue protrusion",
          "Sistrunk operation includes hyoid bone excision",
          "Branchial cyst: cholesterol crystals in aspirate",
          "TB lymphadenitis: most common cervical lymphadenopathy in India",
          "Virchow node (left supraclavicular) → Troisier sign → GI malignancy",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 13", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 50", edition: "28th" },
        ],
      },
    ],
  },
];
