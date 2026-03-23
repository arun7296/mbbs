export const clinicalCasesFmCmAnesthesiaIndia = [
  // FORENSIC MEDICINE CASES
  {
    title: "Hanging Death Investigation",
    presentingComplaint: "45-year-old male, body found hanging from ceiling fan",
    caseType: "Emergency" as const,
    difficulty: "MEDIUM" as const,
    estimatedMinutes: 30,
    examTags: ["NEXT_STEP1", "NEET_PG", "Forensic"] as string[],
    patientProfile: {
      age: 45,
      sex: "Male",
      occupation: "Farmer",
      history: "Found hanging by family, police called, body on ground now",
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt:
          "You are called to examine a body of a 45-year-old male found hanging from a ceiling fan. The family says they found him this morning. Gather scene information and witness accounts.",
        availableActions: [
          {
            id: "fm-h1",
            text: "Ask about time of death estimation from family observation",
            isOptimal: true,
            findings: "Family reports he was fine yesterday evening, found dead this morning (~12 hours)",
            scoreDelta: 2,
          },
          {
            id: "fm-h2",
            text: "Inquire about recent behavior, suicidal ideation, or conflicts",
            isOptimal: true,
            findings: "Father mentions patient had debt problems, recent marital discord",
            scoreDelta: 2,
          },
          {
            id: "fm-h3",
            text: "Document presence of suicide note or verbal statements",
            isOptimal: true,
            findings: "No written note found; neighbor heard him say 'I cannot take this anymore' two days ago",
            scoreDelta: 2,
          },
          {
            id: "fm-h4",
            text: "Check for recent psychiatric treatment or medication",
            isOptimal: false,
            findings: "No known psychiatric history or medications",
            scoreDelta: 1,
          },
          {
            id: "fm-h5",
            text: "Ask about known enemies or disputes",
            isOptimal: false,
            findings: "Debt collector visited 1 week ago, minor dispute with brother-in-law",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt:
          "Now examine the body in situ. Look for classic features of hanging: ligature mark, position of body, and signs of struggle.",
        availableActions: [
          {
            id: "fm-e1",
            text: "Examine ligature mark position (just below angle of jaw, at level of hyoid bone)",
            isOptimal: true,
            findings:
              "Transverse ligature mark just below mandible, typical of judicial hanging, 2mm wide",
            scoreDelta: 2,
          },
          {
            id: "fm-e2",
            text: "Check for inverted V sign above and below ligature mark",
            isOptimal: true,
            findings: "Inverted V sign present - classic feature of hanging, indicates sudden drop",
            scoreDelta: 2,
          },
          {
            id: "fm-e3",
            text: "Assess for abrasions or bruising on wrists and ankles",
            isOptimal: true,
            findings: "No abrasions on wrists or ankles - no restraint marks, consistent with voluntary hanging",
            scoreDelta: 2,
          },
          {
            id: "fm-e4",
            text: "Document presence of petechiae on face and neck",
            isOptimal: true,
            findings: "Petechiae present on face and neck, eyes congested - consistent with asphyxia",
            scoreDelta: 2,
          },
          {
            id: "fm-e5",
            text: "Check for signs of struggle or defensive injuries",
            isOptimal: false,
            findings: "No defensive injuries on hands or forearms",
            scoreDelta: 1,
          },
          {
            id: "fm-e6",
            text: "Examine genital area for postmortem changes",
            isOptimal: false,
            findings: "No evidence of postmortem penile erection or incontinence",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt:
          "Plan investigations including PM examination findings, histopathology, and toxicology.",
        availableActions: [
          {
            id: "fm-i1",
            text: "Order toxicology screen for alcohol, drugs, and poisons",
            isOptimal: true,
            findings: "Toxicology negative; blood alcohol 0.05% (may have had drinks before act)",
            scoreDelta: 2,
          },
          {
            id: "fm-i2",
            text: "Request histopathology of ligature mark and neck tissues",
            isOptimal: true,
            findings: "Microscopy shows hemorrhage in strap muscles, fracture of hyoid bone present",
            scoreDelta: 2,
          },
          {
            id: "fm-i3",
            text: "Perform autopsy focusing on neck examination and internal hemorrhage",
            isOptimal: true,
            findings: "Fracture of hyoid bone, thyroid cartilage intact, subdural hemorrhage absent",
            scoreDelta: 2,
          },
          {
            id: "fm-i4",
            text: "Check for evidence of castration or sexual assault",
            isOptimal: false,
            findings: "Genitals intact, no evidence of sexual trauma",
            scoreDelta: 1,
          },
          {
            id: "fm-i5",
            text: "Examine lungs for pulmonary edema (pink frothy fluid)",
            isOptimal: false,
            findings: "Pulmonary edema present - consistent with asphyxia",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt: "Formulate the cause and manner of death based on evidence.",
        availableActions: [
          {
            id: "fm-d1",
            text: "Conclude cause of death as asphyxia due to hanging",
            isOptimal: true,
            findings: "All features support asphyxia: petechiae, ligature mark, pulmonary edema, hyoid fracture",
            scoreDelta: 2,
          },
          {
            id: "fm-d2",
            text: "Classify as suicidal death based on evidence",
            isOptimal: true,
            findings: "Manner: Suicide - voluntary act, no evidence of foul play, inverted V sign, no restraint marks",
            scoreDelta: 2,
          },
          {
            id: "fm-d3",
            text: "Rule out homicidal hanging (atypical features that would suggest murder)",
            isOptimal: true,
            findings: "No defense injuries, no bindings on limbs, consistent knot position - homicide unlikely",
            scoreDelta: 2,
          },
          {
            id: "fm-d4",
            text: "Consider accidental death from autoerotic asphyxiation",
            isOptimal: false,
            findings: "No evidence of sexual stimulation, no unusual clothing; accidental hanging unlikely",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt:
          "Document medicolegal procedures and inquest requirements as per law.",
        availableActions: [
          {
            id: "fm-t1",
            text: "File detailed medicolegal autopsy report with cause and manner of death",
            isOptimal: true,
            findings:
              "Report submitted to police and inquest magistrate per CrPC Section 174",
            scoreDelta: 2,
          },
          {
            id: "fm-t2",
            text: "Preserve evidence: ligature material, clothing, biological samples",
            isOptimal: true,
            findings: "Chain of custody maintained, samples sealed and labeled for forensic analysis",
            scoreDelta: 2,
          },
          {
            id: "fm-t3",
            text: "Attend inquest proceedings and present findings to magistrate",
            isOptimal: true,
            findings: "Magistrate determines verdict as suicide based on PM report and witness statements",
            scoreDelta: 2,
          },
          {
            id: "fm-t4",
            text: "Coordinate with police investigation team for scene reconstruction",
            isOptimal: false,
            findings: "Police confirm single knot, fan structure intact, no external disturbance",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt: "Plan follow-up actions and family communication.",
        availableActions: [
          {
            id: "fm-f1",
            text: "Release body for funeral after inquest closure",
            isOptimal: true,
            findings: "Body released to family after magistrate's verdict; cremation performed",
            scoreDelta: 2,
          },
          {
            id: "fm-f2",
            text: "Provide death certificate with ICD code for cause of death",
            isOptimal: true,
            findings: "Certificate issued: Asphyxia due to hanging (ICD-10: X83)",
            scoreDelta: 2,
          },
          {
            id: "fm-f3",
            text: "Counsel family regarding psychological support and insurance implications",
            isOptimal: true,
            findings: "Family referred to grief counseling; insurance claim process explained",
            scoreDelta: 2,
          },
          {
            id: "fm-f4",
            text: "Document case for teaching and medicolegal precedent",
            isOptimal: false,
            findings: "Case added to departmental forensic database for teaching purposes",
            scoreDelta: 1,
          },
        ],
      },
    ],
  },

  // CASE 2: DOWRY DEATH
  {
    title: "Dowry Death Investigation - 304B IPC",
    presentingComplaint: "22-year-old married female with severe burn injuries, referred from district hospital",
    caseType: "Emergency" as const,
    difficulty: "MEDIUM" as const,
    estimatedMinutes: 35,
    examTags: ["NEXT_STEP1", "NEET_PG", "Forensic", "Women's Health"] as string[],
    patientProfile: {
      age: 22,
      sex: "Female",
      occupation: "Housewife",
      history: "Married 6 months ago, admitted with 60% TBSA burns, conscious, in pain",
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt:
          "A 22-year-old female with 60% TBSA burns is brought to your ward. She is conscious and in severe pain. Obtain detailed history regarding the incident and circumstances.",
        availableActions: [
          {
            id: "dd-h1",
            text: "Ask about nature of burn incident (accidental vs deliberate)",
            isOptimal: true,
            findings:
              "Patient claims 'stove accident' but story inconsistent; says flames came from behind while cooking",
            scoreDelta: 2,
          },
          {
            id: "dd-h2",
            text: "Document dying declaration regarding who caused the burns",
            isOptimal: true,
            findings:
              "Patient states: 'Mother-in-law poured kerosene on my dupatta near stove because father-in-law wanted more dowry'",
            scoreDelta: 2,
          },
          {
            id: "dd-h3",
            text: "Ask about dowry-related harassment, threats, or conflicts",
            isOptimal: true,
            findings:
              "Patient reports 3 months of physical abuse, repeated demands for ₹2 lakhs additional dowry; in-laws called her worthless",
            scoreDelta: 2,
          },
          {
            id: "dd-h4",
            text: "Inquire about any prior injuries or complaints to police",
            isOptimal: false,
            findings: "No prior police complaints; sustained minor bruises 2 months ago explained as 'falls'",
            scoreDelta: 1,
          },
          {
            id: "dd-h5",
            text: "Ask about witnesses to the incident",
            isOptimal: true,
            findings:
              "Elder sister-in-law witnessed incident; cousin heard mother-in-law say 'teach her a lesson'",
            scoreDelta: 2,
          },
        ],
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt:
          "Examine the burn injuries carefully. Note pattern, depth, location, and consistency with stated history.",
        availableActions: [
          {
            id: "dd-e1",
            text: "Document burn severity: 60% TBSA, deep partial and full thickness",
            isOptimal: true,
            findings: "60% TBSA, predominantly chest, back, arms; full thickness on shoulders and back",
            scoreDelta: 2,
          },
          {
            id: "dd-e2",
            text: "Assess burn pattern (splash vs contact vs immersion pattern)",
            isOptimal: true,
            findings: "Irregular splash pattern on back and shoulders, consistent with liquid poured from behind",
            scoreDelta: 2,
          },
          {
            id: "dd-e3",
            text: "Check for differential burn depth (suggests flammable liquid, not accidental stove)",
            isOptimal: true,
            findings: "Front of body less severely burned; back has deeper burns - inconsistent with stove accident",
            scoreDelta: 2,
          },
          {
            id: "dd-e4",
            text: "Examine for signs of defense or struggle injuries",
            isOptimal: false,
            findings: "Minor scratches on forearms, possibly from initial panic response",
            scoreDelta: 1,
          },
          {
            id: "dd-e5",
            text: "Document burn margins and pattern distribution",
            isOptimal: false,
            findings: "Irregular margin with spared areas suggests liquid poured from specific direction",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt: "Plan investigations for burn analysis and toxicology.",
        availableActions: [
          {
            id: "dd-i1",
            text: "Preserve clothing and collect for accelerant detection (kerosene)",
            isOptimal: true,
            findings: "Charred clothing collected; chemical analysis confirms kerosene residue on back portion",
            scoreDelta: 2,
          },
          {
            id: "dd-i2",
            text: "Take blood and urine samples for toxicology and drug screening",
            isOptimal: true,
            findings: "Toxicology negative; no sedating drugs or alcohol detected",
            scoreDelta: 2,
          },
          {
            id: "dd-i3",
            text: "Request burn wound samples for histopathology analysis",
            isOptimal: false,
            findings: "Histology confirms thermal burns with kerosene accelerant pattern",
            scoreDelta: 1,
          },
          {
            id: "dd-i4",
            text: "Document detailed medical photography of burns for forensic records",
            isOptimal: true,
            findings: "High-quality photos with scale documenting pattern, depth, and distribution",
            scoreDelta: 2,
          },
          {
            id: "dd-i5",
            text: "Examine scene investigation report (police FIR details)",
            isOptimal: true,
            findings: "Police FIR registered under 498A (domestic cruelty), 304B (dowry death), 306 IPC",
            scoreDelta: 2,
          },
        ],
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt:
          "Formulate medicolegal opinion regarding cause and manner of injury.",
        availableActions: [
          {
            id: "dd-d1",
            text: "Conclude injuries as intentionally inflicted (not accidental stove burn)",
            isOptimal: true,
            findings:
              "Pattern inconsistent with accidental stove: liquid poured from behind, differential depth, kerosene confirmed",
            scoreDelta: 2,
          },
          {
            id: "dd-d2",
            text: "Document as case of cruelty and criminal act under IPC 498A and 304B",
            isOptimal: true,
            findings:
              "Medical opinion: Burns caused by deliberate application of flammable liquid; consistent with dowry-related violence",
            scoreDelta: 2,
          },
          {
            id: "dd-d3",
            text: "Classify prognosis and likelihood of fatal outcome",
            isOptimal: true,
            findings:
              "60% TBSA burns carry 50% mortality risk even with ICU care; likely to be fatal unless immediate ICU support",
            scoreDelta: 2,
          },
        ],
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt: "Manage acute burn injury and coordinate with forensic/legal authorities.",
        availableActions: [
          {
            id: "dd-t1",
            text: "Initiate ICU burn management: IV fluids per Parkland formula, airway management",
            isOptimal: true,
            findings: "Patient admitted to ICU, fluid resuscitation started, oxygen supplementation initiated",
            scoreDelta: 2,
          },
          {
            id: "dd-t2",
            text: "Inform patient of legal rights and facilitate police statement recording",
            isOptimal: true,
            findings: "Dying declaration recorded; patient informed of legal recourse; FIR registered",
            scoreDelta: 2,
          },
          {
            id: "dd-t3",
            text: "Preserve viscera and biological evidence per medicolegal requirements",
            isOptimal: true,
            findings: "Viscera preserved in formalin-sealed bottles for potential postmortem examination",
            scoreDelta: 2,
          },
          {
            id: "dd-t4",
            text: "Provide wound care, infection prevention, and pain management",
            isOptimal: true,
            findings: "Daily dressing with silver sulfadiazine, broad-spectrum antibiotics, analgesia",
            scoreDelta: 2,
          },
        ],
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt: "Plan follow-up regarding outcome, legal proceedings, and family support.",
        availableActions: [
          {
            id: "dd-f1",
            text: "If patient survives: Provide rehabilitation and psychological support",
            isOptimal: true,
            findings: "Patient referred to burn rehabilitation center, psychiatric counseling arranged",
            scoreDelta: 2,
          },
          {
            id: "dd-f2",
            text: "If fatal outcome: Perform medicolegal autopsy and certify cause of death",
            isOptimal: true,
            findings: "Postmortem confirms thermal burns as cause of death; Report filed under 304B",
            scoreDelta: 2,
          },
          {
            id: "dd-f3",
            text: "Provide comprehensive medical report to magistrate and law enforcement",
            isOptimal: true,
            findings: "Detailed report confirming deliberate infliction supports prosecution under 304B dowry death",
            scoreDelta: 2,
          },
          {
            id: "dd-f4",
            text: "Assist with victim compensation and access to DLSA legal aid services",
            isOptimal: false,
            findings: "Patient referred to District Legal Services Authority for compensation claim",
            scoreDelta: 1,
          },
        ],
      },
    ],
  },

  // CASE 3: SEXUAL ASSAULT
  {
    title: "Sexual Assault Examination - POCSO Act",
    presentingComplaint: "18-year-old female, alleged sexual assault, referred from police",
    caseType: "Emergency" as const,
    difficulty: "MEDIUM" as const,
    estimatedMinutes: 40,
    examTags: ["NEXT_STEP1", "NEET_PG", "Forensic", "POCSO"] as string[],
    patientProfile: {
      age: 18,
      sex: "Female",
      occupation: "Student",
      history: "Brought by police 4 hours post-assault; traumatized, cooperative",
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt:
          "An 18-year-old female brought by police reports sexual assault 4 hours ago. Obtain detailed history with sensitivity and in private setting.",
        availableActions: [
          {
            id: "sa-h1",
            text: "Establish rapport and explain examination purpose and consent",
            isOptimal: true,
            findings: "Patient reassured, informed consent obtained; wishes to proceed with examination",
            scoreDelta: 2,
          },
          {
            id: "sa-h2",
            text: "Document detailed account of assault: location, time, number of assailants, acts performed",
            isOptimal: true,
            findings:
              "Assault occurred 4h ago in secluded area; single male assailant; penile penetration of vagina and oral sex",
            scoreDelta: 2,
          },
          {
            id: "sa-h3",
            text: "Ask about use of violence, weapons, threats, or loss of consciousness",
            isOptimal: true,
            findings: "Physical violence: choking, slapping; threat with knife; patient struggled but overpowered",
            scoreDelta: 2,
          },
          {
            id: "sa-h4",
            text: "Document post-assault activities: bathing, urination, defecation, clothes changed",
            isOptimal: true,
            findings: "Patient washed hands and face but not bathed; wore same clothes; urinated once",
            scoreDelta: 2,
          },
          {
            id: "sa-h5",
            text: "Inquire about menstrual history, contraceptive use, and medical conditions",
            isOptimal: false,
            findings: "Regular cycles, last period 2 weeks ago, not on contraceptives, no known illness",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt:
          "Perform comprehensive forensic examination. Document all injuries and trauma systematically.",
        availableActions: [
          {
            id: "sa-e1",
            text: "Document general body injuries: bruises, lacerations, defense marks",
            isOptimal: true,
            findings: "Bruises on neck (choking marks), forearms (defense), thighs (restraint); lacerations on lips",
            scoreDelta: 2,
          },
          {
            id: "sa-e2",
            text: "Perform external genital examination: observe for lacerations, bruising, bleeding",
            isOptimal: true,
            findings: "Vulval lacerations, edema, ecchymoses; hymenal tears at 5 and 7 o'clock position (acute)",
            scoreDelta: 2,
          },
          {
            id: "sa-e3",
            text: "Perform speculum examination of vagina and cervix under good visualization",
            isOptimal: true,
            findings: "Vaginal lacerations, cervicitis, cervical abrasion; no cervical tears",
            scoreDelta: 2,
          },
          {
            id: "sa-e4",
            text: "Perform consensual per vaginal examination assessing vaginal tone and tenderness",
            isOptimal: true,
            findings: "Vaginal tenderness, cervix friable, no significant bleeding; assess for evidence",
            scoreDelta: 2,
          },
          {
            id: "sa-e5",
            text: "Examine oral cavity and pharynx for injuries (if oral sex reported)",
            isOptimal: true,
            findings: "Pharyngeal erythema, petechiae on soft palate, abraded areas - consistent with forced oral sex",
            scoreDelta: 2,
          },
          {
            id: "sa-e6",
            text: "Document perianal area for tears or trauma (if anal assault reported)",
            isOptimal: false,
            findings: "No anal trauma reported; external anal area normal",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt: "Collect evidence samples with proper chain of custody per MOHFW guidelines.",
        availableActions: [
          {
            id: "sa-i1",
            text: "Collect vaginal high swabs and cervical samples in sterile tubes",
            isOptimal: true,
            findings: "Swabs collected immediately; DNA evidence preserved; labeled with patient ID and time",
            scoreDelta: 2,
          },
          {
            id: "sa-i2",
            text: "Collect oral swabs from mouth and pharynx if oral sex reported",
            isOptimal: true,
            findings: "Oral swabs taken; DNA evidence from semen or saliva recovered",
            scoreDelta: 2,
          },
          {
            id: "sa-i3",
            text: "Collect fingernail clippings and swabs if patient has scratched assailant",
            isOptimal: true,
            findings: "Nail clippings collected; DNA evidence found under nails (likely assailant's blood)",
            scoreDelta: 2,
          },
          {
            id: "sa-i4",
            text: "Preserve patient's clothing and take samples from stained areas",
            isOptimal: true,
            findings: "Clothing sealed separately; semen stains on underwear and thighs confirmed",
            scoreDelta: 2,
          },
          {
            id: "sa-i5",
            text: "Perform blood tests: blood group, HIV, Hep B/C, RPR, syphilis serology baseline",
            isOptimal: true,
            findings: "Baseline STI serology negative; blood group O positive; baseline for prophylaxis",
            scoreDelta: 2,
          },
          {
            id: "sa-i6",
            text: "Perform pregnancy test (urine/serum beta-hCG)",
            isOptimal: true,
            findings: "Pregnancy test negative; discuss EC pill if indicated within 72 hours",
            scoreDelta: 2,
          },
        ],
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt: "Formulate medicolegal opinion regarding evidence of sexual assault.",
        availableActions: [
          {
            id: "sa-d1",
            text: "Conclude on findings consistent with recent non-consensual sexual intercourse",
            isOptimal: true,
            findings:
              "Medical findings: fresh hymenal lacerations, vaginal lacerations, cervical trauma consistent with forceful penetration",
            scoreDelta: 2,
          },
          {
            id: "sa-d2",
            text: "Note on abolition of 'two-finger test' per MOHFW guidelines",
            isOptimal: true,
            findings:
              "Per 2020 MOHFW guidelines: Two-finger test NOT performed as it is NOT medically valid and violates autonomy",
            scoreDelta: 2,
          },
          {
            id: "sa-d3",
            text: "Document presence of semen/DNA evidence supporting sexual contact",
            isOptimal: true,
            findings:
              "Semen identified on swabs and clothing; DNA analysis pending for assailant identification",
            scoreDelta: 2,
          },
        ],
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt: "Provide acute care, prevention of STIs/pregnancy, and psychological support.",
        availableActions: [
          {
            id: "sa-t1",
            text: "Provide emergency contraception: levonorgestrel 1.5mg PO (within 72 hours)",
            isOptimal: true,
            findings: "EC pill administered at 4h post-assault; counseled on effectiveness",
            scoreDelta: 2,
          },
          {
            id: "sa-t2",
            text: "Initiate STI prophylaxis: ceftriaxone 250mg IM + azithromycin 1g PO",
            isOptimal: true,
            findings: "Antibiotic prophylaxis given immediately; explained that STI screening at 6-12 weeks",
            scoreDelta: 2,
          },
          {
            id: "sa-t3",
            text: "Offer HIV PEP if high-risk assault (bleeding, trauma, violence)",
            isOptimal: true,
            findings: "High-risk assault; HIV PEP 3-drug regimen started within 2 hours (zidovudine+lamivudine+lopinavir/ritonavir)",
            scoreDelta: 2,
          },
          {
            id: "sa-t4",
            text: "Provide wound care, analgesia, and prophylactic antibiotics for injuries",
            isOptimal: true,
            findings: "Topical antiseptic applied; analgesics prescribed; antibiotic ointment for lacerations",
            scoreDelta: 2,
          },
          {
            id: "sa-t5",
            text: "Arrange psychological counseling and refer to trauma center",
            isOptimal: true,
            findings: "Psychiatric consultation arranged; patient referred to rape crisis center for ongoing support",
            scoreDelta: 2,
          },
        ],
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt: "Plan follow-up care including STI screening, legal support, and rehabilitation.",
        availableActions: [
          {
            id: "sa-f1",
            text: "Schedule 6-week STI serology follow-up (Hep B, C, HIV, RPR)",
            isOptimal: true,
            findings: "Patient counseled on window period; follow-up appointments scheduled at 6 weeks and 3 months",
            scoreDelta: 2,
          },
          {
            id: "sa-f2",
            text: "Provide comprehensive medico-legal report to magistrate and investigating officer",
            isOptimal: true,
            findings:
              "Detailed report documenting all findings, chain of custody, expert opinion submitted; admissible in court",
            scoreDelta: 2,
          },
          {
            id: "sa-f3",
            text: "Connect with DLSA for legal aid and victim compensation",
            isOptimal: true,
            findings: "Patient referred to District Legal Services Authority; informed of compensation under POCSO Act",
            scoreDelta: 2,
          },
          {
            id: "sa-f4",
            text: "Provide written information on long-term physical and mental health resources",
            isOptimal: true,
            findings: "Counseling leaflets provided; helpline numbers given; resources for trauma recovery",
            scoreDelta: 2,
          },
        ],
      },
    ],
  },

  // COMMUNITY MEDICINE CASES - CONTINUING
  {
    title: "Malaria Outbreak Investigation - Tribal Village",
    presentingComplaint: "Cluster of fever cases in tribal village; NVBDCP alert",
    caseType: "Community" as const,
    difficulty: "MEDIUM" as const,
    estimatedMinutes: 35,
    examTags: ["NEXT_STEP1", "NEET_PG", "Community", "Vector-borne"] as string[],
    patientProfile: {
      age: 0,
      sex: "Mixed",
      occupation: "Farmers, tribal population",
      history: "10 fever cases in village of 500 population over 2 weeks; monsoon season",
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt:
          "Investigation of malaria outbreak in a tribal village. Conduct epidemiological investigation to identify outbreak source and cases.",
        availableActions: [
          {
            id: "mal-h1",
            text: "Define suspected malaria case: fever >38°C + chills/rigors in past 2 weeks",
            isOptimal: true,
            findings:
              "Line listing: 10 suspected cases identified; ages 5-65; fever onset staggered over 14 days",
            scoreDelta: 2,
          },
          {
            id: "mal-h2",
            text: "Conduct active case finding via house-to-house survey",
            isOptimal: true,
            findings: "2 additional asymptomatic but parasitemic individuals found; total 12 positive on testing",
            scoreDelta: 2,
          },
          {
            id: "mal-h3",
            text: "Map case locations and identify geographic clustering",
            isOptimal: true,
            findings: "Cases concentrated in central hamlet near stagnant water and forest fringe; no sporadic distant cases",
            scoreDelta: 2,
          },
          {
            id: "mal-h4",
            text: "Inquire about recent travel history from endemic areas",
            isOptimal: false,
            findings: "2 cases traveled to forest labor camp 3 weeks ago; likely imported cases",
            scoreDelta: 1,
          },
          {
            id: "mal-h5",
            text: "Assess population awareness of malaria prevention and bed net usage",
            isOptimal: true,
            findings: "30% ITN coverage; many nets damaged; awareness low; no community health worker for 6 months",
            scoreDelta: 2,
          },
        ],
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt:
          "Examine index and identified cases. Assess clinical severity and comorbidities.",
        availableActions: [
          {
            id: "mal-e1",
            text: "Clinical examination of cases: fever, splenomegaly, hepatomegaly assessment",
            isOptimal: true,
            findings:
              "Splenomegaly in 8/10 cases; hepatomegaly in 5/10; anemia evident; no severe complications yet",
            scoreDelta: 2,
          },
          {
            id: "mal-e2",
            text: "Screen for severe malaria: cerebral malaria, acute renal failure, pulmonary edema",
            isOptimal: true,
            findings: "Most cases uncomplicated; 1 case with impaired consciousness (presumed cerebral malaria)",
            scoreDelta: 2,
          },
          {
            id: "mal-e3",
            text: "Assess nutritional status and identify vulnerable groups (children, pregnant women)",
            isOptimal: true,
            findings: "2 children <5y (high risk); 1 pregnant woman at 6 months; malnutrition prevalent in 60%",
            scoreDelta: 2,
          },
          {
            id: "mal-e4",
            text: "Document environmental factors: water sources, vector breeding sites",
            isOptimal: false,
            findings: "Multiple stagnant water pools, poor sanitation, no drainage; ideal mosquito breeding",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt: "Confirm diagnosis and determine parasite species for outbreak investigation.",
        availableActions: [
          {
            id: "mal-i1",
            text: "Obtain blood slides (thick and thin) for malaria parasites in all cases",
            isOptimal: true,
            findings:
              "Thick smears: 10/10 positive; species: 8 P.vivax, 2 P.falciparum; geometric mean parasitemia 2000-5000/µL",
            scoreDelta: 2,
          },
          {
            id: "mal-i2",
            text: "Perform RDT (Rapid Diagnostic Test) for initial case confirmation",
            isOptimal: true,
            findings: "RDT 100% sensitive; rapid field confirmation available; supports treatment initiation",
            scoreDelta: 2,
          },
          {
            id: "mal-i3",
            text: "Request Hematocrit, blood glucose, renal function, LFT in confirmed cases",
            isOptimal: true,
            findings:
              "Hematocrit 25-35%; glucose low (80-100); creatinine normal; bilirubin elevated in 4/10 (hemolysis)",
            scoreDelta: 2,
          },
          {
            id: "mal-i4",
            text: "Send blood samples for molecular confirmation (qPCR) to NVBDCP reference lab",
            isOptimal: true,
            findings:
              "qPCR confirms P.vivax in 8, P.falciparum in 2; no mixed infections; rapid transmission",
            scoreDelta: 2,
          },
          {
            id: "mal-i5",
            text: "Conduct vector surveillance: larval surveys and adult mosquito trapping",
            isOptimal: true,
            findings: "Anopheles culicifacies and A.fluviatilis larvae in water sources; adults caught in light traps",
            scoreDelta: 2,
          },
        ],
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt: "Confirm outbreak etiology and identify transmission source.",
        availableActions: [
          {
            id: "mal-d1",
            text: "Confirm outbreak: ≥1 case of locally-acquired malaria in non-endemic village = outbreak",
            isOptimal: true,
            findings:
              "Outbreak confirmed: 10 indigenous cases of P.vivax and P.falciparum in non-endemic tribal hamlet",
            scoreDelta: 2,
          },
          {
            id: "mal-d2",
            text: "Determine epidemic curve and attack rate",
            isOptimal: true,
            findings:
              "Attack rate: 2% (10/500); epidemic curve: exponential rise; doubling time ~3-4 days suggests ongoing transmission",
            scoreDelta: 2,
          },
          {
            id: "mal-d3",
            text: "Classify outbreak: local transmission with imported cases as origin",
            isOptimal: true,
            findings:
              "Source: 2 imported cases from endemic area; rapid local transmission due to vector presence and poor prevention",
            scoreDelta: 2,
          },
        ],
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt: "Initiate outbreak control measures per NVBDCP guidelines.",
        availableActions: [
          {
            id: "mal-t1",
            text: "Start antimalarial treatment: P.vivax (CQ+PQ) and P.falciparum (AS+AQ or AL)",
            isOptimal: true,
            findings: "All 10 cases treated with appropriate ACTs; P.vivax given primaquine for radical cure",
            scoreDelta: 2,
          },
          {
            id: "mal-t2",
            text: "Implement IRS (Indoor Residual Spraying) in affected hamlet immediately",
            isOptimal: true,
            findings:
              "IRS with DDT/pyrethroids completed in all 100 houses; vector control team mobilized",
            scoreDelta: 2,
          },
          {
            id: "mal-t3",
            text: "Distribute LLINs (Long Lasting Insecticidal Nets) to all households",
            isOptimal: true,
            findings: "500 LLINs distributed; community education on net use; coverage increased to 90%",
            scoreDelta: 2,
          },
          {
            id: "mal-t4",
            text: "Mobilize community for environmental sanitation and water management",
            isOptimal: true,
            findings: "Community mobilization: stagnant water drained, sanitation improved, awareness increased",
            scoreDelta: 2,
          },
        ],
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt: "Plan surveillance and prevention activities to contain outbreak.",
        availableActions: [
          {
            id: "mal-f1",
            text: "Establish active case surveillance for 2-3 months in village",
            isOptimal: true,
            findings:
              "Weekly house-to-house visits; blood slides collected; rapid response if new cases detected",
            scoreDelta: 2,
          },
          {
            id: "mal-f2",
            text: "Monitor treatment response: repeat blood slides at Day 3, 7, 14, 28",
            isOptimal: true,
            findings: "All cases parasite-negative by Day 3; clinical recovery by Day 7; no recurrence at 28 days",
            scoreDelta: 2,
          },
          {
            id: "mal-f3",
            text: "Conduct refresher training for ASHA/ANM on malaria diagnosis and reporting",
            isOptimal: true,
            findings:
              "Training completed; reporting system strengthened; 1 new health worker deployed to village",
            scoreDelta: 2,
          },
          {
            id: "mal-f4",
            text: "Submit outbreak report to district health authority and NVBDCP",
            isOptimal: true,
            findings:
              "Outbreak report filed; recommendations for annual IRS and LLIN replacement; follow-up planned",
            scoreDelta: 2,
          },
        ],
      },
    ],
  },

  // CASE 5: AEFI
  {
    title: "AEFI Investigation - Post-Vaccination Seizure",
    presentingComplaint: "2-year-old with fever and febrile seizure 12 hours post-measles vaccination",
    caseType: "OPD" as const,
    difficulty: "MEDIUM" as const,
    estimatedMinutes: 30,
    examTags: ["NEXT_STEP1", "NEET_PG", "Community", "Immunization"] as string[],
    patientProfile: {
      age: 2,
      sex: "Female",
      occupation: "Not applicable",
      history: "Received measles vaccine at 12:30 PM yesterday; fever started 8 PM; generalized seizure at 10 PM",
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt:
          "A 2-year-old female presents 12 hours after measles vaccination with febrile seizure. Investigate for AEFI (Adverse Event Following Immunization).",
        availableActions: [
          {
            id: "aefi-h1",
            text: "Document vaccination details: vaccine name, lot number, date, time, administration site",
            isOptimal: true,
            findings:
              "Vaccine: Measles (MV Live, Indian manufacturer); Lot: AB123456; Date: 22-Mar-2026, 12:30 PM; IM left deltoid",
            scoreDelta: 2,
          },
          {
            id: "aefi-h2",
            text: "Obtain detailed seizure history: onset time, duration, type, postictal state",
            isOptimal: true,
            findings:
              "Fever onset 8 PM (7.5h post-vac); seizure started 10 PM (generalized tonic-clonic, ~2 minutes); postictal confusion 30 minutes",
            scoreDelta: 2,
          },
          {
            id: "aefi-h3",
            text: "Ask about previous seizures, family history of epilepsy, or developmental delay",
            isOptimal: true,
            findings: "No prior seizures; maternal uncle has epilepsy; developmental milestones normal",
            scoreDelta: 2,
          },
          {
            id: "aefi-h4",
            text: "Document pre-vaccination health status and any acute illnesses",
            isOptimal: false,
            findings: "Child completely healthy before vaccination; no fever, cough, or symptoms",
            scoreDelta: 1,
          },
          {
            id: "aefi-h5",
            text: "Inquire about other medications, recent infections, or exposure",
            isOptimal: true,
            findings: "No medications; no recent infections; no sick contacts; no food or drug allergies",
            scoreDelta: 2,
          },
        ],
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt: "Examine child to assess current status and rule out other causes of seizure.",
        availableActions: [
          {
            id: "aefi-e1",
            text: "Assess vital signs, hydration, and general condition",
            isOptimal: true,
            findings: "Temperature 39.5°C, HR 130/min, RR 28/min, BP 95/60; alert, normally responsive",
            scoreDelta: 2,
          },
          {
            id: "aefi-e2",
            text: "Perform neurological examination: GCS, cranial nerves, motor/sensory, reflexes",
            isOptimal: true,
            findings:
              "GCS 15/15 (fully alert); cranial nerves normal; motor normal; no focal deficit; reflexes brisk",
            scoreDelta: 2,
          },
          {
            id: "aefi-e3",
            text: "Examine vaccination site: look for abscess, excessive swelling, or infection",
            isOptimal: true,
            findings: "Left deltoid: mild erythema (1cm), no induration, no abscess, no purulent drainage",
            scoreDelta: 2,
          },
          {
            id: "aefi-e4",
            text: "Check for signs of meningitis: nuchal rigidity, Kernig's, Brudzinski's signs",
            isOptimal: true,
            findings: "No nuchal rigidity, negative Kernig's and Brudzinski's signs; meningitis unlikely",
            scoreDelta: 2,
          },
          {
            id: "aefi-e5",
            text: "Assess for rash (measles vaccine can cause rash 5-12 days post-vaccination)",
            isOptimal: false,
            findings: "No rash present at current examination; high fever but no characteristic measles rash",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt: "Perform investigations to confirm febrile seizure and rule out alternative causes.",
        availableActions: [
          {
            id: "aefi-i1",
            text: "Obtain CBC, blood culture, and blood smear to rule out infections",
            isOptimal: true,
            findings: "WBC 12,000, platelets 300,000; hemoglobin 11.5; blood culture negative",
            scoreDelta: 2,
          },
          {
            id: "aefi-i2",
            text: "Perform CSF examination: cell count, protein, glucose, culture, viral PCR",
            isOptimal: true,
            findings:
              "CSF: 5 cells/µL (all lymphocytes), protein 25 mg/dL, glucose 50 mg/dL (normal ratio); culture sterile; virus PCR negative",
            scoreDelta: 2,
          },
          {
            id: "aefi-i3",
            text: "Request electrolytes, blood glucose, and renal function",
            isOptimal: false,
            findings: "Sodium 138, glucose 105, creatinine 0.4; all normal",
            scoreDelta: 1,
          },
          {
            id: "aefi-i4",
            text: "Perform EEG if seizure recurs or prolonged post-ictal state",
            isOptimal: false,
            findings: "EEG not done acutely; no recurrent seizure; normal mental status after event",
            scoreDelta: 0,
          },
        ],
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt: "Classify the AEFI using WHO Brighton criteria for causality assessment.",
        availableActions: [
          {
            id: "aefi-d1",
            text: "Diagnose febrile seizure: >6 months, <6 years, fever 38.5°C, no CNS infection",
            isOptimal: true,
            findings:
              "Diagnosis: Simple febrile seizure; age 2y, temperature 39.5°C, generalized brief seizure, CSF normal",
            scoreDelta: 2,
          },
          {
            id: "aefi-d2",
            text: "Classify AEFI causality using WHO Brighton criteria: Consistent/Inconsistent",
            isOptimal: true,
            findings:
              "Brighton Category: CONSISTENT - timing 7.5h post-vac (typical for vaccine fever), clinical presentation fits febrile seizure, no alternative diagnosis",
            scoreDelta: 2,
          },
          {
            id: "aefi-d3",
            text: "Document that vaccine-induced fever causing seizure does NOT indicate vaccine danger",
            isOptimal: true,
            findings:
              "Clinical impression: AEFI consistent with vaccine fever causing febrile seizure; risk-benefit favors continued vaccination",
            scoreDelta: 2,
          },
        ],
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt: "Manage febrile seizure and counsel family on future vaccinations.",
        availableActions: [
          {
            id: "aefi-t1",
            text: "For acute seizure: oxygen, IV access, diazepam 0.5 mg/kg IV if ongoing",
            isOptimal: true,
            findings: "Seizure resolved before presentation; oxygen not needed; IV access maintained for fluids",
            scoreDelta: 2,
          },
          {
            id: "aefi-t2",
            text: "Manage fever: paracetamol 15 mg/kg, tepid sponging, maintain hydration",
            isOptimal: true,
            findings: "Paracetamol given; fever reduced to 38.8°C; increased fluid intake; child comfortable",
            scoreDelta: 2,
          },
          {
            id: "aefi-t3",
            text: "Counsel family: reassure about simple febrile seizure prognosis and vaccine safety",
            isOptimal: true,
            findings:
              "Parents counseled: febrile seizures benign, not epilepsy; no brain damage; recurrence risk ~30%; continue vaccination schedule",
            scoreDelta: 2,
          },
          {
            id: "aefi-t4",
            text: "Advise on fever management for future vaccinations and when to give antipyretics",
            isOptimal: true,
            findings:
              "Parents taught fever management: paracetamol within 2h of vaccination if fever develops; use sponging; keep child cool",
            scoreDelta: 2,
          },
        ],
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt: "Plan follow-up and AEFI reporting requirements.",
        availableActions: [
          {
            id: "aefi-f1",
            text: "Schedule neurology follow-up to assess for developmental issues",
            isOptimal: true,
            findings: "Pediatric neurology appointment arranged at 1 month; EEG if recurrent seizures",
            scoreDelta: 2,
          },
          {
            id: "aefi-f2",
            text: "File AEFI report with district health authority and CDSCO within 24 hours",
            isOptimal: true,
            findings: "AEFI report submitted: ID number AEFI/MV/001/2026; copy given to parents",
            scoreDelta: 2,
          },
          {
            id: "aefi-f3",
            text: "Complete vaccination schedule: discuss next doses (DPT, MMR second dose at 4-6 years)",
            isOptimal: true,
            findings:
              "Vaccination counseling: next dose of MMR safe; give DPT at 30 months; no contraindication to future vaccines",
            scoreDelta: 2,
          },
          {
            id: "aefi-f4",
            text: "Provide written information on febrile seizure and AEFI management for parents",
            isOptimal: true,
            findings: "Handout provided: febrile seizure facts, emergency warning signs, vaccination benefits, when to seek care",
            scoreDelta: 2,
          },
        ],
      },
    ],
  },

  // CASE 6: OCCUPATIONAL DISEASE - SILICOSIS
  {
    title: "Occupational Silicosis in Stone Crusher",
    presentingComplaint: "45-year-old stone crusher with progressive dyspnea, cough, and CXR findings",
    caseType: "OPD" as const,
    difficulty: "MEDIUM" as const,
    estimatedMinutes: 30,
    examTags: ["NEXT_STEP1", "NEET_PG", "Occupational", "Respiratory"] as string[],
    patientProfile: {
      age: 45,
      sex: "Male",
      occupation: "Stone crusher, Rajasthan, 20 years",
      history: "Progressive dyspnea past 5 years, unregistered worker, no occupational health insurance",
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt:
          "A 45-year-old stone crusher presents with progressive dyspnea. Take detailed occupational history.",
        availableActions: [
          {
            id: "sil-h1",
            text: "Document occupational exposure: stone crushing for 20 years, silica dust exposure",
            isOptimal: true,
            findings:
              "20 years stone crushing with hammer; dry cutting (no water), high dust exposure; unregistered worker; no PPE",
            scoreDelta: 2,
          },
          {
            id: "sil-h2",
            text: "Assess symptom chronology: dyspnea onset, progression, exercise tolerance",
            isOptimal: true,
            findings:
              "Dyspnea began 5 years ago with heavy exertion, now presents at minimal activity; cough daily with sputum",
            scoreDelta: 2,
          },
          {
            id: "sil-h3",
            text: "Ask about smoking history and other dust exposures",
            isOptimal: true,
            findings: "Smoking: 20 pack-years; no other occupational exposures; poor ventilation at workplace",
            scoreDelta: 2,
          },
          {
            id: "sil-h4",
            text: "Inquire about TB history or symptoms suggestive of TB (risk factor in silicosis)",
            isOptimal: true,
            findings: "No TB previously; no current TB symptoms; no family TB; denies weight loss",
            scoreDelta: 2,
          },
          {
            id: "sil-h5",
            text: "Document work disability and socioeconomic impact",
            isOptimal: true,
            findings:
              "Unable to work for 3 months; family income lost; no workers compensation; significant financial burden",
            scoreDelta: 2,
          },
        ],
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt: "Examine respiratory system and assess severity.",
        availableActions: [
          {
            id: "sil-e1",
            text: "Assess respiratory rate, O2 saturation, accessory muscle use at rest and exertion",
            isOptimal: true,
            findings: "RR 24/min at rest, O2 sat 92% room air (drops to 88% on 6-minute walk); mild accessory muscle use",
            scoreDelta: 2,
          },
          {
            id: "sil-e2",
            text: "Auscultate lungs for crackles, wheeze, or reduced air entry",
            isOptimal: true,
            findings:
              "Fine crackles bilateral base and mid-zones; reduced air entry apices; no wheeze; normal heart sounds",
            scoreDelta: 2,
          },
          {
            id: "sil-e3",
            text: "Look for clubbing, cyanosis, signs of cor pulmonale",
            isOptimal: true,
            findings: "Mild clubbing present; mild cyanosis lips; JVP normal; no ankle edema",
            scoreDelta: 2,
          },
          {
            id: "sil-e4",
            text: "Assess nutritional status and general condition",
            isOptimal: false,
            findings: "BMI 22 kg/m2; well-nourished; anxious affect; no fever",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt: "Confirm diagnosis with imaging and spirometry.",
        availableActions: [
          {
            id: "sil-i1",
            text: "Perform chest X-ray: look for eggshell calcification, bilateral upper zone opacities",
            isOptimal: true,
            findings:
              "CXR: Bilateral upper zone opacities, small nodular pattern, hilar eggshell calcification - ILO classification p/q1 profusion",
            scoreDelta: 2,
          },
          {
            id: "sil-i2",
            text: "Request HRCT chest for staging and assessing background lung damage",
            isOptimal: true,
            findings:
              "HRCT: Centrilobular nodules, upper lobe predominance, eggshell lymph node calcification; no masses; background fibrosis",
            scoreDelta: 2,
          },
          {
            id: "sil-i3",
            text: "Perform spirometry and DLCO to assess functional impairment",
            isOptimal: true,
            findings:
              "FEV1 55% predicted, FVC 62% predicted, FEV1/FVC 0.78; restrictive pattern; DLCO 60% predicted",
            scoreDelta: 2,
          },
          {
            id: "sil-i4",
            text: "Rule out TB: sputum AFB, CBNAAT, and TB-LAMP if indicated",
            isOptimal: true,
            findings: "Sputum AFB negative x3; CBNAAT negative; TB unlikely",
            scoreDelta: 2,
          },
          {
            id: "sil-i5",
            text: "Perform ECG and echocardiography to assess for cor pulmonale",
            isOptimal: true,
            findings: "ECG: right axis deviation, tall P waves; Echo: mild RV dilatation, mild TR, PA pressure 40 mmHg",
            scoreDelta: 2,
          },
        ],
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt: "Confirm silicosis diagnosis and stage severity.",
        availableActions: [
          {
            id: "sil-d1",
            text: "Diagnose occupational silicosis based on exposure history and CXR findings",
            isOptimal: true,
            findings:
              "Diagnosis: Chronic Silicosis - confirmed by 20-year exposure history, characteristic CXR (eggshell calcification), restrictive spirometry",
            scoreDelta: 2,
          },
          {
            id: "sil-d2",
            text: "Classify severity using ILO classification: Stage II (p/q1, rounded opacities)",
            isOptimal: true,
            findings: "ILO Stage II: >10 opacities ≥1cm; hilar eggshell calcification; extent 25-50% lung fields",
            scoreDelta: 2,
          },
          {
            id: "sil-d3",
            text: "Document disease stage and functional impairment (GOLD Stage 3)",
            isOptimal: true,
            findings:
              "Functional impairment: GOLD Stage 3 COPD equivalent (FEV1 30-50%); occupational disability confirmed",
            scoreDelta: 2,
          },
        ],
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt: "Manage silicosis and initiate disability/compensation processes.",
        availableActions: [
          {
            id: "sil-t1",
            text: "Counsel on cessation of silica exposure: remove from dusty occupation immediately",
            isOptimal: true,
            findings: "Patient counseled; referred to occupational health for work modification or retirement planning",
            scoreDelta: 2,
          },
          {
            id: "sil-t2",
            text: "Treat concurrent COPD: inhaled bronchodilators, corticosteroids, and prophylaxis",
            isOptimal: true,
            findings:
              "Prescribed: Tiotropium + formoterol inhaler, ICS (fluticasone), annual influenza vaccine, pneumococcal vaccine",
            scoreDelta: 2,
          },
          {
            id: "sil-t3",
            text: "Refer for ESI Act disability certification and compensation claim",
            isOptimal: true,
            findings:
              "ESI registration initiated; disability benefits form filed; estimated monthly compensation ₹10,000-15,000",
            scoreDelta: 2,
          },
          {
            id: "sil-t4",
            text: "Provide oxygen supplementation prescription if SpO2 <88% on exertion",
            isOptimal: true,
            findings: "Long-term oxygen therapy prescribed (3-4 L/min during activity); oxygen concentrator arranged",
            scoreDelta: 2,
          },
        ],
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt: "Plan follow-up monitoring and rehabilitation.",
        availableActions: [
          {
            id: "sil-f1",
            text: "Schedule 3-monthly follow-up for spirometry, symptoms, and oxygen requirement assessment",
            isOptimal: true,
            findings: "Clinic appointments scheduled; PFT follow-up at 3 months; medication compliance reviewed",
            scoreDelta: 2,
          },
          {
            id: "sil-f2",
            text: "Refer for pulmonary rehabilitation: breathing exercises, nutrition, exercise program",
            isOptimal: true,
            findings:
              "Referred to chest physiotherapy; enrolled in pulmonary rehabilitation program; nutritional counseling",
            scoreDelta: 2,
          },
          {
            id: "sil-f3",
            text: "Arrange vocational rehabilitation and retraining options",
            isOptimal: true,
            findings: "Referred to NHRC (National Health Resource Center) for occupational rehabilitation; counseling on alternative livelihoods",
            scoreDelta: 2,
          },
          {
            id: "sil-f4",
            text: "Monitor for TB screening annually (increased risk in silicosis)",
            isOptimal: true,
            findings: "Annual TB screening scheduled; CXR and sputum check planned",
            scoreDelta: 2,
          },
        ],
      },
    ],
  },

  // ANESTHESIA CASES - CONTINUING
  {
    title: "Malignant Hyperthermia Crisis",
    presentingComplaint: "25-year-old male, high fever and muscle rigidity during general anesthesia",
    caseType: "Emergency" as const,
    difficulty: "MEDIUM" as const,
    estimatedMinutes: 30,
    examTags: ["NEXT_STEP1", "NEET_PG", "Anesthesia", "Critical Care"] as string[],
    patientProfile: {
      age: 25,
      sex: "Male",
      occupation: "Factory worker",
      history: "Elective inguinal hernia repair, received GA with propofol + succinylcholine",
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt:
          "A 25-year-old male is undergoing elective surgery. Obtain history regarding risk factors for MH.",
        availableActions: [
          {
            id: "mh-h1",
            text: "Obtain family history of anesthetic complications or unexpected deaths during surgery",
            isOptimal: true,
            findings:
              "Father had 'high fever' during surgery at age 30; hospitalized in ICU; no other details available",
            scoreDelta: 2,
          },
          {
            id: "mh-h2",
            text: "Ask about muscle disorders: myopathy, muscular dystrophy, rhabdomyolysis episodes",
            isOptimal: true,
            findings: "No known muscle disorders; denies unexplained muscle pain or weakness; normal activity level",
            scoreDelta: 2,
          },
          {
            id: "mh-h3",
            text: "Document prior surgeries and anesthetic reactions",
            isOptimal: false,
            findings: "First surgery; no prior anesthetic exposure; no reported reactions",
            scoreDelta: 1,
          },
          {
            id: "mh-h4",
            text: "Assess baseline CK and myoglobin if strong family history",
            isOptimal: true,
            findings: "Baseline CK 120 U/L (normal); myoglobin normal; pre-op assessment routine",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt:
          "MH crisis develops 10 minutes after induction with propofol and succinylcholine. Recognize and respond immediately.",
        availableActions: [
          {
            id: "mh-e1",
            text: "STOP: Recognize early signs - muscle rigidity, jaw clenching, rapidly rising ETCO2",
            isOptimal: true,
            findings:
              "Signs noted: masseter muscle rigidity, ETCO2 rising (35→55 mmHg in 5 min), muscle fasciculations persistent",
            scoreDelta: 2,
          },
          {
            id: "mh-e2",
            text: "Assess temperature: check esophageal/core temperature continuously",
            isOptimal: true,
            findings: "Esophageal temperature: 36°C initially, rapidly rising to 39.5°C within 15 minutes",
            scoreDelta: 2,
          },
          {
            id: "mh-e3",
            text: "Note muscle rigidity progression: generalized skeletal muscle rigidity developing",
            isOptimal: true,
            findings: "Generalized muscle rigidity, difficulty ventilating, resistance to passive movement",
            scoreDelta: 2,
          },
          {
            id: "mh-e4",
            text: "Assess vital signs: tachycardia, hypertension, dysrhythmias on ECG",
            isOptimal: true,
            findings: "HR 160/min, BP 180/110, ECG shows peaked T waves (hyperkalemia); mixed dysrhythmias",
            scoreDelta: 2,
          },
        ],
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt:
          "Send stat investigations to confirm MH and monitor complications.",
        availableActions: [
          {
            id: "mh-i1",
            text: "Obtain arterial blood gas: acidosis, hypercarbia expected",
            isOptimal: true,
            findings:
              "ABG: pH 7.15, PCO2 85 mmHg, PO2 45 mmHg, HCO3 18; mixed metabolic + respiratory acidosis",
            scoreDelta: 2,
          },
          {
            id: "mh-i2",
            text: "Check serum potassium immediately (life-threatening hyperkalemia risk)",
            isOptimal: true,
            findings: "K+ 7.2 mmol/L (normal 3.5-5); severe hyperkalemia; peaked T waves on ECG",
            scoreDelta: 2,
          },
          {
            id: "mh-i3",
            text: "Obtain CK, myoglobin, creatinine for rhabdomyolysis assessment",
            isOptimal: true,
            findings:
              "CK 15,000 U/L (markedly elevated); myoglobin 5000 ng/mL (elevated); creatinine 1.2 mg/dL (rising)",
            scoreDelta: 2,
          },
          {
            id: "mh-i4",
            text: "Request coagulation profile (PT, aPTT, platelet count, fibrinogen) - DIC risk",
            isOptimal: true,
            findings: "PT prolonged, aPTT prolonged, platelets 100,000, fibrinogen 150 - early DIC",
            scoreDelta: 2,
          },
          {
            id: "mh-i5",
            text: "Send urine for myoglobin dipstick (suggests rhabdomyolysis)",
            isOptimal: true,
            findings: "Urine myoglobin strongly positive; dark cola-colored urine visible",
            scoreDelta: 2,
          },
        ],
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt: "Confirm malignant hyperthermia diagnosis.",
        availableActions: [
          {
            id: "mh-d1",
            text: "Confirm MH crisis: STOP succinylcholine, discontinue volatile anesthetics",
            isOptimal: true,
            findings:
              "Clinical diagnosis: MH crisis confirmed - rapid ETCO2 rise, fever, rigidity, hyperkalemia post-succinylcholine",
            scoreDelta: 2,
          },
          {
            id: "mh-d2",
            text: "List diagnostic criteria: muscle rigidity + rapid ETCO2 + unexplained fever + acidosis",
            isOptimal: true,
            findings:
              "Diagnostic criteria met: masseter/skeletal rigidity, ETCO2 >50, temperature >38.5°C, mixed acidosis, K+ >5.5",
            scoreDelta: 2,
          },
        ],
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt:
          "Implement immediate MH crisis management protocol.",
        availableActions: [
          {
            id: "mh-t1",
            text: "IMMEDIATE: Discontinue succinylcholine and ALL volatile anesthetics",
            isOptimal: true,
            findings: "Volatile agents discontinued; switch to total IV anesthesia (propofol/remifentanil)",
            scoreDelta: 2,
          },
          {
            id: "mh-t2",
            text: "Administer dantrolene sodium 2.5 mg/kg IV stat, then q5min up to 10 mg/kg",
            isOptimal: true,
            findings: "Dantrolene 175 mg (2.5 mg/kg) IV bolus given; second dose at 5 min; muscle rigidity decreasing",
            scoreDelta: 2,
          },
          {
            id: "mh-t3",
            text: "Hyperventilate with 100% O2; active cooling (ice packs, cold IV saline, ice-cold peritoneal lavage if needed)",
            isOptimal: true,
            findings:
              "FiO2 100%, minute ventilation increased; ice applied to groin/axilla; cold IV NS infused; core temp declining to 38°C",
            scoreDelta: 2,
          },
          {
            id: "mh-t4",
            text: "Treat hyperkalemia: calcium gluconate 10%, insulin + glucose, sodium bicarbonate",
            isOptimal: true,
            findings:
              "Calcium gluconate 10 mL 10% IV; insulin 10 U + dextrose 25g IV; sodium bicarbonate 100 mEq; K+ drops to 5.8",
            scoreDelta: 2,
          },
          {
            id: "mh-t5",
            text: "Treat acidosis: continue hyperventilation, sodium bicarbonate additional dose if pH <7.1",
            isOptimal: true,
            findings: "pH improved to 7.22 with hyperventilation and bicarbonate; respiratory component correcting",
            scoreDelta: 2,
          },
        ],
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt: "Post-crisis management and MH testing.",
        availableActions: [
          {
            id: "mh-f1",
            text: "Continue dantrolene 1 mg/kg q4-6h IV for 24-48 hours post-crisis",
            isOptimal: true,
            findings: "Dantrolene continued 75 mg q6h for 48 hours; temperature stable; no recurrence",
            scoreDelta: 2,
          },
          {
            id: "mh-f2",
            text: "Monitor for complications: myoglobinuria (dark urine), acute kidney injury, DIC",
            isOptimal: true,
            findings: "Aggressive IV fluids (D5W 200 mL/h); urine output maintained >200 mL/h; creatinine monitored",
            scoreDelta: 2,
          },
          {
            id: "mh-f3",
            text: "Refer for MH susceptibility testing: caffeine halothane contracture test or genetic testing",
            isOptimal: true,
            findings: "Referred to MH testing center; muscle biopsy arranged; genetic counseling for family",
            scoreDelta: 2,
          },
          {
            id: "mh-f4",
            text: "Provide MH alert documentation and MedicAlert bracelet",
            isOptimal: true,
            findings:
              "MH alert card issued; family educated on MH danger; MedicAlert bracelet recommended; alert in medical record",
            scoreDelta: 2,
          },
        ],
      },
    ],
  },

  // CASE 8: DIFFICULT AIRWAY - CONTINUED
  {
    title: "Failed Intubation - Difficult Airway in Emergency LSCS",
    presentingComplaint: "35-year-old obese female for emergency LSCS with difficult airway",
    caseType: "Emergency" as const,
    difficulty: "MEDIUM" as const,
    estimatedMinutes: 35,
    examTags: ["NEXT_STEP1", "NEET_PG", "Anesthesia", "Airway Management"] as string[],
    patientProfile: {
      age: 35,
      sex: "Female",
      occupation: "Housewife",
      history: "Obese (BMI 38), emergency LSCS for fetal distress, no pre-op airway assessment",
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt:
          "A 35-year-old obese female presents for emergency LSCS due to fetal distress. Assess airway risk factors.",
        availableActions: [
          {
            id: "da-h1",
            text: "Document obesity and neck circumference: measure neck circumference >42 cm",
            isOptimal: true,
            findings: "BMI 38 kg/m2; neck circumference 44 cm; short neck; obesity morbid",
            scoreDelta: 2,
          },
          {
            id: "da-h2",
            text: "Assess Mallampati score, thyromental distance, interincisor gap",
            isOptimal: true,
            findings: "Mallampati IV (soft palate not visible); thyromental distance 5 cm; interincisor gap 3 cm",
            scoreDelta: 2,
          },
          {
            id: "da-h3",
            text: "Ask about sleep apnea, snoring, or dyspnea when lying flat",
            isOptimal: true,
            findings: "History of loud snoring; daytime somnolence; presume obstructive sleep apnea",
            scoreDelta: 2,
          },
          {
            id: "da-h4",
            text: "Document urgency: fetal distress requires immediate delivery",
            isOptimal: true,
            findings: "CTG shows variable decelerations; urgency level HIGH; immediate anesthesia needed",
            scoreDelta: 2,
          },
        ],
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt: "Attempt induction and intubation; recognize failure and apply DAS algorithm.",
        availableActions: [
          {
            id: "da-e1",
            text: "Pre-oxygenation attempt: 3 minutes face mask, achieving FiO2 >0.8",
            isOptimal: true,
            findings: "Pre-oxygenation difficult; mask seal poor due to facial adiposity; achieves SpO2 95%",
            scoreDelta: 2,
          },
          {
            id: "da-e2",
            text: "Induction: IV propofol, succinylcholine for rapid sequence; assess ease of ventilation",
            isOptimal: true,
            findings: "Post-induction: difficult to ventilate; SpO2 drops rapidly (95%→85%); peak airway pressure high",
            scoreDelta: 2,
          },
          {
            id: "da-e3",
            text: "Intubation attempt 1: direct laryngoscopy, Cormack-Lehane Grade 3-4",
            isOptimal: true,
            findings: "DL attempt 1: epiglottis only visible (Cormack-Lehane III); unable to visualize vocal cords",
            scoreDelta: 2,
          },
          {
            id: "da-e4",
            text: "Intubation attempt 2: alternative positioning, external laryngeal manipulation",
            isOptimal: true,
            findings: "DL attempt 2: slight improvement (Grade III→II); vocal cord tips visible; intubation fails",
            scoreDelta: 2,
          },
          {
            id: "da-e5",
            text: "Recognize FAILED INTUBATION: stop further direct attempts after 2 failures",
            isOptimal: true,
            findings: "FAILED INTUBATION recognized; decision to use supraglottic device; activate DAS algorithm",
            scoreDelta: 2,
          },
        ],
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt: "Monitor vital signs and oxygenation during airway crisis.",
        availableActions: [
          {
            id: "da-i1",
            text: "Monitor pulse oximetry, end-tidal CO2, blood pressure, heart rate continuously",
            isOptimal: true,
            findings: "SpO2 dropping (85%→78%), ETCO2 zero (not intubated), BP 145/95, HR 120; desaturation progressing",
            scoreDelta: 2,
          },
          {
            id: "da-i2",
            text: "Obtain arterial blood gas if prolonged difficulty expected",
            isOptimal: true,
            findings: "ABG: pH 7.32, PCO2 48, PO2 65; mild respiratory acidosis developing",
            scoreDelta: 2,
          },
          {
            id: "da-i3",
            text: "Ensure IV access: 2 large bore cannulae for emergency medications",
            isOptimal: false,
            findings: "18-gauge IV × 2 in place; fluids running; vasopressors available",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt: "Recognize can't intubate/can't oxygenate (CICO) scenario; apply DAS rescue protocol.",
        availableActions: [
          {
            id: "da-d1",
            text: "Confirm CAN'T INTUBATE CAN'T OXYGENATE (CICO): failed intubation + inadequate ventilation",
            isOptimal: true,
            findings:
              "CICO criteria met: 2 intubation failures, inadequate mask ventilation, SpO2 <80% despite rescue attempts",
            scoreDelta: 2,
          },
          {
            id: "da-d2",
            text: "Recognize indication for emergency surgical airway",
            isOptimal: true,
            findings: "Decision: Proceed with emergency cricothyrotomy; other rescue methods failed",
            scoreDelta: 2,
          },
        ],
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt: "Implement DAS failed airway protocol: LMA attempt, then surgical airway.",
        availableActions: [
          {
            id: "da-t1",
            text: "LMA rescue: insert LMA size 4 (2-3 min insertion time limit)",
            isOptimal: true,
            findings: "LMA inserted successfully; ventilation achievable; SpO2 improving to 92%; waveform capnography confirmed",
            scoreDelta: 2,
          },
          {
            id: "da-t2",
            text: "If LMA fails: prepare for emergency cricothyrotomy immediately",
            isOptimal: true,
            findings: "LMA successful; SpO2 now acceptable; proceed with surgery via LMA; plan for extubation strategies",
            scoreDelta: 2,
          },
          {
            id: "da-t3",
            text: "If CICO persists: emergency front-of-neck access (cricothyrotomy) with bougie/needle",
            isOptimal: true,
            findings: "Surgical airway standby available; cricothyrotomy kit prepared; surgeon in OR",
            scoreDelta: 2,
          },
          {
            id: "da-t4",
            text: "Continue surgery: LSCS proceeded via LMA; fetal delivery achieved; neonatal team called",
            isOptimal: true,
            findings: "Surgery proceeded safely via LMA; baby delivered with APGAR 7 at 1 min, 9 at 5 min",
            scoreDelta: 2,
          },
        ],
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt: "Post-operative airway management and patient counseling.",
        availableActions: [
          {
            id: "da-f1",
            text: "Extubation planning: use LMA for controlled emergence if ventilation adequate",
            isOptimal: true,
            findings: "LMA maintained until complete emergence; smooth removal; SpO2 maintained >95%",
            scoreDelta: 2,
          },
          {
            id: "da-f2",
            text: "Document failed airway: detailed note in medical record and alert card",
            isOptimal: true,
            findings:
              "Failed airway documented; alert placed in file; patient given airway alert card for future surgeries",
            scoreDelta: 2,
          },
          {
            id: "da-f3",
            text: "Provide patient counseling: inform of airway difficulty, importance of pre-op disclosure",
            isOptimal: true,
            findings: "Patient counseled; explained difficult airway; given alert letter; advised to wear MedicAlert",
            scoreDelta: 2,
          },
          {
            id: "da-f4",
            text: "Arrange airway assessment for future surgeries: consider awake fiberoptic intubation if needed",
            isOptimal: true,
            findings: "Follow-up anesthesia consultation offered; airway management plan for future surgeries discussed",
            scoreDelta: 2,
          },
        ],
      },
    ],
  },

  // CASE 9: TOTAL SPINAL BLOCK
  {
    title: "Total Spinal Anesthesia - Labor Epidural Complication",
    presentingComplaint: "28-year-old in labor, sudden loss of consciousness and respiratory failure post-epidural",
    caseType: "Emergency" as const,
    difficulty: "MEDIUM" as const,
    estimatedMinutes: 30,
    examTags: ["NEXT_STEP1", "NEET_PG", "Anesthesia", "OB-Anesthesia"] as string[],
    patientProfile: {
      age: 28,
      sex: "Female",
      occupation: "Teacher",
      history: "G2P1, in active labor, epidural analgesia initiated 1 hour prior",
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt:
          "A 28-year-old in labor received epidural analgesia. Now unconscious 5 minutes post-epidural bolus.",
        availableActions: [
          {
            id: "tsb-h1",
            text: "Obtain rapid history: epidural technique, local anesthetic dose, time since injection",
            isOptimal: true,
            findings:
              "Epidural at L3-L4 using standard technique; 10 mL bupivacaine 0.1% bolus given 5 minutes ago",
            scoreDelta: 2,
          },
          {
            id: "tsb-h2",
            text: "Document onset of symptoms: sudden vs gradual loss of consciousness",
            isOptimal: true,
            findings:
              "Patient was alert, then 3 min post-injection: 'feeling strange, can't feel legs'; then loss of consciousness",
            scoreDelta: 2,
          },
          {
            id: "tsb-h3",
            text: "Inquire about respiratory symptoms prior to loss of consciousness",
            isOptimal: true,
            findings: "Midwife reports: patient gasped, said 'can't breathe', then became unresponsive within 1 minute",
            scoreDelta: 2,
          },
        ],
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt: "Immediate assessment of unconscious patient in labor.",
        availableActions: [
          {
            id: "tsb-e1",
            text: "Assess responsiveness: GCS, pupil reactivity, gag reflex",
            isOptimal: true,
            findings: "GCS 3/15 (completely unresponsive), pupils dilated, no gag reflex; presumed loss of airway reflexes",
            scoreDelta: 2,
          },
          {
            id: "tsb-e2",
            text: "Assess respiratory effort: apnea vs weak breathing, oxygen saturation",
            isOptimal: true,
            findings: "Apneic; SpO2 dropping rapidly (98%→80% in 30 seconds); no respiratory effort visible",
            scoreDelta: 2,
          },
          {
            id: "tsb-e3",
            text: "Check cardiovascular status: blood pressure, pulse, skin perfusion",
            isOptimal: true,
            findings: "Hypotensive: BP 70/40, HR 120, skin pale/clammy; profound cardiovascular collapse",
            scoreDelta: 2,
          },
          {
            id: "tsb-e4",
            text: "Assess lower limb motor blockade: bilateral paralysis indicating subarachnoid injection",
            isOptimal: true,
            findings: "Complete bilateral lower limb paralysis; no movement to painful stimulus; motor blockade T1-S5",
            scoreDelta: 2,
          },
        ],
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt: "Obtain stat investigations to confirm diagnosis and assess complications.",
        availableActions: [
          {
            id: "tsb-i1",
            text: "Obtain arterial blood gas: assess PaO2, PCO2, pH",
            isOptimal: true,
            findings: "ABG: pH 7.12, PCO2 75 mmHg, PaO2 55 mmHg; severe respiratory acidosis from hypoventilation/apnea",
            scoreDelta: 2,
          },
          {
            id: "tsb-i2",
            text: "Check serum electrolytes and glucose to rule out alternative causes",
            isOptimal: true,
            findings: "Na+ 138, K+ 4.0, glucose 110; electrolytes normal; rules out hyperglycemia/hypoglycemia",
            scoreDelta: 2,
          },
          {
            id: "tsb-i3",
            text: "Obtain cardiac monitoring: ECG for dysrhythmias from hypoxia/hypotension",
            isOptimal: true,
            findings: "ECG: sinus tachycardia 140 bpm, some ectopics; QTc normal; concerning but no acute STEMI",
            scoreDelta: 2,
          },
        ],
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt: "Confirm total spinal anesthesia as cause of collapse.",
        availableActions: [
          {
            id: "tsb-d1",
            text: "Diagnose total spinal anesthesia: loss of consciousness + apnea + hypotension + bilateral motor blockade",
            isOptimal: true,
            findings:
              "Diagnosis: Total spinal anesthesia from accidental epidural catheter in dural sac causing excessively high blockade",
            scoreDelta: 2,
          },
          {
            id: "tsb-d2",
            text: "Explain mechanism: high spinal blockade affecting phrenic nerve (C3-5) and sympathetics",
            isOptimal: true,
            findings:
              "Mechanism: Complete motor blockade with respiratory muscle paralysis; sympathetic blockade causing vasodilatation",
            scoreDelta: 2,
          },
        ],
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt: "Implement emergency resuscitation protocol for total spinal.",
        availableActions: [
          {
            id: "tsb-t1",
            text: "IMMEDIATE: Secure airway - intubation with rapid sequence induction drugs",
            isOptimal: true,
            findings: "Intubated immediately with propofol + succinylcholine; airway secured; 100% O2; waveform capnography confirmed",
            scoreDelta: 2,
          },
          {
            id: "tsb-t2",
            text: "Hyperventilate: target normocapnia (PCO2 35-40 mmHg) to reverse respiratory acidosis",
            isOptimal: true,
            findings: "Minute ventilation increased; PCO2 normalized to 38 mmHg; pH improved to 7.28",
            scoreDelta: 2,
          },
          {
            id: "tsb-t3",
            text: "Aggressive fluid resuscitation: 20 mL/kg crystalloid bolus + vasopressors",
            isOptimal: true,
            findings: "1.5 L NS bolus; noradrenaline infusion started (0.05-0.2 µg/kg/min); BP rises to 100/60",
            scoreDelta: 2,
          },
          {
            id: "tsb-t4",
            text: "Notify obstetric team: emergency LSCS decision if fetal distress develops",
            isOptimal: true,
            findings: "OB team notified; fetal monitoring shows bradycardia (110 bpm) from anesthesia; decision: emergency LSCS",
            scoreDelta: 2,
          },
          {
            id: "tsb-t5",
            text: "Proceed with emergency surgery while maintaining supportive care",
            isOptimal: true,
            findings: "LSCS proceeded under GA; baby delivered APGAR 6 at 1 min, 8 at 5 min; neonatal team managed baby",
            scoreDelta: 2,
          },
        ],
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt: "Post-resuscitation care and investigation of epidural misadventure.",
        availableActions: [
          {
            id: "tsb-f1",
            text: "Continue ICU care: sedation, ventilation, vasopressor support until hemodynamic stability",
            isOptimal: true,
            findings: "Patient admitted to ICU, sedated, ventilated; hemodynamic parameters improving; extubated at 6h post-op",
            scoreDelta: 2,
          },
          {
            id: "tsb-f2",
            text: "Investigate epidural catheter: check position on imaging, review technique",
            isOptimal: true,
            findings:
              "Lateral spine X-ray: catheter appears to be in dural sac (intrathecal position); likely from dural puncture during insertion",
            scoreDelta: 2,
          },
          {
            id: "tsb-f3",
            text: "Provide explanation to patient and family; document incident report and malpractice implications",
            isOptimal: true,
            findings:
              "Patient counseled when alert; explained anesthetic complication; incident report filed; hospital management involved",
            scoreDelta: 2,
          },
          {
            id: "tsb-f4",
            text: "Ensure both mother and baby recovery; coordinate care between obstetrics and pediatrics",
            isOptimal: true,
            findings: "Mother discharged at 5 days post-op; baby well; both followed up; mother counseled on future anesthesia risks",
            scoreDelta: 2,
          },
        ],
      },
    ],
  },

  // INDIA-SPECIFIC CASES - CONTINUING
  {
    title: "Sickle Cell Disease Crisis in Tribal Patient",
    presentingComplaint: "18-year-old tribal male from Chhattisgarh with acute bone pain and jaundice",
    caseType: "Emergency" as const,
    difficulty: "MEDIUM" as const,
    estimatedMinutes: 30,
    examTags: ["NEXT_STEP1", "NEET_PG", "Hematology", "India-specific"] as string[],
    patientProfile: {
      age: 18,
      sex: "Male",
      occupation: "Farmer",
      history: "Known SCD, frequent crises, from high-prevalence tribal belt",
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt:
          "An 18-year-old tribal male presents with acute bone pain. Assess for sickle cell disease crisis.",
        availableActions: [
          {
            id: "scd-h1",
            text: "Document known SCD diagnosis and frequency of prior crises",
            isOptimal: true,
            findings: "Diagnosed with SCD at age 5; 2-3 crises per year requiring hospitalization; from Chhattisgarh",
            scoreDelta: 2,
          },
          {
            id: "scd-h2",
            text: "Obtain details of current crisis: pain onset, triggers, associated symptoms",
            isOptimal: true,
            findings:
              "Sudden onset severe bone pain in chest, ribs, and back 8h ago; fever 38.5°C; history of cough, upper respiratory infection last week",
            scoreDelta: 2,
          },
          {
            id: "scd-h3",
            text: "Ask about jaundice, dark urine, abdominal pain (indicating hemolysis + organ involvement)",
            isOptimal: true,
            findings: "Jaundice visible on examination; patient reports dark urine; right upper quadrant pain; spleen palpable",
            scoreDelta: 2,
          },
          {
            id: "scd-h4",
            text: "Document adherence to prophylaxis and management: folic acid, penicillin, hydroxyurea",
            isOptimal: true,
            findings: "Irregular adherence to folic acid; not on penicillin prophylaxis; never prescribed hydroxyurea",
            scoreDelta: 2,
          },
          {
            id: "scd-h5",
            text: "Assess for complications: stroke history, priapism, acute chest syndrome",
            isOptimal: true,
            findings: "No prior stroke; denies priapism; now presenting with cough + chest pain (possible ACS)",
            scoreDelta: 2,
          },
        ],
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt: "Examine for severity of crisis and potential complications.",
        availableActions: [
          {
            id: "scd-e1",
            text: "Assess vital signs: fever, tachycardia, tachypnea, oxygen saturation",
            isOptimal: true,
            findings: "Temp 38.8°C, HR 130/min, RR 28/min, SpO2 92% RA (concern for ACS); BP 110/70",
            scoreDelta: 2,
          },
          {
            id: "scd-e2",
            text: "Examine for jaundice, pallor, and assess for acute chest syndrome",
            isOptimal: true,
            findings:
              "Jaundice visible on sclera/skin; severe pallor; chest pain with breathing; auscultation: crackles right base",
            scoreDelta: 2,
          },
          {
            id: "scd-e3",
            text: "Palpate for splenomegaly, hepatomegaly, and assess abdominal tenderness",
            isOptimal: true,
            findings: "Splenomegaly palpable (3 cm below costal margin); hepatomegaly (4 cm); right upper quadrant tenderness",
            scoreDelta: 2,
          },
          {
            id: "scd-e4",
            text: "Assess neurological status: stroke symptoms, confusion, focal deficits",
            isOptimal: false,
            findings: "Alert and oriented; no focal neurological deficit; good speech and comprehension",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt: "Confirm SCD and assess severity of current crisis.",
        availableActions: [
          {
            id: "scd-i1",
            text: "Obtain hemoglobin electrophoresis: confirm HbSS, measure HbS percentage",
            isOptimal: true,
            findings: "Hb electrophoresis: HbS 85%, HbF 12%, HbA2 3% - confirms homozygous sickle cell disease (HbSS)",
            scoreDelta: 2,
          },
          {
            id: "scd-i2",
            text: "Get CBC: hemoglobin, RBC count, reticulocyte count, WBC, platelets",
            isOptimal: true,
            findings:
              "Hb 7.2 g/dL (baseline ~8), RBC 2.8 million, Reticulocytes 15% (high), WBC 18,000, Platelets 400,000",
            scoreDelta: 2,
          },
          {
            id: "scd-i3",
            text: "Assess hemolysis: bilirubin (total/direct), LDH, haptoglobin",
            isOptimal: true,
            findings: "Total bilirubin 4.2 mg/dL (direct 0.8), LDH 1200 U/L, haptoglobin <10 mg/dL - active hemolysis",
            scoreDelta: 2,
          },
          {
            id: "scd-i4",
            text: "Perform chest X-ray: assess for acute chest syndrome (new infiltrates)",
            isOptimal: true,
            findings: "CXR: right lower lobe infiltrate (opacity); findings suggest acute chest syndrome",
            scoreDelta: 2,
          },
          {
            id: "scd-i5",
            text: "Check kidney function, blood culture, and arterial blood gas if ACS suspected",
            isOptimal: true,
            findings: "Creatinine 0.9 (normal); blood culture pending; ABG: pH 7.28, PCO2 32, PO2 85 (mild acidosis, hypoxia)",
            scoreDelta: 2,
          },
        ],
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt: "Confirm SCD crisis type and complications.",
        availableActions: [
          {
            id: "scd-d1",
            text: "Diagnose: Sickle cell disease (HbSS) with acute vaso-occlusive crisis + acute chest syndrome",
            isOptimal: true,
            findings:
              "Diagnosis: Acute vaso-occlusive crisis (bone pain, fever) + acute chest syndrome (new CXR infiltrate, hypoxia, tachypnea)",
            scoreDelta: 2,
          },
          {
            id: "scd-d2",
            text: "Assess for other complications: splenic infarction, gallstones, renal involvement",
            isOptimal: true,
            findings:
              "Splenic pain and tenderness noted; likely splenic infarction; ultrasound planned for gallstones (common in SCD)",
            scoreDelta: 2,
          },
        ],
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt: "Manage acute SCD crisis and ACS.",
        availableActions: [
          {
            id: "scd-t1",
            text: "Aggressive hydration: IV fluids 1-2 mL/kg/h to prevent sickling and maintain renal function",
            isOptimal: true,
            findings: "IV normal saline 150 mL/h started; urine output target >200 mL/h; avoid hypotonic fluids",
            scoreDelta: 2,
          },
          {
            id: "scd-t2",
            text: "Pain management: strong opioids (morphine or hydromorphone) for severe pain",
            isOptimal: true,
            findings: "Morphine 10 mg IV bolus, then 5-10 mg q2h PRN; patient pain score drops 8/10 to 4/10",
            scoreDelta: 2,
          },
          {
            id: "scd-t3",
            text: "Treat ACS: oxygen therapy, antibiotics (cover CAP), transfusion if needed",
            isOptimal: true,
            findings: "O2 to maintain SpO2 >94%; ceftriaxone + macrolide started; transfusion prepared; Hb target >9 g/dL",
            scoreDelta: 2,
          },
          {
            id: "scd-t4",
            text: "Folic acid supplementation and initiate hydroxyurea counseling for prevention",
            isOptimal: true,
            findings: "Folic acid 5 mg daily started; discussed hydroxyurea 10-15 mg/kg for reducing crisis frequency",
            scoreDelta: 2,
          },
        ],
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt: "Plan long-term management and NTCP screening.",
        availableActions: [
          {
            id: "scd-f1",
            text: "Arrange NTCP (National Thalassemia and Hemoglobinopathy Program) registration and counseling",
            isOptimal: true,
            findings: "Patient referred to NTCP; enrolled for free medications and monitoring under government scheme",
            scoreDelta: 2,
          },
          {
            id: "scd-f2",
            text: "Educate on crisis prevention: maintain hydration, avoid infections, manage fever",
            isOptimal: true,
            findings: "Patient counseled on trigger avoidance; pneumococcal vaccine given; penicillin V prophylaxis initiated",
            scoreDelta: 2,
          },
          {
            id: "scd-f3",
            text: "Genetic counseling for family: parents carriers, siblings may have SCD",
            isOptimal: true,
            findings: "Genetic counseling arranged; parents identified as carriers (AS); siblings to be screened",
            scoreDelta: 2,
          },
          {
            id: "scd-f4",
            text: "Plan follow-up at 1-2 weeks and refer to specialized SCD center for ongoing care",
            isOptimal: true,
            findings: "Clinic appointment 1 week; referred to tertiary center with SCD expertise for long-term management",
            scoreDelta: 2,
          },
        ],
      },
    ],
  },

  // CASE 11: FLUOROSIS
  {
    title: "Skeletal Fluorosis in Nalgonda Patient",
    presentingComplaint: "35-year-old from fluorosis-endemic Nalgonda with joint stiffness and dental mottling",
    caseType: "OPD" as const,
    difficulty: "MEDIUM" as const,
    estimatedMinutes: 30,
    examTags: ["NEXT_STEP1", "NEET_PG", "Environmental", "India-specific"] as string[],
    patientProfile: {
      age: 35,
      sex: "Female",
      occupation: "Farmer",
      history: "Lifelong resident of Nalgonda district, Telangana (high fluoride water region)",
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt:
          "A 35-year-old woman from endemic fluorosis region presents with joint symptoms. Assess exposure and timeline.",
        availableActions: [
          {
            id: "fl-h1",
            text: "Document prolonged fluoride exposure: lifelong residence in Nalgonda, water source",
            isOptimal: true,
            findings:
              "Lived in Nalgonda district for 35 years; well water from family farm (fluoride-rich geological region); no water defluoridation",
            scoreDelta: 2,
          },
          {
            id: "fl-h2",
            text: "Obtain symptom chronology: progressive joint pain, stiffness, limitation of movement",
            isOptimal: true,
            findings:
              "Joint pain started at age 28; progressive stiffness in spine, knees, hips; now significant functional limitation",
            scoreDelta: 2,
          },
          {
            id: "fl-h3",
            text: "Ask about dental complaints: enamel mottling, discoloration, tooth wear",
            isOptimal: true,
            findings: "Noted enamel mottling since childhood; teeth stained brown; significant wear from clenching",
            scoreDelta: 2,
          },
          {
            id: "fl-h4",
            text: "Assess water intake and other fluoride sources",
            isOptimal: true,
            findings: "High water intake (3-4 L daily due to hot climate); uses well water for cooking; no fluoride awareness",
            scoreDelta: 2,
          },
          {
            id: "fl-h5",
            text: "Document family members' symptoms (clustering in endemic area)",
            isOptimal: true,
            findings: "Mother and sister also have joint symptoms and dental mottling; suggestive of endemic exposure",
            scoreDelta: 2,
          },
        ],
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt: "Examine skeletal manifestations of fluorosis.",
        availableActions: [
          {
            id: "fl-e1",
            text: "Assess spinal mobility: flexion, extension, lateral bending (restriction indicates skeletal fluorosis)",
            isOptimal: true,
            findings: "Severe limitation in all spinal movements; fingertip-to-floor distance >20 cm; rigidity throughout spine",
            scoreDelta: 2,
          },
          {
            id: "fl-e2",
            text: "Examine peripheral joints: knees, hips, ankles for stiffness and deformity",
            isOptimal: true,
            findings: "Bilateral knee and hip stiffness; crepitus on movement; mild valgus deformity of knees",
            scoreDelta: 2,
          },
          {
            id: "fl-e3",
            text: "Assess dental features: enamel mottling, fluorosis scoring",
            isOptimal: true,
            findings: "Dental fluorosis: Dean's score III-IV (moderate-severe); brown discoloration; enamel pitting",
            scoreDelta: 2,
          },
          {
            id: "fl-e4",
            text: "Check for neurological complications: nerve compression, radicular pain",
            isOptimal: true,
            findings: "Mild paresthesias in lower extremities; reflexes intact; no significant neurological deficit",
            scoreDelta: 2,
          },
        ],
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt: "Confirm diagnosis with imaging and biochemistry.",
        availableActions: [
          {
            id: "fl-i1",
            text: "X-ray spine and pelvis: look for osteosclerosis, hyperostosis of ligaments",
            isOptimal: true,
            findings:
              "X-ray spine: increased bone density (osteosclerosis), vertebral margin hypertrophy, ligamentous ossification throughout spine",
            scoreDelta: 2,
          },
          {
            id: "fl-i2",
            text: "X-ray bilateral knees: check for osteosclerosis and degenerative changes",
            isOptimal: true,
            findings: "Knees: increased bone density, narrowed joint space, marginal osteophytes - early osteoarthritis",
            scoreDelta: 2,
          },
          {
            id: "fl-i3",
            text: "Test drinking water fluoride content (confirm endemic area exposure)",
            isOptimal: true,
            findings: "Water fluoride level 4.5 ppm (safe is <1 ppm); confirms high endemic fluorosis area",
            scoreDelta: 2,
          },
          {
            id: "fl-i4",
            text: "Check serum calcium, phosphate, alkaline phosphatase, vitamin D",
            isOptimal: true,
            findings: "Ca 9.2, PO4 3.5, ALP 78, Vitamin D 32 ng/mL (adequate); bone metabolism relatively preserved",
            scoreDelta: 2,
          },
          {
            id: "fl-i5",
            text: "Estimate urinary fluoride excretion (indicates chronic exposure)",
            isOptimal: true,
            findings: "24-hour urine fluoride 8.5 mg/L (high; normal <3); confirms chronic high fluoride exposure",
            scoreDelta: 2,
          },
        ],
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt: "Confirm skeletal fluorosis diagnosis and staging.",
        availableActions: [
          {
            id: "fl-d1",
            text: "Diagnose skeletal fluorosis: endemic exposure + osteosclerosis on X-ray + clinical joint findings",
            isOptimal: true,
            findings:
              "Diagnosis: Chronic skeletal fluorosis (endemic) - confirmed by geography, water fluoride, radiological osteosclerosis, clinical findings",
            scoreDelta: 2,
          },
          {
            id: "fl-d2",
            text: "Stage severity: WHO classification (mild/moderate/severe based on radiological and clinical findings)",
            isOptimal: true,
            findings:
              "WHO Stage II-III: Dental fluorosis, significant osteosclerosis, limited spinal mobility, early functional impairment",
            scoreDelta: 2,
          },
        ],
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt: "Manage skeletal fluorosis and prevent further exposure.",
        availableActions: [
          {
            id: "fl-t1",
            text: "Implement water defluoridation: home treatment (activated alumina or RO filtration) or community-level solutions",
            isOptimal: true,
            findings:
              "Patient advised to use RO water filter at home; community water defluoridation project referral (NPHF program)",
            scoreDelta: 2,
          },
          {
            id: "fl-t2",
            text: "Symptomatic treatment: NSAIDs for pain, calcium + vitamin D supplementation",
            isOptimal: true,
            findings: "Prescribed: Naproxen 500 mg BD + PPI; Calcium 1000 mg + Vitamin D 800 IU daily",
            scoreDelta: 2,
          },
          {
            id: "fl-t3",
            text: "Physiotherapy: exercise program for joint mobility and spinal flexibility",
            isOptimal: true,
            findings: "Referred to physiotherapist; prescribed gentle stretching, warm water exercise, posture correction",
            scoreDelta: 2,
          },
          {
            id: "fl-t4",
            text: "Dental rehabilitation: cosmetic concerns and functional issues",
            isOptimal: true,
            findings: "Referred to dentist; discussed bleaching and crowns; tooth wear management planned",
            scoreDelta: 2,
          },
        ],
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt: "Plan long-term management and public health actions.",
        availableActions: [
          {
            id: "fl-f1",
            text: "Arrange water quality testing and community fluoride monitoring",
            isOptimal: true,
            findings: "Water testing arranged through NPHF; community awareness program planned for Nalgonda district",
            scoreDelta: 2,
          },
          {
            id: "fl-f2",
            text: "Refer for NPHF (National Program for Health and Fluorosis) registration and support",
            isOptimal: true,
            findings: "Patient enrolled in NPHF; government support for water defluoridation; free medication availability",
            scoreDelta: 2,
          },
          {
            id: "fl-f3",
            text: "Screen family members: siblings and children for fluorosis manifestations",
            isOptimal: true,
            findings: "Family screening conducted; mother has Stage II, sister has Stage III fluorosis; children have dental fluorosis",
            scoreDelta: 2,
          },
          {
            id: "fl-f4",
            text: "Public health advocacy: engage with local administration for water defluoridation project",
            isOptimal: true,
            findings:
              "Collaborated with district health authority; fluorosis awareness campaign initiated; water supply defluoridation planned",
            scoreDelta: 2,
          },
        ],
      },
    ],
  },

  // CASE 12: RHEUMATIC HEART DISEASE IN PREGNANCY
  {
    title: "RHD with Mitral Stenosis in Pregnancy - Acute Decompensation",
    presentingComplaint: "25-year-old at 28 weeks pregnancy with known RHD, acute dyspnea",
    caseType: "Emergency" as const,
    difficulty: "MEDIUM" as const,
    estimatedMinutes: 35,
    examTags: ["NEXT_STEP1", "NEET_PG", "Cardiology", "OB-Medicine"] as string[],
    patientProfile: {
      age: 25,
      sex: "Female",
      occupation: "Homemaker",
      history: "Known RHD with mitral stenosis diagnosed 2 years ago, now pregnant at 28 weeks",
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt:
          "A 25-year-old with known RHD is now 28 weeks pregnant and presents with acute dyspnea.",
        availableActions: [
          {
            id: "rhdp-h1",
            text: "Obtain detailed cardiac history: prior cardiac symptoms, functional class, exercise tolerance",
            isOptimal: true,
            findings:
              "Prior NYHA Class I (asymptomatic with normal activity); now NYHA Class III (dyspnea on minimal activity) since pregnancy recognition",
            scoreDelta: 2,
          },
          {
            id: "rhdp-h2",
            text: "Document acute worsening: onset of dyspnea, orthopnea, paroxysmal nocturnal dyspnea",
            isOptimal: true,
            findings:
              "Dyspnea began 2 days ago; now orthopneic (3 pillows); PND last night; woke gasping for breath",
            scoreDelta: 2,
          },
          {
            id: "rhdp-h3",
            text: "Assess obstetric status: contractions, vaginal bleeding, fetal movement",
            isOptimal: true,
            findings: "No contractions; no vaginal bleeding; fetal movements good; no obstetric complications",
            scoreDelta: 2,
          },
          {
            id: "rhdp-h4",
            text: "Ask about prior cardiac interventions: balloon mitral valvotomy, anticoagulation",
            isOptimal: true,
            findings: "Never had valvotomy; on warfarin (stopped at pregnancy diagnosis, switched to LMWH); irregular INR during pregnancy",
            scoreDelta: 2,
          },
          {
            id: "rhdp-h5",
            text: "Document compliance with cardiac medications and monitoring",
            isOptimal: true,
            findings: "Irregular follow-up; missed cardiology appointments; not on beta-blockers (should have been)",
            scoreDelta: 2,
          },
        ],
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt: "Perform comprehensive cardiac and obstetric examination.",
        availableActions: [
          {
            id: "rhdp-e1",
            text: "Assess vital signs: oxygen saturation, pulse, blood pressure, respiratory rate",
            isOptimal: true,
            findings: "SpO2 88% on RA, HR 120/min, BP 110/70, RR 32/min; tachycardia and tachypnea evident",
            scoreDelta: 2,
          },
          {
            id: "rhdp-e2",
            text: "Perform cardiovascular examination: auscultate for opening snap, loud S1, mid-diastolic murmur",
            isOptimal: true,
            findings:
              "Opening snap audible; loud S1; diastolic murmur at apex (mitral stenosis hallmark); irregularly irregular pulse",
            scoreDelta: 2,
          },
          {
            id: "rhdp-e3",
            text: "Assess for signs of pulmonary edema: crackles bilaterally, orthopnea, elevated JVP",
            isOptimal: true,
            findings: "Bilateral basal crackles; JVP 5 cm above sternal angle; orthopneic; signs of acute heart failure",
            scoreDelta: 2,
          },
          {
            id: "rhdp-e4",
            text: "Check for atrial fibrillation: irregular pulse, ECG confirmation",
            isOptimal: true,
            findings: "Pulse irregularly irregular; likely atrial fibrillation; rate >120; RVR pattern",
            scoreDelta: 2,
          },
          {
            id: "rhdp-e5",
            text: "Assess obstetric status: fundal height, fetal heart rate, contractions",
            isOptimal: true,
            findings: "Fundal height 28 cm (appropriate for 28w); FHR 140/min (normal); no contractions",
            scoreDelta: 2,
          },
        ],
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt: "Obtain stat investigations for cardiac and fetal assessment.",
        availableActions: [
          {
            id: "rhdp-i1",
            text: "Electrocardiography: confirm atrial fibrillation, assess rate, look for ischemia",
            isOptimal: true,
            findings: "ECG: Atrial fibrillation with RVR (ventricular rate 140), left atrial enlargement, no ST changes",
            scoreDelta: 2,
          },
          {
            id: "rhdp-i2",
            text: "Chest X-ray: assess for pulmonary edema, cardiac silhouette size",
            isOptimal: true,
            findings: "CXR: bilateral interstitial infiltrates (Kerley B lines), enlarged cardiac silhouette, pulmonary edema evident",
            scoreDelta: 2,
          },
          {
            id: "rhdp-i3",
            text: "Echocardiography: assess mitral valve area, LA pressure, RV function, fetal wellbeing by US",
            isOptimal: true,
            findings:
              "Echo: mitral valve area 1.0 cm2 (severe MS), LA enlarged, estimated LA pressure 35 mmHg, RV strain present; fetus OK",
            scoreDelta: 2,
          },
          {
            id: "rhdp-i4",
            text: "Blood tests: troponin, BNP, electrolytes, renal function, INR",
            isOptimal: true,
            findings: "Troponin <0.01 (no myocardial injury), BNP 450, K+ 3.8, Creatinine 0.8, INR 1.2 (subtherapeutic)",
            scoreDelta: 2,
          },
          {
            id: "rhdp-i5",
            text: "CTG (cardiotocography): assess fetal wellbeing amid maternal cardiac emergency",
            isOptimal: true,
            findings: "CTG: normal baseline 140 bpm, normal variability, no decelerations; fetus appears stable",
            scoreDelta: 2,
          },
        ],
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt: "Confirm cardiac and obstetric diagnosis and risk stratification.",
        availableActions: [
          {
            id: "rhdp-d1",
            text: "Diagnose: RHD with severe mitral stenosis (MVA 1.0 cm2) in pregnancy with acute heart failure + new AFib RVR",
            isOptimal: true,
            findings:
              "Diagnosis: Decompensated RHD MS + pregnancy (28w) + acute heart failure + new AFib RVR; high-risk scenario",
            scoreDelta: 2,
          },
          {
            id: "rhdp-d2",
            text: "Assess NYHA functional class and risk of maternal mortality",
            isOptimal: true,
            findings:
              "Current NYHA Class III-IV; maternal mortality risk >10% (severe MS in pregnancy high-risk); fetal loss risk also high",
            scoreDelta: 2,
          },
        ],
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt: "Manage acute heart failure and plan for definitive cardiac intervention.",
        availableActions: [
          {
            id: "rhdp-t1",
            text: "Rate control for AFib RVR: IV beta-blocker (if not contraindicated) or calcium channel blocker",
            isOptimal: true,
            findings: "IV labetalol 20 mg bolus, then infusion; heart rate drops from 140 to 100; sinus rhythm not restored",
            scoreDelta: 2,
          },
          {
            id: "rhdp-t2",
            text: "Acute pulmonary edema management: oxygen, IV diuretics (cautious in pregnancy), sit upright",
            isOptimal: true,
            findings:
              "O2 to SpO2 >94%; IV furosemide 40 mg (cautious dose; monitor FGR risk); SpO2 improves to 94%",
            scoreDelta: 2,
          },
          {
            id: "rhdp-t3",
            text: "Anticoagulation: restart LMWH at therapeutic dose (warfarin contraindicated in pregnancy trimester 1, but OK now)",
            isOptimal: true,
            findings:
              "LMWH enoxaparin 1 mg/kg SC BD restarted; target aPTT 1.5-2x normal; monitor for bleeding",
            scoreDelta: 2,
          },
          {
            id: "rhdp-t4",
            text: "Plan for urgent balloon mitral valvotomy (BMV) if medical management fails",
            isOptimal: true,
            findings:
              "Cardiology consult: BMV planned as likely needed given severe MS and deterioration; risks of procedure vs. pregnancy discussed",
            scoreDelta: 2,
          },
          {
            id: "rhdp-t5",
            text: "Counsel on delivery planning: vaginal vs. cesarean, timing, and anesthetic considerations",
            isOptimal: true,
            findings:
              "Plan: Early delivery after fetal lung maturation (steroids offered); mode depends on cardiac stability; regional anesthesia preferred",
            scoreDelta: 2,
          },
        ],
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt: "Plan close maternal-fetal monitoring and timing of delivery.",
        availableActions: [
          {
            id: "rhdp-f1",
            text: "Perform balloon mitral valvotomy at 30-32 weeks if pulmonary edema persists",
            isOptimal: true,
            findings:
              "BMV performed at 31 weeks under local anesthesia; mitral valve area improved to 1.8 cm2; pulmonary edema resolved",
            scoreDelta: 2,
          },
          {
            id: "rhdp-f2",
            text: "Schedule delivery at 34-36 weeks: allow fetal maturation but avoid late-pregnancy decompensation",
            isOptimal: true,
            findings:
              "Plan: Vaginal delivery at 35+2 weeks with epidural anesthesia and cardiologist at bedside; neonatal team prepared",
            scoreDelta: 2,
          },
          {
            id: "rhdp-f3",
            text: "Ensure adequate anticoagulation bridging: switch from LMWH to IV UFH at delivery",
            isOptimal: true,
            findings: "At labor onset: LMWH stopped, IV UFH started; aPTT maintained 1.5-2x normal; protamine available for reversal",
            scoreDelta: 2,
          },
          {
            id: "rhdp-f4",
            text: "Post-partum: continued cardiology care, consideration of surgery (valve repair/replacement) if indicated",
            isOptimal: true,
            findings:
              "Delivered healthy baby; mother recovered well; valve replacement deferred; restart warfarin post-partum; long-term management planned",
            scoreDelta: 2,
          },
        ],
      },
    ],
  },
];
