import Link from "next/link";
import { ChevronRight, Users, PenLine } from "lucide-react";

const moduleContent: Record<string, { title: string; content: string; reflectionPrompts: string[]; caseStudy: string }> = {
  "aetcom-1": {
    title: "What does it mean to be a doctor?",
    content: `## Introduction

Being a doctor is more than just treating diseases. It is a vocation that demands scientific knowledge, clinical skills, ethical conduct, empathy, and lifelong learning.

## The Role of a Doctor in Society

A doctor serves multiple roles:
- **Healer**: Providing evidence-based treatment and care
- **Communicator**: Explaining diagnoses and treatment plans to patients and families
- **Advocate**: Speaking up for patient rights and public health
- **Scholar**: Continuously updating knowledge and contributing to medical science
- **Professional**: Maintaining ethical standards and integrity

## The Indian Context

In India, doctors serve in diverse settings:
- **Government hospitals**: PHC, CHC, District hospitals, Medical colleges
- **Private practice**: Clinics and corporate hospitals
- **Rural and tribal healthcare**: Often the only medical presence
- **National health programs**: RNTCP, NVBDCP, NHM, and others

Understanding the socioeconomic context of patients is crucial for effective healthcare delivery in India.

## Professionalism

Medical professionalism encompasses:
1. **Altruism** — Patient welfare above self-interest
2. **Accountability** — To patients, society, and the profession
3. **Excellence** — Commitment to lifelong learning
4. **Duty** — Availability and responsiveness to patients
5. **Honor and Integrity** — Ethical conduct in all interactions
6. **Respect** — For patients, colleagues, and other healthcare workers`,
    reflectionPrompts: [
      "What motivated you to choose medicine as a career?",
      "Describe a quality you admire in a doctor you've observed. How would you cultivate this quality?",
      "How do you think being a doctor in India is different from being a doctor in other countries?",
      "What personal sacrifices do you think a medical career requires? Are you prepared for them?",
    ],
    caseStudy: "Dr. Sharma works in a rural PHC in Rajasthan. One night, a pregnant woman arrives in labor with complications. The nearest referral hospital is 80 km away, roads are poor, and it's monsoon season. The ambulance won't arrive for 2 hours. What should Dr. Sharma do? Discuss the ethical, practical, and emotional dimensions of this situation.",
  },
  "aetcom-2": {
    title: "What does it mean to be a patient?",
    content: `## Introduction

Understanding the patient's perspective is fundamental to compassionate medical practice. Illness transforms a person's identity, daily life, and relationships in ways that go far beyond the biological disease.

## The Illness Experience

When a person becomes a patient, they experience:
- **Loss of autonomy**: Dependence on healthcare providers for basic needs
- **Vulnerability**: Physical exposure, emotional fragility, fear of the unknown
- **Disruption**: Interruption of work, family roles, and social life
- **Financial burden**: Cost of treatment, loss of income, impact on family

## Patients in the Indian Context

Indian patients face unique challenges:
- **Health literacy gaps**: Many patients have limited understanding of their conditions
- **Language barriers**: Multilingual settings require careful communication
- **Cultural beliefs**: Traditional medicine systems, family decision-making, religious practices
- **Access disparities**: Rural vs urban, public vs private, insured vs uninsured
- **Power dynamics**: Patients may feel intimidated by doctors and hospital environments

## Understanding Patient Perspectives

A good doctor recognizes:
1. **Disease vs Illness** — Disease is the biomedical pathology; illness is the patient's lived experience
2. **Context matters** — The same diagnosis affects a daily-wage laborer and a corporate employee very differently
3. **Family involvement** — In India, medical decisions are often family decisions
4. **Dignity** — Every patient deserves respectful care regardless of socioeconomic status`,
    reflectionPrompts: [
      "Have you or a family member ever been a patient? How did it feel to be on the other side?",
      "How might a cancer diagnosis affect a rickshaw driver differently from a software engineer?",
      "What cultural beliefs about illness have you encountered in your community?",
      "How can a doctor maintain a patient's dignity during a physical examination?",
    ],
    caseStudy: "Ramesh, a 55-year-old farmer from a village in UP, is diagnosed with diabetes at a district hospital. He speaks only Hindi, has never been to a hospital before, and believes his condition is due to 'nazar' (evil eye). His family wants him to see a traditional healer first. How should the treating doctor approach this situation while respecting Ramesh's beliefs and ensuring proper medical care?",
  },
  "aetcom-3": {
    title: "The doctor-patient relationship",
    content: `## Introduction

The doctor-patient relationship is the cornerstone of clinical medicine. Its quality directly affects diagnosis accuracy, treatment adherence, patient satisfaction, and clinical outcomes.

## Models of the Doctor-Patient Relationship

There are several recognized models:
- **Paternalistic model**: Doctor decides what is best; patient complies. Historically dominant in India.
- **Informative model**: Doctor provides information; patient decides. Common in urban/educated settings.
- **Interpretive model**: Doctor helps patient understand their values and choose accordingly.
- **Deliberative model**: Doctor and patient deliberate together on the best course of action. This is the ideal model.

## Communication Skills

Effective doctor-patient communication includes:
1. **Active listening** — Giving full attention, not interrupting, acknowledging concerns
2. **Empathy** — Understanding and sharing the patient's feelings
3. **Clear language** — Avoiding medical jargon, using the patient's language
4. **Non-verbal cues** — Eye contact, body posture, facial expressions
5. **Breaking bad news** — Using structured approaches like the SPIKES protocol

## The SPIKES Protocol for Breaking Bad News

- **S** — Setting: Ensure privacy and adequate time
- **P** — Perception: Assess what the patient already knows
- **I** — Invitation: Ask how much the patient wants to know
- **K** — Knowledge: Share the information clearly and gently
- **E** — Emotions: Acknowledge and address emotional responses
- **S** — Strategy & Summary: Discuss the plan going forward

## Trust and Therapeutic Alliance

Building trust requires:
- **Consistency**: Being reliable and following through on commitments
- **Transparency**: Being honest about diagnoses, prognoses, and limitations
- **Confidentiality**: Protecting patient information
- **Cultural sensitivity**: Respecting diverse backgrounds and beliefs`,
    reflectionPrompts: [
      "Which model of doctor-patient relationship do you think is most appropriate in Indian healthcare? Why?",
      "Describe a situation where poor communication could lead to a medical error.",
      "How would you break the news of a terminal diagnosis to a patient's family who insists the patient should not be told?",
      "What role does trust play in treatment adherence?",
    ],
    caseStudy: "Mrs. Lakshmi, a 40-year-old woman, is diagnosed with Stage III breast cancer. Her husband and son come to you privately and say: 'Please don't tell her the diagnosis — she won't be able to handle it. Just tell her it's a minor problem.' Mrs. Lakshmi has been asking you directly about her reports. How do you navigate this conflict between family wishes and patient autonomy? Consider the ethical, cultural, and legal dimensions.",
  },
  "aetcom-4": {
    title: "Informed consent and patient autonomy",
    content: `## Introduction

Informed consent is both an ethical obligation and a legal requirement. It reflects the principle that patients have the right to make decisions about their own bodies and healthcare.

## Elements of Valid Informed Consent

For consent to be valid, it must satisfy:
1. **Disclosure** — The doctor must provide adequate information about the diagnosis, proposed treatment, alternatives, risks, and benefits
2. **Understanding** — The patient must comprehend the information provided
3. **Voluntariness** — The decision must be free from coercion or undue influence
4. **Competence** — The patient must have the mental capacity to make the decision
5. **Authorization** — The patient must explicitly agree to the proposed intervention

## Types of Consent

- **Implied consent**: For routine examinations (e.g., taking blood pressure)
- **Verbal consent**: For minor procedures; should be documented
- **Written consent**: Required for surgeries, invasive procedures, anesthesia
- **Informed refusal**: Patient's right to decline treatment after understanding consequences

## Special Situations in Indian Practice

- **Minors**: Consent from parent/guardian; assent from the minor when possible
- **Emergency situations**: Treatment can proceed without consent if delay would endanger life (Section 92 IPC)
- **Mental illness**: Governed by Mental Healthcare Act, 2017 — advance directives recognized
- **Research subjects**: Governed by ICMR guidelines; requires ethics committee approval
- **Therapeutic privilege**: Withholding information when disclosure would harm the patient — controversial and rarely justified

## Legal Framework in India

Key legal provisions include:
- **Indian Medical Council (Professional Conduct) Regulations, 2002**
- **Consumer Protection Act, 2019** — Medical services are covered
- **Mental Healthcare Act, 2017** — Right to make advance directives
- **Clinical Establishments Act, 2010** — Standards for healthcare facilities`,
    reflectionPrompts: [
      "Is it ethical to perform a life-saving procedure on an unconscious patient without consent?",
      "How would you obtain informed consent from a patient who cannot read or write?",
      "Should a 16-year-old be allowed to refuse a blood transfusion based on religious beliefs?",
      "What would you do if a patient consents to a surgery but you realize they haven't understood the risks?",
    ],
    caseStudy: "A 70-year-old man with advanced Parkinson's disease needs hip replacement surgery after a fall. His children say he 'agrees to everything' but when you speak to him alone, he seems confused about what surgery means and says he 'just wants the pain to stop.' His daughter has already signed the consent form on his behalf. What are the ethical and legal issues here? How would you proceed?",
  },
  "aetcom-5": {
    title: "Health care as a right",
    content: `## Introduction

The question of whether healthcare is a right or a privilege is central to health policy and medical ethics. In India, this debate has shaped the evolution of public health infrastructure.

## Healthcare as a Human Right

International frameworks supporting healthcare as a right:
- **Universal Declaration of Human Rights (1948)**: Article 25 — right to a standard of living adequate for health
- **International Covenant on Economic, Social and Cultural Rights (1966)**: Article 12 — right to the highest attainable standard of health
- **Alma-Ata Declaration (1978)**: Health for All by 2000 — primary healthcare as key

## The Indian Constitutional Framework

- **Article 21**: Right to life includes right to health (Supreme Court interpretation)
- **Article 39(e)**: State shall protect health and strength of workers
- **Article 41**: Right to public assistance in cases of sickness and disablement
- **Article 42**: Provision for just and humane conditions of work and maternity relief
- **Article 47**: Duty of the State to raise the level of nutrition and standard of living

## India's Public Health System

The three-tier system:
- **Primary**: Sub-centres, PHCs — preventive and basic curative care
- **Secondary**: CHCs, District Hospitals — specialist care
- **Tertiary**: Medical colleges, super-specialty hospitals — advanced care

## Key National Health Programs

- **Ayushman Bharat (PM-JAY)**: Health insurance for 50 crore citizens
- **National Health Mission (NHM)**: Strengthening rural and urban health infrastructure
- **Janani Suraksha Yojana**: Promoting institutional deliveries
- **Rashtriya Bal Swasthya Karyakram**: Child health screening

## Challenges to Healthcare Access

- **Out-of-pocket expenditure**: ~55% of total health spending in India
- **Rural-urban divide**: 75% of healthcare infrastructure is urban-centric
- **Human resource shortage**: WHO recommends 44.5 health workers per 10,000; India has ~20.7
- **Catastrophic health expenditure**: Pushes 55 million Indians into poverty annually`,
    reflectionPrompts: [
      "Should a doctor treat a patient who cannot afford to pay? What are the ethical implications?",
      "How does the right to health differ from the right to healthcare?",
      "What responsibility do private hospitals have toward patients who cannot pay?",
      "How can medical students contribute to improving healthcare access in underserved areas?",
    ],
    caseStudy: "A government hospital in a district town has one ventilator in the ICU. Two patients need it urgently — a 30-year-old mother of two with severe pneumonia, and a 65-year-old retired judge with COPD exacerbation. Both have similar chances of recovery. The family of the judge offers to 'donate generously' to the hospital. How should the ICU team decide who gets the ventilator? Discuss the principles of distributive justice, triage, and the role of wealth in healthcare allocation.",
  },
  "aetcom-6": {
    title: "Medical errors and patient safety",
    content: `## Introduction

Medical errors are a leading cause of morbidity and mortality worldwide. The WHO estimates that patient harm due to unsafe care is one of the top 10 causes of death and disability globally. Creating a culture of safety is essential.

## Types of Medical Errors

- **Diagnostic errors**: Missed, wrong, or delayed diagnosis
- **Treatment errors**: Wrong medication, wrong dose, wrong patient, wrong site surgery
- **Preventive errors**: Failure to provide prophylaxis, inadequate follow-up
- **Communication errors**: Handoff failures, illegible prescriptions, language barriers
- **System errors**: Equipment failure, inadequate staffing, poor protocols

## Swiss Cheese Model (James Reason)

Errors occur when failures at multiple levels align:
- **Organizational factors**: Culture, policies, resource allocation
- **Supervision**: Inadequate oversight, poor mentoring
- **Preconditions**: Fatigue, stress, knowledge gaps
- **Active failures**: The final human error that causes harm

Each level acts as a slice of Swiss cheese — holes in each layer must align for an error to reach the patient.

## Patient Safety Measures

Key strategies include:
1. **Checklists**: WHO Surgical Safety Checklist has reduced surgical complications by 36%
2. **Hand hygiene**: WHO's 5 Moments for Hand Hygiene
3. **Medication safety**: Tall Man lettering, barcoding, double-checks
4. **Communication**: SBAR (Situation-Background-Assessment-Recommendation) handoffs
5. **Reporting systems**: Non-punitive incident reporting to enable learning

## Disclosure of Errors

When an error occurs, the ethical approach includes:
- **Honesty**: Inform the patient/family about what happened
- **Empathy**: Acknowledge the impact and express genuine concern
- **Accountability**: Take responsibility without deflecting blame
- **Action**: Explain steps taken to prevent recurrence
- **Support**: Ensure continued care and address any harm caused

## Legal Aspects in India

- Medical negligence is addressed under the Consumer Protection Act, 2019
- The standard is "reasonable care" — not perfection
- System failures should be addressed at the institutional level, not just by blaming individuals`,
    reflectionPrompts: [
      "Have you witnessed or heard of a medical error? How was it handled?",
      "Why do you think many medical errors go unreported? How can we change this culture?",
      "Should a doctor who makes an honest mistake be punished? What about repeated mistakes?",
      "How can medical students contribute to a culture of patient safety during clinical postings?",
    ],
    caseStudy: "During a night shift, a junior resident accidentally administers 10x the prescribed dose of insulin to a diabetic patient. The patient develops severe hypoglycemia and requires ICU admission but recovers fully. The resident is terrified and considers not documenting the error. The senior resident finds out and says 'These things happen — just be more careful next time.' What should the junior resident do? Discuss the ethical obligations of error disclosure, the role of institutional culture, and how to prevent similar errors.",
  },
};

export default async function AetcomModulePage({ params }: { params: Promise<{ moduleId: string }> }) {
  const { moduleId } = await params;
  const mod = moduleContent[moduleId];

  if (!mod) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-6 lg:px-8">
        <p className="text-gray-500">This AETCOM module is not available yet.</p>
        <Link href="/aetcom" className="mt-4 text-sm text-blue-600 hover:underline">&larr; Back to AETCOM</Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-2 text-sm text-gray-500">
        <Link href="/aetcom" className="hover:text-gray-700">AETCOM</Link>
        <ChevronRight className="h-4 w-4" />
        <span className="font-medium text-gray-900">{mod.title}</span>
      </nav>

      <h1 className="mb-6 text-2xl font-bold text-gray-900">{mod.title}</h1>

      {/* Content */}
      <div className="prose prose-sm max-w-none mb-8">
        {mod.content.split("\n").map((line, i) => {
          if (line.startsWith("## ")) return <h2 key={i} className="mt-6 mb-3 text-xl font-semibold text-gray-900">{line.replace("## ", "")}</h2>;
          if (line.startsWith("- **")) {
            const match = line.match(/- \*\*(.+?)\*\*:?\s*(.*)/);
            if (match) return <li key={i} className="mb-1 text-sm text-gray-700"><strong>{match[1]}</strong>: {match[2]}</li>;
          }
          if (line.match(/^\d+\./)) {
            const match = line.match(/^\d+\.\s+\*\*(.+?)\*\*\s*—\s*(.*)/);
            if (match) return <li key={i} className="mb-1 text-sm text-gray-700"><strong>{match[1]}</strong> — {match[2]}</li>;
          }
          if (line.trim() === "") return <br key={i} />;
          return <p key={i} className="mb-2 text-sm leading-relaxed text-gray-700">{line}</p>;
        })}
      </div>

      {/* Case Study */}
      <div className="mb-8 rounded-xl border border-purple-200 bg-purple-50 p-5">
        <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-purple-800">
          <Users className="h-4 w-4" /> Case Study for Discussion
        </h3>
        <p className="text-sm leading-relaxed text-purple-700">{mod.caseStudy}</p>
      </div>

      {/* Reflection Prompts */}
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
        <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-amber-800">
          <PenLine className="h-4 w-4" /> Reflection Prompts
        </h3>
        <p className="mb-3 text-xs text-amber-600">Write your reflections in your AETCOM portfolio.</p>
        <ol className="space-y-2">
          {mod.reflectionPrompts.map((prompt, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-amber-800">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-200 text-xs font-bold text-amber-800">
                {i + 1}
              </span>
              {prompt}
            </li>
          ))}
        </ol>
      </div>

      {/* Navigation */}
      <div className="mt-8 flex justify-between">
        <Link href="/aetcom" className="text-sm text-gray-500 hover:text-gray-700">&larr; All Modules</Link>
        {parseInt(moduleId.replace("aetcom-", "")) < 6 && (
          <Link
            href={`/aetcom/aetcom-${parseInt(moduleId.replace("aetcom-", "")) + 1}`}
            className="text-sm font-medium text-pink-600 hover:text-pink-700"
          >
            Next Module &rarr;
          </Link>
        )}
      </div>
    </div>
  );
}
