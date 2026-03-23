import type { TopicLessons } from "./content-loader";

export const medicinePart2Lessons: TopicLessons[] = [
  {
    topicCode: "IM-MOD-03-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "peptic-ulcer-layer-1-foundation",
        title: "GERD & Peptic Ulcer Disease - Foundation",
        estimatedMinutes: 20,
        summary: "Anatomical and physiological basis of acid reflux and peptic ulcer formation, including LES dysfunction, gastric acid secretion, and mucosal protection mechanisms.",
        contentMd: `# GERD & Peptic Ulcer Disease - Foundation

## Gastroesophageal Reflux Disease (GERD)

### Definition
Backward flow of gastric contents into esophagus causing symptoms or tissue damage.

### Anatomy of Lower Esophageal Sphincter (LES)
- High-pressure zone (normal >15 mmHg resting pressure)
- Intrinsic LES pressure + extrinsic compression from crural diaphragm
- **Dysfunction**: LES pressure <10 mmHg or inappropriate relaxations

### Pathophysiology
1. **LES Dysfunction**: Low pressure or increased transient LES relaxations
2. **Delayed Gastric Emptying**: Gastroparesis reduces stomach clearance
3. **Increased Intra-abdominal Pressure**: Obesity, pregnancy, tight clothing
4. **Impaired Esophageal Clearance**: Reduced peristalsis, decreased saliva

### Risk Factors
- Obesity, pregnancy, smoking, alcohol
- Medications: anticholinergics, CCB, NSAIDs
- Foods: spicy, fatty, citrus, chocolate, caffeine, alcohol

## Peptic Ulcer Disease (PUD)

### Definition
Breach in mucosa of stomach or duodenum extending into lamina propria or deeper.

### Types
1. **Gastric ulcer** (25%) - antrum or lesser curve
2. **Duodenal ulcer** (75%) - anterior wall of first portion

### Main Causes

**H. pylori Infection (60% of PUD)**
- Spiral gram-negative bacterium
- Colonizes gastric antrum
- Causes chronic inflammation → mucosal damage
- Associated with duodenal ulcers (>95%)
- Transmission: fecal-oral, person-to-person

**NSAIDs (25% of PUD)**
- COX inhibition → reduced prostaglandin synthesis
- Decreased bicarbonate and mucus production
- Impaired mucosal blood flow
- Risk increases with age, renal dysfunction, concomitant corticosteroids

**Other Causes**
- Stress (critical illness, severe trauma)
- Zollinger-Ellison Syndrome (gastrin-secreting tumor)
- Crohn's disease (gastric involvement)

### Gastric Acid Secretion

**Parietal Cell Secretion**
- H⁺/K⁺-ATPase pump (proton pump) - main mechanism
- Regulated by:
  - Histamine (H2 receptors) - most important
  - Gastrin (G cells)
  - Acetylcholine (muscarinic M3)

**Normal pH**: 1.5-3.5 in stomach fundus

### Mucosal Defense Mechanisms
1. Mucus layer (1-1.5 mm thick)
2. Bicarbonate secretion
3. Epithelial tight junctions
4. Mucosal blood flow
5. Growth factors (EGF)
6. Prostaglandins
7. Trefoil peptides`,
        mnemonics: [
          { text: "GERD Risk: FAT STOMACH", explanation: "Fatty foods, Anticholinergics, Tight clothes | Smoking, Tobacco, Obesity, Medications, Alcohol, Chocolate" },
          { text: "PUD Causes: NSH", explanation: "NSAIDs, Stress (rare), H. pylori" },
          { text: "Acid Secretion: HGA", explanation: "Histamine, Gastrin, Acetylcholine regulate parietal cells" }
        ],
        keyPoints: [
          "LES pressure normally >15 mmHg; <10 mmHg indicates dysfunction",
          "GERD results from supply-demand imbalance (↑reflux vs ↓clearance)",
          "H. pylori infection causes >90% of duodenal ulcers and 70% of gastric ulcers",
          "NSAIDs responsible for 25% of PUD; risk increases with age and renal dysfunction",
          "Mucosal defense: mucus, bicarbonate, blood flow, and prostaglandins protect against acid"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "286: Peptic Ulcer Disease", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "8: Gastrointestinal System", edition: "11th" }
        ]
      },
      {
        layer: 2,
        slug: "peptic-ulcer-layer-2-mechanism",
        title: "GERD & Peptic Ulcer Disease - Mechanism",
        estimatedMinutes: 30,
        summary: "Detailed pathophysiology of GERD development, H. pylori-mediated inflammation, NSAID-induced ulcerogenesis, and timeline of mucosal healing.",
        contentMd: `# GERD & Peptic Ulcer Disease - Mechanism

## GERD Pathophysiology in Detail

### 1. LES Dysfunction
**Transient LES Relaxations (TLESRs)**
- Most common mechanism (60% of reflux events)
- Inappropriate receptive relaxation triggered by gastric distension
- NOT associated with esophageal body peristalsis
- More common postprandially

**Hypotensive LES**
- Baseline pressure <10 mmHg
- Associated with smoking, fat intake, pregnancy, anticholinergics

### 2. Impaired Clearance
- **Primary peristalsis**: ↓ in 10-15% of GERD patients
- **Secondary peristalsis**: reduced in severe GERD
- **Salivary flow**: ↓ in elderly, Sjögren's syndrome
- **Saliva buffering**: bicarbonate neutralizes refluxed acid

### 3. Acid Pocket
- Layer of undiluted acid just below GE junction
- Occurs 5-10 cm above junction postprandially
- Contributes to reflux events

## H. pylori-Induced Ulcer Formation

### Bacterial Pathogenesis
1. **Colonization**
   - Motile spiral shape → penetrates mucus layer
   - Urease → produces ammonia, neutralizing local acid
   - Adheres to gastric epithelial cells via adhesins

2. **Acute Infection** (first days)
   - Polymorphonuclear infiltration
   - Temporary ↓ acid secretion (hypochlorhydria)

3. **Chronic Infection** (weeks-months)
   - Th1-mediated immune response
   - IL-1β, TNF-α production
   - Chronic atrophic gastritis

4. **Ulcer Formation**
   - Inflammatory infiltrate disrupts mucosa
   - ↓ Prostaglandin production
   - ↑ Acid and pepsin secretion (duodenal ulcers)
   - Duodenal metaplasia → H. pylori colonization in duodenum

### Why Duodenal > Gastric Ulcers in H. pylori Infection
- H. pylori antrum colonization → ↑ gastrin release → ↑ acid in duodenum
- Duodenal epithelium less resistant to acid than gastric (lacks protective mucus)
- Positive feedback: ↑ acid → ↓ gastrin → migration of H. pylori → restart cycle

## NSAID-Induced Ulcer Formation

### Mechanism
1. **COX Inhibition**
   - Decrease in PGE2 and prostacyclin production
   - Loss of mucosal protection

2. **Effects on Mucosal Defenses**
   - ↓ Mucus and bicarbonate secretion
   - ↓ Mucosal blood flow (prostacyclin)
   - ↓ Epithelial cell proliferation
   - ↑ Epithelial cell apoptosis

3. **Direct Injury**
   - NSAIDs accumulate in mucosal cells
   - Generate free radicals
   - Disrupt tight junctions

4. **Bacterial Factors**
   - H. pylori infection increases NSAID-induced ulcer risk (additive effect)

### High-Risk Scenarios for NSAID-PUD
- Age >65 years
- Concomitant corticosteroid or anticoagulant use
- History of PUD
- H. pylori infection
- High-dose NSAID therapy

## Timeline of Mucosal Healing

### Acute Phase (0-24 hours)
- Coagulation of exposed ulcer base
- Platelet aggregation
- Fibrin clot formation

### Granulation Phase (days 1-7)
- PMN infiltration
- Angiogenesis (new blood vessel formation)
- Macrophage infiltration
- Fibroblast proliferation
- Growth factor production (FGF, VEGF, EGF)

### Fibroplastic/Remodeling Phase (weeks 1-4)
- Collagen deposition
- Angiogenesis continues
- Epithelial regeneration
- Progressive scarring

### Complete Healing (weeks 4-8)
- Epithelial surface regenerated
- Scar tissue formation
- Return to normal mucosa (though with scar)`,
        mnemonics: [
          { text: "H. pylori Pathogenesis: ACU", explanation: "Adherence → Colonization → Ulcer formation" },
          { text: "NSAID Mechanism: COX → PG ↓ → Mucosa ↓", explanation: "COX inhibition → decreased prostaglandins → loss of mucosal protection" },
          { text: "GERD Pathophysiology: TLC", explanation: "Transient LES relaxations, delayed gastric clearance, impaired esophageal Clearance" },
          { text: "Mucosal Healing: ACF", explanation: "Acute coagulation → Granulation → Fibrosis" }
        ],
        keyPoints: [
          "GERD primarily due to transient LES relaxations (60% of events) rather than sustained hypotensive LES",
          "H. pylori colonizes antrum → ↑ gastrin → ↑ duodenal acid → duodenal ulcer formation",
          "NSAIDs cause ulcers by COX inhibition → ↓ prostaglandins → ↓ mucosal protection",
          "H. pylori + NSAIDs have synergistic effect on ulcer formation",
          "Mucosal healing: acute coagulation (24h) → granulation (1-7 days) → fibrosis (weeks)"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "286: Peptic Ulcer Disease", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "8: GI Manifestations", edition: "11th" }
        ]
      },
      {
        layer: 3,
        slug: "peptic-ulcer-layer-3-clinical",
        title: "GERD & Peptic Ulcer Disease - Clinical",
        estimatedMinutes: 35,
        summary: "Clinical presentation, diagnosis of GERD and PUD, H. pylori testing, management strategies in Indian context, and complication management.",
        contentMd: `# GERD & Peptic Ulcer Disease - Clinical Presentation & Management

## GERD Clinical Presentation

### Symptoms
- **Heartburn**: Retrosternal burning, typically postprandial
- **Regurgitation**: Acid or undigested food in mouth
- **Atypical symptoms**: Chest pain (cardiac), cough, laryngitis, hoarseness

### Severity Grading
- **Mild**: <1 day/week
- **Moderate**: >1 day/week but <daily
- **Severe**: Daily symptoms

### Complications
- Barrett's esophagus (long-standing GERD) → esophageal adenocarcinoma risk
- Esophageal stricture
- Peptic ulcer disease
- Esophageal adenocarcinoma (0.2-0.5% annual risk in Barrett's)

## Peptic Ulcer Disease - Clinical Presentation

### Symptoms
**Duodenal Ulcer**
- Epigastric pain (gnawing, burning) 2-3 hours after meals
- Night pain common (awakens patient)
- Relief with food or antacids
- Associated nausea, bloating

**Gastric Ulcer**
- Epigastric pain soon after eating
- Not as much relief with food
- Weight loss (anorexia)
- Higher risk of malignancy

### Physical Examination
- Usually normal
- Epigastric tenderness possible
- Signs of complications if present

## Diagnostic Approach

### GERD Diagnosis
- **Clinical diagnosis**: Based on symptoms
- **Upper endoscopy**: For alarm symptoms (dysphagia, vomiting, bleeding, weight loss)
- **24-hour pH monitoring**: If diagnosis unclear or atypical symptoms

### H. pylori Testing

**Non-Invasive Tests**
1. **Serological tests** (IgG antibodies)
   - Initial screening test
   - Remains positive after eradication
   - Cannot differentiate current vs past infection

2. **Urea breath test (UBT)**
   - Gold standard for detecting current infection
   - 95% sensitivity and specificity
   - Requires 4-week washout from PPIs, 2 weeks from antibiotics

3. **Stool antigen test**
   - Detects current infection (H. pylori antigens)
   - Useful for confirmation after treatment
   - 95% sensitivity and specificity

4. **Serum pepsinogen levels**
   - Pepsinogen I ↓ indicates corpus atrophy
   - Not widely used in India

**Invasive Tests (During Endoscopy)**
1. **Rapid urease test (RUT)**
   - Quick result (5-30 minutes)
   - Requires biopsy from antrum and body
   - 95% sensitivity, slightly lower specificity

2. **Histology + culture**
   - Gold standard for diagnosis and antibiotic susceptibility
   - Allows assessment of gastritis severity

## Management of GERD

### Lifestyle Modifications
1. **Dietary**: Avoid spicy, fatty, citrus, chocolate, caffeine
2. **Positional**: Elevate head of bed 15-20 degrees
3. **Other**: Smoking cessation, alcohol reduction, weight loss if obese

### Medical Management
**First-line: Proton Pump Inhibitors (PPIs)**
- Most effective acid suppressants
- Examples: Omeprazole 20 mg OD, pantoprazole 40 mg OD
- Suppress acid by 90%+
- Long-term safety: Monitor for B12, Mg, Fe deficiency

**Alternative: H2-Receptor Antagonists**
- Less effective than PPIs but acceptable for mild-moderate disease
- Ranitidine 150 mg BD (if available), famotidine 20 mg BD
- Used mainly for on-demand therapy

**Prokinetic Agents**
- Domperidone 10 mg TDS (most used in India)
- Metoclopramide less commonly used (tardive dyskinesia risk)
- Limited evidence for efficacy

## Management of Peptic Ulcer Disease

### H. pylori Eradication (If Positive)

**Triple Therapy** (7-10 days)
- PPI (omeprazole 20 mg BD or pantoprazole 40 mg BD)
- Clarithromycin 500 mg BD
- Amoxicillin 1000 mg BD (or metronidazole in penicillin allergy)
- Eradication rate: 85-90%

**Quadruple Therapy** (14 days, for resistance)
- PPI (omeprazole 20 mg BD)
- Bismuth compound 120 mg QID
- Tetracycline 500 mg QID
- Metronidazole 500 mg TDS
- Eradication rate: >95%

### NSAID-Induced Ulcer

**If Continuing NSAID Required:**
1. Switch to COX-2 selective inhibitor (celecoxib)
2. Add PPI (omeprazole 20 mg OD) for prophylaxis
3. Alternative: Use aspirin instead of NSAID if possible

**If Can Discontinue NSAID:**
1. Stop NSAID immediately
2. Start PPI (omeprazole 20 mg BD) for 4-8 weeks
3. Monitor symptoms

### Monitoring After Treatment
- Test for cure at 4 weeks post-eradication using UBT or stool antigen
- If test negative → eradication successful
- If test positive → check antibiotic susceptibility, consider quadruple therapy

## Complications of Peptic Ulcer

### 1. Perforation (5-10% of ulcers)
- Sudden severe epigastric pain radiating to back
- Acute peritonitis (rigid abdomen, guarding)
- Pneumoperitoneum on imaging
- **Management**: Emergency surgery (Graham patch or primary closure)

### 2. Hemorrhage (20-30% of ulcers)
- Hematemesis or melena
- Signs of shock if severe
- **Management**: Endoscopic hemostasis, transfusion, surgery if failed endoscopy

### 3. Obstruction (4% of ulcers)
- Chronic fibrosis/stenosis of pylorus or duodenum
- Recurrent vomiting, early satiety
- **Management**: Endoscopic dilation, surgery if failed

### 4. Penetration
- Extension into pancreas
- Severe pain, elevated amylase
- Risk of pancreatitis`,
        mnemonics: [
          { text: "H. pylori Eradication: PCAm-BBM", explanation: "PPI + Clarithromycin + Amoxicillin (triple) or Add Bismuth (quadruple)" },
          { text: "GERD vs GORD: Same disease", explanation: "Gastroesophageal Reflux Disease, terminology varies by region" },
          { text: "PUD Complications: POH", explanation: "Perforation, Obstruction, Hemorrhage" },
          { text: "H. pylori Tests: USB-HRC", explanation: "Urea breath test, Serology, Biopsy | Histology, RUT, Culture" }
        ],
        keyPoints: [
          "GERD diagnosis primarily clinical; endoscopy for alarm symptoms (dysphagia, bleeding, weight loss)",
          "H. pylori eradication is gold standard for H. pylori-associated PUD (triple or quadruple therapy)",
          "NSAIDs should be stopped if possible for NSAID-induced ulcer; if continued, add PPI prophylaxis",
          "Test for cure 4 weeks post-eradication using UBT or stool antigen (not serology)",
          "Complications of PUD: perforation (surgical emergency), hemorrhage (endoscopic therapy), obstruction (dilation or surgery)"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "286: Peptic Ulcer Disease", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "8: GI Disease Management", edition: "11th" },
          { book: "American College of Gastroenterology Guidelines", chapter: "GERD and PUD Management", edition: "2021" }
        ]
      },
      {
        layer: 4,
        slug: "peptic-ulcer-layer-4-exam",
        title: "GERD & Peptic Ulcer Disease - Exam Prep",
        estimatedMinutes: 25,
        summary: "Comprehensive exam-focused review of GERD and PUD, differentials, NEET-PG pattern questions, high-yield facts, and clinical pearls.",
        contentMd: `# GERD & Peptic Ulcer Disease - Exam Preparation

## Differential Diagnosis of Epigastric/Retrosternal Pain

### GI Causes:
1. **GERD** - postprandial, relieved by antacids
2. **PUD** - epigastric, nocturnal, relieved by food/antacids
3. **Gastroparesis** - early satiety, bloating, delayed symptoms
4. **Pancreatitis** - severe pain radiating to back, elevated amylase
5. **Cholecystitis** - RUQ pain, fatty food trigger
6. **Esophageal spasm** - substernal, dysphagia

### Cardiac Causes:
1. **Angina/MI** - exertional, radiation to arm/jaw
2. **Pericarditis** - pleuritic, positional

### Other:
- GERD masquerades as cardiac chest pain in 25% of cases

## High-Yield Facts for Exams

### GERD:
- **LES pressure**: Normal >15 mmHg, dysfunction <10 mmHg
- **Most common mechanism**: Transient LES relaxations (60% of reflux)
- **Treatment**: Lifestyle first, then PPIs (most effective)
- **Complications**: Barrett's esophagus (1-2% develop annually), adenocarcinoma risk

### H. pylori Infection:
- **Prevalence in India**: 40-50%
- **Transmission**: Fecal-oral, person-to-person
- **Associated ulcer types**: Duodenal (95%), gastric (70%)
- **Testing**: Serology (screening) → UBT or stool antigen (confirmation)
- **Eradication rates**: Triple 85-90%, Quadruple >95%

### NSAID-Induced PUD:
- **Risk factors**: Age >65, corticosteroids, anticoagulants, renal dysfunction
- **Prophylaxis**: If NSAID must continue, use PPI (omeprazole 20 mg OD)
- **Management**: Discontinue if possible, start PPI

### Acid Suppression:
- **PPIs**: Omeprazole (most common), pantoprazole, lansoprazole
  - Suppress 90%+ of acid
  - Most effective for GERD and peptic ulcers
  - Long-term: Monitor B12, Mg, Fe, Ca
- **H2-blockers**: Ranitidine (discontinued), Famotidine
  - Suppress 60-70% of acid
  - Faster onset (30-60 minutes) vs PPIs (1-2 hours)

### H. pylori Eradication Regimens:

**Triple Therapy (7-10 days):**
- PPI (omeprazole 20 mg BD) + Clarithromycin 500 mg BD + Amoxicillin 1000 mg BD
- Eradication: 85-90%
- First-line in most of India

**Quadruple Therapy (14 days):**
- PPI + Bismuth 120 mg QID + Tetracycline 500 mg QID + Metronidazole 500 mg TDS
- Eradication: >95%
- For clarithromycin resistance

**Sequential Therapy (10 days):**
- PPI + Amoxicillin 5 days, then PPI + Clarithromycin + Tinidazole 5 days
- Eradication: 95%

### Test for Cure:
- **Timing**: 4 weeks after eradication therapy completion
- **Best test**: UBT (99% sensitivity/specificity) or stool antigen
- **NOT serology**: Remains positive for years after eradication

## Common Exam Questions

**Q: A 45-year-old patient has epigastric pain 2-3 hours after meals. H. pylori positive on serology. What is next?**
A: Confirm current infection with UBT or stool antigen. If positive, initiate triple therapy (PPI + clarithromycin + amoxicillin).

**Q: A 60-year-old on chronic ibuprofen for arthritis develops peptic ulcer. Management?**
A: Stop ibuprofen if possible. Start PPI (omeprazole 20 mg BD). If must continue NSAID, switch to celecoxib + PPI.

**Q: After H. pylori eradication therapy, patient still has symptoms. What to do?**
A: Perform test for cure (UBT or stool antigen). If positive, check resistance and use quadruple therapy. If negative, consider other diagnoses (GERD, functional dyspepsia).

**Q: Patient with GERD on omeprazole for 5 years now has B12 deficiency. Why?**
A: Long-term PPI use reduces gastric acid → impaired B12 absorption. Recommend B12 supplementation or testing.`,
        mnemonics: [
          { text: "GERD vs PUD: Time & Food", explanation: "GERD = postprandial (after eating), PUD = nocturnal or 2-3h after meals (food relief)" },
          { text: "H. pylori Triple: PCA", explanation: "PPI + Clarithromycin + Amoxicillin (7-10 days, 85-90% eradication)" },
          { text: "H. pylori Quad: PBS-TM", explanation: "PPI + Bismuth + Tetracycline + MetroNidazole (14 days, >95% eradication)" },
          { text: "Test for Cure: 4 weeks post-eradication, UBT or stool, NOT serology", explanation: "Serology remains positive for years" },
          { text: "NSAID-PUD Risk: Age, Corticosteroids, Anticoagulants, Renal dysfunction", explanation: "ACAR helps remember risk factors" },
          { text: "PPI Long-term: B12, Mg, Fe, Ca deficiency risk", explanation: "Monitor these minerals in long-term PPI users" }
        ],
        keyPoints: [
          "GERD primarily due to transient LES relaxations; diagnosed clinically; endoscopy for alarm symptoms",
          "H. pylori causes 60% of PUD; diagnosed by UBT, stool antigen, or histology; serology only for screening",
          "Triple therapy (PPI + clarithromycin + amoxicillin) is first-line for H. pylori eradication in India",
          "NSAIDs cause 25% of PUD; stop if possible, or add PPI prophylaxis if must continue",
          "Test for cure 4 weeks post-eradication using UBT or stool antigen; serology not useful (remains positive)",
          "Long-term PPI use risk: B12, magnesium, iron, calcium deficiency; monitor accordingly"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "286: Peptic Ulcer Disease", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "8: GI System", edition: "11th" }
        ]
      },
      {
        layer: 5,
        slug: "peptic-ulcer-layer-5-active-recall",
        title: "GERD & Peptic Ulcer Disease - Active Recall",
        estimatedMinutes: 20,
        summary: "Flashcard-based active recall for rapid learning and retention of critical GERD and PUD concepts.",
        contentMd: `# GERD & Peptic Ulcer Disease - Active Recall Flashcards

**Q1: What is the normal LES pressure and what does it indicate dysfunction?**
A: Normal LES pressure >15 mmHg. Dysfunction defined as <10 mmHg or inappropriate transient relaxations.

**Q2: What is the most common mechanism of GERD?**
A: Transient LES relaxations (TLESRs) account for 60% of reflux events, triggered by gastric distension.

**Q3: Name the main causes of peptic ulcer disease and their prevalence.**
A: H. pylori 60%, NSAIDs 25%, stress <5%, Zollinger-Ellison <1%.

**Q4: How does H. pylori colonize the stomach and cause ulcers?**
A: Spiral shape + urease (neutralizes acid) allows colonization of antrum → chronic inflammation → ↑ gastrin → ↑ duodenal acid → duodenal ulcer.

**Q5: Why do NSAIDs cause peptic ulcers?**
A: NSAIDs inhibit COX → ↓ prostaglandins → ↓ mucus, bicarbonate, mucosal blood flow → loss of mucosal protection.

**Q6: What are the mucosal defense mechanisms against peptic ulcer?**
A: Mucus layer (1-1.5 mm), bicarbonate secretion, tight junctions, mucosal blood flow, growth factors (EGF), and prostaglandins.

**Q7: How long does myocardial healing take post-MI and what are the phases?**
A: Acute coagulation (0-24h) → Granulation (1-7 days) → Fibroplastic/Remodeling (weeks 1-4) → Complete healing (weeks 4-8).

**Q8: What is the "acid pocket" and its clinical significance?**
A: Undiluted acid layer just below GE junction that forms postprandially; contributes to reflux events in GERD.

**Q9: What are the difference between duodenal and gastric ulcers in presentation?**
A: Duodenal: pain 2-3h after eating, nocturnal (relief with food) | Gastric: pain after eating (no relief), higher cancer risk.

**Q10: When does H. pylori testing need washout periods?**
A: UBT: 4-week washout from PPIs, 2 weeks from antibiotics | Stool antigen: 2-week washout from PPIs.

**Q11: What is the test for cure after H. pylori eradication and when should it be done?**
A: UBT or stool antigen at 4 weeks post-eradication completion. Serology remains positive for years and is NOT useful.

**Q12: What are the components of triple therapy for H. pylori?**
A: PPI (omeprazole 20 mg BD) + Clarithromycin 500 mg BD + Amoxicillin 1000 mg BD for 7-10 days. Eradication rate 85-90%.

**Q13: What is quadruple therapy and when is it used?**
A: PPI + Bismuth 120 mg QID + Tetracycline 500 mg QID + Metronidazole 500 mg TDS for 14 days. Used for clarithromycin resistance, >95% eradication.

**Q14: What are the risk factors for NSAID-induced peptic ulcer?**
A: Age >65, concomitant corticosteroids, anticoagulants, history of PUD, H. pylori infection, high-dose NSAIDs, renal dysfunction.

**Q15: How should you manage NSAID-induced peptic ulcer if NSAID must be continued?**
A: Use PPI prophylaxis (omeprazole 20 mg OD) or switch to COX-2 selective inhibitor (celecoxib) + PPI.

**Q16: What are the long-term complications of chronic PPI use?**
A: B12 deficiency (impaired absorption), hypomagnesemia, hypocalcemia, osteoporosis, increased Clostridium difficile risk.

**Q17: What are the complications of peptic ulcer disease?**
A: Perforation (5-10%), hemorrhage (20-30%), obstruction (4%), penetration into pancreas.

**Q18: How does Barrett's esophagus develop and what is the malignancy risk?**
A: Chronic GERD → metaplasia of squamous to columnar epithelium → dysplasia → adenocarcinoma. Annual risk 0.2-0.5% for adenocarcinoma.

**Q19: What are the alarm symptoms in GERD that warrant endoscopy?**
A: Dysphagia, odynophagia, vomiting, GI bleeding, anemia, weight loss, family history of gastric cancer.

**Q20: What is Zollinger-Ellison Syndrome and how does it present?**
A: Gastrin-secreting neuroendocrine tumor causing severe refractory PUD and chronic diarrhea. Diagnosis: elevated fasting gastrin (>1000) with low pH (<2).`,
        mnemonics: [
          { text: "GERD Pathophysiology: TLC", explanation: "Transient LES relaxations, delayed gastric clearance, impaired esophageal Clearance" },
          { text: "H. pylori Causes: 60-25", explanation: "H. pylori 60% of PUD, NSAIDs 25%, stress <5%, Zollinger-Ellison <1%" },
          { text: "Triple Therapy: PCA", explanation: "PPI + Clarithromycin + Amoxicillin (7-10 days, 85-90% eradication)" },
          { text: "Quad Therapy: PBTM", explanation: "PPI + Bismuth + Tetracycline + Metronidazole (14 days, >95% eradication)" },
          { text: "Test for Cure: 4 weeks, UBT/Stool, NOT Serology", explanation: "Serology remains positive for years after eradication" },
          { text: "PUD Complications: POH", explanation: "Perforation (5-10%), Obstruction (4%), Hemorrhage (20-30%)" },
          { text: "NSAID Risk Factors: ACAR", explanation: "Age >65, Corticosteroids, Anticoagulants, Renal dysfunction" },
          { text: "PPI Long-term Risks: BMF-CD", explanation: "B12 deficiency, Magnesium, Iron, Fractures, Clostridium difficile" },
          { text: "Duodenal vs Gastric Ulcer: D=delay, G=growth", explanation: "Duodenal pain delayed 2-3h (relief with food), Gastric soon after eating (growth=cancer risk)" },
          { text: "Mucosal Defense: MBFTPGP", explanation: "Mucus, Bicarbonate, tight junctions, blood flow, Trefoil, Prostaglandins, Growth factors" }
        ],
        keyPoints: [
          "GERD: LES pressure normal >15 mmHg; dysfunction <10 mmHg or transient relaxations",
          "H. pylori: 60% of PUD; antrum colonization → ↑ gastrin → ↑ duodenal acid → duodenal ulcer (95% of H. pylori-associated PUD)",
          "NSAIDs: 25% of PUD; mechanism is COX inhibition → ↓ prostaglandins → ↓ mucosal protection",
          "Triple therapy: PPI + clarithromycin + amoxicillin (7-10 days, 85-90% eradication rate)",
          "Test for cure: 4 weeks post-eradication using UBT or stool antigen; serology NOT useful (remains positive years after eradication)",
          "PUD complications: Perforation (5-10%, surgical emergency), hemorrhage (20-30%), obstruction (4%)",
          "Long-term PPI risks: B12, Mg, Fe, Ca deficiency; monitor in chronic users",
          "Alarm symptoms in GERD: dysphagia, bleeding, weight loss, anemia → warrant endoscopy"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "286: Peptic Ulcer Disease", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "8: GI System", edition: "11th" }
        ]
      }
    ]
  }
];
