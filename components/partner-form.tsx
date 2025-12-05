"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Truck, MapPin, Package, Calendar, ArrowRight } from "lucide-react"

export function PartnerForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    routeType: "local",
    origin: "",
    destination: "",
    cargoType: "",
    estimatedVolume: "",
    frequency: "",
    additionalInfo: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Partner form submitted:", formData)
    // Handle form submission
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Card className="shadow-xl animate-slide-up">
      <CardHeader>
        <CardTitle className="text-2xl">Partnership Application</CardTitle>
        <CardDescription>
          Fill out the form below to discuss partnership opportunities for your transportation needs
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Company Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <Package className="h-5 w-5 text-primary" />
              Company Information
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name *</Label>
                <Input
                  id="companyName"
                  placeholder="Enter company name"
                  value={formData.companyName}
                  onChange={(e) => handleChange("companyName", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactPerson">Contact Person *</Label>
                <Input
                  id="contactPerson"
                  placeholder="Enter contact person"
                  value={formData.contactPerson}
                  onChange={(e) => handleChange("contactPerson", e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="contact@company.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+267 XXX XXXX"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Route Type Selection */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <Truck className="h-5 w-5 text-primary" />
              Transportation Route
            </h3>
            <div className="space-y-2">
              <Label>Route Type *</Label>
              <RadioGroup
                value={formData.routeType}
                onValueChange={(value) => handleChange("routeType", value)}
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="local" id="local" />
                  <Label htmlFor="local" className="cursor-pointer font-normal">
                    Local Route (Within Botswana)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="crossborder" id="crossborder" />
                  <Label htmlFor="crossborder" className="cursor-pointer font-normal">
                    Cross-Border Route (SADC Region)
                  </Label>
                </div>
              </RadioGroup>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="origin">Origin Location *</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="origin"
                    placeholder="e.g., Gaborone, Botswana"
                    className="pl-10"
                    value={formData.origin}
                    onChange={(e) => handleChange("origin", e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="destination">Destination Location *</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="destination"
                    placeholder="e.g., Johannesburg, South Africa"
                    className="pl-10"
                    value={formData.destination}
                    onChange={(e) => handleChange("destination", e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Cargo Details */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Cargo Details
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="cargoType">Type of Cargo *</Label>
                <Input
                  id="cargoType"
                  placeholder="e.g., Construction materials, Food products"
                  value={formData.cargoType}
                  onChange={(e) => handleChange("cargoType", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="estimatedVolume">Estimated Volume/Weight *</Label>
                <Input
                  id="estimatedVolume"
                  placeholder="e.g., 20 tons, 40ft container"
                  value={formData.estimatedVolume}
                  onChange={(e) => handleChange("estimatedVolume", e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="frequency">Shipment Frequency *</Label>
              <Input
                id="frequency"
                placeholder="e.g., Weekly, Monthly, One-time"
                value={formData.frequency}
                onChange={(e) => handleChange("frequency", e.target.value)}
                required
              />
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-2">
            <Label htmlFor="additionalInfo">Additional Information</Label>
            <Textarea
              id="additionalInfo"
              placeholder="Any special requirements, timeline expectations, or additional details..."
              className="min-h-32"
              value={formData.additionalInfo}
              onChange={(e) => handleChange("additionalInfo", e.target.value)}
            />
          </div>

          <Button type="submit" size="lg" className="w-full group">
            Submit Partnership Application
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
