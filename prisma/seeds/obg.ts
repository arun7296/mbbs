export const obgSubject = { name: "Obstetrics & Gynecology", code: "OG", phase: "PHASE_3_PART2" as const, totalHours: 400, description: "Pregnancy, childbirth, postnatal care, and diseases of female reproductive system", iconUrl: null, sortOrder: 16 };
export const obgModules = [
  { code: "OG-MOD-01", name: "Normal Pregnancy", description: "Antenatal care, physiological changes, fetal development", estimatedHours: 55, sortOrder: 1 },
  { code: "OG-MOD-02", name: "High-Risk Pregnancy", description: "Hypertension, diabetes, Rh incompatibility, APH", estimatedHours: 60, sortOrder: 2 },
  { code: "OG-MOD-03", name: "Labor & Delivery", description: "Normal labor, operative delivery, complications", estimatedHours: 65, sortOrder: 3 },
  { code: "OG-MOD-04", name: "Postpartum & Neonatal", description: "Puerperium, PPH, breastfeeding, newborn care", estimatedHours: 45, sortOrder: 4 },
  { code: "OG-MOD-05", name: "Gynecology: Benign", description: "Menstrual disorders, PCOS, fibroids, endometriosis", estimatedHours: 55, sortOrder: 5 },
  { code: "OG-MOD-06", name: "Gynecology: Malignant", description: "Cervical, ovarian, endometrial cancer, screening", estimatedHours: 45, sortOrder: 6 },
  { code: "OG-MOD-07", name: "Family Planning & Infertility", description: "Contraception, infertility workup, ART", estimatedHours: 35, sortOrder: 7 },
];
export const obgTopics: Record<string, Array<{ code: string; name: string; sortOrder: number; competencyCode: string; competencyDesc: string }>> = {
  "OG-MOD-01": [
    { code: "OG-MOD-01-TOP-01", name: "Diagnosis & Duration of Pregnancy", sortOrder: 1, competencyCode: "OG1.1", competencyDesc: "Describe diagnosis of pregnancy and estimation of gestational age" },
    { code: "OG-MOD-01-TOP-02", name: "Antenatal Care", sortOrder: 2, competencyCode: "OG1.2", competencyDesc: "Describe ANC schedule, examinations, and investigations" },
    { code: "OG-MOD-01-TOP-03", name: "Physiological Changes in Pregnancy", sortOrder: 3, competencyCode: "OG1.3", competencyDesc: "Describe physiological changes during pregnancy" },
    { code: "OG-MOD-01-TOP-04", name: "Fetal Growth & Assessment", sortOrder: 4, competencyCode: "OG1.4", competencyDesc: "Describe fetal growth, amniotic fluid, and fetal monitoring" },
    { code: "OG-MOD-01-TOP-05", name: "Nutrition in Pregnancy", sortOrder: 5, competencyCode: "OG1.5", competencyDesc: "Describe nutritional requirements, supplementation, and dietary advice during pregnancy" },
  ],
  "OG-MOD-02": [
    { code: "OG-MOD-02-TOP-01", name: "Hypertensive Disorders of Pregnancy", sortOrder: 1, competencyCode: "OG2.1", competencyDesc: "Describe pre-eclampsia, eclampsia, and HELLP syndrome" },
    { code: "OG-MOD-02-TOP-02", name: "Antepartum Hemorrhage", sortOrder: 2, competencyCode: "OG2.2", competencyDesc: "Describe placenta previa and abruptio placentae" },
    { code: "OG-MOD-02-TOP-03", name: "Gestational Diabetes", sortOrder: 3, competencyCode: "OG2.3", competencyDesc: "Describe GDM screening, management, and fetal effects" },
    { code: "OG-MOD-02-TOP-04", name: "Ectopic Pregnancy & Abortion", sortOrder: 4, competencyCode: "OG2.4", competencyDesc: "Describe ectopic pregnancy and types of abortion" },
    { code: "OG-MOD-02-TOP-05", name: "Rh Incompatibility & IUGR", sortOrder: 5, competencyCode: "OG2.5", competencyDesc: "Describe Rh isoimmunization and fetal growth restriction" },
  ],
  "OG-MOD-03": [
    { code: "OG-MOD-03-TOP-01", name: "Normal Labor & Mechanism", sortOrder: 1, competencyCode: "OG3.1", competencyDesc: "Describe stages of labor and mechanism of normal delivery" },
    { code: "OG-MOD-03-TOP-02", name: "Abnormal Labor & Dystocia", sortOrder: 2, competencyCode: "OG3.2", competencyDesc: "Describe obstructed labor, malpresentations, and CPD" },
    { code: "OG-MOD-03-TOP-03", name: "Cesarean Section", sortOrder: 3, competencyCode: "OG3.3", competencyDesc: "Describe indications and technique of LSCS" },
    { code: "OG-MOD-03-TOP-04", name: "Instrumental Delivery", sortOrder: 4, competencyCode: "OG3.4", competencyDesc: "Describe forceps and vacuum extraction" },
  ],
  "OG-MOD-04": [
    { code: "OG-MOD-04-TOP-01", name: "Normal Puerperium", sortOrder: 1, competencyCode: "OG4.1", competencyDesc: "Describe normal puerperium and puerperal complications" },
    { code: "OG-MOD-04-TOP-02", name: "Postpartum Hemorrhage", sortOrder: 2, competencyCode: "OG4.2", competencyDesc: "Describe causes and management of PPH" },
    { code: "OG-MOD-04-TOP-03", name: "Breastfeeding & Lactation", sortOrder: 3, competencyCode: "OG4.3", competencyDesc: "Describe physiology of lactation and breastfeeding support" },
    { code: "OG-MOD-04-TOP-04", name: "Neonatal Resuscitation & Care", sortOrder: 4, competencyCode: "OG4.4", competencyDesc: "Describe neonatal resuscitation steps, essential newborn care, and danger signs" },
  ],
  "OG-MOD-05": [
    { code: "OG-MOD-05-TOP-01", name: "Menstrual Disorders", sortOrder: 1, competencyCode: "OG5.1", competencyDesc: "Describe AUB, amenorrhea, and dysmenorrhea" },
    { code: "OG-MOD-05-TOP-02", name: "PCOS", sortOrder: 2, competencyCode: "OG5.2", competencyDesc: "Describe PCOS pathophysiology and management" },
    { code: "OG-MOD-05-TOP-03", name: "Uterine Fibroids", sortOrder: 3, competencyCode: "OG5.3", competencyDesc: "Describe fibroids: types, symptoms, management" },
    { code: "OG-MOD-05-TOP-04", name: "Endometriosis & Adenomyosis", sortOrder: 4, competencyCode: "OG5.4", competencyDesc: "Describe endometriosis diagnosis and management" },
    { code: "OG-MOD-05-TOP-05", name: "PID & STIs", sortOrder: 5, competencyCode: "OG5.5", competencyDesc: "Describe pelvic inflammatory disease and STIs" },
  ],
  "OG-MOD-06": [
    { code: "OG-MOD-06-TOP-01", name: "Cervical Cancer & Screening", sortOrder: 1, competencyCode: "OG6.1", competencyDesc: "Describe cervical cancer: HPV, Pap smear, staging, treatment" },
    { code: "OG-MOD-06-TOP-02", name: "Ovarian Tumors", sortOrder: 2, competencyCode: "OG6.2", competencyDesc: "Describe ovarian tumors: classification and management" },
    { code: "OG-MOD-06-TOP-03", name: "Endometrial & Gestational Trophoblastic Disease", sortOrder: 3, competencyCode: "OG6.3", competencyDesc: "Describe endometrial cancer and molar pregnancy" },
    { code: "OG-MOD-06-TOP-04", name: "Vulvar & Vaginal Pathology", sortOrder: 4, competencyCode: "OG6.4", competencyDesc: "Describe vulvar dystrophies, vulvar cancer, vaginal tumors, and premalignant conditions" },
  ],
  "OG-MOD-07": [
    { code: "OG-MOD-07-TOP-01", name: "Contraception", sortOrder: 1, competencyCode: "OG7.1", competencyDesc: "Describe contraceptive methods: barrier, hormonal, IUCD, sterilization" },
    { code: "OG-MOD-07-TOP-02", name: "Infertility", sortOrder: 2, competencyCode: "OG7.2", competencyDesc: "Describe infertility workup and ART" },
    { code: "OG-MOD-07-TOP-03", name: "MTP & Legal Aspects", sortOrder: 3, competencyCode: "OG7.3", competencyDesc: "Describe MTP Act and safe abortion practices" },
    { code: "OG-MOD-07-TOP-04", name: "Adolescent Gynecology & Menopause", sortOrder: 4, competencyCode: "OG7.4", competencyDesc: "Describe puberty disorders, adolescent gynecology, menopause, and HRT" },
  ],
};
