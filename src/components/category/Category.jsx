import AutoCarousel from "../carousel/AutoCarousel";

export default function Category() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-10">
      <h1 className="text-center text-black font-bold text-2xl sm:text-3xl mb-6">
        Finance
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="w-full h-[30vh] [perspective:1000px] mx-auto"
          >
            <div
              className="
                relative w-full h-full transition-transform duration-500 
                [transform-style:preserve-3d]
                rotate-y-180 sm:rotate-y-0 
                sm:hover:[transform:rotateY(180deg)]
              "
            >
              <div
                className="
                  absolute w-full h-full backface-hidden bg-cover bg-center 
                  rounded-lg shadow-md flex items-center justify-center 
                  text-white text-xl font-bold hidden sm:flex
                "
                style={{ backgroundImage: "url('/images/fin.jpg')" }}
              >
                Banking
              </div>

              <div className="absolute w-full h-full backface-hidden [transform:rotateY(180deg)] shadow-md bg-white text-black rounded-lg  p-4 text-center flex flex-col justify-center items-center">
                <h2 className="text-xl font-bold py-2">Banking</h2>
                <p>25 Personal loans</p>
                <p>15 Credit cards</p>
                <p>10 Saving tips</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="shadow-md bg-white text-black rounded-lg border-[4px] p-4 h-[40vh] sm:h-[50vh] text-center flex flex-col justify-center">
          <h2 className="text-xl font-bold py-2">Top Five Shots</h2>
        </div>
        <div className="shadow-md bg-white text-black rounded-lg border-[4px] p-4 h-[40vh] sm:h-[50vh] text-center flex flex-col justify-center">
          <h2 className="text-xl font-bold py-2">Most Popular Shots</h2>
        </div>
      </div>

      {/* Auto Carousel Section */}
      <AutoCarousel />
    </div>
  );
}
