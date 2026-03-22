"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { BookOpen, Dumbbell, RotateCcw, ClipboardCheck, Stethoscope } from "lucide-react";

const modes = [
  { href: "/learn", label: "Learn", icon: BookOpen, bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200", activeBg: "bg-blue-100" },
  { href: "/practice", label: "Practice", icon: Dumbbell, bg: "bg-green-50", text: "text-green-700", border: "border-green-200", activeBg: "bg-green-100" },
  { href: "/revise", label: "Revise", icon: RotateCcw, bg: "bg-orange-50", text: "text-orange-700", border: "border-orange-200", activeBg: "bg-orange-100" },
  { href: "/test", label: "Test", icon: ClipboardCheck, bg: "bg-red-50", text: "text-red-700", border: "border-red-200", activeBg: "bg-red-100" },
  { href: "/clinical", label: "Clinical", icon: Stethoscope, bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200", activeBg: "bg-purple-100" },
];

export function ModeSwitch() {
  const pathname = usePathname();

  return (
    <div className="flex gap-2 overflow-x-auto px-1 py-2">
      {modes.map((mode) => {
        const isActive = pathname?.startsWith(mode.href);
        return (
          <Link
            key={mode.href}
            href={mode.href}
            className={cn(
              "flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all",
              isActive
                ? `${mode.activeBg} ${mode.text} ${mode.border}`
                : `bg-white text-gray-500 border-gray-200 hover:${mode.bg} hover:${mode.text}`
            )}
          >
            <mode.icon className="h-4 w-4" />
            {mode.label}
          </Link>
        );
      })}
    </div>
  );
}
