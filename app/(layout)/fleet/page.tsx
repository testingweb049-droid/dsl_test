import SEO from "@/app/components/SEO";
import { seoConfig } from "@/lib/seo-config";
import HeroSection2 from "@/app/components/sections/HeroSection2";

import OurFleetSection from "@/app/components/sections/OurfleetSection2";

export default function Fleet() {
  return (
    <>
      <SEO 
        title={seoConfig.fleet.title}
        description={seoConfig.fleet.description}
        url={seoConfig.fleet.url}
      />
      <HeroSection2
        title="OUR FLEET"
        subtitle="We offer you a super VIP experience in New York, New Jersey, NYC Metro, LUX"
        backgroundImage="/serve-image.png"
        image="/fleet-header.png" // only one image now
      />
      <OurFleetSection/>
    </>
  );
}
