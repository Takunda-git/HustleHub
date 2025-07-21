import { NextResponse } from "next/server"

// In-memory storage for demo (in production, use Supabase)
const gigsStorage: any[] = [
  {
    id: "1",
    title: "Mathematics Tutor for O-Level Students",
    description: "Experienced teacher offering math tutoring for Form 1-4 students. Available weekends and evenings.",
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
    description: "Licensed plumber available for emergency repairs, pipe installation, and bathroom renovations.",
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
  {
    id: "5",
    title: "Car Mechanic - Engine Repairs & Servicing",
    description:
      "Experienced mechanic specializing in engine repairs, brake servicing, and general car maintenance. Mobile service available.",
    category: "mechanics",
    location: "Harare",
    price: "$25/hour",
    provider: {
      name: "Tafadzwa Mujuru",
      rating: 4.7,
      reviews: 32,
      whatsapp: "+263775567890",
    },
    posted: "4 hours ago",
    urgent: false,
  },
  {
    id: "6",
    title: "IT Support & Computer Repairs",
    description:
      "Professional IT technician offering computer repairs, software installation, network setup, and tech support for homes and small businesses.",
    category: "it",
    location: "Bulawayo",
    price: "$20/hour",
    provider: {
      name: "Nyasha Chigumira",
      rating: 4.9,
      reviews: 28,
      whatsapp: "+263776678901",
    },
    posted: "1 hour ago",
    urgent: false,
  },
  {
    id: "7",
    title: "Garden Maintenance & Landscaping",
    description:
      "Professional gardener offering lawn mowing, tree trimming, flower bed maintenance, and basic landscaping services.",
    category: "gardening",
    location: "Harare",
    price: "$12/hour",
    provider: {
      name: "Farai Mapfumo",
      rating: 4.6,
      reviews: 19,
      whatsapp: "+263777789012",
    },
    posted: "6 hours ago",
    urgent: false,
  },
  {
    id: "8",
    title: "Reliable Baby Sitter & Child Care",
    description:
      "Experienced childcare provider available for babysitting, after-school care, and weekend supervision. References available.",
    category: "baby sitting",
    location: "Gweru",
    price: "$8/hour",
    provider: {
      name: "Memory Sibanda",
      rating: 4.8,
      reviews: 15,
      whatsapp: "+263778890123",
    },
    posted: "2 hours ago",
    urgent: false,
  },
  {
    id: "9",
    title: "Professional Pest Control & Fumigation",
    description:
      "Licensed fumigator providing comprehensive pest control services for homes, offices, and warehouses. Safe and effective treatments.",
    category: "fumigators",
    location: "Harare",
    price: "$40-80",
    provider: {
      name: "Kudakwashe Mutasa",
      rating: 4.5,
      reviews: 22,
      whatsapp: "+263779901234",
    },
    posted: "8 hours ago",
    urgent: true,
  },
  {
    id: "10",
    title: "DSTV & Satellite Installation Expert",
    description:
      "Certified technician for DSTV, satellite dish installation, signal optimization, and decoder setup. Same-day service available.",
    category: "satellite installation",
    location: "Mutare",
    price: "$30-60",
    provider: {
      name: "Tinashe Makoni",
      rating: 4.7,
      reviews: 41,
      whatsapp: "+263770012345",
    },
    posted: "3 hours ago",
    urgent: false,
  },
  {
    id: "11",
    title: "Professional Car Guard Services",
    description:
      "Reliable car guarding services for events, shopping centers, and residential areas. Insured and experienced security personnel.",
    category: "car guarding",
    location: "Harare",
    price: "$5-15",
    provider: {
      name: "Simbarashe Dube",
      rating: 4.4,
      reviews: 33,
      whatsapp: "+263771123456",
    },
    posted: "5 hours ago",
    urgent: false,
  },
  {
    id: "12",
    title: "Small-Scale Farming & Agri Consulting",
    description:
      "Agricultural consultant offering crop planning, soil testing, irrigation setup, and farming advice for small-scale farmers.",
    category: "agri business",
    location: "Masvingo",
    price: "$25/consultation",
    provider: {
      name: "Chiedza Moyo",
      rating: 4.8,
      reviews: 17,
      whatsapp: "+263772234567",
    },
    posted: "1 day ago",
    urgent: false,
  },
  {
    id: "13",
    title: "Online Surveys & Data Entry Tasks",
    description:
      "Offering micro-tasking services including online surveys, data entry, content moderation, and simple digital tasks. Fast turnaround.",
    category: "micro-tasking",
    location: "Harare",
    price: "$2-10/task",
    provider: {
      name: "Rutendo Chakanyuka",
      rating: 4.6,
      reviews: 89,
      whatsapp: "+263773345678",
    },
    posted: "30 minutes ago",
    urgent: false,
  },
]

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")
    const location = searchParams.get("location")
    const search = searchParams.get("search")

    let filteredGigs = [...gigsStorage]

    if (category && category !== "all") {
      filteredGigs = filteredGigs.filter((gig) => gig.category === category)
    }

    if (location && location !== "all") {
      filteredGigs = filteredGigs.filter((gig) => gig.location.toLowerCase() === location.toLowerCase())
    }

    if (search) {
      filteredGigs = filteredGigs.filter(
        (gig) =>
          gig.title.toLowerCase().includes(search.toLowerCase()) ||
          gig.description.toLowerCase().includes(search.toLowerCase()),
      )
    }

    // Sort by urgent first, then by newest
    filteredGigs.sort((a, b) => {
      if (a.urgent && !b.urgent) return -1
      if (!a.urgent && b.urgent) return 1
      return 0
    })

    return NextResponse.json(filteredGigs)
  } catch (error) {
    console.error("Error fetching gigs:", error)
    return NextResponse.json({ error: "Failed to fetch gigs" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Create new gig with unique ID
    const newGig = {
      id: Date.now().toString(),
      ...body,
    }

    // Add to storage (in production, save to Supabase)
    gigsStorage.unshift(newGig) // Add to beginning of array

    console.log("New gig posted:", newGig)

    return NextResponse.json({ message: "Gig posted successfully", id: newGig.id }, { status: 201 })
  } catch (error) {
    console.error("Error posting gig:", error)
    return NextResponse.json({ error: "Failed to post gig" }, { status: 500 })
  }
}
