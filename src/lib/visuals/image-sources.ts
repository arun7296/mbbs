/**
 * Open-access medical image sources.
 * All images MUST be properly attributed and licensed.
 *
 * Allowed licenses:
 * - Public Domain (Gray's Anatomy originals, out-of-copyright)
 * - CC-BY (OpenStax Anatomy & Physiology)
 * - CC-BY-SA (Wikimedia Commons medical images)
 * - CC-BY-NC (select educational sources)
 *
 * NEVER use copyrighted images from textbooks, journals, or stock photo sites.
 */

export interface MedicalImage {
  url: string;
  title: string;
  alt: string;
  attribution: string;
  license: "PUBLIC_DOMAIN" | "CC_BY" | "CC_BY_SA" | "CC_BY_NC";
  source: string;
  category: string;
  tags: string[];
}

// Curated image registry — map topic slugs to relevant images
export const CURATED_IMAGES: Record<string, MedicalImage[]> = {
  // Anatomy — Gray's Anatomy (public domain, published 1918)
  "pectoral-region": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Pectoralis_major.png/800px-Pectoralis_major.png",
      title: "Pectoralis Major Muscle",
      alt: "Anatomical illustration of the pectoralis major muscle showing origin, insertion, and fiber direction",
      attribution: "Gray's Anatomy, 20th edition (1918), public domain",
      license: "PUBLIC_DOMAIN",
      source: "Wikimedia Commons",
      category: "ANATOMY",
      tags: ["pectoralis", "chest", "muscle", "upper_limb"],
    },
  ],
  "heart-anatomy": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Diagram_of_the_human_heart_%28cropped%29.svg/800px-Diagram_of_the_human_heart_%28cropped%29.svg.png",
      title: "Human Heart Diagram",
      alt: "Labeled diagram of the human heart showing all four chambers, valves, and great vessels",
      attribution: "Wapcaplet, Wikimedia Commons, CC-BY-SA 3.0",
      license: "CC_BY_SA",
      source: "Wikimedia Commons",
      category: "ANATOMY",
      tags: ["heart", "cardiac", "chambers", "valves"],
    },
  ],
  "cartilage-types": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Blausen_0208_CartilageTypes.png/800px-Blausen_0208_CartilageTypes.png",
      title: "Types of Cartilage",
      alt: "Comparison of hyaline, elastic, and fibrocartilage with microscopic appearance",
      attribution: "BruceBlaus, Wikimedia Commons, CC-BY 3.0",
      license: "CC_BY",
      source: "Wikimedia Commons",
      category: "ANATOMY",
      tags: ["cartilage", "histology", "connective_tissue"],
    },
  ],
  // Physiology — ECG
  "ecg-normal": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/SinusRhythmLabels.svg/800px-SinusRhythmLabels.svg.png",
      title: "Normal Sinus Rhythm ECG",
      alt: "Labeled ECG showing P wave, QRS complex, T wave, PR interval, QT interval",
      attribution: "Agateller (Anthony Atkielski), Wikimedia Commons, public domain",
      license: "PUBLIC_DOMAIN",
      source: "Wikimedia Commons",
      category: "PHYSIOLOGY",
      tags: ["ecg", "cardiac", "sinus_rhythm", "heart"],
    },
  ],
  // Biochemistry — metabolic pathways
  "glycolysis-overview": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Glycolysis_metabolic_pathway_3_annotated.svg/800px-Glycolysis_metabolic_pathway_3_annotated.svg.png",
      title: "Glycolysis Metabolic Pathway",
      alt: "Complete glycolysis pathway showing all 10 enzymatic steps from glucose to pyruvate",
      attribution: "Thomas Shafee, Wikimedia Commons, CC-BY 4.0",
      license: "CC_BY",
      source: "Wikimedia Commons",
      category: "BIOCHEMISTRY",
      tags: ["glycolysis", "metabolism", "glucose", "pathway"],
    },
  ],
  // Pathology — cell injury
  "cell-necrosis-types": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Coagulative_necrosis.jpg/800px-Coagulative_necrosis.jpg",
      title: "Coagulative Necrosis",
      alt: "Histological image of coagulative necrosis showing preservation of tissue architecture",
      attribution: "Nephron, Wikimedia Commons, CC-BY-SA 3.0",
      license: "CC_BY_SA",
      source: "Wikimedia Commons",
      category: "PATHOLOGY",
      tags: ["necrosis", "cell_injury", "histology"],
    },
  ],
};

/**
 * Search Wikimedia Commons for medical images.
 * Uses the Wikimedia API (no key needed, rate limit ~200 req/sec).
 */
export async function searchWikimediaImages(
  query: string,
  maxResults: number = 10
): Promise<MedicalImage[]> {
  const params = new URLSearchParams({
    action: "query",
    format: "json",
    generator: "search",
    gsrsearch: `${query} medical anatomy`,
    gsrnamespace: "6", // File namespace
    gsrlimit: String(maxResults),
    prop: "imageinfo",
    iiprop: "url|extmetadata|size|mime",
    iiurlwidth: "800",
    origin: "*",
  });

  const response = await fetch(`https://commons.wikimedia.org/w/api.php?${params}`);
  const data = await response.json();

  if (!data.query?.pages) return [];

  return Object.values(data.query.pages)
    .filter((page: any) => {
      const mime = page.imageinfo?.[0]?.mime;
      return mime?.startsWith("image/") && !mime?.includes("gif");
    })
    .map((page: any) => {
      const info = page.imageinfo[0];
      const meta = info.extmetadata || {};
      const license = meta.LicenseShortName?.value || "Unknown";

      const normalizedLicense = normalizeLicense(license);
      if (!normalizedLicense) return null;

      return {
        url: info.thumburl || info.url,
        title: (meta.ObjectName?.value || page.title || "").replace("File:", ""),
        alt: meta.ImageDescription?.value?.replace(/<[^>]*>/g, "") || "",
        attribution: `${meta.Artist?.value?.replace(/<[^>]*>/g, "") || "Unknown"}, Wikimedia Commons, ${license}`,
        license: normalizedLicense,
        source: "Wikimedia Commons",
        category: "ANATOMY",
        tags: [],
      };
    })
    .filter(Boolean) as MedicalImage[];
}

function normalizeLicense(license: string): MedicalImage["license"] | null {
  const l = license.toLowerCase();
  if (l.includes("public domain") || l.includes("pd") || l === "cc0") return "PUBLIC_DOMAIN";
  if (l.includes("cc-by-sa") || l.includes("cc by-sa")) return "CC_BY_SA";
  if (l.includes("cc-by-nc") || l.includes("cc by-nc")) return "CC_BY_NC";
  if (l.includes("cc-by") || l.includes("cc by")) return "CC_BY";
  return null; // Not open-access — don't use
}

/**
 * Map of diagram component names to their subject categories.
 * Used by the seeder to assign the right diagrams to topics.
 */
export const DIAGRAM_COMPONENT_MAP: Record<string, { component: string; category: string; tags: string[] }> = {
  // Anatomy
  "HeartChambersDiagram": { component: "HeartChambersDiagram", category: "ANATOMY", tags: ["heart", "chambers", "valves", "cardiac"] },
  "BrachialPlexusSVG": { component: "BrachialPlexusSVG", category: "ANATOMY", tags: ["brachial_plexus", "nerves", "upper_limb"] },
  "CircleOfWillisSVG": { component: "CircleOfWillisSVG", category: "ANATOMY", tags: ["cerebral", "arteries", "circle_of_willis"] },
  "CranialNervesDiagram": { component: "CranialNervesDiagram", category: "ANATOMY", tags: ["cranial_nerves", "skull", "foramina"] },
  "DermatomeMap": { component: "DermatomeMap", category: "ANATOMY", tags: ["dermatomes", "spinal", "sensory"] },
  "NephronDiagram": { component: "NephronDiagram", category: "ANATOMY", tags: ["nephron", "kidney", "renal"] },
  "SarcomereDiagram": { component: "SarcomereDiagram", category: "ANATOMY", tags: ["sarcomere", "muscle", "contraction"] },
  "SpinalCordTractsSVG": { component: "SpinalCordTractsSVG", category: "ANATOMY", tags: ["spinal_cord", "tracts", "neuroanatomy"] },
  "ThoraxCrossSection": { component: "ThoraxCrossSection", category: "ANATOMY", tags: ["thorax", "cross_section", "mediastinum"] },

  // Physiology
  "CardiacCycleAnimation": { component: "CardiacCycleAnimation", category: "PHYSIOLOGY", tags: ["cardiac_cycle", "systole", "diastole"] },
  "ActionPotentialAnimation": { component: "ActionPotentialAnimation", category: "PHYSIOLOGY", tags: ["action_potential", "membrane", "depolarization"] },
  "OxygenDissociationCurve": { component: "OxygenDissociationCurve", category: "PHYSIOLOGY", tags: ["oxygen", "hemoglobin", "dissociation"] },
  "FrankStarlingCurve": { component: "FrankStarlingCurve", category: "PHYSIOLOGY", tags: ["frank_starling", "cardiac_output", "preload"] },
  "PressureVolumeLoop": { component: "PressureVolumeLoop", category: "PHYSIOLOGY", tags: ["pv_loop", "cardiac", "ventricular"] },
  "JGAFeedbackDiagram": { component: "JGAFeedbackDiagram", category: "PHYSIOLOGY", tags: ["jga", "tubuloglomerular", "feedback"] },
  "RAASCascade": { component: "RAASCascade", category: "PHYSIOLOGY", tags: ["raas", "renin", "angiotensin", "aldosterone"] },
  "CountercurrentAnimation": { component: "CountercurrentAnimation", category: "PHYSIOLOGY", tags: ["countercurrent", "loop_of_henle", "concentration"] },

  // Biochemistry
  "GlycolysisPathway": { component: "GlycolysisPathway", category: "BIOCHEMISTRY", tags: ["glycolysis", "glucose", "metabolism"] },
  "TCACycleDiagram": { component: "TCACycleDiagram", category: "BIOCHEMISTRY", tags: ["tca", "krebs", "citric_acid"] },
  "ETCChainDiagram": { component: "ETCChainDiagram", category: "BIOCHEMISTRY", tags: ["etc", "oxidative_phosphorylation", "mitochondria"] },
  "UreaCycleDiagram": { component: "UreaCycleDiagram", category: "BIOCHEMISTRY", tags: ["urea_cycle", "nitrogen", "ammonia"] },
  "HemeSynthesisPathway": { component: "HemeSynthesisPathway", category: "BIOCHEMISTRY", tags: ["heme", "porphyria", "synthesis"] },
  "AminoAcidMetabolism": { component: "AminoAcidMetabolism", category: "BIOCHEMISTRY", tags: ["amino_acid", "transamination", "deamination"] },
  "DNAReplicationDiagram": { component: "DNAReplicationDiagram", category: "BIOCHEMISTRY", tags: ["dna", "replication", "polymerase"] },

  // Pathology
  "InflammationCascade": { component: "InflammationCascade", category: "PATHOLOGY", tags: ["inflammation", "acute", "mediators"] },
  "CoagulationCascade": { component: "CoagulationCascade", category: "PATHOLOGY", tags: ["coagulation", "clotting", "hemostasis"] },
  "ComplementPathway": { component: "ComplementPathway", category: "PATHOLOGY", tags: ["complement", "innate_immunity", "mac"] },
  "CellCycleDiagram": { component: "CellCycleDiagram", category: "PATHOLOGY", tags: ["cell_cycle", "mitosis", "checkpoints"] },
  "MetastasisSteps": { component: "MetastasisSteps", category: "PATHOLOGY", tags: ["metastasis", "invasion", "cancer"] },

  // Pharmacology
  "DrugReceptorCurves": { component: "DrugReceptorCurves", category: "PHARMACOLOGY", tags: ["dose_response", "agonist", "antagonist"] },
  "PharmacokineticsDiagram": { component: "PharmacokineticsDiagram", category: "PHARMACOLOGY", tags: ["adme", "pharmacokinetics", "bioavailability"] },
  "AutonomicReceptorMap": { component: "AutonomicReceptorMap", category: "PHARMACOLOGY", tags: ["autonomic", "sympathetic", "parasympathetic"] },
  "AntibioticTargets": { component: "AntibioticTargets", category: "PHARMACOLOGY", tags: ["antibiotic", "bacterial", "resistance"] },

  // Clinical
  "ECGWavesDiagram": { component: "ECGWavesDiagram", category: "CLINICAL", tags: ["ecg", "waves", "intervals"] },
  "ABGAlgorithm": { component: "ABGAlgorithm", category: "CLINICAL", tags: ["abg", "acid_base", "arterial_blood_gas"] },
  "GCSChart": { component: "GCSChart", category: "CLINICAL", tags: ["gcs", "coma", "neurological"] },
  "TraumaAssessment": { component: "TraumaAssessment", category: "CLINICAL", tags: ["trauma", "atls", "primary_survey"] },
};

/**
 * Map topic codes to diagram component names.
 * Used by the seeder to assign pre-built diagrams to specific topics.
 */
export const TOPIC_DIAGRAM_MAP: Record<string, string[]> = {
  // Anatomy
  "AN-MOD-01-TOP-05": ["BrachialPlexusSVG"],
  "AN-MOD-03-TOP-04": ["HeartChambersDiagram"],
  "AN-MOD-03-TOP-05": ["HeartChambersDiagram"],
  "AN-MOD-07-TOP-06": ["CircleOfWillisSVG"],
  "AN-MOD-07-TOP-04": ["CranialNervesDiagram"],
  "AN-MOD-07-TOP-05": ["SpinalCordTractsSVG"],
  "AN-MOD-09-TOP-01": ["SarcomereDiagram"],
  "AN-MOD-05-TOP-01": ["NephronDiagram"],
  "AN-MOD-03-TOP-01": ["ThoraxCrossSection"],
  "AN-MOD-07-TOP-08": ["DermatomeMap"],

  // Physiology
  "PY-MOD-03-TOP-01": ["CardiacCycleAnimation", "PressureVolumeLoop"],
  "PY-MOD-03-TOP-02": ["ECGWavesDiagram"],
  "PY-MOD-03-TOP-04": ["FrankStarlingCurve"],
  "PY-MOD-04-TOP-03": ["OxygenDissociationCurve"],
  "PY-MOD-05-TOP-03": ["CountercurrentAnimation"],
  "PY-MOD-01-TOP-03": ["ActionPotentialAnimation"],
  "PY-MOD-05-TOP-01": ["JGAFeedbackDiagram", "NephronDiagram"],
  "PY-MOD-05-TOP-02": ["RAASCascade"],

  // Biochemistry
  "BI-MOD-03-TOP-01": ["GlycolysisPathway"],
  "BI-MOD-03-TOP-02": ["TCACycleDiagram", "ETCChainDiagram"],
  "BI-MOD-04-TOP-02": ["UreaCycleDiagram"],
  "BI-MOD-04-TOP-01": ["AminoAcidMetabolism"],
  "BI-MOD-02-TOP-03": ["HemeSynthesisPathway"],
  "BI-MOD-01-TOP-01": ["DNAReplicationDiagram"],

  // Pathology
  "PA-MOD-01-TOP-03": ["InflammationCascade"],
  "PA-MOD-03-TOP-06": ["CoagulationCascade"],
  "PA-MOD-02-TOP-02": ["CellCycleDiagram", "MetastasisSteps"],
  "PA-MOD-01-TOP-05": ["ComplementPathway"],

  // Pharmacology
  "PH-MOD-01-TOP-01": ["DrugReceptorCurves"],
  "PH-MOD-01-TOP-02": ["PharmacokineticsDiagram"],
  "PH-MOD-02-TOP-01": ["AutonomicReceptorMap"],
  "PH-MOD-09-TOP-01": ["AntibioticTargets"],

  // Clinical / Medicine
  "IM-MOD-01-TOP-03": ["ABGAlgorithm"],
  "SU-MOD-01-TOP-01": ["TraumaAssessment", "GCSChart"],
};
