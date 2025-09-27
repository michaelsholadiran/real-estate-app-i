"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calculator, TrendingUp, CreditCard, Home, Key, DollarSign, FileText, Users, BarChart3 } from "lucide-react"

const buyingServices = [
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

const rentingServices = [
  {
    icon: Home,
    title: "Find your perfect rental",
    description: "Browse our extensive collection of luxury rental properties with detailed photos and virtual tours.",
    action: "Browse Rentals",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Key,
    title: "Application assistance",
    description: "Get help with rental applications, credit checks, and lease agreements from our expert team.",
    action: "Get Help",
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    icon: FileText,
    title: "Lease management",
    description: "We handle all the paperwork and ensure a smooth rental process from application to move-in.",
    action: "Learn More",
    color: "bg-teal-100 text-teal-600",
  },
]

const sellingServices = [
  {
    icon: BarChart3,
    title: "Property valuation",
    description: "Get an accurate market valuation of your property with our comprehensive analysis and market insights.",
    action: "Get Valuation",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: Users,
    title: "Expert marketing",
    description: "Professional photography, staging, and marketing strategies to showcase your property's best features.",
    action: "View Services",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: DollarSign,
    title: "Maximize your profit",
    description: "Our experienced agents help you get the best price for your property with strategic pricing and negotiation.",
    action: "Learn More",
    color: "bg-emerald-100 text-emerald-600",
  },
]

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState("Buying")

  const getCurrentServices = () => {
    switch (activeTab) {
      case "Buying":
        return buyingServices
      case "Renting":
        return rentingServices
      case "Selling":
        return sellingServices
      default:
        return buyingServices
    }
  }

  const getTabDescription = () => {
    switch (activeTab) {
      case "Buying":
        return "Everything you need to know about purchasing your dream home with our expert guidance and support."
      case "Renting":
        return "Find the perfect rental property with our comprehensive rental services and assistance."
      case "Selling":
        return "Maximize your property's value with our professional selling services and market expertise."
      default:
        return "Thousands of luxury home enthusiasts just like you visit our website."
    }
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground mb-4">Discover how we can help</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {getTabDescription()}
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex bg-muted rounded-lg p-1">
            <Button 
              variant={activeTab === "Buying" ? "default" : "ghost"} 
              size="sm" 
              className="rounded-md px-6 py-2 mx-1"
              onClick={() => setActiveTab("Buying")}
            >
              Buying
            </Button>
            <Button 
              variant={activeTab === "Renting" ? "default" : "ghost"} 
              size="sm" 
              className="rounded-md px-6 py-2 mx-1"
              onClick={() => setActiveTab("Renting")}
            >
              Renting
            </Button>
            <Button 
              variant={activeTab === "Selling" ? "default" : "ghost"} 
              size="sm" 
              className="rounded-md px-6 py-2 mx-1"
              onClick={() => setActiveTab("Selling")}
            >
              Selling
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {getCurrentServices().map(({ icon: Icon, title, description, action, color }) => (
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
