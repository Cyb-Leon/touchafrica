"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Truck } from "lucide-react"
import Link from "next/link"
import { GetStartedDialog } from "./get-started-dialog"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/#services", label: "Services" },
    { href: "/#fleet", label: "Fleet" },
    { href: "/#about", label: "About" },
    { href: "/partner", label: "Partner with Us" },
    { href: "/#contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-2">
        <div className="flex items-center justify-between h-20">
          <Link href="#home" className="flex items-center gap-2 group">
            <div className="bg-background/95 bg-transparent p-2 backdrop-blur-mdmy-2 rounded-lg transition-transform group-hover:scale-110">
              <img src="/touch-africa-group-logo.png" alt="Touch Africa Group Logo" className="h-36 w-36" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-orange-500 hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button className="bg-primary hover:bg-primary/90">Get Quote</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-primary" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6 bg-primary text-white" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-background pb-6 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
                          <GetStartedDialog>

              <Button className="bg-primary hover:bg-primary/90 w-full mt-2">Get Quote</Button>

                          </GetStartedDialog>            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
