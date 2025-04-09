import CategoryPage from "../categories/Categories";
import Header from "../header/Header";
import AdsSection from "../adsection/adsection";
import AutoCarousel from "../carousel/AutoCarousel";
import MarqueeDemo from "../carousel/MarqueeDemo";
function Home() {
    return (
      <div className="flex flex-col min-h-screen bg-gray-100 p-5">
        {/* Responsive Layout for Header + Categories */}
        <div className="flex flex-col lg:flex-row">
          {/* Header on top (mobile) or left side (desktop) */}
          <div className="w-full lg:w-1/3">
            <Header />
          </div>
  
          {/* Categories on right side (desktop) or below header (mobile) */}
          <div className="w-full lg:w-2/3 px-4 py-4">
            <CategoryPage />
          </div>
        </div>
  
        {/* Other components below the header/categories section */}
        <AutoCarousel />
        <AdsSection />
       
        <MarqueeDemo />
      </div>
    );
  }
  
  export default Home;
  