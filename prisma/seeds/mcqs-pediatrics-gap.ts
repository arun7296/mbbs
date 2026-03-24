import type { McqData, SubjectMcqs } from "./content-loader";

export const pediatricsGapMcqs: SubjectMcqs = {
  subjectCode: "PE",
  mcqs: [
    // PE-MOD-01-TOP-02: Developmental Milestones
    {
      id: "PE-MOD-01-TOP-02-MCQ-001",
      topicCode: "PE-MOD-01-TOP-02",
      stem: "A 12-month-old child is brought to the clinic. The mother reports that the child says 'mama' and 'dada' indiscriminately, pulls to stand with support, and waves goodbye. Which of the following developmental milestones is MOST likely NOT achieved at this age?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Says 2-3 meaningful words",
          isCorrect: true,
          explanation: "At 12 months, children typically speak only 1-2 words or jargon. Meaningful vocabulary of 2-3 words is typically achieved by 15-18 months. The child's current language (indiscriminate mama/dada) is developmentally appropriate for 12 months."
        },
        {
          id: "b",
          text: "Pulls to stand with support",
          isCorrect: false,
          explanation: "Pulling to stand with support is a normal gross motor milestone at 9-12 months."
        },
        {
          id: "c",
          text: "Waves goodbye",
          isCorrect: false,
          explanation: "Waving and social gestures are normal fine motor/social milestones at 10-12 months."
        },
        {
          id: "d",
          text: "Transfers objects hand to hand",
          isCorrect: false,
          explanation: "Object transfer is achieved by 8-10 months."
        }
      ],
      category: "RECALL",
      bloomLevel: "REMEMBER",
      difficulty: "EASY",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 2: Growth & Development"
    },
    {
      id: "PE-MOD-01-TOP-02-MCQ-002",
      topicCode: "PE-MOD-01-TOP-02",
      stem: "A 6-month-old infant is being assessed in the pediatric clinic. The child can sit with support, babbles syllables (ba-ba, da-da), and reaches for objects. The mother is concerned about developmental delay. Based on milestone assessment, which finding would suggest true developmental concern?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Inability to sit with support",
          isCorrect: true,
          explanation: "Sitting with support (tripod sit) is a critical gross motor milestone at 5-6 months. Inability at 6 months warrants concern for motor delay or central nervous system dysfunction. Early intervention is indicated."
        },
        {
          id: "b",
          text: "Babbling with repeated syllables",
          isCorrect: false,
          explanation: "Babbling at 6 months is normal speech development."
        },
        {
          id: "c",
          text: "Reaching for objects",
          isCorrect: false,
          explanation: "Object reaching is normal fine motor development at 5-6 months."
        },
        {
          id: "d",
          text: "Loss of primitive reflexes",
          isCorrect: false,
          explanation: "Primitive reflexes naturally disappear; their absence is normal at 6 months."
        }
      ],
      category: "ANALYSIS",
      bloomLevel: "ANALYZE",
      difficulty: "MEDIUM",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 2: Primitive & Postural Reflexes"
    },
    {
      id: "PE-MOD-01-TOP-02-MCQ-003",
      topicCode: "PE-MOD-01-TOP-02",
      stem: "A 24-month-old child presents to the outpatient department with history of fever for 3 days and convulsions. During examination, the child speaks 50 words, follows simple commands, and plays parallel with peers. The pediatrician suspects febrile seizure. Which NEURO-DEVELOPMENTAL competency is MOST relevant to document for this case management?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Assessment of speech and language development milestones",
          isCorrect: true,
          explanation: "In a child with febrile seizure, baseline neuro-developmental assessment is critical to detect any pre-existing delays or post-ictal deficits. At 24 months, 50 words with command-following and social play indicates normal development, establishing baseline before seizure-related complications."
        },
        {
          id: "b",
          text: "Testing for permanent muscle weakness",
          isCorrect: false,
          explanation: "Febrile seizures typically don't cause permanent motor deficits."
        },
        {
          id: "c",
          text: "Checking for absence of babinski reflex",
          isCorrect: false,
          explanation: "Babinski reflex assessment is relevant for neurological examination but not specifically for developmental competency documentation in febrile seizures."
        },
        {
          id: "d",
          text: "Assessing ability to walk backwards",
          isCorrect: false,
          explanation: "While gross motor function is important, it's less critical than establishing baseline neuro-cognitive status in seizure management."
        }
      ],
      category: "PROBLEM_SOLVING",
      bloomLevel: "APPLY",
      difficulty: "MEDIUM",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 2: Developmental Assessment; Chapter 14: Febrile Seizures"
    },
    {
      id: "PE-MOD-01-TOP-02-MCQ-004",
      topicCode: "PE-MOD-01-TOP-02",
      stem: "During a well-child visit, a 4-month-old infant exhibits the following: head lag disappears, rolls from back to side, coos socially, and grasps objects placed in hand. A medical student documents 'developmental milestones appropriate for age.' Which aspect of this assessment would MOST accurately reflect the NMC competency for developmental surveillance?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Documenting specific age-appropriate milestones across gross motor, fine motor, language, and social domains",
          isCorrect: true,
          explanation: "NMC competency PE-MOD-01-TOP-02 requires comprehensive developmental assessment across all domains (gross motor: head control/rolling, fine motor: grasping, language: cooing, social: interactive behavior). The case demonstrates competency across all areas appropriate for 4 months."
        },
        {
          id: "b",
          text: "Simply stating 'development normal' without specific observations",
          isCorrect: false,
          explanation: "Non-specific documentation fails to meet the standard for developmental surveillance and doesn't establish a clear baseline."
        },
        {
          id: "c",
          text: "Comparing milestones only with chronologically older children",
          isCorrect: false,
          explanation: "Developmental assessment should use age-appropriate standards, not comparison with older children."
        },
        {
          id: "d",
          text: "Assessing only motor milestones",
          isCorrect: false,
          explanation: "Comprehensive developmental assessment includes multiple domains beyond motor skills."
        }
      ],
      category: "PROBLEM_SOLVING",
      bloomLevel: "APPLY",
      difficulty: "MEDIUM",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 2: Developmental Milestones & NMC CBME Standards"
    },
    {
      id: "PE-MOD-01-TOP-02-MCQ-005",
      topicCode: "PE-MOD-01-TOP-02",
      stem: "A 18-month-old child with global developmental delay is evaluated. The child has a Gross Motor Function Classification System (GMFCS) level III (walks with handheld mobility device) and speaks approximately 20-25 words. Based on developmental milestone norms and this clinical presentation, what is the MOST appropriate immediate action?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Refer for comprehensive neuro-developmental assessment and early intervention services",
          isCorrect: true,
          explanation: "This child shows significant gross motor delay (GMFCS III; normal 18-month-old walks independently) and mild language delay (25 words; normal 18-month-olds have 50+ words). Early intervention under IMNCI guidelines with physiotherapy, speech therapy, and developmental assessment is indicated for potentially reversible causes and rehabilitation planning."
        },
        {
          id: "b",
          text: "Reassure parents and recheck milestones at age 2 years",
          isCorrect: false,
          explanation: "Global developmental delay at 18 months requires urgent intervention; waiting 6 months risks loss of critical developmental windows."
        },
        {
          id: "c",
          text: "Start medication for developmental disorder",
          isCorrect: false,
          explanation: "Medications are not first-line management for developmental delay; assessment for underlying causes and early intervention are prioritized."
        },
        {
          id: "d",
          text: "Screen for hearing loss only",
          isCorrect: false,
          explanation: "While hearing screening is important, comprehensive assessment for multiple causes (cerebral palsy, metabolic disorders, CNS lesions) is needed."
        }
      ],
      category: "PROBLEM_SOLVING",
      bloomLevel: "APPLY",
      difficulty: "HARD",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 2: Developmental Delay; IMNCI Guidelines"
    },

    // PE-MOD-01-TOP-03: Short Stature & Failure to Thrive
    {
      id: "PE-MOD-01-TOP-03-MCQ-001",
      topicCode: "PE-MOD-01-TOP-03",
      stem: "A 3-year-old child is brought to the clinic with height below the 3rd percentile for age. Birth weight and length were normal (3.2 kg, 50 cm). Current weight is appropriate for height. The child has normal appetite and development. Which is the MOST likely diagnosis?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Familial short stature",
          isCorrect: true,
          explanation: "Normal birth parameters, normal weight-for-height, normal appetite and development, with height below 3rd percentile suggests familial/constitutional short stature. Growth velocity is typically normal. Parental heights should be evaluated; mid-parental height percentile helps confirm diagnosis."
        },
        {
          id: "b",
          text: "Growth hormone deficiency",
          isCorrect: false,
          explanation: "GH deficiency causes proportionate growth failure with delayed milestones and hypoglycemia; normal development argues against this."
        },
        {
          id: "c",
          text: "Nutritional failure to thrive",
          isCorrect: false,
          explanation: "FTT presents with weight disproportionately affected; this child has normal weight-for-height."
        },
        {
          id: "d",
          text: "Chronic renal disease",
          isCorrect: false,
          explanation: "CKD-related growth failure is typically progressive; normal appetite and development are inconsistent with this."
        }
      ],
      category: "ANALYSIS",
      bloomLevel: "ANALYZE",
      difficulty: "MEDIUM",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 3: Short Stature & Growth Disorders"
    },
    {
      id: "PE-MOD-01-TOP-03-MCQ-002",
      topicCode: "PE-MOD-01-TOP-03",
      stem: "A 2-year-old girl presents with failure to thrive. Birth weight was 2.8 kg (SGA). Weight is currently 10 kg (25th percentile), height 78 cm (10th percentile). She has microcephaly, developmental delay, and characteristic facial features (hypertelorism, long philtrum). Which genetic condition is MOST consistent with this presentation?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Fetal alcohol spectrum disorder",
          isCorrect: true,
          explanation: "SGA at birth, proportionate growth failure (height and weight both below norm), microcephaly, developmental delay, and characteristic facial features (hypertelorism, long philtrum) are classic for FASD. This requires careful history of maternal alcohol use during pregnancy and consideration of early intervention and neurodevelopmental support."
        },
        {
          id: "b",
          text: "Turner syndrome",
          isCorrect: false,
          explanation: "Turner syndrome causes short stature but typically with webbed neck, cardiac abnormalities; facies are different. Developmental delay is not a primary feature."
        },
        {
          id: "c",
          text: "Noonan syndrome",
          isCorrect: false,
          explanation: "Noonan syndrome presents with short stature, characteristic facies (triangular face, hypertelorism), cardiac defects, but not the long philtrum or significant developmental delay seen here."
        },
        {
          id: "d",
          text: "Prader-Willi syndrome",
          isCorrect: false,
          explanation: "Prader-Willi presents with hypotonia at birth, feeding difficulty, then later obesity; not FTT with growth failure."
        }
      ],
      category: "PROBLEM_SOLVING",
      bloomLevel: "APPLY",
      difficulty: "HARD",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 3: Failure to Thrive; Chapter 20: Genetic Disorders"
    },
    {
      id: "PE-MOD-01-TOP-03-MCQ-003",
      topicCode: "PE-MOD-01-TOP-03",
      stem: "A 18-month-old boy with failure to thrive (weight 8 kg, <5th percentile) is brought by mother who reports he has 4-5 loose stools daily for 3 months, poor appetite, and irritability. Examination reveals abdominal distension, absence of edema, and normal developmental milestones. Which investigation would MOST help establish the diagnosis?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Tissue transglutaminase (tTG) antibodies and endomysial antibodies for celiac disease screening",
          isCorrect: true,
          explanation: "Chronic diarrhea, abdominal distension, poor weight gain without edema, and normal psychomotor development suggest malabsorption from celiac disease. tTG-IgA is the screening test; endomysial antibody (EMA) is confirmatory. This is increasingly recognized in Indian children and is treatable with gluten-free diet."
        },
        {
          id: "b",
          text: "Serum albumin and prothrombin time",
          isCorrect: false,
          explanation: "While these assess liver synthetic function, they're not specific for identifying the cause of malabsorption."
        },
        {
          id: "c",
          text: "Blood culture and complete blood count",
          isCorrect: false,
          explanation: "These would be indicated if infection were suspected; normal development and chronic course argue against acute infection."
        },
        {
          id: "d",
          text: "Ultrasound abdomen",
          isCorrect: false,
          explanation: "Imaging is not first-line for celiac disease diagnosis; serological testing is indicated."
        }
      ],
      category: "PROBLEM_SOLVING",
      bloomLevel: "APPLY",
      difficulty: "MEDIUM",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 3: Failure to Thrive; Chapter 11: Celiac Disease"
    },
    {
      id: "PE-MOD-01-TOP-03-MCQ-004",
      topicCode: "PE-MOD-01-TOP-03",
      stem: "A 4-month-old infant is brought for routine check-up. Birth weight was 3.6 kg; current weight is 5.2 kg. The infant is exclusively breastfed. Mother reports the infant nurses well for 15-20 minutes from each breast every 3-4 hours. Clinical examination reveals good weight gain, adequate subcutaneous fat, and brisk femoral pulses. Which statement BEST reflects adequate infant growth?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Expected weight gain (approximately 1.5 kg since birth) indicates successful exclusive breastfeeding",
          isCorrect: true,
          explanation: "At 4 months, expected weight is approximately 1.4-1.6 times birth weight. Weight gain of ~1.5 kg (from 3.6 to 5.2 kg) reflects approximately 200-300 g/week growth, which is appropriate for this age. Good nursing pattern, adequate fat stores, and normal pulses confirm adequate milk transfer and nutrition. This supports continued exclusive breastfeeding without supplementation."
        },
        {
          id: "b",
          text: "Weight gain is inadequate and supplemental feeds must be started",
          isCorrect: false,
          explanation: "Weight gain is appropriate for age; supplementation is not indicated."
        },
        {
          id: "c",
          text: "Clinical findings suggest failure to thrive despite adequate weight",
          isCorrect: false,
          explanation: "All clinical indicators (weight, subcutaneous fat, vital signs) are normal."
        },
        {
          id: "d",
          text: "Mother should be advised to introduce complementary foods at 4 months",
          isCorrect: false,
          explanation: "WHO and IAP guidelines recommend exclusive breastfeeding until 6 months; complementary foods are introduced at 6 months."
        }
      ],
      category: "ANALYSIS",
      bloomLevel: "ANALYZE",
      difficulty: "MEDIUM",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 3: Infant Growth & Nutrition; IAP Breastfeeding Guidelines"
    },
    {
      id: "PE-MOD-01-TOP-03-MCQ-005",
      topicCode: "PE-MOD-01-TOP-03",
      stem: "A 6-year-old child with history of recurrent pneumonias and chronic diarrhea presents with height at 5th percentile and weight at 10th percentile. Examination reveals barrel chest, clubbing of fingers, and growth failure. Which underlying condition should be MOST strongly suspected?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Cystic fibrosis",
          isCorrect: true,
          explanation: "Classic presentation: chronic lung disease (recurrent pneumonias, barrel chest), malabsorption (chronic diarrhea, weight failure), clubbing, and growth failure. CF causes pancreatic insufficiency (malabsorption) and lung damage (recurrent infections). Diagnosis requires sweat chloride test or genetic testing. Management includes pancreatic enzyme supplementation and aggressive chest physiotherapy."
        },
        {
          id: "b",
          text: "Chronic kidney disease",
          isCorrect: false,
          explanation: "CKD causes growth failure but not clubbing or chronic diarrhea with barrel chest."
        },
        {
          id: "c",
          text: "Congenital heart disease",
          isCorrect: false,
          explanation: "CHD can cause growth failure and clubbing but not chronic diarrhea with pulmonary findings typical of CF."
        },
        {
          id: "d",
          text: "Crohn disease",
          isCorrect: false,
          explanation: "Crohn's causes growth failure and diarrhea but not clubbing or prominent pulmonary findings."
        }
      ],
      category: "PROBLEM_SOLVING",
      bloomLevel: "APPLY",
      difficulty: "MEDIUM",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 3: Failure to Thrive; Chapter 12: Cystic Fibrosis"
    },

    // PE-MOD-01-TOP-04: Vital Statistics & Child Health Indicators
    {
      id: "PE-MOD-01-TOP-04-MCQ-001",
      topicCode: "PE-MOD-01-TOP-04",
      stem: "During a community health survey, the vital statistics team collects data on 500 children under 5 years in a rural area. They find 45 children died before age 5, with 28 deaths occurring before age 1. Based on these vital statistics, which indicator MOST accurately reflects child survival in this population?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Under-5 mortality rate (U5MR) = 90 per 1000 live births; Infant mortality rate (IMR) = 56 per 1000 live births",
          isCorrect: true,
          explanation: "U5MR = (45/500) × 1000 = 90 per 1000. IMR = (28/500) × 1000 = 56 per 1000. These rates reflect child survival and are critical NMC indicators. U5MR includes deaths before 5th birthday; IMR specifically measures deaths before 1st birthday. Both are higher than national average, suggesting inadequate health services or nutrition."
        },
        {
          id: "b",
          text: "U5MR = 45 per 1000; IMR = 28 per 1000",
          isCorrect: false,
          explanation: "The denominator calculation is incorrect; these calculations fail to standardize to 1000 live births."
        },
        {
          id: "c",
          text: "Child mortality rate = 17 per 1000; Neonatal mortality = 56 per 1000",
          isCorrect: false,
          explanation: "The calculations are mathematically incorrect and don't properly differentiate mortality periods."
        },
        {
          id: "d",
          text: "Maternal mortality ratio = 90 per 100,000; Infant mortality = 28 per 1000",
          isCorrect: false,
          explanation: "MMR is a separate indicator with different calculation; mixing indicators is inappropriate."
        }
      ],
      category: "RECALL",
      bloomLevel: "REMEMBER",
      difficulty: "MEDIUM",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 1: Vital Statistics; IAP Guidelines on Child Health Indicators"
    },
    {
      id: "PE-MOD-01-TOP-04-MCQ-002",
      topicCode: "PE-MOD-01-TOP-04",
      stem: "A pediatrician is evaluating health indicators for a district report. The district has a population of 2 million with approximately 40,000 live births annually. Last year, 1,200 children died before age 5, 400 neonates died within 28 days, and 150 mothers died during pregnancy/childbirth/postpartum period. What is the correct Neonatal Mortality Rate (NMR) for this district?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "10 per 1000 live births",
          isCorrect: true,
          explanation: "NMR = (Neonatal deaths / Live births) × 1000 = (400/40,000) × 1000 = 10 per 1000 live births. Neonatal deaths are deaths within first 28 days of life. This rate, when exceeding 10-15 per 1000 in India, suggests inadequate neonatal care, perinatal asphyxia, or infection management issues."
        },
        {
          id: "b",
          text: "30 per 1000 live births",
          isCorrect: false,
          explanation: "This would represent the Under-5 Mortality Rate (1,200/40,000 × 1000 = 30), not NMR."
        },
        {
          id: "c",
          text: "4 per 1000 live births",
          isCorrect: false,
          explanation: "This calculation incorrectly uses the population denominator rather than live births."
        },
        {
          id: "d",
          text: "75 per 100,000 live births",
          isCorrect: false,
          explanation: "While this may represent MMR (150/2,000,000 × 100,000 = 7.5, but approx 75 per 1,000,000), it is not the NMR."
        }
      ],
      category: "PROBLEM_SOLVING",
      bloomLevel: "APPLY",
      difficulty: "MEDIUM",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 1: Vital Statistics & Epidemiology"
    },
    {
      id: "PE-MOD-01-TOP-04-MCQ-003",
      topicCode: "PE-MOD-01-TOP-04",
      stem: "A health administrator is comparing child health indicators across three regions in India. Region A: IMR 30/1000, U5MR 40/1000. Region B: IMR 50/1000, U5MR 60/1000. Region C: IMR 25/1000, U5MR 35/1000. Which region shows the MOST favorable child survival profile, and what does the IMR:U5MR ratio suggest about mortality distribution?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Region C shows best outcomes; IMR:U5MR ratio ~0.71 indicates 71% of child deaths occur in infancy",
          isCorrect: true,
          explanation: "Region C has the lowest absolute rates (IMR 25, U5MR 35) indicating best child survival. IMR:U5MR ratio of 0.71 (25/35) suggests approximately 71% of under-5 deaths occur before age 1, which is typical in low-income settings with infection-related neonatal/infant mortality. This pattern indicates need for focused neonatal and infant care interventions."
        },
        {
          id: "b",
          text: "Region B shows best outcomes; the higher U5MR indicates better overall mortality tracking",
          isCorrect: false,
          explanation: "Region B has the worst outcomes with highest IMR and U5MR; higher rates don't indicate better tracking."
        },
        {
          id: "c",
          text: "Region A shows best outcomes; the ratio 0.75 is closest to developed countries",
          isCorrect: false,
          explanation: "While Region A is better than B, it's not as good as Region C. The ratio comparison with developed countries is less relevant in Indian context."
        },
        {
          id: "d",
          text: "Ratios cannot be compared; absolute numbers are more meaningful",
          isCorrect: false,
          explanation: "Ratios are valid for comparing mortality patterns across regions; they help identify where interventions are most needed."
        }
      ],
      category: "ANALYSIS",
      bloomLevel: "ANALYZE",
      difficulty: "HARD",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 1: Public Health Surveillance; Indian Public Health Statistics"
    },
    {
      id: "PE-MOD-01-TOP-04-MCQ-004",
      topicCode: "PE-MOD-01-TOP-04",
      stem: "During an IMNCI (Integrated Management of Neonatal and Childhood Illness) training, the community health worker is taught to monitor key indicators. Which of the following indicators is NOT typically included in the standard child health surveillance indicators used in Indian public health?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Immunization coverage (DPT3, measles)",
          isCorrect: false,
          explanation: "Immunization coverage is a core indicator in IMNCI and Indian health surveillance."
        },
        {
          id: "b",
          text: "Birth weight <2.5 kg prevalence",
          isCorrect: false,
          explanation: "LBW prevalence is monitored as key nutrition/health indicator."
        },
        {
          id: "c",
          text: "Childhood leukemia incidence per 100,000",
          isCorrect: true,
          explanation: "While childhood leukemia is important, its incidence is not part of routine vital statistics surveillance at community level. Standard indicators focus on mortality (IMR, U5MR), morbidity (diarrhea, pneumonia prevalence), and prevention (immunization, nutrition). Leukemia epidemiology is tracked for research but not routine IMNCI surveillance."
        },
        {
          id: "d",
          text: "Exclusive breastfeeding rate",
          isCorrect: false,
          explanation: "Breastfeeding rates are core nutrition and child health indicators."
        }
      ],
      category: "RECALL",
      bloomLevel: "UNDERSTAND",
      difficulty: "MEDIUM",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 1: IMNCI Framework; IAP Guidelines on Health Indicators"
    },
    {
      id: "PE-MOD-01-TOP-04-MCQ-005",
      topicCode: "PE-MOD-01-TOP-04",
      stem: "A pediatric residency program is teaching students about child health indicators for NMC competency assessment. Which of the following statements MOST accurately reflects the clinical significance of monitoring under-5 mortality rate (U5MR) in pediatric practice?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "U5MR reflects population health status and guides resource allocation; downward trends indicate improving neonatal care, nutrition, and disease management",
          isCorrect: true,
          explanation: "U5MR is a composite indicator reflecting entire child health system's effectiveness. Falling U5MR indicates: better neonatal resuscitation, reduced infection mortality (through vaccination/IMNCI), improved nutrition, and maternal health. Rising rates suggest emerging crises (disease outbreaks, conflicts, economic collapse). Pediatricians use U5MR trends to advocate for resources and target interventions. NMC competency requires understanding this indicator's implications for population health."
        },
        {
          id: "b",
          text: "U5MR is useful only for comparing countries; it has limited application in individual pediatric practice",
          isCorrect: false,
          explanation: "U5MR guides clinical practice prioritization, quality improvement, and advocacy for marginalized populations."
        },
        {
          id: "c",
          text: "U5MR is calculated from hospital deaths only and doesn't reflect community health",
          isCorrect: false,
          explanation: "U5MR includes all deaths in a population, both institutional and community-based."
        },
        {
          id: "d",
          text: "Decreasing U5MR indicates more diseases are present in the population",
          isCorrect: false,
          explanation: "Decreasing U5MR indicates fewer deaths, suggesting better health outcomes despite disease presence."
        }
      ],
      category: "PROBLEM_SOLVING",
      bloomLevel: "APPLY",
      difficulty: "HARD",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 1: Vital Statistics & Public Health; NMC CBME Guidelines"
    },

    // PE-MOD-02-TOP-04: Neonatal Sepsis
    {
      id: "PE-MOD-02-TOP-04-MCQ-001",
      topicCode: "PE-MOD-02-TOP-04",
      stem: "A 3-day-old term neonate born via vaginal delivery presents with fever (38.2°C), poor feeding, and lethargy. Mother had prolonged rupture of membranes (24 hours) with no intrapartum antibiotic prophylaxis. On examination, the infant appears ill with poor perfusion. Which organism is MOST likely responsible for early-onset neonatal sepsis (EONS) in this case?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Group B Streptococcus (GBS)",
          isCorrect: true,
          explanation: "EONS presents within first 72 hours and is primarily caused by maternal flora. GBS (via vaginal colonization) and E. coli are most common in India. Risk factors present: prolonged rupture of membranes (>12 hours), lack of intrapartum antibiotics, and vaginal delivery. GBS causes rapidly progressive sepsis with shock. Management requires immediate IV ampicillin + gentamicin or cefotaxime pending culture results."
        },
        {
          id: "b",
          text: "Staphylococcus aureus",
          isCorrect: false,
          explanation: "S. aureus causes late-onset sepsis (>72 hours) from horizontal transmission, not EONS."
        },
        {
          id: "c",
          text: "Listeria monocytogenes",
          isCorrect: false,
          explanation: "While Listeria can cause EONS, it's less common than GBS/E. coli in Indian settings and doesn't account for maternal GBS colonization risk."
        },
        {
          id: "d",
          text: "Pseudomonas aeruginosa",
          isCorrect: false,
          explanation: "Pseudomonas is an environmental nosocomial pathogen causing late-onset sepsis, not typical EONS."
        }
      ],
      category: "ANALYSIS",
      bloomLevel: "ANALYZE",
      difficulty: "MEDIUM",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 4: Neonatal Sepsis; Nelson's Pediatrics, Chapter 105: Neonatal Infections"
    },
    {
      id: "PE-MOD-02-TOP-04-MCQ-002",
      topicCode: "PE-MOD-02-TOP-04",
      stem: "A 6-day-old NICU-admitted neonate with birth weight 1.8 kg develops fever, abdominal distension, and feeding intolerance. Blood culture is sent, and empiric antibiotics are started. Considering late-onset neonatal sepsis (LONS) in a hospitalized premature infant, what is the MOST appropriate initial antibiotic regimen?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Vancomycin + third-generation cephalosporin (cefotaxime or ceftazidime)",
          isCorrect: true,
          explanation: "LONS (≥72 hours, typically 5-7 days) in hospitalized neonates is caused by nosocomial flora: coagulase-negative Staphylococci (CONS), S. aureus (including MRSA), Candida, Pseudomonas, and Klebsiella. Vancomycin covers CONS/MRSA; cephalosporin (preferably ceftazidime for gram-negative coverage including Pseudomonas) is required. This combination empirically covers typical LONS pathogens in NICU settings."
        },
        {
          id: "b",
          text: "Ampicillin + gentamicin",
          isCorrect: false,
          explanation: "This is EONS coverage (for GBS/E. coli); inadequate for nosocomial LONS pathogens."
        },
        {
          id: "c",
          text: "Penicillin G + amikacin",
          isCorrect: false,
          explanation: "Doesn't provide adequate coverage for MRSA or resistant gram-negatives typical in NICU."
        },
        {
          id: "d",
          text: "Cloxacillin + chloramphenicol",
          isCorrect: false,
          explanation: "Cloxacillin may not cover CONS reliably; chloramphenicol is rarely used due to bone marrow toxicity."
        }
      ],
      category: "PROBLEM_SOLVING",
      bloomLevel: "APPLY",
      difficulty: "MEDIUM",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 4: Neonatal Sepsis; IAP Neonatal Sepsis Guidelines"
    },
    {
      id: "PE-MOD-02-TOP-04-MCQ-003",
      topicCode: "PE-MOD-02-TOP-04",
      stem: "A 48-hour-old term neonate with clinical signs suggestive of early-onset sepsis (fever, poor feeding, lethargy) is evaluated. Blood and CSF cultures are sent. The attending physician must decide on immediate antibiotic initiation. According to current IAP/Indian neonatal guidelines, what is the MOST appropriate immediate action regarding antibiotic administration?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Start empiric antibiotics IMMEDIATELY without waiting for culture results, while investigations are ongoing",
          isCorrect: true,
          explanation: "Neonatal sepsis is a medical emergency with high mortality if treatment is delayed. IAP guidelines mandate immediate empiric antibiotic therapy in any neonate with clinical signs of sepsis, even while awaiting blood culture and CSF examination results. Delay increases mortality risk, especially for GBS/gram-negative organisms. Standard regimen: IV ampicillin + gentamicin (or cefotaxime) given within 1 hour of presentation."
        },
        {
          id: "b",
          text: "Wait for blood culture results before initiating antibiotics to avoid unnecessary treatment",
          isCorrect: false,
          explanation: "This delay strategy is dangerous in neonatal sepsis; mortality rises significantly with delayed treatment."
        },
        {
          id: "c",
          text: "Start antibiotics only if CSF shows pleocytosis on cell count",
          isCorrect: false,
          explanation: "Waiting for CSF analysis delays therapy; empiric treatment must start immediately with clinical suspicion."
        },
        {
          id: "d",
          text: "Give one dose of prophylactic antibiotic; recheck vital signs after 2 hours",
          isCorrect: false,
          explanation: "Single-dose prophylaxis is inadequate; therapeutic dosing must be started immediately."
        }
      ],
      category: "PROBLEM_SOLVING",
      bloomLevel: "APPLY",
      difficulty: "HARD",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 4: Neonatal Sepsis Management; IAP Guidelines for Neonatal Sepsis"
    },
    {
      id: "PE-MOD-02-TOP-04-MCQ-004",
      topicCode: "PE-MOD-02-TOP-04",
      stem: "A 5-day-old neonate admitted with suspected LONS has been on IV antibiotics for 48 hours. Blood culture grows Candida albicans. The infant is on total parenteral nutrition (TPN) through a central line. The pediatrician must now decide on antifungal therapy. Which statement MOST accurately reflects appropriate management for neonatal Candida sepsis?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Continue current antibiotics; add IV fluconazole; remove/replace central line if possible",
          isCorrect: true,
          explanation: "Candida sepsis in hospitalized neonates requires: (1) IV antifungal therapy (fluconazole preferred in most centers; amphotericin B if fluconazole-resistant); (2) Removal/replacement of infected central line (critical step as Candida forms biofilm on catheters); (3) Continuation of antibiotics for any concurrent bacterial infection; (4) Monitoring for disseminated infection (meningitis, retinitis). Fluconazole achieves good neonatal CSF penetration; dosing ~6-12 mg/kg/day."
        },
        {
          id: "b",
          text: "Stop current antibiotics immediately and use antifungal monotherapy only",
          isCorrect: false,
          explanation: "Stopping antibiotics removes coverage for potential concurrent bacterial pathogens; inappropriate."
        },
        {
          id: "c",
          text: "Continue antibiotics and antifungals but keep central line in place for ongoing TPN",
          isCorrect: false,
          explanation: "Central line infected with Candida is the source of infection; it must be removed to prevent treatment failure."
        },
        {
          id: "d",
          text: "Use topical clotrimazole + oral nystatin; no systemic antifungal needed",
          isCorrect: false,
          explanation: "Topical agents are ineffective for disseminated candemia; systemic IV antifungal is required."
        }
      ],
      category: "PROBLEM_SOLVING",
      bloomLevel: "APPLY",
      difficulty: "HARD",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 4: Neonatal Fungal Infections; Nelson's Pediatrics, Candida Sepsis"
    },
    {
      id: "PE-MOD-02-TOP-04-MCQ-005",
      topicCode: "PE-MOD-02-TOP-04",
      stem: "A pediatric resident is reviewing the clinical course of a 4-day-old neonate with presumed EONS who received 7 days of IV antibiotics. Blood cultures (negative at 48 hours), urinalysis, and CSF examination were all negative. The infant is now clinically well, feeding normally, with normal vital signs and decreasing CRP. What is the MOST appropriate next step in antibiotic management based on NMC competency guidelines?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Continue antibiotics for total 10-14 days for presumed sepsis despite negative cultures",
          isCorrect: true,
          explanation: "In neonates with clinical sepsis but negative cultures (culture-negative sepsis), antibiotics should continue for 7-10 days if signs resolve and cultures remain negative, because: (1) Some pathogens (GBS) may not culture well; (2) Empiric therapy has reduced culture positivity; (3) Clinical response is reassuring. However, prolonged courses (>10-14 days) without positive culture or ongoing clinical signs may promote antibiotic resistance and dysbiosis. Standard is 7-10 days for culture-negative presumed sepsis with clinical improvement."
        },
        {
          id: "b",
          text: "Stop antibiotics immediately since cultures are negative",
          isCorrect: false,
          explanation: "Premature discontinuation risks relapse; antibiotics should continue for adequate duration even if cultures negative."
        },
        {
          id: "c",
          text: "Switch to oral amoxicillin for continuation of treatment",
          isCorrect: false,
          explanation: "Switching to oral therapy before completing IV course is inappropriate; full IV course needed for presumed sepsis."
        },
        {
          id: "d",
          text: "Extend to 3 weeks of antibiotics to ensure all pathogens are eliminated",
          isCorrect: false,
          explanation: "Excessive prolongation promotes resistance and disrupts normal microbiota without clinical benefit."
        }
      ],
      category: "ANALYSIS",
      bloomLevel: "ANALYZE",
      difficulty: "MEDIUM",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 4: Culture-Negative Neonatal Sepsis; IAP Evidence-Based Neonatal Sepsis Guidelines"
    },

    // Continue with remaining topics...
    // PE-MOD-02-TOP-05: Birth Asphyxia & HIE
    {
      id: "PE-MOD-02-TOP-05-MCQ-001",
      topicCode: "PE-MOD-02-TOP-05",
      stem: "A term neonate born after suspected fetal distress has an Apgar score of 4 at 1 minute and 6 at 5 minutes. Cord pH is 6.9 with base deficit of -18. The infant shows poor spontaneous breathing, weak cry, and reduced tone. Which classification of birth asphyxia is MOST appropriate, and what is the immediate management priority?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Moderate asphyxia; immediate resuscitation with 100% oxygen and positive pressure ventilation",
          isCorrect: true,
          explanation: "Moderate-to-severe asphyxia criteria: Apgar score 4-6 at 5 minutes, cord pH <7.0, base deficit >-12. The Apgar score of 6 at 5 minutes indicates moderate asphyxia. Clinical signs (poor breathing, weak cry, reduced tone) confirm CNS depression. Immediate management per NRP guidelines: position → clear airway → dry/stimulate → provide PPV with room air (or 21% O₂) titrating to SpO₂ targets. Excessive supplemental oxygen risks hyperoxia complications."
        },
        {
          id: "b",
          text: "Severe asphyxia; intubation and mechanical ventilation required",
          isCorrect: false,
          explanation: "While this neonate may need ventilation support, classification as 'severe' requires more profound criteria (Apgar <3 at 5 min, cord pH <6.8). Initial approach should be reassessment with PPV before intubation."
        },
        {
          id: "c",
          text: "Mild asphyxia; observation only with supplemental oxygen if needed",
          isCorrect: false,
          explanation: "Apgar score of 6 at 5 minutes is not mild asphyxia; this requires active resuscitation."
        },
        {
          id: "d",
          text: "Birth asphyxia with seizures expected; prophylactic anticonvulsants immediately",
          isCorrect: false,
          explanation: "Seizures may develop but are not immediate concern; resuscitation/stabilization is priority first."
        }
      ],
      category: "PROBLEM_SOLVING",
      bloomLevel: "APPLY",
      difficulty: "MEDIUM",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 4: Birth Asphyxia & Resuscitation; NRP Guidelines India"
    },
    {
      id: "PE-MOD-02-TOP-05-MCQ-002",
      topicCode: "PE-MOD-02-TOP-05",
      stem: "A 6-hour-old neonate with history of moderate birth asphyxia presents with irritability, hyperreflexia, and subtle myoclonic jerks. Seizure activity is suspected. Neuroimaging shows basal ganglia and thalamic involvement consistent with hypoxic-ischemic encephalopathy (HIE) grade II. Temperature is 37.8°C. According to current evidence-based guidelines, which therapeutic intervention is MOST indicated for this case?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Whole-body hypothermia (33-34°C) initiated within 6 hours of birth for neuroprotection",
          isCorrect: true,
          explanation: "Therapeutic hypothermia is standard of care for moderate-to-severe HIE (Sarnat II-III) when initiated within 6 hours of birth. Mechanism: Reduces metabolic rate, ATP depletion, neurotransmitter release, and delayed apoptosis. Target core temperature 33-34°C for 72 hours improves neurodevelopmental outcomes. This case (HIE grade II with seizures, within 6-hour window) meets criteria. Rewarming must be slow (0.5°C/hour) to prevent complications."
        },
        {
          id: "b",
          text: "Mild hypothermia (35-36°C) without active cooling",
          isCorrect: false,
          explanation: "Mild hypothermia is not therapeutic; controlled moderate hypothermia (33-34°C) with active cooling is required."
        },
        {
          id: "c",
          text: "Maintain normothermia (37°C) and avoid hypothermia which may worsen prognosis",
          isCorrect: false,
          explanation: "This was previous practice; current evidence strongly supports therapeutic hypothermia for HIE grade II-III."
        },
        {
          id: "d",
          text: "Hyperthermia (38-39°C) to increase cerebral metabolism",
          isCorrect: false,
          explanation: "Hyperthermia worsens HIE outcomes; avoiding fever is important even before cooling."
        }
      ],
      category: "PROBLEM_SOLVING",
      bloomLevel: "APPLY",
      difficulty: "HARD",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 4: Hypoxic-Ischemic Encephalopathy; Nelson's Pediatrics, Therapeutic Hypothermia"
    },
    {
      id: "PE-MOD-02-TOP-05-MCQ-003",
      topicCode: "PE-MOD-02-TOP-05",
      stem: "A 12-hour-old neonate with birth asphyxia (Apgar 3 at 1 minute, 5 at 5 minutes) on therapeutic hypothermia develops seizures. Serum glucose is 45 mg/dL, calcium is 6.8 mg/dL, and magnesium is 1.2 mg/dL. Which metabolic derangement MOST directly explains the seizure activity in this context, and what is the MOST appropriate immediate intervention?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Hypoglycemia is the primary cause; administer 10% dextrose IV bolus (2 mL/kg) immediately",
          isCorrect: true,
          explanation: "Serum glucose 45 mg/dL is hypoglycemia, which is a common metabolic complication of birth asphyxia and causes seizures independent of HIE. While all three abnormalities (hypoglycemia, hypocalcemia, hypomagnesemia) can cause seizures, hypoglycemia is most immediately dangerous and most common in asphyxia. IV dextrose correction is first priority; then address calcium/magnesium deficiency. Hypoglycemia in asphyxic infants increases mortality/morbidity."
        },
        {
          id: "b",
          text: "Hypocalcemia is the primary cause; administer 10% calcium gluconate IV slowly over 10 minutes",
          isCorrect: false,
          explanation: "While hypocalcemia can cause seizures, hypoglycemia takes priority in immediate management due to its more acute danger."
        },
        {
          id: "c",
          text: "Hypomagnesemia is the primary cause; administer 50% magnesium sulfate IV",
          isCorrect: false,
          explanation: "Hypomagnesemia is less acutely life-threatening than hypoglycemia in this context."
        },
        {
          id: "d",
          text: "All three should be corrected simultaneously; prepare combined IV solution",
          isCorrect: false,
          explanation: "While all need correction, hypoglycemia must be addressed first as it's immediately life-threatening."
        }
      ],
      category: "ANALYSIS",
      bloomLevel: "ANALYZE",
      difficulty: "HARD",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 4: Birth Asphyxia Complications & Seizure Management"
    },
    {
      id: "PE-MOD-02-TOP-05-MCQ-004",
      topicCode: "PE-MOD-02-TOP-05",
      stem: "A 4-day-old neonate with severe birth asphyxia and HIE grade III who received therapeutic hypothermia is now being rewarmed. The attending physician discusses long-term management and prognosis with parents. Which statement MOST accurately reflects current evidence regarding neurodevelopmental outcomes in severe HIE treated with hypothermia?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Hypothermia reduces mortality and severe disability by ~30%; normal development is still possible in some cases, but majority have neurodevelopmental sequelae",
          isCorrect: true,
          explanation: "Major trials (TOBY, NICHD, NeoChop) show therapeutic hypothermia reduces death or severe disability by approximately 30% (NNT ~7). However, even with treatment, approximately 45-50% of severe HIE cases result in death or severe disability. Of survivors, 20-30% have normal neuro-developmental outcomes while 50-70% have varying degrees of cerebral palsy, developmental delay, or cognitive impairment. Long-term follow-up (18-24 months, school-age) is essential for all HIE survivors."
        },
        {
          id: "b",
          text: "Hypothermia ensures complete recovery; normal development is expected in >90% of cases",
          isCorrect: false,
          explanation: "This overstates the benefit; hypothermia improves but doesn't guarantee normal outcomes in severe HIE."
        },
        {
          id: "c",
          text: "Hypothermia has no effect on long-term outcomes; outcomes are determined entirely by severity of initial asphyxia",
          isCorrect: false,
          explanation: "Robust evidence supports that hypothermia significantly improves neurodevelopmental outcomes compared to historical controls."
        },
        {
          id: "d",
          text: "Hypothermia prevents all seizures and ensures seizure-free survival",
          isCorrect: false,
          explanation: "While hypothermia reduces seizure burden, some infants still develop seizures; seizure-freedom is not guaranteed."
        }
      ],
      category: "ANALYSIS",
      bloomLevel: "ANALYZE",
      difficulty: "HARD",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 4: Long-term Sequelae of HIE; TOBY & NICHD Hypothermia Trials"
    },
    {
      id: "PE-MOD-02-TOP-05-MCQ-005",
      topicCode: "PE-MOD-02-TOP-05",
      stem: "A 48-hour-old neonate with birth asphyxia (Apgar 2 at 1 min, 4 at 5 min, 5 at 10 min) and HIE grade II is on therapeutic hypothermia. The parents ask about prognosis and what signs would indicate good versus poor outcomes. Which clinical finding at 48-72 hours would be MOST predictive of favorable long-term neurodevelopmental outcome?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Absence of seizures, preserved pupillary light reflex, and normal sleep-wake cycling on EEG",
          isCorrect: true,
          explanation: "Favorable prognostic indicators at 48-72 hours in HIE include: seizure freedom, preserved brainstem reflexes (pupillary responses, corneal reflex, gag reflex), and background EEG normalization or only mild abnormalities with sleep-wake architecture preservation. Conversely, early seizures, loss of brainstem reflexes, and severely abnormal (burst-suppression) EEG predict poor outcomes. These early biomarkers help prognostication and guide discussions with families regarding intensity of care."
        },
        {
          id: "b",
          text: "Persistent seizures requiring multiple anticonvulsants indicates severe injury",
          isCorrect: false,
          explanation: "While early seizures are concerning, this is a finding (not the prognostic indicator being asked); normal reflexes/EEG would be more predictive of outcome."
        },
        {
          id: "c",
          text: "Requirement for mechanical ventilation indicates need for withdrawal of support",
          isCorrect: false,
          explanation: "Ventilation needs depend on respiratory drive and comorbidities; alone doesn't predict neurodevelopmental outcome."
        },
        {
          id: "d",
          text: "High CRP and lactate levels predict mortality regardless of clinical signs",
          isCorrect: false,
          explanation: "While elevated biomarkers suggest severity, clinical signs (seizures, reflexes, EEG) are more specific predictors of neuro-outcomes."
        }
      ],
      category: "ANALYSIS",
      bloomLevel: "ANALYZE",
      difficulty: "HARD",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 4: HIE Prognostication; Nelson's Pediatrics, Biomarkers in HIE"
    },

    // PE-MOD-03-TOP-03: Vitamin Deficiencies
    {
      id: "PE-MOD-03-TOP-03-MCQ-001",
      topicCode: "PE-MOD-03-TOP-03",
      stem: "A 14-month-old toddler from a low-income family presents with bowing of legs, frontal bossing, and delayed fontanelle closure. Biochemical examination shows low 25-OH vitamin D (18 ng/mL) and elevated alkaline phosphatase. Which complication of vitamin D deficiency should be MOST carefully monitored in this child?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Hypocalcemic seizures and tetany from secondary hyperparathyroidism",
          isCorrect: true,
          explanation: "Vitamin D deficiency causes secondary hyperparathyroidism with phosphaturia and hypocalcemia. Severe deficiency presents with tetany, laryngospasm, or seizures from hypocalcemia. This is a medical emergency requiring urgent calcium + vitamin D repletion. The clinical signs (bowing, frontal bossing) indicate rickets; biochemical picture confirms active mineralization defect. Close monitoring of calcium, phosphate, and PTH is essential during treatment."
        },
        {
          id: "b",
          text: "Hypercalcemia from excessive bone resorption",
          isCorrect: false,
          explanation: "Vitamin D deficiency causes hypocalcemia, not hypercalcemia."
        },
        {
          id: "c",
          text: "Hyperphosphatemia leading to kidney stone formation",
          isCorrect: false,
          explanation: "Vitamin D deficiency causes hypophosphatemia (from phosphaturia due to high PTH), not hyperphosphatemia."
        },
        {
          id: "d",
          text: "Permanent blindness from cataracts",
          isCorrect: false,
          explanation: "While vitamin D deficiency can affect eyes indirectly through calcium-phosphate metabolism, blindness is not the primary concern."
        }
      ],
      category: "ANALYSIS",
      bloomLevel: "ANALYZE",
      difficulty: "MEDIUM",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 5: Nutritional Disorders; Vitamin D Deficiency & Rickets"
    },
    {
      id: "PE-MOD-03-TOP-03-MCQ-002",
      topicCode: "PE-MOD-03-TOP-03",
      stem: "A 3-year-old child with a history of chronic diarrhea (loose stools for 2 months) presents with angular cheilitis, glossitis, and erythematous dermatitis in intertriginous areas. Which vitamin deficiency MOST likely explains this presentation, and what is the mechanism?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Vitamin B2 (riboflavin) deficiency; essential cofactor for FAD-dependent enzymes in energy metabolism",
          isCorrect: true,
          explanation: "Riboflavin deficiency causes: angular cheilitis (cracked corners of mouth), glossitis, seborrheic dermatitis affecting intertriginous/seborrheic areas (face, anogenital, inframammary). Chronic diarrhea predisposes due to malabsorption. Riboflavin is essential coenzyme for oxidative metabolism; deficiency impairs cellular energy production and epithelial integrity. Management: oral riboflavin 5-10 mg daily; assess for concurrent B-complex deficiencies (common in malabsorption)."
        },
        {
          id: "b",
          text: "Vitamin A deficiency; affects epithelial keratinization",
          isCorrect: false,
          explanation: "Vitamin A deficiency primarily causes night blindness, Bitot spots, corneal ulceration rather than these mouth/dermatitis signs."
        },
        {
          id: "c",
          text: "Vitamin C deficiency; impaired collagen synthesis",
          isCorrect: false,
          explanation: "Scurvy presents with bleeding gums, petechiae, and perifollicular hemorrhages, not these specific signs."
        },
        {
          id: "d",
          text: "Niacin deficiency; component of NAD coenzyme",
          isCorrect: false,
          explanation: "Pellagra (niacin deficiency) presents with '4 Ds' (dermatitis, diarrhea, dementia, death); glossitis/cheilitis are less prominent."
        }
      ],
      category: "PROBLEM_SOLVING",
      bloomLevel: "APPLY",
      difficulty: "MEDIUM",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 5: B Vitamin Deficiencies"
    },
    {
      id: "PE-MOD-03-TOP-03-MCQ-003",
      topicCode: "PE-MOD-03-TOP-03",
      stem: "An 8-year-old child presents with pallor, fatigue, and glossitis. On examination, there is loss of ankle reflexes and impaired vibration sense in lower extremities. Hemoglobin is 8.2 g/dL with macrocytic anemia. Which vitamin deficiency is MOST consistent with this presentation, and what is the pathophysiology?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Vitamin B12 (cobalamin) deficiency; impairs DNA synthesis and myelin formation causing macrocytic anemia and peripheral neuropathy",
          isCorrect: true,
          explanation: "B12 deficiency presents with: macrocytic anemia (impaired DNA synthesis affecting rapidly dividing RBCs), glossitis, and neurological manifestations (loss of reflexes, vibration/proprioception loss indicating dorsal column involvement). Risk factors in children: pernicious anemia, strict vegetarian diet, malabsorption (celiac, fish tapeworm, post-surgical). Treatment: IM B12 injections 1000 mcg weekly × 4, then monthly. Early treatment prevents permanent neurological sequelae."
        },
        {
          id: "b",
          text: "Folate deficiency; causes macrocytic anemia without neurological signs",
          isCorrect: false,
          explanation: "While folate deficiency causes macrocytic anemia, neurological signs are absent; B12 causes both."
        },
        {
          id: "c",
          text: "Iron deficiency; causes microcytic anemia with neurological complications",
          isCorrect: false,
          explanation: "Iron deficiency causes microcytic anemia, not macrocytic; neurological signs are atypical."
        },
        {
          id: "d",
          text: "Vitamin E deficiency; results in ataxia and loss of reflexes",
          isCorrect: false,
          explanation: "While E deficiency can cause neurological signs, macrocytic anemia is not typical."
        }
      ],
      category: "ANALYSIS",
      bloomLevel: "ANALYZE",
      difficulty: "HARD",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 5: B12 Deficiency & Megaloblastic Anemia"
    },
    {
      id: "PE-MOD-03-TOP-03-MCQ-004",
      topicCode: "PE-MOD-03-TOP-03",
      stem: "A 5-year-old girl with poor oral hygiene presents with swollen, spongy, bleeding gums and petechial rash over lower extremities. Radiographs show dense lines of calcification in long bones (Wimberger ring). Which vitamin deficiency accounts for both the oral and systemic findings, and what is the immediate management?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Vitamin C deficiency (scurvy); administer IV ascorbic acid 500-1000 mg daily after initial clinical assessment",
          isCorrect: true,
          explanation: "Scurvy presents with: bleeding/swollen gums (classic), petechiae/ecchymosis (impaired collagen IV in capillaries), joint pain, poor wound healing. Radiographic findings (Wimberger ring, dense metaphyseal lines, ground-glass osteopenia) are characteristic. Pathophysiology: vitamin C is cofactor for hydroxylation of proline/lysine in collagen; deficiency causes defective collagen. Management: ascorbic acid supplementation (IV initially for severe cases, then oral 200-500 mg daily), dietary counseling to increase citrus/vegetables. Gingival findings resolve within weeks of treatment."
        },
        {
          id: "b",
          text: "Vitamin K deficiency; start phytonadione (vitamin K1) injections",
          isCorrect: false,
          explanation: "K deficiency causes bleeding but not the characteristic gingival changes or radiographic scurvy signs."
        },
        {
          id: "c",
          text: "Vitamin B12 deficiency; initiate IM B12 therapy",
          isCorrect: false,
          explanation: "B12 deficiency doesn't explain gingival bleeding or bone changes."
        },
        {
          id: "d",
          text: "Calcium deficiency; supplement with calcium and vitamin D",
          isCorrect: false,
          explanation: "While bone radiographs show changes, they're due to defective collagen (vitamin C), not calcium deficiency."
        }
      ],
      category: "PROBLEM_SOLVING",
      bloomLevel: "APPLY",
      difficulty: "HARD",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 5: Vitamin C Deficiency & Scurvy"
    },
    {
      id: "PE-MOD-03-TOP-03-MCQ-005",
      topicCode: "PE-MOD-03-TOP-03",
      stem: "A 2-year-old child with exclusive breastfeeding (no vitamin supplementation) and minimal sun exposure presents with irritability, hyperreflexia, and convulsions. Serum calcium is 6.8 mg/dL (hypocalcemia). The pediatrician suspects nutritional deficiency in the mother that has affected the infant. Which maternal vitamin deficiency MOST directly explains the infant's presentation?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Maternal vitamin D deficiency resulting in impaired calcium absorption and neonatal/infant hypocalcemia",
          isCorrect: true,
          explanation: "Maternal vitamin D deficiency → deficient breast milk vitamin D → infant hypocalcemia and secondary hyperparathyroidism. Infants exclusively breastfed without supplementation from vitamin D-deficient mothers develop rickets and hypocalcemia by 2-3 months. Seizures from hypocalcemia are life-threatening. Management: immediate calcium gluconate IV, vitamin D supplementation (400-1000 IU daily), phototherapy for vitamin D synthesis. Indian guidelines recommend universal vitamin D supplementation for infants 0-6 months (600 IU daily; 1200 IU in high-risk populations)."
        },
        {
          id: "b",
          text: "Maternal vitamin B12 deficiency affecting infant neurological development",
          isCorrect: false,
          explanation: "While B12 deficiency can cause neurological issues, hypocalcemia with seizures is not typical."
        },
        {
          id: "c",
          text: "Maternal folate deficiency resulting in macrocytic anemia",
          isCorrect: false,
          explanation: "Folate deficiency doesn't directly cause neonatal hypocalcemia."
        },
        {
          id: "d",
          text: "Maternal iron deficiency causing maternal anemia and impaired fetal iron stores",
          isCorrect: false,
          explanation: "While maternal anemia affects iron status, it doesn't explain hypocalcemia with seizures."
        }
      ],
      category: "PROBLEM_SOLVING",
      bloomLevel: "APPLY",
      difficulty: "HARD",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 4: Neonatal Hypocalcemia; IAP Vitamin D Guidelines"
    },

    // PE-MOD-03-TOP-04: Immunization Schedule
    {
      id: "PE-MOD-03-TOP-04-MCQ-001",
      topicCode: "PE-MOD-03-TOP-04",
      stem: "A 6-month-old infant is brought for routine immunization. The child has received DPT-1 at 6 weeks and DPT-2 at 10 weeks. According to the current IAP (Indian Academy of Pediatrics) recommended immunization schedule, which vaccine is DUE at this 6-month visit?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "DPT-3, IPV-3, Hepatitis B-3, PCV-3, and Rotavirus-3",
          isCorrect: true,
          explanation: "IAP 2023 schedule: 6-month vaccines include DPT-3, IPV-3 (Inactivated Polio), Hepatitis B-3, PCV (Pneumococcal Conjugate) 3rd dose, and Rotavirus vaccine 3rd dose. This completes primary series for most vaccines. The schedule differs from government (NRHM) schedule which uses DPT instead of separate TT+P. Parents must be counseled about upcoming vaccines at 9 months (Varicella, if using IAP schedule)."
        },
        {
          id: "b",
          text: "Only DPT-3 and IPV-3; others will be given at 9 months",
          isCorrect: false,
          explanation: "Multiple vaccines are due at 6 months per IAP schedule; not just DPT and IPV."
        },
        {
          id: "c",
          text: "Measles vaccine only; DPT-3 has already been completed",
          isCorrect: false,
          explanation: "DPT-3 is still due at 6 months; measles is given at 9-12 months."
        },
        {
          id: "d",
          text: "No vaccines are due; next vaccine visit is at 12 months",
          isCorrect: false,
          explanation: "6 months is a critical immunization point with multiple vaccines due."
        }
      ],
      category: "RECALL",
      bloomLevel: "REMEMBER",
      difficulty: "MEDIUM",
      textbookRef: "IAP Recommended Immunization Schedule 2023; OP Ghai Pediatrics, Chapter 6: Immunization"
    },
    {
      id: "PE-MOD-03-TOP-04-MCQ-002",
      topicCode: "PE-MOD-03-TOP-04",
      stem: "A 9-month-old child presents for immunization. The child was born prematurely (32 weeks gestation) and completed DPT-1, DPT-2, IPV-1, IPV-2, Hib-1, Hib-2, PCV-1, PCV-2, Rotavirus-1, Rotavirus-2, and Hepatitis B doses at chronological age. Which schedule adjustment is MOST appropriate for this premature infant?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Continue using chronological age for all remaining vaccines; prematurity adjustment applies only until 2 years",
          isCorrect: true,
          explanation: "For premature infants: use corrected age (chronological age minus weeks of prematurity) until 2 years of age for vaccine scheduling. This corrects for developmental/immunological immaturity. At 9 months chronological age with 32-week prematurity, corrected age = ~6 months (37 weeks = full term; 32-week premature infant at 9 months = 6.5 months corrected). However, for practical purposes, many clinicians continue with chronological schedule after 6-12 months if child is growing well. Per IAP/WHO, corrected age is preferred through 24 months to ensure optimal immune response."
        },
        {
          id: "b",
          text: "Delay all vaccines by 8 weeks to match corrected age",
          isCorrect: false,
          explanation: "This is overly conservative; some flexibility exists after 6 months, and chronological age can be used if corrected milestones met."
        },
        {
          id: "c",
          text: "Accelerate all vaccines to catch up with chronological age peers",
          isCorrect: false,
          explanation: "Accelerating doesn't improve immune response; may cause adverse effects from overcrowded schedule."
        },
        {
          id: "d",
          text: "Discontinue all vaccines and restart at birth corrected age",
          isCorrect: false,
          explanation: "This would undo already-given vaccines unnecessarily; continuing with adjusted schedules is appropriate."
        }
      ],
      category: "ANALYSIS",
      bloomLevel: "ANALYZE",
      difficulty: "MEDIUM",
      textbookRef: "IAP Guidelines on Immunization in Premature Infants; OP Ghai Pediatrics, Chapter 6"
    },
    {
      id: "PE-MOD-03-TOP-04-MCQ-003",
      topicCode: "PE-MOD-03-TOP-04",
      stem: "A 18-month-old child presents with no documented immunization records. The child has no history of vaccine-preventable diseases. Which schedule MOST appropriately addresses catch-up immunization for this completely unimmunized child?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Administer all age-appropriate vaccines according to the 'catch-up schedule' with minimum intervals between doses to complete series by 2 years",
          isCorrect: true,
          explanation: "For completely unimmunized children, 'catch-up' schedule uses minimum intervals (4 weeks for most vaccines except PCV which needs 4-8 weeks). Goal is rapid completion of primary series. Example: 18-month child would receive: DPT-1, IPV-1, HB-1, PCV-1 on day 1; DPT-2, IPV-2, HB-2, PCV-2 at 4 weeks; DPT-3, IPV-3, HB-3, PCV-3 at 8 weeks. Specific catch-up schedules are available from IAP. Minimal interval acceleration prevents gaps in protection during outbreak-prone periods."
        },
        {
          id: "b",
          text: "Start fresh from birth schedule despite child's current age",
          isCorrect: false,
          explanation: "This would delay protection unnecessarily; catch-up schedule is designed for older unimmunized children."
        },
        {
          id: "c",
          text: "Give all overdue vaccines simultaneously at maximum safe intervals",
          isCorrect: false,
          explanation: "Minimum intervals are preferred for catch-up to accelerate protection; maximum intervals would prolong gap."
        },
        {
          id: "d",
          text: "Skip vaccines that are traditionally given in infancy; focus only on those still relevant at 18 months",
          isCorrect: false,
          explanation: "All vaccines in the series remain important to prevent diseases that still affect older children."
        }
      ],
      category: "PROBLEM_SOLVING",
      bloomLevel: "APPLY",
      difficulty: "HARD",
      textbookRef: "IAP Immunization Guidelines: Catch-up Schedule for Unimmunized Children; OP Ghai Pediatrics"
    },
    {
      id: "PE-MOD-03-TOP-04-MCQ-004",
      topicCode: "PE-MOD-03-TOP-04",
      stem: "A mother brings her 9-month-old child for routine immunization. She reports that the child had mild fever (38.5°C) and local swelling after DPT-2 at 10 weeks, which resolved within 24 hours. The child is currently healthy with no acute illness. Which statement MOST accurately guides the decision regarding DPT-3 administration?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Mild fever and local swelling are common, non-severe adverse events; DPT-3 should be administered as scheduled",
          isCorrect: true,
          explanation: "Mild fever and local swelling post-vaccination are expected, non-serious adverse events (not contraindications to further doses). The fact that these resolved quickly indicates good immune response. DPT-3 should proceed as scheduled. Contraindications to DPT boosters include: encephalopathy within 7 days of previous dose, progressive neurological disorder, or anaphylaxis to vaccine component. Mild fever alone is NOT a contraindication; in fact, it signals immune activation. Continue with DPT-3 as planned; counsel parents on expected side effects."
        },
        {
          id: "b",
          text: "Previous mild fever is a contraindication; DPT-3 should be deferred until child is older",
          isCorrect: false,
          explanation: "Mild fever is not a contraindication; deferral is inappropriate."
        },
        {
          id: "c",
          text: "Local swelling suggests hypersensitivity; switch to a different vaccine brand",
          isCorrect: false,
          explanation: "Local swelling is expected; brand switching is unnecessary for mild reactions."
        },
        {
          id: "d",
          text: "Give DPT-3 with prophylactic antipyretics to prevent fever recurrence",
          isCorrect: false,
          explanation: "Prophylactic antipyretics are not routinely recommended; they may blunt immune response."
        }
      ],
      category: "ANALYSIS",
      bloomLevel: "ANALYZE",
      difficulty: "MEDIUM",
      textbookRef: "IAP Guidelines on Vaccine Safety & Adverse Events; OP Ghai Pediatrics, Chapter 6: Immunization"
    },
    {
      id: "PE-MOD-03-TOP-04-MCQ-005",
      topicCode: "PE-MOD-03-TOP-04",
      stem: "A 4-year-old child with acute lymphoblastic leukemia (ALL) in remission on maintenance chemotherapy presents for assessment of immunization status. The child had completed primary series before diagnosis (age 2 years) but received no boosters since starting chemotherapy. The treating oncologist asks whether vaccines can be given. What is the MOST appropriate recommendation for timing of booster vaccines in this immunocompromised child?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Defer live vaccines (MMR, Varicella) during chemotherapy; give inactivated vaccines (DPT, IPV, HB) now; resume live vaccines ≥3-6 months after completing chemotherapy",
          isCorrect: true,
          explanation: "In chemotherapy-induced immunosuppression: (1) Avoid live vaccines (MMR, Varicella) during active treatment due to risk of vaccine-strain disease; (2) Inactivated vaccines (DPT, IPV, Hib, Hepatitis B) can be given but may have reduced immunogenicity; (3) Resume live vaccines after completing chemotherapy and immune reconstitution (typically ≥3-6 months after completion, or when CD4 >200 for longer deferral). Documentation of vaccine response is ideal before and after chemo. Coordinate with oncology regarding optimal timing within treatment schedule. Importance: Unimmunized/under-immunized children with cancer have higher risk of vaccine-preventable disease complications during immunosuppression."
        },
        {
          id: "b",
          text: "Give all vaccines including MMR and Varicella immediately to build immunity before additional chemo",
          isCorrect: false,
          explanation: "Live vaccines during chemotherapy risk vaccine-strain infection in immunocompromised host."
        },
        {
          id: "c",
          text: "Defer all vaccines until at least 12 months after chemotherapy completion",
          isCorrect: false,
          explanation: "Inactivated vaccines can be given sooner; 12 months is overly conservative for inactivated vaccines."
        },
        {
          id: "d",
          text: "No vaccines are safe in cancer patients; avoid all immunization",
          isCorrect: false,
          explanation: "Inactivated vaccines are important for protection and can be safely given even during treatment."
        }
      ],
      category: "PROBLEM_SOLVING",
      bloomLevel: "APPLY",
      difficulty: "HARD",
      textbookRef: "IAP Guidelines on Immunization in Immunocompromised Children; OP Ghai Pediatrics, Chapter 6"
    },

    // PE-MOD-03-TOP-05: Pediatric GI & Fluid Management
    {
      id: "PE-MOD-03-TOP-05-MCQ-001",
      topicCode: "PE-MOD-03-TOP-05",
      stem: "A 8-month-old infant with acute gastroenteritis presents with 8 loose stools in the past 24 hours, decreased urine output, and dry mucous membranes. Clinical assessment indicates some dehydration (5-10%). Weight is 7 kg. According to WHO/IMNCI guidelines, which fluid management approach is MOST appropriate for this degree of dehydration?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Oral rehydration solution (ORS) 75 mEq/L sodium at 50-100 mL/kg over 4 hours; reassess and classify dehydration severity",
          isCorrect: true,
          explanation: "WHO/IMNCI classification: Some dehydration (5-10%) is managed with ORS rehydration phase. Recommended ORS: 75 mEq/L sodium (low-osmolarity ORS) at 50-100 mL/kg body weight over 4 hours. For this 7 kg infant: 350-700 mL over 4 hours (approximately 90-175 mL/hour). Monitor for improvement (increased alertness, moist mucous membranes, normal urine output) after 4 hours. If improved, shift to maintenance + replacement phase; if worse, consider IV fluids. This approach prevents most hospitalizations while maintaining oral intake."
        },
        {
          id: "b",
          text: "IV rehydration with normal saline 50 mL/kg bolus immediately",
          isCorrect: false,
          explanation: "IV fluids are reserved for severe dehydration (≥10%) or failed oral rehydration; oral ORS is first-line for some dehydration."
        },
        {
          id: "c",
          text: "Normal diet with clear fluids; no specific ORS needed",
          isCorrect: false,
          explanation: "Clear fluids alone don't provide adequate electrolytes; ORS is specifically designed for GI fluid losses."
        },
        {
          id: "d",
          text: "Stop all foods and fluids for 24 hours to allow gut rest",
          isCorrect: false,
          explanation: "Prolonged NPO status impairs nutrition and delays recovery; feeding should resume early with appropriate choices."
        }
      ],
      category: "PROBLEM_SOLVING",
      bloomLevel: "APPLY",
      difficulty: "MEDIUM",
      textbookRef: "WHO Guidelines on Diarrhea Management; IMNCI Protocols; OP Ghai Pediatrics, Chapter 7"
    },
    {
      id: "PE-MOD-03-TOP-05-MCQ-002",
      topicCode: "PE-MOD-03-TOP-05",
      stem: "A 4-year-old child with severe acute malnutrition (SAM) and diarrhea is admitted with severe dehydration (>10%), weak pulses, and signs of hypovolemic shock. The child weighs 12 kg. According to current pediatric fluid resuscitation guidelines for shock, which immediate IV fluid regimen is MOST appropriate?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "IV bolus 20 mL/kg of 0.9% normal saline (isotonic crystalloid) over 15-30 minutes; reassess and repeat if shock persists",
          isCorrect: true,
          explanation: "Hypovolemic shock from severe dehydration requires rapid IV crystalloid resuscitation. Standard bolus: 20 mL/kg isotonic fluid (0.9% NaCl or Ringer lactate) given over 15-30 minutes. This child: 240 mL bolus. Reassess perfusion (heart rate, blood pressure, capillary refill, urine output). If shock persists after first bolus, repeat 20 mL/kg × 1-2 additional times (max 60-100 mL/kg in first hour). Monitor for overload signs in malnourished children who may have reduced cardiac reserve. Ongoing maintenance + deficit replacement after initial resuscitation."
        },
        {
          id: "b",
          text: "IV bolus 10 mL/kg at slow infusion rate over 1 hour to avoid fluid overload",
          isCorrect: false,
          explanation: "10 mL/kg is inadequate for shock; 20 mL/kg at appropriate rate is needed."
        },
        {
          id: "c",
          text: "Hypertonic saline 3% bolus for rapid sodium restoration",
          isCorrect: false,
          explanation: "Hypertonic saline is reserved for specific situations (cerebral edema, severe hyponatremia); isotonic crystalloid is first-line for shock."
        },
        {
          id: "d",
          text: "Albumin or blood products for volume restoration in malnourished child",
          isCorrect: false,
          explanation: "Crystalloid is first-line; colloids reserved for specific indications after initial crystalloid resuscitation."
        }
      ],
      category: "PROBLEM_SOLVING",
      bloomLevel: "APPLY",
      difficulty: "HARD",
      textbookRef: "Advanced Pediatric Life Support (APLS); OP Ghai Pediatrics, Chapter 7: Acute Gastroenteritis & Shock"
    },
    {
      id: "PE-MOD-03-TOP-05-MCQ-003",
      topicCode: "PE-MOD-03-TOP-05",
      stem: "A 6-month-old infant being treated for moderate dehydration with ORS has received 75 mL/kg over 4 hours. The infant now has normal mucous membranes, good skin turgor, and normal urine output. According to WHO protocols, what is the MOST appropriate next step in fluid management?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Shift to maintenance phase with continued ORS (10 mL/kg after each loose stool) plus age-appropriate diet",
          isCorrect: true,
          explanation: "After successful rehydration (normalization of clinical signs), shift from rehydration phase to maintenance + replacement phase. Maintenance: 50-100 mL/kg/day divided into meals/fluids; Replacement: 10 mL/kg ORS after each diarrheal stool. Continue age-appropriate diet (breast milk, appropriately prepared foods) as soon as possible. This maintains hydration, prevents relapse, and supports nutrition. Antidiarrheal agents are NOT recommended; zinc supplementation (10 mg/day × 10-14 days) should be initiated for diarrhea management."
        },
        {
          id: "b",
          text: "Discontinue all fluids for 6 hours to assess child's ability to maintain hydration without intervention",
          isCorrect: false,
          explanation: "Stopping fluids increases risk of relapse; maintenance fluids are necessary."
        },
        {
          id: "c",
          text: "Continue rehydration boluses at 50-100 mL/kg until diarrhea stops",
          isCorrect: false,
          explanation: "Once rehydrated, continuing bolus therapy risks fluid overload; maintenance is appropriate."
        },
        {
          id: "d",
          text: "Switch to IV fluids to ensure more reliable hydration status",
          isCorrect: false,
          explanation: "Oral route is preferred once child can tolerate; IV is unnecessary for successful oral rehydration."
        }
      ],
      category: "ANALYSIS",
      bloomLevel: "ANALYZE",
      difficulty: "MEDIUM",
      textbookRef: "WHO Guidelines on Persistent Diarrhea Management; OP Ghai Pediatrics, Chapter 7"
    },
    {
      id: "PE-MOD-03-TOP-05-MCQ-004",
      topicCode: "PE-MOD-03-TOP-05",
      stem: "A 3-year-old child with acute diarrhea has been receiving ORS. The mother reports the child is unable to drink due to severe vomiting. Clinical assessment shows signs of some dehydration (5-10%). Which route/method of fluid administration is MOST appropriate according to current guidelines?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Nasogastric tube feeding with ORS 10-20 mL/kg/hour in divided amounts every 5-10 minutes",
          isCorrect: true,
          explanation: "NG tube is effective for children with vomiting who cannot drink. ORS is given in small frequent volumes (5-10 mL every few minutes, increasing gradually) to bypass vomiting reflex while allowing absorption in small intestine. Typical rate: 10-20 mL/kg/hour in divided boluses. Success rate >90% in preventing need for IV fluids. Advantages: maintains oral route, avoids IV complications, supports gut function, cost-effective. Contraindications: bilious vomiting (suggests obstruction), abdominal distension, inability to protect airway."
        },
        {
          id: "b",
          text: "IV fluids immediately to bypass the vomiting problem",
          isCorrect: false,
          explanation: "NG tube is less invasive and effective; IV is reserved for failed NG or severe dehydration."
        },
        {
          id: "c",
          text: "Continue encouraging oral sipping despite vomiting; force fluids by mouth",
          isCorrect: false,
          explanation: "Forcing fluids increases vomiting; NG route is more appropriate."
        },
        {
          id: "d",
          text: "Suppress vomiting with antiemetics, then resume normal oral intake",
          isCorrect: false,
          explanation: "Antiemetics are not routinely recommended in acute gastroenteritis; NG tube is preferred for vomiting."
        }
      ],
      category: "PROBLEM_SOLVING",
      bloomLevel: "APPLY",
      difficulty: "HARD",
      textbookRef: "WHO Guidelines on Acute Gastroenteritis; OP Ghai Pediatrics, Chapter 7: Vomiting & Diarrhea Management"
    },
    {
      id: "PE-MOD-03-TOP-05-MCQ-005",
      topicCode: "PE-MOD-03-TOP-05",
      stem: "A 2-year-old with persistent diarrhea (>14 days) and malnutrition is hospitalized. Serum sodium is 128 mEq/L (hyponatremia), potassium is 2.8 mEq/L (hypokalemia), and serum albumin is 2.1 g/dL. Which aspect of fluid/electrolyte management is MOST critical in this malnourished child to prevent complications?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Cautious sodium and potassium replacement at reduced rates to avoid refeeding syndrome and electrolyte shifts in severely malnourished child",
          isCorrect: true,
          explanation: "Severely malnourished children (albumin <2.5 g/dL) have total body depletion of electrolytes despite normal/low serum levels. Rapid correction causes refeeding syndrome (fatal arrhythmias, seizures, metabolic derangements). Management: slow sodium/potassium repletion over days, not hours. Start feeding cautiously with frequent electrolyte monitoring. Hypokalemia in chronic diarrhea requires replacement (10-20 mEq/L in IV fluids); but in malnourished child, replace slowly. Hyponatremia should be corrected by 6-8 mEq/L per day max. Monitor phosphate, magnesium, calcium. Early nutrition rehabilitation with micronutrient support is essential."
        },
        {
          id: "b",
          text: "Rapid sodium correction to normal (140 mEq/L) immediately to restore cardiovascular function",
          isCorrect: false,
          explanation: "Rapid correction risks complications in malnourished child."
        },
        {
          id: "c",
          text: "Generous potassium supplementation 40-60 mEq/kg/day to replace losses",
          isCorrect: false,
          explanation: "High-dose replacement in malnourished child is dangerous; slow replacement is safer."
        },
        {
          id: "d",
          text: "Withhold all sodium and potassium until nutritional status improves",
          isCorrect: false,
          explanation: "Some replacement is needed; complete withholding prolongs deficiency."
        }
      ],
      category: "PROBLEM_SOLVING",
      bloomLevel: "APPLY",
      difficulty: "HARD",
      textbookRef: "OP Ghai Pediatrics, Chapter 7: Persistent Diarrhea & Malnutrition; Refeeding Syndrome in Children"
    },

    // PE-MOD-04-TOP-03: Diarrheal Diseases
    {
      id: "PE-MOD-04-TOP-03-MCQ-001",
      topicCode: "PE-MOD-04-TOP-03",
      stem: "A 3-year-old child from a slum area presents with acute watery diarrhea (10 stools in 24 hours), high fever (39.5°C), and blood in stools. On examination, the child appears ill with abdominal tenderness. Stool microscopy shows polymorphonuclear leukocytes and RBCs. Which bacterial pathogen is MOST likely responsible, and what is the first-line treatment?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Shigella flexneri causing dysentery; treat with azithromycin or ceftriaxone if severe/bloody stools",
          isCorrect: true,
          explanation: "Bloody diarrhea with high fever, PMN leukocytes in stool, and abdominal tenderness suggests dysentery (inflammatory diarrhea). Shigella is most common in India (S. flexneri > S. sonnei). Transmission: fecal-oral, poor sanitation (slum risk). Antibiotic choice depends on resistance patterns (vary by region): azithromycin (preferred by many), ceftriaxone, fluoroquinolones (in older children). Non-dysenteric Shigella may resolve without antibiotics, but bloody stools/severe disease warrant treatment. Management: fluids, electrolytes, zinc, antibiotics. Complications: seizures (CNS involvement), toxic megacolon, perforation."
        },
        {
          id: "b",
          text: "Rotavirus causing secretory diarrhea; treat with antivirals",
          isCorrect: false,
          explanation: "Rotavirus typically presents with watery (non-bloody) diarrhea; bloody stools and PMN leukocytes suggest bacterial infection."
        },
        {
          id: "c",
          text: "Vibrio cholerae causing cholera; treat with doxycycline + fluid resuscitation",
          isCorrect: false,
          explanation: "Cholera presents with massive watery 'rice-water' stools without fever or blood; different from this presentation."
        },
        {
          id: "d",
          text: "Giardia lamblia causing parasitic diarrhea; treat with metronidazole",
          isCorrect: false,
          explanation: "Giardia causes chronic watery diarrhea without fever or blood; fever/blood suggest bacterial infection."
        }
      ],
      category: "PROBLEM_SOLVING",
      bloomLevel: "APPLY",
      difficulty: "MEDIUM",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 8: Diarrheal Diseases; IAP Guidelines on Infectious Diarrhea"
    },
    {
      id: "PE-MOD-04-TOP-03-MCQ-002",
      topicCode: "PE-MOD-04-TOP-03",
      stem: "A 5-month-old exclusively breastfed infant develops acute watery diarrhea with vomiting and fever. Within 12 hours, the child shows signs of severe dehydration (sunken eyes, poor skin turgor, lethargy). Rotavirus is suspected. Which management approach is MOST appropriate for this severely dehydrated infant?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "IV rehydration with 20 mL/kg bolus of 0.9% saline over 15-30 minutes; reassess and continue maintenance + replacement after stabilization",
          isCorrect: true,
          explanation: "Severe dehydration (≥10% fluid loss) with shock signs requires IV fluid resuscitation. Standard approach: 20 mL/kg crystalloid bolus over 15-30 minutes; reassess circulation. If improved, continue maintenance (100 mL/kg/day for infants) + ongoing diarrheal losses (10 mL/kg per stool). Maintain breastfeeding if tolerated to preserve nutrition and immune protection. Rotavirus requires supportive care (fluids, electrolytes) only; antibiotics are not indicated. Zinc supplementation (10 mg daily for 10-14 days) reduces duration of diarrhea. Antiemetics are not routinely recommended."
        },
        {
          id: "b",
          text: "Oral rehydration only, even with severe dehydration signs",
          isCorrect: false,
          explanation: "Severe dehydration with poor perfusion requires IV fluids; oral route is inadequate."
        },
        {
          id: "c",
          text: "IV antibiotics to eliminate viral infection",
          isCorrect: false,
          explanation: "Rotavirus is viral; antibiotics don't help. They're inappropriate for uncomplicated viral gastroenteritis."
        },
        {
          id: "d",
          text: "Prolonged NPO status (24-48 hours) to allow gut rest before resuming feeds",
          isCorrect: false,
          explanation: "Prolonged NPO impairs nutrition; early refeeding (after initial rehydration) is recommended."
        }
      ],
      category: "PROBLEM_SOLVING",
      bloomLevel: "APPLY",
      difficulty: "HARD",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 8: Acute Gastroenteritis Management"
    },
    {
      id: "PE-MOD-04-TOP-03-MCQ-003",
      topicCode: "PE-MOD-04-TOP-03",
      stem: "A 4-year-old child with acute diarrhea has been treated with ORS and is now recovering clinically. The child has lost 8% of body weight during illness. The pediatrician counsels on nutrition during recovery. Which dietary approach MOST effectively supports nutritional rehabilitation in post-diarrhea period?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Early reintroduction of age-appropriate nutrition (cereals, legumes, vegetables, eggs, meat) within 24 hours of rehydration; avoid fatty foods initially",
          isCorrect: true,
          explanation: "Current evidence supports early feeding during/after diarrhea (within 4-24 hours of rehydration) to support nutritional rehabilitation and reduce malnutrition risk. Nutritious foods (cereals, pulses, vegetables, eggs, yogurt, meat) are better than restrictive diets. Avoid high-fat/high-sugar foods and caffeine. Lactose malabsorption is temporary; continue breast milk if lactose-free formula if necessary. Frequent small meals are better tolerated. Continue ORS after each loose stool. This approach reduces complications, shortens diarrhea duration, and supports growth. The concept of 'gut rest' with prolonged NPO is outdated."
        },
        {
          id: "b",
          text: "Restrict diet to bland foods (rice, toast) for 1-2 weeks to prevent relapse",
          isCorrect: false,
          explanation: "Prolonged bland diet restriction increases malnutrition risk without clinical benefit."
        },
        {
          id: "c",
          text: "Introduce new foods gradually over 4 weeks to test tolerance",
          isCorrect: false,
          explanation: "Slow introduction delays nutritional rehabilitation unnecessarily."
        },
        {
          id: "d",
          text: "Maintain total fasting for 48 hours, then slowly introduce fluids only",
          isCorrect: false,
          explanation: "Fasting increases malnutrition and delays recovery; early nutrition is preferred."
        }
      ],
      category: "ANALYSIS",
      bloomLevel: "ANALYZE",
      difficulty: "MEDIUM",
      textbookRef: "WHO/UNICEF Guidelines on Feeding During Diarrhea; OP Ghai Pediatrics, Chapter 8"
    },
    {
      id: "PE-MOD-04-TOP-03-MCQ-004",
      topicCode: "PE-MOD-04-TOP-03",
      stem: "A 6-month-old infant with acute diarrhea develops watery stools 15-20 times daily lasting >2 weeks. The child is underweight for age. Which definition and management approach is MOST appropriate for this clinical course?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Persistent diarrhea (≥14 days); requires continued fluid/electrolyte management, nutritional rehabilitation, assessment for underlying causes (malabsorption, infections), and micronutrient supplementation",
          isCorrect: true,
          explanation: "Diarrhea lasting ≥14 days is classified as persistent diarrhea. Risk for severe malnutrition is high (especially in infants <6 months, those already underweight). Etiology: inadequate nutrition, lactose malabsorption, bacterial overgrowth, Giardia, Cryptosporidium, or continued poor sanitation. Management: (1) Continue fluid/electrolyte replacement; (2) Early nutritious feeding; (3) Zinc 10-15 mg/day × 10-14 days; (4) Vitamin A supplementation; (5) Investigate for specific pathogens if available; (6) Consider trial of lactose-restricted feeds if bloating; (7) Monitor growth. Complications: severe malnutrition, micronutrient deficiencies, developmental delay."
        },
        {
          id: "b",
          text: "Acute diarrhea that has failed to resolve; use antibiotics to eliminate bacterial overgrowth",
          isCorrect: false,
          explanation: "Antibiotics are not routinely recommended for persistent diarrhea without confirmed bacterial pathogen; problem is usually nutritional/absorptive."
        },
        {
          id: "c",
          text: "Chronic diarrhea due to underlying lactose intolerance; switch to lactose-free diet immediately",
          isCorrect: false,
          explanation: "While lactose malabsorption occurs in persistent diarrhea, it's secondary; addressing nutrition and infections is priority."
        },
        {
          id: "d",
          text: "Refractory diarrhea requiring hospitalization and total parenteral nutrition",
          isCorrect: false,
          explanation: "TPN is reserved for cases failing standard management; most persistent diarrhea responds to improved nutrition and fluids."
        }
      ],
      category: "ANALYSIS",
      bloomLevel: "ANALYZE",
      difficulty: "HARD",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 8: Persistent Diarrhea; WHO Guidelines on Chronic Diarrhea"
    },
    {
      id: "PE-MOD-04-TOP-03-MCQ-005",
      topicCode: "PE-MOD-04-TOP-03",
      stem: "A community health worker identifies that in her village, diarrhea is the leading cause of morbidity in children <5 years. The incidence has increased 30% in monsoon season. According to IMNCI and public health perspectives, which intervention MOST effectively prevents diarrheal disease occurrence at the population level?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Promotion of breastfeeding (exclusive for 6 months), adequate sanitation (latrines), hand-washing with soap, and safe water supply",
          isCorrect: true,
          explanation: "Prevention of diarrhea at population level (primary prevention) requires: (1) Exclusive breastfeeding 0-6 months (protective immunity); (2) Safe water and sanitation (reduces pathogen transmission); (3) Hand-washing especially after defecation/before food (breaks transmission cycle); (4) Food hygiene; (5) Immunization (rotavirus, cholera vaccines where available); (6) Vitamin A supplementation (reduces diarrhea severity). These interventions address root causes of diarrhea in low-resource settings. Individual case management (ORS, antibiotics) is secondary prevention; population-level approaches reduce disease occurrence. IMNCI emphasizes these preventive aspects equally with case management."
        },
        {
          id: "b",
          text: "Stockpiling ORS and antibiotics in the village health center for rapid treatment",
          isCorrect: false,
          explanation: "Treatment supplies address secondary prevention only; doesn't prevent disease occurrence."
        },
        {
          id: "c",
          text: "Training health workers only in case management of diarrhea",
          isCorrect: false,
          explanation: "While important, case management doesn't prevent initial infection; prevention measures are primary approach."
        },
        {
          id: "d",
          text: "Prescribing prophylactic antibiotics to all children during monsoon season",
          isCorrect: false,
          explanation: "Antibiotic prophylaxis risks resistance and is not effective prevention strategy."
        }
      ],
      category: "ANALYSIS",
      bloomLevel: "ANALYZE",
      difficulty: "HARD",
      textbookRef: "IMNCI Guidelines; WHO Guidelines on Prevention of Diarrheal Diseases; OP Ghai Pediatrics, Chapter 8"
    },

    // PE-MOD-04-TOP-04: Meningitis & Encephalitis
    {
      id: "PE-MOD-04-TOP-04-MCQ-001",
      topicCode: "PE-MOD-04-TOP-04",
      stem: "A 2-year-old child presents with fever (39.8°C), severe headache, neck stiffness, and lethargy. Kernig and Brudzinski signs are positive. CSF examination shows: WBC 420/μL (90% PMN), protein 85 mg/dL, glucose 25 mg/dL, culture pending. Based on CSF profile, which bacterial meningitis is MOST likely?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Neisseria meningitidis or Streptococcus pneumoniae; start empiric IV cefotaxime ± vancomycin immediately",
          isCorrect: true,
          explanation: "CSF profile (high PMN predominance, elevated protein, low glucose with serum hypoglycorrhachia ratio <0.4) indicates bacterial meningitis. Most common pathogens in 2-year-olds: N. meningitidis and S. pneumoniae. Empiric treatment must start immediately (before culture confirmation) with cefotaxime 50 mg/kg IV Q4-6H ± vancomycin 15 mg/kg IV Q6H (covers penicillin-resistant pneumococcus). Add rifampicin if high suspicion. Dexamethasone 0.15 mg/kg Q6H × 4 days reduces neurological complications. Do not delay for imaging in meningitis; lumbar puncture is diagnostic and should be done after non-contrast CT if any focal neurological sign."
        },
        {
          id: "b",
          text: "Viral meningitis; symptomatic treatment only, no antibiotics needed",
          isCorrect: false,
          explanation: "CSF profile (high PMN >100, low glucose) indicates bacterial meningitis, not viral. Viral meningitis typically has <100 cells (lymphocyte predominant), normal glucose."
        },
        {
          id: "c",
          text: "Tuberculous meningitis; start anti-TB drugs immediately",
          isCorrect: false,
          explanation: "TB meningitis typically has lymphocyte predominance, very high protein; this PMN-predominant picture is more typical of acute bacterial meningitis."
        },
        {
          id: "d",
          text: "Fungal meningitis; start antifungal therapy",
          isCorrect: false,
          explanation: "Fungal meningitis is rare in immunocompetent 2-year-olds; acute bacterial meningitis is primary concern."
        }
      ],
      category: "PROBLEM_SOLVING",
      bloomLevel: "APPLY",
      difficulty: "HARD",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 9: Meningitis; Nelson's Pediatrics, Bacterial Meningitis"
    },
    {
      id: "PE-MOD-04-TOP-04-MCQ-002",
      topicCode: "PE-MOD-04-TOP-04",
      stem: "A 6-year-old child with meningitis caused by Streptococcus pneumoniae develops complications: hearing loss and hydrocephalus (dilated ventricles on imaging). Which long-term morbidity is MOST likely to occur, and what preventive intervention was available pre-illness?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Sensorineural hearing loss and developmental delay; pneumococcal conjugate vaccine (PCV) before illness could have prevented this",
          isCorrect: true,
          explanation: "Complications of pneumococcal meningitis: sensorineural hearing loss (occurs in 20-30% of survivors), subdural effusion, hydrocephalus, developmental delay, seizures, cerebral palsy. These are preventable with PCV13 (or PCV10 in India). This child at age 6 should have received 3 primary doses + booster per IAP schedule (ages 6 wks, 10 wks, 14 wks, + booster 12-15 months). Non-vaccination or incomplete vaccination status is risk factor. Management of survivors: audiological assessment, early intervention for any developmental delay, follow-up MRI to assess ventricular size."
        },
        {
          id: "b",
          text: "Intellectual disability only; immunization doesn't prevent meningitis",
          isCorrect: false,
          explanation: "Vaccination prevents many meningitis cases; prevention is important."
        },
        {
          id: "c",
          text: "Vision loss and cortical blindness; preventable only with meningococcal vaccine",
          isCorrect: false,
          explanation: "Hearing loss is more common than vision loss in pneumococcal meningitis; PCV is the preventive vaccine."
        },
        {
          id: "d",
          text: "Hydrocephalus only, with normal hearing and development",
          isCorrect: false,
          explanation: "Hearing loss frequently accompanies hydrocephalus in meningitis survivors."
        }
      ],
      category: "ANALYSIS",
      bloomLevel: "ANALYZE",
      difficulty: "HARD",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 9: Meningitis Complications & Prevention"
    },
    {
      id: "PE-MOD-04-TOP-04-MCQ-003",
      topicCode: "PE-MOD-04-TOP-04",
      stem: "A 4-year-old child with suspected meningitis requires lumbar puncture for CSF examination. The child has altered consciousness and bilateral papilledema on fundus examination. Which statement MOST appropriately guides the clinical approach to this patient?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Perform non-contrast head CT first to rule out mass lesion/increased ICP; if imaging shows no contraindication and clinical suspicion remains high, proceed with LP with appropriate precautions",
          isCorrect: true,
          explanation: "Papilledema with altered consciousness raises concern for raised intracranial pressure (ICP). While LP can cause herniation in presence of space-occupying lesion, in meningitis LP is both diagnostic and therapeutic (reduces CSF pressure). Approach: (1) Non-contrast CT to assess for mass, midline shift, hydrocephalus; (2) If no mass/shift, proceed with LP cautiously (remove minimal CSF <10 mL, head of bed elevated 30°); (3) If mass present or LP contraindicated, start empiric antibiotics IMMEDIATELY without LP (blood culture, imaging). Antibiotics can be started while awaiting imaging. Don't delay treatment for imaging in meningitis."
        },
        {
          id: "b",
          text: "Papilledema is contraindication to LP; start antibiotics without CSF diagnosis",
          isCorrect: false,
          explanation: "Papilledema alone isn't absolute contraindication in meningitis; imaging to assess for mass is needed first."
        },
        {
          id: "c",
          text: "Proceed with immediate LP without CT; CSF diagnosis is more urgent than ICP assessment",
          isCorrect: false,
          explanation: "While antibiotics must start immediately, imaging to assess herniation risk should be done if patient can tolerate it without delaying antibiotics."
        },
        {
          id: "d",
          text: "Avoid LP entirely and diagnose meningitis clinically; prevent herniation risk",
          isCorrect: false,
          explanation: "LP is essential for diagnosis and therapeutically important; avoiding it compromises care."
        }
      ],
      category: "PROBLEM_SOLVING",
      bloomLevel: "APPLY",
      difficulty: "HARD",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 9: Meningitis & Increased ICP Management"
    },
    {
      id: "PE-MOD-04-TOP-04-MCQ-004",
      topicCode: "PE-MOD-04-TOP-04",
      stem: "A 3-year-old child with viral meningitis (CSF lymphocytic pleocytosis, normal glucose, negative bacterial culture) has been hospitalized for 3 days with fever, headache, and neck stiffness. The child is clinically improving with supportive care. When is the MOST appropriate time for discharge based on current guidelines?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "When fever has resolved for 24-48 hours AND child is tolerating oral intake with improved alertness",
          isCorrect: true,
          explanation: "Viral meningitis is typically self-limited with good prognosis in immunocompetent children. Discharge criteria: (1) Clinical improvement with decreased fever; (2) Good oral intake; (3) Normal/baseline alertness; (4) No complications (subdural effusion, seizures); (5) Reliable follow-up. Most children can be discharged within 2-4 days. Extended hospitalization increases nosocomial infection risk without benefit. Outpatient follow-up for assessment of any hearing loss or developmental concerns is recommended at 4 weeks. Complications (meningismus persisting >2 weeks, hearing loss) are less common in viral meningitis than bacterial meningitis."
        },
        {
          id: "b",
          text: "Must complete minimum 7-10 days of hospitalization regardless of clinical improvement",
          isCorrect: false,
          explanation: "Prolonged hospitalization for uncomplicated viral meningitis is not necessary."
        },
        {
          id: "c",
          text: "Only after repeat lumbar puncture confirms CSF normalization",
          isCorrect: false,
          explanation: "Repeat LP is not routinely needed for uncomplicated viral meningitis; clinical assessment guides discharge."
        },
        {
          id: "d",
          text: "Not appropriate to discharge until all viral cultures are negative",
          isCorrect: false,
          explanation: "Viral culture results shouldn't delay discharge if child is clinically well."
        }
      ],
      category: "ANALYSIS",
      bloomLevel: "ANALYZE",
      difficulty: "MEDIUM",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 9: Viral Meningitis Management"
    },
    {
      id: "PE-MOD-04-TOP-04-MCQ-005",
      topicCode: "PE-MOD-04-TOP-04",
      stem: "A 5-year-old child presents with encephalitis (altered sensorium, seizures, CSF with lymphocytic pleocytosis). The child is from a region where Japanese encephalitis is endemic. Which investigation is MOST specific for confirming Japanese encephalitis diagnosis, and what is the immediate management?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Serum/CSF IgM antibody to Japanese encephalitis virus by ELISA; supportive care, seizure management, and specific antivirals if available",
          isCorrect: true,
          explanation: "Japanese encephalitis (JE): Flavivirus transmitted by Culex mosquitoes. Diagnosis: IgM antibody in serum/CSF (appears within 3-5 days) detected by ELISA is most specific. CSF typically shows lymphocytic pleocytosis, elevated protein, normal glucose. Viral PCR from CSF may be positive. MRI shows characteristic changes in basal ganglia/brainstem. Management: (1) Supportive care (airway, seizure control); (2) No specific antiviral currently approved in India; (3) Seizure prophylaxis with phenytoin/levetiracetam; (4) Management of raised ICP if present; (5) Vaccine-preventable in endemic areas (JE vaccine given at 9-12 months + booster). Mortality 5-30%; significant morbidity (neurological sequelae) in survivors."
        },
        {
          id: "b",
          text: "Blood culture for bacterial pathogens; empiric antibiotics are curative",
          isCorrect: false,
          explanation: "JE is viral; bacterial culture isn't diagnostic. Antibiotics don't treat viral encephalitis."
        },
        {
          id: "c",
          text: "CT scan to identify brain lesions; anticonvulsants for symptom management",
          isCorrect: false,
          explanation: "While imaging aids diagnosis, serology is more specific for JE. CT may be normal early; MRI is better."
        },
        {
          id: "d",
          text: "Lumbar puncture is contraindicated due to increased ICP risk; diagnose clinically",
          isCorrect: false,
          explanation: "LP is safe and important for CSF diagnosis; increases ICP transiently but is therapeutic."
        }
      ],
      category: "PROBLEM_SOLVING",
      bloomLevel: "APPLY",
      difficulty: "HARD",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 9: Viral Encephalitis; Japanese Encephalitis Guidelines"
    },

    // PE-MOD-04-TOP-05: Tuberculosis in Children
    {
      id: "PE-MOD-04-TOP-05-MCQ-001",
      topicCode: "PE-MOD-04-TOP-05",
      stem: "A 4-year-old child presents with persistent cough (4 weeks), low-grade fever, and weight loss. Chest X-ray shows hilar lymphadenopathy with no parenchymal infiltrates. Tuberculin skin test (TST) is 12 mm induration (after 48-72 hours). Which diagnosis is MOST appropriate, and what is the management?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Primary tuberculosis (hilar adenitis) with positive TST; start 4-drug anti-TB therapy (HRZE) for 2 months followed by 4 months (HR)",
          isCorrect: true,
          explanation: "Primary TB in children (age <5-10 years) typically presents with hilar lymphadenopathy WITHOUT parenchymal disease (unlike adult TB). TST ≥5 mm is significant in children (especially <5 years). Clinical features (cough, fever, weight loss, TST+) plus CXR findings confirm diagnosis. Standard treatment: 2 months intensive (HRZE) + 4 months continuation (HR) = 6 months total. H=INH, R=Rifampicin, Z=Pyrazinamide, E=Ethambutol. DOT (directly observed therapy) is essential. Contact investigation critical (source case likely in household). Immunization: BCG at birth provides partial protection; TST conversion indicates recent infection or progression."
        },
        {
          id: "b",
          text: "Latent tuberculosis infection (LTBI); observe without treatment, monitor for progression",
          isCorrect: false,
          explanation: "Child has symptomatic TB (cough, fever, weight loss); this requires active TB treatment, not just LTBI prophylaxis."
        },
        {
          id: "c",
          text: "Non-tuberculous mycobacterial infection; treat with fluoroquinolones",
          isCorrect: false,
          explanation: "While NTM can cause lymphadenitis, the presentation with systemic symptoms and hilar involvement suggests TB."
        },
        {
          id: "d",
          text: "Resolved tuberculosis; no treatment needed",
          isCorrect: false,
          explanation: "Ongoing symptoms require active treatment; disease is not resolved."
        }
      ],
      category: "PROBLEM_SOLVING",
      bloomLevel: "APPLY",
      difficulty: "MEDIUM",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 9: Tuberculosis in Children; RNTCP Guidelines"
    },
    {
      id: "PE-MOD-04-TOP-05-MCQ-002",
      topicCode: "PE-MOD-04-TOP-05",
      stem: "A 2-year-old child is being investigated for TB. Sputum examination is not feasible (child cannot expectorate). Which diagnostic approach is MOST appropriate for confirming TB in this young child, considering recent guidelines?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Gastric aspirate or nasopharyngeal aspirate for mycobacterial culture/NAAT (GeneXpert MTB/RIF); clinical score (symptoms, exposure, CXR, TST) supports diagnosis",
          isCorrect: true,
          explanation: "Young children cannot produce sputum; alternative specimens: gastric aspirate (collect early morning, before pH rises), nasopharyngeal aspirate, or induced sputum (hypertonic saline nebulization). GeneXpert MTB/RIF (WHO-endorsed NAAT) has ~85-90% sensitivity in gastric aspirate; faster than culture. Clinical TB scoring (symptoms weight loss, fever; CXR findings; TST; TB exposure) helps in diagnosis. In India, RNTCP guidelines recommend GeneXpert MTB/RIF as first-line molecular test. Culture remains gold standard but slow (2-8 weeks). Smear microscopy has <20% sensitivity in pediatric TB. Treatment often starts based on clinical score + GeneXpert result without waiting for culture confirmation."
        },
        {
          id: "b",
          text: "Blood culture for mycobacteria; wait for culture results before starting treatment",
          isCorrect: false,
          explanation: "Blood culture has low sensitivity for TB; GeneXpert/gastric aspirate are preferred."
        },
        {
          id: "c",
          text: "Chest X-ray alone is sufficient for diagnosis; treatment starts based on imaging",
          isCorrect: false,
          explanation: "CXR findings alone are not diagnostic; need microbiological confirmation or strong clinical score."
        },
        {
          id: "d",
          text: "Biopsy of lymph node required for definitive diagnosis",
          isCorrect: false,
          explanation: "While biopsy can help, it's not routinely needed; non-invasive methods (GeneXpert, gastric aspirate) are preferred."
        }
      ],
      category: "ANALYSIS",
      bloomLevel: "ANALYZE",
      difficulty: "HARD",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 9: TB in Young Children; RNTCP Pediatric TB Guidelines"
    },
    {
      id: "PE-MOD-04-TOP-05-MCQ-003",
      topicCode: "PE-MOD-04-TOP-05",
      stem: "A 6-year-old child diagnosed with drug-susceptible TB has completed 2 months of HRZE therapy. At the end of intensive phase, CXR shows improvement in hilar lymphadenopathy but mild persistent infiltrates. The child is clinically well, gaining weight. What is the MOST appropriate next step?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Continue to continuation phase (HR for 4 months) as planned; clinical improvement is sufficient to progress",
          isCorrect: true,
          explanation: "After 2 months HRZE (intensive phase), if child shows clinical improvement (weight gain, fever resolution) and radiological improvement (decreasing lymphadenopathy), progression to continuation phase (HR for 4 months) is appropriate. Total duration: 6 months (standard for TB lymphadenitis). No need to repeat CXR at end of intensive phase unless clinical deterioration. Sputum smear (if applicable) should be negative. Adherence monitoring and DOT continuation through phase 2 is critical. Nutritional support should continue. Outcome assessment at end of 6 months determines treatment completion status."
        },
        {
          id: "b",
          text: "Extend intensive phase (HRZE) for additional 2-4 weeks due to persistent infiltrates",
          isCorrect: false,
          explanation: "Radiological clearing takes time after clinical improvement; extending intensive phase is not necessary if child is clinically well."
        },
        {
          id: "c",
          text: "Add fluoroquinolone due to persistent radiological findings; suspect drug resistance",
          isCorrect: false,
          explanation: "Clinical and radiological improvement after 2 months indicates good response; drug resistance is unlikely."
        },
        {
          id: "d",
          text: "Stop all TB drugs; child is cured after 2 months of treatment",
          isCorrect: false,
          explanation: "Full 6-month course is required; stopping early risks relapse."
        }
      ],
      category: "ANALYSIS",
      bloomLevel: "ANALYZE",
      difficulty: "MEDIUM",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 9: TB Treatment Monitoring; RNTCP Guidelines"
    },
    {
      id: "PE-MOD-04-TOP-05-MCQ-004",
      topicCode: "PE-MOD-04-TOP-05",
      stem: "A 3-year-old child with TB is started on standard 4-drug regimen (HRZE). During the 3rd week of treatment, the child develops hepatotoxicity (transaminases >3× ULN) with mild jaundice. Which agent is MOST likely responsible, and what is the immediate management action?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Likely pyrazinamide (hepatotoxic, especially at high doses); stop all drugs, confirm hepatotoxicity, then restart with alternative regimen (4HE for 9 months) avoiding Z",
          isCorrect: true,
          explanation: "Pyrazinamide (Z) is most hepatotoxic anti-TB drug, especially in first weeks. Presentation: elevated transaminases, hyperbilirubinemia. Management: (1) Stop all drugs immediately; (2) Check LFTs daily; (3) If hepatotoxicity confirmed (AST/ALT >3× ULN with symptoms or jaundice), restart regimen without Z: INH, Rifampicin, Ethambutol for 9 months total (instead of HRZE × 2 months + HR × 4 months). (4) Ursodeoxycholic acid may help liver recovery. (5) Rechallenge with Z after LFTs normalize (some guidelines). Alternative: some centers use FQ-based regimen. Close monitoring of LFTs essential throughout treatment."
        },
        {
          id: "b",
          text: "Likely isoniazid; switch to rifampicin monotherapy",
          isCorrect: false,
          explanation: "While INH can cause hepatotoxicity, pyrazinamide is more likely at this timepoint. Monotherapy is not effective for TB."
        },
        {
          id: "c",
          text: "Continue all drugs at current dose; hepatotoxicity will resolve spontaneously",
          isCorrect: false,
          explanation: "Significant hepatotoxicity requires drug adjustment; continuing increases risk of acute liver failure."
        },
        {
          id: "d",
          text: "Add hepatoprotective agent (silymarin) and continue TB drugs",
          isCorrect: false,
          explanation: "Hepatoprotective agents are not proven effective; drug adjustment is primary intervention."
        }
      ],
      category: "PROBLEM_SOLVING",
      bloomLevel: "APPLY",
      difficulty: "HARD",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 9: TB Drug Adverse Effects; RNTCP Management"
    },
    {
      id: "PE-MOD-04-TOP-05-MCQ-005",
      topicCode: "PE-MOD-04-TOP-05",
      stem: "A 5-year-old child with household TB exposure (father recently diagnosed) is asymptomatic with negative CXR but TST conversion (now 8 mm, previously negative 2 months ago). Which management approach reflects current TB prevention guidelines for this child?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Latent TB infection (LTBI); start isoniazid (INH) preventive therapy 10 mg/kg/day for 6 months to prevent progression to active TB",
          isCorrect: true,
          explanation: "TST conversion (8 mm is significant in children <5-10 years) in asymptomatic child with TB exposure indicates LTBI. Risk of progression to active TB in children is high (~30% within 2 years, especially <5 years). INH preventive therapy (IPT): 10 mg/kg once daily for 6 months (some use 9 months in younger children) reduces progression risk by ~70%. Criteria for LTBI treatment: TST ≥5 mm in children <5 years with TB exposure OR TST ≥10 mm + CXR findings without active TB. INH monotherapy is effective, safe, and recommended by WHO/Indian TB guidelines. Adherence monitoring essential. Before starting IPT, exclude active TB (clinical assessment, CXR)."
        },
        {
          id: "b",
          text: "No treatment needed; TST conversion alone doesn't indicate disease requiring treatment",
          isCorrect: false,
          explanation: "TST conversion in young children with TB exposure requires preventive therapy to prevent progression."
        },
        {
          id: "c",
          text: "Start full 4-drug TB treatment (HRZE) immediately to prevent active TB development",
          isCorrect: false,
          explanation: "Full TB treatment is for active disease, not LTBI. IPT with INH monotherapy is sufficient for LTBI."
        },
        {
          id: "d",
          text: "Repeat TST after 3 months to confirm conversion before starting treatment",
          isCorrect: false,
          explanation: "TST conversion + exposure is sufficient for LTBI diagnosis; repeating delays preventive therapy."
        }
      ],
      category: "ANALYSIS",
      bloomLevel: "ANALYZE",
      difficulty: "HARD",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 9: LTBI & TB Prevention; WHO Guidelines on LTBI"
    },

    // PE-MOD-05-TOP-03: Childhood Asthma & Croup
    {
      id: "PE-MOD-05-TOP-03-MCQ-001",
      topicCode: "PE-MOD-05-TOP-03",
      stem: "A 5-year-old child with recurrent wheezing (4 episodes in past 6 months), triggered by viral infections and exercise, is brought for assessment. The child has no symptoms between episodes. Which diagnosis is MOST appropriate, and what is the initial management?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Persistent asthma (intermittent); start low-dose inhaled corticosteroid (ICS) as controller + short-acting beta-2 agonist (SABA) as reliever",
          isCorrect: true,
          explanation: "4 episodes in 6 months = intermittent persistent asthma (≥2 episodes/month, or ≥1 episode/week if counting mild episodes). IAP/GINA classification: needs controller therapy. First-line: low-dose ICS (beclomethasone 100-200 mcg daily or equivalent) which reduces exacerbations by ~50%. Reliever: SABA (salbutamol inhaler) used PRN. Address triggers (viral infections → prophylaxis; exercise → pre-exercise SABA). Spacer use essential in young children for better deposition. Avoid SABA monotherapy as controller. Goal: control symptoms, minimize exacerbations, normal activity including exercise. Review technique and adherence at follow-up."
        },
        {
          id: "b",
          text: "Intermittent asthma; SABA reliever only, no controller therapy needed",
          isCorrect: false,
          explanation: "4 episodes in 6 months warrants controller therapy; SABA-only approach risks exacerbations."
        },
        {
          id: "c",
          text: "Exercise-induced bronchoconstriction; no regular treatment, use SABA before exercise only",
          isCorrect: false,
          explanation: "While exercise is trigger, recurrent viral-triggered episodes indicate asthma requiring controller therapy."
        },
        {
          id: "d",
          text: "Chronic bronchitis; treat with regular antibiotics and bronchodilators",
          isCorrect: false,
          explanation: "Recurrent wheezing without fever/sputum suggests asthma, not chronic bronchitis."
        }
      ],
      category: "PROBLEM_SOLVING",
      bloomLevel: "APPLY",
      difficulty: "MEDIUM",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 10: Childhood Asthma; IAP Asthma Guidelines"
    },
    {
      id: "PE-MOD-05-TOP-03-MCQ-002",
      topicCode: "PE-MOD-05-TOP-03",
      stem: "A 3-year-old child with cough and low-grade fever for 2 days develops barky cough (seal-like, harsh), inspiratory stridor, and slight respiratory distress at 2 AM. The child is restless and anxious. Which diagnosis is MOST likely, and what is the first-line management?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Croup (laryngotracheobronchitis); give dexamethasone 0.6 mg/kg PO single dose + nebulized epinephrine (1:1000, 0.5 mL/kg) if moderate-severe stridor/distress",
          isCorrect: true,
          explanation: "Croup: viral laryngeal inflammation (usually parainfluenza). Classic presentation: barky seal-like cough, inspiratory stridor, low-grade fever, evening/night onset. Severity by stridor (inspiratory = mild, biphasic = moderate, at rest = severe) + respiratory distress. Management: Dexamethasone 0.6 mg/kg PO (single dose; cheaper than IV) reduces symptoms by ~20 hours. For moderate-severe: add nebulized epinephrine (1:1000 adrenaline, 0.5 mL/kg max 5 mL, onset 10-15 min, duration ~2 hours). Admit if severe with significant distress/cyanosis. Most children recover with outpatient management + supportive care (humidify room, fluids). Antibiotics not indicated (viral disease)."
        },
        {
          id: "b",
          text: "Epiglottitis; immediate intubation and antibiotics (ceftriaxone)",
          isCorrect: false,
          explanation: "Epiglottitis presents with rapid onset severe dysphagia, drooling, 'hot potato' voice; stridor is expiratory. Croup has inspiratory stridor and barky cough."
        },
        {
          id: "c",
          text: "Bacterial tracheitis; broad-spectrum antibiotics and airway management",
          isCorrect: false,
          explanation: "Bacterial tracheitis presents with high fever, toxic appearance, purulent sputum; croup has low-grade fever, less toxicity."
        },
        {
          id: "d",
          text: "Foreign body aspiration; emergency endoscopy and removal",
          isCorrect: false,
          explanation: "No history of choking/FBA; croup presentation with viral prodrome is clear."
        }
      ],
      category: "PROBLEM_SOLVING",
      bloomLevel: "APPLY",
      difficulty: "HARD",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 10: Croup & Laryngitis; IAP Guidelines"
    },
    {
      id: "PE-MOD-05-TOP-03-MCQ-003",
      topicCode: "PE-MOD-05-TOP-03",
      stem: "A 7-year-old child with acute asthma exacerbation presents with severe dyspnea, cannot speak full sentences, accessory muscle use, and peak expiratory flow (PEF) 40% of predicted. SpO₂ is 88% on room air. Which classification and management approach is MOST appropriate?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Severe exacerbation (near-fatal); give IV salbutamol (15 mcg/kg loading dose) ± IV magnesium sulfate (25-50 mg/kg) + systemic corticosteroids + oxygen to maintain SpO₂ ≥90%",
          isCorrect: true,
          explanation: "Severe exacerbation criteria: inability to speak full sentences, significant accessory muscle use, PEF 40% predicted, SpO₂ <90%. This child meets criteria for severe/near-fatal asthma. Management: (1) High-flow oxygen (target SpO₂ >90%, <95% to avoid CO₂ retention); (2) IV salbutamol (15 mcg/kg bolus, repeat 15 min if poor response, then continuous infusion); (3) IV magnesium sulfate (25-50 mg/kg single dose) for bronchodilation; (4) Systemic corticosteroids (IV methylprednisolone 2-4 mg/kg); (5) Consider IV aminophylline if inadequate response. Admit to ICU; prepare for intubation if worsening (rising CO₂, decreased air entry, exhaustion). Assess for triggers (allergen exposure, infection, poor compliance)."
        },
        {
          id: "b",
          text: "Moderate exacerbation; nebulized salbutamol + oral corticosteroids, observe for 2 hours",
          isCorrect: false,
          explanation: "SpO₂ 88% and PEF 40% indicate severe exacerbation requiring IV therapy and admission."
        },
        {
          id: "c",
          text: "Mild exacerbation; oral salbutamol + home observation",
          isCorrect: false,
          explanation: "This is severe exacerbation; discharge without admission is dangerous."
        },
        {
          id: "d",
          text: "Severe asthma + anxiety; give sedatives before bronchodilators",
          isCorrect: false,
          explanation: "Sedatives can depress respiration; avoid. Treat asthma first; respiratory distress will cause anxiety."
        }
      ],
      category: "PROBLEM_SOLVING",
      bloomLevel: "APPLY",
      difficulty: "HARD",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 10: Acute Asthma Management; GINA/IAP Guidelines"
    },
    {
      id: "PE-MOD-05-TOP-03-MCQ-004",
      topicCode: "PE-MOD-05-TOP-03",
      stem: "A 4-year-old child with well-controlled asthma on low-dose ICS inhaler has no symptoms 95% of the time but has exercise-induced wheezing during play. Peak flow is normal. Which step represents MOST appropriate management adjustment?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Continue current ICS dose; add SABA inhaler 15 minutes before exercise for exercise-induced bronchoconstriction prevention",
          isCorrect: true,
          explanation: "Exercise-induced bronchoconstriction (EIB) in otherwise well-controlled asthma: use pre-exercise SABA (salbutamol) 15 minutes before activity (provides 2-4 hour protection). No need to escalate controller therapy if overall control is excellent (95% symptom-free, normal PEF). SABA alone is effective prevention in EIB. Alternative: daily LTRA (leukotriene receptor antagonist) if EIB is frequent despite SABA, but not first-line. Ensure proper inhaler technique. Consider environmental triggers (pollution, cold air). Regular exercise should be encouraged despite asthma."
        },
        {
          id: "b",
          text: "Escalate ICS to medium dose + LTRA for better control of exercise symptoms",
          isCorrect: false,
          explanation: "Overall asthma control is excellent; escalating controller not indicated. SABA pre-exercise is sufficient."
        },
        {
          id: "c",
          text: "Stop ICS; use SABA only for symptom relief",
          isCorrect: false,
          explanation: "Stopping ICS risks loss of current control; ICS prevents exacerbations."
        },
        {
          id: "d",
          text: "Restrict exercise to prevent EIB; avoid running and sports",
          isCorrect: false,
          explanation: "Exercise should be encouraged; management allows full activity with pre-exercise SABA."
        }
      ],
      category: "ANALYSIS",
      bloomLevel: "ANALYZE",
      difficulty: "MEDIUM",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 10: Exercise-Induced Bronchoconstriction"
    },
    {
      id: "PE-MOD-05-TOP-03-MCQ-005",
      topicCode: "PE-MOD-05-TOP-03",
      stem: "A 6-year-old child on ICS inhaler (beclomethasone 200 mcg daily) for 8 months develops oral thrush (white plaques on tongue/palate). The child is immunocompetent with no other risk factors. What is the MOST appropriate management to prevent recurrence?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Treat acute thrush with nystatin oral suspension; switch to ICS delivery via spacer + advise mouth rinsing/gargling with water after each dose",
          isCorrect: true,
          explanation: "ICS-related oral candidiasis (thrush) occurs due to local oropharyngeal deposition of ICS, suppressing local fungal immunity. Management: (1) Treat active thrush with nystatin oral suspension (100,000 U/mL, 1 mL QID × 7 days); (2) PREVENTION: Use spacer (reduces oropharyngeal deposition from ~25% to ~5%); (3) Rinse mouth/gargle with water after each ICS dose; (4) Continue ICS (benefits outweigh thrush risk, which is reversible). Do NOT stop ICS. Incidence ~5-10% with regular ICS use without spacer; nearly eliminated with spacer + rinsing. Immunocompromised children may need systemic antifungal (fluconazole)."
        },
        {
          id: "b",
          text: "Stop ICS immediately; switch to LTRA monotherapy for asthma control",
          isCorrect: false,
          explanation: "ICS is more effective than LTRA; thrush is preventable with proper technique. Don't stop ICS."
        },
        {
          id: "c",
          text: "Continue ICS without modification; thrush is inconsequential side effect",
          isCorrect: false,
          explanation: "Thrush should be treated and prevented; simple measures (spacer, rinsing) prevent recurrence."
        },
        {
          id: "d",
          text: "Reduce ICS dose to minimize thrush risk",
          isCorrect: false,
          explanation: "Reducing ICS risks asthma control loss. Proper technique (spacer + rinsing) prevents thrush without dose reduction."
        }
      ],
      category: "PROBLEM_SOLVING",
      bloomLevel: "APPLY",
      difficulty: "MEDIUM",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 10: ICS Side Effects & Prevention"
    },

    // Remaining topics PE-MOD-05-TOP-04 through PE-MOD-09-TOP-05
    // PE-MOD-05-TOP-04: Pediatric Dermatology (5 MCQs)
    {
      id: "PE-MOD-05-TOP-04-MCQ-001",
      topicCode: "PE-MOD-05-TOP-04",
      stem: "A 3-year-old child presents with clustered, painful vesicles on the lower leg in a dermatomal distribution, preceded by 2-3 days of itching and burning. Fever is absent. Which diagnosis is MOST likely, and what is the appropriate management?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Herpes zoster (shingles) in immunocompetent child; treat with oral acyclovir 20 mg/kg QID × 7 days to reduce vesicle formation and post-herpetic neuralgia",
          isCorrect: true,
          explanation: "Herpes zoster: reactivation of latent varicella-zoster virus (VZV). Classic presentation: dermatomal vesicular rash with prodromal pain/burning. Usually immunocompetent (rare in children; suggests previous varicella or underlying immunodeficiency). Treatment: oral acyclovir 20 mg/kg QID × 7 days (or IV if disseminated/immunocompromised). Antivirals reduce duration and prevent dissemination; effective if started early (<72 hours). Pain management with analgesics. Post-herpetic neuralgia is uncommon in children. Reassurance needed; condition is self-limited."
        },
        {
          id: "b",
          text: "Impetigo; treat with topical mupirocin ointment ± oral antibiotics",
          isCorrect: false,
          explanation: "Impetigo is non-vesicular, non-dermatomal; herpetic presentation is different."
        },
        {
          id: "c",
          text: "Chicken pox (varicella); supportive care only, no antiviral needed",
          isCorrect: false,
          explanation: "While VZV can cause varicella, dermatomal distribution and age (3 years should have had varicella or vaccine) suggest zoster."
        },
        {
          id: "d",
          text: "Contact dermatitis; avoid allergen and use topical corticosteroids",
          isCorrect: false,
          explanation: "Vesicular rash with prodrome and dermatomal distribution is not consistent with contact dermatitis."
        }
      ],
      category: "PROBLEM_SOLVING",
      bloomLevel: "APPLY",
      difficulty: "MEDIUM",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 11: Herpes Zoster; Nelson's Pediatrics, Varicella-Zoster Infections"
    },
    {
      id: "PE-MOD-05-TOP-04-MCQ-002",
      topicCode: "PE-MOD-05-TOP-04",
      stem: "A 2-year-old child presents with intense pruritus, erythematous vesicles, and lichenification on the flexural surfaces (neck, antecubital/popliteal fossae). History of eczema since infancy with family history of atopy. Which diagnosis and management approach is MOST appropriate?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Atopic dermatitis (AD); treat with emollients as base therapy + topical corticosteroids (low-moderate potency) for flares, minimize irritants/allergen exposure",
          isCorrect: true,
          explanation: "Atopic dermatitis: chronic inflammatory skin condition. Risk factors: early infancy onset, family history atopy, filaggrin mutations. Features: intense pruritus, lichenification, flexural distribution in older children (antecubital/popliteal fossae, neck). Management: (1) Emollients (cetaphil, coconut oil) as foundation therapy (apply to damp skin, multiple times daily); (2) Topical corticosteroids (hydrocortisone 1% for face, desonide for body) for acute flares; (3) Identify/avoid triggers (soaps, detergents, allergens); (4) Prevent scratching (short nails, soft clothing, keep cool); (5) Consider topical calcineurin inhibitors if extensive/steroid-sparing needed. Systemic steroids are avoided chronically. Prognosis: many children improve by school-age with proper management."
        },
        {
          id: "b",
          text: "Seborrheic dermatitis; treat with selenium sulfide shampoo",
          isCorrect: false,
          explanation: "Seborrheic dermatitis affects scalp/face primarily; flexural involvement suggests atopic dermatitis."
        },
        {
          id: "c",
          text: "Contact dermatitis; identify allergen and apply aggressive topical steroids",
          isCorrect: false,
          explanation: "Contact dermatitis is acute/localized; this chronic flexural distribution suggests atopy."
        },
        {
          id: "d",
          text: "Fungal infection (tinea); treat with systemic antifungals",
          isCorrect: false,
          explanation: "Fungal infection doesn't explain intense pruritus/family history; not the primary diagnosis."
        }
      ],
      category: "ANALYSIS",
      bloomLevel: "ANALYZE",
      difficulty: "MEDIUM",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 11: Atopic Dermatitis; IAP Dermatology Guidelines"
    },
    {
      id: "PE-MOD-05-TOP-04-MCQ-003",
      topicCode: "PE-MOD-05-TOP-04",
      stem: "A 5-year-old child presents with multiple hypopigmented, hypoesthetic macules on the trunk and arms. Mother reports noticing these patches gradually enlarging over months. On examination, peripheral nerves are not thickened. Which diagnosis should be MOST carefully excluded before confirming benign vitiligo?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Tuberculoid leprosy (paucibacillary form); perform careful neurological examination + slit-skin smear + intradermal lepromin test if suspicion high",
          isCorrect: true,
          explanation: "Leprosy is still endemic in India. Tuberculoid (TT) leprosy presents with few (1-5) hypopigmented, anesthetic (key feature) macules with ill-defined borders. CRITICAL: Examine for nerve thickening (especially ulnar, posterior tibial); test sensory loss (hypoanesthesia is diagnostic clue). Differential from vitiligo: leprosy has anesthesia + nerve involvement; vitiligo has normal sensation. Diagnosis: slit-skin smear (microscopy for acid-fast bacilli), lepromin test (intradermal Mycobacterium leprae antigen). Early diagnosis crucial for treatment and preventing disability. Treatment: multidrug therapy (MDT) per WHO guidelines (12 months for TT). Family screening needed. In India, any child with hypopigmented patch + anesthesia = consider leprosy until proven otherwise."
        },
        {
          id: "b",
          text: "Simple vitiligo; no special testing needed, reassure parents",
          isCorrect: false,
          explanation: "While vitiligo is possible, anesthesia/hypopigmented patches in Indian child warrant leprosy exclusion first."
        },
        {
          id: "c",
          text: "Pityriasis versicolor; treat with topical antifungals",
          isCorrect: false,
          explanation: "Pityriasis versicolor doesn't explain anesthesia or progressive large macules."
        },
        {
          id: "d",
          text: "Ash-leaf macules from tuberous sclerosis; screen for other features",
          isCorrect: false,
          explanation: "While ash-leaf spots occur in TS, they appear at birth. This progressive presentation + anesthesia suggests leprosy."
        }
      ],
      category: "PROBLEM_SOLVING",
      bloomLevel: "APPLY",
      difficulty: "HARD",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 11: Leprosy in Children; Nelson's Pediatrics, Hypopigmented Lesions"
    },
    {
      id: "PE-MOD-05-TOP-04-MCQ-004",
      topicCode: "PE-MOD-05-TOP-04",
      stem: "A 4-year-old child with fair skin presents with silvery-white scale on extensor surfaces (elbows, knees) and scalp. The lesions are symmetric and well-demarcated. History of similar lesions in mother and maternal grandmother. Which diagnosis is MOST likely, and which genetic pattern is suggested?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Psoriasis; strong family history suggests multifactorial inheritance (HLA-associated); treat with emollients, topical corticosteroids, and consider phototherapy if extensive",
          isCorrect: true,
          explanation: "Psoriasis: chronic inflammatory skin disorder. Classic presentation: well-demarcated erythematous plaques with silvery scale, symmetric distribution (extensor surfaces: elbows, knees, scalp, nails). Genetics: multifactorial with strong HLA association (HLA-Cw6, HLA-A2, HLA-B17). Family history positive (40-90% of patients have affected relatives). Triggers: infection (streptococcal), stress, injury, medications. Management: (1) Emollients; (2) Topical corticosteroids (Class III-IV strength for body, Class VI-VII for scalp); (3) Topical calcineurin inhibitors (steroid-sparing); (4) Phototherapy (UVB) for widespread disease; (5) Avoid triggers. Childhood psoriasis has variable prognosis; some improve, others persist into adulthood."
        },
        {
          id: "b",
          text: "Eczema; treat with emollients and oral antihistamines",
          isCorrect: false,
          explanation: "Eczema presents with pruritus and flexural distribution; this well-demarcated plaque with scale suggests psoriasis."
        },
        {
          id: "c",
          text: "Pityriasis rosea; self-limited viral-associated exanthem, observation only",
          isCorrect: false,
          explanation: "Pityriasis rosea is acute; this chronic symmetric distribution with family history suggests psoriasis."
        },
        {
          id: "d",
          text: "Tinea corporis; treat with topical antifungals",
          isCorrect: false,
          explanation: "Ringworm lesions are annular/asymmetric; psoriasis is symmetric with different scale characteristics."
        }
      ],
      category: "ANALYSIS",
      bloomLevel: "ANALYZE",
      difficulty: "MEDIUM",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 11: Psoriasis in Children; IAP Dermatology Guidelines"
    },
    {
      id: "PE-MOD-05-TOP-04-MCQ-005",
      topicCode: "PE-MOD-05-TOP-04",
      stem: "A 3-year-old child presents with circular red lesions with raised borders and central clearing on the trunk. The lesions are mildly pruritic. Microscopy of scales mounted in KOH shows branching hyphae. Which antifungal agent is MOST appropriate for management?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Topical imidazole (clotrimazole 1% cream) applied to lesion + 2 cm margin BID for 2-4 weeks; also treat any contact surface (undergarments, bedding)",
          isCorrect: true,
          explanation: "Tinea corporis (ringworm): dermatophyte infection (usually Trichophyton/Microsporum). Presentation: annular lesion with raised erythematous border and central clearing, KOH mount shows branching hyphae. Management: (1) Topical imidazole (clotrimazole, miconazole, ketoconazole) applied to lesion + 2 cm surrounding normal skin, BID for 2-4 weeks; (2) Continue 1-2 weeks beyond apparent healing; (3) Avoid occlusion; (4) Wash contaminated clothing/bedding. Systemic antifungal (terbinafine, griseofulvin) reserved for extensive disease or failed topical therapy. Most cases respond well to topical agents. Prevent through good hygiene, avoid animal/human contact if zoophilic source."
        },
        {
          id: "b",
          text: "Systemic griseofulvin 25 mg/kg/day for 6 weeks",
          isCorrect: false,
          explanation: "Systemic antifungals are second-line for limited lesions; topical agents are first-line."
        },
        {
          id: "c",
          text: "Oral terbinafine only; no topical therapy needed",
          isCorrect: false,
          explanation: "Topical agents are preferred for localized tinea corporis."
        },
        {
          id: "d",
          text: "Topical corticosteroid cream to reduce inflammation",
          isCorrect: false,
          explanation: "Steroids without antifungal may worsen infection (tinea incognito); use antifungal primarily."
        }
      ],
      category: "PROBLEM_SOLVING",
      bloomLevel: "APPLY",
      difficulty: "MEDIUM",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 11: Tinea Infections; IAP Antifungal Guidelines"
    },

    // PE-MOD-06-TOP-03: AGN & UTI in Children
    {
      id: "PE-MOD-06-TOP-03-MCQ-001",
      topicCode: "PE-MOD-06-TOP-03",
      stem: "A 6-year-old child presents with sudden onset edema of face and legs, tea-colored urine, and mild hypertension (BP 110/75 mmHg). Urinalysis shows 3+ proteinuria and RBC casts. Serum creatinine is normal. Which diagnosis is MOST likely, and what is the initial management?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Acute post-streptococcal glomerulonephritis (APSGN); supportive care with fluid/salt restriction, monitor kidney function and BP, antibiotic for streptococcal infection if present",
          isCorrect: true,
          explanation: "APSGN: immune-complex glomerulonephritis following group A streptococcal infection (pharyngitis/pyoderma). Classic presentation: sudden edema, hematuria (tea-colored urine), hypertension, normal-to-mildly elevated creatinine. Urinalysis: dysmorphic RBCs, RBC casts, protein. Serology: elevated anti-streptolysin O (ASO) titer, low C3 (returns to normal in 6-8 weeks). Management: (1) Fluid restriction if edema/HTN; (2) Dietary salt restriction; (3) Diuretics (furosemide) for symptomatic edema; (4) ACE inhibitor if HTN; (5) Treat concurrent streptococcal infection (penicillin if positive throat culture); (6) Monitor creatinine/electrolytes. Prognosis: excellent in children; 95% recover completely within 1-2 years."
        },
        {
          id: "b",
          text: "IgA nephropathy; requires kidney biopsy for confirmation and aggressive immunosuppression",
          isCorrect: false,
          explanation: "While IgAN can present similarly, lack of streptococcal trigger history and typical APSGN presentation make APSGN more likely initially."
        },
        {
          id: "c",
          text: "Membranoproliferative GN; start high-dose corticosteroids immediately",
          isCorrect: false,
          explanation: "MPGN is rarer; APSGN is most common acute GN in children."
        },
        {
          id: "d",
          text: "Acute kidney injury from prerenal cause; give IV fluids aggressively",
          isCorrect: false,
          explanation: "Urine findings (casts, hematuria) indicate glomerular disease, not prerenal etiology."
        }
      ],
      category: "PROBLEM_SOLVING",
      bloomLevel: "APPLY",
      difficulty: "MEDIUM",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 12: Acute Glomerulonephritis"
    },
    {
      id: "PE-MOD-06-TOP-03-MCQ-002",
      topicCode: "PE-MOD-06-TOP-03",
      stem: "A 4-year-old girl presents with dysuria, frequency, and abdominal pain. Urinalysis shows leukocyte esterase positive, nitrites positive, 10 WBC/hpf, and few bacteria. Urine culture is pending. Which diagnosis and management is MOST appropriate?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Acute uncomplicated urinary tract infection (UTI); start empiric antibiotic (amoxicillin-clavulanate or cephalexin) while awaiting culture, and obtain renal ultrasound to screen for structural abnormalities",
          isCorrect: true,
          explanation: "Uncomplicated UTI diagnosis: dysuria, frequency, pyuria (WBC >5/hpf), bacteria/leukocyte esterase. This 4-year-old girl fits typical profile. Management: (1) Empiric antibiotic pending culture (amoxicillin-clavulanate 25-45 mg/kg/day OR cephalexin 25-50 mg/kg/day) × 7-10 days; (2) Encourage fluids; (3) Ultrasound renal system to detect hydronephrosis, renal scarring, VUR risk (standard in first pediatric UTI, especially girls <5 years); (4) Voiding cystourethrogram (VCUG) if ultrasound abnormality or recurrent UTI. Single antibiotic course for first UTI; long-term prophylaxis reserved for recurrent (>2) UTIs or structural abnormality. Trimethoprim-sulfamethoxazole also effective but increasing resistance."
        },
        {
          id: "b",
          text: "Asymptomatic bacteriuria; no antibiotic needed, observe",
          isCorrect: false,
          explanation: "Child is symptomatic (dysuria, frequency, pain); this is UTI requiring treatment."
        },
        {
          id: "c",
          text: "Cystitis only; avoid antibiotics to prevent resistance",
          isCorrect: false,
          explanation: "While symptoms suggest cystitis, antibiotics are indicated for symptomatic UTI."
        },
        {
          id: "d",
          text: "Pyelonephritis; admit and give IV ceftriaxone",
          isCorrect: false,
          explanation: "No fever or costovertebral angle tenderness; uncomplicated UTI management is appropriate."
        }
      ],
      category: "ANALYSIS",
      bloomLevel: "ANALYZE",
      difficulty: "MEDIUM",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 12: Urinary Tract Infections; IAP UTI Guidelines"
    },
    {
      id: "PE-MOD-06-TOP-03-MCQ-003",
      topicCode: "PE-MOD-06-TOP-03",
      stem: "A 3-year-old boy with fever (39.5°C), costovertebral angle tenderness, and dysuria is suspected to have acute pyelonephritis. Urinalysis shows WBC casts and positive leukocyte esterase. Which management approach is MOST appropriate?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Admit and start IV ceftriaxone (50-80 mg/kg/day) or gentamicin + ampicillin pending urine culture results",
          isCorrect: true,
          explanation: "Acute pyelonephritis (fever, CVAT, WBC casts) requires hospitalization and IV therapy. Empiric regimen: (1) Ceftriaxone 50-80 mg/kg/day Q12H (broad-spectrum, good renal penetration) OR (2) Gentamicin + ampicillin (covers gram-positive and gram-negative). Culture-guided de-escalation once sensitivities available. Admit because: fever, toxemia, risk for urosepsis, need for IV hydration. Switch to oral antibiotics (after 48-72 hours afebrile) to complete 10-14 days total. After resolution, imaging (ultrasound first, VCUG if indicated) to evaluate for VUR/structural abnormality. Long-term prophylaxis (nitrofurantoin) often given pending imaging results."
        },
        {
          id: "b",
          text: "Outpatient oral antibiotics; no admission needed",
          isCorrect: false,
          explanation: "Acute pyelonephritis requires admission and IV therapy."
        },
        {
          id: "c",
          text: "Supportive care only; antibiotics worsen symptoms",
          isCorrect: false,
          explanation: "Antibiotics are essential for treatment; fever/CVAT are indications for treatment."
        },
        {
          id: "d",
          text: "Nephrostomy placement for drainage before starting antibiotics",
          isCorrect: false,
          explanation: "Drainage is reserved for obstructed pyelonephritis; uncomplicated cases don't need intervention."
        }
      ],
      category: "PROBLEM_SOLVING",
      bloomLevel: "APPLY",
      difficulty: "HARD",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 12: Pyelonephritis; Nelson's Pediatrics, Acute Kidney Infection"
    },
    {
      id: "PE-MOD-06-TOP-03-MCQ-004",
      topicCode: "PE-MOD-06-TOP-03",
      stem: "A 5-year-old girl with history of 3 UTIs in 6 months (all treated successfully) now presents asymptomatic with urinalysis showing trace pyuria. The child is on prophylactic nitrofurantoin. Based on recurrent UTI workup findings, a VCUG shows gross vesicoureteral reflux (grade III-IV). What is the MOST appropriate next management step?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Continue prophylactic antibiotics (long-term, 6-12 months or until imaging reassessment shows reflux resolution) + ensure adequate hydration/voiding habits + consider urology referral for VUR grading assessment",
          isCorrect: true,
          explanation: "Vesicoureteral reflux (VUR) high-grade (III-IV) with recurrent UTI management: (1) Long-term prophylaxis with nitrofurantoin 1-2 mg/kg/day (or TMP-SMX alternative) for 6-12 months or until reflux resolves (many children resolve VUR spontaneously, especially low-grade); (2) Regular monitoring with ultrasound for hydronephrosis/scarring; (3) Urology referral for assessment (some high-grade reflux may benefit from surgical correction, though medical management is often effective); (4) Encourage complete voiding, regular toileting, adequate hydration; (5) Treat any breakthrough UTIs. Imaging (DMSA scan) may assess for renal scarring. Goal: prevent UTI recurrence and preserve renal function. Surgical repair (ureteral reimplantation) considered if: breakthrough UTIs despite prophylaxis, non-compliance, significant renal scarring, reflux not resolving."
        },
        {
          id: "b",
          text: "Stop prophylaxis; grade III-IV reflux should be surgically corrected immediately",
          isCorrect: false,
          explanation: "Medical management is first-line even for high-grade VUR; surgery is not routine."
        },
        {
          id: "c",
          text: "Switch from nitrofurantoin to cephalosporin prophylaxis",
          isCorrect: false,
          explanation: "Nitrofurantoin is effective for VUR prophylaxis; no need to switch."
        },
        {
          id: "d",
          text: "Discharge without prophylaxis; reflux in asymptomatic child doesn't need treatment",
          isCorrect: false,
          explanation: "VUR with history of recurrent UTI requires prophylaxis to prevent scarring."
        }
      ],
      category: "ANALYSIS",
      bloomLevel: "ANALYZE",
      difficulty: "HARD",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 12: Vesicoureteral Reflux Management"
    },
    {
      id: "PE-MOD-06-TOP-03-MCQ-005",
      topicCode: "PE-MOD-06-TOP-03",
      stem: "A 2-year-old girl presenting with fever and poor feeding is found to have pyuria on urinalysis. However, the child is unable to provide clean-catch urine specimen reliably. Which specimen collection method is MOST appropriate for accurate UTI diagnosis in this age group?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Catheterized urine specimen (straight catheterization via urethra) or suprapubic aspiration (SPA) for definitive culture-based diagnosis",
          isCorrect: true,
          explanation: "Children <4 years unable to provide clean-catch urine specimens accurately. Gold-standard specimen collection: (1) Straight catheterization (sterile Foley catheter, single pass) - safest, least traumatic; (2) Suprapubic aspiration (needle through abdominal wall above pubic symphysis into bladder) - most sterile but requires skill/cooperation. Both methods eliminate contamination from perineal flora. Urine bag specimens (non-invasive but contaminated) acceptable for screening only if positive cultures with consistent symptoms. For definitive diagnosis in symptomatic young children, catheterized/SPA specimens are standard. Culture >10⁴ CFU/mL from catheterized specimen, any growth from SPA is significant. Sensitivity/specificity of catheterized specimen >95%."
        },
        {
          id: "b",
          text: "Urine collection bag specimen; culture is still reliable",
          isCorrect: false,
          explanation: "Bag specimens have high contamination rate; not appropriate for definitive diagnosis in young children."
        },
        {
          id: "c",
          text: "Diaper pad specimen; absorbent pad culture is accurate",
          isCorrect: false,
          explanation: "Diaper pad methods are unreliable and not standard."
        },
        {
          id: "d",
          text: "Defer urine culture; treat empirically based on symptoms",
          isCorrect: false,
          explanation: "Culture is important for diagnosis and antibiotic guidance; specimen quality matters."
        }
      ],
      category: "PROBLEM_SOLVING",
      bloomLevel: "APPLY",
      difficulty: "HARD",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 12: UTI Diagnosis in Young Children; IAP Guidelines"
    },

    // PE-MOD-07-TOP-02: Cerebral Palsy (5 MCQs)
    {
      id: "PE-MOD-07-TOP-02-MCQ-001",
      topicCode: "PE-MOD-07-TOP-02",
      stem: "A 18-month-old child born with severe birth asphyxia (Apgar 2) presents with spasticity in lower limbs, normal upper limb function, and intact cognition. The child ambulates with a stiff-legged gait. Which type of cerebral palsy is MOST consistent with this clinical presentation?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Spastic diplegia (affects lower limbs > upper limbs); results from periventricular white matter injury typical in premature birth or perinatal asphyxia",
          isCorrect: true,
          explanation: "Spastic diplegia: bilateral lower limb spasticity > upper limbs. Gait: characteristic 'scissors' or stiff-legged pattern. Typical pattern: spasticity in hip/knee extensors, ankle plantarflexors; upper limbs minimally affected. Associated with: periventricular leukomalacia (PVL) from hypoxic-ischemic injury, especially in premature infants and severe asphyxia. Cognition usually normal (unlike quadriplegia). Hip adductors often involved (scissoring gait). Management: physical therapy, orthopedic bracing, botulinum toxin for spasticity, orthopedic surgery for contractures/bone deformities. Early intervention critical for motor development and preventing contractures."
        },
        {
          id: "b",
          text: "Spastic hemiplegia; unilateral weakness and spasticity",
          isCorrect: false,
          explanation: "Hemiplegia involves one side (arm + leg); this child has bilateral lower limb involvement."
        },
        {
          id: "c",
          text: "Spastic quadriplegia; all four limbs severely affected with cognitive impairment",
          isCorrect: false,
          explanation: "Quadriplegia affects all limbs severely; this child has normal upper limbs and intact cognition."
        },
        {
          id: "d",
          text: "Ataxic cerebral palsy; incoordination and balance abnormalities",
          isCorrect: false,
          explanation: "Ataxic CP presents with incoordination; spasticity is not primary feature here."
        }
      ],
      category: "ANALYSIS",
      bloomLevel: "ANALYZE",
      difficulty: "MEDIUM",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 13: Cerebral Palsy; Nelson's Pediatrics, CP Classification"
    },
    {
      id: "PE-MOD-07-TOP-02-MCQ-002",
      topicCode: "PE-MOD-07-TOP-02",
      stem: "A 4-year-old child with spastic cerebral palsy presents with hip flexion contracture, knee flexion deformity, and progressive ankle equinus causing difficulty walking. Which intervention is MOST important to prevent further disability and maintain ambulation?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Intensive physiotherapy (stretching, range-of-motion exercises) + botulinum toxin injections to spastic muscles + orthotic devices (AFO, knee-ankle orthosis) to prevent contractures and maintain function",
          isCorrect: true,
          explanation: "Cerebral palsy management goals: prevent contractures, maintain/improve function, reduce pain, enable ambulation. Multimodal approach: (1) Physiotherapy (stretching, ROM, strengthening) - cornerstone of management; (2) Botulinum toxin (Botox) injections into spastic muscles (iliopsoas, rectus femoris, gastrocnemius) reduce spasticity × 3-4 months, allowing better ROM and function; (3) Orthotic devices (ankle-foot orthosis = AFO for foot equinus, knee-ankle-foot orthosis for knee/hip involvement) provide stability and prevent contractures; (4) Medications (baclofen, diazepam) for generalized spasticity; (5) Surgical tendon lengthening/transfer if contractures severe and fixed. Timing: early intervention (0-3 years) is critical for neuroplasticity; continue through childhood."
        },
        {
          id: "b",
          text: "Surgical tendon lengthening immediately to correct contractures",
          isCorrect: false,
          explanation: "Surgery is reserved for fixed contractures after exhausting conservative measures; not first-line."
        },
        {
          id: "c",
          text: "Oral baclofen monotherapy to reduce spasticity",
          isCorrect: false,
          explanation: "While baclofen helps, physiotherapy + targeted interventions (Botox, orthosis) are more effective for functional goals."
        },
        {
          id: "d",
          text: "Immobilization in braces 24 hours/day to prevent movement-induced contractures",
          isCorrect: false,
          explanation: "Full-time immobilization worsens function; AFO worn during standing/walking, but active movement is encouraged."
        }
      ],
      category: "PROBLEM_SOLVING",
      bloomLevel: "APPLY",
      difficulty: "HARD",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 13: CP Management; IAP Rehabilitation Guidelines"
    },
    {
      id: "PE-MOD-07-TOP-02-MCQ-003",
      topicCode: "PE-MOD-07-TOP-02",
      stem: "A 3-year-old child with spastic cerebral palsy is evaluated for gross motor function using GMFCS (Gross Motor Function Classification System). The child walks independently on level surfaces but has difficulty on stairs and uneven terrain. Which GMFCS level BEST describes this child's functional status?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "GMFCS Level II: walks independently on level surfaces but with limitations on stairs, uneven terrain, and requires assistance for more complex motor activities",
          isCorrect: true,
          explanation: "GMFCS: 5-level classification (I=full function, V=completely dependent). Level II describes children who walk independently but with gait abnormalities; limitations with stairs, uneven surfaces, crowds. No assistive device on level surfaces but may use one (walker, AFO) for safety/distance. Participation: limited complex activities (running, jumping, sports). This child fits Level II description. GMFCS helps prognosticate outcome, guide intervention intensity, and measure progress. Children at Level I-II typically have better outcomes (school attendance, community ambulation). Levels III-V have increasing motor limitations requiring assistive devices/personal assistance."
        },
        {
          id: "b",
          text: "GMFCS Level I: full independent ambulation with no gait limitations",
          isCorrect: false,
          explanation: "Level I indicates normal or near-normal gait; this child has limitations."
        },
        {
          id: "c",
          text: "GMFCS Level III: walks with assistive device (walker, AFO) required for ambulation",
          isCorrect: false,
          explanation: "Level III requires assistive device; this child walks independently without device."
        },
        {
          id: "d",
          text: "GMFCS Level IV: requires assistance from caregiver for sitting and mobility",
          isCorrect: false,
          explanation: "Level IV describes more severe limitation; this child has better function."
        }
      ],
      category: "ANALYSIS",
      bloomLevel: "ANALYZE",
      difficulty: "MEDIUM",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 13: GMFCS & CP Prognostication"
    },
    {
      id: "PE-MOD-07-TOP-02-MCQ-004",
      topicCode: "PE-MOD-07-TOP-02",
      stem: "A 2-year-old child with cerebral palsy (spastic diplegia) is being considered for early neurosurgical intervention. Which procedure might be MOST beneficial for reducing spasticity and improving motor function in selected CP patients?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Selective dorsal rhizotomy (SDR): selective sectioning of dorsal nerve roots to reduce spasticity in lower limbs, particularly beneficial in ambulatory children with spastic diplegia",
          isCorrect: true,
          explanation: "Selective dorsal rhizotomy (SDR): neurosurgical procedure that reduces lower limb spasticity by ~50% in carefully selected children. Best candidates: ambulatory children with spastic diplegia (GMFCS I-III), normal/near-normal cognition, good motivation for rehabilitation. Procedure: intraoperative nerve stimulation identifies abnormal sensory roots contributing to spasticity; selective sectioning reduces tone. Postoperative intensive PT essential (1-2 hours daily for months). Benefits: improved ambulation, reduced pain, better posture. Risks: weakness (temporary), sensory loss. Long-term outcomes: 70-80% maintain improvements. Not suitable for all CP patients (quadriplegia, athetosis, cognitive impairment make outcomes less predictable). Growing interest in India; requires specialized pediatric neurosurgical center."
        },
        {
          id: "b",
          text: "Deep brain stimulation (DBS) for cerebral palsy management",
          isCorrect: false,
          explanation: "DBS is experimental in CP; SDR is more established procedure."
        },
        {
          id: "c",
          text: "Corpus callosotomy to improve motor control",
          isCorrect: false,
          explanation: "Corpus callosotomy is used for seizure management, not CP spasticity."
        },
        {
          id: "d",
          text: "Intrathecal baclofen pump as surgical alternative to oral medication",
          isCorrect: false,
          explanation: "While ITB is effective for severe spasticity, it's not truly a motor-function improvement procedure like SDR."
        }
      ],
      category: "ANALYSIS",
      bloomLevel: "ANALYZE",
      difficulty: "HARD",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 13: Selective Dorsal Rhizotomy; Nelson's Pediatrics, CP Neurosurgery"
    },
    {
      id: "PE-MOD-07-TOP-02-MCQ-005",
      topicCode: "PE-MOD-07-TOP-02",
      stem: "A 5-year-old child with cerebral palsy and associated seizure disorder (controlled on antiepileptic drugs) is enrolled in a structured early intervention program emphasizing gross and fine motor development. Which long-term functional outcome is MOST likely to result from early intervention initiated at 18-24 months of age?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Improved motor function (better GMFCS level), enhanced school participation, and improved quality of life compared to delayed/no intervention",
          isCorrect: true,
          explanation: "Evidence for early intervention (0-3 years) in CP: neuroplasticity window allows motor reorganization and skill acquisition. Intensive multidisciplinary programs (PT, OT, speech therapy) started early (within first 24 months) demonstrate: (1) Better motor outcomes (GMFCS levels improve more than late-intervention groups); (2) Improved functional skills (walking, self-care, play); (3) Enhanced school readiness and academic performance; (4) Better psychosocial development; (5) Reduced secondary complications (contractures, deformities); (6) Enhanced family functioning. Long-term follow-up: children in early intensive programs at school age show better functional independence, greater community participation, improved quality of life. Critical timing: 0-3 years is peak neuroplasticity; outcomes less dramatic if started >5 years. Home-based + center-based programs combining parent coaching with therapeutic services are most effective."
        },
        {
          id: "b",
          text: "CP is fixed neurological damage; early intervention does not change motor outcomes, only delays inevitable decline",
          isCorrect: false,
          explanation: "While CP is non-progressive, neuroplasticity allows functional improvement through early intervention."
        },
        {
          id: "c",
          text: "Early intervention improves IQ but does not change motor function",
          isCorrect: false,
          explanation: "While cognition may improve, primary benefit is motor skill enhancement."
        },
        {
          id: "d",
          text: "Seizure control is the only factor determining outcomes; motor intervention is secondary",
          isCorrect: false,
          explanation: "While seizure management is important, motor-focused intervention significantly impacts functional outcomes."
        }
      ],
      category: "ANALYSIS",
      bloomLevel: "ANALYZE",
      difficulty: "HARD",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 13: Early Intervention in CP; Evidence-Based Rehabilitation"
    },

    // PE-MOD-07-TOP-03: Down Syndrome & Genetic Disorders (5 MCQs)
    {
      id: "PE-MOD-07-TOP-03-MCQ-001",
      topicCode: "PE-MOD-07-TOP-03",
      stem: "A newborn with features of Down syndrome (flat facies, epicanthal folds, single palmar crease) is delivered. The pediatrician should counsel parents about which complication requiring early screening?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Congenital heart defects (especially AV canal defect, VSD, ASD) requiring echocardiography screening within first weeks of life",
          isCorrect: true,
          explanation: "Down syndrome (trisomy 21): 40-50% have congenital heart disease. Most common: AV canal defect (endocardial cushion defect, 40% of cardiac DS), followed by VSD (30%), ASD (10%), PDA (10%). Screening: ECG within first week, echocardiography within 1-2 weeks to detect and plan intervention. Cardiac defects significantly impact neonatal survival and long-term outcome; early diagnosis allows timely surgical repair. Non-cardiac features also require attention: intestinal atresia (1-2%), hypothyroidism (screening with TSH), vision/hearing problems, increased infection risk."
        },
        {
          id: "b",
          text: "Thyroid cancer; no screening indicated in infancy",
          isCorrect: false,
          explanation: "Hypothyroidism is risk (1-3 times higher), not cancer; requires TSH screening."
        },
        {
          id: "c",
          text: "Leukemia; not preventable, observe and monitor",
          isCorrect: false,
          explanation: "While leukemia risk is increased 10-15× in DS, cardiac defects are primary neonatal concern requiring immediate screening."
        },
        {
          id: "d",
          text: "Developmental delay; early stimulation programs begin at 12 months",
          isCorrect: false,
          explanation: "While developmental services are important, cardiac screening is more urgent in neonatal period."
        }
      ],
      category: "PROBLEM_SOLVING",
      bloomLevel: "APPLY",
      difficulty: "MEDIUM",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 14: Down Syndrome; IAP Guidelines"
    },
    {
      id: "PE-MOD-07-TOP-03-MCQ-002",
      topicCode: "PE-MOD-07-TOP-03",
      stem: "A 3-year-old child with Down syndrome presents with developmental delay, poor growth (height <5th percentile), and lethargy. TSH is elevated at 8.2 mU/L (normal <5), and free T4 is low. Which diagnosis explains the clinical deterioration, and what is the management?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Autoimmune hypothyroidism (Hashimoto thyroiditis) common in DS; start levothyroxine 2-3 mcg/kg/day with TSH monitoring to maintain normal levels",
          isCorrect: true,
          explanation: "Down syndrome: increased hypothyroidism risk (1-3% at birth, ~10-20% by age 10-15 years). Autoimmune thyroiditis (Hashimoto) is most common cause. Clinical signs (lethargy, poor growth, developmental regression) indicate myxedema. Management: (1) Levothyroxine replacement 2-3 mcg/kg/day starting dose; (2) Monitor TSH every 6-8 weeks until stable, then annually; (3) Adjust dose to maintain TSH in normal range (target TSH 1-4 mU/L); (4) Expect improvement in growth and development within weeks/months. Screening: TSH at birth, 6 months, 12 months, then annually per AAP guidelines. Early detection and treatment prevent developmental delay and growth failure."
        },
        {
          id: "b",
          text: "Congenital hypothyroidism; child should have been detected on newborn screening",
          isCorrect: false,
          explanation: "While congenital hypothyroidism can occur, acquired autoimmune thyroiditis at age 3 is more likely pattern in DS."
        },
        {
          id: "c",
          text: "Nutritional deficiency; increase calories and protein",
          isCorrect: false,
          explanation: "TSH elevation indicates thyroid disease, not pure nutritional problem."
        },
        {
          id: "d",
          text: "Cardiac decompensation; refer for cardiac surgery",
          isCorrect: false,
          explanation: "Clinical presentation points to thyroid dysfunction, not cardiac problem."
        }
      ],
      category: "ANALYSIS",
      bloomLevel: "ANALYZE",
      difficulty: "MEDIUM",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 14: Hypothyroidism in Down Syndrome"
    },
    {
      id: "PE-MOD-07-TOP-03-MCQ-003",
      topicCode: "PE-MOD-07-TOP-03",
      stem: "A prenatal ultrasound at 20 weeks gestation shows increased nuchal translucency (6 mm). Subsequent integrated screening combining nuchal translucency, maternal serum markers (PAPP-A, hCG, uE3, inhibin A), and maternal age yields a risk of 1:50 for Down syndrome. Which counseling is MOST appropriate for this pregnant woman?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Risk 1:50 is high; offer confirmatory testing (amniocentesis or cell-free fetal DNA [cfDNA/NIPT] to definitively diagnose trisomy 21 before delivery)",
          isCorrect: true,
          explanation: "Increased nuchal translucency (>3 mm) + abnormal serum markers = high-risk screening result (risk 1:50 is much higher than general population risk ~1:300 at age 35). Options for confirmatory testing: (1) Non-invasive: cell-free fetal DNA (NIPT/Panorama/Harmony) - >99% sensitivity for T21, safe, increasingly preferred; (2) Invasive: amniocentesis with karyotype/FISH - gold standard, higher miscarriage risk (~0.1-0.3%). Counseling should include: accuracy of each test, timing, potential for uncertain results (variants of uncertain significance with cfDNA), implications of diagnosis, support resources. Maternal choice is key; some opt for testing for perinatal preparation, others decline. Early referral to maternal-fetal medicine specialist for detailed counseling recommended."
        },
        {
          id: "b",
          text: "Risk is low; reassure mother that child will be normal",
          isCorrect: false,
          explanation: "Risk 1:50 is moderate-high; dismissing without offering confirmatory testing is inappropriate."
        },
        {
          id: "c",
          text: "Recommend immediate termination of pregnancy",
          isCorrect: false,
          explanation: "Diagnosis is not confirmed; that decision is parents', not physician's directive."
        },
        {
          id: "d",
          text: "Defer further testing until after birth; early diagnosis doesn't change management",
          isCorrect: false,
          explanation: "Prenatal diagnosis allows family planning, perinatal preparation, and postnatal coordination of care."
        }
      ],
      category: "PROBLEM_SOLVING",
      bloomLevel: "APPLY",
      difficulty: "HARD",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 14: Prenatal Screening for Down Syndrome"
    },
    {
      id: "PE-MOD-07-TOP-03-MCQ-004",
      topicCode: "PE-MOD-07-TOP-03",
      stem: "A 6-month-old infant with developmental delay is found to have microcephaly, seizures, developmental regression, and coarse facial features. Skeletal survey shows abnormal bone development. Which genetic disorder with severe neurological manifestations should be suspected, and what is the inheritance pattern?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Mucopolysaccharidosis (MPS) type 1H (Hurler syndrome); severe CNS involvement, macrocephaly/coarse features, skeletal dysplasia; autosomal recessive inheritance",
          isCorrect: true,
          explanation: "Hurler syndrome (MPS I-H): lysosomal storage disorder from alpha-L-iduronidase deficiency. Presentation (0-6 months): normal birth, then developmental regression, seizures, microcephaly (or later macrocephaly), coarse features (broad nose, thick lips), hepatosplenomegaly, skeletal dysplasia (dysostosis multiplex), cardiac/pulmonary involvement. Progressive CNS deterioration leads to profound disability by 3-5 years; death typically by 10 years without treatment. Inheritance: autosomal recessive. Diagnosis: urine glycosaminoglycans, enzyme assay, genetic testing. Management: enzyme replacement therapy (imiglucerase) or hematopoietic stem cell transplant (HSCT) can slow progression if started early. Presymptomatic diagnosis through newborn screening (available in some regions) allows early intervention. Family counseling and genetic testing of siblings essential."
        },
        {
          id: "b",
          text: "Fragile X syndrome; X-linked inheritance, intellectual disability without specific somatic features",
          isCorrect: false,
          explanation: "Fragile X typically doesn't present with coarse features or skeletal dysplasia; MPS is better fit."
        },
        {
          id: "c",
          text: "Phenylketonuria (PKU); metabolic disorder causing developmental delay if untreated",
          isCorrect: false,
          explanation: "PKU doesn't explain coarse features or skeletal dysplasia; would be detected on newborn screening."
        },
        {
          id: "d",
          text: "Mitochondrial disorder; variable presentation with multisystem involvement",
          isCorrect: false,
          explanation: "While mitochondrial disorders present with multisystem features, the combination of coarse features + skeletal dysplasia suggests MPS more strongly."
        }
      ],
      category: "PROBLEM_SOLVING",
      bloomLevel: "APPLY",
      difficulty: "HARD",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 14: Lysosomal Storage Disorders; Nelson's Pediatrics, MPS"
    },
    {
      id: "PE-MOD-07-TOP-03-MCQ-005",
      topicCode: "PE-MOD-07-TOP-03",
      stem: "A 4-year-old girl with a known diagnosis of autosomal dominant neurofibromatosis type 1 (NF1) presents for annual screening. Which complication should be MOST carefully monitored for in childhood, and what is the screening protocol?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Optic nerve gliomas (present in 15-20% of NF1 children); require baseline ophthalmology assessment + regular ophthalmologic exams, MRI imaging only if symptomatic",
          isCorrect: true,
          explanation: "NF1 (autosomal dominant): caused by NF1 gene mutations. Childhood complications: (1) Optic nerve gliomas (15-20%; most asymptomatic, rarely cause vision loss); (2) Pheochromocytoma risk; (3) Increased malignancy risk (especially optic nerve glioma, MPNST, leukemia); (4) Learning disabilities (40-60%); (5) Scoliosis (10-25%). Screening protocol: annual comprehensive physical exam looking for new neurofibromas, skin changes, developmental concerns; baseline ophthalmology exam (visual acuity, color vision, afferent pupillary defect); imaging (MRI brain/orbits) only if visual symptoms develop (progressive vision loss, color defect, proptosis). Avoid unnecessary imaging in asymptomatic children to reduce radiation exposure. Genetics referral for family counseling (50% inheritance risk to offspring). Multidisciplinary care team approach essential."
        },
        {
          id: "b",
          text: "Pheochromocytoma; routine screening with plasma metanephrines starting at age 6 months",
          isCorrect: false,
          explanation: "Pheochromocytoma develops in 1-5% of NF1 adults, rare in children; routine screening not recommended."
        },
        {
          id: "c",
          text: "Malignant peripheral nerve sheath tumor (MPNST); monitor all neurofibromas with MRI every 3 months",
          isCorrect: false,
          explanation: "MPNST risk is real but develops primarily in adolescence/adulthood; routine surveillance MRI of all tumors is excessive."
        },
        {
          id: "d",
          text: "Epilepsy; all NF1 children require antiepileptic drug prophylaxis",
          isCorrect: false,
          explanation: "Seizure risk is mildly elevated but not universal; prophylaxis is not indicated."
        }
      ],
      category: "ANALYSIS",
      bloomLevel: "ANALYZE",
      difficulty: "HARD",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 14: Neurofibromatosis Type 1; IAP Guidelines"
    },

    // PE-MOD-08-TOP-02: Status Epilepticus (5 MCQs)
    {
      id: "PE-MOD-08-TOP-02-MCQ-001",
      topicCode: "PE-MOD-08-TOP-02",
      stem: "A 3-year-old child with known epilepsy presents with continuous seizures lasting 30 minutes, with only brief periods of partial consciousness between convulsions. Heart rate is 160 bpm, respiratory effort is labored, and SpO₂ is 88%. Which diagnosis and immediate management is MOST appropriate?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Convulsive status epilepticus (CSE); establish airway, give high-flow oxygen, administer IV lorazepam 0.1 mg/kg (max 4 mg) or IV diazepam 0.5 mg/kg, followed by fosphenytoin or levetiracetam",
          isCorrect: true,
          explanation: "Status epilepticus: continuous seizure or repeated seizures without full consciousness recovery lasting ≥5 minutes (operational definition); >30 minutes or life-threatening complications = refractory status. Immediate management (by ILCOR 2020 guidelines): (1) Ensure safety; (2) Airway/oxygen - high-flow O₂ to maintain SpO₂ >94% (this child needs intervention for low SpO₂); (3) First-line antiepileptic (within 5 minutes): IV lorazepam 0.1 mg/kg (preferred, rapid onset/offset) OR IV diazepam 0.5 mg/kg (if lorazepam unavailable); (4) Second-line (if seizure persists 5-20 minutes): IV fosphenytoin 15-20 mg PE/kg OR IV levetiracetam 20-50 mg/kg OR valproate; (5) Third-line (refractory SE >20-40 minutes): anesthesia with propofol/midazolam infusion. This child needs immediate benzodiazepine + airway support."
        },
        {
          id: "b",
          text: "Simple febrile seizure; observation and antipyretics sufficient",
          isCorrect: false,
          explanation: "30 minutes of continuous seizure is status epilepticus, not simple febrile seizure; requires active intervention."
        },
        {
          id: "c",
          text: "Post-ictal confusion; reassure and monitor vital signs",
          isCorrect: false,
          explanation: "Ongoing seizure activity with poor oxygenation requires urgent treatment, not observation."
        },
        {
          id: "d",
          text: "Anesthesia with propofol/midazolam immediately",
          isCorrect: false,
          explanation: "Benzodiazepines are first-line; anesthesia is reserved for refractory SE."
        }
      ],
      category: "PROBLEM_SOLVING",
      bloomLevel: "APPLY",
      difficulty: "HARD",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 15: Status Epilepticus Management; ILCOR/AAP Guidelines"
    },
    {
      id: "PE-MOD-08-TOP-02-MCQ-002",
      topicCode: "PE-MOD-08-TOP-02",
      stem: "A 4-year-old child with refractory epilepsy presents with status epilepticus refractory to IV lorazepam and levetiracetam after 25 minutes of seizure activity. What is the MOST appropriate next step in management according to current guidelines?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Start IV infusion anesthesia with midazolam (0.15-0.3 mg/kg/min) or propofol (1-5 mg/kg/min) with intubation and mechanical ventilation support",
          isCorrect: true,
          explanation: "Refractory status epilepticus (RSE): seizures continuing despite first-line benzodiazepine + second-line antiepileptic (typically ≥20-40 minutes after first benzodiazepine or after two antiepileptic agents). Management: transition to anesthetic agents with ICU-level care. Options: (1) IV midazolam infusion (loading 0.15 mg/kg, then 0.15-0.3 mg/kg/min, titrate to burst suppression on EEG); (2) IV propofol (loading 1-2 mg/kg, then infusion 1-5 mg/kg/min); (3) IV thiopental alternative. Requirements: intubation, mechanical ventilation, ICU monitoring (continuous EEG, cardiac monitor, hemodynamics). Complications: hypotension, respiratory depression, prolonged sedation. High mortality in RSE; outcomes depend on underlying etiology. This child needs ICU transfer and anesthesia support urgently."
        },
        {
          id: "b",
          text: "Repeat IV levetiracetam at higher dose",
          isCorrect: false,
          explanation: "Already given second-line agent; repeating same agent is not indicated. Anesthesia is needed for RSE."
        },
        {
          id: "c",
          text: "Admit for observation; seizures will likely self-terminate",
          isCorrect: false,
          explanation: "Refractory SE is life-threatening; anesthesia and ICU management are essential."
        },
        {
          id: "d",
          text: "Prescribe phenobarbital and discharge home with family monitoring",
          isCorrect: false,
          explanation: "Refractory SE requires hospitalization and intensive management; outpatient management inappropriate."
        }
      ],
      category: "PROBLEM_SOLVING",
      bloomLevel: "APPLY",
      difficulty: "HARD",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 15: Refractory Status Epilepticus; Neurocritical Care Guidelines"
    },
    {
      id: "PE-MOD-08-TOP-02-MCQ-003",
      topicCode: "PE-MOD-08-TOP-02",
      stem: "A 5-year-old child with known epilepsy on twice-daily antiepileptic medication (phenytoin) has a witnessed single tonic-clonic seizure lasting 2 minutes at home. The child is fully alert and interactive within 10 minutes of seizure. Vital signs are normal. What is the MOST appropriate management?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "This is a breakthrough seizure despite medication; assess medication compliance and seizure diary, review medication levels, optimize antiepileptic regimen, but no emergency hospital admission needed",
          isCorrect: true,
          explanation: "Single seizure <5 minutes in known epileptic child on regular medication = breakthrough seizure (not status epilepticus). If child recovers to baseline within 10-30 minutes, emergency hospitalization not absolutely required. Management: (1) Assess for triggers (missed doses, illness, stress, sleep deprivation); (2) Check medication compliance (common cause of breakthrough seizures); (3) Therapeutic drug level of phenytoin (target 10-20 mcg/mL); (4) Keep seizure diary to identify patterns; (5) Neurology follow-up within 1-2 weeks for regimen optimization; (6) Educate family on seizure first aid. Emergency care indicated only if: seizures repeated, status develops, or slow recovery. Home safety counseling (supervision, helmet use, water safety) essential."
        },
        {
          id: "b",
          text: "Emergency hospital admission and ICU admission for monitoring",
          isCorrect: false,
          explanation: "Single short seizure with full recovery doesn't require emergency admission in stable child."
        },
        {
          id: "c",
          text: "Stop phenytoin immediately; switch to alternative antiepileptic",
          isCorrect: false,
          explanation: "Single breakthrough seizure doesn't warrant stopping current effective medication; optimization after level check is appropriate."
        },
        {
          id: "d",
          text: "No intervention needed; seizure is self-limited and child is alert",
          isCorrect: false,
          explanation: "While child is stable, breakthrough seizure assessment and medication review are important to prevent future seizures."
        }
      ],
      category: "ANALYSIS",
      bloomLevel: "ANALYZE",
      difficulty: "MEDIUM",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 15: Epilepsy Management; Breakthrough Seizures"
    },
    {
      id: "PE-MOD-08-TOP-02-MCQ-004",
      topicCode: "PE-MOD-08-TOP-02",
      stem: "A 2-year-old child with history of febrile seizures (2 prior episodes) presents with fever (39.2°C) and upper respiratory infection. The parents are concerned about seizure recurrence. Which prophylactic measure is MOST evidence-based for this child?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Intermittent benzodiazepine prophylaxis (diazepam 0.5 mg/kg at first sign of fever) reduces febrile seizure recurrence but not long-term epilepsy risk; counsel on seizure first aid, fever management",
          isCorrect: true,
          explanation: "Febrile seizures: provoked seizures occurring with fever in children 6 months-6 years, benign prognosis (3-4% progress to afebrile epilepsy). Prophylaxis options: (1) Intermittent benzodiazepine (diazepam 0.5 mg/kg rectally or PO at first sign of fever, repeat at 12 hours if needed) reduces febrile seizure recurrence by ~70% but doesn't prevent afebrile epilepsy; (2) Long-term antiepileptic (phenytoin, valproate) rarely used due to side effects/minimal efficacy. MOST effective approach: education (seizure first aid, fever management, reassurance about benign prognosis), intermittent diazepam only for high-risk families (complicated FS, frequent recurrences, significant parental anxiety). This child (2 prior episodes) is candidate for intermittent prophylaxis. Teach families fever management (adequate fluids, antipyretics) as complementary approach."
        },
        {
          id: "b",
          text: "Long-term daily phenytoin prophylaxis to prevent all febrile seizures",
          isCorrect: false,
          explanation: "Daily prophylaxis is not evidence-based for simple febrile seizures; intermittent benzodiazepine is preferred."
        },
        {
          id: "c",
          text: "No prophylaxis; febrile seizures are self-limited and benign",
          isCorrect: false,
          explanation: "While febrile seizures are generally benign, intermittent prophylaxis offers symptomatic benefit for recurrence prevention."
        },
        {
          id: "d",
          text: "Admit for hospitalization during each febrile illness to prevent seizure",
          isCorrect: false,
          explanation: "Routine hospitalization for fever management is not indicated; home management with prophylaxis is sufficient."
        }
      ],
      category: "ANALYSIS",
      bloomLevel: "ANALYZE",
      difficulty: "MEDIUM",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 15: Febrile Seizures Management; AAP Guidelines"
    },
    {
      id: "PE-MOD-08-TOP-02-MCQ-005",
      topicCode: "PE-MOD-08-TOP-02",
      stem: "A 6-year-old child with newly diagnosed generalized tonic-clonic epilepsy is prescribed levetiracetam. The parents ask about prognosis and whether the seizures can be 'cured.' Which counseling best reflects current evidence on pediatric epilepsy outcomes?",
      type: "SINGLE_BEST_ANSWER",
      options: [
        {
          id: "a",
          text: "Approximately 70% of children with newly diagnosed epilepsy achieve seizure control with first or second antiepileptic medication; some may discontinue medication after 2-3 seizure-free years with good prognosis, while others require lifelong medication",
          isCorrect: true,
          explanation: "Pediatric epilepsy prognosis: (1) Seizure control: ~70% achieve remission (seizure-free ≥2 years) with antiepileptic monotherapy; ~80-90% with dual therapy; ~10-15% have drug-resistant epilepsy (not controlled despite ≥2 appropriate medications); (2) Long-term outcomes: ~40% may eventually discontinue medication after 2-3 year seizure-free period (especially generalized epilepsy), while others need lifelong medication; (3) SUDEP (Sudden Unexpected Nocturnal Death in Epilepsy) risk ~1-2 per 1000 patient-years (rare but important to discuss); (4) Learning difficulties present in ~30-40% (may be seizure-related or medication side-effect). Counseling: realistic expectations about seizure control, medication adherence importance, driving restrictions (until seizure-free per legal requirements), lifestyle modifications, regular follow-up with neurology. Emphasize that 'cure' is not goal; seizure control and quality of life are."
        },
        {
          id: "b",
          text: "Epilepsy is incurable; child will require lifelong daily medications regardless of control",
          isCorrect: false,
          explanation: "This is overly pessimistic; many children achieve remission and some discontinue medication successfully."
        },
        {
          id: "c",
          text: "First antiepileptic medication always controls seizures; if not, switch immediately",
          isCorrect: false,
          explanation: "~30% don't respond to first agent; second line success is ~50-60%, requiring time to assess."
        },
        {
          id: "d",
          text: "Seizures will resolve by adolescence without medication",
          isCorrect: false,
          explanation: "While some childhood epilepsies remit, medication is essential during active phase to prevent recurrence."
        }
      ],
      category: "ANALYSIS",
      bloomLevel: "ANALYZE",
      difficulty: "MEDIUM",
      textbookRef: "OP Ghai Pediatrics, 10th ed., Chapter 15: Epilepsy Prognosis & Outcomes"
    }
  ]
};
