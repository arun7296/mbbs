export const newBatch2Lessons = [
  {
    topicCode: "AS-MOD-02-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "local-anesthetics-foundation",
        title: "Local Anesthetics - Foundation",
        estimatedMinutes: 20,
        summary: "Introduction to local anesthetics: definition, classification, basic mechanism of action.",
        contentMd: "# Local Anesthetics - Foundation\n\n## Definition\nLocal anesthetics are drugs that block the conduction of electrical impulses in neurons when applied locally, producing reversible loss of sensation and motor function.\n\n## Classification\n\n### By Chemical Structure\n- **Esters**: Cocaine, procaine, tetracaine\n- **Amides**: Lignocaine, bupivacaine, prilocaine\n\n### By Onset & Duration\n- **Short-acting**: Procaine (30-60 min)\n- **Intermediate**: Lignocaine (60-90 min)\n- **Long-acting**: Bupivacaine, prilocaine (>200 min)\n\n## Basic Mechanism\nLocal anesthetics reversibly block Na+ channels in the axonal membrane, preventing depolarization and propagation of action potentials.",
        mnemonics: [
          { text: "ESTER-AMIDE split", explanation: "Esters metabolized by plasma pseudocholinesterase; Amides by liver" },
          { text: "Na+ channel blockers first principle", explanation: "All LAs block voltage-gated sodium channels" }
        ],
        keyPoints: [
          "Esters have shorter half-life due to pseudocholinesterase metabolism",
          "Amides are safer with longer duration",
          "Cocaine is unique: vasoconstrictor + LA",
          "Lipophilicity determines potency"
        ],
        textbookRefs: [
          { book: "Pharmacology (Guyton & Hall)", chapter: "Ch 45", edition: "13th" },
          { book: "KDT Pharmacology", chapter: "Ch 12", edition: "10th" }
        ]
      },
      {
        layer: 2,
        slug: "local-anesthetics-mechanism",
        title: "Local Anesthetics - Mechanism",
        estimatedMinutes: 30,
        summary: "Detailed mechanism of action, structure-activity relationships, metabolism.",
        contentMd: "# Local Anesthetics - Mechanism\n\n## Molecular Mechanism\nLocal anesthetics bind to Na+ channels from the intracellular side in their inactive state, stabilizing the inactive configuration and preventing transitions to active state.\n\n## Structure-Activity Relationships\n\n### Lipophilicity\n- Increases potency and duration\n- Bupivacaine more lipophilic than lignocaine = more potent\n\n### pKa\n- Lower pKa = faster onset (lignocaine 7.9 vs bupivacaine 8.1)\n- Affects fraction of ionized form\n\n### Protein Binding\n- Bupivacaine: 95% bound (long duration)\n- Lignocaine: 70% bound (intermediate)\n- Procaine: 5% bound (short duration)\n\n## Metabolism\n- **Esters**: Hydrolyzed by plasma pseudocholinesterase and hepatic esterases\n- **Amides**: Hepatic microsomal metabolism via N-dealkylation and hydroxylation\n\n## Factors Affecting LA Activity\n- pH: Acidic medium reduces efficacy\n- Vascularity: Increased blood flow washes away drug\n- Presence of vasoconstrictor: Prolongs action\n- Nerve fiber diameter: Smaller fibers (C, A-delta) blocked first",
        mnemonics: [
          { text: "LIPID-PROTEIN rule", explanation: "Higher lipophilicity = higher potency; higher protein binding = longer duration" },
          { text: "pKa <8 = fast onset", explanation: "Lower pKa = more non-ionized form available = faster penetration" }
        ],
        keyPoints: [
          "Esters require pseudocholinesterase for metabolism",
          "Bupivacaine blocks cardiac Na+ channels at high doses (cardiotoxicity)",
          "Lignocaine has hepatic metabolism pathway",
          "Prilocaine can cause methemoglobinemia in high doses"
        ],
        textbookRefs: [
          { book: "BDC Pharmacology", chapter: "Ch 28", edition: "27th" },
          { book: "Harrison's Principles of Internal Medicine", chapter: "Ch 374", edition: "21st" }
        ]
      },
      {
        layer: 3,
        slug: "local-anesthetics-clinical",
        title: "Local Anesthetics - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical applications, dosing, toxicity, and management in Indian practice.",
        contentMd: "# Local Anesthetics - Clinical\n\n## Clinical Applications in India\n- **Infiltration**: Minor surgery, wound suturing\n- **Nerve blocks**: Dental, regional anesthesia\n- **Topical**: Skin, mucous membranes, ophthalmology\n- **Intravenous regional**: Bier's block for hand surgery\n\n## Maximum Safe Doses (mg/kg)\n- **Lignocaine**: 4.5 mg/kg (7 mg/kg with epinephrine)\n- **Bupivacaine**: 2.5 mg/kg (3.5 mg/kg with epinephrine)\n- **Procaine**: 8 mg/kg\n\n## Toxicity Management\n\n### Local Anesthetic Systemic Toxicity (LAST)\n**Signs**: Perioral numbness, restlessness, tinnitus, seizures, cardiac arrhythmias, asystole\n\n**Management**:\n- Stop injection, call for help\n- Provide 100% O2, secure airway\n- IV lipid emulsion 20% (bolus 1.4 mL/kg over 1 min, then infusion 0.25 mL/kg/min)\n- Manage seizures with benzodiazepines\n\n## Indian Context Considerations\n- High ambient temperature increases systemic absorption\n- Use with epinephrine to reduce systemic uptake\n- Monitor liver function in chronic users\n- Always aspirate before injection to avoid intravascular administration",
        mnemonics: [
          { text: "LAST signs: REST-CARS", explanation: "RESTlessness, TACHYcardia, CARdiac arrhythmias, Seizures" },
          { text: "Lipid rescue mnemonic", explanation: "LAST to LIPID: 20% IV lipid emulsion is the antidote" }
        ],
        keyPoints: [
          "Always use appropriate dilution (1% for infiltration, 0.5% for blocks)",
          "Epinephrine 1:200,000 recommended to reduce systemic absorption",
          "Bupivacaine cardiotoxicity occurs at lower doses than other LAs",
          "Methemoglobinemia risk with prilocaine >600 mg in adults"
        ],
        textbookRefs: [
          { book: "BDC Pharmacology", chapter: "Ch 28", edition: "27th" },
          { book: "Delhi Anaesthesia Update", chapter: "LA complications", edition: "2024" }
        ]
      },
      {
        layer: 4,
        slug: "local-anesthetics-exam",
        title: "Local Anesthetics - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield NEXT/NEET PG comparison tables and key concepts.",
        contentMd: "# Local Anesthetics - Exam Prep\n\n## Comparison Table\n\n| Property | Procaine | Lignocaine | Bupivacaine | Cocaine |\n|----------|----------|-----------|-------------|----------|\n| Type | Ester | Amide | Amide | Ester |\n| Onset | Slow | Fast | Intermediate | Fast |\n| Duration | Short (30-60) | Intermediate (60-90) | Long (>200) | Medium (30-60) |\n| pKa | 8.9 | 7.9 | 8.1 | 8.6 |\n| Metabolism | Pseudocholinesterase | Liver | Liver | Pseudocholinesterase |\n| Cardiotoxicity | Low | Low | HIGH | Stimulant |\n| Max Dose | 8 mg/kg | 4.5 mg/kg | 2.5 mg/kg | 3 mg/kg |\n\n## High-Yield Facts\n- **Cocaine**: Only LA with vasoconstrictor property, used in nasal surgery\n- **Lignocaine**: Antiarrhythmic at subtherapeutic doses (Class IB)\n- **Bupivacaine**: 4 times more potent than lignocaine, high cardiotoxicity\n- **Esters**: Allergic reactions common (metabolite PABA)\n- **Amides**: Allergy rare\n\n## NEXT Pattern Q Concepts\n- LA toxicity differential diagnosis\n- Drug interactions (prolonged action with liver disease)\n- Dosage calculations with epinephrine\n- Clinical scenarios of LAST management",
        mnemonics: [
          { text: "LAST lipid bolus: 1.4 mL/kg", explanation: "Initial dose of 20% lipid emulsion" },
          { text: "Ester-allergy PABA", explanation: "Para-aminobenzoic acid metabolite causes allergic reactions" }
        ],
        keyPoints: [
          "Procaine: Weak, short-acting, allergenic (rarely used now)",
          "Lignocaine: Gold standard for infiltration and nerve blocks",
          "Bupivacaine: Preferred for long procedures but higher cardiotoxicity",
          "Cocaine: Unique sympathomimetic, restricted to ENT procedures"
        ],
        textbookRefs: [
          { book: "NEXT PG Pharmacology", chapter: "Anesthetics", edition: "2024" },
          { book: "BDC Pharmacology", chapter: "Ch 28", edition: "27th" }
        ]
      },
      {
        layer: 5,
        slug: "local-anesthetics-recall",
        title: "Local Anesthetics - Active Recall",
        estimatedMinutes: 10,
        summary: "Q&A flashcard format for rapid recall.",
        contentMd: "# Local Anesthetics - Active Recall\n\n## Q&A Flashcards\n\n**Q1: What is the primary mechanism of LA action?**\nA: Block voltage-gated Na+ channels, preventing depolarization and AP propagation\n\n**Q2: Why do esters cause more allergic reactions than amides?**\nA: Ester metabolism produces PABA (para-aminobenzoic acid), a known allergen\n\n**Q3: What is the maximum safe dose of bupivacaine without epinephrine?**\nA: 2.5 mg/kg (with epi: 3.5 mg/kg)\n\n**Q4: What is LAST and how is it managed?**\nA: Local Anesthetic Systemic Toxicity - managed with 20% IV lipid emulsion (1.4 mL/kg bolus)\n\n**Q5: Which LA is unique for having vasoconstrictor properties?**\nA: Cocaine - only LA with sympathomimetic activity\n\n**Q6: Why is bupivacaine contraindicated in obstetric paracervical block?**\nA: High risk of cardiotoxicity and fetal bradycardia\n\n**Q7: Lignocaine dosing for infiltration?**\nA: 0.5-1% solution, max 4.5 mg/kg plain (7 mg/kg with epi)\n\n**Q8: What causes methemoglobinemia with prilocaine?**\nA: Metabolite O-toluidine oxidizes hemoglobin Fe2+ to Fe3+",
        mnemonics: [
          { text: "LAST: LEft ventricle dysfunction → Asystole", explanation: "Cardiac collapse in LAST" }
        ],
        keyPoints: [
          "Always aspirate before injection",
          "Use epinephrine to reduce systemic absorption",
          "Monitor vitals during regional anesthesia",
          "Have lipid emulsion and resuscitation equipment ready"
        ],
        textbookRefs: [
          { book: "BDC Pharmacology", chapter: "Ch 28", edition: "27th" },
          { book: "NEXT Rapid Revision", chapter: "Anesthetics", edition: "2024" }
        ]
      }
    ]
  },
  {
    topicCode: "CM-MOD-04-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "maternal-health-foundation",
        title: "Maternal Health & Safe Motherhood - Foundation",
        estimatedMinutes: 20,
        summary: "Introduction to maternal health, MMR, and global safe motherhood initiatives in India.",
        contentMd: "# Maternal Health & Safe Motherhood - Foundation\n\n## Definition\nMaternal health encompasses the health of women during pregnancy, childbirth, and postpartum period. Safe motherhood aims to ensure every pregnancy is wanted, every childbirth is safe, and every newborn thrives.\n\n## Global Maternal Mortality Ratio (MMR)\n- **Global MMR**: 287 per 100,000 live births (2017)\n- **India MMR**: 113 per 100,000 live births (2019) - improved from 212 (2008)\n- **Target**: SDG goal of <70 per 100,000 by 2030\n\n## Causes of Maternal Mortality (Indian Context)\n1. Hemorrhage (27%)\n2. Hypertensive disorders (19%)\n3. Sepsis (15%)\n4. Complications of abortion (13%)\n5. Anemia & nutritional deficiency (10%)\n6. Thromboembolic disorders (2%)\n7. Other direct & indirect causes (14%)\n\n## Key Maternal Health Indicators\n- **TFR**: Total Fertility Rate\n- **ANC**: Antenatal Care coverage\n- **SBA**: Skilled Birth Attendant coverage\n- **PNC**: Postnatal Care coverage",
        mnemonics: [
          { text: "5 HAC causes of MM", explanation: "Hemorrhage, Hypertension, Abortion complications, Anemia, Cardiac" }
        ],
        keyPoints: [
          "India accounts for ~17% of global maternal deaths",
          "Rural MMR 2x higher than urban in India",
          "Preventable causes account for ~80% of maternal deaths",
          "Universal Health Coverage is key to reducing MMR"
        ],
        textbookRefs: [
          { book: "Obstetrics & Gynaecology (Williams)", chapter: "Ch 2", edition: "25th" },
          { book: "NMC Clinical Practice Guidelines", chapter: "Safe Motherhood", edition: "2020" }
        ]
      },
      {
        layer: 2,
        slug: "maternal-health-mechanism",
        title: "Maternal Health & Safe Motherhood - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathophysiology of pregnancy complications and safe motherhood strategies.",
        contentMd: "# Maternal Health & Safe Motherhood - Mechanism\n\n## Pathophysiological Changes in Pregnancy\n\n### Cardiovascular\n- Plasma volume ↑ 40-50%, RBC ↑ 20-30% = physiologic anemia\n- Cardiac output ↑ 30-50%\n- SVR ↓ 30% (vasodilation from progesterone & prostacyclin)\n\n### Metabolic\n- Insulin resistance ↑ from 25th week (progesterone, HPL)\n- Fasting hypoglycemia (increased fetal glucose uptake)\n- Hypercoagulability (↑ clotting factors II, V, VII, X, XII)\n\n### Renal\n- GFR ↑ 40-50% (increased creatinine clearance)\n- Glycosuria common (lowered renal threshold)\n- Dilated pyelocalyceal system (compression + progesterone)\n\n## Pathophysiology of Major Complications\n\n### Hypertensive Disorders\n- Endothelial dysfunction + placental ischemia\n- Loss of normal vasodilation of pregnancy\n- ↑ sFlt-1 (soluble fms-like tyrosine kinase-1) and ↓ PlGF\n\n### Peripartum Hemorrhage\n- Uterine atony (impaired myometrial contraction)\n- Placental abnormalities (previa, abruption)\n- Coagulopathy (DIC, HELLP syndrome)\n\n## Safe Motherhood Strategies\n- **Antenatal care**: Risk identification, treatment of complications\n- **Skilled attendance**: Trained birth attendant at every delivery\n- **Emergency obstetric care**: Access to blood, surgery, antibiotics\n- **Postnatal care**: Early detection of complications within 48h-7d",
        mnemonics: [
          { text: "SAFE M: Screen, Assess, Focus, Emergency", explanation: "Pillars of safe motherhood" }
        ],
        keyPoints: [
          "Physiologic anemia of pregnancy: Hb drop due to relative increase in plasma volume",
          "Hypercoagulability explains increased thromboembolism risk",
          "Endothelial dysfunction central to preeclampsia pathogenesis",
          "Early ANC essential for risk stratification (WHO recommends 8 contacts)"
        ],
        textbookRefs: [
          { book: "Obstetrics & Gynaecology (Williams)", chapter: "Ch 4", edition: "25th" },
          { book: "FIGO Safe Motherhood Guidelines", chapter: "Antenatal Care", edition: "2018" }
        ]
      },
      {
        layer: 3,
        slug: "maternal-health-clinical",
        title: "Maternal Health & Safe Motherhood - Clinical",
        estimatedMinutes: 20,
        summary: "Indian clinical practice guidelines, management protocols, and maternal surveillance.",
        contentMd: "# Maternal Health & Safe Motherhood - Clinical\n\n## Indian Government Initiatives\n\n### Pradhan Mantri Matri Vandana Yojana (PMMVY)\n- Cash assistance (₹6000) to pregnant women for health improvement\n- Improved ANC registration and institutional delivery rates\n\n### Janani Suraksha Yojana (JSY)\n- Aims for institutional delivery for all pregnant women\n- Incentivizes institutional delivery in public facilities\n- Reduced home delivery rates significantly\n\n## Standard ANC Schedule in India\n- **1st trimester**: Confirm pregnancy, baseline investigations\n- **2nd trimester**: 2-3 visits (morphology scan, glucose screening)\n- **3rd trimester**: 2-4 visits (NST, assessment of fetal position)\n- **Minimum**: 4 ANC visits as per WHO revised guidelines (2016)\n\n## Key Investigations During ANC\n- **First visit**: Blood group, Hb, VDRL, HIV, HBsAg, urine routine\n- **2nd trimester**: Glucose screening (75g OGTT at 24-28 weeks)\n- **3rd trimester**: Repeat Hb, VDRL if indicated, NST\n\n## Management of High-Risk Pregnancy\n- Early referral to tertiary center if:\n  - Severe anemia (Hb <7 g/dL)\n  - Uncontrolled hypertension\n  - GDM requiring insulin\n  - Multiple pregnancy\n  - Intrauterine growth restriction\n\n## Postnatal Care Protocol\n- **First contact**: Within 24 hours of delivery\n- **Second contact**: Day 3-7\n- **Third contact**: Day 7-14\n- **Focus**: Infection, hemorrhage, jaundice in newborn, mental health",
        mnemonics: [
          { text: "4 ANC contacts minimum", explanation: "WHO 2016: 1st, early 2nd, late 2nd, 3rd trimester" }
        ],
        keyPoints: [
          "Indian JSY has increased institutional delivery from 39% (2005) to >80% (2020)",
          "Anemia prevalence in Indian pregnant women: 50-60% (target: <5%)",
          "GDM screening recommended for all (risk of adverse outcomes ↑ with Indian ethnicity)",
          "Postpartum hemorrhage: Most common cause of direct maternal death in India"
        ],
        textbookRefs: [
          { book: "FOGSI Guidelines on Safe Motherhood", edition: "2019" },
          { book: "NMC Clinical Practice Guidelines", chapter: "ANC & PNC", edition: "2020" }
        ]
      },
      {
        layer: 4,
        slug: "maternal-health-exam",
        title: "Maternal Health & Safe Motherhood - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield NEET PG concepts, key statistics, and management algorithms.",
        contentMd: "# Maternal Health & Safe Motherhood - Exam Prep\n\n## Key Statistics (India 2020)\n\n| Parameter | Value | Target |\n|-----------|-------|--------|\n| MMR | 103 per 100k | <70 by 2030 |\n| ANC coverage (4+ visits) | 51% | 90% |\n| Institutional delivery | 82% | 100% |\n| Skilled birth attendance | 85% | 100% |\n| Anemia in pregnancy | 55% | <5% |\n\n## Direct Causes of Maternal Death (India)\n1. Hemorrhage - 27% (PPH most common)\n2. Hypertension - 19% (eclampsia, HELLP)\n3. Infection/Sepsis - 15% (chorioamnionitis, endometritis)\n4. Abortion complications - 13% (unsafe abortion)\n5. Anemia - 10% (severe with hemorrhage)\n6. Thromboembolism - 2% (DVT, PE)\n7. Amniotic fluid embolism - 1%\n\n## NEET PG Focused Areas\n- **ANC completion rates** in India by state\n- **Maternal mortality audits** & learning\n- **High-risk pregnancy criteria** & referral\n- **Complication prevention**: iron supplementation (₹1/tablet program), TT vaccination (2 doses free)\n\n## Indian Clinical Scenarios\n- Anemia + hemorrhage = life-threatening (↑ risk of maternal death)\n- Adolescent pregnancy: NFHS-5 shows 7.7% in 15-19 age group\n- Unregistered pregnancies: 40% in rural areas = ↑ MM risk",
        mnemonics: [
          { text: "Top 3 preventable causes of MM", explanation: "Hemorrhage, Hypertension, Anemia" }
        ],
        keyPoints: [
          "India's MMR reduction from 212 (2008) to 103 (2020) = 51% reduction in 12 years",
          "Skilled birth attendance is single most important intervention",
          "Emergency obstetric care (EmOC) availability determines mortality reduction",
          "Postpartum hemorrhage accounts for 45% of direct maternal deaths when combined with anemia"
        ],
        textbookRefs: [
          { book: "NEET PG MCQs on Safe Motherhood", edition: "2024" },
          { book: "Ministry of Health & Family Welfare Report", chapter: "MMR Trends", edition: "2020" }
        ]
      },
      {
        layer: 5,
        slug: "maternal-health-recall",
        title: "Maternal Health & Safe Motherhood - Active Recall",
        estimatedMinutes: 10,
        summary: "Q&A for maternal health core concepts.",
        contentMd: "# Maternal Health & Safe Motherhood - Active Recall\n\n## Q&A Flashcards\n\n**Q1: What is India's current MMR and SDG target?**\nA: Current MMR 103 per 100k; SDG target <70 per 100k by 2030\n\n**Q2: What is the most common direct cause of maternal death in India?**\nA: Postpartum hemorrhage (27% of direct maternal deaths)\n\n**Q3: Minimum ANC visits recommended by WHO 2016?**\nA: 4 visits (1st trim, early 2nd, late 2nd, 3rd trim)\n\n**Q4: What is physiologic anemia of pregnancy?**\nA: Hemoglobin drop due to 40-50% plasma volume increase exceeding RBC increase (20-30%)\n\n**Q5: PMMVY cash assistance amount?**\nA: ₹6000 in 3 installments for pregnant women\n\n**Q6: When is glucose screening recommended in pregnancy?**\nA: 75g OGTT at 24-28 weeks for GDM screening\n\n**Q7: Critical investigations at first ANC visit?**\nA: Blood group, Hb, VDRL, HIV, HBsAg, urine routine\n\n**Q8: What % of maternal deaths in India are preventable?**\nA: ~80% of maternal deaths are due to preventable causes",
        mnemonics: [
          { text: "5 'H's of MM prevention", explanation: "Health awareness, Healthcare access, Hemorrhage prevention, Hypertension control, Help-seeking behavior" }
        ],
        keyPoints: [
          "Universal Health Coverage key to reducing MMR",
          "Adolescent pregnancy contributes to 7.7% of live births in India",
          "Anemia prevalence 50-60% in Indian pregnant women",
          "Rural MMR twice that of urban areas"
        ],
        textbookRefs: [
          { book: "Obstetrics & Gynaecology (Williams)", chapter: "Ch 2", edition: "25th" },
          { book: "FOGSI Safe Motherhood Guidelines", edition: "2019" }
        ]
      }
    ]
  },
  {
    topicCode: "DR-MOD-01-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "eczema-contact-dermatitis-foundation",
        title: "Eczema & Contact Dermatitis - Foundation",
        estimatedMinutes: 20,
        summary: "Basic definitions, classification, and epidemiology of eczema and contact dermatitis.",
        contentMd: "# Eczema & Contact Dermatitis - Foundation\n\n## Definition\n**Eczema**: Inflammatory skin condition characterized by pruritus, erythema, edema, and vesiculation. Also called dermatitis.\n**Contact Dermatitis**: Acute inflammatory reaction to external irritant or allergen.\n\n## Types of Eczema\n1. **Atopic dermatitis (AD)**: Chronic, pruritic, hereditary tendency\n2. **Contact dermatitis**: Irritant or allergic reaction\n3. **Nummular eczema**: Coin-shaped lesions on extremities\n4. **Dyshidrotic eczema**: Vesicles on palms and soles\n5. **Seborrheic dermatitis**: Scaly lesions on face, scalp, chest\n6. **Stasis dermatitis**: Associated with venous insufficiency\n\n## Contact Dermatitis Classification\n\n### Irritant Contact Dermatitis (ICD)\n- Non-allergic, occurs in anyone with sufficient irritant exposure\n- Detergents, solvents, acids, alkalis\n- Cumulative insult pattern\n\n### Allergic Contact Dermatitis (ACD)\n- Type IV hypersensitivity reaction\n- Only occurs in sensitized individuals\n- Delayed reaction (24-72 hours)\n- Can occur with minimal exposure after sensitization\n\n## Epidemiology (India)\n- Atopic dermatitis: 1-3% prevalence\n- Contact dermatitis: 2-15% of dermatological outpatient visits\n- More common in tropical climate due to humidity, sweating, friction",
        mnemonics: [
          { text: "ECZEMA types mnemonic", explanation: "Atopic, Contact, Nummular, Dyshidrotic, (Seborrheic, Stasis)" }
        ],
        keyPoints: [
          "Atopy triad: Atopic dermatitis + asthma + allergic rhinitis",
          "ICD more common than ACD (80% vs 20%)",
          "Contact dermatitis is occupational hazard in many professions",
          "Indian climate: heat + humidity increases irritant dermatitis risk"
        ],
        textbookRefs: [
          { book: "Textbook of Dermatology (Bhalani & Bhatia)", chapter: "Ch 12", edition: "6th" },
          { book: "Fitzpatrick's Dermatology", chapter: "Ch 132", edition: "10th" }
        ]
      },
      {
        layer: 2,
        slug: "eczema-contact-dermatitis-mechanism",
        title: "Eczema & Contact Dermatitis - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathophysiology of allergic and irritant contact dermatitis, atopic dermatitis mechanism.",
        contentMd: "# Eczema & Contact Dermatitis - Mechanism\n\n## Allergic Contact Dermatitis (Type IV HSR)\n\n### Sensitization Phase\n1. Hapten-protein complex formation (allergen <500 Da needed)\n2. Dendritic cells process antigen\n3. T cell priming in regional lymph nodes (5-21 days)\n4. Th1 & Th17 response development\n\n### Elicitation Phase\n1. Re-exposure to allergen\n2. T cell infiltration within 24-72 hours\n3. Release of TNF-α, IFN-γ, IL-6\n4. Keratinocyte activation\n5. Clinical manifestations appear\n\n## Irritant Contact Dermatitis\n- **Mechanism**: Direct cytotoxic injury to keratinocytes\n- **No sensitization period needed** (reaction on first exposure if strong irritant)\n- **Dose-response relationship**: Stronger irritants cause quicker onset\n- **Mechanism**: Disruption of skin barrier, release of IL-1 and TNF-α\n\n## Atopic Dermatitis Pathogenesis\n\n### Genetic Factors\n- **Filaggrin mutation** (FLG): Most significant (10-30% of AD patients)\n- Impaired skin barrier function\n- Reduced ceramides in stratum corneum\n\n### Immune Dysregulation\n- **Th2 skewing**: IL-4, IL-5, IL-13 predominance\n- ↑ IgE levels\n- Reduced regulatory T cells\n- ↓ Antimicrobial peptides (↑ S. aureus infection risk)\n\n### Environmental Factors\n- Stress, infections, allergens, irritants\n- Heat, humidity, sweating (India context)\n\n## Common Allergens in India\n- **Metals**: Nickel (jewelry, watches), chromium, cobalt\n- **Plants**: Poison ivy, cashew nut shell oil, mangoes\n- **Cosmetics**: Fragrances, preservatives, dyes\n- **Textiles**: Dyes, finishing agents\n- **Occupational**: Rubber, epoxy resins, formaldehyde",
        mnemonics: [
          { text: "ACID vs IRR", explanation: "ACD = Allergic (Type IV, 24-72h); ICD = Irritant (cytotoxic, dose-dependent)" }
        ],
        keyPoints: [
          "Filaggrin gene mutation = impaired barrier → atopic dermatitis susceptibility",
          "FLG mutations also associated with ichthyosis vulgaris",
          "Staphylococcus aureus colonization in 90% of AD patients",
          "Th2 cytokine predominance explains IgE elevation in atopic dermatitis"
        ],
        textbookRefs: [
          { book: "Dermatology (Freedberg et al)", chapter: "Ch 12", edition: "3rd" },
          { book: "BDC Dermatology", chapter: "Ch 8", edition: "7th" }
        ]
      },
      {
        layer: 3,
        slug: "eczema-contact-dermatitis-clinical",
        title: "Eczema & Contact Dermatitis - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical diagnosis, Indian patch testing, management protocols.",
        contentMd: "# Eczema & Contact Dermatitis - Clinical\n\n## Clinical Diagnosis\n\n### Morphology\n- **Acute**: Erythema, edema, vesicles, oozing, crusting\n- **Chronic**: Lichenification, xerosis, fissuring, hyperpigmentation\n- **Distribution**: Depends on exposure (hands in occupational, face in cosmetic)\n\n### Diagnostic Features\n- **Location important**: Face (cosmetics), hands (irritants), feet (footwear)\n- **Presence of pruritus** (intensely itchy)\n- **Sharp demarcation** in contact dermatitis\n- **Absence of personal/family history** helps distinguish from atopic dermatitis\n\n## Patch Testing in India\n\n### Indian Standard Series\n- **Common allergens**: Nickel sulfate (5%), potassium dichromate (0.5%), PPDA (1%)\n- **Plant allergens**: Cashew nutshell oil (standard), mango, rubber\n- **Cosmetic allergens**: Fragrance mix, preservatives\n\n### Interpretation\n- **Negative**: No reaction\n- **Irritant**: Uniform erythema, no vesicles\n- **Doubtful**: Slight erythema\n- **Positive**: Erythema + papules/vesicles\n\n## Management of Contact Dermatitis\n\n### Acute Phase\n- **Identify & remove allergen/irritant** (most important)\n- Cool compresses (calamine or KMnO4 solution)\n- Topical corticosteroids (mild-moderate: 1% hydrocortisone; severe: 0.05% betamethasone)\n- Oral antihistamines (cetirizine 10 mg OD) for pruritus\n\n### Chronic/Occupational\n- **Protective measures**: Gloves, barrier creams, emollients\n- **Emollients**: Regular use (multiple times daily)\n- **Avoid irritants**: Use pH-neutral soaps\n- **Workplace modification**: Essential for occupational CD\n\n## Atopic Dermatitis Management\n\n### First-line\n1. **Emollient therapy**: Cetaphil, mineral oil (before topical steroids)\n2. **Mild CD**: 1% hydrocortisone on face; 0.1% triamcinolone on body\n3. **Moderate CD**: 0.05% betamethasone\n4. **Antihistamines**: Cetirizine, fexofenadine for pruritus\n\n### Second-line\n- **Calcineurin inhibitors**: Tacrolimus (0.03-0.1%) for steroid-sparing\n- **Systemic steroids**: Short course (5-7 days) only in severe cases\n- **Newer agents**: Dupilumab (IL-4Rα inhibitor) approved for moderate-severe AD\n\n## Indian Context - Prevention\n- Use cotton clothing (absorbs sweat)\n- Avoid tight clothing (increases friction)\n- Regular bathing (removes irritants)\n- Limit exposure to detergents\n- Climate control in summer months",
        mnemonics: [
          { text: "ACD diagnosis: SCAED", explanation: "Sharp demarcation, Clearcut exposure, Acute onset, Exposure site, Delayed (24-72h)" }
        ],
        keyPoints: [
          "Allergic CD: Sharp demarcation; ICD: Gradual borders",
          "Nickel most common allergen globally & in India",
          "Patch testing gold standard for confirming ACD",
          "Emollients should precede topical steroid application"
        ],
        textbookRefs: [
          { book: "BDC Dermatology", chapter: "Ch 8", edition: "7th" },
          { book: "IADVL Clinical Guidelines", chapter: "Contact Dermatitis", edition: "2016" }
        ]
      },
      {
        layer: 4,
        slug: "eczema-contact-dermatitis-exam",
        title: "Eczema & Contact Dermatitis - Exam Prep",
        estimatedMinutes: 15,
        summary: "NEET PG high-yield facts, comparison tables, clinical scenarios.",
        contentMd: "# Eczema & Contact Dermatitis - Exam Prep\n\n## Comparison Table\n\n| Feature | ACD | ICD | Atopic Dermatitis |\n|---------|-----|-----|-------------------|\n| Type | Type IV HSR | Cytotoxic | Type IV HSR + genetic |\n| Onset | 24-72 hours | Minutes to hours | Chronic, relapsing |\n| Morphology | Vesicles, sharp borders | Erythema, gradual borders | Lichenification, oozing |\n| History | Sensitization period | Irritant exposure | Personal/family atopy |\n| Patch test | Positive | Irritant reaction | Usually negative |\n| Allergen size | <500 Da | Variable | Multiple allergens |\n\n## Top 10 NEET PG Allergens in India\n1. Nickel (jewelry, watches)\n2. PPDA (para-phenylenediamine in dyes/henna)\n3. Potassium dichromate (leather)\n4. Fragrance mix (cosmetics)\n5. Formaldehyde (cosmetics, textiles)\n6. Cashew nut shell oil (food)\n7. Rubber accelerators (gloves)\n8. Epoxy resins (occupational)\n9. Parabens (preservatives)\n10. Essential oils (cosmetics)\n\n## Clinical Scenarios\n- **Dentist with hand dermatitis**: Consider latex allergy, PPDA from gloves\n- **Farmer with foot dermatitis**: Khus (vetiver grass), rubber boots\n- **Housewife with hand dermatitis**: Detergents (irritant), jewelry (nickel)\n- **Toddler with facial rash after mango**: Cashew nut oil (anacardiaceae family)\n\n## High-Yield Facts\n- **Nickel releasing from objects**: Accelerated by sweating (Indian context)\n- **Filaggrin mutations**: 10-30% of AD patients worldwide\n- **S. aureus colonization**: 90% in active AD, key to recurrence\n- **Dupilumab**: 75% reduction in SCORAD in moderate-severe AD (IL-4Rα inhibitor)",
        mnemonics: [
          { text: "PD for ACD diagnosis", explanation: "Patch test Detects allergen-specific sensitization" }
        ],
        keyPoints: [
          "Allergen avoidance is definitive treatment for ACD",
          "ICD can be prevented by proper barrier protection",
          "Systemic steroids rarely needed in AD (only for acute exacerbations)",
          "Tacrolimus steroid-sparing in facial AD (prevents atrophy)"
        ],
        textbookRefs: [
          { book: "NEET PG Dermatology MCQs", edition: "2024" },
          { book: "IADVL Clinical Guidelines", chapter: "Contact Dermatitis", edition: "2016" }
        ]
      },
      {
        layer: 5,
        slug: "eczema-contact-dermatitis-recall",
        title: "Eczema & Contact Dermatitis - Active Recall",
        estimatedMinutes: 10,
        summary: "Q&A flashcards for dermatitis core concepts.",
        contentMd: "# Eczema & Contact Dermatitis - Active Recall\n\n## Q&A Flashcards\n\n**Q1: What is the difference between ACD and ICD?**\nA: ACD is Type IV HSR (needs sensitization, 24-72h), ICD is direct cytotoxic injury (no sensitization needed)\n\n**Q2: What is the most common allergen in India?**\nA: Nickel (from jewelry, watches, occupational exposure)\n\n**Q3: What is filaggrin and its role in atopic dermatitis?**\nA: Structural protein in stratum corneum; mutations impair skin barrier → AD susceptibility\n\n**Q4: How long does sensitization take in ACD?**\nA: 5-21 days for sensitization phase; elicitation phase takes 24-72 hours\n\n**Q5: What is the first-line treatment for contact dermatitis?**\nA: Identify & remove allergen/irritant; topical corticosteroids; emollients\n\n**Q6: Patch test interpretation: What is a positive reaction?**\nA: Erythema + papules/vesicles (not just uniform erythema)\n\n**Q7: Why is S. aureus colonization important in AD?**\nA: Causes recurrent infections, increased pruritus, impaired barrier function\n\n**Q8: What is the mechanism of dupilumab in atopic dermatitis?**\nA: IL-4 receptor alpha inhibitor; blocks IL-4/IL-13 signaling (Th2 cytokines)",
        mnemonics: [
          { text: "ELIMINATE allergen", explanation: "First step in managing ACD" }
        ],
        keyPoints: [
          "Sharp demarcation suggests ACD; gradual borders suggest ICD",
          "Occupational dermatitis is preventable with proper barrier protection",
          "Emollients are steroid-sparing agents in chronic dermatitis",
          "Indian summer increases risk of all types of dermatitis"
        ],
        textbookRefs: [
          { book: "BDC Dermatology", chapter: "Ch 8", edition: "7th" },
          { book: "IADVL Guidelines", edition: "2016" }
        ]
      }
    ]
  },
  {
    topicCode: "DR-MOD-04-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "gonorrhea-genital-ulcers-foundation",
        title: "Gonorrhea & Genital Ulcer Diseases - Foundation",
        estimatedMinutes: 20,
        summary: "Introduction to gonorrhea and STI-related genital ulcer diseases.",
        contentMd: "# Gonorrhea & Genital Ulcer Diseases - Foundation\n\n## Gonorrhea Overview\n\n### Causative Agent\n- **Neisseria gonorrhoeae**: Gram-negative diplococcus\n- Obligate intracellular organism\n- Produces endotoxin (lipopolysaccharide)\n- Has plasmids causing antibiotic resistance\n\n### Epidemiology\n- Most common bacterial STI worldwide\n- India: ~1.8 million estimated cases annually\n- Peak incidence: 15-40 years age group\n- Associated with multiple sexual partners, poor condom use\n\n## Genital Ulcer Diseases (GUD)\nCharacterized by ulceration of genital mucosa. Differential includes:\n\n### Bacterial\n- **Haemophilus ducreyi** (Chancroid)\n- **Klebsiella granulomatis** (Granuloma inguinale)\n- **Chlamydia trachomatis** L1, L2, L3 (Lymphogranuloma venereum)\n- **Treponema pallidum** (Primary syphilis)\n\n### Viral\n- **Herpes simplex virus** (Genital herpes)\n- **Human papillomavirus** (Warts)\n\n### Other\n- **Haemophilus influenzae biovar aegyptius** (External ulceration)\n- **Mycobacterium ulcerans** (Buruli ulcer)\n\n## Classification of STIs in India\n- **Classical STIs**: Gonorrhea, syphilis, chancroid, granuloma inguinale, LGV\n- **Newer STIs**: Chlamydia, HSV, HPV, mycoplasma\n- **Syndromic approach**: Urethral discharge, GUD, lower abdominal pain",
        mnemonics: [
          { text: "GUD agents: THE SHaCKs", explanation: "Treponema, HSV, Chlamydia (LGV), Haemophilus, Klebsiella" }
        ],
        keyPoints: [
          "Gonorrhea can be asymptomatic in up to 50% of women",
          "Vertical transmission causes ophthalmia neonatorum in newborns",
          "India burden: 1.8 million estimated cases/year",
          "Chandelier sign (dysuria) classic for gonorrhea in women"
        ],
        textbookRefs: [
          { book: "Textbook of Dermatology & Venereology (BDC)", chapter: "Ch 27", edition: "7th" },
          { book: "National STI Guidelines (NACO)", edition: "2021" }
        ]
      },
      {
        layer: 2,
        slug: "gonorrhea-genital-ulcers-mechanism",
        title: "Gonorrhea & Genital Ulcer Diseases - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathophysiology of gonorrhea and mechanism of genital ulcer formation.",
        contentMd: "# Gonorrhea & Genital Ulcer Diseases - Mechanism\n\n## Pathophysiology of Gonorrhea\n\n### Transmission & Colonization\n- **Route**: Primarily sexual (urethra, endocervix, rectum, pharynx)\n- **Attachment**: Pili and porins bind to columnar epithelium\n- **Invasion**: Epithelial penetration within 24-48 hours\n- **Incubation**: 2-7 days (average 3-5 days)\n\n### Immune Response\n- **Host factors**: Attachment to columnar epithelium → IgA resistance via protease\n- **Endotoxin release**: Triggers IL-8 production → polymorphonuclear (PMN) infiltration\n- **Purulent discharge**: Result of PMN response and tissue destruction\n- **Chronic infection**: Possible in women (due to inaccessible endocervix)\n\n### Complications\n- **Urethritis** (men): Purulent discharge, dysuria\n- **Cervicitis** (women): Mucopurulent discharge, may be asymptomatic\n- **PID**: Ascends to fallopian tubes → ectopic pregnancy, infertility\n- **Epididymitis**: Retrograde infection in men\n- **Disseminated gonococcal infection (DGI)**: Septic arthritis, skin lesions\n\n## Pathophysiology of GUD\n\n### Ulcer Formation Mechanisms\n\n#### Chancroid (Haemophilus ducreyi)\n- **Virulence factors**: Lipopolysaccharide, IgA protease\n- **Ulcer formation**: Direct tissue invasion → necrosis\n- **Lymphadenopathy**: Regional inguinal buboes (painful)\n\n#### Granuloma Inguinale (Klebsiella granulomatis)\n- **Intracellular infection**: Monocytes, histiocytes\n- **Beefy red ulcer**: Highly vascular, bleeds easily\n- **Minimal adenopathy**: Unlike chancroid\n- **Slow progression**: Over weeks to months\n\n#### LGV (Chlamydia trachomatis L1-L3)\n- **Stage 1**: Small painless ulcer at inoculation site (often unnoticed)\n- **Stage 2**: Painful inguinal lymphadenopathy (bubo formation)\n- **Stage 3**: Chronic granulomatous inflammation → strictures, fistulas\n\n#### Primary Syphilis (Treponema pallidum)\n- **Ulcer formation**: Spirochete multiplication → regional lymphadenitis\n- **Chancre characteristics**: Indurated, painless, clean base\n- **Spontaneous healing**: Even without treatment (4-6 weeks)\n\n#### Genital Herpes (HSV-1/2)\n- **Viral replication**: In epithelial cells → vesicle formation\n- **Vesicle rupture**: Creates painful shallow ulcers\n- **Recurrence**: Via dorsal root ganglion reactivation\n- **Prodromal symptoms**: Tingling, burning before vesicles appear",
        mnemonics: [
          { text: "GUD ulcer characteristics", explanation: "Chancroid=painful+purulent; GI=beefy red+easy bleed; Syphilis=painless+indurated" }
        ],
        keyPoints: [
          "Gonorrhea: IgA protease allows evasion of mucosal immunity",
          "DGI risk ↑ with dissemination (1% of untreated gonorrhea)",
          "Chancroid: Most common GUD in developing countries",
          "HSV recurrence due to latency in sacral ganglia",
          "LGV: Progressive stricture formation if untreated"
        ],
        textbookRefs: [
          { book: "Dermatology (Freedberg et al)", chapter: "Ch 201", edition: "3rd" },
          { book: "Mandell's Principles of Infectious Diseases", chapter: "Ch 219", edition: "10th" }
        ]
      },
      {
        layer: 3,
        slug: "gonorrhea-genital-ulcers-clinical",
        title: "Gonorrhea & Genital Ulcer Diseases - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical presentation, Indian diagnostic approach, and management protocols.",
        contentMd: "# Gonorrhea & Genital Ulcer Diseases - Clinical\n\n## Clinical Presentation of Gonorrhea\n\n### Men (Urethritis)\n- **Incubation**: 2-7 days\n- **Symptoms**: Dysuria, urinary frequency, purulent urethral discharge (often profuse)\n- **Signs**: Meatus edema, urethral tenderness\n- **Course**: Symptomatic in 90% (acute untreated course 3-10 weeks)\n\n### Women (Cervicitis)\n- **Incubation**: 2-7 days\n- **Symptoms**: Often asymptomatic (50%); dysuria, vaginal discharge, lower abdominal pain\n- **Chandelier sign**: Tenderness on cervical manipulation\n- **Course**: Can persist chronically (weeks to months)\n\n### Rectum & Pharynx\n- Often asymptomatic\n- Pharyngeal: Throat discomfort, exudate\n- Rectal: Rectal discharge, pain, tenesmus\n\n## Clinical Presentation of GUD - Indian Context\n\n### Chancroid (Haemophilus ducreyi)\n- **Ulcer**: Painful, purulent base, undermined edges\n- **Adenopathy**: Painful inguinal buboes (>5 cm)\n- **Timeline**: Appears within 3-7 days\n- **India prevalence**: Common in migrant/sex worker populations\n\n### Granuloma Inguinale (Klebsiella granulomatis)\n- **Ulcer**: Beefy red, bleeds easily, rolled edges\n- **Location**: Genitals, groins, perianal area\n- **Adenopathy**: Minimal (characteristic finding)\n- **Secondary infection**: Common\n- **India**: Significant prevalence in south & east India\n\n### LGV (Chlamydia trachomatis)\n- **Stage 1**: Small painless ulcer, often missed\n- **Stage 2**: Painful inguinal lymphadenopathy with purulent discharge\n- **Stage 3**: Chronic phase with strictures, fistulas (can take years)\n- **Rectal involvement**: Increasing in MSM population in India\n\n### Primary Syphilis (Treponema pallidum)\n- **Chancre**: Indurated, painless ulcer with clean base\n- **Location**: Site of inoculation (genitals, lips, rectum)\n- **Healing**: Spontaneous in 3-6 weeks (even without treatment)\n- **Adenopathy**: Non-suppurative, rubbery, mobile lymph nodes\n\n### Genital Herpes\n- **Prodrome**: Burning, tingling (24-48 hours before lesions)\n- **Vesicles**: Clear fluid-filled, extremely painful\n- **Ulcers**: Shallow after vesicle rupture\n- **Systemic symptoms**: Fever, myalgia, malaise\n- **Healing**: 7-10 days (primary episode longer)\n\n## Indian Diagnostic Approach\n\n### Syndromic Management (NACO Guidelines)\n- **Urethral discharge syndrome**: Treat as gonorrhea + chlamydia\n- **GUD syndrome**: Treat empirically for all major causes initially\n- **Clinical diagnosis**: Culture/NAAT not always available in peripheral centers\n\n### Specific Investigations\n- **Gonorrhea**: Gram stain (PMN + gram-neg diplococci); NAAT (gold standard)\n- **Chlamydia**: NAAT, immunofluorescence\n- **Syphilis**: RPR/VDRL (screening), FTA-ABS (confirmation)\n- **HSV**: Giemsa stain (multinucleate giant cells), HSV serology, PCR\n- **Haemophilus ducreyi**: Culture (difficult, requires special medium)\n- **Klebsiella granulomatis**: Donovan bodies on H&E stain\n\n## Management (NACO Guidelines)\n\n### Gonorrhea\n- **1st line**: Ceftriaxone 250 mg IM once + Azithromycin 1g oral\n- **Alternatives**: Spectinomycin if cephalosporin allergy\n- **Partner notification**: Mandatory\n- **Test of cure**: Not routinely recommended\n\n### GUD - Syndromic Treatment\n- **Empiric treatment**: Cover all likely agents initially\n- **Haemophilus ducreyi**: Azithromycin 1g daily × 3 days\n- **Granuloma inguinale**: Doxycycline 100 mg BD × 21 days\n- **LGV**: Doxycycline 100 mg BD × 21 days\n- **Syphilis**: Benzyl penicillin IM (dose depends on stage)\n- **HSV**: Acyclovir 400 mg TDS × 7-10 days (primary), TDS × 5 days (recurrence)\n\n### Complications Management\n- **PID**: Hospitalization, IV antibiotics (ceftriaxone + doxycycline)\n- **DGI**: IV antibiotics, prolonged course\n- **Neonatal ophthalmia**: Ceftriaxone ointment prophylaxis at birth",
        mnemonics: [
          { text: "GUD ulcer differences mnemonic", explanation: "Chancroid=painful+purulent; GI=beefy+no nodes; Syph=painless+indurated" }
        ],
        keyPoints: [
          "Gonorrhea asymptomatic in 50% of women (major transmission risk)",
          "NACO syndromic approach ensures early treatment in resource-limited settings",
          "All GUD patients require syphilis screening",
          "Partner notification critical for all STIs",
          "Prevention: Condom use, annual screening for sexually active individuals"
        ],
        textbookRefs: [
          { book: "BDC Dermatology & Venereology", chapter: "Ch 27", edition: "7th" },
          { book: "National STI Guidelines (NACO)", edition: "2021" }
        ]
      },
      {
        layer: 4,
        slug: "gonorrhea-genital-ulcers-exam",
        title: "Gonorrhea & Genital Ulcer Diseases - Exam Prep",
        estimatedMinutes: 15,
        summary: "NEET PG high-yield concepts, comparison tables, and clinical scenarios.",
        contentMd: "# Gonorrhea & Genital Ulcer Diseases - Exam Prep\n\n## Comparison Table of GUD\n\n| Feature | Chancroid | Granuloma Inguinale | LGV | Syphilis | HSV |\n|---------|-----------|-------------------|-----|----------|-----|\n| **Organism** | H. ducreyi | K. granulomatis | C. trachomatis | T. pallidum | HSV-1/2 |\n| **Ulcer** | Painful, purulent | Beefy red, bleeds | Painless | Painless, indurated | Painful, shallow |\n| **Adenopathy** | Suppurative buboes | Minimal (\"pseudobuboes\") | Suppurative buboes | Non-suppurative, rubbery | Rare |\n| **Incubation** | 3-7 days | 3-90 days | 3-12 days | 3-90 days | 2-7 days |\n| **Treatment** | Azithromycin 1g×3 | Doxy 100mg BD×21d | Doxy 100mg BD×21d | Penicillin (dose varies) | Acyclovir 400×3×7-10d |\n\n## Gonorrhea High-Yield Facts\n- **Prevalence**: 19% of PID cases without treatment\n- **Antibiotic resistance**: Increasing in India (due to PPNG, TRNG strains)\n- **Silent infections**: 50% of women asymptomatic → higher transmission\n- **Neonatal infection**: Ophthalmia neonatorum if untreated\n- **DGI risk**: 0.5-3% if untreated\n\n## NEAT-PG Focused Areas\n- **Syndromic diagnosis**: When culture/NAAT unavailable\n- **Treatment failures**: Know alternative regimens\n- **Complications**: PID, DGI, neonatal infection\n- **Resistance patterns**: PPNG (penicillinase-producing), TRNG (tetracycline-resistant)\n\n## Clinical Scenarios\n- **Man with purulent discharge + dysuria**: Likely gonorrhea; treat empirically\n- **Woman with asymptomatic cervicitis**: Annual screening essential\n- **Inguinal bubo + painful ulcer**: Chancroid (treat with Azithromycin)\n- **Inguinal bubo + beefy ulcer, no pain**: Granuloma inguinale (long course of doxy)\n- **Recurrent genital ulcers + systemic symptoms**: HSV (primary episode, longer course)\n\n## India-Specific Points\n- **NACO syndromic approach**: Gold standard when lab facilities limited\n- **Sex worker screening**: Biannual screening recommended\n- **MSM population**: Increasing prevalence of rectal STIs\n- **Partner notification**: Challenging but essential for outbreak control",
        mnemonics: [
          { text: "GUD therapy: \"ABC DHL\"", explanation: "Azithromycin (Chancroid), Benzyl penicillin (Syphilis); Doxy (H. ducreyi, Granuloma, LGV)" }
        ],
        keyPoints: [
          "Gonorrhea: Cephalosporin resistance emerging → use ceftriaxone + azithromycin",
          "GUD empiric treatment often necessary in peripheral centers",
          "Test of cure for gonorrhea not routinely done (resistance testing more useful)",
          "Annual STI screening for all sexually active individuals recommended"
        ],
        textbookRefs: [
          { book: "NEET PG Dermatology", edition: "2024" },
          { book: "National STI Guidelines", chapter: "Gonorrhea & GUD", edition: "2021" }
        ]
      },
      {
        layer: 5,
        slug: "gonorrhea-genital-ulcers-recall",
        title: "Gonorrhea & Genital Ulcer Diseases - Active Recall",
        estimatedMinutes: 10,
        summary: "Q&A flashcards for STI core concepts.",
        contentMd: "# Gonorrhea & Genital Ulcer Diseases - Active Recall\n\n## Q&A Flashcards\n\n**Q1: What is the most common bacterial STI worldwide?**\nA: Gonorrhea (Neisseria gonorrhoeae)\n\n**Q2: Why is gonorrhea asymptomatic in 50% of women?**\nA: Endocervix is less inflammatory than urethra; no dysuria symptom\n\n**Q3: What is the incubation period for gonorrhea?**\nA: 2-7 days (average 3-5 days)\n\n**Q4: First-line treatment for gonorrhea in India?**\nA: Ceftriaxone 250 mg IM once + Azithromycin 1g oral\n\n**Q5: What is the distinguishing feature of granuloma inguinale?**\nA: Minimal adenopathy with beefy red, easily bleeding ulcer\n\n**Q6: What are Donovan bodies and in which disease?**\nA: Intracellular organisms seen in granuloma inguinale (Klebsiella granulomatis)\n\n**Q7: Chancroid presentation: Which lymph nodes are involved?**\nA: Painful inguinal buboes (can suppurate and discharge pus)\n\n**Q8: What is the treatment for genital herpes primary episode?**\nA: Acyclovir 400 mg TDS × 7-10 days",
        mnemonics: [
          { text: "Remember GUD ulcer painfulness: \"C-G-L-S\"", explanation: "Chancroid (painful), Granuloma (painless), LGV (painless), Syphilis (painless)" }
        ],
        keyPoints: [
          "Chandelier sign = cervical tenderness in gonorrhea",
          "NACO syndromic approach standard in India",
          "All GUD patients need syphilis serology",
          "Partner notification mandatory for all STIs",
          "Prevention through condoms and regular screening critical"
        ],
        textbookRefs: [
          { book: "BDC Dermatology", chapter: "Ch 27", edition: "7th" },
          { book: "NACO Guidelines", edition: "2021" }
        ]
      }
    ]
  },
  {
    topicCode: "EN-MOD-01-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "vertigo-menieres-foundation",
        title: "Vertigo & Meniere's Disease - Foundation",
        estimatedMinutes: 20,
        summary: "Introduction to vertigo classification, definitions, and epidemiology of Meniere's disease.",
        contentMd: "# Vertigo & Meniere's Disease - Foundation\n\n## Definition of Vertigo\n**Vertigo**: Illusion of movement of self or surroundings (true vertigo). Often confused with dizziness (non-specific sensation).\n\n## Classification of Vertigo\n\n### Central Vertigo\n- **Causes**: Brainstem (vestibular nuclei), cerebellum stroke/bleeds\n- **Features**: Gradual onset, associated neurological signs, no nausea\n- **Examples**: Wallenberg syndrome, cerebellar hemorrhage\n\n### Peripheral Vertigo\n- **Causes**: Inner ear or vestibular nerve dysfunction\n- **Features**: Acute onset, severe, associated nausea/vomiting, nystagmus\n- **Examples**: BPPV, Meniere's disease, vestibular neuritis, labyrinthitis\n\n## Meniere's Disease Overview\n\n### Definition\nChronic disorder of inner ear characterized by recurrent episodes of:\n- Vertigo\n- Tinnitus\n- Hearing loss\n- Aural fullness\n\n### Epidemiology\n- **Incidence**: 15 cases per 100,000 per year (worldwide)\n- **Age of onset**: 30-50 years (peak at 40-50 years)\n- **Gender**: Slight female predominance\n- **Bilateral**: ~30% develop bilateral disease within 5 years\n- **India**: Estimated 3-5 cases per 100,000 (similar to developed countries)\n\n### Etiology\n- **Pathophysiology**: Endolymphatic hydrops (increased endolymph in membranous labyrinth)\n- **Cause**: Unknown (multifactorial: viral, autoimmune, genetic, vascular)\n- **Diagnostic criteria**: Four symptoms (vertigo, tinnitus, hearing loss, aural fullness) with 2 documented episodes",
        mnemonics: [
          { text: "VT-HA (Vertigo-Tinnitus-Hearing Loss-Aural fullness)", explanation: "Classic tetrad of Meniere's disease" }
        ],
        keyPoints: [
          "Meniere's disease = endolymphatic hydrops",
          "Bilateral disease develops in 30% of patients",
          "Aural fullness is pathognomonic symptom",
          "Hearing loss initially low-frequency, may become high-frequency"
        ],
        textbookRefs: [
          { book: "ENT & Head-Neck Surgery (Dhingra)", chapter: "Ch 28", edition: "8th" },
          { book: "Scott-Brown's Otolaryngology", chapter: "Ch 89", edition: "8th" }
        ]
      },
      {
        layer: 2,
        slug: "vertigo-menieres-mechanism",
        title: "Vertigo & Meniere's Disease - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathophysiology of vertigo, vestibular system anatomy, and endolymphatic hydrops mechanism.",
        contentMd: "# Vertigo & Meniere's Disease - Mechanism\n\n## Normal Vestibular System\n\n### Anatomy\n- **Semicircular canals**: Detect rotational acceleration (anterior, posterior, lateral)\n- **Utricle & saccule**: Detect linear acceleration & gravity\n- **Vestibular nerve**: Carries info to vestibular nuclei (CN VIII)\n- **VOR pathway**: Vestibuloocular reflex (stabilizes gaze during head movement)\n\n### Function\n- **Endolymph**: High K+, low Na+; enclosed in membranous labyrinth\n- **Perilymph**: High Na+, low K+; surrounds membranous labyrinth\n- **Cupula**: Gelatinous structure in semicircular canals\n- **Otoconia**: Calcium carbonate crystals in utricle/saccule\n\n## Pathophysiology of Meniere's Disease\n\n### Endolymphatic Hydrops Mechanism\n1. **Increased endolymph production** OR **decreased endolymph reabsorption**\n2. **Pressure buildup** in membranous labyrinth\n3. **Rupture or weakening** of Reissner's membrane\n4. **Mixing of endolymph + perilymph** → potassium toxicity\n5. **Hair cell destruction** → hearing loss, vertigo\n\n### Etiopathogenesis Theories\n- **Viral**: Viral infection → endolymphatic duct inflammation\n- **Autoimmune**: Anti-HSP70 antibodies against inner ear cells\n- **Allergic**: IgE-mediated response in endolymphatic sac\n- **Vascular**: Migraine-related vasospasm\n- **Genetic**: Familial forms (5-10% of cases)\n\n## Vertigo Mechanism in Meniere's\n\n### During Acute Attack\n- **Endolymph pressure ↑** → deflects cupula → inappropriate vestibular signal\n- **Nystagmus**: Horizontal or horizontal-rotatory (toward affected ear)\n- **Nausea/vomiting**: From brainstem vestibular nuclei activation\n- **Hearing loss**: Low-frequency (due to cochlear hydrops)\n\n### Mechanism of Remission\n- **Rupture of Reissner's membrane**: Relieves pressure temporarily\n- **Healing of membrane**: Pressure normalizes → symptoms resolve\n- **Progressive inner ear damage**: With repeated episodes → permanent hearing loss\n\n## Other Causes of Peripheral Vertigo\n\n### BPPV (Benign Paroxysmal Positional Vertigo)\n- **Mechanism**: Otolith dislodgement → cupula deflection with head movement\n- **Most common cause**: Idiopathic (50%), trauma, degeneration\n- **Duration**: Seconds to 1 minute with positional change\n\n### Vestibular Neuritis\n- **Mechanism**: Viral inflammation of vestibular nerve (CN VIII)\n- **Duration**: Weeks to months\n- **Associated**: URI prodrome, no hearing loss\n\n### Labyrinthitis\n- **Mechanism**: Viral or bacterial infection of inner ear\n- **Associated**: Fever, otitis media, hearing loss, nystagmus",
        mnemonics: [
          { text: "PAIR for vertigo types", explanation: "Peripheral (acute, severe), Auditory (hearing loss), Inflammatory, Recurrent" }
        ],
        keyPoints: [
          "Endolymphatic hydrops = increased endolymph pressure in membranous labyrinth",
          "Meniere's: Rupture of Reissner's membrane → symptom relief then recurrence",
          "Vestibular nerve CN VIII carries balance information to brainstem",
          "Vestibuloocular reflex (VOR) essential for visual stability during head movement"
        ],
        textbookRefs: [
          { book: "ENT & Head-Neck Surgery (Dhingra)", chapter: "Ch 28", edition: "8th" },
          { book: "Neurology (Adams & Victor)", chapter: "Dizziness & Vertigo", edition: "11th" }
        ]
      },
      {
        layer: 3,
        slug: "vertigo-menieres-clinical",
        title: "Vertigo & Meniere's Disease - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical presentation, Indian diagnostic criteria, and management of Meniere's disease.",
        contentMd: "# Vertigo & Meniere's Disease - Clinical\n\n## Clinical Presentation of Meniere's Disease\n\n### Early Stage (Early Meniere's)\n- **Recurrent vertigo**: 20-30 min to several hours\n- **Fluctuating hearing loss**: Low-frequency sensorineural (reversible)\n- **Tinnitus**: Variable (roaring, buzzing)\n- **Aural fullness**: Classic symptom (feeling of pressure in ear)\n- **Nausea/vomiting**: Severe, can be disabling\n\n### Late Stage (Late Meniere's)\n- **Vertigo**: Less frequent or absent\n- **Permanent hearing loss**: Becomes flat (high + low frequencies)\n- **Chronic tinnitus**: Persistent\n- **Imbalance**: Due to cumulative vestibular damage\n- **Vertigo attacks**: May cease as inner ear \"burns out\"\n\n## Indian Diagnostic Criteria (Modified AAO-HNS)\nClinical diagnosis requires:\n1. **Two episodes of spontaneous, rotatory vertigo** (≥20 min each)\n2. **Audiometrically documented low-frequency sensorineural hearing loss**\n3. **Aural symptoms** (tinnitus, aural fullness)\n4. **Not explained by other diagnosis**\n\n## Investigations\n\n### Audiovestibular Tests\n- **Pure tone audiometry**: Low-frequency dip (500-2000 Hz)\n- **Speech discrimination**: Usually normal\n- **Caloric test**: Reduced vestibular response (affected side)\n- **Videonystagmography (VNG)**: Detects nystagmus\n\n### Imaging\n- **MRI with FLAIR**: For endolymphatic hydrops (diagnostic specificity ~70%)\n- **MRI with gadolinium**: Delayed imaging shows gadolinium enhancement\n- **CT**: Rule out retrocochlear pathology\n\n### Electrocochleography (ECoG)\n- **Principle**: Measures electrical potentials in cochlea\n- **In Meniere's**: Elevated summating potential (reflects hydrops)\n- **Sensitivity**: 60-80% but not specific\n\n## Management of Meniere's Disease\n\n### Conservative Management (First-line)\n- **Salt restriction**: <2g/day (reduces endolymph volume)\n- **Diuretics**: Hydrochlorothiazide 25 mg BD + Amiloride 5 mg OD\n  - Reduces endolymph production & increases reabsorption\n  - Effective in 60% of patients\n- **Methyldopa/Betahistine**: Controversial, used in some centers\n- **Stress management**: Stress triggers attacks\n- **Vestibular rehabilitation**: For chronic imbalance\n\n### Medical Management During Acute Attack\n- **Antiemetics**: Metoclopramide 10 mg IV/IM, Ondansetron 4-8 mg IV\n- **Vestibular suppressants**: Dimenhydrinate, Cinnarizine\n- **Corticosteroids**: Role controversial (may stabilize immune dysfunction)\n- **Intratympanic dexamethasone**: 24 mg in 0.5 mL, monthly injections\n\n### Surgical Management (Failed conservative treatment)\n- **Endolymphatic sac decompression**: Relieves endolymphatic hydrops\n- **Labyrinthectomy**: Destroys labyrinth (severe hearing loss already present)\n- **Vestibular nerve section**: Preserves hearing but major surgery\n- **Gentamicin injection (intratympanic)**: Ablates vestibular function\n\n## Differential Diagnosis of Recurrent Vertigo\n- **BPPV**: Brief episodes (seconds), triggered by head position\n- **Migrainous vertigo**: Associated with migraine headaches\n- **Vestibular migraine**: Vertigo during or between migraine attacks\n- **Anxiety**: Preceded by psychological stress\n- **Posterior circulation stroke**: Sudden onset, neurological signs",
        mnemonics: [
          { text: "Meniere's management: \"SACK\"", explanation: "Salt restriction, Audiometry, Caloric test, Killian (conservative management)" }
        ],
        keyPoints: [
          "Salt restriction + diuretics: Effective in 60% of Meniere's cases",
          "Low-frequency hearing loss pathognomonic (mid-frequency dip characteristic)",
          "Aural fullness most specific symptom for Meniere's",
          "Intratympanic gentamicin: Destroys vestibular epithelium (last resort)"
        ],
        textbookRefs: [
          { book: "ENT & Head-Neck Surgery (Dhingra)", chapter: "Ch 28", edition: "8th" },
          { book: "FOGSI Guidelines on Meniere's", edition: "2018" }
        ]
      },
      {
        layer: 4,
        slug: "vertigo-menieres-exam",
        title: "Vertigo & Meniere's Disease - Exam Prep",
        estimatedMinutes: 15,
        summary: "NEET PG high-yield concepts, diagnostic criteria, and treatment algorithms.",
        contentMd: "# Vertigo & Meniere's Disease - Exam Prep\n\n## Comparison of Vertigo Types\n\n| Feature | Meniere's | BPPV | Vestib. Neuritis | Labyrinthitis |\n|---------|-----------|------|------------------|----------------|\n| **Duration** | 20 min-hours | Seconds | Days-weeks | Hours-days |\n| **Onset** | Spontaneous | Positional | Spontaneous | Spontaneous |\n| **Hearing** | Yes (LF) | No | No | Yes |\n| **Tinnitus** | Yes | No | Maybe | Yes |\n| **Aural fullness** | Yes | No | No | Maybe |\n| **Nausea** | Severe | Mild | Moderate | Severe |\n| **Nystagmus** | Rotatory/horiz | Up-beating | Horizontal | Mixed |\n\n## High-Yield Facts for NEET PG\n- **Meniere's pathology**: Endolymphatic hydrops (↑ endolymph pressure)\n- **Hearing loss pattern**: Low-frequency (500-2000 Hz) sensorineural initially\n- **Bilateral in 30%**: Develops within 5 years\n- **Aural fullness**: Pathognomonic symptom\n- **Treatment**: Salt restriction + diuretics (60% response rate)\n\n## Diagnostic Algorithm\n1. **History of recurrent vertigo** → Is there hearing loss?\n   - **YES + low-freq hearing loss** → Likely Meniere's\n   - **NO** → Consider BPPV, vestibular neuritis\n2. **Positional test** → Positive in BPPV, negative in Meniere's\n3. **Caloric test** → Reduced response in Meniere's (affected side)\n4. **MRI with FLAIR** → Shows hydrops (70% sensitivity)\n\n## Clinical Scenarios\n- **30-year-old with recurrent vertigo, low-freq hearing loss, tinnitus**: Meniere's disease → Start salt restriction + diuretics\n- **Sudden vertigo after head positioning**: BPPV → Dix-Hallpike maneuver, Epley maneuver\n- **Vertigo + fever + otitis media**: Labyrinthitis → Antibiotics\n- **Vertigo + URI + no hearing loss**: Vestibular neuritis → Observation, vestibular rehab",
        mnemonics: [
          { text: "Meniere's tetrad: \"VT-HA\"", explanation: "Vertigo, Tinnitus, Hearing loss, Aural fullness" }
        ],
        keyPoints: [
          "Meniere's vs BPPV: Meniere's has hearing loss, BPPV doesn't",
          "Intratympanic dexamethasone: 24 mg monthly injections",
          "Endolymphatic sac decompression: First surgical option",
          "Gentamicin intratympanic: Last resort (irreversible hearing loss)"
        ],
        textbookRefs: [
          { book: "NEET PG ENT", edition: "2024" },
          { book: "AAO-HNS Clinical Practice Guidelines", edition: "2018" }
        ]
      },
      {
        layer: 5,
        slug: "vertigo-menieres-recall",
        title: "Vertigo & Meniere's Disease - Active Recall",
        estimatedMinutes: 10,
        summary: "Q&A flashcards for vertigo and Meniere's core concepts.",
        contentMd: "# Vertigo & Meniere's Disease - Active Recall\n\n## Q&A Flashcards\n\n**Q1: What is Meniere's disease pathophysiology?**\nA: Endolymphatic hydrops (increased endolymph pressure in membranous labyrinth)\n\n**Q2: Classic tetrad of Meniere's disease?**\nA: Vertigo, Tinnitus, Hearing loss (low-frequency), Aural fullness\n\n**Q3: Why is aural fullness pathognomonic for Meniere's?**\nA: Reflects increased pressure in membranous labyrinth (endolymphatic hydrops)\n\n**Q4: First-line treatment for Meniere's disease?**\nA: Salt restriction (<2g/day) + Diuretics (Hydrochlorothiazide + Amiloride)\n\n**Q5: What is the difference between peripheral and central vertigo?**\nA: Peripheral: severe, nausea/vomiting, nystagmus; Central: gradual, neurological signs\n\n**Q6: Most common cause of vertigo?**\nA: BPPV (Benign Paroxysmal Positional Vertigo) - accounts for 25% of vertigo cases\n\n**Q7: How does salt restriction help Meniere's?**\nA: Reduces endolymph volume → decreases pressure in membranous labyrinth\n\n**Q8: What is the characteristic hearing loss pattern in Meniere's?**\nA: Low-frequency sensorineural hearing loss (500-2000 Hz), initially reversible",
        mnemonics: [
          { text: "Meniere's drugs: \"HASH\"", explanation: "Hydrochlorothiazide, Amiloride, Salt restriction, Head/Hearing preservation" }
        ],
        keyPoints: [
          "Meniere's vs BPPV: Duration (Meniere's 20-min-hours vs BPPV seconds-1 min)",
          "Hearing loss distinguishes Meniere's from other peripheral vertigo",
          "Intratympanic gentamicin: Irreversible, last resort treatment",
          "Vestibular nerve section: Preserves hearing but major surgery"
        ],
        textbookRefs: [
          { book: "ENT & Head-Neck Surgery (Dhingra)", chapter: "Ch 28", edition: "8th" },
          { book: "NEET PG ENT", edition: "2024" }
        ]
      }
    ]
  },
  {
    topicCode: "EN-MOD-02-TOP-05",
    layers: [
      {
        layer: 1,
        slug: "dns-nasal-tumors-foundation",
        title: "DNS & Nasal Tumors - Foundation",
        estimatedMinutes: 20,
        summary: "Introduction to deviated nasal septum and classification of nasal tumors.",
        contentMd: "# DNS & Nasal Tumors - Foundation\n\n## Deviated Nasal Septum (DNS)\n\n### Definition\nDeviation of nasal septum from midline, resulting in airway obstruction on one or both sides.\n\n### Classification by Location\n- **C-shaped**: Concave deviation\n- **S-shaped**: Alternating curves\n- **Unilateral**: Deviation to one side\n- **Bilateral**: Both sides deviated\n\n### Etiology\n- **Traumatic**: Nasal fracture (most common)\n- **Developmental**: Growth discrepancy between septal cartilage and bone\n- **Spontaneous**: Pressure during growth phase\n\n### Epidemiology\n- **Prevalence**: 20-50% of adult population\n- **Symptomatic**: 10-15% have significant obstruction\n- **Most common**: Posteroinferior deviation\n\n## Nasal Tumors Overview\n\n### Classification by Origin\n\n#### Benign Tumors\n- **Angiofibroma**: Vascular tumor in adolescent males\n- **Osteoma**: Bony tumor\n- **Papilloma**: Squamous epithelial origin\n- **Hemangioma**: Vascular lesion\n- **Encephalocele**: Meningeal hernia\n\n#### Malignant Tumors\n- **Squamous cell carcinoma**: Most common (70-80%)\n- **Adenocarcinoma**: 10-15% (wood dust, leather workers - occupational)\n- **Olfactory neuroblastoma**: Neuroendocrine origin\n- **Lymphoma**: Rare in sinonasal region\n- **Melanoma**: Rare, poor prognosis\n\n### Epidemiology\n- **Incidence**: 3 per 100,000\n- **Squamous cell carcinoma**: Peak age 50-70 years\n- **Risk factors**: Smoking, alcohol, occupational (wood/leather dust), HPV",
        mnemonics: [
          { text: "DNS causes: \"TDS\"", explanation: "Trauma, Developmental, Spontaneous" }
        ],
        keyPoints: [
          "DNS: Present in 50% of population, symptomatic in 10-15%",
          "Nasal tumors: 80% are squamous cell carcinoma",
          "Adenocarcinoma associated with wood/leather dust exposure",
          "Olfactory neuroblastoma has neuroendocrine origin"
        ],
        textbookRefs: [
          { book: "ENT & Head-Neck Surgery (Dhingra)", chapter: "Ch 21-22", edition: "8th" },
          { book: "Scott-Brown's Otolaryngology", chapter: "Ch 67-68", edition: "8th" }
        ]
      },
      {
        layer: 2,
        slug: "dns-nasal-tumors-mechanism",
        title: "DNS & Nasal Tumors - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathophysiology of nasal obstruction and tumor pathogenesis.",
        contentMd: "# DNS & Nasal Tumors - Mechanism\n\n## Pathophysiology of DNS\n\n### Mechanism of Obstruction\n1. **Septal cartilage deformity** → asymmetric growth\n2. **Pushing of septum** towards opposite side\n3. **Narrowing of nasal airway** → increased airflow resistance\n4. **Turbulent airflow** → sensation of obstruction\n\n### Associated Changes\n- **Compensatory hypertrophy**: Opposite turbinate enlarges\n- **Mucosal drying**: Abnormal airflow pattern\n- **Rhinosinusitis**: Obstruction of sinus ostia\n- **Sleep apnea**: Significant DNS can contribute\n- **Eustachian tube dysfunction**: With posteroinferior deviation\n\n## Pathophysiology of Nasal Tumors\n\n### Squamous Cell Carcinoma (SCC)\n- **Origin**: Surface squamous epithelium\n- **Risk factors**: Smoking (10-fold ↑ risk), alcohol, HPV\n- **Mechanism**: Chronic inflammation → dysplasia → carcinoma\n- **Metastasis**: To regional lymph nodes (20% at presentation)\n\n### Adenocarcinoma\n- **Occupational**: Wood dust (furniture makers), leather dust (shoemakers)\n- **Mechanism**: Chronic irritation → intestinal metaplasia → adenocarcinoma\n- **Latency**: 40+ years after exposure (long latency period)\n- **Histology**: Usually intestinal type\n\n### Olfactory Neuroblastoma\n- **Origin**: Olfactory epithelium (roof of nose)\n- **Neuroendocrine**: Arises from olfactory receptor neurons\n- **Genetics**: Some familial cases reported\n- **Aggressive**: Can invade cribriform plate → intracranial extension\n\n### Angiofibroma\n- **Benign vascular tumor**: Highly vascular, lacks true endothelium\n- **Hormonal**: Contains androgen receptors (explains male predominance)\n- **Mechanism**: Pressure from enlarging mass → obstruction, epistaxis\n- **Adolescent males**: Age 14-25 years (testosterone-driven growth)\n\n## Growth & Invasion Patterns\n\n### Local Invasion Routes\n- **Posteriorly**: Invades nasopharynx\n- **Superiorly**: Through cribriform plate → anterior fossa (brain invasion)\n- **Laterally**: Into maxillary sinus\n- **Medially**: Into septum\n\n### Perineural Invasion\n- Common in adenocarcinoma & SCC\n- Follows trigeminal nerve branches\n- Explains facial pain & later complications\n\n### Lymphatic Spread\n- First-echelon nodes: Cervical lymph nodes\n- Regional metastases: 20-30% at presentation\n- Distant metastases: Lungs, liver (late stage)",
        mnemonics: [
          { text: "Nasal tumor types: \"SNAOB\"", explanation: "Squamous (80%), Neuro (ENB), Adeno (wood dust), Others (rare), Benign (vascular)" }
        ],
        keyPoints: [
          "DNS obstruction due to asymmetric growth and pushing of septum",
          "SCC: Smoking + alcohol main risk factors",
          "Adenocarcinoma: 40+ year latency from occupational exposure",
          "Angiofibroma: Adolescent males, testosterone-driven, highly vascular"
        ],
        textbookRefs: [
          { book: "ENT & Head-Neck Surgery (Dhingra)", chapter: "Ch 21-22", edition: "8th" },
          { book: "Surgical Oncology (Abeloff)", chapter: "Ch 43", edition: "5th" }
        ]
      },
      {
        layer: 3,
        slug: "dns-nasal-tumors-clinical",
        title: "DNS & Nasal Tumors - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical presentation, diagnosis, and management of DNS and nasal tumors.",
        contentMd: "# DNS & Nasal Tumors - Clinical\n\n## Clinical Presentation of DNS\n\n### Symptoms\n- **Nasal obstruction**: Unilateral or bilateral (worse on deviation side)\n- **Rhinosinusitis**: Recurrent (due to ostial obstruction)\n- **Headache**: Sphenoid deviation can cause sphenoid sinus disease\n- **Snoring/Sleep apnea**: Due to upper airway obstruction\n- **Otalgia**: Referred pain or Eustachian tube dysfunction\n- **Epistaxis**: From abnormal airflow & mucosal drying\n\n### Examination\n- **Anterior rhinoscopy**: Direct visualization\n- **Nasal endoscopy**: Gold standard (assess degree & exact location)\n- **Sleep evaluation**: If sleep apnea suspected\n\n## Management of DNS\n\n### Conservative\n- **Nasal saline irrigation**: Reduces symptoms by moisturizing mucosa\n- **Intranasal steroids**: Fluticasone propionate spray (reduces edema)\n- **Antihistamines**: If allergic component\n- **Sleep position**: Side sleeping reduces symptoms\n\n### Surgical (Septoplasty)\n**Indications**:\n- Symptomatic obstruction failing conservative therapy\n- Obstruction interfering with CPAP use (sleep apnea)\n- Obstruction affecting sinus surgery\n- Associated septorhinoplasty for cosmetic reasons\n\n**Technique**: Submucosal resection or endoscopic septoplasty\n**Success rate**: 70-80% symptom improvement\n**Complications**: Perforation, synechiae, numbness\n\n## Clinical Presentation of Nasal Tumors\n\n### Early Signs\n- **Unilateral nasal obstruction**: Most common presenting symptom\n- **Rhinorrhea**: Blood-stained discharge\n- **Epistaxis**: Frequent nosebleeds\n- **Facial pain**: Posterolateral tumors (trigeminal involvement)\n\n### Late Signs\n- **Facial swelling**: Mass effect on cheek/forehead\n- **Proptosis**: Superior tumors compressing orbit\n- **Palatal bulge**: Invading into hard palate\n- **Neurological**: Diplopia, facial hypoesthesia (CN involvement)\n- **Intracranial**: Headache, CSF rhinorrhea (cribriform plate invasion)\n\n## Investigations for Nasal Tumors\n\n### Endoscopy\n- **Nasal endoscopy**: Direct visualization, biopsy site assessment\n- **Biopsy**: Gold standard diagnosis (avoid before imaging)\n- **Histology**: Essential for treatment planning\n\n### Imaging\n- **CT paranasal sinuses**: Best for bone destruction, osseous extension\n  - **T1/T2**: Shows soft tissue involvement\n  - **Coronal & axial**: Assesses sagittal/lateral extension\n- **MRI**: Better for soft tissue, intracranial, perineural invasion\n  - **T1 contrast**: Shows tumor boundaries\n  - **T2**: Differentiates tumor from secretions\n- **PET-CT**: For staging, distant metastases\n\n### TNM Staging (AJCC)\n- **T stage**: Tumor extent (T1-T4)\n- **N stage**: Regional lymph nodes (N0-N3)\n- **M stage**: Distant metastases (M0-M1)\n- **Grade**: Histological grade affects prognosis\n\n## Management of Nasal Tumors\n\n### Angiofibroma (Benign)\n- **Preoperative embolization**: Reduces bleeding (24-48h before surgery)\n- **Surgical excision**: Endoscopic resection (gold standard)\n- **Embolization alone**: For unresectable/recurrent cases\n- **Hormone therapy**: Testosterone blockers (leuprolide) for palliative care\n- **Radiation**: Second-line for recurrent cases\n\n### Malignant Tumors (SCC, Adeno, ENB)\n\n#### Staging Workup\n- CT/MRI of primary site\n- Neck imaging (CT/ultrasound)\n- PET-CT for metastases\n- CBC, metabolic panel\n\n#### Treatment by Stage\n\n**Early stage (T1-T2, N0)**:\n- Endoscopic surgical resection alone\n- OR single-modality radiation therapy\n- 5-year survival: 60-80%\n\n**Advanced (T3-T4 or N+)**:\n- Combined modality therapy:\n  - Surgical resection (endoscopic or open)\n  - Neoadjuvant chemotherapy (cisplatin-based)\n  - Postoperative radiation (60 Gy in 30 fractions)\n- 5-year survival: 30-50%\n\n**Unresectable/Metastatic**:\n- Chemotherapy (cisplatin + 5-FU): Palliative\n- Immunotherapy: Emerging role (PD-1/PD-L1 inhibitors)\n- Radiation: Palliative for pain/hemorrhage\n\n### Complications of Surgery\n- **Hemorrhage**: Angiofibroma removal\n- **CSF leak**: Superior/cribriform plate involvement\n- **Anosmia**: Olfactory nerve involvement\n- **Orbital complications**: Vision loss, enophthalmos",
        mnemonics: [
          { text: "Nasal tumor red flags: \"BEEP\"", explanation: "Bloody discharge, Epistaxis, Extension (unilateral), Pain (facial)" }
        ],
        keyPoints: [
          "Septoplasty: 70-80% symptom improvement rate",
          "Angiofibroma: Preoperative embolization reduces hemorrhage",
          "Malignant tumors: Combined modality therapy (surgery + chemorad) for advanced cases",
          "5-year survival SCC: 60-80% early stage, 30-50% advanced stage"
        ],
        textbookRefs: [
          { book: "ENT & Head-Neck Surgery (Dhingra)", chapter: "Ch 21-22", edition: "8th" },
          { book: "NCCN Head & Neck Cancer Guidelines", edition: "2024" }
        ]
      },
      {
        layer: 4,
        slug: "dns-nasal-tumors-exam",
        title: "DNS & Nasal Tumors - Exam Prep",
        estimatedMinutes: 15,
        summary: "NEET PG high-yield facts, comparison tables, and clinical scenarios.",
        contentMd: "# DNS & Nasal Tumors - Exam Prep\n\n## DNS vs Rhinitis Comparison\n\n| Feature | DNS | Allergic Rhinitis | Rhinosinusitis |\n|---------|-----|------------------|----------------|\n| **Obstruction** | Structural | Mucosal edema | Inflammatory |\n| **Severity** | Fixed | Variable | Variable |\n| **Bilateral** | Usually one side | Bilateral | Bilateral |\n| **Endoscopy** | Septal deviation | Turbinate edema | Polyps, pus |\n| **Treatment** | Surgery | Steroids, antihistamines | Antibiotics, steroids |\n\n## Nasal Tumor Types Comparison\n\n| Type | Age | Male:Female | Presentation | Prognosis |\n|------|-----|----------|--------------|----------|\n| **Angiofibroma** | 14-25 | 20:1 | Epistaxis, mass | Benign, recurrent |\n| **SCC** | 50-70 | 2:1 | Obstruction, pain | 60% 5-yr (early) |\n| **Adenocarcinoma** | 50-80 | 1:1 | Obstruction, pain | 40% 5-yr |\n| **ENB** | 40-60 | 1:1 | Obstruction, smell loss | 50% 5-yr |\n\n## High-Yield Facts\n- **Angiofibroma**: Adolescent males, testosterone-driven, preop embolization\n- **Wood dust adenocarcinoma**: Furniture workers, 40+ year latency\n- **SCC risk**: Smoking + alcohol (synergistic)\n- **ENB**: Cribriform plate involvement → intracranial extension\n- **TNM staging**: Critical for treatment planning\n\n## NEET PG Scenarios\n- **Adolescent boy with epistaxis & nasal mass**: Angiofibroma → Preop embolization → Endoscopic resection\n- **50-year-old with unilateral obstruction & blood-stained discharge**: Malignant tumor → Biopsy → Staging (CT/MRI/PET) → Combined therapy\n- **Adult with nasal obstruction & snoring**: DNS vs sleep apnea → Endoscopy → Septoplasty if DNS confirmed\n- **Furniture worker with obstruction & facial pain**: Adenocarcinoma → Occupational exposure history → Imaging, biopsy",
        mnemonics: [
          { text: "Nasal tumor treatment: \"ES-CR\"", explanation: "Endoscopic resection, Surgery, Chemotherapy, Radiation" }
        ],
        keyPoints: [
          "DNS: Septoplasty indications - failed conservative therapy, obstruction of CPAP",
          "Angiofibroma: Most common benign nasal tumor in adolescents",
          "SCC: Most common malignant nasal tumor (80% of cases)",
          "Combined modality therapy (surgery + chemorad): Standard for advanced malignancies"
        ],
        textbookRefs: [
          { book: "NEET PG ENT", edition: "2024" },
          { book: "NCCN Guidelines", chapter: "Head & Neck Cancer", edition: "2024" }
        ]
      },
      {
        layer: 5,
        slug: "dns-nasal-tumors-recall",
        title: "DNS & Nasal Tumors - Active Recall",
        estimatedMinutes: 10,
        summary: "Q&A flashcards for DNS and nasal tumor concepts.",
        contentMd: "# DNS & Nasal Tumors - Active Recall\n\n## Q&A Flashcards\n\n**Q1: What is deviated nasal septum?**\nA: Deviation of nasal septum from midline resulting in airway obstruction\n\n**Q2: Most common cause of DNS?**\nA: Trauma (nasal fracture)\n\n**Q3: Prevalence of DNS in adult population?**\nA: 20-50%; symptomatic in 10-15%\n\n**Q4: Indications for septoplasty?**\nA: Symptomatic obstruction failing conservative therapy; obstruction of CPAP use; obstruction affecting sinus surgery\n\n**Q5: Most common malignant nasal tumor?**\nA: Squamous cell carcinoma (70-80%)\n\n**Q6: What is angiofibroma and who gets it?**\nA: Benign vascular tumor in adolescent males; testosterone-driven growth\n\n**Q7: Why is preoperative embolization done for angiofibroma?**\nA: To reduce blood supply and hemorrhage during surgical resection\n\n**Q8: Occupational risk for nasal adenocarcinoma?**\nA: Wood dust (furniture makers) and leather dust (shoemakers); 40+ year latency",
        mnemonics: [
          { text: "Nasal tumor warning signs: \"BEPF\"", explanation: "Bloody discharge, Epistaxis, Pain (facial), Face swelling" }
        ],
        keyPoints: [
          "DNS: Structural obstruction vs functional (allergic/inflammatory)",
          "Angiofibroma: Preop embolization 24-48h before surgery reduces bleeding",
          "Adenocarcinoma: Occupational exposure (wood/leather) with long latency",
          "SCC: Smoking + alcohol are major risk factors",
          "Combined modality therapy: Standard for advanced nasal malignancies"
        ],
        textbookRefs: [
          { book: "ENT & Head-Neck Surgery (Dhingra)", chapter: "Ch 21-22", edition: "8th" },
          { book: "NEET PG ENT", edition: "2024" }
        ]
      }
    ]
  },
  {
    topicCode: "EN-MOD-04-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "salivary-gland-foundation",
        title: "Salivary Gland Diseases - Foundation",
        estimatedMinutes: 20,
        summary: "Anatomy, classification, and epidemiology of salivary gland disorders.",
        contentMd: "# Salivary Gland Diseases - Foundation\n\n## Salivary Gland Anatomy\n\n### Major Glands\n1. **Parotid**: 70% serous, anterior to ear, facial nerve relation\n2. **Submandibular**: Mixed (serous + mucous), under jaw\n3. **Sublingual**: Mucous predominant, floor of mouth\n\n### Minor Glands\n- ~600-1000 scattered in oral cavity, pharynx, palate\n\n## Functions\n- Saliva production (1-1.5 L/day)\n- Lubrication, digestion (amylase)\n- Antimicrobial (lysozyme, IgA)\n- pH buffering\n\n## Classification of Salivary Gland Diseases\n\n### Inflammatory/Infectious\n- **Sialadenitis**: Bacterial infection\n- **Sialitis**: Viral (mumps, EBV, HIV)\n- **Sialoliths**: Salivary stones\n- **Xerostomia**: Dry mouth (reduced salivation)\n\n### Neoplastic\n- **Benign**: Pleomorphic adenoma, Warthin's tumor\n- **Malignant**: Mucoepidermoid carcinoma, adenoid cystic carcinoma\n\n### Developmental\n- **Sialectasis**: Ductal dilation\n- **Aplasia/Hypoplasia**: Gland underdevelopment\n\n## Epidemiology (India)\n- **Sialadenitis**: Common in tropical climate\n- **Pleomorphic adenoma**: Most common benign tumor (80% of parotid tumors)\n- **Malignant tumors**: Account for 5-10% of salivary gland tumors",
        mnemonics: [
          { text: "Salivary glands: \"PSS\"", explanation: "Parotid, Submandibular, Sublingual (major); 600+ minor" }
        ],
        keyPoints: [
          "Parotid: 70% serous, 30% mucous",
          "Submandibular: 70% mucous, 30% serous",
          "Sublingual: Primarily mucous",
          "Pleomorphic adenoma: 80% of parotid tumors"
        ],
        textbookRefs: [
          { book: "ENT & Head-Neck Surgery (Dhingra)", chapter: "Ch 25", edition: "8th" },
          { book: "Oral & Maxillofacial Pathology (Neville)", chapter: "Ch 9", edition: "4th" }
        ]
      },
      {
        layer: 2,
        slug: "salivary-gland-mechanism",
        title: "Salivary Gland Diseases - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathophysiology of sialadenitis, sialoliths, and neoplastic processes.",
        contentMd: "# Salivary Gland Diseases - Mechanism\n\n## Sialadenitis Pathophysiology\n\n### Bacterial Sialadenitis\n- **Ascending infection**: Retrograde bacterial entry through salivary duct\n- **Most common organisms**: Staphylococcus aureus (60%), Streptococcus species\n- **Risk factors**: Dehydration, reduced salivation, immunosuppression\n- **Ductal obstruction**: Stone or stricture predisposes\n- **Salivary stasis**: Allows bacterial multiplication\n\n### Viral Sialadenitis\n- **Mumps (Paramyxovirus)**: Bilateral parotitis, fever, pain on chewing\n- **EBV, CMV, HIV**: Immunocompromised patients\n- **Viral mechanism**: Direct viral invasion → inflammation → swelling\n\n## Sialolith Formation\n\n### Mechanism\n1. **Mucus plug formation** in duct\n2. **Mineral deposition** (calcium, phosphate) around plug\n3. **Progressive layering** of minerals\n4. **Ductal obstruction** → salivary backup\n5. **Secondary bacterial infection** → sialadenitis\n\n### Risk Factors\n- **High mineral content saliva**: Submandibular (higher calcium/phosphate)\n- **Saliva stasis**: Reduced salivation, dehydration\n- **Ductal anatomy**: Submandibular duct (Wharton's) has narrower opening\n- **pH changes**: Acidic saliva favors mineral precipitation\n\n## Pleomorphic Adenoma Pathophysiology\n\n### Histology\n- **Mixed tumor**: Epithelial + mesenchymal components\n- **Benign** but potential for malignant transformation (2-15% risk)\n- **Slow growth**: Over months to years\n\n### Genetics\n- **PLAG1 rearrangement**: Most common genetic alteration\n- **CTNNB1 mutations**: Associated with malignant transformation\n\n## Malignant Salivary Gland Tumors\n\n### Mucoepidermoid Carcinoma\n- **Most common malignancy**: 30% of salivary gland cancers\n- **Origin**: Epithelial cells lining ducts\n- **Grades**: Low, intermediate, high (prognosis varies)\n- **Metastasis**: Regional lymph nodes common\n\n### Adenoid Cystic Carcinoma\n- **Aggressive**: Poor prognosis, early perineural invasion\n- **Histology**: \"Swiss cheese\" pattern\n- **Perineural invasion**: Explains facial nerve involvement & pain\n- **Distant metastases**: Lungs, bone\n\n## Xerostomia Pathophysiology\n\n### Causes\n- **Autoimmune**: Sjögren's syndrome (anti-SSA, anti-SSB antibodies)\n- **Radiation**: Salivary gland atrophy\n- **Medications**: Anticholinergics, antihistamines, SSRIs\n- **Systemic diseases**: Diabetes, HIV, graft-vs-host disease\n\n### Mechanism\n- **Reduced saliva production** → dry mouth\n- **Loss of protective functions** → ↑ caries, candidiasis, dysphagia\n- **Inflammatory changes**: Lymphocyte infiltration in Sjögren's",
        mnemonics: [
          { text: "Malignant salivary tumors: \"MAC\"", explanation: "Mucoepidermoid, Adenoid cystic (2 most common)" }
        ],
        keyPoints: [
          "Sialadenitis: Usually unilateral, associated with sialoliths/strictures",
          "Submandibular duct: Narrower opening, higher mineral content → ↑ stone risk",
          "Pleomorphic adenoma: 2-15% malignant transformation risk",
          "Adenoid cystic carcinoma: Perineural invasion → poor prognosis"
        ],
        textbookRefs: [
          { book: "ENT & Head-Neck Surgery (Dhingra)", chapter: "Ch 25", edition: "8th" },
          { book: "Surgical Oncology (Abeloff)", chapter: "Ch 44", edition: "5th" }
        ]
      },
      {
        layer: 3,
        slug: "salivary-gland-clinical",
        title: "Salivary Gland Diseases - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical diagnosis, investigations, and management of salivary gland diseases.",
        contentMd: "# Salivary Gland Diseases - Clinical\n\n## Sialadenitis - Clinical Presentation\n\n### Acute Bacterial Sialadenitis\n- **Swelling**: Painful, firm swelling over gland\n- **Pain**: Worse with chewing, eating\n- **Fever**: Systemic symptoms\n- **Purulent discharge**: Pus from duct opening\n- **Location**: Usually unilateral parotid or submandibular\n\n### Management\n- **Hydration**: Oral/IV fluids\n- **Antibiotics**: Amoxicillin-clavulanate 625 mg TDS × 7 days\n- **Warm compresses**: Promote salivation & comfort\n- **Salivary stimulants**: Lemon drops, sugarless gum\n- **NSAIDs**: Ibuprofen 400 mg TDS for pain\n- **Imaging**: US/CT if abscess suspected\n- **Sialolithotomy**: If stone causing obstruction\n\n## Sialoliths - Clinical Features\n\n### Presentation\n- **Recurrent swelling**: Episodic, during meals\n- **Pain**: Over gland, relieved after swelling reduces\n- **Saliva stasis**: Leads to secondary infection\n- **Palpable stone**: In duct or gland substance\n\n### Investigations\n- **Intraoral X-ray**: Radiopaque stones visible (80% are)\n- **Ultrasound**: Most useful for radiolucent stones\n- **CT**: If complex anatomy or intraglandular stones\n- **Sialography**: MR sialography shows duct system\n\n### Management\n- **Sialogogues**: Lemon drops increase salivation\n- **Sialolithotomy**: Surgical removal if duct accessible\n- **Extracorporeal ESWL**: Shock wave lithotripsy (emerging)\n- **Salivary gland excision**: If recurrent stones, chronic sialadenitis\n\n## Pleomorphic Adenoma - Clinical Features\n\n### Presentation\n- **Painless swelling**: Parotid region (90% of parotid tumors)\n- **Slow growth**: Over months to years\n- **Mobile mass**: Not fixed to surrounding tissues\n- **Intact facial nerve**: Function usually preserved\n\n### Investigations\n- **Clinical diagnosis**: History + physical examination\n- **Fine needle aspiration (FNA)**: Risk of tumor spillage\n- **Core biopsy**: Reduced spillage risk\n- **MRI**: Best for soft tissue extent, facial nerve relation\n- **Avoid open biopsy**: Risk of tumor seeding\n\n### Management\n- **Superficial parotidectomy**: Standard treatment (preserves facial nerve)\n- **Lateral parotidectomy**: For superficial lobe tumors\n- **Extracapsular dissection**: Emerging technique (lower recurrence)\n- **Radiotherapy**: Adjuvant for malignant transformation\n- **Follow-up**: Surveillance for recurrence\n\n## Malignant Salivary Gland Tumors - Clinical\n\n### Red Flags\n- **Rapid growth**: Malignancy usually \n- **Facial nerve palsy**: CN VII involvement\n- **Fixed mass**: Invasion of surrounding tissues\n- **Pain**: Deep infiltration\n- **Skin involvement**: Ulceration, fixation\n\n### Investigations & Staging\n- **FNA/biopsy**: Histologic confirmation\n- **CT/MRI**: Local extent, bone erosion\n- **PET-CT**: Distant metastases (lungs, bone)\n- **TNM staging**: T (tumor extent), N (lymph nodes), M (metastases)\n\n### Management\n- **Surgical resection**: Gold standard\n  - **Parotidectomy**: With facial nerve preservation/sacrifice as needed\n  - **Neck dissection**: If lymph node involvement\n- **Adjuvant radiotherapy**: 60-70 Gy in fractionated doses\n- **Chemotherapy**: For advanced/metastatic disease (cisplatin-based)\n- **Immunotherapy**: PD-1/PD-L1 inhibitors emerging\n\n## Xerostomia Management\n\n### Conservative\n- **Sugar-free candies/gum**: Stimulate salivation\n- **Frequent sips of water**: Maintain oral moisture\n- **Oral rinses**: Chlorhexidine for candidiasis prevention\n- **Fluoride supplements**: Prevent dental caries\n\n### Medical\n- **Pilocarpine**: 5 mg TDS (cholinergic agonist)\n- **Cevimeline**: 30 mg TDS (muscarinic agonist)\n- **Corticosteroids**: If autoimmune (Sjögren's)\n- **Immunosuppressants**: Rituximab for severe Sjögren's\n\n### Preventive (Radiation)\n- **Amifostine**: Radioprotectant (given before XRT)\n- **Intensity-modulated radiation therapy (IMRT)**: Spares salivary glands\n- **Salivary gland transfer**: Surgical relocation away from radiation field",
        mnemonics: [
          { text: "Sialadenitis treatment: \"WASH\"", explanation: "Warm compress, Antibiotics, Salivary stimulants, Hydration" }
        ],
        keyPoints: [
          "Sialadenitis: Antibiotics + hydration + salivary stimulation",
          "Pleomorphic adenoma: Avoid open biopsy (spillage risk); superficial parotidectomy standard",
          "Malignant tumors: Rapid growth, facial nerve palsy, fixed mass are red flags",
          "Xerostomia: Pilocarpine or cevimeline for symptomatic relief"
        ],
        textbookRefs: [
          { book: "ENT & Head-Neck Surgery (Dhingra)", chapter: "Ch 25", edition: "8th" },
          { book: "Oral & Maxillofacial Pathology (Neville)", chapter: "Ch 9", edition: "4th" }
        ]
      },
      {
        layer: 4,
        slug: "salivary-gland-exam",
        title: "Salivary Gland Diseases - Exam Prep",
        estimatedMinutes: 15,
        summary: "NEET PG high-yield facts and clinical scenarios.",
        contentMd: "# Salivary Gland Diseases - Exam Prep\n\n## High-Yield Facts\n- **Pleomorphic adenoma**: 80% of parotid tumors, 2-15% malignant transformation\n- **Mucoepidermoid carcinoma**: Most common malignant salivary tumor (30%)\n- **Adenoid cystic carcinoma**: Worst prognosis due to perineural invasion\n- **Sialadenitis**: Most common organism Staph aureus (60%)\n- **Sialoliths**: Most common in submandibular gland\n\n## Clinical Scenarios\n- **Painless parotid swelling × 6 months**: Pleomorphic adenoma → MRI → Superficial parotidectomy\n- **Painful parotid swelling, fever, pus from duct**: Sialadenitis → Antibiotics, hydration, salivary stimulation\n- **Recurrent parotid swelling during meals**: Sialolith → Imaging, sialolithotomy\n- **Rapid parotid enlargement, facial palsy, pain**: Malignant tumor → Biopsy, CT/MRI, surgical resection + adjuvant therapy",
        mnemonics: [
          { text: "Salivary tumors: \"PAM CAM\"", explanation: "Pleomorphic (benign), Adenoid cystic, Mucoepidermoid (malignant)" }
        ],
        keyPoints: [
          "Pleomorphic adenoma vs Mucoepidermoid: FNA helps differentiate",
          "Facial nerve preservation essential in parotidectomy",
          "Adjuvant radiotherapy indicated for malignant tumors",
          "Superficial vs lateral parotidectomy depends on tumor location"
        ],
        textbookRefs: [
          { book: "NEET PG ENT", edition: "2024" },
          { book: "NCCN Head & Neck Guidelines", edition: "2024" }
        ]
      },
      {
        layer: 5,
        slug: "salivary-gland-recall",
        title: "Salivary Gland Diseases - Active Recall",
        estimatedMinutes: 10,
        summary: "Q&A flashcards for salivary gland diseases.",
        contentMd: "# Salivary Gland Diseases - Active Recall\n\n## Q&A Flashcards\n\n**Q1: Most common benign parotid tumor?**\nA: Pleomorphic adenoma (80% of parotid tumors)\n\n**Q2: Most common malignant salivary gland tumor?**\nA: Mucoepidermoid carcinoma (30% of malignant salivary tumors)\n\n**Q3: Which gland most commonly affected by sialoliths?**\nA: Submandibular gland (80% of sialoliths)\n\n**Q4: First-line antibiotic for acute sialadenitis?**\nA: Amoxicillin-clavulanate 625 mg TDS\n\n**Q5: Why avoid open biopsy in pleomorphic adenoma?**\nA: Risk of tumor spillage and seeding\n\n**Q6: Standard surgical treatment for pleomorphic adenoma?**\nA: Superficial parotidectomy with facial nerve preservation\n\n**Q7: What is perineural invasion and which tumor has it?**\nA: Invasion along nerve sheaths; common in adenoid cystic carcinoma (poor prognosis)\n\n**Q8: Treatment for xerostomia in Sjögren's syndrome?**\nA: Pilocarpine 5 mg TDS or cevimeline 30 mg TDS",
        mnemonics: [
          { text: "Salivary gland regions: \"PSS\"", explanation: "Parotid (70% serous), Submandibular (70% mucous), Sublingual (mostly mucous)" }
        ],
        keyPoints: [
          "Pleomorphic adenoma: Benign but malignant transformation risk (2-15%)",
          "Sialadenitis pathophysiology: Stasis + obstruction + infection",
          "Malignant tumors: Rapid growth, nerve involvement, treatment involves surgery + adjuvant therapy",
          "Xerostomia management: Salivary stimulation + cholinergic agonists"
        ],
        textbookRefs: [
          { book: "ENT & Head-Neck Surgery (Dhingra)", chapter: "Ch 25", edition: "8th" },
          { book: "NEET PG ENT", edition: "2024" }
        ]
      }
    ]
  },
  {
    topicCode: "FM-MOD-03-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "mechanical-injuries-foundation",
        title: "Mechanical Injuries: Blunt & Sharp - Foundation",
        estimatedMinutes: 20,
        summary: "Classification and definitions of blunt and sharp force injuries.",
        contentMd: "# Mechanical Injuries: Blunt & Sharp - Foundation\n\n## Definition\nMechanical injuries result from application of external force to body causing tissue damage.\n\n## Classification by Mechanism\n\n### Blunt Force Injuries\n- **Definition**: Force applied over area, with compressive effect\n- **Mechanism**: Trauma from fall, blow, road traffic accident\n- **Injuries**: Abrasions, contusions, lacerations, fractures\n\n### Sharp Force Injuries\n- **Definition**: Applied by objects with sharp edges/points\n- **Mechanism**: Knife, sharp glass, needle\n- **Injuries**: Incised wounds, stab wounds, puncture wounds\n\n## Types of Blunt Force Injuries\n\n### Abrasions (Grazes)\n- Superficial loss of epidermis\n- No bleeding (unless dermal layer exposed)\n\n### Contusions (Bruises)\n- Extravasation of blood into tissues\n- No break in skin continuity\n- Healing: Color changes over 7-10 days\n\n### Lacerations\n- Irregular tears in skin & underlying tissues\n- Edges not clean (jagged)\n- May occur over bony prominences\n\n### Fractures\n- Breaking of bone\n- Types: Simple, comminuted, compound\n\n## Types of Sharp Force Injuries\n\n### Incised Wounds\n- **Features**: Clean edges, sharp margins, minimal tissue loss\n- **Characteristics**: Length > depth, sharp edges\n- **Bleeding**: Free (vessels cut cleanly)\n\n### Stab Wounds\n- **Features**: Depth > length\n- **Characteristics**: Penetrating, may have internal damage\n- **Risk**: Vital organ involvement\n\n### Puncture Wounds\n- **Features**: Small entry wound, minimal bleeding\n- **Characteristics**: Deep penetration by pointed object (needle, spike)\n- **Risk**: Internal infection, gas gangrene\n\n## Epidemiology (India)\n- **Road traffic injuries**: Leading cause of trauma\n- **Assaults**: Common in urban areas\n- **Occupational injuries**: Among workers\n- **Accidental injuries**: Fall from height, machinery",
        mnemonics: [
          { text: "Blunt injuries: \"ACL-F\"", explanation: "Abrasions, Contusions, Lacerations, Fractures" }
        ],
        keyPoints: [
          "Blunt injuries: Irregular edges, tissue crushing",
          "Sharp injuries: Clean edges, penetrating",
          "Abrasions: Superficial, no bleeding",
          "Contusions: Blood extravasation, no skin break"
        ],
        textbookRefs: [
          { book: "Textbook of Forensic Medicine (Reddy)", chapter: "Ch 3", edition: "35th" },
          { book: "Parikh's Textbook of Medical Jurisprudence", chapter: "Ch 4", edition: "7th" }
        ]
      },
      {
        layer: 2,
        slug: "mechanical-injuries-mechanism",
        title: "Mechanical Injuries: Blunt & Sharp - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathophysiology and biomechanics of mechanical injuries.",
        contentMd: "# Mechanical Injuries: Blunt & Sharp - Mechanism\n\n## Blunt Force Injury Mechanics\n\n### Abrasion Formation\n- **Mechanism**: Friction between skin & rough surface\n- **Direction indicators**: Dirt/debris pattern shows direction of movement\n- **Histology**: Loss of epidermis, bleeding into dermis\n- **Healing**: 7-10 days (epithelialization)\n\n### Contusion (Bruise) Mechanism\n- **Mechanism**: Compression of tissue → rupture of small vessels\n- **Blood extravasation**: Into dermis & subcutaneous tissue\n- **Color evolution**:\n  - **Red**: First few hours\n  - **Blue-purple**: 12-48 hours (deoxygenation)\n  - **Green**: 5-7 days (biliverdin)\n  - **Yellow**: 7-10 days (bilirubin)\n  - **Brown**: 10-14 days (hemosiderin)\n- **Forensic dating**: Approximate age of injury\n\n### Laceration Mechanism\n- **Mechanism**: Blunt force over bony prominence → tissue tearing\n- **Edges**: Irregular, crushed (vs incision with clean edges)\n- **Associated injury**: Often bruising at wound margins\n- **Bleeding**: Variable (vessels may be torn or crushed)\n\n### Fracture Mechanics\n- **Simple fracture**: One break line\n- **Comminuted**: Multiple fragments\n- **Compound (open)**: Fracture with skin breach\n- **Force direction**: Determines fracture pattern\n\n## Sharp Force Injury Mechanics\n\n### Incised Wound Formation\n- **Mechanism**: Sharp blade glides through tissue\n- **Characteristics**: Clean cut, minimal crushing\n- **Edges**: Sharp margins, aligned properly\n- **Hemorrhage**: Free due to clean vessel cutting\n- **Healing**: Faster than irregular wounds\n\n### Stab Wound Dynamics\n- **Penetration**: Object enters body, creating deep track\n- **Internal damage**: May exceed external appearance\n- **Direction of thrust**: Determines organ involvement\n- **Depth**: Depends on force & weapon length\n- **Organ injury**: Depends on trajectory and location\n\n### Puncture Wound Mechanism\n- **Small entry**: Relative to penetration depth\n- **Tissue bridging**: Minimal tissue loss\n- **Internal bleeding**: Often underestimated from external appearance\n- **Infection risk**: ↑ due to deep penetration & minimal drainage\n- **Gas gangrene risk**: Particularly with soil-contaminated puncture wounds\n\n## Tissue Response to Injury\n\n### Inflammatory Response\n- **Immediate (0-24h)**: Neutrophil infiltration\n- **3-7 days**: Macrophage & lymphocyte infiltration\n- **7-14 days**: Fibroblast proliferation\n- **>14 days**: Collagen remodeling\n\n### Healing Phases\n1. **Hemostasis**: Platelet aggregation (minutes)\n2. **Inflammation**: Cytokine release (hours to days)\n3. **Proliferation**: Angiogenesis, collagen synthesis (days to weeks)\n4. **Remodeling**: Scar maturation (weeks to months)",
        mnemonics: [
          { text: "Bruise color timeline: \"RBG-YB\"", explanation: "Red, Blue-purple, Green, Yellow, Brown" }
        ],
        keyPoints: [
          "Bruise color changing predictable = forensic aging aid",
          "Laceration edges irregular & crushed (vs incision = clean)",
          "Stab wound depth > length",
          "Puncture wound infection risk ↑ due to deep penetration"
        ],
        textbookRefs: [
          { book: "Textbook of Forensic Medicine (Reddy)", chapter: "Ch 3", edition: "35th" },
          { book: "Parikh's Textbook of Medical Jurisprudence", chapter: "Ch 4", edition: "7th" }
        ]
      },
      {
        layer: 3,
        slug: "mechanical-injuries-clinical",
        title: "Mechanical Injuries: Blunt & Sharp - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical management and legal aspects of mechanical injuries.",
        contentMd: "# Mechanical Injuries: Blunt & Sharp - Clinical\n\n## Management of Abrasions\n- **Cleaning**: Remove debris with soft brush/sterile gauze\n- **Anaesthesia**: Local anesthetic if extensive\n- **Antiseptic**: Povidone-iodine or chlorhexidine\n- **Dressing**: Non-adherent sterile dressing\n- **Tetanus prophylaxis**: If needed\n- **Healing**: Usually complete in 7-10 days\n\n## Management of Contusions\n- **RICE protocol**: Rest, Ice, Compression, Elevation\n- **Ice application**: First 48-72 hours\n- **NSAIDs**: Ibuprofen for pain relief\n- **Warm compresses**: After 48 hours to improve healing\n- **Massage**: Gentle massage after initial phase\n- **Reporting**: Photograph for medico-legal purposes\n\n## Management of Lacerations\n- **Assessment**: Depth, length, contamination, neurovascular status\n- **Wound exploration**: Rule out underlying injury\n- **Cleaning**: Irrigation with normal saline, remove foreign material\n- **Haemostasis**: Direct pressure, ligature if needed\n- **Closure**: Sutures (absorbable/non-absorbable), adhesives, staples\n- **Antibiotics**: If contaminated or high-risk\n- **Tetanus**: Prophylaxis based on status\n- **Timing**: Ideally within 6-12 hours (golden period)\n\n## Management of Stab Wounds\n\n### Assessment\n- **Trajectory**: Attempt to determine from wound direction\n- **Imaging**: CT chest/abdomen if penetrating\n- **Organ involvement**: Physical exam, imaging\n- **Vital signs**: Assess hemodynamic stability\n\n### Management\n- **Stabilization**: IV access, fluid/blood resuscitation\n- **Surgical exploration**: May be necessary for deep wounds\n- **Antibiotics**: Broad-spectrum if signs of peritonitis\n- **Observation**: 24-48 hours if stable\n- **Surgery**: Indicated if peritoneal signs, hemorrhage\n\n## Forensic Medical Examination\n\n### Documentation\n- **Photographs**: Before & after cleaning\n- **Measurements**: Length, width, depth of wounds\n- **Drawings**: Accurate anatomical diagrams\n- **Description**: Exact location, characteristics\n- **Presence of debris**: Foreign material preserved for evidence\n\n### Wound Interpretation\n- **Abrasion pattern**: May show direction of force\n- **Bruise pattern**: May match object shape\n- **Laceration edges**: Irregular in blunt force vs clean in sharp\n- **Wound depth**: Estimates force intensity\n- **Associated injuries**: Pattern suggests mechanism\n\n### Legal Aspects (IPC)\n- **IPC Sec 337-348**: Hurt definitions and penalties\n- **IPC Sec 326**: Voluntarily causing grievous hurt by poison/corrosive\n- **Simple vs grievous hurt**: Classification based on severity\n- **Evidence preservation**: Essential for legal proceedings\n- **Medico-legal report**: Formal documentation required\n\n## Prevention\n- **Safety equipment**: Helmets, protective gear (occupational)\n- **Road safety**: Traffic rules, seatbelts\n- **Home safety**: Remove hazards, proper lighting\n- **Weapon control**: Regulation of sharp implements\n- **Conflict resolution**: Reduce violence-related injuries",
        mnemonics: [
          { text: "Wound closure timing: \"Golden 12\"", explanation: "Ideally within 6-12 hours for primary intention healing" }
        ],
        keyPoints: [
          "Abrasion management: Clean, antiseptic, non-adherent dressing",
          "Contusion RICE protocol essential",
          "Laceration primary closure within 6-12 hours optimal",
          "Stab wound: May need exploration, imaging, observation"
        ],
        textbookRefs: [
          { book: "Textbook of Forensic Medicine (Reddy)", chapter: "Ch 3", edition: "35th" },
          { book: "IPC Handbook", chapter: "Hurt provisions", edition: "Current" }
        ]
      },
      {
        layer: 4,
        slug: "mechanical-injuries-exam",
        title: "Mechanical Injuries: Blunt & Sharp - Exam Prep",
        estimatedMinutes: 15,
        summary: "NEET PG high-yield facts and medico-legal aspects.",
        contentMd: "# Mechanical Injuries: Blunt & Sharp - Exam Prep\n\n## Wound Characteristics Comparison\n\n| Feature | Abrasion | Contusion | Laceration | Incision | Stab |\n|---------|----------|-----------|-----------|----------|------|\n| **Depth** | Epidermis | Dermis | Multi-layer | Multi-layer | Deep |\n| **Bleeding** | Minimal | Extravasation | Variable | Free | Variable |\n| **Edges** | Irregular | Bruised | Crushed | Sharp | Penetrating |\n| **Length/Depth** | L=D | L=D | Varies | L>D | D>L |\n\n## High-Yield Facts\n- **Bruise dating**: Red → Blue (12-48h) → Green (5-7d) → Yellow (7-10d) → Brown (10-14d)\n- **Golden period for closure**: 6-12 hours\n- **Abrasion healing**: 7-10 days complete epithelialization\n- **Laceration vs incision**: Irregular vs clean edges\n- **Stab wound risk**: D>L, potential internal organ injury\n\n## Medico-Legal Scenarios\n- **Bruise pattern matches weapon** → Suggests specific mechanism\n- **Wound age**: Bruise color can approximate injury timing\n- **Defensive wounds**: On hands, forearms (suggest self-defense)\n- **Trajectory analysis**: Stab wounds indicate thrust direction\n\n## IPC Important Sections\n- **Sec 337**: Hurt (simple injury)\n- **Sec 338**: Grievous hurt (serious injury)\n- **Sec 326**: Causing hurt by poison/corrosive\n- **Sec 34**: Acts of common intention",
        mnemonics: [
          { text: "Wound edges: \"Blunt=Crushed, Sharp=Clean\"", explanation: "Key differentiator in forensic medicine" }
        ],
        keyPoints: [
          "Bruise color progression predictable for forensic dating",
          "Abrasion vs contusion: Abrasion = epidermis only, contusion = blood extravasation",
          "Primary closure ideal within 6-12 hours",
          "Stab wound assessment: Check trajectory, CT imaging, vital signs"
        ],
        textbookRefs: [
          { book: "NEET PG Forensic Medicine", edition: "2024" },
          { book: "Parikh's Medical Jurisprudence", chapter: "Ch 4", edition: "7th" }
        ]
      },
      {
        layer: 5,
        slug: "mechanical-injuries-recall",
        title: "Mechanical Injuries: Blunt & Sharp - Active Recall",
        estimatedMinutes: 10,
        summary: "Q&A flashcards for mechanical injuries.",
        contentMd: "# Mechanical Injuries: Blunt & Sharp - Active Recall\n\n## Q&A Flashcards\n\n**Q1: What is the difference between abrasion and contusion?**\nA: Abrasion = epidermis loss only; Contusion = blood extravasation into dermis/subcutaneous\n\n**Q2: Bruise color timeline?**\nA: Red → Blue-purple (12-48h) → Green (5-7d) → Yellow (7-10d) → Brown (10-14d)\n\n**Q3: Key difference between laceration and incision?**\nA: Laceration = irregular crushed edges (blunt force); Incision = clean sharp edges\n\n**Q4: Stab wound characteristics?**\nA: Depth > Length, penetrating, may involve internal organs\n\n**Q5: Ideal timing for wound closure?**\nA: Within 6-12 hours (golden period)\n\n**Q6: Management of contusion?**\nA: RICE protocol (Rest, Ice, Compression, Elevation)\n\n**Q7: Complications of puncture wounds?**\nA: Infection risk ↑, gas gangrene (soil-contaminated)\n\n**Q8: Forensic documentation of injuries?**\nA: Photography, measurements, drawings, detailed description, debris preservation",
        mnemonics: [
          { text: "Wound closure: Golden 12 hours", explanation: "Optimal timing for primary intention healing" }
        ],
        keyPoints: [
          "Abrasion: Superficial, shows friction pattern",
          "Contusion: Color changes useful for timing",
          "Laceration: Often occurs over bony prominence",
          "Stab wound: May need imaging & surgical exploration",
          "Legal documentation essential for all injuries"
        ],
        textbookRefs: [
          { book: "Textbook of Forensic Medicine (Reddy)", chapter: "Ch 3", edition: "35th" },
          { book: "NEET PG Forensic Medicine", edition: "2024" }
        ]
      }
    ]
  },
  {
    topicCode: "IM-MOD-02-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "copd-emphysema-foundation",
        title: "COPD & Emphysema - Foundation",
        estimatedMinutes: 20,
        summary: "Definitions, classification, and epidemiology of COPD and emphysema.",
        contentMd: "# COPD & Emphysema - Foundation\n\n## Definitions\n\n### COPD (Chronic Obstructive Pulmonary Disease)\n- Persistent airflow limitation due to chronic airway inflammation\n- Characterized by irreversible or partially reversible obstruction\n- Encompasses emphysema and chronic bronchitis\n\n### Emphysema\n- Pathological destruction of alveolar walls\n- Loss of alveolar elasticity\n- Progressive dyspnea on exertion\n\n### Chronic Bronchitis\n- Chronic productive cough >3 months/year for 2+ years\n- Not due to other identifiable causes\n- Indicates chronic airway inflammation\n\n## COPD Classification (GOLD 2024)\n\n### ABCD Classification\n- **Group A**: Symptoms mild, exacerbations ≤1/year\n- **Group B**: Symptoms severe, exacerbations ≤1/year\n- **Group C**: Symptoms mild, exacerbations ≥2/year\n- **Group D**: Symptoms severe, exacerbations ≥2/year\n\n### FEV1 Classification\n- **GOLD 1 (Mild)**: FEV1 ≥80% predicted\n- **GOLD 2 (Moderate)**: 50-79% predicted\n- **GOLD 3 (Severe)**: 30-49% predicted\n- **GOLD 4 (Very Severe)**: <30% predicted\n\n## Risk Factors\n- **Smoking**: Most important (causes 80% of COPD)\n- **Occupational**: Dust, chemicals, fumes\n- **Indoor air pollution**: Biomass burning (India)\n- **Genetic**: Alpha-1 antitrypsin deficiency (rare)\n- **Infections**: Recurrent respiratory infections in childhood\n\n## Epidemiology (India)\n- **Prevalence**: ~5-10% in general population\n- **Smoking prevalence**: 40% among Indian men\n- **Biomass exposure**: Major contributor in rural areas\n- **Incidence**: Rising due to air pollution\n- **Mortality**: COPD among top 10 causes in India",
        mnemonics: [
          { text: "COPD ABCD groups", explanation: "Group A/C = few exacerbations; B/D = many exacerbations; A/B = milder symptoms" }
        ],
        keyPoints: [
          "COPD = persistent airflow limitation (not reversible like asthma)",
          "Emphysema = alveolar destruction (irreversible)",
          "Chronic bronchitis = productive cough for 3+ months/year",
          "Smoking causes 80% of COPD"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Ch 304", edition: "21st" },
          { book: "Textbook of Pulmonary Diseases (Sharma)", chapter: "Ch 8", edition: "2nd" }
        ]
      },
      {
        layer: 2,
        slug: "copd-emphysema-mechanism",
        title: "COPD & Emphysema - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathophysiology of airway obstruction and emphysema development.",
        contentMd: "# COPD & Emphysema - Mechanism\n\n## Pathophysiology of COPD\n\n### Chronic Inflammation\n- **Smoking exposure** → ↑ neutrophils, macrophages, eosinophils\n- **Cytokine release**: TNF-α, IL-6, IL-8 (persistent inflammation)\n- **Oxidative stress**: ↑ free radicals overwhelm antioxidant defenses\n- **Mucus production**: Metaplasia of epithelium → ↑ mucus glands\n\n### Airway Changes\n- **Small airway disease**: Inflammation & narrowing\n- **Loss of elastic recoil**: Destruction of elastic fibers\n- **Air trapping**: Loss of alveolar attachments\n- **Dynamic hyperinflation**: Increased residual volume\n\n## Emphysema Pathophysiology\n\n### Alveolar Destruction Mechanism\n1. **Smoking-induced inflammation** → proteolytic enzyme release\n2. **Elastase activity ↑** from neutrophils\n3. **Antielastase activity ↓** (antioxidant depletion)\n4. **Net proteolysis** → alveolar wall destruction\n5. **Loss of surface area** → impaired gas exchange\n\n### Types of Emphysema\n- **Centrilobular**: Proximal alveoli destroyed (smoking-related)\n- **Panlobular**: Entire acinus destroyed (alpha-1 antitrypsin deficiency)\n- **Irregular**: Associated with aging & scarring\n\n### Functional Consequences\n- **Air trapping** → increased TLC, RV, FRC\n- **Loss of elastic recoil** → ↓ FEV1\n- **Ventilation-perfusion mismatch** → hypoxemia\n- **Hyperinflation** → mechanical disadvantage for respiratory muscles\n\n## Physiological Changes\n\n### Spirometry Findings\n- **↓ FEV1** (main finding)\n- **↓ FEV1/FVC** (<70% = obstruction)\n- **↑ TLC, RV** (hyperinflation)\n- **↓ DLCO** (emphysema)\n\n### Gas Exchange Abnormalities\n- **Hypoxemia**: Due to V/Q mismatch\n- **Hypercapnia**: In advanced stages (ventilatory failure)\n- **Polycythemia**: Compensatory response to chronic hypoxemia\n\n## Comorbidities in COPD\n- **Cor pulmonale**: Right heart failure from pulmonary hypertension\n- **Pulmonary hypertension**: From hypoxic vasoconstriction\n- **Osteoporosis**: From systemic inflammation & reduced mobility\n- **Cardiovascular disease**: Shared risk factors with smoking\n- **Lung cancer**: COPD patients at ↑ risk",
        mnemonics: [
          { text: "COPD mechanism: \"SCARE\"", explanation: "Smoking, Chronic inflammation, Airway narrowing, Recoil loss, Emphysematous destruction" }
        ],
        keyPoints: [
          "Emphysema = permanent alveolar destruction (irreversible)",
          "Air trapping = hallmark of obstruction",
          "Elastase-antielastase imbalance = key pathophysiology",
          "Hyperinflation mechanically disadvantages respiratory muscles"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Ch 304", edition: "21st" },
          { book: "Textbook of Pulmonary Diseases (Sharma)", chapter: "Ch 8", edition: "2nd" }
        ]
      },
      {
        layer: 3,
        slug: "copd-emphysema-clinical",
        title: "COPD & Emphysema - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical presentation, diagnosis, and management of COPD.",
        contentMd: "# COPD & Emphysema - Clinical\n\n## Clinical Presentation\n\n### Symptoms\n- **Dyspnea**: Progressive, worse on exertion (earliest symptom)\n- **Cough**: Chronic, worse in morning (productive)\n- **Sputum production**: Mucoid (clear to yellowish)\n- **Wheezing**: Variable, worse during exacerbations\n- **Exercise limitation**: Progressive functional decline\n\n### Physical Examination\n- **Barrel chest**: Due to hyperinflation\n- **Pursed-lip breathing**: Self-correcting mechanism\n- **Cyanosis**: Indicates severe hypoxemia\n- **Clubbing**: Unusual (consider lung cancer)\n- **Cor pulmonale signs**: Elevated JVP, ankle edema, RV heave\n- **Breath sounds**: Diminished globally\n\n## Diagnosis\n\n### Spirometry (Gold Standard)\n- **FEV1/FVC <70%** = Airflow limitation\n- **FEV1 severity** determines GOLD grade\n- **Bronchodilator response**: <12% change (irreversible obstruction)\n- **DLCO**: ↓ in emphysema, normal in chronic bronchitis\n\n### Additional Tests\n- **Chest X-ray**: Hyperinflation, emphysematous changes\n- **HRCT**: Best for emphysema visualization\n- **ABG**: Assess oxygenation & CO2 retention\n- **6-minute walk test**: Functional capacity assessment\n- **Quality of life**: mMRC dyspnea scale, CAT score\n\n## Management\n\n### Non-Pharmacological\n- **Smoking cessation**: Most effective intervention\n- **Pulmonary rehabilitation**: Exercise, education\n- **Vaccination**: Pneumococcal, influenza, COVID-19\n- **Oxygen therapy**: If SaO2 <88% at rest (>15h/day)\n- **Nutritional support**: Maintain BMI 18.5-25\n\n### Pharmacological\n\n#### Bronchodilators (Main therapy)\n- **LAMA (Long-acting muscarinic antagonist)**: Tiotropium\n- **LABA (Long-acting beta-2 agonist)**: Formoterol, salmeterol\n- **LAMA + LABA**: Combination therapy\n- **Dosing**: Regular (not PRN)\n- **ICS (Inhaled corticosteroid)**: Added if ≥2 exacerbations/year\n\n#### Triple Therapy\n- **LAMA + LABA + ICS**: For frequent exacerbations (GOLD C/D)\n- **Examples**: Umeclidinium/vilanterol/fluticasone, tiotropium/olodaterol/fluticasone\n\n#### Roflumilast\n- **Phosphodiesterase-4 inhibitor**: Reduces exacerbations\n- **Indication**: COPD with chronic bronchitis & exacerbations\n- **Dosing**: 500 mcg OD\n\n### Exacerbation Management\n- **Antibiotics**: If purulent sputum (amoxicillin-clavulanate)\n- **Corticosteroids**: Prednisolone 30-40 mg × 7-14 days\n- **Bronchodilators**: Increased frequency\n- **Oxygen therapy**: Titrate to SaO2 88-92%\n- **Hospitalization**: If severe (respiratory failure, complications)\n\n### Advanced Therapies\n- **Bullectomy**: For large bullae causing compression\n- **Lung volume reduction surgery**: Palliative in highly selected patients\n- **Lung transplantation**: For very advanced disease\n- **Endobronchial valves**: Emerging technique for air-trapping\n\n## Monitoring & Follow-up\n- **Spirometry**: Annually or if symptoms change\n- **Exacerbation frequency**: Tracks disease progression\n- **Symptom assessment**: mMRC, CAT score\n- **Inhaler technique**: Vital for drug delivery",
        mnemonics: [
          { text: "COPD management: \"SCRIBE\"", explanation: "Smoking cessation, Corticosteroids, Rehabilitation, Inhaler therapy, Bronchodilators, Exacerbation management" }
        ],
        keyPoints: [
          "Smoking cessation most effective single intervention",
          "LAMA + LABA base therapy for stable COPD",
          "ICS added if ≥2 exacerbations/year",
          "Long-term oxygen therapy if SaO2 <88% >15h/day"
        ],
        textbookRefs: [
          { book: "GOLD Guidelines 2024", chapter: "Management", edition: "2024" },
          { book: "Harrison's Principles", chapter: "Ch 304", edition: "21st" }
        ]
      },
      {
        layer: 4,
        slug: "copd-emphysema-exam",
        title: "COPD & Emphysema - Exam Prep",
        estimatedMinutes: 15,
        summary: "NEET PG high-yield facts and clinical scenarios.",
        contentMd: "# COPD & Emphysema - Exam Prep\n\n## Key Spirometric Findings\n\n| Finding | Obstructive | Restrictive | Mixed |\n|---------|-----------|------------|-------|\n| **FEV1/FVC** | <70% | >70% | <70% |\n| **FEV1** | ↓ | ↓ | ↓↓ |\n| **FVC** | Normal/↑ | ↓ | ↓ |\n| **TLC** | ↑ | ↓ | Normal/↑ |\n| **DLCO** | ↓ (emphysema) | ↓ | ↓ |\n\n## GOLD 2024 Treatment Algorithm\n- **Group A**: LAMA or LABA monotherapy\n- **Group B**: LAMA + LABA (dual therapy)\n- **Group C**: LAMA + LABA (dual therapy) + consider ICS if ≥2 exacerbations\n- **Group D**: Triple therapy (LAMA + LABA + ICS)\n\n## High-Yield Scenarios\n- **Smoker with dyspnea**: COPD screening with spirometry\n- **COPD + ≥2 exacerbations/year**: Add ICS to therapy\n- **Acute exacerbation**: Antibiotics + steroids + increased bronchodilators\n- **COPD + barrel chest + pursed-lip breathing**: Emphysema phenotype\n\n## Important Medications\n- **LAMA**: Tiotropium (anticholinergic)\n- **LABA**: Formoterol, salmeterol (sympathomimetic)\n- **ICS**: Fluticasone, budesonide (anti-inflammatory)\n- **PDE4 inhibitor**: Roflumilast (exacerbation reduction)",
        mnemonics: [
          { text: "FEV1/FVC <70% = obstruction", explanation: "Key diagnostic threshold for COPD" }
        ],
        keyPoints: [
          "COPD irreversible obstruction (vs asthma which is reversible)",
          "Emphysema shows ↓ DLCO (unlike chronic bronchitis)",
          "ICS added only if exacerbation-prone (≥2/year)",
          "Long-term oxygen therapy if PaO2 <55 mmHg or SaO2 <88%"
        ],
        textbookRefs: [
          { book: "GOLD Guidelines 2024", edition: "2024" },
          { book: "NEET PG Pulmonology", edition: "2024" }
        ]
      },
      {
        layer: 5,
        slug: "copd-emphysema-recall",
        title: "COPD & Emphysema - Active Recall",
        estimatedMinutes: 10,
        summary: "Q&A flashcards for COPD core concepts.",
        contentMd: "# COPD & Emphysema - Active Recall\n\n## Q&A Flashcards\n\n**Q1: What is the diagnostic criterion for COPD on spirometry?**\nA: FEV1/FVC <70% post-bronchodilator\n\n**Q2: Most important modifiable risk factor for COPD?**\nA: Smoking cessation\n\n**Q3: What is air trapping in emphysema?**\nA: Loss of elastic recoil + alveolar wall destruction = air remains in lungs\n\n**Q4: First-line drugs for stable COPD?**\nA: LAMA or LABA; LAMA + LABA if symptomatic\n\n**Q5: When should ICS be added to COPD therapy?**\nA: If ≥2 exacerbations per year\n\n**Q6: DLCO in emphysema vs chronic bronchitis?**\nA: ↓ in emphysema (alveolar destruction); normal in chronic bronchitis\n\n**Q7: Long-term oxygen therapy threshold?**\nA: PaO2 <55 mmHg or SaO2 <88% at rest or with exertion\n\n**Q8: Management of acute COPD exacerbation?**\nA: Antibiotics + corticosteroids + increased bronchodilators",
        mnemonics: [
          { text: "COPD vs Asthma: Irreversible vs Reversible", explanation: "COPD is fixed airflow limitation; asthma is reversible" }
        ],
        keyPoints: [
          "Emphysema pathology: Alveolar destruction (irreversible)",
          "Smoking causes 80% of COPD",
          "Hyperinflation characteristic (barrel chest)",
          "ICS only for exacerbation-prone phenotype (≥2/year)"
        ],
        textbookRefs: [
          { book: "Harrison's Principles", chapter: "Ch 304", edition: "21st" },
          { book: "NEET PG Pulmonology", edition: "2024" }
        ]
      }
    ]
  },
  {
    topicCode: "IM-MOD-03-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "ibd-foundation",
        title: "Inflammatory Bowel Disease - Foundation",
        estimatedMinutes: 20,
        summary: "Introduction to IBD, definitions, and epidemiology of UC and Crohn's.",
        contentMd: "# Inflammatory Bowel Disease - Foundation\n\n## Definition\nInflammatory Bowel Disease (IBD) encompasses chronic relapsing-remitting intestinal inflammatory disorders causing mucosal damage and systemic complications.\n\n## Types of IBD\n\n### Ulcerative Colitis (UC)\n- Inflammation limited to colon and rectum\n- Mucosal inflammation only (doesn't penetrate deeper)\n- Continuous involvement\n- Crypt abscesses on histology\n\n### Crohn's Disease (CD)\n- Affects any part of GI tract (mouth to anus)\n- Transmural inflammation (all layers)\n- Skip lesions (patchy involvement)\n- Non-caseating granulomas on histology\n\n## Epidemiology\n\n### Global\n- **Incidence**: 10-20 per 100,000\n- **Peak age**: 15-35 years (second peak 50-70 years)\n- **Western countries**: Higher incidence\n\n### India\n- **Rising incidence**: 5-10 per 100,000 (increasing trend)\n- **UC:CD ratio**: 3:1 in India (vs 1:1 in West)\n- **Urban > rural**: Associated with westernization\n- **Geographic variation**: Higher in south India\n\n## Risk Factors\n- **Genetic**: Family history, HLA associations (HLA-B27)\n- **Immunological**: Dysregulated immune response to commensal flora\n- **Environmental**: Smoking (protective in UC, worsens CD), diet\n- **Infections**: Controversial but implicated\n- **NSAIDs**: May trigger relapse",
        mnemonics: [
          { text: "UC vs CD: \"Continuous vs Skip\"", explanation: "UC continuous in colon; CD skip lesions throughout GI tract" }
        ],
        keyPoints: [
          "UC: Mucosal inflammation only; CD: Transmural",
          "UC: Colon/rectum only; CD: Any GI tract part",
          "UC: Crypt abscesses; CD: Non-caseating granulomas",
          "India: Rising incidence, UC > CD (opposite of West)"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Ch 365", edition: "21st" },
          { book: "Textbook of Gastroenterology (Sharma)", chapter: "Ch 20", edition: "3rd" }
        ]
      },
      {
        layer: 2,
        slug: "ibd-mechanism",
        title: "Inflammatory Bowel Disease - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathophysiology of ulcerative colitis and Crohn's disease.",
        contentMd: "# Inflammatory Bowel Disease - Mechanism\n\n## Pathophysiology of IBD\n\n### Genetic Factors\n- **NOD2/CARD15**: Associated with Crohn's (ileal involvement)\n- **IL-23 pathway**: Linked to both UC and CD\n- **HLA-B27**: Associated with arthropathy\n- **Familial clustering**: 15-20% have family history\n\n### Immune Dysregulation\n- **Th1/Th17 activation**: Drives CD pathology\n- **Th2 activation**: Contributes to UC pathology\n- **Loss of tolerance**: To commensal microbiota\n- **↓ Regulatory T cells**: Impaired immune regulation\n\n### Epithelial Barrier Dysfunction\n- **Tight junction defects**: ↓ claudins, occludin, ZO-1\n- **Intestinal permeability ↑**: \"Leaky gut\"\n- **Bacterial translocation**: Activates immune response\n- **Goblet cell dysfunction**: ↓ mucus production\n\n### Microbiota Changes (Dysbiosis)\n- **↓ Bacteroidetes**: Loss of anti-inflammatory bacteria\n- **↑ Proteobacteria**: Pro-inflammatory bacteria increase\n- **↓ Microbial diversity**: Loss of protective commensals\n- **Pathobiont expansion**: Pathogenic bacteria overgrowth\n\n## Ulcerative Colitis Pathophysiology\n\n### Inflammation Pattern\n- **Mucosal inflammation**: Superficial, in crypt bases\n- **Continuous pattern**: No skip lesions\n- **Crypt distortion**: Loss of crypt architecture\n- **Crypt abscesses**: PMN infiltration into crypts\n\n### Complications\n- **Toxic megacolon**: Loss of muscular tone\n- **Perforation**: From severe inflammation\n- **Strictures**: From scarring (less common than CD)\n- **Cancer**: 7-fold ↑ risk after 10 years\n\n## Crohn's Disease Pathophysiology\n\n### Inflammation Pattern\n- **Transmural**: All layers affected\n- **Skip lesions**: Patchy, non-continuous involvement\n- **Granulomas**: Non-caseating (50% of specimens)\n- **Cobblestone appearance**: From submucosal edema\n\n### Complications\n- **Fistulae**: Transmural inflammation → communication between loops\n- **Strictures**: Common (fibrostenosing pattern)\n- **Abscesses**: From perforation + fistulation\n- **Perianal disease**: Fistulas, abscesses (20-30% of CD patients)\n\n## Systemic Manifestations\n\n### Gastrointestinal\n- **Diarrhea**: Mucosal secretion, increased motility\n- **Abdominal pain**: From inflammation, spasm, obstruction\n- **Rectal bleeding**: Mucosal ulceration\n- **Anemia**: From blood loss, malabsorption, chronic inflammation\n\n### Extraintestinal\n- **Arthritis**: HLA-B27 associated (1-2% of IBD)\n- **Erythema nodosum**: From immune complex deposition\n- **Pyoderma gangrenosum**: Ulcerative skin lesions\n- **Uveitis**: Autoimmune inflammation\n- **Primary sclerosing cholangitis**: Associated with UC (1-4%)",
        mnemonics: [
          { text: "IBD pathophysiology: \"GE-DIM\"", explanation: "Genetic, Epithelial barrier, Dysbiosis, Immune dysfunction, Microbiota changes" }
        ],
        keyPoints: [
          "UC: Mucosal-only inflammation, continuous distribution",
          "CD: Transmural inflammation, skip lesions, granulomas",
          "Dysbiosis key to IBD pathophysiology",
          "Barrier dysfunction allows bacterial antigen penetration"
        ],
        textbookRefs: [
          { book: "Harrison's Principles", chapter: "Ch 365", edition: "21st" },
          { book: "Textbook of Gastroenterology (Sharma)", chapter: "Ch 20", edition: "3rd" }
        ]
      },
      {
        layer: 3,
        slug: "ibd-clinical",
        title: "Inflammatory Bowel Disease - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical presentation, diagnosis, and management of IBD in Indian context.",
        contentMd: "# Inflammatory Bowel Disease - Clinical\n\n## Clinical Presentation\n\n### Ulcerative Colitis\n- **Diarrhea**: 3-6+ times daily, often bloody\n- **Abdominal cramps**: Lower abdomen\n- **Tenesmus**: Feeling of incomplete defecation\n- **Systemic symptoms**: Fever, fatigue, weight loss (severe cases)\n- **Fulminant colitis**: Severe, with fever, tachycardia, severe diarrhea\n\n### Crohn's Disease\n- **Diarrhea**: Usually non-bloody (unless colonic involvement)\n- **Abdominal pain**: Often RLQ (terminal ileal disease)\n- **Mass**: Palpable in RLQ (from inflammation/fistulation)\n- **Perianal disease**: Fistulas, abscesses, skin tags\n- **Systemic symptoms**: Fever, weight loss, growth retardation (pediatric)\n\n## Diagnosis\n\n### Laboratory\n- **Fecal calprotectin**: >250 mcg/g suggestive (highly sensitive)\n- **CRP/ESR**: Elevated in active disease\n- **FBC**: Anemia (iron deficiency or chronic disease)\n- **LFTs**: Abnormal if liver involvement\n- **Albumin**: Low in malnutrition\n\n### Endoscopy with Biopsy (Gold Standard)\n- **UC**: Continuous inflammation from rectum, erythema, edema, friability\n- **CD**: Skip lesions, cobblestone, strictures, fissuring ulcers\n- **Biopsy**: Confirms diagnosis, rules out infection\n\n### Imaging\n- **CT colonography**: Assessment of extent & complications\n- **MR enterography**: Best for small bowel CD, assess fistulas\n- **Ultrasound**: First-line in India (cost-effective)\n\n## Management\n\n### Remission Induction\n\n#### Mild-Moderate UC/CD\n- **5-ASA compounds**: Mesalamine 2-4 g daily\n  - **Oral**: For colonic disease\n  - **Rectal**: Suppositories/enemas for distal disease\n- **Corticosteroids**: Prednisolone 30-40 mg daily × 2 weeks, taper\n  - Avoid long-term use (bone loss, infections)\n\n#### Moderate-Severe UC/CD\n- **Corticosteroids**: IV methylprednisolone 250-500 mg IV TDS\n- **Azathioprine/6-mercaptopurine**: 1-2 mg/kg (steroid-sparing)\n- **Biologics**: TNF-α inhibitors (infliximab, adalimumab)\n\n### Maintenance Therapy\n- **5-ASA**: Mesalamine 2-4 g daily (indefinitely)\n- **Azathioprine**: If frequently relapsing\n- **Biologics**: For biologic-responsive patients\n- **Probiotics**: Controversial; limited evidence\n\n### Biologics\n- **Anti-TNF**: Infliximab (IV), Adalimumab (SC)\n- **Anti-IL-12/23**: Ustekinumab\n- **Anti-α4-integrin**: Vedolizumab\n- **JAK inhibitors**: Tofacitinib (emerging)\n\n### Severe/Fulminant Disease\n- **Hospitalization**: IV fluids, electrolyte correction\n- **IV corticosteroids**: Methylprednisolone 250-500 mg IV TDS\n- **IV antibiotics**: If sepsis (cefotaxime + metronidazole)\n- **Surgery**: Colectomy if perforation, megacolon, failed medical therapy\n\n## Management of Complications\n\n### Toxic Megacolon\n- **IV hydration**: Aggressive fluid replacement\n- **IV corticosteroids**: High-dose therapy\n- **Antibiotics**: Broad-spectrum\n- **NPO status**: Bowel rest\n- **Surgery**: Colectomy if no improvement in 48h\n\n### Fistulas (CD)\n- **Medical**: Corticosteroids + azathioprine\n- **Biologics**: TNF-α inhibitors most effective\n- **Surgical**: Drainage of abscesses, fistulotomy\n\n### Strictures\n- **Endoscopic dilation**: For short strictures\n- **Surgical resection**: For long/recurrent strictures\n\n## Surveillance\n- **Colonoscopy**: Every 1-2 years if >8-10 years disease duration (cancer screening)\n- **Bone density**: DXA scan (risk of osteoporosis from steroids)\n- **Pregnancy**: Plan conception, adjust medications\n\n## Indian Context Specific Points\n- **Tuberculosis screening**: Essential before starting biologics\n- **Cost considerations**: 5-ASA + azathioprine preferred (cheaper than biologics)\n- **Tropical infections**: Rule out amebiasis, schistosomiasis\n- **Dietary management**: Local foods, avoidance of triggers",
        mnemonics: [
          { text: "IBD treatment ladder: \"5-ASA-COBI\"", explanation: "5-ASA, Corticosteroids, Biologics, Immunosuppressants (azathioprine)" }
        ],
        keyPoints: [
          "Fecal calprotectin >250 = suggestive of IBD",
          "Endoscopy with biopsy = diagnostic gold standard",
          "TNF-α inhibitors most effective for biologics",
          "Tuberculosis screening mandatory before biologics in India"
        ],
        textbookRefs: [
          { book: "INASL/IGSG IBD Guidelines", edition: "2021" },
          { book: "Harrison's Principles", chapter: "Ch 365", edition: "21st" }
        ]
      },
      {
        layer: 4,
        slug: "ibd-exam",
        title: "Inflammatory Bowel Disease - Exam Prep",
        estimatedMinutes: 15,
        summary: "NEET PG high-yield facts and clinical scenarios.",
        contentMd: "# Inflammatory Bowel Disease - Exam Prep\n\n## UC vs CD Comparison Table\n\n| Feature | UC | CD |\n|---------|-----|----|\n| **Location** | Colon/rectum | Any part GI tract |\n| **Distribution** | Continuous | Skip lesions |\n| **Depth** | Mucosal | Transmural |\n| **Histology** | Crypt abscess | Granuloma (50%) |\n| **Fistulas** | No | Yes (20-30%) |\n| **Strictures** | Rare | Common |\n| **Perianal disease** | No | Yes (20-30%) |\n| **Rectal involvement** | Always | Variable |\n| **Risk of cancer** | 7-fold ↑ | 4-fold ↑ |\n\n## High-Yield Facts\n- **5-ASA**: Mesalamine is derivative (topical in rectum, systemic oral)\n- **Corticosteroids**: For induction, not maintenance (bone loss)\n- **Biologics**: TNF-α inhibitors first-line (infliximab, adalimumab)\n- **Azathioprine**: Steroid-sparing agent\n- **Toxic megacolon**: Medical emergency (colectomy if no improvement 48h)\n\n## NEET PG Scenarios\n- **Bloody diarrhea + RLQ pain**: CD → Imaging, biopsy\n- **Bloody diarrhea + continuous involvement**: UC → Colonoscopy\n- **CD + fistula**: TNF-α inhibitor therapy\n- **UC + fever + tachycardia + severe diarrhea**: Fulminant → IV steroids, possible colectomy",
        mnemonics: [
          { text: "UC vs CD distribution: \"Continuous vs Patchy\"", explanation: "UC = continuous inflammation; CD = skip lesions (patchy)" }
        ],
        keyPoints: [
          "Fecal calprotectin >250 strongly suggestive of IBD",
          "UC: Mucosal inflammation, colon only",
          "CD: Transmural, can affect whole GI tract",
          "Biologic therapy indicated for moderate-severe disease"
        ],
        textbookRefs: [
          { book: "NEET PG Gastroenterology", edition: "2024" },
          { book: "INASL IBD Guidelines", edition: "2021" }
        ]
      },
      {
        layer: 5,
        slug: "ibd-recall",
        title: "Inflammatory Bowel Disease - Active Recall",
        estimatedMinutes: 10,
        summary: "Q&A flashcards for IBD core concepts.",
        contentMd: "# Inflammatory Bowel Disease - Active Recall\n\n## Q&A Flashcards\n\n**Q1: What is the key difference between UC and CD?**\nA: UC = mucosal inflammation in colon/rectum (continuous); CD = transmural inflammation throughout GI tract (skip lesions)\n\n**Q2: What is fecal calprotectin and its significance?**\nA: Neutrophil protein marker of intestinal inflammation; >250 mcg/g suggestive of IBD\n\n**Q3: Gold standard diagnostic test for IBD?**\nA: Colonoscopy with biopsy (shows histological features)\n\n**Q4: First-line agent for mild-moderate UC?**\nA: Mesalamine (5-ASA) 2-4 g daily\n\n**Q5: When should corticosteroids be used in IBD?**\nA: For induction of remission only (not maintenance due to long-term toxicity)\n\n**Q6: Most effective biologic for CD fistulas?**\nA: TNF-α inhibitors (infliximab, adalimumab)\n\n**Q7: What is toxic megacolon?**\nA: Colon dilation >6 cm with systemic toxicity; medical emergency (colectomy if no response in 48h)\n\n**Q8: Tuberculosis screening importance in IBD?**\nA: Essential before starting biologics (TNF-α inhibitors increase TB reactivation risk)",
        mnemonics: [
          { text: "IBD red flags: \"FAST\"", explanation: "Fever, Abdominal pain, Systemic symptoms, Toxic megacolon" }
        ],
        keyPoints: [
          "Mesalamine first-line for mild-moderate disease",
          "Azathioprine steroid-sparing agent",
          "TNF-α inhibitors most effective biologics",
          "TB screening mandatory before biologics in endemic areas like India"
        ],
        textbookRefs: [
          { book: "Harrison's Principles", chapter: "Ch 365", edition: "21st" },
          { book: "NEET PG Gastroenterology", edition: "2024" }
        ]
      }
    ]
  },
  {
    topicCode: "MI-MOD-05-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "hiv-retroviruses-foundation",
        title: "HIV & Retroviruses - Foundation",
        estimatedMinutes: 20,
        summary: "Introduction to retroviruses, HIV virology, and epidemiology.",
        contentMd: "# HIV & Retroviruses - Foundation\n\n## Retroviruses Overview\n\n### Definition\nRetroviruses are RNA viruses that use reverse transcriptase to convert RNA genome to DNA, which integrates into host chromosome.\n\n### Structure\n- **Genome**: Two copies of positive-sense single-stranded RNA (~9.7 kb in HIV)\n- **Enzymes**: Reverse transcriptase, integrase, protease\n- **Envelope**: Lipid bilayer with gp120/gp41 surface proteins\n- **Capsid**: Cone-shaped protein shell\n\n## HIV Overview\n\n### Types\n- **HIV-1**: Pandemic type (>99% of cases globally)\n- **HIV-2**: Primarily West Africa\n\n### Epidemiology\n- **Global**: ~39 million people living with HIV (2023)\n- **India**: ~2.4 million PLHIV (largest in Asia-Pacific)\n- **Incidence**: 90,000 new infections/year (India)\n- **Risk groups**: MSM, sex workers, PWID, transgender\n- **Transmission**: Sexual (80%), MTCT (15%), PWID (5%), occupational (<1%)\n\n### Classification\n- **CD4 count**: Determines immune status (normal >500)\n- **AIDS**: CD4 <200 or opportunistic infection\n- **Viral load**: Copies of HIV RNA per mL (normal <50 undetectable)\n\n## CD4 Count & Clinical Stages\n- **>500**: Immunocompetent\n- **200-500**: Immunocompromised\n- **<200**: Severe immunosuppression (CD4 <50 = very high OI risk)\n\n## Other Retroviruses\n- **HTLV-1**: Adult T-cell leukemia, myelopathy\n- **HTLV-2**: No known disease association\n- **Foamy viruses**: Non-pathogenic in humans",
        mnemonics: [
          { text: "HIV classification: \"CD4-based\"", explanation: ">500 normal, <200 AIDS, <50 severe OI risk" }
        ],
        keyPoints: [
          "HIV-1 causes >99% of infections globally",
          "India has largest PLHIV burden in Asia-Pacific",
          "CD4 count determines immune status and OI risk",
          "AIDS = CD4 <200 or opportunistic infection"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Ch 226", edition: "21st" },
          { book: "NACO National AIDS Control Guidelines", edition: "2023" }
        ]
      },
      {
        layer: 2,
        slug: "hiv-retroviruses-mechanism",
        title: "HIV & Retroviruses - Mechanism",
        estimatedMinutes: 30,
        summary: "HIV replication, pathophysiology, and immune destruction.",
        contentMd: "# HIV & Retroviruses - Mechanism\n\n## HIV Replication Cycle\n\n### Stage 1: Binding & Entry\n- **CD4 binding**: gp120 binds CD4 receptor\n- **Co-receptor binding**: gp120/gp41 → CCR5 or CXCR4 co-receptor\n- **Fusion**: gp41-mediated membrane fusion\n- **Entry**: Viral core enters cytoplasm\n\n### Stage 2: Reverse Transcription\n- **Reverse transcriptase**: Converts viral RNA to DNA\n- **First-strand synthesis**: RNA-DNA hybrid\n- **RNase H**: Degrades RNA\n- **Second-strand synthesis**: Double-stranded DNA formed\n\n### Stage 3: Integration\n- **Nuclear entry**: vDNA transported to nucleus\n- **Integrase**: Integrates vDNA into host chromosome\n- **Provirus**: Integrated HIV DNA (permanent)\n- **Latent reservoir**: Occurs in CD4+ T cells, macrophages\n\n### Stage 4: Viral Production\n- **Transcription**: mRNA & viral RNAs synthesized\n- **Translation**: Viral proteins synthesized\n- **Assembly**: Budding from cell membrane\n- **Maturation**: Protease cleaves polyproteins\n- **Release**: New virions exit cell\n\n## Pathophysiology of AIDS\n\n### CD4+ T Cell Destruction\n1. **Direct infection**: HIV infects activated CD4+ T cells\n2. **Syncytia formation**: Infected cells fuse → multinucleate giant cells\n3. **Cytopathic effect**: Cell lysis from viral replication\n4. **Thymic depletion**: Loss of CD4+ production\n5. **Progressive CD4 decline**: ~50-100 cells/month if untreated\n\n### Immune Dysfunction\n- **Helper T cell loss**: CD4+ critical for immune response coordination\n- **Macrophage infection**: Becomes HIV reservoir (reduced antigen presentation)\n- **B cell dysfunction**: Impaired antibody responses\n- **NK cell defects**: Reduced cytotoxic function\n- **Opportunistic infections**: Due to ↓ CD4 count\n\n### Viral Evolution\n- **High mutation rate**: Reverse transcriptase error rate 10^-3 to 10^-4/base\n- **Selection pressure**: Immune system selects resistant variants\n- **Quasi-species**: Population of related HIV variants\n- **Drug resistance**: Selection of resistant mutations with ART\n\n## Acute HIV Infection\n- **Acute Retroviral Syndrome**: 50-90% have symptoms (2-4 weeks post-infection)\n- **Symptoms**: Fever, rash, lymphadenopathy, arthralgia, myalgia\n- **Viral load**: Peak >100,000 copies/mL\n- **CD4 count**: Temporary drop, then recovery\n- **Antibodies**: Seroconversion within 3-8 weeks\n\n## Chronic HIV Infection\n- **Latent phase**: Years of relative stability (CD4 >200)\n- **Gradual CD4 decline**: Without treatment\n- **Persistent viral replication**: Continuous virion production\n- **Immune activation**: Chronic inflammation, T cell exhaustion",
        mnemonics: [
          { text: "HIV replication: \"BIRD\"", explanation: "Binding, Integration, Reverse transcription, Degradation/Departure" }
        ],
        keyPoints: [
          "Reverse transcriptase: Key enzyme converting RNA to DNA",
          "Integrase: Integrates viral DNA into host chromosome",
          "Protease: Matures new viral particles",
          "CD4 decline ~50-100 cells/month if untreated"
        ],
        textbookRefs: [
          { book: "Harrison's Principles", chapter: "Ch 226", edition: "21st" },
          { book: "Virology (Fields et al)", chapter: "HIV", edition: "6th" }
        ]
      },
      {
        layer: 3,
        slug: "hiv-retroviruses-clinical",
        title: "HIV & Retroviruses - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical manifestations, diagnosis, and management of HIV in Indian context.",
        contentMd: "# HIV & Retroviruses - Clinical\n\n## Clinical Manifestations by CD4 Count\n\n### CD4 >200 cells/μL\n- **Early HIV disease**: Often asymptomatic\n- **Constitutional symptoms**: Fever, night sweats, weight loss\n- **Oral candidiasis**: White plaques on tongue\n- **Herpes zoster**: Reactivation\n- **Bacterial infections**: Increased incidence\n\n### CD4 100-200 cells/μL\n- **PCP (Pneumocystis pneumonia)**: Subacute dyspnea, dry cough\n- **Cryptococcal meningitis**: Headache, fever\n- **Cytomegalovirus (CMV)**: Retinitis, colitis\n- **Toxoplasma encephalitis**: Focal neurological signs\n\n### CD4 <50 cells/μL\n- **Mycobacterium avium complex (MAC)**: Fever, diarrhea, lymphadenopathy\n- **CMV retinitis**: Vision loss, floaters\n- **Cryptococcal meningitis**: Most common opportunistic meningitis\n- **Tuberculosis**: Primary indicator of AIDS\n\n## Diagnosis of HIV\n\n### Testing Algorithm (India)\n1. **Rapid antibody test**: Initial screening\n2. **ELISA**: Confirmation (if rapid positive)\n3. **Western blot/HIV differentiation**: If discordant results\n4. **Viral load (RNA PCR)**: Quantifies CD4 and assesses treatment\n5. **CD4 count**: Determines starting ART & OI prophylaxis\n\n### Window Period\n- **Antibody window**: 3-8 weeks (negative serology despite infection)\n- **RNA PCR**: Detects HIV within 10 days post-infection\n- **p24 antigen**: Becomes positive during window period\n\n## Treatment: Antiretroviral Therapy (ART)\n\n### NRTI (Nucleoside Reverse Transcriptase Inhibitors)\n- **Tenofovir**: 300 mg OD (backbone)\n- **Lamivudine**: 300 mg OD (backbone)\n- **Zidovudine**: 250-300 mg TDS (less commonly used)\n\n### NNRTI (Non-Nucleoside RTI)\n- **Efavirenz**: 600 mg OD (CNS side effects)\n- **Rilpivirine**: 25 mg OD (better tolerability)\n\n### PI (Protease Inhibitors)\n- **Ritonavir**: Booster (increases PI levels)\n- **Lopinavir**: With ritonavir (LPV/r)\n\n### Integrase Inhibitors (First-line)\n- **Dolutegravir**: 50 mg OD (preferred, minimal interactions)\n- **Bictegravir**: 50 mg OD (convenient)\n\n### First-line Regimens (India - NACO 2023)\n- **TLD**: Tenofovir + Lamivudine + Dolutegravir (preferred)\n- **TLE**: Tenofovir + Lamivudine + Efavirenz (if DTG unavailable)\n- **TAF-based**: Tenofovir alafenamide (newer option)\n\n### Monitoring\n- **Baseline**: CD4, viral load, TB status, HBV/HCV, renal function\n- **4-12 weeks**: Clinical response, side effects\n- **3-6 months**: Viral load suppression (target <50 copies)\n- **6-12 months**: CD4 recovery (typically 50-100/month)\n\n## Prevention of Opportunistic Infections\n\n### CD4 <200\n- **PCP prophylaxis**: Trimethoprim-sulfamethoxazole (TMP-SMX) 960 mg OD\n- **If TMP-SMX allergy**: Pentamidine 300 mg monthly (inhaled)\n\n### CD4 <50\n- **MAC prophylaxis**: Azithromycin 1200 mg weekly\n- **CMV prophylaxis**: Not routinely recommended\n\n## Immune Reconstitution Inflammatory Syndrome (IRIS)\n- **Timing**: 2-4 weeks after ART initiation\n- **Mechanism**: Restoration of immune response → inflammatory response to OI\n- **Management**: Continue ART, consider corticosteroids\n- **Prevention**: Early ART initiation even with low CD4\n\n## Special Populations\n\n### Pregnancy\n- **ART continuation**: Critical to prevent MTCT\n- **Preferred regimens**: Integrase inhibitors + TDF/TAF + 3TC\n- **Delivery**: LSCS if viral load >1000\n- **Infant prophylaxis**: AZT + 3TC + NVP (PMTCT regimen)\n\n### TB Co-infection\n- **ART start timing**: Within 2 weeks of TB therapy (CD4 <50), or within 8 weeks (CD4 >50)\n- **Drug interactions**: Rifampicin ↓ PI/NNRTI levels\n- **Preferred regimen**: Integrase inhibitor + 2 NRTIs\n\n### Hepatitis Co-infection\n- **HBV**: Need TDF + 3TC (active against HBV)\n- **HCV**: Direct-acting antivirals safe with ART",
        mnemonics: [
          { text: "CD4-based OIs: \"PCP at 200, Toxo at 100, MAC at 50\"", explanation: "CD4 thresholds for common opportunistic infections" }
        ],
        keyPoints: [
          "TLD (Tenofovir + Lamivudine + Dolutegravir): India preferred first-line",
          "Viral load <50 = undetectable = untransmittable (U=U)",
          "CD4 <200 = PCP prophylaxis with TMP-SMX",
          "IRIS: Inflammatory response after ART initiation (CD4 recovery)"
        ],
        textbookRefs: [
          { book: "NACO National AIDS Control Guidelines", edition: "2023" },
          { book: "Harrison's Principles", chapter: "Ch 226", edition: "21st" }
        ]
      },
      {
        layer: 4,
        slug: "hiv-retroviruses-exam",
        title: "HIV & Retroviruses - Exam Prep",
        estimatedMinutes: 15,
        summary: "NEET PG high-yield facts and management algorithms.",
        contentMd: "# HIV & Retroviruses - Exam Prep\n\n## CD4-Based Opportunistic Infections\n\n| CD4 Count | Opportunistic Infections |\n|-----------|-------------------------|\n| **>500** | Bacterial infections, TB, Candida |\n| **200-500** | PCP, Candida, Herpes zoster |\n| **100-200** | Cryptococcal meningitis, CMV, Toxo |\n| **<50** | MAC, CMV retinitis |\n\n## First-Line ART Regimens (NACO)\n- **TLD**: Tenofovir 300/Lamivudine 300/Dolutegravir 50 mg OD\n- **TLE**: Tenofovir 300/Lamivudine 300/Efavirenz 600 mg OD\n- **Key point**: Dolutegravir preferred (fewer interactions)\n\n## High-Yield Facts\n- **Reverse transcriptase**: Converts RNA genome to DNA\n- **Integration**: Creates latent reservoir (hard to cure)\n- **Viral load <50**: U=U (undetectable = untransmittable)\n- **CD4 <200**: Start PCP prophylaxis\n- **IRIS**: Inflammatory response weeks after ART (continue ART)\n\n## Management Scenarios\n- **Acute retroviral syndrome**: Supportive, start ART promptly\n- **OI diagnosis + low CD4**: Start ART + OI-specific therapy\n- **Virological failure**: Check adherence, resistance testing, switch regimen\n- **Immunological failure**: CD4 not rising despite viral suppression",
        mnemonics: [
          { text: "IRIS timing: \"2-4 weeks\"", explanation: "Occurs 2-4 weeks after ART initiation (immune recovery)" }
        ],
        keyPoints: [
          "Dolutegravir first-line integrase inhibitor",
          "U=U: Undetectable viral load = untransmittable",
          "PCP prophylaxis: TMP-SMX for CD4 <200",
          "TB-HIV: Integrase inhibitor + 2NRTIs preferred"
        ],
        textbookRefs: [
          { book: "NACO Guidelines 2023", edition: "2023" },
          { book: "NEET PG Infectious Diseases", edition: "2024" }
        ]
      },
      {
        layer: 5,
        slug: "hiv-retroviruses-recall",
        title: "HIV & Retroviruses - Active Recall",
        estimatedMinutes: 10,
        summary: "Q&A flashcards for HIV core concepts.",
        contentMd: "# HIV & Retroviruses - Active Recall\n\n## Q&A Flashcards\n\n**Q1: What is reverse transcriptase and its role?**\nA: Enzyme that converts viral RNA to DNA; essential for HIV replication\n\n**Q2: HIV window period?**\nA: 3-8 weeks when person infected but serology negative; RNA PCR detects within 10 days\n\n**Q3: CD4 count for AIDS diagnosis?**\nA: <200 cells/μL or presence of opportunistic infection\n\n**Q4: Most common HIV-related opportunistic infection in India?**\nA: Tuberculosis (indicator of AIDS)\n\n**Q5: First-line ART regimen?**\nA: TLD (Tenofovir + Lamivudine + Dolutegravir)\n\n**Q6: When to start OI prophylaxis?**\nA: CD4 <200 (PCP prophylaxis with TMP-SMX)\n\n**Q7: What is IRIS?**\nA: Immune Reconstitution Inflammatory Syndrome - inflammatory response 2-4 weeks after ART\n\n**Q8: U=U meaning?**\nA: Undetectable = Untransmittable (viral load <50 = no transmission risk)",
        mnemonics: [
          { text: "CD4 decline: 50-100 cells/month untreated", explanation: "Progressive immune destruction without ART" }
        ],
        keyPoints: [
          "HIV-1: Causes >99% of infections",
          "Dolutegravir: Preferred integrase inhibitor (minimal interactions)",
          "Viral load <50: Treatment goal (U=U principle)",
          "TB most common AIDS-defining illness in India"
        ],
        textbookRefs: [
          { book: "Harrison's Principles", chapter: "Ch 226", edition: "21st" },
          { book: "NEET PG Infectious Diseases", edition: "2024" }
        ]
      }
    ]
  },
  {
    topicCode: "OG-MOD-05-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "menstrual-disorders-foundation",
        title: "Menstrual Disorders - Foundation",
        estimatedMinutes: 20,
        summary: "Classification and definitions of menstrual disorders.",
        contentMd: "# Menstrual Disorders - Foundation\n\n## Normal Menstruation\n- **Menarche**: 12-13 years (range 8-16 years)\n- **Menopause**: 50-51 years (range 45-55 years)\n- **Cycle length**: 21-35 days (average 28 days)\n- **Duration**: 3-7 days (average 5 days)\n- **Volume**: 5-80 mL (average 30-40 mL)\n\n## Classification of Menstrual Disorders\n\n### Disorders of Frequency\n- **Oligomenorrhea**: <9 cycles/year (>35 days between cycles)\n- **Polymenorrhea**: >13 cycles/year (<21 days between cycles)\n- **Amenorrhea**: Absence of menstruation (>3 months)\n\n### Disorders of Duration\n- **Hypomenorrhea**: Scanty menses (<5 mL/cycle)\n- **Menorrhagia/Heavy menstrual bleeding**: >80 mL/cycle\n\n### Disorders of Regularity\n- **Irregular menstruation**: Variable cycle length/duration\n- **Anovulation**: Absence of ovulation (irregular cycles)\n\n### Abnormal Uterine Bleeding (AUB)\n- **Acute AUB**: Prolonged/heavy bleeding in non-menstruating woman\n- **Chronic AUB**: >3 months abnormal bleeding\n\n## FIGO Terminology\n- **AUB-HMB**: Heavy menstrual bleeding\n- **AUB-IMB**: Intermenstrual bleeding\n- **AUB-PMB**: Postmenopausal bleeding\n\n## Epidemiology (India)\n- **Menorrhagia**: 8-15% of women report heavy periods\n- **PCOS**: 10-20% prevalence in reproductive-age women\n- **Amenorrhea**: 3-5% prevalence\n- **Dysmenorrhea**: 50-90% of adolescent girls",
        mnemonics: [
          { text: "Menstrual disorders: \"FOAM\"", explanation: "Frequency (oligo/poly/amenorrhea), Duration (hypo/menorrhagia), Abnormal Uterine Bleeding, Mood changes" }
        ],
        keyPoints: [
          "Normal cycle: 21-35 days, 3-7 days duration, 5-80 mL volume",
          "Amenorrhea: >3 months without menses",
          "Oligomenorrhea: <9 cycles/year",
          "HMB: >80 mL/cycle (objective) or subjective excessive bleeding"
        ],
        textbookRefs: [
          { book: "Obstetrics & Gynaecology (Williams)", chapter: "Ch 37", edition: "25th" },
          { book: "DC Dutta's Textbook of Obstetrics & Gynaecology", chapter: "Ch 18", edition: "8th" }
        ]
      },
      {
        layer: 2,
        slug: "menstrual-disorders-mechanism",
        title: "Menstrual Disorders - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathophysiology of menstrual irregularities.",
        contentMd: "# Menstrual Disorders - Mechanism\n\n## Menstrual Cycle Physiology\n\n### Follicular Phase (Days 1-14)\n- **FSH↑**: Stimulates follicle growth\n- **Estrogen↑**: Grows endometrium\n- **LH surge**: Triggers ovulation\n\n### Luteal Phase (Days 14-28)\n- **Progesterone↑**: From corpus luteum\n- **Endometrium secretory**: Prepares for implantation\n- **No fertilization**: Corpus luteum degenerates → progesterone↓ → menstruation\n\n## Pathophysiology of Amenorrhea\n\n### Primary Amenorrhea\n- **No menses by age 16** (or >5 years after thelarche)\n- **Causes**: Hypothalamic, pituitary, ovarian, uterine, constitutional delay\n\n#### Hypothalamic Amenorrhea\n- **Low GnRH**: From stress, weight loss, excessive exercise\n- **↓ FSH, LH**: Secondary hypogonadism\n- **Result**: No follicle growth → no menstruation\n\n#### PCOS Amenorrhea\n- **LH:FSH ratio elevated** (3:1 or higher)\n- **Androgen excess**: From ovarian theca cells\n- **Anovulation**: No ovulation → no progesterone → continuous estrogen\n- **Endometrial effects**: Unopposed estrogen → hyperplasia risk\n\n#### Ovarian Failure\n- **Primary ovarian insufficiency**: ↑ FSH, ↓ estrogen\n- **Causes**: Genetics, autoimmune, chemotherapy, radiation\n\n### Secondary Amenorrhea\n- **Loss of menstruation >3 months** after regular cycles\n- **Most common cause**: Pregnancy, then PCOS, then weight loss\n\n## Pathophysiology of Menorrhagia\n\n### Uterine Causes\n- **Fibroids**: Submucosal fibroids distort endometrium\n- **Polyps**: Increase endometrial surface area\n- **Adenomyosis**: Ectopic endometrium in myometrium → ↑ prostaglandins\n- **Endometrial hyperplasia**: From unopposed estrogen\n\n### Hemostatic Disorders\n- **Von Willebrand disease**: Affects 5-15% of HMB patients\n- **Platelet dysfunction**: Reduced bleeding time correction\n- **Thrombocytopenia**: ↓ platelets → prolonged bleeding\n- **Factor deficiencies**: Factor XI, XIII deficiencies\n\n### Hormonal Mechanisms\n- **Progesterone resistance**: Impaired endometrial response to progesterone\n- **↑ Prostaglandins**: In adenomyosis, endometriosis\n- **↑ Fibrinolysis**: In menorrhagia (increased tissue plasminogen activator)\n- **↓ Vasoconstriction**: Impaired vessel constriction\n\n## Pathophysiology of Dysmenorrhea\n\n### Primary Dysmenorrhea\n- **No organic pathology**: Functional disorder\n- **↑ Prostaglandin F2α**: Increases myometrial contractions\n- **Result**: Intense uterine contractions → pain, nausea, vomiting\n\n### Secondary Dysmenorrhea\n- **Endometriosis**: Ectopic endometrium in peritoneum\n- **Adenomyosis**: Ectopic endometrium in myometrium\n- **Fibroids/polyps**: Distort uterine cavity\n- **IUD use**: Foreign body reaction → pain",
        mnemonics: [
          { text: "Amenorrhea causes: \"PHO-E\"", explanation: "Pregnancy, Hypothalamic, Ovarian, Endocrine, Uterine/Anatomic" }
        ],
        keyPoints: [
          "PCOS: Anovulation → unopposed estrogen → endometrial hyperplasia risk",
          "Menorrhagia: Fibroids, adenomyosis, von Willebrand disease",
          "Dysmenorrhea: ↑ prostaglandins (primary), endometriosis (secondary)",
          "Amenorrhea most commonly from pregnancy, PCOS, weight loss"
        ],
        textbookRefs: [
          { book: "Obstetrics & Gynaecology (Williams)", chapter: "Ch 37-38", edition: "25th" },
          { book: "DC Dutta's Textbook", chapter: "Ch 18-19", edition: "8th" }
        ]
      },
      {
        layer: 3,
        slug: "menstrual-disorders-clinical",
        title: "Menstrual Disorders - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical evaluation and management of menstrual disorders.",
        contentMd: "# Menstrual Disorders - Clinical\n\n## Diagnostic Approach\n\n### History\n- **Menstrual history**: Onset (menarche), cycle length, duration, volume\n- **Associated symptoms**: Dysmenorrhea, hot flushes (menopause), mood changes\n- **Contraception use**: Hormonal methods affect bleeding patterns\n- **Systemic symptoms**: Weight loss, stress, exercise habits\n- **Pregnancy history**: Last menstrual period, possibility of pregnancy\n\n### Physical Examination\n- **General**: BMI, signs of androgen excess (acne, hirsutism)\n- **Cardiovascular**: Signs of shock (heavy bleeding)\n- **Abdomen**: Masses, tenderness\n- **Pelvic**: Uterine size, fibroids, adenomyosis, discharge\n- **Speculum**: Cervical polyps, discharge\n- **Bimanual**: Adnexal masses, uterine tenderness\n\n## Investigations\n\n### Basic Tests\n- **Urine/serum β-hCG**: Rule out pregnancy\n- **CBC**: Assess anemia (Hb, iron stores)\n- **Coagulation profile**: PT, aPTT, platelet count (if HMB)\n- **Thyroid function**: TSH (hypothyroidism → menorrhagia)\n\n### Pelvic Imaging\n- **Ultrasound (TV/TA)**: Gold standard for structural pathology\n  - **TVS**: Better visualization of endometrial pathology\n  - **3D ultrasound**: For submucosal fibroids\n- **MRI**: For adenomyosis, complex fibroids\n\n### Endoscopic Evaluation\n- **Hysteroscopy**: Gold standard for endometrial/intracavitary pathology\n  - **Diagnostic**: Assess polyps, fibroids, synechiae\n  - **Operative**: Remove polyps, fibroids, septate uterus\n\n### Endometrial Assessment\n- **Endometrial sampling**: For dysfunctional uterine bleeding in older women (>45 years)\n- **Endometrial biopsy**: Assess for hyperplasia, cancer\n\n## Management\n\n### Amenorrhea Management\n\n#### Hypothalamic Amenorrhea\n- **Stress reduction**: Psychological support\n- **Weight gain**: If underweight (target BMI 18.5-25)\n- **Reduce exercise**: If excessive\n- **Hormone replacement**: If bone health at risk\n\n#### PCOS-Related Amenorrhea\n- **Lifestyle modification**: Weight loss, exercise (5-10% weight loss restores ovulation)\n- **Metformin**: 1500-2000 mg daily (improves insulin sensitivity)\n- **OCPs**: Combined oral contraceptives (regulate cycles)\n- **Progestin therapy**: Medroxyprogesterone 10 mg × 12 days (monthly withdrawal bleed)\n\n#### Ovarian Failure\n- **Hormone replacement therapy**: Estrogen + Progesterone\n- **Counseling**: Fertility counseling, psychological support\n\n### Menorrhagia Management\n\n#### Medical\n- **First-line**: \n  - **Combined OCPs**: 30-35 μg ethinyl estradiol (reduces flow 40-50%)\n  - **Levonorgestrel IUS**: Releases 20 μg/day (most effective)\n  - **NSAIDs**: Ibuprofen 400 mg TDS × 5 days (reduces PG, decreases flow 20-50%)\n  - **Tranexamic acid**: 1.5 g TDS × 3-4 days (antifibrinolytic, 50% reduction)\n\n- **Second-line**:\n  - **Progestin therapy**: Norethisterone 5 mg TDS × 10 days (luteal phase)\n  - **GnRH agonists**: For short-term (induces amenorrhea)\n  - **Danazol**: Androgen (suppresses endometrium)\n\n#### Surgical\n- **Indications**: Failed medical therapy, fibroids, polyps causing HMB\n- **Procedures**:\n  - **Dilation & curettage (D&C)**: Diagnostic + therapeutic\n  - **Myomectomy**: Removal of fibroids (hysteroscopic/laparoscopic)\n  - **Polypectomy**: Removal of endometrial polyps\n  - **Hysterectomy**: Definitive (removal of uterus)\n  - **Endometrial ablation**: Heat/radiofrequency (prevents overgrowth)\n\n### Dysmenorrhea Management\n\n#### Primary Dysmenorrhea\n- **NSAIDs**: Ibuprofen 400 mg TDS or Naproxen 250 mg TDS × 3-5 days\n  - Start at onset of pain\n  - 80-90% effective\n- **Combined OCPs**: Suppress ovulation (reduce PG production)\n- **Heat therapy**: Heating pad or hot water bottle\n- **Exercise**: Regular physical activity reduces pain\n\n#### Secondary Dysmenorrhea\n- **Treat underlying cause**:\n  - **Endometriosis**: NSAIDs, OCPs, GnRH agonists, surgical ablation\n  - **Adenomyosis**: Levonorgestrel IUS, hysterectomy\n  - **Fibroids/polyps**: Surgical removal\n\n## Monitoring & Follow-up\n- **Menorrhagia**: Reassess after 3 months of therapy\n- **Amenorrhea**: Investigate further if >6 months duration\n- **Anemia**: Monitor Hb & iron stores in heavy bleeding",
        mnemonics: [
          { text: "HMB management ladder: \"LOCA-HEA\"", explanation: "Levonorgestrel IUS, OCPs, Tranexamic acid, NSAIDs; Hormonal escalation, Endometrial ablation, hysterectomy" }
        ],
        keyPoints: [
          "PCOS amenorrhea: Weight loss 5-10% can restore ovulation",
          "Levonorgestrel IUS most effective medical therapy for HMB",
          "NSAIDs first-line for dysmenorrhea (80-90% effective)",
          "Endometrial sampling required in postmenopausal women with AUB"
        ],
        textbookRefs: [
          { book: "FOGSI Guidelines on Menstrual Disorders", edition: "2020" },
          { book: "Obstetrics & Gynaecology (Williams)", chapter: "Ch 37-38", edition: "25th" }
        ]
      },
      {
        layer: 4,
        slug: "menstrual-disorders-exam",
        title: "Menstrual Disorders - Exam Prep",
        estimatedMinutes: 15,
        summary: "NEET PG high-yield facts and clinical algorithms.",
        contentMd: "# Menstrual Disorders - Exam Prep\n\n## Oligomenorrhea Differential Diagnosis\n\n| Cause | Key Feature | Investigation |\n|-------|-------------|----------------|\n| **PCOS** | LH:FSH ↑, androgen ↑ | Pelvic ultrasound |\n| **Hypothalamic** | Normal FSH, Normal PRL | Normal imaging |\n| **Hyperprolactinemia** | PRL ↑ | Serum PRL, MRI pituitary |\n| **Hypothyroidism** | TSH ↑ | TSH, Free T4 |\n| **Ovarian failure** | FSH ↑, Estrogen ↓ | FSH >40 mIU/mL |\n\n## HMB Causes Classification (PALM-COEIN)\n- **Structural**: Polyps, Adenomyosis, Leiomyoma, Malignancy\n- **Non-structural**: Coagulopathy, Ovulatory dysfunction, Endometrial, Iatrogenic, No specific pathology\n\n## High-Yield Treatment\n- **Amenorrhea**: Identify cause (pregnancy, PCOS, weight loss, ovarian failure)\n- **HMB medical first-line**: Levonorgestrel IUS or combined OCPs\n- **Dysmenorrhea**: NSAIDs (start at pain onset)\n- **PCOS**: Weight loss (5-10%), metformin, OCPs",
        mnemonics: [
          { text: "Amenorrhea workup: \"hPOE\"", explanation: "Hypothalamic, Pituitary, Ovarian, Endometrial/Anatomic" }
        ],
        keyPoints: [
          "PCOS: ↑ LH:FSH (3:1 or higher), ↑ testosterone",
          "Levonorgestrel IUS: 50% reduction in HMB, improves over 3 months",
          "NSAIDs: 20-50% reduction in menorrhagia",
          "Endometrial assessment if >45 years with AUB"
        ],
        textbookRefs: [
          { book: "NEET PG OG", edition: "2024" },
          { book: "FOGSI Guidelines", edition: "2020" }
        ]
      },
      {
        layer: 5,
        slug: "menstrual-disorders-recall",
        title: "Menstrual Disorders - Active Recall",
        estimatedMinutes: 10,
        summary: "Q&A flashcards for menstrual disorders.",
        contentMd: "# Menstrual Disorders - Active Recall\n\n## Q&A Flashcards\n\n**Q1: Normal menstrual cycle parameters?**\nA: Cycle length 21-35 days, duration 3-7 days, volume 5-80 mL\n\n**Q2: Definition of amenorrhea?**\nA: Absence of menstruation for >3 months\n\n**Q3: Most common cause of secondary amenorrhea?**\nA: Pregnancy, then PCOS, then weight loss\n\n**Q4: PCOS diagnostic criteria?**\nA: Anovulation (oligo/amenorrhea) + hyperandrogenism + polycystic ovaries on ultrasound\n\n**Q5: First-line treatment for heavy menstrual bleeding?**\nA: Levonorgestrel IUS or combined OCPs\n\n**Q6: Management of dysmenorrhea?**\nA: NSAIDs (ibuprofen/naproxen) started at pain onset\n\n**Q7: Why is endometrial assessment needed in postmenopausal bleeding?**\nA: To rule out endometrial cancer\n\n**Q8: Weight loss effect on PCOS amenorrhea?**\nA: 5-10% weight loss can restore ovulation",
        mnemonics: [
          { text: "Amenorrhea red flags: \"5 P's\"", explanation: "Pregnancy, PCOS, Pituitary, (under-)weight, Primary ovarian insufficiency" }
        ],
        keyPoints: [
          "PCOS most common cause of oligomenorrhea/anovulation",
          "Levonorgestrel IUS most effective for HMB (50% reduction)",
          "NSAIDs effective for dysmenorrhea (80-90% effective)",
          "Weight loss 5-10% restores ovulation in PCOS"
        ],
        textbookRefs: [
          { book: "Obstetrics & Gynaecology (Williams)", chapter: "Ch 37-38", edition: "25th" },
          { book: "NEET PG OG", edition: "2024" }
        ]
      }
    ]
  },
  {
    topicCode: "OP-MOD-02-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "conjunctivitis-trachoma-foundation",
        title: "Conjunctivitis & Trachoma - Foundation",
        estimatedMinutes: 20,
        summary: "Introduction to conjunctivitis types and trachoma epidemiology.",
        contentMd: "# Conjunctivitis & Trachoma - Foundation\n\n## Definition\nConjunctivitis is inflammation of the conjunctiva (mucous membrane covering eye & inner eyelid).\n\n## Classification of Conjunctivitis\n\n### By Etiology\n1. **Bacterial**: Staph, Strep, Gonorrhea, Chlamydia\n2. **Viral**: Adenovirus, Enterovirus, HSV\n3. **Allergic**: IgE-mediated reaction\n4. **Chemical**: Irritants, toxic substances\n5. **Parasitic**: Rare in developed countries\n\n### By Presentation\n- **Acute**: Sudden onset, resolves quickly\n- **Chronic**: >4 weeks duration\n- **Recurrent**: Episodes of inflammation\n\n## Trachoma Overview\n\n### Definition\nTrachoma is chronic keratoconjunctivitis caused by Chlamydia trachomatis (L1-L3 serovars).\n\n### WHO Classification\n- **TF**: Trachomatous inflammation-follicular (active, children)\n- **TI**: Trachomatous inflammation-intense (severe active)\n- **TS**: Trachomatous scarring (chronic stage)\n- **TT**: Trachomatous trichiasis (advanced, eyelash damage)\n- **CO**: Corneal opacity (end-stage, blindness)\n\n## Epidemiology\n\n### Conjunctivitis (Global)\n- Most common eye complaint in outpatients\n- Seasonal variation: Summer peak (bacterial), winter (viral)\n- Highly contagious (especially viral)\n\n### Trachoma (India & Globally)\n- **Global**: Leading infectious cause of blindness (1.9 million people blind)\n- **India**: Elimination target by 2025 (WHO SAFE strategy)\n- **Prevalence**: Higher in rural, poor communities\n- **Age**: Highest in children <5 years\n- **Recurrent infections**: Lead to scarring & blindness",
        mnemonics: [
          { text: "Conjunctivitis causes: \"BBC\"", explanation: "Bacterial, Bacterial (again), Chemical/allergic" }
        ],
        keyPoints: [
          "Conjunctivitis most common eye outpatient complaint",
          "Trachoma leading infectious cause of blindness",
          "Trachoma in children indicates population-level disease",
          "SAFE strategy: Surgery, Antibiotics, Facial cleanliness, Environmental improvement"
        ],
        textbookRefs: [
          { book: "Textbook of Ophthalmology (Parson)", chapter: "Ch 5", edition: "23rd" },
          { book: "WHO Guidelines on Trachoma", edition: "2019" }
        ]
      },
      {
        layer: 2,
        slug: "conjunctivitis-trachoma-mechanism",
        title: "Conjunctivitis & Trachoma - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathophysiology of conjunctivitis and trachoma pathogenesis.",
        contentMd: "# Conjunctivitis & Trachoma - Mechanism\n\n## Bacterial Conjunctivitis Pathophysiology\n- **Direct bacterial invasion**: Epithelial adherence & entry\n- **Inflammatory response**: PMN infiltration → purulent discharge\n- **Cytokine release**: IL-6, IL-8 → chemotaxis\n- **Mucosal damage**: Loss of epithelial integrity\n- **Duration**: Typically 7-10 days if untreated\n\n## Viral Conjunctivitis Pathophysiology\n- **Viral replication**: In epithelial cells\n- **Cytolysis**: Cell death → tissue damage\n- **Immune response**: IFN-α, IFN-β production\n- **Follicle formation**: Lymphocyte infiltration (hence \"follicular\" appearance)\n- **Duration**: Usually self-limited (7-21 days)\n\n## Trachoma Pathophysiology\n\n### Stage 1: Acute Infection (Active Trachoma)\n- **Chlamydial infection**: Intracellular pathogen (obligate)\n- **Elementary bodies**: Infectious particle\n- **Reticulate bodies**: Replication in inclusion bodies\n- **Immune response**: Th1/Th17 activation\n- **Symptoms**: Photophobia, tearing, discharge\n\n### Stage 2: Chronic/Recurrent Infection\n- **Repeated infections**: Due to immune evasion mechanisms\n- **Persistent inflammation**: TGF-β driving scarring\n- **Fibroblast activation**: Myofibroblast transformation\n- **Collagen deposition**: Scar tissue formation\n- **Trachomatous scarring**: TF → TI → TS\n\n### Stage 3: Blindness (Trachomatous Trichiasis)\n- **Entropion**: Inversion of eyelid from scarring\n- **Trichiasis**: Eyelashes rub against cornea\n- **Corneal scarring**: From repeated trauma\n- **Corneal opacity (CO)**: Opacity → permanent blindness\n\n## Allergic Conjunctivitis Mechanism\n- **Type I HSR**: IgE-mediated reaction to allergen\n- **Mast cell degranulation**: Release of histamine\n- **Eosinophil infiltration**: In chronic allergic conjunctivitis\n- **Papillary hypertrophy**: Large papillae in tarsal conjunctiva (vernal keratitis)\n\n## Host Factors in Trachoma\n- **HLA associations**: HLA-B60 increases infection risk\n- **Immunodeficiency**: HIV ↑ trachoma severity\n- **Malnutrition**: Vitamin A deficiency common in affected populations\n- **Age of first infection**: Early infection → severe disease risk",
        mnemonics: [
          { text: "Trachoma stages: \"FITCO\"", explanation: "Follicular, Intense, Trichiasis, Corneal opacity" }
        ],
        keyPoints: [
          "Chlamydia trachomatis: Intracellular pathogen (L1-L3 for trachoma)",
          "Trachoma: Repeated infection → chronic inflammation → scarring",
          "Entropion + trichiasis → corneal damage → blindness",
          "TGF-β drives fibrosis in chronic trachoma"
        ],
        textbookRefs: [
          { book: "Ophthalmology (Kanski)", chapter: "Ch 5", edition: "10th" },
          { book: "WHO Trachoma Guidelines", edition: "2019" }
        ]
      },
      {
        layer: 3,
        slug: "conjunctivitis-trachoma-clinical",
        title: "Conjunctivitis & Trachoma - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical diagnosis and management of conjunctivitis and trachoma in Indian context.",
        contentMd: "# Conjunctivitis & Trachoma - Clinical\n\n## Bacterial Conjunctivitis\n\n### Clinical Features\n- **Purulent discharge**: Thick, yellowish, sticky\n- **Conjunctival injection**: Bright red\n- **Lid swelling**: Moderate\n- **Photophobia**: Mild\n- **Preauricular lymphadenopathy**: Usually absent (distinguishes from viral)\n\n### Common Bacteria (India)\n- **Staph aureus**: Most common (50%)\n- **Strep pneumoniae**: Second most common\n- **Haemophilus**: Less common\n- **Gonorrhea**: Severe (purulent, thick discharge)\n\n### Management\n- **Antibiotic eye drops**: Chloramphenicol, ciprofloxacin, moxifloxacin QID × 7 days\n- **Ointment**: Chlortetracycline/bacitracin ointment TDS × 7 days\n- **Systemic antibiotics**: If severe or Gonorrhea (ceftriaxone 250 mg IM)\n- **Hygiene**: Regular eyelid cleaning\n- **Supportive**: Cool compresses\n\n## Viral Conjunctivitis\n\n### Clinical Features\n- **Watery discharge**: Clear, mucoid\n- **Preauricular lymphadenopathy**: Present (distinguishes from bacterial)\n- **Follicular response**: Lymphocyte aggregates\n- **Photophobia**: Variable\n- **Systemic symptoms**: URI prodrome (adenoviral)\n\n### Management\n- **Supportive care**: Cool compresses, lubricating drops\n- **Antivirals**: Acyclovir ointment if HSV\n- **Avoid antibiotics**: Viral conjunctivitis doesn't require them\n- **Self-limited**: Usually resolves in 7-21 days\n- **Hygiene**: Prevent spread\n\n## Trachoma Management (WHO SAFE Strategy)\n\n### S: Surgery\n- **Indication**: Trachomatous trichiasis (TT)\n- **Procedure**: Corrective eyelid surgery (entropion correction, lash removal)\n- **Goal**: Prevent corneal opacity\n- **Timing**: Before corneal scarring develops\n\n### A: Antibiotics\n- **Azithromycin**: 20 mg/kg OD × 3 days (most effective)\n- **Tetracycline ointment**: 1% BID × 6 weeks (for active TF/TI)\n- **Coverage**: Treats active infection, reduces transmission\n- **Timing**: Early in disease course\n\n### F: Facial Cleanliness\n- **Hand washing**: Reduce transmission\n- **Face washing**: Daily with soap & water\n- **Reduce fly exposure**: Sanitation, water access\n- **Target**: Children (highest infection rate)\n\n### E: Environmental Improvement\n- **Water supply**: Adequate access (↓ infection risk)\n- **Sanitation**: Toilets, sewage systems\n- **Nutrition**: Vitamin A supplementation\n- **Health education**: Community awareness\n\n## Trachoma Surveillance & Elimination\n\n### Population Screening\n- **TF in children <5**: Indicates active transmission\n- **TT in adults**: Indicates past infection\n- **CO blindness**: Outcome indicator\n\n### Elimination Criteria (WHO)\n- **TF prevalence <5%** in children <5 years\n- **TT prevalence <0.2%** in population ≥15 years\n- **Valid strategy**: SAFE approach\n\n## Allergic Conjunctivitis\n\n### Management\n- **Allergen avoidance**: Remove trigger\n- **Antihistamine drops**: Olopatadine, levocabastine\n- **Topical steroids**: Prednisolone acetate (short-term)\n- **Mast cell stabilizers**: Sodium cromoglycate (long-term)\n- **Cold compresses**: Symptomatic relief\n- **Vernal keratitis**: May need topical cyclosporine if severe",
        mnemonics: [
          { text: "Conjunctivitis key difference: \"Preauricular in Viral\"", explanation: "Bacterial = purulent, no LAD; Viral = watery, preauricular LAD" }
        ],
        keyPoints: [
          "Bacterial conjunctivitis: Purulent discharge, no lymphadenopathy",
          "Viral: Watery discharge, preauricular lymphadenopathy",
          "Trachoma: Azithromycin 20 mg/kg × 3 days most effective",
          "SAFE strategy key to trachoma elimination"
        ],
        textbookRefs: [
          { book: "Textbook of Ophthalmology (Parson)", chapter: "Ch 5", edition: "23rd" },
          { book: "WHO Trachoma Elimination Guidelines", edition: "2019" }
        ]
      },
      {
        layer: 4,
        slug: "conjunctivitis-trachoma-exam",
        title: "Conjunctivitis & Trachoma - Exam Prep",
        estimatedMinutes: 15,
        summary: "NEET PG high-yield facts and management algorithms.",
        contentMd: "# Conjunctivitis & Trachoma - Exam Prep\n\n## Conjunctivitis Comparison\n\n| Feature | Bacterial | Viral | Allergic |\n|---------|-----------|-------|----------|\n| **Discharge** | Purulent | Watery | Ropy, stringy |\n| **Lymph node** | None | Preauricular | None |\n| **Photophobia** | Mild | Variable | Severe (in vernal) |\n| **Follicles** | Not prominent | Prominent | Giant papillae |\n| **Treatment** | Antibiotics | Supportive | Antihistamine/steroid |\n\n## High-Yield Facts\n- **Trachoma**: Leading infectious cause of blindness\n- **Azithromycin**: 20 mg/kg × 3 days (mass drug administration)\n- **Preauricular LAD**: Pathognomonic for viral conjunctivitis\n- **Trachomatous trichiasis**: Requires surgery (TT stage)\n- **SAFE strategy**: WHO approach to elimination\n\n## Indian Context\n- **Trachoma elimination target**: 2025 (India)\n- **Prevalence**: Still high in rural areas\n- **Risk factors**: Poor sanitation, limited water access\n- **Vitamin A deficiency**: Common in endemic areas",
        mnemonics: [
          { text: "Trachoma antibiotic: Azithromycin 20 mg/kg", explanation: "Single dose × 3 days for mass drug administration" }
        ],
        keyPoints: [
          "Bacterial conjunctivitis most common (50% Staph aureus)",
          "Viral: Self-limited, no antibiotics needed",
          "Trachoma: TF (active) → TS (scarring) → TT (trichiasis) → CO (blindness)",
          "Surgery prevents blindness if done before corneal opacity"
        ],
        textbookRefs: [
          { book: "NEET PG Ophthalmology", edition: "2024" },
          { book: "WHO Trachoma Guidelines", edition: "2019" }
        ]
      },
      {
        layer: 5,
        slug: "conjunctivitis-trachoma-recall",
        title: "Conjunctivitis & Trachoma - Active Recall",
        estimatedMinutes: 10,
        summary: "Q&A flashcards for conjunctivitis and trachoma.",
        contentMd: "# Conjunctivitis & Trachoma - Active Recall\n\n## Q&A Flashcards\n\n**Q1: Most common cause of bacterial conjunctivitis?**\nA: Staphylococcus aureus (50% of cases)\n\n**Q2: Key distinguishing feature of viral conjunctivitis?**\nA: Preauricular lymphadenopathy (usually absent in bacterial)\n\n**Q3: Causative agent of trachoma?**\nA: Chlamydia trachomatis serovars L1, L2, L3\n\n**Q4: WHO trachoma elimination criteria?**\nA: TF <5% in children <5 years; TT <0.2% in population ≥15 years\n\n**Q5: Treatment of active trachoma?**\nA: Azithromycin 20 mg/kg OD × 3 days\n\n**Q6: Stages leading to trachomatous blindness?**\nA: TF (active) → TS (scarring) → TT (trichiasis) → CO (corneal opacity/blindness)\n\n**Q7: First-line antibiotic for bacterial conjunctivitis?**\nA: Chloramphenicol or ciprofloxacin drops QID × 7 days\n\n**Q8: SAFE strategy components?**\nA: Surgery (TT), Antibiotics (azithromycin), Facial cleanliness, Environmental improvement",
        mnemonics: [
          { text: "Preauricular LAD = VIRAL", explanation: "Remember this distinction for exam" }
        ],
        keyPoints: [
          "Bacterial: Purulent discharge, NO lymphadenopathy",
          "Viral: Watery discharge, YES preauricular LAD",
          "Trachoma: Progressive scarring → blindness if untreated",
          "SAFE strategy key to trachoma elimination globally"
        ],
        textbookRefs: [
          { book: "Textbook of Ophthalmology (Parson)", chapter: "Ch 5", edition: "23rd" },
          { book: "NEET PG Ophthalmology", edition: "2024" }
        ]
      }
    ]
  },
  {
    topicCode: "OR-MOD-02-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "clavicle-shoulder-fractures-foundation",
        title: "Clavicle & Shoulder Fractures - Foundation",
        estimatedMinutes: 20,
        summary: "Anatomy, classification, and epidemiology of clavicle and shoulder fractures.",
        contentMd: "# Clavicle & Shoulder Fractures - Foundation\n\n## Clavicle Anatomy\n- **S-shaped bone**: Medial 2/3 convex, lateral 1/3 concave\n- **Articulations**: Sternoclavicular (medial), acromioclavicular (lateral)\n- **Blood supply**: Predominantly medial (nutrient artery)\n- **Function**: Transmit load from upper limb to axial skeleton\n\n## Classification of Clavicle Fractures (Neer)\n\n### Group 1: Medial Third (5%)\n- Stable, high union rate\n- Rare neurovascular injury\n- Usually conservative treatment\n\n### Group 2: Middle Third (80%)\n- Most common\n- Subdivided: non-displaced, displaced, comminuted\n- Anterior displacement common (sternocleidomastoid pull)\n\n### Group 3: Lateral Third (15%)\n- Variable healing\n- Risk of nonunion\n- May need surgical fixation\n\n## Shoulder Joint Anatomy\n- **Ball-and-socket joint**: Glenohumeral joint\n- **Most mobile joint**: GH joint inherently unstable\n- **Rotator cuff**: Stabilizes shoulder (supraspinatus, infraspinatus, teres minor, subscapularis)\n\n## Types of Shoulder Fractures\n\n### Proximal Humerus Fractures\n- **Anatomical neck**: Just distal to humeral head\n- **Surgical neck**: Most common, below tuberosities\n- **Greater tuberosity**: Often associated with dislocation\n- **Lesser tuberosity**: Rare\n\n### Scapular Fractures\n- **Body**: Rare, high-energy trauma\n- **Neck**: Risk of neurovascular injury\n- **Glenoid**: May affect joint stability\n- **Acromion/coracoid**: Variable significance\n\n## Epidemiology (India)\n- **Clavicle**: Most common fracture in young adults\n- **Shoulder dislocations**: Anterior (95% of cases)\n- **Proximal humerus**: Common in elderly (osteoporosis)\n- **Incidence**: Rising with increased trauma (RTA, sports)",
        mnemonics: [
          { text: "Clavicle fracture rule: \"80-15-5\"", explanation: "80% middle third, 15% lateral, 5% medial" }
        ],
        keyPoints: [
          "Clavicle middle third most common (80%)",
          "Proximal humerus: Common in elderly",
          "Shoulder joint most mobile joint (inherently unstable)",
          "Rotator cuff stabilizes shoulder"
        ],
        textbookRefs: [
          { book: "Campbell's Operative Orthopaedics", chapter: "Ch 54", edition: "14th" },
          { book: "Textbook of Orthopaedics (Maheshwari)", chapter: "Ch 14", edition: "7th" }
        ]
      },
      {
        layer: 2,
        slug: "clavicle-shoulder-fractures-mechanism",
        title: "Clavicle & Shoulder Fractures - Mechanism",
        estimatedMinutes: 30,
        summary: "Biomechanics and injury mechanisms of clavicle and shoulder fractures.",
        contentMd: "# Clavicle & Shoulder Fractures - Mechanism\n\n## Clavicle Fracture Mechanisms\n\n### Direct Trauma\n- **Fall on shoulder**: Direct blow to lateral shoulder\n- **Fall on outstretched hand**: Force transmitted through arm\n- **Motor vehicle accident**: Direct chest trauma\n- **Result**: Varies by force direction & magnitude\n\n### Force Direction Effects\n- **Anterior/posterior displacement**: Depends on force direction\n- **Anterior (90%)**: Sternocleidomastoid muscle contracts → pulls proximal fragment\n- **Posterior (10%)**: Less common, higher risk of neurovascular injury\n\n### Displacement Mechanics\n- **Medial fragment**: Elevated by sternocleidomastoid, clavicular head of pectoralis\n- **Lateral fragment**: Depressed by gravity, weight of arm\n- **Deformity**: \"Tent\" appearance (peaked prominence)\n\n## Proximal Humerus Fracture Mechanisms\n\n### Mechanism of Injury\n- **Fall on outstretched hand (FOOSH)**: Most common in young\n- **Direct fall on shoulder**: Elderly patients\n- **Seizures/muscular contractions**: Rare\n- **Pathological fractures**: Bone disease (osteoporosis, metastases)\n\n### Force Vectors\n- **Axial loading**: Vertical force through arm\n- **Abduction force**: Pulls on rotator cuff muscles\n- **Adduction force**: Medial displacement of distal fragment\n\n### Angulation Patterns\n- **Varus angulation**: Neck angulation toward medial\n- **Valgus angulation**: Neck angulation toward lateral\n- **Retroversion**: Dorsal angulation\n- **Antersion**: Ventral angulation\n\n## Blood Supply Disruption\n- **Medial circulatory system**: Via nutrient artery (medial clavicle)\n- **Lateral circulation**: Via suprascapular vessels (less reliable)\n- **Fracture displacement**: May disrupt blood supply → nonunion\n- **Lateral third fractures**: Higher nonunion risk (lateral blood supply ↓)\n\n## Comminution Mechanics\n- **High-energy trauma**: Creates multiple fragments\n- **Age factor**: Younger bone more likely comminuted; elderly more likely simple fracture\n- **Prognosis**: Comminuted fractures higher nonunion risk",
        mnemonics: [
          { text: "Clavicle displacement: \"Anterior 90%, Posterior 10%\"", explanation: "Anterior from muscle pull (SCM); posterior from high-energy trauma" }
        ],
        keyPoints: [
          "Medial clavicle: Anterior displacement 90% (SCM pulls)",
          "Lateral clavicle: Higher nonunion risk (↓ blood supply)",
          "Proximal humerus: More complex fractures in younger patients",
          "Comminution ↑ nonunion risk significantly"
        ],
        textbookRefs: [
          { book: "Orthopaedic Surgery (Bulstrode)", chapter: "Ch 35", edition: "6th" },
          { book: "Campbell's Operative Orthopaedics", chapter: "Ch 54", edition: "14th" }
        ]
      },
      {
        layer: 3,
        slug: "clavicle-shoulder-fractures-clinical",
        title: "Clavicle & Shoulder Fractures - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical diagnosis and management of clavicle and shoulder fractures.",
        contentMd: "# Clavicle & Shoulder Fractures - Clinical\n\n## Clavicle Fracture Management\n\n### Clinical Presentation\n- **Pain**: Severe, worse with arm movement\n- **Deformity**: Visible \"tent\" appearance (displaced)\n- **Swelling**: Localized to fracture site\n- **Crepitus**: Bone fragment movement\n- **Brachial plexus check**: Usually intact\n\n### Conservative Management (80% of cases)\n- **Sling/bandage**: 2-3 weeks immobilization\n- **Ice**: First 48 hours for swelling\n- **NSAIDs**: Pain relief (ibuprofen 400 mg TDS)\n- **Gentle mobilization**: After acute pain subsides\n- **Union timeline**: 6-12 weeks (faster in younger patients)\n- **Success rate**: >90% for non-displaced/minimally displaced\n\n### Surgical Indications\n- **Significant displacement**: >20-25 mm shortening\n- **Skin tenting**: Danger of perforation\n- **Neurovascular compromise**: Emergency surgery\n- **Non-union**: After 12-16 weeks conservative treatment\n- **Lateral third fractures**: Consider earlier surgery (nonunion risk)\n\n### Surgical Options\n- **Open reduction internal fixation (ORIF)**: Plate fixation (superior clavicular plate preferred)\n- **Intramedullary nailing**: Less common\n- **Conservative observation**: Many displaced fractures unite anyway\n\n## Proximal Humerus Fracture Management\n\n### Classification (Neer's 4-Part)\n- **Anatomical neck**: Highest displacement, worst prognosis\n- **Surgical neck**: Most common\n- **Greater tuberosity**: Involves rotator cuff\n- **Lesser tuberosity**: Rare\n\n### Displacement Criteria\n- **<5 mm**: Non-displaced (conservative)\n- **>5 mm** or **>45° angulation**: Displaced (likely surgical)\n\n### Conservative Management\n- **Indications**: Non-displaced or minimally displaced\n- **Sling**: 2-4 weeks\n- **Pendulum exercises**: Start immediately\n- **Progressive mobilization**: After acute pain (2-3 weeks)\n- **Strengthening**: After 6-8 weeks\n- **Timeline**: 8-12 weeks for union\n\n### Surgical Management\n- **ORIF**: Plate fixation (deltopectoral approach)\n- **Hemiarthroplasty**: For comminuted/irreparable fractures\n- **Reverse shoulder arthroplasty**: In elderly with rotator cuff damage\n- **Timing**: Within 3-7 days (allows soft tissue healing)\n\n### Complications\n- **Avascular necrosis**: Due to disrupted blood supply (up to 15%)\n- **Non-union**: More common with displaced fractures\n- **Stiffness**: From immobilization (prevent with early mobilization)\n- **Rotator cuff dysfunction**: Especially greater tuberosity fractures\n\n## Shoulder Dislocation\n\n### Anterior Dislocation (95%)\n- **Mechanism**: Fall on abducted/externally rotated arm\n- **Presentation**: Arm held in internal rotation, squared-off shoulder\n- **Reduction**: Gentle traction + external rotation (ambulatory reduction)\n- **Immobilization**: Sling × 2-4 weeks\n- **Rehabilitation**: Early mobilization after acute phase\n\n### Associated Injuries\n- **Hill-Sachs lesion**: Compression fracture of posterior humeral head\n- **Bankart lesion**: Anteroinferior glenoid labral detachment\n- **Nerve injury**: Axillary nerve (check for sensory loss, motor function)\n- **Rotator cuff tear**: In elderly (up to 50%)\n\n### Management\n- **Closed reduction**: Gold standard (90% successful)\n- **Immobilization**: 2-4 weeks\n- **Recurrence risk**: 15-50% (younger = higher risk)\n- **Surgery**: For recurrent dislocation or young, active patients",
        mnemonics: [
          { text: "Clavicle displacement >20mm = consider surgery", explanation: "Significant displacement warrants operative fixation" }
        ],
        keyPoints: [
          "Clavicle: 80% unite with conservative treatment",
          "Proximal humerus: Displaced fractures need surgery in young, non-displaced in elderly",
          "Anterior shoulder dislocation: Reduce promptly (ambulatory technique)",
          "Avoid prolonged immobilization (prevent stiffness)"
        ],
        textbookRefs: [
          { book: "Campbell's Operative Orthopaedics", chapter: "Ch 54", edition: "14th" },
          { book: "Textbook of Orthopaedics (Maheshwari)", chapter: "Ch 14", edition: "7th" }
        ]
      },
      {
        layer: 4,
        slug: "clavicle-shoulder-fractures-exam",
        title: "Clavicle & Shoulder Fractures - Exam Prep",
        estimatedMinutes: 15,
        summary: "NEET PG high-yield facts and management algorithms.",
        contentMd: "# Clavicle & Shoulder Fractures - Exam Prep\n\n## Clavicle Fracture Classification\n\n| Neer's Group | Location | % Cases | Union Rate | Nonunion Risk |\n|--------------|----------|---------|-----------|---------------|\n| **Group 1** | Medial third | 5% | High | Rare |\n| **Group 2** | Middle third | 80% | Good | 5-10% |\n| **Group 3** | Lateral third | 15% | Variable | 10-25% |\n\n## High-Yield Facts\n- **Clavicle**: 80% heal with conservative treatment\n- **Surgical indications**: >20-25 mm displacement, skin tenting, neurovascular injury\n- **Proximal humerus**: Displaced = surgery in young; conservative in elderly\n- **Anterior shoulder dislocation**: 95% of all dislocations\n- **Axillary nerve injury**: Check sensation (lateral shoulder)\n\n## NEET PG Scenarios\n- **Young patient with displaced proximal humerus**: ORIF with plate fixation\n- **Elderly with non-displaced proximal humerus**: Conservative (early mobilization)\n- **Anterior shoulder dislocation**: Closed reduction under anesthesia\n- **Clavicle with >25 mm displacement**: Consider ORIF",
        mnemonics: [
          { text: "Clavicle rule: \"80-15-5 for location\"", explanation: "80% middle third (best prognosis), 15% lateral (nonunion risk), 5% medial (best outcome)" }
        ],
        keyPoints: [
          "Most clavicle fractures heal conservatively",
          "Lateral third: Higher nonunion risk (↓ blood supply)",
          "Proximal humerus: Age-dependent treatment (young = surgery)",
          "Anterior shoulder dislocation most common"
        ],
        textbookRefs: [
          { book: "NEET PG Orthopedics", edition: "2024" },
          { book: "Campbell's Operative Orthopaedics", chapter: "Ch 54", edition: "14th" }
        ]
      },
      {
        layer: 5,
        slug: "clavicle-shoulder-fractures-recall",
        title: "Clavicle & Shoulder Fractures - Active Recall",
        estimatedMinutes: 10,
        summary: "Q&A flashcards for shoulder fractures.",
        contentMd: "# Clavicle & Shoulder Fractures - Active Recall\n\n## Q&A Flashcards\n\n**Q1: Most common clavicle fracture location?**\nA: Middle third (80% of cases)\n\n**Q2: Displacement in clavicle fractures due to?**\nA: Sternocleidomastoid muscle pulls medial fragment superiorly\n\n**Q3: When to consider surgery for clavicle fracture?**\nA: Displacement >20-25 mm, skin tenting, neurovascular injury, lateral third\n\n**Q4: Neer's classification for proximal humerus fractures based on?**\nA: Number of fracture lines & displacement amount\n\n**Q5: Most common shoulder dislocation type?**\nA: Anterior (95% of cases)\n\n**Q6: Neurovascular nerve at risk in proximal humerus fracture?**\nA: Axillary nerve (check sensation over lateral shoulder)\n\n**Q7: Most serious proximal humerus fracture?**\nA: Anatomical neck fracture (high risk of avascular necrosis)\n\n**Q8: First step in anterior shoulder dislocation?**\nA: Closed reduction under anesthesia",
        mnemonics: [
          { text: "Remember: Middle clavicle 80%, not medial", explanation: "Easy to confuse; middle third is most common" }
        ],
        keyPoints: [
          "Clavicle middle third: Best prognosis with conservative treatment",
          "Lateral third: Higher nonunion risk",
          "Proximal humerus: Displaced = young patients need surgery",
          "Anterior shoulder dislocation: Standard closed reduction technique"
        ],
        textbookRefs: [
          { book: "Textbook of Orthopaedics (Maheshwari)", chapter: "Ch 14", edition: "7th" },
          { book: "NEET PG Orthopedics", edition: "2024" }
        ]
      }
    ]
  },
  {
    topicCode: "OR-MOD-06-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "peripheral-nerve-injuries-foundation",
        title: "Peripheral Nerve Injuries - Foundation",
        estimatedMinutes: 20,
        summary: "Introduction to peripheral nerve injury types and classification.",
        contentMd: "# Peripheral Nerve Injuries - Foundation\n\n## Nerve Injury Classification (Seddon)\n\n### Neuropraxia\n- **Definition**: Conduction block without axonal loss\n- **Mechanism**: Pressure/stretching of nerve\n- **Recovery**: 6-12 weeks (complete)\n- **Prognosis**: Excellent\n\n### Axonotmesis\n- **Definition**: Axonal disruption with intact connective tissue\n- **Mechanism**: Crushing injury, traction\n- **Recovery**: Slow (millimeters per day)\n- **Prognosis**: Good to fair\n\n### Neurotmesis\n- **Definition**: Complete nerve transection\n- **Mechanism**: Sharp laceration, avulsion\n- **Recovery**: Requires surgical repair\n- **Prognosis**: Fair to poor\n\n## Nerve Injury Classification (Sunderland)\n- **1st degree**: Neuropraxia\n- **2nd degree**: Axonotmesis (axon disrupted, endoneurium intact)\n- **3rd degree**: Axon and endoneurium disrupted\n- **4th degree**: Loss of fascicular continuity\n- **5th degree**: Complete transection (neurotmesis)\n\n## Epidemiology (India)\n- **Incidence**: 2.8 per 100,000 annually\n- **Common causes**: Road traffic accidents, crush injuries, birth injuries\n- **Age**: Majority in 15-40 years (active working population)\n- **Gender**: Male predominance (4:1)\n- **Upper limb**: 70% of nerve injuries\n- **Lower limb**: 30% of nerve injuries\n\n## Types of Nerve Injuries\n- **Compression**: Carpal tunnel, tarsal tunnel syndrome\n- **Traction**: Nerve stretching (brachial plexus injuries)\n- **Laceration**: Cut/sharp injury\n- **Crush**: Blunt force (compartment syndrome)\n- **Thermal**: Burn injuries\n- **Chemical**: Toxic exposure",
        mnemonics: [
          { text: "Seddon classification: \"NAA\" = Neuropraxia, Axonotmesis, Neurotmesis", explanation: "Increasing severity of nerve injury" }
        ],
        keyPoints: [
          "Neuropraxia: Pressure injury, complete recovery",
          "Axonotmesis: Crushing injury, slow recovery",
          "Neurotmesis: Transection, needs surgery",
          "Upper limb: 70% of nerve injuries"
        ],
        textbookRefs: [
          { book: "Textbook of Orthopaedics (Maheshwari)", chapter: "Ch 32", edition: "7th" },
          { book: "Campbell's Operative Orthopaedics", chapter: "Ch 66", edition: "14th" }
        ]
      },
      {
        layer: 2,
        slug: "peripheral-nerve-injuries-mechanism",
        title: "Peripheral Nerve Injuries - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathophysiology of nerve injury and recovery mechanisms.",
        contentMd: "# Peripheral Nerve Injuries - Mechanism\n\n## Anatomy of Nerve Fiber\n- **Axon**: Conductive unit\n- **Myelin sheath**: Insulating layer (schwann cells)\n- **Endoneurium**: Connective tissue around individual fibers\n- **Fascicle**: Bundle of fibers\n- **Perineurium**: Sheath around fascicles\n- **Epineurium**: Outermost connective tissue\n\n## Wallerian Degeneration\n1. **Immediate (0-3 days)**: Fragmentation distal to injury\n2. **Early (3-10 days)**: Myelin breakdown, axonal fragments degenerate\n3. **Mid (10-30 days)**: Macrophage infiltration\n4. **Late (weeks-months)**: Schwann cells proliferate\n5. **Regeneration**: Axonal sprouting begins\n\n## Axonal Regeneration\n- **Growth cone formation**: From proximal axon\n- **Growth rate**: 1-2 mm per day (variable)\n- **Distance traveled**: = (time from injury - latency period) × growth rate\n- **Schwann cells**: Guide regenerating axons\n- **Denervation atrophy**: Muscle fibers degenerate if no reinnervation\n\n## Factors Affecting Recovery\n\n### Favorable\n- **Young age**: Faster regeneration\n- **Proximal injuries**: Closer to target muscles\n- **Clean wounds**: Less scar tissue\n- **Early repair**: Within 3 weeks ideal\n- **Sensory vs motor**: Motor has worse prognosis (>1 year risk permanent loss)\n\n### Unfavorable\n- **Old age**: Slower regeneration\n- **Distal injuries**: Longer distance to target\n- **Contaminated wounds**: More scar tissue\n- **Delay in repair**: >6 months = poor prognosis\n- **Severe comminution**: Multiple injured segments\n- **Stretch/avulsion**: Diffuse axonal injury\n\n## Electrophysiology of Nerve Injury\n- **Neuropraxia**: Normal NCS/EMG (conduction block only)\n- **Axonotmesis**: Slowed conduction, reduced amplitude, positive sharp waves (EMG)\n- **Neurotmesis**: Complete loss of signals, fibrillations, fasciculations (EMG)\n\n## Pain After Nerve Injury\n- **Causalgia (complex regional pain syndrome type II)**: After nerve injury\n- **Mechanism**: Sympathetic dysfunction, central sensitization\n- **Risk factors**: Severity of injury, delay in treatment\n- **Management**: Early mobilization, physical therapy, pain management",
        mnemonics: [
          { text: "Wallerian degeneration timeline: \"0-3, 3-10, 10-30 days\"", explanation: "Fragmentation, myelin breakdown, macrophage infiltration" }
        ],
        keyPoints: [
          "Growth rate 1-2 mm/day for regenerating axons",
          "Motor nerves: Worse prognosis (denervation atrophy)",
          "Young age: Faster regeneration",
          "Delay in repair: >6 months = poor prognosis"
        ],
        textbookRefs: [
          { book: "Textbook of Orthopaedics (Maheshwari)", chapter: "Ch 32", edition: "7th" },
          { book: "Peripheral Nerve Surgery (Brushart)", chapter: "Ch 2", edition: "3rd" }
        ]
      },
      {
        layer: 3,
        slug: "peripheral-nerve-injuries-clinical",
        title: "Peripheral Nerve Injuries - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical diagnosis and management of peripheral nerve injuries.",
        contentMd: "# Peripheral Nerve Injuries - Clinical\n\n## Clinical Assessment\n\n### History\n- **Mechanism**: Laceration, crush, traction, compression\n- **Time from injury**: Acute vs chronic\n- **Associated injuries**: Fractures, vascular injury\n\n### Motor Examination\n- **Muscle strength**: Grading 0-5 (Medical Research Council scale)\n- **Atrophy**: Present in chronic denervation (>3 weeks)\n- **Fasciculations**: Seen in acute denervation\n\n### Sensory Examination\n- **Light touch**: Earliest to recover\n- **Pain/temperature**: Usually last to recover\n- **Dermatome mapping**: Identifies affected nerve\n\n## Diagnostic Tests\n\n### Electrodiagnostics\n- **Nerve conduction studies (NCS)**:\n  - **Latency**: Time to muscle response\n  - **Amplitude**: Size of response\n  - **Conduction velocity**: Speed of impulse\n- **Electromyography (EMG)**:\n  - **Denervation**: Fibrillations, positive sharp waves\n  - **Recruitment**: Number of motor units firing\n  - **Timing**: When to assess (2-3 weeks for EMG changes)\n\n### Imaging\n- **Ultrasound**: Real-time assessment, cost-effective\n- **MRI**: High soft tissue contrast, shows neural structure\n- **CT**: For bone-related compression\n\n## Management\n\n### Conservative Management (Neuropraxia)\n- **Observation**: Expected complete recovery\n- **Supportive care**: Sling, physiotherapy\n- **Timeline**: 6-12 weeks recovery\n- **No surgical intervention needed**\n\n### Surgical Management (Axonotmesis/Neurotmesis)\n\n#### Timing\n- **Immediate (Clean laceration)**: Within 24-72 hours\n- **Delayed (Contaminated)**: After infection risk passes (3-5 days)\n- **Chronic (Old injury)**: If <3 years, still consider repair\n\n#### Techniques\n- **Neurorrhaphy**: End-to-end anastomosis (preferred)\n- **Nerve grafting**: For gaps >3 mm\n  - **Autograft**: Gold standard (sural nerve commonly used)\n  - **Allograft**: When autograft unavailable\n  - **Conduits**: Synthetic tubes (emerging)\n\n#### Surgical Approach\n- **Primary repair**: <24 hours for clean wounds\n- **Secondary repair**: 3-5 days for contaminated wounds\n- **Timing**: <3 weeks ideal; >6 months = poor prognosis\n\n### Rehabilitation\n\n#### Phase 1: Acute (0-2 weeks)\n- **Wound care**: Sterile dressing\n- **Immobilization**: Prevent further trauma\n- **Edema control**: Ice, elevation\n\n#### Phase 2: Early (2-6 weeks)\n- **Protected motion**: Prevent stiffness\n- **Scar management**: Gentle mobilization\n- **Pain control**: Analgesics, avoid causalgia\n\n#### Phase 3: Late (6+ weeks)\n- **Progressive strengthening**: Isometric → isotonic\n- **Proprioceptive training**: Regain sensory acuity\n- **Functional training**: Work/ADL simulation\n\n## Management of Common Nerve Injuries\n\n### Radial Nerve (Wrist drop)\n- **Cause**: Fracture of humerus, compression\n- **Presentation**: Wrist drop, sensory loss dorsal 1st web space\n- **Management**: Conservative if incomplete; repair if complete laceration\n\n### Median Nerve (Carpal tunnel)\n- **Cause**: Compression at wrist\n- **Presentation**: Thenar atrophy, loss of thumb opposition\n- **Management**: Steroid injection, night splint, carpal tunnel release surgery\n\n### Ulnar Nerve (Claw hand)\n- **Cause**: Compression at elbow or wrist\n- **Presentation**: Intrinsic hand muscle weakness, claw deformity\n- **Management**: Ulnar tunnel release, medial epicondylectomy\n\n### Brachial Plexus (Erb's vs Klumpke's)\n- **Erb's (C5-C6)**: Waiter's tip position\n- **Klumpke's (C8-T1)**: Claw hand\n- **Management**: Surgical exploration if significant injury, EMG at 3-4 weeks\n\n### Sciatic Nerve\n- **Cause**: Hip dislocation, gluteal injections\n- **Presentation**: Foot drop, sensory loss lateral leg/foot\n- **Management**: Depends on severity (conservative vs surgical)\n\n## Prognosis Prediction\n- **Age <30 years**: Better prognosis\n- **Proximal injuries**: Better prognosis\n- **Sensory injuries**: Better prognosis than motor\n- **Time <3 months**: Better prognosis\n- **Clean wounds**: Better prognosis",
        mnemonics: [
          { text: "Recovery timeline: \"6-12 weeks NP, 3-12 months ANT, 6-24 months NT\"", explanation: "Neuropraxia best, Axonotmesis intermediate, Neurotmesis worst" }
        ],
        keyPoints: [
          "Neuropraxia: Conservative treatment, complete recovery expected",
          "Axonotmesis/Neurotmesis: Surgical repair indicated",
          "Growth rate 1-2 mm/day after repair",
          "Age <30: Better recovery prognosis"
        ],
        textbookRefs: [
          { book: "Campbell's Operative Orthopaedics", chapter: "Ch 66", edition: "14th" },
          { book: "Peripheral Nerve Surgery (Brushart)", chapter: "Ch 25-30", edition: "3rd" }
        ]
      },
      {
        layer: 4,
        slug: "peripheral-nerve-injuries-exam",
        title: "Peripheral Nerve Injuries - Exam Prep",
        estimatedMinutes: 15,
        summary: "NEET PG high-yield facts and clinical scenarios.",
        contentMd: "# Peripheral Nerve Injuries - Exam Prep\n\n## Seddon vs Sunderland Classification\n\n| Seddon | Sunderland | Injury | Recovery | Treatment |\n|--------|-----------|--------|----------|----------|\n| **Neuropraxia** | 1st degree | Conduction block | Complete (6-12 wk) | Conservative |\n| **Axonotmesis** | 2nd-3rd degree | Axonal disruption | Slow (weeks-months) | May need surgery |\n| **Neurotmesis** | 4th-5th degree | Complete transection | Poor | Surgical repair |\n\n## Nerve Injury Sequelae\n- **Denervation atrophy**: Starts after 3 weeks\n- **Contractures**: From immobilization\n- **Causalgia**: Burning pain (CRPS type II)\n- **Loss of sensory protective**: Risk of ulceration\n\n## Management Algorithm\n- **Neuropraxia**: Observation, conservative treatment\n- **Clean laceration**: Immediate primary repair\n- **Contaminated wound**: Delayed repair (3-5 days)\n- **Crush/traction**: EMG at 3-4 weeks to assess\n- **Repair timing**: Ideal <3 weeks; acceptable <3 months; poor >6 months\n\n## High-Yield Surgical Points\n- **Autograft**: Gold standard (sural nerve)\n- **Timing**: <3 weeks for clean wounds\n- **Growth rate**: 1-2 mm/day\n- **Distance**: Calculate as (time - latency) × growth rate",
        mnemonics: [
          { text: "Nerve repair timing: \"Clean 24h, Dirty 3-5d\"", explanation: "Primary vs delayed based on wound contamination" }
        ],
        keyPoints: [
          "Neuropraxia: Complete recovery, no surgery needed",
          "Neurotmesis: Complete transection, needs surgical repair",
          "EMG changes appear at 2-3 weeks",
          "Sural nerve most common autograft source"
        ],
        textbookRefs: [
          { book: "NEET PG Orthopedics", edition: "2024" },
          { book: "Campbell's Operative Orthopaedics", chapter: "Ch 66", edition: "14th" }
        ]
      },
      {
        layer: 5,
        slug: "peripheral-nerve-injuries-recall",
        title: "Peripheral Nerve Injuries - Active Recall",
        estimatedMinutes: 10,
        summary: "Q&A flashcards for peripheral nerve injuries.",
        contentMd: "# Peripheral Nerve Injuries - Active Recall\n\n## Q&A Flashcards\n\n**Q1: What is neuropraxia?**\nA: Conduction block without axonal loss; complete recovery in 6-12 weeks\n\n**Q2: Difference between axonotmesis and neurotmesis?**\nA: Axonotmesis = axonal disruption, connective tissue intact (slow recovery); Neurotmesis = complete transection (needs surgery)\n\n**Q3: Wallerian degeneration timeline?**\nA: 0-3 days fragmentation; 3-10 days myelin breakdown; 10-30 days macrophage infiltration\n\n**Q4: Nerve fiber regeneration rate?**\nA: 1-2 mm per day\n\n**Q5: Best autograft source for nerve repair?**\nA: Sural nerve\n\n**Q6: When to perform nerve repair?**\nA: Ideal <3 weeks; acceptable <3 months; poor prognosis >6 months\n\n**Q7: EMG findings in denervation?**\nA: Fibrillations, positive sharp waves, reduced recruitment\n\n**Q8: Factors affecting nerve recovery?**\nA: Young age, proximal injury, clean wound, early repair, sensory vs motor (motor worse)",
        mnemonics: [
          { text: "Recovery prognosis: \"Young, Proximal, Sensory, Soon = Good\"", explanation: "Age, location, type, timing affect prognosis" }
        ],
        keyPoints: [
          "Neuropraxia: Best prognosis (complete recovery)",
          "Neurotmesis: Needs surgical repair immediately",
          "Growth rate determines functional timeline",
          "Autograft gold standard for nerve gaps >3 mm"
        ],
        textbookRefs: [
          { book: "Textbook of Orthopaedics (Maheshwari)", chapter: "Ch 32", edition: "7th" },
          { book: "NEET PG Orthopedics", edition: "2024" }
        ]
      }
    ]
  },
  {
    topicCode: "PH-MOD-05-TOP-05",
    layers: [
      {
        layer: 1,
        slug: "antifungal-antiviral-foundation",
        title: "Antifungal & Antiviral Drugs - Foundation",
        estimatedMinutes: 20,
        summary: "Introduction to antifungal and antiviral drug classification.",
        contentMd: "# Antifungal & Antiviral Drugs - Foundation\n\n## Antifungal Drugs Classification\n\n### Polyenes\n- **Amphotericin B**: Gold standard for systemic fungal infections\n- **Nystatin**: Topical only\n\n### Azoles\n- **Imidazoles**: Miconazole (topical), ketoconazole (topical)\n- **Triazoles**: Fluconazole, itraconazole (systemic)\n\n### Echinocandins\n- **Caspofungin**: IV for invasive aspergillosis\n- **Anidulafungin**: Alternative to caspofungin\n\n### Others\n- **Terbinafine**: For dermatophyte infections\n- **Griseofulvin**: Ringworm (older)\n- **Flucytosine**: Cryptococcal meningitis\n\n## Antiviral Drugs Classification\n\n### Nucleoside Reverse Transcriptase Inhibitors (NRTIs)\n- **Tenofovir**: For HIV, HBV\n- **Lamivudine**: For HIV, HBV\n- **Zidovudine**: Older HIV drug\n\n### Non-Nucleoside RTIs (NNRTIs)\n- **Efavirenz**: For HIV\n- **Rilpivirine**: Newer NNRTI\n\n### Protease Inhibitors\n- **Ritonavir**: Booster\n- **Lopinavir**: With ritonavir\n\n### Integrase Inhibitors\n- **Dolutegravir**: First-line HIV\n- **Bictegravir**: Newer integrase inhibitor\n\n### Neuraminidase Inhibitors\n- **Oseltamivir**: Influenza\n- **Zanamivir**: Inhaled influenza drug\n\n## Mechanism of Action Overview\n- **Antifungals**: Target ergosterol (polyenes), inhibit sterol synthesis (azoles), inhibit cell wall\n- **Antivirals**: Inhibit viral replication (RT, protease), prevent viral attachment/entry",
        mnemonics: [
          { text: "Antifungal mechanism: \"EPS\"", explanation: "Ergosterol disruption (polyenes), Protein synthesis (echinocandins), Sterol synthesis inhibition (azoles)" }
        ],
        keyPoints: [
          "Amphotericin B: Gold standard systemic antifungal",
          "Fluconazole: Most commonly used azole",
          "Dolutegravir: First-line integrase inhibitor",
          "Echinocandins: For invasive fungal infections"
        ],
        textbookRefs: [
          { book: "KDT Pharmacology", chapter: "Ch 39-40", edition: "10th" },
          { book: "Goodman & Gilman's Pharmacology", chapter: "Ch 54-56", edition: "14th" }
        ]
      },
      {
        layer: 2,
        slug: "antifungal-antiviral-mechanism",
        title: "Antifungal & Antiviral Drugs - Mechanism",
        estimatedMinutes: 30,
        summary: "Molecular mechanisms and resistance patterns.",
        contentMd: "# Antifungal & Antiviral Drugs - Mechanism\n\n## Amphotericin B\n- **Mechanism**: Binds ergosterol → pore formation → leakage\n- **Selective toxicity**: Fungal ergosterol vs animal cholesterol (imperfect)\n- **Resistance**: Rare (ergosterol mutations)\n- **Adverse effects**: Nephrotoxicity, electrolyte loss\n\n## Azoles (Fluconazole, Itraconazole)\n- **Mechanism**: Inhibit lanosterol 14α-demethylase → ↓ ergosterol synthesis\n- **Selectivity**: Better than polyenes\n- **Resistance**: Altered enzyme (point mutations), efflux pumps\n- **Spectrum**: Candida, Cryptococcus, dermatophytes\n\n## Echinocandins (Caspofungin)\n- **Mechanism**: Inhibit β-1,3-glucan synthase → cell wall disruption\n- **Resistance**: Rare (FKS1 mutations)\n- **Spectrum**: Candida, Aspergillus\n- **Advantage**: Minimal drug interactions\n\n## HIV Reverse Transcriptase Inhibitors\n- **NRTIs (Tenofovir, Lamivudine)**: Chain terminators (compete with natural nucleotides)\n- **NNRTIs (Efavirenz)**: Allosteric inhibition of RT\n- **Resistance mechanism**: Mutations in RT gene (multiple resistance possible)\n\n## Protease Inhibitors (Ritonavir)\n- **Mechanism**: Block HIV protease → immature virions\n- **Metabolism**: CYP3A4 substrate (many drug interactions)\n- **Resistance**: Mutation in protease gene\n\n## Integrase Inhibitors (Dolutegravir)\n- **Mechanism**: Block integrase → prevent viral DNA integration\n- **Resistance**: Less common than RT/PI inhibitors\n- **Advantage**: Minimal interactions, good tolerability\n\n## Neuraminidase Inhibitors (Oseltamivir)\n- **Mechanism**: Block neuraminidase → prevent viral release\n- **Resistance**: Mutations in neuraminidase gene\n- **Use**: Influenza prevention/treatment (within 48h onset)",
        mnemonics: [
          { text: "Antiviral targets: \"REI\"", explanation: "Reverse Transcriptase, Envelope (entry), Integrase" }
        ],
        keyPoints: [
          "Amphotericin B: Ergosterol binding (high toxicity)",
          "Azoles: Sterol synthesis inhibition (lower toxicity)",
          "Echinocandins: Cell wall disruption (no resistance)",
          "Dolutegravir: Integrase inhibition (best tolerability)"
        ],
        textbookRefs: [
          { book: "Goodman & Gilman's Pharmacology", chapter: "Ch 54-56", edition: "14th" },
          { book: "Viral Hepatitis & Retroviral Therapy", chapter: "Antiretroviral drugs", edition: "2023" }
        ]
      },
      {
        layer: 3,
        slug: "antifungal-antiviral-clinical",
        title: "Antifungal & Antiviral Drugs - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical use and management of fungal and viral infections.",
        contentMd: "# Antifungal & Antiviral Drugs - Clinical\n\n## Candidiasis Treatment\n- **Oral thrush**: Nystatin suspension OR fluconazole 50 mg daily × 7 days\n- **Vaginal**: Clotrimazole cream or fluconazole 150 mg single dose\n- **Systemic**: Fluconazole 400 mg daily\n- **CD4 <200 prophylaxis**: Fluconazole 100 mg daily (India NACO guidelines)\n\n## Cryptococcal Meningitis (CD4 <50)\n- **Induction**: Amphotericin B 0.7-1 mg/kg IV daily\n- **Adjunctive**: Flucytosine 25 mg/kg QID\n- **Consolidation**: Fluconazole 400 mg daily × 8 weeks\n- **Maintenance**: Fluconazole 100 mg daily (indefinitely until CD4 >100)\n\n## Aspergillosis Treatment\n- **Invasive**: Caspofungin 70 mg loading then 50 mg daily\n- **Chronic pulmonary**: Itraconazole 200 mg BID\n- **Allergic**: Corticosteroids + itraconazole\n\n## HIV Management (NACO 2023)\n- **First-line**: TLD (Tenofovir + Lamivudine + Dolutegravir)\n- **Monitoring**: Viral load at 4-12 weeks (target <50 copies)\n- **Adherence**: Critical for preventing resistance\n\n## Influenza Treatment\n- **Oseltamivir**: 75 mg BID × 5 days (within 48h of onset)\n- **Prophylaxis**: 75 mg OD × 10 days (post-exposure)\n- **Seasonal vaccine**: More effective than antiviral\n\n## Drug Interactions\n- **Azoles + Statins**: ↑ Statin levels (muscle toxicity)\n- **Protease inhibitors**: Multiple interactions (check carefully)\n- **Dolutegravir**: Minimal interactions (preferred in PLHIV)\n\n## Adverse Effects\n- **Amphotericin B**: Nephrotoxicity, fever, rigors\n- **Azoles**: GI distress, hepatotoxicity (rare)\n- **NRTIs**: Lactic acidosis (rare)\n- **Efavirenz**: CNS effects (dizziness, nightmares)\n- **Oseltamivir**: GI distress, neuropsychiatric (rare)",
        mnemonics: [
          { text: "Amphotericin B infusion: \"Follow D5W rule\"", explanation: "Infuse in D5W (not NS) to reduce nephrotoxicity" }
        ],
        keyPoints: [
          "Fluconazole: First-line for Candida, easy oral dosing",
          "Amphotericin B: Still gold standard for cryptococcal meningitis",
          "Dolutegravir: Preferred integrase inhibitor (minimal interactions)",
          "Oseltamivir: Must start <48h for efficacy"
        ],
        textbookRefs: [
          { book: "NACO Treatment Guidelines", edition: "2023" },
          { book: "Goodman & Gilman's Pharmacology", chapter: "Ch 54-56", edition: "14th" }
        ]
      },
      {
        layer: 4,
        slug: "antifungal-antiviral-exam",
        title: "Antifungal & Antiviral Drugs - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield NEET PG facts and drug comparisons.",
        contentMd: "# Antifungal & Antiviral Drugs - Exam Prep\n\n## Antifungal Comparison\n\n| Drug | Mechanism | Spectrum | Route | Toxicity |\n|------|-----------|----------|-------|----------|\n| **Amphotericin B** | Ergosterol pore | Broad | IV | Nephrotoxicity |\n| **Fluconazole** | Sterol synthesis | Candida, Crypto | PO/IV | Minimal |\n| **Caspofungin** | Cell wall | Candida, Aspergillus | IV | Minimal |\n| **Terbinafine** | Sterol synthesis | Dermatophytes | PO | Hepatotoxicity |\n\n## Antiviral Comparison\n\n| Class | Example | Target | Resistance |\n|-------|---------|--------|----------|\n| **NRTI** | Tenofovir | RT | Common |\n| **NNRTI** | Efavirenz | RT | Common |\n| **PI** | Ritonavir | Protease | Common |\n| **InSTI** | Dolutegravir | Integrase | Rare |\n\n## High-Yield Facts\n- **Amphotericin B**: Most active against fungi but most toxic\n- **Fluconazole**: Oral absorption good, first-line for Candida\n- **Echinocandins**: No resistance reported\n- **Dolutegravir**: First-line integrase inhibitor (minimal interactions)\n- **Oseltamivir**: Must give <48h post-symptom onset",
        mnemonics: [
          { text: "Antifungal selection: \"Ampho Serious, Azole Common, Echinocandin Invasive\"", explanation: "Choose based on severity and infection type" }
        ],
        keyPoints: [
          "Amphotericin B: Best for serious, invasive infections",
          "Fluconazole: First choice for Candida/Cryptococcus",
          "Caspofungin: For invasive Candida/Aspergillus",
          "Dolutegravir: Best tolerated integrase inhibitor"
        ],
        textbookRefs: [
          { book: "NEET PG Pharmacology", edition: "2024" },
          { book: "NACO Guidelines", edition: "2023" }
        ]
      },
      {
        layer: 5,
        slug: "antifungal-antiviral-recall",
        title: "Antifungal & Antiviral Drugs - Active Recall",
        estimatedMinutes: 10,
        summary: "Q&A flashcards for antifungal and antiviral drugs.",
        contentMd: "# Antifungal & Antiviral Drugs - Active Recall\n\n## Q&A Flashcards\n\n**Q1: Gold standard for systemic fungal infections?**\nA: Amphotericin B (broadest spectrum)\n\n**Q2: First-line treatment for Candida albicans?**\nA: Fluconazole 50-100 mg daily\n\n**Q3: Mechanism of echinocandins?**\nA: Inhibit β-1,3-glucan synthase (cell wall disruption)\n\n**Q4: Most common drug used for HIV in India?**\nA: TLD (Tenofovir + Lamivudine + Dolutegravir)\n\n**Q5: Which integrase inhibitor has minimal interactions?**\nA: Dolutegravir\n\n**Q6: Antiviral for influenza treatment?**\nA: Oseltamivir 75 mg BID × 5 days (within 48h)\n\n**Q7: Why is amphotericin B toxic?**\nA: Binds ergosterol in fungal membranes but also disrupts mammalian cells\n\n**Q8: CD4 count for Candida prophylaxis?**\nA: <200 cells/μL (fluconazole 100 mg daily)",
        mnemonics: [
          { text: "Remember: Dolutegravir = Doll (best behaved)", explanation: "Dolutegravir has fewest drug interactions" }
        ],
        keyPoints: [
          "Amphotericin B still gold standard for serious infections",
          "Fluconazole: Easiest to give (oral), minimal toxicity",
          "Dolutegravir: Preferred integrase inhibitor",
          "Resistance to integrase inhibitors: Rare vs common with RT/PI"
        ],
        textbookRefs: [
          { book: "KDT Pharmacology", chapter: "Ch 39-40", edition: "10th" },
          { book: "NEET PG Pharmacology", edition: "2024" }
        ]
      }
    ]
  },
  {
    topicCode: "PH-MOD-07-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "insulin-oral-hypoglycemics-foundation",
        title: "Insulin & Oral Hypoglycemics - Foundation",
        estimatedMinutes: 20,
        summary: "Classification and mechanism of diabetes drugs.",
        contentMd: "# Insulin & Oral Hypoglycemics - Foundation\n\n## Insulin Overview\n\n### Types of Insulin\n1. **Rapid-acting**: Aspart, lispro, glulisine (onset 5-15 min, peak 1-2 h)\n2. **Short-acting**: Regular/crystalline (onset 30-60 min, peak 2-4 h)\n3. **Intermediate**: NPH (onset 2-4 h, peak 6-8 h)\n4. **Long-acting**: Glargine, detemir (onset 1-2 h, peak minimal)\n5. **Basal-bolus**: Combination for better glucose control\n\n## Oral Hypoglycemic Agents\n\n### Sulfonylureas\n- **Mechanism**: Insulin secretagogues (stimulate insulin release)\n- **Examples**: Gliclazide, glipizide, tolbutamide\n- **Efficacy**: ~1-2% HbA1c reduction\n\n### Biguanides\n- **Mechanism**: Decrease hepatic glucose production\n- **Example**: Metformin\n- **Efficacy**: ~1-2% HbA1c reduction\n- **Use**: First-line (India, WHO)\n\n### DPP-4 Inhibitors\n- **Mechanism**: Increase GLP-1 levels\n- **Examples**: Sitagliptin, vildagliptin\n- **Efficacy**: ~1% HbA1c reduction\n\n### GLP-1 Agonists\n- **Mechanism**: Mimic GLP-1 hormone\n- **Examples**: Exenatide, liraglutide\n- **Bonus**: Weight loss (-2-5 kg)\n\n### SGLT2 Inhibitors\n- **Mechanism**: Prevent renal glucose reabsorption\n- **Examples**: Canagliflozin, dapagliflozin\n- **Bonus**: Cardiac & renal protection\n\n### Thiazolidinediones\n- **Mechanism**: Increase insulin sensitivity (PPAR-gamma agonists)\n- **Examples**: Pioglitazone\n- **Issue**: Weight gain, fluid retention\n\n## Epidemiology (India)\n- **Type 2 diabetes**: 77 million people\n- **Incidence**: Rising 2-3% annually\n- **Urban prevalence**: 10-15%\n- **Rural prevalence**: 5-7%\n- **Metformin**: Most commonly used (cost-effective)",
        mnemonics: [
          { text: "Insulin types: \"RSILB\"", explanation: "Rapid, Short, Intermediate, Long, Basal-bolus" }
        ],
        keyPoints: [
          "Metformin: First-line oral hypoglycemic in India",
          "Sulfonylureas: Risk of hypoglycemia, weight gain",
          "GLP-1 agonists: Weight loss (cardiovascular benefit)",
          "SGLT2i: Cardiac & renal protection"
        ],
        textbookRefs: [
          { book: "KDT Pharmacology", chapter: "Ch 35", edition: "10th" },
          { book: "IDA Clinical Practice Recommendations", edition: "2022" }
        ]
      },
      {
        layer: 2,
        slug: "insulin-oral-hypoglycemics-mechanism",
        title: "Insulin & Oral Hypoglycemics - Mechanism",
        estimatedMinutes: 30,
        summary: "Mechanisms of action and glucose homeostasis.",
        contentMd: "# Insulin & Oral Hypoglycemics - Mechanism\n\n## Insulin Mechanism\n- **Binds insulin receptor** → tyrosine kinase activation\n- **Glucose uptake**: GLUT4 translocation in muscle/adipose\n- **Hepatic effects**: ↑ glycogen synthesis, ↓ gluconeogenesis\n- **Lipid effects**: ↑ lipid synthesis, ↓ lipolysis\n- **Protein**: ↑ synthesis, ↓ breakdown\n\n## Metformin\n- **Mechanism**: ↓ hepatic glucose production (gluconeogenesis inhibition)\n- **AMPK activation**: Energy sensor activation\n- **Insulin sensitivity**: Improves (especially muscle)\n- **No hypoglycemia**: Does not stimulate insulin release\n- **Lactic acidosis**: Rare but serious in renal impairment\n\n## Sulfonylureas\n- **ATP-sensitive K+ channel blockade**: Depolarization of beta cells\n- **Insulin secretion**: ↑ (both fasting and postprandial)\n- **Hypoglycemia risk**: HIGH (exogenous insulin independent)\n- **Weight gain**: Common\n- **Secondary failure**: 30% over 10 years\n\n## DPP-4 Inhibitors\n- **GLP-1 degradation**: Inhibit dipeptidyl peptidase-4\n- **GLP-1 accumulation**: Increases glucose-dependent insulin secretion\n- **Beta cell preservation**: May slow decline\n- **No hypoglycemia**: When used monotherapy\n\n## GLP-1 Agonists\n- **GLP-1 receptor activation**: Direct mimicry\n- **Insulin secretion**: ↑ (glucose-dependent)\n- **Gastric emptying**: ↓ (satiety, weight loss)\n- **Cardiovascular**: Reduces CV events, heart failure\n\n## SGLT2 Inhibitors\n- **SGLT2 blockade**: Prevent glucose reabsorption in proximal tubule\n- **Glycosuria**: Increases (therapeutic goal)\n- **Volume reduction**: ↓ preload → benefit in heart failure\n- **Renal protection**: ↓ albuminuria, delays CKD progression\n\n## Thiazolidinediones\n- **PPAR-γ activation**: Nuclear receptor transcription factor\n- **Adiponectin**: ↑ (insulin sensitizer)\n- **Insulin sensitivity**: ↑ dramatically (especially muscle)\n- **Hepatic glucose**: ↓ production\n- **Weight gain**: Major adverse effect",
        mnemonics: [
          { text: "Glucose-lowering mechanism ladder: \"Metformin → Secretagogues → Sensitizers\"", explanation: "MG decreases production, S increases secretion, Sens increases sensitivity" }
        ],
        keyPoints: [
          "Metformin: Hepatic glucose ↓ (no hypoglycemia)",
          "Sulfonylureas: Insulin ↑ (hypoglycemia risk)",
          "SGLT2i: Cardiac & renal protection beyond glucose control",
          "GLP-1a: Weight loss + CV benefit"
        ],
        textbookRefs: [
          { book: "Goodman & Gilman's Pharmacology", chapter: "Ch 47", edition: "14th" },
          { book: "IDA Diabetes Guidelines", edition: "2022" }
        ]
      },
      {
        layer: 3,
        slug: "insulin-oral-hypoglycemics-clinical",
        title: "Insulin & Oral Hypoglycemics - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical use and Indian diabetes management guidelines.",
        contentMd: "# Insulin & Oral Hypoglycemics - Clinical\n\n## Type 2 Diabetes Treatment (IDA Algorithm)\n\n### Step 1: Metformin\n- **Dose**: 500 mg OD, titrate to 1500-2000 mg daily BID\n- **Benefits**: Weight neutral, no hypoglycemia, CV benefit\n- **Contraindication**: eGFR <30 mL/min (renal impairment)\n- **SE**: GI upset (take with food)\n\n### Step 2: Add Second Agent (if HbA1c >7%)\n- **Options**: Sulfonylurea, DPP-4i, SGLT2i, GLP-1a\n- **Choice depends**: CV risk, renal function, weight, cost\n\n### Step 3: Triple Therapy\n- **Metformin + DPP-4i + SGLT2i**: Synergistic\n- **Metformin + GLP-1a**: CV protection\n- **Avoid**: Metformin + Sulfonylurea (hypoglycemia)\n\n### Step 4: Insulin\n- **Indications**: HbA1c >10%, symptomatic hyperglycemia\n- **Regimen**: Basal-bolus (insulin glargine + rapid-acting)\n- **Dosing**: 0.5 units/kg starting dose\n\n## Insulin Prescription (India)\n- **Regular insulin**: 4-10 units subcutaneous BID/TDS\n- **NPH insulin**: 10-20 units OD/BD\n- **Rapid-acting**: 5-10 units pre-meals\n- **Basal**: Glargine 10-15 units OD at bedtime\n\n## Special Populations\n\n### Pregnancy\n- **Insulin only**: Gold standard\n- **Avoid**: Oral agents (risk of teratogenicity)\n- **Tight control**: Target 90-130 mg/dL fasting\n\n### Renal Impairment\n- **eGFR >45**: Metformin safe\n- **eGFR 30-45**: Use caution, monitor\n- **eGFR <30**: Avoid metformin, SGLT2i\n- **GLP-1a, DPP-4i**: Safe even with renal disease\n\n### Cardiovascular Disease\n- **SGLT2i**: Preferred (heart failure benefit)\n- **GLP-1a**: Good (MI/stroke reduction)\n- **Avoid**: Thiazolidinediones (fluid retention)\n\n## Insulin Administration\n- **Sites**: Abdomen, thigh, upper arm, buttocks\n- **Timing**: Regular 30 min before meals; Rapid 15 min\n- **Self-monitoring**: Fasting, postprandial, HbA1c every 3 months\n- **Hypoglycemia management**: Fast-acting carbs (glucose tablets, juice)\n\n## Adverse Effects & Management\n\n### Hypoglycemia\n- **Risk factors**: Sulfonylureas, insulin, renal/hepatic disease\n- **Symptoms**: Tremor, sweating, palpitations, confusion\n- **Treatment**: Glucose 15 g, recheck after 15 min\n- **Prevention**: Frequent monitoring, dose adjustment\n\n### Weight Gain\n- **Insulin**: Common (3-5 kg over 1 year)\n- **Sulfonylureas**: Expected\n- **Metformin, GLP-1a, SGLT2i**: Weight neutral/loss\n\n### Lactic Acidosis (Metformin)\n- **Risk**: eGFR <30, contrast dye, sepsis, heart failure\n- **Prevention**: Check renal function before starting\n- **Incidence**: Rare (0.03 per 1000 patient-years)\n\n### Genital Infections (SGLT2i)\n- **Mechanism**: Glycosuria promotes fungal growth\n- **Management**: Hygiene, treat infection if occurs",
        mnemonics: [
          { text: "Type 2 DM progression: \"M-S-T-I\"", explanation: "Metformin → Second agent → Triple therapy → Insulin" }
        ],
        keyPoints: [
          "Metformin: First-line, safe, cost-effective",
          "SGLT2i: CV & renal protection (especially with UACR/CKD)",
          "GLP-1a: Weight loss + CV benefit",
          "Insulin: Reserve for advanced disease or pregnancy"
        ],
        textbookRefs: [
          { book: "IDA Clinical Practice Recommendations", edition: "2022" },
          { book: "KDT Pharmacology", chapter: "Ch 35", edition: "10th" }
        ]
      },
      {
        layer: 4,
        slug: "insulin-oral-hypoglycemics-exam",
        title: "Insulin & Oral Hypoglycemics - Exam Prep",
        estimatedMinutes: 15,
        summary: "NEET PG high-yield drug comparisons and scenarios.",
        contentMd: "# Insulin & Oral Hypoglycemics - Exam Prep\n\n## Antidiabetic Drug Comparison\n\n| Drug Class | HbA1c ↓ | Hypoglycemia | Weight | CV Benefit | Cost |\n|-----------|--------|-------------|--------|-----------|------|\n| **Metformin** | 1-2% | No | Neutral | Yes | Low |\n| **Sulfonylurea** | 1-2% | YES | ↑ | No | Low |\n| **DPP-4i** | 1% | No | Neutral | No | Medium |\n| **GLP-1a** | 1-1.5% | No | ↓ (2-5kg) | Yes | High |\n| **SGLT2i** | 1% | No | ↓ | Yes | High |\n| **TZD** | 1-2% | No | ↑ | No | Medium |\n\n## Insulin Types Duration\n\n| Type | Onset | Peak | Duration |\n|------|-------|------|----------|\n| **Rapid** | 5-15 min | 1-2 h | 3-5 h |\n| **Short** | 30-60 min | 2-4 h | 5-8 h |\n| **Intermediate** | 2-4 h | 6-8 h | 12-16 h |\n| **Long** | 1-2 h | Minimal | 24 h |\n\n## High-Yield Scenarios\n- **New Type 2 DM**: Metformin 500 mg BID\n- **Hyperlipidemia + T2DM**: Add SGLT2i (renal protection)\n- **Heart failure + T2DM**: GLP-1a or SGLT2i\n- **HbA1c 11%**: Start insulin (rapid + basal regimen)",
        mnemonics: [
          { text: "Insulin sequence: \"RSILB\" dosing ratios", explanation: "Rapid 5-10 units, Short 4-10 units, Intermediate 10-20, Long 10-15, Basal at bedtime" }
        ],
        keyPoints: [
          "Metformin: Always first-line (India guideline)",
          "SGLT2i: Renal & CV protection (use if albuminuria)",
          "GLP-1a: Cardiovascular benefit + weight loss",
          "Sulfonylureas: Avoid if possible (hypoglycemia risk)"
        ],
        textbookRefs: [
          { book: "NEET PG Pharmacology", edition: "2024" },
          { book: "IDA Diabetes Guidelines", edition: "2022" }
        ]
      },
      {
        layer: 5,
        slug: "insulin-oral-hypoglycemics-recall",
        title: "Insulin & Oral Hypoglycemics - Active Recall",
        estimatedMinutes: 10,
        summary: "Q&A flashcards for diabetes drugs.",
        contentMd: "# Insulin & Oral Hypoglycemics - Active Recall\n\n## Q&A Flashcards\n\n**Q1: First-line drug for Type 2 DM?**\nA: Metformin 500 mg OD, titrate to 1500-2000 mg daily\n\n**Q2: Why avoid metformin in renal impairment?**\nA: Risk of lactic acidosis (eGFR <30 mL/min)\n\n**Q3: Which drug causes weight loss in diabetes?**\nA: GLP-1 agonists (liraglutide, exenatide) - 2-5 kg\n\n**Q4: Hypoglycemia risk: which drug?**\nA: Sulfonylureas (gliclazide, glipizide)\n\n**Q5: Insulin for Type 2 DM indication?**\nA: HbA1c >10%, symptomatic hyperglycemia, pregnancy\n\n**Q6: SGLT2 inhibitor benefit in CKD?**\nA: Slows progression of albuminuria & renal disease\n\n**Q7: Rapid-acting insulin dose timing?**\nA: 15 minutes before meals\n\n**Q8: Metformin SE management?**\nA: GI upset - take with food, titrate slowly",
        mnemonics: [
          { text: "Diabetes 2nd line options: \"DGSM\"", explanation: "DPP-4i, GLP-1a, SGLT2i, or sulfonylurea" }
        ],
        keyPoints: [
          "Metformin: Safe, cost-effective, first-line",
          "GLP-1a: CV protection + weight loss",
          "SGLT2i: Renal protection + heart failure benefit",
          "Avoid sulfonylureas if possible (hypoglycemia)"
        ],
        textbookRefs: [
          { book: "KDT Pharmacology", chapter: "Ch 35", edition: "10th" },
          { book: "NEET PG Pharmacology", edition: "2024" }
        ]
      }
    ]
  },
  {
    topicCode: "PH-MOD-08-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "anticancer-drugs-foundation",
        title: "Anticancer Drugs - Foundation",
        estimatedMinutes: 20,
        summary: "Classification of anticancer drugs and mechanisms.",
        contentMd: "# Anticancer Drugs - Foundation\n\n## Anticancer Drug Classification\n\n### Alkylating Agents\n- **Mechanism**: DNA cross-linking\n- **Examples**: Cyclophosphamide, cisplatin\n\n### Antimetabolites\n- **Mechanism**: Inhibit DNA/RNA synthesis\n- **Examples**: Methotrexate, 5-FU, gemcitabine\n\n### Topoisomerase Inhibitors\n- **Mechanism**: Inhibit DNA unwinding\n- **Examples**: Etoposide, irinotecan\n\n### Plant Alkaloids\n- **Mechanism**: Mitotic spindle disruption\n- **Examples**: Paclitaxel, docetaxel\n\n### Targeted Therapies\n- **Mechanism**: Target specific pathways\n- **Examples**: Trastuzumab (HER2), imatinib (BCR-ABL)\n\n### Immunotherapy\n- **Mechanism**: Activate immune system\n- **Examples**: Checkpoint inhibitors (pembrolizumab, nivolumab)\n\n## Cancer Epidemiology (India)\n- **Incidence**: 1.4 million new cases/year\n- **Mortality**: 900,000 deaths/year\n- **Top cancers**: Breast, cervical, lung, colorectal\n- **Tobacco**: Single largest cause (40% of cancers)",
        mnemonics: [
          { text: "Anticancer classes: \"AATPTI\"", explanation: "Alkylating, Antimetabolite, Topoisomerase, Plant alkaloid, Targeted, Immunotherapy" }
        ],
        keyPoints: [
          "Alkylating agents: DNA cross-linking (broad spectrum)",
          "Antimetabolites: Mimic natural metabolites",
          "Targeted therapies: Specific molecular targets",
          "Immunotherapy: Emerging, good tolerability"
        ],
        textbookRefs: [
          { book: "KDT Pharmacology", chapter: "Ch 45", edition: "10th" },
          { book: "Goodman & Gilman's Pharmacology", chapter: "Ch 51", edition: "14th" }
        ]
      },
      {
        layer: 2,
        slug: "anticancer-drugs-mechanism",
        title: "Anticancer Drugs - Mechanism",
        estimatedMinutes: 30,
        summary: "Molecular mechanisms and resistance.",
        contentMd: "# Anticancer Drugs - Mechanism\n\n## Alkylating Agents\n- **DNA adduct formation**: Covalent bond to DNA bases\n- **Cross-linking**: Prevents DNA replication\n- **Cell cycle**: Phase non-specific\n- **Resistance**: Increased DNA repair enzymes\n- **Example**: Cyclophosphamide (nitrogen mustard)\n\n## Antimetabolites\n- **Methotrexate**: DHFR inhibition → ↓ dTMP (DNA synthesis)\n- **5-FU**: Thymidylate synthase inhibition\n- **Gemcitabine**: Incorporation into DNA (chain termination)\n- **Cell cycle**: S-phase specific\n\n## Topoisomerase Inhibitors\n- **Etoposide**: Topoisomerase II inhibition\n- **Mechanism**: Prevent DNA strand religation\n- **Result**: Double-strand breaks\n- **Cell cycle**: Mainly G2/M phase\n\n## Microtubule Inhibitors\n- **Paclitaxel**: Stabilizes microtubules\n- **Vincristine**: Inhibits microtubule formation\n- **Effect**: Prevents mitotic spindle formation\n- **Cell cycle**: M-phase specific\n\n## Targeted Therapies\n- **Trastuzumab**: Anti-HER2 monoclonal antibody\n- **Imatinib**: BCR-ABL tyrosine kinase inhibitor\n- **Mechanism**: Block specific pathways driving cancer\n- **Advantage**: More selective, fewer side effects\n\n## Checkpoint Inhibitors\n- **PD-1/PD-L1 inhibitors**: Unleash T-cell response\n- **Pembrolizumab, Nivolumab**: Examples\n- **Mechanism**: Block immune checkpoint (CTLA-4, PD-1)\n- **Result**: Enhanced T-cell killing of cancer cells",
        mnemonics: [
          { text: "Drug targets in cancer: \"DAT-MIT\"", explanation: "DNA (alkylating), Antimetabolites, Topoisomerase; Microtubules, Immune, Targeted" }
        ],
        keyPoints: [
          "Alkylating agents: DNA cross-linking, non-specific",
          "Antimetabolites: S-phase specific, less toxic",
          "Targeted: Most selective, revolutionized treatment",
          "Immunotherapy: Harnesses immune system"
        ],
        textbookRefs: [
          { book: "Goodman & Gilman's Pharmacology", chapter: "Ch 51", edition: "14th" },
          { book: "Molecular Basis of Cancer (Vogelstein)", chapter: "Drug targets", edition: "4th" }
        ]
      },
      {
        layer: 3,
        slug: "anticancer-drugs-clinical",
        title: "Anticancer Drugs - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical use, regimens, and toxicity management.",
        contentMd: "# Anticancer Drugs - Clinical\n\n## Common Cancer Regimens (India)\n\n### Breast Cancer\n- **Early stage**: Doxorubicin + Cyclophosphamide + Paclitaxel (FAC/PAC)\n- **Metastatic**: HER2+ → Trastuzumab + taxane\n- **Hormonal**: Tamoxifen (ER+), Aromatase inhibitors\n\n### Colorectal Cancer\n- **Metastatic**: 5-FU + Leucovorin + Oxaliplatin (FOLFOX)\n- **Alternative**: 5-FU + Irinotecan (FOLFIRI)\n\n### Lung Cancer\n- **NSCLC**: Platinum-based (cisplatin + pemetrexed/gemcitabine)\n- **Advanced**: PD-1 inhibitors (pembrolizumab)\n\n### Leukemia\n- **Chronic myeloid**: Imatinib (BCR-ABL inhibitor)\n- **Acute leukemia**: Cytarabine + Doxorubicin\n\n## Toxicity Management\n\n### Myelosuppression\n- **Cause**: Damage to bone marrow\n- **Management**: G-CSF (filgrastim), transfusions if needed\n- **Monitoring**: CBC weekly during therapy\n\n### Nausea/Vomiting\n- **Prevention**: 5-HT3 antagonists (ondansetron), NK1 inhibitors\n- **Timing**: Pre-chemotherapy\n- **Management**: Antiemetics around-the-clock\n\n### Cardiotoxicity (Doxorubicin)\n- **Mechanism**: Free radical damage to cardiac myocytes\n- **Monitoring**: LVEF at baseline, after 300 mg/m2 cumulative\n- **Prevention**: Dexrazoxane (cardioprotectant)\n\n### Nephrotoxicity (Cisplatin)\n- **Prevention**: Aggressive IV hydration\n- **Monitoring**: Serum creatinine, urine output\n- **Management**: Amifostine (cytoprotectant)\n\n### Neurotoxicity (Taxanes, Platinum)\n- **Cause**: Peripheral nerve damage\n- **Management**: Supportive care, dose reduction\n- **Prevention**: Limited (ongoing research)\n\n### Extravasation (IV chemotherapy)\n- **Management**: Stop infusion immediately\n- **Local treatment**: Depends on drug\n  - **Vesicants (doxorubicin)**: Dimethyl sulfoxide (DMSO)\n  - **Taxanes**: Hyaluronidase\n\n## Supportive Care\n- **Hydration**: IV fluids, target urine output >200 mL/h\n- **Antiemetics**: Ondansetron, aprepitant\n- **Infection prophylaxis**: G-CSF, prophylactic antibiotics if needed\n- **Nutritional support**: Dietitian involvement\n- **Psychological**: Counseling, support groups",
        mnemonics: [
          { text: "Prevent chemo SE: \"Hydrate-CSF-Antiemetic\"", explanation: "Aggressive hydration, G-CSF for myelosuppression, antiemetics prophylactically" }
        ],
        keyPoints: [
          "Myelosuppression: Nadir 7-14 days post-chemo",
          "Cardiotoxicity: Monitor LVEF (doxorubicin limit 300 mg/m2)",
          "Extravasation: Immediate management critical",
          "G-CSF: Standard in high-dose chemotherapy"
        ],
        textbookRefs: [
          { book: "Goodman & Gilman's Pharmacology", chapter: "Ch 51", edition: "14th" },
          { book: "NCCN Cancer Treatment Guidelines", edition: "2024" }
        ]
      },
      {
        layer: 4,
        slug: "anticancer-drugs-exam",
        title: "Anticancer Drugs - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield facts and drug-specific information.",
        contentMd: "# Anticancer Drugs - Exam Prep\n\n## Key Anticancer Drugs\n\n| Drug | Class | Mechanism | Toxicity | Cumulative Dose |\n|------|-------|-----------|----------|------------------|\n| **Cyclophosphamide** | Alkylating | DNA cross-link | Hemorrhagic cystitis | None |\n| **Methotrexate** | Antimetabolite | DHFR inhibition | Myelosuppression | None |\n| **Doxorubicin** | Topoisomerase II | DNA breaks | Cardiotoxicity | 450 mg/m2 |\n| **Cisplatin** | Alkylating | DNA cross-link | Nephrotoxicity | Cumulative |\n| **Paclitaxel** | Microtubule | Spindle arrest | Neuropathy | Cumulative |\n| **Trastuzumab** | Targeted (HER2) | Signal blocking | Cardiotoxicity | Monitor LVEF |\n\n## High-Yield Facts\n- **Methotrexate**: Folic acid antagonist (add leucovorin \"rescue\")\n- **Doxorubicin**: Limit 450 mg/m2 cumulative (cardiotoxicity)\n- **Cisplatin**: Aggressive hydration essential\n- **5-FU**: No maximum cumulative dose\n- **Trastuzumab**: HER2+ breast cancers\n\n## Management Priorities\n- **Myelosuppression**: G-CSF standard\n- **Cardiotoxicity**: Monitor LVEF regularly\n- **Nausea**: Prophylactic antiemetics\n- **Renal**: Hydration (cisplatin especially)",
        mnemonics: [
          { text: "Cumulative dose limits: \"Doxo-Cisp-Paclitax\"", explanation: "Only Doxo has absolute limit; Cisplatin & Taxanes need monitoring" }
        ],
        keyPoints: [
          "Doxorubicin: Limit 450 mg/m2 (cardiotoxicity)",
          "Cisplatin: Requires aggressive hydration",
          "Methotrexate: Add leucovorin rescue to prevent toxicity",
          "Targeted therapies: More specific, fewer side effects"
        ],
        textbookRefs: [
          { book: "NEET PG Pharmacology", edition: "2024" },
          { book: "NCCN Cancer Guidelines", edition: "2024" }
        ]
      },
      {
        layer: 5,
        slug: "anticancer-drugs-recall",
        title: "Anticancer Drugs - Active Recall",
        estimatedMinutes: 10,
        summary: "Q&A flashcards for anticancer drugs.",
        contentMd: "# Anticancer Drugs - Active Recall\n\n## Q&A Flashcards\n\n**Q1: Mechanism of action of cyclophosphamide?**\nA: Alkylating agent (DNA cross-linking)\n\n**Q2: What is the dose limit for doxorubicin?**\nA: 450 mg/m2 cumulative (due to cardiotoxicity)\n\n**Q3: Drug causing hemorrhagic cystitis?**\nA: Cyclophosphamide (prevent with mesna & hydration)\n\n**Q4: Most common cause of chemo extravasation toxicity?**\nA: Doxorubicin (vesicant - stop infusion immediately)\n\n**Q5: HER2-positive breast cancer treatment?**\nA: Trastuzumab (anti-HER2 monoclonal antibody)\n\n**Q6: Methotrexate toxicity prevention?**\nA: Leucovorin rescue (folinic acid counteracts toxicity)\n\n**Q7: Immune checkpoint inhibitor example?**\nA: Pembrolizumab (anti-PD-1)\n\n**Q8: Standard antiemetic for chemotherapy?**\nA: Ondansetron (5-HT3 antagonist)",
        mnemonics: [
          { text: "Chemo toxicity monitoring: \"CBC-LVEF-CreAT\"", explanation: "Blood counts, Cardiac function, Kidney function" }
        ],
        keyPoints: [
          "Alkylating agents: Non-specific, broad spectrum",
          "Targeted therapies: Revolutionized cancer treatment",
          "Doxorubicin: Limit 450 mg/m2 cumulative dose",
          "Cisplatin: Always hydrate aggressively"
        ],
        textbookRefs: [
          { book: "KDT Pharmacology", chapter: "Ch 45", edition: "10th" },
          { book: "NEET PG Pharmacology", edition: "2024" }
        ]
      }
    ]
  },
  {
    topicCode: "PS-MOD-05-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "mental-healthcare-forensic-foundation",
        title: "Mental Healthcare Act & Forensic Psychiatry - Foundation",
        estimatedMinutes: 20,
        summary: "Indian Mental Healthcare Act and forensic psychiatry basics.",
        contentMd: "# Mental Healthcare Act & Forensic Psychiatry - Foundation\n\n## Mental Healthcare Act 2017 (India)\n\n### Key Features\n- **Repealed**: Indian Lunacy Act 1912\n- **Focus**: Rights of persons with mental illness\n- **Advance directives**: Preferences about treatment\n- **Community mental health**: Decentralized approach\n\n### Central Provisions\n1. **Right to free/quality mental healthcare**\n2. **Advance directives**: Right to refuse treatment\n3. **Electroconvulsive therapy**: Informed consent mandatory\n4. **Confidentiality**: Protection of personal information\n5. **Non-discrimination**: Equal treatment\n\n## Mental Illness Definition\n\"Substantial disorder of mood, thought, perception, orientation or memory that may impair judgment without necessarily causing awareness of the impairment.\"\n\n## Forensic Psychiatry\nBranch dealing with:\n- Criminal responsibility (M'Naghten rule)\n- Mental fitness to stand trial\n- Testamentary capacity\n- Competence to consent\n- Victimology\n\n## Indian Penal Code (IPC) Sections\n- **Sec 84**: Insanity defense (disease of mind)\n- **Sec 326**: Causing grievous hurt\n- **Sec 337-348**: Hurt provisions",
        mnemonics: [
          { text: "MHA 2017 pillars: \"Rights, Dignity, Non-discrimination\"", explanation: "Core principles of new act" }
        ],
        keyPoints: [
          "MHA 2017: Replaced 112-year-old Lunacy Act",
          "Advance directives: New right to refuse treatment",
          "M'Naghten rule: Standard for insanity defense",
          "IPC Sec 84: Legal insanity defense"
        ],
        textbookRefs: [
          { book: "Textbook of Psychiatry (Kaplan & Sadock)", chapter: "Ch 55", edition: "21st" },
          { book: "Parikh's Medical Jurisprudence", chapter: "Ch 17", edition: "7th" }
        ]
      },
      {
        layer: 2,
        slug: "mental-healthcare-forensic-mechanism",
        title: "Mental Healthcare Act & Forensic Psychiatry - Mechanism",
        estimatedMinutes: 30,
        summary: "Legal frameworks and psychiatric assessment methods.",
        contentMd: "# Mental Healthcare Act & Forensic Psychiatry - Mechanism\n\n## M'Naghten Rule (Legal Insanity Test)\n\nPerson not guilty if at time of act:\n1. **Did not know nature/quality** of act, OR\n2. **Did not know right/wrong** due to disease of mind\n\n## Indian Legal Framework\n\n### IPC Section 84\n\"Nothing is an offence if at the time of doing it, by reason of unsoundness of mind, the person does not know nature of act, does not know it is wrong, or is incapable of knowing either.\"\n\n### Burden of Proof\n- **Prosecution**: Proves guilt beyond reasonable doubt\n- **Insanity defense**: Preponderance of evidence (balance of probabilities)\n\n### Irresistible Impulse Test\nIf person could not control behavior despite knowing right/wrong.\n\n## Mental Fitness to Stand Trial\n\nPerson must have:\n1. **Factual understanding**: Of charges against them\n2. **Rational understanding**: Of legal issues in case\n3. **Ability to communicate**: With defense attorney\n4. **Ability to assist**: In preparing defense\n\n## Testamentary Capacity\n\nPerson must know:\n1. **Nature & extent** of their property\n2. **Natural heirs** and claims\n3. **Disposition made** in the will\n4. **How dispositions relate** to the whole scheme\n5. **Practical effect** of will\n\n## Competence to Consent\n\nFor treatment, person must:\n1. **Understand** the information\n2. **Appreciate** consequences\n3. **Reason** about options\n4. **Express choice** about decision",
        mnemonics: [
          { text: "M'Naghten rule: \"Know nature? Know right/wrong?\"", explanation: "Two-part test for legal insanity" }
        ],
        keyPoints: [
          "M'Naghten rule: Two-part test (nature/right-wrong)",
          "Insanity is legal construct (not medical diagnosis)",
          "Testamentary capacity: Understanding of property & heirs",
          "Fitness to stand trial: Different from insanity"
        ],
        textbookRefs: [
          { book: "Parikh's Medical Jurisprudence", chapter: "Ch 17", edition: "7th" },
          { book: "Textbook of Psychiatry (Kaplan & Sadock)", chapter: "Ch 55", edition: "21st" }
        ]
      },
      {
        layer: 3,
        slug: "mental-healthcare-forensic-clinical",
        title: "Mental Healthcare Act & Forensic Psychiatry - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical applications and ethical-legal considerations.",
        contentMd: "# Mental Healthcare Act & Forensic Psychiatry - Clinical\n\n## MHA 2017 Clinical Implications\n\n### Involuntary Admission\n- **Criteria**: Person with mental illness, likelihood of serious harm\n- **Authority**: Medical officer (not police)\n- **Duration**: 72-hour limit for examination\n- **Notice**: District Mental Health Authority within 24 hours\n\n### Advance Directives\n- **Definition**: Written statements about treatment preferences\n- **Content**: Acceptable/unacceptable treatments\n- **Validity**: Made when person has capacity\n- **Guardianship**: Directive respected even if guardian disagrees\n\n### ECT (Electroconvulsive Therapy)\n- **Consent**: Mandatory (from self or guardian)\n- **Use**: Severe depression, catatonia, psychosis\n- **Monitoring**: Essential (vital signs, muscle relaxant, anesthesia)\n\n## Psychiatric Examination in Forensic Case\n\n### History Collection\n- **Detailed personal history**: Family, education, occupational\n- **Psychiatric history**: Previous episodes, hospitalizations\n- **Substance use**: Alcohol, drugs (critical in crime context)\n- **Event details**: Circumstances of alleged crime\n- **Post-crime behavior**: Fleeing, confession, remorse\n\n### Mental Status Examination\n- **Consciousness**: Alert, drowsy, comatose\n- **Orientation**: Time, place, person\n- **Memory**: Immediate, recent, remote\n- **Mood & affect**: Consistent with situation?\n- **Thought process**: Logical, flight of ideas\n- **Hallucinations/delusions**: Presence, content, insight\n- **Judgment & insight**: About illness, crime\n\n### Competency Assessment\n- **Fitness to stand trial**: Courtroom competency\n- **Competence to confess**: Understand implications\n- **Capacity to consent**: Medical decisions\n- **Testamentary capacity**: Will-making ability\n\n## Ethical-Legal Principles\n\n### Confidentiality\n- **Protected**: Therapist-patient privilege\n- **Exception**: Duty to warn (if danger to others)\n- **MHA 2017**: Stricter confidentiality protections\n\n### Informed Consent\n- **Elements**: Information, comprehension, voluntariness, decision\n- **Exception**: Emergency (life-threatening)\n- **ECT**: Explicit written consent required\n\n### Right to Refuse Treatment\n- **Before MHA 2017**: Limited rights\n- **After MHA 2017**: Strong right to refuse\n- **Exception**: Emergency, court order\n\n## Common Forensic Scenarios\n\n### Insanity Defense (IPC Sec 84)\n- **Assessment**: M'Naghten test\n- **Timeline**: At time of crime\n- **Burden**: Balance of probabilities\n- **Outcome**: If successful → acquittal (not punishment)\n\n### Diminished Responsibility\n- **Not in Indian law** (unlike UK)\n- **Mitigating factor**: In sentencing\n- **Psychiatric condition**: Affects severity of punishment\n\n### Automata Defense\n- **Unconscious act**: No mens rea\n- **Examples**: Sleepwalking, seizure, delirium\n- **Rare but valid**: If medically documented",
        mnemonics: [
          { text: "Psychiatric eval sequence: \"HMSJ\"", explanation: "History, Mental status, Standardized tests, Judgment/capacity" }
        ],
        keyPoints: [
          "MHA 2017: Strong emphasis on rights & dignity",
          "M'Naghten rule: Legal standard for insanity",
          "Fitness to stand trial: Different from insanity",
          "Confidentiality: Protected unless danger to others"
        ],
        textbookRefs: [
          { book: "Mental Healthcare Act 2017 (Government of India)", edition: "2017" },
          { book: "Parikh's Medical Jurisprudence", chapter: "Ch 17", edition: "7th" }
        ]
      },
      {
        layer: 4,
        slug: "mental-healthcare-forensic-exam",
        title: "Mental Healthcare Act & Forensic Psychiatry - Exam Prep",
        estimatedMinutes: 15,
        summary: "NEET PG high-yield legal and clinical concepts.",
        contentMd: "# Mental Healthcare Act & Forensic Psychiatry - Exam Prep\n\n## M'Naghten Rule vs Other Tests\n\n| Test | Criterion | Used In |\n|------|-----------|----------|\n| **M'Naghten** | Know nature/right-wrong | Most countries (India) |\n| **Irresistible Impulse** | Lack of volitional control | Some states (USA) |\n| **Substantial Capacity** | Both knowledge & control | Model Penal Code |\n| **Durham Rule** | Product of mental illness | Few places |\n\n## MHA 2017 Key Sections\n- **Ch 2**: Right to mental healthcare\n- **Ch 3**: Advance directive rights\n- **Ch 4**: Voluntary/involuntary admission\n- **Ch 5**: Mental Health Review Board\n- **Ch 6**: Community mental health\n\n## High-Yield Forensic Concepts\n- **Insanity**: Legal (not medical) - IPC Sec 84\n- **Fitness to trial**: Ability to assist defense\n- **Testamentary capacity**: Understanding of property/heirs\n- **Diminished responsibility**: Mitigating factor (not full defense)\n\n## Clinical vs Legal Standards\n- **Medical diagnosis**: Clinical criteria (DSM-5)\n- **Legal insanity**: M'Naghten test (different standard)\n- **Person may have diagnosis but be legally sane** (able to know right/wrong)\n- **Conversely, may lack diagnosis but have legal insanity** (rare)",
        mnemonics: [
          { text: "Insanity vs fitness: \"Insanity = time of crime; Fitness = time of trial\"", explanation: "Remember timeline distinction" }
        ],
        keyPoints: [
          "MHA 2017: Advance directives, right to refuse treatment",
          "M'Naghten rule: Legal standard (not medical diagnosis)",
          "Fitness to stand trial: Different from insanity",
          "Burden of proof: Balance of probabilities for insanity"
        ],
        textbookRefs: [
          { book: "NEET PG Psychiatry", edition: "2024" },
          { book: "Parikh's Medical Jurisprudence", chapter: "Ch 17", edition: "7th" }
        ]
      },
      {
        layer: 5,
        slug: "mental-healthcare-forensic-recall",
        title: "Mental Healthcare Act & Forensic Psychiatry - Active Recall",
        estimatedMinutes: 10,
        summary: "Q&A flashcards for mental healthcare law and forensics.",
        contentMd: "# Mental Healthcare Act & Forensic Psychiatry - Active Recall\n\n## Q&A Flashcards\n\n**Q1: What is the M'Naghten rule?**\nA: Legal insanity test - person not guilty if didn't know nature/quality or right/wrong of act\n\n**Q2: Key difference between insanity and fitness to stand trial?**\nA: Insanity = mental state at time of crime; Fitness = mental state at time of trial\n\n**Q3: MHA 2017 major change from old Lunacy Act?**\nA: Emphasis on rights (advance directives, right to refuse treatment)\n\n**Q4: IPC section for insanity defense?**\nA: Section 84 (disease of mind causing ignorance of nature/right-wrong)\n\n**Q5: Elements of testamentary capacity?**\nA: Know nature of property, natural heirs, disposition made, practical effect\n\n**Q6: Burden of proof for insanity defense?**\nA: Balance of probabilities (not beyond reasonable doubt)\n\n**Q7: Who decides involuntary admission under MHA 2017?**\nA: Medical officer (not police)\n\n**Q8: ECT requirement under MHA 2017?**\nA: Informed written consent from person or guardian",
        mnemonics: [
          { text: "Capacity assessment trio: \"Know-Appreciate-Reason-Express\"", explanation: "Four elements of decision-making capacity" }
        ],
        keyPoints: [
          "MHA 2017: Replaced 112-year-old Lunacy Act",
          "M'Naghten rule: Legal standard for insanity in India",
          "Advance directives: New right under MHA 2017",
          "IPC Sec 84: Legal basis for insanity defense"
        ],
        textbookRefs: [
          { book: "Mental Healthcare Act 2017", edition: "Official text" },
          { book: "NEET PG Psychiatry", edition: "2024" }
        ]
      }
    ]
  },
  {
    topicCode: "SU-MOD-06-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "liver-abscess-portal-hypertension-foundation",
        title: "Liver Abscess & Portal Hypertension - Foundation",
        estimatedMinutes: 20,
        summary: "Introduction to hepatic abscess and portal hypertension.",
        contentMd: "# Liver Abscess & Portal Hypertension - Foundation\n\n## Liver Abscess Classification\n\n### Pyogenic Abscess\n- **Cause**: Bacterial infection (E. coli, Staph, Strep)\n- **Route**: Biliary (most common), portal vein, arterial hematogenous\n- **Risk factors**: Biliary obstruction, appendicitis, diverticulitis\n- **Epidemiology**: India endemic for amebic abscess\n\n### Amebic Abscess\n- **Cause**: Entamoeba histolytica\n- **Route**: Bowel → portal vein → liver\n- **Geography**: Tropical countries (India, Africa)\n- **Presentation**: Usually right upper lobe\n\n### Fungal Abscess\n- **Rare**: Immunocompromised patients\n- **Agents**: Candida, Aspergillus\n- **Context**: Post-chemotherapy, severe neutropenia\n\n## Portal Hypertension\n\n### Definition\nPressure in portal vein >12 mmHg (normal 5-10 mmHg)\n\n### Classification by Location\n- **Prehepatic**: Portal vein thrombosis\n- **Intrahepatic**: Cirrhosis (most common)\n- **Posthepatic**: Budd-Chiari syndrome\n\n### Causes (India)\n- **Cirrhosis**: 80% (alcohol, viral hepatitis B/C)\n- **Portal vein thrombosis**: Rare\n- **Budd-Chiari**: Rare (hypercoagulable states)\n\n## Epidemiology (India)\n- **Liver abscess**: 10-15 cases per 100,000 in endemic areas\n- **Amebic:pyogenic**: 7:1 ratio in India (vs 1:7 in West)\n- **Cirrhosis**: 10-15 million people\n- **Portal hypertension**: Major cause of morbidity/mortality",
        mnemonics: [
          { text: "Abscess types: \"PAF\" (Pyogenic, Amebic, Fungal)", explanation: "Based on causative agent" }
        ],
        keyPoints: [
          "Amebic abscess more common in India than pyogenic",
          "Portal hypertension: Cirrhosis is #1 cause",
          "Pyogenic abscess: Biliary obstruction risk factor",
          "Amebic: Tropical geographic distribution"
        ],
        textbookRefs: [
          { book: "Textbook of Surgery (Sabiston)", chapter: "Ch 56", edition: "21st" },
          { book: "SRB's Manual of Surgery (Rao)", chapter: "Ch 32", edition: "5th" }
        ]
      },
      {
        layer: 2,
        slug: "liver-abscess-portal-hypertension-mechanism",
        title: "Liver Abscess & Portal Hypertension - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathophysiology of abscess formation and portal hypertension.",
        contentMd: "# Liver Abscess & Portal Hypertension - Mechanism\n\n## Abscess Formation Mechanism\n\n### Pyogenic Abscess\n1. **Bacteria enter**: Via biliary (obstruction), portal (appendicitis), arterial\n2. **Suppuration**: PMN infiltration, pus formation\n3. **Loculation**: Wall formation (fibrin, collagen)\n4. **Rupture**: If untreated (peritonitis, fatal)\n\n### Amebic Abscess Pathogenesis\n1. **Intestinal invasion**: E. histolytica invades colon mucosa\n2. **Hematogenous spread**: Via portal vein to liver\n3. **Suppuration**: Trypsin degrades surrounding liver cells\n4. **Liquefaction**: Forms characteristic sterile pus (\"anchovy paste\")\n\n### Bacterial Flora (Pyogenic)\n- **Gram-negative**: E. coli (40%), Klebsiella (20%)\n- **Gram-positive**: Staph, Strep\n- **Anaerobes**: 50% of cases\n\n## Portal Hypertension Pathophysiology\n\n### Intrahepatic (Cirrhosis) Mechanism\n1. **Fibrosis**: Excessive collagen deposition\n2. **Sinusoidal occlusion**: Portal venous compression\n3. **Increased resistance**: To portal blood flow\n4. **Pressure buildup**: Portal pressure >12 mmHg\n\n### Compensatory Changes\n- **Splanchnic vasodilation**: From nitric oxide, endotoxin\n- **Portosystemic shunting**: Development of collaterals\n- **Ascites formation**: Fluid accumulation (decreased serum albumin)\n\n### Complications\n- **Varices**: From high pressure in esophageal/gastric veins\n- **Encephalopathy**: From ammonia (shunted bypass metabolism)\n- **Splenomegaly**: From congestion\n- **Thrombocytopenia**: From splenic sequestration\n\n## Cirrhosis (Most Common Cause)\n\n### Pathophysiology\n- **Fibrosis**: Replaces functional hepatocytes\n- **Loss of liver function**: ↓ albumin, clotting factors\n- **Portal obstruction**: ↑ pressure\n- **Neovascularization**: Abnormal vessels\n\n### Types (India)\n- **Alcoholic**: Most common (40%)\n- **Viral**: HBV, HCV (40%)\n- **Autoimmune**: PBC, AIH (5-10%)\n- **Other**: Hemochromatosis, Wilson's disease",
        mnemonics: [
          { text: "Abscess route: \"BPA\" (Biliary, Portal, Arterial)", explanation: "Three routes of bacterial entry" }
        ],
        keyPoints: [
          "Pyogenic abscess: Often polymicrobial",
          "Amebic abscess: Sterile pus ('anchovy paste')",
          "Portal hypertension: Intrahepatic resistance ↑ in cirrhosis",
          "Cirrhosis: Fibrosis replaces liver parenchyma"
        ],
        textbookRefs: [
          { book: "Textbook of Surgery (Sabiston)", chapter: "Ch 56", edition: "21st" },
          { book: "Harrison's Principles of Internal Medicine", chapter: "Ch 356", edition: "21st" }
        ]
      },
      {
        layer: 3,
        slug: "liver-abscess-portal-hypertension-clinical",
        title: "Liver Abscess & Portal Hypertension - Clinical",
        estimatedMinutes: 20,
        summary: "Diagnosis and management of hepatic abscess and portal hypertension.",
        contentMd: "# Liver Abscess & Portal Hypertension - Clinical\n\n## Liver Abscess Clinical Presentation\n\n### Pyogenic Abscess\n- **Fever**: Spiking (quotidian pattern)\n- **Right upper quadrant pain**: Tender hepatomegaly\n- **Jaundice**: If biliary involvement\n- **Sepsis**: In severe cases\n- **Timeline**: Acute (days to weeks)\n\n### Amebic Abscess\n- **Fever**: Low-grade, prolonged\n- **Hepatomegaly**: Tender, massive\n- **Right upper quadrant pain**: Dull, aching\n- **Systemic**: Weight loss, anemia\n- **Timeline**: Subacute (weeks to months)\n\n## Investigations\n\n### Imaging (Gold Standard)\n- **Ultrasound**: Round/oval lesion, hypoechoic\n- **CT**: Multiple abscesses, gas locules (pyogenic)\n- **MRI**: Best for complications (rupture)\n\n### Serology\n- **Amebic serology**: IHA, ELISA (positive in 90-100%)\n- **Blood culture**: Positive in pyogenic (50%)\n- **Stool microscopy**: Amebic trophozoites (low sensitivity)\n\n### Biochemistry\n- **LFTs**: Elevated transaminases, ALP\n- **CBC**: WBC ↑, anemia (amebic)\n- **Prothrombin time**: Prolonged (liver dysfunction)\n\n## Management\n\n### Pyogenic Abscess\n- **Antibiotics**: 4-6 weeks (ceftriaxone + metronidazole)\n- **Drainage**: Percutaneous aspiration/catheter (>5 cm or failed antibiotics)\n- **Source control**: Treat underlying cause (biliary obstruction)\n- **Mortality**: 5-10% with modern therapy\n\n### Amebic Abscess\n- **Luminal agent**: Paromomycin 25-35 mg/kg/day × 7 days\n- **Tissue agent**: Metronidazole 750 mg TDS × 10 days\n- **Drainage**: Indicated if rupture risk, failed medical therapy\n- **Resolution**: Slow (weeks to months)\n\n## Portal Hypertension Management\n\n### Acute Variceal Bleeding\n- **Stabilization**: IV access, blood transfusion (target Hb 7-9)\n- **Vasoconstrictor**: Octreotide (bolus + infusion)\n- **Antibiotic prophylaxis**: Ceftriaxone 1g OD\n- **Endoscopy**: Sclerotherapy/banding (within 12 hours)\n- **Transjugular portosystemic shunt (TIPS)**: If refractory\n\n### Chronic Management\n- **Beta-blockers**: Propranolol (target HR 25% reduction)\n- **Avoid NSAIDs**: Precipitate renal failure\n- **Diuretics**: Furosemide for ascites\n- **Low sodium diet**: <2 g/day\n- **Monitoring**: Endoscopy for varices (screens every 2-3 years)\n\n### Encephalopathy Management\n- **Lactulose**: Reduce ammonia production\n- **Neomycin**: Reduce colonic bacteria\n- **Restrict protein**: Temporarily during acute phase\n- **Avoid precipitants**: Infection, bleeding, NSAIDs, alcohol\n\n## Surgical Interventions\n- **TIPS**: For refractory ascites, recurrent variceal bleeding\n- **Liver transplantation**: For end-stage cirrhosis\n- **Surgical shunts**: Rarely done now (TIPS preferred)",
        mnemonics: [
          { text: "Abscess management: \"ABD\" = Antibiotics, Blood culture, Drainage", explanation: "Treatment approach" }
        ],
        keyPoints: [
          "Pyogenic: Rapid onset, polymicrobial, needs drainage",
          "Amebic: Slow onset, serologically positive, medical therapy",
          "Variceal bleeding: Endoscopy + vasoconstrictor + antibiotics",
          "Beta-blockers prevent recurrent variceal bleeding"
        ],
        textbookRefs: [
          { book: "Textbook of Surgery (Sabiston)", chapter: "Ch 56", edition: "21st" },
          { book: "Harrison's Principles", chapter: "Ch 356", edition: "21st" }
        ]
      },
      {
        layer: 4,
        slug: "liver-abscess-portal-hypertension-exam",
        title: "Liver Abscess & Portal Hypertension - Exam Prep",
        estimatedMinutes: 15,
        summary: "NEET PG high-yield facts and clinical management.",
        contentMd: "# Liver Abscess & Portal Hypertension - Exam Prep\n\n## Abscess Comparison\n\n| Feature | Pyogenic | Amebic |\n|---------|----------|--------|\n| **Onset** | Acute | Subacute |\n| **Fever** | Spiking | Low-grade |\n| **Serology** | Negative | Positive (90%) |\n| **Pus culture** | Positive | Sterile |\n| **Drainage** | Usually needed | Conservative |\n| **Antibiotics** | 4-6 weeks | Metronidazole |\n| **India prevalence** | Rare | Common |\n\n## Portal Hypertension Causes (India)\n- **Cirrhosis**: 80% (alcohol, HBV/HCV)\n- **Portal vein thrombosis**: 10%\n- **Budd-Chiari**: 5%\n- **Schistosomiasis**: Rare in India\n\n## Varices Bleeding Management\n1. **Resuscitation**: Blood, IV access\n2. **Vasoconstrictor**: Octreotide\n3. **Antibiotics**: Ceftriaxone\n4. **Endoscopy**: Sclerotherapy/banding\n5. **Prophylaxis**: Beta-blockers (prevent recurrence)",
        mnemonics: [
          { text: "Amebic abscess: Serology positive, sterile pus", explanation: "Key distinguishing features from pyogenic" }
        ],
        keyPoints: [
          "Amebic serology >90% sensitive (diagnostic)",
          "Pyogenic: Multiple bacteria (culture positive)",
          "Varices bleeding: Sclerotherapy preferred over surgery",
          "Cirrhosis: Portal hypertension from intrahepatic obstruction"
        ],
        textbookRefs: [
          { book: "NEET PG Surgery", edition: "2024" },
          { book: "SRB's Manual of Surgery", chapter: "Ch 32", edition: "5th" }
        ]
      },
      {
        layer: 5,
        slug: "liver-abscess-portal-hypertension-recall",
        title: "Liver Abscess & Portal Hypertension - Active Recall",
        estimatedMinutes: 10,
        summary: "Q&A flashcards for liver pathology.",
        contentMd: "# Liver Abscess & Portal Hypertension - Active Recall\n\n## Q&A Flashcards\n\n**Q1: Most common cause of liver abscess in India?**\nA: Amebic abscess (E. histolytica)\n\n**Q2: Key difference between pyogenic and amebic abscess pus?**\nA: Pyogenic = positive culture; Amebic = sterile pus (anchovy paste)\n\n**Q3: Diagnostic test for amebic abscess?**\nA: Amebic serology (IHA, ELISA >90% sensitive)\n\n**Q4: First-line treatment for amebic abscess?**\nA: Metronidazole 750 mg TDS × 10 days\n\n**Q5: Most common cause of portal hypertension?**\nA: Cirrhosis (intrahepatic)\n\n**Q6: First-line management for variceal bleeding?**\nA: Endoscopic sclerotherapy/banding + vasoconstrictor\n\n**Q7: Antibiotic for variceal bleeding prophylaxis?**\nA: Ceftriaxone 1g OD\n\n**Q8: Drug to prevent recurrent variceal bleeding?**\nA: Beta-blockers (propranolol)",
        mnemonics: [
          { text: "Abscess presentation: \"Pyogenic acute, Amebic chronic\"", explanation: "Timeline helps differentiate" }
        ],
        keyPoints: [
          "Amebic: Slow onset, serologically positive, medical management",
          "Pyogenic: Rapid onset, culture positive, drainage needed",
          "Cirrhosis: Intrahepatic obstruction → portal hypertension",
          "Varices: Endoscopic therapy + vasoconstrictor + antibiotics"
        ],
        textbookRefs: [
          { book: "Textbook of Surgery (Sabiston)", chapter: "Ch 56", edition: "21st" },
          { book: "NEET PG Surgery", edition: "2024" }
        ]
      }
    ]
  }
];
