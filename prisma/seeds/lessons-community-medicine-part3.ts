import type { TopicLessons } from "./content-loader";

export const communityMedicinePart3Lessons: TopicLessons[] = [
  {
    topicCode: "CM-MOD-02-TOP-05",
    layers: [
      {
        layer: 1,
        slug: "hepatitis-typhoid-polio-layer-1-foundation",
        title: "Hepatitis, Typhoid & Polio - Foundation",
        estimatedMinutes: 20,
        summary: "Epidemiology and transmission of hepatitis, typhoid, and polio in India.",
        contentMd: `# Hepatitis, Typhoid & Polio - Foundation

## Hepatitis Overview
### Viral Hepatitis Types
- **Hepatitis A (HAV)**: Fecal-oral; acute only; endemic in India
- **Hepatitis B (HBV)**: Blood-borne; chronic risk; vaccine-preventable
- **Hepatitis C (HCV)**: Blood-borne; chronic common; India: 6.3% seroprevalence
- **Hepatitis E (HEV)**: Fecal-oral; endemic in India; pregnant women at risk
- **Hepatitis D (HDV)**: Requires HBV; blood-borne

### India-Specific Burden
- **HAV**: Endemic; 100-200 million infected adults (lifelong immunity)
- **HBV**: 4% population seropositive; 40 million chronic HBsAg carriers
- **HEV**: 30-40% adult seroprevalence; outbreaks common
- **HCV**: 10-12 million infected; mostly asymptomatic

## Typhoid Fever
### Epidemiology
- **Incidence**: 150,000 deaths globally/year
- **India burden**: Leading cause of febrile illness in many regions
- **Causative agent**: Salmonella typhi (human-restricted pathogen)
- **Transmission**: Fecal-oral via contaminated water/food
- **Reservoir**: Humans; chronic carriers (5-10%)
- **Risk**: Malnutrition, immunosuppression, delayed antibiotics

### Clinical Burden
- **Attack rate**: 1:1000 exposed in high-burden areas
- **Mortality**: 1-4% (untreated: 20-30%)
- **Complications**: Intestinal perforation, encephalitis, myocarditis

## Polio Overview
### Global Eradication Progress
- **Cases 1988**: 125,000/year globally
- **Cases 2024**: 0 (endemic eradication achieved)
- **Status**: Only endemic in few countries; India polio-free since 2011
- **Vaccine**: Oral polio vaccine (OPV) + Inactivated polio vaccine (IPV)

### Disease Burden (Pre-vaccine era)
- **Infantile paralysis**: Age <5 years primarily affected
- **Mortality**: 5-10% of paralytic cases
- **Disability**: Lifelong paralysis from spinal cord involvement
`,
        mnemonics: [
          {
            text: "Hepatitis transmission = HAV/HEV (fecal-oral), HBV/HCV/HDV (blood-borne)",
            explanation: "Key transmission routes for different hepatitis viruses"
          },
          {
            text: "Typhoid = Salmonella typhi, fecal-oral, 5-10% chronic carriers",
            explanation: "Key epidemiological features of typhoid"
          },
          {
            text: "Polio = Poliovirus, vaccine-preventable, India polio-free since 2011",
            explanation: "Current status of polio in India"
          }
        ],
        keyPoints: [
          "Hepatitis A & E: Fecal-oral transmission; endemic in India",
          "Hepatitis B & C: Blood-borne; chronic infection risk",
          "HBV: 40 million chronic carriers in India",
          "Typhoid: Salmonella typhi; human reservoir with carriers",
          "Typhoid mortality: 1-4% treated, 20-30% untreated",
          "Polio: Vaccine-preventable; India polio-free since 2011"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Viral Hepatitis and Enteric Infections", edition: "26th" },
          { book: "Mahajan & Gupta Textbook of Preventive & Social Medicine", chapter: "Communicable Diseases", edition: "5th" }
        ]
      },
      {
        layer: 2,
        slug: "hepatitis-typhoid-polio-layer-2-mechanism",
        title: "Hepatitis, Typhoid & Polio - Mechanism",
        estimatedMinutes: 25,
        summary: "Pathophysiology and immune mechanisms of these diseases.",
        contentMd: `# Hepatitis, Typhoid & Polio - Mechanism

## Hepatitis Pathophysiology

### HAV Infection
- **Replication**: Small intestine epithelium first, then liver
- **Immune response**: IgM antibodies (acute phase), IgG (lifelong immunity)
- **Outcome**: Acute hepatitis; self-limited; no chronic infection
- **Duration**: Symptoms 1-2 weeks; recovery within 4 weeks

### HBV Infection
- **Replication**: Hepatocytes; immune attack causes inflammation
- **Acute HBV**: 90% recover completely (adults)
- **Chronic HBV**: 10% (adult infection) to 90% (neonatal infection)
- **Progression**: Chronic → active hepatitis → cirrhosis → HCC

### HEV Infection
- **High mortality in pregnancy**: 15-25% (especially third trimester)
- **Immune response**: Similar to HAV; lifelong immunity
- **Fecal-oral transmission**: Common in poor sanitation
- **Outbreak pattern**: Waterborne epidemics in contaminated water

## Typhoid Pathophysiology

### Infection Process
1. **Ingestion**: Via contaminated water/food
2. **Invasion**: Penetration through Peyer's patches (small intestine)
3. **Bacteremia**: 1st week (clinical symptoms appear)
4. **Rose spots**: Maculopapular rash on trunk (salmonellae in endothelium)
5. **Complications**: Intestinal ulceration → perforation (week 3-4)

### Host Response
- **Immune suppression**: Relative lymphopenia during illness
- **Delayed cellular immunity**: Impairs antityphoid response
- **Carrier state**: Chronic biliary colonization (5-10% cases)

## Polio Pathophysiology

### Poliovirus Infection
1. **Primary replication**: Oropharynx and intestinal epithelium
2. **Viremia**: Spread to blood, lymphoid tissue
3. **Neural invasion**: Retrograde via motor nerve endings → anterior horn motor neurons
4. **Neuronal destruction**: Acute motor neuron necrosis
5. **Paralysis**: Flaccid paralysis from denervation atrophy

### Clinical Manifestations
- **Minor illness (90%)**: Fever, sore throat, myalgia; recovery in 1-2 weeks
- **Non-paralytic poliomyelitis (1%)**: Aseptic meningitis
- **Paralytic poliomyelitis (1%)**: Spinal cord motor neuron involvement
- **Bulbar polio**: Cranial nerve dysfunction; respiratory paralysis risk

## Immune Mechanisms

### HAV/HEV Immunity
- **IgM response**: Early, acute phase indicator
- **IgG response**: Long-term immunity (lifelong)
- **Vaccination**: Inactivated vaccine; induces IgG

### HBV Immunity
- **HBsAg**: Viral surface antigen; indicates active infection/carrier
- **Anti-HBs**: Protective antibody; indicates immunity
- **HBeAg**: Marker of high infectivity
- **Vaccination**: Recombinant vaccine; prevents 95% of infections

### Polio Immunity
- **OPV (Oral Polio Vaccine)**: Live attenuated; induces mucosal + systemic immunity
- **IPV (Inactivated Polio Vaccine)**: Inactivated virus; induces serum antibodies
- **Herd immunity threshold**: 95% population vaccination
- **Post-vaccination immunity**: Lifelong with boosters
`,
        mnemonics: [
          {
            text: "HAV/HEV = Fecal-oral, Acute only, Lifelong immunity (IgG)",
            explanation: "Similar characteristics of hepatitis A and E"
          },
          {
            text: "HBV progression = Chronic (10% adults) → Active hepatitis → Cirrhosis → HCC",
            explanation: "Natural history of chronic HBV"
          },
          {
            text: "Polio paralysis = Motor neuron destruction → Flaccid paralysis (anterior horn)",
            explanation: "Mechanism of polio-induced paralysis"
          }
        ],
        keyPoints: [
          "HAV: Acute hepatitis; self-limited; no chronic infection",
          "HBV: 10% adults develop chronic infection; risk of cirrhosis/HCC",
          "HEV: Similar to HAV but high maternal mortality in pregnancy",
          "Typhoid: Intestinal invasion → bacteremia → rose spots → complications",
          "Carrier state: 5-10% develop chronic colonization (biliary)",
          "Polio: Flaccid paralysis from anterior horn motor neuron destruction",
          "Polio immunity: OPV better for gut immunity; IPV safer for immunocompromised"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Pathophysiology of Viral Hepatitis", edition: "26th" },
          { book: "Mahajan & Gupta Textbook of Preventive & Social Medicine", chapter: "Mechanism of Communicable Diseases", edition: "5th" }
        ]
      },
      {
        layer: 3,
        slug: "hepatitis-typhoid-polio-layer-3-clinical",
        title: "Hepatitis, Typhoid & Polio - Clinical Application",
        estimatedMinutes: 25,
        summary: "Diagnosis, treatment, and control programs in India.",
        contentMd: `# Hepatitis, Typhoid & Polio - Clinical Application

## Hepatitis Diagnosis and Management

### Serological Diagnosis
**HAV:**
- **Acute HAV**: IgM anti-HAV positive
- **Recovered**: IgG anti-HAV positive
- **Vaccination**: Anti-HAV IgG (post-vaccine)

**HBV:**
- **HBsAg positive**: Active infection or carrier
- **HBeAg positive**: High infectivity (active replication)
- **Anti-HBs**: Immunity (post-vaccine or recovered)
- **Anti-HBc**: Past/present infection

**HCV:**
- **Anti-HCV**: Present in 80% by week 8
- **HCV RNA**: Indicates active infection (quantitative PCR)
- **Genotype**: Guides treatment selection

### Treatment
- **HAV**: Supportive (fluid, electrolytes, rest)
- **HBV**: Antiviral (tenofovir, entecavir) if active hepatitis or cirrhosis
- **HCV**: Direct-acting antivirals (DAAs) - >95% cure

## Typhoid Diagnosis and Management

### Clinical Diagnosis
**Week 1-2:** Fever, headache, myalgia, relative bradycardia, rose spots
**Week 2-3:** Abdominal pain, diarrhea/constipation, hepatosplenomegaly, delirium
**Week 3-4:** Complications (perforation, encephalitis, myocarditis)

### Laboratory Diagnosis
- **Blood culture**: Gold standard; positive 80% first week
- **Urine/stool culture**: Positive in weeks 2-3
- **Widal test**: Limited sensitivity/specificity
- **Rapid antigen detection**: PCR-based tests

### Treatment
- **Antibiotics**: Ceftriaxone (1st-line), fluoroquinolone (resistance increasing)
- **Duration**: 7-14 days based on severity
- **Supportive care**: Fluids, nutrition, antipyretics
- **Carrier treatment**: Prolonged antibiotics + cholecystectomy (if carrier state)

## Polio Control in India

### Vaccination Strategy (UIP)
**OPV (Oral Polio Vaccine):**
- **IPV series**: 3 doses at 6, 10, 14 weeks
- **Booster doses**: 18-24 months and 4-6 years
- **Pulse Polio campaigns**: Catch-up immunization

**Current approach (India 2-1-2):**
- 2 IPV doses at 6, 10 weeks
- 1 OPV dose at 14 weeks
- 2 IPV boosters at 18-24 months and 4-6 years

### Surveillance
- **AFP (Acute Flaccid Paralysis) surveillance**: Case investigations
- **Environmental surveillance**: Wastewater monitoring
- **Immunization verification**: Coverage surveys

### India's Success
- **Last case**: 2011 (West Bengal)
- **Polio-free status**: Since 2014 (WHO certified)
- **Vaccination coverage**: >95% with routine immunization
- **Key success factors**: ASHA mobilization, mass campaigns, surveillance

## Prevention and Control Programs

### Hepatitis Prevention
- **HAV vaccine**: Recommended for travelers, high-risk groups
- **HBV vaccine**: Universal immunization (birth dose + 3 doses; UIP coverage >90%)
- **HEV vaccine**: Available but not in routine immunization yet
- **Water safety**: Boiling, chlorination reduces transmission

### Typhoid Prevention
- **Sanitation**: Improved water supply, sewage disposal
- **Food safety**: Proper cooking, storage, handling
- **Typhoid vaccine**: Vi polysaccharide; 70-80% efficacy; recommended for travelers
- **Carrier management**: Identification, treatment, dietary restrictions

### Polio Prevention
- **OPV/IPV**: Universal immunization program
- **Mass campaigns**: Pulse Polio campaigns (catch-up + regular immunization)
- **Surveillance**: AFP cases monitored; environmental surveillance done
- **Global eradication**: India certified polio-free; maintained through immunization
`,
        mnemonics: [
          {
            text: "HAV diagnosis = IgM (acute), IgG (immunity); HBV = HBsAg (active), Anti-HBs (immunity)",
            explanation: "Key serological markers"
          },
          {
            text: "Typhoid progression = Week 1-2 (fever), Week 2-3 (GI), Week 3-4 (complications)",
            explanation: "Clinical progression by week"
          },
          {
            text: "Polio vaccination = IPV (6,10w) + OPV (14w) + IPV boosters (18m, 4-6y)",
            explanation: "Current India 2-1-2 strategy"
          }
        ],
        keyPoints: [
          "HAV serology: IgM acute, IgG immunity; lifelong protection after infection",
          "HBV: HBsAg indicates active infection; Anti-HBs indicates immunity",
          "HEV: High maternal mortality; outbreaks common from contaminated water",
          "Typhoid diagnosis: Blood culture (gold standard) in early weeks",
          "Typhoid treatment: Antibiotics 7-14 days; 1-4% mortality with treatment",
          "Polio: OPV preferred in high-endemic areas; IPV for immunocompromised",
          "India polio-free since 2011; maintained through >95% immunization coverage",
          "Surveillance critical: AFP monitoring and environmental wastewater testing",
          "Hepatitis B vaccination: Universal; >90% coverage in India",
          "Typhoid vaccination: Recommended for travelers (70-80% efficacy)"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Viral Hepatitis and Typhoid Control", edition: "26th" },
          { book: "Mahajan & Gupta Textbook of Preventive & Social Medicine", chapter: "Management of Communicable Diseases", edition: "5th" }
        ]
      },
      {
        layer: 4,
        slug: "hepatitis-typhoid-polio-layer-4-exam",
        title: "Hepatitis, Typhoid & Polio - Exam Preparation",
        estimatedMinutes: 20,
        summary: "Quick reference and commonly tested concepts.",
        contentMd: `# Hepatitis, Typhoid & Polio - Exam Preparation

## Quick Reference: Hepatitis Viruses

| Virus | Transmission | Incubation | Acute | Chronic | Vaccine |
|-------|-------------|-----------|-------|---------|---------|
| HAV | Fecal-oral | 15-50 days | Yes | No | Inactivated |
| HBV | Blood/Sexual | 45-180 days | Yes | 10% adults | Recombinant |
| HCV | Blood | 14-180 days | Mild | 80% | None yet |
| HEV | Fecal-oral | 15-64 days | Yes | No (except immunocompromised) | Available |
| HDV | Blood (needs HBV) | Variable | Yes | Possible | HBV vaccine |

## Hepatitis Serology Interpretation

| Marker | Meaning |
|--------|---------|
| IgM anti-HAV | Acute HAV infection |
| IgG anti-HAV | HAV immunity (past or vaccine) |
| HBsAg positive | Active HBV infection or carrier |
| Anti-HBs positive | HBV immunity |
| HBeAg positive | High HBV infectivity |
| Anti-HCV positive | HCV infection (80% by week 8) |

## Typhoid Quick Facts

| Parameter | Details |
|-----------|---------|
| Causative agent | Salmonella typhi (gram-negative) |
| Transmission | Fecal-oral (contaminated water/food) |
| Incubation period | 6-30 days (average 10-14 days) |
| Attack rate | 1:1000 exposed (high burden areas) |
| Mortality | 1-4% (treated); 20-30% (untreated) |
| Carrier state | 5-10% of cases |
| Diagnosis | Blood culture (gold standard) |
| Treatment | Antibiotics (7-14 days) |

## Polio Control in India

| Aspect | Details |
|--------|---------|
| Last case | 2011 (West Bengal) |
| Polio-free status | Since 2014 (WHO certified) |
| Current vaccines | IPV (inactivated) + OPV (oral) |
| Strategy | 2-1-2 (2 IPV, 1 OPV, 2 IPV boosters) |
| Coverage target | >95% for herd immunity |
| Surveillance | AFP monitoring + environmental testing |

## Common Exam Questions

**Q1: Differences between HAV and HBV transmission and outcomes.**
A: HAV - fecal-oral, acute only, 100% recover, lifelong immunity. HBV - blood/sexual contact, 10% chronic in adults, risk of cirrhosis/HCC.

**Q2: What does HBsAg positive indicate?**
A: Active HBV infection or chronic carrier state. Anti-HBs positive indicates immunity (from infection recovery or vaccination).

**Q3: India's polio vaccination strategy and achievements.**
A: 2-1-2 strategy (2 IPV at 6,10w; 1 OPV at 14w; 2 IPV boosters). India polio-free since 2011, certified in 2014. Maintained through >95% coverage.

**Q4: How is typhoid diagnosed and what is the mortality rate?**
A: Blood culture (gold standard, 80% positive first week). Mortality 1-4% with antibiotics; 20-30% untreated.

**Q5: Explain hepatitis B chronic infection and complications.**
A: 10% of adults develop chronic HBV. Progression: Chronic carrier → active hepatitis → cirrhosis → hepatocellular carcinoma (HCC).

**Q6: What is the clinical progression of typhoid by week?**
A: Week 1-2 (fever, headache, myalgia); Week 2-3 (abdominal symptoms, rose spots); Week 3-4 (complications: perforation, encephalitis).

**Q7: Compare OPV and IPV in polio vaccination.**
A: OPV - live oral, better mucosal immunity, preferred in endemic areas. IPV - inactivated, safer, preferred for immunocompromised.

**Q8: What is HAV serology in acute infection vs immunity?**
A: Acute - IgM anti-HAV positive. Immunity - IgG anti-HAV positive (lifelong after infection or vaccination).

**Q9: Carrier state in typhoid - incidence and management.**
A: 5-10% develop chronic carrier state (biliary colonization). Identified by prolonged bacterial shedding. Treatment: Prolonged antibiotics ± cholecystectomy.

**Q10: Describe India's polio surveillance system.**
A: AFP (Acute Flaccid Paralysis) surveillance tracks paralytic cases. Environmental surveillance monitors wastewater. Ensures early detection of any poliovirus circulation.
`,
        mnemonics: [
          {
            text: "Hepatitis transmission = HAV/HEV (fecal-oral), HBV/HCV/HDV (blood-borne)",
            explanation: "Key transmission routes"
          },
          {
            text: "HBV progression = Active → Cirrhosis → HCC (10% chronic in adults)",
            explanation: "Natural history of chronic HBV"
          },
          {
            text: "India polio = Polio-free 2011, certified 2014, maintained through >95% vaccination",
            explanation: "Status and surveillance success"
          }
        ],
        keyPoints: [
          "HAV: Fecal-oral, acute only, lifelong immunity post-infection",
          "HBV: 10% chronic in adults; risk of cirrhosis/HCC",
          "HCV: 80% chronic; DAAs cure >95%",
          "HEV: Similar to HAV but high maternal mortality",
          "Typhoid: Blood culture gold standard; 1-4% mortality with antibiotics",
          "Typhoid carrier: 5-10% develop chronic state; require prolonged treatment",
          "Polio: India polio-free since 2011; maintained with 2-1-2 vaccination strategy",
          "AFP surveillance: Monitors paralytic cases for early detection",
          "HBV vaccine: Universal immunization; >90% coverage in India",
          "Typhoid vaccine: Recommended for travelers (70-80% efficacy)"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Communicable Diseases", edition: "26th" }
        ]
      },
      {
        layer: 5,
        slug: "hepatitis-typhoid-polio-layer-5-active-recall",
        title: "Hepatitis, Typhoid & Polio - Active Recall",
        estimatedMinutes: 15,
        summary: "Self-assessment on hepatitis, typhoid, and polio.",
        contentMd: `# Hepatitis, Typhoid & Polio - Active Recall

## Q&A for Self-Assessment

**Q1: Compare HAV and HEV - transmission, incubation, outcomes, vaccine status.**
A: Both fecal-oral transmission. HAV incubation 15-50 days, HEV 15-64 days. Both acute only with lifelong immunity. Both endemic in India. HAV vaccine part of routine (private); HEV vaccine available but not routine. HEV has high maternal mortality.

**Q2: Explain HBV chronic infection - percentage of adults, progression, complications.**
A: 10% of adults develop chronic HBV (higher in children). Progression: Chronic carrier (asymptomatic) → chronic active hepatitis → cirrhosis → hepatocellular carcinoma. Complications: liver failure, variceal bleeding, HCC.

**Q3: What is difference between HBsAg and Anti-HBs?**
A: HBsAg = hepatitis B surface antigen; present in active infection/chronic carrier; indicates infectivity. Anti-HBs = antibody to surface antigen; indicates immunity (from prior infection or vaccination).

**Q4: Describe clinical progression of typhoid by week.**
A: Week 1-2: Fever, headache, myalgia, relative bradycardia, rose spots begin. Week 2-3: Peak symptoms, abdominal pain, diarrhea/constipation, hepatosplenomegaly, abdominal distension. Week 3-4: Complications (intestinal perforation), encephalitis, myocarditis if untreated.

**Q5: How is typhoid diagnosed and what is sensitivity of each test?**
A: Blood culture = gold standard (80% positive week 1, 50% week 2, 20% week 3). Widal test = low sensitivity/specificity (not recommended alone). Rapid PCR = high sensitivity/specificity. Urine/stool culture = positive weeks 2-3.

**Q6: Explain carrier state in typhoid - development, management, public health significance.**
A: 5-10% of typhoid cases develop chronic carrier state (Salmonella in biliary tract). Chronic shedding in stool. Treatment: Prolonged antibiotics (4-12 weeks) or cholecystectomy. Public health significance: source of transmission in community.

**Q7: What are the UIP vaccinations for polio and current strategy?**
A: IPV at 6 weeks, 10 weeks; OPV at 14 weeks; IPV booster at 18-24 months and 4-6 years. Strategy called 2-1-2. Additional Pulse Polio campaigns provide OPV doses. >95% coverage achieves herd immunity.

**Q8: Explain why India declared polio-free status and how it was maintained.**
A: Last case 2011 (West Bengal). Certified polio-free by WHO in 2014. Maintained through: robust immunization program (>95% coverage), comprehensive AFP surveillance (detects paralytic cases), environmental surveillance (wastewater monitoring), mass vaccination campaigns.

**Q9: Discuss OPV vs IPV - advantages, disadvantages, current strategy.**
A: OPV (oral): Live attenuated, good mucosal immunity, mass immunization easy, cheaper, but rare VAPP risk (vaccine-associated paralysis). IPV (inactivated): Safer (no VAPP), systemic immunity only, requires injections, more expensive. Current India strategy combines both (2-1-2).

**Q10: Describe HAV serology interpretation in different scenarios.**
A: Acute HAV infection = IgM anti-HAV positive (disappears in 3-6 months). Recovered or vaccinated = IgG anti-HAV positive (lifelong). Never infected/vaccinated = both negative. IgM + IgG = acute infection with developing immunity.

**Q11: Explain HCV diagnosis and treatment advances.**
A: Anti-HCV positive in 80% by week 8. HCV RNA confirms active infection. Genotype testing guides treatment. Direct-acting antivirals (DAAs) cure >95% of cases (vs only 50% with interferon). Treatment duration 8-12 weeks.

**Q12: What is the role of water and sanitation in typhoid and hepatitis control?**
A: Fecal-oral transmission requires contaminated water. Improved water supply (treatment, storage), sewage disposal (sanitation), and hygiene reduce incidence dramatically. Both typhoid and hepatitis E (and hepatitis A) prevention depend on sanitation infrastructure.

**Q13: Discuss hepatitis B vaccination - coverage, effectiveness, schedule, significance.**
A: Birth dose (protects against vertical transmission), plus 3 doses at 6, 10, 14 weeks. 95% efficacy in preventing HBV infection. India UIP coverage >90%. Significant reduction in chronic HBV in vaccinated cohorts.

**Q14: Explain complications of typhoid and their public health impact.**
A: Intestinal perforation (week 3-4) = most common serious complication. Other complications: encephalitis (delirium, confusion), myocarditis (shock), hepatitis, thrombocytopenia. Early antibiotics reduce complications by 80%.

**Q15: What is the public health significance of HAV and HEV epidemiology in India?**
A: Both endemic (universal exposure in childhood in low-income communities). Adults have immunity. Paradox: Improved sanitation delays HAV/HEV exposure → more adults unimmune → risk of epidemic when exposed. Vaccination strategy needed for vulnerable populations.

**Q16: Explain triple serology (IgM, IgG, HBsAg) interpretation in hepatitis diagnosis.**
A: IgM anti-HAV alone = acute HAV. IgG anti-HAV + negative IgM = recovered HAV. HBsAg + IgM = acute HBV. HBsAg + IgG = chronic HBV. Use these patterns to distinguish acute vs chronic hepatitis.

**Q17: Discuss environmental surveillance for polio and its importance.**
A: Wastewater testing detects poliovirus before paralytic cases appear. Provides early warning of viral circulation. Critical in endemic/near-endemic areas. India's environmental surveillance network monitors major cities and airports.

**Q18: Describe India's polio eradication and maintenance strategy - what were key success factors?**
A: Success factors: (1) High vaccination coverage (>95%), (2) Supplementary immunization campaigns (Pulse Polio), (3) Comprehensive AFP surveillance (paralytic case detection), (4) Environmental surveillance (wastewater monitoring), (5) ASHA mobilization for community engagement, (6) Targeted immunization of vulnerable populations.
`,
        mnemonics: [
          {
            text: "Hepatitis = HAV/HEV (fecal-oral, acute), HBV (blood, chronic 10%), HCV (chronic 80%), HDV (needs HBV)",
            explanation: "Classification by transmission and outcome"
          },
          {
            text: "Typhoid weeks = 1-2 (fever), 2-3 (GI/rose spots), 3-4 (complications/perforation)",
            explanation: "Clinical progression"
          },
          {
            text: "Polio India = Last 2011, Certified 2014, 2-1-2 vaccination, >95% coverage",
            explanation: "India polio eradication timeline and strategy"
          }
        ],
        keyPoints: [
          "HAV: Fecal-oral, acute only, lifelong immunity, endemic in India",
          "HBV: Blood/sexual, 10% chronic in adults, 40 million carriers in India",
          "HCV: Blood, 80% chronic, 10-12 million infected in India, DAAs cure >95%",
          "HEV: Fecal-oral, similar to HAV but high maternal mortality (15-25%)",
          "Typhoid: Salmonella typhi, 1-4% mortality with antibiotics, 5-10% become carriers",
          "Typhoid complications: Perforation (common), encephalitis, myocarditis",
          "Polio: India polio-free since 2011, maintained with 2-1-2 vaccination strategy",
          "Serology interpretation: IgM (acute), IgG (immunity), HBsAg (active infection)",
          "HAV/HEV prevention: Improved sanitation, water treatment, hygiene",
          "Typhoid vaccination: 70-80% efficacy; recommended for travelers"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Viral Hepatitis, Typhoid, and Polio Control", edition: "26th" },
          { book: "Mahajan & Gupta Textbook of Preventive & Social Medicine", chapter: "Communicable Diseases Management", edition: "5th" }
        ]
      }
    ]
  }
];
