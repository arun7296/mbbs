import type { TopicLessons } from "./content-loader";

export const forensicMedicineLessonsPartXXII: TopicLessons[] = [
  {
    topicCode: "FM-MOD-04-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "infanticide-abortion-layer-1-foundation",
        title: "Infanticide & Abortion - Foundation",
        estimatedMinutes: 25,
        summary: "Introduction to infanticide and abortion from forensic and medico-legal perspective. Understanding definitions, legal framework, and autopsy significance.",
        contentMd: `# Infanticide & Abortion - Foundation

## Definitions & Terminology

### Infanticide
- **Definition**: Willful killing of an infant (usually <1 year old, some definitions <3 years)
- **Methods**: Suffocation, strangulation, drowning, trauma, poisoning, abandonment, exposure
- **Perpetrator**: Usually mother (postpartum psychosis, depression, inadequate support)
- **Intent**: May range from deliberate to negligent care

### Viability & Fetal Life
- **Conception**: Fertilization of ovum (~day 0)
- **Viable fetus**: Usually after 22-24 weeks gestation (some jurisdictions 20 weeks)
- **Quickening**: Fetal movement felt by mother (~16-18 weeks)
- **Abortion**: Termination before viability (~22-24 weeks)
- **Miscarriage/Spontaneous abortion**: Natural loss before viability

### Live birth
- **Definition**: Expulsion of fetus with any sign of life after viability
- **Signs of life**: Heartbeat, respiration, umbilical cord pulsation, movement
- **Legal significance**: Once live birth occurs, child is person; killing is homicide

## Legal Framework (India)

### IPC Provisions on Infanticide
- **IPC Section 301**: Causing death by act endangering life
- **IPC Section 302**: Murder (applicable to infanticide)
- **IPC Section 304**: Culpable homicide (if no premeditation)
- **IPC Section 305**: Causing suicide by instigation

### IPC Provisions on Abortion & Fetal Loss
- **IPC Section 312**: Causing miscarriage (illegal without lawful authority)
- **IPC Section 313**: Causing death of quick unborn child
- **IPC Section 314**: Death caused by act of abortion

### Medical Termination of Pregnancy Act (MTP Act 2002)
- **Legal abortion**: Performed by registered practitioner
- **Indications**:
  - Pregnancy threatens maternal health/life
  - Fetal abnormality likely to result in severe disability
  - Contraceptive failure in married couples
  - Rape/incest victims (with caution for married women)
- **Timeline**: Up to 20 weeks (some conditions up to viability)
- **Recent amendment (2021)**: Extended to 24 weeks for special categories

### Unsafe/Illegal Abortion
- **Criminal act** under IPC Sections 312-314
- **Perpetrator**: Woman undergoing + person inducing
- **Punishment**: Varies (up to 3 years imprisonment, 1000 rupees fine)
- **Common methods**: Crude instruments, herbal concoctions, manual trauma

## Causes of Infanticide

### Mother-Related Factors
- **Postpartum depression/psychosis**: Mental health crisis after birth
- **Socioeconomic pressure**: Poverty, inability to support child
- **Marital problems**: Unwanted/illegitimate child, abandonment by father
- **Lack of support**: No social safety net, family rejection
- **Medical complications**: Severe illness, incapacity

### Child-Related Factors
- **Premature birth**: Not fully developed, perceived weakness
- **Birth defects**: Severe abnormalities
- **Failure to thrive**: Difficulty feeding, medical problems

### Social & Cultural Factors
- **Gender bias**: Female infanticide (sex selection)
- **Caste/religious factors**: Social stigma, family honor
- **Superstitions**: Belief in curse or bad omen
- **Economic burden**: Multiple children, inability to provide

## Types of Infanticide Methods

### Asphyxia (Most Common)
- **Smothering**: Pillow over face, hand covering nose/mouth
- **Strangulation**: Ligature around neck
- **Choking**: Blocking airway with object or cloth
- **Drowning**: Immersion in water or liquid

### Trauma
- **Head injury**: Blunt force to skull, subdural/epidural bleeding
- **Internal injuries**: Abdominal trauma, organ damage
- **Fractures**: Rib fractures, long bone fractures
- **Intentional vs. accidental**: Important forensic question

### Poisoning
- **Herbal toxins**: Traditional medicines with toxic substances
- **Medications**: Overdose of sedatives, narcotics
- **Household poisons**: Pesticides, cleaning agents
- **Natural toxins**: Plant derivatives

### Neglect/Abandonment
- **Exposure**: Leaving infant in cold/elements
- **Starvation**: Withholding food/nutrition
- **Dehydration**: Denying fluids
- **Lack of medical care**: Failing to treat severe illness/injury

### Other Methods
- **Thermal injury**: Burning
- **Falls**: From height (may be accidental vs. intentional)
- **Electrocution**: Rare
- **Chemical burns**: Corrosive substances

## Medico-Legal Examination of Infanticide

### External Examination
- **Body size & development**: Assess age, prematurity, growth
- **Signs of trauma**: Bruises, lacerations, fractures, burn marks
- **Ligature marks**: Strangulation evidence
- **Petechiae**: Face, neck (asphyxia marker)
- **Froth**: Pulmonary edema (drowning or asphyxia)
- **Nutritional status**: Skeletal appearance, muscle wasting
- **Signs of neglect**: Hygiene, diaper rash, infection signs

### Internal Examination (Autopsy)
- **Lungs**: Pulmonary edema, hemorrhage, aspiration evidence
- **Respiratory tract**: Foreign material, trauma
- **Brain**: Subdural/epidural hemorrhage (shaken baby)
- **Liver/organs**: Abdominal trauma, hemorrhage
- **Stomach contents**: Aspiration, last feeding
- **Skeletal survey**: Fractures (old and new, suggesting repeated trauma)
- **Toxicology**: Drug/poison screening

### Viability Assessment
- **Lung buoyancy**: If lungs float (hydrostatic test) = air breathing = lived
- **Lung weight**: Newborn lungs 35-50g; larger if air-filled and lived
- **Stomach contents**: Feeding suggests lived after delivery
- **Vernix caseosa**: Still present if <1 day old

## Examination Findings in Different Methods

### Asphyxia (Smothering)
- Petechiae (face, conjunctiva)
- Froth in airway
- Lack of external injury
- Pulmonary edema

### Blunt Force Trauma
- Bruising, lacerations, abrasions
- Skull fractures
- Subdural/epidural hemorrhage
- Fractures (ribs, long bones)
- Internal organ injury

### Drowning
- Froth cone at nose/mouth
- Pulmonary edema (most important)
- Water in lungs/stomach
- Maceration (if prolonged submersion)

### Poisoning
- Toxicology screening
- Organ damage consistent with toxin
- No external injury usually
- Toxin identification

`,
        mnemonics: [
          {
            text: "INFANTICIDE METHODS: ASTPN (Asphyxia, Starvation/Trauma, Trauma, Poisoning, Neglect)",
            explanation: "Common methods of infanticide"
          },
          {
            text: "VIABILITY MARKERS: Quickening (~16wk), Viable (~22-24wk), Live birth (signs of life)",
            explanation: "Key gestational milestones"
          },
          {
            text: "MTP ACT: Legal abortion up to 20wk (24wk special cases), Performed by registered practitioner",
            explanation: "Legal framework for pregnancy termination"
          },
          {
            text: "IPC ABORTION: 312=Miscarriage, 313=Death quick unborn, 314=Maternal death from abortion",
            explanation: "Relevant IPC sections"
          }
        ],
        keyPoints: [
          "Infanticide: Willful killing of infant (usually <1 year), most common method asphyxia/smothering",
          "Viability: ~22-24 weeks gestation (varies by jurisdiction)",
          "MTP Act: Legal abortion up to 20 weeks (extended to 24 in special cases)",
          "Unsafe abortion: Criminal under IPC; complications include hemorrhage, infection, sepsis, death",
          "Autopsy must establish: Viability, live birth, cause of death, interval from birth to death"
        ],
        textbookRefs: [
          { book: "Reddy's Essentials of Forensic Medicine & Toxicology", chapter: "Infanticide & Abortion", edition: "34th" },
          { book: "Parikh's Textbook of Medical Jurisprudence", chapter: "Infanticide & MTP Act", edition: "8th" }
        ]
      },
      {
        layer: 2,
        slug: "infanticide-abortion-layer-2-mechanism",
        title: "Infanticide & Abortion - Pathophysiology & Complications",
        estimatedMinutes: 25,
        summary: "Physiological mechanisms of infanticide methods and complications of unsafe abortion. Understanding perinatal physiology and medical emergencies.",
        contentMd: `# Infanticide & Abortion - Pathophysiology & Complications

## Mechanism of Asphyxia in Infanticide

### Newborn Respiratory Physiology
- **Newborn airway**: Small, collapsible, easily obstructed
- **Laryngeal reflex**: Protective but can prevent breathing with foreign material
- **Breathing reflex**: Develops during labor; requires external stimulation initially
- **Oxygen demand**: Newborns have high metabolic rate, rapid oxygen depletion

### Smothering/Suffocation Pathophysiology
1. **Airway occlusion**: Object (pillow, cloth) covers nose/mouth
2. **Hypoxia develops**: Rapid in newborns (minutes, not seconds)
3. **CO2 accumulation**: Anoxic drive increases, then fails
4. **Consciousness loss**: Within 1-3 minutes in newborn
5. **Brain death**: 4-6 minutes of anoxia causes irreversible damage
6. **Cardiac arrest**: Follows cerebral death

### Strangulation in Newborn
- **Cord/ligature around neck**: Venous compression easier than adult (lower pressure)
- **Carotid compression**: Rapid cerebral ischemia
- **Laryngeal compression**: Additional asphyxia mechanism
- **Vagal reflex**: Possible sudden death from cardiac reflex

## Mechanism of Blunt Force Trauma

### Shaken Baby Syndrome (Abusive Head Trauma)
- **Mechanism**: Violent shaking causes brain injury within intact skull
- **Forces**: Acceleration-deceleration, rotational forces damage brain tissue
- **Subdural hemorrhage**: Bleeding between brain and dura (most common)
- **Epidural hemorrhage**: Bleeding between dura and skull
- **Retinal hemorrhages**: Specific for shaking/impact injuries
- **White matter shearing**: Diffuse axonal injury
- **Result**: Severe brain injury, developmental disability, or death

### Direct Impact Trauma
- **Skull fracture**: Linear, comminuted, or depressed
- **Cerebral contusion**: Bruising of brain tissue
- **Intracranial hemorrhage**: Bleeding in various compartments
- **Coup-contrecoup**: Injury at impact site and opposite side
- **Fatal injury**: Massive head trauma incompatible with life

### Chest/Abdominal Trauma
- **Rib fractures**: Indicates significant force; may indicate abuse
- **Pulmonary contusion**: Bruising of lung tissue, bleeding into alveoli
- **Liver laceration**: Bleeding into peritoneal cavity
- **Spleen rupture**: Massive hemorrhage
- **Kidney injury**: Flank trauma

## Physiological Effects of Newborn Size

### Why Newborns Die Quickly from Infanticide
- **Small body mass**: Limited oxygen stores (~200-300ml)
- **High metabolic rate**: ~5ml O2/kg/min (vs adult 3-4ml)
- **Small blood volume**: ~80ml/kg; loss of 20-30% is critical
- **Weak immune system**: Infections rapidly fatal
- **Temperature regulation poor**: Exposure causes rapid hypothermia
- **Vulnerability**: Dependent on care for survival

## Complications of Unsafe Abortion

### Hemorrhage (Most Common Complication)
- **Uterine perforation**: Instruments penetrate uterine wall → abdominal bleeding
- **Cervical laceration**: Tearing during dilation
- **Placental abruption**: Premature separation (if induced late)
- **Placenta previa**: Massive bleeding if disrupted
- **Coagulopathy**: Disseminated intravascular coagulation (DIC) from sepsis
- **Hypovolemic shock**: From blood loss
- **Death**: From exsanguination

### Infection & Sepsis
- **Endometritis**: Infection of uterine lining (incomplete abortion debris)
- **Parametritis**: Infection spreading to surrounding tissues
- **Pelvic inflammatory disease (PID)**: Upper genital tract infection
- **Septicemia**: Bloodstream infection, systemic inflammatory response
- **Septic shock**: Organ failure from infection
- **Death**: From overwhelming sepsis

### Perforation & Internal Injury
- **Uterine perforation**: Instruments penetrate uterine wall
- **Bowel perforation**: Damage to intestines if instruments advance too far
- **Abdominal hemorrhage**: Bleeding into peritoneal cavity
- **Peritonitis**: Infection of peritoneal lining
- **Emergency surgery**: Required to repair damage
- **Death**: From uncontrolled hemorrhage or peritonitis

### Incomplete Abortion
- **Retained products of conception**: Fetal parts remain in uterus
- **Infection**: Retained tissue provides culture medium for bacteria
- **Hemorrhage**: Uterus cannot contract to compress bleeding vessels
- **Ongoing bleeding**: Can persist for days/weeks
- **Uterine atony**: Loss of muscle tone, uncontrolled bleeding
- **Death**: From cumulative blood loss and infection

### Anesthetic Complications
- **Inadequate anesthesia**: Crude methods lack safety monitoring
- **Aspiration**: Vomiting with inadequate airway protection
- **Respiratory depression**: From overdose of anesthetic agents
- **Cardiac arrhythmias**: From toxins or electrolyte abnormalities
- **Death**: From respiratory failure or cardiac arrest

## Cause of Death in Unsafe Abortion Cases

### Direct Causes
1. **Hemorrhage** (40-50% of deaths)
2. **Sepsis/infection** (20-30%)
3. **Perforation with peritonitis** (10-15%)
4. **Anesthetic complications** (5-10%)
5. **Aspiration** (5%)
6. **Embolism** (1-2%)

### Autopsy Findings
- Hemorrhage (uterine, abdominal)
- Infection signs (purulent material, infected organs)
- Retained products (fetal tissue in uterus)
- Perforation (hole in uterine wall/bowel)
- Sepsis markers (organ congestion, petechiae, thrombosis)

`,
        mnemonics: [
          {
            text: "NEWBORN OXYGEN DEPLETION: Rapid (minutes not seconds) from small body mass and high metabolism",
            explanation: "Why newborns die quickly from asphyxia"
          },
          {
            text: "UNSAFE ABORTION DEATHS: Hemorrhage (40-50%), Sepsis (20-30%), Perforation (10-15%)",
            explanation: "Cause of death distribution"
          },
          {
            text: "SHAKEN BABY: Subdural hemorrhage, Retinal hemorrhages, Diffuse axonal injury",
            explanation: "Classic findings in abusive head trauma"
          },
          {
            text: "INCOMPLETE ABORTION: Retained products, Infection, Hemorrhage, Uterine atony",
            explanation: "Complications of failed abortion"
          }
        ],
        keyPoints: [
          "Newborns die rapidly from asphyxia (2-5 minutes) due to small body and high metabolism",
          "Shaken baby syndrome: acceleration-deceleration causes subdural hemorrhage and brain injury",
          "Unsafe abortion complications: hemorrhage, sepsis, perforation, anesthetic emergencies",
          "Incomplete abortion leaves retained products that become infected and cause ongoing hemorrhage",
          "Autopsy must determine: viability, live birth, interval from birth, cause of death"
        ],
        textbookRefs: [
          { book: "Reddy's Essentials of Forensic Medicine & Toxicology", chapter: "Infanticide & Abortion", edition: "34th" },
          { book: "Nelson Textbook of Pediatrics", chapter: "Neonatal Physiology", edition: "21st" }
        ]
      },
      {
        layer: 3,
        slug: "infanticide-abortion-layer-3-clinical",
        title: "Infanticide & Abortion - Forensic Examination & Autopsy",
        estimatedMinutes: 25,
        summary: "Autopsy procedures in suspected infanticide. Assessment of viability, live birth evidence, and cause of death determination. Medical management of abortion complications.",
        contentMd: `# Infanticide & Abortion - Forensic Examination & Autopsy

## Autopsy Examination in Infanticide

### External Examination
1. **Body measurements**:
   - Crown-heel length: Assess gestational age/prematurity
   - Head circumference: Normal ~34-35cm at term
   - Weight: Expected 2500-4000g at term
   - Muscle tone: Limp (if dead shortly after birth)

2. **Skin examination**:
   - Vernix caseosa: Waxy coating (present if <1 day old)
   - Lanugo: Fine body hair (more prominent if preterm)
   - Meconium staining: Green discoloration if passed before death
   - Maceration: Skin breakdown (postmortem artifact, timing uncertain)
   - Lividity: May be atypical distribution
   - Rigor mortis: Develops faster in infants than adults

3. **Trauma assessment**:
   - Bruising: Pattern, age (fresh vs. old)
   - Lacerations: Depth, associated tissue damage
   - Petechiae: Face, conjunctiva (asphyxia marker)
   - Burn marks: Thermal or chemical injury
   - Ligature marks: Strangulation evidence
   - Fractures: Evident on X-ray or palpation

4. **Identification**:
   - Birthmarks, scars, identifying features
   - Photography with identifying marks
   - Fingerprints if feasible (forensic comparison)
   - DNA sample collection (possible paternity testing)

### Internal Examination (Autopsy)

**Respiratory Tract**:
- **Lungs**: Inspect for fluid, hemorrhage, foreign material
- **Trachea/larynx**: Examine for trauma, obstruction, ligature marks
- **Esophagus**: For aspirated material
- **Lung buoyancy test**: Float lungs in water (float = breathed air)
- **Lung weight**: >50g suggests lived (normal ~35-50g)

**Cardiovascular**:
- **Heart**: Signs of fetal shunts patent (foramen ovale, ductus venosus still open if died quickly)
- **Umbilical cord**: Examine for trauma, ligature marks, placenta connection
- **Blood**: Collect for toxicology, blood group, DNA

**Gastrointestinal**:
- **Stomach**: Examine for contents (food suggests fed after birth, alive ≥24hr)
- **Intestines**: Check for meconium, feeding, perforation
- **Liver**: Inspect for disease, hemorrhage, toxin effects
- **Spleen**: Signs of trauma, infection

**Central Nervous System**:
- **Skull**: Examine for fractures (linear, comminuted, depressed)
- **Dura**: Inspect for hemorrhage (subdural, epidural)
- **Brain**: Look for contusions, lacerations, hemorrhage, edema
- **Sections**: Systematic examination of all lobes and brainstem

**Skeleton**:
- **Rib fractures**: Indicate chest trauma (may suggest abuse)
- **Long bone fractures**: Pattern and age assessment
- **Metaphyseal fractures**: Specific for shaking injuries
- **Dating fractures**: Callus formation indicates healing over time

### Viability Assessment (Critical Forensic Question)

**Tests for Evidence of Viability**:
1. **Hydrostatic test** (lung float test):
   - Place lungs in water
   - Float = breathed air = baby lived
   - Sink = no air = stillborn or died before breathing

2. **Lung weight and appearance**:
   - Prenatal lungs: Solid, airless, ~35-50g, sink in water
   - Postnatal lungs: Spongy, air-filled, >50g, float in water
   - Partially inflated: May give unreliable results

3. **Stomach/intestinal contents**:
   - Milk, food, or meconium in stomach = fed after birth
   - If fed = baby lived ≥4-6 hours
   - No feeding = may have died at birth or shortly after

4. **Cord condition**:
   - Fresh cord (not dried) = died shortly after birth
   - Dried cord = survived ≥12-24 hours
   - Separated cord = infection/maceration occurred

5. **Other evidence**:
   - Hair growth: Present if survived
   - Nails growth: Present if survived weeks
   - Infection signs: Delayed if died immediately

### Determining Interval from Birth to Death

- **<6 hours**: Fresh appearance, no maceration, cord fresh, body warm
- **6-24 hours**: Early maceration (skin peeling), cord drying, body cooling
- **24-48 hours**: Advanced maceration, lividity changes, decomposition begins
- **>48 hours**: Decomposition, insect activity (if exposed)

## Examination of Unsafe Abortion Cases

### External Examination
- **Vaginal trauma**: Lacerations, bruising from instrumentation
- **Cervical injury**: Laceration from crude dilation
- **Evidence of douching/instrumentation**: Foreign material, visible injuries

### Internal Examination (Autopsy)
1. **Uterus examination**:
   - Perforation: Hole in uterine wall (location significant)
   - Retained products: Fetal tissue, placenta, clots
   - Infection signs: Purulent material, necrotic tissue
   - Size/contraction: Assessment of uterine tone

2. **Abdominal examination**:
   - Hemorrhage: Blood in peritoneal cavity (quantify volume)
   - Bowel integrity: Perforation, contamination
   - Peritonitis: Inflammation of peritoneal lining
   - Organ damage: Liver, spleen, kidney injury

3. **Infection assessment**:
   - Cultures: From uterus, blood, organs (if sepsis)
   - Toxicology: For herbal toxins, medications
   - Histology: Tissue examination for infection, inflammation

4. **Pregnancy status**:
   - Gestational age assessment (if fetal tissue present)
   - Completeness: Determine if all products of conception present
   - Dating: Time of abortion (fresh vs. old tissue)

## Causes of Death in Infanticide vs. Unsafe Abortion

### Infanticide Causes
1. Asphyxia (smothering/strangulation) - most common
2. Blunt force trauma/head injury
3. Drowning
4. Poisoning
5. Neglect/starvation (delayed)

### Unsafe Abortion Causes
1. Hemorrhage (acute from uterine perforation)
2. Sepsis/septic shock
3. Aspiration/anesthetic complications
4. Peritonitis (from perforation)
5. Retained products (subacute, over days)

## Legal & Investigation Aspects

### Questions Autopsy Must Answer
1. **Is fetus viable?** (age >22-24 weeks)
2. **Did child breathe after delivery?** (hydrostatic test, lung examination)
3. **How long after delivery did death occur?** (interval assessment)
4. **What is cause of death?** (specific mechanism)
5. **Is manner of death consistent with infanticide/abortion?** (examination findings)

### Infanticide Investigation
- Scene examination for evidence of struggle
- Witness interviews about circumstances
- Maternal mental health history
- Social service records
- POCSO considerations if sexual elements

### Unsafe Abortion Investigation
- Method used (crude instruments, herbal preparations)
- Who performed procedure (untrained person)
- Medical complications (hemorrhage, infection, perforation)
- Whether delay in seeking care contributed

`,
        mnemonics: [
          {
            text: "VIABILITY MARKERS: Hydrostatic test (lungs float), Lung weight >50g, Stomach contents, Cord appearance",
            explanation: "Tests to assess if baby breathed/lived"
          },
          {
            text: "INTERVAL FROM BIRTH: <6hr (fresh), 6-24hr (early maceration), 24-48hr (advanced), >48hr (decomposition)",
            explanation: "Timeline of postmortem changes"
          },
          {
            text: "ABORTION DEATH CAUSES: Hemorrhage > Sepsis > Perforation > Aspiration",
            explanation: "Frequency of complications"
          },
          {
            text: "INFANTICIDE AUTOPSY: Viability (yes/no), Breathed (lungs float?), Interval (when died), Cause (how died)",
            explanation: "Key autopsy questions"
          }
        ],
        keyPoints: [
          "Lung float test critical to determine if baby breathed (viability assessment)",
          "Stomach contents (milk/food) indicate baby lived ≥6 hours after birth",
          "Interval from birth to death assessed by maceration, cord condition, body temperature",
          "Unsafe abortion complications: hemorrhage (acute), sepsis (subacute), perforation (peritonitis)",
          "Autopsy must definitively answer: viable? breathed? interval from birth? cause of death?"
        ],
        textbookRefs: [
          { book: "Reddy's Essentials of Forensic Medicine & Toxicology", chapter: "Infanticide & Abortion", edition: "34th" },
          { book: "Parikh's Textbook of Medical Jurisprudence", chapter: "Infanticide & MTP Act", edition: "8th" }
        ]
      },
      {
        layer: 4,
        slug: "infanticide-abortion-layer-4-exam",
        title: "Infanticide & Abortion - Exam Preparation",
        estimatedMinutes: 20,
        summary: "High-yield facts about infanticide and abortion. Focus on viability determination, evidence of live birth, and autopsy interpretation.",
        contentMd: `# Infanticide & Abortion - Exam Preparation

## High-Yield Facts

### Infanticide Definition
- **Infanticide**: Willful killing of infant (usually <1 year)
- **Methods**: Asphyxia (smothering, 60%), trauma, drowning, poisoning, neglect
- **Perpetrator**: Usually mother (postpartum depression/psychosis)
- **Intent**: Ranges from deliberate to negligent

### Viability & Live Birth
- **Viable fetus**: >22-24 weeks gestation (varies by jurisdiction)
- **Quickening**: ~16-18 weeks (fetal movement felt by mother)
- **Viable newborn birth weight**: >500g (some jurisdictions >350g)
- **Live birth**: Expulsion with signs of life after viability
- **Signs of life**: Heartbeat, respiration, umbilical cord pulsation

### MTP Act (2002) - India
- **Legal abortion**: Up to 20 weeks (extended to 24 weeks special cases)
- **Performed by**: Registered medical practitioner
- **Indications**: Maternal health, fetal abnormality, contraceptive failure
- **Unsafe abortion**: Criminal under IPC

### Autopsy Findings for Viability/Live Birth

**Hydrostatic Lung Float Test**:
- **Float in water**: Lungs contain air → baby breathed → LIVED
- **Sink in water**: Lungs airless → prenatal state → stillborn/died at birth
- **Limitation**: Can be unreliable if postmortem inflation or decomposition

**Lung Weight**:
- **<50g**: Consistent with prenatal lungs (didn't breathe)
- **>50g**: Consistent with air-filled lungs (breathed after birth)
- **35-50g normal newborn prenatal**: Can overlap with postnatal

**Stomach Contents**:
- **Milk, food present**: Baby fed after birth → lived ≥6 hours
- **Meconium in intestine**: If evacuated, baby lived ≥24 hours
- **Empty stomach**: May indicate death at birth or shortly after

**Cord Appearance**:
- **Fresh, moist**: Died <12 hours
- **Dried, stiff**: Died ≥12-24 hours
- **Separated**: Infection/maceration occurred (lived days/weeks)

### Common Exam Scenarios

### Scenario 1: Newborn found in trash with ligature around neck, lungs sink in water
- **Findings**: Strangulation, lungs airless (prenatal state)
- **Interpretation**: Likely stillborn or died immediately (didn't breathe)
- **Charges**: May not be infanticide if didn't breathe after viability
- **Forensic question**: Did baby achieve viability? Breathe after birth?

### Scenario 2: Infant found dead with head trauma, subdural hemorrhage, retinal hemorrhages
- **Findings**: Shaken baby syndrome (abusive head trauma)
- **Mechanism**: Acceleration-deceleration forces causing brain injury
- **Charges**: Infanticide/culpable homicide
- **Autopsy focus**: Rib fractures (suggest prior abuse), eye examination (retinal hemorrhages)

### Scenario 3: Woman presenting with fever, abdominal pain, vaginal bleeding, uterine perforation on exam
- **Diagnosis**: Unsafe abortion with uterine perforation and sepsis
- **Complications**: Hemorrhage, peritonitis, septic shock
- **Emergency**: Requires immediate surgery
- **Charges**: Under IPC 314 (death caused by abortion act)

### Scenario 4: Newborn with stomach containing milk, cord dried, maceration present
- **Assessment**: Baby lived at least 12-24 hours after birth (fed, cord dried)
- **Interval from birth**: Maceration suggests 24-48 hours postmortem
- **Cause of death**: Asphyxia/trauma if evidence present
- **Charges**: Infanticide

## Examination-Type Questions

**Q: The most reliable test for determining if a newborn breathed after birth is:**
- A: Presence of meconium in intestines
- B: **Lung float test (hydrostatic test)** ✓
- C: Umbilical cord appearance
- D: Weight of lungs >50g

**Q: If newborn lungs float in water, what does this indicate?**
- A: Stillborn (normal finding)
- B: **Baby breathed air after birth (viable, lived)** ✓
- C: Death from drowning
- D: Decomposition artifact

**Q: What is the legal upper limit for safe abortion under MTP Act (2002)?**
- A: 12 weeks
- B: 16 weeks
- C: **20 weeks (extended to 24 in special cases)** ✓
- D: 28 weeks

**Q: The most common cause of death in infanticide is:**
- A: Trauma
- B: **Asphyxia (smothering)** ✓
- C: Poisoning
- D: Drowning

**Q: What does presence of milk in a newborn's stomach indicate?**
- A: Baby died stillborn
- B: **Baby lived and was fed (at least 6+ hours)** ✓
- C: Mother attempted feeding before birth
- D: Aspiration during labor

**Q: Unsafe abortion most commonly causes death from:**
- A: Infection
- B: **Hemorrhage** ✓
- C: Anesthesia
- D: Perforation

## Medicolegal Pearls

**For Infanticide**:
1. **Viability assessment crucial**: >22-24 weeks gestation?
2. **Live birth evidence**: Lung float test, stomach contents, cord appearance
3. **Interval from birth**: Maceration, cord condition, decomposition
4. **Cause of death**: Asphyxia (60%), trauma (20%), other (20%)

**For Unsafe Abortion**:
1. **Hemorrhage most common**: Uterine perforation, ongoing bleeding
2. **Sepsis/infection**: Retained products, contamination
3. **Perforation complications**: Peritonitis, need for surgery
4. **Death prevention**: Early medical care (legal abortion access improves outcomes)

## Quick Reference: Viability Tests

| Test | Finding | Interpretation |
|------|---------|---|
| **Lung float** | Float | Breathed = Lived |
| **Lung float** | Sink | Didn't breathe = Stillborn |
| **Lung weight** | >50g | Consistent with lived |
| **Lung weight** | <50g | Consistent with stillborn |
| **Stomach contents** | Milk present | Lived ≥6 hours |
| **Stomach contents** | Empty | Died at birth or shortly after |
| **Cord appearance** | Fresh/moist | <12 hours old |
| **Cord appearance** | Dried | ≥12-24 hours old |

`,
        mnemonics: [
          {
            text: "LUNG FLOAT TEST: Float=breathed=lived, Sink=didn't breathe=stillborn",
            explanation: "Most important viability test"
          },
          {
            text: "VIABILITY THRESHOLD: >22-24 weeks (varies), >500g viable in most jurisdictions",
            explanation: "Legal definition of viable fetus"
          },
          {
            text: "INFANTICIDE CAUSES: Asphyxia (60%), Trauma (20%), Drowning/poison/neglect (20%)",
            explanation: "Frequency distribution"
          },
          {
            text: "MTP ACT: Legal 20wk (24wk special), Registered doctor only, IPC 312-314 if illegal",
            explanation: "Legal framework India"
          }
        ],
        keyPoints: [
          "Lung float test diagnostic for whether baby breathed (viability/live birth)",
          "Stomach milk indicates baby lived ≥6 hours",
          "Cord appearance and maceration assess interval from birth to death",
          "Asphyxia (smothering) most common infanticide method",
          "Unsafe abortion complications: hemorrhage (40-50%), sepsis (20-30%), perforation (10-15%)"
        ],
        textbookRefs: [
          { book: "Reddy's Essentials of Forensic Medicine & Toxicology", chapter: "Infanticide & Abortion", edition: "34th" },
          { book: "Parikh's Textbook of Medical Jurisprudence", chapter: "Infanticide & MTP Act", edition: "8th" }
        ]
      },
      {
        layer: 5,
        slug: "infanticide-abortion-layer-5-active-recall",
        title: "Infanticide & Abortion - Active Recall",
        estimatedMinutes: 15,
        summary: "Self-assessment on infanticide and abortion cases. Test understanding of viability, live birth evidence, cause of death determination.",
        contentMd: `# Infanticide & Abortion - Active Recall

**Q1: Explain the lung hydrostatic (float) test and its interpretation for determining if a newborn breathed after delivery.**
> Lung hydrostatic test procedure: Remove lungs at autopsy and place in water or saline. If lungs float: Baby breathed air (lungs inflated) = LIVED. If lungs sink: Airless lungs (prenatal state) = stillborn or died immediately. Floating lungs indicate viability and live birth. Sinking lungs suggest stillbirth. Limitations: Postmortem emphysema (gas-producing bacteria) can falsely inflate lungs making them float. Other evidence must corroborate (stomach contents, cord condition, maceration).

**Q2: Describe how stomach contents help determine interval after birth and if baby lived.**
> Stomach contents evidence: (1) Milk/food present = baby fed = lived ≥4-6 hours, (2) Amount/digestion stage = longer survival with more digestion, (3) Meconium in intestines = lived ≥12-24 hours, (4) Absence of feeding = death at birth or shortly after. Significance: Stomach contents prove baby lived post-delivery and approximate interval (days/weeks based on feeding progression).

**Q3: Explain cord appearance and maceration timeline in determining interval from birth to death.**
> **Cord timeline**: (1) Fresh, moist = <6-12 hours, (2) Dried = 6-24 hours, (3) Separated = lived days/weeks. **Maceration timeline**: (1) None = <6 hours, (2) Early = 6-24 hours, (3) Advanced = 24-48 hours, (4) Severe = >48 hours. Combined assessment estimates interval from live birth to death.

**Q4: Differentiate stillbirth from infanticide in autopsy.**
> **Stillbirth**: Lungs sink, empty stomach, intact cord, no trauma. **Infanticide**: Lungs float, fed stomach, desiccated cord, trauma evidence. Distinction critical for legal charges - infanticide requires live birth proof.

**Q5: Explain shaken baby syndrome (abusive head trauma) pathophysiology.**
> Violent shaking causes acceleration-deceleration/rotational brain forces resulting in subdural hemorrhage, diffuse axonal injury, retinal hemorrhages. Infant brains vulnerable: large head (30% body weight), weak neck muscles, white matter dominant. Death from brain swelling and bleeding.

**Q6: Discuss MTP Act legal definition versus infanticide.**
> MTP Act: Legal abortion by registered doctor up to 20 weeks (24 weeks special). Infanticide: Post-viable baby killing. Viability threshold distinguishes legal from homicidal act.

**Q7: Describe unsafe abortion complications and causes of death.**
> Complications: Hemorrhage (40-50%), sepsis (20-30%), perforation (10-15%). Clinical: Acute hemorrhage (shock), delayed infection (fever/pain), perforation (peritonitis emergency).

**Q8: Explain autopsy findings in unsafe abortion and causation determination.**
> Findings: Uterine perforation, retained products, hemorrhage, peritonitis. Causation: Procedure evidence + timing + exclusion of other causes.

**Q9: Discuss legal ramifications for infanticide vs. unsafe abortion in India.**
> **Infanticide (IPC 302/304)**: Murder or culpable homicide, 7yr-life. **Unsafe abortion (IPC 312-314)**: Criminal, 3yr+fine. Distinction: Viability threshold.

**Q10: Explain integration of autopsy and investigation findings in determining manner of death.**
> Autopsy: Viability, live birth, cause, interval. Scene investigation: Circumstances, concealment, witnesses. Maternal history: Mental health, support. Combined assessment determines: Homicide, accidental, or undetermined manner.

`,
        mnemonics: [
          {
            text: "LUNG FLOAT: Float (lived), Sink (stillborn) - MOST IMPORTANT VIABILITY TEST",
            explanation: "Primary evidence of live birth"
          },
          {
            text: "VIABILITY TIMELINE: Cord fresh (<12h), Maceration early (6-24h), Advanced (24-48h), Decomposition (>48h)",
            explanation: "Interval from birth to death assessment"
          },
          {
            text: "UNSAFE ABORTION DEATHS: Hemorrhage (40-50%) > Sepsis (20-30%) > Perforation (10-15%)",
            explanation: "Cause of death frequency"
          },
          {
            text: "INFANTICIDE vs ABORTION: Infanticide=post-viable killing, Abortion=pre-viable termination",
            explanation: "Legal distinction based on viability"
          }
        ],
        keyPoints: [
          "Lung float test is most reliable evidence that baby breathed after birth",
          "Stomach milk indicates baby lived ≥6 hours after delivery",
          "Cord appearance and maceration assess time interval from birth to death",
          "Shaken baby syndrome: subdural hemorrhage, retinal hemorrhages, diffuse axonal injury",
          "Unsafe abortion: hemorrhage and sepsis most common causes of death"
        ],
        textbookRefs: [
          { book: "Reddy's Essentials of Forensic Medicine & Toxicology", chapter: "Infanticide & Abortion", edition: "34th" },
          { book: "Parikh's Textbook of Medical Jurisprudence", chapter: "Infanticide & MTP Act", edition: "8th" }
        ]
      }
    ]
  }
];
