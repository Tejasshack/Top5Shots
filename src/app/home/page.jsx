import Header from "@/components/header/Header";
import CategoryPage from "@/components/categories/Categories";
import AutoPlay from "@/components/carousel/Carousel";
import AdsSection from "@/components/adsection/adsection";
import MarqueeDemo from "@/components/carousel/Carousel2";


function page() {
  return (
    <div>
      <Header >
      <CategoryPage />
      </Header>
      <AutoPlay/>
     <AdsSection/>
     <MarqueeDemo/>
    </div>
  );
}

export default page;
