export const dynamic = "force-dynamic"; 

import SEO from "@/app/components/SEO";
import { seoConfig } from "@/lib/seo-config";
import AirportsWeServe from "../components/sections/AirpportsWeServe";
import OurFleet from "../components/sections/OurfleetSection";
import BestExperienceBanner from "../components/sections/BestExperienceBanner";
import ServicesSection from "../components/sections/Services-Section";
import ReviewsSection from "../components/sections/ReviewsSection";
import WhyChooseUsSectionHome from "../components/sections/WhyChooseUsSectionHome";
import NewHeroSection from "./book-ride/NewHeroSection";
import InfiniteSlide from "./book-ride/InfiniteSlide";

export default function Home() {
  return (
    <>
      <SEO 
        title={seoConfig.home.title}
        description={seoConfig.home.description}
        url={seoConfig.home.url}
      />
      <main >
     <NewHeroSection/>
     <InfiniteSlide/>
     <AirportsWeServe/>
     <OurFleet/>
      <WhyChooseUsSectionHome/>
     <BestExperienceBanner/>
     <ServicesSection/>
     <ReviewsSection/>
    </main>
    </>
  );
}