const categories = [
  { title: "Fashion and lifeStyle" },
  { title: "Home" },
  { title: "Fitness" },
  { title: "Ecommerce" },
  { title: "Finance" },
  { title: "Real Eastate" },
  { title: "Gaming" },
  { title: "Politics" },
  { title: "Education" },
  { title: "Travel" },
];

export default function CategoryPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-5 ">
      {categories.map((cat, index) => (
        <div
          key={index}
          className="bg-white text-black rounded-lg pt-3.5  px-2  pb-2 h-26 max-h-36 flex flex-col items-center shadow hover:shadow-lg transition"
        >
          <div className="text-justify font-semibold">{cat.title}</div>
        </div>
      ))}
    </div>
  );
}
