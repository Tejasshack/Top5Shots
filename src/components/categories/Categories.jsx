"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function CategoryPage() {
  const [categories, setCategories] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("http://localhost:5000/category");
        console.log("Fetched categories:", res.data); // ✅ Check the response
        setCategories(res.data);
      } catch (error) {
        console.error("Failed to fetch categories:", error.message);
      }
    };
    fetchCategories();
  }, []);

  const handleCategoryClick = (cat) => {
    const categorySlug = cat.slug?.toLowerCase(); // Ensure lowercase if needed
    if (categorySlug) {
      router.push(`/${categorySlug}`);
    }
  };

  return (
    <div className="px-4 py-10 max-w-8xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Explore Categories
      </h2>

      {/* Grid Layout */}
      <div className="px-4 py-6">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4">
          {categories.map((cat, index) => (
            <div
              key={index}
              onClick={() => handleCategoryClick(cat)}
              className="bg-white text-black rounded-xl p-4 h-28 flex items-center justify-center text-center shadow-md hover:shadow-xl transition duration-300"
            >
              <span className="font-semibold text-sm sm:text-base">
                {cat.title || cat.name || "Unnamed"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
