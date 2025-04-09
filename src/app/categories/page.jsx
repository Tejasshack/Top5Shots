"use client";

import UserComparisonTable from "@/components/comparison/comparison";
import TopPicks from "@/components/comparison/toppicks";

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

export default function ComparisonPage() {
  return (
    <div>
      <TopPicks/>
      <UserComparisonTable />
    </div>
  );
}
