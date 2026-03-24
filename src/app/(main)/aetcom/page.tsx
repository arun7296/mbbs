import Link from "next/link";
import { GraduationCap, MessageCircle, Heart, Scale, Shield, AlertTriangle } from "lucide-react";

const aetcomModules = [
  { num: 1, title: "What does it mean to be a doctor?", phase: "Phase I", icon: Heart },
  { num: 2, title: "What does it mean to be a patient?", phase: "Phase I", icon: MessageCircle },
  { num: 3, title: "The doctor-patient relationship", phase: "Phase I", icon: Heart },
  { num: 4, title: "Informed consent and patient autonomy", phase: "Phase I", icon: Scale },
  { num: 5, title: "Health care as a right", phase: "Phase I", icon: Shield },
  { num: 6, title: "Medical errors and patient safety", phase: "Phase I", icon: AlertTriangle },
];

export default function AetcomPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">AETCOM</h1>
        <p className="text-gray-500">Attitude, Ethics and Communication Modules</p>
      </div>

      {/* Info */}
      <div className="mb-8 rounded-xl border border-pink-100 bg-pink-50 p-4">
        <h3 className="mb-2 text-sm font-semibold text-pink-800">About AETCOM</h3>
        <p className="text-sm text-pink-700">
          AETCOM is a core component of the NMC CBME curriculum with 54 competencies across 27-29 modules, integrated throughout all 4.5 years of MBBS. It focuses on professional attitude, bioethics, and doctor-patient communication.
        </p>
      </div>

      {/* Modules */}
      <div className="space-y-3">
        {aetcomModules.map((m) => (
          <Link key={m.num} href={`/aetcom/aetcom-${m.num}`} className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 hover:border-gray-300 hover:shadow-sm transition-all">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-100">
              <m.icon className="h-5 w-5 text-pink-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">Module {m.num}: {m.title}</h3>
              <p className="text-xs text-gray-400">{m.phase}</p>
            </div>
            <span className="rounded-lg bg-pink-100 px-3 py-1 text-xs font-medium text-pink-600">Start</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
