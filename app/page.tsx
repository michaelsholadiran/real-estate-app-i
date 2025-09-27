import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { PropertyTypes } from "@/components/property-types"
import { FeaturedProperties } from "@/components/featured-properties"
import { ServicesSection } from "@/components/services-section"
import { LoanSection } from "@/components/loan-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <PropertyTypes />
      <FeaturedProperties />
      <ServicesSection />
      <LoanSection />
    </main>
  )
}
