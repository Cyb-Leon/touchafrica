"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import { GetStartedDialog } from "./get-started-dialog"

export function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full background image */}
      <div className="absolute inset-0">
        <img
          src="/logistics-transportation-trucks-on-highway-cargo-f.JPG"
          alt="Touch Africa Group Logistics"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <div className="inline-block mb-6 px-4 py-2 bg-primary/90 rounded-full text-white text-sm font-semibold animate-fade-in">
              Fastest & Secured Transport
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance text-white">
              Logistics Solution
              <span className="block text-primary">Across Africa</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 text-pretty leading-relaxed">
              Touch Africa Group delivers comprehensive transport and distribution solutions across Botswana and SADC
              countries with excellence, integrity, and reliability.
            </p>
            <GetStartedDialog>
              <Button size="lg" className="bg-primary hover:bg-primary/90 group text-lg px-8 py-6">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </GetStartedDialog>

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
