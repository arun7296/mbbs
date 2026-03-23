import type { TopicLessons } from "./content-loader";

export const cmLessonsPart15: TopicLessons[] = [
  {
    topicCode: "CM-MOD-06-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "housing-ventilation-layer-1-foundation",
        title: "Housing & Ventilation - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of housing as social determinant of health, standards for adequate housing, overcrowding, ventilation requirements, and natural lighting in India.",
        contentMd: `# Housing & Ventilation - Foundation

## Definition of Adequate Housing

**Housing as Social Determinant of Health:**
- Provides protection from weather and environmental hazards
- Has adequate space without overcrowding
- Ensures good sanitation and hygiene
- Maintains proper ventilation and natural light
- Is affordable and accessible
- Supports physical and mental well-being

## Housing Standards in India

**Components of Adequate Housing:**
1. Water supply: Piped potable water within premises or nearby
2. Sanitation: Individual toilet facilities
3. Ventilation: Natural cross-ventilation
4. Natural lighting: Adequate daylight penetration
5. Overcrowding index: Adequate floor space
6. Safety: Structural integrity, fire safety
7. Affordability: ≤30% of household income

## Overcrowding Index (Floor Space Index)

**Definition:** Density of population in a dwelling

**Indian Standards:**
- Normal standard: 40 sq feet per person minimum
- Overcrowded housing: <40 sq feet per person
- Severely overcrowded: <20 sq feet per person

**Effects of Overcrowding:**
- ↑ Spread of communicable diseases (TB, respiratory infections)
- Poor hygiene practices
- Mental stress, behavioral problems
- ↑ Accident/injury risk
- Poor sleep quality
- Reduced school performance in children

## Ventilation Requirements

**Natural Ventilation Standards:**
- Windows on at least 2 opposite walls for cross-ventilation
- Window area = 1/10th to 1/8th of floor area
- Ceiling height ≥ 10 feet (residential), ≥ 12-14 feet (institutional/commercial)
- Room depth ≤2.5 times window height (for light penetration)

**Air Changes Required Per Hour:**
- Living room: 3-4 changes/hour
- Bedroom: 2-3 changes/hour
- Kitchen: 6-8 changes/hour
- Bathroom: 8-10 changes/hour
- Hospital ward: 6-12 changes/hour

## Natural Lighting Standards

**Requirements:**
- Window area = 1/10th to 1/6th of floor area
- At least one window facing outside
- Skylights in addition to windows
- Unobstructed light path (no dark corners)
- Light penetration depth ≤2.5× ceiling height

**Benefits of Natural Light:**
- Circadian rhythm regulation (sleep-wake cycle)
- Vitamin D synthesis (skin exposure)
- Reduced eye strain
- Improved mood (seasonal affective disorder prevention)
- Energy savings (reduced lighting costs)

## Building Materials & Construction

**Wall Materials:**
- Brick/stone: Durable, maintains temperature
- Adobe/mud: Good thermal properties, low cost (India)
- Concrete: Modern, durable, poor thermal regulation
- Thatch/temporary: High fire risk, poor durability

**Roof Materials:**
- Tile/slate: Long-lasting, moderate temperature
- Concrete: Modern, poor heat insulation (hot in summer)
- Thatch: Poor durability, fire hazard
- Corrugated metal: Noisy, poor thermal insulation (very hot in summer)

**Floor Materials:**
- Cement/tile: Easy to clean, durable
- Brick: Better thermal properties
- Mud: Dusty, difficult to clean
- Wood: Good insulation, fire hazard

## Thermal & Environmental Aspects

**Temperature & Humidity:**
- Ideal room temperature: 68-75°F (20-24°C)
- Relative humidity: 40-60%
- Excessive heat: ↑ Heat-related illnesses
- Excessive humidity: ↑ Fungal/mold growth, respiratory issues

**Condensation Control:**
- Caused by: Temperature difference, high humidity
- Problems: Mold, dampness, respiratory issues
- Solutions: Ventilation, insulation, dehumidification

**Noise Control:**
- Standards: <55 dB day, <45 dB night (residential)
- Impact: Sleep disruption, hypertension`,
        mnemonics: [
          {
            text: "HOUSING COMPONENTS",
            explanation: "Water, Sanitation, Ventilation, Lighting, Overcrowding index, Safety, Affordability",
          },
          {
            text: "OVERCROWDING",
            explanation: "Normal: 40 sq ft/person, Overcrowded: <40, Severe: <20",
          },
          {
            text: "VENTILATION RATES",
            explanation: "Living 3-4, Bedroom 2-3, Kitchen 6-8, Bathroom 8-10 air changes/hour",
          },
        ],
        keyPoints: [
          "Adequate housing is fundamental social determinant; water, sanitation, ventilation, light essential",
          "Overcrowding <40 sq ft/person causes disease spread, mental stress, poor school performance",
          "Cross-ventilation with windows on 2 opposite walls; window area ≥1/10th floor area",
          "Natural lighting 1/10th-1/6th floor area prevents rickets, improves mood, regulates circadian rhythm",
          "Building materials affect thermal regulation, durability, cost; cement roofs very hot in summer (India)",
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Ch 9", edition: "26th" },
          { book: "Indian Building Code 2016", chapter: "Residential standards", edition: "2016" },
        ],
      },
      {
        layer: 2,
        slug: "housing-ventilation-layer-2-mechanism",
        title: "Housing & Ventilation - Mechanism",
        estimatedMinutes: 30,
        summary: "Physiological mechanisms of housing effects on health, ventilation physics, thermal comfort, indoor air quality, and disease transmission pathways.",
        contentMd: `# Housing & Ventilation - Mechanism

## Ventilation & Air Quality

**Stack Effect:** Warm air rises, creates pressure difference → natural convection. Cold air enters lower openings. Strength depends on height difference and temperature difference.

**Wind Pressure:** Wind creates pressure on windward side → pushes air through building. Cross-ventilation most efficient with openings on opposite walls.

**Pollutant Removal:**
- CO₂ buildup: Stale air sensation
- Particulates (dust, smoke): Filtered by ventilation
- Volatile Organic Compounds (VOCs): Emitted by furniture, paints
- Biological agents (mold, bacteria): Promoted by stagnant air + humidity

## Thermal Comfort Mechanisms

**Heat Exchange Pathways:**
1. Conduction: Heat transfer through building materials
2. Convection: Air circulation carries heat
3. Radiation: Solar radiation through windows/roof
4. Evaporation: Moisture evaporation cools air

**Housing Design for Thermal Comfort:**
- Orientation: North-south (minimize east-west solar exposure)
- Insulation: Reduce heat conduction (thick walls, air gaps)
- Shading: Overhangs, vegetation block summer sun
- Ventilation: Cross-ventilation removes excess heat
- Materials: Light color roofs reflect heat (important in tropical India)

## Disease Transmission in Overcrowded Housing

**Respiratory Disease Transmission:**
- Droplet nuclei: <5 μm, remain airborne for hours
- TB: Airborne, viable for 1-2 hours
- Measles, influenza: Droplet/airborne
- Transmission risk ∝ 1/(room volume × air changes)

**Vector-Borne Disease Risk:**
- Mosquitoes (dengue, malaria): Breeding in stagnant water, rest in dark corners
- Overcrowded housing → poor sanitation → water stagnation
- Poor ventilation → dark corners for resting

**Gastrointestinal Disease:**
- Fecal-oral transmission: Poor sanitation + overcrowding
- Handwashing access reduced in overcrowded conditions

**Other Infections:**
- Scabies, lice: Direct transmission in close quarters
- Fungal infections: Thrive in damp, overcrowded conditions

## Lighting & Health Effects

**Circadian Rhythm:** Light exposure → suprachiasmatic nucleus signals. Morning light: ↑ Alertness. Evening light: ↑ Melatonin. Inadequate light: Sleep disorders, depression.

**Vitamin D Synthesis:** UVB exposure (290-315 nm) activates 7-dehydrocholesterol. 10-30 minutes midday: Produces ~1000 IU vitamin D. Dark housing: ↓ Vitamin D → rickets (children), osteomalacia (adults).

**Eye Health:** Adequate lighting prevents eye strain, supports development. Poor lighting: Myopia, astigmatism risk (especially children).

## Moisture & Mold Mechanisms

**Condensation Formation:**
- Occurs when air temperature drops below dew point
- Poor ventilation traps moisture
- Nighttime: Cooling of surfaces as outdoor temperature drops

**Mold Growth:**
- Occurs at >60% relative humidity
- Requires: Moisture, organic material, darkness, warmth
- Problems: Respiratory allergens, asthma triggers, mycotoxins
- Prevention: Ventilation, dehumidification, insulation`,
        mnemonics: [
          {
            text: "VENTILATION PHYSICS",
            explanation: "Stack effect (warm air rises), Wind pressure (pushes air), Cross-ventilation (opposite walls)",
          },
          {
            text: "THERMAL COMFORT",
            explanation: "Conduction (materials), Convection (air flow), Radiation (solar), Evaporation (cooling)",
          },
          {
            text: "DISEASE TRANSMISSION",
            explanation: "Droplet nuclei (TB, measles), Close contact (scabies), Fecal-oral (diarrhea), Vector-borne (dengue)",
          },
        ],
        keyPoints: [
          "Stack effect + wind pressure drive natural ventilation; cross-ventilation most efficient",
          "Thermal comfort: Materials insulation, shading, ventilation, orientation critical (especially tropical India)",
          "Overcrowding ↑ respiratory disease transmission (TB, measles proportional to density)",
          "Light regulates circadian rhythm (sleep-wake), vitamin D synthesis (rickets prevention), mental health",
          "Moisture + poor ventilation → mold growth → asthma, allergic responses",
        ],
        textbookRefs: [
          { book: "Environmental Health Textbook", chapter: "Housing, ventilation, indoor air quality", edition: "5th" },
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Ch 9", edition: "26th" },
        ],
      },
      {
        layer: 3,
        slug: "housing-ventilation-layer-3-clinical",
        title: "Housing & Ventilation - Clinical",
        estimatedMinutes: 20,
        summary: "Assessment of housing quality in health surveys, health promotion for better housing, interventions for overcrowding, ventilation improvement, and linkage to health programs.",
        contentMd: `# Housing & Ventilation - Clinical

## Housing Assessment

**History Taking:**
- Type of housing: Permanent, semi-permanent, temporary, kuccha
- Materials: Walls, roof, floor
- Occupants: Number, age structure
- Rooms: Number, size (estimate), uses
- Water source: Piped, well, tank, purchased
- Toilet: Individual, shared, open defecation
- Ventilation: Windows, doors, cross-ventilation
- Damp/moisture: Visible mold, condensation, dampness

**Housing Quality Scoring (WHO):**
- Water supply: Piped (2), Well (1), Unsafe (0)
- Sanitation: Individual toilet (2), Shared (1), None (0)
- Ventilation: Windows both walls (2), One side (1), None (0)
- Lighting: Adequate windows (2), Minimal (1), None (0)
- Overcrowding: >40 sq ft/person (2), 20-40 (1), <20 (0)
- Safety: Intact structure (2), Partial (1), Unsafe (0)
- Score: 10+ adequate, 5-9 moderate, <5 inadequate

## Interventions for Housing Improvement

**Individual/Household Level:**
1. Overcrowding reduction: Increase rooms, family planning education
2. Ventilation improvement: Open windows daily, add exhaust fans
3. Lighting enhancement: Clean windows, light paint, skylights
4. Moisture control: Ensure ventilation, repair leaks, dehumidifier
5. Safety improvements: Fire safety, electrical safety, window guards

**Community/Policy Level:**
- Housing subsidy programs (PMAY - Pradhan Mantri Awas Yojana)
- Rental regulations enforcement
- Building codes enforcement
- Slum upgrading programs

## Health Promotion for Better Housing

**Counseling Key Points:**
1. Ventilation: "Open windows 2+ hours daily; reduces TB transmission"
2. Overcrowding: "More people = more diseases spread"
3. Lighting: "Sunlight helps vitamin D production; prevents rickets"
4. Moisture: "Damp homes trigger asthma; ventilate and dry"
5. Safety: "Keep exits clear; safe cooking areas"

## Disease-Housing Linkage

**TB Control:** Ventilation critical → ↑ air changes → ↓ transmission. Contact investigation in overcrowded homes. Environmental control: Exhaust fans, repair leaks.

**Respiratory Infections:** Damp housing association → treat moisture. Ventilation improvement is primary intervention.

**Asthma & Allergies:** Mold remediation (bleach), humidity control, dust control, pest control (cockroaches).

**Vector-Borne Diseases:** Eliminate breeding sites, environmental management, screens/nets, window screens`,
        mnemonics: [
          {
            text: "HOUSING ASSESSMENT",
            explanation: "Water supply, Sanitation, Ventilation, Lighting, Overcrowding, Safety, Damp/mold",
          },
          {
            text: "VENTILATION COUNSELING",
            explanation: "Open windows 2+ hours daily, Reduces TB, Prevents mold, Improves sleep",
          },
          {
            text: "DISEASE-HOUSING LINK",
            explanation: "TB/pneumonia (ventilation), Asthma (mold/damp), Diarrhea (sanitation), Dengue (water stagnation)",
          },
        ],
        keyPoints: [
          "Assess housing: Water, sanitation, ventilation, light, crowding, safety, damp (scoring tool)",
          "Interventions: Improve ventilation (open windows, fans), reduce crowding (when feasible), light (windows), safety",
          "Health promotion: Emphasize ventilation for TB prevention, light for vitamin D and sleep, damp control for asthma",
          "Disease linkage: TB/respiratory (ventilation), asthma (mold/damp), diarrhea (sanitation), dengue (water management)",
          "Vulnerable groups need targeted support: Elderly (heating/safety), disabled (accessibility), poorest (subsidies)",
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Ch 9", edition: "26th" },
          { book: "WHO Housing Guidelines", chapter: "Health effects, assessment, interventions", edition: "2018" },
        ],
      },
      {
        layer: 4,
        slug: "housing-ventilation-layer-4-exam",
        title: "Housing & Ventilation - Exam Prep",
        estimatedMinutes: 15,
        summary: "NEXT-pattern MCQ preparation on housing standards, ventilation, overcrowding effects, indoor air quality, and health implications.",
        contentMd: `# Housing & Ventilation - Exam Preparation

## High-Yield Facts

**Housing Standards:**
- Minimum floor space: 40 sq ft/person
- Overcrowded: <40 sq ft/person; Severely: <20
- Ventilation: Window area 1/10th-1/8th of floor
- Windows on 2+ opposite walls required
- Ceiling height: ≥10 feet residential

**Air Changes/Hour Required:**
- Living: 3-4, Bedroom: 2-3, Kitchen: 6-8, Bathroom: 8-10

**Lighting Standards:**
- Window area: 1/10th-1/6th of floor area
- Light penetration depth ≤2.5× ceiling height

**Overcrowding Effects:**
- TB transmission risk ∝ occupancy density
- Respiratory infections, injuries increased
- Mental health stress, behavioral issues

**Disease-Housing Links:**
- TB: Ventilation critical
- Asthma: Mold/damp exacerbation
- Diarrhea: Poor sanitation
- Dengue/malaria: Vector breeding in stagnant water`,
        mnemonics: [
          {
            text: "FLOOR SPACE",
            explanation: "Normal: 40 sq ft/person, Overcrowded: <40, Severe: <20",
          },
          {
            text: "VENTILATION WINDOW",
            explanation: "Area: 1/10th floor, Location: 2+ opposite walls, Ceiling height ≥10 ft",
          },
          {
            text: "DISEASE-HOUSING",
            explanation: "TB (ventilation ↓), Asthma (mold ↑), Diarrhea (sanitation ↓), Dengue (water stagnation)",
          },
        ],
        keyPoints: [
          "Overcrowding <40 sq ft/person increases disease transmission (TB, respiratory infections)",
          "Ventilation: Windows 1/10th floor area, 2+ opposite walls, air changes/hour specific by room",
          "Natural light 1/10th-1/6th floor area: Vitamin D synthesis, circadian rhythm, mood, school performance",
          "Building materials: Brick good insulation; concrete/corrugated metal very hot (problematic in tropical India)",
          "Mold grows >60% humidity: Triggers asthma; ventilation + dehumidification solutions",
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Ch 9", edition: "26th" },
          { book: "Indian Building Code 2016", chapter: "Residential standards", edition: "2016" },
        ],
      },
      {
        layer: 5,
        slug: "housing-ventilation-layer-5-active-recall",
        title: "Housing & Ventilation - Active Recall",
        estimatedMinutes: 10,
        summary: "Quick recall of housing standards, ventilation, overcrowding, lighting, and health effects.",
        contentMd: `# Active Recall - Housing & Ventilation

**Q1:** What is the definition of adequate housing and what are its key components?
> Adequate housing provides protection from weather, adequate space, good sanitation, proper ventilation, natural lighting, is safe, and affordable. Components: Water supply (piped), sanitation (individual toilet), ventilation (cross-ventilation), natural light (windows), floor space (40 sq ft/person), safety (structural integrity), affordability (<30% income).

**Q2:** What is the overcrowding index and its health effects?
> Overcrowding index: Floor space per person. Normal: 40 sq ft/person, Overcrowded: <40, Severely: <20. Health effects: ↑ Respiratory disease transmission (TB, measles, bronchitis), poor hygiene, mental stress, behavioral problems, reduced school performance, ↑ accident/injury risk.

**Q3:** Describe ventilation standards for residential buildings in India.
> Window area: 1/10th-1/8th of floor area. Windows on 2+ opposite walls for cross-ventilation (stack effect + wind pressure). Ceiling height: ≥10 feet. Air changes per hour: Living 3-4, Bedroom 2-3, Kitchen 6-8, Bathroom 8-10.

**Q4:** What are the natural lighting requirements and health benefits?
> Lighting standards: Window area 1/10th-1/6th of floor area, at least 1 window outside, light penetration ≤2.5× ceiling height. Benefits: Circadian rhythm regulation, vitamin D synthesis (rickets prevention), prevents eye strain/myopia, improves mood (prevents SAD), supports school performance.

**Q5:** Explain the mechanism of TB transmission in overcrowded housing and prevention strategies.
> TB: Airborne transmission via droplet nuclei (<5 μm, remain airborne 1-2 hours). In overcrowded housing, transmission risk ∝ occupancy density. Prevention: Maximize ventilation (open windows ≥2 hours daily), increase air changes (fans), reduce crowding if possible, screen household contacts.

**Q6:** How does poor ventilation and high humidity lead to mold growth and respiratory disease?
> Mold grows at >60% relative humidity. Requires: Moisture, organic material, darkness, warmth. Condensation forms when air temperature drops below dew point. Mold releases allergens, mycotoxins → asthma exacerbation, allergic rhinitis, bronchitis. Prevention: Ventilation, dehumidification, insulation.

**Q7:** Describe how housing materials affect thermal comfort in tropical India.
> Thermal comfort depends on: Heat conduction (through materials), convection (air circulation), radiation (solar), evaporation. In India: Concrete roofs conduct excessive heat (very hot); corrugated metal even hotter and noisy. Better materials: Brick (good insulation), light-colored roofs (reflect heat), shading (overhangs, trees), ventilation (cross-ventilation).

**Q8:** What are housing quality assessment parameters?
> Assessment: Water (piped=2, well=1, unsafe=0), Sanitation (individual=2, shared=1, none=0), Ventilation (both walls=2, one=1, none=0), Lighting (adequate=2, minimal=1, none=0), Overcrowding (>40=2, 20-40=1, <20=0), Safety (intact=2, partial=1, unsafe=0). Score: 10+ adequate, 5-9 moderate, <5 inadequate.

**Q9:** Describe housing interventions for TB control and disease prevention.
> Ventilation: Open windows ≥2 hours daily (reduces airborne TB). Contact investigation in overcrowded homes (high transmission risk). Environmental control: Exhaust fans (kitchens), repair leaks. Family counseling: Sleeping arrangements, cough etiquette. Link to housing schemes (PMAY) for permanent improvement.

**Q10:** How are housing conditions linked to vector-borne diseases like dengue and malaria?
> Housing factors: Water stagnation (breeding) in poorly drained compounds, dark poorly-ventilated corners (mosquito resting sites). Overcrowded housing: Poor water management, sanitation → stagnation risk. Prevention: Drainage around house, covered water storage, eliminate stagnation, screened windows, improved ventilation.`,
        mnemonics: [
          {
            text: "HOUSING COMPONENTS",
            explanation: "Water, Sanitation, Ventilation, Lighting, Crowding, Safety, Affordability",
          },
          {
            text: "OVERCROWDING STANDARD",
            explanation: "40 sq ft/person normal, <40 overcrowded, <20 severe",
          },
          {
            text: "VENTILATION WINDOW",
            explanation: "Area 1/10th-1/8th floor, Location: 2+ opposite walls, Ceiling ≥10 ft",
          },
          {
            text: "AIR CHANGES/HOUR",
            explanation: "Living 3-4, Bedroom 2-3, Kitchen 6-8, Bathroom 8-10",
          },
          {
            text: "DISEASE-HOUSING LINKS",
            explanation: "TB (ventilation critical), Asthma (mold/damp), Diarrhea (sanitation), Vector (water stagnation)",
          },
        ],
        keyPoints: [
          "Adequate housing: Water, sanitation, ventilation, light, 40 sq ft/person, safety, affordability",
          "Overcrowding <40 sq ft/person: ↑ TB, respiratory infections, injuries, mental stress",
          "Ventilation: Windows 1/10th floor, 2+ opposite walls, ceiling ≥10 ft, cross-ventilation via stack effect",
          "Natural light 1/10th-1/6th floor: Vitamin D (rickets prevention), circadian rhythm, mood, eye health",
          "Building materials: Concrete hot; brick good; ventilation essential in tropical India; mold >60% humidity",
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Ch 9", edition: "26th" },
          { book: "Indian Building Code 2016", chapter: "Residential, institutional standards", edition: "2016" },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // CM-MOD-06-TOP-04: Occupational Health & Hazards
  // ═══════════════════════════════════════════════════════════════
  {
    topicCode: "CM-MOD-06-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "occupational-health-layer-1-foundation",
        title: "Occupational Health & Hazards - Foundation",
        estimatedMinutes: 20,
        summary: "Occupational health focuses on preventing work-related diseases and injuries. Hazards are classified as physical, chemical, biological, mechanical, and psychosocial.",
        contentMd: `# Occupational Health & Hazards - Foundation

## Definition
- **Occupational health**: Promotion and maintenance of highest degree of physical, mental, and social well-being of workers in all occupations (ILO/WHO)
- **Occupational disease**: Disease arising out of or in the course of employment

## Classification of Occupational Hazards
| Type | Examples |
|------|---------|
| **Physical** | Noise, heat, radiation, vibration, pressure |
| **Chemical** | Dusts, fumes, gases, solvents, pesticides |
| **Biological** | Infections, allergens (farmers, healthcare workers) |
| **Mechanical** | Accidents, injuries, ergonomic hazards |
| **Psychosocial** | Stress, burnout, harassment, shift work |

## Common Occupational Diseases in India
| Disease | Occupation | Agent |
|---------|-----------|-------|
| Silicosis | Mining, stone cutting | Silica dust |
| Asbestosis | Construction, shipbreaking | Asbestos fibers |
| Byssinosis | Cotton textile mills | Cotton dust |
| Lead poisoning | Battery, paint industry | Lead |
| Noise-induced hearing loss | Factory workers, mining | Noise >85 dB |
| Pesticide poisoning | Agriculture | Organophosphates |

## Pneumoconioses (Dust Diseases)
| Disease | Dust | X-ray Pattern |
|---------|------|--------------|
| Silicosis | Free silica (SiO2) | Eggshell calcification of hilar nodes |
| Asbestosis | Asbestos | Lower zone fibrosis, pleural plaques |
| Coal workers' | Coal dust | Upper zone nodules |
| Byssinosis | Cotton/flax/hemp | Monday fever (chest tightness) |

> **Clinical Pearl**: Silicosis is the most common occupational lung disease in India, prevalent among stone crushers, mine workers, and construction workers.`,
        mnemonics: [
          { text: "PCBMP for hazard types: Physical, Chemical, Biological, Mechanical, Psychosocial", explanation: "Five categories of occupational hazards" },
          { text: "Silicosis = Eggshell calcification on X-ray", explanation: "Pathognomonic finding: calcified hilar lymph nodes with eggshell pattern" }
        ],
        keyPoints: [
          "Five hazard types: physical, chemical, biological, mechanical, psychosocial",
          "Silicosis: most common pneumoconiosis in India (mining, stone cutting)",
          "Asbestosis: lower zone fibrosis + pleural plaques + mesothelioma risk",
          "Byssinosis: cotton textile workers, Monday fever",
          "Noise-induced hearing loss: >85 dB threshold",
          "Lead poisoning: battery and paint industry"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Ch 18: Occupational Health", edition: "26th" },
          { book: "Textbook of Preventive Medicine (Mahajan)", chapter: "Occupational Health", edition: "5th" }
        ]
      },
      {
        layer: 2,
        slug: "occupational-health-layer-2-mechanism",
        title: "Occupational Health & Hazards - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathogenesis of pneumoconioses, lead and mercury poisoning mechanisms, noise-induced hearing loss, and occupational cancer pathways.",
        contentMd: `# Occupational Hazards - Mechanism

## Silicosis Pathogenesis
1. Inhalation of free crystalline silica (quartz) particles <5 microns
2. Particles reach alveoli -> engulfed by macrophages
3. Silica is toxic to macrophages (lysosomal damage)
4. Macrophage death releases silica + inflammatory mediators
5. Fibroblast activation -> collagen deposition -> fibrotic nodules
6. Progressive massive fibrosis in advanced disease
- **Increased TB risk**: Silica impairs macrophage killing of M. tuberculosis (silicotuberculosis)

## Lead Poisoning Mechanism
- **Absorption**: GI tract (ingestion) or lungs (inhalation of fumes)
- **Blood**: Binds to RBC (>90% in blood bound to RBCs)
- **Enzyme inhibition**: ALA dehydratase and ferrochelatase
  - ALA dehydratase block -> ALA accumulates in urine
  - Ferrochelatase block -> zinc protoporphyrin accumulates
- **Effects**: Microcytic anemia (basophilic stippling), neuropathy, nephropathy
- **Children**: More vulnerable (lead encephalopathy, IQ reduction)

## Mercury Poisoning
- **Organic (methylmercury)**: Bioaccumulation in fish; crosses BBB
  - Minamata disease: neurological damage (ataxia, sensory loss)
- **Inorganic**: Hat industry, thermometer manufacturing
  - Mad hatter disease: erethism (irritability, tremor, gingivitis)

## Noise-Induced Hearing Loss
- Continuous exposure >85 dB -> cochlear hair cell damage
- Outer hair cells of organ of Corti damaged first
- **4000 Hz dip**: Earliest audiometric finding (acoustic notch)
- Progressive: 4000 Hz -> 2000 Hz -> 1000 Hz -> speech frequencies
- Irreversible once hair cells are lost

## Occupational Cancer
| Cancer | Agent | Occupation |
|--------|-------|-----------|
| Mesothelioma | Asbestos | Construction, shipbreaking |
| Bladder cancer | Beta-naphthylamine | Dye/rubber industry |
| Scrotal cancer | Soot | Chimney sweeps (historical) |
| Lung cancer | Asbestos, chromium, nickel | Mining, welding |
| Leukemia | Benzene | Petrochemical, paint |
| Liver angiosarcoma | Vinyl chloride | Plastics industry |`,
        mnemonics: [
          { text: "Silica kills Macrophages -> releases Fibrotic mediators", explanation: "Silica is directly toxic to macrophages; their death drives fibrosis" },
          { text: "Lead blocks ALA dehydratase + Ferrochelatase", explanation: "Two enzyme blocks in heme synthesis pathway causing anemia" },
          { text: "4000 Hz dip = earliest noise hearing loss", explanation: "Acoustic notch at 4 kHz is the earliest audiometric sign" }
        ],
        keyPoints: [
          "Silicosis: silica toxic to macrophages -> fibrotic nodules; increases TB risk",
          "Lead: blocks ALA dehydratase and ferrochelatase -> microcytic anemia with basophilic stippling",
          "Mercury: organic (Minamata, neuro) vs inorganic (Mad hatter, erethism)",
          "Noise: 4000 Hz dip earliest; outer hair cells damaged first; irreversible",
          "Asbestos: mesothelioma + lung cancer + lower zone fibrosis",
          "Benzene: leukemia; vinyl chloride: liver angiosarcoma"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Ch 18: Mechanisms", edition: "26th" },
          { book: "Robbins Pathologic Basis of Disease", chapter: "Environmental Disease", edition: "10th" }
        ]
      },
      {
        layer: 3,
        slug: "occupational-health-layer-3-clinical",
        title: "Occupational Health & Hazards - Clinical Application",
        estimatedMinutes: 20,
        summary: "Diagnosis and management of occupational diseases, industrial hygiene measures, PPE, Factories Act 1948, and ESI scheme in India.",
        contentMd: `# Occupational Health - Clinical Application

## Diagnosis of Occupational Disease
1. **Occupational history**: Detailed work exposure history (ESSENTIAL)
2. **Clinical examination**: Disease-specific signs
3. **Investigations**: Chest X-ray (pneumoconiosis), blood lead level, audiometry
4. **Biological monitoring**: Blood/urine levels of toxicants
5. **Environmental monitoring**: Workplace exposure measurement (TLV)

## Prevention Hierarchy (Most to Least Effective)
1. **Elimination**: Remove hazard entirely
2. **Substitution**: Replace with safer alternative
3. **Engineering controls**: Ventilation, enclosure, isolation
4. **Administrative controls**: Job rotation, reduced exposure time, training
5. **PPE**: Last resort (masks, gloves, earplugs, goggles)

## Threshold Limit Values (TLV)
- **TLV-TWA**: Time-weighted average for 8-hour day, 40-hour week
- **TLV-STEL**: Short-term exposure limit (15 min maximum)
- **TLV-C**: Ceiling (must never be exceeded)
- Noise: 85 dB TLV-TWA; hearing protection mandatory above this

## Indian Legislation
### Factories Act 1948
- Applies to premises with 10+ workers (with power) or 20+ (without)
- Provisions: Working hours (48/week), overtime, leave, health, safety
- Health: cleanliness, ventilation, lighting, drinking water, latrines
- Safety: fencing of machinery, fire safety, first aid

### ESI (Employees' State Insurance) Act 1948
- Social security for workers earning <21,000/month
- Benefits: medical, sickness, maternity, disability, funeral

### Workmen's Compensation Act 1923
- Compensation for injury/disease arising out of employment
- Employer liable for occupational disease in scheduled employment

## India-Specific Occupational Health Issues
- **Informal sector**: 93% of Indian workforce; no social security
- **Child labor**: Banned in hazardous industries (Child Labor Act 1986)
- **Migrant workers**: High occupational risk, poor access to healthcare
- **Agriculture**: Pesticide poisoning, musculoskeletal disorders

> **Clinical Pearl**: Always take a detailed occupational history. The question "What work do you do?" can unlock the diagnosis of many unexplained chronic diseases.`,
        mnemonics: [
          { text: "ESAPE for prevention hierarchy", explanation: "Elimination, Substitution, Administrative, PPE, Engineering (in order of effectiveness)" },
          { text: "TLV-TWA = 8-hour average; TLV-C = ceiling (never exceed)", explanation: "Two most important TLV concepts" }
        ],
        keyPoints: [
          "Occupational history is ESSENTIAL for diagnosis",
          "Prevention hierarchy: elimination > substitution > engineering > admin > PPE",
          "Factories Act 1948: applies to 10+ workers with power",
          "ESI: social security for workers <21,000/month",
          "93% of Indian workforce is informal sector with no social security",
          "Noise TLV-TWA: 85 dB; hearing protection mandatory above this"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Ch 18: Legislation", edition: "26th" }
        ]
      },
      {
        layer: 4,
        slug: "occupational-health-layer-4-exam-prep",
        title: "Occupational Health & Hazards - Exam Preparation",
        estimatedMinutes: 15,
        summary: "High-yield disease-agent-occupation associations, legislation, and prevention measures for NEXT/NEET PG.",
        contentMd: `# Occupational Health - Exam High Yield

## Disease-Agent-Occupation Table
| Disease | Agent | Occupation | Key Finding |
|---------|-------|-----------|-------------|
| Silicosis | Silica | Mining, stone cutting | Eggshell calcification |
| Asbestosis | Asbestos | Construction | Pleural plaques, mesothelioma |
| Byssinosis | Cotton dust | Textile mills | Monday fever |
| Lead poisoning | Lead | Battery, paint | Basophilic stippling, wrist drop |
| NIHL | Noise >85dB | Factories | 4000 Hz dip |
| Mesothelioma | Asbestos | Shipbreaking | Only asbestos (pathognomonic) |
| Bladder Ca | Beta-naphthylamine | Dye industry | Aniline dye workers |
| Angiosarcoma | Vinyl chloride | Plastics | Liver |
| Leukemia | Benzene | Petroleum | AML |

## Lead Poisoning Summary
- **Blood**: Basophilic stippling of RBCs, microcytic anemia
- **Urine**: Raised ALA and coproporphyrin
- **Burton line**: Blue line on gums (lead sulfide)
- **Wrist/foot drop**: Motor neuropathy
- **Children**: Encephalopathy, IQ reduction
- **Treatment**: Chelation (EDTA, DMSA, D-penicillamine)

## One-Liners
- Mesothelioma is ONLY caused by asbestos (pathognomonic)
- Silicosis increases TB risk (silicotuberculosis)
- Monday fever = byssinosis (improves during week, worsens Monday)
- Most dangerous dust: asbestos (carcinogenic + fibrotic)
- Scrotal cancer: first occupational cancer described (chimney sweeps, Pott 1775)
- Factories Act: 10+ workers with power; 48 hrs/week max`,
        mnemonics: [
          { text: "Burton's Blue line on gums = Lead", explanation: "Lead sulfide deposits on gingival margin" },
          { text: "Mesothelioma = Asbestos ONLY", explanation: "Only known cause of mesothelioma; pathognomonic association" }
        ],
        keyPoints: [
          "Silicosis: eggshell calcification, increased TB risk",
          "Asbestos: pleural plaques + mesothelioma (pathognomonic)",
          "Lead: basophilic stippling, Burton line, wrist drop, raised urinary ALA",
          "Noise: 4000 Hz dip earliest; irreversible",
          "Byssinosis: Monday fever in cotton workers",
          "Factories Act 1948: 10+ workers with power"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Ch 18", edition: "26th" }
        ]
      },
      {
        layer: 5,
        slug: "occupational-health-layer-5-active-recall",
        title: "Occupational Health & Hazards - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard Q&A for occupational diseases, hazard classification, legislation, and prevention.",
        contentMd: `# Occupational Health - Active Recall

**Q1:** Name the 5 types of occupational hazards.
> Physical, Chemical, Biological, Mechanical, Psychosocial

**Q2:** What is the pathognomonic X-ray finding in silicosis?
> Eggshell calcification of hilar lymph nodes

**Q3:** Why does silicosis increase TB risk?
> Silica impairs macrophage killing of M. tuberculosis (silicotuberculosis)

**Q4:** What is Burton line? What does it indicate?
> Blue-black line on gingival margin due to lead sulfide deposits. Indicates chronic lead poisoning

**Q5:** What is the earliest audiometric finding in noise-induced hearing loss?
> 4000 Hz dip (acoustic notch). Outer hair cells damaged first

**Q6:** What is Monday fever? Which disease?
> Chest tightness and breathlessness on returning to work Monday after weekend off. Byssinosis (cotton dust exposure)

**Q7:** Which cancer is pathognomonic for asbestos exposure?
> Mesothelioma (pleural or peritoneal). Only known cause is asbestos

**Q8:** What is the prevention hierarchy?
> Elimination > Substitution > Engineering controls > Administrative controls > PPE (most to least effective)

**Q9:** What is TLV-TWA for noise?
> 85 dB for 8-hour workday. Hearing protection mandatory above this

**Q10:** What does the Factories Act 1948 cover?
> Premises with 10+ workers (with power) or 20+ (without). Covers working hours (48/week), health, safety, welfare

**Q11:** What percentage of Indian workforce is in informal sector?
> 93%. Most have no occupational health coverage or social security

**Q12:** Name the chelating agents for lead poisoning.
> EDTA (calcium disodium), DMSA (succimer), D-penicillamine. DMSA preferred for children`,
        mnemonics: [],
        keyPoints: [
          "12 flashcards covering occupational hazards, diseases, and legislation",
          "Tests disease-agent associations and pathognomonic findings",
          "Includes prevention hierarchy and Indian legislation",
          "Reinforces India-specific occupational health issues"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Ch 18", edition: "26th" }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // CM-MOD-07-TOP-01: Healthcare Delivery System in India
  // ═══════════════════════════════════════════════════════════════
  {
    topicCode: "CM-MOD-07-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "healthcare-delivery-layer-1-foundation",
        title: "Healthcare Delivery System in India - Foundation",
        estimatedMinutes: 20,
        summary: "India's healthcare is delivered through a three-tier system: primary (SC, PHC), secondary (CHC, district hospital), and tertiary (medical colleges, specialty hospitals).",
        contentMd: `# Healthcare Delivery System in India - Foundation

## Three-Tier Structure

### Primary Level
| Facility | Population | Staff |
|----------|-----------|-------|
| Sub-Centre (SC) | 5000 (plains), 3000 (hilly) | 1 HW(F) + 1 HW(M) |
| Primary Health Centre (PHC) | 30,000 (plains), 20,000 (hilly) | 1 Medical Officer + 14 paramedical |

### Secondary Level
| Facility | Population | Beds |
|----------|-----------|------|
| Community Health Centre (CHC) | 1,20,000 (plains), 80,000 (hilly) | 30 beds |
| Sub-District Hospital | 5-10 lakh | 30-100 beds |
| District Hospital | 10-20 lakh | 100-500 beds |

### Tertiary Level
- Medical college hospitals
- Super-specialty hospitals
- Regional/national institutes (AIIMS, PGI, JIPMER)

## Key Health Infrastructure Numbers
- Sub-centres: ~160,000
- PHCs: ~30,000
- CHCs: ~6,000
- District hospitals: ~800

## Health Manpower
- Doctor-population ratio: ~1:1000 (WHO recommends 1:1000)
- Nurse-population ratio: ~1.7:1000 (WHO recommends 3:1000)
- India has ~70% of doctors in urban areas serving 30% population

> **Clinical Pearl**: The 30,000 PHC to 1,20,000 CHC population norms are frequently tested. Remember: SC(5K) -> PHC(30K) -> CHC(1.2L) -> District Hospital.`,
        mnemonics: [
          { text: "5-30-120 for facility populations (thousands)", explanation: "SC: 5000, PHC: 30000, CHC: 120000 (plains)" },
          { text: "3-20-80 for hilly areas", explanation: "SC: 3000, PHC: 20000, CHC: 80000 (hilly/tribal)" }
        ],
        keyPoints: [
          "Three-tier: primary (SC, PHC), secondary (CHC, district), tertiary (medical colleges)",
          "SC: 5000 population; PHC: 30000; CHC: 120000 (plains)",
          "Hilly/tribal: SC 3000, PHC 20000, CHC 80000",
          "CHC has 30 beds and 4 specialists (surgeon, physician, OBG, pediatrician)",
          "70% of doctors serve 30% urban population (maldistribution)",
          "India needs more nurses (1.7 vs WHO-recommended 3 per 1000)"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Ch 23: Health Care", edition: "26th" }
        ]
      },
      {
        layer: 2,
        slug: "healthcare-delivery-layer-2-mechanism",
        title: "Healthcare Delivery System - Mechanism",
        estimatedMinutes: 30,
        summary: "Functions of each tier, referral system, IPHS standards, role of ASHA/ANM/AWW, and integration of AYUSH with the public health system.",
        contentMd: `# Healthcare Delivery - Mechanism

## Functions by Level

### Sub-Centre
- Maternal and child health services
- Family planning services
- Immunization
- Treatment of minor ailments
- Health education
- Referral to PHC

### PHC (First Referral Unit for Rural)
- 6 beds (inpatient)
- OPD, emergency care
- National health program implementation
- Reproductive and child health
- Laboratory services
- 24/7 service (ideally)

### CHC (First Referral Unit - Surgical)
- 30 beds
- 4 specialists: Surgeon, Physician, OBG, Pediatrician
- X-ray, laboratory, OT
- Emergency obstetric care (EmOC)
- Blood storage/bank

### District Hospital
- Specialist and super-specialist services
- Teaching and training
- Administrative hub for district health programs

## Key Health Workers
| Worker | Level | Key Functions |
|--------|-------|--------------|
| ASHA | Village | Health promotion, referral, DOTS provider |
| ANM (HW-F) | Sub-centre | MCH, immunization, family planning |
| MPW (HW-M) | Sub-centre | Malaria, sanitation, health education |
| AWW (Anganwadi) | ICDS centre | Nutrition, preschool education |

## ASHA (Accredited Social Health Activist)
- One per 1000 population (rural)
- Selected from the village itself
- Trained for 23 days (induction) + periodic refresher
- Incentive-based (not salaried)
- Link between community and health system
- Key roles: promote institutional delivery, DOTS, immunization counseling

## IPHS (Indian Public Health Standards)
- Minimum standards for healthcare facilities
- Set by MoHFW (Ministry of Health and Family Welfare)
- Cover infrastructure, manpower, equipment, drugs
- Regularly revised

## Referral System
SC -> PHC -> CHC -> District Hospital -> Medical College -> Super-specialty`,
        mnemonics: [
          { text: "ASHA = 1000 population, village-based, incentive-based", explanation: "Key facts about ASHA workers" },
          { text: "CHC has 4 specialists: SPOP (Surgeon, Physician, OBG, Pediatrician)", explanation: "Four mandatory specialists at Community Health Centre" }
        ],
        keyPoints: [
          "PHC: 6 beds, 1 MO, national program implementation, 24/7",
          "CHC: 30 beds, 4 specialists (SPOP), blood bank, OT",
          "ASHA: 1 per 1000, village-based, incentive (not salaried)",
          "ANM at sub-centre: MCH, immunization, family planning",
          "AWW (Anganwadi Worker): nutrition + preschool under ICDS",
          "Referral: SC -> PHC -> CHC -> District -> Medical College"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Ch 23", edition: "26th" }
        ]
      },
      {
        layer: 3,
        slug: "healthcare-delivery-layer-3-clinical",
        title: "Healthcare Delivery System - Clinical Application",
        estimatedMinutes: 20,
        summary: "Challenges in Indian healthcare delivery, urban health services, private sector role, Health and Wellness Centres under Ayushman Bharat, and quality improvement.",
        contentMd: `# Healthcare Delivery - Clinical Application

## Challenges in Indian Healthcare
- **Rural-urban disparity**: 70% doctors in urban; 70% population rural
- **Infrastructure gaps**: Many SC/PHCs lack minimum standards
- **Human resource shortage**: Specialists vacant at CHCs
- **Out-of-pocket expenditure**: 62% of health spending (catastrophic for poor)
- **Quality**: Variable standards across public and private sectors

## Health and Wellness Centres (HWCs)
- Under Ayushman Bharat (2018): transform 1.5 lakh SC/PHCs into HWCs
- **Comprehensive Primary Health Care (CPHC)** package:
  - 12 services including NCD screening, mental health, oral health
  - Wellness activities: yoga, counseling
  - Telemedicine integration
- Staffed by Community Health Officer (BSc Community Health graduate)

## Urban Health Services
- Urban PHC: 50,000-1,00,000 population
- Urban CHC
- Mahila Arogya Samiti (MAS): women's health groups in urban slums
- National Urban Health Mission (NUHM): targets urban poor

## Private Sector in India
- 74% of outpatient care from private sector
- Unregulated in many areas
- Clinical Establishments Act (2010): registration and standards
- Public-private partnerships (PPP): increasing role

## Quality Improvement
- **NQAS (National Quality Assurance Standards)**: for public facilities
- **NABH (National Accreditation Board for Hospitals)**: voluntary accreditation
- **LaQshya**: quality improvement in labor rooms and OTs

> **Clinical Pearl**: India's out-of-pocket health expenditure (62%) is among the highest globally, pushing 50 million people into poverty annually.`,
        mnemonics: [
          { text: "HWC = 12 services + telemedicine + wellness", explanation: "Health and Wellness Centres deliver 12 CPHC packages" },
          { text: "OOP 62%: India's out-of-pocket health spending", explanation: "62% of health expenditure is out-of-pocket" }
        ],
        keyPoints: [
          "Rural-urban disparity: 70% doctors urban, 70% population rural",
          "HWCs under Ayushman Bharat: 12 CPHC services at SC/PHC level",
          "74% of outpatient care from private sector",
          "62% out-of-pocket expenditure (among highest globally)",
          "NQAS for public quality; NABH for accreditation",
          "Community Health Officer staffs HWCs"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Ch 23-24", edition: "26th" }
        ]
      },
      {
        layer: 4,
        slug: "healthcare-delivery-layer-4-exam-prep",
        title: "Healthcare Delivery System - Exam Preparation",
        estimatedMinutes: 15,
        summary: "High-yield population norms, facility standards, health worker roles, and recent policy changes.",
        contentMd: `# Healthcare Delivery - Exam High Yield

## Population Norms (Plains / Hilly)
| Facility | Plains | Hilly/Tribal |
|----------|--------|-------------|
| Sub-Centre | 5,000 | 3,000 |
| PHC | 30,000 | 20,000 |
| CHC | 1,20,000 | 80,000 |

## Facility Standards
| Facility | Beds | Key Staff |
|----------|------|-----------|
| SC | None | 1 ANM + 1 MPW |
| PHC | 6 | 1 MO + 14 paramedical |
| CHC | 30 | 4 specialists (SPOP) |

## Health Worker One-Liners
- ASHA: 1 per 1000 (rural), incentive-based, village resident
- ANM: Posted at SC, key MCH worker
- AWW: ICDS, nutrition + preschool
- CHO: BSc Community Health, posted at HWC

## Recent Policies
- Ayushman Bharat (2018): HWCs + PMJAY
- PMJAY: Rs 5 lakh/family/year for hospitalization
- NHM (2013): Merged NRHM + NUHM
- National Health Policy 2017: Health expenditure 2.5% of GDP target

## Previous Year Themes
- Population norms for SC, PHC, CHC
- Functions of CHC vs PHC
- ASHA: selection, training, functions
- HWC: services offered
- Out-of-pocket expenditure percentage`,
        mnemonics: [
          { text: "5-30-120 (plains); 3-20-80 (hilly)", explanation: "Population norms in thousands for SC-PHC-CHC" },
          { text: "SPOP at CHC: Surgeon, Physician, OBG, Pediatrician", explanation: "Four mandatory specialists" }
        ],
        keyPoints: [
          "SC: 5000/3000; PHC: 30000/20000; CHC: 120000/80000",
          "PHC: 6 beds, 1 MO; CHC: 30 beds, 4 specialists",
          "ASHA: village-based, incentive, 1 per 1000",
          "Ayushman Bharat: HWCs + PMJAY (5 lakh coverage)",
          "NHP 2017 target: 2.5% of GDP on health",
          "Out-of-pocket: 62% in India"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Ch 23", edition: "26th" }
        ]
      },
      {
        layer: 5,
        slug: "healthcare-delivery-layer-5-active-recall",
        title: "Healthcare Delivery System - Active Recall",
        estimatedMinutes: 10,
        summary: "Q&A for healthcare tiers, population norms, health workers, and health policy.",
        contentMd: `# Healthcare Delivery - Active Recall

**Q1:** Population norms for SC, PHC, CHC (plains)?
> SC: 5000, PHC: 30000, CHC: 120000

**Q2:** How many beds at PHC and CHC?
> PHC: 6 beds; CHC: 30 beds

**Q3:** Four specialists at CHC?
> Surgeon, Physician, Obstetrician-Gynecologist, Pediatrician

**Q4:** Who is ASHA? Key features?
> Accredited Social Health Activist. 1 per 1000 rural population. Village resident. Incentive-based (not salaried). Link between community and health system

**Q5:** What is the role of ANM?
> Auxiliary Nurse Midwife at sub-centre. MCH, immunization, family planning, health education

**Q6:** What are Health and Wellness Centres?
> Sub-centres/PHCs upgraded to deliver 12 CPHC services under Ayushman Bharat. Include NCD screening, mental health, oral health, telemedicine

**Q7:** What is India's out-of-pocket health expenditure?
> 62% (one of highest globally). Pushes 50 million into poverty annually

**Q8:** What is PMJAY?
> Pradhan Mantri Jan Arogya Yojana. Health insurance Rs 5 lakh/family/year for hospitalization. Targets bottom 40% of population

**Q9:** What percentage of doctors are in urban areas?
> ~70% of doctors serve ~30% urban population (maldistribution)

**Q10:** What is the NHP 2017 health expenditure target?
> 2.5% of GDP on health (current ~1.3%)

**Q11:** What is the referral chain in rural India?
> Sub-Centre -> PHC -> CHC -> District Hospital -> Medical College -> Super-specialty

**Q12:** What is NQAS?
> National Quality Assurance Standards. Framework for quality assessment of public health facilities`,
        mnemonics: [],
        keyPoints: [
          "12 flashcards covering healthcare delivery structure and policy",
          "Tests population norms, health worker roles, and facility standards",
          "Includes recent policies (Ayushman Bharat, PMJAY, HWC)",
          "Reinforces India-specific healthcare challenges"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Ch 23-24", edition: "26th" }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // CM-MOD-07-TOP-02: National Health Mission & Ayushman Bharat
  // ═══════════════════════════════════════════════════════════════
  {
    topicCode: "CM-MOD-07-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "nhm-ayushman-layer-1-foundation",
        title: "NHM & Ayushman Bharat - Foundation",
        estimatedMinutes: 20,
        summary: "NHM (2013) combines NRHM and NUHM for universal healthcare. Ayushman Bharat (2018) has two components: Health and Wellness Centres and PMJAY insurance scheme.",
        contentMd: `# National Health Mission & Ayushman Bharat

## National Health Mission (NHM) - 2013
- Merges NRHM (2005) and NUHM (2013)
- Goal: Universal access to equitable, affordable, quality healthcare
- Centrally sponsored scheme (60:40 Centre:State funding)

### NRHM Components
- Strengthening rural health infrastructure
- ASHA program (community health workers)
- Janani Suraksha Yojana (JSY): conditional cash transfer for institutional delivery
- Rogi Kalyan Samiti: hospital management committees
- Mobile Medical Units for remote areas
- IPHS implementation

### NUHM Focus
- Urban poor and slum health
- Urban PHCs and Urban CHCs
- Mahila Arogya Samiti

## Ayushman Bharat (2018)
### Component 1: Health and Wellness Centres (HWCs)
- 1.5 lakh SC/PHCs converted to HWCs
- 12 CPHC services including NCD screening, mental health, oral health
- Staffed by Community Health Officer
- Wellness promotion: yoga, health education

### Component 2: PMJAY (Pradhan Mantri Jan Arogya Yojana)
- Health insurance Rs 5 lakh per family per year
- Cashless hospitalization at empaneled hospitals
- Targets bottom 40% (10.74 crore families)
- Based on SECC (Socio-Economic Caste Census) 2011 data
- Portable across India (any empaneled hospital)

> **Clinical Pearl**: JSY has significantly increased institutional deliveries from 40% to over 80% in many states since its implementation.`,
        mnemonics: [
          { text: "NHM = NRHM + NUHM (2013)", explanation: "National Health Mission combines rural and urban health missions" },
          { text: "PMJAY = 5 lakh + 10.74 crore families + cashless", explanation: "Key numbers for Ayushman Bharat insurance component" }
        ],
        keyPoints: [
          "NHM (2013): merges NRHM + NUHM for universal healthcare",
          "ASHA program and JSY are key NRHM interventions",
          "Ayushman Bharat: HWCs (primary) + PMJAY (insurance)",
          "PMJAY: Rs 5 lakh/family/year, bottom 40%, cashless, portable",
          "HWCs: 12 CPHC services at upgraded SC/PHC level",
          "JSY: conditional cash for institutional delivery"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Ch 24: National Programs", edition: "26th" }
        ]
      },
      {
        layer: 2,
        slug: "nhm-ayushman-layer-2-mechanism",
        title: "NHM & Ayushman Bharat - Mechanism",
        estimatedMinutes: 30,
        summary: "Implementation framework, funding mechanisms, PMJAY enrollment and claim process, JSY eligibility, and key health scheme components.",
        contentMd: `# NHM & Ayushman Bharat - Implementation

## NHM Implementation Framework
- **Central level**: MoHFW provides policy, funding, technical support
- **State level**: State Health Mission adapts to local needs
- **District level**: District Health Mission implements programs
- **Block/facility level**: Service delivery

## Key NHM Sub-schemes
| Scheme | Purpose | Beneficiary |
|--------|---------|-------------|
| JSY | Cash for institutional delivery | BPL pregnant women |
| JSSK | Free delivery + transport + drugs | All pregnant women + sick neonates |
| RBSK | Child health screening (0-18yr) | School children |
| Rashtriya Bal Swasthya Karyakram | 4D screening (defects, diseases, deficiencies, delays) | 0-18 years |
| RKSK | Adolescent health | 10-19 years |

## JSY Details
- **High-performing states** (KE, TN, AP, etc.): Rs 700 (rural), Rs 600 (urban)
- **Low-performing states** (UP, Bihar, MP, etc.): Rs 1400 (rural), Rs 1000 (urban)
- BPL, SC/ST eligible
- Mother receives cash after institutional delivery

## PMJAY Implementation
1. **Identification**: SECC 2011 database (deprivation criteria)
2. **Enrollment**: Free, no premium for beneficiary
3. **E-card**: Ayushman card for identification
4. **Treatment**: Cashless at any empaneled hospital (public or private)
5. **Claim**: Hospital submits to NHA (National Health Authority)
6. **Packages**: 1,393 treatment packages defined

## PMJAY Coverage
- Secondary and tertiary hospitalization
- Pre-existing conditions covered from day 1
- 3-day pre-hospitalization + 15-day post-hospitalization
- No cap on family size
- Portable: can use anywhere in India

## Health Insurance Landscape in India
| Scheme | Coverage | Population |
|--------|---------|-----------|
| PMJAY | Rs 5 lakh hospitalization | Bottom 40% |
| ESIC | Comprehensive | Formal sector <21K/month |
| CGHS | Comprehensive | Central govt employees |
| State schemes | Variable | State-specific |`,
        mnemonics: [
          { text: "JSSK = Janani Shishu Suraksha Karyakram (free delivery)", explanation: "Free delivery, C-section, drugs, diagnostics, diet, transport for ALL pregnant women" },
          { text: "RBSK = 4D: Defects, Diseases, Deficiencies, Delays", explanation: "School health screening program components" }
        ],
        keyPoints: [
          "JSY: cash incentive, BPL women, higher amount in low-performing states",
          "JSSK: free delivery + transport + drugs for ALL pregnant women",
          "RBSK: 4D screening for children 0-18 years",
          "PMJAY: no premium, SECC-based, 1393 treatment packages",
          "PMJAY covers pre-existing conditions from day 1",
          "Portable across India at any empaneled hospital"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Ch 24", edition: "26th" }
        ]
      },
      {
        layer: 3,
        slug: "nhm-ayushman-layer-3-clinical",
        title: "NHM & Ayushman Bharat - Clinical Application",
        estimatedMinutes: 20,
        summary: "Impact assessment of NHM programs, challenges in implementation, role of health professionals, and comparison with other countries' universal health coverage models.",
        contentMd: `# NHM & Ayushman Bharat - Impact and Challenges

## NHM Impact
- Institutional deliveries increased from 40% (2005) to >85% (2020)
- IMR declined from 58 (2005) to 28 (2020)
- MMR declined from 254 to 97 per 100,000 live births
- Full immunization coverage improved from 44% to 76%
- 10+ lakh ASHA workers deployed

## PMJAY Impact (Since 2018)
- 30+ crore Ayushman cards issued
- 5+ crore hospital admissions authorized
- Rs 50,000+ crore claims processed
- 28,000+ empaneled hospitals

## Challenges
- **JSY**: Cash incentive alone does not ensure quality care
- **ASHA**: Low incentives, irregular payment, heavy workload
- **PMJAY**: Limited to hospitalization (no OPD coverage), fraud risk
- **Infrastructure**: Many facilities below IPHS standards
- **Human resources**: Specialist vacancies at CHCs (>50% in some states)
- **Private sector regulation**: Overcharging, unnecessary procedures

## Role of Medical Professionals
- Implement national health programs at facility level
- Provide quality care per protocols
- Data reporting for HMIS (Health Management Information System)
- Community engagement and health education
- Ethical practice: avoid unnecessary interventions

## Universal Health Coverage (UHC) Progress
- India committed to UHC by SDG target (2030)
- Current coverage: ~55% of essential health services
- Major gaps: financial protection, service coverage, quality
- NHP 2017: increase health spending to 2.5% GDP

> **Clinical Pearl**: Despite impressive PMJAY enrollment numbers, actual utilization remains low in many states due to awareness gaps, limited hospital empanelment in rural areas, and portability challenges.`,
        mnemonics: [
          { text: "NHM success: IMR 58->28, MMR 254->97", explanation: "Key impact indicators of National Health Mission" },
          { text: "UHC = Universal Health Coverage by 2030 (SDG)", explanation: "India's commitment under Sustainable Development Goals" }
        ],
        keyPoints: [
          "NHM: institutional deliveries 40%->85%, IMR 58->28, MMR 254->97",
          "PMJAY: 30+ crore cards, 5+ crore admissions since 2018",
          "ASHA challenges: low pay, irregular payment, heavy workload",
          "PMJAY gaps: no OPD coverage, fraud risk, low rural utilization",
          "UHC by 2030 (SDG); current essential service coverage ~55%",
          "NHP 2017: target 2.5% GDP on health (current ~1.3%)"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Ch 24", edition: "26th" }
        ]
      },
      {
        layer: 4,
        slug: "nhm-ayushman-layer-4-exam-prep",
        title: "NHM & Ayushman Bharat - Exam Preparation",
        estimatedMinutes: 15,
        summary: "High-yield scheme details, amounts, eligibility, and impact statistics for NEXT/NEET PG.",
        contentMd: `# NHM & Ayushman Bharat - Exam High Yield

## Quick Reference
| Scheme | Year | Key Feature |
|--------|------|-------------|
| NRHM | 2005 | Rural health infrastructure + ASHA |
| NHM | 2013 | NRHM + NUHM merged |
| Ayushman Bharat | 2018 | HWC + PMJAY |
| JSY | 2005 | Cash for institutional delivery |
| JSSK | 2011 | Free delivery for ALL |
| RBSK | 2013 | 4D child health screening |

## PMJAY Key Numbers
- Rs 5 lakh per family per year
- 10.74 crore families (50 crore beneficiaries)
- 1,393 treatment packages
- No premium for beneficiary
- Based on SECC 2011

## One-Liners
- ASHA: 1 per 1000, village, incentive-based
- JSY cash: Rs 1400 (rural LPS), Rs 700 (rural HPS)
- JSSK: zero out-of-pocket for delivery
- RBSK: 4D (Defects, Diseases, Deficiencies, Developmental delays)
- HWC: 12 CPHC services at SC/PHC level
- PMJAY: cashless, portable, pre-existing covered
- NHP 2017: 2.5% GDP target for health

## Previous Year Themes
- PMJAY coverage amount and eligibility
- JSY cash amounts by state category
- ASHA role and selection criteria
- NHM components
- HWC services`,
        mnemonics: [
          { text: "5-10-1393: Rs 5 lakh, 10.74 crore families, 1393 packages", explanation: "Three key PMJAY numbers" },
          { text: "JSY: 1400 LPS rural, 700 HPS rural", explanation: "Cash incentive amounts by state performance category" }
        ],
        keyPoints: [
          "PMJAY: 5 lakh, 10.74 crore families, 1393 packages, no premium",
          "JSY: Rs 1400 (LPS rural), Rs 700 (HPS rural)",
          "JSSK: zero cost delivery for all pregnant women",
          "RBSK: 4D screening for children",
          "HWC: 12 CPHC services",
          "NHP 2017: 2.5% GDP target"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Ch 24", edition: "26th" }
        ]
      },
      {
        layer: 5,
        slug: "nhm-ayushman-layer-5-active-recall",
        title: "NHM & Ayushman Bharat - Active Recall",
        estimatedMinutes: 10,
        summary: "Q&A for NHM programs, Ayushman Bharat components, and scheme details.",
        contentMd: `# NHM & Ayushman Bharat - Active Recall

**Q1:** What is NHM? When was it launched?
> National Health Mission (2013). Merges NRHM (2005) + NUHM for universal healthcare access

**Q2:** Two components of Ayushman Bharat?
> Health and Wellness Centres (HWCs) at primary level, PMJAY (insurance) for secondary/tertiary

**Q3:** PMJAY coverage amount?
> Rs 5 lakh per family per year for hospitalization. Cashless. No premium. Portable

**Q4:** Who is eligible for PMJAY?
> Bottom 40% population identified through SECC 2011 data (10.74 crore families)

**Q5:** What is JSY? Cash amounts?
> Janani Suraksha Yojana: cash for institutional delivery. Rs 1400 (rural LPS), Rs 700 (rural HPS)

**Q6:** What is JSSK?
> Janani Shishu Suraksha Karyakram: free delivery, C-section, drugs, diagnostics, diet, transport for ALL pregnant women and sick neonates (zero out-of-pocket)

**Q7:** What is RBSK?
> Rashtriya Bal Swasthya Karyakram: 4D screening (Defects, Diseases, Deficiencies, Developmental delays) for children 0-18 years

**Q8:** How many services at Health and Wellness Centres?
> 12 CPHC services including NCD screening, mental health, oral health, elderly care, palliative care

**Q9:** Key NHM impact indicators?
> IMR 58->28, MMR 254->97, institutional delivery 40%->85%, immunization 44%->76%

**Q10:** What is NHP 2017 health expenditure target?
> 2.5% of GDP (current ~1.3%). Also targets reducing OOP to 25%

**Q11:** What are PMJAY treatment packages?
> 1,393 defined packages for secondary and tertiary procedures. Pre-existing conditions covered from day 1

**Q12:** Main PMJAY challenge?
> Low utilization due to awareness gaps, limited rural hospital empanelment, and no OPD coverage`,
        mnemonics: [],
        keyPoints: [
          "12 flashcards covering NHM, Ayushman Bharat, JSY, JSSK, RBSK, PMJAY",
          "Tests scheme details, amounts, and eligibility criteria",
          "Includes impact statistics",
          "Reinforces current health policy knowledge"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Ch 24", edition: "26th" }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // CM-MOD-07-TOP-03: Health Education & Behavior Change
  // ═══════════════════════════════════════════════════════════════
  {
    topicCode: "CM-MOD-07-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "health-education-layer-1-foundation",
        title: "Health Education & Behavior Change - Foundation",
        estimatedMinutes: 20,
        summary: "Health education aims to change health behavior through IEC and BCC strategies. Models include Health Belief Model, Transtheoretical Model, and Social Cognitive Theory.",
        contentMd: `# Health Education & Behavior Change

## Definition
- **Health education**: Process of enabling people to increase control over and improve their health
- **IEC**: Information, Education, Communication
- **BCC**: Behavior Change Communication (more interactive, community-focused)

## Approaches to Health Education
| Approach | Description | Example |
|----------|-----------|---------|
| Didactic | One-way information transfer | Lectures, pamphlets |
| Socratic | Two-way discussion | Group discussions, counseling |
| Persuasive | Motivation to change | Mass media campaigns |
| Participatory | Community involvement | Peer education, role play |

## Methods of Health Education
### Individual Methods
- Personal counseling, one-on-one education
- Most effective for behavior change (personalized)

### Group Methods
- Group discussions, role play, demonstrations
- Peer education programs
- Self-help groups

### Mass Methods
- TV, radio, newspapers, social media
- Posters, pamphlets, billboards
- Street plays (nukkad natak), folk media

## Behavior Change Models
### Health Belief Model (Rosenstock)
- **Perceived susceptibility**: "Am I at risk?"
- **Perceived severity**: "How serious is this?"
- **Perceived benefits**: "Will this action help?"
- **Perceived barriers**: "What prevents me?"
- **Cue to action**: Trigger for behavior change
- **Self-efficacy**: "Can I do it?"

### Transtheoretical Model (Prochaska)
1. **Precontemplation**: Not thinking about change
2. **Contemplation**: Thinking about change (within 6 months)
3. **Preparation**: Planning to change (within 1 month)
4. **Action**: Making the change
5. **Maintenance**: Sustaining change (>6 months)
6. **Relapse**: Returning to old behavior

> **Clinical Pearl**: In India, folk media (nukkad natak, puppetry) remains one of the most effective health education tools in rural areas where literacy is low.`,
        mnemonics: [
          { text: "Health Belief Model: SSBBC (Susceptibility, Severity, Benefits, Barriers, Cue)", explanation: "Five components of the Health Belief Model" },
          { text: "Stages of Change: PC-CPAM (Precontemplation, Contemplation, Preparation, Action, Maintenance)", explanation: "Five stages of Transtheoretical Model" }
        ],
        keyPoints: [
          "IEC = Information, Education, Communication; BCC = Behavior Change Communication",
          "Health Belief Model: susceptibility, severity, benefits, barriers, cue to action, self-efficacy",
          "Transtheoretical: precontemplation -> contemplation -> preparation -> action -> maintenance",
          "Individual counseling is most effective for behavior change",
          "Mass media reaches largest audience but less effective for behavior change",
          "Folk media effective in rural India (nukkad natak, puppetry)"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Ch 22: Health Education", edition: "26th" }
        ]
      },
      {
        layer: 2,
        slug: "health-education-layer-2-mechanism",
        title: "Health Education & Behavior Change - Mechanism",
        estimatedMinutes: 30,
        summary: "Communication theories, social marketing, PRECEDE-PROCEED model, and evaluation of health education programs.",
        contentMd: `# Health Education - Mechanism

## Communication Process
- **Source**: Credible, trustworthy communicator
- **Message**: Clear, culturally appropriate, actionable
- **Channel**: Appropriate medium (interpersonal, mass media, digital)
- **Receiver**: Target audience (literacy, culture, beliefs)
- **Feedback**: Two-way communication essential

## Social Cognitive Theory (Bandura)
- **Reciprocal determinism**: Behavior, personal factors, environment interact
- **Observational learning**: Learning from role models
- **Self-efficacy**: Confidence in ability to perform behavior
- **Reinforcement**: Positive/negative consequences

## PRECEDE-PROCEED Model (Green)
### PRECEDE (Planning Phase)
- **P**redisposing factors: Knowledge, attitudes, beliefs
- **R**einforcing factors: Rewards, feedback, social support
- **E**nabling factors: Resources, skills, accessibility

### PROCEED (Implementation + Evaluation)
- Process evaluation: Was program implemented as planned?
- Impact evaluation: Did knowledge/behavior change?
- Outcome evaluation: Did health status improve?

## Social Marketing
- Applying commercial marketing principles to health
- **4 Ps**: Product (behavior), Price (cost of change), Place (accessibility), Promotion (communication)
- Example: Pulse Polio campaign, condom social marketing

## Health Literacy
- Ability to obtain, understand, and use health information
- Low health literacy associated with poor health outcomes
- India: varies greatly by region, gender, education level

## Evaluation of Health Education
| Level | Measure | Example |
|-------|---------|---------|
| Input | Resources used | Budget, staff, materials |
| Process | Activities done | Sessions conducted, attendance |
| Output | Immediate results | Knowledge gained (pre/post test) |
| Outcome | Behavior change | Handwashing practice |
| Impact | Health status | Diarrhea incidence reduction |`,
        mnemonics: [
          { text: "PRECEDE = Predisposing + Reinforcing + Enabling factors", explanation: "Three factor categories in the planning phase of PRECEDE-PROCEED" },
          { text: "4 Ps of Social Marketing: Product, Price, Place, Promotion", explanation: "Marketing principles applied to health behavior change" }
        ],
        keyPoints: [
          "Communication needs credible source, clear message, appropriate channel",
          "Bandura: self-efficacy is key predictor of behavior change",
          "PRECEDE-PROCEED: predisposing + reinforcing + enabling factors",
          "Social marketing: 4 Ps (Product, Price, Place, Promotion)",
          "Evaluation levels: input -> process -> output -> outcome -> impact",
          "Low health literacy associated with poor outcomes"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Ch 22", edition: "26th" }
        ]
      },
      {
        layer: 3,
        slug: "health-education-layer-3-clinical",
        title: "Health Education & Behavior Change - Clinical",
        estimatedMinutes: 20,
        summary: "Practical health education in clinical settings, patient counseling techniques, community-based programs in India, and digital health education.",
        contentMd: `# Health Education - Clinical Application

## Clinical Health Education (5As Framework)
1. **Ask**: Assess patient's health behavior and readiness to change
2. **Advise**: Clear personalized advice to change
3. **Assess**: Evaluate willingness to change (stage of change)
4. **Assist**: Provide tools and support for behavior change
5. **Arrange**: Follow-up plan

## Motivational Interviewing
- Patient-centered counseling technique
- Express empathy, develop discrepancy, roll with resistance, support self-efficacy
- Effective for addiction, chronic disease management, lifestyle modification

## Community Health Education Programs (India)
- **Pulse Polio**: Mass media + community mobilization -> polio eradication
- **Swachh Bharat Mission**: Sanitation behavior change
- **National Tobacco Control Programme**: IEC against tobacco use
- **Adolescent-Friendly Health Clinics**: RKSK program
- **Village Health Sanitation Nutrition Day (VHSND)**: Monthly health education at AWC

## Digital Health Education
- mHealth: SMS reminders for medication adherence, ANC visits
- Telemedicine counseling at HWCs
- Social media campaigns (COVID-19 awareness)
- AI chatbots for health information
- Aarogya Setu app during pandemic

## Challenges in India
- Diverse languages and cultures
- Low literacy in rural areas
- Myths and misconceptions about health
- Gender barriers to health information access
- Digital divide (rural vs urban access)

> **Clinical Pearl**: The 5As framework is the most practical tool for clinical health education. Every patient encounter is an opportunity for brief health advice.`,
        mnemonics: [
          { text: "5As: Ask, Advise, Assess, Assist, Arrange", explanation: "Clinical framework for health education at every patient encounter" },
          { text: "MI = Express empathy + Develop discrepancy + Roll with resistance + Support self-efficacy", explanation: "Four principles of Motivational Interviewing" }
        ],
        keyPoints: [
          "5As framework for clinical health education at every patient visit",
          "Motivational interviewing: empathy, discrepancy, resistance, self-efficacy",
          "Pulse Polio: most successful mass health education campaign in India",
          "VHSND: monthly health education at village level",
          "mHealth and telemedicine expanding health education reach",
          "Challenges: literacy, language diversity, myths, gender barriers"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Ch 22", edition: "26th" }
        ]
      },
      {
        layer: 4,
        slug: "health-education-layer-4-exam-prep",
        title: "Health Education & Behavior Change - Exam Preparation",
        estimatedMinutes: 15,
        summary: "High-yield behavior change models, health education methods, evaluation frameworks for NEXT/NEET PG.",
        contentMd: `# Health Education - Exam High Yield

## Model Comparison
| Model | Key Concept | Application |
|-------|-----------|-------------|
| Health Belief | Perceived threat + benefits | Vaccination uptake |
| Transtheoretical | Stages of change | Smoking cessation |
| Social Cognitive | Self-efficacy + modeling | Diet/exercise programs |
| PRECEDE-PROCEED | Planning + evaluation framework | Program design |

## Methods Effectiveness Ranking
1. Individual counseling (most effective for behavior change)
2. Group methods (peer education, demonstrations)
3. Mass media (widest reach, least effective per individual)

## One-Liners
- Most effective method: Individual counseling
- Widest reach: Mass media (TV, radio)
- IEC = one-way; BCC = two-way interactive
- Health Belief Model by Rosenstock (1966)
- Transtheoretical by Prochaska & DiClemente
- 5As: Ask, Advise, Assess, Assist, Arrange
- Nukkad natak: most effective rural folk media

## Previous Year Themes
- Health Belief Model components
- Transtheoretical stages of change
- IEC vs BCC difference
- Methods of health education
- PRECEDE-PROCEED model
- Social marketing 4 Ps`,
        mnemonics: [
          { text: "Rosenstock = Belief; Prochaska = Stages; Bandura = Self-efficacy", explanation: "Three theorists and their key contributions" },
          { text: "Individual > Group > Mass (effectiveness ranking)", explanation: "Individual methods most effective but least reach; mass least effective but widest reach" }
        ],
        keyPoints: [
          "Health Belief Model: susceptibility, severity, benefits, barriers, cue, self-efficacy",
          "Transtheoretical: 5 stages from precontemplation to maintenance",
          "PRECEDE-PROCEED: predisposing + reinforcing + enabling -> evaluation",
          "Individual counseling most effective; mass media widest reach",
          "5As for clinical health education",
          "Social marketing: 4 Ps applied to health"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Ch 22", edition: "26th" }
        ]
      },
      {
        layer: 5,
        slug: "health-education-layer-5-active-recall",
        title: "Health Education & Behavior Change - Active Recall",
        estimatedMinutes: 10,
        summary: "Q&A for health education models, methods, and application.",
        contentMd: `# Health Education - Active Recall

**Q1:** Name the components of the Health Belief Model.
> Perceived susceptibility, perceived severity, perceived benefits, perceived barriers, cue to action, self-efficacy

**Q2:** List the stages of the Transtheoretical Model.
> Precontemplation, Contemplation, Preparation, Action, Maintenance (+ Relapse)

**Q3:** What is the difference between IEC and BCC?
> IEC is one-way information transfer. BCC is two-way interactive communication aimed at behavior change

**Q4:** What is the most effective health education method?
> Individual counseling (personalized, interactive). But narrowest reach

**Q5:** What are the 5As of clinical health education?
> Ask, Advise, Assess, Assist, Arrange

**Q6:** What is the PRECEDE-PROCEED model?
> Planning framework: PRECEDE identifies predisposing, reinforcing, enabling factors. PROCEED implements and evaluates (process, impact, outcome)

**Q7:** What are the 4 Ps of social marketing?
> Product (behavior to adopt), Price (cost of change), Place (accessibility), Promotion (communication strategy)

**Q8:** What is motivational interviewing?
> Patient-centered counseling technique using empathy, developing discrepancy, rolling with resistance, and supporting self-efficacy

**Q9:** Most effective health education tool in rural India?
> Folk media (nukkad natak, puppetry) combined with interpersonal communication by ASHAs/ANMs

**Q10:** What is Bandura's key contribution to health education?
> Social Cognitive Theory: self-efficacy (confidence in ability to change) is the strongest predictor of behavior change

**Q11:** What evaluation level measures actual health status change?
> Impact evaluation (e.g., reduction in disease incidence). Outcome measures behavior change

**Q12:** Name a successful mass health education campaign in India.
> Pulse Polio campaign: combination of mass media, community mobilization, and house-to-house visits led to polio eradication in 2014`,
        mnemonics: [],
        keyPoints: [
          "12 flashcards on health education models, methods, and campaigns",
          "Tests Health Belief Model, Transtheoretical, and PRECEDE-PROCEED",
          "Includes clinical application (5As, motivational interviewing)",
          "Covers India-specific programs and challenges"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Ch 22", edition: "26th" }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // CM-MOD-07-TOP-04: Disaster Management & International Health
  // ═══════════════════════════════════════════════════════════════
  {
    topicCode: "CM-MOD-07-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "disaster-intl-health-layer-1-foundation",
        title: "Disaster Management & International Health - Foundation",
        estimatedMinutes: 20,
        summary: "Disaster management involves preparedness, mitigation, response, and recovery. International health is coordinated by WHO and guided by SDGs and IHR regulations.",
        contentMd: `# Disaster Management & International Health

## Disaster Management

### Definition
- **Disaster**: Serious disruption of society causing widespread human, material, or environmental losses exceeding community's ability to cope
- **Hazard**: Potential threat
- **Vulnerability**: Susceptibility to damage
- **Risk**: Hazard x Vulnerability

### Types of Disasters
| Natural | Man-made |
|---------|---------|
| Earthquake | Industrial accidents |
| Flood | Chemical spills |
| Cyclone | Nuclear disasters |
| Tsunami | War/conflict |
| Drought | Terrorism |
| Epidemic/Pandemic | Transport accidents |

### Disaster Management Cycle
1. **Mitigation**: Reduce risk (building codes, land use planning)
2. **Preparedness**: Planning and training (drills, stockpiling)
3. **Response**: Immediate relief (rescue, medical care, shelter)
4. **Recovery**: Rehabilitation and reconstruction

## International Health Organizations

### WHO (World Health Organization)
- Established: 1948, Headquarters: Geneva
- Governing body: World Health Assembly (WHA)
- Functions: Disease surveillance, technical guidance, health standards
- Major programs: EPI, DOTS, IHR

### Other Key Organizations
| Organization | Focus |
|-------------|-------|
| UNICEF | Children's health and nutrition |
| UNFPA | Reproductive health |
| World Bank | Health financing |
| GAVI | Vaccine access |
| Global Fund | HIV, TB, Malaria |

## Sustainable Development Goals (SDGs) - 2015-2030
- **SDG 3**: Good Health and Well-being
- Targets: reduce MMR <70, NMR <12, end epidemics (AIDS, TB, malaria)
- 17 SDGs total, adopted by UN in 2015

## International Health Regulations (IHR) 2005
- Legally binding for 196 countries
- Requires reporting of Public Health Emergency of International Concern (PHEIC)
- Core capacities: surveillance, laboratory, response, risk communication

> **Clinical Pearl**: India is highly vulnerable to floods, cyclones, and earthquakes. The National Disaster Management Authority (NDMA) coordinates disaster response at national level.`,
        mnemonics: [
          { text: "MPRR: Mitigation, Preparedness, Response, Recovery", explanation: "Four phases of disaster management cycle" },
          { text: "WHO 1948 Geneva; UNICEF = children; UNFPA = reproductive", explanation: "Key international health organizations and their focus" }
        ],
        keyPoints: [
          "Disaster management cycle: mitigation -> preparedness -> response -> recovery",
          "Risk = Hazard x Vulnerability",
          "WHO: 1948, Geneva, WHA, disease surveillance and standards",
          "SDG 3: Good Health, targets MMR <70, NMR <12, end epidemics by 2030",
          "IHR 2005: mandatory PHEIC reporting by all member states",
          "NDMA coordinates disaster response in India"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Ch 25: Disaster Management + Ch 26: International Health", edition: "26th" }
        ]
      },
      {
        layer: 2,
        slug: "disaster-intl-health-layer-2-mechanism",
        title: "Disaster Management & International Health - Mechanism",
        estimatedMinutes: 30,
        summary: "Triage systems, mass casualty management, epidemic investigation steps, IHR notification process, and WHO disease eradication programs.",
        contentMd: `# Disaster & International Health - Mechanism

## Triage in Mass Casualties (START System)
| Color | Priority | Condition | Action |
|-------|---------|-----------|--------|
| Red | Immediate (P1) | Life-threatening, salvageable | Treat first |
| Yellow | Delayed (P2) | Serious but can wait | Treat second |
| Green | Minor (P3) | Walking wounded | Treat last |
| Black | Expectant/Dead | Non-salvageable | Comfort care only |

## Mass Casualty Incident (MCI) Management
1. **Scene safety**: Ensure rescuer safety first
2. **Triage**: START system, prioritize resources
3. **Treatment**: Field stabilization, first aid
4. **Transport**: Nearest appropriate facility
5. **Tracking**: Patient documentation

## Epidemic Investigation Steps (7 Steps)
1. Confirm the epidemic (observed vs expected cases)
2. Verify the diagnosis (clinical and laboratory)
3. Define the case (person, place, time)
4. Count cases and determine population at risk
5. Descriptive epidemiology (epidemic curve, spot map)
6. Develop and test hypotheses (analytical study)
7. Implement control measures and evaluate

## IHR 2005 Notification
- **PHEIC**: Public Health Emergency of International Concern
- Countries must notify WHO within 24 hours of qualifying event
- Decision instrument: Unusual/unexpected + serious public health impact + international spread risk
- Recent PHEICs: COVID-19, Mpox, Ebola, Zika, Polio

## WHO Disease Eradication Programs
| Disease | Strategy | Status |
|---------|---------|--------|
| Smallpox | Vaccination + ring vaccination | Eradicated (1980) |
| Polio | OPV + surveillance | Near eradication |
| Guinea worm | Water filtration + health education | Near eradication |
| Measles | Vaccination | Elimination target |

## Millennium Development Goals (MDGs) to SDGs
- MDGs (2000-2015): 8 goals, health-focused (4, 5, 6)
- SDGs (2015-2030): 17 goals, broader scope, SDG 3 = health`,
        mnemonics: [
          { text: "Triage: Red Yellow Green Black (RYGB)", explanation: "Priority order: immediate, delayed, minor, expectant" },
          { text: "7 steps of epidemic investigation: Confirm, Verify, Define, Count, Describe, Hypothesize, Control", explanation: "Sequential steps for investigating an outbreak" }
        ],
        keyPoints: [
          "START triage: Red (immediate), Yellow (delayed), Green (minor), Black (dead)",
          "Epidemic investigation: 7 steps from confirmation to control",
          "PHEIC notification to WHO within 24 hours",
          "Smallpox: only disease eradicated (1980)",
          "MDGs (2000-2015) replaced by SDGs (2015-2030)",
          "IHR 2005: core capacities for surveillance and response"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Ch 25-26", edition: "26th" }
        ]
      },
      {
        layer: 3,
        slug: "disaster-intl-health-layer-3-clinical",
        title: "Disaster Management & International Health - Clinical",
        estimatedMinutes: 20,
        summary: "India's disaster vulnerability, NDMA structure, clinical roles in disasters, global health challenges, and India's contributions to international health.",
        contentMd: `# Disaster & International Health - Clinical

## India's Disaster Vulnerability
- 58.6% landmass prone to earthquakes (zones III-V)
- 12% area prone to floods
- 8% area prone to cyclones (eastern and western coasts)
- Recent: COVID-19, Kerala floods (2018), Uttarakhand floods (2013), Indian Ocean tsunami (2004)

## NDMA (National Disaster Management Authority)
- Chaired by Prime Minister
- State level: SDMA (chaired by Chief Minister)
- District level: DDMA (chaired by District Collector)
- National Disaster Response Force (NDRF): specialized response teams

## Clinical Roles in Disasters
- **Immediate**: Triage, trauma care, emergency surgery
- **Short-term**: Disease surveillance (diarrhea, respiratory), clean water provision
- **Medium-term**: Mental health support (PTSD), rehabilitation
- **Long-term**: Public health infrastructure rebuilding

## Post-Disaster Disease Risks
| Risk | Example |
|------|---------|
| Waterborne | Cholera, typhoid, hepatitis A |
| Vector-borne | Malaria, dengue (stagnant water) |
| Overcrowding | Measles, respiratory infections |
| Wound infections | Tetanus, gas gangrene |
| Mental health | PTSD, depression, anxiety |

## Global Health Challenges
- Climate change and health (heat waves, vector spread)
- Antimicrobial resistance (AMR)
- Emerging infections (Nipah, COVID, Mpox)
- Health inequity between and within countries
- Universal Health Coverage progress

## India's International Health Contributions
- Largest vaccine producer (Serum Institute, Bharat Biotech)
- WHO-SEARO headquarters in New Delhi
- Technical assistance to developing countries
- Generic medicines supplier globally

> **Clinical Pearl**: After floods, the priority is safe drinking water and sanitation to prevent waterborne disease outbreaks. Cholera and hepatitis A are the biggest risks.`,
        mnemonics: [
          { text: "NDMA = PM chairs; SDMA = CM; DDMA = Collector", explanation: "Three levels of disaster management authority" },
          { text: "Post-disaster: Water > Shelter > Surveillance > Mental health", explanation: "Priority order for post-disaster health response" }
        ],
        keyPoints: [
          "India: 58.6% earthquake-prone, 12% flood-prone",
          "NDMA chaired by PM; NDRF for response operations",
          "Post-disaster priorities: safe water, sanitation, disease surveillance",
          "Waterborne diseases are primary post-flood risk",
          "Global challenges: climate change, AMR, emerging infections",
          "India is world's largest vaccine producer"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Ch 25-26", edition: "26th" }
        ]
      },
      {
        layer: 4,
        slug: "disaster-intl-health-layer-4-exam-prep",
        title: "Disaster Management & International Health - Exam Preparation",
        estimatedMinutes: 15,
        summary: "High-yield facts on triage, disaster cycle, WHO structure, SDGs, IHR, and disease eradication for NEXT/NEET PG.",
        contentMd: `# Disaster & International Health - Exam High Yield

## Triage Colors
| Color | Priority | Action |
|-------|---------|--------|
| Red | P1 Immediate | Airway/hemorrhage control first |
| Yellow | P2 Delayed | Can wait hours |
| Green | P3 Minor | Walking wounded |
| Black | Dead/expectant | Comfort care |

## Key Organizations
| Organization | HQ | Head | Focus |
|-------------|-----|------|-------|
| WHO | Geneva | Director-General | Global health |
| UNICEF | New York | Executive Director | Children |
| UNFPA | New York | Executive Director | Reproductive health |
| World Bank | Washington DC | President | Health financing |

## SDG 3 Targets (Health)
- MMR <70/100,000 live births
- Under-5 mortality <25/1000
- NMR <12/1000
- End epidemics: AIDS, TB, malaria, NTDs
- UHC for all

## One-Liners
- Only eradicated disease: Smallpox (1980, WHO certification)
- PHEIC: notifiable to WHO within 24 hours
- IHR 2005: legally binding for 196 countries
- NDMA chair: Prime Minister
- Risk = Hazard x Vulnerability
- START triage: walking wounded = green

## Previous Year Themes
- Triage color coding
- Disaster management cycle phases
- WHO functions and headquarters
- SDG 3 targets
- Smallpox eradication year
- PHEIC notification requirements`,
        mnemonics: [
          { text: "1980 = Smallpox gone; 2014 = India polio-free", explanation: "Two key eradication/elimination milestones" },
          { text: "SDG 3 = MMR 70, NMR 12, U5MR 25", explanation: "Three SDG 3 mortality targets" }
        ],
        keyPoints: [
          "Triage: RYGB (Red, Yellow, Green, Black)",
          "Disaster cycle: mitigation -> preparedness -> response -> recovery",
          "WHO: Geneva, 1948, WHA governing body",
          "SDG 3: MMR <70, NMR <12, U5MR <25",
          "Smallpox: only eradicated disease (1980)",
          "PHEIC: notify WHO within 24 hours"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Ch 25-26", edition: "26th" }
        ]
      },
      {
        layer: 5,
        slug: "disaster-intl-health-layer-5-active-recall",
        title: "Disaster Management & International Health - Active Recall",
        estimatedMinutes: 10,
        summary: "Q&A for disaster management phases, triage, WHO, SDGs, and IHR.",
        contentMd: `# Disaster & International Health - Active Recall

**Q1:** What are the 4 phases of disaster management?
> Mitigation (reduce risk), Preparedness (plan/train), Response (immediate relief), Recovery (rehabilitation)

**Q2:** What is START triage? Name the 4 colors.
> Simple Triage and Rapid Treatment. Red (immediate), Yellow (delayed), Green (minor/walking wounded), Black (dead/expectant)

**Q3:** What is PHEIC?
> Public Health Emergency of International Concern. Must be notified to WHO within 24 hours under IHR 2005

**Q4:** Which is the only disease eradicated globally?
> Smallpox (eradicated 1980, WHO certified). Achieved through vaccination and ring vaccination

**Q5:** Who chairs NDMA, SDMA, and DDMA?
> NDMA: Prime Minister. SDMA: Chief Minister. DDMA: District Collector

**Q6:** What are the 7 steps of epidemic investigation?
> Confirm epidemic, Verify diagnosis, Define case, Count cases, Descriptive epi, Hypothesize, Implement control

**Q7:** What are the SDG 3 mortality targets?
> MMR <70/100000, Under-5 mortality <25/1000, NMR <12/1000

**Q8:** Where is WHO headquartered? When established?
> Geneva, Switzerland. Established 1948. Governing body: World Health Assembly

**Q9:** What diseases are post-flood risks?
> Waterborne (cholera, typhoid, hepatitis A), vector-borne (malaria, dengue from stagnant water), wound infections (tetanus)

**Q10:** What is IHR 2005?
> International Health Regulations: legally binding for 196 countries. Requires PHEIC notification and core surveillance/response capacities

**Q11:** What is the formula for disaster risk?
> Risk = Hazard x Vulnerability. Reduce either to reduce risk

**Q12:** Name 3 recent PHEICs declared by WHO.
> COVID-19 (2020), Mpox (2022), Ebola (2014, 2019), Zika (2016), Polio (ongoing)`,
        mnemonics: [],
        keyPoints: [
          "12 flashcards covering disaster management and international health",
          "Tests triage, disaster cycle, epidemic investigation, and WHO/SDGs",
          "Includes India-specific disaster vulnerability",
          "Reinforces IHR notification requirements"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Ch 25-26", edition: "26th" }
        ]
      }
    ]
  }
];
