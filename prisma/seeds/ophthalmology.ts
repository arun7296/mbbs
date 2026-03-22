export const ophthalmologySubject = { name: "Ophthalmology", code: "OP", phase: "PHASE_3_PART1" as const, totalHours: 150, description: "Diseases of the eye - refraction, glaucoma, cataract, retinal disorders", iconUrl: null, sortOrder: 13 };

export const ophthalmologyModules = [
  { code: "OP-MOD-01", name: "Optics & Refraction", description: "Refractive errors, lenses, spectacle prescription", estimatedHours: 25, sortOrder: 1 },
  { code: "OP-MOD-02", name: "Diseases of Anterior Segment", description: "Conjunctivitis, corneal ulcer, uveitis, cataract", estimatedHours: 35, sortOrder: 2 },
  { code: "OP-MOD-03", name: "Glaucoma", description: "Types, diagnosis, and management of glaucoma", estimatedHours: 20, sortOrder: 3 },
  { code: "OP-MOD-04", name: "Diseases of Posterior Segment", description: "Retinal diseases, optic nerve, neuro-ophthalmology", estimatedHours: 35, sortOrder: 4 },
  { code: "OP-MOD-05", name: "Ocular Emergencies & Community Ophthalmology", description: "Trauma, NPCB, blindness prevention", estimatedHours: 35, sortOrder: 5 },
];

export const ophthalmologyTopics: Record<string, Array<{ code: string; name: string; sortOrder: number; competencyCode: string; competencyDesc: string }>> = {
  "OP-MOD-01": [
    { code: "OP-MOD-01-TOP-01", name: "Optics & Image Formation", sortOrder: 1, competencyCode: "OP1.1", competencyDesc: "Describe optics of eye, image formation, and accommodation" },
    { code: "OP-MOD-01-TOP-02", name: "Myopia, Hypermetropia & Astigmatism", sortOrder: 2, competencyCode: "OP1.2", competencyDesc: "Describe refractive errors and their correction" },
    { code: "OP-MOD-01-TOP-03", name: "Presbyopia & Contact Lenses", sortOrder: 3, competencyCode: "OP1.3", competencyDesc: "Describe presbyopia, contact lenses, and refractive surgery" },
  ],
  "OP-MOD-02": [
    { code: "OP-MOD-02-TOP-01", name: "Conjunctivitis & Trachoma", sortOrder: 1, competencyCode: "OP2.1", competencyDesc: "Describe types of conjunctivitis and trachoma" },
    { code: "OP-MOD-02-TOP-02", name: "Corneal Ulcer & Keratitis", sortOrder: 2, competencyCode: "OP2.2", competencyDesc: "Describe corneal infections, ulcers, and management" },
    { code: "OP-MOD-02-TOP-03", name: "Uveitis", sortOrder: 3, competencyCode: "OP2.3", competencyDesc: "Describe anterior and posterior uveitis" },
    { code: "OP-MOD-02-TOP-04", name: "Cataract", sortOrder: 4, competencyCode: "OP2.4", competencyDesc: "Describe types of cataract and surgical management" },
    { code: "OP-MOD-02-TOP-05", name: "Eyelid & Lacrimal Disorders", sortOrder: 5, competencyCode: "OP2.5", competencyDesc: "Describe ptosis, chalazion, stye, and lacrimal disorders" },
  ],
  "OP-MOD-03": [
    { code: "OP-MOD-03-TOP-01", name: "Open Angle Glaucoma", sortOrder: 1, competencyCode: "OP3.1", competencyDesc: "Describe POAG: pathogenesis, diagnosis, management" },
    { code: "OP-MOD-03-TOP-02", name: "Angle Closure Glaucoma", sortOrder: 2, competencyCode: "OP3.2", competencyDesc: "Describe acute angle closure: emergency management" },
    { code: "OP-MOD-03-TOP-03", name: "Secondary & Congenital Glaucoma", sortOrder: 3, competencyCode: "OP3.3", competencyDesc: "Describe secondary glaucoma causes and congenital glaucoma" },
  ],
  "OP-MOD-04": [
    { code: "OP-MOD-04-TOP-01", name: "Diabetic Retinopathy", sortOrder: 1, competencyCode: "OP4.1", competencyDesc: "Describe diabetic retinopathy classification and management" },
    { code: "OP-MOD-04-TOP-02", name: "Retinal Detachment & ARMD", sortOrder: 2, competencyCode: "OP4.2", competencyDesc: "Describe retinal detachment and age-related macular degeneration" },
    { code: "OP-MOD-04-TOP-03", name: "Optic Nerve Diseases", sortOrder: 3, competencyCode: "OP4.3", competencyDesc: "Describe papilledema, optic neuritis, and optic atrophy" },
    { code: "OP-MOD-04-TOP-04", name: "Squint & Amblyopia", sortOrder: 4, competencyCode: "OP4.4", competencyDesc: "Describe types of squint and amblyopia management" },
  ],
  "OP-MOD-05": [
    { code: "OP-MOD-05-TOP-01", name: "Ocular Trauma", sortOrder: 1, competencyCode: "OP5.1", competencyDesc: "Describe management of ocular injuries and chemical burns" },
    { code: "OP-MOD-05-TOP-02", name: "Blindness & NPCB", sortOrder: 2, competencyCode: "OP5.2", competencyDesc: "Describe causes of blindness and National Program for Control of Blindness" },
    { code: "OP-MOD-05-TOP-03", name: "Ocular Tumors", sortOrder: 3, competencyCode: "OP5.3", competencyDesc: "Describe retinoblastoma and ocular surface tumors" },
  ],
};
