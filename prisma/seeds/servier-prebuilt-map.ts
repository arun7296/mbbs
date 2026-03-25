/**
 * Pre-built Servier Medical Art image mappings for MBBS topics.
 * Uses Wikimedia Commons Special:FilePath URLs (auto-redirect to CDN).
 * All images CC-BY 4.0 by Servier Medical Art.
 *
 * Covers 18 subjects with 300+ topic mappings.
 */

function img(filename: string, title: string, description: string) {
  return {
    imageUrl: `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(filename)}?width=800`,
    title,
    description,
    attribution: "Servier Medical Art by Servier, CC-BY 4.0, via Wikimedia Commons",
    license: "CC_BY" as const,
  };
}

export const servierPrebuiltMap: Record<string, Array<ReturnType<typeof img>>> = {
  // ========== ANATOMY (AN) - 10 MODULES ==========
  // AN-MOD-01: Upper Limb (20 topics)
  "AN-MOD-01-TOP-01": [img("Servier_Medical_Art_-_Shoulder_joint.svg", "Shoulder Joint", "Anatomy of the shoulder joint, rotator cuff, and glenohumeral articulation")],
  "AN-MOD-01-TOP-02": [img("Servier_Medical_Art_-_Shoulder_joint.svg", "Pectoral Region", "Surface anatomy and muscular structures of pectoral region")],
  "AN-MOD-01-TOP-03": [img("Servier_Medical_Art_-_Shoulder_joint.svg", "Axilla", "Axillary artery, nerves, and lymph nodes")],
  "AN-MOD-01-TOP-04": [img("Servier_Medical_Art_-_Shoulder_joint.svg", "Brachial Plexus", "Origin and distribution of brachial plexus")],
  "AN-MOD-01-TOP-05": [img("Servier_Medical_Art_-_Shoulder_joint.svg", "Arm Muscles", "Anterior and posterior compartment muscles of arm")],
  "AN-MOD-01-TOP-06": [img("Servier_Medical_Art_-_Shoulder_joint.svg", "Elbow Joint", "Elbow articulation and surrounding anatomy")],
  "AN-MOD-01-TOP-07": [img("Servier_Medical_Art_-_Shoulder_joint.svg", "Forearm Anatomy", "Pronator and supinator muscles of forearm")],
  "AN-MOD-01-TOP-08": [img("Servier_Medical_Art_-_Shoulder_joint.svg", "Wrist Joint", "Wrist anatomy and carpal bones")],
  "AN-MOD-01-TOP-09": [img("Servier_Medical_Art_-_Shoulder_joint.svg", "Hand Anatomy", "Intrinsic muscles and nerves of hand")],
  "AN-MOD-01-TOP-10": [img("Servier_Medical_Art_-_Shoulder_joint.svg", "Vascular Supply", "Arterial supply and venous drainage of upper limb")],
  "AN-MOD-01-TOP-11": [img("Servier_Medical_Art_-_Shoulder_joint.svg", "Nerve Supply", "Peripheral nerves and their distributions")],
  "AN-MOD-01-TOP-12": [img("Servier_Medical_Art_-_Shoulder_joint.svg", "Surface Landmarks", "Anatomical landmarks and palpable structures")],
  "AN-MOD-01-TOP-13": [img("Servier_Medical_Art_-_Shoulder_joint.svg", "Lymphatic Drainage", "Lymph nodes and drainage patterns")],
  "AN-MOD-01-TOP-14": [img("Servier_Medical_Art_-_Shoulder_joint.svg", "Scapula", "Scapular anatomy and movements")],
  "AN-MOD-01-TOP-15": [img("Servier_Medical_Art_-_Shoulder_joint.svg", "Humerus", "Humeral anatomy and articulations")],
  "AN-MOD-01-TOP-16": [img("Servier_Medical_Art_-_Shoulder_joint.svg", "Radius and Ulna", "Forearm bones and interosseous membrane")],
  "AN-MOD-01-TOP-17": [img("Servier_Medical_Art_-_Shoulder_joint.svg", "Carpal Bones", "Carpal arrangement and ossification")],
  "AN-MOD-01-TOP-18": [img("Servier_Medical_Art_-_Shoulder_joint.svg", "Digital Anatomy", "Finger bones and joints")],
  "AN-MOD-01-TOP-19": [img("Servier_Medical_Art_-_Shoulder_joint.svg", "Fascial Planes", "Deep fascia and compartments")],
  "AN-MOD-01-TOP-20": [img("Servier_Medical_Art_-_Shoulder_joint.svg", "Clinical Anatomy", "Clinical correlations and injuries")],

  // AN-MOD-02: Lower Limb (20 topics)
  "AN-MOD-02-TOP-01": [img("Servier_Medical_Art_-_Hip_joint.svg", "Hip Joint", "Anatomy of hip joint and articulation")],
  "AN-MOD-02-TOP-02": [img("Servier_Medical_Art_-_Hip_joint.svg", "Pelvic Girdle", "Pelvic bones and articulations")],
  "AN-MOD-02-TOP-03": [img("Servier_Medical_Art_-_Hip_joint.svg", "Gluteal Region", "Gluteal muscles and sciatic nerve")],
  "AN-MOD-02-TOP-04": [img("Servier_Medical_Art_-_Hip_joint.svg", "Femur", "Femoral anatomy and articulations")],
  "AN-MOD-02-TOP-05": [img("Servier_Medical_Art_-_Knee_joint.svg", "Knee Joint", "Complex knee anatomy and stability")],
  "AN-MOD-02-TOP-06": [img("Servier_Medical_Art_-_Knee_joint.svg", "Tibia and Fibula", "Leg bones and interosseous membrane")],
  "AN-MOD-02-TOP-07": [img("Servier_Medical_Art_-_Knee_joint.svg", "Ankle Joint", "Ankle articulation and ligaments")],
  "AN-MOD-02-TOP-08": [img("Servier_Medical_Art_-_Knee_joint.svg", "Foot Skeleton", "Tarsal bones and arches")],
  "AN-MOD-02-TOP-09": [img("Servier_Medical_Art_-_Knee_joint.svg", "Thigh Muscles", "Anterior and posterior compartments")],
  "AN-MOD-02-TOP-10": [img("Servier_Medical_Art_-_Knee_joint.svg", "Leg Muscles", "Anterior, lateral, and posterior compartments")],
  "AN-MOD-02-TOP-11": [img("Servier_Medical_Art_-_Knee_joint.svg", "Foot Muscles", "Intrinsic muscles and plantar fascia")],
  "AN-MOD-02-TOP-12": [img("Servier_Medical_Art_-_Knee_joint.svg", "Femoral Triangle", "Contents and boundaries")],
  "AN-MOD-02-TOP-13": [img("Servier_Medical_Art_-_Knee_joint.svg", "Popliteal Fossa", "Contents and neurovascular structures")],
  "AN-MOD-02-TOP-14": [img("Servier_Medical_Art_-_Knee_joint.svg", "Vascular Supply", "Arterial supply and venous drainage")],
  "AN-MOD-02-TOP-15": [img("Servier_Medical_Art_-_Knee_joint.svg", "Nerve Supply", "Peripheral nerves and distributions")],
  "AN-MOD-02-TOP-16": [img("Servier_Medical_Art_-_Knee_joint.svg", "Lymphatic Drainage", "Lymph nodes and drainage")],
  "AN-MOD-02-TOP-17": [img("Servier_Medical_Art_-_Knee_joint.svg", "Surface Anatomy", "Palpable landmarks")],
  "AN-MOD-02-TOP-18": [img("Servier_Medical_Art_-_Knee_joint.svg", "Fascial Compartments", "Deep fascia and compartments")],
  "AN-MOD-02-TOP-19": [img("Servier_Medical_Art_-_Knee_joint.svg", "Cutaneous Innervation", "Dermatomes and cutaneous nerves")],
  "AN-MOD-02-TOP-20": [img("Servier_Medical_Art_-_Knee_joint.svg", "Clinical Correlations", "Common injuries and pathology")],

  // AN-MOD-03: Thorax (18 topics)
  "AN-MOD-03-TOP-01": [img("Servier_Medical_Art_-_Heart_anterior_view.svg", "Heart Anatomy", "Gross anatomy of the heart")],
  "AN-MOD-03-TOP-02": [img("Servier_Medical_Art_-_Heart_internal_anatomy.svg", "Cardiac Chambers", "Chambers and internal anatomy")],
  "AN-MOD-03-TOP-03": [img("Servier_Medical_Art_-_Heart_internal_anatomy.svg", "Valves", "Cardiac valves and physiology")],
  "AN-MOD-03-TOP-04": [img("Servier_Medical_Art_-_Heart_anterior_view.svg", "Coronary Circulation", "Coronary arteries and venous drainage")],
  "AN-MOD-03-TOP-05": [img("Servier_Medical_Art_-_Lungs_anterior_view.svg", "Lung Anatomy", "Gross structure of lungs")],
  "AN-MOD-03-TOP-06": [img("Servier_Medical_Art_-_Alveolus.svg", "Alveolar Structure", "Alveolar anatomy and respiratory epithelium")],
  "AN-MOD-03-TOP-07": [img("Servier_Medical_Art_-_Lungs_anterior_view.svg", "Bronchial Tree", "Bronchioles and branchings")],
  "AN-MOD-03-TOP-08": [img("Servier_Medical_Art_-_Lungs_anterior_view.svg", "Pleura", "Visceral and parietal pleura")],
  "AN-MOD-03-TOP-09": [img("Servier_Medical_Art_-_Heart_anterior_view.svg", "Mediastinum", "Mediastinal contents and divisions")],
  "AN-MOD-03-TOP-10": [img("Servier_Medical_Art_-_Heart_anterior_view.svg", "Esophagus", "Thoracic esophagus anatomy")],
  "AN-MOD-03-TOP-11": [img("Servier_Medical_Art_-_Heart_anterior_view.svg", "Aorta", "Thoracic aorta and branches")],
  "AN-MOD-03-TOP-12": [img("Servier_Medical_Art_-_Heart_anterior_view.svg", "Vena Cava", "Superior and inferior vena cava")],
  "AN-MOD-03-TOP-13": [img("Servier_Medical_Art_-_Heart_anterior_view.svg", "Azygos System", "Azygos venous system")],
  "AN-MOD-03-TOP-14": [img("Servier_Medical_Art_-_Heart_anterior_view.svg", "Nerves", "Vagus, sympathetic, phrenic nerves")],
  "AN-MOD-03-TOP-15": [img("Servier_Medical_Art_-_Heart_anterior_view.svg", "Lymphatic Drainage", "Thoracic lymph drainage")],
  "AN-MOD-03-TOP-16": [img("Servier_Medical_Art_-_Heart_anterior_view.svg", "Rib Cage", "Ribs, sternum, and spaces")],
  "AN-MOD-03-TOP-17": [img("Servier_Medical_Art_-_Heart_anterior_view.svg", "Intercostal Spaces", "Neurovascular bundles")],
  "AN-MOD-03-TOP-18": [img("Servier_Medical_Art_-_Heart_anterior_view.svg", "Clinical Anatomy", "Clinical correlations and procedures")],

  // AN-MOD-04: Abdomen (20 topics)
  "AN-MOD-04-TOP-01": [img("Servier_Medical_Art_-_Liver.svg", "Liver Anatomy", "Gross anatomy and lobes")],
  "AN-MOD-04-TOP-02": [img("Servier_Medical_Art_-_Liver.svg", "Hepatic Blood Supply", "Hepatic artery and portal vein")],
  "AN-MOD-04-TOP-03": [img("Servier_Medical_Art_-_Stomach.svg", "Stomach", "Gastric anatomy and structure")],
  "AN-MOD-04-TOP-04": [img("Servier_Medical_Art_-_Digestive_system.svg", "Small Intestine", "Duodenum, jejunum, ileum")],
  "AN-MOD-04-TOP-05": [img("Servier_Medical_Art_-_Intestine_cross_section.svg", "Intestinal Structure", "Histology and mucosal structure")],
  "AN-MOD-04-TOP-06": [img("Servier_Medical_Art_-_Digestive_system.svg", "Large Intestine", "Colon and rectum anatomy")],
  "AN-MOD-04-TOP-07": [img("Servier_Medical_Art_-_Pancreas.svg", "Pancreas", "Pancreatic anatomy and relations")],
  "AN-MOD-04-TOP-08": [img("Servier_Medical_Art_-_Kidney_cross_section.svg", "Kidney Anatomy", "Renal structure and hilum")],
  "AN-MOD-04-TOP-09": [img("Servier_Medical_Art_-_Spleen.svg", "Spleen", "Splenic anatomy and relations")],
  "AN-MOD-04-TOP-10": [img("Servier_Medical_Art_-_Liver.svg", "Biliary System", "Bile ducts and gallbladder")],
  "AN-MOD-04-TOP-11": [img("Servier_Medical_Art_-_Digestive_system.svg", "Mesentery", "Peritoneal attachments")],
  "AN-MOD-04-TOP-12": [img("Servier_Medical_Art_-_Liver.svg", "Peritoneum", "Peritoneal cavity and derivatives")],
  "AN-MOD-04-TOP-13": [img("Servier_Medical_Art_-_Liver.svg", "Arterial Supply", "Abdominal aorta and branches")],
  "AN-MOD-04-TOP-14": [img("Servier_Medical_Art_-_Liver.svg", "Venous Drainage", "Portal vein and hepatic veins")],
  "AN-MOD-04-TOP-15": [img("Servier_Medical_Art_-_Liver.svg", "Nerve Supply", "Autonomic innervation")],
  "AN-MOD-04-TOP-16": [img("Servier_Medical_Art_-_Liver.svg", "Lymphatic Drainage", "Abdominal lymph nodes")],
  "AN-MOD-04-TOP-17": [img("Servier_Medical_Art_-_Liver.svg", "Abdominal Wall", "Muscles and fascia")],
  "AN-MOD-04-TOP-18": [img("Servier_Medical_Art_-_Liver.svg", "Inguinal Region", "Inguinal canal and hernia")],
  "AN-MOD-04-TOP-19": [img("Servier_Medical_Art_-_Liver.svg", "Surface Anatomy", "Abdominal landmarks")],
  "AN-MOD-04-TOP-20": [img("Servier_Medical_Art_-_Liver.svg", "Clinical Correlations", "Surgical approaches and pathology")],

  // AN-MOD-05: Pelvis & Perineum (16 topics)
  "AN-MOD-05-TOP-01": [img("Servier_Medical_Art_-_Uterus.svg", "Uterus", "Female reproductive anatomy")],
  "AN-MOD-05-TOP-02": [img("Servier_Medical_Art_-_Ovary.svg", "Ovary", "Ovarian anatomy and attachments")],
  "AN-MOD-05-TOP-03": [img("Servier_Medical_Art_-_Uterus.svg", "Fallopian Tube", "Tubal anatomy and relations")],
  "AN-MOD-05-TOP-04": [img("Servier_Medical_Art_-_Prostate.svg", "Prostate", "Male reproductive anatomy")],
  "AN-MOD-05-TOP-05": [img("Servier_Medical_Art_-_Prostate.svg", "Testis", "Testicular anatomy and coverings")],
  "AN-MOD-05-TOP-06": [img("Servier_Medical_Art_-_Prostate.svg", "Penis", "Penile anatomy and structure")],
  "AN-MOD-05-TOP-07": [img("Servier_Medical_Art_-_Uterus.svg", "Pelvic Peritoneum", "Peritoneal folds and pouches")],
  "AN-MOD-05-TOP-08": [img("Servier_Medical_Art_-_Uterus.svg", "Pelvic Diaphragm", "Levator ani and coccygeus")],
  "AN-MOD-05-TOP-09": [img("Servier_Medical_Art_-_Uterus.svg", "Urinary Bladder", "Bladder anatomy and relations")],
  "AN-MOD-05-TOP-10": [img("Servier_Medical_Art_-_Kidney_cross_section.svg", "Ureters", "Ureteral course and relations")],
  "AN-MOD-05-TOP-11": [img("Servier_Medical_Art_-_Prostate.svg", "Urethra", "Male and female urethra")],
  "AN-MOD-05-TOP-12": [img("Servier_Medical_Art_-_Uterus.svg", "Perineal Anatomy", "Perineal body and spaces")],
  "AN-MOD-05-TOP-13": [img("Servier_Medical_Art_-_Uterus.svg", "Vascular Supply", "Pelvic vessels")],
  "AN-MOD-05-TOP-14": [img("Servier_Medical_Art_-_Uterus.svg", "Nerve Supply", "Pelvic and pudendal nerves")],
  "AN-MOD-05-TOP-15": [img("Servier_Medical_Art_-_Uterus.svg", "Lymphatic Drainage", "Pelvic lymph nodes")],
  "AN-MOD-05-TOP-16": [img("Servier_Medical_Art_-_Uterus.svg", "Clinical Anatomy", "Pelvic measurements and obstetrics")],

  // AN-MOD-06: Head & Neck (20 topics)
  "AN-MOD-06-TOP-01": [img("Servier_Medical_Art_-_Eye_anatomy.svg", "Eye Structure", "Gross anatomy of the eye")],
  "AN-MOD-06-TOP-02": [img("Servier_Medical_Art_-_Eye_anatomy.svg", "Retina", "Retinal layers and blood supply")],
  "AN-MOD-06-TOP-03": [img("Servier_Medical_Art_-_Ear_anatomy.svg", "Ear Anatomy", "External, middle, and internal ear")],
  "AN-MOD-06-TOP-04": [img("Servier_Medical_Art_-_Ear_anatomy.svg", "Cochlea", "Cochlear structure and organ of Corti")],
  "AN-MOD-06-TOP-05": [img("Servier_Medical_Art_-_Thyroid_gland.svg", "Thyroid", "Thyroid gland anatomy")],
  "AN-MOD-06-TOP-06": [img("Servier_Medical_Art_-_Thyroid_gland.svg", "Parathyroid", "Parathyroid glands")],
  "AN-MOD-06-TOP-07": [img("Servier_Medical_Art_-_Thyroid_gland.svg", "Larynx", "Laryngeal skeleton and mechanisms")],
  "AN-MOD-06-TOP-08": [img("Servier_Medical_Art_-_Thyroid_gland.svg", "Pharynx", "Pharyngeal anatomy and spaces")],
  "AN-MOD-06-TOP-09": [img("Servier_Medical_Art_-_Thyroid_gland.svg", "Salivary Glands", "Parotid, submandibular, sublingual")],
  "AN-MOD-06-TOP-10": [img("Servier_Medical_Art_-_Thyroid_gland.svg", "Tongue", "Tongue muscles and innervation")],
  "AN-MOD-06-TOP-11": [img("Servier_Medical_Art_-_Thyroid_gland.svg", "Teeth", "Dental anatomy and eruption")],
  "AN-MOD-06-TOP-12": [img("Servier_Medical_Art_-_Thyroid_gland.svg", "Temporomandibular Joint", "TMJ anatomy and movements")],
  "AN-MOD-06-TOP-13": [img("Servier_Medical_Art_-_Thyroid_gland.svg", "Muscles of Mastication", "Motor innervation and action")],
  "AN-MOD-06-TOP-14": [img("Servier_Medical_Art_-_Thyroid_gland.svg", "Facial Nerve", "CN VII anatomy and branches")],
  "AN-MOD-06-TOP-15": [img("Servier_Medical_Art_-_Thyroid_gland.svg", "Trigeminal Nerve", "CN V anatomy and divisions")],
  "AN-MOD-06-TOP-16": [img("Servier_Medical_Art_-_Thyroid_gland.svg", "Vascular Supply", "Carotid and subclavian arteries")],
  "AN-MOD-06-TOP-17": [img("Servier_Medical_Art_-_Thyroid_gland.svg", "Lymphatic Drainage", "Cervical lymph nodes")],
  "AN-MOD-06-TOP-18": [img("Servier_Medical_Art_-_Thyroid_gland.svg", "Cervical Fascia", "Fascial layers and spaces")],
  "AN-MOD-06-TOP-19": [img("Servier_Medical_Art_-_Thyroid_gland.svg", "Cranial Nerves", "CN anatomy overview")],
  "AN-MOD-06-TOP-20": [img("Servier_Medical_Art_-_Thyroid_gland.svg", "Clinical Anatomy", "Airway management and procedures")],

  // AN-MOD-07: Neuroanatomy (18 topics)
  "AN-MOD-07-TOP-01": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Brain Lobes", "Cerebral cortex lobes and sulci")],
  "AN-MOD-07-TOP-02": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Motor Cortex", "Primary motor area and Brodmann areas")],
  "AN-MOD-07-TOP-03": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Sensory Cortex", "Primary sensory areas")],
  "AN-MOD-07-TOP-04": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Language Areas", "Wernicke's and Broca's areas")],
  "AN-MOD-07-TOP-05": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Thalamus", "Thalamic nuclei and relations")],
  "AN-MOD-07-TOP-06": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Hypothalamus", "Hypothalamic anatomy and nuclei")],
  "AN-MOD-07-TOP-07": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Limbic System", "Limbic structures and circuits")],
  "AN-MOD-07-TOP-08": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Cerebellum", "Cerebellar anatomy and lobes")],
  "AN-MOD-07-TOP-09": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Brainstem", "Midbrain, pons, medulla")],
  "AN-MOD-07-TOP-10": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Spinal Cord", "Spinal cord anatomy and segments")],
  "AN-MOD-07-TOP-11": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Meninges", "Dura, arachnoid, pia mater")],
  "AN-MOD-07-TOP-12": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Cerebrospinal Fluid", "CSF circulation and ventricles")],
  "AN-MOD-07-TOP-13": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Cerebral Circulation", "Circle of Willis and arteries")],
  "AN-MOD-07-TOP-14": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Cranial Nerves", "All 12 CN nuclei and pathways")],
  "AN-MOD-07-TOP-15": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Spinal Nerves", "Nerve roots and plexuses")],
  "AN-MOD-07-TOP-16": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "White Matter Tracts", "Major ascending/descending pathways")],
  "AN-MOD-07-TOP-17": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Gray Matter Organization", "Nuclei and laminae")],
  "AN-MOD-07-TOP-18": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Clinical Anatomy", "Stroke territories and lesions")],

  // AN-MOD-08: General Anatomy (10 topics)
  "AN-MOD-08-TOP-01": [img("Servier_Medical_Art_-_Bone_cross_section.svg", "Bone Structure", "Cortical and cancellous bone")],
  "AN-MOD-08-TOP-02": [img("Servier_Medical_Art_-_Bone_cross_section.svg", "Ossification", "Endochondral and intramembranous")],
  "AN-MOD-08-TOP-03": [img("Servier_Medical_Art_-_Skeletal_muscle.svg", "Skeletal Muscle", "Muscle fiber organization")],
  "AN-MOD-08-TOP-04": [img("Servier_Medical_Art_-_Skeletal_muscle.svg", "Muscle Contraction", "Sliding filament mechanism")],
  "AN-MOD-08-TOP-05": [img("Servier_Medical_Art_-_Lymph_node.svg", "Lymph Node", "Lymph node structure")],
  "AN-MOD-08-TOP-06": [img("Servier_Medical_Art_-_Lymph_node.svg", "Lymphatic System", "Lymphatic vessels and circulation")],
  "AN-MOD-08-TOP-07": [img("Servier_Medical_Art_-_Lymph_node.svg", "Blood Vessel Structure", "Artery, capillary, vein histology")],
  "AN-MOD-08-TOP-08": [img("Servier_Medical_Art_-_Lymph_node.svg", "Joint Anatomy", "Fibrous, cartilaginous, synovial joints")],
  "AN-MOD-08-TOP-09": [img("Servier_Medical_Art_-_Lymph_node.svg", "Vertebral Column", "Vertebral structure and curvatures")],
  "AN-MOD-08-TOP-10": [img("Servier_Medical_Art_-_Vertebral_column.svg", "Intervertebral Disc", "Disc structure and pathology")],

  // AN-MOD-09: Histology (14 topics)
  "AN-MOD-09-TOP-01": [img("Servier_Medical_Art_-_Skeletal_muscle.svg", "Epithelial Tissue", "Simple and stratified epithelia")],
  "AN-MOD-09-TOP-02": [img("Servier_Medical_Art_-_Skeletal_muscle.svg", "Connective Tissue", "Collagen and elastic fibers")],
  "AN-MOD-09-TOP-03": [img("Servier_Medical_Art_-_Skeletal_muscle.svg", "Muscle Tissue", "Skeletal, cardiac, smooth muscle")],
  "AN-MOD-09-TOP-04": [img("Servier_Medical_Art_-_Neuron.svg", "Nervous Tissue", "Neurons and glia")],
  "AN-MOD-09-TOP-05": [img("Servier_Medical_Art_-_Skin_cross_section.svg", "Skin Histology", "Epidermis and dermis layers")],
  "AN-MOD-09-TOP-06": [img("Servier_Medical_Art_-_Skeletal_muscle.svg", "Hair Follicle", "Hair structure and growth")],
  "AN-MOD-09-TOP-07": [img("Servier_Medical_Art_-_Bone_cross_section.svg", "Bone Histology", "Haversian and Volkmann systems")],
  "AN-MOD-09-TOP-08": [img("Servier_Medical_Art_-_Lymph_node.svg", "Blood Cell Development", "Hematopoiesis")],
  "AN-MOD-09-TOP-09": [img("Servier_Medical_Art_-_Heart_anterior_view.svg", "Cardiac Histology", "Myocardial structure and intercalated discs")],
  "AN-MOD-09-TOP-10": [img("Servier_Medical_Art_-_Lungs_anterior_view.svg", "Lung Histology", "Alveolar wall and respiratory epithelium")],
  "AN-MOD-09-TOP-11": [img("Servier_Medical_Art_-_Liver.svg", "Liver Histology", "Hepatic lobule and sinusoids")],
  "AN-MOD-09-TOP-12": [img("Servier_Medical_Art_-_Kidney_cross_section.svg", "Kidney Histology", "Glomerulus and tubular epithelium")],
  "AN-MOD-09-TOP-13": [img("Servier_Medical_Art_-_Stomach.svg", "GI Histology", "Gastric glands and intestinal crypts")],
  "AN-MOD-09-TOP-14": [img("Servier_Medical_Art_-_Eye_anatomy.svg", "Eye Histology", "Retinal layers and photoreceptors")],

  // AN-MOD-10: Embryology (16 topics)
  "AN-MOD-10-TOP-01": [img("Servier_Medical_Art_-_Animal_cell.svg", "Cell Division", "Mitosis and meiosis")],
  "AN-MOD-10-TOP-02": [img("Servier_Medical_Art_-_Chromosome.svg", "Gametogenesis", "Spermatogenesis and oogenesis")],
  "AN-MOD-10-TOP-03": [img("Servier_Medical_Art_-_Chromosome.svg", "Fertilization", "Sperm-egg interaction and fusion")],
  "AN-MOD-10-TOP-04": [img("Servier_Medical_Art_-_Animal_cell.svg", "Cleavage", "Early embryonic divisions")],
  "AN-MOD-10-TOP-05": [img("Servier_Medical_Art_-_Animal_cell.svg", "Implantation", "Blastocyst implantation")],
  "AN-MOD-10-TOP-06": [img("Servier_Medical_Art_-_Animal_cell.svg", "Gastrulation", "Germ layer formation")],
  "AN-MOD-10-TOP-07": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Neurulation", "Neural tube formation")],
  "AN-MOD-10-TOP-08": [img("Servier_Medical_Art_-_Heart_anterior_view.svg", "Cardiovascular Development", "Heart and vessel formation")],
  "AN-MOD-10-TOP-09": [img("Servier_Medical_Art_-_Lungs_anterior_view.svg", "Respiratory Development", "Lung bud formation")],
  "AN-MOD-10-TOP-10": [img("Servier_Medical_Art_-_Digestive_system.svg", "GI Development", "Foregut, midgut, hindgut")],
  "AN-MOD-10-TOP-11": [img("Servier_Medical_Art_-_Urinary_system.svg", "Urogenital Development", "Kidney and reproductive system")],
  "AN-MOD-10-TOP-12": [img("Servier_Medical_Art_-_Skeleton.svg", "Skeletal Development", "Bone and cartilage formation")],
  "AN-MOD-10-TOP-13": [img("Servier_Medical_Art_-_Muscle.svg", "Muscular Development", "Myotome formation")],
  "AN-MOD-10-TOP-14": [img("Servier_Medical_Art_-_Chromosome.svg", "Fetal Circulation", "Shunts and changes at birth")],
  "AN-MOD-10-TOP-15": [img("Servier_Medical_Art_-_Animal_cell.svg", "Congenital Anomalies", "Birth defects and teratology")],
  "AN-MOD-10-TOP-16": [img("Servier_Medical_Art_-_Animal_cell.svg", "Twin Development", "Monozygotic and dizygotic twins")],

  // ========== PHYSIOLOGY (PY) - 10 MODULES ==========
  // PY-MOD-01: General Physiology (16 topics)
  "PY-MOD-01-TOP-01": [img("Servier_Medical_Art_-_Cell_membrane.svg", "Cell Membrane", "Lipid bilayer and protein structure")],
  "PY-MOD-01-TOP-02": [img("Servier_Medical_Art_-_Cell_membrane.svg", "Transport Mechanisms", "Osmosis, diffusion, active transport")],
  "PY-MOD-01-TOP-03": [img("Servier_Medical_Art_-_Mitochondrion.svg", "Cellular Energy", "ATP production and metabolism")],
  "PY-MOD-01-TOP-04": [img("Servier_Medical_Art_-_Mitochondrion.svg", "Aerobic Metabolism", "Krebs cycle and electron transport")],
  "PY-MOD-01-TOP-05": [img("Servier_Medical_Art_-_Neuron.svg", "Action Potential", "Resting and action potentials")],
  "PY-MOD-01-TOP-06": [img("Servier_Medical_Art_-_Neuron.svg", "Resting Membrane Potential", "Ion distribution and equilibrium")],
  "PY-MOD-01-TOP-07": [img("Servier_Medical_Art_-_Neuron.svg", "Synaptic Transmission", "Neurotransmitter release and receptors")],
  "PY-MOD-01-TOP-08": [img("Servier_Medical_Art_-_Neuron.svg", "Nerve Conduction", "Conduction velocity and myelination")],
  "PY-MOD-01-TOP-09": [img("Servier_Medical_Art_-_Neuron.svg", "Muscle Contraction", "Sliding filament and motor units")],
  "PY-MOD-01-TOP-10": [img("Servier_Medical_Art_-_Neuron.svg", "Neuromuscular Junction", "NMJ structure and transmission")],
  "PY-MOD-01-TOP-11": [img("Servier_Medical_Art_-_Neuron.svg", "Reflex Arc", "Monosynaptic and polysynaptic reflexes")],
  "PY-MOD-01-TOP-12": [img("Servier_Medical_Art_-_Animal_cell.svg", "Cell Signaling", "Second messengers and cascades")],
  "PY-MOD-01-TOP-13": [img("Servier_Medical_Art_-_Animal_cell.svg", "Gene Expression", "Transcription and translation")],
  "PY-MOD-01-TOP-14": [img("Servier_Medical_Art_-_DNA_double_helix.svg", "DNA Replication", "DNA synthesis and proofreading")],
  "PY-MOD-01-TOP-15": [img("Servier_Medical_Art_-_Chromosome.svg", "Cell Division", "Mitosis and cytokinesis")],
  "PY-MOD-01-TOP-16": [img("Servier_Medical_Art_-_Animal_cell.svg", "Apoptosis", "Programmed cell death")],

  // PY-MOD-02: Blood & Hematology (14 topics)
  "PY-MOD-02-TOP-01": [img("Servier_Medical_Art_-_Red_blood_cell.svg", "RBC Physiology", "Structure and function")],
  "PY-MOD-02-TOP-02": [img("Servier_Medical_Art_-_Red_blood_cell.svg", "Hemoglobin", "Structure and oxygen binding")],
  "PY-MOD-02-TOP-03": [img("Servier_Medical_Art_-_Red_blood_cell.svg", "Oxygen Transport", "Oxygen-hemoglobin dissociation")],
  "PY-MOD-02-TOP-04": [img("Servier_Medical_Art_-_Red_blood_cell.svg", "RBC Lifespan", "Production and destruction")],
  "PY-MOD-02-TOP-05": [img("Servier_Medical_Art_-_White_blood_cell.svg", "WBC Types", "Granulocytes and agranulocytes")],
  "PY-MOD-02-TOP-06": [img("Servier_Medical_Art_-_White_blood_cell.svg", "Neutrophil", "Function and migration")],
  "PY-MOD-02-TOP-07": [img("Servier_Medical_Art_-_White_blood_cell.svg", "Lymphocyte", "T cell and B cell function")],
  "PY-MOD-02-TOP-08": [img("Servier_Medical_Art_-_White_blood_cell.svg", "Monocyte", "Macrophage function")],
  "PY-MOD-02-TOP-09": [img("Servier_Medical_Art_-_Platelet.svg", "Platelet Physiology", "Structure and function")],
  "PY-MOD-02-TOP-10": [img("Servier_Medical_Art_-_Platelet.svg", "Coagulation", "Hemostasis and clotting cascade")],
  "PY-MOD-02-TOP-11": [img("Servier_Medical_Art_-_Platelet.svg", "Fibrinolysis", "Clot dissolution")],
  "PY-MOD-02-TOP-12": [img("Servier_Medical_Art_-_Red_blood_cell.svg", "Blood Groups", "ABO and Rh systems")],
  "PY-MOD-02-TOP-13": [img("Servier_Medical_Art_-_Red_blood_cell.svg", "Plasma Proteins", "Albumin, globulins, fibrinogen")],
  "PY-MOD-02-TOP-14": [img("Servier_Medical_Art_-_Red_blood_cell.svg", "Blood Buffering", "pH control and buffers")],

  // PY-MOD-03: CVS Physiology (16 topics)
  "PY-MOD-03-TOP-01": [img("Servier_Medical_Art_-_Heart_anterior_view.svg", "Cardiac Action Potential", "Electrophysiology of heart")],
  "PY-MOD-03-TOP-02": [img("Servier_Medical_Art_-_Heart_anterior_view.svg", "ECG Basics", "EKG waves and intervals")],
  "PY-MOD-03-TOP-03": [img("Servier_Medical_Art_-_Heart_internal_anatomy.svg", "Cardiac Cycle", "Systole and diastole events")],
  "PY-MOD-03-TOP-04": [img("Servier_Medical_Art_-_Heart_internal_anatomy.svg", "Ventricular Function", "Pressure-volume relationships")],
  "PY-MOD-03-TOP-05": [img("Servier_Medical_Art_-_Heart_internal_anatomy.svg", "Stroke Volume", "Preload, afterload, contractility")],
  "PY-MOD-03-TOP-06": [img("Servier_Medical_Art_-_Heart_anterior_view.svg", "Cardiac Output", "CO = HR × SV")],
  "PY-MOD-03-TOP-07": [img("Servier_Medical_Art_-_Heart_anterior_view.svg", "Blood Pressure", "Systolic and diastolic pressure")],
  "PY-MOD-03-TOP-08": [img("Servier_Medical_Art_-_Heart_anterior_view.svg", "Vessel Structure", "Artery, capillary, vein mechanics")],
  "PY-MOD-03-TOP-09": [img("Servier_Medical_Art_-_Heart_anterior_view.svg", "Microcirculation", "Capillary exchange")],
  "PY-MOD-03-TOP-10": [img("Servier_Medical_Art_-_Heart_anterior_view.svg", "Vascular Autoregulation", "Metabolic and myogenic")],
  "PY-MOD-03-TOP-11": [img("Servier_Medical_Art_-_Heart_anterior_view.svg", "Lymphatic Return", "Fluid balance")],
  "PY-MOD-03-TOP-12": [img("Servier_Medical_Art_-_Heart_anterior_view.svg", "Nervous Control", "Sympathetic and parasympathetic")],
  "PY-MOD-03-TOP-13": [img("Servier_Medical_Art_-_Heart_anterior_view.svg", "Hormonal Control", "Catecholamines and renin-angiotensin")],
  "PY-MOD-03-TOP-14": [img("Servier_Medical_Art_-_Heart_anterior_view.svg", "Pulmonary Circulation", "Right heart and lung circulation")],
  "PY-MOD-03-TOP-15": [img("Servier_Medical_Art_-_Heart_anterior_view.svg", "Cerebral Circulation", "Brain blood flow autoregulation")],
  "PY-MOD-03-TOP-16": [img("Servier_Medical_Art_-_Heart_anterior_view.svg", "Coronary Circulation", "Coronary blood flow regulation")],

  // PY-MOD-04: Respiratory (14 topics)
  "PY-MOD-04-TOP-01": [img("Servier_Medical_Art_-_Lungs_anterior_view.svg", "Pulmonary Mechanics", "Inspiration and expiration")],
  "PY-MOD-04-TOP-02": [img("Servier_Medical_Art_-_Lungs_anterior_view.svg", "Lung Volumes", "FVC, FEV1, TLC measurements")],
  "PY-MOD-04-TOP-03": [img("Servier_Medical_Art_-_Alveolus.svg", "Gas Exchange", "Alveolar-capillary diffusion")],
  "PY-MOD-04-TOP-04": [img("Servier_Medical_Art_-_Alveolus.svg", "Ventilation Perfusion", "V/Q matching and shunting")],
  "PY-MOD-04-TOP-05": [img("Servier_Medical_Art_-_Lungs_anterior_view.svg", "Blood Gas Transport", "Oxygen and CO2 carriage")],
  "PY-MOD-04-TOP-06": [img("Servier_Medical_Art_-_Lungs_anterior_view.svg", "Respiration Control", "Chemoreceptors and centers")],
  "PY-MOD-04-TOP-07": [img("Servier_Medical_Art_-_Lungs_anterior_view.svg", "Acid-Base Balance", "Respiratory contribution")],
  "PY-MOD-04-TOP-08": [img("Servier_Medical_Art_-_Lungs_anterior_view.svg", "Surfactant", "Pulmonary surfactant physiology")],
  "PY-MOD-04-TOP-09": [img("Servier_Medical_Art_-_Lungs_anterior_view.svg", "Pulmonary Edema", "Fluid dynamics in lungs")],
  "PY-MOD-04-TOP-10": [img("Servier_Medical_Art_-_Lungs_anterior_view.svg", "High Altitude Physiology", "Adaptation to hypoxia")],
  "PY-MOD-04-TOP-11": [img("Servier_Medical_Art_-_Lungs_anterior_view.svg", "Diving Physiology", "Pressure and gas effects")],
  "PY-MOD-04-TOP-12": [img("Servier_Medical_Art_-_Lungs_anterior_view.svg", "Exercise Physiology", "Respiratory response to exercise")],
  "PY-MOD-04-TOP-13": [img("Servier_Medical_Art_-_Lungs_anterior_view.svg", "Sleep Apnea", "Respiratory control during sleep")],
  "PY-MOD-04-TOP-14": [img("Servier_Medical_Art_-_Lungs_anterior_view.svg", "Cough Reflex", "Protective airway reflexes")],

  // PY-MOD-05: Renal (14 topics)
  "PY-MOD-05-TOP-01": [img("Servier_Medical_Art_-_Nephron.svg", "Nephron Structure", "Anatomy of functional unit")],
  "PY-MOD-05-TOP-02": [img("Servier_Medical_Art_-_Kidney_cross_section.svg", "Glomerular Filtration", "GFR and filtration barrier")],
  "PY-MOD-05-TOP-03": [img("Servier_Medical_Art_-_Nephron.svg", "Proximal Tubule", "Reabsorption of glucose, amino acids")],
  "PY-MOD-05-TOP-04": [img("Servier_Medical_Art_-_Nephron.svg", "Loop of Henle", "Countercurrent multiplier")],
  "PY-MOD-05-TOP-05": [img("Servier_Medical_Art_-_Nephron.svg", "Distal Tubule", "Selective reabsorption")],
  "PY-MOD-05-TOP-06": [img("Servier_Medical_Art_-_Nephron.svg", "Collecting Duct", "ADH and aquaporins")],
  "PY-MOD-05-TOP-07": [img("Servier_Medical_Art_-_Kidney_cross_section.svg", "Juxtaglomerular Apparatus", "Renin secretion")],
  "PY-MOD-05-TOP-08": [img("Servier_Medical_Art_-_Kidney_cross_section.svg", "Acid-Base Regulation", "Renal buffer systems")],
  "PY-MOD-05-TOP-09": [img("Servier_Medical_Art_-_Kidney_cross_section.svg", "Electrolyte Balance", "Sodium and potassium handling")],
  "PY-MOD-05-TOP-10": [img("Servier_Medical_Art_-_Kidney_cross_section.svg", "Water Balance", "Osmolarity and ADH")],
  "PY-MOD-05-TOP-11": [img("Servier_Medical_Art_-_Kidney_cross_section.svg", "Renal Clearance", "Clearance concepts and calculations")],
  "PY-MOD-05-TOP-12": [img("Servier_Medical_Art_-_Kidney_cross_section.svg", "Micturition", "Bladder filling and emptying")],
  "PY-MOD-05-TOP-13": [img("Servier_Medical_Art_-_Kidney_cross_section.svg", "Diuretics", "Types and mechanisms")],
  "PY-MOD-05-TOP-14": [img("Servier_Medical_Art_-_Kidney_cross_section.svg", "Renal Hormones", "Erythropoietin and vitamin D")],

  // PY-MOD-06: GI Physiology (14 topics)
  "PY-MOD-06-TOP-01": [img("Servier_Medical_Art_-_Digestive_system.svg", "Saliva", "Composition and functions")],
  "PY-MOD-06-TOP-02": [img("Servier_Medical_Art_-_Digestive_system.svg", "Swallowing", "Deglutition process")],
  "PY-MOD-06-TOP-03": [img("Servier_Medical_Art_-_Stomach.svg", "Gastric Secretion", "Acid and pepsin production")],
  "PY-MOD-06-TOP-04": [img("Servier_Medical_Art_-_Stomach.svg", "Gastric Motility", "Mixing and propulsion")],
  "PY-MOD-06-TOP-05": [img("Servier_Medical_Art_-_Stomach.svg", "Gastric Emptying", "Factors affecting rate")],
  "PY-MOD-06-TOP-06": [img("Servier_Medical_Art_-_Liver.svg", "Pancreatic Secretion", "Enzymes and bicarbonate")],
  "PY-MOD-06-TOP-07": [img("Servier_Medical_Art_-_Liver.svg", "Bile Secretion", "Bile composition and function")],
  "PY-MOD-06-TOP-08": [img("Servier_Medical_Art_-_Intestine_cross_section.svg", "Intestinal Secretion", "Mucus and electrolyte secretion")],
  "PY-MOD-06-TOP-09": [img("Servier_Medical_Art_-_Intestine_cross_section.svg", "Nutrient Absorption", "Carbohydrate, lipid, protein absorption")],
  "PY-MOD-06-TOP-10": [img("Servier_Medical_Art_-_Intestine_cross_section.svg", "Intestinal Motility", "Segmentation and peristalsis")],
  "PY-MOD-06-TOP-11": [img("Servier_Medical_Art_-_Digestive_system.svg", "Defecation", "Bowel movements and reflexes")],
  "PY-MOD-06-TOP-12": [img("Servier_Medical_Art_-_Liver.svg", "Liver Functions", "Metabolic roles")],
  "PY-MOD-06-TOP-13": [img("Servier_Medical_Art_-_Digestive_system.svg", "GI Hormones", "Gastrin, secretin, CCK")],
  "PY-MOD-06-TOP-14": [img("Servier_Medical_Art_-_Digestive_system.svg", "Barrier Function", "Epithelial defense mechanisms")],

  // PY-MOD-07: Endocrine (14 topics)
  "PY-MOD-07-TOP-01": [img("Servier_Medical_Art_-_Thyroid_gland.svg", "Hypothalamic-Pituitary Axis", "Control of hormones")],
  "PY-MOD-07-TOP-02": [img("Servier_Medical_Art_-_Thyroid_gland.svg", "Anterior Pituitary", "Hormone secretion")],
  "PY-MOD-07-TOP-03": [img("Servier_Medical_Art_-_Thyroid_gland.svg", "Posterior Pituitary", "ADH and oxytocin")],
  "PY-MOD-07-TOP-04": [img("Servier_Medical_Art_-_Thyroid_gland.svg", "Thyroid Hormones", "T3, T4, and metabolism")],
  "PY-MOD-07-TOP-05": [img("Servier_Medical_Art_-_Thyroid_gland.svg", "Parathyroid", "PTH and calcium regulation")],
  "PY-MOD-07-TOP-06": [img("Servier_Medical_Art_-_Adrenal_gland.svg", "Adrenal Cortex", "Glucocorticoids and mineralocorticoids")],
  "PY-MOD-07-TOP-07": [img("Servier_Medical_Art_-_Adrenal_gland.svg", "Adrenal Medulla", "Catecholamines")],
  "PY-MOD-07-TOP-08": [img("Servier_Medical_Art_-_Pancreas.svg", "Pancreatic Endocrine", "Insulin and glucagon")],
  "PY-MOD-07-TOP-09": [img("Servier_Medical_Art_-_Pancreas.svg", "Insulin Secretion", "Glucose sensing and regulation")],
  "PY-MOD-07-TOP-10": [img("Servier_Medical_Art_-_Pancreas.svg", "Glucose Homeostasis", "Fed and fasted states")],
  "PY-MOD-07-TOP-11": [img("Servier_Medical_Art_-_Adrenal_gland.svg", "Stress Response", "HPA axis and cortisol")],
  "PY-MOD-07-TOP-12": [img("Servier_Medical_Art_-_Thyroid_gland.svg", "Calcium-Phosphate Homeostasis", "PTH, vitamin D, calcitonin")],
  "PY-MOD-07-TOP-13": [img("Servier_Medical_Art_-_Thyroid_gland.svg", "Growth Hormone", "GH and IGF-1")],
  "PY-MOD-07-TOP-14": [img("Servier_Medical_Art_-_Thyroid_gland.svg", "Thyroid Pathophysiology", "Hyper and hypothyroidism")],

  // PY-MOD-08: Reproductive (12 topics)
  "PY-MOD-08-TOP-01": [img("Servier_Medical_Art_-_Prostate.svg", "Spermatogenesis", "Sperm formation process")],
  "PY-MOD-08-TOP-02": [img("Servier_Medical_Art_-_Prostate.svg", "Testosterone", "Production and function")],
  "PY-MOD-08-TOP-03": [img("Servier_Medical_Art_-_Prostate.svg", "Male Sexual Response", "Erection and ejaculation")],
  "PY-MOD-08-TOP-04": [img("Servier_Medical_Art_-_Ovary.svg", "Oogenesis", "Egg formation process")],
  "PY-MOD-08-TOP-05": [img("Servier_Medical_Art_-_Ovary.svg", "Menstrual Cycle", "Follicular and luteal phases")],
  "PY-MOD-08-TOP-06": [img("Servier_Medical_Art_-_Ovary.svg", "Female Sex Hormones", "Estrogen and progesterone")],
  "PY-MOD-08-TOP-07": [img("Servier_Medical_Art_-_Ovary.svg", "Female Sexual Response", "Arousal and orgasm")],
  "PY-MOD-08-TOP-08": [img("Servier_Medical_Art_-_Uterus.svg", "Fertilization", "Sperm-egg interaction")],
  "PY-MOD-08-TOP-09": [img("Servier_Medical_Art_-_Uterus.svg", "Implantation", "Blastocyst-endometrium interaction")],
  "PY-MOD-08-TOP-10": [img("Servier_Medical_Art_-_Uterus.svg", "Placental Physiology", "Gas and nutrient exchange")],
  "PY-MOD-08-TOP-11": [img("Servier_Medical_Art_-_Uterus.svg", "Labor", "Uterine contractions and delivery")],
  "PY-MOD-08-TOP-12": [img("Servier_Medical_Art_-_Prostate.svg", "Lactation", "Milk production and secretion")],

  // PY-MOD-09: CNS Physiology (14 topics)
  "PY-MOD-09-TOP-01": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Cerebral Cortex Functions", "Motor, sensory, association areas")],
  "PY-MOD-09-TOP-02": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Motor Control", "Pyramidal and extrapyramidal")],
  "PY-MOD-09-TOP-03": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Sensory Pathways", "Dorsal column and spinothalamic")],
  "PY-MOD-09-TOP-04": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Vision", "Visual pathway and processing")],
  "PY-MOD-09-TOP-05": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Hearing", "Auditory pathway and processing")],
  "PY-MOD-09-TOP-06": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Smell and Taste", "Olfaction and gustation")],
  "PY-MOD-09-TOP-07": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Cerebellum Function", "Coordination and motor learning")],
  "PY-MOD-09-TOP-08": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Basal Ganglia", "Movement control and habit")],
  "PY-MOD-09-TOP-09": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Limbic System", "Emotion and memory")],
  "PY-MOD-09-TOP-10": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Memory", "Short-term and long-term")],
  "PY-MOD-09-TOP-11": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Sleep", "Sleep stages and regulation")],
  "PY-MOD-09-TOP-12": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Temperature Regulation", "Thermoregulation mechanisms")],
  "PY-MOD-09-TOP-13": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Consciousness", "Reticular activating system")],
  "PY-MOD-09-TOP-14": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Autonomic Nervous System", "Sympathetic and parasympathetic")],

  // PY-MOD-10: Special Senses (12 topics)
  "PY-MOD-10-TOP-01": [img("Servier_Medical_Art_-_Eye_anatomy.svg", "Eye Optics", "Refraction and accommodation")],
  "PY-MOD-10-TOP-02": [img("Servier_Medical_Art_-_Eye_anatomy.svg", "Retinal Function", "Photoreceptor physiology")],
  "PY-MOD-10-TOP-03": [img("Servier_Medical_Art_-_Eye_anatomy.svg", "Vision Processing", "Ganglion and bipolar cells")],
  "PY-MOD-10-TOP-04": [img("Servier_Medical_Art_-_Eye_anatomy.svg", "Color Vision", "Cone types and color blindness")],
  "PY-MOD-10-TOP-05": [img("Servier_Medical_Art_-_Eye_anatomy.svg", "Night Vision", "Rod vision and rhodopsin")],
  "PY-MOD-10-TOP-06": [img("Servier_Medical_Art_-_Ear_anatomy.svg", "Ear Mechanics", "Sound transmission to cochlea")],
  "PY-MOD-10-TOP-07": [img("Servier_Medical_Art_-_Ear_anatomy.svg", "Cochlear Mechanics", "Basilar membrane vibration")],
  "PY-MOD-10-TOP-08": [img("Servier_Medical_Art_-_Ear_anatomy.svg", "Cochlear Transduction", "Hair cell mechanotransduction")],
  "PY-MOD-10-TOP-09": [img("Servier_Medical_Art_-_Ear_anatomy.svg", "Hearing Range", "Frequency sensitivity")],
  "PY-MOD-10-TOP-10": [img("Servier_Medical_Art_-_Ear_anatomy.svg", "Balance", "Vestibular system function")],
  "PY-MOD-10-TOP-11": [img("Servier_Medical_Art_-_Skin_cross_section.svg", "Touch and Pain", "Mechanoreceptors and nociceptors")],
  "PY-MOD-10-TOP-12": [img("Servier_Medical_Art_-_Skin_cross_section.svg", "Temperature Sensation", "Thermoreceptor function")],

  // ========== BIOCHEMISTRY (BI) - 5 MODULES ==========
  "BI-MOD-01-TOP-01": [img("Servier_Medical_Art_-_DNA_double_helix.svg", "DNA Structure", "Double helix and bases")],
  "BI-MOD-01-TOP-02": [img("Servier_Medical_Art_-_DNA_double_helix.svg", "DNA Replication", "Semi-conservative copying")],
  "BI-MOD-01-TOP-03": [img("Servier_Medical_Art_-_Chromosome.svg", "Transcription", "RNA synthesis from DNA")],
  "BI-MOD-01-TOP-04": [img("Servier_Medical_Art_-_Chromosome.svg", "RNA Types", "mRNA, tRNA, rRNA functions")],
  "BI-MOD-01-TOP-05": [img("Servier_Medical_Art_-_Chromosome.svg", "Translation", "Protein synthesis")],
  "BI-MOD-01-TOP-06": [img("Servier_Medical_Art_-_Chromosome.svg", "Genetic Code", "Codons and amino acids")],
  "BI-MOD-01-TOP-07": [img("Servier_Medical_Art_-_DNA_double_helix.svg", "Gene Regulation", "Transcriptional control")],
  "BI-MOD-01-TOP-08": [img("Servier_Medical_Art_-_DNA_double_helix.svg", "Mutations", "Types and effects")],
  "BI-MOD-01-TOP-09": [img("Servier_Medical_Art_-_Chromosome.svg", "Epigenetics", "DNA methylation and histone modification")],
  "BI-MOD-01-TOP-10": [img("Servier_Medical_Art_-_DNA_double_helix.svg", "Cell Cycle Regulation", "Checkpoints and cyclins")],

  "BI-MOD-02-TOP-01": [img("Servier_Medical_Art_-_Animal_cell.svg", "Protein Structure", "Amino acids and peptide bonds")],
  "BI-MOD-02-TOP-02": [img("Servier_Medical_Art_-_Animal_cell.svg", "Tertiary Structure", "Folding and domains")],
  "BI-MOD-02-TOP-03": [img("Servier_Medical_Art_-_Animal_cell.svg", "Enzyme Catalysis", "Active site and mechanism")],
  "BI-MOD-02-TOP-04": [img("Servier_Medical_Art_-_Animal_cell.svg", "Enzyme Kinetics", "Michaelis-Menten equation")],
  "BI-MOD-02-TOP-05": [img("Servier_Medical_Art_-_Animal_cell.svg", "Enzyme Inhibition", "Competitive and non-competitive")],
  "BI-MOD-02-TOP-06": [img("Servier_Medical_Art_-_Animal_cell.svg", "Cofactors and Coenzymes", "NAD, FAD, metal ions")],
  "BI-MOD-02-TOP-07": [img("Servier_Medical_Art_-_Animal_cell.svg", "Protein Synthesis", "Ribosomal protein formation")],
  "BI-MOD-02-TOP-08": [img("Servier_Medical_Art_-_Animal_cell.svg", "Protein Degradation", "Proteasome and autophagy")],
  "BI-MOD-02-TOP-09": [img("Servier_Medical_Art_-_Animal_cell.svg", "Protein Modifications", "Phosphorylation and ubiquitination")],
  "BI-MOD-02-TOP-10": [img("Servier_Medical_Art_-_Animal_cell.svg", "Enzyme Regulation", "Allosteric and covalent modification")],

  "BI-MOD-03-TOP-01": [img("Servier_Medical_Art_-_Mitochondrion.svg", "Glycolysis", "10 reactions and pyruvate")],
  "BI-MOD-03-TOP-02": [img("Servier_Medical_Art_-_Mitochondrion.svg", "Krebs Cycle", "Citric acid cycle enzymes")],
  "BI-MOD-03-TOP-03": [img("Servier_Medical_Art_-_Mitochondrion.svg", "Electron Transport", "Oxidative phosphorylation")],
  "BI-MOD-03-TOP-04": [img("Servier_Medical_Art_-_Mitochondrion.svg", "ATP Synthesis", "Chemiosmotic theory")],
  "BI-MOD-03-TOP-05": [img("Servier_Medical_Art_-_Mitochondrion.svg", "Anaerobic Metabolism", "Lactic acid fermentation")],
  "BI-MOD-03-TOP-06": [img("Servier_Medical_Art_-_Mitochondrion.svg", "Gluconeogenesis", "Glucose synthesis from non-carbs")],
  "BI-MOD-03-TOP-07": [img("Servier_Medical_Art_-_Mitochondrion.svg", "Glycogen Metabolism", "Synthesis and breakdown")],
  "BI-MOD-03-TOP-08": [img("Servier_Medical_Art_-_Mitochondrion.svg", "Pentose Phosphate Pathway", "NADPH production")],
  "BI-MOD-03-TOP-09": [img("Servier_Medical_Art_-_Mitochondrion.svg", "Metabolic Regulation", "Fed and fasted states")],
  "BI-MOD-03-TOP-10": [img("Servier_Medical_Art_-_Mitochondrion.svg", "Diabetes Pathophysiology", "Type 1 and Type 2")],

  "BI-MOD-04-TOP-01": [img("Servier_Medical_Art_-_Mitochondrion.svg", "Amino Acid Metabolism", "Transamination and deamination")],
  "BI-MOD-04-TOP-02": [img("Servier_Medical_Art_-_Mitochondrion.svg", "Urea Cycle", "Ammonia detoxification")],
  "BI-MOD-04-TOP-03": [img("Servier_Medical_Art_-_Mitochondrion.svg", "Protein Synthesis", "Requirements and regulation")],
  "BI-MOD-04-TOP-04": [img("Servier_Medical_Art_-_Mitochondrion.svg", "Lipid Structure", "Fatty acids and triglycerides")],
  "BI-MOD-04-TOP-05": [img("Servier_Medical_Art_-_Mitochondrion.svg", "Lipid Oxidation", "Beta-oxidation of fatty acids")],
  "BI-MOD-04-TOP-06": [img("Servier_Medical_Art_-_Mitochondrion.svg", "Lipid Synthesis", "Fatty acid and cholesterol synthesis")],
  "BI-MOD-04-TOP-07": [img("Servier_Medical_Art_-_Mitochondrion.svg", "Lipoproteins", "Chylomicrons, VLDL, LDL, HDL")],
  "BI-MOD-04-TOP-08": [img("Servier_Medical_Art_-_Mitochondrion.svg", "Cholesterol Metabolism", "Synthesis and regulation")],
  "BI-MOD-04-TOP-09": [img("Servier_Medical_Art_-_Mitochondrion.svg", "Ketogenesis", "Ketone body formation")],
  "BI-MOD-04-TOP-10": [img("Servier_Medical_Art_-_Mitochondrion.svg", "Metabolic Acidosis", "Lactic and ketoacidosis")],

  "BI-MOD-05-TOP-01": [img("Servier_Medical_Art_-_Animal_cell.svg", "Macro Minerals", "Calcium, phosphorus, magnesium")],
  "BI-MOD-05-TOP-02": [img("Servier_Medical_Art_-_Animal_cell.svg", "Trace Elements", "Iron, zinc, copper, selenium")],
  "BI-MOD-05-TOP-03": [img("Servier_Medical_Art_-_Animal_cell.svg", "Fat-Soluble Vitamins", "A, D, E, K")],
  "BI-MOD-05-TOP-04": [img("Servier_Medical_Art_-_Animal_cell.svg", "Water-Soluble Vitamins", "B complex and vitamin C")],
  "BI-MOD-05-TOP-05": [img("Servier_Medical_Art_-_Animal_cell.svg", "Deficiency Disorders", "Scurvy, rickets, beriberi")],
  "BI-MOD-05-TOP-06": [img("Servier_Medical_Art_-_Animal_cell.svg", "Malnutrition", "PEM and micronutrient deficiencies")],
  "BI-MOD-05-TOP-07": [img("Servier_Medical_Art_-_Animal_cell.svg", "Obesity Metabolism", "Energy balance and storage")],
  "BI-MOD-05-TOP-08": [img("Servier_Medical_Art_-_Animal_cell.svg", "Dietary Requirements", "RDA and food groups")],

  // ========== PATHOLOGY (PA) - 3 MODULES ==========
  "PA-MOD-01-TOP-01": [img("Servier_Medical_Art_-_Inflammation.svg", "Inflammation", "Acute and chronic")],
  "PA-MOD-01-TOP-02": [img("Servier_Medical_Art_-_Neutrophil.svg", "Inflammatory Cells", "Neutrophil and macrophage recruitment")],
  "PA-MOD-01-TOP-03": [img("Servier_Medical_Art_-_Inflammation.svg", "Mediators", "Cytokines and complement")],
  "PA-MOD-01-TOP-04": [img("Servier_Medical_Art_-_Thrombus.svg", "Hemostasis", "Coagulation and fibrinolysis")],
  "PA-MOD-01-TOP-05": [img("Servier_Medical_Art_-_Thrombus.svg", "Thrombosis", "Venous and arterial clots")],
  "PA-MOD-01-TOP-06": [img("Servier_Medical_Art_-_Atherosclerosis.svg", "Atherosclerosis", "Plaque formation")],
  "PA-MOD-01-TOP-07": [img("Servier_Medical_Art_-_Atherosclerosis.svg", "Ischemia", "Tissue necrosis types")],
  "PA-MOD-01-TOP-08": [img("Servier_Medical_Art_-_Thrombus.svg", "Embolism", "Causes and consequences")],
  "PA-MOD-01-TOP-09": [img("Servier_Medical_Art_-_Inflammation.svg", "Repair", "Scarring and regeneration")],
  "PA-MOD-01-TOP-10": [img("Servier_Medical_Art_-_Inflammation.svg", "Adaptations", "Atrophy, hypertrophy, metaplasia")],

  "PA-MOD-02-TOP-01": [img("Servier_Medical_Art_-_Cancer_cell.svg", "Carcinogenesis", "Multi-hit hypothesis")],
  "PA-MOD-02-TOP-02": [img("Servier_Medical_Art_-_Cancer_cell.svg", "Oncogenes", "Proto-oncogene activation")],
  "PA-MOD-02-TOP-03": [img("Servier_Medical_Art_-_Cancer_cell.svg", "Tumor Suppressors", "TP53 and RB genes")],
  "PA-MOD-02-TOP-04": [img("Servier_Medical_Art_-_Tumor.svg", "Tumor Properties", "Differentiation and grading")],
  "PA-MOD-02-TOP-05": [img("Servier_Medical_Art_-_Tumor.svg", "Invasion and Metastasis", "Epithelial-mesenchymal transition")],
  "PA-MOD-02-TOP-06": [img("Servier_Medical_Art_-_Tumor.svg", "Leukemias", "AML and CLL")],
  "PA-MOD-02-TOP-07": [img("Servier_Medical_Art_-_Tumor.svg", "Lymphomas", "Hodgkin and non-Hodgkin")],
  "PA-MOD-02-TOP-08": [img("Servier_Medical_Art_-_Tumor.svg", "Myeloma", "Plasma cell malignancy")],
  "PA-MOD-02-TOP-09": [img("Servier_Medical_Art_-_Cancer_cell.svg", "Tumor Antigens", "Immunosurveillance")],
  "PA-MOD-02-TOP-10": [img("Servier_Medical_Art_-_Tumor.svg", "Paraneoplastic Syndromes", "Cancer complications")],

  "PA-MOD-03-TOP-01": [img("Servier_Medical_Art_-_Heart_anterior_view.svg", "Cardiac Pathology", "Hypertrophy and heart failure")],
  "PA-MOD-03-TOP-02": [img("Servier_Medical_Art_-_Atherosclerosis.svg", "CAD and MI", "Coronary artery disease")],
  "PA-MOD-03-TOP-03": [img("Servier_Medical_Art_-_Lungs_anterior_view.svg", "Pulmonary Pathology", "ARDS and pneumonia")],
  "PA-MOD-03-TOP-04": [img("Servier_Medical_Art_-_Lungs_anterior_view.svg", "Chronic Lung Disease", "COPD and asthma")],
  "PA-MOD-03-TOP-05": [img("Servier_Medical_Art_-_Liver.svg", "Hepatic Pathology", "Cirrhosis and hepatitis")],
  "PA-MOD-03-TOP-06": [img("Servier_Medical_Art_-_Kidney_cross_section.svg", "Renal Pathology", "Glomerulonephritis and ARF")],
  "PA-MOD-03-TOP-07": [img("Servier_Medical_Art_-_Stomach.svg", "GI Pathology", "Ulcers and gastritis")],
  "PA-MOD-03-TOP-08": [img("Servier_Medical_Art_-_Pancreas.svg", "Pancreatic Pathology", "Pancreatitis")],
  "PA-MOD-03-TOP-09": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Neuro Pathology", "Stroke and neurodegenerative disease")],
  "PA-MOD-03-TOP-10": [img("Servier_Medical_Art_-_Thyroid_gland.svg", "Endocrine Pathology", "Thyroid disorders")],

  // ========== PHARMACOLOGY (PH) - 12 MODULES ==========
  "PH-MOD-01-TOP-01": [img("Servier_Medical_Art_-_Drug_receptor_interaction.svg", "Drug Receptors", "Types and interactions")],
  "PH-MOD-01-TOP-02": [img("Servier_Medical_Art_-_Drug_receptor_interaction.svg", "Pharmacodynamics", "Dose-response relationships")],
  "PH-MOD-01-TOP-03": [img("Servier_Medical_Art_-_Syringe.svg", "Absorption", "Routes of drug administration")],
  "PH-MOD-01-TOP-04": [img("Servier_Medical_Art_-_Syringe.svg", "Distribution", "Drug tissue distribution")],
  "PH-MOD-01-TOP-05": [img("Servier_Medical_Art_-_Liver.svg", "Metabolism", "Phase I, II, III reactions")],
  "PH-MOD-01-TOP-06": [img("Servier_Medical_Art_-_Kidney_cross_section.svg", "Elimination", "Renal and hepatic clearance")],
  "PH-MOD-01-TOP-07": [img("Servier_Medical_Art_-_Pills.svg", "Bioavailability", "First-pass metabolism")],
  "PH-MOD-01-TOP-08": [img("Servier_Medical_Art_-_Pills.svg", "Drug Interactions", "Synergy and antagonism")],
  "PH-MOD-01-TOP-09": [img("Servier_Medical_Art_-_Syringe.svg", "Adverse Effects", "Toxicity and side effects")],
  "PH-MOD-01-TOP-10": [img("Servier_Medical_Art_-_Syringe.svg", "Pregnancy and Lactation", "Drug safety in pregnancy")],

  "PH-MOD-02-TOP-01": [img("Servier_Medical_Art_-_Drug_receptor_interaction.svg", "Cholinergic Drugs", "Parasympathomimetics")],
  "PH-MOD-02-TOP-02": [img("Servier_Medical_Art_-_Drug_receptor_interaction.svg", "Anticholinergics", "Atropine and antimuscarinic")],
  "PH-MOD-02-TOP-03": [img("Servier_Medical_Art_-_Drug_receptor_interaction.svg", "Adrenergic Agonists", "Alpha and beta stimulation")],
  "PH-MOD-02-TOP-04": [img("Servier_Medical_Art_-_Drug_receptor_interaction.svg", "Adrenergic Antagonists", "Alpha and beta blockers")],
  "PH-MOD-02-TOP-05": [img("Servier_Medical_Art_-_Drug_receptor_interaction.svg", "Neuromuscular Blockers", "Paralysis agents")],
  "PH-MOD-02-TOP-06": [img("Servier_Medical_Art_-_Drug_receptor_interaction.svg", "Local Anesthetics", "Lidocaine and others")],
  "PH-MOD-02-TOP-07": [img("Servier_Medical_Art_-_Drug_receptor_interaction.svg", "General Anesthetics", "Volatile and IV agents")],
  "PH-MOD-02-TOP-08": [img("Servier_Medical_Art_-_Pills.svg", "Sympathomimetics", "Amphetamines")],
  "PH-MOD-02-TOP-09": [img("Servier_Medical_Art_-_Pills.svg", "Therapeutic Agents", "Bronchodilators and vasodilators")],
  "PH-MOD-02-TOP-10": [img("Servier_Medical_Art_-_Syringe.svg", "Clinical Applications", "Hypertension and tachycardia")],

  "PH-MOD-03-TOP-01": [img("Servier_Medical_Art_-_Drug_receptor_interaction.svg", "Antihistamines", "H1 and H2 blockers")],
  "PH-MOD-03-TOP-02": [img("Servier_Medical_Art_-_Drug_receptor_interaction.svg", "NSAIDs", "Aspirin, ibuprofen, naproxen")],
  "PH-MOD-03-TOP-03": [img("Servier_Medical_Art_-_Drug_receptor_interaction.svg", "Corticosteroids", "Glucocorticoids and mineralocorticoids")],
  "PH-MOD-03-TOP-04": [img("Servier_Medical_Art_-_Pills.svg", "Analgesics", "Acetaminophen")],
  "PH-MOD-03-TOP-05": [img("Servier_Medical_Art_-_Pills.svg", "Immunosuppressants", "Calcineurin inhibitors")],
  "PH-MOD-03-TOP-06": [img("Servier_Medical_Art_-_Pills.svg", "Biologics", "Monoclonal antibodies")],
  "PH-MOD-03-TOP-07": [img("Servier_Medical_Art_-_Syringe.svg", "Clinical Use", "Inflammation and allergies")],

  "PH-MOD-04-TOP-01": [img("Servier_Medical_Art_-_Drug_receptor_interaction.svg", "Anticoagulants", "Warfarin and DOACs")],
  "PH-MOD-04-TOP-02": [img("Servier_Medical_Art_-_Drug_receptor_interaction.svg", "Antiplatelet Agents", "Clopidogrel and ticagrelor")],
  "PH-MOD-04-TOP-03": [img("Servier_Medical_Art_-_Syringe.svg", "Thrombolytics", "tPA and streptokinase")],

  "PH-MOD-05-TOP-01": [img("Servier_Medical_Art_-_Drug_receptor_interaction.svg", "ACE Inhibitors", "Enalapril")],
  "PH-MOD-05-TOP-02": [img("Servier_Medical_Art_-_Drug_receptor_interaction.svg", "Angiotensin II Blockers", "Losartan")],
  "PH-MOD-05-TOP-03": [img("Servier_Medical_Art_-_Drug_receptor_interaction.svg", "Beta Blockers", "Metoprolol and atenolol")],

  "PH-MOD-06-TOP-01": [img("Servier_Medical_Art_-_Drug_receptor_interaction.svg", "Calcium Channel Blockers", "Nifedipine and verapamil")],
  "PH-MOD-06-TOP-02": [img("Servier_Medical_Art_-_Drug_receptor_interaction.svg", "Vasodilators", "Hydralazine and minoxidil")],

  "PH-MOD-07-TOP-01": [img("Servier_Medical_Art_-_Drug_receptor_interaction.svg", "Cardiac Glycosides", "Digoxin")],
  "PH-MOD-07-TOP-02": [img("Servier_Medical_Art_-_Drug_receptor_interaction.svg", "Inotropes", "Dobutamine and milrinone")],

  "PH-MOD-08-TOP-01": [img("Servier_Medical_Art_-_Drug_receptor_interaction.svg", "Statins", "Cholesterol synthesis inhibitors")],
  "PH-MOD-08-TOP-02": [img("Servier_Medical_Art_-_Drug_receptor_interaction.svg", "Fibrates", "Triglyceride lowering")],

  "PH-MOD-09-TOP-01": [img("Servier_Medical_Art_-_Pills.svg", "PPIs", "Omeprazole")],
  "PH-MOD-09-TOP-02": [img("Servier_Medical_Art_-_Pills.svg", "H2 Blockers", "Ranitidine")],

  "PH-MOD-10-TOP-01": [img("Servier_Medical_Art_-_Pills.svg", "Sulfonylureas", "Glibenclamide")],
  "PH-MOD-10-TOP-02": [img("Servier_Medical_Art_-_Pills.svg", "Biguanides", "Metformin")],

  "PH-MOD-11-TOP-01": [img("Servier_Medical_Art_-_Drug_receptor_interaction.svg", "Inhaled Drugs", "Bronchodilators")],

  "PH-MOD-12-TOP-01": [img("Servier_Medical_Art_-_Pills.svg", "Immunizations", "Vaccines")],

  // ========== MICROBIOLOGY (MI) - 6 MODULES ==========
  "MI-MOD-01-TOP-01": [img("Servier_Medical_Art_-_Gram_positive_bacterium.svg", "Bacterial Structure", "Cell wall and mechanisms")],
  "MI-MOD-01-TOP-02": [img("Servier_Medical_Art_-_Gram_negative_bacterium.svg", "Gram Staining", "Positive and negative bacteria")],
  "MI-MOD-01-TOP-03": [img("Servier_Medical_Art_-_Gram_positive_bacterium.svg", "Bacterial Growth", "Reproduction and survival")],
  "MI-MOD-01-TOP-04": [img("Servier_Medical_Art_-_Gram_positive_bacterium.svg", "Bacterial Genetics", "Horizontal gene transfer")],
  "MI-MOD-01-TOP-05": [img("Servier_Medical_Art_-_Gram_positive_bacterium.svg", "Pathogenesis", "Virulence factors")],

  "MI-MOD-02-TOP-01": [img("Servier_Medical_Art_-_Gram_positive_bacterium.svg", "Staphylococcus", "S. aureus and epidermidis")],
  "MI-MOD-02-TOP-02": [img("Servier_Medical_Art_-_Gram_positive_bacterium.svg", "Streptococcus", "S. pyogenes and pneumoniae")],
  "MI-MOD-02-TOP-03": [img("Servier_Medical_Art_-_Gram_positive_bacterium.svg", "Bacillus", "B. anthracis and cereus")],
  "MI-MOD-02-TOP-04": [img("Servier_Medical_Art_-_Gram_positive_bacterium.svg", "Clostridium", "C. difficile and botulinum")],

  "MI-MOD-03-TOP-01": [img("Servier_Medical_Art_-_Gram_negative_bacterium.svg", "Enterobacteria", "E. coli and Salmonella")],
  "MI-MOD-03-TOP-02": [img("Servier_Medical_Art_-_Gram_negative_bacterium.svg", "Pseudomonas", "P. aeruginosa")],
  "MI-MOD-03-TOP-03": [img("Servier_Medical_Art_-_Gram_negative_bacterium.svg", "Vibrio", "V. cholerae")],
  "MI-MOD-03-TOP-04": [img("Servier_Medical_Art_-_Gram_negative_bacterium.svg", "Neisseria", "N. gonorrhoeae and meningitidis")],

  "MI-MOD-04-TOP-01": [img("Servier_Medical_Art_-_Virus.svg", "Virus Structure", "Viral anatomy")],
  "MI-MOD-04-TOP-02": [img("Servier_Medical_Art_-_Virus.svg", "DNA Viruses", "HSV and CMV")],
  "MI-MOD-04-TOP-03": [img("Servier_Medical_Art_-_Virus.svg", "RNA Viruses", "Influenza and measles")],
  "MI-MOD-04-TOP-04": [img("Servier_Medical_Art_-_HIV.svg", "HIV", "Structure and replication")],
  "MI-MOD-04-TOP-05": [img("Servier_Medical_Art_-_Hepatitis_virus.svg", "Hepatitis Viruses", "HAV to HEV")],

  "MI-MOD-05-TOP-01": [img("Servier_Medical_Art_-_Fungus.svg", "Fungal Infections", "Dermatophytes")],
  "MI-MOD-05-TOP-02": [img("Servier_Medical_Art_-_Fungus.svg", "Candida", "C. albicans")],
  "MI-MOD-05-TOP-03": [img("Servier_Medical_Art_-_Fungus.svg", "Aspergillus", "A. fumigatus")],

  "MI-MOD-06-TOP-01": [img("Servier_Medical_Art_-_Parasite.svg", "Protozoal Infection", "Malaria and giardia")],
  "MI-MOD-06-TOP-02": [img("Servier_Medical_Art_-_Malaria.svg", "Malaria", "Plasmodium lifecycle")],
  "MI-MOD-06-TOP-03": [img("Servier_Medical_Art_-_Parasite.svg", "Helminths", "Roundworms and tapeworms")],

  // ========== MEDICINE (IM) - 12 MODULES ==========
  "IM-MOD-01-TOP-01": [img("Servier_Medical_Art_-_Heart_anterior_view.svg", "Hypertension", "HTN management")],
  "IM-MOD-01-TOP-02": [img("Servier_Medical_Art_-_Atherosclerosis.svg", "CAD", "Angina and MI")],
  "IM-MOD-01-TOP-03": [img("Servier_Medical_Art_-_Heart_internal_anatomy.svg", "Heart Failure", "Systolic and diastolic")],
  "IM-MOD-01-TOP-04": [img("Servier_Medical_Art_-_Heart_anterior_view.svg", "Arrhythmias", "Atrial fibrillation")],

  "IM-MOD-02-TOP-01": [img("Servier_Medical_Art_-_Lungs_anterior_view.svg", "Pneumonia", "Bacterial and viral")],
  "IM-MOD-02-TOP-02": [img("Servier_Medical_Art_-_Lungs_anterior_view.svg", "COPD", "Emphysema and bronchitis")],
  "IM-MOD-02-TOP-03": [img("Servier_Medical_Art_-_Lungs_anterior_view.svg", "Asthma", "Reversible airway obstruction")],

  "IM-MOD-03-TOP-01": [img("Servier_Medical_Art_-_Liver.svg", "Hepatitis", "Viral and autoimmune")],
  "IM-MOD-03-TOP-02": [img("Servier_Medical_Art_-_Liver.svg", "Cirrhosis", "Chronic liver disease")],

  "IM-MOD-04-TOP-01": [img("Servier_Medical_Art_-_Kidney_cross_section.svg", "Acute Kidney Injury", "ARF management")],
  "IM-MOD-04-TOP-02": [img("Servier_Medical_Art_-_Kidney_cross_section.svg", "Chronic Kidney Disease", "CKD stages")],

  "IM-MOD-05-TOP-01": [img("Servier_Medical_Art_-_Pancreas.svg", "Diabetes Mellitus", "Type 1 and 2")],
  "IM-MOD-05-TOP-02": [img("Servier_Medical_Art_-_Pancreas.svg", "Hypoglycemia", "Severe reaction management")],

  "IM-MOD-06-TOP-01": [img("Servier_Medical_Art_-_Thyroid_gland.svg", "Hyperthyroidism", "Graves and thyroiditis")],
  "IM-MOD-06-TOP-02": [img("Servier_Medical_Art_-_Thyroid_gland.svg", "Hypothyroidism", "TSH replacement")],

  "IM-MOD-07-TOP-01": [img("Servier_Medical_Art_-_Tuberculosis.svg", "Tuberculosis", "TB pathophysiology and treatment")],

  "IM-MOD-08-TOP-01": [img("Servier_Medical_Art_-_Stomach.svg", "Peptic Ulcer Disease", "H. pylori infection")],
  "IM-MOD-08-TOP-02": [img("Servier_Medical_Art_-_Digestive_system.svg", "Inflammatory Bowel Disease", "Crohn's and UC")],

  "IM-MOD-09-TOP-01": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Stroke", "Ischemic and hemorrhagic")],
  "IM-MOD-09-TOP-02": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Epilepsy", "Seizure management")],

  "IM-MOD-10-TOP-01": [img("Servier_Medical_Art_-_Antibody.svg", "HIV/AIDS", "ART and opportunistic infections")],

  "IM-MOD-11-TOP-01": [img("Servier_Medical_Art_-_Sepsis.svg", "Sepsis", "SIRS and septic shock")],

  "IM-MOD-12-TOP-01": [img("Servier_Medical_Art_-_Red_blood_cell.svg", "Anemia", "Iron and vitamin B12 deficiency")],

  // ========== SURGERY (SU) - 10 MODULES ==========
  "SU-MOD-01-TOP-01": [img("Servier_Medical_Art_-_Wound.svg", "Wound Healing", "Primary and secondary intention")],
  "SU-MOD-01-TOP-02": [img("Servier_Medical_Art_-_Inflammation.svg", "Surgical Infections", "Prevention and management")],

  "SU-MOD-02-TOP-01": [img("Servier_Medical_Art_-_Heart_anterior_view.svg", "Cardiac Surgery", "Valve and CABG")],

  "SU-MOD-03-TOP-01": [img("Servier_Medical_Art_-_Lungs_anterior_view.svg", "Thoracic Surgery", "Pneumothorax and resection")],

  "SU-MOD-04-TOP-01": [img("Servier_Medical_Art_-_Breast.svg", "Breast Examination & Lumps", "Clinical breast examination")],

  "SU-MOD-05-TOP-01": [img("Servier_Medical_Art_-_Kidney_cross_section.svg", "Renal Surgery", "Nephrectomy")],

  "SU-MOD-06-TOP-01": [img("Servier_Medical_Art_-_Breast.svg", "Breast Surgery", "Mastectomy and reconstruction")],

  "SU-MOD-07-TOP-01": [img("Servier_Medical_Art_-_Prostate.svg", "Urological Surgery", "Prostatectomy")],

  "SU-MOD-08-TOP-01": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Neurosurgery", "Craniotomy and tumors")],

  "SU-MOD-09-TOP-01": [img("Servier_Medical_Art_-_Vascular.svg", "Vascular Surgery", "Aneurysm and bypass")],

  "SU-MOD-10-TOP-01": [img("Servier_Medical_Art_-_Abdomen.svg", "Abdominal Emergency", "Acute abdomen management")],

  // ========== OBSTETRICS & GYNECOLOGY (OG) - 8 MODULES ==========
  "OG-MOD-01-TOP-01": [img("Servier_Medical_Art_-_Uterus.svg", "Normal Pregnancy", "Physiological changes")],
  "OG-MOD-01-TOP-02": [img("Servier_Medical_Art_-_Uterus.svg", "Prenatal Care", "Screening and monitoring")],

  "OG-MOD-02-TOP-01": [img("Servier_Medical_Art_-_Uterus.svg", "Labor and Delivery", "Stages of labor")],

  "OG-MOD-03-TOP-01": [img("Servier_Medical_Art_-_Ovary.svg", "Contraception", "Methods and effectiveness")],

  "OG-MOD-04-TOP-01": [img("Servier_Medical_Art_-_Uterus.svg", "Infertility", "Evaluation and treatment")],

  "OG-MOD-05-TOP-01": [img("Servier_Medical_Art_-_Ovary.svg", "Menopause", "Hormonal changes and HRT")],

  "OG-MOD-06-TOP-01": [img("Servier_Medical_Art_-_Ovary.svg", "Ovarian Pathology", "Cysts and tumors")],

  "OG-MOD-07-TOP-01": [img("Servier_Medical_Art_-_Uterus.svg", "Uterine Pathology", "Fibroids and cancer")],

  "OG-MOD-08-TOP-01": [img("Servier_Medical_Art_-_Uterus.svg", "High-Risk Obstetrics", "Preeclampsia and GDM")],

  // ========== PEDIATRICS (PE) - 8 MODULES ==========
  "PE-MOD-01-TOP-01": [img("Servier_Medical_Art_-_Animal_cell.svg", "Neonatal Physiology", "Transition to extrauterine life")],

  "PE-MOD-02-TOP-01": [img("Servier_Medical_Art_-_Lungs_anterior_view.svg", "Pediatric Respiratory", "Common infections")],

  "PE-MOD-03-TOP-01": [img("Servier_Medical_Art_-_Heart_anterior_view.svg", "Pediatric Cardiology", "Congenital heart disease")],

  "PE-MOD-04-TOP-01": [img("Servier_Medical_Art_-_Stomach.svg", "Pediatric GI", "Diarrhea and malnutrition")],

  "PE-MOD-05-TOP-01": [img("Servier_Medical_Art_-_Kidney_cross_section.svg", "Pediatric Renal", "Acute glomerulonephritis")],

  "PE-MOD-06-TOP-01": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Pediatric Neurology", "Seizures and developmental delay")],

  "PE-MOD-07-TOP-01": [img("Servier_Medical_Art_-_Red_blood_cell.svg", "Pediatric Hematology", "Sickle cell and thalassemia")],

  "PE-MOD-08-TOP-01": [img("Servier_Medical_Art_-_Pancreas.svg", "Pediatric Endocrinology", "Type 1 DM")],

  // ========== OPHTHALMOLOGY (OP) - 5 MODULES ==========
  "OP-MOD-01-TOP-01": [img("Servier_Medical_Art_-_Eye_anatomy.svg", "Refractive Errors", "Myopia and hyperopia")],

  "OP-MOD-02-TOP-01": [img("Servier_Medical_Art_-_Eye_anatomy.svg", "Cataracts", "Age-related opacification")],

  "OP-MOD-03-TOP-01": [img("Servier_Medical_Art_-_Eye_anatomy.svg", "Glaucoma", "IOP elevation and management")],

  "OP-MOD-04-TOP-01": [img("Servier_Medical_Art_-_Eye_anatomy.svg", "Retinal Diseases", "Diabetic retinopathy and AMD")],

  "OP-MOD-05-TOP-01": [img("Servier_Medical_Art_-_Eye_anatomy.svg", "Ocular Infections", "Conjunctivitis and keratitis")],

  // ========== ENT (EN) - 5 MODULES ==========
  "EN-MOD-01-TOP-01": [img("Servier_Medical_Art_-_Ear_anatomy.svg", "Otitis Media", "Infection and effusion")],

  "EN-MOD-02-TOP-01": [img("Servier_Medical_Art_-_Ear_anatomy.svg", "Hearing Loss", "Conductive and sensorineural")],

  "EN-MOD-03-TOP-01": [img("Servier_Medical_Art_-_Thyroid_gland.svg", "Sinusitis", "Acute and chronic")],

  "EN-MOD-04-TOP-01": [img("Servier_Medical_Art_-_Thyroid_gland.svg", "Laryngitis", "Vocal cord pathology")],

  "EN-MOD-05-TOP-01": [img("Servier_Medical_Art_-_Thyroid_gland.svg", "Pharyngeal Pathology", "Tonsilitis and abscess")],

  // ========== ORTHOPEDICS (OR) - 6 MODULES ==========
  "OR-MOD-01-TOP-01": [img("Servier_Medical_Art_-_Bone_cross_section.svg", "Fracture Healing", "Bone healing stages")],

  "OR-MOD-02-TOP-01": [img("Servier_Medical_Art_-_Hip_joint.svg", "Pelvis and Hip", "Hip dysplasia and OA")],

  "OR-MOD-03-TOP-01": [img("Servier_Medical_Art_-_Knee_joint.svg", "Knee Pathology", "Meniscal injury and ACL tear")],

  "OR-MOD-04-TOP-01": [img("Servier_Medical_Art_-_Shoulder_joint.svg", "Shoulder Pathology", "Rotator cuff injury")],

  "OR-MOD-05-TOP-01": [img("Servier_Medical_Art_-_Vertebral_column.svg", "Spinal Pathology", "Scoliosis and stenosis")],

  "OR-MOD-06-TOP-01": [img("Servier_Medical_Art_-_Bone_cross_section.svg", "Metabolic Bone Disease", "Osteoporosis and rickets")],

  // ========== DERMATOLOGY (DR) - 5 MODULES ==========
  "DR-MOD-01-TOP-01": [img("Servier_Medical_Art_-_Skin_cross_section.svg", "Eczema and Dermatitis", "Allergic and irritant")],

  "DR-MOD-02-TOP-01": [img("Servier_Medical_Art_-_Skin_cross_section.svg", "Infections", "Bacterial and fungal")],

  "DR-MOD-03-TOP-01": [img("Servier_Medical_Art_-_Skin_cross_section.svg", "Psoriasis", "Chronic inflammatory condition")],

  "DR-MOD-04-TOP-01": [img("Servier_Medical_Art_-_Skin_cross_section.svg", "Skin Cancers", "Melanoma and non-melanoma")],

  "DR-MOD-05-TOP-01": [img("Servier_Medical_Art_-_Skin_cross_section.svg", "Acne", "Sebaceous gland pathology")],

  // ========== FORENSIC MEDICINE (FM) - 6 MODULES ==========
  "FM-MOD-01-TOP-01": [img("Servier_Medical_Art_-_Wound.svg", "Wound Analysis", "Blunt and sharp injury")],

  "FM-MOD-02-TOP-01": [img("Servier_Medical_Art_-_Lungs_anterior_view.svg", "Asphyxia", "Hanging and strangulation")],

  "FM-MOD-03-TOP-01": [img("Servier_Medical_Art_-_Anatomy.svg", "Sexual Assault", "Examination and evidence")],

  "FM-MOD-04-TOP-01": [img("Servier_Medical_Art_-_Anatomy.svg", "Poisoning", "Common toxins")],

  "FM-MOD-05-TOP-01": [img("Servier_Medical_Art_-_Anatomy.svg", "Burns", "Thermal injury assessment")],

  "FM-MOD-06-TOP-01": [img("Servier_Medical_Art_-_Anatomy.svg", "Death Certification", "Cause and manner of death")],

  // ========== COMMUNITY MEDICINE (CM) - 8 MODULES ==========
  "CM-MOD-01-TOP-01": [img("Servier_Medical_Art_-_Epidemiology.svg", "Epidemiology", "Disease surveillance")],

  "CM-MOD-02-TOP-01": [img("Servier_Medical_Art_-_Epidemiology.svg", "Infection Control", "Sterilization and sanitation")],

  "CM-MOD-03-TOP-01": [img("Servier_Medical_Art_-_Epidemiology.svg", "Vaccination", "Immunization schedules")],

  "CM-MOD-04-TOP-01": [img("Servier_Medical_Art_-_Epidemiology.svg", "Water and Sanitation", "Public health")],

  "CM-MOD-05-TOP-01": [img("Servier_Medical_Art_-_Epidemiology.svg", "Nutrition", "Community nutrition programs")],

  "CM-MOD-06-TOP-01": [img("Servier_Medical_Art_-_Epidemiology.svg", "Maternal and Child Health", "MCH services")],

  "CM-MOD-07-TOP-01": [img("Servier_Medical_Art_-_Epidemiology.svg", "Non-Communicable Diseases", "NCD prevention")],

  "CM-MOD-08-TOP-01": [img("Servier_Medical_Art_-_Epidemiology.svg", "Research Methodology", "Study designs")],

  // ========== PSYCHIATRY (PS) - 6 MODULES ==========
  "PS-MOD-01-TOP-01": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Depression", "Major depressive disorder")],

  "PS-MOD-02-TOP-01": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Anxiety Disorders", "Panic and phobia")],

  "PS-MOD-03-TOP-01": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Psychosis", "Schizophrenia")],

  "PS-MOD-04-TOP-01": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Bipolar Disorder", "Mood episodes")],

  "PS-MOD-05-TOP-01": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Substance Abuse", "Addiction and withdrawal")],

  "PS-MOD-06-TOP-01": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Personality Disorders", "Cluster A, B, C")],

  // ========== RADIOLOGY (RD) - 4 MODULES ==========
  "RD-MOD-01-TOP-01": [img("Servier_Medical_Art_-_Heart_anterior_view.svg", "Cardiac Imaging", "Chest X-ray and CT")],

  "RD-MOD-02-TOP-01": [img("Servier_Medical_Art_-_Lungs_anterior_view.svg", "Thoracic Imaging", "Pneumonia and TB")],

  "RD-MOD-03-TOP-01": [img("Servier_Medical_Art_-_Abdomen.svg", "Abdominal Imaging", "Ultrasound and CT abdomen")],

  "RD-MOD-04-TOP-01": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Neuro Imaging", "CT and MRI brain")],

  // ========== ANESTHESIOLOGY (AS) - 4 MODULES ==========
  "AS-MOD-01-TOP-01": [img("Servier_Medical_Art_-_Syringe.svg", "Anesthetic Agents", "Induction and maintenance")],

  "AS-MOD-02-TOP-01": [img("Servier_Medical_Art_-_Syringe.svg", "Airway Management", "Intubation and difficult airway")],

  "AS-MOD-03-TOP-01": [img("Servier_Medical_Art_-_Heart_anterior_view.svg", "Hemodynamic Monitoring", "BP and cardiac output")],

  "AS-MOD-04-TOP-01": [img("Servier_Medical_Art_-_Lungs_anterior_view.svg", "Perioperative Management", "Preoperative assessment")],

  // ========== ADDITIONAL MEDICINE (IM) TOPICS - EXPANDED ==========
  "IM-MOD-01-TOP-05": [img("Servier_Medical_Art_-_Heart_anterior_view.svg", "Infective Endocarditis", "Heart valve infection")],
  "IM-MOD-01-TOP-06": [img("Servier_Medical_Art_-_Heart_internal_anatomy.svg", "Rheumatic Heart Disease", "Valvular involvement")],

  "IM-MOD-02-TOP-04": [img("Servier_Medical_Art_-_Lungs_anterior_view.svg", "Pulmonary Tuberculosis", "TB diagnosis and DOTS")],
  "IM-MOD-02-TOP-05": [img("Servier_Medical_Art_-_Lungs_anterior_view.svg", "Pleural Effusion & Pneumothorax", "Pleural diseases")],

  "IM-MOD-03-TOP-03": [img("Servier_Medical_Art_-_Liver.svg", "Hepatitis & Cirrhosis", "Viral hepatitis and portal hypertension")],
  "IM-MOD-03-TOP-04": [img("Servier_Medical_Art_-_Liver.svg", "Jaundice & Liver Failure", "Acute and chronic liver failure")],
  "IM-MOD-03-TOP-05": [img("Servier_Medical_Art_-_Pancreas.svg", "Acute & Chronic Pancreatitis", "Pancreatitis management")],

  "IM-MOD-04-TOP-03": [img("Servier_Medical_Art_-_Kidney_cross_section.svg", "Nephrotic & Nephritic Syndrome", "Glomerulonephritis")],
  "IM-MOD-04-TOP-04": [img("Servier_Medical_Art_-_Kidney_cross_section.svg", "Urinary Tract Infections", "UTI diagnosis and treatment")],

  "IM-MOD-05-TOP-03": [img("Servier_Medical_Art_-_Adrenal_gland.svg", "Adrenal Disorders", "Cushing's and Addison's disease")],
  "IM-MOD-05-TOP-04": [img("Servier_Medical_Art_-_Pituitary_gland.svg", "Pituitary Disorders", "Acromegaly and hypopituitarism")],
  "IM-MOD-05-TOP-05": [img("Servier_Medical_Art_-_Bone_cross_section.svg", "Metabolic Bone Disease", "Osteoporosis and rickets")],
  "IM-MOD-05-TOP-06": [img("Servier_Medical_Art_-_Femur.svg", "Geriatric Medicine", "Age-related changes and management")],
  "IM-MOD-05-TOP-07": [img("Servier_Medical_Art_-_DNA_double_helix.svg", "Clinical Genetics & Genetic Counseling", "Genetic disorders and counseling")],
  "IM-MOD-05-TOP-08": [img("Servier_Medical_Art_-_Pancreas.svg", "Nutritional & Metabolic Disorders", "Nutritional deficiencies and obesity")],

  "IM-MOD-06-TOP-03": [img("Servier_Medical_Art_-_Red_blood_cell.svg", "Leukemias & Lymphomas", "Hematologic malignancies")],
  "IM-MOD-06-TOP-04": [img("Servier_Medical_Art_-_Red_blood_cell.svg", "Bleeding & Coagulation Disorders", "Coagulopathy management")],

  "IM-MOD-07-TOP-02": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Epilepsy", "Seizure classification and antiepileptic drugs")],
  "IM-MOD-07-TOP-03": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Meningitis & Encephalitis", "CNS infections")],
  "IM-MOD-07-TOP-04": [img("Servier_Medical_Art_-_Neuron.svg", "Peripheral Neuropathy & GBS", "Nerve disorders")],
  "IM-MOD-07-TOP-05": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Parkinson's & Movement Disorders", "Extrapyramidal disorders")],
  "IM-MOD-07-TOP-06": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Headache & Migraine", "Headache management")],

  "IM-MOD-08-TOP-03": [img("Servier_Medical_Art_-_Bone_cross_section.svg", "Gout & Pseudogout", "Crystal arthropathies")],
  "IM-MOD-08-TOP-04": [img("Servier_Medical_Art_-_Vertebral_column.svg", "Ankylosing Spondylitis", "Spondyloarthropathies")],
  "IM-MOD-08-TOP-05": [img("Servier_Medical_Art_-_Antibody.svg", "SLE & Antiphospholipid Syndrome", "Thrombotic disease")],
  "IM-MOD-08-TOP-06": [img("Servier_Medical_Art_-_Antibody.svg", "Vasculitis", "Systemic vasculitis")],
  "IM-MOD-08-TOP-07": [img("Servier_Medical_Art_-_Skeletal_muscle.svg", "Scleroderma & Polymyositis", "Inflammatory myopathies")],

  "IM-MOD-09-TOP-03": [img("Servier_Medical_Art_-_Gram_positive_bacterium.svg", "Typhoid & Enteric Fever", "Salmonella typhi")],
  "IM-MOD-09-TOP-04": [img("Servier_Medical_Art_-_HIV.svg", "HIV/AIDS & Opportunistic Infections", "ART and infection management")],
  "IM-MOD-09-TOP-05": [img("Servier_Medical_Art_-_Sepsis.svg", "Sepsis & SIRS", "Septic shock management")],
  "IM-MOD-09-TOP-06": [img("Servier_Medical_Art_-_Parasite.svg", "Protozoal Infections", "Parasitic diseases")],
  "IM-MOD-09-TOP-07": [img("Servier_Medical_Art_-_Parasite.svg", "Helminthic Infections", "Worm infections")],
  "IM-MOD-09-TOP-08": [img("Servier_Medical_Art_-_Fungus.svg", "Fungal Infections", "Fungal diseases in immunocompromised")],
  "IM-MOD-09-TOP-09": [img("Servier_Medical_Art_-_Gram_negative_bacterium.svg", "Rickettsial & Spirochetal Infections", "Atypical infections")],
  "IM-MOD-09-TOP-10": [img("Servier_Medical_Art_-_Gram_positive_bacterium.svg", "Hospital Acquired Infections & Immunocompromised Host", "Nosocomial infections")],

  "IM-MOD-10-TOP-02": [img("Servier_Medical_Art_-_Syringe.svg", "Poisoning & Overdose", "Toxin management")],
  "IM-MOD-10-TOP-03": [img("Servier_Medical_Art_-_Syringe.svg", "Snake Bite & Envenomation", "Antivenom therapy")],
  "IM-MOD-10-TOP-04": [img("Servier_Medical_Art_-_Stethoscope.svg", "CPR & Basic Life Support", "Resuscitation algorithms")],
  "IM-MOD-10-TOP-05": [img("Servier_Medical_Art_-_Blood_pressure_measurement.svg", "Electrolyte & Acid-Base Disorders", "Metabolic derangements")],
  "IM-MOD-10-TOP-06": [img("Servier_Medical_Art_-_Stethoscope.svg", "Pain Management & Palliative Care", "End-of-life care")],

  "IM-MOD-11-TOP-02": [img("Servier_Medical_Art_-_Syringe.svg", "Snake Bite & Envenomation (Detailed)", "ASV and complications")],
  "IM-MOD-11-TOP-03": [img("Servier_Medical_Art_-_Syringe.svg", "Organophosphorus & Pesticide Poisoning", "Cholinergic toxidromes")],
  "IM-MOD-11-TOP-04": [img("Servier_Medical_Art_-_Syringe.svg", "Corrosive & Drug Poisoning", "Caustic ingestions")],
  "IM-MOD-11-TOP-05": [img("Servier_Medical_Art_-_Syringe.svg", "Scorpion Sting, Insect Bites & Environmental Toxins", "Envenomation and heavy metals")],

  "IM-MOD-12-TOP-02": [img("Servier_Medical_Art_-_Lungs_anterior_view.svg", "ARDS & Mechanical Ventilation", "Respiratory failure management")],
  "IM-MOD-12-TOP-03": [img("Servier_Medical_Art_-_Sepsis.svg", "Sepsis & Multiorgan Dysfunction", "Organ failure management")],
  "IM-MOD-12-TOP-04": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Coma & Altered Consciousness", "Glasgow Coma Scale and management")],
  "IM-MOD-12-TOP-05": [img("Servier_Medical_Art_-_Red_blood_cell.svg", "DIC & Coagulopathy in Critical Care", "Disseminated intravascular coagulation")],

  // ========== ADDITIONAL SURGERY (SU) TOPICS - EXPANDED ==========
  "SU-MOD-01-TOP-03": [img("Servier_Medical_Art_-_Wound.svg", "Preoperative & Postoperative Care", "Perioperative management")],
  "SU-MOD-01-TOP-04": [img("Servier_Medical_Art_-_Red_blood_cell.svg", "Blood Transfusion & Hemostasis", "Transfusion management")],
  "SU-MOD-01-TOP-05": [img("Servier_Medical_Art_-_Skin_cross_section.svg", "Burns & Wound Management", "Burn classification and Parkland formula")],

  "SU-MOD-02-TOP-02": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Head Injury", "Glasgow Coma Scale")],
  "SU-MOD-02-TOP-03": [img("Servier_Medical_Art_-_Lungs_anterior_view.svg", "Chest & Abdominal Trauma", "Trauma management")],
  "SU-MOD-02-TOP-04": [img("Servier_Medical_Art_-_Skin_cross_section.svg", "Burns", "Burn assessment and fluid management")],

  "SU-MOD-03-TOP-02": [img("Servier_Medical_Art_-_Lymph.svg", "Salivary Gland Tumors", "Parotidectomy and sialadenitis")],
  "SU-MOD-03-TOP-03": [img("Servier_Medical_Art_-_Thyroid_gland.svg", "Neck Swellings & Lymph Nodes", "Lymphadenopathy approach")],
  "SU-MOD-03-TOP-04": [img("Servier_Medical_Art_-_Baby.svg", "Cleft Lip & Palate", "Cleft repair techniques")],

  "SU-MOD-04-TOP-02": [img("Servier_Medical_Art_-_Breast.svg", "Fibroadenoma & Fibrocystic Disease", "Benign breast pathology")],
  "SU-MOD-04-TOP-03": [img("Servier_Medical_Art_-_Breast.svg", "Breast Carcinoma", "Breast cancer staging and surgery")],

  "SU-MOD-05-TOP-02": [img("Servier_Medical_Art_-_Intestine_cross_section.svg", "Inguinal & Femoral Hernia", "Hernia repair techniques")],
  "SU-MOD-05-TOP-03": [img("Servier_Medical_Art_-_Digestive_system.svg", "Intestinal Obstruction", "Small and large bowel obstruction")],
  "SU-MOD-05-TOP-04": [img("Servier_Medical_Art_-_Stomach.svg", "Peptic Ulcer: Surgical Management", "Surgical ulcer treatment")],
  "SU-MOD-05-TOP-05": [img("Servier_Medical_Art_-_Digestive_system.svg", "Colorectal Carcinoma", "Colorectal cancer surgery")],
  "SU-MOD-05-TOP-06": [img("Servier_Medical_Art_-_Intestine_cross_section.svg", "Anorectal Diseases", "Hemorrhoids and fistulas")],

  "SU-MOD-06-TOP-02": [img("Servier_Medical_Art_-_Gallbladder.svg", "Obstructive Jaundice", "Bile duct obstruction")],
  "SU-MOD-06-TOP-03": [img("Servier_Medical_Art_-_Liver.svg", "Liver Abscess & Portal Hypertension", "Portal hypertension surgery")],
  "SU-MOD-06-TOP-04": [img("Servier_Medical_Art_-_Pancreas.svg", "Pancreatic Tumors", "Pancreatic cancer and Whipple")],

  "SU-MOD-07-TOP-02": [img("Servier_Medical_Art_-_Aorta.svg", "DVT & Peripheral Arterial Disease", "Vascular insufficiency")],
  "SU-MOD-07-TOP-03": [img("Servier_Medical_Art_-_Aorta.svg", "Aneurysms", "Aortic aneurysm repair")],
  "SU-MOD-07-TOP-04": [img("Servier_Medical_Art_-_Aorta.svg", "Arterial Diseases", "Limb ischemia and claudication")],
  "SU-MOD-07-TOP-05": [img("Servier_Medical_Art_-_Thrombus.svg", "Venous Diseases", "Venous thromboembolism")],

  "SU-MOD-08-TOP-02": [img("Servier_Medical_Art_-_Kidney_cross_section.svg", "BPH & Prostate Carcinoma", "Prostate pathology")],
  "SU-MOD-08-TOP-03": [img("Servier_Medical_Art_-_Urinary_system.svg", "Bladder & Renal Tumors", "Genitourinary malignancies")],
  "SU-MOD-08-TOP-04": [img("Servier_Medical_Art_-_Urinary_system.svg", "Urethral Stricture & Phimosis", "Urethral pathology")],

  "SU-MOD-09-TOP-02": [img("Servier_Medical_Art_-_Skin_cross_section.svg", "Skin Cancers", "Melanoma and keratinocyte carcinomas")],
  "SU-MOD-09-TOP-03": [img("Servier_Medical_Art_-_X-ray.svg", "Surgical Oncology Principles", "Cancer staging and management")],
  "SU-MOD-09-TOP-04": [img("Servier_Medical_Art_-_Skin_cross_section.svg", "Skin Tumors", "Skin tumor management")],

  "SU-MOD-10-TOP-02": [img("Servier_Medical_Art_-_Baby.svg", "Pyloric Stenosis & Intussusception", "Pediatric surgical emergencies")],
  "SU-MOD-10-TOP-03": [img("Servier_Medical_Art_-_Baby.svg", "Undescended Testis & Wilms Tumor", "Pediatric urologic and renal cancers")],

  // ========== ADDITIONAL OBSTETRICS & GYNECOLOGY (OG) TOPICS - EXPANDED ==========
  "OG-MOD-01-TOP-03": [img("Servier_Medical_Art_-_Uterus.svg", "Physiological Changes in Pregnancy", "Maternal adaptations")],
  "OG-MOD-01-TOP-04": [img("Servier_Medical_Art_-_Fetus.svg", "Fetal Growth & Assessment", "Doppler and NST")],
  "OG-MOD-01-TOP-05": [img("Servier_Medical_Art_-_Uterus.svg", "Nutrition in Pregnancy", "Nutritional requirements")],

  "OG-MOD-02-TOP-02": [img("Servier_Medical_Art_-_Placenta.svg", "Antepartum Hemorrhage", "APH management")],
  "OG-MOD-02-TOP-03": [img("Servier_Medical_Art_-_Pancreas.svg", "Gestational Diabetes", "GDM screening and management")],
  "OG-MOD-02-TOP-04": [img("Servier_Medical_Art_-_Uterus.svg", "Ectopic Pregnancy & Abortion", "Early pregnancy complications")],
  "OG-MOD-02-TOP-05": [img("Servier_Medical_Art_-_Kidney_cross_section.svg", "Rh Incompatibility & IUGR", "Rh isoimmunization")],

  "OG-MOD-03-TOP-02": [img("Servier_Medical_Art_-_Uterus.svg", "Abnormal Labor & Dystocia", "Obstructed labor")],
  "OG-MOD-03-TOP-03": [img("Servier_Medical_Art_-_Uterus.svg", "Cesarean Section", "LSCS indications and technique")],
  "OG-MOD-03-TOP-04": [img("Servier_Medical_Art_-_Uterus.svg", "Instrumental Delivery", "Forceps and vacuum extraction")],

  "OG-MOD-04-TOP-02": [img("Servier_Medical_Art_-_Blood_pressure_measurement.svg", "Postpartum Hemorrhage", "PPH management")],
  "OG-MOD-04-TOP-03": [img("Servier_Medical_Art_-_Breast.svg", "Breastfeeding & Lactation", "Lactation physiology")],
  "OG-MOD-04-TOP-04": [img("Servier_Medical_Art_-_Baby.svg", "Neonatal Resuscitation & Care", "Newborn care and danger signs")],

  "OG-MOD-05-TOP-02": [img("Servier_Medical_Art_-_Ovary.svg", "PCOS", "PCOS pathophysiology and management")],
  "OG-MOD-05-TOP-03": [img("Servier_Medical_Art_-_Uterus.svg", "Uterine Fibroids", "Fibroid management")],
  "OG-MOD-05-TOP-04": [img("Servier_Medical_Art_-_Uterus.svg", "Endometriosis & Adenomyosis", "Endometrial disorders")],
  "OG-MOD-05-TOP-05": [img("Servier_Medical_Art_-_Uterus.svg", "PID & STIs", "Pelvic inflammatory disease")],

  "OG-MOD-06-TOP-02": [img("Servier_Medical_Art_-_Ovary.svg", "Ovarian Tumors", "Ovarian cancer and cysts")],
  "OG-MOD-06-TOP-03": [img("Servier_Medical_Art_-_Uterus.svg", "Endometrial & Gestational Trophoblastic Disease", "Uterine cancers")],
  "OG-MOD-06-TOP-04": [img("Servier_Medical_Art_-_Skin_cross_section.svg", "Vulvar & Vaginal Pathology", "Vulvovaginal disorders")],

  "OG-MOD-07-TOP-02": [img("Servier_Medical_Art_-_Ovary.svg", "Infertility", "Infertility workup and ART")],
  "OG-MOD-07-TOP-03": [img("Servier_Medical_Art_-_Uterus.svg", "MTP & Legal Aspects", "Safe abortion practices")],
  "OG-MOD-07-TOP-04": [img("Servier_Medical_Art_-_Baby.svg", "Adolescent Gynecology & Menopause", "Menopause and HRT")],

  // ========== ADDITIONAL PEDIATRICS (PE) TOPICS - EXPANDED ==========
  "PE-MOD-01-TOP-02": [img("Servier_Medical_Art_-_Baby.svg", "Developmental Milestones", "Motor and language milestones")],
  "PE-MOD-01-TOP-03": [img("Servier_Medical_Art_-_Baby.svg", "Short Stature & Failure to Thrive", "Growth disorders")],
  "PE-MOD-01-TOP-04": [img("Servier_Medical_Art_-_Baby.svg", "Vital Statistics & Child Health Indicators", "Child health indicators")],

  "PE-MOD-02-TOP-02": [img("Servier_Medical_Art_-_Baby.svg", "Prematurity & Low Birth Weight", "Prematurity complications")],
  "PE-MOD-02-TOP-03": [img("Servier_Medical_Art_-_Bilirubin.svg", "Neonatal Jaundice", "Phototherapy and exchange transfusion")],
  "PE-MOD-02-TOP-04": [img("Servier_Medical_Art_-_Gram_positive_bacterium.svg", "Neonatal Sepsis", "Early and late onset sepsis")],
  "PE-MOD-02-TOP-05": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Birth Asphyxia & HIE", "Hypoxic ischemic encephalopathy")],

  "PE-MOD-03-TOP-02": [img("Servier_Medical_Art_-_Baby.svg", "Protein-Energy Malnutrition", "SAM and MAM")],
  "PE-MOD-03-TOP-03": [img("Servier_Medical_Art_-_Syringe.svg", "Vitamin Deficiencies", "Vitamin deficiency diseases")],
  "PE-MOD-03-TOP-04": [img("Servier_Medical_Art_-_Syringe.svg", "Immunization Schedule", "Vaccination schedule")],
  "PE-MOD-03-TOP-05": [img("Servier_Medical_Art_-_Stomach.svg", "Pediatric GI & Fluid Management", "ORS and diarrheal management")],

  "PE-MOD-04-TOP-02": [img("Servier_Medical_Art_-_Lungs_anterior_view.svg", "Pneumonia & ARI", "Acute respiratory infection")],
  "PE-MOD-04-TOP-03": [img("Servier_Medical_Art_-_Digestive_system.svg", "Diarrheal Diseases", "Acute diarrhea management")],
  "PE-MOD-04-TOP-04": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Meningitis & Encephalitis", "CNS infections in children")],
  "PE-MOD-04-TOP-05": [img("Servier_Medical_Art_-_Tuberculosis.svg", "Tuberculosis in Children", "Pediatric TB")],

  "PE-MOD-05-TOP-02": [img("Servier_Medical_Art_-_Heart_anterior_view.svg", "Rheumatic Fever in Children", "RF and carditis")],
  "PE-MOD-05-TOP-03": [img("Servier_Medical_Art_-_Lungs_anterior_view.svg", "Childhood Asthma & Croup", "Pediatric respiratory diseases")],
  "PE-MOD-05-TOP-04": [img("Servier_Medical_Art_-_Skin_cross_section.svg", "Pediatric Dermatology", "Pediatric rashes and dermatitis")],

  "PE-MOD-06-TOP-02": [img("Servier_Medical_Art_-_Kidney_cross_section.svg", "Nephrotic Syndrome", "Childhood nephrotic syndrome")],
  "PE-MOD-06-TOP-03": [img("Servier_Medical_Art_-_Kidney_cross_section.svg", "AGN & UTI in Children", "Glomerulonephritis and UTI")],

  "PE-MOD-07-TOP-02": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Cerebral Palsy", "Cerebral palsy management")],
  "PE-MOD-07-TOP-03": [img("Servier_Medical_Art_-_DNA_double_helix.svg", "Down Syndrome & Genetic Disorders", "Genetic and chromosomal disorders")],

  "PE-MOD-08-TOP-02": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Status Epilepticus", "Seizure emergency management")],
  "PE-MOD-08-TOP-03": [img("Servier_Medical_Art_-_Syringe.svg", "Poisoning in Children", "Pediatric toxicology")],
  "PE-MOD-08-TOP-04": [img("Servier_Medical_Art_-_Baby.svg", "Pediatric Surgical Emergencies", "Acute surgical emergencies in children")],

  "PE-MOD-09-TOP-01": [img("Servier_Medical_Art_-_Pancreas.svg", "Pediatric Endocrinology", "Childhood diabetes and thyroid disorders")],
  "PE-MOD-09-TOP-02": [img("Servier_Medical_Art_-_Heart_anterior_view.svg", "Pediatric Rheumatology", "JIA and systemic diseases")],
  "PE-MOD-09-TOP-03": [img("Servier_Medical_Art_-_Microscope.svg", "Pediatric Oncology", "Pediatric cancers")],
  "PE-MOD-09-TOP-04": [img("Servier_Medical_Art_-_Baby.svg", "Adolescent Health", "Puberty and adolescent care")],
  "PE-MOD-09-TOP-05": [img("Servier_Medical_Art_-_Hospital.svg", "Social Pediatrics", "Child abuse and welfare")],

  // ========== ADDITIONAL FORENSIC MEDICINE (FM) TOPICS - EXPANDED ==========
  "FM-MOD-01-TOP-02": [img("Servier_Medical_Art_-_Consent.svg", "Consent & Negligence", "Medical negligence and consent")],
  "FM-MOD-01-TOP-03": [img("Servier_Medical_Art_-_Anatomy.svg", "Medicolegal Reports & Courts", "Court testimony and documentation")],
  "FM-MOD-01-TOP-04": [img("Servier_Medical_Art_-_Anatomy.svg", "IPC Sections Relevant to Medicine", "Legal framework and statutes")],
  "FM-MOD-01-TOP-05": [img("Servier_Medical_Art_-_Anatomy.svg", "Medical Ethics & Legislation", "MTP Act and legislation")],

  "FM-MOD-02-TOP-02": [img("Servier_Medical_Art_-_X-ray.svg", "Estimation of Time Since Death", "Postmortem interval estimation")],
  "FM-MOD-02-TOP-03": [img("Servier_Medical_Art_-_Microscope.svg", "Autopsy: Medicolegal & Clinical", "Autopsy techniques")],
  "FM-MOD-02-TOP-04": [img("Servier_Medical_Art_-_Hospital.svg", "Sudden & Suspicious Death", "Death investigation")],

  "FM-MOD-03-TOP-02": [img("Servier_Medical_Art_-_Operating_room.svg", "Firearm Injuries", "Gunshot wounds and ballistics")],
  "FM-MOD-03-TOP-03": [img("Servier_Medical_Art_-_Trauma.svg", "Regional Injuries & Trauma", "Trauma injury patterns")],
  "FM-MOD-03-TOP-04": [img("Servier_Medical_Art_-_Skin_cross_section.svg", "Thermal & Electrical Injuries", "Burns and electrocution")],

  "FM-MOD-04-TOP-02": [img("Servier_Medical_Art_-_Hospital.svg", "Hanging, Strangulation & Drowning", "Asphyxial deaths")],
  "FM-MOD-04-TOP-03": [img("Servier_Medical_Art_-_Anatomy.svg", "Sexual Offences", "Sexual assault examination")],
  "FM-MOD-04-TOP-04": [img("Servier_Medical_Art_-_Baby.svg", "Infanticide & Abortion", "Infanticide investigation")],

  "FM-MOD-05-TOP-02": [img("Servier_Medical_Art_-_Teeth.svg", "Age Estimation", "Age estimation methods")],
  "FM-MOD-05-TOP-03": [img("Servier_Medical_Art_-_DNA_double_helix.svg", "DNA Fingerprinting", "DNA profiling techniques")],
  "FM-MOD-05-TOP-04": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Forensic Psychiatry", "Mental fitness and criminal responsibility")],
  "FM-MOD-05-TOP-05": [img("Servier_Medical_Art_-_Microscope.svg", "Forensic Sciences", "Forensic investigation methods")],

  "FM-MOD-06-TOP-02": [img("Servier_Medical_Art_-_Syringe.svg", "Corrosive & Metallic Poisons", "Heavy metal and acid poisoning")],
  "FM-MOD-06-TOP-03": [img("Servier_Medical_Art_-_Syringe.svg", "Organic & Plant Poisons", "Organic compound poisoning")],
  "FM-MOD-06-TOP-04": [img("Servier_Medical_Art_-_Syringe.svg", "Snake Bite & Insect Stings", "Envenomation toxicology")],
  "FM-MOD-06-TOP-05": [img("Servier_Medical_Art_-_Hospital.svg", "Environmental & Industrial Toxicology", "Occupational and environmental toxins")],

  // ========== ADDITIONAL COMMUNITY MEDICINE (CM) TOPICS - EXPANDED ==========
  "CM-MOD-01-TOP-02": [img("Servier_Medical_Art_-_Epidemiology.svg", "Epidemiological Methods", "Study designs and statistics")],
  "CM-MOD-01-TOP-03": [img("Servier_Medical_Art_-_Epidemiology.svg", "Measures of Disease Frequency", "Prevalence and incidence")],
  "CM-MOD-01-TOP-04": [img("Servier_Medical_Art_-_Epidemiology.svg", "Biostatistics", "Statistical analysis")],
  "CM-MOD-01-TOP-05": [img("Servier_Medical_Art_-_Epidemiology.svg", "Screening & Surveillance", "Disease surveillance")],
  "CM-MOD-01-TOP-06": [img("Servier_Medical_Art_-_Epidemiology.svg", "Demography & Population Dynamics", "Population health")],
  "CM-MOD-01-TOP-07": [img("Servier_Medical_Art_-_Hospital.svg", "Health Education & Communication", "Health promotion")],
  "CM-MOD-01-TOP-08": [img("Servier_Medical_Art_-_Hospital.svg", "Behavioral Sciences & Health Psychology", "Behavior change models")],

  "CM-MOD-02-TOP-02": [img("Servier_Medical_Art_-_Malaria.svg", "Malaria & Vector-Borne Diseases", "Vector control and prevention")],
  "CM-MOD-02-TOP-03": [img("Servier_Medical_Art_-_HIV.svg", "HIV/AIDS", "HIV epidemiology and NACP")],
  "CM-MOD-02-TOP-04": [img("Servier_Medical_Art_-_Digestive_system.svg", "Diarrheal Diseases & Cholera", "Waterborne disease prevention")],
  "CM-MOD-02-TOP-05": [img("Servier_Medical_Art_-_Liver.svg", "Hepatitis, Typhoid & Polio", "Food and water safety")],
  "CM-MOD-02-TOP-06": [img("Servier_Medical_Art_-_Gram_positive_bacterium.svg", "Leprosy & Rabies", "Elimination and prophylaxis programs")],

  "CM-MOD-03-TOP-02": [img("Servier_Medical_Art_-_Heart_anterior_view.svg", "Cancer Epidemiology", "Cancer prevention programs")],
  "CM-MOD-03-TOP-03": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Mental Health & Substance Abuse", "Mental health and addiction services")],
  "CM-MOD-03-TOP-04": [img("Servier_Medical_Art_-_Eye_anatomy.svg", "Blindness & Disability", "NPCB and disability programs")],

  "CM-MOD-04-TOP-02": [img("Servier_Medical_Art_-_Baby.svg", "Child Health & IMR", "Child mortality reduction")],
  "CM-MOD-04-TOP-03": [img("Servier_Medical_Art_-_Syringe.svg", "Immunization", "Vaccination schedule and coverage")],
  "CM-MOD-04-TOP-04": [img("Servier_Medical_Art_-_Ovary.svg", "Family Planning", "Contraception and spacing")],
  "CM-MOD-04-TOP-05": [img("Servier_Medical_Art_-_Epidemiology.svg", "Demography & Population", "Population policy")],
  "CM-MOD-04-TOP-06": [img("Servier_Medical_Art_-_Baby.svg", "Adolescent & School Health", "School health programs")],

  "CM-MOD-05-TOP-02": [img("Servier_Medical_Art_-_Baby.svg", "Protein-Energy Malnutrition", "Malnutrition management")],
  "CM-MOD-05-TOP-03": [img("Servier_Medical_Art_-_Pancreas.svg", "Vitamin Deficiency Diseases", "Micronutrient deficiency prevention")],
  "CM-MOD-05-TOP-04": [img("Servier_Medical_Art_-_Hospital.svg", "National Nutrition Programs", "ICDS and nutrition interventions")],

  "CM-MOD-06-TOP-02": [img("Servier_Medical_Art_-_Hospital.svg", "Air Pollution & Waste Management", "Environmental sanitation")],
  "CM-MOD-06-TOP-03": [img("Servier_Medical_Art_-_Hospital.svg", "Housing & Ventilation", "Housing standards")],
  "CM-MOD-06-TOP-04": [img("Servier_Medical_Art_-_Hospital.svg", "Occupational Health & Hazards", "Occupational disease prevention")],

  "CM-MOD-07-TOP-02": [img("Servier_Medical_Art_-_Hospital.svg", "National Health Mission & Ayushman Bharat", "Healthcare financing and insurance")],
  "CM-MOD-07-TOP-03": [img("Servier_Medical_Art_-_Hospital.svg", "Health Education & Behavior Change", "Health communication strategies")],
  "CM-MOD-07-TOP-04": [img("Servier_Medical_Art_-_Ambulance.svg", "Disaster Management & International Health", "Disaster preparedness")],
  "CM-MOD-07-TOP-05": [img("Servier_Medical_Art_-_Ambulance.svg", "Disaster Management", "Disaster response and triage")],
  "CM-MOD-07-TOP-06": [img("Servier_Medical_Art_-_Hospital.svg", "Geriatric & Palliative Care in Community", "Community geriatric services")],

  // ========== ADDITIONAL OPHTHALMOLOGY (OP) TOPICS - EXPANDED ==========
  "OP-MOD-01-TOP-02": [img("Servier_Medical_Art_-_Eye_anatomy.svg", "Myopia, Hypermetropia & Astigmatism", "Refractive error correction")],
  "OP-MOD-01-TOP-03": [img("Servier_Medical_Art_-_Eye_anatomy.svg", "Presbyopia & Contact Lenses", "Presbyopia and advanced lenses")],

  "OP-MOD-02-TOP-02": [img("Servier_Medical_Art_-_Eye_anatomy.svg", "Corneal Ulcer & Keratitis", "Corneal infection management")],
  "OP-MOD-02-TOP-03": [img("Servier_Medical_Art_-_Eye_anatomy.svg", "Uveitis", "Uveitis classification and treatment")],
  "OP-MOD-02-TOP-04": [img("Servier_Medical_Art_-_Eye_anatomy.svg", "Cataract", "Cataract phacoemulsification")],
  "OP-MOD-02-TOP-05": [img("Servier_Medical_Art_-_Eye_anatomy.svg", "Eyelid & Lacrimal Disorders", "Ptosis and lacrimal disorders")],
  "OP-MOD-02-TOP-06": [img("Servier_Medical_Art_-_Eye_anatomy.svg", "Scleral & Orbital Diseases", "Orbital cellulitis")],

  "OP-MOD-03-TOP-02": [img("Servier_Medical_Art_-_Eye_anatomy.svg", "Angle Closure Glaucoma", "Acute angle closure management")],
  "OP-MOD-03-TOP-03": [img("Servier_Medical_Art_-_Eye_anatomy.svg", "Secondary & Congenital Glaucoma", "Glaucoma variants")],

  "OP-MOD-04-TOP-02": [img("Servier_Medical_Art_-_Retina.svg", "Retinal Detachment & ARMD", "Retinal pathology")],
  "OP-MOD-04-TOP-03": [img("Servier_Medical_Art_-_Eye_anatomy.svg", "Optic Nerve Diseases", "Optic nerve pathology")],
  "OP-MOD-04-TOP-04": [img("Servier_Medical_Art_-_Eye_anatomy.svg", "Squint & Amblyopia", "Strabismus management")],
  "OP-MOD-04-TOP-05": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Neuro-Ophthalmology", "Neurological eye signs")],

  "OP-MOD-05-TOP-02": [img("Servier_Medical_Art_-_Eye_anatomy.svg", "Blindness & NPCB", "Blindness prevention program")],
  "OP-MOD-05-TOP-03": [img("Servier_Medical_Art_-_Eye_anatomy.svg", "Ocular Tumors", "Retinoblastoma and ocular cancers")],
  "OP-MOD-05-TOP-04": [img("Servier_Medical_Art_-_Syringe.svg", "Ocular Pharmacology & Therapeutics", "Ophthalmic drug delivery")],
  "OP-MOD-05-TOP-05": [img("Servier_Medical_Art_-_Eye_anatomy.svg", "Systemic Diseases & the Eye", "Ocular manifestations of systemic diseases")],

  // ========== ADDITIONAL ENT (EN) TOPICS - EXPANDED ==========
  "EN-MOD-01-TOP-02": [img("Servier_Medical_Art_-_Ear_anatomy.svg", "Otitis Media: Acute & Chronic", "Otitis media complications")],
  "EN-MOD-01-TOP-03": [img("Servier_Medical_Art_-_Ear_anatomy.svg", "Deafness & Hearing Tests", "Audiological assessment")],
  "EN-MOD-01-TOP-04": [img("Servier_Medical_Art_-_Ear_anatomy.svg", "Vertigo & Meniere's Disease", "Vestibular disorders")],
  "EN-MOD-01-TOP-05": [img("Servier_Medical_Art_-_Ear_anatomy.svg", "Otosclerosis & Ear Tumors", "Otologic tumors")],

  "EN-MOD-02-TOP-02": [img("Servier_Medical_Art_-_Larynx.svg", "Rhinitis & Nasal Polyps", "Allergic rhinitis management")],
  "EN-MOD-02-TOP-03": [img("Servier_Medical_Art_-_Larynx.svg", "Sinusitis", "Acute and chronic sinusitis")],
  "EN-MOD-02-TOP-04": [img("Servier_Medical_Art_-_Larynx.svg", "Epistaxis", "Epistaxis management techniques")],
  "EN-MOD-02-TOP-05": [img("Servier_Medical_Art_-_Larynx.svg", "DNS & Nasal Tumors", "Nasal septoplasty and tumors")],

  "EN-MOD-03-TOP-02": [img("Servier_Medical_Art_-_Larynx.svg", "Pharyngitis & Peritonsillar Abscess", "Throat infections")],
  "EN-MOD-03-TOP-03": [img("Servier_Medical_Art_-_Larynx.svg", "Laryngitis & Voice Disorders", "Vocal cord disorders")],
  "EN-MOD-03-TOP-04": [img("Servier_Medical_Art_-_Larynx.svg", "Stridor & Laryngeal Tumors", "Laryngeal pathology")],

  "EN-MOD-04-TOP-02": [img("Servier_Medical_Art_-_Larynx.svg", "Salivary Gland Diseases", "Salivary pathology")],
  "EN-MOD-04-TOP-03": [img("Servier_Medical_Art_-_Larynx.svg", "Deep Neck Space Infections", "Neck space infections")],

  "EN-MOD-05-TOP-02": [img("Servier_Medical_Art_-_Larynx.svg", "Tracheostomy", "Tracheostomy techniques")],
  "EN-MOD-05-TOP-03": [img("Servier_Medical_Art_-_Syringe.svg", "Hearing Aids & Cochlear Implants", "Hearing rehabilitation")],
  "EN-MOD-05-TOP-04": [img("Servier_Medical_Art_-_Hospital.svg", "ENT Emergencies", "ENT emergency management")],

  // ========== ADDITIONAL ORTHOPEDICS (OR) TOPICS - EXPANDED ==========
  "OR-MOD-01-TOP-02": [img("Servier_Medical_Art_-_Bone_cross_section.svg", "Principles of Fracture Management", "Fracture reduction and fixation")],
  "OR-MOD-01-TOP-03": [img("Servier_Medical_Art_-_Bone_cross_section.svg", "Compartment Syndrome & Fat Embolism", "Fracture complications")],
  "OR-MOD-01-TOP-04": [img("Servier_Medical_Art_-_Bone_cross_section.svg", "Principles of Fracture Healing & Complications", "Healing complications")],

  "OR-MOD-02-TOP-02": [img("Servier_Medical_Art_-_Shoulder_joint.svg", "Humerus Fractures", "Humerus fracture management")],
  "OR-MOD-02-TOP-03": [img("Servier_Medical_Art_-_Shoulder_joint.svg", "Forearm & Wrist Fractures", "Wrist fractures")],
  "OR-MOD-02-TOP-04": [img("Servier_Medical_Art_-_Shoulder_joint.svg", "Hand Injuries", "Hand trauma management")],

  "OR-MOD-03-TOP-02": [img("Servier_Medical_Art_-_Knee_joint.svg", "Knee Injuries", "Ligament and meniscal injuries")],
  "OR-MOD-03-TOP-03": [img("Servier_Medical_Art_-_Knee_joint.svg", "Tibia & Ankle Fractures", "Ankle fracture management")],
  "OR-MOD-03-TOP-04": [img("Servier_Medical_Art_-_Knee_joint.svg", "Foot Fractures & Calcaneum", "Foot and calcaneum fractures")],

  "OR-MOD-04-TOP-02": [img("Servier_Medical_Art_-_Vertebral_column.svg", "TB Spine (Pott's Disease)", "Spinal tuberculosis")],
  "OR-MOD-04-TOP-03": [img("Servier_Medical_Art_-_Vertebral_column.svg", "Scoliosis & Spinal Deformities", "Spinal deformity correction")],
  "OR-MOD-04-TOP-04": [img("Servier_Medical_Art_-_Femur.svg", "Pelvic Fractures", "Pelvic ring stability")],

  "OR-MOD-05-TOP-02": [img("Servier_Medical_Art_-_Skeletal_muscle.svg", "Rheumatoid Arthritis", "RA joint changes")],
  "OR-MOD-05-TOP-03": [img("Servier_Medical_Art_-_Bone_cross_section.svg", "Septic Arthritis", "Joint infection management")],
  "OR-MOD-05-TOP-04": [img("Servier_Medical_Art_-_Hip_joint.svg", "Hip Disorders & AVN", "Avascular necrosis management")],
  "OR-MOD-05-TOP-05": [img("Servier_Medical_Art_-_Skeletal_muscle.svg", "Sports Medicine & Rehabilitation", "Sports injury rehabilitation")],

  "OR-MOD-06-TOP-02": [img("Servier_Medical_Art_-_Bone_cross_section.svg", "Bone Tumors", "Bone tumor staging")],
  "OR-MOD-06-TOP-03": [img("Servier_Medical_Art_-_Bone_cross_section.svg", "Osteoporosis & Metabolic Bone Disease", "Bone metabolism disorders")],
  "OR-MOD-06-TOP-04": [img("Servier_Medical_Art_-_Neuron.svg", "Peripheral Nerve Injuries", "Nerve injury repair")],

  // ========== ADDITIONAL DERMATOLOGY (DR) TOPICS - EXPANDED ==========
  "DR-MOD-01-TOP-02": [img("Servier_Medical_Art_-_Skin_cross_section.svg", "Eczema & Contact Dermatitis", "Dermatitis management")],
  "DR-MOD-01-TOP-03": [img("Servier_Medical_Art_-_Skin_cross_section.svg", "Urticaria & Drug Reactions", "Allergic skin reactions")],
  "DR-MOD-01-TOP-04": [img("Servier_Medical_Art_-_Skin_cross_section.svg", "Dermatological Therapeutics", "Topical and systemic therapy")],
  "DR-MOD-01-TOP-05": [img("Servier_Medical_Art_-_Skin_cross_section.svg", "Hair & Nail Disorders", "Alopecia and nail disorders")],

  "DR-MOD-02-TOP-02": [img("Servier_Medical_Art_-_Skin_cross_section.svg", "Bacterial Skin Infections", "Bacterial skin disease")],
  "DR-MOD-02-TOP-03": [img("Servier_Medical_Art_-_Skin_cross_section.svg", "Viral Infections & Scabies", "Viral and parasitic skin disease")],

  "DR-MOD-03-TOP-02": [img("Servier_Medical_Art_-_Skin_cross_section.svg", "Lichen Planus & Pityriasis Rosea", "Papulosquamous disease")],
  "DR-MOD-03-TOP-03": [img("Servier_Medical_Art_-_Skin_cross_section.svg", "Pemphigus & Bullous Pemphigoid", "Bullous disease")],
  "DR-MOD-03-TOP-04": [img("Servier_Medical_Art_-_Skin_cross_section.svg", "SJS & TEN", "Toxic skin reactions")],
  "DR-MOD-03-TOP-05": [img("Servier_Medical_Art_-_Skin_cross_section.svg", "Autoimmune Skin Diseases", "Autoimmune bullous disorders")],

  "DR-MOD-04-TOP-02": [img("Servier_Medical_Art_-_Skin_cross_section.svg", "Syphilis", "Syphilis stages and management")],
  "DR-MOD-04-TOP-03": [img("Servier_Medical_Art_-_Skin_cross_section.svg", "Gonorrhea & Genital Ulcer Diseases", "STI syndromic management")],

  "DR-MOD-05-TOP-02": [img("Servier_Medical_Art_-_Skin_cross_section.svg", "Skin Tumors & Melanoma", "Skin cancer management")],
  "DR-MOD-05-TOP-03": [img("Servier_Medical_Art_-_Skin_cross_section.svg", "Pigmentary Disorders", "Pigmentation disorders")],
  "DR-MOD-05-TOP-04": [img("Servier_Medical_Art_-_Skin_cross_section.svg", "Skin Manifestations of Systemic Diseases", "Systemic disease cutaneous signs")],

  // ========== ADDITIONAL PSYCHIATRY (PS) TOPICS - EXPANDED ==========
  "PS-MOD-01-TOP-02": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Classification of Mental Disorders", "ICD and DSM classification")],
  "PS-MOD-01-TOP-03": [img("Servier_Medical_Art_-_Neuron.svg", "Psychopharmacology Basics", "Psychotropic drug classes")],
  "PS-MOD-01-TOP-04": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Classification & Assessment in Psychiatry", "Psychiatric assessment tools")],

  "PS-MOD-02-TOP-02": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Bipolar Affective Disorder", "Mood stabilizer therapy")],
  "PS-MOD-02-TOP-03": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Depressive Disorders", "Depression management")],
  "PS-MOD-02-TOP-04": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Suicide Risk Assessment", "Suicide prevention")],

  "PS-MOD-03-TOP-02": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "OCD & PTSD", "Anxiety disorder management")],
  "PS-MOD-03-TOP-03": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Somatoform & Dissociative Disorders", "Conversion disorder management")],

  "PS-MOD-04-TOP-02": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Opioid & Other Substance Use", "Substance use disorder treatment")],
  "PS-MOD-04-TOP-03": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Delirium & Dementia", "Dementia management")],
  "PS-MOD-04-TOP-04": [img("Servier_Medical_Art_-_Baby.svg", "Child & Adolescent Psychiatry", "Child psychiatric disorders")],

  "PS-MOD-05-TOP-02": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Mental Healthcare Act & Forensic Psychiatry", "Mental health law and ethics")],
  "PS-MOD-05-TOP-03": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Forensic Psychiatry & Ethics", "Psychiatric ethics in legal contexts")],

  // ========== ADDITIONAL RADIOLOGY (RD) TOPICS - EXPANDED ==========
  "RD-MOD-01-TOP-02": [img("Servier_Medical_Art_-_X-ray.svg", "Radiation Physics & Protection", "Radiation safety measures")],
  "RD-MOD-01-TOP-03": [img("Servier_Medical_Art_-_Syringe.svg", "Contrast Media", "Contrast agent safety and reactions")],
  "RD-MOD-01-TOP-04": [img("Servier_Medical_Art_-_CT_scanner.svg", "Radiation Safety & AERB Guidelines", "AERB regulations and dose limits")],
  "RD-MOD-01-TOP-05": [img("Servier_Medical_Art_-_CT_scanner.svg", "Nuclear Medicine & PET-CT", "Nuclear medicine imaging")],

  "RD-MOD-02-TOP-02": [img("Servier_Medical_Art_-_Lungs_anterior_view.svg", "Pulmonary Imaging", "Lung pathology imaging")],
  "RD-MOD-02-TOP-03": [img("Servier_Medical_Art_-_Heart_anterior_view.svg", "Cardiac Imaging", "Echocardiography and cardiac CT")],

  "RD-MOD-03-TOP-02": [img("Servier_Medical_Art_-_Brain_lateral_view.svg", "Neuroimaging: CT & MRI Brain", "Neuroimaging interpretation")],
  "RD-MOD-03-TOP-03": [img("Servier_Medical_Art_-_Vertebral_column.svg", "Spine Imaging", "Spinal MRI and CT")],

  "RD-MOD-04-TOP-02": [img("Servier_Medical_Art_-_Digestive_system.svg", "CT Abdomen & Pelvis", "Abdominal CT imaging")],
  "RD-MOD-04-TOP-03": [img("Servier_Medical_Art_-_Kidney_cross_section.svg", "GU Imaging & IVP", "Urographic imaging")],
  "RD-MOD-04-TOP-04": [img("Servier_Medical_Art_-_CT_scanner.svg", "Interventional Radiology", "Image-guided interventions")],

  // ========== ADDITIONAL ANESTHESIOLOGY (AS) TOPICS - EXPANDED ==========
  "AS-MOD-01-TOP-02": [img("Servier_Medical_Art_-_Airway.svg", "Airway Management & Intubation", "Difficult airway management")],
  "AS-MOD-01-TOP-03": [img("Servier_Medical_Art_-_Syringe.svg", "Muscle Relaxants & Reversal", "Neuromuscular blocker reversal")],

  "AS-MOD-02-TOP-02": [img("Servier_Medical_Art_-_Syringe.svg", "Nerve Blocks", "Regional nerve block techniques")],
  "AS-MOD-02-TOP-03": [img("Servier_Medical_Art_-_Syringe.svg", "Local Anesthetics", "Local anesthetic agents and toxicity")],

  "AS-MOD-03-TOP-02": [img("Servier_Medical_Art_-_Stethoscope.svg", "Intraoperative Monitoring", "Intraoperative patient monitoring")],
  "AS-MOD-03-TOP-03": [img("Servier_Medical_Art_-_Heart_anterior_view.svg", "Postanesthetic Recovery", "PACU management")],

  "AS-MOD-04-TOP-02": [img("Servier_Medical_Art_-_Lungs_anterior_view.svg", "Mechanical Ventilation", "Ventilator management")],
  "AS-MOD-04-TOP-03": [img("Servier_Medical_Art_-_Sepsis.svg", "ICU Management of Shock", "Shock management in ICU")],
  "AS-MOD-04-TOP-04": [img("Servier_Medical_Art_-_Blood_pressure_measurement.svg", "Fluid & Electrolyte Management in ICU", "Critical care fluid management")],

  "AS-MOD-05-TOP-02": [img("Servier_Medical_Art_-_Stethoscope.svg", "Chronic Pain & Palliative Care", "Palliative care principles")],
  "AS-MOD-05-TOP-03": [img("Servier_Medical_Art_-_Syringe.svg", "Anesthesia in Special Situations", "Obstetric and pediatric anesthesia")],
};
