export const clinicalCasesSurgeryObgPeds = [
  // SURGERY CASES (7)
  {
    title: "Intestinal Obstruction - Adhesive",
    presentingComplaint: "45-year-old male, post-operative patient with vomiting, abdominal distension, and absolute constipation for 3 days",
    caseType: "Emergency",
    difficulty: "MEDIUM" as const,
    estimatedMinutes: 35,
    examTags: ["NEXT_STEP1", "NEET_PG"],
    patientProfile: {
      age: 45,
      sex: "Male",
      occupation: "Farmer",
      history: "Appendicectomy 2 years ago. Presents with bilious vomiting, abdominal distension, no flatus or stools for 3 days. Pain colicky in nature."
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt: "Patient is in pain. Take detailed history of the obstruction: onset, progression, previous surgeries, and symptom character.",
        availableActions: [
          { id: "h1", text: "Ask about timing of onset (acute vs gradual)", isOptimal: true, findings: "Sudden onset 3 days post-meal", scoreDelta: 2 },
          { id: "h2", text: "Inquire about vomiting pattern and character", isOptimal: true, findings: "Bilious vomiting, worsening frequency", scoreDelta: 2 },
          { id: "h3", text: "Ask about bowel and flatus passage", isOptimal: true, findings: "Absolute constipation - no stools or flatus", scoreDelta: 2 },
          { id: "h4", text: "Document previous abdominal surgeries", isOptimal: true, findings: "Appendicectomy 2 years ago - likely adhesive", scoreDelta: 2 },
          { id: "h5", text: "Ask about associated symptoms (fever, weight loss)", isOptimal: false, findings: "No fever. Weight stable. Less relevant.", scoreDelta: 0 },
          { id: "h6", text: "Inquire about dietary intake before onset", isOptimal: true, findings: "Normal diet, no recent changes", scoreDelta: 1 },
          { id: "h7", text: "Ask about pain location and severity", isOptimal: true, findings: "Periumbilical colicky pain, 7/10", scoreDelta: 2 },
          { id: "h8", text: "Ask about smoking and alcohol use", isOptimal: false, findings: "Occasional alcohol. Not relevant here.", scoreDelta: 0 }
        ]
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt: "Patient appears distressed. Perform systematic abdominal examination. Note signs of obstruction.",
        availableActions: [
          { id: "e1", text: "Inspect abdomen for distension and scars", isOptimal: true, findings: "Gross distension, visible peristaltic waves, old McBurney's scar", scoreDelta: 2 },
          { id: "e2", text: "Auscultate bowel sounds before percussion/palpation", isOptimal: true, findings: "Increased high-pitched tinkling bowel sounds (obstructive pattern)", scoreDelta: 2 },
          { id: "e3", text: "Percuss abdomen for tympany and resonance", isOptimal: true, findings: "Tympanic throughout - suggests gas-filled bowel", scoreDelta: 2 },
          { id: "e4", text: "Palpate systematically for tenderness, masses, rigidity", isOptimal: true, findings: "Mild generalized tenderness, no guarding/rigidity, no masses", scoreDelta: 2 },
          { id: "e5", text: "Check for hernia sites (inguinal, umbilical, incisional)", isOptimal: true, findings: "No external hernia, no incisional hernia", scoreDelta: 1 },
          { id: "e6", text: "Perform rectal examination", isOptimal: true, findings: "Empty rectum, no masses", scoreDelta: 1 },
          { id: "e7", text: "Check vital signs and assess hydration", isOptimal: true, findings: "HR 110, BP 130/80, temp normal, dry mucosa - mild dehydration", scoreDelta: 2 },
          { id: "e8", text: "Assess abdomen for peritoneal signs", isOptimal: true, findings: "No rebound tenderness or rigid board abdomen - suggests simple obstruction", scoreDelta: 2 }
        ]
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt: "Investigations confirm mechanical obstruction. Order appropriate imaging and labs.",
        availableActions: [
          { id: "i1", text: "Plain X-ray abdomen (erect and supine)", isOptimal: true, findings: "Multiple air-fluid levels, dilated small bowel loops, minimal colonic gas", scoreDelta: 2 },
          { id: "i2", text: "CT abdomen with IV contrast", isOptimal: true, findings: "Dilated small bowel with transition point in mid-ileum, adherent bowel loops, no perforation", scoreDelta: 2 },
          { id: "i3", text: "Complete blood count", isOptimal: true, findings: "Hb 14.2, WBC 11,200, elevated due to hemoconcentration", scoreDelta: 1 },
          { id: "i4", text: "Serum electrolytes and renal function", isOptimal: true, findings: "Na 128 (hyponatremia from vomiting), K 3.2 (hypokalemia), Cr 1.4 (mild dehydration)", scoreDelta: 2 },
          { id: "i5", text: "Serum lactate and arterial blood gas", isOptimal: false, findings: "Normal lactate, normal pH - no tissue ischemia yet", scoreDelta: 0 },
          { id: "i6", text: "Liver and kidney function tests", isOptimal: true, findings: "ALT 38, AST 42, Cr 1.4 - mild elevation from dehydration", scoreDelta: 1 },
          { id: "i7", text: "Abdominal ultrasound (if CT unavailable)", isOptimal: false, findings: "Can show obstruction but CT superior for adhesions", scoreDelta: 1 }
        ]
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt: "Clinical and radiological findings point to small bowel obstruction. What is the likely cause and management plan?",
        availableActions: [
          { id: "d1", text: "Adhesive small bowel obstruction secondary to previous appendicectomy", isOptimal: true, findings: "Most common cause (60%) in post-surgical patients; imaging confirms transition point", scoreDelta: 2 },
          { id: "d2", text: "Obstructive hernia", isOptimal: false, findings: "Exam ruled out external hernias", scoreDelta: 0 },
          { id: "d3", text: "Volvulus", isOptimal: false, findings: "Transition point at ileum, no twisted mesentery on CT", scoreDelta: 0 },
          { id: "d4", text: "Intussusception", isOptimal: false, findings: "Adult with no recent illness; CT shows adhesions not intussusceptum", scoreDelta: 0 }
        ]
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt: "Manage this patient. Decide on conservative vs operative approach based on clinical status.",
        availableActions: [
          { id: "t1", text: "NPO status and nasogastric tube placement", isOptimal: true, findings: "NG tube drained 1.2L bilious fluid; relief of distension", scoreDelta: 2 },
          { id: "t2", text: "Aggressive fluid and electrolyte resuscitation (IV Ringer's lactate)", isOptimal: true, findings: "Start 1L bolus over 1 hour, then maintenance; replace electrolytes", scoreDelta: 2 },
          { id: "t3", text: "Broad-spectrum antibiotics (cefotaxime + metronidazole)", isOptimal: true, findings: "Cover gram-positive, gram-negative, anaerobes given surgical history", scoreDelta: 2 },
          { id: "t4", text: "Trial of conservative management for 48-72 hours (adhesiolysis often unnecessary)", isOptimal: true, findings: "Most adhesive obstructions resolve with NG decompression and fluids", scoreDelta: 2 },
          { id: "t5", text: "Gastrografin follow-through (water-soluble contrast study) at 24-48h if no resolution", isOptimal: true, findings: "Helps prognosticate; if contrast passes cecum, likely to resolve spontaneously", scoreDelta: 1 },
          { id: "t6", text: "Immediate surgical exploration", isOptimal: false, findings: "Premature; 70% of adhesive obstructions resolve conservatively", scoreDelta: -1 },
          { id: "t7", text: "Laparoscopic lysis of adhesions if conservative fails", isOptimal: true, findings: "Planned at 72h if no resolution; minimal morbidity", scoreDelta: 2 }
        ]
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt: "Patient improves over 48 hours. Plan follow-up care and discharge management.",
        availableActions: [
          { id: "f1", text: "Start oral diet once bowel sounds return and NG output <500mL/day", isOptimal: true, findings: "Introduce clear liquids, then progress to soft diet", scoreDelta: 2 },
          { id: "f2", text: "Remove NG tube once patient tolerates oral intake", isOptimal: true, findings: "Tube removed on day 3; diet tolerated well", scoreDelta: 2 },
          { id: "f3", text: "Continue antibiotics for 5-7 days", isOptimal: true, findings: "Prevent secondary infection", scoreDelta: 1 },
          { id: "f4", text: "Counsel on dietary modifications (small frequent meals, adequate hydration)", isOptimal: true, findings: "Reduce risk of recurrence", scoreDelta: 1 },
          { id: "f5", text: "Discharge on day 5-6 once fully tolerating diet and asymptomatic", isOptimal: true, findings: "Uncomplicated recovery", scoreDelta: 2 },
          { id: "f6", text: "Outpatient follow-up at 2 weeks for suture removal", isOptimal: false, findings: "No fresh surgical wound in this case", scoreDelta: 0 }
        ]
      }
    ]
  },
  {
    title: "Obstructed Inguinal Hernia with Strangulation",
    presentingComplaint: "60-year-old male laborer with irreducible tender groin swelling for 24 hours and worsening pain",
    caseType: "Emergency",
    difficulty: "MEDIUM" as const,
    estimatedMinutes: 40,
    examTags: ["NEXT_STEP1", "NEET_PG"],
    patientProfile: {
      age: 60,
      sex: "Male",
      occupation: "Construction laborer",
      history: "Known right inguinal hernia for 3 years, previously reducible. Today sudden irreducibility with severe pain, nausea."
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt: "Acute presentation of groin hernia. Clarify onset, character, and risk of strangulation.",
        availableActions: [
          { id: "h1", text: "Ask about duration of irreducibility and timing of pain", isOptimal: true, findings: "Irreducible since morning, pain increasing over 24 hours", scoreDelta: 2 },
          { id: "h2", text: "Inquire about associated symptoms (vomiting, abdominal distension)", isOptimal: true, findings: "Nausea and 2 episodes vomiting; mild abdominal discomfort", scoreDelta: 2 },
          { id: "h3", text: "Ask about recent heavy lifting or straining", isOptimal: true, findings: "Lifted heavy concrete blocks yesterday - precipitating event", scoreDelta: 1 },
          { id: "h4", text: "Inquire about previous hernia episodes and prior surgery", isOptimal: true, findings: "Hernia for 3 years, previously self-reducible; no prior hernia repair", scoreDelta: 1 },
          { id: "h5", text: "Ask about fever or systemic symptoms", isOptimal: false, findings: "No fever currently; too early for peritonitis", scoreDelta: 0 },
          { id: "h6", text: "Document bowel and urinary symptoms", isOptimal: true, findings: "Normal micturition; no bowel symptoms yet", scoreDelta: 1 },
          { id: "h7", text: "Ask about skin changes over hernia", isOptimal: true, findings: "Skin appears normal, not discolored", scoreDelta: 1 }
        ]
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt: "Examine the groin and abdomen carefully. Assess for signs of strangulation.",
        availableActions: [
          { id: "e1", text: "Inspect the hernia and surrounding skin", isOptimal: true, findings: "Right inguinal swelling 6x5cm, tense, overlying skin normal (not yet gangrenous)", scoreDelta: 2 },
          { id: "e2", text: "Palpate the hernia for tenderness and attempt gentle reduction", isOptimal: true, findings: "Exquisite tenderness; firm, irreducible mass; attempt reduction unsuccessful", scoreDelta: 2 },
          { id: "e3", text: "Assess for signs of strangulation (discoloration, crepitus)", isOptimal: true, findings: "No discoloration or crepitus; intact skin suggests early strangulation", scoreDelta: 2 },
          { id: "e4", text: "Perform thorough abdominal examination", isOptimal: true, findings: "Mild abdominal distension, hyperactive bowel sounds, no guarding", scoreDelta: 2 },
          { id: "e5", text: "Check vital signs and assess hydration", isOptimal: true, findings: "HR 102, BP 138/85, temp 37.8°C, moist mucosa", scoreDelta: 1 },
          { id: "e6", text: "Examine contralateral groin for hernia", isOptimal: true, findings: "Small left indirect inguinal hernia, easily reducible", scoreDelta: 1 },
          { id: "e7", text: "Assess testis position and consistency", isOptimal: true, findings: "Right testis not in scrotum; likely within hernia sac", scoreDelta: 1 }
        ]
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt: "Confirm diagnosis and rule out bowel obstruction. Imaging should be quick in suspected strangulation.",
        availableActions: [
          { id: "i1", text: "Ultrasound of hernia and groin", isOptimal: true, findings: "Sac contains bowel loops, no peristalsis in sac, fluid around loops suggests compromise", scoreDelta: 2 },
          { id: "i2", text: "CT abdomen/pelvis if diagnosis uncertain", isOptimal: false, findings: "Not needed here; diagnosis clinical; delays surgery", scoreDelta: -1 },
          { id: "i3", text: "Plain X-ray abdomen to rule out bowel obstruction", isOptimal: true, findings: "No air-fluid levels; proximal bowel normal", scoreDelta: 1 },
          { id: "i4", text: "Complete blood count", isOptimal: true, findings: "WBC 13,200, Hb 12.5, normal platelet count", scoreDelta: 1 },
          { id: "i5", text: "Serum electrolytes and renal function", isOptimal: true, findings: "K 3.8, Na 138, Cr 0.9 - normal", scoreDelta: 1 }
        ]
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt: "Clinical and imaging findings confirm obstructed right inguinal hernia. What is your diagnosis?",
        availableActions: [
          { id: "d1", text: "Obstructed right indirect inguinal hernia with impending strangulation", isOptimal: true, findings: "Irreducible, tender, 24h duration, tenderness without discoloration = early strangulation", scoreDelta: 2 },
          { id: "d2", text: "Incarcerated (not strangulated) inguinal hernia", isOptimal: false, findings: "Presence of pain and tenderness suggests strangulation risk", scoreDelta: 0 },
          { id: "d3", text: "Femoral hernia", isOptimal: false, findings: "Mass is in inguinal region, not femoral; not consistent", scoreDelta: 0 }
        ]
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt: "Strangulated hernia requires urgent surgery. Prepare for emergency herniotomy.",
        availableActions: [
          { id: "t1", text: "NPO status immediately", isOptimal: true, findings: "Prevent aspiration during anesthesia", scoreDelta: 2 },
          { id: "t2", text: "Insert IV cannula and send blood for typing and crossmatch", isOptimal: true, findings: "2 units PRBC reserved; prepare for possible bowel resection", scoreDelta: 2 },
          { id: "t3", text: "Nasogastric tube insertion", isOptimal: true, findings: "Decompress stomach; reduce aspiration risk", scoreDelta: 1 },
          { id: "t4", text: "Broad-spectrum antibiotics (cefotaxime + metronidazole)", isOptimal: true, findings: "Cover gram-negative, gram-positive, anaerobes; give before incision", scoreDelta: 2 },
          { id: "t5", text: "Fluid resuscitation with IV Ringer's lactate", isOptimal: true, findings: "Restore intravascular volume; urine output >0.5mL/kg/h", scoreDelta: 1 },
          { id: "t6", text: "Attempt manual reduction under local anesthesia before surgery", isOptimal: false, findings: "Contraindicated in strangulation; risks bowel perforation", scoreDelta: -2 },
          { id: "t7", text: "Emergency surgery: groin incision, assessment of bowel viability, high ligation of sac, tension-free repair (mesh or open)", isOptimal: true, findings: "Bowel viable but edematous; safe to reduce. Repair with mesh (Lichtenstein) appropriate", scoreDelta: 2 }
        ]
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt: "Surgery successful. Plan postoperative care and prevent recurrence.",
        availableActions: [
          { id: "f1", text: "Monitor vitals, drain output, and urine output for 24-48h", isOptimal: true, findings: "Drain output minimal; urine adequate", scoreDelta: 1 },
          { id: "f2", text: "Remove NG tube once fully awake and bowel function returns", isOptimal: true, findings: "NG removed on POD2; patient tolerates sips", scoreDelta: 1 },
          { id: "f3", text: "Start oral diet once bowel sounds present and tolerating sips", isOptimal: true, findings: "Diet advanced to soft; well tolerated", scoreDelta: 1 },
          { id: "f4", text: "Continue antibiotics for 5-7 days", isOptimal: true, findings: "Prevent surgical site infection", scoreDelta: 1 },
          { id: "f5", text: "Plan removal of sutures/staples at 10-12 days", isOptimal: true, findings: "Assess wound healing at follow-up", scoreDelta: 1 },
          { id: "f6", text: "Advise contralateral hernia repair in 3-6 months", isOptimal: true, findings: "Prevent bilateral herniation; lower risk with elective repair", scoreDelta: 1 }
        ]
      }
    ]
  },
  {
    title: "Acute Cholecystitis with Choledocholithiasis",
    presentingComplaint: "42-year-old obese female with right upper quadrant pain, fever, and jaundice for 3 days",
    caseType: "Emergency",
    difficulty: "MEDIUM" as const,
    estimatedMinutes: 40,
    examTags: ["NEXT_STEP1", "NEET_PG"],
    patientProfile: {
      age: 42,
      sex: "Female",
      occupation: "Housewife",
      history: "Obese (BMI 34), multiple pregnancies, presents with sudden RUQ pain radiating to right shoulder, fever 39°C, yellowish discoloration of sclera."
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt: "Patient with RUQ pain and jaundice. Take detailed history to assess for biliary obstruction.",
        availableActions: [
          { id: "h1", text: "Ask about onset, character, and location of pain", isOptimal: true, findings: "Sudden RUQ pain, sharp, radiating to right shoulder, 7/10 severity", scoreDelta: 2 },
          { id: "h2", text: "Inquire about precipitation by fatty meals", isOptimal: true, findings: "Occurred 4 hours after heavy lunch; suggests biliary colic", scoreDelta: 2 },
          { id: "h3", text: "Ask about associated jaundice, dark urine, pale stools", isOptimal: true, findings: "Yellowing of eyes for 1 day, dark urine, pale stools - suggests CBD obstruction", scoreDelta: 2 },
          { id: "h4", text: "Inquire about nausea, vomiting, abdominal distension", isOptimal: true, findings: "Nausea and 3 episodes vomiting; no distension", scoreDelta: 1 },
          { id: "h5", text: "Ask about previous similar episodes", isOptimal: true, findings: "2 previous similar episodes 6 months ago, self-limited", scoreDelta: 1 },
          { id: "h6", text: "Document fever and constitutional symptoms", isOptimal: true, findings: "Fever 39°C for 2 days; chills present", scoreDelta: 2 },
          { id: "h7", text: "Ask about risk factors (obesity, parity, age, female)", isOptimal: true, findings: "Obese female, 5 pregnancies - classic 4Fs", scoreDelta: 1 }
        ]
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt: "Examine abdomen systematically. Look for signs of cholecystitis and pancreatitis.",
        availableActions: [
          { id: "e1", text: "Inspect for jaundice (sclera, skin)", isOptimal: true, findings: "Icteric sclera, yellowish tinge to skin, no pallor", scoreDelta: 2 },
          { id: "e2", text: "Examine abdomen for distension and RUQ swelling", isOptimal: true, findings: "Mild distension, RUQ swelling, no skin changes", scoreDelta: 1 },
          { id: "e3", text: "Palpate and elicit Murphy's sign", isOptimal: true, findings: "Positive Murphy's sign - inspiratory arrest during RUQ palpation", scoreDelta: 2 },
          { id: "e4", text: "Check for RUQ tenderness and guarding", isOptimal: true, findings: "Marked RUQ tenderness with localized guarding, no rigidity", scoreDelta: 2 },
          { id: "e5", text: "Check for epigastric tenderness (assess for pancreatitis)", isOptimal: true, findings: "Epigastric tenderness present; concerning for associated pancreatitis", scoreDelta: 2 },
          { id: "e6", text: "Palpate for palpable gallbladder mass", isOptimal: true, findings: "Palpable RUQ mass (distended gallbladder)", scoreDelta: 1 },
          { id: "e7", text: "Check vital signs", isOptimal: true, findings: "HR 108, BP 138/82, temp 39.2°C, RR 24 - signs of systemic inflammation", scoreDelta: 1 }
        ]
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt: "Multiple investigations needed: ultrasound, liver function tests, amylase. Confirm diagnosis quickly.",
        availableActions: [
          { id: "i1", text: "Abdominal ultrasound", isOptimal: true, findings: "Gallstones, thick-walled gallbladder, pericholecystic fluid, dilated CBD (10mm)", scoreDelta: 2 },
          { id: "i2", text: "Liver function tests (bilirubin, ALP, GGT, ALT, AST)", isOptimal: true, findings: "Total bilirubin 4.2 (obstructive), ALP 320, GGT 280, ALT 180, AST 160", scoreDelta: 2 },
          { id: "i3", text: "Serum amylase and lipase", isOptimal: true, findings: "Amylase 380, lipase 420 - elevated, suggests acute pancreatitis", scoreDelta: 2 },
          { id: "i4", text: "Complete blood count", isOptimal: true, findings: "WBC 15,800 (elevated), Hb 11.2, platelets normal", scoreDelta: 1 },
          { id: "i5", text: "Serum electrolytes and renal function", isOptimal: true, findings: "K 3.6, Na 138, Cr 1.0 - normal", scoreDelta: 1 },
          { id: "i6", text: "ERCP with sphincterotomy for therapeutic confirmation", isOptimal: true, findings: "CBD stones removed, bile drained, CBD reduced to 8mm", scoreDelta: 2 },
          { id: "i7", text: "CT abdomen to assess pancreas", isOptimal: true, findings: "Mild interstitial pancreatitis, no necrosis", scoreDelta: 1 }
        ]
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt: "Clinical and imaging findings point to biliary obstruction. What is your primary diagnosis?",
        availableActions: [
          { id: "d1", text: "Acute cholecystitis with choledocholithiasis and acute pancreatitis", isOptimal: true, findings: "Fever, Murphy's sign, gallstones, dilated CBD, elevated enzymes - classic triad", scoreDelta: 2 },
          { id: "d2", text: "Acute hepatitis", isOptimal: false, findings: "Fever and RUQ pain not typical; no hepatomegaly", scoreDelta: 0 },
          { id: "d3", text: "Cholangitis alone", isOptimal: false, findings: "Murphy's sign positive suggests cholecystitis; fever-jaundice-RUQ pain = all 3 present", scoreDelta: 1 }
        ]
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt: "Manage acute phase and plan definitive surgery. ERCP is urgently needed for CBD obstruction.",
        availableActions: [
          { id: "t1", text: "NPO status and nasogastric tube insertion", isOptimal: true, findings: "Rest the GI tract; decompress stomach", scoreDelta: 1 },
          { id: "t2", text: "IV fluid resuscitation (Ringer's lactate)", isOptimal: true, findings: "Correct dehydration from fever and vomiting", scoreDelta: 2 },
          { id: "t3", text: "Broad-spectrum antibiotics (cefotaxime + metronidazole)", isOptimal: true, findings: "Cover gram-negative, gram-positive, anaerobes; essential given fever and obstruction", scoreDelta: 2 },
          { id: "t4", text: "Urgent ERCP with sphincterotomy and stone extraction", isOptimal: true, findings: "Relieve CBD obstruction before surgery; reduces pancreatitis risk", scoreDelta: 2 },
          { id: "t5", text: "Analgesia (avoid morphine; use pethidine or NSAIDs)", isOptimal: true, findings: "Morphine can worsen sphincter of Oddi spasm", scoreDelta: 1 },
          { id: "t6", text: "Planned laparoscopic cholecystectomy after resolution of acute phase (48-72h)", isOptimal: true, findings: "Definitive management; reduced morbidity vs open approach", scoreDelta: 2 },
          { id: "t7", text: "Immediate open cholecystectomy", isOptimal: false, findings: "Not needed if ERCP successful; laparoscopic preferred in stable patient", scoreDelta: 0 }
        ]
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt: "Post-ERCP recovery. Plan laparoscopic cholecystectomy. Monitor for complications.",
        availableActions: [
          { id: "f1", text: "Monitor vitals, drain output, and clinical status for 48h post-ERCP", isOptimal: true, findings: "No post-ERCP pancreatitis; drain output minimal", scoreDelta: 2 },
          { id: "f2", text: "Continue antibiotics for 5-7 days", isOptimal: true, findings: "Prevent secondary infection", scoreDelta: 1 },
          { id: "f3", text: "Resume oral diet once pain subsides and bowel function returns", isOptimal: true, findings: "Diet advanced to soft; well tolerated", scoreDelta: 1 },
          { id: "f4", text: "Schedule laparoscopic cholecystectomy on POD2-3", isOptimal: true, findings: "Proceed once acute inflammation subsides", scoreDelta: 2 },
          { id: "f5", text: "Discharge post-op at day 2-3 if uncomplicated", isOptimal: true, findings: "Standard laparoscopic recovery", scoreDelta: 1 },
          { id: "f6", text: "Outpatient follow-up at 2 weeks; suture removal at 10-12 days", isOptimal: true, findings: "Assess wound healing", scoreDelta: 1 }
        ]
      }
    ]
  },
  {
    title: "Blunt Abdominal Trauma - Splenic Rupture",
    presentingComplaint: "25-year-old male, road traffic accident, hypotensive with abdominal pain and distension",
    caseType: "Emergency",
    difficulty: "HARD" as const,
    estimatedMinutes: 45,
    examTags: ["NEXT_STEP1", "NEET_PG"],
    patientProfile: {
      age: 25,
      sex: "Male",
      occupation: "Delivery driver",
      history: "High-speed motorcycle collision 30 minutes ago. Left flank impact. Altered sensorium, severe abdominal pain, distension."
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt: "Trauma patient with altered sensorium. Take focused trauma history; assess mechanism and secondary injuries.",
        availableActions: [
          { id: "h1", text: "Ask about mechanism of injury (speed, collision type, fall height)", isOptimal: true, findings: "High-speed motorcycle vs car, left flank direct impact, helmet use unclear", scoreDelta: 2 },
          { id: "h2", text: "Ask about loss of consciousness or altered mental status", isOptimal: true, findings: "Brief LOC at scene; now drowsy but arousable (GCS 13)", scoreDelta: 2 },
          { id: "h3", text: "Inquire about abdominal pain location and severity", isOptimal: true, findings: "Severe left upper quadrant pain, radiating to left shoulder", scoreDelta: 2 },
          { id: "h4", text: "Ask about other injuries (chest, limbs, head)", isOptimal: true, findings: "Mild left rib pain; no limb fractures apparent", scoreDelta: 1 },
          { id: "h5", text: "Ask about medications (especially anticoagulants) and drug allergies", isOptimal: true, findings: "No medications; NKDA", scoreDelta: 1 },
          { id: "h6", text: "Document time of last oral intake", isOptimal: true, findings: "Ate 2 hours before accident - full stomach", scoreDelta: 1 }
        ]
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt: "Perform rapid primary and secondary survey. Assess shock and peritoneal signs.",
        availableActions: [
          { id: "e1", text: "Check airway, breathing, circulation (ABCs)", isOptimal: true, findings: "Airway patent, breathing adequate, pulse weak and rapid", scoreDelta: 2 },
          { id: "e2", text: "Assess vital signs (HR, BP, RR, temp)", isOptimal: true, findings: "HR 128, BP 88/56 (shock), RR 28, temp 36.2°C - Class III hemorrhagic shock", scoreDelta: 2 },
          { id: "e3", text: "Inspect abdomen for trauma, distension, bruising", isOptimal: true, findings: "Distended, left-sided bruising, absent gastrocnemius reflex on left", scoreDelta: 2 },
          { id: "e4", text: "Palpate abdomen for tenderness, guarding, rebound", isOptimal: true, findings: "Severe LUQ tenderness with guarding and rebound - peritonitis", scoreDelta: 2 },
          { id: "e5", text: "Perform FAST (Focused Assessment with Sonography in Trauma)", isOptimal: true, findings: "Free fluid in pericardium (small), Morrison's pouch positive, splenic area positive", scoreDelta: 2 },
          { id: "e6", text: "Check for flank bruising (Grey Turner sign)", isOptimal: true, findings: "Ecchymosis over left lower ribs", scoreDelta: 1 },
          { id: "e7", text: "Assess level of consciousness and neurologic status", isOptimal: true, findings: "GCS 13 (E3V4M6), drowsy but arousable, no focal deficit", scoreDelta: 1 }
        ]
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt: "Imaging confirms free intra-abdominal fluid. Further imaging and labs guide management.",
        availableActions: [
          { id: "i1", text: "FAST examination (already done) or portable ultrasound", isOptimal: true, findings: "Free fluid in multiple quadrants, splenic area hypoechoic", scoreDelta: 2 },
          { id: "i2", text: "Chest X-ray to rule out pneumothorax/hemothorax", isOptimal: true, findings: "Left-sided rib fractures (ribs 8-10), small left pleural effusion, no pneumothorax", scoreDelta: 2 },
          { id: "i3", text: "Abdominal CT with IV contrast (after stabilization)", isOptimal: true, findings: "Splenic laceration grade III-IV, free fluid, no liver/kidney injury, intact bowel", scoreDelta: 2 },
          { id: "i4", text: "Complete blood count", isOptimal: true, findings: "Hb 8.2 (acute blood loss), WBC 18,500, platelets normal", scoreDelta: 1 },
          { id: "i5", text: "Coagulation profile (PT, INR, APTT, fibrinogen)", isOptimal: true, findings: "PT 16, APTT 38, fibrinogen 180 - early coagulopathy from hemorrhage", scoreDelta: 2 },
          { id: "i6", text: "Type and crossmatch blood immediately", isOptimal: true, findings: "O-positive 4 units PRBC reserved", scoreDelta: 2 },
          { id: "i7", text: "Serum electrolytes, BUN, creatinine", isOptimal: true, findings: "K 5.2 (hyperkalemia), Na 128 (hyponatremia), Cr 1.8 (acute kidney injury)", scoreDelta: 1 }
        ]
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt: "Clinical, FAST, and CT findings confirm intra-abdominal hemorrhage. What is the likely source and grade?",
        availableActions: [
          { id: "d1", text: "Splenic laceration/rupture (grade III-IV) with hemoperitoneum - Class III hemorrhagic shock", isOptimal: true, findings: "LUQ impact, FAST positive, CT shows grade IV laceration", scoreDelta: 2 },
          { id: "d2", text: "Hepatic laceration", isOptimal: false, findings: "No RUQ pain or bruising; CT shows spleen injured not liver", scoreDelta: 0 },
          { id: "d3", text: "Mesenteric injury with bowel perforation", isOptimal: false, findings: "Bowel intact on CT; no pneumoperitoneum", scoreDelta: 0 }
        ]
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt: "Patient is in hemorrhagic shock from splenic rupture. Resuscitate aggressively. Consider operative vs conservative management.",
        availableActions: [
          { id: "t1", text: "Call for massive transfusion protocol activation", isOptimal: true, findings: "Transfuse O-negative PRBCs immediately; activate MTP", scoreDelta: 2 },
          { id: "t2", text: "Establish 2 large-bore IVs and aggressive fluid resuscitation", isOptimal: true, findings: "Start permissive hypotension (SBP 80-90) to avoid re-bleeding; 1L bolus NS then evaluate", scoreDelta: 2 },
          { id: "t3", text: "Broad-spectrum antibiotics (cefotaxime + metronidazole)", isOptimal: true, findings: "Cover gram-negative, gram-positive, anaerobes", scoreDelta: 1 },
          { id: "t4", text: "Insert urinary catheter to monitor urine output", isOptimal: true, findings: "Target UOP >0.5mL/kg/h; assess renal perfusion", scoreDelta: 1 },
          { id: "t5", text: "Prepare for emergency OR; contact anesthesia, surgery teams", isOptimal: true, findings: "Ensure OR ready for laparotomy if unstable", scoreDelta: 2 },
          { id: "t6", text: "Attempt conservative management (ICU admission, bed rest, transfusion protocol)", isOptimal: true, findings: "If HR, BP stabilize after 2-3 units PRBCs; some patients avoid splenectomy with close monitoring", scoreDelta: 2 },
          { id: "t7", text: "Emergency splenectomy via midline laparotomy", isOptimal: true, findings: "If pt remains unstable despite resuscitation; most appropriate for grade IV laceration", scoreDelta: 2 }
        ]
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt: "Patient undergoes splenectomy. Plan post-op care and vaccination.",
        availableActions: [
          { id: "f1", text: "Monitor ICU vitals, blood loss, coagulation status for 48-72h", isOptimal: true, findings: "Drain output decreasing; hemoglobin stable at 9.2 after transfusion", scoreDelta: 2 },
          { id: "f2", text: "Continue broad-spectrum antibiotics for 7-10 days", isOptimal: true, findings: "Post-splenectomy patient at high infection risk (OPSI)", scoreDelta: 2 },
          { id: "f3", text: "Vaccinate against pneumococcus, H. influenzae, meningococcus (OPSI prevention)", isOptimal: true, findings: "Vaccines given at discharge; patient counseled on asplenic precautions", scoreDelta: 2 },
          { id: "f4", text: "Prophylactic penicillin V 250mg BD for 2 years post-op", isOptimal: true, findings: "Prevent overwhelming post-splenectomy infection", scoreDelta: 2 },
          { id: "f5", text: "Discharge after POD7-10 if wound healing normal", isOptimal: true, findings: "Uncomplicated post-splenectomy recovery", scoreDelta: 1 },
          { id: "f6", text: "Outpatient follow-up at 2 weeks; occupational therapy for rib fracture management", isOptimal: true, findings: "Monitor recovery; manage rib pain to allow early mobilization", scoreDelta: 1 }
        ]
      }
    ]
  },
  {
    title: "Burns 40% TBSA - Parkland Formula Resuscitation",
    presentingComplaint: "30-year-old female, kitchen accident, 40% TBSA burns with singed nasal hairs and stridor",
    caseType: "Emergency",
    difficulty: "HARD" as const,
    estimatedMinutes: 50,
    examTags: ["NEXT_STEP1", "NEET_PG"],
    patientProfile: {
      age: 30,
      sex: "Female",
      occupation: "Housewife",
      history: "Kerosene stove explosion; clothing caught fire. Deep partial (2nd) and full-thickness (3rd) burns on chest, abdomen, bilateral arms. Airway smoke exposure evident."
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt: "Severe burn injury. Rapid history; focus on airway risk, burn mechanism, and enclosed space exposure.",
        availableActions: [
          { id: "h1", text: "Ask about mechanism (flame, contact, chemical, smoke exposure)", isOptimal: true, findings: "Kerosene stove explosion; flame exposure 30-45 seconds; enclosed kitchen", scoreDelta: 2 },
          { id: "h2", text: "Inquire about loss of consciousness or smoke inhalation symptoms", isOptimal: true, findings: "No LOC; singed nasal hairs, sooty sputum, history of exposure in enclosed kitchen", scoreDelta: 2 },
          { id: "h3", text: "Ask about respiratory symptoms (stridor, hoarseness)", isOptimal: true, findings: "Mild stridor, hoarse voice - concerning for airway edema", scoreDelta: 2 },
          { id: "h4", text: "Inquire about past medical history and medications", isOptimal: true, findings: "No significant PMH; not on medications; non-smoker", scoreDelta: 1 },
          { id: "h5", text: "Ask about fluid intake/output prior to burn", isOptimal: true, findings: "Ate breakfast 3 hours ago; normal urine output", scoreDelta: 1 },
          { id: "h6", text: "Inquire about associated injuries (blunt trauma from fall, explosion)", isOptimal: true, findings: "No fall; blast injury minimal", scoreDelta: 1 }
        ]
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt: "Rapid assessment of airway, breathing, circulation, and burn extent. Use Rule of 9s and Lund-Browder for TBSA.",
        availableActions: [
          { id: "e1", text: "Assess airway for signs of inhalation injury (stridor, hoarseness, singed hairs)", isOptimal: true, findings: "Stridor present, sooty sputum, nasal vibrissae singed - inhalation injury likely", scoreDelta: 2 },
          { id: "e2", text: "Check breathing and SpO2; listen for wheezing or respiratory distress", isOptimal: true, findings: "RR 32, SpO2 94% on room air, no wheezing yet but stridor audible", scoreDelta: 2 },
          { id: "e3", text: "Check circulation: capillary refill, pulses, skin perfusion", isOptimal: true, findings: "Peripheral pulses present; delayed capillary refill in burned areas", scoreDelta: 1 },
          { id: "e4", text: "Estimate TBSA using Rule of 9s or Lund-Browder chart", isOptimal: true, findings: "Anterior chest 9%, abdomen 9%, both arms 18%, total 36% (conservative estimate; exact 40%)", scoreDelta: 2 },
          { id: "e5", text: "Assess burn depth: erythema (1st), blisters (2nd), charring (3rd)", isOptimal: true, findings: "Deep partial (2nd degree): dark red, blistered, with white patches (3rd degree)", scoreDelta: 2 },
          { id: "e6", text: "Assess vital signs: HR, BP, temp, RR", isOptimal: true, findings: "HR 128, BP 110/70 (may worsen), RR 32, temp 37.8°C", scoreDelta: 1 },
          { id: "e7", text: "Check for circumferential burns (eschars limiting ventilation)", isOptimal: true, findings: "Circumferential eschar on chest and bilateral arms - limit chest expansion", scoreDelta: 2 }
        ]
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt: "Labs and imaging assess severity, inhalation injury, and fluid needs. Carboxyhemoglobin and metabolic status critical.",
        availableActions: [
          { id: "i1", text: "Carboxyhemoglobin (COHb) and arterial blood gas", isOptimal: true, findings: "COHb 22% (inhalation injury confirmed), pH 7.32, PaO2 85, PaCO2 45 (mild hypoxemia, hypercapnia)", scoreDelta: 2 },
          { id: "i2", text: "Complete blood count", isOptimal: true, findings: "Hb 14.5 (hemoconcentration from fluid loss), WBC 15,200, platelets normal", scoreDelta: 1 },
          { id: "i3", text: "Serum electrolytes, BUN, creatinine, glucose", isOptimal: true, findings: "K 4.2, Na 138, Cr 0.9 (early); glucose 180 (stress response)", scoreDelta: 1 },
          { id: "i4", text: "Coagulation profile (PT, APPT, fibrinogen)", isOptimal: true, findings: "Normal; no early coagulopathy", scoreDelta: 1 },
          { id: "i5", text: "Chest X-ray (PA and lateral)", isOptimal: true, findings: "Normal lung fields; no pneumothorax; assess for future pulmonary edema", scoreDelta: 1 },
          { id: "i6", text: "Fiberoptic bronchoscopy if inhalation injury suspected", isOptimal: true, findings: "Confirms thermal/chemical injury to lower airways; sooty deposits, mucosal edema", scoreDelta: 2 }
        ]
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt: "Confirm burn extent and inhalation injury severity. Calculate Parkland formula requirements.",
        availableActions: [
          { id: "d1", text: "40% TBSA burn (mixed 2nd and 3rd degree) with inhalation injury and circumferential eschar", isOptimal: true, findings: "Confirmed by exam, TBSA calculation, COHb elevation, airway changes", scoreDelta: 2 },
          { id: "d2", text: "Inhalation injury with carboxyhemoglobin poisoning and potential airway compromise", isOptimal: true, findings: "COHb 22%, stridor, sooty sputum, bronchoscopy findings", scoreDelta: 2 },
          { id: "d3", text: "Early signs of compartment syndrome (circumferential eschar limiting expansion)", isOptimal: true, findings: "May worsen during fluid resuscitation", scoreDelta: 1 }
        ]
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt: "Aggressive fluid resuscitation with Parkland formula. Manage airway. Plan escharotomy if needed.",
        availableActions: [
          { id: "t1", text: "Calculate and start Parkland formula: 4mL × kg × %TBSA (Ringer's lactate)", isOptimal: true, findings: "4 × 70 × 40 = 11,200mL; 5,600mL in first 8h, rest over 16h", scoreDelta: 2 },
          { id: "t2", text: "Insert 2 large-bore IVs (preferably through unburned skin)", isOptimal: true, findings: "Place central line if IV access inadequate", scoreDelta: 2 },
          { id: "t3", text: "Insert urinary catheter; target UOP 0.5mL/kg/h (1mL/kg/h if inhalation injury)", isOptimal: true, findings: "Monitor urine color; target clear urine (avoid rhabdomyolysis)", scoreDelta: 2 },
          { id: "t4", text: "Place on high-flow oxygen (100%); prepare for intubation if airway worsens", isOptimal: true, findings: "Reduce COHb; prepare airway equipment", scoreDelta: 2 },
          { id: "t5", text: "Perform escharotomy if circumferential burn restricting chest/limb perfusion", isOptimal: true, findings: "Escharotomy performed at bedside on chest and bilateral arms; improves perfusion", scoreDelta: 2 },
          { id: "t6", text: "Nasogastric tube insertion (high aspiration risk with large burn)", isOptimal: true, findings: "Decompress stomach; start NG feeds once ileus resolves", scoreDelta: 1 },
          { id: "t7", text: "Broad-spectrum antibiotics (topical silver sulfadiazine, IV cefotaxime)", isOptimal: true, findings: "Prevent burn wound infection and sepsis", scoreDelta: 1 },
          { id: "t8", text: "Pain management (morphine IV, avoid NSAIDs initially)", isOptimal: true, findings: "Adequate analgesia; prepare for repeated procedures", scoreDelta: 2 }
        ]
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt: "Intensive care management, wound care, and rehabilitation. Monitor for inhalation complications.",
        availableActions: [
          { id: "f1", text: "Continue Parkland formula; adjust based on urine output and vital signs", isOptimal: true, findings: "UOP maintained at 0.5mL/kg/h; vital signs stable after initial resuscitation", scoreDelta: 2 },
          { id: "f2", text: "Daily wound care, topical antibiotics, dressing changes under anesthesia", isOptimal: true, findings: "Minimize infection risk", scoreDelta: 2 },
          { id: "f3", text: "Monitor for inhalation complications (pulmonary edema, carbon monoxide poisoning)", isOptimal: true, findings: "Serial ABGs, chest imaging; watch for late airway obstruction", scoreDelta: 2 },
          { id: "f4", text: "Nutritional support: high-protein, high-calorie diet (Curreri formula)", isOptimal: true, findings: "Hypermetabolic state; NG feeding initiated day 2", scoreDelta: 2 },
          { id: "f5", text: "Early excision of burns and grafting (post-24h once stable)", isOptimal: true, findings: "Reduces infection risk and mortality; plan skin grafting", scoreDelta: 2 },
          { id: "f6", text: "Physiotherapy and rehabilitation (prevent contractures)", isOptimal: true, findings: "Range of motion exercises, compression garments post-epithelialization", scoreDelta: 1 }
        ]
      }
    ]
  },
  {
    title: "Breast Cancer - Locally Advanced",
    presentingComplaint: "48-year-old female with hard breast lump, skin retraction, and axillary lymph node enlargement for 2 months",
    caseType: "Ward",
    difficulty: "MEDIUM" as const,
    estimatedMinutes: 35,
    examTags: ["NEXT_STEP1", "NEET_PG"],
    patientProfile: {
      age: 48,
      sex: "Female",
      occupation: "Lawyer",
      history: "Noticed hard lump in right breast 2 months ago. Progressive skin puckering, nipple inversion, arm swelling. No discharge. Menopausal."
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt: "Breast cancer presentation. Take detailed history: onset, progression, symptoms, risk factors.",
        availableActions: [
          { id: "h1", text: "Ask about onset, size progression, and pain", isOptimal: true, findings: "Gradual onset 2 months; painless lump; progressive swelling", scoreDelta: 2 },
          { id: "h2", text: "Inquire about skin changes (dimpling, retraction, ulceration)", isOptimal: true, findings: "Skin retraction over lump; no ulceration yet", scoreDelta: 2 },
          { id: "h3", text: "Ask about nipple symptoms (inversion, discharge, eczema)", isOptimal: true, findings: "Nipple inversion; no discharge; no eczema", scoreDelta: 2 },
          { id: "h4", text: "Inquire about arm swelling (lymphedema sign)", isOptimal: true, findings: "Arm swelling noted 2 weeks ago - suggests axillary involvement", scoreDelta: 2 },
          { id: "h5", text: "Ask about systemic symptoms (weight loss, fatigue, bone pain)", isOptimal: true, findings: "Mild fatigue; no weight loss; no bone pain", scoreDelta: 1 },
          { id: "h6", text: "Document menstrual and reproductive history", isOptimal: true, findings: "Menopausal 3 years; 2 children, both breast-fed; no HRT", scoreDelta: 1 },
          { id: "h7", text: "Ask about family history of cancer", isOptimal: true, findings: "Mother had breast cancer at 65; no BRCA testing", scoreDelta: 2 }
        ]
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt: "Systematic breast examination. Assess lump, skin, lymph nodes, and extent of disease.",
        availableActions: [
          { id: "e1", text: "Inspect both breasts for size, symmetry, skin changes", isOptimal: true, findings: "Right breast: skin retraction over upper outer quadrant, mild erythema", scoreDelta: 2 },
          { id: "e2", text: "Check for skin dimpling, orange peel appearance (peau d'orange)", isOptimal: true, findings: "Peau d'orange over lump site - suggests dermal infiltration", scoreDelta: 2 },
          { id: "e3", text: "Examine nipples for inversion, discharge, eczema", isOptimal: true, findings: "Right nipple inverted; no discharge on expression", scoreDelta: 2 },
          { id: "e4", text: "Palpate both breasts systematically (all 4 quadrants + areola)", isOptimal: true, findings: "Right breast: hard irregular lump 4x3cm, upper outer quadrant, fixed to skin", scoreDelta: 2 },
          { id: "e5", text: "Examine axillary lymph nodes (size, consistency, fixity)", isOptimal: true, findings: "Right axilla: multiple nodes, largest 2cm, matted, fixed to chest wall", scoreDelta: 2 },
          { id: "e6", text: "Check supraclavicular and infraclavicular nodes", isOptimal: true, findings: "Supraclavicular nodes not palpable; no infraclavicular involvement", scoreDelta: 1 },
          { id: "e7", text: "Assess arm circumference (compare bilateral) for lymphedema", isOptimal: true, findings: "Right arm 2cm larger at mid-arm - early lymphedema", scoreDelta: 1 }
        ]
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt: "Imaging and tissue diagnosis confirm malignancy. Assess stage and receptor status.",
        availableActions: [
          { id: "i1", text: "Mammography (bilateral views)", isOptimal: true, findings: "Right breast: 4cm irregular, heterogeneously dense mass, microcalcifications, skin thickening", scoreDelta: 2 },
          { id: "i2", text: "Breast ultrasound", isOptimal: true, findings: "Right breast: hypoechoic mass, irregular margins, suspicious; axillary nodes enlarged", scoreDelta: 1 },
          { id: "i3", text: "Fine-needle aspiration cytology (FNAC) of breast lump", isOptimal: true, findings: "FNA shows malignant cells; consistent with carcinoma", scoreDelta: 2 },
          { id: "i4", text: "Core needle biopsy for histology and receptor testing", isOptimal: true, findings: "Invasive ductal carcinoma (IDC), grade 2; ER+, PR+, HER2-", scoreDelta: 2 },
          { id: "i5", text: "Chest X-ray to rule out pulmonary metastasis", isOptimal: true, findings: "No pleural effusion or lung nodules; normal", scoreDelta: 1 },
          { id: "i6", text: "Abdominal ultrasound or CT to assess liver", isOptimal: true, findings: "No hepatic metastasis; liver normal", scoreDelta: 1 },
          { id: "i7", text: "Bone scan or PET-CT if symptomatically indicated", isOptimal: false, findings: "No bony symptoms; not needed for staging", scoreDelta: 0 }
        ]
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt: "Histology and imaging confirm diagnosis. Stage this locally advanced cancer (TNM).",
        availableActions: [
          { id: "d1", text: "Locally advanced breast cancer (Stage IIIA-IIIB): 4cm lump, skin retraction, axillary nodes, no distant metastasis", isOptimal: true, findings: "T3N2M0 (4cm + skin involvement + fixed axillary nodes)", scoreDelta: 2 },
          { id: "d2", text: "Invasive ductal carcinoma, ER+/PR+/HER2-, hormone receptor positive", isOptimal: true, findings: "Favorable for hormone therapy but locally advanced stage", scoreDelta: 2 },
          { id: "d3", text: "Early-stage cancer suitable for surgery alone", isOptimal: false, findings: "Locally advanced; needs neoadjuvant therapy before surgery", scoreDelta: 0 }
        ]
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt: "Manage locally advanced cancer. Plan neoadjuvant chemotherapy followed by surgery.",
        availableActions: [
          { id: "t1", text: "Neoadjuvant chemotherapy (e.g., FAC or AC-T regimen) for 4-6 cycles", isOptimal: true, findings: "Shrink tumor to allow surgery; assess response", scoreDelta: 2 },
          { id: "t2", text: "Monitor response with clinical exam and imaging every 2-3 cycles", isOptimal: true, findings: "Assess tumor shrinkage; adjust if poor response", scoreDelta: 2 },
          { id: "t3", text: "Modified radical mastectomy (MRM) with axillary dissection after chemotherapy", isOptimal: true, findings: "Definitive surgery once tumor downsized; address skin and axillary involvement", scoreDelta: 2 },
          { id: "t4", text: "Adjuvant radiation therapy post-surgery to chest wall and axilla", isOptimal: true, findings: "High-risk features (skin involvement, N2 disease) mandate XRT", scoreDelta: 2 },
          { id: "t5", text: "Hormonal therapy (tamoxifen or AI) for 5-10 years (ER+/PR+ disease)", isOptimal: true, findings: "Prevent recurrence", scoreDelta: 2 },
          { id: "t6", text: "Palliative care if patient declines aggressive treatment", isOptimal: false, findings: "Patient suitable for curative approach; palliative only if refused", scoreDelta: 0 }
        ]
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt: "Post-treatment follow-up and survivorship care. Monitor for recurrence and complications.",
        availableActions: [
          { id: "f1", text: "Regular clinical breast examination every 3 months year 1, then 6-monthly", isOptimal: true, findings: "Assess for local recurrence", scoreDelta: 2 },
          { id: "f2", text: "Mammography of contralateral breast annually; MRI if high risk", isOptimal: true, findings: "Screen for second primary", scoreDelta: 1 },
          { id: "f3", text: "Hormonal therapy adherence (tamoxifen or aromatase inhibitor)", isOptimal: true, findings: "Counsel on side effects, importance of compliance", scoreDelta: 2 },
          { id: "f4", text: "Manage lymphedema with physiotherapy, compression, exercises", isOptimal: true, findings: "Prevent worsening; improve arm function", scoreDelta: 1 },
          { id: "f5", text: "Psychosocial support and counseling for cancer survivorship", isOptimal: true, findings: "Address anxiety, depression, body image", scoreDelta: 1 },
          { id: "f6", text: "Genetic counseling and BRCA testing if indicated (family history)", isOptimal: true, findings: "Guide future surveillance and preventive measures", scoreDelta: 1 }
        ]
      }
    ]
  },
  {
    title: "Perianal Abscess Progressing to Fistula-in-Ano",
    presentingComplaint: "35-year-old male with recurrent perianal swelling, pain, and purulent discharge for 4 weeks",
    caseType: "OPD",
    difficulty: "MEDIUM" as const,
    estimatedMinutes: 30,
    examTags: ["NEXT_STEP1", "NEET_PG"],
    patientProfile: {
      age: 35,
      sex: "Male",
      occupation: "Software engineer",
      history: "Presented 4 weeks ago with perianal pain and swelling. Drained by another surgeon; recurrent swelling and discharge now."
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt: "Recurrent perianal disease. Determine chronicity and prior interventions.",
        availableActions: [
          { id: "h1", text: "Ask about initial onset and first episode details", isOptimal: true, findings: "First episode 4 weeks ago; sudden onset pain and swelling", scoreDelta: 2 },
          { id: "h2", text: "Inquire about prior drainage or surgery", isOptimal: true, findings: "Drained once; returned after 2 weeks", scoreDelta: 2 },
          { id: "h3", text: "Ask about discharge character and frequency", isOptimal: true, findings: "Purulent discharge intermittently; worse after sitting", scoreDelta: 1 },
          { id: "h4", text: "Inquire about pain, especially defecation and sitting", isOptimal: true, findings: "Pain on sitting, during/after defecation; 6/10 severity", scoreDelta: 2 },
          { id: "h5", text: "Ask about bowel habits and constipation", isOptimal: true, findings: "Normal bowel habits; occasional constipation", scoreDelta: 1 },
          { id: "h6", text: "Ask about systemic symptoms (fever, weight loss)", isOptimal: false, findings: "No fever; weight stable", scoreDelta: 0 },
          { id: "h7", text: "Document history of IBD or immunocompromise", isOptimal: true, findings: "No IBD; HIV negative; immune status normal", scoreDelta: 1 }
        ]
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt: "Careful perianal examination. Look for external opening, internal tract (Goodsall's rule).",
        availableActions: [
          { id: "e1", text: "Inspect perianal area: erythema, edema, external opening, discharge", isOptimal: true, findings: "Erythema, edema at 4 o'clock position, visible opening with purulent drainage", scoreDelta: 2 },
          { id: "e2", text: "Palpate for induration, fluctuance, cord-like tract", isOptimal: true, findings: "Induration around opening; cord-like tract palpable toward anal verge", scoreDelta: 2 },
          { id: "e3", text: "Apply Goodsall's rule to predict internal opening", isOptimal: true, findings: "External opening anterior to transverse line; likely anterior internal opening", scoreDelta: 2 },
          { id: "e4", text: "Perform anoscopy or digital rectal examination (after topical anesthetic)", isOptimal: true, findings: "Internal opening at 12 o'clock (anterior midline), granulation tissue visible", scoreDelta: 2 },
          { id: "e5", text: "Check for signs of complex fistula (multiple tracts, supralevator involvement)", isOptimal: true, findings: "Single tract apparent; appears to be low intersphincteric fistula", scoreDelta: 1 },
          { id: "e6", text: "Assess continence and sphincter integrity", isOptimal: true, findings: "Normal continence; sphincter appears intact", scoreDelta: 1 },
          { id: "e7", text: "Examine for secondary openings or abscesses", isOptimal: true, findings: "No additional openings; no fluctuant mass", scoreDelta: 1 }
        ]
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt: "Imaging confirms fistula anatomy and guides surgical planning.",
        availableActions: [
          { id: "i1", text: "Contrast fistulography (inject dye into external opening, take X-ray)", isOptimal: true, findings: "Dye tracks from external opening (4 o'clock) to internal opening (12 o'clock) - simple low fistula", scoreDelta: 2 },
          { id: "i2", text: "MRI pelvis (if available, for complex fistula assessment)", isOptimal: true, findings: "MRI confirms low intersphincteric fistula, excludes high/complex disease", scoreDelta: 2 },
          { id: "i3", text: "Hydrogen peroxide injection into external opening (to outline tract)", isOptimal: false, findings: "Less accurate than contrast fistulography in this setting", scoreDelta: 0 },
          { id: "i4", text: "Complete blood count", isOptimal: true, findings: "WBC 10,200; no leukocytosis; Hb 13.5", scoreDelta: 1 },
          { id: "i5", text: "Serum electrolytes (if planning general anesthesia)", isOptimal: true, findings: "K 4.1, Na 138 - normal", scoreDelta: 1 }
        ]
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt: "Confirmed diagnosis: low intersphincteric fistula-in-ano suitable for fistulotomy.",
        availableActions: [
          { id: "d1", text: "Simple low intersphincteric anal fistula (external opening 4 o'clock → internal opening 12 o'clock)", isOptimal: true, findings: "Confirmed by examination and fistulography", scoreDelta: 2 },
          { id: "d2", text: "Complex or high fistula", isOptimal: false, findings: "Single tract, low level, no sphincter involvement", scoreDelta: 0 },
          { id: "d3", text: "Associated abscess", isOptimal: false, findings: "No fluctuant mass; tract draining", scoreDelta: 0 }
        ]
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt: "Surgical management of simple anal fistula. Fistulotomy is treatment of choice.",
        availableActions: [
          { id: "t1", text: "Fistulotomy: divide and lay open the fistulous tract", isOptimal: true, findings: "Simple and effective for low fistula; converts to open wound; 90% healing rate", scoreDelta: 2 },
          { id: "t2", text: "Curettage of granulation tissue within tract", isOptimal: true, findings: "Remove infected/inflammatory tissue to promote healing", scoreDelta: 1 },
          { id: "t3", text: "Primary closure of fistula (rarely done for simple fistula)", isOptimal: false, findings: "Higher recurrence rate (15-20%); reserved for special cases", scoreDelta: 0 },
          { id: "t4", text: "Advancement flap procedure (for complex or recurrent fistula)", isOptimal: false, findings: "Not indicated for simple fistula; reserved for complex disease", scoreDelta: 0 },
          { id: "t5", text: "Preoperative preparation: bowel prep with enema; NPO status", isOptimal: true, findings: "Facilitate surgery under general/spinal anesthesia", scoreDelta: 1 },
          { id: "t6", text: "Post-op wound care: frequent sitz baths, analgesics, antibiotics", isOptimal: true, findings: "Essential for healing; reduce infection risk", scoreDelta: 2 }
        ]
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt: "Post-operative care. Monitor for healing and prevent recurrence.",
        availableActions: [
          { id: "f1", text: "Continue sitz baths 3-4 times daily + after each bowel movement", isOptimal: true, findings: "Promote wound healing and hygiene", scoreDelta: 2 },
          { id: "f2", text: "Analgesics and laxatives to reduce pain and straining", isOptimal: true, findings: "Stool softeners (docusate, polyethylene glycol) prevent constipation", scoreDelta: 1 },
          { id: "f3", text: "Continue antibiotics for 5-7 days post-op", isOptimal: true, findings: "Prevent secondary infection", scoreDelta: 1 },
          { id: "f4", text: "Outpatient wound care and inspection at 1 week post-op", isOptimal: true, findings: "Assess for signs of infection or dehiscence", scoreDelta: 1 },
          { id: "f5", text: "Full healing typically 4-8 weeks; return to normal activities", isOptimal: true, findings: "Time depends on wound size; open healing", scoreDelta: 1 },
          { id: "f6", text: "Counsel on dietary fiber to prevent constipation and recurrence", isOptimal: true, findings: "High fiber diet, adequate hydration", scoreDelta: 1 }
        ]
      }
    ]
  },
  // OBG CASES (7)
  {
    title: "Obstructed Labor with Partograph",
    presentingComplaint: "22-year-old primigravida at term with prolonged labor, delayed referral, cervical dilation not progressing",
    caseType: "Emergency",
    difficulty: "HARD" as const,
    estimatedMinutes: 45,
    examTags: ["NEXT_STEP1", "NEET_PG"],
    patientProfile: {
      age: 22,
      sex: "Female",
      occupation: "Farmer",
      history: "Laboring at home with traditional birth attendant for 18 hours. Presented to hospital after lack of progress. No ANC. Contractions strong but cervical dilation stuck at 7cm."
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt: "Prolonged labor in primigravida. Document labor duration, complications, and delay in seeking care.",
        availableActions: [
          { id: "h1", text: "Ask about onset of labor and duration of contractions", isOptimal: true, findings: "Onset 18 hours ago; contractions 3-4 per 10 minutes, strong, lasting 45-60 seconds", scoreDelta: 2 },
          { id: "h2", text: "Inquire about bloody show and rupture of membranes", isOptimal: true, findings: "Heavy bloody show 8 hours ago; membranes ruptured 6 hours ago, clear fluid", scoreDelta: 2 },
          { id: "h3", text: "Ask about pain and ability to walk/move", isOptimal: true, findings: "Severe pain, unable to walk; exhausted", scoreDelta: 1 },
          { id: "h4", text: "Inquire about previous obstetric history (if any)", isOptimal: true, findings: "Primigravida; no prior pregnancies", scoreDelta: 1 },
          { id: "h5", text: "Ask about antenatal care and estimated date of delivery", isOptimal: true, findings: "No ANC; EDD calculated as today (38+4 weeks)", scoreDelta: 2 },
          { id: "h6", text: "Document fetal movements and vaginal bleeding pattern", isOptimal: true, findings: "Fetal movements normal until 4 hours ago; heavy vaginal bleeding now", scoreDelta: 2 },
          { id: "h7", text: "Ask about reason for home delivery and delay in coming to hospital", isOptimal: true, findings: "Traditional preference; came to hospital only after 18 hours when progress stopped", scoreDelta: 1 }
        ]
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt: "Assess maternal and fetal condition. Evaluate cervical progress on partograph.",
        availableActions: [
          { id: "e1", text: "Check vital signs: HR, BP, temp, respiratory status", isOptimal: true, findings: "HR 110, BP 130/80, temp 38.2°C, RR 28 - signs of maternal stress/dehydration", scoreDelta: 2 },
          { id: "e2", text: "Assess hydration status: mucous membranes, skin turgor", isOptimal: true, findings: "Dry mucosa, poor skin turgor - significant dehydration", scoreDelta: 2 },
          { id: "e3", text: "Perform abdominal examination: contractions, uterine tenderness, scars", isOptimal: true, findings: "Frequent strong contractions; mild lower uterine segment tenderness; no previous scars", scoreDelta: 2 },
          { id: "e4", text: "Assess fetal condition: FHR, position, descent", isOptimal: true, findings: "FHR 135/min but with variable decelerations; head still high (-2 station)", scoreDelta: 2 },
          { id: "e5", text: "Perform vaginal examination: dilation, effacement, station, cervical findings", isOptimal: true, findings: "Cervical dilation 7cm, 80% effaced, head at -2 station, cervix felt around head (deflection)", scoreDelta: 2 },
          { id: "e6", text: "Check for caput succedaneum and molding", isOptimal: true, findings: "Caput 2+, molding present - prolonged descent", scoreDelta: 1 },
          { id: "e7", text: "Assess pelvic adequacy (clinical pelvimetry if possible)", isOptimal: true, findings: "Contracted pelvis suspected; interischial diameter narrow", scoreDelta: 2 }
        ]
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt: "Plot findings on partograph. Confirm pelvic adequacy and fetal status.",
        availableActions: [
          { id: "i1", text: "Complete partograph: plot cervical dilation against time (graph shows crossing action line)", isOptimal: true, findings: "Cervical dilation at 7cm for past 6 hours = crossing action line = obstructed labor", scoreDelta: 2 },
          { id: "i2", text: "Pelvi-abdominal X-ray to assess pelvic contraction", isOptimal: true, findings: "Pelvic inlet contraction confirmed (obstetric conjugate <10cm estimated)", scoreDelta: 2 },
          { id: "i3", text: "Fetal heart rate monitoring: assess baseline, variability, decelerations", isOptimal: true, findings: "Baseline 135, moderate variability, variable decelerations - fetal stress", scoreDelta: 2 },
          { id: "i4", text: "Complete blood count", isOptimal: true, findings: "Hb 9.5 (anemia), WBC 15,200, Hematocrit 28%", scoreDelta: 1 },
          { id: "i5", text: "Serum electrolytes, urea, creatinine", isOptimal: true, findings: "K 3.2 (hypokalemia from vomiting), Na 128 (hyponatremia), Cr 1.4 (mild azotemia)", scoreDelta: 2 },
          { id: "i6", text: "Type and crossmatch blood (prepare for emergency cesarean)", isOptimal: true, findings: "2 units PRBC matched and ready", scoreDelta: 2 }
        ]
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt: "Partograph and imaging confirm diagnosis. What is the obstetric situation?",
        availableActions: [
          { id: "d1", text: "Obstructed labor: prolonged first stage (18h), cervical dilation plateau at 7cm, high head station, pelvic contraction", isOptimal: true, findings: "Partograph crosses action line; clinical and radiologic pelvic contraction; cephalopelvic disproportion (CPD)", scoreDelta: 2 },
          { id: "d2", text: "Imminent uterine rupture (tachycardia, suprapubic tenderness, dehydration)", isOptimal: true, findings: "Signs present; risk if labor continues", scoreDelta: 2 },
          { id: "d3", text: "Fetal compromise (variable decelerations, high head position suggesting distress)", isOptimal: true, findings: "FHR changes present", scoreDelta: 1 }
        ]
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt: "Emergency intervention required. Correct electrolytes and proceed to LSCS immediately.",
        availableActions: [
          { id: "t1", text: "NPO status immediately; insert IV cannula (2 large-bore)", isOptimal: true, findings: "Prepare for emergency anesthesia", scoreDelta: 2 },
          { id: "t2", text: "Rapid fluid resuscitation with Ringer's lactate 1L bolus", isOptimal: true, findings: "Correct dehydration and electrolyte imbalance", scoreDelta: 2 },
          { id: "t3", text: "Potassium supplementation (if hypokalemia confirmed)", isOptimal: true, findings: "Add KCl 20mEq to IV fluids to correct K to 3.5", scoreDelta: 1 },
          { id: "t4", text: "Indwelling urinary catheter insertion", isOptimal: true, findings: "Monitor urine output and color; assess for myoglobinuria (uterine rupture risk)", scoreDelta: 1 },
          { id: "t5", text: "Emergency cesarean section (LSCS) via lower segment incision", isOptimal: true, findings: "Definitive treatment for obstructed labor; avoid prolonged attempt at vaginal delivery", scoreDelta: 2 },
          { id: "t6", text: "Active management of third stage (oxytocin, controlled cord traction, uterine massage)", isOptimal: true, findings: "Prevent PPH in already-anemic patient", scoreDelta: 2 },
          { id: "t7", text: "Broad-spectrum antibiotics (cefotaxime + metronidazole) peri-operatively", isOptimal: true, findings: "Prevent post-operative infection", scoreDelta: 1 }
        ]
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt: "Post-operative care. Monitor for complications. Plan future pregnancies.",
        availableActions: [
          { id: "f1", text: "Post-op ward monitoring: vitals, lochia, uterine involution, wound", isOptimal: true, findings: "Normal involution; lochia moderate; wound healing normal", scoreDelta: 2 },
          { id: "f2", text: "Continue antibiotics for 5-7 days post-op", isOptimal: true, findings: "Prevent infection", scoreDelta: 1 },
          { id: "f3", text: "Analgesia management and early mobilization", isOptimal: true, findings: "Reduce DVT risk; promote recovery", scoreDelta: 1 },
          { id: "f4", text: "Blood transfusion if Hb drops below 7g/dL", isOptimal: true, findings: "Current Hb 9.5; monitor for further drop", scoreDelta: 2 },
          { id: "f5", text: "Breastfeeding initiation and support", isOptimal: true, findings: "Baby healthy; early initiation encouraged", scoreDelta: 1 },
          { id: "f6", text: "Discharge counseling on family planning and future pregnancy advice (planned repeat LSCS)", isOptimal: true, findings: "VBAC not recommended given CPD; counsel on risks, benefits", scoreDelta: 2 }
        ]
      }
    ]
  },
  {
    title: "Postpartum Hemorrhage - Atonic Uterus",
    presentingComplaint: "28-year-old female, 2 hours post-vaginal delivery, excessive vaginal bleeding and hypotension",
    caseType: "Emergency",
    difficulty: "HARD" as const,
    estimatedMinutes: 40,
    examTags: ["NEXT_STEP1", "NEET_PG"],
    patientProfile: {
      age: 28,
      sex: "Female",
      occupation: "Teacher",
      history: "Normal vaginal delivery 2 hours ago. Third stage managed actively. Now presenting with heavy vaginal bleeding, dizziness, pallor."
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt: "Severe postpartum hemorrhage. Rapid history of delivery and blood loss.",
        availableActions: [
          { id: "h1", text: "Ask about delivery details and third stage management", isOptimal: true, findings: "Normal vaginal delivery, oxytocin given after delivery of baby, placenta delivered 15 min later", scoreDelta: 2 },
          { id: "h2", text: "Inquire about amount of bleeding: estimated blood loss and rate", isOptimal: true, findings: "Heavy vaginal bleeding since delivery; soaked 10+ pads in 2 hours (estimated >1000mL)", scoreDelta: 2 },
          { id: "h3", text: "Ask about symptoms: dizziness, palpitations, chest pain", isOptimal: true, findings: "Severe dizziness, palpitations, no chest pain", scoreDelta: 2 },
          { id: "h4", text: "Inquire about uterine contractions and size", isOptimal: true, findings: "Uterus felt soft and boggy", scoreDelta: 2 },
          { id: "h5", text: "Ask about anesthesia during delivery", isOptimal: true, findings: "Spinal anesthesia for delivery; still partially numb", scoreDelta: 1 },
          { id: "h6", text: "Ask about previous obstetric complications", isOptimal: true, findings: "No previous PPH; G2P1 (one previous child 3 years ago)", scoreDelta: 1 }
        ]
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt: "Assess maternal hemodynamic status and uterine contraction.",
        availableActions: [
          { id: "e1", text: "Check vital signs immediately: HR, BP, RR", isOptimal: true, findings: "HR 130 (tachycardia), BP 88/52 (hypotension - Class III hemorrhagic shock), RR 32", scoreDelta: 2 },
          { id: "e2", text: "Assess perfusion: skin color, temperature, capillary refill", isOptimal: true, findings: "Pale, cold extremities, capillary refill >3 seconds", scoreDelta: 2 },
          { id: "e3", text: "Palpate abdomen: uterine consistency, size, fundal height", isOptimal: true, findings: "Soft, boggy, atonic uterus; fundus at/above umbilicus; no contraction palpable", scoreDelta: 2 },
          { id: "e4", text: "Assess vaginal bleeding: color, amount, presence of clots", isOptimal: true, findings: "Bright red bleeding with clots; soaking pads rapidly", scoreDelta: 2 },
          { id: "e5", text: "Check for perineal trauma: lacerations, hematoma", isOptimal: true, findings: "First-degree perineal tear (minor); no hematoma", scoreDelta: 1 },
          { id: "e6", text: "Assess level of consciousness and mental status", isOptimal: true, findings: "Alert but confused, restless - signs of shock", scoreDelta: 2 }
        ]
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt: "Rapid labs and imaging confirm diagnosis. Initiate massive transfusion protocol.",
        availableActions: [
          { id: "i1", text: "Complete blood count: Hb, Hct baseline and serial", isOptimal: true, findings: "Hb 8.2 (dropped from 11.5 pre-delivery - acute blood loss anemia)", scoreDelta: 2 },
          { id: "i2", text: "Coagulation profile: PT, APPT, fibrinogen, D-dimer", isOptimal: true, findings: "PT 14, APPT 35, fibrinogen 180 - early coagulopathy from massive transfusion", scoreDelta: 2 },
          { id: "i3", text: "Serum electrolytes, urea, creatinine", isOptimal: true, findings: "K 4.8, Na 130 (hyponatremia from dilution), Cr 1.6 (AKI from hypoperfusion)", scoreDelta: 2 },
          { id: "i4", text: "Type and crossmatch: prepare massive transfusion protocol", isOptimal: true, findings: "4 units PRBC, 4 units FFP, 1 unit platelets activated; O-negative standby", scoreDelta: 2 },
          { id: "i5", text: "Pelvic ultrasound to rule out retained products of conception", isOptimal: true, findings: "Uterine cavity empty; no retained products; fundus flabby", scoreDelta: 1 }
        ]
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt: "Confirm diagnosis: postpartum hemorrhage from uterine atony.",
        availableActions: [
          { id: "d1", text: "Primary postpartum hemorrhage (>500mL within 24h of delivery) from uterine atony", isOptimal: true, findings: "Heavy bleeding 2h post-delivery; atonic uterus on exam; no trauma", scoreDelta: 2 },
          { id: "d2", text: "Hemorrhagic shock (Class III): HR >120, BP <90, altered mental status", isOptimal: true, findings: "HR 130, BP 88/52, confusion - shock present", scoreDelta: 2 },
          { id: "d3", text: "Retained placental fragments", isOptimal: false, findings: "Ultrasound empty; atony is cause", scoreDelta: 0 }
        ]
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt: "Emergency management: fluid resuscitation, uterotonics, hemostasis.",
        availableActions: [
          { id: "t1", text: "Two large-bore IV lines; massive transfusion protocol activation", isOptimal: true, findings: "Transfuse O-negative PRBC immediately; balanced transfusion (1:1:1 ratio)", scoreDelta: 2 },
          { id: "t2", text: "Bimanual compression of uterus to control bleeding", isOptimal: true, findings: "Hand per vagina compresses bleeding; temporary hemostasis achieved", scoreDelta: 2 },
          { id: "t3", text: "IV oxytocin 10-20 units (bolus or infusion)", isOptimal: true, findings: "Uterus contracts; bleeding decreases", scoreDelta: 2 },
          { id: "t4", text: "Misoprostol 800mcg per rectum (additional uterotonic)", isOptimal: true, findings: "Enhances uterine contraction", scoreDelta: 1 },
          { id: "t5", text: "Methylergonovine 0.2mg IM (if not contraindicated)", isOptimal: true, findings: "Potent uterotonic; sustained contraction", scoreDelta: 2 },
          { id: "t6", text: "Manual removal of retained clots; uterine curettage if retained products", isOptimal: true, findings: "Evacuate clots; uterus empties, contractions improve", scoreDelta: 2 },
          { id: "t7", text: "B-Lynch suture if bleeding continues despite conservative measures", isOptimal: true, findings: "Compress uterine body; successful hemostasis without hysterectomy", scoreDelta: 2 },
          { id: "t8", text: "Emergency hysterectomy if life-threatening hemorrhage uncontrolled", isOptimal: true, findings: "Last resort; avoided in this case with B-Lynch", scoreDelta: 1 }
        ]
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt: "Post-stabilization care. Monitor for complications and coagulopathy.",
        availableActions: [
          { id: "f1", text: "ICU admission; continuous monitoring of vitals, urine output, bleeding", isOptimal: true, findings: "Hb stabilizes at 9.5 after transfusion; UOP adequate", scoreDelta: 2 },
          { id: "f2", text: "Continue oxytocin infusion for 24-48h to maintain uterine contraction", isOptimal: true, findings: "Prevent recurrent bleeding", scoreDelta: 2 },
          { id: "f3", text: "Repeat coagulation studies and transfuse FFP/platelets as needed", isOptimal: true, findings: "Restore coagulation factors; prevent DIC", scoreDelta: 2 },
          { id: "f4", text: "Broad-spectrum antibiotics to prevent infection", isOptimal: true, findings: "Sepsis risk with PPH and transfusion", scoreDelta: 1 },
          { id: "f5", text: "Breastfeeding support when stable; early skin-to-skin contact", isOptimal: true, findings: "Oxytocin release aids uterine contraction", scoreDelta: 1 },
          { id: "f6", text: "Discharge education on warning signs; iron supplementation long-term", isOptimal: true, findings: "Counsel on PPH risk in future pregnancies", scoreDelta: 1 }
        ]
      }
    ]
  },
  {
    title: "Complete Abortion vs Incomplete Abortion",
    presentingComplaint: "20-year-old unmarried female with vaginal bleeding and passage of tissue products, uncertain gestational age",
    caseType: "OPD",
    difficulty: "MEDIUM" as const,
    estimatedMinutes: 25,
    examTags: ["NEXT_STEP1", "NEET_PG"],
    patientProfile: {
      age: 20,
      sex: "Female",
      occupation: "Student",
      history: "Unmarried; presents with bleeding and passage of tissue. Denies unsafe instrumentation. Unsure of exact dates; likely 8-10 weeks gestation."
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt: "Suspected abortion. Take non-judgmental history; assess gestational age and complications.",
        availableActions: [
          { id: "h1", text: "Ask about LMP and menstrual cycle regularity", isOptimal: true, findings: "LMP 8 weeks ago, regular 28-day cycles prior, now bleeding heavily", scoreDelta: 2 },
          { id: "h2", text: "Inquire about passage of tissue/products", isOptimal: true, findings: "Patient reports passage of gelatinous material 2 days ago", scoreDelta: 2 },
          { id: "h3", text: "Ask about abdominal pain and cramping", isOptimal: true, findings: "Severe cramping pain, now improved after tissue passage", scoreDelta: 2 },
          { id: "h4", text: "Inquire about fever, chills, or foul-smelling discharge", isOptimal: true, findings: "No fever; lochia appears normal odor", scoreDelta: 1 },
          { id: "h5", text: "Ask if instrumentation was attempted (unsafe methods)", isOptimal: true, findings: "Denies; spontaneous abortion", scoreDelta: 1 },
          { id: "h6", text: "Ask about prior pregnancies and contraceptive use", isOptimal: true, findings: "Primigravida; inconsistent contraception use", scoreDelta: 1 }
        ]
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt: "Assess for signs of complete vs incomplete abortion.",
        availableActions: [
          { id: "e1", text: "Check vital signs; assess hydration and hemodynamic stability", isOptimal: true, findings: "HR 92, BP 118/75, temp normal - stable", scoreDelta: 1 },
          { id: "e2", text: "Perform abdominal examination for tenderness, guarding, peritonitis signs", isOptimal: true, findings: "Mild suprapubic tenderness, no guarding - consistent with post-abortion", scoreDelta: 2 },
          { id: "e3", text: "Pelvic examination: cervical opening, uterine size, tenderness", isOptimal: true, findings: "Cervix open, products visible in os, uterus size 8-10 weeks, tender", scoreDelta: 2 },
          { id: "e4", text: "Assess amount and character of vaginal bleeding", isOptimal: true, findings: "Heavy bleeding currently; products passed but bleeding ongoing", scoreDelta: 2 },
          { id: "e5", text: "Check for signs of infection: purulent discharge, foul odor", isOptimal: true, findings: "No purulent discharge; normal lochia odor", scoreDelta: 1 }
        ]
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt: "Imaging and labs confirm completeness of abortion.",
        availableActions: [
          { id: "i1", text: "Transvaginal ultrasound to assess uterine cavity", isOptimal: true, findings: "Uterine cavity shows echogenic material (products); endometrial thickness 8mm", scoreDelta: 2 },
          { id: "i2", text: "Serum beta-hCG quantification", isOptimal: true, findings: "hCG 240 mIU/mL (detectable but lower than expected for 8 weeks - suggests incomplete)", scoreDelta: 2 },
          { id: "i3", text: "Complete blood count: hemoglobin and hematocrit", isOptimal: true, findings: "Hb 10.8 (mild anemia from blood loss), Hct 32%", scoreDelta: 1 },
          { id: "i4", text: "Blood group and Rh status (assess for RhIG need)", isOptimal: true, findings: "O-positive Rh+ (RhIG not needed)", scoreDelta: 1 },
          { id: "i5", text: "Serum electrolytes if heavy bleeding concerns", isOptimal: false, findings: "Patient stable; not immediately necessary", scoreDelta: 0 }
        ]
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt: "Determine completeness of abortion based on clinical and imaging findings.",
        availableActions: [
          { id: "d1", text: "Incomplete abortion: open cervix, uterine tenderness, retained products on ultrasound, detectable hCG", isOptimal: true, findings: "All criteria present; requires intervention", scoreDelta: 2 },
          { id: "d2", text: "Complete abortion: closed cervix, no products on ultrasound, falling hCG", isOptimal: false, findings: "Open cervix and products visible argue against", scoreDelta: 0 },
          { id: "d3", text: "Threatened abortion (ongoing pregnancy)", isOptimal: false, findings: "Tissue already passed; products visible", scoreDelta: 0 }
        ]
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt: "Manage incomplete abortion. Options: medical vs surgical evacuation.",
        availableActions: [
          { id: "t1", text: "Manual vacuum aspiration (MVA) or dilation & curettage (D&C)", isOptimal: true, findings: "Remove retained products; standard for incomplete abortion", scoreDelta: 2 },
          { id: "t2", text: "Medical management with misoprostol 600mcg (oral or vaginal)", isOptimal: true, findings: "May facilitate expulsion of remaining products; alternative to surgery", scoreDelta: 2 },
          { id: "t3", text: "Oxytocin infusion to support uterine contraction", isOptimal: true, findings: "Assist evacuation if medical management chosen", scoreDelta: 1 },
          { id: "t4", text: "Broad-spectrum antibiotics (amoxicillin-clavulanate or cephalosporin)", isOptimal: true, findings: "Prevent infection risk", scoreDelta: 1 },
          { id: "t5", text: "IV fluids and correction of anemia if needed", isOptimal: true, findings: "Prepare for procedure; ensure hemodynamic stability", scoreDelta: 1 }
        ]
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt: "Post-abortion care and family planning counseling.",
        availableActions: [
          { id: "f1", text: "Pelvic rest (no intercourse, tampons) for 2 weeks", isOptimal: true, findings: "Prevent infection and facilitate healing", scoreDelta: 1 },
          { id: "f2", text: "Assess repeat hCG at 1-2 weeks to confirm complete evacuation", isOptimal: true, findings: "hCG should fall to negative", scoreDelta: 1 },
          { id: "f3", text: "Counseling on contraceptive options and long-acting reversible contraception (LARC)", isOptimal: true, findings: "IUD, implant, or hormonal methods discussed", scoreDelta: 2 },
          { id: "f4", text: "Mental health support and counseling for emotional processing", isOptimal: true, findings: "Address psychological impact of abortion", scoreDelta: 2 },
          { id: "f5", text: "Education on safe sex practices and STI prevention", isOptimal: true, findings: "Reduce future risk", scoreDelta: 1 }
        ]
      }
    ]
  },
  {
    title: "Gestational Diabetes Mellitus",
    presentingComplaint: "30-year-old primigravida at 24 weeks gestation with elevated glucose on screening",
    caseType: "Ward",
    difficulty: "MEDIUM" as const,
    estimatedMinutes: 30,
    examTags: ["NEXT_STEP1", "NEET_PG"],
    patientProfile: {
      age: 30,
      sex: "Female",
      occupation: "Bank employee",
      history: "Primigravida at 24 weeks. BMI 28 (overweight). Family history of diabetes. Routine 75g OGTT shows elevated glucose."
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt: "Gestational diabetes diagnosis. Take history of risk factors and maternal glucose control.",
        availableActions: [
          { id: "h1", text: "Ask about family history of diabetes and age at diagnosis in relatives", isOptimal: true, findings: "Mother developed T2DM at age 45; brother also diabetic", scoreDelta: 2 },
          { id: "h2", text: "Inquire about symptoms of hyperglycemia (polyuria, polydipsia, fatigue)", isOptimal: true, findings: "Some fatigue attributed to pregnancy; no frank polydipsia", scoreDelta: 1 },
          { id: "h3", text: "Ask about prior glucose intolerance or gestational diabetes", isOptimal: true, findings: "Negative; first pregnancy", scoreDelta: 1 },
          { id: "h4", text: "Document BMI and weight prior to pregnancy", isOptimal: true, findings: "Pre-pregnancy weight 75kg, height 165cm, BMI 27.5 (overweight)", scoreDelta: 2 },
          { id: "h5", text: "Ask about dietary habits and physical activity level", isOptimal: true, findings: "Sedentary job, limited exercise, high refined carb intake", scoreDelta: 2 },
          { id: "h6", text: "Inquire about prior obstetric complications (large baby, stillbirth)", isOptimal: true, findings: "First pregnancy", scoreDelta: 1 }
        ]
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt: "General and obstetric examination. Assess metabolic and maternal status.",
        availableActions: [
          { id: "e1", text: "Measure BMI and blood pressure", isOptimal: true, findings: "BMI 28.5, BP 138/84 (elevated, consistent with metabolic syndrome)", scoreDelta: 2 },
          { id: "e2", text: "Abdominal examination: fundal height, fetal size estimate", isOptimal: true, findings: "Fundal height 26cm (appropriate for 24 weeks), no macrosomia yet", scoreDelta: 1 },
          { id: "e3", text: "Check for signs of hypertension (aim for <140/90)", isOptimal: true, findings: "BP 138/84; monitor for pre-eclampsia risk (common with GDM)", scoreDelta: 1 },
          { id: "e4", text: "Assess for skin signs of insulin resistance (acanthosis nigricans)", isOptimal: true, findings: "Mild dark thickening at neck fold", scoreDelta: 1 },
          { id: "e5", text: "Fetal heart rate and biometry assessment", isOptimal: true, findings: "FHR 150; biometry appropriate for 24 weeks", scoreDelta: 1 }
        ]
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt: "Confirm GDM diagnosis. Assess maternal metabolic status and plan monitoring.",
        availableActions: [
          { id: "i1", text: "75g oral glucose tolerance test (OGTT) results", isOptimal: true, findings: "Fasting 92mg/dL (elevated), 1h 185mg/dL, 2h 155mg/dL - diagnostic for GDM", scoreDelta: 2 },
          { id: "i2", text: "HbA1c to assess prior glycemic control", isOptimal: true, findings: "HbA1c 6.1% (suggests prior impaired glucose tolerance)", scoreDelta: 2 },
          { id: "i3", text: "Fasting glucose monitoring (home glucose logs)", isOptimal: true, findings: "Patient to maintain daily logs", scoreDelta: 2 },
          { id: "i4", text: "Liver and kidney function tests", isOptimal: true, findings: "AST 32, ALT 28, Cr 0.8 - normal", scoreDelta: 1 },
          { id: "i5", text: "Thyroid function tests (increased risk of hypothyroidism in GDM)", isOptimal: true, findings: "TSH 2.1, normal", scoreDelta: 1 }
        ]
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt: "Confirm gestational diabetes mellitus diagnosis.",
        availableActions: [
          { id: "d1", text: "Gestational diabetes mellitus (one or more OGTT values elevated per WHO criteria)", isOptimal: true, findings: "Fasting and 2h values elevated; diagnostic of GDM", scoreDelta: 2 },
          { id: "d2", text: "Associated with metabolic syndrome risk (elevated BMI, hypertension, insulin resistance)", isOptimal: true, findings: "Multiple risk factors present", scoreDelta: 1 }
        ]
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt: "Medical nutrition therapy (MNT) first-line. Start insulin if dietary measures insufficient.",
        availableActions: [
          { id: "t1", text: "Medical nutrition therapy: calorie restriction, carbohydrate counting, balanced diet", isOptimal: true, findings: "Refer to dietitian; individualized plan targeting 30% protein, 40% carbs, 30% fat", scoreDelta: 2 },
          { id: "t2", text: "Physical activity: 30 min moderate exercise 3-5x/week", isOptimal: true, findings: "Brisk walking, swimming encouraged; monitor for hypoglycemia", scoreDelta: 2 },
          { id: "t3", text: "Home glucose monitoring: 4-7 times daily (fasting, 2h post-meal)", isOptimal: true, findings: "Target fasting <95mg/dL, 2h post-meal <140mg/dL", scoreDelta: 2 },
          { id: "t4", text: "Start insulin if 2-3 weeks of diet/exercise fail to control glucose", isOptimal: true, findings: "If MNT ineffective, NPH or long-acting insulin begun", scoreDelta: 2 },
          { id: "t5", text: "Avoid metformin (limited safety data in pregnancy); use insulin if needed", isOptimal: true, findings: "Insulin preferred first-line in pregnancy", scoreDelta: 1 },
          { id: "t6", text: "Regular OB and endocrinology/nutrition follow-up every 2 weeks", isOptimal: true, findings: "Monitor glucose control and fetal growth", scoreDelta: 1 }
        ]
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt: "Long-term glucose monitoring and delivery planning.",
        availableActions: [
          { id: "f1", text: "Serial fetal ultrasounds every 4-6 weeks to assess for macrosomia", isOptimal: true, findings: "Monitor abdominal circumference; plan mode of delivery", scoreDelta: 2 },
          { id: "f2", text: "Deliver at 39 weeks if glucose well-controlled; earlier if complications", isOptimal: true, findings: "Reduce stillbirth risk; planned induction at 39 weeks", scoreDelta: 2 },
          { id: "f3", text: "Intrapartum glucose monitoring: maintain 100-180mg/dL during labor", isOptimal: true, findings: "Prevent neonatal hypoglycemia", scoreDelta: 1 },
          { id: "f4", text: "Neonatal monitoring post-delivery: glucose screening at birth and 2h", isOptimal: true, findings: "Screen for neonatal hypoglycemia", scoreDelta: 2 },
          { id: "f5", text: "Postpartum glucose screening: repeat OGTT at 6-12 weeks", isOptimal: true, findings: "Assess for persistent diabetes; T2DM risk counseling", scoreDelta: 2 },
          { id: "f6", text: "Breastfeeding support; encourage long-term to reduce T2DM risk", isOptimal: true, findings: "Protective effect for mother and infant", scoreDelta: 1 }
        ]
      }
    ]
  },
  {
    title: "Ruptured Ovarian Cyst with Hemoperitoneum",
    presentingComplaint: "25-year-old female with sudden lower abdominal pain, shock, and free fluid on ultrasound",
    caseType: "Emergency",
    difficulty: "MEDIUM" as const,
    estimatedMinutes: 35,
    examTags: ["NEXT_STEP1", "NEET_PG"],
    patientProfile: {
      age: 25,
      sex: "Female",
      occupation: "Student",
      history: "Sudden onset severe lower abdominal pain during exercise. Heavy vaginal bleeding not reported. Hypotensive on arrival."
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt: "Acute abdominal pain in reproductive-age female. Differentiate from other gynecologic emergencies.",
        availableActions: [
          { id: "h1", text: "Ask about LMP and menstrual cycle characteristics", isOptimal: true, findings: "LMP 10 days ago; regular 28-day cycles; no spotting", scoreDelta: 2 },
          { id: "h2", text: "Inquire about sudden onset pain and location", isOptimal: true, findings: "Sudden severe right lower quadrant pain, started during exercise", scoreDelta: 2 },
          { id: "h3", text: "Ask about prior cyst diagnosis or pelvic imaging", isOptimal: true, findings: "Ultrasound 2 months ago showed right ovarian cyst 4cm, follicular", scoreDelta: 2 },
          { id: "h4", text: "Inquire about symptoms of rupture (nausea, syncope)", isOptimal: true, findings: "Nausea, almost fainted at scene", scoreDelta: 2 },
          { id: "h5", text: "Ask about vaginal bleeding or discharge", isOptimal: true, findings: "No vaginal bleeding; normal lochia-free interval", scoreDelta: 1 },
          { id: "h6", text: "Ask about prior episodes of similar pain", isOptimal: true, findings: "Occasional RLQ discomfort past weeks; attributed to cyst", scoreDelta: 1 }
        ]
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt: "Assess hemodynamic status and peritoneal signs.",
        availableActions: [
          { id: "e1", text: "Check vital signs immediately", isOptimal: true, findings: "HR 125, BP 95/58, RR 28, temp 37°C - Class II hemorrhagic shock", scoreDelta: 2 },
          { id: "e2", text: "Assess perfusion: skin color, warmth, capillary refill", isOptimal: true, findings: "Pale, cool extremities, prolonged CRT", scoreDelta: 2 },
          { id: "e3", text: "Abdominal inspection: distension, tenderness, bruising", isOptimal: true, findings: "Mild distension, severe RLQ tenderness, no visible bruising", scoreDelta: 2 },
          { id: "e4", text: "Assess for rebound tenderness and rigidity", isOptimal: true, findings: "Positive rebound; guarding; mild rigidity - peritonitis", scoreDelta: 2 },
          { id: "e5", text: "Pelvic examination: vaginal bleeding, cervical motion tenderness", isOptimal: true, findings: "No vaginal bleeding; severe bilateral adnexal tenderness; CMT present", scoreDelta: 2 },
          { id: "e6", text: "Check for signs of ruptured pregnancy (Cullen sign, Grey Turner sign)", isOptimal: true, findings: "Absent; argues against ruptured ectopic", scoreDelta: 1 }
        ]
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt: "Ultrasound and labs confirm cyst rupture with hemoperitoneum.",
        availableActions: [
          { id: "i1", text: "Transvaginal ultrasound: assess ovarian cyst, free fluid", isOptimal: true, findings: "Right ovarian cyst now 2cm with rupture; free fluid in pelvis (hemoperi)", scoreDelta: 2 },
          { id: "i2", text: "Assess amount of free fluid and likelihood of bleeding source", isOptimal: true, findings: "Moderate free fluid; hemorrhagic cyst rupture likely source", scoreDelta: 2 },
          { id: "i3", text: "Serum beta-hCG to rule out ectopic pregnancy", isOptimal: true, findings: "hCG negative - not pregnancy-related", scoreDelta: 2 },
          { id: "i4", text: "Complete blood count: baseline Hb", isOptimal: true, findings: "Hb 10.5 (acute blood loss anemia; dropped from baseline ~12)", scoreDelta: 2 },
          { id: "i5", text: "Type and crossmatch blood", isOptimal: true, findings: "2 units PRBC available if transfusion needed", scoreDelta: 1 }
        ]
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt: "Confirm ruptured ovarian cyst as cause of acute abdomen and shock.",
        availableActions: [
          { id: "d1", text: "Ruptured hemorrhagic ovarian cyst with hemoperitoneum", isOptimal: true, findings: "Prior cyst on imaging, rupture on ultrasound, blood in pelvis", scoreDelta: 2 },
          { id: "d2", text: "Class II hemorrhagic shock from intra-abdominal bleeding", isOptimal: true, findings: "Tachycardia, hypotension, altered perfusion", scoreDelta: 2 },
          { id: "d3", text: "Ruptured ectopic pregnancy", isOptimal: false, findings: "Negative hCG rules out pregnancy", scoreDelta: 0 }
        ]
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt: "Resuscitate and plan surgical management. Most cases resolve conservatively.",
        availableActions: [
          { id: "t1", text: "Two large-bore IV lines; aggressive fluid resuscitation", isOptimal: true, findings: "1L bolus Ringer's lactate; reassess vitals", scoreDelta: 2 },
          { id: "t2", text: "Type and cross; transfuse PRBC if Hb drops or shock worsens", isOptimal: true, findings: "If vitals improve with fluids, avoid transfusion; observe", scoreDelta: 1 },
          { id: "t3", text: "NPO status; insert NG tube if planned for surgery", isOptimal: true, findings: "Prepare for possible laparoscopy", scoreDelta: 1 },
          { id: "t4", text: "Diagnostic laparoscopy (gold standard for diagnosis and treatment)", isOptimal: true, findings: "Visualize rupture, irrigate blood, assess for other pathology", scoreDelta: 2 },
          { id: "t5", text: "Hemostasis by cyst wall suturing or vessel ligation during laparoscopy", isOptimal: true, findings: "Preserve ovary if possible; hemorrhage controlled", scoreDelta: 2 },
          { id: "t6", text: "Oophorectomy only if massive bleeding uncontrolled or ischemic ovary", isOptimal: true, findings: "Ovary preserved in most cases; conserve fertility", scoreDelta: 1 }
        ]
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt: "Post-operative recovery and ovarian surveillance.",
        availableActions: [
          { id: "f1", text: "Post-op monitoring: vitals, drain output, urine output", isOptimal: true, findings: "Drain output minimal; patient recovering well", scoreDelta: 1 },
          { id: "f2", text: "Remove drain when output <10-20mL/day", isOptimal: true, findings: "Removed POD1", scoreDelta: 1 },
          { id: "f3", text: "Discharge after 24-48h if uncomplicated laparoscopic surgery", isOptimal: true, findings: "POD2 discharge with oral analgesics", scoreDelta: 1 },
          { id: "f4", text: "Return to normal activities: light duty 1 week, full activity 2-3 weeks", isOptimal: true, findings: "Standard post-laparoscopic recovery", scoreDelta: 1 },
          { id: "f5", text: "Pelvic ultrasound follow-up at 6-8 weeks to assess ovarian reserve", isOptimal: true, findings: "Monitor for adhesions and ovarian function", scoreDelta: 1 },
          { id: "f6", text: "Counsel on cyst recurrence risk and need for future imaging", isOptimal: true, findings: "Recurrence rate ~7%; monitor symptoms", scoreDelta: 1 }
        ]
      }
    ]
  },
  {
    title: "Severe Anemia in Pregnancy",
    presentingComplaint: "24-year-old primigravida from tribal area at 28 weeks with severe anemia (Hb 5g/dL) and dyspnea",
    caseType: "Ward",
    difficulty: "MEDIUM" as const,
    estimatedMinutes: 35,
    examTags: ["NEXT_STEP1", "NEET_PG"],
    patientProfile: {
      age: 24,
      sex: "Female",
      occupation: "Agricultural laborer",
      history: "Primigravida at 28 weeks from rural/tribal area. Poor nutrition, no ANC, symptoms of dyspnea, fatigue, palpitations. Likely iron deficiency + parasitic infection."
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt: "Severe anemia in pregnancy. Identify causes: nutritional, parasitic, hemolytic.",
        availableActions: [
          { id: "h1", text: "Ask about dietary intake: meat, eggs, leafy greens", isOptimal: true, findings: "Vegetarian diet; limited access to animal protein; poor iron intake", scoreDelta: 2 },
          { id: "h2", text: "Inquire about menstrual history prior to pregnancy", isOptimal: true, findings: "Heavy periods since adolescence; never evaluated", scoreDelta: 2 },
          { id: "h3", text: "Ask about prior anthelmintic treatment or worm symptoms", isOptimal: true, findings: "No deworming; occasional loose stools, no frank diarrhea", scoreDelta: 2 },
          { id: "h4", text: "Inquire about malaria exposure and fever history", isOptimal: true, findings: "Lives in endemic area; no recent fever", scoreDelta: 1 },
          { id: "h5", text: "Ask about symptoms of anemia (dyspnea, fatigue, palpitations)", isOptimal: true, findings: "Severe dyspnea on exertion, extreme fatigue, palpitations", scoreDelta: 2 },
          { id: "h6", text: "Ask about vaginal bleeding or blood loss", isOptimal: true, findings: "Normal pregnancy-related spotting; no heavy bleeding", scoreDelta: 1 },
          { id: "h7", text: "Ask about iron supplementation and adherence", isOptimal: true, findings: "Given iron but poor adherence due to GI side effects", scoreDelta: 2 }
        ]
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt: "Assess severity of anemia and obstetric status.",
        availableActions: [
          { id: "e1", text: "Check vital signs: HR, BP, RR", isOptimal: true, findings: "HR 118 (tachycardia), BP 110/68, RR 30 (tachypnea) - compensatory", scoreDelta: 2 },
          { id: "e2", text: "Assess for pallor of conjunctiva, nail beds, palms", isOptimal: true, findings: "Marked pallor; pale conjunctivae - severe anemia", scoreDelta: 2 },
          { id: "e3", text: "Check for glossitis, angular cheilitis (B12/folate deficiency signs)", isOptimal: true, findings: "Mild glossitis present", scoreDelta: 1 },
          { id: "e4", text: "Assess for lower extremity edema (preeclampsia/heart strain)", isOptimal: true, findings: "Mild bilateral ankle edema; not orthostatic", scoreDelta: 1 },
          { id: "e5", text: "Abdominal exam: fundal height, fetal growth assessment", isOptimal: true, findings: "Fundal height 26cm (appropriate for 28 weeks); no evidence IUGR", scoreDelta: 1 },
          { id: "e6", text: "Auscultate heart: look for murmurs (flow murmur in anemia)", isOptimal: true, findings: "Systolic ejection murmur present (anemia-related)", scoreDelta: 1 },
          { id: "e7", text: "Check fetal heart rate and movement", isOptimal: true, findings: "FHR 150; movements normal", scoreDelta: 1 }
        ]
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt: "Confirm iron deficiency anemia. Screen for parasites, vitamin deficiencies.",
        availableActions: [
          { id: "i1", text: "Complete blood count: Hb, MCV, MCHC, RBC indices", isOptimal: true, findings: "Hb 5.0, MCV 68 (microcytic), MCHC 25 (hypochromic) - iron deficiency pattern", scoreDelta: 2 },
          { id: "i2", text: "Iron studies: serum iron, TIBC, ferritin", isOptimal: true, findings: "Iron 25, TIBC 480, ferritin 8 (all indicate iron deficiency)", scoreDelta: 2 },
          { id: "i3", text: "Peripheral smear: assess RBC morphology", isOptimal: true, findings: "Microcytic, hypochromic RBCs; target cells; no abnormal parasites", scoreDelta: 1 },
          { id: "i4", text: "Stool examination for ova and parasites", isOptimal: true, findings: "Hookworm and roundworm ova identified (parasitic anemia component)", scoreDelta: 2 },
          { id: "i5", text: "B12 and folate levels", isOptimal: true, findings: "B12 normal, folate low-normal (pregnancy-related)", scoreDelta: 1 },
          { id: "i6", text: "Thyroid function tests (if goiter noted; iodine deficiency endemic areas)", isOptimal: true, findings: "TSH normal", scoreDelta: 1 }
        ]
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt: "Identify causes of severe anemia. Most likely multifactorial.",
        availableActions: [
          { id: "d1", text: "Iron deficiency anemia (primary): microcytic, hypochromic, low ferritin", isOptimal: true, findings: "Confirmed by studies; dietary + menstrual loss + pregnancy demands", scoreDelta: 2 },
          { id: "d2", text: "Parasitic anemia (secondary): hookworm/roundworm contribution", isOptimal: true, findings: "Ova in stool; worsens iron loss", scoreDelta: 2 },
          { id: "d3", text: "Folate deficiency (tertiary): low-normal folate in pregnancy setting", isOptimal: true, findings: "Contributing factor; increased demands in pregnancy", scoreDelta: 1 }
        ]
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt: "Urgent management: transfusion, iron, anthelmintics, and follow-up.",
        availableActions: [
          { id: "t1", text: "Packed cell transfusion to raise Hb to 7-8g/dL (critical threshold in pregnancy)", isOptimal: true, findings: "2 units PRBC transfused; Hb rises to 7.2 post-transfusion", scoreDelta: 2 },
          { id: "t2", text: "Iron supplementation: ferrous sulfate 200mg elemental iron TDS with vitamin C", isOptimal: true, findings: "Enhance GI absorption; continue for 3-6 months post-delivery", scoreDelta: 2 },
          { id: "t3", text: "Folic acid 5mg daily (especially with parasitic anemia and low-normal folate)", isOptimal: true, findings: "Support erythropoiesis; prevent further deficiency", scoreDelta: 2 },
          { id: "t4", text: "Anthelmintic therapy: albendazole 400mg single dose (safe in pregnancy 2nd/3rd trimester)", isOptimal: true, findings: "Treat hookworm/roundworm to prevent ongoing blood/iron loss", scoreDelta: 2 },
          { id: "t5", text: "Dietary counseling: increase heme iron (if culturally acceptable), legumes, fortified foods", isOptimal: true, findings: "Sustainable long-term improvement", scoreDelta: 1 },
          { id: "t6", text: "Monitor obstetric status: repeat CTG, assess for IUGR at 32-34 weeks", isOptimal: true, findings: "Severe anemia increases IUGR risk", scoreDelta: 2 }
        ]
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt: "Post-transfusion monitoring and delivery planning.",
        availableActions: [
          { id: "f1", text: "Repeat CBC at 2 weeks; assess Hb response to iron", isOptimal: true, findings: "Hb rises to 8.5 at 2 weeks; reticulocyte count elevated (appropriate)", scoreDelta: 2 },
          { id: "f2", text: "Continue iron supplementation throughout pregnancy and 3 months postpartum", isOptimal: true, findings: "Prevent relapse; replenish iron stores", scoreDelta: 2 },
          { id: "f3", text: "Plan delivery at term (38-39 weeks) unless complications", isOptimal: true, findings: "Manage anemia before labor; plan for PPH risk", scoreDelta: 1 },
          { id: "f4", text: "Prepare for blood availability during labor/delivery (PPH risk higher with anemia)", isOptimal: true, findings: "2 units PRBC cross-matched at delivery", scoreDelta: 2 },
          { id: "f5", text: "Counsel on postpartum dietary optimization and contraception", isOptimal: true, findings: "Prevent rapid repeat pregnancy; allow iron recovery", scoreDelta: 1 },
          { id: "f6", text: "Community health education: iron fortification, parasitic prevention, family planning", isOptimal: true, findings: "Public health approach to tribal area malnutrition", scoreDelta: 1 }
        ]
      }
    ]
  },
  {
    title: "Puerperal Sepsis",
    presentingComplaint: "26-year-old female, home delivery by untrained dai, now fever, foul lochia, uterine tenderness at POD2",
    caseType: "Emergency",
    difficulty: "MEDIUM" as const,
    estimatedMinutes: 35,
    examTags: ["NEXT_STEP1", "NEET_PG"],
    patientProfile: {
      age: 26,
      sex: "Female",
      occupation: "Housewife",
      history: "Delivered vaginally at home by untrained traditional birth attendant 2 days ago. Now presents with fever, purulent lochia, lower abdominal pain, and malaise."
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt: "Postpartum fever in home delivery. Assess infection risk and delivery complications.",
        availableActions: [
          { id: "h1", text: "Ask about labor duration and mode of delivery", isOptimal: true, findings: "Labored 12 hours; normal vaginal delivery; dai used unsterile instruments", scoreDelta: 2 },
          { id: "h2", text: "Inquire about presence of fever and chills in first 24h post-delivery", isOptimal: true, findings: "Fever started POD1 (now POD2); chills present", scoreDelta: 2 },
          { id: "h3", text: "Ask about lochia character and odor", isOptimal: true, findings: "Foul-smelling purulent discharge (pathognomonic for endometritis)", scoreDelta: 2 },
          { id: "h4", text: "Inquire about lower abdominal pain and uterine tenderness", isOptimal: true, findings: "Severe lower abdominal pain; uterus felt tender on palpation", scoreDelta: 2 },
          { id: "h5", text: "Ask about systemic symptoms: malaise, headache, myalgias", isOptimal: true, findings: "Severe malaise, headache, body aches", scoreDelta: 1 },
          { id: "h6", text: "Ask about delivery complications: prolonged labor, instrumentation, membrane rupture duration", isOptimal: true, findings: "Membranes ruptured 16h before delivery; multiple vaginal examinations", scoreDelta: 2 },
          { id: "h7", text: "Ask about prior antibiotic prophylaxis or treatment", isOptimal: true, findings: "No antibiotics given at or after delivery", scoreDelta: 2 }
        ]
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt: "Assess severity of sepsis and source of infection.",
        availableActions: [
          { id: "e1", text: "Check vital signs: temperature, HR, BP, RR", isOptimal: true, findings: "Temp 39.8°C, HR 128, BP 98/62 (hypotension), RR 32 - SIRS criteria met", scoreDelta: 2 },
          { id: "e2", text: "Assess perfusion: skin warmth, color, capillary refill", isOptimal: true, findings: "Warm extremities, pink; CRT normal - warm sepsis", scoreDelta: 1 },
          { id: "e3", text: "Abdominal exam: uterine tenderness, size, contraction", isOptimal: true, findings: "Severe suprapubic and uterine body tenderness; uterus soft, enlarged (>12cm fundal height)", scoreDelta: 2 },
          { id: "e4", text: "Inspect lochia: color, odor, volume", isOptimal: true, findings: "Copious purulent foul-smelling discharge (endometritis)", scoreDelta: 2 },
          { id: "e5", text: "Examine perineum and episiotomy/tear site", isOptimal: true, findings: "First-degree perineal tear, not infected; perineal skin clean", scoreDelta: 1 },
          { id: "e6", text: "Check for signs of peritonitis: rebound tenderness, guarding", isOptimal: true, findings: "Guarding present, mild rebound - advanced endometritis", scoreDelta: 2 },
          { id: "e7", text: "Assess mental status and signs of septic shock", isOptimal: true, findings: "Alert but toxic appearance; lactic acidosis suspected", scoreDelta: 1 }
        ]
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt: "Confirm infection source and severity. Blood cultures essential.",
        availableActions: [
          { id: "i1", text: "Blood cultures before antibiotics (aerobic + anaerobic)", isOptimal: true, findings: "Cultures positive for Group B Streptococcus and E. coli (polymicrobial)", scoreDelta: 2 },
          { id: "i2", text: "Complete blood count: WBC, hemoglobin", isOptimal: true, findings: "WBC 22,500 (elevated), Hb 9.5 (post-delivery anemia)", scoreDelta: 2 },
          { id: "i3", text: "Prothrombin time, aPTT, fibrinogen (DIC screen)", isOptimal: true, findings: "PT 16, aPTT 42, fibrinogen 220 - early coagulopathy", scoreDelta: 2 },
          { id: "i4", text: "Lactate, serum electrolytes, renal function", isOptimal: true, findings: "Lactate 3.8 (lactic acidosis), K 3.5, Cr 1.3 (AKI)", scoreDelta: 2 },
          { id: "i5", text: "Transvaginal ultrasound to assess uterine cavity and placental retention", isOptimal: true, findings: "Echogenic material in uterine cavity (retained products/clots)", scoreDelta: 2 },
          { id: "i6", text: "Urinalysis and urine culture (rule out UTI contributor)", isOptimal: true, findings: "Mild pyuria; urine culture pending", scoreDelta: 1 }
        ]
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt: "Confirm puerperal sepsis with endometritis as source.",
        availableActions: [
          { id: "d1", text: "Puerperal sepsis (fever + systemic signs within 10 days of delivery) from endometritis", isOptimal: true, findings: "Fever, hypotension, tachycardia, tachypnea, foul lochia, uterine tenderness = endometritis", scoreDelta: 2 },
          { id: "d2", text: "Septic shock with lactic acidosis and organ dysfunction", isOptimal: true, findings: "Hypotension, elevated lactate, acute kidney injury - septic shock present", scoreDelta: 2 },
          { id: "d3", text: "Risk factors: home delivery, untrained attendant, prolonged ROM, multiple vaginal exams, no prophylaxis", isOptimal: true, findings: "All present", scoreDelta: 1 }
        ]
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt: "Urgent sepsis management: fluids, broad-spectrum antibiotics, uterine evacuation.",
        availableActions: [
          { id: "t1", text: "Two large-bore IVs; aggressive fluid resuscitation (30mL/kg Ringer's lactate bolus)", isOptimal: true, findings: "1L bolus given over 30min; reassess vitals", scoreDelta: 2 },
          { id: "t2", text: "Broad-spectrum antibiotics immediately (before culture results)", isOptimal: true, findings: "Cefotaxime 2g IV Q6H + metronidazole 500mg IV Q8H (cover gram+, gram-, anaerobes)", scoreDelta: 2 },
          { id: "t3", text: "Blood cultures taken; await sensitivity for tailored therapy", isOptimal: true, findings: "Results guide de-escalation/optimization", scoreDelta: 1 },
          { id: "t4", text: "Uterine evacuation: manual removal of retained products/clots", isOptimal: true, findings: "Manual evacuation clears uterine cavity of infected material", scoreDelta: 2 },
          { id: "t5", text: "Vasopressor support if hypotension persists after fluids (norepinephrine)", isOptimal: true, findings: "BP improves to 108/70 after fluids; norepinephrine not needed", scoreDelta: 1 },
          { id: "t6", text: "ICU admission for monitoring and organ support", isOptimal: true, findings: "High-dependency care needed", scoreDelta: 2 },
          { id: "t7", text: "Supportive care: oxygen, ventilatory support if needed, electrolyte correction", isOptimal: true, findings: "Target lactate normalization", scoreDelta: 1 }
        ]
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt: "Post-treatment monitoring and recovery.",
        availableActions: [
          { id: "f1", text: "Monitor fever curve: defervescence expected within 48-72h of antibiotics", isOptimal: true, findings: "Fever resolved by POD5", scoreDelta: 2 },
          { id: "f2", text: "Continue antibiotics for 7-10 days (or until defervescence + clinical improvement)", isOptimal: true, findings: "Completed 10-day course", scoreDelta: 1 },
          { id: "f3", text: "Repeat blood cultures if fever persists >72h (rule out septic thrombophlebitis)", isOptimal: true, findings: "Not needed; fever resolved", scoreDelta: 1 },
          { id: "f4", text: "Repeat CBC, lactate at 48h to assess treatment response", isOptimal: true, findings: "WBC down to 15,500; lactate normalized", scoreDelta: 1 },
          { id: "f5", text: "Encourage breastfeeding once maternal condition stabilizes (antibiotics compatible)", isOptimal: true, findings: "Resume breastfeeding when clinically able", scoreDelta: 1 },
          { id: "f6", text: "Discharge counseling on community health education and safe delivery practices", isOptimal: true, findings: "Educate on institutional delivery, trained attendants", scoreDelta: 1 }
        ]
      }
    ]
  },
  // PEDIATRICS CASES (6)
  {
    title: "Severe Acute Malnutrition (SAM)",
    presentingComplaint: "2-year-old from rural India with severe wasting, weight-for-height <-3SD, and edema",
    caseType: "Ward",
    difficulty: "MEDIUM" as const,
    estimatedMinutes: 40,
    examTags: ["NEXT_STEP1", "NEET_PG"],
    patientProfile: {
      age: 2,
      sex: "Male",
      occupation: "N/A",
      history: "2-year-old from Jharkhand tribal area. Severe wasting, mild bilateral pedal edema. Hx poor nutrition, recurrent infections. Weight 8.5kg (expected 12-13kg), height 85cm."
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt: "Severe malnutrition in toddler. Assess feeding, infection, socioeconomic factors.",
        availableActions: [
          { id: "h1", text: "Ask about birth weight and growth milestones", isOptimal: true, findings: "BW 2.8kg (low); delayed milestones (walking at 18mo)", scoreDelta: 2 },
          { id: "h2", text: "Inquire about feeding: breast milk, complementary foods, current diet", isOptimal: true, findings: "Breastfed until 18mo; limited complementary feeding (rice water, thin gruel)", scoreDelta: 2 },
          { id: "h3", text: "Ask about recent infections and diarrheal illnesses", isOptimal: true, findings: "Recurrent diarrhea; last episode 2 weeks ago; unclear treatment", scoreDelta: 2 },
          { id: "h4", text: "Inquire about appetite and vomiting", isOptimal: true, findings: "Poor appetite; occasional vomiting after feeds", scoreDelta: 1 },
          { id: "h5", text: "Ask about household food security and socioeconomic status", isOptimal: true, findings: "Below poverty line; irregular meal availability", scoreDelta: 2 },
          { id: "h6", text: "Ask about vaccination status and prior medical care", isOptimal: true, findings: "Partially vaccinated; no prior hospital admissions", scoreDelta: 1 }
        ]
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt: "Assess severity of malnutrition and complications.",
        availableActions: [
          { id: "e1", text: "Calculate z-scores for weight-for-height, weight-for-age", isOptimal: true, findings: "WFH -3.2 (severe wasting), WFA -3.5 (severe underweight) = SAM", scoreDelta: 2 },
          { id: "e2", text: "Check for edema (pitting bilateral pedal/periorbital)", isOptimal: true, findings: "Mild bilateral pedal edema, mild periorbital puffiness - kwashiorkor component", scoreDelta: 2 },
          { id: "e3", text: "Assess skin and hair: dermatitis, hair color, texture", isOptimal: true, findings: "Dry peeling skin, sparse brittle hair with color change (reddish tinge) = protein deficiency", scoreDelta: 2 },
          { id: "e4", text: "Check for hepatomegaly (common in malnutrition)", isOptimal: true, findings: "Hepatomegaly 2cm below RCM; liver soft", scoreDelta: 1 },
          { id: "e5", text: "Assess mental status and interaction", isOptimal: true, findings: "Apathetic, minimal interaction, irritable when stimulated", scoreDelta: 2 },
          { id: "e6", text: "Look for signs of recent infection or active disease", isOptimal: true, findings: "Mild conjunctivitis; no fever; mild cough", scoreDelta: 1 },
          { id: "e7", text: "Check for anthropometric red flags: visible ribs, loss of subcutaneous fat", isOptimal: true, findings: "Marked wasting; ribs prominent; severe subcutaneous fat loss", scoreDelta: 2 }
        ]
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt: "Assess metabolic and nutritional status. Screen for infections and deficiencies.",
        availableActions: [
          { id: "i1", text: "Complete blood count", isOptimal: true, findings: "Hb 8.2 (anemia), WBC 9.5 (relatively low for infection risk), Plt 250", scoreDelta: 2 },
          { id: "i2", text: "Serum albumin and total protein", isOptimal: true, findings: "Albumin 2.1g/dL (severe hypoalbuminemia), TP 5.5g/dL", scoreDelta: 2 },
          { id: "i3", text: "Serum electrolytes (K, Na, Mg, Ca, Ph)", isOptimal: true, findings: "K 3.2 (hypokalemia), Na 128 (dilutional hyponatremia), Mg 1.5 (low), Ca 7.5, Ph 2.8 (low)", scoreDelta: 2 },
          { id: "i4", text: "Blood glucose and liver function tests", isOptimal: true, findings: "BG 78, AST 45, ALT 32, ALP 180, bilirubin 0.8 (mild elevation)", scoreDelta: 1 },
          { id: "i5", text: "Stool examination (ova, cysts, culture)", isOptimal: true, findings: "Hookworm and ascaris ova present; no acute bacterial pathogens", scoreDelta: 2 },
          { id: "i6", text: "Vitamin A level (assess for deficiency)", isOptimal: true, findings: "Vit A low-normal (risk of xerophthalmia)", scoreDelta: 1 }
        ]
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt: "Confirm SAM with edema (marasmus-kwashiorkor mix).",
        availableActions: [
          { id: "d1", text: "Severe acute malnutrition with edema (marasmus-kwashiorkor): WFH <-3SD, edema, hypoalbuminemia", isOptimal: true, findings: "Severe wasting + edema + low protein = severe form", scoreDelta: 2 },
          { id: "d2", text: "Associated conditions: anemia, parasitic infections (hookworm, ascaris), vitamin A deficiency", isOptimal: true, findings: "Confirmed by labs and stool exam", scoreDelta: 2 }
        ]
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt: "WHO 10-step SAM management protocol. F-75 → F-100 feeds, correction of deficiencies.",
        availableActions: [
          { id: "t1", text: "Admit to nutritional rehabilitation unit; start WHO 10-step protocol", isOptimal: true, findings: "Intensive supervision required", scoreDelta: 2 },
          { id: "t2", text: "Step 1: Assess and treat immediate complications (infections, dehydration, electrolyte imbalance)", isOptimal: true, findings: "Treat hypokalemia with KCl; manage dehydration cautiously (not rapid)", scoreDelta: 2 },
          { id: "t3", text: "Step 2: Start F-75 (low-energy therapeutic milk: 75kcal/100mL, 0.9g protein/100mL)", isOptimal: true, findings: "NG feeding of F-75, 100mL/kg/day in small frequent feeds", scoreDelta: 2 },
          { id: "t4", text: "Step 3: Micronutrient supplementation (iron, folic acid, vitamin A, zinc, magnesium)", isOptimal: true, findings: "Multivitamin, iron given; Vitamin A 200,000 IU (corrects deficiency risk)", scoreDelta: 2 },
          { id: "t5", text: "Step 4: Anthelmintic therapy: albendazole 400mg (after stabilization, not acute phase)", isOptimal: true, findings: "Give after 2 weeks of nutrition to avoid malabsorption worsening", scoreDelta: 2 },
          { id: "t6", text: "Step 5: Transition to F-100 (therapeutic milk 100kcal, 2.9g protein) after clinical improvement (week 2-3)", isOptimal: true, findings: "Gradual increase; watch for refeeding syndrome", scoreDelta: 2 },
          { id: "t7", text: "Step 6: Introduce local complementary foods (mashed vegetables, legumes, soft foods)", isOptimal: true, findings: "Gradual after 2-3 weeks; maintain family involvement", scoreDelta: 1 }
        ]
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt: "Long-term nutritional rehabilitation and prevention.",
        availableActions: [
          { id: "f1", text: "Monitor daily weight gain (target 10-15g/kg/day)", isOptimal: true, findings: "Child gains 800g in first month; good progress", scoreDelta: 2 },
          { id: "f2", text: "Monitor for refeeding syndrome: electrolytes, fluid status, cardiac symptoms", isOptimal: true, findings: "No signs of refeeding syndrome; electrolytes normalize", scoreDelta: 2 },
          { id: "f3", text: "Psychosocial support: stimulation, play activities, family counseling", isOptimal: true, findings: "Engage parents in feeding, play therapy", scoreDelta: 1 },
          { id: "f4", text: "Discharge after weight-for-height reaches -1.5SD (after 8-12 weeks)", isOptimal: true, findings: "Child reaches discharge criterion at 10 weeks", scoreDelta: 2 },
          { id: "f5", text: "Post-discharge follow-up: monthly clinic visits for 6 months", isOptimal: true, findings: "Monitor catch-up growth, prevent relapse", scoreDelta: 1 },
          { id: "f6", text: "Community counseling: food security, ICDS enrollment, immunization catch-up", isOptimal: true, findings: "Long-term prevention strategy", scoreDelta: 1 }
        ]
      }
    ]
  },
  {
    title: "Neonatal Resuscitation - Birth Asphyxia",
    presentingComplaint: "Term newborn with meconium-stained liquor, low Apgar score of 3 at 1 minute, cyanosis",
    caseType: "Emergency",
    difficulty: "HARD" as const,
    estimatedMinutes: 25,
    examTags: ["NEXT_STEP1", "NEET_PG"],
    patientProfile: {
      age: 0,
      sex: "N/A",
      occupation: "N/A",
      history: "Term male baby born vaginally after prolonged labor, meconium-stained amniotic fluid, failed to cry immediately. Apgar 3 at 1min (activity absent, pulse <100, grimace only)."
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt: "Rapid history of delivery and fetal distress signs.",
        availableActions: [
          { id: "h1", text: "Ask about meconium in amniotic fluid and timing", isOptimal: true, findings: "Thick meconium-stained fluid noted at rupture of membranes 8h before delivery", scoreDelta: 2 },
          { id: "h2", text: "Inquire about fetal heart rate patterns (decelerations, tachycardia)", isOptimal: true, findings: "Variable decelerations noted 2h before delivery; baseline 140-150", scoreDelta: 2 },
          { id: "h3", text: "Ask about delivery complications (forceps, vacuum, prolonged labor)", isOptimal: true, findings: "Prolonged second stage (2h); vacuum-assisted delivery", scoreDelta: 2 },
          { id: "h4", text: "Ask about resuscitation started: who, when, initial steps", isOptimal: true, findings: "Delivery attendant called for help; basic resuscitation attempted", scoreDelta: 1 },
          { id: "h5", text: "Ask about maternal complications (fever, infection signs)", isOptimal: true, findings: "Maternal temp 38.2°C; possible amnionitis", scoreDelta: 1 }
        ]
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt: "Rapid neonatal assessment and Apgar scoring. Assess airway and initiate resuscitation.",
        availableActions: [
          { id: "e1", text: "Assess appearance (color, tone)", isOptimal: true, findings: "Central cyanosis, severe hypotonia (limp), minimal activity", scoreDelta: 2 },
          { id: "e2", text: "Check respiratory effort (cry strength, work of breathing)", isOptimal: true, findings: "No cry; minimal respiratory effort; no chest rise", scoreDelta: 2 },
          { id: "e3", text: "Assess heart rate (palpate cord, listen to apex)", isOptimal: true, findings: "HR 60-80 (bradycardia <100)", scoreDelta: 2 },
          { id: "e4", text: "Assess reflex irritability (response to stimulation)", isOptimal: true, findings: "Grimace only; no vigorous cry", scoreDelta: 2 },
          { id: "e5", text: "Assign Apgar score at 1 minute", isOptimal: true, findings: "Apgar 1min: A(0) + P(1) + G(1) + R(1) + S(0) = 3 (severely depressed)", scoreDelta: 2 },
          { id: "e6", text: "Check for meconium in mouth and assess airway", isOptimal: true, findings: "Thick meconium visible in oropharynx; impending meconium aspiration", scoreDelta: 2 }
        ]
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt: "No time for extensive investigation; proceed with NRP protocol. Cord blood and ABG later.",
        availableActions: [
          { id: "i1", text: "Cord blood sampling for pH, pCO2, pO2 (assess acidosis severity)", isOptimal: true, findings: "pH 6.95 (acidosis), pCO2 68 (hypercapnia), pO2 12 (hypoxemia) = metabolic + respiratory", scoreDelta: 2 },
          { id: "i2", text: "Cord arterial vs venous discrimination (check blood gases)", isOptimal: true, findings: "Arterial sample taken; confirms severe fetal acidosis", scoreDelta: 1 },
          { id: "i3", text: "Post-resuscitation ABG (at 5-10 min after intervention)", isOptimal: true, findings: "Post-resuscitation: pH 7.15, pCO2 45, pO2 85 - improving", scoreDelta: 1 }
        ]
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt: "Perinatal asphyxia confirmed. NRP algorithm indicates need for resuscitation.",
        availableActions: [
          { id: "d1", text: "Birth asphyxia: Apgar 3 at 1min, thick meconium, acidosis, hypoxemia", isOptimal: true, findings: "Severe perinatal asphyxia; risk of hypoxic-ischemic encephalopathy (HIE)", scoreDelta: 2 },
          { id: "d2", text: "Presumed meconium aspiration risk given thick meconium and low effort breathing", isOptimal: true, findings: "Will monitor for respiratory distress", scoreDelta: 1 }
        ]
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt: "Immediate NRP resuscitation: A-B-C protocol. Rapid sequence.",
        availableActions: [
          { id: "t1", text: "Suction mouth and oropharynx to remove meconium (under direct visualization)", isOptimal: true, findings: "Thick meconium suctioned; airway cleared", scoreDelta: 2 },
          { id: "t2", text: "Position supine on warmed surface; dry, stimulate gently", isOptimal: true, findings: "Baby placed on radiant warmer; dried", scoreDelta: 2 },
          { id: "t3", text: "Open airway: head neutral, slightly extended; bag-mask ventilation (21% O2 initially, escalate if needed)", isOptimal: true, findings: "BMV started at FiO2 21%, rate 40-60/min", scoreDelta: 2 },
          { id: "t4", text: "Check response at 15 seconds: heart rate, tone, effort", isOptimal: true, findings: "HR still 60; minimal improvement; escalate", scoreDelta: 2 },
          { id: "t5", text: "Increase FiO2 to 100% if HR remains <100 after BMV", isOptimal: true, findings: "FiO2 increased to 100%; continue BMV", scoreDelta: 2 },
          { id: "t6", text: "Consider intubation if no response after 15-30 seconds of effective BMV", isOptimal: true, findings: "Prepare for intubation; anticipate difficult airway from meconium", scoreDelta: 2 },
          { id: "t7", text: "Intubate and suction below vocal cords to remove meconium", isOptimal: true, findings: "Endotracheal tube placed; meconium suctioned from below cords", scoreDelta: 2 },
          { id: "t8", text: "Chest compressions if HR <60 after 30 seconds of adequate ventilation", isOptimal: true, findings: "After ventilation HR improves to 90; no chest compressions needed yet", scoreDelta: 1 },
          { id: "t9", text: "IV epinephrine if HR remains <60 despite ventilation and compressions", isOptimal: true, findings: "Not needed; HR improves with ventilation", scoreDelta: 1 }
        ]
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt: "Post-resuscitation care. Assess for HIE and manage complications.",
        availableActions: [
          { id: "f1", text: "Reassess at 5 and 10 minutes: Apgar at 5min", isOptimal: true, findings: "Apgar at 5min: 6 (improving); tone better, some cry", scoreDelta: 2 },
          { id: "f2", text: "Admit to NICU for monitoring and management of HIE risk", isOptimal: true, findings: "NICU admission for intensive care", scoreDelta: 2 },
          { id: "f3", text: "Maintain normothermia and support ventilation as needed", isOptimal: true, findings: "Continue oxygen; target SpO2 85-95%; avoid hyperoxia", scoreDelta: 2 },
          { id: "f4", text: "Therapeutic hypothermia if HIE suspected (core temp 33-34°C for 72h)", isOptimal: true, findings: "Criteria met (Apgar <5 at 10min, acidosis); initiate cooling protocol", scoreDelta: 2 },
          { id: "f5", text: "Serial neurologic exams; Sarnat scoring for HIE grading", isOptimal: true, findings: "Neonatal encephalopathy present; Sarnat grade II", scoreDelta: 1 },
          { id: "f6", text: "Monitor for complications: seizures, DIC, acute kidney injury, myocardial dysfunction", isOptimal: true, findings: "Frequent assessments; seizure prophylaxis considered", scoreDelta: 1 }
        ]
      }
    ]
  },
  {
    title: "Febrile Seizure - Complex",
    presentingComplaint: "18-month-old with prolonged seizure (>15 minutes), fever 39.5°C, post-ictal confusion",
    caseType: "Emergency",
    difficulty: "MEDIUM" as const,
    estimatedMinutes: 30,
    examTags: ["NEXT_STEP1", "NEET_PG"],
    patientProfile: {
      age: 1.5,
      sex: "Male",
      occupation: "N/A",
      history: "18-month-old with 3-day history of fever; today sudden onset seizure lasting 20+ minutes. First seizure. Mother gave paracetamol but seizure continued."
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt: "Seizure in febrile child. Assess seizure characteristics and fever source.",
        availableActions: [
          { id: "h1", text: "Ask about seizure onset: sudden vs gradual, activity before seizure", isOptimal: true, findings: "Sudden onset during play; no warning signs", scoreDelta: 2 },
          { id: "h2", text: "Inquire about seizure duration and recovery time", isOptimal: true, findings: "Seizure lasted 22 minutes (prolonged >15min = complex); post-ictal confusion 10 min", scoreDelta: 2 },
          { id: "h3", text: "Ask about seizure type: generalized tonic-clonic, focal, myoclonic", isOptimal: true, findings: "Generalized tonic-clonic seizure; bilateral involvement", scoreDelta: 2 },
          { id: "h4", text: "Inquire about fever onset and progression", isOptimal: true, findings: "Fever for 3 days, peak 39.5°C", scoreDelta: 1 },
          { id: "h5", text: "Ask about prior seizures or febrile seizures in family", isOptimal: true, findings: "First seizure; no family history of seizures or febrile seizures", scoreDelta: 2 },
          { id: "h6", text: "Ask about prodromal symptoms: cough, diarrhea, rash", isOptimal: true, findings: "2-day cough, no diarrhea, no rash", scoreDelta: 1 },
          { id: "h7", text: "Ask about interventions before hospital: medications given, what stopped seizure", isOptimal: true, findings: "Paracetamol given; seizure self-terminated; no emergency drugs given", scoreDelta: 1 }
        ]
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt: "Post-ictal assessment and search for seizure source.",
        availableActions: [
          { id: "e1", text: "Check vital signs: temperature, HR, RR, BP", isOptimal: true, findings: "Temp 39.5°C, HR 140 (post-seizure), RR 40, BP 105/65 (age-appropriate)", scoreDelta: 1 },
          { id: "e2", text: "Assess level of consciousness and post-ictal state", isOptimal: true, findings: "Post-ictal confusion, drowsy but arousable", scoreDelta: 1 },
          { id: "e3", text: "Perform neurologic exam: focal deficits, tone, reflexes", isOptimal: true, findings: "No focal deficits; normal tone bilaterally; normal reflexes", scoreDelta: 2 },
          { id: "e4", text: "Check for meningeal signs: nuchal rigidity, Kernig/Brudzinski signs", isOptimal: true, findings: "No nuchal rigidity; Kernig negative (reassuring but still need LP)", scoreDelta: 2 },
          { id: "e5", text: "Inspect skin for rash (meningococcal, viral)", isOptimal: true, findings: "No petechial/purpuric rash; mild erythematous blanching rash chest/face (viral?)", scoreDelta: 1 },
          { id: "e6", text: "Examine ears (otitis), throat (pharyngitis), lungs (pneumonia)", isOptimal: true, findings: "Mild erythematous pharyngitis; lungs clear", scoreDelta: 1 },
          { id: "e7", text: "Check fontanelle if <18mo (bulging suggests intracranial pressure)", isOptimal: true, findings: "Anterior fontanelle soft, not bulging", scoreDelta: 1 }
        ]
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt: "Rule out serious infection especially meningitis in prolonged febrile seizure.",
        availableActions: [
          { id: "i1", text: "Lumbar puncture (LP) - essential to rule out meningitis given prolonged seizure", isOptimal: true, findings: "CSF: WBC 45 (predominantly lymphocytes), protein 35, glucose 58 (CSF:serum ratio normal), Gram stain negative", scoreDelta: 2 },
          { id: "i2", text: "CSF culture and viral PCR", isOptimal: true, findings: "Culture negative at 48h; viral panel pending (likely viral meningitis)", scoreDelta: 2 },
          { id: "i3", text: "Complete blood count", isOptimal: true, findings: "WBC 12,500 (mild elevation), Hb 10.5, platelets normal", scoreDelta: 1 },
          { id: "i4", text: "Blood culture (if considering bacterial infection)", isOptimal: true, findings: "Pending; negative at 48h", scoreDelta: 1 },
          { id: "i5", text: "EEG if seizure recurs or atypical features", isOptimal: true, findings: "EEG post-ictal; no spike-wave; normal background slowing expected", scoreDelta: 1 }
        ]
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt: "Confirm complex febrile seizure. Rule out meningitis.",
        availableActions: [
          { id: "d1", text: "Complex febrile seizure: fever >38.5°C, generalized tonic-clonic, prolonged (>15min), post-ictal confusion", isOptimal: true, findings: "All criteria for complex FS present", scoreDelta: 2 },
          { id: "d2", text: "Likely viral source (pharyngitis, viral exanthem); CSF suggests viral meningitis", isOptimal: true, findings: "Mild CSF pleocytosis, normal glucose; viral etiology likely", scoreDelta: 2 },
          { id: "d3", text: "Not a first unprovoked seizure/epilepsy (provoked by fever)", isOptimal: true, findings: "Clear fever trigger", scoreDelta: 1 }
        ]
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt: "Acute seizure management and fever control. Preventive therapy discussion.",
        availableActions: [
          { id: "t1", text: "Rectal diazepam 5mg (or IV lorazepam 0.1mg/kg) if seizure recurs", isOptimal: true, findings: "Not needed; seizure already terminated; but emergency kit prepared", scoreDelta: 1 },
          { id: "t2", text: "Antipyretics: paracetamol 15mg/kg or ibuprofen 10mg/kg to reduce fever", isOptimal: true, findings: "Paracetamol 15mg/kg given; target <38.5°C", scoreDelta: 2 },
          { id: "t3", text: "Physical cooling measures: tepid sponging, light clothing", isOptimal: true, findings: "Applied; core temp monitored", scoreDelta: 1 },
          { id: "t4", text: "Broad-spectrum antibiotics if meningitis suspected (pending LP results)", isOptimal: true, findings: "Ceftriaxone 50mg/kg IV started empirically; stopped after CSF negative", scoreDelta: 2 },
          { id: "t5", text: "Supportive care: fluids, monitoring, reassurance to parents", isOptimal: true, findings: "IV fluids started; continuous monitoring", scoreDelta: 1 },
          { id: "t6", text: "Consider prophylactic antiepileptics (phenobarbital) for recurrent complex FS", isOptimal: true, findings: "Discussed with family; not routinely recommended first FS; reserve for recurrent", scoreDelta: 1 }
        ]
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt: "Discharge planning and parental counseling on febrile seizure recurrence risk.",
        availableActions: [
          { id: "f1", text: "Discharge after 24-48h if seizure-free and fever controlled", isOptimal: true, findings: "Discharged POD2; no further seizures", scoreDelta: 1 },
          { id: "f2", text: "Prescribe rescue medication (rectal diazepam) for home use if seizure recurs", isOptimal: true, findings: "Family given 5mg diazepam suppositories; taught administration", scoreDelta: 2 },
          { id: "f3", text: "Counsel on fever management: frequent antipyretics, cooling measures, hydration", isOptimal: true, findings: "Education on fever is not harmful; proper management reduces seizure risk", scoreDelta: 2 },
          { id: "f4", text: "Discuss recurrence risk: 30-40% in complex FS; higher if <12mo, short fever duration", isOptimal: true, findings: "Parents informed of risk; reassured most children outgrow", scoreDelta: 2 },
          { id: "f5", text: "Immunization catch-up if delayed; ensure up-to-date vaccinations", isOptimal: true, findings: "Vaccination status reviewed; up-to-date", scoreDelta: 1 },
          { id: "f6", text: "Follow-up at pediatric clinic in 1-2 weeks to review results and EEG", isOptimal: true, findings: "Scheduled follow-up; EEG and CSF results reviewed", scoreDelta: 1 }
        ]
      }
    ]
  },
  {
    title: "Acute Diarrhea with Severe Dehydration",
    presentingComplaint: "1-year-old with 3-day history of acute diarrhea, severe dehydration (sunken eyes, weak pulse, lethargy)",
    caseType: "Emergency",
    difficulty: "MEDIUM" as const,
    estimatedMinutes: 30,
    examTags: ["NEXT_STEP1", "NEET_PG"],
    patientProfile: {
      age: 1,
      sex: "Female",
      occupation: "N/A",
      history: "1-year-old from poor sanitation area with 3-day watery diarrhea (8-10 stools/day), vomiting, no oral intake for 24h. Severely malnourished (wt 7kg, <5th %ile)."
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt: "Acute gastroenteritis with severe dehydration. Assess fluid loss and nutrition status.",
        availableActions: [
          { id: "h1", text: "Ask about stool frequency, character, blood/mucus", isOptimal: true, findings: "8-10 watery stools/day x 3 days; no blood or mucus (secretory vs osmotic)", scoreDelta: 2 },
          { id: "h2", text: "Inquire about vomiting: frequency, content, onset", isOptimal: true, findings: "Vomiting 5-6 times/day in first 2 days, improved yesterday", scoreDelta: 2 },
          { id: "h3", text: "Ask about oral intake and urine output", isOptimal: true, findings: "No oral intake x 24h; last urine >12h ago", scoreDelta: 2 },
          { id: "h4", text: "Ask about preceding illness or sick contacts", isOptimal: true, findings: "Diarrhea in 2 siblings; poor water source in village", scoreDelta: 1 },
          { id: "h5", text: "Ask about prior medications or antibiotics given", isOptimal: true, findings: "Local practitioner gave antibiotics; unclear which", scoreDelta: 1 },
          { id: "h6", text: "Ask about vaccination status and immunization", isOptimal: true, findings: "Partially vaccinated; no rotavirus vaccine", scoreDelta: 1 }
        ]
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt: "Assess degree of dehydration using WHO classification.",
        availableActions: [
          { id: "e1", text: "Check vital signs: HR, BP, RR, temperature", isOptimal: true, findings: "HR 140 (severe tachycardia), BP 70/40 (hypotension - severe shock sign), RR 32, temp 37.5°C", scoreDelta: 2 },
          { id: "e2", text: "Assess general appearance: alertness, response to stimuli", isOptimal: true, findings: "Lethargy, difficult to rouse, weak cry", scoreDelta: 2 },
          { id: "e3", text: "Check eyes: anterior fontanelle, sunken eyes, tears", isOptimal: true, findings: "Sunken anterior fontanelle, sunken eyes, no tears when cries", scoreDelta: 2 },
          { id: "e4", text: "Check mucous membranes: moisture", isOptimal: true, findings: "Very dry mucous membranes", scoreDelta: 2 },
          { id: "e5", text: "Skin turgor: pinch skin on abdomen/forearm", isOptimal: true, findings: "Skin pinch goes back very slowly (>2 seconds) - severe loss of elasticity", scoreDelta: 2 },
          { id: "e6", text: "Assess peripheral pulses and capillary refill", isOptimal: true, findings: "Weak femoral pulse, CRT >3 seconds - severe hypovolemia", scoreDelta: 2 },
          { id: "e7", text: "Assess for severe malnutrition: wasting, edema", isOptimal: true, findings: "Severe wasting (wt 7kg, expected 9-10kg); no edema", scoreDelta: 1 }
        ]
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt: "Labs assess electrolyte losses and organ function in severe dehydration.",
        availableActions: [
          { id: "i1", text: "Serum electrolytes: Na, K, Cl, CO2", isOptimal: true, findings: "Na 125 (hyponatremia - likely type of dehydration), K 2.8 (severe hypokalemia), Cl 90, CO2 18", scoreDelta: 2 },
          { id: "i2", text: "Blood glucose and blood gas (lactate, pH)", isOptimal: true, findings: "BG 62 (hypoglycemia risk), pH 7.24 (metabolic acidosis), lactate 4.2 (tissue hypoperfusion)", scoreDelta: 2 },
          { id: "i3", text: "Blood urea nitrogen and creatinine", isOptimal: true, findings: "BUN 42, Cr 0.9 (elevated BUN/Cr ratio = prerenal azotemia from dehydration)", scoreDelta: 2 },
          { id: "i4", text: "Stool examination: WBC, culture, rotavirus antigen", isOptimal: true, findings: "WBC <5 in stool; rotavirus antigen positive (viral gastroenteritis)", scoreDelta: 1 },
          { id: "i5", text: "Hemoglobin and hematocrit (assess for hemoconcentration)", isOptimal: true, findings: "Hb 13.5, Hct 40 (elevated due to dehydration)", scoreDelta: 1 }
        ]
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt: "Confirm acute diarrhea with severe dehydration and hyponatremia.",
        availableActions: [
          { id: "d1", text: "Acute diarrhea with severe dehydration (WHO Plan C): >10% fluid loss, shock signs", isOptimal: true, findings: "All signs of severe dehydration present: sunken fontanelle, weak pulses, lethargy, poor skin turgor", scoreDelta: 2 },
          { id: "d2", text: "Hyponatremic dehydration (Na <130): increased risk of seizures, cerebral edema", isOptimal: true, findings: "Na 125; careful fluid replacement needed", scoreDelta: 2 },
          { id: "d3", text: "Rotavirus gastroenteritis (viral etiology): no antibiotics indicated", isOptimal: true, findings: "Confirmed by antigen; supportive care", scoreDelta: 1 }
        ]
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt: "WHO Plan C: IV rehydration. Careful sodium correction to avoid overcorrection.",
        availableActions: [
          { id: "t1", text: "Two IV lines (if available) or intraosseous access if IV difficult", isOptimal: true, findings: "IV 20G placed; difficult vein access due to shock", scoreDelta: 2 },
          { id: "t2", text: "IV Ringer's lactate bolus: 100mL/kg over 2-3 hours", isOptimal: true, findings: "700mL Ringer's lactate bolus calculated; given over 2.5 hours", scoreDelta: 2 },
          { id: "t3", text: "Reassess after bolus: urine output, pulse, BP, sensorium", isOptimal: true, findings: "After bolus: urine output 8mL/kg/h, HR 110, BP 85/45 (improved), alert", scoreDelta: 2 },
          { id: "t4", text: "Maintenance + ongoing losses: calculate 50mL/kg + deficit replacement", isOptimal: true, findings: "Continue IV fluids; switch to isotonic saline if Na normal", scoreDelta: 2 },
          { id: "t5", text: "Correct hypokalemia cautiously: KCl 20-40mEq in IV fluids", isOptimal: true, findings: "KCl 20mEq added to IV; monitor K levels at 4-6h", scoreDelta: 2 },
          { id: "t6", text: "Avoid rapid sodium correction (risk of osmotic demyelination if Na <120)", isOptimal: true, findings: "Gradual correction; limit rise to 8-10mEq/L per 24h", scoreDelta: 2 },
          { id: "t7", text: "Zinc supplementation: 10mg daily x 10 days (reduces subsequent diarrhea duration)", isOptimal: true, findings: "Zinc gluconate 10mg given daily", scoreDelta: 1 }
        ]
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt: "Recovery and transition to oral rehydration. Nutritional rehabilitation.",
        availableActions: [
          { id: "f1", text: "Reassess hydration status every 1-2h initially; maintain urine output >1mL/kg/h", isOptimal: true, findings: "Urine output maintained; recheck electrolytes at 6h", scoreDelta: 2 },
          { id: "f2", text: "Transition to oral rehydration once vomiting controlled (usually <24h)", isOptimal: true, findings: "ORS 50mL/kg over 4h started POD2; tolerated", scoreDelta: 2 },
          { id: "f3", text: "Restart nutrition: continue breastfeeding (if applicable) + age-appropriate foods", isOptimal: true, findings: "Mashed foods, rice, lentils resumed", scoreDelta: 1 },
          { id: "f4", text: "Educate on continued ORS for ongoing loose stools (10mL/kg per stool)", isOptimal: true, findings: "Family educated on home ORS use", scoreDelta: 1 },
          { id: "f5", text: "Discharge when rehydrated, tolerating oral intake, alert, >8h without significant stool loss", isOptimal: true, findings: "Discharged POD3 when improved", scoreDelta: 1 },
          { id: "f6", text: "Community education: WASH (water, sanitation, hygiene), rotavirus vaccination", isOptimal: true, findings: "Counseled on clean water, handwashing, vaccination", scoreDelta: 1 }
        ]
      }
    ]
  },
  {
    title: "Kawasaki Disease",
    presentingComplaint: "4-year-old with 5-day fever, strawberry tongue, rash, bilateral conjunctivitis, and lip erythema",
    caseType: "Ward",
    difficulty: "MEDIUM" as const,
    estimatedMinutes: 30,
    examTags: ["NEXT_STEP1", "NEET_PG"],
    patientProfile: {
      age: 4,
      sex: "Female",
      occupation: "N/A",
      history: "4-year-old with 5 days of high fever, polymorphous rash, strawberry tongue, bilateral non-purulent conjunctivitis. No response to antibiotics. Suspected Kawasaki disease."
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt: "Acute febrile illness in preschooler. Assess for Kawasaki disease features.",
        availableActions: [
          { id: "h1", text: "Ask about fever onset and duration", isOptimal: true, findings: "High fever (39-40°C) for 5 days; not responding to paracetamol/ibuprofen", scoreDelta: 2 },
          { id: "h2", text: "Inquire about rash: distribution, character, evolution", isOptimal: true, findings: "Polymorphous rash on trunk and extremities; started day 2; sparing palms/soles", scoreDelta: 2 },
          { id: "h3", text: "Ask about oroingual changes: red lips, tongue appearance", isOptimal: true, findings: "Bright red lips, strawberry tongue (red with white coating), oral erythema", scoreDelta: 2 },
          { id: "h4", text: "Ask about eye involvement: redness, discharge", isOptimal: true, findings: "Bilateral conjunctival erythema, NO purulent discharge (non-purulent)", scoreDelta: 2 },
          { id: "h5", text: "Ask about extremity changes: edema, erythema, desquamation", isOptimal: true, findings: "Bilateral hand and foot edema, palmar erythema, peeling not yet visible", scoreDelta: 2 },
          { id: "h6", text: "Ask about lymph node enlargement", isOptimal: true, findings: "Single unilateral cervical lymph node 2cm, not matted", scoreDelta: 1 },
          { id: "h7", text: "Ask about prior illnesses or sick contacts", isOptimal: true, findings: "No known sick contacts; no prior serious infections", scoreDelta: 1 }
        ]
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt: "Systematic examination for Kawasaki disease criteria (5/6 needed).",
        availableActions: [
          { id: "e1", text: "Assess fever: temperature and duration (≥5 days required)", isOptimal: true, findings: "Fever 39-40°C x 5 days; meets duration criterion", scoreDelta: 2 },
          { id: "e2", text: "Inspect rash: polymorphous, location, non-vesicular", isOptimal: true, findings: "Polymorphous maculopapular rash, trunk and extremities, non-vesicular", scoreDelta: 2 },
          { id: "e3", text: "Examine oral cavity: strawberry tongue, lip erythema, oral erythema", isOptimal: true, findings: "Strawberry tongue present; bright red cracked lips; oral mucosa erythematous", scoreDelta: 2 },
          { id: "e4", text: "Check eyes: bilateral non-purulent conjunctivitis", isOptimal: true, findings: "Bilateral conjunctival injection, no exudate (non-purulent conjunctivitis)", scoreDelta: 2 },
          { id: "e5", text: "Examine extremities: edema, erythema, induration", isOptimal: true, findings: "Bilateral hand and foot edema; palmar erythema; no desquamation yet (may appear in week 2-3)", scoreDelta: 2 },
          { id: "e6", text: "Palpate cervical lymph nodes: unilateral, size", isOptimal: true, findings: "Single unilateral anterior cervical node 2cm; not matted", scoreDelta: 2 },
          { id: "e7", text: "Check heart sounds: listen for new murmur (early myocarditis)", isOptimal: true, findings: "Heart sounds normal; no murmur currently", scoreDelta: 1 }
        ]
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt: "Lab and imaging support diagnosis. Echocardiography urgent to assess coronary arteries.",
        availableActions: [
          { id: "i1", text: "Complete blood count", isOptimal: true, findings: "WBC 18,500 (left shift), Hb 10.5 (anemia from chronic illness), platelets 580 (thrombocytosis)", scoreDelta: 2 },
          { id: "i2", text: "Inflammatory markers: CRP, ESR", isOptimal: true, findings: "CRP 8.5mg/dL (markedly elevated), ESR 92mm/h", scoreDelta: 2 },
          { id: "i3", text: "Liver function tests", isOptimal: true, findings: "AST 65, ALT 55, bilirubin 0.8 (mild hepatitis)", scoreDelta: 1 },
          { id: "i4", text: "Serum albumin and total protein", isOptimal: true, findings: "Albumin 2.8, TP 6.5 (hypoalbuminemia from illness)", scoreDelta: 1 },
          { id: "i5", text: "Blood culture (rule out bacterial infection)", isOptimal: true, findings: "Negative after 48h", scoreDelta: 1 },
          { id: "i6", text: "Transthoracic echocardiography (urgent: assess coronary arteries)", isOptimal: true, findings: "Left coronary artery dilatation (4.2mm, normal <3mm), right coronary artery normal", scoreDelta: 2 },
          { id: "i7", text: "Chest X-ray to assess for myocarditis, heart size", isOptimal: true, findings: "Mild cardiomegaly; pulmonary vasculature normal", scoreDelta: 1 }
        ]
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt: "Confirm Kawasaki disease based on clinical criteria and exclusion of other conditions.",
        availableActions: [
          { id: "d1", text: "Kawasaki disease: fever ≥5 days + 5/6 criteria (rash, strawberry tongue, conjunctivitis, extremity changes, cervical node, lip erythema)", isOptimal: true, findings: "All 6 criteria present; confirmed diagnosis", scoreDelta: 2 },
          { id: "d2", text: "Coronary artery dilatation on echo confirms risk of coronary complications", isOptimal: true, findings: "LSCA dilatation present; requires antiplatelet + anticoagulation therapy", scoreDelta: 2 },
          { id: "d3", text: "Rule out other diagnoses: scarlet fever, measles, drug reaction, viral exanthem", isOptimal: true, findings: "Non-purulent conjunctivitis, strawberry tongue, and coronary dilatation distinguish from scarlet fever; no exposure to measles", scoreDelta: 1 }
        ]
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt: "Urgent IVIG + high-dose aspirin to reduce coronary complications.",
        availableActions: [
          { id: "t1", text: "Intravenous immunoglobulin (IVIG) 2g/kg single infusion (over 10-12 hours)", isOptimal: true, findings: "IVIG 2g/kg = 72g given; reduces coronary artery aneurysm risk from 25% to 5%", scoreDelta: 2 },
          { id: "t2", text: "High-dose aspirin 80-100mg/kg/day in 4 divided doses during acute phase (2 weeks)", isOptimal: true, findings: "Aspirin 80mg/kg/day started; anti-inflammatory + antiplatelet", scoreDelta: 2 },
          { id: "t3", text: "Transition to low-dose aspirin 3-5mg/kg/day (long-term antiplatelet therapy)", isOptimal: true, findings: "After 2 weeks, reduce to 3-5mg/kg/day for antiplatelet effect", scoreDelta: 2 },
          { id: "t4", text: "Anticoagulation if coronary artery aneurysm present (low-molecular-weight heparin initially)", isOptimal: true, findings: "LMWH 1mg/kg SC Q12H started given LSCA dilatation", scoreDelta: 2 },
          { id: "t5", text: "Supportive care: fever management, fluid repletion, monitoring for complications", isOptimal: true, findings: "IV fluids, electrolytes corrected", scoreDelta: 1 },
          { id: "t6", text: "Monitor for treatment resistance (fever >48h after IVIG); consider repeat IVIG or TNF-alpha inhibitors", isOptimal: true, findings: "Fever resolved 24h post-IVIG; good responder", scoreDelta: 1 }
        ]
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt: "Long-term cardiac surveillance and antiplatelet/anticoagulation management.",
        availableActions: [
          { id: "f1", text: "Repeat echocardiography at 2 weeks, 6-8 weeks, and 1 year to assess coronary evolution", isOptimal: true, findings: "2-week echo: LSCA 4.0mm (slight improvement); no aneurysm yet", scoreDelta: 2 },
          { id: "f2", text: "Continue low-dose aspirin indefinitely (antiplatelet effect)", isOptimal: true, findings: "Long-term aspirin 3mg/kg once daily", scoreDelta: 2 },
          { id: "f3", text: "Consider beta-blockers if left ventricular dysfunction develops", isOptimal: true, findings: "Cardiac function normal; not needed yet", scoreDelta: 1 },
          { id: "f4", text: "Activity restriction: no strenuous exercise during acute phase; gradual return based on echo", isOptimal: true, findings: "Activity restricted for 3 months; reassessed with echo", scoreDelta: 1 },
          { id: "f5", text: "Long-term cardiology follow-up: annual exams, stress tests if abnormal coronaries", isOptimal: true, findings: "Pediatric cardiology follow-up arranged; annual echo planned", scoreDelta: 2 },
          { id: "f6", text: "Educate family on signs of cardiac complications (chest pain, syncope, dyspnea)", isOptimal: true, findings: "Warning signs reviewed with parents", scoreDelta: 1 }
        ]
      }
    ]
  },
  {
    title: "Congenital Heart Disease - Tetralogy of Fallot",
    presentingComplaint: "6-month-old with cyanotic spells, squatting position, dyspnea on exertion, and clubbing",
    caseType: "Ward",
    difficulty: "HARD" as const,
    estimatedMinutes: 35,
    examTags: ["NEXT_STEP1", "NEET_PG"],
    patientProfile: {
      age: 0.5,
      sex: "Female",
      occupation: "N/A",
      history: "6-month-old with progressive cyanosis since infancy, now with episodes of severe cyanotic spells (tet spells) triggered by crying/straining. Known cardiac murmur since birth."
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt: "Cyanotic heart disease in infant. Assess spell triggers and severity.",
        availableActions: [
          { id: "h1", text: "Ask about age of onset and progression of cyanosis", isOptimal: true, findings: "Mild cyanosis noted at birth; progressive blue discoloration; now dark blue during spells", scoreDelta: 2 },
          { id: "h2", text: "Inquire about triggers for cyanotic spells", isOptimal: true, findings: "Spells triggered by crying, straining, feeding (Valsalva), cold stress", scoreDelta: 2 },
          { id: "h3", text: "Ask about spell duration and recovery", isOptimal: true, findings: "Spells last 5-10 minutes; resolve with oxygen and repositioning", scoreDelta: 2 },
          { id: "h4", text: "Ask about feeding difficulties and poor weight gain", isOptimal: true, findings: "Feeds poorly; weight 5.2kg (<5th %ile for age); lags expected growth", scoreDelta: 2 },
          { id: "h5", text: "Ask about dyspnea pattern: dyspnea on exertion, feeding, at rest", isOptimal: true, findings: "Tires easily while feeding; becomes cyanosed; rapid breathing", scoreDelta: 1 },
          { id: "h6", text: "Ask about murmur noted and workup done", isOptimal: true, findings: "Murmur present since birth; referred for echo", scoreDelta: 1 },
          { id: "h7", text: "Ask about family history of congenital heart disease", isOptimal: true, findings: "No family history; sporadic case", scoreDelta: 1 }
        ]
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt: "Assess degree of cyanosis and cardiac findings typical of TOF.",
        availableActions: [
          { id: "e1", text: "Assess cyanosis: central vs peripheral, severity", isOptimal: true, findings: "Central cyanosis (lips, tongue), finger clubbing present (6-month-old!)", scoreDelta: 2 },
          { id: "e2", text: "Check vital signs: SpO2, HR, RR, BP", isOptimal: true, findings: "SpO2 75% (room air, critical), HR 145 (tachycardia), RR 45 (tachypnea), BP 92/55", scoreDelta: 2 },
          { id: "e3", text: "Observe for squatting or knee-chest position", isOptimal: true, findings: "Infant assumes knee-chest position during spell (increases SVR, reduces R→L shunt)", scoreDelta: 2 },
          { id: "e4", text: "Auscultate heart: single S2, systolic murmur location/grade", isOptimal: true, findings: "Single loud S2, Grade 3/6 systolic ejection murmur at left infraclavicular area (VSD)", scoreDelta: 2 },
          { id: "e5", text: "Check for clubbing of fingers and toes", isOptimal: true, findings: "Clubbing prominent (chronic hypoxemia sign)", scoreDelta: 2 },
          { id: "e6", text: "Assess development and growth", isOptimal: true, findings: "Growth retarded; developmental milestones mildly delayed", scoreDelta: 1 },
          { id: "e7", text: "Check for hepatomegaly or other organ involvement", isOptimal: true, findings: "Liver normal; no splenomegaly", scoreDelta: 1 }
        ]
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt: "Confirm TOF anatomy. Echocardiography and cardiac catheterization assessment.",
        availableActions: [
          { id: "i1", text: "Chest X-ray: boot-shaped heart, decreased pulmonary vasculature", isOptimal: true, findings: "Boot-shaped silhouette, right aortic arch, oligemic lung fields", scoreDelta: 2 },
          { id: "i2", text: "Electrocardiogram: RVH, RAD", isOptimal: true, findings: "Right ventricular hypertrophy (R wave in V1), right axis deviation", scoreDelta: 2 },
          { id: "i3", text: "Transthoracic echocardiography: confirm VSD, RV hypertrophy, overriding aorta", isOptimal: true, findings: "Large perimembranous VSD (12mm), RV>LV, aorta overriding VSD, RVOT obstruction", scoreDelta: 2 },
          { id: "i4", text: "Color Doppler: assess R→L shunting direction", isOptimal: true, findings: "Right-to-left shunt through VSD confirmed; color jet right to left", scoreDelta: 2 },
          { id: "i5", text: "Complete blood count: assess for polycythemia from chronic hypoxemia", isOptimal: true, findings: "Hb 16.2 (polycythemia), Hct 50%, RBC 5.8M/μL", scoreDelta: 2 },
          { id: "i6", text: "Cardiac catheterization (if surgery planned): detailed hemodynamics and assess for PDA", isOptimal: true, findings: "Planned pre-operatively; RV-PA pressure gradient 45 mmHg", scoreDelta: 1 }
        ]
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt: "Confirm classic Tetralogy of Fallot (4 components).",
        availableActions: [
          { id: "d1", text: "Tetralogy of Fallot: VSD, RV outflow tract obstruction (infundibular + pulmonary stenosis), RVH, overriding aorta", isOptimal: true, findings: "All 4 components confirmed on echo", scoreDelta: 2 },
          { id: "d2", text: "Cyanotic heart disease with R→L shunt; degree of cyanosis depends on degree of RVOT obstruction", isOptimal: true, findings: "Moderate RVOT obstruction with significant cyanosis", scoreDelta: 2 },
          { id: "d3", text: "Polycythemia as adaptation to chronic hypoxemia", isOptimal: true, findings: "Secondary polycythemia present", scoreDelta: 1 }
        ]
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt: "Manage cyanotic spells acutely and plan surgical repair (Blalock-Taussig shunt or primary repair).",
        availableActions: [
          { id: "t1", text: "During spell: knee-chest position (or squat), increase systemic vascular resistance", isOptimal: true, findings: "Positioning increases SVR, reduces R→L shunt", scoreDelta: 2 },
          { id: "t2", text: "Oxygen supplementation during spell", isOptimal: true, findings: "100% O2; SpO2 improves to 85-90%", scoreDelta: 2 },
          { id: "t3", text: "Morphine for pain/anxiety during spell (reduces infundibular spasm)", isOptimal: true, findings: "0.1mg/kg IV morphine given; reduces hyperreactivity", scoreDelta: 2 },
          { id: "t4", text: "Avoid dehydration: maintain adequate hydration to reduce blood viscosity", isOptimal: true, findings: "IV fluids; target lower polycythemia hematocrit", scoreDelta: 1 },
          { id: "t5", text: "Medical stabilization: beta-blockers (propranolol) reduce infundibular spasm", isOptimal: true, findings: "Propranolol 1-2mg/kg QID started; reduces spell frequency", scoreDelta: 2 },
          { id: "t6", text: "Plan Blalock-Taussig shunt (BT shunt) as interim palliation or primary repair (total correction)", isOptimal: true, findings: "Age and size permit primary repair; scheduled for intracardiac repair (VSD closure + RVOT relief)", scoreDelta: 2 },
          { id: "t7", text: "Total correction surgery: VSD closure (patch), RVOT obstruction relief (transannular patch/valve)", isOptimal: true, findings: "Planned; reduces future cyanosis and improves prognosis", scoreDelta: 2 }
        ]
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt: "Post-operative care and long-term cardiac monitoring.",
        availableActions: [
          { id: "f1", text: "Post-operative ICU monitoring: oxygen, ventilation, hemodynamics, fluid balance", isOptimal: true, findings: "Post-op day 1: SpO2 94% (much improved), HR stable, no arrhythmias", scoreDelta: 2 },
          { id: "f2", text: "Gradual weaning from mechanical support based on cardiac function", isOptimal: true, findings: "Extubated POD2; tolerating oral feeds", scoreDelta: 2 },
          { id: "f3", text: "Echocardiography post-op: assess VSD closure, RV function, residual lesions", isOptimal: true, findings: "VSD completely closed, RV pressure normalized, good function", scoreDelta: 2 },
          { id: "f4", text: "Cardiology follow-up: regular echo surveillance for reoperation (residual RVOT obstruction, pulmonary regurgitation)", isOptimal: true, findings: "Quarterly follow-up planned; monitor for need for later pulmonary valve replacement", scoreDelta: 2 },
          { id: "f5", text: "Activity: gradual return to normal; most achieve normal life expectancy post-repair", isOptimal: true, findings: "Parent counseling on activity progression", scoreDelta: 1 },
          { id: "f6", text: "Endocarditis prophylaxis: may be needed if residual defects remain", isOptimal: true, findings: "No residual VSD; prophylaxis not needed", scoreDelta: 1 }
        ]
      }
    ]
  }
];

