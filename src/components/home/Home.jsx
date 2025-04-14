import CategoryPage from "../categories/Categories";
import Header from "../header/Header";
import AdsSection from "../adsection/adsection";
import AutoCarousel from "../carousel/AutoCarousel";
import MarqueeDemo from "../carousel/MarqueeDemo";
import Chatbot from "../aichatbot/chatbot";

function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-5">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/3">
          <Header />
        </div>

        <div className="w-full lg:w-2/3 px-4 py-4">
          <CategoryPage />
        </div>
      </div>

      {/* Other components below the header/categories section */}
      <AutoCarousel />
      <AdsSection />

      <MarqueeDemo />
      <Chatbot />
    </div>
  );
}

export default Home;
