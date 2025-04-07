import React from "react";
import AutoCarousel from "../carousel/Carousel";

const ShotCard = ({ title, imageUrl, cta }) => (
  <div
    className="flex flex-col justify-end h-96 min-w-[260px] rounded-2xl overflow-hidden bg-cover bg-center shadow-md hover:shadow-xl transition duration-300"
    style={{ backgroundImage: `url(${imageUrl})` }}
  >
    <div className="p-6 bg-black/40 backdrop-blur-sm h-full flex flex-col justify-end">
      <p className="text-white text-2xl font-semibold mb-3">{title}</p>
      <button className="px-4 py-2 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition">
        {cta}
      </button>
    </div>
  </div>
);

const TopShotsSection = () => {
  const cards = [
    {
      title: "Most Popular Shots",
      imageUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e",
      cta: "View Popular",
    },
    {
      title: "Top Rated Shots",
      imageUrl: "https://images.unsplash.com/photo-1522199670076-2852f80289c3",
      cta: "Explore Top Rated",
    },
    {
      title: "Most Searched Shots",
      imageUrl: "https://images.unsplash.com/photo-1602526432604-ea47b9b54a0a",
      cta: "Check Searches",
    },
    {
      title: "Top 5 Shopping Offers",
      imageUrl: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c",
      cta: "Grab Deals",
    },
  ];

  return (
    <section className="w-full px-6 py-20 bg-gradient-to-r from-gray-100 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Explore Our Top Shots
        </h2>
        
        <div className="flex flex-wrap justify-center gap-8">
          {cards.map((card, index) => (
            <ShotCard
              key={index}
              title={card.title}
              imageUrl={card.imageUrl}
              cta={card.cta}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopShotsSection;
