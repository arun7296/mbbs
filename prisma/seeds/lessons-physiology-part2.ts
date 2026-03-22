// 5-layer lessons for Physiology Part 2: Respiratory (PY-MOD-04), Renal (PY-MOD-05), GI (PY-MOD-06)
import type { TopicLessons } from "./content-loader";

export const physiologyPart2Lessons: TopicLessons[] = [
  // ═══════════════════════════════════════════════════════════════
  // MODULE 04: RESPIRATORY PHYSIOLOGY
  // ═══════════════════════════════════════════════════════════════

  // ─── Topic 1: Mechanics of Breathing ──────────────────────────
  {
    topicCode: "PY-MOD-04-TOP-01",
    layers: [
      { layer: 1, slug: "mechanics-breathing-foundation", title: "Mechanics of Breathing - Foundation", estimatedMinutes: 20,
        summary: "Breathing involves active inspiration and passive expiration. The diaphragm is the principal muscle of respiration. Lung compliance and surfactant are critical for normal ventilation.",
        contentMd: `# Mechanics of Breathing

## Inspiration (Active Process)
- **Diaphragm** (C3, C4, C5 - phrenic nerve): Principal muscle, accounts for 75% of tidal volume
- **External intercostals**: Elevate ribs (bucket-handle and pump-handle movements)
- Accessory muscles (used in forced/laboured breathing): Sternocleidomastoid, scalenes, pectoralis minor

## Expiration (Passive at Rest)
- Elastic recoil of lungs and chest wall
- **Forced expiration**: Internal intercostals, abdominal muscles (rectus abdominis, obliques)

## Intrapleural Pressure
- Normally **-5 cmH2O** at rest (subatmospheric)
- Becomes **-8 cmH2O** during inspiration
- Keeps lungs expanded against chest wall

## Lung Compliance
- **Definition**: Change in volume per unit change in pressure (delta V / delta P)
- Normal value: **200 mL/cmH2O**
- **Increased** in emphysema (loss of elastic tissue)
- **Decreased** in fibrosis, pulmonary edema, ARDS

## Surfactant
- Produced by **Type II pneumocytes** (starting ~24 weeks gestation)
- Composition: **Dipalmitoyl phosphatidylcholine (DPPC)** is the major component
- Functions: Reduces surface tension, prevents alveolar collapse, increases compliance
- Deficiency causes **Neonatal Respiratory Distress Syndrome (NRDS)**

## Work of Breathing
Three components:
1. **Elastic work** (compliance work): Expanding lungs against elastic recoil (~65%)
2. **Airway resistance work**: Overcoming airflow resistance (~28%)
3. **Tissue resistance work**: Viscous drag of tissues (~7%)`,
        mnemonics: [
          { text: "C3, 4, 5 keeps the diaphragm alive", explanation: "Phrenic nerve roots C3, C4, C5 supply the diaphragm - the principal muscle of inspiration" },
          { text: "DPPC Delivers Protection, Prevents Collapse", explanation: "Dipalmitoyl phosphatidylcholine is the main surfactant component that prevents alveolar collapse" }
        ],
        keyPoints: ["Diaphragm (phrenic nerve C3,4,5) is principal inspiratory muscle - 75% of tidal volume", "Normal intrapleural pressure is -5 cmH2O at rest", "Surfactant from Type II pneumocytes reduces surface tension", "Compliance increased in emphysema, decreased in fibrosis", "Expiration is passive at rest, active only during forced breathing"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 38 - Pulmonary Ventilation", edition: "14th" }] },
      { layer: 2, slug: "mechanics-breathing-mechanism", title: "Mechanics of Breathing - Mechanism", estimatedMinutes: 30,
        summary: "Detailed mechanisms of pressure changes during breathing, the pressure-volume relationship, LaPlace's law in alveoli, and the roles of elastic and airway resistance.",
        contentMd: `# Mechanics of Breathing - Detailed Mechanisms

## Pressure Changes During Breathing Cycle

| Phase | Intrapleural Pressure | Alveolar Pressure | Airflow |
|-------|----------------------|-------------------|---------|
| Rest | -5 cmH2O | 0 (atmospheric) | None |
| Inspiration | -8 cmH2O | -1 cmH2O | Inward |
| End-inspiration | -8 cmH2O | 0 | None |
| Expiration | -5 cmH2O | +1 cmH2O | Outward |

## Boyle's Law in Breathing
- P1V1 = P2V2
- Diaphragm contracts and descends --> thoracic volume increases --> intrapleural pressure decreases --> lungs expand --> alveolar pressure drops below atmospheric --> air flows in

## LaPlace's Law
- **P = 2T/r** (P = collapsing pressure, T = surface tension, r = radius)
- Smaller alveoli have HIGHER collapsing pressure
- Without surfactant, small alveoli would collapse into large ones
- Surfactant reduces surface tension MORE in smaller alveoli (higher concentration per unit area), equalizing pressures

## Compliance Curve (Pressure-Volume Loop)
- Inspiration and expiration follow DIFFERENT curves = **hysteresis**
- Hysteresis is due to surfactant and tissue viscosity
- Static compliance: measured during breath-holding (no airflow)
- Dynamic compliance: measured during normal breathing (includes airway resistance)

## Airway Resistance
- **Poiseuille's Law**: R = 8nL / pi*r^4
- Resistance inversely proportional to r^4 (radius to 4th power)
- Medium-sized bronchi (4th-8th generation) contribute MOST resistance
- Factors increasing resistance: Bronchospasm, mucus, edema, forced expiration (dynamic compression)

## Elastic Properties
- Lung elasticity due to: (1) Elastic and collagen fibers, (2) Surface tension of alveolar fluid
- Chest wall has outward recoil, lungs have inward recoil
- At **FRC**, inward lung recoil = outward chest wall recoil (equilibrium)

## Pneumothorax
- Air enters pleural space --> loss of negative intrapleural pressure --> lung collapses
- Chest wall springs outward, lung recoils inward`,
        mnemonics: [
          { text: "LAMP for factors affecting airway resistance", explanation: "L-Length of airway, A-Airflow type (turbulent vs laminar), M-Mucus secretion, P-Pressure (transmural) and radius" }
        ],
        keyPoints: ["Boyle's law explains pressure-volume changes in breathing", "LaPlace's law (P=2T/r): surfactant critical for smaller alveoli", "Hysteresis in P-V loop due to surfactant", "Medium bronchi (4th-8th generation) have maximum resistance", "At FRC, lung recoil inward = chest wall recoil outward"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 38 - Pulmonary Ventilation", edition: "14th" }, { book: "Ganong", chapter: "Ch 34 - Mechanics of Breathing", edition: "26th" }] },
      { layer: 3, slug: "mechanics-breathing-clinical", title: "Mechanics of Breathing - Clinical", estimatedMinutes: 20,
        summary: "Clinical conditions related to abnormal breathing mechanics including NRDS, COPD, pneumothorax, and restrictive lung diseases.",
        contentMd: `# Clinical Applications

## Neonatal Respiratory Distress Syndrome (NRDS)
- Premature infants (before 24-28 weeks) lack surfactant
- **Ground-glass appearance** on chest X-ray
- Treatment: Exogenous surfactant therapy, antenatal corticosteroids (betamethasone) to mother
- **Lecithin/Sphingomyelin (L/S) ratio > 2** indicates lung maturity

## COPD: Emphysema vs Chronic Bronchitis

| Feature | Emphysema (Pink Puffer) | Chronic Bronchitis (Blue Bloater) |
|---------|------------------------|----------------------------------|
| Compliance | Increased | Normal/decreased |
| Elastic recoil | Decreased | Normal |
| Airway resistance | Normal early | Increased |
| Barrel chest | Present | Less common |
| Cyanosis | Late | Early |

## Pneumothorax
- **Tension pneumothorax**: Medical emergency, mediastinal shift to opposite side
- Treatment: Needle decompression at 2nd intercostal space, mid-clavicular line
- Followed by intercostal drainage (ICD) at 5th ICS, mid-axillary line

## Restrictive vs Obstructive Diseases

| Parameter | Restrictive | Obstructive |
|-----------|------------|-------------|
| FEV1 | Decreased | Decreased |
| FVC | Decreased | Normal/decreased |
| FEV1/FVC | Normal or increased (>0.8) | Decreased (<0.7) |
| Examples | Fibrosis, kyphoscoliosis | Asthma, COPD |

## Flail Chest
- Fracture of 3+ consecutive ribs at 2 points each
- **Paradoxical breathing**: Flail segment moves IN during inspiration
- Splinting with positive pressure ventilation

> **Clinical Pearl**: In Indian emergency settings, always check for tension pneumothorax in trauma patients with respiratory distress and tracheal deviation.`,
        mnemonics: [
          { text: "Pink Puffer vs Blue Bloater", explanation: "Emphysema = Pink Puffer (hyperventilates, maintains O2, thin, pursed lip breathing). Chronic Bronchitis = Blue Bloater (cyanosed, edematous, productive cough)" }
        ],
        keyPoints: ["L/S ratio > 2 = lung maturity", "Tension pneumothorax: needle at 2nd ICS mid-clavicular line", "FEV1/FVC < 0.7 = obstructive; normal/high = restrictive", "Emphysema = increased compliance, decreased elastic recoil", "Antenatal betamethasone accelerates fetal lung maturity"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 38, 42", edition: "14th" }, { book: "Robbins Pathologic Basis of Disease", chapter: "Ch 15 - Lung", edition: "10th" }] },
      { layer: 4, slug: "mechanics-breathing-exam", title: "Mechanics of Breathing - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield exam facts on breathing mechanics for NEXT and NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners
- Principal muscle of respiration: **Diaphragm (phrenic nerve C3,4,5)**
- Normal intrapleural pressure at rest: **-5 cmH2O**
- Surfactant produced by: **Type II pneumocytes (from 24 weeks)**
- Main surfactant component: **DPPC (Dipalmitoyl phosphatidylcholine)**
- Compliance increased in: **Emphysema**
- Compliance decreased in: **Fibrosis, ARDS, pulmonary edema**
- At FRC: **Lung recoil inward = Chest wall recoil outward**
- Maximum airway resistance site: **Medium bronchi (4th-8th generation)**
- LaPlace law: **P = 2T/r** (surfactant reduces T more in small alveoli)
- L/S ratio for lung maturity: **> 2**
- Expiration at rest is: **Passive** (elastic recoil)
- Forced expiration muscles: **Internal intercostals + abdominals**

## Comparison Table: Compliance Changes

| Condition | Compliance | Mechanism |
|-----------|-----------|-----------|
| Emphysema | Increased | Loss of elastic tissue |
| Fibrosis | Decreased | Collagen deposition |
| Pulmonary edema | Decreased | Fluid fills alveoli |
| ARDS | Decreased | Surfactant damage |
| Old age | Increased | Loss of elastic recoil |

## Previous Year Themes
- NRDS and surfactant deficiency
- Compliance changes in disease
- Pressure changes during breathing cycle
- Pneumothorax management`,
        mnemonics: [
          { text: "FAPE decreases compliance", explanation: "Fibrosis, ARDS, Pulmonary edema, Effusion - all decrease lung compliance" }
        ],
        keyPoints: ["Diaphragm = 75% of tidal volume", "Type II pneumocytes produce surfactant from 24 weeks", "Medium bronchi = max airway resistance", "L/S ratio > 2 = lung maturity"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 38", edition: "14th" }] },
      { layer: 5, slug: "mechanics-breathing-recall", title: "Mechanics of Breathing - Active Recall", estimatedMinutes: 10,
        summary: "Self-test flashcards for mechanics of breathing.",
        contentMd: `# Active Recall

**Q1:** What is the principal muscle of respiration and its nerve supply?
> Diaphragm, supplied by phrenic nerve (C3, C4, C5)

**Q2:** What is normal intrapleural pressure at rest?
> -5 cmH2O (subatmospheric)

**Q3:** Which cells produce surfactant and what is the main component?
> Type II pneumocytes; Dipalmitoyl phosphatidylcholine (DPPC)

**Q4:** What happens to compliance in emphysema vs fibrosis?
> Increased in emphysema (loss of elastic tissue), Decreased in fibrosis (collagen deposition)

**Q5:** State LaPlace's law and its significance.
> P = 2T/r; Smaller alveoli have higher collapsing pressure; surfactant prevents collapse by reducing surface tension more in smaller alveoli

**Q6:** At what lung volume do lung and chest wall recoil forces balance?
> Functional Residual Capacity (FRC)

**Q7:** Which generation of bronchi has maximum airway resistance?
> Medium bronchi (4th-8th generation)

**Q8:** What is the L/S ratio indicating fetal lung maturity?
> Greater than 2

**Q9:** How does airway resistance relate to radius?
> Inversely proportional to r^4 (Poiseuille's law)

**Q10:** What causes hysteresis in the pressure-volume curve?
> Surfactant properties and tissue viscosity cause inspiration and expiration to follow different curves`,
        mnemonics: [],
        keyPoints: ["10 recall questions covering all key concepts of breathing mechanics"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 38", edition: "14th" }] },
    ],
  },

  // ─── Topic 2: Lung Volumes & Capacities ───────────────────────
  {
    topicCode: "PY-MOD-04-TOP-02",
    layers: [
      { layer: 1, slug: "lung-volumes-foundation", title: "Lung Volumes & Capacities - Foundation", estimatedMinutes: 20,
        summary: "Lung volumes are non-overlapping subdivisions, while capacities are combinations of two or more volumes. Spirometry measures most but not all lung volumes.",
        contentMd: `# Lung Volumes & Capacities

## Four Primary Volumes
| Volume | Definition | Normal Value (mL) |
|--------|-----------|-------------------|
| Tidal Volume (TV) | Air breathed in/out during normal breathing | 500 |
| Inspiratory Reserve Volume (IRV) | Extra air inspired after normal inspiration | 3000 |
| Expiratory Reserve Volume (ERV) | Extra air expired after normal expiration | 1100 |
| Residual Volume (RV) | Air remaining after maximal expiration | 1200 |

## Four Capacities (Combinations)
| Capacity | Formula | Normal Value (mL) |
|----------|---------|-------------------|
| Inspiratory Capacity (IC) | TV + IRV | 3500 |
| Functional Residual Capacity (FRC) | ERV + RV | 2300 |
| Vital Capacity (VC) | TV + IRV + ERV | 4600 |
| Total Lung Capacity (TLC) | TV + IRV + ERV + RV | 5800 |

## Key Points
- **RV** cannot be measured by spirometry (requires body plethysmography or helium dilution)
- **FRC** and **TLC** also cannot be measured by spirometry (they include RV)
- Minute ventilation = TV x Respiratory Rate = 500 x 12 = **6000 mL/min**
- Alveolar ventilation = (TV - Dead space) x RR = (500-150) x 12 = **4200 mL/min**
- Anatomical dead space = **150 mL** (conducting airways)`,
        mnemonics: [
          { text: "4 volumes: TIRE", explanation: "Tidal volume, Inspiratory Reserve Volume, Residual Volume, Expiratory Reserve Volume" },
          { text: "Cannot spirometry: FRC, RV, TLC (FRozen TooL Cannot be measured)", explanation: "FRC, RV, and TLC all contain Residual Volume which cannot be measured by spirometry" }
        ],
        keyPoints: ["4 volumes (TIRE) and 4 capacities", "RV, FRC, TLC cannot be measured by spirometry", "Normal TV = 500 mL, VC = 4600 mL, TLC = 5800 mL", "Anatomical dead space = 150 mL", "Alveolar ventilation = 4200 mL/min"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 38 - Pulmonary Ventilation", edition: "14th" }] },
      { layer: 2, slug: "lung-volumes-mechanism", title: "Lung Volumes & Capacities - Mechanism", estimatedMinutes: 30,
        summary: "Spirometry technique, flow-volume loops, FEV1/FVC ratio, body plethysmography, and physiological dead space.",
        contentMd: `# Spirometry & Measurements

## Spirometry
- Measures volumes and capacities EXCEPT those containing RV
- **Forced Vital Capacity (FVC)**: Maximal expiration after maximal inspiration (forced)
- **FEV1**: Volume expired in first second of forced expiration
- **FEV1/FVC ratio**: Normal = **0.8 (80%)**

## FEV1/FVC in Disease

| Condition | FEV1 | FVC | FEV1/FVC |
|-----------|------|-----|----------|
| Normal | Normal | Normal | 0.8 |
| Obstructive (Asthma, COPD) | Decreased more | Normal or slightly decreased | < 0.7 (decreased) |
| Restrictive (Fibrosis) | Decreased | Decreased more | > 0.8 (normal/increased) |

## Flow-Volume Loops
- Normal: Effort-dependent peak flow followed by effort-independent descending limb
- Obstructive: Scooped-out expiratory curve, reduced peak flow
- Restrictive: Normal shape but smaller (reduced volumes)
- Upper airway obstruction: Flattened inspiratory or expiratory limb

## Dead Space
### Anatomical Dead Space (150 mL)
- Conducting airways (nose to terminal bronchioles)
- Measured by **Fowler's method** (N2 washout)

### Physiological Dead Space
- Anatomical dead space + Alveolar dead space
- Measured by **Bohr's method** (CO2 based)
- Formula: VD/VT = (PaCO2 - PeCO2) / PaCO2
- In healthy lungs: Physiological dead space approximately equals Anatomical dead space
- Increases in pulmonary embolism (ventilated but not perfused alveoli)

## Measurement of RV and FRC
### Helium Dilution Method
- Closed circuit, known volume and concentration of helium
- FRC calculated from dilution equation: C1V1 = C2(V1 + FRC)

### Body Plethysmography (Gold Standard)
- Uses Boyle's law (P1V1 = P2V2)
- More accurate, includes trapped gas

## Closing Volume
- Volume at which small airways begin to close during expiration
- Measured by single-breath N2 test (Phase IV)
- Increased in elderly and smokers
- When closing volume exceeds FRC --> airway closure during tidal breathing --> V/Q mismatch`,
        mnemonics: [
          { text: "FOB for dead space methods", explanation: "Fowler's = Anatomical dead space (N2 washout), bOhr's = physiological dead space (CO2 method), Body plethysmography = FRC/RV" }
        ],
        keyPoints: ["FEV1/FVC < 0.7 = obstructive; normal/high = restrictive", "Fowler's method = anatomical dead space; Bohr's = physiological", "Body plethysmography is gold standard for FRC/RV measurement", "Closing volume increases with age and smoking", "Physiological dead space increases in pulmonary embolism"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 38", edition: "14th" }, { book: "Ganong", chapter: "Ch 34", edition: "26th" }] },
      { layer: 3, slug: "lung-volumes-clinical", title: "Lung Volumes & Capacities - Clinical", estimatedMinutes: 20,
        summary: "Clinical application of spirometry in diagnosing obstructive and restrictive lung diseases, and PFT interpretation.",
        contentMd: `# Clinical Applications

## Pulmonary Function Test (PFT) Interpretation

### Step-by-Step Approach
1. Look at **FEV1/FVC** first
2. If < 0.7 --> Obstructive pattern
3. If normal/increased --> Look at FVC/TLC
4. If FVC/TLC decreased --> Restrictive pattern
5. If both obstructive AND restrictive features --> Mixed pattern

## Obstructive Diseases

| Disease | Key PFT Finding |
|---------|----------------|
| Asthma | FEV1/FVC decreased, **reversible** with bronchodilator (>12% and >200mL improvement) |
| COPD | FEV1/FVC decreased, **not fully reversible** |
| Bronchiectasis | Obstructive pattern with increased RV |

## Restrictive Diseases

| Disease | Key PFT Finding |
|---------|----------------|
| Pulmonary fibrosis | All volumes decreased, FEV1/FVC normal/increased |
| Kyphoscoliosis | Extrapulmonary restriction |
| Obesity | Decreased ERV, FRC |
| Neuromuscular (GBS) | Decreased VC (monitor for ventilator need) |

## Bronchodilator Reversibility Test
- Give salbutamol 400 mcg via MDI + spacer
- Repeat spirometry after 15-20 minutes
- **Positive**: FEV1 improves by >12% AND >200 mL
- Positive test suggests asthma rather than COPD

## COPD GOLD Classification (by FEV1)
- GOLD 1 (Mild): FEV1 >= 80% predicted
- GOLD 2 (Moderate): 50-79%
- GOLD 3 (Severe): 30-49%
- GOLD 4 (Very Severe): < 30%

> **Clinical Pearl**: In Indian practice, always interpret PFT values using Indian reference standards (e.g., Knudson/ATS may overestimate for Indian population). Use Indian Chest Society guidelines.`,
        mnemonics: [
          { text: "GOLD 80-50-30 for COPD staging", explanation: "GOLD 1: >=80%, GOLD 2: 50-79%, GOLD 3: 30-49%, GOLD 4: <30% of predicted FEV1" }
        ],
        keyPoints: ["Bronchodilator reversibility (>12% and >200mL FEV1) = asthma", "COPD GOLD staging by FEV1 percentage predicted", "First look at FEV1/FVC to differentiate obstructive vs restrictive", "In GBS/neuromuscular diseases monitor VC for ventilator need", "Indian reference standards should be used for PFT interpretation"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 42 - Respiratory Insufficiency", edition: "14th" }] },
      { layer: 4, slug: "lung-volumes-exam", title: "Lung Volumes & Capacities - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield exam points on lung volumes, spirometry, and PFT interpretation.",
        contentMd: `# Exam High Yield

## One-Liners
- Normal TV: **500 mL**
- Normal VC: **4600 mL**
- Normal FRC: **2300 mL**
- Normal RV: **1200 mL**
- Normal TLC: **5800 mL**
- Anatomical dead space: **150 mL**
- Normal FEV1/FVC: **0.8 (80%)**
- Cannot be measured by spirometry: **RV, FRC, TLC**
- Fowler's method measures: **Anatomical dead space**
- Bohr's method measures: **Physiological dead space**
- Gold standard for RV/FRC: **Body plethysmography**
- FRC = equilibrium volume where: **Lung recoil = Chest wall recoil**
- Closing volume increased in: **Elderly, smokers, supine position**
- Minute ventilation: **6 L/min (500 x 12)**
- Alveolar ventilation: **4.2 L/min (350 x 12)**

## Changes in Disease

| Parameter | Emphysema | Fibrosis | Asthma |
|-----------|-----------|----------|--------|
| RV | Increased | Decreased | Increased |
| FRC | Increased | Decreased | Increased |
| TLC | Increased | Decreased | Increased |
| VC | Decreased | Decreased | Decreased |
| FEV1/FVC | Decreased | Normal/Increased | Decreased |

## Previous Year Themes
- Spirometry interpretation (obstructive vs restrictive)
- Dead space measurement methods
- FEV1/FVC ratio in different diseases
- Volumes that cannot be measured by spirometry`,
        mnemonics: [
          { text: "FRC TLC RV - FuRTiVe volumes need special tests", explanation: "FRC, TLC, and RV cannot be measured by simple spirometry - they need body plethysmography or helium dilution" }
        ],
        keyPoints: ["RV, FRC, TLC need special measurement (body plethysmography)", "FEV1/FVC: <0.7 obstructive, normal/high restrictive", "Fowler = anatomical, Bohr = physiological dead space"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 38", edition: "14th" }] },
      { layer: 5, slug: "lung-volumes-recall", title: "Lung Volumes & Capacities - Active Recall", estimatedMinutes: 10,
        summary: "Self-test flashcards for lung volumes and capacities.",
        contentMd: `# Active Recall

**Q1:** Name the 4 lung volumes.
> Tidal Volume, Inspiratory Reserve Volume, Expiratory Reserve Volume, Residual Volume

**Q2:** Which volumes/capacities cannot be measured by spirometry?
> RV, FRC, and TLC (all contain Residual Volume)

**Q3:** What is the normal FEV1/FVC ratio?
> 0.8 (80%)

**Q4:** FEV1/FVC < 0.7 indicates?
> Obstructive lung disease (asthma, COPD)

**Q5:** Fowler's method measures what?
> Anatomical dead space (using N2 washout technique)

**Q6:** Bohr's method measures what?
> Physiological dead space (using CO2 method)

**Q7:** Gold standard for measuring FRC?
> Body plethysmography

**Q8:** What defines positive bronchodilator reversibility?
> FEV1 improvement of >12% AND >200 mL after salbutamol

**Q9:** What is normal anatomical dead space?
> 150 mL

**Q10:** What is closing volume and when is it increased?
> Volume at which small airways begin to close during expiration; increased in elderly, smokers, and supine position`,
        mnemonics: [],
        keyPoints: ["10 recall questions covering lung volumes, spirometry, and PFT interpretation"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 38", edition: "14th" }] },
    ],
  },

  // ─── Topic 3: Gas Exchange & Transport ────────────────────────
  {
    topicCode: "PY-MOD-04-TOP-03",
    layers: [
      { layer: 1, slug: "gas-exchange-foundation", title: "Gas Exchange & Transport - Foundation", estimatedMinutes: 20,
        summary: "Gas exchange occurs by diffusion across the respiratory membrane. Oxygen is transported bound to hemoglobin and dissolved in plasma. CO2 is transported as bicarbonate, carbaminohemoglobin, and dissolved form.",
        contentMd: `# Gas Exchange & Transport

## Respiratory Membrane (Blood-Air Barrier)
Layers (from alveolus to blood):
1. Alveolar epithelium (Type I pneumocytes)
2. Epithelial basement membrane
3. Thin interstitial space
4. Capillary basement membrane
5. Capillary endothelium

- Total thickness: **0.2 to 0.6 micrometers**
- Total surface area: **70 m^2**

## Partial Pressures (mmHg)

| Gas | Atmospheric | Alveolar | Arterial | Venous |
|-----|-----------|----------|----------|--------|
| O2 | 159 | 100 | 95-100 | 40 |
| CO2 | 0.3 | 40 | 40 | 46 |

## Diffusion (Fick's Law)
- Rate of diffusion proportional to: (Area x Solubility x Pressure gradient) / (Thickness x Molecular weight)
- CO2 diffuses **20 times faster** than O2 (higher solubility despite larger MW)

## Oxygen Transport
1. **Dissolved in plasma**: 3% (PaO2)
2. **Bound to Hemoglobin**: 97% (1 Hb binds 4 O2 molecules)
- Oxygen carrying capacity: **1.34 mL O2/g Hb**
- Normal Hb = 15 g/dL --> total O2 = ~20 mL/dL blood

## CO2 Transport
1. **Bicarbonate (HCO3-)**: 70% (in plasma, via chloride shift)
2. **Carbaminohemoglobin**: 23% (bound to Hb)
3. **Dissolved**: 7%

## Ventilation-Perfusion (V/Q) Ratio
- Normal overall V/Q = **0.8** (ventilation 4L/min, perfusion 5L/min)
- Apex of lung: V/Q = 3 (high V/Q, relative over-ventilation)
- Base of lung: V/Q = 0.6 (low V/Q, relative over-perfusion)`,
        mnemonics: [
          { text: "70-23-7 for CO2 transport", explanation: "70% as bicarbonate, 23% as carbaminohemoglobin, 7% dissolved in plasma" },
          { text: "ABCDE for respiratory membrane", explanation: "Alveolar epithelium, Basement membrane (epithelial), Connective tissue (interstitium), Deep basement membrane (capillary), Endothelium (capillary)" }
        ],
        keyPoints: ["Respiratory membrane: 5 layers, 0.2-0.6 um thick, 70 m2 area", "CO2 diffuses 20x faster than O2", "97% O2 transported bound to Hb, 3% dissolved", "70% CO2 as bicarbonate, 23% carbamino, 7% dissolved", "V/Q ratio: apex = 3 (high), base = 0.6 (low), overall = 0.8"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 39-40 - Gas Exchange & Transport", edition: "14th" }] },
      { layer: 2, slug: "gas-exchange-mechanism", title: "Gas Exchange & Transport - Mechanism", estimatedMinutes: 30,
        summary: "Detailed mechanisms of the oxygen-hemoglobin dissociation curve, Bohr and Haldane effects, chloride shift, and V/Q mismatch.",
        contentMd: `# Gas Exchange - Detailed Mechanisms

## Oxygen-Hemoglobin Dissociation Curve
- **Sigmoid (S-shaped)** curve due to cooperative binding
- **P50** = PO2 at which Hb is 50% saturated = **26.6 mmHg** (normal)
- Flat upper portion (60-100 mmHg): Safety margin for O2 loading
- Steep middle portion (20-60 mmHg): Efficient O2 unloading to tissues

## Shifts of O2-Hb Dissociation Curve

### Right Shift (Decreased Affinity, Increased P50, Better O2 unloading)
Causes (mnemonic: CADET face Right):
- CO2 increased
- Acidosis (decreased pH)
- DPG (2,3-DPG) increased
- Exercise
- Temperature increased

### Left Shift (Increased Affinity, Decreased P50, Better O2 loading)
- Opposite of above: decreased CO2, alkalosis, decreased 2,3-DPG, hypothermia
- **Fetal hemoglobin (HbF)**: Left-shifted (higher O2 affinity, helps fetal O2 uptake)
- **Carbon monoxide (CO)**: Left-shifted (CO binds Hb 240x more than O2)
- **Methemoglobin**: Left-shifted

## Bohr Effect
- Increased CO2 / decreased pH --> decreased O2 affinity (right shift)
- Facilitates O2 release at tissues (where CO2 is high)
- Facilitates O2 uptake at lungs (where CO2 is low)

## Haldane Effect
- Deoxygenated Hb carries MORE CO2 than oxygenated Hb
- At tissues: Hb releases O2, picks up more CO2
- At lungs: Hb picks up O2, releases CO2

## Chloride Shift (Hamburger Phenomenon)
- In tissues: CO2 enters RBC --> carbonic anhydrase converts to H2CO3 --> HCO3- + H+
- HCO3- moves OUT of RBC into plasma, Cl- moves IN (to maintain electrical neutrality)
- Reverse happens in lungs

## V/Q Mismatch Zones

| Zone | V/Q | Example |
|------|-----|---------|
| Dead space | Infinity (V without Q) | Pulmonary embolism |
| Normal | 0.8 | Healthy lung |
| Shunt | 0 (Q without V) | Pneumonia, atelectasis |

## Diffusion Limitation vs Perfusion Limitation
- **O2**: Normally perfusion-limited (equilibrates in 0.25s of 0.75s transit time)
- Becomes diffusion-limited in: Fibrosis, exercise, high altitude
- **CO**: Always diffusion-limited (used in DLCO test)
- **CO2**: Perfusion-limited (very high solubility)`,
        mnemonics: [
          { text: "CADET face Right", explanation: "CO2, Acidosis, 2,3-DPG, Exercise, Temperature - all shift O2-Hb curve RIGHT (decreased affinity)" },
          { text: "Bohr at Body, Haldane at Heart (lungs)", explanation: "Bohr effect: at tissues, CO2 helps release O2. Haldane effect: at lungs, O2 helps release CO2" }
        ],
        keyPoints: ["P50 = 26.6 mmHg; right shift = increased P50", "CADET face Right for right shift factors", "Bohr effect: CO2/H+ decreases O2 affinity at tissues", "Haldane effect: deoxy-Hb carries more CO2", "CO has 240x affinity for Hb compared to O2"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 40 - Transport of O2 & CO2", edition: "14th" }] },
      { layer: 3, slug: "gas-exchange-clinical", title: "Gas Exchange & Transport - Clinical", estimatedMinutes: 20,
        summary: "Clinical applications including carbon monoxide poisoning, methemoglobinemia, DLCO testing, and V/Q mismatch in disease.",
        contentMd: `# Clinical Applications

## Carbon Monoxide Poisoning
- CO binds Hb with **240x greater affinity** than O2
- Forms **carboxyhemoglobin (COHb)** - cherry red color
- Shifts O2-Hb curve LEFT (remaining Hb holds O2 tightly)
- Pulse oximetry is FALSELY NORMAL (cannot distinguish COHb from OxyHb)
- Diagnosis: **CO-oximetry** (measures COHb directly)
- Treatment: **100% O2** (reduces CO half-life from 4h to 40min); Hyperbaric O2 in severe cases
- Common in India: charcoal/wood burning in closed rooms, industrial exposure

## Methemoglobinemia
- Fe2+ oxidized to Fe3+ (cannot carry O2)
- Causes: Dapsone (very common in India - used for leprosy), nitrites, local anesthetics
- **Chocolate-colored blood** that does not turn red with O2
- SpO2 reads around **85%** regardless of true saturation
- Treatment: **Methylene blue** (reduces Fe3+ back to Fe2+)

## DLCO (Diffusion Capacity for CO)
- Measures gas exchange efficiency across respiratory membrane
- **Decreased in**: Emphysema, fibrosis, anemia, pulmonary embolism
- **Increased in**: Polycythemia, pulmonary hemorrhage (Goodpasture), left-to-right shunts, exercise
- **Normal in**: Asthma (airway disease, not alveolar)

## V/Q Mismatch in Disease

| Condition | V/Q Change | Mechanism |
|-----------|-----------|-----------|
| Pulmonary embolism | Increased (dead space) | Ventilation without perfusion |
| Pneumonia | Decreased (shunt) | Perfusion without ventilation |
| COPD | Uneven V/Q | Both areas of high and low V/Q |
| ARDS | Severe shunt | Alveolar flooding and collapse |

> **Clinical Pearl**: In India, dapsone is the most common cause of drug-induced methemoglobinemia due to its widespread use in leprosy treatment programs.`,
        mnemonics: [
          { text: "Cherry RED for CO, Chocolate BROWN for MetHb", explanation: "CO poisoning = cherry red skin/blood, Methemoglobinemia = chocolate brown blood" }
        ],
        keyPoints: ["CO binds Hb 240x stronger, pulse ox falsely normal, treat with 100% O2", "Methemoglobinemia: chocolate blood, SpO2 stuck at 85%, treat with methylene blue", "DLCO decreased in emphysema/fibrosis, increased in polycythemia/pulmonary hemorrhage", "Dapsone is the most common cause of methemoglobinemia in India", "PE = increased dead space; pneumonia = shunt"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 40, 42", edition: "14th" }] },
      { layer: 4, slug: "gas-exchange-exam", title: "Gas Exchange & Transport - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield exam facts on gas exchange and transport for NEXT and NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners
- CO2 diffuses **20x** faster than O2
- Normal V/Q ratio: **0.8**
- P50: **26.6 mmHg**
- O2 carrying capacity of Hb: **1.34 mL/g**
- Right shift causes: **CADET face Right**
- Fetal Hb: **Left shift** (higher O2 affinity)
- CO affinity for Hb: **240x** that of O2
- Chloride shift is also called: **Hamburger phenomenon**
- Bohr effect: Effect of CO2/pH on O2 binding
- Haldane effect: Effect of O2 on CO2 binding
- Major form of CO2 transport: **Bicarbonate (70%)**
- Pulse oximetry fails in: **CO poisoning, methemoglobinemia**
- DLCO normal in: **Asthma** (airway disease)
- DLCO decreased in: **Emphysema, fibrosis, anemia**
- Methemoglobinemia treatment: **Methylene blue**
- Respiratory membrane layers: **5** (total thickness 0.2-0.6 um)
- Apex V/Q: **3**; Base V/Q: **0.6**

## Comparison: Bohr vs Haldane Effect

| Feature | Bohr Effect | Haldane Effect |
|---------|------------|---------------|
| Definition | Effect of CO2/pH on O2-Hb binding | Effect of O2 on CO2-Hb binding |
| At tissues | High CO2 promotes O2 release | Low O2 promotes CO2 uptake |
| At lungs | Low CO2 promotes O2 uptake | High O2 promotes CO2 release |

## Previous Year Themes
- O2-Hb dissociation curve shifts
- CO poisoning diagnosis and treatment
- V/Q ratio at apex vs base
- CO2 transport forms`,
        mnemonics: [],
        keyPoints: ["P50 = 26.6 mmHg; CADET = right shift", "CO 240x affinity, pulse ox fails", "70% CO2 as bicarbonate"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 39-40", edition: "14th" }] },
      { layer: 5, slug: "gas-exchange-recall", title: "Gas Exchange & Transport - Active Recall", estimatedMinutes: 10,
        summary: "Self-test flashcards for gas exchange and transport.",
        contentMd: `# Active Recall

**Q1:** How many times faster does CO2 diffuse compared to O2?
> 20 times faster (due to higher solubility)

**Q2:** What is P50 and its normal value?
> PO2 at which Hb is 50% saturated; Normal = 26.6 mmHg

**Q3:** What factors shift the O2-Hb curve to the right?
> CADET: CO2, Acidosis, 2,3-DPG, Exercise, Temperature (all increased)

**Q4:** What percentage of CO2 is transported as bicarbonate?
> 70%

**Q5:** What is the Bohr effect?
> Increased CO2/decreased pH reduces O2 affinity of Hb, promoting O2 release at tissues

**Q6:** What is the Haldane effect?
> Deoxygenated Hb carries more CO2 than oxygenated Hb

**Q7:** Why is pulse oximetry falsely normal in CO poisoning?
> Pulse oximeter cannot distinguish carboxyhemoglobin from oxyhemoglobin

**Q8:** What is the treatment for methemoglobinemia?
> Methylene blue (reduces Fe3+ back to Fe2+)

**Q9:** V/Q ratio at apex vs base of lung?
> Apex = 3 (over-ventilated), Base = 0.6 (over-perfused)

**Q10:** What is the chloride shift?
> HCO3- moves out of RBC into plasma, Cl- moves in to maintain electrical neutrality (Hamburger phenomenon)`,
        mnemonics: [],
        keyPoints: ["10 recall questions covering gas exchange, O2/CO2 transport, and clinical correlations"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 39-40", edition: "14th" }] },
    ],
  },

  // ─── Topic 4: Regulation of Respiration ───────────────────────
  {
    topicCode: "PY-MOD-04-TOP-04",
    layers: [
      { layer: 1, slug: "regulation-respiration-foundation", title: "Regulation of Respiration - Foundation", estimatedMinutes: 20,
        summary: "Respiration is controlled by brainstem respiratory centers, modulated by central and peripheral chemoreceptors, and influenced by various reflexes including the Hering-Breuer reflex.",
        contentMd: `# Regulation of Respiration

## Respiratory Centers in Brainstem

### Medullary Centers (Most Important)
1. **Dorsal Respiratory Group (DRG)** - Nucleus Tractus Solitarius
   - **Inspiratory** neurons
   - Receives input from vagus and glossopharyngeal nerves
   - Basic rhythm generation (ramp signal)

2. **Ventral Respiratory Group (VRG)** - Nucleus Ambiguus + Nucleus Retroambiguus
   - Both **inspiratory and expiratory** neurons
   - Active mainly during **forced breathing**
   - Contains the **Pre-Botzinger complex** (pacemaker for respiratory rhythm)

### Pontine Centers
3. **Pneumotaxic Center** - Nucleus Parabrachialis
   - **Limits inspiration** (switches off DRG)
   - Increases respiratory rate
   - Fine-tunes breathing pattern

4. **Apneustic Center** - Lower pons
   - Promotes **prolonged inspiration** (apneusis)
   - Normally inhibited by pneumotaxic center and vagus

## Chemoreceptors

### Central Chemoreceptors (Medulla - ventral surface)
- Respond to **H+ ions in CSF** (which reflect blood CO2)
- CO2 crosses blood-brain barrier --> converted to H2CO3 --> H+ + HCO3-
- **Most important** for day-to-day regulation
- Respond to: **PCO2** (primarily), pH

### Peripheral Chemoreceptors
- **Carotid body** (at carotid bifurcation) - via glossopharyngeal nerve (CN IX)
- **Aortic body** (at aortic arch) - via vagus nerve (CN X)
- Respond to: **PO2** (mainly), PCO2, pH
- Carotid body has the **highest blood flow per gram** of any tissue
- Stimulated when PaO2 falls below **60 mmHg**

## Hering-Breuer Reflex
- **Inflation reflex**: Lung stretch receptors in smooth muscle activate vagus --> inhibit inspiration --> prevent over-inflation
- More important in neonates; weak in adults during normal breathing
- **Deflation reflex**: Stimulates inspiration when lungs deflate excessively`,
        mnemonics: [
          { text: "DRG = Dorsal = inhalers (Inspiratory)", explanation: "Dorsal Respiratory Group contains inspiratory neurons in the nucleus tractus solitarius" },
          { text: "9 at the Carotid, 10 at the Aortic", explanation: "CN IX (glossopharyngeal) from carotid body, CN X (vagus) from aortic body" }
        ],
        keyPoints: ["DRG = inspiratory; VRG = both inspiratory and expiratory (forced breathing)", "Pre-Botzinger complex is the respiratory pacemaker", "Central chemoreceptors respond to H+/CO2 in CSF (most important)", "Peripheral chemoreceptors respond mainly to PO2 (stimulated below 60 mmHg)", "Pneumotaxic center limits inspiration; apneustic center prolongs it"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 42 - Regulation of Respiration", edition: "14th" }] },
      { layer: 2, slug: "regulation-respiration-mechanism", title: "Regulation of Respiration - Mechanism", estimatedMinutes: 30,
        summary: "Detailed mechanisms of chemoreceptor responses, CO2 response curves, hypoxic ventilatory response, and various respiratory reflexes.",
        contentMd: `# Detailed Mechanisms

## CO2 Response Curve
- Linear relationship between PaCO2 and ventilation
- Central chemoreceptors responsible for **80%** of CO2 ventilatory response
- Peripheral chemoreceptors responsible for **20%** (but respond faster)
- Slope of curve = CO2 sensitivity
- **Decreased slope**: Sleep, narcotics, chronic CO2 retention (COPD)
- **Increased slope**: Exercise, acidosis

## Hypoxic Ventilatory Response
- Mediated **exclusively** by peripheral chemoreceptors (mainly carotid body)
- Minimal ventilatory response until PaO2 < **60 mmHg** (corresponds to steep part of O2-Hb curve)
- Below 60 mmHg: Rapid increase in ventilation
- Hypoxia also sensitizes response to CO2

## Interaction Between CO2 and O2
- Hypercapnia + hypoxia together produce GREATER ventilatory response than either alone
- CO2 is the most important stimulus for breathing under normal conditions
- O2 becomes the primary drive in chronic CO2 retention (COPD patients)

## Pre-Botzinger Complex
- Located in ventrolateral medulla
- Contains pacemaker neurons with intrinsic rhythmicity
- Generates the basic respiratory rhythm
- Uses neurokinin-1 receptors

## Other Reflexes Affecting Respiration

| Reflex | Stimulus | Response | Afferent |
|--------|----------|----------|----------|
| Hering-Breuer inflation | Lung stretch | Stop inspiration | Vagus |
| J reflex (juxtacapillary) | Pulmonary congestion/edema | Rapid shallow breathing | C-fibers (vagus) |
| Irritant reflex | Dust, smoke, cold air | Cough, bronchoconstriction | Rapidly adapting receptors (vagus) |
| Head's paradoxical reflex | Inflation | MORE inspiration | Vagus |
| Sneeze reflex | Nasal irritation | Explosive expiration | CN V (trigeminal) |

## Voluntary Control
- Cerebral cortex can override brainstem centers (voluntary breath-holding, hyperventilation)
- Limited by chemoreceptor drive (cannot hold breath to death voluntarily)
- **Ondine's curse**: Loss of automatic breathing during sleep (brainstem lesion); voluntary control intact while awake`,
        mnemonics: [
          { text: "J for Juxtacapillary = J for Jammed lungs", explanation: "J reflex (juxtacapillary) is stimulated by pulmonary congestion/edema causing rapid shallow breathing" }
        ],
        keyPoints: ["Central chemoreceptors provide 80% of CO2 response", "Hypoxic drive exclusively from peripheral chemoreceptors, active below PaO2 60 mmHg", "CO2 is the primary respiratory stimulus normally", "In chronic CO2 retention (COPD), O2 becomes the primary drive", "Ondine's curse = loss of automatic breathing during sleep"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 42", edition: "14th" }, { book: "Ganong", chapter: "Ch 36 - Regulation of Breathing", edition: "26th" }] },
      { layer: 3, slug: "regulation-respiration-clinical", title: "Regulation of Respiration - Clinical", estimatedMinutes: 20,
        summary: "Clinical applications including oxygen therapy in COPD, Cheyne-Stokes breathing, sleep apnea, and abnormal breathing patterns.",
        contentMd: `# Clinical Applications

## Oxygen Therapy in COPD
- Chronic CO2 retention --> central chemoreceptors become desensitized to CO2
- Breathing driven by **hypoxic drive** (peripheral chemoreceptors)
- Giving high-flow O2 removes hypoxic drive --> **CO2 narcosis and respiratory depression**
- Use **controlled low-flow O2**: 24-28% via Venturi mask or 1-2 L/min via nasal prongs
- Target SpO2: **88-92%** (NOT 94-98% as in normal patients)

## Abnormal Breathing Patterns

| Pattern | Characteristics | Cause |
|---------|----------------|-------|
| Cheyne-Stokes | Crescendo-decrescendo with apneic periods | Heart failure, stroke, high altitude |
| Kussmaul | Deep rapid breathing | Metabolic acidosis (DKA) |
| Biot's | Irregular with sudden apnea | Medullary lesion, meningitis |
| Apneustic | Prolonged inspiratory gasps | Pontine lesion (apneustic center) |
| Ataxic | Completely irregular | Medullary damage (pre-terminal) |

## Sleep Apnea
### Obstructive Sleep Apnea (OSA)
- Pharyngeal collapse during sleep
- Risk: Obesity, large neck, male, retrognathia
- Features: Loud snoring, daytime somnolence, morning headache
- Diagnosis: Polysomnography (AHI > 5)
- Treatment: CPAP, weight loss, surgery

### Central Sleep Apnea
- Loss of central drive during sleep
- Associated with: Heart failure, brainstem lesions, opioids

## High Altitude Acclimatization
- Low PO2 --> peripheral chemoreceptors stimulated --> hyperventilation
- Respiratory alkalosis --> renal HCO3- excretion (compensation over 2-3 days)
- Increased 2,3-DPG --> right shift of O2-Hb curve
- Increased EPO --> polycythemia

> **Clinical Pearl**: In Indian hospitals, always use controlled O2 in COPD patients. Venturi masks are preferred as they deliver precise FiO2. This is a common source of iatrogenic harm.`,
        mnemonics: [
          { text: "Cheyne-Stokes CHF: Crescendo-Heartfailure-Fade", explanation: "Cheyne-Stokes breathing (crescendo-decrescendo pattern with apnea) is associated with congestive heart failure and brainstem stroke" }
        ],
        keyPoints: ["In COPD: use controlled O2 (24-28%) to avoid CO2 narcosis", "Target SpO2 in COPD: 88-92%", "Cheyne-Stokes: heart failure/stroke; Kussmaul: metabolic acidosis", "OSA: CPAP is first-line treatment; diagnosed by polysomnography", "High altitude: hyperventilation, increased 2,3-DPG, polycythemia"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 42-43", edition: "14th" }] },
      { layer: 4, slug: "regulation-respiration-exam", title: "Regulation of Respiration - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield exam facts on respiratory regulation for NEXT and NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners
- Respiratory pacemaker: **Pre-Botzinger complex** (ventrolateral medulla)
- Most important day-to-day stimulus: **CO2 (via central chemoreceptors)**
- DRG location: **Nucleus Tractus Solitarius**
- Pneumotaxic center: **Nucleus Parabrachialis** (limits inspiration)
- Carotid body afferent: **CN IX (glossopharyngeal)**
- Aortic body afferent: **CN X (vagus)**
- PaO2 threshold for peripheral chemoreceptor stimulation: **60 mmHg**
- Highest blood flow per gram: **Carotid body**
- Hering-Breuer reflex: **Vagus-mediated inhibition of inspiration during lung inflation**
- J reflex stimulated by: **Pulmonary congestion** (rapid shallow breathing)
- Cheyne-Stokes breathing: **Heart failure, stroke** (crescendo-decrescendo)
- Kussmaul breathing: **Metabolic acidosis** (DKA)
- Biot's breathing: **Meningitis, medullary lesion**
- Ondine's curse: **Loss of automatic breathing during sleep**
- COPD O2 therapy: **24-28% controlled** (target SpO2 88-92%)
- Central chemoreceptors respond to: **H+ in CSF** (reflecting CO2)

## Comparison: Central vs Peripheral Chemoreceptors

| Feature | Central | Peripheral |
|---------|---------|-----------|
| Location | Ventral medulla | Carotid and aortic bodies |
| Stimulus | H+ (CO2 in CSF) | PO2, PCO2, pH |
| Response to CO2 | 80% of response | 20% |
| Response to O2 | None | Primary O2 sensor |
| Speed | Slow (1-2 min) | Fast (seconds) |`,
        mnemonics: [
          { text: "BOCK for breathing patterns", explanation: "Biot's = Brainstem, Ondine's curse = Only while sleeping, Cheyne-stokes = Cardiac failure, Kussmaul = Ketoacidosis" }
        ],
        keyPoints: ["Pre-Botzinger complex = pacemaker", "CO2 is primary stimulus (central chemo = 80%)", "Peripheral chemo activated below PaO2 60 mmHg", "COPD: controlled O2 24-28%"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 42", edition: "14th" }] },
      { layer: 5, slug: "regulation-respiration-recall", title: "Regulation of Respiration - Active Recall", estimatedMinutes: 10,
        summary: "Self-test flashcards for regulation of respiration.",
        contentMd: `# Active Recall

**Q1:** What is the respiratory pacemaker and where is it located?
> Pre-Botzinger complex in the ventrolateral medulla

**Q2:** Which is the most important chemoreceptor for day-to-day breathing regulation?
> Central chemoreceptors (respond to H+/CO2 in CSF, provide 80% of CO2 response)

**Q3:** At what PaO2 do peripheral chemoreceptors become significantly stimulated?
> Below 60 mmHg

**Q4:** Which nerve carries impulses from the carotid body?
> Glossopharyngeal nerve (CN IX)

**Q5:** What does the pneumotaxic center do?
> Limits inspiration (switches off DRG), increases respiratory rate

**Q6:** Why is high-flow O2 dangerous in COPD patients?
> They depend on hypoxic drive; removing it causes CO2 narcosis and respiratory depression

**Q7:** What breathing pattern is seen in metabolic acidosis (DKA)?
> Kussmaul breathing (deep, rapid)

**Q8:** What is the Hering-Breuer inflation reflex?
> Lung stretch receptors activate vagus to inhibit inspiration, preventing over-inflation

**Q9:** What is Ondine's curse?
> Loss of automatic breathing during sleep due to brainstem lesion; voluntary control intact while awake

**Q10:** What happens to breathing at high altitude?
> Hyperventilation (hypoxic drive), respiratory alkalosis, then renal compensation (HCO3- excretion)`,
        mnemonics: [],
        keyPoints: ["10 recall questions covering respiratory centers, chemoreceptors, and clinical patterns"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 42", edition: "14th" }] },
    ],
  },

  // ─── Topic 5: Hypoxia & Oxygen Therapy ────────────────────────
  {
    topicCode: "PY-MOD-04-TOP-05",
    layers: [
      { layer: 1, slug: "hypoxia-oxygen-foundation", title: "Hypoxia & Oxygen Therapy - Foundation", estimatedMinutes: 20,
        summary: "Hypoxia is deficiency of oxygen at the tissue level. It is classified into four types based on mechanism. Cyanosis is the clinical sign of hypoxia visible when deoxygenated Hb exceeds 5 g/dL.",
        contentMd: `# Hypoxia & Oxygen Therapy

## Definition
- **Hypoxia**: Deficiency of O2 at tissue level
- **Hypoxemia**: Low PaO2 in arterial blood (<60 mmHg)
- **Anoxia**: Complete absence of O2

## Types of Hypoxia (Barcroft's Classification)

| Type | PaO2 | O2 Content | A-V O2 Diff | Examples |
|------|------|-----------|-------------|---------|
| Hypoxic (Hypoxemic) | Decreased | Decreased | Normal | High altitude, lung disease, hypoventilation |
| Anemic | Normal | Decreased | Normal | Anemia, CO poisoning, methemoglobinemia |
| Stagnant (Circulatory) | Normal | Normal | Increased | Heart failure, shock, tourniquet |
| Histotoxic | Normal | Normal | Decreased | Cyanide poisoning |

## Key Features of Each Type

### Hypoxic Hypoxia
- Low PaO2 in arterial blood
- Causes: High altitude, pneumonia, COPD, V/Q mismatch, hypoventilation

### Anemic Hypoxia
- Reduced O2-carrying capacity despite normal PaO2
- Hb is either reduced (anemia) or non-functional (CO, MetHb)

### Stagnant Hypoxia
- Inadequate blood flow to tissues
- Normal O2 content but tissues extract more --> increased A-V O2 difference

### Histotoxic Hypoxia
- Tissues cannot USE O2 (mitochondrial poisoning)
- **Cyanide** inhibits cytochrome oxidase (Complex IV)
- Venous blood is bright red (cells cannot extract O2)

## Cyanosis
- **Definition**: Bluish discoloration due to deoxygenated Hb > 5 g/dL in capillary blood
- **Central cyanosis**: Tongue, lips (indicates low SaO2) - seen in lung disease, R-to-L shunt
- **Peripheral cyanosis**: Extremities only (reduced blood flow) - cold, shock
- NOT seen in severe anemia (not enough Hb to produce 5 g/dL deoxy-Hb)
- ALWAYS present in polycythemia (excess Hb easily produces 5 g/dL deoxy-Hb)`,
        mnemonics: [
          { text: "HASH for types of hypoxia", explanation: "Hypoxic, Anemic, Stagnant, Histotoxic - the 4 types of hypoxia" },
          { text: "Cyanide = Can't Use O2", explanation: "Histotoxic hypoxia: cyanide blocks cytochrome oxidase, cells cannot utilize oxygen" }
        ],
        keyPoints: ["4 types: Hypoxic, Anemic, Stagnant, Histotoxic", "Histotoxic: cyanide blocks cytochrome oxidase (Complex IV)", "Cyanosis appears when deoxyHb > 5 g/dL", "Cyanosis absent in severe anemia, always present in polycythemia", "Stagnant hypoxia: increased A-V O2 difference"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 42 - Respiratory Insufficiency", edition: "14th" }] },
      { layer: 2, slug: "hypoxia-oxygen-mechanism", title: "Hypoxia & Oxygen Therapy - Mechanism", estimatedMinutes: 30,
        summary: "Detailed mechanisms of high altitude physiology, oxygen therapy delivery systems, and the alveolar gas equation.",
        contentMd: `# Detailed Mechanisms

## High Altitude Physiology
### Acute Effects (Immediate)
- Decreased PiO2 (barometric pressure falls) --> decreased PAO2 --> decreased PaO2
- Hyperventilation (peripheral chemoreceptor stimulation)
- Tachycardia, increased cardiac output
- Pulmonary vasoconstriction (hypoxic pulmonary vasoconstriction - HPV)

### Acclimatization (Days to Weeks)
1. **Ventilatory**: Sustained hyperventilation, renal HCO3- excretion (CSF pH normalization)
2. **Hematological**: Increased EPO --> polycythemia, increased 2,3-DPG
3. **Cardiovascular**: Increased capillary density, right ventricular hypertrophy
4. **Cellular**: Increased myoglobin, mitochondrial enzymes, HIF-1alpha activation

### Altitude Illness
- **Acute Mountain Sickness (AMS)**: Headache, nausea, insomnia (above 2500m)
- **High Altitude Pulmonary Edema (HAPE)**: Non-cardiogenic edema, pink frothy sputum
- **High Altitude Cerebral Edema (HACE)**: Ataxia, confusion, papilledema
- Treatment: Descent, oxygen, dexamethasone (HACE), nifedipine (HAPE)
- Prevention: Acetazolamide (carbonic anhydrase inhibitor, promotes HCO3- excretion)

## Alveolar Gas Equation
**PAO2 = PiO2 - (PaCO2 / R)**
- PiO2 = FiO2 x (PB - 47) [47 = water vapor pressure at 37 degrees C]
- R = Respiratory quotient = 0.8
- At sea level on room air: PAO2 = 0.21 x (760-47) - (40/0.8) = 150 - 50 = **100 mmHg**
- A-a gradient = PAO2 - PaO2 = normally **<15 mmHg**

## A-a Gradient
- **Normal A-a gradient**: Hypoventilation (CNS depression, obesity)
- **Increased A-a gradient**: V/Q mismatch, diffusion impairment, R-to-L shunt

## Oxygen Therapy Delivery Systems

| Device | FiO2 | Flow Rate | Precision |
|--------|------|-----------|-----------|
| Nasal cannula | 24-44% | 1-6 L/min | Variable |
| Simple face mask | 40-60% | 6-10 L/min | Variable |
| Venturi mask | 24-60% | 4-15 L/min | Precise (color-coded) |
| Non-rebreather mask | 60-90% | 10-15 L/min | Variable |
| High-flow nasal cannula | 21-100% | Up to 60 L/min | Precise |

## Hyperbaric Oxygen
- 100% O2 at 2-3 atmospheres pressure
- Indications: CO poisoning, gas gangrene, decompression sickness, non-healing wounds`,
        mnemonics: [
          { text: "ACE for altitude illness treatment", explanation: "Acetazolamide (prevention), CPAP/descent (HAPE/HACE), Evacuation (descent is definitive)" },
          { text: "Venturi = Very precise", explanation: "Venturi mask delivers the most precise FiO2, preferred for COPD patients" }
        ],
        keyPoints: ["Alveolar gas equation: PAO2 = PiO2 - (PaCO2/R)", "Normal A-a gradient < 15 mmHg", "High altitude: HPV, hyperventilation, polycythemia, increased 2,3-DPG", "Acetazolamide prevents altitude sickness", "Venturi mask = most precise O2 delivery"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 42-43", edition: "14th" }, { book: "Ganong", chapter: "Ch 37 - Respiratory Adjustments", edition: "26th" }] },
      { layer: 3, slug: "hypoxia-oxygen-clinical", title: "Hypoxia & Oxygen Therapy - Clinical", estimatedMinutes: 20,
        summary: "Clinical management of hypoxia, oxygen toxicity, cyanide poisoning, and special considerations in Indian healthcare.",
        contentMd: `# Clinical Applications

## Cyanide Poisoning
- Sources: Industrial exposure, house fires (plastic/synthetic material), bitter almonds (amygdalin)
- Mechanism: Blocks cytochrome oxidase (Complex IV of ETC)
- Features: Seizures, metabolic acidosis, **elevated lactate**, bright red venous blood
- Treatment:
  1. **Hydroxocobalamin** (Cyanokit) - first-line (binds CN to form cyanocobalamin)
  2. Sodium thiosulfate (converts CN to thiocyanate for excretion)
  3. Amyl nitrite / Sodium nitrite (forms methemoglobin which binds CN)
  4. 100% oxygen

## Oxygen Toxicity
### Pulmonary Toxicity (Lorrain-Smith Effect)
- FiO2 > 0.5 for > 24-48 hours
- ARDS-like picture: Alveolar damage, surfactant destruction
- Mechanism: Free radical (ROS) damage

### CNS Toxicity (Paul Bert Effect)
- Hyperbaric O2 at > 2 atm
- Seizures (generalized tonic-clonic)
- More dangerous in hyperbaric chambers

### Retinopathy of Prematurity (ROP)
- Premature neonates given high O2
- Retinal vasoconstriction --> ischemia --> neovascularization --> retinal detachment
- Prevention: Monitor O2 carefully in preterm neonates, target SpO2 91-95%

## Clinical Approach to Hypoxia
1. Check SpO2 and ABG
2. Calculate A-a gradient
3. If normal A-a gradient: Hypoventilation (check PaCO2)
4. If increased A-a gradient: V/Q mismatch, shunt, or diffusion impairment
5. Give supplemental O2 and assess response

## Indian Healthcare Context
- Pulse oximeters may be unreliable in: Severe anemia (common in India), dark skin pigmentation, nail polish
- High altitude exposure: Common in Ladakh, Kashmir, Himachal Pradesh, Uttarakhand postings
- Cyanide exposure: Industrial areas (electroplating, mining), fire victims

> **Clinical Pearl**: In Indian district hospitals, Venturi masks may not always be available. Nasal prongs at 1-2 L/min is a practical alternative for controlled O2 in COPD patients.`,
        mnemonics: [
          { text: "LPR for O2 toxicity", explanation: "Lorrain-smith = Lungs (pulmonary), Paul Bert = Brain (CNS seizures), ROP = Retina (premature neonates)" }
        ],
        keyPoints: ["Cyanide: blocks Complex IV, bright red venous blood, treat with hydroxocobalamin", "O2 toxicity: Lungs (Lorrain-Smith), CNS (Paul Bert), Retina (ROP)", "FiO2 > 0.5 for >48 hours causes pulmonary toxicity", "ROP in premature neonates: target SpO2 91-95%", "Normal A-a gradient + hypoxia = hypoventilation"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 42-43", edition: "14th" }] },
      { layer: 4, slug: "hypoxia-oxygen-exam", title: "Hypoxia & Oxygen Therapy - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield exam facts on hypoxia and oxygen therapy for NEXT and NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners
- Cyanide blocks: **Cytochrome oxidase (Complex IV)**
- Histotoxic hypoxia: Venous blood is **bright red** (O2 cannot be used)
- Cyanosis threshold: **Deoxy-Hb > 5 g/dL** in capillary blood
- Cyanosis absent in: **Severe anemia** (Hb too low)
- Cyanosis always in: **Polycythemia** (excess Hb)
- Central cyanosis site: **Tongue** (best indicator)
- Stagnant hypoxia feature: **Increased A-V O2 difference**
- High altitude adaptation: **EPO, 2,3-DPG, polycythemia, hyperventilation**
- Altitude sickness prevention: **Acetazolamide**
- HAPE treatment: **Nifedipine + descent**
- HACE treatment: **Dexamethasone + descent**
- Pulmonary O2 toxicity: **Lorrain-Smith effect** (FiO2 >0.5 for >48h)
- CNS O2 toxicity: **Paul Bert effect** (seizures at >2 atm)
- ROP prevention: **Target SpO2 91-95% in preterm**
- Alveolar gas equation: **PAO2 = PiO2 - (PaCO2/R)**
- Normal A-a gradient: **< 15 mmHg**
- Venturi mask: **Most precise O2 delivery**
- Cyanide antidote: **Hydroxocobalamin** (first-line)

## Comparison: Types of Hypoxia Response to O2

| Type | Response to 100% O2 |
|------|---------------------|
| Hypoxic | Corrected (PaO2 rises) |
| Anemic | Minimally improved (Hb issue) |
| Stagnant | Minimally improved (flow issue) |
| Histotoxic | No improvement (utilization issue) |`,
        mnemonics: [],
        keyPoints: ["Cyanide = Complex IV block, bright red venous blood", "DeOxyHb > 5 g/dL = cyanosis", "LPR for O2 toxicity types", "Only hypoxic hypoxia corrected well by O2 therapy"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 42-43", edition: "14th" }] },
      { layer: 5, slug: "hypoxia-oxygen-recall", title: "Hypoxia & Oxygen Therapy - Active Recall", estimatedMinutes: 10,
        summary: "Self-test flashcards for hypoxia and oxygen therapy.",
        contentMd: `# Active Recall

**Q1:** Name the 4 types of hypoxia.
> Hypoxic (hypoxemic), Anemic, Stagnant (circulatory), Histotoxic

**Q2:** What enzyme does cyanide inhibit?
> Cytochrome oxidase (Complex IV of electron transport chain)

**Q3:** Why is venous blood bright red in cyanide poisoning?
> Cells cannot extract/use O2, so venous blood retains oxygenated hemoglobin

**Q4:** At what level of deoxygenated Hb does cyanosis appear?
> When deoxygenated Hb exceeds 5 g/dL in capillary blood

**Q5:** Why is cyanosis absent in severe anemia?
> Total Hb is too low to produce 5 g/dL of deoxygenated Hb

**Q6:** What is the A-a gradient and its normal value?
> PAO2 - PaO2; Normal < 15 mmHg

**Q7:** Name the 3 types of O2 toxicity.
> Pulmonary (Lorrain-Smith), CNS (Paul Bert), Retinal (ROP)

**Q8:** Which drug prevents acute mountain sickness?
> Acetazolamide (carbonic anhydrase inhibitor)

**Q9:** What O2 delivery device provides the most precise FiO2?
> Venturi mask (color-coded adaptors)

**Q10:** Which type of hypoxia has increased A-V O2 difference?
> Stagnant (circulatory) hypoxia - tissues extract more O2 due to slow flow`,
        mnemonics: [],
        keyPoints: ["10 recall questions covering hypoxia types, cyanosis, oxygen therapy, and altitude physiology"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 42-43", edition: "14th" }] },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // MODULE 05: RENAL PHYSIOLOGY
  // ═══════════════════════════════════════════════════════════════

  // ─── Topic 1: Renal Blood Flow & GFR ──────────────────────────
  {
    topicCode: "PY-MOD-05-TOP-01",
    layers: [
      { layer: 1, slug: "rbf-gfr-foundation", title: "Renal Blood Flow & GFR - Foundation", estimatedMinutes: 20,
        summary: "The kidneys receive 25% of cardiac output. GFR is the volume of plasma filtered per minute. The juxtaglomerular apparatus regulates GFR and renal blood flow through tubuloglomerular feedback.",
        contentMd: `# Renal Blood Flow & GFR

## Renal Blood Flow (RBF)
- Kidneys receive **25% of cardiac output** (~1200 mL/min)
- Renal plasma flow (RPF) = ~660 mL/min (assuming Hct 45%)
- Blood flow path: Renal artery --> segmental --> interlobar --> arcuate --> interlobular --> afferent arteriole --> **glomerulus** --> efferent arteriole --> peritubular capillaries (or vasa recta in juxtamedullary nephrons)

## Glomerular Filtration Rate (GFR)
- **Definition**: Volume of plasma filtered from glomerular capillaries per unit time
- Normal GFR: **125 mL/min** (~180 L/day)
- Only 1-2 L of urine formed per day (99% reabsorbed)
- **Filtration fraction (FF)**: GFR/RPF = 125/660 = **~20%**

## Starling Forces in Glomerulus

| Force | Value (mmHg) | Direction |
|-------|-------------|-----------|
| Glomerular capillary hydrostatic (PGC) | 60 | Favors filtration |
| Bowman's capsule hydrostatic (PBC) | 18 | Opposes filtration |
| Glomerular capillary oncotic (piGC) | 32 | Opposes filtration |
| Bowman's capsule oncotic (piBC) | 0 | (negligible) |
| **Net Filtration Pressure (NFP)** | **10** | Favors filtration |

- NFP = PGC - PBC - piGC = 60 - 18 - 32 = **10 mmHg**

## Juxtaglomerular Apparatus (JGA)
Components:
1. **Macula densa**: Part of DCT (senses NaCl concentration)
2. **Juxtaglomerular (JG) cells**: Modified smooth muscle in afferent arteriole (secrete renin)
3. **Extraglomerular mesangial (Lacis) cells**

## Autoregulation of RBF and GFR
- RBF and GFR remain constant between MAP **80-180 mmHg**
- Two mechanisms:
  1. **Myogenic mechanism** (Bayliss effect): Afferent arteriole constricts when BP rises
  2. **Tubuloglomerular feedback (TGF)**: Macula densa senses increased NaCl --> signals afferent arteriole constriction --> reduces GFR`,
        mnemonics: [
          { text: "GFR = 125 (one-quarter of 500 RPF is filtered... close to 1/5 actually = 20% FF)", explanation: "GFR is 125 mL/min, RPF is 660 mL/min, Filtration Fraction is approximately 20%" },
          { text: "JGA has 3 J's: JG cells (renin), Juxtaposed macula densa, J-ust Lacis cells", explanation: "The three components of the juxtaglomerular apparatus" }
        ],
        keyPoints: ["Kidneys receive 25% of cardiac output (~1200 mL/min)", "Normal GFR = 125 mL/min = 180 L/day", "Filtration fraction = GFR/RPF = 20%", "Net filtration pressure = 10 mmHg", "Autoregulation between MAP 80-180 mmHg via myogenic + TGF mechanisms"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 27 - Glomerular Filtration", edition: "14th" }] },
      { layer: 2, slug: "rbf-gfr-mechanism", title: "Renal Blood Flow & GFR - Mechanism", estimatedMinutes: 30,
        summary: "Detailed mechanisms of clearance concept, measurement of GFR using inulin and creatinine, RPF measurement using PAH, and factors affecting GFR.",
        contentMd: `# Detailed Mechanisms

## Renal Clearance
- **Definition**: Volume of plasma completely cleared of a substance per unit time
- Formula: **Clearance = (U x V) / P**
  - U = urine concentration, V = urine flow rate, P = plasma concentration

## Measurement of GFR

### Inulin Clearance (Gold Standard)
- Inulin: Fructose polymer, freely filtered, NOT reabsorbed, NOT secreted
- Inulin clearance = GFR = **125 mL/min**
- Gold standard but impractical (needs IV infusion)

### Creatinine Clearance (Clinical Approximation)
- Creatinine: Endogenous, freely filtered, slightly secreted by tubules
- Creatinine clearance slightly OVERESTIMATES GFR (due to secretion)
- Used clinically: Cockcroft-Gault formula, CKD-EPI equation

### Cystatin C
- Alternative GFR marker, not affected by muscle mass
- Better in extremes of body composition

## Measurement of RPF

### PAH Clearance
- Para-aminohippuric acid (PAH): Freely filtered + actively secreted
- At low plasma levels, PAH is completely cleared from peritubular blood
- PAH clearance = **Effective RPF (~660 mL/min)**
- Extraction ratio of PAH = 0.9 (90% extracted in single pass)

## Clearance Ratios

| Substance | Clearance vs Inulin | Interpretation |
|-----------|-------------------|----------------|
| Glucose | 0 (below Tm) | Completely reabsorbed |
| Inulin | = GFR | Filtered only |
| Creatinine | Slightly > GFR | Filtered + secreted |
| PAH | >> GFR | Filtered + secreted (max) |
| Urea | < GFR | Filtered but partially reabsorbed |

## Factors Affecting GFR

| Factor | Effect on GFR |
|--------|--------------|
| Afferent arteriole constriction | Decreases GFR |
| Efferent arteriole constriction (mild) | Increases GFR |
| Efferent arteriole constriction (severe) | Decreases GFR (reduced RBF) |
| Decreased plasma protein (nephrotic) | Increases GFR (less oncotic opposition) |
| Ureteral obstruction | Decreases GFR (increased PBC) |

## Role of Angiotensin II
- Constricts efferent > afferent arteriole
- Mild constriction: Maintains GFR despite reduced RBF
- ACE inhibitors reduce efferent tone --> decrease GFR (especially important in renal artery stenosis)
- Contraindicated in bilateral renal artery stenosis`,
        mnemonics: [
          { text: "INULIN = IN (filtered) but not OUT (not secreted or reabsorbed)", explanation: "Inulin is freely filtered, not reabsorbed, and not secreted - making it the gold standard for GFR measurement" },
          { text: "PAH = Pretty Awesome for RPF measurement (Filtered + secreted = completely cleared)", explanation: "PAH is both filtered and secreted, giving effective renal plasma flow" }
        ],
        keyPoints: ["Clearance = (UxV)/P", "Inulin clearance = GFR (gold standard)", "PAH clearance = effective RPF", "Creatinine clearance slightly overestimates GFR (secretion)", "ACE inhibitors reduce GFR by dilating efferent arteriole, contraindicated in bilateral RAS"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 27-28", edition: "14th" }] },
      { layer: 3, slug: "rbf-gfr-clinical", title: "Renal Blood Flow & GFR - Clinical", estimatedMinutes: 20,
        summary: "Clinical applications of GFR estimation, CKD staging, and clinical significance of autoregulation failure.",
        contentMd: `# Clinical Applications

## eGFR and CKD Staging

| CKD Stage | eGFR (mL/min/1.73m2) | Description |
|-----------|----------------------|-------------|
| Stage 1 | >= 90 | Normal/high with kidney damage |
| Stage 2 | 60-89 | Mild decrease |
| Stage 3a | 45-59 | Mild-moderate decrease |
| Stage 3b | 30-44 | Moderate-severe decrease |
| Stage 4 | 15-29 | Severe decrease |
| Stage 5 | < 15 | Kidney failure (dialysis needed) |

## Clinical GFR Estimation
- **Cockcroft-Gault**: Estimates CrCl; depends on weight, age, sex, serum creatinine
- **CKD-EPI**: More accurate eGFR formula, recommended by KDIGO
- **MDRD**: Older formula, less accurate at higher GFR

## Prerenal vs Renal Azotemia

| Parameter | Prerenal | Renal (ATN) |
|-----------|---------|-------------|
| BUN/Creatinine | > 20:1 | < 15:1 |
| Urine Na | < 20 mEq/L | > 40 mEq/L |
| FeNa | < 1% | > 2% |
| Urine osmolality | > 500 | < 350 |
| Urine specific gravity | > 1.020 | ~1.010 |

## ACE Inhibitors and GFR
- Dilate efferent arteriole --> decrease GFR
- Initial GFR drop of up to 30% is acceptable
- **Contraindicated in bilateral renal artery stenosis** (kidneys depend on AT-II to maintain GFR)
- Serum creatinine rise > 30% = stop ACE inhibitor

## Hepatorenal Syndrome
- Renal vasoconstriction in liver cirrhosis
- Very low urine Na (< 10 mEq/L)
- Autoregulation fails at low MAP

> **Clinical Pearl**: In Indian practice, always check serum creatinine before contrast-enhanced CT. Calculate eGFR using CKD-EPI formula. Pre-hydration with normal saline reduces contrast nephropathy risk.`,
        mnemonics: [
          { text: "CKD stages: 90-60-45-30-15", explanation: "Stage 1: >=90, Stage 2: 60-89, Stage 3a: 45-59, Stage 3b: 30-44, Stage 4: 15-29, Stage 5: <15" }
        ],
        keyPoints: ["CKD staging by eGFR: 90-60-45-30-15", "FeNa < 1% = prerenal; > 2% = renal (ATN)", "ACE inhibitors contraindicated in bilateral renal artery stenosis", "Initial 30% GFR drop with ACE inhibitor is acceptable", "CKD-EPI is recommended formula for eGFR"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 27, 31", edition: "14th" }, { book: "Harrison's Principles of Internal Medicine", chapter: "Ch 305 - CKD", edition: "21st" }] },
      { layer: 4, slug: "rbf-gfr-exam", title: "Renal Blood Flow & GFR - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield exam facts on renal blood flow and GFR for NEXT and NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners
- Kidneys receive: **25% of cardiac output**
- Normal GFR: **125 mL/min (180 L/day)**
- Filtration fraction: **20%** (GFR/RPF)
- Net filtration pressure: **10 mmHg**
- GFR gold standard: **Inulin clearance**
- RPF measured by: **PAH clearance**
- PAH extraction ratio: **0.9 (90%)**
- Creatinine clearance: Slightly **overestimates** GFR
- Glucose clearance: **Zero** (completely reabsorbed below Tm)
- Autoregulation range: MAP **80-180 mmHg**
- Autoregulation mechanisms: **Myogenic (Bayliss) + TGF**
- Macula densa senses: **NaCl concentration** in DCT
- JG cells secrete: **Renin**
- Afferent constriction: **Decreases** GFR and RBF
- Mild efferent constriction: **Increases** GFR, decreases RBF
- ACE inhibitor effect: Dilates efferent --> **decreases** GFR
- Bilateral RAS + ACE inhibitor: **Contraindicated** (precipitates renal failure)

## Clearance Comparison
- Cl(substance) > Cl(inulin) --> Net secretion
- Cl(substance) < Cl(inulin) --> Net reabsorption
- Cl(substance) = Cl(inulin) --> Only filtration`,
        mnemonics: [
          { text: "Afferent Arrives, Efferent Exits", explanation: "Afferent arteriole brings blood TO glomerulus, efferent takes it AWAY. Constriction of afferent reduces GFR, mild efferent constriction increases GFR" }
        ],
        keyPoints: ["GFR = 125 mL/min, Inulin clearance = gold standard", "PAH clearance = RPF", "Filtration fraction = 20%", "Autoregulation: myogenic + TGF"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 27-28", edition: "14th" }] },
      { layer: 5, slug: "rbf-gfr-recall", title: "Renal Blood Flow & GFR - Active Recall", estimatedMinutes: 10,
        summary: "Self-test flashcards for renal blood flow and GFR.",
        contentMd: `# Active Recall

**Q1:** What percentage of cardiac output goes to the kidneys?
> 25% (~1200 mL/min)

**Q2:** What is the normal GFR?
> 125 mL/min (180 L/day)

**Q3:** What is the gold standard for measuring GFR?
> Inulin clearance

**Q4:** Why is inulin ideal for GFR measurement?
> Freely filtered, not reabsorbed, not secreted, not metabolized

**Q5:** What does PAH clearance measure?
> Effective renal plasma flow (RPF ~660 mL/min)

**Q6:** What is the filtration fraction and its normal value?
> GFR/RPF = 125/660 = approximately 20%

**Q7:** Name the 3 components of the juxtaglomerular apparatus.
> JG cells (secrete renin), Macula densa (senses NaCl), Extraglomerular mesangial (Lacis) cells

**Q8:** What are the 2 mechanisms of renal autoregulation?
> Myogenic mechanism (Bayliss effect) and Tubuloglomerular feedback (TGF)

**Q9:** Why are ACE inhibitors contraindicated in bilateral renal artery stenosis?
> Kidneys depend on AT-II to constrict efferent arteriole and maintain GFR; removing this leads to renal failure

**Q10:** What is the net filtration pressure?
> 10 mmHg (60 - 18 - 32 = 10)`,
        mnemonics: [],
        keyPoints: ["10 recall questions covering RBF, GFR, clearance, and autoregulation"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 27-28", edition: "14th" }] },
    ],
  },

  // ─── Topic 2: Tubular Reabsorption & Secretion ────────────────
  {
    topicCode: "PY-MOD-05-TOP-02",
    layers: [
      { layer: 1, slug: "tubular-reabsorption-foundation", title: "Tubular Reabsorption & Secretion - Foundation", estimatedMinutes: 20,
        summary: "The renal tubules reabsorb 99% of filtered water and solutes. The PCT is the workhorse of reabsorption. Transport maximum (Tm) limits reabsorption of substances like glucose.",
        contentMd: `# Tubular Reabsorption & Secretion

## Overview
- 180 L/day filtered, only 1-2 L excreted as urine
- **99% of water and most solutes reabsorbed**

## Proximal Convoluted Tubule (PCT) - "Workhorse"
Reabsorbs:
- **65-67%** of filtered Na+, water, K+, Cl-, HCO3-
- **100%** of glucose and amino acids (under normal conditions)
- Urea: ~50% reabsorbed passively
- **Iso-osmotic reabsorption** (water follows solute, osmolality unchanged)

### Key Transporters in PCT
- **Na+/glucose cotransporter (SGLT2)**: S1 segment (90% glucose), SGLT1 in S3 (10%)
- **Na+/H+ exchanger (NHE3)**: Na+ reabsorption + H+ secretion + HCO3- reabsorption
- **Na+/K+ ATPase**: Basolateral membrane (drives all Na+ reabsorption)

## Loop of Henle
### Descending Limb
- Permeable to **water**, impermeable to solutes
- Water is reabsorbed --> tubular fluid becomes concentrated

### Ascending Limb (Thick)
- Impermeable to **water**
- **Na+/K+/2Cl- cotransporter (NKCC2)**: Apical membrane
- Reabsorbs 25% of filtered NaCl
- Target of **loop diuretics (furosemide)**
- Creates the **corticomedullary osmotic gradient**

## Distal Convoluted Tubule (DCT)
- **Na+/Cl- cotransporter (NCC)**: Apical membrane
- Reabsorbs ~5% of filtered NaCl
- Target of **thiazide diuretics**
- Site of Ca2+ reabsorption under PTH influence

## Collecting Duct
- **Principal cells**: Na+ reabsorption (ENaC), K+ secretion - regulated by **aldosterone**
- **Intercalated cells**: H+ secretion (Type A) or HCO3- secretion (Type B)
- **Aquaporin-2 (AQP2)**: Water channels inserted under **ADH** influence

## Transport Maximum (Tm)
- Maximum rate of reabsorption for a substance
- **Glucose Tm**: ~375 mg/min (male), ~300 mg/min (female)
- **Renal threshold for glucose**: Plasma glucose ~180 mg/dL (above which glycosuria occurs)
- **Splay**: Glucose appears in urine before true Tm due to nephron heterogeneity`,
        mnemonics: [
          { text: "PCT reabsorbs 65% of everything + ALL glucose and AAs", explanation: "PCT is the workhorse: 65% Na, water, K, Cl, HCO3; 100% glucose and amino acids" },
          { text: "Descending = Dilutes solutes (Water permeable), Ascending = Adds concentration (Water impermeable)", explanation: "Descending limb lets water out (concentrates), Ascending limb reabsorbs NaCl without water (dilutes)" }
        ],
        keyPoints: ["PCT reabsorbs 65% of most filtered substances, 100% glucose/amino acids", "Thick ascending limb: NKCC2 (target of furosemide), reabsorbs 25% NaCl", "DCT: NCC (target of thiazides), reabsorbs 5% NaCl", "Collecting duct: aldosterone (ENaC) and ADH (AQP2)", "Glucose Tm ~375 mg/min; renal threshold ~180 mg/dL"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 28 - Tubular Reabsorption & Secretion", edition: "14th" }] },
      { layer: 2, slug: "tubular-reabsorption-mechanism", title: "Tubular Reabsorption & Secretion - Mechanism", estimatedMinutes: 30,
        summary: "Detailed transport mechanisms in each nephron segment, glucose titration curve, and secretory mechanisms for H+, K+, and organic substances.",
        contentMd: `# Detailed Transport Mechanisms

## Glucose Handling

### Glucose Titration Curve
- Below Tm: All glucose reabsorbed, clearance = 0
- **Threshold (~180 mg/dL)**: Glucose first appears in urine
- **Splay**: Region between threshold and Tm (due to nephron heterogeneity)
- Above Tm: Linear relationship between plasma glucose and urinary glucose excretion

### SGLT2 Inhibitors (Gliflozins)
- Block SGLT2 in PCT --> glycosuria --> lower blood glucose
- Dapagliflozin, empagliflozin
- Also have cardioprotective and renoprotective effects

## Bicarbonate Reabsorption (PCT)
1. Filtered HCO3- combines with secreted H+ --> H2CO3
2. Carbonic anhydrase (luminal surface) converts H2CO3 --> CO2 + H2O
3. CO2 diffuses into cell
4. Intracellular carbonic anhydrase: CO2 + H2O --> H2CO3 --> HCO3- + H+
5. HCO3- exits basolateral membrane (Na+/HCO3- cotransporter)
6. H+ secreted again (NHE3)
- **Acetazolamide** blocks carbonic anhydrase --> HCO3- loss --> metabolic acidosis

## Potassium Handling
### Reabsorption
- PCT: 65% (paracellular, passive)
- Thick ascending limb: 25% (NKCC2)

### Secretion (Collecting duct - regulated)
- **Principal cells**: K+ secreted via ROMK and BK channels
- Stimulated by: Aldosterone, high K+ diet, alkalosis, high tubular flow
- **Aldosterone**: Increases ENaC (Na+ reabsorption) + ROMK (K+ secretion)
- This is why hyperaldosteronism causes hypokalemia

## Organic Acid/Base Secretion (PCT)
- **OAT (Organic Anion Transporters)**: Secrete PAH, penicillin, uric acid, diuretics
- **OCT (Organic Cation Transporters)**: Secrete creatinine, dopamine
- Probenecid blocks OAT --> reduces penicillin excretion (historically used to prolong penicillin effect)

## Segment-Wise Summary

| Segment | % Na+ Reabsorbed | Transporter | Diuretic Target |
|---------|------------------|-------------|-----------------|
| PCT | 65% | NHE3, SGLT2 | Acetazolamide |
| TAL | 25% | NKCC2 | Furosemide |
| DCT | 5% | NCC | Thiazides |
| CD | 1-3% | ENaC | Spironolactone, Amiloride |`,
        mnemonics: [
          { text: "65-25-5-3 for Na reabsorption", explanation: "PCT=65%, TAL=25%, DCT=5%, CD=3% of Na+ reabsorption in each nephron segment" },
          { text: "FAT-SAN for diuretics and their targets", explanation: "Furosemide=Ascending limb, Thiazides=distal, Spironolactone/Amiloride=collecting duct, Acetazolamide=PCT, N/A" }
        ],
        keyPoints: ["Glucose threshold 180 mg/dL, Tm 375 mg/min", "SGLT2 inhibitors cause glycosuria (new diabetic drugs)", "Acetazolamide blocks carbonic anhydrase in PCT", "Aldosterone: increases Na+ reabsorption + K+ secretion", "Na+ reabsorption: 65% PCT, 25% TAL, 5% DCT, 3% CD"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 28-29", edition: "14th" }] },
      { layer: 3, slug: "tubular-reabsorption-clinical", title: "Tubular Reabsorption & Secretion - Clinical", estimatedMinutes: 20,
        summary: "Clinical conditions related to tubular dysfunction including Fanconi syndrome, renal tubular acidosis, Bartter and Gitelman syndromes, and diuretic mechanisms.",
        contentMd: `# Clinical Applications

## Fanconi Syndrome (Generalized PCT Dysfunction)
- Defect in PCT reabsorption
- Features: Glycosuria (normal blood glucose), aminoaciduria, phosphaturia, bicarbonaturia, Type 2 RTA
- Causes: Wilson disease, cystinosis, multiple myeloma, tenofovir (HIV drug)

## Renal Tubular Acidosis (RTA)

| Type | Defect | Urine pH | Serum K+ | Mechanism |
|------|--------|----------|----------|-----------|
| Type 1 (Distal) | Cannot secrete H+ in CD | > 5.5 | Low | Intercalated cell dysfunction |
| Type 2 (Proximal) | Cannot reabsorb HCO3- in PCT | < 5.5 (after bicarb load) | Low | PCT HCO3- wasting |
| Type 4 | Aldosterone deficiency/resistance | < 5.5 | High | Reduced Na+ reabsorption, reduced K+ and H+ secretion |

## Bartter Syndrome vs Gitelman Syndrome

| Feature | Bartter | Gitelman |
|---------|---------|----------|
| Defect | NKCC2 (TAL) | NCC (DCT) |
| Mimics | Furosemide use | Thiazide use |
| Calcium | Hypercalciuria | Hypocalciuria |
| Magnesium | Normal | Low (hypomagnesemia) |
| Common feature | Metabolic alkalosis + hypokalemia | Metabolic alkalosis + hypokalemia |

## Diuretic Mechanisms and Side Effects

| Diuretic | Site | Side Effects |
|----------|------|-------------|
| Acetazolamide | PCT (CA inhibitor) | Metabolic acidosis, hypokalemia |
| Furosemide | TAL (NKCC2 block) | Hypokalemia, hypocalcemia, ototoxicity |
| Thiazides | DCT (NCC block) | Hypokalemia, hypercalcemia, hyperuricemia |
| Spironolactone | CD (aldosterone antagonist) | Hyperkalemia, gynecomastia |
| Amiloride | CD (ENaC block) | Hyperkalemia |

## Liddle Syndrome
- Gain-of-function mutation in ENaC
- Mimics hyperaldosteronism but aldosterone is LOW
- Hypertension + hypokalemia + metabolic alkalosis
- Treatment: Amiloride (NOT spironolactone)

> **Clinical Pearl**: SGLT2 inhibitors are now recommended in Indian guidelines for diabetic kidney disease and heart failure with reduced EF, beyond their glucose-lowering effect.`,
        mnemonics: [
          { text: "Bartter = Big loop (TAL), Gitelman = Gentle distal (DCT)", explanation: "Bartter syndrome mimics furosemide (TAL/NKCC2 defect), Gitelman mimics thiazides (DCT/NCC defect)" }
        ],
        keyPoints: ["Fanconi syndrome: generalized PCT dysfunction", "Type 1 RTA: cannot acidify urine (pH > 5.5), hypokalemia", "Bartter = NKCC2 defect (TAL), Gitelman = NCC defect (DCT)", "Thiazides cause hypercalcemia; furosemide causes hypocalcemia", "Liddle syndrome: ENaC gain-of-function, treat with amiloride"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 28-30", edition: "14th" }, { book: "Harrison's Principles of Internal Medicine", chapter: "Ch 309 - Tubulopathies", edition: "21st" }] },
      { layer: 4, slug: "tubular-reabsorption-exam", title: "Tubular Reabsorption & Secretion - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield exam facts on tubular function for NEXT and NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners
- PCT reabsorbs: **65%** of filtered Na+, water, K+, Cl-, HCO3-
- Glucose renal threshold: **180 mg/dL**
- Glucose Tm: **375 mg/min (male)**
- SGLT2 location: **PCT S1 segment** (90% glucose reabsorption)
- NKCC2 blocked by: **Furosemide** (ascending limb)
- NCC blocked by: **Thiazides** (DCT)
- ENaC regulated by: **Aldosterone** (collecting duct)
- AQP2 regulated by: **ADH** (collecting duct)
- Bartter = Mimics: **Furosemide** (NKCC2 defect)
- Gitelman = Mimics: **Thiazides** (NCC defect)
- Type 1 RTA: Urine pH **> 5.5** (cannot acidify)
- Type 4 RTA: **Hyperkalemia** (aldosterone deficiency)
- Fanconi syndrome: **Generalized PCT dysfunction**
- Carbonic anhydrase inhibitor: **Acetazolamide**
- Thiazide effect on Ca: **Hypercalcemia** (increased reabsorption)
- Furosemide effect on Ca: **Hypocalcemia** (decreased reabsorption)
- Liddle syndrome treatment: **Amiloride** (ENaC blocker)
- K+ secretion stimulated by: **Aldosterone, alkalosis, high flow rate**

## Diuretic Potency (by Na+ reabsorption blocked)
Furosemide (25%) > Thiazides (5%) > Spironolactone (3%) > Acetazolamide`,
        mnemonics: [
          { text: "Thiazides = hyperCalcemia, Furosemide = hyperCalciuria", explanation: "Thiazides enhance Ca reabsorption in DCT (hypercalcemia); Furosemide inhibits Ca reabsorption in TAL (hypocalcemia)" }
        ],
        keyPoints: ["65-25-5-3 rule for Na reabsorption", "Glucose threshold 180, Tm 375", "Bartter = furosemide-like; Gitelman = thiazide-like", "Thiazides = hypercalcemia; Furosemide = hypocalcemia"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 28-29", edition: "14th" }] },
      { layer: 5, slug: "tubular-reabsorption-recall", title: "Tubular Reabsorption & Secretion - Active Recall", estimatedMinutes: 10,
        summary: "Self-test flashcards for tubular reabsorption and secretion.",
        contentMd: `# Active Recall

**Q1:** What percentage of filtered Na+ is reabsorbed in the PCT?
> 65%

**Q2:** What transporter in the thick ascending limb is blocked by furosemide?
> NKCC2 (Na+/K+/2Cl- cotransporter)

**Q3:** What is the renal threshold for glucose?
> ~180 mg/dL (above which glucose appears in urine)

**Q4:** Which hormone inserts AQP2 channels in the collecting duct?
> ADH (vasopressin)

**Q5:** Bartter syndrome mimics which diuretic? Gitelman?
> Bartter = furosemide (NKCC2 defect); Gitelman = thiazides (NCC defect)

**Q6:** What is the key difference in calcium handling between Bartter and Gitelman?
> Bartter: hypercalciuria; Gitelman: hypocalciuria

**Q7:** Type 1 RTA - what is the hallmark finding?
> Urine pH > 5.5 (cannot acidify urine)

**Q8:** Which RTA type causes hyperkalemia?
> Type 4 (aldosterone deficiency/resistance)

**Q9:** What is Fanconi syndrome?
> Generalized PCT dysfunction with glycosuria, aminoaciduria, phosphaturia, bicarbonaturia

**Q10:** Why do thiazides cause hypercalcemia?
> They enhance Ca2+ reabsorption in the DCT (via Na/Ca exchange mechanism)`,
        mnemonics: [],
        keyPoints: ["10 recall questions covering tubular transport, clinical syndromes, and diuretics"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 28-29", edition: "14th" }] },
    ],
  },

  // ─── Topic 3: Concentration & Dilution of Urine ───────────────
  {
    topicCode: "PY-MOD-05-TOP-03",
    layers: [
      { layer: 1, slug: "urine-concentration-foundation", title: "Concentration & Dilution of Urine - Foundation", estimatedMinutes: 20,
        summary: "The kidney can produce urine ranging from 50 to 1200 mOsm/L. The countercurrent mechanism in the loop of Henle creates the medullary osmotic gradient, and ADH controls final urine concentration.",
        contentMd: `# Concentration & Dilution of Urine

## Key Concepts
- Plasma osmolality: **~290 mOsm/L**
- Urine can range from **50 mOsm/L** (maximally dilute) to **1200 mOsm/L** (maximally concentrated)
- Requires: (1) Medullary osmotic gradient, (2) ADH, (3) Aquaporins

## Medullary Osmotic Gradient
- Cortex: 300 mOsm/L
- Outer medulla: 300-600 mOsm/L
- Inner medulla: 600-1200 mOsm/L
- Created by **countercurrent multiplier** (loop of Henle)
- Maintained by **countercurrent exchanger** (vasa recta)
- Contributed by: NaCl (from ascending limb) and urea (from collecting duct)

## Countercurrent Multiplier (Loop of Henle)
1. Thick ascending limb (TAL) actively pumps NaCl out (NKCC2) --> dilutes tubular fluid
2. Interstitium becomes hypertonic
3. Water leaves descending limb passively (aquaporin-1) --> concentrates tubular fluid
4. This single effect is multiplied along the loop length
5. Result: Progressive increase in medullary osmolality from 300 to 1200

## ADH (Antidiuretic Hormone / Vasopressin)
- Produced in: **Supraoptic and paraventricular nuclei** (hypothalamus)
- Stored and released from: **Posterior pituitary**
- Acts on: **V2 receptors** in collecting duct principal cells
- Mechanism: V2 --> cAMP --> AQP2 insertion into apical membrane
- Increases water reabsorption --> concentrated urine

## Aquaporins
| Type | Location | Regulation |
|------|----------|-----------|
| AQP1 | PCT, descending limb | Constitutive (always present) |
| AQP2 | Collecting duct (apical) | ADH-regulated (key target) |
| AQP3 | Collecting duct (basolateral) | Constitutive |
| AQP4 | Collecting duct (basolateral) | Constitutive |`,
        mnemonics: [
          { text: "ADH = AQP2 Delivery Here", explanation: "ADH inserts AQP2 (aquaporin-2) channels in the apical membrane of collecting duct principal cells" },
          { text: "Ascending = Always actively pumping salt OUT (diluting)", explanation: "Thick ascending limb actively reabsorbs NaCl but is impermeable to water, creating dilute tubular fluid" }
        ],
        keyPoints: ["Urine concentration range: 50-1200 mOsm/L", "Countercurrent multiplier (loop of Henle) creates medullary gradient", "ADH acts via V2 receptors to insert AQP2 in collecting duct", "Medullary gradient: 300 (cortex) to 1200 (papilla) mOsm/L", "Vasa recta preserves gradient (countercurrent exchanger)"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 29 - Urine Concentration", edition: "14th" }] },
      { layer: 2, slug: "urine-concentration-mechanism", title: "Concentration & Dilution of Urine - Mechanism", estimatedMinutes: 30,
        summary: "Detailed mechanisms of countercurrent multiplication, role of urea recycling, vasa recta function, free water clearance, and osmolality regulation.",
        contentMd: `# Detailed Mechanisms

## Step-by-Step Countercurrent Multiplication
1. Starting: All segments at 300 mOsm/L
2. TAL pumps NaCl into interstitium --> TAL fluid drops to 200, interstitium rises to 400
3. Water leaves descending limb (equilibrates with interstitium) --> DL fluid rises to 400
4. New fluid enters loop, previous fluid moves down
5. TAL again creates 200 mOsm difference --> interstitium now 500
6. Process repeats, multiplying the gradient along the length
7. Final: Papillary tip reaches 1200 mOsm/L

## Urea Recycling
- **50% of medullary osmolality** is due to urea
- In inner medullary collecting duct: ADH activates urea transporters (UT-A1)
- Urea diffuses into medullary interstitium --> contributes to hyperosmolality
- Urea is then recycled back into thin ascending limb --> re-enters loop
- This urea recycling is critical for maximum urine concentration

## Vasa Recta (Countercurrent Exchanger)
- Hairpin loop capillaries running parallel to loop of Henle
- Blood flows SLOWLY through medulla
- Descending vasa recta: Loses water, gains solute (equilibrates with hypertonic medulla)
- Ascending vasa recta: Gains water, loses solute (returns to cortex near-isotonic)
- **Does NOT create** the gradient, only PRESERVES it
- If vasa recta flow is too fast --> washes out medullary gradient

## Free Water Clearance (CH2O)
- **CH2O = V - Cosm** (V = urine flow rate, Cosm = osmolar clearance)
- Cosm = (Uosm x V) / Posm
- **Positive CH2O**: Dilute urine (excreting free water) - ADH absent
- **Negative CH2O (TcH2O)**: Concentrated urine (retaining free water) - ADH present
- **Zero CH2O**: Isotonic urine

## Diluting Segments
- Thick ascending limb = **"Diluting segment"** (impermeable to water, removes NaCl)
- Early DCT also contributes to dilution
- Without ADH: Dilute fluid from TAL remains dilute through CD --> dilute urine (50 mOsm/L)

## Regulation of ADH Release
### Stimuli for ADH release (increase)
- Increased plasma osmolality (>285 mOsm/L) - osmoreceptors in hypothalamus
- Decreased blood volume/pressure - baroreceptors
- Angiotensin II, nausea, pain, stress

### Stimuli for ADH suppression
- Decreased osmolality, alcohol, ANP, cold exposure`,
        mnemonics: [
          { text: "DIVA for ADH stimuli", explanation: "Decreased volume, Increased osmolality, Vomiting/nausea, Angiotensin II - all stimulate ADH release" }
        ],
        keyPoints: ["TAL creates 200 mOsm single effect, multiplied along loop length", "Urea contributes 50% of medullary osmolality", "Vasa recta preserves gradient (does not create it)", "Free water clearance: positive = dilute urine, negative = concentrated", "ADH released by increased osmolality and decreased volume"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 29", edition: "14th" }] },
      { layer: 3, slug: "urine-concentration-clinical", title: "Concentration & Dilution of Urine - Clinical", estimatedMinutes: 20,
        summary: "Clinical conditions including diabetes insipidus (central and nephrogenic), SIADH, and water deprivation test.",
        contentMd: `# Clinical Applications

## Diabetes Insipidus (DI)

### Central DI
- **Cause**: Deficiency of ADH (hypothalamic/pituitary damage)
- Causes: Surgery, trauma, tumors (craniopharyngioma), idiopathic
- Features: Polyuria (>3 L/day), polydipsia, dilute urine (Uosm < 300)
- Serum Na+: Normal or high
- Treatment: **Desmopressin (DDAVP)** - synthetic ADH analog (V2 agonist)

### Nephrogenic DI
- **Cause**: Kidney resistance to ADH
- Causes: **Lithium** (most common drug cause), hypercalcemia, hypokalemia, genetic (V2R or AQP2 mutation)
- Features: Same as central DI
- Does NOT respond to desmopressin
- Treatment: **Thiazide diuretics** (paradoxical - reduce urine output by decreasing GFR and enhancing PCT reabsorption) + amiloride (for lithium-induced)

## Water Deprivation Test (Miller-Moses Test)

| Response | Central DI | Nephrogenic DI | Primary Polydipsia |
|----------|-----------|----------------|-------------------|
| After water deprivation | Uosm stays low | Uosm stays low | Uosm increases (>600) |
| After desmopressin | Uosm increases (>50%) | Uosm stays low (<50% rise) | No significant change |

## SIADH (Syndrome of Inappropriate ADH)
- Excess ADH --> excessive water retention --> dilutional hyponatremia
- Urine is inappropriately concentrated (Uosm > 100)
- Euvolemic hyponatremia
- Causes: CNS disorders, lung diseases (small cell carcinoma), drugs (SSRIs, carbamazepine, cyclophosphamide)
- Treatment: Fluid restriction, hypertonic saline (severe), vaptans (tolvaptan - V2 antagonist)

## Osmotic Diuresis
- Unabsorbed solute in tubules holds water --> prevents concentration
- Examples: Glucosuria in DKA, mannitol administration
- Results in large volumes of isotonic/slightly hypotonic urine

> **Clinical Pearl**: Lithium is widely used in Indian psychiatry for bipolar disorder. Always monitor renal function and urine concentrating ability. Nephrogenic DI from lithium may be irreversible.`,
        mnemonics: [
          { text: "Central responds to DDAVP, Nephrogenic does NOT", explanation: "Central DI has ADH deficiency (responds to replacement), Nephrogenic DI has ADH resistance (does not respond)" }
        ],
        keyPoints: ["Central DI: ADH deficiency, responds to desmopressin", "Nephrogenic DI: ADH resistance, lithium is commonest drug cause", "SIADH: dilutional hyponatremia, euvolemic, Uosm > 100", "Water deprivation test differentiates DI types", "Nephrogenic DI treated with thiazides (paradoxically reduce urine output)"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 29", edition: "14th" }, { book: "Harrison's", chapter: "Ch 374 - DI", edition: "21st" }] },
      { layer: 4, slug: "urine-concentration-exam", title: "Concentration & Dilution of Urine - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield exam facts on urine concentration and dilution for NEXT and NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners
- Maximum urine osmolality: **1200 mOsm/L**
- Minimum urine osmolality: **50 mOsm/L**
- ADH produced in: **Supraoptic and paraventricular nuclei**
- ADH stored in: **Posterior pituitary**
- ADH receptor in collecting duct: **V2** (cAMP pathway)
- ADH target channel: **Aquaporin-2 (AQP2)**
- Constitutive aquaporin in descending limb: **AQP1**
- Diluting segment: **Thick ascending limb**
- Urea contributes to: **50% of medullary osmolality**
- Countercurrent multiplier: **Loop of Henle**
- Countercurrent exchanger: **Vasa recta**
- Central DI treatment: **Desmopressin (DDAVP)**
- Nephrogenic DI commonest drug cause: **Lithium**
- Nephrogenic DI treatment: **Thiazide + low salt diet**
- SIADH hallmark: **Euvolemic hyponatremia with concentrated urine**
- SIADH treatment: **Fluid restriction, tolvaptan (V2 antagonist)**
- Alcohol effect on ADH: **Inhibits** (diuresis)
- Positive free water clearance: **Dilute urine (no ADH)**

## Water Deprivation Test Summary
- Central DI: Dilute --> Concentrates with DDAVP (>50% rise)
- Nephrogenic DI: Dilute --> Stays dilute with DDAVP (<50% rise)
- Psychogenic polydipsia: Concentrates with deprivation alone`,
        mnemonics: [
          { text: "50-1200 for urine range (50 dilute to 1200 concentrated)", explanation: "Kidneys can dilute to 50 mOsm/L (no ADH) or concentrate to 1200 mOsm/L (max ADH)" }
        ],
        keyPoints: ["AQP2 is the ADH-regulated channel", "Urea = 50% of medullary gradient", "Central DI responds to DDAVP; nephrogenic does not", "SIADH: euvolemic hyponatremia"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 29", edition: "14th" }] },
      { layer: 5, slug: "urine-concentration-recall", title: "Concentration & Dilution of Urine - Active Recall", estimatedMinutes: 10,
        summary: "Self-test flashcards for urine concentration and dilution.",
        contentMd: `# Active Recall

**Q1:** What is the range of urine osmolality the kidney can produce?
> 50 mOsm/L (maximally dilute) to 1200 mOsm/L (maximally concentrated)

**Q2:** What creates the medullary osmotic gradient?
> Countercurrent multiplier system (loop of Henle), specifically NaCl reabsorption by thick ascending limb

**Q3:** What percentage of medullary osmolality is contributed by urea?
> 50%

**Q4:** Where is ADH produced and stored?
> Produced in supraoptic and paraventricular nuclei of hypothalamus; stored in posterior pituitary

**Q5:** Which aquaporin is regulated by ADH?
> AQP2 (inserted into apical membrane of collecting duct principal cells)

**Q6:** What is the role of vasa recta?
> Countercurrent exchanger that preserves (does not create) the medullary osmotic gradient

**Q7:** What is the most common drug cause of nephrogenic DI?
> Lithium

**Q8:** How does the water deprivation test differentiate central from nephrogenic DI?
> Central DI: urine concentrates after desmopressin (>50% rise); Nephrogenic DI: no response to desmopressin

**Q9:** What is SIADH and its hallmark finding?
> Excess ADH causing euvolemic hyponatremia with inappropriately concentrated urine (Uosm > 100)

**Q10:** Why do thiazides help in nephrogenic DI?
> They cause mild volume depletion, enhancing PCT reabsorption and reducing water delivery to collecting duct`,
        mnemonics: [],
        keyPoints: ["10 recall questions covering countercurrent mechanism, ADH, DI types, and SIADH"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 29", edition: "14th" }] },
    ],
  },

  // ─── Topic 4: Acid-Base Balance ───────────────────────────────
  {
    topicCode: "PY-MOD-05-TOP-04",
    layers: [
      { layer: 1, slug: "acid-base-foundation", title: "Acid-Base Balance - Foundation", estimatedMinutes: 20,
        summary: "The body maintains blood pH at 7.35-7.45 through buffers, lungs, and kidneys. The Henderson-Hasselbalch equation relates pH, HCO3-, and PCO2.",
        contentMd: `# Acid-Base Balance

## Normal Values
- Arterial pH: **7.35-7.45** (mean 7.4)
- PaCO2: **35-45 mmHg** (mean 40)
- HCO3-: **22-26 mEq/L** (mean 24)
- Acidemia: pH < 7.35 | Alkalemia: pH > 7.45

## Henderson-Hasselbalch Equation
**pH = 6.1 + log (HCO3- / 0.03 x PCO2)**
- pH = 6.1 + log (24 / 0.03 x 40) = 6.1 + log (24/1.2) = 6.1 + log 20 = 6.1 + 1.3 = **7.4**
- Ratio of HCO3-/dissolved CO2 = 20:1 maintains pH at 7.4

## Body Buffer Systems (in order of speed)

### 1. Chemical Buffers (Instantaneous)
- **Bicarbonate** (HCO3-/CO2): Most important ECF buffer
- **Phosphate** (HPO4/H2PO4): Important in urine and ICF
- **Protein** (including Hemoglobin): Important ICF buffer
- Hemoglobin: Buffering in RBCs (histidine residues)

### 2. Respiratory Compensation (Minutes to Hours)
- Acidosis --> Hyperventilation --> Blow off CO2 --> pH rises
- Alkalosis --> Hypoventilation --> Retain CO2 --> pH falls

### 3. Renal Compensation (Hours to Days) - Most powerful
- Kidneys excrete H+ and regenerate HCO3-
- 3 mechanisms: (1) HCO3- reabsorption, (2) Titratable acid (phosphate buffer), (3) Ammonium (NH4+) excretion

## Primary Disorders

| Disorder | pH | Primary Change | Compensation |
|----------|-----|---------------|-------------|
| Metabolic Acidosis | < 7.35 | HCO3- decreased | PCO2 decreases (hyperventilation) |
| Metabolic Alkalosis | > 7.45 | HCO3- increased | PCO2 increases (hypoventilation) |
| Respiratory Acidosis | < 7.35 | PCO2 increased | HCO3- increases (renal) |
| Respiratory Alkalosis | > 7.45 | PCO2 decreased | HCO3- decreases (renal) |`,
        mnemonics: [
          { text: "ROME: Respiratory Opposite, Metabolic Equal", explanation: "In Respiratory disorders: pH and CO2 move in Opposite directions. In Metabolic: pH and HCO3- move in the Same (Equal) direction" },
          { text: "Normal 7.4 = 24 bicarb / 40 CO2 ratio of 20:1", explanation: "Henderson-Hasselbalch: pH 7.4 maintained when HCO3-/dissolved CO2 = 20:1 (24 / 1.2)" }
        ],
        keyPoints: ["Normal pH 7.35-7.45, PaCO2 35-45, HCO3- 22-26", "Bicarbonate is the most important ECF buffer", "Respiratory compensation: fast (minutes); Renal: slow but most powerful (days)", "ROME: Respiratory Opposite, Metabolic Equal", "20:1 ratio of HCO3-/CO2 maintains pH 7.4"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 30-31 - Acid-Base Regulation", edition: "14th" }] },
      { layer: 2, slug: "acid-base-mechanism", title: "Acid-Base Balance - Mechanism", estimatedMinutes: 30,
        summary: "Detailed mechanisms of renal acid-base regulation, compensation rules, anion gap calculation, and mixed acid-base disorders.",
        contentMd: `# Detailed Mechanisms

## Renal Acid-Base Handling

### HCO3- Reabsorption (PCT - 80%, TAL - 15%, CD - 5%)
- H+ secreted via NHE3 (PCT) or H+-ATPase (CD)
- H+ combines with filtered HCO3- --> H2CO3 --> CO2 + H2O (carbonic anhydrase)
- CO2 enters cell --> regenerates HCO3- --> exits basolateral side

### New HCO3- Generation
1. **Titratable acid**: H+ excreted on phosphate buffer (HPO4^2- --> H2PO4-)
2. **Ammonium (NH4+)**: Glutamine metabolism in PCT --> NH3 + H+ --> NH4+
   - Most important mechanism for excreting large acid loads
   - Upregulated in chronic acidosis

## Compensation Rules (Winter's Formula and others)

### Metabolic Acidosis
- Expected PCO2 = (1.5 x HCO3-) + 8 (plus/minus 2) -- **Winter's formula**

### Metabolic Alkalosis
- Expected PCO2 = (0.7 x HCO3-) + 21 (plus/minus 2)

### Respiratory Acidosis
- Acute: HCO3- rises 1 mEq/L per 10 mmHg rise in PCO2
- Chronic: HCO3- rises **3.5 mEq/L** per 10 mmHg rise in PCO2

### Respiratory Alkalosis
- Acute: HCO3- falls 2 mEq/L per 10 mmHg fall in PCO2
- Chronic: HCO3- falls **5 mEq/L** per 10 mmHg fall in PCO2

## Anion Gap
**AG = Na+ - (Cl- + HCO3-)** = Normal: **12 (plus/minus 2) mEq/L**

### High Anion Gap Metabolic Acidosis (HAGMA)
Mnemonic: **MUDPILES**
- Methanol
- Uremia
- Diabetic ketoacidosis (DKA)
- Propylene glycol / Paraldehyde
- Isoniazid / Iron
- Lactic acidosis
- Ethylene glycol
- Salicylates

### Normal Anion Gap (Hyperchloremic) Metabolic Acidosis (NAGMA)
Mnemonic: **HARDUPS**
- Hyperalimentation
- Acetazolamide (carbonic anhydrase inhibitor)
- Renal tubular acidosis
- Diarrhea (most common)
- Ureteral diversion
- Pancreatic fistula
- Saline (excessive NS infusion)

## Delta-Delta (Delta Ratio)
- Delta AG / Delta HCO3-
- < 1: Mixed HAGMA + NAGMA
- 1-2: Pure HAGMA
- > 2: HAGMA + metabolic alkalosis`,
        mnemonics: [
          { text: "MUDPILES for high AG acidosis", explanation: "Methanol, Uremia, DKA, Propylene glycol, Isoniazid, Lactic acidosis, Ethylene glycol, Salicylates" },
          { text: "HARDUPS for normal AG acidosis", explanation: "Hyperalimentation, Acetazolamide, RTA, Diarrhea, Ureteral diversion, Pancreatic fistula, Saline excess" }
        ],
        keyPoints: ["Anion gap = Na - (Cl + HCO3) = 12 +/- 2", "MUDPILES for HAGMA, HARDUPS for NAGMA", "Winter's formula: Expected PCO2 = 1.5(HCO3) + 8", "Delta ratio: <1 = mixed HAGMA+NAGMA, 1-2 = pure HAGMA, >2 = HAGMA+metabolic alkalosis", "NH4+ excretion is the most important mechanism for excreting acid loads"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 30-31", edition: "14th" }] },
      { layer: 3, slug: "acid-base-clinical", title: "Acid-Base Balance - Clinical", estimatedMinutes: 20,
        summary: "Clinical approach to ABG interpretation, common clinical scenarios, and management of acid-base disorders.",
        contentMd: `# Clinical Applications

## Step-by-Step ABG Interpretation
1. **Look at pH**: Acidemia (<7.35) or Alkalemia (>7.45)?
2. **Identify primary disorder**: Which parameter explains the pH change?
   - If HCO3- and pH change in SAME direction --> Metabolic
   - If PCO2 and pH change in OPPOSITE direction --> Respiratory
3. **Check compensation**: Use compensation formulas
4. **If metabolic acidosis**: Calculate anion gap
5. **If HAGMA**: Calculate delta-delta ratio for mixed disorders

## Common Clinical Scenarios

### DKA (Diabetic Ketoacidosis)
- HAGMA (ketoacids: beta-hydroxybutyrate, acetoacetate)
- pH low, HCO3- low, PCO2 low (respiratory compensation = Kussmaul)
- Anion gap elevated
- Treatment: IV fluids (NS), insulin, K+ replacement

### Chronic Kidney Disease
- HAGMA initially (retained organic acids) --> NAGMA as progresses (reduced NH4+ excretion)

### Vomiting (Pyloric Stenosis)
- Loss of HCl --> metabolic alkalosis
- **Paradoxical aciduria**: Despite alkalosis, kidneys excrete H+ (to reabsorb Na+ due to volume depletion)
- Treatment: Normal saline (volume repletion)

### Diarrhea
- Loss of HCO3- --> NAGMA
- Most common cause of normal AG metabolic acidosis worldwide

### Salicylate Poisoning
- Early: Respiratory alkalosis (direct stimulation of respiratory center)
- Late: HAGMA (metabolic acidosis from salicylic acid)
- Mixed respiratory alkalosis + metabolic acidosis

## Urine Anion Gap (for NAGMA)
- UAG = (Na+ + K+) - Cl-
- **Negative UAG**: Appropriate renal response (GI loss like diarrhea) - NH4+ present
- **Positive UAG**: Renal cause (RTA) - kidney cannot excrete NH4+

> **Clinical Pearl**: In Indian emergency departments, DKA is the most common cause of HAGMA. Always check blood glucose, ketones, and calculate anion gap in any patient with metabolic acidosis.`,
        mnemonics: [
          { text: "Positive UAG = Problem in Kidneys (RTA)", explanation: "Positive urine anion gap indicates kidneys cannot excrete NH4+ appropriately - points to RTA as the cause of NAGMA" }
        ],
        keyPoints: ["5-step ABG interpretation approach", "DKA: HAGMA with Kussmaul breathing", "Diarrhea: most common cause of NAGMA worldwide", "Paradoxical aciduria in vomiting (volume depletion)", "Urine anion gap: negative = GI loss, positive = RTA"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 30-31", edition: "14th" }, { book: "Harrison's", chapter: "Ch 51 - Acidosis & Alkalosis", edition: "21st" }] },
      { layer: 4, slug: "acid-base-exam", title: "Acid-Base Balance - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield exam facts on acid-base balance for NEXT and NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners
- Normal arterial pH: **7.35-7.45**
- Normal PaCO2: **35-45 mmHg**
- Normal HCO3-: **22-26 mEq/L**
- Most important ECF buffer: **Bicarbonate**
- Most important ICF buffer: **Proteins (including Hb)**
- Normal anion gap: **12 +/- 2 mEq/L**
- Henderson-Hasselbalch: **pH = 6.1 + log(HCO3-/0.03xPCO2)**
- Winter's formula: **Expected PCO2 = 1.5(HCO3-) + 8**
- HAGMA causes: **MUDPILES**
- NAGMA causes: **HARDUPS** (most common = diarrhea)
- DKA: **HAGMA** with Kussmaul breathing
- Vomiting: **Metabolic alkalosis** with paradoxical aciduria
- Most important mechanism for acid excretion: **NH4+ (ammonium)**
- Chronic resp acidosis compensation: HCO3- rises **3.5 mEq/L per 10 mmHg PCO2**
- Salicylate poisoning: **Mixed respiratory alkalosis + HAGMA**
- Negative urine AG in NAGMA suggests: **GI loss (diarrhea)**
- Positive urine AG in NAGMA suggests: **RTA**
- Delta ratio > 2: **HAGMA + metabolic alkalosis**

## ABG Quick Analysis Template
1. pH --> acidemia or alkalemia?
2. Primary? (ROME rule)
3. Compensation adequate? (use formulas)
4. Anion gap (if metabolic acidosis)
5. Delta-delta (if HAGMA)`,
        mnemonics: [],
        keyPoints: ["MUDPILES for HAGMA, HARDUPS for NAGMA", "Winter's formula for expected PCO2", "Delta ratio for mixed disorders", "Urine AG differentiates renal vs GI cause of NAGMA"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 30-31", edition: "14th" }] },
      { layer: 5, slug: "acid-base-recall", title: "Acid-Base Balance - Active Recall", estimatedMinutes: 10,
        summary: "Self-test flashcards for acid-base balance.",
        contentMd: `# Active Recall

**Q1:** What is the normal anion gap and its formula?
> AG = Na+ - (Cl- + HCO3-) = 12 +/- 2 mEq/L

**Q2:** Name causes of high AG metabolic acidosis (MUDPILES).
> Methanol, Uremia, DKA, Propylene glycol, Isoniazid, Lactic acidosis, Ethylene glycol, Salicylates

**Q3:** What is Winter's formula?
> Expected PCO2 = 1.5 x HCO3- + 8 (for metabolic acidosis compensation)

**Q4:** What is paradoxical aciduria?
> Kidneys excrete H+ despite metabolic alkalosis, due to volume depletion prioritizing Na+ reabsorption (seen in vomiting)

**Q5:** Most common cause of normal AG metabolic acidosis?
> Diarrhea (HCO3- loss)

**Q6:** How does urine anion gap help in NAGMA?
> Negative UAG = GI loss (NH4+ in urine); Positive UAG = RTA (kidney cannot excrete NH4+)

**Q7:** What is the most important buffer in ECF?
> Bicarbonate buffer system

**Q8:** What acid-base pattern is seen in DKA?
> High anion gap metabolic acidosis with respiratory compensation (Kussmaul breathing)

**Q9:** What is the delta ratio and what does >2 indicate?
> Delta AG / Delta HCO3-; Greater than 2 indicates HAGMA coexisting with metabolic alkalosis

**Q10:** What is the most important renal mechanism for excreting acid?
> Ammonium (NH4+) excretion from glutamine metabolism in PCT`,
        mnemonics: [],
        keyPoints: ["10 recall questions covering ABG interpretation, anion gap, and clinical scenarios"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 30-31", edition: "14th" }] },
    ],
  },

  // ─── Topic 5: Micturition ────────────────────────────────────
  {
    topicCode: "PY-MOD-05-TOP-05",
    layers: [
      { layer: 1, slug: "micturition-foundation", title: "Micturition - Foundation", estimatedMinutes: 20,
        summary: "Micturition involves coordinated relaxation of sphincters and contraction of the detrusor muscle. It is controlled by both autonomic and somatic nervous systems with a spinal reflex modulated by higher centers.",
        contentMd: `# Micturition

## Anatomy of Bladder
- **Detrusor muscle**: Smooth muscle of bladder wall (3 layers)
- **Trigone**: Triangular area between 2 ureteric orifices and internal urethral orifice
- Capacity: ~300-400 mL (desire to void), ~700 mL (maximum)

## Sphincters

| Sphincter | Type | Nerve | Control |
|-----------|------|-------|---------|
| Internal urethral sphincter (IUS) | Smooth muscle | Sympathetic (T11-L2) via hypogastric nerve | Involuntary |
| External urethral sphincter (EUS) | Skeletal muscle | Somatic (S2-S4) via pudendal nerve | Voluntary |

## Nerve Supply of Bladder

| Nerve | Origin | Type | Effect on Bladder |
|-------|--------|------|------------------|
| Pelvic nerve (nervi erigentes) | S2-S4 | Parasympathetic | **Contracts detrusor** (voiding) |
| Hypogastric nerve | T11-L2 | Sympathetic | **Relaxes detrusor** (storage), contracts IUS |
| Pudendal nerve | S2-S4 | Somatic | **Contracts EUS** (voluntary control) |

## Micturition Reflex
1. Bladder fills --> stretch receptors activated (at ~300 mL)
2. Afferents via **pelvic nerve** to sacral spinal cord (S2-S4)
3. **Micturition center** (Sacral S2-S4) - parasympathetic outflow
4. Efferents via pelvic nerve --> detrusor contracts
5. Simultaneously: Sympathetic inhibited (IUS relaxes) + Pudendal inhibited (EUS relaxes)
6. Voiding occurs

## Higher Center Control
- **Pontine micturition center (PMC / Barrington's nucleus)**: Coordinates voiding (switches from storage to voiding mode)
- **Cerebral cortex**: Voluntary inhibition of micturition (learned control)
- Children gain voluntary control by 2-3 years of age`,
        mnemonics: [
          { text: "Pee = Parasympathetic (Pelvic nerve contracts detrusor)", explanation: "Parasympathetic via pelvic nerve (S2-S4) contracts the detrusor for voiding. P for Pee, P for Parasympathetic, P for Pelvic" },
          { text: "S2-3-4 keeps the pee off the floor", explanation: "S2, S3, S4 sacral segments provide both parasympathetic (pelvic) and somatic (pudendal) nerve supply to the bladder" }
        ],
        keyPoints: ["Detrusor contraction = parasympathetic (pelvic nerve S2-S4)", "IUS = sympathetic (hypogastric T11-L2)", "EUS = somatic (pudendal nerve S2-S4)", "Pontine micturition center (Barrington's) coordinates voiding", "Micturition reflex initiated at ~300 mL bladder volume"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 32 - Micturition", edition: "14th" }] },
      { layer: 2, slug: "micturition-mechanism", title: "Micturition - Mechanism", estimatedMinutes: 30,
        summary: "Detailed mechanisms of bladder filling and voiding phases, cystometry, detrusor-sphincter coordination, and receptor pharmacology.",
        contentMd: `# Detailed Mechanisms

## Two Phases of Bladder Function

### Storage Phase (Sympathetic dominant)
- Detrusor relaxed (beta-3 adrenergic receptors)
- IUS contracted (alpha-1 adrenergic receptors)
- EUS contracted (somatic/pudendal)
- Bladder accommodates increasing volume with minimal pressure rise (compliance)

### Voiding Phase (Parasympathetic dominant)
- Detrusor contracts (muscarinic M3 receptors)
- IUS relaxes (sympathetic inhibited)
- EUS relaxes (pudendal inhibited)
- Intra-abdominal pressure may assist (Valsalva)

## Receptor Pharmacology

| Receptor | Location | Agonist Effect |
|----------|----------|---------------|
| M3 (muscarinic) | Detrusor | Contraction (voiding) |
| Beta-3 adrenergic | Detrusor | Relaxation (storage) |
| Alpha-1 adrenergic | IUS, prostatic urethra | Contraction (storage) |
| Nicotinic | EUS | Contraction (voluntary) |

## Cystometrogram (CMG)
- Measures intravesical pressure during filling
- **Phase I (Initial filling)**: Minimal pressure rise (high compliance)
- **Phase II (Continued filling)**: Slight pressure rise
- **Phase III (Micturition)**: Sudden pressure rise with desire to void
- First desire to void: ~150-200 mL
- Strong desire: ~300-400 mL
- Capacity: ~400-600 mL

## Guarding Reflex
- During filling, increasing bladder stretch activates pudendal nerve
- EUS contraction increases progressively (prevents leakage)
- This is an automatic spinal reflex that is overridden during voluntary voiding

## Detrusor-Sphincter Coordination
- Normal: Detrusor contraction + sphincter relaxation (synergic)
- **Detrusor-sphincter dyssynergia (DSD)**: Detrusor contracts while sphincter also contracts (seen in spinal cord lesions above sacral segments)
- Leads to high intravesical pressure, vesicoureteral reflux, hydronephrosis`,
        mnemonics: [
          { text: "M3 Makes it Move (voiding), Beta-3 Blocks movement (storage)", explanation: "M3 muscarinic receptors contract detrusor (void), Beta-3 adrenergic receptors relax detrusor (store)" }
        ],
        keyPoints: ["Storage: sympathetic (beta-3 relaxes detrusor, alpha-1 contracts IUS)", "Voiding: parasympathetic (M3 contracts detrusor)", "First desire at 150-200 mL, strong desire at 300-400 mL", "Cystometrogram has 3 phases", "Detrusor-sphincter dyssynergia in suprasacral cord lesions"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 32", edition: "14th" }] },
      { layer: 3, slug: "micturition-clinical", title: "Micturition - Clinical", estimatedMinutes: 20,
        summary: "Clinical conditions including neurogenic bladder types, urinary incontinence, and BPH.",
        contentMd: `# Clinical Applications

## Neurogenic Bladder

### Upper Motor Neuron (UMN) Bladder / Spastic / Reflex Bladder
- Lesion: **Above sacral cord** (e.g., spinal cord injury above S2)
- Features: Small capacity, hyper-reflexic detrusor, involuntary voiding
- Loss of voluntary control but spinal reflex intact
- **Detrusor-sphincter dyssynergia** may occur
- Also called "Automatic bladder" after spinal shock resolves

### Lower Motor Neuron (LMN) Bladder / Flaccid / Autonomous Bladder
- Lesion: **Sacral cord (S2-S4)** or cauda equina or pelvic nerve
- Features: Large capacity, areflexic detrusor, overflow incontinence
- No micturition reflex
- Requires intermittent catheterization

### Spinal Shock Phase
- Immediately after spinal cord injury
- Complete areflexia below lesion
- Urinary retention with overflow
- Lasts days to weeks, then reflex activity returns (UMN type)

## Types of Urinary Incontinence

| Type | Mechanism | Example |
|------|-----------|---------|
| Stress | Increased intra-abdominal pressure overwhelms sphincter | Cough, sneeze (common in multiparous women) |
| Urge | Detrusor overactivity (involuntary contractions) | OAB, UTI, stroke |
| Overflow | Bladder overdistension with dribbling | BPH, LMN bladder |
| Functional | Physical/cognitive inability to reach toilet | Dementia, immobility |

## Benign Prostatic Hyperplasia (BPH)
- Prostatic enlargement compresses urethra
- Symptoms: Hesitancy, weak stream, frequency, nocturia
- **Alpha-1 blockers** (tamsulosin): Relax prostatic smooth muscle
- **5-alpha reductase inhibitors** (finasteride): Reduce prostate size
- Anticholinergics contraindicated (worsen retention)

## Overactive Bladder (OAB)
- Urgency with or without incontinence
- Treatment: Antimuscarinics (oxybutynin, tolterodine) or **mirabegron** (beta-3 agonist)

> **Clinical Pearl**: In Indian women, stress incontinence is very common post-multiple deliveries but often underreported. Kegel exercises (pelvic floor strengthening) are first-line treatment.`,
        mnemonics: [
          { text: "UMN = Upper = Small Spastic bladder; LMN = Lower = Large Flaccid bladder", explanation: "UMN lesion gives small hyper-reflexic bladder; LMN lesion gives large areflexic flaccid bladder" }
        ],
        keyPoints: ["UMN bladder: small, spastic, involuntary voiding", "LMN bladder: large, flaccid, overflow incontinence", "Spinal shock: initial areflexia then UMN pattern", "BPH: alpha-1 blockers (tamsulosin), 5-alpha reductase inhibitors", "OAB: antimuscarinics or mirabegron (beta-3 agonist)"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 32", edition: "14th" }] },
      { layer: 4, slug: "micturition-exam", title: "Micturition - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield exam facts on micturition for NEXT and NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners
- Detrusor innervation: **Parasympathetic (pelvic nerve S2-S4)**
- Detrusor contraction receptor: **M3 muscarinic**
- Detrusor relaxation receptor: **Beta-3 adrenergic**
- IUS contraction: **Alpha-1 adrenergic (sympathetic)**
- EUS nerve: **Pudendal nerve (S2-S4)**
- Pontine micturition center: **Barrington's nucleus**
- Sacral micturition center: **S2, S3, S4**
- First desire to void: **150-200 mL**
- Strong desire: **300-400 mL**
- UMN bladder: **Small, spastic, reflex voiding**
- LMN bladder: **Large, flaccid, overflow incontinence**
- Spinal shock bladder: **Retention with overflow (initial)**
- BPH drug: **Tamsulosin** (alpha-1 blocker)
- OAB drug: **Oxybutynin** (antimuscarinic) or **Mirabegron** (beta-3 agonist)
- Stress incontinence first-line: **Kegel exercises (pelvic floor)**
- Detrusor-sphincter dyssynergia: **Suprasacral cord lesion**

## Nerve Supply Summary
- S2-3-4: Parasympathetic (pelvic) + Somatic (pudendal)
- T11-L2: Sympathetic (hypogastric)`,
        mnemonics: [
          { text: "S2-3-4 keeps the pee off the floor", explanation: "S2, S3, S4 = pelvic nerve (parasympathetic for voiding) + pudendal nerve (somatic for EUS control)" }
        ],
        keyPoints: ["M3 = detrusor contraction; beta-3 = detrusor relaxation", "Alpha-1 = IUS contraction", "UMN = small spastic; LMN = large flaccid"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 32", edition: "14th" }] },
      { layer: 5, slug: "micturition-recall", title: "Micturition - Active Recall", estimatedMinutes: 10,
        summary: "Self-test flashcards for micturition.",
        contentMd: `# Active Recall

**Q1:** Which nerve contracts the detrusor muscle?
> Pelvic nerve (parasympathetic, S2-S4) via M3 muscarinic receptors

**Q2:** What nerve controls the external urethral sphincter?
> Pudendal nerve (somatic, S2-S4)

**Q3:** What receptor on the detrusor is targeted by mirabegron?
> Beta-3 adrenergic receptor (relaxes detrusor for storage)

**Q4:** Where is the pontine micturition center?
> Barrington's nucleus in the pons (coordinates storage-to-voiding switch)

**Q5:** What is the bladder volume at first desire to void?
> 150-200 mL

**Q6:** UMN bladder lesion features?
> Small capacity, hyper-reflexic, spastic, reflex voiding, possible detrusor-sphincter dyssynergia

**Q7:** LMN bladder lesion features?
> Large capacity, areflexic, flaccid, overflow incontinence, no micturition reflex

**Q8:** What is detrusor-sphincter dyssynergia?
> Simultaneous contraction of detrusor and external sphincter; seen in suprasacral spinal cord lesions

**Q9:** First-line drug for BPH symptoms?
> Alpha-1 blocker (tamsulosin) - relaxes prostatic smooth muscle

**Q10:** What is the guarding reflex?
> During bladder filling, increasing stretch activates pudendal nerve causing progressive EUS contraction to prevent leakage`,
        mnemonics: [],
        keyPoints: ["10 recall questions covering bladder innervation, neurogenic bladder, and pharmacology"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 32", edition: "14th" }] },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // MODULE 06: GI PHYSIOLOGY
  // ═══════════════════════════════════════════════════════════════

  // ─── Topic 1: GI Motility ────────────────────────────────────
  {
    topicCode: "PY-MOD-06-TOP-01",
    layers: [
      { layer: 1, slug: "gi-motility-foundation", title: "GI Motility - Foundation", estimatedMinutes: 20,
        summary: "GI motility is generated by slow waves from interstitial cells of Cajal and modulated by the enteric nervous system. Key patterns include peristalsis, segmentation, and the migrating motor complex.",
        contentMd: `# GI Motility

## Electrical Basis of GI Motility

### Slow Waves
- Generated by **Interstitial Cells of Cajal (ICC)** - the "pacemakers" of the gut
- Rhythmic depolarization-repolarization cycles
- Do NOT directly cause contraction; set the MAXIMUM frequency
- Contraction occurs only when slow waves reach threshold and produce **spike potentials**

### Slow Wave Frequencies

| Region | Frequency (per min) |
|--------|-------------------|
| Stomach | 3 |
| Duodenum | 12 (highest) |
| Ileum | 8-9 |
| Colon | 2-6 |

## Types of GI Movements

### Peristalsis
- Coordinated wave of contraction behind bolus + relaxation ahead
- **Myenteric (Auerbach's) plexus** coordinates peristalsis
- **Law of the Intestine (Starling's law of the gut)**: Contraction above, relaxation below
- Neurotransmitters: Acetylcholine + Substance P (contraction behind), NO + VIP (relaxation ahead)

### Segmentation
- Rhythmic contractions that mix contents without propulsion
- Predominant in small intestine during digestion

### Migrating Motor Complex (MMC)
- Occurs during **fasting** (interdigestive period)
- Sweeps undigested material from stomach to ileocecal valve
- Cycle: ~90 minutes, has 4 phases
- Phase III: Most active (strong contractions) - the "housekeeper"
- Regulated by **motilin** (hormone from duodenum)
- Erythromycin acts as motilin agonist (prokinetic)

## Gastric Motility
- **Gastric pacemaker**: In greater curvature (body-antrum junction)
- Slow wave frequency: 3/min
- Gastric emptying: Controlled by antral contractions
- Liquids empty faster than solids
- Osmolality, fat, acid in duodenum SLOW emptying (duodenal brake)

## Enteric Nervous System (ENS)
- **Myenteric (Auerbach's) plexus**: Between circular and longitudinal muscle layers - controls MOTILITY
- **Submucosal (Meissner's) plexus**: In submucosa - controls SECRETION and blood flow`,
        mnemonics: [
          { text: "ICC = Intestinal Clock Cells (pacemakers)", explanation: "Interstitial Cells of Cajal generate slow waves that set the rhythm of GI contractions" },
          { text: "Auerbach's = A for motility Action; Meissner's = M for Mucosal secretion", explanation: "Auerbach's (myenteric) plexus controls motility; Meissner's (submucosal) plexus controls secretion" }
        ],
        keyPoints: ["ICC = GI pacemakers generating slow waves", "Slow wave frequency: Stomach 3, Duodenum 12 (highest), Ileum 8-9, Colon 2-6", "MMC occurs in fasting, regulated by motilin, cycle ~90 min", "Myenteric (Auerbach's) plexus = motility; Submucosal (Meissner's) = secretion", "Fat, acid, osmolality in duodenum slow gastric emptying"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 63 - GI Motility", edition: "14th" }] },
      { layer: 2, slug: "gi-motility-mechanism", title: "GI Motility - Mechanism", estimatedMinutes: 30,
        summary: "Detailed mechanisms of gastric emptying regulation, vomiting reflex, defecation, and motility patterns in different GI segments.",
        contentMd: `# Detailed Mechanisms

## Gastric Emptying Regulation

### Factors Accelerating Emptying
- Increased gastric volume (distension)
- Gastrin (increases antral contractions)
- Motilin (interdigestive)
- Erythromycin (motilin agonist)

### Factors Slowing Emptying (Duodenal Brake)
- Fat in duodenum (strongest inhibitor) --> CCK release
- Acid in duodenum --> Secretin release
- Hyperosmolar chyme --> ENS feedback
- Enterogastric reflex (neural)

## Vomiting Reflex
### Vomiting Center
- Located in **lateral reticular formation** of medulla

### Chemoreceptor Trigger Zone (CTZ)
- Located in **area postrema** (floor of 4th ventricle)
- Outside blood-brain barrier (BBB)
- Detects toxins, drugs, uremia
- Receptors: D2 (dopamine), 5-HT3 (serotonin), NK1

### Sequence of Vomiting
1. Nausea + increased salivation
2. Deep inspiration, closure of glottis and nasopharynx
3. Reverse peristalsis from jejunum to stomach
4. Contraction of abdominal muscles + diaphragm
5. Relaxation of LES and UES
6. Expulsion of gastric contents

### Antiemetics and Their Targets

| Drug | Receptor | Use |
|------|----------|-----|
| Ondansetron | 5-HT3 antagonist | Chemotherapy-induced |
| Metoclopramide | D2 antagonist (+ 5-HT4 agonist) | Prokinetic + antiemetic |
| Domperidone | D2 antagonist (does not cross BBB) | Gastroparesis |
| Aprepitant | NK1 antagonist | Chemotherapy (delayed) |

## Defecation Reflex
1. Feces enters rectum --> rectal distension
2. **Rectosphincteric reflex**: Internal anal sphincter relaxes
3. If appropriate, external anal sphincter relaxes voluntarily
4. Increased intra-abdominal pressure (Valsalva) aids defecation
5. **Gastrocolic reflex**: Gastric distension triggers colonic mass movement (why urge after meals)

## Colonic Motility
- **Haustral churning**: Segmental mixing in haustra
- **Mass movement**: Strong propulsive waves, 1-3 times/day, usually after meals
- Colonic transit: 12-36 hours

## Ileocecal Valve
- Prevents reflux of colonic contents into ileum
- Relaxed by CCK, gastrin; Contracted by distension of cecum`,
        mnemonics: [
          { text: "DOGS for CTZ receptors", explanation: "D2 (Dopamine), Opioid, Gastrin (not really), 5-HT3 (Serotonin) - main CTZ receptors" },
          { text: "GastroColic = Go after meals", explanation: "Gastrocolic reflex: eating triggers mass movement in colon, causing urge to defecate" }
        ],
        keyPoints: ["Fat is strongest inhibitor of gastric emptying (duodenal brake)", "CTZ in area postrema (outside BBB) has D2 and 5-HT3 receptors", "Ondansetron (5-HT3 antagonist) for chemo-induced vomiting", "Gastrocolic reflex triggers mass colonic movement after meals", "Defecation: rectosphincteric reflex relaxes IAS"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 63-64", edition: "14th" }] },
      { layer: 3, slug: "gi-motility-clinical", title: "GI Motility - Clinical", estimatedMinutes: 20,
        summary: "Clinical conditions related to GI motility disorders including achalasia, gastroparesis, Hirschsprung disease, and irritable bowel syndrome.",
        contentMd: `# Clinical Applications

## Achalasia
- Failure of LES relaxation + absent esophageal peristalsis
- Due to loss of inhibitory neurons (VIP/NO) in myenteric plexus
- Features: Dysphagia for solids AND liquids, bird-beak sign on barium swallow
- Treatment: Heller myotomy, pneumatic dilation, or peroral endoscopic myotomy (POEM)
- In India: Must rule out **Chagas disease** (in endemic areas) - also causes achalasia

## Gastroparesis
- Delayed gastric emptying without mechanical obstruction
- Common in: Diabetes mellitus (vagal neuropathy), post-surgical
- Features: Nausea, vomiting, early satiety, bloating
- Treatment: Prokinetics - metoclopramide, domperidone, erythromycin (motilin agonist)

## Hirschsprung Disease (Congenital Megacolon)
- **Absence of ganglion cells** in myenteric and submucosal plexus (distal colon)
- Aganglionic segment: Tonically contracted (cannot relax)
- Proximal normal colon dilates (megacolon)
- Presents in neonates: Failure to pass meconium within 24 hours
- Diagnosis: Rectal biopsy (absent ganglion cells, hypertrophied nerve trunks)
- Treatment: Surgical resection of aganglionic segment (pull-through procedure)

## Irritable Bowel Syndrome (IBS)
- Functional disorder with altered motility and visceral hypersensitivity
- Rome IV criteria: Recurrent abdominal pain related to defecation
- No structural abnormality
- IBS-C (constipation), IBS-D (diarrhea), IBS-M (mixed)

## Intestinal Obstruction
- Mechanical: Adhesions (most common cause post-surgery), hernias, tumors
- Paralytic ileus: Post-surgical, hypokalemia, peritonitis
- Features: Colicky pain, vomiting, distension, absent bowel sounds (ileus)

## Dumping Syndrome
- Post-gastrectomy: Rapid emptying of hyperosmolar chyme into small intestine
- Early dumping (30 min): Fluid shift into bowel, hypotension, diarrhea
- Late dumping (2-3 hours): Reactive hypoglycemia

> **Clinical Pearl**: In India, Hirschsprung disease may present late due to delayed medical consultation. Any child with chronic constipation since birth should be evaluated with rectal biopsy.`,
        mnemonics: [
          { text: "Hirschsprung = Missing ganglion cells = Mega colon", explanation: "Absence of ganglion cells in distal colon leads to tonic contraction and proximal megacolon" }
        ],
        keyPoints: ["Achalasia: absent LES relaxation, loss of VIP/NO neurons", "Hirschsprung: absent ganglion cells, failure to pass meconium", "Gastroparesis: treat with prokinetics (metoclopramide, erythromycin)", "Dumping syndrome: early (hypotension) and late (hypoglycemia)", "IBS: functional disorder, Rome IV criteria"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 63", edition: "14th" }, { book: "Robbins", chapter: "Ch 17 - GI Tract", edition: "10th" }] },
      { layer: 4, slug: "gi-motility-exam", title: "GI Motility - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield exam facts on GI motility for NEXT and NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners
- GI pacemaker cells: **Interstitial cells of Cajal (ICC)**
- Highest slow wave frequency: **Duodenum (12/min)**
- Gastric slow wave frequency: **3/min**
- MMC regulated by: **Motilin**
- MMC occurs during: **Fasting** (interdigestive period)
- Motilin agonist drug: **Erythromycin**
- Myenteric plexus: **Motility** (Auerbach's)
- Submucosal plexus: **Secretion** (Meissner's)
- Strongest inhibitor of gastric emptying: **Fat**
- CTZ location: **Area postrema** (floor of 4th ventricle)
- Chemo-induced vomiting drug: **Ondansetron** (5-HT3 antagonist)
- Hirschsprung: **Absent ganglion cells** (myenteric + submucosal)
- Achalasia: Loss of **VIP/NO neurons** in myenteric plexus
- Gastrocolic reflex: **Eating triggers colonic mass movement**
- Defecation: IAS relaxation = **Rectosphincteric reflex**
- Gastroparesis in diabetics: **Vagal neuropathy**
- Law of the intestine: **Contraction above, relaxation below**

## Antiemetic Targets
- D2: Metoclopramide, domperidone
- 5-HT3: Ondansetron
- NK1: Aprepitant
- H1: Promethazine (motion sickness)`,
        mnemonics: [],
        keyPoints: ["ICC = pacemaker; Duodenum = highest frequency (12/min)", "Motilin regulates MMC; erythromycin = motilin agonist", "Hirschsprung = absent ganglion cells", "Fat = strongest gastric emptying inhibitor"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 63", edition: "14th" }] },
      { layer: 5, slug: "gi-motility-recall", title: "GI Motility - Active Recall", estimatedMinutes: 10,
        summary: "Self-test flashcards for GI motility.",
        contentMd: `# Active Recall

**Q1:** What are the pacemaker cells of the GI tract?
> Interstitial Cells of Cajal (ICC) - generate slow waves

**Q2:** Which part of the GI tract has the highest slow wave frequency?
> Duodenum (12 per minute)

**Q3:** What is the migrating motor complex (MMC) and when does it occur?
> Interdigestive sweeping contractions from stomach to ileocecal valve; occurs during fasting, cycle ~90 min

**Q4:** Which hormone regulates the MMC?
> Motilin (from duodenum)

**Q5:** What is the most potent inhibitor of gastric emptying?
> Fat in the duodenum (via CCK and enterogastric reflex)

**Q6:** Where is the CTZ located and why is it unique?
> Area postrema, floor of 4th ventricle; outside BBB so it can detect blood-borne toxins

**Q7:** What is absent in Hirschsprung disease?
> Ganglion cells in the myenteric and submucosal plexus of distal colon

**Q8:** What is the gastrocolic reflex?
> Gastric distension after eating triggers mass colonic movement, producing urge to defecate

**Q9:** Name the two plexuses of the ENS and their functions.
> Myenteric (Auerbach's) = motility; Submucosal (Meissner's) = secretion

**Q10:** What is the Law of the Intestine?
> Contraction above the bolus (behind) and relaxation below (ahead) during peristalsis`,
        mnemonics: [],
        keyPoints: ["10 recall questions covering GI motility patterns, regulation, and clinical conditions"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 63", edition: "14th" }] },
    ],
  },

  // ─── Topic 2: GI Secretions ──────────────────────────────────
  {
    topicCode: "PY-MOD-06-TOP-02",
    layers: [
      { layer: 1, slug: "gi-secretions-foundation", title: "GI Secretions - Foundation", estimatedMinutes: 20,
        summary: "The GI tract produces approximately 7-8 liters of secretions daily. Major secretions include saliva, gastric juice, pancreatic juice, bile, and intestinal secretions, each with distinct compositions and functions.",
        contentMd: `# GI Secretions

## Daily Secretion Volumes

| Secretion | Volume (mL/day) | pH |
|-----------|----------------|-----|
| Saliva | 1000-1500 | 6.0-7.0 |
| Gastric juice | 2000-3000 | 1.0-3.5 |
| Pancreatic juice | 1000-1500 | 8.0-8.3 |
| Bile | 500-1000 | 7.6-8.6 |
| Small intestinal | 1000-2000 | 7.5-8.0 |
| Large intestinal | 200 | 7.5-8.0 |

## Salivary Secretion
- Glands: Parotid (serous - watery), Submandibular (mixed - most volume), Sublingual (mucous)
- **Key enzyme**: Salivary amylase (ptyalin) - digests starch, optimal pH 6.8
- Contains: HCO3- (buffering), lysozyme (antibacterial), IgA, mucin
- **Hypotonic** to plasma (Na+ and Cl- reabsorbed in duct, K+ and HCO3- secreted)
- Control: **Entirely neural** (NO hormonal regulation)
  - Parasympathetic: Profuse watery secretion (main control)
  - Sympathetic: Scanty thick secretion

## Gastric Secretion
### Cell Types

| Cell | Location | Secretion |
|------|----------|-----------|
| Parietal (oxyntic) | Body/fundus | HCl, Intrinsic factor |
| Chief (peptic) | Body/fundus | Pepsinogen |
| Mucous neck | Throughout | Mucus, HCO3- |
| G cells | Antrum | Gastrin |
| D cells | Antrum | Somatostatin |
| ECL cells | Body/fundus | Histamine |

### HCl Secretion Mechanism (Parietal Cell)
- **H+/K+ ATPase (Proton pump)** on apical membrane - final common pathway
- Stimulated by: Acetylcholine (M3), Histamine (H2), Gastrin (CCK-B)
- Inhibited by: Somatostatin, Prostaglandins, Secretin

## Pancreatic Secretion
- **Acinar cells**: Enzymes (trypsinogen, chymotrypsinogen, lipase, amylase, elastase)
- **Duct cells**: HCO3- rich alkaline fluid (neutralizes acid chyme)
- Trypsinogen activated to trypsin by **enterokinase** (brush border of duodenum)
- Trypsin then activates all other zymogens (autocatalytic cascade)`,
        mnemonics: [
          { text: "HAG stimulates parietal cells", explanation: "Histamine (H2), Acetylcholine (M3), Gastrin (CCK-B) - the 3 stimulants of HCl secretion" },
          { text: "Parietal = Pump (H+/K+ ATPase) + Protection (Intrinsic Factor for B12)", explanation: "Parietal cells secrete HCl via proton pump and Intrinsic Factor for B12 absorption" }
        ],
        keyPoints: ["Total GI secretions: 7-8 L/day", "Salivary control is purely neural (parasympathetic dominant)", "Parietal cells: HCl (proton pump) and Intrinsic Factor", "HCl stimulated by HAG: Histamine, ACh, Gastrin", "Enterokinase activates trypsinogen; trypsin activates all other pancreatic zymogens"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 65 - GI Secretory Functions", edition: "14th" }] },
      { layer: 2, slug: "gi-secretions-mechanism", title: "GI Secretions - Mechanism", estimatedMinutes: 30,
        summary: "Detailed mechanisms of gastric acid secretion phases, parietal cell second messengers, pancreatic secretion regulation, and intestinal secretion.",
        contentMd: `# Detailed Mechanisms

## Phases of Gastric Secretion

| Phase | Stimulus | Mediator | % of Total |
|-------|----------|----------|-----------|
| Cephalic | Sight, smell, taste, thought of food | Vagus (ACh) | 30% |
| Gastric | Distension, peptides in stomach | Gastrin, local reflexes | 60% |
| Intestinal | Amino acids in duodenum | Intestinal gastrin, entero-oxyntin | 10% |

## Parietal Cell Second Messengers
- **Histamine (H2)** --> Gs --> cAMP increase --> PKA --> H+/K+ ATPase activation
- **Acetylcholine (M3)** --> Gq --> IP3/Ca2+ increase
- **Gastrin (CCK-B)** --> Gq --> IP3/Ca2+ increase

## Proton Pump Inhibitors (PPIs)
- Omeprazole, pantoprazole, lansoprazole
- Irreversibly block H+/K+ ATPase
- Most effective acid-suppressing drugs

## Gastric Mucosal Defense (Mucosal Barrier)
- **Mucus-bicarbonate barrier**: Gel layer on surface, creates pH gradient (lumen pH 2, cell surface pH 7)
- **Prostaglandins (PGE2, PGI2)**: Stimulate mucus and HCO3- secretion, increase mucosal blood flow
- NSAIDs inhibit COX --> reduce prostaglandins --> ulceration
- **H. pylori**: Produces urease --> ammonia --> damages mucosa

## Pancreatic Secretion Control

| Hormone | Origin | Target | Effect |
|---------|--------|--------|--------|
| Secretin | S cells (duodenum) | Duct cells | HCO3- rich watery secretion |
| CCK | I cells (duodenum) | Acinar cells | Enzyme-rich secretion |
| ACh (vagus) | Vagus | Both | Potentiates both |

- **Secretin** released by: Acid in duodenum (pH < 4.5)
- **CCK** released by: Fatty acids, amino acids in duodenum

## Intestinal Secretion
- **Crypts of Lieberkuhn**: Secrete Cl- and water (CFTR channel)
- **Brunner's glands** (duodenal submucosa): Alkaline mucus (protects from acid)
- **Paneth cells** (crypt base): Lysozyme, defensins (antimicrobial)
- Cholera toxin: Activates Gs protein permanently --> cAMP increase --> excessive Cl- and water secretion --> secretory diarrhea`,
        mnemonics: [
          { text: "Secretin = S for Soda (bicarb, alkaline), CCK = C for Calories (enzymes for digestion)", explanation: "Secretin from S cells stimulates HCO3- (alkaline) secretion; CCK from I cells stimulates enzyme secretion" },
          { text: "Cephalic 30, Gastric 60, Intestinal 10", explanation: "Phases of gastric secretion contribution: cephalic 30%, gastric 60%, intestinal 10%" }
        ],
        keyPoints: ["Gastric phase = 60% of acid secretion (largest)", "H2 receptor uses cAMP; M3 and CCK-B use IP3/Ca2+", "PPIs irreversibly block proton pump (most effective)", "Secretin = HCO3- (duct cells); CCK = enzymes (acinar cells)", "Cholera toxin = permanent Gs activation --> secretory diarrhea"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 65", edition: "14th" }] },
      { layer: 3, slug: "gi-secretions-clinical", title: "GI Secretions - Clinical", estimatedMinutes: 20,
        summary: "Clinical correlations including peptic ulcer disease, H. pylori, Zollinger-Ellison syndrome, pancreatitis, and secretory diarrhea.",
        contentMd: `# Clinical Applications

## Peptic Ulcer Disease
- **Duodenal ulcer**: Most common (4x more than gastric), H. pylori in 90%
- **Gastric ulcer**: H. pylori in 70%, NSAIDs important cause
- H. pylori diagnosis: Rapid urease test (CLO test), urea breath test, stool antigen
- Treatment: Triple therapy (PPI + clarithromycin + amoxicillin) x 14 days

## Zollinger-Ellison Syndrome
- **Gastrinoma** (usually in duodenal wall or pancreas)
- Excessive gastrin --> massive HCl secretion
- Multiple, recurrent peptic ulcers (atypical locations - jejunum)
- Secretory diarrhea (acid inactivates pancreatic enzymes)
- Diagnosis: Fasting gastrin > 1000 pg/mL, secretin stimulation test (paradoxical gastrin rise)
- Part of MEN-1 (3Ps: Parathyroid, Pituitary, Pancreas)

## Acute Pancreatitis
- Common causes (India): **Gallstones** (most common) and **Alcohol**
- Premature trypsinogen activation within pancreas --> autodigestion
- Features: Severe epigastric pain radiating to back, elevated amylase/lipase
- Serum lipase more specific than amylase

## Pernicious Anemia
- Autoimmune destruction of parietal cells
- Loss of intrinsic factor --> B12 malabsorption --> megaloblastic anemia
- Achlorhydria (no acid), elevated gastrin (no negative feedback)

## Cholera (Secretory Diarrhea)
- V. cholerae toxin permanently activates Gs protein in intestinal crypt cells
- Massive Cl- and water secretion via CFTR channels
- Rice-water stools, severe dehydration
- Treatment: **ORS** (Oral Rehydration Solution) - Na+ and glucose cotransport drives water absorption
- ORS composition (WHO): Na 75, K 20, Cl 65, Citrate 10, Glucose 75 mEq/L

> **Clinical Pearl**: H. pylori triple therapy compliance is a major issue in India. Ensure patients complete the full 14-day course. Bismuth-based quadruple therapy is the salvage regimen.`,
        mnemonics: [
          { text: "GET SMASHED for pancreatitis causes", explanation: "Gallstones, Ethanol, Trauma, Steroids, Mumps, Autoimmune, Scorpion sting, Hyperlipidemia/Hypercalcemia, ERCP, Drugs" }
        ],
        keyPoints: ["H. pylori: 90% duodenal ulcers, rapid urease test for diagnosis", "Zollinger-Ellison: gastrinoma, MEN-1, paradoxical gastrin rise with secretin", "Pernicious anemia: autoimmune loss of parietal cells, no IF, B12 deficiency", "Cholera: Gs protein activation, CFTR-mediated Cl- secretion", "ORS works via Na-glucose cotransport (SGLT1) driving water absorption"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 65-66", edition: "14th" }] },
      { layer: 4, slug: "gi-secretions-exam", title: "GI Secretions - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield exam facts on GI secretions for NEXT and NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners
- Total daily GI secretions: **7-8 liters**
- Salivary control: **Purely neural** (parasympathetic dominant)
- Salivary enzyme: **Amylase (ptyalin)** - digests starch
- Parietal cell secretes: **HCl + Intrinsic Factor**
- Proton pump: **H+/K+ ATPase** (apical membrane of parietal cell)
- HCl stimulants: **HAG** (Histamine-H2, ACh-M3, Gastrin-CCK-B)
- Largest phase of gastric secretion: **Gastric phase (60%)**
- PPIs mechanism: **Irreversible proton pump block**
- Chief cells secrete: **Pepsinogen**
- Pepsinogen activated by: **HCl (pH < 2)** to pepsin
- Enterokinase activates: **Trypsinogen** to trypsin
- Trypsin then activates: **All other pancreatic zymogens**
- Secretin stimulates: **HCO3- from duct cells**
- CCK stimulates: **Enzymes from acinar cells**
- Brunner's glands: **Duodenal submucosa** (alkaline mucus)
- Cholera mechanism: **Gs activation --> cAMP --> CFTR Cl- secretion**
- ORS works via: **SGLT1** (Na-glucose cotransport)
- Pernicious anemia: Loss of **Intrinsic Factor** (parietal cell destruction)
- Zollinger-Ellison gastrin level: **> 1000 pg/mL**
- H. pylori DU association: **90%**

## Gastric Secretion Inhibitors
- Somatostatin, Prostaglandins, Secretin, GIP`,
        mnemonics: [],
        keyPoints: ["HAG stimulates parietal cells", "Proton pump = final common pathway", "Enterokinase activates trypsinogen", "Secretin = HCO3-; CCK = enzymes"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 65", edition: "14th" }] },
      { layer: 5, slug: "gi-secretions-recall", title: "GI Secretions - Active Recall", estimatedMinutes: 10,
        summary: "Self-test flashcards for GI secretions.",
        contentMd: `# Active Recall

**Q1:** What are the 3 stimulants of HCl secretion from parietal cells?
> Histamine (H2 receptor), Acetylcholine (M3), Gastrin (CCK-B receptor) - HAG

**Q2:** What 2 things do parietal cells secrete?
> HCl and Intrinsic Factor

**Q3:** Which enzyme activates trypsinogen?
> Enterokinase (enteropeptidase) from duodenal brush border

**Q4:** Which phase contributes the most to gastric acid secretion?
> Gastric phase (60%)

**Q5:** How is salivary secretion controlled?
> Purely neural - parasympathetic (profuse watery) and sympathetic (scanty thick)

**Q6:** What does secretin stimulate from the pancreas?
> HCO3- rich watery secretion from duct cells

**Q7:** What causes secretory diarrhea in cholera?
> Cholera toxin permanently activates Gs protein --> increased cAMP --> CFTR Cl- secretion + water

**Q8:** What is the mechanism of PPIs?
> Irreversible inhibition of H+/K+ ATPase (proton pump) on parietal cell

**Q9:** What is pernicious anemia?
> Autoimmune destruction of parietal cells --> loss of intrinsic factor --> B12 malabsorption --> megaloblastic anemia

**Q10:** Where are Brunner's glands and what do they secrete?
> Duodenal submucosa; secrete alkaline mucus to protect against gastric acid`,
        mnemonics: [],
        keyPoints: ["10 recall questions covering all major GI secretions and their regulation"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 65", edition: "14th" }] },
    ],
  },

  // ─── Topic 3: Digestion & Absorption ─────────────────────────
  {
    topicCode: "PY-MOD-06-TOP-03",
    layers: [
      { layer: 1, slug: "digestion-absorption-foundation", title: "Digestion & Absorption - Foundation", estimatedMinutes: 20,
        summary: "Carbohydrates, proteins, and fats are digested by specific enzymes and absorbed through distinct mechanisms in the small intestine. The duodenum and jejunum are the primary sites of absorption.",
        contentMd: `# Digestion & Absorption

## Carbohydrate Digestion
- Dietary carbs: Starch (60%), Sucrose (30%), Lactose (10%)
- **Salivary amylase**: Starch --> Maltose + Maltotriose + alpha-limit dextrins
- **Pancreatic amylase**: Continues starch digestion in duodenum
- **Brush border enzymes**: Final digestion
  - Maltase: Maltose --> 2 Glucose
  - Sucrase: Sucrose --> Glucose + Fructose
  - Lactase: Lactose --> Glucose + Galactose
  - Isomaltase: Alpha-limit dextrins --> Glucose

## Carbohydrate Absorption
- **Glucose and Galactose**: Active transport via **SGLT1** (Na+ dependent, apical) --> GLUT2 (basolateral)
- **Fructose**: Facilitated diffusion via **GLUT5** (apical) --> GLUT2 (basolateral)

## Protein Digestion
- **Pepsin** (stomach): Begins protein digestion at pH 1-3
- **Pancreatic proteases**: Trypsin, chymotrypsin, elastase (endopeptidases); Carboxypeptidase (exopeptidase)
- **Brush border**: Aminopeptidases, dipeptidases
- Final products: Amino acids, dipeptides, tripeptides

## Protein Absorption
- Free amino acids: Na+-dependent active transport (multiple transporters)
- Di/tripeptides: **PepT1** transporter (H+ cotransport) - faster than free AA absorption
- Intact proteins absorbed in neonates (important for IgA from breast milk)

## Fat Digestion
- **Lingual lipase** (von Ebner's glands): Starts in mouth, continues in stomach
- **Pancreatic lipase**: Main fat digestion (requires **colipase** as cofactor)
- Triglycerides --> 2 Free fatty acids + 2-Monoglyceride
- **Bile salts**: Emulsify fats (increase surface area for lipase action)
- Products form **mixed micelles** with bile salts for absorption

## Fat Absorption
- Micelles deliver products to brush border
- Free fatty acids and monoglycerides enter enterocyte by diffusion
- Re-esterified to TG inside cell --> packaged into **chylomicrons**
- Chylomicrons enter **lymphatics** (lacteals), NOT portal blood
- Short and medium chain fatty acids: Absorbed directly into **portal blood** (no chylomicrons needed)`,
        mnemonics: [
          { text: "SGLT1 = Sugar (Glucose/Galactose) Loves Sodium Transport", explanation: "SGLT1 is the Na+-dependent cotransporter for glucose and galactose in the small intestine" },
          { text: "Long fats = Lymph, Short/Medium fats = Portal blood", explanation: "Long-chain FAs go via chylomicrons into lymphatics; short/medium-chain FAs go directly into portal circulation" }
        ],
        keyPoints: ["Glucose/Galactose via SGLT1 (active); Fructose via GLUT5 (facilitated)", "Pancreatic lipase + colipase digest fat; bile salts emulsify", "Long-chain fats --> chylomicrons --> lymphatics; Short/medium chain --> portal blood", "PepT1 transports dipeptides/tripeptides (H+ cotransport)", "Brush border enzymes complete digestion of carbs (maltase, sucrase, lactase)"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 66-67 - Digestion & Absorption", edition: "14th" }] },
      { layer: 2, slug: "digestion-absorption-mechanism", title: "Digestion & Absorption - Mechanism", estimatedMinutes: 30,
        summary: "Detailed mechanisms of micelle formation, enterocyte lipid processing, vitamin absorption, iron and calcium absorption, and bile salt recycling.",
        contentMd: `# Detailed Mechanisms

## Micelle Formation and Fat Absorption
1. Bile salts emulsify dietary fat (increase surface area 1000x)
2. Pancreatic lipase + colipase act at oil-water interface
3. Products: 2 FFA + 1 monoglyceride per TG
4. Products + bile salts form **mixed micelles** (water-soluble)
5. Micelles deliver products to unstirred water layer at brush border
6. FFA and monoglycerides enter cell by passive diffusion
7. Inside enterocyte: Re-esterified to TG in smooth ER
8. TG + cholesterol + phospholipids + apoB-48 --> **Chylomicrons** in Golgi
9. Chylomicrons exocytosed --> enter lacteals (lymphatics) --> thoracic duct --> blood

## Vitamin Absorption

| Vitamin | Site | Mechanism |
|---------|------|-----------|
| B12 (cobalamin) | Terminal ileum | IF-B12 complex binds cubilin receptor |
| Folate | Jejunum | Proton-coupled transporter |
| Iron | Duodenum | DMT1 (Fe2+) and ferroportin |
| Calcium | Duodenum | Active (vitamin D dependent) and paracellular |
| Fat-soluble (A, D, E, K) | Jejunum | Absorbed with fats in micelles |
| B1 (Thiamine) | Jejunum | Active transport |
| B2, B6, C | Jejunum/ileum | Facilitated diffusion |

## Iron Absorption (Duodenum)
1. Dietary iron: Heme iron (Fe2+, better absorbed) and Non-heme iron (Fe3+)
2. Fe3+ reduced to Fe2+ by **ferrireductase (DcytB)** at brush border
3. Fe2+ enters via **DMT1** (divalent metal transporter 1)
4. Inside cell: Stored as **ferritin** or exits via **ferroportin** (basolateral)
5. **Hepcidin** (from liver): Degrades ferroportin --> reduces iron absorption
6. Vitamin C enhances iron absorption (reduces Fe3+ to Fe2+)
7. Phytates, tannins (tea) inhibit iron absorption

## Calcium Absorption
### Active (Duodenum) - Vitamin D dependent
1. Ca2+ enters via **TRPV6** channel (apical)
2. Binds **calbindin-D9K** (intracellular transport protein)
3. Exits via **Ca-ATPase** and **NCX1** (Na/Ca exchanger) at basolateral
4. **1,25-(OH)2 vitamin D3** upregulates all 3: TRPV6, calbindin, Ca-ATPase

### Passive (Paracellular) - Throughout intestine
- Concentration-dependent, vitamin D independent

## Water and Electrolyte Absorption
- ~9 L enter GI daily (2L oral + 7L secretions)
- Jejunum absorbs most water and nutrients
- Colon absorbs remaining 1-1.5 L (concentrates feces)
- Na+ absorption: SGLT1, ENaC, NHE3, Na-Cl cotransporter`,
        mnemonics: [
          { text: "B12 = terminal ileuM (B12 iM), Folate = Jejunum (Folate J)", explanation: "B12 absorbed in terminal ileum (with intrinsic factor), Folate absorbed in jejunum" },
          { text: "Hepcidin = Hepcidegate (gatekeeper that blocks iron exit via ferroportin)", explanation: "Hepcidin from liver degrades ferroportin, reducing iron absorption and release from stores" }
        ],
        keyPoints: ["Mixed micelles deliver fat digestion products to brush border", "Chylomicrons enter lymphatics (not portal blood)", "B12: terminal ileum (needs IF); Folate: jejunum", "Iron: DMT1 (apical), ferroportin (basolateral), regulated by hepcidin", "Vitamin D increases Ca absorption via TRPV6, calbindin, Ca-ATPase"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 66-67", edition: "14th" }] },
      { layer: 3, slug: "digestion-absorption-clinical", title: "Digestion & Absorption - Clinical", estimatedMinutes: 20,
        summary: "Clinical conditions related to maldigestion and malabsorption including celiac disease, lactose intolerance, tropical sprue, and short bowel syndrome.",
        contentMd: `# Clinical Applications

## Celiac Disease (Gluten-Sensitive Enteropathy)
- Autoimmune reaction to **gliadin** (component of gluten in wheat, barley, rye)
- Causes villous atrophy, crypt hyperplasia in proximal small intestine
- Features: Chronic diarrhea, steatorrhea, weight loss, iron/folate deficiency anemia
- Antibodies: **Anti-tissue transglutaminase (anti-tTG IgA)** - screening test
- **Anti-endomysial antibodies (EMA)** - most specific
- Gold standard: **Duodenal biopsy** (villous atrophy + intraepithelial lymphocytes)
- HLA association: **HLA-DQ2** (95%) and **HLA-DQ8** (5%)
- Treatment: Lifelong **gluten-free diet**
- Complication: T-cell lymphoma of intestine

## Lactose Intolerance
- Deficiency of brush border **lactase**
- Most common enzyme deficiency worldwide
- Common in Indian adults (50-75% prevalence)
- Features: Bloating, diarrhea, abdominal cramps after dairy consumption
- Diagnosis: **Hydrogen breath test** (undigested lactose fermented by bacteria)
- Treatment: Lactose-free diet, lactase supplements

## Tropical Sprue
- Common in India and Southeast Asia
- Likely infectious etiology (responds to antibiotics)
- Affects entire small bowel (unlike celiac which is proximal)
- Features: Diarrhea, steatorrhea, megaloblastic anemia (B12 and folate deficiency)
- Treatment: Tetracycline + folic acid

## Short Bowel Syndrome
- After extensive small bowel resection (>50%)
- **Ileal resection** consequences: B12 malabsorption, bile salt malabsorption (causing diarrhea and steatorrhea)
- **Jejunal resection**: Better tolerated (ileum can adapt)
- Treatment: Parenteral nutrition initially, gradual enteral feeding

## Steatorrhea Causes
- **Maldigestion**: Chronic pancreatitis (enzyme deficiency), bile salt deficiency
- **Malabsorption**: Celiac disease, tropical sprue, short bowel syndrome
- **Feature**: Pale, bulky, foul-smelling, floating stools

> **Clinical Pearl**: In India, celiac disease is increasingly recognized, especially in North India (wheat-based diet). Any child with chronic diarrhea and failure to thrive should be screened with anti-tTG IgA.`,
        mnemonics: [
          { text: "Celiac DQ2/DQ8 = Don't eat Wheat", explanation: "Celiac disease associated with HLA-DQ2 (95%) and DQ8 (5%); triggered by gluten in wheat, barley, rye" }
        ],
        keyPoints: ["Celiac: anti-tTG IgA screening, duodenal biopsy gold standard, HLA-DQ2/DQ8", "Lactose intolerance: hydrogen breath test, 50-75% prevalence in India", "Tropical sprue: entire small bowel affected, treat with tetracycline + folic acid", "Ileal resection: B12 and bile salt malabsorption", "Celiac complication: T-cell lymphoma"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 66-67", edition: "14th" }, { book: "Harrison's", chapter: "Ch 318 - Malabsorption", edition: "21st" }] },
      { layer: 4, slug: "digestion-absorption-exam", title: "Digestion & Absorption - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield exam facts on digestion and absorption for NEXT and NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners
- Glucose/Galactose transporter (apical): **SGLT1**
- Fructose transporter (apical): **GLUT5**
- Basolateral glucose transporter: **GLUT2**
- Dipeptide/tripeptide transporter: **PepT1**
- Pancreatic lipase cofactor: **Colipase**
- Long-chain fats enter: **Lymphatics (chylomicrons)**
- Short/medium-chain fats enter: **Portal blood**
- B12 absorption site: **Terminal ileum** (needs Intrinsic Factor)
- Folate absorption site: **Jejunum**
- Iron absorption site: **Duodenum** (DMT1)
- Iron regulator hormone: **Hepcidin** (blocks ferroportin)
- Iron absorption enhancer: **Vitamin C** (reduces Fe3+ to Fe2+)
- Iron absorption inhibitors: **Phytates, tannins (tea)**
- Celiac antibody (screening): **Anti-tTG IgA**
- Celiac HLA: **DQ2 (95%)** and DQ8
- Celiac gold standard: **Duodenal biopsy**
- Lactose intolerance test: **Hydrogen breath test**
- Tropical sprue treatment: **Tetracycline + folic acid**
- Bile salt absorption site: **Terminal ileum**
- Salivary amylase optimal pH: **6.8**
- Pepsin optimal pH: **1-3**
- Pancreatic lipase optimal pH: **8**

## Fat-Soluble Vitamin Absorption
- A, D, E, K require bile salts for absorption (in micelles)
- Deficiency in: Biliary obstruction, chronic pancreatitis, celiac disease`,
        mnemonics: [],
        keyPoints: ["SGLT1 = glucose/galactose; GLUT5 = fructose", "B12 = terminal ileum; Folate = jejunum; Iron = duodenum", "Hepcidin blocks ferroportin (iron gatekeeper)", "Celiac: anti-tTG IgA, DQ2/DQ8, duodenal biopsy"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 66-67", edition: "14th" }] },
      { layer: 5, slug: "digestion-absorption-recall", title: "Digestion & Absorption - Active Recall", estimatedMinutes: 10,
        summary: "Self-test flashcards for digestion and absorption.",
        contentMd: `# Active Recall

**Q1:** By which transporter is glucose absorbed in the small intestine?
> SGLT1 (Na+-dependent, apical membrane) --> GLUT2 (basolateral)

**Q2:** How is fructose absorbed differently from glucose?
> Fructose: facilitated diffusion via GLUT5 (no Na+ required); Glucose: active via SGLT1

**Q3:** Where is B12 absorbed and what is required?
> Terminal ileum; requires Intrinsic Factor from parietal cells

**Q4:** How do long-chain fatty acids reach the blood?
> Re-esterified to TG in enterocyte --> packaged as chylomicrons --> enter lymphatics --> thoracic duct --> blood

**Q5:** What is the role of hepcidin in iron metabolism?
> Hepcidin degrades ferroportin, reducing iron absorption from enterocytes and iron release from macrophages

**Q6:** What are the diagnostic markers for celiac disease?
> Anti-tTG IgA (screening), anti-endomysial antibodies (most specific), duodenal biopsy (gold standard)

**Q7:** What is the hydrogen breath test used for?
> Diagnosing lactose intolerance (undigested lactose fermented by colonic bacteria produces H2)

**Q8:** Which enzyme activates trypsinogen and where?
> Enterokinase (enteropeptidase) at the duodenal brush border

**Q9:** What is the consequence of ileal resection?
> B12 malabsorption and bile salt malabsorption (leading to diarrhea and steatorrhea)

**Q10:** What cofactor does pancreatic lipase require?
> Colipase (anchors lipase to the oil-water interface of fat droplets)`,
        mnemonics: [],
        keyPoints: ["10 recall questions covering digestion, absorption mechanisms, and clinical conditions"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 66-67", edition: "14th" }] },
    ],
  },

  // ─── Topic 4: Liver Functions & Bile ─────────────────────────
  {
    topicCode: "PY-MOD-06-TOP-04",
    layers: [
      { layer: 1, slug: "liver-bile-foundation", title: "Liver Functions & Bile - Foundation", estimatedMinutes: 20,
        summary: "The liver performs over 500 functions including bile production, bilirubin metabolism, protein synthesis, and detoxification. Bile salts are essential for fat digestion and absorption.",
        contentMd: `# Liver Functions & Bile

## Major Liver Functions
1. **Bile production**: 500-1000 mL/day
2. **Protein synthesis**: Albumin, clotting factors (all except VIII), complement
3. **Carbohydrate metabolism**: Glycogenesis, gluconeogenesis, glycogenolysis
4. **Fat metabolism**: Fatty acid oxidation, cholesterol synthesis, lipoprotein formation
5. **Detoxification**: Drug metabolism (cytochrome P450), ammonia to urea
6. **Bilirubin metabolism**: Conjugation and excretion
7. **Storage**: Vitamin A (largest store), B12, iron (as ferritin)

## Bile Composition
- **Bile salts** (50%): Cholic acid and chenodeoxycholic acid (primary bile acids)
- **Phospholipids** (40%): Lecithin
- **Cholesterol** (4%)
- **Bilirubin** (conjugated)
- **Water and electrolytes**

## Bile Salts
- Synthesized from cholesterol in hepatocytes
- **Primary bile acids**: Cholic acid, Chenodeoxycholic acid
- **Secondary bile acids**: Deoxycholic acid, Lithocholic acid (formed by bacterial action in colon)
- **Conjugated** with glycine or taurine before secretion (increases water solubility)
- Function: Emulsify fats, form micelles, facilitate fat absorption

## Enterohepatic Circulation
- 95% of bile salts reabsorbed in **terminal ileum** (active transport, ASBT transporter)
- Return to liver via portal blood
- Recycled 6-8 times per day
- Only 5% lost in feces (replaced by new synthesis)
- **Bile acid sequestrants** (cholestyramine): Bind bile salts in gut, prevent reabsorption --> increased cholesterol conversion to bile salts --> lower LDL

## Bilirubin Metabolism
1. RBC breakdown (reticuloendothelial system) --> Heme --> Biliverdin --> **Unconjugated bilirubin (UCB)**
2. UCB is **insoluble in water**, bound to **albumin** in blood
3. UCB taken up by hepatocytes (ligandins Y and Z)
4. **Conjugated** with glucuronic acid by **UDP-glucuronyl transferase (UGT1A1)**
5. Conjugated bilirubin (CB) is **water-soluble**, excreted in bile
6. In intestine: Bacteria convert CB --> **Urobilinogen**
7. Most urobilinogen excreted in feces as **Stercobilinogen** (gives brown color)
8. Some urobilinogen reabsorbed --> enters kidney --> **Urobilin** (gives yellow color to urine)`,
        mnemonics: [
          { text: "Unconjugated = Unsafe (lipid-soluble, crosses BBB); Conjugated = Can be excreted (water-soluble)", explanation: "UCB is lipid-soluble and neurotoxic; Conjugated bilirubin is water-soluble and can be excreted in bile/urine" },
          { text: "Primary bile acids: C and C (Cholic, Chenodeoxycholic)", explanation: "Two primary bile acids synthesized from cholesterol in the liver" }
        ],
        keyPoints: ["Liver produces 500-1000 mL bile daily", "Bile salts emulsify fat and form micelles", "95% bile salts reabsorbed in terminal ileum (enterohepatic circulation)", "UCB: lipid-soluble, albumin-bound; CB: water-soluble, excreted in bile", "UGT1A1 conjugates bilirubin with glucuronic acid"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 70 - Liver as an Organ", edition: "14th" }] },
      { layer: 2, slug: "liver-bile-mechanism", title: "Liver Functions & Bile - Mechanism", estimatedMinutes: 30,
        summary: "Detailed mechanisms of bile secretion, gallbladder function, bilirubin transport, liver detoxification pathways, and regulation of bile flow.",
        contentMd: `# Detailed Mechanisms

## Bile Secretion
### Bile Salt-Dependent Fraction (~50%)
- Hepatocytes secrete bile salts into canaliculi
- Water and electrolytes follow osmotically
- **BSEP** (Bile Salt Export Pump) on canalicular membrane

### Bile Salt-Independent Fraction (~50%)
- Driven by other organic anions (glutathione, HCO3-)
- **Secretin** stimulates HCO3- rich choleretic secretion from ductular cells

## Gallbladder Function
- Stores and concentrates bile (5-10x)
- Capacity: ~50 mL
- Concentration: Absorption of water and electrolytes (Na+-coupled)
- **CCK** causes gallbladder contraction and sphincter of Oddi relaxation
- Vagal stimulation also causes contraction

## Bilirubin Transport in Detail

| Stage | Form | Carrier/Process |
|-------|------|----------------|
| Blood | UCB | Albumin-bound |
| Hepatocyte uptake | UCB | OATP (organic anion transporter) + ligandins |
| Conjugation | UCB --> CB | UGT1A1 + glucuronic acid |
| Canalicular excretion | CB | MRP2 (multidrug resistance protein 2) |
| Intestine | CB --> Urobilinogen | Bacterial deconjugation and reduction |

## Phase I and Phase II Detoxification
### Phase I (Functionalization)
- **Cytochrome P450** enzymes (CYP450) in smooth ER
- Reactions: Oxidation, reduction, hydrolysis
- CYP3A4: Most abundant, metabolizes ~50% of drugs
- **Inducers**: Rifampin, phenytoin, carbamazepine, alcohol (chronic)
- **Inhibitors**: Ketoconazole, erythromycin, grapefruit juice, cimetidine

### Phase II (Conjugation)
- Glucuronidation (most common), sulfation, acetylation, methylation, glutathione conjugation
- Makes metabolites water-soluble for excretion

## Ammonia Metabolism
- Ammonia produced by: Amino acid deamination, bacterial action in gut
- Liver converts NH3 to **urea** (urea cycle - Krebs-Henseleit cycle)
- In liver failure: NH3 accumulates --> **hepatic encephalopathy**
- Treatment: Lactulose (reduces colonic NH3 absorption), rifaximin (reduces bacterial NH3 production)

## Liver Synthetic Function Markers
- **Albumin**: Half-life 20 days (chronic liver function)
- **Prothrombin time (PT/INR)**: Reflects clotting factor synthesis (acute marker)
- All clotting factors from liver EXCEPT **Factor VIII** (endothelial)`,
        mnemonics: [
          { text: "CYP3A4 metabolizes HALF of all drugs", explanation: "CYP3A4 is the most abundant cytochrome P450 enzyme, metabolizing approximately 50% of clinically used drugs" },
          { text: "BRIC for canalicular transport", explanation: "BSEP exports Bile salts, MRP2 exports conjugated bilirubin and organic anions from hepatocyte to canaliculus" }
        ],
        keyPoints: ["BSEP exports bile salts; MRP2 exports conjugated bilirubin", "CCK contracts gallbladder and relaxes sphincter of Oddi", "CYP3A4 metabolizes 50% of drugs; induced by rifampin", "Phase I = CYP450 (functionalization); Phase II = conjugation", "All clotting factors from liver except Factor VIII"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 70", edition: "14th" }] },
      { layer: 3, slug: "liver-bile-clinical", title: "Liver Functions & Bile - Clinical", estimatedMinutes: 20,
        summary: "Clinical applications including types of jaundice, Gilbert syndrome, gallstones, and liver function tests.",
        contentMd: `# Clinical Applications

## Types of Jaundice

| Feature | Pre-hepatic (Hemolytic) | Hepatic (Hepatocellular) | Post-hepatic (Obstructive) |
|---------|----------------------|------------------------|--------------------------|
| UCB | Increased | Increased | Normal |
| CB | Normal | Increased | Markedly increased |
| Urine bilirubin | Absent (UCB is albumin-bound) | Present (CB is water-soluble) | Present (dark urine) |
| Urine urobilinogen | Increased | Variable | Absent |
| Stool color | Dark | Normal/pale | Clay-colored (pale) |
| Example | Hemolytic anemia | Hepatitis, cirrhosis | Gallstones, pancreatic head CA |

## Neonatal Jaundice
- Physiological: Immature UGT1A1, peaks day 3-5, resolves by day 7-10
- UCB is lipid-soluble --> can cross BBB --> **Kernicterus** (bilirubin encephalopathy)
- Treatment: Phototherapy (converts UCB to water-soluble lumirubin), exchange transfusion (severe)

## Gilbert Syndrome
- **Mild deficiency of UGT1A1** (autosomal recessive, polymorphism in promoter region)
- Most common inherited cause of unconjugated hyperbilirubinemia
- Benign, no treatment needed
- UCB rises with fasting, stress, illness
- Prevalence: 5-10% of population

## Crigler-Najjar Syndrome
- **Type I**: Complete absence of UGT1A1 (severe, kernicterus risk, needs liver transplant)
- **Type II**: Partial deficiency (milder, responds to **phenobarbital** which induces UGT1A1)

## Dubin-Johnson and Rotor Syndrome
- Both cause **conjugated** hyperbilirubinemia (benign)
- Dubin-Johnson: Defective MRP2 (canalicular export), liver is **black** grossly
- Rotor: Defective hepatic storage of conjugated bilirubin

## Gallstones (Cholelithiasis)
- **Cholesterol stones** (80% in India): Yellow-green, radiolucent
- Risk factors: Fat, Female, Forty, Fertile (4F's)
- **Pigment stones** (20%): Brown/black, associated with hemolysis, cirrhosis

## Liver Function Tests

| Test | Reflects |
|------|---------|
| ALT (SGPT) | Hepatocyte damage (most specific for liver) |
| AST (SGOT) | Hepatocyte damage (also in heart, muscle) |
| ALP | Biliary obstruction, bone disease |
| GGT | Biliary obstruction, alcohol use |
| Albumin | Synthetic function (chronic) |
| PT/INR | Synthetic function (acute) |
| Bilirubin | Excretory function |

> **Clinical Pearl**: In India, viral hepatitis (A and E) is the commonest cause of jaundice. In acute viral hepatitis, ALT > AST. In alcoholic hepatitis, AST > ALT (AST/ALT > 2:1).`,
        mnemonics: [
          { text: "4 F's for cholesterol gallstones: Fat, Female, Forty, Fertile", explanation: "Risk factors for cholesterol gallstones include obesity, female sex, age >40, and multiparity" },
          { text: "Gilbert = Gentle (benign, mild UGT1A1 deficiency)", explanation: "Gilbert syndrome is the most common inherited hyperbilirubinemia, benign, no treatment needed" }
        ],
        keyPoints: ["Pre-hepatic: increased UCB, no urine bilirubin; Obstructive: increased CB, clay stool", "Kernicterus: UCB crosses BBB in neonates; treat with phototherapy", "Gilbert: mild UGT1A1 deficiency, benign, 5-10% prevalence", "Dubin-Johnson: defective MRP2, black liver", "ALT most specific for liver damage; AST/ALT > 2 suggests alcohol"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 70", edition: "14th" }, { book: "Harsh Mohan Pathology", chapter: "Ch 20 - Liver", edition: "8th" }] },
      { layer: 4, slug: "liver-bile-exam", title: "Liver Functions & Bile - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield exam facts on liver functions and bile for NEXT and NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners
- Daily bile production: **500-1000 mL**
- Bile salt reabsorption site: **Terminal ileum** (95% reabsorbed)
- Bile salt recycling: **6-8 times/day** (enterohepatic circulation)
- Primary bile acids: **Cholic + Chenodeoxycholic**
- UCB conjugated by: **UGT1A1** with glucuronic acid
- UCB carrier in blood: **Albumin**
- CB exporter from hepatocyte: **MRP2**
- Bile salt exporter: **BSEP**
- CCK effect on gallbladder: **Contraction** + Oddi relaxation
- Most common inherited jaundice: **Gilbert syndrome** (UGT1A1 polymorphism)
- Black liver: **Dubin-Johnson** (MRP2 defect)
- Crigler-Najjar Type II responds to: **Phenobarbital** (UGT1A1 inducer)
- Phototherapy converts UCB to: **Lumirubin** (water-soluble)
- Kernicterus: UCB deposits in **basal ganglia** of neonates
- Most abundant CYP450: **CYP3A4** (50% of drug metabolism)
- Liver produces all clotting factors except: **Factor VIII**
- ALT is more specific for: **Liver** damage
- AST/ALT > 2: Suggests **alcoholic** liver disease
- Hepatic encephalopathy toxin: **Ammonia**
- Treatment of hepatic encephalopathy: **Lactulose + Rifaximin**

## Jaundice Differentiation Quick Table
- Pre-hepatic: UCB up, urine bilirubin negative, dark stool
- Hepatic: Both up, urine bilirubin positive
- Post-hepatic: CB up, clay stool, dark urine, absent urobilinogen`,
        mnemonics: [],
        keyPoints: ["UGT1A1 conjugates bilirubin; Gilbert = mild deficiency", "95% bile salts recycled via terminal ileum", "MRP2 exports CB; Dubin-Johnson = MRP2 defect", "Factor VIII NOT from liver"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 70", edition: "14th" }] },
      { layer: 5, slug: "liver-bile-recall", title: "Liver Functions & Bile - Active Recall", estimatedMinutes: 10,
        summary: "Self-test flashcards for liver functions and bile.",
        contentMd: `# Active Recall

**Q1:** Where are 95% of bile salts reabsorbed?
> Terminal ileum (via ASBT transporter, enterohepatic circulation)

**Q2:** What enzyme conjugates bilirubin in the liver?
> UDP-glucuronyl transferase (UGT1A1) with glucuronic acid

**Q3:** Why does unconjugated bilirubin NOT appear in urine?
> UCB is lipid-soluble and tightly bound to albumin, so it cannot be filtered by glomerulus

**Q4:** What is Gilbert syndrome?
> Most common inherited jaundice; mild UGT1A1 deficiency; benign unconjugated hyperbilirubinemia

**Q5:** What causes clay-colored stools in obstructive jaundice?
> No bilirubin/urobilinogen reaches the intestine (bile duct blocked), so no stercobilin to color stool

**Q6:** What is the most specific liver enzyme?
> ALT (SGPT) - more specific for liver than AST

**Q7:** How does CCK affect the biliary system?
> Contracts gallbladder and relaxes sphincter of Oddi (promotes bile flow into duodenum)

**Q8:** What is kernicterus?
> Deposition of unconjugated bilirubin in basal ganglia of neonates causing brain damage

**Q9:** Which clotting factor is NOT produced by the liver?
> Factor VIII (produced by endothelial cells)

**Q10:** What is the defect in Dubin-Johnson syndrome?
> Defective MRP2 (canalicular export of conjugated bilirubin); grossly black liver`,
        mnemonics: [],
        keyPoints: ["10 recall questions covering bile metabolism, bilirubin, jaundice types, and liver function"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 70", edition: "14th" }] },
    ],
  },

  // ─── Topic 5: GI Hormones & Regulation ───────────────────────
  {
    topicCode: "PY-MOD-06-TOP-05",
    layers: [
      { layer: 1, slug: "gi-hormones-foundation", title: "GI Hormones & Regulation - Foundation", estimatedMinutes: 20,
        summary: "The GI tract is the largest endocrine organ, producing hormones that regulate secretion, motility, and digestion. Major hormones include gastrin, CCK, secretin, GIP, and motilin.",
        contentMd: `# GI Hormones & Regulation

## Major GI Hormones

| Hormone | Cell | Location | Stimulus | Major Actions |
|---------|------|----------|----------|---------------|
| Gastrin | G cells | Antrum, duodenum | Peptides, vagal stimulation, distension | HCl secretion, trophic to GI mucosa |
| CCK | I cells | Duodenum, jejunum | Fatty acids, amino acids | Gallbladder contraction, pancreatic enzymes, satiety |
| Secretin | S cells | Duodenum | Acid (pH < 4.5) | Pancreatic HCO3-, inhibits gastric acid |
| GIP | K cells | Duodenum, jejunum | Glucose, fat | Insulin release (incretin), inhibits gastric acid |
| Motilin | Mo cells | Duodenum, jejunum | Fasting (cyclical) | MMC, gastric emptying |

## Gastrin
- **Most important hormone** for gastric acid secretion
- Two forms: G-17 (antral, most potent) and G-34 (duodenal, longer half-life)
- Acts on **CCK-B receptors** on parietal cells (directly) and ECL cells (histamine release)
- **Trophic effect**: Stimulates growth of gastric mucosa
- Inhibited by: Somatostatin, secretin, low pH (negative feedback)

## Cholecystokinin (CCK)
- Released by fatty acids and amino acids in duodenum
- Functions:
  1. **Gallbladder contraction** + Sphincter of Oddi relaxation
  2. **Pancreatic enzyme** secretion (acinar cells)
  3. **Satiety signal** (acts on hypothalamus)
  4. Delays gastric emptying
  5. Trophic to pancreas

## Secretin
- First hormone ever discovered (Bayliss and Starling, 1902)
- Released by acid in duodenum
- **"Nature's antacid"**: Stimulates HCO3- secretion from pancreatic duct cells
- Inhibits gastric acid secretion
- Potentiated by CCK (both enhance each other)

## GIP (Glucose-dependent Insulinotropic Peptide)
- Previously called Gastric Inhibitory Peptide
- **Incretin effect**: Oral glucose stimulates MORE insulin than IV glucose
- GIP + GLP-1 together mediate 50-70% of insulin response to oral glucose
- Target for DPP-4 inhibitors (sitagliptin) and GLP-1 agonists (liraglutide)

## Motilin
- Regulates the **Migrating Motor Complex (MMC)**
- Released cyclically during fasting (~90 min intervals)
- **Erythromycin** is a motilin receptor agonist (used as prokinetic)`,
        mnemonics: [
          { text: "G cells make Gastrin in the Gut antrum for Gas(tric acid)", explanation: "G cells in the gastric antrum produce gastrin which stimulates HCl secretion" },
          { text: "I cells make CCK: I Cook food (gallbladder bile + pancreatic enzymes for digestion)", explanation: "I cells in duodenum release CCK for gallbladder contraction and pancreatic enzyme secretion" },
          { text: "S cells make Secretin: S for Soda (bicarbonate) for acid neutralization", explanation: "S cells in duodenum release secretin in response to acid, stimulating HCO3- secretion" }
        ],
        keyPoints: ["Gastrin: HCl secretion + trophic (from G cells, stimulated by peptides/vagus)", "CCK: gallbladder contraction + pancreatic enzymes + satiety (from I cells)", "Secretin: pancreatic HCO3- (from S cells, first hormone discovered)", "GIP: incretin effect (enhances insulin release to oral glucose)", "Motilin: MMC regulation, erythromycin = agonist"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 64 - GI Hormones", edition: "14th" }] },
      { layer: 2, slug: "gi-hormones-mechanism", title: "GI Hormones & Regulation - Mechanism", estimatedMinutes: 30,
        summary: "Detailed mechanisms of GI hormone signaling, the incretin axis, VIP and somatostatin functions, and neuroendocrine regulation of digestion.",
        contentMd: `# Detailed Mechanisms

## Gastrin Signaling Pathway
- G cell stimulation: Peptides/AAs in lumen, GRP (gastrin-releasing peptide from vagus), distension
- Gastrin --> CCK-B receptor on parietal cells --> Gq --> IP3/Ca2+ --> HCl
- Gastrin --> CCK-B receptor on ECL cells --> Histamine release --> H2 receptor on parietal cells --> cAMP --> HCl
- **Negative feedback**: Low pH (<2) stimulates D cells --> somatostatin --> inhibits G cells
- **Zollinger-Ellison**: Gastrinoma produces excess gastrin --> no negative feedback --> severe ulcers

## The Incretin Effect
- Oral glucose produces 2-3x more insulin than same amount of IV glucose
- Mediated by:
  1. **GIP** (from K cells): Released by glucose and fat
  2. **GLP-1** (from L cells in ileum/colon): Released by glucose and fat
- Both stimulate insulin secretion in glucose-dependent manner
- Both degraded by **DPP-4** (dipeptidyl peptidase-4)

### Incretin-Based Drugs
- **DPP-4 inhibitors** (gliptins: sitagliptin, vildagliptin): Prevent GIP/GLP-1 breakdown
- **GLP-1 receptor agonists** (liraglutide, semaglutide): Mimic GLP-1 action
  - Also suppress appetite, delay gastric emptying --> weight loss
  - Increasingly used for obesity and T2DM

## Additional GI Hormones

### VIP (Vasoactive Intestinal Peptide)
- Released by neurons in ENS
- Functions: Relaxes smooth muscle, stimulates intestinal secretion (water and electrolytes)
- **VIPoma** (pancreatic tumor): Watery diarrhea, hypokalemia, achlorhydria (**WDHA syndrome / Verner-Morrison**)

### Somatostatin
- From D cells (stomach, intestine) and hypothalamus
- **Universal inhibitor**: Inhibits gastrin, secretin, CCK, GIP, motilin
- Inhibits insulin and glucagon
- Inhibits HCl secretion, pancreatic secretion, gallbladder contraction
- **Octreotide** (somatostatin analog): Used for VIPoma, carcinoid, variceal bleeding, acromegaly

### Ghrelin
- From **fundus of stomach** (X/A-like cells)
- **"Hunger hormone"**: Stimulates appetite (acts on hypothalamus)
- Levels rise before meals, fall after meals
- Stimulates GH release from anterior pituitary
- Levels elevated in: Anorexia nervosa; Decreased after gastric bypass surgery

### GLP-2
- From L cells (with GLP-1)
- Trophic to intestinal mucosa
- Teduglutide (GLP-2 analog): Used for short bowel syndrome

## Cephalic-Vagal Phase Summary
- Sight/smell/taste of food --> Vagus nerve --> Multiple effects:
  - Direct: ACh on parietal cells (HCl), chief cells (pepsinogen)
  - Indirect: GRP on G cells (gastrin), inhibition of D cells (less somatostatin)
  - Pancreas: Enzyme + HCO3- secretion (potentiates hormone effects)`,
        mnemonics: [
          { text: "Ghrelin = Growlin' stomach (hunger)", explanation: "Ghrelin from the stomach fundus stimulates appetite - your stomach 'growls' when ghrelin is high" },
          { text: "VIPoma = Very Intense Pooping (watery diarrhea)", explanation: "VIPoma causes WDHA syndrome: Watery Diarrhea, Hypokalemia, Achlorhydria" }
        ],
        keyPoints: ["Incretin effect: oral glucose causes 2-3x more insulin than IV", "GLP-1 agonists (semaglutide) used for T2DM and obesity", "Somatostatin is universal inhibitor of all GI hormones", "Ghrelin: hunger hormone from fundus, stimulates appetite and GH", "VIPoma: WDHA syndrome (watery diarrhea, hypokalemia, achlorhydria)"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 64-65", edition: "14th" }, { book: "Ganong", chapter: "Ch 25 - GI Hormones", edition: "26th" }] },
      { layer: 3, slug: "gi-hormones-clinical", title: "GI Hormones & Regulation - Clinical", estimatedMinutes: 20,
        summary: "Clinical applications of GI hormones including neuroendocrine tumors, incretin-based therapy, and diagnostic tests.",
        contentMd: `# Clinical Applications

## Neuroendocrine Tumors of GI

| Tumor | Hormone | Features |
|-------|---------|----------|
| Gastrinoma (ZE syndrome) | Gastrin | Recurrent ulcers, diarrhea, MEN-1 |
| VIPoma (Verner-Morrison) | VIP | WDHA: Watery Diarrhea, Hypokalemia, Achlorhydria |
| Insulinoma | Insulin | Hypoglycemia (Whipple's triad) |
| Glucagonoma | Glucagon | Diabetes, necrolytic migratory erythema, DVT |
| Somatostatinoma | Somatostatin | Diabetes, gallstones, steatorrhea |
| Carcinoid | Serotonin | Carcinoid syndrome: flushing, diarrhea, bronchospasm |

## Incretin-Based Diabetes Therapy
### DPP-4 Inhibitors (Gliptins)
- Sitagliptin, vildagliptin, linagliptin
- Prevent degradation of GIP and GLP-1
- Weight neutral, low hypoglycemia risk
- Well-tolerated, widely used in Indian practice

### GLP-1 Receptor Agonists
- Liraglutide (daily), Semaglutide (weekly injection or oral)
- Benefits: Weight loss, cardiovascular protection, renal protection
- Side effects: Nausea, vomiting (initial), rare pancreatitis
- Increasingly prescribed in Indian patients with T2DM + obesity

## Diagnostic Tests Using GI Hormones
- **Secretin stimulation test**: For ZE syndrome - paradoxical rise in gastrin (>200 pg/mL)
- **Pentagastrin test**: Stimulates HCl - used for gastric acid analysis (largely replaced by PPI trial)
- **CCK-HIDA scan**: Assess gallbladder function/ejection fraction

## Somatostatin Analogs in Practice
- **Octreotide** uses:
  1. Variceal bleeding (reduces portal pressure)
  2. Carcinoid syndrome
  3. VIPoma
  4. Acromegaly
  5. Refractory diarrhea

## Carcinoid Syndrome
- Serotonin-producing tumor (usually ileal)
- Syndrome appears when liver metastases present (serotonin bypasses liver metabolism)
- Features: Episodic flushing, diarrhea, bronchospasm, right-sided heart lesions (tricuspid/pulmonary)
- Diagnosis: Urine 5-HIAA (5-hydroxyindoleacetic acid)
- Avoid triggering foods: Tyramine-rich foods (cheese, alcohol)

> **Clinical Pearl**: GLP-1 receptor agonists are gaining popularity in Indian diabetology practice for their weight loss benefits. Semaglutide is now available as a weekly injection and oral form in India.`,
        mnemonics: [
          { text: "4D's of Glucagonoma: Diabetes, Dermatitis (NME), DVT, Depression", explanation: "Glucagonoma presents with diabetes, necrolytic migratory erythema, deep vein thrombosis, and depression" },
          { text: "Right-sided heart for Carcinoid (Right for serotonin, Left for Carcinoid is wrong)", explanation: "Carcinoid syndrome affects right heart valves (tricuspid, pulmonary) because serotonin is metabolized by lungs before reaching left heart" }
        ],
        keyPoints: ["ZE syndrome: recurrent ulcers, gastrin >1000, secretin test positive", "VIPoma: WDHA syndrome, treat with octreotide", "GLP-1 agonists: weight loss + CV/renal protection in T2DM", "Carcinoid: flushing, diarrhea, right heart lesions, urine 5-HIAA", "Octreotide: variceal bleeding, carcinoid, VIPoma, acromegaly"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 64-65", edition: "14th" }, { book: "KD Tripathi Pharmacology", chapter: "Ch 23 - Drugs for Diabetes", edition: "8th" }] },
      { layer: 4, slug: "gi-hormones-exam", title: "GI Hormones & Regulation - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield exam facts on GI hormones for NEXT and NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners
- First hormone discovered: **Secretin** (Bayliss & Starling, 1902)
- Gastrin source: **G cells (antrum)**
- CCK source: **I cells (duodenum)**
- Secretin source: **S cells (duodenum)**
- GIP source: **K cells (duodenum)**
- Motilin source: **Mo cells (duodenum)**
- GLP-1 source: **L cells (ileum/colon)**
- Ghrelin source: **Fundus** of stomach
- Hunger hormone: **Ghrelin**
- Satiety hormone (GI): **CCK** (also GLP-1, PYY)
- Incretin hormones: **GIP + GLP-1**
- Universal GI inhibitor: **Somatostatin**
- MMC hormone: **Motilin** (erythromycin = agonist)
- Secretin stimulated by: **Acid in duodenum (pH < 4.5)**
- CCK stimulated by: **Fatty acids + amino acids**
- Gastrin receptor: **CCK-B** (same as CCK-A is gallbladder)
- ZE syndrome diagnosis: **Secretin stimulation test** (paradoxical gastrin rise)
- VIPoma features: **WDHA** (Watery Diarrhea, Hypokalemia, Achlorhydria)
- Carcinoid marker: **Urine 5-HIAA**
- Carcinoid heart lesion: **Right-sided** (tricuspid, pulmonary)
- GLP-1 agonist example: **Semaglutide**
- DPP-4 inhibitor example: **Sitagliptin**
- Octreotide = **Somatostatin analog**

## Hormone-Cell-Location Quick Reference
G-G-Antrum | I-CCK-Duodenum | S-Secretin-Duodenum | K-GIP-Duodenum | L-GLP1-Ileum | Mo-Motilin-Duodenum`,
        mnemonics: [
          { text: "G-I-S-K for GI hormone cells (top to bottom in the gut)", explanation: "G cells (gastrin/antrum) -> I cells (CCK/duodenum) -> S cells (secretin/duodenum) -> K cells (GIP/duodenum)" }
        ],
        keyPoints: ["Secretin = first hormone discovered", "Incretins: GIP + GLP-1, degraded by DPP-4", "Somatostatin inhibits everything", "Ghrelin = hunger; CCK = satiety"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 64", edition: "14th" }] },
      { layer: 5, slug: "gi-hormones-recall", title: "GI Hormones & Regulation - Active Recall", estimatedMinutes: 10,
        summary: "Self-test flashcards for GI hormones and regulation.",
        contentMd: `# Active Recall

**Q1:** Which was the first hormone ever discovered?
> Secretin (by Bayliss and Starling in 1902)

**Q2:** What are the 3 stimulants of gastrin release from G cells?
> Peptides/amino acids in lumen, GRP from vagus nerve, gastric distension

**Q3:** What is the incretin effect?
> Oral glucose stimulates 2-3x more insulin than same amount of IV glucose, due to GIP and GLP-1

**Q4:** Which hormone is known as the hunger hormone?
> Ghrelin (from stomach fundus, rises before meals)

**Q5:** What is the universal inhibitor of GI hormones?
> Somatostatin (from D cells, inhibits gastrin, CCK, secretin, GIP, motilin)

**Q6:** What is VIPoma syndrome?
> WDHA: Watery Diarrhea, Hypokalemia, Achlorhydria due to VIP-secreting tumor

**Q7:** What test diagnoses Zollinger-Ellison syndrome?
> Secretin stimulation test (paradoxical rise in gastrin >200 pg/mL; normal would be suppression)

**Q8:** What hormone regulates the MMC?
> Motilin (from Mo cells in duodenum, released cyclically during fasting)

**Q9:** What drug is a motilin receptor agonist used as a prokinetic?
> Erythromycin

**Q10:** Why does carcinoid syndrome affect right-sided heart valves?
> Serotonin from liver metastases reaches right heart first; lungs metabolize serotonin before it reaches left heart`,
        mnemonics: [],
        keyPoints: ["10 recall questions covering all major GI hormones, their functions, and clinical significance"],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 64", edition: "14th" }] },
    ],
  },
];
