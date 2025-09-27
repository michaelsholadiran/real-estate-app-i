import { Home, Building, Pill as Villa, TreePine } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const propertyTypes = [
  { icon: Home, name: "Penthouse", count: "7 Property" },
  { icon: Building, name: "Townhouse", count: "3 Property" },
  { icon: Villa, name: "Villa", count: "4 Property" },
  { icon: Building, name: "Apartments", count: "2 Property" },
  { icon: Home, name: "Homestay", count: "3 Property" },
  { icon: TreePine, name: "Land/Plot", count: "1 Property" },
]

export function PropertyTypes() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground mb-4">Try Searching For</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {"Thousands of luxury home enthusiasts just like you have found their dream home"}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {propertyTypes.map(({ icon: Icon, name, count }) => (
            <Card key={name} className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-border">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-lg bg-muted group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="font-semibold text-foreground mb-1">{name}</h3>
                <p className="text-sm text-muted-foreground">{count}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
