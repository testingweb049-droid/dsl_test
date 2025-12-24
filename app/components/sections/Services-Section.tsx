import Image from "next/image";
import Link from "next/link";


export default function ServicesSection() {
  const services = [
    {
      title: "POINT-TO-POINT",
      description:
        "Enjoy direct, reliable rides from one location to another without delays.",
      image: "/point-to-point-service.jpg",
      link: "/point-to-point-car-service",
    },
    {
      title: "HOURLY HIRE",
      description:
        "Hire a professional driver and vehicle by the hour to match your schedule.",
      image: "/hourly-hire-service.jpg",
      link: "/hourly-hire-service",
    },
    {
      title: "AIRPORT TRANSFERS",
      description:
        "Start or end your trip with our dependable airport transfer service.",
      image: "/airport-transfer.jpg",
      link: "/airport-transfer-service",
    },
    {
      title: "AS DIRECTED",
      description:
        "With our \"As Directed\" service, your journey is designed entirely around your schedule.",
      image: "/as-dected.jpg",
      link: "/as-directed-service",
    },
  ]

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex-1 h-px bg-gray-400 max-w-24"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 whitespace-nowrap">
              OUR SERVICES
            </h2>
            <div className="flex-1 h-px bg-gray-400 max-w-24"></div>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const CardContent = (
              <div 
                className="relative rounded-lg overflow-hidden aspect-[4/5] group cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                {/* Dark overlay gradient from bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Content at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-lg font-bold text-white uppercase mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );

            return (
              <Link key={index} href={service.link}>
                {CardContent}
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  )
}
