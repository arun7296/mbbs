import type { TopicLessons } from "./content-loader";

export const pediatricsPart5Lessons: TopicLessons[] = [
  {
    topicCode: "PE-MOD-05-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "rheumatic-fever-layer-1-foundation",
        title: "Rheumatic Fever in Children - Foundation",
        estimatedMinutes: 20,
        summary: "Epidemiology, etiology, and clinical features of acute rheumatic fever and rheumatic heart disease in children.",
        contentMd: `# Rheumatic Fever in Children - Foundation

## Definition
- Acute rheumatic fever (ARF): Inflammatory disorder following Group A beta-hemolytic Streptococcal (GAS) pharyngitis
- Autoimmune reaction affecting heart, joints, brain, skin, subcutaneous tissue
- Rheumatic heart disease (RHD): Chronic valvular damage from recurrent ARF episodes

## Epidemiology
- Major cause of acquired heart disease in children in developing countries
- Peak age: 5-15 years (school-age children)
- Rare before age 3 and after age 25
- India: Very high prevalence (RHD prevalence 1-5.4 per 1000 school children)
- Associated with poverty, overcrowding, poor sanitation
- Declining in developed countries; still major problem in India, Africa, Pacific Islands

## Etiology
- Causative agent: Group A Streptococcus (Streptococcus pyogenes)
- Only pharyngeal infection triggers RF (NOT skin infection/impetigo)
- Only certain M-protein serotypes are rheumatogenic (M1, M3, M5, M6, M18)
- Latent period: 2-4 weeks between pharyngitis and onset of RF
- Genetic susceptibility: HLA-DR7 and DR4 associations

## Jones Criteria (Revised 2015) for Diagnosis
### Major Criteria
- **Carditis** (50-70%): Most important; pancarditis affecting endo/myo/pericardium
- **Migratory polyarthritis** (75%): Large joints; fleeting, migratory; most common manifestation
- **Sydenham chorea** (15%): Involuntary movements, emotional lability; late manifestation
- **Erythema marginatum** (<5%): Evanescent, non-pruritic, pink rings on trunk/limbs
- **Subcutaneous nodules** (<5%): Firm, painless, over bony prominences and tendons

### Minor Criteria
- Fever, arthralgia, elevated ESR/CRP, prolonged PR interval

### Evidence of Preceding Streptococcal Infection
- Elevated ASO titer (>200 IU/mL) or Anti-DNase B
- Positive throat culture or rapid antigen test
- Recent scarlet fever

### Diagnosis
- 2 Major + evidence of strep infection OR
- 1 Major + 2 Minor + evidence of strep infection
- Exception: Chorea alone or indolent carditis can diagnose RF without other criteria`,
        mnemonics: [
          { text: "JONES: Joints (polyarthritis), O (carditis - looks like heart), Nodules (subcutaneous), Erythema marginatum, Sydenham chorea", explanation: "Five major criteria of Jones for rheumatic fever diagnosis" },
          { text: "RF affects: Heart, Joints, Brain, Skin", explanation: "Four organ systems affected by rheumatic fever" },
        ],
        keyPoints: [
          "ARF follows GAS pharyngitis (NOT skin infection); latent period 2-4 weeks",
          "Jones criteria: 2 major OR 1 major + 2 minor + evidence of strep infection",
          "Migratory polyarthritis: most common manifestation (75%); carditis: most important (determines prognosis)",
          "India: very high RHD prevalence; major cause of acquired heart disease in children",
          "Peak age 5-15 years; rare before 3 and after 25",
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Chapter 15: Cardiovascular System", edition: "9th" },
          { book: "Nelson Textbook of Pediatrics", chapter: "Chapter 210: Rheumatic Fever", edition: "21st" },
        ],
      },
      {
        layer: 2,
        slug: "rheumatic-fever-layer-2-mechanism",
        title: "Rheumatic Fever in Children - Mechanism",
        estimatedMinutes: 22,
        summary: "Molecular mimicry, autoimmune pathogenesis, cardiac valve pathology, and Aschoff body formation.",
        contentMd: `# Rheumatic Fever in Children - Mechanism

## Autoimmune Pathogenesis: Molecular Mimicry
- GAS M-protein shares epitopes with human cardiac myosin, laminin, vimentin
- Cross-reactive antibodies and T-cells attack host tissues
- Antibodies against streptococcal antigens bind cardiac valve tissue
- T-cell mediated inflammation causes tissue damage
- Genetic susceptibility determines immune response intensity

## Cardiac Pathology
### Pancarditis (All Three Layers)
- **Endocarditis**: Valve inflammation; verrucae (small vegetations) along valve closure line
- **Myocarditis**: Aschoff bodies (pathognomonic granulomatous lesions)
- **Pericarditis**: Fibrinous pericarditis; may cause effusion

### Aschoff Body (Pathognomonic)
- Perivascular granuloma in myocardium
- Contains: Anitschkow cells (owl-eye/caterpillar nuclei), Aschoff giant cells, lymphocytes, fibrinoid necrosis
- Anitschkow cells: Pathognomonic; enlarged macrophages with distinctive nuclear morphology

### Valve Involvement
- Mitral valve most commonly affected (75-80%)
- Aortic valve second most common
- Mitral + Aortic combination most common multi-valve involvement
- Acute: Mitral regurgitation (valvulitis with edematous cusps)
- Chronic: Mitral stenosis (fibrosis, calcification, commissural fusion over years)
- "Fish mouth" or "button hole" stenosis in chronic RHD

## Joint Pathology
- Transient synovitis with fibrinous exudate
- NO permanent joint damage (unlike cardiac involvement)
- Migratory: Affects one large joint, resolves, then affects another
- Responds dramatically to aspirin (diagnostic clue)

## Sydenham Chorea Mechanism
- Antibodies cross-react with basal ganglia neurons (caudate and subthalamic nuclei)
- Disrupts dopaminergic signaling
- Late manifestation (may appear months after pharyngitis)
- Self-limiting (resolves in weeks to months); may recur
- Can be the ONLY manifestation (sufficient for RF diagnosis)

## Skin Manifestations
- **Erythema marginatum**: Autoimmune vasculitis; evanescent, non-fixed, ring-shaped
- **Subcutaneous nodules**: Granulomatous nodules over bony prominences; associated with severe carditis`,
        mnemonics: [
          { text: "Aschoff body = Anitschkow cells (owl-eye) + Giant cells + Fibrinoid necrosis = Pathognomonic for RF", explanation: "Histological hallmark of rheumatic myocarditis" },
          { text: "Mitral valve: Most affected in RF; MR acutely, MS chronically", explanation: "Mitral regurgitation in acute RF, mitral stenosis develops with chronic RHD" },
        ],
        keyPoints: [
          "Molecular mimicry: GAS M-protein cross-reacts with cardiac myosin and valve tissue",
          "Aschoff body: pathognomonic granuloma with Anitschkow cells (owl-eye nuclei)",
          "Mitral valve most commonly affected; acute MR → chronic MS over years",
          "Joint involvement is transient with NO permanent damage (unlike heart)",
          "Sydenham chorea: basal ganglia antibodies; can be sole manifestation of RF",
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Chapter 15", edition: "9th" },
          { book: "Nelson Textbook of Pediatrics", chapter: "Chapter 210", edition: "21st" },
        ],
      },
      {
        layer: 3,
        slug: "rheumatic-fever-layer-3-clinical",
        title: "Rheumatic Fever in Children - Clinical",
        estimatedMinutes: 25,
        summary: "Clinical assessment, investigations, treatment of acute RF, and secondary prophylaxis guidelines.",
        contentMd: `# Rheumatic Fever in Children - Clinical Management

## Clinical Assessment
### Carditis (Determines Prognosis)
- New murmur: Apical pansystolic (MR) or early diastolic at left sternal edge (AR)
- Carey Coombs murmur: Short mid-diastolic murmur from mitral valvulitis
- Pericardial rub, muffled heart sounds (pericardial effusion)
- Heart failure in severe cases
- Echocardiography: Subclinical carditis (mitral/aortic regurgitation without auscultatory findings)

### Arthritis
- Large joints: Knees, ankles, elbows, wrists (NOT small joints)
- Migratory: Moves from joint to joint over days
- Very painful, red, swollen
- Dramatic response to aspirin/NSAIDs (within 24-48 hours)
- No permanent joint damage

### Chorea
- Involuntary purposeless movements (face, hands)
- "Milkmaid grip": Fluctuating grip strength
- "Spooning sign": Pronation and flexion of wrist when arms extended
- Emotional lability, deteriorating handwriting
- Usually self-limiting (weeks to months)

## Investigations
- **ASO titer**: >200 IU/mL (elevated in 80% of RF cases)
- **Anti-DNase B**: More specific; useful if ASO negative
- **Throat culture/Rapid Strep Test**: May be negative by time RF develops
- **ESR, CRP**: Elevated (acute phase reactants); monitor response to treatment
- **ECG**: Prolonged PR interval (first-degree heart block; minor criterion)
- **Echocardiography**: Essential; detects subclinical carditis, valve involvement
- **Chest X-ray**: Cardiomegaly if significant carditis

## Treatment
### Acute Phase
- **Eradicate Streptococcal infection**: Benzathine Penicillin G single IM dose (1.2 MU >27 kg; 0.6 MU <27 kg) OR Oral Penicillin V for 10 days
- **Anti-inflammatory**: Aspirin (80-100 mg/kg/day in 4 doses) for arthritis/mild carditis
- **Severe carditis (heart failure)**: Prednisolone (2 mg/kg/day) for 2-3 weeks, then taper; add aspirin overlap
- **Chorea**: Carbamazepine or valproic acid; haloperidol if severe; bed rest

### Bed Rest
- Mild carditis: 2-4 weeks
- Severe carditis/heart failure: Until failure controlled, then gradual mobilization
- No carditis: 1-2 weeks

## Secondary Prophylaxis (MOST IMPORTANT)
- **Purpose**: Prevent recurrent GAS pharyngitis and further RF episodes
- **Drug of choice**: Benzathine Penicillin G (BPG) 1.2 MU IM every 3-4 weeks (every 3 weeks in high-risk areas like India)
- **Duration** (Indian Heart Association/WHO guidelines):
  - RF without carditis: 5 years or until age 18 (whichever is longer)
  - RF with carditis, no RHD: 10 years or until age 25
  - RF with RHD: Lifelong (or at least until age 40)
- **Penicillin allergy**: Erythromycin

## Indian Context
- RHD remains leading cause of acquired heart disease in Indian children
- National programme for prevention and control of RHD
- BPG injections: Compliance is major challenge; community health worker involvement
- Echocardiographic screening studies show high subclinical RHD rates`,
        mnemonics: [
          { text: "BPG 3-weekly = Best Prophylaxis Given every 3 weeks in India", explanation: "Benzathine Penicillin G every 3 weeks (not 4) in high-prevalence areas like India" },
          { text: "Aspirin for Arthritis; Prednisolone for severe carditis/heart failure", explanation: "Anti-inflammatory choice depends on severity of cardiac involvement" },
        ],
        keyPoints: [
          "Echocardiography essential: detects subclinical carditis (valve regurgitation)",
          "Eradicate strep: single dose BPG IM; then start secondary prophylaxis",
          "Aspirin for arthritis/mild carditis; Prednisolone for severe carditis with heart failure",
          "Secondary prophylaxis: BPG every 3 weeks in India; lifelong if RHD present",
          "Carey Coombs murmur: short mid-diastolic murmur of acute mitral valvulitis",
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Chapter 15", edition: "9th" },
          { book: "Nelson Textbook of Pediatrics", chapter: "Chapter 210", edition: "21st" },
        ],
      },
      {
        layer: 4,
        slug: "rheumatic-fever-layer-4-exam",
        title: "Rheumatic Fever in Children - Exam Prep",
        estimatedMinutes: 18,
        summary: "High-yield exam facts on rheumatic fever and RHD for NEXT pattern questions.",
        contentMd: `# Rheumatic Fever in Children - Exam Prep

## Must-Know Facts
- Only GAS pharyngitis triggers RF (NOT skin infection)
- Jones criteria: 2 major OR 1 major + 2 minor + strep evidence
- Most common manifestation: Migratory polyarthritis (75%)
- Most important manifestation: Carditis (determines prognosis)
- Pathognomonic lesion: Aschoff body with Anitschkow cells
- Most common valve: Mitral (acute MR → chronic MS)
- Secondary prophylaxis: BPG every 3 weeks (India); lifelong if RHD

## Common Exam Traps
- "Migratory arthritis in a child + elevated ASO" = Rheumatic fever
- "Chorea alone in a child" = Sufficient to diagnose RF (no other criteria needed)
- "Subclinical carditis on echo but no murmur" = Still counts as carditis (2015 criteria)
- "Arthritis responds to aspirin within 48 hours" = Characteristic of RF arthritis
- "Strep pharyngitis → impetigo" = Impetigo does NOT cause RF
- "Prolonged PR interval on ECG" = Minor criterion (not major)

## Major vs Minor Criteria
| Major | Minor |
|-------|-------|
| Carditis (clinical or subclinical) | Fever |
| Migratory polyarthritis | Arthralgia (if arthritis not present) |
| Sydenham chorea | Elevated ESR/CRP |
| Erythema marginatum | Prolonged PR interval |
| Subcutaneous nodules | |

## Prophylaxis Duration
| Category | Duration |
|----------|----------|
| RF without carditis | 5 years or until age 18 |
| RF with carditis, no RHD | 10 years or until age 25 |
| RF with RHD | Lifelong or until age 40 |

## High-Yield Questions
- Pathognomonic histological finding = Aschoff body
- Carey Coombs murmur = Mid-diastolic murmur of acute mitral valvulitis
- Drug for secondary prophylaxis = Benzathine Penicillin G
- Valve most commonly affected = Mitral
- Chorea treatment = Carbamazepine/Valproate; Haloperidol if severe
- Milkmaid grip + emotional lability = Sydenham chorea`,
        mnemonics: [
          { text: "Major criteria: JONES = Joints, cOrditis, Nodules, Erythema marginatum, Sydenham chorea", explanation: "Five major Jones criteria for rheumatic fever" },
          { text: "Prophylaxis: 5-10-Life = No carditis (5yr), Carditis no RHD (10yr), RHD (Life)", explanation: "Duration of secondary prophylaxis based on cardiac involvement" },
        ],
        keyPoints: [
          "Jones criteria (2015): 2 major or 1 major + 2 minor + strep evidence",
          "Arthritis: most common; Carditis: most important (prognosis); Chorea: alone sufficient for diagnosis",
          "Aschoff body (Anitschkow cells): pathognomonic; mitral valve most affected",
          "BPG every 3 weeks for secondary prophylaxis in India; lifelong if RHD",
          "Subclinical carditis on echo now accepted as major criterion (2015 revision)",
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Chapter 15", edition: "9th" },
        ],
      },
      {
        layer: 5,
        slug: "rheumatic-fever-layer-5-active-recall",
        title: "Rheumatic Fever in Children - Active Recall",
        estimatedMinutes: 15,
        summary: "Flashcard Q&A for spaced repetition on rheumatic fever and RHD.",
        contentMd: `# Active Recall - Rheumatic Fever in Children

**Q1:** What causes rheumatic fever?
**A1:** Autoimmune reaction following Group A Streptococcal (GAS) pharyngitis. Molecular mimicry: M-protein epitopes cross-react with cardiac myosin and valve tissue. Only pharyngeal infection (NOT skin).

**Q2:** What are the Jones major criteria?
**A2:** Carditis, migratory polyarthritis, Sydenham chorea, erythema marginatum, subcutaneous nodules. Need 2 major OR 1 major + 2 minor + evidence of preceding strep infection.

**Q3:** Which is the most common vs most important manifestation?
**A3:** Most common: Migratory polyarthritis (75%). Most important: Carditis (50-70%; determines long-term prognosis as it causes permanent valve damage).

**Q4:** What is the pathognomonic histological finding?
**A4:** Aschoff body: Perivascular granuloma in myocardium containing Anitschkow cells (owl-eye/caterpillar nuclei), Aschoff giant cells, and fibrinoid necrosis.

**Q5:** Which valve is most commonly affected?
**A5:** Mitral valve (75-80%). Acute: Mitral regurgitation. Chronic: Mitral stenosis (from fibrosis, calcification, commissural fusion over years). "Fish mouth" stenosis in chronic RHD.

**Q6:** What is Carey Coombs murmur?
**A6:** Short mid-diastolic murmur heard at the apex during acute rheumatic carditis. Caused by mitral valvulitis with edematous cusps. Disappears as acute inflammation resolves.

**Q7:** What is Sydenham chorea?
**A7:** Involuntary purposeless movements from antibodies cross-reacting with basal ganglia. Features: milkmaid grip, spooning sign, emotional lability, deteriorating handwriting. Self-limiting. Can be sole manifestation of RF.

**Q8:** How is acute RF treated?
**A8:** Eradicate strep (BPG single dose IM). Arthritis/mild carditis: Aspirin (80-100 mg/kg/day). Severe carditis with heart failure: Prednisolone (2 mg/kg/day). Chorea: Carbamazepine/Valproate.

**Q9:** What is secondary prophylaxis and why is it important?
**A9:** BPG 1.2 MU IM every 3 weeks (India) to prevent recurrent GAS pharyngitis. Each RF recurrence increases risk of further valve damage. Prevention of recurrence is more important than treating the acute episode.

**Q10:** How long should secondary prophylaxis continue?
**A10:** RF without carditis: 5 years or until age 18. RF with carditis, no RHD: 10 years or until age 25. RF with RHD: Lifelong (or until age 40).

**Q11:** Why doesn't streptococcal skin infection cause RF?
**A11:** Skin strains (impetigo) have different M-protein serotypes that are not rheumatogenic. Only pharyngeal strains with specific rheumatogenic M-proteins (M1, M3, M5, M6, M18) trigger the autoimmune response.

**Q12:** What is the role of echocardiography in RF?
**A12:** Essential for detecting subclinical carditis (valve regurgitation without audible murmur). 2015 Jones criteria revision accepts echocardiographic evidence of carditis as a major criterion, even without clinical findings.`,
        mnemonics: [
          { text: "RF: Licks the joints, bites the heart", explanation: "Arthritis is transient (no permanent damage); carditis causes permanent valve damage" },
          { text: "5-10-Life: No carditis=5yr, Carditis=10yr, RHD=Life prophylaxis", explanation: "Duration of BPG secondary prophylaxis based on cardiac involvement" },
        ],
        keyPoints: [
          "ARF: autoimmune post-GAS pharyngitis; molecular mimicry; M-protein cross-reacts with cardiac tissue",
          "Jones criteria: 2 major or 1 major + 2 minor + strep evidence; chorea alone sufficient",
          "Aschoff body pathognomonic; mitral valve most affected; MR acutely, MS chronically",
          "BPG every 3 weeks in India; secondary prophylaxis lifelong if RHD",
          "Arthritis transient (no damage); carditis permanent (valve damage); determines prognosis",
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Chapter 15", edition: "9th" },
          { book: "Nelson Textbook of Pediatrics", chapter: "Chapter 210", edition: "21st" },
        ],
      },
    ],
  },
];
