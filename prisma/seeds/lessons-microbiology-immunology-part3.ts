import type { TopicLessons } from "./content-loader";

export const microbiologyImmunologyLessonsPart3: TopicLessons[] = [
  {
    topicCode: "MI-MOD-02-TOP-06",
    layers: [
      {
        layer: 1,
        slug: "vaccines-immunization-layer-1-foundation",
        title: "Vaccines & Immunization - Foundation",
        estimatedMinutes: 20,
        summary: "Vaccine types, mechanisms of action, India NIS schedule, vaccine characteristics, adverse events.",
        contentMd: `# Vaccines & Immunization - Foundation

## Vaccine Definition & Goals
- **Vaccine**: Preparation containing antigen (± adjuvant) designed to induce protective immunity
- **Goal**: Primary prevention of infectious disease
- **Herd immunity threshold**: Vaccination coverage needed to interrupt transmission
- **Eradication**: Smallpox achieved (1980); polio near-eradication (endemic in 3 countries)

## Types of Vaccines

### Live Attenuated Vaccines
- **Composition**: Living organisms with virulence reduced by passage/mutation
- **Properties**: Replication in host; strong Th1, CTL response; durable immunity
- **Contraindications**: Immunocompromised (reversion risk)
- **Examples**: MMR, varicella, rotavirus, yellow fever, BCG

### Inactivated (Killed) Vaccines
- **Composition**: Dead organisms (chemical/heat inactivation) or toxins
- **Properties**: No replication (safe in immunocompromised); primarily humoral IgG response; weaker cellular
- **Booster requirement**: More frequent (waning immunity)
- **Examples**: Polio (IPV), rabies, hepatitis B, diphtheria, tetanus, influenza (whole virion or split)

### Subunit/Recombinant Vaccines
- **Composition**: Purified surface antigen (protein, polysaccharide) or recombinant protein
- **Advantages**: Highly specific, safe, no whole organism
- **Disadvantages**: Weak immunogenicity (require adjuvant)
- **Examples**: Hepatitis B (HBsAg recombinant), HPV (L1 protein), meningococcal (outer membrane)

### Toxoid Vaccines
- **Composition**: Inactivated bacterial toxins (formaldehyde treatment)
- **Target**: Neutralizing antibodies (not organism killing)
- **Examples**: Diphtheria, tetanus, pertussis (toxoid component)
- **Booster frequency**: Every 10 years (immunity wanes)

### mRNA Vaccines (Newest)
- **Composition**: Messenger RNA encoding target antigen (lipid nanoparticle encapsulation)
- **Properties**: Host cells synthesize antigen → strong MHC I + II response
- **Advantages**: Fast production, potent immune response
- **Disadvantages**: Cold chain (-70°C), cost
- **Examples**: COVID-19 (Pfizer, Moderna)

## Vaccine Adjuvants

### Purpose
- Enhance innate immunity activation (TLR agonists)
- Increase Th1 response; improve immunogenicity
- Extend duration of immunity
- Reduce antigen quantity needed

### Common Adjuvants
- **Aluminum salts**: Alum, aluminum phosphate (traditional, Th2-biased)
- **Oil-in-water**: MF59, AS01 (enhance MHC II response)
- **TLR agonists**: CpG DNA (TLR9), MPLA (TLR4)
- **Live vaccines**: Inherent adjuvant effect (strong TLR activation)

## India National Immunization Schedule (UIP)

### Infancy
- **Birth**: BCG, OPV dose 0 (start polio series)
- **6 weeks**: DPT-1, Hepatitis B-1, Rotavirus-1, PCV-1
- **10 weeks**: DPT-2, Hep B-2, Rotavirus-2, PCV-2
- **14 weeks**: DPT-3, Hep B-3, Rotavirus-3, PCV-3
- **9-12 months**: Measles/MR (Measles-Rubella), IPV-1 (oral polio series continues)

### Childhood
- **15-18 months**: DPT booster 1, OPV booster 1, IPV-2
- **18-24 months**: Hepatitis A (some centers)
- **4-6 years**: DPT booster 2, OPV booster 2 (school entry)

### Adolescence
- **16-18 years**: Td (tetanus-diphtheria booster)
- **Girls**: HPV vaccine (primary series starting at age 9)

### India-Specific Rationale
- **BCG at birth**: TB endemic (1 in 4 Indians infected); prevents severe disseminated TB
- **9-month Measles/MR**: Maternal IgG wanes by 9 months; measles highly contagious (Ro 12-18); high childhood mortality in India
- **Rotavirus**: Severe diarrhea mortality especially in malnourished children
- **PCV**: *Streptococcus pneumoniae* prevalent, vaccine-preventable pneumonia

## Vaccine Potency, Safety, Efficacy

### Potency (Immunogenicity)
- **Definition**: Ability to generate protective immune response
- **Measured**: Seroconversion rate, antibody titer, T cell response
- **Stability**: Cold chain essential (heat exposure degrades antigens)
- **Batch testing**: Regulatory requirement

### Safety Profile
- **Local**: Redness, swelling at injection site (expected)
- **Systemic**: Fever, myalgia (sign of immune activation)
- **Serious**: Anaphylaxis (1-2 per million), Guillain-Barré (1-2 per million influenza)

### Efficacy vs Effectiveness
- **Efficacy**: Randomized controlled trial setting (% disease reduction)
- **Effectiveness**: Real-world setting (may be lower; coverage gaps, cold chain breaks)

## Vaccine Failure

### Primary Failure (No Response)
- **Cause**: Immunosuppression, severe malnutrition, improper storage
- **Rate**: 5-10% of vaccinated
- **Management**: Re-vaccinate after immune recovery

### Secondary Failure (Waning Immunity)
- **Cause**: Antibody decline over time
- **Prevention**: Booster vaccination at appropriate intervals
- **Example**: Td booster every 10 years (tetanus immunity wanes faster than diphtheria)`,
        mnemonics: [
          {
            text: "Live=Lasting immunity (replication), Inactivated=Incremental boosters (waning)",
            explanation: "Vaccine type determines durability and booster needs"
          },
          {
            text: "India 9-month Measles (high Ro + burden) vs USA 12-month",
            explanation: "India-specific timing for endemic disease"
          }
        ],
        keyPoints: [
          "Live vaccines: replication in host, strong Th1/CTL, durable (1-2 doses)",
          "Inactivated: safe, weak Th2 response, waning (boosters needed)",
          "Adjuvants: enhance innate, extend duration (especially important for inactivated)",
          "India NIS: BCG birth (TB), 9-month measles (early, high burden), boosters 15-18mo",
          "Cold chain critical: vaccine potency decreases with heat exposure"
        ],
        textbookRefs: [
          { book: "Ananthanarayan & Paniker's Textbook of Microbiology", chapter: "Vaccines", edition: "11th" },
          { book: "Jawetz, Melnick & Adelberg's Medical Microbiology", chapter: "Vaccines", edition: "28th" }
        ]
      },
      {
        layer: 2,
        slug: "vaccines-immunization-layer-2-mechanism",
        title: "Vaccines & Immunization - Mechanism",
        estimatedMinutes: 25,
        summary: "Antigen presentation in vaccination, memory formation, herd immunity threshold, booster response kinetics.",
        contentMd: `# Vaccination Mechanisms

## Antigen Presentation & Adaptive Response

### Live Attenuated Pathways
1. **MHC Class I**: Replicating vaccine virus in cytoplasm → proteasome → peptide → MHC I
2. **Cross-presentation**: Dendritic cells present exogenous antigen on MHC I
3. **CD8+ CTL priming**: Strong MHC I response → cytotoxic T cells
4. **MHC Class II**: Exogenous pathway (ingested antigen) → endosomal pathway
5. **CD4+ Th1 priming**: TLR activation (danger signals from replication) → IFN-gamma, IL-2
6. **Result**: Both cellular + humoral immunity; Th1-biased

### Inactivated Vaccine Pathways
1. **MHC Class II only**: Dead antigen → endosomal pathway (no cytoplasmic antigen)
2. **CD4+ Th2 priming**: Weak TLR activation (no replication = no danger)
3. **B cell help limited**: Weak IFN-gamma (Th1 deficiency); Th2 dominates
4. **CD8+ CTL**: Minimal (no MHC I presentation)
5. **Result**: Primarily IgG (humoral); weak cellular
6. **With adjuvant**: TLR agonist enhances MHC I + Th1 response

## Memory B Cell Formation

### Germinal Center Reaction Post-Vaccination
1. **Primary response (3-7 days)**: IgM detected first, IgG emerging week 2
2. **Germinal center**: Somatic hypermutation (dark zone) + selection (light zone)
3. **Affinity maturation**: High-affinity B cells selected, low-affinity → apoptosis
4. **Class switching**: IgM → IgG (± IgA, IgE depending on Th cytokines)
5. **Output**: Plasma cells (antibody factories) + memory B cells (long-term)

### Memory B Cell Characteristics
- **Longevity**: Years to lifetime (BCG, polio ~lifetime; influenza <1 year)
- **Rapid reactivation**: Minutes to hours on re-exposure (no GC needed)
- **High affinity**: Pre-selected through GC maturation
- **IgG switch**: Skip IgM phase on re-exposure
- **Maintained by**: Long-lived plasma cells in bone marrow (hidden factories)

### Secondary Response After Booster
- **Timing**: 1-3 days (memory B cells rapid activation)
- **Antibody**: IgG immediate rise (no IgM phase), 100-1000x higher titer
- **Duration**: Months-years (long-lived plasma cells)
- **Affinity**: High (no need for new germinal center)

## Herd Immunity Threshold

### Basic Reproduction Number (Ro)
- **Definition**: Average number of secondary infections from one infected person
- **Calculation**: Herd immunity threshold = 1 - (1/Ro)

### Vaccine Coverage Needed by Disease
| Disease | Ro | Herd Immunity % |
|---------|-----|---|
| **Measles** | 12-18 | 95% |
| **Polio** | 5-7 | 85% |
| **Pertussis** | 12-17 | 94% |
| **Diphtheria** | Variable | ~85% |
| **Influenza** | 1-2 | 50-60% |
| **Tetanus** | 0 (non-contagious) | N/A |

### India Context
- **Measles**: High Ro (12-18); need 95% coverage (often <80% in rural areas) → endemic
- **Polio**: Near-eradication; need 85%+ maintained surveillance
- **Routine EPI coverage**: 70-80% nationally (below measles herd immunity)

## Booster Vaccination Strategy

### Waning Immunity (Why Boosters Needed)
1. **Initial plasma cells**: Short-lived (days-weeks)
2. **Long-lived plasma cells**: Maintain immunity (bone marrow)
3. **Antibody catabolism**: IgG degraded at rate of synthesis
4. **Equilibrium**: Production ≈ degradation
5. **Threshold breach**: If antibody drops below protective level → booster needed

### Optimal Booster Timing
- **Too early** (<4 weeks): No anamnestic response (antibody plateau, not rise)
- **Optimal** (4-52 weeks): Memory cells responsive, antibody waned but above baseline
- **Late booster** (1-5 years): Memory preserved, rapid response maintained
- **Very late** (>10 years): Memory may be minimal (depends on vaccine)

### Examples
- **DPT**: Booster at 15-18 months (primary series extension), 4-6 years (school)
- **Td**: Booster every 10 years (waning tetanus immunity)
- **Measles**: 2nd dose at 15-18 months (catch primary failures from 5-10% incomplete seroconversion)
- **Poliovirus**: Sequential OPV (primary) + IPV (booster for safety)`,
        mnemonics: [
          {
            text: "Live=Both arms (MHC I + II), Inactivated=One arm (MHC II only)",
            explanation: "Live vaccines strong cellular + humoral; inactivated mainly humoral"
          },
          {
            text: "Herd measles 95%, polio 85% (Ro-dependent threshold)",
            explanation: "Coverage needed to stop transmission"
          }
        ],
        keyPoints: [
          "Live vaccines: strong MHC I (CTL) + MHC II (Th1), durable memory",
          "Inactivated: MHC II only (Th2, IgG), weak CTL, waning (boosters needed)",
          "Memory B cells: skip germinal center, direct plasma cell diff on re-exposure",
          "Herd immunity measles 95%, polio 85%, influenza 50-60% (Ro-dependent)",
          "Booster optimal 4-52 weeks; too early = no response, too late = loss of benefit timing"
        ],
        textbookRefs: [
          { book: "Ananthanarayan & Paniker's Textbook of Microbiology", chapter: "Immunology of Vaccination", edition: "11th" }
        ]
      },
      {
        layer: 3,
        slug: "vaccines-immunization-layer-3-clinical",
        title: "Vaccines & Immunization - Clinical Application",
        estimatedMinutes: 30,
        summary: "Vaccine adverse events, contraindications, special populations, India epidemiology, outbreak response.",
        contentMd: `# Clinical Application

## Vaccine Adverse Events

### Common Local Reactions
- **Injection site**: Redness, swelling, pain (24-48 hours)
- **Mechanism**: Local inflammatory response (innate activation)
- **Management**: Reassurance, ice/antihistamines, site rotation
- **Prevention**: Correct injection technique, proper anatomical site

### Common Systemic Reactions
- **Fever**: Expected with live vaccines (sign of replication)
- **Myalgia/arthralgia**: Common after live vaccines (especially varicella)
- **Lymphadenopathy**: Regional nodes (expected, resolves)
- **Timeline**: 5-14 days post-vaccination
- **Management**: Acetaminophen, reassurance (self-limited)

### Serious Adverse Events (Rare)

**Anaphylaxis**
- **Incidence**: 1-2 per million doses
- **Triggers**: Egg allergy (MMR, influenza), gelatin (MMR), neomycin
- **Reaction time**: Minutes (within 15 min of injection)
- **Management**: Epinephrine IM (only life-saving drug)
- **Prevention**: 15-minute observation post-vaccination

**Guillain-Barré Syndrome (GBS)**
- **Risk**: 1-2 per million influenza vaccine doses
- **Timing**: 1-3 weeks post-vaccination
- **Mechanism**: Uncertain (molecular mimicry? cross-reactive antibodies)
- **Clinical**: Ascending paralysis, respiratory compromise
- **Management**: Supportive, plasma exchange (IVIG)

**Myocarditis (mRNA Vaccines)**
- **Incidence**: 2-10 per million (mainly adolescents/young adults)
- **Timing**: 2-5 days post-2nd dose
- **Clinical**: Chest pain, arrhythmia, myocardial dysfunction (usually mild, self-limited)
- **Context**: Risk much lower vs COVID-19 myocarditis (100x)

**VAPP (Vaccine-Associated Poliovirus Paralysis)**
- **Vaccine**: OPV (oral polio, live virus)
- **Incidence**: 1 per 2.4 million doses
- **Risk**: Immunocompromised recipients or household contacts
- **Prevention**: Switch to IPV (inactivated, safer)

## Vaccine Contraindications

### True Contraindications to Live Vaccines
1. **Immunocompromised**: HIV CD4 <200, chemotherapy, transplant
2. **Severe immunoglobulin deficiency**: Cannot mount immune response
3. **Severe component allergy**: Neomycin, gelatin, egg
4. **Encephalitis history**: Theoretical risk of vaccine-strain CNS disease
5. **Pregnancy** (especially first trimester): Theoretical vertical transmission risk

### False Contraindications (Safe to Give)
- **Mild illness**: Mild fever, rhinorrhea, diarrhea
- **Recent antibiotics**: Don't interfere with vaccine
- **Breastfeeding**: Not contraindicated
- **Minor local reaction**: Erythema at previous injection site
- **Family history of adverse reaction**: Unless hereditary immune disorder

## Special Populations

### Severely Immunocompromised (HIV CD4 <200, chemo, transplant)
- **Live vaccines**: CONTRAINDICATED (reversion risk)
- **Inactivated vaccines**: May have poor response; administer anyway (some better than none)
- **Timing**: Delay non-urgent until immune reconstitution if possible
- **Post-recovery**: Re-vaccinate (CD4 >200 × 3 months on ART)

### Pregnancy
- **Live vaccines**: Contraindicated (theoretical vertical transmission)
- **Inactivated vaccines**: Safe (Td, influenza recommended)
- **Planning**: Give MMR/varicella before pregnancy, wait 28 days before conception
- **Exception**: IPV, hepatitis B safe in pregnancy

### Premature Infants
- **Vaccination age**: Chronological age (not gestational) after discharge
- **Schedule**: Follow routine by chronological age
- **Exception**: BCG deferred if <2 kg (risk of disseminated BCG)

### Incomplete/Unclear Vaccination History
- **Assumption**: Previously vaccinated (immune)
- **Approach**: Revaccinate (immunity from previous doses not lost, booster effect)
- **Rationale**: Safe, cost-effective, avoids immunity gaps

## India-Specific Epidemiology & Outbreak Response

### Measles Outbreaks
- **Problem**: Coverage gaps (70-80% vs 95% needed herd immunity)
- **Consequence**: Periodic epidemics (high mortality in under-5)
- **Response**: Reactive campaigns (catch-up vaccination)
- **Target**: 95%+ coverage with 2 doses

### Polio Eradication
- **Status**: India certified polio-free (2014), endemic only in Afghanistan/Pakistan
- **Achievement**: IPV switch (safer), high coverage campaigns
- **Maintenance**: Environmental surveillance, case-based follow-up
- **Challenge**: Cross-border transmission risk

### TB (BCG)
- **Burden**: High prevalence (1 in 4 Indians infected per WHO)
- **Vaccine**: BCG at birth (variable efficacy 0-80%, protects severe TB)
- **Limitation**: BCG protection wanes, doesn't prevent reinfection
- **New vaccines**: In trials (improved protection)

### Diarrheal Disease (Rotavirus)
- **Burden**: High infant mortality (before rotavirus vaccine)
- **Vaccine**: Recently introduced in UIP (2013)
- **Impact**: Early data show burden reduction
- **Coverage**: Variable (lower in rural areas)`,
        mnemonics: [
          {
            text: "Live vaccines contraindicated in: Immunocompromised, Severe Ig deficiency, Severe allergy, (P)regnancy",
            explanation: "Main contraindications to live vaccines (memory aid)"
          },
          {
            text: "Measles 95%, Polio 85% herd immunity needed (India mostly below)",
            explanation: "Why measles still endemic in India"
          }
        ],
        keyPoints: [
          "Anaphylaxis post-vaccine: Epinephrine IM immediately (only life-saving drug)",
          "VAPP risk with OPV: Use IPV in immunocompromised",
          "Live vaccines contraindicated: immunocompromised, pregnancy, severe allergy",
          "GBS rare (1-2 per million influenza); risk much lower than disease",
          "India measles outbreaks: coverage gaps (need 95%, have 70-80%)"
        ],
        textbookRefs: [
          { book: "Ananthanarayan & Paniker's Textbook of Microbiology", chapter: "Clinical Vaccination", edition: "11th" }
        ]
      },
      {
        layer: 4,
        slug: "vaccines-immunization-layer-4-exam",
        title: "Vaccines & Immunization - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield vaccine types, contraindications, India NIS, adverse events, herd immunity.",
        contentMd: `# Vaccines & Immunization - High-Yield Facts

## Vaccine Types at a Glance
| Type | Composition | Immune Response | Booster | Safety | Example |
|------|---|---|---|---|---|
| **Live** | Living, weakened | Strong Th1/CTL | 1-2 doses | Contraindicated immunocompromised | MMR, varicella |
| **Inactivated** | Dead organisms | Weak Th2/IgG | Frequent | Safe | IPV, rabies |
| **Subunit** | Purified antigen | IgG (needs adjuvant) | Frequent | Very safe | HepB, HPV |
| **Toxoid** | Inactivated toxin | IgG (anti-toxin) | Frequent | Safe | Td, pertussis |
| **mRNA** | Genetic code | Strong Th1/MHC I | TBD | Usually safe (rare myocarditis) | COVID-19 |

## India NIS Condensed Timeline
| Age | Vaccine | Type | Route |
|-----|---------|------|-------|
| Birth | BCG + OPV 0 | Live + Oral | IM, PO |
| 6 weeks | DPT 1, HepB 1, Rota 1, PCV 1 | Mix | IM |
| 9 months | **Measles/MR** | **Live** | **IM** |
| 15-18 months | DPT booster, OPV booster | Mix | IM, PO |
| 4-6 years | DPT booster 2, OPV booster 2 | Mix | IM, PO |
| 16-18 years | Td + HPV (girls) | Inactivated | IM |

## Herd Immunity Thresholds
- **Measles**: 95% (Ro 12-18) - **India 70-80%, ENDEMIC**
- **Polio**: 85% (Ro 5-7) - India 90%+, CERTIFIED POLIO-FREE (2014)
- **Pertussis**: 94% (Ro 12-17)
- **Influenza**: 50-60% (Ro 1-2)
- **Tetanus**: N/A (non-contagious)

## True Contraindications to Live Vaccines
1. **Immunocompromised** (HIV CD4 <200, chemo, transplant)
2. **Severe immunoglobulin deficiency**
3. **Severe component allergy** (egg, gelatin, neomycin)
4. **Encephalitis history**
5. **Pregnancy** (live virus transplacental risk)

## Vaccine Adverse Events Pearls
| Adverse Event | Vaccine | Incidence | Timing | Management |
|---|---|---|---|---|
| Anaphylaxis | Any (egg, gelatin) | 1-2/million | Minutes | Epi IM NOW |
| GBS | Influenza | 1-2/million | 1-3 weeks | Supportive, IVIG |
| Myocarditis | mRNA COVID | 2-10/million | 2-5 days | Supportive (mild) |
| VAPP | OPV | 1/2.4 million | Weeks | Avoid OPV if immunocompromised |

## Booster Timing Essentials
- **Too early** (<4 weeks): No anamnestic response (antibodies still high, plateau)
- **Optimal** (4-52 weeks): Memory cells responsive, antibody waning
- **Late booster**: Memory preserved, rapid response maintained
- **Example**: Measles 2nd dose 15-18 months catches primary failures

## India Context High-Yield
- **Measles endemic**: Coverage 70-80% < 95% herd immunity needed
- **Polio eradication**: India certified free (2014), endemic in 2 countries
- **BCG burden**: TB endemic, BCG at birth, variable protection (0-80%)
- **Cold chain failures**: Common, vaccine potency drops with heat`,
        mnemonics: [
          {
            text: "LIVE = Long-lasting immunity (replication), Inactivated needs Vaccines Everywhere (frequent boosters)",
            explanation: "Vaccine type determines durability"
          },
          {
            text: "India measles 95% needed, 70-80% have = ENDEMIC; polio 85% needed, 90% have = ELIMINATED",
            explanation: "Why measles still outbreaks in India"
          }
        ],
        keyPoints: [
          "Live vaccines: strong MHC I/II, durable (1-2 doses); contraindicated immunocompromised",
          "Inactivated: weaker response, waning (frequent boosters); safe immunocompromised",
          "Anaphylaxis: Epinephrine IM (only life-saving drug), 15-min observation post-vaccine",
          "Herd immunity measles 95%, India has 70-80% (coverage gap = epidemics)",
          "Booster optimal 4-52 weeks (memory responsive, antibody waning)"
        ],
        textbookRefs: [
          { book: "Ananthanarayan & Paniker's Textbook of Microbiology", chapter: "Quick Ref", edition: "11th" }
        ]
      },
      {
        layer: 5,
        slug: "vaccines-immunization-layer-5-active-recall",
        title: "Vaccines & Immunization - Active Recall",
        estimatedMinutes: 10,
        summary: "Q&A on vaccine mechanisms, India NIS, adverse events, herd immunity, immunocompromised vaccination.",
        contentMd: `# Active Recall Flashcards

## Q1: Why are live vaccines generally more effective at generating durable immunity than inactivated vaccines?
**A**: Live vaccines replicate in host → strong innate (TLR activation, danger signals) + adaptive (MHC I + II). Result: Th1/CTL strong + memory. Inactivated: dead antigen, weak innate, primarily MHC II (Th2, IgG), minimal CTL. Live often lifelong (1-2 doses), inactivated requires frequent boosters.

## Q2: Explain India NIS schedule - Why Measles at 9 months and not 12 months?
**A**: Measles highly contagious (Ro 12-18), very high childhood mortality in India. Maternal IgG wanes by 9 months (half-life ~30 days). Earlier vaccination catches children before endemic exposure. 2nd dose (15-18 months) catches primary vaccination failures (5-10%). Strategy: 2-dose regimen achieves 99% population immunity.

## Q3: What is herd immunity and why does India have measles outbreaks despite a vaccine?
**A**: Herd immunity threshold = % vaccinated needed to block transmission (1 - 1/Ro). Measles Ro 12-18 → need 95% coverage. India has 70-80% coverage in many districts (below threshold). Consequence: Susceptible pockets → epidemics possible. Solution: Improve coverage to 95% (campaigns).

## Q4: Why is booster vaccination timing critical (not too early, not too late)?
**A**: **Too early** (<4 weeks): Antibodies still high (plateau), no anamnestic response. **Optimal** (4-52 weeks): Antibody waned to low level, memory cells respond rapidly (secondary response). **Late booster**: Memory preserved long-term, still effective.

## Q5: Explain VAPP (Vaccine-Associated Poliovirus Paralysis) and why India switched OPV to IPV?
**A**: VAPP: rare complication of OPV (live virus). Occurs in immunocompromised patients or household contacts. Incidence: 1 per 2.4 million doses. India switched OPV→IPV booster (after primary OPV series) to reduce VAPP risk while maintaining population immunity. IPV safer in immunocompromised.

## Q6: How does a severely immunocompromised patient (HIV CD4 <50) approach vaccination?
**A**: 1) Avoid all live vaccines (MMR, varicella, BCG) - reversion risk. 2) Inactivated vaccines OK but expect poor response. 3) Administer inactivated anyway (some response better than none). 4) Defer non-urgent vaccines until CD4 >200. 5) Re-vaccinate post-immune recovery (CD4 >200 × 3 months on ART).

## Q7: What is anaphylaxis after vaccination, and what is first-aid management?
**A**: Type I hypersensitivity (IgE-mediated mast cell degranulation). Triggers: egg allergy (MMR, influenza), gelatin (MMR), neomycin. Occurs within minutes. **ONLY life-saving drug: Epinephrine IM 0.3-0.5 mg of 1:1000**. Then antihistamines, corticosteroids, 15+ min observation.

## Q8: Why is cold chain critical for vaccine efficacy, and how does heat damage affect potency?
**A**: Most vaccines contain heat-labile antigens (live viruses, proteins). Heat exposure breaks cold chain → antigen denaturation, reduced immunogenicity, lower seroconversion. Impact: appears vaccinated (booster bluff) but no protection. Solution: monitor storage, rapid use post-thaw, avoid freeze-thaw cycles.

## Q9: How does secondary immune response after booster differ from primary?
**A**: **Primary**: Lag 3-7d, IgM then IgG, peak low (10⁴-10⁵), weeks. **Secondary**: Lag 1-3d (memory), IgG immediate (no IgM), peak high (10⁶-10⁸, 100-1000x), months-years. Mechanism: memory B cells pre-exist, skip germinal center, direct plasma cell differentiation.

## Q10: Why pregnant women should not receive live vaccines but should receive inactivated Td?
**A**: **Live vaccines**: replicating organism in pregnancy → theoretical transplacental transmission (congenital infection). Avoid, especially 1st trimester. **Inactivated vaccines**: dead antigen, no replication → maternal IgG crosses placenta (protects newborn <2 months). Td safe + beneficial. Strategy: vaccinate with live BEFORE pregnancy, wait 28 days, then conceive.`,
        mnemonics: [
          {
            text: "Live = Long-term immunity (replication), Inactivated = Incremental booster strategy",
            explanation: "Why vaccine type determines durability and booster needs"
          },
          {
            text: "Measles India: 95% need, 70-80% have = ENDEMIC (EPIDEMIC)",
            explanation: "Coverage gap explains measles burden in India"
          }
        ],
        keyPoints: [
          "Live vaccines: MHC I + II response (Th1/CTL), durable immunity (1-2 doses)",
          "Inactivated: MHC II only (Th2), waning immunity (frequent boosters)",
          "India NIS: 9-month measles (early, high burden), BCG birth (TB endemic)",
          "Herd immunity measles 95%, polio 85% (transmission stopped at threshold)",
          "Booster timing optimal 4-52 weeks (memory responsive, antibody waning plateau)"
        ],
        textbookRefs: [
          { book: "Ananthanarayan & Paniker's Textbook of Microbiology", chapter: "Complete Review", edition: "11th" }
        ]
      }
    ]
  }
];
