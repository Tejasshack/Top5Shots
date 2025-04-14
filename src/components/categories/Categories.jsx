const categories = [
  { title: "Fashion and Lifestyle", img: "/images/fashion.png" },
  { title: "Home", img: "/images/fashion.png" },
  { title: "Fitness", img: "/images/fitness.png" },
  { title: "Ecommerce", img: "/images/ecommerce.png" },
  { title: "Finance", img: "/images/finance.png" },
  { title: "Real Estate", img: "/images/realestate.png" },
  { title: "Gaming", img: "/images/fashion.png" },
  { title: "Politics", img: "/images/politics.png" },
  { title: "Education", img: "/images/education.png" },
  { title: "Travel", img: "/images/travel.png" },
];

export default function CategoryPage() {
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
