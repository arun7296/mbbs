import type { TopicLessons } from "./content-loader";

export const medicineLessonsPart18: TopicLessons[] = [
  {
    topicCode: "IM-MOD-10-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "poisoning-layer-1-foundation",
        title: "Poisoning & Overdose - Foundation",
        estimatedMinutes: 20,
        summary: "General approach to poisoning, common poisons in India, epidemiology, and classification of toxic agents.",
        contentMd: `# Poisoning & Overdose - Foundation

## Epidemiology in India

### Burden of Disease
- **Annual poisoning deaths**: 10,000-40,000 in India (varies by region)
- **Intentional vs Accidental**: Varies by region; organophosphorus dominance in rural areas
- **Gender**: More common in females (30-40% of cases) due to agrochemical exposure
- **Age**: 15-40 years peak; agricultural workers at highest occupational risk
- **Seasonality**: Higher in agricultural seasons (June-October)

### Common Poisons in India
1. **Organophosphorus (OP) compounds**: 30-40% of cases in rural India
   - Pesticides used in agriculture: malathion, parathion, monocrotophos
   - Most common cause of acute poisoning deaths in India

2. **Aluminum phosphide**: 10-20% of poisoning cases
   - Used as rodenticide in agriculture
   - Increasingly common in North and Central India
   - High mortality (mortality rate 40-100%)

3. **Paracetamol (Acetaminophen)**: Common overdose in urban settings
   - Over-the-counter availability
   - Combination tablets (paracetamol + aspirin + caffeine)
   - Accidental overdose more common than intentional

4. **Corrosive substances**: 5-10% of poisoning cases
   - Acids: HCl (battery acid), H2SO4 (drain cleaners)
   - Alkalis: NaOH, KOH (oven cleaners), Bleach (hypochlorite)

5. **Opioid overdose**: Increasing with pharmaceutical availability
   - Heroin use in urban areas
   - Pharmaceutical opioids (codeine, tramadol, morphine)

6. **Others**: Oleander, strychnine, anticholinergics, carbamates

## Classification of Poisons

### By Chemical Nature
- **Heavy metals**: Arsenic, mercury, lead, iron
- **Organic compounds**: Pesticides, medications
- **Inorganic compounds**: Corrosives, cyanide, strychnine
- **Biological toxins**: Plant toxins, snake venom

### By Route of Exposure
- **Ingestion**: Most common (>70%)
- **Inhalation**: Gas inhalation, OP spraying
- **Dermal**: Occupational exposure, pesticide spraying
- **Parenteral**: IV drug use, injected medications

### By Mechanism of Toxicity
- **Enzyme inhibitors**: OP compounds (acetylcholinesterase)
- **Receptor antagonists/agonists**: Antihistamines, anticholinergics
- **Metabolic poisons**: Cyanide (cytochrome oxidase), methanol
- **Hepatotoxins**: Paracetamol, mushroom toxins
- **Nephrotoxins**: Ethylene glycol, heavy metals
- **Neurotoxins**: Strychnine, organophosphorus

## General Approach to Poisoning

### Initial Assessment
1. **History**: Time of ingestion, quantity, substance identity, co-ingested agents
2. **Vital signs**: HR, BP, RR, temperature, oxygen saturation
3. **Physical examination**:
   - Toxidrome identification (see Layer 2-3)
   - Pupil size, skin color, odor on breath
   - GI symptoms, urinary retention, fasciculations

### Severity Scoring
- **Mild**: Symptoms without organ dysfunction
- **Moderate**: Symptoms with single organ involvement
- **Severe**: Multi-organ involvement, life-threatening

### Management Principles (General)
1. **Stabilization**: ABCs first (Airway, Breathing, Circulation)
2. **Decontamination**: Skin, GI tract (if appropriate)
3. **Antidote administration**: If available and indicated
4. **Enhanced elimination**: Dialysis, forced alkaline urine
5. **Supportive care**: ICU monitoring, management of complications

## Indian Poison Control Centers
- **National Poisons Information Centre**: All India Institute of Medical Sciences (AIIMS), Delhi
- **Regional centers**: Available in major cities
- **Hotline availability**: 24/7 in most states
- **Role**: Identification, management guidance, data collection

## Key Differences from Western Countries
- **Organophosphorus dominance**: 30-40% vs <5% in developed countries
- **Agricultural exposure**: Occupational poisoning common
- **Aluminum phosphide**: Geographic variation in toxicity data
- **Limited ICU beds**: Impact on case fatality rates
- **Delay in diagnosis**: Geographic isolation in rural areas
`,
        mnemonics: [
          {
            text: "ABCDEF of Poisoning = Airway, Breathing, Circulation, Decontamination, Elimination, Flumazenil (if needed)",
            explanation: "Systematic approach to initial management of poisoned patients"
          },
          {
            text: "Common Indian Poisons = OP > AP > Paracetamol > Corrosives > Opioids",
            explanation: "Relative frequency of poisoning types in India (OP=organophosphorus, AP=aluminum phosphide)"
          }
        ],
        keyPoints: [
          "Organophosphorus poisoning is the most common acute poisoning in rural India (30-40% of cases)",
          "Aluminum phosphide has mortality rate of 40-100% with no specific antidote",
          "Paracetamol overdose is the most common intentional poisoning in urban India",
          "Corrosive ingestion causes both acute and chronic morbidity",
          "Toxidrome identification is critical for initial management without knowing the specific poison",
          "Agricultural workers are at highest occupational risk in India"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Poisoning & Drug Overdosage", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "Poisoning", edition: "11th" },
          { book: "Davidson's Principles and Practice of Medicine", chapter: "Medical Toxicology", edition: "24th" }
        ]
      },
      {
        layer: 2,
        slug: "poisoning-layer-2-mechanism",
        title: "Poisoning & Overdose - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathophysiology and toxic mechanisms of major poisons encountered in India.",
        contentMd: `# Poisoning & Overdose - Mechanism

## Organophosphorus Poisoning

### Mechanism of Toxicity
- **Target**: Acetylcholinesterase (AChE) enzyme
- **Phosphorylation**: Irreversible inhibition of AChE at neuromuscular junction and CNS
- **Result**: Accumulation of acetylcholine at cholinergic synapses
- **Effect**: Unopposed parasympathomimetic activity (muscarinic + nicotinic)

### Acetylcholinesterase Inhibition Timeline
1. **Immediate**: Phosphorylation occurs within minutes
2. **Spontaneous reactivation**: Half-life of spontaneous reactivation = days to weeks
3. **Aging**: Irreversible "aging" occurs over hours (loss of side chain)
4. **Pralidoxime window**: Must be given before aging occurs (<24-48 hours)

### Muscarinic Effects (Parasympathetic)
- **Pupil**: Miosis (pinpoint pupils)
- **Salivation**: Excessive (bronchial secretions)
- **Lacrimation**: Excessive tearing
- **Bronchospasm**: Bronchial constriction, bronchorrhea
- **Bradycardia**: Vagal stimulation
- **GI**: Diarrhea, vomiting, abdominal cramping
- **Muscle**: Fasciculations (visible muscle twitching)
- **Bladder**: Urinary incontinence

### Nicotinic Effects (Somatic/Sympathetic)
- **Muscle fasciculations**: Early sign (before weakness)
- **Weakness/Paralysis**: Flaccid paralysis of respiratory muscles
- **Tachycardia**: Sympathetic hyperstimulation (later phase)
- **Hypertension**: Sympathomimetic phase
- **Hyperglycemia**: Sympathetic stress response

### CNS Effects
- **Anxiety, restlessness**
- **Tremor, headache**
- **Confusion, agitation**
- **Coma, convulsions** (severe cases)
- **Respiratory center depression**: Combination of central and peripheral effects

## Aluminum Phosphide Poisoning

### Toxicology
- **Formulation**: Solid pellets (56% Al-phosphide) with inert materials
- **Activation**: Reacts with moisture (stomach acid) to release phosphine gas (PH3)
- **Primary toxin**: Phosphine gas (highly reactive free radical)

### Mechanism of Toxicity
- **Mitochondrial damage**: Phosphine inhibits cytochrome c oxidase complex
- **Cellular energy failure**: Impaired ATP synthesis
- **Free radical generation**: Oxidative stress and lipid peroxidation
- **Organ dysfunction**: Multi-organ failure, especially cardiac and hepatic

### Pathophysiology
- **Cardiovascular**: Myocardial depression, arrhythmias, cardiogenic shock
- **Respiratory**: Pulmonary edema, ARDS (acute respiratory distress syndrome)
- **Hepatic**: Hepatocellular necrosis, cirrhosis, fulminant hepatic failure
- **Renal**: Acute tubular necrosis (ATN), acute kidney injury (AKI)
- **Metabolic**: Severe metabolic acidosis, shock
- **CNS**: Encephalopathy

### Why No Antidote?
- Phosphine gas dissipates rapidly
- No specific chelating agent or receptor antagonist
- Systemic toxicity already established by time symptoms appear
- Management is purely supportive

## Paracetamol (Acetaminophen) Overdose

### Phase 1: GI Absorption (0-24 hours)
- **Absorption**: Complete by 2-4 hours
- **Peak serum level**: 2 hours
- **GI symptoms**: Nausea, vomiting, abdominal pain (mild)
- **Liver**: Minimal injury; patient appears well

### Phase 2: Latent Phase (24-72 hours)
- **Hepatic metabolism**: Continued N-acetylbenzoquinone imine (NAPQI) formation
- **Glutathione depletion**: Stores exhausted
- **RUQ pain**: Right upper quadrant tenderness develops
- **Liver enzymes rise**: ALT/AST may reach thousands
- **Coagulation**: INR/PT begin to rise
- **Clinical appearance**: Deceptively well, but severe liver damage ongoing

### Phase 3: Hepatotoxic Phase (72-96 hours)
- **Maximal liver necrosis**: Peak hepatocellular damage
- **Jaundice**: Develops (bilirubin elevation)
- **Encephalopathy**: Hepatic encephalopathy (confusion, stupor, coma)
- **Coagulopathy**: INR >4 indicates severe hepatic failure
- **Renal failure**: Secondary to hypotension, hepatorenal syndrome
- **Multi-organ failure**: Pulmonary edema, cardiovascular collapse

### Phase 4: Recovery or Chronic Phase (>4-5 days)
- **With treatment (NAC)**: Recovery common if given in time
- **Without treatment**: High mortality (>10% if INR >3, >50% if INR >6)
- **Chronic sequelae**: Cirrhosis, chronic hepatic failure (rare if early NAC)

### Rumack-Matthew Nomogram
- Plots plasma paracetamol concentration vs hours post-ingestion
- **Therapeutic range**: <10 micrograms/mL
- **Toxicity threshold**: 200 micrograms/mL at 4 hours
- **Nomogram used**: To determine if patient requires antidote (NAC)
- **Risk categories**: High risk (toxic), medium risk (probable), low risk (non-toxic)

### NAPQI Metabolism
- **Normal metabolism**: Glucuronidation (70%), sulfation (20%), CYP2E1 oxidation (10%)
- **With overdose**: Glucuronidation/sulfation saturated; excessive CYP2E1 pathway
- **NAPQI formation**: Toxic metabolite binds to glutathione
- **Glutathione depletion**: With overdose, glutathione stores exhausted
- **Hepatocellular binding**: NAPQI binds directly to hepatocyte proteins
- **Hepatocyte death**: Apoptosis and necrosis

## Corrosive Ingestion

### Acid Ingestion (HCl, H2SO4)
- **Coagulative necrosis**: Protein precipitation, eschar formation
- **Depth**: Injury limited to mucosa (less penetrating)
- **Stomach involvement**: Common due to pooling of acid
- **Perforation risk**: 10-40% of cases
- **Late strictures**: Esophageal strictures (common in 2-4 weeks)

### Alkali Ingestion (NaOH, KOH, Bleach)
- **Liquefactive necrosis**: Saponification of fats, collagen destruction
- **Depth**: Penetrating injury (full thickness possible)
- **Small bowel**: More commonly affected than stomach
- **Perforation**: Higher risk than acid (20-40%)
- **Stricture formation**: Both esophageal and gastric

### Pathophysiology
- **Immediate**: Mucosal burn, edema, hemorrhage
- **Hours 1-3**: Full-thickness burns develop
- **Days 3-7**: Eschar sloughing, perforation risk
- **Weeks 2-8**: Scarring and stricture formation

## Opioid Overdose

### Mechanism
- **Receptor**: Mu (mu) opioid receptor agonism
- **CNS depression**: Respiratory center depression (medullary)
- **Brainstem depression**: Diminished CO2 responsiveness
- **Peripheral**: Histamine release (flushing, urticaria)

### Toxidrome
- **Classic triad**: Miosis (pinpoint pupils), respiratory depression, coma
- **Respiratory depression**: Most dangerous; leads to hypoxemia, hypercapnia
- **GI**: Nausea, vomiting, constipation
- **Urinary**: Urinary retention possible

### Timeline
- **IV heroin**: Onset <5 minutes, peak 20 minutes
- **Oral opioids**: Onset 30-60 minutes, variable peak
- **Extended-release**: Delayed onset, prolonged action
- **Recovery with naloxone**: 30-90 minutes (short half-life of naloxone)
- **Re-overdose risk**: If naloxone wears off before opioid (re-dosing needed)

## Other Important Toxidromes

### Anticholinergic Toxidrome
- **Mechanism**: Blockade of muscarinic acetylcholine receptors
- **Classic**: "Hot as a hare, dry as a bone, red as a beet, mad as a hatter"
- **Signs**: Mydriasis, tachycardia, hyperthermia, dry skin, agitation, confusion
- **Agents**: Atropine, anticholinergic medications, antihistamines

### Serotonin Syndrome
- **Mechanism**: Excessive serotonergic activity (CNS and peripheral)
- **Agents**: SSRIs, MAOIs, tramadol, linezolid
- **Classic triad**: Hyperthermia, hyperreflexia/clonus, behavioral changes
- **Severity**: Mild tremor/tachycardia to severe hyperthermia/DIC

### Sympathomimetic Toxidrome
- **Mechanism**: Alpha and beta adrenergic agonism
- **Signs**: Tachycardia, hypertension, hyperthermia, tremor, agitation
- **Agents**: Amphetamines, cocaine, ephedrine, decongestants
`,
        mnemonics: [
          {
            text: "SLUDGE (OP poisoning) = Salivation, Lacrimation, Urination, Defecation, GI upset, Emesis",
            explanation: "Muscarinic effects of organophosphorus poisoning (cholinergic toxidrome)"
          },
          {
            text: "Paracetamol phases: Phase 1=Well (0-24h), Phase 2=Deceptive (24-72h), Phase 3=Hepatic (72-96h), Phase 4=Recovery (>4d)",
            explanation: "Timeline of paracetamol toxicity progression and when antidote is effective"
          },
          {
            text: "Al-Phosphide toxin = Phosphine gas to Free radicals to Mitochondrial failure to No antidote",
            explanation: "Mechanism explaining why aluminum phosphide has no specific antidote"
          },
          {
            text: "NAPQI = N-acetylbenzoquinone imine; Glutathione depleted = Hepatocyte death",
            explanation: "Key mechanism of paracetamol hepatotoxicity when overdosed"
          }
        ],
        keyPoints: [
          "Organophosphorus: Acetylcholinesterase inhibition causes Acetylcholine accumulation causing Cholinergic crisis",
          "Pralidoxime window: Must be given <24-48 hours before irreversible aging occurs",
          "Aluminum phosphide releases phosphine gas which causes mitochondrial cytochrome oxidase inhibition and multi-organ failure",
          "Paracetamol toxicity is dose-dependent and follows 4 phases; Phase 2 (24-72h) is deceptively well despite severe liver damage",
          "Rumack-Matthew nomogram uses 4-hour serum level to predict hepatotoxicity risk",
          "Corrosive ingestion: Acids cause coagulative (limited) necrosis; Alkalis cause liquefactive (deep) necrosis",
          "Opioid overdose triad: Miosis, respiratory depression, coma; respiratory depression is the primary killer",
          "Naloxone has short half-life (30-90 min) requiring repeated dosing for long-acting opioids",
          "Toxidromes are clinical patterns that help identify poison class without specific identification"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Poisoning & Drug Overdosage", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "Poisoning", edition: "11th" },
          { book: "Davidson's Principles and Practice of Medicine", chapter: "Medical Toxicology", edition: "24th" }
        ]
      },
      {
        layer: 3,
        slug: "poisoning-layer-3-clinical",
        title: "Poisoning & Overdose - Clinical",
        estimatedMinutes: 25,
        summary: "Clinical presentation, toxidromes, antidotes, and management strategies for poisoning.",
        contentMd: `# Poisoning & Overdose - Clinical

## Toxidrome Recognition

### Cholinergic Toxidrome (OP, Carbamates)
**Presentation: SLUDGE + Muscle Fasciculations**
- **Salivation**: Excessive drooling, bronchial secretions
- **Lacrimation**: Excessive tears
- **Urination**: Incontinence, frequent urination
- **Defecation**: Diarrhea, abdominal cramping
- **GI upset**: Nausea, vomiting, abdominal pain
- **Emesis**: Vomiting
- **Muscle fasciculations**: Visible muscle twitching (pathognomonic for OP)
- **Miosis**: Pinpoint pupils
- **Bradycardia**: Initial slowing of heart rate
- **Respiratory depression**: From central effect + neuromuscular weakness
- **Coma, seizures**: In severe cases

**Severity Scoring (Peradeniya Scale for OP)**
- **Mild**: Salivation, lacrimation, miosis, no systemic effects
- **Moderate**: SLUDGE + respiratory symptoms, abnormal vitals
- **Severe**: Coma, seizures, severe respiratory depression, hypotension

### Anticholinergic Toxidrome (Antihistamines, Atropine, TCA)
**Presentation: "Hot, Dry, Red, Mad"**
- **Mydriasis**: Dilated pupils (opposite of cholinergic)
- **Tachycardia**: Increased heart rate
- **Hyperthermia**: High fever
- **Dry skin/mucous**: Anhidrosis (no sweating)
- **Red face**: Flushed appearance
- **Agitation, confusion**: Altered mental status
- **Hallucinations**: Visual hallucinations
- **Urinary retention**: Cannot pass urine
- **Seizures**: Rare but possible
- **Arrhythmias**: QT prolongation possible

### Sympathomimetic Toxidrome (Amphetamines, Cocaine, Decongestants)
**Presentation: Hypertension, Tachycardia, Hyperthermia**
- **Hypertension**: Elevated BP
- **Tachycardia**: Fast heart rate
- **Hyperthermia**: Elevated temperature
- **Tremor**: Fine tremor
- **Diaphoresis**: Excessive sweating (opposite of anticholinergic)
- **Agitation, anxiety**: Behavioral changes
- **Seizures**: In severe overdose
- **Myocardial infarction**: Can occur even in young people
- **Stroke**: Hypertensive emergency possible

### Opioid Toxidrome
**Classic Triad: Miosis, Respiratory Depression, Coma**
- **Pinpoint pupils (Miosis)**: Pathognomonic when present
- **Respiratory depression**: Bradypnea, shallow breathing (most dangerous)
- **CNS depression**: Coma, unresponsiveness
- **GI**: Nausea, vomiting, constipation
- **Pulmonary edema**: Cardiogenic or non-cardiogenic (heroin)
- **Hypoxemia**: From respiratory depression
- **Metabolic acidosis**: Lactic acidosis from hypoxia

### Serotonin Syndrome Toxidrome
**Classic Triad: Hyperthermia, Hyperreflexia/Clonus, Behavioral Changes**
- **Hyperthermia**: Fever (can be severe, >40 degrees C)
- **Hyperreflexia**: Increased deep tendon reflexes
- **Clonus**: Spontaneous or inducible (shivering, tremor)
- **Behavioral**: Confusion, agitation, restlessness
- **GI**: Diarrhea, nausea, vomiting
- **Neuromuscular**: Tremor, muscle rigidity
- **Autonomic**: Tachycardia, hypertension, diaphoresis
- **Severity**: Ranges from mild agitation to life-threatening hyperthermia/DIC

## Antidotes and Management

### Antidote Quick Reference Table

| Poison | Antidote | Dose | Route | Timing |
|--------|----------|------|-------|--------|
| **Organophosphorus** | Atropine | 0.5-1 mg IV, repeat q5-10 min until dry | IV | Immediate |
| | Pralidoxime (2-PAM) | 1-2 g IV over 5-30 min, repeat q30 min-6h | IV | <24-48h |
| **Opioids** | Naloxone | 0.4-2 mg IV, IM, or IN; repeat q2-3 min | IV/IM/IN | Immediate |
| **Paracetamol** | N-acetylcysteine (NAC) | 150 mg/kg over 15 min, then 50 mg/kg/4h, then 100 mg/kg/16h | IV | <8-10h (best) |
| **Cyanide** | Nitrite + Thiosulfate | 3% sodium nitrite 5-10 mL IV, then 25% thiosulfate 50 mL IV | IV | Immediate |
| **Methanol/Ethylene Glycol** | Fomepizole or Ethanol | Fomepizole 15 mg/kg IV | IV | Immediate |
| **Anticholinergic** | Physostigmine | 1-2 mg IV over 1 min, repeat q10-15 min | IV | As needed |
| **Iron** | Deferoxamine | 5 mg/kg IV or IM; max 15 mg/kg/24h | IV/IM | Immediate |
| **Beta-blocker** | Glucagon | 5-10 mg IV, then 1-5 mg/h infusion | IV | Immediate |
| **Tricyclic antidepressant** | Sodium bicarbonate | 1-2 mEq/kg IV bolus; maintain pH 7.45-7.50 | IV | Immediate |
| **Aluminum Phosphide** | **NONE** | Supportive care only | — | — |

### Organophosphorus Poisoning Management

**Atropine Protocol:**
- **Goal**: Drying of secretions (atropinization)
- **Endpoint**: When salivation/bronchial secretions stop
- **Dosing**: 0.5-1 mg IV q5-10 min until atropinization achieved
- **Maintenance**: Then 0.5-2 mg IV q10-30 min as needed
- **Total dose**: Can be very high (100s of mg in severe cases)
- **Signs of atropinization**:
  - Salivation stops
  - Heart rate normalizes (or increases)
  - Pupils dilate slightly
- **Warning**: Atropine does NOT reverse muscle fasciculations/weakness; it only treats parasympathomimetic effects

**Pralidoxime (2-PAM) Protocol:**
- **Reactivates** acetylcholinesterase (before aging occurs)
- **Loading dose**: 1-2 g IV over 5-30 minutes
- **Repeat**: q30 min to 6 hourly
- **Timing is critical**: Most effective <24 hours; may still help <48 hours
- **Does NOT cross BBB**: Ineffective for CNS effects
- **Used with atropine**: Both agents together give best results
- **Overdose concern**: Can cause weakness if given without proper atropinization

**Supportive Care:**
- **Airway management**: Intubation if respiratory depression
- **Oxygen**: Maintain SpO2 >94%
- **Seizure control**: Lorazepam or diazepam
- **GI decontamination**: Gastric lavage (if <1 hour), activated charcoal
- **Monitor**: ECG, vital signs, muscle strength

### Paracetamol Overdose Management

**N-Acetylcysteine (NAC) Protocol:**
- **Loading dose**: 150 mg/kg over 15 minutes
- **Second dose**: 50 mg/kg over 4 hours
- **Third dose**: 100 mg/kg over 16 hours
- **Total**: 300 mg/kg over 20.25 hours
- **Timing**:
  - Before 8 hours: 99% effective
  - 8-16 hours: Still effective; use Rumack-Matthew nomogram
  - >16 hours: Still give (can prevent hepatic failure even late)
- **Monitoring**: Liver function tests (ALT, AST, bilirubin, INR)
- **Endpoint**: Normalization of INR; resolution of jaundice

**Rumack-Matthew Nomogram Use:**
- **4-hour level**: Most important prognostic point
- **>200 micrograms/mL at 4h**: High risk (treat)
- **>100 micrograms/mL at 4h but <200**: Medium risk (treat)
- **<50 micrograms/mL at 4h**: Low risk (no treatment if asymptomatic)
- **After 12h**: No longer used (treat all symptomatic patients)

**Supportive Care:**
- **Monitoring**: Liver enzymes (ALT/AST), bilirubin, INR/PT, creatinine, glucose
- **FFP/Platelets**: For coagulopathy if INR >4 (only for bleeding)
- **Hypoglycemia**: IV dextrose as needed
- **Encephalopathy**: Lactulose, rifaxomicin for hepatic encephalopathy
- **Dialysis**: For renal failure
- **Transplantation**: Consider if fulminant hepatic failure (King's College criteria)

### Opioid Overdose Management

**Naloxone Protocol:**
- **IV dose**: 0.4-2 mg IV push (repeat q2-3 min if needed)
- **IM/SC dose**: 1-2 mg IM or SC (slower onset)
- **Intranasal**: 4 mg IN spray (approved formulation)
- **Goal**: Reversal of respiratory depression, restoration of consciousness
- **Caution**: Short half-life (30-90 min) causes re-dosing needed for long-acting opioids
- **Risk**: Acute withdrawal symptoms (tachycardia, anxiety, pain, agitation)
- **Antagonist**: Complete opioid receptor antagonist

**Supportive Care:**
- **Airway management**: Intubation if severe respiratory depression
- **Oxygen**: Maintain SpO2 >94%
- **Positive pressure ventilation**: BVM or mechanical ventilation
- **Monitoring**: Continuous pulse oximetry, cardiac monitoring
- **IV access**: For additional medications

### Corrosive Ingestion Management

**Acute Phase (First Hours):**
- **Do NOT induce vomiting**: Will cause re-injury
- **Do NOT perform gastric lavage**: Increases perforation risk
- **Dilution**: Debate ongoing; small sips of water/milk OK if alert and swallowing normal
- **NPO**: Nothing by mouth until endoscopy evaluation
- **Endoscopy**: Within 24 hours to assess depth of injury
- **Emergency surgery**: For perforation signs (peritonitis, free air)

**Antidote:**
- **Steroids**: Controversial for acid; may reduce stricture formation with alkali (no clear benefit proven)
- **If given**: Usually short course of methylprednisolone 1 g IV daily x 3 days

**Complications Management:**
- **Airway edema**: May need intubation/tracheostomy
- **Perforation**: Surgical intervention
- **Stricture formation**: Long-term endoscopic dilation or surgical intervention

## Gastric Decontamination

### Activated Charcoal
- **Mechanism**: Absorbs poisons; prevents GI absorption
- **Dose**: 25-50 g PO (1 g per kg body weight)
- **Timing**: Most effective <1-2 hours
- **Effectiveness**: Works for most organic compounds (NOT metals, corrosives, hydrocarbons)
- **Limitations**: Cannot be given if:
  - Corrosive ingestion
  - Hydrocarbon ingestion
  - Unable to protect airway
  - Ileus present

### Gastric Lavage
- **Technique**: NG tube insertion, stomach washout with saline
- **Timing**: <1 hour ideal; <4 hours possible
- **Risk**: Aspiration, esophageal perforation with corrosives
- **Avoided**: In corrosive ingestion, unprotected airway

### Whole Bowel Irrigation
- **Agent**: Polyethylene glycol (PEG) electrolyte solution
- **Dose**: 1.5-2 L/hour until clear rectal effluent
- **Indications**:
  - Iron overdose
  - Long-acting medications
  - Extended-release preparations
- **Contraindication**: Ileus, bowel perforation

## Enhanced Elimination

### Hemodialysis
- **Indications**:
  - Paracetamol (late presentation)
  - Methanol, ethylene glycol
  - Salicylates
  - Lithium
- **Mechanism**: Removes water-soluble poisons via dialytic clearance

### Forced Alkaline Urine
- **Target**: Urine pH 7.5-8.5
- **Method**: IV sodium bicarbonate, adequate hydration
- **Indications**:
  - Salicylates (aspirin)
  - Tricyclic antidepressants (TCA)
  - Barbiturates
- **Mechanism**: Ion trapping; acidic drugs become ionized at higher pH, less reabsorbed

### Activated Charcoal Hemoperfusion
- **Method**: Blood passes through activated charcoal column
- **Indications**: Some organophosphates (less common now)

## Monitoring in Poisoning Cases

### Initial Investigations
- **Routine**: CBC, blood glucose, liver function (ALT, AST, ALP, bilirubin), renal function (creatinine, BUN)
- **Coagulation**: INR/PT (important for paracetamol)
- **ABG**: pH, pCO2, pO2, lactate
- **Electrolytes**: Sodium, potassium, calcium, magnesium
- **Specific levels**: If available (paracetamol, salicylate, ethanol, etc.)

### Ongoing Monitoring
- **Vital signs**: q15 min initially, then q30-60 min
- **Urine output**: Monitor for renal failure
- **Neurological**: Consciousness, pupil size, reflexes
- **Cardiac**: ECG, continuous monitoring
- **Respiratory**: RR, SpO2, work of breathing
`,
        mnemonics: [
          {
            text: "Cholinergic toxidrome = SLUDGE + Fasciculations + Miosis + Respiratory depression",
            explanation: "Key features of organophosphorus poisoning (muscarinic and nicotinic effects)"
          },
          {
            text: "Hot, Dry, Red, Mad = Anticholinergic (opposite of cholinergic/SLUDGE)",
            explanation: "Classic anticholinergic presentation (atropine overdose, antihistamines)"
          },
          {
            text: "Atropine = Parasympathetic blocker (dries secretions); Pralidoxime = Reactivates AChE (must be <24-48h)",
            explanation: "Two agents for OP poisoning with different mechanisms and timing windows"
          },
          {
            text: "Paracetamol NAC = 150-50-100 over 20h (loading-maintenance-extended dose protocol)",
            explanation: "The 3-dose NAC regimen for paracetamol overdose"
          },
          {
            text: "Naloxone = Opioid antagonist, short half-life (30-90 min), needs repeat dosing",
            explanation: "Key characteristics of naloxone for opioid overdose reversal"
          }
        ],
        keyPoints: [
          "Toxidrome identification allows management of poisoning without knowing specific agent",
          "Cholinergic toxidrome (SLUDGE + fasciculations) is pathognomonic for organophosphorus poisoning",
          "Atropine treats parasympathomimetic effects; pralidoxime reactivates AChE (critical timing <24-48h)",
          "Paracetamol overdose has deceptive latent phase (24-72h) when patient appears well but severe liver damage occurs",
          "NAC must be given before 8 hours for maximum benefit but remains effective even after 16 hours in paracetamol overdose",
          "Naloxone has short half-life requiring repeat dosing; respiratory support is primary management",
          "Aluminum phosphide has no antidote; management is purely supportive with high mortality",
          "Activated charcoal is effective for organic compounds but not for metals, corrosives, or hydrocarbons",
          "Gastric lavage is contraindicated in corrosive ingestion (risk of perforation)",
          "Whole bowel irrigation is useful for iron and extended-release medications"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Poisoning & Drug Overdosage", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "Poisoning", edition: "11th" },
          { book: "Davidson's Principles and Practice of Medicine", chapter: "Medical Toxicology", edition: "24th" }
        ]
      },
      {
        layer: 4,
        slug: "poisoning-layer-4-exam",
        title: "Poisoning & Overdose - Exam",
        estimatedMinutes: 20,
        summary: "Toxidrome recognition, antidote matching, Indian-specific poisoning patterns, and clinical vignettes.",
        contentMd: `# Poisoning & Overdose - Exam Preparation

## High-Yield Toxidrome Recognition Questions

### Clinical Vignette 1: OP Poisoning
**Scenario**: 45-year-old farmer presents with drooling, pinpoint pupils, muscle fasciculations visible on chest, severe diarrhea, and respiratory distress. Oxygen saturation 85%.

**Key Features**:
- Salivation (drooling)
- Miosis (pinpoint pupils)
- Visible muscle fasciculations
- Diarrhea (GI involvement)
- Respiratory distress (cholinergic bronchospasm)

**Diagnosis**: Organophosphorus poisoning (cholinergic toxidrome)

**Management**:
1. Airway: Intubate if needed (suctioning for secretions)
2. Atropine 0.5-1 mg IV q5-10 min until atropinization
3. Pralidoxime 1-2 g IV loading dose
4. Supportive care: Oxygen, seizure prophylaxis

**Exam Focus**: Fasciculations are pathognomonic for OP; atropine timing is critical; pralidoxime window <24-48h

### Clinical Vignette 2: Paracetamol Overdose
**Scenario**: 22-year-old female taken to hospital 2 hours after taking 30 tablets of paracetamol 500 mg each (15g total). She is alert, no abdominal pain, mild nausea. Vitals normal. 4-hour level: 280 micrograms/mL.

**Key Points**:
- Time of ingestion: 2 hours (within treatment window)
- Amount: 15g (60 mg/kg) - well above toxic dose (>7.5g)
- Clinical exam: Minimal symptoms (Phase 1)
- Rumack-Matthew nomogram: 280 at 4 hours TOXIC (>200)

**Management**:
1. NAC loading: 150 mg/kg IV over 15 min
2. NAC maintenance: 50 mg/kg IV over 4h
3. NAC extended: 100 mg/kg IV over 16h
4. Monitor: LFTs, INR/PT, renal function

**Exam Focus**: Deceptive Phase 1 appearance; Rumack-Matthew nomogram interpretation; timing <8h is best

### Clinical Vignette 3: Aluminum Phosphide Poisoning
**Scenario**: 30-year-old male found 6 hours after ingesting rat poison (aluminum phosphide). Now in shock with severe metabolic acidosis (pH 7.1), elevated troponin, hepatic dysfunction, and acute kidney injury. Respiratory distress requiring mechanical ventilation.

**Key Features**:
- Delay to presentation: 6 hours
- Cardiovascular collapse: Shock, elevated troponin
- Multi-organ failure: Liver dysfunction, AKI
- Severe metabolic acidosis
- Respiratory failure

**Diagnosis**: Aluminum phosphide poisoning (mitochondrial toxicity causes multi-organ failure)

**Management**:
1. No specific antidote available
2. ICU care: Mechanical ventilation, vasopressors for shock
3. Dialysis for renal failure
4. Supportive: FFP for coagulopathy, management of metabolic acidosis
5. Poor prognosis if already in shock by 6 hours

**Exam Focus**: No antidote; always fatal if shock develops; mortality 40-100%; supportive care only; recognize early signs

### Clinical Vignette 4: Opioid Overdose
**Scenario**: 28-year-old male found unconscious with pinpoint pupils, respiratory rate 8 breaths/min, SpO2 75%, no response to verbal commands. IV access available.

**Key Features**:
- Consciousness: Unresponsive coma
- Miosis: Pinpoint pupils (pathognomonic when present)
- Respiratory depression: Bradypnea, low SpO2 (most dangerous)

**Management**:
1. Naloxone 2 mg IV push immediately
2. Bag-mask ventilation if needed for SpO2 <90%
3. Repeat naloxone q2-3 min if no response
4. Monitor: Continuous pulse oximetry, cardiac monitoring
5. ICU admission given severity

**Exam Focus**: Respiratory depression is primary killer; miosis + coma + respiratory depression = opioid toxidrome; short naloxone half-life; may need repeat dosing

### Clinical Vignette 5: Corrosive Ingestion
**Scenario**: 5-year-old child accidentally ingests 50 mL of drain cleaner (concentrated sulfuric acid). Now drooling, difficulty swallowing, severe retrosternal pain.

**Management**:
1. Do NOT induce vomiting (will cause re-injury)
2. Do NOT perform gastric lavage (risk of perforation)
3. Small sips of water/milk ONLY if swallowing intact
4. NPO (nothing by mouth)
5. Urgent endoscopy within 24 hours for assessment
6. Watch for signs of perforation (peritonitis, free air on imaging)
7. Emergency surgery if perforation suspected

**Exam Focus**: Contraindications to gastric decontamination in corrosive ingestion; endoscopy timing; complications

## Common Exam Patterns

### Pattern 1: Antidote Matching
**Question**: "Which of the following is the specific antidote for organophosphorus poisoning?"
- **A) Naloxone** - No (opioid antidote)
- **B) Atropine** - YES (blocks muscarinic effects)
- **C) Fomepizole** - No (methanol/ethylene glycol antidote)
- **D) Deferoxamine** - No (iron antidote)

**Why**: Atropine is the primary antidote for cholinergic crisis in OP poisoning

### Pattern 2: Timing Questions
**Question**: "A patient with paracetamol overdose presents 18 hours after ingestion. Should NAC be given?"
- **A) No, too late** - WRONG
- **B) Yes, still indicated** - CORRECT
- **C) Only if INR elevated** - Incomplete

**Why**: NAC is still effective even >16 hours; can prevent hepatic failure; no upper time limit

### Pattern 3: Toxidrome Identification
**Question**: "Patient with mydriasis, tachycardia, high fever, dry mouth, agitation, and retained urine. What is the toxidrome?"
- **A) Cholinergic** - No (opposite findings)
- **B) Anticholinergic** - YES (hot, dry, red, mad)
- **C) Opioid** - No (would have miosis, respiratory depression)
- **D) Sympathomimetic** - No (would have sweating, not dry skin)

**Why**: Classic anticholinergic findings; mnemonic "hot, dry, red, mad"

### Pattern 4: Indian-Specific Poisoning
**Question**: "Which is the most common cause of acute poisoning death in rural India?"
- **A) Paracetamol** - No (urban)
- **B) Corrosives** - No (5-10% of cases)
- **C) Organophosphorus** - YES (30-40% in rural India)
- **D) Aluminum phosphide** - No (10-20%, second most common)

**Why**: Pesticide use in agriculture makes OP most common in rural areas

### Pattern 5: Pralidoxime Timing
**Question**: "A farmer with OP poisoning presents 72 hours after exposure. Is pralidoxime still indicated?"
- **A) Yes, always useful** - WRONG
- **B) No, window has closed** - CORRECT
- **C) Only with atropine** - Incomplete
- **D) Only if serum level available** - Wrong

**Why**: Pralidoxime works only before "aging" (24-48h); by 72h, aging has occurred

## Indian-Specific Clinical Patterns

### Agricultural Season OP Poisoning
- **Timing**: June-October (harvest season)
- **Presentation**: Entire families affected (occupational/accidental)
- **Severity**: Variable; depends on exposure dose and time to treatment
- **Management**: May need high-dose atropine (100s of mg); limited ICU beds in rural areas

### Aluminum Phosphide in North/Central India
- **Incidence increasing**: More common in AP, MP, Rajasthan
- **Presentation**: Often delayed (6+ hours), already in shock
- **Prognosis**: Poor if shock present; mortality 40-100%
- **Management**: Purely supportive; no antidote available

### Paracetamol Overdose in Urban Areas
- **Pattern**: Often intentional (self-harm)
- **Timing**: May present very late (days after ingestion)
- **Challenges**: May miss window for NAC; INR already elevated
- **Management**: Still give NAC even if late; monitor for hepatic encephalopathy

## Drug-Specific High-Yield Facts

### Organophosphorus
- Mechanism: AChE inhibition
- Toxidrome: Cholinergic (SLUDGE + fasciculations)
- Antidote: Atropine (muscarinic blocker) + Pralidoxime (AChE reactivator)
- Pralidoxime window: <24-48 hours
- Highest mortality in India

### Aluminum Phosphide
- Mechanism: Phosphine gas causes Mitochondrial toxicity
- Toxidrome: Multi-organ failure (shock, respiratory failure, liver failure)
- Antidote: NONE
- Mortality: 40-100%
- Cannot be saved if shock present

### Paracetamol
- Dose: >7.5g toxic
- Phases: Phase 1 (0-24h, well), Phase 2 (24-72h, deceptive), Phase 3 (72-96h, hepatic)
- Nomogram: Rumack-Matthew at 4 hours
- Antidote: NAC (150-50-100 protocol)
- Timing: <8h best; still effective >16h

### Opioids
- Triad: Miosis, respiratory depression, coma
- Antidote: Naloxone (antagonist, not agonist)
- Half-life: Naloxone 30-90 min (short)
- Risk: Re-overdose if naloxone wears off before opioid

### Corrosives
- Acids: Coagulative (limited) necrosis
- Alkalis: Liquefactive (deep) necrosis
- Management: NO gastric lavage or induced vomiting
- Complications: Strictures, perforation

## Quick Reference: "When to Suspect" Each Poison

| Clinical Finding | Suspected Poison | Next Step |
|------------------|------------------|-----------|
| Muscle fasciculations + miosis + diarrhea | Organophosphorus | Atropine + Pralidoxime |
| "Hot, dry, red, mad" | Anticholinergic | Physostigmine (if severe) |
| Pinpoint pupils + respiratory depression | Opioids | Naloxone |
| Fever + hyperreflexia + diarrhea (especially with SSRIs/tramadol) | Serotonin syndrome | Cyproheptadine, cooling |
| Metabolic acidosis + visual symptoms + vomiting | Methanol | Fomepizole + dialysis |
| High fever + muscle rigidity + autonomic instability | Neuroleptic malignant syndrome (antipsychotics) | Dantrolene + supportive |
| Retrosternal pain + drooling + dysphagia | Corrosive ingestion | NPO, endoscopy |
| Multi-organ failure + shock (no other cause) | Aluminum phosphide | Supportive only; poor prognosis |
| Hepatotoxicity + delay in presentation | Paracetamol | NAC even if delayed; monitor INR |
`,
        mnemonics: [
          {
            text: "NEXT-pattern MCQ for poisoning exams = Never miss OP fasciculations, naloxone in opioids, X-ray for free air (corrosives), timely pralidoxime (<48h)",
            explanation: "High-yield exam patterns for poisoning questions"
          },
          {
            text: "Pralidoxime window = 24-48 hours (before aging); NAC window = no upper limit (still works >16h)",
            explanation: "Critical timing differences between two major antidotes"
          },
          {
            text: "Indian poisons by frequency = OP (30-40%) > AP (10-20%) > Paracetamol > Corrosives > Opioids",
            explanation: "Epidemiology affecting exam question patterns in India"
          }
        ],
        keyPoints: [
          "Fasciculations are pathognomonic for organophosphorus poisoning",
          "Pralidoxime must be given within 24-48 hours before irreversible aging occurs",
          "Paracetamol nomogram uses 4-hour level; patient appears well in Phase 1-2 despite severe liver damage",
          "Naloxone has short half-life (30-90 min); requires monitoring for re-overdose",
          "Aluminum phosphide toxicity is almost always fatal if shock develops",
          "Corrosive ingestion: NO gastric lavage or induced vomiting (risk of perforation)",
          "Atropine treats symptoms (muscarinic blockade); pralidoxime treats cause (AChE reactivation)",
          "Toxidrome recognition allows treatment before specific poison identification",
          "Indian-specific high-yield: OP poisoning in rural areas (agricultural), AP in North-Central India",
          "Antidote matching is high-yield exam pattern; know specific antidotes for each toxidrome"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Poisoning & Drug Overdosage", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "Poisoning", edition: "11th" },
          { book: "Davidson's Principles and Practice of Medicine", chapter: "Medical Toxicology", edition: "24th" }
        ]
      },
      {
        layer: 5,
        slug: "poisoning-layer-5-active-recall",
        title: "Poisoning & Overdose - Active Recall",
        estimatedMinutes: 15,
        summary: "Flashcard questions and answers for self-testing on poisoning management.",
        contentMd: `# Poisoning & Overdose - Active Recall

## Flashcard Q&A Set

### Q1: What is the hallmark physical finding in organophosphorus poisoning?
**A**: Visible muscle fasciculations (fine, flickering muscle twitching) caused by nicotinic overstimulation at the neuromuscular junction. This is pathognomonic and distinguishes OP from other cholinergic poisons like physostigmine.

---

### Q2: What is the pralidoxime window and why is it important?
**A**: Pralidoxime (2-PAM) must be given <24-48 hours after OP exposure, before irreversible "aging" occurs. Aging is the loss of the side chain from the phosphorylated AChE, making it impossible to reactivate. After aging, only atropine (which blocks effects) helps, not pralidoxime (which reactivates).

---

### Q3: Differentiate the mechanism of atropine vs pralidoxime in OP poisoning.
**A**:
- **Atropine**: Competitive antagonist at muscarinic acetylcholine receptors causes blockade of parasympathomimetic effects (SLUDGE) but does NOT reverse neuromuscular weakness or muscle fasciculations
- **Pralidoxime**: Directly reactivates acetylcholinesterase enzyme by removing phosphate group causes reversal of BOTH muscarinic and nicotinic effects (including weakness and fasciculations), but only if given before aging

---

### Q4: What are the 4 phases of paracetamol toxicity and when is each phase clinically relevant?
**A**:
1. **Phase 1 (0-24h)**: GI symptoms only; patient appears well; minimal liver injury
2. **Phase 2 (24-72h)**: DECEPTIVE phase; patient still appears well but severe liver damage occurring; liver enzymes rise dramatically
3. **Phase 3 (72-96h)**: Hepatic phase; jaundice develops, encephalopathy, coagulopathy, renal failure
4. **Phase 4 (>4-5 days)**: Recovery (if treated) or chronic sequelae (cirrhosis if untreated)

**Clinical relevance**: NAC given in Phases 1-2 prevents Phase 3-4 complications; Phase 2 is deceptive (appears well).

---

### Q5: Interpret this Rumack-Matthew nomogram result: 4-hour paracetamol level = 250 micrograms/mL. Should NAC be given?
**A**: **YES**, definitely. A 4-hour level of 250 is ABOVE the treatment threshold of 200 micrograms/mL, indicating HIGH RISK for hepatotoxicity. NAC should be started immediately. This patient needs the full 3-dose protocol (150-50-100 mg/kg).

---

### Q6: What is NAPQI and how does paracetamol cause hepatotoxicity with overdose?
**A**: NAPQI (N-acetylbenzoquinone imine) is a toxic metabolite formed via CYP2E1 oxidation of paracetamol. In normal doses, NAPQI is neutralized by glutathione. In overdose:
1. Normal pathways (glucuronidation, sulfation) become saturated
2. Excessive CYP2E1 pathway forms more NAPQI
3. Glutathione stores become depleted
4. Remaining NAPQI binds directly to hepatocyte proteins
5. Hepatocyte apoptosis and necrosis causes liver failure

---

### Q7: Why does aluminum phosphide have such high mortality and why is there no antidote?
**A**: Aluminum phosphide reacts with stomach acid to release phosphine gas (PH3). Phosphine is a highly reactive free radical that:
1. Inhibits mitochondrial cytochrome c oxidase (complex IV)
2. Causes rapid cellular energy depletion
3. Generates massive oxidative stress
4. Results in multi-organ failure (cardiac, hepatic, renal)

There is NO specific antidote because:
- Phosphine gas has dissipated by symptom onset
- The toxicity is mitochondrial (no receptor to block)
- Systemic damage is already established

Management is purely supportive, and mortality is 40-100%, especially if shock has developed.

---

### Q8: What is the classic triad of opioid toxidrome and which finding is most dangerous?
**A**: Classic triad:
1. **Miosis** (pinpoint pupils) - pathognomonic when present
2. **Respiratory depression** (bradypnea, shallow breathing) - **MOST DANGEROUS**
3. **CNS depression** (coma, unresponsiveness) - varies in severity

**Most dangerous**: Respiratory depression because it leads to hypoxemia, hypercapnia, and death if not rapidly reversed with naloxone or mechanical ventilation.

---

### Q9: Why must naloxone be repeated (not just given once) in opioid overdose?
**A**: Naloxone has a SHORT half-life of 30-90 minutes, while many opioids (especially extended-release formulations and heroin) have longer half-lives. Therefore:
1. Naloxone reverses opioid effects for 30-90 minutes
2. When naloxone wears off, opioid effects return
3. Patient may re-overdose if opioid is still in system
4. Repeated dosing (q2-3 minutes) or continuous infusion often needed
5. ICU admission for continuous monitoring is standard

---

### Q10: Differentiate cholinergic toxidrome (OP) from anticholinergic toxidrome (atropine overdose).
**A**:

| Feature | Cholinergic (OP) | Anticholinergic (Atropine) |
|---------|-----------------|--------------------------|
| Pupils | Miosis (pinpoint) | Mydriasis (dilated) |
| Salivation | Excessive | Dry |
| Skin | Wet, diaphoretic | Dry, anhidrotic |
| HR | Bradycardia (early) | Tachycardia |
| GI | Diarrhea, cramping | Constipation |
| Muscles | Fasciculations, weakness | Normal |
| Temperature | Normal | Fever (hyperthermia) |
| Mental status | Confused, seizures | Agitated, hallucinations |
| Mnemonic | SLUDGE + fasciculations | "Hot, dry, red, mad" |

---

### Q11: What is the management algorithm for corrosive ingestion? Include what NOT to do.
**A**:
**What NOT to do**:
- Do NOT induce vomiting (causes re-injury)
- Do NOT perform gastric lavage (risk of perforation)
- Do NOT administer activated charcoal (won't help corrosives)

**What TO do**:
1. Assess airway (may need intubation for edema)
2. NPO (nothing by mouth)
3. Small sips of water/milk only if swallowing intact (debated)
4. Urgent endoscopy <24 hours to assess depth of burn
5. Watch for peritonitis signs (perforation)
6. Emergency surgery if free air on imaging
7. Steroids controversial (may reduce strictures with alkali)
8. Long-term management: Endoscopic dilation or surgery for strictures

---

### Q12: Which 5 poisons are dialyzable (hemodialysis effective) and which are NOT?
**A**:
**Dialyzable poisons**:
1. Paracetamol
2. Methanol
3. Ethylene glycol
4. Salicylates (aspirin)
5. Lithium

**NOT dialyzable** (large molecules or protein-bound):
- Tricyclic antidepressants
- Digoxin
- Doxorubicin
- Most alkaloids
- Aluminum phosphide (already systemic; dialysis doesn't help)

---

### Q13: What are the clinical findings of serotonin syndrome and how does it differ from neuroleptic malignant syndrome (NMS)?
**A**:

| Feature | Serotonin Syndrome | Neuroleptic Malignant Syndrome |
|---------|-------------------|------------------------------|
| Cause | SSRIs, MAOIs, tramadol, linezolid | Antipsychotics (D2 blockers) |
| Onset | Hours to days | Days to weeks |
| Classic triad | Hyperthermia, hyperreflexia, behavioral changes | Hyperthermia, rigidity, autonomic instability |
| Clonus | Present (distinguishing feature) | Absent |
| Reflexes | Hyperactive | Normal to hyperactive |
| Muscle rigidity | Lead-pipe rigidity | Lead-pipe rigidity |
| Treatment | Cyproheptadine (5-HT antagonist), cooling | Dantrolene, bromocriptine |

**Key difference**: **Clonus in serotonin syndrome is the distinguishing feature**; absent in NMS.

---

### Q14: For organophosphorus poisoning, describe the atropine protocol in detail.
**A**:
**Goal**: Achieve atropinization (drying of secretions)

**Atropine dosing**:
- **Loading**: 0.5-1 mg IV bolus
- **Subsequent doses**: Repeat q5-10 minutes until atropinization achieved
- **Maintenance**: 0.5-2 mg IV q10-30 minutes as needed
- **Total doses**: Can reach 100s of mg in severe cases (atropine tolerance develops)

**Endpoints of atropinization**:
1. Salivation and bronchial secretions stop (MOST IMPORTANT)
2. Heart rate normalizes or increases
3. Pupils dilate slightly
4. Skin becomes warm and dry

**Important caveats**:
- Atropine DOES NOT reverse muscle fasciculations or weakness (nicotinic effects)
- Use WITH pralidoxime for complete reversal
- Risk: Tachycardia, mydriasis, confusion with overdose
- Avoid over-treatment; maintain "light" atropinization

---

### Q15: Which poisons cause metabolic acidosis and why?
**A**:
**Poisons causing metabolic acidosis**:
1. **Methanol/Ethylene glycol**: Metabolized to formic acid/glycolic acid
2. **Opioids**: Lactic acidosis from respiratory depression causes hypoxia
3. **Cyanide**: Impaired cellular respiration causes lactic acidosis
4. **Salicylates**: Aspirin itself is acidic; salicylic acid accumulates
5. **Aluminum phosphide**: Mitochondrial failure causes lactic acidosis
6. **Isoniazid**: Metabolic derangement
7. **Formic acid**: Direct acid toxicity

**Mechanism**: Most cause lactic acidosis through impaired cellular respiration or oxidative metabolism.

**Exam question pattern**: See metabolic acidosis without other obvious cause (pneumonia, DKA) causes Think poisoning.

`,
        mnemonics: [
          {
            text: "Atropine vs Pralidoxime = Atropine blocks effects (symptom relief), Pralidoxime reactivates enzyme (cure); Use BOTH for OP",
            explanation: "Conceptual difference between symptomatic vs causative treatment in OP poisoning"
          },
          {
            text: "NAC protocol 150-50-100 = Loading (150mg/kg/15min), Maintenance (50mg/kg/4h), Extended (100mg/kg/16h)",
            explanation: "The three-dose NAC regimen for paracetamol overdose"
          },
          {
            text: "Paracetamol phases BOLD = Phase 1 (Better looking), Phase 2 (Deceptive), Phase 3 (Dying), Phase 4 (Dying or Discharge)",
            explanation: "Memory aid for paracetamol toxicity phases"
          },
          {
            text: "Naloxone = Short-acting (30-90 min) antagonist; Opioid effects return when naloxone wears off",
            explanation: "Why naloxone needs repeated dosing and ICU monitoring"
          }
        ],
        keyPoints: [
          "Muscle fasciculations are pathognomonic for organophosphorus poisoning",
          "Pralidoxime window is <24-48 hours; after aging, only atropine helps",
          "Paracetamol is deceptive: Patient appears well in Phase 2 (24-72h) but severe liver damage is occurring",
          "NAC is effective even >16 hours after paracetamol overdose; no upper time limit",
          "Aluminum phosphide has no antidote and 40-100% mortality",
          "Opioid toxidrome triad: Miosis, respiratory depression, coma (respiratory depression is killer)",
          "Naloxone has 30-90 min half-life; requires repeated dosing and ICU monitoring",
          "Toxidrome recognition (SLUDGE for OP, hot/dry/red/mad for anticholinergic) allows treatment before knowing specific poison",
          "Corrosive ingestion: Contraindicated to give gastric lavage (risk of perforation)",
          "Five dialyzable poisons: Paracetamol, methanol, ethylene glycol, salicylates, lithium"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Poisoning & Drug Overdosage", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "Poisoning", edition: "11th" },
          { book: "Davidson's Principles and Practice of Medicine", chapter: "Medical Toxicology", edition: "24th" }
        ]
      }
    ]
  }
];
