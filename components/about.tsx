"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export function About() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src="/cargo-ship-at-port-with-containers.JPG" alt="Cargo operations" className="rounded-2xl shadow-xl" />
            <div className="absolute -bottom-8 -right-8 bg-primary text-primary-foreground p-8 rounded-xl shadow-lg max-w-xs hidden lg:block">
              <div className="text-5xl font-bold mb-2">1800+</div>
              <div className="text-lg">Successful Deliveries This Year</div>
            </div>
          </div>

          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold">
              About Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Providing Full Range of Logistics Solution
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Touch Africa Group is committed to service excellence, renowned for our integrity and ability to deliver.
              We offer fully integrated transport and distribution services across Botswana and SADC countries.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Satellite tracking on all vehicles",
                "P35 million goods in transit insurance",
                "24/7 manned tracking and support",
                "Experienced team of trained drivers",
                "Well-maintained fleet in roadworthy condition",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Learn More
              </Button>
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
