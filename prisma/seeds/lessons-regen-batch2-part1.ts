export const regenBatch2LessonsPart1 = [
  {
    topicCode: "SU-MOD-01-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "wound-healing-foundation",
        title: "Wound Healing & Surgical Infections - Foundation",
        estimatedMinutes: 20,
        summary: "Introduction to phases of wound healing and classification of surgical infections in Indian surgical practice.",
        contentMd: "# Wound Healing Fundamentals\n\n## Definition\nWound healing is a complex biological process restoring tissue integrity after injury. In India, we manage millions of traumatic wounds annually.\n\n## Phases of Wound Healing\n\n### Inflammatory Phase (0-5 days)\n- Hemostasis and thrombosis occur immediately\n- Neutrophils arrive within 24-48 hours\n- Macrophages peak at 48-72 hours\n- Cytokines (TNF-α, IL-6) drive inflammation\n\n### Proliferative Phase (5-21 days)\n- Fibroblasts produce collagen\n- Angiogenesis forms new blood vessels\n- Epithelialization occurs from wound edges\n- Wound strength increases to 30% by day 7\n\n### Remodeling Phase (21 days - 2 years)\n- Collagen cross-linking increases strength\n- Final strength reaches 80% of normal tissue\n- Scar remodeling and maturation\n\n## Factors Affecting Healing\n- **Local**: Infection, blood supply, tension, foreign bodies\n- **Systemic**: Age, nutrition, diabetes, anemia",
        mnemonics: [
          { text: "IPR", explanation: "Inflammatory → Proliferative → Remodeling phases" },
          { text: "CHAMP", explanation: "Circulation, Hemoglobin, Age, Medication, Protein" }
        ],
        keyPoints: [
          "Inflammatory phase essential for cleanup",
          "Proliferative phase builds strength",
          "Remodeling determines final outcome",
          "Infection delays all phases significantly"
        ],
        textbookRefs: [
          { book: "Sabiston Textbook of Surgery", chapter: "Ch 6", edition: "21st" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Ch 4", edition: "27th" }
        ]
      },
      {
        layer: 2,
        slug: "wound-healing-mechanism",
        title: "Wound Healing & Surgical Infections - Mechanism",
        estimatedMinutes: 25,
        summary: "Detailed molecular mechanisms of wound healing and bacterial contamination pathways.",
        contentMd: "# Molecular Mechanisms of Wound Healing\n\n## Hemostasis & Coagulation Cascade\n- Platelet aggregation forms primary plug\n- Tissue factor activates extrinsic pathway\n- Thrombin converts fibrinogen to fibrin mesh\n- Clot stabilization by factor XIII cross-linking\n\n## Inflammatory Mediators\n- **PDGF**: Recruits fibroblasts and smooth muscle cells\n- **FGF**: Stimulates angiogenesis and fibroblast proliferation\n- **VEGF**: Promotes vascular endothelial growth\n- **TGF-β**: Orchestrates multiple healing phases\n\n## Collagen Synthesis\n- Triple helix structure: 2 α1 chains + 1 α2 chain\n- Cross-linking via lysyl oxidase for tensile strength\n- Types I & III predominate in skin wounds\n- Lathyrogens inhibit cross-linking (vitamin C essential)\n\n## Surgical Infection Pathogenesis\n- Bacterial dose threshold (~10^5 CFU/gram tissue)\n- Virulence factors: toxins, enzymes, biofilm formation\n- Host immunity determines infection vs colonization\n- S. aureus (including MRSA) leading cause in India",
        mnemonics: [
          { text: "GFG TVP", explanation: "Growth factors: PDGF, FGF, VEGF, TGF-β for collagen production" },
          { text: "STAPHYLO", explanation: "S. aureus, Staphylococcus most common surgical infection" }
        ],
        keyPoints: [
          "Molecular cascades highly coordinated and overlapping",
          "Growth factors essential for fibroblast recruitment",
          "Bacterial biofilms resist antibiotics",
          "Wound environment critical for bacterial growth"
        ],
        textbookRefs: [
          { book: "Guyton & Hall Textbook of Medical Physiology", chapter: "Ch 32", edition: "13th" },
          { book: "Clinical Microbiology by Ananthanarayan", chapter: "Ch 8", edition: "9th" }
        ]
      },
      {
        layer: 3,
        slug: "wound-healing-clinical",
        title: "Wound Healing & Surgical Infections - Clinical",
        estimatedMinutes: 30,
        summary: "Clinical manifestations, assessment, and management of wounds and surgical site infections.",
        contentMd: "# Clinical Wound Assessment & Infection Management\n\n## Wound Classification (CDC)\n- **Clean**: Elective, no GI/GYN/respiratory tract entry <1% SSI\n- **Clean-Contaminated**: GI/GYN/respiratory tract opened, controlled <5% SSI\n- **Contaminated**: Major break in technique, fresh traumatic wounds <10% SSI\n- **Dirty**: Gross contamination, perforation, old trauma >40% SSI\n\n## Surgical Site Infection (SSI) Signs\n- Increasing pain after postoperative day 2-3\n- Erythema, induration, warmth around wound\n- Purulent discharge or dehiscence\n- Fever, leucocytosis, elevated CRP/procalcitonin\n\n## Indian Context: Common Pathogens\n- **Gram-positive**: S. aureus (30%), MRSA prevalence 40-60%\n- **Gram-negative**: E. coli (25%), K. pneumoniae, P. aeruginosa\n- **Anaerobes**: Frequent in colorectal surgery\n- **Fungal**: Increasing Candida in immunocompromised\n\n## Management Principles\n- Early recognition critical (usually days 3-7 post-op)\n- Blood cultures before antibiotics\n- Empirical broad-spectrum cover pending culture\n- Surgical drainage if abscess formation\n- Debridement of necrotic tissue essential",
        mnemonics: [
          { text: "SIRS for SSI", explanation: "Systemic inflammatory response signals infection" },
          { text: "C-EPS", explanation: "Culture, Empirical antibiotics, Purulent drainage, Surgical drainage" }
        ],
        keyPoints: [
          "SSI timing helps identify source",
          "Early signs often subtle; high index of suspicion needed",
          "Culture-guided therapy reduces resistance",
          "Surgical management as important as antibiotics"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Ch 129", edition: "21st" },
          { book: "New Delhi tuberculosis Association Guidelines on SSI", chapter: "2024", edition: "Latest" }
        ]
      },
      {
        layer: 4,
        slug: "wound-healing-exam-prep",
        title: "Wound Healing & Surgical Infections - Exam Prep",
        estimatedMinutes: 25,
        summary: "High-yield exam facts, controversy resolution, and NEET-PG focused content.",
        contentMd: "# High-Yield Exam Concepts\n\n## Timing of Maximum Tensile Strength\n- Day 5: 5% normal strength\n- Day 7: 10-15% strength (do not remove sutures early)\n- Day 14: 30% strength\n- Week 6: 80% strength (never reaches 100%)\n\n## Antibiotic Prophylaxis Rules (NMC Standard)\n- **Clean surgery**: Cephalosporin IV at induction, redose if >2 hours\n- **Clean-contaminated**: Continue 24 hours post-op\n- **Cardiac/vascular**: Continue 48 hours\n- **Vancomycin for MRSA**: Only if colonized/high-risk\n\n## Keloid vs Hypertrophic Scar\n- **Hypertrophic**: Remains within scar margins, may regress\n- **Keloid**: Extends beyond original wound (genetic, more in darker skin)\n- **Treatment**: Pressure garments, silicone, intralesional steroids, laser\n\n## Wound Complications\n- **Early**: Hematoma (drain), infection (culture), dehiscence (re-suture)\n- **Late**: Keloid, contracture, ulceration, malignancy (Marjolin ulcer)\n\n## Key Statistics\n- SSI increases ICU stay by 7-10 days\n- Cost increase per SSI: ₹50,000-100,000 in Indian hospitals\n- Mortality increase: 2-5 fold with SSI",
        mnemonics: [
          { text: "10-30-80", explanation: "Day 7 = 10%, Week 6 = 30-80% of final strength" },
          { text: "CHOP", explanation: "Culture, Hemostasis, Oxygenation, Prophylaxis for wound healing" }
        ],
        keyPoints: [
          "Never remove sutures before day 7-10",
          "Prophylaxis timing critical, not prolonged course",
          "SSI definition requires clinical signs + culture",
          "Keloid formation not preventable, only managed"
        ],
        textbookRefs: [
          { book: "NEET-PG Surgery Prep Notes 2024", chapter: "Wound Healing", edition: "Latest" },
          { book: "NMC CBME Curriculum for Surgery", chapter: "Competency 1.1", edition: "2023" }
        ]
      },
      {
        layer: 5,
        slug: "wound-healing-active-recall",
        title: "Wound Healing & Surgical Infections - Active Recall",
        estimatedMinutes: 20,
        summary: "Self-testing with clinical scenarios and rapid-fire questions.",
        contentMd: "# Active Recall & Clinical Scenarios\n\n## Case 1: Post-op Day 3 Fever\n**Scenario**: 45-year-old post appendicectomy (clean-contaminated), now fever 39°C, wound erythema, serosanguinous discharge.\n\n**Questions**:\n- What is most likely diagnosis? (SSI, surgical site infection)\n- What is your first step? (Blood culture, not antibiotics immediately)\n- Clean vs contaminated? (Contaminated due to appendix rupture)\n- Which organism likely? (E. coli + anaerobes most common)\n\n## Case 2: Wound Dehiscence Day 6\n**Scenario**: Obese diabetic patient, midline laparotomy for colorectal cancer, sudden discharge of serosanguinous fluid.\n\n**Questions**:\n- Why didnt sutures hold? (Diabetes delays collagen cross-linking)\n- Strength at day 6? (Only 10% of normal)\n- Management? (Re-suture under anesthesia, remove old sutures)\n- Prevention? (Longer suture intervals in risk patients)\n\n## Rapid-Fire Questions\n1. First phase of wound healing? (Inflammatory - 0-5 days)\n2. When does tensile strength plateau? (6 weeks)\n3. Which factor drives angiogenesis? (VEGF)\n4. SSI threshold bacterial load? (10^5 CFU/gram)\n5. Most common cause SSI in India? (S. aureus 30%)\n6. Prophylactic antibiotic duration clean surgery? (Induction only, max 24h)\n7. Difference keloid vs hypertrophic? (Extends beyond margin vs within)\n8. Lathyrogens block? (Lysyl oxidase)\n9. Wound strength day 7 vs day 14? (10-15% vs 30%)\n10. Why vitamin C essential? (Hydroxylation of proline for collagen)",
        mnemonics: [
          { text: "DEHISCENCE DAY 3-7", explanation: "Post-op infection peak, check culture not just antibiotics" },
          { text: "DIABETES DELAYS", explanation: "All phases of wound healing delayed in DM" }
        ],
        keyPoints: [
          "Recognize SSI by combination of signs + culture",
          "Dehiscence indicates insufficient tensile strength",
          "Diabetes most common systemic risk factor",
          "Culture guides therapy; empirical coverage reasonable initially"
        ],
        textbookRefs: [
          { book: "Bailey & Love's MCQ Companion", chapter: "Wound Healing", edition: "3rd" },
          { book: "AIIMS Delhi Surgery Question Bank 2023-24", chapter: "Module 1", edition: "Latest" }
        ]
      }
    ]
  },
  {
    topicCode: "SU-MOD-01-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "fluid-electrolyte-nutrition-foundation",
        title: "Fluid, Electrolyte & Nutrition - Foundation",
        estimatedMinutes: 25,
        summary: "Basic physiology of body fluid compartments and electrolyte distribution in surgical patients.",
        contentMd: "# Body Fluid & Electrolyte Physiology\n\n## Total Body Water Distribution\n- **Total body water**: 60% of body weight (70 kg = 42 L)\n- **Intracellular fluid (ICF)**: 40% of body weight = 28 L (2/3 of total)\n- **Extracellular fluid (ECF)**: 20% of body weight = 14 L (1/3 of total)\n  - **Plasma**: 5% body weight = 3.5 L (intravascular)\n  - **Interstitial**: 15% body weight = 10.5 L (interstitial spaces)\n\n## Electrolyte Distribution\n- **Sodium (Na+)**: ECF cation, 135-145 mEq/L plasma\n- **Potassium (K+)**: ICF cation, 3.5-5 mEq/L plasma (internal pool 140 mEq/L)\n- **Chloride (Cl-)**: ECF anion, 95-105 mEq/L\n- **Bicarbonate (HCO3-)**: ECF anion, 22-26 mEq/L\n- **Calcium**: 8.5-10.5 mg/dL (ionized 4.5-5.3 mg/dL)\n- **Magnesium**: 1.5-2.5 mEq/L\n\n## Osmolarity & Tonicity\n- **Plasma osmolality**: 285-295 mOsm/kg (maintained by kidneys)\n- **Starling forces**: Hydrostatic vs oncotic pressure determines fluid shift\n- **Colloid osmotic pressure**: Plasma proteins (albumin 70%) create oncotic pull",
        mnemonics: [
          { text: "60-40-20", explanation: "60% TBW, 40% ICF, 20% ECF of body weight" },
          { text: "Na-IN, K-OUT", explanation: "Sodium exocellular, potassium intracellular" }
        ],
        keyPoints: [
          "ECF divided into plasma and interstitial",
          "Sodium balance = water balance",
          "Potassium mostly intracellular but plasma critical",
          "Osmolarity maintained by kidneys and ADH"
        ],
        textbookRefs: [
          { book: "Guyton & Hall Textbook of Medical Physiology", chapter: "Ch 25-27", edition: "13th" },
          { book: "Sabiston Textbook of Surgery", chapter: "Ch 7", edition: "21st" }
        ]
      },
      {
        layer: 2,
        slug: "fluid-electrolyte-nutrition-mechanism",
        title: "Fluid, Electrolyte & Nutrition - Mechanism",
        estimatedMinutes: 30,
        summary: "Metabolic response to surgery and fluid shifts during perioperative period.",
        contentMd: "# Surgical Stress Response & Metabolic Changes\n\n## Neuroendocrine Response to Surgery\n- **Catecholamines**: Epinephrine, norepinephrine increase within minutes\n- **Cortisol**: Rises 2-3 fold, peaks 6-12 hours post-op\n- **ACTH**: Stimulates cortisol release\n- **ADH**: Increases water reabsorption, dilutional hyponatremia risk\n- **Renin-angiotensin**: Sodium conservation, fluid retention\n\n## Metabolic Rate Changes\n- **Hypermetabolism**: 10-30% increase in VO2 post-op\n- **Glucose intolerance**: Insulin resistance increases\n- **Lipolysis**: Fatty acid mobilization for energy\n- **Proteolysis**: Muscle breakdown 75-100 g/day\n- **Net negative nitrogen balance**: Major surgery loss 10-15 g N/day\n\n## Fluid Shifts in Surgery\n- **First-spacing**: Normal ECF redistribution, reversible\n- **Third-spacing**: Pathologic ECF accumulation (inflammation)\n- **Major surgery**: 4-6 L third-space fluid loss (internal bleeding into tissues)\n- **Recovery**: Third-space reabsorbs slowly over 3-7 days\n\n## Electrolyte Abnormalities Post-op\n- **Hyponatremia**: From ADH, dilutional (SIADH)\n- **Hyperkalemia**: From cell breakdown, rhabdomyolysis, acidosis\n- **Hypochloremia**: From vomiting, NG suction\n- **Hypomagnesemia**: Common, impairs cardiac function",
        mnemonics: [
          { text: "CAR", explanation: "Catecholamines, ACTH, Renin activate in surgery" },
          { text: "THIRD-SPACING 4-6L", explanation: "Major fluid loss into tissues from inflammatory response" }
        ],
        keyPoints: [
          "Surgical stress triggers immediate hormonal cascade",
          "Glucose intolerance normal; avoid hypoglycemia",
          "Third-spacing requires fluid replacement beyond normal",
          "Electrolyte disturbances common; monitoring essential"
        ],
        textbookRefs: [
          { book: "Sabiston Textbook of Surgery", chapter: "Ch 7 & 8", edition: "21st" },
          { book: "Oxford Textbook of Critical Care", chapter: "Ch 4", edition: "2016" }
        ]
      },
      {
        layer: 3,
        slug: "fluid-electrolyte-nutrition-clinical",
        title: "Fluid, Electrolyte & Nutrition - Clinical",
        estimatedMinutes: 35,
        summary: "Clinical fluid management, nutritional assessment, and perioperative nutritional support.",
        contentMd: "# Clinical Management of Fluids & Nutrition\n\n## Preoperative Assessment\n- **NPO status**: 6h solid food, 2h clear fluids (Indian standard)\n- **Dehydration**: Check skin turgor, mucous membranes, orthostatic BP\n- **Preoperative optimization**: Correct dehydration, hypokalemia before elective surgery\n- **Risk stratification**: ASA score guides fluid needs\n\n## Intraoperative Fluid Management\n- **Maintenance**: 2 mL/kg/h for first 10 kg, 1 mL/kg/h for next 10 kg, 0.5 mL/kg/h >20 kg\n- **Third-spacing**: 4-6 mL/kg/h for major surgery (gastrointestinal, vascular)\n- **Fluid type**: Crystalloids first-line (avoid hypotonic fluids)\n- **Blood loss**: Transfuse when Hgb <7 g/dL or clinical signs\n\n## Postoperative Fluid Orders\n- **Day 0-1**: Maintenance + replacement of estimated losses\n- **Day 2+**: Reassess as third-space reabsorbs (watch edema)\n- **Oral intake**: Restart as tolerated, avoid early feeding if GI surgery\n- **Monitoring**: Daily weights, UOP, electrolytes, creatinine\n\n## Nutritional Support\n- **When to start**: Elective surgery: wait 4-6 hours; emergency: after stabilization\n- **Route preference**: Oral > enteral > parenteral\n- **Protein requirement**: 1.5-2 g/kg/day post-op\n- **Calorie needs**: 25-30 kcal/kg/day\n- **Indian context**: Early diet crucial for recovery, cultural food preferences respected",
        mnemonics: [
          { text: "2-1-0.5", explanation: "Maintenance fluid rates by weight tiers" },
          { text: "NPO 6-2", explanation: "Six hours solid, two hours clear fluids" }
        ],
        keyPoints: [
          "Fluid needs increase with surgical stress and third-spacing",
          "Electrolyte monitoring critical postoperatively",
          "Early enteral nutrition improves outcomes",
          "Avoid overloading with IV fluids; monitor weights"
        ],
        textbookRefs: [
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Ch 8", edition: "27th" },
          { book: "NMC CBME Curriculum - Nutrition in Surgery", chapter: "2023", edition: "Latest" }
        ]
      },
      {
        layer: 4,
        slug: "fluid-electrolyte-nutrition-exam-prep",
        title: "Fluid, Electrolyte & Nutrition - Exam Prep",
        estimatedMinutes: 25,
        summary: "High-yield exam facts and calculation methods for fluid management.",
        contentMd: "# Exam-Focused Content\n\n## Fluid Deficit Calculation\n- **4-2-1 rule**: 4 mL/kg for first 10 kg, 2 mL/kg for next 10 kg, 1 mL/kg for remaining\n- **Dehydration classification**:\n  - Mild (5%): Slight dry mucosa, normal UOP\n  - Moderate (7-10%): Dry mucosa, decreased UOP\n  - Severe (>10%): Sunken eyes, weak pulse, anuria\n\n## Electrolyte Abnormalities - Differential\n- **Hyponatremia causes**: SIADH, excessive hypotonic fluids, renal disease\n- **Hypernatremia causes**: Inadequate water intake, excessive sweating, loop diuretics\n- **Hypokalemia signs**: Weakness, arrhythmias, paralytic ileus\n- **Hyperkalemia signs**: Peaked T waves, bradycardia, cardiac arrest\n\n## Crystalloid vs Colloid Debate\n- **Crystalloids**: First-line, large volume needed (3-4 L for 1 L blood loss)\n- **Colloids**: Reserved for ongoing losses, not superior in ICU trials\n- **In India**: Crystalloids standard; FFP, albumin for specific indications\n\n## Transfusion Thresholds (Updated Guidelines)\n- **Restrictive**: Transfuse Hgb <7 g/dL in stable patients\n- **Liberal**: Transfuse <9 g/dL if cardiac disease or sepsis\n- **Massive transfusion**: Use 1:1:1 FFP:RBC:Platelet ratio\n\n## Nutritional Scoring\n- **Nutritional Risk Index (NRI)**: (1.519 × serum albumin) + (0.417 × current weight/usual weight) × 100\n- **MUST score**: Identifies risk of malnutrition\n- **NMC requirement**: Assess nutrition in all surgical patients",
        mnemonics: [
          { text: "4-2-1", explanation: "Maintenance fluid calculation by weight" },
          { text: "HYPOkalemia HYPERarrhythmias", explanation: "Low K causes rhythm problems" }
        ],
        keyPoints: [
          "Deficit calculation essential for exam",
          "Know electrolyte abnormality signs and treatment",
          "Crystalloids first-line; know transfusion thresholds",
          "Early nutrition improves surgical outcomes"
        ],
        textbookRefs: [
          { book: "NEET-PG Surgery Fluid Management 2024", chapter: "Calculations", edition: "Latest" },
          { book: "Indian Guidelines on Blood Transfusion 2023", chapter: "Thresholds", edition: "Latest" }
        ]
      },
      {
        layer: 5,
        slug: "fluid-electrolyte-nutrition-active-recall",
        title: "Fluid, Electrolyte & Nutrition - Active Recall",
        estimatedMinutes: 20,
        summary: "Clinical scenarios and calculation practice.",
        contentMd: "# Clinical Scenarios & Problem-Solving\n\n## Case 1: Preoperative Dehydration\n**Scenario**: 50 kg female, mild dehydration (5%), scheduled for thyroidectomy.\n\n**Calculate**:\n- Deficit using 4-2-1? (4×10 + 2×10 + 1×30 = 40+20+30 = 90 mL/h maintenance)\n- Dehydration fluid loss? (50 kg × 5% = 2.5 L loss)\n- Replacement time? (Usually over 4 hours pre-op)\n- Total order? (90 mL/h × 4h + replacement fluids)\n\n## Case 2: Intraoperative Fluid Management\n**Scenario**: 70 kg male, major laparotomy for pancreatic cancer (3-hour surgery), estimated blood loss 800 mL.\n\n**Calculate**:\n- Maintenance (3 hours)? (2×10 + 1×10 + 0.5×50 = 45 mL/h × 3 = 135 mL)\n- Third-spacing (3 hours)? (5 mL/kg/h × 70 × 3 = 1050 mL)\n- Blood loss replacement? (800 mL = 2400 mL crystalloid)\n- Total order? (135 + 1050 + 2400 = 3585 mL)\n\n## Case 3: Postoperative Hyponatremia\n**Scenario**: Day 2 post-op, Na 128 mEq/L, UOP 200 mL/24h, fluid restricted, Osm 250.\n\n**Questions**:\n- Is this SIADH? (Yes: hyponatremia + dilute urine + low osmolality)\n- Treatment? (Fluid restriction to 800-1000 mL/day)\n- Correction rate? (2-4 mEq/L per day; avoid correction >8 mEq/L = cerebral edema)\n\n## Rapid-Fire\n1. TBW in 70 kg male? (42 L = 60%)\n2. ICF percentage? (40% = 28 L)\n3. Maintenance rate first 10 kg? (4 mL/kg = 40 mL/h)\n4. Major surgery fluid rate? (4-6 mL/kg/h plus maintenance)\n5. Protein need post-op? (1.5-2 g/kg/day)\n6. When restart diet post appendectomy? (4-6 hours)\n7. Transfuse if Hgb? (<7 g/dL restrictive; <9 if cardiac disease)\n8. SIADH definition? (Inappropriate ADH causing dilutional hyponatremia)\n9. Potassium replacement rate? (Max 20 mEq/hour IV)\n10. Third-space reabsorption timeline? (3-7 days post-op)",
        mnemonics: [
          { text: "4-2-1 CALC", explanation: "Weight-based maintenance fluid calculation" },
          { text: "SIADH = DILUTE", explanation: "Syndrome from dilute urine post-op" }
        ],
        keyPoints: [
          "Fluid calculations must be accurate for exam",
          "Know common electrolyte issues post-op",
          "Early nutrition improves healing",
          "Monitor daily weights to assess third-space"
        ],
        textbookRefs: [
          { book: "Bailey & Love's MCQ Companion", chapter: "Fluid Management", edition: "3rd" },
          { book: "AIIMS Delhi Surgery Cases 2023-24", chapter: "Perioperative Management", edition: "Latest" }
        ]
      }
    ]
  },
  {
    topicCode: "SU-MOD-01-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "preoperative-postoperative-care-foundation",
        title: "Preoperative & Postoperative Care - Foundation",
        estimatedMinutes: 22,
        summary: "Basic principles of surgical preparation and immediate postoperative management.",
        contentMd: "# Surgical Preparation & Recovery Fundamentals\n\n## Preoperative Assessment Goals\n- **History**: Medical/surgical history, medications, allergies, functional status\n- **Physical examination**: Baseline vital signs, cardiac/respiratory exam\n- **Risk stratification**: ASA score, cardiac risk, diabetes control\n- **Investigations**: CBC, renal function, glucose, coagulation studies (based on risk)\n- **Consent**: Informed decision, understanding of procedure, alternatives, risks\n\n## ASA Physical Status Classification\n- **ASA I**: Healthy (mortality <0.1%)\n- **ASA II**: Mild systemic disease (mortality 0.1-0.5%)\n- **ASA III**: Severe systemic disease (mortality 0.5-5%)\n- **ASA IV**: Severe life-threatening disease (mortality 5-50%)\n- **ASA V**: Moribund (mortality >50%)\n- **E suffix**: Emergency surgery (doubles mortality)\n\n## Postoperative Recovery Phases\n- **Immediate recovery**: PACU monitoring (0-2 hours)\n- **Early postoperative**: Ward care (2-24 hours)\n- **Late postoperative**: Discharge planning (>24 hours)\n\n## PACU Monitoring\n- **Vital signs**: BP, HR, RR, SpO2, temperature every 15 minutes\n- **Pain assessment**: VAS score, analgesic administration\n- **Wound status**: Dressing intact, bleeding, drainage\n- **Fluid intake/output**: IV fluids, catheter output\n- **Level of consciousness**: Orient to person, place, time",
        mnemonics: [
          { text: "ASA I-V", explanation: "Physical status from healthy to moribund" },
          { text: "PACU 0-2h", explanation: "Immediate postoperative unit monitoring" }
        ],
        keyPoints: [
          "ASA score predicts perioperative risk",
          "PACU monitoring prevents early complications",
          "Pain control essential for recovery",
          "Baseline vitals critical for comparison"
        ],
        textbookRefs: [
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Ch 9", edition: "27th" },
          { book: "Sabiston Textbook of Surgery", chapter: "Ch 9", edition: "21st" }
        ]
      },
      {
        layer: 2,
        slug: "preoperative-postoperative-care-mechanism",
        title: "Preoperative & Postoperative Care - Mechanism",
        estimatedMinutes: 28,
        summary: "Pathophysiology of anesthetic risks and complications during recovery.",
        contentMd: "# Anesthetic Complications & Recovery Pathophysiology\n\n## Anesthetic Effects on Physiology\n- **Airway**: General anesthesia impairs protective reflexes\n- **Respiratory**: Decreased FRC, atelectasis formation from mechanical ventilation\n- **Cardiovascular**: Myocardial depression, vasodilation, hypotension\n- **Temperature**: Central thermoregulation lost, hypothermia common\n- **Coagulation**: Hemodilution from IV fluids, platelet dysfunction\n\n## Emergence Complications\n- **Airway obstruction**: From tongue collapse, laryngospasm, edema\n- **Hypoventilation**: Residual neuromuscular blockade\n- **Hypoxemia**: From atelectasis, inadequate oxygenation\n- **Delirium**: Emergence agitation, confusion\n- **Hypothermia**: Core temperature 1-2°C below normal post-op\n\n## Pain Pathophysiology\n- **Nociception**: Local inflammatory mediators (PGE2, bradykinin, substance P)\n- **Wind-up pain**: Repeated C-fiber stimulation sensitizes spinal cord\n- **Opioid receptor distribution**: Mu receptors on afferent nociceptors\n- **Multimodal analgesia**: Combine mechanisms (opioid, NSAIDs, regional blocks)\n\n## Postoperative Nausea & Vomiting (PONV)\n- **Chemoreceptor trigger zone**: Sensitive to opioids, anesthetics\n- **Vestibular**: From movement, anesthesia\n- **Vagal**: From gastric distension, peritoneal manipulation\n- **Risk factors**: Female, non-smoker, opioid use, abdominal surgery\n- **Prevention**: Ondansetron, dexamethasone, minimize opioids",
        mnemonics: [
          { text: "AIRWAY-CVS-TEMP-COAG", explanation: "Anesthesia affects all major systems" },
          { text: "CTZ-VEST-VAG", explanation: "Three pathways for PONV" }
        ],
        keyPoints: [
          "Anesthetic effects persist 2-4 hours post-op",
          "Multimodal analgesia reduces opioid requirements",
          "PONV multifactorial; prevention important",
          "Hypothermia increases complications and recovery time"
        ],
        textbookRefs: [
          { book: "Miller's Anesthesia", chapter: "Ch 29-31", edition: "9th" },
          { book: "Sabiston Textbook of Surgery", chapter: "Ch 10", edition: "21st" }
        ]
      },
      {
        layer: 3,
        slug: "preoperative-postoperative-care-clinical",
        title: "Preoperative & Postoperative Care - Clinical",
        estimatedMinutes: 33,
        summary: "Clinical risk assessment, preparation protocols, and complications management.",
        contentMd: "# Clinical Preoperative Optimization & Management\n\n## Cardiac Risk Assessment\n- **Lee Revised Cardiac Risk Index**: Predicts cardiac events\n  - High-risk surgery (AAA, major vascular)\n  - Ischemic heart disease history\n  - Heart failure history\n  - Cerebrovascular disease\n  - Diabetes on insulin\n  - Creatinine >2 mg/dL\n- **Risk score 0**: <1% cardiac event\n- **Risk score 3+**: >5% cardiac event\n\n## Preoperative Optimization in India\n- **Anemia correction**: Preop Hgb target >7 g/dL; >9 g/dL if cardiac disease\n- **Blood pressure**: Control to <180/110 mmHg; avoid abrupt cessation beta-blockers\n- **Glucose control**: Target 100-180 mg/dL perioperatively\n- **Anticoagulation**: Warfarin stopped 3-5 days, bridging as needed\n- **Aspirin**: Continue unless major bleeding risk\n\n## Postoperative Complication Prevention\n- **DVT prophylaxis**: Mechanical (SCD) ± pharmacological (LMWH) based on risk\n- **Pulmonary**: Incentive spirometry, early mobilization, adequate pain control\n- **Infection**: Appropriate prophylaxis, sterile technique, timely hairclipping\n- **Renal**: Maintain urine output >0.5 mL/kg/h, avoid nephrotoxins\n\n## Early Mobilization Protocol\n- **Day 0-1**: Sitting up in bed, deep breathing exercises\n- **Day 1-2**: Dangling legs, standing with support\n- **Day 2-3**: Walking with assistance\n- **Benefit**: Reduces DVT, atelectasis, improves glucose control",
        mnemonics: [
          { text: "LGDAC", explanation: "Lee index: heaRt disease, GDm, AAA, Creatinine" },
          { text: "EARLY MOBILIZATION", explanation: "Prevents DVT, respiratory, renal complications" }
        ],
        keyPoints: [
          "Risk stratification guides optimization intensity",
          "Continue essential medications; stop others 2-4 weeks",
          "Early mobilization core to prevention",
          "DVT prophylaxis risk-dependent, not uniform"
        ],
        textbookRefs: [
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Ch 9", edition: "27th" },
          { book: "ACC/AHA Guidelines on Perioperative Cardiovascular Evaluation", chapter: "2023", edition: "Latest" }
        ]
      },
      {
        layer: 4,
        slug: "preoperative-postoperative-care-exam-prep",
        title: "Preoperative & Postoperative Care - Exam Prep",
        estimatedMinutes: 24,
        summary: "High-yield exam facts and calculations for NEET-PG.",
        contentMd: "# Exam-Focused Content & Mnemonics\n\n## Preoperative Fasting (NPO Rules)\n- **Solids & milk**: 6 hours\n- **Clear fluids**: 2 hours\n- **Premedication**: 30-60 minutes before induction\n- **Aspiration risk**: Diabetes, reflux, obesity - consider rapid sequence\n\n## ASA Classification Mortality\n- **ASA I**: <0.1% perioperative mortality\n- **ASA II**: 0.1-0.5%\n- **ASA III**: 0.5-5% mortality\n- **ASA IV**: 5-50% mortality\n- **ASA V**: >50% mortality\n- **E modifier**: Emergency status doubles risk\n\n## Postoperative Vital Sign Norms\n- **HR**: 80-100 bpm (avoid tachycardia >110)\n- **BP**: Within 20% of baseline\n- **RR**: 12-20; >20 suggests pain/hypoxemia\n- **SpO2**: >94% on room air (>97% on O2)\n- **Temperature**: Avoid <35.5°C (actively warm)\n\n## Anticoagulation Management (NMC Standard)\n- **Warfarin**: Stop 3-5 days pre-op, bridge if high-risk\n- **Aspirin**: Continue except intracranial/spinal procedures\n- **Clopidogrel**: Stop 5-7 days\n- **LMWH prophylaxis**: Start day 0-1 post-op if immobile\n\n## DVT Risk Stratification\n- **Low risk**: Minor surgery, no risk factors\n- **Moderate**: Major surgery without additional risk\n- **High**: Major surgery + immobility/malignancy/prior VTE\n- **Very high**: Hip/pelvis fracture, prior VTE + major surgery",
        mnemonics: [
          { text: "NPO 6-2", explanation: "Six hours solids, two hours clear fluids" },
          { text: "ASA I vs IV: 0.1% vs 50%", explanation: "Hundred-fold mortality difference" }
        ],
        keyPoints: [
          "NPO timing prevents aspiration",
          "ASA score essential for risk discussion",
          "Early vitals abnormalities signal complications",
          "DVT prophylaxis individualized by risk"
        ],
        textbookRefs: [
          { book: "NEET-PG Surgery Perioperative Care 2024", chapter: "Optimization", edition: "Latest" },
          { book: "NMC CBME Curriculum - Preoperative Assessment", chapter: "2023", edition: "Latest" }
        ]
      },
      {
        layer: 5,
        slug: "preoperative-postoperative-care-active-recall",
        title: "Preoperative & Postoperative Care - Active Recall",
        estimatedMinutes: 21,
        summary: "Clinical scenarios and rapid-fire questions.",
        contentMd: "# Clinical Decision-Making & Active Recall\n\n## Case 1: Preoperative Risk Assessment\n**Scenario**: 68-year-old male, diabetic (insulin), history of MI 8 months ago, Cr 2.1 mg/dL, undergoing AAA repair.\n\n**Lee Index Assessment**:\n- High-risk surgery (AAA)? Yes\n- Ischemic heart disease (prior MI)? Yes\n- Diabetes on insulin? Yes\n- Creatinine >2? Yes\n- Total score? 4 (very high risk, >5% cardiac event)\n- Recommendation? Consider cardiology clearance, optimize BP/glucose, inotrope availability\n\n## Case 2: Post-op Day 1 Problem\n**Scenario**: Post appendectomy, HR 110, BP 95/60, RR 22, cold extremities, UOP 150 mL/4h.\n\n**Questions**:\n- What is happening? (Shock - assess for infection, bleeding, dehydration)\n- Most likely cause day 1? (Hypovolemia/hemorrhage)\n- First step? (IV access, fluid bolus, labs)\n- When worry sepsis? (Day 2-3 with fever, lactate)\n\n## Case 3: Anticoagulation Dilemma\n**Scenario**: 55-year-old on warfarin (INR 2.8) for mechanical heart valve, needs urgent appendectomy.\n\n**Management**:\n- Stop warfarin? (Yes, yesterday)\n- Fresh frozen plasma? (Yes, 10-15 mL/kg to reverse)\n- Bridge heparin? (Not needed for urgent appendectomy)\n- Restart when? (Day 2-3 post-op, resume heparin first)\n\n## Rapid-Fire\n1. NPO solid food? (6 hours)\n2. NPO clear fluids? (2 hours)\n3. ASA I mortality? (<0.1%)\n4. Emergency adds what to mortality? (2-fold increase)\n5. HR threshold for concern? (>110 bpm)\n6. Normal core temp post-op? (35.5-37°C)\n7. When start DVT prophylaxis? (Day 0-1)\n8. Aspiration risk marker? (Reflux, diabetes, obesity)\n9. Premedication timing? (30-60 min before)\n10. Early mobilization benefit? (Prevents DVT, atelectasis, hyperglycemia)",
        mnemonics: [
          { text: "LEE HIGH-RISK = AAA or MI + DM + Cr>2", explanation: "High cardiac risk warrants optimization" },
          { text: "DAY 1 SHOCK = HYPOVOLEMIA", explanation: "Bleeding/dehydration most common cause" }
        ],
        keyPoints: [
          "Risk assessment drives optimization intensity",
          "Vital sign abnormalities warrant investigation",
          "Anticoagulation management critical for safety",
          "Early mobilization prevents major complications"
        ],
        textbookRefs: [
          { book: "Bailey & Love's MCQ Companion", chapter: "Perioperative Care", edition: "3rd" },
          { book: "AIIMS Delhi Perioperative Management Cases", chapter: "2023-24", edition: "Latest" }
        ]
      }
    ]
  },
  {
    topicCode: "SU-MOD-01-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "blood-transfusion-hemostasis-foundation",
        title: "Blood Transfusion & Hemostasis - Foundation",
        estimatedMinutes: 23,
        summary: "Basic physiology of hemostasis and blood component composition.",
        contentMd: "# Hemostasis & Blood Component Basics\n\n## Primary Hemostasis (Platelet Phase)\n- **Platelet adhesion**: vWF binds to collagen, platelets attach\n- **Platelet activation**: Shape change, pseudopod formation\n- **Platelet aggregation**: Bridge formation via fibrinogen\n- **Platelet plug**: Primary hemostasis, stops small vessel bleeding\n- **Normal count**: 150,000-400,000/µL\n\n## Secondary Hemostasis (Coagulation Cascade)\n- **Intrinsic pathway**: FVIII, FIX, FXI, FXII (PTT prolonged)\n- **Extrinsic pathway**: FII, FV, FVII, FX (PT prolonged)\n- **Common pathway**: FII, FV, FX → Thrombin → Fibrin\n- **Thrombin**: Central enzyme, converts fibrinogen to fibrin\n- **Fibrin clot**: Cross-linked by Factor XIII for stability\n\n## Blood Products Composition\n- **RBC**: Hemoglobin for oxygen transport (Hgb 12-16 g/dL normal)\n- **Platelets**: Hemostasis, normal count 150-400K\n- **WBC**: Immunity (not transfused in packed RBC)\n- **FFP (Fresh Frozen Plasma)**: All coagulation factors\n- **Cryoprecipitate**: Fibrinogen, vWF, FVIII, FXI\n- **Prothrombin Complex (PCC)**: Factors II, VII, IX, X\n\n## INR & PT/PTT Interpretation\n- **INR**: Standardized PT, measures extrinsic + common pathway\n- **PT normal**: 11-14 seconds (INR 1.0)\n- **PTT normal**: 25-35 seconds (intrinsic + common)\n- **Bleeding time**: Outdated, no longer recommended",
        mnemonics: [
          { text: "PRIMARY = PLATELETS, SECONDARY = COAGULATION", explanation: "Two-stage hemostasis" },
          { text: "PT-INR: Extrinsic+Common, PTT: Intrinsic+Common", explanation: "Different pathways tested" }
        ],
        keyPoints: [
          "Platelets stop bleeding within minutes",
          "Coagulation cascade provides stable clot",
          "Factor XIII cross-links for clot strength",
          "Each pathway tests different factors"
        ],
        textbookRefs: [
          { book: "Williams Hematology", chapter: "Ch 6-8", edition: "10th" },
          { book: "Sabiston Textbook of Surgery", chapter: "Ch 14", edition: "21st" }
        ]
      },
      {
        layer: 2,
        slug: "blood-transfusion-hemostasis-mechanism",
        title: "Blood Transfusion & Hemostasis - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathophysiology of bleeding disorders and transfusion effects.",
        contentMd: "# Hemostatic Disorders & Transfusion Pathophysiology\n\n## Coagulation Disorders Classification\n- **Vitamin K deficiency**: Affects II, VII, IX, X (quick INR spike)\n- **Liver disease**: Affects all factors except VIII (PT > PTT)\n- **DIC (Disseminated Intravascular Coagulation)**: Thrombin generation, fibrin deposition\n  - Triggers: Sepsis, trauma, cancer, obstetric emergencies\n  - Lab pattern: PT↑, PTT↑, Fibrinogen↓, D-dimer↑↑, Platelets↓\n  - Bleeding + thrombosis paradoxically\n- **Anticoagulation**: Warfarin (Vitamin K path), Heparin (IIa, IIa inhibitor)\n\n## Platelet Dysfunction\n- **Quantitative**: Thrombocytopenia (<100K causes bleeding)\n- **Qualitative**: Uremia, aspirin, von Willebrand disease\n- **Transfusion refractoriness**: Alloimmunization, sepsis, splenomegaly\n\n## Massive Transfusion Protocol (MTP)\n- **Definition**: >4 units RBC in 1 hour or >10 units in 24 hours\n- **Complications**: Dilutional coagulopathy, hypothermia, metabolic acidosis\n- **1:1:1 ratio**: 1 unit RBC : 1 FFP : 1 Platelet (updated from 2:1:1)\n- **Goal**: Maintain Hgb >7, INR <1.5, Platelet >50K\n\n## Transfusion Immunology\n- **ABO incompatibility**: Immediate hemolytic reaction (IgM antibodies)\n- **Rh sensitization**: Delayed reaction, Rh-negative women risk for hydrops in pregnancy\n- **Alloimmunization**: From repeated transfusions, multiple antibodies\n- **Transfusion-related acute lung injury (TRALI)**: HLA/HNA antibodies, lung injury",
        mnemonics: [
          { text: "DIC = CONSUMPTION COAGULOPATHY", explanation: "PT↑PTT↑Fib↓Plat↓" },
          { text: "MTP 1:1:1", explanation: "RBC:FFP:Platelets ratio in massive transfusion" }
        ],
        keyPoints: [
          "DIC paradoxically causes bleeding + clotting",
          "Vitamin K deficiency rapidly correctable",
          "Massive transfusion causes dilutional coagulopathy",
          "ABO mismatch immediately fatal; check twice"
        ],
        textbookRefs: [
          { book: "Sabiston Textbook of Surgery", chapter: "Ch 14", edition: "21st" },
          { book: "American College of Surgeons - ATLS Hemorrhage Chapter", chapter: "2023", edition: "Latest" }
        ]
      },
      {
        layer: 3,
        slug: "blood-transfusion-hemostasis-clinical",
        title: "Blood Transfusion & Hemostasis - Clinical",
        estimatedMinutes: 32,
        summary: "Clinical bleeding evaluation and transfusion management in surgery.",
        contentMd: "# Clinical Assessment & Transfusion Management\n\n## Preoperative Bleeding History\n- **Key questions**: Excessive bruising, epistaxis, menorrhagia, post-surgical bleeding?\n- **Family history**: Hemophilia, vWD, easy bruising pattern\n- **Medications**: Aspirin (7 days), NSAIDs (24-48h), Warfarin (3-5 days), Clopidogrel (5-7 days)\n- **Tests indicated**: CBC, PT-INR, PTT, vWF panel (if suspicion)\n\n## Intraoperative Bleeding Management\n- **Minor bleeding**: Pressure, topical agents (thrombin, gelatin), monitor\n- **Moderate bleeding**: Transfuse RBC if Hgb <7 g/dL or symptoms\n- **Major bleeding**: Large bore access, unlock blood bank, MTP activation\n- **Coagulopathy correction**: FFP if PT >1.5× normal, Platelets if <50K, Cryo if Fib <100\n\n## Blood Bank Procedures in India\n- **Crossmatch**: Major (recipient serum + donor RBC), Minor (recipient RBC + donor serum)\n- **Type & Screen**: ABO/Rh + antibody screen\n- **Emergency release**: O negative without crossmatch if life-threatening\n- **Cell salvage**: Autotransfusion intraoperatively (contraindicated in malignancy, sepsis)\n\n## Transfusion Thresholds (Restrictive Strategy)\n- **Stable patient**: Transfuse Hgb <7 g/dL\n- **Cardiac disease**: Transfuse Hgb <9 g/dL\n- **Acute hemorrhage**: Aggressive transfusion per MTP\n- **Indian practice**: Often transfuse higher (Hgb <8-9) due to tolerance variability\n\n## Transfusion Reactions\n- **Acute**: Fever (most common), chills, hemolysis (rare)\n- **Delayed**: Alloimmunization, Graft-versus-host disease (rare)\n- **TRALI**: Dyspnea, hypoxemia within 6 hours\n- **Management**: Stop transfusion, IV access, diuretics, support",
        mnemonics: [
          { text: "BLEEDING HISTORY: BEEMD", explanation: "Bruising, Epistaxis, Easy bleeding, Menorrhagia, Drugs" },
          { text: "RBC-FFP-CRYO", explanation: "Sequence for massive transfusion correction" }
        ],
        keyPoints: [
          "Preoperative history identifies high-risk patients",
          "Restrictive transfusion safer in stable patients",
          "Cell salvage valuable but contraindicated in malignancy",
          "Coagulopathy correction component of resuscitation"
        ],
        textbookRefs: [
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Ch 14", edition: "27th" },
          { book: "Ministry of Health - Indian Blood Transfusion Guidelines 2023", chapter: "Procedures", edition: "Latest" }
        ]
      },
      {
        layer: 4,
        slug: "blood-transfusion-hemostasis-exam-prep",
        title: "Blood Transfusion & Hemostasis - Exam Prep",
        estimatedMinutes: 26,
        summary: "High-yield facts and differential diagnosis for bleeding disorders.",
        contentMd: "# Exam-Focused Content\n\n## PT-INR vs PTT Interpretation\n- **Both elevated**: Common pathway issue or DIC (check fibrinogen, D-dimer)\n- **Only PT elevated**: Factor VII deficiency, vitamin K deficiency, warfarin\n- **Only PTT elevated**: Heparin effect, Factor XII/XI deficiency, lupus anticoagulant\n- **Normal with bleeding**: Platelet disorder, vWD, fibrinolysis\n\n## Vitamin K Deficiency Correction\n- **Mechanism**: Carboxylation of factors II, VII, IX, X\n- **Common causes**: Antibiotics, cholestasis, malabsorption\n- **Lab pattern**: PT↑ > PTT (Factor VII shortest half-life)\n- **Correction**: Vitamin K1 10 mg IV (takes 12-24 hours), FFP for immediate correction\n\n## DIC Scoring & Diagnosis\n- **Triggers**: Sepsis (most common), trauma, cancer, abruption\n- **Classic lab**: Fibrinogen↓, D-dimer↑↑, Platelets↓, PT↑, PTT↑\n- **Bleeding manifestations**: Mucosal, GI, intracranial, generalized oozing\n- **Treatment**: Treat underlying cause, support (RBC/FFP/Platelets), anticoagulation controversial\n\n## Transfusion Reaction Recognition\n- **Acute hemolytic**: Fever, chills, hemoglobinuria, renal failure (same-day reaction)\n- **Febrile non-hemolytic**: Most common, fever/chills without hemolysis\n- **Allergic**: Urticaria, pruritus (benign, stop briefly)\n- **TRALI**: Acute dyspnea/hypoxemia within 6h (life-threatening)\n\n## Component Selection\n- **RBC**: Oxygen delivery, Hgb too low\n- **FFP**: INR >1.5, massive transfusion\n- **Platelets**: Count <50K and actively bleeding\n- **Cryoprecipitate**: Fibrinogen <100 mg/dL or massive transfusion\n- **Albumin**: Volume expansion, not coagulation\n\n## Indian Blood Bank Standards\n- **ABO blood group**: Must type before transfusion\n- **Rh status**: Critical for women of childbearing age\n- **Infectious screening**: HIV, Hepatitis B/C, Syphilis (repeat testing 90 days)\n- **Emergency transfusion**: O Rh-negative without typing",
        mnemonics: [
          { text: "PT↑ ONLY = VITAMIN K", explanation: "Factor VII shortest half-life" },
          { text: "DIC = FIBRINOGEN DOWN, D-DIMER UP", explanation: "Consumption coagulopathy" }
        ],
        keyPoints: [
          "PT/PTT interpretation guides diagnosis",
          "Vitamin K deficiency corrects within 24 hours",
          "DIC mortality high; treat underlying cause",
          "Know component thresholds and indications"
        ],
        textbookRefs: [
          { book: "NEET-PG Surgery Hemostasis 2024", chapter: "Disorders & Transfusion", edition: "Latest" },
          { book: "NMC CBME - Blood Transfusion Guidelines 2023", chapter: "Procedures", edition: "Latest" }
        ]
      },
      {
        layer: 5,
        slug: "blood-transfusion-hemostasis-active-recall",
        title: "Blood Transfusion & Hemostasis - Active Recall",
        estimatedMinutes: 22,
        summary: "Clinical scenarios and differential diagnosis practice.",
        contentMd: "# Clinical Decision-Making Scenarios\n\n## Case 1: DIC in Septic Patient\n**Scenario**: 60-year-old with septic shock from pneumonia, PT 18 sec, PTT 45 sec, Fibrinogen 80 mg/dL, D-dimer >500 (normal <0.5), Platelets 85K, bleeding from lines.\n\n**Questions**:\n- Is this DIC? (Yes: SIRS, coagulopathy, fibrinogen↓, D-dimer↑↑, platelets↓)\n- Treatment priorities? (1) Treat sepsis/source, 2) FFP if active bleeding, 3) Platelets, 4) Antibiotics\n- What NOT to do? (Anticoagulation controversial, avoid unless thrombosis)\n- Expected outcome? (Mortality 40-80% with DIC)\n\n## Case 2: Warfarin Reversal for Surgery\n**Scenario**: 70-year-old on warfarin (INR 3.5) for atrial fibrillation, needs emergency hernia repair.\n\n**Management**:\n- Stop warfarin? (Yes, immediately)\n- Check INR? (Yes, daily until <1.5)\n- FFP or PCC? (PCC preferred: 4-factor PCC 25 units/kg)\n- Vitamin K? (Yes, 5-10 mg IV, takes 12-24h)\n- Restart anticoagulation? (Heparin day 1-2 post-op, then warfarin)\n\n## Case 3: Massive Transfusion\n**Scenario**: 35-year-old, severe motor vehicle accident, rapid infuser running, estimated 3000 mL blood loss, BP 90/60, HR 130, weak pulse.\n\n**Calculate**:\n- Units needed? (Use 1:1:1 MTP - activate 4 RBC, 4 FFP, 1 Plt)\n- Reassess at 4 units? (Yes, recheck CBC, coagulation, vitals)\n- What else? (Activate cell salvage, type & cross, consider damage control surgery)\n- Complications risk? (Hypothermia, acidosis, coagulopathy, ARDS)\n\n## Rapid-Fire\n1. Primary hemostasis: platelets or coagulation? (Platelets)\n2. PT-INR test pathway? (Extrinsic + common)\n3. PTT test pathway? (Intrinsic + common)\n4. Factor with shortest half-life? (Factor VII - 4-6 hours)\n5. Vitamin K corrects in? (12-24 hours)\n6. FFP contains? (All factors, fibrinogen, albumin)\n7. Cryoprecipitate has? (Fibrinogen, vWF, FVIII, FXI)\n8. Platelet transfusion threshold? (50K if bleeding, 10-20K routine)\n9. RBC transfusion threshold stable? (7 g/dL)\n10. MTP RBC:FFP:Platelet? (1:1:1 ratio)",
        mnemonics: [
          { text: "DIC = TREAT SOURCE FIRST", explanation: "Supportive care for coagulopathy second" },
          { text: "WARFARIN = PCC + VIT K", explanation: "Fast correction + long-acting prevention" }
        ],
        keyPoints: [
          "DIC diagnosis clinical + laboratory",
          "Warfarin reversal requires both PCC and Vitamin K",
          "Massive transfusion follows protocol, not clinical guessing",
          "Reassess frequently; complications evolving"
        ],
        textbookRefs: [
          { book: "Bailey & Love's MCQ Companion", chapter: "Hemostasis & Transfusion", edition: "3rd" },
          { book: "AIIMS Delhi Hemorrhage Management Cases 2023-24", chapter: "Massive Transfusion", edition: "Latest" }
        ]
      }
    ]
  },
  {
    topicCode: "SU-MOD-02-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "atls-primary-survey-foundation",
        title: "ATLS & Primary Survey - Foundation",
        estimatedMinutes: 20,
        summary: "Fundamentals of Advanced Trauma Life Support primary survey (ABCDE).",
        contentMd: "# ATLS Primary Survey Fundamentals\n\n## ABCDE Framework\n- **A (Airway)**: Maintain airway with C-spine protection\n- **B (Breathing)**: Ensure adequate ventilation\n- **C (Circulation)**: Control hemorrhage, maintain perfusion\n- **D (Disability)**: Neurological assessment\n- **E (Exposure)**: Remove clothing, examine completely, prevent hypothermia\n\n## Airway Assessment\n- **Conscious patient**: Ask name, location, date (GCS assessment)\n- **Signs of compromise**: Stridor, hoarseness, dyspnea, cyanosis\n- **Jaw thrust**: First-line airway maneuver with C-spine protection\n- **Suction if needed**: Foreign bodies, blood, vomit\n- **Oxygen**: Non-rebreather mask 15 L/min (target SpO2 >90%)\n\n## Breathing Assessment\n- **Look**: Chest symmetry, accessory muscle use, tracheal deviation\n- **Listen**: Breath sounds bilaterally, stridor, wheeze\n- **Feel**: Subcutaneous emphysema, crepitus, rib fractures\n- **Percussion**: Hyperresonance (pneumothorax), dullness (hemothorax)\n- **Pulse oximetry**: Target SpO2 >90%\n\n## Circulation Assessment\n- **Hemorrhage control**: Direct pressure, tourniquet if needed\n- **Pulse check**: Carotid (if unconscious) OR radial (if conscious)\n- **Skin perfusion**: Capillary refill <2 seconds, warm extremities\n- **Triage category**: Green (walking), Yellow (stable), Red (unstable), Black (expectant)\n\n## Disability Assessment\n- **AVPU scale**: Alert, Verbal, Pain, Unresponsive\n- **GCS score**: Eye opening (4) + Verbal (5) + Motor (6) = 15 max\n- **Pupils**: Size, reactivity, symmetry\n- **Lateralizing signs**: Unequal pupils, hemiparesis",
        mnemonics: [
          { text: "ABCDE", explanation: "Airway, Breathing, Circulation, Disability, Exposure" },
          { text: "AVPU", explanation: "Alert, Verbal, Pain, Unresponsive" }
        ],
        keyPoints: [
          "C-spine protection automatic until cleared",
          "Direct pressure controls most bleeding",
          "GCS guides resuscitation and prognosis",
          "Reassess frequently for deterioration"
        ],
        textbookRefs: [
          { book: "American College of Surgeons - ATLS Student Course Manual", chapter: "Ch 2", edition: "10th" },
          { book: "Sabiston Textbook of Surgery", chapter: "Ch 11", edition: "21st" }
        ]
      },
      {
        layer: 2,
        slug: "atls-primary-survey-mechanism",
        title: "ATLS & Primary Survey - Mechanism",
        estimatedMinutes: 28,
        summary: "Pathophysiology of life-threatening injuries and physiological compensation.",
        contentMd: "# Trauma Pathophysiology & Compensation\n\n## Airway Emergencies Pathophysiology\n- **Laryngeal injury**: Blunt trauma ruptures larynx, presents with stridor\n- **Epiglottitis**: Swelling from inflammation or infection\n- **Tension pneumothorax**: Intrapleural pressure exceeds atmospheric, cardiovascular collapse\n- **Airway edema**: Progressive narrowing, impending obstruction\n\n## Hemorrhagic Shock Stages (Class I-IV)\n- **Class I (<15% blood loss, <750 mL)**: Minimal compensation, stable vitals\n- **Class II (15-30%, 750-1500 mL)**: Tachycardia, tachypnea, normal BP\n- **Class III (30-40%, 1500-2000 mL)**: Tachycardia 120+, hypotension, confusion\n- **Class IV (>40%, >2000 mL)**: Severe hypotension, severe confusion, near-death\n\n## Compensatory Mechanisms\n- **Sympathetic activation**: Catecholamines increase HR, SVR\n- **Baroreceptor reflex**: Maintains BP despite volume loss\n- **Cerebral autoregulation**: Maintains brain perfusion until MAP <60\n- **Failure in elderly/medicated**: No tachycardia despite Class III-IV hemorrhage\n\n## Tension Pneumothorax Pathophysiology\n- **One-way valve**: Air enters on inspiration, exits blocked on expiration\n- **Progressive pressure**: Compresses lung, mediastinal shift, impairs venous return\n- **Cardiovascular collapse**: ↓CVP, ↓Cardiac output, ↓BP\n- **Emergency decompression**: Needle 2nd ICS, then chest tube\n\n## Brain Injury Physiology\n- **Primary injury**: Axonal shearing, contusion at time of impact (irreversible)\n- **Secondary injury**: Cerebral edema, hypoxia, hypotension (preventable)\n- **Cushing triad**: Hypertension, bradycardia, irregular respirations (late finding, poor sign)\n- **Increased ICP**: From edema, blood, CSF; impairs cerebral perfusion",
        mnemonics: [
          { text: "CLASS I-IV: 0-15%, 15-30%, 30-40%, >40%", explanation: "Hemorrhage classification" },
          { text: "TENSION = SHOCK + HYPOXIA", explanation: "Double threat from airway and circulation" }
        ],
        keyPoints: [
          "Early compensation masks blood loss",
          "No tachycardia should raise suspicion for compensation failure",
          "Tension pneumothorax immediately fatal without decompression",
          "Secondary brain injury preventable; avoid hypoxia/hypotension"
        ],
        textbookRefs: [
          { book: "American College of Surgeons - ATLS Manual", chapter: "Ch 3-4", edition: "10th" },
          { book: "Sabiston Textbook of Surgery", chapter: "Ch 11", edition: "21st" }
        ]
      },
      {
        layer: 3,
        slug: "atls-primary-survey-clinical",
        title: "ATLS & Primary Survey - Clinical",
        estimatedMinutes: 32,
        summary: "Clinical management of life-threatening injuries in primary survey.",
        contentMd: "# Clinical Management of Primary Survey Findings\n\n## Airway Management\n- **Responsive patient with intact airway**: Supplemental O2, monitor\n- **Responsive with airway compromise**: Jaw thrust, suction, preparation for intubation\n- **GCS ≤8**: Airway at risk; plan intubation with C-spine protection\n- **Intubation technique**: Oral with manual in-line stabilization preferred in trauma\n- **Failed intubation**: Surgical airway (cricothyrotomy) backup\n\n## Breathing Problems\n- **Tension pneumothorax (diagnosis clinical, not imaging)**:\n  - Signs: Hypotension, JVD, tracheal deviation, unilateral breath sounds\n  - Immediate: Needle thoracostomy 2nd ICS mid-clavicular line\n  - Definitive: Chest tube 4th-5th ICS mid-axillary\n- **Flail chest (2+ ribs, 2+ fractures)**:\n  - Pain control critical (allows breathing)\n  - Epidural analgesia or multimodal analgesia\n  - Avoid splinting; early mobilization\n- **Hemothorax**: Chest tube, monitor output, surgery if >1500 mL initial or ongoing >200 mL/h\n\n## Hemorrhage Control - Tourniquet Indications\n- **Penetrating extremity wound with arterial bleeding uncontrolled by pressure**\n- **Place 2-3 inches above wound** (not over joint)\n- **Apply tight** (patient will complain if inadequate)\n- **Mark tourniquet** with application time\n- **Not contraindicated** in trauma (myth: always try pressure first)\n\n## Shock Recognition & Initial Resuscitation\n- **Class I hemorrhage**: Observe, fluid if prolonged transport\n- **Class II-III**: Initiate permissive hypotension (SBP 80-90 mmHg) if ongoing hemorrhage\n- **Class IV**: Massive transfusion protocol, operating room\n- **IV access**: Two large-bore (14-16G) peripheral lines, avoid legs if abdominal trauma\n- **Fluid ratio**: 1:1:1 (RBC:FFP:Platelet) in massive transfusion",
        mnemonics: [
          { text: "GCS ≤8 = INTUBATE", explanation: "Airway protection indicated" },
          { text: "TOURNIQUET SAVES LIMB", explanation: "Apply if arterial bleeding uncontrolled" }
        ],
        keyPoints: [
          "Tension pneumothorax diagnosis clinical; treat before imaging",
          "Pain control essential for flail chest recovery",
          "Tourniquet application higher than expected pressure-only attempts",
          "Permissive hypotension reduces ongoing hemorrhage"
        ],
        textbookRefs: [
          { book: "American College of Surgeons - ATLS Manual", chapter: "Ch 2-4", edition: "10th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Ch 5", edition: "27th" }
        ]
      },
      {
        layer: 4,
        slug: "atls-primary-survey-exam-prep",
        title: "ATLS & Primary Survey - Exam Prep",
        estimatedMinutes: 24,
        summary: "High-yield exam facts and algorithms for ATLS principles.",
        contentMd: "# Exam-Focused ATLS Content\n\n## GCS Score Calculation & Interpretation\n- **Eye opening (E)**: Spontaneous 4, to voice 3, to pain 2, none 1\n- **Verbal (V)**: Oriented 5, confused 4, inappropriate 3, incomprehensible 2, none 1\n- **Motor (M)**: Obeys 6, localizes 5, withdraws 4, abnormal flexion 3, extension 2, none 1\n- **GCS 15**: Fully oriented, normal\n- **GCS 9-12**: Moderate injury\n- **GCS 3-8**: Severe injury (airway at risk)\n- **GCS 3 (lowest possible)**: All scores = 1\n\n## Shock Classification & Vital Sign Changes\n- **Class I**: HR <100, BP normal, RR 12-20, urine output >30 mL/h\n- **Class II**: HR 100-120, BP normal or ↓ pulse pressure, RR 20-30, UOP 20-30 mL/h\n- **Class III**: HR >120, BP ↓, RR >30, UOP 5-15 mL/h, confused\n- **Class IV**: HR >120, BP severely ↓, RR >35, UOP minimal, lethal if untreated\n\n## Tension Pneumothorax Diagnosis\n- **5 signs**: Hypotension, JVD, tracheal deviation, unilateral breath sounds, hyporesonance\n- **Do NOT wait for X-ray**: Clinically diagnosed, immediately needle thoracostomy\n- **Needle placement**: 2nd ICS at mid-clavicular line, superior edge of 3rd rib\n- **Follow with**: Chest tube placement at 4th-5th ICS mid-axillary line\n\n## Hemorrhage Control Priorities\n1. **Direct pressure**: First-line for all bleeding\n2. **Elevation**: For extremity wounds\n3. **Pressure dressing**: Maintain pressure if direct pressure insufficient\n4. **Tourniquet**: If pressure fails and arterial bleeding (may be pre-hospital)\n5. **Surgical control**: In OR if ongoing bleeding\n\n## Indian Trauma Scenario Specific\n- **Road traffic accidents**: Blunt polytrauma common\n- **Stab wounds**: More common in North India\n- **Burn injuries**: Common in South Asia\n- **Resource-limited settings**: Emphasis on DO NOT DELAY for imaging",
        mnemonics: [
          { text: "GCS 3 = 1+1+1", explanation: "Minimum possible score (unresponsive)" },
          { text: "CLASS I-IV: 750-1500-2000-2000 mL", explanation: "Hemorrhage volume thresholds" }
        ],
        keyPoints: [
          "GCS score guides airway and prognosis",
          "Shock class predicts need for intervention",
          "Tension pneumothorax is clinical diagnosis",
          "Tourniquet application not harmful in life-threatening bleeding"
        ],
        textbookRefs: [
          { book: "NEET-PG Trauma & ATLS 2024", chapter: "Primary Survey", edition: "Latest" },
          { book: "NMC CBME Curriculum - Trauma Management 2023", chapter: "Primary Assessment", edition: "Latest" }
        ]
      },
      {
        layer: 5,
        slug: "atls-primary-survey-active-recall",
        title: "ATLS & Primary Survey - Active Recall",
        estimatedMinutes: 21,
        summary: "Clinical scenarios and rapid-fire ATLS questions.",
        contentMd: "# Clinical Scenarios & Active Recall\n\n## Case 1: Tension Pneumothorax\n**Scenario**: 25-year-old male, motorcycle accident, BP 80/50, JVD prominent, trachea deviated left, absent breath sounds on right, SpO2 88%.\n\n**ATLS Response**:\n- What is diagnosis? (Tension pneumothorax - clinical diagnosis)\n- Immediate action? (Needle thoracostomy 2nd ICS MCL right side)\n- Then? (Chest tube 4th-5th ICS MAL right)\n- Expected response? (BP↑, JVD↓, breath sounds return, trachea midline)\n- Imaging after? (Yes, CXR after stabilization)\n\n## Case 2: Hemorrhagic Shock\n**Scenario**: 40-year-old with penetrating abdominal wound, HR 125, BP 85/55, RR 28, GCS 14, pale, cold extremities, UOP minimal.\n\n**Classification**:\n- Shock class? (Class III: HR>120, BP↓, altered mental status, UOP <15 mL/h)\n- Estimated blood loss? (1500-2000 mL)\n- IV access? (Two large-bore 16G lines, call blood bank, activate MTP)\n- Fluid strategy? (Permissive hypotension SBP 80-90, rapid to OR)\n- Ratios? (1:1:1 RBC:FFP:Platelet)\n\n## Case 3: GCS Calculation\n**Scenario**: Patient opens eyes to voice (3), speaks but confused (4), localizes to pain (5).\n\n**Calculate**: GCS = 3+4+5 = 12 (Moderate injury, monitor airway)\n\n## Rapid-Fire ATLS\n1. Highest GCS? (15)\n2. Lowest GCS? (3)\n3. Airway at risk if GCS? (≤8)\n4. Class I hemorrhage %? (15%)\n5. Class IV hemorrhage %? (>40%)\n6. Tourniquet placement? (2-3 inches above wound)\n7. Needle thoracostomy location? (2nd ICS at MCL)\n8. Chest tube location? (4th-5th ICS at MAL)\n9. Permissive hypotension target SBP? (80-90 mmHg)\n10. MTP ratio RBC:FFP:Platelet? (1:1:1)",
        mnemonics: [
          { text: "TENSION = HYPOTENSION+JVD+DEVIATION", explanation: "Clinical diagnosis triad" },
          { text: "CLASS III = HR>120, BP↓, CONFUSION", explanation: "Requires aggressive resuscitation" }
        ],
        keyPoints: [
          "ATLS is algorithmic; don't overthink",
          "Tension pneumothorax treated before imaging",
          "GCS score directly guides airway management",
          "Massive transfusion protocol activated early"
        ],
        textbookRefs: [
          { book: "ATLS Student Course Manual Case Studies", chapter: "Primary Survey", edition: "10th" },
          { book: "AIIMS Delhi Trauma Cases 2023-24", chapter: "Emergency Management", edition: "Latest" }
        ]
      }
    ]
  }
];
