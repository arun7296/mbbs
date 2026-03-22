// 5-layer lessons for all Histology topics (AN-MOD-09)
import type { TopicLessons } from "./content-loader";

export const histologyLessons: TopicLessons[] = [
  // ─── Topic 1: Epithelial Tissue ──────────────────────────────
  {
    topicCode: "AN-MOD-09-TOP-01",
    layers: [
      { layer: 1, slug: "epithelial-tissue-foundation", title: "Epithelial Tissue - Foundation", estimatedMinutes: 20,
        summary: "Epithelial tissue covers body surfaces, lines cavities, and forms glands. Classified by cell layers (simple vs stratified) and cell shape (squamous, cuboidal, columnar). It rests on a basement membrane and is avascular.",
        contentMd: `# Epithelial Tissue - Foundation

## What is Epithelium?
- Tissue that **covers body surfaces**, **lines cavities**, and **forms glands**
- Derived from all three germ layers (ectoderm, mesoderm, endoderm)
- Rests on a **basement membrane** (basal lamina + reticular lamina)
- **Avascular** — receives nutrition by diffusion from underlying connective tissue
- Cells are held together by **junctional complexes** (tight junctions, desmosomes, gap junctions)

## Classification
Two criteria:
1. **Number of layers**: Simple (single layer) vs Stratified (multiple layers)
2. **Shape of surface cells**: Squamous (flat), Cuboidal (cube), Columnar (tall)

## Simple Epithelium (Single Layer)

| Type | Shape | Location | Function |
|------|-------|----------|----------|
| Simple squamous | Flat, scale-like | Bowman's capsule, alveoli, endothelium, mesothelium | Diffusion, filtration |
| Simple cuboidal | Cube-shaped | PCT/DCT of kidney, thyroid follicles, ovarian surface | Secretion, absorption |
| Simple columnar | Tall, rectangular | Stomach, intestines, gallbladder | Secretion, absorption |

## Stratified Epithelium (Multiple Layers)

| Type | Location | Function |
|------|----------|----------|
| Stratified squamous (keratinized) | Skin (epidermis) | Protection against friction, desiccation |
| Stratified squamous (non-keratinized) | Oral cavity, esophagus, vagina | Protection against friction (moist surfaces) |
| Stratified cuboidal | Ducts of sweat glands | Protection |
| Stratified columnar | Male urethra, large ducts | Protection, secretion |

## Special Types

### Pseudostratified Columnar Epithelium
- **Appears** stratified but all cells rest on basement membrane (not all reach surface)
- Location: Trachea, bronchi, nasal cavity (ciliated with goblet cells)
- Function: Mucociliary clearance — "mucociliary escalator"

### Transitional Epithelium (Urothelium)
- **Changes shape** with stretching — dome-shaped surface cells become flat
- Location: Urinary bladder, ureters, renal pelvis
- Function: Allows distension; impermeable barrier to urine

## Glandular Epithelium
- **Exocrine glands**: Secrete via ducts (e.g., sweat, salivary, pancreas)
- **Endocrine glands**: Ductless, secrete into blood (e.g., thyroid, adrenal)

### Modes of Secretion
| Mode | Mechanism | Example |
|------|-----------|---------|
| Merocrine (Eccrine) | Exocytosis, cell intact | Salivary glands, eccrine sweat glands |
| Apocrine | Apical part pinched off | Mammary gland, apocrine sweat glands |
| Holocrine | Entire cell disintegrates | Sebaceous glands |

## Basement Membrane
- **Basal lamina** (lamina lucida + lamina densa) — by epithelial cells
- **Reticular lamina** — by connective tissue (type III collagen)
- Functions: Support, filtration (kidney), cell polarity

> **Clinical Pearl**: In carcinoma in situ, cancer cells have NOT breached the basement membrane. Once they cross it, the cancer becomes invasive.`,
        mnemonics: [
          { text: "MASH for modes of secretion", explanation: "Merocrine (exocytosis, cell intact) — Apocrine (apical pinch-off) — Sebaceous = Holocrine (cell dies). Remember: MAH → Merocrine, Apocrine, Holocrine" },
          { text: "PSEUDOstratified = Pseudo means FALSE — falsely appears stratified", explanation: "All cells sit on basement membrane but not all reach the surface. Found in respiratory tract (trachea, bronchi) — 'pseudo' = false layering" }
        ],
        keyPoints: [
          "Epithelium is avascular and rests on a basement membrane",
          "Classified by layers (simple/stratified) and cell shape (squamous/cuboidal/columnar)",
          "Pseudostratified: all cells on BM, not all reach surface — found in trachea",
          "Transitional epithelium (urothelium) lines urinary tract, allows distension",
          "Three modes of secretion: Merocrine (exocytosis), Apocrine (apical pinch), Holocrine (cell death)",
          "Basement membrane = basal lamina + reticular lamina"
        ],
        textbookRefs: [
          { book: "Inderbir Singh Histology", chapter: "Ch 4 - Epithelial Tissue", edition: "8th" },
          { book: "BD Chaurasia", chapter: "General Anatomy - Epithelium", edition: "8th" }
        ] },
      { layer: 2, slug: "epithelial-tissue-mechanism", title: "Epithelial Tissue - Mechanism", estimatedMinutes: 30,
        summary: "Detailed mechanisms of cell junctions, polarity, gland morphology, and epithelial specializations including cilia, microvilli, and stereocilia.",
        contentMd: `# Epithelial Tissue - Mechanism

## Cell Junctions (Junctional Complex)
From apical to basal, the classic junctional complex:

| Junction | Type | Protein | Function |
|----------|------|---------|----------|
| Tight junction (Zonula occludens) | Occluding | Claudins, Occludin | Seals intercellular space; controls paracellular permeability |
| Adherens junction (Zonula adherens) | Anchoring | E-cadherin + catenins | Cell-cell adhesion via actin |
| Desmosome (Macula adherens) | Anchoring | Desmoglein, Desmocollin | Strong spot adhesion via intermediate filaments (keratin) |
| Gap junction (Nexus) | Communicating | Connexin (6 connexins = 1 connexon) | Allows passage of ions, small molecules between cells |
| Hemidesmosome | Anchoring to BM | Integrin | Anchors cell to basement membrane |

## Apical Surface Specializations

### Microvilli
- Finger-like projections with **actin core**
- Increase surface area 20-30x
- **Striated (brush) border**: Small intestinal absorptive cells, PCT of kidney
- **Stereocilia**: Long, non-motile microvilli found in epididymis and inner ear hair cells

### Cilia
- Motile projections with **9+2 microtubule** arrangement (axoneme)
- **Dynein arms** provide motility (require ATP)
- Found in: Trachea, fallopian tubes, ependymal cells
- Movement: Effective (forward) stroke + Recovery stroke

> **Key Difference**: Microvilli have actin core; Cilia have microtubule (9+2) core

## Gland Classification — Detailed

### By Duct Morphology (Exocrine)
| Feature | Classification |
|---------|---------------|
| Duct shape | Simple (unbranched) vs Compound (branched) |
| Secretory unit | Tubular, Acinar (alveolar), Tubuloacinar |

### Examples
- **Simple coiled tubular**: Eccrine sweat glands
- **Simple branched acinar**: Sebaceous glands
- **Compound tubuloacinar**: Submandibular salivary gland, pancreas
- **Compound acinar**: Parotid gland (purely serous)

### Serous vs Mucous Secretions
| Feature | Serous | Mucous |
|---------|--------|--------|
| Secretion | Watery, enzyme-rich | Thick, glycoprotein-rich (mucin) |
| Nucleus | Round, central | Flat, basal (pushed by mucin) |
| Staining | Dark (basophilic) | Pale/clear (PAS positive) |
| Example | Parotid | Sublingual |
| Mixed | — | Submandibular (mixed, predominantly serous) |

**Serous demilune**: Crescent of serous cells capping a mucous acinus (seen in submandibular gland)

## Epithelial Polarity
- **Apical domain**: Faces lumen (microvilli, cilia)
- **Lateral domain**: Cell junctions (tight, adherens, desmosomes, gap)
- **Basal domain**: Basal lamina, hemidesmosomes, basal infoldings (for ion transport in PCT)

## Metaplasia
- Reversible change of one epithelial type to another
- **Barrett's esophagus**: Stratified squamous → Simple columnar (intestinal type) in lower esophagus due to chronic GERD
- **Smoker's bronchus**: Pseudostratified ciliated columnar → Stratified squamous in bronchi

> **Clinical Pearl**: Metaplasia is adaptive but if the stimulus persists, it may progress to dysplasia and eventually carcinoma.`,
        mnemonics: [
          { text: "TIGHT AD GAP for junctional complex (apical to basal)", explanation: "Tight junction (zonula occludens) → Adherens + Desmosome (anchoring) → Gap junction (nexus). The occluding junction is always most apical." },
          { text: "PAP Smear: Parotid=Acinar=Purely serous", explanation: "Parotid gland is a compound acinar gland that produces purely serous secretions. Submandibular is mixed (predominantly serous). Sublingual is mixed (predominantly mucous)." }
        ],
        keyPoints: [
          "Tight junctions: most apical, use claudins/occludin to seal paracellular space",
          "Desmosomes use desmoglein/desmocollin with keratin filaments — targeted in pemphigus",
          "Microvilli: actin core; Cilia: 9+2 microtubule core with dynein arms",
          "Serous cells: round central nucleus, dark staining; Mucous cells: flat basal nucleus, pale",
          "Parotid = purely serous; Sublingual = predominantly mucous; Submandibular = mixed (serous dominant)",
          "Barrett's esophagus: squamous → columnar metaplasia due to GERD"
        ],
        textbookRefs: [
          { book: "Inderbir Singh Histology", chapter: "Ch 4-5 - Epithelium & Glands", edition: "8th" },
          { book: "BD Chaurasia", chapter: "General Anatomy", edition: "8th" }
        ] },
      { layer: 3, slug: "epithelial-tissue-clinical", title: "Epithelial Tissue - Clinical Application", estimatedMinutes: 20,
        summary: "Clinical correlations of epithelial tissue including carcinomas, autoimmune blistering diseases, ciliary dyskinesia, and metaplasia-dysplasia-carcinoma sequence.",
        contentMd: `# Epithelial Tissue - Clinical Application

## Carcinomas (Epithelial Cancers)
- **Carcinoma** = malignant tumor of epithelial origin (most common type of cancer)
- Named by the type of epithelium:

| Carcinoma Type | Epithelium of Origin | Example |
|----------------|---------------------|---------|
| Squamous cell carcinoma (SCC) | Squamous epithelium | Lung, cervix, skin, esophagus, oral cavity |
| Adenocarcinoma | Glandular epithelium | Lung, colon, breast, prostate, stomach |
| Transitional cell carcinoma (TCC) | Urothelium | Urinary bladder (most common bladder cancer in India) |
| Basal cell carcinoma (BCC) | Basal cells of epidermis | Skin (most common skin cancer; locally invasive, rarely metastasizes) |

> **Clinical Pearl**: In India, oral SCC is very common due to tobacco chewing (gutka, pan masala) and betel nut use. Leukoplakia is a premalignant condition.

## Autoimmune Blistering Diseases

### Pemphigus Vulgaris
- Autoantibodies against **desmoglein 3** (component of desmosomes)
- Causes **intraepidermal** blisters (within the epithelium)
- **Nikolsky sign positive** (skin peels with lateral pressure)
- Suprabasal acantholysis (separation above basal layer)
- **Tzanck cells**: Rounded acantholytic cells on smear

### Bullous Pemphigoid
- Autoantibodies against **hemidesmosomes** (BP180 and BP230)
- Causes **subepidermal** blisters (below the epithelium)
- Tense blisters that do not rupture easily
- Nikolsky sign usually negative

> **High Yield**: Pemphigus = intraepidermal (flaccid blisters), Pemphigoid = subepidermal (tense blisters)

## Kartagener Syndrome (Primary Ciliary Dyskinesia)
- Autosomal recessive defect in **dynein arms** of cilia
- Triad: **Situs inversus** + **Bronchiectasis** + **Sinusitis**
- Male infertility (immotile sperm flagella)
- Impaired mucociliary clearance → recurrent respiratory infections

## Metaplasia-Dysplasia-Carcinoma Sequence
1. **Metaplasia**: Reversible change (e.g., smoker's bronchus: columnar → squamous)
2. **Dysplasia**: Disordered growth with abnormal cells (premalignant)
3. **Carcinoma in situ**: Full-thickness dysplasia, basement membrane intact
4. **Invasive carcinoma**: Breach of basement membrane

## Celiac Disease (Histological Changes)
- Autoimmune reaction to gluten (gliadin) in small intestine
- **Villous atrophy** + **Crypt hyperplasia** + **Increased intraepithelial lymphocytes**
- Loss of brush border microvilli → malabsorption
- Common in India, especially North India (wheat-consuming regions)

## Goblet Cell Hyperplasia
- Increased goblet cells in bronchial epithelium in chronic bronchitis and asthma
- Excess mucus production → airway obstruction
- Reid index > 0.5 in chronic bronchitis (ratio of gland to wall thickness)`,
        mnemonics: [
          { text: "PemphiGUS is intraepidermal (GUS = Gross, Ugly Skin peeling — Nikolsky+)", explanation: "Pemphigus vulgaris targets desmoglein (desmosomes) causing intraepidermal blisters. Nikolsky sign positive. Pemphigoid targets hemidesmosomes causing subepidermal tense blisters." },
          { text: "KBS for Kartagener's triad", explanation: "K-Kartagener = B-Bronchiectasis + S-Sinusitis + Situs inversus. Caused by dynein arm defect in cilia (9+2 arrangement is normal but non-functional)." }
        ],
        keyPoints: [
          "Carcinoma = epithelial cancer; SCC, adenocarcinoma, TCC are major types",
          "Pemphigus vulgaris: anti-desmoglein 3, intraepidermal, Nikolsky positive",
          "Bullous pemphigoid: anti-hemidesmosome, subepidermal, tense blisters",
          "Kartagener syndrome: dynein arm defect → situs inversus + bronchiectasis + sinusitis",
          "Metaplasia → Dysplasia → Carcinoma in situ → Invasive carcinoma",
          "Oral SCC is very common in India due to tobacco/betel nut use"
        ],
        textbookRefs: [
          { book: "Inderbir Singh Histology", chapter: "Ch 4 - Epithelial Tissue", edition: "8th" },
          { book: "BD Chaurasia", chapter: "General Anatomy", edition: "8th" }
        ] },
      { layer: 4, slug: "epithelial-tissue-exam", title: "Epithelial Tissue - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield epithelial tissue facts for NEXT Step 1, NEET PG and university exams. Pattern recognition for MCQs.",
        contentMd: `# Epithelial Tissue - Exam Prep

## One-Liners (Frequently Tested)

- Thinnest epithelium: **Simple squamous** (endothelium, mesothelium)
- Epithelium of trachea: **Pseudostratified ciliated columnar with goblet cells**
- Epithelium of urinary bladder: **Transitional (urothelium)**
- Epithelium of esophagus: **Stratified squamous non-keratinized**
- Epithelium of vagina: **Stratified squamous non-keratinized (estrogen-dependent)**
- Epithelium of skin: **Stratified squamous keratinized**
- Epithelium of stomach: **Simple columnar (surface mucous cells)**
- Epithelium of PCT: **Simple cuboidal with brush border (microvilli)**
- Epithelium of alveoli: **Simple squamous (Type I pneumocytes)**
- Only ductless glands: **Endocrine glands**
- Holocrine gland: **Sebaceous gland**
- Largest serous gland: **Pancreas**
- Largest salivary gland: **Parotid (purely serous)**

## Comparison Table: Salivary Glands

| Feature | Parotid | Submandibular | Sublingual |
|---------|---------|---------------|------------|
| Type | Compound acinar | Compound tubuloacinar | Compound tubuloacinar |
| Secretion | Purely serous | Mixed (serous dominant) | Mixed (mucous dominant) |
| Serous demilune | Absent | Present | Present |
| Duct enters | Opposite upper 2nd molar | Sublingual papilla | Multiple ducts |
| Stone common? | No | **Yes (80%)** — Wharton's duct | Rare |

## Comparison: Pemphigus vs Pemphigoid

| Feature | Pemphigus Vulgaris | Bullous Pemphigoid |
|---------|-------------------|-------------------|
| Target | Desmoglein 3 (desmosome) | BP180/230 (hemidesmosome) |
| Blister level | Intraepidermal | Subepidermal |
| Blister type | Flaccid | Tense |
| Nikolsky sign | Positive | Negative |
| Tzanck cells | Present | Absent |
| Acantholysis | Yes (suprabasal) | No |

## Previous Year Question Themes
- Identify epithelium from histological description/location
- Junction proteins: claudin, connexin, desmoglein
- Ciliary structure: 9+2 microtubule with dynein arms
- Kartagener syndrome triad
- Barrett's esophagus metaplasia type
- Modes of secretion (merocrine, apocrine, holocrine)

## Pattern Recognition for MCQs
- "Mucociliary escalator" → Pseudostratified ciliated columnar epithelium (trachea)
- "Dome-shaped cells that flatten" → Transitional epithelium (bladder)
- "Brush border" → Microvilli on simple cuboidal/columnar (PCT, small intestine)
- "9+2 arrangement" → Cilia (axoneme)
- "Connexon" → Gap junction (6 connexins = 1 connexon)
- "Acantholysis" → Pemphigus vulgaris`,
        mnemonics: [
          { text: "PSS: Parotid Serous Stone-free; Submandibular Stones 80%", explanation: "Parotid is purely serous and stones are rare. Submandibular gland accounts for 80% of salivary stones (Wharton's duct is long, against gravity, alkaline secretion precipitates calcium)." },
          { text: "SOS for lining of wet, friction-prone surfaces", explanation: "Stratified squamous non-keratinized lines: Oral cavity, eSophagus, vagina — all wet surfaces subject to friction (S-squamous, O-oral/esophagus, S-surfaces that are wet)" }
        ],
        keyPoints: [
          "Know the epithelial type for every major organ surface (trachea, bladder, esophagus, skin, PCT)",
          "Parotid = purely serous; Submandibular = 80% of salivary stones (Wharton's duct)",
          "Pemphigus = desmoglein, intraepidermal; Pemphigoid = hemidesmosome, subepidermal",
          "9+2 microtubule with dynein arms = ciliary axoneme; defect = Kartagener syndrome",
          "Barrett's esophagus = squamous → intestinal-type columnar metaplasia"
        ],
        textbookRefs: [
          { book: "Inderbir Singh Histology", chapter: "Ch 4-5", edition: "8th" },
          { book: "BD Chaurasia", chapter: "General Anatomy", edition: "8th" }
        ] },
      { layer: 5, slug: "epithelial-tissue-recall", title: "Epithelial Tissue - Active Recall", estimatedMinutes: 10,
        summary: "Flashcard-style questions for self-testing on epithelial tissue concepts.",
        contentMd: `# Epithelial Tissue - Active Recall

**Q1:** What are the two criteria for classifying epithelium?
> Number of layers (simple vs stratified) and shape of surface cells (squamous, cuboidal, columnar)

**Q2:** Name the epithelium lining the trachea.
> Pseudostratified ciliated columnar epithelium with goblet cells

**Q3:** What is transitional epithelium and where is it found?
> Epithelium that changes shape with stretching (dome-shaped → flat). Found in urinary bladder, ureters, renal pelvis.

**Q4:** Name the three modes of exocrine secretion with examples.
> Merocrine (exocytosis — salivary glands), Apocrine (apical pinch-off — mammary gland), Holocrine (cell death — sebaceous gland)

**Q5:** What is the structural difference between microvilli and cilia?
> Microvilli have an actin core; Cilia have a 9+2 microtubule arrangement (axoneme) with dynein arms

**Q6:** What protein is targeted in pemphigus vulgaris?
> Desmoglein 3 (a desmosomal protein). Causes intraepidermal blisters.

**Q7:** What is Barrett's esophagus?
> Metaplasia of lower esophageal epithelium from stratified squamous to intestinal-type simple columnar, due to chronic GERD. Premalignant condition.

**Q8:** What is Kartagener syndrome?
> Autosomal recessive dynein arm defect causing immotile cilia. Triad: situs inversus + bronchiectasis + sinusitis

**Q9:** Which salivary gland is most prone to stone formation and why?
> Submandibular gland (80% of salivary stones). Wharton's duct is long, runs against gravity, and its secretion is alkaline and viscous.

**Q10:** Name the proteins in tight junctions, desmosomes, and gap junctions.
> Tight junctions: Claudin, Occludin. Desmosomes: Desmoglein, Desmocollin. Gap junctions: Connexin (6 connexins = 1 connexon).

**Q11:** What is the junctional complex order from apical to basal?
> Tight junction (zonula occludens) → Adherens junction (zonula adherens) → Desmosome (macula adherens) → Gap junction

**Q12:** What is the difference between basal lamina and basement membrane?
> Basal lamina = lamina lucida + lamina densa (made by epithelial cells). Basement membrane = basal lamina + reticular lamina (reticular lamina made by connective tissue).`,
        mnemonics: [],
        keyPoints: [
          "12 active recall questions covering classification, junctions, specializations, glands, and clinical correlations"
        ],
        textbookRefs: [
          { book: "Inderbir Singh Histology", chapter: "Ch 4-5", edition: "8th" },
          { book: "BD Chaurasia", chapter: "General Anatomy", edition: "8th" }
        ] },
    ],
  },

  // ─── Topic 2: Connective Tissue ──────────────────────────────
  {
    topicCode: "AN-MOD-09-TOP-02",
    layers: [
      { layer: 1, slug: "connective-tissue-foundation", title: "Connective Tissue - Foundation", estimatedMinutes: 20,
        summary: "Connective tissue is the most abundant and widely distributed tissue. It provides structural support, connects tissues, and includes diverse types from loose areolar to bone and blood.",
        contentMd: `# Connective Tissue - Foundation

## What is Connective Tissue?
- Most **abundant** and **widely distributed** tissue in the body
- Derived from **mesoderm** (mesenchyme in embryo)
- Unlike epithelium: **vascular**, cells widely spaced, abundant **extracellular matrix (ECM)**
- Functions: Support, protection, transport, storage, defense, repair

## Components of Connective Tissue
Three components:
1. **Cells** — fibroblasts, macrophages, mast cells, plasma cells, adipocytes, etc.
2. **Fibers** — collagen, elastic, reticular
3. **Ground substance** — amorphous gel of GAGs, proteoglycans, glycoproteins

## Connective Tissue Cells

| Cell | Function | Key Feature |
|------|----------|-------------|
| Fibroblast | Produces fibers and ground substance | Most common CT cell; active = large, pale nucleus |
| Macrophage (Histiocyte) | Phagocytosis, antigen presentation | Fixed or wandering; part of MPS |
| Mast cell | Releases histamine, heparin | Granules are metachromatic (toluidine blue stains purple) |
| Plasma cell | Produces antibodies (Ig) | "Clock-face" nucleus, perinuclear hof |
| Adipocyte | Fat storage | White (unilocular) or Brown (multilocular) |
| Lymphocyte | Immune surveillance | Small, round, dark nucleus |

## Connective Tissue Fibers

| Fiber | Protein | Staining | Location |
|-------|---------|----------|----------|
| Collagen | Type I (most common) | Eosin (pink) | Tendons, bone, dermis, scar tissue |
| Reticular | Type III collagen | Silver stains (argyrophilic) | Liver, spleen, lymph nodes (framework) |
| Elastic | Elastin + fibrillin | Orcein, Verhoeff stain | Aorta, lung, elastic cartilage, ligamentum flavum |

## Classification of Connective Tissue

### A. Connective Tissue Proper
1. **Loose (Areolar)**: All 3 fiber types, all cell types; beneath epithelium, around organs
2. **Dense Regular**: Parallel collagen bundles; tendons, ligaments, aponeuroses
3. **Dense Irregular**: Random collagen arrangement; dermis, organ capsules
4. **Adipose**: White adipose (energy storage) and Brown adipose (heat production — neonates)
5. **Reticular**: Reticular fibers forming framework; lymphoid organs, bone marrow

### B. Specialized Connective Tissue
- **Cartilage**: Hyaline, Elastic, Fibrocartilage
- **Bone**: Compact and Spongy (cancellous)
- **Blood**: Fluid connective tissue

## Cartilage Types

| Type | Matrix | Location | Perichondrium |
|------|--------|----------|---------------|
| Hyaline | Type II collagen, glassy | Tracheal rings, nose, articular surfaces, fetal skeleton | Yes (except articular) |
| Elastic | Elastic fibers + Type II collagen | Pinna, epiglottis, auditory tube | Yes |
| Fibrocartilage | Type I collagen (dense) | Intervertebral disc, pubic symphysis, menisci | **No** |

## Bone Tissue (Overview)
- **Compact (cortical) bone**: Dense, outer layer; Haversian systems (osteons)
- **Spongy (cancellous) bone**: Inner, trabecular; contains bone marrow
- Bone cells: Osteoblasts (form), Osteocytes (maintain), Osteoclasts (resorb)
- Osteoclasts: Multinucleated, derived from monocytes; reside in Howship's lacunae

## Blood as Connective Tissue
- Fluid ECM = **plasma**
- Cells: RBCs, WBCs, Platelets
- Considered connective tissue because cells are suspended in an extracellular matrix`,
        mnemonics: [
          { text: "FIRM MALPRACTICE for CT cells", explanation: "Fibroblasts, Immune cells (lymphocytes), Reticular cells, Macrophages, Mast cells, Adipocytes, Leukocytes, Plasma cells, Reticular cells — the main cellular residents of connective tissue" },
          { text: "HEF for cartilage types: Hyaline-Elastic-Fibrocartilage", explanation: "Hyaline (most common, glassy, type II collagen), Elastic (pinna, epiglottis), Fibrocartilage (intervertebral disc, NO perichondrium)" }
        ],
        keyPoints: [
          "CT is the most abundant tissue; derived from mesoderm (mesenchyme); vascular",
          "Three components: cells, fibers (collagen, reticular, elastic), ground substance",
          "Fibroblast is the most common CT cell; mast cells have metachromatic granules",
          "Type I collagen: most abundant protein in body (tendons, bone, dermis)",
          "Hyaline cartilage = type II collagen; Fibrocartilage = type I collagen, no perichondrium",
          "Osteoclasts are multinucleated, monocyte-derived, reside in Howship's lacunae"
        ],
        textbookRefs: [
          { book: "Inderbir Singh Histology", chapter: "Ch 6-7 - Connective Tissue", edition: "8th" },
          { book: "BD Chaurasia", chapter: "General Anatomy - CT", edition: "8th" }
        ] },
      { layer: 2, slug: "connective-tissue-mechanism", title: "Connective Tissue - Mechanism", estimatedMinutes: 30,
        summary: "Detailed mechanisms of collagen synthesis, bone formation (intramembranous and endochondral ossification), and cartilage growth patterns.",
        contentMd: `# Connective Tissue - Mechanism

## Collagen Synthesis (Step-by-Step)

### Intracellular Steps
1. **Transcription & Translation**: Preprocollagen synthesized on RER
2. **Signal peptide removal**: Preprocollagen → Procollagen
3. **Hydroxylation**: Proline → Hydroxyproline, Lysine → Hydroxylysine (requires **Vitamin C**, Fe2+, alpha-ketoglutarate)
4. **Glycosylation**: Sugars added to hydroxylysine residues
5. **Triple helix formation**: 3 alpha chains wind into triple helix (procollagen)

### Extracellular Steps
6. **Procollagen peptidase**: Cleaves terminal propeptides → Tropocollagen
7. **Cross-linking**: Lysyl oxidase (Cu2+-dependent) cross-links tropocollagen → Collagen fibril → Collagen fiber

> **Clinical Pearl**: Vitamin C deficiency (scurvy) impairs hydroxylation → defective collagen → bleeding gums, poor wound healing, perifollicular hemorrhage. Common in malnourished populations.

## Collagen Types (Important)

| Type | Structure | Location | Disease if Defective |
|------|-----------|----------|---------------------|
| I | Thick fibrils, 90% of body collagen | Bone, skin, tendon, dentin, scar | Osteogenesis imperfecta |
| II | Thin fibrils | Hyaline & elastic cartilage, vitreous humor | — |
| III | Reticular fibers | Liver, spleen, lymph nodes, blood vessels, fetal skin | Ehlers-Danlos type IV (vascular) |
| IV | Sheet-like (non-fibrillar) | Basement membrane | Alport syndrome (kidney, ear, eye) |
| VII | Anchoring fibrils | Dermal-epidermal junction | Epidermolysis bullosa dystrophica |

## Ground Substance
- **GAGs (Glycosaminoglycans)**: Long polysaccharide chains
  - Hyaluronic acid: Only non-sulfated GAG, not attached to protein
  - Chondroitin sulfate, Heparan sulfate, Keratan sulfate, Dermatan sulfate
- **Proteoglycans**: Core protein + GAG chains (e.g., Aggrecan in cartilage)
- **Glycoproteins**: Fibronectin (cell-matrix adhesion), Laminin (basement membrane)

## Bone Formation (Ossification)

### Intramembranous Ossification
- Flat bones of skull, face, clavicle
- Mesenchyme → Osteoblasts → Osteoid → Mineralization → Bone
- No cartilage intermediate

### Endochondral Ossification
- Long bones, vertebrae, pelvis
- Hyaline cartilage model → replaced by bone
- Steps: Cartilage model → Periosteal bone collar → Primary ossification center (diaphysis) → Secondary ossification center (epiphysis)

### Growth Plate (Epiphyseal Plate) Zones
| Zone | Feature | Mnemonic |
|------|---------|----------|
| Reserve (Resting) | Small chondrocytes, store lipid | R |
| Proliferative | Stacked columns (dividing) | P |
| Hypertrophic | Large, swollen chondrocytes | H |
| Calcification | Matrix calcifies, chondrocytes die | C |
| Ossification | Osteoblasts deposit bone | O |

## Cartilage Growth
- **Interstitial growth**: From within (chondrocytes divide within lacunae). Occurs in young, growing cartilage.
- **Appositional growth**: From surface (perichondrial cells differentiate into chondroblasts). Occurs throughout life.

## Bone Remodeling
- **Osteoblasts**: Secrete osteoid (Type I collagen + ground substance), express **RANKL** and **OPG**
- **Osteoclasts**: Resorb bone using acid + enzymes; activated by **RANK-RANKL** interaction
- **OPG (Osteoprotegerin)**: Decoy receptor that blocks RANKL → inhibits osteoclast activation
- Regulated by: PTH (increases resorption), Calcitonin (decreases resorption), Vitamin D, mechanical loading`,
        mnemonics: [
          { text: "Really Pretty Histology Can Ossify — for growth plate zones", explanation: "Reserve → Proliferative → Hypertrophic → Calcification → Ossification. The zones of the epiphyseal plate from epiphysis to diaphysis." },
          { text: "COLLAGEN needs C: vitamin C for hydroxylation", explanation: "Vitamin C (ascorbic acid) is essential for the hydroxylation step in collagen synthesis (proline → hydroxyproline). Deficiency = scurvy. Also requires Fe2+ and alpha-ketoglutarate." }
        ],
        keyPoints: [
          "Collagen synthesis: intracellular (hydroxylation needs Vit C) then extracellular (cross-linking needs lysyl oxidase + Cu2+)",
          "Type I collagen: most abundant, bone/skin/tendon; Type IV: basement membrane (non-fibrillar)",
          "Intramembranous ossification: flat bones (skull, clavicle); Endochondral: long bones via cartilage model",
          "Growth plate zones: Reserve → Proliferative → Hypertrophic → Calcification → Ossification",
          "RANK-RANKL activates osteoclasts; OPG is a decoy receptor that inhibits resorption",
          "Osteogenesis imperfecta = Type I collagen defect; Alport syndrome = Type IV collagen defect"
        ],
        textbookRefs: [
          { book: "Inderbir Singh Histology", chapter: "Ch 6-9 - CT, Cartilage, Bone", edition: "8th" },
          { book: "BD Chaurasia", chapter: "General Anatomy - Bone & Cartilage", edition: "8th" }
        ] },
      { layer: 3, slug: "connective-tissue-clinical", title: "Connective Tissue - Clinical Application", estimatedMinutes: 20,
        summary: "Clinical diseases of connective tissue: collagen disorders, storage diseases, bone diseases, and tumor types with Indian clinical context.",
        contentMd: `# Connective Tissue - Clinical Application

## Collagen Disorders

### Osteogenesis Imperfecta (Brittle Bone Disease)
- Defect in **Type I collagen** (most are autosomal dominant)
- Features: Fragile bones, **blue sclera**, hearing loss, dental abnormalities
- Type II: Lethal in perinatal period
- Type I: Mildest; compatible with life

### Ehlers-Danlos Syndrome
- Group of disorders affecting collagen synthesis or structure
- Features: Hyperextensible skin, hypermobile joints, easy bruising
- **Type IV (vascular)**: Defective Type III collagen → rupture of arteries and organs (most dangerous)
- Type VI: Defective lysyl hydroxylase

### Marfan Syndrome
- Defect in **fibrillin-1** (FBN1 gene) → defective elastic fibers
- Autosomal dominant
- Features: Tall stature, arachnodactyly, lens subluxation (upward), aortic root dilatation, MVP
- Risk of **aortic dissection** (major cause of death)

### Scurvy (Vitamin C Deficiency)
- Impaired collagen hydroxylation
- Features: Bleeding gums, perifollicular hemorrhage, poor wound healing, corkscrew hairs
- In India: seen in malnourished children and elderly with poor diet
- Subperiosteal hemorrhage in infants can mimic child abuse on X-ray

## Cartilage Disorders

### Achondroplasia
- Most common cause of **dwarfism**
- Mutation in **FGFR3** (gain-of-function → inhibits endochondral ossification)
- Autosomal dominant (most are new mutations)
- Short limbs, normal trunk, large head, frontal bossing
- Intelligence and lifespan: normal

### Relapsing Polychondritis
- Autoimmune destruction of cartilage (Type II collagen)
- Saddle nose, floppy ears, airway compromise

## Bone Diseases

### Osteoporosis
- Decreased bone mass and density (normal mineralization)
- Most common metabolic bone disease
- Risk: Postmenopausal women (estrogen loss → increased RANKL)
- DEXA scan: T-score less than or equal to -2.5
- In India: high prevalence even in young women due to vitamin D deficiency

### Rickets / Osteomalacia
- Defective mineralization of osteoid
- Rickets in children: bowed legs, rachitic rosary, craniotabes, Harrison's sulcus
- Osteomalacia in adults: bone pain, proximal myopathy, Looser zones on X-ray
- Very common in India despite abundant sunlight (dietary deficiency, dark skin, indoor lifestyle)

### Paget Disease of Bone
- Disordered bone remodeling: excessive resorption then excessive formation
- Mosaic/jigsaw pattern on histology
- Elevated serum alkaline phosphatase (calcium and phosphorus normal)
- Risk of osteosarcoma (rare but important)

## Connective Tissue Tumors

| Benign | Malignant | Tissue |
|--------|-----------|--------|
| Lipoma | Liposarcoma | Adipose |
| Chondroma | Chondrosarcoma | Cartilage |
| Osteoma | Osteosarcoma | Bone |
| Fibroma | Fibrosarcoma | Fibrous |
| Hemangioma | Angiosarcoma | Blood vessels |

> **Clinical Pearl**: Osteosarcoma is the most common primary malignant bone tumor in adolescents. In India, the typical presentation is a painful swelling around the knee (distal femur or proximal tibia) with "sunburst" appearance and Codman triangle on X-ray.

## Mast Cell Disorders
- **Mastocytosis**: Abnormal accumulation of mast cells in skin/organs
- **Darier sign**: Urticarial wheal on rubbing a mastocytosis lesion
- Mast cell mediators: Histamine (vasodilation), Heparin (anticoagulant), Tryptase (serum marker)`,
        mnemonics: [
          { text: "MARBLE for Marfan features", explanation: "M-Mitral valve prolapse, A-Aortic root dilation, R-Retinal detachment risk, B-Bone overgrowth (tall, arachnodactyly), L-Lens subluxation (upward), E-Elastic fiber defect (fibrillin-1)" },
          { text: "SCORE for Scurvy features", explanation: "S-Swollen bleeding gums, C-Corkscrew hairs, O-Old wounds re-open, R-Rash (perifollicular hemorrhage), E-Easy bruising. Due to Vitamin C deficiency impairing collagen synthesis." }
        ],
        keyPoints: [
          "Osteogenesis imperfecta: Type I collagen defect → fragile bones, blue sclera",
          "Marfan syndrome: fibrillin-1 defect → aortic dissection risk, lens subluxation upward",
          "Ehlers-Danlos type IV (vascular): Type III collagen → vessel/organ rupture",
          "Achondroplasia: FGFR3 gain-of-function → impaired endochondral ossification → dwarfism",
          "Rickets/Osteomalacia very common in India; Vitamin D deficiency despite sunlight",
          "Osteosarcoma: most common primary malignant bone tumor in adolescents, sunburst on X-ray"
        ],
        textbookRefs: [
          { book: "Inderbir Singh Histology", chapter: "Ch 6-9", edition: "8th" },
          { book: "BD Chaurasia", chapter: "General Anatomy - Bone", edition: "8th" }
        ] },
      { layer: 4, slug: "connective-tissue-exam", title: "Connective Tissue - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield connective tissue facts for NEXT/NEET PG with comparison tables and frequently tested one-liners.",
        contentMd: `# Connective Tissue - Exam Prep

## One-Liners

- Most abundant protein in the body: **Type I Collagen**
- Most common CT cell: **Fibroblast**
- Metachromatic granules (toluidine blue): **Mast cells**
- Clock-face nucleus with perinuclear hof: **Plasma cell**
- Reticular fibers stained by: **Silver stains (argyrophilic)**
- Elastic fibers stained by: **Orcein / Verhoeff stain**
- Only non-sulfated GAG: **Hyaluronic acid**
- Collagen hydroxylation requires: **Vitamin C + Fe2+ + alpha-ketoglutarate**
- Cross-linking of collagen requires: **Lysyl oxidase (Cu2+-dependent)**
- Basement membrane collagen: **Type IV**
- Cartilage without perichondrium: **Fibrocartilage** (and articular hyaline cartilage)
- Bone cells in Howship's lacunae: **Osteoclasts**
- Osteoclasts derived from: **Monocyte lineage**
- Growth plate zone with columns of dividing chondrocytes: **Proliferative zone**
- Most common cause of dwarfism: **Achondroplasia (FGFR3 mutation)**
- Blue sclera is seen in: **Osteogenesis imperfecta**

## Comparison: Collagen Disorders

| Disease | Collagen/Protein | Features |
|---------|-----------------|----------|
| Osteogenesis imperfecta | Type I | Brittle bones, blue sclera |
| Ehlers-Danlos (vascular) | Type III | Vessel rupture |
| Alport syndrome | Type IV | Nephritis, deafness |
| Epidermolysis bullosa dystrophica | Type VII | Skin blistering |
| Marfan syndrome | Fibrillin-1 | Aortic dissection, lens subluxation |
| Scurvy | Hydroxylation defect (Vit C) | Bleeding gums, poor healing |

## Comparison: Cartilage Types

| Feature | Hyaline | Elastic | Fibrocartilage |
|---------|---------|---------|----------------|
| Collagen type | II | II + elastic fibers | I |
| Perichondrium | Yes | Yes | **No** |
| Calcification | Can occur (aging) | Rare | Does not |
| Regeneration | Poor | Poor | Poor |
| Example | Trachea, nose, articular | Pinna, epiglottis | IV disc, meniscus |

## Comparison: Intramembranous vs Endochondral Ossification

| Feature | Intramembranous | Endochondral |
|---------|-----------------|--------------|
| Precursor | Mesenchyme directly | Hyaline cartilage model |
| Bones | Flat bones (skull, face, clavicle) | Long bones, vertebrae, pelvis |
| Cartilage model? | No | Yes |
| Growth plate? | No | Yes (epiphyseal plate) |

## Pattern Recognition
- "Sunburst appearance on X-ray" → Osteosarcoma
- "Mosaic/jigsaw pattern of bone" → Paget disease
- "Rachitic rosary" → Rickets (vitamin D deficiency)
- "Looser zones (pseudofractures)" → Osteomalacia
- "Woven bone replacing lamellar bone" → Paget disease`,
        mnemonics: [
          { text: "I Can BEND — for collagen type diseases", explanation: "I = Type I (Osteogenesis Imperfecta), C = Type III (Cross-linked vessels — EDS vascular), B = Basement membrane Type IV (Alport), E = Type VII (Epidermolysis bullosa), N = Not collagen but fibrilliN (Marfan), D = Defective hydroxylation (scurvy)" },
          { text: "FibrocartilAGE has NO perichondrium", explanation: "Fibrocartilage is the only cartilage type that lacks a perichondrium. Found in intervertebral discs, pubic symphysis, and menisci. Contains Type I collagen (not Type II)." }
        ],
        keyPoints: [
          "Type I collagen = most abundant protein; defects cause osteogenesis imperfecta",
          "Type IV collagen = basement membrane; defect = Alport syndrome",
          "Fibrocartilage: no perichondrium, Type I collagen, found in IV discs and menisci",
          "Mast cells: metachromatic granules; Plasma cells: clock-face nucleus",
          "Intramembranous ossification for flat bones; Endochondral for long bones"
        ],
        textbookRefs: [
          { book: "Inderbir Singh Histology", chapter: "Ch 6-9", edition: "8th" },
          { book: "BD Chaurasia", chapter: "General Anatomy", edition: "8th" }
        ] },
      { layer: 5, slug: "connective-tissue-recall", title: "Connective Tissue - Active Recall", estimatedMinutes: 10,
        summary: "Self-test flashcards for connective tissue concepts.",
        contentMd: `# Connective Tissue - Active Recall

**Q1:** Name the three types of CT fibers and their staining.
> Collagen (Eosin — pink), Reticular (Silver stain — argyrophilic), Elastic (Orcein/Verhoeff stain)

**Q2:** What vitamin is essential for collagen hydroxylation?
> Vitamin C (ascorbic acid). Also requires Fe2+ and alpha-ketoglutarate.

**Q3:** What enzyme cross-links collagen fibrils and what cofactor does it need?
> Lysyl oxidase; requires copper (Cu2+)

**Q4:** Name the three types of cartilage and their collagen types.
> Hyaline (Type II), Elastic (Type II + elastic fibers), Fibrocartilage (Type I)

**Q5:** Which cartilage type lacks a perichondrium?
> Fibrocartilage (also articular hyaline cartilage lacks it)

**Q6:** What are the zones of the epiphyseal growth plate?
> Reserve → Proliferative → Hypertrophic → Calcification → Ossification

**Q7:** What is the defect in Marfan syndrome?
> Fibrillin-1 (FBN1 gene) — defective elastic fibers. Risk of aortic dissection.

**Q8:** Differentiate osteoblasts, osteocytes, and osteoclasts.
> Osteoblasts: form bone (secrete osteoid). Osteocytes: maintain bone (in lacunae). Osteoclasts: resorb bone (multinucleated, from monocytes, in Howship's lacunae).

**Q9:** What type of collagen is in the basement membrane?
> Type IV collagen (non-fibrillar, sheet-like). Defect causes Alport syndrome.

**Q10:** What is the difference between intramembranous and endochondral ossification?
> Intramembranous: mesenchyme → bone directly (flat bones). Endochondral: hyaline cartilage model replaced by bone (long bones).

**Q11:** What cell has a clock-face nucleus?
> Plasma cell (abundant RER for antibody production; perinuclear hof = Golgi zone)

**Q12:** Name three features of osteogenesis imperfecta.
> Fragile bones (multiple fractures), blue sclera, hearing loss. Defect in Type I collagen.`,
        mnemonics: [],
        keyPoints: [
          "12 active recall questions covering CT cells, fibers, collagen synthesis, cartilage, bone, and clinical disorders"
        ],
        textbookRefs: [
          { book: "Inderbir Singh Histology", chapter: "Ch 6-9", edition: "8th" },
          { book: "BD Chaurasia", chapter: "General Anatomy", edition: "8th" }
        ] },
    ],
  },

  // ─── Topic 3: Muscle Tissue ──────────────────────────────────
  {
    topicCode: "AN-MOD-09-TOP-03",
    layers: [
      { layer: 1, slug: "muscle-tissue-foundation", title: "Muscle Tissue - Foundation", estimatedMinutes: 20,
        summary: "Muscle tissue is responsible for movement and is classified into three types: skeletal (voluntary, striated), cardiac (involuntary, striated), and smooth (involuntary, non-striated).",
        contentMd: `# Muscle Tissue - Foundation

## Three Types of Muscle

| Feature | Skeletal | Cardiac | Smooth |
|---------|----------|---------|--------|
| Location | Attached to bones | Heart wall (myocardium) | Walls of hollow organs, vessels |
| Control | Voluntary | Involuntary | Involuntary |
| Striations | Present | Present | Absent |
| Nuclei | Multinucleated, peripheral | 1-2 central nuclei | Single, central, cigar-shaped |
| Shape | Long, cylindrical | Branching, short | Spindle-shaped (fusiform) |
| Cell junctions | None | Intercalated discs | Gap junctions |
| Regeneration | Limited (satellite cells) | Very limited | Good |

## Skeletal Muscle — Microscopic Structure
- **Muscle fiber** (single cell): Multinucleated syncytium formed by fusion of myoblasts
- Nuclei are **peripheral** (pushed to periphery)
- **Sarcolemma**: Cell membrane of muscle fiber
- **Sarcoplasm**: Cytoplasm containing myofibrils
- **Sarcoplasmic reticulum (SR)**: Smooth ER storing Ca2+
- **T-tubules**: Invaginations of sarcolemma — carry action potential inward

### Sarcomere (Functional Unit)
- Between two **Z-lines (Z-discs)**
- **A-band**: Dark band; contains thick (myosin) filaments; DOES NOT change length during contraction
- **I-band**: Light band; contains thin (actin) filaments only; SHORTENS during contraction
- **H-zone**: Central light area within A-band; myosin only; disappears during full contraction
- **M-line**: Center of sarcomere within H-zone

### Banding Pattern Summary
\`\`\`
Z----I----A(H-M-H)A----I----Z
   thin   thick+thin   thin
\`\`\`

> **Key**: During contraction, I-band and H-zone shorten. A-band stays constant.

## Cardiac Muscle
- **Branching fibers** with 1-2 **centrally placed nuclei**
- **Intercalated discs**: Unique to cardiac muscle
  - Transverse portion: Desmosomes (mechanical coupling) + Fascia adherens
  - Longitudinal portion: **Gap junctions** (electrical coupling → functional syncytium)
- **Striations present** (like skeletal muscle, has sarcomeres)
- Rich in mitochondria (aerobic metabolism, does not fatigue easily)
- T-tubules at **Z-line** (unlike skeletal muscle where they are at A-I junction)

## Smooth Muscle
- **Spindle-shaped** cells with a **single, central, cigar-shaped nucleus**
- **No striations** (no organized sarcomere)
- Contraction via **dense bodies** (equivalent of Z-lines) linked by actin and myosin
- **Calmodulin-dependent** contraction (not troponin)
- Gap junctions allow synchronized contraction (single-unit smooth muscle)
- Found in: GI tract, urinary bladder, uterus, blood vessels, bronchi, iris

## Connective Tissue Coverings of Skeletal Muscle

| Layer | Covers |
|-------|--------|
| Epimysium | Entire muscle |
| Perimysium | Fascicle (bundle of fibers) |
| Endomysium | Individual muscle fiber |

> **Analogy**: Think of a telephone cable — Epimysium = outer sheath, Perimysium = bundles inside, Endomysium = individual wire insulation.`,
        mnemonics: [
          { text: "EPE for muscle coverings (outside → inside)", explanation: "Epimysium (whole muscle) → Perimysium (fascicle) → Endomysium (individual fiber). Think: Every Person Eats — outer to inner wrapping." },
          { text: "Skeletal = Side nuclei; Cardiac = Central nuclei + intercalated disCs; Smooth = Single cigar nucleus", explanation: "S for Skeletal = Side (peripheral) nuclei. C for Cardiac = Central nuclei + interCalated disCs. Smooth = Single central cigar-shaped nucleus, no striations." }
        ],
        keyPoints: [
          "Three muscle types: skeletal (voluntary, striated), cardiac (involuntary, striated), smooth (involuntary, non-striated)",
          "Sarcomere: Z to Z; A-band constant during contraction; I-band and H-zone shorten",
          "Intercalated discs are unique to cardiac muscle — gap junctions allow electrical syncytium",
          "Smooth muscle uses calmodulin (not troponin) for contraction regulation",
          "Cardiac T-tubules at Z-line; Skeletal T-tubules at A-I junction",
          "Muscle coverings: Epimysium → Perimysium → Endomysium"
        ],
        textbookRefs: [
          { book: "Inderbir Singh Histology", chapter: "Ch 10 - Muscle Tissue", edition: "8th" },
          { book: "BD Chaurasia", chapter: "General Anatomy - Muscle", edition: "8th" }
        ] },
      { layer: 2, slug: "muscle-tissue-mechanism", title: "Muscle Tissue - Mechanism", estimatedMinutes: 30,
        summary: "Detailed mechanism of muscle contraction (sliding filament theory), excitation-contraction coupling, motor unit physiology, and smooth muscle contraction pathway.",
        contentMd: `# Muscle Tissue - Mechanism

## Sliding Filament Theory (Skeletal Muscle)
Proposed by Huxley & Hanson:
1. **Action potential** travels along sarcolemma and into T-tubules
2. **Excitation-Contraction (EC) coupling**: T-tubule depolarization activates voltage-gated Ca2+ channels (DHPR) which activates **Ryanodine receptors (RyR1)** on SR
3. **Ca2+ release** from sarcoplasmic reticulum into sarcoplasm
4. Ca2+ binds **troponin C** → conformational change → **tropomyosin** shifts, exposing myosin-binding sites on actin
5. **Cross-bridge cycling**: Myosin head (powered by ATP hydrolysis) binds actin, undergoes power stroke, releases, re-cocks
6. **Relaxation**: Ca2+ pumped back into SR by **SERCA pump** (Ca2+-ATPase)

### Cross-Bridge Cycle Steps
1. **Attachment**: Myosin head binds actin (rigor state)
2. **Power stroke**: ADP + Pi released → myosin head pivots → pulls actin toward M-line
3. **Detachment**: New ATP binds myosin → myosin releases actin
4. **Cocking**: ATP hydrolyzed → myosin head re-cocked (ready for next cycle)

> **Clinical Pearl**: In **rigor mortis** after death, ATP is depleted. Myosin heads remain bound to actin (cannot detach without ATP). Muscles stiffen 2-4 hours after death, resolve in 24-48 hours as proteins degrade. Important in forensic medicine for estimating time of death.

## Motor Unit
- **Motor unit** = One motor neuron + all muscle fibers it innervates
- Small motor units (eye muscles: 1 neuron: ~10 fibers) = fine control
- Large motor units (quadriceps: 1 neuron: ~2000 fibers) = powerful, coarse movements
- **Neuromuscular junction (NMJ)**: Acetylcholine (ACh) released → binds nicotinic receptors → end-plate potential → muscle AP

## Muscle Fiber Types

| Feature | Type I (Slow/Red) | Type IIa (Fast oxidative) | Type IIb (Fast glycolytic/White) |
|---------|-------------------|--------------------------|----------------------------------|
| Contraction speed | Slow | Fast | Fastest |
| Fatigue | Resistant | Intermediate | Fatigues quickly |
| Mitochondria | Many | Many | Few |
| Myoglobin | High (red) | Moderate | Low (white) |
| Metabolism | Oxidative (aerobic) | Mixed | Glycolytic (anaerobic) |
| Example | Postural muscles, soleus | — | Arm/leg for sprinting |

## Cardiac Muscle — Specialized Mechanism
- **Plateau phase** (Phase 2): Long-lasting Ca2+ influx through L-type Ca2+ channels → prevents tetanus
- **Ca2+-induced Ca2+ release (CICR)**: Extracellular Ca2+ triggers RyR2 on SR → larger Ca2+ release
- T-tubules at **Z-line** (wider than skeletal)
- **Functional syncytium**: Gap junctions in intercalated discs allow rapid spread of electrical activity
- Cannot be tetanized (long refractory period = safety mechanism)

## Smooth Muscle Contraction Pathway
1. Ca2+ enters cell (voltage-gated or receptor-operated channels) or released from SR (IP3-mediated)
2. Ca2+ binds **calmodulin** (not troponin — smooth muscle lacks troponin)
3. Ca2+-calmodulin complex activates **MLCK (Myosin Light Chain Kinase)**
4. MLCK phosphorylates myosin light chain → myosin head activated → cross-bridge cycling
5. Relaxation: **MLCP (Myosin Light Chain Phosphatase)** dephosphorylates myosin

### Smooth Muscle Types
- **Single-unit (Visceral)**: Gap junctions, synchronous contraction; GI tract, uterus, ureter
- **Multi-unit**: Each fiber independently innervated; iris, ciliary body, vas deferens, arrector pili

## Satellite Cells
- Quiescent stem cells between sarcolemma and basal lamina of skeletal muscle
- Activated after injury → proliferate → fuse → repair/regenerate muscle fibers
- Cardiac muscle has very limited regeneration (no equivalent of satellite cells)`,
        mnemonics: [
          { text: "CALM Smooth muscle", explanation: "Smooth muscle uses CALModulin (not troponin) to regulate contraction. Ca2+ + Calmodulin → activates MLCK → phosphorylates myosin → contraction." },
          { text: "TRIAD of EC coupling: T-tubule + 2 terminal cisternae of SR", explanation: "The triad is the structural unit for excitation-contraction coupling in skeletal muscle. T-tubule carries the AP inward; terminal cisternae of SR release Ca2+. In cardiac muscle, it is a DIAD (T-tubule + 1 SR cisterna)." }
        ],
        keyPoints: [
          "Sliding filament theory: Ca2+ binds troponin C → tropomyosin shifts → myosin binds actin → power stroke",
          "Rigor mortis: ATP depletion → myosin cannot detach → forensic importance",
          "Motor unit = 1 motor neuron + all fibers it supplies; small units = fine control",
          "Cardiac muscle: CICR (Ca2+-induced Ca2+ release), cannot be tetanized (long refractory period)",
          "Smooth muscle: Calmodulin + MLCK pathway (not troponin); single-unit vs multi-unit types",
          "Satellite cells: skeletal muscle stem cells for repair (between sarcolemma and basal lamina)"
        ],
        textbookRefs: [
          { book: "Inderbir Singh Histology", chapter: "Ch 10 - Muscle Tissue", edition: "8th" },
          { book: "BD Chaurasia", chapter: "General Anatomy - Muscle", edition: "8th" }
        ] },
      { layer: 3, slug: "muscle-tissue-clinical", title: "Muscle Tissue - Clinical Application", estimatedMinutes: 20,
        summary: "Clinical correlations of muscle tissue: muscular dystrophies, myasthenia gravis, malignant hyperthermia, rhabdomyolysis, and cardiac conditions.",
        contentMd: `# Muscle Tissue - Clinical Application

## Duchenne Muscular Dystrophy (DMD)
- **X-linked recessive** (affects boys; mothers are carriers)
- Deficiency of **dystrophin** protein (anchors muscle cytoskeleton to ECM)
- Onset: 2-5 years of age
- Features: Progressive proximal muscle weakness, **pseudohypertrophy of calves** (fat/fibrous replacement), **Gower's sign** (uses hands to climb up legs when standing)
- **Creatine kinase (CK)**: Markedly elevated
- Death by 20s (cardiac/respiratory failure)
- **Becker's**: Milder form, partially functional dystrophin, later onset

> **Indian Context**: DMD is the most common muscular dystrophy. Genetic counseling and carrier detection (elevated CK in carriers) are important, especially in consanguineous families.

## Myasthenia Gravis
- Autoimmune antibodies against **nicotinic acetylcholine receptors** at NMJ
- Features: Fatigable weakness — worsens with repetitive use, improves with rest
- **Ptosis + diplopia** (extraocular muscles affected first)
- **Thymus abnormalities**: Thymic hyperplasia (65%) or thymoma (15%)
- Diagnosis: Anti-AChR antibodies, Edrophonium (Tensilon) test, repetitive nerve stimulation (decremental response)
- Treatment: AChE inhibitors (pyridostigmine), immunosuppressants, thymectomy

## Malignant Hyperthermia
- Autosomal dominant mutation in **Ryanodine receptor (RyR1)**
- Triggered by **succinylcholine or volatile anesthetics** (halothane, sevoflurane)
- Uncontrolled Ca2+ release → sustained muscle contraction → hyperthermia, rhabdomyolysis, metabolic acidosis
- Treatment: **Dantrolene** (blocks RyR1, prevents Ca2+ release from SR)

## Rhabdomyolysis
- Destruction of skeletal muscle with release of intracellular contents
- Causes: Crush injury (building collapse, road accidents common in India), prolonged immobilization, statins, infections
- Released contents: **Myoglobin** (myoglobinuria — dark urine), CK, K+, phosphate
- Complication: **Acute kidney injury** (myoglobin blocks renal tubules)
- Treatment: Aggressive IV fluid resuscitation, alkalinize urine

## Cardiac Conditions

### Myocardial Infarction (MI)
- Necrosis of cardiac muscle due to ischemia
- Histology: **Coagulative necrosis** with contraction bands
- Cardiac muscle has very limited regeneration → replaced by fibrosis (scar)
- Elevated cardiac biomarkers: **Troponin I/T** (most specific), CK-MB

### Hypertrophic Cardiomyopathy (HCM)
- Mutations in sarcomeric proteins (beta-myosin heavy chain most common)
- Histology: **Myocardial fiber disarray** (chaotic arrangement)
- Most common cause of **sudden cardiac death in young athletes**
- Asymmetric septal hypertrophy, LVOT obstruction

## Smooth Muscle Pathology

### Leiomyoma (Fibroid)
- Benign tumor of smooth muscle — **most common tumor in females**
- Location: Uterus (most common site)
- Very common in Indian women, especially after 30 years
- Estrogen-dependent; regresses after menopause
- Histology: Whorled bundles of smooth muscle with cigar-shaped nuclei

### Leiomyosarcoma
- Malignant smooth muscle tumor
- More common in soft tissue and retroperitoneum`,
        mnemonics: [
          { text: "DANG for Duchenne features", explanation: "D-Dystrophin absent, A-Affects boys (X-linked), N-No functional dystrophin, G-Gower's sign + pseudohypertrophy of calves. CK markedly elevated. Death by 20s." },
          { text: "MG = My Gravis: fatigue worsens with use, thymus is the culprit", explanation: "Myasthenia Gravis: Antibodies against nicotinic AChR at NMJ. Fatigable weakness. Thymus involved (hyperplasia/thymoma). Ptosis and diplopia are early signs." }
        ],
        keyPoints: [
          "DMD: X-linked, absent dystrophin, Gower's sign, pseudohypertrophy, elevated CK, death by 20s",
          "Myasthenia gravis: anti-AChR antibodies, fatigable weakness, thymus involvement",
          "Malignant hyperthermia: RyR1 mutation, triggered by anesthetics, treated with dantrolene",
          "Rhabdomyolysis: myoglobinuria, elevated CK, risk of AKI; crush injuries common in India",
          "Leiomyoma: most common tumor in females, benign uterine smooth muscle tumor",
          "HCM: sarcomeric protein mutation, myofiber disarray, sudden death in young athletes"
        ],
        textbookRefs: [
          { book: "Inderbir Singh Histology", chapter: "Ch 10", edition: "8th" },
          { book: "BD Chaurasia", chapter: "General Anatomy", edition: "8th" }
        ] },
      { layer: 4, slug: "muscle-tissue-exam", title: "Muscle Tissue - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield muscle tissue facts for NEXT/NEET PG including comparison tables and commonly tested one-liners.",
        contentMd: `# Muscle Tissue - Exam Prep

## One-Liners

- Functional unit of skeletal muscle: **Sarcomere (Z to Z)**
- Band that does NOT shorten during contraction: **A-band (anisotropic, dark)**
- Bands that shorten during contraction: **I-band and H-zone**
- Ca2+ storage in muscle: **Sarcoplasmic reticulum**
- T-tubule location in skeletal muscle: **A-I junction**
- T-tubule location in cardiac muscle: **Z-line**
- Triad: **1 T-tubule + 2 terminal cisternae of SR** (skeletal muscle)
- Diad: **1 T-tubule + 1 SR cisterna** (cardiac muscle)
- Intercalated discs unique to: **Cardiac muscle**
- Smooth muscle contraction regulated by: **Calmodulin + MLCK** (not troponin)
- Muscle that cannot be tetanized: **Cardiac muscle** (long refractory period)
- Ca2+-induced Ca2+ release (CICR): **Cardiac muscle**
- Stem cells of skeletal muscle: **Satellite cells**
- Protein absent in DMD: **Dystrophin**
- Treatment of malignant hyperthermia: **Dantrolene**
- Most specific cardiac biomarker: **Troponin I/T**
- Most common benign tumor of uterus: **Leiomyoma (fibroid)**

## Comparison: Three Muscle Types (Detailed)

| Feature | Skeletal | Cardiac | Smooth |
|---------|----------|---------|--------|
| Striations | Yes | Yes | No |
| Nuclei | Multiple, peripheral | 1-2, central | Single, central |
| Intercalated discs | No | Yes | No |
| Gap junctions | No | Yes (in discs) | Yes |
| T-tubules | A-I junction | Z-line | Absent (caveolae instead) |
| EC coupling | Triad | Diad/CICR | IP3/Ca2+ channels |
| Ca2+ sensor | Troponin C | Troponin C | Calmodulin |
| Tetanus possible | Yes | No | Yes |
| Regeneration | Limited (satellite cells) | Very limited | Good |

## Comparison: DMD vs Becker

| Feature | Duchenne (DMD) | Becker (BMD) |
|---------|----------------|--------------|
| Inheritance | X-linked recessive | X-linked recessive |
| Dystrophin | Absent (frameshift/deletion) | Reduced/abnormal (in-frame) |
| Onset | 2-5 years | Adolescence/adulthood |
| Severity | Severe | Milder |
| CK | Very high (50-100x) | Elevated (5-25x) |
| Wheelchair | By 12 years | After 16 years |
| Death | By 20s | 40s-50s |

## Pattern Recognition
- "Pseudohypertrophy of calves + Gower's sign in a boy" → DMD
- "Ptosis worsening in the evening" → Myasthenia gravis
- "Dark urine after crush injury" → Rhabdomyolysis (myoglobinuria)
- "Fiber disarray on cardiac biopsy" → HCM
- "Hyperthermia after anesthesia" → Malignant hyperthermia (RyR1)
- "Whorled smooth muscle bundles in uterus" → Leiomyoma`,
        mnemonics: [
          { text: "A-band = Always constant; I-band = I shrink", explanation: "During contraction, A-band length does NOT change (it is anisotropic). I-band (isotropic, light band) shortens. H-zone also disappears." },
          { text: "DAnTRolene for DAngeRous Temperature (malignant hyperthermia)", explanation: "Dantrolene blocks ryanodine receptor (RyR1) on SR, preventing uncontrolled Ca2+ release. It is the specific antidote for malignant hyperthermia." }
        ],
        keyPoints: [
          "A-band constant during contraction; I-band and H-zone shorten",
          "Skeletal: triad at A-I junction; Cardiac: diad at Z-line; Smooth: caveolae",
          "Cardiac muscle uses CICR and cannot be tetanized",
          "DMD: absent dystrophin; Becker: reduced dystrophin",
          "Troponin I/T = most specific cardiac biomarker for MI"
        ],
        textbookRefs: [
          { book: "Inderbir Singh Histology", chapter: "Ch 10", edition: "8th" },
          { book: "BD Chaurasia", chapter: "General Anatomy", edition: "8th" }
        ] },
      { layer: 5, slug: "muscle-tissue-recall", title: "Muscle Tissue - Active Recall", estimatedMinutes: 10,
        summary: "Self-test flashcards for muscle tissue concepts.",
        contentMd: `# Muscle Tissue - Active Recall

**Q1:** Name the three types of muscle and their key distinguishing features.
> Skeletal (voluntary, striated, peripheral nuclei), Cardiac (involuntary, striated, central nuclei, intercalated discs), Smooth (involuntary, non-striated, single cigar-shaped nucleus)

**Q2:** What is the functional unit of skeletal muscle?
> Sarcomere — defined as the region between two Z-lines

**Q3:** Which band remains constant during contraction?
> A-band (anisotropic). I-band and H-zone shorten.

**Q4:** What is unique about cardiac muscle junctions?
> Intercalated discs containing desmosomes (mechanical coupling) and gap junctions (electrical coupling — functional syncytium)

**Q5:** Why can cardiac muscle not be tetanized?
> Long absolute refractory period (due to plateau phase of cardiac AP). This prevents sustained contraction and ensures rhythmic beating.

**Q6:** How does smooth muscle contraction differ from skeletal?
> Smooth muscle uses calmodulin + MLCK pathway (not troponin). Ca2+-calmodulin activates MLCK which phosphorylates myosin.

**Q7:** What protein is absent in Duchenne muscular dystrophy?
> Dystrophin. X-linked recessive. Gower's sign, pseudohypertrophy of calves.

**Q8:** What triggers malignant hyperthermia and how is it treated?
> Triggered by succinylcholine or volatile anesthetics (in patients with RyR1 mutation). Treated with dantrolene.

**Q9:** What are satellite cells?
> Quiescent stem cells of skeletal muscle, located between sarcolemma and basal lamina. Activated after injury for repair.

**Q10:** Where are T-tubules located in skeletal vs cardiac muscle?
> Skeletal: A-I junction (triad). Cardiac: Z-line (diad).

**Q11:** What is the most common tumor in females?
> Leiomyoma (uterine fibroid) — benign smooth muscle tumor. Estrogen-dependent.

**Q12:** Name the CT coverings of skeletal muscle from outside to inside.
> Epimysium (whole muscle) → Perimysium (fascicle) → Endomysium (individual fiber)`,
        mnemonics: [],
        keyPoints: [
          "12 active recall questions covering muscle types, sarcomere, contraction mechanisms, and clinical conditions"
        ],
        textbookRefs: [
          { book: "Inderbir Singh Histology", chapter: "Ch 10", edition: "8th" },
          { book: "BD Chaurasia", chapter: "General Anatomy", edition: "8th" }
        ] },
    ],
  },

  // ─── Topic 4: Nervous Tissue ─────────────────────────────────
  {
    topicCode: "AN-MOD-09-TOP-04",
    layers: [
      { layer: 1, slug: "nervous-tissue-foundation", title: "Nervous Tissue - Foundation", estimatedMinutes: 20,
        summary: "Nervous tissue consists of neurons (signal transmission) and neuroglia (support cells). Neurons have a cell body, dendrites, and an axon. Neuroglia outnumber neurons and play vital roles in myelination, support, and defense.",
        contentMd: `# Nervous Tissue - Foundation

## Components
1. **Neurons** (nerve cells): Excitable cells for signal transmission
2. **Neuroglia** (glial cells): Supporting cells; outnumber neurons ~10:1

## Neuron Structure

### Cell Body (Soma/Perikaryon)
- Contains **nucleus** with prominent nucleolus
- **Nissl bodies (substance)**: Rough ER + polyribosomes; present in cell body and dendrites, **absent in axon hillock and axon**
- **Neurofibrils**: Cytoskeletal elements (neurofilaments, microtubules)
- **Lipofuscin**: "Wear and tear" pigment; increases with age

### Dendrites
- Receive signals (afferent processes)
- Multiple, branching, contain Nissl substance
- Have **dendritic spines** (increase surface area for synapses)

### Axon
- Single, long process; transmits signals away from cell body (efferent)
- Arises from **axon hillock** (trigger zone for action potential)
- **No Nissl substance** in axon hillock or axon
- **Axoplasmic transport**: Anterograde (kinesin, toward terminal) and Retrograde (dynein, toward soma)
- Ends in **axon terminals (synaptic boutons)** containing synaptic vesicles

## Classification of Neurons

### By Number of Processes
| Type | Processes | Example |
|------|-----------|---------|
| Unipolar (pseudounipolar) | 1 process (splits into 2) | Dorsal root ganglion (sensory) |
| Bipolar | 2 processes (1 dendrite + 1 axon) | Retina, olfactory epithelium, vestibular ganglion |
| Multipolar | Multiple dendrites + 1 axon | Motor neurons, Purkinje cells, pyramidal cells |

### By Function
- **Sensory (afferent)**: Carry impulses to CNS
- **Motor (efferent)**: Carry impulses from CNS
- **Interneurons**: Connect neurons within CNS

## Neuroglia (Glial Cells)

### CNS Glia

| Cell | Function | Key Feature |
|------|----------|-------------|
| Astrocyte | Support, BBB formation, metabolic support, scar formation | Star-shaped; **GFAP** (marker); form **glial scar** after CNS injury |
| Oligodendrocyte | Myelination in CNS | 1 oligodendrocyte myelinates multiple axons (up to 50) |
| Microglia | Phagocytosis, immune defense | Derived from **monocytes/mesoderm** (not neuroectoderm); resident macrophages of CNS |
| Ependymal cells | Line ventricles, produce CSF (choroid plexus) | Ciliated; facilitate CSF flow |

### PNS Glia

| Cell | Function |
|------|----------|
| Schwann cell | Myelination in PNS; 1 Schwann cell myelinates 1 internode of 1 axon |
| Satellite cell | Support cell bodies in ganglia (DRG, autonomic ganglia) |

## Myelination
- **Myelin sheath**: Concentric layers of lipid-rich cell membrane wrapped around axons
- Provides **insulation** → increases speed of nerve impulse (saltatory conduction)
- **Nodes of Ranvier**: Gaps between myelin segments; Na+ channels concentrated here
- **CNS**: Oligodendrocytes (1 cell → many axons)
- **PNS**: Schwann cells (1 cell → 1 internode)

> **Key Difference**: Oligodendrocyte = CNS = multiple axons; Schwann cell = PNS = single internode`,
        mnemonics: [
          { text: "O for Oligodendrocyte = O for cOlOny (myelinates many axons in CNS)", explanation: "Oligodendrocyte myelinates multiple axons (up to 50) in the CNS. Schwann cell myelinates only one internode of one axon in the PNS." },
          { text: "Astrocytes Are star-shaped and form the BBB Barrier", explanation: "Astrocytes are star-shaped glial cells that form the blood-brain barrier (foot processes on capillaries). GFAP is their marker. They form glial scars after CNS injury." }
        ],
        keyPoints: [
          "Neurons: cell body (Nissl bodies), dendrites (receive), axon (transmit); Nissl absent in axon hillock and axon",
          "Neuroglia outnumber neurons ~10:1; include astrocytes, oligodendrocytes, microglia, ependymal cells (CNS) + Schwann cells, satellite cells (PNS)",
          "Astrocytes: GFAP marker, BBB formation, glial scar; Microglia: monocyte-derived, phagocytic",
          "Oligodendrocyte: myelinates multiple axons (CNS); Schwann cell: 1 internode (PNS)",
          "Nodes of Ranvier: gaps in myelin for saltatory conduction (Na+ channels concentrated here)",
          "Pseudounipolar neurons: DRG; Bipolar: retina, olfactory; Multipolar: motor neurons"
        ],
        textbookRefs: [
          { book: "Inderbir Singh Histology", chapter: "Ch 11 - Nervous Tissue", edition: "8th" },
          { book: "BD Chaurasia", chapter: "General Anatomy - Nervous Tissue", edition: "8th" }
        ] },
      { layer: 2, slug: "nervous-tissue-mechanism", title: "Nervous Tissue - Mechanism", estimatedMinutes: 30,
        summary: "Detailed mechanisms of synaptic transmission, axoplasmic transport, nerve fiber classification, myelination process, and degeneration-regeneration of nerves.",
        contentMd: `# Nervous Tissue - Mechanism

## Synapse (Chemical)
- Junction between two neurons (or neuron and effector)
- **Components**: Presynaptic terminal → Synaptic cleft (20-30 nm) → Postsynaptic membrane

### Synaptic Transmission Steps
1. AP reaches presynaptic terminal
2. Voltage-gated **Ca2+ channels** open → Ca2+ influx
3. Ca2+ triggers **exocytosis** of synaptic vesicles
4. Neurotransmitter released into synaptic cleft
5. NT binds **receptors** on postsynaptic membrane
6. Postsynaptic potential generated (EPSP or IPSP)
7. NT removed by: **Reuptake**, **Enzymatic degradation**, or **Diffusion**

### Types of Synapses
| Type | Location | Most Common |
|------|----------|-------------|
| Axodendritic | Axon → Dendrite | Most common |
| Axosomatic | Axon → Cell body | — |
| Axoaxonic | Axon → Axon | Presynaptic inhibition |

### Electrical Synapse (Gap Junction)
- Direct ionic coupling via **connexons**
- Very fast, bidirectional
- Found in: Cardiac muscle (intercalated discs), smooth muscle, some CNS neurons

## Axoplasmic Transport

| Direction | Motor Protein | Cargo | Speed |
|-----------|--------------|-------|-------|
| Anterograde (fast) | Kinesin | Vesicles, organelles, NT | 200-400 mm/day |
| Anterograde (slow) | — | Cytoskeletal elements, enzymes | 0.5-5 mm/day |
| Retrograde | Dynein | Recycled material, growth factors, viruses | 100-200 mm/day |

> **Clinical Pearl**: Retrograde transport is exploited by **rabies virus** and **herpes simplex virus** to travel from peripheral nerves to CNS. Tetanus toxin also reaches CNS via retrograde transport.

## Nerve Fiber Classification

### Erlanger-Gasser Classification
| Type | Myelination | Diameter | Speed | Example |
|------|-------------|----------|-------|---------|
| A-alpha | Myelinated (thickest) | 12-20 um | 70-120 m/s | Motor, proprioception |
| A-beta | Myelinated | 5-12 um | 30-70 m/s | Touch, pressure |
| A-delta | Myelinated (thin) | 2-5 um | 12-30 m/s | Fast pain, temperature |
| B | Lightly myelinated | <3 um | 3-15 m/s | Preganglionic autonomic |
| C | Unmyelinated | 0.4-1.2 um | 0.5-2 m/s | Slow pain, postganglionic autonomic |

> **Key**: Speed of conduction is proportional to fiber diameter and degree of myelination

## Degeneration and Regeneration of Peripheral Nerves

### Wallerian Degeneration (Anterograde/Distal Degeneration)
After nerve transection, the **distal segment** degenerates:
1. **Axon disintegrates** distal to injury within 24-48 hours
2. **Myelin breaks down** into lipid droplets (ovoid bodies)
3. **Schwann cells** proliferate and form **Bands of Bungner** (guide tubes for regeneration)
4. **Macrophages** phagocytose debris (important for clearing the path)

### Proximal Changes
- **Chromatolysis** of cell body: Nissl bodies disperse, nucleus moves to periphery, cell body swells
- If neuron survives, regeneration begins from proximal stump

### Regeneration (PNS only — not CNS)
1. **Proximal axon sprouts** multiple growth cones
2. Growth cones follow **Bands of Bungner** (Schwann cell tubes)
3. Successful sprout reaches target; others degenerate
4. **Rate of regeneration**: ~1-3 mm/day (approximately 1 inch/month)
5. Schwann cells remyelinate the regenerated axon

### Why CNS Doesn't Regenerate Well
- Oligodendrocytes produce **myelin-associated inhibitors** (Nogo, MAG, OMgp)
- Astrocytes form **glial scar** (physical barrier)
- No equivalent of Bands of Bungner (no Schwann cells in CNS)

## Blood-Brain Barrier (BBB)
- Formed by: **Tight junctions of brain capillary endothelial cells** + Astrocyte foot processes + Pericytes
- Limits passage of large molecules, bacteria, toxins
- BBB absent in: **Circumventricular organs** (area postrema, median eminence, pineal gland, etc.)

> **Clinical Pearl**: In neonates, the BBB is immature. Bilirubin can cross and deposit in basal ganglia → **Kernicterus** (bilirubin encephalopathy). Very important in Indian context where neonatal jaundice is common.`,
        mnemonics: [
          { text: "KINESIN = KICKS forward (anterograde); DYNEIN = DRAGS back (retrograde)", explanation: "Kinesin moves cargo toward axon terminal (anterograde, + end of microtubule). Dynein moves cargo toward cell body (retrograde, - end). Rabies virus uses dynein for retrograde transport." },
          { text: "BAND of BUNGNER = Bridge for reBUILDing nerves", explanation: "After Wallerian degeneration, Schwann cells proliferate and form Bands of Bungner — guide tubes that direct regenerating axon sprouts. Only in PNS (CNS lacks this, hence poor regeneration)." }
        ],
        keyPoints: [
          "Chemical synapse: Ca2+ influx → vesicle exocytosis → NT release → receptor binding → EPSP/IPSP",
          "Axoplasmic transport: Kinesin (anterograde); Dynein (retrograde — used by rabies, herpes, tetanus toxin)",
          "Nerve fiber speed proportional to diameter and myelination; A-alpha fastest, C-fibers slowest",
          "Wallerian degeneration: distal segment degenerates, Schwann cells form Bands of Bungner",
          "PNS regenerates (~1-3 mm/day via Bands of Bungner); CNS does not (Nogo, glial scar)",
          "BBB formed by tight junctions + astrocyte foot processes; absent at circumventricular organs; immature in neonates (kernicterus risk)"
        ],
        textbookRefs: [
          { book: "Inderbir Singh Histology", chapter: "Ch 11-12 - Nervous Tissue", edition: "8th" },
          { book: "BD Chaurasia", chapter: "General Anatomy - Nervous Tissue", edition: "8th" }
        ] },
      { layer: 3, slug: "nervous-tissue-clinical", title: "Nervous Tissue - Clinical Application", estimatedMinutes: 20,
        summary: "Clinical correlations including demyelinating diseases, neurodegenerative conditions, peripheral neuropathies, and CNS tumors.",
        contentMd: `# Nervous Tissue - Clinical Application

## Demyelinating Diseases

### Multiple Sclerosis (MS)
- Autoimmune destruction of **oligodendrocytes** → CNS demyelination
- **Relapsing-remitting** pattern most common
- Features: Optic neuritis, internuclear ophthalmoplegia, Lhermitte's sign, bladder dysfunction
- MRI: **Periventricular plaques** (Dawson's fingers)
- CSF: Oligoclonal bands, elevated IgG index

### Guillain-Barre Syndrome (GBS)
- Autoimmune destruction of **Schwann cells** → PNS demyelination
- **Ascending paralysis** (starts in feet, moves upward)
- Often post-infectious (Campylobacter jejuni most common trigger)
- CSF: **Albuminocytological dissociation** (elevated protein, normal cell count)
- Can cause respiratory failure (life-threatening)
- Common in India; post-diarrheal illness trigger

## Neurodegenerative Diseases

### Alzheimer Disease
- Most common cause of dementia
- Histology: **Neurofibrillary tangles** (hyperphosphorylated tau protein) + **Amyloid (senile) plaques** (beta-amyloid)
- Progressive memory loss, then global cognitive decline
- Cerebral atrophy, widened sulci, dilated ventricles

### Parkinson Disease
- Loss of **dopaminergic neurons** in substantia nigra (pars compacta)
- Histology: **Lewy bodies** (alpha-synuclein inclusions) in remaining neurons
- Features: Resting tremor, rigidity, bradykinesia, postural instability (TRAP)
- Treatment: Levodopa + Carbidopa

## Peripheral Neuropathies

### Diabetic Neuropathy
- Most common cause of peripheral neuropathy worldwide and in India
- **Distal symmetric polyneuropathy** (stocking-glove pattern): sensory > motor
- Autonomic neuropathy: postural hypotension, gastroparesis, erectile dysfunction
- Due to sorbitol accumulation, microangiopathy, and glycosylation of nerve proteins

### Leprosy (Hansen's Disease)
- **Mycobacterium leprae** has tropism for **Schwann cells** of peripheral nerves
- Most common infectious cause of peripheral neuropathy in India
- Thickened peripheral nerves (ulnar, lateral popliteal, great auricular)
- Tuberculoid form: few lesions, strong cell-mediated immunity
- Lepromatous form: many lesions, weak immunity, highly bacillary

> **Indian Context**: India carries the largest burden of leprosy globally. The National Leprosy Eradication Programme (NLEP) has achieved elimination (prevalence < 1/10,000) at national level but pockets remain.

## CNS Tumors (Glial Tumors)

| Tumor | Cell of Origin | Key Feature |
|-------|---------------|-------------|
| Astrocytoma/GBM | Astrocyte | GBM: "Butterfly" lesion crossing corpus callosum, pseudopalisading necrosis |
| Oligodendroglioma | Oligodendrocyte | "Fried egg" cells on histology, calcification, 1p19q co-deletion |
| Ependymoma | Ependymal cells | In 4th ventricle (children), spinal cord (adults), perivascular rosettes |
| Schwannoma | Schwann cell | Vestibular schwannoma (acoustic neuroma) at CP angle, S100+ |
| Meningioma | Arachnoid cap cells | Most common benign intracranial tumor, psammoma bodies |

## Nerve Injury Classification (Seddon)

| Type | Pathology | Recovery |
|------|-----------|----------|
| Neurapraxia | Focal demyelination, axon intact | Complete recovery (weeks) |
| Axonotmesis | Axon disrupted, endoneurium intact | Good recovery (months; Wallerian degeneration + regeneration) |
| Neurotmesis | Complete nerve transection | No spontaneous recovery (surgery needed) |`,
        mnemonics: [
          { text: "MS = Multiple Sclerosis = Oligodendrocyte problem (CNS); GBS = Guillain Barre = Schwann cell problem (PNS)", explanation: "MS: autoimmune attack on oligodendrocytes (CNS demyelination, periventricular plaques). GBS: autoimmune attack on Schwann cells (PNS demyelination, ascending paralysis, albuminocytological dissociation)." },
          { text: "NAN for Seddon nerve injury: Neurapraxia-Axonotmesis-Neurotmesis (mild → severe)", explanation: "Neurapraxia: only myelin affected, full recovery. Axonotmesis: axon damaged but tubes intact, good recovery. Neurotmesis: complete transection, needs surgery." }
        ],
        keyPoints: [
          "MS: oligodendrocyte destruction (CNS), periventricular plaques; GBS: Schwann cell destruction (PNS), ascending paralysis",
          "Alzheimer: neurofibrillary tangles (tau) + amyloid plaques; Parkinson: Lewy bodies (alpha-synuclein)",
          "Diabetic neuropathy: most common cause of peripheral neuropathy in India; stocking-glove pattern",
          "Leprosy: M. leprae targets Schwann cells; most common infectious neuropathy in India",
          "GBM: butterfly lesion, pseudopalisading necrosis; Oligodendroglioma: fried egg cells, 1p19q deletion",
          "Seddon classification: Neurapraxia → Axonotmesis → Neurotmesis (increasing severity)"
        ],
        textbookRefs: [
          { book: "Inderbir Singh Histology", chapter: "Ch 11-12", edition: "8th" },
          { book: "BD Chaurasia", chapter: "General Anatomy - Nervous Tissue", edition: "8th" }
        ] },
      { layer: 4, slug: "nervous-tissue-exam", title: "Nervous Tissue - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield nervous tissue facts for NEXT/NEET PG with comparison tables and pattern recognition.",
        contentMd: `# Nervous Tissue - Exam Prep

## One-Liners

- Nissl substance is present in: **Cell body and dendrites; ABSENT in axon hillock and axon**
- Wear and tear pigment in neurons: **Lipofuscin**
- Marker for astrocytes: **GFAP (Glial Fibrillary Acidic Protein)**
- Resident macrophages of CNS: **Microglia** (derived from monocytes/mesoderm)
- Myelinating cell of CNS: **Oligodendrocyte** (1 cell → multiple axons)
- Myelinating cell of PNS: **Schwann cell** (1 cell → 1 internode)
- Fastest conducting fibers: **A-alpha (70-120 m/s, large myelinated)**
- Slowest conducting fibers: **C fibers (0.5-2 m/s, unmyelinated)**
- Rate of nerve regeneration: **1-3 mm/day (1 inch/month)**
- Cells forming Bands of Bungner: **Schwann cells (in PNS after Wallerian degeneration)**
- CNS inhibitors of regeneration: **Nogo, MAG, OMgp**
- Virus using retrograde axoplasmic transport: **Rabies, Herpes, Tetanus toxin**
- BBB absent at: **Circumventricular organs (area postrema, median eminence, pineal gland)**
- Neuron with Lewy bodies: **Parkinson disease (alpha-synuclein)**
- CSF finding in GBS: **Albuminocytological dissociation**
- Bacterium targeting Schwann cells: **Mycobacterium leprae**

## Comparison: CNS vs PNS Glia

| Feature | CNS | PNS |
|---------|-----|-----|
| Myelinating cell | Oligodendrocyte | Schwann cell |
| Axons myelinated | Multiple (up to 50) | 1 internode per cell |
| Support cell | Astrocyte | Satellite cell |
| Macrophage | Microglia | Macrophage |
| Lining cell | Ependymal | — |
| Regeneration | Poor (Nogo, glial scar) | Good (Bands of Bungner) |

## Comparison: Wallerian vs Chromatolysis

| Feature | Wallerian Degeneration | Chromatolysis |
|---------|----------------------|---------------|
| Location | Distal to injury | Cell body of injured neuron |
| What happens | Axon + myelin degenerate | Nissl bodies disperse, nucleus eccentric, cell swells |
| Purpose | Clears debris for regeneration | Cell body response to axon injury |
| Cells involved | Schwann cells + Macrophages | — |
| Outcome | Bands of Bungner form | If neuron recovers → Nissl reappears |

## Pattern Recognition
- "Periventricular white matter plaques" → Multiple sclerosis
- "Ascending paralysis post-diarrheal illness" → Guillain-Barre syndrome
- "Fried egg appearance on histology" → Oligodendroglioma
- "Thickened ulnar nerve + skin patch" → Leprosy
- "Kernicterus in neonate" → Immature BBB → bilirubin crosses
- "Clock-face chromatin in cell body" → Plasma cell (not neuron!)
- "Star-shaped cell with GFAP+" → Astrocyte`,
        mnemonics: [
          { text: "OLIGO = O = myelinates LOTS in CNS; SCHWANN = S = Single internode in PNS", explanation: "Oligodendrocyte: one cell myelinates multiple axons in CNS. Schwann cell: one cell myelinates a single internode of one axon in PNS. This distinction is tested repeatedly." },
          { text: "NO GO for CNS regeneration: Nogo, OMgp, Glial scar", explanation: "CNS regeneration is inhibited by Nogo protein, MAG, OMgp (from oligodendrocytes) and glial scar formed by astrocytes. PNS regenerates well via Bands of Bungner." }
        ],
        keyPoints: [
          "Nissl substance: present in soma + dendrites, absent in axon hillock + axon",
          "Oligodendrocyte = CNS myelination (many axons); Schwann = PNS (single internode)",
          "CNS regeneration blocked by Nogo, MAG, glial scar; PNS regenerates via Bands of Bungner",
          "Microglia: monocyte-derived; only CNS glial cell NOT from neuroectoderm",
          "GBS: albuminocytological dissociation in CSF; often post-Campylobacter"
        ],
        textbookRefs: [
          { book: "Inderbir Singh Histology", chapter: "Ch 11-12", edition: "8th" },
          { book: "BD Chaurasia", chapter: "General Anatomy", edition: "8th" }
        ] },
      { layer: 5, slug: "nervous-tissue-recall", title: "Nervous Tissue - Active Recall", estimatedMinutes: 10,
        summary: "Self-test flashcards for nervous tissue concepts.",
        contentMd: `# Nervous Tissue - Active Recall

**Q1:** Where is Nissl substance found and where is it absent?
> Found in cell body and dendrites. Absent in axon hillock and axon.

**Q2:** Name the 4 types of CNS glial cells and their functions.
> Astrocytes (BBB, support, glial scar), Oligodendrocytes (CNS myelination), Microglia (phagocytosis, monocyte-derived), Ependymal cells (line ventricles, CSF production)

**Q3:** What is the difference between oligodendrocytes and Schwann cells?
> Oligodendrocytes: myelinate multiple axons in CNS. Schwann cells: myelinate one internode of one axon in PNS.

**Q4:** What is Wallerian degeneration?
> Degeneration of the distal segment after nerve transection. Axon and myelin break down; Schwann cells form Bands of Bungner; macrophages clear debris.

**Q5:** Why does the CNS not regenerate well after injury?
> Oligodendrocytes produce myelin-associated inhibitors (Nogo, MAG, OMgp). Astrocytes form a glial scar. No Bands of Bungner equivalent.

**Q6:** What is the rate of peripheral nerve regeneration?
> Approximately 1-3 mm/day (about 1 inch/month)

**Q7:** Name the motor proteins for anterograde and retrograde axoplasmic transport.
> Anterograde: Kinesin. Retrograde: Dynein. (Rabies virus uses dynein for retrograde transport to CNS)

**Q8:** What is the CSF finding in GBS?
> Albuminocytological dissociation — elevated protein with normal cell count

**Q9:** What is the marker for astrocytes?
> GFAP (Glial Fibrillary Acidic Protein)

**Q10:** Which organism targets Schwann cells in peripheral nerves?
> Mycobacterium leprae (leprosy). Most common infectious neuropathy in India.

**Q11:** Classify nerve fibers by Seddon's classification.
> Neurapraxia (myelin only, full recovery) → Axonotmesis (axon damaged, good recovery) → Neurotmesis (complete transection, needs surgery)

**Q12:** What forms the blood-brain barrier?
> Tight junctions of brain capillary endothelial cells + Astrocyte foot processes + Pericytes. Absent at circumventricular organs.`,
        mnemonics: [],
        keyPoints: [
          "12 active recall questions covering neuron structure, glia, myelination, degeneration/regeneration, and clinical conditions"
        ],
        textbookRefs: [
          { book: "Inderbir Singh Histology", chapter: "Ch 11-12", edition: "8th" },
          { book: "BD Chaurasia", chapter: "General Anatomy", edition: "8th" }
        ] },
    ],
  },

  // ─── Topic 5: Special Histology (Organs) ─────────────────────
  {
    topicCode: "AN-MOD-09-TOP-05",
    layers: [
      { layer: 1, slug: "special-histology-foundation", title: "Special Histology (Organs) - Foundation", estimatedMinutes: 20,
        summary: "Special histology covers the microscopic structure of organs: liver lobule, kidney nephron, lung alveoli, intestinal villi, and skin layers. Understanding organ microanatomy is essential for correlating structure with function.",
        contentMd: `# Special Histology (Organs) - Foundation

## 1. Liver Lobule

### Classic Hepatic Lobule
- **Hexagonal** in shape with central vein at center
- **Portal triads** at corners (3 structures):
  1. Branch of hepatic artery
  2. Branch of portal vein
  3. Bile ductule
- **Hepatocytes**: Arranged in plates/cords radiating from central vein
- **Sinusoids**: Specialized capillaries between hepatocyte plates; blood flows from periphery (portal triad) → center (central vein)
- **Space of Disse**: Between sinusoidal endothelium and hepatocytes; contains stellate cells (Ito cells)
- **Kupffer cells**: Resident macrophages within sinusoids (part of MPS)
- **Bile flow**: Opposite to blood — from center (bile canaliculi) → periphery (bile ductule at portal triad)

### Other Lobule Concepts
- **Portal lobule**: Triangle with 3 central veins at corners, portal triad at center (emphasizes bile drainage)
- **Liver acinus (Rappaport)**: Diamond-shaped, zones 1-3 based on oxygen supply
  - Zone 1 (periportal): Best oxygenated, first to regenerate, glycogen storage/gluconeogenesis
  - Zone 3 (pericentral): Least oxygenated, first to undergo necrosis in ischemia, CYP450 drug metabolism

## 2. Kidney Nephron

### Parts of the Nephron
1. **Renal corpuscle**: Glomerulus + Bowman's capsule (in cortex)
2. **Proximal convoluted tubule (PCT)**: Cuboidal cells with brush border, abundant mitochondria
3. **Loop of Henle**: Thin descending → Thin ascending → Thick ascending
4. **Distal convoluted tubule (DCT)**: Cuboidal cells WITHOUT brush border
5. **Collecting duct**: Principal cells (water reabsorption, ADH) and Intercalated cells (acid-base)

### Glomerular Filtration Barrier (3 Layers)
1. **Fenestrated endothelium** of glomerular capillary (large pores, no diaphragm)
2. **Glomerular basement membrane (GBM)**: Type IV collagen, laminin, heparan sulfate (charge barrier)
3. **Podocytes** (visceral epithelium): Foot processes with filtration slits (slit diaphragm — **nephrin** protein)

### Juxtaglomerular Apparatus (JGA)
- **JG cells** (modified smooth muscle in afferent arteriole): Secrete **renin**
- **Macula densa** (modified DCT cells): Sense NaCl concentration
- **Extraglomerular mesangial cells** (Lacis cells)

## 3. Lung Alveoli

### Alveolar Wall (Blood-Air Barrier)
Thinnest barrier for gas exchange (~0.5 um):
1. **Type I pneumocyte**: Flat squamous cells; 95% of alveolar surface area; gas exchange
2. **Type II pneumocyte**: Cuboidal cells; secrete **surfactant** (dipalmitoyl phosphatidylcholine — DPPC); can regenerate Type I cells
3. **Alveolar macrophages (Dust cells)**: Phagocytose particles in alveolar lumen
4. **Capillary endothelium** and shared **basement membrane**

### Blood-Air Barrier Layers (from air to blood)
1. Surfactant layer
2. Type I pneumocyte cytoplasm
3. Fused basement membrane
4. Capillary endothelium

## 4. Intestinal Villi (Small Intestine)

### Structure
- **Villi**: Finger-like projections into lumen (increase surface area)
- **Crypts of Lieberkuhn**: Glands at base of villi

### Cell Types
| Cell | Location | Function |
|------|----------|----------|
| Enterocytes (absorptive) | Villus surface | Absorption; brush border (microvilli) |
| Goblet cells | Among enterocytes | Secrete mucus |
| Paneth cells | Base of crypts | Secrete lysozyme, defensins (innate immunity) |
| Enteroendocrine cells | Scattered | Secrete hormones (CCK, secretin, GIP) |
| Stem cells | Base of crypts | Regenerate all epithelial cells (fastest turnover: 3-5 days) |
| M cells (Microfold) | Over Peyer's patches | Sample antigens from lumen → deliver to immune cells |

### Villus Core Contains
- Lacteal (lymphatic capillary — absorbs fat as chylomicrons)
- Blood capillary network
- Smooth muscle fibers (from muscularis mucosae)
- Connective tissue (lamina propria)

### Regional Differences in Small Intestine
| Feature | Duodenum | Jejunum | Ileum |
|---------|----------|---------|-------|
| Special feature | **Brunner's glands** (submucosa) | Tallest villi, plicae circulares most prominent | **Peyer's patches** (aggregated lymphoid follicles) |
| Function | Alkaline mucus (protects from gastric acid) | Maximum absorption | B12 + bile salt absorption |

## 5. Skin Layers

### Epidermis (Stratified Squamous Keratinized)
5 layers from deep to superficial:

| Layer | Features |
|-------|----------|
| Stratum basale (germinativum) | Single layer of stem cells; melanocytes, Merkel cells |
| Stratum spinosum | "Prickle cells" (desmosomes); Langerhans cells (APCs) |
| Stratum granulosum | Keratohyalin granules (profilaggrin); lamellar bodies |
| Stratum lucidum | Only in thick skin (palms, soles); clear, thin layer |
| Stratum corneum | Dead, keratinized, anucleate cells (corneocytes); barrier |

### Dermis
- **Papillary dermis**: Loose CT, dermal papillae, Meissner's corpuscles (touch)
- **Reticular dermis**: Dense irregular CT (Type I collagen), Pacinian corpuscles (pressure/vibration)

### Epidermal Cells (Other Than Keratinocytes)
| Cell | Location | Function | Origin |
|------|----------|----------|--------|
| Melanocyte | Stratum basale | Produces melanin | Neural crest |
| Langerhans cell | Stratum spinosum | Antigen presentation | Bone marrow (monocyte lineage) |
| Merkel cell | Stratum basale | Slow-adapting mechanoreceptor (touch) | Neural crest |

### Skin Appendages
- Hair follicles, sebaceous glands, sweat glands (eccrine + apocrine), nails`,
        mnemonics: [
          { text: "Come, Let's Get Sun Burned for epidermis layers (deep to superficial)", explanation: "Corneum (top), Lucidum, Granulosum, Spinosum, Basale (bottom). Remember bottom to top: Basale-Spinosum-Granulosum-Lucidum-Corneum → BSGLC → 'Come Let's Get Sun Burned' reads top to bottom." },
          { text: "PORTAL TRIAD = 3 structures: Artery + Vein + Bile duct (AVB)", explanation: "At each corner of the classic hepatic lobule, the portal triad contains: a branch of the hepatic artery, a branch of the portal vein, and a bile ductule. Remember AVB — Artery, Vein, Bile duct." }
        ],
        keyPoints: [
          "Liver: Classic lobule is hexagonal; portal triad at corners (artery, vein, bile duct); Kupffer cells in sinusoids",
          "Kidney: Filtration barrier = fenestrated endothelium + GBM + podocyte foot processes (nephrin at slit diaphragm)",
          "Lung: Type I pneumocyte (gas exchange, 95% surface); Type II (surfactant, can regenerate Type I)",
          "Small intestine: Paneth cells at crypt base (defensins); Brunner's glands in duodenum; Peyer's patches in ileum",
          "Skin epidermis layers: Basale → Spinosum → Granulosum → Lucidum → Corneum",
          "Rappaport acinus Zone 1 (periportal): best O2; Zone 3 (pericentral): CYP450, first to necrose in ischemia"
        ],
        textbookRefs: [
          { book: "Inderbir Singh Histology", chapter: "Ch 15-22 - Organ Histology", edition: "8th" },
          { book: "BD Chaurasia", chapter: "Respective regional chapters", edition: "8th" }
        ] },
      { layer: 2, slug: "special-histology-mechanism", title: "Special Histology (Organs) - Mechanism", estimatedMinutes: 30,
        summary: "Detailed functional mechanisms: hepatic blood flow and bile secretion, glomerular filtration and countercurrent mechanism, surfactant physiology, intestinal absorption mechanism, and skin barrier function.",
        contentMd: `# Special Histology (Organs) - Mechanism

## Liver — Functional Mechanisms

### Dual Blood Supply
- **Hepatic artery** (25% of blood, 50% of O2): Oxygenated blood
- **Portal vein** (75% of blood, 50% of O2): Nutrient-rich blood from GI tract
- Both drain into sinusoids → central vein → hepatic veins → IVC

### Bile Formation and Flow
- Hepatocytes secrete bile into **bile canaliculi** (between adjacent hepatocytes)
- Bile flows: Canaliculi → Canals of Hering → Bile ductules (at portal triad) → Right/Left hepatic ducts → Common hepatic duct
- **Bile flow is OPPOSITE to blood flow** (bile: center → periphery; blood: periphery → center)

### Rappaport Liver Acinus — Clinical Significance
| Zone | O2 Level | Function | Pathology |
|------|----------|----------|-----------|
| Zone 1 (periportal) | Highest | Gluconeogenesis, beta-oxidation, cholesterol synthesis | Affected first in toxic injury (phosphorus) |
| Zone 2 (intermediate) | Moderate | Mixed functions | Yellow fever |
| Zone 3 (pericentral) | Lowest | Lipogenesis, CYP450 metabolism, glycolysis | Centrilobular necrosis (ischemia, CCl4, acetaminophen, alcoholic liver disease) |

### Stellate Cells (Ito Cells)
- In Space of Disse
- Store **Vitamin A** (as retinyl esters)
- In chronic liver injury → activated → transform into myofibroblasts → produce collagen → **Liver fibrosis/cirrhosis**

## Kidney — Functional Mechanisms

### Glomerular Filtration
- **GFR**: ~125 mL/min (~180 L/day)
- Filtration depends on: Starling forces (hydrostatic vs oncotic pressure)
- **Charge barrier**: Heparan sulfate in GBM (negative charge repels albumin)
- **Size barrier**: Filtration slits (nephrin)

### Tubular Reabsorption Summary
| Segment | Function | Hormonal Control |
|---------|----------|-----------------|
| PCT | 65-80% of Na+, water, glucose, amino acids, HCO3-; brush border | — |
| Thin descending limb | Water reabsorption (permeable to water, not solutes) | — |
| Thick ascending limb | Na+/K+/2Cl- cotransporter (NKCC2); impermeable to water | — |
| DCT | Na+/Cl- cotransporter (NCC); Ca2+ reabsorption | PTH (Ca2+), Aldosterone (Na+) |
| Collecting duct | Water (AQP-2 channels), Na+/K+ exchange | ADH (water), Aldosterone (Na+/K+) |

### Countercurrent Multiplication
- Creates hypertonic medullary interstitium (up to 1200 mOsm/kg)
- Descending limb: passively loses water
- Ascending limb: actively pumps out NaCl (but impermeable to water)
- **Vasa recta**: Countercurrent exchanger (maintains gradient without washing it out)

## Lung — Surfactant Physiology

### Surfactant
- Produced by **Type II pneumocytes** starting at **~24-28 weeks gestation** (mature by 35 weeks)
- Composition: 90% phospholipids (DPPC = dipalmitoyl phosphatidylcholine = lecithin) + 10% proteins (SP-A, SP-B, SP-C, SP-D)
- Function: **Reduces surface tension** at air-liquid interface → prevents alveolar collapse
- **Laplace's Law**: P = 2T/r → Small alveoli (small r) would collapse without surfactant equalizing tension

### Lecithin/Sphingomyelin (L/S) Ratio
- L/S ratio >= 2.0 indicates lung maturity (amniocentesis)
- **Neonatal Respiratory Distress Syndrome (NRDS)**: Surfactant deficiency in premature infants → alveolar collapse, hyaline membrane formation
- Treatment: Exogenous surfactant + maternal glucocorticoids (betamethasone) before preterm delivery

## Small Intestine — Absorption Mechanism

### Intestinal Epithelial Turnover
- Stem cells at crypt base → migrate upward → differentiate → shed at villus tip
- **Complete turnover in 3-5 days** (fastest epithelial turnover in the body)
- Regulated by **Wnt signaling** pathway

### Brush Border Enzymes
- Sucrase-isomaltase, maltase, lactase (disaccharidases)
- Peptidases, alkaline phosphatase
- Embedded in microvillus membrane

### Fat Absorption (Jejunum)
1. Bile salts emulsify fat
2. Pancreatic lipase digests triglycerides → fatty acids + monoglycerides
3. Absorbed into enterocytes
4. Re-esterified → Chylomicrons formed in Golgi
5. Chylomicrons enter **lacteals** (lymphatic capillaries in villus core)

## Skin — Barrier Function

### Permeability Barrier
- **Lamellar bodies** in stratum granulosum release lipids (ceramides, cholesterol, fatty acids) into intercellular spaces
- Creates a hydrophobic barrier in stratum corneum (the "brick and mortar" model)
- Keratinocytes = bricks; Lamellar lipids = mortar

### Melanin Synthesis
- Melanocytes in stratum basale
- Tyrosine → DOPA → DOPA quinone → Melanin (tyrosinase is rate-limiting enzyme)
- Melanin transferred to keratinocytes via **melanosomes** → supranuclear cap protects DNA from UV

### Wound Healing
- Re-epithelialization: Keratinocytes from wound edges and hair follicles migrate across wound bed
- **Granulation tissue**: New capillaries + fibroblasts in dermis
- **Contraction**: Myofibroblasts (alpha-SMA positive) contract wound edges`,
        mnemonics: [
          { text: "Zone 3 = C-zone: Centrilobular, CYP450, CCl4, Cirrhosis zone", explanation: "Zone 3 of Rappaport acinus (pericentral) has lowest O2, is where CYP450 enzymes are concentrated, and is first affected in ischemia, CCl4 toxicity, acetaminophen overdose, and alcoholic liver disease." },
          { text: "TYPE II = TWICE important: surfactant + regeneration", explanation: "Type II pneumocytes produce surfactant AND can regenerate Type I pneumocytes after injury. They are the stem cells of the alveolar epithelium. Surfactant production begins at 24-28 weeks." }
        ],
        keyPoints: [
          "Liver: dual blood supply (75% portal vein); bile flows opposite to blood; Ito cells store vitamin A and cause fibrosis when activated",
          "Kidney: Filtration barrier has charge barrier (heparan sulfate) and size barrier (nephrin at slit diaphragm); GFR ~125 mL/min",
          "Surfactant by Type II pneumocytes (DPPC); reduces surface tension; mature by 35 weeks; L/S ratio >= 2 = lung maturity",
          "Intestinal epithelium turns over every 3-5 days (fastest in body); Wnt signaling regulates stem cells",
          "Rappaport acinus Zone 3: CYP450, centrilobular necrosis in ischemia and toxins",
          "Skin barrier: lamellar bodies release lipids → brick and mortar model of stratum corneum"
        ],
        textbookRefs: [
          { book: "Inderbir Singh Histology", chapter: "Ch 15-22", edition: "8th" },
          { book: "BD Chaurasia", chapter: "Respective regional chapters", edition: "8th" }
        ] },
      { layer: 3, slug: "special-histology-clinical", title: "Special Histology (Organs) - Clinical Application", estimatedMinutes: 20,
        summary: "Clinical correlations for organ histology: liver cirrhosis, glomerulonephritis, ARDS, celiac disease, intestinal tumors, and skin diseases in Indian context.",
        contentMd: `# Special Histology (Organs) - Clinical Application

## Liver — Clinical

### Cirrhosis
- End-stage of chronic liver disease → fibrosis + regenerative nodules → disrupted lobular architecture
- **Ito cell (stellate cell) activation** → myofibroblasts → collagen deposition in Space of Disse
- Causes in India: **Alcohol** (most common in urban), **Hepatitis B and C** (most common overall), NAFLD
- Complications: Portal hypertension, ascites, variceal bleeding, hepatic encephalopathy, hepatocellular carcinoma

### Hepatocellular Carcinoma (HCC)
- Most common primary liver cancer
- Association: Hepatitis B (most common cause in India), Hepatitis C, cirrhosis, aflatoxin B1
- Histology: Trabecular pattern of malignant hepatocytes; elevated **AFP (alpha-fetoprotein)**

> **Indian Context**: India has a high prevalence of Hepatitis B. Universal HBV vaccination (since 2007 in national immunization schedule) is reducing incidence.

## Kidney — Clinical

### Glomerulonephritis (Key Types)

| Disease | Histology | Mechanism | Clinical |
|---------|-----------|-----------|---------|
| Minimal Change Disease | Normal LM; foot process effacement on EM | T-cell cytokine → podocyte damage | **Most common nephrotic syndrome in children**; responds to steroids |
| Membranous Nephropathy | GBM thickening ("spike and dome" on EM) | Anti-PLA2R antibodies | Most common nephrotic syndrome in adults |
| IgA Nephropathy (Berger) | Mesangial IgA deposits | IgA immune complexes | **Most common GN worldwide**; hematuria after URI |
| Post-streptococcal GN | "Lumpy bumpy" subepithelial deposits | Immune complexes (Type III) | Nephritic syndrome in children; 2-3 weeks after strep infection |

### Diabetic Nephropathy
- **Kimmelstiel-Wilson nodules** (nodular glomerulosclerosis) — pathognomonic
- GBM thickening, mesangial expansion
- Leading cause of ESRD in India (alongside hypertension)

## Lung — Clinical

### NRDS (Neonatal Respiratory Distress Syndrome)
- Surfactant deficiency in **preterm infants** (< 35 weeks)
- Alveolar collapse → hyaline membrane formation → respiratory failure
- Prevention: Antenatal **betamethasone** to mother (accelerates Type II pneumocyte maturation)
- Treatment: Exogenous surfactant, CPAP, mechanical ventilation
- Very significant in India given high rate of preterm births

### ARDS (Adult Respiratory Distress Syndrome)
- Diffuse alveolar damage (DAD) — Type I pneumocyte destruction
- Causes: Sepsis, pneumonia, aspiration, trauma, pancreatitis
- **Hyaline membranes** (fibrin + necrotic debris) in alveoli
- Type II pneumocytes proliferate to regenerate Type I cells

### Pneumoconioses (Occupational Lung Diseases)
- Relevant to Indian industrial workers
- **Silicosis**: Quartz dust → birefringent particles → nodular fibrosis (upper lobes)
- **Asbestosis**: Asbestos → ferruginous bodies → diffuse fibrosis (lower lobes) → mesothelioma risk
- **Coal worker's pneumoconiosis**: Coal dust → anthracosis → PMF

## Small Intestine — Clinical

### Celiac Disease
- Autoimmune reaction to gluten (gliadin) → villous atrophy + crypt hyperplasia + intraepithelial lymphocytes
- Anti-tTG (tissue transglutaminase) antibodies — most sensitive serological marker
- Anti-endomysial antibodies — most specific
- Jejunal biopsy (gold standard): Marsh classification
- High prevalence in North India (wheat-consuming belt)

### Crohn's Disease vs Ulcerative Colitis

| Feature | Crohn's Disease | Ulcerative Colitis |
|---------|----------------|-------------------|
| Location | Any part (mouth to anus), skip lesions | Rectum → colon (continuous) |
| Depth | Transmural (full thickness) | Mucosa and submucosa only |
| Histology | Non-caseating granulomas | Crypt abscesses, pseudopolyps |
| Complications | Fistulae, strictures | Toxic megacolon, cancer risk |
| Hallmark | Cobblestone mucosa, creeping fat | Bloody diarrhea |

### Colorectal Cancer
- 3rd most common cancer worldwide
- In India: increasing incidence with westernization of diet
- Arises from adenomatous polyps (adenoma-carcinoma sequence)
- Histology: Adenocarcinoma forming glands

## Skin — Clinical

### Psoriasis
- Chronic autoimmune skin disease (very common in India)
- Histology: **Acanthosis** (epidermal thickening), **parakeratosis** (retained nuclei in stratum corneum), **Munro microabscesses** (neutrophil collections in stratum corneum)
- Silver-white scales on erythematous base (Auspitz sign: pinpoint bleeding on removal)
- **Koebner phenomenon**: New lesions at sites of trauma

### Basal Cell Carcinoma (BCC)
- Most common skin cancer (sun-exposed areas)
- **Palisading nuclei** at periphery of tumor nests
- Locally invasive, rarely metastasizes ("rodent ulcer")

### Melanoma
- Malignant tumor of melanocytes
- Risk factor: UV exposure, fair skin, dysplastic nevi
- Prognosis depends on **Breslow thickness** (depth of invasion)
- Relatively less common in Indian population (protective melanin) but often diagnosed late`,
        mnemonics: [
          { text: "SPIKEMAN for Membranous Nephropathy", explanation: "Spike and dome pattern on EM; most common nephrotic syndrome in adults; anti-PLA2R antibodies; GBM thickening. 'Spike' = subepithelial deposits creating spike pattern on silver stain." },
          { text: "ITO cells = I Turned On (activated) = fibrosis + cirrhosis", explanation: "Ito (stellate) cells in Space of Disse normally store Vitamin A. When activated by chronic injury (alcohol, hepatitis), they transform into myofibroblasts and produce collagen → liver fibrosis → cirrhosis." }
        ],
        keyPoints: [
          "Cirrhosis: Ito cell activation → fibrosis; HBV/HCV most common cause in India; leads to HCC",
          "Minimal change disease: most common nephrotic syndrome in children; foot process effacement on EM",
          "NRDS: surfactant deficiency in preterm; prevented by antenatal betamethasone; treat with exogenous surfactant",
          "Celiac disease: anti-tTG antibodies, villous atrophy; high prevalence in North India",
          "Crohn's: transmural, skip lesions, granulomas; UC: mucosal, continuous, crypt abscesses",
          "Psoriasis: acanthosis, parakeratosis, Munro microabscesses; very common in India"
        ],
        textbookRefs: [
          { book: "Inderbir Singh Histology", chapter: "Ch 15-22", edition: "8th" },
          { book: "BD Chaurasia", chapter: "Respective regional chapters", edition: "8th" }
        ] },
      { layer: 4, slug: "special-histology-exam", title: "Special Histology (Organs) - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield organ histology facts for NEXT/NEET PG with one-liners and comparison tables.",
        contentMd: `# Special Histology (Organs) - Exam Prep

## One-Liners

### Liver
- Functional unit of liver: **Classic hepatic lobule (hexagonal)**
- Portal triad contains: **Hepatic artery branch + Portal vein branch + Bile ductule**
- Resident macrophage of liver: **Kupffer cell**
- Vitamin A storage cell: **Ito cell (stellate cell) in Space of Disse**
- Zone of liver affected in ischemia/alcohol: **Zone 3 (pericentral/centrilobular)**
- Bile flow direction: **Opposite to blood flow** (center → periphery)

### Kidney
- Filtration barrier layers (3): **Fenestrated endothelium → GBM → Podocyte foot processes**
- Protein in slit diaphragm: **Nephrin**
- Cells that secrete renin: **JG cells (modified afferent arteriolar smooth muscle)**
- PCT has brush border: **Yes (microvilli)**; DCT: **No brush border**
- Most common nephrotic syndrome in children: **Minimal change disease**
- Pathognomonic for diabetic nephropathy: **Kimmelstiel-Wilson nodules**

### Lung
- Type I pneumocyte: **Gas exchange (95% surface area)**
- Type II pneumocyte: **Surfactant production + stem cell for Type I**
- Surfactant main component: **DPPC (dipalmitoyl phosphatidylcholine / lecithin)**
- L/S ratio for lung maturity: **>= 2.0**
- Dust cells: **Alveolar macrophages**
- Blood-air barrier thickness: **~0.5 micrometer**

### Small Intestine
- Brunner's glands location: **Duodenal submucosa**
- Peyer's patches location: **Ileum (anti-mesenteric border)**
- Paneth cells secrete: **Lysozyme + defensins (innate immunity)**
- Fastest epithelial turnover: **Small intestinal epithelium (3-5 days)**
- Most sensitive serological marker for celiac: **Anti-tTG (tissue transglutaminase)**

### Skin
- Layers of epidermis (deep to superficial): **Basale → Spinosum → Granulosum → Lucidum → Corneum**
- Langerhans cells found in: **Stratum spinosum**
- Melanocytes found in: **Stratum basale**
- Stratum lucidum only in: **Thick skin (palms, soles)**
- Rate-limiting enzyme of melanin synthesis: **Tyrosinase**

## Comparison: PCT vs DCT

| Feature | PCT | DCT |
|---------|-----|-----|
| Brush border | Present (microvilli) | Absent |
| Cell shape | Tall cuboidal, eosinophilic | Low cuboidal, pale |
| Mitochondria | Very abundant (basal striations) | Moderate |
| Reabsorption | 65-80% of filtrate | Fine-tuning (Na+, Ca2+) |
| Hormonal control | Limited | Aldosterone, PTH |
| Lumen | Narrow (cells bulge in) | Wide, patent |

## Comparison: Type I vs Type II Pneumocytes

| Feature | Type I | Type II |
|---------|--------|---------|
| Shape | Flat, squamous | Cuboidal |
| Surface area | 95% of alveolar surface | 5% |
| Number | 40% of alveolar cells | 60% of alveolar cells |
| Function | Gas exchange | Surfactant production |
| Regeneration | Cannot regenerate | **Stem cell** — regenerates Type I |
| Organelles | Few | Lamellar bodies (surfactant stores) |

## Pattern Recognition
- "Hexagonal lobule with central vein" → Classic hepatic lobule
- "Spike and dome on silver stain" → Membranous nephropathy
- "Foot process effacement on EM" → Minimal change disease
- "Hyaline membranes in alveoli of neonate" → NRDS (surfactant deficiency)
- "Villous atrophy + crypt hyperplasia" → Celiac disease
- "Kimmelstiel-Wilson nodules" → Diabetic nephropathy
- "Palisading nuclei in skin tumor" → Basal cell carcinoma
- "Munro microabscesses" → Psoriasis`,
        mnemonics: [
          { text: "PCT = Plump Cells with Toothbrush (brush border); DCT = Delicate Cells, Thin (no brush border)", explanation: "PCT cells are tall, eosinophilic with prominent brush border (microvilli for reabsorption). DCT cells are low cuboidal, pale, with NO brush border. PCT reabsorbs 65-80% of filtrate." },
          { text: "BRUNNER = B for Below (submucosa) and Beginning (duodenum)", explanation: "Brunner's glands are in the submucosa of the duodenum. They secrete alkaline mucus to protect duodenal epithelium from gastric acid. This is the only submucosal gland in the small intestine." }
        ],
        keyPoints: [
          "Liver: Kupffer cells (macrophage), Ito cells (Vit A, fibrosis), Zone 3 (ischemia/toxins)",
          "Kidney: Filtration barrier = 3 layers; nephrin at slit diaphragm; PCT has brush border, DCT does not",
          "Lung: Type II = surfactant + stem cell; L/S >= 2.0 = mature; blood-air barrier ~0.5 um",
          "Intestine: Brunner's glands (duodenum, submucosa); Peyer's patches (ileum); turnover 3-5 days",
          "Skin: 5 epidermal layers; melanocytes at basale; Langerhans cells at spinosum"
        ],
        textbookRefs: [
          { book: "Inderbir Singh Histology", chapter: "Ch 15-22", edition: "8th" },
          { book: "BD Chaurasia", chapter: "Respective regional chapters", edition: "8th" }
        ] },
      { layer: 5, slug: "special-histology-recall", title: "Special Histology (Organs) - Active Recall", estimatedMinutes: 10,
        summary: "Self-test flashcards for special organ histology.",
        contentMd: `# Special Histology (Organs) - Active Recall

**Q1:** What are the three structures in a portal triad?
> Branch of hepatic artery, branch of portal vein, and bile ductule

**Q2:** What is the direction of bile flow in the liver?
> Opposite to blood flow: from center (bile canaliculi) → periphery (portal triad bile ductule)

**Q3:** Which zone of the Rappaport liver acinus is most susceptible to ischemia and why?
> Zone 3 (pericentral) — receives the least oxygenated blood

**Q4:** Name the three layers of the glomerular filtration barrier.
> Fenestrated endothelium, glomerular basement membrane (GBM), and podocyte foot processes (with nephrin at slit diaphragm)

**Q5:** What is the difference between PCT and DCT histologically?
> PCT: tall cuboidal cells with brush border (microvilli), narrow lumen. DCT: low cuboidal, no brush border, wider lumen.

**Q6:** What are the two functions of Type II pneumocytes?
> 1. Produce surfactant (DPPC). 2. Act as stem cells to regenerate Type I pneumocytes.

**Q7:** What is the L/S ratio indicating lung maturity?
> L/S ratio >= 2.0. Below this suggests surfactant deficiency and risk of NRDS in preterm neonates.

**Q8:** Where are Brunner's glands found and what do they secrete?
> In the submucosa of the duodenum. They secrete alkaline mucus to protect against gastric acid.

**Q9:** What cell is found at the base of intestinal crypts and what does it secrete?
> Paneth cells — secrete lysozyme and defensins (innate immune defense)

**Q10:** Name the 5 layers of the epidermis from deep to superficial.
> Stratum basale → spinosum → granulosum → lucidum → corneum

**Q11:** What are Kupffer cells and Ito (stellate) cells?
> Kupffer cells: resident macrophages in liver sinusoids. Ito cells: Vitamin A storage cells in Space of Disse; when activated → fibrosis/cirrhosis.

**Q12:** What is the histological hallmark of celiac disease?
> Villous atrophy + crypt hyperplasia + increased intraepithelial lymphocytes (in jejunal biopsy). Anti-tTG is the serological marker.

**Q13:** What is the blood-air barrier composed of (from air to blood)?
> Surfactant layer → Type I pneumocyte → Fused basement membrane → Capillary endothelium

**Q14:** Name the cell in skin that presents antigens and its epidermal layer.
> Langerhans cell, found in stratum spinosum. Derived from bone marrow (monocyte lineage).`,
        mnemonics: [],
        keyPoints: [
          "14 active recall questions covering liver lobule, kidney nephron, lung alveoli, intestinal villi, and skin layers"
        ],
        textbookRefs: [
          { book: "Inderbir Singh Histology", chapter: "Ch 15-22", edition: "8th" },
          { book: "BD Chaurasia", chapter: "Respective regional chapters", edition: "8th" }
        ] },
    ],
  },
];
