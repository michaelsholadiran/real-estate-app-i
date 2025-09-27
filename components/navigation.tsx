"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-serif font-bold text-foreground">PROTY</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
                Home
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
                Properties
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
                Pages
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
                Blog
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>1-333-345-6868</span>
            </div>
            <Button variant="outline" size="sm">
              Add property
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <a href="#" className="block px-3 py-2 text-foreground font-medium">
                Home
              </a>
              <a href="#" className="block px-3 py-2 text-muted-foreground hover:text-primary">
                Properties
              </a>
              <a href="#" className="block px-3 py-2 text-muted-foreground hover:text-primary">
                Pages
              </a>
              <a href="#" className="block px-3 py-2 text-muted-foreground hover:text-primary">
                Blog
              </a>
              <a href="#" className="block px-3 py-2 text-muted-foreground hover:text-primary">
                Contact
              </a>
              <div className="px-3 py-2">
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Add property
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
