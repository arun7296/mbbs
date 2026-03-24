import type { McqData, SubjectMcqs } from "./content-loader";

export const surgeryGapMcqs: SubjectMcqs = {
  subjectCode: "SU",
  mcqs: [
    // SU-MOD-01-TOP-03: Preoperative & Postoperative Care (5 MCQs)
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-01-TOP-03",
      stem: "A 65-year-old patient with uncontrolled hypertension (BP 180/110) is scheduled for elective cholecystectomy. What is the most appropriate preoperative management?",
      clinicalVignette: "Patient has been hypertensive for 5 years, currently on no medications. HR 92, other organs normal.",
      options: [
        {
          id: "a",
          text: "Proceed with surgery under general anesthesia",
          isCorrect: false,
          explanation: "Uncontrolled hypertension increases risk of perioperative MI and stroke. Surgery should be postponed."
        },
        {
          id: "b",
          text: "Postpone surgery and optimize blood pressure control preoperatively",
          isCorrect: true,
          explanation: "SRB Surgery emphasizes preoperative optimization. BP >180/110 requires control before elective surgery to reduce cardiovascular complications."
        },
        {
          id: "c",
          text: "Administer IV labetalol 5 min before induction",
          isCorrect: false,
          explanation: "Acute preoperative control is inadequate; chronic optimization is needed for elective surgery."
        },
        {
          id: "d",
          text: "Use spinal anesthesia to avoid general anesthetic complications",
          isCorrect: false,
          explanation: "Anesthetic choice doesn't address underlying hypertension risk."
        }
      ],
      explanation: "Preoperative optimization is critical. Uncontrolled hypertension (>180/110) should be managed before elective surgery. Target BP <140/90 for safe elective procedures.",
      difficulty: "MEDIUM",
      bloomsLevel: "ProblemSolving",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [{ book: "SRB's Manual of Surgery", chapter: "Preoperative Assessment", edition: "4th" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-01-TOP-03",
      stem: "Which of the following is NOT part of the immediate postoperative assessment (first 30 minutes)?",
      options: [
        {
          id: "a",
          text: "Check vital signs, oxygen saturation, and urine output",
          isCorrect: false,
          explanation: "These are essential immediate assessments in recovery."
        },
        {
          id: "b",
          text: "Measure serum albumin and prothrombin time",
          isCorrect: true,
          explanation: "Lab values like albumin and PT are not part of immediate assessment; they're checked later if complications suspected."
        },
        {
          id: "c",
          text: "Assess surgical dressing for bleeding and drain output",
          isCorrect: false,
          explanation: "Drain assessment is critical in immediate postoperative period."
        },
        {
          id: "d",
          text: "Evaluate for signs of hypothermia",
          isCorrect: false,
          explanation: "Temperature assessment is immediate priority."
        }
      ],
      explanation: "Immediate postoperative assessment focuses on vital stability, oxygenation, perfusion, and surgical site. Lab work is checked selectively, not routinely in first 30 min.",
      difficulty: "EASY",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1"],
      textbookRefs: [{ book: "Bailey & Love's Short Practice of Surgery", chapter: "Postoperative Care", edition: "27th" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-01-TOP-03",
      stem: "A 58-year-old undergoes open hemicolectomy for colonic malignancy. On POD-3, he develops tachycardia (HR 110), fever (38.5°C), and localized RLQ tenderness. What is the most likely diagnosis?",
      options: [
        {
          id: "a",
          text: "Anastomotic leak",
          isCorrect: true,
          explanation: "Anastomotic leak typically presents POD 3-5 with fever, tachycardia, and localized tenderness. Early signs before peritonitis."
        },
        {
          id: "b",
          text: "Wound infection",
          isCorrect: false,
          explanation: "Wound infection usually presents with superficial signs (erythema, purulent discharge) around day 5-7."
        },
        {
          id: "c",
          text: "Paralytic ileus",
          isCorrect: false,
          explanation: "Ileus presents without fever or localized tenderness."
        },
        {
          id: "d",
          text: "Atelectasis",
          isCorrect: false,
          explanation: "Atelectasis presents with respiratory symptoms, not abdominal tenderness."
        }
      ],
      explanation: "Anastomotic leak is a surgical emergency presenting POD 3-5 with fever, tachycardia, and localized abdominal tenderness. Requires urgent CT imaging and likely reoperation.",
      difficulty: "MEDIUM",
      bloomsLevel: "Analysis",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [{ book: "Sabiston Textbook of Surgery", chapter: "Postoperative Complications", edition: "21st" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-01-TOP-03",
      stem: "Regarding informed consent in surgery, which statement is INCORRECT?",
      options: [
        {
          id: "a",
          text: "Consent must be obtained before premedication",
          isCorrect: false,
          explanation: "Correct — patient must be mentally capable; premedication may cloud judgment."
        },
        {
          id: "b",
          text: "Patient must understand risks and benefits of procedure and alternatives",
          isCorrect: false,
          explanation: "This is core requirement for valid consent."
        },
        {
          id: "c",
          text: "Consent can be obtained from next of kin without patient's knowledge if patient is competent",
          isCorrect: true,
          explanation: "INCORRECT. If patient is competent, consent MUST be from patient directly, not surrogate."
        },
        {
          id: "d",
          text: "Informed consent should document major complications (>1%) specific to the procedure",
          isCorrect: false,
          explanation: "Correct — major and common complications must be discussed."
        }
      ],
      explanation: "Valid informed consent requires autonomous decision by competent patient. Even if family consents, competent patient's consent is legally and ethically mandated.",
      difficulty: "EASY",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1", "Ethics"],
      textbookRefs: [{ book: "SRB's Manual of Surgery", chapter: "Surgical Ethics", edition: "4th" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-01-TOP-03",
      stem: "A 42-year-old diabetic patient (HbA1c 9.2%) requires emergency appendectomy. What is the primary goal for perioperative glucose management?",
      options: [
        {
          id: "a",
          text: "Maintain glucose 80-100 mg/dL to minimize hyperglycemia-related morbidity",
          isCorrect: false,
          explanation: "Tight control increases hypoglycemia risk in perioperative period."
        },
        {
          id: "b",
          text: "Maintain glucose 140-180 mg/dL using insulin infusion during and after surgery",
          isCorrect: true,
          explanation: "Perioperative target is 140-180 mg/dL to avoid hypoglycemia while preventing hyperglycemia complications."
        },
        {
          id: "c",
          text: "Continue home insulin dose unchanged",
          isCorrect: false,
          explanation: "Home doses need adjustment for surgery, fasting, and stress hyperglycemia."
        },
        {
          id: "d",
          text: "Use subcutaneous insulin sliding scale every 2 hours",
          isCorrect: false,
          explanation: "IV insulin infusion is preferred for perioperative period for better control."
        }
      ],
      explanation: "Perioperative glycemic target 140-180 mg/dL balances infection risk (from hyperglycemia) against hypoglycemia risk. IV insulin infusion recommended for intraoperative management.",
      difficulty: "MEDIUM",
      bloomsLevel: "ProblemSolving",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [{ book: "Bailey & Love's Short Practice of Surgery", chapter: "Preoperative Preparation", edition: "27th" }],
    },

    // SU-MOD-01-TOP-04: Blood Transfusion & Hemostasis (5 MCQs)
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-01-TOP-04",
      stem: "A 35-year-old male undergoes open nephrectomy for renal tuberculosis with significant blood loss (900 mL). His Hb drops from 13.5 to 8.2 g/dL. Vital signs stable. What is the most appropriate transfusion strategy?",
      options: [
        {
          id: "a",
          text: "Transfuse 2 units PRBC immediately to raise Hb to >10 g/dL",
          isCorrect: false,
          explanation: "Patient is hemodynamically stable; transfusion not strictly indicated at Hb 8.2 if stable."
        },
        {
          id: "b",
          text: "Observe without transfusion; transfusion not indicated in stable patient with Hb >7 g/dL",
          isCorrect: true,
          explanation: "Restrictive transfusion strategy (transfuse if Hb <7 in stable patients) reduces complications. Patient is stable post-op."
        },
        {
          id: "c",
          text: "Transfuse 1 unit PRBC and reassess",
          isCorrect: false,
          explanation: "Restrictive approach is current standard; stable patient doesn't require transfusion at Hb 8.2."
        },
        {
          id: "d",
          text: "Transfuse with FFP and platelets to restore hemostasis",
          isCorrect: false,
          explanation: "FFP/platelets not indicated without coagulopathy; anemia managed with PRBC if needed."
        }
      ],
      explanation: "Modern restrictive transfusion strategy: transfuse PRBC if Hb <7 g/dL in stable patients, <8 in those with cardiac disease or ongoing bleeding. Reduces transfusion risks.",
      difficulty: "MEDIUM",
      bloomsLevel: "ProblemSolving",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [{ book: "SRB's Manual of Surgery", chapter: "Blood Transfusion", edition: "4th" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-01-TOP-04",
      stem: "Which of the following blood products does NOT require thawing before use?",
      options: [
        {
          id: "a",
          text: "Fresh Frozen Plasma (FFP)",
          isCorrect: false,
          explanation: "FFP stored frozen; must be thawed at 37°C before transfusion."
        },
        {
          id: "b",
          text: "Cryoprecipitate",
          isCorrect: false,
          explanation: "Cryo stored frozen; must be thawed before administration."
        },
        {
          id: "c",
          text: "Packed Red Blood Cells (PRBC)",
          isCorrect: true,
          explanation: "PRBC stored refrigerated (4°C) in additive solution; no thawing required."
        },
        {
          id: "d",
          text: "Platelet Concentrate",
          isCorrect: false,
          explanation: "Platelets stored at room temperature (20-24°C) but do not require thawing."
        }
      ],
      explanation: "PRBC and platelets stored in liquid form; PRBC at 4°C, platelets at 20-24°C. FFP and cryo stored frozen and require thawing.",
      difficulty: "EASY",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1"],
      textbookRefs: [{ book: "Bailey & Love's Short Practice of Surgery", chapter: "Blood and Blood Products", edition: "27th" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-01-TOP-04",
      stem: "A 48-year-old with cirrhosis and variceal bleeding presents with PT 18 sec (INR 1.8), PTT 45 sec, fibrinogen 120 mg/dL, platelets 60,000/μL. After endoscopic sclerotherapy, he needs surgery for refractory bleeding. Which product should be prioritized?",
      options: [
        {
          id: "a",
          text: "Fresh Frozen Plasma (FFP) 6 units",
          isCorrect: false,
          explanation: "FFP contains all factors but large volume needed; not ideal for fibrinogen deficiency."
        },
        {
          id: "b",
          text: "Cryoprecipitate 10 units (raises fibrinogen ~50 mg/dL per unit)",
          isCorrect: true,
          explanation: "Cryo is concentrated fibrinogen source. With fibrinogen 120 (critical), cryo is first priority before FFP."
        },
        {
          id: "c",
          text: "Platelet concentrate 4 units",
          isCorrect: false,
          explanation: "Platelets important but fibrinogen more critical at 120 mg/dL."
        },
        {
          id: "d",
          text: "Prothrombin Complex Concentrate (PCC)",
          isCorrect: false,
          explanation: "PCC for INR correction but fibrinogen deficiency is more immediately critical."
        }
      ],
      explanation: "Coagulopathy in cirrhosis is multifactorial. Fibrinogen <150 mg/dL requires correction first with cryo. Then FFP/PCC for other factors.",
      difficulty: "MEDIUM",
      bloomsLevel: "Analysis",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [{ book: "Sabiston Textbook of Surgery", chapter: "Blood and Blood Products", edition: "21st" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-01-TOP-04",
      stem: "Regarding hemostasis disorders in surgery, which statement is correct?",
      options: [
        {
          id: "a",
          text: "Platelet dysfunction presents with spontaneous mucosal bleeding similar to severe thrombocytopenia",
          isCorrect: false,
          explanation: "Platelet dysfunction typically causes minor bleeding; severe thrombocytopenia (<10k) causes spontaneous bleeding."
        },
        {
          id: "b",
          text: "Von Willebrand disease has defective platelet adhesion due to vWF deficiency",
          isCorrect: true,
          explanation: "vWF is critical for platelet adhesion to subendothelium. vWF deficiency impairs adhesion."
        },
        {
          id: "c",
          text: "Hemophilia A presents with prolonged PT but normal PTT",
          isCorrect: false,
          explanation: "Hemophilia A (Factor VIII deficiency) prolongs PTT, not PT."
        },
        {
          id: "d",
          text: "Aspirin should be stopped 3 days before elective surgery",
          isCorrect: false,
          explanation: "Aspirin irreversibly inhibits platelets; should be stopped 5-7 days before surgery."
        }
      ],
      explanation: "Von Willebrand factor mediates platelet adhesion to exposed collagen. vWF deficiency → impaired adhesion → bleeding tendency.",
      difficulty: "MEDIUM",
      bloomsLevel: "ProblemSolving",
      examTags: ["NEXT_STEP1"],
      textbookRefs: [{ book: "SRB's Manual of Surgery", chapter: "Hemostasis and Blood Transfusion", edition: "4th" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-01-TOP-04",
      stem: "A 62-year-old on warfarin for AF requires urgent appendectomy. INR 7.2. What is the most appropriate management for coagulopathy reversal?",
      options: [
        {
          id: "a",
          text: "Give FFP 2-4 units immediately",
          isCorrect: false,
          explanation: "FFP is slow, large volume needed; not ideal for urgent reversal."
        },
        {
          id: "b",
          text: "Give Vitamin K 10 mg IV slowly (take effect in 12-24h)",
          isCorrect: false,
          explanation: "Vitamin K alone too slow for urgent surgery; needs rapid reversal agent."
        },
        {
          id: "c",
          text: "Give Prothrombin Complex Concentrate (PCC) 25-50 units/kg + Vitamin K 5-10 mg IV",
          isCorrect: true,
          explanation: "PCC provides rapid reversal (minutes); Vitamin K for sustained effect (hours). Standard for urgent warfarin reversal."
        },
        {
          id: "d",
          text: "Proceed with surgery after giving idarucizumab",
          isCorrect: false,
          explanation: "Idarucizumab reverses dabigatran (DOAC), not warfarin."
        }
      ],
      explanation: "For urgent warfarin reversal: PCC (50 units/kg) + Vitamin K (5-10 mg IV) achieves INR <1.5 within 30 min. Best approach for emergency surgery.",
      difficulty: "MEDIUM",
      bloomsLevel: "ProblemSolving",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [{ book: "Bailey & Love's Short Practice of Surgery", chapter: "Anticoagulation Management", edition: "27th" }],
    },

    // SU-MOD-01-TOP-05: Burns & Wound Management (5 MCQs)
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-01-TOP-05",
      stem: "A 28-year-old sustains 35% TBSA flame burn (20% full-thickness, 15% partial-thickness). Using Parkland formula, what is the 24-hour fluid requirement? (Use 70 kg body weight)",
      options: [
        {
          id: "a",
          text: "2500 mL",
          isCorrect: false,
          explanation: "Grossly underestimated; Parkland requires 4 mL × %TBSA × wt(kg)."
        },
        {
          id: "b",
          text: "4900 mL",
          isCorrect: false,
          explanation: "Underestimated. 4 × 35 × 70 = 9800 mL total."
        },
        {
          id: "c",
          text: "9800 mL in first 24h; half given in first 8h",
          isCorrect: true,
          explanation: "Parkland: 4 mL × %TBSA × wt(kg). Half in first 8h, half in next 16h. 4 × 35 × 70 = 9800 mL."
        },
        {
          id: "d",
          text: "14700 mL (using 4 mL per %TBSA per kg plus 2 mL colloid)",
          isCorrect: false,
          explanation: "Parkland doesn't include colloid; colloid added later (after 24h) if needed."
        }
      ],
      explanation: "Parkland formula: 4 mL × %TBSA × weight(kg). Half in first 8h, half in next 16h. Titrate to urine output (0.5 mL/kg/h for adults, 1 mL/kg/h for children).",
      difficulty: "MEDIUM",
      bloomsLevel: "ProblemSolving",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [{ book: "SRB's Manual of Surgery", chapter: "Burns", edition: "4th" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-01-TOP-05",
      stem: "In burn wound management, which intervention is MOST appropriate for 3rd degree burns?",
      options: [
        {
          id: "a",
          text: "Topical antibiotics (silver sulfadiazine) without debridement; await eschar separation",
          isCorrect: false,
          explanation: "Passive waiting leads to infection; active debridement is standard."
        },
        {
          id: "b",
          text: "Early tangential excision and skin grafting (within 5 days)",
          isCorrect: true,
          explanation: "Gold standard for full-thickness burns. Early excision (preferably by POD 3-5) reduces infection, shortens hospital stay, improves outcomes."
        },
        {
          id: "c",
          text: "Enzymatic debridement with collagenase ointment",
          isCorrect: false,
          explanation: "Enzymatic debridement more suitable for partial-thickness; full-thickness needs surgical excision."
        },
        {
          id: "d",
          text: "Negative pressure wound therapy until spontaneous eschar separation",
          isCorrect: false,
          explanation: "NPWT supportive but doesn't replace surgical excision for full-thickness."
        }
      ],
      explanation: "Early tangential excision of full-thickness burn eschar (within 3-5 days) is gold standard. Reduces sepsis risk, shortens healing, improves function and cosmesis.",
      difficulty: "MEDIUM",
      bloomsLevel: "ProblemSolving",
      examTags: ["NEXT_STEP1"],
      textbookRefs: [{ book: "Sabiston Textbook of Surgery", chapter: "Burns", edition: "21st" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-01-TOP-05",
      stem: "A 45-year-old with 25% TBSA burn (2nd-3rd degree) is POD-10. Wound cultures show Pseudomonas aeruginosa. He has fever (38.9°C), tachycardia, and wound edema. What is the primary concern?",
      options: [
        {
          id: "a",
          text: "Superficial wound infection; treat with topical antibiotics alone",
          isCorrect: false,
          explanation: "Pseudomonas in burn wounds → invasive infection with systemic signs."
        },
        {
          id: "b",
          text: "Burn wound sepsis (invasive infection); requires urgent surgical debridement + systemic antibiotics",
          isCorrect: true,
          explanation: "Pseudomonas in full-thickness burn with fever/tachycardia = invasive burn sepsis. Requires aggressive surgical management and IV antibiotics."
        },
        {
          id: "c",
          text: "Fungal superinfection; switch to topical antifungals",
          isCorrect: false,
          explanation: "Bacterial infection is the acute problem; fungal typically occurs later."
        },
        {
          id: "d",
          text: "Continue topical silver sulfadiazine with monitoring",
          isCorrect: false,
          explanation: "Invasive infection requires aggressive surgical debridement, not just topical therapy."
        }
      ],
      explanation: "Burn sepsis is leading cause of death in burn patients. Pseudomonas + systemic signs = invasive infection requiring urgent debridement and IV antibiotics (quinolones, aminoglycosides).",
      difficulty: "HARD",
      bloomsLevel: "Analysis",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [{ book: "Bailey & Love's Short Practice of Surgery", chapter: "Burns and Scalds", edition: "27th" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-01-TOP-05",
      stem: "Regarding wound healing phases, which statement is CORRECT?",
      options: [
        {
          id: "a",
          text: "Inflammatory phase peaks at 7-10 days with maximum collagen deposition",
          isCorrect: false,
          explanation: "Inflammatory phase is days 0-3; collagen peaks at 5-21 days (proliferative phase)."
        },
        {
          id: "b",
          text: "Proliferative phase (5-21 days) involves angiogenesis, fibroblast activity, and ECM deposition",
          isCorrect: true,
          explanation: "Days 5-21 = proliferative phase: granulation tissue formation, collagen I & III, angiogenesis, fibroblast proliferation."
        },
        {
          id: "c",
          text: "Remodeling phase completes by 6 weeks with maximal tensile strength",
          isCorrect: false,
          explanation: "Remodeling continues for months/years; reaches 80% strength by 3 months."
        },
        {
          id: "d",
          text: "Tensile strength at 5 days equals 40% of final strength",
          isCorrect: false,
          explanation: "At 5 days, wound strength ~5%; reaches 40% by ~3 weeks."
        }
      ],
      explanation: "Normal wound healing: Hemostasis (0 min), Inflammation (0-3d), Proliferation (5-21d), Remodeling (3w-2y). Each phase has distinct cellular events.",
      difficulty: "EASY",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1"],
      textbookRefs: [{ book: "SRB's Manual of Surgery", chapter: "Wound Healing", edition: "4th" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-01-TOP-05",
      stem: "A 52-year-old undergoes open abdominal surgery. On POD-5, the wound has copious serosanguinous drainage with wound edges separating. What is this complication called and what is the immediate management?",
      options: [
        {
          id: "a",
          text: "Wound dehiscence; immediate re-closure under general anesthesia",
          isCorrect: false,
          explanation: "Dehiscence is partial separation; if complete fascial disruption, needs urgent closure, but POD-5 edges can sometimes be managed conservatively first."
        },
        {
          id: "b",
          text: "Burst abdomen (complete wound failure); immediate reoperation for fascial closure",
          isCorrect: true,
          explanation: "POD-5 with complete fascial separation = burst abdomen. Requires urgent surgical closure under anesthesia to prevent evisceration."
        },
        {
          id: "c",
          text: "Seroma formation; manage with compression and observation",
          isCorrect: false,
          explanation: "Seroma is fluid collection without fascial separation."
        },
        {
          id: "d",
          text: "Superficial wound infection; manage with antibiotics and drainage",
          isCorrect: false,
          explanation: "Infection alone doesn't cause fascia separation; this is mechanical failure."
        }
      ],
      explanation: "Burst abdomen (complete wound failure) is surgical emergency. Most common POD 5-9. Risk factors: obesity, malnutrition, infection, increased abdominal pressure. Requires urgent re-closure.",
      difficulty: "MEDIUM",
      bloomsLevel: "ProblemSolving",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [{ book: "Sabiston Textbook of Surgery", chapter: "Postoperative Complications", edition: "21st" }],
    },

    // SU-MOD-02-TOP-02: Head Injury (5 MCQs)
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-02-TOP-02",
      stem: "A 35-year-old sustains blunt head trauma from RTA. GCS 15, no focal deficit. CT head normal. Discharged home with advice. After 6 hours, presents with deteriorating consciousness (GCS 8), ipsilateral blown pupil, and hemiparesis. What is the diagnosis?",
      options: [
        {
          id: "a",
          text: "Subdural hematoma (chronic)",
          isCorrect: false,
          explanation: "Chronic SDH develops over weeks; this acute presentation is acute epidural."
        },
        {
          id: "b",
          text: "Acute epidural hemorrhage",
          isCorrect: true,
          explanation: "Classic presentation: lucid interval, then rapid deterioration. Blown pupil = uncal herniation from mass effect. Requires urgent evacuation."
        },
        {
          id: "c",
          text: "Brainstem hemorrhage",
          isCorrect: false,
          explanation: "Brainstem injury causes bilateral findings; this is unilateral (blown pupil)."
        },
        {
          id: "d",
          text: "Subarachnoid hemorrhage only; no mass effect",
          isCorrect: false,
          explanation: "SAH wouldn't cause unilateral pupil blow and hemiparesis."
        }
      ],
      explanation: "Epidural hemorrhage characteristically presents with lucid interval (initial recovery) then rapid deterioration. Caused by middle meningeal artery injury between dura and bone. Requires emergency burr holes + evacuation.",
      difficulty: "HARD",
      bloomsLevel: "Analysis",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [{ book: "Bailey & Love's Short Practice of Surgery", chapter: "Head Injuries", edition: "27th" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-02-TOP-02",
      stem: "A patient with severe TBI (GCS 6) requires intubation. Which airway approach is contraindicated?",
      options: [
        {
          id: "a",
          text: "Rapid sequence intubation (RSI) with cervical spine precautions",
          isCorrect: false,
          explanation: "RSI with C-spine precautions is standard for severe TBI."
        },
        {
          id: "b",
          text: "Use of succinylcholine (depolarizing agent) in acute TBI",
          isCorrect: true,
          explanation: "Succinylcholine causes hyperkalemia and ICP rise; avoided in TBI. Use rocuronium instead."
        },
        {
          id: "c",
          text: "Head-up 30° positioning after intubation",
          isCorrect: false,
          explanation: "30° head elevation reduces ICP and improves cerebral drainage."
        },
        {
          id: "d",
          text: "Avoidance of hypoxia and hypercapnia",
          isCorrect: false,
          explanation: "Avoiding these is critical in TBI management."
        }
      ],
      explanation: "Succinylcholine is contraindicated in TBI due to potassium release and ICP elevation. Use non-depolarizing agents (rocuronium, vecuronium) for RSI.",
      difficulty: "MEDIUM",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1"],
      textbookRefs: [{ book: "SRB's Manual of Surgery", chapter: "Head Injury", edition: "4th" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-02-TOP-02",
      stem: "A 42-year-old with moderate TBI (GCS 11) has headache, vomiting, and restlessness on POD-2. ICP monitoring shows ICP 22 mmHg. After osmotherapy with mannitol, ICP decreased. What is the next step?",
      options: [
        {
          id: "a",
          text: "Repeat mannitol dose every 6 hours",
          isCorrect: false,
          explanation: "Mannitol tolerance develops; should switch agents or explore surgical causes."
        },
        {
          id: "b",
          text: "Switch to hypertonic saline (3%) as second-line osmotherapy",
          isCorrect: true,
          explanation: "After initial mannitol response, if ICP remains elevated, hypertonic saline (3% or 7.5%) can be added. Different osmotic mechanism."
        },
        {
          id: "c",
          text: "Proceed to decompressive craniectomy",
          isCorrect: false,
          explanation: "Too early; medical management should be optimized first."
        },
        {
          id: "d",
          text: "Discharge if patient has improved neurological status",
          isCorrect: false,
          explanation: "ICP 22 remains elevated; continued management needed."
        }
      ],
      explanation: "ICP management in TBI: Head elevation 30°, sedation, analgesia, osmotherapy (mannitol, then hypertonic saline), CSF drainage, hypothermia if refractory, then craniectomy.",
      difficulty: "MEDIUM",
      bloomsLevel: "ProblemSolving",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [{ book: "Sabiston Textbook of Surgery", chapter: "Head Injury", edition: "21st" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-02-TOP-02",
      stem: "Regarding skull fractures in head injury, which statement is INCORRECT?",
      options: [
        {
          id: "a",
          text: "Linear skull fractures without depression require no specific treatment",
          isCorrect: false,
          explanation: "Correct — linear fractures without depression are managed conservatively."
        },
        {
          id: "b",
          text: "Depressed skull fractures with >5mm depression always require elevation",
          isCorrect: true,
          explanation: "INCORRECT. Depressed fractures with <5mm and no deficit can be managed conservatively. >5mm with cosmetic concern or neurological deficit require elevation."
        },
        {
          id: "c",
          text: "Basilar skull fracture (Battle's sign, raccoon eyes) is managed conservatively unless CSF leak persists",
          isCorrect: false,
          explanation: "Correct — basilar fractures managed conservatively unless CSF leak or meningitis develops."
        },
        {
          id: "d",
          text: "Compound (open) skull fractures require surgical exploration and debridement",
          isCorrect: false,
          explanation: "Correct — open fractures need surgical management to prevent infection."
        }
      ],
      explanation: "Skull fracture management: Linear/undepressed = conservative. Depressed <5mm = conservative. Depressed >5mm + cosmetic concern or deficit = elevation. Compound = surgical.",
      difficulty: "MEDIUM",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1"],
      textbookRefs: [{ book: "SRB's Manual of Surgery", chapter: "Skull Fractures", edition: "4th" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-02-TOP-02",
      stem: "A 28-year-old with moderate TBI (GCS 12) on POD-3 develops fever (38.8°C), stiff neck, and petechial rash. LP shows turbid CSF with glucose 25 mg/dL, protein 280 mg/dL, WBC 2500 (90% neutrophils). Most likely pathogen?",
      options: [
        {
          id: "a",
          text: "Staphylococcus aureus (from skin flora)",
          isCorrect: false,
          explanation: "S. aureus is concern in neurosurgical procedures, but not typical community-acquired post-TBI meningitis."
        },
        {
          id: "b",
          text: "Neisseria meningitidis",
          isCorrect: true,
          explanation: "Most common community-acquired bacterial meningitis post-TBI. Classic meningococcemia with petechiae, low glucose (bacterial), high protein."
        },
        {
          id: "c",
          text: "Streptococcus pneumoniae",
          isCorrect: false,
          explanation: "Also possible but less common post-TBI. Meningococcus is most frequent."
        },
        {
          id: "d",
          text: "Pseudomonas aeruginosa (from hospital environment)",
          isCorrect: false,
          explanation: "Pseudomonas is nosocomial concern but not typical acute community-acquired post-TBI meningitis."
        }
      ],
      explanation: "Post-TBI meningitis most commonly caused by Neisseria meningitidis. Requires urgent vancomycin + ceftriaxone + rifampin. Close contacts need prophylaxis.",
      difficulty: "HARD",
      bloomsLevel: "Analysis",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [{ book: "Bailey & Love's Short Practice of Surgery", chapter: "Head Injury Complications", edition: "27th" }],
    },

    // SU-MOD-02-TOP-03: Chest & Abdominal Trauma (5 MCQs)
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-02-TOP-03",
      stem: "A 32-year-old sustains stab wound to left chest wall with hemodynamic instability (BP 90/60, HR 118). Physical exam shows deviated trachea, elevated JVP, and absent breath sounds on left. What is the diagnosis and immediate management?",
      options: [
        {
          id: "a",
          text: "Pneumothorax; perform needle decompression followed by chest tube",
          isCorrect: true,
          explanation: "Tension pneumothorax: deviated trachea, elevated JVP, hypotension, absent breath sounds. Emergency: needle decompression (14G needle 2nd ICS midclavicular), then chest tube."
        },
        {
          id: "b",
          text: "Hemothorax; urgent thoracotomy",
          isCorrect: false,
          explanation: "Hemothorax presents with dullness on percussion, but no tracheal deviation or JVP elevation from hemothorax alone."
        },
        {
          id: "c",
          text: "Cardiac tamponade; emergency pericardiocentesis",
          isCorrect: false,
          explanation: "Tamponade presents with Beck's triad (JVP elevation, muffled heart sounds, hypotension) but physical exam findings point to tension PTX."
        },
        {
          id: "d",
          text: "Flail chest; analgesics and chest wall stabilization",
          isCorrect: false,
          explanation: "Flail chest doesn't cause tracheal deviation or JVP elevation."
        }
      ],
      explanation: "Tension pneumothorax is life-threatening emergency. Classic triad: deviated trachea, hypotension, elevated JVP. Requires immediate needle decompression before imaging.",
      difficulty: "HARD",
      bloomsLevel: "Analysis",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [{ book: "Sabiston Textbook of Surgery", chapter: "Chest Trauma", edition: "21st" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-02-TOP-03",
      stem: "A 45-year-old sustains blunt abdominal trauma (MVA). Focused Assessment with Sonography for Trauma (FAST) shows fluid in pelvic free space. Vitals: BP 100/70, HR 105. Abdomen mildly tender. What is the next step?",
      options: [
        {
          id: "a",
          text: "Immediate laparotomy",
          isCorrect: false,
          explanation: "Patient is hemodynamically stable; observe first."
        },
        {
          id: "b",
          text: "Admit for observation, serial abdominal exams, repeat ultrasound",
          isCorrect: true,
          explanation: "Hemodynamically stable patient with free fluid = observe. Serial exams detect peritoneal signs. Repeat imaging if clinical deterioration."
        },
        {
          id: "c",
          text: "Discharge with strict precautions",
          isCorrect: false,
          explanation: "Free fluid warrants admission for monitoring."
        },
        {
          id: "d",
          text: "CT abdomen/pelvis with IV contrast immediately",
          isCorrect: false,
          explanation: "Stable patient can proceed with observation; CT if unstable or worsening exam."
        }
      ],
      explanation: "FAST-positive hemodynamically stable patient: admit, observe, serial exams. Laparotomy if signs of peritonitis, instability, or imaging shows solid organ injury.",
      difficulty: "MEDIUM",
      bloomsLevel: "ProblemSolving",
      examTags: ["NEXT_STEP1"],
      textbookRefs: [{ book: "SRB's Manual of Surgery", chapter: "Abdominal Trauma", edition: "4th" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-02-TOP-03",
      stem: "A 38-year-old with blunt abdominal trauma (3 hours post-injury) has BP 85/60, HR 140, and distended abdomen with peritoneal signs. FAST positive. What is the expected source of hemorrhage?",
      options: [
        {
          id: "a",
          text: "Small intestine perforation",
          isCorrect: false,
          explanation: "Small bowel perforation causes peritonitis but not massive hemorrhage."
        },
        {
          id: "b",
          text: "Pelvic fracture with retroperitoneal bleeding",
          isCorrect: true,
          explanation: "Pelvic fractures can bleed massively into retroperitoneum. Responsible for 10% of trauma deaths. Early pelvic stabilization critical."
        },
        {
          id: "c",
          text: "Duodenal injury",
          isCorrect: false,
          explanation: "Duodenal injury retroperitoneal but not primary massive hemorrhage source."
        },
        {
          id: "d",
          text: "Bladder rupture",
          isCorrect: false,
          explanation: "Bladder rupture causes urine extravasation, not hemorrhage."
        }
      ],
      explanation: "In blunt trauma with hemorrhagic shock and FAST+, consider: liver (25%), spleen (15%), pelvic fracture (10%), mesenteric vessels. Pelvic fractures require urgent stabilization to tamponade bleeding.",
      difficulty: "MEDIUM",
      bloomsLevel: "Analysis",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [{ book: "Bailey & Love's Short Practice of Surgery", chapter: "Trauma", edition: "27th" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-02-TOP-03",
      stem: "A 50-year-old with gunshot wound to upper abdomen. Peritoneal lavage performed at peripheral hospital: WBC 6000/μL, RBC 50,000/μL, amylase 40 U/L. What does this indicate?",
      options: [
        {
          id: "a",
          text: "Non-penetrating injury; no laparotomy needed",
          isCorrect: false,
          explanation: "This is GSW (penetrating); laparotomy indications depend on exam/imaging, not lavage findings alone."
        },
        {
          id: "b",
          text: "Significant peritoneal contamination; laparotomy indicated",
          isCorrect: true,
          explanation: "Positive DPL: RBC >10,000/μL or WBC >500/μL indicates peritoneal penetration. This patient meets criteria (RBC 50k, WBC 6k). Laparotomy indicated."
        },
        {
          id: "c",
          text: "Pancreatic injury evident from elevated amylase",
          isCorrect: false,
          explanation: "Peritoneal amylase doesn't correlate well with pancreatic injury."
        },
        {
          id: "d",
          text: "Negative DPL; can be managed conservatively",
          isCorrect: false,
          explanation: "High RBC and WBC count = positive DPL."
        }
      ],
      explanation: "Positive DPL in penetrating trauma: RBC >10,000/μL, WBC >500/μL, or amylase elevation indicates peritoneal penetration requiring laparotomy exploration.",
      difficulty: "MEDIUM",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1"],
      textbookRefs: [{ book: "Sabiston Textbook of Surgery", chapter: "Abdominal Trauma", edition: "21st" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-02-TOP-03",
      stem: "A 28-year-old sustains blunt abdominal trauma with splenic injury (Grade III). He is hemodynamically stable after aggressive fluid resuscitation. What is the recommended management?",
      options: [
        {
          id: "a",
          text: "Non-operative management (NOM) with ICU admission, serial exams, and blood availability",
          isCorrect: true,
          explanation: "Stable patient with splenic injury → NOM with ICU/high-dependency unit, serial exams, imaging if deterioration. Splenectomy if unstable or peritoneal signs develop."
        },
        {
          id: "b",
          text: "Immediate splenectomy to prevent future rupture",
          isCorrect: false,
          explanation: "Splenectomy only if NOM fails or patient unstable."
        },
        {
          id: "c",
          text: "Discharge home with close outpatient follow-up",
          isCorrect: false,
          explanation: "Grade III requires admission for monitoring."
        },
        {
          id: "d",
          text: "Splenic artery embolization followed by discharge",
          isCorrect: false,
          explanation: "Embolization useful but requires institutional capability; NOM is first-line."
        }
      ],
      explanation: "Modern trauma: NOM for hemodynamically stable patients with splenic injury (even Grade III-V). Requires ICU-level monitoring, serial exams, imaging, and surgical backup.",
      difficulty: "MEDIUM",
      bloomsLevel: "ProblemSolving",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [{ book: "Bailey & Love's Short Practice of Surgery", chapter: "The Spleen", edition: "27th" }],
    },

    // SU-MOD-02-TOP-04: Burns (5 MCQs - already covered in SU-MOD-01-TOP-05, so creating different angle)
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-02-TOP-04",
      stem: "A 6-year-old child (20 kg) sustains 40% TBSA flame burn (30% FT, 10% PT). Calculate 24-hour fluid requirement using Modified Parkland (consider child-specific urine output targets).",
      options: [
        {
          id: "a",
          text: "3200 mL over 24h",
          isCorrect: false,
          explanation: "Underestimated. 4 × 40 × 20 = 3200 mL, but Parkland PLUS maintenance fluids needed in children."
        },
        {
          id: "b",
          text: "3200 mL Parkland + 1500 mL maintenance = 4700 mL total",
          isCorrect: true,
          explanation: "Children need Parkland PLUS maintenance (not in adults). 4 × 40 × 20 = 3200 mL (half in first 8h). Plus glucose-containing fluids for maintenance."
        },
        {
          id: "c",
          text: "1600 mL (half Parkland dose in children)",
          isCorrect: false,
          explanation: "Children use same Parkland formula, not half-dose."
        },
        {
          id: "d",
          text: "4000 mL targeting urine output 0.5 mL/kg/h",
          isCorrect: false,
          explanation: "Children target 1 mL/kg/h; 0.5 mL/kg/h is for adults."
        }
      ],
      explanation: "Pediatric burns: Parkland formula same as adults (4 mL × %TBSA × wt). BUT target urine output 1 mL/kg/h (not 0.5). AND add glucose-containing maintenance fluids.",
      difficulty: "HARD",
      bloomsLevel: "ProblemSolving",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [{ book: "SRB's Manual of Surgery", chapter: "Burns in Children", edition: "4th" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-02-TOP-04",
      stem: "A 34-year-old with 45% TBSA burn (35% FT) develops inhalation injury (carbonaceous sputum, wheeze). What is the primary concern for airway management?",
      options: [
        {
          id: "a",
          text: "Immediate intubation to prevent aspiration",
          isCorrect: false,
          explanation: "Early intubation good, but timing depends on airway edema risk."
        },
        {
          id: "b",
          text: "Intubate early (within 2-4 hours) due to rapid upper airway edema from inhalation injury",
          isCorrect: true,
          explanation: "Inhalation injury → rapid mucosal edema. Early intubation (before swelling worsens) prevents emergency tracheostomy need."
        },
        {
          id: "c",
          text: "Defer intubation; use supplemental oxygen and observe",
          isCorrect: false,
          explanation: "Inhalation injury requires early intervention."
        },
        {
          id: "d",
          text: "Perform tracheostomy immediately",
          isCorrect: false,
          explanation: "Endotracheal intubation preferred initially; tracheostomy if long-term airway needed."
        }
      ],
      explanation: "Inhalation injury with airway involvement requires early intubation (within 2-4 hours) before edema worsens. Prevents emergency surgical airway.",
      difficulty: "MEDIUM",
      bloomsLevel: "Analysis",
      examTags: ["NEXT_STEP1"],
      textbookRefs: [{ book: "Bailey & Love's Short Practice of Surgery", chapter: "Burns and Inhalation Injury", edition: "27th" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-02-TOP-04",
      stem: "A 40-year-old with 30% TBSA burn is on POD-4. Wound cultures show Acinetobacter baumannii (resistant to most antibiotics). Which antibiotic is most appropriate empirically?",
      options: [
        {
          id: "a",
          text: "Cefotaxime (3rd generation cephalosporin)",
          isCorrect: false,
          explanation: "A. baumannii often resistant; not empiric choice."
        },
        {
          id: "b",
          text: "Colistin (polymyxin E)",
          isCorrect: true,
          explanation: "MDR A. baumannii susceptible to colistin. Colistin (or polymyxin B) is agent of last resort for resistant Acinetobacter."
        },
        {
          id: "c",
          text: "Fluoroquinolones alone",
          isCorrect: false,
          explanation: "Variable susceptibility; not ideal monotherapy."
        },
        {
          id: "d",
          text: "Piperacillin-tazobactam",
          isCorrect: false,
          explanation: "A. baumannii frequently resistant."
        }
      ],
      explanation: "Acinetobacter baumannii (common in burn wards) is multidrug-resistant. Colistin or polymyxin B are agents of last resort. Consider local susceptibility patterns.",
      difficulty: "MEDIUM",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1"],
      textbookRefs: [{ book: "SRB's Manual of Surgery", chapter: "Burn Infection Management", edition: "4th" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-02-TOP-04",
      stem: "Regarding inhalation injury classification, which is CORRECT?",
      options: [
        {
          id: "a",
          text: "Supraglottic injury (above vocal cords) is more common and dangerous than subglottic",
          isCorrect: true,
          explanation: "Supraglottic swelling more likely to cause airway obstruction. Rapid, life-threatening."
        },
        {
          id: "b",
          text: "Carbon monoxide (CO) poisoning causes cherry-red skin appearance in most victims",
          isCorrect: false,
          explanation: "Cherry-red appearance rare; seen <10% of cases. Most look cyanotic."
        },
        {
          id: "c",
          text: "Cyanide poisoning (from burning plastics) is diagnosed clinically and treated empirically",
          isCorrect: true,
          explanation: "Cyanide inhalation suspected in enclosed-space burns. Treat with hydroxocobalamin empirically; don't wait for lab confirmation."
        },
        {
          id: "d",
          text: "Lower airway/lung parenchymal injury (bronchitis, pulmonary edema) presents immediately",
          isCorrect: false,
          explanation: "Lower airway injury can be delayed 24-72 hours (ARDS-like)."
        }
      ],
      explanation: "Inhalation injury: supraglottic edema most immediately dangerous. CO poisoning more common than cyanide. Lower airway injury can be delayed.",
      difficulty: "MEDIUM",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1"],
      textbookRefs: [{ book: "Sabiston Textbook of Surgery", chapter: "Inhalation Injury", edition: "21st" }],
    },

    // SU-MOD-03-TOP-03: Neck Swellings & Lymph Nodes (5 MCQs)
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-03-TOP-03",
      stem: "A 35-year-old presents with painless, hard, immobile left submandibular lymph node (2.5 cm) for 2 months. General exam unremarkable; no oral ulcers or dental issues. What is the next step?",
      options: [
        {
          id: "a",
          text: "Trial of antibiotics for 2 weeks; if persists, refer",
          isCorrect: false,
          explanation: "Persistent (2 months), hard, immobile node → likely malignancy, not infection. Biopsy needed."
        },
        {
          id: "b",
          text: "FNAC (fine needle aspiration cytology)",
          isCorrect: true,
          explanation: "Persistent painless lymphadenopathy → malignancy concern. FNAC/core biopsy indicated. Avoids surgical biopsy if benign."
        },
        {
          id: "c",
          text: "Surgical excision without biopsy",
          isCorrect: false,
          explanation: "Biopsy first to guide treatment (wide excision vs. chemotherapy)."
        },
        {
          id: "d",
          text: "Observation for 6 more months",
          isCorrect: false,
          explanation: "Persistent 2-month-old node warrants investigation, not more observation."
        }
      ],
      explanation: "Persistent painless lymphadenopathy (>1 month, hard, immobile) → malignancy until proven. FNAC/core biopsy essential. Source of primary tumor must be identified.",
      difficulty: "MEDIUM",
      bloomsLevel: "ProblemSolving",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [{ book: "SRB's Manual of Surgery", chapter: "Neck Swellings", edition: "4th" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-03-TOP-03",
      stem: "A 28-year-old with TB presents with painless cervical lymphadenopathy and cold abscess formation. Diagnosis confirmed on biopsy (caseating granuloma). What is the management?",
      options: [
        {
          id: "a",
          text: "Surgical excision of all nodes immediately",
          isCorrect: false,
          explanation: "Antituberculous therapy (ATT) is first-line; surgery reserved for failed medical management."
        },
        {
          id: "b",
          text: "Anti-tuberculous therapy (ATT) for 6 months; surgery if inadequate response",
          isCorrect: true,
          explanation: "TB lymphadenitis: ATT for 6 months. Surgery only if: persistent nodes after ATT, suppurative complications, or diagnostic uncertainty."
        },
        {
          id: "c",
          text: "Aspiration of cold abscess; ATT",
          isCorrect: false,
          explanation: "Aspiration can be done if symptomatic, but not essential; ATT is main treatment."
        },
        {
          id: "d",
          text: "Only ATT; no aspiration or surgical intervention ever",
          isCorrect: false,
          explanation: "Surgery appropriate if medical failure or complications."
        }
      ],
      explanation: "TB lymphadenitis: ATT first-line. Surgical intervention only if: disease resistant to 6-12 months ATT, fistula formation, or diagnostic confusion.",
      difficulty: "MEDIUM",
      bloomsLevel: "ProblemSolving",
      examTags: ["NEXT_STEP1"],
      textbookRefs: [{ book: "Bailey & Love's Short Practice of Surgery", chapter: "Lymph Nodes and Cysts", edition: "27th" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-03-TOP-03",
      stem: "A 6-year-old presents with midline neck swelling that moves upward with tongue protrusion and swallowing. Imaging confirms a cystic lesion beneath mylohyoid. Diagnosis?",
      options: [
        {
          id: "a",
          text: "Branchial cyst (lateral neck)",
          isCorrect: false,
          explanation: "Branchial cysts are lateral neck; this is midline with pathognomonic movement."
        },
        {
          id: "b",
          text: "Thyroglossal duct cyst",
          isCorrect: true,
          explanation: "Classic: midline swelling, moves with tongue protrusion and swallowing, beneath mylohyoid. Most common neck cyst in children."
        },
        {
          id: "c",
          text: "Cystic hygroma",
          isCorrect: false,
          explanation: "Cystic hygromas are compressible, variable location, not fixed movement with tongue."
        },
        {
          id: "d",
          text: "Dermoid cyst",
          isCorrect: false,
          explanation: "Dermoid cysts are midline but don't move with tongue."
        }
      ],
      explanation: "Thyroglossal duct cyst: most common neck cyst, midline, moves with tongue/swallowing. Treatment: Sistrunk procedure (cyst + duct + foramen cecum).",
      difficulty: "EASY",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1"],
      textbookRefs: [{ book: "SRB's Manual of Surgery", chapter: "Thyroid and Thyroglossal Duct Cyst", edition: "4th" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-03-TOP-03",
      stem: "A 32-year-old with painless hard posterior triangle lymph nodes (multiple, 1-3 cm), mild splenomegaly, and constitutional symptoms (fever, night sweats). Biopsy shows Reed-Sternberg cells. What is the treatment approach?",
      options: [
        {
          id: "a",
          text: "Surgical excision of all involved nodes",
          isCorrect: false,
          explanation: "Hodgkin lymphoma is chemotherapy-responsive; surgery not first-line."
        },
        {
          id: "b",
          text: "Staging (PET-CT, bone marrow) followed by chemotherapy ± radiotherapy",
          isCorrect: true,
          explanation: "Hodgkin lymphoma: biopsy → staging PET-CT and bone marrow → treatment with ABVD ± radiotherapy based on stage."
        },
        {
          id: "c",
          text: "Radiotherapy to nodal regions only",
          isCorrect: false,
          explanation: "Chemotherapy essential for systemic disease; radiotherapy may complement."
        },
        {
          id: "d",
          text: "Splenectomy if splenomegaly persists",
          isCorrect: false,
          explanation: "Splenectomy not part of lymphoma management."
        }
      ],
      explanation: "Hodgkin lymphoma diagnosis on biopsy (RS cells) → comprehensive staging (PET-CT, bone marrow, LDH, CBC) → ABVD chemotherapy ± involved field radiotherapy based on stage.",
      difficulty: "MEDIUM",
      bloomsLevel: "Analysis",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [{ book: "Bailey & Love's Short Practice of Surgery", chapter: "Lymphomas", edition: "27th" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-03-TOP-03",
      stem: "Regarding lymph node assessment, which is CORRECT?",
      options: [
        {
          id: "a",
          text: "Rubbery, mobile lymph nodes suggest benign reactive changes",
          isCorrect: true,
          explanation: "Benign reactive nodes: mobile, rubbery, <2 cm usually. Malignant: hard, fixed, >2 cm, matted."
        },
        {
          id: "b",
          text: "All lymph nodes >1 cm require biopsy",
          isCorrect: false,
          explanation: "Context matters. Reactive nodes <2 cm, mobile, with clear infection source may be observed."
        },
        {
          id: "c",
          text: "Supraclavicular node enlargement is commonly reactive",
          isCorrect: false,
          explanation: "Supraclavicular adenopathy always concerning; high risk for malignancy (lung, gastric cancer)."
        },
        {
          id: "d",
          text: "Matted lymph nodes (grouped together) indicate TB",
          isCorrect: false,
          explanation: "Matted nodes suggest TB but also lymphoma, metastatic disease."
        }
      ],
      explanation: "Benign nodes: <2 cm, mobile, rubbery, clear infection source. Malignant: >2 cm, hard, fixed, rubbery/matted. Supraclavicular always warrants biopsy.",
      difficulty: "EASY",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1"],
      textbookRefs: [{ book: "SRB's Manual of Surgery", chapter: "Lymph Nodes", edition: "4th" }],
    },

    // SU-MOD-03-TOP-04: Cleft Lip & Palate (5 MCQs)
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-03-TOP-04",
      stem: "A newborn with complete bilateral cleft lip and palate. When should primary cleft lip repair be performed?",
      options: [
        {
          id: "a",
          text: "Immediately (within 24 hours of birth)",
          isCorrect: false,
          explanation: "Can be performed early but follows the 'rule of 10s' for timing."
        },
        {
          id: "b",
          text: "At 10 weeks of age, 10 pounds (4.5 kg) weight, Hb 10 g/dL (rule of 10s)",
          isCorrect: true,
          explanation: "Traditional timing: 10 weeks, 10 lbs, Hb 10 g/dL. Modern approaches may repair earlier (3-6 months) based on surgeon preference."
        },
        {
          id: "c",
          text: "At 6 months of age",
          isCorrect: false,
          explanation: "Too delayed for lip repair; palate repair at 18-24 months."
        },
        {
          id: "d",
          text: "At 12 months of age when language development starts",
          isCorrect: false,
          explanation: "Cleft palate repair by 18-24 months ideally, before major speech development."
        }
      ],
      explanation: "Cleft lip repair: 3-6 months (modern) or rule of 10s (traditional). Cleft palate: before 18-24 months (speech development). Bilateral complex may require staged repair.",
      difficulty: "EASY",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1"],
      textbookRefs: [{ book: "SRB's Manual of Surgery", chapter: "Cleft Lip and Palate", edition: "4th" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-03-TOP-04",
      stem: "A 3-month-old with unilateral complete cleft lip and palate presents for preoperative assessment. What is the PRIMARY objective of initial lip repair?",
      options: [
        {
          id: "a",
          text: "Restore oral competence and feeding ability",
          isCorrect: false,
          explanation: "Important but not primary surgical objective."
        },
        {
          id: "b",
          text: "Reorient the orbicularis oris muscle and restore anatomical continuity",
          isCorrect: true,
          explanation: "Primary goal: realign muscle and restore lip anatomy for normal function and cosmesis."
        },
        {
          id: "c",
          text: "Bone grafting of alveolar cleft",
          isCorrect: false,
          explanation: "Alveolar bone graft done at 7-12 years (after eruption of canine)."
        },
        {
          id: "d",
          text: "Speech rehabilitation alone",
          isCorrect: false,
          explanation: "Speech outcome depends on palate repair and therapy, not just lip repair."
        }
      ],
      explanation: "Cleft lip repair: restore orbicularis oris continuity, align structures, improve cosmesis and function. Palate repair: prevent VPI (velopharyngeal insufficiency), improve speech.",
      difficulty: "MEDIUM",
      bloomsLevel: "ProblemSolving",
      examTags: ["NEXT_STEP1"],
      textbookRefs: [{ book: "Bailey & Love's Short Practice of Surgery", chapter: "Cleft Lip and Palate", edition: "27th" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-03-TOP-04",
      stem: "A 2-year-old with cleft palate is referred for palatal repair. He has mild obstructive sleep apnea (OSA). What is the surgical consideration?",
      options: [
        {
          id: "a",
          text: "Proceed with palatoplasty immediately to relieve OSA",
          isCorrect: false,
          explanation: "Palate repair may worsen OSA initially from pharyngeal narrowing; needs optimization first."
        },
        {
          id: "b",
          text: "Delay palatoplasty; optimize OSA first with adenotonsillectomy or other airway intervention",
          isCorrect: true,
          explanation: "Cleft palate repair can reduce pharyngeal space initially. OSA needs optimization before surgery. Consider adenotonsillectomy if indicated."
        },
        {
          id: "c",
          text: "Perform palatoplasty and pharyngeal flap simultaneously",
          isCorrect: false,
          explanation: "Pharyngeal flap is for VPI after palate closure, not for OSA."
        },
        {
          id: "d",
          text: "Continue topical nasal decongestants indefinitely",
          isCorrect: false,
          explanation: "Not treatment for cleft palate-related OSA."
        }
      ],
      explanation: "Cleft palate + OSA: optimize airway before surgery. Palatoplasty may initially reduce pharyngeal space. Adenotonsillectomy if hypertrophic obstruction.",
      difficulty: "HARD",
      bloomsLevel: "Analysis",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [{ book: "SRB's Manual of Surgery", chapter: "Cleft Palate Management", edition: "4th" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-03-TOP-04",
      stem: "A 6-year-old with repaired cleft palate develops velopharyngeal insufficiency (VPI) with nasal escape during speech. What is the surgical treatment?",
      options: [
        {
          id: "a",
          text: "Repeat palatoplasty (re-repair)",
          isCorrect: false,
          explanation: "May be needed if inadequate initial closure, but palatal flap more direct for post-repair VPI."
        },
        {
          id: "b",
          text: "Pharyngeal flap procedure to narrow nasopharynx",
          isCorrect: true,
          explanation: "Pharyngeal flap (based on pharyngeal mucosa) narrows velopharyngeal port, preventing nasal escape. Used for VPI after palate repair."
        },
        {
          id: "c",
          text: "Adenoidectomy if adenoid hypertrophy present",
          isCorrect: false,
          explanation: "Adenoidectomy actually worsens VPI; adenoid tissue helps close velopharyngeal port."
        },
        {
          id: "d",
          text: "Speech therapy alone for 2 years",
          isCorrect: false,
          explanation: "Therapy may help but anatomical defect needs surgery."
        }
      ],
      explanation: "Velopharyngeal insufficiency post-repair: pharyngeal flap procedure. Flap narrows nasopharynx, allows closure during speech. Adenoidectomy contraindicated (worsens VPI).",
      difficulty: "MEDIUM",
      bloomsLevel: "ProblemSolving",
      examTags: ["NEXT_STEP1"],
      textbookRefs: [{ book: "Bailey & Love's Short Practice of Surgery", chapter: "Velopharyngeal Insufficiency", edition: "27th" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-03-TOP-04",
      stem: "Regarding cleft lip/palate complications, which is CORRECT?",
      options: [
        {
          id: "a",
          text: "Feeding problems in cleft palate are primarily due to lip deformity",
          isCorrect: false,
          explanation: "Feeding issues mainly from palatal defect (air escape) and aspiration risk."
        },
        {
          id: "b",
          text: "Orthodontic intervention needed for dental occlusion in cleft patients",
          isCorrect: true,
          explanation: "Cleft patients have malocclusion and dental abnormalities requiring orthodontics (often in phases)."
        },
        {
          id: "c",
          text: "Hearing loss is unrelated to cleft palate",
          isCorrect: false,
          explanation: "Cleft palate leads to tensor veli palatini dysfunction → eustachian tube issues → conductive hearing loss."
        },
        {
          id: "d",
          text: "Alveolar bone graft contraindicated in cleft patients",
          isCorrect: false,
          explanation: "Alveolar bone graft is standard at 7-12 years (after canine eruption) to support alveolus."
        }
      ],
      explanation: "Cleft complications: VPI/speech, hearing loss (conductive), dental/orthodontic issues, feeding problems. Alveolar bone graft essential at 7-12 years.",
      difficulty: "MEDIUM",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1"],
      textbookRefs: [{ book: "SRB's Manual of Surgery", chapter: "Cleft Lip and Palate Management", edition: "4th" }],
    },

    // SU-MOD-04-TOP-03: Breast Carcinoma (5 MCQs)
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-04-TOP-03",
      stem: "A 52-year-old postmenopausal woman presents with 2.5 cm hard breast lump, skin dimpling, and axillary lymphadenopathy. Biopsy: invasive ductal carcinoma (IDC), ER+/PR+, HER2-. What is the next step after staging?",
      options: [
        {
          id: "a",
          text: "Mastectomy alone",
          isCorrect: false,
          explanation: "Hormone receptor+ status warrants endocrine therapy; also consider neoadjuvant therapy."
        },
        {
          id: "b",
          text: "Modified radical mastectomy (MRM) with axillary lymph node dissection (ALND)",
          isCorrect: true,
          explanation: "Locally advanced BC (palpable axillary LN) warrants MRM with ALND. Hormone therapy will follow based on stage."
        },
        {
          id: "c",
          text: "Breast conservation therapy (BCT) with lumpectomy and radiotherapy",
          isCorrect: false,
          explanation: "2.5 cm lump with skin involvement less suitable for BCT; mastectomy preferred."
        },
        {
          id: "d",
          text: "Neoadjuvant chemotherapy without surgery",
          isCorrect: false,
          explanation: "Chemo useful in some cases but surgery still needed; can use chemo before surgery if needed."
        }
      ],
      explanation: "Breast carcinoma management: Stage determines therapy. Hormone receptor+ (ER+/PR+) gets tamoxifen/aromatase inhibitor. Node+ requires ALND. Surgery ± chemo ± radiation ± endocrine therapy.",
      difficulty: "MEDIUM",
      bloomsLevel: "ProblemSolving",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [{ book: "SRB's Manual of Surgery", chapter: "Breast Carcinoma", edition: "4th" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-04-TOP-03",
      stem: "A 48-year-old with invasive ductal carcinoma (1.5 cm, hormone receptor negative, HER2+, no axillary nodes). Which treatment approach is most appropriate?",
      options: [
        {
          id: "a",
          text: "Tamoxifen + radiotherapy",
          isCorrect: false,
          explanation: "Hormone receptor-negative; tamoxifen not effective."
        },
        {
          id: "b",
          text: "HER2-targeted therapy (trastuzumab) + chemotherapy",
          isCorrect: true,
          explanation: "HER2+ breast cancer benefits from anti-HER2 therapy (trastuzumab, pertuzumab). Chemo (AC-T or similar) combined with HER2 targeting improves outcomes."
        },
        {
          id: "c",
          text: "Endocrine therapy alone",
          isCorrect: false,
          explanation: "Hormone receptor-negative; not responsive to tamoxifen/AI."
        },
        {
          id: "d",
          text: "No systemic therapy needed (surgery alone)",
          isCorrect: false,
          explanation: "HER2+ requires targeted therapy. Nodal status and size may warrant adjuvant chemo."
        }
      ],
      explanation: "HER2+ breast cancer: anti-HER2 therapy (trastuzumab ± pertuzumab) combined with chemotherapy. Modern standard significantly improves disease-free and overall survival.",
      difficulty: "MEDIUM",
      bloomsLevel: "Analysis",
      examTags: ["NEXT_STEP1"],
      textbookRefs: [{ book: "Bailey & Love's Short Practice of Surgery", chapter: "Breast Disease", edition: "27th" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-04-TOP-03",
      stem: "A 60-year-old with invasive lobular carcinoma (ILC) 2 cm, ER+, PR+, HER2-, node-negative. After surgery, what long-term endocrine therapy is indicated?",
      options: [
        {
          id: "a",
          text: "Tamoxifen 5 years only",
          isCorrect: false,
          explanation: "Extended therapy often beneficial in postmenopausal ER+."
        },
        {
          id: "b",
          text: "Aromatase inhibitor (AI) 5 years (postmenopausal) or tamoxifen 5 years (premenopausal)",
          isCorrect: true,
          explanation: "Postmenopausal ER+: AI preferred (letrozole, anastrozole, exemestane) for 5 years. Premenopausal: tamoxifen. Extension beyond 5 years may be considered in higher-risk patients."
        },
        {
          id: "c",
          text: "No endocrine therapy needed (node-negative)",
          isCorrect: false,
          explanation: "ER+ status indicates endocrine therapy regardless of nodal status."
        },
        {
          id: "d",
          text: "Aromatase inhibitor + trastuzumab combined",
          isCorrect: false,
          explanation: "Trastuzumab only if HER2+; this patient HER2-."
        }
      ],
      explanation: "ER+ breast cancer: endocrine therapy essential. Postmenopausal: aromatase inhibitor preferred. Duration 5 years standard, extended therapy considered in higher-risk.",
      difficulty: "MEDIUM",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1"],
      textbookRefs: [{ book: "SRB's Manual of Surgery", chapter: "Hormonal Therapy in Breast Cancer", edition: "4th" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-04-TOP-03",
      stem: "A 42-year-old undergoes mastectomy for invasive ductal carcinoma. She is concerned about breast reconstruction. What is the earliest timing for reconstruction?",
      options: [
        {
          id: "a",
          text: "Immediate reconstruction during mastectomy",
          isCorrect: true,
          explanation: "Immediate reconstruction is oncologically safe and improves cosmetic/psychological outcomes. Can be done with implant or flap based on preference and patient factors."
        },
        {
          id: "b",
          text: "After 6 months of adjuvant chemotherapy",
          isCorrect: false,
          explanation: "Can perform immediately or delay; post-chemo timing acceptable but not required."
        },
        {
          id: "c",
          text: "Only after all adjuvant therapy is complete (1-2 years)",
          isCorrect: false,
          explanation: "Can be done immediately; delayed reconstruction also acceptable."
        },
        {
          id: "d",
          text: "Never recommended; risk of recurrence",
          isCorrect: false,
          explanation: "Immediate reconstruction oncologically safe; doesn't increase recurrence."
        }
      ],
      explanation: "Breast reconstruction: immediate (during mastectomy) or delayed approaches both acceptable. Immediate reconstruction improves psychological outcomes without increasing recurrence risk.",
      difficulty: "EASY",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1"],
      textbookRefs: [{ book: "Bailey & Love's Short Practice of Surgery", chapter: "Breast Reconstruction", edition: "27th" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-04-TOP-03",
      stem: "Regarding breast cancer screening in India, which is CORRECT?",
      options: [
        {
          id: "a",
          text: "Mammography recommended as primary screening in all women >40 years",
          isCorrect: false,
          explanation: "In India (resource-limited setting), opportunistic screening emphasizes clinical breast exam."
        },
        {
          id: "b",
          text: "Clinical breast examination (CBE) is practical initial screening tool in Indian settings",
          isCorrect: true,
          explanation: "Indian guidelines: CBE + BSE (breast self-exam) education. Mammography or USG for suspicious lesions. Structured mammography screening not yet routine in general population."
        },
        {
          id: "c",
          text: "Breast self-examination (BSE) not recommended",
          isCorrect: false,
          explanation: "BSE education valuable; women should be aware of normal breast changes."
        },
        {
          id: "d",
          text: "HER2 testing recommended for all breast cancers",
          isCorrect: false,
          explanation: "HER2 testing done for invasive cancers (especially nodal positive) to guide therapy, not as screening tool."
        }
      ],
      explanation: "Indian breast cancer screening: emphasis on CBE and BSE awareness (cost-effective). Mammography for diagnostic workup of suspicious findings. Improving mammography access in urban centers.",
      difficulty: "MEDIUM",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1"],
      textbookRefs: [{ book: "SRB's Manual of Surgery", chapter: "Breast Cancer Screening in India", edition: "4th" }],
    },

    // SU-MOD-05-TOP-03: Intestinal Obstruction (5 MCQs)
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-05-TOP-03",
      stem: "A 65-year-old with history of abdominal surgery presents with colicky abdominal pain, abdominal distension, and vomiting for 12 hours. Imaging shows clustered small bowel loops. What is the most likely diagnosis and initial management?",
      options: [
        {
          id: "a",
          text: "Paralytic ileus; NPO and NG decompression",
          isCorrect: false,
          explanation: "Colicky pain and imaging findings suggest mechanical obstruction, not ileus."
        },
        {
          id: "b",
          text: "Adhesive small bowel obstruction (SBO); conservative management with NG tube, IV fluids, monitoring",
          isCorrect: true,
          explanation: "Adhesions cause 75% of SBO. Partial obstruction often resolves with conservative management (NPO, NG tube, fluids). Surgery only if signs of strangulation or failure to resolve."
        },
        {
          id: "c",
          text: "Immediate laparotomy for adhesiolysis",
          isCorrect: false,
          explanation: "Most adhesive SBO resolve conservatively; surgery for failed conservative management."
        },
        {
          id: "d",
          text: "Volvulus; immediate surgical intervention",
          isCorrect: false,
          explanation: "Volvulus presents more acutely with severe pain; imaging would show twist."
        }
      ],
      explanation: "Adhesive SBO: conservative initial management (NG decompression, IV fluids, monitoring). Surgery if peritonitis, strangulation, or no improvement by 48-72 hours.",
      difficulty: "MEDIUM",
      bloomsLevel: "ProblemSolving",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [{ book: "SRB's Manual of Surgery", chapter: "Intestinal Obstruction", edition: "4th" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-05-TOP-03",
      stem: "A 72-year-old with right lower abdominal pain, palpable mass, and imaging showing transition point in left colon. No prior abdominal surgery. Most likely diagnosis?",
      options: [
        {
          id: "a",
          text: "Adhesive small bowel obstruction",
          isCorrect: false,
          explanation: "Transition in large colon (left side); no prior surgery. Different mechanism."
        },
        {
          id: "b",
          text: "Left-sided colonic obstruction from colorectal carcinoma",
          isCorrect: true,
          explanation: "Older patient, left colon obstruction, palpable mass (cecal distension), no prior surgery → colorectal cancer. High suspicion."
        },
        {
          id: "c",
          text: "Diverticulitis with perforation",
          isCorrect: false,
          explanation: "Diverticulitis presents differently (acute inflammation); obstruction from cancer more likely."
        },
        {
          id: "d",
          text: "Volvulus of sigmoid colon",
          isCorrect: false,
          explanation: "Sigmoid volvulus presents with acute onset; imaging would show characteristic twist."
        }
      ],
      explanation: "Left colon obstruction in older patient without prior surgery → colorectal cancer until proven. Requires colonoscopy ± imaging and surgical resection.",
      difficulty: "MEDIUM",
      bloomsLevel: "Analysis",
      examTags: ["NEXT_STEP1"],
      textbookRefs: [{ book: "Bailey & Love's Short Practice of Surgery", chapter: "Large Bowel Obstruction", edition: "27th" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-05-TOP-03",
      stem: "A 50-year-old with acute SBO has signs of strangulation (fever, severe pain, rebound tenderness). What is the most important distinguishing clinical feature?",
      options: [
        {
          id: "a",
          text: "Bloody diarrhea",
          isCorrect: false,
          explanation: "Late finding; not most important early distinguisher."
        },
        {
          id: "b",
          text: "Tachycardia out of proportion to pain, fever, and systemic toxicity signs",
          isCorrect: true,
          explanation: "Strangulation: tachycardia, fever, rigidity, rebound tenderness indicate ischemia and requires urgent surgery."
        },
        {
          id: "c",
          text: "Presence of constipation",
          isCorrect: false,
          explanation: "Constipation expected in obstruction; not specific to strangulation."
        },
        {
          id: "d",
          text: "Absent NG output",
          isCorrect: false,
          explanation: "NG output depends on level; doesn't indicate strangulation specifically."
        }
      ],
      explanation: "Strangulation signs: disproportionate tachycardia, fever, peritonitis (rigidity, rebound), metabolic acidosis, elevated lactate. Emergency surgery needed.",
      difficulty: "MEDIUM",
      bloomsLevel: "ProblemSolving",
      examTags: ["NEXT_STEP1"],
      textbookRefs: [{ book: "Sabiston Textbook of Surgery", chapter: "Small Intestinal Obstruction", edition: "21st" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-05-TOP-03",
      stem: "Regarding imaging in SBO, which is CORRECT?",
      options: [
        {
          id: "a",
          text: "Plain X-ray (supine + upright) sufficient for diagnosis in all cases",
          isCorrect: false,
          explanation: "X-ray good for initial assessment but CT more sensitive, especially for partial obstruction."
        },
        {
          id: "b",
          text: "CT with IV contrast is gold standard for diagnosis and identifying strangulation",
          isCorrect: true,
          explanation: "CT superior: shows transition point, level, etiology, signs of strangulation (mesenteric fat stranding, free fluid), and helps surgical planning."
        },
        {
          id: "c",
          text: "Ultrasound is preferred over CT in acute SBO",
          isCorrect: false,
          explanation: "US less reliable than CT; operator-dependent. CT preferred."
        },
        {
          id: "d",
          text: "MRI recommended for all suspected SBO",
          isCorrect: false,
          explanation: "MRI not first-line; CT faster and more practical."
        }
      ],
      explanation: "SBO imaging: plain films for initial assessment. CT with IV contrast (gold standard) shows obstruction level, etiology, strangulation signs, and guides management.",
      difficulty: "EASY",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1"],
      textbookRefs: [{ book: "SRB's Manual of Surgery", chapter: "Imaging in Intestinal Obstruction", edition: "4th" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-05-TOP-03",
      stem: "A 55-year-old with complete large bowel obstruction (no prior surgery) presents with massive abdominal distension and pain for 2 days. Best surgical approach?",
      options: [
        {
          id: "a",
          text: "Primary resection and anastomosis",
          isCorrect: false,
          explanation: "Unprepared colon + obstruction = high anastomotic leak risk."
        },
        {
          id: "b",
          text: "Hartmann's procedure (resection with colostomy, mucous fistula/closure)",
          isCorrect: true,
          explanation: "Large bowel obstruction without preoperative prep + suspected cancer → Hartmann's (resection with temporary colostomy). Primary anastomosis risky."
        },
        {
          id: "c",
          text: "Defunctioning loop colostomy only",
          isCorrect: false,
          explanation: "Doesn't address obstruction; needs resection of tumor/pathology."
        },
        {
          id: "d",
          text: "Preoperative colonic stent placement then elective resection",
          isCorrect: false,
          explanation: "Possible in selected cases but Hartmann's standard for acute large bowel obstruction."
        }
      ],
      explanation: "Acute large bowel obstruction (likely cancer): Hartmann's procedure (resection + temporary colostomy). Allows safe resection without primary anastomosis in unprepared, obstructed colon.",
      difficulty: "MEDIUM",
      bloomsLevel: "Analysis",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [{ book: "Bailey & Love's Short Practice of Surgery", chapter: "Large Bowel Surgery", edition: "27th" }],
    },

    // SU-MOD-05-TOP-04: Peptic Ulcer: Surgical Management (5 MCQs)
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-05-TOP-04",
      stem: "A 58-year-old with chronic GERD refractory to PPI therapy (2 years) and symptoms of early satiety, weight loss develops gastric outlet obstruction. What is the primary surgical option?",
      options: [
        {
          id: "a",
          text: "Vagotomy with antrectomy",
          isCorrect: false,
          explanation: "Vagotomy rarely used now; PPIs effective for acid. For obstruction, address anatomical problem."
        },
        {
          id: "b",
          text: "Billroth II gastrojejunostomy for gastric outlet obstruction",
          isCorrect: true,
          explanation: "Gastric outlet obstruction from ulcer/stricture: gastrojejunostomy (Billroth II or Roux-en-Y) bypasses obstruction."
        },
        {
          id: "c",
          text: "Endoscopic dilation without surgery",
          isCorrect: false,
          explanation: "Endoscopic dilation may help but often recurs; surgery for chronic/resistant obstruction."
        },
        {
          id: "d",
          text: "Fundoplication (Nissen) for acid control",
          isCorrect: false,
          explanation: "Fundoplication for reflux, not for obstruction management."
        }
      ],
      explanation: "Peptic ulcer with gastric outlet obstruction: surgical treatment with gastrojejunostomy. Modern PPIs reduced need for peptic ulcer surgery dramatically.",
      difficulty: "MEDIUM",
      bloomsLevel: "ProblemSolving",
      examTags: ["NEXT_STEP1"],
      textbookRefs: [{ book: "SRB's Manual of Surgery", chapter: "Peptic Ulcer Surgery", edition: "4th" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-05-TOP-04",
      stem: "A 45-year-old on chronic NSAIDs develops perforated duodenal ulcer. After resuscitation and laparotomy, what is the definitive surgical management?",
      options: [
        {
          id: "a",
          text: "Simple closure with omentoplasty (Graham patch)",
          isCorrect: false,
          explanation: "Graham patch is temporary/damage control; NSAID ulcers recur without addressing acidity."
        },
        {
          id: "b",
          text: "Graham patch closure + intraoperative PPI therapy post-op",
          isCorrect: true,
          explanation: "Simple closure with omental patch is safe; PPIs given intraoperatively/post-op reduce recurrence. Vagotomy now rarely used."
        },
        {
          id: "c",
          text: "Graham patch + vagotomy and antrectomy",
          isCorrect: false,
          explanation: "Vagotomy rarely needed with modern PPI therapy; increases morbidity."
        },
        {
          id: "d",
          text: "Ulcer excision with primary closure",
          isCorrect: false,
          explanation: "Direct excision risky; Graham patch safer."
        }
      ],
      explanation: "Perforated peptic ulcer: emergency closure with omental patch. Vagotomy rarely done now. PPIs given perioperatively and long-term reduce recurrence.",
      difficulty: "MEDIUM",
      bloomsLevel: "ProblemSolving",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [{ book: "Sabiston Textbook of Surgery", chapter: "Peptic Ulcer Disease", edition: "21st" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-05-TOP-04",
      stem: "Regarding peptic ulcer surgery in modern era, which statement is CORRECT?",
      options: [
        {
          id: "a",
          text: "Vagotomy is standard procedure for peptic ulcer disease",
          isCorrect: false,
          explanation: "Vagotomy rarely done now due to effective PPIs."
        },
        {
          id: "b",
          text: "Proton pump inhibitors (PPIs) have reduced indication for elective peptic ulcer surgery",
          isCorrect: true,
          explanation: "PPIs dramatically reduced ulcer complications and surgical need. Surgery now mainly for complications (perforation, bleeding uncontrolled)."
        },
        {
          id: "c",
          text: "H. pylori eradication has increased need for surgery",
          isCorrect: false,
          explanation: "H. pylori eradication + PPIs reduced surgical indications."
        },
        {
          id: "d",
          text: "Antrectomy is preferred over vagotomy for gastric ulcer",
          isCorrect: false,
          explanation: "Neither commonly used now; medical therapy preferred."
        }
      ],
      explanation: "Modern peptic ulcer disease: PPIs + H. pylori eradication (if positive) manage most ulcers. Surgery reserved for: perforation, uncontrolled GI bleed, refractory obstruction.",
      difficulty: "EASY",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1"],
      textbookRefs: [{ book: "SRB's Manual of Surgery", chapter: "Peptic Ulcer Disease Management", edition: "4th" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-05-TOP-04",
      stem: "A 52-year-old with bleeding duodenal ulcer (uncontrolled despite 2 endoscopic attempts) on PPI therapy presents for surgical management. What is the procedure of choice?",
      options: [
        {
          id: "a",
          text: "Vagotomy and antrectomy",
          isCorrect: false,
          explanation: "Outdated; bleeding ulcers now managed endoscopically or with minimal surgery."
        },
        {
          id: "b",
          text: "Duodenotomy with oversewing of bleeding ulcer + intraoperative PPI",
          isCorrect: true,
          explanation: "Duodenotomy (anterior) allows direct visualization, oversewing of vessel (gastroduodenal artery), and closure. Vagotomy not needed with PPI."
        },
        {
          id: "c",
          text: "Antrectomy alone",
          isCorrect: false,
          explanation: "Antrectomy doesn't control bleeding if from ulcer edge; needs direct oversewing."
        },
        {
          id: "d",
          text: "Partial gastrectomy (Billroth I)",
          isCorrect: false,
          explanation: "Billroth I used for gastric ulcers; duodenal ulcers need duodenotomy approach."
        }
      ],
      explanation: "Bleeding duodenal ulcer (failed endoscopy): duodenotomy with oversewing of gastroduodenal artery. PPI given perioperatively. Vagotomy no longer needed.",
      difficulty: "HARD",
      bloomsLevel: "Analysis",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [{ book: "Bailey & Love's Short Practice of Surgery", chapter: "Bleeding Peptic Ulcer", edition: "27th" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-05-TOP-04",
      stem: "A 60-year-old on chronic aspirin therapy for cardiac disease develops perforated gastric ulcer. What is the surgical management?",
      options: [
        {
          id: "a",
          text: "Partial gastrectomy (Billroth II) for gastric ulcers",
          isCorrect: false,
          explanation: "Gastric ulcers near lesser curve or fundus can be managed with closure; ulcers at angle or antrum may need gastrectomy."
        },
        {
          id: "b",
          text: "Biopsy of ulcer edge to rule out malignancy, then closure or gastrectomy based on location",
          isCorrect: true,
          explanation: "Gastric ulcers: must biopsy to exclude malignancy. Antral ulcers can be antrectomized; lesser curve/body ulcers require gastrectomy (Billroth II)."
        },
        {
          id: "c",
          text: "Simple closure with omentoplasty (same as duodenal)",
          isCorrect: false,
          explanation: "Gastric ulcers risk of recurrence/malignancy; need more definitive surgery than duodenal."
        },
        {
          id: "d",
          text: "Total gastrectomy always",
          isCorrect: false,
          explanation: "Total gastrectomy excessive; location-based approach."
        }
      ],
      explanation: "Gastric ulcer perforation: must biopsy (exclude cancer). Antral ulcer = antrectomy. Lesser curve/fundus = Billroth II gastrectomy. Duodenal = Graham patch.",
      difficulty: "HARD",
      bloomsLevel: "Analysis",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [{ book: "Sabiston Textbook of Surgery", chapter: "Gastric Ulcer Surgery", edition: "21st" }],
    },

    // SU-MOD-05-TOP-05: Colorectal Carcinoma (5 MCQs)
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-05-TOP-05",
      stem: "A 62-year-old with positive FIT test undergoes colonoscopy. Biopsy of 3 cm lesion in sigmoid colon: adenocarcinoma, T3N1M0. What is the standard treatment?",
      options: [
        {
          id: "a",
          text: "Neoadjuvant chemotherapy followed by anterior resection",
          isCorrect: false,
          explanation: "Neoadjuvant chemo used for T4 or node+. T3N1 can proceed to surgery directly with adjuvant chemo."
        },
        {
          id: "b",
          text: "Anterior resection with total mesorectal excision (TME) + adjuvant chemotherapy",
          isCorrect: true,
          explanation: "Sigmoid T3N1: anterior resection with en bloc mesorectal excision. Nodal involvement → adjuvant FOLFOX or similar."
        },
        {
          id: "c",
          text: "Hartmann's procedure (colostomy)",
          isCorrect: false,
          explanation: "Hartmann's for obstruction/emergency; not primary elective surgery for resectable cancer."
        },
        {
          id: "d",
          text: "Observation without surgery if asymptomatic",
          isCorrect: false,
          explanation: "Adenocarcinoma requires surgical resection; adjuvant therapy depends on stage."
        }
      ],
      explanation: "Colorectal cancer surgery: wide resection with adequate margins (>5cm) and lymph node harvest (>12 nodes). TME crucial for rectal. Adjuvant chemo if stage III.",
      difficulty: "MEDIUM",
      bloomsLevel: "ProblemSolving",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [{ book: "SRB's Manual of Surgery", chapter: "Colorectal Carcinoma", edition: "4th" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-05-TOP-05",
      stem: "A 58-year-old with stage II (T4N0) rectal adenocarcinoma (5 cm lesion 8 cm from anal verge). What is the most appropriate surgical approach?",
      options: [
        {
          id: "a",
          text: "Low anterior resection (LAR) with Total mesorectal excision (TME)",
          isCorrect: true,
          explanation: "Rectal cancer 8 cm from anal verge: LAR with TME is sphincter-preserving approach. On-table colonic washout, anastomosis with protecting ileostomy if <5 cm from margin."
        },
        {
          id: "b",
          text: "Abdominoperineal resection (APR) for all low rectal cancers",
          isCorrect: false,
          explanation: "APR if <5 cm from anal verge or sphincter involvement; this tumor allows LAR."
        },
        {
          id: "c",
          text: "Hartmann's procedure",
          isCorrect: false,
          explanation: "Hartmann's not standard for primary elective resectable rectal cancer."
        },
        {
          id: "d",
          text: "Neoadjuvant radiotherapy alone without surgery",
          isCorrect: false,
          explanation: "Surgery essential for cure; neoadjuvant chemo/RT may be given preoperatively."
        }
      ],
      explanation: "Rectal cancer <12 cm from anal verge: neoadjuvant chemoradiotherapy then LAR (if sphincter-sparing feasible) or APR (if sphincter involved). TME essential.",
      difficulty: "MEDIUM",
      bloomsLevel: "Analysis",
      examTags: ["NEXT_STEP1"],
      textbookRefs: [{ book: "Bailey & Love's Short Practice of Surgery", chapter: "Rectal Cancer", edition: "27th" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-05-TOP-05",
      stem: "A 70-year-old with stage IV colorectal cancer (liver metastases) presents. What is the role of surgery?",
      options: [
        {
          id: "a",
          text: "No surgery; palliative chemotherapy only",
          isCorrect: false,
          explanation: "Select stage IV patients with resectable primary + limited mets benefit from surgery."
        },
        {
          id: "b",
          text: "Surgery for primary tumor resection if feasible, with consideration for hepatic resection if ≤3 mets",
          isCorrect: true,
          explanation: "Stage IV with resectable primary: resect primary + liver (if ≤3 mets, good performance). Improves median survival. Systemic chemo also needed."
        },
        {
          id: "c",
          text: "Hepatic resection of metastases without primary tumor resection",
          isCorrect: false,
          explanation: "Primary tumor control essential; if resectable, both should be managed."
        },
        {
          id: "d",
          text: "Cytoreductive surgery with HIPEC (hyperthermic intraperitoneal chemo)",
          isCorrect: false,
          explanation: "HIPEC used for peritoneal carcinomatosis, not isolated liver mets."
        }
      ],
      explanation: "Stage IV colorectal cancer: if primary resectable + limited liver mets (≤3), resect both. Combined resection + chemotherapy improves 5-year survival.",
      difficulty: "HARD",
      bloomsLevel: "Analysis",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [{ book: "Sabiston Textbook of Surgery", chapter: "Metastatic Colorectal Cancer", edition: "21st" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-05-TOP-05",
      stem: "Regarding colorectal cancer surveillance post-resection, which is CORRECT?",
      options: [
        {
          id: "a",
          text: "CEA levels every 3-6 months for 2-3 years in stages II-III",
          isCorrect: true,
          explanation: "CEA monitoring: every 3-6 months for 2-3 years in stage II-III helps detect recurrence early."
        },
        {
          id: "b",
          text: "Colonoscopy at 1 year, then every 3 years if normal",
          isCorrect: false,
          explanation: "Follow-up colonoscopy at 3-6 months, then 1 year (if normal), then 3-5 years."
        },
        {
          id: "c",
          text: "CT imaging every 3 months for 5 years",
          isCorrect: false,
          explanation: "CT surveillance not routine; used if high-risk features or symptoms."
        },
        {
          id: "d",
          text: "No surveillance if stage I and R0 resection",
          isCorrect: false,
          explanation: "Even stage I needs colonoscopy surveillance; chemotherapy not typically given but imaging/CEA may be monitored."
        }
      ],
      explanation: "CRC post-op surveillance: colonoscopy at 3-6 months, 1 year, then 3-5 years. CEA 3-6 months × 2-3 years (stage II-III). Physical exam, high-risk CT if indicated.",
      difficulty: "EASY",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1"],
      textbookRefs: [{ book: "SRB's Manual of Surgery", chapter: "Colorectal Cancer Follow-up", edition: "4th" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-05-TOP-05",
      stem: "A 55-year-old with stage IIIC colorectal cancer (T4N2) post-resection asks about adjuvant chemotherapy. What regimen is standard?",
      options: [
        {
          id: "a",
          text: "5-FU alone",
          isCorrect: false,
          explanation: "5-FU monotherapy less effective; combination preferred."
        },
        {
          id: "b",
          text: "FOLFOX (5-FU, leucovorin, oxaliplatin) for 6-8 months",
          isCorrect: true,
          explanation: "Stage III CRC: FOLFOX (leucovorin, 5-FU, oxaliplatin) or CAPOX (capecitabine, oxaliplatin) for 6 months. Improves disease-free and overall survival."
        },
        {
          id: "c",
          text: "Bevacizumab (anti-VEGF) monotherapy",
          isCorrect: false,
          explanation: "Bevacizumab used with chemotherapy in metastatic disease; not alone in adjuvant."
        },
        {
          id: "d",
          text: "No chemotherapy if R0 resection achieved",
          isCorrect: false,
          explanation: "Stage III (node+) benefits from adjuvant chemo regardless of R0 status."
        }
      ],
      explanation: "Stage III CRC adjuvant: FOLFOX (5-FU/LV/oxaliplatin) or CAPOX for 6 months. Reduces recurrence and improves survival. Stage II high-risk may also benefit.",
      difficulty: "MEDIUM",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1"],
      textbookRefs: [{ book: "Bailey & Love's Short Practice of Surgery", chapter: "Adjuvant Therapy CRC", edition: "27th" }],
    },

    // SU-MOD-05-TOP-06: Anorectal Diseases (5 MCQs)
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-05-TOP-06",
      stem: "A 35-year-old presents with severe anal pain, swelling, and palpable induration at 6 o'clock position. Pain worsened by sitting. Diagnosis and immediate management?",
      options: [
        {
          id: "a",
          text: "Internal hemorrhoid; sclerotherapy",
          isCorrect: false,
          explanation: "Hemorrhoids painless unless thrombosed; this is likely abscess with severe pain."
        },
        {
          id: "b",
          text: "Perianal abscess; immediate incision and drainage under anesthesia",
          isCorrect: true,
          explanation: "Acute severe anal pain + swelling + induration = perianal abscess. Emergency drainage to prevent fistula formation and systemic spread."
        },
        {
          id: "c",
          text: "Anal fissure; topical nifedipine cream",
          isCorrect: false,
          explanation: "Fissure typically posteriorly; abscess has induration and swelling."
        },
        {
          id: "d",
          text: "Pilonidal sinus; elective excision",
          isCorrect: false,
          explanation: "Pilonidal sinus midline; this is off-midline perianal."
        }
      ],
      explanation: "Perianal abscess: severe pain, swelling, induration, fever possible. Drain urgently. Explore for fistula tract (up to 50% develop fistula if not drained/explored).",
      difficulty: "MEDIUM",
      bloomsLevel: "ProblemSolving",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [{ book: "SRB's Manual of Surgery", chapter: "Anorectal Abscess", edition: "4th" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-05-TOP-06",
      stem: "A 48-year-old with chronic intermittent anal pain, discharge, and a palpable tract near the anus. Diagnosis?",
      options: [
        {
          id: "a",
          text: "Anal fissure",
          isCorrect: false,
          explanation: "Fissure typically posterior midline; this is lateral tract."
        },
        {
          id: "b",
          text: "Anal fistula",
          isCorrect: true,
          explanation: "Tract with intermittent discharge = anal fistula. Often sequela of perianal abscess. Classify by location (low vs high) relative to sphincters."
        },
        {
          id: "c",
          text: "Internal hemorrhoid",
          isCorrect: false,
          explanation: "Hemorrhoids painless unless thrombosed; no tract."
        },
        {
          id: "d",
          text: "Pilonidal sinus",
          isCorrect: false,
          explanation: "Pilonidal midline back; this is anorectal."
        }
      ],
      explanation: "Anal fistula: abnormal tract between anal canal and perineal skin. Often follows abscess drainage. Treatment: fistulotomy (low fistulas) or advancement flap (high complex fistulas).",
      difficulty: "EASY",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1"],
      textbookRefs: [{ book: "Bailey & Love's Short Practice of Surgery", chapter: "Anal Fistula", edition: "27th" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-05-TOP-06",
      stem: "A 52-year-old with painless bright red bleeding per rectum, external anal mass, and visible lesion at anal verge. Biopsy: squamous cell carcinoma. Stage T2N0M0. Treatment?",
      options: [
        {
          id: "a",
          text: "Abdominoperineal resection (APR)",
          isCorrect: false,
          explanation: "APR is aggressive; anal SCC better treated with chemoradiation first."
        },
        {
          id: "b",
          text: "Neoadjuvant chemoradiotherapy (Nigro protocol) with salvage surgery if needed",
          isCorrect: true,
          explanation: "Anal SCC (any T, any N): Nigro protocol (5-FU, mitomycin, radiotherapy). Surgery for residual/recurrent disease. Sphincter preservation priority."
        },
        {
          id: "c",
          text: "Radiotherapy alone",
          isCorrect: false,
          explanation: "Chemoradiation superior to RT alone."
        },
        {
          id: "d",
          text: "Wide local excision with sphincter preservation",
          isCorrect: false,
          explanation: "Chemoradiation first-line; surgery reserved for treatment failure."
        }
      ],
      explanation: "Anal SCC: Nigro protocol (concurrent 5-FU, mitomycin, pelvic RT) primary therapy. Complete response ~85%. APR only for treatment failure/recurrence.",
      difficulty: "HARD",
      bloomsLevel: "Analysis",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [{ book: "Sabiston Textbook of Surgery", chapter: "Anal Cancer", edition: "21st" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-05-TOP-06",
      stem: "A 42-year-old presents with severe posterior anal pain during and after defecation, visible tear in posterior midline. Diagnosis and first-line treatment?",
      options: [
        {
          id: "a",
          text: "Acute anal fissure; medical management with stool softeners, topical anesthetics, nitroglycerin or nifedipine",
          isCorrect: true,
          explanation: "Acute fissure: usually posterior midline. First-line: stool softeners, topical anesthetics (lidocaine), topical nitrates (GTN) or nifedipine (relax internal sphincter)."
        },
        {
          id: "b",
          text: "Acute fissure; immediate lateral internal sphincterotomy",
          isCorrect: false,
          explanation: "Surgery (sphincterotomy) for chronic or failed medical management; not first-line."
        },
        {
          id: "c",
          text: "Perianal abscess; incision and drainage",
          isCorrect: false,
          explanation: "Abscess has induration/swelling; fissure is linear tear."
        },
        {
          id: "d",
          text: "Internal hemorrhoid; rubber band ligation",
          isCorrect: false,
          explanation: "Different diagnosis; fissure is tear, not hemorrhoid."
        }
      ],
      explanation: "Acute anal fissure: stool softeners, fiber, topical anesthetics, and topical nitrates/nifedipine (relaxes sphincter). Chronic/failed treatment → lateral internal sphincterotomy.",
      difficulty: "MEDIUM",
      bloomsLevel: "ProblemSolving",
      examTags: ["NEXT_STEP1"],
      textbookRefs: [{ book: "SRB's Manual of Surgery", chapter: "Anal Fissure", edition: "4th" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-05-TOP-06",
      stem: "Regarding hemorrhoids classification, which is CORRECT?",
      options: [
        {
          id: "a",
          text: "First-degree hemorrhoids present with pain and bleeding",
          isCorrect: false,
          explanation: "First-degree typically painless; pain suggests external or thrombosed."
        },
        {
          id: "b",
          text: "Third-degree hemorrhoids prolapse but reduce spontaneously",
          isCorrect: true,
          explanation: "Grade III: prolapse with straining, require manual reduction. Grade IV: permanent prolapse."
        },
        {
          id: "c",
          text: "External hemorrhoids are best treated with rubber band ligation",
          isCorrect: false,
          explanation: "RBL for internal; external managed conservatively or excised if thrombosed."
        },
        {
          id: "d",
          text: "Internal hemorrhoids drain to hypogastric nodes",
          isCorrect: false,
          explanation: "Internal drain to internal iliac; external to superficial inguinal nodes."
        }
      ],
      explanation: "Hemorrhoid grades: I = bleeding, no prolapse. II = prolapse, self-reduce. III = prolapse, need manual reduction. IV = permanent prolapse.",
      difficulty: "EASY",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1"],
      textbookRefs: [{ book: "SRB's Manual of Surgery", chapter: "Hemorrhoids", edition: "4th" }],
    },

    // SU-MOD-06-TOP-02: Obstructive Jaundice (5 MCQs)
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-06-TOP-02",
      stem: "A 68-year-old presents with painless jaundice, acholic stools, and pruritus for 3 weeks. Imaging shows dilated CBD (12 mm) with a distal mass. What is the most likely diagnosis?",
      options: [
        {
          id: "a",
          text: "Choledocholithiasis with acute cholecystitis",
          isCorrect: false,
          explanation: "Choledocholithiasis typically painful; painless jaundice suggests malignancy."
        },
        {
          id: "b",
          text: "Pancreatic head carcinoma causing distal CBD obstruction",
          isCorrect: true,
          explanation: "Painless jaundice + dilated CBD + distal mass on imaging = pancreatic head cancer. Courvoisier sign (palpable gallbladder) supports pancreatic etiology."
        },
        {
          id: "c",
          text: "Cholangiocarcinoma of distal CBD",
          isCorrect: false,
          explanation: "Possible but pancreatic cancer more common cause of distal obstruction."
        },
        {
          id: "d",
          text: "Hepatitis; no intervention needed",
          isCorrect: false,
          explanation: "Imaging shows structural obstruction, not hepatitis."
        }
      ],
      explanation: "Painless obstructive jaundice: think malignancy (pancreatic cancer, cholangiocarcinoma, ampullary). Urgent staging (CT, ERCP if needed) and consideration of whipple/palliative bypass.",
      difficulty: "MEDIUM",
      bloomsLevel: "Analysis",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [{ book: "SRB's Manual of Surgery", chapter: "Pancreatic Carcinoma", edition: "4th" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-06-TOP-02",
      stem: "A 55-year-old with obstructive jaundice from choledocholithiasis (confirmed on ERCP with multiple stones). What is the definitive treatment?",
      options: [
        {
          id: "a",
          text: "ERCP with sphincterotomy and stone extraction",
          isCorrect: true,
          explanation: "Choledocholithiasis: ERCP with ES and stone extraction is gold standard. If gallbladder in-situ, elective cholecystectomy after jaundice resolves to prevent recurrent stones."
        },
        {
          id: "b",
          text: "Open choledochotomy with T-tube drainage",
          isCorrect: false,
          explanation: "Surgical approach reserved for failed ERCP or massive stones; not first-line."
        },
        {
          id: "c",
          text: "Ursodeoxycholic acid dissolution therapy",
          isCorrect: false,
          explanation: "Dissolution therapy very slow; not for acute obstruction."
        },
        {
          id: "d",
          text: "Watchful waiting for spontaneous passage",
          isCorrect: false,
          explanation: "Obstructive jaundice requires intervention; risk of cholangitis."
        }
      ],
      explanation: "Choledocholithiasis: ERCP with sphincterotomy and stone extraction. Then cholecystectomy (if GB present) to prevent recurrence. Surgical choledochotomy if ERCP fails.",
      difficulty: "EASY",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1"],
      textbookRefs: [{ book: "Bailey & Love's Short Practice of Surgery", chapter: "Biliary Obstruction", edition: "27th" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-06-TOP-02",
      stem: "A 72-year-old with obstructive jaundice from unresectable pancreatic head cancer. Bilirubin 18 mg/dL, INR 1.6, platelets 95k. What is the surgical approach for palliation?",
      options: [
        {
          id: "a",
          text: "ERCP with self-expanding metal stent (SEMS) for biliary drainage",
          isCorrect: true,
          explanation: "Unresectable pancreatic cancer: ERCP + SEMS preferred (less stent migration than plastic). Avoids surgical trauma in frail patient. Duodenojejunostomy if gastric outlet obstruction."
        },
        {
          id: "b",
          text: "Hepaticojejunostomy (surgical bypass)",
          isCorrect: false,
          explanation: "ERCP + stent less morbid; surgical bypass if ERCP fails or contraindicated."
        },
        {
          id: "c",
          text: "Whipple pancreaticoduodenectomy for cure",
          isCorrect: false,
          explanation: "Unresectable disease; palliative care, not aggressive surgery."
        },
        {
          id: "d",
          text: "No intervention; supportive care only",
          isCorrect: false,
          explanation: "Obstructive jaundice causes coagulopathy, pruritus; drainage improves quality of life."
        }
      ],
      explanation: "Unresectable malignant obstruction: ERCP + SEMS for biliary drainage (lower morbidity than surgery). Whipple only if resectable. Duodenojejunostomy if gastric outlet obstruction.",
      difficulty: "HARD",
      bloomsLevel: "Analysis",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [{ book: "Sabiston Textbook of Surgery", chapter: "Pancreatic Cancer Palliation", edition: "21st" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-06-TOP-02",
      stem: "A 45-year-old with acute obstructive jaundice, high fever (39.5°C), and right upper quadrant pain. Labs: bilirubin 22, AST/ALT elevated. Diagnosis and immediate action?",
      options: [
        {
          id: "a",
          text: "Acute cholecystitis; prepare for emergency cholecystectomy",
          isCorrect: false,
          explanation: "Findings suggest cholangitis from obstruction, not primary cholecystitis."
        },
        {
          id: "b",
          text: "Ascending cholangitis; urgent ERCP + sphincterotomy + antibiotics",
          isCorrect: true,
          explanation: "Charcot's triad (fever, jaundice, pain) = ascending cholangitis. Emergency: broad-spectrum antibiotics (cover gram-negative, anaerobes) + urgent ERCP for drainage."
        },
        {
          id: "c",
          text: "Acute hepatitis; supportive care",
          isCorrect: false,
          explanation: "Fever + severe jaundice + obstruction = cholangitis, not viral hepatitis."
        },
        {
          id: "d",
          text: "Septic shock; ICU monitoring without specific intervention",
          isCorrect: false,
          explanation: "While patient at risk of sepsis, need urgent drainage (ERCP) + antibiotics."
        }
      ],
      explanation: "Ascending cholangitis (Charcot's triad: fever, jaundice, RUQ pain): Emergency ERCP with drainage. Mortality 5-10% even with treatment; 100% without. Broad-spectrum antibiotics.",
      difficulty: "MEDIUM",
      bloomsLevel: "ProblemSolving",
      examTags: ["NEXT_STEP1"],
      textbookRefs: [{ book: "SRB's Manual of Surgery", chapter: "Ascending Cholangitis", edition: "4th" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-06-TOP-02",
      stem: "Regarding the workup of obstructive jaundice, which imaging is most accurate for detecting choledocholithiasis?",
      options: [
        {
          id: "a",
          text: "Ultrasound; high sensitivity for common bile duct stones",
          isCorrect: false,
          explanation: "US good for gallbladder stones; limited for CBD assessment."
        },
        {
          id: "b",
          text: "CT abdomen; best for pancreatic pathology",
          isCorrect: false,
          explanation: "CT good for pancreas/masses but less sensitive for small stones."
        },
        {
          id: "c",
          text: "MRCP (MR cholangiopancreatography); non-invasive, high sensitivity for CBD stones",
          isCorrect: true,
          explanation: "MRCP: non-invasive, excellent visualization of biliary tree and CBD stones. Sensitivity 85-95% for choledocholithiasis."
        },
        {
          id: "d",
          text: "ERCP; best diagnostic test for CBD obstruction",
          isCorrect: false,
          explanation: "ERCP is therapeutic but invasive; should be preceded by MRCP if diagnosis uncertain."
        }
      ],
      explanation: "Choledocholithiasis diagnosis: MRCP is gold standard non-invasive imaging (sensitivity ~95%). ERCP reserved for therapeutic intervention (ES, stone extraction).",
      difficulty: "EASY",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1"],
      textbookRefs: [{ book: "SRB's Manual of Surgery", chapter: "Biliary Imaging", edition: "4th" }],
    },

    // SU-MOD-06-TOP-03: Liver Abscess & Portal Hypertension (5 MCQs)
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-06-TOP-03",
      stem: "A 38-year-old with recent acute dysentery presents with fever, chills, hepatomegaly, and RUQ pain. Ultrasound: 8 cm hypoechoic lesion in right lobe liver. Most likely diagnosis?",
      options: [
        {
          id: "a",
          text: "Pyogenic liver abscess from ascending cholangitis",
          isCorrect: false,
          explanation: "Pyogenic typically from ascending cholangitis or portal bacteremia; amebic more common from dysentery history."
        },
        {
          id: "b",
          text: "Amebic liver abscess (from Entamoeba histolytica)",
          isCorrect: true,
          explanation: "Recent dysentery + fever + RUQ pain + large single lesion (usually right lobe) = amebic abscess. Serology positive. Treated with metronidazole + iodoquinol."
        },
        {
          id: "c",
          text: "Hepatic cyst; no treatment needed",
          isCorrect: false,
          explanation: "Symptomatic abscess needs drainage; cyst would be anechoic."
        },
        {
          id: "d",
          text: "Echinococcal cyst; treat with albendazole",
          isCorrect: false,
          explanation: "Echinococcal cysts have characteristic daughter cysts; imaging/serology different."
        }
      ],
      explanation: "Amebic abscess: history of dysentery, right lobe, solitary large cavity. Serology: anti-amebic antibodies positive (~95%). Treat: metronidazole (amoebicide) + iodoquinol (tissue amoebicide).",
      difficulty: "MEDIUM",
      bloomsLevel: "Analysis",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [{ book: "SRB's Manual of Surgery", chapter: "Liver Abscess", edition: "4th" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-06-TOP-03",
      stem: "A 42-year-old with cirrhosis (Child-Pugh B) and portal hypertension presents with hematemesis (variceal bleed). After initial resuscitation and sclerotherapy, what is the next step if bleeding recurs?",
      options: [
        {
          id: "a",
          text: "Repeat sclerotherapy",
          isCorrect: false,
          explanation: "If fails, need shunt or other intervention, not just repeat sclerotherapy."
        },
        {
          id: "b",
          text: "Transjugular intrahepatic portosystemic shunt (TIPS)",
          isCorrect: true,
          explanation: "Variceal bleeding refractory to endoscopy: TIPS reduces portal pressure, controls bleeding. Bridge to transplant or definitive treatment."
        },
        {
          id: "c",
          text: "Surgical portocaval shunt (end-to-side)",
          isCorrect: false,
          explanation: "TIPS preferred; surgery reserved for TIPS failure/contraindication."
        },
        {
          id: "d",
          text: "Liver transplantation immediately",
          isCorrect: false,
          explanation: "Transplant appropriate but TIPS or sclerotherapy bridge first if possible."
        }
      ],
      explanation: "Variceal hemorrhage: endoscopic therapy (sclerotherapy/ligation). Refractory bleeding → TIPS. TIPS reduces portal pressure and controls bleeding; mortality improves.",
      difficulty: "HARD",
      bloomsLevel: "Analysis",
      examTags: ["NEXT_STEP1", "NEET_PG"],
      textbookRefs: [{ book: "Sabiston Textbook of Surgery", chapter: "Portal Hypertension", edition: "21st" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-06-TOP-03",
      stem: "A 55-year-old with cirrhotic portal hypertension develops new-onset ascites (refractory to diuretics). What is the diagnosis and first intervention?",
      options: [
        {
          id: "a",
          text: "Spontaneous bacterial peritonitis (SBP); antibiotics + paracentesis",
          isCorrect: false,
          explanation: "SBP presents with peritonitis; ascites alone is not SBP."
        },
        {
          id: "b",
          text: "Portal hypertensive ascites; TIPS if refractory to diuretics/albumin",
          isCorrect: true,
          explanation: "Refractory ascites (despite diuretics/restriction): TIPS reduces portal pressure, resolves ascites. Lower mortality compared to surgical shunt."
        },
        {
          id: "c",
          text: "Hepatorenal syndrome; supportive care only",
          isCorrect: false,
          explanation: "HRS is renal dysfunction in cirrhosis; ascites is separate issue."
        },
        {
          id: "d",
          text: "Peritoneal dialysis",
          isCorrect: false,
          explanation: "Dialysis not indicated for portal hypertensive ascites."
        }
      ],
      explanation: "Refractory ascites in cirrhosis: TIPS (transjugular intrahepatic portosystemic shunt) reduces portal pressure, resolves ascites, improves survival vs albumin alone.",
      difficulty: "MEDIUM",
      bloomsLevel: "ProblemSolving",
      examTags: ["NEXT_STEP1"],
      textbookRefs: [{ book: "Bailey & Love's Short Practice of Surgery", chapter: "Portal Hypertension Management", edition: "27th" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-06-TOP-03",
      stem: "A 48-year-old with Child-Pugh C cirrhosis and acute bacterial peritonitis (SBP confirmed on culture). Treatment and prognosis?",
      options: [
        {
          id: "a",
          text: "Cephalosporins (3rd generation) + albumin infusion",
          isCorrect: true,
          explanation: "SBP: 3rd generation cephalosporins (cefotaxime, ceftriaxone) empirically. IV albumin (1 g/kg day 1, 0.5 g/kg day 3) reduces renal dysfunction and mortality."
        },
        {
          id: "b",
          text: "Fluoroquinolones only; no albumin needed",
          isCorrect: false,
          explanation: "Cephalosporins superior; albumin improves outcomes."
        },
        {
          id: "c",
          text: "Ampicillin + gentamicin (older regimen)",
          isCorrect: false,
          explanation: "Older regimen; 3rd gen cephalosporins now preferred."
        },
        {
          id: "d",
          text: "Palliative care only; prognosis grim",
          isCorrect: false,
          explanation: "Though mortality high (30-50%), antibiotics + albumin improve outcomes; transplant consideration."
        }
      ],
      explanation: "SBP: 3rd generation cephalosporin + IV albumin. Mortality 30-50% even with treatment. Spontaneous bacterial peritonitis can recur; prophylactic norfloxacin after episode.",
      difficulty: "MEDIUM",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1"],
      textbookRefs: [{ book: "SRB's Manual of Surgery", chapter: "Spontaneous Bacterial Peritonitis", edition: "4th" }],
    },
    {
      type: "SINGLE_BEST_ANSWER",
      topicCode: "SU-MOD-06-TOP-03",
      stem: "Regarding complications of portal hypertension, which is CORRECT?",
      options: [
        {
          id: "a",
          text: "Portal vein thrombosis always requires anticoagulation",
          isCorrect: false,
          explanation: "PVT treatment depends on acuity and etiology; not all need anticoagulation."
        },
        {
          id: "b",
          text: "Hepatic encephalopathy is worsened by high protein intake",
          isCorrect: true,
          explanation: "Hepatic encephalopathy: reduce dietary protein, lactulose, rifaxomicin. High protein increases ammonia load."
        },
        {
          id: "c",
          text: "Splenomegaly from portal hypertension rarely causes thrombocytopenia",
          isCorrect: false,
          explanation: "Splenic sequestration from splenomegaly commonly causes thrombocytopenia."
        },
        {
          id: "d",
          text: "Hepatorenal syndrome is always reversible with IV fluids",
          isCorrect: false,
          explanation: "HRS refractory to fluids; needs vasoconstrictors (terlipressin, midodrine) and renal replacement therapy."
        }
      ],
      explanation: "Portal hypertension complications: varices, ascites, encephalopathy, HRS, PVT, SBP. Each requires specific management; prognosis depends on liver synthetic function.",
      difficulty: "MEDIUM",
      bloomsLevel: "Recall",
      examTags: ["NEXT_STEP1"],
      textbookRefs: [{ book: "SRB's Manual of Surgery", chapter: "Portal Hypertension Complications", edition: "4th" }],
    }
  ]
};
