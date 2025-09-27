import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"

export function LoanSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground mb-6">
              Do you need a home loan?
              <br />
              Get pre-approved
            </h2>
            <p className="text-muted-foreground text-lg mb-8 text-pretty">
              Find a lender who can offer competitive mortgage rates and help you with pre-approval.
            </p>

            {/* Loan Calculator Form */}
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <Label htmlFor="loan-amount" className="text-sm font-medium text-foreground">
                      Total Amount
                    </Label>
                    <Input id="loan-amount" placeholder="50000" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="down-payment" className="text-sm font-medium text-foreground">
                      Down Payment
                    </Label>
                    <Input id="down-payment" placeholder="3000" className="mt-1" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <Label htmlFor="interest-rate" className="text-sm font-medium text-foreground">
                      Interest Rate (%)
                    </Label>
                    <Input id="interest-rate" placeholder="20" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="loan-term" className="text-sm font-medium text-foreground">
                      Loan Term (Years)
                    </Label>
                    <Input id="loan-term" placeholder="20" className="mt-1" />
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Calculate Monthly Payment
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="/modern-luxury-home.png"
              alt="Luxury home exterior"
              className="w-full h-[600px] object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
