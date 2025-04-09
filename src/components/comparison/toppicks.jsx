import { Star } from "lucide-react";

const topPicks = [
  {
    name: "Rosetta Stone",
    description: "30-day money-back guarantee",
    rating: 9.3,
    label: "Excellent",
    badge: null,
    url: "#",
    logo: "/images/rosetta.png",
  },
  {
    name: "Babbel GMBH",
    description: "More than 10 million users",
    rating: 9.8,
    label: "Exceptional",
    badge: "We Recommend",
    url: "#",
    logo: "/images/babbel.png",
  },
  {
    name: "Pimsleur",
    description: "Get fluent in 30 days",
    rating: 9.1,
    label: "Excellent",
    badge: null,
    url: "#",
    logo: "/images/pimsleur.png",
  },
];

export default function TopPicks() {
  return (
    <section className="bg-white dark:bg-gray-900 py-10 mt-10">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
          <span className="font-medium">Last Updated:</span> Apr 2025
        </p>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          Our Top 3 Language Learning Apps
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {topPicks.map((app, i) => (
            <div
              key={i}
              className="relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 shadow hover:shadow-lg transition-all"
            >
              {app.badge && (
                <span className="absolute -top-3 left-3 bg-green-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {app.badge}
                </span>
              )}
              <div className="flex items-center gap-3 mb-3">
                <img src={app.logo} alt={app.name} className="w-10 h-10 object-contain" />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{app.name}</h3>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-blue-700 dark:text-blue-400">
                  {app.label}
                </span>
                <div className="flex items-center text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">
                  {app.rating}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{app.description}</p>
              <a
                href={app.url}
                className="text-red-600 dark:text-red-400 font-medium text-sm hover:underline flex items-center"
              >
                Start Learning <span className="ml-1">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
