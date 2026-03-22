"use client";

import { Lightbulb } from "lucide-react";

interface MnemonicCardProps {
  text: string;
  explanation: string;
}

export function MnemonicCard({ text, explanation }: MnemonicCardProps) {
  return (
    <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
      <div className="mb-2 flex items-center gap-2">
        <Lightbulb className="h-4 w-4 text-amber-600" />
        <span className="text-xs font-semibold uppercase text-amber-600">Mnemonic</span>
      </div>
      <p className="text-lg font-bold text-amber-900">{text}</p>
      <p className="mt-1 text-sm text-amber-700">{explanation}</p>
    </div>
  );
}
