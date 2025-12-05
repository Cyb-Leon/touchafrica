"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const clients = [
  {
    name: "Bokomo Botswana",
    logo: "/bokomo-logo.jpg",
    testimonial:
      "Touch Africa Group is a committed and extremely professional company. We are fortunate to have them as a service provider.",
  },
  {
    name: "Kamoso Africa",
    logo: "/kamoso-logo.jpeg",
    testimonial: "The work ethic at TAG is inspiring. They deliver almost effortlessly.",
  },
  {
    name: "Add-X Trading",
    logo: "/addx-logo.png",
    testimonial:
      "International business relationships are important, especially when it is with a dedicated team, such as Touch Africa Group.",
  },
  {
    name: "Raw Feeds",
    logo: "/raw-feeds-logo.jpeg",
    testimonial:
      "Exceptional work ethic and commitment to exploring innovatively is what gives TAG the upper hand, and a best choice for us.",
  },
  {
    name: "Afrilube",
    logo: "/afrilube-logo.png",
    testimonial: "We strive to work with the best, and Touch Africa Group is one of them.",
  },
]

export function Clients() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold">
            Trusted Partners
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Our Valued Clients</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Building lasting relationships with industry leaders across Africa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {clients.map((client, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-12 object-contain md:grayscale group-hover:grayscale-0 transition-all"
                  />
                  <Quote className="h-8 w-8 text-primary/20" />
                </div>
                <p className="text-muted-foreground italic mb-4 leading-relaxed">"{client.testimonial}"</p>
                <div className="font-semibold text-foreground">{client.name}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional client logos */}
        <div className="border-t border-border pt-12">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-foreground">Also Trusted By</h3>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {clients.map((client) => (
              <div key={client.name} className="grayscale grayscale-0 transition-all not-md:opacity-90 hover:opacity-100">
                <img src={client.logo} alt={client.name} className="h-12 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 