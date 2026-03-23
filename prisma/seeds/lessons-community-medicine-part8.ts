import type { TopicLessons } from "./content-loader";

export const communityMedicinePart8Lessons: TopicLessons[] = [
  {
    topicCode: "CM-MOD-02-TOP-05",
    layers: [
      {
        layer: 1,
        slug: "cm-hep-typhoid-polio-layer-1-foundation",
        title: "Hepatitis, Typhoid & Polio - Foundation",
        estimatedMinutes: 25,
        summary: "Overview of hepatitis prevention, typhoid epidemiology, and polio eradication programs in India.",
        contentMd: `# Hepatitis, Typhoid & Polio - Foundation

## Hepatitis - Overview

### Viral Hepatitis Types
**Hepatitis A (HAV)**:
- Fecal-oral transmission
- Acute illness, self-limiting, no chronic form
- Mortality: <1% (higher in elderly, pregnant women)
- Prevention: Sanitation, safe water, HAV vaccine (Inactivated)
- Vaccination: Part of routine immunization in high-risk areas

**Hepatitis B (HBV)**:
- Bloodborne infection: unsterile instruments, unsafe sexual contact
- Can cause chronic hepatitis → cirrhosis → hepatocellular carcinoma
- HBsAg positive = infectious
- Prevention: Universal HBV vaccination (starting at birth)
- India: Integrated into Universal Immunization Program (UIP)

**Hepatitis C (HCV)**:
- Bloodborne transmission: transfusions, injecting drug use
- High risk of chronicity (80%)
- No vaccine available
- WHO targets: Screen and treat within health systems

**Hepatitis D (HDV)**:
- Requires HBV co-infection
- Worsens HBV disease prognosis

**Hepatitis E (HEV)**:
- Fecal-oral, waterborne outbreaks common
- Acute illness, self-limiting in most
- High mortality in pregnant women (15-25%)
- Prevention: Safe water, sanitation
- HEV vaccine available in India (HEPCOVAX)

### National Hepatitis Prevention Strategy
- Safe water and sanitation
- Promote hand hygiene, food safety
- Universal HBV vaccination for all children
- Screening of blood donations for all agents
- Safe needle practices in healthcare
- Treatment access for chronic HBV/HCV

## Typhoid (Enteric Fever)

### Epidemiology
- Caused by **Salmonella typhi** (typhoid) and **S. paratyphi** (paratyphoid)
- Transmission: Fecal-oral route, contaminated water/food
- Endemic in India; 1-5 cases per 100,000 per year (varies by region)
- Risk factors: Poor sanitation, inadequate water supply, malnutrition
- Age: Any age, peak 5-40 years in endemic areas

### Clinical Features (Classic 4-week illness)
**Week 1** (Incubation period 7-14 days):
- Fever gradually rising (step-ladder pattern), headache, myalgia
- Few GI symptoms initially

**Week 2**:
- High continuous fever, rose spots (faint rash), bradycardia
- "Rose spots" = faint macular rash on chest, 2-3mm, appears in 30% only
- Abdominal distension, constipation more common than diarrhea
- Hepatosplenomegaly
- "Typhoid state" = severe illness, prostration, delirium

**Week 3**:
- Complications: Intestinal perforation (most common), encephalopathy, myocarditis
- "Diarrhea phase" or constipation-to-diarrhea progression

**Week 4**:
- Recovery phase if untreated and uncomplicated

### Diagnosis
- Blood culture: Gold standard (positive in 1st-2nd week, 50-80% sensitivity)
- Widal test: Agglutinating antibodies (O antigen early, H antigen late)
  - Limited specificity due to endemic infection, previous vaccination
  - Cannot differentiate acute from past infection
- Urine/stool culture: Helpful later in disease course

### Treatment
- First-line: Ceftriaxone (1-2g IV/IM daily) or Fluoroquinolones
- Resistance: Multidrug-resistant (MDR) and XDR S. typhi increasingly common
- Duration: 7-14 days depending on severity
- Supportive care, attention to hydration and nutrition

### Prevention
- Improved sanitation and water supply (most important)
- Hand hygiene, food safety
- **Typhoid Vaccines**:
  - **Oral live attenuated** (Ty21a): Single dose, booster every 3 years
  - **Inactivated injectable**: IM injection, booster every 3 years
  - Efficacy: 50-80% depending on vaccine type
- Vaccination recommended for travelers to endemic areas, healthcare workers

## Polio

### Global & Indian Status
- India: **WHO-certified polio-free since March 2014**
- Last wild poliovirus case: October 1999 (Uttar Pradesh)
- India represents one of WHO's greatest public health achievements

### Transmission
- Fecal-oral route, highly contagious
- Transmission can occur before/after symptom onset
- Immunocompromised individuals: prolonged viral shedding

### Clinical Manifestations
- 70-75%: Asymptomatic infection (silent circulation concern)
- 24-25%: Minor illness (abortive polio) = fever, sore throat, GI symptoms
- 1-5%: Non-paralytic aseptic meningitis
- <1%: Paralytic poliomyelitis = acute flaccid paralysis (AFP)

### India's Polio Eradication Strategy

**1. Universal Immunization Program (UIP)**:
- **IPV** (Inactivated Polio Vaccine): IM injection, 4 doses
  - Schedule: 6 weeks, 10 weeks, 14 weeks, 18-24 months
  - Only vaccine now used in India (since 2016)
  - Safe for immunocompromised persons

**2. Pulse Polio Immunization (PPI)**:
- Mass immunization campaigns targeting all children <5 years
- Administered twice yearly (January and December)
- Reached >99% coverage during eradication phase
- Now continued as maintenance activity

**3. High-Risk Strategies**:
- Focus on high-population-density areas with poor sanitation
- Mobile vaccination teams in urban slums
- Transit point vaccinations

**4. Surveillance**:
- **AFP (Acute Flaccid Paralysis)** surveillance: Every case of AFP in <15 years investigated
- Non-polio AFP rate >2 per 100,000 children <15 years indicates adequate surveillance

### Maintenance Phase Challenges
- Continued global transmission in Afghanistan, Pakistan
- Risk of re-importation into polio-free countries
- Maintaining >95% immunization coverage
- Surveillance and rapid response readiness`,
        mnemonics: [
          {
            text: "Hepatitis Route: A (feces) B (blood) C (blood) D (depends on B) E (enteric)",
            explanation: "Quick way to remember transmission routes for different hepatitis types"
          },
          {
            text: "Typhoid Week Progression: Rising fever → High fever with rose spots → Complications → Recovery",
            explanation: "The classic 4-week illness pattern helps with diagnosis timing"
          },
          {
            text: "Polio Statistics: 70% silent, 25% minor illness, <5% paralytic",
            explanation: "Most polio infections are asymptomatic, which is why vaccination coverage is critical"
          }
        ],
        keyPoints: [
          "HAV is fecal-oral; HBV is bloodborne. HAV vaccine protects; HBV vaccine prevents chronic infection.",
          "Typhoid presents with gradual fever, rose spots, relative bradycardia, and constipation (not diarrhea initially)",
          "Widal test has limited specificity in endemic areas; blood culture is gold standard",
          "India achieved polio eradication through IPV vaccination, Pulse Polio campaigns, and rigorous AFP surveillance",
          "Maintenance of >95% polio immunization coverage essential to prevent re-introduction",
          "Typhoid vaccines available: oral Ty21a and inactivated injectable with 50-80% efficacy"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive and Social Medicine", chapter: "Communicable Diseases - Hepatitis and Typhoid", edition: "26th" },
          { book: "Mahajan & Gupta - Community Medicine", chapter: "Disease Surveillance and Control Programs", edition: "5th" }
        ]
      },
      {
        layer: 2,
        slug: "cm-hep-typhoid-polio-layer-2-mechanism",
        title: "Hepatitis, Typhoid & Polio - Mechanism",
        estimatedMinutes: 25,
        summary: "Pathophysiology, complications, and management protocols.",
        contentMd: `# Hepatitis, Typhoid & Polio - Mechanism

## Hepatitis B Pathophysiology

### Natural History of HBV Infection
1. **Acute Infection**: HBV DNA, HBsAg appear first → ALT elevation
2. **Recovery** (95% adults): HBsAg clearance, anti-HBs appearance
3. **Chronic Infection** (5-10% adults, 90% infants):
   - Persistent HBsAg >6 months
   - Risk of cirrhosis (5% annually) → hepatocellular carcinoma

### HBV Markers Interpretation
| Marker | Acute | Recovery | Chronic | Immune (Vaccinated) |
|--------|-------|----------|---------|-------------------|
| HBsAg | + | - | + | - |
| Anti-HBc | + | + | + | - |
| Anti-HBs | - | + | - | + |
| HBeAg | + | - | + (high replicator) | - |
| Anti-HBe | - | + | ± | - |
| HBV DNA | High | - | Present (varies) | - |

### Vaccine Response
- 95% develop protective anti-HBs after complete 3-dose series
- Respond better if anti-HBc negative
- Booster needed if anti-HBs <10 mIU/mL after 5 years

## Typhoid Complications

### Intestinal Perforation
- Most common serious complication (1-3%)
- Occurs in 3rd week typically
- Presents with: Sudden severe abdominal pain, peritonitis signs
- Mortality: 20-30% even with treatment
- Management: Emergency surgery (resection of perforated segment)

### Encephalopathy ("Typhoid Encephalitis")
- Presents with: Delirium, confusion, seizures, altered sensorium
- NOT typical meningitis (CSF usually normal)
- Mechanism: Cerebral edema, metabolic disturbance, not direct invasion
- Management: Aggressive fever management, supportive care

### Myocarditis
- Direct myocardial invasion or toxin effect
- Presents with: Cardiomegaly, arrhythmias, congestive heart failure
- Risk of sudden death
- Management: Bed rest, cardiac monitoring, supportive care

### Hemolysis
- Salmonella induces microangiopathic hemolytic anemia (MAHA)
- Risk of acute renal failure in severe cases

## Polio Pathophysiology & Paralysis

### Mechanism of Paralysis
1. **Viral Entry**: Poliovirus enters via oral mucosa → replicates in GI tract
2. **Viremia**: Spreads to CNS (blood-brain barrier passage)
3. **Motor Neuron Destruction**: Selective destruction of anterior horn cells (motor neurons)
4. **Result**: Acute flaccid paralysis (lower motor neuron signs)

### Characteristics of Polio Paralysis
- **Acute onset**: Over hours to days
- **Flaccid paralysis**: Loss of tone, weak/absent reflexes
- **Lower extremities**: More commonly affected than upper
- **Bulbar involvement** (20-30%): Affects CN IX, X, XII → difficulty swallowing, respiratory distress
- **Respiratory muscles**: Can cause respiratory paralysis → need for mechanical ventilation

### Post-Polio Syndrome
- Occurs in 25-50% of polio survivors (years to decades later)
- Presents with: Progressive weakness, atrophy, fatigue
- Mechanism: Unknown (may relate to motor unit dysfunction, reactivation)

## National Immunization Program - Polio Component

### Current IPV Schedule in UIP
- **Dose 1**: 6 weeks
- **Dose 2**: 10 weeks
- **Dose 3**: 14 weeks
- **Dose 4**: 18-24 months (before 5 years)

### Special Considerations
- IPV is inactivated vaccine (safe for immunocompromised)
- OPV phased out in India (last used as booster in 2014)
- Stock of OPV maintained for emergency response if re-introduction occurs
- Healthcare workers, family contacts of polio patients: IPV booster recommended

## Prevention & Control Measures

### Water & Sanitation for Typhoid Control
- Universal access to safe drinking water (piped to homes)
- Sanitary latrines (80-95% coverage needed)
- Waste management systems
- Food handlers' hygiene training

### Hepatitis B Prevention in Healthcare Settings
- Universal precautions: Gloves, mask, eye protection for potential blood/body fluid exposure
- Safe injection practices: New syringe/needle for each injection
- Needle-stick protocol: Immediate washing, post-exposure prophylaxis if needed
- Vaccination of all healthcare workers

### Hepatitis A Prevention
- Hand hygiene (critical measure)
- Safe water supply (chlorination, boiling)
- Sanitation and sewage disposal
- Food safety (cook thoroughly, avoid contaminated raw foods)`,
        mnemonics: [
          {
            text: "HBV Markers: Acute (HBsAg+, Anti-HBc+), Recovery (Anti-HBs+), Chronic (HBsAg+, HBV DNA present)",
            explanation: "Simple pattern recognition for HBV serological interpretation"
          },
          {
            text: "Typhoid Complications: Perforation (3rd week), Encephalopathy (delirium), Myocarditis (shock)",
            explanation: "Major complications and timing in typhoid illness"
          },
          {
            text: "Polio Paralysis: LMN signs, Lower limbs > upper, Bulbar can affect breathing",
            explanation: "Characteristic features of poliomyelitis paralysis pattern"
          }
        ],
        keyPoints: [
          "HBV natural history: 95% adults clear (anti-HBs+); 5-10% develop chronic infection with cirrhosis risk",
          "Typhoid perforation: 1-3% incidence, 3rd week, 20-30% mortality even with surgery",
          "Hepatitis B vaccination: 95% response, protective anti-HBs >10 mIU/mL",
          "Polio destroys anterior horn cells → flaccid paralysis with LMN signs",
          "IPV safe in immunocompromised; switched from OPV due to VAPP risk in immunosuppressed",
          "Hepatitis B prevention in healthcare: Universal precautions, safe injections, staff vaccination"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive and Social Medicine", chapter: "Communicable Diseases - Pathophysiology", edition: "26th" },
          { book: "Harrison's Principles of Internal Medicine", chapter: "Viral Hepatitis", edition: "21st" }
        ]
      },
      {
        layer: 3,
        slug: "cm-hep-typhoid-polio-layer-3-clinical",
        title: "Hepatitis, Typhoid & Polio - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical presentation, diagnosis, and management of hepatitis, typhoid, and polio.",
        contentMd: `# Hepatitis, Typhoid & Polio - Clinical

## Hepatitis Clinical Presentation

### Acute Viral Hepatitis Presentation
- **Prodromal phase**: Malaise, anorexia, fever, headache
- **Icteric phase**: Jaundice, dark urine, pale stools, pruritus
- **Hepatitis B vs A**: HBV gradual onset, HAV sudden, same management

### Hepatitis B Screening & Diagnosis
- **Serology**: HBsAg (acute/chronic), Anti-HBc (ever infected), Anti-HBs (immune)
- **Viral markers**: HBV DNA (active replication), HBeAg (infectivity marker)
- **Liver function**: ALT >1000 IU/L typical in acute hepatitis
- **Liver biopsy**: Assess cirrhosis in chronic cases

### Management of Hepatitis
- **Acute HAV/HBV**: Supportive care, rest, nutrition, monitor for complications
- **Fulminant hepatitis**: ICU admission, plasma exchange, transplant evaluation
- **Chronic HBV**: Antiviral therapy (tenofovir, entecavir) if HBV DNA positive, fibrosis evident
- **Hepatitis E in pregnancy**: Monitor for complications (DIC, hepatic failure)

## Typhoid Clinical Presentation & Management

### Clinical Diagnosis
- **Classic presentation**: Fever + rose spots + relative bradycardia + hepatosplenomegaly
- **Differential**: Malaria, dengue, TB, other enteric fevers
- **Complications indicator**: Abdominal tenderness/rigidity (perforation), altered mental status (encephalopathy)

### Diagnostic Approach
1. **Blood culture**: If available (gold standard, >70% if collected early)
2. **Widal test**: Positive O & H antibodies but low specificity in endemic areas
3. **Stool culture**: Later in disease (3rd-4th week)
4. **PCR/molecular**: If available (most specific)

### Typhoid Management
- **Empiric antibiotics pending culture**:
  - First-line: Ceftriaxone 1-2g IV/IM daily (7-14 days)
  - Alternative: Fluoroquinolone (ofloxacin 800mg daily) if susceptible
  - Resistance: Consider carbapenems if XDR
- **Supportive care**:
  - IV fluids for dehydration
  - Antipyretics (paracetamol, avoid NSAIDs if bleeding risk)
  - Nutritional support
  - Monitoring for complications
- **Complications management**:
  - Perforation: Emergency surgery
  - Encephalopathy: Seizure prophylaxis, ICU monitoring
  - Myocarditis: Cardiac monitoring, inotropes if needed

## Polio Clinical Presentation

### Clinical Forms
**Asymptomatic (70-75%)**:
- Infected but no symptoms
- Can transmit virus
- Surveillance challenge in endemic areas

**Minor Illness (24-25%)**:
- Fever, headache, sore throat, GI upset
- Self-limited, 3-5 days
- Resembles viral syndrome

**Non-Paralytic Polio (1-5%)**:
- Aseptic meningitis features
- CSF pleocytosis (lymphocytic)
- Fever, headache, stiff neck, back pain
- Recovery in 2-3 weeks

**Paralytic Poliomyelitis**:
- **Prodrome**: Fever, malaise, myalgia 2-10 days before paralysis
- **Paralytic phase**: Acute flaccid paralysis
  - Lower limbs > upper limbs (70% cases)
  - Asymmetric distribution (variable)
  - Loss of reflexes, hypotonia
  - Respiratory involvement: Bulbar or respiratory muscle paralysis (10-30%)
- **Recovery phase**: Weeks to months (variable)

### Diagnosis
- **Clinical**: AFP in <15 years suggestive
- **CSF**: Pleocytosis (50-500 lymphocytes), elevated protein, normal glucose
- **Stool culture**: Poliovirus isolation (gold standard)
- **Serology**: Rise in neutralizing antibodies (paired sera)

### Management of Polio
- **Acute phase**:
  - Supportive care, bedrest, pain management
  - Monitor respiratory status (vital capacity, signs of respiratory compromise)
  - ICU admission if respiratory involvement
  - Mechanical ventilation if needed (iron lung historically, ventilators now)
- **Recovery phase**:
  - Physiotherapy, occupational therapy
  - Orthotic devices, mobility aids as needed
  - Psychological support

## Prevention in India

### Hepatitis Prevention
- Hepatitis B vaccination: Part of UIP (birth, 6 weeks, 10 weeks, 14 weeks)
- Hepatitis A: Improved sanitation, safe water
- Hepatitis E: Same as HAV + HEV vaccine where available

### Typhoid Control
- Typhoid vaccination: Not routine in UIP (high-risk groups: travelers, health workers)
- Water supply improvement: Critical for endemic areas
- Sanitation: Goal of open defecation elimination

### Polio Surveillance
- **AFP surveillance**: Every case <15 years investigated
- **Stool samples**: Collected and tested for poliovirus
- **Rapid response**: If wild poliovirus detected
- **High-risk areas**: Mobile vaccination teams, catch-up campaigns`,
        mnemonics: [
          {
            text: "Typhoid Diagnosis: BCG (Blood Culture Gold standard), Widal (limited in endemic), Stool (later)",
            explanation: "Diagnostic modalities and timing in typhoid"
          },
          {
            text: "Polio Presentation: 70% silent, 25% minor, 5% paralytic",
            explanation: "Distribution of clinical forms"
          },
          {
            text: "Hepatitis: Jaundice + Dark urine + Pale stools = Icterus",
            explanation: "Classic icteric phase findings"
          }
        ],
        keyPoints: [
          "Typhoid: Fever + rose spots + relative bradycardia + hepatosplenomegaly; blood culture gold standard",
          "Ceftriaxone first-line for typhoid; consider resistance patterns; manage complications emergently",
          "Polio mostly asymptomatic (70%); paralytic <1% but devastating when occurs",
          "Hepatitis B requires serology (HBsAg, anti-HBc, anti-HBs) for interpretation",
          "Polio paralysis: LMN signs, lower limbs affected, respiratory involvement in 10-30%",
          "AFP surveillance critical in polio-free India for early detection of re-introduction"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive and Social Medicine", chapter: "Clinical Management - Communicable Diseases", edition: "26th" },
          { book: "CDC Guidelines on Poliomyelitis Surveillance and Response", chapter: "Acute Flaccid Paralysis Investigation" }
        ]
      },
      {
        layer: 4,
        slug: "cm-hep-typhoid-polio-layer-4-exam",
        title: "Hepatitis, Typhoid & Polio - Exam Prep",
        estimatedMinutes: 15,
        summary: "NEXT-pattern MCQ preparation on hepatitis transmission, typhoid complications, polio eradication.",
        contentMd: `# Hepatitis, Typhoid & Polio - Exam Preparation

## High-Yield Facts

**Hepatitis Transmission**:
- HAV: Fecal-oral, waterborne outbreaks, no chronic form
- HBV: Bloodborne, mother-to-child, sexual, no vaccine (chronic risk)
- HCV: Bloodborne (transfusion, IVDU), 80% chronicity
- HEV: Fecal-oral, pregnancy mortality 15-25%

**Typhoid Epidemiology**:
- Incidence: 1-5 per 100,000 per year in India
- Peak age: 5-40 years
- Transmission: Fecal-oral, water/food contamination
- Complications: Perforation (1-3%), encephalopathy, myocarditis

**Polio in India**:
- Last case: October 1999
- Polio-free since March 2014
- Strategy: IPV vaccination, AFP surveillance
- IPV dose schedule: 6w, 10w, 14w, 18-24m

**Typhoid Management**:
- Blood culture: Gold standard (50-80% sensitivity)
- Antibiotic: Ceftriaxone 1-2g IV/IM daily
- Resistance: MDR and XDR increasing
- Complications: Surgery for perforation, ICU for encephalopathy

**Polio Paralysis**:
- LMN signs (flaccidity, hyporeflexia)
- Lower limbs > upper limbs
- Respiratory involvement: 10-30%
- Post-polio syndrome: 25-50% of survivors (years later)

## Problem-Solving Cases

**Case 1: Acute Jaundice**
- 35-year-old with fever, malaise, jaundice
- History of multiple sexual partners
- HBsAg+ on serology
- Diagnosis: Acute hepatitis B
- Management: Supportive care, monitor for fulminant hepatitis

**Case 2: Enteric Fever Diagnosis**
- 28-year-old with 2 weeks fever, abdominal distension, relative bradycardia
- Rose spots on chest
- Blood culture positive for Salmonella typhi
- Diagnosis: Enteric fever (typhoid)
- Management: Ceftriaxone, monitor for perforation

**Case 3: AFP in Child**
- 3-year-old with sudden paralysis of lower limbs
- Stool culture: Poliovirus
- Diagnosis: Paralytic poliomyelitis
- Public health: Contacts vaccinated, surveillance initiated

## Analysis Topics

- Why is HAV vaccine less prioritized than HBV in India's program?
- Mechanisms of typhoid complications (perforation, encephalopathy)
- Polio surveillance strategy post-eradication
- Hepatitis B vaccine efficacy and booster strategies`,
        mnemonics: [
          {
            text: "HEPATITIS TRANSMISSION: A (feces), B (blood), C (blood), D (B co-inf), E (water)",
            explanation: "Epidemiological difference drives prevention strategy"
          },
          {
            text: "TYPHOID COMPLICATIONS: Perforation 1-3%, Encephalopathy (delirium), Myocarditis (shock)",
            explanation: "Most common and dangerous complications"
          },
          {
            text: "POLIO ERADICATION: IPV vaccination + AFP surveillance + Pulse campaigns = India polio-free",
            explanation: "Three pillars of successful eradication"
          }
        ],
        keyPoints: [
          "HAV fecal-oral, no chronic; HBV bloodborne, 5-10% chronic; HCV 80% chronic",
          "Typhoid: Blood culture gold standard; ceftriaxone first-line; perforation emergent surgical",
          "India polio-free since 2014 through IPV vaccination and AFP surveillance",
          "Widal test limited in endemic areas; blood culture preferred in typhoid",
          "HBV vaccine: 95% response; booster if anti-HBs <10 mIU/mL",
          "Polio paralysis: LMN, lower limbs, respiratory involvement 10-30% (critical)"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive and Social Medicine", chapter: "Communicable Diseases", edition: "26th" },
          { book: "NACO Guidelines", chapter: "Hepatitis B Prevention & Control" }
        ]
      },
      {
        layer: 5,
        slug: "cm-hep-typhoid-polio-layer-5-active-recall",
        title: "Hepatitis, Typhoid & Polio - Active Recall",
        estimatedMinutes: 10,
        summary: "Quick recall of hepatitis types, typhoid presentation, and polio eradication.",
        contentMd: `# Active Recall - Hepatitis, Typhoid & Polio

**Q1:** What is the primary transmission route for hepatitis A and how does it differ from hepatitis B?
> HAV: Fecal-oral (contaminated water/food). HBV: Bloodborne (unsterile needles, sexual contact, mother-to-child). Prevention: HAV (sanitation, safe water), HBV (vaccination, safe practices).

**Q2:** Describe the classic 4-week progression of untreated typhoid.
> Week 1: Gradual rising fever, headache, few GI symptoms. Week 2: High continuous fever, rose spots, bradycardia, abdominal distension, hepatosplenomegaly. Week 3: Complications (perforation, encephalopathy). Week 4: Recovery if uncomplicated.

**Q3:** What is the gold standard for diagnosing typhoid and why is Widal test unreliable in India?
> Blood culture is gold standard (50-80% sensitivity in first 2 weeks). Widal test: Limited specificity in endemic India due to baseline seropositivity from previous infection/vaccination; cannot differentiate acute from past infection.

**Q4:** List the three major complications of typhoid and their clinical presentations.
> 1) Intestinal perforation (1-3%, sudden severe abdominal pain, peritonitis, 20-30% mortality). 2) Encephalopathy (delirium, seizures, altered sensorium, CSF normal). 3) Myocarditis (cardiomegaly, arrhythmias, shock).

**Q5:** What was India's last confirmed case of wild poliovirus and when did India achieve polio-free status?
> Last case: October 1999 (Uttar Pradesh, 2-year-old girl). Polio-free status: March 2014 (WHO-certified). Maintained through high IPV coverage (>95%) and AFP surveillance.

**Q6:** Describe the clinical forms of polio infection and their approximate percentages.
> Asymptomatic 70-75% (silent circulation risk), Minor illness 24-25% (fever, sore throat, GI symptoms, self-limited), Non-paralytic <1% (meningitis-like), Paralytic <1% (flaccid paralysis, LMN signs, lower limbs, respiratory involvement 10-30%).

**Q7:** What are the characteristics of polio-induced paralysis and how does it differ from other causes?
> Acute flaccid paralysis (LMN signs: hypotonia, hyporeflexia, muscle weakness). Lower limbs > upper limbs. Asymmetric distribution. Bulbar involvement 10-30% (affects swallowing, respiration). Non-sensory. Differs from UMN (spasticity) and sensory preservation in other causes.

**Q8:** What is the current polio immunization schedule in India's UIP?
> IPV (Inactivated Polio Vaccine) schedule: Dose 1 at 6 weeks, Dose 2 at 10 weeks, Dose 3 at 14 weeks, Dose 4 at 18-24 months. IPV is inactivated (safe for immunocompromised); OPV phased out (VAPP risk in immunosuppressed).

**Q9:** Explain India's hepatitis prevention strategy and role of vaccination.
> Hepatitis B: Universal vaccination in UIP (birth, 6w, 10w, 14w); 95% response; booster if anti-HBs <10 mIU/mL. Hepatitis A: Sanitation, safe water, hand hygiene (vaccine not routine in UIP). Hepatitis E: Safe water + HEV vaccine where available.

**Q10:** What is the role of AFP surveillance in India's polio eradication maintenance strategy?
> AFP (Acute Flaccid Paralysis) surveillance: Every case <15 years investigated. Stool samples tested for poliovirus. Non-polio AFP rate >2 per 100,000 children <15 years indicates adequate surveillance. Rapid response if wild poliovirus detected. Mobile vaccination teams deployed to high-risk areas.`,
        mnemonics: [
          {
            text: "HEPATITIS ABC: A (feces), B (blood), no chronic; B (chronic risk 5-10%); C (chronic 80%)",
            explanation: "Transmission and chronicity pattern"
          },
          {
            text: "TYPHOID GOLD: Blood culture best (50-80% early), Widal limited (endemic baseline)",
            explanation: "Diagnostic approach in India"
          },
          {
            text: "POLIO INDIA: Last case 1999 (UP), Polio-free 2014, IPV 4-dose schedule, AFP surveillance",
            explanation: "Key milestones of eradication program"
          },
          {
            text: "POLIO PARALYSIS: Acute flaccid, LMN signs, Lower limbs, Respiratory 10-30%",
            explanation: "Clinical features of paralytic polio"
          }
        ],
        keyPoints: [
          "HAV fecal-oral, self-limited; HBV bloodborne, 5-10% chronic; HCV bloodborne, 80% chronic",
          "Typhoid: 4-week illness, rose spots, bradycardia, complications (perforation, encephalopathy, myocarditis)",
          "Blood culture gold standard (50-80%); Widal unreliable in endemic India (baseline positivity)",
          "Polio: 70% asymptomatic, <1% paralytic; LMN signs, lower limbs, respiratory involvement 10-30%",
          "India polio-free since 2014; IPV 4-dose schedule; AFP surveillance maintains eradication",
          "HBV vaccine: 95% response; booster if anti-HBs <10 mIU/mL"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive and Social Medicine", chapter: "Communicable Diseases - Hepatitis, Typhoid, Polio", edition: "26th" },
          { book: "WHO Polio Eradication Initiative", chapter: "Surveillance and Response Strategies" }
        ]
      }
    ]
  }
];
