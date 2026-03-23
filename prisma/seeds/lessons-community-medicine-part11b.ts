import type { TopicLessons } from "./content-loader";

export const communityMedicineLessonsPartXIB: TopicLessons[] = [
  {
    topicCode: "CM-MOD-04-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "cm-immunization-layer-1-foundation",
        title: "Immunization (UIP, cold chain, schedule) - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of Universal Immunization Program (UIP) in India, vaccine types, cold chain infrastructure, immunization schedule, and importance of immunization in reducing vaccine-preventable disease burden.",
        contentMd: `# Immunization - Foundation

## Universal Immunization Program (UIP)

### Launched and Evolution
**Year**: 1978
**Current Status**: Comprehensive program integrated into National Health Mission

### Key Objectives
- Provide immunization against vaccine-preventable diseases (VPDs)
- Achieve and maintain high coverage (>90% target) in target population
- Reduce disease burden and mortality from preventable diseases
- Integrate with primary healthcare delivery systems
- Strengthen surveillance for VPDs

### Recent Focus
- Strengthening cold chain infrastructure (solar fridges, ice-lined refrigerators)
- Improving immunization coverage to >90%
- Adding new vaccines (rotavirus, pneumococcal, HPV)
- Strengthening disease surveillance and AEFI monitoring

## Vaccine-Preventable Diseases Burden in India

### Disease Statistics
**Tuberculosis**:
- Incidence: ~2.8 million cases/year
- Burden: Leading infectious disease cause of death
- BCG vaccination in UIP

**Poliomyelitis**:
- Status: India polio-free since 2014
- Last case: October 1999
- IPV vaccination in UIP; OPV phased out

**Measles/Measles-Rubella**:
- High mortality in unvaccinated children
- Complications: Encephalitis, blindness, death

**Hepatitis B**:
- Chronic carriers in India: ~50 million
- Risk of cirrhosis, hepatocellular carcinoma
- Vaccination universal in UIP

**Whooping Cough (Pertussis)**:
- Rare now due to DPT vaccination
- <1 year olds most vulnerable

## Types of Vaccines in UIP

### Live Attenuated Vaccines
**Mechanism**: Weakened form of pathogen; replicates in body

**Vaccines**: BCG (TB), OPV (polio), Measles/MR, Rotavirus, JE (endemic regions), Varicella

**Advantages**:
- Strong cellular and humoral immunity
- Long-lasting or lifelong protection
- Usually need 1-2 doses

**Disadvantages**:
- Contraindicated in immunocompromised (risk of vaccine-strain disease)
- More temperature-sensitive
- Risk of fever, mild rash (vaccine strain)

### Inactivated Vaccines
**Mechanism**: Killed pathogens or components

**Vaccines**: IPV (polio), DPT (component of pentavalent), Hepatitis B, PCV (pneumococcal), HPV

**Advantages**:
- Safe in immunocompromised individuals
- More stable (better for hot climates)
- No risk of vaccine-strain disease

**Disadvantages**:
- Weaker cellular immunity
- Require multiple doses and boosters
- Higher cost

### Toxoid Vaccines
**Mechanism**: Modified bacterial toxins

**Vaccines**: Tetanus (in DPT), Diphtheria (in DPT)

**Advantages**:
- Long-lasting antibody protection
- Safe in all populations
- Few adverse effects

## Cold Chain System

### Definition
System to maintain vaccine potency from manufacturer to person receiving vaccine through proper storage, transportation, and handling.

### Temperature Requirements
**National Level**: -20°C to -25°C (Deep freezer)
**State Level**: 2-8°C (Cold room)
**District/PHC Level**: 2-8°C (Refrigerator or Ice-Lined Refrigerator)
**Transport**: Cold carriers with ice packs

### Cold Chain Equipment
- **Deep freezers** (-20 to -25°C): National storage
- **Walk-in coolers**: State/district level
- **Refrigerators**: PHC level
- **Solar refrigerators**: Remote areas without electricity
- **Cool boxes/cold carriers**: Transport with ice packs
- **Cold chain handlers**: Trained personnel at each level

### Vaccine Vial Monitor (VVM)
**What it is**: Time-temperature integrator label on vaccine vial

**How it works**:
- Chemical indicator changes color with cumulative heat exposure
- Reversible indicator shows time-temperature history
- Not a predictor of future stability

**Interpretation**:
- **Yellow**: Vaccine OK for use
- **Brown/grey**: Heat damage, vaccine damaged, must discard

**Importance**: Allows identification of heat-damaged vaccines without temperature history

## Current UIP Immunization Schedule

### Birth
- **BCG**: Bacille Calmette-Guérin (TB) - SC left upper arm
- **Hepatitis B (Birth dose)**: IM injection

### 6 Weeks
- **Pentavalent-1** (DPT + HBV + Hib): IM anterolateral thigh
- **PCV-1** (Pneumococcal Conjugate Vaccine): IM thigh
- **Rotavirus-1**: Oral 2 drops

### 10 Weeks
- **Pentavalent-2**
- **PCV-2**
- **Rotavirus-2**

### 14 Weeks
- **Pentavalent-3**
- **PCV-3**
- **IPV-3** or **OPV-3** (based on state policy; IPV preferred)

### 6-9 Months
- **Measles/Measles-Rubella (MR)-1**: SC outer upper arm

### 9-12 Months
- **Japanese Encephalitis (JE)**: In endemic regions

### 16-24 Months
- **Pentavalent Booster-1**
- **PCV Booster**
- **Measles/MR-2**

### School Entry (5-6 Years)
- **DPT Booster-2**
- **OPV Booster**

### Adolescent (9-14 Years)
- **HPV Vaccine**: Girls only (2 doses, 6-month interval)

## Immunization Coverage in India

### Current Coverage (2023)
- **Full immunization** (children >1 year): ~85-90%
- **Partial/incomplete**: ~5-10%
- **Not immunized**: ~5-10%
- **Urban-rural divide**: Urban ~95%, Rural ~80%

### Target
- WHO target: >90% coverage for all vaccines

### Factors Affecting Coverage
- Accessibility (distance to health facility)
- Awareness and health literacy
- Vaccine availability and supply
- Health worker training
- Community acceptance`,
        mnemonics: [
          {
            text: "LIVE VACCINES (UIP): BCG, OPV, Measles, Rotavirus, JE (endemic regions), Varicella",
            explanation: "Live attenuated vaccines in UIP schedule"
          },
          {
            text: "INACTIVATED (UIP): IPV, Pentavalent (DPT+HB+Hib), Hepatitis B, PCV, HPV",
            explanation: "Inactivated vaccines in UIP schedule"
          },
          {
            text: "COLD CHAIN TEMPS: National -20/-25°C, State 2-8°C, District/PHC 2-8°C",
            explanation: "Temperature requirements at each level"
          },
          {
            text: "VVM COLOR: Yellow = OK use, Brown/Grey = Discard (heat-damaged)",
            explanation: "Vaccine vial monitor interpretation"
          }
        ],
        keyPoints: [
          "UIP launched 1978; provides vaccines for TB, polio, DPT, measles, hepatitis B, PCV, JE, HPV",
          "Live vaccines (BCG, OPV, measles) contraindicated in immunocompromised; inactivated safer",
          "Cold chain maintains 2-8°C from state to PHC; VVM monitors cumulative heat exposure",
          "Current coverage ~85-90%; target 90%+ for all vaccines",
          "Polio-free India since 2014; measles, diphtheria, pertussis rare due to immunization",
          "Schedule: Birth (BCG, HepB), 6-14w (pentavalent, PCV, rotavirus, IPV), 6-24m (measles, JE), school (booster), 9-14y girls (HPV)"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive and Social Medicine", chapter: "Immunization Program (Ch 5)", edition: "26th" },
          { book: "IAP Guidelines on Immunization", chapter: "UIP Schedule and Cold Chain", edition: "2023" }
        ]
      },
      {
        layer: 2,
        slug: "cm-immunization-layer-2-mechanism",
        title: "Immunization (UIP, cold chain, schedule) - Mechanism",
        estimatedMinutes: 25,
        summary: "Immunological basis of vaccination, antibody response, T-cell immunity, vaccine-induced protection, cold chain breakdown effects on vaccine potency, and immunization failures.",
        contentMd: `# Immunization - Mechanism

## Immune Response to Vaccination

### Innate Immune Response
**Timeline**: Minutes to hours after vaccine

**Components**:
- Recognition by pattern recognition receptors (TLRs, NOD-like receptors)
- Complement system activation (C3, C4, mannose-binding lectin)
- Dendritic cell activation and migration to lymphoid tissue
- Initial cytokine production (IL-12, TNF-α)

### Adaptive Immune Response - Primary (First Dose)

**T-cell Response**:
- **Th1 cells**: IL-2, IFN-γ production → cell-mediated immunity (important for live vaccines)
- **Th2 cells**: IL-4, IL-5, IL-10 production → antibody production
- **Cytotoxic T cells (CTLs)**: Kill infected cells (viral vaccines)
- **Memory T cells**: Long-lived protection

**B-cell Response**:
1. Germinal center formation in lymphoid tissues
2. B cell clonal expansion and differentiation
3. Plasma cells: Antibody secretion
4. Memory B cells: Long-term protection (months to years)
5. Class switching: IgM → IgG, IgA, IgE

### Timeline of Primary Response
- **Days 3-5**: IgM antibodies appear (short-lived, indicates acute infection)
- **Weeks 1-2**: IgG antibodies appear (long-lived, protective)
- **Peak response**: 2-4 weeks after vaccination
- **Plateau phase**: Maintained for months to years depending on vaccine

### Secondary Immune Response (Booster Doses)
- **Faster**: Memory B and T cells rapidly activate
- **Higher titers**: Antibody levels rise faster than primary response
- **Predominantly IgG**: Not IgM
- **More durable**: Better protection after booster
- **Faster anamnestic response**: Responds quickly to actual pathogen exposure

## Types of Immunity Induced by Different Vaccines

### Humoral Immunity (Antibody-Mediated)
**Mechanism**: Antibodies protect against extracellular pathogens

**Types of Protection**:
- **Neutralizing antibodies**: Block pathogen surface molecules, prevent binding and entry
- **Opsonizing antibodies**: Mark pathogen for destruction by phagocytes
- **Complement-fixing antibodies**: Activate complement cascade, direct cytolysis
- **Agglutinating antibodies**: Clump pathogens, prevent spread

**Vaccines**: Inactivated vaccines (hepatitis B, IPV, PCV, toxoids)
**Measure of Protection**: Antibody titers, seronversion

### Cell-Mediated Immunity (T-cell)
**Mechanism**: T cells protect against intracellular pathogens

**Components**:
- **Th1 response**: Activate macrophages via IFN-γ to kill infected cells
- **Cytotoxic T lymphocytes (CTLs)**: Direct killing of infected cells
- **Memory T cells**: Rapid response upon re-exposure

**Vaccines**: Live attenuated vaccines (BCG, measles, varicella)
**Advantage**: Provides protection even if antibody levels wane

### Mucosal Immunity
**Mechanism**: IgA antibodies in secretions provide local protection

**Sites**: Respiratory, GI, urogenital tracts

**Vaccines with mucosal immunity**:
- OPV (oral polio vaccine): Induces gut IgA
- Measles (nasal variant, if used): Respiratory IgA

## Live vs. Inactivated Vaccine Immunology

### Live Attenuated Vaccines
**Replication**: Pathogen replicates in host tissue
**Immune Response**: Strong cellular + humoral immunity
**Antibody Type**: IgG (good response)
**Cellular Response**: Strong Th1 (important for intracellular pathogens)
**Doses Needed**: Usually 1-2 doses sufficient
**Booster**: May be needed (e.g., measles booster, varicella)
**Mucosal Immunity**: Often present (OPV)
**Contraindication**: Immunocompromised (risk of vaccine-strain disease)
**Examples**: BCG, OPV, Measles, Varicella, Rotavirus

### Inactivated Vaccines
**Non-replication**: Killed pathogens or subunits
**Immune Response**: Primarily humoral immunity
**Antibody Type**: IgG (good for neutralization)
**Cellular Response**: Weak Th1 (limited cell-mediated immunity)
**Doses Needed**: Multiple doses and boosters required
**Schedule**: Primary series + boosters every 5-10 years
**Mucosal Immunity**: Typically absent or weak
**Safe in Immunocompromised**: Yes (inactivated safe, live contraindicated)
**Examples**: IPV, Hepatitis B, PCV, DPT, HPV

## Vaccine Potency and Cold Chain Failure

### Thermostability of Vaccines
**Heat-Sensitive (Live Vaccines)**:
- OPV: Loses potency rapidly at >30°C
- Measles: Sensitive to heat
- Rotavirus: Temperature-sensitive
- Varicella: Requires freezing

**More Stable**:
- Hepatitis B: More stable than live vaccines
- DPT: Relatively stable
- IPV: More stable than OPV

### Cold Chain Breakdown Effects

**Heat Exposure (>30°C for 3+ hours)**:
1. Protein denaturation: Loss of tertiary/quaternary structure
2. Loss of antigenic epitopes: Cannot be recognized by immune system
3. Reduced potency: Immunogenicity ↓ 50-90%
4. Clinical failure: Vaccinated person not protected
5. Silent loss: Vaccine appears normal but is damaged

**Freezing (Damage to Inactivated Vaccines)**:
1. Ice crystal formation in solution
2. Particle aggregation
3. Reduced immunogenicity
4. Potency loss

**Note**: OPV and measles more sensitive to freezing than inactivated vaccines

### Vaccine Vial Monitor (VVM) Mechanism
**Chemical Indicator**:
- Dye system sensitive to cumulative heat exposure
- Reversible color change (not permanent)
- Color indicates cumulative heat exposure

**Interpretation**:
- Yellow: Acceptable
- Brown/Grey: Damaged, discard
- Vaccine may be damaged even if VVM still yellow

**Limitations**:
- Does not predict future stability
- Heat damage is cumulative (small daily exposures)

## Immunization Schedule Principles

### Timing and Spacing of Doses

**Age-Appropriate Vaccination**:
- Infants (6 weeks onwards): Maternal antibodies waning, immune system competent
- Booster timing: When antibody levels decline below protective threshold
- Some vaccines need sequential priming (multiple doses)

**Spacing Between Doses**:
- **Live to live vaccine**: Minimum 4 weeks between doses
- **Inactivated to inactivated**: No minimum (can give same day or any interval)
- **Inactivated then live**: Can give same day or any interval
- **Live then inactivated**: Can give same day or any interval
- **After immune globulin**: Defer live vaccines 3-6 months

### Rationale for Dose Number and Schedule
1. **Priming**: First 1-2 doses build immunity
2. **Booster**: Recall response (faster, higher antibodies)
3. **Additional boosters**: Maintain immunity above protective threshold

## Immunization Failures

### Primary Failure (No Response to Vaccine)
**Causes**:
- **Vaccine factors**: Not potent (stored improperly, expired)
- **Administration factors**: Wrong route, site, technique, concurrent immunoglobulin
- **Host factors**: Immature immune system (newborns), immunodeficiency (HIV, malnutrition)

**Incidence**: 5-10% even with optimal vaccination (biological variation)

### Secondary Failure (Waning Immunity)
**Mechanism**: Antibodies naturally decline over time
**Timeline**: Months to years post-vaccination (depends on vaccine type)
**Solution**: Booster doses to maintain protective antibody levels
**Example**: Tetanus booster every 10 years

### Vaccine Efficacy and Effectiveness

**Efficacy**: Under ideal conditions (RCT)
- BCG: 60-80% protection against TB
- OPV: 99% effective for all 3 doses
- Measles: 95% protection with 2 doses
- DPT: 95-98% protection with complete series
- Hepatitis B: 95% protection in non-immunocompromised

**Effectiveness**: Real-world conditions (observational studies)
- Often lower than efficacy
- Depends on cold chain, storage, administration technique
- Affected by host factors (nutritional status, concurrent infections)

## Factors Affecting Vaccine Response

**Age**: Better response in older infants (6-12 months) vs. newborns
- Maternal antibodies interfere in early infancy
- But some vaccines (HBV) need early administration

**Nutritional Status**: Malnutrition impairs immune response
- Protein deficiency: ↓ Antibody production
- Micronutrient deficiency (zinc, vitamin A): ↓ Immune function
- Response improves with nutritional rehabilitation

**Concurrent Infections**: Active infection may reduce vaccine response
- Minor illnesses: No effect
- Severe infections: Defer non-urgent vaccines

**Route and Site**: Critical for potency
- **IM preferred**: Better immunogenicity than SC or ID
- **Correct site**: Anterolateral thigh (infants), deltoid (older)
- **Correct depth**: Into muscle (IM), not subcutaneous`,
        mnemonics: [
          {
            text: "PRIMARY RESPONSE TIMELINE: IgM days 3-5, IgG weeks 1-2, Peak 2-4 weeks",
            explanation: "Timeline of antibody appearance after first vaccination"
          },
          {
            text: "SECONDARY RESPONSE: Faster than primary, higher titers, mostly IgG",
            explanation: "Booster response characteristics"
          },
          {
            text: "LIVE VS INACTIVATED: Live (cellular+humoral, fewer doses, CI immunocompromised), Inactivated (humoral, multiple doses, safe immunocompromised)",
            explanation: "Key differences between vaccine types"
          },
          {
            text: "SPACING: Live-live 4w, Inactivated-inactivated any, Inactivated-live any, Live-inactivated any",
            explanation: "Vaccine spacing rules"
          }
        ],
        keyPoints: [
          "Primary immune response: IgM appears days 3-5 (short-lived); IgG weeks 1-2 (long-lived)",
          "Secondary response faster, higher titers, predominantly IgG (recall response)",
          "Live vaccines: Strong cellular immunity; Inactivated: Primarily humoral immunity",
          "Heat exposure (>30°C, 3+ hours) denatures proteins → loss of potency; VVM monitors cumulative heat",
          "Freezing damages inactivated vaccines; OPV/measles very temperature-sensitive",
          "Booster timing: When antibodies decline below protective threshold; recall response faster than primary"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive and Social Medicine", chapter: "Immunization Mechanisms", edition: "26th" },
          { book: "Immunology: Vaccine Immunity", chapter: "Immune Response to Vaccination", edition: "4th" }
        ]
      },
      {
        layer: 3,
        slug: "cm-immunization-layer-3-clinical",
        title: "Immunization (UIP, cold chain, schedule) - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical practice of immunization, contraindications, adverse events, schedule flexibility, screening for vaccination eligibility, and management of vaccine storage and administration.",
        contentMd: `# Immunization - Clinical

## Pre-Vaccination Assessment

### Screening Checklist Before Immunization

**Eligibility Assessment**:
- Age appropriate for vaccine
- No current severe acute illness
- No known allergy to vaccine components
- No recent immunoglobulin or blood transfusion (if live vaccine)

**Fever Assessment**:
- Fever <39°C: Safe to vaccinate (minor illness not contraindication)
- Fever ≥39°C: Defer non-emergency vaccines
- Mild respiratory symptoms: Not a contraindication

**Immunization History**:
- Vaccination cards reviewed
- Previous AEFI assessed
- Schedule delays noted and catch-up planned

### Absolute Contraindications

**Live Vaccine Contraindication**:
- Severe immunocompromise: HIV CD4 <200, severe malnutrition, on immunosuppressants
- Reason: Risk of vaccine-strain disease

**Anaphylactic Allergy**:
- To vaccine component (eggs in some vaccines, gelatin, neomycin, streptomycin)
- To previous dose of same vaccine

**Severe Reaction to Previous Dose**:
- Anaphylaxis
- Encephalopathy
- Intussusception risk (rotavirus) after first dose contraindication for further doses

### Relative Contraindications

**Defer Vaccination**:
- Acute severe illness (vaccinate after recovery)
- Recent immunoglobulin or blood transfusion (defer live 3-6 months)
- Acute febrile illness (defer non-emergency vaccines)

**Safe to Vaccinate**:
- Mild fever (<39°C)
- Local infection (cellulitis at injection site: use other arm)
- Mild diarrhea (rotavirus safe)
- Mild upper respiratory symptoms
- Jaundice (safe; vaccinate)
- Prematurity (vaccinate as per age, not corrected for prematurity after 5 years)
- Malnutrition (no contraindication; improves response with nutrition)

## Vaccination Technique

### Correct Route and Site

**Intramuscular (IM) - Preferred Route**:
- Vaccines: DPT, Hepatitis B, IPV, PCV, HPV
- Site: **Anterolateral thigh** (infants <12 months), **Deltoid** (children >12 months)
- Needle: 23-25 gauge, 1-1.5 inches long
- Angle: 90 degrees to skin
- Depth: Into muscle

**Subcutaneous (SC)**:
- Vaccines: BCG, Measles, Varicella
- Site: Outer aspect upper arm
- Needle: 25-27 gauge, 0.5 inches
- Angle: 45 degrees

**Oral**:
- Vaccines: OPV, Rotavirus
- Route: 2 drops on tongue
- Repeat if child vomits within 15 minutes

### Common Administration Errors

**Route Errors**:
- IM given SC: Reduced absorption, lower antibody response
- Wrong site: May cause hematoma, nerve damage
- Needle too short: Subcutaneous rather than IM (poor response)

**Vaccine Handling Errors**:
- Freeze-thaw cycles: Damages live vaccines
- Direct sunlight exposure: Heat damage
- Opened vial left at room temperature: Contamination
- Expired vaccines used: Reduced efficacy

## Adverse Events Following Immunization (AEFI)

### Common, Expected AEFI (Not Serious)
**Local (at injection site)**:
- Pain, redness, swelling
- Usually resolves in 2-3 days
- Management: Cold compress, analgesics

**Systemic**:
- Fever (especially measles vaccine)
- Mild rash (measles vaccine)
- Irritability, fussiness
- Mild diarrhea
- Management: Supportive care (paracetamol 15 mg/kg for fever)

**Timeline**:
- Within 24 hours: Most common (fever, local reaction)
- 7-14 days: Measles rash, fever

### Rare but Serious AEFI

**Anaphylaxis**:
- Occurs within 15 minutes of vaccine
- Signs: Urticaria, angioedema, wheezing, hypotension, shock
- Management: Epinephrine 0.3-0.5 mg IM, antihistamines, corticosteroids, oxygen, IV fluids
- Monitor for 30 minutes post-vaccination for anaphylaxis

**Guillain-Barré Syndrome (GBS)**:
- Ascending paralysis
- Risk: ~1-2 per million doses
- Timeline: Within weeks of vaccination
- More associated with influenza vaccine

**Vaccine-Associated Paralytic Poliomyelitis (VAPP)**:
- Paralysis following OPV
- Risk: ~1 per 3 million OPV doses
- Higher risk in immunocompromised
- Reason for switch to IPV in many countries

**Intussusception (Rotavirus)**:
- Bowel obstruction
- Risk: ~1-3 per 100,000 doses
- Timeline: Within 1-4 weeks of rotavirus vaccine
- Rare in India

**Thrombocytopenia**:
- Low platelet count
- Measles vaccine: ~1 per 25,000 doses
- Usually self-limited

### AEFI Management

**Assessment**:
- When did symptoms start relative to vaccination?
- Is it temporally related (likely AEFI) or coincidental?
- Severity of reaction

**Management**:
- Supportive care (fever management, fluids, reassurance)
- Medications (epinephrine if anaphylaxis, anticonvulsants if seizure)
- Hospitalization if severe

**Reporting**:
- Report serious AEFI to surveillance system
- Document in vaccine record
- Investigate to rule out other causes

## Cold Chain Management at PHC Level

### Storage Management
**Temperature Monitoring**:
- Twice daily (morning and evening)
- Record in temperature log book
- Acceptable range: 2-8°C
- Investigate if out of range

**Vaccine Organization**:
- Arrange by expiry date (First In, First Out - FIFO principle)
- Remove expired vaccines regularly
- Organize by vaccine type for easy access

**Refrigerator Maintenance**:
- No food or other items stored with vaccines
- Clean regularly
- Defrost if ice accumulation
- Check seals, temperature gauge

### Transport Management
**Cool Carriers/Cold Boxes**:
- Use for transport from storage to outreach sites
- Ice packs with vaccines (buffer)
- VVM checked before and after transport
- Minimize time outside cold chain (ideally <4 hours)

**Community Outreach**:
- Mobile vaccination teams
- Cold chain maintained with cool boxes
- Temperature logs maintained
- VVM monitoring

### Vaccine Management

**Stock Management**:
- Order based on projected coverage targets
- Avoid overstocking (wastage risk)
- Maintain reserve stock for high-demand periods

**Vial Opening**:
- Record date opened
- Follow vial expiry rules (varies by vaccine, typically 4 weeks)
- Discard vial if expiry reached

**Wastage Monitoring**:
- Calculate wastage rate
- Ideal: <5% wastage
- High wastage: Investigate (cold chain failure, adverse events, technique)

**Immunization Sessions**:
- Plan ahead for expected number of children
- Minimize opened vial wastage
- Have backup cold chain for opened vials

## Vaccination Schedule Flexibility and Catch-Up

### Delayed Schedule Management
- Child can resume even with long gaps (months to years)
- No need to restart complete schedule
- Continue from where stopped with appropriate spacing
- Assess vaccination card to determine next dose

### Spacing Rules When Schedule Disrupted
- **Inactivated to inactivated**: ≥4 weeks minimum (or ≥2 weeks if urgent)
- **Live to live**: ≥4 weeks minimum
- **Inactivated to live**: No minimum
- **Live to inactivated**: No minimum

### Multiple Vaccines Same Visit
- All required vaccines can be given at one visit
- Different sites and syringes for each vaccine
- Reduces number of visits, improves coverage

### Special Populations

**Premature Infants**:
- Vaccinate from 6 weeks chronological age (not corrected age) onwards
- Follow full schedule
- No dose adjustment for low birth weight

**Children with Malnutrition**:
- Vaccinate without delay
- Response may be suboptimal but vaccination still beneficial
- Revaccinate if severely malnourished at first vaccination

**Immunocompromised (HIV, severe malnutrition)**:
- Use inactivated vaccines (safe)
- Avoid live vaccines
- IPV instead of OPV
- May have reduced response (lower antibody titers)

## Vaccination Coverage Assessment

### Coverage Indicators
- Percentage of target population (usually children <5 years) fully immunized
- Percentage partially immunized
- Percentage not immunized
- Coverage for specific vaccines (BCG, measles, DPT-3)

### Monitoring Methods
- **Health facility records**: Immunization registers
- **Community surveys**: NFHS, DLHS, household surveys
- **Vaccination cards**: Verification in field
- **School enrollment**: Vaccination status checks
- **Sentinel surveillance**: Selected areas for trend monitoring`,
        mnemonics: [
          {
            text: "ABSOLUTE CONTRAINDICATIONS: Live vaccine (severe immunocompromise), Anaphylactic allergy, Previous anaphylaxis",
            explanation: "When NOT to vaccinate"
          },
          {
            text: "VACCINATION SITES: IM thigh (infant), deltoid (older); SC outer arm; Oral for OPV/rotavirus",
            explanation: "Route and site specificity"
          },
          {
            text: "AEFI SERIOUS: Anaphylaxis (15min, epinephrine), GBS (weeks), VAPP (OPV, paralysis), Intussusception (rotavirus)",
            explanation: "Serious adverse events"
          },
          {
            text: "COLD CHAIN STORAGE: 2-8°C, twice-daily monitoring, FIFO principle, VVM assessment",
            explanation: "PHC-level vaccine storage management"
          }
        ],
        keyPoints: [
          "Screen for fever (>39°C defer), allergy, immunocompromised status before vaccination",
          "IM preferred route; thigh (infant), deltoid (older); separate sites for multiple vaccines",
          "Common AEFI: Local pain/swelling, fever, mild rash (expected). Serious: Anaphylaxis, GBS, VAPP, intussusception",
          "Cold chain: 2-8°C storage, twice-daily temperature monitoring, VVM checks, FIFO stock management",
          "Can resume incomplete schedule after gaps; no need to restart; spacing rules based on vaccine type",
          "Delayed schedule: Safe to vaccinate; catch-up with proper spacing; no dose adjustment for age delays"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive and Social Medicine", chapter: "Immunization Practice", edition: "26th" },
          { book: "IAP Guidelines on Immunization", chapter: "Vaccination Technique, AEFI Management", edition: "2023" }
        ]
      },
      {
        layer: 4,
        slug: "cm-immunization-layer-4-exam",
        title: "Immunization (UIP, cold chain, schedule) - Exam Prep",
        estimatedMinutes: 15,
        summary: "NEXT-pattern MCQ preparation on UIP vaccines, cold chain, immunization schedule, contraindications, AEFI, and vaccine management principles.",
        contentMd: `# Immunization - Exam Preparation

## High-Yield Facts

**UIP Vaccines**:
- **Live vaccines**: BCG (TB), OPV (polio, phased out), Measles/MR, Rotavirus, JE (endemic), Varicella
- **Inactivated vaccines**: IPV (polio), DPT (component of pentavalent), Hepatitis B, PCV, HPV
- **Route**: IM (thigh/deltoid), SC (BCG/measles arm), Oral (OPV/rotavirus)

**UIP Schedule Highlights**:
- Birth: BCG, HBV birth dose
- 6-14 weeks: Pentavalent (DPT+HB+Hib), PCV, Rotavirus, IPV
- 6-9 months: Measles/MR-1
- 9-12 months: JE (endemic)
- 16-24 months: Boosters, Measles-2
- School (5-6 years): DPT booster-2, OPV booster
- Girls (9-14 years): HPV (2 doses)

**Cold Chain**:
- National: -20 to -25°C
- State: 2-8°C
- District/PHC: 2-8°C
- VVM: Yellow (OK), Brown/grey (discard)

**Contraindications**:
- Live vaccine: Severe immunocompromise (HIV CD4 <200), anaphylactic allergy
- Minor fever/illness: NOT contraindication
- Malnutrition: NOT contraindication

**AEFI**:
- Common (expected): Fever, rash, local pain/swelling
- Serious (rare): Anaphylaxis (15 min, epinephrine), GBS, VAPP, intussusception

**Spacing**:
- Live-live: ≥4 weeks
- Inactivated-inactivated: ≥4 weeks or same day
- Cross types: No minimum

## Problem-Solving Cases

**Case 1: Delayed Vaccination**
- 18 months old, only BCG and HBV
- Next dose: Pentavalent-1 (based on schedule progression)
- Spacing: Give immediately (no gap issue)
- Schedule: Complete remaining doses with 4-week spacing

**Case 2: Heat-Damaged Vaccine**
- VVM shows brown color
- Decision: Discard vaccine immediately
- Investigation: Cold chain audit, equipment check
- Reporting: Document and report to surveillance

**Case 3: Anaphylaxis After Vaccine**
- Urticaria, angioedema, wheezing within 15 minutes
- Immediate management: Epinephrine 0.3-0.5 mg IM, IV access, antihistamines, corticosteroids
- Report: AEFI surveillance
- Follow-up: Assess future vaccine safety

**Case 4: Malnutrition and Immunization**
- Child severely malnourished
- Decision: Vaccinate (malnutrition NOT contraindication)
- Response: May be suboptimal but still beneficial
- Improve nutrition; revaccinate if needed after recovery

## Analysis Topics

- Live vaccines contraindicated in immunocompromised; inactivated safe (IPV, Hepatitis B)
- Cold chain importance: Heat-damaged vaccine = silent failure (appears normal but ineffective)
- VVM monitors cumulative heat exposure
- AEFI vs. coincidental illness (temporal relationship)
- Booster timing based on antibody decay`,
        mnemonics: [
          {
            text: "UIP LIVE VACCINES: BCG, OPV (phased), Measles, Rotavirus, JE, Varicella",
            explanation: "Live attenuated vaccines in UIP"
          },
          {
            text: "UIP INACTIVATED: IPV, DPT (pentavalent), HBV, PCV, HPV",
            explanation: "Inactivated vaccines in UIP"
          },
          {
            text: "COLD CHAIN TEMPS: National -20/-25°C, State 2-8°C, PHC 2-8°C",
            explanation: "Temperature requirements at each level"
          },
          {
            text: "VVM COLORS: Yellow (use), Brown/Grey (discard)",
            explanation: "Vaccine vial monitor interpretation"
          }
        ],
        keyPoints: [
          "UIP schedule: Birth (BCG, HepB), 6-14w (pentavalent, PCV, rotavirus, IPV), 6-24m (measles, JE), school (booster), girls 9-14y (HPV)",
          "Live vaccines (BCG, OPV phased, measles) contraindicated in immunocompromised; inactivated safe (IPV, HBV, PCV, HPV)",
          "Cold chain: -20/-25°C (national), 2-8°C (state/district/PHC); VVM monitors heat damage",
          "AEFI: Expected (fever, rash, local pain); serious (anaphylaxis, GBS, VAPP, intussusception)",
          "Minor fever (<39°C), mild illness NOT contraindications; vaccinate",
          "Spacing: Live-live ≥4w, inactivated-inactivated ≥4w or same day, cross types no minimum"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive and Social Medicine", chapter: "Immunization Program", edition: "26th" },
          { book: "IAP Guidelines on Immunization", chapter: "UIP, Schedule, Contraindications, AEFI", edition: "2023" }
        ]
      },
      {
        layer: 5,
        slug: "cm-immunization-layer-5-active-recall",
        title: "Immunization (UIP, cold chain, schedule) - Active Recall",
        estimatedMinutes: 10,
        summary: "Quick recall of UIP vaccines, schedule milestones, cold chain requirements, contraindications, AEFI types, and vaccine management principles.",
        contentMd: `# Active Recall - Immunization

**Q1:** What are the vaccines administered at birth and 6 weeks under the UIP schedule?
> Birth: BCG (SC left arm), Hepatitis B birth dose. 6 weeks: Pentavalent-1 (IM thigh), PCV-1 (IM thigh), Rotavirus-1 (oral 2 drops).

**Q2:** List the live and inactivated vaccines in the current UIP schedule.
> Live: BCG, OPV (phased out), Measles/MR, Rotavirus, JE (endemic regions), Varicella. Inactivated: IPV, DPT (component of pentavalent), Hepatitis B, PCV, HPV.

**Q3:** What is the cold chain temperature requirement at each level and why is it important?
> National: -20 to -25°C (freezer). State: 2-8°C (cold room). District/PHC: 2-8°C (refrigerator). Maintains vaccine potency; exposure >30°C for 3+ hours reduces effectiveness; freezing damages live vaccines.

**Q4:** What is a Vaccine Vial Monitor (VVM) and how does it guide vaccine use?
> Time-temperature integrator on vaccine vial. Square changes color with cumulative heat exposure. Yellow square = vaccine OK for use. Brown/grey square = vaccine damaged, discard. Allows identification of heat-damaged vaccines without temperature data.

**Q5:** Describe absolute contraindications to live vaccine administration.
> Immunocompromised state (HIV CD4 <200, severe malnutrition, on immunosuppressants), severe allergy to vaccine components (eggs, gelatin, neomycin), previous anaphylaxis to vaccine. Risk of vaccine-strain disease.

**Q6:** What are the spacing rules between different types of vaccines?
> Inactivated-to-inactivated: ≥4 weeks minimum (or ≥2 weeks if urgent). Live-to-live: ≥4 weeks minimum. Inactivated-to-live: No minimum interval. Live-to-inactivated: No minimum interval.

**Q7:** Explain the management of a child with a delayed immunization schedule (9-month-old, only BCG and HBV).
> No need to restart schedule. Continue from where stopped with appropriate spacing. Catch-up missed doses with proper intervals. Child can receive all required vaccines in subsequent visits with 4-week minimum spacing between inactivated vaccines.

**Q8:** What is the proper route and site for administering DPT vaccine?
> Intramuscular (IM) in anterolateral aspect of thigh in infants (<12 months); deltoid muscle in older children. Needle: 23-25 gauge, 1-1.5 inches length to ensure intramuscular placement.

**Q9:** List serious adverse events following immunization (AEFI) and their approximate risk.
> Anaphylaxis (within 15 min, epinephrine needed), Guillain-Barré Syndrome (~1-2 per million), VAPP from OPV in immunocompromised (~1 per 3 million doses), Intussusception from rotavirus (~1-3 per 100,000). Also fever, local pain (common, expected).

**Q10:** Describe cold chain management and vaccine storage at a PHC level.
> Temperature monitoring: Twice daily (morning/evening) in temperature log. Storage: 2-8°C in ILR or solar refrigerator. Organize by expiry date (FIFO). VVM checked before transport. Don't store food items. Opened vials marked with date, discarded after time limit. Monitor for wastage and report expired vaccines.`,
        mnemonics: [
          {
            text: "BIRTH & 6 WEEKS: Birth (BCG, HepB), 6w (Pent-1, PCV-1, RV-1)",
            explanation: "First two vaccination visits"
          },
          {
            text: "LIVE VACCINES: BCG, OPV (phased), Measles, Rotavirus, JE, Varicella",
            explanation: "All live vaccines in UIP"
          },
          {
            text: "COLD CHAIN TEMPS: National -20/-25°C, State 2-8°C, PHC 2-8°C",
            explanation: "Temperature control at each level"
          },
          {
            text: "VVM COLORS: Yellow (use), Brown/Grey (discard)",
            explanation: "Vaccine vial monitor interpretation for heat damage"
          },
          {
            text: "SPACING RULES: Live-live 4w, Inact-Inact 4w, Inact-Live none, Live-Inact none",
            explanation: "Minimum intervals between different vaccines"
          }
        ],
        keyPoints: [
          "Birth: BCG, HepB; 6w: Pentavalent, PCV, Rotavirus; Schedule catches up by 2 years",
          "Live vaccines CI in immunocompromised; inactivated safe (IPV, HBV, PCV, HPV)",
          "Cold chain: -20/-25°C (national), 2-8°C (state/district/PHC); VVM monitors heat damage",
          "Anaphylaxis needs epinephrine 0.3-0.5 mg IM; GBS, VAPP, intussusception rare serious AEFI",
          "IM preferred route; 2-8°C storage; FIFO stock management; twice-daily temperature monitoring",
          "Minor fever <39°C NOT contraindication; malnutrition NOT contraindication; vaccinate"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive and Social Medicine", chapter: "Immunization Program", edition: "26th" },
          { book: "IAP Guidelines on Immunization", chapter: "UIP Schedule, Cold Chain, AEFI Management", edition: "2023" }
        ]
      }
    ]
  }
];
