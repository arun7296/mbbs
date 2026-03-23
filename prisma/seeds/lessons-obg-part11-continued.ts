import type { TopicLessons } from "./content-loader";

export const obgLessonsPartElevenContinued: TopicLessons[] = [
  {
    topicCode: "OG-MOD-05-TOP-05",
    layers: [
      {
        layer: 1,
        slug: "pid-stis-layer-1-foundation",
        title: "PID & STIs - Foundation",
        estimatedMinutes: 20,
        summary: "Pelvic inflammatory disease is a serious infection of upper reproductive tract often from STIs (Chlamydia, Gonorrhea, Mycoplasma). Complications include infertility, ectopic pregnancy, chronic pelvic pain, and tubo-ovarian abscess.",
        contentMd: `# PID & STIs - Foundation

## Sexually Transmitted Infections (STIs)

### Common STI Agents in India
**Bacterial**:
- **Neisseria gonorrhoeae** (gonorrhea) - gram-negative diplococcus
- **Chlamydia trachomatis** (chlamydia) - obligate intracellular
- **Mycoplasma genitalium** - emerging pathogen
- **Ureaplasma** species

**Viral**:
- **Human Papillomavirus (HPV)** - risk factor for cervical cancer
- **Herpes Simplex Virus (HSV)** - causes genital ulceration
- **Human Immunodeficiency Virus (HIV)**

**Parasitic**:
- **Trichomonas vaginalis** - causes trichomoniasis
- **Candida albicans** - vulvovaginal candidiasis (opportunistic)

## Pelvic Inflammatory Disease (PID)

### Definition
Acute or chronic inflammation of upper reproductive tract (endometrium, fallopian tubes, ovaries, parametrium) caused by infection.

### Epidemiology
- **Incidence**: 1-2% of reproductive-age women
- **Peak age**: 15-25 years (but occurs at all reproductive ages)
- **Risk factors**: Multiple sexual partners, unprotected intercourse, douching, IUD use (slightly), history of STI

### Ascending Infection Pathway
1. **Initial infection**: Lower genital tract (cervicitis, urethritis)
2. **Ascending infection**: Bacteria traverse cervix, endometrium
3. **Reaches tubes**: Salpingitis (tube inflammation)
4. **Spreads**: To ovary (oophoritis), surrounding tissues (parametritis)
5. **Advanced**: Tubo-ovarian abscess (pyosalpinx with ovarian involvement)

### Causative Organisms in PID

**Most common**:
- **Chlamydia trachomatis** (40-60% of culture-positive cases)
- **Neisseria gonorrhoeae** (20-30%)
- **Mixed flora** (often polymicrobial)

**Additional organisms**:
- **Mycoplasma genitalium** (emerging, more common than previously thought)
- **Anaerobes**: Bacteroides, Prevotella
- **Gram-positive cocci**: Streptococci

### Classification

**Acute PID**:
- Sudden onset (<3 months)
- Acute pelvic/abdominal pain
- Recent vaginal discharge change

**Chronic PID**:
- Insidious onset (>3 months)
- Low-grade symptoms
- Often sequelae of untreated acute PID

## STI Manifestations in Women

### Chlamydia trachomatis
- **Cervicitis**: Purulent cervical discharge (may be asymptomatic)
- **Urethritis**: Dysuria
- **PID**: 10-40% if untreated
- **Complications**: Tubal damage, infertility, ectopic pregnancy

### Neisseria gonorrhoeae
- **Cervicitis**: Purulent discharge
- **Urethritis**: Dysuria
- **Bartholin's abscess**: Painful swelling
- **PID**: 15-40% if untreated
- **Pharyngitis/proctitis**: If oral/anal exposure
- **Systemic**: Disseminated gonococcal infection (arthritis, dermatitis)

### Mycoplasma genitalium
- **Urogenital infection**: Often asymptomatic
- **PID**: Associated with severe PID
- **Persistent infection**: Responds poorly to some antibiotics
- **Pelvic pain**: Chronic pelvic pain association

### Trichomonas vaginalis
- **Vaginitis**: Frothy yellow discharge, vulvar itching
- **Urethritis**: Dysuria, urinary frequency
- **PID**: Can cause PID (less common than Chlamydia/Gonorrhea)

## Clinical Features of PID

### Symptoms (Acute)
- **Pelvic pain**: Bilateral lower abdominal pain (cardinal symptom)
- **Abnormal vaginal discharge**: Purulent, mucopurulent
- **Fever**: Present in 30-40% of cases
- **Dysuria**: Urinary symptoms
- **Irregular bleeding**: Menstrual irregularities
- **Deep dyspareunia**: Pain with intercourse

### Signs (Examination)
- **Fever**: Temperature often >38.5°C in acute cases
- **Lower abdominal tenderness**: Often bilateral
- **Rebound tenderness/guarding**: Suggests severe disease
- **Cervical motion tenderness** (Chandelier sign): Classic finding
- **Adnexal tenderness**: On bimanual exam
- **Cervical discharge**: Purulent or mucopurulent

### Minimal Diagnostic Criteria (CDC)
**PID diagnosed if**:
- Pelvic pain AND
- One of following: Cervical motion tenderness, Uterine tenderness, Adnexal tenderness
- **No other diagnosis explaining illness**

## Complications of PID

### Short-term
- **Sepsis**: Severe systemic infection
- **Peritonitis**: Peritoneal inflammation
- **Septic shock**: Life-threatening

### Long-term (Tubal Damage)
- **Infertility**: 40% after first episode PID, 80% after third
- **Ectopic pregnancy**: 6-10x increased risk
- **Chronic pelvic pain**: 20% of PID survivors
- **Recurrent PID**: 25-50% recurrence rate

### Microbiological
- **Tubo-ovarian abscess**: Collection of pus in tubes/ovaries
- **Pyosalpinx**: Pus-filled fallopian tube
- **Rupture**: Ruptured abscess → Peritonitis → Surgical emergency`,
        mnemonics: [
          {
            text: "STIs in PID: CGM",
            explanation: "Chlamydia, Gonorrhea, Mycoplasma (most common organisms)"
          },
          {
            text: "PID Diagnosis: PAT",
            explanation: "Pelvic pain, Adnexal tenderness, Tenderness (cervical motion)"
          },
          {
            text: "Complications: FECTR",
            explanation: "Fertility loss (40% first PID), Ectopic (6-10x risk), Chronic pain (20%), Tubo-ovarian abscess, Recurrence (25-50%)"
          }
        ],
        keyPoints: [
          "Chlamydia and Gonorrhea most common STI causes of PID (50-70% of cases)",
          "Mycoplasma genitalium increasingly recognized as PID pathogen",
          "PID diagnosis clinical (pain + tenderness); imaging helps exclude other conditions",
          "Infertility risk 40% after first PID, increases with recurrent episodes",
          "Ascending infection: cervix → endometrium → tubes → ovaries"
        ],
        textbookRefs: [
          { book: "DC Dutta's Textbook of Gynaecology", chapter: "Ch 20", edition: "8th" },
          { book: "Shaw's Textbook of Gynaecology", chapter: "Ch 29", edition: "17th" }
        ]
      },
      {
        layer: 2,
        slug: "pid-stis-layer-2-mechanism",
        title: "PID & STIs - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathophysiology involves microbial virulence factors, ascending infection through cervix, mucosal adherence, inflammatory response, and tubal damage leading to scarring and obstruction.",
        contentMd: `# PID & STIs - Mechanism

## Microbial Virulence Factors

### Chlamydia trachomatis
1. **Adhesion molecules**:
   - Outer membrane protein (OMP) binds to host CD46 receptors
   - Adhesin proteins target epithelial cells

2. **Invasion mechanisms**:
   - Induces host cell endocytosis
   - Obligate intracellular pathogen
   - Resides in inclusion vacuole

3. **Immune evasion**:
   - Delays apoptosis of infected cells
   - Suppresses antigen presentation (reduced MHC)
   - Produces tryptophan synthase (tryptophan depletion → TH1 immunity suppressed)

4. **Persistence**:
   - Can form non-infectious persistent state
   - Associated with chronic inflammation

### Neisseria gonorrhoeae
1. **Pili (fimbriae)**:
   - Variable pili allow antigenic variation
   - Enable attachment to urethral/endocervical epithelium

2. **Opacity proteins (Opa)**:
   - Facilitate adherence and invasion
   - Target CD66 and CD45 receptors

3. **Lipopolysaccharide (LPS)**:
   - Endotoxin triggers inflammatory response
   - Potent complement activator

4. **Intracellular survival**:
   - Survives inside polymorphonuclear leukocytes (PMNs)
   - Resists lysosomal killing

## Ascending Infection Mechanism

### Step 1: Cervical Infection
1. **Initial site**: Endocervix (columnar epithelium, primary site of infection)
2. **Cervicitis**: Inflammation, purulent discharge
3. **Symptoms**: May be asymptomatic (especially Chlamydia)

### Step 2: Breach of Cervical Barrier
1. **Mucosal damage**: Inflammatory response damages epithelium
2. **Loss of ciliary action**: Cilia destruction reduces clearance
3. **Cervical mucus changes**: Altered composition, reduced protective proteins

### Step 3: Endometrial Invasion
1. **Upward migration**: Bacteria ascend into uterine cavity
2. **Endometritis**: Inflammation of endometrium
3. **Increased uterine contractility**: Uterine contractions may aid bacterial spread
4. **Impaired endometrial defense**: Reduced complement, lysozyme

### Step 4: Tubal Infection (Salpingitis)
1. **Fallopian tube entry**: Through tubal ostium
2. **Epithelial damage**:
   - Ciliary loss (tubal cilia normally push menstrual debris downward)
   - Mucosal ulceration
   - Loss of epithelial barrier

3. **Inflammatory response**:
   - Massive leukocyte infiltration
   - Cytokine production (TNF-α, IL-6, IL-8)
   - Edema, mucosal swelling

4. **Pyosalpinx formation**:
   - Pus accumulates in tube lumen
   - Tubal occlusion by exudate/swelling
   - Potential rupture

### Step 5: Ovarian and Surrounding Tissue Involvement
1. **Oophoritis**: Ovarian inflammation, often with tubal involvement
2. **Tubo-ovarian complex**: Inflamed tube + ovary + adhesions
3. **Tubo-ovarian abscess**: Pus collection involving both structures
4. **Parametritis**: Infection of parametrial tissue
5. **Peritonitis**: Spread to peritoneal surface

## Inflammatory Response in PID

### Acute Inflammation
1. **Innate immunity activation**:
   - TLR (Toll-like receptors) recognize bacterial PAMPs
   - Complement cascade activated
   - PMNs recruited to site

2. **Cytokine cascade**:
   - **TNF-α**: Initiates systemic inflammation
   - **IL-1, IL-6, IL-8**: Amplify inflammatory response
   - **Prostaglandins**: Increase vascular permeability

3. **Vascular effects**:
   - Vasodilation → Edema
   - Increased vascular permeability → Exudation
   - Leukocyte extravasation

### Chronic Inflammation and Tubal Damage
1. **Persistent infection**: Intracellular organisms evade immune response
2. **Chronic inflammatory state**: Ongoing TNF-α, IL-6 production
3. **Fibroblast activation**: Collagen deposition → Scarring
4. **Epithelial remodeling**:
   - Loss of ciliated epithelium
   - Replacement with non-ciliated epithelium
   - Stricture formation

5. **Tubal dysfunction**:
   - Loss of ciliary activity → Impaired ovum transport
   - Strictures → Obstruction
   - Adhesions → Kinking, reduced patency

## Infertility Mechanisms in PID

### 1. Tubal Obstruction
- **Complete occlusion**: From strictures, exudative material
- **Partial occlusion**: Reduced gamete transport
- **Location**: Often proximal (near uterine end)
- **Bilateral involvement**: Risk of complete infertility

### 2. Ciliary Loss
- **Normal tubal epithelium**: 30-40% ciliated cells
- **Post-PID**: Cilia reduced/absent
- **Mechanism**: Inflammatory damage during acute infection, never fully regenerates
- **Consequence**: Impaired ovum and sperm transport

### 3. Tubal Strictures
- **Formation**: Fibrosis, scarring, epithelial damage
- **Result**: Narrowed lumen, reduces gamete passage
- **May prevent but allow sperm** → Risk of ectopic pregnancy

### 4. Adhesions
- **Pelvic adhesions**: From inflammation, peritonitis
- **Tubal kinking**: Adhesions cause distortion
- **Reduced tubal motility**: Fibrotic tubes less peristaltic

### 5. Impaired Gamete Transport
- **Sperm**: Reduced passage through scarred/obstructed tubes
- **Ovum**: Impaired movement from ovary to uterus
- **Embryo**: If fertilization occurs, may not reach uterus (→ ectopic pregnancy)

## Ectopic Pregnancy Risk
- **Partial tubal occlusion/strictures**: Sperm can pass but ovum/embryo cannot
- **Location**: Embryo develops in tube (ampullary or isthmic)
- **Risk**: 6-10 fold increased after PID
- **Severity**: Tubal rupture → Life-threatening hemorrhage

## Tubo-Ovarian Abscess Pathophysiology
1. **Inflammatory collection**: Pus accumulation from mixed organisms
2. **Rapid expansion**: Continues to enlarge if untreated
3. **Wall formation**: Surrounding inflamed tissue + fibrosis encapsulates abscess
4. **Risk**: Rupture → Peritonitis, sepsis, shock
5. **Bacterial flora**: Polymicrobial (aerobic + anaerobic)`,
        mnemonics: [
          {
            text: "Ascending Infection: CEOTAP",
            explanation: "Cervicitis, Endometritis, Oophoritis, Tubal (salpingitis), Abscess, Peritonitis"
          },
          {
            text: "Tubal Damage Mechanisms: LOSS",
            explanation: "Loss of cilia, Obstruction (strictures), Strictures, Scars/adhesions"
          }
        ],
        keyPoints: [
          "Chlamydia and Gonorrhea have specific virulence factors enabling infection",
          "Ascending infection proceeds: cervix → endometrium → tubes → ovaries",
          "Chronic inflammation causes irreversible tubal damage (ciliary loss, scarring)",
          "Partial tubal obstruction creates ectopic pregnancy risk (sperm pass but embryo doesn't)",
          "Tubo-ovarian abscess formed from polymicrobial infection with rupture risk"
        ],
        textbookRefs: [
          { book: "DC Dutta's Textbook of Gynaecology", chapter: "Ch 20", edition: "8th" },
          { book: "Shaw's Textbook of Gynaecology", chapter: "Ch 29", edition: "17th" }
        ]
      },
      {
        layer: 3,
        slug: "pid-stis-layer-3-clinical",
        title: "PID & STIs - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical diagnosis, imaging findings, antibiotic management of PID, treatment of STIs, and prevention strategies. Early recognition and appropriate antibiotic therapy prevent tubal damage.",
        contentMd: `# PID & STIs - Clinical

## STI Diagnosis and Treatment

### Chlamydia trachomatis
**Diagnosis**:
- **NAAT** (Nucleic Acid Amplification Test): Gold standard
  - Endocervical swab, urine (first-void)
  - Sensitivity/Specificity: >95%

**Treatment**:
- **First-line**: Azithromycin 1 g PO single dose (or 500 mg daily × 3 days)
- **Alternative**: Doxycycline 100 mg PO BID × 7 days
- **Pregnancy**: Azithromycin (avoid doxycycline)
- **Partner notification**: Essential, treat sexual partners
- **Test of cure**: Not needed if compliant with standard regimen

### Neisseria gonorrhoeae
**Diagnosis**:
- **NAAT**: Gold standard (same as Chlamydia)
- **Gram stain**: Gram-negative intracellular diplococci (PMNs)
- **Culture**: Selective medium (Thayer-Martin)

**Treatment**:
- **First-line**: Ceftriaxone 250 mg IM single dose (or 500 mg if severe) + Azithromycin 1 g PO single dose
- **Alternative**: Ceftriaxone + Doxycycline (if Chlamydia status known)
- **Partner notification**: Essential
- **Test of cure**: NAAT at 3-5 weeks post-treatment (if continued symptoms)

### Mycoplasma genitalium
**Treatment**:
- **First-line**: Doxycycline 100 mg PO BID × 7 days
- **Alternative**: Azithromycin (but resistance emerging)
- **Resistant strains**: May need fluoroquinolones (moxifloxacin)

### Trichomonas vaginalis
**Treatment**:
- **First-line**: Metronidazole 400 mg PO TID × 5 days (or 2 g single dose)
- **Alternative**: Tinidazole 2 g PO single dose
- **Partner treatment**: Essential (contagious)

## Diagnosis of PID

### Clinical Criteria (Empiric Treatment Threshold)
**Minimum criteria for treatment**:
- Pelvic pain AND one of:
  - Cervical motion tenderness
  - Uterine tenderness
  - Adnexal tenderness

**Additional clinical findings supporting diagnosis**:
- Fever (>38.5°C)
- Abnormal vaginal/cervical discharge
- Elevated ESR or CRP

### Investigations

**Microbiology**:
- **Endocervical swab**: NAAT for Chlamydia, Gonorrhea, Mycoplasma
- **Culture**: Not routinely needed, cultures may be negative
- **Blood cultures**: If severe sepsis suspected

**Imaging**:
- **Transvaginal ultrasound**:
  - Free pelvic fluid
  - Thickened/dilated tubes (>6 mm)
  - Tubo-ovarian complex
  - **Tubo-ovarian abscess**: Anechoic collection with septations
  - **Sensitivity**: 60-80% for acute PID

**Laboratory**:
- **ESR/CRP**: Elevated in PID (but non-specific)
- **CBC**: WBC may be elevated
- **Pregnancy test**: Rule out ectopic pregnancy

## Management of PID

### Outpatient Treatment (Uncomplicated, Mild-Moderate PID)
**Empiric antibiotics** (must cover Chlamydia + Gonorrhea + anaerobes):

**Option 1** (CDC recommended):
- **Ceftriaxone** 250-500 mg IM single dose
- **PLUS Doxycycline** 100 mg PO BID × 7 days
- **PLUS Metronidazole** 500 mg PO BID × 7 days (anaerobes)

**Option 2**:
- **Cefoxitin** 2 g IM single dose (covers Gonorrhea + anaerobes)
- **PLUS Doxycycline** 100 mg PO BID × 7 days

**Option 3** (Oral regimen for mildest cases):
- **Cefpodoxime** 400 mg PO BID × 7 days (gonorrhea)
- **PLUS Doxycycline** 100 mg PO BID × 7 days
- **PLUS Metronidazole** 500 mg PO BID × 7 days

**Duration**: 7-10 days typically

### Inpatient Treatment (Severe or Complicated PID)

**Indications for hospitalization**:
- Severe pelvic pain/peritonitis
- Fever >38.9°C
- Sepsis
- Tubo-ovarian abscess
- Immunocompromised
- Failed outpatient therapy

**Empiric IV antibiotics**:
**Option 1**:
- **Cefotetan** 2 g IV Q12H
- **PLUS Doxycycline** 100 mg PO/IV BID

**Option 2**:
- **Cefoxitin** 2 g IV Q6H
- **PLUS Doxycycline** 100 mg PO/IV BID

**Option 3** (Clindamycin-based):
- **Clindamycin** 900 mg IV Q8H
- **PLUS Gentamicin** 2 mg/kg IV loading, then 1.5 mg/kg Q8H

**Duration**: IV antibiotics until clinical improvement (defervescence, decreasing pain), then switch to oral antibiotics to complete 7-10 days total

### Tubo-Ovarian Abscess Management

**Medical management** (if <7 cm, hemodynamically stable):
- **Hospitalization**: IV antibiotics as above
- **Imaging follow-up**: Ultrasound at 48-72 hours to assess response
- **Response markers**: Defervescence, decreasing pain/WBC
- **Duration**: Antibiotics until complete resolution (usually 3-4 weeks)

**Surgical management**:
- **Indications**:
  - Abscess >7 cm (higher rupture risk)
  - Rupture (peritonitis)
  - Failed medical therapy (no improvement 48-72 hours)
  - Hemodynamic instability
- **Procedure**: Drainage (percutaneous or surgical), +/- hysterectomy/oophorectomy

## Prevention

### Primary Prevention
1. **Safe sex practices**: Consistent condom use, limit sexual partners
2. **Screening**: Annual Chlamydia/Gonorrhea screening for sexually active women <25 years
3. **Vaccination**: **HPV vaccine** prevents HPV-related genital disease

### Secondary Prevention (Partner Management)
- **Partner notification**: Essential
- **Partner testing**: All sexual contacts in past 60 days
- **Partner treatment**: Treat presumptively if partner cannot be tested
- **Abstinence**: During treatment (until 7 days after single-dose therapy)

### Tertiary Prevention (Fertility Preservation)
- **Early recognition and treatment**: Reduces tubal damage
- **Avoid IUD insertion**: In women with PID risk factors
- **Fertility counseling**: After PID (increased ectopic risk, infertility)`,
        mnemonics: [
          {
            text: "PID Antibiotics: CDM",
            explanation: "Ceftriaxone, Doxycycline, Metronidazole (3-drug empiric regimen)"
          },
          {
            text: "Tubo-Ovarian Abscess: SMR",
            explanation: "Surgery if >7 cm, Medical if <7 cm, Response in 48-72 hours"
          }
        ],
        keyPoints: [
          "NAAT gold standard for STI diagnosis (sensitivity/specificity >95%)",
          "Empiric 3-drug antibiotic therapy for PID covers Chlamydia + Gonorrhea + anaerobes",
          "Tubo-ovarian abscess <7 cm: medical management; >7 cm or rupture: surgical drainage",
          "Early STI treatment and PID recognition prevent tubal damage",
          "Partner notification and treatment essential to prevent reinfection"
        ],
        textbookRefs: [
          { book: "DC Dutta's Textbook of Gynaecology", chapter: "Ch 20", edition: "8th" },
          { book: "Shaw's Textbook of Gynaecology", chapter: "Ch 29", edition: "17th" }
        ]
      },
      {
        layer: 4,
        slug: "pid-stis-layer-4-exam",
        title: "PID & STIs - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield concepts: STI diagnosis, PID diagnostic criteria, antibiotic regimens, imaging findings, and complications (ectopic pregnancy, infertility, tubo-ovarian abscess).",
        contentMd: `# PID & STIs - Exam Prep

## High-Yield Facts

### 1. Gold Standard Diagnostic Tests
**Chlamydia, Gonorrhea, Mycoplasma**: **NAAT** (Nucleic Acid Amplification Test)
- Sensitivity/Specificity: >95%
- Can use endocervical swab, urine, or rectal

**Trichomonas**: **NAAT** (if available) or **Wet mount microscopy** (sensitivity 50-70%)

### 2. PID Diagnosis Criteria (CDC)
**Minimum**:
- **Pelvic pain** AND one of:
  - Cervical motion tenderness
  - Uterine tenderness
  - Adnexal tenderness
- **No other diagnosis explaining symptoms**

**Supportive findings**: Fever >38.5°C, abnormal vaginal discharge, elevated ESR/CRP

### 3. STI Treatment Regimens

| STI | First-Line Treatment |
|-----|----------------------|
| **Chlamydia** | Azithromycin 1 g PO single dose |
| **Gonorrhea** | Ceftriaxone 250-500 mg IM + Azithromycin 1 g PO |
| **Mycoplasma** | Doxycycline 100 mg BID × 7 days |
| **Trichomonas** | Metronidazole 400 mg TID × 5 days (or 2 g single) |

### 4. PID Antibiotic Regimens
**Outpatient** (uncomplicated):
- **Ceftriaxone** 250 mg IM + **Doxycycline** 100 mg BID × 7 days + **Metronidazole** 500 mg BID × 7 days

**Inpatient** (severe/complicated):
- **Cefotetan** 2 g IV Q12H + **Doxycycline** 100 mg BID (switch to oral after improvement)
- OR **Clindamycin** 900 mg IV Q8H + **Gentamicin** (for anaerobic coverage)

### 5. Most Common STI Causes of PID
| Organism | Frequency |
|----------|-----------|
| **Chlamydia** | 40-60% |
| **Gonorrhea** | 20-30% |
| **Mycoplasma** | Increasing (10-20%) |
| **Mixed flora** | Common |

### 6. Infertility Risk After PID
- **First episode**: 10-15% infertility risk
- **First PID + second PID**: 30-40% cumulative
- **Three or more**: 80% infertility risk

### 7. Ectopic Pregnancy Risk
- **6-10 fold increased** after PID
- **Mechanism**: Partial tubal obstruction (sperm pass, embryo blocked)
- **Location**: Usually ampullary or isthmic tube

### 8. Tubo-Ovarian Abscess Management

| Finding | Management |
|---------|------------|
| **<7 cm, hemodynamically stable** | IV antibiotics, monitor |
| **>7 cm** | Surgical drainage or early drainage |
| **Rupture** | Emergency surgery, ICU |
| **No improvement 48-72 hours** | Drainage (percutaneous or surgical) |

### 9. Imaging Findings in PID
**Transvaginal ultrasound**:
- Thickened tubes (>6 mm)
- Free pelvic fluid
- Tubo-ovarian complex
- Tubo-ovarian abscess (anechoic with septations)
- Sensitivity: 60-80%

### 10. Ascending Infection Pathway
```
Cervix (Cervicitis)
    ↓
Endometrium (Endometritis)
    ↓
Fallopian Tubes (Salpingitis)
    ↓
Ovaries (Oophoritis)
    ↓
Peritoneum (Peritonitis) → Tubo-Ovarian Abscess
```

### 11. Chandelier Sign
- **Severe cervical motion tenderness** (patient wants to hit ceiling)
- Classic finding in acute PID
- Indicates significant cervical/tubal inflammation

### 12. Partner Notification Timeline
- **All sexual contacts in past 60 days**: Should be notified, tested, treated
- **Treatment before test results**: If partner cannot be tested quickly
- **Abstinence**: 7 days after single-dose therapy to prevent reinfection

### 13. Exam Scenario

**Scenario 1**: 24-year-old with pelvic pain, cervical motion tenderness, fever 38.7°C. Diagnosis?
- **Answer**: PID (meets criteria: pelvic pain + cervical motion tenderness)
- **Treatment**: Empiric 3-drug regimen (outpatient if hemodynamically stable)

**Scenario 2**: After PID treatment, patient returns with severe pelvic pain, fever. Ultrasound shows 8 cm anechoic collection. Management?
- **Answer**: Tubo-ovarian abscess (>7 cm)
- **Management**: Surgical drainage (percutaneous or open)`,
        mnemonics: [
          {
            text: "STI Organisms: CGM",
            explanation: "Chlamydia (40-60%), Gonorrhea (20-30%), Mycoplasma (emerging)"
          },
          {
            text: "PID Criteria: PCAT",
            explanation: "Pelvic pain, Cervical motion tenderness/uterine/adnexal, Abnormal discharge, Temperature high"
          },
          {
            text: "Antibiotic Regimen: CDM",
            explanation: "Ceftriaxone, Doxycycline, Metronidazole (cover gram-neg, gram-pos, anaerobes)"
          }
        ],
        keyPoints: [
          "NAAT is gold standard for Chlamydia, Gonorrhea, Mycoplasma diagnosis",
          "PID diagnosed with pelvic pain + cervical/uterine/adnexal tenderness",
          "Empiric 3-drug antibiotics essential (covers Chlamydia, Gonorrhea, anaerobes)",
          "Infertility risk 10-15% after first PID; cumulative with recurrent episodes",
          "Tubo-ovarian abscess >7 cm needs surgical/percutaneous drainage"
        ],
        textbookRefs: [
          { book: "DC Dutta's Textbook of Gynaecology", chapter: "Ch 20", edition: "8th" },
          { book: "Shaw's Textbook of Gynaecology", chapter: "Ch 29", edition: "17th" }
        ]
      },
      {
        layer: 5,
        slug: "pid-stis-layer-5-active-recall",
        title: "PID & STIs - Active Recall",
        estimatedMinutes: 10,
        contentMd: `# Active Recall - PID & STIs

**Q1**: What are the diagnostic criteria for PID according to CDC guidelines? Why is empiric treatment recommended?
> **A**: **PID diagnosis criteria**: Pelvic pain PLUS one of: (1) Cervical motion tenderness, (2) Uterine tenderness, (3) Adnexal tenderness. No other diagnosis explaining symptoms. **Rationale for empiric treatment**: (1) Microbiological confirmation difficult (cultures often negative), (2) Pelvic imaging not always diagnostic, (3) Delay in diagnosis/treatment increases tubal damage risk. (4) **Early treatment** (even before confirming organism) prevents scarring. Empiric regimen covers Chlamydia + Gonorrhea + anaerobes.

**Q2**: Describe the three-drug empiric antibiotic regimen for outpatient PID treatment.
> **A**: **Ceftriaxone 250-500 mg IM single dose** (covers Gonorrhea) + **Doxycycline 100 mg PO BID × 7 days** (covers Chlamydia) + **Metronidazole 500 mg PO BID × 7 days** (covers anaerobes, including Bacteroides). This combination covers polymicrobial flora of PID. Total treatment duration 7-10 days.

**Q3**: A 26-year-old presents with pelvic pain, cervical motion tenderness, fever 38.6°C. Endocervical swab pending. She is hemodynamically stable. Treatment approach?
> **A**: **Diagnosis**: PID (meets clinical criteria). **Setting**: Outpatient management (hemodynamically stable, no signs of severe peritonitis). **Immediate treatment**: Start empiric 3-drug regimen immediately (Ceftriaxone IM + Doxycycline + Metronidazole PO), do NOT wait for culture/NAAT results. **Pelvic ultrasound** to assess for abscess. **Follow-up** in 48-72 hours to assess response.

**Q4**: Explain the relationship between PID and ectopic pregnancy. How does tubal pathology lead to ectopic pregnancy?
> **A**: **Increased risk**: Ectopic pregnancy 6-10 fold more common after PID. **Mechanism**: PID causes tubal scarring, strictures, ciliary loss. **Partial tubal obstruction** is key: Strictures allow **sperm passage** (small enough) but **block embryo/ovum passage** (larger). Ovum fertilized proximally, cannot traverse scarred tube, lodges in tube → Ectopic pregnancy. **Risk**: Tubal rupture with hemorrhage if untreated.

**Q5**: Compare Chlamydia and Gonorrhea infections. What is the rationale for dual therapy?
> **A**: **Chlamydia**: Often asymptomatic (50%), intracellular, incubation 1-3 weeks, commonly causes PID (40-60%), best treated with azithromycin or doxycycline. **Gonorrhea**: More symptomatic (purulent discharge), extracellular, incubation 2-7 days, causes PID (20-30%), best treated with cephalosporin. **Coinfection common**: 20-30% of women with one STI have both. **Rationale for dual therapy**: (1) Covers both organisms, (2) Prevents resistance emergence, (3) Simplifies treatment, (4) Cost-effective.

**Q6**: What is a tubo-ovarian abscess? How is it differentiated from simple pyosalpinx on imaging?
> **A**: **Tubo-ovarian abscess**: Pus collection involving BOTH fallopian tube AND ovary (complex inflammatory mass with both structures involved). **Pyosalpinx**: Pus confined to fallopian tube lumen (tube swollen but ovary not involved). **Imaging differentiation (ultrasound)**: **Abscess**: Larger collection (often >5 cm), anechoic/complex (heterogeneous), may have septations. **Pyosalpinx**: Tubular structure, dilated (>6 mm), often with "cogwheel" appearance. **Management difference**: Simple pyosalpinx often responds to antibiotics; abscess >7 cm may need drainage.

**Q7**: A 28-year-old is treated for PID with outpatient antibiotics. After 4 days, she still has fever and worsening pain. Ultrasound shows 6 cm fluid collection. Management?
> **A**: **Failed outpatient therapy** (no improvement 48-72 hours). **Likely diagnosis**: Tubo-ovarian abscess or complicated PID. **Management**: (1) **Hospitalization** for IV antibiotics, (2) **Switch to IV regimen**: Cefotetan 2 g IV Q12H + Doxycycline 100 mg IV BID. (3) **Imaging follow-up**: Repeat ultrasound in 48 hours. (4) **Abscess size 6 cm**: At borderline for drainage consideration. If no improvement in 48 hours → Consider percutaneous drainage. (5) Duration: IV antibiotics until defervescence, then switch to oral to complete 10-14 days total.

**Q8**: A woman is diagnosed with Chlamydia trachomatis on NAAT. She is asymptomatic. Treatment?
> **A**: **Treatment required**: Azithromycin 1 g PO single dose (or doxycycline 100 mg BID × 7 days). Asymptomatic Chlamydia still increases PID risk if untreated. **Partner notification**: Treat all sexual partners in past 60 days (even asymptomatic). **Abstinence**: 7 days after single-dose therapy. **Retest after 3 months**: Recommended to detect reinfection.

**Q9**: What are the indications for hospitalization and IV antibiotics in PID?
> **A**: **Severe PID indications for hospitalization**: (1) **Severe pelvic pain/peritonitis** (guarding, rebound tenderness), (2) **High fever** (>38.9°C), (3) **Systemic symptoms**: Nausea, vomiting, sepsis signs, (4) **Tubo-ovarian abscess**, (5) **Immunocompromised** state, (6) **Inability to tolerate** oral medications, (7) **Failed outpatient therapy** (no improvement 48-72 hours), (8) **Pregnancy** (if PID suspected).

**Q10**: Outline the mechanism of ascending infection from cervicitis to PID to peritonitis.
> **A**: **(1) Cervicitis**: Initial infection at endocervix. Bacteria cause inflammation, purulent discharge. **(2) Endometritis**: Bacteria ascend through cervix into uterine cavity. Inflammatory response damages endometrium. **(3) Salpingitis**: Infection reaches fallopian tubes. Tubal epithelium damaged (cilia lost), inflammatory exudate accumulates. **(4) Oophoritis**: Ovarian inflammation accompanies tubal disease. **(5) Tubo-ovarian complex**: Adhesions form between inflamed structures. **(6) Pyosalpinx/Abscess**: Pus accumulation in tubes/ovaries. **(7) Peritonitis**: If rupture occurs, pus spills into peritoneal cavity → Severe peritonitis, sepsis, shock. **Prevention**: Early antibiotic treatment (before reaching advanced stages) prevents progression.`,
        mnemonics: [],
        keyPoints: [
          "Empiric 3-drug PID treatment covers Chlamydia, Gonorrhea, anaerobes",
          "Ectopic pregnancy risk 6-10 fold after PID from partial tubal obstruction",
          "Tubo-ovarian abscess >7 cm needs percutaneous or surgical drainage",
          "Partner notification and treatment essential to prevent reinfection",
          "Failed outpatient therapy warrants hospitalization, IV antibiotics, imaging reassessment"
        ],
        textbookRefs: [
          { book: "DC Dutta's Textbook of Gynaecology", chapter: "Ch 20", edition: "8th" },
          { book: "Shaw's Textbook of Gynaecology", chapter: "Ch 29", edition: "17th" }
        ]
      }
    ]
  }
];
`,
