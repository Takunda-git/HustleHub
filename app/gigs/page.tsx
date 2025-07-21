"use client"

import { useState, useEffect } from "react"
import { Search, MapPin, Star, MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Gig {
  id: string
  title: string
  description: string
  category: string
  location: string
  price: string
  provider: {
    name: string
    rating: number
    reviews: number
    whatsapp: string
  }
  posted: string
  urgent: boolean
}

export default function GigsPage() {
  const [gigs, setGigs] = useState<Gig[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedLocation, setSelectedLocation] = useState("all")

  // Mock data - in real app, this would come from Supabase
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search)
    const searchFromUrl = searchParams.get("search")
    const categoryFromUrl = searchParams.get("category")

    if (searchFromUrl) {
      setSearchTerm(searchFromUrl)
    }
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl)
    }

    const fetchGigs = async () => {
      try {
        const response = await fetch("/api/gigs")
        if (response.ok) {
          const apiGigs = await response.json()
          setGigs(apiGigs)
        } else {
          // Fallback to mock data if API fails
          const mockGigs: Gig[] = [
            {
              id: "1",
              title: "Mathematics Tutor for O-Level Students",
              description:
                "Experienced teacher offering math tutoring for Form 1-4 students. Available weekends and evenings.",
              category: "tutoring",
              location: "Harare",
              price: "$15/hour",
              provider: {
                name: "Tendai Mukamuri",
                rating: 4.8,
                reviews: 23,
                whatsapp: "+263771234567",
              },
              posted: "2 hours ago",
              urgent: false,
            },
            {
              id: "2",
              title: "Logo Design & Branding Services",
              description:
                "Professional graphic designer creating logos, business cards, and branding materials for small businesses.",
              category: "design",
              location: "Bulawayo",
              price: "$25-50",
              provider: {
                name: "Chipo Ndlovu",
                rating: 4.9,
                reviews: 41,
                whatsapp: "+263772345678",
              },
              posted: "5 hours ago",
              urgent: true,
            },
            {
              id: "3",
              title: "Plumbing Repairs & Installation",
              description:
                "Licensed plumber available for emergency repairs, pipe installation, and bathroom renovations.",
              category: "plumbing",
              location: "Harare",
              price: "$20/hour",
              provider: {
                name: "James Moyo",
                rating: 4.7,
                reviews: 18,
                whatsapp: "+263773456789",
              },
              posted: "1 day ago",
              urgent: false,
            },
            {
              id: "4",
              title: "Food Delivery Service - Harare CBD",
              description: "Fast and reliable food delivery within Harare CBD. Available 7 days a week.",
              category: "delivery",
              location: "Harare",
              price: "$3-8",
              provider: {
                name: "Blessing Chikwanha",
                rating: 4.6,
                reviews: 67,
                whatsapp: "+263774567890",
              },
              posted: "3 hours ago",
              urgent: false,
            },
          ]
          setGigs(mockGigs)
        }
      } catch (error) {
        console.error("Error fetching gigs:", error)
        // Fallback to mock data
        const mockGigs: Gig[] = [
          {
            id: "1",
            title: "Mathematics Tutor for O-Level Students",
            description:
              "Experienced teacher offering math tutoring for Form 1-4 students. Available weekends and evenings.",
            category: "tutoring",
            location: "Harare",
            price: "$15/hour",
            provider: {
              name: "Tendai Mukamuri",
              rating: 4.8,
              reviews: 23,
              whatsapp: "+263771234567",
            },
            posted: "2 hours ago",
            urgent: false,
          },
        ]
        setGigs(mockGigs)
      }
    }

    fetchGigs()
  }, [])

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "tutoring", label: "Tutoring" },
    { value: "design", label: "Design" },
    { value: "plumbing", label: "Plumbing" },
    { value: "delivery", label: "Delivery" },
    { value: "carpentry", label: "Carpentry" },
    { value: "cleaning", label: "Cleaning" },
    { value: "mechanics", label: "Mechanics" },
    { value: "it", label: "IT" },
    { value: "gardening", label: "Gardening" },
    { value: "baby sitting", label: "Baby Sitting" },
    { value: "fumigators", label: "Fumigators" },
    { value: "satellite installation", label: "Satellite Installation" },
    { value: "car guarding", label: "Car Guarding" },
    { value: "agri business", label: "Agri Business" },
    { value: "micro-tasking", label: "Micro-tasking" },
  ]

  const locations = [
    { value: "all", label: "All Locations" },
    { value: "harare", label: "Harare" },
    { value: "bulawayo", label: "Bulawayo" },
    { value: "gweru", label: "Gweru" },
    { value: "mutare", label: "Mutare" },
  ]

  const filteredGigs = gigs.filter((gig) => {
    const matchesSearch =
      gig.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      gig.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || gig.category === selectedCategory
    const matchesLocation = selectedLocation === "all" || gig.location.toLowerCase() === selectedLocation

    return matchesSearch && matchesCategory && matchesLocation
  })

  const handleWhatsAppContact = (whatsapp: string, gigTitle: string) => {
    const message = encodeURIComponent(`Hi! I'm interested in your service: ${gigTitle}`)
    window.open(`https://wa.me/${whatsapp.replace("+", "")}?text=${message}`, "_blank")
  }

  const handlePhoneCall = (phoneNumber: string) => {
    window.open(`tel:${phoneNumber}`, "_self")
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Browse Gigs</h1>
          <p className="text-muted-foreground">Find trusted service providers in your area</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search for services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location) => (
                    <SelectItem key={location.value} value={location.value}>
                      {location.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredGigs.length} gig{filteredGigs.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Gigs Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredGigs.map((gig) => (
            <Card key={gig.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2 line-clamp-2">{gig.title}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="capitalize">
                        {gig.category}
                      </Badge>
                      {gig.urgent && <Badge variant="destructive">Urgent</Badge>}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-3">{gig.description}</p>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {gig.location}
                    </div>
                    <div className="font-semibold text-green-600">{gig.price}</div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center text-sm font-semibold">
                        {gig.provider.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-medium">{gig.provider.name}</p>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs text-muted-foreground">
                            {gig.provider.rating} ({gig.provider.reviews})
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">{gig.posted}</p>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button
                      size="sm"
                      className="flex-1 bg-green-600 hover:bg-green-700"
                      onClick={() => handleWhatsAppContact(gig.provider.whatsapp, gig.title)}
                    >
                      <MessageCircle className="h-4 w-4 mr-1" />
                      WhatsApp
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 bg-transparent"
                      onClick={() => handlePhoneCall(gig.provider.whatsapp)}
                    >
                      <Phone className="h-4 w-4 mr-1" />
                      Call
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredGigs.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No gigs found</h3>
            <p className="text-muted-foreground mb-4">Try adjusting your search or filters</p>
            <Button asChild>Post the first gig in this category</Button>
          </div>
        )}
      </div>
    </div>
  )
}
