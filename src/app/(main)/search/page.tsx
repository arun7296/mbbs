"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import { Search, BookOpen, FileText, ArrowRight } from "lucide-react";

interface TopicResult {
  id: string;
  code: string;
  name: string;
  module: {
    code: string;
    subject: { code: string; name: string };
  };
}

interface LessonResult {
  id: string;
  slug: string;
  title: string;
  layer: number;
  topic: {
    code: string;
    name: string;
    module: {
      code: string;
      subject: { code: string; name: string };
    };
  };
}

const layerNames: Record<number, string> = {
  1: "Foundation",
  2: "Mechanism",
  3: "Clinical",
  4: "Exam Prep",
  5: "Active Recall",
};

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";
  const [topics, setTopics] = useState<TopicResult[]>([]);
  const [lessons, setLessons] = useState<LessonResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    if (query.length < 2) return;

    setLoading(true);
    setSearched(false);

    fetch(`/api/trpc/search.searchAll?input=${encodeURIComponent(JSON.stringify({ json: { query } }))}`)
      .then((res) => res.json())
      .then((data) => {
        const result = data?.result?.data?.json;
        if (result) {
          setTopics(result.topics ?? []);
          setLessons(result.lessons ?? []);
        }
      })
      .catch(() => {})
      .finally(() => {
        setLoading(false);
        setSearched(true);
      });
  }, [query]);

  if (!query || query.length < 2) {
    return (
      <div className="flex flex-col items-center py-20">
        <Search className="h-12 w-12 text-gray-300" />
        <p className="mt-4 text-gray-500">Enter at least 2 characters to search</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="animate-pulse space-y-4 py-6">
        <div className="h-6 w-48 rounded bg-gray-200" />
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-16 rounded-lg bg-gray-200" />
        ))}
      </div>
    );
  }

  const totalResults = topics.length + lessons.length;

  return (
    <div className="space-y-8 py-6">
      <div>
        <h1 className="text-xl font-bold text-gray-900">
          {totalResults} result{totalResults !== 1 ? "s" : ""} for &ldquo;{query}&rdquo;
        </h1>
      </div>

      {/* Topics */}
      {topics.length > 0 && (
        <section>
          <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase text-gray-500">
            <BookOpen className="h-4 w-4" /> Topics ({topics.length})
          </h2>
          <div className="space-y-2">
            {topics.map((topic) => (
              <Link
                key={topic.id}
                href={`/learn/${topic.module.subject.code}/${topic.module.code}`}
                className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3 transition-colors hover:border-blue-200 hover:bg-blue-50"
              >
                <div>
                  <p className="text-sm font-medium text-gray-900">{topic.name}</p>
                  <p className="text-xs text-gray-500">
                    {topic.module.subject.name} &middot; {topic.code}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-gray-400" />
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Lessons */}
      {lessons.length > 0 && (
        <section>
          <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase text-gray-500">
            <FileText className="h-4 w-4" /> Lessons ({lessons.length})
          </h2>
          <div className="space-y-2">
            {lessons.map((lesson) => (
              <Link
                key={lesson.id}
                href={`/learn/${lesson.topic.module.subject.code}/${lesson.topic.module.code}/${lesson.slug}`}
                className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3 transition-colors hover:border-blue-200 hover:bg-blue-50"
              >
                <div>
                  <p className="text-sm font-medium text-gray-900">{lesson.title}</p>
                  <p className="text-xs text-gray-500">
                    {lesson.topic.module.subject.name} &middot; {lesson.topic.name} &middot;{" "}
                    <span className="text-blue-500">Layer {lesson.layer}: {layerNames[lesson.layer] ?? ""}</span>
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-gray-400" />
              </Link>
            ))}
          </div>
        </section>
      )}

      {searched && totalResults === 0 && (
        <div className="flex flex-col items-center py-12">
          <Search className="h-10 w-10 text-gray-300" />
          <p className="mt-3 text-gray-500">No results found for &ldquo;{query}&rdquo;</p>
          <p className="text-sm text-gray-400">Try different keywords or check your spelling</p>
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 lg:px-8">
      <Suspense fallback={<div className="py-20 text-center text-gray-400">Loading...</div>}>
        <SearchResults />
      </Suspense>
    </div>
  );
}
