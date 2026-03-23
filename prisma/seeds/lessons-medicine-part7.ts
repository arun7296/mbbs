import type { TopicLessons } from "./content-loader";

export const medicinePart7Lessons: TopicLessons[] = [
  {
    topicCode: "IM-MOD-03-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "jaundice-layer-1-foundation",
        title: "Jaundice & Liver Failure - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of bilirubin metabolism, types of jaundice (pre-hepatic, hepatic, post-hepatic), normal bilirubin values, conjugation process, hereditary hyperbilirubinemias, and basic liver anatomy.",
        contentMd: `# Jaundice & Liver Failure - Foundation

## Bilirubin Metabolism Overview

### Source and Production
- **Bilirubin origin**: Breakdown of hemoglobin from senescent RBCs (1-2 g/day normally)
- **Fate**: ~80% from hemoglobin; ~20% from myoglobin, catalase, cytochrome P450
- **Normal RBC lifespan**: 120 days; ~200 billion RBCs destroyed daily
- **Unconjugated bilirubin**: Produced in reticuloendothelial system (RES)

### Bilirubin Transport
- **Binding to albumin**: Unconjugated bilirubin binds to albumin in blood (insoluble)
- **Carrier-mediated uptake**: Hepatocytes take up unconjugated bilirubin via organic anion transporters
- **Albumin binding prevents renal excretion**: Only conjugated bilirubin appears in urine
- **Blood-brain barrier**: Unconjugated bilirubin can cross in neonates (kernicterus risk)

### Hepatic Conjugation Process
- **Enzyme**: Uridine 5'-diphosphoglucuronosyltransferase (UGT1A1)
- **Substrate**: Unconjugated bilirubin
- **Product**: Conjugated bilirubin (water-soluble, excreted in bile)
- **Location**: Smooth endoplasmic reticulum of hepatocytes
- **Capacity**: Liver can conjugate up to 5 g/day (normal 1-2 g/day)

### Excretion into Bile
- **MRP2 transporter**: Pumps conjugated bilirubin into canalicular lumen
- **Bile composition**: Bilirubin, cholesterol, phospholipids, bile salts
- **Biliary flow**: 600-1000 mL/day; maintains solubility of conjugated bilirubin
- **Gallbladder storage**: Concentrates bile (10x normal concentration)
- **Release**: Food triggers cholecystokinin (CCK); bile released into duodenum

## Normal Bilirubin Values and Reference Ranges

### Total and Conjugated Bilirubin
- **Total serum bilirubin**: <1.2 mg/dL (normal); 1.2-3 mg/dL (mild hyperbilirubinemia)
- **Unconjugated bilirubin**: <0.3 mg/dL (>80% of total normally)
- **Conjugated bilirubin**: <0.3 mg/dL (<20% of total normally)
- **Jaundice threshold**: ~2-3 mg/dL (clinically visible yellowing)

### Urine and Fecal Bilirubin
- **Urinary bilirubin**: Absent (only conjugated bilirubin filtered); presence indicates hyperbilirubinemia >4 mg/dL
- **Urobilinogen in urine**: 0.1-1 mg/dL (normal); indicates hemoglobin catabolism
- **Stercobilin (fecal)**: Brown color from intestinal degradation of bilirubin; absent in complete biliary obstruction

## Three Types of Jaundice

### Pre-hepatic (Unconjugated) Hyperbilirubinemia
- **Mechanism**: Excessive RBC breakdown exceeds hepatic conjugating capacity
- **Conjugation**: Normal; liver function preserved
- **Laboratory pattern**: Increased unconjugated (>80% of total); conjugated normal
- **Urine bilirubin**: Absent (only conjugated filtered)
- **Urine urobilinogen**: Increased (excess hemoglobin catabolism)
- **Causes**: Hemolytic anemias, ineffective erythropoiesis (thalassemia), hypersplenism
- **Clinical features**: Jaundice, dark urine absent, pale stools possible, splenomegaly variable

### Hepatic (Mixed) Hyperbilirubinemia
- **Mechanism**: Hepatocellular injury damages conjugation AND excretion
- **Pattern**: Both unconjugated and conjugated increased (can predominate)
- **Cellular damage**: Necrosis, inflammation, cholestasis occur together
- **Causes**: Viral hepatitis, alcoholic hepatitis, cirrhosis, drug-induced, sepsis
- **Clinical features**: Jaundice, dark urine (conjugated bilirubin), pale stools, hepatomegaly, coagulopathy

### Post-hepatic (Conjugated) Hyperbilirubinemia
- **Mechanism**: Biliary obstruction prevents excretion of conjugated bilirubin
- **Conjugation**: Normal; bilirubin builds up in hepatocytes
- **Pattern**: Conjugated bilirubin markedly elevated; unconjugated mildly increased
- **Backflow**: Conjugated bilirubin regurgitates into bloodstream via canalicular rupture
- **Causes**: Gallstones, pancreatic cancer, strictures, primary sclerosing cholangitis (PSC)
- **Clinical features**: Jaundice, dark tea-colored urine (conjugated), pale clay-colored stools, pruritus

## Hereditary Hyperbilirubinemias

### Gilbert Syndrome
- **Prevalence**: 3-7% of population (India: common)
- **Inheritance**: Autosomal recessive
- **Defect**: UGT1A1 promoter polymorphism; reduced enzyme activity (~30%)
- **Bilirubin level**: Usually <3 mg/dL (mild unconjugated)
- **Triggers**: Fasting, illness, stress, intercurrent infection
- **Clinical significance**: Benign; no treatment needed; awareness prevents unnecessary testing

### Crigler-Najjar Syndrome Type 1 (Severe)
- **Inheritance**: Autosomal recessive
- **Defect**: Complete UGT1A1 absence (0% enzyme activity)
- **Bilirubin levels**: 20-50 mg/dL (severe unconjugated hyperbilirubinemia)
- **Complications**: Kernicterus in infancy (neurological damage)
- **Management**: Phototherapy, exchange transfusion, hepatocyte transplant considered
- **Prognosis**: Fatal without intervention; phototherapy extends survival

### Crigler-Najjar Syndrome Type 2 (Moderate)
- **Inheritance**: Autosomal recessive
- **Defect**: ~10% UGT1A1 activity
- **Bilirubin levels**: 6-20 mg/dL (moderate unconjugated)
- **Response to phenobarbital**: Enzyme induction increases activity
- **Prognosis**: Better than Type 1; phenobarbital reduces bilirubin

### Dubin-Johnson Syndrome
- **Inheritance**: Autosomal recessive
- **Defect**: MRP2 transporter (canalicular membrane); impaired bilirubin excretion
- **Pattern**: Conjugated hyperbilirubinemia (paradoxically unconjugated may be elevated)
- **Distinctive feature**: Dark pigmentation of liver (black liver on gross examination)
- **Bilirubin levels**: 2-5 mg/dL (mild-moderate conjugated)
- **Prognosis**: Excellent; benign condition

### Rotor Syndrome
- **Inheritance**: Autosomal recessive
- **Defect**: Unknown mechanism; possibly hepatic uptake or storage defect
- **Pattern**: Conjugated hyperbilirubinemia (elevated conjugated, slightly elevated unconjugated)
- **Liver appearance**: Normal (unlike Dubin-Johnson)
- **Bilirubin levels**: Similar to Dubin-Johnson (2-5 mg/dL)
- **Prognosis**: Benign; excellent long-term outlook

## Liver Anatomy Basics

### Gross Anatomy
- **Weight**: 1.5 kg (largest internal organ)
- **Location**: Right upper quadrant beneath diaphragm
- **Lobes**: Right lobe (larger), left lobe, caudate lobe, quadrate lobe
- **Surface**: Smooth anteriorly; posterior surface shows impressions from adjacent organs
- **Blood supply**: Dual input - portal vein (75% volume, 50% oxygen) + hepatic artery (25% volume, 50% oxygen)

### Microscopic Architecture
- **Functional unit**: Hepatic acinus (zone I, II, III based on distance from portal triad)
- **Zone I (periportal)**: Well-oxygenated; metabolic functions, detoxification
- **Zone II (midzonal)**: Intermediate oxygen tension
- **Zone III (pericentral)**: Poorest oxygen; most susceptible to hypoxic injury
- **Sinusoids**: Specialized capillaries lacking basement membrane (permeable); lined with Kupffer cells
- **Hepatocytes**: Polygonal cells with abundant mitochondria; perform metabolic, synthetic, excretory functions

### Hepatocyte Functions Summary
- **Metabolism**: Glucose, amino acids, lipids, bilirubin
- **Synthesis**: Albumin, clotting factors, bile, lipoproteins
- **Detoxification**: Cytochrome P450 system; conjugation reactions
- **Storage**: Glycogen, fat-soluble vitamins (A, D, E, K)
- **Excretion**: Bile production; conjugated bilirubin, cholesterol, waste products
`,
        mnemonics: [
          {
            text: "Bilirubin journey = RBC breakdown → Unconjugated (albumin-bound) → Hepatocyte uptake → UGT1A1 conjugation → MRP2 excretion → Bile",
            explanation: "Complete pathway of bilirubin metabolism from RBC to bile"
          },
          {
            text: "Pre-hepatic = Hemolysis; Hepatic = Cell damage; Post-hepatic = Duct obstruction",
            explanation: "Three types of jaundice by mechanism"
          },
          {
            text: "Hereditary hyperbilirubinemia = Gilbert (common, benign, 3-7%), Crigler-Najjar (UGT absent), Dubin-Johnson (MRP2 defect, dark liver), Rotor (unknown)",
            explanation: "Key hereditary causes and distinguishing features"
          },
          {
            text: "Bilirubin appears in urine only when conjugated >4 mg/dL (post-hepatic/hepatic)",
            explanation: "Why pre-hepatic jaundice has no bilirubinuria"
          }
        ],
        keyPoints: [
          "Bilirubin comes from RBC breakdown (1-2 g/day); normal total <1.2 mg/dL",
          "Conjugation by UGT1A1 in liver; excretion via MRP2 transporter into bile",
          "Pre-hepatic: unconjugated elevated, no urine bilirubin, increased urobilinogen",
          "Hepatic: mixed conjugated/unconjugated, dark urine, variable presentation",
          "Post-hepatic: conjugated elevated, dark urine, pale stools, pruritus",
          "Gilbert syndrome affects 3-7% (India higher); benign, triggered by stress/fasting",
          "Crigler-Najjar Type 1: severe (20-50 mg/dL unconjugated); kernicterus risk",
          "Dubin-Johnson vs Rotor: both have conjugated hyperbilirubinemia; DJ has dark liver",
          "Liver: 1.5 kg organ; dual blood supply (portal vein + hepatic artery)",
          "Hepatic acini: Zone I (periportal, well-oxygenated) to Zone III (pericentral, susceptible)"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Bilirubin Metabolism and Hyperbilirubinemia", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "Jaundice and Liver Failure", edition: "11th" },
          { book: "Davidson's Principles and Practice of Medicine", chapter: "Diseases of the Liver, Biliary Tract and Pancreas", edition: "24th" }
        ]
      },
      {
        layer: 2,
        slug: "jaundice-layer-2-mechanism",
        title: "Jaundice & Liver Failure - Mechanism",
        estimatedMinutes: 30,
        summary: "Detailed pathophysiology of bilirubin metabolism pathways, hepatocellular injury mechanisms, cholestasis mechanisms, portal hypertension development, and hepatic encephalopathy.",
        contentMd: `# Jaundice & Liver Failure - Mechanism

## Detailed Bilirubin Metabolism Pathway

### Step 1: Heme Catabolism in RES
- **Site**: Reticuloendothelial system (Kupffer cells, splenic macrophages)
- **Process**: Heme oxygenase cleaves heme ring → CO + unconjugated bilirubin + iron
- **Iron recycling**: Iron stored as ferritin; reused for hemoglobin synthesis
- **Efficiency**: ~90% efficiency; remainder via alternative pathways
- **Rate limiting**: RBC lifespan determines normal bilirubin production (120 days = 1-2 g/day)

### Step 2: Transport to Liver
- **Unconjugated bilirubin properties**: Lipophilic, insoluble in water; binds tightly to albumin (99%)
- **Albumin-bilirubin complex**: High affinity protects unconjugated bilirubin from renal filtration
- **Free fraction**: <1% unconjugated bilirubin unbound; this fraction crosses blood-brain barrier
- **Kernicterus mechanism**: In neonates/high bilirubin states, free unconjugated damages basal ganglia

### Step 3: Hepatic Uptake
- **Transporters**: OATP1B1, OATP1B3 (organic anion transporter polypeptides)
- **Energy-dependent**: Active transport against concentration gradient
- **Competition**: Other organic anions compete for uptake (drugs, contrast dyes)
- **Intracellular storage**: Unconjugated bilirubin binds to ligandin (Y protein) in cytoplasm
- **Displacement**: Other lipophilic compounds compete for ligandin binding

### Step 4: Conjugation by UGT1A1
- **Enzyme**: UDP-glucuronosyltransferase 1A1 (UGT1A1)
- **Substrate**: Unconjugated bilirubin
- **Cofactor**: UDP-glucuronic acid (UDPGA) from glucose
- **Reaction**: Glucuronide conjugation makes bilirubin water-soluble
- **Products**: Primarily bilirubin monoglucuronide (first product); some diglucuronide
- **Capacity**: Hepatic conjugating capacity >> normal bilirubin load (can handle 5-6x excess)

### Step 5: Canalicular Excretion
- **Transporter**: MRP2 (multidrug resistance-associated protein 2); active ATP-dependent pump
- **Location**: Apical membrane of hepatocyte (canalicular side)
- **Substrates**: Conjugated bilirubin, other organic anions, drugs
- **Energy source**: ATP hydrolysis drives transport against gradient
- **Saturation**: Can become rate-limiting in cholestasis

### Step 6: Biliary Flow and Enterohepatic Circulation
- **Bile flow**: 600-1000 mL/day; water and electrolytes secreted by cholangiocytes
- **Bile salts**: Driven conjugated bilirubin excretion via osmotic effect
- **Small intestine**: Conjugated bilirubin deconjugated by bacterial β-glucuronidase
- **Reabsorption**: Unconjugated bilirubin reabsorbed via enterohepatic circulation (limited)
- **Fecal excretion**: Majority converted to stercobilin (brown color) by bacterial metabolism

## Pathophysiology of Pre-hepatic Jaundice

### Hemolytic Anemia Mechanisms
- **RBC destruction**: Shortened lifespan (<120 days); accelerated breakdown
- **Hemolysis sites**: Intravascular (direct RBC lysis in blood) vs extravascular (RES destruction)
- **Bilirubin production**: Exceeds hepatic conjugating capacity
- **Unconjugated accumulation**: Liver cannot conjugate >2-3 g/day excess
- **Urobilinogen elevation**: Increased conjugated bilirubin excretion → increased urobilinogen in colon

### Causes of Pre-hepatic Jaundice
- **Immune hemolytic anemias**: Warm antibody AIHA, cold agglutinin disease
- **Hereditary spherocytosis**: Osmotic fragility of RBCs; splenic sequestration
- **G6PD deficiency**: Oxidative stress triggers hemolysis (fava beans, sulfonamides)
- **Thalassemia**: Ineffective erythropoiesis + hemolysis
- **Malaria**: Parasitized RBC lysis; hemolysis with severe malaria
- **Incompatible transfusion**: Acute hemolysis from ABO incompatibility
- **Transfusion reactions**: Immune-mediated RBC destruction

### Laboratory Findings in Pre-hepatic Jaundice
- **Unconjugated bilirubin**: Markedly elevated (>80% of total)
- **Conjugated bilirubin**: Normal (<0.3 mg/dL)
- **Urine bilirubin**: Absent (unconjugated not filtered)
- **Urine urobilinogen**: Increased (excess urobilinogen in renal tubules)
- **Stool urobilinogen**: Increased (dark fecal color)
- **Haptoglobin**: Decreased (binds free hemoglobin; saturated in hemolysis)
- **LDH**: Elevated (from RBC destruction); very high in intravascular hemolysis

## Pathophysiology of Hepatic Jaundice

### Hepatocellular Injury Mechanisms

**Cytotoxic Hepatitis (Hepatocellular necrosis):**
- **Cell death pathways**: Apoptosis (programmed), necrosis (uncontrolled)
- **Mechanism**: Virus disrupts cell membrane, triggers caspase cascade
- **Features**: Transaminitis (ALT > AST in viral; AST > ALT in alcohol)
- **Regeneration**: Hepatocytes regenerate if >25% liver viable
- **Fulminant failure**: If >70% hepatocytes destroyed simultaneously

**Cholestatic Hepatitis (Mixed pattern):**
- **Canalicular dysfunction**: MRP2 transporter downregulation or damage
- **Bile duct inflammation**: Cholangitis from immune attack
- **Hepatocyte swelling**: Intrahepatic edema reduces canalicular flow
- **Bilirubin pattern**: Mixed conjugated (regurgitated) + unconjugated (impaired conjugation)
- **ALP/bilirubin ratio**: ALP markedly elevated relative to bilirubin

### Causes of Hepatic Jaundice

**Infectious:**
- **Viral hepatitis**: HAV (acute only), HBV (acute/chronic), HCV (usually mild acute), HEV (endemic India)
- **Other viruses**: EBV, CMV, dengue, malaria parasites
- **Bacterial**: Sepsis, tuberculosis (granulomatous), leptospirosis (Indian endemic)

**Toxic/Metabolic:**
- **Drug-induced liver injury (DILI)**: Acetaminophen (hepatocellular), amoxicillin-clavulanate (cholestatic)
- **Alcohol**: Alcoholic hepatitis (AST > ALT, elevated GGT), fatty liver, cirrhosis
- **Wilson disease**: Copper accumulation; ceruloplasmin low; neuropsychiatric symptoms

**Autoimmune/Inflammatory:**
- **Autoimmune hepatitis**: Anti-nuclear antibodies (ANA), anti-smooth muscle
- **Primary sclerosing cholangitis (PSC)**: Progressive bile duct fibrosis; associated with IBD
- **Primary biliary cirrhosis (PBC)**: Antimitochondrial antibodies (AMA); mainly women

**Cirrhosis (end-stage):**
- **Causes**: Alcohol (most common India), HBV/HCV, autoimmune, NAFLD
- **Features**: Portal hypertension, ascites, varices, coagulopathy, encephalopathy

### Laboratory Pattern in Hepatic Jaundice
- **Bilirubin**: Mixed conjugated + unconjugated; total may exceed 10 mg/dL
- **Transaminases**: ALT, AST markedly elevated (often >1000 IU/L in acute viral)
- **ALP**: Mildly elevated (unless cholestatic predominance)
- **Albumin**: Usually normal early; decreased if chronic/cirrhosis
- **Prothrombin time (PT/INR)**: Prolonged (impaired clotting factor synthesis)
- **Urine**: Bilirubinuria present (conjugated bilirubin filtered)

## Pathophysiology of Post-hepatic Jaundice

### Cholestasis Mechanisms
- **Ductal obstruction**: Physical blockage (stones, tumor, stricture) prevents bile flow
- **Elevated intraductal pressure**: Bile backs up into hepatocytes
- **Canalicular rupture**: Bile regurgitates into sinusoids → bloodstream
- **Conjugated bilirubin escape**: Enters blood via ruptured tight junctions
- **Elevated GGT/ALP**: From bile duct epithelial proliferation and induction

### Causes of Post-hepatic Jaundice

**Extrahepatic Cholestasis (Biliary obstruction):**
- **Gallstones**: Choledocholithiasis (most common cause post-hepatic jaundice globally)
- **Pancreatic cancer**: Head of pancreas compresses CBD; painless jaundice (red flag)
- **Bile duct strictures**: Post-ERCP, post-surgery, chronic pancreatitis
- **Cholangiocarcinoma**: Bile duct cancer; Opisthorchis viverrini (Southeast Asia endemic)

**Intrahepatic Cholestasis (Without hepatocellular damage):**
- **Pregnancy**: Estrogen-induced cholestasis; resolves post-delivery
- **Drug-induced**: Anabolic steroids, oral contraceptives, phenothiazines
- **Sepsis**: Bile flow impaired despite intact hepatocytes
- **Hemolysis**: Massive conjugated bilirubin load exceeds hepatic excretion capacity
- **Primary sclerosing cholangitis (PSC)**: Progressive fibrosis of intrahepatic/extrahepatic ducts

### Laboratory Pattern in Post-hepatic Jaundice
- **Bilirubin**: Predominantly conjugated (>50% of total); may exceed 15 mg/dL
- **ALP/GGT**: Markedly elevated (often >4x upper normal)
- **Transaminases**: Only mildly elevated (<4x upper normal) unless cholangitis present
- **Albumin/PT**: Normal early; may decline if complete obstruction prolonged
- **Urine**: Dark (bilirubinuria); absent or decreased urobilinogen (no bilirubin reaches colon)
- **Stool**: Pale/clay-colored (absent stercobilin from lack of bilirubin in colon)

## Portal Hypertension Development

### Normal Portal Hemodynamics
- **Portal vein pressure**: 7-10 mmHg (normal)
- **Gradient (HVPG)**: Hepatic venous pressure gradient <5 mmHg
- **Flow**: Portal vein carries 75% hepatic blood flow (1500 mL/min)
- **Resistance**: Low resistance in normal liver; inversely proportional to vessel diameter

### Cirrhosis-Induced Portal Hypertension

**Structural Changes:**
- **Hepatic fibrosis**: Stellate cell activation → collagen deposition
- **Nodule formation**: Regenerating hepatocytes surrounded by fibrosis
- **Loss of normal architecture**: Disruption of sinusoidal structure
- **Capillarization of sinusoids**: Loss of fenestration; endothelial barrier develops

**Hemodynamic Consequences:**
- **Increased intrahepatic resistance**: Fibrosis and nodule architecture impedes flow
- **Portal hypertension develops**: Portal pressure >12 mmHg (HVPG >5 mmHg)
- **Flow redistribution**: Blood shunts through collateral vessels
- **Splanchnic vasodilation**: Compensatory vasodilation in splanchnic circulation (worsens hypertension)

### Complications of Portal Hypertension
- **Ascites formation**: Splanchnic capillary filtration exceeds lymphatic drainage
- **Esophageal varices**: Retrograde flow through left gastric vein → dilated submucosal vessels
- **Hemorrhoids**: Rectal varices from superior and middle rectal vein dilation
- **Caput medusae**: Paraumbilical vein dilation from portal-umbilical shunting
- **Splenomegaly**: Splenic congestion from reversed blood flow
- **Hepatic encephalopathy**: Ammonia shunts past liver into systemic circulation

## Hepatic Encephalopathy Pathophysiology

### Ammonia Theory (Primary Hypothesis)
- **Ammonia source**: Intestinal bacteria deaminate amino acids; glutaminase from kidney
- **Normal metabolism**: Ammonia normally converted to urea in liver (urea cycle)
- **In cirrhosis**: Reduced hepatic mass + portal-systemic shunts bypass liver
- **Blood ammonia elevation**: Ammonia bypasses liver conjugation; reaches brain
- **CNS effects**: Ammonia is neurotoxic; impairs neurotransmitter synthesis
- **Evidence**: Ammonia level correlates imperfectly with clinical grade; mechanism complex

### Additional Mechanisms

**Neurotransmitter Dysfunction:**
- **False neurotransmitters**: Mercaptans, phenols from bacterial metabolism accumulate
- **Benzodiazepine-like substances**: Endogenous benzodiazepines (diazepam-like) enhance GABA
- **GABA activation**: Increased GABAergic inhibition causes altered mental status

**Astrocyte Swelling:**
- **Glutamine accumulation**: Ammonia converted to glutamine in astrocytes
- **Osmotic effect**: Glutamine causes astrocyte swelling
- **Cerebral edema**: Low-grade edema impairs neuronal function

**Inflammatory Mediators:**
- **Cytokine activation**: TNF-alpha, IL-1, IL-6 from gut translocation
- **Neuroinflammation**: Activated microglia release neurotoxic factors
- **Blood-brain barrier disruption**: Inflammation increases BBB permeability

### Clinical Grading of Hepatic Encephalopathy
- **Grade 0**: Normal; no encephalopathy
- **Grade 1**: Mild confusion, sleep disturbance, personality changes
- **Grade 2**: Lethargy, disorientation, inappropriate behavior
- **Grade 3**: Somnolence, marked confusion, gross disorientation
- **Grade 4**: Coma, unresponsive to stimuli

### Precipitating Factors in Encephalopathy
- **Infection**: Spontaneous bacterial peritonitis (SBP), UTI, pneumonia trigger cascade
- **Gastrointestinal bleeding**: Blood protein load increases ammonia production
- **Diuretic overuse**: Hypokalemia, metabolic alkalosis worsen ammonia uptake
- **Renal failure**: Reduced ammonia excretion
- **Drugs**: Benzodiazepines, opioids, NSAIDs exacerbate encephalopathy
- **Constipation**: Increased intestinal ammonia absorption

## Wilson Disease - Copper Metabolism

### Defect and Pathophysiology
- **Gene**: ATP7B (copper-transporting ATPase)
- **Function lost**: Impaired copper excretion into bile; impaired metallothionein incorporation
- **Consequence**: Copper accumulates in liver, brain, cornea, RBC
- **Copper toxicity**: Generates free radicals; impairs oxidative phosphorylation
- **Hemolysis**: Copper damages RBC membrane; causes hemolytic anemia

### Clinical Presentation
- **Hepatic**: Acute hepatitis, fulminant failure, chronic cirrhosis (asymptomatic initially)
- **Neuropsychiatric**: Tremor (wing-beating), dystonia, parkinsonism, personality change
- **Ophthalmologic**: Kayser-Fleischer rings (copper in Descemet's membrane; pathognomonic)
- **Hematologic**: Hemolytic anemia (acute presentation)
- **Age of onset**: Usually 5-35 years; rare <2 years

### Diagnostic Labs for Wilson Disease
- **Ceruloplasmin**: Low (<20 mg/dL; normal 20-40 mg/dL) - MOST SENSITIVE
- **24-hour urine copper**: Elevated (>100 mcg/24h; normal <30 mcg/24h)
- **Serum free copper**: Elevated (calculated as total minus bound to ceruloplasmin)
- **Slit-lamp examination**: Kayser-Fleischer rings confirm diagnosis (pathognomonic if present)
- **LFT**: Elevated transaminases, low albumin if hepatic involvement

### Treatment
- **Copper chelators**: Penicillamine (first-line, but taste disturbance), trientine
- **Zinc supplementation**: Inhibits intestinal copper absorption; maintenance therapy
- **Low copper diet**: Shellfish, nuts, chocolate, cocoa restricted
- **Genetic counseling**: Autosomal recessive; siblings screened
`,
        mnemonics: [
          {
            text: "UGT1A1 conjugates unconjugated bilirubin; MRP2 pumps conjugated into bile; OATP uploads unconjugated from blood",
            explanation: "Three key enzymes/transporters in bilirubin metabolism"
          },
          {
            text: "Pre-hepatic = Hemolysis; Hepatic = Infection/Toxin/Cirrhosis; Post-hepatic = Duct obstruction",
            explanation: "Mechanism summary for three types of jaundice"
          },
          {
            text: "Hepatic failure: ALT↑↑, AST↑↑, ALP mildly↑, Albumin normal early, PT prolonged",
            explanation: "Laboratory pattern differentiates hepatocellular from obstructive"
          },
          {
            text: "Portal hypertension develops when HVPG >5 mmHg from cirrhotic fibrosis and capillarization",
            explanation: "Mechanism of portal hypertension in cirrhosis"
          },
          {
            text: "Hepatic encephalopathy = Ammonia accumulation from portal-systemic shunting + endogenous benzodiazepines + astrocyte swelling",
            explanation: "Multifactorial pathophysiology of encephalopathy"
          }
        ],
        keyPoints: [
          "Bilirubin conjugation by UGT1A1 has excess capacity (5-6x normal load); unconjugated accumulation means hemolysis or uptake/conjugation defect",
          "Pre-hepatic jaundice: hemolysis exceeds conjugating capacity; unconjugated >80%; no bilirubinuria; high urobilinogen",
          "Hepatic jaundice: hepatocyte damage causes both conjugation impairment and cholestasis; mixed bilirubin pattern; bilirubinuria present",
          "Post-hepatic jaundice: duct obstruction prevents conjugated bilirubin excretion; regurgitates into blood; dark urine, pale stool",
          "Portal hypertension defined as HVPG >5 mmHg; occurs from increased intrahepatic resistance (fibrosis) and splanchnic vasodilation",
          "Hepatic encephalopathy multifactorial: ammonia toxicity, endogenous benzodiazepines, astrocyte swelling, neuroinflammation",
          "Wilson disease: copper accumulation from ATP7B defect; low ceruloplasmin is most sensitive test; Kayser-Fleischer rings pathognomonic",
          "Hemolytic anemia causes pre-hepatic jaundice when RBC breakdown exceeds hepatic conjugation capacity (>2-3 g/day)",
          "Cholestasis: conjugated bilirubin regurgitation into blood from ruptured tight junctions in hepatocytes",
          "Cirrhosis: hepatic fibrosis + nodule formation disrupts sinusoidal architecture; loss of fenestration causes capillarization"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Liver Disease Pathophysiology", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "Hepatic Encephalopathy and Portal Hypertension", edition: "11th" },
          { book: "Davidson's Principles and Practice of Medicine", chapter: "Cirrhosis and Portal Hypertension", edition: "24th" }
        ]
      },
      {
        layer: 3,
        slug: "jaundice-layer-3-clinical",
        title: "Jaundice & Liver Failure - Clinical Application",
        estimatedMinutes: 25,
        summary: "Clinical features by type of jaundice, investigation interpretation (LFT, viral markers, imaging), acute liver failure criteria, chronic liver disease staging, hepatic encephalopathy management, and Indian-specific causes.",
        contentMd: `# Jaundice & Liver Failure - Clinical Application

## Clinical Features by Type of Jaundice

### Pre-hepatic Jaundice (Hemolytic Anemia)
**Physical Examination:**
- **Jaundice**: Visible yellow discoloration (usually mild)
- **Scleral icterus**: Yellow sclera (first visible at bilirubin >2-3 mg/dL)
- **Splenomegaly**: Often present from RES activity
- **Pallor**: From underlying anemia
- **Absent**: Dark urine, hepatomegaly (liver normal size)

**Clinical Clues:**
- **History**: Family history in hereditary hemolysis; recent transfusion; medications (sulfonamides in G6PD)
- **Fever**: Suggests infection-triggered hemolysis; malaria in endemic areas
- **Jaundice without dark urine**: Pathognomonic for pre-hepatic (unconjugated cannot be filtered)

**Associated Features:**
- **Choledocholithiasis risk**: Chronic hemolysis increases pigment stone risk; can coexist with pre-hepatic jaundice
- **Leg ulcers**: In hereditary spherocytosis from chronic hemolysis
- **Gallstones**: In hemolytic anemias (pigment stones)

### Hepatic Jaundice (Viral, Alcoholic, Drug-Induced)
**Physical Examination:**
- **Jaundice**: Moderate to severe (often >5 mg/dL total bilirubin)
- **Dark urine**: Tea or cola-colored (conjugated bilirubin filtered)
- **Pale stools**: Initially; may become clay-colored if cholestasis predominates
- **Hepatomegaly**: Tender hepatic edge (hepatitis) or firm edge (cirrhosis)
- **Splenomegaly**: Variable; suggests portal hypertension or infection
- **Ascites**: If chronic/cirrhotic

**Acute Viral Hepatitis Presentation:**
- **Prodrome**: 1-2 weeks of malaise, fever, myalgia, arthralgia
- **Icteric phase**: Jaundice appears; fever resolves; anorexia, right upper quadrant pain
- **Convalescence**: 2-12 weeks; slow normalization of LFTs
- **Fulminant hepatitis**: Encephalopathy within 8 weeks of jaundice onset; high mortality

**Alcoholic Hepatitis:**
- **Risk factors**: Heavy alcohol use (>60 g/day males, >40 g/day females; India higher due to country liquor)
- **Onset**: Often acute; jaundice with abdominal pain, fever
- **Signs**: Spider angiomas, palmar erythema, gynaecomastia, testicular atrophy (chronic)
- **Encephalopathy**: Present in 10-20% at presentation; poor prognostic sign

**Drug-Induced Liver Injury (DILI):**
- **Hepatocellular pattern**: Acetaminophen, isoniazid (TB endemic in India), amoxicillin
- **Cholestatic pattern**: Anabolic steroids, OCP, phenothiazines, amoxicillin-clavulanate
- **Timing**: Acetaminophen (acute 24-72 hours); others more insidious
- **Recovery**: Most resolve within 3-6 months of drug discontinuation

### Post-hepatic Jaundice (Biliary Obstruction)
**Physical Examination:**
- **Jaundice**: Often marked (>10-15 mg/dL); progressive over days to weeks
- **Dark urine**: Tea-colored
- **Pale/clay-colored stools**: Absence of stercobilin (pathognomonic)
- **Pruritus (itching)**: From bile salt accumulation; can be severe (sign of cholestasis)
- **Hepatomegaly**: If obstruction prolonged; initially normal
- **Abdominal mass**: Palpable if pancreatic cancer causing obstruction
- **Absent jaundice with RUQ pain**: Suggests biliary colic without obstruction

**Painless Jaundice (Red Flag for Malignancy):**
- **Pancreatic cancer**: Head of pancreas compresses CBD; progressive painless jaundice
- **Cholangiocarcinoma**: Intrahepatic duct obstruction; insidious presentation
- **Ampullary cancer**: Obstruction at ampulla of Vater
- **Metastatic lymphadenopathy**: Hilar nodes compress CBD

**Acute Obstruction (Gallstone):**
- **Biliary colic**: Sudden onset RUQ pain; radiates to right shoulder
- **Fever**: If cholangitis (infected obstructed bile duct); Charcot's triad (fever + jaundice + RUQ pain)
- **Jaundice**: May be absent if colic uncomplicated

## Investigation and Interpretation

### Liver Function Tests (LFTs)

**Bilirubin Pattern Interpretation:**
| Finding | Interpretation |
|---------|---|
| Total bilirubin >1.2 mg/dL | Hyperbilirubinemia present |
| Unconjugated >80% | Pre-hepatic or uptake/conjugation defect |
| Conjugated >50% | Hepatic or post-hepatic cholestasis |
| Conjugated >80% with normal transaminases | Post-hepatic obstruction likely |

**Transaminases (ALT, AST):**
- **ALT (alanine aminotransferase)**: More hepatocyte-specific; released from cytoplasm with necrosis
- **AST (aspartate aminotransferase)**: Less specific; also from muscle, RBCs, kidney; high in alcohol (from mitochondrial release)
- **ALT > AST**: Viral hepatitis, DILI, fatty liver disease (NAFLD)
- **AST > ALT**: Alcoholic hepatitis, cirrhosis, hemolysis (LDH very high)
- **Elevation degree**: >1000 IU/L in acute viral; <500 IU/L in cholestasis/obstruction
- **ALT/AST ratio**: >1 suggests NAFLD or DILI; <1 suggests alcohol or cirrhosis

**Alkaline Phosphatase (ALP) and GGT:**
- **ALP elevation**: Suggests hepatic origin if GGT also elevated (bone ALP has low GGT)
- **GGT**: Confirms hepatic origin; induced by alcohol, barbiturates
- **Pattern**: ALP/bilirubin ratio >4 = cholestatic pattern (obstruction or cholestasis)
- **Sources**: Bile duct epithelial proliferation in obstruction; hepatocellular origin in cholestasis

**Albumin and Prothrombin Time (PT/INR):**
- **Albumin**: Synthesized by liver; reflects chronic synthetic function; normal in acute hepatitis
- **PT/INR**: Measure clotting factors (factors II, V, VII, X synthesized in liver); prolonged in acute/chronic hepatitis
- **PT >3 seconds above control**: Severe hepatocellular damage; prognostic significance
- **Correction with vitamin K**: Suggests cholestasis with fat-soluble vitamin malabsorption

**Lactate Dehydrogenase (LDH):**
- **Elevation >10x normal**: Suggests acute hepatitis or hemolysis (very high in intravascular hemolysis)
- **Higher in AST vs ALT in hemolysis**: RBCs release LDH; mitochondrial dysfunction in alcohol increases AST

### Viral Hepatitis Serological Markers

**Hepatitis A:**
- **IgM anti-HAV**: Acute infection (positive first 1-2 weeks); screening test
- **IgG anti-HAV**: Lifelong immunity; no chronic carrier state
- **Significance**: Fecal-oral transmission; endemic India; acute self-limited illness

**Hepatitis B:**
- **HBsAg (surface antigen)**: First marker to appear; indicates active infection (acute or chronic)
- **Anti-HBc (core antibody)**: Appears after HBsAg; marks past/present infection
- **HBeAg**: Marker of high infectivity and active viral replication
- **Anti-HBe**: Indicates lower infectivity; transition to chronic carrier state
- **Anti-HBs**: Protective immunity; appears last; last to disappear
- **HBV DNA (viral load)**: Gold standard for activity; measured by PCR; quantitative
- **India prevalence**: 4% seropositive; 40 million chronic HBsAg carriers

**Hepatitis C:**
- **Anti-HCV**: Appears by week 8-12; may remain negative in early acute infection
- **HCV RNA (by RT-PCR)**: Direct marker of viral replication; gold standard for active infection
- **Genotype**: Important for treatment selection; genotype 3 most common in India
- **Clearance**: 15-20% spontaneously clear infection; 80% develop chronic infection

**Hepatitis E:**
- **IgM anti-HEV**: Acute infection (present 1-2 weeks)
- **IgG anti-HEV**: Recovery/immunity (lasts years; some studies suggest lifelong)
- **HEV RNA**: Indicates active infection; used to assess treatment response
- **Clinical significance**: Endemic in India; waterborne outbreaks common; high maternal mortality in pregnancy

### Imaging in Jaundice

**Ultrasound (First-line):**
- **Sensitivity**: 90% for dilated bile ducts; 80% for stones
- **Findings**:
  - Common bile duct diameter: Normal <6 mm; dilated >8 mm
  - Intrahepatic duct dilatation: Suggests obstruction proximal to point of dilatation
  - Gallstones: Hyperechoic with acoustic shadow
  - Pancreatic head swelling: Suggests pancreatitis or cancer
- **Advantages**: Non-invasive, no radiation, real-time, portable

**CT (Computed Tomography):**
- **Better for**: Pancreatic cancer evaluation, ductal level of obstruction
- **Triple-phase contrast**: Portal venous phase best for liver lesions; artery phase for pancreas
- **Sensitivity**: 85% for pancreatic cancer; 80% for CBD stones
- **Risk**: Radiation, contrast dye reaction, cost

**MRCP (Magnetic Resonance Cholangiopancreatography):**
- **Advantage**: No contrast injection needed; excellent for duct visualization
- **Sensitivity**: 95% for CBD stones; 90% for strictures
- **Risk**: Contraindicated in pacemakers; longer procedure time; cost
- **Gold standard for**: Bile duct visualization when ERCP contraindicated

**ERCP (Endoscopic Retrograde Cholangiopancreatography):**
- **Dual purpose**: Diagnostic (cannulate ducts) + therapeutic (sphincterotomy, stent)
- **Therapeutic options**: Stone extraction, stricture dilation, stent placement
- **Risk**: Pancreatitis (3-5%), perforation (1%), bleeding
- **India use**: High prevalence of CBD stones makes ERCP common

## Wilson Disease and Hemochromatosis Screening

### Wilson Disease Screening (see Mechanism layer for details)
- **Ceruloplasmin**: First test (<20 mg/dL abnormal)
- **24-hour urine copper**: Elevated (>100 mcg/24h)
- **Slit-lamp examination**: Look for Kayser-Fleischer rings (pathognomonic)
- **Family screening**: Siblings of identified patients screened before symptoms develop
- **Genetic testing**: ATP7B mutations if diagnosis unclear

### Hemochromatosis Screening
- **Serum iron and ferritin**: Elevated ferritin (>250 ng/mL male, >150 female)
- **Transferrin saturation**: >45% suggests iron overload
- **HFE genotyping**: C282Y homozygosity diagnostic
- **India**: Rare; mostly Western populations affected
- **Iron-overload risk**: In thalassemia (transfusion-related) and repeated transfusions

## Acute Liver Failure (ALF)

### Definition and Diagnosis
- **Coagulopathy**: PT/INR >1.5 (or >3 seconds above control) without pre-existing liver disease
- **Encephalopathy**: Any degree of altered mental status (Grade 1-4)
- **Timeline**: Illness onset to encephalopathy <8 weeks
- **Etiology**: Unknown in 10-15% (seronegative hepatitis suspected)
- **Severity**: Fulminant (encephalopathy within 8 weeks) vs hyperacute (<8 days)

### Etiology in India
- **Viral hepatitis**: HAV (often fulminant), HEV (especially pregnant women), rarely HBV (co-infected)
- **Drug-induced**: Acetaminophen (>10 g), anti-TB drugs (INH), herbal remedies
- **Autoimmune**: Autoimmune hepatitis flare
- **Metabolic**: Wilson disease, acute fatty liver of pregnancy

### King's College Criteria for Transplant Candidacy
**For non-acetaminophen ALF:**
- PT >100 seconds; OR
- Any three of: age <10 or >40 years; bilirubin >300 mmol/L (17.5 mg/dL); PT >50 seconds; coma (Grade 3-4)

**For acetaminophen ALF:**
- PT >100 seconds; OR
- Any three of: metabolic acidosis (pH <7.3); creatinine >300 mmol/L (3.4 mg/dL); coma (Grade 3-4); prothrombin time >50 seconds

### Management of ALF
- **Airway protection**: Intubate if Grade 3-4 encephalopathy
- **Hemodynamic support**: Maintain MAP >65 mmHg; norepinephrine if needed
- **Metabolic support**: Glucose (avoid hypoglycemia), electrolytes, fresh frozen plasma for bleeding
- **Lactulose/Neomycin**: Reduce ammonia in hepatic encephalopathy
- **N-acetylcysteine (NAC)**: Especially in acetaminophen overdose; improves survival
- **Transplant referral**: Discuss early if high-risk features or progressive deterioration

## Chronic Liver Disease Staging

### Child-Pugh Classification (Ascites, Bilirubin, Albumin, PT, Encephalopathy)
| Score | Class | 1-year survival | 2-year survival |
|-------|-------|---|---|
| 5-6 | A | 100% | 85% |
| 7-9 | B | 80% | 60% |
| 10-15 | C | 45% | 35% |

- **Usage**: Predicts prognosis; determines transplant timing
- **Limitations**: Subjective (ascites, encephalopathy grading); laboratory-dependent

### MELD Score (Model for End-stage Liver Disease)
**Formula**: 3.78 × ln(bilirubin) + 11.2 × ln(INR) + 9.57 × ln(creatinine) + 6.43

- **Interpretation**: 10 = 90% survival at 3 months; 40 = 10% survival
- **Usage**: Transplant prioritization; more objective than Child-Pugh
- **Advantages**: Laboratory-based; accounts for renal dysfunction; validated

### FIB-4 Index (Non-invasive Fibrosis Marker)
**Formula**: (AST / Platelet count [10^9/L]) × sqrt(ALT)

- **<1.30**: Low fibrosis likelihood
- **1.30-2.67**: Intermediate fibrosis
- **>2.67**: Advanced fibrosis/cirrhosis likely
- **Advantage**: No biopsy needed; can monitor over time

## Treatment of Hepatic Encephalopathy

### Non-pharmacologic Management
- **Dietary protein restriction**: 40-60 g/day (not zero-protein diet which worsens malnutrition)
- **Lactulose**: Non-absorbed disaccharide; osmotic laxative increases stool bulk; decreases ammonia absorption
  - Dose: 15-30 mL 2-3x daily; titrate to 2-3 soft stools daily
  - Mechanism: Acidifies colon (favors NH4+ over NH3); feeds beneficial bacteria; osmotic effect
- **Dietary branched-chain amino acids (BCAA)**: Valine, leucine, isoleucine for protein synthesis; reduce false neurotransmitter precursors
- **Avoid triggers**: Constipation, infection, GI bleeding, diuretics, NSAIDs

### Pharmacologic Management
- **Lactulose**: First-line; non-invasive; side effect is diarrhea
- **Neomycin**: Non-absorbable antibiotic; reduces ammonia-producing bacteria (60 mg/kg/day in divided doses)
- **Rifaxomicin**: Selective gut antibiotic; broad-spectrum coverage; reduces bacterial ammonia production
- **Zinc supplementation**: Assists in ammonia detoxification via carbamoyl phosphate synthetase
- **L-ornithine L-aspartate (LOLA)**: Enhances ammonia incorporation into urea; improves mental status
- **Benzodiazepine antagonists**: Flumazenil (experimental); antagonizes endogenous benzodiazepines

### Precipitant Management
- **Infection**: Treat SBP with ceftriaxone; UTI, pneumonia with appropriate antibiotics
- **GI bleeding**: Variceal bleeding management; octreotide for variceal hemostasis; PPI for ulcer prophylaxis
- **Renal failure**: Monitor creatinine; avoid nephrotoxic drugs; dialysis if needed
- **Electrolyte correction**: Correct hypokalemia (worsens ammonia reabsorption); maintain pH

## Indian-Specific Causes of Jaundice and Liver Failure

### Hepatitis A (HAV)
- **Epidemiology**: Endemic in India; 100-200 million infected adults (acquired early in life)
- **Transmission**: Fecal-oral; waterborne epidemics common
- **Presentation**: Acute hepatitis; typically self-limited
- **Risk**: Low mortality in children; increased in adults and fulminant in pregnant women
- **Prevention**: Good sanitation, HAV vaccine (not routine in India yet)

### Hepatitis E (HEV)
- **Epidemiology**: Most common cause of acute viral hepatitis in India; 30-40% adult seroprevalence
- **Transmission**: Waterborne; fecal-oral from contaminated sources
- **Risk**: High mortality in pregnancy (15-25%, especially third trimester); associated with preterm labor
- **Clinical course**: Usually self-limited in immunocompetent; chronic in immunocompromised
- **Outbreaks**: Water contamination drives epidemic spread; sewage pollution common in Indian cities

### Wilson Disease (Copper Metabolism Disorder)
- **India prevalence**: Higher than reported in Western countries; autosomal recessive
- **Presentation**: Can present as acute hepatitis, fulminant failure, or chronic cirrhosis
- **Neuropsychiatric**: Tremor, dystonia, personality changes, psychosis
- **Diagnosis**: Ceruloplasmin <20 mg/dL; 24-hour urine copper elevated; Kayser-Fleischer rings
- **Treatment**: Penicillamine, trientine, zinc; lifelong management needed
- **Genetic counseling**: Siblings screened for presymptomatic disease

### Leptospirosis
- **India epidemiology**: Endemic; occupational exposure (farmers, sewage workers)
- **Transmission**: Contact with rat urine/blood in contaminated water
- **Clinical course**: Biphasic illness; leptospiremic phase (1st week) → immune phase (weeks 2-3)
- **Weil's disease**: Severe form with jaundice, renal failure, hemorrhage; 5-15% mortality
- **Liver involvement**: Hepatocellular injury; mild jaundice usually <10 mg/dL

### Tuberculosis-related Liver Disease
- **India TB burden**: High; TB-endemic nation
- **Mechanism**: Granulomatous hepatitis from TB dissemination
- **Drug-induced**: Anti-TB drugs (INH, RIF, PZA) cause hepatotoxicity in 1-3% (higher risk if acetylator status)
- **Presentation**: Insidious jaundice; may appear weeks into TB treatment
- **Management**: Monitor LFTs; withhold hepatotoxic drugs if transaminases >5x normal

### Malaria-associated Jaundice
- **India malaria endemic areas**: Plasmodium falciparum and P. vivax
- **Mechanism**: RBC hemolysis; hepatocellular injury from parasite toxins
- **Pattern**: Predominantly unconjugated (hemolysis) with mild conjugated component
- **Severe malaria**: Associated with cerebral malaria, acute kidney injury, severe jaundice
- **Treatment**: Antimalarial drugs (artemether, artemisinin derivatives); supportive care

### Opisthorchis viverrini (Liver Fluke)
- **India endemic**: Parts of southern India (less common than Thailand/Laos)
- **Transmission**: Eating raw/undercooked freshwater fish containing metacercariae
- **Pathology**: Chronic inflammation → cholangitis → biliary strictures → cholangiocarcinoma risk
- **Presentation**: Mild jaundice, right upper quadrant pain, hepatomegaly
- **Prevention**: Thorough cooking of fish; praziquantel treatment if infected
`,
        mnemonics: [
          {
            text: "Pre-hepatic = Hemolytic pattern (unconjugated>80%, no bilirubinuria), Hepatic = Hepatocellular pattern (mixed bilirubin, ALT/AST >500), Post-hepatic = Obstructive pattern (conjugated >50%, ALP>>)",
            explanation: "Clinical patterns differentiate types of jaundice"
          },
          {
            text: "LFT interpretation = ALT>AST (viral/DILI), AST>ALT (alcohol/cirrhosis); high transaminases (>1000) = acute viral; high ALP (>300) = cholestasis/obstruction",
            explanation: "Key transaminase patterns in liver disease"
          },
          {
            text: "Viral hepatitis: HAV IgM (acute)/IgG (immunity); HBV HBsAg (active); HCV anti-HCV (80% by week 8); HEV IgM (acute)",
            explanation: "Serology patterns for each hepatitis virus"
          },
          {
            text: "Painless jaundice red flag = Pancreatic cancer, cholangiocarcinoma; requires imaging (CT/MRCP)",
            explanation: "Malignancy presentation in post-hepatic jaundice"
          },
          {
            text: "King's College criteria ALF = Non-acetaminophen (PT>100 or 3 of: age <10/>40, bili>17.5, PT>50, coma); Acetaminophen (pH<7.3, Cr>3.4, or coma+PT>50)",
            explanation: "Transplant candidacy criteria in acute liver failure"
          }
        ],
        keyPoints: [
          "Jaundice clinical clues: Pre-hepatic (no dark urine, splenomegaly); Hepatic (dark urine, hepatomegaly, encephalopathy); Post-hepatic (pale stool, pruritus, painless)",
          "Acute viral hepatitis: prodromal phase 1-2 weeks, icteric phase with jaundice/dark urine, convalescence 2-12 weeks",
          "Alcoholic hepatitis presents with fever, jaundice, RUQ pain; AST>ALT pattern; thiamine/corticosteroids considered",
          "Drug-induced liver injury: Hepatocellular (acetaminophen, INH, amoxicillin) vs Cholestatic (anabolic steroids, OCP)",
          "Bilirubin fractionation: unconjugated >80% = pre-hepatic; mixed = hepatic; conjugated >50% = post-hepatic",
          "LFT pattern: Transaminases >1000 = acute viral; Transaminases <500 with high ALP = cholestasis/obstruction",
          "Viral serology: HAV/HEV IgM for acute; HBV HBsAg (active), HCV anti-HCV + RNA needed for diagnosis",
          "Imaging: Ultrasound first-line for obstruction; CT/MRCP for detailed ductal anatomy and pancreatic evaluation",
          "Acute liver failure: PT/INR >1.5 + encephalopathy within 8 weeks; King's College criteria guide transplant referral",
          "Child-Pugh and MELD: Prognostic tools for chronic liver disease; MELD more objective for transplant allocation",
          "Hepatic encephalopathy management: Lactulose (first-line), neomycin, treat precipitants (infection, bleeding, constipation)",
          "India-specific causes: HAV/HEV endemic, Wilson disease underdiagnosed, TB drug hepatotoxicity, leptospirosis occupational, malaria parasitemia"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Acute and Chronic Hepatitis; Portal Hypertension", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "Clinical Management of Jaundice and Liver Failure", edition: "11th" },
          { book: "Davidson's Principles and Practice of Medicine", chapter: "Hepatitis and Cirrhosis Management", edition: "24th" }
        ]
      },
      {
        layer: 4,
        slug: "jaundice-layer-4-exam",
        title: "Jaundice & Liver Failure - Exam Preparation",
        estimatedMinutes: 20,
        summary: "Quick reference tables, LFT interpretation, differential diagnosis of jaundice, high-yield clinical vignettes, and common exam traps.",
        contentMd: `# Jaundice & Liver Failure - Exam Preparation

## Quick Reference: Jaundice Types and LFT Pattern

| Feature | Pre-hepatic | Hepatic | Post-hepatic |
|---------|---------|---------|---------|
| **Mechanism** | Hemolysis | Cell damage/cholestasis | Duct obstruction |
| **Unconjugated Bili** | Elevated (>80%) | Mixed elevation | Mildly elevated |
| **Conjugated Bili** | Normal | Elevated (mixed) | Markedly elevated (>50%) |
| **ALT/AST** | Normal (mild ↑ if hemolysis) | >500 IU/L (acute), <500 (chronic) | <500 IU/L |
| **ALP** | Normal | Mildly ↑ | Markedly ↑ (>300) |
| **Urine Bili** | Absent | Present (dark urine) | Present (dark urine) |
| **Urine Urobilinogen** | Increased | Variable | Absent/Decreased |
| **Stool Color** | Normal/dark | Varies with cholestasis | Pale/clay-colored |
| **Splenomegaly** | Often present | Variable | Absent |
| **Hepatomegaly** | Absent | Present (tender/firm) | Normal until obstruction prolonged |

## LFT Interpretation Algorithms

### Step 1: Assess Total Bilirubin
- **Total <1.2 mg/dL**: Normal
- **Total 1.2-5 mg/dL**: Mild hyperbilirubinemia
- **Total 5-15 mg/dL**: Moderate hyperbilirubinemia
- **Total >15 mg/dL**: Severe hyperbilirubinemia (suspect obstruction or hemolysis)

### Step 2: Determine Conjugated/Unconjugated Ratio
- **Unconjugated >80% of total**: Pre-hepatic pattern
- **Mixed (40-60% conjugated)**: Hepatic pattern
- **Conjugated >80% of total**: Post-hepatic/cholestasis pattern

### Step 3: Interpret Transaminases
- **ALT/AST both normal**: Non-hepatic cause of hyperbilirubinemia (Gilbert, hemolysis, unconjugated)
- **ALT > AST with high elevation (>1000)**: Acute viral hepatitis, drug-induced hepatitis, ischemic hepatitis
- **AST > ALT with mild-moderate elevation**: Alcoholic hepatitis, cirrhosis, hemolysis
- **AST/ALT ratio >2**: Suggestive of alcohol-related disease or cirrhosis

### Step 4: Consider ALP and GGT
- **ALP elevated + GGT elevated**: Hepatic origin of ALP
- **ALP elevated + GGT normal**: Bone origin (not liver pathology)
- **ALP/Bilirubin ratio**: >4 = cholestatic pattern; <4 = hepatocellular pattern
- **Marked ALP elevation (>300) with mild ALT (<500)**: Cholestasis or obstruction

### Step 5: Assess Synthetic Function
- **Albumin >3.5 g/dL + PT normal**: Good synthetic function; suggests acute hepatitis
- **Albumin <3 g/dL or PT >2 seconds prolonged**: Chronic disease or severe hepatitis
- **PT corrects with vitamin K**: Cholestasis with fat malabsorption; not hepatocellular dysfunction

## Differential Diagnosis of Jaundice

### Pre-hepatic (Unconjugated Hyperbilirubinemia)
| Condition | Key Feature | Diagnostic Test |
|-----------|---|---|
| Gilbert Syndrome | Mild (usually <3 mg/dL); triggered by stress | Genetic polymorphism; otherwise normal |
| Hemolytic Anemia (immune) | Splenomegaly; reticulocytosis | Direct Coombs test positive |
| G6PD Deficiency | Episodic hemolysis with triggers | G6PD enzyme assay; Heinz bodies |
| Hereditary Spherocytosis | Family history; osmotic fragility | Osmotic fragility test; RBC morphology |
| Thalassemia | Microcytic anemia; family history | Hemoglobin electrophoresis |
| Malaria | Fever; travel history; parasitemia | Peripheral smear; PCR |

### Hepatic (Mixed Hyperbilirubinemia)
| Condition | Specific Clues | Diagnostic Test |
|-----------|---|---|
| Viral Hepatitis A | Acute onset; fecal-oral exposure; prodrome | IgM anti-HAV positive |
| Viral Hepatitis B | Risk factors (IVDU, sexual); can be chronic | HBsAg positive; HBV DNA |
| Viral Hepatitis C | Risk factors; mild acute; usually chronic | Anti-HCV + HCV RNA |
| Viral Hepatitis E | Waterborne; pregnant women at risk | IgM anti-HEV; HEV RNA |
| Alcoholic Hepatitis | Heavy alcohol use; fever; AST>ALT | AST>ALT ratio; elevated GGT |
| Drug-Induced Hepatitis | Temporal relationship with drug start | LFT pattern; eosinophilia; rash |
| Autoimmune Hepatitis | Young women; smooth muscle/nuclear antibodies | ANA, anti-smooth muscle antibody |
| Wilson Disease | Age <35; neuropsych symptoms; hemolysis | Ceruloplasmin <20; urine Cu; KF rings |
| Cirrhosis | Ascites, varices, coagulopathy | FIB-4, imaging (ultrasound/CT) |
| Acute Liver Failure | Encephalopathy within 8 weeks; coagulopathy | PT/INR >1.5; Grade 1+ encephalopathy |

### Post-hepatic (Conjugated Hyperbilirubinemia)
| Condition | Specific Clues | Diagnostic Test |
|-----------|---|---|
| Gallstone Obstruction | Biliary colic history; female/fat/40 | Ultrasound (stones + CBD dilation) |
| Pancreatic Cancer | Painless jaundice (RED FLAG); weight loss | CT; CA 19-9 (not diagnostic alone) |
| Cholangiocarcinoma | Progressive jaundice; pruritus | MRCP; CA 19-9; tissue biopsy |
| Biliary Stricture | Post-ERCP or post-surgical history | MRCP; ERCP with dilation |
| Primary Sclerosing Cholangitis (PSC) | IBD association; beads-on-string appearance | MRCP findings; liver biopsy |
| Cholangitis (infected obstructed bile) | Fever (Charcot's triad); sepsis | Imaging + clinical; blood culture |

## High-Yield Clinical Vignettes

### Vignette 1: Acute Hemolytic Anemia with Jaundice
**Presentation:** 24-year-old male, admitted with fever, jaundice, dark urine, splenomegaly. LFTs: Total bili 5 mg/dL (unconjugated 4.5 mg/dL), ALT 80, AST 70, ALP 95, Hb 8 g/dL, reticulocyte 8%.

**Q: What is the likely diagnosis?**
A: Pre-hepatic jaundice from hemolytic anemia. Unconjugated >80%, splenomegaly, reticulocytosis, normal liver enzymes.

**Q: What is the next diagnostic step?**
A: Direct Coombs test (DAT) to determine if immune-mediated or non-immune hemolysis.

---

### Vignette 2: Acute Viral Hepatitis
**Presentation:** 28-year-old male, 5 days of jaundice, dark urine, pale stools, prodromal fever, myalgia resolved. LFTs: Total bili 8 mg/dL (conjugated 4.5 mg/dL), ALT 2800, AST 2000, ALP 150, albumin 3.8, PT 1.2 seconds.

**Q: What is the pattern and likely diagnosis?**
A: Hepatocellular pattern (ALT>AST, marked elevation >1000) in acute hepatitis. Likely viral (HAV most common globally; HEV in India). Serologies needed.

**Q: Why is albumin preserved despite high transaminases?**
A: Acute hepatitis; albumin is chronically synthesized. It takes weeks to decline in acute disease. Preserved albumin is a good prognostic sign.

---

### Vignette 3: Painless Jaundice with Weight Loss
**Presentation:** 60-year-old male, progressive jaundice over 3 weeks, no pain, weight loss 5 kg in 1 month, pale stools, dark urine. LFTs: Total bili 14 mg/dL (conjugated 12 mg/dL), ALT 280, AST 320, ALP 420, albumin 2.8.

**Q: What is the RED FLAG diagnosis to exclude?**
A: Pancreatic cancer. Painless jaundice is classic. Head of pancreas obstructs CBD. CT abdomen/pelvis and CA 19-9 needed. Weight loss + low albumin suggest advanced disease.

**Q: What imaging is indicated?**
A: CT with IV contrast (3-phase); assesses resectability. MRCP if need to visualize ducts without stones. ERCP if therapeutic intervention needed (stent for palliation).

---

### Vignette 4: Fulminant Hepatitis
**Presentation:** 22-year-old female, 5 days of jaundice, now confused, flapping tremor, INR 4.5, ammonia 180 mcmol/L. LFTs: Total bili 18 mg/dL, ALT 8000, AST 7000, albumin 2.2, creatinine 1.8.

**Q: What is the diagnosis and prognosis assessment?**
A: Acute Liver Failure (ALF). Encephalopathy (Grade 2-3) + coagulopathy (PT >3 seconds) within <8 weeks. High ammonia suggests hepatic encephalopathy.

**Q: Apply King's College criteria for non-acetaminophen ALF. Is transplant indicated?**
A: Transplant indicated if: PT >100 seconds (INR 4.5 = ~60 seconds, not >100) OR 3 of the criteria below met: (1) Age 22 (not <10, not >40); (2) Bili 18 (not >17.5); (3) PT not >50 seconds; (4) Coma present (Grade 2-3). She meets 1 criterion; borderline but encephalopathy + renal failure worrisome. Transplant team consultation warranted.

---

### Vignette 5: Asymptomatic Hyperbilirubinemia
**Presentation:** 26-year-old male, incidental finding of jaundice on routine exam. Healthy, no alcohol, no travel. LFTs: Total bili 2.8 mg/dL (unconjugated 2.4 mg/dL), ALT 35, AST 32, ALP 80. Bilirubin triggered by recent fasting (college exams).

**Q: What is the diagnosis?**
A: Gilbert Syndrome. Mild unconjugated hyperbilirubinemia triggered by fasting/stress. Normal liver enzymes. No treatment needed; reassurance is key.

**Q: How would you confirm diagnosis?**
A: Clinical; genetic polymorphism testing available but not usually needed. Can observe normalization of bilirubin when stress resolves.

---

### Vignette 6: Cholestatic Pattern with Hepatomegaly
**Presentation:** 42-year-old female with pruritus (severe), jaundice, pale stools, dark urine. No fever, no RUQ pain. LFTs: Total bili 11 mg/dL (conjugated 10 mg/dL), ALT 150, AST 160, ALP 450, GGT 380. Ultrasound: normal CBD, no stones, normal pancreas. Liver biopsy pending.

**Q: What is the most likely diagnosis?**
A: Intrahepatic cholestasis. Post-hepatic pattern (high conjugated bili, high ALP/GGT), but imaging normal. Consider: Primary sclerosing cholangitis (PSC), Primary biliary cirrhosis (PBC), or drug-induced cholestasis.

**Q: What is the next diagnostic step?**
A: Serum antibodies: Anti-mitochondrial antibody (AMA) for PBC, pANCA for PSC. MRCP for ductal visualization. Liver biopsy may clarify diagnosis.

---

### Vignette 7: Wilson Disease Presenting as Acute Hepatitis
**Presentation:** 18-year-old male, acute jaundice, encephalopathy, mild neurological tremor. LFTs: Total bili 16 mg/dL, ALT 2000, AST 2200, albumin 2.5, PT 2.5 seconds. Low hemoglobin (7 g/dL) with negative Coombs. Ceruloplasmin 8 mg/dL (normal 20-40).

**Q: What is the diagnosis?**
A: Wilson Disease with acute hepatitis. Low ceruloplasmin + encephalopathy + hemolytic anemia (Coombs-negative) + young age = classic presentation.

**Q: Next diagnostic step?**
A: 24-hour urine copper (should be elevated >100 mcg/24h); slit-lamp for Kayser-Fleischer rings; genetic testing for ATP7B mutation. Start penicillamine/trientine immediately (don't wait for all confirmatory tests).

---

## Common Exam Traps and Pearls

### Trap 1: Assuming All Jaundice is Liver Disease
- **Pearl:** Hemolysis (pre-hepatic) can cause severe jaundice without ALT/AST elevation
- **Key clue:** Unconjugated >80% + normal transaminases = look for hemolysis

### Trap 2: Confusing ALT/AST Elevation Degree with Etiology
- **Pearl:** >1000 IU/L = think acute viral hepatitis or ischemic hepatitis; not chronic alcohol
- **Common error:** High transaminases automatically assumed to be acute viral; could be fulminant failure

### Trap 3: Forgetting "Painless Jaundice = Cancer"
- **Pearl:** Progressive jaundice without pain + weight loss = pancreatic/biliary cancer until proven otherwise
- **Action:** Get CT/MRCP; don't delay with imaging

### Trap 4: Missing Wilson Disease in Young Patients
- **Pearl:** Any patient <40 with jaundice + encephalopathy + hemolysis → get ceruloplasmin
- **Common error:** Attributing to viral hepatitis; missing the treatable inherited condition

### Trap 5: Interpreting Albumin in Acute Hepatitis
- **Pearl:** Low albumin in acute disease (<2-3 weeks) is NOT a sign of fulminant failure (takes weeks to drop)
- **Better prognostic indicator:** PT/INR prolongation (makes clotting factors faster than albumin)

### Trap 6: Confusing Hepatic Encephalopathy with Other Causes of Altered Mental Status
- **Pearl:** Not all encephalopathy in liver disease is hepatic; consider hypoglycemia, infection (UTI), electrolytes
- **Workup:** Check glucose, cultures, electrolytes before attributing to ammonia

### Trap 7: Forgetting Cholestatic Pattern in Pregnancy
- **Pearl:** Cholestatic jaundice in pregnant woman → intrahepatic cholestasis of pregnancy
- **Risk:** High fetal mortality if untreated; ursodeoxycholic acid therapy recommended

### Trap 8: Post-hepatic Jaundice Always Means Obstruction Visible on Imaging
- **Pearl:** Intrahepatic cholestasis (PSC, PBC, sepsis, drug) presents with post-hepatic pattern WITHOUT obstruction
- **Diagnostic approach:** If no obstruction on imaging with post-hepatic pattern → think cholestasis; get MRCP and antibodies

---

## High-Yield Mnemonic Recap

**HINT for Jaundice Differential:**
- **H**emolysis (pre-hepatic): Unconjugated >80%, reticulocytosis, splenomegaly
- **I**nfection (hepatic): Viral serology, fever, systemic symptoms
- **N**eoplasm (post-hepatic): Painless jaundice, weight loss (RED FLAG)
- **T**oxic (hepatic): Drug history, timing of jaundice with drug start

**LOFT for LFT Pattern:**
- **L**ow albumin + prolonged PT: Chronic liver disease (liver synthetic failure)
- **O**bstructive pattern (ALP>>ALT): Cholestasis or post-hepatic obstruction
- **F**lammatory pattern (ALT>>ALP): Hepatitis or hepatocellular injury
- **T**ransaminitis >1000: Acute viral, drug-induced, or ischemic hepatitis

**CURE for Cirrhosis Sequelae:**
- **C**oagulopathy (PT prolonged): Impaired clotting factor synthesis
- **U**rea cycle dysfunction: Hepatic encephalopathy (ammonia elevation)
- **R**enal vasoconstriction: Hepatorenal syndrome (acute kidney injury in cirrhosis)
- **E**sophageal varices: Portal hypertension → upper GI bleeding
`,
        mnemonics: [
          {
            text: "LFT pattern summary = Unconjugated >80% (pre-hepatic), Mixed (hepatic), Conjugated >50% (post-hepatic)",
            explanation: "Quick determination of jaundice type from bilirubin fractionation"
          },
          {
            text: "Transaminase elevation degree: >1000 (acute viral/ischemic), 500-1000 (hepatitis), <500 (cholestasis/obstruction)",
            explanation: "ALT/AST levels narrow differential"
          },
          {
            text: "ALT>AST in viral hepatitis; AST>ALT in alcohol/cirrhosis (AST from mitochondrial release)",
            explanation: "Transaminase ratio determines etiology"
          },
          {
            text: "Painless jaundice + weight loss = Cancer (pancreatic/biliary) until proven otherwise; get CT/MRCP",
            explanation: "Red flag presentation requiring urgent imaging"
          },
          {
            text: "Young patient + jaundice + encephalopathy + hemolysis = Wilson disease; check ceruloplasmin",
            explanation: "Frequently missed diagnosis; treatable if caught early"
          }
        ],
        keyPoints: [
          "Bilirubin fractionation determines jaundice type: unconjugated >80% = pre-hepatic; mixed = hepatic; conjugated >80% = post-hepatic",
          "LFT pattern interpretation: High transaminases (>1000) = acute viral; High ALP (>300) with low transaminases = obstruction/cholestasis",
          "Transaminase ratio: ALT>AST = viral/drug-induced; AST>ALT = alcoholic hepatitis/cirrhosis",
          "Synthetic function: Albumin drops slowly (weeks); PT/INR prolongs quickly (days); better prognostic indicator in acute disease",
          "Viral serology: HAV IgM (acute); HBV HBsAg (active); HCV anti-HCV + RNA (active); HEV IgM (acute)",
          "Post-hepatic pattern DDx: Gallstones (imaging shows), pancreatic cancer (painless + weight loss), PSC (MRCP shows beads), intrahepatic cholestasis (normal imaging)",
          "Acute Liver Failure: Encephalopathy + PT/INR >1.5 within 8 weeks; King's College criteria guide transplant timing",
          "Hepatic encephalopathy: Ammonia elevation + endogenous benzodiazepines + astrocyte swelling; managed with lactulose, treat precipitants",
          "Wilson disease red flags: Young age, neuropsych symptoms, hemolytic anemia, low ceruloplasmin (<20), Kayser-Fleischer rings",
          "India-specific: HAV/HEV endemic, Wilson disease higher prevalence, TB drug hepatotoxicity, malaria parasitemia, leptospirosis occupational"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Approach to Jaundice and Abnormal Liver Tests", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "Differential Diagnosis of Jaundice", edition: "11th" },
          { book: "Davidson's Principles and Practice of Medicine", chapter: "Jaundice Differential Diagnosis", edition: "24th" }
        ]
      },
      {
        layer: 5,
        slug: "jaundice-layer-5-active-recall",
        title: "Jaundice & Liver Failure - Active Recall",
        estimatedMinutes: 15,
        summary: "Spaced repetition flashcards with Q&A pairs for consolidating knowledge on jaundice, liver failure, and related diagnoses.",
        contentMd: `# Jaundice & Liver Failure - Active Recall Flashcards

## Q1: Normal Bilirubin Metabolism
**Q: Describe the complete pathway of bilirubin metabolism from hemoglobin breakdown to fecal excretion.**

A: (1) Heme catabolism in RES produces unconjugated bilirubin (1-2 g/day); (2) Unconjugated bilirubin binds albumin (protects from renal loss); (3) OATP transporters uptake unconjugated bilirubin into hepatocytes; (4) Ligandin temporarily stores unconjugated bilirubin in cytoplasm; (5) UGT1A1 conjugates unconjugated bilirubin to glucuronic acid; (6) MRP2 transporter actively pumps conjugated bilirubin into canalicular lumen; (7) Conjugated bilirubin excreted in bile; (8) Bacteria deconjugate bilirubin in colon; (9) Stercobilin (brown color) excreted in feces.

---

## Q2: Bilirubin Fractionation Interpretation
**Q: Patient has total bilirubin 4 mg/dL, unconjugated 3.2 mg/dL, conjugated 0.8 mg/dL. What does this pattern indicate?**

A: Pre-hepatic hyperbilirubinemia (unconjugated >80% of total). Suggests hemolysis, ineffective erythropoiesis, or reduced hepatic uptake (rare). Liver function is normal; cannot conjugate excess bilirubin produced by RBC breakdown. Causes include hemolytic anemia, hereditary spherocytosis, G6PD deficiency, thalassemia, malaria.

---

## Q3: Gilbert Syndrome
**Q: What is Gilbert syndrome? How is it diagnosed and managed?**

A: Mild unconjugated hyperbilirubinemia (usually <3 mg/dL) affecting 3-7% of population. Caused by UGT1A1 promoter polymorphism reducing enzyme activity to ~30%. Triggered by fasting, stress, illness. Diagnosis is clinical (bilirubin normalizes when stressor resolves); genetic testing available but not needed. No treatment; reassurance that condition is benign. Avoid unnecessary investigations.

---

## Q4: Crigler-Najjar vs Dubin-Johnson vs Rotor
**Q: Compare and contrast Crigler-Najjar, Dubin-Johnson, and Rotor syndromes.**

A:
- **Crigler-Najjar Type 1**: UGT1A1 absent (0%); bilirubin 20-50 mg/dL (unconjugated); kernicterus risk; phototherapy/transplant needed; no response to phenobarbital.
- **Crigler-Najjar Type 2**: UGT1A1 reduced to ~10%; bilirubin 6-20 mg/dL; improves with phenobarbital (enzyme induction).
- **Dubin-Johnson**: MRP2 transporter defect; conjugated hyperbilirubinemia (2-5 mg/dL); dark pigmented liver (black liver); benign.
- **Rotor**: Unknown mechanism (possibly uptake/storage defect); conjugated hyperbilirubinemia (2-5 mg/dL); liver appears normal; benign.

---

## Q5: Pre-hepatic vs Hepatic vs Post-hepatic Patterns
**Q: Summarize the LFT findings that distinguish pre-hepatic, hepatic, and post-hepatic jaundice.**

A:
| Feature | Pre-hepatic | Hepatic | Post-hepatic |
|---------|---|---|---|
| Unconjugated | Elevated (>80%) | Mixed elevation | Mildly elevated |
| Conjugated | Normal | Elevated (mixed) | Markedly elevated (>50%) |
| ALT/AST | Normal or mild ↑ | >500 IU/L (acute) | <500 IU/L |
| ALP | Normal | Mildly ↑ | Markedly ↑ (>300) |
| Urine bili | Absent | Present | Present |
| Stool | Normal/dark | Variable | Pale/clay-colored |

---

## Q6: Hemolytic Anemia Diagnosis
**Q: A patient presents with unconjugated hyperbilirubinemia, reticulocytosis, and splenomegaly. What is the next diagnostic step?**

A: Direct Coombs test (DAT). If positive, immune-mediated hemolysis (warm antibody AIHA, cold agglutinin disease). If negative, consider non-immune hemolysis (hereditary spherocytosis, G6PD deficiency, thalassemia). Further testing: peripheral blood smear (spherocytes, schistocytes), osmotic fragility test, G6PD enzyme assay, hemoglobin electrophoresis.

---

## Q7: Acute Viral Hepatitis
**Q: List the clinical phases of acute viral hepatitis and their characteristic features.**

A: (1) **Prodromal phase (1-2 weeks)**: Fever, malaise, myalgia, arthralgia, anorexia; jaundice absent; transaminases rising; (2) **Icteric phase**: Jaundice develops; fever resolves; dark urine, pale stools, right upper quadrant pain, hepatomegaly, transaminases peak (often >1000); (3) **Convalescence (2-12 weeks)**: Jaundice fades, appetite returns, fatigue persists, LFTs gradually normalize, full recovery expected in HAV (acute only) and HEV; HBV/HCV may progress to chronic.

---

## Q8: Viral Hepatitis Serology
**Q: A patient with acute hepatitis has IgM anti-HAV negative, HBsAg positive, HCV anti-HCV negative. What is the diagnosis?**

A: Acute hepatitis B (HBsAg is first serological marker to appear in HBV). IgM anti-HBc would be positive but is not tested in this scenario. Confirm with IgM anti-HBc. HBV DNA (PCR) assesses viral load and replication activity. Follow-up: Repeat HBsAg in 6 months. If HBsAg persists >6 months, indicates chronic HBV infection.

---

## Q9: Wilson Disease
**Q: A 22-year-old presents with acute hepatitis, encephalopathy, and hemolytic anemia. Ceruloplasmin is 8 mg/dL (normal 20-40). Describe the diagnostic and therapeutic approach.**

A: **Diagnosis**: Wilson disease (ATP7B mutation causing copper accumulation). Confirmatory tests: 24-hour urine copper (elevated >100 mcg/24h), slit-lamp examination for Kayser-Fleischer rings (pathognomonic if present), genetic testing for ATP7B mutations. **Treatment**: Start copper chelation immediately (do not wait for all confirmatory tests in symptomatic patients). Penicillamine 250 mg 4x daily (first-line, monitor for taste disturbance); alternative is trientine. Zinc supplementation for maintenance therapy. Lifelong management required. Genetic counseling; siblings screened presymptomatically.

---

## Q10: Acute Liver Failure - King's College Criteria
**Q: A 35-year-old with acute hepatitis is now Grade 2 encephalopathy, PT 80 seconds, bilirubin 16 mg/dL, albumin 2.1. Apply King's College criteria and determine transplant candidacy.**

A: **Acute Liver Failure**: Encephalopathy (Grade 2) + coagulopathy (PT 80 seconds) within 8 weeks. **King's College Criteria for non-acetaminophen ALF**: Transplant indicated if PT >100 seconds OR any three of: age <10 or >40 years (age 35, not met), bilirubin >300 mmol/L or 17.5 mg/dL (16, not met), PT >50 seconds (YES, 80 seconds), coma (Grade 3-4) (NO, Grade 2). Patient meets 1 criterion (PT >50). Other findings worrisome: low albumin (2.1), encephalopathy. **Recommendation**: Urgent transplant team consultation; patient is borderline but deteriorating and may meet criteria soon.

---

## Q11: Post-hepatic Jaundice Imaging Strategy
**Q: A patient presents with painless jaundice, pale stools, dark urine, and 5 kg weight loss. LFTs show conjugated hyperbilirubinemia. What is the imaging approach?**

A: **Red flag: Painless jaundice + weight loss = cancer**. (1) **First-line**: Ultrasound (assess CBD dilation, pancreatic head size, liver lesions). (2) **If stone suspected**: Proceed with ERCP for removal. (3) **If no stone but obstruction suspected**: CT with IV contrast (3-phase) to assess pancreatic cancer resectability, metastases; CA 19-9 level. (4) **For duct details**: MRCP (excellent for visualizing ducts without contrast injection). (5) **Tissue diagnosis**: ERCP with biopsy/FNA if malignancy suspected.

---

## Q12: Hepatic Encephalopathy Management
**Q: List the non-pharmacological and pharmacological management strategies for hepatic encephalopathy.**

A: **Non-pharmacological**: (1) Dietary protein restriction to 40-60 g/day (not zero-protein, which worsens malnutrition); (2) Identify and treat precipitants (infection, bleeding, constipation, diuretic overuse, renal failure, drugs); (3) Ensure adequate calories and micronutrients. **Pharmacological**: (1) **Lactulose** (first-line): Non-absorbed disaccharide; osmotic laxative; dose 15-30 mL 2-3x daily, titrated to 2-3 soft stools daily; acidifies colon (NH3 → NH4+); (2) **Neomycin**: Non-absorbable antibiotic; 60 mg/kg/day divided doses; reduces ammonia-producing bacteria; (3) **Rifaxomicin**: Selective gut antibiotic; broad-spectrum; (4) **Zinc supplementation**: Assists ammonia detoxification; (5) **LOLA (L-ornithine L-aspartate)**: Enhances ammonia incorporation into urea; improves mental status; (6) **Avoid**: Benzodiazepines, opioids, NSAIDs (worsen encephalopathy).

---

## Q13: Differential Diagnosis - Painless Jaundice
**Q: A 58-year-old presents with progressive jaundice over 3 weeks, NO abdominal pain, weight loss 4 kg. What conditions must be excluded?**

A: **"Painless jaundice is cancer until proven otherwise"**: (1) **Pancreatic cancer** (most common; head of pancreas obstructs CBD); (2) **Cholangiocarcinoma** (bile duct cancer); (3) **Ampullary cancer** (at ampulla of Vater); (4) **Metastatic lymphadenopathy** (hilar nodes compress CBD); (5) **Intrahepatic cholestasis** (PSC, PBC, drugs, sepsis - imaging shows no obstruction). **Imaging needed**: CT ± MRCP to visualize ducts and assess malignancy. **Biopsies**: ERCP with brush cytology/tissue if malignancy suspected.

---

## Q14: Cirrhosis Staging and Prognosis
**Q: Compare Child-Pugh and MELD scores for assessing cirrhosis prognosis and transplant timing.**

A: **Child-Pugh Classification** (combines clinical + lab findings): Ascites, Bilirubin, Albumin, PT, Encephalopathy. Scores 5-15: Class A (1-year 100% survival), Class B (80% survival), Class C (45% survival). **Limitations**: Subjective (ascites/encephalopathy grading); doesn't predict acute bleeding risk. **MELD Score** (Model for End-Stage Liver Disease): Formula using bilirubin, INR, creatinine via logarithm. Score 10 = 90% 3-month survival; 40 = 10% survival. **Advantages**: Objective; accounts for renal dysfunction; validated for transplant allocation. **Usage**: MELD >15 indicates need for transplant consideration; >40 very high mortality.

---

## Q15: India-Specific Causes of Jaundice
**Q: List India-specific causes of jaundice and key clinical features of each.**

A: (1) **Hepatitis A**: Fecal-oral; endemic; acute hepatitis; self-limited; no chronic carrier state; more common in resource-limited areas. (2) **Hepatitis E**: Waterborne; endemic; 30-40% adult seroprevalence; causes outbreaks; high mortality in pregnant women (15-25%); usually self-limited. (3) **Wilson Disease**: Copper accumulation; autosomal recessive; underdiagnosed in India; presents <40 years with jaundice ± neuropsych symptoms; treatable if caught early. (4) **Leptospirosis**: Occupational (farmers, sewage workers); rat urine exposure; biphasic illness; Weil's disease (jaundice, renal failure, hemorrhage) in 5-10%; endemic in monsoon. (5) **TB-related**: High TB burden; granulomatous hepatitis; anti-TB drug hepatotoxicity (INH, RIF, PZA) in 1-3%; higher in slow acetylators. (6) **Malaria**: Falciparum endemic; hemolytic jaundice; severe malaria with cerebral/renal involvement. (7) **Opisthorchis viverrini**: Liver fluke; endemic in southern India; raw/undercooked fish; cholangitis → cholangiocarcinoma risk.
`,
        mnemonics: [
          {
            text: "Bilirubin pathway = Hemoglobin → RES → Unconjugated (albumin-bound) → Hepatocyte → UGT1A1 → Conjugated → MRP2 → Bile → Colon → Stercobilin (feces)",
            explanation: "Complete bilirubin metabolism pathway for recall"
          },
          {
            text: "Viral serology: HAV IgM (acute), HBV HBsAg (first in acute), HCV anti-HCV+RNA, HEV IgM (acute)",
            explanation: "Serological marker identification by virus"
          },
          {
            text: "Hepatic encephalopathy = Ammonia neurotoxicity + endogenous benzodiazepines + astrocyte swelling; Lactulose first-line treatment",
            explanation: "Pathophysiology and initial management of encephalopathy"
          },
          {
            text: "Painless jaundice red flags = Pancreatic cancer (head obstructs CBD), cholangiocarcinoma, ampullary cancer; MUST image immediately",
            explanation: "Urgent diagnostic approach to painless jaundice"
          },
          {
            text: "Acute Liver Failure = Encephalopathy + PT/INR >1.5 within 8 weeks; King's College Criteria: PT >100 or 3 of (age, bili>17.5, PT>50, coma)",
            explanation: "ALF definition and transplant candidacy"
          }
        ],
        keyPoints: [
          "Bilirubin conjugation by UGT1A1 in liver; MRP2 transporter pumps conjugated bilirubin into bile for excretion",
          "Gilbert syndrome: mild unconjugated hyperbilirubinemia (3-7% population); triggered by stress/fasting; benign; no treatment",
          "Hemolytic anemia causes pre-hepatic jaundice when RBC breakdown exceeds hepatic conjugation capacity (>2-3 g/day)",
          "Viral hepatitis presentation: prodromal phase → icteric phase with jaundice → convalescence (2-12 weeks recovery)",
          "Wilson disease: ATP7B mutation → copper accumulation; low ceruloplasmin; Kayser-Fleischer rings pathognomonic; treatable with chelators",
          "Acute Liver Failure: encephalopathy + coagulopathy within 8 weeks; King's College criteria guide transplant timing",
          "Hepatic encephalopathy: ammonia accumulation from portal-systemic shunting; managed with lactulose and precipitant identification",
          "Post-hepatic jaundice differential: gallstones (visible on imaging), pancreatic cancer (painless, weight loss), PSC (beads-on-string), intrahepatic cholestasis (normal imaging)",
          "India-specific: HAV/HEV endemic and often fulminant; Wilson disease higher prevalence; TB drug hepatotoxicity; malaria parasitemia",
          "LFT pattern: Unconjugated >80% = pre-hepatic; mixed = hepatic; conjugated >50% = post-hepatic; ALT/AST >1000 = acute viral/ischemic"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Approach to Jaundice; Acute and Chronic Hepatitis", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "Bilirubin Metabolism and Hyperbilirubinemia", edition: "11th" },
          { book: "Davidson's Principles and Practice of Medicine", chapter: "Liver Disease and Jaundice", edition: "24th" }
        ]
      }
    ]
  }
];
