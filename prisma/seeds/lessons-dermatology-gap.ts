import type { TopicLessons } from "./content-loader";

export const dermatologyGapLessons: TopicLessons[] = [
  // DR-MOD-01-TOP-04: Dermatological Therapeutics
  {
    topicCode: "DR-MOD-01-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "dermatological-therapeutics-layer-1-foundation",
        title: "Dermatological Therapeutics - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of topical and systemic dermatological treatments including steroids, retinoids, phototherapy, and immunomodulators for common skin conditions.",
        contentMd: `# Dermatological Therapeutics - Foundation

## Topical Corticosteroids
- **Potency Classification**: Superpotent (Clobetasol 0.05%), Potent (Betamethasone 0.1%), Moderate (Triamcinolone 0.1%), Mild (Hydrocortisone 1%)
- **Duration of application**: 2-4 weeks is typical; avoid prolonged use due to atrophy
- **Site selection**: Thin skin (face, neck, intertriginous) requires lower potency; thicker skin (palms, soles) tolerates higher potency
- **Vehicles**: Creams (good for hydration), Ointments (occlusive, enhanced penetration), Lotions (non-greasy for scalp), Foams
- **Application frequency**: 1-4 times daily depending on potency
- **Common uses**: Eczema, psoriasis, contact dermatitis, seborrheic dermatitis, lichen planus

## Topical Retinoids
- **First generation**: Tretinoin (all-trans retinoic acid, most potent), Isotretinoin (topical for acne)
- **Second generation**: Adapalene (photostable, less irritating), Tazarotene (psoriasis, photoaging)
- **Third generation**: Balneophotochemotherapy with retinoids
- **Mechanism**: Bind retinoic acid receptors (RAR), normalize keratinization, increase cell turnover
- **Uses**: Acne, photoaging, psoriasis, warts
- **Side effects**: Retinization (erythema, scaling, photosensitivity) common initially
- **Precaution**: Teratogenic; contraindicated in pregnancy; use sunscreen

## Systemic Corticosteroids
- **Indications**: Acute severe dermatitis, bullous diseases, severe psoriasis, serum sickness
- **Dosing**: Prednisone 0.5-1 mg/kg/day for acute exacerbations; taper to avoid rebound
- **Duration**: Usually 2-4 weeks for acute conditions
- **Side effects**: HPA suppression, adrenal insufficiency with rapid withdrawal, infection risk, osteoporosis

## Systemic Retinoids
- **Isotretinoin**: For severe cystic acne; teratogenic, requires iPLEDGE program in some countries
- **Acitretin**: For psoriasis and ichthyosis; teratogenic; long half-life (48-96 hours)
- **Monitoring**: Liver function, lipids, pregnancy test before initiation and monthly during therapy

## Antimicrobial Agents
- **Topical antibiotics**: Neomycin, bacitracin (for superficial infection), fusidic acid (for MRSA)
- **Systemic antibiotics**: Doxycycline (acne, rosacea), flucloxacillin (bacterial infection)
- **Antifungals**: Topical azoles (ketoconazole, miconazole), terbinafine for dermatophytes, systemic terbinafine or azoles for onychomycosis
- **Antivirals**: Acyclovir (HSV, VZV), valacyclovir (higher bioavailability)

## Phototherapy
- **UVB therapy**: Narrowband UVB (311nm) for psoriasis, vitiligo, mycosis fungoides; 2-3 times weekly
- **PUVA (Psoralen + UVA)**: For psoriasis, vitiligo, lichen planus; requires photosensitizing psoralens
- **Excimer laser (308nm)**: Targeted UVB for localized plaques or vitiligo patches
- **Photodynamic therapy**: 5-aminolevulinic acid (5-ALA) for actinic keratosis, non-melanoma skin cancer

## Biologic Agents
- **TNF-α inhibitors**: Infliximab, etanercept for severe psoriasis, psoriatic arthritis
- **IL-17 inhibitors**: Secukinumab, ixekizumab for plaque psoriasis
- **IL-12/23 inhibitors**: Ustekinumab for psoriasis
- **Indication**: Severe disease unresponsive to conventional therapy`,
        mnemonics: [
          { text: "SPMM = Superpotent, Potent, Moderate, Mild", explanation: "Corticosteroid potency classification" },
          { text: "RAR = Retinoic Acid Receptor binding", explanation: "Mechanism of retinoid action" },
          { text: "PUVA = Psoralen + UVA", explanation: "Phototherapy requiring photosensitizing agents" },
          { text: "TNF-IL-17-IL-12/23", explanation: "Biologic targets in psoriasis/autoimmune skin disease" }
        ],
        keyPoints: [
          "Corticosteroid potency varies by formulation; matching potency to body site prevents atrophy",
          "Retinoids normalize keratinization; tretinoin is most potent but causes retinization (irritation)",
          "Systemic corticosteroids needed for acute severe dermatitis or bullous disease; taper gradually",
          "Isotretinoin is teratogenic; requires strict monitoring and pregnancy prevention programs",
          "Phototherapy (UVB, PUVA, excimer) effective for psoriasis and vitiligo with 2-3 sessions weekly",
          "Biologic agents target specific cytokines; used for severe psoriasis/autoimmune disease",
          "Antimicrobials selected based on organism and resistance patterns; topical for superficial infection"
        ],
        textbookRefs: [
          { book: "IADVL Textbook of Dermatology", chapter: "5 - Therapeutics", edition: "4th" },
          { book: "Roxburgh's Common Skin Diseases", chapter: "Treatments and Management", edition: "20th" },
          { book: "Rook's Textbook of Dermatology", chapter: "Topical and Systemic Therapy", edition: "9th" }
        ],
      },
      {
        layer: 2,
        slug: "dermatological-therapeutics-layer-2-mechanism",
        title: "Dermatological Therapeutics - Mechanism",
        estimatedMinutes: 25,
        summary: "Molecular mechanisms of action for topical and systemic dermatological agents.",
        contentMd: `# Dermatological Therapeutics - Mechanism

## Corticosteroid Mechanisms
- **Transactivation**: Glucocorticoid receptor binds corticosteroid, dimerizes, enters nucleus, activates anti-inflammatory genes (IL-10, annexin-1)
- **Transrepression**: Receptor interferes with NF-κB and AP-1 transcription factors, suppressing pro-inflammatory cytokines (TNF-α, IL-1, IL-6)
- **Cellular effects**: Reduces keratinocyte proliferation, inhibits Langerhans cell migration, suppresses mast cell degranulation
- **Potency determinants**: Fluorine substitution, lipophilicity, vehicle type, skin penetration rate
- **HPA axis suppression**: Negative feedback; prolonged high-potency use can suppress ACTH and cortisol production

## Retinoid Mechanisms
- **Ligand binding**: Retinoids bind RAR-α, RAR-β, RAR-γ (all-trans retinoic acid is most active)
- **Heterodimer formation**: RAR-RXR complex binds RARE (retinoic acid response elements) in promoter regions
- **Gene transcription**: Induces differentiation genes (keratin, involucrin) while suppressing proliferation genes
- **Keratinocyte effects**: Normalizes keratinocyte differentiation, increases epidermal turnover, promotes sebum reduction
- **Collagen synthesis**: Stimulates dermal collagen I and III production; prevents collagen degradation via MMP inhibition
- **Retinization**: Initial irritation due to rapid upregulation of desquamation and transient inflammation

## Antimicrobial Mechanisms
- **Topical antibiotics**: Inhibit bacterial protein synthesis (macrolides, tetracyclines) or cell wall synthesis (β-lactams)
- **Antifungals (azoles)**: Inhibit lanosterol 14α-demethylase, disrupting ergosterol synthesis in fungal cell membrane
- **Antivirals**: Nucleoside analogs (acyclovir) incorporated into viral DNA, causing chain termination
- **Systemic absorption**: Limited topical absorption minimizes systemic toxicity; high local concentration achieves therapeutic effect

## Phototherapy Mechanisms
- **UVB (280-320nm)**: Induces thymine dimers in DNA, causing apoptosis of pathogenic T cells and normalizing keratinocyte proliferation
- **Photoisomerization**: UVB converts trans-urocanic acid to cis form, which is immunosuppressive
- **IL-10 production**: UVB stimulates keratinocytes and immune cells to produce IL-10 (anti-inflammatory)
- **PUVA mechanism**: Psoralen + UVA (320-400nm) forms adducts with DNA after UVA activation; cross-links proteins, induces apoptosis
- **Excimer laser**: High-dose focused UVB (308nm) targets specific lesions with minimal surrounding skin exposure
- **Vitamin D synthesis**: UVB stimulates pre-vitamin D3 synthesis in skin; vitamin D acts as immunomodulator

## Biologic Mechanisms
- **TNF-α inhibitors**: Block TNF-α (key Th1 cytokine); reduces Langerhans cell activation and keratinocyte proliferation
- **IL-17 pathway**: IL-17A promotes neutrophil recruitment and keratinocyte proliferation; blocking IL-17 effective in psoriasis
- **IL-12/23 pathway**: p40 subunit blocks both IL-12 and IL-23; IL-23 is crucial for Th17 differentiation
- **Monoclonal antibodies**: Reduce antigen-presenting cell trafficking to skin; shift Th1/Th17 toward Th2/Treg phenotype

## Immunomodulator Mechanisms
- **Calcineurin inhibitors** (tacrolimus, pimecrolimus): Inhibit NFAT transcription factor, blocking T cell cytokine production without systemic immunosuppression
- **Mechanism of action**: Reversible, non-steroid alternative; effective for atopic dermatitis, lichen planus
- **Phosphodiesterase-4 inhibitors** (apremilast): Increases cAMP in immune cells, reducing TNF-α, IL-6, IL-8

## Penetration Enhancement
- **Occlusion**: Increases hydration of stratum corneum, increases drug penetration 10-100 fold
- **Vehicle selection**: Ointments > creams > lotions in penetration; lipophilic drugs penetrate better in ointment vehicles
- **Supersaturation**: Formulation at saturation point drives maximum concentration gradient across stratum corneum
- **Chemical penetration enhancers**: Propylene glycol, dimethyl sulfoxide (DMSO) increase drug solubility and penetration`,
        mnemonics: [
          { text: "RAR-RXR-RARE = Retinoid Action", explanation: "Receptor-heterodimer-response element chain" },
          { text: "UVB kills T cells; PUVA cross-links DNA", explanation: "Different phototherapy mechanisms" },
          { text: "TNF-IL-17-IL-23 = Biologic targets", explanation: "Cytokines in psoriasis pathogenesis" },
          { text: "Calcineurin → NFAT blockade = T cell shutdown", explanation: "Tacrolimus/pimecrolimus mechanism" }
        ],
        keyPoints: [
          "Corticosteroids work via transactivation (anti-inflammatory) and transrepression (anti-proliferative)",
          "Retinoids bind RAR; normalize differentiation and inhibit proliferation; cause retinization initially",
          "UVB induces T cell apoptosis and vitamin D synthesis; PUVA forms DNA cross-links",
          "Biologic agents target Th1/Th17 cytokines; shift immune profile toward Th2/Treg",
          "Calcineurin inhibitors block T cell activation without systemic immunosuppression",
          "Occlusion and vehicle selection dramatically affect topical drug penetration",
          "Azole antifungals disrupt ergosterol synthesis; nucleoside antivirals cause DNA chain termination"
        ],
        textbookRefs: [
          { book: "IADVL Textbook of Dermatology", chapter: "5 - Therapeutics and Pharmacology", edition: "4th" },
          { book: "Rook's Textbook of Dermatology", chapter: "Pharmacology and Therapy", edition: "9th" }
        ],
      },
      {
        layer: 3,
        slug: "dermatological-therapeutics-layer-3-clinical",
        title: "Dermatological Therapeutics - Clinical",
        estimatedMinutes: 25,
        summary: "Clinical application and management of dermatological therapeutics for common skin conditions in Indian practice.",
        contentMd: `# Dermatological Therapeutics - Clinical

## Steroid-Responsive Dermatoses
- **Eczema/Atopic dermatitis**: Mild-moderate potency on face/neck; moderate-potent on trunk/limbs; emollient base vehicle
- **Psoriasis**: Potent steroids for localized plaques; systemic steroids contraindicated (risk of pustular psoriasis on withdrawal)
- **Contact dermatitis**: Potent steroid for acute phase; gradual taper to avoid rebound; identify and avoid trigger
- **Seborrheic dermatitis**: Mild steroid (hydrocortisone 1%) on face; medium potency on scalp; combine with antifungal
- **Lichen planus**: Potent topical steroid; intralesional steroid for isolated lesions; systemic corticosteroid for severe erosive disease

## Acne Management
- **Mild**: Benzoyl peroxide (antimicrobial, comedolytic) + topical retinoid (tretinoin 0.025-0.1%)
- **Moderate**: Add topical/systemic antibiotic (doxycycline 50-100mg daily), continue benzoyl peroxide + retinoid
- **Severe/cystic**: Isotretinoin 0.5-1 mg/kg/day for 20 weeks total dose; requires monthly monitoring, strict pregnancy prevention
- **Combination therapy**: Retinoid + benzoyl peroxide + antibiotic prevents antibiotic resistance
- **Duration**: Typically 8-12 weeks to assess response; may continue for months

## Topical Retinoid Use in India
- **High prevalence**: Melasma, post-inflammatory hyperpigmentation, photoaging common in Indian population
- **Tretinoin for melasma**: 0.025-0.1% daily at night; combine with sunscreen (SPF 30+) and hydroquinone
- **Post-inflammatory hyperpigmentation**: Tretinoin 0.025% gradually increase concentration; effective in darker skin types
- **Photoaging prevention**: Low-dose tretinoin (0.025%) 3 times weekly as maintenance therapy
- **Cultural consideration**: Patient education essential; retinization (irritation) often misinterpreted as adverse reaction

## Phototherapy in India
- **Vitiligo**: Very high prevalence in India; NBUVB 3 times weekly, 5-10 minutes per session; combine with topical steroids
- **Psoriasis**: NBUVB 2-3 times weekly; PUVA alternative but requires psoralen (oral or topical)
- **Mycosis fungoides**: PUVA or NBUVB for early-stage disease (T1, T2)
- **Resource consideration**: Phototherapy equipment expensive; available in tertiary centers and dermatology departments

## Antimicrobial Selection in India
- **Impetigo**: Topical antibiotic (mupirocin) if localized; systemic for extensive disease (flucloxacillin, cephalosporin)
- **Fungal infection**: Dermatophyte prevalence high (Microsporum, Trichophyton); topical azole for tinea corporis/pedis
- **Onychomycosis**: Terbinafine 250mg daily × 6 weeks (fingernail) or 12 weeks (toenail); higher cure rates than azoles
- **Candidiasis**: Miconazole/ketoconazole topical; fluconazole systemic for mucocutaneous disease
- **Resistance**: Increasing MRSA prevalence; fusidic acid effective alternative to mupirocin

## Immunomodulatory Therapy for Autoimmune Conditions
- **Bullous pemphigoid**: Topical steroid (potent) for mild disease; systemic prednisolone 0.5-1 mg/kg for moderate-severe
- **Pemphigus vulgaris**: Systemic corticosteroid essential; prednisolone 1-2 mg/kg initially, taper over months; add steroid-sparing agents (azathioprine, mycophenolate)
- **Atopic dermatitis**: Tacrolimus 0.03-0.1% ointment for face/neck; safe alternative to steroids
- **Lichen planus**: Intralesional triamcinolone for isolated lesions; systemic corticosteroid for erosive/bullous forms; retinoids adjunctive

## Biologic Therapy Indications in India
- **Severe psoriasis**: >10% BSA, failed conventional therapy; TNF-α inhibitor (infliximab) or IL-17 inhibitor (secukinumab)
- **Psoriatic arthritis**: Combination with systemic corticosteroid; monitor for infection, TB (high prevalence in India)
- **Cost-effectiveness**: Limited accessibility due to high cost; reserved for severe refractory disease
- **TB screening**: Essential before biologic therapy; tuberculin skin test and chest X-ray mandatory

## Vehicle Selection for Indian Climate
- **High humidity (monsoon)**: Creams and gels better than ointments (occlusive, promoting fungal growth)
- **Dry climate**: Ointments provide better barrier function; creams in creases
- **Sweat-prone areas**: Lotions and powders; avoid excessive occlusion
- **Seasonal variation**: Adjust vehicle based on climate; patient adherence improves with appropriate vehicle

## Combination Therapy Approach
- **Psoriasis**: Potent steroid cream + vitamin D analog (calcipotriol) for synergistic effect
- **Melasma**: Tretinoin + hydroquinone + flucinolone acetonide (triple combination)
- **Atopic dermatitis**: Emollient + topical steroid ± calcineurin inhibitor + systemic antihistamine
- **Fungal infection**: Topical antifungal + oral antifungal for extensive disease; steroid added only if allergic component present`,
        mnemonics: [
          { text: "FACE = Hydrocortisone, TRUNK = Moderate, THICK SKIN = Potent steroid", explanation: "Steroid potency by body site" },
          { text: "Acne: BPO + Tretinoin + Antibiotic", explanation: "Triple therapy to prevent resistance" },
          { text: "Melasma: Tretinoin + Hydroquinone + Sunscreen", explanation: "Essential combination in Indian population" },
          { text: "VITILIGO = NBUVB 3x weekly + Topical steroid", explanation: "High-prevalence condition in India" }
        ],
        keyPoints: [
          "Steroid potency selected based on body site; superpotent steroids for thick skin only",
          "Systemic steroids contraindicated in psoriasis (risk of pustular flare); use with caution",
          "Acne requires combination therapy to prevent resistance; isotretinoin for severe disease only",
          "Melasma and post-inflammatory hyperpigmentation respond to tretinoin; high prevalence in Indian population",
          "Phototherapy (NBUVB) very effective for vitiligo; high patient burden in India",
          "Biologic therapy reserved for severe refractory disease; TB screening essential in Indian population",
          "Vehicle selection important for Indian climate; adjust based on humidity, sweating, seasonality"
        ],
        textbookRefs: [
          { book: "IADVL Textbook of Dermatology", chapter: "5 & 25 - Therapeutics and Common Conditions", edition: "4th" },
          { book: "Roxburgh's Common Skin Diseases", chapter: "Management of Dermatitis and Psoriasis", edition: "20th" }
        ],
      },
      {
        layer: 4,
        slug: "dermatological-therapeutics-layer-4-exam",
        title: "Dermatological Therapeutics - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield exam facts, pearls, and common pitfalls in dermatological therapeutics.",
        contentMd: `# Dermatological Therapeutics - Exam Prep

## High-Yield Steroid Facts
- **Clobetasol 0.05% cream**: Superpotent; use only 2 weeks max on thin skin
- **Hydrocortisone 1%**: Safest for face, neck, intertriginous areas; can use longer term
- **HPA suppression**: Risk increases with potency, body surface area, duration, and occlusion
- **Systemic absorption**: 40% from face, 30% forearm, 0.1% from palm (thickest skin)
- **Atrophy**: Reversible with discontinuation if <2-4 weeks; permanent if >3 months on face

## Acne Pathogenesis vs Treatment
- **Pathogenesis**: Follicle plugging (comedone), increased sebum, Cutibacterium acnes colonization, inflammation
- **Benzoyl peroxide**: Bacteriostatic; also comedolytic; 2.5-10% concentration
- **Retinoid mechanism**: Normalizes follicular keratinization; prevents drug resistance when combined with antibiotic
- **Antibiotic resistance**: Emerges within 3 months if monotherapy; prevented by combination with benzoyl peroxide
- **Isotretinoin**: 20 mg/kg cumulative dose; teratogenic (Pregnancy Category X); requires monthly pregnancy tests

## Retinoid Concerns in Pregnancy
- **All retinoids teratogenic**: Increased risk of craniofacial, cardiac, thymic, CNS, cleft palate defects
- **Isotretinoin**: Highest risk; requires iPLEDGE or equivalent programs
- **Tretinoin**: Systemic absorption after topical application very low; still avoided in pregnancy
- **Adapalene**: Pregnancy Category C; generally considered safer than tretinoin

## Phototherapy Timing and Dosing
- **NBUVB initiation**: Start 75-80% of MED (minimal erythema dose); increase by 10-20% each session
- **Frequency**: 2-3 times weekly; spaced at least 48 hours apart to avoid cumulative burn
- **Duration**: Typically 8-12 weeks to assess response; continue for 6-12 months
- **Maintenance**: Can reduce frequency after clear (once weekly) for long-term control

## Antimicrobial Duration
- **Topical antibiotics**: 5-7 days for superficial infection; limit to 2 weeks to prevent resistance
- **Systemic antibiotics**: Doxycycline 50-100mg daily for acne (6+ months); shorter courses for infection
- **Antifungals**: Topical 2-4 weeks for dermatophytes; terbinafine systemic duration longer (6-12 weeks for onyx)

## Common Exam Mistakes
- **Steroid rebound**: Applying superpotent steroid for >2 weeks on thin skin causes atrophy; patient assumes allergy
- **Retinoid irritation misidentified**: Retinization (erythema, scaling) normal; mistaken for contact dermatitis
- **Antibiotic monotherapy fails**: Acne requires combination (benzoyl peroxide + retinoid + antibiotic) to prevent resistance
- **Systemic steroids in psoriasis**: High risk of pustular transformation; absolute contraindication in severe disease

## Drug Interactions
- **Retinoids + vitamin A**: Risk of hypervitaminosis; counsel patients to avoid supplements
- **Biologic + TNF-related disease**: Paradoxical psoriasis flare reported with TNF inhibitors; monitor closely
- **Phototherapy + photosensitizing drugs**: Tetracycline, NSAIDs, thiazides increase photosensitivity; advise UPF clothing
- **Isotretinoin + lipophilic drugs**: Increased systemic absorption; baseline lipid levels essential

## NMC Competency Exam Focus
- **Treatment algorithm**: Recognize appropriate first-line therapy based on severity and site
- **Steroid classification**: Name potency of common preparations; match to body site
- **Adverse effects**: HPA suppression, atrophy, teratogenicity, photosensitivity
- **Contraindications**: Systemic steroids in psoriasis; retinoids in pregnancy; isotretinoin without monitoring

## Clinical Pearls
- **Melasma in Indian population**: Tretinoin 0.05% nightly + hydroquinone 4% + SPF 30+ essential; can add intralesional steroid
- **Vitiligo phototherapy**: NBUVB most effective; combine with potent topical steroid for synergy
- **Pemphigus**: Requires systemic steroid + steroid-sparing agent (azathioprine) early to minimize long-term morbidity
- **Post-inflammatory hyperpigmentation**: Self-limited but tretinoin 0.025% accelerates resolution`,
        mnemonics: [
          { text: "HPA TACO = Teratogenic (retinoids), Atrophy (steroids), Cost (biologics), Resistance (antibiotics)", explanation: "Main complications by drug class" },
          { text: "Acne: BPO + Tret + AB = NO resistance", explanation: "Combination therapy prevents antibiotic resistance" },
          { text: "Steroid: 2-4 weeks thin skin; 6+ weeks thick skin", explanation: "Duration limits by site" },
          { text: "NBUVB timing: 2-3x weekly, 48h apart, 10-20% MED increment", explanation: "Safe phototherapy protocol" }
        ],
        keyPoints: [
          "Clobetasol 0.05% is superpotent; never use >2 weeks on thin skin due to atrophy risk",
          "HPA suppression risk correlates with potency, area, duration, and occlusion level",
          "Isotretinoin requires strict pregnancy prevention; cumulative dose 20 mg/kg",
          "Retinization (irritation) is expected with tretinoin; counsel patient to persist",
          "Acne requires triple therapy (BPO + retinoid + antibiotic) to prevent resistance",
          "NBUVB phototherapy: 2-3x weekly, increment dose carefully, 8-12 weeks minimum",
          "Systemic steroids contraindicated in severe psoriasis (risk of pustular flare)"
        ],
        textbookRefs: [
          { book: "IADVL Textbook of Dermatology", chapter: "5 - Therapeutics", edition: "4th" },
          { book: "Roxburgh's Common Skin Diseases", chapter: "Treatment Principles", edition: "20th" }
        ],
      },
      {
        layer: 5,
        slug: "dermatological-therapeutics-layer-5-active-recall",
        title: "Dermatological Therapeutics - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard Q&A for rapid recall of therapeutic agents, dosing, and management strategies.",
        contentMd: `# Dermatological Therapeutics - Active Recall Flashcards

## Q1: Corticosteroid Potency
**Q: Name the potency of: hydrocortisone 1%, triamcinolone acetonide 0.1%, betamethasone valerate 0.1%, clobetasol propionate 0.05%**
A: Hydrocortisone = mild; Triamcinolone = moderate; Betamethasone = potent; Clobetasol = superpotent

## Q2: Steroid Atrophy Prevention
**Q: What is the maximum duration of clobetasol 0.05% cream on the face?**
A: Maximum 2 weeks on thin skin (face, neck, intertriginous); risk of irreversible atrophy if >3 months

## Q3: Retinoid Mechanism
**Q: How do tretinoin and adapalene work, and which is most potent?**
A: Bind retinoic acid receptors (RAR); normalize keratinocyte differentiation; tretinoin is most potent; adapalene is photostable and less irritating

## Q4: Acne Triple Therapy
**Q: What is the gold standard triple combination for moderate acne resistant to monotherapy?**
A: Benzoyl peroxide (2.5-10%) + topical retinoid (tretinoin 0.025-0.1%) + topical/systemic antibiotic (doxycycline); prevents resistance

## Q5: Isotretinoin Cumulative Dose
**Q: What is the target cumulative dose for isotretinoin in severe cystic acne, and what is the monitoring requirement?**
A: Target 20 mg/kg cumulative dose over 16-24 weeks; monthly pregnancy tests, lipid panel, liver function tests essential

## Q6: Phototherapy Dosing
**Q: What is the starting dose for NBUVB phototherapy, and what is the frequency and increment?**
A: Start at 75-80% of MED; 2-3 times weekly with 48-hour spacing; increase by 10-20% per session based on tolerance

## Q7: Vitiligo Management in India
**Q: What is the first-line combination therapy for vitiligo in Indian patients?**
A: NBUVB phototherapy 2-3 times weekly + topical corticosteroid (potent) or calcineurin inhibitor (tacrolimus); consider topical depigmentation or surgical options for extensive disease

## Q8: Melasma Treatment Strategy
**Q: What is the gold standard therapeutic approach for melasma in Indian patients?**
A: Tretinoin 0.05-0.1% at night + hydroquinone 4% + flucinolone acetonide 0.01% + strict SPF 30+ sunscreen; combination yields better results

## Q9: Pemphigus Vulgaris Therapy
**Q: What is the initial systemic treatment for pemphigus vulgaris?**
A: Prednisolone 1-2 mg/kg daily initially; taper gradually; add steroid-sparing agent (azathioprine 1-2 mg/kg or mycophenolate mofetil 1-3g/day) to minimize long-term steroid exposure

## Q10: Lichen Planus Management
**Q: How would you treat isolated lesions of lichen planus versus extensive oral/mucosal disease?**
A: Isolated: intralesional triamcinolone 10 mg/mL; Extensive: systemic prednisolone 0.5-1 mg/kg ± retinoid (acitretin) for refractory disease

## Q11: Biologic Agents in Psoriasis
**Q: What are the three major biologic classes used in severe psoriasis, and their targets?**
A: TNF-α inhibitors (infliximab, etanercept), IL-17 inhibitors (secukinumab, ixekizumab), IL-12/23 inhibitors (ustekinumab); used for >10% BSA or significant QOL impact

## Q12: TB Screening Before Biologic
**Q: Why is TB screening mandatory before starting TNF-α inhibitor therapy?**
A: TNF-α critical for granuloma formation; TNF inhibitors increase TB risk 4-6 fold; screen with TB skin test + CXR in all patients, especially in high-prevalence areas like India

## Q13: Antibiotic Resistance Prevention
**Q: Why does combination of benzoyl peroxide with topical antibiotics prevent resistance in acne?**
A: Benzoyl peroxide is bacteriostatic and has no resistance risk; using together prevents emergence of resistant Cutibacterium acnes strains during antibiotic therapy

## Q14: Antifungal Selection
**Q: How would you choose between topical azole, terbinafine, and systemic therapy for onychomycosis?**
A: Topical: limited penetration, mainly for prevention; Terbinafine topical: 48% cure for toenail; Systemic terbinafine 250mg daily × 6-12 weeks: highest cure rate (70-80%)

## Q15: Calcineurin Inhibitors vs Steroids
**Q: What is the advantage of tacrolimus/pimecrolimus over topical corticosteroids for atopic dermatitis on the face?**
A: Non-atrophogenic (safe for long-term face use); no systemic immunosuppression; mechanism different from steroids (NFAT blockade); useful for steroid-sparing approach`,
        mnemonics: [
          { text: "BPO-Tret-AB = Acne without resistance", explanation: "Triple therapy prevents antibiotic resistance" },
          { text: "Tret-HQ-SPF = Melasma in India", explanation: "Essential combination for Indian population" },
          { text: "NBUVB: 75-80% MED, 2-3x weekly, 10-20% ↑", explanation: "Safe phototherapy protocol" },
          { text: "Isotretinoin = 20 mg/kg cumulative, pregnancy test monthly", explanation: "Critical dosing and monitoring" }
        ],
        keyPoints: [
          "Potency classification: Superpotent > Potent > Moderate > Mild; match to body site",
          "Retinoids (tretinoin > adapalene) normalize differentiation; expect retinization initially",
          "Isotretinoin: highest efficacy for cystic acne; strict pregnancy prevention essential",
          "NBUVB: 2-3x weekly, 8-12 weeks minimum; safe and effective for psoriasis/vitiligo",
          "Melasma: tretinoin + hydroquinone + sunscreen; high prevalence in Indian population",
          "Pemphigus: systemic corticosteroid + steroid-sparing agent early",
          "Biologics: reserved for severe disease; TB screening mandatory in India"
        ],
        textbookRefs: [
          { book: "IADVL Textbook of Dermatology", chapter: "5 - Therapeutics", edition: "4th" },
          { book: "Roxburgh's Common Skin Diseases", chapter: "Treatment and Management", edition: "20th" }
        ],
      },
    ],
  },

  // DR-MOD-03-TOP-05: Autoimmune Skin Diseases
  {
    topicCode: "DR-MOD-03-TOP-05",
    layers: [
      {
        layer: 1,
        slug: "autoimmune-skin-diseases-layer-1-foundation",
        title: "Autoimmune Skin Diseases - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of autoimmune bullous diseases including pemphigus, pemphigoid, dermatitis herpetiformis, and lupus skin manifestations.",
        contentMd: `# Autoimmune Skin Diseases - Foundation

## Pemphigus Group
- **Definition**: Autoimmune bullous disease with antibodies against desmogleins (desmosomal adhesion molecules)
- **Pemphigus vulgaris**: Most common; anti-desmoglein 3 (mucosal) ± anti-desmoglein 1 (cutaneous)
- **Pemphigus foliaceus**: Anti-desmoglein 1 only; superficial intraepidermal acantholysis
- **Paraneoplastic pemphigus**: Associated with malignancy; antibodies to unknown antigens
- **Clinical presentation**: Flaccid bullae, erosions, positive Nikolsky sign, mucosal involvement common in vulgaris
- **Pathology**: Intraepidermal acantholysis (cell-to-cell separation); loss of desmosomal adhesion

## Bullous Pemphigoid
- **Definition**: Autoimmune bullous disease with antibodies against basement membrane zone antigens (BP180, BP230)
- **Epidemiology**: Affects elderly (>60 years); dermatitis herpetiformis more common in celiac disease patients
- **Clinical presentation**: Tense bullae on normal or erythematous base; urticarial or eczematous lesions may precede bullae
- **Distribution**: Flexural areas (axillae, groin, antecubital/popliteal fossae), abdomen, inner thighs
- **Pathology**: Subepidermal blister with linear IgG/C3 at basement membrane zone
- **Prognosis**: Slower progression than pemphigus; can remit spontaneously

## Dermatitis Herpetiformis
- **Association**: 75-100% associated with celiac disease (gluten-sensitive enteropathy)
- **Mechanism**: Gluten-triggered IgA immune complex deposition at dermal-epidermal junction
- **Clinical features**: Intensely pruritic papulovesicles in grouped arrangement; symmetrical distribution on extensor surfaces
- **Nikolsky sign**: Negative (unlike pemphigus); bullae are subepidermal
- **Diagnosis**: Skin biopsy with IgA immunofluorescence at dermoepidermal junction
- **Treatment**: Dapsone for dermatitis; gluten-free diet essential for underlying celiac disease

## Lupus Skin Manifestations
- **Acute cutaneous lupus**: Malar ("butterfly") rash, photosensitive
- **Subacute cutaneous lupus**: Annular or polycyclic lesions on sun-exposed areas
- **Chronic cutaneous lupus (Discoid lupus)**: Follicular plugging, atrophy, scarring (DLE); may progress to systemic involvement
- **Systemic manifestations**: Arthralgia/arthritis (90%), renal involvement (50%), photosensitivity
- **Diagnostic criteria**: ANA positive (95%); anti-dsDNA (systemic lupus); anti-Ro/La (cutaneous lupus)
- **Histology**: Interface dermatitis (basal layer vacuolization), dermal lymphoid infiltrate

## Linear IgA Disease
- **Definition**: Autoimmune bullous disease with linear IgA deposition at basement membrane zone
- **Epidemiology**: Can occur at any age; drug-induced (sulfonamides, NSAIDs) or idiopathic
- **Clinical features**: Vesicles, bullae, urticarial lesions; "string of pearls" appearance on immunofluorescence
- **Pathology**: Subepidermal blister with linear IgA along basement membrane
- **Treatment**: Dapsone or sulfapyridine; discontinue offending drug

## Epidermolysis Bullosa (EB)
- **EB Simplex (EBS)**: Intraepidermal blistering; autosomal dominant; associated with keratin mutations
- **Bullous Pemphigoid Antigen-deficient (BP-ag):**: Subepidermal blistering; due to collagen XVII/BP180 mutations
- **Epidermolysis Bullosa Acquisita (EBA)**: Acquired autoimmune to type VII collagen; subepidermal scarring blisters
- **Classification**: Based on level of cleavage (intra vs sub-basal); inheritance pattern; gene mutations

## Systemic Sclerosis Skin Changes
- **Localized scleroderma (Morphea)**: Single or multiple indurated plaques; no systemic involvement
- **Linear scleroderma**: Line-like sclerosis following Blaschko's lines; may involve muscle/bone
- **Systemic sclerosis (SSc)**: Generalized skin thickening, fibrosis, vascular changes; systemic multi-organ involvement
- **Pathology**: Excessive collagen deposition, fibroblast activation, vascular injury
- **CREST syndrome**: Calcinosis, Raynaud's, Esophageal dysmotility, Sclerodactyly, Telangiectasia`,
        mnemonics: [
          { text: "PEMPHIGUS = Intra-epidermal, PEMPHIGOID = Sub-basal", explanation: "Anatomic distinction of bulla location" },
          { text: "Pemphigus = FLACCID + Nikolsky +ve; Pemphigoid = TENSE + Nikolsky -ve", explanation: "Clinical differentiation" },
          { text: "DH = Gluten sensitivity + IgA at DEJ", explanation: "Celiac-associated dermatitis herpetiformis" },
          { text: "Lupus: Malar rash + ANA +ve + dsDNA = SLE", explanation: "Diagnostic criteria correlation" }
        ],
        keyPoints: [
          "Pemphigus: antibodies to desmogleins; intraepidermal acantholysis; flaccid bullae",
          "Pemphigoid: antibodies to BP antigens; subepidermal blister; tense bullae",
          "Dermatitis herpetiformis: IgA complex deposition; 100% celiac disease association; treat with dapsone + gluten-free diet",
          "Lupus: malar rash, photosensitivity, ANA/dsDNA positive; interface dermatitis on biopsy",
          "Linear IgA disease: linear IgA at BMZ; can be drug-induced; treat with dapsone",
          "Bullous EB: genetic; EBA acquired and scarring; based on level of blistering"
        ],
        textbookRefs: [
          { book: "IADVL Textbook of Dermatology", chapter: "14 - Bullous Diseases", edition: "4th" },
          { book: "Roxburgh's Common Skin Diseases", chapter: "Bullous Disorders", edition: "20th" },
          { book: "Rook's Textbook of Dermatology", chapter: "Autoimmune Bullous Diseases", edition: "9th" }
        ],
      },
      {
        layer: 2,
        slug: "autoimmune-skin-diseases-layer-2-mechanism",
        title: "Autoimmune Skin Diseases - Mechanism",
        estimatedMinutes: 25,
        summary: "Molecular mechanisms of autoimmune bullous diseases and systemic autoimmune skin conditions.",
        contentMd: `# Autoimmune Skin Diseases - Mechanism

## Pemphigus Pathogenesis
- **Autoantigen**: Desmogleins (desmoglein 1, desmoglein 3) are transmembrane adhesion molecules in desmosomes
- **Antibody production**: IgG antibodies bind extracellular domains of desmogleins; disrupt cell-cell adhesion
- **Acantholysis mechanism**: Antibody binding causes loss of desmosomal function → keratinocyte separation → intraepidermal cavity formation
- **Desmoglein compensation**: Desmoglein 1 and 3 have compensatory roles; anti-Dsg3 alone = mucosal; anti-Dsg1 + anti-Dsg3 = mucocutaneous
- **Breadth of disease**: Antibody titer correlates with disease severity; IgG4 subclass most pathogenic
- **Complement activation**: Antibody-mediated complement activation contributes to inflammation

## Bullous Pemphigoid Pathogenesis
- **Autoantigens**: BP180 (collagen XVII) and BP230 are structural components of hemidesmosomes
- **Antibody binding**: IgG anti-BP180 or anti-BP230 antibodies bind antigens at basement membrane zone
- **Mechanism**: Linear IgG deposition activates complement (C3) → recruitment of neutrophils/eosinophils → protease release → separation at BMZ
- **Subepidermal blister**: Cleavage occurs between basal keratinocytes and basement membrane (sub-basal location)
- **Tense bullae**: BP remains intact forming roof of blister (unlike pemphigus)
- **Serology**: Circulating IgG to BP antigens; titer less predictive of disease severity than in pemphigus

## Dermatitis Herpetiformis Pathogenesis
- **Gluten sensitivity**: Gluten peptides cross-reactive with tissue transglutaminase (tTG); activate intestinal immune response
- **IgA production**: Tissue-specific IgA immune complexes (IgA anti-tTG) deposit at dermal-epidermal junction
- **Cutaneous manifestation**: Deposited IgA at DEJ triggers complement activation → neutrophil recruitment → vesicle formation
- **Molecular mimicry**: Gluten epitopes similar to epidermal tTG; cross-reactive B and T cells drive response
- **GI involvement**: Villous atrophy, crypt hyperplasia in 75% (overt celiac) to 100% (latent/potential celiac)
- **IgA deficiency**: 2-3% of patients have selective IgA deficiency; increased risk of severe disease

## Lupus Erythematosus Pathogenesis
- **Loss of tolerance**: Breakdown of self-tolerance to nuclear antigens (DNA, histones, RNA)
- **Autoantibody production**: IgG anti-dsDNA (most specific); IgG anti-Ro/La (cutaneous lupus); IgG anti-nucleosome
- **Immune complex deposition**: IgG-DNA complexes deposit in skin, kidneys, vessels
- **Complement activation**: Classical pathway activation (C1q, C3, C4 consumption); neutrophil infiltration
- **Photosensitivity**: UVB causes upregulation of autoantigens; direct and immune complex-mediated photodamage
- **Interface dermatitis**: T cell infiltration at dermal-epidermal junction; keratinocyte death and basal layer vacuolization

## Linear IgA Disease Pathogenesis
- **Target antigen**: Basement membrane zone antigens (BP180, BP230, other unknown antigens)
- **IgA-mediated immunity**: IgA deposits (often IgA1) at BMZ; complement activation and neutrophil infiltration
- **Drug-induced form**: Sulfonamides, NSAIDs can trigger cross-reactive IgA response
- **"String of pearls"**: Characteristic linear deposits of IgA antigen are arranged in a string-like pattern

## Systemic Sclerosis Pathogenesis
- **Fibroblast activation**: TGF-β and CTGF overexpression → fibroblast proliferation and transformation to myofibroblasts
- **Excessive collagen deposition**: Type I and III collagen accumulation in dermis and subcutaneous tissue
- **Vascular injury**: Raynaud's phenomenon from endothelial cell damage and capillary loss
- **Autoimmunity**: Anti-centromere antibodies (limited SSc); anti-topoisomerase I/anti-Scl-70 (diffuse SSc)
- **Immune infiltrate**: Early T cell and B cell infiltration in affected skin; CD4 and CD8 T cells predominate

## Pemphigoid Gestationis
- **Mechanism**: IgG anti-BP180 antibodies triggered by pregnancy; may exacerbate existing pemphigoid
- **Correlation**: Antibody titer correlates with disease activity
- **Flares**: Often improves in third trimester despite increasing titer (tolerance-related)
- **Neonatal involvement**: Passive transfer of maternal IgG; transient neonatal blisters resolve in 3 weeks`,
        mnemonics: [
          { text: "Pemphigus: Anti-Dsg → lose adhesion → intra-epidermal", explanation: "Desmogleins regulate cell-to-cell adhesion" },
          { text: "Pemphigoid: Anti-BP180 → complement activation → sub-basal split", explanation: "Hemidesmosome-mediated blister" },
          { text: "DH: Gluten → IgA-tTG complex → DEJ deposit", explanation: "Celiac-driven IgA deposition" },
          { text: "Lupus: DNA → IgG-DNA complex → IC deposition → interface dermatitis", explanation: "Immune complex-mediated inflammation" }
        ],
        keyPoints: [
          "Pemphigus: IgG antibodies to desmogleins; loss of cell-cell adhesion; intraepidermal acantholysis",
          "Pemphigoid: IgG/IgA antibodies to hemidesmosomal proteins; complement-mediated subepidermal blister",
          "DH: IgA-gluten complex deposition at DEJ; 100% celiac disease association",
          "Lupus: IgG-DNA complex deposition; complement activation; interface dermatitis with keratinocyte damage",
          "Systemic sclerosis: TGF-β mediated fibroblast activation; excessive collagen deposition; vascular injury",
          "Serology: Antibody titers guide diagnosis; IgG in pemphigus/pemphigoid; IgA in DH; ANA/dsDNA in lupus"
        ],
        textbookRefs: [
          { book: "IADVL Textbook of Dermatology", chapter: "14 - Bullous Diseases", edition: "4th" },
          { book: "Robbins & Kumar Pathologic Basis of Disease", chapter: "25 - Skin Disorders", edition: "10th" }
        ],
      },
      {
        layer: 3,
        slug: "autoimmune-skin-diseases-layer-3-clinical",
        title: "Autoimmune Skin Diseases - Clinical",
        estimatedMinutes: 25,
        summary: "Clinical presentation, diagnosis, and management of autoimmune skin diseases with Indian context.",
        contentMd: `# Autoimmune Skin Diseases - Clinical

## Pemphigus Vulgaris in Indian Population
- **High prevalence**: Common in India; affects younger adults (30-60 years) compared to Western countries
- **Presentation**: Flaccid bullae with erosions; often starts with oral mucosa (90% have oral involvement)
- **Examination**: Nikolsky sign positive; erosions with granulation base; secondary infection common in hot-humid climate
- **Diagnosis**: Tzanck smear (acantholytic cells); skin biopsy with IgG intercellular deposition (IgG "tombstone" pattern)
- **Serology**: Anti-desmoglein 3 (mucosal); anti-desmoglein 1 (cutaneous)
- **Course**: Severe disease untreated; chronic relapsing course; mortality high without treatment
- **Complications**: Secondary bacterial infection, esophageal involvement, laryngeal involvement (life-threatening)

## Pemphigus Foliaceus
- **Variant**: Superficial intraepidermal blistering at granular layer; less severe than vulgaris
- **Serology**: Anti-desmoglein 1 only; no mucosal involvement typically
- **Clinical**: Flaccid bullae rupture easily; extensive erosions and crusting
- **Variants**: Fogo selvagem (endemic in Brazil); drug-induced (penicillamine)
- **Management**: Systemic corticosteroid + steroid-sparing agents

## Bullous Pemphigoid in India
- **Elderly population**: Typically >60 years; more common than pemphigus in Western countries
- **Presentation**: Tense bullae on urticarial or eczematous base; flexural predilection
- **Prognosis**: Better than pemphigus; can remit spontaneously; mortality low
- **Associated conditions**: Hypertension (common in elderly); drug triggers (ACE inhibitors, diuretics)
- **Management**: Topical steroid (potent) for localized; systemic corticosteroid (0.5-1 mg/kg) for extensive disease; steroid-sparing agents not always needed

## Dermatitis Herpetiformis Management
- **Gluten-free diet**: Essential first-line treatment; addresses underlying celiac disease
- **Dapsone**: 100 mg daily for dermatitis control; usually not needed if strict gluten-free diet maintained
- **Monitoring**: Baseline G6PD level (dapsone-induced hemolysis risk); CBC monitoring monthly initially
- **Celiac screening**: Screen all cases with serologic tests (anti-tTG, EMA); GI biopsy if positive
- **Follow-up**: Long-term gluten-free diet compliance improves outcome; dermatitis resolves over 2-3 weeks of dapsone

## Lupus Erythematosus Clinical Management
- **Cutaneous lupus**: Often photosensitive (UVB, UVA); strict photoprotection essential
- **Acute cutaneous lupus**: Malar rash usually improves with sun avoidance and topical/systemic corticosteroid
- **Discoid lupus**: Localized form; risk of scarring alopecia; may have systemic features; treat with hydroxychloroquine 200-400 mg daily
- **Systemic lupus erythematosus**: Screen for organ involvement; renal biopsy if hematuria/proteinuria; treat with hydroxychloroquine + corticosteroid ± immunosuppressive agents
- **Drug-induced lupus**: Procainamide, hydralazine, isoniazid; resolves with drug discontinuation

## Indian Clinical Context - Autoimmune Bullous Diseases
- **Hot-humid climate**: Increased risk of secondary bacterial infection; patient education on skin hygiene essential
- **Socioeconomic factors**: Limited access to immunosuppressive agents; systemic corticosteroid burden high
- **Prevalence pattern**: Pemphigus vulgaris more common than pemphigoid in India (reverse of Western pattern)
- **Treatment approach**: Oral prednisolone most accessible; biologic agents (rituximab) limited to specialized centers
- **Comorbidities**: Tuberculosis screening essential before biologic therapy; latent TB reactivation risk

## Management Approach by Disease
- **Pemphigus vulgaris**:
  - Mild (localized oral/skin lesions): Oral prednisolone 0.5-1 mg/kg/day; taper over months
  - Moderate-severe: Systemic prednisolone 1-2 mg/kg/day + azathioprine 1-2 mg/kg/day
  - Severe/refractory: Add mycophenolate (1-3 g/day) or rituximab (375 mg/m²)

- **Bullous pemphigoid**:
  - Localized: Topical corticosteroid (potent) alone often sufficient
  - Extensive: Systemic prednisolone 0.5-1 mg/kg/day; taper based on control
  - Steroid-sparing: Dapsone 100-150 mg/day; azathioprine if dapsone fails

- **Dermatitis herpetiformis**:
  - Strict gluten-free diet (addresses underlying celiac)
  - Dapsone 100 mg/day for immediate symptom control
  - Discontinue dapsone after 3-6 months if GI improved and diet compliant

- **Lupus erythematosus**:
  - Cutaneous: Photoprotection (SPF 50+, UPF clothing), topical/intralesional steroid, hydroxychloroquine 200-400 mg/day
  - Systemic: Hydroxychloroquine + corticosteroid (minimize long-term dose) ± immunosuppressive agents`,
        mnemonics: [
          { text: "Pemphigus: Flaccid + Nikolsky +ve + oral involvement", explanation: "Clinical diagnostic triad" },
          { text: "Pemphigoid: Tense + Nikolsky -ve + elderly", explanation: "Distinguishing features from pemphigus" },
          { text: "DH: Pruritus + IgA at DEJ + gluten-free diet", explanation: "Key management distinction" },
          { text: "Lupus: Malar + ANA + dsDNA = screen SLE", explanation: "Cutaneous to systemic evaluation" }
        ],
        keyPoints: [
          "Pemphigus vulgaris: high prevalence in India; systemic corticosteroid mandatory; steroid-sparing agents early",
          "Bullous pemphigoid: elderly; localized disease may respond to topical steroid; better prognosis than pemphigus",
          "DH: gluten-free diet + dapsone; screen for celiac disease; 100% association rate",
          "Cutaneous lupus: photoprotection essential; hydroxychloroquine first-line; screen for SLE",
          "Discoid lupus: risk of scarring alopecia; localized or can transition to SLE",
          "Secondary infection risk high in India's hot-humid climate; patient hygiene education critical",
          "Biologic agents (rituximab) for refractory disease; TB screening essential before therapy"
        ],
        textbookRefs: [
          { book: "IADVL Textbook of Dermatology", chapter: "14 - Bullous Diseases", edition: "4th" },
          { book: "Roxburgh's Common Skin Diseases", chapter: "Bullous Disorders and Lupus", edition: "20th" }
        ],
      },
      {
        layer: 4,
        slug: "autoimmune-skin-diseases-layer-4-exam",
        title: "Autoimmune Skin Diseases - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield facts and clinical pearls for autoimmune bullous disease exams.",
        contentMd: `# Autoimmune Skin Diseases - Exam Prep

## Diagnostic Pearls
- **Nikolsky sign**: Epidermal separation with gentle rubbing; positive in pemphigus and TEN, negative in pemphigoid
- **Tzanck smear**: Acantholytic cells (keratinocyte detachment) seen in pemphigus and herpes; acantholytic cells = intercellular adhesion loss
- **Immunofluorescence patterns**:
  - Pemphigus: IgG intercellular (intraepidermal) deposition
  - Pemphigoid: IgG/C3 linear at basement membrane zone
  - Dermatitis herpetiformis: IgA granular at dermal-epidermal junction
  - Lupus: IgG/IgM/C3 at dermoepidermal junction

## Antibody Serology
- **Pemphigus vulgaris**: Anti-desmoglein 3 (mucosal component); anti-desmoglein 1 (cutaneous component)
- **Pemphigus foliaceus**: Anti-desmoglein 1 only
- **Bullous pemphigoid**: Anti-BP180 or anti-BP230
- **Dermatitis herpetiformis**: Anti-tTG IgA (tissue transglutaminase)
- **Lupus erythematosus**: ANA positive (95%); anti-dsDNA (systemic lupus); anti-Ro/La (cutaneous lupus)

## Histopathology
- **Pemphigus**: Intraepidermal acantholysis; "tombstone" appearance on H&E; desmosomes lost
- **Pemphigoid**: Subepidermal blister; tense bullae with intact basement membrane zone
- **Dermatitis herpetiformis**: Subepidermal vesicles; dermal papillary microabscesses; IgA at DEJ
- **Lupus**: Interface dermatitis; basal layer vacuolization; dermal lymphoid infiltrate

## Common Exam Mistakes
- **Confusing flaccid vs tense**: Pemphigus = flaccid (rupture easily, erosions), pemphigoid = tense (intact roof)
- **Nikolsky sign interpretation**: Positive in pemphigus AND TEN; not specific to pemphigus
- **DH-celiac association**: 75-100% have celiac disease; gluten-free diet is essential first-line treatment
- **Lupus vs other rashes**: Malar rash is photosensitive but not pathognomonic; discoid can scar permanently
- **Serology misinterpretation**: Antibody TITER not always correlate with disease severity (except pemphigus)

## High-Yield Facts for NMC
- **Pemphigus vulgaris**: Most common autoimmune bullosis in India; flaccid bullae; oral involvement; IgG anti-Dsg3/1
- **Bullous pemphigoid**: Elderly; tense bullae; IgG/C3 at BMZ; better prognosis than pemphigus
- **Dermatitis herpetiformis**: IgA gluten complex at DEJ; 100% celiac association; dapsone + gluten-free diet
- **Lupus**: ANA/dsDNA positive; photosensitive; interface dermatitis; screen for SLE
- **Initial screening**: Skin biopsy for H&E and immunofluorescence; serology (anti-Dsg, anti-BP, anti-tTG, ANA)

## Severity and Prognosis
- **Pemphigus vulgaris**: Severe if untreated; mortality can reach 5-30% without treatment; improves markedly with systemic corticosteroid
- **Bullous pemphigoid**: Prognosis better; can spontaneously remit; mortality <5% even without intensive therapy
- **Dermatitis herpetiformis**: Excellent prognosis with gluten-free diet; dapsone hastens symptom resolution
- **Lupus cutaneous**: Variable; acute cLELE usually improves; discoid DLE risk of scarring and SLE progression

## Management Principles
- **Pemphigus**: Prednisolone 1-2 mg/kg initially; taper slowly; add azathioprine (1-2 mg/kg) or mycophenolate (1-3 g/day)
- **Pemphigoid**: Prednisolone 0.5-1 mg/kg; steroid-sparing agents not always needed; taper gradually
- **DH**: Gluten-free diet (primary); dapsone 100 mg/day for quick control; baseline G6PD before dapsone
- **Lupus**: Hydroxychloroquine 200-400 mg/day; topical/systemic corticosteroid; minimize long-term steroid dose

## Biologic Therapy Indications
- **Pemphigus**: Rituximab (anti-CD20) for severe refractory disease; reduces relapse rate
- **Pembrolizumab/other anti-PD-L1**: Rarely used; reserved for rituximab-refractory cases
- **Bullous pemphigoid**: Omalizumab (anti-IgE) for refractory disease; experimental
- **Lupus**: Belimumab (anti-BLyS) for moderate-severe SLE with lupus nephritis`,
        mnemonics: [
          { text: "Nikolsky +ve = Pemphigus or TEN", explanation: "Positive in both; not specific" },
          { text: "Dsg3+1 = Vulgaris; Dsg1 only = Foliacus", explanation: "Desmoglein antibody pattern" },
          { text: "BP180+230 = Pemphigoid antigen", explanation: "Hemidesmosomal proteins" },
          { text: "IgA-DEJ = DH + gluten-free diet", explanation: "IgA deposition site and treatment" }
        ],
        keyPoints: [
          "Nikolsky sign positive in pemphigus (intraepidermal) and TEN (necrosis); not specific",
          "Pemphigus serology: Dsg3 = mucosal; Dsg3+1 = mucocutaneous",
          "Bullous pemphigoid: IgG/C3 linear at BMZ; tense bullae; better prognosis than pemphigus",
          "DH: IgA at DEJ; 75-100% celiac disease; gluten-free diet resolves dermatitis",
          "Lupus: ANA 95% sensitive; anti-dsDNA specific for SLE; malar rash photosensitive",
          "Initial workup: Skin biopsy (H&E + IF) + serology (anti-Dsg, anti-BP, anti-tTG, ANA)",
          "Pemphigus prednisolone 1-2 mg/kg with early steroid-sparing agents"
        ],
        textbookRefs: [
          { book: "IADVL Textbook of Dermatology", chapter: "14 - Bullous Diseases", edition: "4th" },
          { book: "Roxburgh's Common Skin Diseases", chapter: "Bullous Disorders", edition: "20th" }
        ],
      },
      {
        layer: 5,
        slug: "autoimmune-skin-diseases-layer-5-active-recall",
        title: "Autoimmune Skin Diseases - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard Q&A for rapid recall of diagnostic criteria and management of autoimmune bullous diseases.",
        contentMd: `# Autoimmune Skin Diseases - Active Recall Flashcards

## Q1: Pemphigus Diagnosis
**Q: What are the clinical and histologic features that distinguish pemphigus vulgaris from bullous pemphigoid?**
A: Pemphigus: flaccid bullae, positive Nikolsky, oral involvement, intraepidermal acantholysis on H&E, IgG intercellular on IF; Pemphigoid: tense bullae, negative Nikolsky, flexural distribution, subepidermal blister on H&E, IgG/C3 linear at BMZ on IF

## Q2: Desmoglein Antibodies
**Q: What is the difference between anti-desmoglein 3 and anti-desmoglein 1 serology in pemphigus?**
A: Anti-Dsg3 alone = mucosal dominant (pemphigus vulgaris type 1); Anti-Dsg3 + Anti-Dsg1 = mucocutaneous (pemphigus vulgaris type 2); Anti-Dsg1 alone = foliaceus (superficial)

## Q3: Dermatitis Herpetiformis Pathogenesis
**Q: Why is dermatitis herpetiformis always associated with celiac disease, and what serologic finding confirms this?**
A: Gluten-reactive IgA immune complexes deposit at dermal-epidermal junction; 75% overt, 25% latent/potential celiac; serology: anti-tTG IgA and IgA anti-endomysium positive; GI biopsy shows villous atrophy

## Q4: Bullous Pemphigoid in Elderly
**Q: A 75-year-old presents with tense bullae on flexural areas. What is the initial management?**
A: Topical corticosteroid (potent) alone for localized disease; oral prednisolone 0.5-1 mg/kg/day for extensive involvement; baseline serology (anti-BP180/BP230); slow taper as disease improves

## Q5: Systemic Lupus Erythematosus Serology
**Q: What is the most sensitive and most specific antibody test for systemic lupus erythematosus?**
A: Most sensitive = ANA (95% in SLE); Most specific = anti-dsDNA (70-90% in SLE); Anti-Ro/La often positive in cutaneous lupus without systemic disease

## Q6: Discoid Lupus Erythematosus Management
**Q: A patient has scarring alopecia with follicular plugging. Skin biopsy confirms discoid lupus. What is the risk of SLE progression?**
A: 5-10% of discoid lupus patients develop systemic lupus erythematosus; screen with ANA and anti-dsDNA; treat with hydroxychloroquine 200-400 mg daily + photoprotection (SPF 50+)

## Q7: Dapsone in Dermatitis Herpetiformis
**Q: Why must G6PD testing be done before starting dapsone for dermatitis herpetiformis?**
A: Dapsone causes oxidative hemolysis in G6PD-deficient individuals (high prevalence in Mediterranean, African, Asian populations); baseline G6PD level required; monitor CBC monthly while on dapsone

## Q8: Photoprotection in Lupus
**Q: A patient with acute cutaneous lupus has photosensitive malar rash. What is the photoprotection recommendation?**
A: SPF 50+ broad-spectrum (UVA + UVB) sunscreen; UPF clothing recommended; minimize sun exposure 10am-4pm; recommend topical corticosteroid or hydroxychloroquine for persistent rash

## Q9: Pemphigus Steroid-Sparing Strategy
**Q: What is the role of azathioprine in pemphigus vulgaris, and when should it be started?**
A: Azathioprine 1-2 mg/kg/day or mycophenolate 1-3 g/day reduces long-term corticosteroid dose; started early (within 1-2 weeks of prednisolone initiation) to minimize steroid side effects; effect takes 2-4 weeks

## Q10: Linear IgA Disease
**Q: How does linear IgA disease differ from dermatitis herpetiformis and bullous pemphigoid on immunofluorescence?**
A: Linear IgA disease: linear IgA (not IgG) at BMZ; "string of pearls" appearance; can be drug-induced (sulfonamides); DH: granular IgA at DEJ; Pemphigoid: linear IgG ± C3 at BMZ

## Q11: Pemphigus in Pregnancy
**Q: A pregnant woman presents with pemphigus vulgaris at 20 weeks. How should this be managed?**
A: Prednisolone safe in pregnancy (especially at high dose); risk of fetal exposure to antibodies (passive transfer); increase prednisolone dose if flare during pregnancy; neonatal pemphigus may occur but usually transient (resolves in 3-4 weeks)

## Q12: Epitope Spreading in Pemphigus
**Q: What is epitope spreading in pemphigus, and how does it affect disease progression?**
A: Epitope spreading = expansion of antibody response from anti-Dsg3 alone to include anti-Dsg1 (increasing disease severity); correlates with transition from mucosal to mucocutaneous disease; treated by increasing systemic corticosteroid and early steroid-sparing agent

## Q13: Lupus Erythematosus Variants
**Q: Compare acute cutaneous lupus, subacute cutaneous lupus, and chronic discoid lupus in terms of distribution, photosensitivity, and SLE progression.**
A: Acute (malar, photosensitive, 50% SLE); Subacute (annular/polycyclic, sun-exposed, 10% SLE); Chronic discoid (localized or generalized, scarring, 5% SLE); anti-Ro/La common in cutaneous forms without SLE

## Q14: Calcininurin Inhibitors vs Corticosteroids
**Q: Why might tacrolimus be preferred over topical corticosteroid for face lesions in bullous pemphigoid?**
A: Tacrolimus (non-atrophogenic) safe for long-term face use; corticosteroid causes atrophy with prolonged use; tacrolimus mechanism: NFAT blockade (reduces T cell cytokine production); effective as steroid-sparing agent`,
        mnemonics: [
          { text: "Dsg3 = oral; Dsg3+1 = oral+skin; Dsg1 = skin only", explanation: "Desmoglein pattern-disease phenotype" },
          { text: "Flaccid+Nikolsky+oral = Pemphigus; Tense+negative+flexural = Pemphigoid", explanation: "Clinical differentiation" },
          { text: "DH: Gluten → IgA-tTG deposit → intensely pruritic", explanation: "Celiac-driven pathology" },
          { text: "Lupus: ANA (sensitive) vs dsDNA (specific)", explanation: "Serology interpretation" }
        ],
        keyPoints: [
          "Pemphigus: intraepidermal, flaccid, Nikolsky +ve, IgG intercellular, anti-Dsg antibodies",
          "Pemphigoid: subepidermal, tense, Nikolsky -ve, IgG/C3 linear at BMZ, anti-BP antibodies",
          "DH: IgA granular at DEJ, 100% celiac, dapsone + gluten-free diet, G6PD screening required",
          "Lupus: ANA/dsDNA, photosensitive, interface dermatitis, screen for systemic involvement",
          "Serology guides diagnosis: anti-Dsg (pemphigus), anti-BP (pemphigoid), IgA anti-tTG (DH), ANA/dsDNA (lupus)",
          "Steroid-sparing agents early in pemphigus to minimize long-term corticosteroid burden"
        ],
        textbookRefs: [
          { book: "IADVL Textbook of Dermatology", chapter: "14 - Bullous Diseases", edition: "4th" },
          { book: "Roxburgh's Common Skin Diseases", chapter: "Bullous Disorders", edition: "20th" }
        ],
      },
    ],
  },

  // DR-MOD-05-TOP-03: Pigmentary Disorders
  {
    topicCode: "DR-MOD-05-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "pigmentary-disorders-layer-1-foundation",
        title: "Pigmentary Disorders - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of pigmentary disorders including vitiligo, melasma, albinism, and post-inflammatory pigmentary changes.",
        contentMd: `# Pigmentary Disorders - Foundation

## Vitiligo
- **Definition**: Acquired depigmentation disorder with loss of functional melanocytes
- **Epidemiology**: 0.5-2% global prevalence; very high in India (8-9% in some regions); affects all skin types equally
- **Classification**: Localized (patch), generalized (>10% BSA), universal (>80% BSA)
- **Patterns**: Vulgaris (random distribution), segmental (one-sided, non-progressive), focal (single lesion)
- **Clinical features**: Well-demarcated achromic macules/patches; often in flexural areas and around orifices (lips, eyes, genitals)
- **Pathology**: Complete loss of melanocytes; absence of DOPA-positive cells; decreased or absent melanin granules
- **Association**: Autoimmune conditions (thyroid, vitiligo, Addison's disease, alopecia areata in 5-15%)
- **Koebner phenomenon**: New vitiligo lesions can develop at sites of trauma

## Melasma
- **Definition**: Acquired symmetric hypermelanosis disorder
- **Epidemiology**: 90% in women; more common in skin types IV-VI (Fitzpatrick); high prevalence in India, Hispanic, Asian populations
- **Etiology**: UV exposure (primary trigger), hormonal factors (oral contraceptives, HRT), genetic predisposition
- **Patterns**: Centrofacial (62%), malar (26%), mandibular (12%)
- **Clinical features**: Symmetric brown to gray-brown patches on face; sharp demarcation; often with underlying eczema or contact dermatitis
- **Pathology**: Increased melanin in basal and suprabasal keratinocytes; increased melanocyte number/size; increased dermal melanin deposition
- **Relapse rate**: High (40-70%) after successful treatment if sun exposure continued

## Albinism
- **Definition**: Genetically inherited disorder of melanin synthesis
- **Classification**: Oculocutaneous albinism (OCA) types 1-4; Ocular albinism (OA)
- **OCA Type 1**: Tyrosinase-negative; complete lack of pigment in hair, skin, eyes (white skin/hair at birth)
- **OCA Type 2**: Tyrosinase-positive; gradually accumulates pigment; darker skin/hair with time; reduced pigmentation on nevi
- **OCA Type 3**: Reddish-brown tint to hair/skin; variant of type 2
- **OCA Type 4**: SLC45A2 gene mutation; mainly in Asian populations
- **Systemic features**: Visual impairment (nystagmus, photophobia, reduced acuity); increased skin cancer risk
- **Management**: Sun protection, genetic counseling, ophthalmologic monitoring

## Post-Inflammatory Pigmentary Changes
- **Post-inflammatory hyperpigmentation (PIH)**: Hypermelanosis after inflammation; increased dermal/epidermal melanin
- **Common triggers**: Acne, eczema, psoriasis, lichen planus, herpes zoster, thermal burns, laser treatment
- **Prevalence**: More common in darker skin types (Fitzpatrick IV-VI)
- **Time course**: Develops within days to weeks after inflammation; usually resolves over months (3-12 months typically)
- **Post-inflammatory hypopigmentation (PIpH)**: Depigmentation after severe inflammation; loss of melanocyte function
- **Triggers for PIpH**: Severe eczema, pityriasis alba, vitiligo precursor, severe infections
- **Management**: Address underlying condition; sun avoidance; wait for spontaneous resolution

## Addison's Disease Hyperpigmentation
- **Mechanism**: Increased ACTH → melanocyte stimulation → melanosome production
- **Clinical**: Hyperpigmentation in flexural areas, oral mucosa, genitals; non-photodistributed
- **Associated symptoms**: Weakness, weight loss, hypotension, hypoglycemia
- **Diagnosis**: Elevated ACTH, low cortisol; ACTH stimulation test
- **Cutaneous sign**: Hyperpigmentation of oral mucosa and flexural areas

## Hemochromatosis Hyperpigmentation
- **Mechanism**: Iron deposition in melanocytes and dermal macrophages
- **Clinical**: "Bronze" or "slate-gray" appearance; non-blanching; may have associated erythema (hemosiderosis)
- **Associated features**: Cirrhosis, diabetes ("bronze diabetes"), arthropathy, cardiac involvement
- **Diagnosis**: Serum ferritin, transferrin saturation, iron studies, liver biopsy

## Morphea and Localized Scleroderma Hypopigmentation
- **Morphea**: Localized sclerosis with hypopigmentation; induration of dermis
- **Linear scleroderma**: Follows Blaschko's lines; sclerotic and hypopigmented
- **Pathology**: Excessive collagen deposition, fibroblast activation, vascular changes
- **Treatment**: Topical/intralesional corticosteroid; phototherapy for active disease

## Achromia (Vitiliginous Disorders)
- **True vitiligo**: Acquired depigmentation; no melanocytes on biopsy
- **Ash-leaf macule**: Hypopigmented patch in tuberous sclerosis; melanocytes present but inactive
- **Pityriasis alba**: Hypopigmented patches after eczema; minor degree of pigment loss`,
        mnemonics: [
          { text: "VITILIGO = Autoimmune loss of melanocytes", explanation: "Absence of melanocytes on biopsy" },
          { text: "MELASMA = UV + Hormones + Genetics", explanation: "Triple trigger in darker skin types" },
          { text: "ALBINISM = Tyrosinase ↓ (OCA-1) or melanin ↓ (OCA-2)", explanation: "Genetic pigment defect" },
          { text: "PIH = Post-inflammation melanin excess; PIpH = melanocyte loss", explanation: "Opposite pigmentary outcomes" }
        ],
        keyPoints: [
          "Vitiligo: acquired depigmentation, loss of melanocytes, high prevalence in India, associated autoimmunity",
          "Melasma: symmetric facial hypermelanosis, 90% women, related to UV + hormones + genetics, high relapse",
          "Albinism: genetic disorder of melanin synthesis (tyrosinase deficiency in OCA-1); increased skin cancer risk",
          "PIH: develops after inflammation; resolves over months; more common in darker skin types",
          "PIpH: loss of melanocyte function after severe inflammation; may precede vitiligo",
          "Addison's: ACTH-driven hyperpigmentation in flexures and oral mucosa; non-photodistributed",
          "Koebner phenomenon in vitiligo: new lesions at trauma sites; patients need counseling"
        ],
        textbookRefs: [
          { book: "IADVL Textbook of Dermatology", chapter: "21 - Disorders of Pigmentation", edition: "4th" },
          { book: "Roxburgh's Common Skin Diseases", chapter: "Pigmentation Disorders", edition: "20th" },
          { book: "Rook's Textbook of Dermatology", chapter: "Pigmentary Disorders", edition: "9th" }
        ],
      },
      {
        layer: 2,
        slug: "pigmentary-disorders-layer-2-mechanism",
        title: "Pigmentary Disorders - Mechanism",
        estimatedMinutes: 25,
        summary: "Molecular mechanisms of melanocyte function, melanin synthesis, and pathology of pigmentary disorders.",
        contentMd: `# Pigmentary Disorders - Mechanism

## Normal Melanin Synthesis
- **Tyrosinase pathway**: Tyrosine → L-DOPA → dopaquinone → melanin (pheomelanin red/yellow or eumelanin brown/black)
- **Tyrosinase location**: Melanosomal enzyme; requires copper cofactor
- **Melanin transfer**: Melanosomes produced in melanocyte; transferred to keratinocytes via dendrites
- **Melanosome maturation**: Stage I (premelanosomes) → Stage IV (mature melanosomes)
- **Melanocyte density**: ~1000 melanocytes per mm² of epidermis; ratio 1 melanocyte per 10 keratinocytes
- **Skin types**: Melanin type (eu vs pheomelanin) and quantity determine skin type; number of melanocytes similar across races

## Vitiligo Pathogenesis
- **Melanocyte destruction mechanisms**:
  - Autoimmune: Cytotoxic T cells (CD8+) infiltrate; antibodies against tyrosinase, gp100, MART-1
  - Oxidative stress: H2O2 accumulation exceeds catalase capacity; free radicals damage melanocytes
  - Apoptosis: Melanocyte programmed cell death; fas/fas-ligand interaction; caspase activation
- **Leukocyte migration**: Increased expression of adhesion molecules (ICAM-1, ELAM-1) in vitiligo lesions
- **NK cell involvement**: Natural killer cells contribute to melanocyte destruction
- **Segmental vitiligo**: Follows dermatomal/Blaschko distribution; may involve different pathogenesis (somatic mutation, neural dysfunction)
- **Stress and vitiligo**: Psychological stress increases cortisol; may trigger or worsen disease

## Melasma Pathogenesis
- **Melanocyte activation**: UV exposure (UVA, UVB) → increased tyrosinase activity and melanin synthesis
- **Hormonal factors**: Estrogen and progesterone increase MSH (melanocyte-stimulating hormone) production
- **Genetic predisposition**: Family history in 33-50% of cases; more common in certain ethnic groups
- **Dermal melanin**: Key differentiator from other hypermelanosis; melanin accumulation in dermis difficult to treat
- **Inflammation**: Subclinical inflammation increases TNF-α, IL-6, prostaglandins → melanocyte stimulation
- **Matrix metalloproteinases**: Increased MMP-2, MMP-9 in melasma lesions; degrades collagen, increases vascular permeability
- **TGF-β signaling**: Increased TGF-β promotes melanin synthesis and fibroblast activation

## Albinism Molecular Defects
- **OCA Type 1 (Tyrosinase-negative)**: TYR gene mutations; loss of tyrosinase enzyme function; complete block of melanin synthesis
- **OCA Type 2 (Tyrosinase-positive)**: SLC45A2/OCA2 gene mutation; defective melanosomal transporters; reduced melanin production (not absence)
- **OCA Type 3**: TYRP1 gene mutation; tyrosinase-related protein 1 dysfunction; some residual pigment
- **OCA Type 4**: SLC45A2 variant; mainly in Asian populations
- **Oculocutaneous features**: Visual impairment due to foveal hypoplasia and abnormal chiasmal crossing
- **Increased UV sensitivity**: Melanin normally protects from UV damage; albinism increases skin cancer risk 1000-fold in some regions

## Post-Inflammatory Pigmentary Changes Mechanisms
- **PIH mechanism**: Inflammation triggers melanocyte activation (IL-1, TNF-α, MSH); increased melanin synthesis and transfer to keratinocytes
- **PIpH mechanism**: Severe inflammation causes temporary melanocyte dysfunction (not death); gradual recovery over months
- **Dermal PIH**: Some conditions (severe eczema, lichen planus) cause melanophages in dermis; appears dark and persistent
- **Epidermal PIH**: Increased melanin in keratinocytes; resolves faster than dermal involvement
- **Resolution mechanism**: Gradual keratinocyte turnover (28-day cycle); slow transfer of melanosomes away from lesion periphery

## Photoaging and Melasma
- **UVB effects**: Directly damages DNA; activates p53 pathway; induces inflammatory cytokines (TNF-α, IL-1)
- **UVA effects**: Generates reactive oxygen species (ROS); activates MAPK/ERK pathway; increases matrix metalloproteinases
- **Photodamage**: Collagen breakdown, elastosis, angiogenesis; contributes to melasma appearance
- **Microvascular changes**: Increased vascularity in melasma lesions; reflects dermal inflammation

## Sclerotic Pigmentation Disorders
- **Morphea/scleroderma pigmentation**: Loss of melanocytes and melanin due to:
  - Fibrosis-induced ischemia
  - Cytokine-mediated melanocyte suppression (TGF-β, IL-10)
  - Vascular atrophy and reduced blood flow`,
        mnemonics: [
          { text: "Tyrosine → DOPA → dopaquinone → MELANIN", explanation: "Tyrosinase-catalyzed synthesis pathway" },
          { text: "Vitiligo: Autoimmune + Oxidative stress + Apoptosis", explanation: "Triple mechanism of melanocyte destruction" },
          { text: "Melasma: UV + Estrogen + Genetics = Tyrosinase ↑↑", explanation: "Multi-factor melanocyte activation" },
          { text: "OCA-1: NO tyrosinase; OCA-2: ↓ melanin transport", explanation: "Mechanism differentiates albinism types" }
        ],
        keyPoints: [
          "Melanin synthesis: tyrosinase catalyzes tyrosine → DOPA → melanin; rate-limiting step",
          "Vitiligo: immune destruction of melanocytes + oxidative stress + apoptosis",
          "Melasma: UV-induced tyrosinase upregulation + hormonal + genetic factors",
          "Albinism OCA-1: complete tyrosinase deficiency; OCA-2: melanin transport defect (not enzyme)",
          "PIH: melanocyte activation from inflammation; reverses over months as inflammation resolves",
          "PIpH: temporary melanocyte dysfunction (not death); recovery possible over months to years",
          "Dermal melanin (melasma): harder to treat than epidermal melanin"
        ],
        textbookRefs: [
          { book: "IADVL Textbook of Dermatology", chapter: "21 - Disorders of Pigmentation", edition: "4th" },
          { book: "Robbins & Kumar Pathologic Basis of Disease", chapter: "25 - Skin Disorders", edition: "10th" }
        ],
      },
      {
        layer: 3,
        slug: "pigmentary-disorders-layer-3-clinical",
        title: "Pigmentary Disorders - Clinical",
        estimatedMinutes: 25,
        summary: "Clinical management of pigmentary disorders in Indian context with emphasis on vitiligo and melasma.",
        contentMd: `# Pigmentary Disorders - Clinical

## Vitiligo Management in India
- **Disease burden**: Very high prevalence (8-9% in some regions); significant psychosocial impact due to cosmetic concern
- **Initial assessment**:
  - Localized (single/few lesions) vs generalized vs universal
  - Stable vs progressive (Koebner phenomenon assessment)
  - Vitiligo Activity Score (VASI) to measure extent
  - Screen for associated autoimmune conditions (thyroid, pernicious anemia)

- **First-line therapy**:
  - **Localized**: Potent topical corticosteroid (clobetasol 0.05%) or calcineurin inhibitor (tacrolimus 0.1%)
  - **Generalized**: NBUVB phototherapy 2-3 times weekly 5-10 minutes
  - **Combination**: Potent steroid + NBUVB more effective than either alone

- **Systemic corticosteroid**: Oral prednisolone 0.5-1 mg/kg for rapidly progressive vitiligo (Koebner phenomenon present)

- **Phototherapy**:
  - NBUVB (311nm) most effective for generalized vitiligo
  - Excimer laser (308nm) for localized patches (targeted, fewer side effects)
  - PUVA alternative but requires psoralen
  - Duration: 8-12 weeks minimum to assess response; continue for 6-12 months
  - Maintenance: reduce frequency after achieving clearance

- **Newer approaches**:
  - Vitamin D analogs (calcipotriol) topical; potentiates NBUVB effect
  - JAK inhibitors (ruxolitinib): emerging therapy for vitiligo; blocks immune dysfunction
  - Topical afamelanotide + NBUVB (not widely available in India)

- **Depigmentation**: For universal vitiligo (>80% depigmented) unresponsive to repigmentation; hydroquinone 20% or monobenzone
- **Camouflage**: Dermacamouflage cosmetics important for psychosocial support

## Melasma Management in India
- **High prevalence**: Significant burden in Indian population; primarily women of reproductive age
- **Initial counseling**:
  - Sun avoidance critical for response
  - SPF 50+ broad-spectrum sunscreen essential
  - Oral contraceptives and HRT may worsen; discuss alternative contraception if feasible

- **First-line therapy**: Triple combination cream
  - Tretinoin 0.05-0.1% (normalizes keratinization, inhibits tyrosinase)
  - Hydroquinone 4% (tyrosinase inhibitor)
  - Flucinolone acetonide 0.01% (anti-inflammatory steroid)
  - Apply nightly for 3 months; assess response

- **Alternative combinations**:
  - Tretinoin + hydroquinone (if steroid intolerant)
  - Azelaic acid 20% + tretinoin (good for post-inflammatory hyperpigmentation)
  - Kojic acid + glycolic acid (gentler for sensitive skin)

- **Procedural options** (for refractory melasma):
  - **NBUVB phototherapy**: 2-3 times weekly for 8-12 weeks; adjuvant to topical therapy
  - **IPL (intense pulsed light)**: Targets melanin; requires multiple sessions; risk of PIH in darker skin
  - **Fractional laser**: Ablative/non-ablative; promotes collagen remodeling; risk of PIH
  - **Chemical peels**: Superficial glycolic acid peels; repeat every 2-4 weeks
  - **Microdermabrasion**: Minimal benefit; not recommended as first-line

- **Maintenance**: Long-term tretinoin 0.025% 3 times weekly after achieving clearance; continued SPF 50+ sunscreen

## Post-Inflammatory Pigmentary Changes Management
- **PIH (Post-inflammatory hyperpigmentation)**:
  - Address underlying cause (treat acne, eczema, lichen planus)
  - Tretinoin 0.025% nightly (accelerates resolution)
  - Vitamin C serum + SPF 50+ (antioxidant + photoprotection)
  - Azelaic acid 20% (alternative for sensitive skin)
  - Time: Usually resolves spontaneously over 3-12 months
  - Darker skin types more prone; counsel patience

- **PIpH (Post-inflammatory hypopigmentation)**:
  - Usually temporary; reassure patient
  - Gradual resolution over months to years
  - Distinguish from early vitiligo (check DOPA staining, family history)
  - Potent topical steroid may accelerate recovery
  - If persistent, consider NBUVB phototherapy

## Albinism Management in India
- **Genetic counseling**: Autosomal recessive inheritance; 25% recurrence risk in siblings
- **Photoprotection**:
  - Daily broad-spectrum SPF 50+ sunscreen (UVA + UVB)
  - UPF clothing, wide-brim hat, sunglasses with UV protection
  - Avoid sun exposure 10am-4pm
  - Monthly skin examination for precancerous lesions

- **Dermatologic surveillance**: Biopsy any suspicious lesions; early intervention for skin cancer
- **Ophthalmologic care**: Monitor for nystagmus, photophobia, reduced acuity; low-vision aids if needed
- **Psychosocial support**: Address bullying/stigma; counseling if needed

## Addison's Disease
- **Cutaneous presentation**: Hyperpigmentation in flexural areas (neck, axillae, groin), oral mucosa, palms
- **Diagnosis**: Low cortisol, elevated ACTH, failure of cortisol to rise on ACTH stimulation
- **Treatment**: Glucocorticoid + mineralocorticoid replacement; resolves hyperpigmentation
- **Skin manifestations improve**: Gradually with hormone replacement

## Hemochromatosis
- **Cutaneous**: "Bronze" or "slate-gray" appearance from iron deposition; hepatic cirrhosis stigmata
- **Management**: Phlebotomy or chelation therapy; skin color may improve partially
- **Association screening**: Diabetes, arthropathy, cardiac involvement; liver biopsy for cirrhosis assessment

## Indian Clinical Context
- **High vitiligo burden**: Patient counseling essential; address psychosocial impact (depression, anxiety, social isolation)
- **Limited phototherapy access**: Equipment expensive; available in tertiary centers; guide patients to appropriate facilities
- **Delayed melasma response**: Relapse high (40-70%) if sun protection not maintained; emphasize compliance
- **Seasonal variation**: Melasma and vitiligo worsen in summer (India); adjust therapy timing
- **Stigma management**: Vitiligo carries social stigma in India; support groups, cosmetic camouflage important`,
        mnemonics: [
          { text: "Vitiligo: NBUVB 2-3x weekly + Topical steroid/tacrolimus", explanation: "First-line generalized therapy" },
          { text: "VASI = Vitiligo Area and Severity Index", explanation: "Assessment tool for disease extent" },
          { text: "Melasma: Tretinoin + Hydroquinone + Flucinolone (triple) + SPF 50+", explanation: "Gold standard combination" },
          { text: "PIH: Self-limited; tretinoin accelerates resolution", explanation: "Expected course in darker skin" }
        ],
        keyPoints: [
          "Vitiligo in India: high prevalence; NBUVB phototherapy + topical steroid most effective; psychosocial support critical",
          "Rapid progression vitiligo: oral prednisolone 0.5-1 mg/kg to slow disease; screen for triggers (trauma)",
          "Melasma: tretinoin + hydroquinone + steroid combination; SPF 50+ essential; relapse if sun exposure continues",
          "PIH: self-limited resolution over 3-12 months; tretinoin 0.025% accelerates; no specific treatment needed in many cases",
          "PIpH: distinguish from early vitiligo; usually reversible over time; reassurance often sufficient",
          "Albinism: strict photoprotection mandatory; monthly skin checks; ophthalmology follow-up",
          "Koebner phenomenon in vitiligo: counsel patients to avoid trauma; fragile lesions prone to extension"
        ],
        textbookRefs: [
          { book: "IADVL Textbook of Dermatology", chapter: "21 - Disorders of Pigmentation", edition: "4th" },
          { book: "Roxburgh's Common Skin Diseases", chapter: "Pigmentation Disorders", edition: "20th" }
        ],
      },
      {
        layer: 4,
        slug: "pigmentary-disorders-layer-4-exam",
        title: "Pigmentary Disorders - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield facts and clinical pearls for pigmentary disorder exams.",
        contentMd: `# Pigmentary Disorders - Exam Prep

## High-Yield Vitiligo Facts
- **Prevalence in India**: 8-9% (highest globally); affects all races equally
- **Koebner phenomenon**: New vitiligo at sites of trauma; segmental vitiligo does NOT show Koebner
- **VASI Score**: Vitiligo Area and Severity Index; measures %BSA involved
- **Phototherapy**: NBUVB (311nm) most effective; 2-3 times weekly; takes 8-12 weeks minimum
- **Segmental vitiligo**: Non-progressive; early onset (teens); unilateral distribution; better prognosis than generalized
- **Autoimmune association**: Thyroid (25%), pernicious anemia (10%), Addison's (10%)
- **Psychological impact**: Depression, anxiety, social isolation common; support essential

## Melasma Differentials
- **Melasma vs periorbital dermatitis**: Melasma symmetric facial; periorbital has erythema and scaling
- **Melasma vs other hypermelanosis**: Melasma photodistributed; Addison's non-photodistributed (flexures)
- **Melasma vs post-inflammatory hyperpigmentation**: Melasma well-demarcated, sharp borders; PIH irregular edges
- **Melasma grades**: Epidermal (darker, responds well), Dermal (deeper, poor response), Mixed (intermediate)
- **Dermoscopy**: Increased melanin in basal layer; increased dermal melanin

## Albinism Classification
- **OCA-1 (Tyrosinase-negative)**: Complete absence of pigment; white skin/hair at birth; no pigment development
- **OCA-2 (Tyrosinase-positive)**: Some pigment develops over time (days-weeks); yellowish/reddish tint possible
- **OCA-3**: Reddish-brown hair/skin; variant of type 2
- **OCA-4**: SLC45A2 mutation; mainly Asian populations; variable presentation
- **Ocular albinism (OA)**: X-linked; carriers (females) have normal pigment; males have visual impairment
- **Hair bulb test**: Distinguishes OCA-1 (no pigment) from OCA-2 (some pigment) types

## Histopathology Patterns
- **Vitiligo**: Complete absence of melanocytes; DOPA stain negative
- **Melasma**: Increased melanin in basal/suprabasal keratinocytes (epidermal); may have dermal melanin and melanophages
- **PIH**: Increased melanin in keratinocytes and melanophages in dermis; melanocytes present
- **PIpH**: Decreased melanin; melanocytes present but inactive; normal dermal architecture
- **Morphea**: Hyalinized collagen, fibroblast infiltrate; hypomelanosis from loss of melanin in lesion

## Common Exam Mistakes
- **Confusing PIH and PIpH**: PIH = excess melanin (hyperpigmented), PIpH = absent melanin (hypopigmented)
- **Vitiligo prognosis**: Generalized vitiligo poorer prognosis than localized; segmental actually better
- **Melasma relapse**: 40-70% relapse if sun protection discontinued; emphasize SPF importance
- **Albinism inheritance**: Autosomal recessive (25% sibling risk); ocular form X-linked (male-to-male transmission absent)
- **NBUVB frequency**: 2-3 times weekly is standard; more frequent does not improve outcomes

## NMC Competency Exam Focus
- **Vitiligo management**: NBUVB phototherapy + topical steroid/tacrolimus; identify rapidly progressive disease
- **Melasma triple therapy**: Tretinoin + hydroquinone + flucinolone; emphasize sun protection
- **Post-inflammatory changes**: Distinguish PIH (resolves) from PIpH (may persist); understand timeline
- **Albinism**: Autosomal recessive inheritance; increased skin cancer risk; photoprotection paramount
- **Diagnosis tools**: Wood's lamp (reveals hypopigmentation), dermoscopy (melasma melanin distribution), DOPA stain (vitiligo melanocyte absence)

## Clinical Pearls
- **Vitiligo + cold = poor response**: Seasonal variation; winter months show slower response to NBUVB
- **Melasma + pregnancy = likely worsening**: Hormonal trigger; discuss contraception alternatives if possible
- **PIH in darker skin**: Self-limited course 3-12 months; avoid further trauma/irritation
- **Albinism skin cancer**: 1000-fold increased risk in some regions; aggressive surveillance needed
- **Vitiligo psychological**: Cosmetic concern high in India; support groups, camouflage makeup beneficial
- **NBUVB monitoring**: Track tanning response; start at 75% MED; increment 10-20% each session to avoid burn

## Differential Diagnosis Approach
- **Hypopigmented lesion**:
  - Ash leaf macule (tuberous sclerosis, present at birth, inactive melanocytes)
  - Vitiligo (acquired, progressive, absent melanocytes)
  - PIpH (post-inflammatory, resolves over time)
  - Pityriasis alba (mild hypopigmentation after eczema, resolves)

- **Hyperpigmented lesion**:
  - Melasma (symmetric facial, photodistributed, women)
  - PIH (follows inflammation, resolves spontaneously)
  - Addison's (flexural, oral mucosa, systemic symptoms)
  - Hemochromatosis ("bronze" skin, systemic involvement)`,
        mnemonics: [
          { text: "VASI = Vitiligo Area and Severity Index", explanation: "Assessment and monitoring tool" },
          { text: "NBUVB 2-3x weekly, 75-80% MED start, 10-20% increment", explanation: "Safe phototherapy protocol" },
          { text: "Tret+HQ+Flucinolone+SPF = Melasma gold standard", explanation: "Triple therapy + sunscreen essential" },
          { text: "OCA-1 = NO pigment ever; OCA-2 = pigment develops with time", explanation: "Key classification difference" }
        ],
        keyPoints: [
          "Vitiligo: NBUVB phototherapy + topical steroid; identify Koebner phenomenon; screen autoimmune conditions",
          "Melasma: tretinoin + hydroquinone + flucinolone triple; SPF 50+ critical; relapse if sun exposure",
          "Albinism: OCA-1 (no tyrosinase) vs OCA-2 (transport defect); photoprotection mandatory; skin cancer surveillance",
          "PIH: self-limited resolution over 3-12 months; tretinoin 0.025% may accelerate",
          "PIpH: distinguish from vitiligo; temporary hypopigmentation; reassure patient",
          "Serology: None needed for vitiligo/melasma/PIH; only for systemic causes (Addison's, hemochromatosis)",
          "Phototherapy: NBUVB 311nm most effective; takes 8-12 weeks minimum; continue 6-12 months"
        ],
        textbookRefs: [
          { book: "IADVL Textbook of Dermatology", chapter: "21 - Disorders of Pigmentation", edition: "4th" },
          { book: "Roxburgh's Common Skin Diseases", chapter: "Pigmentation Disorders", edition: "20th" }
        ],
      },
      {
        layer: 5,
        slug: "pigmentary-disorders-layer-5-active-recall",
        title: "Pigmentary Disorders - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard Q&A for rapid recall of pigmentary disorders diagnosis and management.",
        contentMd: `# Pigmentary Disorders - Active Recall Flashcards

## Q1: Vitiligo Prevalence
**Q: What is the prevalence of vitiligo in India compared to the global average, and which skin type is most affected?**
A: India has 8-9% prevalence (highest globally); global average 0.5-2%; affects all skin types equally; no racial predilection

## Q2: Vitiligo Pathogenesis
**Q: Name three mechanisms of melanocyte destruction in vitiligo.**
A: 1) Autoimmune (cytotoxic T cells, antibodies to tyrosinase), 2) Oxidative stress (H2O2 accumulation), 3) Apoptosis (fas/fas-ligand interaction, caspase activation)

## Q3: Koebner Phenomenon Variants
**Q: What is the Koebner phenomenon, and which vitiligo type does NOT show this pattern?**
A: Koebner = new lesions develop at trauma sites; seen in generalized vitiligo; Segmental vitiligo does NOT show Koebner phenomenon (static lesions)

## Q4: NBUVB Phototherapy Protocol
**Q: Describe the standard NBUVB phototherapy protocol for generalized vitiligo, including frequency, starting dose, and duration.**
A: 2-3 times weekly with 48-hour spacing; start at 75-80% of MED (minimal erythema dose); increment by 10-20% per session; minimum 8-12 weeks to assess response; continue 6-12 months for best results

## Q5: Melasma Triple Therapy
**Q: What is the gold standard combination for treating melasma, and what is the duration of therapy?**
A: Tretinoin 0.05-0.1% + Hydroquinone 4% + Flucinolone acetonide 0.01% applied nightly; assess at 3 months; response rates 60-70% with strict sun protection (SPF 50+)

## Q6: Melasma Relapse Rate
**Q: What percentage of melasma patients relapse after successful treatment, and what is the primary preventive measure?**
A: 40-70% relapse rate if sun protection not maintained; SPF 50+ broad-spectrum sunscreen (UVA + UVB) essential; oral contraceptive review if possible

## Q7: Albinism Types
**Q: Distinguish between OCA Type 1 and OCA Type 2 based on pigmentation development and enzyme defect.**
A: OCA-1: Tyrosinase-negative; complete absence of pigment from birth; no pigment development ever; OCA-2: Tyrosinase-positive; melanin transport defect; some pigment develops over weeks/months (yellowish/reddish tint possible)

## Q8: Albinism Skin Cancer Risk
**Q: What is the increased skin cancer risk in albinism, and what is the primary preventive strategy?**
A: 1000-fold increased risk in some regions; lifelong daily SPF 50+ sunscreen, UPF clothing, wide-brim hat, avoid sun 10am-4pm, monthly skin surveillance for precancerous lesions

## Q9: Post-Inflammatory Hyperpigmentation
**Q: What is the expected timeline for spontaneous resolution of PIH, and what can accelerate this process?**
A: Usually resolves over 3-12 months spontaneously; tretinoin 0.025% nightly accelerates resolution; vitamin C + SPF 50+ protects from further UV damage; darker skin types more prone to prolonged PIH

## Q10: Distinguishing PIH from PIpH
**Q: How do you clinically and histologically differentiate PIH from PIpH?**
A: PIH = post-inflammatory hyperpigmentation (dark), excess melanin in keratinocytes/melanophages, self-limited resolution; PIpH = post-inflammatory hypopigmentation (light), temporary melanocyte dysfunction, melanocytes present but inactive, resolves over months-years

## Q11: Vitiligo Associated Conditions
**Q: Name three autoimmune conditions associated with vitiligo that should be screened for at diagnosis.**
A: 1) Thyroid disease (Hashimoto's, Graves' - 25%), 2) Pernicious anemia (B12 deficiency - 10%), 3) Addison's disease (adrenal insufficiency - 10%)

## Q12: Addison's Disease Hyperpigmentation
**Q: Where does hyperpigmentation from Addison's disease typically occur, and what is the underlying mechanism?**
A: Hyperpigmentation in flexural areas (axillae, groin), oral mucosa, palms; mechanism = elevated ACTH stimulates melanocytes to produce melanin; resolves with glucocorticoid + mineralocorticoid replacement

## Q13: Melasma Photodistribution
**Q: Why is melasma photodistributed, and what distinguishes this from Addison's hyperpigmentation pattern?**
A: Melasma photodistributed = triggered by UV exposure (UVB, UVA) in sun-exposed areas (face); Addison's non-photodistributed = ACTH-driven melanin in flexures and oral mucosa (protected areas)

## Q14: Vitiligo Segments
**Q: Compare generalized vitiligo and segmental vitiligo in terms of age of onset, progression, and prognosis.**
A: Generalized: usually adults 20-40 years, progressive throughout life, poorer prognosis; Segmental: early onset (teens), non-progressive (static lesions), unilateral distribution, better prognosis, does NOT show Koebner

## Q15: Post-Inflammatory Hypopigmentation vs Early Vitiligo
**Q: How would you distinguish between PIpH and early vitiligo when a patient presents with hypopigmented lesions?**
A: PIpH = history of preceding inflammation, temporary (resolves over months-years), DOPA stain positive (melanocytes present); Vitiligo = no preceding inflammation, progressive lesions, DOPA stain negative (absent melanocytes), family history, associated autoimmunity`,
        mnemonics: [
          { text: "Vitiligo = 8-9% India (highest), affects all skin types equally", explanation: "Epidemiology in Indian context" },
          { text: "KOEBNER = trauma → new vitiligo (except segmental)", explanation: "Phenomenon distinction" },
          { text: "NBUVB: 2-3x/week, 75-80% MED start, 10-20% ↑, min 8-12 weeks", explanation: "Safe phototherapy protocol" },
          { text: "OCA-1 = white forever; OCA-2 = color develops with time", explanation: "Key classification feature" }
        ],
        keyPoints: [
          "Vitiligo: high prevalence in India (8-9%); NBUVB phototherapy + topical steroid standard first-line",
          "Koebner phenomenon: new lesions at trauma; absent in segmental vitiligo (actually better prognosis)",
          "Melasma: tretinoin + hydroquinone + flucinolone; SPF 50+ critical; 40-70% relapse without sun protection",
          "Albinism: OCA-1 (no tyrosinase ever) vs OCA-2 (develops pigment); photoprotection lifelong; skin cancer surveillance",
          "PIH: self-limited 3-12 months; tretinoin 0.025% accelerates; more common in darker skin",
          "PIpH: distinguish from vitiligo; temporary, resolves over time; DOPA stain differentiates (positive in PIpH)",
          "Addison's: ACTH-driven hyperpigmentation in flexures (non-photodistributed), not on face"
        ],
        textbookRefs: [
          { book: "IADVL Textbook of Dermatology", chapter: "21 - Disorders of Pigmentation", edition: "4th" },
          { book: "Roxburgh's Common Skin Diseases", chapter: "Pigmentation Disorders", edition: "20th" }
        ],
      },
    ],
  },
];
