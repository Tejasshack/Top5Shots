"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const ReviewCard = ({ avatar, name, rating, review }) => (
  <div className="w-80 p-5 bg-white rounded-lg shadow-md border">
    <div className="flex items-center gap-3 mb-3">
      <img src={avatar} alt={name} className="w-10 h-10 rounded-full" />
      <div>
        <h3 className="font-medium text-gray-900">{name}</h3>
      </div>
    </div>
    <p className="text-sm text-gray-600">{review}</p>
  </div>
);

export default function MarqueeReviews() {
  const reviews = [
    { id: 1, name: "Sarah Johnson", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah", rating: 5, review: "This product exceeded my expectations!" },
    { id: 2, name: "Michael Chen", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael", rating: 4, review: "Great value for money. Would recommend." },
    { id: 3, name: "Emma Davis", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma", rating: 5, review: "Absolutely love it! So easy to use." },
    { id: 4, name: "James Wilson", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=james", rating: 4, review: "Very impressed with the quality!" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="min-h-6  flex flex-col items-center justify-center bg-gray-300 p-8 m-20">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">What Our Customers Say</h2>
      <div className="w-full max-w-5xl">
        <Slider {...settings}>
          {reviews.map((r) => (
            <ReviewCard key={r.id} {...r} />
          ))}
        </Slider>
      </div>
    </div>
  );
}
