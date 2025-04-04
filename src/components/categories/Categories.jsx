const categories = [
  { title: "Fashion and lifeStyle" },
  { title: "Ecommerce" },
  { title: "Best CD Rates" },
  { title: "Automobile" },
  { title: "Finance" },
  { title: "Real Eastate" },
  { title: "Gaming" },
  { title: "Politics" },
  { title: "Education" },
  { title: "Travel" },
];

export default function CategoryPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {categories.map((cat, index) => (
        <div
          key={index}
          className="bg-white text-blue-900 rounded-lg p-4 flex flex-col items-center shadow hover:shadow-lg transition"
        >
          <div className="text-center font-semibold">{cat.title}</div>
        </div>
      ))}
    </div>
  );
}
