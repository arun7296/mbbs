import type { TopicLessons } from "./content-loader";

export const ophthalmologyPart8Lessons: TopicLessons[] = [
  {
    topicCode: "OP-MOD-05-TOP-01",
    layers: [
      { layer: 1, slug: "ocular-trauma-foundation", title: "Ocular Trauma - Foundation", estimatedMinutes: 25, summary: "Types of injuries, epidemiology, hyphema, corneal abrasion, open globe injuries.", contentMd: `# Ocular Trauma - Foundation\n\n## Epidemiology\n\n**Incidence**: Leading cause unilateral blindness globally (20-50% cases <30 years)\n**Gender**: Males 2-3x higher (workplace, sports, violence)\n**Age**: Peak 20-40 years\n**Preventability**: 90% preventable with eye protection\n\n## Injury Classification\n\n**Blunt**: Motor vehicle, sports, falls, assault\n**Penetrating**: Sharp objects, glass, foreign bodies\n**Chemical**: Acid or alkali exposure\n**Thermal**: Fire, hot liquid\n**Radiation**: UV light, arc flash\n\n## Common Injuries\n\n**Subconjunctival hemorrhage**: Bright red, no borders, usually benign, self-absorbing\n**Hyphema**: Blood in anterior chamber, complications from elevated IOP\n**Corneal abrasion**: Loss of epithelium, pain, foreign body sensation\n**Iris trauma**: Iridodialysis, sphincter rupture\n**Lens subluxation/dislocation**: From zonular damage`,
        mnemonics: [
          { text: "Ocular trauma leading cause unilateral blindness <30 yrs", explanation: "Epidemiology" },
        ],
        keyPoints: [
          "Leading cause unilateral blindness globally",
          "Males 2-3x higher incidence",
          "90% preventable with eye protection",
          "Peak age 20-40 years",
        ],
        textbookRefs: [
          { book: "AK Khurana Comprehensive Ophthalmology", chapter: "15", edition: "7th" },
        ],
      },
      { layer: 2, slug: "ocular-trauma-mechanism", title: "Ocular Trauma - Mechanism", estimatedMinutes: 25, summary: "Hyphema formation, corneal epithelial healing, anterior segment injury mechanisms.", contentMd: `# Ocular Trauma - Mechanism\n\n## Hyphema Formation\n\n**Blunt trauma**: Iris/ciliary body vessels ruptured\n**Blood accumulation**: Red blood cells settle in anterior chamber (gravity)\n**IOP elevation**: RBC packing obstructs TM → elevated IOP\n**Ghost cells**: Degenerated RBCs can also obstruct TM (phacolytic-like mechanism)\n**Inflammation**: AC reaction from blood breakdown\n\n## Corneal Epithelial Healing\n\n**Normal healing**: Complete within 24-48 hours for small abrasions\n**Mechanism**: Adjacent epithelial cells migrate and multiply\n**Basement membrane**: Regenerates over weeks\n**Scarring**: If Bowman's layer damaged, vision can be affected\n\n## Anterior Segment Mechanics\n\n**Blunt force distribution**: Increases IOP transiently → can rupture tissues\n**Iris sphincter rupture**: Permanent pupil defect\n**Zonular damage**: Can lead to lens subluxation (later complication)\n**Angle damage**: Angle recession increases glaucoma risk (years later)\n**Globe rupture**: Full-thickness break in sclera (surgical emergency)`,
        keyPoints: [
          "Hyphema from vessel rupture; IOP elevation from RBC packing",
          "Ghost cells can obstruct TM like phacolytic mechanism",
          "Corneal epithelium heals quickly (24-48 hours) if superficial",
          "Angle recession increases long-term glaucoma risk",
        ],
        textbookRefs: [
          { book: "AK Khurana Comprehensive Ophthalmology", chapter: "15", edition: "7th" },
        ],
      },
      { layer: 3, slug: "ocular-trauma-clinical", title: "Ocular Trauma - Clinical", estimatedMinutes: 30, summary: "Trauma assessment, hyphema grading, corneal evaluation, open globe management.", contentMd: `# Ocular Trauma - Clinical\n\n## Trauma Assessment\n\n**History**: Mechanism, time of injury, foreign body contact, vision changes\n**Visual acuity**: Important for baseline and prognosis\n**Pupil**: Check for RAPD (suggests posterior segment involvement or optic nerve damage)\n**Anterior segment**: Examine carefully under slit lamp\n**B-scan ultrasound**: If view obscured (hemorrhage, lens opacity)\n\n## Hyphema Grading\n\n**Grade 0**: Microscopic (visible only on gonioscopy)\n**Grade 1**: <1/3 AC height\n**Grade 2**: 1/3-1/2 AC height\n**Grade 3**: 1/2-full height\n**Grade 4**: Total (8-ball hyphema - complete AC filled with blood)\n\n**Management principles**: Grade 1-2 usually medical; Grade 3-4 often require intervention\n\n## Corneal Abrasion\n\n**Presentation**: Pain, tearing, photophobia, blurred vision\n**Fluorescein staining**: Shows epithelial defect\n**Healing**: Usually complete within 24-48 hours\n**Management**: Topical antibiotics, lubricants, pain control, avoid patching (delays healing)\n\n## Open Globe (Globe Rupture)\n\n**Emergency**: Requires urgent surgical repair\n**Signs**: Deformed anterior chamber, iris/lens prolapse, vitreous hemorrhage\n**Do NOT**: Exert pressure on eye; place protective shield\n**Management**: Tetanus prophylaxis, antibiotics, urgent surgery\n**Prognosis**: Vision depends on extent of damage`,
        keyPoints: [
          "Hyphema IOP rise from RBC obstruction; grades 1-4",
          "Corneal abrasion heals 24-48 hours; avoid patching",
          "Open globe surgical emergency; do not manipulate",
          "Angle recession increases long-term glaucoma risk",
        ],
        textbookRefs: [
          { book: "AK Khurana Comprehensive Ophthalmology", chapter: "15", edition: "7th" },
        ],
      },
      { layer: 4, slug: "ocular-trauma-exam", title: "Ocular Trauma - Exam Prep", estimatedMinutes: 20, summary: "Management strategies, complications, prevention, Indian context.", contentMd: `# Ocular Trauma - Exam Prep\n\n## Key Facts\n1. Leading unilateral blindness cause <30 years\n2. Males 2-3x higher incidence\n3. 90% preventable with protection\n4. Hyphema IOP elevation from RBC packing\n5. Corneal abrasion heals 24-48 hours\n6. Open globe surgical emergency\n7. Angle recession increases glaucoma risk\n\n## Hyphema Management\n\n**Medical**: Topical steroids, IOP-lowering agents, rest, head elevation\n**Surgical**: If IOP very high (>40-50 mmHg) despite medical, or total hyphema with no improvement\n**Monitoring**: Serial IOP checks essential (rebleeding risk)\n\n## Prevention\n\n**Sports**: Proper eye protection (polycarbonate lenses)\n**Occupational**: Industrial eye protection\n**Public education**: Awareness campaigns\n**Legislation**: Seat belt/airbag laws reduce motor vehicle injuries`,
        keyPoints: [
          "Ocular trauma preventable with eye protection",
          "Hyphema management initially medical; surgery if uncontrolled IOP",
          "Corneal abrasion: topical antibiotics, lubricants, no patching",
          "Open globe: surgical emergency; do not manipulate",
          "Angle recession: monitor for long-term glaucoma risk",
        ],
        textbookRefs: [
          { book: "AK Khurana Comprehensive Ophthalmology", chapter: "15", edition: "7th" },
        ],
      },
      { layer: 5, slug: "ocular-trauma-recall", title: "Ocular Trauma - Active Recall", estimatedMinutes: 15, summary: "5-7 clinical cases on trauma assessment, hyphema management, corneal injuries.", contentMd: `# Active Recall: Ocular Trauma\n\n**Q1**: Sports injury with blunt trauma. Hyphema grade 2, IOP 35 mmHg. Management?\n> A: Grade 2 hyphema, IOP elevated but not extreme. Medical management: topical beta-blocker, CAI drops, systemic acetazolamide. Head elevation, rest, avoid strenuous activity. Monitor IOP every 2-3 days (rebleeding risk). If IOP remains <40 mmHg and clearing progresses: continue medical. Surgery (AC washout) only if uncontrolled IOP or no improvement.\n\n**Q2**: Total hyphema (grade 4), vision light perception. Immediate management?\n> A: Total AC filled with blood = surgical emergency. Cannot assess posterior segment. Immediate: Shield eye, avoid pressure, tetanus prophylaxis, broad-spectrum antibiotics. Urgent surgical AC washout to clear blood, assess posterior damage (vitreous hemorrhage, retinal damage). Prognosis depends on posterior findings.\n\n**Q3**: Corneal abrasion from contact lens. Pain, photophobia. Treatment?\n> A: Topical antibiotic (tobramycin, ciprofloxacin) 4x daily, lubricating drops hourly. Pain control (oral NSAIDs or topical anesthetic, but limit topical anesthetic use). Do NOT patch (delays healing). Most abrasions heal in 24-48 hours. Follow-up in 24 hours to confirm healing.\n\n**Q4**: Blunt ocular trauma, IOP 18 mmHg, no hyphema visible, but gonioscopy shows angle recession. Counseling?\n> A: Angle recession from ciliary body tear increases glaucoma risk (not immediately, but years later). Current IOP normal; no treatment now. Important: long-term glaucoma surveillance (periodic IOP checks, VF testing annually). Counsel on glaucoma risk; regular eye exams critical.\n\n**Q5**: Penetrating injury with glass, corneal perforation evident. Management?\n> A: Ocular emergency. Do NOT examine aggressively (risk iris/lens prolapse). Shield eye gently, avoid pressure. Urgent surgical repair (primary closure). Tetanus prophylaxis, broad-spectrum antibiotics (IV if systemic), pain control. Visual prognosis depends on extent of damage and surgical repair success.\n\n**Q6**: Hyphema grade 3, IOP 50 mmHg despite medical therapy (beta-blocker, CAI). Surgery indicated?\n> A: Yes. IOP uncontrolled despite maximal medical therapy. Surgical options: anterior chamber washout (removes RBCs, lowers IOP). Timing: if IOP sustained >40 mmHg for >5 days or if corneal edema developing (endothelial damage risk). Surgery urgent if vision threatened.\n\n**Q7**: Iris sphincter rupture from trauma. Permanent mydriasis. Counseling?\n> A: Permanent dilated pupil (sphincter muscles do not regenerate). Mostly cosmetic. Functional issues: glare (especially in bright light). Management: dark sunglasses, pupil-constricting drops (pilocarpine) if photophobia, or cosmetic pupil contact lenses. Vision usually unaffected.`,
        mnemonics: [
          { text: "Hyphema grades: 0 (micro), 1 (<1/3), 2 (1/3-1/2), 3 (1/2-full), 4 (total)", explanation: "Grading system" },
        ],
        keyPoints: [
          "Hyphema IOP elevation from RBC packing; medical 1st-line",
          "Surgery if IOP uncontrolled (>40-50 mmHg) or total hyphema",
          "Corneal abrasion: antibiotics + lubricants, no patching",
          "Open globe surgical emergency; shield and urgent repair",
          "Angle recession: monitor long-term for glaucoma risk",
        ],
        textbookRefs: [
          { book: "AK Khurana Comprehensive Ophthalmology", chapter: "15", edition: "7th" },
        ],
      },
    ],
  },
];
