"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Search, Users, Star, Smartphone, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/gigs?search=${encodeURIComponent(searchQuery.trim())}`)
    } else {
      router.push("/gigs")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  const categories = [
    { name: "Tutoring", icon: "📚", count: "120+ gigs" },
    { name: "Design", icon: "🎨", count: "85+ gigs" },
    { name: "Plumbing", icon: "🔧", count: "45+ gigs" },
    { name: "Delivery", icon: "🚚", count: "200+ gigs" },
    { name: "Carpentry", icon: "🪚", count: "60+ gigs" },
    { name: "Cleaning", icon: "🧹", count: "90+ gigs" },
    { name: "Mechanics", icon: "🔩", count: "75+ gigs" },
    { name: "IT", icon: "💻", count: "110+ gigs" },
    { name: "Gardening", icon: "🌱", count: "65+ gigs" },
    { name: "Baby Sitting", icon: "👶", count: "40+ gigs" },
    { name: "Fumigators", icon: "🐛", count: "25+ gigs" },
    { name: "Satellite Installation", icon: "📡", count: "30+ gigs" },
    { name: "Car Guarding", icon: "🚗", count: "55+ gigs" },
    { name: "Agri Business", icon: "🌾", count: "35+ gigs" },
    { name: "Micro-tasking", icon: "📋", count: "95+ gigs" },
  ]

  const features = [
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile-First",
      description: "Works perfectly on any phone, even with slow internet",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Local Focus",
      description: "Connect with service providers in your area",
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Trusted Reviews",
      description: "Real ratings from verified customers",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Instant Connect",
      description: "Contact via WhatsApp or SMS immediately",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-yellow-600 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Find Your Next <span className="text-yellow-300">Hustle</span> in Zimbabwe
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Connect with local service providers or offer your skills. From tutoring to plumbing, find trusted
              professionals in your area.
            </p>

            {/* Search Bar */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-8">
              <div className="flex-1">
                <Input
                  placeholder="What service do you need?"
                  className="h-12 text-lg bg-white/90 border-0 text-gray-900 placeholder:text-gray-600"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
              </div>
              <Button
                size="lg"
                className="h-12 px-8 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold"
                onClick={handleSearch}
              >
                <Search className="h-5 w-5 mr-2" />
                Search Gigs
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <Link href="/gigs">Browse All Gigs</Link>
              </Button>
              <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900">
                <Link href="/post-gig">Post a Gig</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link key={category.name} href={`/gigs?category=${category.name.toLowerCase()}`}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <h3 className="font-semibold mb-1">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.count}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose HustleHub Zimbabwe?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Hustle?</h2>
          <p className="text-xl mb-8 text-green-100">Join thousands of Zimbabweans earning through their skills</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <Link href="/gigs">Find Work</Link>
            </Button>
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900">
              <Link href="/post-gig">Offer Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
