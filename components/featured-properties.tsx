import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Bed, Bath, Square, Heart } from "lucide-react"

const properties = [
  {
    id: 1,
    title: "House In Foxhall Ave",
    location: "Washington, North Korea",
    price: "VND203,652",
    beds: 6,
    baths: 3,
    sqft: "2,265 sqft",
    image: "/luxury-modern-living-room-fireplace.png",
    status: "Featured",
    type: "For Rent",
  },
  {
    id: 2,
    title: "Popcorn Aspen Colorado",
    location: "Aspen, Colorado",
    price: "VND166,400",
    beds: 5,
    baths: 3,
    sqft: "1,876 sqft",
    image: "/modern-wooden-kitchen.png",
    status: "Featured",
    type: "For Sale",
  },
  {
    id: 3,
    title: "Refinery Parade Apartments",
    location: "New York",
    price: "VND178,942",
    beds: 3,
    baths: 4,
    sqft: "2,265 sqft",
    image: "/luxury-apartment-city-view.png",
    status: "Featured",
    type: "For Rent",
  },
  {
    id: 4,
    title: "Parallel River Apartments",
    location: "West Street, Orlando, Florida",
    price: "VND149,422",
    beds: 6,
    baths: 3,
    sqft: "2,640 sqft",
    image: "/modern-apartment-dining-room.jpg",
    status: "Featured",
    type: "For Sale",
  },
  {
    id: 5,
    title: "Muse Attre Artisan Place",
    location: "Paris, Japan",
    price: "VND179,742",
    beds: 6,
    baths: 3,
    sqft: "1,751 sqft",
    image: "/luxury-modern-kitchen-island.png",
    status: "Featured",
    type: "For Sale",
  },
  {
    id: 6,
    title: "The Terraces Claremont",
    location: "Paris, Japan",
    price: "VND225,614",
    beds: 3,
    baths: 4,
    sqft: "2,325 sqft",
    image: "/elegant-living-room-with-modern-furniture.jpg",
    status: "Featured",
    type: "For Rent",
  },
]

export function FeaturedProperties() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground mb-4">
            {"Today's Luxury Listings"}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {"Thousands of luxury home enthusiasts just like you visit our website."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Card
              key={property.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-border"
            >
              <div className="relative">
                <img
                  src={property.image || "/placeholder.svg"}
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className="bg-primary text-primary-foreground">{property.status}</Badge>
                  <Badge variant="secondary">{property.type}</Badge>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white text-foreground"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>

              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                    {property.title}
                  </h3>
                </div>

                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      <span>{property.beds} Beds</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      <span>{property.baths} Baths</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="h-4 w-4 mr-1" />
                      <span>{property.sqft}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-semibold text-primary">{property.price}</div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Compare
                    </Button>
                    <Button size="sm">Details</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
