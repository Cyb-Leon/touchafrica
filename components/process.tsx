"use client"

import { MapPin, CheckCircle2, Truck, Package } from "lucide-react"

const steps = [
  {
    icon: MapPin,
    title: "Parcel Booking",
    description: "Book your shipment online or contact our team for assistance.",
  },
  {
    icon: Package,
    title: "Parcel Loading",
    description: "Professional handling and secure loading of your goods.",
  },
  {
    icon: Truck,
    title: "In Transit",
    description: "Real-time tracking with 24/7 satellite monitoring.",
  },
  {
    icon: CheckCircle2,
    title: "Parcel Delivery",
    description: "Safe and timely delivery to your destination.",
  },
]

export function Process() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold">
            Our Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">How We Deliver Your Parcel</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A streamlined process ensuring your cargo reaches its destination safely
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative group">
                <div className="bg-card border border-border rounded-xl p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    {index + 1}
                  </div>
                  <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
