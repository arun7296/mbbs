import type { TopicLessons } from "./content-loader";

export const pediatricsLessonsPartTen: TopicLessons[] = [
  {
    topicCode: "PE-MOD-04-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "childhood-exanthems-layer-1-foundation",
        title: "Childhood Exanthems - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of common childhood viral exanthems (measles, rubella, varicella) with epidemiology, classification, and general pathophysiology.",
        contentMd: `# Childhood Exanthems - Foundation

## Definition & Classification

**Exanthems**: Widespread rashes of sudden onset, typically viral in origin.

**Common childhood exanthems**:
- **Measles (Rubeola)** - Paramyxovirus, highly contagious
- **Rubella (German Measles)** - Togavirus, teratogenic if in pregnancy
- **Varicella (Chickenpox)** - Varicella-zoster virus (VZV), herpesvirus family

## Epidemiology in India

| Exanthem | Age | Seasonality | Incubation | Contagious Period |
|----------|-----|-------------|------------|--------------------|
| Measles | 6 mo-5 yr | Winter-spring | 10-14 days | 4 days before-4 after rash |
| Rubella | 2-12 yr | Winter | 14-21 days | 5 days before-7 after rash |
| Varicella | 1-9 yr | Winter-spring | 10-21 days | 1-2 days before-6 days after |

## General Pathophysiology

1. **Primary viremia** → respiratory epithelium
2. **Secondary viremia** → dissemination to skin & mucous membranes
3. **Cell-mediated immunity** → rash appearance (T-cell mediated)
4. **Recovery** → lifelong immunity (except rubella ~15%)

## Public Health Significance

- Notifiable diseases in India
- Part of UIP (Universal Immunization Programme)
- MMR vaccine introduction reduced incidence >95%
- Still endemic in low-immunization areas

## Clinical Presentation Timeline

**Prodromal phase** (before rash):
- Fever, cough, rhinitis, conjunctivitis
- Coryza (runny nose)
- Malaise, body aches
- Duration: 2-4 days before rash appears

**Exanthem phase**:
- Rash appearance (macules/papules)
- Spreads from head to trunk to extremities
- Associated systemic symptoms continue

**Recovery phase**:
- Gradual rash fading
- Fever subsiding
- Return to normal (if no complications)`,
        mnemonics: [
          { text: "Measles: cough + coryza + conjunctivitis (3 C's) + rash", explanation: "Classic triad with exanthem" },
          { text: "Rubella: mild illness, teratogenic if pregnant", explanation: "Milder than measles" },
          { text: "Varicella: 1-2 days fever then rash (rapid onset)", explanation: "Quickest to rash onset" },
        ],
        keyPoints: [
          "Measles: 6mo-5yr, highly contagious, complications common",
          "Rubella: 2-12yr, mild illness, teratogenic in pregnancy",
          "Varicella: 1-9yr, rapid rash onset, contagious before rash",
          "Incubation: measles 10-14 days, rubella 14-21 days, varicella 10-21 days",
          "Rash spreads head → trunk → extremities in measles/rubella",
          "Varicella: simultaneous presence of papules, vesicles, crusts",
          "Primary viremia → secondary viremia → rash (immune-mediated)",
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Childhood Exanthems", edition: "9th" },
          { book: "Nelson Textbook of Pediatrics", chapter: "Viral Exanthems", edition: "21st" },
        ],
      },
      {
        layer: 2,
        slug: "childhood-exanthems-layer-2-mechanism",
        title: "Childhood Exanthems - Mechanism",
        estimatedMinutes: 30,
        summary: "Detailed pathophysiology of measles, rubella, varicella including tissue invasion, immune response, rash mechanism, and organ-specific effects.",
        contentMd: `# Childhood Exanthems - Pathophysiology

## Measles Pathophysiology

**Viral entry & replication**:
- Respiratory epithelium initial infection
- Paramyxovirus replicates in respiratory cells
- Immune response: both T-cell and antibody-mediated

**Immune response features**:
- IgG antibodies appear at rash onset (too late to prevent)
- IgM antibodies appear days after rash (diagnostic)
- T-cell immunity critical for recovery (delayed in immunocompromised)

**Why systemic effects**:
- Viral dissemination to multiple organs
- Immune-mediated inflammation (fever, myalgia, cough)
- Epithelial damage in lungs (respiratory infection)

**Rash mechanism**:
- Immune T-cells attack virus-infected skin cells
- Maculopapular appearance reflects immune infiltration
- Cephalocaudal spread (head → trunk → limbs) reflects viral dissemination pattern

## Rubella Pathophysiology

**Viral characteristics**:
- Togavirus (Alphavirus family)
- More efficiently crosses placental barrier (teratogenic)
- Persistent infection possible (chronic rubella)

**Mild systemic illness**:
- Respiratory tract infection
- Less pulmonary involvement than measles
- Often inapparent infection possible (especially in vaccinated)

**Teratogenesis in pregnancy**:
- First trimester: 80-90% of fetuses affected
- Organ systems affected during organogenesis period
- Congenital rubella syndrome (CRS) features: cardiac, ocular, auditory, CNS, growth restriction

## Varicella Pathophysiology

**VZV infection features**:
- Herpesvirus (can establish latency)
- Direct contact transmission (respiratory droplets)
- Contagious before rash appearance

**Rash mechanism**:
- Centripetal distribution (trunk-centered, fewer on extremities)
- Simultaneous stages: macules → papules → vesicles → crusts → scabs
- Recurrent crops (new lesions appear for 3-5 days)
- Vesicular fluid contains infectious virus

**Immune response**:
- Local immune response in skin (vesicle formation)
- Systemic T-cell immunity (lifelong protection)
- Reactivation possible (herpes zoster in older adults or immunocompromised)

## Complications by System

**Respiratory**:
- Measles: viral pneumonia (giant cell pneumonia in immunocompromised)
- Varicella: secondary bacterial pneumonia
- Rubella: rare respiratory complications

**Neurological**:
- Measles: encephalitis (1 per 1,000 cases), subacute sclerosing panencephalitis (SSPE, rare, fatal)
- Varicella: encephalitis, meningitis, Reye syndrome (aspirin use association)
- Rubella: low risk of encephalitis

**Other**:
- Measles: otitis media, diarrhea, myocarditis (rare)
- Varicella: bacterial superinfection of skin lesions, disseminated disease (immunocompromised)
- Rubella: congenital syndrome (most severe)`,
        mnemonics: [
          { text: "Measles IgG at rash (too late), IgM days after", explanation: "Serology timing" },
          { text: "Rubella: 1st trimester = 80-90% CRS, persistent infection possible", explanation: "Teratogenesis risk" },
          { text: "Varicella: centripetal (trunk), multiple stages simultaneously", explanation: "Rash pattern" },
        ],
        keyPoints: [
          "Measles: respiratory epithelium → secondary viremia → systemic",
          "IgG appears at rash (immune-mediated rash appears), IgM diagnostic",
          "T-cell immunity critical for measles recovery",
          "Rubella: milder systemic illness, high teratogenic risk 1st trimester",
          "Varicella: centripetal distribution, multiple stages present simultaneously",
          "Varicella vesicular fluid infectious, recurrent crops for 3-5 days",
          "Measles giant cell pneumonia in immunocompromised (high mortality)",
          "Varicella reactivation in older adults/immunocompromised (herpes zoster)",
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Mechanisms of Childhood Infections", edition: "9th" },
          { book: "Guyton Physiology", chapter: "Immune Response to Infection", edition: "13th" },
        ],
      },
      {
        layer: 3,
        slug: "childhood-exanthems-layer-3-clinical",
        title: "Childhood Exanthems - Clinical Assessment",
        estimatedMinutes: 25,
        summary: "Clinical differentiation of exanthems, characteristic rash patterns, diagnostic features, and complications assessment.",
        contentMd: `# Childhood Exanthems - Clinical Assessment

## Measles Clinical Features

**Prodromal phase (2-4 days before rash)**:
- Fever, high (39-40°C)
- Cough (persistent, "barking")
- Coryza (runny nose)
- Conjunctivitis (red eyes, watery)
- Koplik spots (pathognomonic): white spots on buccal mucosa opposite molars, appear 2-3 days before rash

**Rash phase**:
- Appears on day 4-5 of illness
- Maculopapular (red, raised bumps)
- Cephalocaudal spread: forehead → face → trunk → extremities
- Rash fades cephalocaudally
- May have petechial quality in severe cases
- Fever continues or rises further initially

**Associated findings**:
- Generalized lymphadenopathy
- Hepatosplenomegaly
- Diarrhea, anorexia

## Rubella Clinical Features

**Prodrome** (usually minimal, 1-2 days):
- Low-grade fever (38-38.5°C)
- Mild coryza, sore throat
- Arthralgia/arthritis (more common in adults, especially women)

**Rash phase**:
- Pink/red maculopapular rash
- Starts on face, spreads to trunk and extremities
- Finer than measles, does not coalesce
- Duration: 3 days (also called "3-day measles")
- Often fades centrally first (different from measles)

**Associated findings**:
- Cervical lymphadenopathy (prominent)
- Mild conjunctivitis (less than measles)
- Rash often absent in vaccinated individuals despite infection

## Varicella Clinical Features

**Prodrome** (1-2 days, shorter than other exanthems):
- Fever (moderate, 38-39°C)
- Malaise, myalgia
- Headache

**Rash phase**:
- Starts on trunk, spreads to face and extremities
- **Centripetal distribution** (trunk-predominant)
- **Multiple stages simultaneously**: macules → papules → vesicles (clear fluid, "dew drop on rose petal") → crusts → scabs
- Recurrent crops: new lesions continue to appear for 3-5 days
- Intense itching (major symptom)
- Fever may last entire duration of rash appearance

**Associated findings**:
- Oral mucosal involvement (intraoral vesicles)
- Vaginal involvement in females
- Generally milder systemic symptoms than measles

## Differential Diagnosis Features

| Feature | Measles | Rubella | Varicella |
|---------|---------|---------|-----------|
| **Fever** | High | Low-grade | Moderate |
| **Prodrome** | Prominent (3C's) | Minimal | Mild |
| **Rash pattern** | Cephalocaudal | Cephalocaudal | Centripetal |
| **Rash type** | Maculo-papular | Maculo-papular | Vesicular (multiple stages) |
| **Koplik spots** | Yes | No | No |
| **Pruritus** | No | Minimal | Severe |
| **Age groups** | Young children | School age | Young children/non-immune adults |
| **Duration** | 6-10 days | 3 days | 3-5 days new lesions |

## Diagnostic Methods

**Clinical diagnosis** (usually sufficient):
- History and characteristic rash pattern
- Prodromal features

**Serology** (confirmatory):
- **Measles**: IgM (acute infection), IgG (immunity)
- **Rubella**: IgM (acute), IgG (immunity)
- **Varicella**: IgM (acute), IgG (immunity, usually by 1 week)

**PCR/Direct detection**:
- Lesion scrapings (electron microscopy for varicella)
- Blood/CSF (measles, varicella if disseminated)`,
        mnemonics: [
          { text: "Measles = Koplik spots + 3C's (cough, coryza, conjunctivitis)", explanation: "Pathognomonic combination" },
          { text: "Rubella = 3-day rash + cervical lymph nodes", explanation: "Milder presentation" },
          { text: "Varicella = dew drop on rose petal + severe itching", explanation: "Vesicular pattern" },
        ],
        keyPoints: [
          "Measles: Koplik spots (white spots opposite molars) pathognomonic",
          "Measles: cephalocaudal spread, high fever, fades in same direction",
          "Rubella: 3-day rash, low fever, cervical lymphadenopathy",
          "Varicella: centripetal distribution, multiple stages simultaneous",
          "Varicella vesicles: clear fluid 'dew drop on rose petal' appearance",
          "Varicella: intense pruritus, recurrent crops of new lesions",
          "Measles most severe systemic illness",
          "Rubella mildest unless pregnant (CRS risk)",
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Clinical Features of Exanthems", edition: "9th" },
          { book: "Harrison's Principles of Internal Medicine", chapter: "Viral Exanthems", edition: "21st" },
        ],
      },
      {
        layer: 4,
        slug: "childhood-exanthems-layer-4-exam",
        title: "Childhood Exanthems - Exam Prep",
        estimatedMinutes: 25,
        summary: "Management and prevention of exanthems, treatment of complications, vaccination strategies, and post-exposure prophylaxis.",
        contentMd: `# Childhood Exanthems - Management & Prevention

## Management by Exanthem

**Measles Management**:
- **Supportive care**: Fluids, antipyretics (paracetamol/ibuprofen)
- **Vitamin A supplementation**: Critical to prevent blindness (WHO recommends)
  - <6 months: 50,000 IU, days 1,2,15
  - 6-12 months: 100,000 IU, days 1,2,15
  - >12 months: 200,000 IU, days 1,2,15
- **Nutritional support**: Balanced diet (folate-rich foods for immune recovery)
- **Isolation**: Until 5 days after rash onset (infectious period)
- **Antibiotics**: Only if bacterial superinfection (URTI, pneumonia, otitis media)

**Rubella Management**:
- **Supportive care**: Rest, fluids, antipyretics
- **Antihistamines**: If pruritus present
- **Isolation**: 7 days from rash onset (less contagious after than measles)
- **Pregnancy management**: If exposed pregnant mother (test for immunity, immune globulin if non-immune, fetal monitoring)

**Varicella Management**:
- **Supportive care**: Cool baths, calamine lotion for itching
- **Antihistamines**: Diphenhydramine or cetirizine for pruritus
- **Antipyretics**: Paracetamol (avoid aspirin - Reye syndrome risk)
- **Antiviral therapy** (if indicated):
  - **Acyclovir** 20 mg/kg IV every 8 hours x 7 days (if <24 hours of rash onset, immunocompromised, varicella pneumonia)
  - Consider oral acyclovir in non-immunocompromised if <72 hours and high-risk complications
- **Isolation**: Until all vesicles crusted (typically 5-7 days after rash onset)
- **Antibiotics**: Only if secondary bacterial superinfection

## Complication Management

**Measles Pneumonia**:
- Antibiotic coverage: broad-spectrum (amoxicillin-clavulanate or respiratory fluoroquinolone)
- Oxygen support: maintain SpO2 >90%
- Hydration, nutritional support

**Measles Encephalitis**:
- Supportive care, seizure management
- No specific antiviral (supportive only)
- Recovery: 80-90% if treated supportively

**Varicella Pneumonia** (secondary bacterial):
- Broad-spectrum antibiotics
- Oxygen support
- ICU admission if severe

**Varicella Disseminated Disease** (immunocompromised):
- IV acyclovir 10-15 mg/kg every 8 hours
- ICU monitoring
- May need intubation support

## Vaccination Prevention

**MMR Vaccine Schedule** (India UIP):
- **9-12 months**: First dose
- **16-24 months**: Second dose
- **Coverage goal**: >95% for herd immunity

**Catch-up schedules** (non-immune adolescents/adults):
- Two doses, 4 weeks apart
- Both vaccines provide lifelong immunity

**Post-exposure Prophylaxis**:
- **MMR vaccine**: Within 72 hours of exposure (prevents ~90% of cases)
- **Varicella-zoster Immunoglobulin (VZIG)**: Within 96 hours for high-risk non-immune (immunocompromised, pregnant women, neonates) - prevents severe disease
- **Acyclovir**: Alternative for post-exposure varicella (if VZIG unavailable)

**Contraindications to MMR**:
- Severe egg allergy (mild OK)
- Immunocompromised status
- Recent blood transfusion/immunoglobulin (wait 3-11 months)
- Pregnancy

## Infection Control

**Measles**:
- Respiratory isolation (N95 mask)
- Duration: Until 5 days after rash onset

**Varicella**:
- Respiratory + contact precautions
- Duration: Until all vesicles crusted

**Rubella**:
- Respiratory isolation
- Duration: 7 days from rash onset`,
        mnemonics: [
          { text: "Measles: Vitamin A (days 1,2,15) prevents blindness", explanation: "Critical supplementation" },
          { text: "Varicella: AVOID aspirin (Reye syndrome risk)", explanation: "Use paracetamol" },
          { text: "MMR post-exposure: 72 hours, 90% prevention", explanation: "Timing critical" },
        ],
        keyPoints: [
          "Measles: vitamin A supplementation (critical), supportive care, isolation 5 days",
          "Vitamin A dosing: <6mo 50,000 IU, 6-12mo 100,000 IU, >12mo 200,000 IU",
          "Rubella: mild treatment (supportive), isolation 7 days",
          "Varicella: avoid aspirin (Reye syndrome), antihistamines for pruritus",
          "Varicella: acyclovir if <24h rash + risk factors",
          "MMR within 72h of exposure: 90% prevention",
          "VZIG within 96h for immunocompromised/pregnant non-immune",
          "Vaccination coverage >95% for herd immunity",
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Management of Exanthems", edition: "9th" },
          { book: "IAP Immunization Guidelines", chapter: "MMR & Varicella Vaccine", edition: "2023" },
        ],
      },
      {
        layer: 5,
        slug: "childhood-exanthems-layer-5-active-recall",
        title: "Childhood Exanthems - Active Recall",
        estimatedMinutes: 15,
        summary: "Clinical scenarios for exanthem diagnosis, management decisions, and complications handling.",
        contentMd: `# Active Recall: Childhood Exanthems

**Q1:** 3-year-old with 3-day history of high fever (39.5°C), cough, coryza, conjunctivitis. Today, red maculopapular rash on forehead spreading downward, small white spots on buccal mucosa opposite molars. Diagnosis?
> **Answer:** Measles (rubeola). Pathognomonic: Koplik spots (white spots on buccal mucosa) + classic prodrome (3 C's: cough, coryza, conjunctivitis) + cephalocaudal spread. Management: Vitamin A (200,000 IU on days 1, 2, 15 for >1 year age), supportive care, isolation for 5 days after rash onset. Assess for complications (pneumonia, otitis media, encephalitis).

**Q2:** 7-year-old with 1-day fever (38°C), mild sore throat, mild coryza. Today, fine pink maculopapular rash on face spreading to trunk and extremities, prominent cervical lymphadenopathy. Fever subsiding. Diagnosis?
> **Answer:** Rubella (German measles). Milder presentation than measles: low-grade fever, minimal prodrome, "3-day" rash duration (finer than measles). Management: Supportive care (fluids, antipyretics), mild antihistamines if pruritus. Isolation for 7 days. Confirm with serology if unsure (IgM positive). Very mild systemic illness.

**Q3:** 4-year-old with 1-day fever (38°C), malaise. Today, vesicular rash on trunk ("dew drop on rose petal appearance"), few lesions on face and extremities, intense itching. Simultaneously present: macules, papules, vesicles, crusts. Mother asks about aspirin for fever. Advice?
> **Answer:** Varicella (chickenpox). Centripetal distribution, multiple stages of lesions present simultaneously. DO NOT give aspirin (Reye syndrome risk), use paracetamol/ibuprofen instead. Calamine lotion, antihistamines (cetirizine) for pruritus. Supportive care. Isolation until all vesicles crusted (~5-7 days). If <24 hours of rash onset and risk factors (severe disease), consider acyclovir.

**Q4:** 2-year-old with measles, now with high fever (40°C), lethargy, unable to drink. CT not available, but clinical concern for encephalitis. Management?
> **Answer:** Measles encephalitis suspected (fever + neurological change during rash phase). No specific antiviral (measles encephalitis is immune-mediated, not direct viral). Management: (1) Supportive care critical: maintain hydration (IV fluids), manage seizures if present (benzodiazepines), cooling measures for fever, (2) Maintain oxygenation, (3) ICU monitoring if available, (4) Monitor for complications, (5) Mortality 10-20% even with supportive care, >80% recover without severe sequelae.

**Q5:** 3-year-old with varicella (day 5 of rash). Now with cough, fever (38.5°C), oxygen requirement (SpO2 88%). Chest X-ray shows infiltrates. Most likely diagnosis and management?
> **Answer:** Varicella pneumonia (secondary bacterial infection). Manage with: (1) Oxygen to maintain SpO2 >90%, (2) Antibiotics: broad-spectrum (amoxicillin-clavulanate or cephalosporin + macrolide), (3) Supportive care: hydration, antipyretics, (4) Consider ICU if SpO2 stays <90% despite oxygen, (5) Avoid aspirin. Duration: 10-14 days antibiotics depending on severity.

**Q6:** 9-month-old with fever, cough, coryza, conjunctivitis. Buccal mucosa shows white spots opposite molars. Mother wants to know prognosis and if need special treatment. Has NOT received measles vaccine yet.
> **Answer:** Measles in 9-month-old (high-risk age). Give Vitamin A supplementation: 50,000 IU on days 1, 2, and day 15 (prevents blindness, reduces mortality). Supportive care critical. Monitor closely for complications: pneumonia (most common), otitis media, diarrhea, encephalitis. Risk of death higher in young children and malnourished. Consider vitamin A repletion if deficiency signs (dry eyes, Bitot spots).

**Q7:** 5-year-old exposed to measles 2 days ago (sibling). Non-immune to measles (parent prefers no vaccine but now wants post-exposure prevention). Can we give MMR now?
> **Answer:** YES. MMR vaccine within 72 hours of measles exposure is 90% effective at preventing disease (window closes at 72 hours). Give MMR now. This is appropriate post-exposure prophylaxis. If already developed fever/rash, vaccine won't help but prophylaxis was time-sensitive opportunity. Educate parent on importance of childhood vaccines for future siblings.

**Q8:** Pregnant woman (8 weeks) exposed to rubella. Immunity testing shows she is non-immune to rubella (IgG negative). What's risk and management?
> **Answer:** High risk for congenital rubella syndrome (CRS): 80-90% of fetuses infected if exposed in first trimester. Management: (1) Test for active rubella infection (IgM - if positive, confirms infection), (2) Counsel on risk of congenital rubella syndrome (cardiac defects, blindness, deafness, developmental delay), (3) Offer Rubella-zoster Immunoglobulin (VZIG) if available and within 96 hours (may decrease but not eliminate risk), (4) Detailed fetal monitoring/ultrasound (cardiac malformations), (5) Offer termination if defects found (discuss with parents), (6) If pregnancy continues, monitor fetal development closely, plan delivery at center with NICU capability.

**Q9:** 2-year-old with measles pneumonia (presenting day 6 of illness). CRP 40 mg/L, fever 39.5°C, oxygen requirement 40% FiO2 to maintain SpO2 92%. Culture not done. Empiric antibiotics given. Now develops petechial rash over arms. Concern for sepsis?
> **Answer:** Petechial rash with high fever during measles suggests: (1) Measles vasculitis (petechial component of measles rash, immune-mediated), (2) Secondary bacterial sepsis is possible (meningococcemia would be rapidly progressive, usually purpura not petechiae, need blood cultures), (3) Thrombocytopenia from measles (immune-mediated), (4) Management: Continue broad-spectrum antibiotics + supportive care, check CBC (platelets), blood cultures if not done, consider second antibiotic if signs of progression, ICU monitoring, manage coagulopathy if DIC develops.

**Q10:** 8-year-old with varicella on day 3 of rash. Normal immune system. Parents ask when she can return to school. All vesicles NOT yet crusted (still fluid-filled). Advice?
> **Answer:** Not yet ready for school. Contagious until all vesicles are completely crusted over (typically 5-7 days after rash onset on day 3 now = 2-4 more days). Respiratory + contact precautions advised. Can return to school when all lesions crusted. Home care: continue supportive treatment, calamine lotion, antihistamines for itching, paracetamol for fever (never aspirin). Close monitoring for secondary bacterial infection (purulent appearance of vesicles).`,
        mnemonics: [
          { text: "Koplik spots = white spots on buccal mucosa (Measles pathognomonic)", explanation: "Diagnostic sign" },
          { text: "Rubella = cervical lymphadenopathy + 3-day rash", explanation: "Milder presentation" },
          { text: "Varicella = centripetal + multiple stages + intense itch", explanation: "Characteristic pattern" },
          { text: "Measles: Vitamin A (prevent blindness), Varicella: NO aspirin (Reye risk)", explanation: "Key management points" },
        ],
        keyPoints: [
          "Measles: Koplik spots pathognomonic, high fever, cephalocaudal rash",
          "Vitamin A supplementation (days 1, 2, 15) critical for measles",
          "Rubella: milder (low fever, cervical lymph nodes), 3-day rash duration",
          "Varicella: centripetal distribution, multiple stages simultaneous, intense pruritus",
          "Measles complications: pneumonia (most common), otitis, encephalitis",
          "Varicella complications: secondary bacterial pneumonia, Reye syndrome (aspirin association)",
          "Measles encephalitis: immune-mediated, supportive care only",
          "Varicella: AVOID aspirin (Reye syndrome), use paracetamol",
          "MMR within 72h post-exposure: 90% prevention",
          "Isolation: measles 5 days, rubella 7 days, varicella until crusted",
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Case Studies in Exanthems", edition: "9th" },
        ],
      },
    ],
  },
];

export default pediatricsLessonsPartTen;
