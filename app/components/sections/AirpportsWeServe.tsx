import CarouselSection from "./CarouselSection";

const airports = [
  { name: "NEWARK AIRPORT (EWR)", image: "/image 3.png", href: "/newark-airport-service" },
  { name: "TETERBORO AIRPORT (TEB)", image: "/Teterboro.jpg", href: "/teterboro-airport-service" },
  { name: "WESTCHESTER COUNTY (HPN)", image: "/image 6--.PNG", href: "/westchester-airport-service" },
  { name: "JOHN F. KENNEDY AIRPORT (JFK)", image: "/image---.JPG", href: "/jfk-airport-service" },
  { name: "LAGUARDIA AIRPORT (LGA)", image: "/image2.WEBP", href: "/laguardia-airport-service" },
];

export default function AirportsWeServe() {
  return (
    <CarouselSection
      title="THE AIRPORTS WE SERVE"
      description="We provide a super VIP experience in New York, New Jersey, Pennsylvania, and Connecticut, US."
      items={airports}
      backgroundImage="/section.png"
    />
  );
}
