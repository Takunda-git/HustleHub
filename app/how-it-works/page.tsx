import { CheckCircle, MessageCircle, Search, Star, Users, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HowItWorksPage() {
  const steps = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "Browse or Post",
      description: "Search for services you need or post your own gig to offer your skills",
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Connect Instantly",
      description: "Contact service providers directly via WhatsApp or SMS - no waiting around",
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Get It Done",
      description: "Complete the work, pay directly, and leave a review to help others",
    },
  ]

  const benefits = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast & Simple",
      description: "No complex registration. Start browsing or posting immediately.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Local Focus",
      description: "Connect with service providers in your city and neighborhood.",
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Trusted Reviews",
      description: "Real ratings and reviews from verified customers.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How LIIT UP Hub Works</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Simple, fast, and designed for Zimbabwe. Connect with local service providers in just a few taps.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Getting Started is Easy</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full mb-6">
                  {step.icon}
                </div>
                <div className="text-2xl font-bold text-green-600 mb-2">{index + 1}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose LIIT UP Hub?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-lg mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Is LIIT UP Hub free to use?</h3>
                <p className="text-muted-foreground">
                  Yes! Browsing gigs and posting services is completely free. We don't charge any commission fees.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">How do I get paid?</h3>
                <p className="text-muted-foreground">
                  Payment is arranged directly between you and your client. We recommend discussing payment terms before
                  starting work.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Do I need to create an account?</h3>
                <p className="text-muted-foreground">
                  No account needed to browse gigs! You only need to provide contact details when posting a gig.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">How do I contact service providers?</h3>
                <p className="text-muted-foreground">
                  Simply tap the WhatsApp button or call button  on any gig to start chatting directly with the service provider.
                </p>
              </CardContent>
            </Card>
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
              <Link href="/gigs">Browse Gigs</Link>
            </Button>
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900">
              <Link href="/post-gig">Post Your First Gig</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
