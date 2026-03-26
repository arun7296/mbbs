export const medicineLecturesPart2: Array<{
  topicCode: string;
  contentMd: string;
  estimatedMinutes: number;
}> = [
  {
    topicCode: "IM-MOD-05-TOP-05",
    contentMd: `# Metabolic Bone Disease

Metabolic bone disease encompasses osteoporosis, osteomalacia, rickets, and hyperparathyroidism—conditions where bone turnover, mineralization, or structural integrity is compromised. These disorders are epidemic in India due to dietary calcium insufficiency, limited sun exposure in certain populations, and chronic kidney disease prevalence.

**Osteoporosis** represents reduced bone mineral density (T-score < -2.5 at hip or spine) with intact microarchitecture, predisposing to fragility fractures. Primary osteoporosis affects postmenopausal women (rapid bone loss after estrogen withdrawal) and elderly men (slow progressive loss). Secondary forms arise from hyperparathyroidism, hyperthyroidism, multiple myeloma, and prolonged corticosteroid use.

**Osteomalacia** (soft bones) results from vitamin D deficiency impacting mineralization. Unlike osteoporosis, bone density may appear normal but mineralization is defective. Indian patients often have inadequate vitamin D from limited sun exposure, dietary deficiency (few fortified foods), and malabsorption. Symptoms include bone pain, muscle weakness, and proximal muscle myopathy mimicking polymyositis.

**Rickets** in children presents with growth retardation, bowing of limbs, frontal bossing, and Harrison's groove (horizontal indentation at lower chest). Nutritional rickets (most common in India) responds to vitamin D supplementation. Hypophosphatemic rickets involve genetic mutations and require specialized management.

Diagnosis relies on serum calcium, phosphate, alkaline phosphatase, 25-hydroxyvitamin D, and PTH levels. Bone turnover markers (P1NP, CTX) distinguish high-turnover (secondary hyperparathyroidism) from low-turnover (adynamic bone disease) states. DEXA scan quantifies bone density; however, many osteomalacic patients have normal DEXA findings, necessitating clinical correlation.

Management of osteoporosis includes calcium (1200 mg/day) and vitamin D (800–2000 IU daily), weight-bearing exercises, fall prevention, and pharmacotherapy. Bisphosphonates reduce fracture risk by 50% in high-risk patients. Hormone replacement therapy (HRT) in early postmenopausal women effectively prevents bone loss but carries thromboembolic risk. Vitamin D deficiency is repleted aggressively: 600,000 IU weekly ×6 weeks for severe deficiency, then maintenance.

> 🎓 **Professor's Note**: Osteoporosis is silent until fracture occurs. Screen high-risk patients (postmenopausal women, men >70, chronic corticosteroid use, malabsorption) with DEXA regardless of symptoms.

> 💡 **Memory trick**: Remember "VITAMIN D for Dentition, Bones, Immunity"—vitamin D is essential for calcium absorption and immune function.

> ⚡ **Exam alert**: Distinguish osteoporosis (normal mineralization, low density) from osteomalacia (abnormal mineralization). Elevated alkaline phosphatase with low 25-OH-vitamin D points to osteomalacia.

> 🏥 **Clinical pearl**: Hip fractures in elderly patients triple mortality risk within first year. Aggressive vitamin D and calcium supplementation post-fracture improves outcomes.

{{IMAGE: Histological comparison of normal bone versus osteoporotic versus osteomalacic bone}}

**Ref**: Harrison's Principles of Internal Medicine, 21st ed. Chapter on Metabolic Bone Disease.`,
    estimatedMinutes: 10,
  },
  {
    topicCode: "IM-MOD-05-TOP-06",
    contentMd: `# Geriatric Medicine

Geriatric medicine addresses healthcare of older adults (typically >65 years), accounting for rapid population aging in India. The older population will comprise 20% of Indians by 2050, necessitating systematic geriatric competency in all physicians.

**Physiology of aging** involves progressive decline in organ reserve and autonomic function. Renal clearance decreases 1% annually after age 30, mandating dose adjustment for many drugs. Hepatic metabolism becomes variable; total body water decreases, increasing drug concentration in lipophilic medications. Cognitive reserve diminishes; delirium and dementia prevalence rises steeply after 75 years.

**Comprehensive Geriatric Assessment (CGA)** screens for functional decline, cognitive impairment, depression, polypharmacy, and fall risk—domains often missed in standard history-taking. Physical examination includes gait assessment (slow gait predicts mortality), balance testing, and cognitive screening (Mini-Cog or Montreal Cognitive Assessment).

**Polypharmacy** (>5 medications) is near-universal in older adults and drives adverse drug events. Inappropriate medications (Beers Criteria) should be avoided: anticholinergics worsen cognition, NSAIDs precipitate acute kidney injury, benzodiazepines increase fall and fracture risk. De-prescribing—systematic reduction of ineffective or harmful medications—improves quality of life.

**Geriatric syndromes** are conditions not fitting discrete disease categories: falls, incontinence, delirium, dementia, and frailty. A single fall can cascade into immobility, deconditioning, and loss of independence. Causes are multifactorial: vision loss, polypharmacy, home hazards, and muscle weakness. Fall prevention combines home modifications, physical therapy, medication review, and vision/hearing correction.

**Delirium** is acute confusion superimposed on baseline cognition—a medical emergency often triggered by infection, dehydration, medication (anticholinergics, sedatives), or urinary retention. Unlike dementia's insidious onset, delirium develops hours to days and fluctuates throughout the day. Management addresses underlying cause and maintains orientation.

**Dementia** includes Alzheimer's (60–80% of cases), vascular, Lewy body, and frontotemporal types. Cognitive decline interferes with daily function; behavioral symptoms (agitation, wandering, aggression) complicate care. Donepezil or rivastigmine slows progression modestly in early-stage Alzheimer's. Indian context demands culturally sensitive approaches—family-centered care, involvement of adult children, and addressing caregiver burden.

Cardiovascular disease remains leading cause of mortality, but cancer and neurodegenerative disease account for increasing burden. Preventive screening (mammography, colonoscopy) should be individualized; life expectancy and functional status, not age alone, guide decisions.

> 🎓 **Professor's Note**: Aging is not disease. Distinguish normal aging (slowed gait, presbyopia) from pathological aging (dementia, falls, disability).

> 💡 **Memory trick**: "CGA = Complete evaluation" — Cognition, Gait, Activities of daily living (ADLs), mood, medications.

> ⚡ **Exam alert**: Delirium is medical emergency; dementia is chronic neurodegenerative disease. Delirium superimposed on dementia is common and reversible with treatment.

> 🏥 **Clinical pearl**: Urinary tract infection in older women often presents as acute confusion (delirium), not dysuria. Always screen urine in acute mental status change.

{{IMAGE: Comprehensive Geriatric Assessment framework}}

**Ref**: Harrison's Principles of Internal Medicine, 21st ed. Geriatric Medicine chapter.`,
    estimatedMinutes: 11,
  },
  {
    topicCode: "IM-MOD-05-TOP-07",
    contentMd: `# Clinical Genetics & Genetic Counseling

Clinical genetics applies molecular understanding to diagnosis, risk assessment, and management of hereditary disorders. With falling genomic sequencing costs, genomic medicine is becoming mainstream in India—genetic counseling ensures informed decision-making.

**Inheritance patterns** fundamentally guide diagnosis. Autosomal dominant conditions (Marfan syndrome, familial hypercholesterolemia, hereditary hemochromatosis) require one mutated allele; affected individuals have 50% transmission risk. Autosomal recessive conditions (cystic fibrosis, sickle cell disease, β-thalassemia) require two mutated alleles; carrier parents have 25% affected offspring. X-linked recessive conditions (hemophilia A, Duchenne muscular dystrophy) predominantly affect males; carrier females may have mild symptoms.

**Genetic testing** strategies include targeted single-gene testing (when diagnosis is evident), gene panel testing (multiple genes implicated in phenotype), exome sequencing (all protein-coding genes), and genome sequencing (entire DNA). In India, carrier screening for β-thalassemia, sickle cell disease, and spinal muscular atrophy is now recommended in certain populations.

**Predictive genetic testing** identifies at-risk individuals in families with known mutations before symptoms appear. BRCA1/BRCA2 mutations confer 70–80% lifetime breast cancer risk and 40–50% ovarian cancer risk; affected women benefit from enhanced surveillance (MRI in addition to mammography) or risk-reducing surgery. Lynch syndrome (mismatch repair gene mutations) predisposes to colorectal and endometrial cancer; colonoscopic surveillance begins at age 20–25.

**Pharmacogenomics** tailors medication selection and dosing to individual genetic variation. CYP2C19 variants alter clopidogrel (Plavix) activation, affecting thrombotic risk after stent placement. TPMT deficiency increases thiopurine toxicity. HLA-B*5701 screening prevents abacavir-induced hypersensitivity in HIV patients. Indian populations have distinct allele frequencies; pharmacogenomic applications must account for ancestry.

**Genetic counseling** precedes and follows testing. Pre-test counseling explains test purpose, accuracy, limitations, and implications for family members. Post-test counseling communicates results, interprets significance, and guides management. Variants of uncertain significance (VUS) create anxiety; explaining that VUS may be reclassified as technology improves reassures patients.

**Ethical considerations** include privacy (genetic data is permanent and familial), discrimination risk (employment, insurance), and reproductive autonomy. In India, patriarchal family structures and joint living complicate privacy; counselors must navigate disclosure with sensitivity.

**Common conditions in India**: β-thalassemia major and trait are highly prevalent in Mediterranean, African, and Indian populations. Hereditary hemochromatosis (HFE mutations) is rare in Indian populations but relevant in migrants from European ancestry. Familial hypercholesterolemia (FH) is underdiagnosed; cascade screening of family members identifies young individuals at high coronary risk.

> 🎓 **Professor's Note**: Genetics isn't destiny. Environmental factors modulate expression; a BRCA1 mutation doesn't guarantee cancer if protective factors are present.

> 💡 **Memory trick**: "AD = 50% risk, AR = 25% risk, XLR = males affected" — inheritance pattern determines recurrence risk.

> ⚡ **Exam alert**: Distinguish pathogenic mutations (disease-causing) from benign variants. VUS are not mutations; counsel patience pending further evidence.

> 🏥 **Clinical pearl**: Ashkenazi Jewish ancestry increases BRCA1/BRCA2 and Lynch syndrome prevalence. Always ask ancestry and perform cascade screening in families.

{{IMAGE: Pedigree chart illustrating autosomal dominant and recessive inheritance}}

**Ref**: Harrison's Principles of Internal Medicine, 21st ed. Genomic and Precision Medicine chapter.`,
    estimatedMinutes: 11,
  },
  {
    topicCode: "IM-MOD-05-TOP-08",
    contentMd: `# Nutritional & Metabolic Disorders

Nutritional disorders span protein-energy malnutrition (PEM), micronutrient deficiencies, and obesity—collectively affecting more Indians than any other disease category. Double burden of malnutrition (undernutrition and obesity coexisting) characterizes modern India.

**Protein-Energy Malnutrition (PEM)** results from inadequate intake or malabsorption. Kwashiorkor (protein deficiency) presents with edema, ascites, fatty liver, and psychomotor retardation in children. Marasmus (calorie deficiency) manifests as severe wasting without edema. Mixed PEM causes growth faltering, immune dysfunction, and delayed wound healing. Refeeding syndrome—hyperphosphatemia, hypokalemia, and hypomagnesemia triggered by rapid nutritional repletion—can cause cardiac arrhythmias and death if electrolytes are not monitored.

**Micronutrient deficiencies** are rampant in India. Vitamin B12 deficiency (dietary insufficiency in vegetarians, pernicious anemia, malabsorption) causes megaloblastic anemia and subacute combined degeneration—irreversible spinal cord degeneration if untreated. Folate deficiency (inadequate leafy greens, malabsorption, medications like methotrexate) causes megaloblastic anemia and neural tube defects in pregnancy. Iron deficiency remains leading cause of anemia globally; women of reproductive age are disproportionately affected.

Vitamin A deficiency causes corneal scarring and blindness in children. Iodine deficiency impairs thyroid function and causes endemic goiter. Calcium deficiency combined with vitamin D insufficiency drives rickets and osteomalacia. Zinc deficiency manifests as perioral and perianal dermatitis, alopecia, and immune dysfunction.

**Obesity** (BMI ≥30 kg/m²) is surging in India, particularly in urban areas. Metabolic syndrome—obesity, insulin resistance, hypertension, dyslipidemia—increases cardiovascular and diabetes risk. Bariatric surgery (gastric bypass, sleeve gastrectomy) effectively reduces weight and comorbidities in severely obese patients (BMI >35 with comorbidities, or BMI >40) but carries nutritional sequelae (B12, iron, folate, calcium deficiency).

**Diabetes mellitus type 2** is metabolic disorder of glucose homeostasis; insulin resistance and pancreatic β-cell dysfunction drive hyperglycemia. Microvascular complications (retinopathy, nephropathy, neuropathy) and macrovascular complications (coronary disease, stroke) accumulate over years. Metformin is first-line; GLP-1 agonists reduce cardiovascular events. Glycemic control target (HbA1c <7%) balances hyperglycemia risk against hypoglycemia harm.

**Lipid disorders** increase cardiovascular disease risk. Primary dyslipidemia (genetic) includes familial hypercholesterolemia (FH), familial combined hyperlipidemia, and familial hypertriglyceridemia. Secondary dyslipidemia arises from diabetes, hypothyroidism, nephrotic syndrome, and medications. Statins reduce LDL cholesterol by 30–50%; ezetimibe adds modest benefit. PCSK9 inhibitors (evolocumab, alirocumab) are expensive but dramatically lower LDL in FH patients.

**Metabolic complications** of liver disease include portal hypertension, hepatic encephalopathy, and hepatorenal syndrome. Cirrhosis impairs synthetic function (albumin, clotting factors), glucose metabolism, and ammonia clearance. Lactulose reduces ammonia-producing gut bacteria; L-ornithine L-aspartate (LOLA) enhances ammonia metabolism.

> 🎓 **Professor's Note**: Malnutrition exacerbates every disease. Assess nutritional status in every hospitalized patient.

> 💡 **Memory trick**: "Kwashiorkor = K for 'Kreepy' (edema); Marasmus = M for 'Minus calories'"—visual mnemonics for protein vs. calorie deficiency.

> ⚡ **Exam alert**: Refeeding syndrome is iatrogenic; prevent with slow nutritional repletion and electrolyte monitoring.

> 🏥 **Clinical pearl**: Vegetarian patients with B12 deficiency may need lifelong IM supplementation (1000 µg monthly) because dietary sources are insufficient.

{{IMAGE: Clinical features of kwashiorkor versus marasmus}}

**Ref**: Harrison's Principles of Internal Medicine, 21st ed. Nutrition and Metabolic Disorders chapter.`,
    estimatedMinutes: 12,
  },
  {
    topicCode: "IM-MOD-06-TOP-01",
    contentMd: `# Iron Deficiency & Megaloblastic Anemia

Anemia is reduction in hemoglobin or red blood cell count below reference range; pathophysiology divides into decreased production, increased destruction, and blood loss. Iron deficiency anemia (IDA) is most common globally; megaloblastic anemia results from vitamin B12 or folate deficiency impacting DNA synthesis.

**Iron physiology**: Iron is absorbed in duodenum and proximal jejunum as ferrous (Fe²⁺) form; heme iron (from meat) is absorbed more efficiently than non-heme iron (from plants). Iron is transported by transferrin and stored as ferritin and hemosiderin in liver, spleen, and bone marrow. Normal daily loss is 1–2 mg (menstruation, fecal shedding, skin); absorption matches loss in steady state.

**Iron deficiency** results from inadequate intake, malabsorption, or chronic blood loss. In India, dietary iron is often plant-based and poorly absorbed; vegetarian women are at particular risk. Intestinal parasites (hookworm), celiac disease, and atrophic gastritis impair absorption. Chronic gastrointestinal blood loss from peptic ulcer disease, hemorrhoids, or colorectal cancer must be investigated.

Clinical features include fatigue, dyspnea, palpitations, pallor, and koilonychia (spoon nails). Severe IDA causes glossitis and angular cheilitis. Children with IDA have impaired cognitive development; adolescent girls develop fatigue and reduced academic performance.

Laboratory findings show low hemoglobin, low MCV (microcytic anemia), low serum iron, high TIBC (total iron binding capacity), and low ferritin (<12 ng/mL). Bone marrow shows absent iron stores. Peripheral blood reveals hypochromic, microcytic RBCs with target cells and pencil cells (elliptocytes).

Management: Identify and treat underlying cause. Oral iron (ferrous sulfate 200 mg daily) replenishes stores over months; GI upset is common, requiring dose reduction or switch to alternate formulation. IV iron is reserved for malabsorption or intolerance; iron sucrose and iron isomaltoside are preferred in India due to lower anaphylaxis risk than iron dextran.

**Megaloblastic anemia** results from impaired DNA synthesis (B12 or folate deficiency) causing nuclear-cytoplasmic asynchrony: nuclei remain immature while cytoplasm matures. Megaloblasts are abnormal precursors; circulating cells are macrocytic (elevated MCV).

**Vitamin B12 deficiency** causes pernicious anemia (autoimmune destruction of gastric parietal cells), dietary insufficiency (vegetarians, vegans), malabsorption (celiac, tropical sprue, fish tapeworm), or medications (metformin, PPIs). Neurological manifestations are hallmark: subacute combined degeneration (SCD) involves dorsal and lateral spinal cord columns, causing paresthesias, ataxia, and cognitive changes. SCD is irreversible if untreated; urgent B12 replacement is mandatory.

**Folate deficiency** arises from inadequate intake (leafy greens, legumes), malabsorption (celiac, tropical sprue), increased demand (pregnancy, hemolysis, rapid cell turnover), or medications (methotrexate, trimethoprim). Unlike B12 deficiency, neurological manifestations are absent; megaloblastic anemia and glossitis predominate.

Diagnosis relies on serum B12 and folate levels; elevated methylmalonic acid and homocysteine corroborate B12 deficiency. Intrinsic factor antibodies confirm pernicious anemia. Peripheral blood shows macro-ovalocytes and hypersegmented neutrophils (>5 lobes).

Management: B12 replacement (1000 µg IM monthly) or high-dose oral cyanocobalamin; intrinsic factor antibody-positive patients require IM therapy lifelong. Folate supplementation (5 mg daily) is given cautiously—folate alone may unmask or worsen B12 deficiency neuropathy.

> 🎓 **Professor's Note**: Iron deficiency is not diagnosis; always investigate source of blood loss. A new diagnosis of IDA mandates endoscopy and colonoscopy if age >40.

> 💡 **Memory trick**: "MCVMegaloblastic is Macrocytic (big cells); IDA is Microcytic (small cells)"—size of RBC distinguishes.

> ⚡ **Exam alert**: Subacute combined degeneration is irreversible. Treat B12 deficiency urgently before neurological damage becomes permanent.

> 🏥 **Clinical pearl**: Vegetarian patients with B12 deficiency may need lifelong supplementation (1000 µg IM monthly) since dietary B12 is insufficient.

{{IMAGE: Peripheral blood smears showing hypochromic microcytic RBCs versus macro-ovalocytes}}

**Ref**: Harrison's Principles of Internal Medicine, 21st ed. Anemia chapter.`,
    estimatedMinutes: 12,
  },
  {
    topicCode: "IM-MOD-06-TOP-02",
    contentMd: `# Hemolytic Anemias & Thalassemia

Hemolytic anemias result from increased RBC destruction (shortened lifespan <120 days) overwhelming bone marrow compensatory capacity. Mechanisms include immune hemolysis, mechanical injury, membrane defects, and hemoglobinopathies. Indian context: thalassemia and sickle cell disease are prevalent; glucose-6-phosphate dehydrogenase (G6PD) deficiency affects millions.

**Autoimmune hemolytic anemia (AIHA)** occurs when IgG antibodies coat RBCs; spleen sequesters and destroys antibody-coated cells. Warm AIHA (antibodies react at body temperature) is idiopathic, secondary to lymphoma, SLE, or medications (methyldopa, penicillin). Cold agglutinin disease (CAD, IgM antibodies) is less common, triggered by viral infections or Mycoplasma pneumoniae.

Clinical features: jaundice, dark urine (hemoglobinuria), splenomegaly, fatigue. Laboratory: elevated bilirubin, elevated LDH, low haptoglobin (consumed by hemoglobin-binding), high reticulocyte count (bone marrow response), and positive Coombs test (direct antiglobulin test—DAT; confirms antibody coating).

Management: Corticosteroids (prednisolone 1 mg/kg) suppress antibody production in 60–70%; IV immunoglobulin (IVIG) blocks Fc receptors on macrophages. Splenectomy benefits patients responding to steroids. Rituximab (anti-CD20) is effective in refractory cases.

**G6PD deficiency**: Glucose-6-phosphate dehydrogenase protects RBCs from oxidative damage. Deficiency (X-linked) causes episodic hemolysis triggered by oxidative stress: fava beans (hence "favism"), sulfonamides, NSAIDs, antimalarials (primaquine—classically used to treat P. vivax by targeting hypnozoites), and infections. Hemolytic episodes present with jaundice, dark urine, abdominal pain, and dyspnea. Between episodes, patients are asymptomatic.

Diagnosis: Reduced G6PD enzyme activity (but may be normal during acute hemolysis due to reticulocytosis—repeat testing 3–4 weeks post-episode). Peripheral blood shows Heinz bodies (denatured hemoglobin precipitates visible on supravital stain).

Management: Avoidance of triggers; acute hemolysis is self-limited in most cases, requiring supportive care and hydration.

**Sickle cell disease (SCD)**: Point mutation (glutamic acid → valine at position 6) causes hemoglobin polymerization under low oxygen tension, distorting RBCs into sickle shape. Hemolysis causes chronic anemia (Hb 6–8 g/dL). Vaso-occlusive crises (VOC) occur when sickled RBCs obstruct microvasculature, causing ischemia and pain. Acute chest syndrome (ACS)—pulmonary infarction or infection—is life-threatening.

Indian prevalence is high in certain regions (Deccan Plateau); sickle cell trait protects against malaria (heterozygote advantage).

**Thalassemia**: Genetic defects in globin chain synthesis (α or β chains). β-thalassemia major (homozygous defects) presents in infancy with severe anemia, hepatosplenomegaly, and growth retardation. Transfusion-dependent patients develop iron overload (hemochromatosis) from repeated transfusions. β-thalassemia trait (heterozygous) causes mild anemia and microcytosis, often asymptomatic.

Laboratory: Target cells, nucleated RBCs, and abnormal hemoglobin (HbF and HbA2 elevated in β-thalassemia). Hemoglobin electrophoresis confirms diagnosis.

Management: Supportive transfusions (target Hb ~10 g/dL); iron chelation (deferasirox, deferiprone) prevents organ damage. Hematopoietic stem cell transplant (HSCT) offers cure in select patients with matched donors (5-year survival >90% in children with matched sibling donors). Gene therapy is emerging and may offer cure without HSCT.

> 🎓 **Professor's Note**: Hemolysis is diagnosed clinically (jaundice, dark urine, splenomegaly) and confirmed by elevated reticulocyte count and positive DAT (if immune-mediated).

> 💡 **Memory trick**: "AIHA = Antibodies; G6PD = Oxidative stress; SCD = Sickling under hypoxia; Thalassemia = Low globin"—mechanisms differ.

> ⚡ **Exam alert**: Sickle cell trait (HbAS) is NOT disease; homozygous SCD (HbSS) causes symptomatic disease. Don't conflate.

> 🏥 **Clinical pearl**: G6PD-deficient patients triggered by primaquine during malaria treatment can hemolyze severely. Screen high-risk populations before prescribing.

{{IMAGE: RBC morphology in hemolytic anemias and thalassemia}}

**Ref**: Harrison's Principles of Internal Medicine, 21st ed. Hemolytic Anemias chapter.`,
    estimatedMinutes: 12,
  },
  {
    topicCode: "IM-MOD-06-TOP-03",
    contentMd: `# Leukemias & Lymphomas

Hematologic malignancies arise from clonal expansion of bone marrow precursors (leukemias) or lymphoid tissues (lymphomas). Indian cancer registries show rising incidence; early diagnosis improves survival dramatically.

**Acute Leukemias**: Acute lymphoblastic leukemia (ALL) and acute myeloid leukemia (AML) present with rapid onset of cytopenias (anemia, thrombocytopenia, neutropenia). Symptoms: fatigue, bleeding (petechiae, epistaxis), infections (fever, sepsis), bone pain. Hepatosplenomegaly and lymphadenopathy are common. Leukostasis (high WBC count causing vascular occlusion) is medical emergency presenting with dyspnea and altered mental status.

Diagnosis requires >20% blasts in bone marrow. Flow cytometry, cytochemistry (myeloperoxidase, Sudan black), and cytogenetics define subtype and prognosis. Favorable cytogenetics (t(15;17) in APL, t(8;21) in AML-M2) carry better prognosis.

**Acute promyelocytic leukemia (APL, AML-M3)**: Translocation t(15;17) causes PML-RARA fusion gene. Abnormal promyelocytes release tissue factor, triggering disseminated intravascular coagulation (DIC)—bleeding is life-threatening complication. ATRA (all-trans retinoic acid) induces differentiation; arsenic trioxide is highly effective. Combination therapy achieves >90% complete remission; cure rates exceed 80% in modern series.

**Chronic myeloid leukemia (CML)**: Philadelphia chromosome (t(9;22)) produces BCR-ABL1 fusion gene encoding abnormal tyrosine kinase. Chronic phase presents with leukocytosis, splenomegaly, and basophilia. Tyrosine kinase inhibitors (imatinib, dasatinib, nilotinib) suppress BCR-ABL1, achieving complete cytogenetic response in >95% if started in chronic phase. Accelerated phase and blast crisis are life-threatening and less responsive.

**Lymphomas**: Hodgkin lymphoma (HL) and non-Hodgkin lymphoma (NHL) present with painless lymphadenopathy, constitutional symptoms (fever, night sweats, weight loss—termed "B symptoms"), and hepatosplenomegaly.

**Hodgkin lymphoma**: Characterized by Reed-Sternberg cells (diagnostic hallmark) on histology. Bimodal age distribution (peaks at 20s and 55+). EBV association is strong in developing countries. Staging determines prognosis and treatment. Early-stage HL (I-II, favorable) is cured with radiation therapy; advanced HL requires chemotherapy (ABVD: doxorubicin, bleomycin, vinblastine, dacarbazine) with 5-year survival >90%.

**Non-Hodgkin lymphomas**: Indolent (low-grade) lymphomas like follicular lymphoma and marginal zone lymphoma grow slowly but are incurable. Aggressive (high-grade) lymphomas like diffuse large B-cell lymphoma (DLBCL) and Burkitt lymphoma require urgent chemotherapy but are potentially curable. Rituximab (anti-CD20) added to chemotherapy (R-CHOP) improves outcomes in B-cell lymphomas. T-cell lymphomas (peripheral T-cell lymphoma, cutaneous lymphomas like mycosis fungoides) are rarer and carry poorer prognosis.

Diagnosis: Lymph node biopsy is mandatory; flow cytometry and molecular studies identify lineage and clonality. PET-CT stages disease and assesses treatment response.

**Treatment advances**: CAR-T cell therapy (chimeric antigen receptor T cells engineered to target CD19) induces remission in refractory lymphomas and ALL. Checkpoint inhibitors (nivolumab, pembrolizumab) enhance immunotherapy in select patients.

Prognosis varies widely: indolent lymphomas may have 10+ year survival without initial treatment; aggressive lymphomas require immediate therapy but 50–80% achieve long-term remission with modern multimodal approaches.

> 🎓 **Professor's Note**: Lymphadenopathy + constitutional symptoms is lymphoma until proven otherwise. Don't attribute to infection without biopsy.

> 💡 **Memory trick**: "HL = Reed-Sternberg (looks like owl's eye); NHL = No Reed-Sternberg"—histology distinguishes.

> ⚡ **Exam alert**: APL is medical emergency due to DIC. Treat with ATRA + arsenic; avoid cytotoxic chemotherapy initially (triggers differentiation syndrome).

> 🏥 **Clinical pearl**: CML diagnosed on routine CBC in asymptomatic patients has excellent prognosis with TKI therapy; 10-year survival approaches 90%.

{{IMAGE: Microscopy of Reed-Sternberg cells in Hodgkin lymphoma}}

**Ref**: Harrison's Principles of Internal Medicine, 21st ed. Leukemias and Lymphomas chapters.`,
    estimatedMinutes: 12,
  },
  {
    topicCode: "IM-MOD-06-TOP-04",
    contentMd: `# Bleeding & Coagulation Disorders

Hemostasis involves platelets (primary hemostasis), coagulation cascade (secondary hemostasis), and fibrinolysis. Bleeding disorders arise from platelet dysfunction, coagulation factor deficiencies, or excessive fibrinolysis. In India, hemophilia A and B are underdiagnosed; acquired coagulopathies from liver disease and DIC are common.

**Platelet disorders**: Normal platelet count is 150–400 × 10⁹/L. Thrombocytopenia (<150 × 10⁹/L) results from decreased production (bone marrow failure, chemotherapy), increased destruction (immune thrombocytopenia, DIC, TTP), or sequestration (splenomegaly). Immune thrombocytopenic purpura (ITP) is autoimmune destruction; bleeding manifestations (petechiae, epistaxis, mucosal bleeding) appear when platelets <30 × 10⁹/L. Corticosteroids or IVIG raise platelet count in 60–80%.

Thrombotic thrombocytopenic purpura (TTP) is microangiopathic hemolytic anemia (MAHA) with thrombocytopenia and neurological symptoms; ADAMTS13 deficiency causes severe von Willebrand factor multimer accumulation and platelet aggregation. Plasma exchange is life-saving (removes antibodies or replenishes ADAMTS13).

Disseminated intravascular coagulation (DIC) is triggered by sepsis, trauma, cancer, or severe hemolysis; systemic coagulation activation consumes platelets and clotting factors, paradoxically causing bleeding. Laboratory: thrombocytopenia, elevated INR/PT, low fibrinogen, elevated D-dimer. Management targets underlying cause.

**Coagulation disorders**: Factor deficiencies impair secondary hemostasis. Hemophilia A (factor VIII deficiency, X-linked) and hemophilia B (factor IX deficiency, X-linked) present with joint bleeding (hemarthrosis), muscle hematomas, and easy bruising. Severe hemophilia (factor activity <1%) risks spontaneous bleeding; mild to moderate hemophilia (1–40% activity) bleeds with trauma or surgery. Treatment: factor replacement (recombinant or fresh frozen plasma) and physiotherapy to prevent joint contractures.

Von Willebrand disease (vWD) is most common inherited bleeding disorder; von Willebrand factor (vWF) mediates platelet adhesion and carries factor VIII. Type 1 vWD (most common) is partial quantitative deficiency; Type 2 vWD involves qualitative defects; Type 3 vWD is absence (rare, autosomal recessive). Bleeding manifestations include mucosal bleeding (epistaxis, menorrhagia) and easy bruising. Desmopressin (DDAVP) raises vWF and factor VIII in Type 1 and some Type 2 vWD.

Vitamin K-dependent factors (II, VII, IX, X) are synthesized in liver and require vitamin K as cofactor. Vitamin K deficiency (malabsorption, antibiotic-induced, dietary insufficiency) impairs factor synthesis. Warfarin, a vitamin K antagonist, is used for anticoagulation but requires INR monitoring (target 2–3 for most indications).

Liver disease causes coagulopathy via reduced synthesis of clotting factors (except factor VIII, which may be paradoxically elevated in cirrhosis). Prothrombin time (PT) prolongation reflects impaired synthesis; thrombocytopenia from bone marrow suppression and splenic sequestration is common.

**DIC management**: Stop trigger (source control, sepsis treatment), transfuse platelets if <50 × 10⁹/L, infuse fresh frozen plasma (FFP) or prothrombin complex concentrate (PCC) if bleeding, and avoid prophylactic anticoagulation (increases bleeding risk).

Laboratory evaluation: PT/INR (tests factors II, V, VII, X), aPTT (tests factors VIII, IX, XI, XII), thrombin time (assesses fibrinogen and inhibitors), and platelet count. Mixing studies differentiate factor deficiency (correction with normal plasma) from inhibitors (no correction).

> 🎓 **Professor's Note**: Bleeding history is clinical cornerstone—spontaneous bleeding suggests severe deficiency; post-trauma or post-surgical bleeding suggests mild-moderate disease or platelet dysfunction.

> 💡 **Memory trick**: "PT = ProThrombin (factors II, V, VII, X); aPTT = activated Partial Thromboplastin time (VIII, IX, XI, XII)"—test names hint at factors tested.

> ⚡ **Exam alert**: TTP is medical emergency. Plasma exchange, not platelet transfusion (worsens thrombosis). Remember: pentad = MAHA, thrombocytopenia, neurological, renal, fever.

> 🏥 **Clinical pearl**: Hemophilia A is X-linked; affected males have affected mothers (carriers) or affected maternal grandfather. Genetic counseling is essential.

{{IMAGE: Coagulation cascade with PT and aPTT landmarks}}

**Ref**: Harrison's Principles of Internal Medicine, 21st ed. Bleeding and Thrombotic Disorders chapter.`,
    estimatedMinutes: 11,
  },
  {
    topicCode: "IM-MOD-07-TOP-01",
    contentMd: `# Stroke

Stroke—acute focal neurological deficit from sudden cerebrovascular event—is leading cause of disability and third-leading cause of mortality in India. Ischemic stroke (80–85%) results from arterial occlusion; hemorrhagic stroke (15–20%) results from bleeding.

**Ischemic stroke pathophysiology**: Thrombotic stroke follows atherosclerotic plaque rupture and local thrombosis (most common, ~50%); embolic stroke arises from cardiac sources (atrial fibrillation, recent MI, valvular disease, ~20%); lacunar stroke involves small penetrating arteries (~25%). Hypoperfusion and watershed zone infarction occur with severe hypotension or severe carotid stenosis.

Risk factors: hypertension (most significant), diabetes, smoking, hyperlipidemia, atrial fibrillation, prior stroke, obesity, physical inactivity. Indians have higher stroke risk at younger age and lower BMI compared to Western populations (metabolic syndrome and insulin resistance contributions).

**Clinical presentation**: Sudden onset of focal deficits: unilateral weakness (motor), face droop, speech difficulty (aphasia, dysarthria), vision loss, vertigo, ataxia. NIH Stroke Scale (NIHSS) quantifies severity (0–42; higher = worse). Differential includes Todd's paralysis (post-ictal), hemiplegic migraine, hypoglycemia, and metabolic encephalopathy—imaging and glucose measurement are essential.

**Diagnosis**: Non-contrast CT excludes hemorrhage (mandatory before thrombolysis). Advanced imaging (CTA, perfusion CT/MRI, DWI-MRI) delineates ischemic core and penumbra (tissue still potentially salvageable). Time from symptom onset is critical: thrombolysis window is 4.5 hours; mechanical thrombectomy window extends to 24 hours in select patients with large penumbra.

**Management—acute phase**: Thrombolytic therapy (IV alteplase/tPA 0.9 mg/kg, max 90 mg) within 4.5 hours of symptom onset reduces disability (number needed to treat [NNT] = 10 for benefit vs. harm). Mechanical thrombectomy (stent retrieval) is indicated for proximal vessel occlusion (ICA, MCA M1) if performed within 24 hours and penumbra is evident. Thrombectomy plus thrombolysis is superior to either alone in proximal occlusion.

Supportive care: Maintain normothermia (fever worsens outcome), manage blood pressure (avoid aggressive lowering; target systolic 160–180 mm Hg in acute phase), ensure euglycemia (hyperglycemia worsens ischemic damage), and elevate head 30 degrees. Aspirin 325 mg daily reduces recurrent stroke risk by ~13%.

**Stroke subtypes—secondary prevention**:
- Atherothrombotic: High-intensity statins (atorvastatin 80 mg), dual antiplatelet (aspirin + clopidogrel) for 90 days, then aspirin monotherapy. Carotid endarterectomy reduces stroke risk if stenosis >70% (or >50% if symptomatic).
- Cardioembolic: Anticoagulation with warfarin (target INR 2–3) or DOAC (dabigatran, apixaban, edoxaban, rivaroxaban) reduces stroke recurrence by ~60%.
- Lacunar: Antiplatelets and blood pressure control; intensive BP lowering (target <130/80) reduces recurrent lacunar stroke.

**Hemorrhagic stroke**: Intracerebral hemorrhage (ICH) from hypertension, anticoagulation, or amyloid angiopathy; subarachnoid hemorrhage (SAH) from ruptured aneurysm. ICH management: reverse anticoagulation urgently, strict blood pressure control (permissive hypertension is harmful; target systolic <140 mm Hg), avoid ICP-raising maneuvers, and surgical evacuation if hematoma >30 mL or significant mass effect.

**Complications**: Post-stroke depression (30%), dementia, spasticity, and aspiration pneumonia are common. Rehabilitation (physical, occupational, speech therapy) begun early improves functional recovery; neuroplasticity is maximal in first 3 months.

> 🎓 **Professor's Note**: "Time is brain"—every minute of ischemia causes neuronal loss. Swift imaging and thrombolysis/thrombectomy are paramount.

> 💡 **Memory trick**: "FAST = Face droop, Arm weakness, Speech difficulty, Time to call ambulance"—rapid recognition enables thrombolytic eligibility.

> ⚡ **Exam alert**: Thrombolytic contraindications include active bleeding, recent surgery, INR >1.7, platelet <100 × 10⁹/L, and severe hypoglycemia. Always screen before giving tPA.

> 🏥 **Clinical pearl**: Atrial fibrillation increases stroke risk 5-fold; anticoagulation (DOAC preferred over warfarin in most) reduces recurrence by 60%. Screen all stroke patients with ECG and rhythm monitoring.

{{IMAGE: MRI DWI showing acute ischemic stroke in MCA territory}}

**Ref**: Harrison's Principles of Internal Medicine, 21st ed. Cerebrovascular Diseases chapter.`,
    estimatedMinutes: 12,
  },
  {
    topicCode: "IM-MOD-07-TOP-02",
    contentMd: `# Epilepsy

Epilepsy is disorder of recurrent, unprovoked seizures arising from abnormal neuronal electrical activity. In India, epilepsy prevalence is 3–5 per 1000 (higher than Western countries, likely due to higher rates of CNS infections, head trauma, and lower treatment access). Sudden unexpected nocturnal death in epilepsy (SUDEP) causes 1 in 1000 deaths in epilepsy patients annually.

**Seizure classification**: Generalized seizures involve both hemispheres from onset—tonic-clonic (GTCS: sudden loss of consciousness, rigid extension, followed by rhythmic contractions), absence (brief 5–20 second loss of consciousness, staring spell), myoclonic (sudden jerks), atonic (drop attacks). Focal seizures originate in one hemisphere—motor (rhythmic twitching), sensory (paresthesias), autonomic (palpitations, sweating), behavioral (automatisms—lip smacking, picking), or cognitive (déjà vu, fear).

**Etiology**: Idiopathic (no structural cause, genetic predisposition) accounts for ~60%; symptomatic causes include prior stroke, trauma, CNS infection, tumor, developmental abnormality, and cortical malformation. Cryptogenic epilepsy (suspected structural but imaging-negative) is increasingly recognized as genetic.

**First seizure management**: Exclude provoked seizures (fever, hypoglycemia, drug withdrawal, electrolyte abnormality, toxin, infection). EEG shows interictal abnormalities (spikes, sharp waves) supporting epilepsy diagnosis. MRI of brain detects structural lesions. Initiate antiepileptic drugs (AEDs) after second unprovoked seizure (diagnosis of epilepsy) unless first seizure was severe, EEG is abnormal, or imaging shows lesion.

**Antiepileptic drugs (AEDs)**: First-line agents (choice depends on seizure type, comorbidities, drug interactions):
- **Focal seizures**: Levetiracetam (broad-spectrum, well-tolerated, no drug interactions), lacosamide, lamotrigine (slow titration, rash risk if rapid escalation—HLA-B*1502 testing in Asian populations).
- **Generalized tonic-clonic**: Valproate (highly effective but teratogenic, weight gain, hair loss), lamotrigine, levetiracetam.
- **Absence**: Ethosuximide (first-line), lamotrigine, valproate.
- **Myoclonic**: Valproate, levetiracetam.

Second-line agents (lacosamide, pregabalin, oxcarbazepine) are added if monotherapy fails. ~70% achieve seizure freedom on single drug; 10–15% achieve freedom on combination therapy; 10–15% are drug-resistant.

**Drug interactions**: Valproate and phenytoin (now rarely used due to toxicity) induce hepatic metabolism, reducing efficacy of oral contraceptives, warfarin, and other AEDs. Lamotrigine levels are reduced by oral contraceptives and valproate; dose adjustment is necessary.

**Teratogenicity**: Valproate carries highest teratogenic risk (neural tube defects, developmental delay); lamotrigine and levetiracetam are safer in pregnancy. Women of child-bearing potential on valproate should use effective contraception and be counseled.

**Status epilepticus**: Prolonged or recurrent seizures without recovery is medical emergency. Treat with benzodiazepines (lorazepam IV 4 mg or diazepam IV 10 mg) followed by rapid-sequence intubation and second-line AEDs (loading dose levetiracetam or phenytoin/fosphenytoin). Cerebral edema, hyperthermia, rhabdomyolysis, and aspiration are complications.

**Driving restrictions**: Seizure freedom duration (typically 3–12 months) required before driving; regulations vary by country. Counsel patients on SUDEP risk; seizure-alert dogs and implantable seizure-detection devices (pending technology) may reduce risk.

**Psychosocial**: Depression and anxiety are comorbid in ~30%; cognitive effects of AEDs vary (levetiracetam may worsen behavior in some). Social stigma in India necessitates counseling and family education.

> 🎓 **Professor's Note**: Not all seizures are epilepsy. Single provoked seizure doesn't warrant lifelong AED therapy; diagnosis requires unprovoked seizure(s) or high-risk EEG.

> 💡 **Memory trick**: "START = Seizure, sTatus, Acute (provoked), Recurrent (unprovoked = epilepsy), Tics"—helps classify events.

> ⚡ **Exam alert**: Status epilepticus is medical emergency—benzos first, then AED loading. Avoid phenytoin (poor kinetics); use levetiracetam or fosphenytoin.

> 🏥 **Clinical pearl**: Valproate is teratogenic; lamotrigine and levetiracetam are safer in women planning pregnancy. Counsel all women of reproductive age.

{{IMAGE: EEG showing spike-and-wave discharges in generalized epilepsy}}

**Ref**: Harrison's Principles of Internal Medicine, 21st ed. Epilepsy chapter.`,
    estimatedMinutes: 11,
  },
  {
    topicCode: "IM-MOD-07-TOP-03",
    contentMd: `# Meningitis & Encephalitis

Meningitis—inflammation of meninges—and encephalitis—inflammation of brain parenchyma—are medical emergencies with high mortality and morbidity if delayed. In tropical India, enteroviruses, dengue, and tuberculosis are major causes; bacterial meningitis carries ~15% mortality even with treatment.

**Bacterial meningitis**: Streptococcus pneumoniae and Neisseria meningitidis are most common in developed countries; in India, Mycobacterium tuberculosis (TB meningitis) and gram-negative bacilli (from healthcare-associated infection) are increasingly prevalent. Pathogenesis: organism enters bloodstream, crosses blood-brain barrier, and triggers inflammatory cascade causing meningeal inflammation, cerebral edema, and elevated intracranial pressure (ICP).

Clinical presentation: Classic triad—fever, headache, neck stiffness—present in <50% of cases. Additional features: altered mental status, rash (petechial/purpuric in meningococcal), photophobia, irritability. Infants may lack neck stiffness; signs include irritability, bulging fontanelle, and seizures.

Diagnosis: Lumbar puncture (LP) with CSF analysis is gold standard. Bacterial meningitis shows elevated opening pressure (>25 cm H₂O), high protein (>100 mg/dL, often >500), low glucose (<45 mg/dL or <40% serum glucose), and pleocytosis (predominantly neutrophils). Gram stain and culture identify organism. Blood cultures should be obtained before antibiotics.

**TB meningitis**: Presents insidiously (days to weeks) with low-grade fever, headache, and altered sensorium. CSF shows lymphocytic pleocytosis, very high protein (>200 mg/dL), and very low glucose (<20 mg/dL). AFB smear is low-sensitivity (10–20%); culture takes weeks. GeneXpert MTB/RIF has higher sensitivity and rapid turnaround (~2 hours). Cranial nerve involvement (CN II, VI, VII, VIII most common) occurs in ~30%, causing vision loss, diplopia, facial weakness, or hearing loss.

**Viral meningitis**: Enteroviruses (coxsackie, echo) cause most cases, presenting with acute fever and meningeal signs. CSF shows lymphocytic pleocytosis, normal glucose, and moderately elevated protein. Enteroviral PCR confirms diagnosis. Course is self-limited in most; acyclovir is given empirically until HSV encephalitis is excluded.

**Encephalitis**: Inflammation of brain parenchyma causing altered consciousness, behavioral changes, personality change, memory loss, and sometimes seizures. Japanese encephalitis (JE), dengue hemorrhagic fever (DHF), and measles encephalitis are major causes in India. Diagnosis: MRI shows temporal lobe involvement in HSV (classic finding), diffuse gray matter involvement in viral encephalitis. CSF PCR identifies HSV, enterovirus, dengue. EEG shows slowing, sometimes periodic sharp waves (HSV encephalitis).

**Management—meningitis**: Empiric antibiotics must be started immediately (before LP if LP delayed); delay of even 30 minutes increases mortality. Ceftriaxone (2 g IV Q12H) or cefotaxime (2 g IV Q4–6H) covers most bacteria; add vancomycin if pneumococcal resistance suspected, and ampicillin if >50 years (covers Listeria). For TB meningitis, four-drug regimen (RIPE: rifampicin, isoniazid, pyrazinamide, ethambutol) for 2 months followed by INH + rifampicin for 7 months is standard. High-dose corticosteroids (dexamethasone 10 mg IV Q6H × 4 days) initiated with antibiotics reduce hearing loss and mortality in bacterial meningitis.

Supportive care: ICP monitoring if altered consciousness, maintain normothermia, manage seizures with AEDs, and fluid management (avoid hyponatremia from SIADH).

**Complications**: Subdural empyema, ventriculitis, hydrocephalus, cerebral infarction (from vasculitis), and hearing loss (15–30% in survivors) are common. Seizures occur in 20–40% and may be early (within 1 week) or late (after 1 week). Neurological sequelae (cognitive impairment, behavioral changes, focal deficits) occur in ~25% of survivors.

> 🎓 **Professor's Note**: Meningitis is medical emergency—treat first, investigate later. Don't delay antibiotics for LP if septic shock suspected.

> 💡 **Memory trick**: "Low glucose + high protein + lymphocytes = TB meningitis; Normal glucose + lymphocytes = Viral meningitis; High protein + neutrophils = Bacterial"—CSF profile guides diagnosis.

> ⚡ **Exam alert**: Dexamethasone given with first antibiotic dose reduces mortality and hearing loss in bacterial meningitis. Omitting corticosteroids is high-risk error.

> 🏥 **Clinical pearl**: TB meningitis in India is increasing, especially in urban areas and HIV+ patients. Always consider TB in subacute meningitis, even with normal CSF acid-fast stain.

{{IMAGE: CSF analysis patterns in bacterial, TB, and viral meningitis}}

**Ref**: Harrison's Principles of Internal Medicine, 21st ed. Meningitis and Encephalitis chapters.`,
    estimatedMinutes: 12,
  },
  {
    topicCode: "IM-MOD-07-TOP-04",
    contentMd: `# Peripheral Neuropathy & Guillain-Barré Syndrome

Peripheral neuropathy—disorder of peripheral nerves—presents with sensory loss, weakness, or autonomic dysfunction. In India, diabetes-related neuropathy affects ~25% of diabetics; leprosy and TB are significant causes despite control programs.

**Classification**: Mononeuropathy (single nerve), polyneuropathy (multiple nerves, usually symmetric and distal-to-proximal), and mononeuropathy multiplex (multiple individual nerves asymmetrically affected, suggesting vasculitis or infiltration). By type: sensorimotor (most common), purely sensory, purely motor, or autonomic.

**Etiology**: Diabetes (most common in developed countries; in India, alcohol, malnutrition, and infections are co-prevalent), alcohol (toxic effect on peripheral nerves), chemotherapy (vincristine, cisplatin), medications (antiretrovirals, metronidazole), infections (leprosy, TB, HIV, Lyme disease outside India), metabolic (renal failure, hypothyroidism), autoimmune (vasculitis, celiac disease), and nutritional (B12, thiamine deficiency).

**Clinical presentation**: Distal, symmetric sensory loss (stocking-glove distribution) in length-dependent polyneuropathy, progressing proximally with time. Weakness is less prominent than sensory loss in most neuropathies (exception: motor neuropathies and motor-dominant forms like GBS). Proprioceptive loss causes sensory ataxia (wide-based gait, positive Romberg sign). Neuropathic pain is prominent in some (burning feet in diabetes) but absent in others (e.g., demyelinating neuropathies).

**Diagnosis**: Clinical evaluation (careful sensory and motor exam), nerve conduction studies (NCS) and electromyography (EMG) differentiate demyelinating (slowed conduction velocity, prolonged latency) from axonal neuropathy (reduced amplitude, preserved conduction velocity). Blood work: glucose, renal function, liver function, vitamin B12, and thyroid function. Specific antibody tests (vasculitis markers, tissue transglutaminase for celiac disease) if indicated.

**Diabetic neuropathy**: Most common complication of diabetes, affecting 50% of patients with >25-year disease duration. Distal sensory neuropathy (DSPN) is most common form; neuropathic pain limits quality of life. Prevention: optimal glycemic control, blood pressure control, and lipid management slow progression. Treatment: gabapentin, pregabalin, duloxetine for neuropathic pain; foot care is paramount (inspect daily, avoid barefoot walking) to prevent ulcers and amputation.

**Guillain-Barré Syndrome (GBS)**: Acute autoimmune demyelinating polyneuropathy—medical emergency. Postinfectious in ~60% (Campylobacter jejuni most common, also preceding viral illness). Pathology: antibodies against myelin antigens (GM1 in axonal variant) cause demyelination and axonal degeneration. Presents with rapid ascending flaccid paralysis (hours to days), reaching maximum disability within 2–4 weeks. Areflexia (absent reflexes) is cardinal sign.

Variants: Demyelinating (AIDP, most common in India and developed countries, ~90%) shows prolonged distal latencies and conduction blocks on NCS. Axonal (AMAN) variant is more common in East Asia, associated with C. jejuni infection.

Autonomic involvement is frequent: tachycardia, labile blood pressure, facial flushing. Respiratory muscle involvement necessitates mechanical ventilation in ~25%; ICU monitoring is essential. Dysarthria and dysphagia occur in ~50%.

**GBS management**: Intravenous immunoglobulin (IVIG, 2 g/kg total over 3–5 days) or plasmapheresis (exchange 40–50 mL/kg plasma over 7–14 days) reduces duration of mechanical ventilation and accelerates recovery if started within 2 weeks of symptom onset. Supportive care: mechanical ventilation as needed, DVT prophylaxis, nutritional support, and early rehabilitation. ~80% achieve good recovery; ~10–15% have residual weakness.

**Leprosy-associated neuropathy**: Hansenula leprae invades peripheral nerves, causing demyelination. India has >100,000 registered leprosy cases. Tuberculoid leprosy causes few, well-demarcated lesions with asymmetric nerve thickening; lepromatous leprosy causes numerous ill-demarcated lesions with minimal nerve involvement initially. Type 1 lepra reactions (reversal reactions) and Type 2 (erythema nodosum leprosum—ENL) cause nerve inflammation and deterioration.

> 🎓 **Professor's Note**: Neuropathy onset and progression speed guide etiology: acute onset suggests infection or autoimmune; chronic progressive suggests metabolic or hereditary.

> 💡 **Memory trick**: "GBS = Got Bereaved? Sudden ascending paralysis 1-4 weeks after infection, areflexia, respiratory risk"—rapid progression is key distinguishing feature.

> ⚡ **Exam alert**: GBS is medical emergency—monitor respiratory function (vital capacity, NIF), prepare for intubation. Autonomic instability requires ICU monitoring.

> 🏥 **Clinical pearl**: In India, consider leprosy and TB in any peripheral neuropathy patient. Early treatment prevents nerve damage and disability.

{{IMAGE: NCS pattern distinguishing demyelinating versus axonal neuropathy}}

**Ref**: Harrison's Principles of Internal Medicine, 21st ed. Peripheral Neuropathies chapter.`,
    estimatedMinutes: 11,
  },
  {
    topicCode: "IM-MOD-07-TOP-05",
    contentMd: `# Parkinson's & Movement Disorders

Parkinson's disease (PD) is progressive neurodegenerative disorder characterized by resting tremor, rigidity, bradykinesia, and postural instability. India has ~1 million PD patients; disease burden is underestimated due to misdiagnosis and limited specialist access.

**Pathophysiology**: Degeneration of dopaminergic neurons in substantia nigra pars compacta causes dopamine depletion in basal ganglia, disrupting motor control circuits. α-synuclein misfolding and aggregation (Lewy bodies) is pathological hallmark. Etiology is multifactorial: genetic (LRRK2, GBA mutations account for ~5–10% of familial cases, higher penetrance in certain populations including Indian Sikhs) and environmental (pesticide exposure, head trauma history).

**Cardinal features**: Resting tremor (4–6 Hz, "pill-rolling"), muscular rigidity (uniform "lead-pipe" resistance), and bradykinesia (slow movement, loss of automaticity—reduced arm swing, masked facies, hypophonia) are motor hallmarks. Postural instability (falls risk) and freezing of gait (sudden inability to initiate or continue movement) appear in advanced stages. Non-motor features—hyposmia (olfactory dysfunction), REM sleep behavior disorder, depression, constipation, orthostatic hypotension—often precede motor symptoms by years.

**Diagnosis**: Clinical, based on cardinal features and response to dopamine replacement. Supportive red flags: asymmetric onset, unilateral predominance early, response to levodopa. Red flags for atypical parkinsonism: early falls, dementia, dysarthria, or lack of tremor (suggest progressive supranuclear palsy—PSP; multiple system atrophy—MSA; corticobasal degeneration—CBD).

**Management—pharmacological**: Levodopa (converted to dopamine) remains gold standard and most effective; combined with carbidopa (peripheral decarboxylase inhibitor preventing peripheral conversion). Early dopamine agonists (bromocriptine, pramipexole, ropinirole) reduce levodopa requirement and motor complications, but parkinsonism progression is not slowed. MAO-B inhibitors (selegiline, rasagiline) provide modest symptomatic benefit. COMT inhibitors (entacapone, tolcapone) extend levodopa half-life, reducing end-of-dose fluctuations.

Motor complications develop after 5–10 years: motor fluctuations (wearing-off, on-off dyskinesias) and levodopa-induced dyskinesias (involuntary movements). Extended-release formulations and catechol-O-methyltransferase (COMT) inhibitors reduce fluctuations. Apomorphine or rotigotine transdermal patch provides additional options.

**Deep brain stimulation (DBS)**: Subthalamic nucleus or globus pallidus internus stimulation reduces motor symptoms and motor complications in advanced PD. Candidates have motor fluctuations or dyskinesias refractory to medication optimization and intact cognition.

**Non-motor management**: SSRIs or SNRIs for depression; midodrine for orthostatic hypotension; mirabegron for overactive bladder; laxatives and stool softeners for constipation; melatonin or clonazepam for REM sleep behavior disorder.

**Atypical parkinsonian syndromes**: Multiple system atrophy (MSA)—parkinsonian, cerebellar, and autonomic features; early autonomic failure (orthostatic hypotension, incontinence, sexual dysfunction) distinguishes from PD. Progressive supranuclear palsy (PSP)—early vertical gaze palsy (downgaze preference), early falls, pseudobulbar palsy. Corticobasal degeneration (CBD)—asymmetric cortical signs (apraxia, alien limb, cortical sensory loss) with parkinsonism. Lewy body dementia—cognitive decline with parkinsonism and visual hallucinations.

**Prognosis**: PD is non-fatal but progressive. Death typically results from fall-related complications, aspiration pneumonia, or autonomic dysfunction in advanced stages. Life expectancy is only ~5–10 years shorter than age-matched controls with optimal management.

> 🎓 **Professor's Note**: "Hyposmia precedes tremor"—smell testing may aid early diagnosis in subtle cases.

> 💡 **Memory trick**: "TRAP = Tremor, Rigidity, Akinesia (bradykinesia), Posture instability"—mnemonic for PD cardinal features.

> ⚡ **Exam alert**: Atypical parkinsonian syndromes (MSA, PSP, CBD) are dopamine-resistant; levodopa trial helps distinguish PD from atypical variants.

> 🏥 **Clinical pearl**: Early non-motor features (constipation, hyposmia, RBD) predict PD years before tremor appears. Screening for these may enable neuroprotective intervention.

{{IMAGE: Substantia nigra depigmentation in PD brain autopsy}}

**Ref**: Harrison's Principles of Internal Medicine, 21st ed. Parkinsonism and Movement Disorders chapter.`,
    estimatedMinutes: 11,
  },
  {
    topicCode: "IM-MOD-07-TOP-06",
    contentMd: `# Headache & Migraine

Headache is most common neurological complaint; while usually benign, red flags (sudden severe onset, fever, focal neurological signs, consciousness change) indicate serious underlying pathology. Migraine affects ~10% of population; economic impact is substantial due to lost productivity.

**Primary headaches** (no structural cause): Migraine, tension-type headache, cluster headache, and primary stabbing headache.

**Migraine** is neurovascular disorder with stereotyped attacks lasting 4–72 hours. Pathophysiology involves cortical spreading depression (neuronal hyperexcitability followed by depression), trigeminal system activation, and neuroinflammation. Genetic and environmental triggers include hormonal fluctuations (estrogen withdrawal in women), sleep deprivation, stress, certain foods (chocolate, aged cheese, MSG), and weather changes.

Classic presentation: Prodrome (mood change, cravings, yawning hours before), aura (visual disturbances—scotomas, fortification spectra—or sensory symptoms lasting <60 minutes), headache (unilateral, throbbing, 4–72 hours), and autonomic symptoms (nausea, vomiting, photophobia, phonophobia). Migraine without aura (75% of cases) lacks aura phase. Migraine with aura carries increased stroke risk, particularly with oral contraceptive use or smoking.

Management—acute: Triptan (sumatriptan 50 mg oral, or 6 mg SC for severe; other triptans: rizatriptan, zolmitriptan) aborts migraine if taken early; efficacy decreases if taken after headache peak. NSAIDs (ibuprofen 400–800 mg, naproxen 500 mg) or paracetamol are first-line in mild-moderate migraine. Combination analgesics (aspirin + caffeine + acetaminophen) are effective but risk medication overuse headache if used >10 days/month.

Prevention (for ≥4 migraines/month): Beta-blockers (propranolol 160–240 mg/day, metoprolol), tricyclic antidepressants (amitriptyline 25–100 mg/day), topiramate (50–200 mg/day), or CGRP monoclonal antibodies (erenumab, fremanezumab, eptinezumab) reduce migraine frequency by ~50%. CGRP inhibitors are highly effective but expensive; cost limits access in India.

**Tension-type headache**: Most common primary headache; bilateral, pressing quality, 30 minutes to several hours, minimal autonomic symptoms. Often stress-related; muscle relaxants and stress management are helpful. Chronic form (≥15 days/month) may benefit from amitriptyline.

**Cluster headache**: Unilateral orbital pain (excruciatingly severe), 15–180 minutes, multiple attacks daily during 4–12 week periods ("clusters"), separated by remissions of months to years. Autonomic features: ipsilateral lacrimation, nasal congestion, conjunctival injection, miosis (Horner's features). More common in males. Acute treatment: high-flow oxygen (100% × 15 minutes) or sumatriptan injection. Prevention: verapamil (dosing up to 960 mg/day) or topiramate.

**Secondary headaches** require imaging: subarachnoid hemorrhage (sudden "worst headache of life," neck stiffness, focal deficits), meningitis (fever + headache + neck stiffness), temporal arteritis (elderly, >1 hour, scalp tenderness, jaw claudication, elevated ESR), acute angle-closure glaucoma (severe eye pain, visual halos, mid-dilated pupil), and idiopathic intracranial hypertension (obese young women, visual obscurations, papilledema).

**Red flags requiring urgent investigation**: Sudden severe onset, fever, meningeal signs, focal neurological deficits, altered consciousness, papilledema, progressive headache, headache pattern change, seizures, or age >50 at first severe headache. Imaging (CT or MRI) is indicated.

**Medication overuse headache**: Daily or near-daily headache resulting from chronic analgesic use (≥10–15 days/month). Withdrawal (abrupt discontinuation after transition to preventives) is treatment; acute medication overuse perpetuates cycle.

> 🎓 **Professor's Note**: Migraine is clinical diagnosis based on criteria (IHS—International Headache Society). Imaging is unnecessary if criteria met and no red flags present.

> 💡 **Memory trick**: "4-hour-4-day migraine = 4–72 hours throbbing, unilateral, nausea/photophobia"—remembering time window aids diagnosis.

> ⚡ **Exam alert**: Migraine with aura + oral contraceptives + smoking = high stroke risk. Counsel patients to consider progesterone-only methods or non-hormonal contraception.

> 🏥 **Clinical pearl**: Medication overuse headache is iatrogenic—counsel all chronic headache patients to limit analgesics to ≤10 days/month and to use preventive therapy.

{{IMAGE: Visual aura patterns in migraine with aura}}

**Ref**: Harrison's Principles of Internal Medicine, 21st ed. Headache chapter.`,
    estimatedMinutes: 10,
  },
  {
    topicCode: "IM-MOD-08-TOP-01",
    contentMd: `# Rheumatoid Arthritis

Rheumatoid arthritis (RA) is chronic systemic autoimmune disease targeting synovial joints, causing inflammation, joint destruction, and disability. India has ~5–10 million RA patients; earlier diagnosis and treat-to-target strategies have transformed outcomes from ~50% remission to >70% in modern cohorts.

**Pathophysiology**: Autoimmunity against citrullinated proteins (post-translational modification) and IgG Fc regions (rheumatoid factor—RF) drives inflammation. Genetic predisposition (HLA-DR4/DRB1 alleles, ~60% heritability) and environmental triggers (smoking, infections, gut dysbiosis) activate autoreactive T and B cells. Synovial inflammation recruits macrophages and neutrophils; TNFα, IL-6, and IL-1 perpetuate inflammation, causing cartilage and bone destruction via osteoclast activation.

**Clinical presentation**: Polyarticular symmetric joint involvement (PIP, MCP, wrists, knees, ankles)—typically morning stiffness >1 hour, swelling, erythema, warmth, and pain on motion. Insidious onset over weeks to months. Extra-articular manifestations: rheumatoid nodules (elbows, fingers), vasculitis (cutaneous, visceral), pulmonary involvement (interstitial lung disease, pleural effusion—in ~30%), cardiac involvement (pericarditis), anemia of chronic disease, and increased cardiovascular disease risk.

**Diagnosis**: Clinical criteria (ACR/EULAR 2010) incorporate serology (RF, anti-CCP antibodies), acute phase reactants (ESR, CRP), joint involvement, and duration (≥6 weeks). Anti-CCP antibodies are more specific (95%) than RF (80%) and appear earlier; presence predicts aggressive disease and joint damage progression.

**Disease activity assessment**: Disease Activity Score 28 (DAS28) uses joint count, ESR, and global assessment to categorize remission, low, moderate, and high activity. Target: DAS28 <2.6 (remission) or <3.2 (low activity). Regular monitoring (every 4–12 weeks) guides therapy escalation.

**Management—DMARDs (Disease-Modifying Antirheumatic Drugs)**: Methotrexate (15–25 mg weekly) is anchor drug, combining efficacy with acceptable toxicity; monitoring for hepatotoxicity, myelosuppression, and pneumonitis is essential. Sulfasalazine (2–3 g/day) and leflunomide (20 mg/day) are alternatives if methotrexate intolerance. Combination conventional synthetic DMARDs are superior to monotherapy in early RA.

**Biologic DMARDs**: TNF inhibitors (infliximab, etanercept, adalimumab) revolutionized RA therapy; 50–70% achieve remission or low activity when combined with methotrexate. IL-6 inhibitors (tocilizumab), T-cell costimulation inhibitors (abatacept), and B-cell depletion (rituximab) are alternative or add-on options. JAK inhibitors (tofacitinib, baricitinib)—oral small molecules—are increasingly used. Cost is barrier in India; access is limited in low-income settings despite government initiatives.

**NSAIDs and corticosteroids**: NSAIDs provide symptomatic relief; low-dose prednisone (≤7.5 mg/day) is adjunctive but should be minimized due to long-term toxicity (infections, osteoporosis, cardiovascular risk).

**Treat-to-target strategy**: Tight control with frequent monitoring and escalating therapy achieves remission in ~50% of patients, low activity in ~80%—dramatically reducing radiographic progression and disability.

**Complications**: Radiographic joint damage (erosions, narrowing) occurs in ~40% untreated by 1 year; joint replacement may be needed in advanced disease. Infection risk is increased with biologics; TB screening (tuberculin test, IGRA) is mandatory before TNF inhibitor initiation in high-TB-burden countries like India. Cardiovascular disease mortality is 60% higher than general population; traditional risk factor management is essential.

> 🎓 **Professor's Note**: Early diagnosis and aggressive DMARD therapy within 3–6 months of symptom onset dramatically improve outcomes. Delay increases joint damage risk.

> 💡 **Memory trick**: "Morning STiffness >1 hour, Symmetric joints, Target small joints = RA; compare to osteoarthritis (asymmetric, no stiffness)"—distinguishes from non-inflammatory arthritis.

> ⚡ **Exam alert**: Anti-CCP is more specific than RF; seronegative RA (negative RF and anti-CCP) occurs in ~30% but does not mean less severe disease.

> 🏥 **Clinical pearl**: TB reactivation risk with TNF inhibitors is 100-fold higher than general population in endemic areas. Screen all patients before biologic initiation.

{{IMAGE: Hand X-ray showing RA erosions in MCP and PIP joints}}

**Ref**: Harrison's Principles of Internal Medicine, 21st ed. Rheumatoid Arthritis chapter.`,
    estimatedMinutes: 11,
  },
  {
    topicCode: "IM-MOD-08-TOP-02",
    contentMd: `# Systemic Lupus Erythematosus

Systemic lupus erythematosus (SLE) is chronic systemic autoimmune disease predominantly affecting women (female-to-male ratio ~9:1), with peak onset 15–45 years. In India, SLE prevalence is ~1 per 1000; disease is often severe due to delayed diagnosis and limited access to biologics.

**Pathophysiology**: Genetic susceptibility (HLA-DR2, DR3, complement deficiencies), environmental triggers (UV light, infections, medications—hydralazine, procainamide, isoniazid), and hormonal factors (estrogen deficiency explains female predominance) drive autoimmunity. Loss of tolerance results in autoantibodies (anti-DNA, anti-Smith, antiphospholipid—aPL) forming immune complexes depositing in kidneys, skin, joints, causing inflammation.

**Clinical manifestations** are protean: constitutional (fever, fatigue, weight loss), arthralgias/arthritis (usually non-erosive), photosensitive malar rash (classic "butterfly" over cheeks and bridge of nose), discoid rash (scarring lesions on scalp, ears, cheeks), oral ulcers (usually painless), and alopecia. Hematologic involvement: thrombocytopenia (antiphospholipid antibodies), hemolytic anemia (anti-RBC antibodies), leukopenia (anti-WBC antibodies). Pulmonary: pleuritis, acute lupus pneumonitis, pulmonary hemorrhage (rare, life-threatening). Cardiac: pericarditis, myocarditis, endocarditis (libman-sacks endocarditis).

**Lupus nephritis** is most serious manifestation; occurs in ~40% and is major predictor of mortality. WHO classification: Class I (minimal mesangial), II (mesangial proliferative), III (focal proliferative, active and chronic), IV (diffuse proliferative, most severe), V (membranous), VI (advanced sclerosing). Proteinuria (often nephrotic range), hematuria (RBC casts are specific), and rising creatinine indicate active nephritis.

**Diagnosis**: ACR/EULAR 2019 criteria incorporate serology (ANA—positive in >95%, anti-Smith, anti-DNA), clinical domains (constitutional, hematologic, mucocutaneous, neuropsychiatric, renal, serositis), and immunology. Low complement (C3, C4) suggests active disease.

**Neuropsychiatric manifestations** (NPSLE) occur in ~40%: stroke (from aPL), seizures, cognitive dysfunction, depression, and psychosis. Antiphospholipid syndrome (aPL present without other SLE features, or as part of SLE) causes thrombosis and recurrent pregnancy loss; warfarin (target INR 2–3) is first-line anticoagulation (DOACs are less effective in aPL).

**Management**: NSAIDs manage arthralgias; hydroxychloroquine (200–400 mg daily) is foundational, reducing flares and improving survival. Low-dose corticosteroids (prednisone ≤7.5 mg/day) and conventional immunosuppressants (methotrexate, mycophenolate, azathioprine) manage mild-moderate disease. Lupus nephritis requires aggressive therapy: induction (IV cyclophosphamide or mycophenolate mofetil—MMF—plus IV methylprednisolone) followed by maintenance (mycophenolate or azathioprine). Belimumab (anti-BAFF monoclonal antibody) and voclosporin (complement factor D inhibitor) are newer agents improving outcomes in moderate-severe disease but are cost-prohibitive in many settings.

**Pregnancy management**: SLE patients have increased miscarriage (25–50%) and preeclampsia risk. aPL-positive patients are at highest risk; low-molecular-weight heparin (LMWH) + low-dose aspirin significantly improves live birth rates. Continue hydroxychloroquine, prednisolone, and azathioprine (safe in pregnancy); avoid mycophenolate and cyclophosphamide (teratogenic).

**Prognosis**: 5-year survival is >95% in developed countries with modern therapy; 10-year survival is ~90%. In India, outcomes are worse due to late presentation and limited access to immunosuppressants. Major causes of death: active SLE (especially lupus nephritis, NPSLE), infection (from immunosuppression), and atherosclerotic cardiovascular disease (premature in SLE due to inflammation and traditional risk factors).

> 🎓 **Professor's Note**: ANA-negative SLE is rare (~5%). ANA positivity alone doesn't diagnose SLE; clinical features are essential.

> 💡 **Memory trick**: "CRAB = Cytopenias, Rashes, Arthritis, Blood clots (aPL)"—systemic manifestations of SLE.

> ⚡ **Exam alert**: Low complement (C3, C4) is marker of active disease and increased lupus nephritis risk. Rising creatinine + active urinary sediment = urgent kidney biopsy for class determination.

> 🏥 **Clinical pearl**: Hydroxychloroquine reduces flare rate and improves survival; continue even in remission. aPL-positive patients need anticoagulation; aPL-negative patients with thrombosis don't.

{{IMAGE: Kidney biopsy showing diffuse proliferative lupus nephritis}}

**Ref**: Harrison's Principles of Internal Medicine, 21st ed. Systemic Lupus Erythematosus chapter.`,
    estimatedMinutes: 12,
  },
  {
    topicCode: "IM-MOD-08-TOP-03",
    contentMd: `# Gout & Pseudogout

Gout is crystal arthritis caused by monosodium urate (MSU) deposition in joints and soft tissues; pseudogout (acute chondrocalcinosis) results from calcium pyrophosphate dihydrate (CPPD) deposition. Both cause acute, intensely painful arthritis.

**Gout pathophysiology**: Hyperuricemia (serum uric acid >6.8 mg/dL, saturation point) predisposes to crystal formation. Acute triggers: dehydration, purine-rich diet (red meat, organ meats, seafood, high-fructose corn syrup), alcohol (especially beer—purine source and impaired renal excretion), sudden decrease in uric acid (diuretics, urate-lowering therapy initiation), and fever/illness. MSU crystals in synovium trigger NLRP3 inflammasome activation, releasing IL-1β; neutrophilic infiltration causes acute inflammation.

Risk factors: male sex (10:1 male-to-female ratio), age >40, obesity, hypertension, chronic kidney disease, and family history. In India, prevalence is increasing (affects ~1 in 200) due to rising metabolic syndrome and urbanization.

**Acute gout attack**: Sudden onset of severe pain, swelling, erythema, and warmth in single joint (podagra—great toe—is most common, ~50%; other sites: midfoot, ankle, knee, wrist, elbow). Exquisite tenderness; even bedsheet weight is intolerable. Systemic symptoms: low-grade fever, malaise. Untreated episodes last 1–2 weeks; recurrent attacks develop in ~50% within 1 year and ~90% within 10 years.

**Chronic tophaceous gout**: Repeated MSU deposition causes tophi (nodular deposits) in ears, fingers, elbows, and other sites. Chronic renal insufficiency (uric acid nephropathy) develops from interstitial crystal deposition.

**Diagnosis**: Synovial fluid analysis showing negatively birefringent needle-shaped MSU crystals is gold standard. Serum uric acid level during acute attack is often falsely low due to acute-phase response; measure after 2–4 weeks. Imaging: X-rays may show punched-out erosions with overhanging edges in chronic tophaceous gout.

**Management—acute attack**: NSAIDs (indomethacin 50 mg TID, naproxen 500 mg BID) are first-line; colchicine (1.2 mg immediately, then 0.6 mg 1 hour later, then daily dosing) is alternative if NSAIDs contraindicated. Low-dose corticosteroids (prednisone 30–40 mg daily, tapered) are third-line. IL-1 inhibitors (anakinra) are expensive but highly effective in refractory cases.

**Urate-lowering therapy (ULT)**: Target serum uric acid <6 mg/dL to prevent crystal formation and promote crystal dissolution. Xanthine oxidase inhibitors (allopurinol 100–800 mg daily, with dose adjustment for renal function; febuxostat 40–80 mg daily, more selective for xanthine oxidase) reduce uric acid production. Uricosuric agents (probenecid 500–1000 mg daily, not for CKD stage ≥3) increase renal excretion. Uricase (pegloticase, IV infusion) catalyzes uric acid breakdown; reserved for severe tophaceous gout refractory to conventional ULT (expensive, immunogenicity risk).

**Prophylaxis during ULT initiation**: NSAIDs or colchicine for 3–6 months prevents gout flares triggered by rapid uric acid reduction.

**Lifestyle modification**: Weight loss, reduced purine intake (limit red meat, organ meats, high-fructose beverages), alcohol limitation (especially beer), and hydration (maintains urine output) reduce uric acid and flare frequency.

**Pseudogout (acute chondrocalcinosis)**: CPPD crystals in synovium cause acute arthritis, more common in elderly, affecting larger joints (knee, wrist, shoulder). Positively birefringent rhomboid crystals distinguish from gout on synovial fluid analysis. Treatment: NSAIDs or aspiration with intra-articular corticosteroid injection. Chronic CPPD disease (pseudo-osteoarthritis) causes chronic joint pain and degenerative changes; no disease-modifying therapy exists.

> 🎓 **Professor's Note**: "Gout is the disease of kings"—historically linked to dietary excess (purines, alcohol). Now a common metabolic disease.

> 💡 **Memory trick**: "MSU = Monosodium Urate (gout, negatively birefringent needles); CPPD = Calcium Pyrophosphate DiHydrate (pseudogout, positively birefringent rhomboids)"—crystal morphology distinguishes.

> ⚡ **Exam alert**: Don't start ULT during acute attack; start colchicine or NSAIDs prophylaxis first, then initiate ULT after attack resolution.

> 🏥 **Clinical pearl**: Allopurinol dose adjustment is critical—overtreatment causes severe crystal dissolution arthritis ("pseudo-flare"). Start low, titrate slowly to target uric acid.

{{IMAGE: Synovial fluid microscopy showing MSU crystals (gout) versus CPPD crystals (pseudogout)}}

**Ref**: Harrison's Principles of Internal Medicine, 21st ed. Gout and Related Disorders of Purine Metabolism chapter.`,
    estimatedMinutes: 11,
  },
  {
    topicCode: "IM-MOD-08-TOP-04",
    contentMd: `# Ankylosing Spondylitis

Ankylosing spondylitis (AS) is chronic inflammatory arthropathy predominantly affecting axial skeleton (spine, sacroiliac joints). Disease is strongly associated with HLA-B27 (90% of patients); prevalence in India is ~0.5–1%, higher in certain regions. AS predominantly affects males (male-to-female ratio ~3:1), with symptom onset typically 20–40 years.

**Pathophysiology**: HLA-B27 presentation of bacterial peptides (molecular mimicry hypothesis implicates Gram-negative bacteria, particularly Klebsiella) triggers autoreactive T cells. Inflammatory cytokines (TNFα, IL-17) promote osteoblast activation and new bone formation (ankylosis—fusion of joints). This inflammatory-plus-ossification pattern distinguishes AS from other arthropathies.

**Clinical presentation**: Chronic inflammatory back pain (morning stiffness >30 minutes, improves with activity, worsens with rest) and progressive spinal stiffness. Sacroiliitis pain (buttock, groin radiation) is often earliest symptom. Progressive spinal flexion (chest expansion reduced <2.5 cm measured at 4th intercostal space, normally >5 cm) and kyphosis develop over years. Peripheral joint involvement (hips, knees, shoulders, ankles) occurs in ~25%, especially early-onset disease.

Enthesitis (inflammation at tendon insertion sites)—Achilles tendonitis, plantar fasciitis—is characteristic. Acute anterior uveitis (~30% of patients) presents with eye pain, photophobia, and vision changes; recurrent episodes risk blindness. Extraskeletal manifestations: aortic regurgitation (aortitis, ~10%), cardiac conduction abnormalities, pulmonary fibrosis (upper lobes, ~10%), and amyloidosis (renal involvement, ~5%).

**Diagnosis**: Clinical criteria (modified New York criteria) incorporate inflammatory back pain, limited spinal mobility, radiographic sacroiliitis, and/or positive HLA-B27 with inflammatory back pain. Imaging: X-ray shows "bamboo spine" (flowing ossification anterior longitudinal ligament), syndesmophytes (bony bridges between vertebral bodies), and square vertebral bodies. MRI is more sensitive, detecting early inflammation before radiographic changes.

Laboratory: HLA-B27 positivity (>90%); elevated ESR and CRP during active inflammation (but some patients have negative reactants despite active disease, so clinical assessment is paramount).

**Disease activity assessment**: Bath Ankylosing Spondylitis Disease Activity Index (BASDAI) uses patient-reported measures; Bath Ankylosing Spondylitis Functional Index (BASFI) assesses functional limitation. ASDAS (Ankylosing Spondylitis Disease Activity Score) incorporates CRP/ESR, improving prognostic utility.

**Management**: NSAIDs are first-line (indomethacin 75 mg daily, or naproxen 1000 mg daily); continuous use is more effective than as-needed dosing. Physical therapy emphasizing spinal extension and deep breathing prevents kyphosis progression and preserves chest expansion.

TNF inhibitors (etanercept, infliximab, adalimumab, golimumab, certolizumab pegol) are standard for NSAID-refractory disease and active peripheral joint involvement. ~60–70% achieve ASDAS inactive disease with TNF inhibition. IL-17 inhibitors (secukinumab, ixekizumab) are emerging alternatives with similar efficacy.

Conventional DMARDs (methotrexate) have limited role in axial AS but improve peripheral arthritis. Sulfasalazine benefits peripheral joint involvement.

**Monitoring**: Regular inflammatory markers (CRP/ESR), spinal imaging (radiographs, MRI if clinical deterioration despite NSAID/TNF inhibitor therapy). Hip involvement requires surveillance; hip replacement may be needed in advanced cases with severe functional limitation.

**Prognosis**: Early spinal fusion (syndesmophyte formation) limits flexibility but does not worsen life expectancy. Cardiac complications and severe peripheral arthritis are major morbidities. With modern TNF inhibitors, prognosis has improved dramatically; most patients maintain employment and functional activity.

> 🎓 **Professor's Note**: Inflammatory back pain is red flag for axial spondyloarthritis; don't dismiss as mechanical. Morning stiffness >30 minutes is key distinguishing feature.

> 💡 **Memory trick**: "HLA-B27 = 90% of AS patients; bamboo spine = flowing ossification creating bamboo-like spine appearance"—imaging hallmark is pathognomonic.

> ⚡ **Exam alert**: AS patient with new-onset eye pain = acute anterior uveitis until proven otherwise. Ophthalmology referral is urgent to prevent vision loss.

> 🏥 **Clinical pearl**: Chest expansion <2.5 cm indicates severe restrictive disease; pulmonary function testing (FVC, TLC) monitors for developing pulmonary fibrosis.

{{IMAGE: Spine X-ray showing bamboo spine with flowing ossification in ankylosing spondylitis}}

**Ref**: Harrison's Principles of Internal Medicine, 21st ed. Ankylosing Spondylitis and Related Spondyloarthropathies chapter.`,
    estimatedMinutes: 11,
  },
  {
    topicCode: "IM-MOD-08-TOP-05",
    contentMd: `# SLE & Antiphospholipid Syndrome

Antiphospholipid syndrome (APS) is thrombophilia characterized by presence of antiphospholipid antibodies (aPL)—lupus anticoagulant (LA), anticardiolipin (aCL), or anti-β₂-glycoprotein-I (aβ₂GPI)—with clinical thrombosis or pregnancy complications. APS may occur as primary APS (no underlying autoimmune disease) or secondary APS (with SLE or other autoimmune disorder).

**Pathophysiology**: aPL antibodies bind to phospholipid-binding proteins (β₂-glycoprotein-I, prothrombin), disrupting anticoagulant pathways. Tissue factor upregulation and thrombin generation are enhanced; complement activation (alternative pathway) and platelet activation amplify thrombotic risk. Pregnancy complications arise from impaired placentation and trophoblast inflammation.

**Clinical manifestations—thrombotic**: Deep venous thrombosis (DVT, ~40% of events), pulmonary embolism (PE, ~10%), arterial thrombosis (stroke, myocardial infarction, limb ischemia), and microvascular thrombosis (skin necrosis, livedo reticularis, thrombotic microangiopathy) are common. Recurrent thrombosis despite anticoagulation is characteristic.

**Obstetric manifestations**: Recurrent pregnancy loss (~50% of patients with obstetric manifestations), preeclampsia, placental insufficiency, and intrauterine growth restriction. Pregnancy loss typically occurs in 2nd or 3rd trimester (fetal death) rather than early miscarriage.

**Diagnosis**: aPL positivity on ≥2 occasions 12+ weeks apart (required for diagnosis) in setting of clinical thrombosis or pregnancy complications. LA (prolonged aPTT not corrected by normal plasma, corrected by phospholipid addition) is most specific. aCL and aβ₂GPI are measured by ELISA. Triple positivity (LA + aCL + aβ₂GPI) confers highest thrombotic risk.

**Management**: Primary thrombosis requires anticoagulation. Warfarin (target INR 2–3, or 3–4 for recurrent thrombosis or arterial events despite therapeutic INR) is preferred over DOACs, which have higher recurrent thrombosis rates in APS. Indefinite anticoagulation is standard since thrombotic recurrence risk is high (up to 20% over 5 years after anticoagulation cessation).

Obstetric APS management: LMWH (enoxaparin 40 mg SC daily) + low-dose aspirin (81 mg daily) during pregnancy and 6 weeks postpartum for patients with recurrent pregnancy loss. Live birth rates improve from ~30–50% untreated to ~70–80% with therapy.

**Catastrophic APS (CAPS)**: Rare (~1% of APS), life-threatening with multiorgan thrombotic involvement (diffuse microangiopathic hemolytic anemia, thrombocytopenia, renal insufficiency, cerebral involvement). Mortality is ~50% despite aggressive therapy (anticoagulation + corticosteroids + plasmapheresis/IVIG).

**Secondary APS with SLE**: ~5–15% of SLE patients develop APS; these patients have higher thrombotic and obstetric morbidity than SLE patients without aPL. Aggressive immunosuppression and anticoagulation reduce complications.

**Difference from hypercoagulable states**: Unlike inherited thrombophilias (Factor V Leiden, prothrombin G20210A), APS is acquired and antibody-mediated. First thrombosis presentation is variable (venous or arterial); family screening is not indicated since APS is not inherited.

> 🎓 **Professor's Note**: aPL positivity alone (without thrombosis or pregnancy complications) doesn't require treatment; only symptomatic APS warrants anticoagulation.

> 💡 **Memory trick**: "APS = Antibodies (aPL) + Pathology (thrombosis or pregnancy loss) = diagnosis"—requires both serology AND clinical manifestation.

> ⚡ **Exam alert**: Recurrent pregnancy loss + aPL positivity = obstetric APS; treat with LMWH + aspirin. DOACs are inadequate in APS thrombosis.

> 🏥 **Clinical pearl**: Triple-positive APS (LA + aCL + aβ₂GPI) has highest thrombotic risk; consider anticoagulation prophylaxis even before first thrombotic event in some guidelines.

{{IMAGE: Thrombotic complications of antiphospholipid syndrome}}

**Ref**: Harrison's Principles of Internal Medicine, 21st ed. Antiphospholipid Syndrome chapter.`,
    estimatedMinutes: 11,
  },
  {
    topicCode: "IM-MOD-08-TOP-06",
    contentMd: `# Vasculitis

Vasculitis—inflammation of blood vessels—presents with diverse clinical syndromes based on vessel size and location. Classification: large-vessel (temporal arteritis, Takayasu arteritis), medium-vessel (polyarteritis nodosa, Kawasaki disease), and small-vessel (ANCA-associated vasculitis, immune complex vasculitis).

**Temporal (Giant Cell) Arteritis (TA)**: Large-vessel vasculitis affecting intracranial branches of carotid arteries; almost exclusively in patients >50 years. Presents with severe temporal headache, jaw claudication (pain with chewing), scalp tenderness, vision loss (from central retinal artery occlusion—ischemic optic neuropathy is emergency), and systemic symptoms (fever, malaise, weight loss). ~50% have polymyalgia rheumatica (muscle pain in shoulders, hips; worsening in morning).

Diagnosis: Elevated ESR (often >50, may be >100) and CRP; temporal artery biopsy (gold standard) shows granulomatous inflammation with giant cells (but biopsy sensitivity is ~60%, so clinical-plus-lab diagnosis often guides treatment). Imaging: temporal artery ultrasound (halo sign), PET-CT, or MRI can support diagnosis if biopsy unavailable.

Treatment: Urgent high-dose corticosteroids (prednisone 1 mg/kg daily, maximum 80 mg daily) taper over weeks-months; steroid-sparing agents (methotrexate, tocilizumab) reduce cumulative steroid exposure. Visual symptoms demand immediate therapy (within hours) to prevent irreversible vision loss.

**Takayasu Arteritis (TA)**: Large-vessel vasculitis affecting aorta and its major branches; predominantly young women (age 10–50 years). Common in India, Japan, and other Asian countries. Presents with constitutional symptoms, arthralgia, and symptoms from arterial involvement: arm claudication, leg claudication, angina (coronary ostial stenosis), or hypertension (renal artery involvement).

Diagnosis: Elevated inflammatory markers, angiography (CTA or MRA) showing aortic wall thickening and arterial stenosis/occlusion. Biopsy (if accessible) shows granulomatous inflammation.

Treatment: High-dose corticosteroids and immunosuppressants (methotrexate, mycophenolate, azathioprine); TNF inhibitors (infliximab, adalimumab) improve outcomes in refractory cases. Surgical or percutaneous endovascular interventions for critical stenoses or occlusions.

**Polyarteritis Nodosa (PAN)**: Medium-vessel necrotizing vasculitis affecting coronary, renal, GI, and peripheral arteries (spares lungs and glomeruli, distinguishing from microscopic polyangiitis). Presents with constitutional symptoms, peripheral neuropathy (mononeuritis multiplex), livedo reticularis, myalgia, and GI or cardiac ischemia. Hepatitis B-associated PAN (via immune complex deposition) occurs in endemic areas.

Diagnosis: Elevated inflammatory markers; angiography shows microaneurysms and arterial stenoses; tissue biopsy (nerve, muscle, kidney, skin) demonstrates necrotizing vasculitis.

Treatment: High-dose corticosteroids and cyclophosphamide; hepatitis B-associated PAN requires antiviral therapy (entecavir, tenofovir).

**ANCA-Associated Vasculitis (AAV)**: Small-vessel necrotizing vasculitis with antineutrophil cytoplasmic antibodies (ANCA). Subtypes: granulomatosis with polyangiitis (GPA, formerly Wegener granulomatosis), microscopic polyangiitis (MPA), and eosinophilic granulomatosis with polyangiitis (EGPA, formerly Churg-Strauss).

**GPA**: Upper (sinusitis, nasal lesions) and lower respiratory tract involvement (hemoptysis, pulmonary nodules) plus glomerulonephritis (RPGN—rapidly progressive GN with crescent formation). c-ANCA (anti-PR3) positive in ~90%. Diagnosis: tissue biopsy showing necrotizing vasculitis with granulomas; ANCA positivity supports diagnosis.

**MPA**: Lower respiratory tract (alveolar hemorrhage) and glomerulonephritis without upper respiratory or granulomatous features. p-ANCA (anti-MPO) positive in ~90%.

**EGPA**: Asthma, peripheral eosinophilia (>1500/µL), and systemic vasculitis; p-ANCA/anti-MPO positivity variable. Cardiomyopathy and hypereosinophilia are distinctive features.

Treatment of AAV: Induction (high-dose methylprednisolone + cyclophosphamide or rituximab for ANCA-associated GN) followed by maintenance (azathioprine or rituximab). Plasma exchange is considered for severe pulmonary hemorrhage or RPGN with crescent >50% glomeruli.

**IgA Vasculitis (formerly IgA Nephropathy/Henoch-Schönlein Purpura)**: Small-vessel immune complex vasculitis presenting with palpable purpura (lower extremities, buttocks), arthritis/arthralgia, abdominal pain, and glomerulonephritis (IgA deposits on kidney biopsy). Prognosis depends on renal involvement; 10–15% progress to ESRD if untreated.

> 🎓 **Professor's Note**: Vasculitis is rare but rapidly progressive; high index of suspicion and rapid diagnosis prevent organ damage.

> 💡 **Memory trick**: "Size matters: Large (>20 µm) = TA/Takayasu, Medium (10–50 µm) = PAN, Small (<10 µm) = ANCA-AAV, IgA vasculitis"—vessel size guides diagnosis.

> ⚡ **Exam alert**: TA with vision loss = ophthalmic emergency; treat immediately before biopsy confirmation to prevent blindness.

> 🏥 **Clinical pearl**: ANCA positivity is supportive but not diagnostic; tissue confirmation is gold standard. c-ANCA = GPA; p-ANCA = MPA or EGPA.

{{IMAGE: Histology of necrotizing vasculitis with fibrinoid necrosis}}

**Ref**: Harrison's Principles of Internal Medicine, 21st ed. Vasculitis chapter.`,
    estimatedMinutes: 12,
  },
  {
    topicCode: "IM-MOD-08-TOP-07",
    contentMd: `# Scleroderma & Polymyositis

**Systemic sclerosis (scleroderma)** is chronic fibrotic autoimmune disease characterized by skin thickening and internal organ fibrosis (lung, heart, kidney, GI tract). Female predominance (3–4:1) with symptom onset typically 30–50 years.

**Pathophysiology**: Endothelial damage (capillary loss), immune activation (anti-Scl-70, anticentromere antibodies), and abnormal fibroblast proliferation (TGFβ-driven collagen overproduction) drive progressive fibrosis. Microvasculature rarefaction impairs organ perfusion; Raynaud phenomenon (episodic finger pallor/cyanosis/rubor with cold exposure) is often initial symptom.

**Limited cutaneous systemic sclerosis (lcSSc)**: Skin involvement confined to hands, forearms, face, and neck; long disease course with late visceral involvement (~25% develop pulmonary fibrosis, renal crisis rare). Anticentromere antibodies (~80%) are associated with lcSSc.

**Diffuse cutaneous systemic sclerosis (dcSSc)**: Rapid-onset skin thickening involving trunk and proximal limbs; early visceral involvement (interstitial lung disease—ILD—in ~75%, scleroderma renal crisis in ~10%). Anti-Scl-70 antibodies (~40%) are associated with dcSSc and worse prognosis. Skin collagen deposition causes rigidity; face becomes mask-like (microstomia—small mouth opening). GI dysmotility affects all levels: esophageal dysmotility (reflux, esophageal cancer risk), gastric delays, and pseudo-obstruction.

**Scleroderma renal crisis (SRC)**: Life-threatening complication of dcSSc (within first 5 years, ~10% incidence). Presents with accelerated hypertension, microangiopathic hemolytic anemia (MAHA), thrombocytopenia, and acute kidney injury (AKI). Renin-angiotensin system hyperactivation drives pathology. ACE inhibitors are life-saving; mortality has decreased from ~80% to ~20% since ACE inhibitor era.

**Pulmonary involvement**: ILD (in ~75% of dcSSc) progresses insidiously with dyspnea, cough, and reduced DLCO. Pulmonary arterial hypertension (PAH, in ~10%) causes dyspnea and syncope; elevated pulmonary pressures (RV dysfunction) are prognostically ominous. Pulmonary hypertension can occur without significant ILD (isolated PAH is more common in lcSSc).

**Management**: No disease-modifying therapy halts fibrosis progression; treatment is supportive. Vasodilators (calcium channel blockers for Raynaud phenomenon, endothelin receptor antagonists—bosentan, ambrisentan—for PAH), immunosuppressants (methotrexate, mycophenolate for ILD), and ACE inhibitors (for SRC) are mainstays. PH-specific therapies (phosphodiesterase-5 inhibitors, prostacyclin analogs) improve functional capacity in PAH. Physical therapy and skin care prevent joint contractures.

**Prognosis**: 5-year survival is ~90% for lcSSc, ~70% for dcSSc. ILD progression and PAH are major mortality drivers. Early pulmonary function testing (FVC, DLCO) and echocardiography (RVSP) guide management escalation.

**Polymyositis (PM) and Dermatomyositis (DM)**: Idiopathic inflammatory myopathies (IIMs) causing proximal muscle weakness and systemic inflammation.

**Dermatomyositis** is characterized by distinctive rash: heliotrope (purple erythema over eyelids), Gottron papules (erythematous papules over knuckles), V-neck rash (shawl sign—photodistribution pattern). Occurs at all ages; childhood DM carries higher malignancy risk (underlying cancer in ~20% of DM patients >40 years). Myositis-specific antibodies (MSA) define clinically distinct subsets: anti-Jo-1 (aminoacyl-tRNA synthetase) predicts "antisynthetase syndrome" (myositis, interstitial lung disease, Raynaud phenomenon, arthritis, mechanic's hands).

**Polymyositis** (true PM is rare, <10% of IIM diagnoses) presents with painless proximal weakness (shoulders, hips) developing over weeks-months; elevated creatine kinase (CK), myopathic EMG changes (small amplitude, short-duration motor action potentials), and endomysial inflammation on muscle biopsy.

**Diagnosis**: Clinical features, elevated CK (often >1000 IU/L, sometimes >2000), myositis-specific antibodies, myopathic EMG, and muscle MRI (edema, fat infiltration). Muscle biopsy is gold standard (perivascular and endomysial inflammation in PM, perifascicular atrophy in DM).

**Management**: High-dose corticosteroids (prednisone 1 mg/kg daily, tapered over months) are first-line; ~50% respond well. Steroid-sparing agents (methotrexate, mycophenolate, azathioprine) allow dose reduction. Intravenous immunoglobulin (IVIG) or rituximab benefits refractory cases. ILD management includes immunosuppression (mycophenolate + corticosteroids); rapidly progressive ILD requires aggressive treatment.

**Malignancy screening**: Recommended in DM and adult-onset PM, especially if antinuclear antibodies (ANA) negative or myositis-specific antibodies absent (higher malignancy risk). Cancer types: lung, gastric, ovarian, breast.

> 🎓 **Professor's Note**: Scleroderma and myositis are rare but treatable if diagnosed early. Progressive dyspnea warrants urgent pulmonary assessment.

> 💡 **Memory trick**: "Scl = Sclerosis (fibrosis); PM = Polymyositis (muscles); DM = Dermatomyositis (skin + muscles)"—anatomical distribution guides diagnosis.

> ⚡ **Exam alert**: Scleroderma renal crisis is medical emergency—acute HTN + AKI + MAHA = treat with ACE inhibitors urgently to prevent ESRD.

> 🏥 **Clinical pearl**: DM with negative antibodies + absence of myositis = amyopathic DM; still has skin disease and malignancy risk (~25%).

{{IMAGE: Dermatomyositis rash showing heliotrope and Gottron papules}}

**Ref**: Harrison's Principles of Internal Medicine, 21st ed. Systemic Sclerosis and Polymyositis-Dermatomyositis chapters.`,
    estimatedMinutes: 12,
  },
  {
    topicCode: "IM-MOD-09-TOP-01",
    contentMd: `# Malaria

Malaria—parasitic infection transmitted by Anopheles mosquitoes—remains endemic in India with ~2 million cases annually. Plasmodium species: P. falciparum (most dangerous, ~35% of cases in India), P. vivax (~65%, relapsing fever due to hypnozoite reservoir), P. malariae (quartan fever), P. ovale (rare in India), and P. knowlesi (zoonotic, parts of Southeast Asia).

**Pathophysiology**: Infected RBCs sequester in microvasculature; cytoadherence (mediated by PfEMP1 surface antigens) causes localized ischemia and inflammation. Massive hemolysis causes anemia and hemoglobinuria. Host inflammatory response (TNFα, IL-1) triggered by parasite antigens causes systemic manifestations. Severe malaria results from cerebral malaria, acute kidney injury (AKI), acute respiratory distress (ARDS), severe anemia, or metabolic complications (acidosis, hypoglycemia).

**Clinical features**: Fever (often in cycles—P. vivax/ovale q48h tertian fever, P. falciparum q36–48h irregular), chills, rigors, and sweating. Hepatosplenomegaly, jaundice, and mild thrombocytopenia are common. Severe malaria: cerebral symptoms (altered consciousness, seizures, coma—cerebral malaria carries ~15% mortality even with treatment), renal involvement (creatinine rise, dark urine—hemoglobinuria), pulmonary edema (ARDS), and metabolic complications (severe anemia, hypoglycemia from decreased glucose production and increased consumption, severe acidosis).

**Diagnosis**: Rapid diagnostic test (RDT—detects Plasmodium antigens) has ~95% sensitivity in symptomatic patients; peripheral blood smear (Giemsa staining, observe parasitemia—percentage of infected RBCs) is gold standard for species identification and monitoring. PCR is most sensitive (detects <1 parasites/µL) but slow and expensive. Hemoglobin, creatinine, glucose, and lactate guide severity assessment.

**Treatment**: Artemisinin derivatives (artemether, artesunate, artemotil) are most effective antimalarials with fastest parasite clearance. Parenteral artesunate (IV or IM, 2.4 mg/kg at 0, 12, 24, 48 hours, then daily) is superior to quinine for severe malaria; ~35% mortality reduction. Switch to oral artemether-lumefantrine (or other artemisinin combination therapies—ACTs) after 3 doses IV artesunate.

P. vivax and P. ovale additionally require primaquine (0.5 mg/kg daily × 14 days) to eliminate hypnozoites and prevent relapse. G6PD-deficiency screening is important—primaquine causes hemolysis in G6PD-deficient patients.

**Uncomplicated malaria**: Oral artemisinin combinations (artemether-lumefantrine, artesunate-amodiaquine, artesunate-mefloquine, dihydroartemisinin-piperaquine) for 3 days. In India, artemether-lumefantrine is widely available.

**Complicated malaria**: Immediate hospitalization, IV artesunate, management of organ dysfunction (ICU care, dialysis if AKI, mechanical ventilation if respiratory failure, transfusion if severe anemia Hb <7 g/dL), and treatment of metabolic complications (insulin for hypoglycemia, sodium bicarbonate for severe acidosis).

**Prevention**: Insecticide-treated bed nets (ITNs), indoor residual spraying (IRS), environmental control (eliminate standing water breeding sites), and chemoprophylaxis for travelers (atovaquone-proguanil, mefloquine, or doxycycline). Vaccine (RTS,S—Mosquirix) reduces symptomatic malaria risk by ~40% in African children; recently approved in India but coverage is limited.

**Complications**: Severe malaria sequelae include neurological damage (cognitive impairment, behavioral changes after cerebral malaria), chronic kidney disease (from AKI), and post-malaria neurological syndrome (delayed onset months after acute infection).

> 🎓 **Professor's Note**: Malaria remains diagnosis to rule out in any febrile patient in endemic area. Delayed diagnosis increases mortality risk; treat presumptively if suspicion high.

> 💡 **Memory trick**: "Tertian fever = q48h (P. vivax, P. ovale); Quartan fever = q72h (P. malariae); Quotidian/irregular = P. falciparum"—fever pattern guides species suspicion.

> ⚡ **Exam alert**: Cerebral malaria is medical emergency—seizures, coma, status epilepticus. Start IV artesunate immediately without waiting for confirmatory tests.

> 🏥 **Clinical pearl**: P. vivax hypnozoites in liver cause relapse months later; primaquine is essential to prevent recurrence. Screen G6PD before primaquine.

{{IMAGE: Blood smear showing ring-form trophozoites and other Plasmodium stages}}

**Ref**: Harrison's Principles of Internal Medicine, 21st ed. Malaria chapter.`,
    estimatedMinutes: 11,
  },
  {
    topicCode: "IM-MOD-09-TOP-02",
    contentMd: `# Dengue & Chikungunya

**Dengue** is arthropod-borne virus (arbovirus) transmitted by Aedes aegypti mosquitoes; endemic in India with annual epidemic surges during monsoon season. India accounts for ~30% of global dengue burden (~400,000 cases annually). Four dengue serotypes (DENV-1, -2, -3, -4) exist; infection with one serotype provides lifelong immunity but increases risk of severe dengue if subsequent infection with different serotype (antibody-dependent enhancement—ADE).

**Pathophysiology**: Dengue virus infects dendritic cells and macrophages; cytokine release (TNFα, IL-6) causes systemic inflammation, capillary leak, and plasma extravasation into interstitial space. Thrombocytopenia and impaired hemostasis (from elevated fibrin degradation products and reduced clotting factor synthesis) promote bleeding.

**Clinical phases**: Febrile phase (3–7 days): sudden fever (often >40°C), headache, myalgia (particularly in back and joints—"breakbone fever"), rash (appears 3–4 days into illness, maculopapular, characteristically sparing palms and soles), and hepatomegaly. Mild leukopenia and thrombocytopenia develop.

Critical phase (fever defervescence, day 3–7): paradoxically, as fever drops, dengue hemorrhagic fever (DHF) may develop. Plasma leak causes pleural effusion, ascites, hypovolemia, and shock. Spontaneous bleeding (mucosal, GI, intracerebral), severe thrombocytopenia (<50 × 10⁹/L), and hemoconcentration (hematocrit rise >20%) characterize DHF.

Recovery phase (after day 7): plasma leak resolves; secondary infections (bacterial, fungal) become risk if patient survives shock.

**Laboratory findings**: Elevated transaminases (ALT typically >AST, unlike viral hepatitis), hypoalbuminemia, thrombocytopenia (often <100 × 10⁹/L), and elevated hematocrit (due to plasma leak). Dengue NS1 antigen (serum) detects early infection; IgM antibodies appear after 5 days; IgG appears in 2nd week.

**Dengue hemorrhagic fever/dengue shock syndrome (DHF/DSS)**: Plasma leak (pleural effusion, ascites, hypovolemia), thrombocytopenia, and hemorrhagic manifestations characterize DHF. DSS is DHF with circulatory failure (hypotension, narrow pulse pressure, altered mental status). Mortality is ~2.5% if treated, ~20% if untreated.

**Management**: Supportive care is cornerstone. Platelet transfusion is controversial; reserve for active bleeding (not for asymptomatic thrombocytopenia). IV fluids maintain perfusion but careful fluid restriction (<1–1.5 mL/kg/hr) prevents fluid overload and compartment syndrome. Monitor closely for critical phase; serial hematocrit, platelet count, and hemodynamic parameters guide therapy. Pressors (noradrenaline) support blood pressure if fluid resuscitation inadequate.

**Prevention**: Mosquito control (ITNs, insecticides, environmental clearance), dengvaxia vaccine (approved in endemic areas, reduces severe dengue risk by ~80% in previously infected individuals, carries risk of enhanced disease in seronegative individuals—vaccine hesitancy is significant barrier).

**Chikungunya**: Alphavirus transmitted by Aedes mosquitoes; caused major epidemic in India 2005–2006, with >1 million cases. Presents similarly to dengue but distinguishing features: more severe and persistent arthralgia (knees, wrists, ankles, fingers—often symmetrical) lasting weeks-months (vs. dengue myalgia), rash often extends to palms and soles, and more severe joint swelling. Fever is typically lower-grade and shorter duration (2–3 days) compared to dengue.

Laboratory: IgM/IgG serology; PCR during first 5 days.

Management: Symptomatic (NSAIDs for joint pain), though NSAIDs rarely provide complete relief; some patients develop chronic arthralgia persisting months-years (post-chikungunya syndrome).

**Differential**: Dengue and chikungunya overlap clinically; simultaneous circulation (co-infection possible) complicates diagnosis. Zika virus (similar presentation, teratogenic risk) is also endemic in parts of India. Serology and PCR distinguish.

> 🎓 **Professor's Note**: Dengue is "disease of seasons"—case surge during monsoon-post-monsoon periods. Clinical suspicion drives early diagnosis and appropriate supportive care.

> 💡 **Memory trick**: "Dengue = rash spares palms/soles, high fever, myalgia; Chikungunya = rash includes palms/soles, joint pain severe, lower fever"—clinical distinctions guide presumptive diagnosis.

> ⚡ **Exam alert**: Critical phase (fever defervescence with rising hematocrit + platelet drop) signals DHF/DSS risk—aggressive IV fluid management and ICU monitoring are essential.

> 🏥 **Clinical pearl**: Secondary dengue (reinfection different serotype) carries higher DHF/DSS risk than primary dengue. Antibody-dependent enhancement increases severity.

{{IMAGE: Dengue rash showing maculopapular pattern sparing palms and soles}}

**Ref**: Harrison's Principles of Internal Medicine, 21st ed. Dengue chapter.`,
    estimatedMinutes: 11,
  },
  {
    topicCode: "IM-MOD-09-TOP-03",
    contentMd: `# Typhoid & Enteric Fever

Typhoid (and paratyphoid) are infections caused by Salmonella enterica serovars Typhi (S. typhi) and Paratyphi A/B/C. Enteric fever remains endemic in India with ~10–20 cases per 100,000 population annually; higher in regions with poor sanitation. Transmitted via fecal-oral route (contaminated water, food); chronic carriers (1–5% of infected individuals) shed bacteria for months-years.

**Pathophysiology**: Bacteria invade Peyer's patches in small intestine, multiply in mesenteric lymph nodes, then disseminate hematogenously causing septicemia. Bacteremia is transient; organisms seed various organs (liver, bone marrow, gallbladder, CNS), causing diverse manifestations.

**Clinical presentation** (febrile illness duration ~3 weeks if untreated):
- Week 1: Sustained fever (often >39–40°C), headache, myalgia, malaise, abdominal pain. Rose spots (faint maculopapular rash, 5% of patients) may appear on trunk. Relative bradycardia (pulse increase slower than expected for fever) is classic finding. Hepatosplenomegaly develops gradually.
- Week 2: High fever persists; diarrhea develops (typically), though constipation can occur. Delirium, disorientation, and rose-colored eruptions (roseola) appear. Hepatosplenomegaly is marked.
- Week 3: Fever begins defervescence if untreated; dehydration, intestinal perforation (in ~1%), myocarditis, encephalitis may occur.

**Atypical presentations**: Abdominal pain without diarrhea, only malaise and fever (minimally symptomatic form), and fulminant septicemia in severely immunocompromised patients.

**Diagnosis**: Blood culture (gold standard, >80% sensitivity if obtained early in illness, decreases after 2 weeks) is definitive. Stool culture (positive in week 2–3, after bacteremia resolves) aids diagnosis in later illness. Bone marrow culture (most sensitive, ~85% even after antibiotics) is reserved for cases where initial blood cultures are negative. Widal test (serum agglutination against O and H antigens of S. typhi) is non-specific (high false-positive rate from previous vaccination or infection) and is not reliable for diagnosis; rising titers are more useful.

Molecular diagnosis: PCR of blood is rapid and sensitive, increasingly available in modern laboratories.

**Laboratory findings**: Mild anemia, thrombocytopenia (moderate, rarely severe), transient leukopenia (unusual for bacterial infection), and elevated transaminases (mild hepatitis pattern).

**Complications**: Intestinal perforation (in ~1%, occurs in week 3, presents with acute peritonitis), myocarditis (tachycardia, cardiogenic shock), encephalitis (confusion, delirium, seizures, coma), splenic rupture, and secondary bacterial infection of various organs. Chronic carrier state develops in ~1–5%, particularly in individuals with biliary tract abnormalities (gallstones, strictures).

**Management**: Antibiotics are life-saving. Fluoroquinolones (ciprofloxacin 500 mg BID, levofloxacin 750 mg daily) are traditionally first-line in India, though resistance is increasing. Third-generation cephalosporins (ceftriaxone 2 g IV daily, cefixime 400 mg BID oral) are reliable alternatives. Chloramphenicol and trimethoprim-sulfamethoxazole, once standard, are now reserved for cases with documented susceptibility due to widespread resistance. Treatment duration: 7–14 days oral fluoroquinolone or 10–14 days IV cephalosporin.

Supportive care: IV fluids (replacement of ongoing losses and maintenance), fever management, and monitoring for complications. Intestinal perforation requires surgical intervention (primary repair or diversion depending on clinical context).

**Resistance**: Multi-drug-resistant S. typhi (resistant to ampicillin, chloramphenicol, trimethoprim-sulfamethoxazole) is prevalent globally including India. Extensively drug-resistant (XDR) strains (resistant to fluoroquinolones, cephalosporins, macrolides) are emerging, particularly in South Asia, complicating management.

**Prevention**: Typhoid vaccine (conjugate vaccine preferred, >70% protection) is recommended for travelers to endemic areas and for residents of high-burden regions. Improving water sanitation and sanitation practices reduce transmission. Identifying and treating chronic carriers (prolonged antibiotic therapy, cholecystectomy in those with gallstones and carrier state) prevents outbreaks.

**Paratyphoid fever**: Caused by S. paratyphi A/B/C; typically milder than typhoid, with shorter illness duration (10–14 days) and lower mortality (<1% with treatment vs. ~20% untreated for typhoid).

> 🎓 **Professor's Note**: Typhoid is great imitator—diverse presentations delay diagnosis. High fever + headache + rose spots + relative bradycardia = classic triad pointing toward typhoid.

> 💡 **Memory trick**: "Roseola = faint rose-colored spots (rose petals); Relative bradycardia = pulse slower than expected for fever temperature"—classic findings aid diagnosis.

> ⚡ **Exam alert**: Intestinal perforation is medical emergency (mortality >40%); rising abdominal pain + peritoneal signs in febrile patient on day 3 warrants urgent imaging and surgery.

> 🏥 **Clinical pearl**: Blood culture is most useful early; by week 2–3, stool culture becomes positive as bacteremia resolves. Bone marrow culture is "gold" if blood/stool negative.

{{IMAGE: Rose spots on skin (roseola) characteristic of typhoid fever}}

**Ref**: Harrison's Principles of Internal Medicine, 21st ed. Typhoid and Enteric Fever chapter.`,
    estimatedMinutes: 11,
  },
];
