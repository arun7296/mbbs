import Link from "next/link";
import { ChevronRight, Users, PenLine } from "lucide-react";

// Sample AETCOM module content
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
- Government hospitals (PHC, CHC, District hospitals, Medical colleges)
- Private practice
- Rural and tribal healthcare
- National health programs (RNTCP, NVBDCP, etc.)

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
};

export default async function AetcomModulePage({ params }: { params: Promise<{ moduleId: string }> }) {
  const { moduleId } = await params;
  const mod = moduleContent[moduleId];

  if (!mod) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-6 lg:px-8">
        <p className="text-gray-500">This AETCOM module is coming soon.</p>
        <Link href="/aetcom" className="mt-4 text-sm text-blue-600 hover:underline">← Back to AETCOM</Link>
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
    </div>
  );
}
