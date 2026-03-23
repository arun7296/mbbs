export const anatomyMcqs2 = [
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 35-year-old male with a laceration on the volar aspect of the forearm over the distal third, between palmaris longus and flexor carpi radialis tendons, develops inability to flex the interphalangeal joint of the thumb. Which nerve is most likely injured?",
    clinicalVignette:
      "A 35-year-old male with forearm laceration and loss of thumb IP flexion.",
    options: [
      {
        id: "a",
        text: "Anterior interosseous nerve (AIN) branch of median nerve",
        isCorrect: true,
        explanation:
          "AIN innervates: (1) flexor pollicis longus (thumb IP flexion), (2) flexor digitorum profundus (digits II-III), (3) pronator quadratus. Injury causes loss of thumb IP flexion (classic sign). AIN arises from median nerve in proximal forearm.",
      },
      {
        id: "b",
        text: "Ulnar nerve deep branch",
        isCorrect: false,
        explanation:
          "Ulnar nerve supplies intrinsic hand muscles and flexor digitorum profundus (digits IV-V), not FPL.",
      },
      {
        id: "c",
        text: "Radial nerve posterior interosseous branch",
        isCorrect: false,
        explanation:
          "Posterior interosseous nerve supplies extensor muscles, not flexors.",
      },
      {
        id: "d",
        text: "Median nerve proper at wrist level",
        isCorrect: false,
        explanation:
          "Median nerve at wrist would also affect thenar eminence sensation/motor.",
      },
    ],
    explanation:
      "Anterior interosseous nerve (AIN) syndrome presents with loss of thumb IP flexion and index finger DIP flexion due to FPL and FDP paralysis. Anatomical location: AIN arises from median nerve 5-8 cm distal to elbow. Location in forearm: between flexor digitorum superficialis and flexor digitorum profundus. Compartment anatomy: volar compartment of forearm divided into anterior (pronator/flexor carpi radialis) and posterior (remaining flexors). Injury at volar mid-forearm level between PL and FCR would be superficial to AIN; deeper wound can injure AIN.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AN",
    topicCode: "AN-MOD-01-TOP-001",
    textbookRefs: [
      { book: "Gray's Anatomy for Students", chapter: "Ch 4", edition: "4th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 45-year-old male sustains a knee injury with loss of ability to prevent anterior translation of the tibia relative to femur when knee is flexed (positive anterior drawer test). Which ligament is most likely injured?",
    clinicalVignette:
      "A 45-year-old male with knee injury and positive anterior drawer test indicating instability.",
    options: [
      {
        id: "a",
        text: "Anterior cruciate ligament (ACL)",
        isCorrect: true,
        explanation:
          "ACL prevents anterior translation of tibia on femur. Anterior drawer test: positive in ACL injury (tibia subluxates anteriorly with knee flexed 90°). Lachman test (knee 30° flexion) more sensitive for ACL injury.",
      },
      {
        id: "b",
        text: "Posterior cruciate ligament (PCL)",
        isCorrect: false,
        explanation:
          "PCL prevents posterior translation (positive posterior drawer test).",
      },
      {
        id: "c",
        text: "Medial collateral ligament (MCL)",
        isCorrect: false,
        explanation:
          "MCL prevents varus/valgus motion, tested with valgus stress test.",
      },
      {
        id: "d",
        text: "Lateral collateral ligament (LCL)",
        isCorrect: false,
        explanation:
          "LCL prevents varus deformity, tested with varus stress test.",
      },
    ],
    explanation:
      "Knee ligament anatomy and function: (1) ACL: prevents anterior translation of tibia, originates lateral femoral condyle → inserts anteromedial tibia, injured with deceleration/pivoting motion, (2) PCL: prevents posterior translation, originates medial femoral condyle → inserts posterolateral tibia, injured with direct anterior knee force, (3) MCL: collateral support, medial knee stability, (4) LCL: collateral support, lateral knee stability. Physical examination: anterior drawer test (ACL), posterior drawer test (PCL), valgus stress test (MCL), varus stress test (LCL), Lachman test (ACL at 30° flexion, more sensitive).",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AN",
    topicCode: "AN-MOD-02-TOP-002",
    textbookRefs: [
      { book: "Gray's Anatomy for Students", chapter: "Ch 5", edition: "4th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 55-year-old male presents with dysphagia to solids more than liquids and regurgitation of undigested food. Endoscopy shows a narrowing 25-30 cm from incisors. Which esophageal region is most likely involved?",
    clinicalVignette:
      "A 55-year-old male with dysphagia and esophageal narrowing at 25-30 cm from incisors.",
    options: [
      {
        id: "a",
        text: "Pharyngeal esophagus (sphincter region at 15-20 cm)",
        isCorrect: false,
        explanation:
          "Pharyngeal esophagus begins at 15-20 cm; this narrowing is distal.",
      },
      {
        id: "b",
        text: "Thoracic esophagus at level of aortic arch and left main bronchus",
        isCorrect: true,
        explanation:
          "Esophageal anatomic narrowings: (1) pharyngeal (15-20 cm), (2) aortic arch/left bronchus (25-30 cm), (3) diaphragmatic/cardia (38-40 cm). Narrowing at 25-30 cm is at aortic arch and left main bronchus level.",
      },
      {
        id: "c",
        text: "Thoracic esophagus at midpoint (around 24 cm)",
        isCorrect: false,
        explanation:
          "Midpoint narrowing would be higher than 25-30 cm location.",
      },
      {
        id: "d",
        text: "Abdominal esophagus at cardia (38-40 cm)",
        isCorrect: false,
        explanation:
          "Cardia is lower at 38-40 cm.",
      },
    ],
    explanation:
      "Esophageal anatomy and constriction sites: (1) Pharyngeal constriction (cricopharyngeus muscle, 15-20 cm from incisors), (2) Aortic arch and left main bronchus (25-30 cm), (3) Diaphragmatic hiatus and cardiac junction (38-40 cm). These anatomic narrowings predispose to obstruction and reflux. Dysphagia to solids suggests mechanical obstruction (carcinoma common at 25-30 cm level). Esophageal length in males ~25 cm, females ~21 cm.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AN",
    topicCode: "AN-MOD-03-TOP-003",
    textbookRefs: [
      { book: "Gray's Anatomy for Students", chapter: "Ch 6", edition: "4th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 65-year-old male with abdominal aortic aneurysm undergoes preoperative imaging. Below what vertebral level does the aorta bifurcate into iliac arteries?",
    clinicalVignette:
      "A 65-year-old male with AAA requiring understanding of aortic bifurcation anatomy.",
    options: [
      {
        id: "a",
        text: "L3 vertebral level",
        isCorrect: true,
        explanation:
          "Aortic bifurcation occurs at level of L4 vertebra (or lower disc L4-L5), splitting into right and left common iliac arteries. This is clinically important for AAA surgery planning.",
      },
      {
        id: "b",
        text: "L2 vertebral level",
        isCorrect: false,
        explanation:
          "Bifurcation is lower, at L4 level.",
      },
      {
        id: "c",
        text: "L5 vertebral level",
        isCorrect: false,
        explanation:
          "L5 is too low; bifurcation at L4.",
      },
      {
        id: "d",
        text: "S1 vertebral level",
        isCorrect: false,
        explanation:
          "Bifurcation occurs before S1 level.",
      },
    ],
    explanation:
      "Abdominal aorta anatomy: (1) Origin at T12 level (diaphragmatic aorta), (2) Termination at L4 level bifurcating into iliac arteries, (3) Course: anterior to vertebral bodies, posterior to esophagus and stomach. Major branches: (1) Celiac trunk (T12-L1), (2) Superior mesenteric artery (L1), (3) Renal arteries (L1-L2), (4) Inferior mesenteric artery (L3), (5) Iliac arteries (L4 bifurcation). Clinical significance: AAA location often at/below renal arteries; bifurcation at L4 important for surgical planning (repair above/below bifurcation affects approach).",
    difficulty: "EASY" as const,
    bloomsLevel: "Recall",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AN",
    topicCode: "AN-MOD-04-TOP-004",
    textbookRefs: [
      { book: "Gray's Anatomy for Students", chapter: "Ch 3", edition: "4th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 50-year-old male undergoes retroperitoneal dissection during AAA repair. Which structures are at risk of injury if dissection extends medially toward the midline structures?",
    clinicalVignette:
      "A 50-year-old male undergoing AAA surgery with risk of retroperitoneal structure injury.",
    options: [
      {
        id: "a",
        text: "Ureters and lumbar veins",
        isCorrect: true,
        explanation:
          "Ureters cross psoas muscles and descend along vertebral bodies in retroperitoneum, medial dissection risks ureteral injury. Lumbar veins tributaries of IVC in midline, at risk with central dissection.",
      },
      {
        id: "b",
        text: "Small bowel and pancreas",
        isCorrect: false,
        explanation:
          "Small bowel and pancreas are intraperitoneal, protected by peritoneum.",
      },
      {
        id: "c",
        text: "Duodenum and celiac axis only",
        isCorrect: false,
        explanation:
          "Duodenum retroperitoneal but not as common an injury as ureters.",
      },
      {
        id: "d",
        text: "Psoas muscles and quadratus lumborum",
        isCorrect: false,
        explanation:
          "Muscle injury acceptable during AAA surgery.",
      },
    ],
    explanation:
      "Retroperitoneal anatomy during AAA repair: (1) Ureters: descend retroperitoneally along psoas muscles lateral to vertebral bodies, at risk with medial dissection, (2) Lumbar veins: tributary vessels to IVC in midline, bleeding risk with dissection, (3) Duodenum: C-shaped retroperitoneal structure, overlies aorta anteriorly, (4) Inferior vena cava: right of aorta, significant risk of injury especially with proximal aortic control. Surgical technique: identify ureters before dissection and mobilize laterally (Cattel-Braasch maneuver) to protect during repair. IVC injury catastrophic bleeding requiring rapid control.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AN",
    topicCode: "AN-MOD-04-TOP-005",
    textbookRefs: [
      { book: "Gray's Anatomy for Students", chapter: "Ch 3", edition: "4th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 45-year-old female undergoes thyroid surgery. The surgeon needs to identify the recurrent laryngeal nerve (RLN) to prevent vocal cord paralysis. Where does the RLN typically pass relative to the inferior thyroid artery?",
    clinicalVignette:
      "A 45-year-old female undergoing thyroidectomy with RLN identification.",
    options: [
      {
        id: "a",
        text: "Medial to the inferior thyroid artery (ITA) in most cases",
        isCorrect: true,
        explanation:
          "RLN typically passes medial to ITA as it approaches the thyroid, although anatomic variation common (RLN can pass lateral, anterior, or posterior to ITA in variable percentages). Surgeons identify ITA and trace it to locate RLN more reliably.",
      },
      {
        id: "b",
        text: "Lateral to the ITA always",
        isCorrect: false,
        explanation:
          "While RLN is lateral to ITA in some cases, medial location more common.",
      },
      {
        id: "c",
        text: "Posterior to the ITA in all cases",
        isCorrect: false,
        explanation:
          "RLN position variable relative to ITA.",
      },
      {
        id: "d",
        text: "RLN and ITA have no consistent relationship",
        isCorrect: false,
        explanation:
          "While variable, relationship usually clinically useful.",
      },
    ],
    explanation:
      "Recurrent laryngeal nerve anatomy: (1) Right: branches from vagus nerve as it crosses subclavian artery, curves medially and ascends in tracheoesophageal groove, (2) Left: branches from vagus as it crosses aortic arch, curves medially and ascends in tracheoesophageal groove, (3) Both: enter larynx posteriorly as inferior laryngeal nerves. Relationship to inferior thyroid artery: typically medial (50-60% of cases), but lateral, anterior, or posterior in variable percentages. Surgical technique: identify ITA, trace toward thyroid, follow medial to ITA to find RLN. Injury causes vocal cord paralysis → hoarseness, stridor if bilateral.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AN",
    topicCode: "AN-MOD-05-TOP-006",
    textbookRefs: [
      { book: "Gray's Anatomy for Students", chapter: "Ch 8", edition: "4th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 35-year-old male with a stab wound to the flank presents with signs of peritonitis. The surgeon must determine if the peritoneum has been violated. Which anatomical layer of the abdominal wall lies immediately deep to the external oblique aponeurosis?",
    clinicalVignette:
      "A 35-year-old male with flank stab wound requiring assessment of peritoneal violation.",
    options: [
      {
        id: "a",
        text: "Internal oblique aponeurosis (muscle fibers run inferomedial)",
        isCorrect: true,
        explanation:
          "Abdominal wall layers lateral to medial: (1) Skin, (2) Fascia (Scarpa's), (3) External oblique aponeurosis, (4) Internal oblique (muscle/aponeurosis), (5) Transversus abdominis (muscle/aponeurosis), (6) Transversalis fascia, (7) Peritoneum. Internal oblique lies immediately deep to external oblique.",
      },
      {
        id: "b",
        text: "Transversus abdominis muscle",
        isCorrect: false,
        explanation:
          "Transversus abdominis is deeper, below internal oblique.",
      },
      {
        id: "c",
        text: "Peritoneum directly",
        isCorrect: false,
        explanation:
          "Peritoneum is deepest layer.",
      },
      {
        id: "d",
        text: "Rectus abdominis muscle",
        isCorrect: false,
        explanation:
          "Rectus abdominis is medial, not in this lateral location.",
      },
    ],
    explanation:
      "Abdominal wall anatomy (lateral region): (1) Skin, (2) Superficial fascia (Camper's, Scarpa's), (3) External oblique muscle/aponeurosis (fibers run inferolateral), (4) Internal oblique muscle/aponeurosis (fibers run superomedial), (5) Transversus abdominis muscle/aponeurosis (fibers run horizontally), (6) Transversalis fascia, (7) Extraperitoneal fat, (8) Peritoneum. Anterior rectus sheath formed by aponeuroses of oblique/transversus muscles. Understanding layer thickness important for surgical approach and avoiding inadvertent peritoneal entry.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "Recall",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AN",
    topicCode: "AN-MOD-06-TOP-007",
    textbookRefs: [
      { book: "Gray's Anatomy for Students", chapter: "Ch 2", edition: "4th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 50-year-old male with acute myocardial infarction and cardiogenic shock requires venous access for hemodynamic support. Which vein is most commonly used for central venous catheterization?",
    clinicalVignette:
      "A 50-year-old male requiring emergency central venous access.",
    options: [
      {
        id: "a",
        text: "Internal jugular vein (IJ)",
        isCorrect: true,
        explanation:
          "IJ is preferred central access: (1) straight course to superior vena cava, (2) large caliber, (3) low infection risk, (4) can be performed bedside with ultrasound guidance. Located at confluence of sternocleidomastoid muscle, between sternal and clavicular heads.",
      },
      {
        id: "b",
        text: "Femoral vein",
        isCorrect: false,
        explanation:
          "Femoral vein used as alternative but higher infection risk in ICU.",
      },
      {
        id: "c",
        text: "Basilic vein in arm",
        isCorrect: false,
        explanation:
          "Basilic vein used for PICC line, smaller caliber.",
      },
      {
        id: "d",
        text: "External jugular vein",
        isCorrect: false,
        explanation:
          "External jugular smaller, superficial; less commonly used.",
      },
    ],
    explanation:
      "Central venous access anatomy: (1) Internal jugular vein: formed by confluence of internal jugular artery and posterior belly of digastric, runs alongside carotid artery and vagus nerve in carotid sheath, drains into brachiocephalic vein → SVC, (2) Femoral vein: medial to femoral artery (remember mnemonic NAVY = Nerve, Artery, Vein, Y-fronts), drains into external iliac → internal iliac → common iliac → IVC, (3) Subclavian vein: runs under clavicle, continues as IJ to form brachiocephalic. IJ preferred for safety and infection control.",
    difficulty: "EASY" as const,
    bloomsLevel: "Recall",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AN",
    topicCode: "AN-MOD-05-TOP-008",
    textbookRefs: [
      { book: "Gray's Anatomy for Students", chapter: "Ch 8", edition: "4th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 45-year-old female undergoes hernia repair. During dissection of the inguinal canal, the surgeon identifies a cordlike structure lateral to the conjoint tendon. What structures does this contain in females?",
    clinicalVignette:
      "A 45-year-old female undergoing inguinal hernia repair with anatomy assessment.",
    options: [
      {
        id: "a",
        text: "Round ligament of uterus and genital branch of genitofemoral nerve",
        isCorrect: true,
        explanation:
          "In females, inguinal canal contains round ligament (ovarian ligament distally becomes round ligament), analogous to spermatic cord in males. Round ligament carries: (1) ovarian artery branches, (2) venous plexus, (3) genital branch of genitofemoral nerve. Conjoint tendon medial; round ligament lateral to it.",
      },
      {
        id: "b",
        text: "Vas deferens and testicular artery",
        isCorrect: false,
        explanation:
          "These are in males, part of spermatic cord.",
      },
      {
        id: "c",
        text: "Ilioinguinal and iliohypogastric nerves",
        isCorrect: false,
        explanation:
          "These are nerves running with spermatic cord (males), but not the main cordlike structure.",
      },
      {
        id: "d",
        text: "Gubernaculum testis",
        isCorrect: false,
        explanation:
          "Gubernaculum remnant in males.",
      },
    ],
    explanation:
      "Inguinal canal contents: (1) Males: spermatic cord containing vas deferens, testicular artery and veins, pampiniform plexus, genital branch of genitofemoral nerve, cremasteric fascia, (2) Females: round ligament of uterus (continuation of ovarian ligament from ovary to labia majora), with similar contents to spermatic cord (artery, veins, genital branch of genitofemoral nerve). Both males/females have: ilioinguinal nerve (lateral sac), iliohypogastric nerve. Hernia anatomy: direct (medial to inferior epigastric vessels), indirect (lateral, through internal ring), femoral (below inguinal ligament).",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AN",
    topicCode: "AN-MOD-06-TOP-009",
    textbookRefs: [
      { book: "Gray's Anatomy for Students", chapter: "Ch 2", edition: "4th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 28-year-old male with a deep stab wound to the popliteal fossa presents with absent distal pulses and signs of limb ischemia. Which artery must be immediately repaired to prevent limb loss?",
    clinicalVignette:
      "A 28-year-old male with popliteal fossa injury and acute limb ischemia.",
    options: [
      {
        id: "a",
        text: "Popliteal artery (only major vessel in popliteal fossa)",
        isCorrect: true,
        explanation:
          "Popliteal artery is the only major arterial trunk in popliteal fossa, runs between popliteus muscle and posterior capsule of knee. Injury causes acute limb ischemia and requires immediate vascular surgery. Popliteal fossa boundaries: superior = biceps and semimembranosus, inferior = gastrocnemius, medial = semitendinosus, lateral = biceps femoris.",
      },
      {
        id: "b",
        text: "Anterior tibial artery",
        isCorrect: false,
        explanation:
          "Anterior tibial artery is distal, after bifurcation.",
      },
      {
        id: "c",
        text: "Posterior tibial artery",
        isCorrect: false,
        explanation:
          "Posterior tibial artery is distal, after bifurcation.",
      },
      {
        id: "d",
        text: "Femoral artery above knee",
        isCorrect: false,
        explanation:
          "Femoral artery is proximal to popliteal, not in fossa.",
      },
    ],
    explanation:
      "Popliteal artery anatomy: (1) Continuation of femoral artery after passing through adductor hiatus, (2) Runs in popliteal fossa between muscle layers, (3) Ends by bifurcating into anterior and posterior tibial arteries at lower border of popliteus muscle, (4) Popliteal fossa = diamond-shaped space with specific boundaries. Popliteal artery injury is limb-threatening (supplies entire lower leg), requires immediate recognition and repair. Absent distal pulses indicate complete occlusion/injury. Limb ischemia signs: pain, pallor, pulselessness, paresthesias, paralysis (5 P's).",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AN",
    topicCode: "AN-MOD-02-TOP-010",
    textbookRefs: [
      { book: "Gray's Anatomy for Students", chapter: "Ch 5", edition: "4th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 50-year-old male with portal hypertension develops esophageal varices. Understanding portosystemic collateral pathways is critical. Which vessel becomes engorged as a portosystemic collateral in portal hypertension?",
    clinicalVignette:
      "A 50-year-old male with cirrhosis and esophageal varices from portal hypertension.",
    options: [
      {
        id: "a",
        text: "Left gastric vein (connecting portal system to esophageal veins)",
        isCorrect: true,
        explanation:
          "Left gastric vein (coronary vein) drains stomach and becomes enlarged in portal hypertension, forming esophageal varices. Portal hypertension increases pressure in left gastric vein → retrograde flow into esophageal venous plexus → variceal dilation.",
      },
      {
        id: "b",
        text: "Right hepatic vein",
        isCorrect: false,
        explanation:
          "Right hepatic vein drains into IVC; not a portosystemic collateral.",
      },
      {
        id: "c",
        text: "Splenic vein",
        isCorrect: false,
        explanation:
          "Splenic vein is part of portal system, not a collateral.",
      },
      {
        id: "d",
        text: "Renal vein",
        isCorrect: false,
        explanation:
          "Renal vein is systemic venous system.",
      },
    ],
    explanation:
      "Portal hypertension (>12 mmHg) leads to portosystemic collateral development: (1) Esophageal varices: from left gastric vein → esophageal plexus, (2) Hemorrhoids: from superior and middle rectal veins → internal pudendal veins, (3) Caput medusae: from paraumbilical veins → superficial epigastric veins, (4) Retroperitoneal collaterals: from portal tributaries → lumbar/gonadal veins. Left gastric vein (coronary vein) becomes prominent in portal hypertension, dilatation of esophageal veins creates varices. Variceal bleeding from esophageal varices is major cause of mortality in cirrhosis.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AN",
    topicCode: "AN-MOD-04-TOP-011",
    textbookRefs: [
      { book: "Gray's Anatomy for Students", chapter: "Ch 3", edition: "4th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 35-year-old female undergoes cesarean section. The surgeon makes a low transverse incision below the arcuate line. Which muscle layer(s) are incised with this approach?",
    clinicalVignette:
      "A 35-year-old female undergoing C-section with lower transverse incision.",
    options: [
      {
        id: "a",
        text: "External oblique, internal oblique, transversus abdominis aponeuroses; rectus muscle retracted not cut",
        isCorrect: true,
        explanation:
          "Low transverse (Pfannenstiel/Kerr) incision: below arcuate line, incises external and internal oblique aponeuroses and transversus abdominis aponeurosis, but rectus muscle separated vertically (not incised) and retracted. Preserves muscle integrity and strength.",
      },
      {
        id: "b",
        text: "All abdominal wall muscles including rectus are cut",
        isCorrect: false,
        explanation:
          "Rectus muscle is retracted, not incised.",
      },
      {
        id: "c",
        text: "Only skin and fascia; muscles protected",
        isCorrect: false,
        explanation:
          "Aponeuroses of oblique and transversus muscles are incised.",
      },
      {
        id: "d",
        text: "External oblique only",
        isCorrect: false,
        explanation:
          "Multiple layers incised.",
      },
    ],
    explanation:
      "Abdominal wall incisions: (1) Midline: through linea alba, avascular plane, divides rectus sheath, (2) Paramedian: medial to rectus sheath, incises rectus muscle, (3) Pfannenstiel/transverse: below arcuate line, incises aponeuroses but retracts rectus. Arcuate line: curved line where posterior rectus sheath ends (approximately at level of anterior superior iliac spine), below this line no posterior sheath. C-section low transverse preferred for cosmesis and strength preservation. Post-operative strength restoration better with aponeurotic closure than with muscle division.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AN",
    topicCode: "AN-MOD-06-TOP-012",
    textbookRefs: [
      { book: "Gray's Anatomy for Students", chapter: "Ch 2", edition: "4th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 60-year-old male with hepatocellular carcinoma undergoes liver resection. The surgeon needs to understand hepatic vascular anatomy. Which hepatic vein drains the posterior superior liver (segments VIII, VII)?",
    clinicalVignette:
      "A 60-year-old male undergoing hepatic resection for HCC with vascular anatomy consideration.",
    options: [
      {
        id: "a",
        text: "Right hepatic vein",
        isCorrect: true,
        explanation:
          "Right hepatic vein drains right lobe segments: V, VI (posterior and anterior inferior) and VIII, VII (posterior and anterior superior). Hepatic venous drainage: (1) Right hepatic vein (right lobe), (2) Middle hepatic vein (hepatic hilum, segments IV, V), (3) Left hepatic vein (left lobe segments II, III), all drain into IVC.",
      },
      {
        id: "b",
        text: "Left hepatic vein",
        isCorrect: false,
        explanation:
          "Left hepatic vein drains left lobe, not posterior superior.",
      },
      {
        id: "c",
        text: "Middle hepatic vein",
        isCorrect: false,
        explanation:
          "Middle hepatic vein drains central segments.",
      },
      {
        id: "d",
        text: "Cystic vein",
        isCorrect: false,
        explanation:
          "Cystic vein is portal tributary, not major hepatic vein.",
      },
    ],
    explanation:
      "Hepatic vascular anatomy: (1) Hepatic artery: divides into right and left branches supplying respective lobes, (2) Portal vein: divides into right and left branches, (3) Hepatic veins: three major veins (right, middle, left) drain into IVC, anatomic variations common, (4) Bile ducts: right and left hepatic ducts join to form common hepatic duct. Couinaud segmental anatomy uses vascular landmarks: segments I-VIII (I = caudate lobe, II-IV = left lobe, V-VIII = right lobe). Segment VIII (posterior superior) and VII (posterior superior) drained by right hepatic vein.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AN",
    topicCode: "AN-MOD-04-TOP-013",
    textbookRefs: [
      { book: "Gray's Anatomy for Students", chapter: "Ch 3", edition: "4th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 50-year-old male develops acute myocardial infarction in the inferior wall. Which coronary artery is most commonly the culprit?",
    clinicalVignette:
      "A 50-year-old male with inferior wall MI requiring understanding of coronary anatomy.",
    options: [
      {
        id: "a",
        text: "Right coronary artery (RCA) in 80-90% of inferior MIs",
        isCorrect: true,
        explanation:
          "Right coronary artery is dominant (supplies inferior wall) in 80-90% of individuals. RCA supplies: (1) right atrium, (2) right ventricle, (3) inferior wall of left ventricle (via posterior descending artery), (4) AV node (60%), (5) SA node (40%). Inferior MI from RCA occlusion.",
      },
      {
        id: "b",
        text: "Left anterior descending (LAD) artery",
        isCorrect: false,
        explanation:
          "LAD supplies anterior wall and septum.",
      },
      {
        id: "c",
        text: "Left circumflex (LCx) artery",
        isCorrect: false,
        explanation:
          "LCx supplies lateral wall.",
      },
      {
        id: "d",
        text: "Left main coronary artery (LMCA)",
        isCorrect: false,
        explanation:
          "LMCA stenosis would affect multiple territories.",
      },
    ],
    explanation:
      "Coronary artery anatomy and territories: (1) Right coronary artery (80-90% dominant): supplies inferior wall LV, right atrium, right ventricle, AV node, (2) Left anterior descending: supplies anterior wall LV, septum, diagonal arteries, apex, (3) Left circumflex: supplies lateral wall LV, obtuse marginals, posterior wall (if dominant). Dominance definition: artery supplying posterior descending artery and posterolateral branches. Inferior MI ECG: ST elevation in II, III, aVF. RCA occlusion causes inferior MI; may involve right ventricle (RV infarction) if proximal RCA occlusion.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AN",
    topicCode: "AN-MOD-05-TOP-014",
    textbookRefs: [
      { book: "Gray's Anatomy for Students", chapter: "Ch 3", edition: "4th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 45-year-old female with breast cancer undergoes sentinel lymph node biopsy. Understanding lymphatic drainage is critical. Which lymph node group receives most breast lymphatic drainage?",
    clinicalVignette:
      "A 45-year-old female with breast cancer requiring lymph node assessment.",
    options: [
      {
        id: "a",
        text: "Axillary lymph nodes (75% of breast drainage)",
        isCorrect: true,
        explanation:
          "Axillary nodes receive 75-95% of breast lymphatic drainage, especially from lateral quadrants. Axillary node involvement indicates regional disease. Internal mammary (parasternal) nodes receive 25% of drainage (especially medial tumors). Supraclavicular nodes indicate advanced disease.",
      },
      {
        id: "b",
        text: "Internal mammary (parasternal) nodes exclusively",
        isCorrect: false,
        explanation:
          "Internal mammary receives ~25% of drainage, not majority.",
      },
      {
        id: "c",
        text: "Supraclavicular nodes",
        isCorrect: false,
        explanation:
          "Supraclavicular involvement indicates advanced disease, not routine drainage.",
      },
      {
        id: "d",
        text: "Contralateral nodes",
        isCorrect: false,
        explanation:
          "Contralateral involvement indicates metastatic disease.",
      },
    ],
    explanation:
      "Breast lymphatic drainage: (1) Axillary nodes (75-95%): four levels (I = lateral, II = central, III = medial to pectoralis minor), most common sentinel nodes, (2) Internal mammary (parasternal): 3-10% (medial tumors), (3) Supraclavicular: advanced disease (Stage IIIC), (4) Interpectoral (Rotter): between pectoralis major and minor, may be sentinel nodes. Sentinel lymph node biopsy identifies first nodes receiving drainage; blue dye ± radiotracer used. Axillary nodal staging critical for prognosis and adjuvant therapy decisions in breast cancer.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AN",
    topicCode: "AN-MOD-05-TOP-015",
    textbookRefs: [
      { book: "Gray's Anatomy for Students", chapter: "Ch 3", edition: "4th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 35-year-old female undergoes craniotomy for brain tumor. The surgeon needs to understand meningeal venous anatomy to prevent hemorrhage. Which dural venous sinus is located at the junction of falx and tentorium?",
    clinicalVignette:
      "A 35-year-old female undergoing craniotomy requiring knowledge of dural sinus anatomy.",
    options: [
      {
        id: "a",
        text: "Straight sinus (sinus rectus)",
        isCorrect: true,
        explanation:
          "Straight sinus is formed at junction of superior sagittal sinus (in falx cerebri) and great cerebral vein (vein of Galen), runs in junction of falx and tentorium, drains into transverse sinus. Injury causes significant hemorrhage.",
      },
      {
        id: "b",
        text: "Superior sagittal sinus",
        isCorrect: false,
        explanation:
          "Superior sagittal sinus runs along falx but not at falx-tentorium junction.",
      },
      {
        id: "c",
        text: "Transverse (lateral) sinus",
        isCorrect: false,
        explanation:
          "Transverse sinus runs along tentorium but not at falx-tentorium junction.",
      },
      {
        id: "d",
        text: "Cavernous sinus",
        isCorrect: false,
        explanation:
          "Cavernous sinus is lateral to sella turcica, not at falx-tentorium junction.",
      },
    ],
    explanation:
      "Dural venous sinuses anatomy: (1) Superior sagittal sinus: between layers of falx cerebri, anteriorly, runs posteriorly, (2) Straight sinus (sinus rectus): formed at falx-tentorium junction from superior sagittal sinus joining great cerebral vein, (3) Transverse (lateral) sinus: runs horizontally in tentorium, receives straight sinus, becomes sigmoid sinus, (4) Cavernous sinus: lateral to pituitary, receives ophthalmic veins. Venous drainage: cortical veins → dural sinuses → internal jugular veins. Straight sinus injury major hemorrhage source during neurosurgery.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AN",
    topicCode: "AN-MOD-07-TOP-016",
    textbookRefs: [
      { book: "Gray's Anatomy for Students", chapter: "Ch 7", edition: "4th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 60-year-old male with gastric cancer undergoes D2 gastrectomy with lymph node dissection. Understanding lymph node station anatomy is critical. Which lymph node stations are considered regional (N1/N2) nodes for gastric cancer?",
    clinicalVignette:
      "A 60-year-old male with gastric cancer undergoing D2 lymphadenectomy.",
    options: [
      {
        id: "a",
        text: "Perigastric nodes (N1) and nearby nodes like left gastric, splenic, celiac (N2)",
        isCorrect: true,
        explanation:
          "Japanese gastric cancer classification: N1 = perigastric nodes (stations 1-6 along gastric walls), N2 = nodes at arterial origins (7-11: left gastric, splenic, celiac, hepatic arteries), N3 = distant nodes (12-16, greater/lesser omentum, para-aortic, etc.). D2 dissection removes N1+N2 nodes.",
      },
      {
        id: "b",
        text: "Only perigastric nodes are N1; all other nodes are M1",
        isCorrect: false,
        explanation:
          "Non-perigastric regional nodes classified as N2, not M1.",
      },
      {
        id: "c",
        text: "All nodes except para-aortic are N2",
        isCorrect: false,
        explanation:
          "Nodes have specific station-based classification.",
      },
      {
        id: "d",
        text: "Para-aortic nodes are N2",
        isCorrect: false,
        explanation:
          "Para-aortic nodes are N3, distant nodes.",
      },
    ],
    explanation:
      "Gastric cancer lymph node stations (Japanese Classification): (1) N1 (perigastric): stations 1-6 (gastric wall stations), (2) N2 (regional): stations 7-11 (left gastric, splenic, celiac, hepatic, superior mesenteric arteries), (3) N3 (distant): stations 12-16 and beyond. D1 dissection = perigastric nodes, D2 = perigastric + regional nodes. Extent of lymph node involvement critical for staging and prognosis. N0 (no nodes) better prognosis than N1/N2/N3. D2 dissection provides better oncologic outcomes but requires skilled surgeon.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AN",
    topicCode: "AN-MOD-04-TOP-017",
    textbookRefs: [
      { book: "Gray's Anatomy for Students", chapter: "Ch 6", edition: "4th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 50-year-old male with acute pancreatitis has imaging showing inflammation extending into the retroperitoneum. Anatomically, what is the posterior boundary of the pancreas?",
    clinicalVignette:
      "A 50-year-old male with acute pancreatitis and retroperitoneal involvement.",
    options: [
      {
        id: "a",
        text: "Posterior peritoneum and peritoneal cavity",
        isCorrect: false,
        explanation:
          "Pancreas is retroperitoneal.",
      },
      {
        id: "b",
        text: "Vertebral column (bodies of L1-L2 vertebrae)",
        isCorrect: true,
        explanation:
          "Pancreas is retroperitoneal structure lying against posterior abdominal wall, anterior to vertebral column (L1-L2 level). Posterior relations: vertebral bodies, psoas major muscles, left kidney hilum, splenic vessels run along posterior pancreas.",
      },
      {
        id: "c",
        text: "Duodenum",
        isCorrect: false,
        explanation:
          "Duodenum is anterior to pancreas.",
      },
      {
        id: "d",
        text: "Stomach",
        isCorrect: false,
        explanation:
          "Stomach is anterior to pancreas.",
      },
    ],
    explanation:
      "Pancreatic anatomy and relations: (1) Location: retroperitoneal at L1-L2 level, (2) Anterior: stomach, first part of duodenum, (3) Posterior: vertebral column, left kidney, adrenal glands, (4) Superior: splenic artery runs along superior border, (5) Inferior: splenic vein runs along inferior border. Pancreas positioned posterior to peritoneal cavity explains why pancreatitis causes retroperitoneal inflammation. Pancreatic divisions: head (within C of duodenum), neck, body, tail (reaches splenic hilum).",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AN",
    topicCode: "AN-MOD-04-TOP-018",
    textbookRefs: [
      { book: "Gray's Anatomy for Students", chapter: "Ch 6", edition: "4th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 40-year-old female with thyroid cancer undergoes total thyroidectomy. The superior thyroid artery is ligated during the procedure. What anatomical relationship makes this ligation safe?",
    clinicalVignette:
      "A 40-year-old female undergoing thyroidectomy with vascular ligation.",
    options: [
      {
        id: "a",
        text: "Superior thyroid artery is terminal branch of external carotid; ligated proximal to laryngeal branch without affecting recurrent laryngeal nerve",
        isCorrect: true,
        explanation:
          "Superior thyroid artery: first branch of external carotid artery, descends to supply superior thyroid pole. Branches: superior laryngeal artery and external branch of superior laryngeal nerve separate anatomically. Ligation proximal to laryngeal branch does not affect recurrent laryngeal nerve (separate inferior laryngeal nerve).",
      },
      {
        id: "b",
        text: "Superior thyroid artery runs with recurrent laryngeal nerve",
        isCorrect: false,
        explanation:
          "RLN is inferior laryngeal nerve, separate from superior thyroid artery.",
      },
      {
        id: "c",
        text: "Superior thyroid artery has no significant branches",
        isCorrect: false,
        explanation:
          "Superior thyroid artery gives off laryngeal branches.",
      },
      {
        id: "d",
        text: "Superior thyroid artery is internal carotid origin",
        isCorrect: false,
        explanation:
          "Superior thyroid artery from external carotid.",
      },
    ],
    explanation:
      "Thyroid arterial supply: (1) Superior thyroid artery (external carotid origin): supplies superior thyroid lobe, gives off superior laryngeal artery and external branch of superior laryngeal nerve, (2) Inferior thyroid artery (thyrocervical trunk from subclavian): supplies inferior pole, runs medial to RLN (variable relationship), (3) Thyroidea ima (anomalous, <1%): from aortic arch. Safe surgical ligation requires understanding of neural relationships to prevent injury.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AN",
    topicCode: "AN-MOD-05-TOP-019",
    textbookRefs: [
      { book: "Gray's Anatomy for Students", chapter: "Ch 8", edition: "4th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 55-year-old male with appendiceal carcinoid develops regional lymph node metastases. Understanding appendiceal vascular anatomy is important. Which artery supplies the appendix?",
    clinicalVignette:
      "A 55-year-old male with appendiceal carcinoid requiring lymph node dissection.",
    options: [
      {
        id: "a",
        text: "Appendicular artery (branch of ileocolic artery from superior mesenteric artery)",
        isCorrect: true,
        explanation:
          "Appendicular artery: branch of ileocolic artery (SMArtery), runs in mesoappendix (peritoneal fold). Accompanied by appendicular vein draining to ileocolic vein → SMAvein → portal vein. Lymphatic drainage: ileocolic lymph nodes first, then mesenteric nodes.",
      },
      {
        id: "b",
        text: "Right colic artery",
        isCorrect: false,
        explanation:
          "Right colic artery supplies right colon, not appendix.",
      },
      {
        id: "c",
        text: "Right gastroepiploic artery",
        isCorrect: false,
        explanation:
          "Right gastroepiploic supplies stomach and omentum.",
      },
      {
        id: "d",
        text: "Inferior mesenteric artery branches",
        isCorrect: false,
        explanation:
          "IMA supplies distal colon, not appendix.",
      },
    ],
    explanation:
      "Appendiceal anatomy: (1) Location: variable (retrocecal 65%, subcecal 31%, pre-ileal 2%, other 2%), (2) Blood supply: appendicular artery (branch of ileocolic artery), runs in mesoappendix, (3) Lymphatic drainage: mesoappendix → ileocolic nodes → mesenteric nodes, (4) Innervation: sympathetic and parasympathetic fibers. Appendicitis inflammation/infection spreads via lymphatics and blood vessels. Appendiceal carcinoid metastases follow lymphatic drainage pattern.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AN",
    topicCode: "AN-MOD-04-TOP-020",
    textbookRefs: [
      { book: "Gray's Anatomy for Students", chapter: "Ch 6", edition: "4th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 50-year-old male with a dorsal hand wound shows inability to extend fingers at metacarpophalangeal (MCP) joints while preserving some extension at interphalangeal (IP) joints. Which nerve(s) is/are most likely injured?",
    clinicalVignette:
      "A 50-year-old male with hand injury showing selective MCP extension loss.",
    options: [
      {
        id: "a",
        text: "Posterior interosseous nerve (PIN) supplying extensor digitorum communis",
        isCorrect: true,
        explanation:
          "PIN (radial nerve branch) supplies: (1) extensor digitorum communis (MCP and IP extension), (2) extensor carpi radialis longus/brevis, (3) extensor carpi ulnaris, (4) extensor pollicis longus/brevis. Injury causes loss of finger extension at MCP primarily; IP extension preserved through intrinsic muscles.",
      },
      {
        id: "b",
        text: "Ulnar nerve deep branch",
        isCorrect: false,
        explanation:
          "Ulnar deep branch supplies intrinsic muscles, not EDC.",
      },
      {
        id: "c",
        text: "Median nerve anterior interosseous branch",
        isCorrect: false,
        explanation:
          "AIN supplies finger flexors, not extensors.",
      },
      {
        id: "d",
        text: "Radial sensory nerve only",
        isCorrect: false,
        explanation:
          "Radial sensory nerve is sensory only, not motor.",
      },
    ],
    explanation:
      "Hand extension anatomy: (1) Extrinsic extensors: extensor digitorum communis (EDC) via PIN causes MCP extension, (2) Intrinsic muscles (lumbricals innervated by median/ulnar, interossei by ulnar) cause IP extension. PIN injury at dorsal hand level affects EDC, causing loss of MCP extension but preserving some IP extension through intrinsic muscles. Distinct from complete radial nerve injury at proximal forearm (affects wrist and finger extension). Clinical testing: MCP extension vs IP extension differentiates extrinsic vs intrinsic injury.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AN",
    topicCode: "AN-MOD-01-TOP-021",
    textbookRefs: [
      { book: "Gray's Anatomy for Students", chapter: "Ch 4", edition: "4th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 60-year-old male undergoes brain aneurysm repair via craniotomy. The surgeon must understand cerebral arterial anatomy. Which artery typically gives rise to the posterior communicating artery (PComm)?",
    clinicalVignette:
      "A 60-year-old male with aneurysm at PComm requiring surgical anatomy knowledge.",
    options: [
      {
        id: "a",
        text: "Internal carotid artery (ICA) at the cavernous sinus level",
        isCorrect: true,
        explanation:
          "Posterior communicating artery: branch of internal carotid artery at ophthalmic artery level, joins middle cerebral artery to posterior cerebral artery, connects anterior and posterior circulation. Common aneurysm site (30% of ruptured aneurysms). ICA bifurcates into anterior and middle cerebral arteries.",
      },
      {
        id: "b",
        text: "Anterior cerebral artery (ACA)",
        isCorrect: false,
        explanation:
          "ACA doesn't give off PComm; PComm arises from ICA.",
      },
      {
        id: "c",
        text: "Basilar artery",
        isCorrect: false,
        explanation:
          "Basilar artery is posterior circulation, not ICA branch.",
      },
      {
        id: "d",
        text: "Posterior cerebral artery (PCA)",
        isCorrect: false,
        explanation:
          "PCA receives PComm from ICA, doesn't originate it.",
      },
    ],
    explanation:
      "Cerebral circle of Willis anatomy: (1) Anterior circulation: ICA bifurcates into ACA and MCA, connected by anterior communicating artery (ACom), (2) Posterior circulation: basilar artery bifurcates into posterior cerebral arteries (PCA), (3) Connections: posterior communicating arteries connect ICA to PCA, forming vascular ring. Common aneurysm sites: ACom junction (anterior communicating) 30%, MCA bifurcation 30%, ICA-PComm junction 30%. PComm aneurysms important because rupture causes SAH, compression causes CN III palsy.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AN",
    topicCode: "AN-MOD-07-TOP-022",
    textbookRefs: [
      { book: "Gray's Anatomy for Students", chapter: "Ch 7", edition: "4th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 40-year-old female with ovarian cancer undergoes staging lymphadenectomy. Understanding ovarian lymphatic drainage is critical. To which regional lymph nodes does the ovary primarily drain?",
    clinicalVignette:
      "A 40-year-old female with ovarian cancer requiring lymph node dissection.",
    options: [
      {
        id: "a",
        text: "Lumbar (para-aortic) lymph nodes at L1-L2 level",
        isCorrect: true,
        explanation:
          "Ovarian lymphatic drainage: lumbar (interaortocaval) nodes at L1-L2 level. Ovarian arteries arise from aorta below renal arteries; lymphatics follow ovarian arteries and vessels in infundibulopelvic ligament → lumbar nodes. Distinct from uterine/cervical cancer (internal iliac/pelvic nodes) or vulvar cancer (inguinal nodes).",
      },
      {
        id: "b",
        text: "Internal iliac (pelvic) lymph nodes",
        isCorrect: false,
        explanation:
          "Internal iliac nodes drain lower genital tract, not ovary.",
      },
      {
        id: "c",
        text: "Inguinal lymph nodes",
        isCorrect: false,
        explanation:
          "Inguinal nodes drain vulva, not ovary.",
      },
      {
        id: "d",
        text: "Axillary lymph nodes",
        isCorrect: false,
        explanation:
          "Axillary nodes drain breast, not ovary.",
      },
    ],
    explanation:
      "Gynecologic lymphatic drainage patterns: (1) Ovary: lumbar (para-aortic) nodes (L1-L2), follows ovarian artery, (2) Fallopian tube: lumbar and pelvic nodes, (3) Uterine body: pelvic nodes (external iliac, internal iliac), lumbar nodes, (4) Cervix: pelvic nodes (internal iliac, obturator), sacral nodes, (5) Vulva: inguinal nodes. Ovarian cancer staging requires lumbar lymphadenectomy. Distinction from endometrial cancer (pelvic staging) important for surgical approach.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AN",
    topicCode: "AN-MOD-04-TOP-023",
    textbookRefs: [
      { book: "Gray's Anatomy for Students", chapter: "Ch 6", edition: "4th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 50-year-old male with rectal cancer undergoes low anterior resection (LAR). Injuring the hypogastric plexus anteriorly risks sexual dysfunction. Which nerve structures are most vulnerable during anterior dissection of the rectum?",
    clinicalVignette:
      "A 50-year-old male with rectal cancer undergoing LAR with nerve preservation consideration.",
    options: [
      {
        id: "a",
        text: "Hypogastric nerves (sympathetic) anterior to sacral promontory",
        isCorrect: true,
        explanation:
          "Hypogastric nerves (sympathetic postganglionic): anterior to sacral promontory, descend on either side of rectum, vulnerable during anterior dissection. Injury causes: ejaculation dysfunction (males), lubrication problems (females). Pelvic splanchnic nerves (parasympathetic) run posteriorly, involved in erection and lubrication.",
      },
      {
        id: "b",
        text: "Pudendal nerve only",
        isCorrect: false,
        explanation:
          "Pudendal nerve arises from S2-S4, runs laterally in pudendal canal, not typical anterior LAR injury.",
      },
      {
        id: "c",
        text: "Sacral nerves (parasympathetic) directly",
        isCorrect: false,
        explanation:
          "Sacral nerves more posterior, less vulnerable during anterior dissection.",
      },
      {
        id: "d",
        text: "Genitofemoral nerves",
        isCorrect: false,
        explanation:
          "Genitofemoral nerves run laterally, not in anterior rectal dissection field.",
      },
    ],
    explanation:
      "Pelvic autonomic nerve anatomy: (1) Hypogastric plexus: superior to rectum, sacral promontory level, sympathetic preganglionic fibers, anterior dissection risk, (2) Hypogastric nerves: descend on rectal sides, sympathetic postganglionic, (3) Pelvic splanchnic nerves: S2-S4 parasympathetic preganglionic, run posteriorly, posterolateral dissection risk. Sexual dysfunction from nerve injury: ejaculation (sympathetic), erection and lubrication (parasympathetic). Total mesorectal excision (TME) technique with careful dissection preserves nerves while achieving oncologic control.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AN",
    topicCode: "AN-MOD-04-TOP-024",
    textbookRefs: [
      { book: "Gray's Anatomy for Students", chapter: "Ch 3", edition: "4th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 35-year-old male develops compartment syndrome of the leg. The anterior compartment is most commonly affected. What are the contents of the anterior compartment?",
    clinicalVignette:
      "A 35-year-old male with anterior leg compartment syndrome.",
    options: [
      {
        id: "a",
        text: "Tibialis anterior, extensor digitorum longus, extensor hallucis longus, and anterior tibial artery/nerve",
        isCorrect: true,
        explanation:
          "Anterior compartment of leg contains: (1) tibialis anterior (dorsiflexion), (2) extensor digitorum longus (toe extension), (3) extensor hallucis longus (great toe extension), (4) anterior tibial artery and deep peroneal nerve (dorsiflexion and toe extension innervation). Compartment syndrome from trauma, crush injury, burns, vascular injury.",
      },
      {
        id: "b",
        text: "Gastrocnemius and soleus muscles only",
        isCorrect: false,
        explanation:
          "Gastrocnemius and soleus are in posterior compartment.",
      },
      {
        id: "c",
        text: "Peroneus muscles",
        isCorrect: false,
        explanation:
          "Peroneus muscles are in lateral compartment.",
      },
      {
        id: "d",
        text: "Flexor digitorum longus and posterior tibialis",
        isCorrect: false,
        explanation:
          "These are in posterior compartment.",
      },
    ],
    explanation:
      "Leg compartment anatomy: (1) Anterior: tibialis anterior, EDL, EHL, anterior tibial vessels, deep peroneal nerve, (2) Lateral: peroneus longus/brevis, superficial peroneal nerve, (3) Posterior (superficial): gastrocnemius, soleus, plantaris, (4) Posterior (deep): tibialis posterior, FDL, FHL, posterior tibial vessels, tibial nerve. Compartment syndrome: (1) increased compartment pressure compromises microcirculation, (2) anterior most common, (3) requires fasciotomy urgently (<6-8 hours), (4) untreated leads to Volkmann's contracture and permanent disability.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AN",
    topicCode: "AN-MOD-02-TOP-025",
    textbookRefs: [
      { book: "Gray's Anatomy for Students", chapter: "Ch 5", edition: "4th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 60-year-old male with prostate cancer undergoes radical prostatectomy. The surgeon must avoid injury to the neurovascular bundles (cavernous nerves) to preserve erectile function. Where do the cavernous nerves run relative to the prostate?",
    clinicalVignette:
      "A 60-year-old male with prostate cancer undergoing nerve-sparing prostatectomy.",
    options: [
      {
        id: "a",
        text: "Posterolateral to the prostate within the neurovascular bundle",
        isCorrect: true,
        explanation:
          "Cavernous nerves (parasympathetic from pelvic plexus) run posterolaterally in neurovascular bundles on either side of prostate, crucial for erectile function. Nerve-sparing technique identifies and carefully dissects around NVB. Loss of cavernous nerves → erectile dysfunction post-op.",
      },
      {
        id: "b",
        text: "Anteriorly between pubic bone and prostate",
        isCorrect: false,
        explanation:
          "Anterior is dorsal venous complex area.",
      },
      {
        id: "c",
        text: "Medially within prostate capsule",
        isCorrect: false,
        explanation:
          "Cavernous nerves are extraprostate, not within capsule.",
      },
      {
        id: "d",
        text: "Superiorly at the apex of the prostate",
        isCorrect: false,
        explanation:
          "Apex is where apical dissection occurs; NVB posterolateral.",
      },
    ],
    explanation:
      "Prostate vascular and nerve anatomy: (1) Neurovascular bundles: posterolateral, contain cavernous nerves (parasympathetic), small arteries and veins, (2) Dorsal venous complex: anterior, formed by confluence of dorsal vein, superficial penile veins, (3) Capsular arteries: branches from hypogastric vessels pierce capsule, supply gland. Nerve-sparing prostatectomy: identifies NVB, carefully dissects around it, preserves erectile function. Grade of nerve sparing: bilateral (best), unilateral, or non-nerve-sparing. Post-op erectile dysfunction risk depends on nerve preservation grade and patient age.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AN",
    topicCode: "AN-MOD-04-TOP-026",
    textbookRefs: [
      { book: "Gray's Anatomy for Students", chapter: "Ch 3", edition: "4th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 50-year-old female undergoes total hip replacement. The femoral nerve passes through the pelvic brim, and injury would cause loss of hip flexion and knee extension. What is the anatomical relationship of the femoral nerve to the femoral artery and vein?",
    clinicalVignette:
      "A 50-year-old female undergoing THR with femoral nerve risk understanding.",
    options: [
      {
        id: "a",
        text: "Femoral nerve lateral to artery; artery medial; vein medial to artery (remember NAVY)",
        isCorrect: true,
        explanation:
          "Femoral triangle anatomy (lateral to medial): (1) Femoral nerve (lateral, inside fascia lata), (2) Femoral artery, (3) Femoral vein (medial, inside fascia cribrosa). Mnemonic NAVY: Nerve, Artery, Vein, Y-fronts (lymph node). This arrangement important for femoral access and avoiding nerve injury.",
      },
      {
        id: "b",
        text: "Femoral nerve medial to artery",
        isCorrect: false,
        explanation:
          "Nerve is lateral, not medial.",
      },
      {
        id: "c",
        text: "Femoral vein lateral to artery",
        isCorrect: false,
        explanation:
          "Vein is medial to artery.",
      },
      {
        id: "d",
        text: "Femoral nerve runs inside femoral sheath with artery and vein",
        isCorrect: false,
        explanation:
          "Femoral nerve runs outside (lateral to) femoral sheath.",
      },
    ],
    explanation:
      "Femoral canal anatomy: (1) Femoral sheath: contains artery, vein, and lymphatics, located medially, (2) Femoral nerve: runs lateral to femoral sheath within iliopectineal fascia, separate compartment, (3) Relationship: (lateral to medial) femoral nerve, femoral artery (central), femoral vein (medial). Iliopsoas tendon runs with femoral nerve in groove. Hip replacement approach (anterolateral) risks femoral nerve injury if dissection extended too far medially. Nerve injury causes loss of hip flexion (iliopsoas) and knee extension (quadriceps).",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AN",
    topicCode: "AN-MOD-02-TOP-027",
    textbookRefs: [
      { book: "Gray's Anatomy for Students", chapter: "Ch 5", edition: "4th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 45-year-old male with gastric cancer has imaging showing tumor invasion. Understanding gastroepiploic artery anatomy is important for surgical planning. Which artery gives off the gastroepiploic arteries?",
    clinicalVignette:
      "A 45-year-old male with gastric cancer requiring lymph node dissection.",
    options: [
      {
        id: "a",
        text: "Gastroduodenal artery (right) and splenic artery (left)",
        isCorrect: true,
        explanation:
          "Gastroepiploic arteries: right gastroepiploic from gastroduodenal artery (hepatic artery branch), left gastroepiploic from splenic artery. Both run along greater curvature in greater omentum. Important for gastric cancer surgery and greater omentum resection.",
      },
      {
        id: "b",
        text: "Left gastric artery only",
        isCorrect: false,
        explanation:
          "Left gastric gives off branches to lesser curvature, not gastroepiploic.",
      },
      {
        id: "c",
        text: "Superior mesenteric artery",
        isCorrect: false,
        explanation:
          "SMA supplies duodenum and intestines, not gastroepiploic.",
      },
      {
        id: "d",
        text: "Celiac trunk directly",
        isCorrect: false,
        explanation:
          "Celiac trunk is main trunk; gastroepiploic from branches.",
      },
    ],
    explanation:
      "Gastric arterial supply: (1) Left gastric artery: celiac origin, lesser curvature, left gastric nodes, (2) Right gastric artery: hepatic artery origin, lesser curvature antrum, (3) Left gastroepiploic: splenic artery origin, greater curvature, left gastroepiploic nodes, (4) Right gastroepiploic: gastroduodenal artery origin, greater curvature, right gastroepiploic nodes. During gastrectomy with D2 lymphadenectomy: gastroepiploic vessels ligated, greater omentum resected with greater curvature lymph nodes. Vascular ligation requires careful dissection to avoid excessive bleeding.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AN",
    topicCode: "AN-MOD-04-TOP-028",
    textbookRefs: [
      { book: "Gray's Anatomy for Students", chapter: "Ch 6", edition: "4th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 55-year-old male with renal cell carcinoma undergoes radical nephrectomy. The left renal vein enters the inferior vena cava. What is the anatomical relationship of the left renal vein to the left testicular vein?",
    clinicalVignette:
      "A 55-year-old male with left RCC undergoing radical nephrectomy with vascular anatomy consideration.",
    options: [
      {
        id: "a",
        text: "Left testicular vein drains into left renal vein (not directly into IVC)",
        isCorrect: true,
        explanation:
          "Left testicular vein drains into left renal vein, which then enters IVC. Right testicular vein drains directly into IVC. This anatomical asymmetry important for nephrectomy: left testicular vein may be thrombosed if left renal vein compressed by tumor.",
      },
      {
        id: "b",
        text: "Left testicular vein drains directly into IVC",
        isCorrect: false,
        explanation:
          "That is right testicular vein drainage.",
      },
      {
        id: "c",
        text: "Left testicular vein anastomoses with left colic vein",
        isCorrect: false,
        explanation:
          "Testicular vein to renal vein is main drainage.",
      },
      {
        id: "d",
        text: "Left testicular vein drains into left lumbar veins",
        isCorrect: false,
        explanation:
          "Testicular vein drainage to renal vein is primary.",
      },
    ],
    explanation:
      "Testicular venous drainage asymmetry: (1) Right testicular vein: drains directly into IVC at level of right renal artery origin, (2) Left testicular vein: drains into left renal vein, which then joins IVC. Clinical significance: left varicocele more common (higher hydrostatic pressure from left renal vein), left renal vein compression by tumor → testicular vein thrombosis. Renal vein tumor thrombus extends to IVC in ~10% of RCCs, affecting surgical approach and prognosis.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AN",
    topicCode: "AN-MOD-04-TOP-029",
    textbookRefs: [
      { book: "Gray's Anatomy for Students", chapter: "Ch 3", edition: "4th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 50-year-old female with cervical cancer undergoes radical hysterectomy with parametrial and lymph node resection. Understanding parametrial anatomy is critical. What structures run through the parametrium?",
    clinicalVignette:
      "A 50-year-old female with cervical cancer undergoing radical hysterectomy.",
    options: [
      {
        id: "a",
        text: "Uterine artery, cardinal ligament (nerve plexus), and ureter",
        isCorrect: true,
        explanation:
          "Parametrium (lateral parametrial tissue) contains: (1) uterine artery (from hypogastric artery), (2) cardinal ligament (containing nerve plexus involved in bladder/bowel function), (3) ureter (running medial to uterine artery in parametrium). Radical hysterectomy removes parametrium and nodes; carefully avoids ureteral injury.",
      },
      {
        id: "b",
        text: "Ovarian vessels only",
        isCorrect: false,
        explanation:
          "Ovarian vessels run in infundibulopelvic ligament, not parametrium.",
      },
      {
        id: "c",
        text: "Fallopian tube and ligament of ovary",
        isCorrect: false,
        explanation:
          "Fallopian tube is superior to parametrium.",
      },
      {
        id: "d",
        text: "Bladder vessels",
        isCorrect: false,
        explanation:
          "Bladder vessels in bladder wall, not parametrium.",
      },
    ],
    explanation:
      "Parametrial anatomy: (1) Lateral uterine tissue containing uterine artery branches, cardinal ligament with autonomic plexus (pelvic plexus), (2) Ureter courses medially through parametrium, medial to uterine artery crossing (\"water under the bridge\"), (3) Pelvic plexus in cardinal ligament involved in bladder emptying, bowel motility, sexual function. Radical hysterectomy removes parametrium to achieve tumor-free margins; careful ureteral mobilization prevents injury. Nerve injury → bladder dysfunction, constipation, sexual dysfunction.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AN",
    topicCode: "AN-MOD-04-TOP-030",
    textbookRefs: [
      { book: "Gray's Anatomy for Students", chapter: "Ch 3", edition: "4th" },
    ],
  },
];
