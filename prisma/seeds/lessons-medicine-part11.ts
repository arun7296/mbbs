// Medicine Part 11: IM-MOD-07 (Meningitis, Neuropathy, Movement Disorders, Headache) through IM-MOD-10 (Emergency Medicine)
import { Prisma } from "@prisma/client";

export const medicinePart11Lessons = {
  topicCode: "IM-MOD-07-TOP-03",
  title: "Meningitis & Encephalitis",
  moduleCode: "IM-MOD-07",
  estimatedHoursTotal: 2,
  layers: [
    {
      layer: 1,
      slug: "meningitis-encephalitis-layer-1-foundation",
      title: "Meningitis & Encephalitis: Foundation Layer",
      estimatedMinutes: 20,
      summary: "Core anatomy and basic classification of CNS infections affecting meninges and brain parenchyma, with Indian epidemiological context.",
      contentMd: `
## Meningitis and Encephalitis: Foundational Concepts

### Anatomical Basis
The meninges comprise three protective layers surrounding the central nervous system:
- **Dura mater**: Outermost, dense fibrous membrane
- **Arachnoid mater**: Middle layer containing cerebrospinal fluid (CSF)
- **Pia mater**: Innermost layer directly adhering to brain parenchyma

Meningitis involves inflammation of these membranes, while encephalitis represents inflammation of brain tissue itself. These conditions often coexist (meningoencephalitis), complicating clinical presentation and management.

### Epidemiological Context (India-Specific)
- **Bacterial meningitis**: Most common in non-immunized populations; 500-1000 cases annually in major cities
- **Tuberculous meningitis (TBM)**: Remains endemic across India; accounts for 20-30% of acute meningitis cases in high TB-burden areas
- **Viral meningitis**: Peak incidence during monsoon and post-monsoon seasons
- **Japanese Encephalitis (JEV)**: Endemic in Uttar Pradesh, Bihar, Assam, and coastal regions; 400-800 confirmed cases annually
- **Enteroviral infections**: Common in summer months; seasonal variation significant

### Classification by Causative Agent
**Bacterial**
- Streptococcus pneumoniae: Most common (40-50%)
- Neisseria meningitidis: Sporadic and epidemic (15-20%)
- Listeria monocytogenes: Immunocompromised patients
- Tuberculous (Mycobacterium tuberculosis): High prevalence in India

**Viral**
- Enteroviruses: Most common viral cause globally
- Mumps, measles, varicella-zoster
- Japanese encephalitis, dengue
- Herpes simplex virus (HSV-1 and 2)

**Fungal**
- Cryptococcus neoformans
- Coccidioides, Histoplasma (less common in India)
- Aspergillus (immunocompromised)

**Parasitic**
- Toxoplasma gondii
- Cysticercosis, echinococcosis

### Pathophysiological Overview
1. **Pathogen entry**: Via blood-brain barrier, direct inoculation, or ascending infection
2. **Inflammatory cascade**: Local cytokine and chemokine release
3. **CSF changes**: Elevated protein, altered glucose, leukocytosis
4. **Neurological complications**: Increased ICP, seizures, cranial nerve palsies, hydrocephalus

### Risk Factors
- Age extremes (neonates, elderly)
- Immunocompromisation (HIV/AIDS, malignancy, immunosuppressive therapy)
- Asplenia, complement deficiencies
- Head trauma, recent neurosurgery
- TB contact, overcrowding
- Immunization status (meningococcal, pneumococcal, MMR)

### Seasonal and Geographic Variation
- Monsoon-associated surge in viral meningitis
- JEV transmission peaks August-September in endemic zones
- TB meningitis year-round but higher in winter months
- High-density urban settings increase bacterial meningitis risk
`,
      mnemonics: [
        {
          mnemonic: "BACTERIAL meningitis (acute, <1 week)",
          expansion: "Bacteria = Streptococcus pneumoniae, meningococcal; Acute = sudden onset fever/headache/neck stiffness; CSF = elevated protein (>100), low glucose, high PMN; Toxic appearance; Empiric antibiotics critical; Risk factors: asplenia, recent trauma",
        },
        {
          mnemonic: "VIRAL vs TUBERCULOUS (CSF clues)",
          expansion: "Viral = PMN initially, then lymphocytes, glucose usually normal, protein mildly elevated; Tuberculous = lymphocytes throughout, VERY low glucose (<40 mg%), very high protein (>100), slow progression; Treatment: TB drugs for TBM, supportive for viral",
        },
      ],
      keyPoints: [
        "Meningitis = meningeal inflammation; Encephalitis = parenchymal inflammation; often coexist",
        "Bacterial meningitis is a medical emergency requiring lumbar puncture and empiric antibiotics within 1 hour",
        "CSF analysis (cell count, protein, glucose, culture) is gold standard for diagnosis",
        "Tuberculous meningitis is endemic in India; suspect with subacute presentation and lymphocytic pleocytosis",
        "Japanese encephalitis endemic in specific Indian regions; consider in monsoon-season encephalitis cases",
      ],
      textbookRefs: [
        { title: "Harrisons Principles of Internal Medicine", chapter: "Central Nervous System Infections", edition: "21st" },
        { title: "API Textbook of Medicine", chapter: "Meningitis and Encephalitis", edition: "11th" },
        { title: "Davidsons Principles and Practice of Medicine", chapter: "Infections of the Nervous System", edition: "23rd" },
      ],
    },
    {
      layer: 2,
      slug: "meningitis-encephalitis-layer-2-mechanism",
      title: "Meningitis & Encephalitis: Mechanism Layer",
      estimatedMinutes: 30,
      summary: "Detailed pathophysiology of CNS infections, CSF dynamics, immune response, and molecular mechanisms of neuroinflammation.",
      contentMd: `
## Pathophysiological Mechanisms in Meningitis and Encephalitis

### Blood-Brain Barrier (BBB) Dysfunction
The BBB normally permits selective transport via:
- **Tight junctions**: Claudins, occludin, ZO-1 create highly selective permeability
- **Active transporters**: Regulate glucose, ions, and essential molecules
- **Efflux pumps**: P-glycoprotein excludes many xenobiotics

**In meningitis/encephalitis:**
1. Bacterial lipopolysaccharides and peptidoglycans trigger TLR recognition
2. Endothelial cells release TNF-α, IL-1β, IL-6
3. BBB tight junctions lose integrity
4. Increased vascular permeability allows pathogen and inflammatory cell infiltration
5. Cerebral edema develops (vasogenic then cytotoxic)

### Pathogen-Specific Mechanisms

**Bacterial Meningitis (S. pneumoniae)**
- Pneumolysin toxin creates pores in host cell membranes
- Hyaluronic acid capsule evades immune recognition
- Opsonin deposition (C3b) required for efficient phagocytosis
- Inflammatory response disproportionate to bacterial load
- Result: Severe BBB disruption, massive cytokine release, increased ICP

**Tuberculous Meningitis**
- Ghon focus (primary TB) reactivates in meninges
- Caseating granulomas form at meningeal vessels and subarachnoid space
- Vasculitis → vessel occlusion → stroke
- Ependymitis → hydrocephalus (obstructive then communicating)
- Cranial nerve involvement (CN VI, VII, VIII most common)
- Slow progression allows meningeal fibrosis and adhesions

**Viral Encephalitis (HSV-1)**
- Retrograde spread along trigeminal nerve
- Rapid viral replication in temporal and orbitofrontal cortex
- Direct neuron and glial infection
- T-cell mediated immune destruction of infected neurons
- Results in hemorrhagic necrosis and significant neuronal death
- High mortality (10-20%) without treatment

**Japanese Encephalitis Virus**
- Flavivirus transmitted by Culex mosquito
- Replicates in lymphoid tissues initially
- Crosses BBB via hematogenous route
- Infects neurons directly; glial activation secondary
- Particularly affects midbrain, brainstem, basal ganglia
- Results in both neuronal infection and massive inflammatory response

### CSF Dynamics and Pressure Changes

**Normal CSF Parameters:**
- Production: 20-35 mL/hour (mostly choroid plexus)
- Total volume: 140-150 mL
- Pressure: 100-200 mm H₂O
- Turnover: Complete refresh every 6-8 hours

**In meningitis/encephalitis:**
1. **Impaired CSF reabsorption**: Arachnoid granulation dysfunction
2. **Increased production**: Choroid plexus inflammation and increased permeability
3. **Obstructed flow**: Purulent exudates, granulomas, adhesions
4. **Cerebral edema**: Accumulation of fluid in extracellular and intracellular compartments
5. **Increased ICP**: Results in decreased cerebral perfusion pressure

### Inflammatory Cascade

**Innate Immune Recognition**
- Pattern recognition receptors (TLRs, NOD-like receptors) detect PAMPs
- MyD88 and TRIF signaling pathways activated
- NF-κB translocation leads to inflammatory gene transcription

**Cytokine and Chemokine Release**
- **Pro-inflammatory**: TNF-α, IL-1β, IL-6, IL-12, IFN-γ
- **Chemokines**: CXCL8 (IL-8), CCL2 (MCP-1), CXCL10 (IP-10)
- **Amplification loop**: Initial innate response recruits adaptive immunity
- **Peak levels**: 48-72 hours in bacterial meningitis

**Leukocyte Infiltration**
- Polymorphonuclear cells (PMN) dominate early response
- Lymphocytes predominate in viral and TB meningitis
- Infiltrating leukocytes release proteases, ROS, more cytokines
- Balance between protective and neurotoxic effects

### Complications and Secondary Mechanisms

**Cerebral Vasculitis**
- Large and medium vessel involvement in TB, fungal, some viral infections
- Endothelial dysfunction and thrombosis
- Results in ischemic stroke (10-20% of TBM patients)
- Small vessel disease causes lacunar infarcts

**Hydrocephalus**
- **Communicating**: Impaired CSF reabsorption at arachnoid granulations
- **Non-communicating**: Obstruction by exudates, granulomas, or swelling
- Develops in 30-50% of TBM, 5-10% of bacterial meningitis
- Can be acute (increased ICP) or chronic (delayed presentation)

**Subdural Effusion**
- Common in bacterial meningitis, especially pneumococcal
- Usually sterile (inflammatory transudate)
- Generally benign but may require drainage if massive
- Resolves spontaneously with appropriate antibiotic therapy

**Seizures**
- Occur in 20-40% of acute bacterial meningitis
- Mechanisms: inflammation, fever, hypoxia, metabolic derangements
- Status epilepticus rare but carries poor prognosis
- Post-meningitis seizure disorder develops in 5-10%

### Molecular Signaling in Neuroinflammation
- **NLRP3 inflammasome**: Activated by pathogen components and ATP; produces IL-1β, IL-18
- **Microglial activation**: M1 (pro-inflammatory) vs M2 (neuroprotective)
- **Astrocyte response**: Produce cytokines, chemokines, neurotrophic factors
- **Complement cascade**: Both classical and alternative pathways activated; C5a most chemotactic
- **Oxidative stress**: Excessive ROS and RNS damage lipids, proteins, DNA

### Resolution Phase (if untreated or inadequately treated)
- Chronic inflammation and fibrosis
- Neuronal loss and synaptic dysfunction
- Cognitive impairment, hearing loss, hydrocephalus development
- In TBM: Progressive vasculitis, infarction, disability
`,
      mnemonics: [
        {
          mnemonic: "BBB breakdown in meningitis (LIPID)",
          expansion: "Lipopolysaccharide recognition → TLRs; Inflammatory cytokines (TNF, IL-1, IL-6); Permeability increases; Increased vascular leak; Disrupted tight junctions; Vasogenic edema develops",
        },
        {
          mnemonic: "TB meningitis pathology: CHASM",
          expansion: "Caseating granulomas; Hydrocephalus (ependymitis → adhesions); Adhesions and fibrosis; Stroke (vasculitis); Meningeal location (subarachnoid)",
        },
        {
          mnemonic: "CSF changes: VIRAL vs BACTERIAL",
          expansion: "VIRAL = glucose normal (>40), protein mild (100-300), PMN→lymphocytes; BACTERIAL = glucose LOW (<40), protein HIGH (>500), PMN predominance; TB = glucose very low (<40), protein very high (>500), lymphocytes",
        },
      ],
      keyPoints: [
        "Bacterial meningitis causes rapid BBB disruption via TLR signaling and massive cytokine release; TNF-α and IL-1β are pivotal",
        "TB meningitis involves granulomatous inflammation with vasculitis risk; slow progression allows meningeal fibrosis",
        "HSV encephalitis causes hemorrhagic necrosis of temporal lobe via direct neuronal infection and delayed immune response",
        "Hydrocephalus develops via impaired CSF reabsorption or obstruction; communicating form most common in meningitis",
        "Cerebral edema (vasogenic) increases ICP and reduces cerebral perfusion pressure; is primary determinant of mortality",
        "Complement activation (C5a) and NLRP3 inflammasome drive intense inflammatory response; may be therapeutic targets",
      ],
      textbookRefs: [
        { title: "Harrisons Principles of Internal Medicine", chapter: "Acute Meningitis and Encephalitis", edition: "21st" },
        { title: "API Textbook of Medicine", chapter: "Pathophysiology of CNS Infections", edition: "11th" },
        { title: "Davidsons Principles and Practice of Medicine", chapter: "Immune Response to CNS Infections", edition: "23rd" },
      ],
    },
    {
      layer: 3,
      slug: "meningitis-encephalitis-layer-3-clinical",
      title: "Meningitis & Encephalitis: Clinical Layer",
      estimatedMinutes: 25,
      summary: "Clinical presentation, diagnostic approach, differential diagnosis, and management protocols for acute CNS infections.",
      contentMd: `
## Clinical Management of Meningitis and Encephalitis

### Classic Presentation and Red Flags

**Classic Meningitis Triad**
1. **Fever** (>38.5°C): Present in 80-90% of bacterial meningitis
2. **Headache**: Severe, often described as 'worst headache of life'
3. **Nuchal rigidity**: Neck stiffness on flexion; often absent in neonates and elderly

**Additional Signs (Kernig and Brudzinski)**
- **Kernig sign**: Resistance to knee extension when hip flexed at 90°
- **Brudzinski sign**: Spontaneous hip flexion when neck is passively flexed
- **Sensitivity varies**: 50-60% for Kernig, 50-75% for Brudzinski
- **Absence doesn't exclude meningitis**, especially in early disease

**Red Flags for Severity**
- Altered mental status (confusion, lethargy, coma)
- Seizures (especially status epilepticus)
- Petechial/purpuric rash (meningococcemia)
- Focal neurological deficits (cranial nerve palsies, weakness)
- Signs of increased ICP (papilledema, altered pupils)
- Rapid clinical deterioration

### Encephalitis-Specific Features

**Characteristic Presentation**
- Behavioral changes, personality changes, aggression
- Confusion, disorientation, delirium
- Memory impairment, apraxia
- Seizures (30-70% depending on etiology)
- Focal neurological signs (speech disturbance, hemiparesis)
- Autonomic instability (tachycardia, hypertension, arrhythmias)

**Temporal Lobe Involvement (HSV-1)**
- Olfactory hallucinations, gustatory symptoms
- Lip smacking, repetitive automatisms (temporal lobe seizures)
- Aggressive behavior, emotional lability
- Memory impairment with intact consciousness initially
- Rapid progression to altered mental status without treatment

### Diagnostic Approach

**Essential: Lumbar Puncture (LP) and CSF Analysis**

*Contraindications to LP:*
- Papilledema or other signs of increased ICP
- Focal neurological deficit
- Immunocompromised with mass on imaging
- Cardiopulmonary instability

*CSF Analysis Parameters:*
| Parameter | Bacterial | Viral | Tuberculous | Fungal |
|-----------|-----------|-------|-------------|--------|
| Pressure (mm H₂O) | 200-500+ | 100-300 | 200-500+ | 200-500+ |
| Cell count (/μL) | 1000-10000 | 100-1000 | 100-500 | 100-1000 |
| Cell type | PMN dominant | Lymph dominant | Lymph dominant | Lymph dominant |
| Protein (mg/dL) | 100-1000+ | 50-200 | 100-500+ | 100-800+ |
| Glucose (mg/dL) | <40 | >40 (normal) | <40 | <40 |
| CSF:Serum glucose | <0.4 | >0.4 | <0.4 | <0.4 |
| Culture positive | 70-90% | <1% | 10-60% (TB) | 50-90% |

**Imaging Studies**

*CT Head* (non-contrast, before LP if LP contraindicated)
- Assess for mass effect, midline shift, hydrocephalus
- May show obliterated cisterns in severe edema
- Not sensitive for meningitis unless complications present

*MRI Brain* (after stabilization)
- **Bacterial**: Ependymitis, subdural effusion, ventriculitis
- **TB**: Meningeal enhancement (basal cisterns), vasculitis, infarcts
- **HSV**: Temporal lobe edema, T2/FLAIR hyperintensities, hemorrhage
- **JEV**: Brainstem, basal ganglia, thalamic involvement
- **Diffusion restriction**: Indicates acute ischemic stroke

**Molecular Diagnostics**

*PCR (optimal 48 hours, not delayed for therapy):*
- Viral PCR: HSV, VZV, enterovirus, JEV
- Bacterial 16S rRNA: Culture-negative cases
- TB PCR: Rapid detection; 70-90% sensitive for TBM

*Culture and Sensitivity:*
- Blood cultures: Positive in 50-90% of bacterial meningitis
- CSF culture: 70-90% in bacterial, 10-60% in TB
- Hold cultures for extended incubation (TB requires weeks)

### Differential Diagnosis

**Aseptic Meningitis vs Bacterial**
- Viral meningitis: Generally benign, self-limited
- CSF parameter overlap exists; can't rely on CSF alone
- Clinical judgment essential

**Meningitis vs Meningoencephalitis vs Pure Encephalitis**
- Encephalitis: Parenchymal signs predominate (seizures, focal deficits, behavior change)
- Meningitis: Meningeal signs (headache, neck stiffness)
- Often coexist; CSF analysis helps distinguish

**TB vs Bacterial vs Viral**
- TB: Subacute (>7 days), lymphocytic, very low glucose, high protein
- Bacterial: Acute (<3 days), PMN, low glucose, very high protein
- Viral: Acute, mild elevation, normal glucose often

### Acute Management Protocol

**EMPIRIC ANTIBIOTICS (Start immediately, don't wait for LP/CSF)**
- Within 30-60 minutes of clinical suspicion
- Before imaging if imaging will delay antibiotics

*Standard Empiric Therapy (India):*
- **Ceftriaxone** 2g IV Q4H (or cefotaxime)
- **Vancomycin** 15-20 mg/kg IV Q4-6H (for pneumococcal resistance)
- **Ampicillin** 2g IV Q4H (Listeria coverage if age >50 or immunocompromised)
- **Add Antituberculous**: If TB suspected clinically (4-drug RIPE for 2 months)

*Adjunctive Dexamethasone:*
- **Dose**: 10 mg IV Q6H for 4 days
- **Timing**: Before or concurrent with first antibiotic dose
- **Benefit**: Reduces mortality, hearing loss, neurological sequelae
- **Contraindication**: Immunocompromised patients (relative)

**Supportive Care**
- Isolation (respiratory for meningococcal/TB until 48 hours treatment)
- Fluid management (avoid hyponatremia from SIADH)
- Seizure management: Prophylaxis if seizures present
- Temperature control, pain management
- Monitor for raised ICP (osmotic therapy, positioning, sedation)
- DVT prophylaxis

**Specific Therapies**

*Tuberculous Meningitis:*
- 4-drug therapy (RIPE) for 2 months, then 2-drug for 4 months
- Add corticosteroids (prednisolone 1-2 mg/kg for 3 months minimum)
- Monitor for drug toxicity, interactions

*HSV Encephalitis:*
- **Acyclovir** 10 mg/kg IV Q8H for 14-21 days
- Specific diagnosis not required to start; low toxicity
- Higher doses than meningitis

*JEV Encephalitis:*
- Supportive care, immunoglobulin investigational
- Vaccine-based prevention (now part of childhood immunization in endemic areas)

### Complications and Management

**Raised ICP**
- Osmotic therapy: Mannitol 0.25-1 g/kg or hypertonic saline 3%
- Head elevation 30°, maintain normocapnia
- Sedation if mechanically ventilated

**Seizures**
- Prophylaxis controversial; treat clinical seizures aggressively
- Levetiracetam preferred (no interactions)

**Hydrocephalus**
- May resolve with antibiotics alone
- Ventriculoperitoneal shunt if obstructive or worsening

**Subdural Effusion**
- Usually self-limited; drain if massive or causing mass effect

**Stroke**
- Antiplatelet therapy controversial in active infection
- Focus on controlling underlying cause

### Prognosis and Outcomes

**Mortality Rates (India)**
- Bacterial meningitis: 20-30% (despite antibiotics)
- TB meningitis: 20-40% (higher with late diagnosis)
- HSV encephalitis: 10-20% untreated, 5-10% treated
- Viral meningitis: <1%

**Long-term Sequelae**
- Hearing loss (10-30%, especially pneumococcal)
- Cognitive impairment, memory problems
- Behavioral/personality changes (especially HSV)
- Seizure disorder (5-10%)
- Hydrocephalus, obstructive (requires shunt)
- Cranial nerve palsies (CN VI, VII, VIII)
`,
      mnemonics: [
        {
          mnemonic: "Meningitis Red Flags: SEPTIC",
          expansion: "Seizures; Encephalopathy (altered mental status); Petechial rash; Tachycardia/hypotension; Increased ICP signs; Cranial nerve palsies",
        },
        {
          mnemonic: "Antibiotics for Meningitis: CAVE",
          expansion: "Ceftriaxone (broad-spectrum 3rd gen); Ampicillin (Listeria); Vancomycin (resistance); Empiric = start immediately, not after LP",
        },
        {
          mnemonic: "CSF differential (VBFG)",
          expansion: "Viral = lymphocytes, normal glucose, mild protein; Bacterial = PMN (initially), LOW glucose, HIGH protein; Fungal/TB = lymphocytes, VERY LOW glucose, VERY HIGH protein",
        },
      ],
      keyPoints: [
        "Meningitis is a medical emergency: start empiric antibiotics within 1 hour; don't delay for imaging/LP if clinical suspicion high",
        "Dexamethasone within 4 hours improves outcomes in bacterial meningitis; give before or with first antibiotic dose",
        "Classic triad (fever, headache, neck stiffness) present in <50% of bacterial meningitis; absence doesn't exclude diagnosis",
        "CSF analysis distinguishes bacterial (PMN dominant, low glucose, high protein) from viral (lymphocytes, normal glucose)",
        "TB meningitis: Start ATT early (before culture confirmation); adjunctive corticosteroids essential to reduce mortality",
        "HSV encephalitis: Give acyclovir empirically if encephalitis suspected; temporal lobe findings suggest HSV-1",
        "JEV endemic in specific Indian regions (UP, Bihar, Assam); consider in monsoon season encephalitis cases",
      ],
      textbookRefs: [
        { title: "Harrisons Principles of Internal Medicine", chapter: "Meningitis and Encephalitis - Clinical Management", edition: "21st" },
        { title: "API Textbook of Medicine", chapter: "Management of Acute CNS Infections", edition: "11th" },
        { title: "Davidsons Principles and Practice of Medicine", chapter: "Diagnosis and Treatment of Meningitis", edition: "23rd" },
      ],
    },
    {
      layer: 4,
      slug: "meningitis-encephalitis-layer-4-exam",
      title: "Meningitis & Encephalitis: Exam Prep Layer",
      estimatedMinutes: 20,
      summary: "High-yield facts for NEET/NEXT exams, common clinical scenarios, key decision-making points, and frequently tested concepts.",
      contentMd: `
## High-Yield Exam Concepts: Meningitis & Encephalitis

### NEXT-Pattern Question Scenarios

**Scenario 1: Acute Meningitis Workup (Problem-Solving)**
*A 28-year-old presents with fever (39.5°C), severe headache, and neck stiffness × 2 hours. What is the next step?*

**Key Decision Points:**
- **DO NOT wait for LP/imaging**: Start empiric antibiotics immediately
- **Imaging NOT needed before LP** unless contraindications present (papilledema, focal deficit)
- **Correct answer**: Empiric ceftriaxone + vancomycin IV + dexamethasone, then LP
- **Common trap**: Doing CT first (delays antibiotics, increases mortality)
- **Why it matters**: Every hour delay increases meningitis mortality by ~5%

**Scenario 2: CSF Interpretation (Analysis)**
*CSF shows: 200 cells/μL (90% lymphocytes), protein 200 mg/dL, glucose 45 mg/dL (serum 100)*

**Analysis Steps:**
1. **Identify pattern**: Lymphocytic, low glucose, high protein → TB or fungal
2. **Distinguish TB vs viral**: Glucose <40 (TB/fungal), >45 (usually viral)
3. **Differentiate TB vs fungal**: TB more common in India; fungal needs risk factors
4. **Next step**: TB-LAMP, culture, AFB smear × 3 before starting ATT
5. **Don't wait for culture**: Start ATT if clinical suspicion high (>1 week, lymphocytic)

**Scenario 3: Meningococcemia Recognition (Problem-Solving)**
*Young adult with fever, petechial rash progressing to purpura, hypotension × 3 hours*

**Key Recognition:**
- **Pathognomonic sign**: Petechial/purpuric rash in meningitis
- **Clinical significance**: Indicates meningococcal disease (Neisseria meningitidis)
- **Urgent action**: IV antibiotics immediately; contact isolation
- **Prophylaxis**: Rifampin for close contacts; meningococcal vaccine for household
- **Prognosis**: 10-15% mortality despite treatment; high morbidity

### Common High-Yield Facts

**1. Risk Stratification for Empiric Coverage**
| Patient Category | Add to 3rd Gen Cephalosporin |
|------------------|------------------------------|
| Age <50, immunocompetent | Vancomycin (pneumococcal resistance) |
| Age >50, immunocompromised | Add Ampicillin (Listeria) |
| Recent neurosurgery, shunt | Anti-pseudomonal (meropenem) |
| TB exposure, endemic area | Add ATT immediately |

**2. Dexamethasone Timing and Indication**
- **When**: Within 4 hours of antibiotic initiation (ideally before/concurrent)
- **Dose**: 10 mg IV Q6H × 4 days
- **Benefit**: Reduces mortality 14% → 10%, hearing loss, neurological sequelae
- **Exceptions**: Immunocompromised (relative contraindication); already on steroids
- **Why it works**: Reduces inflammatory mediator penetration; decreases BBB permeability

**3. Culture-Negative Meningitis**
**Causes:**
- Prior antibiotics (most common)
- Viral etiology
- Partially treated bacterial
- Fastidious organisms (Listeria, H. influenzae with beta-lactamase)

**Management:**
- Continue empiric antibiotics if bacterial pattern on CSF
- Add HSV coverage (acyclovir) if encephalitis features
- Molecular PCR for viral and TB
- Blood cultures still critical

**4. TB Meningitis vs Bacterial: Key Differences**

| Feature | TB | Bacterial |
|---------|----|----|
| Onset | Subacute (7-14 days) | Acute (<3 days) |
| CSF cells | Lymphocytic; <500 | PMN dominant; >1000 |
| CSF glucose | <20 mg% (very low) | <40 but usually 10-30 |
| CSF protein | 100-500 mg% | 100-1000 (very high) |
| Culture positive | 10-60% (slow growth) | 70-90% (rapid) |
| Typical location | Basal cisterns | Vertex (over brain surface) |
| Complications | Vasculitis (stroke), hydrocephalus | Subdural effusion, ventriculitis |
| Treatment | ATT 6 months + steroids | Antibiotics 10-14 days |

**5. Cranial Nerve Involvement Pattern**
- **TB meningitis**: CN VI (horizontal gaze palsy), CN VII (Bell's), CN VIII (deafness)
- **Location**: Basal cisterns affect CN II-VIII at base of skull
- **Early sign**: Horizontal gaze palsy in TB meningitis is classic
- **Mechanism**: Meningeal inflammation compresses nerves; in TB also vasculitis

**6. Hydrocephalus in Meningitis**
- **Bacterial**: 5-10% develop obstructive hydrocephalus
- **TB**: 30-50% develop hydrocephalus (major cause of morbidity)
- **Mechanism**: Exudates obstruct CSF flow or impair reabsorption
- **Clinical sign**: Progressive lethargy, increasing head circumference
- **Management**: May resolve with antibiotics; ventriculoperitoneal shunt if progressive

### NEXT Exam High-Yield Points

**Problem-Solving (60%)**
1. When to start antibiotics without LP (meningitis suspected clinically)
2. When NOT to do LP (raised ICP signs)
3. Interpretation of CSF with partial treatment
4. Management of meningitis in pregnancy (safe antibiotics)
5. Post-meningitis complications (hearing loss screening, rehabilitation)

**Analysis (30%)**
1. Differentiate bacterial vs TB vs viral from CSF
2. Interpret MRI findings (temporal lobe = HSV, brainstem = JEV)
3. Distinguish meningitis from meningoencephalitis
4. Evaluate test results (CSF culture, PCR, imaging)

**Recall (10%)**
1. Classic presentation of meningitis
2. Antibiotic doses (ceftriaxone 2g Q4H, vancomycin 15-20 mg/kg)
3. Dexamethasone dose (10 mg Q6H × 4 days)
4. TB meningitis treatment duration (6 months)

### Common Exam Traps

**Trap 1: "Normal CSF rules out meningitis"**
- **False**: Early meningitis may have normal CSF; repeat LP after 6-12 hours
- **Correct approach**: Clinical suspicion high = continue antibiotics even if CSF normal initially

**Trap 2: "Must get imaging before LP"**
- **Misleading**: Unnecessary delays antibiotics; only if contraindication present
- **Correct approach**: LP safe if no papilledema/focal deficit; do imaging concurrently

**Trap 3: "Negative culture excludes bacterial meningitis"**
- **False**: Culture negative in 10-30% (prior antibiotics, fastidious organisms)
- **Correct approach**: CSF pattern (PMN, low glucose) more reliable than culture alone

**Trap 4: "Acyclovir not needed without confirmed HSV"**
- **False**: Give acyclovir empirically if any encephalitis features
- **Low toxicity, high benefit**: Start immediately, continue until HSV ruled out
- **Correct approach**: Encephalitis + altered mental status = acyclovir empirically

**Trap 5: "Dexamethasone contraindicated in immunocompromised"**
- **Misleading**: Relative contraindication; benefit often outweighs risk
- **Correct approach**: Usually still give; tailor to individual risk-benefit

### India-Specific High-Yield Points

**TB Meningitis Prevalence**
- 15-25% of meningitis cases in India
- High TB burden regions (Bihar, Assam, Odisha)
- Always include in differential for meningitis
- Don't delay ATT waiting for culture confirmation

**JEV Endemicity**
- Endemic in: Uttar Pradesh, Bihar, Assam, parts of coastal India
- Seasonal: August-September peak
- Recent vaccine introduction in state immunization programs
- Consider in monsoon-season encephalitis cases
- High mortality if brainstem involvement

**Drug-Resistant TB**
- MDR-TB prevalent in India
- Second-line ATT required if MDR-TB suspected
- First-line: RIPE × 2 months, then IP × 4 months
- Watch for drug toxicity (pyrazinamide hepatotoxicity, INH neuropathy)

**Immunization Rates**
- Check for meningococcal, pneumococcal, MMR vaccination
- India: Meningococcal vaccine not universally available (private)
- Pneumococcal vaccine increasing coverage
- Vaccination status affects disease presentation and prognosis

### NEXT Practice Format Examples

**Format 1: Single Best Answer**
"A 35-year-old with fever, headache, neck stiffness for 12 hours. Examination: responsive to commands, no focal deficit. Next management step?"
- Options often include: CT head, LP with imaging, empiric antibiotics alone, observe
- **Best answer**: Empiric antibiotics immediately (don't delay for LP/imaging)

**Format 2: Problem-Solving with Steps**
"38-year-old with meningitis. CSF: PMN dominant, glucose 25, protein 400. Blood culture pending. Management?"
- Requires: Diagnosis recognition (bacterial), antibiotic choice, duration, adjunct therapy
- **Key decision**: Continue antibiotics even if culture negative

**Format 3: Image-Based MCQ**
"MRI shows temporal lobe edema with hemorrhage. Most likely diagnosis?"
- **Answer**: HSV encephalitis
- **Key point**: Temporal lobe = HSV-1 until proven otherwise

### Mnemonic Summaries

**"MENINGITIS Killed My Child"**
- **M**: Meningococcal (petechial rash, fulminant)
- **E**: Empiric antibiotics (start immediately, don't delay)
- **N**: Neuro exam critical (focal deficit, altered mental status)
- **I**: Increase in CSF protein, decrease in glucose
- **N**: No delay for imaging (LP safe if no contraindication)
- **G**: Get dexamethasone (within 4 hours)
- **I**: Isolation for meningococcal
- **T**: TB meningitis consideration (India-specific)
- **I**: Immunization check (vaccines reduce risk)
- **S**: Seizures management, sequelae prevention

**"TB Meningitis is DARK"**
- **D**: Delayed presentation (subacute, >1 week)
- **A**: Very Acidic CSF (low glucose), Adhering meninges (basilar)
- **R**: Resistant (ATT long treatment course)
- **K**: Kills nerves (cranial nerve palsies, especially CN VI)
`,
      mnemonics: [
        {
          mnemonic: "Empiric Meningitis Antibiotics (CCAvA)",
          expansion: "Ceftriaxone; Cefotaxime; Add Vancomycin (pneumococcal resistance); Add Ampicillin if age >50/immunocompromised (Listeria); Start within 1 hour",
        },
        {
          mnemonic: "NEXT-Pattern Meningitis Question: ACD",
          expansion: "Antibiotics immediately (don't wait for LP/imaging); Culture positive but management empiric; Dexamethasone within 4 hours of first antibiotic",
        },
        {
          mnemonic: "TB Meningitis Red Flag: BASH",
          expansion: "Basal enhancement on MRI; Adhesions and exudates; Subacute onset (>1 week); High protein/very low glucose",
        },
      ],
      keyPoints: [
        "Start antibiotics within 1 hour for suspected meningitis; don't wait for LP or imaging results",
        "Dexamethasone improves mortality and morbidity; give within 4 hours of first antibiotic dose",
        "CSF pattern (PMN vs lymphocytes, glucose, protein) distinguishes bacterial from TB/viral",
        "TB meningitis: 15-25% of meningitis cases in India; includes ATT + corticosteroids for 6 months minimum",
        "JEV endemic in specific regions (UP, Bihar, Assam); seasonal (August-Sept); high mortality risk",
        "Cranial nerve palsies in meningitis: TB meningitis affects CN VI-VIII more commonly (basilar involvement)",
        "Culture-negative cases: Don't stop antibiotics if CSF pattern consistent with bacterial meningitis",
        "Post-meningitis sequelae: Hearing loss (10-30%), cognitive impairment (5-10%), seizure disorder (5-10%)",
      ],
      textbookRefs: [
        { title: "NEXT Exam Preparation - Medicine", chapter: "CNS Infections High-Yield Points", edition: "Current" },
        { title: "API Textbook of Medicine", chapter: "Meningitis - Exam-Focused Section", edition: "11th" },
        { title: "Davidsons Principles and Practice of Medicine", chapter: "NEXT-Pattern Questions on Meningitis", edition: "23rd" },
      ],
    },
    {
      layer: 5,
      slug: "meningitis-encephalitis-layer-5-active-recall",
      title: "Meningitis & Encephalitis: Active Recall Layer",
      estimatedMinutes: 15,
      summary: "Spaced repetition questions, recall prompts, and self-testing materials for long-term retention and rapid clinical retrieval.",
      contentMd: `
## Active Recall and Spaced Repetition: Meningitis & Encephalitis

### Core Recall Questions (Memorization-Level)

**Q1: What is the classic triad of meningitis?**
A: Fever, headache, neck stiffness (present in <50% of cases)

**Q2: What is the most common bacterial cause of meningitis in India?**
A: Streptococcus pneumoniae (40-50%), followed by Neisseria meningitidis (15-20%)

**Q3: What CSF finding is pathognomonic for bacterial meningitis?**
A: NO single finding is pathognomonic; combination of PMN dominant, glucose <40, protein >100 is characteristic

**Q4: What is the empiric antibiotic combination for meningitis?**
A: Ceftriaxone 2g Q4H + Vancomycin 15-20 mg/kg Q4-6H ± Ampicillin (if age >50/immunocompromised)

**Q5: When should dexamethasone be given in meningitis?**
A: Within 4 hours of first antibiotic dose; ideally before or concurrent with antibiotics

**Q6: What is the CSF glucose in TB meningitis?**
A: <20-40 mg/dL (very low); CSF:serum glucose ratio <0.4

**Q7: How long is the standard treatment course for TB meningitis?**
A: 6 months total: 4-drug therapy (RIPE) for 2 months, then 2-drug (IP) for 4 months

**Q8: What is the characteristic MRI finding in HSV encephalitis?**
A: Temporal lobe edema with possible hemorrhage; unilateral or bilateral temporal involvement

**Q9: What is the dose of acyclovir for HSV encephalitis?**
A: 10 mg/kg IV Q8H for 14-21 days

**Q10: In what areas of India is Japanese encephalitis endemic?**
A: Uttar Pradesh, Bihar, Assam; coastal regions; peak transmission August-September

---

### Deep Recall and Clinical Correlation

**Q11: A patient with meningitis has horizontal gaze palsy. What does this suggest?**
A: TB meningitis affecting CN VI (abducens nerve); indicates basilar meningeal involvement; classic finding in TB

**Q12: CSF shows 250 cells (90% lymphocytes), glucose 35, protein 250. What's the most likely diagnosis?**
A: TB meningitis (subacute presentation assumed); fungal meningitis less likely in India unless immunocompromised

**Q13: Why is dexamethasone beneficial in bacterial meningitis but not recommended in TB meningitis alone?**
A: In bacterial: reduces BBB permeability, decreases inflammatory mediator penetration, reduces ICP
In TB: Add dexamethasone (prednisolone) ANYWAY; steroids improve outcomes significantly; combination of ATT + steroids essential

**Q14: A patient completes 48 hours of antibiotics for meningitis. Fever persists, CSF still positive. What could explain this?**
A: Inadequate penetration (dexamethasone reduces antibiotic penetration), resistant organism, wrong antibiotic, complications (subdural effusion, ventriculitis)

**Q15: What is SIADH in meningitis and how is it managed?**
A: Syndrome of inappropriate ADH secretion; causes hyponatremia; manage with fluid restriction; check serum sodium regularly; correct slowly

---

### Clinical Scenario Recall

**Scenario A: 32-year-old with fever, headache, neck stiffness × 4 hours**
- First action: IV antibiotics (don't delay)
- Second action: If no contraindications, LP and CSF analysis
- Imaging: If contraindication to LP present (papilledema, focal deficit)
- Dexamethasone: Give with or just before first antibiotic

**Scenario B: Patient with TB meningitis, on ATT × 1 month, now has motor deficit and leg weakness**
- Likely cause: Vasculitis with stroke (medium-large vessel disease)
- Management: Continue ATT (don't increase dose), supportive care, physical therapy
- Prevention: Early adequate ATT + corticosteroids reduce stroke risk

**Scenario C: Young child with fever, behavior change, seizures, temporal lobe findings on MRI**
- Diagnosis: HSV encephalitis (temporal lobe pathognomonic)
- Management: Acyclovir 10 mg/kg IV Q8H immediately; don't wait for PCR confirmation
- Outcome: Earlier treatment significantly improves prognosis

**Scenario D: CSF positive for meningococcus; patient hypotensive with petechial rash**
- Diagnosis: Meningococcemia with septic shock
- Management: IV antibiotics, fluid resuscitation, vasopressors
- Prophylaxis: Contact isolation, rifampin prophylaxis for close contacts
- Vaccination: Meningococcal vaccine for close contacts

---

### Pattern Recognition (Rapid Diagnosis)

**Pattern 1: Fever + Headache + Neck Stiffness**
→ Meningitis (bacterial until proven otherwise)
→ Action: Empiric antibiotics within 1 hour

**Pattern 2: Fever + Behavior Change + Seizures**
→ Encephalitis (consider HSV, JEV)
→ Action: Acyclovir if any encephalitis features

**Pattern 3: Subacute Meningitis + CN VI Palsy + CSF with low glucose**
→ TB meningitis
→ Action: Start ATT immediately + dexamethasone

**Pattern 4: Petechial/Purpuric Rash + Meningitis**
→ Meningococcemia
→ Action: Isolate, antibiotics, contact prophylaxis

**Pattern 5: Temporal Lobe Edema on MRI**
→ HSV encephalitis (until proven otherwise)
→ Action: Acyclovir if not already given

**Pattern 6: Brainstem/Basal Ganglia Findings on MRI + Summer/Monsoon**
→ JEV (in endemic areas)
→ Action: Supportive care; consider immunoglobulin

---

### Rapid Decision Trees

**Decision 1: When to defer LP**

Suspected meningitis → Papilledema/focal deficit/mass on imaging?
YES → Do CT head first, then LP
NO → LP immediately (don't delay with imaging)


**Decision 2: Antibiotic Coverage**

Meningitis suspected → Age <50, immunocompetent?
YES → Ceftriaxone + Vancomycin
NO → Add Ampicillin (for Listeria)


**Decision 3: CSF Interpretation**

CSF cells → PMN dominant?
YES → Likely bacterial
NO → Lymphocytes dominant → Viral vs TB vs fungal
     → Very low glucose (<20)? → TB/fungal likely
     → Normal glucose? → Viral meningitis likely


**Decision 4: Need for Acyclovir**

Meningitis or encephalitis suspected → Any encephalitis features (altered mental status, seizures, behavioral change)?
YES → Give acyclovir empirically
NO → Can defer acyclovir if pure meningitis (bacterial/viral)


---

### Rapid Reference: CSF Profile Recognition

**BACTERIAL**
- Pressure: 250-500 mm H₂O
- Cells: 1000-10000, PMN dominant (>80%)
- Glucose: 10-40 mg/dL, CSF:serum ratio <0.4
- Protein: 100-500 (can be >1000)
- Culture: 70-90% positive

**VIRAL**
- Pressure: 100-300 mm H₂O
- Cells: 100-1000, lymphocytes (especially later)
- Glucose: Normal (>40 mg/dL), CSF:serum ratio >0.4
- Protein: 50-200 mg/dL
- Culture: <1% positive; PCR useful

**TB MENINGITIS**
- Pressure: 200-500+ mm H₂O
- Cells: 100-500, lymphocytes (>80%)
- Glucose: <20 mg/dL, CSF:serum ratio <0.4
- Protein: 100-500 (typically 200-300)
- Culture: 10-60% positive (slow, take weeks)

**FUNGAL**
- Pressure: 200-500+ mm H₂O
- Cells: 100-1000, lymphocytes
- Glucose: <40 mg/dL, CSF:serum ratio <0.4
- Protein: 100-800 mg/dL
- Culture: 50-90% positive (slower growth)

---

### Knowledge Check: Fill-in-the-Blank

1. The most common bacterial cause of meningitis in India is __________ (S. pneumoniae)
2. Dexamethasone should be given within __________ hours of first antibiotic (4 hours)
3. Standard ceftriaxone dose in meningitis is __________ g Q4H (2g)
4. TB meningitis treatment duration is __________ months minimum (6 months)
5. Acyclovir dose for encephalitis is __________ mg/kg IV Q8H (10 mg/kg)
6. CSF glucose in TB meningitis is typically <__________ mg/dL (40, usually <20)
7. CN VI (abducens) palsy in meningitis suggests __________ meningitis (TB)
8. JEV is endemic in __________, __________, and __________ (UP, Bihar, Assam)
9. Petechial rash in meningitis indicates __________ infection (meningococcal/Neisseria)
10. MRI temporal lobe finding in encephalitis is characteristic of __________ (HSV-1)

---

### Retention Boosters

**Weekly Review Prompt**: "What is the ONE most important action in suspected meningitis?"
**Answer**: Start empiric antibiotics within 1 hour (mortality increases ~5% per hour delay)

**Monthly Review Prompt**: "Summarize the difference between TB and bacterial meningitis in 3 sentences."
**Answer**: TB is subacute (>1 week), lymphocytic CSF with very low glucose (<20) and high protein; bacterial is acute (<3 days), PMN-dominant CSF with low glucose and very high protein; TB requires 6-month ATT + corticosteroids

**Exam Prep Prompt**: "What would change your empiric antibiotic regimen?"
**Answer**: Age >50 or immunocompromised → add ampicillin; recent neurosurgery → add anti-pseudomonal; TB suspected → add ATT immediately

---

### Quick Recall Anchors

**"FEVER-HEADACHE-STIFF = RUN TO ANTIBIOTICS"**
- Don't think, just start IV antibiotics
- LP and imaging run in parallel, not sequential

**"TB MENINGITIS ≠ BACTERIAL MENINGITIS"**
- Different presentation, CSF, treatment, duration
- Don't confuse with bacterial; TB needs 6 months not 10 days

**"TEMPORAL LOBE = ACYCLOVIR REGARDLESS OF PROOF"**
- HSV encephalitis until proven otherwise
- Start acyclovir immediately; low risk, high benefit

**"DEXAMETHASONE = WITHIN 4 HOURS OR FORGET IT"**
- Critical time window for mortality reduction
- After 4 hours, benefit decreases significantly

**"MENINGOCOCCAL RASH = ISOLATE AND TREAT CONTACTS"**
- Not just patient isolation; public health issue
- Contact prophylaxis: Rifampin for close contacts
`,
      mnemonics: [
        {
          mnemonic: "CSF Pattern Recall: F-V-T-Ga",
          expansion: "Fever-dominated = Bacterial (fast, PMN, low glucose); Viral (lymphocytes, normal glucose); Tuberculosis (subacute, very low glucose, very high protein); Fungal (similar to TB)",
        },
        {
          mnemonic: "Meningitis Management Sequence: ABCD",
          expansion: "Antibiotics immediately; Blood cultures before antibiotics; CSF analysis via LP (if no contraindication); Dexamethasone within 4 hours",
        },
        {
          mnemonic: "TB vs Bacterial Meningitis: SILO",
          expansion: "Subacute (TB) vs acute (bacterial); Immunology (TB=lymphocytes, Bacterial=PMN); Low glucose (TB=very low, Bacterial=lower); Outcome (TB=long treatment, Bacterial=short)",
        },
      ],
      keyPoints: [
        "Core mantra: Start antibiotics within 1 hour of suspected meningitis; mortality increases ~5% per hour delay",
        "Empiric regimen: Ceftriaxone + Vancomycin ± Ampicillin (based on age/immunity); add ATT if TB suspected",
        "Dexamethasone: Give within 4 hours of first antibiotic; improves mortality, hearing outcomes, neurological sequelae",
        "TB meningitis: 6-month treatment minimum (RIPE × 2 months + IP × 4 months); always include corticosteroids",
        "HSV encephalitis: Give acyclovir empirically for ANY encephalitis features; temporal lobe findings = HSV-1 pathognomonic",
        "CSF pattern recognition: Bacterial (PMN, very high protein, low glucose), Viral (lymphocytes, normal glucose), TB (lymphocytes, very low glucose)",
        "JEV endemic: Consider in summer/monsoon encephalitis cases in UP, Bihar, Assam; high mortality with brainstem involvement",
        "Post-meningitis sequelae: Screen for hearing loss, cognitive impairment, seizure disorder; rehabilitation important",
      ],
      textbookRefs: [
        { title: "Harrisons Principles of Internal Medicine", chapter: "Active Recall - Meningitis Key Facts", edition: "21st" },
        { title: "API Textbook of Medicine", chapter: "Rapid Reference - CNS Infections", edition: "11th" },
        { title: "Davidsons Principles and Practice of Medicine", chapter: "Self-Assessment Questions on Meningitis", edition: "23rd" },
      ],
    },
  ],
} as const;

export default medicinePart11Lessons;
