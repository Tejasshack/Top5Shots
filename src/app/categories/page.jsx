"use client";

const products = [
  {
    name: "Product A",
    rating: 4.8,
    usedBy: "15K+ users",
    benefits: ["Fast performance", "Easy to use", "Great support"],
    learnMore: "https://example.com/product-a",
  },
  {
    name: "Product B",
    rating: 4.5,
    usedBy: "8K+ users",
    benefits: ["Affordable", "Feature-rich", "Secure"],
    learnMore: "https://example.com/product-b",
  },
  {
    name: "Product C",
    rating: 4.7,
    usedBy: "12K+ users",
    benefits: ["Trusted brand", "Modern UI", "Free trial"],
    learnMore: "https://example.com/product-c",
  },
];

const ComparisonCard = ({ name, rating, usedBy, benefits, learnMore }) => (
  <div className="bg-white rounded-2xl shadow-md p-6 w-full sm:w-[350px]  justify-between hover:shadow-xl transition">
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>
      <p className="text-sm text-gray-600 mb-1">⭐ {rating} / 5</p>
      <p className="text-sm text-gray-500 mb-3">Used by: {usedBy}</p>
      <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
        {benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
    </div>
    <a
      href={learnMore}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-6 inline-block px-4 py-2 text-center bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
    >
      Learn More
    </a>
  </div>
);

export default function ComparisonPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Product Comparison
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {products.map((product, idx) => (
          <ComparisonCard key={idx} {...product} />
        ))}
      </div>
    </section>
  );
}
