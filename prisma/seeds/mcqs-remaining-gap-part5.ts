import type { McqData, SubjectMcqs } from "./content-loader";

export const remainingGapMcqs5: SubjectMcqs[] = [
  {
    subjectCode: "BI",
    mcqs: [
      // BI-MOD-02-TOP-04: Clinical Enzymology
      {
        id: "BI-MOD-02-TOP-04-MCQ-001",
        topicCode: "BI-MOD-02-TOP-04",
        question: "A patient with acute myocardial infarction has elevated serum creatine kinase (CK) and CK-MB (cardiac isoenzyme). Why is CK-MB more specific for cardiac damage than total CK?",
        options: {
          a: "CK-MB is found predominantly in cardiac muscle; total CK is found in cardiac, skeletal, and smooth muscle, making total CK less specific for cardiac injury",
          b: "CK-MB has longer half-life in serum, allowing earlier detection of MI",
          c: "CK-MB catalyzes different enzymatic reaction than total CK, making it unique to cardiac tissue",
          d: "Total CK is filtered by kidneys; CK-MB is protein-bound and remains in circulation longer",
        },
        correctOption: "a",
        explanation: "CK isoenzymes and cardiac specificity: (1) Creatine kinase (CK) catalyzes: creatine + ATP ↔ creatine phosphate + ADP. (2) CK exists as dimers of M (muscle) and B (brain) subunits: CK-BB (BB), CK-MB (MB), CK-MM (MM). (3) Tissue distribution: (a) CK-MM: skeletal muscle, cardiac muscle (predominant), smooth muscle. (b) CK-MB: cardiac muscle (~20% of cardiac CK), smooth muscle. (c) CK-BB: smooth muscle, GI tract, brain. (4) Cardiac specificity: CK-MB is cardiac-enriched (higher proportion in cardiac tissue than skeletal). (5) Clinical use: (a) Total CK elevation—nonspecific (MI, rhabdomyolysis, seizures, exercise). (b) CK-MB percentage—if >5% of total CK or CK-MB/total CK ratio >0.04, suggests cardiac source. (c) Troponin (cTn I, cTn T)—even more specific (cardiac-only isoforms), now preferred biomarker for MI. (6) Timing: CK rises 3-12 hours post-MI, peaks at 24-48 hours, falls by 3-4 days. Troponin rises similar timing but remains elevated longer (7-14 days). References: Satyanarayana; Harper's; Stryer.",
        bloomLevel: "APPLICATION",
        pattern: "PROBLEM_SOLVING",
      },
      {
        id: "BI-MOD-02-TOP-04-MCQ-002",
        topicCode: "BI-MOD-02-TOP-04",
        question: "Alkaline phosphatase (ALP) is elevated in a patient with bone fracture healing. What is the physiological role of ALP in bone formation?",
        options: {
          a: "ALP dephosphorylates organic matrix proteins (collagen, non-collagenous proteins), facilitating hydroxyapatite (calcium phosphate) crystal deposition on matrix scaffold during mineralization",
          b: "ALP directly catalyzes bone mineral formation through enzymatic synthesis of hydroxyapatite",
          c: "ALP inhibits bone resorption by osteoclasts, preserving newly formed bone",
          d: "ALP enhances osteoblast proliferation through growth factor activation",
        },
        correctOption: "a",
        explanation: "Alkaline phosphatase in bone metabolism: (1) ALP is alkaline/nonspecific phosphatase enzyme; multiple tissue sources: bone (osteoblasts, highest), liver, kidney, intestine. (2) Bone ALP (bone-specific alkaline phosphatase, BSAP) is marker of bone formation. (3) Mechanism of action: (a) Osteoblasts synthesize organic bone matrix (Type I collagen, osteocalcin, osteopontin, matrix gla protein). (b) ALP dephosphorylates inhibitors of mineralization (pyrophosphate, phosphate esters). (c) This decreases inhibitor concentration, allowing hydroxyapatite crystals to nucleate and grow on collagen scaffold. (d) Net result: mineralized bone formation. (4) Clinical use: (a) ALP elevation in bone fracture healing, Paget's disease (bone turnover), rickets. (b) BSAP is biochemical marker of bone formation (increased in bone-forming states). (c) Alkaline phosphatase isoenzymes separate bone-specific from hepatic. (5) Bone fracture healing: ALP rises at 1-2 weeks (peak at 2-3 weeks), correlates with callus formation/mineralization. References: Satyanarayana; Harper's.",
        bloomLevel: "ANALYSIS",
        pattern: "ANALYSIS",
      },
      {
        id: "BI-MOD-02-TOP-04-MCQ-003",
        topicCode: "BI-MOD-02-TOP-04",
        question: "Gamma-glutamyl transferase (GGT) is elevated in patients with cholestasis (bile duct obstruction). Why is GGT elevation specific for hepatobiliary disease compared to ALP?",
        options: {
          a: "GGT is found in liver and kidney but not bone; ALP has bone source, making GGT more specific for liver disease; combined ALP+GGT elevation suggests hepatic, not bone cause",
          b: "GGT directly catalyzes bilirubin detoxification, elevated during cholestasis",
          c: "GGT inhibits bile acid synthesis, elevated during bile duct obstruction",
          d: "GGT has longer half-life, allowing delayed detection of liver disease",
        },
        correctOption: "a",
        explanation: "Alkaline phosphatase and GGT distinction: (1) Alkaline phosphatase (ALP): sources—bone (osteoblasts), liver (canalicular membrane), kidney, intestine. Elevation: bone disease (fracture healing, osteoporosis with high turnover, Paget's, rickets), liver disease (cholestasis, cirrhosis), biliary obstruction. Problem: cannot distinguish bone from hepatic source. (2) GGT (gamma-glutamyl transferase): sources—liver (primary, hepatocytes, canalicular membrane), kidney. Sources: bone NOT included. Elevation: liver disease, kidney disease. (3) Diagnostic use: (a) ALP alone elevated + GGT normal → bone disease (increased osteoblast ALP). (b) ALP + GGT both elevated → hepatobiliary disease (bile duct obstruction, cirrhosis, hepatitis). (4) Example: patient with elevated ALP. If GGT is normal → likely bone disease (fracture, Paget's). If GGT elevated → likely liver disease. (5) GGT also used to assess AST/ALT elevations—GGT elevation suggests hepatic origin vs. muscle/hemolysis. References: Satyanarayana; Harper's.",
        bloomLevel: "ANALYSIS",
        pattern: "ANALYSIS",
      },

      // BI-MOD-07-TOP-02: Kidney Function Tests
      {
        id: "BI-MOD-07-TOP-02-MCQ-001",
        topicCode: "BI-MOD-07-TOP-02",
        question: "A patient with chronic kidney disease shows serum creatinine 3.0 mg/dL (estimate GFR ~20 mL/min) and serum urea 80 mg/dL (BUN 37 mg/dL). Why does BUN rise disproportionately more than creatinine in renal failure?",
        options: {
          a: "Creatinine is renally eliminated only (GFR-dependent); BUN rises excessively due to extrarenal factors: prerenal azotemia (dehydration increases urea reabsorption), protein catabolism (increases urea production), GI bleeding",
          b: "BUN is more sensitive marker of GFR decline than creatinine",
          c: "Urea is reabsorbed in renal tubules; creatinine is not reabsorbed, making creatinine clearance always equal GFR",
          d: "BUN elevation indicates acute kidney injury; creatinine elevation indicates chronic kidney disease",
        },
        correctOption: "a",
        explanation: "Creatinine vs. BUN as renal function markers: (1) Creatinine: (a) Endogenous product of creatine metabolism in muscle, constant daily production related to muscle mass. (b) Renally eliminated (filtered by glomerulus, NOT reabsorbed). (c) Creatinine clearance ≈ GFR (not perfectly—small amount of secretion in proximal tubule, but approximation valid). (d) Unaffected by diet, hydration, protein catabolism. (2) BUN (blood urea nitrogen): (a) Product of protein catabolism, variable production (diet, tissue breakdown). (b) Renally filtered AND partially reabsorbed in collecting duct (tubular reabsorption ~40-50%). (c) Reabsorption increases with volume depletion (proximal tubule absorbs water, urea follows osmotically). (d) Affected by: dehydration (increased reabsorption), high protein diet (increased production), GI bleeding (increased production from blood protein), liver disease (decreased urea synthesis). (3) Clinical use: (a) BUN/Cr ratio >20 suggests prerenal azotemia (dehydration, hypoperfusion) where urea reabsorption is enhanced. (b) BUN/Cr ratio ~10-15 suggests intrinsic renal disease. (c) GFR should be estimated using creatinine-based formulas (MDRD, CKD-EPI) rather than relying on BUN. (4) Example: severe dehydration increases BUN disproportionately; creatinine relatively preserved. References: Satyanarayana; Harper's.",
        bloomLevel: "ANALYSIS",
        pattern: "ANALYSIS",
      },
      {
        id: "BI-MOD-07-TOP-02-MCQ-002",
        topicCode: "BI-MOD-07-TOP-02",
        question: "A patient with acute kidney injury has elevated serum potassium (K+ 6.5 mEq/L, normal 3.5-5.0). Why is hyperkalemia particularly dangerous in acute kidney injury?",
        options: {
          a: "Elevated serum K+ depolarizes cell membranes (reduces resting membrane potential difference), causing cardiac arrhythmias; effect accelerated if hyponatremia or hypocalcemia coexist",
          b: "Hyperkalemia causes acute metabolic acidosis, which directly damages kidneys",
          c: "High K+ levels increase osmotic pressure, causing cell lysis",
          d: "Hyperkalemia reduces serum magnesium, causing neuromuscular dysfunction",
        },
        correctOption: "a",
        explanation: "Hyperkalemia in acute kidney injury: (1) Mechanism: elevated extracellular K+ reduces K+ concentration gradient across cell membranes (normal: intracellular K+ ~140, extracellular ~4). (2) Nernst potential shift: as K+ gradient decreases, resting membrane potential depolarizes (becomes less negative, closer to threshold). (3) Cardiac effects: (a) Depolarization shortens action potential duration, widens QRS complex (peaked T waves on EKG). (b) Increased automaticity → ectopic beats, (c) Slowed conduction → heart blocks, (d) Severe: asystole, ventricular fibrillation. (4) Manifestations: weakness, muscle cramps, palpitations, cardiac arrhythmias. (5) Severity depends on: (a) Absolute K+ level (>6.5 considered severe), (b) Rate of rise (acute rise more dangerous), (c) Coexisting abnormalities—hyponatremia (reduces K+ gradient further, increases risk), hypocalcemia (lowers threshold, increases excitability). (6) Management: (a) Acute: calcium gluconate (stabilizes membrane), insulin+glucose (shifts K+ intracellularly), beta-agonists, sodium bicarbonate. (b) Definitive: dialysis (remove K+). (7) Prevention in AKI: potassium restriction, monitor K+ levels. References: Satyanarayana; Harper's.",
        bloomLevel: "ANALYSIS",
        pattern: "ANALYSIS",
      },
      {
        id: "BI-MOD-07-TOP-02-MCQ-003",
        topicCode: "BI-MOD-07-TOP-02",
        question: "Serum cystatin C is increasingly used as an alternative marker of GFR in chronic kidney disease. How does cystatin C overcome limitations of serum creatinine?",
        options: {
          a: "Cystatin C is produced at constant rate (not dependent on muscle mass), completely renally cleared by glomerular filtration, not affected by age/sex/race; provides accurate GFR across all patient populations",
          b: "Cystatin C is less expensive than creatinine measurement, making it preferable in resource-limited settings",
          c: "Cystatin C is not filtered by glomerulus but is metabolized by kidney, providing indirect GFR assessment",
          d: "Cystatin C combines advantages of both creatinine and BUN, eliminating need for separate BUN/Cr ratio calculation",
        },
        correctOption: "a",
        explanation: "Cystatin C advantages over creatinine: (1) Cystatin C: small protease inhibitor (13 kDa), produced by all nucleated cells at constant rate (1-2 mg/kg/day). (2) Production rate independent of: muscle mass (unlike creatinine), age, sex, race, diet. (3) Elimination: 99% filtered by glomerulus, reabsorbed and metabolized in proximal tubule (some degree), NOT affected by tubular secretion (creatinine has small secretion component). (4) GFR correlation: cystatin C clearance correlates closely with inulin clearance (true GFR marker). (5) Advantages: (a) Accurate in low muscle mass patients (elderly, cachexia, muscle disease), (b) More sensitive than creatinine for early GFR decline (detects CKD Stage 1-2 better), (c) Unaffected by race (no race-correction needed). (6) Limitations: (a) Influenced by inflammation (interleukin-6), corticosteroid therapy (increases production), (b) Less standardization than creatinine, (c) Cost (higher than creatinine), (d) Not widely available in all labs. (7) Current use: cystatin C recommended for patients where creatinine unreliable (elderly, CKD Stage 3-4, muscle disorders), or combined cystatin C + creatinine eGFR improves accuracy. References: Satyanarayana; Harper's.",
        bloomLevel: "ANALYSIS",
        pattern: "ANALYSIS",
      },
    ],
  },
  {
    subjectCode: "FM",
    mcqs: [
      // FM-MOD-01-TOP-05: Medical Ethics & Legislation
      {
        id: "FM-MOD-01-TOP-05-MCQ-001",
        topicCode: "FM-MOD-01-TOP-05",
        question: "A 16-year-old female is brought by parents requesting termination of pregnancy. Under Indian law (Medical Termination of Pregnancy Act, 2021), what is the legal criterion for abortion in this case?",
        options: {
          a: "Below age 18, parental consent is required; MTP is allowed up to 24 weeks if by registered medical practitioner following proper procedure",
          b: "Minors are not allowed MTP regardless of circumstances; must wait until age 18",
          c: "MTP allowed only if fetus has lethal anomaly, regardless of age or parental consent",
          d: "Age-specific counseling required; MTP allowed up to 20 weeks, but parental consent becomes binding after 16 years",
        },
        correctOption: "a",
        explanation: "Medical Termination of Pregnancy Act, 2021 (India): (1) Amendments: (a) Expanded gestational age limit from 20 weeks to 24 weeks for special categories. (b) Introduced categories: (i) up to 20 weeks—any woman's decision, (ii) 20-24 weeks—specified circumstances (fetal anomaly, health/life risk, rape, marital status change). (2) Minors (<18 years): require consent of guardian + registered medical practitioner. (3) Age 18-49: individual autonomy regarding MTP decision. (4) Process: (a) Registered medical practitioner consultation, (b) Counseling (optional for 15-20 week MTP if chosen, mandatory for 20-24 week), (c) Pre-procedure information. (5) Methods: (a) up to 12 weeks—medical (mifepristone+misoprostol) or surgical, (b) 12-20 weeks—surgical (D&E, induced labor). (6) Reporting: registered practitioners must inform government through designated centers. (7) Confidentiality: medical information protected, parental knowledge not mandatory (though best practice for minors if safe). In India, adolescent-friendly healthcare and appropriate counseling support compliance. References: KS Narayan Reddy; Pillay; Indian legal framework.",
        bloomLevel: "APPLICATION",
        pattern: "PROBLEM_SOLVING",
      },
      {
        id: "FM-MOD-01-TOP-05-MCQ-002",
        topicCode: "FM-MOD-01-TOP-05",
        question: "A physician discovers that a patient with HIV is not disclosing his seronegative status to his sexual partner. The physician is legally and ethically conflicted between confidentiality and duty to warn. In India, which principle takes precedence?",
        options: {
          a: "Duty to warn/protect third party supersedes confidentiality when there is foreseeable risk of serious harm (grave public health concern); physician may disclose after counseling patient, or encourage disclosure, with legal protection under public health doctrine",
          b: "Confidentiality is absolute; physician cannot disclose patient information to third parties under any circumstance",
          c: "Physician has no legal obligation to warn; confidentiality must be maintained strictly",
          d: "Patient autonomy overrides public health concerns; counseling alone is sufficient without disclosure option",
        },
        correctOption: "a",
        explanation: "HIV disclosure and physician responsibility (India): (1) Legal framework: Indian Penal Code (IPC) Section 336-337 (act endangering life), Section 304A (causing death by negligence), Indian Medical Council (Professional Conduct) Regulations. (2) Ethical principles: (a) Confidentiality—sacred trust between patient-physician, (b) Beneficence—prevent harm to others, (c) Justice—balance individual rights with public health. (3) HIV-specific guidance: (a) Encourage patient to inform partner voluntarily. (b) If patient refuses and continues high-risk behavior, physician may disclose following: (i) documented counseling of patient, (ii) clear documentation of attempts to encourage voluntary disclosure, (iii) notification to appropriate health authority (State Health Authority, NGO partners). (c) Physician should follow confidentiality as much as possible while protecting third party. (4) Legal justification: duty to warn/prevent serious harm to innocent third party; precedent in tort law. (5) Implementation: (a) Couple testing/counseling often recommended for prevention. (b) Sexual partner(s) should be counseled/tested. (c) Documentation critical for legal protection. (6) In practice: most cases resolved with counseling + encouragement; forceful disclosure rare. References: KS Narayan Reddy; Indian ethical guidelines; IPC.",
        bloomLevel: "ANALYSIS",
        pattern: "ANALYSIS",
      },
      {
        id: "FM-MOD-01-TOP-05-MCQ-003",
        topicCode: "FM-MOD-01-TOP-05",
        question: "A patient refuses life-saving blood transfusion on religious grounds (Jehovah's Witness). In India, what is the physician's legal obligation?",
        options: {
          a: "Patient autonomy is paramount; refusal must be respected if patient is competent and informed; physician documents refusal, explores bloodless alternatives (cell salvage, crystalloids), obtains written consent for alternative management",
          b: "Physician can override refusal in emergency to save life; patient's religious belief does not supersede legal duty to provide standard care",
          c: "Refusal is treated as attempted suicide; court intervention mandatory to mandate transfusion",
          d: "Informed refusal is valid only for adults >21 years; minors' refusal can be overridden by parental/court order",
        },
        correctOption: "a",
        explanation: "Refusal of blood transfusion (India): (1) Legal principle: Right to refuse medical treatment stems from bodily integrity and autonomy (constitutional right in India, similar to informed consent doctrine). (2) Requirements for valid refusal: (a) Patient must be competent (mentally capable of understanding consequences). (b) Decision must be informed (physician discloses risks of refusal). (c) Decision must be voluntary (no coercion). (d) Refusal should be documented (written/witnessed preferred). (3) Physician obligations: (a) Accept competent refusal regardless of physician's disagreement or religious background. (b) Explore alternatives: crystalloid fluids (volume expansion), cell salvage (reuse patient's own blood), blood substitutes (when available), medications (iron, EPO, antifibrinolytics). (c) Proceed with surgery/emergency care using available alternatives. (d) Document extensively (patient's statement, physician explanation, alternatives discussed, family involvement). (4) Exception for minors: if minor's life at risk and parents refuse transfusion, courts can override (duty to save child's life). (5) Emergency situations: if truly life-threatening and patient unconscious, transfusion may be given (implied consent doctrine, though controversial—best to wait for conscious patient's wishes if safe delay possible). (6) Religious considerations: respect Jehovah's Witness preference for bloodless medicine. References: KS Narayan Reddy; Indian legal precedents.",
        bloomLevel: "ANALYSIS",
        pattern: "ANALYSIS",
      },
    ],
  },
  {
    subjectCode: "OP",
    mcqs: [
      // OP-MOD-04-TOP-05: Neuro-Ophthalmology
      {
        id: "OP-MOD-04-TOP-05-MCQ-001",
        topicCode: "OP-MOD-04-TOP-05",
        question: "A patient with 6th cranial nerve (abducens) palsy presents with inability to abduct the eye (horizontal gaze toward affected side). Which anatomical site would a brainstem lesion affect both the 6th nerve nucleus and the ipsilateral gaze center (paramedian pontine reticular formation, PPRF)?",
        options: {
          a: "Lesion at pontomedullary junction or lower pons affects 6th nucleus directly; if PPRF also involved, results in conjugate gaze palsy (cannot look ipsilateral) PLUS 6th nerve paralysis—contralateral eye cannot adduct",
          b: "Lesion at midbrain affects 3rd nerve nucleus; 6th nerve is unaffected",
          c: "Lesion in frontal cortex causes contralateral conjugate gaze deviation (away from lesion)",
          d: "Lesion at cavernous sinus affects 3rd, 4th, 5th, 6th nerves but NOT gaze centers",
        },
        correctOption: "a",
        explanation: "Brainstem gaze pathways and 6th nerve anatomy: (1) Paramedian pontine reticular formation (PPRF): controls horizontal gaze, located in pontomedullary junction. Coordinates: (a) Ipsilateral 6th nucleus (lateral rectus activation), (b) Contralateral 3rd nucleus via medial longitudinal fasciculus (MLF) (medial rectus activation). (2) 6th nerve nucleus location: dorsal tegmentum of lower pons, ventromedial to 4th ventricle. (3) Brainstem lesion at PPRF level: (a) Affects PPRF → loss of ipsilateral conjugate gaze (cannot look toward lesion). (b) If 6th nucleus also involved → 6th nerve paralysis adds to deficit. (c) Result: conjugate gaze palsy + ipsilateral abducens paralysis = 'one-and-a-half syndrome' (inability to look toward lesion + inability to abduct ipsilateral eye; contralateral eye can abduct but not adduct due to MLF involvement). (4) Sixth nerve course: exits brainstem, travels through ventral pons, longest intracranial course → vulnerable to ischemia (lacunar infarct in pontine distribution). (5) Differential diagnosis: isolated 6th nerve palsy from brainstem nuclei involvement (with ipsilateral gaze palsy) vs. 6th nerve fascicular lesion (with contralateral hemiparesis if affects corticospinal tract) vs. subarachnoid/cavernous sinus involvement. References: AK Khurana; Parson's Ophthalmology.",
        bloomLevel: "ANALYSIS",
        pattern: "ANALYSIS",
      },
      {
        id: "OP-MOD-04-TOP-05-MCQ-002",
        topicCode: "OP-MOD-04-TOP-05",
        question: "A patient with optic neuritis (inflammation of optic nerve) presents with loss of central vision and pain on eye movement. Why is optic neuritis closely associated with multiple sclerosis (MS)?",
        options: {
          a: "Optic neuritis is inflammatory demyelination of optic nerve (autoimmune attack on myelin); ~50% of demyelinating optic neuritis patients develop MS within 10-20 years, indicating MS as underlying disease",
          b: "MS causes increased intracranial pressure, leading to optic nerve compression and vision loss",
          c: "Optic neuritis causes MS through retrograde neural degeneration",
          d: "MS and optic neuritis have identical pathophysiology; distinction is only anatomical (nerve vs. CNS)",
        },
        correctOption: "a",
        explanation: "Optic neuritis and multiple sclerosis: (1) Optic neuritis: inflammatory demyelination of optic nerve, often solitary demyelinating event. (2) Clinical features: (a) Subacute vision loss (hours to days), (b) Central scotoma (visual field loss affecting center more than periphery), (c) Pain on ocular movement (due to inflammation of optic nerve sheath). (d) Relative afferent pupillary defect (RAPD, positive Marcus Gunn sign)—affected eye's pupil dilates paradoxically when light shifted from normal to affected eye due to reduced afferent signal. (3) MS association: Optic Neuritis Treatment Trial (ONTT) showed: (a) ~50% of patients with isolated optic neuritis develop MS within 10-15 years. (b) Presence of brain MRI white matter lesions at baseline predicts higher MS risk (~60% in 10 years vs. ~20% without lesions). (c) Suggests demyelinating disease spectrum: some patients have isolated optic neuritis, others have progressive MS. (4) Investigations: (a) MRI brain (assess demyelinating lesions predicting MS). (b) CSF analysis (oligoclonal bands suggestive of MS). (c) OCT (measures retinal nerve fiber layer thinning, marker of previous demyelination). (5) Management: corticosteroids (IV methylprednisolone) hasten visual recovery, reduce MS conversion risk slightly. References: AK Khurana; Parson's Ophthalmology.",
        bloomLevel: "ANALYSIS",
        pattern: "ANALYSIS",
      },
      {
        id: "OP-MOD-04-TOP-05-MCQ-003",
        topicCode: "OP-MOD-04-TOP-05",
        question: "A patient with uncontrolled diabetes develops ischemic optic neuropathy (anterior ION). Which vascular bed is predominantly affected, and why are diabetics at higher risk?",
        options: {
          a: "Anterior ION affects optic nerve head blood supply (short posterior ciliary arteries); diabetes increases risk through microvascular ischemia, atherosclerotic stenosis of carotid/ophthalmic arteries, and capillary occlusion from nonperfusion zones",
          b: "ION affects posterior optic nerve blood supply (central retinal artery); risk increased by diabetic retinopathy alone",
          c: "ION affects lateral geniculate nucleus; diabetes causes preferential damage there",
          d: "ION is not related to vascular disease; it is pure demyelination",
        },
        correctOption: "a",
        explanation: "Ischemic optic neuropathy (ION) in diabetes: (1) Anatomy: optic nerve head (optic disc) has dual blood supply: (a) Short posterior ciliary arteries (SPCA)—supply anterior optic nerve head (optic disc), (b) Central retinal artery—supplies inner retina, not optic disc perfusion. (2) Two types ION: (a) Anterior ION (AION, ~90%): affects optic disc, segmental loss of blood supply from SPCA. (b) Posterior ION (PION): affects posterior optic nerve, rarer. (3) Diabetes-related risk: (a) Microvascular disease: atherosclerotic stenosis of SPCAs, reduced blood flow to optic disc. (b) Capillary occlusion: microthrombi, capillary drop-out in areas perfusing optic nerve head (similar to diabetic retinopathy), leading to nonperfusion zones. (c) Increased intracranial pressure from retinopathy swelling. (d) Hypercoagulability and endothelial dysfunction. (4) Clinical features: sudden, painless vision loss (altitudinal visual field loss—affecting superior or inferior hemifield corresponding to segmental ischemia), RAPD, optic disc pallor/edema. (5) Differential diagnosis: Arteritic AION (giant cell arteritis, older patients with temporal headache, systemic symptoms), non-arteritic AION (most common, young/middle-age, associated with hypertension, diabetes, hypercholesterolemia). (6) Management: tight glycemic control, blood pressure control, address cardiovascular risk factors. References: AK Khurana; Parson's Ophthalmology.",
        bloomLevel: "ANALYSIS",
        pattern: "ANALYSIS",
      },
    ],
  },
];

export const allMcqsRemainingGap5 = remainingGapMcqs5;
