"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const shotData = [
  {
    id: 1,
    title: "America Puts Reciprocal Tariffs",
    image: "/breaking-news.jpg",
    date: "March 11, 2024",
    author: "NewsExpress",
    label: "TopShots",
  },
  {
    id: 2,
    title: "5 Best Laptops for Students in 2024",
    image: "/laptop-top-pick.jpg",
    date: "April 5, 2024",
    author: "Top5Shots",
    label: "Top Pick",
  },
];

// Custom Arrows
const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-60 hover:bg-opacity-80 text-white p-2 rounded-full cursor-pointer"
    onClick={onClick}
  >
    <FaChevronRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-60 hover:bg-opacity-80 text-white p-2 rounded-full cursor-pointer"
    onClick={onClick}
  >
    <FaChevronLeft />
  </div>
);

const ShotCard = ({ shot }) => (
  <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden rounded-lg shadow-md">
    <img
      src={shot.image}
      alt={shot.title}
      className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
    />
    <div className="absolute inset-0 bg-black bg-opacity-50 p-3 flex flex-col justify-end">
      <div className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1 rounded-sm">
        {shot.label}
      </div>
      <h2 className="text-white text-sm sm:text-base md:text-lg font-semibold">{shot.title}</h2>
      <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-200 mt-1">
        <span>{shot.date}</span>
        <span className="text-white">•</span>
        <span>{shot.author}</span>
      </div>
    </div>
  </div>
);

export default function TopShotsCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="my-10 px-4 sm:px-6 md:px-20">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-gray-800">
        🏆 Most Popular Shots
      </h1>
      <Slider {...settings}>
        {shotData.map((shot) => (
          <ShotCard key={shot.id} shot={shot} />
        ))}
      </Slider>
    </section>
  );
}
