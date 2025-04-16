"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { Star, Search } from "lucide-react";
import Link from "next/link";

export default function ComparisonPage() {
  const [comparisons, setComparisons] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [topPicks, setTopPicks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/getAllcompblogs")
      .then((res) => {
        const companies = res.data.flatMap((blog) => blog.company || []);
        const sorted = [...companies].sort((a, b) => b.rating - a.rating);
        setComparisons(sorted);
        setTopPicks(sorted.slice(0, 3));
      })
      .catch((err) => {
        console.error("Failed to fetch data:", err);
      });
  }, []);

  const getLabel = (rating) => {
    if (rating >= 9.5) return "Exceptional";
    if (rating >= 9.0) return "Excellent";
    if (rating >= 8.0) return "Very Good";
    return "Good";
  };

  const filteredComparisons = comparisons.filter((item) =>
    item.websiteName?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white dark:bg-gray-900 py-10">
      {/* Top 3 Picks */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
          <span className="font-medium">Last Updated:</span> Apr 2025
        </p>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          Our Top 3 Picks
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {topPicks.map((app, i) => (
            <div
              key={i}
              className="relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 shadow hover:shadow-lg transition-all"
            >
              {i === 0 && (
                <span className="absolute -top-3 left-3 bg-green-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  We Recommend
                </span>
              )}
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={app.logo || "/images/placeholder.png"}
                  alt={app.websiteName}
                  className="w-15 h-15 object-contain"
                />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {app.websiteName}
                </h3>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-blue-700 dark:text-blue-400">
                  {getLabel(app.rating)}
                </span>
                <div className="flex items-center text-yellow-500">
                  {[...Array(Math.floor(app.rating))].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">
                  {app.rating?.toFixed(1)}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {app.features?.[0] || "Trusted by thousands"}
              </p>
              <a
                href={app.visitSiteUrl}
                className="text-red-600 dark:text-red-400 font-medium text-sm hover:underline flex items-center"
              >
                Visit Site <span className="ml-1">→</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="relative overflow-x-auto shadow-md bg-white dark:bg-gray-900 max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center space-y-4 md:space-y-0 p-4 border-b dark:border-gray-700">
          <div className="relative w-full md:w-auto mb-4">
            <Search className="absolute top-2.5 left-3 w-4 h-4 text-gray-500 dark:text-gray-400" />
            <input
              type="text"
              placeholder="Search for websites"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-80 pl-10 pr-4 py-2 text-sm rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <table className="w-full text-sm text-left text-gray-600 dark:text-gray-300">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-800 dark:text-gray-300">
            <tr>
              <th className="px-6 py-3">Brand</th>
              <th className="px-6 py-3">Features</th>
              <th className="px-6 py-3">Rating</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredComparisons.map((card, index) => (
              <tr
                key={index}
                className="bg-white dark:bg-gray-900 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <td className="px-6 py-4 text-center text-gray-900 dark:text-white">
                  <div className="flex flex-col items-center gap-2">
                    {card.logo && (
                      <img
                        src={card.logo}
                        alt={card.websiteName}
                        className="w-15 h-15 object-contain rounded-md"
                      />
                    )}
                    <Link href={`/company/${card._id}`}>
                      <span className="text-sm font-medium text-blue-600 hover:text-blue-800">
                        {card.websiteName}
                      </span>
                    </Link>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <ul className="list-disc ml-4 space-y-1">
                    {card.features?.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1 text-yellow-500">
                    {[...Array(Math.floor(card.rating))].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                    <span className="text-white ml-2.5">
                      {card.rating?.toFixed(1)}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <a
                    href={card.visitSiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-white text-sm font-semibold bg-blue-600 px-4 py-2 rounded-xl shadow-md hover:bg-blue-700 transition-colors duration-200"
                  >
                    Visit Site
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
