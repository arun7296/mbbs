export const medicineLecturesPart3: Array<{
  topicCode: string;
  contentMd: string;
  estimatedMinutes: number;
}> = [
  {
    topicCode: "IM-MOD-09-TOP-04",
    contentMd: `# HIV/AIDS & Opportunistic Infections

HIV remains India's most significant viral pandemic affecting >2.1 million individuals. The journey from HIV to AIDS involves progressive CD4 depletion and immune collapse. Understanding opportunistic infection (OI) timing, diagnosis, and management is critical for clinical practice.

## Pathophysiology of HIV Progression
HIV enters CD4+ T cells, macrophages, and dendritic cells via gp120-CD4 receptor binding. Reverse transcriptase synthesizes proviral DNA; integrase inserts it into the genome. Progressive CD4 decline follows: >500 cells/μL (asymptomatic), 200-500 (early OIs), <200 (PCP, toxoplasmosis, CMV), <50 (MAC, CMV retinitis).

CD4 counts guide OI prophylaxis and clinical management. Viral load (RNA copies/mL) determines transmission risk and treatment response. The Indian context includes high TB/HIV coinfection (40-60% in some regions) and limited early ART access in rural areas.

## Major Opportunistic Infections by CD4 Count

**CD4 <200 cells/μL:**
- Pneumocystis jirovecii pneumonia (PCP): Subacute dyspnea, dry cough, chest discomfort, elevated LDH. CXR shows bilateral ground-glass opacities. Trimethoprim-sulfamethoxazole (TMP-SMX) is first-line; dapsone + pyrimethamine for sulfa allergy.
- Toxoplasmosis encephalitis: Fever, altered consciousness, focal neurologic signs. CT/MRI shows ring-enhancing lesions. Treat with pyrimethamine + sulfadiazine + leucovorin.

**CD4 <100 cells/μL:**
- Cryptococcal meningitis: Subacute fever, meningismus, altered sensorium. CSF opening pressure often elevated. Fluconazole consolidation after IV amphotericin B induction.
- CMV retinitis: Floaters, photopsia, visual field defects. Requires immediate ophthalmology evaluation and ganciclovir or foscarnet.
- MAC bacteremia: High fever, diarrhea, hepatosplenomegaly, night sweats. Azithromycin prophylaxis when CD4 <50.

**CD4 <50 cells/μL:**
- Disseminated MAC, CMV colitis, CMV esophagitis, miliary TB.

## ART and Immune Reconstitution

Modern regimens: integrase inhibitor (dolutegravir) + 2 NRTIs or PI boosted regimens. Viral suppression occurs within 4-12 weeks; CD4 recovery takes months. IRIS (immune reconstitution inflammatory syndrome) occurs when CD4 >50 but viral load dropping—manifests as acute worsening of OIs or new inflammatory complications.

TB-HIV coinfection requires synchronized TB-ART, careful timing given drug interactions (rifampicin reduces PI levels, integrase inhibitors).

> 🎓 **Professor's Note:** In India, always suspect TB in any CD4 <200 presentation with respiratory symptoms or constitutional signs. TB preventive therapy (isoniazid) is standard when CD4 <50 and TST positive or TB exposure.

> 💡 **Memory Trick:** "CD4 <200 → PCP/Toxo; <100 → Crypto/CMV; <50 → MAC/Miliary TB" — decreasing counts = increasing infection severity.

> ⚡ **Exam Alert:** NEET often tests CD4 thresholds for OI prophylaxis (TMP-SMX <200, azithromycin <50) and IRIS presentation as acute clinical deterioration despite improving ART.

> 🏥 **Clinical Pearl:** In India, always investigate CD4 <200 with CXR and sputum smear for TB before attributing dyspnea to PCP. MAC is underdiagnosed; blood cultures in febrile CD4 <50 patients are essential.

{{IMAGE: HIV CD4 count progression timeline and opportunistic infection risk stratification}}

**Reference:** Harrison's Principles of Internal Medicine, 21st ed., Chapter 197: "Human Immunodeficiency Virus (HIV)."
`,
    estimatedMinutes: 10,
  },
  {
    topicCode: "IM-MOD-09-TOP-05",
    contentMd: `# Sepsis & SIRS

Sepsis kills >11 million globally annually; mortality exceeds 30% in low-resource Indian hospitals. Sepsis-3 criteria (qSOFA, SIRS) define disease progression. Early recognition and rapid source control are lifesaving.

## Definitions and Criteria

**SIRS** (Systemic Inflammatory Response Syndrome): ≥2 of (1) temp >38°C or <36°C, (2) HR >90, (3) RR >20 or PaCO2 <32, (4) WBC >12,000 or <4,000.

**Sepsis-3:** SIRS + suspected infection + qSOFA ≥2 (altered mentation, SBP ≤100, RR ≥22).

**Severe Sepsis/Septic Shock:** Sepsis + organ dysfunction (SOFA score ≥2) or lactatemia >2. Shock defined as hypotension unresponsive to fluid bolus requiring vasopressor support.

## Pathophysiology

Initial infection triggers TLR-mediated innate immunity: cytokine release (TNF, IL-1, IL-6), complement activation, endothelial permeability increase. Early phase: vasodilation, increased capillary permeability, relative hypovolemia. Late phase: myocardial depression, coagulopathy (DIC), multi-organ failure.

In India, common sources: gram-negative (E. coli, Klebsiella from UTI/biliary), Staph aureus (skin/soft tissue), Mycobacterium TB (miliary disease), fungal (Candida, cryptococcus in immunocompromised), anaerobes (GI perforations).

## Management Paradigm

**Hour 0-3 (Golden Hours):**
- Blood cultures × 2 before antibiotics
- CBC, CMP, LFTs, PT-INR, lactate, blood gas
- Broad-spectrum antibiotics (ceftriaxone/cefotaxime ± gentamicin ± metronidazole) within 1 hour
- IV fluids: 30 mL/kg crystalloid bolus for hypotension/lactatemia >4
- Vasopressor (norepinephrine) if SBP remains <65 despite fluids

**Hour 3-24:**
- Echocardiography or point-of-care ultrasound to assess preload/cardiac function
- De-escalate antibiotics per cultures
- Source control (drain abscess, debride necrotic tissue, remove infected device)
- Reassess lactate, organ function

**Supportive Care:**
- Mechanical ventilation if ARDS
- Renal replacement therapy if AKI
- Stress-dose hydrocortisone (50 mg IV Q6H) only if refractory shock despite fluids + vasopressors
- Transfuse RBC if Hb <7 (or <9 if septic cardiomyopathy/MI)

> 🎓 **Professor's Note:** The "3-hour sepsis bundle" is now standard. Hospitals with rapid triage and antibiotics <1 hour have 40% mortality reduction. In India, training paramedics for qSOFA screening saves lives.

> 💡 **Memory Trick:** "SEPSIS = Source, Early antibiotics, Pressors, SIR management, I-STAT (lactate), Support organs" — mnemonics for bundle elements.

> ⚡ **Exam Alert:** Sepsis-3 criteria replaced "severe sepsis" terminology. qSOFA ≥2 or SOFA ≥2 defines sepsis; hypotension + lactatemia >2 = septic shock (no vasopressor required for definition).

> 🏥 **Clinical Pearl:** Lactatemia is prognostic—lactate >4 or clearing rate <10% in 6 hours predicts mortality. Repeat lactate at 6 hours guides prognosis. In India, point-of-care lactate testing is emerging but not universal.

{{IMAGE: Sepsis cascade from SIRS to septic shock, showing timeline of intervention and outcomes}}

**Reference:** Harrison's Principles of Internal Medicine, 21st ed., Chapter 323: "Sepsis and Septic Shock."
`,
    estimatedMinutes: 10,
  },
  {
    topicCode: "IM-MOD-09-TOP-06",
    contentMd: `# Protozoal Infections

Protozoa cause significant morbidity in tropical and subtropical India. Malaria, amebiasis, and giardiasis are endemic. Clinical presentation varies from asymptomatic carrier states to life-threatening complications.

## Malaria

Plasmodium falciparum, P. vivax, P. ovale, P. malariae. Transmitted by Anopheles; endemic in >50% of India's geography.

**Pathophysiology:** RBC invasion, cytokine release (TNF, IL-1), rosetting of infected RBCs, sequestration in microvasculature. P. falciparum causes severe malaria—cerebral malaria (0.5-2% case fatality), acute kidney injury (AKI), ARDS, hepatic dysfunction.

**Clinical Features:** Fever (often tertian/quotidian pattern), rigors, diaphoresis, myalgias, headache, splenomegaly. Complicated malaria: altered consciousness, seizures, pulmonary edema, severe anemia, renal dysfunction, DIC.

**Diagnosis:** Thick and thin blood smears (parasitemia %), rapid diagnostic tests (pLDH, HRP2, aldolase), PCR (gold standard but not field-accessible).

**Treatment:**
- Uncomplicated P. falciparum: Artesunate (IV/IM) × 3 days, then artemisinin-based combination therapy (ACT: artemether-lumefantrine). Chloroquine for P. vivax/ovale (in non-resistant areas).
- Complicated malaria: IV artesunate 2.4 mg/kg at 0, 12, 24 hours, then daily × 7 days.
- P. vivax/ovale: Add primaquine (0.5 mg/kg/day × 14 days) to prevent relapse from hypnozoites (G6PD deficiency screening essential).

## Amebiasis

Entamoeba histolytica; fecal-oral transmission. Can be asymptomatic (colonizer) or invasive (dysentery, liver abscess).

**Acute Colitis:** Bloody diarrhea, tenesmus, fever, abdominal pain. CXR may show right lower lobe infiltrate if perforation. Stool microscopy shows RBC-containing trophozoites; serology positive in invasive disease.

**Amebic Liver Abscess:** Right upper quadrant pain, fever, hepatomegaly. Ultrasound/CT shows round abscess with hypoechoic/hypodense center. Serology 95% sensitive. Treat with paromomycin (10 mg/kg TID × 7 days) for luminal disease + metronidazole (750 mg TID × 10 days) for tissue invasion.

## Giardiasis

Giardia lamblia. Epidemic in poorly sanitized areas; waterborne transmission.

**Presentation:** Acute watery diarrhea, malabsorption, steatorrhea, weight loss. Chronic giardiasis causes IgA deficiency complications and hypogammaglobulinemia risk in immunocompromised.

**Diagnosis:** Stool antigen, PCR, small bowel biopsy showing trophozoites on duodenal brushings.

**Treatment:** Metronidazole 250 mg TID × 5 days or albendazole 400 mg daily × 5 days.

> 🎓 **Professor's Note:** In India, malaria remains endemic despite prevention programs. Urban dengue coinfection ("dengue + malaria") worsens prognosis. Always test for both in monsoon-endemic areas.

> 💡 **Memory Trick:** "Malaria fever pattern: P. vivax = tertian (48h), P. falciparum = quotidian/irregular. Ameba = bloody diarrhea, Giardia = fatty diarrhea."

> ⚡ **Exam Alert:** Severe malaria with cerebral involvement or parasitemia >1% requires ICU admission and IV artesunate (superior to quinine). PQ-induced hemolysis in G6PD-deficient patients is a must-know complication.

> 🏥 **Clinical Pearl:** Amebic liver abscess can perforate into lung/pericardium—high mortality if unrecognized. Needle aspiration "anchovy paste" material is diagnostic; percutaneous drainage combined with antibiotics achieves >95% cure.

{{IMAGE: Malaria parasite lifecycle, plasmodium species RBC morphology on blood smear}}

**Reference:** Harrison's Principles of Internal Medicine, 21st ed., Chapter 199: "Malaria."
`,
    estimatedMinutes: 10,
  },
  {
    topicCode: "IM-MOD-09-TOP-07",
    contentMd: `# Helminthic Infections

Helminths (roundworms, tapeworms, flukes) infect >1 billion globally; India has high prevalence in rural/tribal populations. Chronic infections cause malnutrition, anemia, and stunted growth in children.

## Intestinal Helminths

**Ascaris lumbricoides (Roundworm):** Largest intestinal nematode. Fecal-oral transmission; most common helminth in India.

- **Pathophysiology:** Larvae penetrate jejunal mucosa (Loeffler's syndrome: transient pneumonitis), mature in small intestine, obstruct if heavy burden.
- **Clinical:** Abdominal pain, malabsorption, protein-calorie malnutrition, growth retardation. Bowel obstruction in children, pancreatic duct obstruction rare.
- **Diagnosis:** Stool microscopy (barrel-shaped ovoid eggs), serology.
- **Treatment:** Albendazole 400 mg single dose or mebendazole 100 mg BID × 3 days.

**Hookworm (Necator americanus, Ancylostoma):** Blood-feeding nematodes; transcutaneous infection from contaminated soil.

- **Presentation:** Anemia (iron loss), protein malnutrition, growth retardation. "Ground itch" at inoculation site; "pulmonary ascariasis" if larvae aspiration.
- **Diagnosis:** Stool microscopy (characteristic hooklet-shaped buccal capsule), hemoglobin measurement.
- **Treatment:** Iron supplementation + albendazole 400 mg × 3 days.

**Trichuris trichiura (Whipworm):** Partial tissue penetration causing chronic mucosal inflammation.

- **Presentation:** Dysentery-like diarrhea, rectal prolapse in heavy infections, anemia.
- **Diagnosis:** Characteristic "lemon-shaped" eggs on stool microscopy.
- **Treatment:** Albendazole 400 mg daily × 3 days.

## Tissue Helminths

**Strongyloides stercoralis:** Unique autoinfection capability; latent infection can disseminate decades later if immunosuppressed.

- **Hyperinfection:** Uncontrolled larval proliferation (HTLV-1 coinfection, chemotherapy, corticosteroids). High mortality (50-80%) if untreated.
- **Treatment:** Ivermectin 200 mcg/kg daily × 2 days (prefer to thiabendazole due to toxicity).

**Filaria (Wuchereria bancrofti, Brugia malayi):** Mosquito vector; causes lymphedema and elephantiasis in endemic areas.

- **Acute Phase:** Lymphangitis, fever.
- **Chronic Phase:** Lymph obstruction, scrotal swelling, limb elephantiasis.
- **Diagnosis:** Nocturnal blood microfilaremia (periodic/nocturnal transmission matches mosquito feeding), ultrasound showing "filarial dance sign" in dilated lymph vessels.
- **Treatment:** Diethylcarbamazine (DEC) 6 mg/kg/day × 12 days; side effects from microfilaria death (Mazzotti reaction).

**Cysticercosis (Taenia solium larva):** Most common preventable neurologic parasitic infection in India.

- **Presentation:** Seizures (70%), focal deficits, intracranial mass, meningitis if ventricular involvement.
- **Diagnosis:** MRI showing multiple cysts at gray-white junction; CSF with lymphocytic pleocytosis; serology.
- **Treatment:** Albendazole 15 mg/kg/day × 8-30 days; corticosteroids to manage inflammation from dying parasites.

> 🎓 **Professor's Note:** India's National Deworming Program targets children, but adult hookworm anemia is underdiagnosed. In rural areas, always check stool for helminths in anemic patients with growth retardation.

> 💡 **Memory Trick:** "Ascaris = largest (30 cm), Hookworm = anemia, Trichuris = dysentery, Strongyloides = autoinfection, Filaria = elephantiasis."

> ⚡ **Exam Alert:** Strongyloides hyperinfection is a high-mortality condition; ivermectin is superior to other agents. Cysticercosis meningitis requires lumbar puncture contraindication assessment (risk of coning).

> 🏥 **Clinical Pearl:** Taenia solium (pork tapeworm) → cysticercosis. Screen all seizure patients from endemic areas with serology + MRI. Albendazole + corticosteroids prevent permanent neurologic disability.

{{IMAGE: Helminth eggs on stool microscopy, cysticercosis cyst MRI appearance, filarial worms in lymph}}

**Reference:** Harrison's Principles of Internal Medicine, 21st ed., Chapter 200: "Nematode (Roundworm) Infections."
`,
    estimatedMinutes: 11,
  },
  {
    topicCode: "IM-MOD-09-TOP-08",
    contentMd: `# Fungal Infections

Fungal infections are increasingly prevalent in immunocompromised hosts (HIV, transplant, hematologic malignancies). India's tropical climate supports endemic mycoses. Recognition and early treatment prevent serious morbidity.

## Endemic Mycoses

**Histoplasmosis:** Histoplasma capsulatum. Present in soil; inhalation from spore-laden dust.

- **Acute Pulmonary:** Mild respiratory symptoms, hilar lymphadenopathy, self-limited.
- **Chronic Cavitary:** Cavitary lesions mimicking TB; progressive dyspnea, weight loss.
- **Disseminated:** Hepatosplenomegaly, lymphadenopathy, pancytopenia in CD4 <50. High mortality if untreated.
- **Diagnosis:** Culture (slow), antigen detection (urine, blood), histology showing yeast-filled macrophages.
- **Treatment:** Itraconazole 200 mg BID (maintenance long-term in CD4 <150).

**Coccidioidomycosis:** Coccidioides immitis (Arizona, California); rare in India but imported cases occur.

- **Presentation:** Acute pneumonitis with erythema nodosum, chronic cavitary disease, disseminated meningitis in immunocompromised.
- **Diagnosis:** Serology (IgM early, IgG late), sputum/culture showing spherules with endospores.
- **Treatment:** Fluconazole (mild disease), amphotericin B (severe/meningeal).

**Blastomycosis:** Blastomyces dermatitidis; soil organism; rare in India.

- **Presentation:** Acute pneumonitis, chronic cavitary (mimics TB), skin pustules, osteomyelitis.
- **Diagnosis:** Sputum/tissue culture, histology showing thick-walled budding yeast.
- **Treatment:** Itraconazole (mild-moderate), amphotericin B (severe).

## Opportunistic Mycoses

**Candida:** Most common fungal pathogen in immunocompromised.

- **Oral Candidiasis:** Erythematous patches/plaques on tongue/palate; CD4 <200. Fluconazole 100 mg daily × 7-14 days.
- **Esophagitis:** Dysphagia, odynophagia; confirmed by endoscopy. IV fluconazole if severe, itraconazole solution if mild.
- **Invasive Candidiasis:** Bloodstream infection (line-related, GI translocation). Fever, hemodynamic instability, sepsis. Treat with fluconazole or echinocandin (caspofungin, micafungin).

**Cryptococcus neoformans:** Environmental yeast; CD4 <100.

- **Cryptococcal Meningitis:** Subacute fever, headache, minimal meningismus. CSF shows elevated pressure, lymphocytic pleocytosis. India capsule antigen test diagnostic (sensitivity >95%).
- **Treatment:** Induction: amphotericin B 0.7-1 mg/kg/day IV + flucytosine 25 mg/kg QID × 2 weeks; consolidation: fluconazole 400-800 mg/day × 8 weeks; maintenance: fluconazole until CD4 >200 × 3 months.
- **Complications:** IRIS (meningeal inflammation paradoxically worsens after ART initiation), IRIS-IRIS if corticosteroids delayed.

**Aspergillus fumigatus:** Opportunistic in neutropenia, hematologic malignancy, transplant.

- **Invasive Aspergillosis:** Cavitary lung disease, sinusitis, disseminated infection with angioinvasion causing infarction.
- **Diagnosis:** Galactomannan antigen (blood/BAL), CT showing halo sign (ground-glass around nodule).
- **Treatment:** Voriconazole 6 mg/kg Q12H × 1 day, then 4 mg/kg Q12H; liposomal amphotericin B if CNS involvement.

**Pneumocystis jirovecii (formerly P. carinii):** Atypical fungus; CD4 <200.

- **PCP:** Subacute dyspnea, dry cough, chest discomfort, elevated LDH (>400). CXR bilateral ground-glass opacities.
- **Diagnosis:** Induced sputum (silver stain, DFA), bronchoscopy with BAL/biopsy if high suspicion.
- **Treatment:** TMP-SMX 15-20 mg/kg/day × 21 days; corticosteroids if PaO2 <70 at room air or A-a gradient >35.
- **Prophylaxis:** TMP-SMX 1 DS daily if CD4 <200 (also covers Toxo, Listeria).

> 🎓 **Professor's Note:** In India, cryptococcal meningitis is leading cause of meningitis death in CD4 <100. Lumbar puncture opening pressure often >30 cm H2O; serial LPs reduce pressure and improve outcome.

> 💡 **Memory Trick:** "Fungal CD4 thresholds: Candida <200, Crypto/PCP <200, Aspergillus <50 (neutropenia). Fluconazole covers Candida/Crypto; voriconazole covers Aspergillus."

> ⚡ **Exam Alert:** Amphotericin B toxicity (nephrotoxicity, hypokalemia, hypomagnesemia) requires baseline and frequent K+/Mg2+ monitoring. Liposomal formulation preferred if renal impairment.

> 🏥 **Clinical Pearl:** Cryptococcal antigen testing (serum + CSF) is diagnostic; blood culture rarely positive. In India, serum antigen screening in CD4 <100 enables early fluconazole initiation and prevents meningitis.

{{IMAGE: Candida pseudohyphae on KOH mount, Crypto India ink CSF, Aspergillus hyphae, PCP on silver stain}}

**Reference:** Harrison's Principles of Internal Medicine, 21st ed., Chapter 201: "Fungal Infections."
`,
    estimatedMinutes: 11,
  },
  {
    topicCode: "IM-MOD-09-TOP-09",
    contentMd: `# Rickettsial & Spirochetal Infections

Rickettsiae and Borrelia are arthropod-borne bacteria causing acute febrile illnesses. India has endemic foci; tick exposure and domestic animal contact drive transmission.

## Rickettsial Infections

**Rocky Mountain Spotted Fever (R. rickettsii):** American distribution; Dermacentor tick.

- **Presentation:** Fever, headache, myalgias, rash (petechial, maculopapular) on wrists/ankles spreading centripetally. Complications: meningoencephalitis, myocarditis, renal failure, DIC.
- **Diagnosis:** Serology, immunofluorescence on tissue biopsy.
- **Treatment:** Doxycycline 100 mg BID × 7-10 days (start on clinical suspicion before confirmation).

**Indian Tick Typhus (R. conorii):** Endemic in Western Ghats, Himalayas, parts of North India.

- **Clinical:** Fever, headache, myalgias, eschar (tâche noire) at tick bite site, maculopapular rash. Usually self-limited; mortality <5% with treatment.
- **Diagnosis:** Clinical (eschar + rash + tick exposure); serology less specific than Western blot.
- **Treatment:** Doxycycline 100 mg BID × 5-7 days.

**Scrub Typhus (O. tsutsugamushi):** Endemic in Japan, southeast Asia, Northern Australia; India has cases in Himalayan regions.

- **Triad:** Fever, eschar (painless, necrotic, crusted ulcer), lymphadenopathy (regional to eschar).
- **Complications:** Myocarditis (can be fatal), pneumonitis, hepatitis, meningoencephalitis, DIC.
- **Diagnosis:** Weil-Felix test (OX-19, OX-K positive), culture, PCR.
- **Treatment:** Doxycycline 100 mg BID × 7-10 days or chloramphenicol 500 mg QID (alternative).

**Q Fever (C. burnetii):** Cattle, sheep, goats (birth products); inhalation of contaminated aerosols.

- **Acute:** Fever, hepatitis, pneumonitis, myocarditis.
- **Chronic:** Endocarditis (prosthetic valve risk), hepatitis.
- **Diagnosis:** Phase I/II serology, PCR.
- **Treatment:** Doxycycline + fluoroquinolone (chronic endocarditis requires prolonged therapy).

## Spirochetal Infections

**Leptospirosis:** Leptospira; waterborne (flooding, occupational exposure). India has endemic foci.

- **Biphasic Illness:** Week 1 (leptospiremic): fever, myalgias, headache, conjunctival suffusion. Week 2 (immune phase): meningitis, renal failure, pulmonary hemorrhage.
- **Weil's Disease:** Severe form—hepatorenal failure, jaundice, hemorrhage, high mortality (5-15%).
- **Diagnosis:** Serology (MAT gold standard), culture (blood week 1, urine week 2), PCR.
- **Treatment:** Doxycycline 100 mg BID × 7 days (severe: IV ceftriaxone 1 g Q12H).

**Relapsing Fever:** Borrelia hermsii (endemic louse-borne) or tick-borne spirochetes.

- **Presentation:** Recurring fever episodes (3-7 days) separated by afebrile periods. Headache, myalgias, hepatosplenomegaly. Relapse due to antigenic variation.
- **Diagnosis:** Blood smear (Wright/Giemsa stain showing spirochetes), serology.
- **Treatment:** Doxycycline 100 mg QID × 5-10 days or penicillin G IV.

**Borrelia burgdorferi (Lyme Disease):** Tick-borne; rare in India but imported cases.

- **Early:** Erythema migrans (expanding bull's eye rash), fever, lymphadenopathy.
- **Late:** Arthritis, neuroborreliosis (cranial nerve palsy, meningitis), cardiac (AV block).
- **Diagnosis:** Serology (ELISA + Western blot), PCR.
- **Treatment:** Doxycycline 100 mg BID × 10-28 days (early), ceftriaxone (neurologic).

**Syphilis:** Treponema pallidum; sexual/vertical transmission.

- **Primary:** Painless chancre at inoculation site.
- **Secondary:** Maculopapular rash (palms/soles), condyloma lata, hepatitis, meningitis.
- **Tertiary:** Neurosyphilis (general paresis, tabes dorsalis), gummas.
- **Diagnosis:** RPR/VDRL, treponemal tests (FTA-ABS, TP-PA, ELISA).
- **Treatment:** Benzathine penicillin G 2.4 MU IM weekly × 3 (early); aqueous penicillin G IV for neurosyphilis.

> 🎓 **Professor's Note:** Rickettsial infections are often misdiagnosed as malaria/dengue in India. Presence of eschar is pathognomonic for tick typhus; always examine for tick bite sites.

> 💡 **Memory Trick:** "Rickettsial eschar + rash + fever. Scrub typhus = painful ulcer, Rocky = petechial rash, Q fever = no rash. Leptospirosis = conjunctival suffusion without exudate."

> ⚡ **Exam Alert:** Doxycycline is empiric for rickettsial infections; don't delay while awaiting serology. Weil-Felix test is rapid but less specific (cross-reactivity with Proteus OX strains). PCR/culture more specific.

> 🏥 **Clinical Pearl:** In India, consider scrub typhus in febrile patients with eschar in Himalayan/Western Ghats regions. Delayed diagnosis increases mortality risk from myocarditis. Leptospirosis during monsoon flooding is preventable with awareness and water precautions.

{{IMAGE: Rickettsial eschar (tâche noire), spirochetes on blood smear, erythema migrans rash, Lyme disease stages}}

**Reference:** Harrison's Principles of Internal Medicine, 21st ed., Chapter 202: "Rickettsial Infections."
`,
    estimatedMinutes: 11,
  },
  {
    topicCode: "IM-MOD-09-TOP-10",
    contentMd: `# Hospital Acquired Infections & Immunocompromised Host

Healthcare-associated infections (HAI) complicate 5-15% of hospitalizations in Indian hospitals; mortality increases 2-5 fold. Immunocompromised patients (HIV CD4 <50, neutropenia, transplant) have atypical presentations and require specific prophylaxis.

## Common HAI Pathogens

**Methicillin-Resistant Staphylococcus aureus (MRSA):** Nosocomial MRSA prevalence >30% in Indian ICUs. Spreads via hand contact.

- **Presentation:** Line sepsis, skin/soft tissue infection, pneumonia. MRSA PVL-positive strains cause severe necrotizing infections.
- **Diagnosis:** Blood culture, wound culture; resistance to beta-lactams + sensitivity to vancomycin.
- **Treatment:** Vancomycin 15-20 mg/kg Q8-12H IV (target trough 15-20 mcg/mL) or linezolid 600 mg BID.

**Extended-Spectrum Beta-Lactamase (ESBL)-Producing Enterobacteriaceae:** E. coli, Klebsiella, Proteus; common in urinary catheters, wounds.

- **HAI Source:** Catheter-associated UTI (CAUTI), wound infection, bloodstream infection.
- **Treatment:** Carbapenem (meropenem, ertapenem) or fluoroquinolone (if sensitive).

**Pseudomonas aeruginosa:** ICU pathogen; water-related, respiratory.

- **Ventilator-associated pneumonia (VAP):** Risk increases after 48 hours mechanical ventilation. High mortality (20-40%) if delayed treatment.
- **Diagnosis:** Quantitative sputum culture (>10⁴ CFU/mL diagnostic), BAL, mini-BAL.
- **Treatment:** Double Pseudomonas coverage (beta-lactam + fluoroquinolone or aminoglycoside) × 7-15 days.

**Acinetobacter baumannii:** Multidrug-resistant (MDR). Causes VAP, line sepsis; high mortality.

- **Treatment:** Colistin (polymyxin E) 2-5 MU IV, tigecycline, or carbapenem (if susceptible).

**Candida albicans:** Bloodstream infection (line-related); risk with prolonged antibiotics, TPN, immunosuppression.

- **Diagnosis:** Blood culture (grows within 24-48 hours), retinal examination for endophthalmitis.
- **Treatment:** Fluconazole (non-severe) or echinocandin (severe); line removal essential.

## Immunocompromised Host Management

**CD4 <50 HIV Patients:**
- PCP prophylaxis: TMP-SMX 1 DS daily (also covers Toxo, Listeria).
- MAC prophylaxis: Azithromycin 1200 mg weekly.
- Fungal prophylaxis: Fluconazole 100-200 mg daily or itraconazole solution.
- TB prophylaxis: Isoniazid 300 mg daily (if TST+ or TB exposure, CD4 <50).

**Neutropenic Patients (ANC <500):**
- Fever workup: Blood culture × 2, CXR, urinalysis/culture, abdominal exam for typhlitis.
- Empiric antibiotics within 1 hour: Ceftazidime (monotherapy) or piperacillin-tazobactam + aminoglycoside (double coverage).
- G-CSF support if prolonged neutropenia (ANC recovering <500).

**Transplant Recipients (first 3-6 months):**
- CMV prophylaxis: Valganciclovir 900 mg daily (D+ R- mismatches at highest risk).
- PCP prophylaxis: TMP-SMX.
- Fungal prophylaxis: Fluconazole or itraconazole.
- Bacterial infection risk: Monitor blood cultures, practice strict asepsis.

## Special Pathogens in Immunocompromised

**Mycobacterium avium complex (MAC):** CD4 <50 without prophylaxis.

- **Presentation:** Fever, diarrhea, hepatosplenomegaly, weight loss, positive blood cultures (may take weeks).
- **Treatment:** Clarithromycin (or azithromycin) + ethambutol ± rifabutin. Continue until CD4 >100 × 3 months.

**Cytomegalovirus (CMV):** CD4 <50; reactivation of latent infection.

- **Retinitis:** Floaters, visual field defects. Requires urgent ophthalmology (risk of blindness).
- **Colitis:** Bloody diarrhea, abdominal pain. Causes perforation if untreated.
- **Treatment:** IV ganciclovir 5 mg/kg Q12H or foscarnet 60 mg/kg Q8H; longer duration, higher toxicity.

**Toxoplasma gondii:** CD4 <100; mostly reactivation in IgG+ patients.

- **Encephalitis:** Fever, headache, focal neurologic signs (seizures, hemiparesis). Ring-enhancing lesions on CT/MRI.
- **Treatment:** Pyrimethamine + sulfadiazine + leucovorin; clindamycin alternative if sulfa allergy.

> 🎓 **Professor's Note:** HAI prevention saves lives: hand hygiene, catheter care, VAP bundle (HOB elevation, mouth care, DVT prophylaxis). In India, HAI surveillance is inadequate; teaching hospitals should mandate infection control training.

> 💡 **Memory Trick:** "HAI pathogens: MRSA (lines), ESBL (catheters), Pseudomonas (lungs), Candida (lines). CD4 <200 → PCP/Toxo; <100 → Crypto/CMV; <50 → MAC/miliary TB."

> ⚡ **Exam Alert:** VAP diagnosis requires quantitative culture (>10⁴ CFU/mL); clinical pneumonia scoring may miss VAP. CMV retinitis is ophthalmologic emergency; dilated fundus exam mandatory in CD4 <50.

> 🏥 **Clinical Pearl:** In India, HAI audits show MRSA, ESBL, and MDR Acinetobacter dominating. Catheter removal within 48 hours, antibiotic stewardship, and contact precautions reduce HAI. Immunocompromised patients need coordinated care (ID, surgery, pharmacy) for best outcomes.

{{IMAGE: MRSA on blood agar, ESBL E. coli resistance pattern, Candida growth in blood culture, CMV fundus appearance (cottage cheese and catsup retinitis)}}

**Reference:** Harrison's Principles of Internal Medicine, 21st ed., Chapter 323: "Healthcare-Associated Infections."
`,
    estimatedMinutes: 11,
  },
  {
    topicCode: "IM-MOD-10-TOP-01",
    contentMd: `# Shock: Types & Management

Shock is tissue hypoperfusion threatening organ survival. Mortality exceeds 40% in severe shock despite treatment. Rapid recognition and hemodynamic optimization are critical.

## Shock Classification

**Hypovolemic Shock:** Absolute volume loss (hemorrhage, dehydration, burns).

- **Hemorrhagic:** Loss >20% blood volume. Class I (750 mL, <15%), Class II (750-1500 mL, 15-30%), Class III (1500-2000 mL, 30-40%), Class IV (>2000 mL, >40%, moribund).
- **Management:** IV access × 2 (large bore), crystalloid bolus 30 mL/kg, blood products (PRBCs 1:1:1 with FFP:platelets if >1500 mL loss), identify source, hemorrhage control (tourniquet, vascular surgery).

**Cardiogenic Shock:** Cardiac dysfunction (MI, myocarditis, arrhythmia, tamponade, PE).

- **Presentation:** Hypotension, altered perfusion, elevated JVP/pulmonary edema. CardiogenicAPICU: pulmonary edema with normal wedge pressure (diastolic dysfunction).
- **Management:** Inotropes (dobutamine 5-20 mcg/kg/min, milrinone 0.25-0.75 mcg/kg/min), vasopressors if severe, mechanical support (IABP, ECMO in referral centers), address etiology.

**Distributive Shock:** Sepsis, anaphylaxis, neurogenic, endotoxic shock.

- **Septic Shock:** Most common in ICU. Early (6-12 hrs): warm shock (high CO, low SVR). Late (>24 hrs): cold shock (low CO, high SVR, poor perfusion).
- **Management:** Antibiotics <1 hr, fluids 30 mL/kg, norepinephrine if SBP remains <65, source control, stress-dose steroids (refractory shock).

**Obstructive Shock:** PE, tension pneumothorax, tamponade, aortic dissection.

- **PE:** Acute dyspnea, syncope, chest pain. Elevated D-dimer, CT PE protocol diagnostic.
- **Tension Pneumothorax:** Hemodynamic collapse, unilateral absent breath sounds, tracheal deviation. Immediate needle decompression (2nd ICS midclavicular), tube thoracostomy.
- **Tamponade:** Beck's triad (hypotension, JVD, muffled heart sounds). Pulsus paradoxus >10 mmHg. Echocardiography shows pericardial fluid. Urgent pericardiocentesis.

## Hemodynamic Parameters

**Cardiac Output (CO):** HR × Stroke Volume. Normal 4-8 L/min.

**Systemic Vascular Resistance (SVR):** (MAP - CVP) / CO × 80. Normal 800-1200 dyn·s·cm⁻⁵.

**Pulmonary Vascular Resistance (PVR):** Normal 20-130 dyn·s·cm⁻⁵.

**Oxygen Delivery (DO₂):** CO × CaO₂. Normal >500 mL/min/m².

**Shock defined:** SBP <90, MAP <65, urine output <0.5 mL/kg/hr, altered sensorium, lactatemia >2.

## Advanced Management

**Vasopressor Selection:**
- Norepinephrine (NE): Alpha > beta (first-line septic shock, maintains MAP without reflex bradycardia).
- Phenylephrine: Pure alpha (severe hypotension, cardiogenic shock with high CO).
- Epinephrine: Alpha + beta (anaphylaxis, refractory shock).
- Dopamine: Dose-dependent (renal dose <5, inotropic 5-10, vasopressor >10).

**Fluid Responsiveness Assessment:**
- Static: CVP, PAWP less reliable.
- Dynamic: Pulse pressure variation (>13%), stroke volume variation (>15%), passive leg raise increasing CO >10%.

**Complications:** ARDS, acute kidney injury, DIC, multi-organ dysfunction, septic encephalopathy.

> 🎓 **Professor's Note:** Early lactate clearance (>10% in 6 hours) predicts survival. Repeat lactate at 6 hours; persistent elevation signals inadequate resuscitation.

> 💡 **Memory Trick:** "4 Shocks: Hypo (volume), Cardio (pump), Distrib (pipes), Obstruct (blockade). Early sepsis = warm (dilated), late = cold (vasoconstricted)."

> ⚡ **Exam Alert:** Cardiogenic shock + mechanical cause (MR, VSD, tamponade) requires mechanical circulatory support. Don't delay echocardiography; inotropes alone worsen outcomes in mechanical disease.

> 🏥 **Clinical Pearl:** Point-of-care ultrasound (IVC diameter, collapsibility, LVEF, pericardial fluid) guides fluid vs. inotrope therapy. In India, POCUS training is increasing; emphasize bedside assessment over invasive lines.

{{IMAGE: Shock hemodynamic profiles (CO vs SVR), vasopressor choice algorithm, tension pneumothorax needle decompression}}

**Reference:** Harrison's Principles of Internal Medicine, 21st ed., Chapter 323: "Cardiogenic Shock."
`,
    estimatedMinutes: 10,
  },
  {
    topicCode: "IM-MOD-10-TOP-02",
    contentMd: `# Poisoning & Overdose

Poisoning accounts for >10% of ED presentations in Indian urban centers. Rapid toxidrome recognition and supportive care are lifesaving.

## Toxidrome Recognition

**Anticholinergic:** Atropine, antihistamines, antipsychotics.

- **Signs:** Dilated pupils, dry mouth, flushed skin, hyperthermia, agitation, seizures ("hot as a hare, dry as a bone, red as a beet, mad as a March hare").
- **Treatment:** Physostigmine 1-2 mg IV (use cautiously if cardiac dysrhythmia), supportive care, benzodiazepines for agitation.

**Cholinergic:** Organophosphates (pesticides), carbamates, physostigmine overdose.

- **Signs:** SLUDGE (Salivation, Lacrimation, Urination, Defecation, GI cramps, Emesis) + bradycardia, bronchospasm, miosis ("pinpoint pupils").
- **Treatment:** Atropine 2-5 mg IV Q5-10min (titrate to dry secretions, HR >60), pralidoxime (2-PAM) 1-2 g IV (regenerates acetylcholinesterase), supportive care, mechanical ventilation if needed.

**Opioid:** Heroin, morphine, tramadol, fentanyl, codeine.

- **Signs:** Miosis, respiratory depression, bradycardia, hypotension, altered consciousness, pulmonary edema.
- **Treatment:** Naloxone 0.4-2 mg IV/IM Q2-3min (short half-life—risk of re-sedation); titrate to maintain spontaneous ventilation without full reversal (avoid withdrawal).

**Sedative-Hypnotic:** Benzodiazepines, barbiturates, alcohol, gamma-hydroxybutyrate (GHB).

- **Signs:** Drowsiness, confusion, respiratory depression, coma, loss of protective airway reflexes.
- **Treatment:** Airway management (bag-valve-mask if needed), flumazenil (antagonist for benzodiazepines, not for tricyclics), supportive care.

**Sympathomimetic:** Cocaine, amphetamine, methamphetamine, pseudoephedrine, MDMA.

- **Signs:** Tachycardia, hypertension, hyperthermia, agitation, seizures, MI, arrhythmias.
- **Treatment:** Benzodiazepines (seizure/agitation control), phentolamine (alpha-blocker if severe hypertension), cooling measures, cardiac monitoring.

**Hallucinogen/Psychomimetic:** LSD, psilocybin, PCP, ketamine.

- **Signs:** Visual/auditory hallucinations, paranoia, confusion, disorientation (LSD/psilocybin); PCP adds motor hyperactivity, hyperthermia, seizures.
- **Treatment:** Safe environment, benzodiazepines for agitation, external cooling for hyperthermia.

## Management Principles

**ABCs:** Airway protection (if GCS <8), breathing support, IV access.

**Decontamination:** Activated charcoal 50 g (if within 1-2 hrs of ingestion, conscious patient). Gastric lavage rarely beneficial (risk aspiration). Whole bowel irrigation (polyethylene glycol solution) for iron, lithium, sustained-release drugs.

**Elimination Enhancement:**
- **Hemodialysis:** Salicylate, methanol, ethylene glycol, phenobarbital, carbamazepine, isoniazid.
- **Urinary Alkalinization:** Salicylates (goal urine pH >7.5).
- **Repeated Activated Charcoal:** Theophylline, carbamazepine, dapsone (enterohepatic circulation).

**Specific Antidotes:**
- Acetaminophen → N-acetylcysteine
- Anticholinergic → Physostigmine
- Antiepileptic toxicity → Hemodialysis
- Beta-blocker → Glucagon, calcium
- Calcium channel blocker → Calcium, high-dose insulin + dextrose
- Cyanide → Hydroxocobalamin
- Digoxin → Digoxin-specific Fab antibody (DigiBind)
- Iron → Deferoxamine
- Isoniazid → Pyridoxine
- Methanol/Ethylene glycol → Ethanol, fomepizole
- Opioid → Naloxone
- Salicylate → Supportive care, alkalinization, dialysis

**Monitoring:** ECG (QT, arrhythmia), glucose, electrolytes, renal function, PT-INR, lactate, temperature.

> 🎓 **Professor's Note:** In India, organophosphate pesticide poisoning is common (agricultural exposure, ingestion). Pralidoxime must be given early (within 24 hours for maximum efficacy); delayed treatment limits benefit.

> 💡 **Memory Trick:** "Toxidromes: Anti-cholin = hot/dry/dilated, Cholin = wet/constricted, Opioid = miotic/apneic, Stimulant = tachycardic/hyperthermic, Sedative = respiratory depression."

> ⚡ **Exam Alert:** Salicylate toxicity causes mixed respiratory alkalosis + metabolic acidosis. Alkaline urine (pH >7.5) enhances renal excretion >10-fold. Flumazenil contraindicated if tricyclic coingestion (seizure risk).

> 🏥 **Clinical Pearl:** In India, accidental pesticide ingestion (agriculture workers, children) requires high suspicion. Measure RBC cholinesterase (baseline + post-treatment); if <50% baseline, pralidoxime beneficial. Supportive care + atropine + pralidoxime = >85% survival if treated early.

{{IMAGE: Organophosphate poisoning management algorithm, naloxone reversal, salicylate toxicity acid-base pattern}}

**Reference:** Harrison's Principles of Internal Medicine, 21st ed., Chapter 474: "Poisoning and Drug Overdose."
`,
    estimatedMinutes: 11,
  },
  {
    topicCode: "IM-MOD-10-TOP-03",
    contentMd: `# Snake Bite & Envenomation

Snake bites affect >4 million globally annually; India accounts for >80,000 bites/year with 10-15% case fatality. Four major venomous snakes in India: cobra, krait, viper, saw-scaled viper.

## Venom Effects

**Cobra/Krait Venom:** Neurotoxins causing paralysis.

- **Presentation:** Ptosis, diplopia, dysphagia, respiratory paralysis (bulbar palsy). Can be delayed 6-24 hours (krait).
- **Management:** Mechanical ventilation if respiratory paralysis; antivenom reverses toxin.

**Viper Venom:** Hemotoxins + coagulopathy.

- **Local:** Swelling, hemorrhage, tissue necrosis, compartment syndrome.
- **Systemic:** Coagulopathy, DIC, renal failure, bleeding.
- **Management:** Fluid resuscitation, antivenom, compartment syndrome assessment (fasciotomy if needed), FFP for coagulopathy.

**Saw-Scaled Viper:** Highly coagulotoxic; high mortality if untreated.

## Clinical Assessment

**Local Effects:** Swelling, erythema, ecchymosis, blistering, necrosis, compartment syndrome (assess with compartment pressure >30 mmHg → fasciotomy).

**Systemic Effects:** Coagulopathy (prolonged PT-INR, low platelets, positive D-dimer, fibrinogen <100), hemolysis, rhabdomyolysis, myoglobinuria (dark urine), renal failure (ATN).

**Neurologic:** Ptosis, ophthalmoplegia, respiratory paralysis.

## Management

**First Aid (critical):** Immobilization, remove constrictive items (rings, bracelets), wide IV access (antivenom + support), do NOT apply tourniquet (increases tissue damage), do NOT incise fang marks.

**Hospital Management:**

1. **Antivenom:** Polyvalent Indian antivenom (most common). 10-20 mL IV/IM per vial; repeat q4-6h if coagulopathy persists or systemic progression. Assess for anaphylaxis (10-20% incidence); have epinephrine available.

2. **Supportive Care:**
   - IV fluids (maintain UOP >200 mL/hr to prevent myoglobinuria-induced AKI).
   - FFP 10-15 mL/kg for coagulopathy.
   - Compartment syndrome monitoring (limb elevation, ice, compression); fasciotomy if pressure >30 mmHg.
   - Mechanical ventilation for respiratory paralysis.
   - Vasopressors if refractory shock.

3. **Monitoring:**
   - Coagulation profile Q2-4h (PT-INR, platelet, fibrinogen).
   - Myoglobin, CK (rhabdomyolysis risk).
   - Renal function, urine color (myoglobinuria dark/tea-colored urine).
   - 20-minute whole blood clotting test: if unclotted at 20 min, coagulopathy present (guides antivenom dosing).

4. **Complications:**
   - DIC: Manage with FFP, platelets, antivenom.
   - Compartment syndrome: Urgent fasciotomy (hand, forearm, leg most common).
   - Renal failure: Hemodialysis if hyperkalemia, acidosis.
   - Secondary infections: Necrotic tissue debrided after demarcation.

**Prognosis:** Mortality <5% with treatment; delays increase risk to >30%. Permanent disability (contracture, amputation) in 5-10%.

> 🎓 **Professor's Note:** In India, many victims present late (24-48 hrs post-bite). Antivenom is still beneficial even after delay, but coagulopathy severity worsens prognosis. Teach communities early first aid and hospital transport.

> 💡 **Memory Trick:** "4 Indian snakes: Cobra (neuro), Krait (neuro, delayed), Viper (hemolytic), Saw-scale (coagulotoxic). Early antivenom saves limbs and lives."

> ⚡ **Exam Alert:** 20-minute whole blood clotting test is bedside proof of coagulopathy; no need for formal PT-INR to initiate antivenom. Anaphylaxis to antivenom (10-20%) requires epinephrine + antihistamine ready before administration.

> 🏥 **Clinical Pearl:** In India, snake bite victims often hide from families (shame, myths about surgery). Early identification, antivenom, and fluid resuscitation prevent >80% of deaths. Training village health workers on first aid and rapid transport is cost-effective (save 1000+ lives/year).

{{IMAGE: Snake identification guide (cobra, krait, viper, saw-scale), compartment syndrome anatomy, coagulopathy progression, antivenom administration}}

**Reference:** Harrison's Principles of Internal Medicine, 21st ed., Chapter 488: "Reptile Bites and Envenomation."
`,
    estimatedMinutes: 10,
  },
  {
    topicCode: "IM-MOD-10-TOP-04",
    contentMd: `# CPR & Basic Life Support

Cardiac arrest affects >200,000 Indians annually; survival from out-of-hospital cardiac arrest is <5% due to delayed CPR. BLS is the foundation—early initiation dramatically improves outcomes.

## Cardiac Arrest Rhythms

**Shockable Rhythms (Defibrillation Beneficial):**
- Ventricular Fibrillation (VF): Chaotic electrical activity, no organized contraction. Survival >50% if shocked within 3 minutes.
- Pulseless Ventricular Tachycardia (VT): Organized but inadequate perfusion. Similar prognosis to VF.

**Non-Shockable Rhythms:**
- Asystole: Electrical silence; "straight line." Prognosis grave (<5% survival). No defibrillation; focus on CPR + medications.
- Pulseless Electrical Activity (PEA): Organized electrical rhythm but no pulse. Underlying cause (tamponade, PE, hypovolemia, tension pneumothorax) must be identified.

## BLS Algorithm (2020 AHA Guidelines)

**Step 1: Check Responsiveness & Call for Help**
- Tap shoulders, shout. If unresponsive, call 911 (or local EMS), get AED.

**Step 2: Check for Pulse (10 seconds max)**
- Carotid or femoral pulse. If absent or unsure, begin CPR.

**Step 3: Chest Compressions**
- Hand placement: Heel of hand on lower 1/2 sternum (between nipples), second hand on top.
- Rate: 100-120 compressions/minute (continuous metronome sound "Stayin' Alive").
- Depth: 2-2.4 inches (5-6 cm) in adults; allow full recoil.
- Minimize interruptions: <10 seconds between cycles.

**Step 4: Airway & Ventilation**
- Head tilt-chin lift (jaw thrust if C-spine injury suspected).
- Bag-valve-mask at 10-12 breaths/min (if trained); minimize compressions interruption.
- Untrained? Compression-only CPR (hands-only) is effective for adults.

**Step 5: Defibrillation (AED)**
- Turn on AED, apply pads (right anterior chest, left midaxillary line).
- Allow rhythm analysis. If VF/pulseless VT: deliver shock 360 J (biphasic) or 200 J (monophasic).
- Resume CPR immediately; recheck rhythm Q2 minutes.

**Step 6: Advanced Life Support (ACLS)**
- Establish IV/IO access.
- Medications: Epinephrine 1 mg IV push Q3-5 min (increase cardiac output, coronary perfusion).
- Amiodarone 300 mg IV (first dose, then 150 mg if recurrent VF); may repeat 150 mg once.
- Treat underlying cause (H's: Hypovolemia, Hypoxia, Hydrogen ion—acidosis, Hypothermia; T's: Tension pneumothorax, Tamponade, Thrombosis—PE/MI, Toxins).

**Step 7: Post-Resuscitation Care**
- Airway management (endotracheal intubation).
- Targeted temperature management: 32-36°C for 24 hours (improves neurologic outcomes).
- Ventilator management (ARDSnet protocol), glucose control, seizure prophylaxis, prognostication at 72 hours (neurologic examination, somatosensory evoked potentials, MRI).

## Return of Spontaneous Circulation (ROSC) Criteria

- **Organized rhythm** on monitor.
- **Palpable pulse** (carotid >10 seconds, femoral).
- **Spontaneous respiration** or response to ventilation.
- **Blood pressure** (SBP >60).

Duration of CPR: Continue 20-30 minutes minimum before stopping. Extend if:
- Reversible cause identified (e.g., PE → thrombectomy, MI → cath lab).
- Hypothermia (may recover after prolonged resuscitation).
- Intoxication (toxic prolonged resuscitation attempted).

## Prognosis Factors

**Good Prognosis (Comatose Survivors):**
- Short CPR duration (<15 min).
- Early defibrillation (VF/VT rhythm).
- Witnessed arrest.
- Young age, minimal comorbidity.
- Early ROSC.

**Poor Prognosis:**
- Prolonged CPR (>30 min without ROSC).
- Asystole/PEA rhythm.
- Unwitnessed, delayed EMS.
- Age >75, significant comorbidities.

> 🎓 **Professor's Note:** In India, public CPR training is crucial. Community CPR programs (schools, offices, markets) increase bystander initiation from <5% to >40%, improving survival 3-4 fold.

> 💡 **Memory Trick:** "Chain of Survival: Recognition → CPR → Defibrillation → Post-resuscitation care. Every minute without CPR = 10% survival drop."

> ⚡ **Exam Alert:** 2020 AHA changes: compression-only CPR acceptable for adults (mouth-to-mouth not required for untrained), emphasis on early recognition + CPR + AED. Amiodarone preferred over lidocaine for VF refractory to defibrillation.

> 🏥 **Clinical Pearl:** In India, bystander CPR is rare; EMS response often delayed. Early community defibrillation (public AEDs) and simplified CPR training (chest compressions) have highest impact on survival.

{{IMAGE: CPR hand placement and compression technique, cardiac arrest algorithm (shockable vs. non-shockable), chain of survival timeline}}

**Reference:** Harrison's Principles of Internal Medicine, 21st ed., Chapter 322: "Cardiopulmonary Resuscitation."
`,
    estimatedMinutes: 10,
  },
  {
    topicCode: "IM-MOD-10-TOP-05",
    contentMd: `# Electrolyte & Acid-Base Disorders

Electrolyte imbalances affect >20% of hospitalized patients; severe derangements cause seizures, arrhythmias, death. Rapid correction requires understanding pathophysiology.

## Hypernatremia (Na >150 mEq/L)

**Pathophysiology:** Free water loss (insensible, GI, renal) or hypertonic saline administration.

**Symptoms:** Thirst, lethargy, confusion, seizures, coma (if acute/severe).

**Correction:** Hypotonic fluids (0.45% saline, D5W). Calculate free water deficit: [(Na - 140) / 140] × TBW (liters). Correct slowly <10 mEq/L/day (risk cerebral edema).

## Hyponatremia (Na <130 mEq/L)

**Pathophysiology:** SIADH, heart failure, liver disease, renal failure, dilute hypotonic fluid intake.

**Symptoms:** Mild (130-135): nausea, malaise. Moderate (120-130): headache, confusion. Severe (<120): seizures, coma, respiratory depression.

**Classification:**
- **Acute (<48 hrs):** High risk of cerebral edema; correct rapidly (3% saline 1-2 mL/kg IV bolus over 10-15 min, repeat if seizures).
- **Chronic (>48 hrs):** Correct slowly <10 mEq/L/day (risk osmotic demyelination syndrome—ODS).

**Treatment:** Identify etiology (SIADH vs. hypovolemia vs. hypervolemia). SIADH: fluid restriction (500 mL/day), hypertonic saline if severe. Hypovolemia: isotonic saline. Hypervolemia: diuretics, fluid restriction.

## Hyperkalemia (K >5.5 mEq/L)

**ECG Changes:** Peaked T waves (K 6-7), widened QRS, prolonged PR, loss of P wave (K 7-8), sine wave (K >8, pre-cardiac arrest).

**Treatment:**
1. **Stabilize Membrane:** Calcium gluconate 10-20 mL of 10% IV over 2-3 minutes (shift K intracellularly), effect within 1-3 minutes.
2. **Shift K Intracellularly:** Insulin + glucose (10 units insulin IV + 25 g dextrose if euglycemic), sodium bicarbonate 50-100 mEq IV (alkalinize blood), beta-2 agonists (albuterol nebulized).
3. **Remove K:** Diuretics (furosemide if renal function), potassium-binding resins (patiromer, sodium zirconium cyclosilicate), hemodialysis if renal failure.

## Hypokalemia (K <3.5 mEq/L)

**Causes:** Diuretics, vomiting, diarrhea, inadequate intake, renal tubular acidosis, hypomagnesemia.

**ECG Changes:** ST depression, T wave flattening, U waves, prolonged QT, increased arrhythmia risk.

**Correction:** IV KCl (10-20 mEq/hr, maximum 400 mEq/day; concentrations >40 mEq/L risk phlebitis). Oral supplementation preferred if tolerated. Correct hypomagnesemia concurrently.

## Acid-Base Disorders

**pH <7.35 = Acidemia; pH >7.45 = Alkalemia**

**Respiratory Acidosis (CO2 >50):** Hypoventilation (COPD, sedatives, neuromuscular disease, mechanical ventilation failure). Correct by improving ventilation.

**Respiratory Alkalosis (CO2 <30):** Hyperventilation (anxiety, fever, sepsis, pain). Correct underlying cause.

**Metabolic Acidosis (HCO3- <22, AG >12):** Anion gap metabolic acidosis (MUDPILES: Methanol, Uremia, Diabetic ketoacidosis, Propylene glycol/Paraldehyde, Isoniazid, Lactic acidosis, Ethylene glycol, Salicylates). Non-anion gap (hyperchloremic): GI HCO3- loss, renal tubular acidosis. Treat etiology (insulin/fluids for DKA, hemodialysis for methanol/ethylene glycol).

**Metabolic Alkalosis (HCO3- >28):** Hypokalemia, contraction alkalosis, excess base (vomiting HCl loss). Correct with isotonic saline + KCl. Acetazolamide if volume-expanded.

## Hypocalcemia (Ca <8.5 mg/dL)

**Symptoms:** Paresthesias, tetany, seizures, Chvostek's sign (tap facial nerve → lip twitch), Trousseau's sign (blood pressure cuff inflation → hand spasm).

**Correction:** Calcium gluconate 1 ampule IV over 2-3 minutes (monitor QT/arrhythmias). Oral calcium carbonate 1-2 g elemental calcium TID with vitamin D.

## Hypermagnesemia (Mg >2.3 mg/dL)

**Causes:** Renal failure, excess supplementation, laxatives.

**Symptoms:** Hyporeflexia, respiratory paralysis, cardiac arrhythmias (high K-like appearance), coma.

**Treatment:** Calcium (antagonizes Mg), fluids, hemodialysis if severe.

## Hypomagnesemia (Mg <1.7 mg/dL)

**Causes:** Diarrhea, loop diuretics, PPI use, malabsorption.

**Refractory Hypokalemia:** Often requires Mg repletion first (intracellular pump dysfunction).

**Correction:** Magnesium sulfate IV (1-2 g/4-6 hrs) or oral citrate/glycinate (better tolerated).

> 🎓 **Professor's Note:** Always measure ionized calcium (corrected for albumin). Always check magnesium when treating hypokalemia (no response without Mg repletion).

> 💡 **Memory Trick:** "Electrolyte shifts: Insulin + glucose/bicarb (K inward), calcium (stabilize), diuretics (K outward). Acid-base: AG acidosis (treat etiology), non-AG (fluid challenge)."

> ⚡ **Exam Alert:** Rapid correction of hyponatremia causes ODS (osmotic demyelination—paraplegia, mutism, coma). Asymptomatic hyponatremia corrected <10 mEq/L/day. Symptomatic acute hyponatremia (seizures): 3% saline bolus, target increase 4-6 mEq/L.

> 🏥 **Clinical Pearl:** In India, diarrhea-induced dehydration + hypokalemia common. Oral rehydration (Na 75, K 20 mEq/L) preferable to IV if tolerating. Severe hypokalemia (K <2.5) with ECG changes warrants ICU monitoring.

{{IMAGE: ECG changes with hypo/hyperkalemia, hypocalcemia signs (Chvostek, Trousseau), acid-base nomogram}}

**Reference:** Harrison's Principles of Internal Medicine, 21st ed., Chapter 50: "Hyponatremia and Hypernatremia."
`,
    estimatedMinutes: 11,
  },
  {
    topicCode: "IM-MOD-10-TOP-06",
    contentMd: `# Pain Management & Palliative Care

Pain affects quality of life in >50% of hospitalized patients; undertreated pain prolongs recovery. Palliative care addresses suffering across life trajectory—not just end-of-life.

## Pain Assessment

**Numerical Rating Scale (NRS):** 0-10 (0=no pain, 10=worst pain). Simple, reproducible.

**Faces Pain Scale:** Emotional expressions; useful in children, non-verbal patients.

**WHO Pain Ladder:** 3 steps for cancer/chronic pain escalation.

**Step 1: Non-opioid** (acetaminophen, NSAIDs). For mild pain.

**Step 2: Weak Opioid** (tramadol 50-100 mg Q4-6h, codeine 15-60 mg Q4-6h). For mild-moderate pain.

**Step 3: Strong Opioid** (morphine, fentanyl, hydromorphone). For moderate-severe pain.

## Non-Opioid Analgesics

**Acetaminophen:** Maximum 3-4 g/day (hepatotoxicity risk). Safe in renal impairment.

**NSAIDs (Ibuprofen, Naproxen, Diclofenac):** Inhibit prostaglandins. GI bleeding risk (especially >65, PUD history, concurrent corticosteroids). GI protection: omeprazole 20 mg daily. Renal impairment, cardiovascular disease risk (avoid or use lowest dose, shortest duration).

**Aspirin:** Antiplatelet (81-325 mg), analgesic (650-1000 mg Q4-6h). Tinnitus signifies overdose.

## Opioid Analgesia

**Morphine:** Intravenous (preferred in acute setting). Titrate 2-4 mg IV Q2-4h until pain controlled. Side effects: respiratory depression, constipation, pruritis, nausea.

**Equianalgesic Doses (morphine 10 mg IV = reference):**
- Codeine 30 mg = morphine 10 mg (weak)
- Tramadol 75-100 mg = morphine 10 mg
- Hydromorphone 1.5 mg = morphine 10 mg
- Fentanyl 100 mcg = morphine 60 mg (transdermal, 72-hr patches)

**Adjuvants:**
- **Neuropathic pain (gabapentin 300-3600 mg/day TID, pregabalin 150-600 mg/day, duloxetine 60 mg daily):** Diabetic neuropathy, postherpetic neuralgia, fibromyalgia.
- **Bone pain (NSAIDs, bisphosphonates, radiation therapy):** Cancer metastases.
- **Visceral pain (anticholinergics, antispasmodics):** GI colic.
- **Corticosteroids (dexamethasone 4-8 mg/day, prednisone 20-40 mg/day):** Cancer-related pain, anorexia.

## Opioid Tolerance & Addiction

**Tolerance:** Decreasing analgesic effect despite stable dose; manage by dose escalation or rotation.

**Physical Dependence:** Withdrawal syndrome if abruptly stopped (tremor, diaphoresis, tachycardia, anxiety).

**Psychological Dependence (Addiction):** Compulsive use despite harm. Risk factors: personal/family substance abuse history, psychiatric illness. Manage with pain contracts, urine drug screens, addiction medicine consultation.

## Opioid Side Effects & Management

**Constipation (most common):** Docusate 100 mg BID + senna 2 tablets BID (prophylactic). Methylnaltrexone 0.3-0.15 mg/kg SC for opioid-induced constipation refractory to laxatives.

**Respiratory Depression:** Monitor respiratory rate; reduce opioid if RR <12. Naloxone antagonist if severe (<8 breaths/min).

**Nausea:** Metoclopramide 10 mg Q6H, ondansetron 4-8 mg Q8-12H, or rotate opioid.

**Pruritus:** Antihistamine (diphenhydramine 25-50 mg Q6H), naloxone micro-doses, or rotate opioid.

## Palliative Care Principles

**Goal:** Optimize quality of life, alleviate suffering (physical, psychological, spiritual).

**Applies to:** All serious illnesses (cancer, heart failure, COPD, dementia, ALS)—not just terminal stage.

**Team-Based:** Physician, nurse, social worker, chaplain, palliative care specialist.

**Domains:**
1. **Symptom Management:** Pain, dyspnea, nausea, fatigue, constipation.
2. **Psychosocial Support:** Counseling, anxiety/depression management.
3. **Spiritual Care:** Chaplaincy, meaning-making, existential concerns.
4. **Advance Care Planning:** Goals of care discussion, advance directives, DNR/DNI status.
5. **Family Support:** Caregiver counseling, bereavement support post-death.

## End-of-Life Care

**Goals of Care Discussion:** Elicit patient/family values, clarify realistic prognosis, align interventions with preferences.

**Advance Directive:** Written instructions (DNR, organ donation, healthcare proxy).

**Comfort Measures:** Opioids (dyspnea, pain), benzodiazepines (anxiety, agitation), anticholinergics (secretions), positioning, emotional support.

**Withdrawal of Life Support:** Mechanical ventilation, dialysis, vasopressors—done with family presence, sedation/analgesia.

> 🎓 **Professor's Note:** In India, pain is often undertreated due to opioid phobia, limited access, cost. Early palliative care (alongside curative treatment) improves symptoms, QOL, and reduces ICU deaths.

> 💡 **Memory Trick:** "WHO Ladder: Step 1 (acetaminophen/NSAID), Step 2 (weak opioid), Step 3 (strong opioid). Always add adjuvants for neuropathic/bone pain."

> ⚡ **Exam Alert:** Opioid-induced respiratory depression (RR <8) managed with naloxone 0.4-2 mg IV; repeated Q2-3 min if needed. Morphine equianalgesic dosing crucial for opioid rotation (avoid toxicity/under-treatment).

> 🏥 **Clinical Pearl:** India's morphine access limited (regulatory/cost barriers). Advocacy for opioid availability (cancer pain relief is human right per WHO). Tramadol often overused (seizure risk, poor efficacy). Training physicians on WHO pain ladder increases compliance, improves outcomes.

{{IMAGE: WHO pain ladder, opioid equianalgesic dose chart, palliative care team model, advance care planning discussion framework}}

**Reference:** Harrison's Principles of Internal Medicine, 21st ed., Chapter 10: "Suffering and the Palliative Care Approach."
`,
    estimatedMinutes: 11,
  },
  {
    topicCode: "IM-MOD-11-TOP-01",
    contentMd: `# General Approach to Poisoning

Poisoning and overdose affect >5% of ED visits in urban India. Rapid toxin identification and supportive care prevent deaths.

## Initial Assessment

**Primary Survey (ABCs):**
- **Airway:** Protect if GCS <8, absent gag reflex, seizures. Intubate with cervical spine precautions if trauma suspected.
- **Breathing:** Assess RR, SpO2, breath odor (cyanide "bitter almond," alcohol "fruity," organophosphates "garlic"). Mechanical ventilation if RR <10 or apnea.
- **Circulation:** IV access × 2 (large bore), vasopressors if refractory hypotension.

**Secondary Survey:**
- **Vital Signs:** Fever (salicylate, anticholinergic, stimulants), hypothermia (sedatives, opioids).
- **Toxidrome:** Anticholinergic, cholinergic, opioid, sympathomimetic, sedative, hallucinogenic (see earlier sections).
- **History:** What was ingested (container label, witness), when (time critical for decontamination), how much (dose estimation).
- **Pupils:** Miosis (opioid, cholinergic, organophosphate), mydriasis (anticholinergic, sympathomimetic).
- **Skin:** Needle tracks (IV drug use), bullae (barbiturate, salicylate), color (cyanosis, methemoglobinemia).

## Diagnostic Tests

**Stat Labs:**
- **Serum/Urine Toxicology Screen:** Acetaminophen, salicylates, barbiturates, tricyclic antidepressants, benzodiazepines, opioids, amphetamines, cocaine, cannabis. Limited spectrum; clinical correlation essential.
- **Arterial Blood Gas:** pH, pCO2, pO2, HCO3-, lactate (lactic acidosis suggests toxin severity).
- **Chemistry Panel:** Glucose (hypoglycemia from insulin/sulfonylureas, hyperglycemia from stimulants), electrolytes (hyponatremia from SIADH/water intoxication), creatinine (renal failure from rhabdomyolysis, nephrotoxins), liver enzymes.
- **Coagulation Profile:** PT-INR (warfarin, salicylates), PTT (heparin), fibrinogen.
- **ECG:** QT prolongation (tricyclics, antipsychotics), peaked T waves (hyperkalemia from beta-blockers), Brugada pattern (cocaine).

**Specific Levels (if available):**
- **Acetaminophen:** Nomogram-based threshold (>120 mcg/mL at 4 hours requires antidote).
- **Salicylates:** >30 mg/dL requires alkaline urine, dialysis if >100 mg/dL.
- **Theophylline:** >20 mcg/mL toxicity risk.
- **Lithium:** >1.5 mEq/L requires dialysis; chronic toxicity >1 mEq/L.
- **Phenobarbital, Phenytoin, Valproate:** Specific reference ranges.
- **Carboxyhemoglobin:** >10% from carbon monoxide exposure (hyperbaric oxygen if >25%).
- **Methemoglobin:** >20% causes cyanosis (methylene blue 1-2 mg/kg IV if >30%).

## Decontamination

**Activated Charcoal:** 50 g oral (if conscious, GCS >8, protective airway reflexes, within 1-2 hours of ingestion). Binds many drugs (not iron, lithium, toxic alcohols, caustics).

**Gastric Lavage:** Limited benefit, risk aspiration. Rarely used now.

**Whole Bowel Irrigation:** Polyethylene glycol 1-2 L/hr (until rectal output clear). Used for iron, lithium, sustained-release drugs, body-packing (drug smuggling).

**Skin Decontamination:** Remove clothing, wash with soap/water (for corrosives, pesticides). Avoid water for some agents (calcium carbide = exothermic).

## Enhanced Elimination

**Hemodialysis:** Removes water-soluble drugs. Indicated for: salicylates (>100 mg/dL), methanol, ethylene glycol (>50 mg/dL), isoniazid, phenobarbital, lithium (>1.5-2 mEq/L or acute toxicity).

**Hemoperfusion:** Charcoal cartridge removes lipophilic drugs (less used now).

**Repeat-Dose Activated Charcoal:** For enterohepatic circulation (theophylline, carbamazepine, dapsone). Q2-4h if bowel function intact.

**Urinary Alkalinization:** Alkaline urine (pH >7.5) enhances renal clearance. Salicylates: 50 mEq NaHCO3 IV (target urine pH 7.5-8.5, serum K >4 to prevent hypokalemic alkalosis). Monitor K+, Mg2+, Ca2+.

## Disposition

**Observation:** Mild toxicity, adequate airway/ventilation, stable vitals. Serial exams Q1-2h.

**ICU Admission:** Unstable vitals, altered mental status, respiratory depression, arrhythmias, metabolic derangements, ongoing toxin effect (sustained-release drugs).

**Specific Antidotes:** See prior sections.

## Prognosis Factors

**Good Prognosis:** Monosubstance ingestion, early treatment, reversible toxin, adequate supportive care.

**Poor Prognosis:** Multiple drugs, delayed presentation (>6 hours), irreversible toxin, altered baseline mental status, comorbidities.

> 🎓 **Professor's Note:** India lacks many specific antidotes (fomepizole rare, hydroxocobalamin limited). Supportive care (fluids, vasopressors, dialysis) is foundation. Toxicology consultation via poison control (central India: +91-22-66-66-6090) useful.

> 💡 **Memory Trick:** "ABCDE of poisoning: Airway, Breathing, Circulation, Decontamination, Enhanced elimination. Always send toxicology screen early."

> ⚡ **Exam Alert:** Toxicology screen negative does NOT rule out poisoning (many drugs not detected). Clinical toxidrome recognition essential. Carboxyhemoglobin, methemoglobin levels specific if suspected.

> 🏥 **Clinical Pearl:** In India, pesticide poisoning common (agriculture exposure, suicide attempt). Early aggressive supportive care + pralidoxime (if available) dramatically improve outcomes. Activated charcoal use declining (risk of aspiration); careful patient selection essential.

{{IMAGE: Toxicology screening algorithm, decontamination approach flowchart, hemodialysis vs. hemoperfusion efficacy}}

**Reference:** Harrison's Principles of Internal Medicine, 21st ed., Chapter 474: "Poisoning and Drug Overdose."
`,
    estimatedMinutes: 10,
  },
  {
    topicCode: "IM-MOD-11-TOP-02",
    contentMd: `# Snake Bite & Envenomation (Detailed)

Snake venom is a complex mixture of proteins (enzymes, neurotoxins, hemolysins) and peptides. Management depends on venom composition, time elapsed, and host factors.

## Venom Composition by Species

**Cobra (Naja naja):** Predominantly neurotoxins (alpha-bungarotoxin homologs) + cardiotoxins. Pre-synaptic toxins block acetylcholine release.

**Krait (Bungarus caeruleus):** Highly neurotoxic (α-bungarotoxin); minimal local effects. Delayed onset (2-24 hours)—insidious progression.

**Viper (Russell's viper, Echis carinatus):** Hemolytic, hemotoxic, anticoagulant effects. Venom activates prothrombin complex, causes consumptive coagulopathy.

**Saw-scaled Viper:** Potent coagulotoxin; highest case fatality (10-15%) if untreated.

## Pathophysiology of Envenomation

**Neurotoxic Effects:**
- Alpha-toxins: Irreversible blockade of acetylcholine at neuromuscular junction. Leads to paralysis, respiratory failure.
- Mechanism: Snake venom component binds acetylcholine receptor; cannot be reversed by spontaneous acetylcholine action.
- Timeline: Cobra paralysis within 4-6 hours; krait delayed 6-24 hours.

**Hemotoxic Effects:**
- Serine proteases: Activate coagulation cascade (Factor V, Factor X, prothrombin).
- Metalloproteinases: Degrade fibrinogen, platelets, endothelial basement membrane.
- Result: Consumptive coagulopathy (low fibrinogen, elevated PT-INR, thrombocytopenia, positive D-dimer), tissue necrosis, hemorrhage.

**Local Effects:**
- Edema from increased vascular permeability.
- Myonecrosis (phospholipase A2 toxins damage muscle).
- Compartment syndrome risk if circumferential swelling.

## Clinical Staging

**Stage 0:** No envenomation (dry bite, no systemic/local manifestations). Supportive care only.

**Stage 1:** Minimal envenomation (localized swelling up to one joint, no systemic manifestations). Observe; may progress.

**Stage 2:** Moderate envenomation (swelling beyond one joint, mild systemic manifestations). Antivenom + supportive care.

**Stage 3:** Severe envenomation (swelling >1 limb, respiratory paralysis, coagulopathy, shock). High-dose antivenom, mechanical ventilation, ICU.

**Stage 4:** Moribund (late presentation with irreversible shock, organ failure). Supportive care, high mortality.

## Prognostic Scoring (Simplified)

- **Grade 1:** Grade I swelling, no systemic manifestations. Low mortality.
- **Grade II:** Swelling to more proximal joint, systemic coagulopathy (PT >3 sec prolonged). Moderate mortality (5-10% with treatment).
- **Grade III:** Spread beyond one joint, respiratory paralysis, hemorrhagic manifestations, acute renal failure. High mortality (20-30% with treatment).
- **Grade IV:** Late presentation (>18 hours), multiorgan failure. Mortality >50%.

## Antivenom Administration

**Dosing:** Polyvalent Indian antivenom: 10 mL (1 vial) = 1 unit. Start with 10 mL IV/IM. If coagulopathy persists or systemic progression, repeat Q4-6h. Maximum: 100-120 mL in 24 hours.

**Route:** IV preferred (faster onset); IM if IV access limited.

**Dilution:** Dilute in 10 mL normal saline before infusion (reduces adverse reactions).

**Anaphylaxis:** Occurs in 10-20%. Have epinephrine 1:1000, antihistamine (diphenhydramine), corticosteroid (hydrocortisone) ready. Stop infusion, treat anaphylaxis, restart if patient stable.

**Delayed Serum Sickness:** 7-10 days post-antivenom (immune complex reaction—fever, rash, arthritis, lymphadenopathy). Treat with antihistamine, corticosteroids.

## Monitoring & Follow-up

**Coagulation Profile:** Every 2-4 hours until stable. Target: PT <3 sec prolonged from baseline, platelets >100,000, fibrinogen >100 mg/dL.

**20-Minute Whole Blood Clotting Test (WHO):** Bedside test: 2 mL blood in clean tube, tilt Q minute. If unclotted at 20 min, significant coagulopathy. Test Q2-4h to monitor response to antivenom.

**Renal Function:** Baseline creatinine, repeat daily × 3 days (risk myoglobinuria-induced AKI from rhabdomyolysis).

**Myoglobinuria:** Dark/tea-colored urine. Check CK (elevated >1000), myoglobin level. Aggressive IV fluids (target UOP >200 mL/hr), urinary alkalinization (sodium bicarbonate) to prevent AKI.

**Compartment Syndrome Assessment:** Daily circumference measurement of swollen limb. Compartment pressure >30 mmHg or pain out of proportion → urgent fasciotomy (hand, forearm, leg compartments).

**Neurologic Monitoring:** Serial ptosis, diplopia, respiratory effort Q4h. If progressive paralysis, mechanical ventilation readiness essential (risk sudden respiratory arrest).

## Long-Term Sequelae

**Hypofibrogenemia:** Persists despite antivenom; replace with FFP 10-15 mL/kg.

**Hemorrhage:** Continuing ooze from fang marks, GI, intracranial. Repeat antivenom, FFP, platelets.

**Renal Failure:** ATN from rhabdomyolysis, myoglobinuria. Hemodialysis if hyperkalemia, acidosis, severe azotemia.

**Tissue Necrosis:** Progresses over days; requires surgical debridement once demarcation clear (2-4 weeks). Amputation if extensive.

**Contracture & Disability:** Limb scar contracture, loss of function. Physiotherapy crucial post-acute phase.

> 🎓 **Professor's Note:** India's antivenom quality varies (potency, batch-to-batch consistency). Check expiry, storage conditions before use. ASV (anti-snake venom) manufacturing needs standardization.

> 💡 **Memory Trick:** "Cobra/Krait = neurotoxic (respiratory paralysis). Viper = coagulotoxic (DIC). Early antivenom (within 24 hrs) improves prognosis dramatically. 20-minute clotting test guides antivenom dosing."

> ⚡ **Exam Alert:** Krait bites often delayed presentation (6-24 hours). Patient may seem stable, then sudden respiratory collapse. ICU admission recommended even for Grade II bites. Pralidoxime has NO role in snake bite (snake venom ≠ organophosphate).

> 🏥 **Clinical Pearl:** In India, rural snake bites often treated with traditional medicine (plant poultices, incisions)—delaying hospital care. First aid (immobilization, remove rings, wide IV access) and rapid transport to capable center (with antivenom, ICU) reduce mortality from 30% to <5%.

{{IMAGE: Snake venom coagulopathy cascade, compartment syndrome anatomy and fasciotomy approach, krait delayed neurotoxicity timeline, 20-minute clotting test interpretation}}

**Reference:** Harrison's Principles of Internal Medicine, 21st ed., Chapter 488: "Reptile Bites and Envenomation."
`,
    estimatedMinutes: 11,
  },
  {
    topicCode: "IM-MOD-11-TOP-03",
    contentMd: `# Organophosphorus & Pesticide Poisoning

Organophosphates (OP) account for >50% of pesticide poisonings in India. Cholinergic crisis requires rapid recognition and specific antidote therapy.

## Mechanism of Action

Organophosphates irreversibly phosphorylate acetylcholinesterase (AChE), preventing acetylcholine hydrolysis. Acetylcholine accumulates at synapse, causing excessive cholinergic stimulation (nicotinic + muscarinic receptors).

**Nicotinic Effects:** Muscle paralysis, fasciculations, tachycardia, hypertension.

**Muscarinic Effects:** SLUDGE (Salivation, Lacrimation, Urination, Defecation, GI cramps, Emesis) + miosis, bradycardia, bronchospasm, bronchorrhea.

## Clinical Presentation

**Mild (RBC AChE >50% activity):** Salivation, lacrimation, urination, GI symptoms, miosis. Responds to atropine alone.

**Moderate (RBC AChE 20-50%):** Above + muscle fasciculations, weakness, respiratory effects (bronchospasm, wheezing). Requires atropine + pralidoxime.

**Severe (RBC AChE <20%):** Paralysis, respiratory paralysis, pulmonary edema, bradycardia, seizures, coma. Mechanical ventilation + drugs essential.

## Management

**Immediate Measures:**
1. **Decontamination:** Remove clothing, wash skin with soap/water. Avoid self-contamination (use gloves, eye protection).
2. **Airway Management:** Suction copious secretions (bronchorrhea). Intubate if respiratory failure imminent (stridor, RR <12, apnea).
3. **Atropine (Muscarinic Antagonist):** 2-5 mg IV bolus Q5-10 minutes, titrate to endpoint: dry secretions, heart rate >60. May require high total doses (up to 100 mg/day in severe poisoning).
   - Target: Dry oral secretions (most reliable sign of adequate atropinization).
   - Do NOT target normal pupil size (may never normalize).
4. **Pralidoxime (2-PAM, Nicotinic Antagonist):** 1-2 g IV over 15-30 minutes. Reactivates AChE if given <24 hours (beyond 24 hours, "aging" of enzyme-toxin complex irreversible). Repeat at 4-6 hours if muscle weakness persists.
   - Rapidly restores neuromuscular transmission.
   - Reduces nicotinic effects faster than atropine alone.
   - NOT available in all Indian hospitals; essential drug declaration pending.

**Supportive Care:**
- Mechanical ventilation if respiratory failure.
- Benzodiazepines (lorazepam 2-4 mg IV) for seizures.
- Glucose control (OP toxicity may cause hyperglycemia).
- Avoid aminophylline (may worsen paralysis), avoid morphine (releases histamine), avoid beta-blockers (worsen bradycardia).

## Monitoring & Prognosis

**Cholinesterase Activity:**
- RBC (erythrocyte) AChE: More specific, slower recovery (weeks).
- Plasma (pseudocholinesterase): Rapidly drops, recovers faster (days). Useful for acute assessment.
- Baseline + acute + 24-48h levels guide severity.

**Complications:**
- **Intermediate Syndrome:** Develops 24-96 hours post-OP, characterized by proximal muscle weakness, respiratory paralysis (despite normal/recovering plasma cholinesterase). Treat with supportive care, mechanical ventilation. Prognosis good if survived acute phase.
- **Delayed Neuropathy:** Rare (occurs >3 weeks); irreversible demyelination of long nerves. TOCP (tri-o-cresyl phosphate) contamination in some pesticides.
- **Pulmonary Edema:** From bronchorrhea + direct toxicity. Requires CPAP/mechanical ventilation, careful fluid management (don't overload).

**Prognosis:** Mortality 5-15% with full treatment (atropine + pralidoxime + ventilation). Mortality >30% without pralidoxime or with delayed treatment. Outcome depends on dose, time to treatment, pesticide type (highly lipophilic agents penetrate CNS, worsen prognosis).

## Differential Diagnosis

**Carbamate Poisoning:** Similar presentation but NOT benefits from pralidoxime (carbamates rapidly dissociate from AChE). Treat with atropine alone, supportive care. Prognosis generally better than OP poisoning.

**Nicotine Poisoning:** Nicotinic only (no muscarinic effects). Tremor, fasciculations, hypertension → hypotension, cardiac arrhythmias, seizures. No specific antidote; supportive care.

## Prevention

- Advocacy for OP pesticide ban (already banned in many countries).
- Promote safer alternatives (neem, biological pest control).
- Public education on proper pesticide handling, storage, disposal.
- Regulatory enforcement of pesticide regulations in India.

> 🎓 **Professor's Note:** India's OP poisoning mortality is among world's highest due to delayed presentation, lack of pralidoxime access, poor ICU facilities in rural hospitals. Training rural doctors, ensuring antivenom/pralidoxime availability, strengthening poison centers reduce mortality dramatically.

> 💡 **Memory Trick:** "SLUDGE + miosis + bradycardia = cholinergic crisis. Atropine (muscarinic) + Pralidoxime (nicotinic). Intermediate syndrome 24-96h post-exposure: ventilator-dependent weakness."

> ⚡ **Exam Alert:** Pralidoxime must be given early (within 24 hours, ideally <6 hours). Delayed administration has minimal benefit. RBC AChE <20% = severe toxicity, high mortality. No antidote reverses "aging" of enzyme-toxin complex.

> 🏥 **Clinical Pearl:** In India, OP poisoning victims often present late (rural delay, denial). High mortality partially preventable: strengthen rural emergency care, ensure pralidoxime availability (currently rare), train paramedics on atropine dosing. Intermediate syndrome recognition (post-acute respiratory failure) crucial—requires mechanical ventilation; prognosis excellent with respiratory support.

{{IMAGE: Acetylcholinesterase mechanism and OP inhibition, SLUDGE signs diagram, atropine dosing titration, pralidoxime mechanism of action, RBC cholinesterase activity recovery timeline}}

**Reference:** Harrison's Principles of Internal Medicine, 21st ed., Chapter 474: "Poisoning and Drug Overdose."
`,
    estimatedMinutes: 11,
  },
  {
    topicCode: "IM-MOD-11-TOP-04",
    contentMd: `# Corrosive & Drug Poisoning

Corrosive ingestion and drug overdose represent distinct toxicologic emergencies requiring specific interventions.

## Corrosive Poisoning

**Common Agents:** Strong acids (HCl, H2SO4), strong bases (NaOH, KOH), bleach (NaOCl), drain cleaners.

**Pathophysiology:** Direct tissue destruction (coagulation necrosis from acids, liquefactive from bases). Injury depth depends on concentration, duration contact, viscosity.

**Clinical Presentation:**
- **Acute:** Oral pain, dysphagia, drooling, hematemesis, abdominal pain, shock (if esophageal perforation).
- **Delayed (hours-weeks):** Esophageal/gastric perforation, peritonitis, stricture formation.

**Management:**
1. **Immediate:** IV access, airway assessment (risk respiratory edema). Avoid gastric lavage (risk perforation), activated charcoal (ineffective).
2. **Neutralization:** Dilution with small sips water/milk (do NOT induce vomiting). Neutralizing agents contraindicated (exothermic).
3. **Imaging:** CXR (pneumomediastinum indicates perforation), esophagogastroduodenoscopy (assess depth: Grade 1 superficial, Grade 2a/2b deeper, Grade 3 full-thickness) within 24 hours.
4. **Supportive Care:** IV fluids (maintain urine output), antibiotics (risk infection if Grade 2b+), steroids (controversial; may reduce stricture formation if severe). NPO status; nutritional support (TPN if extensive damage).
5. **Complications:** Perforation (surgical drainage/esophagostomy), mediastinitis (high mortality), stricture (dilations, stent placement).

**Prognosis:** Depends on agent, amount, time to treatment. Mortality 5-15% if stricture develops; if perforation, >50%.

## Tricyclic Antidepressant (TCA) Poisoning

**Agents:** Amitriptyline, imipramine, doxepin, desipramine.

**Pathophysiology:** Anticholinergic effects + cardiac conduction blockade. High lipophilicity prolongs half-life, worsens toxicity.

**Clinical Presentation:**
- **Early:** Anticholinergic (dry mouth, dilated pupils, confusion, agitation, hyperthermia).
- **Cardiac:** Tachycardia (unopposed alpha-effects), QT prolongation, wide QRS (>100 ms indicates severe toxicity), arrhythmias (VT, VF), hypotension.
- **Neurologic:** Seizures, coma.

**Diagnosis:** Serum TCA level (therapeutic 50-200 ng/mL, toxicity >1000 ng/mL), ECG (wide QRS, prolonged QT).

**Treatment:**
1. **Airway:** Intubate if GCS <8 or respiratory depression.
2. **Decontamination:** Activated charcoal 50 g (within 1-2 hours, conscious patient with intact gag reflex).
3. **Cardiac Stabilization:** IV sodium bicarbonate 50-100 mEq (1-2 mEq/kg) to target serum pH 7.45-7.55, narrows QRS (alkaline urine enhances renal clearance). Target serum K >4 (hypokalemia worsens arrhythmias).
4. **Seizures:** Benzodiazepines (lorazepam 2-4 mg IV).
5. **Avoid:** Physostigmine (contraindicated—worsens cardiac effects), type Ia antiarrhythmics (quinidine, procainamide—worsen QRS widening).

**Prognosis:** Mortality <2% with aggressive supportive care; most deaths from cardiac arrhythmias/aspiration.

## Acetaminophen Poisoning

**Mechanism:** Depletion of hepatic glutathione; N-acetyl-p-benzoquinone imine (NAPQI) accumulates, causes hepatocellular necrosis.

**Presentation:**
- **Stage 1 (0-24h):** Nausea, vomiting, diaphoresis, mild abdominal pain. Liver enzymes may be normal.
- **Stage 2 (24-72h):** Right upper quadrant pain, hepatomegaly, elevated transaminases (up to 10,000+ IU/L), coagulopathy (PT >3 sec).
- **Stage 3 (72-96h):** Peak hepatic injury, encephalopathy, renal failure, DIC.
- **Stage 4 (after 4-7 days):** Recovery or progression to fulminant liver failure.

**Diagnosis:** Serum acetaminophen level + Rumack-Matthew nomogram (toxicity threshold depends on time post-ingestion). If level >140 mcg/mL at 4h, >70 mcg/mL at 8h, >40 mcg/mL at 12h → treatment indicated.

**Treatment:** N-acetylcysteine (NAC) if within 8-24 hours of ingestion (extends window further if earlier presentation).
- **IV NAC:** Loading dose 150 mg/kg IV over 1 hour, then 50 mg/kg over 4 hours, then 100 mg/kg over 16 hours. High dose shortens treatment.
- **Oral NAC:** 140 mg/kg loading dose, then 70 mg/kg Q4h × 17 doses (rarely used, poor palatability).

**Monitoring:** Transaminases, PT-INR, bilirubin, lactate. If encephalopathy develops, transfer to transplant center (listing criteria: INR >6.5, age, acetaminophen overdose, <7 days symptoms, renal failure).

**Prognosis:** >90% recovery if NAC given within 24 hours. Fulminant liver failure mortality 30-50% even with transplant.

## Salicylate Poisoning

**Presentation:** Tinnitus, confusion, tachypnea, hyperthermia, sweating.

**Pathophysiology:** Uncouples oxidative phosphorylation (heat generation), inhibits prostaglandin synthesis (respiratory center stimulation), metabolic acidosis.

**Diagnosis:** Serum salicylate level (therapeutic <30 mg/dL, toxicity >60 mg/dL). ABG shows mixed respiratory alkalosis + metabolic acidosis (early phase respiratory alkalosis, late phase metabolic acidosis dominates).

**Treatment:**
1. **Decontamination:** Activated charcoal 50 g.
2. **Urinary Alkalinization:** Sodium bicarbonate 50-100 mEq IV (target urine pH 7.5-8.5). Alkaline urine enhances renal clearance >10-fold. Monitor serum K, Mg, Ca (risk hypokalemic alkalosis).
3. **Hemodialysis:** If level >100 mg/dL, severe acidosis, renal failure, pulmonary edema, altered consciousness.
4. **Supportive:** Fluids (dehydration worsens toxicity), glucose (salicylates impair gluconeogenesis).

**Prognosis:** Mortality <5% with treatment; >50% if delayed/no dialysis for severe poisoning.

> 🎓 **Professor's Note:** TCAs were most common antidepressant overdose mortality cause before SSRIs. Cardiac toxicity requires ICU monitoring. Acetaminophen toxicity often delayed (patient feels fine initially); liver failure develops insidiously—early NAC prevents 80% of toxicity if given within 24h.

> 💡 **Memory Trick:** "TCA toxicity = wide QRS + arrhythmias (bicarb narrows QRS). Acetaminophen = Rumack nomogram (4h level guides treatment). Salicylate = respiratory alkalosis + metabolic acidosis (bicarb urine for dialysis)."

> ⚡ **Exam Alert:** Corrosive ingestion: NO gastric lavage (perforation risk). Endoscopy within 24 hours to grade injury (Grade 2b+ requires steroids/antibiotics). TCA QRS >100 ms = severe toxicity, IV bicarbonate first-line. Acetaminophen nomogram dependent on time post-ingestion—only valid >4 hours.

> 🏥 **Clinical Pearl:** In India, salicylate toxicity from ayurvedic preparations common (oil of wintergreen). Aspirin + ibuprofen dual use increases toxicity. Corrosive ingestion mortality preventable: avoid neutralizing agents, endoscopy for grading, surgical consultation early if perforation suspected.

{{IMAGE: Rumack-Matthew acetaminophen nomogram, TCA ECG changes (QRS widening, QT prolongation), salicylate nomogram, corrosive esophageal injury grading}}

**Reference:** Harrison's Principles of Internal Medicine, 21st ed., Chapter 474: "Poisoning and Drug Overdose."
`,
    estimatedMinutes: 11,
  },
  {
    topicCode: "IM-MOD-11-TOP-05",
    contentMd: `# Scorpion Sting, Insect Bites & Environmental Toxins

Environmental exposures cause significant morbidity in tropical India. Rapid recognition and supportive care prevent mortality.

## Scorpion Sting (Mesobuthus tamulus—Indian Red Scorpion)

**Venom Composition:** Peptide toxins affecting sodium/potassium channels; cardiotoxins, neurotoxins.

**Pathophysiology:** Massive sympathomimetic surge (catecholamine release from scorpion venom), causing vasoconstriction, myocardial dysfunction, pulmonary edema.

**Clinical Presentation:**
- **Local:** Pain, erythema, edema at sting site.
- **Systemic:**
  - **Cardiovascular Manifestations:** Tachycardia, hypertension (early), then hypotension (cardiogenic shock). Arrhythmias, MI, acute myocarditis.
  - **Pulmonary:** Pulmonary edema (pink frothy sputum), ARDS, respiratory failure.
  - **Neurologic:** Tremor, muscle fasciculations, seizures, cranial nerve involvement (ptosis, diplopia).
  - **Metabolic:** Hyperglycemia, elevated liver enzymes.

**Severity Grading:**
- **Grade I:** Local manifestations only. Good prognosis.
- **Grade II:** Mild systemic (tremor, hyperreflexia). Prognosis fair.
- **Grade III:** Severe systemic (cardiac/pulmonary manifestations). High mortality (20-30%) without ICU.
- **Grade IV:** Moribund (cardiogenic shock, respiratory failure). Mortality >50%.

**Management:**
1. **Antivenom:** Indian scorpion antivenom (if available). Efficacy debated; may reduce neuromuscular symptoms but not cardiac.
2. **Supportive Care:** Oxygen, mechanical ventilation if respiratory failure. IV fluids (pulmonary edema risk—careful fluid management). Vasopressors (norepinephrine if shock). ICU monitoring mandatory for Grade II+.
3. **Cardiac Support:** Inotropes (dobutamine, milrinone) if myocardial depression. Beta-blockers (labetalol) controversial—may worsen shock.
4. **Pain Control:** Opioids, local anesthesia (subcutaneous lidocaine at sting site).

**Prognosis:** Mortality 10-15% Grade III with treatment. Most deaths from cardiogenic shock, pulmonary edema. Children, elderly at higher risk.

## Bee/Wasp Stings

**Venom:** Phospholipase A2, hyaluronidase, kinins. Histamine release causes local/systemic reactions.

**Manifestations:**
- **Local:** Pain, erythema, edema (usually self-limited, 24-48 hours).
- **Large Local Reaction:** Swelling >10 cm, lasting >24 hours. Treat with antihistamines, corticosteroids.
- **Systemic Anaphylaxis:** Urticaria, angioedema, bronchospasm, hypotension, syncope. Immediate risk if sting. Epinephrine IM 0.3-0.5 mg (1:1000), repeat Q15min, IV access, antihistamines, corticosteroids.

**Multiple Stings (>100):** Venom overdose. Rhabdomyolysis, myoglobinuria, acute kidney injury, thrombocytopenia, DIC. Supportive care: aggressive fluids, hemodialysis if needed.

## Insect Bites (Mosquitoes, Flies, Leeches)

**Disease Vectors:**
- **Mosquitoes:** Malaria (Anopheles), dengue (Aedes), filariasis (Culex), Japanese encephalitis (Culex).
- **Flies:** Sleeping sickness (tsetse), onchocerciasis (blackfly).
- **Leeches (India):** Attachment to mucous membranes, epistaxis, airway obstruction. Remove with salt, citrus juice (causes detachment).

**Manifestations:** Pruritus, nodular lesions (papular urticaria), secondary infection (impetigo), systemic disease (dengue, malaria—see infectious disease sections).

**Management:** Antihistamines, topical corticosteroids, avoid scratching (prevent infection), antimalarial/antifebrile if vector-borne disease suspected.

## Environmental Toxins

**Carbon Monoxide (CO):** Incomplete combustion (vehicle exhaust, charcoal braziers, faulty heating—common in India during winter).

- **Mechanism:** Carboxyhemoglobin (COHb) formation impairs oxygen delivery.
- **Symptoms:** Headache, dizziness, confusion, syncope, chest pain, arrhythmias.
- **Diagnosis:** Carboxyhemoglobin level (normal <2%, symptomatic usually >20%).
- **Treatment:** Remove from exposure, 100% O2 (reduces COHb half-life from 4 hours to 60 minutes). Hyperbaric oxygen if COHb >40%, neurologic symptoms, pregnant, cardiac involvement.

**Methemoglobinemia:** Oxidants (local anesthetics—benzocaine, dyes, aniline compounds) convert hemoglobin to methemoglobin.

- **Symptoms:** Cyanosis, headache, confusion, syncope.
- **Diagnosis:** Methemoglobin level (oximetry shows "pseudohypoxia").
- **Treatment:** Methylene blue 1-2 mg/kg IV (converts methemoglobin back to hemoglobin). Ascorbic acid alternative if methylene blue unavailable.

**Hydrogen Sulfide (H2S):** Industrial exposure (oil drilling, sewage, agriculture).

- **Mechanism:** Inhibits cytochrome oxidase; cellular hypoxia.
- **Symptoms:** "Knockdown" (sudden collapse, apnea), headache, dizziness.
- **Treatment:** Fresh air, 100% O2, hyperbaric oxygen if severe. Sodium thiosulfate 12.5 g IV may be beneficial (converts H2S to thiocyanate).

**Cyanide:** Industrial, fires (plastic combustion).

- **Mechanism:** Inhibits complex IV (cytochrome c oxidase); lactic acidosis, cellular hypoxia.
- **Symptoms:** Sudden loss of consciousness, lactic acidosis (elevated gap), "oxygen paradox" (venous O2 high despite arterial O2 low).
- **Treatment:** Sodium nitrite 300 mg IV (induces methemoglobin, binds cyanide), sodium thiosulfate 12.5 g IV (converts cyanide to thiocyanate, excreted in urine). Hydroxocobalamin 5 g IV (binds cyanide directly, preferred if available). Avoid nitrite if concurrent carbon monoxide exposure.

> 🎓 **Professor's Note:** In India, scorpion sting deaths preventable with early ICU admission, vasopressor support, careful fluid management. Antivenom efficacy limited; supportive care is foundation.

> 💡 **Memory Trick:** "Scorpion = catecholamine surge (shock + pulmonary edema). Bees = anaphylaxis (epinephrine). CO = headache + COHb (hyperbaric O2). Cyanide = cellular hypoxia despite normal O2 sat."

> ⚡ **Exam Alert:** Anaphylaxis = epinephrine IM FIRST (not IV initially). Methemoglobinemia presents as cyanosis unresponsive to O2 (blue-gray lips); methylene blue diagnostic + therapeutic. Cyanide antidote kit (nitrite + thiosulfate) or hydroxocobalamin essential in ICUs.

> 🏥 **Clinical Pearl:** In India, scorpion stings in summer (peak season June-October) cause significant morbidity. Community awareness (wear shoes, shake bedding, check clothing) prevents stings. Early hospital transport, aggressive supportive care (vasopressor, mechanical ventilation) reduce mortality from 30% to <10% in Grade III cases.

{{IMAGE: Scorpion sting manifestations timeline and management algorithm, bee/wasp anaphylaxis treatment flow, carboxyhemoglobin binding curve, methemoglobin reduction mechanism}}

**Reference:** Harrison's Principles of Internal Medicine, 21st ed., Chapter 488: "Envenomation Injuries" and Chapter 474: "Poisoning and Drug Overdose."
`,
    estimatedMinutes: 11,
  },
  {
    topicCode: "IM-MOD-12-TOP-01",
    contentMd: `# Shock (Types, Pathophysiology, Management)

Shock is the most critical ICU condition. Mortality exceeds 40% in septic shock, 50% in cardiogenic shock. Understanding pathophysiology guides management.

## Shock Pathophysiology

**Definition:** Tissue hypoperfusion (DO2 <500 mL/min/m²) causing inadequate oxygen delivery, cellular hypoxia, multi-organ failure, death if untreated.

**Hemodynamic Parameters:**
- **Cardiac Output (CO):** Heart rate × stroke volume. Normal 4-8 L/min.
- **Systemic Vascular Resistance (SVR):** (MAP - CVP) / CO × 80. Normal 800-1200.
- **Oxygen Delivery (DO2):** CO × CaO2 (arterial oxygen content). Normal >500 mL/min/m².
- **Oxygen Consumption (VO2):** Oxygen extraction × DO2. Normal 200-250 mL/min/m².

## Shock Classification

**Hypovolemic Shock:** CO normal/high, SVR high, low DO2.

**Cardiogenic Shock:** CO low, SVR high, low DO2.

**Distributive Shock:** CO variable (high early, low late), SVR low, maldistributed flow.

**Obstructive Shock:** CO variable, SVR high/variable, mechanical obstruction (PE, tamponade, pneumothorax).

## Management Paradigm (Updated)

**Early Recognition & Resuscitation (Golden Hour):**
1. **Fluid Bolus:** 30 mL/kg crystalloid (over 1-3 hours). Reassess perfusion (lactate, urine output, blood pressure).
2. **Vasopressor Initiation:** If SBP remains <65 despite fluids. Norepinephrine (NE) 0.05-0.2 mcg/kg/min IV (alpha + beta).
3. **Source Control:** Identify underlying cause. Antibiotics within 1 hour (sepsis), PCI (MI), drainage (abscess), blood products (hemorrhage).

**Ongoing Management:**
- **Lactate Monitoring:** Initial lactate prognostic; lactate clearance at 6 hours better prognostic marker than absolute level. Lactate >4 or clearing <10% in 6h predicts mortality increase.
- **CVP Targets:** Now discouraged (not reliable). Dynamic parameters (pulse pressure variation >13%, stroke volume variation >15%) better assess fluid responsiveness.
- **Inotropes:** Dobutamine (if cardiogenic component), milrinone (if right heart dysfunction). Use cautiously (peripheral vasodilation may worsen hypotension).
- **Vasopressor Escalation:** Add vasopressin (0.04 units/min fixed) or epinephrine if NE inadequate. Phenylephrine pure alpha (if excessive tachycardia).
- **Supportive Care:** Mechanical ventilation (ARDS risk), glucose control, DVT prophylaxis, stress ulcer prophylaxis.

**Complications:**
- **ARDS:** High tidal volume mechanical ventilation, aspiration. Manage with lung-protective strategy (6 mL/kg ideal body weight, PEEP).
- **Acute Kidney Injury:** Prerenal (hypovolemia), intrinsic (rhabdomyolysis, myoglobinuria). Maintain urine output >0.5 mL/kg/hr.
- **DIC:** Consumption coagulopathy. Monitor fibrinogen, D-dimer, platelet; replace FFP, platelets.
- **Hepatic Dysfunction:** Lactate clearance impaired, ammonia elevation (encephalopathy risk).

## Specific Shock Types—Detailed Management

**Septic Shock:** Initial CO high (warm shock), SVR low. Late: CO drops (cold shock). Requires aggressive antibiotic initiation <1 hour, source control, fluid resuscitation, vasopressors.

**Cardiogenic Shock:** CO low, SVR high. Pulmonary edema common. Manage underlying cause (revascularization for MI, valve surgery for MR, mechanical support for acute myocarditis). Avoid excessive fluids (worsens edema). Inotropes essential.

**Hemorrhagic Shock:** Ongoing blood loss. Transfuse PRBC (1:1:1 with FFP:platelets if >1500 mL loss). Hemostasis priority (tourniquet, surgery).

**Hypovolemic (Non-Hemorrhagic):** Dehydration, burns, GI losses. Restore intravascular volume with crystalloid; electrolyte repletion (especially K, Mg in diarrhea).

## Prognosis

**Favorable:** Early recognition, prompt vasopressor, responsive shock (lactate <4, lactate clearance >10%), no organ dysfunction.

**Unfavorable:** Delayed presentation (>6 hours), persistent shock despite vasopressors (lactate >4, lactate clearance <10%), multi-organ dysfunction (ARDS, AKI, DIC, encephalopathy).

> 🎓 **Professor's Note:** Lactate clearance 10% in 6 hours is best single predictor of survival in shock. Absolute lactate less important than trajectory. Point-of-care lactate testing (if available) guides real-time resuscitation.

> 💡 **Memory Trick:** "Shock = Do2 <500. Warm shock (distributive) = high CO, low SVR. Cold shock (cardiogenic/hypovolemic) = low CO, high SVR. 30 mL/kg fluid, then vasopressor if SBP <65."

> ⚡ **Exam Alert:** Dynamic parameters (pulse pressure variation, SVV) superior to static parameters (CVP, PAWP) for fluid responsiveness assessment. ROSC in cardiac arrest = shock management now (mechanical support, targeted temperature management).

> 🏥 **Clinical Pearl:** In India, hemorrhagic shock (trauma, postpartum) common. Early massive transfusion protocol (1:1:1 PRBC:FFP:platelets) reduces mortality. Septic shock in resource-limited settings benefits from aggressive fluid + antibiotics; vasopressor access often limited (push-dose epi in large-bore IV line if mechanical pump unavailable).

{{IMAGE: Shock hemodynamic profiles (CO vs SVR), lactate clearance prognostic timeline, vasopressor algorithm, DIC cascade in shock}}

**Reference:** Harrison's Principles of Internal Medicine, 21st ed., Chapter 323: "Shock."
`,
    estimatedMinutes: 11,
  },
  {
    topicCode: "IM-MOD-12-TOP-02",
    contentMd: `# ARDS & Mechanical Ventilation

Acute Respiratory Distress Syndrome affects >200,000 patients/year in the US; mortality 30-40%. ICU management requires meticulous ventilator strategies.

## ARDS Definition & Pathophysiology

**Berlin Criteria (2012):**
- **Onset:** Within 1 week of known clinical insult.
- **Hypoxemia:** PaO2/FiO2 ratio
  - Mild: 200-300 (on CPAP/PEEP ≥5)
  - Moderate: 100-200
  - Severe: <100
- **Bilateral Pulmonary Opacities:** On CXR or CT (not explained by effusion, collapse, nodules).
- **Etiology:** Respiratory or non-respiratory (sepsis, aspiration, trauma, pancreatitis, massive transfusion, near-drowning, drug-induced).

**Pathophysiology:**
- **Exudative Phase (Days 1-7):** Increased capillary permeability (cytokine storm—TNF, IL-1, IL-6, IL-8), alveolar edema, neutrophil infiltration, epithelial damage, loss of surfactant.
- **Fibroproliferative Phase (Days 7-21):** Type II pneumocyte proliferation, collagen deposition, fibrosis (if inadequately managed).

## Ventilator Management (ARDSnet Protocol)

**Initial Settings:**
- **Tidal Volume:** 6 mL/kg ideal body weight (IBW). Calculate IBW: males 50 + 2.3 × (height in inches - 60); females 45.5 + 2.3 × (height in inches - 60).
- **Rate:** 12-15 breaths/min (adjusted for pH >7.25).
- **PEEP:** Starts at 5 cm H2O; increase if hypoxemia persists on FiO2 >0.6.
  - **High PEEP Strategy:** PEEP 15-18 cm H2O + FiO2 0.3-0.5 titration (controversial, marginal benefit in trials).
  - **Low PEEP Strategy:** PEEP 5 cm H2O, standard approach.
- **Plateau Pressure (Pplat):** Target <30 cm H2O (measure at 0.5-second inspiratory hold). If >30, reduce tidal volume (minimum 4 mL/kg) or accept higher PaCO2 (permissive hypercapnia—target pH >7.15).

**Oxygenation Management:**
- Start FiO2 0.3-0.4; titrate to SpO2 90-95%, PaO2 60-80 mmHg.
- PEEP increments: Increase if FiO2 >0.6 for desired oxygenation; increase to 8-10, then 15-18 incrementally.
- Avoid derecruitment (sudden PEEP drops reset lung collapse risk).

**Acid-Base Management:**
- Target pH >7.15. Permissive hypercapnia (PaCO2 45-55) acceptable if pH >7.15.
- If pH <7.15 despite RR 30-35, consider: sodium bicarbonate (0.5 mEq/kg IV), ECMO (if available), increased minute ventilation (risk barotrauma).

**Weaning Parameters:**
- **Readiness:** FiO2 ≤0.4, PEEP ≤8, adequate mental status (can follow commands), no ongoing sedation.
- **Spontaneous Breathing Trial (SBT):** Pressure support 5-7 cm H2O (or T-piece trial) × 30-120 minutes. Success if RR <35, SpO2 >90%, HR <120, SBP 90-180, no distress.
- **Daily SBT:** Initiate daily (excludes failure, quickens extubation).

## Complications & Management

**Ventilator-Associated Pneumonia (VAP):** Occurs in 10-15% of mechanically ventilated patients. Risk increases after 48 hours ventilation. Prevention: elevate HOB 30°, oral care (chlorhexidine 0.12% BID), avoid unnecessary sedation, subglottic secretion drainage.

**Barotrauma (Volutrauma/Barotrauma):** Alveolar overdistension. Prevent with low tidal volumes, plateau pressure <30. Manifestation: pneumothorax (sudden desaturation, hypotension).

**Ventilator-Induced Lung Injury (VILI):** Repetitive opening/closing (atelectotrauma), excessive shear stress (biotrauma—cytokine release), hyperoxia-related oxidative stress. Manage with lung-protective ventilation, minimize FiO2.

**Sedation Issues:** Over-sedation prolongs ventilation, increases delirium (confusion, hallucinations). Use minimal sedation (target Richmond Agitation-Sedation Scale -2 to -1), avoid continuous infusions if possible.

## Adjunctive Therapies

**Prone Positioning:** Improves oxygenation in severe ARDS (P/F <100). 16 hours/day prone reduces mortality in select patients. Complications: pressure ulcers, dislodged tubes.

**ECMO (Extracorporeal Membrane Oxygenation):** Veno-venous ECMO for severe ARDS unresponsive to conventional management. Available in tertiary centers. COVID-19 increased ECMO demand significantly.

**Inhaled Pulmonary Vasodilators:** Nitric oxide (inhaled), epoprostenol (nebulized) reduce pulmonary hypertension, improve oxygenation. Limited evidence; expensive.

**Steroids:** Low-dose dexamethasone (6 mg daily) in late-phase ARDS (>7 days) reduces mortality, ventilator duration. Early steroids (day 0-7) NOT beneficial.

## Prognosis

**Favorable:** Young age, single organ failure, rapid diagnosis + lung-protective ventilation.

**Unfavorable:** Age >60, sepsis etiology, immunocompromised, multi-organ failure, fibroproliferative phase.

**Mortality:** 30-40% overall (higher in sepsis-ARDS, lower in trauma-ARDS).

> 🎓 **Professor's Note:** ARDSnet low tidal volume strategy (6 mL/kg) is standard; improves outcomes compared to conventional (12 mL/kg). Lung-protective ventilation applies to ALL mechanically ventilated patients (not just ARDS).

> 💡 **Memory Trick:** "ARDS = low tidal volume (6 mL/kg IBW), Pplat <30, PEEP titration, permissive hypercapnia (pH >7.15). High PEEP benefits unclear; no harm if Pplat <30."

> ⚡ **Exam Alert:** Calculate IBW correctly (critical for tidal volume dosing). Plateau pressure measured with 0.5-second inspiratory hold (must do). P/F <100 = severe ARDS (prone positioning, consider ECMO if available).

> 🏥 **Clinical Pearl:** In India, ARDS common in sepsis (TB, pneumonia), aspiration (GI bleed/obstruction), trauma. Early lung-protective ventilation reduces mortality. ECMO rarely available; focus on meticulous conventional management (low TV, adequate PEEP, permissive hypercapnia). Prone positioning simple, effective if resources/staffing available.

{{IMAGE: ARDSnet ventilator protocol algorithm, plateau pressure measurement, low tidal volume benefit study results, Berlin ARDS criteria scoring}}

**Reference:** Harrison's Principles of Internal Medicine, 21st ed., Chapter 321: "Acute Respiratory Distress Syndrome."
`,
    estimatedMinutes: 11,
  },
  {
    topicCode: "IM-MOD-12-TOP-03",
    contentMd: `# Sepsis & Multiorgan Dysfunction

Sepsis is the leading cause of ICU admission and death in non-coronary settings. Sepsis-induced multi-organ dysfunction (SIMD) is primary killer.

## Sepsis-Induced Organ Dysfunction

**Pathophysiology:** Initial infection triggers TLR signaling, massive cytokine release (TNF, IL-1, IL-6, IL-10), complement/coagulation activation, endothelial dysfunction, microvascular thrombosis, cellular hypoxia.

**Organ Systems Affected:**

**Cardiovascular:** Myocardial depression (TNF-induced), decreased ejection fraction, relative hypovolemia (vasodilation), distributive shock. Troponin elevation common (poor prognosis). Arrhythmias from sepsis-induced cardiomyopathy.

**Respiratory:** ARDS (10-15% sepsis), aspiration, ventilator-associated pneumonia, refractory hypoxemia.

**Renal:** Acute kidney injury (oliguria, elevated creatinine, low GFR). Sepsis-associated AKI (SAKI) mechanism: renal hypoperfusion (despite normal blood pressure), tubular damage, myoglobinuria (rhabdomyolysis from cytokine storm). Progresses to multi-organ dysfunction if untreated.

**Hepatic:** Cholestasis (hyperbilirubinemia, elevated alkaline phosphatase), transaminitis (usually mild), coagulopathy (prolonged PT-INR), encephalopathy (ammonia elevation, bacterial translocation).

**Coagulation:** DIC (disseminated intravascular coagulation)—consumption of platelets, fibrinogen, coagulation factors; activation of fibrinolysis. Manifests as thrombocytopenia, prolonged PT-INR, elevated D-dimer, low fibrinogen (<100 mg/dL).

**CNS:** Septic encephalopathy (delirium, confusion, agitation, coma). Mechanism: inflammatory cytokine-induced blood-brain barrier dysfunction, impaired cerebral autoregulation. EEG may show slowing.

**Metabolic:** Lactic acidosis (cellular hypoxia, mitochondrial dysfunction), hyperglycemia (insulin resistance), hypophosphatemia (cellular shifts), hypomagnesemia.

## SOFA Score (Sequential Organ Failure Assessment)

Predicts mortality in sepsis. Score 0-4 per system:

- **Respiratory:** PaO2/FiO2 ≥400 (0) → <100 (4).
- **Coagulation:** Platelets >150 (0) → <20 (4).
- **Hepatic:** Bilirubin <1.2 (0) → >5.1 (4).
- **Cardiovascular:** Mean arterial pressure ≥70 (0) → Epinephrine >0.1 mcg/kg/min (4).
- **Renal:** Creatinine <1.1 (0) → >5 (4).
- **Neurologic:** GCS 15 (0) → <6 (4).

**Total SOFA:** 0-24. Each ≥1-point increase in SOFA predicts mortality ~10% increase. SOFA ≥2 on admission predicts 10% mortality (baseline 1%); SOFA ≥3 predicts high mortality (20%+).

## Management of Sepsis-Induced SIMD

**Early Goal-Directed Resuscitation (EGDT):**
1. **Fluid:** 30 mL/kg crystalloid bolus (over 1-3 hours). Monitor lactate, urine output, blood pressure.
2. **Vasopressor:** Norepinephrine if SBP <65 despite fluids. Target MAP ≥65.
3. **Source Control:** Antibiotics <1 hour, identify infectious source (blood cultures before antibiotics), drainage/debridement if abscess/necrotic tissue.

**Antibiotic Therapy:**
- Broad-spectrum: Ceftriaxone/cefotaxime + gentamicin + metronidazole (covers gram-positive, gram-negative, anaerobes).
- De-escalate per culture results (48-72 hours).
- Duration: Usually 7-10 days (longer if endocarditis, prosthetic valve, CNS infection).

**Organ-Specific Support:**
- **ARDS:** Lung-protective ventilation (6 mL/kg, PEEP, permissive hypercapnia).
- **AKI:** Fluid optimization, avoid nephrotoxins, renal replacement therapy (RRT) if KDIGO stage 3 (GFR <15, K >6, Cr rise rapidly, severe acidosis, pulmonary edema).
- **Hepatic:** Lactulose (elevate pH, reduce ammonia), avoid hepatotoxins, coagulopathy management (FFP if bleeding).
- **DIC:** Correct underlying infection, transfuse components (FFP, platelets) if bleeding. Anticoagulation (heparin) controversial; consider if thrombosis risk.

**Adjunctive Therapies:**
- **Corticosteroids:** Hydrocortisone 50 mg IV Q6H (refractory shock—unresponsive to vasopressors despite fluids). Benefit modest; increases infection risk, hyperglycemia.
- **Immunoglobulin:** Limited evidence; not routinely recommended.
- **Activated Protein C:** Withdrawn from market (no mortality benefit, bleeding risk).

## SOFA-Based Treatment Escalation

**SOFA 0-1:** Ward management, antibiotics, fluids.

**SOFA 2:** Ward monitoring, aggressive fluid resuscitation, vasopressor initiation if needed.

**SOFA ≥3:** ICU admission, mechanical ventilation, RRT, high-dose vasopressor, likely futility discussion if ≥72 hours persistent SOFA ≥3.

## Prognosis

**Favorable:** Early recognition, single organ involvement, rapid bacterial source control, responsive to fluids/vasopressors.

**Unfavorable:** Delayed antibiotics (>3 hours), multi-organ failure (SOFA ≥3), immunocompromised (HIV CD4 <50), elderly (age >75), high lactate (>4 mmol/L) with slow clearance.

> 🎓 **Professor's Note:** Sepsis mortality 30-40% in ICU. Every hour delay in antibiotics increases mortality. Early lactate measurement + clearance tracking improves outcomes. SOFA score useful for triage; SOFA ≥3 at 72 hours warrants palliative care discussion if no improvement.

> 💡 **Memory Trick:** "Sepsis = SIRS + infection. Septic shock = hypotension despite fluids/vasopressors. SOFA ≥2 = organ dysfunction. Every point increase in SOFA ~10% mortality increase."

> ⚡ **Exam Alert:** qSOFA (quick SOFA ≥2: altered mentation, SBP ≤100, RR ≥22) predicts worse outcomes; more specific than SIRS for sepsis. Lactate is marker of tissue hypoperfusion; lactate clearance <10% at 6 hours predicts mortality even if BP normal (occult shock).

> 🏥 **Clinical Pearl:** In India, sepsis mortality >50% in resource-limited ICUs (limited vasopressors, no mechanical ventilation). Focus on prevention (hand hygiene, infection control), early recognition (qSOFA screening), antibiotic access (government programs), and basic ICU support (fluids, oxygen, monitoring). Training paramedics on sepsis recognition reduces hospital delays.

{{IMAGE: SOFA scoring components and mortality prediction, sepsis organ dysfunction cascade, lactate-guided resuscitation, DIC in sepsis}}

**Reference:** Harrison's Principles of Internal Medicine, 21st ed., Chapter 323: "Sepsis and Septic Shock."
`,
    estimatedMinutes: 11,
  },
  {
    topicCode: "IM-MOD-12-TOP-04",
    contentMd: `# Coma & Altered Consciousness

Coma affects outcome in 5-10% of ICU admissions. GCS <8 mandates intubation; prognosis depends on etiology, duration, age.

## Consciousness Hierarchy

**Alert:** Normal wakefulness, appropriate responses.

**Lethargy:** Aroused with loud voice/physical stimulation; returns to baseline when stimulation stops.

**Obtundation:** Aroused with vigorous or painful stimulation; decreased awareness.

**Stupor:** Only vigorous/repeated stimulation arouses; minimal awareness.

**Coma:** No arousal to any stimulation; no purposeful response.

**Brain Death:** Complete irreversible loss of all brain function (no brainstem reflexes, apnea test positive).

## Glasgow Coma Scale (GCS)

**Eye Opening (E):**
- Spontaneous (4)
- To voice (3)
- To pain (2)
- No response (1)

**Verbal Response (V):**
- Oriented (5)
- Confused (4)
- Inappropriate words (3)
- Incomprehensible sounds (2)
- No response (1)

**Motor Response (M):**
- Obeys commands (6)
- Localizes to pain (5)
- Withdraws from pain (4)
- Abnormal flexion—decorticate (3)
- Abnormal extension—decerebrate (2)
- No response (1)

**Total Score:** 3-15. GCS ≤8 = coma, mandates intubation.

**Prognostic Implications:**
- **GCS 3-4:** Mortality >80%, permanent vegetative state if survivor.
- **GCS 5-7:** Mortality ~60%, significant disability.
- **GCS 8:** Mortality ~30%, many recover to functional status.

## Etiologies of Coma

**Structural (Brainstem/Midbrain Lesions):**
- Intracranial hemorrhage (epidural, subdural, subarachnoid, intracerebral).
- Ischemic stroke (basilar artery thrombosis).
- Tumor (brainstem compression).
- Herniation (uncal, central, cerebellar).

**Metabolic/Toxic:**
- Drugs (opioids, sedatives, anticholinergics).
- Metabolic (hypoglycemia, hyperglycemia, uremia, liver failure, sepsis).
- Intoxication (alcohol, stimulants, hallucinogens).
- Endocrine (hypothyroidism, hypoadrenalism, myxedema coma).

**Infectious:**
- Meningitis (bacterial, viral, TB, fungal).
- Encephalitis (HSV, arbovirus, rabies).
- Sepsis (septic encephalopathy).

**Seizures:**
- Post-ictal state.
- Status epilepticus (non-convulsive).

**Other:**
- Hypoxia (cardiac arrest, CO poisoning).
- Hypothermia.
- Hypertensive encephalopathy.

## Clinical Assessment

**Neurologic Examination:**

1. **Pupils:** Size, reactivity to light. Bilateral miosis (opioid, pontine hemorrhage), bilateral mydriasis (anticholinergic, hypoxia), unilateral fixed dilated (uncal herniation), mid-position fixed (midbrain damage).

2. **Ocular Movements:** Doll's eyes test (passive head turning → eyes move opposite direction if brainstem intact). Absent if brainstem damage.

3. **Corneal Reflex:** Cotton swab to cornea → blink (if present, afferent pathway intact). Absent in coma.

4. **Gag Reflex:** Elicit or assess cough with suctioning.

5. **Motor Response:** Localization to pain (purposeful), withdrawal (noxious reflex), decorticate (flexion—forebrain damage), decerebrate (extension—brainstem damage).

6. **Plantar Reflex:** Extensor (Babinski sign—upper motor neuron damage), flexor (normal).

## Diagnostic Workup

**Stat Investigations:**
- **Glucose:** Hypoglycemia treatable cause.
- **Electrolytes:** Hyponatremia, hypernatremia, hyperammonemia.
- **Arterial Blood Gas:** Hypoxia, hypercapnia, acidosis.
- **Toxicology Screen:** Opioids, sedatives, stimulants.
- **Liver/Renal Function:** Encephalopathy risk (hepatic, uremic).
- **CT Head:** Rule out hemorrhage, mass, herniation. Without contrast initially.
- **Lumbar Puncture (if CT normal):** CSF analysis (meningitis, encephalitis, subarachnoid hemorrhage).
- **EEG:** Non-convulsive seizures, encephalopathy pattern (diffuse slowing), triphasic waves (liver disease, renal failure).
- **MRI Brain:** If structural cause not evident on CT (ischemic stroke, demyelination, posterior reversible encephalopathy syndrome—PRES).

## Management

**Immediate:**
1. **Airway:** Intubate if GCS ≤8.
2. **Oxygenation:** SpO2 >94%.
3. **Glucose:** Dextrose 50 mL IV if hypoglycemic.
4. **Naloxone:** 0.4-2 mg IV if opioid suspected.
5. **Thiamine:** 100 mg IV before dextrose (Wernicke's encephalopathy prevention in alcoholics).

**Ongoing:**
- **Seizure Prophylaxis:** Phenytoin (300 mg load) or levetiracetam if traumatic brain injury.
- **ICP Management (if elevated):** Head elevation 30°, avoid hypercapnia (maintain PCO2 35-40), osmotic therapy (mannitol, hypertonic saline), sedation/paralysis if mechanically ventilated.
- **Temperature Management:** Avoid hyperthermia (worsen prognosis); hypothermia neuroprotective (32-34°C in post-cardiac arrest, post-stroke).
- **Infection Prevention:** Antibiotics if meningitis suspected, VAP prevention.

## Prognosis & Prognostication

**Favorable Factors:** Young age, short coma duration (<7 days), known reversible cause, motor recovery present.

**Poor Factors:** Age >65, GCS 3-5, no motor response, non-reactive pupils, absent brainstem reflexes, post-anoxic coma.

**Prognostication Timing:** 72 hours minimum (neurologic recovery may occur beyond 72 hours but increasingly unlikely). Clinical examination most important; neuroimaging (CT/MRI), electrophysiology (EEG, SEP—somatosensory evoked potentials), biomarkers (NSE, S100B) adjunctive.

**Vegetative State vs. Minimally Conscious:** Vegetative state = no awareness, sleep-wake cycles preserved. Minimally conscious = fluctuating, minimal evidence of awareness. Time to diagnosis: 4 weeks (temporary recovery possible after 4 weeks, rare after 3-6 months).

> 🎓 **Professor's Note:** GCS ≤8 requires intubation (airway protection). Prognostication before 72 hours discouraged (early recovery possible). Post-anoxic coma has worst prognosis; >90% mortality if no motor response at 72 hours.

> 💡 **Memory Trick:** "GCS <8 = intubate. Coma workup: glucose, CT head, LP (if CT normal), EEG (seizures?), toxicology. Pupil exam key: bilateral miotic (opioid), bilateral dilated (hypoxia), one dilated (herniation)."

> ⚡ **Exam Alert:** Doll's eyes absent if brainstem damaged (poor prognosis). Bilateral fixed pupils = poor prognosis (midbrain damage). Extensor posturing = decerebrate (brainstem), flexor = decorticate (forebrain)—decorticate slightly better prognosis.

> 🏥 **Clinical Pearl:** In India, traumatic coma common (head injury). Early CT, early ICU admission, ICP monitoring (if available), prevent secondary brain injury (maintain oxygenation, normothermia, avoid hypotension). Vegetative state rehabilitation requires months of physiotherapy, speech therapy—resource-intensive but essential for family counseling and goal-setting.

{{IMAGE: GCS scoring chart, pupil examination findings with etiologies, brainstem reflexes (doll's eyes, corneal, gag), coma prognostication algorithm}}

**Reference:** Harrison's Principles of Internal Medicine, 21st ed., Chapter 324: "Disorders of Consciousness."
`,
    estimatedMinutes: 11,
  },
  {
    topicCode: "IM-MOD-12-TOP-05",
    contentMd: `# DIC & Coagulopathy in Critical Care

Disseminated Intravascular Coagulation (DIC) is consumptive coagulopathy affecting 5-10% of ICU patients. Mortality exceeds 50% if untreated; underlying etiology drives outcome.

## Pathophysiology of DIC

**Trigger:** Sepsis (most common, 50%), trauma, pancreatitis, malignancy, transfusion reaction, amniotic fluid embolism, retained dead fetus (obstetric).

**Mechanism:** Tissue factor (TF) expression by macrophages/endothelium, initiates extrinsic coagulation cascade. Thrombin generation → platelet activation, fibrin polymerization, microthrombi formation in vasculature. Simultaneously, fibrinolysis activated (plasmin generation), consuming fibrinogen, fibrin degradation products (FDP) accumulate. Result: coagulation factor/platelet consumption, thrombocytopenia, hypofibrogenemia, coagulopathy, microvascular thrombosis (organ ischemia).

## DIC Scoring (ISTH—International Society on Thrombosis & Haemostasis)

**Platelet Count:**
- >100,000 = 0 points
- 50,000-100,000 = 1 point
- <50,000 = 2 points

**D-Dimer/FDP Elevation:**
- Normal = 0 points
- Mild = 2 points
- Moderate-severe = 3 points

**PT Prolongation:**
- <3 sec = 0 points
- 3-6 sec = 1 point
- >6 sec = 2 points

**Fibrinogen:**
- >100 mg/dL = 0 points
- <100 mg/dL = 1 point

**Score ≥5 = Compatible with overt DIC (repeat at 24h).** Progressive increase in score or persistent ≥5 confirms DIC.

## Clinical Manifestations

**Bleeding:** Spontaneous ecchymosis, mucosal bleeding, GI hemorrhage, hemoptysis, intracranial hemorrhage. Most feared complication; mortality 30-40% if ICH.

**Microvascular Thrombosis:** Acral necrosis (fingers, toes, nose darkening, tissue loss), skin manifestations (purpura fulminans), organ ischemia (AKI, hepatic failure, ARDS).

**Hemolysis:** Mechanical destruction of RBCs by fibrin strands in microvasculature; hemoglobin drops, LDH elevation.

## Management

**Treat Underlying Cause (Primary Goal):**
- **Sepsis:** Antibiotics, source control, supportive care.
- **Trauma:** Hemorrhage control, massive transfusion protocol (1:1:1 PRBC:FFP:platelets).
- **Obstetric:** Delivery if preeclampsia/HELLP, DIC usually resolves post-delivery.
- **Malignancy:** Chemotherapy (APL with ATRA reduces DIC dramatically).

**Component Replacement (if Bleeding):**
- **FFP:** 10-15 mL/kg (replenish coagulation factors). Goal: PT <3 sec prolonged from baseline.
- **Platelets:** Transfuse if <50,000 and bleeding, or <20,000 prophylactically.
- **Fibrinogen:** Cryoprecipitate 10 units (fibrinogen 200 mg/unit) if <100 mg/dL and bleeding. Goal: fibrinogen >100.
- **RBC:** Transfuse if Hb <7 (or <9 if ongoing hemorrhage risk).

**Anticoagulation (Controversial):**
- **Heparin:** Low-dose SC (prophylaxis), or low-dose IV if thrombotic manifestations (acral necrosis, ARDS). Benefit unclear; may increase bleeding. Typically NOT used in DIC with spontaneous bleeding.
- **Antithrombin:** Not routinely recommended.
- **Thrombomodulin (Recombinant):** Under investigation; not standard in most ICUs.

**Avoid Worsening DIC:**
- Minimize transfusions (RBC transfusion can trigger TF expression, worsen DIC).
- Avoid hypothermia (impairs coagulation).
- Prevent aspiration, maintain oxygenation (hypoxia worsens endothelial damage).

## DIC-Associated Organ Dysfunction

**Acute Kidney Injury:** Microthrombi in renal vasculature, hemoglobinuria (hemolysis). RRT if KDIGO stage 3 (severe AKI).

**Pulmonary:** ARDS from capillary leak, microthrombi. Mechanical ventilation with lung-protective strategy.

**Hepatic:** Ischemic hepatitis (microthrombi), elevated transaminases, hyperbilirubinemia, hepatic encephalopathy. Lactulose, avoid hepatotoxins.

**CNS:** ICH from consumptive coagulopathy + microvascular thrombosis. Imaging mandatory; avoid reversal agents if bleeding (worsens thrombotic risk).

## Chronic DIC

Less common; seen in malignancy (mucin-producing adenocarcinoma, APL, lymphoma), retained dead fetus syndrome.

- Presentation: Mild coagulopathy, low-grade thrombosis, fatigue, bleeding.
- Management: Treat malignancy (often resolves), anticoagulation with warfarin (target INR 2-3).

## Prognosis

**Favorable:** Early recognition, treatable underlying cause (infection, trauma), rapid component replacement, responsive to treatment (improving coagulation profile).

**Unfavorable:** Sepsis etiology (mortality 50%+), extensive bleeding (ICH mortality >70%), multi-organ failure, SOFA ≥3.

> 🎓 **Professor's Note:** DIC scoring (ISTH) useful for diagnosis but does not guide treatment. Treat bleeding with components (FFP, platelets, fibrinogen). Anticoagulation rarely indicated; reserved for thrombotic manifestations (acral necrosis, progressive ARDS).

> 💡 **Memory Trick:** "DIC = Consumption coagulopathy. Platelet ↓, fibrinogen ↓, PT ↑, D-dimer ↑↑. Bleeding + microthrombi paradoxically. Treat underlying cause first; transfuse components if bleeding."

> ⚡ **Exam Alert:** DIC score ≥5 compatible with overt DIC; repeat at 24h. Acute promyelocytic leukemia (APL, M3 AML) causes severe DIC; ATRA (all-trans retinoic acid) dramatically improves DIC resolution. ICH from DIC is indication for reversal agents (FFP/vitamin K if warfarin-induced, fresh blood if massive hemorrhage).

> 🏥 **Clinical Pearl:** In India, obstetric DIC (preeclampsia, amniotic fluid embolism) and sepsis-DIC common. Early recognition (thrombocytopenia trending down, PT prolonging, fibrinogen <100) and aggressive component replacement prevent mortality. Sepsis DIC prognosis poor; focus on source control (antibiotics, drainage) as primary strategy. APL-DIC now curable with ATRA (80%+ cure rate if treated early); emphasize importance of hematology consultation.

{{IMAGE: DIC pathophysiology cascade (tissue factor to microthrombi), ISTH DIC score, component replacement algorithm, acral necrosis (purpura fulminans) appearance}}

**Reference:** Harrison's Principles of Internal Medicine, 21st ed., Chapter 142: "Disorders of Hemostasis, Thrombosis, and Anticoagulation."
`,
    estimatedMinutes: 11,
  },
];





