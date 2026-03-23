import type { TopicLessons } from "./content-loader";

/**
 * 5-layer lessons for Pathology module PA-MOD-05.
 * Covers GI & Hepatobiliary Pathology.
 * Primary ref: Robbins Pathologic Basis of Disease 10th ed.
 * Secondary ref: Harsh Mohan Textbook of Pathology 8th ed.
 */
export const pathologyPart2Lessons: TopicLessons[] = [
  // ═══════════════════════════════════════════════════════════════
  // PA-MOD-05: GI & HEPATOBILIARY PATHOLOGY
  // ═══════════════════════════════════════════════════════════════

  // ─── Topic 1: Oral & Esophageal Pathology ─────────────────────
  {
    topicCode: "PA-MOD-05-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "oral-esophageal-pathology-foundation",
        title: "Oral & Esophageal Pathology - Foundation",
        estimatedMinutes: 20,
        summary:
          "Diseases of the oral cavity include oral submucous fibrosis, leukoplakia, and squamous cell carcinoma. Esophageal pathology covers GERD, Barrett esophagus, varices, and esophageal carcinoma.",
        contentMd: `# Oral & Esophageal Pathology

## Oral Cavity Diseases

### Pre-malignant Lesions
| Lesion | Definition | Risk |
|--------|-----------|------|
| **Leukoplakia** | White patch that cannot be scraped off or classified as another disease | 5-25% malignant transformation |
| **Erythroplakia** | Red velvety patch on mucosa | Higher malignant potential than leukoplakia |
| **Oral Submucous Fibrosis (OSMF)** | Progressive fibrosis of submucosa with trismus | Strongly linked to areca nut/betel quid chewing |

### Oral Squamous Cell Carcinoma (OSCC)
- Most common malignancy of oral cavity
- **Indian context**: India has one of the highest rates globally due to tobacco and betel nut use
- Common sites: lateral border of tongue, floor of mouth, buccal mucosa
- TNM staging determines prognosis

## Esophageal Diseases

### Structural Disorders
| Condition | Key Feature |
|-----------|------------|
| Achalasia | Failure of LES relaxation, absent myenteric ganglia |
| Hiatal hernia | Sliding (95%) vs Paraesophageal (5%) |
| Esophageal webs | Plummer-Vinson syndrome (iron deficiency + dysphagia + web) |
| Zenker diverticulum | Posterior pharyngeal outpouching |

### Barrett Esophagus
- Squamous epithelium replaced by intestinal-type columnar epithelium with goblet cells
- Complication of chronic GERD
- **Pre-malignant**: risk of esophageal adenocarcinoma
- Requires surveillance endoscopy

### Esophageal Carcinoma
| Feature | Squamous Cell (SCC) | Adenocarcinoma |
|---------|-------------------|----------------|
| Location | Upper and middle third | Lower third |
| Risk factors | Alcohol, tobacco, hot beverages, OSMF | Barrett esophagus, GERD, obesity |
| Geography | Common in India, China, Iran | Western countries |
| Histology | Keratin pearls, intercellular bridges | Glandular differentiation |

> **Clinical Pearl**: In India, squamous cell carcinoma accounts for >90% of esophageal cancers, linked to tobacco chewing, hot tea consumption, and nutritional deficiencies.`,
        mnemonics: [
          {
            text: "PLUMBER for Plummer-Vinson syndrome",
            explanation:
              "P-Post-cricoid web, L-Low iron, U-Upper esophageal dysphagia, M-Microcytic anemia, B-Brittle nails (koilonychia), E-Esophageal SCC risk, R-Rings/webs",
          },
          {
            text: "ABCDE for Barrett esophagus",
            explanation:
              "A-Acid reflux (GERD), B-Barrett metaplasia, C-Columnar epithelium with goblet cells, D-Dysplasia risk, E-Esophageal adenocarcinoma",
          },
        ],
        keyPoints: [
          "Leukoplakia is a clinical diagnosis of exclusion - white patch not attributable to any other disease",
          "Oral submucous fibrosis is almost exclusive to the Indian subcontinent due to betel quid use",
          "Barrett esophagus is intestinal metaplasia with goblet cells in the esophagus",
          "Squamous cell carcinoma is the most common esophageal cancer worldwide and in India",
          "Plummer-Vinson syndrome triad: iron deficiency anemia + esophageal web + dysphagia",
          "Achalasia results from loss of myenteric (Auerbach) plexus ganglion cells",
        ],
        textbookRefs: [
          {
            book: "Robbins Pathologic Basis of Disease",
            chapter: "Chapter 17: Oral Cavity and Esophagus",
            edition: "10th",
          },
          {
            book: "Harsh Mohan Textbook of Pathology",
            chapter: "Chapter 19: Oral Cavity and Esophagus",
            edition: "8th",
          },
        ],
      },
      {
        layer: 2,
        slug: "oral-esophageal-pathology-mechanism",
        title: "Oral & Esophageal Pathology - Mechanism",
        estimatedMinutes: 30,
        summary:
          "Molecular pathogenesis of oral cancers involving p53, Rb, and cyclin D1, mechanism of Barrett metaplasia through CDX2 transcription factor, and pathogenesis of achalasia and GERD.",
        contentMd: `# Mechanisms of Oral & Esophageal Disease

## Pathogenesis of Oral Squamous Cell Carcinoma
1. **Tobacco carcinogens** (nitrosamines, polycyclic aromatic hydrocarbons) cause DNA damage
2. **Betel nut alkaloids** (arecoline) -> fibroblast stimulation -> collagen deposition (OSMF)
3. Molecular changes:
   - p53 mutation (most common, ~50% cases)
   - p16/INK4a inactivation
   - Cyclin D1 amplification
   - EGFR overexpression
4. Progression: Normal -> Hyperplasia -> Dysplasia -> Carcinoma in situ -> Invasive SCC

## Pathogenesis of OSMF
- Arecoline stimulates fibroblasts via TGF-beta pathway
- Increased collagen synthesis (Type I) and decreased collagenase activity
- Progressive submucosal fibrosis -> restricted mouth opening (trismus)
- Epithelial atrophy -> increased susceptibility to carcinogens

## Mechanism of Barrett Esophagus
1. Chronic GERD -> acid + bile reflux damages squamous epithelium
2. Inflammatory cytokines (IL-1beta, IL-8) recruit immune cells
3. **CDX2 transcription factor** activation -> intestinal differentiation
4. Stem cells at squamocolumnar junction reprogram to columnar type
5. Progression: Metaplasia -> Low-grade dysplasia -> High-grade dysplasia -> Adenocarcinoma
6. Additional mutations: p53, p16, Her2/neu amplification

## Pathogenesis of Achalasia
- **Primary**: Autoimmune destruction of inhibitory neurons (VIP, NO-producing) in myenteric plexus
- **Secondary**: Chagas disease (Trypanosoma cruzi destroys ganglion cells)
- Loss of inhibitory innervation -> failure of LES relaxation -> functional obstruction
- Bird-beak appearance on barium swallow

## GERD Mechanism
- Transient LES relaxation (most common mechanism)
- Contributing factors: hiatal hernia, obesity, delayed gastric emptying
- Acid + pepsin + bile -> epithelial damage -> inflammation -> erosion
- Complications: stricture, Barrett esophagus, adenocarcinoma

> **Clinical Pearl**: In India, chronic betel nut chewing activates the TGF-beta/collagen pathway causing OSMF, which has a 7-13% rate of malignant transformation to OSCC.`,
        mnemonics: [
          {
            text: "CDX2 = Columnar Differentiation factor for neX2 (Barrett)",
            explanation:
              "CDX2 is the key transcription factor that drives intestinal-type columnar metaplasia in Barrett esophagus",
          },
          {
            text: "CRAVE for GERD complications",
            explanation:
              "C-Chronic esophagitis, R-Ring formation (Schatzki), A-Adenocarcinoma, V-Varices (distinguish from), E-Erosion and stricture",
          },
        ],
        keyPoints: [
          "p53 mutation is the most common genetic alteration in oral SCC",
          "CDX2 transcription factor drives intestinal metaplasia in Barrett esophagus",
          "Arecoline from betel nut activates TGF-beta pathway causing submucosal fibrosis",
          "Achalasia results from destruction of inhibitory VIP/NO neurons in myenteric plexus",
          "Barrett progression: metaplasia -> low-grade dysplasia -> high-grade dysplasia -> adenocarcinoma",
        ],
        textbookRefs: [
          {
            book: "Robbins Pathologic Basis of Disease",
            chapter: "Chapter 17: Pathogenesis of Esophageal and Oral Diseases",
            edition: "10th",
          },
          {
            book: "Harsh Mohan Textbook of Pathology",
            chapter: "Chapter 19: Molecular Pathology of Oral Cancer",
            edition: "8th",
          },
        ],
      },
      {
        layer: 3,
        slug: "oral-esophageal-pathology-clinical",
        title: "Oral & Esophageal Pathology - Clinical Application",
        estimatedMinutes: 20,
        summary:
          "Clinical presentations, diagnosis, and management of oral and esophageal diseases in Indian healthcare settings.",
        contentMd: `# Clinical Applications

## Case 1: Oral Submucous Fibrosis
- 35-year-old male from Bihar, chronic pan masala chewer for 15 years
- Presents with progressive difficulty opening mouth (trismus), burning sensation on eating spicy food
- Examination: blanched oral mucosa, palpable fibrous bands, restricted mouth opening (<2 cm)
- Biopsy: submucosal fibrosis with collagen deposition, atrophic epithelium
- **Management**: Cessation of habit, intralesional steroids + hyaluronidase, surgical release for severe trismus

## Case 2: Esophageal Carcinoma
- 60-year-old male from Kashmir, progressive dysphagia (solids then liquids) over 3 months, weight loss 10 kg
- Barium swallow: irregular filling defect in middle third
- Endoscopy + biopsy: moderately differentiated squamous cell carcinoma
- CT staging for extent of disease
- **Indian context**: Hot salt tea (noon chai) is a risk factor in Kashmir valley

## Case 3: Barrett Esophagus with Dysplasia
- 50-year-old obese male with 15-year history of heartburn
- Endoscopy: salmon-pink mucosa extending above GEJ (tongues of columnar epithelium)
- Biopsy: intestinal metaplasia with goblet cells + low-grade dysplasia
- Management: High-dose PPI, surveillance endoscopy every 6-12 months
- If high-grade dysplasia: endoscopic mucosal resection or radiofrequency ablation

## Diagnostic Approach
| Investigation | Finding | Diagnosis |
|--------------|---------|-----------|
| Barium swallow - bird beak | Smooth tapering of distal esophagus | Achalasia |
| Barium swallow - rat tail | Irregular narrowing | Esophageal carcinoma |
| Endoscopy - salmon pink mucosa | Columnar epithelium above GEJ | Barrett esophagus |
| Endoscopy - white patch | Non-scrapable leukoplakia | Biopsy to rule out dysplasia |
| Manometry - absent peristalsis | Failed LES relaxation | Achalasia (gold standard) |

> **Clinical Pearl**: In India, any non-healing oral ulcer persisting for >3 weeks in a tobacco user warrants biopsy to rule out squamous cell carcinoma.`,
        mnemonics: [
          {
            text: "BIRD BEAK = achalasia, RAT TAIL = carcinoma",
            explanation:
              "Barium swallow patterns: smooth bird-beak tapering in achalasia vs irregular rat-tail narrowing in esophageal carcinoma",
          },
        ],
        keyPoints: [
          "Progressive dysphagia from solids to liquids suggests mechanical obstruction (carcinoma)",
          "OSMF presents with trismus, blanched mucosa, and palpable fibrous bands",
          "Barrett esophagus appears as salmon-pink tongues of mucosa on endoscopy",
          "Bird-beak sign on barium swallow is characteristic of achalasia",
          "Any non-healing oral ulcer >3 weeks in a tobacco user requires biopsy",
        ],
        textbookRefs: [
          {
            book: "Robbins Pathologic Basis of Disease",
            chapter: "Chapter 17: Clinical Features of GI Diseases",
            edition: "10th",
          },
          {
            book: "Harsh Mohan Textbook of Pathology",
            chapter: "Chapter 19: Clinicopathologic Correlations",
            edition: "8th",
          },
        ],
      },
      {
        layer: 4,
        slug: "oral-esophageal-pathology-exam",
        title: "Oral & Esophageal Pathology - Exam Prep",
        estimatedMinutes: 15,
        summary:
          "High-yield points for NEXT/NEET PG on oral and esophageal pathology.",
        contentMd: `# Exam Preparation - High Yield

## One-Liners
- Most common oral malignancy: **Squamous cell carcinoma**
- Most common site of oral SCC: **Lateral border of tongue**
- Pre-malignant with highest malignant potential: **Erythroplakia**
- OSMF is caused by: **Arecoline from areca nut (betel quid)**
- Barrett esophagus: **Intestinal metaplasia with GOBLET cells** (not just columnar)
- Most common esophageal cancer worldwide: **Squamous cell carcinoma**
- Most common esophageal cancer in West: **Adenocarcinoma**
- Plummer-Vinson syndrome: **IDA + esophageal web + dysphagia** (increased SCC risk)
- Chagas disease causes: **Secondary achalasia** (Trypanosoma cruzi)
- Schatzki ring: **Mucosal ring at squamocolumnar junction**

## Comparison Table
| Feature | Achalasia | Esophageal SCC | Esophageal Adenocarcinoma |
|---------|-----------|---------------|--------------------------|
| Location | LES/distal | Upper/middle | Lower third |
| Barium | Bird beak | Rat tail/irregular | Irregular mass |
| Key association | Absent ganglia | Tobacco, alcohol, hot drinks | Barrett/GERD |
| Histology | -- | Keratin pearls | Glands, mucin |

## Previous Year Themes
- Barrett esophagus definition and progression to adenocarcinoma
- Differences between SCC and adenocarcinoma of esophagus
- OSMF pathogenesis and its link to oral cancer
- Plummer-Vinson syndrome triad
- Achalasia pathogenesis and diagnosis

## Pattern Recognition
- Progressive dysphagia solids then liquids + weight loss = **Esophageal carcinoma**
- Dysphagia for solids AND liquids simultaneously = **Achalasia** (motility disorder)
- Heartburn + salmon-pink mucosa on endoscopy = **Barrett esophagus**
- Trismus + blanched oral mucosa + betel nut history = **OSMF**
- Iron deficiency anemia + dysphagia + web = **Plummer-Vinson syndrome**`,
        mnemonics: [
          {
            text: "SCC Loves Upper, Adeno Loves Lower",
            explanation:
              "SCC of esophagus is in upper/middle third; Adenocarcinoma arises in the lower third from Barrett esophagus",
          },
        ],
        keyPoints: [
          "Erythroplakia has higher malignant potential than leukoplakia",
          "Barrett esophagus requires goblet cells for diagnosis - simple columnar metaplasia is not enough",
          "Simultaneous dysphagia to solids and liquids = motility disorder (achalasia)",
          "Sequential dysphagia (solids then liquids) = mechanical obstruction (carcinoma/stricture)",
          "OSMF is virtually pathognomonic of areca nut / betel quid chewing",
        ],
        textbookRefs: [
          {
            book: "Robbins Pathologic Basis of Disease",
            chapter: "Chapter 17",
            edition: "10th",
          },
          {
            book: "Harsh Mohan Textbook of Pathology",
            chapter: "Chapter 19",
            edition: "8th",
          },
        ],
      },
      {
        layer: 5,
        slug: "oral-esophageal-pathology-recall",
        title: "Oral & Esophageal Pathology - Active Recall",
        estimatedMinutes: 10,
        summary:
          "Flashcard-style Q&A for self-testing on oral and esophageal pathology.",
        contentMd: `# Active Recall

**Q1:** What is the most common malignancy of the oral cavity?
> Squamous cell carcinoma

**Q2:** Name the triad of Plummer-Vinson syndrome.
> Iron deficiency anemia + esophageal web + dysphagia

**Q3:** What cell type defines Barrett esophagus histologically?
> Goblet cells (intestinal-type columnar metaplasia)

**Q4:** What is the barium swallow appearance of achalasia?
> Bird-beak sign (smooth tapering of distal esophagus)

**Q5:** Which substance in betel nut causes OSMF?
> Arecoline

**Q6:** Which transcription factor drives intestinal metaplasia in Barrett esophagus?
> CDX2

**Q7:** What is the most common type of esophageal cancer in India?
> Squamous cell carcinoma

**Q8:** Name the pre-malignant oral lesion with the highest malignant potential.
> Erythroplakia

**Q9:** What organism causes secondary achalasia in endemic areas?
> Trypanosoma cruzi (Chagas disease)

**Q10:** What is the sequence of progression in Barrett esophagus?
> Metaplasia -> Low-grade dysplasia -> High-grade dysplasia -> Adenocarcinoma

**Q11:** Differentiate dysphagia in achalasia vs carcinoma.
> Achalasia: solids AND liquids simultaneously (motility disorder); Carcinoma: solids first, then liquids (mechanical obstruction)

**Q12:** What is the most common site of oral SCC?
> Lateral border of tongue`,
        mnemonics: [],
        keyPoints: [
          "12 recall questions covering oral and esophageal pathology fundamentals and clinical correlations",
        ],
        textbookRefs: [
          {
            book: "Robbins Pathologic Basis of Disease",
            chapter: "Chapter 17",
            edition: "10th",
          },
        ],
      },
    ],
  },

  // ─── Topic 2: Gastric Pathology ───────────────────────────────
  {
    topicCode: "PA-MOD-05-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "gastric-pathology-foundation",
        title: "Gastric Pathology - Foundation",
        estimatedMinutes: 20,
        summary:
          "Gastric diseases include acute and chronic gastritis, peptic ulcer disease, and gastric carcinoma. H. pylori is the most important etiologic agent in gastric pathology.",
        contentMd: `# Gastric Pathology

## Gastritis

### Acute Gastritis
- Transient mucosal inflammation, often erosive
- Causes: NSAIDs, alcohol, stress (Curling ulcer in burns, Cushing ulcer in CNS injury), H. pylori
- Pathology: superficial epithelial damage, neutrophilic infiltration, hemorrhage

### Chronic Gastritis
| Type | Type A (Autoimmune) | Type B (Bacterial) |
|------|--------------------|--------------------|
| Location | Fundus and body | Antrum |
| Mechanism | Anti-parietal cell antibodies | H. pylori infection |
| Acid secretion | Decreased (achlorhydria) | Variable (often increased) |
| Complications | Pernicious anemia, carcinoid | Peptic ulcer, carcinoma, MALT lymphoma |
| Prevalence | 10% of chronic gastritis | 90% of chronic gastritis |

## Peptic Ulcer Disease (PUD)
| Feature | Gastric Ulcer | Duodenal Ulcer |
|---------|--------------|----------------|
| Pain | Worsened by food | Relieved by food |
| H. pylori association | 70% | 95% |
| Acid levels | Normal/decreased | Increased |
| Malignancy risk | Yes (must biopsy) | Rare |
| Location | Lesser curvature | First part of duodenum (anterior wall) |

## Gastric Carcinoma
- **Intestinal type**: Well-differentiated, gland-forming, associated with H. pylori and intestinal metaplasia
- **Diffuse type**: Poorly differentiated, signet ring cells, linitis plastica (leather bottle stomach)
- Lauren classification: Intestinal vs Diffuse

> **Clinical Pearl**: In India, gastric cancer is the 5th most common cancer. The intestinal type predominates, and H. pylori infection rates are very high (up to 80% in some populations).`,
        mnemonics: [
          {
            text: "Type A = Autoimmune = body And fundus; Type B = Bacterial = antrum (Bottom)",
            explanation:
              "Autoimmune gastritis affects the body/fundus; H. pylori (bacterial) gastritis predominantly affects the antrum",
          },
          {
            text: "DU = Decreased by food; GU = Gets worse with food",
            explanation:
              "Duodenal ulcer pain is relieved by food; Gastric ulcer pain worsens after eating",
          },
        ],
        keyPoints: [
          "H. pylori causes 90% of chronic gastritis (Type B) and is associated with peptic ulcers and gastric carcinoma",
          "Autoimmune gastritis (Type A) targets parietal cells leading to achlorhydria and pernicious anemia",
          "Gastric ulcers on lesser curvature must be biopsied to rule out malignancy",
          "Duodenal ulcers are almost never malignant",
          "Diffuse type gastric carcinoma has signet ring cells and causes linitis plastica",
          "Curling ulcer = burns; Cushing ulcer = CNS injury",
        ],
        textbookRefs: [
          {
            book: "Robbins Pathologic Basis of Disease",
            chapter: "Chapter 17: Stomach",
            edition: "10th",
          },
          {
            book: "Harsh Mohan Textbook of Pathology",
            chapter: "Chapter 20: Stomach and Duodenum",
            edition: "8th",
          },
        ],
      },
      {
        layer: 2,
        slug: "gastric-pathology-mechanism",
        title: "Gastric Pathology - Mechanism",
        estimatedMinutes: 30,
        summary:
          "Mechanisms of H. pylori pathogenesis including CagA and VacA virulence factors, the Correa cascade of gastric carcinogenesis, and molecular pathways in diffuse gastric cancer.",
        contentMd: `# Mechanisms of Gastric Disease

## H. pylori Pathogenesis
1. **Colonization**: Urease converts urea -> ammonia -> alkalinizes local pH -> survival in acid
2. **Adhesion**: BabA (binds Lewis B antigen on epithelium)
3. **Virulence factors**:
   - **CagA** (cytotoxin-associated gene A): Injected via Type IV secretion system -> activates SHP-2 phosphatase -> cell proliferation, cytoskeletal rearrangement
   - **VacA** (vacuolating cytotoxin A): Creates pores in epithelial membranes -> vacuolation, apoptosis
4. **Immune evasion**: Modifies LPS -> avoids TLR4 recognition; alters T-cell response
5. **Inflammation**: IL-8 recruitment of neutrophils -> chronic active gastritis

## Peptic Ulcer Pathogenesis
- Balance between **aggressive factors** (acid, pepsin, H. pylori, NSAIDs, bile salts) and **protective factors** (mucus, bicarbonate, prostaglandins, blood flow)
- NSAIDs inhibit COX-1 -> decreased prostaglandin E2 -> reduced mucus/bicarbonate secretion and mucosal blood flow
- Zollinger-Ellison syndrome: Gastrinoma -> massive acid hypersecretion -> multiple recurrent ulcers

## Correa Cascade (Intestinal Type Gastric Cancer)
Normal mucosa -> Chronic gastritis (H. pylori) -> Atrophic gastritis -> Intestinal metaplasia -> Dysplasia -> Adenocarcinoma

**Key molecular events**:
- p53 mutations (most common), APC mutations
- Microsatellite instability (15-20%)
- CDX2 activation drives intestinal metaplasia (similar to Barrett)
- E-cadherin loss (CDH1 gene) in diffuse type

## Diffuse Type Gastric Cancer
- **CDH1 (E-cadherin) gene** mutation/methylation
- Loss of cell adhesion -> individual cell infiltration -> signet ring morphology
- **Hereditary Diffuse Gastric Cancer (HDGC)**: Autosomal dominant, CDH1 germline mutation
- Krukenberg tumor: Metastasis to ovary (bilateral, signet ring cells)

> **Clinical Pearl**: H. pylori CagA-positive strains are associated with higher risk of gastric cancer. In India, CagA positivity varies by region and correlates with cancer incidence patterns.`,
        mnemonics: [
          {
            text: "CagA = Cancer-Associated gene A",
            explanation:
              "CagA-positive H. pylori strains have higher risk of gastric cancer; CagA activates SHP-2 oncogenic pathway",
          },
          {
            text: "CORREA cascade: C-Chronic gastritis, O-Open atrophy, R-Replacement by intestinal metaplasia, R-Rising dysplasia, E-Evolves to, A-Adenocarcinoma",
            explanation:
              "Sequential progression from H. pylori gastritis to intestinal-type gastric adenocarcinoma",
          },
        ],
        keyPoints: [
          "H. pylori urease alkalinizes the local environment allowing bacterial survival in gastric acid",
          "CagA is injected via Type IV secretion system and activates SHP-2 oncogenic signaling",
          "NSAIDs cause peptic ulcers by inhibiting COX-1 and reducing mucosal prostaglandin E2",
          "Correa cascade: chronic gastritis -> atrophy -> intestinal metaplasia -> dysplasia -> carcinoma",
          "CDH1 (E-cadherin) mutation is the hallmark of diffuse gastric cancer and hereditary HDGC syndrome",
        ],
        textbookRefs: [
          {
            book: "Robbins Pathologic Basis of Disease",
            chapter: "Chapter 17: Pathogenesis of Gastric Disease",
            edition: "10th",
          },
          {
            book: "Harsh Mohan Textbook of Pathology",
            chapter: "Chapter 20: Mechanisms of Gastric Disease",
            edition: "8th",
          },
        ],
      },
      {
        layer: 3,
        slug: "gastric-pathology-clinical",
        title: "Gastric Pathology - Clinical Application",
        estimatedMinutes: 20,
        summary:
          "Clinical presentations of gastric diseases including peptic ulcer complications, gastric carcinoma staging, and H. pylori diagnosis and treatment in Indian clinical practice.",
        contentMd: `# Clinical Applications

## Case 1: Peptic Ulcer Complications
- 45-year-old male presents with hematemesis (coffee ground vomit) and melena
- History of chronic NSAID use for joint pain
- Endoscopy: clean-based ulcer on lesser curvature of stomach
- **Complications of PUD**:
  - Hemorrhage (most common complication) - GDA erosion in posterior duodenal ulcer
  - Perforation (anterior duodenal ulcer perforates into peritoneal cavity)
  - Gastric outlet obstruction (chronic scarring of pyloric channel)
  - Malignant transformation (gastric ulcers only)

## Case 2: Gastric Carcinoma
- 60-year-old male from Northeast India with weight loss, early satiety, and epigastric pain
- Examination: palpable supraclavicular lymph node (Virchow node/Troisier sign)
- Endoscopy: ulceroproliferative mass in antrum
- Biopsy: intestinal type adenocarcinoma
- **Metastatic patterns**:
  - Virchow node (left supraclavicular) = Troisier sign
  - Sister Mary Joseph nodule (periumbilical)
  - Krukenberg tumor (bilateral ovarian metastasis - signet ring cells)
  - Blumer shelf (pouch of Douglas deposit on rectal exam)

## Case 3: H. pylori Diagnosis and Treatment
- **Diagnostic tests**:
  | Test | Type | Use |
  |------|------|-----|
  | Rapid urease test (CLO test) | Invasive | Gold standard for endoscopic diagnosis |
  | Histology (Giemsa stain) | Invasive | Biopsy confirmation |
  | Urea breath test (C13/C14) | Non-invasive | Best for confirming eradication |
  | Stool antigen test | Non-invasive | Screening, eradication confirmation |
  | Serology (IgG) | Non-invasive | Epidemiologic studies (cannot confirm eradication) |
- **Indian triple therapy**: PPI + Amoxicillin + Clarithromycin (14 days)

> **Clinical Pearl**: In India, the test-and-treat strategy for H. pylori is recommended for patients with dyspepsia under 45 years without alarm features.`,
        mnemonics: [
          {
            text: "VSKB for gastric cancer metastases",
            explanation:
              "V-Virchow node (left supraclavicular), S-Sister Mary Joseph nodule (periumbilical), K-Krukenberg tumor (ovary), B-Blumer shelf (rectal pouch)",
          },
        ],
        keyPoints: [
          "Posterior duodenal ulcer erodes into gastroduodenal artery causing hemorrhage",
          "Anterior duodenal ulcer perforates into peritoneal cavity causing pneumoperitoneum",
          "Virchow node (left supraclavicular) is a classic sign of gastric cancer metastasis",
          "Urea breath test is the best non-invasive test for H. pylori eradication confirmation",
          "Krukenberg tumor is bilateral ovarian metastasis with signet ring cells from diffuse gastric cancer",
        ],
        textbookRefs: [
          {
            book: "Robbins Pathologic Basis of Disease",
            chapter: "Chapter 17: Clinical Features of Gastric Disease",
            edition: "10th",
          },
          {
            book: "Harsh Mohan Textbook of Pathology",
            chapter: "Chapter 20: Clinical Gastric Pathology",
            edition: "8th",
          },
        ],
      },
      {
        layer: 4,
        slug: "gastric-pathology-exam",
        title: "Gastric Pathology - Exam Prep",
        estimatedMinutes: 15,
        summary:
          "High-yield points on gastric diseases for NEXT/NEET PG exams.",
        contentMd: `# Exam Preparation - High Yield

## One-Liners
- Most common cause of chronic gastritis: **H. pylori (Type B)**
- Most common complication of peptic ulcer: **Hemorrhage**
- Curling ulcer: **Burns** (stress ulcer in body/fundus)
- Cushing ulcer: **CNS injury** (vagal stimulation -> increased acid, can perforate)
- Leather bottle stomach (linitis plastica): **Diffuse type gastric carcinoma**
- Signet ring cells: **Diffuse type** (mucin pushes nucleus to periphery)
- Krukenberg tumor: **Ovarian metastasis** from gastric cancer (signet ring)
- Virchow node: **Left supraclavicular** node (signal node)
- Intestinal metaplasia driven by: **CDX2 transcription factor**
- E-cadherin (CDH1) loss: **Diffuse gastric cancer and lobular breast cancer**
- Zollinger-Ellison syndrome: **Gastrinoma** (pancreatic/duodenal) -> multiple recurrent ulcers
- Best initial test for H. pylori: **Stool antigen** or **urea breath test** (non-invasive)

## Comparison: Gastric Ulcer vs Duodenal Ulcer
| Feature | Gastric Ulcer | Duodenal Ulcer |
|---------|--------------|----------------|
| H. pylori | 70% | 95% |
| Acid | Normal/low | High |
| Pain timing | Worse with food | Better with food |
| Malignant risk | Yes | No |
| Perforation | Less common | More common (anterior wall) |
| Hemorrhage | From left gastric artery | From GDA (posterior wall) |

## Previous Year Themes
- Correa cascade sequence
- Differences between intestinal and diffuse gastric carcinoma
- H. pylori virulence factors (CagA, VacA)
- Peptic ulcer complications and their anatomical basis
- Zollinger-Ellison syndrome diagnosis (fasting gastrin >1000 pg/mL)

## Pattern Recognition
- Elderly + weight loss + early satiety + left supraclavicular node = **Gastric carcinoma**
- Recurrent multiple ulcers + diarrhea + high gastrin = **Zollinger-Ellison syndrome**
- Bilateral ovarian mass + signet ring cells = **Krukenberg tumor**
- Leather bottle stomach on barium meal = **Linitis plastica (diffuse type)**`,
        mnemonics: [
          {
            text: "Curling = Burns (C for Curling, C for Combustion); Cushing = Brain (C for Cushing, C for Cranium)",
            explanation:
              "Curling ulcers occur in burn patients (body/fundus); Cushing ulcers occur in CNS injury patients (can perforate due to vagal acid hypersecretion)",
          },
        ],
        keyPoints: [
          "H. pylori causes 95% of duodenal ulcers and 70% of gastric ulcers",
          "Hemorrhage is the most common complication of peptic ulcer disease",
          "Diffuse gastric cancer: signet ring cells, CDH1 mutation, linitis plastica, Krukenberg tumor",
          "Zollinger-Ellison: gastrinoma -> gastrin >1000 -> multiple recurrent ulcers in unusual locations",
          "Curling = burns, Cushing = brain injury for stress ulcers",
        ],
        textbookRefs: [
          {
            book: "Robbins Pathologic Basis of Disease",
            chapter: "Chapter 17",
            edition: "10th",
          },
          {
            book: "Harsh Mohan Textbook of Pathology",
            chapter: "Chapter 20",
            edition: "8th",
          },
        ],
      },
      {
        layer: 5,
        slug: "gastric-pathology-recall",
        title: "Gastric Pathology - Active Recall",
        estimatedMinutes: 10,
        summary:
          "Flashcard-style Q&A for self-testing on gastric pathology.",
        contentMd: `# Active Recall

**Q1:** What percentage of chronic gastritis is caused by H. pylori?
> 90% (Type B gastritis, affects the antrum)

**Q2:** How does H. pylori survive in the acidic stomach?
> Urease enzyme converts urea to ammonia, creating an alkaline microenvironment

**Q3:** What is the Correa cascade?
> Chronic gastritis -> Atrophic gastritis -> Intestinal metaplasia -> Dysplasia -> Adenocarcinoma (intestinal type)

**Q4:** What gene is mutated in hereditary diffuse gastric cancer?
> CDH1 (E-cadherin gene)

**Q5:** Name the cell type in diffuse gastric carcinoma.
> Signet ring cell (mucin-filled cell with eccentric nucleus)

**Q6:** What is a Krukenberg tumor?
> Bilateral ovarian metastasis from gastric cancer, characterized by signet ring cells

**Q7:** Which artery is eroded in posterior duodenal ulcer hemorrhage?
> Gastroduodenal artery (GDA)

**Q8:** What are the H. pylori virulence factors associated with cancer risk?
> CagA (activates SHP-2 via Type IV secretion) and VacA (causes epithelial vacuolation and apoptosis)

**Q9:** Differentiate Curling and Cushing ulcers.
> Curling = burn patients (reduced mucosal blood flow); Cushing = CNS injury (vagal stimulation -> acid hypersecretion, can perforate)

**Q10:** What is Zollinger-Ellison syndrome?
> Gastrinoma (usually pancreatic/duodenal) causing massive gastric acid secretion and multiple recurrent peptic ulcers

**Q11:** What is the best non-invasive test to confirm H. pylori eradication?
> Urea breath test (C13 or C14)

**Q12:** What is linitis plastica?
> Leather bottle stomach - diffuse infiltration of gastric wall by poorly differentiated (diffuse type) carcinoma causing rigidity`,
        mnemonics: [],
        keyPoints: [
          "12 recall questions covering H. pylori, peptic ulcer, and gastric carcinoma",
        ],
        textbookRefs: [
          {
            book: "Robbins Pathologic Basis of Disease",
            chapter: "Chapter 17",
            edition: "10th",
          },
        ],
      },
    ],
  },

  // ─── Topic 3: Intestinal Pathology ────────────────────────────
  {
    topicCode: "PA-MOD-05-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "intestinal-pathology-foundation",
        title: "Intestinal Pathology - Foundation",
        estimatedMinutes: 20,
        summary:
          "Intestinal diseases include inflammatory bowel disease (Crohn and UC), celiac disease, intestinal tuberculosis, and colorectal carcinoma. Each has distinct pathologic features.",
        contentMd: `# Intestinal Pathology

## Inflammatory Bowel Disease (IBD)
| Feature | Crohn Disease | Ulcerative Colitis |
|---------|--------------|-------------------|
| Distribution | Mouth to anus (ileum most common) | Rectum -> extends proximally |
| Pattern | Skip lesions | Continuous involvement |
| Depth | Transmural | Mucosa and submucosa only |
| Granulomas | Non-caseating granulomas (60%) | Absent |
| Fistulae | Common | Rare |
| Strictures | Common (string sign on barium) | Rare |
| Cancer risk | Slight increase | Significantly increased |
| Gross appearance | Cobblestone mucosa, creeping fat | Pseudopolyps, lead pipe colon |
| Histology | Transmural inflammation, granulomas | Crypt abscesses, crypt distortion |

## Celiac Disease (Gluten-Sensitive Enteropathy)
- Immune reaction to gliadin (component of gluten) in genetically susceptible individuals
- HLA-DQ2 (95%) or HLA-DQ8 association
- Villous atrophy + crypt hyperplasia + intraepithelial lymphocytosis
- Serology: Anti-tTG (tissue transglutaminase) IgA - best screening test

## Intestinal Tuberculosis
- Common in India, usually ileocecal region
- Can mimic Crohn disease
- Caseating granulomas (vs non-caseating in Crohn)
- Transverse ulcers (vs longitudinal in Crohn)
- Hypertrophic or ulcerative form

## Colorectal Carcinoma
- 3rd most common cancer worldwide
- Two pathways: Adenoma-carcinoma sequence (APC -> KRAS -> p53) and Microsatellite instability (MSI) pathway
- Risk factors: FAP, Lynch syndrome, IBD (UC > Crohn), high-fat low-fiber diet
- Left-sided: annular/napkin ring constriction, obstruction
- Right-sided: polypoid mass, iron deficiency anemia (occult bleeding)

> **Clinical Pearl**: In India, intestinal TB must always be considered in the differential of Crohn disease, as both present with ileocecal involvement. Caseating granulomas and transverse ulcers favor TB.`,
        mnemonics: [
          {
            text: "CHRISTMAS for Crohn features",
            explanation:
              "C-Cobblestone mucosa, H-High depth (transmural), R-Regional enteritis, I-Ileum most common, S-Skip lesions, T-Terminal ileum, M-Mouth to anus, A-Aphthous ulcers, S-Strictures and fistulae",
          },
          {
            text: "UC = Ulcers are Continuous and Confined to Colon/mucosa",
            explanation:
              "UC starts at rectum and extends continuously proximally; inflammation is limited to mucosa and submucosa",
          },
        ],
        keyPoints: [
          "Crohn disease: transmural, skip lesions, granulomas, fistulae; UC: mucosal, continuous, crypt abscesses",
          "Celiac disease is associated with HLA-DQ2 (95%) and diagnosed by anti-tTG IgA antibodies",
          "Intestinal TB shows caseating granulomas and transverse ulcers at the ileocecal region",
          "Colorectal cancer follows the adenoma-carcinoma sequence: APC -> KRAS -> SMAD4 -> p53",
          "Left-sided colon cancer causes obstruction; right-sided causes iron deficiency anemia",
          "UC carries a higher risk of colorectal cancer than Crohn disease",
        ],
        textbookRefs: [
          {
            book: "Robbins Pathologic Basis of Disease",
            chapter: "Chapter 17: Small and Large Intestine",
            edition: "10th",
          },
          {
            book: "Harsh Mohan Textbook of Pathology",
            chapter: "Chapter 21: Intestinal Pathology",
            edition: "8th",
          },
        ],
      },
      {
        layer: 2,
        slug: "intestinal-pathology-mechanism",
        title: "Intestinal Pathology - Mechanism",
        estimatedMinutes: 30,
        summary:
          "Molecular mechanisms of IBD, celiac disease pathogenesis involving tTG and HLA-DQ2, and the adenoma-carcinoma sequence with key genetic mutations.",
        contentMd: `# Mechanisms of Intestinal Disease

## IBD Pathogenesis
1. **Genetic susceptibility**: NOD2/CARD15 mutations (Crohn disease - defective innate immunity to intestinal bacteria)
2. **Mucosal barrier defect**: Increased permeability -> bacterial translocation
3. **Dysregulated immune response**:
   - Crohn: Th1/Th17 dominant -> TNF-alpha, IFN-gamma, IL-17
   - UC: Th2/atypical -> IL-5, IL-13 (mucosal)
4. **Microbiome dysbiosis**: Reduced diversity, decreased Firmicutes, increased Proteobacteria
5. **Environmental triggers**: Smoking (worsens Crohn, protects in UC - paradoxical)

## Celiac Disease Mechanism
1. Dietary gluten -> gliadin peptides survive digestion
2. **Tissue transglutaminase (tTG)** deamidates gliadin -> creates negative charge
3. Deamidated gliadin binds **HLA-DQ2/DQ8** on APCs
4. Presentation to CD4+ T cells -> Th1 response -> IFN-gamma
5. Activated intraepithelial lymphocytes (CD8+ T cells) -> villous destruction
6. Crypt hyperplasia (compensatory)
7. Marsh classification: 0 (normal) -> I (IEL increase) -> II (crypt hyperplasia) -> IIIa-c (villous atrophy grades)

## Adenoma-Carcinoma Sequence (Vogelstein Model)
| Step | Mutation/Event | Result |
|------|---------------|--------|
| 1 | **APC** loss (5q21) | Increased WNT signaling -> adenoma initiation |
| 2 | **KRAS** activation (12p12) | Increased growth signaling -> adenoma progression |
| 3 | **SMAD4** loss (18q21) | Loss of TGF-beta growth inhibition |
| 4 | **p53** loss (17p13) | Loss of tumor suppressor -> carcinoma |

## Microsatellite Instability (MSI) Pathway
- Defective DNA mismatch repair (MLH1, MSH2, MSH6, PMS2)
- **Lynch syndrome (HNPCC)**: Germline mutation in MMR genes -> autosomal dominant
- Sporadic MSI: MLH1 promoter hypermethylation
- Right-sided, mucinous, better prognosis
- **Bethesda criteria** for MSI testing

## Familial Adenomatous Polyposis (FAP)
- Germline APC mutation -> >100 polyps by teenage years
- 100% cancer risk without colectomy
- Gardner syndrome: FAP + osteomas + desmoid tumors + epidermal cysts
- Turcot syndrome: FAP + CNS tumors (medulloblastoma)

> **Clinical Pearl**: In Indian practice, NOD2 mutations have a lower frequency compared to Western populations, suggesting different genetic architecture in Indian Crohn disease patients.`,
        mnemonics: [
          {
            text: "APC-KRAS-SMAD-p53 for adenoma-carcinoma sequence",
            explanation:
              "APC initiates adenoma (gatekeeper), KRAS promotes growth, SMAD4 loss removes TGF-beta inhibition, p53 loss allows malignant transformation",
          },
          {
            text: "TTG-DQ2-Th1 for celiac mechanism",
            explanation:
              "Tissue Transglutaminase deamidates gliadin -> binds HLA-DQ2 -> activates Th1 response -> villous destruction",
          },
        ],
        keyPoints: [
          "NOD2/CARD15 is the most important susceptibility gene for Crohn disease",
          "Tissue transglutaminase deamidates gliadin making it immunogenic in celiac disease",
          "APC mutation is the initiating event in the adenoma-carcinoma sequence (gatekeeper)",
          "Lynch syndrome: germline MMR gene mutations (MLH1/MSH2/MSH6/PMS2)",
          "FAP has 100% cancer risk without prophylactic colectomy",
        ],
        textbookRefs: [
          {
            book: "Robbins Pathologic Basis of Disease",
            chapter: "Chapter 17: Molecular Pathology of Intestinal Diseases",
            edition: "10th",
          },
          {
            book: "Harsh Mohan Textbook of Pathology",
            chapter: "Chapter 21: Pathogenesis of IBD and Colorectal Cancer",
            edition: "8th",
          },
        ],
      },
      {
        layer: 3,
        slug: "intestinal-pathology-clinical",
        title: "Intestinal Pathology - Clinical Application",
        estimatedMinutes: 20,
        summary:
          "Clinical presentations of IBD, celiac disease, and colorectal cancer in Indian healthcare context, including differentiation from intestinal TB.",
        contentMd: `# Clinical Applications

## Case 1: Crohn Disease vs Intestinal TB
- 25-year-old male with chronic abdominal pain, diarrhea, weight loss, and low-grade fever
- Colonoscopy: ileocecal ulcers with cobblestone pattern
- **Differentiating features**:
  | Feature | Crohn Disease | Intestinal TB |
  |---------|--------------|---------------|
  | Ulcer orientation | Longitudinal | Transverse |
  | Granulomas | Non-caseating (60%) | Caseating (100%) |
  | AFB stain/culture | Negative | Positive |
  | Fistulae | Common | Uncommon |
  | TB PCR/Quantiferon | Negative | Positive |
  | Response to ATT | No | Yes (trial of therapy) |
- In India, a trial of ATT (anti-tubercular therapy) for 2-3 months is often used as diagnostic test

## Case 2: Celiac Disease
- 3-year-old child from Punjab with chronic diarrhea, abdominal distension, failure to thrive since weaning
- Steatorrhea, irritability, iron and folate deficiency
- Serology: Anti-tTG IgA strongly positive
- Duodenal biopsy: Marsh IIIb (marked villous atrophy, crypt hyperplasia, IEL >40/100 epithelial cells)
- Treatment: Lifelong gluten-free diet
- Complication if untreated: Dermatitis herpetiformis, T-cell lymphoma (EATL), osteoporosis

## Case 3: Colorectal Cancer
- 55-year-old male with altered bowel habits, blood in stool for 3 months
- Examination: palpable mass in right iliac fossa
- Colonoscopy: polypoid mass in cecum, biopsy shows adenocarcinoma
- CEA elevated (useful for follow-up, not screening)
- Staging: Duke/Astler-Coller or TNM

## Screening for Colorectal Cancer
- Average risk: Colonoscopy every 10 years from age 45
- FAP: Annual colonoscopy from teenage -> prophylactic colectomy
- Lynch syndrome: Colonoscopy every 1-2 years from age 20-25 or 5 years before youngest case in family

> **Clinical Pearl**: In India, always rule out intestinal TB before diagnosing Crohn disease. A trial of ATT with clinical and endoscopic reassessment at 2-3 months is standard practice.`,
        mnemonics: [
          {
            text: "LENT for Crohn vs TB ulcers",
            explanation:
              "L-Longitudinal ulcers in Crohn, E-Entry of tubercle bacilli causes TB, N-Non-caseating granulomas in Crohn (caseating in TB), T-Transverse ulcers in TB",
          },
        ],
        keyPoints: [
          "Longitudinal ulcers = Crohn; Transverse ulcers = Intestinal TB",
          "Anti-tTG IgA is the best screening test for celiac disease",
          "Right-sided colon cancer presents with iron deficiency anemia; left-sided with obstruction",
          "CEA is used for monitoring recurrence, not for screening",
          "In India, trial of ATT is standard when TB vs Crohn is unclear",
        ],
        textbookRefs: [
          {
            book: "Robbins Pathologic Basis of Disease",
            chapter: "Chapter 17: Clinical Features of Intestinal Disease",
            edition: "10th",
          },
          {
            book: "Harsh Mohan Textbook of Pathology",
            chapter: "Chapter 21: Clinicopathologic Correlations",
            edition: "8th",
          },
        ],
      },
      {
        layer: 4,
        slug: "intestinal-pathology-exam",
        title: "Intestinal Pathology - Exam Prep",
        estimatedMinutes: 15,
        summary:
          "High-yield points on intestinal pathology for NEXT/NEET PG exams.",
        contentMd: `# Exam Preparation - High Yield

## One-Liners
- Most common site of Crohn disease: **Terminal ileum**
- UC always starts from: **Rectum** and extends proximally
- Pathognomonic of Crohn: **Non-caseating granulomas + transmural inflammation**
- Pathognomonic of UC: **Crypt abscesses**
- Skip lesions: **Crohn disease**
- Lead pipe colon: **Chronic UC** (loss of haustra)
- Pseudopolyps: **UC** (regenerating mucosa between ulcers)
- Best screening test for celiac: **Anti-tTG IgA**
- HLA association of celiac: **HLA-DQ2 (95%), HLA-DQ8**
- Gatekeeper gene in colorectal cancer: **APC**
- Lynch syndrome gene: **MLH1, MSH2** (DNA mismatch repair)
- Gardner syndrome: **FAP + osteomas + desmoid tumors**
- Peutz-Jeghers syndrome: **Hamartomatous polyps + mucocutaneous pigmentation**
- Most common polyp: **Hyperplastic polyp** (no malignant potential)
- Most common neoplastic polyp: **Tubular adenoma**
- Highest malignant risk polyp: **Villous adenoma** (40% malignant potential)

## Comparison: Crohn vs UC vs TB
| Feature | Crohn | UC | Intestinal TB |
|---------|-------|-----|---------------|
| Site | Ileum | Rectum -> colon | Ileocecal |
| Ulcers | Longitudinal | Superficial | Transverse |
| Depth | Transmural | Mucosal | Submucosal/transmural |
| Granuloma | Non-caseating | None | Caseating |
| Fistula | Yes | No | Rare |
| Cancer risk | Slight | High | No |

## Previous Year Themes
- Crohn vs UC differentiation
- Adenoma-carcinoma sequence mutations (APC -> KRAS -> SMAD4 -> p53)
- Celiac disease pathogenesis and serology
- Polyposis syndromes (FAP, Peutz-Jeghers, Juvenile)
- Lynch syndrome criteria and genetics

## Pattern Recognition
- Young patient + ileocecal ulcers + India = Rule out **intestinal TB** first
- Chronic bloody diarrhea + rectal involvement + continuous = **UC**
- Skip lesions + fistulae + non-caseating granulomas = **Crohn disease**
- Child with steatorrhea + failure to thrive + anti-tTG positive = **Celiac disease**
- Elderly + altered bowel habits + iron deficiency anemia + right colon mass = **Colorectal cancer**`,
        mnemonics: [
          {
            text: "Villous = Villainous (highest cancer risk polyp)",
            explanation:
              "Villous adenoma has the highest malignant potential (~40%), followed by tubulovillous, then tubular adenoma (~5%)",
          },
        ],
        keyPoints: [
          "Terminal ileum is the most common site for Crohn disease",
          "UC always starts from the rectum and extends proximally in a continuous pattern",
          "APC is the gatekeeper gene - its loss initiates the adenoma-carcinoma sequence",
          "Villous adenoma has the highest malignant potential among colorectal polyps",
          "In India, intestinal TB is the most important differential for Crohn disease",
        ],
        textbookRefs: [
          {
            book: "Robbins Pathologic Basis of Disease",
            chapter: "Chapter 17",
            edition: "10th",
          },
          {
            book: "Harsh Mohan Textbook of Pathology",
            chapter: "Chapter 21",
            edition: "8th",
          },
        ],
      },
      {
        layer: 5,
        slug: "intestinal-pathology-recall",
        title: "Intestinal Pathology - Active Recall",
        estimatedMinutes: 10,
        summary:
          "Flashcard-style Q&A for self-testing on intestinal pathology.",
        contentMd: `# Active Recall

**Q1:** Name the most important susceptibility gene for Crohn disease.
> NOD2/CARD15 (defective innate immune recognition of intracellular bacteria)

**Q2:** What is the key histologic feature of UC?
> Crypt abscesses (neutrophils within crypt lumens) with crypt distortion

**Q3:** What are the 4 key mutations in the adenoma-carcinoma sequence?
> APC (initiation) -> KRAS (promotion) -> SMAD4 (progression) -> p53 (malignant transformation)

**Q4:** What is the HLA association of celiac disease?
> HLA-DQ2 (95%) and HLA-DQ8

**Q5:** What enzyme deamidates gliadin in celiac disease?
> Tissue transglutaminase (tTG)

**Q6:** How do you differentiate Crohn ulcers from TB ulcers?
> Crohn: longitudinal ulcers, non-caseating granulomas; TB: transverse ulcers, caseating granulomas

**Q7:** What is Gardner syndrome?
> FAP (>100 adenomatous polyps) + osteomas + desmoid tumors + epidermal cysts

**Q8:** Which polyp type has the highest malignant potential?
> Villous adenoma (~40% malignant potential)

**Q9:** What is the difference in presentation between right and left colon cancers?
> Right: iron deficiency anemia (occult bleeding), polypoid mass; Left: obstruction (napkin ring), altered bowel habits

**Q10:** What genes are mutated in Lynch syndrome?
> DNA mismatch repair genes: MLH1, MSH2, MSH6, PMS2

**Q11:** What is Peutz-Jeghers syndrome?
> Autosomal dominant; hamartomatous polyps (entire GI tract) + mucocutaneous melanin pigmentation; STK11/LKB1 gene mutation

**Q12:** Name the extraintestinal complication of celiac disease that presents with itchy vesicular rash.
> Dermatitis herpetiformis (IgA deposits at dermal papillae)`,
        mnemonics: [],
        keyPoints: [
          "12 recall questions covering IBD, celiac disease, colorectal cancer, and polyposis syndromes",
        ],
        textbookRefs: [
          {
            book: "Robbins Pathologic Basis of Disease",
            chapter: "Chapter 17",
            edition: "10th",
          },
        ],
      },
    ],
  },

  // ─── Topic 4: Liver Pathology ─────────────────────────────────
  {
    topicCode: "PA-MOD-05-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "liver-pathology-foundation",
        title: "Liver Pathology - Foundation",
        estimatedMinutes: 20,
        summary:
          "Liver diseases include viral hepatitis (A-E), alcoholic liver disease, cirrhosis, and hepatocellular carcinoma. Understanding the patterns of liver injury is fundamental to hepatopathology.",
        contentMd: `# Liver Pathology

## Patterns of Liver Injury
| Pattern | Location | Examples |
|---------|----------|----------|
| Hepatocellular | Hepatocytes | Viral hepatitis, drug-induced, fatty change |
| Cholestatic | Bile ducts/canaliculi | PBC, PSC, drug-induced cholestasis |
| Mixed | Both | Drug reactions, chronic hepatitis |

## Viral Hepatitis
| Virus | Type | Transmission | Chronicity | Carrier state | Vaccine |
|-------|------|-------------|------------|---------------|---------|
| HAV | RNA | Feco-oral | No | No | Yes |
| HBV | DNA (hepadna) | Blood, sexual, vertical | Yes (5-10% adults) | Yes | Yes |
| HCV | RNA (flavivirus) | Blood, sexual | Yes (80%) | Yes | No |
| HDV | RNA (defective) | Needs HBV | Yes | With HBV | HBV vaccine |
| HEV | RNA | Feco-oral | No (except immunocompromised) | No | Yes (in India/China) |

## Alcoholic Liver Disease
Three patterns (can coexist):
1. **Steatosis** (fatty liver) - reversible, most common
2. **Alcoholic hepatitis** - Mallory-Denk bodies, neutrophilic infiltrate
3. **Cirrhosis** - irreversible, micronodular

## Cirrhosis
- Irreversible diffuse fibrosis with regenerative nodules
- Common causes in India: Alcohol, Hepatitis B, Hepatitis C, NAFLD
- Complications: Portal hypertension, ascites, esophageal varices, hepatorenal syndrome, hepatic encephalopathy, HCC

## Hepatocellular Carcinoma (HCC)
- Most common primary liver malignancy
- Strong association with HBV (India, Asia), HCV, cirrhosis, aflatoxin B1
- Tumor marker: **Alpha-fetoprotein (AFP)**
- Fibrolamellar variant: young patients, no cirrhosis, better prognosis

> **Clinical Pearl**: India has intermediate endemicity for HBV (3-4% carrier rate). Hepatitis E is a major cause of epidemic jaundice and is particularly dangerous in pregnant women (20% mortality in third trimester).`,
        mnemonics: [
          {
            text: "Vowels (A, E) = Enteric (feco-oral); Consonants (B, C, D) = Blood-borne",
            explanation:
              "HAV and HEV are transmitted via feco-oral route; HBV, HCV, and HDV are transmitted via blood/parenteral route",
          },
          {
            text: "HBV = Has Been Vaccinated; HCV = Cannot Vaccinate",
            explanation:
              "HBV has an effective vaccine; HCV has no vaccine available yet",
          },
        ],
        keyPoints: [
          "HBV is a DNA virus (only DNA hepatitis virus); all others are RNA",
          "HCV has 80% chronicity rate - highest among hepatitis viruses",
          "HEV in pregnant women causes fulminant hepatitis with 20% mortality",
          "Alcoholic liver disease: steatosis -> hepatitis (Mallory-Denk bodies) -> cirrhosis",
          "Cirrhosis is defined by diffuse fibrosis with regenerative nodules",
          "HCC is strongly associated with HBV in India and aflatoxin B1 in tropical regions",
        ],
        textbookRefs: [
          {
            book: "Robbins Pathologic Basis of Disease",
            chapter: "Chapter 18: Liver and Gallbladder",
            edition: "10th",
          },
          {
            book: "Harsh Mohan Textbook of Pathology",
            chapter: "Chapter 22: The Liver, Biliary Tract and Pancreas",
            edition: "8th",
          },
        ],
      },
      {
        layer: 2,
        slug: "liver-pathology-mechanism",
        title: "Liver Pathology - Mechanism",
        estimatedMinutes: 30,
        summary:
          "Mechanisms of viral hepatitis replication, immune-mediated liver injury, pathogenesis of cirrhosis through stellate cell activation, and molecular basis of hepatocellular carcinoma.",
        contentMd: `# Mechanisms of Liver Disease

## HBV Molecular Biology
- **Partially double-stranded DNA virus** (Hepadnaviridae)
- Replication: DNA -> RNA (pregenomic) -> DNA (reverse transcriptase)
- Viral antigens and their significance:
  | Antigen/Antibody | Significance |
  |-----------------|-------------|
  | HBsAg | Active infection (surface antigen) |
  | Anti-HBs | Immunity (vaccination or resolved infection) |
  | HBeAg | Active replication, high infectivity |
  | Anti-HBe | Low replication, seroconversion |
  | HBcAg | Not in serum (core antigen) |
  | Anti-HBc IgM | Acute infection |
  | Anti-HBc IgG | Past or chronic infection |

- **Window period**: HBsAg cleared but anti-HBs not yet formed -> only anti-HBc IgM positive
- **HBV-induced liver damage**: Immune-mediated (CD8+ T cells kill infected hepatocytes), NOT direct viral cytopathicity

## HCV Pathogenesis
- RNA virus -> RNA-dependent RNA polymerase (no proofreading) -> high mutation rate -> immune evasion
- Quasispecies: multiple viral variants in one host
- Genotype 3: most common in India (associated with steatosis)
- Direct antiviral agents (DAAs) target: NS3/4A protease, NS5A, NS5B polymerase

## Pathogenesis of Cirrhosis
1. Chronic liver injury (viral, alcohol, NAFLD) -> hepatocyte death
2. **Hepatic stellate cell (Ito cell) activation** -> myofibroblast transformation
3. TGF-beta is the key fibrogenic cytokine
4. Excessive collagen deposition (Types I and III) in space of Disse
5. Distortion of hepatic architecture -> regenerative nodules
6. Increased intrahepatic vascular resistance -> **portal hypertension**

## Pathogenesis of HCC
- **HBV**: Integration of viral DNA into host genome -> insertional mutagenesis + HBx protein (transactivator, inactivates p53)
- **HCV**: Chronic inflammation -> oxidative stress -> DNA damage -> no viral DNA integration
- **Aflatoxin B1**: Produced by Aspergillus flavus -> p53 codon 249 mutation (AGG -> AGT, Arg -> Ser)
- **NAFLD/NASH**: Insulin resistance -> lipotoxicity -> oxidative stress -> cirrhosis -> HCC

## Portal Hypertension Mechanism
- Increased resistance: intrahepatic (cirrhosis), prehepatic (portal vein thrombosis), posthepatic (Budd-Chiari)
- Porto-systemic shunts: esophageal varices, caput medusae, hemorrhoids, retroperitoneal

> **Clinical Pearl**: In India, aflatoxin exposure from contaminated groundnuts and grains synergizes with HBV to dramatically increase HCC risk, especially in tropical and subtropical regions.`,
        mnemonics: [
          {
            text: "Window period = anti-HBc IgM is the WINDOW to diagnosis",
            explanation:
              "During the window period, HBsAg has cleared and anti-HBs has not appeared; anti-HBc IgM is the only marker of acute HBV infection",
          },
          {
            text: "STELLATE = STAR cell becomes a SCAR cell",
            explanation:
              "Hepatic stellate (Ito) cells are activated by TGF-beta and transform into myofibroblasts that produce collagen, causing cirrhosis (scarring)",
          },
        ],
        keyPoints: [
          "HBV liver damage is immune-mediated via CD8+ T cells, not by direct cytopathicity",
          "Window period: only anti-HBc IgM is positive (HBsAg cleared, anti-HBs not yet formed)",
          "Hepatic stellate cell activation by TGF-beta is the central event in cirrhogenesis",
          "HBV causes HCC via HBx protein (inactivates p53) and insertional mutagenesis",
          "Aflatoxin B1 causes specific p53 codon 249 mutation in HCC",
        ],
        textbookRefs: [
          {
            book: "Robbins Pathologic Basis of Disease",
            chapter: "Chapter 18: Pathogenesis of Liver Diseases",
            edition: "10th",
          },
          {
            book: "Harsh Mohan Textbook of Pathology",
            chapter: "Chapter 22: Mechanisms of Hepatic Disease",
            edition: "8th",
          },
        ],
      },
      {
        layer: 3,
        slug: "liver-pathology-clinical",
        title: "Liver Pathology - Clinical Application",
        estimatedMinutes: 20,
        summary:
          "Clinical presentations of hepatitis, cirrhosis, and HCC in Indian practice, including serological interpretation and management principles.",
        contentMd: `# Clinical Applications

## Case 1: Acute Viral Hepatitis B
- 30-year-old male, history of dental extraction 3 months ago, presents with jaundice, dark urine, anorexia
- LFT: ALT >1000, AST elevated, bilirubin elevated
- Serology: HBsAg+, HBeAg+, anti-HBc IgM+, anti-HBs-
- **Interpretation**: Acute HBV infection with active replication
- Most patients (90-95% adults) clear the infection; 5-10% develop chronic hepatitis

## Case 2: Cirrhosis with Portal Hypertension
- 50-year-old chronic alcoholic from Kerala, presents with abdominal distension, pedal edema
- Examination: jaundice, spider angiomas, palmar erythema, gynecomastia, ascites, splenomegaly, caput medusae
- Labs: Low albumin, prolonged PT/INR, elevated bilirubin, thrombocytopenia
- **Child-Pugh scoring**: Assesses severity (A = mild, B = moderate, C = severe)
  | Parameter | 1 point | 2 points | 3 points |
  |-----------|---------|----------|----------|
  | Bilirubin | <2 | 2-3 | >3 |
  | Albumin | >3.5 | 2.8-3.5 | <2.8 |
  | PT (seconds prolonged) | <4 | 4-6 | >6 |
  | Ascites | None | Mild | Moderate-severe |
  | Encephalopathy | None | Grade 1-2 | Grade 3-4 |

## Case 3: Hepatocellular Carcinoma
- 55-year-old male, known HBsAg carrier for 20 years, presents with weight loss, right hypochondrial pain, hepatomegaly
- AFP: 800 ng/mL (normal <10)
- Triple-phase CT: arterial enhancement with portal venous washout (characteristic)
- Diagnosis: HCC on background of cirrhosis

## Serological Interpretation Table
| HBsAg | Anti-HBs | Anti-HBc IgM | Anti-HBc IgG | HBeAg | Interpretation |
|-------|----------|-------------|-------------|-------|---------------|
| + | - | + | - | + | Acute HBV |
| + | - | - | + | +/- | Chronic HBV |
| - | + | - | +/- | - | Recovered/Immune |
| - | + | - | - | - | Vaccinated |
| - | - | + | - | - | Window period |

> **Clinical Pearl**: In Indian blood banks, HBsAg screening is mandatory. Despite this, occult HBV (HBsAg-negative but HBV DNA-positive) remains a transfusion risk, especially with mutant strains.`,
        mnemonics: [
          {
            text: "ABCDE for Child-Pugh scoring parameters",
            explanation:
              "A-Albumin, B-Bilirubin, C-Clotting (PT/INR), D-Degree of ascites, E-Encephalopathy grade",
          },
        ],
        keyPoints: [
          "Anti-HBc IgM is the sole marker during the window period of HBV",
          "Child-Pugh score uses 5 parameters: Albumin, Bilirubin, Clotting, ascites Degree, Encephalopathy",
          "HCC shows arterial enhancement with portal venous washout on triple-phase CT",
          "AFP >400 ng/mL in a cirrhotic patient is highly suggestive of HCC",
          "90-95% of adults clear acute HBV; only 5-10% develop chronic infection",
        ],
        textbookRefs: [
          {
            book: "Robbins Pathologic Basis of Disease",
            chapter: "Chapter 18: Clinical Features of Liver Disease",
            edition: "10th",
          },
          {
            book: "Harsh Mohan Textbook of Pathology",
            chapter: "Chapter 22: Clinicopathologic Correlations",
            edition: "8th",
          },
        ],
      },
      {
        layer: 4,
        slug: "liver-pathology-exam",
        title: "Liver Pathology - Exam Prep",
        estimatedMinutes: 15,
        summary:
          "High-yield points on liver pathology for NEXT/NEET PG exams.",
        contentMd: `# Exam Preparation - High Yield

## One-Liners
- Only DNA hepatitis virus: **HBV** (Hepadnaviridae)
- Highest chronicity rate: **HCV (80%)**
- Dangerous in pregnancy: **HEV** (20% mortality in 3rd trimester, fulminant hepatic failure)
- Window period marker: **Anti-HBc IgM** (only marker positive)
- Most sensitive marker of HBV replication: **HBV DNA**
- Mallory-Denk bodies (Mallory hyaline): **Alcoholic hepatitis** (also in NASH, Wilson, HCC)
- Councilman bodies: **Apoptotic hepatocytes** in viral hepatitis (especially Yellow fever)
- Ground glass hepatocytes: **Chronic HBV** (smooth ER filled with HBsAg)
- Key fibrogenic cell in liver: **Hepatic stellate cell (Ito cell)**
- Key fibrogenic cytokine: **TGF-beta**
- HCC tumor marker: **AFP (alpha-fetoprotein)**
- Aflatoxin B1 target: **p53 codon 249** mutation
- HBx protein action: **Inactivates p53** (transactivator)
- Most common primary liver cancer: **HCC**
- Liver angiosarcoma: **Vinyl chloride, thorotrast, arsenic**
- Budd-Chiari syndrome: **Hepatic vein thrombosis** (polycythemia vera, OCP, pregnancy)
- NAFLD progression: **Steatosis -> NASH -> Fibrosis -> Cirrhosis -> HCC**

## Comparison: Alcoholic vs Non-alcoholic Fatty Liver
| Feature | ALD | NAFLD/NASH |
|---------|-----|-----------|
| Cause | Alcohol >20-40 g/day | Metabolic syndrome, obesity |
| AST:ALT ratio | >2:1 | <1 (usually) |
| Mallory-Denk bodies | Present | Can be present |
| Progression | Steatosis -> hepatitis -> cirrhosis | Steatosis -> NASH -> cirrhosis |

## Previous Year Themes
- HBV serology interpretation
- Pathogenesis of cirrhosis (stellate cell activation)
- HCC risk factors and molecular pathogenesis
- Differences between HAV, HBV, HCV, HDV, HEV
- Portal hypertension and its complications

## Pattern Recognition
- Jaundice + very high ALT (>1000) + recent exposure = **Acute viral hepatitis**
- Chronic liver disease + AFP elevated + arterial enhancing lesion = **HCC**
- Spider angiomas + ascites + splenomegaly + low albumin = **Cirrhosis**
- Pregnant woman + jaundice + fulminant hepatitis = **HEV** (India)
- AST:ALT >2:1 + Mallory bodies + neutrophils = **Alcoholic hepatitis**`,
        mnemonics: [
          {
            text: "Fried LIVER for NAFLD risk factors",
            explanation:
              "F-Fat (obesity), R-Resistance (insulin), I-Inflammatory markers, E-Elevated lipids, D-Diabetes mellitus",
          },
        ],
        keyPoints: [
          "HBV is the only DNA hepatitis virus; all others are RNA",
          "HCV has 80% chronicity - highest among hepatitis viruses",
          "HEV is dangerous in pregnancy (fulminant hepatic failure, 20% mortality)",
          "Hepatic stellate cell + TGF-beta = central mechanism of liver fibrosis",
          "AST:ALT >2:1 is characteristic of alcoholic liver disease",
        ],
        textbookRefs: [
          {
            book: "Robbins Pathologic Basis of Disease",
            chapter: "Chapter 18",
            edition: "10th",
          },
          {
            book: "Harsh Mohan Textbook of Pathology",
            chapter: "Chapter 22",
            edition: "8th",
          },
        ],
      },
      {
        layer: 5,
        slug: "liver-pathology-recall",
        title: "Liver Pathology - Active Recall",
        estimatedMinutes: 10,
        summary:
          "Flashcard-style Q&A for self-testing on liver pathology.",
        contentMd: `# Active Recall

**Q1:** Which is the only DNA hepatitis virus?
> HBV (Hepadnaviridae family)

**Q2:** Which hepatitis virus has the highest chronicity rate?
> HCV (~80% progress to chronic infection)

**Q3:** What marker is positive during the HBV window period?
> Anti-HBc IgM (HBsAg cleared, anti-HBs not yet formed)

**Q4:** What is the significance of ground glass hepatocytes?
> Chronic HBV infection - smooth ER filled with HBsAg

**Q5:** Name the key cell involved in liver fibrosis and cirrhosis.
> Hepatic stellate cell (Ito cell) - activated by TGF-beta to become myofibroblast

**Q6:** What is the significance of AST:ALT ratio >2:1?
> Alcoholic liver disease (pyridoxal phosphate deficiency impairs ALT synthesis)

**Q7:** What specific p53 mutation does aflatoxin B1 cause?
> Codon 249 mutation (AGG -> AGT, Arg -> Ser)

**Q8:** Why is HEV dangerous in pregnant women?
> Causes fulminant hepatic failure with ~20% mortality in third trimester

**Q9:** What are Mallory-Denk bodies?
> Damaged cytokeratin intermediate filaments seen in alcoholic hepatitis, NASH, Wilson disease, and HCC

**Q10:** Name the 5 parameters of the Child-Pugh score.
> Albumin, Bilirubin, Clotting (PT/INR), Degree of ascites, Encephalopathy grade

**Q11:** How does HBV cause HCC?
> HBx protein inactivates p53; viral DNA integration causes insertional mutagenesis

**Q12:** What is the characteristic imaging finding of HCC?
> Arterial enhancement with portal venous washout on triple-phase CT/MRI`,
        mnemonics: [],
        keyPoints: [
          "12 recall questions covering viral hepatitis, cirrhosis, and hepatocellular carcinoma",
        ],
        textbookRefs: [
          {
            book: "Robbins Pathologic Basis of Disease",
            chapter: "Chapter 18",
            edition: "10th",
          },
        ],
      },
    ],
  },

  // ─── Topic 5: Gallbladder & Pancreas ──────────────────────────
  {
    topicCode: "PA-MOD-05-TOP-05",
    layers: [
      {
        layer: 1,
        slug: "gallbladder-pancreas-foundation",
        title: "Gallbladder & Pancreas - Foundation",
        estimatedMinutes: 20,
        summary:
          "Gallbladder diseases include cholelithiasis, cholecystitis, and gallbladder carcinoma. Pancreatic diseases include acute and chronic pancreatitis and pancreatic carcinoma.",
        contentMd: `# Gallbladder & Pancreas Pathology

## Cholelithiasis (Gallstones)
| Type | Cholesterol stones (80%) | Pigment stones (20%) |
|------|------------------------|---------------------|
| Composition | Cholesterol monohydrate | Calcium bilirubinate |
| Color | Yellow-green | Black or brown |
| Risk factors | 5 F's (see mnemonic), obesity, OCP | Hemolytic anemias, cirrhosis, biliary infection |
| Radiopaque | Only 10-20% | Usually radiopaque |
| Geography | Western countries, urban India | Rural India, hemolytic belt |

## Cholecystitis
- **Acute**: 90% due to gallstone impaction in cystic duct -> distension, ischemia, bacterial superinfection
- **Chronic**: Repeated bouts of acute cholecystitis -> fibrosis, Rokitansky-Aschoff sinuses (mucosal herniation)
- **Porcelain gallbladder**: Dystrophic calcification of wall -> risk of gallbladder carcinoma

## Gallbladder Carcinoma
- Most common biliary tract malignancy
- Strong association with gallstones (especially large >3 cm cholesterol stones)
- Often discovered incidentally after cholecystectomy
- Adenocarcinoma (most common histologic type)
- Poor prognosis (usually diagnosed late)

## Acute Pancreatitis
- **Causes**: Gallstones (40%) and Alcohol (40%) account for 80% cases
- Pathology: Fat necrosis (saponification), hemorrhagic necrosis, pseudocyst formation
- Elevated amylase and lipase (lipase more specific)

## Chronic Pancreatitis
- Most common cause: **Alcohol** (India and worldwide)
- Tropical (idiopathic) chronic pancreatitis common in South India
- Irreversible destruction of parenchyma -> fibrosis
- Complications: diabetes, steatorrhea, pseudocyst, pancreatic cancer risk

## Pancreatic Carcinoma
- Adenocarcinoma of head of pancreas (60-70% of cases)
- Painless obstructive jaundice (Courvoisier sign: palpable gallbladder + jaundice)
- KRAS mutation in >90% cases
- Tumor marker: **CA 19-9**
- Extremely poor prognosis (5-year survival <10%)

> **Clinical Pearl**: In India, tropical chronic pancreatitis is a distinct entity seen in young patients from Kerala and Tamil Nadu, presenting with large pancreatic calculi and early-onset diabetes.`,
        mnemonics: [
          {
            text: "5 F's for cholesterol gallstone risk",
            explanation:
              "Fat (obese), Female, Fertile (multiparity), Forty (age >40), Fair (not as applicable in India, but reflects estrogen-related risk)",
          },
          {
            text: "GET SMASHED for causes of acute pancreatitis",
            explanation:
              "G-Gallstones, E-Ethanol, T-Trauma, S-Steroids, M-Mumps, A-Autoimmune, S-Scorpion sting, H-Hyperlipidemia/Hypercalcemia, E-ERCP, D-Drugs (azathioprine, valproate)",
          },
        ],
        keyPoints: [
          "Cholesterol stones (80%) are most common; pigment stones are associated with hemolytic anemias",
          "Gallstones and alcohol account for 80% of acute pancreatitis cases",
          "Lipase is more specific than amylase for acute pancreatitis diagnosis",
          "Pancreatic head carcinoma presents with painless obstructive jaundice and Courvoisier sign",
          "KRAS mutation is found in >90% of pancreatic adenocarcinomas",
          "Porcelain gallbladder (calcified wall) is a risk factor for gallbladder carcinoma",
        ],
        textbookRefs: [
          {
            book: "Robbins Pathologic Basis of Disease",
            chapter: "Chapter 19: Pancreas; Chapter 18: Gallbladder",
            edition: "10th",
          },
          {
            book: "Harsh Mohan Textbook of Pathology",
            chapter: "Chapter 22: Biliary Tract and Pancreas",
            edition: "8th",
          },
        ],
      },
      {
        layer: 2,
        slug: "gallbladder-pancreas-mechanism",
        title: "Gallbladder & Pancreas - Mechanism",
        estimatedMinutes: 30,
        summary:
          "Pathogenesis of gallstone formation, mechanisms of acute pancreatitis involving premature trypsin activation, and molecular genetics of pancreatic cancer.",
        contentMd: `# Mechanisms of Gallbladder & Pancreatic Disease

## Pathogenesis of Cholesterol Gallstones
1. **Cholesterol supersaturation**: Excess cholesterol relative to bile salts and phospholipids
2. **Nucleation**: Mucin glycoproteins act as pronucleating factors
3. **Gallbladder hypomotility**: Stasis allows crystal aggregation
- Factors increasing cholesterol: obesity, estrogen (OCP, pregnancy), fibrates
- Factors decreasing bile salts: ileal disease/resection, cholestyramine

## Pathogenesis of Acute Pancreatitis
1. **Premature intrapancreatic activation of trypsinogen to trypsin**
2. Trypsin activates other zymogens: elastase, phospholipase A2, complement
3. **Autodigestion cascade**:
   - Elastase -> vascular damage -> hemorrhage
   - Phospholipase A2 -> fat necrosis (saponification with calcium)
   - Trypsin -> further zymogen activation (amplification loop)
4. Systemic release -> SIRS, ARDS, DIC, multiorgan failure

### Specific Mechanisms by Cause
| Cause | Mechanism |
|-------|-----------|
| Gallstones | Impaction at ampulla of Vater -> bile reflux into pancreatic duct |
| Alcohol | Direct toxic effect + stimulates secretion against obstructed duct |
| Hypertriglyceridemia | Lipase breaks down TGs in pancreatic capillaries -> toxic FFAs |
| Hypercalcemia | Calcium activates trypsinogen within pancreatic duct |

## Hereditary Pancreatitis
- **PRSS1 gene mutation**: Gain-of-function in cationic trypsinogen -> cannot be inactivated
- **SPINK1 mutation**: Loss of trypsin inhibitor function
- Autosomal dominant, recurrent episodes from childhood

## Molecular Pathogenesis of Pancreatic Cancer
| Gene | Type | Frequency | Function |
|------|------|-----------|----------|
| **KRAS** | Oncogene | >90% | Constitutive RAS activation -> cell proliferation |
| **p16/CDKN2A** | TSG | 95% | Loss of cell cycle inhibition |
| **TP53** | TSG | 75% | Loss of apoptosis and DNA repair |
| **SMAD4/DPC4** | TSG | 55% | Loss of TGF-beta growth inhibition |

- Precursor lesion: **PanIN** (Pancreatic Intraepithelial Neoplasia)
- PanIN-1 (KRAS) -> PanIN-2 (p16 loss) -> PanIN-3 (TP53, SMAD4 loss) -> Invasive carcinoma

> **Clinical Pearl**: SPINK1 mutations are particularly prevalent in tropical chronic pancreatitis in South India, representing a unique genetic-environmental interaction.`,
        mnemonics: [
          {
            text: "TAPE for trypsin-activated enzymes in pancreatitis",
            explanation:
              "T-Trypsin (self-amplification), A-Activated complement, P-Phospholipase A2 (fat necrosis), E-Elastase (vascular hemorrhage)",
          },
          {
            text: "KRAS-p16-p53-SMAD4 for pancreatic cancer progression",
            explanation:
              "Sequential mutations: KRAS (>90%, earliest) -> p16 loss -> p53 loss -> SMAD4 loss -> invasive carcinoma",
          },
        ],
        keyPoints: [
          "Cholesterol gallstones form due to supersaturation, nucleation, and gallbladder stasis",
          "Premature trypsin activation is the central event in acute pancreatitis pathogenesis",
          "Elastase causes hemorrhage; phospholipase A2 causes fat necrosis in acute pancreatitis",
          "KRAS mutation is present in >90% of pancreatic cancers and is the earliest genetic event",
          "PanIN is the precursor lesion for pancreatic ductal adenocarcinoma",
        ],
        textbookRefs: [
          {
            book: "Robbins Pathologic Basis of Disease",
            chapter: "Chapter 19: Pathogenesis of Pancreatic Disease",
            edition: "10th",
          },
          {
            book: "Harsh Mohan Textbook of Pathology",
            chapter: "Chapter 22: Mechanisms of Biliary and Pancreatic Disease",
            edition: "8th",
          },
        ],
      },
      {
        layer: 3,
        slug: "gallbladder-pancreas-clinical",
        title: "Gallbladder & Pancreas - Clinical Application",
        estimatedMinutes: 20,
        summary:
          "Clinical presentations of biliary and pancreatic diseases, including acute abdomen management, severity scoring, and pancreatic cancer diagnosis.",
        contentMd: `# Clinical Applications

## Case 1: Acute Pancreatitis
- 40-year-old male, heavy drinker, presents with sudden severe epigastric pain radiating to back, vomiting
- Examination: epigastric tenderness, guarding
- Labs: Serum amylase 1500 U/L, lipase 2000 U/L, calcium low
- CT abdomen: enlarged pancreas with peripancreatic fat stranding
- **Severity assessment**:
  | Scoring System | Parameters |
  |---------------|-----------|
  | Ranson criteria | At admission: Age >55, WBC >16000, glucose >200, LDH >350, AST >250; At 48h: Ca2+ <8, Hct drop >10%, BUN rise >5, base deficit >4, fluid sequestration >6L, PaO2 <60 |
  | APACHE II | Multi-organ assessment (>8 = severe) |
  | Modified CT severity index | Necrosis extent + peripancreatic collections |
- **Cullen sign**: Periumbilical ecchymosis (retroperitoneal hemorrhage tracking to umbilicus)
- **Grey Turner sign**: Flank ecchymosis

## Case 2: Gallbladder Carcinoma
- 65-year-old female from North India (Gangetic belt), known cholelithiasis for 20 years
- Presents with right hypochondrial pain, weight loss, jaundice
- USG: irregular gallbladder wall thickening, large gallstone
- Histopathology post-cholecystectomy: well-differentiated adenocarcinoma infiltrating muscular layer
- **Indian context**: North India (especially UP, Bihar) has highest gallbladder cancer incidence globally

## Case 3: Pancreatic Head Carcinoma
- 60-year-old male, painless progressive jaundice, pruritus, weight loss, new-onset diabetes
- Examination: palpable non-tender gallbladder (**Courvoisier sign**)
- Labs: Elevated bilirubin (conjugated), elevated ALP, CA 19-9 = 500 U/mL
- CT: pancreatic head mass with double duct sign (dilated CBD + pancreatic duct)
- Treatment: Whipple procedure (pancreaticoduodenectomy) if resectable

## Important Clinical Signs
| Sign | Finding | Condition |
|------|---------|-----------|
| Murphy sign | Arrest of inspiration during RUQ palpation | Acute cholecystitis |
| Courvoisier sign | Palpable gallbladder + painless jaundice | Pancreatic head carcinoma |
| Cullen sign | Periumbilical bruising | Severe acute pancreatitis |
| Grey Turner sign | Flank bruising | Severe acute pancreatitis |
| Trousseau sign | Migratory thrombophlebitis | Pancreatic cancer (paraneoplastic) |

> **Clinical Pearl**: The Gangetic belt of India has one of the world's highest incidence rates of gallbladder carcinoma, attributed to chronic gallstone disease and possible environmental/dietary factors.`,
        mnemonics: [
          {
            text: "Courvoisier = Cancer; Murphy = calculus (stones)",
            explanation:
              "Courvoisier sign (palpable GB + painless jaundice) = malignant obstruction (usually pancreatic head cancer); Murphy sign (inspiratory arrest with RUQ pressure) = acute cholecystitis from gallstones",
          },
        ],
        keyPoints: [
          "Lipase is more specific than amylase for diagnosing acute pancreatitis",
          "Cullen sign (periumbilical) and Grey Turner sign (flank) indicate severe hemorrhagic pancreatitis",
          "Courvoisier sign: palpable non-tender gallbladder with painless jaundice = periampullary carcinoma",
          "Double duct sign on CT (dilated CBD + pancreatic duct) suggests pancreatic head mass",
          "Gallbladder carcinoma has exceptionally high incidence in the Gangetic belt of India",
        ],
        textbookRefs: [
          {
            book: "Robbins Pathologic Basis of Disease",
            chapter: "Chapter 19: Clinical Features",
            edition: "10th",
          },
          {
            book: "Harsh Mohan Textbook of Pathology",
            chapter: "Chapter 22: Clinical Biliopancreatic Pathology",
            edition: "8th",
          },
        ],
      },
      {
        layer: 4,
        slug: "gallbladder-pancreas-exam",
        title: "Gallbladder & Pancreas - Exam Prep",
        estimatedMinutes: 15,
        summary:
          "High-yield points on gallbladder and pancreatic diseases for NEXT/NEET PG exams.",
        contentMd: `# Exam Preparation - High Yield

## One-Liners
- Most common gallstones worldwide: **Cholesterol stones (80%)**
- Most common cause of acute pancreatitis: **Gallstones (40%)** and alcohol (40%)
- Most specific enzyme for pancreatitis: **Lipase**
- Rokitansky-Aschoff sinuses: **Chronic cholecystitis** (mucosal outpouchings through muscular wall)
- Porcelain gallbladder: **Calcified wall -> risk of carcinoma**
- Courvoisier law: Palpable GB + jaundice = **Malignancy (not stones)**
- Most common gene mutated in pancreatic cancer: **KRAS (>90%)**
- Pancreatic cancer tumor marker: **CA 19-9**
- Trousseau syndrome (migratory thrombophlebitis): **Pancreatic cancer** (paraneoplastic)
- Tropical chronic pancreatitis: **SPINK1 mutation**, South India, large ductal calculi
- Pancreatic pseudocyst: Lacks epithelial lining, **walled off by granulation/fibrous tissue**
- True cyst vs pseudocyst: True cyst has **epithelial lining**; pseudocyst does **not**
- Whipple procedure: **Pancreaticoduodenectomy** for pancreatic head/periampullary tumors

## Comparison: Acute vs Chronic Pancreatitis
| Feature | Acute | Chronic |
|---------|-------|---------|
| Reversibility | Reversible (if mild) | Irreversible |
| Pathology | Edema, fat necrosis, hemorrhage | Fibrosis, atrophy, calcification |
| Enzymes | Elevated amylase/lipase | May be normal (burnt-out gland) |
| Calcium | Low (saponification) | Calcifications seen |
| Complications | Pseudocyst, SIRS, ARDS | Diabetes, steatorrhea, cancer |

## Previous Year Themes
- Pathogenesis of acute pancreatitis (premature trypsin activation)
- Gallstone types and risk factors (5 F's)
- Pancreatic cancer molecular genetics (KRAS, p16, p53, SMAD4)
- Courvoisier law interpretation
- Ranson criteria for severity assessment

## Pattern Recognition
- Sudden epigastric pain radiating to back + elevated lipase = **Acute pancreatitis**
- Painless jaundice + palpable GB + weight loss = **Pancreatic head carcinoma**
- RUQ colicky pain after fatty meal = **Biliary colic (gallstones)**
- New-onset diabetes + weight loss in elderly = Think **pancreatic cancer**
- Periumbilical and flank bruising = **Severe hemorrhagic pancreatitis**`,
        mnemonics: [
          {
            text: "CulLen = Center (periumbilical); Grey Turner = To the side (flanks)",
            explanation:
              "Both are signs of retroperitoneal hemorrhage in severe pancreatitis: Cullen sign is periumbilical ecchymosis, Grey Turner sign is flank ecchymosis",
          },
        ],
        keyPoints: [
          "Gallstones and alcohol each account for 40% of acute pancreatitis cases",
          "KRAS is mutated in >90% of pancreatic cancers - the highest frequency for any gene in any cancer",
          "Courvoisier law: palpable gallbladder + jaundice indicates malignancy, not gallstones",
          "Pancreatic pseudocyst lacks an epithelial lining - this distinguishes it from true cysts",
          "Tropical chronic pancreatitis in South India is associated with SPINK1 mutations",
        ],
        textbookRefs: [
          {
            book: "Robbins Pathologic Basis of Disease",
            chapter: "Chapter 19",
            edition: "10th",
          },
          {
            book: "Harsh Mohan Textbook of Pathology",
            chapter: "Chapter 22",
            edition: "8th",
          },
        ],
      },
      {
        layer: 5,
        slug: "gallbladder-pancreas-recall",
        title: "Gallbladder & Pancreas - Active Recall",
        estimatedMinutes: 10,
        summary:
          "Flashcard-style Q&A for self-testing on gallbladder and pancreatic pathology.",
        contentMd: `# Active Recall

**Q1:** What are the 5 F's for cholesterol gallstone risk factors?
> Fat, Female, Fertile (multiparity), Forty (>40), Fair (estrogen-related)

**Q2:** What is the central event in acute pancreatitis pathogenesis?
> Premature intrapancreatic activation of trypsinogen to trypsin

**Q3:** Which enzyme causes fat necrosis in acute pancreatitis?
> Phospholipase A2 (liberates fatty acids that combine with calcium -> saponification)

**Q4:** What is Courvoisier law?
> Palpable gallbladder with painless jaundice = malignant obstruction (not gallstones, because chronic stones cause fibrotic contracted GB)

**Q5:** Name the 4 key mutations in pancreatic ductal adenocarcinoma.
> KRAS (>90%), p16/CDKN2A (95%), TP53 (75%), SMAD4/DPC4 (55%)

**Q6:** What is a pancreatic pseudocyst?
> Encapsulated collection of pancreatic fluid walled off by fibrous/granulation tissue, WITHOUT epithelial lining

**Q7:** What are Cullen and Grey Turner signs?
> Cullen = periumbilical ecchymosis; Grey Turner = flank ecchymosis; both indicate severe hemorrhagic pancreatitis

**Q8:** What is the tumor marker for pancreatic cancer?
> CA 19-9

**Q9:** What are Rokitansky-Aschoff sinuses?
> Mucosal outpouchings (herniations) through the muscular wall of gallbladder in chronic cholecystitis

**Q10:** What is Trousseau syndrome and which cancer is it most associated with?
> Migratory superficial thrombophlebitis; most associated with pancreatic carcinoma (paraneoplastic)

**Q11:** What is the precursor lesion of pancreatic ductal adenocarcinoma?
> PanIN (Pancreatic Intraepithelial Neoplasia) - progresses through PanIN-1, 2, 3 to invasive carcinoma

**Q12:** What is the double duct sign?
> Simultaneous dilation of common bile duct and pancreatic duct on imaging, suggesting mass at pancreatic head/ampulla of Vater`,
        mnemonics: [],
        keyPoints: [
          "12 recall questions covering gallstone disease, pancreatitis, and pancreatic cancer",
        ],
        textbookRefs: [
          {
            book: "Robbins Pathologic Basis of Disease",
            chapter: "Chapters 18-19",
            edition: "10th",
          },
        ],
      },
    ],
  },
];
