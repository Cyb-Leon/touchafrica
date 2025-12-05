"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Truck, Users, Shield, Clock } from "lucide-react"
import { QuoteFormDialog } from "@/components/quote-form-dialog"

const vehicles = [
  {
    name: "Flat Deck Trucks",
    description: "Versatile 18m trailers with container locks, uprights, tarps, chains and straps.",
    capacity: "Up to 30 tons",
    image: "/flat-deck-truck.JPG",
  },
  {
    name: "Tipper Trucks",
    description: "Specialized for agricultural products and mining materials transportation.",
    capacity: "Bulk cargo",
    image: "/tipper-truck.JPG",
  },
  {
    name: "Low-Bed Trailers",
    description: "Heavy equipment and oversized cargo transportation solutions.",
    capacity: "Heavy loads",
    image: "/lowbed-trailer.JPG",
  },
]

const features = [
  {
    icon: Shield,
    title: "Fully Insured",
    description: "P35M coverage",
  },
  {
    icon: Users,
    title: "Trained Drivers",
    description: "Professional team",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Always available",
  },
  {
    icon: Truck,
    title: "GPS Tracked",
    description: "Real-time monitoring",
  },
]

export function Fleet() {
  return (
    <section id="fleet" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold">
            Our Fleet
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Vehicles Available for Rent</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Well-maintained trucks and trailers in proper roadworthy condition
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {vehicles.map((vehicle, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-border"
            >
              <div className="relative overflow-hidden">
                <img
                  src={vehicle.image || "/placeholder.svg"}
                  alt={vehicle.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Available
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground">{vehicle.name}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{vehicle.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <div className="text-sm text-muted-foreground">Capacity</div>
                    <div className="font-semibold text-foreground">{vehicle.capacity}</div>
                  </div>
                  <QuoteFormDialog vehicleType={vehicle.name} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-muted/50 rounded-2xl p-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">{feature.title}</div>
                  <div className="text-sm text-muted-foreground">{feature.description}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
