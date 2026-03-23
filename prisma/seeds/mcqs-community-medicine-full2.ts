export const cmMcqs2 = [
  {
    type: "single-best-answer" as const,
    stem: "An epidemiological survey reveals that in a population of 10,000 individuals, 500 have diabetes. Of these, 200 are smokers and 300 are non-smokers. What is the prevalence of smoking among those with diabetes?",
    clinicalVignette: "A community health worker is analyzing disease patterns in a district health survey.",
    options: [
      { id: "a", text: "2%", isCorrect: false },
      { id: "b", text: "5%", isCorrect: false },
      { id: "c", text: "40%", isCorrect: true },
      { id: "d", text: "60%", isCorrect: false }
    ],
    explanation: "Prevalence of smoking among diabetics = (Number of smokers with diabetes / Total diabetics) × 100 = (200/500) × 100 = 40%. This is a conditional prevalence calculation.",
    difficulty: "EASY" as const,
    bloomsLevel: "REMEMBER" as const,
    examTags: ["Epidemiology", "Statistics", "CBME-Competency-001"],
    subjectCode: "CM",
    topicCode: "CM-MOD-EPID-STATS",
    textbookRefs: ["Park's Textbook of Preventive & Social Medicine - Epidemiology chapter"]
  },
  {
    type: "single-best-answer" as const,
    stem: "A case-control study examines risk factors for tuberculosis. Odds ratio for poor ventilation in homes is 3.5 (95% CI: 2.1-5.8). What does this mean?",
    clinicalVignette: "Researchers are investigating environmental factors contributing to TB transmission in urban slums.",
    options: [
      { id: "a", text: "Poor ventilation increases TB risk 3.5 times compared to good ventilation", isCorrect: true },
      { id: "b", text: "35% of TB cases are due to poor ventilation", isCorrect: false },
      { id: "c", text: "Poor ventilation causes TB in 3.5% of exposed individuals", isCorrect: false },
      { id: "d", text: "TB cases have 3.5 times less chance of poor ventilation", isCorrect: false }
    ],
    explanation: "Odds Ratio >1 indicates increased odds of disease with exposure. OR=3.5 means exposed individuals have 3.5 times higher odds of TB compared to unexposed. The CI (2.1-5.8) does not include 1, confirming statistical significance.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Case-Control Study", "Odds Ratio", "CBME-Competency-002"],
    subjectCode: "CM",
    topicCode: "CM-MOD-EPID-STATS",
    textbookRefs: ["Park's Textbook - Study designs"]
  },
  {
    type: "single-best-answer" as const,
    stem: "In a district, the birth rate is 35 per 1000 population and the death rate is 8 per 1000 population. What is the natural rate of increase?",
    clinicalVignette: "A demographer is analyzing population growth in a semi-rural district.",
    options: [
      { id: "a", text: "2.7%", isCorrect: true },
      { id: "b", text: "3.5%", isCorrect: false },
      { id: "c", text: "4.3%", isCorrect: false },
      { id: "d", text: "1.2%", isCorrect: false }
    ],
    explanation: "Natural rate of increase = (BR - DR) / 10 = (35 - 8) / 10 = 2.7%. This represents the percentage growth in population per year from natural causes (births minus deaths).",
    difficulty: "EASY" as const,
    bloomsLevel: "REMEMBER" as const,
    examTags: ["Demography", "Population Statistics"],
    subjectCode: "CM",
    topicCode: "CM-MOD-EPID-DEMO",
    textbookRefs: ["Park's Textbook - Vital Statistics"]
  },
  {
    type: "single-best-answer" as const,
    stem: "A new screening test for cervical cancer has sensitivity 95% and specificity 90%. In a population with 5% disease prevalence, what is the positive predictive value (PPV)?",
    clinicalVignette: "Health authorities are evaluating introduction of new cervical cancer screening in national program.",
    options: [
      { id: "a", text: "32.2%", isCorrect: true },
      { id: "b", text: "75%", isCorrect: false },
      { id: "c", text: "90%", isCorrect: false },
      { id: "d", text: "95%", isCorrect: false }
    ],
    explanation: "PPV = (Sensitivity × Prevalence) / [(Sensitivity × Prevalence) + ((1-Specificity) × (1-Prevalence))] = (0.95 × 0.05) / [(0.95 × 0.05) + (0.10 × 0.95)] = 0.0475 / 0.1425 = 33.3% ≈ 32.2%. Low prevalence markedly reduces PPV despite high sensitivity/specificity.",
    difficulty: "HARD" as const,
    bloomsLevel: "ANALYZE" as const,
    examTags: ["Diagnostic Test Evaluation", "Predictive Values"],
    subjectCode: "CM",
    topicCode: "CM-MOD-EPID-DIAG",
    textbookRefs: ["Park's Textbook - Screening and diagnostic tests"]
  },
  {
    type: "single-best-answer" as const,
    stem: "Which immunization schedule follows the Indian Academy of Pediatrics (IAP) recommendation for routine childhood immunization?",
    clinicalVignette: "A pediatrician is counseling parents about scheduled vaccinations for their 4-month-old child.",
    options: [
      { id: "a", text: "BCG, HepB at birth; DPT, IPV, PCV, RV at 6, 10, 14 weeks", isCorrect: true },
      { id: "b", text: "BCG, HepB at birth; DPT at 2, 4, 6 months", isCorrect: false },
      { id: "c", text: "Only DPT and IPV as per government schedule", isCorrect: false },
      { id: "d", text: "DPT-HepB combination at 6, 10, 14 weeks, no RV", isCorrect: false }
    ],
    explanation: "IAP recommends comprehensive schedule: BCG + HepB at birth; DPT1, IPV1, PCV1, RV1 at 6 weeks; repeated at 10 and 14 weeks. This covers more diseases than basic government schedule and includes PCV and rotavirus.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "REMEMBER" as const,
    examTags: ["Immunization", "Child Health", "CBME-Competency-010"],
    subjectCode: "CM",
    topicCode: "CM-MOD-IMM-SCHED",
    textbookRefs: ["IAP Immunization Handbook", "Park's Textbook"]
  },
  {
    type: "single-best-answer" as const,
    stem: "What is the primary objective of the National Leprosy Eradication Program (NLEP) in India?",
    clinicalVignette: "A district health officer is reviewing strategies to meet NLEP targets.",
    options: [
      { id: "a", text: "Elimination of leprosy as a public health problem (<1 case per 10,000)", isCorrect: true },
      { id: "b", text: "Eradication of leprosy globally", isCorrect: false },
      { id: "c", text: "Providing free treatment to all leprosy patients", isCorrect: false },
      { id: "d", text: "Preventing disability in leprosy patients", isCorrect: false }
    ],
    explanation: "NLEP target is elimination, defined as <1 case per 10,000 population at district level. This is achievable through early detection and prompt MDT (multi-drug therapy). Full eradication is not the objective.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "REMEMBER" as const,
    examTags: ["National Programs", "Leprosy", "CBME-Competency-015"],
    subjectCode: "CM",
    topicCode: "CM-MOD-NP-LEPROSY",
    textbookRefs: ["Park's Textbook - Leprosy"]
  },
  {
    type: "single-best-answer" as const,
    stem: "A child has protein-energy malnutrition with weight-for-age <70% of expected. Which classification does this represent?",
    clinicalVignette: "A nutrition worker is assessing a 2-year-old from a poor household presenting with failure to thrive.",
    options: [
      { id: "a", text: "Marasmus", isCorrect: false },
      { id: "b", text: "Kwashiorkor", isCorrect: false },
      { id: "c", text: "Grade III PEM (Underweight)", isCorrect: true },
      { id: "d", text: "Grade IV PEM (Severe underweight)", isCorrect: false }
    ],
    explanation: "IAP classification of PEM: Grade I (71-80% WAZ), Grade II (61-70% WAZ), Grade III (51-60% WAZ), Grade IV (<50% WAZ). Weight-for-age <70% indicates Grade II-III PEM. Context is underweight classification.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Nutrition", "Child Health", "Malnutrition"],
    subjectCode: "CM",
    topicCode: "CM-MOD-NUT-PEM",
    textbookRefs: ["Park's Textbook - Nutrition"]
  },
  {
    type: "single-best-answer" as const,
    stem: "What is the primary route of transmission for hepatitis A virus in low-income countries?",
    clinicalVignette: "An epidemiologist is investigating a hepatitis A outbreak in a slum community.",
    options: [
      { id: "a", text: "Fecal-oral route via contaminated water and food", isCorrect: true },
      { id: "b", text: "Blood transfusion", isCorrect: false },
      { id: "c", text: "Sexual contact", isCorrect: false },
      { id: "d", text: "Vertical transmission", isCorrect: false }
    ],
    explanation: "Hepatitis A is transmitted via fecal-oral route. In low-income countries with poor sanitation, contaminated water and food are major transmission sources. High prevalence due to poor hygiene and sewage systems.",
    difficulty: "EASY" as const,
    bloomsLevel: "REMEMBER" as const,
    examTags: ["Disease Transmission", "Hepatitis", "Communicable Disease"],
    subjectCode: "CM",
    topicCode: "CM-MOD-CD-HAV",
    textbookRefs: ["Park's Textbook - Communicable Diseases"]
  },
  {
    type: "single-best-answer" as const,
    stem: "In a coastal community, which micronutrient deficiency is least likely to occur due to adequate dietary iodine from sea food?",
    clinicalVignette: "A nutritionist is evaluating micronutrient status in a fishing village.",
    options: [
      { id: "a", text: "Iron deficiency", isCorrect: false },
      { id: "b", text: "Vitamin A deficiency", isCorrect: false },
      { id: "c", text: "Iodine deficiency", isCorrect: true },
      { id: "d", text: "Vitamin B12 deficiency", isCorrect: false }
    ],
    explanation: "Coastal communities have access to seafood rich in iodine (fish, shellfish). Iodine deficiency disorders (endemic goiter, cretinism) are less common in coastal vs. inland areas with poor iodine soil content.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Nutrition", "Micronutrient Deficiency"],
    subjectCode: "CM",
    topicCode: "CM-MOD-NUT-MICRO",
    textbookRefs: ["Park's Textbook - Nutrition"]
  },
  {
    type: "single-best-answer" as const,
    stem: "Which is the key indicator for monitoring progress toward achieving Universal Health Coverage (UHC) as per WHO?",
    clinicalVignette: "A health administrator is developing state health indicators aligned with SDGs.",
    options: [
      { id: "a", text: "Service coverage index including essential services", isCorrect: true },
      { id: "b", text: "Number of hospitals per capita", isCorrect: false },
      { id: "c", text: "Total health expenditure as % of GDP", isCorrect: false },
      { id: "d", text: "Health insurance enrollment rates", isCorrect: false }
    ],
    explanation: "UHC Service Coverage Index (SCI) measures access to and quality of essential health services. It includes reproductive, maternal, child health, infectious diseases, and non-communicable disease services. This composite indicator reflects UHC progress better than isolated metrics.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["UHC", "Health Policy", "CBME-Competency-020"],
    subjectCode: "CM",
    topicCode: "CM-MOD-HP-UHC",
    textbookRefs: ["WHO UHC Framework", "Park's Textbook - Health Policy"]
  },
  {
    type: "single-best-answer" as const,
    stem: "In environmental health surveillance, what does the Air Quality Index (AQI) primarily measure?",
    clinicalVignette: "A public health officer is interpreting air quality reports for a metropolitan city.",
    options: [
      { id: "a", text: "Concentration of particulate matter (PM2.5, PM10), SO2, NO2, O3, CO", isCorrect: true },
      { id: "b", text: "Greenhouse gas emissions only", isCorrect: false },
      { id: "c", text: "Humidity and temperature changes", isCorrect: false },
      { id: "d", text: "Noise levels in urban areas", isCorrect: false }
    ],
    explanation: "AQI is calculated from concentrations of major pollutants: PM2.5, PM10, sulfur dioxide, nitrogen dioxide, ozone, and carbon monoxide. It provides a simplified measure of air quality impact on health (0-500 scale: Good to Hazardous).",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "REMEMBER" as const,
    examTags: ["Environmental Health", "Air Pollution", "CBME-Competency-025"],
    subjectCode: "CM",
    topicCode: "CM-MOD-EH-AIR",
    textbookRefs: ["Park's Textbook - Environmental Health"]
  },
  {
    type: "single-best-answer" as const,
    stem: "What is the most effective public health intervention to reduce the incidence of diarrheal diseases in low-income settings?",
    clinicalVignette: "A district is planning interventions to reduce childhood diarrhea prevalence.",
    options: [
      { id: "a", text: "Provision of clean drinking water and improved sanitation", isCorrect: true },
      { id: "b", text: "Mass antibiotic distribution", isCorrect: false },
      { id: "c", text: "Increased number of health centers", isCorrect: false },
      { id: "d", text: "Public education on disease symptoms only", isCorrect: false }
    ],
    explanation: "WASH (Water, Sanitation, Hygiene) interventions are most effective for preventing diarrhea. Clean water supply and proper sanitation reduce transmission of enteric pathogens and reduce incidence 30-50%. Education on hand hygiene amplifies effect.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Sanitation", "Prevention", "CBME-Competency-030"],
    subjectCode: "CM",
    topicCode: "CM-MOD-EH-WASH",
    textbookRefs: ["Park's Textbook - Environmental Health"]
  },
  {
    type: "single-best-answer" as const,
    stem: "Which age group is most affected by dengue fever in endemic areas?",
    clinicalVignette: "An epidemiologist analyzing age-wise distribution of dengue cases in a post-monsoon outbreak.",
    options: [
      { id: "a", text: "<5 years", isCorrect: false },
      { id: "b", text: "5-14 years", isCorrect: false },
      { id: "c", text: "15-45 years (working age)", isCorrect: true },
      { id: "d", text: ">60 years", isCorrect: false }
    ],
    explanation: "Dengue in endemic areas predominantly affects 15-45 years (working age group) due to higher outdoor exposure and mosquito contact. Children <5 have severe dengue/hemorrhagic forms; elderly have higher mortality if infected.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Vector-borne Disease", "Dengue", "Epidemiology"],
    subjectCode: "CM",
    topicCode: "CM-MOD-CD-DENGUE",
    textbookRefs: ["Park's Textbook - Communicable Diseases"]
  },
  {
    type: "single-best-answer" as const,
    stem: "What is the standard sample size calculation factor (Z-score) for 95% confidence interval in epidemiological studies?",
    clinicalVignette: "A researcher is designing a cross-sectional study on tuberculosis prevalence.",
    options: [
      { id: "a", text: "1.64", isCorrect: false },
      { id: "b", text: "1.96", isCorrect: true },
      { id: "c", text: "2.33", isCorrect: false },
      { id: "d", text: "2.58", isCorrect: false }
    ],
    explanation: "Z-score for 95% CI = 1.96 (for two-tailed test). Z=1.64 is for 90% CI; Z=2.33 for 98% CI; Z=2.58 for 99% CI. This is fundamental for sample size calculation using formula: n = Z² × p(1-p) / d²",
    difficulty: "EASY" as const,
    bloomsLevel: "REMEMBER" as const,
    examTags: ["Biostatistics", "Sample Size"],
    subjectCode: "CM",
    topicCode: "CM-MOD-EPID-STATS",
    textbookRefs: ["Park's Textbook - Biostatistics"]
  },
  {
    type: "single-best-answer" as const,
    stem: "In a cohort study examining smoking and lung cancer, relative risk is 8.5. How is this interpreted?",
    clinicalVignette: "A pulmonologist reviewing epidemiological evidence on smoking causation.",
    options: [
      { id: "a", text: "Smokers have 8.5 times higher risk of lung cancer compared to non-smokers", isCorrect: true },
      { id: "b", text: "85% of lung cancer cases are due to smoking", isCorrect: false },
      { id: "c", text: "Smoking causes lung cancer in 8.5% of exposed individuals", isCorrect: false },
      { id: "d", text: "85 out of 100 smokers will develop lung cancer", isCorrect: false }
    ],
    explanation: "Relative Risk (RR) is ratio of incidence in exposed vs. unexposed groups. RR=8.5 means smokers' risk is 8.5× that of non-smokers. RR >1 indicates increased risk; RR=1 indicates no association; RR <1 protective effect.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Epidemiology", "Study Design", "Risk Measures"],
    subjectCode: "CM",
    topicCode: "CM-MOD-EPID-RISK",
    textbookRefs: ["Park's Textbook - Epidemiology"]
  },
  {
    type: "single-best-answer" as const,
    stem: "What is the primary goal of the Integrated Child Development Services (ICDS) scheme in India?",
    clinicalVignette: "A rural development officer is planning ICDS intervention in a district.",
    options: [
      { id: "a", text: "Holistic development of children 0-6 years and nutritional support to pregnant/lactating women", isCorrect: true },
      { id: "b", text: "Only provision of nutritional supplementation", isCorrect: false },
      { id: "c", text: "School education for children", isCorrect: false },
      { id: "d", text: "Income generation for women only", isCorrect: false }
    ],
    explanation: "ICDS is multi-sectoral addressing nutrition, health, education, and development for children 0-6 years, pregnant women, and lactating mothers. Provided through anganwadi centers (nutrition, preschool, health checkups, referral services).",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "REMEMBER" as const,
    examTags: ["National Programs", "Child Health", "CBME-Competency-035"],
    subjectCode: "CM",
    topicCode: "CM-MOD-NP-ICDS",
    textbookRefs: ["Park's Textbook - Child Health Programs"]
  },
  {
    type: "single-best-answer" as const,
    stem: "Which country spends the highest proportion of GDP on healthcare globally?",
    clinicalVignette: "A health policy analyst comparing international healthcare expenditure models.",
    options: [
      { id: "a", text: "India (3-4% of GDP)", isCorrect: false },
      { id: "b", text: "United States (17-18% of GDP)", isCorrect: true },
      { id: "c", text: "Germany (11-12% of GDP)", isCorrect: false },
      { id: "d", text: "United Kingdom (9-10% of GDP)", isCorrect: false }
    ],
    explanation: "USA spends ~17-18% of GDP on healthcare, highest globally. India spends 3-4%. Germany spends ~11-12%, UK ~9-10%. Despite high spending, USA health outcomes not proportionally better than other high-income countries.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "REMEMBER" as const,
    examTags: ["Health Economics", "Health Systems"],
    subjectCode: "CM",
    topicCode: "CM-MOD-HP-ECON",
    textbookRefs: ["Park's Textbook - Health Economics"]
  },
  {
    type: "single-best-answer" as const,
    stem: "What is the primary mechanism by which oral rehydration therapy (ORT) works in acute diarrhea?",
    clinicalVignette: "A pediatrician counseling parents on home management of diarrheal dehydration.",
    options: [
      { id: "a", text: "Glucose-sodium cotransport mechanism in small intestine", isCorrect: true },
      { id: "b", text: "Killing pathogenic bacteria", isCorrect: false },
      { id: "c", text: "Stopping diarrheal stools", isCorrect: false },
      { id: "d", text: "Improving gut motility", isCorrect: false }
    ],
    explanation: "ORT works via glucose-sodium cotransport: glucose and sodium are absorbed together in small intestine via SGLT1 transporter. Water follows osmotically, rehydrating despite ongoing diarrhea. Principle: active absorption continues despite secretory diarrhea.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Diarrheal Diseases", "Treatment", "Pharmacology"],
    subjectCode: "CM",
    topicCode: "CM-MOD-CD-DIARRHEA",
    textbookRefs: ["Park's Textbook - Diarrheal Diseases"]
  },
  {
    type: "single-best-answer" as const,
    stem: "Which is the most cost-effective intervention for maternal mortality reduction in resource-limited settings?",
    clinicalVignette: "A maternal health program director designing strategies for MDG achievement.",
    options: [
      { id: "a", text: "Skilled birth attendance and emergency obstetric care", isCorrect: true },
      { id: "b", text: "Routine cesarean section for all births", isCorrect: false },
      { id: "c", text: "Routine blood transfusion during pregnancy", isCorrect: false },
      { id: "d", text: "Advanced neonatal resuscitation equipment", isCorrect: false }
    ],
    explanation: "Skilled birth attendance + emergency obstetric care (including blood transfusion, antibiotics, cesarean for complications) most cost-effective. Prevents 60-70% MMR. Target: 90% skilled attendance + accessible emergency care.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Maternal Health", "Cost-effectiveness", "CBME-Competency-040"],
    subjectCode: "CM",
    topicCode: "CM-MOD-MH-MMR",
    textbookRefs: ["Park's Textbook - Maternal Health"]
  },
  {
    type: "single-best-answer" as const,
    stem: "What is the definition of infant mortality rate (IMR)?",
    clinicalVignette: "A statistician calculating vital statistics for annual health report.",
    options: [
      { id: "a", text: "Number of infant deaths per 1000 live births in a year", isCorrect: true },
      { id: "b", text: "Number of deaths <5 years per 1000 population", isCorrect: false },
      { id: "c", text: "Number of deaths <1 year per 1000 population", isCorrect: false },
      { id: "d", text: "Proportion of live births resulting in infant death", isCorrect: false }
    ],
    explanation: "IMR = (Number of deaths <1 year / Total live births) × 1000. India's IMR ~35-40 per 1000 live births (varies by state). Global average ~38. IMR is key indicator of child health and development.",
    difficulty: "EASY" as const,
    bloomsLevel: "REMEMBER" as const,
    examTags: ["Vital Statistics", "Child Health"],
    subjectCode: "CM",
    topicCode: "CM-MOD-EPID-VITAL",
    textbookRefs: ["Park's Textbook - Vital Statistics"]
  },
  {
    type: "single-best-answer" as const,
    stem: "Which vaccine is contraindicated in severely immunocompromised individuals (CD4 <50 cells/μL)?",
    clinicalVignette: "A clinical immunologist counseling an HIV patient on vaccination schedule.",
    options: [
      { id: "a", text: "Live attenuated vaccines (MMR, varicella, rotavirus)", isCorrect: true },
      { id: "b", text: "Inactivated polio vaccine (IPV)", isCorrect: false },
      { id: "c", text: "Hepatitis B vaccine", isCorrect: false },
      { id: "d", text: "Tetanus toxoid", isCorrect: false }
    ],
    explanation: "Live attenuated vaccines contraindicated in severe immunosuppression (CD4 <50) due to reversion risk. Inactivated vaccines safe but may have poor immunogenicity. Vaccinate when CD4 >200; revaccinate after immune recovery (CD4 >200 on ART).",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Immunization", "HIV/AIDS", "CBME-Competency-045"],
    subjectCode: "CM",
    topicCode: "CM-MOD-IMM-CONTRA",
    textbookRefs: ["IAP Immunization Handbook", "Park's Textbook"]
  },
  {
    type: "single-best-answer" as const,
    stem: "What is the incidence of congenital malformations in India per 1000 live births?",
    clinicalVignette: "A geneticist reviewing birth defect epidemiology in the country.",
    options: [
      { id: "a", text: "5-10 per 1000 live births", isCorrect: true },
      { id: "b", text: "1-2 per 1000 live births", isCorrect: false },
      { id: "c", text: "20-30 per 1000 live births", isCorrect: false },
      { id: "d", text: "0.5-1 per 1000 live births", isCorrect: false }
    ],
    explanation: "India's congenital malformation rate ~5-10 per 1000 live births (varies by region, up to 15 in some studies). Major causes: genetic factors, maternal infections (rubella), nutritional deficiency (folic acid), teratogens. Prevention via preconception counseling, folic acid supplementation.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "REMEMBER" as const,
    examTags: ["Birth Defects", "Epidemiology", "Child Health"],
    subjectCode: "CM",
    topicCode: "CM-MOD-EPID-CHILD",
    textbookRefs: ["Park's Textbook - Child Health"]
  },
  {
    type: "single-best-answer" as const,
    stem: "Which microorganisms are most commonly found in hospital-acquired infections (HAIs)?",
    clinicalVignette: "An infection control officer investigating nosocomial infection patterns.",
    options: [
      { id: "a", text: "Staphylococcus aureus, Pseudomonas, E. coli, Candida species", isCorrect: true },
      { id: "b", text: "Mycobacterium tuberculosis, Streptococcus pneumoniae only", isCorrect: false },
      { id: "c", text: "Seasonal viruses and influenza only", isCorrect: false },
      { id: "d", text: "Gram-positive bacteria exclusively", isCorrect: false }
    ],
    explanation: "Common HAI pathogens: Staphylococcus aureus (especially MRSA), Pseudomonas aeruginosa, E. coli, Klebsiella, Acinetobacter, Candida. Resistance patterns (MRSA, ESBL) complicate treatment. Prevention: hand hygiene, sterilization, isolation precautions.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "REMEMBER" as const,
    examTags: ["Infection Control", "Hospital Infections", "Microbiology"],
    subjectCode: "CM",
    topicCode: "CM-MOD-IC-HAI",
    textbookRefs: ["Park's Textbook - Hospital Infection Control"]
  },
  {
    type: "single-best-answer" as const,
    stem: "What is the most effective strategy to reduce healthcare-associated infections (HAIs)?",
    clinicalVignette: "A hospital quality improvement team designing HAI reduction program.",
    options: [
      { id: "a", text: "Regular hand hygiene compliance monitoring and promotion", isCorrect: true },
      { id: "b", text: "Routine use of prophylactic antibiotics for all patients", isCorrect: false },
      { id: "c", text: "Isolation of all hospitalized patients", isCorrect: false },
      { id: "d", text: "Increased disinfection of hospital surfaces only", isCorrect: false }
    ],
    explanation: "Hand hygiene is cornerstone of HAI prevention. WHO Five Moments: before asepsis, before contact, after body fluid exposure, after contact, after environment contact. Compliance 40-60% globally. Improved compliance reduces HAI 30-40%.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Infection Prevention", "Hospital Management", "CBME-Competency-050"],
    subjectCode: "CM",
    topicCode: "CM-MOD-IC-HAND",
    textbookRefs: ["WHO IPC Guidelines", "Park's Textbook"]
  },
  {
    type: "single-best-answer" as const,
    stem: "Which is the target malaria incidence as per WHO elimination strategy?",
    clinicalVignette: "A vector-borne disease control officer planning malaria elimination targets.",
    options: [
      { id: "a", text: "<1 case per 1000 population per year", isCorrect: true },
      { id: "b", text: "<10 cases per 1000 population per year", isCorrect: false },
      { id: "c", text: "Zero cases (eradication)", isCorrect: false },
      { id: "d", text: "<50% reduction from baseline", isCorrect: false }
    ],
    explanation: "WHO malaria elimination target: <1 case per 1000 population per year (at district level). This is operationally feasible. Eradication (<1 case globally) is long-term vision. India targeting elimination in many states by 2027-2030.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "REMEMBER" as const,
    examTags: ["Vector Control", "Malaria", "CBME-Competency-055"],
    subjectCode: "CM",
    topicCode: "CM-MOD-VBD-MALARIA",
    textbookRefs: ["Park's Textbook - Vector Control"]
  },
  {
    type: "single-best-answer" as const,
    stem: "What is the mode of action of insecticide-treated nets (ITNs) in malaria prevention?",
    clinicalVignette: "A malaria control program officer distributing long-lasting insecticidal nets.",
    options: [
      { id: "a", text: "Repelling/killing mosquitoes attempting to bite, and providing physical barrier", isCorrect: true },
      { id: "b", text: "Only providing physical barrier to mosquitoes", isCorrect: false },
      { id: "c", text: "Killing parasites in bloodstream", isCorrect: false },
      { id: "d", text: "Preventing mosquito breeding", isCorrect: false }
    ],
    explanation: "ITNs (especially long-lasting insecticidal nets - LLINs) work via dual action: pyrethroid insecticide kills/repels mosquitoes + polyethylene mesh provides physical barrier. 70-90% effective in prevention when properly used. Duration: 2-3 years.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Vector Control", "Malaria Prevention"],
    subjectCode: "CM",
    topicCode: "CM-MOD-VBD-ITN",
    textbookRefs: ["Park's Textbook - Vector Control"]
  },
  {
    type: "single-best-answer" as const,
    stem: "Which statement is true regarding herd immunity threshold for measles?",
    clinicalVignette: "An immunization program director calculating vaccination targets for measles elimination.",
    options: [
      { id: "a", text: "95% population immunity needed due to high transmissibility (R0~12-18)", isCorrect: true },
      { id: "b", text: "70% population immunity is sufficient", isCorrect: false },
      { id: "c", text: "50% population immunity prevents outbreaks", isCorrect: false },
      { id: "d", text: "Herd immunity not applicable to measles", isCorrect: false }
    ],
    explanation: "Measles R0=12-18 (highly transmissible). Herd immunity threshold = 1-(1/R0) = 95% for R0=20, ~93% for R0=15. Need 2-dose MMR schedule achieving 95%+ coverage for elimination. One dose ~90% effective; two doses ~99% effective.",
    difficulty: "HARD" as const,
    bloomsLevel: "ANALYZE" as const,
    examTags: ["Immunization", "Herd Immunity", "Epidemiology"],
    subjectCode: "CM",
    topicCode: "CM-MOD-IMM-MEASLES",
    textbookRefs: ["Park's Textbook - Herd Immunity"]
  },
  {
    type: "single-best-answer" as const,
    stem: "What is the burden of disease measurement that combines years of life lost from premature death and years lived with disability?",
    clinicalVignette: "Health economist calculating disease burden for priority setting.",
    options: [
      { id: "a", text: "Disability-Adjusted Life Years (DALYs)", isCorrect: true },
      { id: "b", text: "Quality-Adjusted Life Years (QALYs)", isCorrect: false },
      { id: "c", text: "Healthy Life Expectancy (HALE)", isCorrect: false },
      { id: "d", text: "Mortality Rate", isCorrect: false }
    ],
    explanation: "DALY = YLL (Years of Life Lost from premature death) + YLD (Years Lived with Disability). Used for burden of disease estimation and health priority setting. QALYs incorporate quality/utility weights. HALE is expected years in good health. DALYs guide resource allocation.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Health Economics", "Disease Burden", "CBME-Competency-026"],
    subjectCode: "CM",
    topicCode: "CM-MOD-HP-DALY",
    textbookRefs: ["Park's Textbook - Health Metrics"]
  },
  {
    type: "single-best-answer" as const,
    stem: "Which is the most effective water treatment method to remove bacterial and viral contamination?",
    clinicalVignette: "Water safety officer selecting treatment for district water supply.",
    options: [
      { id: "a", text: "Chlorination combined with coagulation/flocculation/sedimentation", isCorrect: true },
      { id: "b", text: "Boiling only", isCorrect: false },
      { id: "c", text: "Filtration alone", isCorrect: false },
      { id: "d", text: "UV light only", isCorrect: false }
    ],
    explanation: "Optimal water treatment: coagulation → flocculation → sedimentation → filtration → chlorination. Removes 99%+ pathogens. Chlorination residual maintains safety in distribution. Standard treatment meets WHO/IS10500 guidelines. Individual boiling practical for small quantities.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Water Safety", "Environmental Health", "CBME-Competency-027"],
    subjectCode: "CM",
    topicCode: "CM-MOD-EH-WATER",
    textbookRefs: ["Park's Textbook - Environmental Health"]
  },
  {
    type: "single-best-answer" as const,
    stem: "What is the Cephalic Index used for in anthropometry?",
    clinicalVignette: "Anthropologist measuring head dimensions.",
    options: [
      { id: "a", text: "Ratio of head breadth to length (classify head shape: dolichocephalic, mesocephalic, brachycephalic)", isCorrect: true },
      { id: "b", text: "Measure of intelligence only", isCorrect: false },
      { id: "c", text: "Assessment of nutritional status", isCorrect: false },
      { id: "d", text: "Diagnosis of congenital anomalies", isCorrect: false }
    ],
    explanation: "Cephalic Index = (Head breadth/Head length) × 100. Dolichocephalic (<75.9), Mesocephalic (76-80.9), Brachycephalic (>81). Historical use in physical anthropology. Not used for intelligence assessment (debunked racial classification). Anthropometric measurements useful for growth assessment.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Anthropometry", "Measurement", "CBME-Competency-028"],
    subjectCode: "CM",
    topicCode: "CM-MOD-EPID-ANTHRO",
    textbookRefs: ["Park's Textbook - Vital Statistics"]
  }
];
