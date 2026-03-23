import type { TopicLessons } from "./content-loader";

export const dermatologyLessons: TopicLessons[] = [
  {
    topicCode: "DR-MOD-01-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "skin-structure-lesions-layer-1-foundation",
        title: "Skin Structure & Lesion Morphology - Foundation",
        estimatedMinutes: 25,
        summary: "Comprehensive overview of skin anatomy, cellular components, and morphologic terminology for classifying primary lesions.",
        contentMd: `# Skin Structure & Lesion Morphology - Foundation

## Epidermis (4-5 cell layers)
- **Stratum Corneum**: Dead keratinized cells (~10-20 layers), renewal in 2-4 weeks, major barrier function
- **Stratum Lucidum**: Translucent layer (only in thick skin: palms, soles), 2-3 cell thick
- **Stratum Granulosum**: Keratohyaline granules, lipid layer (permeability barrier), 3-5 cell rows
- **Stratum Spinosum**: Desmosomes connect cells, Langerhans cells (20%), 5-10 cell rows
- **Stratum Basale**: Single row of columnar cells, keratinocyte stem cells, melanocytes (5-10%)

## Dermis (1-4mm thick)
- **Papillary dermis** (200-300μm): Loose connective tissue, dermal loops, capillaries
- **Reticular dermis**: Dense collagen (80% Type I, 15% Type III, 5% elastic)
- **Dermal junction**: Hemidesmosomes anchor epidermis to basement membrane zone

## Subcutaneous Tissue
- Lobular fat with fibrous septa containing blood vessels, nerves, sweat glands

## Primary Lesions
- **Macule** (<10mm): Flat, non-palpable (freckle, vitiligo)
- **Patch** (>10mm): Large flat lesion
- **Papule** (<5mm): Palpable elevation (chicken pox, lichenoid)
- **Nodule** (5-10mm): Deeper palpable lesion
- **Vesicle** (<5mm): Fluid-filled, subepidermal
- **Bulla** (>5mm): Large fluid-filled blister
- **Pustule**: Pus-filled lesion (acne, impetigo)
- **Plaque**: Elevation >5mm with flat top (psoriasis, eczema)`,
        mnemonics: [
          { text: "SLGSB = Stratum Lucidum, Granulosum, Spinosum, Basale", explanation: "Epidermis layers (not corneum)" },
          { text: "Melanocytes = 5-10% basal", explanation: "Proportion in stratum basale" },
          { text: "Vesicle <5mm, Bulla >5mm", explanation: "Size distinction for fluid-filled lesions" },
          { text: "Macule = flat, Papule = palpable", explanation: "Key difference in primary lesions" }
        ],
        keyPoints: [
          "Epidermis has 4-5 layers; stratum corneum provides barrier function",
          "Dermis contains collagen (Type I majority), elastic fibers, and appendages",
          "Dermoepidermal junction with hemidesmosomes anchors epidermis to dermis",
          "Primary lesions classified by: size, elevation, and fluid content",
          "Macule/patch are non-palpable; papule/nodule/tumor are palpable",
          "Vesicles and bullae differentiated by size (<5mm vs >5mm)",
          "Melanocytes in basal layer; Langerhans cells in spinosum layer",
          "Skin renewal cycle ~28 days; stratum corneum replaces every 2-4 weeks"
        ],
        textbookRefs: [
          { book: "IADVL Textbook of Dermatology", chapter: "1 - Skin Structure and Function", edition: "4th" },
          { book: "Roxburgh's Common Skin Diseases", chapter: "1 - Normal Skin", edition: "20th" }
        ],
      },
      {
        layer: 2,
        slug: "skin-structure-lesions-layer-2-mechanism",
        title: "Skin Structure & Lesion Morphology - Mechanism",
        estimatedMinutes: 30,
        summary: "Molecular mechanisms of epidermal differentiation and primary lesion development.",
        contentMd: `# Skin Structure & Lesion Morphology - Mechanism

## Keratinocyte Differentiation
- **Basal layer**: Stem cells undergo mitosis, columnar cells with high cytoplasm:nucleus ratio
- **Spinosum layer**: Cells flatten, desmosomes link cells; keratin filaments accumulate
- **Granulosum layer**: Keratohyaline granules form, lipids accumulate between cells
- **Corneum layer**: Cells fuse, nuclei degenerate, desmosomal proteins degraded
- **Process timeline**: Basal → Spinosum (2-3 days) → Granulosum (2-3 days) → Corneum (7-14 days)

## Dermoepidermal Junction (DEJ) Structure
- **Hemidesmosomes**: Connect basal cells to basement membrane
- **Proteins**: BP180, BP230, α6β4 integrin, collagen XVII
- **Basement membrane**: Type IV collagen (anchoring fibrils), laminin, perlecan
- **Sub-basal lamina**: Type VII collagen (anchoring fibrils) in dermal side

## Lesion Formation Mechanisms
- **Vesicle/Bulla formation**:
  - Intraepidermal (acantholysis) = loss of desmosomal adhesion (pemphigus)
  - Subepidermal = separation at BMZ or within dermis (pemphigoid)
  - Fluid accumulation = immune-mediated or traumatic separation
- **Scale formation**: Abnormal keratinization, increased epidermal turnover
- **Crust formation**: Plasma exudation with dried protein/blood at surface
- **Erythema**: Vasodilation of dermal capillaries, increased blood flow
- **Edema (wheal)**: Transient dermal edema from mast cell mediators

## Cellular Components
- **Keratinocytes**: 95% of epidermis, form barrier, produce cytokines (IL-1, TNF-α)
- **Langerhans cells**: 3-5% basal/spinosum, antigen-presenting cells, express CD1a
- **Melanocytes**: 5-10% basal, produce melanin, protect DNA from UV
- **Fibroblasts**: Produce collagen, elastic fibers; regulated by growth factors (FGF, TGF-β)`,
        mnemonics: [
          { text: "Intra vs Sub-basal = Pemphigus vs Pemphigoid", explanation: "Location of blister formation" },
          { text: "Keratinization: Basal→Spinosum→Granulosum→Corneum", explanation: "Sequence of differentiation" },
          { text: "Desmosomes = cell adhesion; loss = acantholysis (pemphigus)", explanation: "Key mechanism of intraepidermal bulla" }
        ],
        keyPoints: [
          "Keratinocytes differentiate from basal stem cells with progressive keratinization",
          "Desmosomes (desmoplakin, desmoglein) link cells; loss causes acantholysis",
          "Hemidesmosomes anchor basal cells via integrins and collagen XVII",
          "Intraepidermal bulla = cell separation within epidermis (pemphigus, virus)",
          "Subepidermal bulla = separation at BMZ (pemphigoid, dermatitis herpetiformis)",
          "Scale results from increased turnover and abnormal keratinization",
          "Langerhans cells are sentinel antigen-presenting cells; express CD1a",
          "Fibroblasts produce 80% Type I collagen; regulated by TGF-β and stress"
        ],
        textbookRefs: [
          { book: "IADVL Textbook of Dermatology", chapter: "1 - Skin Structure and Function", edition: "4th" },
          { book: "Robbins & Kumar Pathologic Basis of Disease", chapter: "25 - Skin Disorders", edition: "10th" }
        ],
      },
      {
        layer: 3,
        slug: "skin-structure-lesions-layer-3-clinical",
        title: "Skin Structure & Lesion Morphology - Clinical",
        estimatedMinutes: 35,
        summary: "Clinical application of morphologic terminology in diagnosis and examination.",
        contentMd: `# Skin Structure & Lesion Morphology - Clinical

## Dermatologic Examination Technique
- **Lighting**: Bright white light, side-lighting for scale/texture
- **Magnification**: Hand lens (10x magnification), dermoscopy for melanoma screening
- **Palpation**: Assess texture, consistency, temperature, blanching with diascopy
- **Distribution**: Localized vs generalized, symmetric vs asymmetric
- **Arrangement**: Grouped, scattered, linear, annular, zosteriform
- **Configuration**: Round, oval, polygonal, irregular

## Examination of Lesions
- **Color**: Primary color, secondary changes (darkening with time)
- **Surface**: Smooth, scaly, rough, vesicular, oozing, crusted
- **Edges**: Well-demarcated, poorly demarcated, raised borders
- **Consistency**: Firm, soft, fluctuant, indurated, mobile vs fixed
- **Size**: Measure exact dimensions in mm or cm with photograph

## Primary Lesions: Clinical Features
- **Macule**: No induration; vitiligo, melasma, pityriasis versicolor
- **Papule**: Firm, palpable; acne, verruca, lichen planus, syphilis
- **Vesicle**: Clear fluid, often grouped; varicella, herpes simplex
- **Bulla**: Large fluid-filled; pemphigus vulgaris, bullous pemphigoid
- **Pustule**: Purulent center; acne, impetigo, folliculitis
- **Wheal**: Transient, migrating; acute urticaria, angioedema
- **Nodule**: >5mm, deeper; melanoma, lipoma, cyst

## Secondary Lesions
- **Erosion**: Denuded epidermis, does not scar (aphthous ulcer)
- **Ulcer**: Loss of dermis/deeper, heals with scar
- **Excoriation**: Linear traumatic loss from scratching
- **Lichenification**: Thickening from chronic friction/scratching
- **Atrophy**: Thinning of skin (steroid effect, lichen sclerosis)
- **Hypopigmentation/hyperpigmentation**: Color changes from melanin
- **Scar**: Healed dermis, permanent collagen deposition

## Systemic Implications
- **Vesicles/bullae**: Investigate for pemphigus/pemphigoid, drug history
- **Purpura**: Rule out vasculitis, platelet disorder, coagulopathy
- **Nodules**: Consider malignancy, infection (TB, syphilis), sarcoidosis
- **Erythematous lesions**: Screen for infection, drug allergy, autoimmune disease`,
        mnemonics: [
          { text: "PRIMARY: Macule, Papule, Patch, Plaque, Vesicle, Bulla, Pustule", explanation: "Classic primary lesions" },
          { text: "SECONDARY: Erosion, Ulcer, Excoriation, Lichenification, Atrophy, Scar", explanation: "Changes from primary lesions" },
          { text: "SCALE-CRUST-WHEAL assessment", explanation: "Clinical examination flow" }
        ],
        keyPoints: [
          "Morphologic description is key to differential diagnosis; use precise terminology",
          "Palpation distinguishes macule (non-palpable) from papule (palpable)",
          "Distribution pattern narrows differential: flexural (eczema), extensor (psoriasis)",
          "Vesicles grouped = viral (HSV, VZV); scattered = varicella",
          "Bullae: pemphigus (flaccid), pemphigoid (tense)",
          "Secondary lesions indicate chronicity: lichenification = chronic scratching",
          "Systemic diseases present with skin findings: syphilis (annular), lupus (malar)",
          "Diascopy differentiates vascular (blanches) from pigmented (doesn't blanch)"
        ],
        textbookRefs: [
          { book: "IADVL Textbook of Dermatology", chapter: "2 - Clinical Examination", edition: "4th" },
          { book: "Roxburgh's Common Skin Diseases", chapter: "1 - Examination Technique", edition: "20th" }
        ],
      },
      {
        layer: 4,
        slug: "skin-structure-lesions-layer-4-exam",
        title: "Skin Structure & Lesion Morphology - Exam Prep",
        estimatedMinutes: 25,
        summary: "High-yield exam facts, differentials, and clinical pearls.",
        contentMd: `# Skin Structure & Lesion Morphology - Exam Prep

## High-Yield Exam Facts
- **Epidermal thickness**: Varies from 50μm (eyelids) to 600μm (palms/soles)
- **Stratum corneum renewal**: 2-4 weeks under normal conditions
- **Melanocyte location**: 5-10% of basal layer cells
- **Langerhans cell percentage**: 3-5% in basal and lower spinosum layer
- **Dermal blood supply**: Subdermal plexus feeds superficial dermal plexus
- **Sweat glands**: Eccrine (thermoregulation), apocrine (axilla, groin)

## Differential Diagnosis: Vesicles/Bullae
- **Intraepidermal**: Pemphigus vulgaris, viral, epidermolysis bullosa simplex
- **Subepidermal**: Pemphigoid, dermatitis herpetiformis, porphyria cutanea tarda
- **Clinically**: Flaccid bullae (Nikolsky +ve) = pemphigus; tense (Nikolsky -ve) = pemphigoid

## Differential: Papules
- **Skin-colored**: Verruca, molluscum, lichen nitidus
- **Erythematous**: Lichen planus, pityriasis rubra pilaris, syphilis
- **Inflammatory**: Acne, rosacea

## Differential: Scales
- **Fine scale**: Eczema, pityriasis versicolor, pityriasis alba
- **Large scale**: Psoriasis (silvery), ichthyosis, tinea corporis

## Clinical Pearls
- **Nikolsky sign**: Epidermal separation; positive in pemphigus, TEN
- **Tzanck smear**: Multinucleated giant cells = herpes; acantholytic = pemphigus
- **Diascopy**: Blanching = vascular lesion; non-blanching = pigmentation
- **Wood's lamp**: Pityriasis versicolor fluoresces blue-green
- **Patch test**: Delayed hypersensitivity for contact dermatitis (48-72 hours)

## NEXT-Pattern Common Mistakes
- Confusing vesicle size (symptomatology not content-based)
- Nikolsky sign indicates separation, not specific diagnosis
- Not correlating clinical findings with layer of pathology
- Forgetting secondary lesions indicate disease duration`,
        mnemonics: [
          { text: "FLACCID+Nikolsky = Pemphigus; TENSE+Negative = Pemphigoid", explanation: "Differential diagnosis" },
          { text: "Nikolsky +ve = Epidermal separation; Tzanck = multinucleate (viral) vs acantholytic", explanation: "Diagnostic tests" },
          { text: "Psoriasis = silvery scale on erythema (not eczema)", explanation: "Clinical differentiation" }
        ],
        keyPoints: [
          "Psoriasis = silvery scale on erythema; parakeratosis + acanthosis",
          "Pemphigus = flaccid bullae, positive Nikolsky, intraepidermal acantholysis",
          "Pemphigoid = tense bullae, negative Nikolsky, subepidermal separation",
          "Herpes simplex = grouped vesicles; Tzanck shows multinucleated giant cells",
          "Pityriasis versicolor = hypopigmented patches; KOH shows 'spaghetti and meatballs'",
          "Lichen planus = purple papules with Wickham's striae; lichenoid histology",
          "Diascopy (glass pressure) differentiates vascular from pigmented lesions",
          "Merkel cells provide mechanoreception; Langerhans cells initiate immune response"
        ],
        textbookRefs: [
          { book: "IADVL Textbook of Dermatology", chapter: "1-2 - Skin Structure and Clinical Examination", edition: "4th" },
          { book: "Roxburgh's Common Skin Diseases", chapter: "Clinical Examination and Diagnosis", edition: "20th" }
        ],
      },
      {
        layer: 5,
        slug: "skin-structure-lesions-layer-5-active-recall",
        title: "Skin Structure & Lesion Morphology - Active Recall",
        estimatedMinutes: 30,
        summary: "Flashcard Q&A pairs for rapid recall of anatomy and lesion classification.",
        contentMd: `# Skin Structure & Lesion Morphology - Active Recall Flashcards

## Q1: Epidermis Layers
**Q: Name the 5 layers of the epidermis from outside to inside.**
A: Stratum Corneum (dead keratin, barrier), Stratum Lucidum (thick skin only), Stratum Granulosum (keratohyaline, lipid), Stratum Spinosum (desmosomes, Langerhans), Stratum Basale (stem cells, melanocytes)

## Q2: Keratinization Timeline
**Q: How long does it take for a basal cell to become a cornified cell?**
A: Approximately 28 days total; Basal→Spinosum (2-3 days), Spinosum→Granulosum (2-3 days), Granulosum→Corneum (7-14 days)

## Q3: Langerhans Cells
**Q: Where are Langerhans cells located and what is their primary function?**
A: Located in stratum spinosum and basal layer (3-5% of epidermal cells); function as antigen-presenting cells (APCs)

## Q4: Melanocyte Proportion
**Q: What percentage of basal layer cells are melanocytes, and what is their primary function?**
A: Melanocytes comprise 5-10% of basal layer (approximately 1 melanocyte per 10 keratinocytes); primary function is melanin production to protect DNA from UV radiation

## Q5: Dermal Collagen
**Q: What is the approximate percentage composition of collagen types in the dermis?**
A: Type I = 80%, Type III = 15%, Type V and other = 5%; Type I provides tensile strength

## Q6: Hemidesmosomes
**Q: What proteins are found in hemidesmosomes?**
A: BP180 and BP230 (bullous pemphigoid antigens), α6β4 integrin; anchor basal keratinocytes to basement membrane zone

## Q7: Vesicle vs Bulla
**Q: Define vesicle and bulla based on size, with clinical examples.**
A: Vesicle <5mm diameter (herpes simplex, varicella, pemphigoid), Bulla >5mm diameter (pemphigus vulgaris); bulla ruptures to form erosion

## Q8: Bulla Location
**Q: Differentiate between intraepidermal and subepidermal bullae.**
A: Intraepidermal = within epidermis (pemphigus, viral, epidermolysis bullosa simplex); Subepidermal = between epidermis and dermis at BMZ (pemphigoid, dermatitis herpetiformis)

## Q9: Nikolsky Sign
**Q: What does a positive Nikolsky sign indicate?**
A: Nikolsky sign (epidermal separation with gentle rubbing) indicates loss of cell-to-cell adhesion; positive in pemphigus and toxic epidermal necrolysis

## Q10: Scale Formation
**Q: What are the mechanisms that result in visible scale formation?**
A: 1) Abnormal keratinization with retention of nuclei (parakeratosis) causing thick scale, 2) Increased epidermal turnover rate with accumulation of keratin layers

## Q11: Diascopy
**Q: What is the clinical significance of a lesion that blanches with diascopy versus one that doesn't?**
A: Blanching lesion = vascular (capillary dilation, erythema); non-blanching lesion = pigmented (melanin) or extravasated blood (purpura)

## Q12: Merkel Cells
**Q: What are Merkel cells and what is their function?**
A: Neuroendocrine cells located in stratum basale (especially fingertips, lips); function as mechanoreceptors for fine touch sensation

## Q13: Fibroblasts
**Q: What are the primary functions of fibroblasts in the dermis?**
A: Produce Type I and Type III collagen, elastic fibers, and ground substance (hyaluronic acid); regulated by TGF-β and mechanical stress

## Q14: Sweat Glands
**Q: Compare eccrine and apocrine sweat glands.**
A: Eccrine = distributed throughout body, thermoregulation, watery secretion; Apocrine = axilla/groin, odoriferous secretion, increases with puberty

## Q15: Skin Thickness
**Q: Which areas have the thickest and thinnest epidermis?**
A: Thickest = palms and soles (600μm epidermis) due to increased friction, with prominent stratum lucidum; Thinnest = eyelids (50μm)`,
        mnemonics: [
          { text: "SLGSB: Stratum Lucidum, Granulosum, Spinosum, Basale (5 epidermis layers)", explanation: "Mnemonic for epidermal layers" },
          { text: "1-5-10-80: Langerhans (1 per 5 keratinocytes), Melanocytes (5-10%), Type I (80%)", explanation: "Key percentages in skin" },
          { text: "INTRA=Flaccid+Nikolsky+Pemphigus; SUB=Tense+Negative+Pemphigoid", explanation: "Complete differential for bullae" }
        ],
        keyPoints: [
          "Epidermis layers provide specific functions: barrier (corneum), lipid (granulosum), adhesion (spinosum), regeneration (basale)",
          "Complete epidermal renewal takes ~28 days",
          "Desmosomes critical for cell-cell adhesion; lost in pemphigus",
          "Hemidesmosomes anchor basal cells; targeted in pemphigoid",
          "Vascularity primarily supplied by subdermal plexus",
          "Nikolsky sign = epidermal separation",
          "Scale color/texture indicates disease: silvery (psoriasis), greasy (eczema)",
          "Merkel cells provide mechanoreception; Langerhans cells initiate immune response"
        ],
        textbookRefs: [
          { book: "IADVL Textbook of Dermatology", chapter: "1 - Skin Structure and Function", edition: "4th" },
          { book: "Roxburgh's Common Skin Diseases", chapter: "1 - Normal Skin", edition: "20th" }
        ],
      },
    ],
  },
];
