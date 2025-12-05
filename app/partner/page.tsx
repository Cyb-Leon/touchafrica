import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PartnerForm } from "@/components/partner-form"

export default function PartnerPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-32 pb-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Partner with Us</h1>
              <p className="text-lg text-muted-foreground text-balance">
                Join Touch Africa Group as a logistics partner and expand your reach across the SADC region
              </p>
            </div>
            <PartnerForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
