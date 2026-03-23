import type { TopicLessons } from "./content-loader";

export const pediatricsPart8Lessons: TopicLessons[] = [
  {
    topicCode: "PE-MOD-02-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "neonatal-sepsis-layer-1-foundation",
        title: "Neonatal Sepsis - Foundation",
        estimatedMinutes: 20,
        summary: "Neonatal sepsis classification (early vs late onset), risk factors, pathophysiology, and immune immaturity.",
        contentMd: `# Neonatal Sepsis - Foundation

## Definitions

**Neonatal sepsis**: Systemic infection in neonates (0-28 days) confirmed by blood culture

**Early-Onset Sepsis (EOS)**: Presentation within first 72 hours
- Vertical transmission from mother
- Occurs during hospitalization for birth

**Late-Onset Sepsis (LOS)**: Presentation after 72 hours
- Horizontal transmission (environmental)
- Occurs after discharge or prolonged hospitalization

## Risk Factors for EOS

**Maternal factors**:
- PROM >18 hours
- Maternal fever/chorioamnionitis
- GBS positive without prophylaxis
- Low socioeconomic status

**Neonatal factors**:
- Prematurity <37 weeks
- Low birth weight <2500 g
- Male sex
- Apgar <7 at 5 minutes

## Common Organisms

**EOS**:
- GBS (Group B Streptococcus) - 40%
- E. coli K1 - second most common
- Listeria monocytogenes
- Gram-negative enterics

**LOS**:
- Staphylococcus aureus (including MRSA)
- CoNS (Coagulase-negative Staphylococci)
- Enterococci
- Candida
- Klebsiella, Pseudomonas

## Neonatal Immune Immaturity

**Antibody deficiency**:
- Low IgG (passively acquired, drops by 3-6 months)
- Absent IgM, IgA

**Complement**:
- 50-80% of adult values
- Impaired opsonization

**Cells**:
- Impaired neutrophil chemotaxis
- Reduced T-cell function`,
        mnemonics: [
          { text: "EOS <72h = vertical (mother), LOS >72h = horizontal", explanation: "Transmission route" },
          { text: "GBS + E. coli = 80% of EOS", explanation: "Most common organisms" },
          { text: "Neonatal: ↓ IgM, ↓ complement, ↓ neutrophils", explanation: "Immaturity mechanisms" },
        ],
        keyPoints: [
          "EOS: vertical transmission, <72 hours",
          "LOS: horizontal transmission, >72 hours",
          "GBS (40%) and E. coli most common EOS",
          "PROM >18h, maternal fever are major risk factors",
          "Neonatal immunity immature: low IgG, absent IgM/IgA",
          "Low birth weight, prematurity, male sex are neonatal risks",
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Neonatal Sepsis", edition: "9th" },
          { book: "Nelson Textbook of Pediatrics", chapter: "Infections of Newborn", edition: "21st" },
        ],
      },
      {
        layer: 2,
        slug: "neonatal-sepsis-layer-2-mechanism",
        title: "Neonatal Sepsis - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathophysiology of neonatal infection, immune dysfunction mechanisms, inflammatory cascade, and complications.",
        contentMd: `# Neonatal Sepsis - Pathophysiology

## Routes of Infection

**Vertical transmission (EOS)**:
- Maternal genital flora (vagina, rectum)
- Ascending infection (PROM, labor)
- Aspiration during delivery

**Horizontal transmission (LOS)**:
- Skin colonization (healthcare workers)
- Mucous membranes (GI, respiratory)
- Bloodstream seeding (lines, procedures)

## Immune Dysfunction

**Complement system**:
- 50-80% of adult values
- Impaired opsonization (poor bacterial coating)
- Reduced complement activation

**Neutrophils**:
- Reduced storage pool (depletes quickly)
- Impaired chemotaxis
- Reduced killing capacity

**Antibodies**:
- Absent IgM (not crossing placenta)
- Absent IgA (no mucosal immunity)
- Low maternal IgG in preterm

## Bacterial Virulence

**GBS**:
- Hyaluronic acid capsule (immune evasion)
- β-hemolysin (toxin)
- No opsonizing IgM antibody

**E. coli K1**:
- K1 capsule antigen
- LPS endotoxin
- Fimbriae for adherence

## Septic Shock

**SIRS**:
- Fever or hypothermia
- Tachycardia, tachypnea
- Elevated/depressed WBC

**Septic Shock**:
- Hypotension (systolic <65 mmHg)
- Tissue hypoperfusion
- Multi-organ dysfunction`,
        mnemonics: [
          { text: "GBS = hyaluronic capsule (evasion)", explanation: "Virulence mechanism" },
          { text: "Neonatal septic shock = vasodilation + ↓ contractility", explanation: "TNF-α effects" },
        ],
        keyPoints: [
          "Vertical: maternal genital flora, aspiration during delivery",
          "Horizontal: skin colonization, healthcare contact",
          "Complement 50-80%: impaired opsonization",
          "Neutrophil storage pool quickly depleted",
          "GBS virulence: hyaluronic capsule, no IgM antibodies",
          "Septic shock: hypotension + tissue hypoperfusion",
          "Meningitis in 10-15% of EOS",
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Neonatal Immune Mechanisms", edition: "9th" },
          { book: "Robbins Pathology", chapter: "Infectious Diseases", edition: "10th" },
        ],
      },
      {
        layer: 3,
        slug: "neonatal-sepsis-layer-3-clinical",
        title: "Neonatal Sepsis - Clinical Assessment",
        estimatedMinutes: 25,
        summary: "Clinical presentation of neonatal sepsis, signs by system, diagnostic approach, and biomarkers.",
        contentMd: `# Neonatal Sepsis - Clinical Assessment

## Clinical Presentation

**Non-specific signs**:
- Fever or hypothermia
- Irritability or lethargy
- Poor feeding, sucking
- Vomiting, abdominal distension

**Respiratory**:
- Tachypnea (>60/min)
- Grunting, retractions
- Apnea spells
- Cyanosis

**Cardiovascular**:
- Tachycardia
- Hypotension (systolic <65 mmHg)
- Poor perfusion (cold extremities, mottled)
- Delayed capillary refill (>3 seconds)

**Neurological**:
- Seizures
- Bulging fontanelle (meningitis)
- Hypotonia, decreased reflexes
- Altered consciousness

**Skin**:
- Petechiae, purpura (DIC)
- Pustules (bacterial infection)
- Poor skin turgor

## Investigations

**Blood Culture**:
- Gold standard
- Draw >0.5 mL before antibiotics
- Aerobic + anaerobic bottles

**Complete Blood Count**:
- Total WBC: elevated or depressed (depressed worse)
- Left shift: increased immature forms
- Platelet count: low suggests DIC

**C-Reactive Protein**:
- Rises 6-8 hours after infection
- Serial CRP more useful

**Procalcitonin**:
- More specific for bacterial infection
- Rises 2-4 hours

**Lumbar Puncture**:
- If meningitis suspected
- CSF: low glucose, high protein, pleocytosis
- Culture of CSF

**Lactate**:
- Elevated in tissue hypoperfusion
- Prognostic indicator`,
        mnemonics: [
          { text: "Non-specific: fever/hypothermia, poor feeding", explanation: "Early signs" },
          { text: "Depressed WBC worse than elevated", explanation: "Prognostic sign" },
          { text: "Blood culture >0.5 mL before antibiotics", explanation: "Gold standard" },
        ],
        keyPoints: [
          "Non-specific: fever/hypothermia, irritability, poor feeding",
          "Respiratory: tachypnea, grunting, apnea",
          "Cardiovascular: tachycardia, hypotension, poor perfusion",
          "Neurological: seizures, bulging fontanelle",
          "Blood culture: >0.5 mL before antibiotics",
          "CBC: depressed WBC more ominous",
          "CRP rises 6-8 hours, serial measurement important",
          "Procalcitonin rises 2-4 hours",
          "Lumbar puncture: CSF glucose <50% serum glucose",
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Clinical Diagnosis", edition: "9th" },
          { book: "Manual of Neonatal Care", chapter: "Neonatal Infection", edition: "9th" },
        ],
      },
      {
        layer: 4,
        slug: "neonatal-sepsis-layer-4-exam",
        title: "Neonatal Sepsis - Exam Prep",
        estimatedMinutes: 25,
        summary: "Management of EOS and LOS, antibiotic selection, duration, supportive care, and prevention.",
        contentMd: `# Neonatal Sepsis - Management & Prevention

## Empiric Antibiotic Therapy

**For EOS (first 72 hours)**:
- **Ampicillin** 50 mg/kg IV every 6-12 hours (GBS, Listeria)
- **PLUS Gentamicin** 7.5 mg/kg IV once daily (E. coli)
- Duration: 7-10 days if positive, 48-72 hours if negative + improving

**For LOS (after 72 hours)**:
- **Vancomycin** 15-20 mg/kg IV every 8-12 hours (resistant gram-positive)
- **PLUS Gentamicin** 7.5 mg/kg IV once daily (gram-negative)
- PLUS consider Cefotaxime if gram-negative likely
- Duration: 10-14 days

**For Meningitis**:
- **Cefotaxime** 50 mg/kg IV every 6 hours (CNS penetration)
- **PLUS Vancomycin** 15-20 mg/kg IV every 8-12 hours
- **Ampicillin** still needed (Listeria coverage)
- **PLUS Dexamethasone** 0.6 mg/kg IV every 6 hours x 4 days
- Duration: 14 days (GBS), 21 days (gram-negative)

## Supportive Care

**Fluid & Electrolyte**:
- IV fluids: glucose, electrolytes, fluid balance
- Correct acidosis if severe

**Hemodynamic Support**:
- Fluids first for hypotension
- Vasopressors (dopamine) if needed
- Target MAP = 40 + (2 x age in days)

**Respiratory Support**:
- Supplemental O2 for SpO2 >90%
- Mechanical ventilation if respiratory failure

## Prevention

**GBS Prevention**:
- Intrapartum antibiotic prophylaxis (IAP)
- Penicillin G 5 million units IV then 2.5 million every 4 hours
- Alternative: Cephalexin, vancomycin if allergy

**Infection Prevention**:
- Skin antisepsis
- Aseptic technique for procedures
- Limited invasive procedures
- Hand hygiene`,
        mnemonics: [
          { text: "EOS: Ampicillin + Gentamicin", explanation: "Empiric therapy" },
          { text: "LOS: Vancomycin + Gentamicin ± Cefotaxime", explanation: "Resistant coverage" },
          { text: "Meningitis: add Cefotaxime, Vancomycin, keep Ampicillin", explanation: "CNS coverage" },
        ],
        keyPoints: [
          "Start empiric antibiotics immediately",
          "EOS: ampicillin (GBS, Listeria) + gentamicin",
          "LOS: vancomycin (resistant) + gentamicin + cefotaxime",
          "Meningitis: cefotaxime + vancomycin + ampicillin",
          "Dexamethasone with first antibiotic (meningitis)",
          "Hemodynamic support: fluids first, then vasopressors",
          "GBS prevention: intrapartum antibiotics",
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Management", edition: "9th" },
          { book: "AAP/ACOG Guidelines", chapter: "GBS Prevention", edition: "2020" },
        ],
      },
      {
        layer: 5,
        slug: "neonatal-sepsis-layer-5-active-recall",
        title: "Neonatal Sepsis - Active Recall",
        estimatedMinutes: 15,
        summary: "Clinical scenarios for diagnosis, management decisions, and prognostic assessment.",
        contentMd: `# Active Recall: Neonatal Sepsis

**Q1:** Term newborn, 18 hours of life. Mother had PROM 20 hours. Mother fever (T 38.2°C) before delivery. Baby irritable, poor feeding, HR 160, RR 65. WBC 7,500 with left shift. What management?
> **Answer:** High risk EOS (PROM >18h, maternal fever). Start empiric antibiotics IMMEDIATELY: Ampicillin 50 mg/kg IV every 6 hours + Gentamicin 7.5 mg/kg IV once daily. Draw blood culture before antibiotics. Continue 7-10 days if positive, 48-72 hours if negative + improving.

**Q2:** 4-day-old preterm (32 weeks), on ventilator, central line. Fever (T 38.5°C), increasing O2 requirement, septic appearance. WBC 3,500 (depressed), CRP >30. What antibiotics?
> **Answer:** LOS (day 4, hospitalized). Start vancomycin 15-20 mg/kg IV every 8-12 hours + gentamicin 7.5 mg/kg IV once daily + cefotaxime. Depressed WBC is concerning sign. Continue 10-14 days depending on organism.

**Q3:** 2-day-old with seizures, bulging fontanelle, CSF pleocytosis, Gram-positive cocci. GBS meningitis presumed. Antibiotics?
> **Answer:** Cefotaxime 50 mg/kg IV every 6 hours + Vancomycin 15-20 mg/kg IV every 8-12 hours + Ampicillin 50 mg/kg IV every 6 hours. ADD dexamethasone 0.6 mg/kg IV every 6 hours x 4 days. Treat 14 days (GBS). Repeat LP at 24-48 hours.

**Q4:** Term baby, 6 hours of life. Mother GBS-positive, PROM 24 hours, no intrapartum antibiotics. Baby asymptomatic. Treat?
> **Answer:** YES. High risk EOS even though asymptomatic. Start ampicillin + gentamicin. 6 hours too early to rule out sepsis. Stop at 48 hours if culture negative + clinically well.

**Q5:** 5-day-old with fever, abdominal distension, bilious vomiting. X-ray shows pneumatosis intestinalis. Diagnosis and management?
> **Answer:** Necrotizing enterocolitis (NEC). NPO immediately, NG decompression, IV fluids, start antibiotics: ampicillin + gentamicin + clindamycin. Blood culture. Surgical consultation if perforation.

**Q6:** 3-day-old with GBS sepsis (positive blood culture), no meningitis. On ampicillin + gentamicin, improving clinically. Duration of treatment?
> **Answer:** 7-10 days (positive blood culture). Continue current antibiotics. Blood culture should be sterile at 24 hours. Total 7-10 days for non-meningitis GBS bacteremia.

**Q7:** Term baby born to mother with penicillin anaphylaxis. GBS-positive at birth. Now day 3, baby septic. What antibiotics?
> **Answer:** Baby can receive beta-lactams even if mother allergic (different person). Use cephalosporin (cefotaxime) as allergy alternative, or penicillin if anaphylaxis unlikely. Add gentamicin. Maternal history should NOT prevent appropriate antibiotics in baby.

**Q8:** 10-day-old, culture-positive Candida sepsis. Currently on ampicillin + gentamicin, stable. Change antibiotics?
> **Answer:** Switch to Amphotericin B 1 mg/kg IV daily. Remove central line if possible (source control). Fluconazole alternative if susceptible. Treat 14 days minimum. Repeat cultures to document sterilization.

**Q9:** 1-day-old from mother with PROM 48 hours. CRP 2 mg/dL (slightly elevated), WBC 8,000 (normal), no clinical signs. Treat?
> **Answer:** Risk stratification: PROM >18h = high risk. Give empiric ampicillin + gentamicin. Repeat CRP at 24 hours (serial CRP more useful). Can stop antibiotics at 48 hours if CRP not rising, clinically normal, blood culture negative.

**Q10:** GBS-positive mother, no intrapartum antibiotics. Baby 32 weeks, age 36 hours, signs of sepsis (WBC 4,500, CRP 50, fever). Antibiotic choice?
> **Answer:** EOS (36 hours = <72h). Start Ampicillin 50 mg/kg IV every 8-12 hours + Gentamicin 7.5 mg/kg IV once daily. If GBS confirmed, continue for 7-10 days. Monitor closely (preterm = higher morbidity).`,
        mnemonics: [
          { text: "EOS: Ampicillin + Gentamicin", explanation: "Standard empiric therapy" },
          { text: "LOS: Vancomycin + Gentamicin + Cefotaxime", explanation: "Resistant coverage" },
          { text: "Meningitis: Cefotaxime + Vancomycin + Ampicillin + Dexamethasone", explanation: "CNS coverage" },
        ],
        keyPoints: [
          "Start empiric antibiotics immediately on suspicion",
          "EOS: ampicillin + gentamicin",
          "LOS: vancomycin + gentamicin ± cefotaxime",
          "Meningitis: cefotaxime + vancomycin + ampicillin + dexamethasone",
          "Depressed WBC more ominous than elevated",
          "Blood culture before antibiotics (gold standard)",
          "NEC: NPO, NG decompression, broad antibiotics + clindamycin",
          "Candida: Amphotericin B, remove central line",
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Case Studies", edition: "9th" },
        ],
      },
    ],
  },
];

export default pediatricsPart8Lessons;
