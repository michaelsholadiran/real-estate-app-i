"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Home, Building, Pill as Villa } from "lucide-react"

export function HeroSection() {
  const [searchType, setSearchType] = useState("For Rent")

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/luxury-modern-home-interior-with-floor-to-ceiling-.jpg" alt="Luxury home interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light mb-6 text-balance">
          Discover Luxury Homes
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto text-pretty">
          {"Thousands of luxury home enthusiasts just like you visit our website."}
        </p>

        {/* Search Form */}
        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-2xl max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 items-end">
            {/* Search Type Selector */}
            <div className="w-full lg:w-auto">
              <Select value={searchType} onValueChange={setSearchType}>
                <SelectTrigger className="w-full lg:w-[140px] bg-white border-border text-foreground">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="For Rent">For Rent</SelectItem>
                  <SelectItem value="For Sale">For Sale</SelectItem>
                  <SelectItem value="Sold">Sold</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Location Search */}
            <div className="flex-1">
              <Input
                placeholder="Pond, neighborhood, school or agent..."
                className="bg-white border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>

            {/* Search Button */}
            <Button className="w-full lg:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>

          {/* Property Type Filters */}
          <div className="flex flex-wrap gap-3 mt-6 justify-center">
            {[
              { icon: Home, label: "Penthouse" },
              { icon: Building, label: "Townhouse" },
              { icon: Villa, label: "Villa" },
              { icon: Building, label: "Apartments" },
            ].map(({ icon: Icon, label }) => (
              <Button
                key={label}
                variant="outline"
                size="sm"
                className="bg-white/80 border-border text-foreground hover:bg-primary hover:text-primary-foreground"
              >
                <Icon className="h-4 w-4 mr-2" />
                {label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
