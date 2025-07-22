import Link from "next/link"
import { MessageCircle, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 bg-green-600 text-white rounded-lg font-bold">
                L
              </div>
              <span className="font-bold text-xl">LIIT UP Hub Zimbabwe</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Empowering the Zimbabwean informal economy through technology. Connect, earn, and grow your hustle.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/gigs" className="text-muted-foreground hover:text-primary">
                  Browse Gigs
                </Link>
              </li>
              <li>
                <Link href="/post-gig" className="text-muted-foreground hover:text-primary">
                  Post a Gig
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-muted-foreground hover:text-primary">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/safety" className="text-muted-foreground hover:text-primary">
                  Safety Tips
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Popular Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/gigs?category=tutoring" className="text-muted-foreground hover:text-primary">
                  Tutoring
                </Link>
              </li>
              <li>
                <Link href="/gigs?category=design" className="text-muted-foreground hover:text-primary">
                  Design
                </Link>
              </li>
              <li>
                <Link href="/gigs?category=mechanics" className="text-muted-foreground hover:text-primary">
                  Mechanics
                </Link>
              </li>
              <li>
                <Link href="/gigs?category=it" className="text-muted-foreground hover:text-primary">
                  IT Services
                </Link>
              </li>
              <li>
                <Link href="/gigs?category=delivery" className="text-muted-foreground hover:text-primary">
                  Delivery
                </Link>
              </li>
              <li>
                <Link href="/gigs?category=micro-tasking" className="text-muted-foreground hover:text-primary">
                  Micro-tasking
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <MessageCircle className="h-4 w-4" />
                <span>+263 718146242</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>spark@liituphub.co.zw</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Harare, Zimbabwe</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 LIIT UP Hub Zimbabwe. Made with ❤️ for Zimbabwe.</p>
        </div>
      </div>
    </footer>
  )
}
