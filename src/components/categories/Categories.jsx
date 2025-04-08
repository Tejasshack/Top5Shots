const categories = [
  { title: "Fashion and Lifestyle" },
  { title: "Home" },
  { title: "Fitness" },
  { title: "Ecommerce" },
  { title: "Finance" },
  { title: "Real Estate" },
  { title: "Gaming" },
  { title: "Politics" },
  { title: "Education" },
  { title: "Travel" },
];

export default function CategoryPage() {
  return (
    <div className="px-4 py-6">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-xl p-4 h-28 flex items-center justify-center text-center shadow-md hover:shadow-xl transition duration-300"
          >
            <span className="font-semibold text-sm sm:text-base">{cat.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
