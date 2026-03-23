export const entOphthMcqs2 = [
  // ENT Questions (15)
  {
    type: "single-best-answer" as const,
    stem: "A 45-year-old male presents with conductive hearing loss and history of ear discharge. Otoscopy shows perforation with granulation tissue. What is the most likely diagnosis?",
    clinicalVignette: "ENT examination reveals chronic suppurative otitis media with bone erosion on CT.",
    options: [
      { id: "a", text: "Chronic suppurative otitis media (CSOM) with unsafe type (cholesteatoma risk)", isCorrect: true },
      { id: "b", text: "Acute otitis media", isCorrect: false },
      { id: "c", text: "Serous otitis media", isCorrect: false },
      { id: "d", text: "Otitis externa", isCorrect: false }
    ],
    explanation: "CSOM unsafe type (attic/marginal perforation) has ossicular erosion, granulation tissue, potential for cholesteatoma formation. Bone erosion seen on CT. Requires surgery (tympanoplasty, ossiculoplasty) to prevent complications. Safe type (central perforation) has better prognosis.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Otology", "Conductive Hearing Loss", "CBME-Competency-001"],
    subjectCode: "ENT",
    topicCode: "ENT-MOD-OTO-CSOM",
    textbookRefs: ["Dhingra's Textbook of ENT", "Robbins & Cotran Pathology"]
  },
  {
    type: "single-best-answer" as const,
    stem: "A 6-year-old child presents with recurrent sore throat (>7 times per year) with high fever and exudates. What is the indication for tonsillectomy?",
    clinicalVignette: "Pediatric ENT patient with recurrent pharyngitis affecting school attendance.",
    options: [
      { id: "a", text: "Recurrent acute tonsillitis (>4 times/year for 2 years) with systemic symptoms", isCorrect: true },
      { id: "b", text: "Single episode of severe tonsillitis", isCorrect: false },
      { id: "c", text: "Chronic tonsillitis with mild symptoms", isCorrect: false },
      { id: "d", text: "Suspected malignancy on examination", isCorrect: false }
    ],
    explanation: "Tonsillectomy indications: ≥4 episodes/year for 2 years (or ≥6 episodes in 1 year) with fever/exudate/cervical lymphadenopathy. Other indications: airway obstruction, sleep apnea, recurrent peritonsillar abscess, malignancy. Risks vs. benefits considered.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Pharyngology", "Tonsillitis", "Surgery", "CBME-Competency-002"],
    subjectCode: "ENT",
    topicCode: "ENT-MOD-PHARYNX-TONSIL",
    textbookRefs: ["Dhingra's Textbook of ENT", "Scott-Brown's ENT"]
  },
  {
    type: "single-best-answer" as const,
    stem: "A 50-year-old patient with unilateral nasal obstruction and mass visualized on nasal endoscopy. Which is the most common benign nasal tumor?",
    clinicalVignette: "Rhinology patient with mass in nasal cavity causing obstruction.",
    options: [
      { id: "a", text: "Nasal polyp (inflammatory, antrochoanal polyp)", isCorrect: true },
      { id: "b", text: "Osteoma", isCorrect: false },
      { id: "c", text: "Meningioma", isCorrect: false },
      { id: "d", text: "Hemangioma", isCorrect: false }
    ],
    explanation: "Nasal polyps most common benign tumors. Types: Inflammatory (allergic, chronic sinusitis related), Antrochoanal (single stalk, extends from maxillary sinus), Ethmoidal. Presenting: unilateral polyps/severe unilateral obstruction → suspicious for malignancy, requires imaging.",
    difficulty: "EASY" as const,
    bloomsLevel: "REMEMBER" as const,
    examTags: ["Rhinology", "Benign Tumors", "CBME-Competency-003"],
    subjectCode: "ENT",
    topicCode: "ENT-MOD-RHINO-POLYP",
    textbookRefs: ["Dhingra's Textbook of ENT", "Scott-Brown's ENT"]
  },
  {
    type: "single-best-answer" as const,
    stem: "A 65-year-old heavy smoker and drinker presents with persistent hoarseness and dysphagia. What is the most likely diagnosis?",
    clinicalVignette: "Laryngology patient with significant hoarseness lasting >2 weeks. Laryngoscopy shows irregular mass.",
    options: [
      { id: "a", text: "Laryngeal cancer (squamous cell carcinoma)", isCorrect: true },
      { id: "b", text: "Vocal cord paralysis", isCorrect: false },
      { id: "c", text: "Laryngitis", isCorrect: false },
      { id: "d", text: "Benign vocal cord lesion", isCorrect: false }
    ],
    explanation: "Laryngeal cancer most common in smokers/drinkers. Present: hoarseness (>3 weeks persistent), dysphagia, stridor, dyspnea. Diagnosis: laryngoscopy + biopsy. Staging: CT/MRI. Treatment: radiation, chemotherapy, or total laryngectomy depending on stage.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Laryngology", "Malignancy", "Hoarseness", "CBME-Competency-004"],
    subjectCode: "ENT",
    topicCode: "ENT-MOD-LARYNX-CANCER",
    textbookRefs: ["Dhingra's Textbook of ENT", "Scott-Brown's ENT"]
  },
  {
    type: "single-best-answer" as const,
    stem: "A 30-year-old female presents with progressive sensorineural hearing loss bilateral, worse for low frequencies. What is the probable cause?",
    clinicalVignette: "Audiometry shows bilateral low-frequency hearing loss with bone-conduction air-conduction gap suggestive of mixed pathology.",
    options: [
      { id: "a", text: "Otosclerosis (stapes fixation, conductive → mixed)", isCorrect: true },
      { id: "b", text: "Sudden sensorineural hearing loss", isCorrect: false },
      { id: "c", text: "Noise-induced hearing loss", isCorrect: false },
      { id: "d", text: "Age-related hearing loss", isCorrect: false }
    ],
    explanation: "Otosclerosis: stapes footplate fixation due to abnormal bone remodeling. Female predominance (2:1). Progressive conductive or mixed hearing loss (Carhart's bone), low-frequency affected initially. Diagnosis: audiometry, CT imaging (otosclerotic foci). Treatment: surgery (stapedectomy) or hearing aid.",
    difficulty: "HARD" as const,
    bloomsLevel: "ANALYZE" as const,
    examTags: ["Otology", "Hearing Loss", "Mixed Pathology", "CBME-Competency-005"],
    subjectCode: "ENT",
    topicCode: "ENT-MOD-OTO-OTOSCLEROSIS",
    textbookRefs: ["Dhingra's Textbook of ENT", "Robbins & Cotran Pathology"]
  },
  {
    type: "single-best-answer" as const,
    stem: "A 25-year-old presents with sudden unilateral sensorineural hearing loss with tinnitus and vertigo. What is the emergency diagnosis?",
    clinicalVignette: "Sudden hearing loss requiring urgent evaluation and treatment initiation.",
    options: [
      { id: "a", text: "Sudden sensorineural hearing loss (SSHL, idiopathic or viral)", isCorrect: true },
      { id: "b", text: "Conductive hearing loss", isCorrect: false },
      { id: "c", text: "Acoustic neuroma", isCorrect: false },
      { id: "d", text: "Meniere's disease", isCorrect: false }
    ],
    explanation: "SSHL: >30 dB loss in ≥3 consecutive frequencies over ≤3 days. Idiopathic, possibly viral (CMV, mumps). Emergency requiring immediate evaluation (MRI to exclude acoustic neuroma) and treatment (steroids, antivirals, hyperbaric oxygen) within 2 weeks for best prognosis.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Otology", "Hearing Loss Emergency", "CBME-Competency-006"],
    subjectCode: "ENT",
    topicCode: "ENT-MOD-OTO-SSHL",
    textbookRefs: ["Dhingra's Textbook of ENT", "AAO-HNS Guidelines"]
  },
  {
    type: "single-best-answer" as const,
    stem: "A 40-year-old with episodic vertigo, tinnitus, and hearing loss affecting one ear. Audiogram shows low-frequency sensorineural loss. What is the diagnosis?",
    clinicalVignette: "ENT patient with Meniere's triad presenting with characteristic symptoms.",
    options: [
      { id: "a", text: "Meniere's disease (endolymphatic hydrops)", isCorrect: true },
      { id: "b", text: "Benign paroxysmal positional vertigo (BPPV)", isCorrect: false },
      { id: "c", text: "Vestibular neuritis", isCorrect: false },
      { id: "d", text: "Central vertigo from brainstem lesion", isCorrect: false }
    ],
    explanation: "Meniere's disease: endolymphatic hydrops causing Meniere's triad (vertigo, tinnitus, hearing loss) + aural fullness. Typically unilateral, episodic. Low-frequency SNHL initially. Diagnosis clinical. Treatment: salt-restricted diet, diuretics, steroids; surgery if severe/refractory.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Otology", "Vertigo", "Meniere's Disease", "CBME-Competency-007"],
    subjectCode: "ENT",
    topicCode: "ENT-MOD-OTO-MENIERE",
    textbookRefs: ["Dhingra's Textbook of ENT", "AA O-HNS Guidelines"]
  },
  {
    type: "single-best-answer" as const,
    stem: "A 5-year-old with bilateral conductive hearing loss, adenoid hypertrophy, and recurrent OME. What is the management?",
    clinicalVignette: "Pediatric otology patient with conductive hearing loss affecting speech development.",
    options: [
      { id: "a", text: "Adenoidectomy ± tympanostomy tubes if persistent after 3 months watchful waiting", isCorrect: true },
      { id: "b", text: "Hearing aids immediately", isCorrect: false },
      { id: "c", text: "Tympanoplasty only", isCorrect: false },
      { id: "d", text: "Observation only, will resolve by age 12", isCorrect: false }
    ],
    explanation: "Otitis media with effusion (OME) management: initial observation for 3 months (spontaneous resolution 90%). If persistent + hearing loss affecting development, consider adenoidectomy + tympanostomy tubes. Most common cause of hearing loss in children.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Pediatric Otology", "OME Management", "CBME-Competency-008"],
    subjectCode: "ENT",
    topicCode: "ENT-MOD-PEDS-OME",
    textbookRefs: ["Dhingra's Textbook of ENT", "AAO-HNS Pediatric Guidelines"]
  },
  {
    type: "single-best-answer" as const,
    stem: "A 50-year-old patient with recurrent epistaxis from anterior inferior septum. What is the most likely vascular source?",
    clinicalVignette: "Rhinology patient with epistaxis localized to Kiesselbach's area.",
    options: [
      { id: "a", text: "Anterior ethmoidal artery and terminal branches of sphenopalatine artery (Kiesselbach's plexus)", isCorrect: true },
      { id: "b", text: "Posterior ethmoidal artery only", isCorrect: false },
      { id: "c", text: "Lateral nasal artery", isCorrect: false },
      { id: "d", text: "Superior labial artery", isCorrect: false }
    ],
    explanation: "Kiesselbach's area (Little's area): anterior inferior septum, rich vascular anastomosis (septal artery from sphenopalatine, anterior ethmoidal). Most common epistaxis source (90% anterior). Treatment: topical hemostatics, cauterization, packing. Posterior epistaxis requires balloon tamponade/angiographic embolization.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Rhinology", "Epistaxis", "Vascular Anatomy", "CBME-Competency-009"],
    subjectCode: "ENT",
    topicCode: "ENT-MOD-RHINO-EPISTAXIS",
    textbookRefs: ["Dhingra's Textbook of ENT", "Anatomy references"]
  },
  {
    type: "single-best-answer" as const,
    stem: "A 35-year-old with unilateral nasal obstruction, mass visible on endoscopy, and epistaxis. What imaging is most appropriate?",
    clinicalVignette: "Concerning nasal mass requiring staging and surgical planning.",
    options: [
      { id: "a", text: "CT + MRI (assess bony erosion, soft tissue extent, perineural spread)", isCorrect: true },
      { id: "b", text: "Plain X-ray only", isCorrect: false },
      { id: "c", text: "Ultrasound only", isCorrect: false },
      { id: "d", text: "Endoscopy is diagnostic, no imaging needed", isCorrect: false }
    ],
    explanation: "Sinonasal masses require multimodality imaging: CT (bone erosion, surgical landmarks), MRI (soft tissue extent, perineural spread, intracranial involvement). Combination essential for surgical planning and staging. Biopsy for histology. Imaging also evaluates for metastatic disease.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Rhinology", "Sinonasal Malignancy", "Imaging", "CBME-Competency-010"],
    subjectCode: "ENT",
    topicCode: "ENT-MOD-RHINO-IMAGING",
    textbookRefs: ["Dhingra's Textbook of ENT", "Radiological guidelines"]
  },
  {
    type: "single-best-answer" as const,
    stem: "A 70-year-old male with progressive hearing loss in both ears. High-frequency sensorineural loss on audiometry. What is the diagnosis?",
    clinicalVignette: "Geriatric patient with age-related bilateral high-frequency hearing loss.",
    options: [
      { id: "a", text: "Presbycusis (age-related sensorineural hearing loss)", isCorrect: true },
      { id: "b", text: "Noise-induced hearing loss", isCorrect: false },
      { id: "c", text: "Otosclerosis", isCorrect: false },
      { id: "d", text: "Acoustic neuroma", isCorrect: false }
    ],
    explanation: "Presbycusis: progressive bilateral symmetric sensorineural hearing loss in elderly. High-frequency loss (4-8 kHz) initially. Due to cochlear hair cell degeneration (sensory presbycusis). Associated with tinnitus. Management: hearing aids. Noise exposure worsens condition.",
    difficulty: "EASY" as const,
    bloomsLevel: "REMEMBER" as const,
    examTags: ["Otology", "Aging", "Hearing Loss", "CBME-Competency-011"],
    subjectCode: "ENT",
    topicCode: "ENT-MOD-OTO-PRESBYCUSIS",
    textbookRefs: ["Dhingra's Textbook of ENT", "Gerontology"]
  },
  {
    type: "single-best-answer" as const,
    stem: "A 60-year-old smoker presents with trismus and difficulty swallowing. Intraoral mass noted. What is the most likely diagnosis?",
    clinicalVignette: "Oropharyngeal cancer in high-risk patient.",
    options: [
      { id: "a", text: "Squamous cell carcinoma of oropharynx (HPV-related or smoking-related)", isCorrect: true },
      { id: "b", text: "Benign mucosal ulcer", isCorrect: false },
      { id: "c", text: "Infectious pharyngitis", isCorrect: false },
      { id: "d", text: "Temporomandibular joint disorder", isCorrect: false }
    ],
    explanation: "Oropharyngeal cancer: SCC (90%). Risk factors: smoking, alcohol, HPV (16/18). Present: dysphagia, odynophagia, dysmalagia, neck mass. Trismus suggests masseter involvement. Diagnosis: endoscopy + biopsy. Staging: CT/MRI + PET-CT. Treatment: surgery, radiation ± chemotherapy.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Oncology", "Oropharyngeal Cancer", "CBME-Competency-012"],
    subjectCode: "ENT",
    topicCode: "ENT-MOD-PHARYNX-CANCER",
    textbookRefs: ["Dhingra's Textbook of ENT", "Head & Neck Oncology"]
  },
  {
    type: "single-best-answer" as const,
    stem: "A 3-year-old with congenital hearing loss. Gene testing shows GJB2 mutation. What is the inheritance pattern?",
    clinicalVignette: "Genetic counseling for congenital deafness.",
    options: [
      { id: "a", text: "Autosomal recessive (GJB2 encodes connexin 26, gap junctions in cochlea)", isCorrect: true },
      { id: "b", text: "Autosomal dominant", isCorrect: false },
      { id: "c", text: "X-linked recessive", isCorrect: false },
      { id: "d", text: "Mitochondrial inheritance", isCorrect: false }
    ],
    explanation: "GJB2 (connexin 26) mutations: autosomal recessive, cause 50% nonsyndromic deafness DFNB1. Gap junctions crucial for potassium recycling in cochlea. Genetic testing important for family counseling. Early detection via newborn screening enables intervention.",
    difficulty: "HARD" as const,
    bloomsLevel: "ANALYZE" as const,
    examTags: ["Genetics", "Congenital Deafness", "CBME-Competency-013"],
    subjectCode: "ENT",
    topicCode: "ENT-MOD-OTO-GENETICS",
    textbookRefs: ["Dhingra's Textbook of ENT", "Genetics references"]
  },
  {
    type: "single-best-answer" as const,
    stem: "A 2-year-old with recurrent otitis media, immunodeficiency, and low immunoglobulin levels. What syndrome should be suspected?",
    clinicalVignette: "Pediatric immunodeficiency with recurrent infections.",
    options: [
      { id: "a", text: "Selective IgA deficiency or Common Variable Immunodeficiency (CVID)", isCorrect: true },
      { id: "b", text: "DiGeorge syndrome", isCorrect: false },
      { id: "c", text: "Down syndrome only", isCorrect: false },
      { id: "d", text: "Menkes disease", isCorrect: false }
    ],
    explanation: "Recurrent OM associated with IgA deficiency (1:300 people) and CVID. Low immunoglobulin → impaired immune response to pathogens. Screen for hypogammaglobulinemia in recurrent infections. Other syndromic causes: DiGeorge (22q11 deletion), Down syndrome, cleft palate.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Immunology", "Pediatric Infection", "Syndromes", "CBME-Competency-014"],
    subjectCode: "ENT",
    topicCode: "ENT-MOD-PEDS-IMMUNODEF",
    textbookRefs: ["Dhingra's Textbook of ENT", "Immunology references"]
  },
  {
    type: "single-best-answer" as const,
    stem: "A 45-year-old with acute onset diplopia, proptosis, and chemosis. CT shows retrobulbar mass. What is the differential diagnosis?",
    clinicalVignette: "Orbital emergency with acute presentation.",
    options: [
      { id: "a", text: "Orbital cellulitis, abscess, or cavernous sinus thrombosis (infection) vs. orbital tumor or hemorrhage", isCorrect: true },
      { id: "b", text: "Refractive error only", isCorrect: false },
      { id: "c", text: "Migraine headache", isCorrect: false },
      { id: "d", text: "Dry eye syndrome", isCorrect: false }
    ],
    explanation: "Acute proptosis + diplopia + chemosis suggests orbital pathology. Differential: infectious (cellulitis, abscess), hemorrhage (anticoagulation, trauma), tumor (lymphoma, metastasis), inflammatory (myositis, IgG4-related). Urgent imaging + labs (CBC, blood culture). Treatment depends on etiology.",
    difficulty: "HARD" as const,
    bloomsLevel: "ANALYZE" as const,
    examTags: ["Orbital Pathology", "Emergency", "CBME-Competency-015"],
    subjectCode: "ENT",
    topicCode: "ENT-MOD-ORBIT-EMERGENCY",
    textbookRefs: ["Dhingra's Textbook of ENT", "Orbital Disease references"]
  },
  // Ophthalmology Questions (15)
  {
    type: "single-best-answer" as const,
    stem: "A 65-year-old presents with gradual painless vision loss. Slit-lamp shows milky white lens. What is the diagnosis?",
    clinicalVignette: "Cataract patient with nuclear sclerosis.",
    options: [
      { id: "a", text: "Cataract (lens opacity)", isCorrect: true },
      { id: "b", text: "Glaucoma", isCorrect: false },
      { id: "c", text: "Macular degeneration", isCorrect: false },
      { id: "d", text: "Retinal detachment", isCorrect: false }
    ],
    explanation: "Cataract: lens opacity causing painless progressive vision loss. Types: nuclear (age-related, myopia shift), cortical (radial spokes), posterior subcapsular. Diagnosis: slit-lamp. Management: spectacle correction initially; phacoemulsification when vision affects function. No medication reverses cataract.",
    difficulty: "EASY" as const,
    bloomsLevel: "REMEMBER" as const,
    examTags: ["Cataract", "Lens Pathology", "CBME-Competency-001"],
    subjectCode: "OPHTHO",
    topicCode: "OPHTHO-MOD-LENS-CATARACT",
    textbookRefs: ["Parson's Diseases of the Eye", "Duke-Elder's Ophthalmology"]
  },
  {
    type: "single-best-answer" as const,
    stem: "A 55-year-old with elevated intraocular pressure (IOP 28 mmHg), cupped optic disc, and progressive visual field loss. What is the diagnosis?",
    clinicalVignette: "Glaucoma patient with optic neuropathy.",
    options: [
      { id: "a", text: "Primary open-angle glaucoma (POAG)", isCorrect: true },
      { id: "b", text: "Acute angle-closure glaucoma", isCorrect: false },
      { id: "c", text: "Secondary glaucoma", isCorrect: false },
      { id: "d", text: "Normal tension glaucoma only", isCorrect: false }
    ],
    explanation: "POAG: elevated IOP (>21 mmHg), optic nerve cupping (C/D >0.6), progressive visual field loss (arcuate defects), open angles on gonioscopy. Asymptomatic initially. Treatment: topical prostaglandin analogs, beta-blockers, alpha-agonists; laser or surgery if uncontrolled.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Glaucoma", "Optic Neuropathy", "CBME-Competency-002"],
    subjectCode: "OPHTHO",
    topicCode: "OPHTHO-MOD-GLAUCOMA-POAG",
    textbookRefs: ["Parson's Diseases of the Eye", "Duke-Elder's Ophthalmology"]
  },
  {
    type: "single-best-answer" as const,
    stem: "A 40-year-old with sudden onset severe eye pain, red eye, blurred vision, and shallow anterior chamber. IOP 60 mmHg. What is the emergency diagnosis?",
    clinicalVignette: "Acute angle-closure glaucoma emergency requiring immediate treatment.",
    options: [
      { id: "a", text: "Acute angle-closure glaucoma (iris-lens diaphragm pushed forward, angle closure)", isCorrect: true },
      { id: "b", text: "Acute iritis", isCorrect: false },
      { id: "c", text: "Corneal abrasion", isCorrect: false },
      { id: "d", text: "Acute conjunctivitis", isCorrect: false }
    ],
    explanation: "Acute angle-closure: extreme pain, redness, blurred vision, corneal edema, mid-dilated pupil, shallow AC, very high IOP (60+ mmHg). Emergency requiring immediate treatment: topical/systemic agents to lower IOP, then YAG laser peripheral iridotomy. Untreated → permanent blindness.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Acute Glaucoma", "Ophthalmologic Emergency", "CBME-Competency-003"],
    subjectCode: "OPHTHO",
    topicCode: "OPHTHO-MOD-GLAUCOMA-ACG",
    textbookRefs: ["Parson's Diseases of the Eye", "AAO Emergency Manual"]
  },
  {
    type: "single-best-answer" as const,
    stem: "A 75-year-old with central vision loss and distorted lines (metamorphopsia) on Amsler chart. Fundus shows drusen and macular pigmentation changes. What is the diagnosis?",
    clinicalVignette: "Macular pathology in elderly patient.",
    options: [
      { id: "a", text: "Age-related macular degeneration (AMD, dry type)", isCorrect: true },
      { id: "b", text: "Diabetic retinopathy", isCorrect: false },
      { id: "c", text: "Cataract", isCorrect: false },
      { id: "d", text: "Retinal detachment", isCorrect: false }
    ],
    explanation: "AMD (dry form): drusen (lipid deposits), pigmentary changes, central vision loss. Amsler grid shows distorted lines. 80% of AMD cases. Slow progression. Wet AMD (CNV) rapid vision loss requires urgent treatment (anti-VEGF). Risk factors: age, smoking, family history.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Macular Disease", "AMD", "Vision Loss in Elderly", "CBME-Competency-004"],
    subjectCode: "OPHTHO",
    topicCode: "OPHTHO-MOD-RETINA-AMD",
    textbookRefs: ["Parson's Diseases of the Eye", "Duke-Elder's Ophthalmology"]
  },
  {
    type: "single-best-answer" as const,
    stem: "A 35-year-old diabetic with 10 years' duration presents with blurred vision. Fundus shows dot-blot hemorrhages, hard exudates, and microaneurysms. What is the stage?",
    clinicalVignette: "Diabetic retinopathy screening in long-standing diabetes.",
    options: [
      { id: "a", text: "Non-proliferative diabetic retinopathy (NPDR, mild stage)", isCorrect: true },
      { id: "b", text: "Proliferative diabetic retinopathy", isCorrect: false },
      { id: "c", text: "Diabetic macular edema", isCorrect: false },
      { id: "d", text: "No retinopathy", isCorrect: false }
    ],
    explanation: "NPDR stages: Mild (microaneurysms, small hemorrhages), Moderate (dot-blot hemorrhages, hard exudates, venous beading), Severe (large hemorrhages, cotton-wool spots, IRMA). PDR: neovascularization, vitreous hemorrhage. DME: thickening in macula. Tight glycemic control + antihypertensive therapy essential.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Diabetic Retinopathy", "Screening", "CBME-Competency-005"],
    subjectCode: "OPHTHO",
    topicCode: "OPHTHO-MOD-RETINA-DR",
    textbookRefs: ["Parson's Diseases of the Eye", "Endocrinology-Ophthalmology references"]
  },
  {
    type: "single-best-answer" as const,
    stem: "A 45-year-old presents with sudden onset floaters and flashing lights. Fundus shows partial detachment of retina. What is the emergency diagnosis?",
    clinicalVignette: "Retinal detachment with urgent requirement for surgical repair.",
    options: [
      { id: "a", text: "Rhegmatogenous retinal detachment (break/tear with vitreous traction)", isCorrect: true },
      { id: "b", text: "Tractional retinal detachment (diabetes)", isCorrect: false },
      { id: "c", text: "Exudative retinal detachment", isCorrect: false },
      { id: "d", text: "Posterior vitreous detachment", isCorrect: false }
    ],
    explanation: "Rhegmatogenous RD: retinal break + vitreous traction → detachment. Risk factors: myopia, trauma, family history. Present: floaters, flashing lights (photopsia), shadow in visual field. Emergency requiring urgent scleral buckle or vitrectomy. Prognosis depends on macula involvement.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Retinal Detachment", "Ophthalmologic Emergency", "CBME-Competency-006"],
    subjectCode: "OPHTHO",
    topicCode: "OPHTHO-MOD-RETINA-RD",
    textbookRefs: ["Parson's Diseases of the Eye", "AAO Emergency Manual"]
  },
  {
    type: "single-best-answer" as const,
    stem: "A 55-year-old with hypertension presents with sudden vision loss. Fundus shows cherry-red spot at macula with retinal whitening. What is the diagnosis?",
    clinicalVignette: "Acute retinal artery occlusion.",
    options: [
      { id: "a", text: "Central retinal artery occlusion (CRAO)", isCorrect: true },
      { id: "b", text: "Central retinal vein occlusion (CRVO)", isCorrect: false },
      { id: "c", text: "Retinal detachment", isCorrect: false },
      { id: "d", text: "Anterior uveitis", isCorrect: false }
    ],
    explanation: "CRAO: sudden complete vision loss (NLP or LP). Cherry-red spot (choroid visible through foveal thinness), retinal whitening. Emergency requiring immediate treatment (intravenous thrombolytics, AC paracentesis, carotid massage, oxygen). Risk factors: atherosclerosis, cardiac disease, thrombophilia.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Retinal Vascular Occlusion", "Ophthalmologic Emergency", "CBME-Competency-007"],
    subjectCode: "OPHTHO",
    topicCode: "OPHTHO-MOD-RETINA-CRAO",
    textbookRefs: ["Parson's Diseases of the Eye", "AAO Emergency Manual"]
  },
  {
    type: "single-best-answer" as const,
    stem: "A 40-year-old myopic patient presents with sudden floaters and photopsia. B-scan shows vitreous opacities. What is the likely diagnosis?",
    clinicalVignette: "Vitreous hemorrhage in myopic patient.",
    options: [
      { id: "a", text: "Vitreous hemorrhage (from retinal break, choroidal neovascularization, trauma)", isCorrect: true },
      { id: "b", text: "Posterior vitreous detachment only", isCorrect: false },
      { id: "c", text: "Vitreous inflammation (uveitis)", isCorrect: false },
      { id: "d", text: "Cataracts", isCorrect: false }
    ],
    explanation: "Vitreous hemorrhage: sudden onset floaters, photopsia, vision loss severity depends on blood amount. Causes: retinal break/tear (myopia risk), proliferative DR, neovascularization, trauma. Diagnosis: B-scan if fundus obscured. Management: watchful waiting (blood clears) vs. vitrectomy if no improvement.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Vitreous Pathology", "Hemorrhage", "CBME-Competency-008"],
    subjectCode: "OPHTHO",
    topicCode: "OPHTHO-MOD-VITREOUS-HEMOR",
    textbookRefs: ["Parson's Diseases of the Eye", "Duke-Elder's Ophthalmology"]
  },
  {
    type: "single-best-answer" as const,
    stem: "A 30-year-old presents with recurrent red eye, photophobia, and anterior chamber inflammation (3+ cells). No systemic disease history. What is the diagnosis?",
    clinicalVignette: "Anterior uveitis requiring investigation and treatment.",
    options: [
      { id: "a", text: "Idiopathic anterior uveitis (one-third of uveitis cases)", isCorrect: true },
      { id: "b", text: "Infectious keratitis", isCorrect: false },
      { id: "c", text: "Acute angle-closure glaucoma", isCorrect: false },
      { id: "d", text: "Bacterial conjunctivitis", isCorrect: false }
    ],
    explanation: "Anterior uveitis: AC inflammation (cells, flare, hypopyon possible). Causes: HLA-B27 related (ankylosing spondylitis, IBD), infections (herpes, syphilis), trauma, malignancy. Idiopathic if no etiology found (33% of cases). Treatment: topical steroids, cycloplegic agents, systemic investigation.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Uveitis", "Anterior Uveitis", "Inflammation", "CBME-Competency-009"],
    subjectCode: "OPHTHO",
    topicCode: "OPHTHO-MOD-UVEITIS-ANTERIOR",
    textbookRefs: ["Parson's Diseases of the Eye", "Duke-Elder's Ophthalmology"]
  },
  {
    type: "single-best-answer" as const,
    stem: "A 6-month-old presents with unilateral eye enlargement and hazy cornea. IOP elevated (30 mmHg). What is the diagnosis?",
    clinicalVignette: "Congenital glaucoma in infant.",
    options: [
      { id: "a", text: "Congenital glaucoma (angle dysgenesis, elevated IOP in infant)", isCorrect: true },
      { id: "b", text: "Hemangioma", isCorrect: false },
      { id: "c", text: "Cataract", isCorrect: false },
      { id: "d", text: "Microphthalmia", isCorrect: false }
    ],
    explanation: "Congenital glaucoma: triad of photophobia, excessive tearing, blepharospasm. Megalopsia (enlarged eye), hazy cornea from edema, elevated IOP. Diagnosis: gonioscopy shows abnormal angle development. Treatment: surgical (goniotomy, trabeculotomy). Early diagnosis/treatment essential to prevent blindness.",
    difficulty: "HARD" as const,
    bloomsLevel: "ANALYZE" as const,
    examTags: ["Pediatric Glaucoma", "Congenital Abnormality", "CBME-Competency-010"],
    subjectCode: "OPHTHO",
    topicCode: "OPHTHO-MOD-GLAUCOMA-CONGN",
    textbookRefs: ["Parson's Diseases of the Eye", "Pediatric Ophthalmology"]
  },
  {
    type: "single-best-answer" as const,
    stem: "A 12-year-old with gradual progressive myopia and fundus changes. Family history of retinal degeneration. What investigation should be done?",
    clinicalVignette: "Suspicious for inherited retinal degeneration.",
    options: [
      { id: "a", text: "Optical coherence tomography (OCT) and visual evoked potentials (VEP); genetic testing if suspicion high", isCorrect: true },
      { id: "b", text: "Refraction only", isCorrect: false },
      { id: "c", text: "Slit-lamp examination only", isCorrect: false },
      { id: "d", text: "Ultrasonography only", isCorrect: false }
    ],
    explanation: "Progressive myopia + family history suggests inherited retinal disease (retinitis pigmentosa, cone-rod dystrophy). OCT shows structural changes; VEP assesses function; ERG (electroretinography) for rod/cone function. Genetic counseling important. Night vision loss precedes peripheral vision.",
    difficulty: "HARD" as const,
    bloomsLevel: "ANALYZE" as const,
    examTags: ["Inherited Retinal Disease", "Progressive Vision Loss", "Genetics", "CBME-Competency-011"],
    subjectCode: "OPHTHO",
    topicCode: "OPHTHO-MOD-RETINA-INHERITED",
    textbookRefs: ["Parson's Diseases of the Eye", "Retinal Genetics references"]
  },
  {
    type: "single-best-answer" as const,
    stem: "A 50-year-old with diabetes presents with sudden reduced vision and edema around macula. What is the diagnosis?",
    clinicalVignette: "Diabetic macular edema (DME) affecting central vision.",
    options: [
      { id: "a", text: "Diabetic macular edema (fluid accumulation in macula)", isCorrect: true },
      { id: "b", text: "Posterior vitreous detachment", isCorrect: false },
      { id: "c", text: "Central serous retinopathy", isCorrect: false },
      { id: "d", text: "Cataract", isCorrect: false }
    ],
    explanation: "DME: increased vascular permeability → fluid in macula. OCT shows thickening/cystoid spaces. Most common cause of vision loss in diabetes. Treatment: tight glycemic/blood pressure control, anti-VEGF intravitreal injections, laser photocoagulation if exudates threaten center.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Diabetic Retinopathy", "Macular Disease", "Vision Loss", "CBME-Competency-012"],
    subjectCode: "OPHTHO",
    topicCode: "OPHTHO-MOD-RETINA-DME",
    textbookRefs: ["Parson's Diseases of the Eye", "Endocrinology-Ophthalmology"]
  },
  {
    type: "single-best-answer" as const,
    stem: "A 65-year-old with sudden onset visual field defect (homonymous hemianopia) and headache. MRI brain ordered. What is the likely diagnosis?",
    clinicalVignette: "Posterior circulation stroke affecting visual pathways.",
    options: [
      { id: "a", text: "Posterior circulation stroke (occipital/parietal lobe affecting optic radiations)", isCorrect: true },
      { id: "b", text: "Retinal migraine", isCorrect: false },
      { id: "c", text: "Glaucoma", isCorrect: false },
      { id: "d", text: "Cataract", isCorrect: false }
    ],
    explanation: "Homonymous hemianopia indicates post-chiasmal lesion (optic tract, LGN, optic radiations, occipital cortex). Acute onset with headache suggests stroke. Posterior circulation stroke (PCA distribution) affects occipital lobe. MRI/CT urgently needed. Visual field deficit borders mid-line exactly.",
    difficulty: "HARD" as const,
    bloomsLevel: "ANALYZE" as const,
    examTags: ["Neuro-ophthalmology", "Stroke", "Visual Fields", "CBME-Competency-013"],
    subjectCode: "OPHTHO",
    topicCode: "OPHTHO-MOD-NEURO-STROKE",
    textbookRefs: ["Parson's Diseases of the Eye", "Neuroimaging references"]
  },
  {
    type: "single-best-answer" as const,
    stem: "A 40-year-old presents with painless gradual vision loss and temporal optic disc pallor. Visual field shows generalized depression. IOP normal. What is the diagnosis?",
    clinicalVignette: "Non-glaucomatous optic neuropathy.",
    options: [
      { id: "a", text: "Optic atrophy from chronic optic nerve disease (MS, tumor compression, nutritional deficiency)", isCorrect: true },
      { id: "b", text: "Acute optic neuritis", isCorrect: false },
      { id: "c", text: "Glaucoma", isCorrect: false },
      { id: "d", text: "Cataract", isCorrect: false }
    ],
    explanation: "Optic atrophy: segmental or generalized disc pallor from prior optic nerve damage. Painless vision loss. Causes: optic neuritis, compression (tumor, aneurysm), ischemia, toxic (methanol, ethambutol), nutritional (B12, thiamine), demyelination (MS). Normal IOP excludes glaucoma.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Optic Neuropathy", "Neuro-ophthalmology", "Vision Loss", "CBME-Competency-014"],
    subjectCode: "OPHTHO",
    topicCode: "OPHTHO-MOD-NEURO-ATROPHY",
    textbookRefs: ["Parson's Diseases of the Eye", "Duke-Elder's Neuro-ophthalmology"]
  },
  {
    type: "single-best-answer" as const,
    stem: "A 20-year-old female presents with red eye, photophobia, and decreased vision. Slit-lamp shows granulomatous inflammation (mutton-fat KPs) and iris nodules. What is the diagnosis?",
    clinicalVignette: "Granulomatous uveitis investigation.",
    options: [
      { id: "a", text: "Sarcoidosis (systemic granulomatous disease, bilateral uveitis)", isCorrect: true },
      { id: "b", text: "Tuberculosis", isCorrect: false },
      { id: "c", text: "Acute bacterial infection", isCorrect: false },
      { id: "d", text: "Viral keratitis", isCorrect: false }
    ],
    explanation: "Sarcoidosis: granulomatous uveitis, mutton-fat KPs (granulomatous), iris nodules, periphlebitis. Systemic manifestations: hilar lymphadenopathy, pulmonary involvement, hypercalcemia. ACE level, chest X-ray helpful. Treatment: systemic steroids. Bilateral pattern typical.",
    difficulty: "HARD" as const,
    bloomsLevel: "ANALYZE" as const,
    examTags: ["Uveitis", "Systemic Disease", "Granulomatous Inflammation", "CBME-Competency-015"],
    subjectCode: "OPHTHO",
    topicCode: "OPHTHO-MOD-UVEITIS-SYSTEMIC",
    textbookRefs: ["Parson's Diseases of the Eye", "Internal Medicine-Ophthalmology"]
  }
];
