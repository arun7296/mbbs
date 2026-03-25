"use client";

interface ComparisonItem {
  label: string;
  features: Record<string, string>;
  color: string;
}

interface ComparisonVisualProps {
  title: string;
  items: ComparisonItem[];
  featureLabels: string[];
}

export function ComparisonVisual({ title, items, featureLabels }: ComparisonVisualProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b bg-gray-50 dark:bg-gray-800">
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500">{title}</th>
            {items.map((item, i) => (
              <th key={i} className="px-4 py-3 text-center">
                <span className="rounded-full px-3 py-1 text-xs font-semibold text-white" style={{ backgroundColor: item.color }}>
                  {item.label}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {featureLabels.map((feature, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-800/50"}>
              <td className="px-4 py-2.5 text-xs font-medium text-gray-700 dark:text-gray-300">{feature}</td>
              {items.map((item, j) => (
                <td key={j} className="px-4 py-2.5 text-center text-xs text-gray-600 dark:text-gray-400">
                  {item.features[feature] || "—"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
