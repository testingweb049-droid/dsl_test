import CarouselSection from "./CarouselSection";

interface AirportItem {
  name: string;
  image: string;
  href: string;
}

const defaultAirports: AirportItem[] = [
  { name: "NEWARK AIRPORT (EWR)", image: "/image 3.png", href: "/newark-airport-service" },
  { name: "TETERBORO AIRPORT (TEB)", image: "/Teterboro.jpg", href: "/teterboro-airport-service" },
  { name: "WESTCHESTER COUNTY (HPN)", image: "/image 6--.PNG", href: "/westchester-airport-service" },
  { name: "JOHN F. KENNEDY AIRPORT (JFK)", image: "/image---.JPG", href: "/jfk-airport-service" },
  { name: "LAGUARDIA AIRPORT (LGA)", image: "/image2.WEBP", href: "/laguardia-airport-service" },
];

interface AirportsWeServeProps {
  description?: string;
  airports?: AirportItem[];
}

export default function AirportsWeServe({ description, airports }: AirportsWeServeProps = {}) {
  const defaultDescription = "We provide a super VIP experience in New York, New Jersey, Pennsylvania, and Connecticut, US.";
  
  return (
    <CarouselSection
      title="THE AIRPORTS WE SERVE"
      description={description || defaultDescription}
      items={airports || defaultAirports}
      backgroundImage="/section.png"
    />
  );
}
