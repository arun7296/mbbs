export const entSubject = { name: "ENT (Otorhinolaryngology)", code: "EN", phase: "PHASE_3_PART1" as const, totalHours: 150, description: "Diseases of ear, nose, throat, head and neck surgery", iconUrl: null, sortOrder: 12 };

export const entModules = [
  { code: "EN-MOD-01", name: "Ear", description: "Anatomy, hearing, otitis media, deafness, vertigo", estimatedHours: 40, sortOrder: 1 },
  { code: "EN-MOD-02", name: "Nose & Paranasal Sinuses", description: "Rhinitis, sinusitis, epistaxis, septal deviation, tumors", estimatedHours: 30, sortOrder: 2 },
  { code: "EN-MOD-03", name: "Throat & Larynx", description: "Tonsillitis, pharyngitis, laryngitis, stridor, voice disorders", estimatedHours: 30, sortOrder: 3 },
  { code: "EN-MOD-04", name: "Head & Neck", description: "Neck masses, salivary glands, tracheostomy", estimatedHours: 25, sortOrder: 4 },
  { code: "EN-MOD-05", name: "ENT Emergencies & Procedures", description: "Foreign bodies, epistaxis management, tracheostomy, hearing aids", estimatedHours: 25, sortOrder: 5 },
];

export const entTopics: Record<string, Array<{ code: string; name: string; sortOrder: number; competencyCode: string; competencyDesc: string }>> = {
  "EN-MOD-01": [
    { code: "EN-MOD-01-TOP-01", name: "Anatomy & Physiology of Ear", sortOrder: 1, competencyCode: "EN1.1", competencyDesc: "Describe anatomy and physiology of ear" },
    { code: "EN-MOD-01-TOP-02", name: "Otitis Media: Acute & Chronic", sortOrder: 2, competencyCode: "EN2.1", competencyDesc: "Describe ASOM, CSOM, and complications" },
    { code: "EN-MOD-01-TOP-03", name: "Deafness & Hearing Tests", sortOrder: 3, competencyCode: "EN2.3", competencyDesc: "Describe types of deafness and audiometry" },
    { code: "EN-MOD-01-TOP-04", name: "Vertigo & Meniere's Disease", sortOrder: 4, competencyCode: "EN2.5", competencyDesc: "Describe causes and management of vertigo" },
    { code: "EN-MOD-01-TOP-05", name: "Otosclerosis & Ear Tumors", sortOrder: 5, competencyCode: "EN2.7", competencyDesc: "Describe otosclerosis and tumors of ear" },
  ],
  "EN-MOD-02": [
    { code: "EN-MOD-02-TOP-01", name: "Anatomy of Nose & Sinuses", sortOrder: 1, competencyCode: "EN3.1", competencyDesc: "Describe anatomy of nose and paranasal sinuses" },
    { code: "EN-MOD-02-TOP-02", name: "Rhinitis & Nasal Polyps", sortOrder: 2, competencyCode: "EN3.2", competencyDesc: "Describe allergic rhinitis and nasal polyps" },
    { code: "EN-MOD-02-TOP-03", name: "Sinusitis", sortOrder: 3, competencyCode: "EN3.3", competencyDesc: "Describe acute and chronic sinusitis" },
    { code: "EN-MOD-02-TOP-04", name: "Epistaxis", sortOrder: 4, competencyCode: "EN3.4", competencyDesc: "Describe causes and management of epistaxis" },
    { code: "EN-MOD-02-TOP-05", name: "DNS & Nasal Tumors", sortOrder: 5, competencyCode: "EN3.5", competencyDesc: "Describe deviated nasal septum and sinonasal tumors" },
  ],
  "EN-MOD-03": [
    { code: "EN-MOD-03-TOP-01", name: "Tonsillitis & Adenoids", sortOrder: 1, competencyCode: "EN4.1", competencyDesc: "Describe acute and chronic tonsillitis, adenoid hypertrophy" },
    { code: "EN-MOD-03-TOP-02", name: "Pharyngitis & Peritonsillar Abscess", sortOrder: 2, competencyCode: "EN4.2", competencyDesc: "Describe pharyngitis and peritonsillar abscess" },
    { code: "EN-MOD-03-TOP-03", name: "Laryngitis & Voice Disorders", sortOrder: 3, competencyCode: "EN4.3", competencyDesc: "Describe acute and chronic laryngitis, vocal cord palsy" },
    { code: "EN-MOD-03-TOP-04", name: "Stridor & Laryngeal Tumors", sortOrder: 4, competencyCode: "EN4.4", competencyDesc: "Describe causes of stridor and laryngeal carcinoma" },
  ],
  "EN-MOD-04": [
    { code: "EN-MOD-04-TOP-01", name: "Neck Masses & Lymphadenopathy", sortOrder: 1, competencyCode: "EN5.1", competencyDesc: "Describe approach to neck masses" },
    { code: "EN-MOD-04-TOP-02", name: "Salivary Gland Diseases", sortOrder: 2, competencyCode: "EN5.2", competencyDesc: "Describe salivary gland tumors and sialolithiasis" },
    { code: "EN-MOD-04-TOP-03", name: "Deep Neck Space Infections", sortOrder: 3, competencyCode: "EN5.3", competencyDesc: "Describe Ludwig's angina and retropharyngeal abscess" },
  ],
  "EN-MOD-05": [
    { code: "EN-MOD-05-TOP-01", name: "Foreign Bodies in ENT", sortOrder: 1, competencyCode: "EN6.1", competencyDesc: "Describe management of foreign bodies in ear, nose, throat" },
    { code: "EN-MOD-05-TOP-02", name: "Tracheostomy", sortOrder: 2, competencyCode: "EN6.2", competencyDesc: "Describe indications and technique of tracheostomy" },
    { code: "EN-MOD-05-TOP-03", name: "Hearing Aids & Cochlear Implants", sortOrder: 3, competencyCode: "EN6.3", competencyDesc: "Describe rehabilitation of hearing loss" },
    { code: "EN-MOD-05-TOP-04", name: "ENT Emergencies", sortOrder: 4, competencyCode: "EN5.4", competencyDesc: "Describe management of epistaxis, foreign body airway/ear/nose, Ludwig angina, peritonsillar abscess, and stridor" },
  ],
};
