export const regenBatch2LessonsPart5 = [
  {
    topicCode: "SU-MOD-05-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "peptic-ulcer-surgical-foundation",
        title: "Peptic Ulcer: Surgical Management - Foundation",
        estimatedMinutes: 21,
        summary: "Peptic ulcer disease overview and indications for surgery.",
        contentMd: "# Peptic Ulcer Surgical Management Fundamentals\n\n## Peptic Ulcer Disease Epidemiology\n- **Incidence**: 1-3% population prevalence\n- **Etiology**: H. pylori (90%), NSAIDs (7%), rare causes (ZES, stress)\n- **Location**: Duodenal (80%), gastric (20%)\n- **Complications**: Perforation (10%), bleeding (15-20%), obstruction (2%)\n- **Mortality**: <1% uncomplicated; 5-15% if perforated\n\n## Pathophysiology of Complications\n\n### Perforation\n- **Location**: Anterior duodenal wall most common\n- **Presentation**: Acute, severe epigastric pain → peritonitis\n- **Contents**: Gastric acid, food, bacteria enter peritoneum\n- **Peritonitis**: Chemical first 6-12h, then bacterial\n- **Mortality**: 5-15% (age, comorbidities, delay in treatment increase)\n\n### Hemorrhage\n- **Duodenal**: Gastroduodenal artery involved\n- **Gastric**: Left gastric artery\n- **Presentation**: Hematemesis, melena, shock\n- **PPI effect**: Reduced bleeding risk; shift from surgery to endoscopy\n\n### Obstruction\n- **Mechanism**: Pyloric stricture from chronic ulcer scarring\n- **Symptoms**: Vomiting, weight loss, early satiety\n- **Presentation**: Subacute/chronic\n\n## Historical Context (Pre-PPI Era)\n- **Gastrectomy**: Standard for peptic ulcer (Billroth I, II)\n- **Vagotomy**: Reduced acid secretion\n- **Post-gastrectomy syndromes**: Dumping, malabsorption\n- **Modern era**: PPIs reduce surgery need to <5% of PUD cases\n\n## Current Indications for Surgery\n- **Perforation**: Acute surgical emergency\n- **Refractory bleeding**: Failed endoscopy (2+ attempts)\n- **Obstruction**: Failed medical management\n- **Giant ulcer**: >3 cm with complication\n- **Carcinoma suspicion**: Gastric ulcer with concerning features",
        mnemonics: [
          { text: "DU 80%, GU 20%", explanation: "Duodenal vs gastric ulcer frequency" },
          { text: "PERFORATION = ANTERIOR DUODENAL WALL", explanation: "Most common location" }
        ],
        keyPoints: [
          "H. pylori and NSAIDs cause 97% of PUD",
          "Perforation is surgical emergency",
          "PPIs dramatically reduced surgical indications",
          "Modern surgery mainly for bleeding complications"
        ],
        textbookRefs: [
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Ch 45", edition: "27th" },
          { book: "Sabiston Textbook of Surgery", chapter: "Ch 35", edition: "21st" }
        ]
      },
      {
        layer: 2,
        slug: "peptic-ulcer-surgical-mechanism",
        title: "Peptic Ulcer: Surgical Management - Mechanism",
        estimatedMinutes: 27,
        summary: "Pathophysiology of surgical repairs and post-operative complications.",
        contentMd: "# Surgical Pathophysiology\n\n## Perforation Repair Mechanisms\n- **Omentoplasty**: Graham patch (pedicled omentum over hole)\n  - Mechanism: Omentum plug seals defect; vascularization aids healing\n  - Success rate: 95%+\n  - No acid reduction needed with modern PPIs\n- **Suture closure**: Primary closure with omental reinforcement\n- **Acid reduction**: Historically vagotomy; now rarely done (PPIs effective)\n\n## Bleeding Ulcer Surgical Management\n- **Duodenal ulcer**: Usually from gastroduodenal artery\n  - Approach: Longitudinal duodenotomy; underscore bleeding vessel\n  - Sutures: Encompass artery above and below ulcer\n  - Vagotomy: Historically reduced acid; now avoided (PPI therapy adequate)\n- **Gastric ulcer**: Left gastric artery more common\n  - Risk: Malignancy; need adequate biopsy from ulcer margin\n  - May require gastrectomy (especially Type III, IV)\n\n## Obstruction Repair\n- **Pyloric stenosis**: Scarring from chronic ulcer\n- **Pyloroplasty**: Incision + closure to increase lumen\n  - Heineke-Mikulicz: Longitudinal incision, transverse closure\n  - Finney: Wide gastroduodenostomy\n- **With vagotomy**: Historically paired (if vagotomy done)\n- **Modern approach**: Endoscopic dilation first; surgery only if failed\n\n## Post-Gastrectomy Syndromes (Historical)\n- **Dumping syndrome**: Rapid gastric emptying → hyperglycemia → reactive hypoglycemia\n  - Symptoms: Palpitations, sweating, tremor\n  - Management: Dietary (frequent small meals), octreotide\n- **Alkaline reflux gastritis**: Bile reflux → mucosal injury\n  - Symptoms: Bilious vomiting, epigastric pain\n  - Management: Roux-en-Y conversion\n- **Malabsorption**: Reduced stomach size, altered anatomy\n  - B12, iron, calcium deficiency\n- **Afferent loop syndrome**: Blind loop bacterial overgrowth\n\n## Acid-Reducing Procedures (Mostly Historical)\n- **Vagotomy mechanisms**:\n  - Truncal: Reduces acid 70%; requires pyloroplasty\n  - Selective: Reduces acid 60%; requires pyloroplasty\n  - Parietal cell (highly selective): Reduces acid 50%; no pyloroplasty\n- **Modern use**: Rare; PPIs superior\n- **Complications**: Diarrhea (20%), continued ulceration (10%)",
        mnemonics: [
          { text: "GRAHAM PATCH = OMENTOPLASTY", explanation: "Classic perforation repair" },
          { text: "DU BLEEDING = GASTRODUODENAL ARTERY", explanation: "Vessel to ligate" }
        ],
        keyPoints: [
          "Omentoplasty standard perforation repair",
          "Suture ligation controls bleeding ulcer",
          "Modern PPIs eliminate need for acid-reducing surgery",
          "Post-gastrectomy syndromes mostly historical"
        ],
        textbookRefs: [
          { book: "Sabiston Textbook of Surgery", chapter: "Ch 35", edition: "21st" },
          { book: "Oxford Textbook of Surgery", chapter: "Ch 13", edition: "3rd" }
        ]
      },
      {
        layer: 3,
        slug: "peptic-ulcer-surgical-clinical",
        title: "Peptic Ulcer: Surgical Management - Clinical",
        estimatedMinutes: 30,
        summary: "Clinical management of peptic ulcer complications requiring surgery.",
        contentMd: "# Clinical Management of Surgical Complications\n\n## Perforated Peptic Ulcer\n\n### Presentation\n- **Acute pain**: Sudden onset epigastric, rapidly diffuse\n- **Peritonitis signs**: Rigid abdomen, rebound, guarding\n- **Shock**: From peritoneal contamination if late\n- **Imaging**: Upright CXR shows free air; CT confirms\n\n### Preoperative Management\n- **Fluid resuscitation**: 2 large-bore IV access\n- **Nasogastric tube**: Decompression\n- **Broad-spectrum antibiotics**: Cover GI flora\n- **Expedite to OR**: Minutes matter; delay increases mortality\n- **Goal**: Stabilization while proceeding to surgery\n\n### Intraoperative Management\n1. **Exploration**: Confirm diagnosis, assess contamination\n2. **Repair selection**:\n   - **Omentoplasty (Graham patch)**: Standard approach\n     - Longitudinal incision over ulcer\n     - Oversew ulcer with 2-0 absorbable sutures\n     - Pedicled omentum placed over defect\n     - Closure: Primary peritoneal closure\n   - **Alternative**: Primary closure if edges fresh\n3. **Acid reduction**: NOT recommended (PPIs adequate)\n4. **Peritoneal lavage**: Saline irrigation to clear contamination\n5. **Drainage**: Consider if significant contamination\n\n### Postoperative Management\n- **PPI therapy**: High-dose IV (pantoprazole 80 mg bolus, then infusion)\n- **H. pylori testing**: Blood serology or breath test (if negative, retest at 4 weeks)\n- **H. pylori treatment**: If positive (clarithromycin + metronidazole + PPI for 14 days)\n- **NSAID cessation**: If cause identified\n- **Monitoring**: Vital signs, fluid balance, fever\n- **Antibiotics**: 24-48 hours postoperatively\n\n## Bleeding Peptic Ulcer (Surgical)\n\n### Indications for Surgery\n- **Failed endoscopy**: ≥2 endoscopic attempts unsuccessful\n- **Massive hemorrhage**: Transfusion >6 units\n- **Recurrent bleeding**: After initial hemostasis\n- **Hemodynamic instability**: Despite resuscitation\n\n### Surgical Approach\n\n**Duodenal Ulcer**:\n1. **Access**: Kocher maneuver (mobilize duodenum)\n2. **Incision**: Longitudinal duodenotomy\n3. **Hemostasis**: Suture ligation of vessel (above/below ulcer)\n4. **Consider**: Posterior ulcers may involve gastroduodenal artery\n5. **Closure**: Transverse to avoid stenosis\n\n**Gastric Ulcer**:\n1. **Assessment**: Biopsy ulcer margin (rule out cancer)\n2. **Type consideration**:\n   - Type I (lesser curve): May require gastrectomy\n   - Type II (lesser curve + duodenal): Ulcer overseeing\n   - Type III (prepyloric): Oversewing adequate\n   - Type IV (high lesser curve): May need antrectomy\n3. **Gastrectomy**: If large ulcer or malignancy concern\n\n## Obstruction from Pyloric Stenosis\n\n### Medical Preoperative\n- **Nasogastric decompression**: Often adequate (vomiting relief)\n- **Fluids/electrolytes**: Metabolic alkalosis correction\n- **Endoscopic dilation**: Try first; success 50-70%\n- **Surgery**: If failed dilation or contraindicated\n\n### Surgical Options\n1. **Pyloroplasty**: Heineke-Mikulicz (longitudinal incision, transverse closure)\n2. **Gastrojejunostomy**: If duodenal scarring severe\n3. **Vagotomy**: Historically paired; now rarely done (PPIs better)\n\n### Technical Considerations\n- **Biopsy**: All gastric ulcers (rule out cancer)\n- **Acid reduction**: Not needed with PPI therapy\n- **Pyloroplasty technique**: Preserve blood supply, adequate size",
        mnemonics: [
          { text: "PERFORATION = GRAHAM PATCH + PPI", explanation: "Modern approach" },
          { text: "DUODENAL BLEEDING = UNDERSCORE GASTRODUODENAL ARTERY", explanation: "Hemostasis technique" }
        ],
        keyPoints: [
          "Omentoplasty standard perforation repair",
          "PPI therapy high-dose postoperatively essential",
          "H. pylori testing and treatment critical",
          "Bleeding ulcer surgery mainly ligation technique"
        ],
        textbookRefs: [
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Ch 45", edition: "27th" },
          { book: "NMC CBME Curriculum - Upper GI Surgery 2023", chapter: "PUD", edition: "Latest" }
        ]
      },
      {
        layer: 4,
        slug: "peptic-ulcer-surgical-exam-prep",
        title: "Peptic Ulcer: Surgical Management - Exam Prep",
        estimatedMinutes: 24,
        summary: "High-yield facts about peptic ulcer surgical management.",
        contentMd: "# Exam-Focused Content\n\n## Surgical Indications Timeline\n- **Perforation**: Surgical emergency (mortality increases with delay)\n- **Bleeding**: Surgery after failed endoscopy (≥2 attempts)\n- **Obstruction**: Surgery after failed endoscopic dilation (48-72h trial)\n- **Intractable ulcer**: Rare with PPIs; surgery only if severe\n\n## Modern vs Historical Approach\n| Aspect | Historical | Modern |\n|--------|-----------|--------|\n| Perforation | Gastrectomy ± vagotomy | Omentoplasty + PPI |\n| Bleeding | Gastrectomy ± vagotomy | Ligation + PPI |\n| Acid reduction | Vagotomy (mandatory) | PPIs (avoid surgery) |\n| Obstruction | Pyloroplasty + vagotomy | Endoscopic dilation first |\n| H. pylori | Not considered | Treatment essential |\n\n## Perforation Repair Specifics\n- **Graham patch**: Omentoplasty over hole (easiest, safest)\n- **Primary closure**: If ulcer edges fresh (<6h)\n- **Suture material**: 2-0 absorbable (PDS, Vicryl)\n- **Peritoneal lavage**: Saline irrigation (clear contamination)\n- **Drainage**: Avoid if minimal contamination\n\n## Bleeding Ulcer Ligation\n- **Duodenal**: Gastroduodenal artery (most common vessel)\n- **Gastric**: Left gastric artery\n- **Technique**: Sutures above and below bleeding point\n- **Material**: 2-0 absorbable\n- **Vagotomy**: NOT recommended with modern PPIs\n\n## Obstruction Management\n- **Endoscopic dilation**: First-line (success 50-70%)\n- **Pyloroplasty**: If dilation fails\n- **Vagotomy**: NOT needed (PPIs adequate)\n- **Gastrojejunostomy**: If severe duodenal scarring\n\n## Postoperative PPI Therapy\n- **Dose**: Pantoprazole 80 mg IV bolus, then 8 mg/h infusion\n- **Duration**: 5-7 days IV, then oral PPI\n- **H. pylori**: Test if not already done\n- **Eradication**: Clarithromycin + metronidazole + PPI (14 days)\n- **Follow-up**: Confirm H. pylori eradication 4 weeks post-treatment\n\n## Risk Factors for Mortality\n- **Age >60**: Higher mortality\n- **Shock at presentation**: Poor prognosis\n- **Perforation >24h**: Increased mortality\n- **Comorbidities**: Cardiac, renal disease\n- **ASA >III**: Worse outcomes",
        mnemonics: [
          { text: "MODERN = OMENTOPLASTY + PPI, NOT GASTRECTOMY", explanation: "Paradigm shift" },
          { text: "H. PYLORI = TEST + TREAT", explanation: "Prevention of recurrence" }
        ],
        keyPoints: [
          "Graham omentoplasty is perforation gold standard",
          "PPIs eliminated need for acid-reducing surgery",
          "H. pylori eradication prevents recurrence",
          "Endoscopic dilation first for obstruction"
        ],
        textbookRefs: [
          { book: "NEET-PG Surgery Peptic Ulcer 2024", chapter: "Surgical Management", edition: "Latest" },
          { book: "NMC CBME - Upper GI Surgery 2023", chapter: "Latest", edition: "Latest" }
        ]
      },
      {
        layer: 5,
        slug: "peptic-ulcer-surgical-active-recall",
        title: "Peptic Ulcer: Surgical Management - Active Recall",
        estimatedMinutes: 20,
        summary: "Clinical scenarios and rapid-fire questions.",
        contentMd: "# Clinical Scenarios & Problem-Solving\n\n## Case 1: Perforated Duodenal Ulcer\n**Scenario**: 45-year-old male, sudden epigastric pain 6 hours ago, rigid abdomen, free air on CXR, BP 90/60.\n\n**Management**:\n- Diagnosis? (Perforated duodenal ulcer)\n- Preoperative? (2 IV access, fluids, NG tube, antibiotics, OR ASAP)\n- Surgical approach? (Graham omentoplasty - simplest, safest)\n- Vagotomy needed? (No; PPIs superior)\n- Postoperative? (High-dose PPI, H. pylori test/treat)\n\n## Case 2: Bleeding Duodenal Ulcer, Failed Endoscopy\n**Scenario**: 60-year-old, hematemesis, Hgb 7 g/dL after 2 endoscopic attempts (failed), ongoing bleeding.\n\n**Management**:\n- Indication for surgery? (Failed endoscopy × 2)\n- Vessel involved? (Gastroduodenal artery - posterior DU)\n- Surgical approach? (Longitudinal duodenotomy, underscore artery)\n- Vagotomy? (No; not needed with PPI)\n- Outcome? (Hemostasis, high-dose PPI, H. pylori treatment)\n\n## Case 3: Gastric Ulcer with Bleeding\n**Scenario**: 68-year-old, melena, gastric ulcer on endoscopy, high-risk features, failed hemostasis.\n\n**Assessment**:\n- Type classification? (Need to determine Type I-IV)\n- Malignancy concern? (Yes; gastric ulcer requires biopsy)\n- Surgical plan? (Possibly antrectomy if Type I; oversewing if Type III)\n- Biopsy? (Essential - rule out cancer)\n\n## Rapid-Fire\n1. Most common PUD cause? (H. pylori 90%)\n2. DU bleeding vessel? (Gastroduodenal artery)\n3. GU bleeding vessel? (Left gastric artery)\n4. Graham patch technique? (Omentoplasty over hole)\n5. Vagotomy current use? (Rare; PPIs superior)\n6. Perforation mortality? (5-15%)\n7. H. pylori testing: serology or? (Blood, breath test, stool antigen)\n8. Obstruction: endoscopic success? (50-70%)\n9. Pyloroplasty technique? (Heineke-Mikulicz)\n10. PPI postop dose? (80 mg bolus, then 8 mg/h infusion)",
        mnemonics: [
          { text: "PERFORATION = GRAHAM PATCH", explanation: "Standard repair" },
          { text: "BLEEDING DU = GASTRODUODENAL ARTERY LIGATION", explanation: "Hemostasis target" }
        ],
        keyPoints: [
          "Modern PUD surgery mainly for complications",
          "Omentoplasty standard perforation repair",
          "H. pylori treatment essential postoperatively",
          "Vagotomy no longer part of standard approach"
        ],
        textbookRefs: [
          { book: "Bailey & Love's MCQ Companion", chapter: "Upper GI", edition: "3rd" },
          { book: "AIIMS Delhi PUD Cases 2023-24", chapter: "Latest", edition: "Latest" }
        ]
      }
    ]
  },
  {
    topicCode: "SU-MOD-05-TOP-05",
    layers: [
      {
        layer: 1,
        slug: "colorectal-carcinoma-foundation",
        title: "Colorectal Carcinoma - Foundation",
        estimatedMinutes: 24,
        summary: "Epidemiology and classification of colorectal cancer.",
        contentMd: "# Colorectal Carcinoma Fundamentals\n\n## Epidemiology in India\n- **Incidence**: 3rd most common cancer in males, 4th in females\n- **Age**: Peak 50-70 years\n- **Gender**: Slight male predominance (1.2:1)\n- **Lifetime risk**: 1 in 20-25 (varies by region)\n- **Mortality**: 40-50% mortality rate (vs 15-20% in developed countries)\n- **Stage at presentation**: 50-60% Stage III-IV (advanced disease)\n\n## Anatomical Distribution\n- **Rectum**: 30-40% of cancers\n- **Sigmoid colon**: 25-30%\n- **Right colon**: 20-25%\n- **Transverse/left**: 5-10%\n- **Multiple lesions**: 2-5% synchronous cancers\n\n## Histological Types\n- **Adenocarcinoma**: 95% of colorectal cancers\n  - Well/moderate/poorly differentiated\n  - Mucinous type: Better prognosis\n  - Signet ring: Worse prognosis\n- **Neuroendocrine carcinoma**: <1% (very aggressive)\n- **Squamous cell**: <1% (poor prognosis)\n- **Lymphoma**: 1-2%\n\n## Risk Factors\n- **Age**: >50 years (incidence rises exponentially)\n- **Family history**: 10-25% have positive FH\n- **Polyps**: Adenomatous polyps increase risk (10-15 year malignant transformation)\n- **Inflammatory bowel disease**: UC (risk 15-20%), Crohn (risk 5-10%)\n- **Hereditary syndromes**: FAP (100% risk if untreated), HNPCC (70-80% risk)\n- **Obesity, smoking, diet**: Low fiber, high red meat\n\n## TNM Staging (8th Edition AJCC)\n- **T1**: <2 cm\n- **T2**: 2-5 cm\n- **T3**: >5 cm\n- **T4**: Invasion of adjacent structures\n- **N**: 0-3 levels of lymph node involvement\n- **M**: M0 (no metastasis) or M1 (distant metastasis)\n\n## Stage Grouping\n- **Stage I**: T1-2, N0 (5-year survival 85-90%)\n- **Stage II**: T3-4, N0 (5-year survival 60-75%)\n- **Stage III**: Any T, N1-2 (5-year survival 30-60%)\n- **Stage IV**: Any T/N, M1 (5-year survival <10%)",
        mnemonics: [
          { text: "RECTUM 30-40%, SIGMOID 25-30%, RIGHT 20-25%", explanation: "Anatomical distribution" },
          { text: "ADENOCARCINOMA 95%", explanation: "Most common histology" }
        ],
        keyPoints: [
          "Late presentation (Stage III-IV) common in India",
          "Adenocarcinoma accounts for 95% of cases",
          "Age >50 and family history key risk factors",
          "Multiple cancers possible (2-5% synchronous)"
        ],
        textbookRefs: [
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Ch 47", edition: "27th" },
          { book: "Sabiston Textbook of Surgery", chapter: "Ch 35", edition: "21st" }
        ]
      },
      {
        layer: 2,
        slug: "colorectal-carcinoma-mechanism",
        title: "Colorectal Carcinoma - Mechanism",
        estimatedMinutes: 29,
        summary: "Pathophysiology and molecular oncogenesis of colorectal cancer.",
        contentMd: "# Colorectal Carcinogenesis\n\n## Adenoma-Carcinoma Sequence\n- **Initiation**: APC gene mutation (gatekeeper gene)\n- **Early adenoma**: Small, dysplasia confined to mucosa\n- **Intermediate**: Growth, increasing dysplasia\n- **Late adenoma**: High-grade dysplasia, large size\n- **Carcinoma**: Invasion through muscularis propria\n- **Timeline**: 10-15 years from polyp to cancer\n\n## Molecular Pathways\n\n### Chromosomal Instability (CIN)\n- **APC gene**: Loss in 80% of colorectal cancers\n- **KRAS activation**: Oncogene activation (40-50%)\n- **TP53 loss**: Tumor suppressor loss (50-70%)\n- **18q deletion**: SMAD loss (60%)\n- **Pathway**: Progressive genetic alterations\n\n### Microsatellite Instability (MSI)\n- **Mismatch repair genes**: MLH1, MSH2, MSH6, PMS2\n- **Frequency**: 15% of colorectal cancers\n- **HNPCC**: High risk MSI pathway\n- **Sporadic MLH1 methylation**: Common\n- **Features**: Right colon, mucinous/medullary, better prognosis\n\n### CpG Island Methylator Phenotype (CIMP)\n- **Promoter hypermethylation**: Silences tumor suppressors\n- **VDR promoter**: Associated with worse prognosis\n\n## Invasion & Metastasis\n- **Epithelial-mesenchymal transition (EMT)**: Cells gain mobility\n- **Lymphatic invasion**: Spreads to regional lymph nodes first\n- **Venous invasion**: Leads to hepatic metastases\n- **Peritoneal spread**: From advanced tumors\n- **Sites of metastasis**: Liver (40%), peritoneum (30%), lung (20%)\n\n## Spread Patterns\n- **Lymphatic drainage**: Follows blood supply (superior/inferior mesenteric vessels)\n- **Direct invasion**: Into peritoneum, adjacent organs\n- **Peritoneal seeding**: From perforation or advanced disease\n- **Obstructive metastases**: Regional nodes; can progress to distal organs",
        mnemonics: [
          { text: "APC → KRAS → TP53 → INVASION", explanation: "Molecular progression" },
          { text: "CIN vs MSI = TWO PATHWAYS", explanation: "Colorectal cancer molecular subtypes" }
        ],
        keyPoints: [
          "Adenoma-carcinoma sequence takes 10-15 years",
          "APC gene mutations initiate most CRCs",
          "MSI pathway (15%) has different features",
          "Hepatic metastases most common"
        ],
        textbookRefs: [
          { book: "Robbins & Cotran Pathologic Basis of Disease", chapter: "Ch 15", edition: "10th" },
          { book: "Sabiston Textbook of Surgery", chapter: "Ch 35", edition: "21st" }
        ]
      },
      {
        layer: 3,
        slug: "colorectal-carcinoma-clinical",
        title: "Colorectal Carcinoma - Clinical",
        estimatedMinutes: 34,
        summary: "Clinical presentation, diagnosis, and treatment of colorectal cancer.",
        contentMd: "# Clinical Assessment & Management\n\n## Clinical Presentation\n- **Right colon**: Anemia, abdominal mass, rarely obstruction\n  - Vague right abdominal pain\n  - Iron-deficiency anemia\n- **Left colon**: Altered bowel habit, obstruction\n  - Constipation alternating with diarrhea\n  - Narrow stools (\"pencil-like\")\n  - Tenesmus, urgency\n- **Rectum**: Bleeding, tenesmus, incomplete defecation\n  - Bright red blood per rectum\n  - Feeling of incomplete evacuation\n- **Advanced**: Weight loss, abdominal pain, metastatic symptoms\n\n## Diagnostic Evaluation\n1. **History**: Duration, associated symptoms, family history\n2. **Physical exam**: Abdominal mass, hepatomegaly, ascites, rectal exam\n3. **Investigations**:\n   - **FBC**: Anemia (iron deficiency or anemia of chronic disease)\n   - **LFTs**: Hepatic involvement (bilirubin, alkaline phosphatase)\n   - **CEA**: Baseline level (prognostic, follow-up marker)\n4. **Imaging**:\n   - **Colonoscopy**: Gold standard (allows biopsy)\n   - **CT abdomen/pelvis**: Staging (local extent, lymph nodes, metastases)\n   - **MRI pelvis**: Rectal cancers (assess sphincter involvement)\n   - **Chest CT**: Pulmonary metastases\n5. **Biopsy**: Histology, grade, molecular markers (MSI, KRAS, BRAF)\n\n## Treatment Approach\n\n### Stage I\n- **Surgical resection**: Primary therapy\n  - Low anterior resection (LAR) for left colon\n  - Right hemicolectomy for right colon\n  - Anterior resection for rectum\n- **Chemotherapy**: Adjuvant not typically needed\n- **5-year survival**: 85-90%\n\n### Stage II\n- **Surgical resection**: Complete resection essential\n- **Adjuvant chemotherapy**: Consider if high-risk features\n  - T4, emergency presentation, inadequate lymph node resection\n  - 5-FU + oxaliplatin (FOLFOX) for 6 months\n- **5-year survival**: 60-75%\n\n### Stage III\n- **Surgical resection**: Primary therapy\n- **Adjuvant chemotherapy**: Mandatory\n  - FOLFOX (5-FU + leucovorin + oxaliplatin) for 6 months\n  - Regresses micrometastases\n- **5-year survival**: 30-60% (depends on N stage)\n\n### Stage IV\n- **Palliative surgery**: If resectable metastases or obstruction\n  - Hepatic resection (if <4 lesions)\n  - Pulmonary resection (if solitary)\n- **Chemotherapy**: Palliative intent\n  - First-line: FOLFOX or CAPOX\n  - Targeted agents: Bevacizumab (VEGF inhibitor), cetuximab/panitumumab (EGFR inhibitors)\n- **Median survival**: 2-3 years (with modern therapy)\n\n### Rectal Cancer Specific\n- **Stage II-III**: Preoperative chemoradiation\n  - Capecitabine 5FU during concurrent RT\n  - Improves local control, reduces recurrence\n  - Surgery 4-8 weeks after completion\n- **Total Mesorectal Excision (TME)**: Standard technique\n  - Removes rectum with surrounding mesorectum\n  - Reduces local recurrence\n- **Sphincter preservation**: Possible if >5 cm from dentate line\n\n## Surgical Resection Types\n- **Right hemicolectomy**: Cecum to mid-transverse (for right colon cancer)\n- **Low anterior resection (LAR)**: Sigmoid + rectum (for left colon/rectum)\n- **Abdominoperineal resection (APR)**: Total rectum removal, permanent colostomy (for low rectal cancers <5 cm from anus)\n- **Hartmann's procedure**: Diverting colostomy if emergency obstruction",
        mnemonics: [
          { text: "RIGHT = ANEMIA, LEFT = OBSTRUCTION, RECTUM = BLEEDING", explanation: "Clinical presentation by site" },
          { text: "STAGE III = CHEMOTHERAPY MANDATORY", explanation: "Adjuvant therapy indications" }
        ],
        keyPoints: [
          "Site of cancer determines presentation",
          "Colonoscopy with biopsy diagnostic",
          "CT staging essential before treatment",
          "Adjuvant chemotherapy for Stage II-III"
        ],
        textbookRefs: [
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Ch 47", edition: "27th" },
          { book: "NMC CBME Curriculum - Colorectal Cancer 2023", chapter: "Management", edition: "Latest" }
        ]
      },
      {
        layer: 4,
        slug: "colorectal-carcinoma-exam-prep",
        title: "Colorectal Carcinoma - Exam Prep",
        estimatedMinutes: 26,
        summary: "High-yield facts about colorectal cancer staging and treatment.",
        contentMd: "# Exam-Focused Content\n\n## Stage-Based Survival & Treatment\n| Stage | TNM | 5-yr Survival | Treatment |\n|-------|-----|---------------|----------|\n| I | T1-2 N0 | 85-90% | Surgery |\n| IIA | T3 N0 | 75-85% | Surgery ± Chemo |\n| IIB | T4 N0 | 60-75% | Surgery + Chemo |\n| IIIA | T1-2 N1 | 70-80% | Surgery + Chemo |\n| IIIB/C | T3-4 N1-2 | 30-60% | Surgery + Chemo |\n| IV | Any M1 | <10% | Palliative |\n\n## Surgical Resection Types\n- **Right hemicolectomy**: Ileocolic vessels, right colon cancer\n- **Left hemicolectomy**: Left colic vessels, left colon cancer\n- **Sigmoid colectomy**: Inferior mesenteric vessels, sigmoid cancer\n- **Low anterior resection**: Sigmoid + rectum (preserves sphincter)\n- **Abdominoperineal resection**: Total rectum, permanent colostomy\n- **Hartmann's procedure**: Emergency; colostomy + rectal pouch\n\n## Rectal Cancer Considerations\n- **Preoperative chemoradiation**: Stage II-III\n  - Improves local control\n  - Allows sphincter-preserving surgery\n  - 5-FU/capecitabine during RT\n- **Total mesorectal excision (TME)**: Standard technique\n  - Reduces local recurrence from 30% to <10%\n- **Sphincter preservation**: If >5 cm from dentate line\n- **APR**: If <5 cm from anus or sphincter involvement\n\n## Chemotherapy Regimens\n- **FOLFOX**: 5-FU + leucovorin + oxaliplatin (standard)\n- **CAPOX**: Capecitabine + oxaliplatin\n- **Targeted agents**:\n  - Bevacizumab (VEGF inhibitor) for metastatic\n  - Cetuximab/panitumumab (EGFR inhibitors) if KRAS WT\n\n## Metastatic Disease Management\n- **Hepatic metastases**: Consider resection if <4 lesions, adequate liver function\n- **Pulmonary metastases**: Resection if solitary/few lesions\n- **Peritoneal metastases**: Usually palliative\n- **Ascites**: Indicates advanced disease\n\n## Obstruction Management\n- **Right colon obstruction**: Usually cancerous; right hemicolectomy\n- **Left colon obstruction**: High operative mortality\n  - Hartmann's + primary anastomosis later\n  - Colonic stent as bridge to surgery (selective)\n- **Acute presentation**: Higher risk than elective\n\n## Screening Considerations\n- **Colonoscopy**: Every 10 years if normal\n- **Adenomatous polyp**: Remove (prevents cancer)\n- **Dysplastic polyp**: Follow-up colonoscopy\n- **FAP**: Prophylactic colectomy (100% cancer risk)\n- **HNPCC**: Surveillance colonoscopy every 1-2 years",
        mnemonics: [
          { text: "STAGE I = SURGERY, STAGE III = CHEMO MANDATORY", explanation: "Treatment principles" },
          { text: "RECTAL CANCER = PREOP CHEMORAD + TME", explanation: "Standard approach" }
        ],
        keyPoints: [
          "Stage III requires adjuvant chemotherapy",
          "Rectal cancer needs preoperative chemoradiation",
          "TME technique reduces local recurrence",
          "Metastatic disease requires multidisciplinary approach"
        ],
        textbookRefs: [
          { book: "NEET-PG Surgery Colorectal Cancer 2024", chapter: "Treatment", edition: "Latest" },
          { book: "NMC CBME - Colorectal Cancer 2023", chapter: "Latest", edition: "Latest" }
        ]
      },
      {
        layer: 5,
        slug: "colorectal-carcinoma-active-recall",
        title: "Colorectal Carcinoma - Active Recall",
        estimatedMinutes: 22,
        summary: "Clinical scenarios and treatment planning.",
        contentMd: "# Clinical Scenarios & Treatment Planning\n\n## Case 1: Stage II Right Colon Cancer\n**Scenario**: 62-year-old, anemia, right abdominal mass, colonoscopy shows 3 cm lesion. T3 N0 M0.\n\n**Treatment Plan**:\n- Surgery? (Right hemicolectomy)\n- Adjuvant chemotherapy? (Consider if high-risk: T4, inadequate LN resection, emergency)\n- Stage? (IIB)\n- Expected 5-year survival? (60-75%)\n- Follow-up? (CEA monitoring, colonoscopy surveillance)\n\n## Case 2: Stage III Rectal Cancer\n**Scenario**: 55-year-old, bleeding, rectal mass 8 cm from dentate line. Biopsy positive adenocarcinoma. T3 N2 M0.\n\n**Treatment Plan**:\n- Preoperative chemoradiation? (Yes; mandatory for Stage II-III)\n- Chemotherapy agents? (Capecitabine during RT)\n- Surgical approach? (Low anterior resection + TME, sphincter preservation possible)\n- Adjuvant chemotherapy? (Yes; FOLFOX for 6 months post-op)\n- Expected 5-year survival? (30-60%)\n\n## Case 3: Obstructed Left Colon Cancer\n**Scenario**: 70-year-old, acute obstruction, left abdominal pain, distension, narrow stools.\n\n**Management**:\n- Diagnosis? (Left colon cancer with obstruction)\n- Immediate? (Imaging - CT, decompression)\n- Surgical plan? (Hartmann's procedure: colostomy + rectal pouch; primary resection later)\n- Why not primary? (High mortality from anastomosis in obstruction)\n- Follow-up resection? (3-6 months after initial decompression and staging)\n\n## Rapid-Fire\n1. Right colon presentation? (Anemia, abdominal mass)\n2. Left colon presentation? (Obstruction, constipation)\n3. Rectum presentation? (Bleeding, tenesmus)\n4. Most common site? (Rectum 30-40%)\n5. Most common histology? (Adenocarcinoma 95%)\n6. TME stands for? (Total mesorectal excision)\n7. Preop chemorad for which? (Rectal cancer, Stage II-III)\n8. Sphincter preservation limit? (>5 cm from dentate line)\n9. APR stands for? (Abdominoperineal resection)\n10. Stage III treatment? (Surgery + adjuvant chemotherapy)",
        mnemonics: [
          { text: "RIGHT ANEMIA, LEFT OBSTRUCTION, RECTUM BLEEDING", explanation: "Site-specific presentations" },
          { text: "STAGE III = ADJUVANT CHEMO MANDATORY", explanation: "Treatment decision" }
        ],
        keyPoints: [
          "Site of cancer determines presentation and surgery",
          "Stage III always gets adjuvant chemotherapy",
          "Rectal cancer needs preoperative chemoradiation",
          "Obstructed cancers need staged surgery"
        ],
        textbookRefs: [
          { book: "Bailey & Love's MCQ Companion", chapter: "Colorectal Surgery", edition: "3rd" },
          { book: "AIIMS Delhi CRC Cases 2023-24", chapter: "Latest", edition: "Latest" }
        ]
      }
    ]
  }
];
