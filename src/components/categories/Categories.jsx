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
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <div
            key={cat._id}
            onClick={() => handleCategoryClick(cat.slug)} // ✅ Use slug!
            className="cursor-pointer bg-white text-black rounded-xl p-4 h-28 flex items-center justify-center text-center shadow-md hover:shadow-xl transition duration-300"
          >
            <span className="font-semibold text-sm sm:text-base">
              {cat.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
