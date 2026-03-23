import type { TopicLessons } from "./content-loader";

export const forensicMedicinePart7Lessons: TopicLessons[] = [
  {
    topicCode: "FM-MOD-05-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "dna-fingerprinting-layer-1-foundation",
        title: "DNA Fingerprinting & Forensic Identity - Foundation",
        estimatedMinutes: 25,
        summary: "DNA profiling methods, STR analysis, applications in forensic medicine and paternity testing.",
        contentMd: `# DNA Fingerprinting & Forensic Identity - Foundation

## Introduction to DNA Fingerprinting

### Definition
DNA fingerprinting (DNA profiling) is technique using unique DNA variations to identify individuals. Each person (except identical twins) has unique DNA pattern.

### Discovery and Development
- Discovered by Alec Jeffreys in 1984
- Revolutionized forensic identification
- Now gold standard for identification
- Applications: Criminal investigations, paternity testing, disaster victim identification

## DNA Fingerprinting Methods

### 1. Restriction Fragment Length Polymorphism (RFLP) - Older Method
- **Process**: Uses restriction enzymes to cut DNA at specific sites
- **Principle**: Length of DNA fragments varies between individuals
- **Disadvantages**: Requires large DNA (100-1000 ng), time-consuming (2-3 weeks), now largely replaced

### 2. STR Analysis (Short Tandem Repeats) - Current Gold Standard

**What are STRs?**
- Repeated DNA sequences (2-6 base pairs) repeated multiple times
- Example: GATA repeated 7 times, 9 times, etc.
- Number of repeats differs between individuals (polymorphic)

**Process**:
- Identify specific STR loci (locations)
- Use PCR to amplify STR regions
- Count number of repeats at each locus
- Create DNA profile from 13-20 core loci

**Advantages**:
- Rapid (hours to days)
- Requires minimal DNA (nanograms)
- Highly polymorphic (discriminating power: >99.99%)
- Automated analysis available
- Degraded DNA can be analyzed

### 3. Other Methods

**Y-Chromosome Markers**: For male-specific identification and paternal lineage
**Mitochondrial DNA (mtDNA)**: Multiple copies per cell; useful when nuclear DNA degraded

## DNA Markers Used in Forensics

### CODIS System (Combined DNA Index System)
- FBI maintains database of DNA profiles
- Used for criminal case matching
- 13-20 core STR loci analyzed
- India: NDIS (National DNA Index System) under NCRB

### Core STR Loci (13-20 typically analyzed)
Examples: D3S1358, D5S818, D7S820, D13S317, FGA, and others

## Forensic Applications

### Criminal Investigations
- **Rape cases**: Semen identification, perpetrator identification
- **Murder cases**: Blood/tissue from scene vs. suspect comparison
- **Robbery/Burglary**: Hair, skin cells from perpetrator
- **Hit-and-run**: Blood from vehicle

### Paternity Testing
- **Principle**: Child inherits one allele from each parent
- **Comparison**: Father, mother, child profiles analyzed
- **Exclusion**: If alleged father lacks allele present in child, excluded
- **Inclusion**: >99.99% probability of paternity

### Identification of Deceased
- **Mass disasters**: Tsunami, earthquake, plane crash
- **Unknown bodies**: Comparison with biological relatives
- **Skeletal remains**: DNA extraction from bone

## DNA Evidence Handling

### Best Samples for Analysis
- **Blood**: Gold standard (cells with nuclei)
- **Saliva**: Buccal swabs
- **Semen**: Spermatozoa
- **Hair**: Root/bulb (medulla contains cells)
- **Skin cells**: Fingernails, swabs

### Storage and Handling
- **Dry storage**: Room temperature (prevents degradation)
- **Refrigeration**: 2-8°C for wet samples
- **Freezing**: -20°C for long-term storage
- **Chain of Custody**: Document every handler

## Indian Legal Framework

### DNA Technology (Use and Regulation) Bill, 2019
- Regulates DNA testing in India
- Protects privacy while enabling forensic DNA analysis
- Establishes DNA Index System (NDIS) by NCRB
- Consent requirements: Voluntary (with consent) or compelled (suspected person)
- Misuse prevention: Penalties for unauthorized DNA profiling

### Admissibility in Court
- DNA evidence admissible under Indian Evidence Act
- Requires: Proper collection, chain of custody, validated methodology, qualified expert`,
        mnemonics: [
          {
            text: "DNA Methods Evolution = RFLP (1980s) → PCR (1990s) → STR Analysis (current)",
            explanation: "Evolution of DNA fingerprinting techniques"
          },
          {
            text: "Best DNA Sources = Blood > Saliva > Semen > Hair (root) > Skin",
            explanation: "Quality ranking of DNA samples"
          },
          {
            text: "STR Advantages = Fast (hours), Sensitive (nanograms), Specific (1 in billions)",
            explanation: "Why STR is gold standard"
          }
        ],
        keyPoints: [
          "DNA fingerprinting uses STR (Short Tandem Repeats) analysis - current gold standard",
          "13-20 core STR loci analyzed; discriminating power > 99.99%",
          "RFLP is older method; now largely replaced by PCR-based STR analysis",
          "Paternity: Child inherits one allele from each parent",
          "Chain of custody essential - improper handling makes evidence inadmissible",
          "DNA Technology Bill 2019 regulates DNA testing and establishes NDIS in India"
        ],
        textbookRefs: [
          { book: "Reddy's Essentials of Forensic Medicine & Toxicology", chapter: "DNA Fingerprinting and Identification", edition: "34th" }
        ]
      },
      {
        layer: 2,
        slug: "dna-fingerprinting-layer-2-mechanism",
        title: "DNA Fingerprinting - Mechanism & Analysis",
        estimatedMinutes: 25,
        summary: "STR analysis process, profile matching, probability calculations, and interpretation.",
        contentMd: `# DNA Fingerprinting - Mechanism & Analysis

## STR Analysis Technical Process

### Step 1: DNA Extraction
- Isolate DNA from biological sample
- Methods: Phenol-chloroform, silica-based columns, FTA cards
- Quantify DNA concentration and purity

### Step 2: PCR Amplification
- **Primers**: Designed for specific STR loci
- **Multiplexing**: Amplify 13-20 loci simultaneously
- **Labeling**: Fluorescent dyes on primers
- **PCR cycles**: 25-30 cycles of denaturation-annealing-extension

### Step 3: Capillary Electrophoresis
- DNA fragments separated by size in capillary tube
- Fluorescent labels detected
- Peak pattern recorded (electropherogram)

### Step 4: Data Analysis
- **Allele designation**: Peak size converted to repeat number
- **Genotype**: Two peaks per locus (heterozygous) or one (homozygous)
- **Profile compilation**: Alleles across all loci
- **Software**: AutoSTR, GeneMapper automated analysis

## STR Loci and Nomenclature

### Example Core STR Loci

| Locus | Repeat Unit | Typical Range |
|-------|------------|---------------|
| D3S1358 | AGAT | 12-19 |
| D5S818 | AGAT | 7-13 |
| D7S820 | GATA | 5-15 |
| D13S317 | GATA | 7-15 |
| FGA | AAAG | 18-51 |

### Allele Designation
- **Name** = number of repeat units
- **Heterozygous** = two different alleles (15/18)
- **Homozygous** = two identical alleles (15/15)

## Profile Matching and Interpretation

### Exclusion (Non-Match)
- Difference at even ONE locus is sufficient
- 100% certainty of exclusion
- Excluded person could not be source

**Example**:
- Crime scene: 15/18 at D3S1358
- Suspect: 12/16 at D3S1358
- Result: EXCLUDED (lacks both alleles)

### Inclusion (Match)
- All tested loci match
- Probability calculated using population frequencies

**Random Match Probability (RMP)**:
- Probability random person has same profile
- With 13 loci: RMP ≈ 1 in 6.7 billion
- With 20 loci: RMP ≈ 1 in 10¹⁷ (essentially unique)

**Expert Testimony**:
- "Profile is 6.7 billion times more likely from crime scene DNA than random person"

## Paternity Testing

### Genetic Inheritance
- Child inherits one allele from each biological parent
- Can exclude alleged father if he lacks child's allele

### Analysis Example

**Scenario: Biological Father**
- Mother: 15/18 at D3S1358
- Child: 15/16 at D3S1358
- Alleged Father: 16/19 at D3S1358
- Analysis: Child has 15 from mother, 16 from father
- Result: CANNOT BE EXCLUDED

**Scenario: Excluded Father**
- Mother: 15/18 at D3S1358
- Child: 12/18 at D3S1358
- Alleged Father: 16/19 at D3S1358
- Analysis: Child has 18 from mother, 12 from other parent
- Alleged father has 16/19
- Result: EXCLUDED (does not have 12)

### Cumulative Probability
- Across all loci: >99.99% probability of paternity if consistent
- Statement: "Alleged father is biological father with >99.99% certainty"

## Quality Assurance

### Common Artifacts in STR Analysis

**Allelic Dropout**: One allele fails to amplify (appears homozygous)
- Causes: Low DNA template, primer binding problems
- Resolution: Repeat analysis

**Null Alleles**: Primers don't bind due to sequence variation
- Appears as homozygosity
- Recognition: Look for family patterns

**Contamination**: Foreign DNA introduced
- Appears as multiple peaks at locus (3+ alleles)
- Resolution: Careful sample handling, repeat testing

**Amelogenin Sex Determination**:
- Co-amplified with STR loci
- X chromosome (106 bp) vs. Y chromosome (112 bp)
- Confirms biological sex

## Admissibility Standards

### Daubert Standard (USA-influenced, used in India)
- General acceptance in scientific community
- Peer review and publication
- Known error rate
- Standards and controls maintained
- Qualified expert witness

### Indian Evidence Act Requirements
- Expert must demonstrate:
  - Proper methodology used
  - Chain of custody maintained
  - Laboratory accreditation (ISO 17025)
  - Proficiency testing results
  - Qualification of expert analyst`,
        mnemonics: [
          {
            text: "STR Analysis Steps = Extraction → Amplification → Electrophoresis → Analysis",
            explanation: "Four main steps of STR analysis"
          },
          {
            text: "Matching Criteria = One locus difference = EXCLUSION; All match = INCLUSION",
            explanation: "Decision rules for DNA matching"
          }
        ],
        keyPoints: [
          "STR analysis: PCR amplification of 13-20 loci; capillary electrophoresis separates fragments",
          "Exclusion: One locus mismatch = 100% certainty person not source",
          "Inclusion: All loci match; probability calculated from population frequencies",
          "Paternity: Child must have one allele from each parent",
          "RMP with 13 loci: ~1 in 6.7 billion (essentially unique identification)",
          "Quality issues: Allelic dropout, null alleles, contamination require recognition"
        ],
        textbookRefs: [
          { book: "Reddy's Essentials of Forensic Medicine & Toxicology", chapter: "DNA Fingerprinting and Identification", edition: "34th" }
        ]
      },
      {
        layer: 3,
        slug: "dna-fingerprinting-layer-3-clinical",
        title: "DNA Fingerprinting - Forensic Applications & Case Studies",
        estimatedMinutes: 25,
        summary: "Real-world forensic DNA applications, case interpretation, and Indian legal considerations.",
        contentMd: `# DNA Fingerprinting - Forensic Applications & Case Studies

## Case Study 1: Sexual Assault Investigation

**Scenario**: Woman reports rape. DNA analysis of vaginal swab sample.

**Evidence Collection**:
- Vaginal swab: High-grade DNA from semen
- DNA profile created from 13-20 STR loci
- Suspect DNA profile created from buccal swab

**Interpretation**:
- **Match**: DNA from assault matches suspect's profile (RMP = 1 in 6.7 billion)
- **Non-match**: Excludes suspect with 100% certainty
- **Mixed profile**: May contain DNA from victim and/or multiple perpetrators

**Forensic Value**:
- Can identify perpetrator with extremely high probability
- Can exclude innocent suspects
- Corroborates victim's account

## Case Study 2: Paternity Dispute

**Scenario**: Child custody case; alleged father denies paternity. DNA testing requested.

**Analysis Setup**:
- Child profile: Multiple loci analyzed
- Mother profile: Multiple loci analyzed
- Alleged father profile: Multiple loci analyzed

**Interpretation**:
- **Consistent with paternity**: All loci match (child has one allele from mother, one from father)
- **Excluded from paternity**: At multiple loci, alleged father lacks allele present in child
- **Probability statement**: ">99.99% probability alleged father is biological father" if consistent

**Example Findings**:
- Locus 1: Child 15/18, Mother 15/19, Father 18/21 → Consistent
- Locus 2: Child 12/14, Mother 12/16, Father 14/17 → Consistent
- Locus 3: Child 10/12, Mother 10/13, Alleged father 15/18 → EXCLUDED (doesn't have 10 or 12)
- **Conclusion**: Alleged father EXCLUDED as biological father

## Case Study 3: Mass Disaster Victim Identification

**Scenario**: Earthquake kills hundreds. DNA used to identify unknown remains.

**Process**:
- Extract DNA from skeletal/tissue remains
- Create DNA profile (may be partial if DNA degraded)
- Compare with DNA profiles of biological relatives
- Match to family members (even partial profiles useful)

**Application**:
- Mitochondrial DNA useful (multiple copies, degraded nuclear DNA often absent)
- Y-chromosome markers for male lineage identification
- Family reunification through relative matching
- Critical for identifying family members for closure and inheritance

## Case Study 4: Criminal Database Hit (CODIS Match)

**Scenario**: DNA from crime scene uploaded to CODIS database. Match found with convicted offender.

**Process**:
- Crime scene DNA profile created
- Searched against national database (CODIS/NDIS)
- Match found: Known offender's profile identical to crime scene DNA

**Significance**:
- Can solve cold cases
- Links serial crimes to single perpetrator
- Leads to suspect identification
- Corroborates other evidence

## DNA in Wildlife Trafficking

**Application**: Identify species and origin of seized wildlife products
- Protect endangered species
- Prevent illegal trade
- Trace origin of contraband

## Quality and Chain of Custody

### Chain of Custody Documentation
- **Critical for admissibility**: Every person handling evidence must be documented
- **Label**: Unique identification number, date, time
- **Seal**: Tamper-proof containers
- **Storage**: Proper temperature and humidity
- **Prevent**: Cross-contamination, loss of integrity

**Legal Requirement**: Admissibility in court depends on proper chain of custody

### Laboratory Accreditation
- **ISO 17025**: International standard for laboratory accreditation
- **Proficiency testing**: Regular testing against known standards
- **Quality assurance**: Regular audits and quality control
- **Expert qualification**: Analyst must be trained and experienced

## Indian Legal Considerations

### DNA Technology Bill 2019
- **Consent**: Voluntary sample (with consent) vs. suspected person (can be compelled)
- **Privacy protection**: Strict regulations on data use and storage
- **Penalties**: Unauthorized DNA profiling is punishable
- **NDIS**: National DNA Index System under NCRB

### Indian Evidence Act
- DNA evidence admissible as scientific evidence
- Expert witness must establish:
  - Proper collection and handling
  - Validated methodology
  - Laboratory accreditation
  - Results reliability

### BNS/IPC Sections
- **IPC Section 293**: Obstetric offences may require paternity determination
- **IPC Section 375**: Rape cases where DNA evidence crucial
- **BNS Section 45 (Indian Evidence Act)**: Opinion of experts in science/art

## Limitations of DNA Evidence

- **Not absolute proof**: No DNA link doesn't prove innocence (may have worn gloves)
- **Contamination**: Cross-contamination can lead to false inclusion
- **Population frequency data**: Required for RMP calculation; may vary by ethnic group
- **Mixed profiles**: Difficult interpretation with DNA from multiple persons
- **Degraded DNA**: Poor quality may give unreliable results
- **Interpretation**: Requires qualified expert testimony`,
        mnemonics: [
          {
            text: "Chain of Custody = Document, Label, Seal, Store, Prevent cross-contamination",
            explanation: "Key requirements for evidence integrity"
          }
        ],
        keyPoints: [
          "DNA matching identifies perpetrators with RMP > 1 in 6.7 billion (essentially unique)",
          "Paternity: Child must inherit one allele from each parent; one locus mismatch = excluded",
          "Mass disasters: Mitochondrial DNA and relative matching crucial for victim identification",
          "CODIS/NDIS: National databases solve cold cases and link serial crimes",
          "Chain of custody: Essential for admissibility; every handler must be documented",
          "Indian law: DNA Technology Bill 2019 regulates consent and data protection"
        ],
        textbookRefs: [
          { book: "Reddy's Essentials of Forensic Medicine & Toxicology", chapter: "DNA Fingerprinting and Identification", edition: "34th" }
        ]
      },
      {
        layer: 4,
        slug: "dna-fingerprinting-layer-4-exam",
        title: "DNA Fingerprinting - Exam Preparation",
        estimatedMinutes: 20,
        summary: "Key definitions, facts, and typical exam questions with answers.",
        contentMd: `# DNA Fingerprinting - Exam Preparation

## Key Definitions

| Term | Definition |
|------|-----------|
| STR (Short Tandem Repeat) | Repeated DNA sequences; basis of modern DNA profiling |
| CODIS | FBI database of DNA profiles for criminal matching |
| NDIS | India's National DNA Index System (NCRB) |
| Allele | Variant of gene/STR locus |
| RMP | Random Match Probability |
| PCR | Polymerase Chain Reaction; amplifies DNA |
| Chain of Custody | Documentation of evidence handling |

## DNA Analysis Methods

**RFLP (Restriction Fragment Length Polymorphism)**:
- Older method; uses restriction enzymes
- Requires large DNA (100-1000 ng)
- Time-consuming (2-3 weeks)
- Largely replaced

**STR Analysis (Current Gold Standard)**:
- PCR-based amplification
- 13-20 core loci analyzed
- Rapid (hours-days)
- Requires minimal DNA (nanograms)
- RMP: 1 in 6.7 billion (13 loci) to 1 in 10¹⁷ (20 loci)

## Common Exam Questions

**Q1: What is DNA fingerprinting and when was it discovered?**
A: DNA fingerprinting is technique identifying individuals by unique DNA variations. Discovered by Alec Jeffreys in 1984. Each person (except identical twins) has unique profile.

**Q2: What are STR loci and why are they useful?**
A: STRs are repeated DNA sequences varying in repeat number between individuals. Useful because highly polymorphic (discriminating), require minimal DNA, and can be analyzed in hours.

**Q3: How many STR loci are used in standard analysis?**
A: 13-20 core STR loci typically analyzed (13 minimum for criminal databases, 20 or more in high-level cases).

**Q4: What is Random Match Probability (RMP)?**
A: Probability that randomly selected person has same DNA profile. With 13 loci: ~1 in 6.7 billion. Essentially identifies person uniquely.

**Q5: How is paternity established using DNA?**
A: Child must inherit one allele from each parent. If alleged father lacks allele present in child (not from mother), he is excluded. If all alleles consistent, >99.99% paternity probability.

**Q6: When can an individual be excluded from paternity?**
A: When at even ONE locus, alleged father lacks allele present in child (not inherited from mother). One locus exclusion = 100% exclusion from paternity.

**Q7: What are the advantages of STR analysis over RFLP?**
A: STR: Rapid (hours-days), requires minimal DNA (nanograms), highly specific, automated analysis possible, degraded DNA analyzable. RFLP: Slow (weeks), requires much DNA, less specific.

**Q8: What is chain of custody and why is it important?**
A: Chain of custody is documentation of every person handling evidence. Important because admissibility in court depends on maintaining evidence integrity and preventing contamination.

**Q9: What is CODIS and its function?**
A: FBI database of DNA profiles from convicted offenders. Used to match crime scene DNA with known offenders, solve cold cases, and link serial crimes.

**Q10: What is NDIS in Indian context?**
A: National DNA Index System maintained by NCRB (National Crime Records Bureau) in India. Similar to CODIS; matches DNA profiles in criminal cases.

**Q11: What are best samples for DNA analysis?**
A: Blood (gold standard), saliva, semen, hair roots, skin cells. Avoid degraded, contaminated, or mixed samples.

**Q12: How does contamination affect DNA analysis?**
A: Contamination introduces foreign DNA. Results in multiple peaks at locus (3+ alleles instead of expected 2). Requires careful handling and repeat testing.

**Q13: What is allelic dropout and how does it occur?**
A: One allele fails to amplify in PCR. Appears as homozygosity when actually heterozygous. Caused by low DNA template or primer binding problems.

**Q14: Can DNA evidence prove innocence?**
A: Exclusion (non-match) with 100% certainty proves innocence. Absence of match doesn't prove guilt (suspect may have worn gloves, not left biological evidence).

**Q15: Is DNA admissible in Indian courts?**
A: Yes, under Indian Evidence Act. Expert must demonstrate: proper collection, chain of custody, validated methodology, lab accreditation, expert qualification.

## Important Points

- **Exclusion criteria**: One locus mismatch = 100% exclusion
- **Inclusion criteria**: All loci match; RMP determines significance
- **Paternity**: Child must have alleles from both biological parents
- **STR advantages**: Speed, sensitivity, specificity
- **Chain of custody**: Critical for admissibility
- **Database value**: CODIS/NDIS solve many cases`,
        mnemonics: [
          {
            text: "STR Analysis = PCR Amplification → Electrophoresis → Data Analysis → Profile Creation",
            explanation: "Steps in STR DNA analysis"
          },
          {
            text: "Exclusion = ONE locus mismatch; Inclusion = ALL loci match",
            explanation: "Matching criteria in DNA analysis"
          }
        ],
        keyPoints: [
          "STR analysis: Current gold standard for DNA fingerprinting",
          "13-20 core loci analyzed; RMP 1 in 6.7 billion (essentially unique)",
          "Exclusion: One locus mismatch = 100% certainty person not source",
          "Paternity: One locus exclusion = father excluded with 100% certainty",
          "Chain of custody: Essential for court admissibility",
          "DNA Technology Bill 2019: Regulates consent, privacy, data protection in India"
        ],
        textbookRefs: [
          { book: "Reddy's Essentials of Forensic Medicine & Toxicology", chapter: "DNA Fingerprinting and Identification", edition: "34th" }
        ]
      },
      {
        layer: 5,
        slug: "dna-fingerprinting-layer-5-active-recall",
        title: "DNA Fingerprinting - Active Recall",
        estimatedMinutes: 15,
        summary: "Self-assessment flashcard Q&A for spaced repetition.",
        contentMd: `# DNA Fingerprinting - Active Recall

## Flashcard Q&A

**Q1: What is DNA fingerprinting and who discovered it?**
A: DNA fingerprinting is technique identifying individuals by unique DNA variations. Discovered by Alec Jeffreys in 1984. Each person (except identical twins) has unique DNA profile.

**Q2: What are STRs and why are they preferred over RFLP?**
A: STRs (Short Tandem Repeats) are repeated DNA sequences varying in repeat number. Preferred because: Rapid (hours), require minimal DNA (nanograms), highly polymorphic, automated analysis possible.

**Q3: How many STR loci are analyzed in standard DNA profiling?**
A: 13-20 core STR loci typically analyzed. 13 loci minimum for criminal databases; more loci increase discrimination power.

**Q4: What is Random Match Probability (RMP) with 13 STR loci?**
A: RMP approximately 1 in 6.7 billion. Means profile is essentially unique to individual; 6.7 billion times more likely from crime scene DNA than random person.

**Q5: How do you calculate paternity exclusion at one locus?**
A: Child has two alleles (one from each parent). If alleged father lacks both alleles present in child (one from mother), father is excluded. One locus exclusion = 100% paternity exclusion.

**Q6: Give example of paternity exclusion at single locus.**
A: Mother 15/19, Child 12/18, Alleged Father 16/20. Child has 18 from mother, 12 from other parent. Alleged father lacks both 12 and 18. EXCLUDED as biological father.

**Q7: What is allelic dropout and how does it occur?**
A: Allelic dropout is failure of one allele to amplify in PCR. Appears as homozygosity (one peak) when should be heterozygous (two peaks). Caused by low DNA template or primer binding problems.

**Q8: What does it mean when only one peak appears at STR locus?**
A: Either: (1) Person is homozygous (inherited same allele from both parents), OR (2) Allelic dropout (one allele failed to amplify). Requires careful interpretation and possible repeat testing.

**Q9: What is DNA contamination in forensic analysis?**
A: Introduction of foreign (extraneous) DNA during collection, handling, or storage. Results in multiple peaks at locus (3+ alleles instead of expected 2). Requires careful evidence handling.

**Q10: What is chain of custody and why is it critical?**
A: Documentation of every person handling evidence, when, and for what purpose. Critical because court admissibility depends on maintaining evidence integrity and preventing contamination/loss.

**Q11: What is CODIS and what does it do?**
A: Combined DNA Index System maintained by FBI. Database of DNA profiles from convicted offenders. Used to match crime scene DNA with known offenders and solve cold cases.

**Q12: What is NDIS in Indian forensic context?**
A: National DNA Index System maintained by NCRB (National Crime Records Bureau) in India. Similar to CODIS; matches DNA profiles in criminal cases under DNA Technology Bill 2019.

**Q13: What are best biological samples for DNA analysis?**
A: Blood (gold standard), saliva (buccal swabs), semen, hair roots (medulla has cells), skin cells from fingernails/swabs. Avoid degraded, contaminated, or mixed samples.

**Q14: How is DNA extracted from hair?**
A: Best: Hair pulled out with root/bulb (medulla contains cells with nuclei). Shaft of hair has minimal DNA. Hair found naturally may have degraded DNA; root is crucial for analysis.

**Q15: What is Amelogenin and what does it indicate?**
A: Amelogenin is gene co-amplified with STR loci during PCR. X chromosome version (106 bp) indicates female; Y chromosome version (112 bp) indicates male. Confirms biological sex of DNA sample.

**Q16: How does mitochondrial DNA differ from nuclear DNA in forensics?**
A: Mitochondrial DNA: Multiple copies per cell (high copy number), maternal inheritance, useful when nuclear DNA degraded. Nuclear DNA: Two copies per cell, biparental inheritance, higher discrimination.

**Q17: Can absence of DNA evidence prove innocence?**
A: Not necessarily. Exclusion (non-match) proves innocence with 100% certainty. Absence of match just means person didn't leave biological evidence (may have worn gloves, not come in contact with victim).

**Q18: How is profile matching interpreted in sexual assault case?**
A: If crime scene DNA matches suspect's profile (all 13-20 loci), RMP indicates probability. Statement: "Profile is 1 in 6.7 billion times more likely from perpetrator than random person."

**Q19: What is RFLP and why is it no longer primary method?**
A: RFLP uses restriction enzymes to cut DNA at specific sites; measures fragment length differences. Largely replaced because: Requires large DNA, time-consuming (2-3 weeks), less discriminating than STR.

**Q20: What are requirements for DNA evidence admissibility in Indian courts?**
A: Expert must demonstrate: (1) Proper collection and handling. (2) Chain of custody maintained. (3) Validated methodology used. (4) Laboratory accreditation (ISO 17025). (5) Expert qualification. (6) Results reliability.`,
        mnemonics: [
          {
            text: "STR Advantages = Speed (hours), Sensitivity (nanograms), Specificity (1 in billions)",
            explanation: "Three key advantages of STR analysis"
          },
          {
            text: "Exclusion vs. Inclusion = One locus mismatch (EXCLUDE) vs. All match (INCLUDE)",
            explanation: "Decision criteria for DNA matching"
          }
        ],
        keyPoints: [
          "STR analysis: PCR amplification of 13-20 loci; discriminating power >99.99%",
          "Exclusion: One locus mismatch = 100% certainty person not source",
          "Paternity: Child inherits one allele from each parent; one mismatch = excluded",
          "RMP: 1 in 6.7 billion (13 loci) makes profile essentially unique",
          "Chain of custody: Every handler documented; critical for court admissibility",
          "CODIS/NDIS: Databases match crime DNA with known offenders, solve cold cases"
        ],
        textbookRefs: [
          { book: "Reddy's Essentials of Forensic Medicine & Toxicology", chapter: "DNA Fingerprinting and Identification", edition: "34th" }
        ]
      }
    ]
  }
];
