"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // ✅
import axios from "axios";

export default function CategoryPage() {
  const [categories, setCategories] = useState([]);
  const router = useRouter(); // ✅

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("http://localhost:5000/category"); // ✅ Make sure this matches your backend route
        setCategories(res.data);
      } catch (error) {
        console.error("Failed to fetch categories:", error.message);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (categorySlug) => {
    router.push(`/category/${categorySlug}`);
  };

  // Inside your map:

  return (
    <div className="px-4 py-6">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Explore Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-xl p-4 h-32 sm:h-36 flex flex-col items-center justify-center gap-3 text-center hover:bg-[#785492] hover:text-white shadow-sm hover:shadow-xl transition duration-300 ease-in-out"
          >
            <img
              src={cat.img}
              alt={cat.title}
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
            />
            <span className="font-semibold text-sm sm:text-base">
              {cat.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
