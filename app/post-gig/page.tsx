"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { AlertCircle, CheckCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function PostGigPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    location: "",
    priceType: "",
    price: "",
    providerName: "",
    whatsapp: "",
    urgent: false,
  })

  const categories = [
    "Tutoring",
    "Design",
    "Plumbing",
    "Delivery",
    "Carpentry",
    "Cleaning",
    "Mechanics",
    "IT",
    "Gardening",
    "Baby Sitting",
    "Fumigators",
    "Satellite Installation",
    "Car Guarding",
    "Agri Business",
    "Micro-tasking",
    "Photography",
    "Writing",
    "Translation",
    "Other",
  ]

  const locations = ["Harare", "Bulawayo", "Gweru", "Mutare", "Kwekwe", "Kadoma", "Masvingo", "Chinhoyi", "Other"]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Create the gig object
      const gigData = {
        title: formData.title,
        description: formData.description,
        category: formData.category,
        location: formData.location,
        price: `$${formData.price}${formData.priceType === "hourly" ? "/hour" : ""}`,
        provider: {
          name: formData.providerName,
          rating: 5.0,
          reviews: 0,
          whatsapp: formData.whatsapp,
        },
        posted: "Just now",
        urgent: formData.urgent,
      }

      // Save to API
      const response = await fetch("/api/gigs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(gigData),
      })

      if (response.ok) {
        setIsSubmitting(false)
        setShowSuccess(true)

        // Redirect after success
        setTimeout(() => {
          router.push("/gigs")
        }, 3000)
      } else {
        throw new Error("Failed to post gig")
      }
    } catch (error) {
      console.error("Error posting gig:", error)
      setIsSubmitting(false)
      // You could add error handling here
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="w-full max-w-md mx-4">
          <CardContent className="pt-6 text-center">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Gig Posted Successfully!</h2>
            <p className="text-muted-foreground mb-4">Your gig is now live and visible to potential clients.</p>
            <p className="text-sm text-muted-foreground">Redirecting to gigs page...</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Post a Gig</h1>
            <p className="text-muted-foreground">Share your skills and connect with clients who need your services</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Gig Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Title */}
                <div className="space-y-2">
                  <Label htmlFor="title">Gig Title *</Label>
                  <Input
                    id="title"
                    placeholder="e.g., Mathematics Tutor for O-Level Students"
                    value={formData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    required
                  />
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your service, experience, and what clients can expect..."
                    rows={4}
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    required
                  />
                </div>

                {/* Category and Location */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Category *</Label>
                    <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category.toLowerCase()}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Location *</Label>
                    <Select value={formData.location} onValueChange={(value) => handleInputChange("location", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        {locations.map((location) => (
                          <SelectItem key={location} value={location.toLowerCase()}>
                            {location}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Pricing */}
                <div className="space-y-4">
                  <Label>Pricing *</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Select value={formData.priceType} onValueChange={(value) => handleInputChange("priceType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Price type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hourly">Per Hour</SelectItem>
                        <SelectItem value="fixed">Fixed Price</SelectItem>
                        <SelectItem value="negotiable">Negotiable</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      placeholder="Amount (USD)"
                      value={formData.price}
                      onChange={(e) => handleInputChange("price", e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Provider Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Contact Information</h3>

                  <div className="space-y-2">
                    <Label htmlFor="providerName">Your Name *</Label>
                    <Input
                      id="providerName"
                      placeholder="Full name"
                      value={formData.providerName}
                      onChange={(e) => handleInputChange("providerName", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="whatsapp">WhatsApp Number *</Label>
                    <Input
                      id="whatsapp"
                      placeholder="+263771234567"
                      value={formData.whatsapp}
                      onChange={(e) => handleInputChange("whatsapp", e.target.value)}
                      required
                    />
                    <p className="text-sm text-muted-foreground">Clients will contact you via WhatsApp</p>
                  </div>
                </div>

                {/* Urgent Checkbox */}
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="urgent"
                    checked={formData.urgent}
                    onCheckedChange={(checked) => handleInputChange("urgent", checked as boolean)}
                  />
                  <Label htmlFor="urgent">Mark as urgent (appears at top of listings)</Label>
                </div>

                {/* Info Alert */}
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Your gig will be visible immediately. Make sure all information is accurate as clients will contact
                    you directly.
                  </AlertDescription>
                </Alert>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Posting Gig..." : "Post Gig"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
