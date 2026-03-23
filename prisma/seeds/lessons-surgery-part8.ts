import type { TopicLessons } from "./content-loader";

export const surgeryPart8Lessons: TopicLessons[] = [
  {
    topicCode: "SU-MOD-06-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "gallstones-layer-1-foundation",
        title: "Gallstones & Cholecystitis - Foundation",
        estimatedMinutes: 22,
        summary: "Types of gallstones, risk factors, pathogenesis, and clinical spectrum of gallstone disease.",
        contentMd: `# Gallstones & Cholecystitis - Foundation

## Types of Gallstones
### Cholesterol Stones (80% in Western; mixed in India)
- Cholesterol supersaturation in bile
- Yellow-green, faceted if multiple, float in water
- Risk factors: Obesity, female sex, OCP, rapid weight loss, fibrates

### Pigment Stones
- **Black pigment stones**: Calcium bilirubinate; associated with hemolytic anemias (sickle cell, thalassemia, spherocytosis), cirrhosis
- **Brown pigment stones**: Infection-related; found in bile ducts; associated with biliary stasis and bacterial infection (E. coli)
- Common in India due to high prevalence of hemolytic conditions

### Mixed Stones (Most Common Overall)
- Combination of cholesterol + calcium salts + bilirubin
- Most common type found at surgery

## Risk Factors: The 5 Fs (and beyond)
- **Fat** (obesity)
- **Female** (2-3x more common)
- **Fertile** (multiparity, pregnancy)
- **Forty** (age >40)
- **Fair** (Western populations; but common in North India too)
- Additional: Family history, fibrates, rapid weight loss, TPN, Crohn disease (ileal), diabetes

## Clinical Spectrum of Gallstone Disease
### Asymptomatic (70-80%)
- Incidental finding; only 1-2% per year become symptomatic
- Prophylactic cholecystectomy NOT recommended (except porcelain gallbladder, large stones >3 cm)

### Biliary Colic
- Intermittent RUQ/epigastric pain, radiating to right shoulder/scapula
- Precipitated by fatty meals; lasts 30 min to 6 hours
- No fever, no raised WBC (distinguishes from cholecystitis)

### Acute Cholecystitis
- Persistent RUQ pain (>6 hours), fever, elevated WBC
- Murphy sign positive (inspiratory arrest on RUQ palpation)
- Usually due to cystic duct obstruction by stone

### Complications
- Choledocholithiasis (CBD stones): Jaundice, cholangitis, pancreatitis
- Cholangitis (Charcot triad): Fever + jaundice + RUQ pain
- Gallstone pancreatitis: Stone impacted at ampulla of Vater
- Gallstone ileus: Stone erodes into duodenum; impacts at ileocecal valve
- Mirizzi syndrome: Stone in Hartmann pouch/cystic duct compresses common hepatic duct
- Porcelain gallbladder: Calcified wall; associated with carcinoma (prophylactic cholecystectomy)`,
        mnemonics: [
          { text: "5 Fs: Fat, Female, Fertile, Forty, Fair", explanation: "Classic risk factors for cholesterol gallstones" },
          { text: "Charcot Triad: Fever + Jaundice + RUQ Pain = Cholangitis", explanation: "Add hypotension + confusion = Reynolds pentad (suppurative cholangitis)" },
        ],
        keyPoints: [
          "Mixed stones most common overall; pigment stones common in India (hemolytic conditions)",
          "70-80% gallstones are asymptomatic; only 1-2% per year become symptomatic",
          "Murphy sign: inspiratory arrest on RUQ palpation; positive in acute cholecystitis",
          "Charcot triad (fever + jaundice + RUQ pain) = cholangitis; add shock + confusion = Reynolds pentad",
          "Mirizzi syndrome: extrinsic compression of common hepatic duct by stone in cystic duct/Hartmann pouch",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 20: Gallbladder and Bile Ducts", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 67: The Gallbladder and Bile Ducts", edition: "28th" },
        ],
      },
      {
        layer: 2,
        slug: "gallstones-layer-2-mechanism",
        title: "Gallstones & Cholecystitis - Mechanism",
        estimatedMinutes: 25,
        summary: "Pathogenesis of gallstone formation, inflammatory cascade in cholecystitis, and complications mechanisms.",
        contentMd: `# Gallstones & Cholecystitis - Mechanism

## Gallstone Formation
### Cholesterol Stone Formation (Admirand-Small Triangle)
- Three factors must coexist: Cholesterol supersaturation + nucleation + gallbladder dysmotility
- **Supersaturation**: Excess cholesterol relative to bile salts and phospholipids
- **Nucleation**: Mucin glycoproteins act as nucleating agents; accelerate crystal formation
- **Dysmotility**: Gallbladder stasis (pregnancy, TPN, rapid weight loss) allows crystal aggregation

### Pigment Stone Formation
- **Black stones**: Unconjugated bilirubin polymerizes with calcium in gallbladder
- Caused by: Chronic hemolysis, cirrhosis, ileal disease (disrupted enterohepatic circulation)
- **Brown stones**: Bacterial beta-glucuronidase deconjugates bilirubin in bile ducts
- Calcium bilirubinate precipitates; forms in bile ducts (not gallbladder)

## Pathophysiology of Acute Cholecystitis
### Sequence of Events
1. Stone impacts in cystic duct (90% of cases)
2. Gallbladder distension from accumulated mucus and bile
3. Mucosal ischemia from increased intraluminal pressure
4. Phospholipase A converts lecithin to lysolecithin (mucosal irritant)
5. Prostaglandin release triggers inflammatory cascade
6. Secondary bacterial infection (E. coli, Klebsiella, Enterococcus) in 50%

### Acalculous Cholecystitis (5-10%)
- No gallstones; gallbladder ischemia and bile stasis
- ICU patients, post-major surgery, TPN, sepsis, burns
- Higher morbidity/mortality than calculous cholecystitis
- Diagnosis: USG showing gallbladder wall thickening, pericholecystic fluid, no stones

## Complications Mechanisms
### Empyema of Gallbladder
- Pus collection in gallbladder from secondary bacterial infection
- High fever, toxic patient, palpable tender mass

### Gangrenous Cholecystitis
- Ischemic necrosis of gallbladder wall
- Risk of perforation (localized → abscess; free → peritonitis)
- More common in elderly, diabetics

### Cholangitis
- Bacterial infection of bile duct due to obstruction (stone, stricture)
- Charcot triad (70%): Fever with rigors + jaundice + RUQ pain
- Reynolds pentad: Charcot triad + hypotension + confusion (suppurative cholangitis)
- Organisms: E. coli (most common), Klebsiella, Enterococcus

### Gallstone Pancreatitis
- Stone migrates and impacts at ampulla of Vater
- Blocks pancreatic duct drainage
- Trypsinogen activation → autodigestion of pancreas
- Ranges from mild edematous to severe necrotizing pancreatitis`,
        mnemonics: [
          { text: "Admirand-Small: Supersaturation + Nucleation + Stasis = Stone", explanation: "Three prerequisites for cholesterol gallstone formation" },
          { text: "Reynolds Pentad: Charcot Triad + Shock + Confusion", explanation: "Suppurative cholangitis = fever/jaundice/RUQ pain + hypotension + altered mental status" },
        ],
        keyPoints: [
          "Cholesterol stones: supersaturation + nucleation + gallbladder stasis",
          "Acute cholecystitis: stone impacts cystic duct → distension → ischemia → inflammation",
          "Acalculous cholecystitis: ICU patients, ischemia-based, higher mortality",
          "Cholangitis organisms: E. coli most common; Charcot triad in 70%",
          "Gallstone pancreatitis: stone at ampulla blocks pancreatic drainage → autodigestion",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 20", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 67", edition: "28th" },
        ],
      },
      {
        layer: 3,
        slug: "gallstones-layer-3-clinical",
        title: "Gallstones & Cholecystitis - Clinical",
        estimatedMinutes: 25,
        summary: "Diagnostic workup, Tokyo guidelines, surgical management, and ERCP indications.",
        contentMd: `# Gallstones & Cholecystitis - Clinical Management

## Investigations
### Ultrasound Abdomen (First-line, Gold Standard for Gallstones)
- Sensitivity >95% for gallbladder stones
- Findings: Echogenic foci with posterior acoustic shadow, gallbladder wall thickening (>3 mm), pericholecystic fluid
- Murphy sign on USG (sonographic Murphy) highly specific for acute cholecystitis
- Dilated CBD (>6 mm) suggests choledocholithiasis

### Blood Tests
- CBC: Leukocytosis in cholecystitis/cholangitis
- LFTs: Raised ALP and GGT (cholestasis pattern); raised bilirubin (CBD stone)
- Amylase/lipase: If pancreatitis suspected
- Blood cultures: If cholangitis suspected

### MRCP (Magnetic Resonance Cholangiopancreatography)
- Non-invasive; best for visualizing CBD stones
- Sensitivity 90-95% for choledocholithiasis
- No radiation, no contrast injection into ducts

### ERCP (Endoscopic Retrograde Cholangiopancreatography)
- Both diagnostic AND therapeutic
- Sphincterotomy + stone extraction from CBD
- Stenting for malignant biliary obstruction

## Management
### Biliary Colic
- Analgesia: NSAIDs (diclofenac) first-line; opioids if severe
- Elective laparoscopic cholecystectomy (definitive)

### Acute Cholecystitis
- **Tokyo Guidelines** severity grading:
  - Grade I (Mild): No organ dysfunction; early laparoscopic cholecystectomy
  - Grade II (Moderate): Elevated WBC >18000, palpable mass, duration >72h
  - Grade III (Severe): Organ dysfunction; may need percutaneous drainage first

- **Early laparoscopic cholecystectomy** (within 72 hours): Current standard of care
- Better outcomes than delayed surgery; shorter hospital stay
- If >72 hours from onset: Consider interval cholecystectomy (6-8 weeks)

### Choledocholithiasis (CBD Stones)
- ERCP + sphincterotomy + stone extraction followed by laparoscopic cholecystectomy
- Alternative: Laparoscopic CBD exploration during cholecystectomy
- If unfit for surgery: ERCP alone with sphincterotomy

### Cholangitis
- Emergency: IV antibiotics + fluid resuscitation
- Biliary drainage within 24 hours: ERCP (first choice) or percutaneous transhepatic drainage
- Cholecystectomy after recovery

### Gallstone Pancreatitis
- Supportive care (IV fluids, analgesia, NPO)
- ERCP within 24 hours if cholangitis present or severe pancreatitis
- Cholecystectomy during same admission (to prevent recurrence)

## Laparoscopic Cholecystectomy
### Critical View of Safety (Strasberg)
- Must clearly identify: Cystic duct, cystic artery, and gallbladder base
- Calot triangle dissected clear of fat and fibrous tissue
- Prevents bile duct injury (most feared complication; 0.3-0.5%)

### Bile Duct Injury
- Most common during laparoscopic cholecystectomy (0.3-0.5%)
- Classified by Strasberg classification (A-E)
- Prevention: Critical view of safety, intraoperative cholangiography
- If recognized intraoperatively: Immediate repair by hepatobiliary surgeon`,
        mnemonics: [
          { text: "Critical View of Safety: 2 structures + 1 base", explanation: "Cystic duct + cystic artery clearly identified + gallbladder base visible before clipping" },
          { text: "ERCP: Both diagnostic AND therapeutic for CBD stones", explanation: "Sphincterotomy + stone extraction; first-line for choledocholithiasis" },
        ],
        keyPoints: [
          "USG is first-line and gold standard for detecting gallbladder stones (>95% sensitivity)",
          "Early laparoscopic cholecystectomy (within 72 hours) is standard for acute cholecystitis",
          "Critical view of safety (Strasberg) prevents bile duct injury during cholecystectomy",
          "CBD stones: ERCP + sphincterotomy + stone extraction, then cholecystectomy",
          "Cholangitis: emergency IV antibiotics + biliary drainage (ERCP) within 24 hours",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 20", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 67", edition: "28th" },
        ],
      },
      {
        layer: 4,
        slug: "gallstones-layer-4-exam",
        title: "Gallstones & Cholecystitis - Exam Prep",
        estimatedMinutes: 20,
        summary: "High-yield exam facts on gallstone disease for NEXT pattern questions.",
        contentMd: `# Gallstones & Cholecystitis - Exam Prep

## Must-Know Facts
- Most common type of gallstone: Mixed (cholesterol + pigment)
- Most common cause of obstructive jaundice: CBD stone
- Most common organism in cholangitis: E. coli
- Most feared complication of lap cholecystectomy: Bile duct injury
- Murphy sign: Inspiratory arrest on RUQ palpation (acute cholecystitis)
- Courvoisier law: Palpable gallbladder + jaundice = NOT gallstones (think malignancy)

## Common Exam Traps
- "Asymptomatic gallstones" = No surgery (unless porcelain GB or stone >3 cm)
- "RUQ pain after fatty meal, no fever" = Biliary colic (not cholecystitis)
- "RUQ pain + fever + jaundice" = Cholangitis (not just cholecystitis)
- "Palpable non-tender gallbladder + jaundice" = Courvoisier law = Periampullary carcinoma
- "ICU patient, no stones, thickened GB wall" = Acalculous cholecystitis
- "Gallstone on X-ray + SBO + air in biliary tree" = Gallstone ileus (Rigler triad)

## Investigation Quick Reference
| Clinical Scenario | First Investigation |
|-------------------|-------------------|
| Suspected gallstones | USG abdomen |
| Suspected CBD stone | USG → MRCP or ERCP |
| Cholangitis | USG + blood cultures → ERCP urgently |
| Gallstone pancreatitis | USG + amylase/lipase → ERCP if cholangitis |

## High-Yield Questions
- Courvoisier law applies to: Periampullary carcinoma (not gallstones)
- Charcot triad: Fever + Jaundice + RUQ pain
- Reynolds pentad: Charcot + Hypotension + Confusion
- Mirizzi syndrome: Stone in Hartmann pouch compresses CHD
- Porcelain gallbladder: Calcified wall; risk of carcinoma; cholecystectomy indicated
- Gallstone ileus: Stone >2.5 cm erodes into duodenum; impacts at ileocecal valve`,
        mnemonics: [
          { text: "Courvoisier: Palpable GB + Jaundice = Cancer (NOT stones)", explanation: "Gallstones cause chronic inflammation and fibrosis, so GB cannot distend" },
          { text: "5 Fs + Mirizzi + Rigler: Complete gallstone disease coverage", explanation: "Risk factors + rare complications that are exam favorites" },
        ],
        keyPoints: [
          "Murphy sign = acute cholecystitis; Courvoisier law = palpable GB + jaundice = NOT stones",
          "Charcot triad = cholangitis; Reynolds pentad = suppurative cholangitis",
          "USG first-line for gallstones; MRCP for CBD stones; ERCP for therapeutic intervention",
          "Early lap cholecystectomy within 72 hours for acute cholecystitis",
          "Bile duct injury: most feared complication; prevented by critical view of safety",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 20", edition: "6th" },
        ],
      },
      {
        layer: 5,
        slug: "gallstones-layer-5-active-recall",
        title: "Gallstones & Cholecystitis - Active Recall",
        estimatedMinutes: 15,
        summary: "Flashcard Q&A for spaced repetition on gallstone disease.",
        contentMd: `# Active Recall - Gallstones & Cholecystitis

**Q1:** What are the 5 Fs of gallstone risk factors?
**A1:** Fat, Female, Fertile (multiparity), Forty (>40 years), Fair. Additional: family history, fibrates, rapid weight loss.

**Q2:** What is Murphy sign and what does it indicate?
**A2:** Inspiratory arrest during deep palpation of RUQ. Patient catches breath due to pain when inflamed gallbladder contacts examining hand. Positive in acute cholecystitis.

**Q3:** What is Courvoisier law?
**A3:** Palpable gallbladder with painless jaundice is unlikely due to gallstones (chronic inflammation → fibrotic non-distensible GB). Think periampullary carcinoma (pancreatic head, ampulla, CBD, duodenum).

**Q4:** What is Charcot triad and Reynolds pentad?
**A4:** Charcot: Fever with rigors + Jaundice + RUQ pain = Cholangitis. Reynolds pentad: Charcot triad + Hypotension + Confusion = Suppurative cholangitis (life-threatening).

**Q5:** What is the gold standard investigation for gallbladder stones?
**A5:** Ultrasound abdomen. Sensitivity >95%. Shows echogenic foci with acoustic shadow, wall thickening, pericholecystic fluid.

**Q6:** When is cholecystectomy indicated for asymptomatic gallstones?
**A6:** Porcelain gallbladder (cancer risk), stones >3 cm (cancer risk), and in patients undergoing bariatric surgery. Otherwise, observation.

**Q7:** What is the Critical View of Safety?
**A7:** Strasberg criteria during cholecystectomy: clearly identify cystic duct + cystic artery + gallbladder base with Calot triangle dissected clean. Prevents bile duct injury.

**Q8:** How is choledocholithiasis managed?
**A8:** ERCP with sphincterotomy and stone extraction, followed by laparoscopic cholecystectomy. Alternative: laparoscopic CBD exploration during cholecystectomy.

**Q9:** What is Mirizzi syndrome?
**A9:** Stone impacted in Hartmann pouch or cystic duct causing extrinsic compression of the common hepatic duct. Presents with obstructive jaundice.

**Q10:** What is the timeline for cholecystectomy in acute cholecystitis?
**A10:** Early surgery within 72 hours of symptom onset (current standard). If >72 hours: consider interval cholecystectomy at 6-8 weeks.

**Q11:** What is gallstone ileus?
**A11:** Large gallstone (>2.5 cm) erodes through gallbladder into duodenum (cholecystoduodenal fistula), travels distally, and impacts at ileocecal valve causing SBO. Rigler triad on X-ray.

**Q12:** What is acalculous cholecystitis?
**A12:** Cholecystitis without stones (5-10%). Seen in ICU patients, post-major surgery, sepsis, TPN. Due to gallbladder ischemia and bile stasis. Higher mortality than calculous type.`,
        mnemonics: [
          { text: "Gallstone disease spectrum: Asymptomatic → Colic → Cholecystitis → Cholangitis → Pancreatitis", explanation: "Progressive complications of gallstone disease in order of severity" },
          { text: "ERCP = Extract + Remove + Clear + Papillotomy", explanation: "ERCP is therapeutic: sphincterotomy (papillotomy) + stone extraction from CBD" },
        ],
        keyPoints: [
          "5 Fs: Fat, Female, Fertile, Forty, Fair; pigment stones in hemolytic conditions",
          "Murphy sign = cholecystitis; Courvoisier law = palpable GB + jaundice = malignancy",
          "Early cholecystectomy within 72 hours for acute cholecystitis; critical view of safety",
          "CBD stones: ERCP + sphincterotomy first, then cholecystectomy",
          "Cholangitis: Charcot triad; emergency antibiotics + ERCP within 24 hours",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 20", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 67", edition: "28th" },
        ],
      },
    ],
  },
];
