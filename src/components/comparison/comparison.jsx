"use client";
import { useState } from "react";
import { ChevronDown, Search, Star } from "lucide-react";

export default function UserComparisonTable() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const brands = [
    {
      brand: "Reactify",
      contentline: [
        "Modern React Framework",
        "TypeScript support",
        "Component reusability",
      ],
      status: "online",
      rating: 4,
      url: "https://reactify.dev",
      img: "/docs/images/people/profile-picture-1.jpg",
    },
    {
      brand: "DesignPro",
      contentline: [
        "Intuitive UI kits",
        "Responsive components",
        "Figma integrations",
      ],
      status: "online",
      rating: 4,
      url: "https://designpro.io",
      img: "/docs/images/people/profile-picture-3.jpg",
    },
    {
      brand: "VueForge",
      contentline: ["Vue 3 optimized", "Composition API", "Smooth animations"],
      status: "online",
      rating: 4,
      url: "https://vueforge.com",
      img: "/docs/images/people/profile-picture-2.jpg",
    },
    {
      brand: "UXWorks",
      contentline: [
        "Design systems",
        "Wireframing tools",
        "Collaborative prototyping",
      ],
      status: "online",
      rating: 4,
      url: "https://uxworks.design",
      img: "/docs/images/people/profile-picture-5.jpg",
    },
    {
      brand: "Searchly",
      contentline: ["SEO audits", "Keyword analysis", "Rank tracking"],
      status: "offline",
      rating: 3,
      url: "https://searchly.io",
      img: "/docs/images/people/profile-picture-4.jpg",
    },
  ];

  const filteredBrands = brands.filter((b) =>
    b.brand.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative overflow-x-auto shadow-md  bg-white dark:bg-gray-900 mb-10">
      <div className="flex flex-wrap md:flex-row justify-between items-center space-y-4 md:space-y-0 p-4 border-b dark:border-gray-700">
        {/* Dropdown */}
        <div className="relative">
          {/* Search Bar */}
          <div className="relative w-full md:w-auto mb-4">
            <Search className="absolute top-2.5 left-3 w-4 h-4 text-gray-500 dark:text-gray-400" />
            <input
              type="text"
              placeholder="Search for brands"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-80 pl-10 pr-4 py-2 text-sm rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Table */}
        <table className="w-full text-sm text-left text-gray-600 dark:text-gray-300">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-800 dark:text-gray-300">
            <tr>
              <th className="px-6 py-3">Brand</th>
              <th className="px-6 py-3">Features</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredBrands.map((brand, index) => (
              <tr
                key={index}
                className="bg-white dark:bg-gray-900 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                {/* <td className="p-4">
                <input type="checkbox" className="w-4 h-4" />
              </td> */}
                <td className="flex items-center px-6 py-4 font-medium text-gray-900 dark:text-white">
                  <img
                    src={brand.img}
                    alt={brand.brand}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="ml-3">{brand.brand}</div>
                </td>
                <td className="px-6 py-4">
                  <ul className="list-disc ml-4 space-y-1">
                    {brand.contentline.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      brand.status === "online"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                        : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                    }`}
                  >
                    {brand.status}
                  </span>
                </td>
<<<<<<< HEAD
                <td className="px-4 py-4">
=======
                <td className="px-6 py-4">
>>>>>>> master
                  <div className="flex flex-col gap-1">
                    <a
                      href={brand.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-white text-sm font-semibold bg-blue-600 px-4 py-2 rounded-xl shadow-md hover:bg-blue-700 transition-colors duration-200"
                    >
                      Visit Site
                    </a>

                    <div className="flex items-center gap-1 text-yellow-500">
<<<<<<< HEAD
                      <span className="text-white ml-2.5">Our Rating</span>
=======
>>>>>>> master
                      {[...Array(brand.rating)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
