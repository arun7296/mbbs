import type { TopicLessons } from "./content-loader";

export const pediatricsLessonsPart19b: TopicLessons[] = [
  {
    topicCode: "PE-MOD-08-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "status-epilepticus-layer-1-foundation",
        title: "Status Epilepticus in Children - Foundation",
        estimatedMinutes: 25,
        summary: "Status epilepticus (SE) is defined as seizure activity lasting >5 minutes or recurrent seizures without full recovery between them. It is a medical emergency with mortality 5-15%. Subtypes: generalized tonic-clonic (most dangerous), focal, non-convulsive (often missed). First-line treatment: benzodiazepines (lorazepam IV 0.1 mg/kg). Second-line: phenytoin or fosphenytoin. Management requires rapid seizure termination, supportive care.",
        contentMd: `# Status Epilepticus - Foundation

## Definition & Epidemiology

**Status Epilepticus (SE):**
- Seizure activity lasting >5 minutes OR
- Recurrent seizures without full recovery of consciousness between them
- Medical emergency requiring immediate intervention

**Incidence in pediatrics:**
- 1-10% of children with epilepsy experience SE
- Can occur at any age; peak incidence 6 months to 6 years
- Mortality: 5-15% (varies by type, etiology, age)
- Neonates/young infants: Higher mortality (15-20%)
- Older children: Lower mortality (5%)

## Classification of Status Epilepticus

### By Type

1. **Generalized Tonic-Clonic SE (GTCSE):**
   - Most dangerous, highest mortality
   - Sustained rhythmic muscle contractions
   - Risk: hypoxia, hyperthermia, rhabdomyolysis, metabolic derangement

2. **Focal (Partial) SE:**
   - Seizure activity in one limb/region
   - Lower mortality than GTCSE
   - May progress to generalized SE (secondarily generalized)

3. **Non-Convulsive SE (NCSE):**
   - Altered mental status without visible motor activity
   - Often missed (attributed to other causes)
   - May persist for hours/days before recognition
   - EEG shows continuous seizure activity

4. **Absence SE:**
   - Continuous spike-wave discharge on EEG
   - Altered consciousness; minimal motor activity
   - Rare in children; usually in those with childhood absence epilepsy

### By Age of Onset

1. **Neonatal SE** (0-30 days):
   - Seizures may be subtle (eye deviations, lip smacking, apnea)
   - Etiologies: Hypoglycemia, hypocalcemia, infection (meningitis), birth trauma, drug withdrawal

2. **Infantile SE** (1-12 months):
   - Often from febrile seizures or infection
   - Risk of febrile SE: ~15% of febrile seizures

3. **Childhood SE** (1-18 years):
   - Febrile SE, infection (meningitis, encephalitis), trauma
   - Idiopathic (no obvious cause)

## Etiology in Indian Pediatrics

### Common Causes
- **Infection**: Meningitis, encephalitis, cerebral malaria (endemic in India), sepsis
- **Febrile seizures**: Most common cause of SE in young children
- **Intracranial pathology**: Hypoxic-ischemic encephalopathy, stroke, tumor, trauma
- **Metabolic**: Hypoglycemia, hypocalcemia, hyponatremia, hepatic encephalopathy
- **Drug-related**: Withdrawal (benzodiazepines, antiepileptic drugs), toxins
- **Idiopathic epilepsy**: First or breakthrough seizure in known epileptic

### Indian-Specific Etiologies
- **Cerebral malaria**: Severe malaria complicated by SE (endemic regions)
- **Neurocysticercosis**: Tapeworm CNS infection; common in India
- **Tuberculosis meningitis**: TB-related SE (higher mortality)

## Clinical Presentation

### Early Phase (First 5 minutes)
- Sudden onset of seizure activity (tonic-clonic movements)
- Loss of consciousness
- Tachycardia, tachypnea
- Hypersalivation, tongue biting
- Urinary incontinence

### Established SE (5-30 minutes)
- Continued seizure activity (may become more subtle)
- Hyperthermia (fever due to muscle activity)
- Metabolic acidosis
- Hypertension, then hypotension
- Risk of aspiration

### Prolonged SE (>30 minutes - Critical Phase)
- **CNS effects**: Neuronal death, brain damage risk
- **Respiratory**: Hypoxia, aspiration risk
- **Cardiovascular**: Hypertension → hypotension, arrhythmias
- **Metabolic**: Severe acidosis, hypoglycemia, hyperkalemia
- **Renal**: Myoglobinuria (from rhabdomyolysis), acute kidney injury
- **Pulmonary edema**: From cardiovascular strain
- **Mortality risk**: Significantly increases >30 minutes

### Non-Convulsive SE (Subtle/Missed)
- Altered mental status (confusion, lethargy)
- Minimal motor activity (eye deviation, subtle automatisms)
- May be attributed to encephalopathy, infection, coma
- **Critical**: Requires EEG for diagnosis; often missed

## Pathophysiology Overview

### Seizure Perpetuation Mechanism
- Continuous neuronal hyperexcitability
- GABA (inhibitory) neurotransmitter depletion
- Glutamate (excitatory) accumulation
- Loss of anticonvulsant drug efficacy over time (pharmacoresistance)
- Each seizure → Reduced benzodiazepine receptor responsiveness

### Neuronal Injury in Prolonged SE
- Excitotoxicity: Excessive glutamate → Neuronal death
- Hyperthermia-induced damage: Heat stress on neurons
- Hypoxia: From respiratory compromise
- Metabolic derangement: Acidosis damages cells
- Neuroinflammation: Cytokine release, microglial activation`,
        mnemonics: [
          {
            text: "SE Definition - 5-Min Rule",
            explanation: "Status Epilepticus = Seizure >5 minutes OR recurrent seizures without full recovery between them"
          },
          {
            text: "SE Complications Timeline - HRM",
            explanation: "Early (Hypoxia, Hyperthermia), Metabolic (acidosis, hypoglycemia), Renal (myoglobinuria)"
          }
        ],
        keyPoints: [
          "Status epilepticus: Seizure >5 minutes or recurrent without recovery; medical emergency",
          "Mortality: 5-15% overall; higher in neonates (15-20%), lower in older children (5%)",
          "Types: GTCSE (most dangerous), focal, non-convulsive (often missed), absence",
          "Non-convulsive SE: EEG required for diagnosis; can persist unrecognized for hours",
          "Common causes: Infection (meningitis), febrile seizures, hypoglycemia, trauma",
          "Neuronal injury: Accelerates after 5-10 minutes; critical to treat urgently",
          "Time-dependent: Risk increases with prolonged seizure duration; treat aggressively early"
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Chapter 15: Neurology - Seizures", edition: "9th" },
          { book: "Nelson Textbook of Pediatrics", chapter: "Chapter 593: Status Epilepticus", edition: "21st" }
        ]
      },
      {
        layer: 2,
        slug: "status-epilepticus-layer-2-mechanism",
        title: "Status Epilepticus - Pathophysiology",
        estimatedMinutes: 30,
        summary: "SE pathogenesis: Neuronal hyperexcitability from GABA depletion, glutamate accumulation, and loss of benzodiazepine receptor sensitivity (pharmacoresistance). Prolonged seizure → Excitotoxic neuronal death, hyperthermia-induced damage, hypoxia, metabolic acidosis. Cerebral autoregulation failure → Brain swelling, herniation risk.",
        contentMd: `# Status Epilepticus - Pathophysiology

## Cellular Mechanisms of SE Initiation

### Normal Seizure Termination vs SE Perpetuation

**Normal Seizure (Self-limited, <2 min):**
1. **GABA neurotransmitter release**: Inhibitory signal
2. **GABA-A receptor activation**: Hyperpolarization of neurons
3. **Seizure termination**: Naturally stops with GABA inhibition
4. **Recovery**: Full consciousness returns

**Status Epilepticus (Prolonged seizure >5 min):**
1. **Decreased GABA synthesis**: Enzyme depletion
2. **GABA receptor internalization**: Reduced surface expression
3. **Loss of benzodiazepine sensitivity**: Reduced BZD responsiveness (pharmacoresistance)
4. **Glutamate accumulation**: Continued excitation
5. **NMDA receptor activation**: Calcium influx, neuronal toxicity
6. **Seizure perpetuation**: Loss of self-terminating mechanism

### Glutamate-Mediated Excitotoxicity

**Glutamate Overload:**
1. **Massive glutamate release**: From neuronal terminals during seizure
2. **NMDA receptor activation**: Calcium influx through NMDA channel
3. **AMPA receptor activation**: Additional sodium/calcium influx
4. **Calcium overload**: Exceeds buffering capacity
5. **Cellular consequences**:
   - Mitochondrial dysfunction
   - Generation of reactive oxygen species (ROS)
   - Protease activation
   - DNA fragmentation
   - **Result**: Neuronal apoptosis (programmed cell death)

### Seizure-Related Energy Failure

**Metabolic Crisis:**
1. **Increased neuronal activity**: Energy demand 100-fold higher
2. **ATP depletion**: Energy stores inadequate
3. **Na-K-ATPase failure**: Cannot maintain ion gradients
4. **Sodium accumulation**: Inside neurons (cytotoxic edema)
5. **Cell swelling**: From sodium/water influx
6. **Reduced cerebral blood flow** (CBF): Despite increased demand
7. **Result**: Hypoxia, metabolic acidosis, neuronal dysfunction

## Systemic Effects of Prolonged SE

### Respiratory Effects
- **Aspiration risk**: From loss of airway protection
- **Hypoxia**: Inadequate oxygenation from muscle rigidity/central inhibition
- **Hypercapnia**: CO₂ accumulation
- **Pulmonary edema**: From cardiovascular strain, ARDS
- **Critical**: Can lead to respiratory failure, death if untreated

### Cardiovascular Effects

**Phase 1 (First minutes):** Hypertension + tachycardia
- Sympathetic hyperactivity
- Increased cardiac output

**Phase 2 (5-30 min):** Blood pressure may normalize or decline
- Catecholamine depletion
- Hypoxia-induced vasodilation
- Dehydration (from sweating, muscle activity)

**Phase 3 (>30 min):** Cardiovascular collapse risk
- Severe hypotension
- Arrhythmias (from metabolic derangement)
- Cardiogenic pulmonary edema
- Myocardial infarction possible (from prolonged stress)

### Metabolic Derangements

**Acidosis:**
- **Lactic acidosis**: From anaerobic metabolism
- **Respiratory acidosis**: From CO₂ retention
- **pH can drop to 6.8-7.0**: Severely dangerous
- **Consequences**: Reduced cardiac contractility, arrhythmias, neuronal dysfunction

**Hypoglycemia:**
- Rapid glucose consumption by brain/muscles
- Decreased hepatic glucose production (catecholamine-mediated inhibition)
- **Risk**: Exacerbates neuronal injury

**Hyperkalemia:**
- Release from damaged muscle cells
- K+ efflux from neurons
- **Risk**: Cardiac arrhythmias, sudden cardiac death

**Hyponatremia:**
- From increased antidiuretic hormone (ADH) release
- Fluid retention
- **Risk**: Cerebral edema, seizures

### Renal & Muscular Effects

**Rhabdomyolysis:**
- Intense muscle contraction → Muscle cell breakdown
- Myoglobin release into bloodstream
- **Risk**: Acute tubular necrosis (ATN), acute kidney injury

**Acute Kidney Injury (AKI):**
1. Myoglobin precipitates in renal tubules
2. Oxidative stress from myoglobin metabolites
3. Reduced renal perfusion (from hypotension)
4. **Risk**: Oliguria, hyperkalemia, metabolic acidosis → Death if untreated

## Neuropathological Consequences

### Acute Phase (During SE)
- **Neuronal swelling**: Cytotoxic edema
- **Synaptic degeneration**: Loss of dendritic spines
- **Glial activation**: Microglial and astroglial response
- **Neuroinflammation**: TNF-α, IL-1β, IL-6 elevation

### Chronic Phase (After SE)
- **Neuronal cell death**: Necrosis, apoptosis
- **Neuronal loss**: Particularly in hippocampus (memory center)
- **Gliosis**: Replacement with scar tissue
- **Neuronal network reorganization**: Abnormal connectivity
- **Epileptogenesis risk**: Structural changes → Increased seizure propensity

### Brain Swelling & Herniation Risk

**Cerebral Edema:**
1. **Cytotoxic edema**: Neuronal swelling (inside cells)
2. **Vasogenic edema**: BBB breakdown → fluid in extracellular space
3. **Increased intracranial pressure (ICP)**: From edema, inflammation
4. **Herniation risk**: Brain tissue pushed through foramen magnum
5. **Result**: Brainstem compression, death if untreated

### Loss of Cerebral Autoregulation
- Normal: Brain maintains constant CBF (60-140 mmHg MAP)
- In SE: Autoregulation fails
- Severe hypertension → Hyperperfusion → Edema
- Severe hypotension → Hypoperfusion → Ischemia
- **Result**: Both too much or too little flow harmful

## Pharmacoresistance in SE

### Benzodiazepine Insensitivity

**Mechanism of GABA-A Receptor Changes:**
1. **Subunit trafficking**: GABA-A receptors internalized from cell surface
2. **Phosphorylation changes**: Altered receptor sensitivity
3. **Subunit composition shift**: From α1β2γ2 → α4β2δ (less BZD-sensitive)
4. **Result**: Reduced response to lorazepam, midazolam

**Time-dependent loss of BZD efficacy:**
- <5 min: BZD responsive
- 5-20 min: BZD response declining
- >20 min: Significant BZD resistance
- >60 min: Often refractory to BZD alone

### Second-Line Drug Resistance
- Phenytoin, valproate also may lose efficacy
- Requires combination therapy (multiple agents)
- Anesthesia needed if not controlled`,
        mnemonics: [
          {
            text: "SE Energy Crisis - GAM",
            explanation: "GABA depletion, ATP exhaustion, Massive glutamate overload"
          },
          {
            text: "SE Complications - HAM",
            explanation: "Hyperthermia, Acidosis (lactic), Myoglobinuria (rhabdo)"
          }
        ],
        keyPoints: [
          "SE perpetuation: GABA depletion + GABA receptor internalization + pharmacoresistance",
          "Glutamate excitotoxicity: NMDA/AMPA receptor activation → calcium overload → neuronal death",
          "Metabolic crisis: ATP depletion → Ion gradient failure → Hypoxia, acidosis",
          "Respiratory: Aspiration risk, hypoxia, hypercapnia, pulmonary edema",
          "Cardiovascular: Early hypertension → late hypotension, arrhythmia risk",
          "Metabolic derangements: Lactic acidosis (pH 6.8-7.0), hyperkalemia, hypoglycemia, hyponatremia",
          "Rhabdomyolysis: Muscle breakdown → myoglobin → AKI, acute kidney injury",
          "Neuronal damage: Begins at 5-10 min; accelerates with prolonged seizure duration",
          "Cerebral edema: Cytotoxic + vasogenic → ICP elevation → herniation risk",
          "Brain swelling: Loss of cerebral autoregulation; both hypertension and hypotension harmful"
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 28: CNS - Seizures", edition: "10th" },
          { book: "Nelson Textbook of Pediatrics", chapter: "Chapter 593: Status Epilepticus", edition: "21st" }
        ]
      },
      {
        layer: 3,
        slug: "status-epilepticus-layer-3-clinical",
        title: "Status Epilepticus - Clinical Assessment",
        estimatedMinutes: 25,
        summary: "Assessment: Determine seizure type (convulsive vs non-convulsive), duration, etiology. Vital signs: Hyperthermia, hypertension early then hypotension. Labs: Blood glucose, electrolytes, calcium, arterial blood gas (metabolic + respiratory acidosis), creatine kinase (rhabdomyolysis), ECG (hyperkalemia risk). Imaging: CT/MRI to identify cause (infection, trauma, mass, stroke).",
        contentMd: `# Status Epilepticus - Clinical Assessment & Diagnosis

## Clinical Presentation & History

### Acute Presentation

**Convulsive SE:**
- Sustained tonic-clonic muscle contractions
- Loss of consciousness
- Eyes deviated (usually upward)
- Tongue biting (risk of aspiration)
- Hypersalivation, foaming at mouth
- Urinary/fecal incontinence
- Respiratory distress, cyanosis

**Non-Convulsive SE (Subtle/Missed):**
- Minimal motor activity (eye deviations, subtle automatisms only)
- Altered consciousness (confusion, lethargy, coma)
- May be mistaken for altered mental status from other causes
- Requires EEG for diagnosis
- Can persist for hours-days unrecognized

### History (If Available)

**Antecedent Events:**
- **Fever**: Suggests febrile SE (most common cause in children)
- **Recent illness**: Infection (meningitis, encephalitis risk)
- **Trauma/head injury**: Risk of SE from trauma
- **Known epilepsy**: Breakthrough seizure (medication non-compliance?)
- **Drug/toxin exposure**: Withdrawal, overdose
- **Recent medication changes**: Started/stopped antiepileptic drugs

**Known Epilepsy History:**
- **Seizure type/frequency**: Baseline seizure pattern
- **Medications**: Compliance, recent dosing
- **Previous SE episodes**: Risk factor for recurrence

## Vital Signs & Physical Examination

### Vital Sign Changes

**Temperature:**
- **Hyperthermia**: Common (fever 38-40°C)
- **Cause**: Intense muscle activity, neuroinflammation
- **Risk**: Accelerates neuronal injury

**Cardiovascular:**
- **Early** (<10 min): Hypertension, tachycardia
- **Late** (>30 min): Hypotension, arrhythmias possible
- **Arrhythmia risk**: From hyperkalemia (peaked T-waves on EKG)

**Respiratory:**
- **Tachypnea**: Fast breathing (from metabolic acidosis)
- **Hypoxia**: SaO₂ <94% if untreated (respiratory compromise)
- **Aspiration risk**: Loss of airway reflexes

**Neurological Exam:**
- **Level of consciousness**: Unconscious (if convulsive SE)
- **Pupil size**: Usually normal, but may be dilated
- **Lateralization**: Focal seizures may show unilateral findings
- **Cranial nerves**: Usually intact between seizures
- **Weakness**: May see post-ictal paresis (Todd's paresis)

## Laboratory Investigations

### Blood Tests (Urgent)

**Blood Glucose:**
- **Rapid test**: Capillary glucose at bedside
- **Hypoglycemia**: Risk factor for SE, worsens prognosis
- **Management**: IV dextrose if hypoglycemic (<70 mg/dL)

**Electrolytes (Serum Na, K, Ca, Mg):**
- **Hyperkalemia**: From rhabdomyolysis; ECG changes (peaked T-waves)
- **Hyponatremia**: From ADH release; cerebral edema risk
- **Hypocalcemia**: May trigger seizures
- **Hypomagnesemia**: Reduces seizure threshold

**Renal Function (BUN, Creatinine):**
- **Baseline assessment**: For medication dosing
- **AKI risk**: From rhabdomyolysis (myoglobin precipitation)
- **Monitor if elevated**: After resolution (may develop acute kidney injury)

**Liver Function Tests (if available):**
- **Baseline**: For antiepileptic drug metabolism

**Blood Gas (Arterial):**
- **pH**: Metabolic + respiratory acidosis (pH often 7.0-7.2)
- **pCO₂**: Elevated (respiratory acidosis from hypoventilation/seizures)
- **pO₂**: Hypoxemia if respiratory compromise
- **HCO₃**: Low (metabolic acidosis from lactic acid)
- **Clinical significance**: Severe acidosis can reduce drug efficacy, cause arrhythmias

**Creatine Kinase (CK):**
- **Elevated**: From rhabdomyolysis (muscle breakdown)
- **Myoglobinuria risk**: Can precipitate in renal tubules → AKI
- **Serial monitoring**: After SE control

### Urine Tests

**Urinalysis + Culture:**
- **Myoglobin**: Brown/tea-colored urine suggests rhabdomyolysis
- **Infection**: WBC, nitrites, bacteria suggest UTI (not primary SE cause but may be present)

**Urine Myoglobin:**
- **Elevated**: Confirms rhabdomyolysis
- **Risk stratification**: Higher CK/myoglobinuria → Greater AKI risk

### Other Tests

**ECG (if available):**
- **Peaked T-waves**: Hyperkalemia sign (emergency cardiac risk)
- **Prolonged QT**: Hypocalcemia, hypomagnesemia
- **Arrhythmias**: From metabolic derangement

**Blood Cultures:**
- **If febrile**: Obtain before starting antibiotics (suspect meningitis/sepsis)

## Imaging

### CT Brain (When to Order)

**Indications:**
- **First SE in child without known epilepsy**: Rule out structural cause
- **Focal seizure activity**: Suggests mass, stroke, or localized lesion
- **Persistent SE despite treatment**: Assess for complications (hemorrhage, edema)
- **Depressed level of consciousness**: Rule out increased ICP/herniation
- **Post-trauma seizures**: Assess for intracranial injury

**Timing:**
- **Do NOT delay antiepileptic therapy**: Treat first, image second if stable
- **Life threat takes priority**: Start seizure management before imaging

**CT Findings (SE complications):**
- Cerebral edema (loss of gray-white matter differentiation)
- Hemorrhage (if trauma-related)
- Mass lesion (tumor)
- Infarction (stroke)

### MRI (More sensitive, but takes longer)

**When to order (after acute phase stabilized):**
- Recurrent SE
- To identify structural lesion not visible on CT
- Temporal lobe changes (hippocampal sclerosis)
- Non-convulsive SE (more likely to have structural cause)

## EEG (Electroencephalogram)

### Critical for Diagnosis of Non-Convulsive SE

**EEG Findings in SE:**
- **Generalized GTCSE**: Burst-suppression pattern or continuous spike-wave
- **Focal SE**: Repetitive spikes in one region
- **Non-convulsive SE**: Continuous focal or generalized seizure activity WITHOUT motor manifestations
- **Post-ictal**: Slowing, absence of seizure activity

**Clinical use:**
- **Diagnosis**: Confirms SE (especially NCSE)
- **Monitoring**: During treatment; guides cessation of therapy
- **Prognostication**: Electrical recovery correlates with clinical recovery

## Differential Diagnosis

| Condition | Key Features | Differentiation |
|---|---|---|
| **SE (Convulsive)** | Sustained seizures, loss of consciousness | EEG shows seizure activity; twitching present |
| **Tetanus** | Sustained muscle rigidity, "risus sardonicus" | EEG normal; jaw clenching, opisthotonus |
| **Neuroleptic Malignant Syndrome** | Fever, rigidity, autonomic instability | Recent antipsychotic; EEG normal |
| **Heat Stroke** | Severe hyperthermia, altered mental status | History of heat exposure; EEG normal |
| **Meningitis/Encephalitis** | Seizures + meningeal signs | CSF findings (elevated protein, low glucose); seizures may stop with antibiotics |
| **Hypoglycemia** | Altered consciousness, seizures | Rapid glucose correction stops seizures |
| **Non-Convulsive SE** | Altered mental status, minimal movement | **Requires EEG** for diagnosis; continuous seizure activity on EEG |`,
        mnemonics: [
          {
            text: "SE Lab Priorities - BLAKE",
            explanation: "Blood glucose, Lactate (blood gas), Acid-base (pH, HCO3), Kidney (BUN/Cr), Electrolytes (K+, Na+, Ca2+)"
          },
          {
            text: "Rhabdo Monitoring - CK",
            explanation: "Creatine Kinase (elevated), K+ (hyperkalemia from rhabdo), myoglobin (brown urine)"
          }
        ],
        keyPoints: [
          "Convulsive SE: Obvious tonic-clonic activity; requires immediate seizure termination",
          "Non-convulsive SE: Altered mental status WITHOUT visible motor activity; EEG required",
          "Hyperthermia: Universal in SE; accelerates neuronal injury",
          "Blood glucose: First test (hypo/hyperglycemia both risk); give dextrose if hypoglycemic",
          "Electrolytes: Hyperkalemia (peaked T-waves) and hyponatremia common; monitor closely",
          "Blood gas: Acidosis (pH 7.0-7.2); both metabolic and respiratory components",
          "CK/myoglobinuria: Rhabdomyolysis occurs; risk of AKI; aggressive hydration needed",
          "ECG: Look for hyperkalemia signs (peaked T-waves) - cardiac emergency",
          "Imaging: CT/MRI to identify etiology (infection, mass, stroke, trauma)",
          "First priority: Seizure termination (antiepileptic drugs); imaging second if stable"
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Chapter 15: Neurology - Seizures", edition: "9th" },
          { book: "Nelson Textbook of Pediatrics", chapter: "Chapter 593: Status Epilepticus", edition: "21st" }
        ]
      },
      {
        layer: 4,
        slug: "status-epilepticus-layer-4-exam",
        title: "Status Epilepticus - Acute Management",
        estimatedMinutes: 25,
        summary: "Immediate: Airway management, oxygen, IV access. First-line seizure termination: Lorazepam IV 0.1 mg/kg (max 4 mg) repeat Q5-10min if needed. Second-line: Phenytoin/fosphenytoin loading. Third-line: Valproate or levetiracetam. Refractory SE: Anesthesia (propofol, thiopental). Supportive: Temperature control, fluid management, hyperkalemia treatment. Identify/treat underlying cause.",
        contentMd: `# Status Epilepticus - Acute Management

## Immediate Stabilization (Prehospital/ED)

### Airway & Breathing (ABC Priority)

**Positioning & Airway Protection:**
1. **Position**: Side-lying (recovery position) to prevent aspiration
2. **Head elevation**: 30° to reduce ICP
3. **Suction**: Gently remove secretions if safe
4. **Oxygen**: Supplemental O₂ to maintain SaO₂ >94%
5. **Do NOT force object in mouth**: Risk of dental damage, airway obstruction

**Breathing Support:**
- **Bag-mask ventilation**: If respiratory depression/cyanosis
- **Intubation**: Indicated for prolonged SE (>20-30 min), airway compromise
- **Goal**: Maintain SaO₂ >94%, PaCO₂ 35-45 mmHg (avoid hypoxia, hypercapnia)

### Vascular Access & Monitoring

**IV Access:**
1. **Two large-bore IVs**: Peripheral (18-20 gauge) preferred
2. **Central line**: If peripheral access fails (long-term IO/central line option)
3. **Avoid**: Intramuscular route (slow absorption, unreliable)

**Monitoring:**
- **Continuous cardiac monitoring**: Watch for arrhythmias (hyperkalemia risk)
- **Pulse oximetry**: Maintain SaO₂ >94%
- **Blood pressure**: Monitor for hypotension (late SE sign)
- **Temperature**: Active cooling if hyperthermia >39°C

## First-Line Seizure Termination

### Benzodiazepines (FIRST-LINE - Immediate)

**Lorazepam (Preferred):**
- **Dose**: 0.1 mg/kg IV push (maximum 4 mg per dose)
- **Repeat**: Every 5-10 minutes if seizures persist
- **Efficacy**: 70-80% response rate (stops SE within 5 min)
- **Advantages**: Long half-life (12 hours); sustained seizure control
- **Onset**: 1-3 minutes
- **Risk**: Respiratory depression; requires monitoring

**Alternative: Midazolam (if lorazepam unavailable):**
- **Dose**: 0.2 mg/kg IV (maximum 10 mg)
- **Advantages**: Shorter half-life (less respiratory depression)
- **Disadvantages**: Shorter duration; higher risk of breakthrough seizures

**Non-IV Routes (Prehospital/Limited access):**
- **Intranasal midazolam**: 0.2 mg/kg (max 10 mg) - good alternative
- **Intraosseous**: If IV access impossible (pediatric emergency IO)
- **Avoid rectal diazepam**: Old approach; slower, unreliable

## Second-Line Antiepileptic Drugs (If BZD failure)

### Phenytoin Loading

**Dosing:**
- **Loading dose**: 15-20 mg/kg IV
- **Infusion rate**: Slow IV (max 50 mg/min) - faster causes hypotension, arrhythmia
- **Onset**: 10-20 minutes
- **Duration**: Long (24+ hours)
- **Efficacy**: 60% response rate in BZD-refractory SE

**Advantages:**
- Long half-life: Sustained seizure control
- No respiratory depression

**Disadvantages:**
- Slow onset (10-20 min)
- IV site irritation (phlebitis risk); avoid extravasation
- Requires cardiac monitoring (QT prolongation, arrhythmia risk)
- Drug interactions (protein-bound drug)

### Fosphenytoin (Preferred over Phenytoin)

**Dosing:**
- **Loading dose**: 15-20 mg PE (phenytoin equivalents) per kg
- **Infusion rate**: Faster than phenytoin (up to 150 mg PE/min)
- **Advantages**: Better tolerated; less phlebitis; can give IM/IV
- **Cost**: More expensive

### Valproate (Alternative Second-Line)

**Dosing:**
- **Loading dose**: 15-20 mg/kg IV
- **Onset**: Similar to phenytoin (10-20 min)
- **Efficacy**: ~60-70% in refractory SE
- **Advantages**: No cardiac monitoring needed; oral/IV available
- **Disadvantages**: Hepatotoxicity (especially <2 years); hyperammonemia; pancreatitis risk

### Levetiracetam (Emerging Choice)

**Dosing:**
- **Loading dose**: 20-60 mg/kg IV
- **Onset**: ~5-10 minutes
- **Efficacy**: Growing evidence for efficacy in SE
- **Advantages**: No drug interactions; no monitoring needed; safe in liver disease
- **Disadvantages**: Limited evidence vs traditional agents; behavioral side effects

## Third-Line: Refractory SE Management

**Definition:** SE continuing despite first-line (BZD) and second-line (phenytoin/valproate) therapy

### Repeat Second-Line or Additional Agents

**Options:**
1. **Repeat phenytoin loading**: Additional 5-10 mg/kg if first dose failed
2. **Add valproate**: If phenytoin used; complementary mechanism
3. **Add levetiracetam**: Increasingly used

**Success rate**: ~50-60% respond to second agent

### Anesthesia (For True Refractory SE)

**Indications:**
- SE continuing >20-30 minutes despite first + second-line therapy
- Non-convulsive SE unresponsive to initial therapy
- Status epilepticus requiring intubation

**Agents:**
1. **Propofol**: 1-2 mg/kg bolus, then 2-10 mg/kg/hr infusion
   - **Advantages**: Rapid onset, short duration
   - **Risks**: Propofol infusion syndrome (rare; tachycardia, rhabdo, metabolic acidosis)

2. **Thiopental**: 3-5 mg/kg bolus, then infusion
   - **Advantages**: Long-acting
   - **Risks**: Hypotension, respiratory depression

3. **Pentobarbital**: Similar to thiopental
   - **Risks**: Hypotension, respiratory depression; requires ICU

4. **Isoflurane/Sevoflurane**: Volatile anesthetics for operating room

**Monitoring during anesthesia:**
- Continuous EEG (target: burst-suppression pattern)
- ICU setting required
- Mechanical ventilation mandatory
- Duration: 12-24 hours at minimum

## Supportive Care During SE Management

### Temperature Control
- **Active cooling**: If fever >39°C
- **Methods**: IV cold saline, cooling blankets, ice packs
- **Goal**: Reduce to <38°C (lessens neuronal injury)

### Fluid Management
- **IV fluids**: 0.9% normal saline (avoid hypotonic fluids; cerebral edema risk)
- **Rate**: Maintenance + replacement for perspiration losses
- **Goal**: Maintain euvolemia; prevent dehydration
- **Monitor**: Urine output (≥0.5 mL/kg/hr); watch for AKI

### Hyperkalemia Management (If ECG changes)

**If peaked T-waves present:**
1. **Calcium gluconate**: 0.5 mL/kg of 10% IV (cardiac membrane stabilization)
2. **Sodium bicarbonate**: 1 mEq/kg IV (shifts K+ intracellularly)
3. **Insulin + glucose**: Regular insulin 0.1 units/kg + dextrose 0.5 g/kg IV (glucose-dependent K+ uptake)
4. **Sodium polystyrene sulfonate**: 1 g/kg rectally (K+ elimination; slower)

### Hypoglycemia Correction
- **IV dextrose**: 0.25-0.5 g/kg (D25W or D50W)
- **Goal**: Raise glucose >70 mg/dL
- **Recheck**: Glucose after 15 minutes

### Rhabdomyolysis Management
- **Aggressive IV hydration**: Prevents AKI (target urine output 0.5-1 mL/kg/hr)
- **Urine alkalinization**: Sodium bicarbonate (prevents myoglobin precipitation in tubules)
- **Monitor**: Serial CK, creatinine, potassium

## Identify & Treat Underlying Cause

**In parallel with seizure termination:**

1. **Infection**: If fever, meningeal signs → Empiric antibiotics (ceftriaxone + vancomycin)
2. **Hypoglycemia**: Correct immediately (glucose)
3. **Metabolic**: Correct electrolytes (calcium, magnesium, sodium)
4. **Structural**: Imaging if suspected (tumor, stroke, trauma, hemorrhage)
5. **Breakthrough**: Check antiepileptic drug levels; reinitiate/adjust chronic therapy`,
        mnemonics: [
          {
            text: "SE Drug Ladder - BPS",
            explanation: "Benzodiazepine (first-line), Phenytoin/Propofol (second-line), Step-up to anesthesia if refractory"
          },
          {
            text: "First-Line BZD Dosing - 0.1 mg/kg",
            explanation: "Lorazepam 0.1 mg/kg IV q5-10min; max 4 mg; fastest/best response"
          }
        ],
        keyPoints: [
          "Immediate: ABC (airway, breathing, circulation); oxygen, IV access, monitor",
          "First-line: Lorazepam 0.1 mg/kg IV (max 4 mg); 70-80% efficacy, rapid onset",
          "Second-line: Phenytoin (15-20 mg/kg) or valproate if BZD fails",
          "Fosphenytoin preferred over phenytoin (faster infusion, less phlebitis)",
          "Refractory SE: Anesthesia (propofol/thiopental) with ICU monitoring",
          "EEG monitoring: Essential during anesthesia (target burst-suppression)",
          "Supportive care: Active cooling, fluid management, hyperkalemia correction",
          "Rhabdo management: Aggressive hydration, urine alkalinization",
          "Treat underlying cause in parallel: Antibiotics if infection, correct metabolic issues",
          "Time-dependent: Earlier intervention = better outcome; don't delay seizure termination"
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Chapter 15: Neurology - Seizures", edition: "9th" },
          { book: "Nelson Textbook of Pediatrics", chapter: "Chapter 593: Status Epilepticus", edition: "21st" }
        ]
      },
      {
        layer: 5,
        slug: "status-epilepticus-layer-5-active-recall",
        title: "Status Epilepticus - Active Recall",
        estimatedMinutes: 15,
        summary: "Test your knowledge of status epilepticus pathophysiology, diagnosis, and emergency management with case-based questions.",
        contentMd: `# Active Recall - Status Epilepticus

**Q1: A 3-year-old with fever presents to ED with continuous seizure activity for 8 minutes. What is your immediate management priority, and what drug do you administer first?**
> **This is status epilepticus** (seizure >5 minutes). **Immediate priority**: ABC (airway, breathing, circulation) FIRST. Give supplemental O₂, establish IV access. **First-line drug**: **Lorazepam 0.1 mg/kg IV** (child weighing ~15 kg = 1.5 mg, max 4 mg). Administer immediately; **do NOT wait for any test results**. Repeat Q5-10 min if seizures persist. Simultaneously draw blood (glucose, electrolytes, blood culture if febrile), but DO NOT delay lorazepam for testing.

**Q2: A child receiving lorazepam for SE shows no response at 5 minutes; seizures continue. What is your next step?**
> **Lorazepam failure/inadequate response**. **Second-line drug**: **Phenytoin loading** (15-20 mg/kg IV) OR **fosphenytoin** (preferred; same dose, faster infusion, less phlebitis). Alternative: **Valproate** (15-20 mg/kg IV) or **levetiracetam** (20-60 mg/kg IV). Infuse phenytoin slowly (max 50 mg/min) to avoid hypotension/arrhythmia. **Cardiac monitoring** essential. If still refractory at 20-30 min: Consider **anesthesia** (propofol bolus).

**Q3: Why does SE become increasingly difficult to treat the longer it lasts? Explain the mechanism of pharmacoresistance.**
> **Pharmacoresistance mechanism**: (1) **GABA-A receptor changes**: Benzodiazepine receptors internalize from cell surface (downregulation). (2) **Phosphorylation changes**: GABA-A receptor phosphorylation reduces BZD sensitivity. (3) **Subunit composition shift**: α1β2γ2 (BZD-sensitive) → α4β2δ (BZD-insensitive). (4) **Time-dependent**: <5 min BZD responsive; 5-20 min declining response; >20 min significant resistance. (5) **Result**: Higher drug doses needed; eventually refractory to standard drugs.

**Q4: A child in SE has blood gas showing pH 6.95, pCO₂ 58, HCO₃ 12. Interpret these values and their significance.**
> **Severe combined acidosis**: (1) **pH 6.95**: Critical acidemia (normal 7.35-7.45); <7.20 is very dangerous. (2) **pCO₂ 58**: Elevated; respiratory acidosis (hypoventilation, muscle paralysis preventing normal ventilation). (3) **HCO₃ 12**: Low; metabolic acidosis (lactic acidosis from anaerobic metabolism). **Significance**: Acidosis impairs drug efficacy, causes arrhythmias (peaked T-waves, cardiac dysrhythmia), reduces contractility. **Management**: Mechanical ventilation (if intubated), treat underlying SE aggressively, correct metabolic causes.

**Q5: A child in SE develops peaked T-waves on ECG. What is the underlying cause and immediate management?**
> **Peaked T-waves = Hyperkalemia** (potassium >6.5 mEq/L). **Cause**: Rhabdomyolysis (muscle breakdown releases K+), acidosis (K+ efflux from cells), renal failure (K+ retention). **Danger**: Cardiac arrhythmia (ventricular fibrillation) risk; can cause cardiac arrest. **Immediate management**: (1) **Calcium gluconate** 0.5 mL/kg of 10% IV (cardiac membrane stabilization - protects heart immediately), (2) **Sodium bicarbonate** 1 mEq/kg IV (shifts K+ into cells), (3) **Insulin + glucose** (0.1 units/kg regular insulin + 0.5 g/kg dextrose) - increases cellular K+ uptake. Monitor cardiac rhythm continuously.

**Q6: A child in SE has myoglobinuria (brown urine) and elevated CK (5000 U/L). What complication are you concerned about, and how do you prevent it?**
> **Complication**: **Rhabdomyolysis** → Acute Kidney Injury (AKI). **Mechanism**: Muscle breakdown releases myoglobin; precipitates in renal tubules → tubular obstruction and injury. **Prevention**: (1) **Aggressive IV hydration**: 0.9% normal saline; target urine output 0.5-1 mL/kg/hr (maintains renal perfusion, dilutes urine, promotes myoglobin excretion). (2) **Urine alkalinization**: Sodium bicarbonate IV (prevents myoglobin precipitation; alkaline urine solubilizes myoglobin). (3) **Monitor**: Serial creatinine, urine myoglobin, potassium. (4) **Aggressive treatment** of SE stops muscle breakdown (source of myoglobin).

**Q7: A child with SE is intubated and given propofol for anesthesia. What must you monitor, and what is a rare but dangerous complication?**
> **Monitor**: **Continuous EEG** (target burst-suppression pattern showing seizure suppression). **Also monitor**: Hemodynamics (propofol causes hypotension), trigger signs of propofol infusion syndrome. **Rare complication**: **Propofol infusion syndrome** (PIS) - seen with high-dose, prolonged infusions. **Features**: Bradycardia, hypotension, metabolic acidosis, rhabdomyolysis, renal failure, cardiac failure. **Risk**: Increases with duration >4-6 hours and dose >4 mg/kg/hr. **Prevention**: Use lowest effective dose, shortest duration; consider alternative (thiopental, volatile anesthetics). **Management**: Stop propofol immediately if signs appear; supportive care, ECMO if severe.

**Q8: A 6-month-old presents with continuous seizure activity (febrile SE). Labs show hypoglycemia (glucose 40 mg/dL). Why is this particularly dangerous in an infant, and how do you manage it?**
> **Danger in infants**: Hypoglycemia + seizures = Double threat. (1) Glucose is primary brain fuel in infants; brain dependent on glucose. (2) Seizures consume massive glucose. (3) Prolonged hypoglycemia causes neuronal death. (4) Combination rapidly causes irreversible brain damage. **Management**: (1) **IV dextrose immediately**: 0.25-0.5 g/kg (D25W or D50W) - give before seizure termination if hypoglycemic. (2) **Serum glucose check**: At bedside (finger stick). (3) **Continuous glucose monitoring**: After treatment (glucose can drop quickly in infants). (4) **Seizure termination** (lorazepam) stops glucose consumption.

**Q9: A 2-year-old with meningitis presents with SE. What is your empiric antibiotic regimen, and why must you give it urgently?**
> **Suspect meningitis** (fever + SE + irritability likely). **Empiric antibiotics**: **Ceftriaxone** (2 g Q12H for older child; dose-adjusted for weight) + **Vancomycin** (15-20 mg/kg Q6H) + **Ampicillin** (if <3 months, for Listeria). **Timing**: Give SIMULTANEOUSLY with lorazepam; do NOT wait. **Why urgent**: (1) Meningitis mortality increases with treatment delays. (2) Each hour of untreated meningitis increases death/disability risk. (3) Antibiotic penetration into CSF requires adequate time. (4) SE itself is meningitis sign; dual emergency.

**Q10: A 4-year-old in refractory SE (continued seizures despite lorazepam + phenytoin for 25 minutes) is intubated. What is the next management step?**
> **Refractory SE** (continued seizures >20-30 min despite first + second-line therapy). **Next step**: **Anesthesia induction**. **Drug choice**: **Propofol** (1-2 mg/kg IV bolus, then 2-10 mg/kg/hr infusion, OR **thiopental** (3-5 mg/kg bolus + infusion). **ICU setting**: Mandatory; continuous EEG monitoring needed. **Goal**: Burst-suppression pattern on EEG (seizure suppression). **Duration**: Maintain for minimum 12-24 hours; then gradually wean while continuing standard antiepileptic drugs. **Risk**: Hypotension, propofol infusion syndrome (with prolonged infusion).

**Q11: Explain the timeline of neuronal injury in prolonged SE and why early treatment is critical.**
> **Timeline of neuronal injury**: (1) **0-5 min**: Seizure initiation; minimal permanent damage risk. (2) **5-10 min**: GABA depletion begins; neuronal injury starts (excitotoxicity, energy failure). (3) **10-20 min**: Accelerating neuronal death (calcium overload, apoptosis). (4) **20-30 min**: Significant neuronal loss; cerebral edema developing. (5) **>30 min**: Critical damage; brain swelling, herniation risk, renal failure, cardiac complications. **Critical periods**: (1) **Most reversible if treated by 5-10 min**: Complete recovery possible. (2) **5-20 min**: Treatment effective but some neuronal loss. (3) **>20-30 min**: Significant permanent damage likely despite seizure termination. **Implication**: First-line therapy (lorazepam) must be given within first 5 minutes; second-line (phenytoin) by 10-15 minutes.

**Q12: A child develops SE post-operatively after general anesthesia. What etiologies must you consider, and how does management differ from other causes?**
> **Post-operative SE causes**: (1) **Hypoglycemia**: Blood glucose should be checked immediately. (2) **Anesthesia-related**: Withdrawal if chronic antiepileptic drugs continued; recovery agents can precipitate seizures. (3) **Structural**: Head trauma during surgery (if cranial procedure). (4) **Metabolic**: Electrolyte abnormalities (hypocalcemia, hypomagnesemia from IV fluids). (5) **Infection**: Post-operative infection (meningitis risk if neurosurgery). **Management differs**: (1) **Coordinate with surgical team**: Assess hemodynamics (may limit antihypertensive drugs), monitor wound. (2) **Check glucose immediately**: Hypoglycemia common; glucose correction may stop seizures. (3) **Verify antiepileptic drugs**: Were chronic AEDs continued perioperatively? (4) **Standard seizure termination**: Lorazepam, then phenytoin/anesthesia if needed. (5) **Imaging**: Post-op CT already available; review for new hemorrhage/edema.`,
        mnemonics: [
          {
            text: "SE Emergency Drugs - LPS",
            explanation: "Lorazepam first (0.1 mg/kg), Phenytoin second (15-20 mg/kg), Sedation/anesthesia if refractory"
          },
          {
            text: "SE Complications - CRASH",
            explanation: "Cerebral edema, Rhabdomyolysis, Acidosis (severe), Sepsis (if infection), Hyperkalemia"
          }
        ],
        keyPoints: [
          "SE definition: Seizure >5 minutes or recurrent without full recovery; medical emergency",
          "Mortality: 5-15% overall; higher in neonates, with infection, with prolonged duration",
          "First-line: Lorazepam 0.1 mg/kg IV (max 4 mg); repeat Q5-10 min; ~70-80% effective",
          "Second-line: Phenytoin (15-20 mg/kg IV) or fosphenytoin or valproate within 10-15 min",
          "Refractory SE: Anesthesia (propofol/thiopental) if seizures continue >20-30 min",
          "Pharmacoresistance: GABA receptor internalization; time-dependent loss of BZD efficacy",
          "Neuronal injury: Begins at 5 min; accelerates after 20-30 min; early treatment critical",
          "Supportive: Active cooling, aggressive hydration (rhabdo prevention), treat hyperkalemia",
          "Labs: Blood glucose (hypo = dangerous), electrolytes (hyperkalemia), CK (rhabdo), blood gas",
          "Underlying cause: Treat in parallel (antibiotics if infection, glucose if hypoglycemic)"
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Chapter 15: Neurology - Seizures", edition: "9th" },
          { book: "Nelson Textbook of Pediatrics", chapter: "Chapter 593: Status Epilepticus", edition: "21st" }
        ]
      }
    ]
  }
];
