import SEO from "@/app/components/SEO";
import { seoConfig } from "@/lib/seo-config";
import ContactSection from "./ContactSection";

export default function ContactPage() {
    return (
    <>
      <SEO 
        title={seoConfig.contact.title}
        description={seoConfig.contact.description}
        url={seoConfig.contact.url}
      />
      <ContactSection />
    </>
    );
}
