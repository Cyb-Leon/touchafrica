"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    title: "Road Transportation",
    description:
      "Long distance haulage with satellite tracking and trained drivers across SADC region. Our fleet ensures safe and timely delivery.",
    image: "/semi-truck-on-highway-cargo-transportation.JPG",
  },
  {
    title: "Freight Forwarding",
    description: "Complete cargo and logistics solutions for import and export operations with door-to-door service.",
    image: "/cargo-containers-shipping-port-logistics.JPG",
  },
  {
    title: "Coal Transport",
    description: "Fast and reliable air cargo services for urgent deliveries across international destinations.",
    image: "/cargo-plane-airport-air-freight.JPG",
  },
  {
    title: "Warehouse Facility",
    description: "Secure storage and distribution facilities with modern inventory management systems.",
    image: "/warehouse-storage-facility-logistics.JPG",
  },
  {
    title: "Fuel Supply",
    description: "Reliable fuel transportation and supply services for mining, construction, and industrial sectors.",
    image: "/fuel-tanker-truck-petroleum-transport.jpg",
  },
  {
    title: "Lubricants Supply",
    description: "Comprehensive range of industrial and mining lubricants from leading brands.",
    image: "/industrial-lubricants-oil-barrels-supply.jpg",
  },
]

export function Services() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length)
  }

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">What We Offer</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comprehensive transport and logistics solutions tailored to your needs
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {services.map((service, index) => (
                <div key={index} className="min-w-full">
                  <Card className="border-none shadow-2xl">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-2 gap-0">
                        <div className="relative h-64 md:h-96 overflow-hidden">
                          <img
                            src={service.image || "/placeholder.svg"}
                            alt={service.title}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent md:hidden" />
                        </div>
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                          <div className="inline-block mb-4 px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-semibold w-fit">
                            Service {index + 1} of {services.length}
                          </div>
                          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{service.title}</h3>
                          <p className="text-muted-foreground text-lg leading-relaxed mb-6">{service.description}</p>
                          <Button className="w-fit">Learn More</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Dots and Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full bg-background hover:bg-background shadow-lg"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <div className="flex gap-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full bg-background hover:bg-background shadow-lg"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
