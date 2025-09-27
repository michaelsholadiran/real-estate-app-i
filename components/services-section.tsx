import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calculator, TrendingUp, CreditCard } from "lucide-react"

const services = [
  {
    icon: Calculator,
    title: "Find out how much you can afford",
    description: "We'll help you estimate your budget range. Save to your buyer's profile to help in your search.",
    action: "Learn More",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: TrendingUp,
    title: "Understand your monthly costs",
    description: "Learn about down payment, mortgage rates, and other costs associated with buying a home.",
    action: "Learn More",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: CreditCard,
    title: "Get help with your down payment",
    description:
      "In partnership with Chevron Federal Credit Union, we can help you find down payment assistance programs.",
    action: "Learn More",
    color: "bg-green-100 text-green-600",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground mb-4">Discover how we can help</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {"Thousands of luxury home enthusiasts just like you visit our website."}
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex bg-muted rounded-lg p-1">
            <Button variant="default" size="sm" className="rounded-md">
              Buying
            </Button>
            <Button variant="ghost" size="sm" className="rounded-md">
              Renting
            </Button>
            <Button variant="ghost" size="sm" className="rounded-md">
              Selling
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(({ icon: Icon, title, description, action, color }) => (
            <Card key={title} className="text-center border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="mb-6 flex justify-center">
                  <div className={`p-4 rounded-full ${color}`}>
                    <Icon className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 text-balance">{title}</h3>
                <p className="text-muted-foreground mb-6 text-pretty">{description}</p>
                <Button
                  variant="outline"
                  className="text-primary border-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  {action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
