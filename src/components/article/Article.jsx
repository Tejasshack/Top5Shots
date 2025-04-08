import AutoCrousel from "./AutoCrousel";

function Article() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Offer Cards */}
          <div className="w-full lg:w-56 flex flex-col gap-4">
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className="bg-amber-700 text-center shadow-lg border border-b-cyan-950 rounded-md p-3 flex flex-col justify-between h-full w-full sm:w-48 mx-auto lg:mx-0"
              >
                <img
                  src="https://cdn.logojoy.com/wp-content/uploads/20250107124119/nike-shoe-logo.webp"
                  alt="Fashion"
                  className="w-full h-24 object-cover rounded"
                />
                <h1 className="text-white font-semibold text-base mt-2">Offer</h1>
                <button className="text-white text-sm bg-black px-2 py-1 rounded hover:bg-gray-800 transition mt-2">
                  Buy now
                </button>
              </div>
            ))}
          </div>

          {/* Book Highlight */}
          <div className="flex-1 bg-red-500 rounded-xl p-6 shadow-lg text-white space-y-6">
            <h1 className="text-2xl font-bold text-center lg:text-left">
              Top Five Books to Read This Month 📚
            </h1>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <img
                src="https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg"
                alt="book"
                className="w-full md:w-48 h-auto object-cover rounded"
              />

              <p className="text-sm leading-relaxed">
                Dive into a world of suspense, romance, and wisdom with our top
                book pick of the month. Discover thrilling narratives that captivate
                the imagination and awaken the inner storyteller in you. Whether
                you're a seasoned reader or just starting out, these books are bound
                to keep you hooked from cover to cover.
              </p>
            </div>

            {/* Carousel Ad */}
            <div className="mt-4">
              <AutoCrousel />
            </div>

            <p className="text-sm leading-relaxed">
              Bonus: These reads are carefully handpicked by our editorial team
              based on popularity, reader feedback, and storytelling excellence.
              So grab a cup of coffee, snuggle up in your cozy blanket, and lose
              yourself in the pages of something wonderful.
            </p>
          </div>
        </div>
      </div>

      {/* Final Paragraph */}
      <div className="px-4 max-w-5xl mx-auto pb-12 mt-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae
          sunt quod soluta optio, culpa voluptate corporis dolore inventore
          sequi placeat quas repellendus, perspiciatis, harum eum deserunt
          nostrum autem provident laboriosam aut explicabo.
        </p>
      </div>
    </>
  );
}

export default Article;

