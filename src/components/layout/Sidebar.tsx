"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  Dumbbell,
  RotateCcw,
  ClipboardCheck,
  Stethoscope,
  LayoutDashboard,
  Calendar,
  BarChart3,
  GraduationCap,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard, color: "text-gray-600" },
  { href: "/learn", label: "Learn", icon: BookOpen, color: "text-blue-600" },
  { href: "/practice", label: "Practice", icon: Dumbbell, color: "text-green-600" },
  { href: "/revise", label: "Revise", icon: RotateCcw, color: "text-orange-500" },
  { href: "/test", label: "Test", icon: ClipboardCheck, color: "text-red-600" },
  { href: "/clinical", label: "Clinical Sim", icon: Stethoscope, color: "text-purple-600" },
  { href: "/study-plan", label: "Study Plan", icon: Calendar, color: "text-teal-600" },
  { href: "/progress", label: "Progress", icon: BarChart3, color: "text-indigo-600" },
  { href: "/aetcom", label: "AETCOM", icon: GraduationCap, color: "text-pink-600" },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile hamburger */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-50 rounded-lg bg-white p-2 shadow-md lg:hidden"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-50 flex h-full w-64 flex-col border-r border-gray-200 bg-white transition-transform duration-300 lg:static lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Logo */}
        <div className="flex h-16 items-center justify-between border-b px-4">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold text-gray-900">MedLearn</span>
          </Link>
          <button onClick={() => setIsOpen(false)} className="lg:hidden">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const isActive = pathname?.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    )}
                  >
                    <item.icon className={cn("h-5 w-5", isActive ? item.color : "text-gray-400")} />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Phase indicator */}
        <div className="border-t p-4">
          <div className="rounded-lg bg-blue-50 p-3">
            <p className="text-xs font-medium text-blue-600">Current Phase</p>
            <p className="text-sm font-semibold text-blue-900">Phase I - 1st Professional</p>
          </div>
        </div>
      </aside>
    </>
  );
}
