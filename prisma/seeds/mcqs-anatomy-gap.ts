import type { McqData, SubjectMcqs } from "./content-loader";

export const anatomyGapMcqs: SubjectMcqs = {
  subjectCode: "AN",
  mcqs: [
    // AN-MOD-01-TOP-06: Forearm: Anterior & Posterior Compartments
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-01-TOP-06",
      stem: "A 35-year-old carpenter sustained a laceration to the ventral forearm 5cm distal to the elbow crease. The patient cannot flex the interphalangeal joint of the thumb while sensation is intact. Which of the following structures is most likely injured?",
      clinicalVignette: "Ventral forearm laceration with loss of thumb IP flexion but preserved sensation",
      options: [
        {
          id: "a",
          text: "Anterior interosseous nerve",
          isCorrect: true,
          explanation: "The AIN is a branch of the median nerve supplying FPL (flexor pollicis longus) which flexes the IP joint of thumb. AIN injuries classically present with loss of thumb IP flexion while hand sensation remains intact."
        },
        {
          id: "b",
          text: "Ulnar nerve",
          isCorrect: false,
          explanation: "Ulnar nerve injury would affect intrinsic hand muscles and sensation in medial 1.5 digits, not isolated thumb IP flexion."
        },
        {
          id: "c",
          text: "Median nerve proper",
          isCorrect: false,
          explanation: "While median nerve contains AIN, complete median nerve injury would also cause sensory loss in radial 3.5 digits."
        },
        {
          id: "d",
          text: "Radial nerve",
          isCorrect: false,
          explanation: "Radial nerve innervates posterior compartment muscles; it does not supply FPL."
        }
      ],
      explanation: "Anterior interosseous nerve (branch of median nerve) innervates FPL, FDP to index/middle, and PQ. AIN syndrome presents with isolated loss of thumb IP flexion and index DIP flexion without sensory loss, making it a pure motor nerve injury.",
      difficulty: "MEDIUM",
      bloomsLevel: "Analysis",
      examTags: ["NEXT_STEP1", "NEET_PG", "AIIMS"],
      textbookRefs: [
        { book: "BD Chaurasia's Human Anatomy", chapter: "Forearm", edition: "8th" },
        { book: "Vishram Singh Clinical Anatomy", chapter: "Upper Limb Nerves", edition: "3rd" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-01-TOP-06",
      stem: "During surgical dissection of the forearm, a structure is identified lying between the radius and ulna at the proximal end of the interosseous space. This structure is responsible for holding the two bones apart. What is the embryological origin of this structure?",
      clinicalVignette: "Anatomical identification of interosseous membrane structure",
      options: [
        {
          id: "a",
          text: "Fascia from the lateral epicondyle",
          isCorrect: false,
          explanation: "The interosseous membrane does not originate from epicondylar fascia but represents a true membranous structure."
        },
        {
          id: "b",
          text: "Periosteum of radius and ulna",
          isCorrect: true,
          explanation: "The interosseous membrane is derived from periosteal investment and connective tissue between radius and ulna, strengthening the syndesmosis."
        },
        {
          id: "c",
          text: "Extension of the anterior fascia of forearm",
          isCorrect: false,
          explanation: "While the fascia is continuous, the membrane itself is periosteal in origin."
        },
        {
          id: "d",
          text: "Fibroblastic tissue from myofascial compartments",
          isCorrect: false,
          explanation: "The membrane is connective tissue derived from periosteum, not myofascial origin."
        }
      ],
      explanation: "The interosseous membrane between radius and ulna is derived from periosteum and connective tissue. It provides attachment for deep muscles and transmits force from radius to ulna during pronation/supination.",
      difficulty: "EASY",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [
        { book: "Gray's Anatomy", chapter: "Forearm Osteology", edition: "42nd" },
        { book: "BD Chaurasia's Human Anatomy", chapter: "Forearm Bones", edition: "8th" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-01-TOP-06",
      stem: "A 28-year-old manual laborer presents with weakness in forearm pronation and wrist flexion. Examination reveals atrophy of the muscles in the anterior compartment of the forearm distal to the elbow. Which nerve is most likely compressed at the proximal forearm?",
      clinicalVignette: "Proximal forearm weakness with anterior compartment atrophy",
      options: [
        {
          id: "a",
          text: "Radial nerve",
          isCorrect: false,
          explanation: "Radial nerve innervates posterior compartment; compression would cause wrist drop and finger extension loss."
        },
        {
          id: "b",
          text: "Ulnar nerve",
          isCorrect: false,
          explanation: "Ulnar nerve innervates medial aspect; would cause intrinsic hand muscle weakness."
        },
        {
          id: "c",
          text: "Median nerve",
          isCorrect: true,
          explanation: "Median nerve supplies pronator teres, FCR, PL, and FDS in anterior forearm. Compression causes pronation and wrist flexion weakness with anterior compartment atrophy."
        },
        {
          id: "d",
          text: "Posterior interosseous nerve",
          isCorrect: false,
          explanation: "PIN is pure motor to posterior compartment; does not cause anterior weakness."
        }
      ],
      explanation: "The median nerve in the proximal forearm innervates pronator teres, flexor carpi radialis, palmaris longus, and flexor digitorum superficialis. Compression at this level produces classic anterior forearm weakness and atrophy pattern.",
      difficulty: "MEDIUM",
      bloomsLevel: "ProblemSolving",
      examTags: ["NEXT_STEP1", "NEET_PG", "AIIMS"],
      textbookRefs: [
        { book: "Vishram Singh Clinical Anatomy", chapter: "Median Nerve Compression", edition: "3rd" },
        { book: "BD Chaurasia's Human Anatomy", chapter: "Forearm Compartments", edition: "8th" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-01-TOP-06",
      stem: "An athlete with posterior forearm compartment injury presents with loss of wrist extension but intact finger extension. Which of the following muscles is likely spared?",
      clinicalVignette: "Posterior forearm injury with selective muscle involvement",
      options: [
        {
          id: "a",
          text: "Extensor carpi ulnaris",
          isCorrect: false,
          explanation: "ECU extends the wrist and would be affected in posterior compartment injury."
        },
        {
          id: "b",
          text: "Extensor digitorum communis",
          isCorrect: true,
          explanation: "EDC extends fingers at MCP joints. If wrist extension is lost but finger extension is intact, the nerve to EDC (posterior interosseous nerve) is likely spared while more proximal extensors are affected."
        },
        {
          id: "c",
          text: "Extensor carpi radialis longus",
          isCorrect: false,
          explanation: "ECRB is a wrist extensor; loss of wrist extension suggests its involvement."
        },
        {
          id: "d",
          text: "Anconeus",
          isCorrect: false,
          explanation: "Anconeus assists elbow extension; its injury would not specifically spare finger extension."
        }
      ],
      explanation: "EDC is innervated by the posterior interosseous nerve (branch of radial) and extends fingers at MCP joints. In selective compartment injury, if finger extension remains but wrist extension is lost, EDC must be spared while ECRB/ECRL are affected.",
      difficulty: "MEDIUM",
      bloomsLevel: "Analysis",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [
        { book: "BD Chaurasia's Human Anatomy", chapter: "Posterior Forearm Compartment", edition: "8th" },
        { book: "Vishram Singh Clinical Anatomy", chapter: "Radial Nerve Branches", edition: "3rd" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-01-TOP-06",
      stem: "During a forearm dissection, the supinator muscle is identified. What is the primary action of this muscle when the elbow is in extension versus when it is in flexion?",
      clinicalVignette: "Anatomical teaching on supinator muscle mechanics",
      options: [
        {
          id: "a",
          text: "Supination is more powerful when elbow is extended; flexion compromises the mechanical advantage",
          isCorrect: true,
          explanation: "The supinator muscle is a deep muscle working primarily on the radius. When the elbow is extended, supinator can work with maximum mechanical efficiency. Elbow flexion recruits biceps brachii which becomes a more efficient supinator."
        },
        {
          id: "b",
          text: "Supination action is identical regardless of elbow position",
          isCorrect: false,
          explanation: "Elbow position significantly affects the mechanical advantage and efficiency of supination."
        },
        {
          id: "c",
          text: "Supinator is inactive when elbow is extended",
          isCorrect: false,
          explanation: "Supinator is actually most efficient with elbow extended, not inactive."
        },
        {
          id: "d",
          text: "Supination by supinator is stronger when elbow is flexed due to reduced radius of motion",
          isCorrect: false,
          explanation: "Flexed elbow position actually reduces supinator's mechanical advantage."
        }
      ],
      explanation: "The supinator muscle is an elbow-independent supinator, most effective with elbow extension providing optimal mechanical advantage. With elbow flexion, biceps brachii becomes the primary supinator. This functional relationship is clinically important in assessing supination power.",
      difficulty: "EASY",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1"],
      textbookRefs: [
        { book: "Gray's Anatomy", chapter: "Forearm Muscles and Actions", edition: "42nd" },
        { book: "BD Chaurasia's Human Anatomy", chapter: "Forearm Muscles", edition: "8th" }
      ]
    },
    // AN-MOD-01-TOP-08: Joints of Upper Limb
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-01-TOP-08",
      stem: "A 45-year-old patient with rheumatoid arthritis develops swan neck deformity in the fingers. This deformity results from imbalance of forces at which joint?",
      clinicalVignette: "Swan neck deformity in rheumatoid arthritis",
      options: [
        {
          id: "a",
          text: "Metacarpophalangeal joint",
          isCorrect: false,
          explanation: "While MCP involvement occurs in RA, swan neck deformity specifically involves PIP joint hyperextension."
        },
        {
          id: "b",
          text: "Proximal interphalangeal joint",
          isCorrect: true,
          explanation: "Swan neck deformity features PIP hyperextension (due to central slip contracture and lateral band dorsal migration) with DIP flexion. The PIP joint is the primary site of pathology in this classic RA deformity."
        },
        {
          id: "c",
          text: "Distal interphalangeal joint",
          isCorrect: false,
          explanation: "DIP flexion is secondary to PIP hyperextension in swan neck deformity."
        },
        {
          id: "d",
          text: "Carpometacarpal joint",
          isCorrect: false,
          explanation: "CMC involvement causes thumb deformities, not swan neck in fingers."
        }
      ],
      explanation: "Swan neck deformity (PIP hyperextension + DIP flexion) develops from destruction of the central slip of extensor expansion and dorsal migration of lateral bands. PIP joint hyperextension is the defining feature. This represents a classic hand deformity in advanced RA.",
      difficulty: "MEDIUM",
      bloomsLevel: "Analysis",
      examTags: ["NEXT_STEP1", "NEET_PG", "AIIMS"],
      textbookRefs: [
        { book: "BD Chaurasia's Human Anatomy", chapter: "Hand Anatomy and Function", edition: "8th" },
        { book: "Vishram Singh Clinical Anatomy", chapter: "Hand Joints", edition: "3rd" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-01-TOP-08",
      stem: "The glenohumeral joint is classified as a ball-and-socket joint with significant inherent instability. Which anatomical feature provides the primary active stability to this joint during abduction?",
      clinicalVignette: "Glenohumeral joint stability mechanisms",
      options: [
        {
          id: "a",
          text: "Glenoid labrum depth",
          isCorrect: false,
          explanation: "While labrum contributes to passive stability, the rotator cuff provides dynamic (active) stability."
        },
        {
          id: "b",
          text: "Rotator cuff muscles",
          isCorrect: true,
          explanation: "The rotator cuff (supraspinatus, infraspinatus, teres minor, subscapularis) provides dynamic stabilization by compressing the humeral head into the glenoid fossa. This active muscle contraction is the primary stabilizer during abduction."
        },
        {
          id: "c",
          text: "Anterior and posterior joint capsule",
          isCorrect: false,
          explanation: "Capsule provides static stability but not the primary active mechanism."
        },
        {
          id: "d",
          text: "Coracohumeral ligament",
          isCorrect: false,
          explanation: "Ligaments provide passive stability, not active dynamic stabilization."
        }
      ],
      explanation: "Glenohumeral stability is maintained by dynamic (rotator cuff) and static (capsule, ligaments, labrum) components. During abduction, the rotator cuff muscles actively compress the humeral head into the glenoid, providing primary dynamic stability. Rotator cuff failure leads to instability and impingement.",
      difficulty: "MEDIUM",
      bloomsLevel: "ProblemSolving",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [
        { book: "Gray's Anatomy", chapter: "Shoulder Joint Biomechanics", edition: "42nd" },
        { book: "Vishram Singh Clinical Anatomy", chapter: "Shoulder Stability", edition: "3rd" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-01-TOP-08",
      stem: "A patient sustains an anterior shoulder dislocation. Post-reduction imaging reveals a defect in the posterolateral aspect of the humeral head. What is the pathophysiological consequence of this bony defect?",
      clinicalVignette: "Anterior shoulder dislocation with bony Bankart lesion",
      options: [
        {
          id: "a",
          text: "Increased risk of posterior shoulder instability",
          isCorrect: false,
          explanation: "Posterolateral humeral head defects increase anterior instability, not posterior."
        },
        {
          id: "b",
          text: "Increased risk of recurrent anterior dislocation",
          isCorrect: true,
          explanation: "A posterolateral humeral head defect (Hill-Sachs lesion) increases risk of recurrent anterior dislocation by 60%. Large defects (>20% head involvement) often require surgical reconstruction."
        },
        {
          id: "c",
          text: "Mechanical limitation of external rotation only",
          isCorrect: false,
          explanation: "Hill-Sachs lesions increase instability risk beyond just rotational limitation."
        },
        {
          id: "d",
          text: "Permanent loss of glenohumeral mobility",
          isCorrect: false,
          explanation: "Mobility may be preserved; instability is the primary consequence."
        }
      ],
      explanation: "Hill-Sachs lesion (posterolateral humeral head compression fracture) results from anterior dislocation. This bony defect significantly increases recurrence risk. Large Hill-Sachs lesions combined with anterior labral (Bankart) lesions create a 'two-on-one' situation requiring surgical stabilization.",
      difficulty: "HARD",
      bloomsLevel: "Analysis",
      examTags: ["NEXT_STEP1", "NEET_PG", "AIIMS"],
      textbookRefs: [
        { book: "Vishram Singh Clinical Anatomy", chapter: "Shoulder Joint Pathology", edition: "3rd" },
        { book: "BD Chaurasia's Human Anatomy", chapter: "Shoulder Anatomy", edition: "8th" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-01-TOP-08",
      stem: "A tennis player presents with lateral elbow pain. Imaging confirms supracondylar fracture of the humerus with displacement into the antecubital fossa. Which vascular structure is at highest risk of compression?",
      clinicalVignette: "Supracondylar fracture with neurovascular compromise",
      options: [
        {
          id: "a",
          text: "Radial artery",
          isCorrect: false,
          explanation: "While radial artery can be affected, brachial artery is more proximal and at greater risk."
        },
        {
          id: "b",
          text: "Brachial artery",
          isCorrect: true,
          explanation: "The brachial artery lies anterior to the distal humerus in the antecubital fossa. Supracondylar fractures with anterior displacement commonly compress or lacerate the brachial artery, requiring urgent reduction and vascular assessment."
        },
        {
          id: "c",
          text: "Ulnar artery",
          isCorrect: false,
          explanation: "Ulnar artery is more medial and less commonly compressed by anterior supracondylar displacement."
        },
        {
          id: "d",
          text: "Anterior interosseous artery",
          isCorrect: false,
          explanation: "This small artery is a distal branch and less vulnerable in supracondylar injuries."
        }
      ],
      explanation: "Supracondylar fractures are the most common elbow fractures in children, often with anterior angulation. The brachial artery lies anterior in the antecubital fossa and is at high risk for compression or laceration. Absent radial pulse mandates urgent reduction and vascular examination.",
      difficulty: "MEDIUM",
      bloomsLevel: "ProblemSolving",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [
        { book: "BD Chaurasia's Human Anatomy", chapter: "Elbow Region Anatomy", edition: "8th" },
        { book: "Vishram Singh Clinical Anatomy", chapter: "Elbow Joint", edition: "3rd" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-01-TOP-08",
      stem: "During wrist arthroscopy, the scaphoid is identified with its blood supply entering primarily from the dorsal surface. A fracture through the proximal pole of the scaphoid carries the highest risk for which complication?",
      clinicalVignette: "Proximal pole scaphoid fracture complications",
      options: [
        {
          id: "a",
          text: "Malunion with dorsal angulation",
          isCorrect: false,
          explanation: "Malunion occurs but avascular necrosis is the more serious complication."
        },
        {
          id: "b",
          text: "Avascular necrosis of the proximal pole",
          isCorrect: true,
          explanation: "The scaphoid has a retrograde blood supply entering distally. Proximal pole fractures distal to the blood supply entry point interrupt vessels to the proximal fragment, leading to AVN in up to 50% of untreated cases."
        },
        {
          id: "c",
          text: "Non-union only without necrosis",
          isCorrect: false,
          explanation: "While non-union can occur, AVN is the more serious and common complication."
        },
        {
          id: "d",
          text: "Radial artery pseudo-aneurysm",
          isCorrect: false,
          explanation: "This is not a typical complication of scaphoid fractures."
        }
      ],
      explanation: "The scaphoid has unique blood supply: retrograde flow entering at the dorsal ridge and waist, with the proximal pole being a terminal vascular zone. Proximal pole fractures risk devascularization and AVN. Early recognition and immobilization are critical to prevent this devastating complication.",
      difficulty: "HARD",
      bloomsLevel: "Analysis",
      examTags: ["NEXT_STEP1", "NEET_PG", "AIIMS"],
      textbookRefs: [
        { book: "Gray's Anatomy", chapter: "Wrist and Hand Osteology", edition: "42nd" },
        { book: "BD Chaurasia's Human Anatomy", chapter: "Wrist and Hand", edition: "8th" }
      ]
    },
    // AN-MOD-02-TOP-04: Back of Thigh & Popliteal Fossa
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-02-TOP-04",
      stem: "A 52-year-old patient with thrombosis of the popliteal artery presents with calf pain and skin pallor. Which anatomical landmark defines the superior boundary of the popliteal fossa?",
      clinicalVignette: "Popliteal artery thrombosis with anatomical assessment",
      options: [
        {
          id: "a",
          text: "Adductor hiatus between adductor and gracilis",
          isCorrect: true,
          explanation: "The adductor hiatus (where the femoral artery becomes the popliteal artery) marks the superior boundary of the popliteal fossa. This is the transition point between thigh and popliteal vasculature."
        },
        {
          id: "b",
          text: "Popliteus muscle origin",
          isCorrect: false,
          explanation: "The popliteus forms part of the floor, not the superior boundary."
        },
        {
          id: "c",
          text: "Soleus muscle insertion",
          isCorrect: false,
          explanation: "The soleus is inferior in the popliteal region."
        },
        {
          id: "d",
          text: "Plantaris muscle origin",
          isCorrect: false,
          explanation: "Plantaris is a superficial structure not defining the boundary."
        }
      ],
      explanation: "The popliteal fossa is a diamond-shaped space bounded superiorly by the adductor hiatus (convergence of vastus medialis and adductors) and inferiorly by soleus. The adductor hiatus transition marks where femoral vessels become popliteal vessels—a critical anatomical landmark for vascular access and complications.",
      difficulty: "EASY",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [
        { book: "BD Chaurasia's Human Anatomy", chapter: "Popliteal Fossa", edition: "8th" },
        { book: "Gray's Anatomy", chapter: "Leg Anatomy", edition: "42nd" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-02-TOP-04",
      stem: "During exploration of the popliteal fossa for a nerve block, which nerve lies most medially in the upper part of the fossa, close to the popliteal artery?",
      clinicalVignette: "Popliteal nerve block procedure planning",
      options: [
        {
          id: "a",
          text: "Tibial nerve",
          isCorrect: true,
          explanation: "The tibial nerve lies medial to the popliteal artery in the upper popliteal fossa. It runs along the medial side of the popliteal vessels and is the terminal sensory branch to plantar foot."
        },
        {
          id: "b",
          text: "Common fibular nerve",
          isCorrect: false,
          explanation: "The common fibular nerve lies lateral to the popliteal artery and more superficially."
        },
        {
          id: "c",
          text: "Sural nerve",
          isCorrect: false,
          explanation: "The sural nerve is formed in the lower popliteal fossa from divisions of tibial and common fibular nerves."
        },
        {
          id: "d",
          text: "Saphenous nerve",
          isCorrect: false,
          explanation: "The saphenous nerve is superficial and medial, not in the deep popliteal fossa near the artery."
        }
      ],
      explanation: "Within the popliteal fossa, the tibial nerve lies medially and posteriorly to the popliteal artery. The common fibular nerve lies lateral. Understanding this anatomical relationship is essential for popliteal fossa nerve blocks and preventing vascular injury.",
      difficulty: "MEDIUM",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [
        { book: "Vishram Singh Clinical Anatomy", chapter: "Popliteal Fossa Anatomy", edition: "3rd" },
        { book: "BD Chaurasia's Human Anatomy", chapter: "Leg Nerves", edition: "8th" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-02-TOP-04",
      stem: "A patient with a popliteal cyst reports knee swelling that worsens with knee flexion. The cyst is found to communicate with the knee joint through the joint capsule. What is the embryological significance of this communication?",
      clinicalVignette: "Baker's cyst with joint capsule communication",
      options: [
        {
          id: "a",
          text: "Represents abnormal development of knee synovium",
          isCorrect: false,
          explanation: "While synovium is involved, the communication itself is significant in cyst pathophysiology."
        },
        {
          id: "b",
          text: "Indicates weak point in posterior joint capsule that can channel synovial fluid",
          isCorrect: true,
          explanation: "Baker's cysts typically communicate with the joint through the posterior knee capsule, often between the medial head of gastrocnemius and medial meniscus. This communication allows synovial fluid to fill the cyst, especially with knee flexion increasing intra-articular pressure."
        },
        {
          id: "c",
          text: "Represents a separate synovial membrane duplication",
          isCorrect: false,
          explanation: "While cysts have synovial lining, they are continuations of joint space, not duplications."
        },
        {
          id: "d",
          text: "Results from failure of posterior knee compartmentalization",
          isCorrect: false,
          explanation: "This is not the primary embryological explanation."
        }
      ],
      explanation: "Baker's cyst is a posterior knee swelling that communicates with the joint through the capsule, typically between the gastrocnemius and meniscus. Knee flexion increases intra-articular pressure, forcing synovial fluid into the cyst. Understanding this mechanism explains symptom exacerbation and the role of knee joint pathology in cyst formation.",
      difficulty: "MEDIUM",
      bloomsLevel: "ProblemSolving",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [
        { book: "BD Chaurasia's Human Anatomy", chapter: "Knee Joint", edition: "8th" },
        { book: "Vishram Singh Clinical Anatomy", chapter: "Knee Region", edition: "3rd" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-02-TOP-04",
      stem: "During surgical exploration of the popliteal fossa, the popliteus muscle is identified as the deepest structure. Which nerve innervates this muscle, and what is its embryological origin?",
      clinicalVignette: "Popliteal fossa deep anatomy and innervation",
      options: [
        {
          id: "a",
          text: "Tibial nerve; derived from caudal myotome",
          isCorrect: true,
          explanation: "The popliteus is innervated by the tibial nerve and originates from the caudal myotome. It is the only muscle of the posterior leg innervated by the tibial nerve (others from common fibular nerve), making it embryologically and functionally distinct."
        },
        {
          id: "b",
          text: "Common fibular nerve; derived from cranial myotome",
          isCorrect: false,
          explanation: "The popliteus is not innervated by the common fibular nerve."
        },
        {
          id: "c",
          text: "Sural nerve; derived from branching during fetal development",
          isCorrect: false,
          explanation: "The sural nerve is a sensory cutaneous nerve, not motor to popliteus."
        },
        {
          id: "d",
          text: "Posterior tibial nerve; derived from plexus differentiation",
          isCorrect: false,
          explanation: "The posterior tibial nerve is part of the tibial nerve, not a separate innervator."
        }
      ],
      explanation: "The popliteus is innervated by the tibial nerve and originates from caudal myotomes. It is unique among leg muscles in this regard. The popliteus internally rotates the tibia on the femur (or externally rotates the femur on a fixed tibia) and is essential for initiating knee flexion from full extension.",
      difficulty: "HARD",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [
        { book: "Gray's Anatomy", chapter: "Leg Muscles and Innervation", edition: "42nd" },
        { book: "Langman's Embryology", chapter: "Muscular System", edition: "14th" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-02-TOP-04",
      stem: "A 68-year-old patient with chronic knee osteoarthritis develops a posterior knee swelling. Ultrasound shows fluid accumulation behind the knee communicating with the joint. Why does this collection preferentially occur in the popliteal region?",
      clinicalVignette: "Posterior knee synovial effusion and fluid dynamics",
      options: [
        {
          id: "a",
          text: "Popliteal fossa is the highest point of the joint capsule",
          isCorrect: false,
          explanation: "The popliteal fossa is posterior, not the highest point of the capsule."
        },
        {
          id: "b",
          text: "Gravity and increased joint pressure direct fluid posteriorly through the capsule",
          isCorrect: true,
          explanation: "The posterior knee capsule, particularly between the gastrocnemius medial head and medial meniscus, is a natural weak point. Increased intra-articular pressure (from effusion or inflammation) drives fluid into the popliteal fossa, forming a cyst that communicates with the joint space."
        },
        {
          id: "c",
          text: "Popliteal fossa has independent synovial lining separate from joint",
          isCorrect: false,
          explanation: "The cyst is a diverticulum of joint synovium, not independent."
        },
        {
          id: "d",
          text: "Posterior capsule is more elastic than anterior capsule",
          isCorrect: false,
          explanation: "The capsule is not more elastic; rather, it has a natural weak point in the popliteal region."
        }
      ],
      explanation: "The popliteal fossa is the preferential location for joint effusions due to a natural weak point in the posterior knee capsule. Increased intra-articular pressure (from effusion, inflammation, or OA) directs synovial fluid into this space, forming a Baker's cyst. This explains why cysts worsen with knee flexion and joint inflammation.",
      difficulty: "MEDIUM",
      bloomsLevel: "ProblemSolving",
      examTags: ["NEXT_STEP1", "NEET_PG", "AIIMS"],
      textbookRefs: [
        { book: "Vishram Singh Clinical Anatomy", chapter: "Knee Joint and Pathology", edition: "3rd" },
        { book: "BD Chaurasia's Human Anatomy", chapter: "Knee Joint", edition: "8th" }
      ]
    },
    // AN-MOD-02-TOP-05: Leg: Anterior & Lateral Compartments
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-02-TOP-05",
      stem: "A 34-year-old athlete with anterior compartment syndrome undergoes fasciotomy. Which structure is at highest risk of iatrogenic injury during fascial release through the anterior approach?",
      clinicalVignette: "Anterior compartment syndrome fasciotomy complication",
      options: [
        {
          id: "a",
          text: "Anterior tibial artery",
          isCorrect: true,
          explanation: "The anterior tibial artery runs within the anterior compartment alongside the anterior tibial nerve and anterior tibial vein. Fasciotomy dissection, if performed superficially or without careful anatomy knowledge, can lacerate this vessel causing significant hemorrhage."
        },
        {
          id: "b",
          text: "Fibular artery",
          isCorrect: false,
          explanation: "The fibular artery is in the lateral compartment, not anterior, and less likely to be injured during anterior fasciotomy."
        },
        {
          id: "c",
          text: "Posterior tibial artery",
          isCorrect: false,
          explanation: "The posterior tibial artery is in the posterior compartment, not anterior."
        },
        {
          id: "d",
          text: "Peroneal nerve superficial branch",
          isCorrect: false,
          explanation: "While the common fibular nerve is near, the anterior tibial artery is more at risk in anterior compartment fasciotomy."
        }
      ],
      explanation: "The anterior compartment contains the anterior tibial artery and vein along with the anterior tibial nerve and muscles (TA, EHL, EDB, FH). Fasciotomy must be performed carefully to avoid vascular injury, typically through a medial approach between tibialis anterior and tibia.",
      difficulty: "MEDIUM",
      bloomsLevel: "ProblemSolving",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [
        { book: "BD Chaurasia's Human Anatomy", chapter: "Leg Compartments", edition: "8th" },
        { book: "Vishram Singh Clinical Anatomy", chapter: "Anterior Leg Anatomy", edition: "3rd" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-02-TOP-05",
      stem: "A patient with foot drop after a fibular nerve injury cannot dorsiflex the foot or evert it. Which muscle innervated by the common fibular nerve is NOT responsible for these movements?",
      clinicalVignette: "Fibular nerve palsy clinical assessment",
      options: [
        {
          id: "a",
          text: "Tibialis anterior",
          isCorrect: false,
          explanation: "Tibialis anterior (deep fibular) dorsiflexes the foot; its paralysis contributes to foot drop."
        },
        {
          id: "b",
          text: "Extensor hallucis longus",
          isCorrect: false,
          explanation: "EHL (deep fibular) assists dorsiflexion and extends the great toe."
        },
        {
          id: "c",
          text: "Fibularis longus",
          isCorrect: true,
          explanation: "Fibularis longus (superficial fibular nerve) everts the foot but does NOT dorsiflex. It plantarflexes and everts. In fibular nerve injury, loss of eversion is due to fibularis brevis and longus paralysis, while dorsiflexion loss is from anterior compartment muscle paralysis."
        },
        {
          id: "d",
          text: "Fibularis brevis",
          isCorrect: false,
          explanation: "Fibularis brevis (superficial fibular) assists in eversion."
        }
      ],
      explanation: "Fibular nerve innervates anterior compartment (dorsiflexors) and lateral compartment (evertors). Fibularis longus helps with eversion but primarily plantarflexes the foot at the ankle. In fibular nerve injury, lost dorsiflexion (TA, EHL) causes foot drop, and lost eversion (fibularis muscles) presents as inversion deformity.",
      difficulty: "HARD",
      bloomsLevel: "Analysis",
      examTags: ["NEXT_STEP1", "NEET_PG", "AIIMS"],
      textbookRefs: [
        { book: "Vishram Singh Clinical Anatomy", chapter: "Fibular Nerve Distribution", edition: "3rd" },
        { book: "BD Chaurasia's Human Anatomy", chapter: "Leg Nerves", edition: "8th" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-02-TOP-05",
      stem: "During a sports medicine exam, dorsiflexion of the foot is tested. The examiner notes weakness in dorsiflexion at the ankle but normal toe extension. Which nerve branch is likely injured?",
      clinicalVignette: "Selective anterior compartment nerve injury",
      options: [
        {
          id: "a",
          text: "Deep fibular nerve proximal to its branching",
          isCorrect: true,
          explanation: "The deep fibular nerve divides into motor branches to tibialis anterior and then to extensor hallucis longus/digitorum. If injured proximal to branching, both TA (ankle dorsiflexion) and EHL/EDL (toe extension) would be affected. Selective TA weakness suggests injury to the TA branch after nerve division."
        },
        {
          id: "b",
          text: "Superficial fibular nerve",
          isCorrect: false,
          explanation: "Superficial fibular innervates evertors, not dorsiflexors."
        },
        {
          id: "c",
          text: "Deep fibular nerve—tibialis anterior branch",
          isCorrect: true,
          explanation: "The branch to tibialis anterior can be selectively injured, causing isolated ankle dorsiflexion weakness while toe extension (from separate branches to EHL/EDL) remains intact. This selective pattern indicates branch-level injury rather than trunk injury."
        },
        {
          id: "d",
          text: "Anterior tibial artery branch nerve",
          isCorrect: false,
          explanation: "There is no named anterior tibial nerve; the anterior tibial artery is accompanied by the deep fibular nerve."
        }
      ],
      explanation: "The deep fibular nerve divides into branches: to tibialis anterior, to extensor hallucis longus, and to extensor digitorum longus. Selective TA weakness with preserved toe extension suggests injury to the TA branch specifically, allowing the distal motor branches to remain functional.",
      difficulty: "HARD",
      bloomsLevel: "ProblemSolving",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [
        { book: "Gray's Anatomy", chapter: "Lower Limb Nerve Distribution", edition: "42nd" },
        { book: "BD Chaurasia's Human Anatomy", chapter: "Leg Nerves", edition: "8th" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-02-TOP-05",
      stem: "A patient with lateral leg pain and foot weakness has atrophy of muscles in the lateral compartment. Which compartment lies deep to the lateral compartment in the leg, and what structures does it contain?",
      clinicalVignette: "Lateral compartment pathology with anatomical reference",
      options: [
        {
          id: "a",
          text: "Posterior superficial compartment; contains soleus and gastrocnemius",
          isCorrect: false,
          explanation: "While posterior compartment is deep to lateral, the lateral compartment is not directly deep to the superficial posterior."
        },
        {
          id: "b",
          text: "Anterior compartment; contains dorsiflexors and anterior tibial vessels",
          isCorrect: true,
          explanation: "The anterior compartment lies deep to the lateral compartment (fibularis muscles). The two are separated by the anterior and posterior intermuscular septa. The anterior compartment contains tibialis anterior, extensor hallucis longus, extensor digitorum longus, and anterior tibial vessels/nerve."
        },
        {
          id: "c",
          text: "Deep posterior compartment; contains deep toe flexors",
          isCorrect: false,
          explanation: "The deep posterior compartment is medial, not deep to the lateral compartment in anatomical terms."
        },
        {
          id: "d",
          text: "Medial compartment; contains tibialis posterior",
          isCorrect: false,
          explanation: "The medial compartment contains tibialis posterior and deep toe flexors, but is not directly deep to lateral."
        }
      ],
      explanation: "The leg has four compartments: anterior, lateral, superficial posterior, and deep posterior. The anterior compartment lies deep to the lateral compartment (deep fibularis muscles). Anterior septa separate them. Knowledge of compartment anatomy is essential for understanding compartment syndrome progression and nerve injury patterns.",
      difficulty: "MEDIUM",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [
        { book: "BD Chaurasia's Human Anatomy", chapter: "Leg Compartments", edition: "8th" },
        { book: "Gray's Anatomy", chapter: "Leg Anatomy", edition: "42nd" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-02-TOP-05",
      stem: "During anatomical teaching, a student notes that plantarflexion is stronger than dorsiflexion in the leg. What is the anatomical basis for this functional difference?",
      clinicalVignette: "Functional anatomy of ankle movements",
      options: [
        {
          id: "a",
          text: "Gastrocnemius muscle is larger and has greater mechanical advantage than tibialis anterior",
          isCorrect: true,
          explanation: "The calf muscles (gastrocnemius and soleus) occupy the entire superficial posterior compartment and are significantly larger than anterior compartment dorsiflexors. Gastrocnemius acts on both knee and ankle, providing greater plantarflexion strength. This anatomical difference explains why plantarflexion is 1.5-2x stronger than dorsiflexion in most individuals."
        },
        {
          id: "b",
          text: "Dorsiflexors are less innervated than plantarflexors",
          isCorrect: false,
          explanation: "Innervation is adequate; the difference is due to muscle mass and arrangement."
        },
        {
          id: "c",
          text: "Anterior compartment muscles are in a compartment with restricted space",
          isCorrect: false,
          explanation: "While compartmentalization is relevant, muscle size is the primary factor."
        },
        {
          id: "d",
          text: "Tibialis anterior has only single-joint action while gastrocnemius has multi-joint",
          isCorrect: false,
          explanation: "While TA is single-joint and gastrocnemius is two-joint, this is not the primary anatomical basis for strength difference."
        }
      ],
      explanation: "The calf muscles (gastrocnemius + soleus) are significantly larger than anterior compartment dorsiflexors and occupy more volume. Gastrocnemius crosses both knee and ankle, allowing recruitment during knee flexion. This anatomical arrangement provides plantarflexion with superior strength (1.5-2x) compared to dorsiflexion, explaining why dorsiflexion weakness causes more functional deficit.",
      difficulty: "MEDIUM",
      bloomsLevel: "Analysis",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [
        { book: "Gray's Anatomy", chapter: "Lower Limb Muscles", edition: "42nd" },
        { book: "BD Chaurasia's Human Anatomy", chapter: "Leg Muscles", edition: "8th" }
      ]
    },
    // AN-MOD-02-TOP-07: Foot & Joints of Lower Limb
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-02-TOP-07",
      stem: "A 58-year-old patient with rheumatoid arthritis develops hallux valgus (bunion) deformity. This deformity reflects dysfunction of which anatomical structure at the first metatarsocuboid joint?",
      clinicalVignette: "Hallux valgus deformity pathophysiology",
      options: [
        {
          id: "a",
          text: "Medial collateral ligament stretching",
          isCorrect: true,
          explanation: "Hallux valgus develops from weakness or stretching of the medial joint capsule and ligaments of the first MTP joint, combined with lateral deviation of the metatarsal head. This is often associated with intrinsic muscle imbalance and foot biomechanics, particularly important in RA where synovitis causes capsular weakening."
        },
        {
          id: "b",
          text: "Lateral collateral ligament tightening",
          isCorrect: false,
          explanation: "While lateral structures tighten as deformity worsens, primary pathology is medial laxity."
        },
        {
          id: "c",
          text: "Sesamoid bone fracture",
          isCorrect: false,
          explanation: "While sesamoid involvement can occur, it is secondary to valgus deformity."
        },
        {
          id: "d",
          text: "Flexor hallucis brevis dysfunction only",
          isCorrect: false,
          explanation: "While FHB can be involved, the primary issue is ligamentous."
        }
      ],
      explanation: "Hallux valgus deformity results from medial capsular laxity and lateral deviation of the first metatarsal head. The combination of medial (collateral ligament and joint capsule) stretching with lateral (adductor hallucis) muscle tightening creates the valgus angulation. In RA, synovitis accelerates capsular destruction.",
      difficulty: "MEDIUM",
      bloomsLevel: "ProblemSolving",
      examTags: ["NEXT_STEP1", "NEET_PG", "AIIMS"],
      textbookRefs: [
        { book: "BD Chaurasia's Human Anatomy", chapter: "Foot Anatomy and Function", edition: "8th" },
        { book: "Vishram Singh Clinical Anatomy", chapter: "Foot Joints", edition: "3rd" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-02-TOP-07",
      stem: "A patient presents with loss of sensation over the lateral border of the foot and dorsum of lateral toes. Which nerve is most likely injured, and at what anatomical point does it become superficial?",
      clinicalVignette: "Sural nerve injury with sensory deficit pattern",
      options: [
        {
          id: "a",
          text: "Superficial fibular nerve; becomes superficial at mid-leg",
          isCorrect: false,
          explanation: "Superficial fibular nerve is motor; sural nerve is the sensory counterpart."
        },
        {
          id: "b",
          text: "Sural nerve; becomes superficial in the distal third of the leg between tendons",
          isCorrect: true,
          explanation: "The sural nerve is formed in the popliteal fossa from tibial and common fibular contributions. It becomes superficial in the distal leg, running between the tendons of gastrocnemius and soleus, then traveling along the lateral border of the Achilles tendon. It innervates the lateral foot and dorsum of lateral toes—exactly the deficit described."
        },
        {
          id: "c",
          text: "Common fibular nerve; at the fibular head",
          isCorrect: false,
          explanation: "Common fibular nerve is motor; sural nerve provides the sensory component."
        },
        {
          id: "d",
          text: "Deep fibular nerve; at the ankle",
          isCorrect: false,
          explanation: "Deep fibular nerve is motor to anterior compartment, not sensory to lateral foot."
        }
      ],
      explanation: "The sural nerve is a sensory branch formed in the popliteal fossa from contributions of tibial and common fibular nerves. It becomes superficial in the distal third of the leg and travels posterolateral along the Achilles tendon, eventually supplying the lateral foot and lateral toes. Injury causes loss of sensation in this distribution—a common result of calf biopsies or Achilles surgery.",
      difficulty: "MEDIUM",
      bloomsLevel: "Analysis",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [
        { book: "Vishram Singh Clinical Anatomy", chapter: "Leg Sensory Nerves", edition: "3rd" },
        { book: "BD Chaurasia's Human Anatomy", chapter: "Leg Nerves", edition: "8th" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-02-TOP-07",
      stem: "A 72-year-old with osteoarthritis develops restricted dorsiflexion at the ankle. Imaging shows degenerative changes in the talocrural joint with osteophyte formation. Which ligament, when tight, would further restrict dorsiflexion?",
      clinicalVignette: "Ankle osteoarthritis with dorsiflexion restriction",
      options: [
        {
          id: "a",
          text: "Anterior talofibular ligament",
          isCorrect: false,
          explanation: "ATFL restricts inversion/plantarflexion, not dorsiflexion."
        },
        {
          id: "b",
          text: "Posterior talofibular ligament",
          isCorrect: false,
          explanation: "PTFL restricts inversion/plantarflexion, not dorsiflexion."
        },
        {
          id: "c",
          text: "Deltoid ligament",
          isCorrect: false,
          explanation: "Deltoid ligament restricts eversion and external rotation."
        },
        {
          id: "d",
          text: "Posterior tibiofibular ligament and posterior talofibular ligament",
          isCorrect: true,
          explanation: "The posterior capsular ligaments (posterolateral, especially PTFL) restrict dorsiflexion when tight. In ankle OA with posterior osteophytes and capsular fibrosis, these posterior structures limit dorsiflexion range of motion. Anterior tibial impingement exacerbates this restriction."
        }
      ],
      explanation: "The talocrural (ankle) joint dorsiflexion is restricted by posterior capsular structures and posterior osteophytes. While anterior impingement occurs with anterior osteophytes, the primary dorsiflexion restrictor is posterior capsule tightness (posterolateral ligaments including PTFL). This explains why ankle OA with posterior changes causes dorsiflexion loss.",
      difficulty: "HARD",
      bloomsLevel: "Analysis",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [
        { book: "BD Chaurasia's Human Anatomy", chapter: "Ankle Joint Anatomy", edition: "8th" },
        { book: "Vishram Singh Clinical Anatomy", chapter: "Ankle Ligaments", edition: "3rd" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-02-TOP-07",
      stem: "During foot examination, the examiner tests inversion at the subtalar joint. Which ligament complex is primarily responsible for limiting excessive inversion?",
      clinicalVignette: "Ankle inversion test and ligamentous restraint",
      options: [
        {
          id: "a",
          text: "Medial (deltoid) ligament",
          isCorrect: true,
          explanation: "The deltoid ligament is the primary medial stabilizer and restricts inversion and external rotation at the subtalar joint. It has four parts (anterior tibiotalar, tibiocalcaneal, posterior tibiotalar, and superficial fibers) that collectively prevent excessive inversion. Deltoid ligament injury reduces inversion restraint."
        },
        {
          id: "b",
          text: "Lateral ligaments",
          isCorrect: false,
          explanation: "Lateral ligaments (ATFL, CFL, PTFL) restrict inversion but the deltoid is the primary medial restraint to inversion at subtalar level."
        },
        {
          id: "c",
          text: "Interosseous talocalcaneal ligament",
          isCorrect: false,
          explanation: "While this ligament is important for ST joint stability, the deltoid is the primary inversion restrictor."
        },
        {
          id: "d",
          text: "Spring ligament",
          isCorrect: false,
          explanation: "The spring ligament (plantar calcaneonavicular) supports the medial arch but is not the primary inversion restrictor."
        }
      ],
      explanation: "The deltoid ligament is the primary medial ligament complex restraining inversion and external rotation at the ankle and subtalar joints. Its four components collectively provide strong medial stability. Deltoid insufficiency (from tear or stretch) allows excessive inversion and is a common cause of chronic ankle instability in the Indian population.",
      difficulty: "MEDIUM",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [
        { book: "Gray's Anatomy", chapter: "Ankle Ligaments", edition: "42nd" },
        { book: "BD Chaurasia's Human Anatomy", chapter: "Ankle Joint", edition: "8th" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-02-TOP-07",
      stem: "A runner with flat feet (pes planus) has a collapsed medial longitudinal arch. Which ligament, when weakened, primarily contributes to this deformity?",
      clinicalVignette: "Flat feet with arch collapse etiology",
      options: [
        {
          id: "a",
          text: "Spring ligament (plantar calcaneonavicular ligament)",
          isCorrect: true,
          explanation: "The spring ligament is a critical medial arch support connecting calcaneus to navicular. When weakened (from repetitive stress, RA, or genetic factors), it allows the navicular to drop medially and inferiorly, collapsing the medial arch. This is the primary ligamentous cause of pes planus."
        },
        {
          id: "b",
          text: "Deltoid ligament",
          isCorrect: false,
          explanation: "Deltoid ligament is ankle stabilizer; arch support is primarily the spring ligament's role."
        },
        {
          id: "c",
          text: "Long plantar ligament",
          isCorrect: false,
          explanation: "Long plantar ligament supports lateral arch, not medial arch."
        },
        {
          id: "d",
          text: "Plantar aponeurosis",
          isCorrect: false,
          explanation: "While aponeurosis contributes, the spring ligament is the primary stabilizer."
        }
      ],
      explanation: "The spring ligament (plantar calcaneonavicular ligament) is the primary static support for the medial longitudinal arch. When weakened or stretched, the navicular drops, causing pes planus. This is compounded by weakness of tibialis posterior (dynamic support). Pes planus is common in the Indian population due to prolonged standing and lack of arch support footwear.",
      difficulty: "MEDIUM",
      bloomsLevel: "ProblemSolving",
      examTags: ["NEXT_STEP1", "NEET_PG", "AIIMS"],
      textbookRefs: [
        { book: "BD Chaurasia's Human Anatomy", chapter: "Foot Arches", edition: "8th" },
        { book: "Vishram Singh Clinical Anatomy", chapter: "Foot Ligaments and Support", edition: "3rd" }
      ]
    },
    // AN-MOD-03-TOP-03: Mediastinum
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-03-TOP-03",
      stem: "A cardiac surgeon explores the mediastinum during coronary artery bypass. Which mediastinal compartment contains the esophagus and descending thoracic aorta?",
      clinicalVignette: "Mediastinal anatomy during cardiac surgery",
      options: [
        {
          id: "a",
          text: "Superior mediastinum",
          isCorrect: false,
          explanation: "Superior mediastinum contains SVC, aortic arch, and brachiocephalic vessels."
        },
        {
          id: "b",
          text: "Anterior mediastinum",
          isCorrect: false,
          explanation: "Anterior mediastinum contains thymus (in children) and fat."
        },
        {
          id: "c",
          text: "Middle mediastinum",
          isCorrect: false,
          explanation: "Middle mediastinum contains the heart and pericardium."
        },
        {
          id: "d",
          text: "Posterior mediastinum",
          isCorrect: true,
          explanation: "The posterior mediastinum contains the descending thoracic aorta, esophagus, azygos venous system, thoracic duct, and sympathetic chains. This compartment is clinically important for esophageal and aortic pathology."
        }
      ],
      explanation: "The mediastinum is divided into superior, anterior, middle, and posterior compartments. The posterior mediastinum lies behind the pericardium and diaphragm, containing posterior structures. Understanding this anatomy is essential for thoracic surgery and avoiding complications like aortic laceration during esophageal interventions.",
      difficulty: "EASY",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [
        { book: "BD Chaurasia's Human Anatomy", chapter: "Mediastinum", edition: "8th" },
        { book: "Gray's Anatomy", chapter: "Thoracic Cavity", edition: "42nd" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-03-TOP-03",
      stem: "During a pediatric CT scan, a widened mediastinum is noted with a mass anterior to the pericardium. In a 5-year-old child, what is the most likely structure occupying this space?",
      clinicalVignette: "Anterior mediastinal mass in pediatric patient",
      options: [
        {
          id: "a",
          text: "Thymic lymphoma",
          isCorrect: true,
          explanation: "In children, the anterior mediastinum primarily contains the thymus gland, which can undergo hypertrophy or develop lymphoid neoplasms. Anterior mediastinal widening with a mass in a child classically represents thymic pathology (thymic hyperplasia, thymoma, or lymphoma). The thymus involutes with age, so anterior masses in adults are less commonly thymic."
        },
        {
          id: "b",
          text: "Lymph node tuberculosis",
          isCorrect: false,
          explanation: "TB lymphadenitis occurs but thymic pathology is more common in anterior masses in this age group."
        },
        {
          id: "c",
          text: "Cardiac pathology",
          isCorrect: false,
          explanation: "Cardiac masses are in the middle mediastinum, not anterior."
        },
        {
          id: "d",
          text: "Esophageal diverticulum",
          isCorrect: false,
          explanation: "Esophageal pathology is posterior mediastinal, not anterior."
        }
      ],
      explanation: "The anterior mediastinum in children contains the thymus, a lymphoid organ that is largest in early childhood and involutes with age. Anterior mediastinal masses in children typically represent thymic pathology (hyperplasia, thymoma, lymphoma). This contrasts with posterior masses which suggest neural or esophageal origin.",
      difficulty: "MEDIUM",
      bloomsLevel: "ProblemSolving",
      examTags: ["NEXT_STEP1", "NEET_PG", "AIIMS"],
      textbookRefs: [
        { book: "BD Chaurasia's Human Anatomy", chapter: "Mediastinum and Thymus", edition: "8th" },
        { book: "Vishram Singh Clinical Anatomy", chapter: "Thoracic Cavity", edition: "3rd" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-03-TOP-03",
      stem: "A patient undergoing esophageal manometry has a tube passed into the posterior mediastinum. Which structure running parallel to the esophagus might compress it anteriorly?",
      clinicalVignette: "Esophageal compression in posterior mediastinum",
      options: [
        {
          id: "a",
          text: "Ascending aorta",
          isCorrect: false,
          explanation: "Ascending aorta is anterior/superior; descending aorta is posterior."
        },
        {
          id: "b",
          text: "Descending thoracic aorta",
          isCorrect: true,
          explanation: "The descending thoracic aorta runs posterior and to the left of the esophagus. Aortic aneurysms or dilation can compress the esophagus anteriorly, causing dysphagia. The relationship is clinically important as the aorta is anterior to the esophagus at the level of the mid-esophagus."
        },
        {
          id: "c",
          text: "Superior vena cava",
          isCorrect: false,
          explanation: "SVC is anterior/superior in the mediastinum."
        },
        {
          id: "d",
          text: "Pulmonary artery",
          isCorrect: false,
          explanation: "Pulmonary artery is part of the heart, in the middle mediastinum."
        }
      ],
      explanation: "The esophagus runs vertically in the posterior mediastinum, with the descending thoracic aorta running parallel but anteromedially. Aortic aneurysms, aortic dissection, or severe atherosclerotic disease can compress the esophagus, causing dysphagia. This anatomical relationship is critical in differential diagnosis of dysphagia in patients with aortic pathology.",
      difficulty: "MEDIUM",
      bloomsLevel: "Analysis",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [
        { book: "Vishram Singh Clinical Anatomy", chapter: "Esophageal Anatomy", edition: "3rd" },
        { book: "BD Chaurasia's Human Anatomy", chapter: "Mediastinum", edition: "8th" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-03-TOP-03",
      stem: "During mediastinal dissection, lymph nodes are identified at multiple levels. Which group of lymph nodes drains the lower mediastinum including the esophagus and descending aorta?",
      clinicalVignette: "Mediastinal lymph node drainage patterns",
      options: [
        {
          id: "a",
          text: "Superior mediastinal nodes draining to thoracic duct",
          isCorrect: false,
          explanation: "Superior nodes drain upper mediastinal structures."
        },
        {
          id: "b",
          text: "Posterior mediastinal nodes draining to thoracic duct and azygos system",
          isCorrect: true,
          explanation: "Lymph from the posterior mediastinum (esophagus, descending aorta, posterior pericardium) drains to posterior mediastinal lymph nodes, which then drain to the thoracic duct and azygos system. This is clinically important for esophageal cancer staging."
        },
        {
          id: "c",
          text: "Anterior mediastinal nodes draining to brachiocephalic veins",
          isCorrect: false,
          explanation: "Anterior nodes relate to anterior structures, not lower esophagus."
        },
        {
          id: "d",
          text: "Carinal nodes draining to hilum",
          isCorrect: false,
          explanation: "Carinal nodes relate to airway structures."
        }
      ],
      explanation: "Posterior mediastinal lymph nodes drain lower mediastinal structures including the esophagus, descending aorta, and associated organs. These nodes feed into the thoracic duct and azygos venous system. Understanding this drainage is essential for esophageal cancer staging and determining surgical resectability.",
      difficulty: "HARD",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [
        { book: "BD Chaurasia's Human Anatomy", chapter: "Thoracic Lymph Nodes", edition: "8th" },
        { book: "Gray's Anatomy", chapter: "Mediastinal Lymphatics", edition: "42nd" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-03-TOP-03",
      stem: "A surgeon performs a thoracotomy and needs to identify and ligate branches of the azygos vein system in the posterior mediastinum. What is the primary function of the azygos system in the thorax?",
      clinicalVignette: "Azygos venous system anatomy and function",
      options: [
        {
          id: "a",
          text: "Primary venous return from intercostal spaces and spinal cord",
          isCorrect: true,
          explanation: "The azygos system (azygos, hemiazygos, and accessory hemiazygos veins) drains the posterior thoracic wall including intercostal spaces, vertebral bodies, spinal cord, and mediastinal structures. It provides collateral venous drainage when the IVC or SVC is obstructed and is important in spinal cord venous drainage."
        },
        {
          id: "b",
          text: "Systemic return of blood from lung parenchyma",
          isCorrect: false,
          explanation: "Lungs are drained by pulmonary veins, not azygos system."
        },
        {
          id: "c",
          text: "Lymphatic drainage from posterior mediastinum",
          isCorrect: false,
          explanation: "Lymph is drained by thoracic duct; azygos is venous."
        },
        {
          id: "d",
          text: "Sympathetic innervation to posterior thoracic wall",
          isCorrect: false,
          explanation: "Azygos vein is vascular, not neural."
        }
      ],
      explanation: "The azygos venous system drains blood from the posterior thoracic wall, intercostal spaces, vertebral venous plexus, and spinal cord. The azygos vein on the right ascends and drains into the SVC; hemiazygos on the left drains into the azygos. This system is clinically important as a collateral route in IVC obstruction and in spinal surgery planning.",
      difficulty: "MEDIUM",
      bloomsLevel: "ProblemSolving",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [
        { book: "BD Chaurasia's Human Anatomy", chapter: "Posterior Mediastinum and Venous System", edition: "8th" },
        { book: "Vishram Singh Clinical Anatomy", chapter: "Azygos System", edition: "3rd" }
      ]
    },
    // AN-MOD-03-TOP-04: Heart: External Features
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-03-TOP-04",
      stem: "During cardiac embryology teaching, the sulci of the heart are identified. Which sulcus marks the external boundary between the right and left ventricles?",
      clinicalVignette: "Heart external anatomy and chamber demarcation",
      options: [
        {
          id: "a",
          text: "Atrioventricular groove",
          isCorrect: false,
          explanation: "AV groove separates atria from ventricles, not right from left ventricles."
        },
        {
          id: "b",
          text: "Anterior interventricular sulcus",
          isCorrect: true,
          explanation: "The anterior interventricular sulcus (also called anterior interventricular groove) marks the external boundary between the right and left ventricles on the anterior surface of the heart. The LAD coronary artery runs in this sulcus, making it clinically important for identifying coronary anatomy."
        },
        {
          id: "c",
          text: "Posterior interventricular sulcus",
          isCorrect: false,
          explanation: "While this also marks RV-LV boundary posteriorly, the anterior sulcus is more prominent externally."
        },
        {
          id: "d",
          text: "Coronary sulcus",
          isCorrect: false,
          explanation: "Coronary sulcus is another name for AV groove."
        }
      ],
      explanation: "The heart has two main sulci: the atrioventricular groove (separating atria from ventricles) and the interventricular sulci (anterior and posterior, separating ventricles). The anterior interventricular sulcus contains the LAD artery and marks the external RV-LV boundary. Understanding these landmarks is essential for cardiac surgery and coronary angiography.",
      difficulty: "EASY",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [
        { book: "BD Chaurasia's Human Anatomy", chapter: "Heart External Anatomy", edition: "8th" },
        { book: "Gray's Anatomy", chapter: "Heart Surface Anatomy", edition: "42nd" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-03-TOP-04",
      stem: "A patient with acute myocardial infarction has an anterior MI. Which coronary artery is most likely occluded, and what external cardiac landmark indicates the distribution of this vessel?",
      clinicalVignette: "Anterior MI with coronary artery anatomy",
      options: [
        {
          id: "a",
          text: "Left anterior descending artery; runs in the anterior interventricular sulcus",
          isCorrect: true,
          explanation: "The LAD coronary artery runs in the anterior interventricular groove/sulcus, supplying the anterior wall of the LV and anteroseptal region. LAD occlusion causes anterior MI. The sulcus landmark on the cardiac surface indicates LAD distribution territory."
        },
        {
          id: "b",
          text: "Right coronary artery; runs in the coronary sulcus",
          isCorrect: false,
          explanation: "RCA typically supplies inferior wall; it runs in the AV groove, not anterior sulcus."
        },
        {
          id: "c",
          text: "Left circumflex; runs posterior to the left atrium",
          isCorrect: false,
          explanation: "LCx supplies lateral wall and posterior structures, not anterior."
        },
        {
          id: "d",
          text: "Diagonal branches; run in branching pattern from AV groove",
          isCorrect: false,
          explanation: "While diagonal branches are LAD branches, the main LAD location is the anterior sulcus."
        }
      ],
      explanation: "The LAD coronary artery is the most commonly occluded vessel causing MI. It runs in the anterior interventricular sulcus and supplies the anterior LV wall, anteroseptal region, and apex. The sulcus landmark directly indicates LAD territory. LAD occlusion causes the largest MI territory, explaining its clinical significance.",
      difficulty: "MEDIUM",
      bloomsLevel: "ProblemSolving",
      examTags: ["NEXT_STEP1", "NEET_PG", "AIIMS"],
      textbookRefs: [
        { book: "Vishram Singh Clinical Anatomy", chapter: "Coronary Arteries", edition: "3rd" },
        { book: "BD Chaurasia's Human Anatomy", chapter: "Heart Vessels", edition: "8th" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-03-TOP-04",
      stem: "During cardiac catheterization, a cardiologist identifies the right atrial appendage (RAA) from the right atrium. What is the embryological origin of the RAA?",
      clinicalVignette: "Right atrial appendage embryology",
      options: [
        {
          id: "a",
          text: "Sinus venosus",
          isCorrect: false,
          explanation: "The sinus venosus forms the majority of the right atrium, not the appendage."
        },
        {
          id: "b",
          text: "Right common cardinal vein",
          isCorrect: false,
          explanation: "Cardinal veins contribute to systemic venous formation but not RAA specifically."
        },
        {
          id: "c",
          text: "Primitive atrium (true atrium)",
          isCorrect: true,
          explanation: "The right atrial appendage (auricle) is derived from the primitive atrium, while the majority of the right atrium is derived from the sinus venosus. The RAA is a muscular, trabeculated pouch distinct from the smooth-walled sinus venosus portion."
        },
        {
          id: "d",
          text: "Left atrium fold",
          isCorrect: false,
          explanation: "The RAA develops from right-sided structures, not the left atrium."
        }
      ],
      explanation: "Atrial embryology: The primitive atrium develops into the atrial appendages (auricles) of both atria. The sinus venosus incorporates into the right atrium, forming the smooth-walled sinus portion. The RAA retains primitive atrial characteristics with trabeculated walls. This distinction is clinically important for arrhythmia mechanisms and atrial septal defects.",
      difficulty: "HARD",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [
        { book: "Langman's Embryology", chapter: "Cardiovascular System", edition: "14th" },
        { book: "BD Chaurasia's Human Anatomy", chapter: "Heart Development", edition: "8th" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-03-TOP-04",
      stem: "A cardiac surgeon notes the apex of the heart is formed primarily by which chamber, and how does this relate to ventricular function?",
      clinicalVignette: "Cardiac apex anatomy and ventricular mechanics",
      options: [
        {
          id: "a",
          text: "Right ventricle; forms the apex to maximize RV ejection",
          isCorrect: false,
          explanation: "The RV is anterior and forms the sternocostal surface, not the apex."
        },
        {
          id: "b",
          text: "Left ventricle; forms the apex due to its larger size and posterior-leftward position",
          isCorrect: true,
          explanation: "The left ventricle is the largest and most muscular chamber, positioned posteriorly and to the left. It forms the cardiac apex. The apex position reflects the cardiac axis deviation leftward—the apical impulse (PMI) is located at the 5th intercostal space in the midclavicular line due to LV dominance."
        },
        {
          id: "c",
          text: "Right atrium; extends to form the apex",
          isCorrect: false,
          explanation: "The atrium is superior and forms the base, not the apex."
        },
        {
          id: "d",
          text: "Both ventricles equally form the apex",
          isCorrect: false,
          explanation: "LV dominance makes it the primary apical contributor."
        }
      ],
      explanation: "The left ventricle forms the cardiac apex due to its large mass and position. This anatomical fact reflects cardiac physiology: the LV is the main pumping chamber for systemic circulation. The apical impulse (point of maximal impulse) occurs where the LV apex contacts the chest wall, at the 5th intercostal space midclavicularly in healthy individuals.",
      difficulty: "MEDIUM",
      bloomsLevel: "Analysis",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [
        { book: "Gray's Anatomy", chapter: "Heart Anatomy", edition: "42nd" },
        { book: "BD Chaurasia's Human Anatomy", chapter: "Heart Chambers", edition: "8th" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-03-TOP-04",
      stem: "A patient develops a myocardial rupture post-MI affecting the ventricular free wall. The rupture occurs in the left ventricular wall. Which cardiac surface and region is most commonly affected?",
      clinicalVignette: "Myocardial rupture location in post-MI",
      options: [
        {
          id: "a",
          text: "Anterior surface near the apex",
          isCorrect: true,
          explanation: "Free wall rupture in acute MI most commonly occurs in the anterior LV wall near the apex, typically 3-7 days post-MI at the junction of infarcted and normal myocardium. This region has maximal wall stress during left ventricular remodeling and is a zone of weakness post-infarction."
        },
        {
          id: "b",
          text: "Posterior wall at the base",
          isCorrect: false,
          explanation: "While posterior MIs occur, free wall rupture is more common anteriorly."
        },
        {
          id: "c",
          text: "Lateral wall at mid-ventricle",
          isCorrect: false,
          explanation: "Lateral wall rupture is less common; anterior/apical is more frequent."
        },
        {
          id: "d",
          text: "Interventricular septum",
          isCorrect: false,
          explanation: "Septal rupture is a different complication with different timing and location."
        }
      ],
      explanation: "Free wall rupture is a catastrophic post-MI complication with high mortality. It most commonly affects the anterior LV near the apex 3-7 days post-MI. The rupture occurs at the junction of infarcted (weak) and normal (contracting) myocardium where wall stress is maximal. Early recognition and emergency surgery are essential.",
      difficulty: "HARD",
      bloomsLevel: "ProblemSolving",
      examTags: ["NEXT_STEP1", "NEET_PG", "AIIMS"],
      textbookRefs: [
        { book: "Vishram Singh Clinical Anatomy", chapter: "Myocardial Infarction Anatomy", edition: "3rd" },
        { book: "BD Chaurasia's Human Anatomy", chapter: "Heart Anatomy", edition: "8th" }
      ]
    },
    // AN-MOD-03-TOP-06: Great Vessels & Pericardium
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-03-TOP-06",
      stem: "A patient presents with pericardial effusion and tamponade. Which anatomical layer of the pericardium is responsible for the fluid accumulation, and what is its embryological origin?",
      clinicalVignette: "Pericardial effusion and tamponade physiology",
      options: [
        {
          id: "a",
          text: "Fibrous pericardium; derived from splanchnic mesoderm",
          isCorrect: false,
          explanation: "Fibrous pericardium is not a serous membrane and does not accumulate fluid."
        },
        {
          id: "b",
          text: "Visceral serous pericardium; derived from splanchnic mesoderm and lines the heart",
          isCorrect: true,
          explanation: "The serous pericardium has two layers: visceral (epicardium) adhered to the heart and parietal lining the fibrous pericardium. Fluid accumulates in the pericardial cavity between these layers. Both are derived from splanchnic mesoderm. Excessive fluid causes tamponade."
        },
        {
          id: "c",
          text: "Parietal serous pericardium; derived from somatic mesoderm",
          isCorrect: false,
          explanation: "While parietal pericardium is involved, both serous layers allow fluid accumulation, and the origin is splanchnic."
        },
        {
          id: "d",
          text: "Myocardium; develops fluid within muscle",
          isCorrect: false,
          explanation: "Fluid is in the pericardial space, not within myocardium."
        }
      ],
      explanation: "The pericardium has two components: fibrous (outer) and serous (inner). The serous pericardium has visceral (epicardium) and parietal layers derived from splanchnic mesoderm. The pericardial cavity between these layers normally contains 15-50 mL of serous fluid. Excessive accumulation (>250 mL) causes tamponade, compromising cardiac filling.",
      difficulty: "MEDIUM",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [
        { book: "BD Chaurasia's Human Anatomy", chapter: "Pericardium", edition: "8th" },
        { book: "Langman's Embryology", chapter: "Cardiovascular System", edition: "14th" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-03-TOP-06",
      stem: "During pericardiocentesis for a patient with tamponade, the needle is inserted in the 5th intercostal space just lateral to the left sternal border. What anatomical relationships ensure safe access to the pericardial space?",
      clinicalVignette: "Pericardiocentesis anatomical landmarks",
      options: [
        {
          id: "a",
          text: "Needle passes through intercostal muscles and reaches the fibrous pericardium",
          isCorrect: true,
          explanation: "Pericardiocentesis typically uses the subxiphoid or 5th intercostal space approach. The needle passes through skin, superficial fascia, intercostal muscles, and internal thoracic fascia to reach the fibrous pericardium. Entering just lateral to the sternal border (at the cardiac border) and at the 5th space maximizes access while avoiding cardiac chambers (which are more posterior at this level)."
        },
        {
          id: "b",
          text: "Needle passes through pleura and directly into pericardial fluid",
          isCorrect: false,
          explanation: "The pleura may be encountered but should be avoided with proper technique."
        },
        {
          id: "c",
          text: "Needle enters between costal cartilages to avoid rib damage",
          isCorrect: false,
          explanation: "The 5th intercostal space is used, not the cartilage."
        },
        {
          id: "d",
          text: "Needle is directed posteriorly toward the left atrium",
          isCorrect: false,
          explanation: "The needle should be directed toward the pericardial sac accumulation, not specifically at the atrium."
        }
      ],
      explanation: "Pericardiocentesis can use subxiphoid approach or 5th intercostal space lateral to the left sternal border. The subxiphoid approach is often safer as it avoids intercostal vessels and the pleura. The 5th intercostal approach requires careful technique to avoid the pleura (which extends anteriorly) and the lung apex. Understanding pericardial anatomy is critical for safe needle placement.",
      difficulty: "HARD",
      bloomsLevel: "ProblemSolving",
      examTags: ["NEXT_STEP1", "NEET_PG", "AIIMS"],
      textbookRefs: [
        { book: "Vishram Singh Clinical Anatomy", chapter: "Pericardial Access", edition: "3rd" },
        { book: "BD Chaurasia's Human Anatomy", chapter: "Pericardium", edition: "8th" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-03-TOP-06",
      stem: "The superior vena cava receives blood from which vessels, and in which mediastinal compartment does it primarily travel?",
      clinicalVignette: "Superior vena cava anatomy and tributaries",
      options: [
        {
          id: "a",
          text: "Receives brachiocephalic and azygos veins; travels in posterior mediastinum",
          isCorrect: false,
          explanation: "SVC travels anteriorly in superior mediastinum, not posterior."
        },
        {
          id: "b",
          text: "Receives brachiocephalic, azygos, and internal thoracic veins; travels in anterior mediastinum",
          isCorrect: false,
          explanation: "SVC is not anterior; it's in the superior mediastinum."
        },
        {
          id: "c",
          text: "Receives brachiocephalic veins and azygos vein; travels in superior mediastinum",
          isCorrect: true,
          explanation: "The SVC is formed by the union of right and left brachiocephalic veins. It also receives the azygos vein just before entering the right atrium. It travels through the superior mediastinum, anterior to the trachea and right main bronchus, and is a key landmark in thoracic surgery."
        },
        {
          id: "d",
          text: "Receives only brachiocephalic veins; travels in middle mediastinum",
          isCorrect: false,
          explanation: "SVC receives azygos as well and is in superior, not middle mediastinum."
        }
      ],
      explanation: "The SVC drains blood from the upper body via the brachiocephalic veins and also receives the azygos vein (which drains the posterior thoracic wall). The SVC travels through the superior mediastinum and enters the right atrium at the level of the 2nd costal cartilage. SVC obstruction causes venous congestion in the upper body.",
      difficulty: "EASY",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [
        { book: "BD Chaurasia's Human Anatomy", chapter: "Great Vessels", edition: "8th" },
        { book: "Gray's Anatomy", chapter: "Great Vessels of Thorax", edition: "42nd" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-03-TOP-06",
      stem: "A patient with aortic dissection has a tear in the descending thoracic aorta. Which anatomical structures are at risk of rupture or compromise due to this dissection?",
      clinicalVignette: "Aortic dissection complications and involved structures",
      options: [
        {
          id: "a",
          text: "Pulmonary arteries and esophagus",
          isCorrect: true,
          explanation: "The descending thoracic aorta runs posterior and left in the mediastinum alongside the esophagus and posterior to the pericardium. Aortic dissection can extend into these adjacent structures, compromising esophageal blood supply (causing esophageal rupture) and pulmonary artery function. The aorta may also rupture into the pleural space."
        },
        {
          id: "b",
          text: "Right atrium and superior vena cava only",
          isCorrect: false,
          explanation: "These structures are anterior; descending aorta dissection would not directly compromise them."
        },
        {
          id: "c",
          text: "Coronary arteries and left main bronchus",
          isCorrect: false,
          explanation: "While aortic dissection can involve coronary origins (type A), the descending aorta is typically type B and doesn't affect coronaries."
        },
        {
          id: "d",
          text: "Left ventricle only",
          isCorrect: false,
          explanation: "Descending aorta dissection does not directly compromise the LV; type A does."
        }
      ],
      explanation: "Aortic dissection of the descending thoracic aorta can extend into multiple structures: esophagus (with potential rupture and esophageal necrosis), pulmonary arteries (compromising pulmonary circulation), and into the pleural space (hemothorax). Type B dissections (descending aorta) have better prognosis than type A (ascending) but still carry high morbidity and mortality.",
      difficulty: "HARD",
      bloomsLevel: "Analysis",
      examTags: ["NEXT_STEP1", "NEET_PG", "AIIMS"],
      textbookRefs: [
        { book: "Vishram Singh Clinical Anatomy", chapter: "Aortic Pathology", edition: "3rd" },
        { book: "BD Chaurasia's Human Anatomy", chapter: "Thoracic Aorta", edition: "8th" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-03-TOP-06",
      stem: "The inferior vena cava enters the right atrium at a specific anatomical level. At which vertebral level does this entry occur, and what structure lies anterior to the IVC at this level?",
      clinicalVignette: "Inferior vena cava anatomy at cardiac junction",
      options: [
        {
          id: "a",
          text: "T4 vertebral level; SVC lies anterior",
          isCorrect: false,
          explanation: "The IVC enters at T8, not T4; SVC enters at T4."
        },
        {
          id: "b",
          text: "T8 vertebral level; right atrium lies anterior",
          isCorrect: true,
          explanation: "The IVC ascends through the caval opening (T8) in the diaphragm and enters the right atrium at the T8 vertebral level. The right atrium lies anterior and slightly to the right of the IVC at this point. This anatomical relationship is important for cardiac catheterization and echocardiography."
        },
        {
          id: "c",
          text: "T12 vertebral level; pericardium lies anterior",
          isCorrect: false,
          explanation: "IVC enters at T8, not T12."
        },
        {
          id: "d",
          text: "L4 vertebral level; left atrium lies anterior",
          isCorrect: false,
          explanation: "The IVC passes through the diaphragm at T8, not at the lumbar region."
        }
      ],
      explanation: "The IVC passes through the caval opening in the diaphragm at the T8 vertebral level and enters the right atrium posterolaterally. The entry is posterior and to the right of the right atrium. Understanding this anatomy is essential for central venous catheterization and interpreting cardiac imaging. IVC obstruction can cause lower extremity edema and ascites.",
      difficulty: "MEDIUM",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [
        { book: "BD Chaurasia's Human Anatomy", chapter: "Inferior Vena Cava", edition: "8th" },
        { book: "Gray's Anatomy", chapter: "Heart and Great Vessels", edition: "42nd" }
      ]
    },
    // AN-MOD-04-TOP-01: Anterior Abdominal Wall
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-04-TOP-01",
      stem: "A 42-year-old patient with linea alba defect develops a ventral hernia. Which anatomical layer is deficient in this hernia, and what is the embryological significance of the linea alba?",
      clinicalVignette: "Ventral hernia through linea alba defect",
      options: [
        {
          id: "a",
          text: "Rectus abdominis muscle is deficient; linea alba is midline raphe of skin",
          isCorrect: false,
          explanation: "Linea alba is deeper than skin; it represents the midline fascial junction."
        },
        {
          id: "b",
          text: "Rectus sheath (aponeurosis) is deficient; linea alba is midline fusion of abdominal aponeuroses",
          isCorrect: true,
          explanation: "The linea alba is formed by the fusion of the aponeuroses of the external oblique, internal oblique, and transversus abdominis muscles at the midline. Deficiency in this fascial layer allows hernia formation. Embryologically, this represents the junction of lateral body wall development."
        },
        {
          id: "c",
          text: "Peritoneum is deficient; linea alba is peritoneal reflection",
          isCorrect: false,
          explanation: "While peritoneum may be involved, linea alba is fascial, not peritoneal."
        },
        {
          id: "d",
          text: "Transversus abdominis only; linea alba is muscular tendon",
          isCorrect: false,
          explanation: "Linea alba involves all three lateral abdominal muscle aponeuroses, not just transversus."
        }
      ],
      explanation: "The linea alba is the midline raphe formed by fusion of the aponeuroses of external oblique, internal oblique, and transversus abdominis. This represents the embryological junction of the left and right lateral body walls. Ventral hernias occur when this fascial layer is deficient or weakened, commonly in the midline between rectus muscles.",
      difficulty: "MEDIUM",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [
        { book: "BD Chaurasia's Human Anatomy", chapter: "Anterior Abdominal Wall", edition: "8th" },
        { book: "Gray's Anatomy", chapter: "Abdominal Wall", edition: "42nd" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-04-TOP-01",
      stem: "During examination of the anterior abdominal wall, the arcuate line (semicircular line of Douglas) marks the transition of the rectus sheath anatomy. Below this line, which layer is missing?",
      clinicalVignette: "Arcuate line anatomy and sheath composition",
      options: [
        {
          id: "a",
          text: "Internal oblique aponeurosis lies anterior to rectus",
          isCorrect: false,
          explanation: "Internal oblique is anterior above and posterior below the arcuate line."
        },
        {
          id: "b",
          text: "Posterior rectus sheath is absent; rectus lies directly on fascia transversalis",
          isCorrect: true,
          explanation: "The arcuate line marks the transition where the posterior rectus sheath ends. Above the line, all three lateral abdominal muscle aponeuroses contribute to anterior and posterior layers. Below the line, all aponeuroses pass anterior to rectus, leaving no posterior sheath—rectus abdominis lies directly on fascia transversalis and peritoneum."
        },
        {
          id: "c",
          text: "External oblique aponeurosis becomes internal",
          isCorrect: false,
          explanation: "External oblique maintains its anatomical position."
        },
        {
          id: "d",
          text: "Anterior rectus sheath is thicker",
          isCorrect: false,
          explanation: "The change involves the posterior sheath, not anterior thickening."
        }
      ],
      explanation: "The arcuate line represents the lower limit of the posterior rectus sheath. Above this line (at the level of anterior superior iliac spine), rectus is covered by posterior sheath formed from internal oblique and transversus aponeuroses. Below, all aponeuroses pass anterior, leaving rectus on fascia transversalis. This anatomical knowledge is essential for surgical approaches and hernia repair.",
      difficulty: "HARD",
      bloomsLevel: "Analysis",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [
        { book: "Vishram Singh Clinical Anatomy", chapter: "Rectus Sheath Anatomy", edition: "3rd" },
        { book: "BD Chaurasia's Human Anatomy", chapter: "Rectus Sheath", edition: "8th" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-04-TOP-01",
      stem: "The superior epigastric artery, which supplies the upper rectus abdominis muscle, is a continuation of which vessel?",
      clinicalVignette: "Epigastric artery blood supply to rectus",
      options: [
        {
          id: "a",
          text: "Internal thoracic artery",
          isCorrect: true,
          explanation: "The superior epigastric artery is the terminal branch of the internal thoracic (internal mammary) artery. It enters the rectus sheath between the rectus and costal margin, supplying the upper rectus muscle. This vessel anastomoses with the inferior epigastric artery (from external iliac) providing collateral circulation along the linea alba."
        },
        {
          id: "b",
          text: "Lateral thoracic artery",
          isCorrect: false,
          explanation: "Lateral thoracic supplies serratus anterior, not epigastric territory."
        },
        {
          id: "c",
          text: "Intercostal artery",
          isCorrect: false,
          explanation: "Intercostal arteries are posterior; epigastric is anterior."
        },
        {
          id: "d",
          text: "Musculophrenic artery",
          isCorrect: false,
          explanation: "Musculophrenic artery runs along the costal margin, not through rectus sheath."
        }
      ],
      explanation: "The internal thoracic artery descends along the sternal side of the chest wall and gives off the superior epigastric artery, which enters the rectus sheath and supplies the upper rectus. The inferior epigastric (from external iliac) supplies the lower rectus. These vessels anastomose at the level of the arcuate line, providing important collateral circulation.",
      difficulty: "MEDIUM",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [
        { book: "BD Chaurasia's Human Anatomy", chapter: "Abdominal Wall Vessels", edition: "8th" },
        { book: "Gray's Anatomy", chapter: "Abdominal Arteries", edition: "42nd" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-04-TOP-01",
      stem: "A surgical patient develops Pfannenstiel incision complications. At what anatomical level is the Pfannenstiel incision made, and which nerve is at risk of injury?",
      clinicalVignette: "Pfannenstiel incision surgical anatomy",
      options: [
        {
          id: "a",
          text: "1-2 cm above pubic symphysis; iliohypogastric nerve at risk",
          isCorrect: true,
          explanation: "The Pfannenstiel incision is made transversely 1-2 cm above the pubic symphysis. The incision cuts through skin and anterior rectus sheath, but the rectus muscles are separated (not cut) to access the peritoneum. The iliohypogastric and ilioinguinal nerves run in the lower rectus sheath and are at risk with deeper dissection or during closure."
        },
        {
          id: "b",
          text: "At the level of ASIS; femoral nerve at risk",
          isCorrect: false,
          explanation: "Femoral nerve is more lateral; Pfannenstiel is suprapubic."
        },
        {
          id: "c",
          text: "Midway between umbilicus and ASIS; obturator nerve at risk",
          isCorrect: false,
          explanation: "Obturator nerve is more medial/pelvic; Pfannenstiel is suprapubic."
        },
        {
          id: "d",
          text: "At arcuate line; transversus nerve at risk",
          isCorrect: false,
          explanation: "Pfannenstiel is suprapubic; arcuate line is higher."
        }
      ],
      explanation: "The Pfannenstiel incision is a common surgical approach for pelvic procedures. It is made transversely 1-2 cm above the pubic symphysis, providing good exposure of pelvic structures while allowing anatomically sound muscle separation. The iliohypogastric and ilioinguinal nerves run in the lower rectus sheath and can cause chronic pain if injured during closure (key complication).",
      difficulty: "HARD",
      bloomsLevel: "ProblemSolving",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [
        { book: "Vishram Singh Clinical Anatomy", chapter: "Lower Abdominal Innervation", edition: "3rd" },
        { book: "BD Chaurasia's Human Anatomy", chapter: "Anterior Abdominal Wall", edition: "8th" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-04-TOP-01",
      stem: "The superficial epigastric vessels are found in the anterior abdominal wall just below the inguinal ligament. What is their embryological significance, and what do they indicate?",
      clinicalVignette: "Superficial epigastric vessels anatomy",
      options: [
        {
          id: "a",
          text: "Tributaries of femoral vessels; indicate superficial venous drainage pattern",
          isCorrect: true,
          explanation: "The superficial epigastric artery and vein run between skin and fascia of the lower anterior abdominal wall, just medial to the femoral vessels. They are tributaries of the femoral artery and vein respectively. These vessels are variable but indicate the pattern of superficial venous drainage in the lower abdominal wall region."
        },
        {
          id: "b",
          text: "Branches of deep epigastric vessels; deep layer supply only",
          isCorrect: false,
          explanation: "Superficial vessels are distinct from deep epigastric system."
        },
        {
          id: "c",
          text: "Embryological remnants of umbilical vessels only",
          isCorrect: false,
          explanation: "While some may connect to umbilical remnants, they primarily represent femoral tributaries."
        },
        {
          id: "d",
          text: "Anomalous vessels without functional significance",
          isCorrect: false,
          explanation: "These are normal variants with functional venous drainage role."
        }
      ],
      explanation: "Superficial epigastric vessels are variable tributaries of femoral vessels, found in the superficial tissue of the lower anterior abdominal wall. They may anastomose with other superficial systems and indicate collateral drainage patterns. Knowledge of these vessels is important during groin dissection and vascular surgery to avoid unnecessary hemorrhage.",
      difficulty: "MEDIUM",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [
        { book: "BD Chaurasia's Human Anatomy", chapter: "Femoral Vessels", edition: "8th" },
        { book: "Gray's Anatomy", chapter: "Inguinal Region", edition: "42nd" }
      ]
    },
    // AN-MOD-04-TOP-02: Inguinal Region & Hernias
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-04-TOP-02",
      stem: "A 55-year-old develops an indirect inguinal hernia. What is the embryological origin of the hernia sac, and why is this location the area of weakness?",
      clinicalVignette: "Indirect inguinal hernia embryological origin",
      options: [
        {
          id: "a",
          text: "Processus vaginalis; represents patent sac following testicular descent",
          isCorrect: true,
          explanation: "Indirect inguinal hernias develop through a patent processus vaginalis (PV), the peritoneal sac that accompanies the testis during descent. In infants, PV normally closes by 1 year. If patent, it allows abdominal contents to herniate along the spermatic cord through the deep and superficial inguinal rings. This is the most common hernia type."
        },
        {
          id: "b",
          text: "Direct sac through Hesselbach triangle; represents area of weakness in fascia transversalis",
          isCorrect: false,
          explanation: "This describes direct hernia, not indirect."
        },
        {
          id: "c",
          text: "Femoral ring defect; represents vascular space weakness",
          isCorrect: false,
          explanation: "This describes femoral hernia."
        },
        {
          id: "d",
          text: "Umbilical ring defect; represents embryological closure failure",
          isCorrect: false,
          explanation: "This describes umbilical hernia."
        }
      ],
      explanation: "Indirect inguinal hernia is the most common hernia type (90% of cases). It develops through a patent processus vaginalis, the embryological sac that normally closes postnatally. If PV remains open, the peritoneum can herniate along the spermatic cord. This explains why the hernia follows the cord pathway and why surgical repair must address the PV.",
      difficulty: "EASY",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [
        { book: "BD Chaurasia's Human Anatomy", chapter: "Inguinal Hernia", edition: "8th" },
        { book: "Langman's Embryology", chapter: "Gonadal Descent", edition: "14th" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-04-TOP-02",
      stem: "A direct inguinal hernia develops medial to the inferior epigastric vessels. What is the anatomical boundary (Hesselbach's triangle) that defines the area of weakness?",
      clinicalVignette: "Direct inguinal hernia and Hesselbach triangle",
      options: [
        {
          id: "a",
          text: "Bounded medially by linea semilunaris, laterally by inferior epigastric vessels, inferiorly by inguinal ligament",
          isCorrect: false,
          explanation: "Medial boundary is linea alba or median umbilical ligament, not semilunaris."
        },
        {
          id: "b",
          text: "Bounded medially by linea alba/median lig., laterally by inferior epigastric vessels, inferiorly by inguinal ligament",
          isCorrect: true,
          explanation: "Hesselbach's triangle is bounded by three structures: medially—linea alba (or median umbilical ligament); laterally—inferior epigastric vessels; inferiorly—inguinal ligament. Direct hernias occur within this triangle through weakness in the fascia transversalis and rectus abdominis. This area is supplied only by superficial vessels and lacks reinforcement."
        },
        {
          id: "c",
          text: "Bounded by spermatic cord medially and femoral vessels laterally",
          isCorrect: false,
          explanation: "This describes the femoral hernia area, not Hesselbach triangle."
        },
        {
          id: "d",
          text: "Bounded by external oblique aponeurosis on all sides",
          isCorrect: false,
          explanation: "Hesselbach triangle is deep to external oblique."
        }
      ],
      explanation: "Hesselbach's triangle (also called inguinal triangle or Hasselbach triangle) is the area bounded by the medial and lateral umbilical ligaments/linea alba medially, inferior epigastric vessels laterally, and inguinal ligament inferiorly. Direct inguinal hernias occur through this area of weakness in the posterior wall. This contrasts with indirect hernias which occur lateral to the epigastric vessels.",
      difficulty: "MEDIUM",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [
        { book: "Vishram Singh Clinical Anatomy", chapter: "Inguinal Hernia Types", edition: "3rd" },
        { book: "BD Chaurasia's Human Anatomy", chapter: "Inguinal Region", edition: "8th" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-04-TOP-02",
      stem: "A 68-year-old female presents with a femoral hernia. Through which anatomical space does the hernia protrude?",
      clinicalVignette: "Femoral hernia through anatomical space",
      options: [
        {
          id: "a",
          text: "Through the femoral ring medial to the femoral vein",
          isCorrect: true,
          explanation: "Femoral hernias protrude through the femoral ring, which is the medial part of the femoral sheath containing loose areolar tissue. The hernia passes medial to the femoral vein, between the inguinal ligament (superiorly), lacunar ligament (medially), and pectineal ligament (inferiorly). Femoral hernias are more common in women and have high strangulation risk."
        },
        {
          id: "b",
          text: "Through the femoral canal lateral to the femoral artery",
          isCorrect: false,
          explanation: "Femoral hernia is medial to vessels, not lateral."
        },
        {
          id: "c",
          text: "Through the obturator foramen",
          isCorrect: false,
          explanation: "Obturator hernia is rare; femoral hernia goes through femoral ring."
        },
        {
          id: "d",
          text: "Through the inguinal canal alongside the spermatic cord",
          isCorrect: false,
          explanation: "This describes inguinal hernia, not femoral."
        }
      ],
      explanation: "Femoral hernias protrude through the femoral ring (medial compartment of femoral sheath) beneath the inguinal ligament. The hernia lies medial to the femoral vein in the femoral canal. Femoral hernias are more common in females due to wider pelvis and larger femoral ring. They have high strangulation risk (up to 40%) due to the rigid borders of the femoral ring.",
      difficulty: "MEDIUM",
      bloomsLevel: "ProblemSolving",
      examTags: ["NEXT_STEP1", "NEET_PG", "AIIMS"],
      textbookRefs: [
        { book: "BD Chaurasia's Human Anatomy", chapter: "Femoral Hernia", edition: "8th" },
        { book: "Vishram Singh Clinical Anatomy", chapter: "Femoral Region Anatomy", edition: "3rd" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-04-TOP-02",
      stem: "The spermatic cord in males passes through two inguinal rings. Which structures form these rings, and what is their anatomical relationship?",
      clinicalVignette: "Spermatic cord and inguinal rings anatomy",
      options: [
        {
          id: "a",
          text: "Deep ring: fascia transversalis opening; Superficial ring: external oblique aponeurosis opening",
          isCorrect: true,
          explanation: "The spermatic cord passes through two rings: the deep (internal) inguinal ring is an opening in the fascia transversalis lateral to the inferior epigastric vessels; the superficial (external) inguinal ring is a deficiency in the external oblique aponeurosis above and medial to the pubic tubercle. The cord travels between these rings (through the inguinal canal) in layers derived from the three lateral abdominal muscles."
        },
        {
          id: "b",
          text: "Both rings formed by cremaster muscle and fascia",
          isCorrect: false,
          explanation: "The rings are formed by different layers; cremaster is a cord covering."
        },
        {
          id: "c",
          text: "Deep ring: internal oblique; Superficial ring: external oblique",
          isCorrect: false,
          explanation: "Deep ring is fascia transversalis, not oblique aponeurosis."
        },
        {
          id: "d",
          text: "Rings are concurrent openings at the same anatomical level",
          isCorrect: false,
          explanation: "The rings are at different anatomical levels—deep is lateral, superficial is medial."
        }
      ],
      explanation: "The inguinal canal contains the spermatic cord in males (or round ligament in females), extending from the deep ring to the superficial ring. The deep ring is an opening in fascia transversalis; the superficial ring is an external oblique aponeurosis deficiency. Understanding cord anatomy is essential for hernia repair and avoiding nerve injury to the genital branch of the genitofemoral nerve.",
      difficulty: "MEDIUM",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [
        { book: "BD Chaurasia's Human Anatomy", chapter: "Spermatic Cord", edition: "8th" },
        { book: "Gray's Anatomy", chapter: "Inguinal Region", edition: "42nd" }
      ]
    },
    // AN-MOD-04-TOP-04: Stomach, Duodenum & Pancreas
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-04-TOP-04",
      stem: "A 48-year-old with gastric ulcer has hemorrhage from the left gastric artery. Which anatomical vessel is typically ligated to control this bleeding?",
      clinicalVignette: "Gastric hemorrhage and vascular anatomy",
      options: [
        {
          id: "a",
          text: "Left gastric artery at its origin from celiac trunk",
          isCorrect: true,
          explanation: "The left gastric artery is the smallest of the three branches of the celiac trunk and supplies the lesser curvature of stomach. In gastric ulcer hemorrhage involving left gastric, ligation at the origin (near celiac trunk) is performed. This is the primary blood supply to the lesser curvature."
        },
        {
          id: "b",
          text: "Right gastric artery along greater curvature",
          isCorrect: false,
          explanation: "Right gastric supplies lesser curvature; greater curvature is supplied by gastro-epiploic vessels."
        },
        {
          id: "c",
          text: "Splenic artery at hilum of spleen",
          isCorrect: false,
          explanation: "Splenic artery supplies spleen, not gastric hemorrhage source."
        },
        {
          id: "d",
          text: "Celiac trunk proximal to all branches",
          isCorrect: false,
          explanation: "Selective ligation at left gastric origin is preferred over celiac ligation to preserve other visceral blood supply."
        }
      ],
      explanation: "The left gastric artery is one of the three branches of the celiac trunk and supplies the lesser curvature of the stomach via right and left divisions. Gastric ulcers commonly occur at the lesser curvature, particularly at the posterior wall where the left gastric artery can erode. Control involves ligation of the left gastric artery at its origin.",
      difficulty: "MEDIUM",
      bloomsLevel: "ProblemSolving",
      examTags: ["NEXT_STEP1", "NEET_PG", "AIIMS"],
      textbookRefs: [
        { book: "BD Chaurasia's Human Anatomy", chapter: "Celiac Trunk Branches", edition: "8th" },
        { book: "Vishram Singh Clinical Anatomy", chapter: "Gastric Blood Supply", edition: "3rd" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-04-TOP-04",
      stem: "The duodenum has four parts with different peritoneal coverage. Which part is retroperitoneal and at highest risk for pancreatitis complications?",
      clinicalVignette: "Duodenal anatomy and retroperitoneal relationships",
      options: [
        {
          id: "a",
          text: "First part (D1); covers pancreatic head",
          isCorrect: false,
          explanation: "D1 is mostly intraperitoneal."
        },
        {
          id: "b",
          text: "Second part (D2); retroperitoneal and relates to pancreatic head",
          isCorrect: true,
          explanation: "The second part (descending duodenum) is retroperitoneal and runs vertically along the right side of the pancreatic head. The duodenopancreatic sulcus contains the shared blood supply and pancreatic ducts. Acute pancreatitis can erode through the duodenum at this level, and duodenal obstruction can result from chronic pancreatitis."
        },
        {
          id: "c",
          text: "Third part (D3); anterior and unrelated to pancreas",
          isCorrect: false,
          explanation: "D3 is retroperitoneal but crosses posterior to mesenteric vessels."
        },
        {
          id: "d",
          text: "Fourth part (D4); intraperitoneal and in contact with stomach",
          isCorrect: false,
          explanation: "D4 is retroperitoneal but not the main pancreatic relation."
        }
      ],
      explanation: "The second part of duodenum (D2) is retroperitoneal and forms the anterior border of the pancreatic head. The relationship is intimate, with the duodenopancreatic sulcus containing pancreatic ducts and shared blood supply. This anatomical relationship explains why pancreatitis can lead to duodenal inflammation and obstruction, and why duodenal ulcers at this level can cause massive hemorrhage from the gastroduodenal artery.",
      difficulty: "HARD",
      bloomsLevel: "Analysis",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [
        { book: "BD Chaurasia's Human Anatomy", chapter: "Duodenum and Pancreas", edition: "8th" },
        { book: "Vishram Singh Clinical Anatomy", chapter: "Duodenal Relations", edition: "3rd" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-04-TOP-04",
      stem: "The pancreatic duct joins the common bile duct at the ampulla of Vater. What is the embryological basis for this union, and what clinical complication can arise from this relationship?",
      clinicalVignette: "Pancreaticobiliary duct union at ampulla",
      options: [
        {
          id: "a",
          text: "Union occurs during hepatic outgrowth; pancreaticobiliary carcinoma risk",
          isCorrect: true,
          explanation: "The pancreatic and bile ducts unite at the ampulla of Vater in the second portion of the duodenum. Embryologically, the pancreas develops from dorsal and ventral pancreatic buds; the ventral bud (with associated bile duct) rotates to meet the dorsal bud. Anatomically, this union creates a potential site for obstruction and increases risk of cholangiopancreatitis. Anomalous unions (pancreaticobiliary maljunction) can predispose to carcinoma."
        },
        {
          id: "b",
          text: "Union is at duodenopancreatic sulcus; increases pancreatitis risk only",
          isCorrect: false,
          explanation: "Union is at ampulla, and risks include more than just pancreatitis."
        },
        {
          id: "c",
          text: "Union represents abnormal development requiring surgical separation",
          isCorrect: false,
          explanation: "Normal union is physiological; abnormalities are pathological."
        },
        {
          id: "d",
          text: "Union is variable in 20% of population; has no clinical significance",
          isCorrect: false,
          explanation: "Anatomical variation has significant clinical implications."
        }
      ],
      explanation: "The pancreatic and common bile ducts unite at the ampulla of Vater (major duodenal papilla), where they enter the duodenum together. This union site is clinically significant: stones or strictures can obstruct both ducts, causing cholangitis and pancreatitis. Anomalous pancreaticobiliary union (APBU), where ducts join outside the duodenum before entering separately, is associated with increased risk of cholangiocarcinoma.",
      difficulty: "HARD",
      bloomsLevel: "Analysis",
      examTags: ["NEXT_STEP1", "NEET_PG", "AIIMS"],
      textbookRefs: [
        { book: "BD Chaurasia's Human Anatomy", chapter: "Pancreatic Ducts", edition: "8th" },
        { book: "Langman's Embryology", chapter: "Pancreas Development", edition: "14th" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-04-TOP-04",
      stem: "A patient with acute pancreatitis has amylase leakage into the peritoneal cavity. Which anatomical space or pouch is most likely to accumulate pancreatic fluid?",
      clinicalVignette: "Pancreatic fluid distribution in acute pancreatitis",
      options: [
        {
          id: "a",
          text: "Omental bursa (lesser peritoneal sac)",
          isCorrect: true,
          explanation: "The pancreas is related to the omental bursa (lesser sac) posteriorly. In acute pancreatitis with fat necrosis and fluid exudation, the omental bursa is the primary site for fluid collection (pseudocyst). The bursa is bounded anteriorly by stomach, posteriorly by pancreas and duodenum, making it a natural space for pancreatic fluid accumulation."
        },
        {
          id: "b",
          text: "Greater peritoneal sac only",
          isCorrect: false,
          explanation: "While greater sac is involved, omental bursa is primary."
        },
        {
          id: "c",
          text: "Hepatorenal pouch (Morison's pouch)",
          isCorrect: false,
          explanation: "This is a dependent area but not the primary pancreatic relation."
        },
        {
          id: "d",
          text: "Rectovesical/rectovaginal pouch",
          isCorrect: false,
          explanation: "These are pelvic pouches, not related to pancreas."
        }
      ],
      explanation: "The pancreas is closely related to the omental bursa (lesser peritoneal sac), which is bounded by the stomach anteriorly and by the duodenum and pancreas posteriorly. In acute pancreatitis, inflammatory fluid and pseudocysts preferentially collect in the omental bursa. Understanding this anatomical relationship is critical for locating fluid collections and assessing complications.",
      difficulty: "MEDIUM",
      bloomsLevel: "ProblemSolving",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [
        { book: "Vishram Singh Clinical Anatomy", chapter: "Pancreatic Relations", edition: "3rd" },
        { book: "BD Chaurasia's Human Anatomy", chapter: "Pancreas", edition: "8th" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-04-TOP-04",
      stem: "The accessory pancreatic duct (duct of Santorini) opens into the minor duodenal papilla. What is the embryological significance of this duct, and when is it clinically relevant?",
      clinicalVignette: "Accessory pancreatic duct anatomy and pathology",
      options: [
        {
          id: "a",
          text: "Remnant of dorsal pancreatic bud; becomes important if main duct is obstructed",
          isCorrect: true,
          explanation: "The accessory duct is a remnant of the dorsal pancreatic bud's duct system. It typically drains into the minor duodenal papilla. If the main pancreatic duct (from the ventral bud) becomes obstructed, the accessory duct may provide alternative drainage. Pancreas divisum occurs when the ducts fail to fuse, and the dorsal duct drains solely through the accessory duct at the minor papilla, increasing pancreatitis risk due to inadequate drainage."
        },
        {
          id: "b",
          text: "Remnant of ventral bud; always provides redundant drainage",
          isCorrect: false,
          explanation: "Accessory is dorsal bud remnant, and is not always patent."
        },
        {
          id: "c",
          text: "Embryological anomaly present in less than 5% of population",
          isCorrect: false,
          explanation: "Accessory duct is normal anatomical variation in most people."
        },
        {
          id: "d",
          text: "Related to pancreatic insufficiency only",
          isCorrect: false,
          explanation: "Accessory duct dysfunction relates to ductal obstruction and pancreatitis."
        }
      ],
      explanation: "The accessory pancreatic duct drains the dorsal pancreatic bud and enters the minor duodenal papilla. It becomes clinically important when the main pancreatic duct is obstructed or in pancreas divisum (failure of duct fusion). Pancreas divisum leads to inadequate drainage of the dorsal pancreas through the small accessory duct opening, predisposing to recurrent pancreatitis.",
      difficulty: "HARD",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [
        { book: "Langman's Embryology", chapter: "Pancreas Development", edition: "14th" },
        { book: "BD Chaurasia's Human Anatomy", chapter: "Pancreatic Ducts", edition: "8th" }
      ]
    },
    // AN-MOD-04-TOP-05: Small & Large Intestine
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-04-TOP-05",
      stem: "A patient with small bowel obstruction shows a volvulus of jejunum. Which anatomical feature makes the jejunum more prone to volvulus compared to ileum?",
      clinicalVignette: "Jejunal volvulus risk factors",
      options: [
        {
          id: "a",
          text: "Jejunum has longer mesentery with wider vascular arcade",
          isCorrect: true,
          explanation: "The jejunum has a longer mesentery (longer distance from intestine to root of mesentery) and simpler vascular arcade (few large vessels), making it more mobile and prone to twisting. The ileum has a shorter mesentery, fat-laden mesentery, and complex vascular supply with multiple small vessels, making it less mobile and less prone to volvulus."
        },
        {
          id: "b",
          text: "Jejunum is larger in diameter and heavier",
          isCorrect: false,
          explanation: "Ileum is longer and narrower; size/weight is not the key factor."
        },
        {
          id: "c",
          text: "Jejunum is retroperitoneal while ileum is peritoneal",
          isCorrect: false,
          explanation: "Both are intraperitoneal on mesentery."
        },
        {
          id: "d",
          text: "Jejunum has thick, muscular walls predisposing to spasm",
          isCorrect: false,
          explanation: "While jejunum is thicker-walled, this relates to absorption not volvulus."
        }
      ],
      explanation: "The jejunum's longer mesentery and simpler vascular arcade (2-3 large vessels) make it more mobile compared to the ileum's fat-laden mesentery with complex branching vessels. This anatomical difference explains why jejunal volvulus, though rare, can occur, while ileal volvulus is even rarer. In pediatric populations, intestinal malrotation increases volvulus risk of the midgut.",
      difficulty: "MEDIUM",
      bloomsLevel: "Analysis",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [
        { book: "BD Chaurasia's Human Anatomy", chapter: "Jejunum and Ileum", edition: "8th" },
        { book: "Vishram Singh Clinical Anatomy", chapter: "Small Intestine Anatomy", edition: "3rd" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-04-TOP-05",
      stem: "The terminal ileum enters the large intestine at the ileocecal junction. What anatomical structures guard this junction, and what is their functional significance?",
      clinicalVignette: "Ileocecal junction anatomy and function",
      options: [
        {
          id: "a",
          text: "Ileocecal valve (plica); prevents reflux of colonic contents into ileum",
          isCorrect: true,
          explanation: "The ileocecal valve is a fold of mucosa and submucosa forming two flaps (superior and inferior) at the ileal entry into the cecum. It acts as a one-way valve, preventing backflow of colonic contents (especially fecal material and bacteria) into the ileum. The valve is most effective during cecal distension, which pushes the flaps together."
        },
        {
          id: "b",
          text: "Sphincter of Oddi; controls flow of pancreatic secretions",
          isCorrect: false,
          explanation: "Sphincter of Oddi is at ampulla of Vater, not ileocecal."
        },
        {
          id: "c",
          text: "Pyloric sphincter; prevents duodenogastric reflux",
          isCorrect: false,
          explanation: "Pyloric sphincter is at gastroduodenal junction."
        },
        {
          id: "d",
          text: "Simple mucous fold without functional valve mechanism",
          isCorrect: false,
          explanation: "The ileocecal valve is a functional barrier."
        }
      ],
      explanation: "The ileocecal valve is a functional structure formed by ileal mucosa creating a valve-like flap into the cecum. It prevents reflux of colonic contents (high bacterial load, fecal material) into the ileum where absorption continues. Incompetence or absence of the valve can contribute to small bowel bacterial overgrowth and malabsorption.",
      difficulty: "MEDIUM",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [
        { book: "Gray's Anatomy", chapter: "Large Intestine", edition: "42nd" },
        { book: "BD Chaurasia's Human Anatomy", chapter: "Ileocecal Junction", edition: "8th" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-04-TOP-05",
      stem: "A patient with toxic megacolon shows massive dilatation of the transverse colon. Which anatomical factor predisposes the transverse colon to greatest dilatation compared to other colonic segments?",
      clinicalVignette: "Toxic megacolon pathophysiology",
      options: [
        {
          id: "a",
          text: "Transverse colon has largest luminal diameter and longest length",
          isCorrect: true,
          explanation: "The transverse colon is the longest and most mobile part of the colon, with the largest luminal diameter. By Laplace's Law, larger diameter segments generate greater wall tension and are more prone to rupture with distension. Toxic megacolon (in IBD, infectious colitis) most commonly affects the transverse colon due to this anatomical predisposition."
        },
        {
          id: "b",
          text: "Transverse colon lacks taeniae coli",
          isCorrect: false,
          explanation: "All colonic segments have taeniae coli."
        },
        {
          id: "c",
          text: "Transverse colon is retroperitoneal with fixed position",
          isCorrect: false,
          explanation: "Transverse colon is peritoneal and more mobile."
        },
        {
          id: "d",
          text: "Transverse colon has thinner muscular wall than sigmoid",
          isCorrect: false,
          explanation: "Wall thickness is relatively uniform; luminal diameter is the key factor."
        }
      ],
      explanation: "Toxic megacolon occurs when severe inflammatory colitis (IBD, infectious) causes toxic dilation and potential perforation. The transverse colon is most commonly affected due to its large luminal diameter and relative mobility. By Laplace's Law (wall tension = pressure × radius), larger diameter means greater tension for same pressure, increasing rupture risk.",
      difficulty: "HARD",
      bloomsLevel: "Analysis",
      examTags: ["NEXT_STEP1", "NEET_PG", "AIIMS"],
      textbookRefs: [
        { book: "BD Chaurasia's Human Anatomy", chapter: "Colon Anatomy", edition: "8th" },
        { book: "Vishram Singh Clinical Anatomy", chapter: "Colorectal Anatomy", edition: "3rd" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-04-TOP-05",
      stem: "The appendix is a diverticulum of the cecum with a variable location. What is the most common attachment of the appendicular mesentery (mesoappendix) in relation to the terminal ileum?",
      clinicalVignette: "Appendicular anatomy and mesoappendix",
      options: [
        {
          id: "a",
          text: "Mesoappendix attaches to the terminal ileum base; contains appendicular vessels and nerve",
          isCorrect: true,
          explanation: "The appendix is attached to the cecum at the junction of the three taeniae coli (taeniae divergence point). The mesoappendix is the peritoneal fold containing the appendicular artery (branch of ICV) and nerves. In the most common (retrocecal) position, the mesoappendix runs from the terminal ileum base toward the appendix. Identifying and ligating these vessels is essential during appendectomy."
        },
        {
          id: "b",
          text: "Mesoappendix is absent in most people",
          isCorrect: false,
          explanation: "Mesoappendix is consistently present."
        },
        {
          id: "c",
          text: "Mesoappendix attaches directly to abdominal wall",
          isCorrect: false,
          explanation: "Mesoappendix is peritoneal fold, not to abdominal wall."
        },
        {
          id: "d",
          text: "Mesoappendix contains no significant vessels",
          isCorrect: false,
          explanation: "Appendicular vessels run in mesoappendix."
        }
      ],
      explanation: "The appendix (vermiform appendix) arises from the posteromedial wall of the cecum at the convergence of the three taeniae coli. The mesoappendix contains the appendicular artery (typically from the ileocolic artery) and provides the sole blood supply. The appendix's variable position (retrocecal, paracecal, subcecal, etc.) explains variable clinical presentations of appendicitis.",
      difficulty: "MEDIUM",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [
        { book: "BD Chaurasia's Human Anatomy", chapter: "Appendix", edition: "8th" },
        { book: "Gray's Anatomy", chapter: "Appendix Anatomy", edition: "42nd" }
      ]
    },
    // AN-MOD-04-TOP-06: Liver, Gallbladder & Spleen
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-04-TOP-06",
      stem: "The hepatic artery proper is a branch of the celiac trunk. After giving off the right gastric artery, it divides into which two branches?",
      clinicalVignette: "Hepatic artery anatomy and divisions",
      options: [
        {
          id: "a",
          text: "Right and left hepatic arteries",
          isCorrect: true,
          explanation: "The hepatic artery proper (after giving off the right gastric) divides into the right and left hepatic arteries at the porta hepatis. The right hepatic supplies the right lobe and often gives off the cystic artery to the gallbladder. The left hepatic supplies the left lobe, including the caudate lobe and quadrate lobe. Understanding these branches is critical for liver surgery and avoiding vascular complications."
        },
        {
          id: "b",
          text: "Splenic and gastroduodenal arteries",
          isCorrect: false,
          explanation: "Splenic is a separate celiac branch; gastroduodenal is from hepatic proper."
        },
        {
          id: "c",
          text: "Right and left gastric arteries",
          isCorrect: false,
          explanation: "Right gastric is given off before division; left gastric is separate celiac branch."
        },
        {
          id: "d",
          text: "Celiac and superior mesenteric arteries",
          isCorrect: false,
          explanation: "These are different vascular systems."
        }
      ],
      explanation: "The hepatic artery proper originates from the celiac trunk and divides into right and left hepatic arteries. The right hepatic typically supplies the right lobe and often gives off the cystic artery to the gallbladder. Anatomical variation is common, affecting surgical planning. Knowledge of hepatic artery anatomy is essential for safe hepatectomy and vascular reconstruction.",
      difficulty: "EASY",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [
        { book: "BD Chaurasia's Human Anatomy", chapter: "Hepatic Blood Supply", edition: "8th" },
        { book: "Gray's Anatomy", chapter: "Celiac Trunk Branches", edition: "42nd" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-04-TOP-06",
      stem: "The cystic artery typically arises from the right hepatic artery. What is the anatomical relationship of the cystic artery to Calot's triangle?",
      clinicalVignette: "Cystic artery and Calot triangle anatomy",
      options: [
        {
          id: "a",
          text: "Cystic artery forms the anterior border of Calot's triangle",
          isCorrect: true,
          explanation: "Calot's triangle (hepatic triangle) is bounded by: the common hepatic duct medially, the cystic duct inferiorly, and the cystic artery anteriorly. The cystic artery typically crosses anterior to the common bile duct within this triangle. During cholecystectomy, the cystic artery is identified, ligated, and divided first, before dividing the cystic duct. Excessive bleeding from the hepatic artery territory can occur if the artery is not properly identified."
        },
        {
          id: "b",
          text: "Cystic artery forms the posterior border",
          isCorrect: false,
          explanation: "The posterior border is formed by the hepatic duct and liver edge."
        },
        {
          id: "c",
          text: "Cystic artery is unrelated to Calot's triangle",
          isCorrect: false,
          explanation: "The artery is a key structure defining the triangle."
        },
        {
          id: "d",
          text: "Cystic artery forms the superior border with the liver",
          isCorrect: false,
          explanation: "Superior border is the liver edge."
        }
      ],
      explanation: "Calot's triangle (hepatic triangle) is a critical surgical landmark bounded by: common hepatic duct (medially), cystic duct (inferiorly), and cystic artery (anteriorly). Identifying the cystic artery's relationship to this triangle is essential during laparoscopic cholecystectomy. Anomalous artery origin or crossing patterns are common variations and can lead to iatrogenic injury.",
      difficulty: "MEDIUM",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [
        { book: "Vishram Singh Clinical Anatomy", chapter: "Biliary System Anatomy", edition: "3rd" },
        { book: "BD Chaurasia's Human Anatomy", chapter: "Gallbladder and Bile Ducts", edition: "8th" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-04-TOP-06",
      stem: "The liver is divided into anatomical lobes by visible fissures, but the surgical division is based on blood supply and drainage. What structure defines the division between right and left hepatic lobes surgically?",
      clinicalVignette: "Hepatic lobular anatomy surgical perspective",
      options: [
        {
          id: "a",
          text: "Hepatic vein confluence line (Cantlie's line)",
          isCorrect: true,
          explanation: "Cantlie's line is an imaginary line on the liver surface marking the division between right and left lobes based on blood supply and biliary drainage. It runs from the gallbladder fossa (anteriorly) to the junction of hepatic veins (posteriorly). This is the true surgical dividing line, whereas the falciform ligament (anatomical division) is visible but does not correspond to functional lobulation."
        },
        {
          id: "b",
          text: "Falciform ligament",
          isCorrect: false,
          explanation: "Falciform ligament is the anatomical division but not the functional/surgical division."
        },
        {
          id: "c",
          text: "Inferior vena cava junction",
          isCorrect: false,
          explanation: "IVC is a vascular marker but not the dividing line."
        },
        {
          id: "d",
          text: "Hepatic portal vein bifurcation",
          isCorrect: false,
          explanation: "Portal vein divides at the right/left lobe border but Cantlie's line better defines it."
        }
      ],
      explanation: "Hepatic lobulation has two definitions: anatomical (based on visible fissures) and surgical (based on blood/bile supply). Cantlie's line is the surgeon's dividing line, running from gallbladder fossa to hepatic vein confluence, marking the division between right and left lobes. This knowledge is essential for hepatic resection planning and understanding hepatic functional anatomy.",
      difficulty: "HARD",
      bloomsLevel: "Analysis",
      examTags: ["NEXT_STEP1", "NEET_PG", "AIIMS"],
      textbookRefs: [
        { book: "Gray's Anatomy", chapter: "Liver Anatomy", edition: "42nd" },
        { book: "BD Chaurasia's Human Anatomy", chapter: "Liver Lobes", edition: "8th" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-04-TOP-06",
      stem: "The splenic artery is the largest branch of the celiac trunk. At what anatomical location does it typically rupture in blunt abdominal trauma affecting the spleen?",
      clinicalVignette: "Splenic artery rupture in blunt trauma",
      options: [
        {
          id: "a",
          text: "Splenic hilum where the artery branches into terminal segments",
          isCorrect: true,
          explanation: "The splenic artery terminates by dividing into two to four terminal branches at the splenic hilum. These branches are the points of rupture in blunt splenic trauma due to the trauma shearing forces. Splenic artery rupture results in rapid intra-abdominal hemorrhage, which is contained initially by Gerota's fascia around the spleen but can lead to exsanguinating hemorrhage if not controlled."
        },
        {
          id: "b",
          text: "Spleen parenchyma with intact vascular pedicle",
          isCorrect: false,
          explanation: "While splenic fracture can occur, the major hemorrhage is from arterial injury."
        },
        {
          id: "c",
          text: "Celiac trunk origin",
          isCorrect: false,
          explanation: "Origin rupture would be rare and usually fatal immediately."
        },
        {
          id: "d",
          text: "Splenic vein before it joins portal system",
          isCorrect: false,
          explanation: "While splenic vein can be injured, the artery is more critical."
        }
      ],
      explanation: "Blunt splenic trauma often results in splenic artery rupture at the hilum where terminal branches are exposed. The spleen is highly vascular with rapid bleeding that exceeds venous drainage capacity. Hilar injuries are more severe than peripheral splenic fractures. Modern trauma management emphasizes spleen salvage when possible, though massive hemorrhage may necessitate splenectomy.",
      difficulty: "MEDIUM",
      bloomsLevel: "ProblemSolving",
      examTags: ["NEXT_STEP1", "NEET_PG", "AIIMS"],
      textbookRefs: [
        { book: "Vishram Singh Clinical Anatomy", chapter: "Splenic Anatomy", edition: "3rd" },
        { book: "BD Chaurasia's Human Anatomy", chapter: "Spleen", edition: "8th" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-04-TOP-06",
      stem: "The common bile duct is formed by the union of the hepatic and cystic ducts. At what anatomical level does the CBD enter the duodenum?",
      clinicalVignette: "Common bile duct opening into duodenum",
      options: [
        {
          id: "a",
          text: "First part of duodenum (D1)",
          isCorrect: false,
          explanation: "CBD enters more distally."
        },
        {
          id: "b",
          text: "Second part of duodenum (D2) at the major duodenal papilla",
          isCorrect: true,
          explanation: "The common bile duct descends posterior to the first part of duodenum and enters the second part (descending duodenum) at the major duodenal papilla (ampulla of Vater). This opening is surrounded by the sphincter of Oddi. The CBD enters with the pancreatic duct or separately depending on anatomy. This is the critical point for choledocholithiasis obstruction."
        },
        {
          id: "c",
          text: "Third part of duodenum (D3)",
          isCorrect: false,
          explanation: "CBD enters at D2, not D3."
        },
        {
          id: "d",
          text: "Fourth part of duodenum (D4)",
          isCorrect: false,
          explanation: "CBD enters at D2."
        }
      ],
      explanation: "The CBD enters the second part of the duodenum (descending portion) at the major duodenal papilla (ampulla of Vater) within the duodenal submucosa, passes obliquely through the wall, and opens into the duodenal lumen. The sphincter of Oddi controls the opening. Stones at this location cause biliary colic and pancreatitis. ERCP is performed to access this opening.",
      difficulty: "EASY",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [
        { book: "BD Chaurasia's Human Anatomy", chapter: "Common Bile Duct", edition: "8th" },
        { book: "Gray's Anatomy", chapter: "Biliary System", edition: "42nd" }
      ]
    },
    // AN-MOD-04-TOP-07: Kidneys, Ureters & Suprarenal Glands
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-04-TOP-07",
      stem: "A patient with a renal infarction due to renal artery thrombosis develops segmental kidney necrosis. This distribution follows the arterial territories, which is important for understanding kidney physiology. What is the anatomical basis for the segmental blood supply?",
      clinicalVignette: "Renal arterial territories and segmental anatomy",
      options: [
        {
          id: "a",
          text: "Renal artery divides into segmental arteries with minimal interarterial anastomoses (end arteries)",
          isCorrect: true,
          explanation: "The renal artery divides into 4-5 segmental (lobar) arteries that supply distinct kidney segments with minimal or no interarterial anastomoses—they are essentially end arteries. Segmental infarction follows the distribution of the involved segmental artery. This segmental organization is clinically important for partial nephrectomy planning and understanding the pattern of ischemic injury."
        },
        {
          id: "b",
          text: "Renal arteries have rich collateral anastomoses preventing infarction",
          isCorrect: false,
          explanation: "The lack of anastomoses predisposes to segmental infarction."
        },
        {
          id: "c",
          text: "Renal blood supply is diffuse without definable vascular territories",
          isCorrect: false,
          explanation: "Blood supply follows segmental distribution."
        },
        {
          id: "d",
          text: "Segmental arteries branch from the pelvis, not the renal artery",
          isCorrect: false,
          explanation: "Segmental arteries originate from renal artery divisions."
        }
      ],
      explanation: "The renal artery divides at the hilum into segmental arteries (apical, upper, middle, lower, posterior). Each supplies a specific renal segment without significant anastomoses (end-artery system). This anatomical arrangement explains why renal artery thrombosis causes segmental infarction and why surgical approaches must respect vascular territories to minimize ischemic damage.",
      difficulty: "MEDIUM",
      bloomsLevel: "Analysis",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [
        { book: "BD Chaurasia's Human Anatomy", chapter: "Renal Blood Supply", edition: "8th" },
        { book: "Vishram Singh Clinical Anatomy", chapter: "Renal Artery Branches", edition: "3rd" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-04-TOP-07",
      stem: "The ureters pass in front of the psoas major muscle and cross the iliac vessels. In females, the ureter passes medial to which structure at the pelvic brim?",
      clinicalVignette: "Ureter and female reproductive anatomy relationship",
      options: [
        {
          id: "a",
          text: "Ovarian artery and vein",
          isCorrect: true,
          explanation: "In females, the ureter enters the pelvis by crossing the iliac vessels and passes medial to the ovarian vessels. This anatomical relationship is clinically important: during gynecologic surgery, the ureter can be inadvertently ligated or injured if the ovarian vessels are clamped without visualizing the ureter. The ureter then enters the bladder at an oblique angle."
        },
        {
          id: "b",
          text: "Round ligament of uterus",
          isCorrect: false,
          explanation: "Round ligament is more anterior/superior in the pelvic brim region."
        },
        {
          id: "c",
          text: "Fallopian tube and mesosalpinx",
          isCorrect: false,
          explanation: "Fallopian tube is not at the brim where ureter enters."
        },
        {
          id: "d",
          text: "Uterine artery and vein",
          isCorrect: false,
          explanation: "Uterine vessels are more medial; ureter crosses ovarian vessels at the brim."
        }
      ],
      explanation: "In females, the ureter passes posteriorly from the abdomen, crosses the iliac bifurcation, and descends in the pelvis medial to the ovarian vessels. This anatomical relationship creates a surgical danger zone during hysterectomy and gynecologic procedures. The ureteric injury is a potential complication of hysterectomy if the ovarian vessels are not properly visualized with the ureter.",
      difficulty: "HARD",
      bloomsLevel: "ProblemSolving",
      examTags: ["NEXT_STEP1", "NEET_PG", "AIIMS"],
      textbookRefs: [
        { book: "Vishram Singh Clinical Anatomy", chapter: "Ureter in Pelvis", edition: "3rd" },
        { book: "BD Chaurasia's Human Anatomy", chapter: "Ureters", edition: "8th" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-04-TOP-07",
      stem: "The suprarenal (adrenal) glands have a rich arterial supply from multiple sources. Which artery supplies the suprarenal gland and originates directly from the aorta?",
      clinicalVignette: "Suprarenal gland blood supply sources",
      options: [
        {
          id: "a",
          text: "Middle suprarenal artery from the abdominal aorta",
          isCorrect: true,
          explanation: "The suprarenal glands have a triple blood supply: superior suprarenal (from phrenic), middle suprarenal (from aorta), and inferior suprarenal (from renal artery). The middle suprarenal artery arises directly from the abdominal aorta, making it the direct aortic supply. This rich arterial supply with minimal venous drainage can make adrenalectomy challenging and prone to significant bleeding."
        },
        {
          id: "b",
          text: "Superior suprarenal artery from the aorta",
          isCorrect: false,
          explanation: "Superior suprarenal is from the phrenic artery, not aorta."
        },
        {
          id: "c",
          text: "Inferior suprarenal artery from the aorta",
          isCorrect: false,
          explanation: "Inferior suprarenal is from the renal artery."
        },
        {
          id: "d",
          text: "Only one major suprarenal artery from renal hilum",
          isCorrect: false,
          explanation: "There are three arterial supplies."
        }
      ],
      explanation: "The suprarenal glands have a rich triple arterial supply: superior (phrenic), middle (aorta), and inferior (renal). The middle suprarenal artery directly from the aorta is hemodynamically significant. During adrenalectomy, all three sources must be identified and controlled. The suprarenal venous drainage (right to IVC, left to renal vein) is crucial to control to prevent intraoperative hemorrhage.",
      difficulty: "MEDIUM",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [
        { book: "BD Chaurasia's Human Anatomy", chapter: "Suprarenal Glands", edition: "8th" },
        { book: "Gray's Anatomy", chapter: "Suprarenal Glands", edition: "42nd" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-04-TOP-07",
      stem: "The left suprarenal vein drains into which major vein, and why is this relationship clinically significant for nephrectomy?",
      clinicalVignette: "Suprarenal venous drainage in nephrectomy",
      options: [
        {
          id: "a",
          text: "Left renal vein; important to preserve ureter and avoid renal vein injury during nephrectomy",
          isCorrect: true,
          explanation: "The left suprarenal vein drains into the left renal vein, creating a close anatomical relationship. During left nephrectomy, the renal vein must be divided, and if not careful, the adrenal vein can be damaged, causing bleeding. More importantly, the left suprarenal vein's connection to the renal vein must be identified and preserved or ligated safely to avoid hemorrhage from the adrenal bed."
        },
        {
          id: "b",
          text: "Inferior vena cava directly; unrelated to nephrectomy",
          isCorrect: false,
          explanation: "The left suprarenal vein does NOT drain directly to IVC."
        },
        {
          id: "c",
          text: "Splenic vein; significant during splenectomy but not nephrectomy",
          isCorrect: false,
          explanation: "Suprarenal vein drains to renal vein, not splenic."
        },
        {
          id: "d",
          text: "Phrenic vein; important for superior gland exposure",
          isCorrect: false,
          explanation: "Suprarenal vein drains to renal vein."
        }
      ],
      explanation: "The left suprarenal vein drains into the left renal vein just before it joins the IVC. This anatomical relationship is critical during left nephrectomy: care must be taken to avoid injuring the adrenal vein branch when dividing the renal vein. Failure to identify and control the adrenal vein can result in significant bleeding from the adrenal bed. Right-sided anatomy differs, with the right adrenal vein draining directly to the IVC.",
      difficulty: "HARD",
      bloomsLevel: "Analysis",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [
        { book: "Vishram Singh Clinical Anatomy", chapter: "Suprarenal Veins", edition: "3rd" },
        { book: "BD Chaurasia's Human Anatomy", chapter: "Renal and Suprarenal Vessels", edition: "8th" }
      ]
    },
    // AN-MOD-05-TOP-01: Bony Pelvis & Pelvic Floor
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-05-TOP-01",
      stem: "A pregnant patient presents for pelvic assessment before delivery. The obstetric pelvic brim is a key inlet measurement. What is the normal obstetric conjugate diameter, and how is it clinically measured?",
      clinicalVignette: "Pelvic inlet assessment for obstetric adequacy",
      options: [
        {
          id: "a",
          text: "Obstetric conjugate 11-12.5 cm; measured from lower border of pubic symphysis to sacral promontory",
          isCorrect: true,
          explanation: "The obstetric conjugate (the true, obstetric conjugate) is the shortest diameter of the pelvic inlet, measured from the lower border of the pubic symphysis to the most prominent point of the sacral promontory (usually S2). Normal is 11-12.5 cm; less than 10 cm indicates pelvic inlet contraction. It cannot be directly measured clinically but is estimated from the diagonal conjugate (12.5-13 cm) by subtracting 1.5-2 cm."
        },
        {
          id: "b",
          text: "Obstetric conjugate 13-14 cm; easily palpable between pubis and sacrum",
          isCorrect: false,
          explanation: "This measurement is too large and is closer to diagonal conjugate."
        },
        {
          id: "c",
          text: "Obstetric conjugate measured from pubic rami to ischial tuberosity",
          isCorrect: false,
          explanation: "This describes transverse diameter, not obstetric conjugate."
        },
        {
          id: "d",
          text: "Obstetric conjugate 9 cm; indicates pelvic adequacy",
          isCorrect: false,
          explanation: "9 cm is at the threshold for contraction; normal is 11-12.5 cm."
        }
      ],
      explanation: "The pelvic inlet has three important diameters: obstetric conjugate (11-12.5 cm, sacral promontory to pubic symphysis lower border), anatomical conjugate (11-12.5 cm, promontory to upper pubic border), and diagonal conjugate (12.5-13 cm, promontory to lower pubic border). The obstetric conjugate is clinically estimated via the diagonal conjugate. Contraction increases obstetric complications.",
      difficulty: "HARD",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [
        { book: "BD Chaurasia's Human Anatomy", chapter: "Bony Pelvis Obstetric Measurements", edition: "8th" },
        { book: "Vishram Singh Clinical Anatomy", chapter: "Female Pelvis", edition: "3rd" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-05-TOP-01",
      stem: "The pelvic floor is formed by the levator ani muscle. Which structure passes through the levator ani forming a hiatus that weakens the pelvic floor?",
      clinicalVignette: "Levator ani hiatus and pelvic floor weakness",
      options: [
        {
          id: "a",
          text: "Urethra, vagina, and rectum in females",
          isCorrect: true,
          explanation: "The levator ani muscle forms a funnel-shaped support for pelvic viscera. In females, the urethra, vagina, and rectum pass through the levator ani hiatus (the space between the pubococcygeus medially and iliococcygeus laterally). This hiatus is a potential area of weakness; prolapse of pelvic organs occurs through this defect when levator ani support is compromised by childbirth, aging, or chronic strain."
        },
        {
          id: "b",
          text: "Only urethra and rectum in females",
          isCorrect: false,
          explanation: "The vagina also passes through the hiatus."
        },
        {
          id: "c",
          text: "Only rectum and coccygeus muscle",
          isCorrect: false,
          explanation: "The vagina and urethra pass through; coccygeus is part of pelvic floor, not passing through."
        },
        {
          id: "d",
          text: "Obturator vessels and nerves",
          isCorrect: false,
          explanation: "Obturator structures are extraperitoneal; they don't pass through levator hiatus."
        }
      ],
      explanation: "The levator ani (pubococcygeus and iliococcygeus) forms a dynamic pelvic floor support. The hiatus allows passage of pelvic and urogenital structures. Traumatic childbirth, obesity, and chronic straining compromise this support, leading to pelvic organ prolapse. Understanding levator ani anatomy is essential for pelvic floor dysfunction management and prevention.",
      difficulty: "MEDIUM",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [
        { book: "BD Chaurasia's Human Anatomy", chapter: "Levator Ani Muscle", edition: "8th" },
        { book: "Gray's Anatomy", chapter: "Pelvic Floor", edition: "42nd" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-05-TOP-01",
      stem: "The pudendal nerve has an important clinical course through the pelvis. At which anatomical landmark does the pudendal nerve enter the pudendal canal (Alcock's canal)?",
      clinicalVignette: "Pudendal nerve course and Alcock's canal",
      options: [
        {
          id: "a",
          text: "Pudendal nerve enters at the ischial spine and travels in the pudendal canal",
          isCorrect: true,
          explanation: "The pudendal nerve arises from S2-S4 and travels through the greater sciatic foramen, curves around the ischial spine (landmark for pudendal nerve block), then enters the pudendal canal (Alcock's canal) in the medial aspect of the obturator internus muscle. It supplies perineal structures including external anal sphincter, external urethral sphincter, and perineal muscles. Pudendal nerve compression at the ischial spine or in the canal causes chronic pelvic pain."
        },
        {
          id: "b",
          text: "Pudendal nerve enters at the ischial tuberosity",
          isCorrect: false,
          explanation: "The ischial spine (not tuberosity) is the key landmark."
        },
        {
          id: "c",
          text: "Pudendal nerve ascends from the perineum into the pelvis",
          isCorrect: false,
          explanation: "The nerve descends from pelvis to perineum via the canal."
        },
        {
          id: "d",
          text: "Pudendal nerve is a branch of the obturator nerve",
          isCorrect: false,
          explanation: "Pudendal is a sacral plexus branch, distinct from obturator."
        }
      ],
      explanation: "The pudendal nerve (S2-S4) exits the pelvis through the greater sciatic foramen, wraps around the ischial spine (key landmark for pudendal block), and enters the pudendal canal (Alcock's canal) formed by the obturator internus fascia. It supplies the external sphincters and perineal muscles. Pudendal neuralgia (compression at ischial spine) is a challenging diagnosis with chronic pelvic pain.",
      difficulty: "HARD",
      bloomsLevel: "Analysis",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [
        { book: "Vishram Singh Clinical Anatomy", chapter: "Pudendal Nerve", edition: "3rd" },
        { book: "BD Chaurasia's Human Anatomy", chapter: "Pudendal Nerve Course", edition: "8th" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-05-TOP-01",
      stem: "The pelvic diaphragm is reinforced by pelvic fascia. Which fascia provides support to pelvic organs anteriorly and laterally, and is clinically important in hysterectomy?",
      clinicalVignette: "Pelvic fascia and organ support",
      options: [
        {
          id: "a",
          text: "Cardinal ligament (lateral cervical fascia) provides lateral support to uterus and vagina",
          isCorrect: true,
          explanation: "The cardinal ligament (transverse cervical ligament) is a thickening of the endopelvic fascia extending laterally from the cervix and vagina to the lateral pelvic wall. It contains uterine vessels, neural elements, and smooth muscle. During hysterectomy, the cardinal ligament must be divided and ligated to prevent hemorrhage from uterine vessels. Trauma to this structure can cause nerve injury and pelvic pain."
        },
        {
          id: "b",
          text: "Broad ligament supports rectum posteriorly",
          isCorrect: false,
          explanation: "Broad ligament is peritoneal fold, not fascia; rectum is supported by endopelvic fascia."
        },
        {
          id: "c",
          text: "Sacrotuberous ligament forms anterior pelvic support",
          isCorrect: false,
          explanation: "Sacrotuberous is posterior ligament, not anterior support."
        },
        {
          id: "d",
          text: "Obturator fascia extends anterior to provide bladder support",
          isCorrect: false,
          explanation: "Obturator fascia is on lateral pelvic wall, not anterior."
        }
      ],
      explanation: "The endopelvic fascia forms a continuous mesh supporting pelvic organs. The cardinal ligament is a particularly important thickened area extending from the cervix laterally to the pelvic side wall, containing the uterine vessels and nerves. During gynecologic surgery, the cardinal ligament is a critical structure where vessels must be ligated and where nerve injury can cause chronic pelvic pain.",
      difficulty: "HARD",
      bloomsLevel: "ProblemSolving",
      examTags: ["NEXT_STEP1", "NEET_PG", "AIIMS"],
      textbookRefs: [
        { book: "BD Chaurasia's Human Anatomy", chapter: "Pelvic Fascia", edition: "8th" },
        { book: "Vishram Singh Clinical Anatomy", chapter: "Cardinal Ligament", edition: "3rd" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-05-TOP-01",
      stem: "The sacroiliac joint is a strong synovial articulation connecting the sacrum to the ilium. Which ligaments primarily stabilize this joint, and are they involved in pain syndromes?",
      clinicalVignette: "Sacroiliac joint stability and dysfunction",
      options: [
        {
          id: "a",
          text: "Anterior and posterior sacroiliac ligaments; strong posterior ligaments create a strong joint",
          isCorrect: true,
          explanation: "The sacroiliac joint has strong anterior and posterior ligaments that stabilize the articulation. The posterior ligaments are particularly robust, making the SI joint inherently stable with minimal movement. SI joint pain can result from ligament strain, subluxation, or dysfunction. SI joint dysfunction (SIJD) is common in pregnancy when hormones relax ligaments, and in runners with gluteal muscle weakness."
        },
        {
          id: "b",
          text: "Mostly cartilaginous with minimal ligament support",
          isCorrect: false,
          explanation: "The joint has strong ligamentous support."
        },
        {
          id: "c",
          text: "Stabilized only by iliolumbar ligament",
          isCorrect: false,
          explanation: "Multiple ligaments provide stability; iliolumbar is lumbar, not SI."
        },
        {
          id: "d",
          text: "No ligaments; stability dependent on muscle forces",
          isCorrect: false,
          explanation: "Multiple strong ligaments provide primary stability."
        }
      ],
      explanation: "The sacroiliac joint (true synovial joint) is heavily ligament-dependent with anterior and posterior (particularly strong) sacroiliac ligaments. Additional support comes from the sacrotuberous and sacrospinous ligaments. The joint has minimal movement (multiaxial, small degrees). SI pain can be mechanical (ligament strain, subluxation) or inflammatory. Pregnancy, gluteal weakness, and leg length discrepancy are common causes.",
      difficulty: "MEDIUM",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [
        { book: "BD Chaurasia's Human Anatomy", chapter: "Sacroiliac Joint", edition: "8th" },
        { book: "Gray's Anatomy", chapter: "Sacroiliac Articulation", edition: "42nd" }
      ]
    },
    // AN-MOD-06-TOP-01: Scalp, Temple & Face
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-06-TOP-01",
      stem: "A patient with a scalp laceration has active bleeding. The scalp has five layers (SCALP mnemonic). Which layer is responsible for controlling bleeding in scalp wounds?",
      clinicalVignette: "Scalp laceration hemostasis mechanism",
      options: [
        {
          id: "a",
          text: "Aponeurosiş (galea aponeurotica) - holds blood vessels open in grooves",
          isCorrect: true,
          explanation: "The scalp layers: Skin, Connective tissue, Aponeurosis (galea), Loose tissue, Periosteum. The aponeurosis/galea holds blood vessels in fibrous grooves, maintaining them open and preventing vessel retraction. This is why scalp wounds bleed profusely—the vessels cannot contract. The connective tissue layer also has rich vascularization. Scalp hemostasis is achieved through pressure/sutures, not natural retraction."
        },
        {
          id: "b",
          text: "Loose tissue layer prevents vessel mobility",
          isCorrect: false,
          explanation: "Loose tissue allows vessel and aponeurosis movement."
        },
        {
          id: "c",
          text: "Skin layer has contractile capability",
          isCorrect: false,
          explanation: "Skin doesn't control vessel bleeding."
        },
        {
          id: "d",
          text: "Periosteum forms vascular limiting membrane",
          isCorrect: false,
          explanation: "Periosteum is the deepest layer."
        }
      ],
      explanation: "The scalp is highly vascular with five layers (SCALP). The aponeurosis (galea aponeurotica) holds blood vessels in grooves, preventing natural vessel retraction. This anatomical feature causes scalp wounds to bleed profusely—they require suturing or pressure for hemostasis. The loose tissue layer beneath allows shifting, explaining why scalp infections can spread extensively.",
      difficulty: "MEDIUM",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [
        { book: "BD Chaurasia's Human Anatomy", chapter: "Scalp Anatomy", edition: "8th" },
        { book: "Gray's Anatomy", chapter: "Scalp", edition: "42nd" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-06-TOP-01",
      stem: "The supratrochlear and supraorbital nerves are branches of which nerve, and what is their clinical significance in forehead procedures?",
      clinicalVignette: "Forehead nerve blocks and sensation",
      options: [
        {
          id: "a",
          text: "Ophthalmic division of trigeminal nerve (CN V1)",
          isCorrect: true,
          explanation: "Both supratrochlear and supraorbital nerves are branches of the ophthalmic division (V1) of the trigeminal nerve. They provide sensory innervation to the forehead, scalp, and upper eyelid. These nerves exit above the medial brow (supratrochlear) and above the middle of the brow (supraorbital) respectively. Supraorbital nerve blocks are commonly used for forehead procedures and can be targeted at the supraorbital notch."
        },
        {
          id: "b",
          text: "Maxillary division of trigeminal nerve (CN V2)",
          isCorrect: false,
          explanation: "V2 supplies lower face."
        },
        {
          id: "c",
          text: "Mandibular division of trigeminal nerve (CN V3)",
          isCorrect: false,
          explanation: "V3 supplies lower jaw and face."
        },
        {
          id: "d",
          text: "Facial nerve (CN VII) branches",
          isCorrect: false,
          explanation: "CN VII is motor to face; V1 is sensory."
        }
      ],
      explanation: "The supraorbital and supratrochlear nerves are sensory branches of V1 innervating the forehead and anterior scalp. They exit the orbit through the supraorbital foramen and notch respectively. Supraorbital nerve blocks are commonly performed for forehead procedures by infiltrating at the foramen/notch, providing reliable sensory anesthesia to the upper forehead and medial scalp.",
      difficulty: "EASY",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [
        { book: "BD Chaurasia's Human Anatomy", chapter: "Trigeminal Nerve Distribution", edition: "8th" },
        { book: "Vishram Singh Clinical Anatomy", chapter: "Ophthalmic Division CN V1", edition: "3rd" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-06-TOP-01",
      stem: "The facial artery crosses over the inferior border of the mandible at a specific point where it can be palpated. This crossing point is clinically significant for controlling hemorrhage. What is this anatomical landmark called?",
      clinicalVignette: "Facial artery and hemorrhage control",
      options: [
        {
          id: "a",
          text: "Angle of mandible where facial artery becomes superficial",
          isCorrect: true,
          explanation: "The facial artery arises from the external carotid, travels medially then anteriorly, and crosses the inferior border of the mandible at the anterior aspect of the masseter muscle. This crossing point is where the artery becomes superficial and is clinically accessible for palpating the pulse or applying pressure for hemorrhage control. The artery then runs along the face toward the medial canthus."
        },
        {
          id: "b",
          text: "Mental foramen where nerve and vessels exit",
          isCorrect: false,
          explanation: "Mental foramen is inferior/lateral to mandible; facial artery crosses at the border."
        },
        {
          id: "c",
          text: "Gonial angle as it reflects upward toward zygoma",
          isCorrect: false,
          explanation: "The artery crosses anterior to angle of mandible."
        },
        {
          id: "d",
          text: "Ramus of mandible posterior aspect",
          isCorrect: false,
          explanation: "The crossing is more anterior."
        }
      ],
      explanation: "The facial artery crosses the inferior border of the mandible at the junction of the ramus and body (anterior masseter region). This is where the artery becomes superficial and the facial pulse can be palpated against the mandible. This anatomical point is useful for hemorrhage control in facial trauma and a landmark for facial artery reconstruction.",
      difficulty: "MEDIUM",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [
        { book: "BD Chaurasia's Human Anatomy", chapter: "Facial Artery Course", edition: "8th" },
        { book: "Vishram Singh Clinical Anatomy", chapter: "Face Vessels", edition: "3rd" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-06-TOP-01",
      stem: "The infraorbital nerve emerges from the infraorbital foramen supplying the upper lip and adjacent cheek. Which is the parent nerve, and at what anatomical location can a block be performed?",
      clinicalVignette: "Infraorbital nerve block anatomy",
      options: [
        {
          id: "a",
          text: "Branch of maxillary nerve (V2); block at infraorbital foramen",
          isCorrect: true,
          explanation: "The infraorbital nerve is a terminal branch of the maxillary division of trigeminal nerve (V2). It exits the infraorbital foramen located on the maxilla below the orbit and roughly in line with the pupil when looking straight ahead. Infraorbital nerve blocks are performed at the foramen by inserting a needle above the upper lip and advancing to the foramen, providing anesthesia to the upper lip, cheek, and upper teeth."
        },
        {
          id: "b",
          text: "Branch of ophthalmic nerve (V1); block at supraorbital notch",
          isCorrect: false,
          explanation: "Infraorbital is from V2, not V1."
        },
        {
          id: "c",
          text: "Branch of mandibular nerve (V3); block at mental foramen",
          isCorrect: false,
          explanation: "Mental nerve from V3 is different; infraorbital is V2."
        },
        {
          id: "d",
          text: "Facial nerve branch; block via parotid approach",
          isCorrect: false,
          explanation: "Infraorbital nerve is trigeminal (CN V), not facial."
        }
      ],
      explanation: "The infraorbital nerve is the terminal branch of the maxillary division (V2) exiting the infraorbital foramen. It innervates the upper lip, cheek, and upper anterior teeth. Infraorbital nerve block is a simple and effective technique for anesthetizing this region, useful for dental and minor facial procedures. The foramen is found approximately 1 cm below the orbital rim on the maxilla.",
      difficulty: "MEDIUM",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [
        { book: "BD Chaurasia's Human Anatomy", chapter: "Maxillary Nerve Branches", edition: "8th" },
        { book: "Vishram Singh Clinical Anatomy", chapter: "CN V2 Distribution", edition: "3rd" }
      ]
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "AN-MOD-06-TOP-01",
      stem: "The face has a dangerous area known as the 'danger zone' for infection. What is the anatomical basis for this zone, and which vein is involved?",
      clinicalVignette: "Facial infection danger zone and septic thrombophlebitis",
      options: [
        {
          id: "a",
          text: "Triangle with apex at nasion and base across brows; involves ophthalmic vein which connects to cavernous sinus",
          isCorrect: true,
          explanation: "The 'danger triangle' of the face is bounded by the medial canthus of eye (apex) and the angles of the mouth (base). This area drains via ophthalmic veins directly to the cavernous sinus via valveless veins. Infections here (especially central face pimples, scratches) can spread rapidly to cavernous sinus, causing thrombophlebitis with potentially fatal consequences. This is why infections in this region require careful handling and often antibiotic therapy."
        },
        {
          id: "b",
          text: "Lower face triangle involving facial vein only",
          isCorrect: false,
          explanation: "The danger zone is central face with ophthalmic vein involvement."
        },
        {
          id: "c",
          text: "Whole face due to extensive capillary network",
          isCorrect: false,
          explanation: "The danger zone is specifically the central triangular area."
        },
        {
          id: "d",
          text: "Angle of mandible involving retrograde flow",
          isCorrect: false,
          explanation: "The danger zone is the central face."
        }
      ],
      explanation: "The danger triangle of the face is a central region (from nasion apex to mouth angles) whose venous drainage is via ophthalmic veins directly to the cavernous sinus through valveless veins. Any infection in this region risks cavernous sinus thrombophlebitis, a life-threatening condition. This is why squeezing central facial pimples is discouraged and infections require careful management.",
      difficulty: "HARD",
      bloomsLevel: "Analysis",
      examTags: ["NEXT_STEP1", "NEET_PG", "AIIMS"],
      textbookRefs: [
        { book: "Vishram Singh Clinical Anatomy", chapter: "Facial Veins and Danger Triangle", edition: "3rd" },
        { book: "BD Chaurasia's Human Anatomy", chapter: "Facial Veins", edition: "8th" }
      ]
    }
  ]
};
