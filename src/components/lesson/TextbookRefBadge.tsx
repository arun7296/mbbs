"use client";

import { BookOpen } from "lucide-react";

interface TextbookRefBadgeProps {
  book: string;
  chapter: string;
  page?: string;
  edition?: string;
}

export function TextbookRefBadge({ book, chapter, page, edition }: TextbookRefBadgeProps) {
  return (
    <div className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs">
      <BookOpen className="h-3 w-3 text-gray-400" />
      <span className="font-medium text-gray-700">{book}</span>
      {edition && <span className="text-gray-400">({edition})</span>}
      <span className="text-gray-400">|</span>
      <span className="text-gray-500">{chapter}</span>
      {page && <span className="text-gray-400">p.{page}</span>}
    </div>
  );
}
