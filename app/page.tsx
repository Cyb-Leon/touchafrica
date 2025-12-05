import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Process } from "@/components/process"
import { Fleet } from "@/components/fleet"
import { Stats } from "@/components/stats"
import { Clients } from "@/components/clients"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Stats />
      <Process />
      <Fleet />
      <Clients />
      <Contact />
      <Footer />
    </div>
  )
}
