import type { TopicLessons } from "./content-loader";

export const medicinePart5Lessons: TopicLessons[] = [
  {
    topicCode: "IM-MOD-01-TOP-06",
    layers: [
      {
        layer: 1,
        slug: "infective-endocarditis-layer-1-foundation",
        title: "Infective Endocarditis - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of infective endocarditis pathophysiology, classification, risk factors, microbiology, and epidemiology in Indian context.",
        contentMd: `# Infective Endocarditis - Foundation

## Definition
Microbial infection of cardiac endocardium (heart valves or mural endocardium) causing inflammation and vegetations.

## Classification

### Acute Endocarditis
- Fulminant course (days to weeks)
- Highly virulent organisms (S. aureus, group B streptococci)
- Often affects normal valves
- Rapid valve destruction

### Subacute Endocarditis
- Indolent course (weeks to months)
- Viridans group streptococci most common
- Usually affects abnormal valves
- Progressive course if untreated

## Risk Factors & Predisposing Conditions

**Cardiac Risk Factors:**
- **Rheumatic heart disease** (most common in India)
- Prosthetic valves (mechanical > bioprosthetic)
- Degenerative valve disease
- Congenital heart disease (PDA, VSD, coarctation)
- Marfan syndrome (aortic root dilatation)
- Mitral valve prolapse (with regurgitation)

**Non-Cardiac Risk Factors:**
- IV drug abuse (high incidence of acute endocarditis)
- Dental procedures
- Genitourinary tract procedures
- Gastrointestinal procedures
- Poor hygiene, immunosuppression

## Microbiology

### Most Common Causative Organisms

**Native Valve Endocarditis (NVE):**
- **Viridans group streptococci** (50-60%) - most common
- **S. aureus** (20-30%) - associated with IV drug use, acute presentation
- **Enterococci** (5-10%)
- **Haemophilus, Aggregatibacter, Cardiobacterium, Eikenella, Kingella (HACEK)** (1-2%)
- **Streptococcus bovis/gallolyticus** (5%) - associated with GI malignancy

**Prosthetic Valve Endocarditis (PVE):**
- **Early (<1 year post-valve)**: S. aureus, coagulase-negative staph, gram-negatives
- **Late (>1 year post-valve)**: Similar to NVE (streptococci, S. aureus)

### India-Specific Microbiology:
- Increased prevalence of tuberculosis (mycobacterial endocarditis possible)
- Fungal endocarditis more common in certain regions
- Higher prevalence of rheumatic heart disease → streptococcal endocarditis

## Pathophysiology

### Initiation
1. Bacteremia from source (dental, IV drug use, GU tract, skin)
2. Bacterial seeding on cardiac endocardium (abnormal valve preferred)
3. Bacteria adhere to valve surface via adhesins

### Vegetations Formation
1. Platelet and fibrin deposition around bacteria
2. Formation of bacterial vegetation (microthrombi)
3. Local inflammatory response
4. Progressive vegetation growth

### Complications
1. **Valve destruction**: Perforation, regurgitation, stenosis
2. **Emboli**: Septic emboli to lungs, brain, spleen (from vegetations)
3. **Mycotic aneurysms**: Septic arteritis from septic emboli
4. **Conduction defects**: From abscess formation
5. **Acute heart failure**: From acute valve insufficiency

## Epidemiology - India

- Incidence: 2-4 per 100,000 population (vs 3-10 in developed countries)
- Most common predisposing condition: rheumatic heart disease (60-70%)
- Less common in pure mitral stenosis (narrow orifice protective)
- Aortic valve most commonly involved (45%), followed by mitral (30%), tricuspid (5%)
- In IV drug users: tricuspid valve commonly affected (right-sided endocarditis)`,
        mnemonics: [
          { text: "ABCDE of Endocarditis: Acute/indolent, Bacteremia, Cardiac seeding, Vegetation, Emboli", explanation: "Pathophysiology of IE" },
          { text: "Common Organisms: VSAH-E", explanation: "Viridans streptococci, S. aureus, Haemophilus, Enterococci" },
          { text: "Risk Valves: Aortic > Mitral > Tricuspid > Pulmonary", explanation: "In native valve; tricuspid common in IVDU" }
        ],
        keyPoints: [
          "Infective endocarditis: microbial infection of cardiac endocardium with vegetation formation",
          "Acute endocarditis: fulminant, normal valves, virulent organisms (S. aureus)",
          "Subacute endocarditis: indolent, abnormal valves, viridans streptococci",
          "Rheumatic heart disease most common predisposing condition in India",
          "Viridans streptococci most common cause (50-60%), S. aureus in IV drug users"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "110: Infective Endocarditis", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "3: Cardiovascular System", edition: "11th" }
        ]
      },
      {
        layer: 2,
        slug: "infective-endocarditis-layer-2-mechanism",
        title: "Infective Endocarditis - Mechanism",
        estimatedMinutes: 30,
        summary: "Detailed pathophysiology of bacterial adhesion, vegetation formation, immune responses, and mechanisms of complications.",
        contentMd: `# Infective Endocarditis - Mechanism

## Bacterial Adhesion

### Factors Enhancing Adhesion
1. **Bacteremia intensity and duration** - higher bacterial counts, prolonged bacteremia increase seeding
2. **Bacterial virulence factors** (adhesins) - determine ability to adhere
3. **Valve damage/turbulence** - abnormal hemodynamics increase bacterial trapping
4. **Endothelial damage** - from abnormal flow (stenosis, regurgitation)
5. **Fibrin and platelets** - deposit on damaged valve; bacteria adhere to fibrin-platelet matrix

### Preference for Abnormal Valves
- Vegetations form on line of valve closure (high-pressure gradient side)
- Abnormal valves have:
  - Altered endothelial permeability
  - Fibrin-platelet microthrombi (from altered hemodynamics)
  - Lower local blood flow (platelets and fibrin accumulate)

## Vegetation Formation & Growth

### Early Vegetation (Hours to Days)
- Fibrin and platelets deposit on bacterial colony
- Bacteria multiplied rapidly within vegetation
- Protected from antibiotics (impaired penetration) and immune system

### Established Vegetation (Days to Weeks)
- Dense bacterial flora (10⁹ bacteria per mg of vegetation)
- Layers of fibrin, platelets, immune cells
- Inflammatory infiltrate (PMN, macrophages)
- Progressive valve destruction

## Immune Response

### Antibody Formation
- Circulating immune complexes from bacterial antigens
- Antibodies against bacterial epitopes
- Antibodies against altered host antigens (molecular mimicry)

### Complement Activation
- Both classical and alternative pathways
- C3a, C5a generation → neutrophil recruitment
- Immune complex deposition → vasculitis

### Immunological Manifestations
1. **Vasculitis**: From immune complex deposition in small vessels
2. **Glomerulonephritis**: IgG-IgM immune complex deposition (10-30% of IE)
3. **Arthralgias**: From immune complex disease

## Mechanisms of Complications

### Valvular Destruction
1. **Direct bacterial invasion** → tissue necrosis
2. **Proteolytic enzymes** from neutrophils → collagen breakdown
3. **Septic thrombi** → valve perforation
4. **Vegetation erosion** → progressive regurgitation

### Septic Emboli
- **Source**: Fragments of vegetation break off
- **Size**: 1-5 mm (largest size that passes circulation)
- **Destination**: Lungs (right-sided IE), brain (left-sided IE), spleen, kidneys
- **Consequence**: Septic infarction, abscess formation, microaneurysm

### Mycotic Aneurysm Formation
1. Septic embolus lodges in arterial wall
2. Septic arteritis develops
3. Weakening of arterial wall → aneurysm formation
4. High rupture risk

### Conduction Abnormalities
- Abscess formation near conduction pathways (AV node, Bundle of His)
- Leads to conduction blocks, arrhythmias
- Progressive involvement → complete heart block

### Acute Heart Failure
- Acute aortic regurgitation (from vegetation or perforation)
- Acute mitral regurgitation (from papillary muscle infection)
- Sudden hemodynamic decompensation`,
        mnemonics: [
          { text: "Vegetation Formation: Bacteremia → Adhesion → Fibrin-Platelet → Growth → Destruction", explanation: "Step-by-step pathophysiology" },
          { text: "Septic Emboli: Break from vegetation, lodge distally, cause septic infarction/abscess", explanation: "Leads to clinical manifestations" },
          { text: "Immune Complications: IC-GN-V", explanation: "Immune Complexes → GN, Vasculitis" },
          { text: "Valve Destruction: Bacteria + Enzymes + Thrombosis", explanation: "Multiple mechanisms" }
        ],
        keyPoints: [
          "Bacterial adhesion enhanced by abnormal hemodynamics, endothelial damage, fibrin-platelet matrix",
          "Vegetation forms primarily on abnormal valve at line of closure",
          "Within vegetation, bacteria protected from antibiotics and immune system (10⁹ bacteria per mg)",
          "Septic emboli break from vegetation and lodge distally (lungs in right-sided IE, brain in left-sided)",
          "Immune complex deposition causes glomerulonephritis, vasculitis, and arthralgias",
          "Mycotic aneurysm forms from septic arteritis in arterial wall from septic embolus"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "110: Infective Endocarditis", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "3: IE Pathophysiology", edition: "11th" }
        ]
      },
      {
        layer: 3,
        slug: "infective-endocarditis-layer-3-clinical",
        title: "Infective Endocarditis - Clinical",
        estimatedMinutes: 35,
        summary: "Clinical diagnosis of infective endocarditis, investigations, Duke criteria, blood cultures, echocardiography, and antimicrobial therapy.",
        contentMd: `# Infective Endocarditis - Clinical Diagnosis & Management

## Clinical Presentation

### Acute Endocarditis (S. aureus)
- Fever (>39°C), chills, rigors
- Rapid clinical deterioration
- Septic shock possible
- Embolic phenomena early
- New murmur may be absent initially

### Subacute Endocarditis (Viridans streptococci)
- Low-grade fever (37-39°C)
- Insidious onset (weeks to months)
- Fatigue, malaise, weight loss
- Arthralgias, myalgias
- New or changing heart murmur

### General Features
- **Fever** (90% of patients) - most sensitive feature
- **Heart murmur** (60-90%) - new or changing
- **Embolic phenomena** (30%)

## Vascular Phenomena
1. **Splinter hemorrhages** - linear streaks under nails (also seen in trauma, psoriasis)
2. **Osler nodes** - painful nodules on fingertips/toes (immune complex vasculitis)
3. **Janeway lesions** - painless erythematous macules on palms/soles (septic emboli)
4. **Petechiae** - small red macules (emboli, vasculitis)
5. **Retinal hemorrhages with white centers** (cotton-wool spots)

## Investigations

### Blood Cultures (Most Important)
- **Timing**: Obtain before antibiotics (critical)
- **Number**: At least 2-3 sets (ideally 3) from different sites
- **Volume**: 10 mL per culture bottle
- **Timing of collection**: Not correlated with fever; obtain anytime before antibiotics
- **Positive in**: 90% of native valve, 50% of prosthetic valve, 80% of post-operative IE

### Echocardiography

**Transthoracic Echocardiography (TTE)**
- Sensitivity: 50-60%
- Not sensitive but good for assessing hemodynamic consequences
- Shows vegetations, valve destruction, regurgitation
- Useful for negative predictive value

**Transesophageal Echocardiography (TEE)**
- Sensitivity: 90-95%
- Better for prosthetic valves, small vegetations
- Detects paravalvular abscesses
- Preferred imaging modality

### Blood Tests
- **CBC**: Anemia (chronic disease), leukocytosis
- **ESR/CRP**: Elevated (nonspecific)
- **Rheumatoid factor**: Positive in 50% (false positive, immune complex)
- **Complement (C3, C4)**: Low in 10-20% (immune complex consumption)
- **Blood urea, creatinine**: Assess renal function (nephritis possible)

### Duke Criteria for Diagnosis

**Major Criteria** (1 point each):
1. **Blood culture positive**:
   - Viridans streptococci, S. bovis, or HACEK from 2 separate cultures
   - S. aureus from 1 or more cultures (community-acquired)
   - Repeating positive cultures from blood
2. **Echocardiographic evidence**:
   - Vegetation, abscess, new prosthetic dehiscence, new regurgitation
   - TEE more sensitive than TTE

**Minor Criteria** (0.5 point each):
1. Predisposing heart condition or IV drug use
2. Fever ≥38°C
3. Vascular phenomena (emboli, splinter hemorrhages, petechiae, Janeway)
4. Immunological phenomena (Osler nodes, Roth spots, GN, RF)
5. Microbiological evidence not meeting major criteria

**Diagnosis**:
- Definite: 2 major, or 1 major + 3 minor, or all 5 minor
- Possible: 1 major + 1 minor, or 3 minor

## Management

### Antibiotic Therapy (Before Culture Results)

**Native Valve Endocarditis** (Empiric, before culture):
- **IV ceftriaxone** 2 g every 12 hours
- **Plus IV gentamicin** 3 mg/kg once daily
- **Plus IV ampicillin** 2 g every 4 hours (if streptococci suspected)

**Prosthetic Valve Endocarditis** (Empiric):
- **IV vancomycin** 15-20 mg/kg every 8-12 hours (S. aureus resistance risk)
- **Plus IV gentamicin** 3 mg/kg once daily

### Organism-Specific Therapy

**Viridans Streptococci** (Native valve):
- **High-dose IV penicillin** 18-24 million units daily OR
- **IV ceftriaxone** 2 g every 12 hours
- Duration: 4 weeks total
- Add gentamicin first 2 weeks if severe

**S. aureus** (IV drug users, acute presentation):
- **IV nafcillin/oxacillin** 6-12 g daily
- OR **IV cefazolin** 4 g every 6 hours
- OR **IV vancomycin** (if β-lactam allergy) 15-20 mg/kg every 8-12 hours
- Duration: 4-6 weeks

**Enterococci**:
- **IV ampicillin/penicillin** high-dose
- **Plus gentamicin** synergistic
- Duration: 4-6 weeks (longer than streptococci)

**HACEK Organisms**:
- **IV ceftriaxone** 2 g every 12 hours OR
- **IV fluoroquinolone**
- Duration: 4 weeks

### Surgical Indications (Urgent)
1. **Acute heart failure** from valve destruction
2. **Large vegetation** (>10 mm) with embolization risk
3. **Prosthetic valve dysfunction** (paravalvular leak, dehiscence)
4. **Recurrent embolization** despite antibiotic therapy
5. **Uncontrolled infection** (relapsed after therapy, non-streptococcal, fungal)
6. **Abscess formation** (especially aortic root abscess)

### Monitoring
- Repeat blood cultures after 48-72 hours (should be sterile)
- Repeat echocardiography at 6-8 weeks or if clinical deterioration
- Serum creatinine, urinalysis (monitor for nephritis)
- Antibiotic levels (gentamicin trough <1 μg/mL, peak 8-12 μg/mL)`,
        mnemonics: [
          { text: "FEVER in IE: Fever, Emboli, Valve murmur, Emboli, elevated Reactants", explanation: "Main clinical features" },
          { text: "Vascular Phenomena: SPORE", explanation: "Splinter hemorrhages, Petechiae, Osler nodes, Roth spots, Emboli (septic)" },
          { text: "Duke Criteria: 2 Major OR 1 Major + 3 Minor OR 5 Minor", explanation: "Diagnostic criteria for IE" },
          { text: "Blood Culture Critical: Before antibiotics, 3 sets, aseptic technique", explanation: "Most important investigation" }
        ],
        keyPoints: [
          "Blood cultures before antibiotics: 2-3 sets from different sites, most important diagnostic tool",
          "TEE >90% sensitive; TTE 50-60% sensitive for detecting vegetations",
          "Duke criteria: 2 major (BC + echo), or 1 major + 3 minor criteria = definite IE",
          "Empiric antibiotics before culture: ceftriaxone + gentamicin for native valve endocarditis",
          "Organism-specific therapy: viridans strep (4 weeks), S. aureus (4-6 weeks), enterococci (4-6 weeks)",
          "Surgical indications: acute heart failure, large vegetation, prosthetic dysfunction, uncontrolled infection, abscess"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "110: Infective Endocarditis", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "3: IE Diagnosis & Management", edition: "11th" },
          { book: "2015 ESC Guidelines for Infective Endocarditis", chapter: "Diagnosis and Treatment", edition: "2015" }
        ]
      },
      {
        layer: 4,
        slug: "infective-endocarditis-layer-4-exam",
        title: "Infective Endocarditis - Exam Prep",
        estimatedMinutes: 25,
        summary: "Comprehensive exam-focused review of infective endocarditis, NEET-PG pattern questions, high-yield facts, and clinical pearls.",
        contentMd: `# Infective Endocarditis - Exam Preparation

## Differential Diagnosis of Fever + Heart Murmur

1. **Infective endocarditis** - positive blood cultures, vegetation on echo
2. **Acute rheumatic fever** - preceded by strep infection, transient murmur, doesn't destroy valve
3. **Acute myocarditis** - viral prodrome, diffuse ST changes, elevated troponin
4. **Septic embolism** - fever, septic phenomena, history of bacteremia
5. **Valve rupture** - trauma, connective tissue disorder, acute pulmonary edema

## High-Yield Facts

### Risk Factors (Remember "ABCDE"):
- **A**: Abnormal valves (RHD, degenerative, prosthetic)
- **B**: Bacteremia (dental, IV drug use, GU procedures)
- **C**: Congenital heart disease
- **D**: Drug use (IV)
- **E**: Endothelial damage

### Most Common Organisms (Remember "VSH"):
- **V**: Viridans streptococci (50-60%) - most common
- **S**: S. aureus (20-30%) - associated with IVDU, acute IE
- **H**: HACEK, Haemophilus (1-2%)

### Duke Criteria Simplified:
- **Major Criteria**: Positive BC (correct organism) + Echo vegetation
- **Minor Criteria**: Fever, vascular phenomena, immunological phenomena, host factors
- **Diagnosis**: 2 Major OR (1 Major + 3 Minor) OR (5 Minor)

### Blood Culture Protocol:
- **Critical**: Obtain BEFORE antibiotics
- **Minimum**: 2-3 sets from different sites, different times
- **Volume**: 10 mL per bottle
- **Result timing**: 5-7 days for streptococci, may need extended incubation for fastidious organisms

### Echocardiographic Findings:
- **Vegetation**: Highly specific but low sensitivity on TTE (50-60%)
- **TEE**: Preferred modality (90-95% sensitivity)
- **Paravalvular abscess**: Indicates surgical emergency
- **New regurgitation**: Indicates ongoing valve destruction

### Vascular Phenomena (Remember "J-O-S-P"):
- **J**: Janeway lesions (painless, septic emboli)
- **O**: Osler nodes (painful, immune complex)
- **S**: Splinter hemorrhages (under nails)
- **P**: Petechiae (small red macules)

### Empiric Antibiotic Choice:
- **Native valve**: Ceftriaxone + gentamicin (covers streptococci + S. aureus)
- **Prosthetic valve**: Vancomycin + gentamicin (covers resistant organisms)
- **IVDU**: Higher risk S. aureus → consider vancomycin initially

### Duration of Antibiotic Therapy:
- **Viridans streptococci**: 4 weeks
- **S. aureus**: 4-6 weeks (longer for complex IE)
- **Enterococci**: 4-6 weeks
- **HACEK**: 4 weeks

### Surgical Indications (Remember "ACE"):
- **A**: Acute heart failure
- **C**: Complications (abscess, paravalvular leak, large vegetation)
- **E**: Embolic phenomena (recurrent despite antibiotics)

## Common Exam Questions

**Q: 35-year-old IV drug user with fever, new systolic murmur, positive blood cultures (S. aureus). Management?**
A: Start IV vancomycin (β-lactamase resistance risk) + gentamicin. Get TEE (high sensitivity). Consider surgical referral if large vegetation (>10 mm) or abscess.

**Q: Aortic regurgitation murmur after dental procedure. Blood cultures negative. Diagnosis?**
A: Likely acute rheumatic fever or acute aortic dissection (not IE). Check for Todd-Fauci criteria (previous GAS, arthritis, polyarthritis, etc.). Rheumatic fever doesn't usually destroy valve acutely.

**Q: Patient with IE presenting with focal neurological deficit. What imaging indicated?**
A: MRI brain or CT brain to rule out septic embolism or mycotic aneurysm. Septic emboli can lodge in brain vessels → stroke or hemorrhage.

**Q: When is surgical intervention absolutely necessary in IE?**
A: Acute heart failure (prosthetic valve failure, large vegetation), septic shock, aortic root abscess, recurrent embolization despite antibiotics.`,
        mnemonics: [
          { text: "ABCDE Risk Factors", explanation: "Abnormal valves, Bacteremia, Congenital HD, Drug abuse, Endothelial damage" },
          { text: "VSH Organisms", explanation: "Viridans strept (60%), S. aureus (30%), Haemophilus/HACEK (1-2%)" },
          { text: "JOPS Vascular Phenomena", explanation: "Janeway (painless emboli), Osler (painful IC), Splinter, Petechiae" },
          { text: "Duke: 2 Major OR 1M+3m OR 5m", explanation: "2 major criteria = definite IE" },
          { text: "Blood Culture: BEFORE antibiotics, 3 sets, 10 mL each", explanation: "Critical for diagnosis" },
          { text: "Echo: TTE 50-60%, TEE 90-95%", explanation: "TEE preferred, especially prosthetic" },
          { text: "ACE Surgical Indications", explanation: "Acute HF, Complications (abscess), Embolization recurrent" },
          { text: "Antibiotic Durations: 4-6 weeks (depending on organism)", explanation: "Viridans 4w, S. aureus 4-6w, enterococci 4-6w" },
          { text: "Empiric: Cef+Gent (native), Vanco+Gent (prosthetic)", explanation: "Start before culture results" },
          { text: "New Murmur = New valve destruction until proven otherwise", explanation: "Indicates ongoing valve involvement" }
        ],
        keyPoints: [
          "IE: microbial infection of cardiac endocardium causing fever, murmur, and embolic phenomena",
          "Viridans streptococci most common (50-60%), S. aureus in IV drug users (30%)",
          "Blood cultures before antibiotics: 2-3 sets, most important diagnostic tool",
          "Duke criteria: 2 major (BC + echo), or 1 major + 3 minor criteria = definite IE",
          "Echocardiography: TTE 50-60% sensitive, TEE 90-95% sensitive (preferred for prosthetic valves)",
          "Empiric antibiotics: ceftriaxone + gentamicin for native valve, vancomycin + gentamicin for prosthetic",
          "Surgical indications: acute heart failure, uncontrolled infection, large vegetation, recurrent embolization",
          "Rheumatic heart disease most common predisposing factor in India",
          "Complications: valve destruction, septic emboli, mycotic aneurysm, heart failure"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "110: Infective Endocarditis", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "3: IE Diagnosis", edition: "11th" }
        ]
      },
      {
        layer: 5,
        slug: "infective-endocarditis-layer-5-active-recall",
        title: "Infective Endocarditis - Active Recall",
        estimatedMinutes: 20,
        summary: "Flashcard-based active recall for rapid learning and retention of critical infective endocarditis concepts.",
        contentMd: `# Infective Endocarditis - Active Recall Flashcards

**Q1: What is infective endocarditis and what are the two main classifications?**
A: Microbial infection of cardiac endocardium causing vegetation. Acute (fulminant, normal valves, virulent organisms like S. aureus) vs Subacute (indolent, abnormal valves, viridans streptococci).

**Q2: What is the most common predisposing condition for infective endocarditis in India?**
A: Rheumatic heart disease (60-70% of cases in India), unlike developed countries where degenerative valve disease is more common.

**Q3: What are the most common causative organisms in native valve endocarditis?**
A: Viridans group streptococci (50-60%, most common), S. aureus (20-30%), Enterococci (5-10%), HACEK (1-2%).

**Q4: How does bacterial adhesion and vegetation formation occur in IE?**
A: Bacteremia deposits bacteria on cardiac endocardium → bacteria adhere via adhesins → fibrin-platelet matrix forms around bacteria → vegetation grows with embedded bacteria (10⁹ bacteria per mg).

**Q5: Why are abnormal valves preferentially affected in IE?**
A: Abnormal hemodynamics create areas of low flow where fibrin-platelet microthrombi accumulate, trapping bacteria and protecting them from antibiotics and immune system.

**Q6: What is the most important diagnostic investigation for infective endocarditis and what is critical about its timing?**
A: Blood cultures - must be obtained BEFORE starting antibiotics. Obtain 2-3 sets from different sites, 10 mL per bottle.

**Q7: What is the sensitivity and specificity of transthoracic vs transesophageal echocardiography in IE?**
A: TTE: 50-60% sensitive. TEE: 90-95% sensitive. TEE preferred, especially for prosthetic valves and detecting paravalvular abscesses.

**Q8: What are the Duke criteria for diagnosis of infective endocarditis?**
A: Definite IE: 2 major criteria OR (1 major + 3 minor) OR (5 minor). Major: positive blood culture (correct organism) + echocardiographic evidence of vegetation or abscess.

**Q9: What are the vascular phenomena seen in IE and what do they represent?**
A: Janeway lesions (painless, septic emboli), Osler nodes (painful, immune complex vasculitis), splinter hemorrhages, petechiae, Roth spots. Result from septic emboli and immune complex deposition.

**Q10: What is immunoglobulin abnormality found in IE and why?**
A: Rheumatoid factor positive in 50% (false positive). Due to immune complex formation and B cell stimulation from chronic bacteremia.

**Q11: What are the septic emboli in IE and what is their consequence?**
A: Fragments of vegetation (1-5 mm) that break off and lodge distally → septic infarction, microabscess, or mycotic aneurysm. Most common in left-sided IE (brain, spleen); lungs in right-sided.

**Q12: What is mycotic aneurysm and how does it form in IE?**
A: Septic embolus lodges in arterial wall → septic arteritis → weakening of arterial wall → aneurysm formation. High rupture risk, requiring vascular surgery.

**Q13: What is the empiric antibiotic regimen for native valve endocarditis before blood culture results?**
A: IV ceftriaxone 2 g every 12 hours + IV gentamicin 3 mg/kg once daily + IV ampicillin 2 g every 4 hours (if streptococci suspected).

**Q14: What is the organism-specific antibiotic therapy and duration for viridans streptococci?**
A: High-dose IV penicillin or IV ceftriaxone for 4 weeks (add gentamicin first 2 weeks if severe IE).

**Q15: What is the organism-specific therapy for S. aureus endocarditis?**
A: IV nafcillin/oxacillin 6-12 g daily OR IV cefazolin 4 g every 6 hours OR IV vancomycin if β-lactam allergy. Duration: 4-6 weeks (longer for complex IE).

**Q16: When should surgical intervention be considered in IE?**
A: Acute heart failure from valve destruction, large vegetation (>10 mm) with recurrent embolization, prosthetic valve dysfunction, paravalvular abscess, uncontrolled infection.

**Q17: What is the mechanism of glomerulonephritis in IE?**
A: Immune complex deposition in glomeruli from persistent antigenemia and antibody formation → IgG-IgM complexes → complement activation → glomerular inflammation.

**Q18: What organism is associated with endocarditis following colon cancer?**
A: Streptococcus bovis/gallolyticus (5% of native valve IE). Screen for GI malignancy in patients with S. bovis endocarditis.

**Q19: Why is right-sided endocarditis (tricuspid valve) more common in IV drug users?**
A: Direct bacterial inoculation into pulmonary circulation from infected drugs → tricuspid vegetation. Lower embolic risk to vital organs (emboli go to lungs, not brain/spleen).

**Q20: What is the difference between early and late prosthetic valve endocarditis (PVE)?**
A: Early PVE (<1 year post-valve): S. aureus, coagulase-negative staph, gram-negatives (acquired during surgery). Late PVE (>1 year): similar to native valve IE (viridans strep, S. aureus).`,
        mnemonics: [
          { text: "IE Classification: Acute = Normal valve, Subacute = Abnormal valve", explanation: "Acute: S. aureus; Subacute: viridans strept" },
          { text: "ABCDE Risk Factors", explanation: "Abnormal valves, Bacteremia, Congenital HD, Drug abuse, Endothelial damage" },
          { text: "VSH Organisms: 60-30-1", explanation: "Viridans strept 60%, S. aureus 30%, HACEK 1-2%" },
          { text: "Duke Diagnosis: 2M or 1M+3m or 5m", explanation: "Major criteria (BC + echo) or combinations of major + minor" },
          { text: "JOPS Vascular: Janeway, Osler, Splinter, Petechiae", explanation: "Clinical stigmata of IE" },
          { text: "Blood Culture CRITICAL: Before antibiotics, 3 sets, aseptic", explanation: "90% sensitivity if done correctly" },
          { text: "Echo: TTE 50-60%, TEE 90-95%", explanation: "TTE screens; TEE confirms" },
          { text: "Empiric Antibiotics: Cef+Gent (native), Vanco+Gent (prosthetic)", explanation: "Before organism identification" },
          { text: "Antibiotic Duration: 4-6 weeks (depending on organism, 4w viridans, 4-6w S. aureus)", explanation: "Longer than other infections" },
          { text: "ACE Surgical Indications", explanation: "Acute HF, Complications, Embolization recurrent" }
        ],
        keyPoints: [
          "IE: microbial infection of cardiac endocardium causing fever, new/changing murmur, embolic phenomena",
          "Viridans streptococci most common (50-60%), S. aureus in IVDU (30%), HACEK (1-2%)",
          "Bacteria protected within vegetations (10⁹ CFU per mg), explaining need for prolonged antibiotics",
          "Blood cultures before antibiotics: most important diagnostic investigation (90% sensitivity)",
          "Duke criteria: 2 major (positive BC + vegetation on echo) = definite IE",
          "Echo: TTE 50-60% sensitive, TEE 90-95% sensitive (preferred); detects vegetations, abscesses, regurgitation",
          "Empiric antibiotics: ceftriaxone + gentamicin for native valve; vancomycin + gentamicin for prosthetic",
          "Antibiotic duration: 4 weeks for viridans streptococci, 4-6 weeks for S. aureus and enterococci",
          "Surgical indications: acute heart failure, uncontrolled infection, large vegetation, recurrent embolization",
          "Complications: valve destruction, septic emboli (brain, spleen, kidneys), mycotic aneurysm, conduction defects"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "110: Infective Endocarditis", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "3: Cardiovascular System", edition: "11th" }
        ]
      }
    ]
  }
];
