import { Truck, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
            <div className="bg-background/95 bg-transparent p-2 backdrop-blur-mdmy-2 rounded-lg transition-transform group-hover:scale-110">
              <img src="/touch-africa-group-logo.png" alt="Touch Africa Group Logo" className="h-36 w-36" />
            </div>
              <div>
                <div className="font-bold text-lg">Touch Africa</div>
                <div className="text-xs text-background/70">Group</div>
              </div>
            </div>
            <p className="text-background/70 mb-4 leading-relaxed">
              Providing comprehensive transport and distribution solutions across Africa with excellence and integrity.
            </p>
            <div className="flex gap-3">
              <Link href="#" className="bg-background/10 hover:bg-primary p-2 rounded-lg transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="bg-background/10 hover:bg-primary p-2 rounded-lg transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="bg-background/10 hover:bg-primary p-2 rounded-lg transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="bg-background/10 hover:bg-primary p-2 rounded-lg transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-background/70">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Road Transportation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Freight Forwarding
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Coal Transport
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Fuel Supply
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Lubricants Supply
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-background/70">
              <li>
                <Link href="/#about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#fleet" className="hover:text-primary transition-colors">
                  Our Fleet
                </Link>
              </li>
              <li>
                <Link href="/#clients" className="hover:text-primary transition-colors">
                  Our Clients
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3 text-background/70">
              <li>
                <div className="text-sm">Phone:</div>
                <div className="text-background">+267 3164178</div>
              </li>
              <li>
                <div className="text-sm">Email:</div>
                <div className="text-background">info@touchafrica.co.bw</div>
              </li>
              <li>
                <div className="text-sm">Address:</div>
                <div className="text-background">iTowers North, CBD Gaborone, Botswana</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/70">
          <p>&copy; 2025 Touch Africa Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
