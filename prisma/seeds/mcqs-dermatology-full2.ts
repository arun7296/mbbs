export const dermatologyMcqs2 = [
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 45-year-old male presents with chronic, well-demarcated, erythematous plaques with silvery scales on elbows and knees for 10 years. On examination, a pinprick test on the lesion shows pinpoint bleeding. What is the clinical sign being elicited?",
    clinicalVignette:
      "A 45-year-old male presents with chronic, well-demarcated, erythematous plaques with silvery scales on elbows and knees. History of similar lesions for 10 years with seasonal variation.",
    options: [
      {
        id: "a",
        text: "Nikolsky sign",
        isCorrect: false,
        explanation:
          "Nikolsky sign indicates pemphigus vulgaris with intraepidermal acantholysis. This patient has psoriasis with a different pathophysiology.",
      },
      {
        id: "b",
        text: "Auspitz sign",
        isCorrect: true,
        explanation:
          "Auspitz sign in psoriasis is the appearance of pinpoint bleeding when scale is scraped away. This occurs due to thinning of the suprapapillary epidermis in psoriatic lesions.",
      },
      {
        id: "c",
        text: "Koebner phenomenon",
        isCorrect: false,
        explanation:
          "Koebner phenomenon is trauma-induced development of new lesions, not a sign elicited by examining existing lesions.",
      },
      {
        id: "d",
        text: "Candle grease sign",
        isCorrect: false,
        explanation:
          "Candle grease sign is seen in darier disease with keratotic papules, not in psoriasis.",
      },
    ],
    explanation:
      "Auspitz sign is pathognomonic for psoriasis. When the scale of a psoriatic lesion is gently scraped, pinpoint bleeding appears due to the characteristic histological finding of psoriasis: thin suprapapillary epidermis with dilated capillaries in the dermal papillae. This is different from the intraepidermal blistering of pemphigus.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "DR",
    topicCode: "DR-MOD-01-TOP-001",
    textbookRefs: [
      { book: "Rook Textbook of Dermatology", chapter: "Ch 35", edition: "9th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 35-year-old female presents with flaccid blisters on oral mucosa and flexural areas. Direct immunofluorescence shows IgG antibodies against desmoglein 3. Which type of acantholysis is occurring?",
    clinicalVignette:
      "A 35-year-old female with acute onset of painful erosions in oral cavity, neck, and axillae. Blisters are flaccid and rupture easily.",
    options: [
      {
        id: "a",
        text: "Suprabasal acantholysis with suprabasal bulla formation",
        isCorrect: true,
        explanation:
          "Pemphigus vulgaris shows suprabasal acantholysis in desmoglein 3. This results in flaccid intraepidermal blisters just above the basal layer.",
      },
      {
        id: "b",
        text: "Subcorneal acantholysis with subcorneal pustule formation",
        isCorrect: false,
        explanation:
          "Subcorneal acantholysis occurs in pemphigus foliaceus (anti-desmoglein 1), not vulgaris.",
      },
      {
        id: "c",
        text: "Subepidermal acantholysis with basement membrane separation",
        isCorrect: false,
        explanation:
          "Subepidermal separation occurs in pemphigoid, not pemphigus. In pemphigoid, IgG is against hemidesmosomal antigens, not desmogleins.",
      },
      {
        id: "d",
        text: "Partial-thickness acantholysis with mixed intra and subepidermal bullae",
        isCorrect: false,
        explanation:
          "This is not a recognized type of acantholysis. The location of acantholysis is precisely defined in pemphigus vulgaris.",
      },
    ],
    explanation:
      "Pemphigus vulgaris involves autoantibodies against desmoglein 3, which is present in the lower layers of the epidermis. This causes suprabasal acantholysis, resulting in flaccid intraepidermal blisters. The flaccid nature is due to the blisters being within the epidermis without a solid roof. DIF showing IgG deposits confirms autoimmune origin.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "DR",
    topicCode: "DR-MOD-01-TOP-002",
    textbookRefs: [
      { book: "Rook Textbook of Dermatology", chapter: "Ch 24", edition: "9th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 40-year-old male presents with tense blisters on lower abdomen and inner thighs, along with oral mucosa sparing. Direct immunofluorescence shows IgG and IgM against basement membrane zone. What is the mechanism of blister formation?",
    clinicalVignette:
      "A 40-year-old male with recent-onset tense, firm blisters on skin with normal oral mucosa. Strong family history of autoimmune disorders.",
    options: [
      {
        id: "a",
        text: "Intraepidermal acantholysis due to desmosomal disruption",
        isCorrect: false,
        explanation:
          "Acantholysis occurs in pemphigus, not pemphigoid. Pemphigoid involves basement membrane disruption, not desmosomal dysfunction.",
      },
      {
        id: "b",
        text: "Subepidermal blister formation due to anti-BP180 and BP230 antibodies",
        isCorrect: true,
        explanation:
          "Bullous pemphigoid involves IgG antibodies against hemidesmosomal antigens (BP180 and BP230). This causes subepidermal blister formation with complement activation and basement membrane disruption.",
      },
      {
        id: "c",
        text: "Epidermal-dermal interface disruption with inflammatory infiltrate",
        isCorrect: false,
        explanation:
          "While this is true in pemphigoid, the more precise answer relates to the specific antigen-antibody mechanism.",
      },
      {
        id: "d",
        text: "Increased collagenase activity causing dermal breakdown",
        isCorrect: false,
        explanation:
          "Collagenase activity is not the primary mechanism in pemphigoid. The mechanism is immune-mediated via anti-BP antibodies.",
      },
    ],
    explanation:
      "Bullous pemphigoid is characterized by autoimmune antibodies (IgG and IgM) against hemidesmosomal proteins BP180 (type XVII collagen) and BP230. These are located at the basement membrane zone. Antibody binding triggers complement activation and neutrophil infiltration, leading to proteolytic enzyme release that disrupts the basement membrane, resulting in subepidermal blister formation. The blisters are tense (not flaccid) because they have the entire epidermis as their roof.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "DR",
    topicCode: "DR-MOD-01-TOP-003",
    textbookRefs: [
      { book: "Rook Textbook of Dermatology", chapter: "Ch 25", edition: "9th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 50-year-old male presents with symmetrical, hypopigmented macules and patches over face, trunk, and extremities for 3 years. Wood's lamp examination shows increased contrast of lesions. Skin biopsy shows complete absence of melanocytes. What is the expected immunological finding?",
    clinicalVignette:
      "A 50-year-old male with progressive depigmented patches, completely loss of skin pigmentation, no history of photosensitivity or previous inflammation.",
    options: [
      {
        id: "a",
        text: "Anti-peroxidase and anti-catalase antibodies",
        isCorrect: true,
        explanation:
          "Vitiligo is associated with anti-melanocyte and anti-peroxidase antibodies. These autoimmune antibodies lead to melanocyte destruction and absence on histology.",
      },
      {
        id: "b",
        text: "IgG anti-desmoglein 1 antibodies",
        isCorrect: false,
        explanation:
          "Anti-desmoglein 1 antibodies are seen in pemphigus foliaceus, not vitiligo.",
      },
      {
        id: "c",
        text: "IgG anti-BP180 antibodies",
        isCorrect: false,
        explanation:
          "Anti-BP180 antibodies are characteristic of bullous pemphigoid, not vitiligo.",
      },
      {
        id: "d",
        text: "Anti-TPO and anti-thyroglobulin antibodies",
        isCorrect: false,
        explanation:
          "While thyroid antibodies can coexist with vitiligo, they are not specific to vitiligo itself.",
      },
    ],
    explanation:
      "Vitiligo is an autoimmune disorder characterized by anti-melanocyte cellular and humoral immunity. The presence of anti-peroxidase, anti-catalase, and anti-tyrosinase antibodies has been demonstrated. The complete absence of melanocytes on histology confirms immune-mediated destruction. Vitiligo is associated with other autoimmune conditions like thyroid disease, but the specific autoantibodies target melanocyte antigens.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "DR",
    topicCode: "DR-MOD-02-TOP-004",
    textbookRefs: [
      { book: "Rook Textbook of Dermatology", chapter: "Ch 44", edition: "9th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 28-year-old female presents with acute-onset severe burns over face and genitals following drug use. Histopathology shows full-thickness epidermal necrosis with minimal dermal involvement. What is the most likely diagnosis?",
    clinicalVignette:
      "A 28-year-old female with severe mucocutaneous involvement and systemic symptoms (fever, malaise) post-drug exposure. Blisters present with target lesions.",
    options: [
      {
        id: "a",
        text: "Stevens-Johnson Syndrome (SJS)",
        isCorrect: true,
        explanation:
          "SJS presents with <10% body surface involvement with target lesions and severe mucocutaneous involvement. Histology shows full-thickness epidermal necrosis with minimal inflammation.",
      },
      {
        id: "b",
        text: "Toxic Epidermal Necrolysis (TEN)",
        isCorrect: false,
        explanation:
          "While this patient has drug exposure, TEN involves >30% BSA. This patient's presentation is more consistent with SJS.",
      },
      {
        id: "c",
        text: "Erythema Multiforme Major",
        isCorrect: false,
        explanation:
          "EM major has vesicles and erosions but not the severe full-thickness epidermal necrosis seen here. EM is typically triggered by infections (HSV), not drugs.",
      },
      {
        id: "d",
        text: "Acute Generalized Exanthematous Pustulosis (AGEP)",
        isCorrect: false,
        explanation:
          "AGEP presents with pustules, not target lesions and severe epidermal necrosis.",
      },
    ],
    explanation:
      "SJS and TEN are severe cutaneous adverse reactions (SCARs) with different severity levels. SJS involves <10% BSA, TEN involves >30% BSA, and SJS/TEN overlap is 10-30% BSA. The histopathological hallmark is full-thickness epidermal necrosis with apoptotic keratinocytes. Common drug triggers include antibiotics, NSAIDs, and anticonvulsants. The clinical presentation with target lesions and mucocutaneous involvement in <10% BSA confirms SJS.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "DR",
    topicCode: "DR-MOD-03-TOP-005",
    textbookRefs: [
      { book: "Rook Textbook of Dermatology", chapter: "Ch 27", edition: "9th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 32-year-old male presents with well-demarcated, hyperkeratotic plaques with silvery scales on extensor surfaces and scalp. He gives history of trauma to left arm 2 months ago. New lesions developed at the site of trauma. Which pathophysiological mechanism explains the development of new lesions?",
    clinicalVignette:
      "A 32-year-old male with psoriasis presenting with new lesions developing at trauma sites, consistent with his baseline psoriatic plaques.",
    options: [
      {
        id: "a",
        text: "Increased angiogenesis and vascularity at trauma site",
        isCorrect: false,
        explanation:
          "While angiogenesis is involved in psoriasis pathophysiology, it does not explain trauma-induced lesion development.",
      },
      {
        id: "b",
        text: "Activation of local T cells and keratinocytes by trauma-induced inflammation",
        isCorrect: true,
        explanation:
          "The Koebner phenomenon in psoriasis occurs due to local immune activation. Trauma causes local release of cytokines (TNF-alpha, IL-17) which activates T cells and keratinocytes, triggering psoriasis development at the trauma site.",
      },
      {
        id: "c",
        text: "Increased sebum production at trauma site",
        isCorrect: false,
        explanation:
          "Sebaceous gland activity is not related to Koebner phenomenon in psoriasis.",
      },
      {
        id: "d",
        text: "Direct infection of trauma site leading to immune response",
        isCorrect: false,
        explanation:
          "Infection is not necessary for Koebner phenomenon. The phenomenon occurs purely due to trauma-induced local immune activation.",
      },
    ],
    explanation:
      "The Koebner phenomenon (true isomorphic response) is characteristic of psoriasis where new lesions develop at sites of trauma. The mechanism involves trauma-induced local release of cytokines (TNF-alpha, IL-17, IL-23) which activate resident T cells and keratinocytes, triggering the psoriatic inflammatory cascade. This occurs in genetically predisposed individuals. It can appear within days to weeks after trauma and is a clinical feature of active, unstable psoriasis.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "DR",
    topicCode: "DR-MOD-01-TOP-006",
    textbookRefs: [
      { book: "Rook Textbook of Dermatology", chapter: "Ch 35", edition: "9th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 30-year-old male presents with circular lesion on arm with central healing and raised, scaly borders. KOH mount shows branching septate hyphae. What is the most common causative organism in India?",
    clinicalVignette:
      "A 30-year-old male with a circular lesion on arm, central clearing, raised erythematous border with scaling.",
    options: [
      {
        id: "a",
        text: "Trichophyton rubrum",
        isCorrect: true,
        explanation:
          "T. rubrum is the most common dermatophyte causing tinea corporis in India and worldwide. It shows branching septate hyphae and is anthropophilic.",
      },
      {
        id: "b",
        text: "Microsporum audouinii",
        isCorrect: false,
        explanation:
          "M. audouinii is now rare globally and not commonly seen in India.",
      },
      {
        id: "c",
        text: "Trichophyton schoenleini",
        isCorrect: false,
        explanation:
          "T. schoenleini causes favus, which presents with scutula (cup-shaped crusts), not simple tinea corporis.",
      },
      {
        id: "d",
        text: "Candida albicans",
        isCorrect: false,
        explanation:
          "Candida causes yeast infection with pseudohyphae and budding forms, not true hyphae. Also, it typically occurs in intertriginous areas.",
      },
    ],
    explanation:
      "T. rubrum is the most common anthropophilic dermatophyte in India, causing tinea corporis, tinea pedis, and tinea unguium. KOH mount shows septate, branching hyphae. T. rubrum is keratinophilic and can cause chronic, relapsing infections. The classic clinical presentation of tinea corporis is the ring-like lesion with central clearing and raised, scaly borders.",
    difficulty: "EASY" as const,
    bloomsLevel: "Recall",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "DR",
    topicCode: "DR-MOD-04-TOP-007",
    textbookRefs: [
      { book: "Rook Textbook of Dermatology", chapter: "Ch 30", edition: "9th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 25-year-old female presents with intense itching, especially at night, over finger webs, axillae, and groin. Examination shows linear burrows with small vesicles. What is the expected finding on mineral oil preparation?",
    clinicalVignette:
      "A 25-year-old female with intense nocturnal itching, burrows visible on skin examination. Family members also affected.",
    options: [
      {
        id: "a",
        text: "Mites with 8 legs and fecal pellets visible",
        isCorrect: true,
        explanation:
          "Sarcoptes scabiei is an acarid (8-legged mite) that can be identified on mineral oil preparation. The mite, eggs, and fecal pellets are visible under microscopy.",
      },
      {
        id: "b",
        text: "Branching septate hyphae",
        isCorrect: false,
        explanation:
          "Septate hyphae are seen in dermatophyte infections, not scabies.",
      },
      {
        id: "c",
        text: "Yeast with pseudohyphae",
        isCorrect: false,
        explanation:
          "Yeast forms are seen in candidiasis, not scabies.",
      },
      {
        id: "d",
        text: "Cocci and bacilli",
        isCorrect: false,
        explanation:
          "Bacteria are not visualized in scabies. Scabies is a parasitic infestation, not bacterial infection.",
      },
    ],
    explanation:
      "Scabies is caused by the mite Sarcoptes scabiei hominis. Diagnosis is confirmed by microscopic identification of the mite, eggs, or fecal pellets from mineral oil preparation of burrows. The characteristic burrows appear as linear or S-shaped tracts, typically found on finger webs, axillae, groin, and buttocks. Intense nocturnal itching is pathognomonic. Secondary bacterial infection can occur due to scratching.",
    difficulty: "EASY" as const,
    bloomsLevel: "Recall",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "DR",
    topicCode: "DR-MOD-05-TOP-008",
    textbookRefs: [
      { book: "Rook Textbook of Dermatology", chapter: "Ch 32", edition: "9th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 38-year-old male presents with sharply demarcated, erythematous plaques with fine scaling on extensor surfaces. He mentions the lesions appeared after a severe sore throat 2 weeks ago. What is the most likely immunological mechanism?",
    clinicalVignette:
      "A 38-year-old male with acute-onset plaques on elbows and knees following streptococcal infection. No prior psoriasis history.",
    options: [
      {
        id: "a",
        text: "Molecular mimicry between streptococcal antigens and keratinocyte antigens",
        isCorrect: true,
        explanation:
          "Streptococcal infection can trigger guttate psoriasis through molecular mimicry, where streptococcal antigens cross-react with keratinocyte surface antigens, activating T cells that recognize both streptococcal and skin antigens.",
      },
      {
        id: "b",
        text: "Superantigen activation of T cells by streptococcal exotoxins",
        isCorrect: false,
        explanation:
          "While superantigens do activate T cells, this is not the primary mechanism in psoriasis pathogenesis.",
      },
      {
        id: "c",
        text: "Direct streptococcal invasion of skin",
        isCorrect: false,
        explanation:
          "Streptococci do not directly invade skin to cause psoriasis. The mechanism is immune-mediated, not infectious.",
      },
      {
        id: "d",
        text: "Increased complement activation by streptococcal antigens",
        isCorrect: false,
        explanation:
          "Complement activation is a downstream effect, not the primary mechanism triggering psoriasis.",
      },
    ],
    explanation:
      "Guttate psoriasis is often triggered by group A streptococcal infection (pharyngitis). The proposed mechanism is molecular mimicry: streptococcal M protein shares epitopes with keratin-derived peptides. This cross-reactivity causes T cell activation against both streptococcal antigens and skin-associated antigens. The resulting immune response manifests as acute guttate (raindrop-like) psoriatic lesions. About 10% of guttate psoriasis progresses to chronic plaque psoriasis.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "DR",
    topicCode: "DR-MOD-01-TOP-009",
    textbookRefs: [
      { book: "Rook Textbook of Dermatology", chapter: "Ch 35", edition: "9th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 42-year-old female presents with lichenified, intensely pruritic plaques on hands, neck, and flexural areas. Serum IgE is markedly elevated. She reports disease flares with emotional stress and allergen exposure. What is the primary pathological mechanism driving chronicity?",
    clinicalVignette:
      "A 42-year-old female with chronic eczematous plaques, severe xerosis, and evidence of atopy. High serum IgE and positive allergy testing.",
    options: [
      {
        id: "a",
        text: "Th1-mediated inflammation with IFN-gamma production",
        isCorrect: false,
        explanation:
          "Acute atopic eczema is Th2-mediated. While Th1 involvement increases in chronic disease, Th2 remains the primary driver in most cases.",
      },
      {
        id: "b",
        text: "Th2-mediated inflammation with IL-4, IL-5, and IL-13 production causing IgE elevation",
        isCorrect: true,
        explanation:
          "Atopic dermatitis is primarily a Th2-mediated disease. IL-4 promotes IgE class switching, IL-5 recruits eosinophils, and IL-13 increases skin homing of T cells and impairs skin barrier function.",
      },
      {
        id: "c",
        text: "Th17-mediated neutrophilic inflammation with IL-17 production",
        isCorrect: false,
        explanation:
          "Th17 involvement occurs in some cases, but Th2 is the primary mechanism in classic atopic dermatitis.",
      },
      {
        id: "d",
        text: "Innate lymphoid cell activation with direct mast cell degranulation",
        isCorrect: false,
        explanation:
          "While innate responses contribute, adaptive Th2 immunity is the primary pathogenic mechanism.",
      },
    ],
    explanation:
      "Atopic dermatitis is a Th2-dominant inflammatory disease. IL-4 and IL-13 are key cytokines that promote IgE production, enhance skin homing of T cells, and impair epidermal barrier function by reducing filaggrin and ceramides. IL-5 recruits eosinophils. The elevated serum IgE reflects systemic Th2 activation. Impaired skin barrier function from filaggrin mutations and abnormal ceramides perpetuates allergen entry and chronic inflammation. Stress and allergen exposure trigger flares through neuroimmune mechanisms.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "DR",
    topicCode: "DR-MOD-06-TOP-010",
    textbookRefs: [
      { book: "Rook Textbook of Dermatology", chapter: "Ch 20", edition: "9th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 55-year-old male presents with symmetric, erythematous patches and plaques with silvery scales on elbows, knees, and scalp. He also has joint pain in both knees and elbows. Nail examination shows pitting. What is the most likely diagnosis?",
    clinicalVignette:
      "A 55-year-old male with chronic skin lesions, joint pain, and nail pitting. History of similar lesions for 15 years.",
    options: [
      {
        id: "a",
        text: "Rheumatoid arthritis with secondary skin involvement",
        isCorrect: false,
        explanation:
          "RA typically presents with symmetric small joint involvement (hands, feet) with morning stiffness. Nail pitting is not typical of RA.",
      },
      {
        id: "b",
        text: "Psoriasis with psoriatic arthritis",
        isCorrect: true,
        explanation:
          "Psoriasis presents with plaques and psoriatic arthritis affects larger joints (knees, elbows). Nail pitting is a pathognomonic sign of psoriasis. The combination of skin, joint, and nail involvement is characteristic of psoriatic disease.",
      },
      {
        id: "c",
        text: "Systemic lupus erythematosus",
        isCorrect: false,
        explanation:
          "SLE typically presents with malar rash, photosensitivity, and systemic features, not plaques with scale.",
      },
      {
        id: "d",
        text: "Lichen planus with secondary arthritis",
        isCorrect: false,
        explanation:
          "Lichen planus presents with violaceous papules, not erythematous plaques with silvery scale.",
      },
    ],
    explanation:
      "Psoriasis is a chronic inflammatory disorder affecting skin, joints, and nails. The classic presentation includes erythematous plaques with silvery scale, particularly on extensor surfaces. Nail pitting is pathognomonic for psoriasis. Psoriatic arthritis occurs in about 10-30% of psoriasis patients and affects large joints (knees, elbows, hips). Nail involvement and joint pain together strongly suggest psoriatic disease rather than other systemic conditions.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "DR",
    topicCode: "DR-MOD-01-TOP-011",
    textbookRefs: [
      { book: "Rook Textbook of Dermatology", chapter: "Ch 35", edition: "9th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 28-year-old female with systemic lupus erythematosus develops acute onset of widespread, painful erosions and ulcers in the oral cavity. Histopathology shows intraepidermal acantholysis. What is the most likely diagnosis?",
    clinicalVignette:
      "A 28-year-old female with known SLE presenting with painful oral ulcers and erosions. Direct immunofluorescence pending.",
    options: [
      {
        id: "a",
        text: "Aphthous ulcers from SLE",
        isCorrect: false,
        explanation:
          "Aphthous ulcers in SLE are not associated with acantholysis. The histology shows superficial ulceration without blister formation.",
      },
      {
        id: "b",
        text: "Pemphigus vulgaris coexisting with SLE",
        isCorrect: true,
        explanation:
          "While rare, pemphigus vulgaris can coexist with SLE. Intraepidermal acantholysis is the hallmark histological finding. Immunological factors triggering both conditions can occur simultaneously, particularly in genetically predisposed patients.",
      },
      {
        id: "c",
        text: "Lichenoid reaction from SLE",
        isCorrect: false,
        explanation:
          "Lichenoid reactions show lymphocytic infiltration at the interface, not acantholysis.",
      },
      {
        id: "d",
        text: "Erythema multiforme",
        isCorrect: false,
        explanation:
          "EM shows superficial blistering and necrotic keratinocytes, not true acantholysis.",
      },
    ],
    explanation:
      "The combination of SLE with pemphigus is rare but documented. The key diagnostic finding is intraepidermal acantholysis on histology, indicating pemphigus. DIF would show IgG deposition on keratinocyte surfaces (intercellular pattern). While SLE can cause oral ulcers through lupus-specific mechanisms, the presence of true acantholysis indicates concurrent pemphigus. This overlap syndrome occurs due to shared immunological dysfunction in both conditions.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "DR",
    topicCode: "DR-MOD-01-TOP-012",
    textbookRefs: [
      { book: "Rook Textbook of Dermatology", chapter: "Ch 24", edition: "9th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 32-year-old male presents with hypopigmented macules and patches with loss of sensation over face, arms, and legs. Slit-skin smear shows acid-fast bacilli. Lepromin test is negative. What is the classification according to Ridley-Jopling?",
    clinicalVignette:
      "A 32-year-old male from endemic area with multiple hypopigmented lesions and sensory loss. Smear positive for acid-fast bacilli.",
    options: [
      {
        id: "a",
        text: "Tuberculoid leprosy",
        isCorrect: false,
        explanation:
          "Tuberculoid leprosy has positive lepromin test, few lesions, and strong cell-mediated immunity. This patient has negative lepromin test.",
      },
      {
        id: "b",
        text: "Lepromatous leprosy",
        isCorrect: true,
        explanation:
          "Lepromatous leprosy presents with negative lepromin test, numerous lesions, and high bacterial load (smear positive). The patient has poor cell-mediated immunity and hypopigmented macules.",
      },
      {
        id: "c",
        text: "Borderline tuberculoid leprosy",
        isCorrect: false,
        explanation:
          "Borderline tuberculoid is unstable and shows features intermediate between tuberculoid and lepromatous, with borderline positive lepromin test.",
      },
      {
        id: "d",
        text: "Indeterminate leprosy",
        isCorrect: false,
        explanation:
          "Indeterminate leprosy is the earliest form with few lesions and is not yet clinically or histologically defined.",
      },
    ],
    explanation:
      "Ridley-Jopling classification divides leprosy into 5 types based on clinical, histological, and immunological features. Lepromatous leprosy (LL) presents with negative lepromin test (absent cell-mediated immunity), numerous lesions, high bacterial load (smear positive), and mainly hypopigmented macules. The absence of sensory loss in macules is common in LL. Lepromatous leprosy has poor prognosis and requires prolonged treatment.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "Recall",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "DR",
    topicCode: "DR-MOD-07-TOP-013",
    textbookRefs: [
      { book: "Rook Textbook of Dermatology", chapter: "Ch 33", edition: "9th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 45-year-old female presents with sudden-onset hypopigmented patch on face with sharp borders and complete loss of sensation. Slit-skin smear is negative. Lepromin test is positive. What is the most likely classification?",
    clinicalVignette:
      "A 45-year-old female with solitary hypopigmented patch with clear demarcation, loss of sensation in the patch, and negative slit-skin smear.",
    options: [
      {
        id: "a",
        text: "Lepromatous leprosy",
        isCorrect: false,
        explanation:
          "Lepromatous leprosy has positive slit-skin smear, negative lepromin test, and multiple lesions. This patient has negative smear and positive lepromin test.",
      },
      {
        id: "b",
        text: "Tuberculoid leprosy",
        isCorrect: true,
        explanation:
          "Tuberculoid leprosy presents with positive lepromin test (strong cell-mediated immunity), few well-defined lesions, negative smear, and loss of sensation due to nerve involvement. This is the most stable form.",
      },
      {
        id: "c",
        text: "Borderline lepromatous leprosy",
        isCorrect: false,
        explanation:
          "Borderline lepromatous shows low-positive smear and many lesions. This patient has negative smear.",
      },
      {
        id: "d",
        text: "Indeterminate leprosy",
        isCorrect: false,
        explanation:
          "Indeterminate leprosy has ambiguous features and usually presents earlier. Positive lepromin test indicates tuberculoid end of spectrum.",
      },
    ],
    explanation:
      "Tuberculoid leprosy (TT) represents the tuberculoid end of the Ridley-Jopling spectrum. It is characterized by strong cell-mediated immunity (positive lepromin test), few well-demarcated lesions, negative bacteriology, and significant sensory loss. Nerve involvement is prominent and can lead to visible thickening of peripheral nerves. The lesions have clear, sharp borders. TT is the most stable form with excellent prognosis if treated.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "DR",
    topicCode: "DR-MOD-07-TOP-014",
    textbookRefs: [
      { book: "Rook Textbook of Dermatology", chapter: "Ch 33", edition: "9th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 50-year-old male presents with progressive whitening and loss of elasticity of skin over face and hands. Biopsy shows dense fibrosis of dermis and replacement of subcutaneous tissue with collagen. What is the most likely diagnosis?",
    clinicalVignette:
      "A 50-year-old male with tightening of facial skin, loss of normal skin elasticity, and visible thickening of dermis.",
    options: [
      {
        id: "a",
        text: "Sclerodermoid form of leprosy",
        isCorrect: true,
        explanation:
          "Sclerodermoid leprosy is a rare form characterized by fibrous induration and sclerosis of the skin with dermal and subcutaneous fibrosis. It represents severe fibrotic response in leprosy.",
      },
      {
        id: "b",
        text: "Systemic sclerosis",
        isCorrect: false,
        explanation:
          "While systemic sclerosis shows similar fibrosis, clinical context and leprosy association suggests sclerodermoid leprosy.",
      },
      {
        id: "c",
        text: "Morphea",
        isCorrect: false,
        explanation:
          "Morphea is localized scleroderma presenting with induration but not associated with hypopigmentation or leprosy.",
      },
      {
        id: "d",
        text: "Nephrogenic systemic fibrosis",
        isCorrect: false,
        explanation:
          "Nephrogenic fibrosis is gadolinium-related and presents with different clinical features.",
      },
    ],
    explanation:
      "Sclerodermoid leprosy is a rare form characterized by fibrous induration of skin with marked dermal and subcutaneous fibrosis. It appears as areas of whitening, hardening, and loss of elasticity. Histology shows dense fibrosis of dermis and replacement of subcutaneous tissue. This form can occur at any point in the Ridley-Jopling spectrum and represents a severe fibrotic host response to Mycobacterium leprae.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "DR",
    topicCode: "DR-MOD-07-TOP-015",
    textbookRefs: [
      { book: "Rook Textbook of Dermatology", chapter: "Ch 33", edition: "9th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 26-year-old female presents with sudden-onset flaccid blisters on lower abdomen and inner thighs. Nikolsky sign is positive (intraepidermal). Histology shows suprabasal acantholysis. What is the most appropriate next step?",
    clinicalVignette:
      "A 26-year-old female with acute-onset flaccid blisters and positive intraepidermal Nikolsky sign. Suspecting pemphigus vulgaris.",
    options: [
      {
        id: "a",
        text: "Start systemic corticosteroids and observe",
        isCorrect: false,
        explanation:
          "While corticosteroids will be needed, antibodies must be confirmed first to guide treatment duration and intensity.",
      },
      {
        id: "b",
        text: "Perform direct immunofluorescence to confirm antibodies against desmogleins",
        isCorrect: true,
        explanation:
          "DIF is essential to confirm pemphigus and differentiate between types. IgG against desmogleins (anti-desmoglein 3 in PV) confirms diagnosis. Serum antibody titers can also guide treatment.",
      },
      {
        id: "c",
        text: "Prescribe topical antifungal creams",
        isCorrect: false,
        explanation:
          "Pemphigus is autoimmune, not fungal. Antifungal treatment is inappropriate.",
      },
      {
        id: "d",
        text: "Perform Wood's lamp examination",
        isCorrect: false,
        explanation:
          "Wood's lamp is used for pigmentary disorders, not pemphigus diagnosis.",
      },
    ],
    explanation:
      "Pemphigus vulgaris diagnosis requires clinicopathological confirmation. Clinical presentation of flaccid blisters with positive intraepidermal Nikolsky sign and histological suprabasal acantholysis are suggestive. Direct immunofluorescence showing IgG antibodies against desmoglein 3 (and sometimes desmoglein 1) confirms diagnosis. Indirect immunofluorescence can also demonstrate circulating antibodies. Serum anti-desmoglein titers correlate with disease activity and help monitor treatment response.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "DR",
    topicCode: "DR-MOD-01-TOP-016",
    textbookRefs: [
      { book: "Rook Textbook of Dermatology", chapter: "Ch 24", edition: "9th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 60-year-old female presents with tense bullae on flexural areas and lower abdomen with sparing of oral mucosa. Histology shows subepidermal bulla with eosinophilic infiltrate. DIF shows linear IgG at basement membrane. What is the next best treatment approach?",
    clinicalVignette:
      "A 60-year-old female with tense blisters, DIF confirming bullous pemphigoid. Now requiring treatment decisions.",
    options: [
      {
        id: "a",
        text: "Systemic corticosteroids alone at high doses",
        isCorrect: false,
        explanation:
          "While steroids are used, first-line treatment often includes topical therapy or steroid-sparing agents in less severe disease.",
      },
      {
        id: "b",
        text: "Topical corticosteroids with adjuvant azathioprine or mycophenolate mofetil",
        isCorrect: true,
        explanation:
          "In localized or mild bullous pemphigoid, potent topical steroids can control disease. For moderate to severe disease, systemic steroids combined with steroid-sparing agents (azathioprine, MMF) reduce long-term steroid dependence.",
      },
      {
        id: "c",
        text: "Antihistamines and antibiotics only",
        isCorrect: false,
        explanation:
          "These are adjunctive therapies. Immunosuppression is required to control the autoimmune process.",
      },
      {
        id: "d",
        text: "Immediate plasmapheresis",
        isCorrect: false,
        explanation:
          "Plasmapheresis is reserved for severe, refractory cases, not first-line treatment.",
      },
    ],
    explanation:
      "Bullous pemphigoid treatment depends on severity. Mild/localized disease (few blisters, limited area) can be managed with potent topical corticosteroids alone. Moderate to severe disease requires systemic corticosteroids (0.5-1 mg/kg/day prednisolone initially) combined with steroid-sparing agents like azathioprine, mycophenolate mofetil, or more recently, dupilumab. Antihistamines help control pruritus. Second-line agents include rituximab or other biologics for severe, steroid-resistant disease.",
    difficulty: "HARD" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "DR",
    topicCode: "DR-MOD-01-TOP-017",
    textbookRefs: [
      { book: "Rook Textbook of Dermatology", chapter: "Ch 25", edition: "9th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 35-year-old male presents with multiple ulcerated nodules on face and ears that do not heal. Biopsy shows caseating granuloma. What is the most likely diagnosis?",
    clinicalVignette:
      "A 35-year-old male with ulcerated nodules on face and ears, systemic symptoms (fever, weight loss), caseating granuloma on biopsy.",
    options: [
      {
        id: "a",
        text: "Lepromatous leprosy",
        isCorrect: false,
        explanation:
          "Lepromatous leprosy shows numerous bacilli and non-caseating granulomas, not caseating granulomas.",
      },
      {
        id: "b",
        text: "Cutaneous tuberculosis",
        isCorrect: true,
        explanation:
          "Cutaneous TB, especially scrofuloderma or lupus vulgaris, presents with ulcerated lesions and caseating granulomas. The facial and ear involvement fits with lupus vulgaris pattern.",
      },
      {
        id: "c",
        text: "Sarcoidosis",
        isCorrect: false,
        explanation:
          "Sarcoidosis shows non-caseating granulomas, not caseating. Also, does not typically present with ulcerated nodules.",
      },
      {
        id: "d",
        text: "Sporotrichosis",
        isCorrect: false,
        explanation:
          "Sporotrichosis shows lymphocytic inflammation with occasional yeast, not caseating granulomas.",
      },
    ],
    explanation:
      "Cutaneous tuberculosis presents with several patterns. Lupus vulgaris is the most common in India and presents with slowly progressive, painless ulcerated plaques and nodules, especially on face and ears. Histology shows caseating granulomas with acid-fast bacilli. Scrofuloderma presents with sinuses and ulcerated nodules overlying lymph nodes. Systemic symptoms may be present. Diagnosis requires demonstration of acid-fast bacilli and/or positive culture.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "DR",
    topicCode: "DR-MOD-08-TOP-018",
    textbookRefs: [
      { book: "Rook Textbook of Dermatology", chapter: "Ch 33", edition: "9th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 28-year-old female presents with painful, violaceous papules on inner wrists and ankles. Oral mucosa shows white, lacy patterns. Biopsy shows \"saw-tooth\" appearance with liquefaction of basal layer. What is the pathophysiological mechanism?",
    clinicalVignette:
      "A 28-year-old female with violaceous papules on flexural areas and white lacy pattern on buccal mucosa. Biopsy consistent with lichen planus.",
    options: [
      {
        id: "a",
        text: "Autoimmune attack on basal keratinocytes mediated by CD8+ T cells",
        isCorrect: true,
        explanation:
          "Lichen planus is a lichenoid dermatitis where CD8+ cytotoxic T cells recognize and destroy basal keratinocytes. This causes liquefaction necrosis of the basal layer (basal keratinocyte necrosis), resulting in the characteristic histological appearance.",
      },
      {
        id: "b",
        text: "Th2-mediated allergic response with eosinophilic infiltration",
        isCorrect: false,
        explanation:
          "Lichen planus is primarily CD8+ T cell-mediated, not Th2-mediated allergic response.",
      },
      {
        id: "c",
        text: "Viral infection of keratinocytes with HPV",
        isCorrect: false,
        explanation:
          "While HPV can trigger oral LP, the mechanism in idiopathic LP is autoimmune, not viral.",
      },
      {
        id: "d",
        text: "Sebaceous gland hyperplasia with inflammation",
        isCorrect: false,
        explanation:
          "Sebaceous glands are not involved in lichen planus pathogenesis.",
      },
    ],
    explanation:
      "Lichen planus is an autoimmune condition mediated by CD8+ cytotoxic T cells targeting basal keratinocytes. The pathological hallmark is 'saw-tooth' hyperkeratosis with liquefaction of the basal layer (basal keratinocyte necrosis), dense lymphocytic infiltrate in the dermis, and preservation of the granular layer. Oral lichen planus presents with Wickham's striae (white lacy patterns). Both cutaneous and oral forms can be triggered by hepatitis C, NSAIDs, or be idiopathic.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "DR",
    topicCode: "DR-MOD-09-TOP-019",
    textbookRefs: [
      { book: "Rook Textbook of Dermatology", chapter: "Ch 40", edition: "9th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 22-year-old female presents with painful, necrotic lesions on lower legs that continue to enlarge despite antibiotic therapy. Biopsy shows no organisms. What is the most likely mechanism of tissue necrosis?",
    clinicalVignette:
      "A 22-year-old female with severe painful necrotic lesions on legs, high fevers, no organisms on cultures.",
    options: [
      {
        id: "a",
        text: "Direct bacterial invasion and enzyme production",
        isCorrect: false,
        explanation:
          "If no organisms are identified, direct bacterial invasion is unlikely.",
      },
      {
        id: "b",
        text: "Immune complex deposition and leukocytoclastic vasculitis",
        isCorrect: true,
        explanation:
          "Pyoderma gangrenosum is not infectious despite its name. It is mediated by immune complexes causing vasculitis and neutrophilic infiltration, leading to tissue necrosis. No organisms are found.",
      },
      {
        id: "c",
        text: "Thrombotic occlusion of vessels",
        isCorrect: false,
        explanation:
          "While thrombosis can contribute, the primary mechanism is immune-mediated vasculitis.",
      },
      {
        id: "d",
        text: "Direct viral cytopathic effect",
        isCorrect: false,
        explanation:
          "Viral infection is not the cause of pyoderma gangrenosum.",
      },
    ],
    explanation:
      "Pyoderma gangrenosum is a non-infectious, neutrophilic dermatosis mediated by immune dysregulation. Despite the name, it is not infectious—cultures are sterile. The pathophysiology involves immune complex deposition, leukocytoclastic vasculitis, and neutrophilic infiltration leading to tissue necrosis. It often occurs in association with inflammatory bowel disease, rheumatoid arthritis, or hematologic malignancies. Lesions are characterized by rapid progression despite antibiotic therapy, responding to immunosuppressive treatment.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "DR",
    topicCode: "DR-MOD-10-TOP-020",
    textbookRefs: [
      { book: "Rook Textbook of Dermatology", chapter: "Ch 43", edition: "9th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 40-year-old male presents with chronic, localized patches of hypopigmentation on face and hands with complete loss of sensation. He is from an endemic area. Slit-skin smear is negative. Lepromin test is positive. Which nerve is most likely to be involved?",
    clinicalVignette:
      "A 40-year-old male with tuberculoid leprosy pattern, localized hypopigmented patches, and sensory loss limited to lesional areas.",
    options: [
      {
        id: "a",
        text: "Median nerve",
        isCorrect: false,
        explanation:
          "While the median nerve can be affected, the most common nerve involvement in leprosy depends on the lesion location.",
      },
      {
        id: "b",
        text: "Cutaneous branch of the sensory nerve supplying the lesion",
        isCorrect: true,
        explanation:
          "In tuberculoid leprosy, the cutaneous nerve branches supplying the lesional area are preferentially affected. Sensory loss is therefore limited to the lesional distribution, unlike the systemic nerve involvement seen in lepromatous type.",
      },
      {
        id: "c",
        text: "Trigeminal nerve",
        isCorrect: false,
        explanation:
          "While facial lesions involve facial sensory distribution, the specific nerve affected corresponds to the lesion location.",
      },
      {
        id: "d",
        text: "Spinal cord (myelopathy)",
        isCorrect: false,
        explanation:
          "Spinal cord involvement is not typical in localized tuberculoid leprosy.",
      },
    ],
    explanation:
      "In tuberculoid leprosy, Mycobacterium leprae has a predilection for peripheral nerves, causing inflammation. The nerves affected correspond to the lesion location. Sensory loss occurs in the area of skin supplied by the affected cutaneous nerve. In contrast, lepromatous leprosy may show systemic nerve involvement with multiple large nerve trunks affected (ulnar, peroneal, facial). In tuberculoid leprosy, the number of affected nerves is usually one or two, corresponding to the lesional area.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "DR",
    topicCode: "DR-MOD-07-TOP-021",
    textbookRefs: [
      { book: "Rook Textbook of Dermatology", chapter: "Ch 33", edition: "9th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 55-year-old male with severe plaque psoriasis covering 60% body surface area is initiated on TNF-alpha inhibitor therapy. What is the most important baseline investigation before starting treatment?",
    clinicalVignette:
      "A 55-year-old male with extensive psoriasis requiring biologic therapy with TNF inhibitor.",
    options: [
      {
        id: "a",
        text: "Chest X-ray and tuberculin skin test",
        isCorrect: true,
        explanation:
          "TNF-alpha inhibitors significantly increase risk of tuberculosis (both latent and active) and opportunistic infections. Baseline TB screening is mandatory. CXR and TST are standard. Latent TB requires prophylaxis.",
      },
      {
        id: "b",
        text: "Liver function tests only",
        isCorrect: false,
        explanation:
          "While LFTs are important, TB screening is more critical given the high risk with TNF inhibitors.",
      },
      {
        id: "c",
        text: "Histocompatibility typing",
        isCorrect: false,
        explanation:
          "HLA typing is not required for TNF inhibitor initiation.",
      },
      {
        id: "d",
        text: "DEXA scan for bone density",
        isCorrect: false,
        explanation:
          "While bone health monitoring is important in chronic disease, TB screening takes priority.",
      },
    ],
    explanation:
      "TNF-alpha inhibitors significantly increase the risk of reactivating latent tuberculosis and developing progressive TB disease. They also increase susceptibility to other opportunistic infections. Baseline investigations include: CXR (to rule out active TB), tuberculin skin test (TST) or IGRA to detect latent TB, liver function tests, FBC, viral serology (HBV, HCV, HIV), and baseline clinical assessment. If latent TB is detected, prophylactic isoniazid should be started 3-4 weeks before the TNF inhibitor.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "DR",
    topicCode: "DR-MOD-01-TOP-022",
    textbookRefs: [
      { book: "Rook Textbook of Dermatology", chapter: "Ch 35", edition: "9th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 30-year-old female presents with scattered vesicles and pustules on erythematous base within 24-48 hours of drug exposure. Histology shows subcorneal pustules and minimal inflammation. What is the most likely diagnosis?",
    clinicalVignette:
      "A 30-year-old female with acute-onset rash of vesicles and pustules after starting a new antibiotic.",
    options: [
      {
        id: "a",
        text: "Acute Generalized Exanthematous Pustulosis (AGEP)",
        isCorrect: true,
        explanation:
          "AGEP presents with rapid-onset (within 24-48 hours) scattered pustules on erythematous background. Histology shows subcorneal or intraepidermal pustules with mild epidermal necrosis. Most common with antibiotics, anticonvulsants, and NSAIDs.",
      },
      {
        id: "b",
        text: "Pemphigus foliaceus",
        isCorrect: false,
        explanation:
          "Pemphigus foliaceus shows subcorneal acantholysis with IgG on DIF, not simple pustulation with minimal inflammation.",
      },
      {
        id: "c",
        text: "Folliculitis",
        isCorrect: false,
        explanation:
          "Folliculitis is localized to hair follicles, not scattered pustules on erythematous base.",
      },
      {
        id: "d",
        text: "Varicella zoster infection",
        isCorrect: false,
        explanation:
          "VZV presents with dermatomal distribution and characteristic vesicles, not scattered pustules.",
      },
    ],
    explanation:
      "AGEP is an acute, self-limited, pustular drug reaction. It presents with rapid-onset (typically 24-48 hours, sometimes up to 6 weeks) widespread pustules on erythematous background. It occurs on face, neck, intertriginous areas, and lower abdomen. Histology shows subcorneal or intraepidermal pustules containing neutrophils with minimal inflammatory infiltrate in dermis. Common triggers include beta-lactam antibiotics, macrolides, anticonvulsants, and NSAIDs. It resolves rapidly after drug discontinuation.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "DR",
    topicCode: "DR-MOD-03-TOP-023",
    textbookRefs: [
      { book: "Rook Textbook of Dermatology", chapter: "Ch 28", edition: "9th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 35-year-old male presents with ill-defined erythematous plaques with central atrophy and raised violaceous borders over cheeks and nose. He has systemic symptoms (fever, malaise). Biopsy shows granulomatous inflammation. What is the most likely diagnosis?",
    clinicalVignette:
      "A 35-year-old male with characteristic facial rash over cheeks and nose, systemic symptoms, and granulomatous inflammation on biopsy.",
    options: [
      {
        id: "a",
        text: "Discoid lupus erythematosus",
        isCorrect: false,
        explanation:
          "DLE shows interface dermatitis with hyperkeratosis, not granulomatous inflammation.",
      },
      {
        id: "b",
        text: "Lupus pernio form of sarcoidosis",
        isCorrect: true,
        explanation:
          "Lupus pernio is a severe form of cutaneous sarcoidosis affecting face and nose. It presents with erythematous, indurated plaques with central atrophy. Granulomatous inflammation is the histological hallmark. Associated with systemic features and poor prognosis.",
      },
      {
        id: "c",
        text: "Rosacea",
        isCorrect: false,
        explanation:
          "Rosacea shows vascular dilation and pustules, not granulomatous inflammation.",
      },
      {
        id: "d",
        text: "Granuloma annulare",
        isCorrect: false,
        explanation:
          "GA shows palisading granulomas in dermis, not systemic involvement with facial lesions as described.",
      },
    ],
    explanation:
      "Lupus pernio is the severe disfiguring form of cutaneous sarcoidosis characterized by granulomatous inflammation. It presents with plaques, nodules, and lupous lesions (raised, violaceous borders) primarily on face, nose, cheeks, and ears. Histology shows non-caseating granulomas. Associated systemic manifestations include pulmonary involvement and hypercalcemia. Photosensitivity is common. This form has worse prognosis and requires systemic treatment.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "DR",
    topicCode: "DR-MOD-11-TOP-024",
    textbookRefs: [
      { book: "Rook Textbook of Dermatology", chapter: "Ch 39", edition: "9th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 28-year-old male presents with circular lesion on arm with central clearing and raised red border. KOH mount shows pseudohyphae and budding forms. What is the most likely diagnosis?",
    clinicalVignette:
      "A 28-year-old male with circular lesion, central clearing, raised border, and pseudohyphae on KOH.",
    options: [
      {
        id: "a",
        text: "Dermatophyte infection (Tinea corporis)",
        isCorrect: false,
        explanation:
          "Dermatophytes show true septate, branching hyphae, not pseudohyphae and budding forms.",
      },
      {
        id: "b",
        text: "Candida infection",
        isCorrect: true,
        explanation:
          "Candida shows pseudohyphae and budding forms on KOH mount. While cutaneous candidiasis more commonly affects intertriginous areas, it can present on body with circular lesions and pseudo-ringworm appearance.",
      },
      {
        id: "c",
        text: "Erythema migrans",
        isCorrect: false,
        explanation:
          "Erythema migrans (Lyme disease) shows no fungal elements on KOH.",
      },
      {
        id: "d",
        text: "Pityriasis versicolor",
        isCorrect: false,
        explanation:
          "While PV shows yeast forms, it presents with hypo- or hyperpigmented macules, not raised borders.",
      },
    ],
    explanation:
      "Candida albicans can cause cutaneous infections showing circular lesions with central clearing (pseudo-ringworm). KOH mount is diagnostic showing pseudohyphae and budding forms, which differentiate it from dermatophytes (true hyphae). Candida more commonly affects intertriginous areas (axillae, groin) and skin folds, but can present on body surface. Risk factors include diabetes, immunosuppression, and antibiotic use. Treatment differs from dermatophytes (azoles rather than terbinafine).",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "DR",
    topicCode: "DR-MOD-04-TOP-025",
    textbookRefs: [
      { book: "Rook Textbook of Dermatology", chapter: "Ch 31", edition: "9th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 50-year-old male presents with ill-defined hypopigmented macules and patches over trunk and extremities. He is HIV positive with CD4 count of 150 cells/μL. Slit-skin smear shows moderate number of acid-fast bacilli. What is the most likely classification?",
    clinicalVignette:
      "A 50-year-old HIV-positive male with low CD4 count presenting with leprosy and moderate bacterial load.",
    options: [
      {
        id: "a",
        text: "Tuberculoid leprosy",
        isCorrect: false,
        explanation:
          "Tuberculoid leprosy has low bacterial load and positive lepromin test, indicating strong immunity.",
      },
      {
        id: "b",
        text: "Borderline lepromatous leprosy",
        isCorrect: true,
        explanation:
          "In HIV-positive patients with low CD4 count, leprosy often presents as borderline lepromatous or lepromatous form with higher bacterial loads. The immunocompromised state allows higher bacillary multiplication.",
      },
      {
        id: "c",
        text: "Indeterminate leprosy",
        isCorrect: false,
        explanation:
          "Indeterminate leprosy is the earliest form with scanty bacilli and is not compatible with moderate bacillary load.",
      },
      {
        id: "d",
        text: "Pure neuritic leprosy",
        isCorrect: false,
        explanation:
          "Pure neuritic leprosy presents without skin lesions, but this patient has widespread lesions.",
      },
    ],
    explanation:
      "In HIV-positive patients, the presentation of leprosy is often atypical, influenced by CD4 count. With CD4 <200 cells/μL, leprosy typically presents as borderline lepromatous or lepromatous forms with high bacterial loads. This is the opposite of immunocompetent hosts where tuberculoid (paucibacillary) forms are more stable. The immunosuppression allows the bacillus to multiply unchecked. Immune reconstitution with ART can trigger leprosy reactions.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "DR",
    topicCode: "DR-MOD-07-TOP-026",
    textbookRefs: [
      { book: "Rook Textbook of Dermatology", chapter: "Ch 33", edition: "9th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 45-year-old male with severe psoriasis (PASI 25) is initiated on acitretin. What is the critical concern for counseling regarding pregnancy?",
    clinicalVignette:
      "A 45-year-old male requiring systemic retinoid therapy for severe psoriasis.",
    options: [
      {
        id: "a",
        text: "Teratogenicity is a concern for his female partner who may become pregnant",
        isCorrect: true,
        explanation:
          "Acitretin is highly teratogenic. Males on acitretin can transfer the drug through semen. Counseling should include avoiding conception and ensuring female partners use effective contraception. The drug has a long half-life and remains in body adipose tissue.",
      },
      {
        id: "b",
        text: "No pregnancy concerns as acitretin does not cross placenta",
        isCorrect: false,
        explanation:
          "Acitretin is highly teratogenic and crosses placenta. Pregnancy must be avoided during and for extended period after treatment.",
      },
      {
        id: "c",
        text: "Pregnancy is safe as long as taken in first trimester only",
        isCorrect: false,
        explanation:
          "Acitretin is teratogenic throughout pregnancy. It should be avoided during entire reproductive years.",
      },
      {
        id: "d",
        text: "Fertility is enhanced in males taking acitretin",
        isCorrect: false,
        explanation:
          "Retinoids do not enhance fertility and carry risks of adverse effects on reproductive health.",
      },
    ],
    explanation:
      "Acitretin is a highly teratogenic retinoid that causes characteristic embryopathy (craniofacial, cardiac, thymic, CNS, and urogenital abnormalities). While this patient is male, counseling is still critical: acitretin can be transferred through semen and is present in body adipose tissue for prolonged periods. Female partners must use effective contraception. Acitretin is also metabolized to etretinate, which has even longer half-life. Males should avoid conception and ensure family planning discussions before starting treatment.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "DR",
    topicCode: "DR-MOD-01-TOP-027",
    textbookRefs: [
      { book: "Rook Textbook of Dermatology", chapter: "Ch 35", edition: "9th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 32-year-old female with pemphigus vulgaris on high-dose oral corticosteroids develops severe infections and metabolic complications. What is the most appropriate steroid-sparing agent to add?",
    clinicalVignette:
      "A 32-year-old female with PV requiring high steroid doses, developing secondary infections and osteoporosis risk.",
    options: [
      {
        id: "a",
        text: "Azathioprine or Mycophenolate mofetil",
        isCorrect: true,
        explanation:
          "Azathioprine and MMF are standard steroid-sparing agents in pemphigus. They allow dose reduction of corticosteroids while maintaining disease control. Azathioprine has decades of use in pemphigus, while MMF is increasingly preferred due to better tolerability.",
      },
      {
        id: "b",
        text: "Methotrexate",
        isCorrect: false,
        explanation:
          "Methotrexate is less effective in pemphigus compared to azathioprine or MMF.",
      },
      {
        id: "c",
        text: "Cyclosporine",
        isCorrect: false,
        explanation:
          "While cyclosporine has been used, it has significant nephrotoxicity and drug interactions, making it less preferred than azathioprine or MMF.",
      },
      {
        id: "d",
        text: "Dapsone",
        isCorrect: false,
        explanation:
          "Dapsone is used in linear IgA disease and dermatitis herpetiformis, not pemphigus.",
      },
    ],
    explanation:
      "Azathioprine (1-2 mg/kg/day) and Mycophenolate mofetil (2-3 g/day) are the preferred steroid-sparing agents in pemphigus vulgaris. Both allow significant reduction in corticosteroid doses within 2-4 weeks. Azathioprine requires baseline TPMT testing and monitoring for bone marrow suppression. MMF is increasingly preferred due to better side effect profile. Both agents reduce risk of infection and metabolic complications from chronic high-dose steroids. Rituximab is increasingly used for severe, refractory cases.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "DR",
    topicCode: "DR-MOD-01-TOP-028",
    textbookRefs: [
      { book: "Rook Textbook of Dermatology", chapter: "Ch 24", edition: "9th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 60-year-old male presents with rapidly progressive, painful vesicles in V1 distribution of trigeminal nerve. Tzanck smear shows multinucleated giant cells. What is the critical early intervention to prevent complications?",
    clinicalVignette:
      "A 60-year-old male with acute herpes zoster in V1 distribution presenting within 48 hours of symptom onset.",
    options: [
      {
        id: "a",
        text: "Topical antivirals (acyclovir cream) only",
        isCorrect: false,
        explanation:
          "Topical antivirals are insufficient for dermatomal distribution herpes zoster, especially V1 which carries risk of ocular complications.",
      },
      {
        id: "b",
        text: "Immediate systemic antiviral therapy (IV acyclovir or oral valacyclovir)",
        isCorrect: true,
        explanation:
          "Early systemic antiviral therapy within 48-72 hours of zoster onset significantly reduces pain duration and post-herpetic neuralgia risk. V1 distribution requires urgent treatment to prevent ocular complications (keratitis, uveitis).",
      },
      {
        id: "c",
        text: "Systemic corticosteroids as monotherapy",
        isCorrect: false,
        explanation:
          "Corticosteroids without antivirals are not adequate treatment and may increase viral replication.",
      },
      {
        id: "d",
        text: "Pain management with NSAIDs only, observation",
        isCorrect: false,
        explanation:
          "Observation without antivirals allows progression and increases risk of complications.",
      },
    ],
    explanation:
      "Herpes zoster (shingles) requires urgent systemic antiviral therapy if started within 48-72 hours of symptom onset. Valacyclovir (1000 mg TDS) or IV acyclovir is indicated. Ophthalmic zoster (V1 distribution) is a medical emergency due to risk of ocular complications (keratitis, anterior uveitis, retrobulbar neuritis). Early antivirals reduce acute pain duration, viral load, and risk of post-herpetic neuralgia (PHN)—the most common complication. Adjunctive corticosteroids (0.5 mg/kg prednisone) within 7 days may reduce PHN risk in patients >50 years.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "DR",
    topicCode: "DR-MOD-12-TOP-029",
    textbookRefs: [
      { book: "Rook Textbook of Dermatology", chapter: "Ch 34", edition: "9th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 28-year-old female presents with painful erosions over vulva and perirectal area following prodromal pain. Culture confirms HSV-2. What is the primary concern for maternal counseling regarding pregnancy?",
    clinicalVignette:
      "A 28-year-old female with primary genital HSV-2 infection at 28 weeks gestation.",
    options: [
      {
        id: "a",
        text: "No significant risk to fetus during pregnancy",
        isCorrect: false,
        explanation:
          "While transplacental transmission during pregnancy is rare, disseminated neonatal HSV is a major concern if vaginal delivery occurs during primary infection.",
      },
      {
        id: "b",
        text: "High risk of neonatal herpes with associated mortality and morbidity if vaginal delivery occurs during primary infection",
        isCorrect: true,
        explanation:
          "Primary genital HSV during pregnancy carries high risk (30-50%) of neonatal transmission during vaginal delivery. Neonatal herpes can cause disseminated infection, CNS involvement, and death. Cesarean section is strongly recommended if primary HSV occurs near term.",
      },
      {
        id: "c",
        text: "Recurrent HSV carries same risk as primary infection",
        isCorrect: false,
        explanation:
          "While recurrent HSV requires monitoring, primary infection near term carries substantially higher transmission risk.",
      },
      {
        id: "d",
        text: "Antiviral therapy eliminates all neonatal transmission risk",
        isCorrect: false,
        explanation:
          "Antivirals reduce but do not eliminate risk. Cesarean delivery is still recommended if primary infection near delivery.",
      },
    ],
    explanation:
      "Primary genital HSV infection in pregnancy carries significant risk of neonatal transmission if vaginal delivery occurs. Disseminated neonatal herpes causes encephalitis, disseminated infection, and mortality (15-30% untreated). Primary HSV near term warrants Cesarean section. Recurrent HSV carries lower transmission risk (2-5%). Suppressive antiviral therapy (acyclovir 400 mg TDS or valacyclovir 500 mg TDS) is recommended from 36 weeks in patients with recurrent HSV, allowing vaginal delivery. Management decisions depend on timing of primary infection relative to delivery date.",
    difficulty: "HARD" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "DR",
    topicCode: "DR-MOD-12-TOP-030",
    textbookRefs: [
      { book: "Rook Textbook of Dermatology", chapter: "Ch 34", edition: "9th" },
    ],
  },
];
