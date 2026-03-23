import type { TopicLessons } from "./content-loader";

export const pediatricsLessonsPart18: TopicLessons[] = [
  {
    topicCode: "PE-MOD-04-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "meningitis-layer-1-foundation",
        title: "Meningitis & Encephalitis in Children - Foundation",
        estimatedMinutes: 25,
        summary: "Meningitis is inflammation of meninges (dura, arachnoid, pia); encephalitis affects brain parenchyma. Common pediatric pathogens: S. pneumoniae, N. meningitidis, H. influenzae type b, Listeria (neonates). CSF findings differentiate bacterial (↑protein, ↓glucose, ↑WBC PMN), viral (↑protein, normal glucose, ↑WBC lymph), and fungal patterns.",
        contentMd: `# Meningitis & Encephalitis - Foundation

## Introduction and Definitions

### Meningitis
- **Definition**: Inflammation of brain meninges (dura, arachnoid, pia mater)
- **Medical emergency**: Mortality 5-10% bacterial; <1% viral
- **Indian context**: Common cause of childhood mortality in low-income regions

### Encephalitis
- **Definition**: Brain parenchymal inflammation (neuronal and glial involvement)
- **Often accompanies**: Viral meningitis (meningoencephalitis)
- **Focal manifestations**: Seizures, personality changes, altered consciousness

## Epidemiology in Indian Pediatrics

### Bacterial Meningitis Pathogens (Age-dependent)

**Neonates (0-3 months):**
- Group B Streptococcus (GBS): Most common
- E. coli K1: Second most common
- Listeria monocytogenes: 5-10%

**Infants & Children (3 months - 18 years):**
- Streptococcus pneumoniae: Most common (60%)
- Neisseria meningitidis: 20-30% (second most)
- Haemophilus influenzae type b: <5% (due to Hib vaccine)

### Viral Causes
- **Enteroviruses** (Coxsackie, Echovirus): Most common viral cause
- **Mumps**: Declining due to MMR vaccine
- **Measles**: Rare; post-vaccination decline
- **Paramyxoviruses**
- **HSV-1**: Older children; can cause encephalitis

### Fungal Meningitis (Less common, specific settings)
- Cryptococcus: Immunocompromised
- Coccidioides, Histoplasma: Geographic

## Clinical Presentation

### Classical Triad (not always present)
1. **Fever**: >38°C typically
2. **Headache**: Older children; infants show irritability
3. **Neck stiffness**: Kernig sign, Brudzinski sign

### Additional Features (Meningitis)
- **Altered mental status**: Confusion, irritability, lethargy
- **Rash**: Petechial/purpuric (meningococcemia); suggests severe disease
- **Phonophobia & Photophobia**: Light and sound sensitivity
- **Seizures**: 20-30% of bacterial meningitis
- **Headache characteristics**: Severe, unrelenting
- **Vomiting**: Non-bilious; due to increased ICP

### Infant Presentation (Subtle signs)
- Fever or hypothermia
- Poor feeding, lethargy
- Bulging anterior fontanelle (increased ICP)
- Irritability
- Seizures
- Absence of neck stiffness initially

### Encephalitis-Specific Features
- **Altered consciousness**: More prominent than meningitis alone
- **Personality changes**: Aggression, inappropriate behavior
- **Focal neurological signs**: Hemiparesis, aphasia
- **Seizures**: Common (50-80%)
- **Movement disorders**: Dystonia, tremor
- **Status epilepticus**: Can occur

## Cerebrospinal Fluid (CSF) Characteristics

### Normal CSF Values (Child)
- Pressure: 10-20 cm H₂O
- Cell count: 0-5 cells (mostly lymphocytes)
- Glucose: 40-80 mg/dL
- Protein: 15-45 mg/dL
- Culture: Sterile

### Bacterial Meningitis CSF
| Parameter | Finding |
|---|---|
| Appearance | Turbid/purulent (cloudy) |
| Pressure | >25 cm H₂O (elevated) |
| WBC count | 100-10,000 cells/μL |
| Cell type | Predominantly PMN (neutrophils) |
| Glucose | <40 mg/dL (low) |
| Protein | 100-1000 mg/dL (elevated) |
| Gram stain | May show organism (50%) |
| Culture | Positive (if not pre-treated) |

### Viral Meningitis CSF
| Parameter | Finding |
|---|---|
| Appearance | Clear or slightly turbid |
| Pressure | Normal to mildly elevated |
| WBC count | 10-1000 cells/μL |
| Cell type | Lymphocytic (early: PMN, shifts to lymph) |
| Glucose | Normal (40-80 mg/dL) |
| Protein | Mildly elevated (50-100 mg/dL) |
| Gram stain | Negative |
| Culture | Negative (viral PCR positive) |`,
        mnemonics: [
          {
            text: "Meningitis Pathogens by Age - GEL vs SNH",
            explanation: "Neonates: GBS, E. coli, Listeria. Children: S. pneumoniae, N. meningitidis, H. influenzae"
          },
          {
            text: "CSF Pattern Recognition - BVM vs VVM",
            explanation: "Bacterial: high Protein (100+), low glucose, high WBC (PMN). Viral: moderate protein, normal glucose, lymphocytes"
          }
        ],
        keyPoints: [
          "Meningitis: Meningeal inflammation; encephalitis: brain parenchymal involvement",
          "Bacterial meningitis: Turbid CSF, low glucose (<40), high protein (>100), PMN predominance",
          "Viral meningitis: Clear CSF, normal glucose, mildly elevated protein, lymphocytes",
          "S. pneumoniae and N. meningitidis: Most common in older children",
          "GBS, E. coli, Listeria: Most common in neonates",
          "Empiric antibiotics: Must start before CSF culture confirmation"
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Chapter 13: Infectious Diseases", edition: "9th" },
          { book: "Nelson Textbook of Pediatrics", chapter: "Chapter 612: Meningitis", edition: "21st" }
        ]
      },
      {
        layer: 2,
        slug: "meningitis-layer-2-mechanism",
        title: "Meningitis & Encephalitis - Pathogenesis",
        estimatedMinutes: 30,
        summary: "Bacterial meningitis: Bacteremia → Blood-brain barrier invasion → Meningeal inflammation (TNF-α, IL-1) → CSF pleocytosis. Viral: Direct CNS invasion → Neuronal/glial infection → Lymphocytic inflammation. Encephalitis: Parenchymal cytotoxicity; risk of edema, seizures.",
        contentMd: `# Meningitis & Encephalitis - Pathogenesis

## Bacterial Meningitis Pathogenesis

### Route of Infection
1. **Respiratory acquisition**: Airborne droplets
2. **Colonization**: Nasopharyngeal mucosa
3. **Mucosal invasion**: Bacterial adhesins bind epithelium
4. **Bacteremia**: Bloodstream dissemination
5. **BBB invasion**: Transcytosis or paracellular route
6. **Meningeal colonization**: Subarachnoid space

### Bacterial Virulence Factors

**Adhesins (Initial Attachment):**
- **Streptococcus pneumoniae**: Choline-binding proteins, hyaluronic acid capsule
- **Neisseria meningitidis**: Pili, outer membrane proteins
- **E. coli K1**: K1 capsule mimics neural tissue

**Capsule & Resistance:**
- Polysaccharide capsule: Resists complement, antibodies
- Inhibits phagocytosis
- Makes organism more virulent

**Toxins & Enzymes:**
- **Pneumolysin** (S. pneumoniae): Pore-forming toxin; inflammatory mediator
- **Lipopolysaccharide** (gram-negative): TLR4 activation; endotoxin

### Inflammatory Cascade (Meningeal Inflammation)

**Bacterial Translocation into Subarachnoid Space:**
1. **Breach of BBB**: Tight junction disruption
2. **Increased permeability**: Endothelial activation
3. **Complement activation**: Classical pathway
   - C3a, C5a: Chemotactic factors
   - MAC (C5b-9): Cell lysis

**Cytokine Release (Inflammatory Mediators):**
- **TNF-α**: Macrophage activation; BBB permeability increase
- **IL-1β**: Systemic inflammation; fever induction
- **IL-6**: B-cell activation; antibody production
- **IL-8**: Neutrophil chemotaxis
- **Chemokines**: CXCL8, CCL2 drive leukocyte infiltration

**Meningeal Response:**
1. **Neutrophil infiltration**: PMN accumulation in CSF
2. **Protein leakage**: Vascular permeability increase → elevated CSF protein
3. **Glucose decline**: Bacteria consume glucose; impaired CSF-blood glucose exchange
4. **Lactate accumulation**: Anaerobic metabolism by bacteria and PMNs
5. **Intracranial pressure increase**: Edema, inflammation, exudate

## Viral Meningitis & Encephalitis Pathogenesis

### Viral Invasion Pathways

**Blood-Brain Barrier Invasion:**
1. **Viremia**: Initial systemic viral replication
2. **Hematogenous dissemination**: To CNS
3. **BBB transcytosis**: Virus crosses endothelium
4. **Alternative route**: Infection of choroid plexus epithelium

### CNS Infection Pattern

**Meningitis (CSF involvement):**
- Choroid plexus epithelium infection
- Inflammatory cell infiltration (lymphocytes)
- Relatively rapid, usually self-limited
- Mortality <1%

**Encephalitis (Parenchymal involvement):**
- Direct neuronal infection
- Glial activation and cytokine production
- Cell death by apoptosis, necrosis
- More severe symptoms (seizures, altered consciousness)
- Mortality 5-15%

### Immune Response

**Innate Immunity:**
- Interferon-α/β production: Antiviral state
- Microglia activation: Local immune response
- Complement activation: Slower than bacterial

**Adaptive Immunity:**
- T-cell infiltration: CD8+ (cytotoxic), CD4+ (helper)
- Antibody production: IgG, IgM in CSF
- B-cell germinal centers in meninges

**Neurotoxicity Mechanisms:**
- **Direct viral cytolysis**: Neuron lysis
- **Bystander damage**: Collateral immune cell damage
- **Cytokine storm**: Excessive TNF-α, IL-1, IL-6
- **Glutamate excitotoxicity**: Excessive neural excitation

### Encephalitis Complications

**Seizures (40-80%):**
- Neuronal hyperexcitability from inflammation
- Risk of status epilepticus

**Cerebral Edema:**
- Cytotoxic swelling
- Leads to herniation risk

**Cognitive Impairment:**
- Neuronal loss
- Permanent sequelae possible`,
        mnemonics: [
          {
            text: "Bacterial Meningitis Cascade - BCL",
            explanation: "Bacteremia → BBB breach → Leukocyte infiltration (TNF-α, IL-1 cytokines)"
          },
          {
            text: "CSF Changes in Bacterial Meningitis - PLPG",
            explanation: "Protein elevated (100+), Lactate high, PMN cells (not lymph), Glucose low (<40)"
          }
        ],
        keyPoints: [
          "Bacterial meningitis: Droplet transmission, mucosal colonization, bacteremia, BBB invasion",
          "Inflammation: TNF-α, IL-1, IL-6, IL-8 drive neutrophil infiltration and BBB permeability",
          "CSF glucose decline: Bacterial consumption and impaired CNS glucose uptake",
          "Viral encephalitis: Direct parenchymal infection; higher mortality than meningitis",
          "Seizure risk: Increased in encephalitis; both bacterial (20-30%) and viral (40-80%)",
          "Cytotoxic mechanisms: Direct lysis, bystander damage, cytokine storm, glutamate excitotoxicity"
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 28: CNS Infections", edition: "10th" },
          { book: "Nelson Textbook of Pediatrics", chapter: "Chapter 612: Meningitis", edition: "21st" }
        ]
      },
      {
        layer: 3,
        slug: "meningitis-layer-3-clinical",
        title: "Meningitis & Encephalitis - Diagnosis",
        estimatedMinutes: 25,
        summary: "Clinical: Fever + headache + neck stiffness; infants present with fever, irritability, bulging fontanelle. Diagnosis: Lumbar puncture (LP) with CSF analysis, blood cultures. Imaging: CT/MRI if contraindication to LP. Empiric antibiotics started before LP results.",
        contentMd: `# Meningitis & Encephalitis - Clinical Diagnosis

## Clinical Assessment

### Classic Presentation (Older Children)
- **Fever**: Usually high (>38.5°C)
- **Headache**: Severe, generalized
- **Neck stiffness**: Nukhal rigidity
- **Kernig sign**: Hip/knee flexion; pain on extension
- **Brudzinski sign**: Neck flexion → hip/knee flexion
- **Altered mental status**: Confusion, lethargy

### Infant/Toddler Presentation (Subtle)
- Fever (may be absent initially)
- Irritability, excessive crying
- Poor feeding
- Lethargy
- **Bulging fontanelle**: Key finding (increased ICP)
- Seizures
- Absence of neck stiffness initially

### Meningococcemia Signs (N. meningitidis)
- **Petechial/purpuric rash**: Non-blanching
- **Rapid progression**: Hours to septic shock
- **Adrenal insufficiency**: Waterhouse-Friderichsen syndrome

### Encephalitis-Specific Features
- **Altered consciousness**: Prominent (not just headache/neck stiffness)
- **Personality changes**: Aggression, inappropriate behavior
- **Seizures**: More common than meningitis alone
- **Focal deficits**: Weakness, speech changes
- **Movement disorders**: Dystonia, tremor
- **Status epilepticus**: Medical emergency

## Diagnosis

### Lumbar Puncture (CSF Analysis) - Gold Standard

**CSF Parameters (Bacterial vs Viral):**

| Parameter | Bacterial | Viral |
|---|---|---|
| **Appearance** | Turbid/purulent | Clear/slightly opalescent |
| **Pressure** | >25 cm H₂O | Normal-mildly elevated |
| **WBC** | 100-10,000/μL | 10-1000/μL |
| **Cell type** | PMN predominant | Lymph predominant (early: PMN) |
| **Glucose** | <40 mg/dL; CSF/serum <0.4 | Normal 40-80 mg/dL |
| **Protein** | 100-1000+ mg/dL | 50-100 mg/dL |
| **Gram stain** | Positive 50% | Negative |
| **Culture** | Positive (bacteria grow) | Negative (virus doesn't grow) |
| **PCR** | PCR for bacteria | Viral PCR positive |

**Timing of CSF Changes:**
- **Early bacterial meningitis**: PMN may be <50% initially
- **Serial LP**: Often not needed; repeat only if clinical deterioration
- **Viral**: CSF lymphocytes increase over 24-48 hours

### Blood Cultures
- **Bacterial meningitis**: Positive in 70-90% (before antibiotics)
- **Viral**: Usually negative
- **Timing**: Culture before antibiotics for diagnostic yield

### Gram Stain of CSF
- **Sensitivity**: 50-70%
- **Streptococcus pneumoniae**: Gram-positive diplococci
- **Neisseria meningitidis**: Gram-negative diplococci
- **Haemophilus influenzae**: Gram-negative coccobacillus
- **E. coli**: Gram-negative rods

### Imaging

**When to do CT before LP:**
- **Papilledema** (optic disc swelling)
- **Focal neurological signs**
- **Immunocompromised**
- **Mass lesion suspected**
- **Contraindication to LP** (coagulopathy, thrombocytopenia)

**CT findings (Bacterial Meningitis):**
- Meningeal enhancement
- Obliteration of cisterns (edema)
- Ventricular dilatation (hydrocephalus)
- Subdural collections

**MRI (More sensitive):**
- Better CSF visualization
- Detects subdural empyema
- Evaluates for encephalitis (parenchymal signal changes)
- Identifies secondary complications

### Additional Tests

**Rapid Antigen Detection (Bacterial):**
- Latex agglutination: S. pneumoniae, N. meningitidis, H. influenzae
- Useful if Gram stain negative, culture slow

**PCR:**
- **Bacterial PCR**: Rapid identification
- **Viral PCR**: Gold standard for viral meningitis/encephalitis
- Highly sensitive and specific

**EEG (Encephalitis):**
- Diffuse slowing (encephalitis pattern)
- Seizure activity documentation
- May show focal abnormalities

### Indicators of Severe Bacterial Meningitis
- Low CSF glucose (<5 mg/dL; very poor prognosis)
- Elevated CSF lactate (>4 mmol/L)
- High CSF protein (>1000 mg/dL)
- Absence of CSF pleocytosis (fulminant)
- Positive blood culture + clinical deterioration`,
        mnemonics: [
          {
            text: "LP Contraindications - PIMP",
            explanation: "Papilledema, Immunocompromised, Mass lesion, coagulopathy/low platelets"
          },
          {
            text: "CSF Cell Pattern Timeline - PL",
            explanation: "Early (PMN predominates), Later (Lymphocytes predominate, especially viral)"
          }
        ],
        keyPoints: [
          "Lumbar puncture: Essential for diagnosis; do not delay antibiotics",
          "Bacterial CSF: Turbid, high protein (100-1000), low glucose (<40), PMN cells",
          "Viral CSF: Clear, normal glucose, mildly elevated protein, lymphocytes",
          "Gram stain positive in 50-70%; blood cultures positive in 70-90%",
          "CT not needed if no contraindication to LP and no papilledema/focal signs",
          "Viral PCR: Gold standard for viral meningitis/encephalitis diagnosis",
          "Early recognition critical: Start empiric antibiotics before LP if high suspicion"
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Chapter 13: Infectious Diseases", edition: "9th" },
          { book: "Nelson Textbook of Pediatrics", chapter: "Chapter 612: Meningitis", edition: "21st" }
        ]
      },
      {
        layer: 4,
        slug: "meningitis-layer-4-exam",
        title: "Meningitis & Encephalitis - Management",
        estimatedMinutes: 25,
        summary: "Empiric antibiotics: Ceftriaxone + vancomycin ± ampicillin (neonates for Listeria). Add acyclovir if encephalitis suspected. Supportive care: IV fluids, seizure management, ICP management. Adjunctive dexamethasone (within 12 hours).",
        contentMd: `# Meningitis & Encephalitis - Management and Treatment

## Empiric Antibiotic Therapy (Start Immediately)

### Initial Empiric Regimen (do NOT delay for LP)

**Standard Children (3 months - 18 years):**
- **Ceftriaxone** 2 g IV Q12H (or cefotaxime 2 g Q4-6H)
  - Excellent CSF penetration
  - Covers S. pneumoniae, N. meningitidis, H. influenzae
- **PLUS Vancomycin** 15-20 mg/kg IV Q6H
  - For S. pneumoniae (penicillin/cephalosporin resistance)
  - Added because of increasing resistance rates in India

**If Beta-Lactam Allergy:**
- **Chloramphenicol** 12-15 mg/kg IV Q6H
  - OR Fluoroquinolone (older children)

**Special Populations (Neonates 0-3 months):**
- **Ampicillin** 50 mg/kg IV Q6H (covers Listeria; Cephalosporins don't cover)
- **PLUS Ceftriaxone** 50 mg/kg IV Q12H (or cefotaxime 50 mg/kg Q6H)
- **PLUS Vancomycin** 15-20 mg/kg Q8H

### Encephalitis (Suspected/Confirmed)

**Add Acyclovir:**
- **Acyclovir** 10-15 mg/kg IV Q8H
- Covers HSV-1 (which causes encephalitis)
- Essential for early-onset HSV encephalitis
- Continue even if viral PCR negative pending results

### Duration of Antibiotics

**Bacterial Meningitis:**
- **S. pneumoniae**: 10-14 days
- **N. meningitidis**: 7 days
- **H. influenzae**: 10 days
- **E. coli (neonatal)**: 10-14 days
- **GBS (neonatal)**: 10-14 days

**Viral Meningitis:**
- Supportive care only
- Total duration in hospital: Usually 3-7 days

**Encephalitis:**
- **Acyclovir**: 10-14 days (if HSV)

## Adjunctive Therapy

### Dexamethasone (Corticosteroids)

**Benefits (in Bacterial Meningitis):**
- Reduces hearing loss (important sequela)
- May reduce neurological morbidity
- Reduces meningeal inflammation

**Dosing:**
- **Dexamethasone** 0.15 mg/kg IV Q6H × 2-4 days
- **Timing**: With or just before first antibiotic dose (within 12 hours)

**Contraindications:**
- **Immunocompromised** (relative; use with caution)

**NOT used in:**
- Viral meningitis
- Encephalitis alone (unless also bacterial meningitis)

## Supportive Care

### Fluid Management
- **Initial**: Cautious IV hydration (avoid fluid overload; risk of edema, seizures)
- **Fluids**: 1200 mL/m²/day initially (restrict to 2/3 maintenance if SIADH)
- **Monitor**: Sodium, fluid balance, signs of fluid overload
- **ICP management**: Head elevation 30°, midline head positioning

### Seizure Management
- **Seizure threshold low**: Increased by inflammation, fever
- **Prophylaxis**: NOT routine (use if seizure occurs)
- **If seizures occur**:
  - **Lorazepam** 0.1 mg/kg IV (max 4 mg) first-line
  - **Phenytoin** 15-20 mg/kg loading IV if repeated seizures
  - **Fosphenytoin**: Preferred (no tissue necrosis risk)

### Fever Management
- **Antipyretics**: Paracetamol 15 mg/kg Q6H OR Ibuprofen 10 mg/kg Q6-8H
- **Goal**: Reduce fever (decreases metabolic demand, seizure risk)
- **Cold sponging**: Adjunct if fever >40°C

### Increased Intracranial Pressure (ICP) Management
- **Head elevation**: 30° (promotes venous drainage)
- **Midline positioning**: Avoid head rotation
- **Avoid hypoxia, hypercarbia**: Maintain normal O₂, CO₂
- **Osmotic therapy**: 3% hypertonic saline or mannitol if herniation risk
- **Sedation**: If on ventilator (reduce ICP)

### Monitoring
- **Vital signs**: Q1H initially
- **Neurological**: Pupil size, motor response, consciousness level Q1H
- **Fluid balance**: Strict I/O
- **Electrolytes**: Watch for hyponatremia (SIADH)
- **Lactate**: Indicator of tissue hypoxia (poor prognosis if elevated)

## Infection Control/Prevention

### Contact Precautions (First 24 hours of antibiotics)
- **Respiratory isolation**: Until 24 hours of IV antibiotics
- **N. meningitidis household contacts**: Prophylaxis

### Chemoprophylaxis for Close Contacts
- **Meningococcal**: Rifampin 20 mg/kg/day (max 600 mg) QD × 2 days
  - OR Ceftriaxone 125-250 mg IM (single dose)
  - For household, school close contacts

- **Haemophilus influenzae**: Rifampin prophylaxis for unvaccinated contacts

### Prevention
- **Vaccination**: Hib, PCV13, MCV (as per Indian immunization schedule)

## Prognosis and Outcomes

**Mortality:**
- **Bacterial meningitis**: 5-15%
- **Viral meningitis**: <1%
- **Encephalitis**: 5-15%

**Sequelae (Bacterial Meningitis survivors):**
- **Sensorineural hearing loss**: 15-30% (permanent; benefit from dexamethasone)
- **Neurological**: Seizures (10%), learning disability (10%), hydrocephalus (5%)
- **Most**: Full recovery if treated early`,
        mnemonics: [
          {
            text: "Empiric Meningitis Antibiotics - CaVA",
            explanation: "Ceftriaxone (or cefotaxime), Vancomycin (for resistance), Ampicillin (if <3 months)"
          },
          {
            text: "Encephalitis Addition - AAA",
            explanation: "Acyclovir (for HSV), Add early, Avoid delay (start empirically)"
          }
        ],
        keyPoints: [
          "Start empiric antibiotics BEFORE LP if high suspicion; do not delay",
          "Ceftriaxone + vancomycin standard (covers common pathogens + resistance)",
          "Add ampicillin for neonates (covers Listeria)",
          "Add acyclovir if encephalitis suspected (HSV risk)",
          "Dexamethasone: Give with first antibiotic dose (within 12 hours)",
          "Seizure prophylaxis: NOT routine; treat if seizures occur",
          "Hearing loss common: Refer for audiometry post-recovery",
          "Duration: 7-14 days (depends on organism); stop if viral confirmed"
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Chapter 13: Infectious Diseases", edition: "9th" },
          { book: "Nelson Textbook of Pediatrics", chapter: "Chapter 612: Meningitis", edition: "21st" }
        ]
      },
      {
        layer: 5,
        slug: "meningitis-layer-5-active-recall",
        title: "Meningitis & Encephalitis - Active Recall",
        estimatedMinutes: 15,
        summary: "Test your knowledge of meningitis and encephalitis diagnosis and management with clinical cases and Q&A.",
        contentMd: `# Active Recall - Meningitis & Encephalitis

**Q1: A 5-year-old presents with fever (40°C), severe headache, neck stiffness, and Kernig sign positive. You suspect meningitis. What is your immediate management?**
> Start empiric antibiotics WITHOUT waiting for LP results. Ceftriaxone 2 g IV Q12H + Vancomycin 15-20 mg/kg IV Q6H. Draw blood cultures first, then perform LP to confirm diagnosis. Do NOT delay antibiotics. Every hour matters.

**Q2: CSF shows: WBC 400/μL, protein 250 mg/dL, glucose 35 mg/dL, Gram stain shows gram-positive diplococci. What organism and diagnosis?**
> **Streptococcus pneumoniae** (gram-positive diplococci). **Bacterial meningitis** confirmed by CSF pattern: high WBC (mostly PMN), elevated protein, low glucose, positive Gram stain. CSF/serum glucose ratio <0.4 is diagnostic of bacterial meningitis. Continue ceftriaxone + vancomycin with dexamethasone.

**Q3: Why does CSF glucose drop in bacterial meningitis but remain normal in viral meningitis?**
> **Bacterial**: (1) Direct bacterial consumption of glucose, (2) Impaired glucose transport across BBB (due to intense inflammation). **Viral**: No bacterial consumption; BBB inflammation less severe; glucose transport preserved. Low glucose = bacterial, normal glucose = viral (key differentiator).

**Q4: A 4-month-old infant with fever and poor feeding; no neck stiffness. Fontanelle bulging. Why is management different from older children?**
> **Infants lack classic signs**: No neck stiffness (meningeal irritation not demonstrated). Instead: Fever, irritability, poor feeding, bulging fontanelle (key finding—increased ICP), seizures. **Additional pathogen**: Add Listeria. **Empiric therapy for neonates**: Ampicillin (50 mg/kg Q6H) + Ceftriaxone (50 mg/kg Q12H) + Vancomycin. Ampicillin needed for Listeria (cephalosporins don't cover).

**Q5: After starting ceftriaxone + vancomycin for S. pneumoniae meningitis, what additional therapy should be started and why?**
> **Dexamethasone**: 0.15 mg/kg IV Q6H × 2-4 days, given with or just before first antibiotic dose. **Benefits**: Reduces hearing loss (major sequela; prevents sensorineural hearing loss in 15-30%), reduces neurological morbidity, decreases meningeal inflammation. **Timing critical**: Within 12 hours of diagnosis.

**Q6: A child with meningitis develops seizures. How do you manage this?**
> **First-line**: **Lorazepam 0.1 mg/kg IV** (max 4 mg) immediately. If seizures continue: **Phenytoin 15-20 mg/kg loading dose IV**. **Not prophylactic**: Seizure prophylaxis not routine. **Root cause**: Fever, inflammation, metabolic derangement increase seizure threshold. **Prevention**: Aggressive fever management, adequate hydration, control ICP.

**Q7: Encephalitis is suspected. What antibiotic regimen differs from meningitis alone?**
> **Add Acyclovir**: 10-15 mg/kg IV Q8H (in addition to ceftriaxone + vancomycin). **Reason**: HSV-1 causes encephalitis with parenchymal involvement; start empirically even before PCR results. **Continue acyclovir**: 10-14 days if HSV confirmed. If bacterial confirmed and HSV ruled out: Stop acyclovir, continue antibiotics.

**Q8: A 6-year-old with meningitis: CSF shows gram stain negative, glucose 38 mg/dL, protein 320 mg/dL, WBC 800 (PMN), sterile culture. Blood culture also negative. What could this be?**
> **Partially treated meningitis** (antibiotics given before LP; killed organisms). **Diagnosis**: Likely bacterial (low glucose, high protein, PMN) but not yet cultured. Continue antibiotics empirically. Blood cultures negative doesn't rule out bacterial (25-30% don't bacteremia). **Consider PCR** for rapid organism identification.

**Q9: Why is hearing loss a major concern after meningitis, and when should audiometry be done?**
> **Mechanism**: Meningitis-induced inflammation damages cochlear hair cells (irreversible sensorineural hearing loss). **Prevention**: Dexamethasone (given early) reduces hearing loss risk. **Audiometry timing**: After discharge (at 2-4 weeks) once infection resolved. **Testing**: Age-appropriate audiometry. **Management**: Hearing aids if loss confirmed; early intervention prevents speech delay.

**Q10: A child with N. meningitidis meningitis. Should household contacts receive antibiotics?**
> **Yes**. **Prophylaxis for close contacts** (household, school contacts): **Rifampin 20 mg/kg/day QD × 2 days** (max 600 mg) OR **Ceftriaxone 125-250 mg IM single dose**. **Timing**: Ideally within 24 hours of index case diagnosis. **Goal**: Eliminate nasopharyngeal carriage; prevent transmission.

**Q11: Explain why empiric acyclovir is started in encephalitis without waiting for HSV PCR results.**
> **Timing critical**: HSV encephalitis rapidly progressive; delays in treatment significantly worsen outcome. **HSV PCR false-negative rates**: 10-20% early (viral load may be low). **Acyclovir safety**: Well-tolerated; side effects minimal. **Benefit-risk**: High mortality/morbidity of HSV encephalitis outweighs risk of starting acyclovir empirically.

**Q12: A child recovers from meningitis. What sequelae should be monitored for?**
> **Common sequelae**: (1) **Sensorineural hearing loss** (15-30%)—audiometry mandatory. (2) **Neurological**: Seizures (10%), learning disability (10%), developmental delay. (3) **Hydrocephalus** (5%)—vomiting, bulging fontanelle. (4) **Behavioral**: ADHD, personality changes. **Follow-up**: Neurology referral if any signs. **Developmental assessment**: Before school entry.`,
        mnemonics: [
          {
            text: "Meningitis Rapid Response - CAV",
            explanation: "Cultures (blood), Antibiotics (empiric immediately), add Vancomycin/acyclovir (encephalitis)"
          },
          {
            text: "CSF Glucose Interpretation - BVN",
            explanation: "Bacterial (low <40), Viral (Normal 40-80), Fungal (very low, very high protein)"
          }
        ],
        keyPoints: [
          "Empiric antibiotics: NEVER delay waiting for LP; do before imaging if needed",
          "Ceftriaxone + vancomycin standard; add ampicillin if neonate (Listeria)",
          "Dexamethasone: Give with first antibiotic (within 12 hours); prevents hearing loss",
          "Encephalitis: Add acyclovir empirically (HSV risk); don't wait for PCR",
          "CSF glucose <40 = bacterial; normal = viral (key differentiator)",
          "Seizure management: Lorazepam first-line; NOT prophylactic except if occur",
          "Contact prophylaxis: Meningococcal/H. influenzae contacts need rifampin or ceftriaxone",
          "Sequelae: Hearing loss (15-30%), seizures (10%), developmental delay",
          "Prognosis: Early antibiotics = better outcome; every hour matters"
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Chapter 13: Infectious Diseases", edition: "9th" },
          { book: "Nelson Textbook of Pediatrics", chapter: "Chapter 612: Meningitis", edition: "21st" }
        ]
      }
    ]
  }
];
