"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Menu, X, Phone, ChevronDown, User, Lock, Eye, EyeOff } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

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
              
              {/* Properties Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
                  <span>Properties</span>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                  <DropdownMenuItem>
                    <a href="#" className="block w-full">All Properties</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#" className="block w-full">Luxury Homes</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#" className="block w-full">Apartments</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#" className="block w-full">Commercial</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#" className="block w-full">Investment Properties</a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Pages Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
                  <span>Pages</span>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                  <DropdownMenuItem>
                    <a href="#" className="block w-full">About Us</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#" className="block w-full">Our Team</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#" className="block w-full">Services</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#" className="block w-full">Testimonials</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#" className="block w-full">FAQ</a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

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
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  Add property
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-serif">Log In</DialogTitle>
                </DialogHeader>
                
                {/* Demo credentials hint */}
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                  <div className="text-sm text-orange-800">
                    <div>Your Name*: agent</div>
                    <div>Password*: demo</div>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Name/Email Field */}
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name*</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="name"
                        placeholder="Email or user name"
                        className="pl-10"
                        defaultValue="agent"
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="space-y-2">
                    <Label htmlFor="password">Password*</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        className="pl-10 pr-10"
                        defaultValue="demo"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-muted-foreground" />
                        ) : (
                          <Eye className="h-4 w-4 text-muted-foreground" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Forgot Password */}
                  <div className="text-right">
                    <a href="#" className="text-sm text-primary hover:underline">
                      Forgot password?
                    </a>
                  </div>

                  {/* Login Button */}
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Login
                  </Button>

                  {/* Divider */}
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">
                        or sign up with
                      </span>
                    </div>
                  </div>

                  {/* Google Button */}
                  <Button variant="outline" className="w-full">
                    <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Continue with Google
                  </Button>

                  {/* Sign Up Link */}
                  <div className="text-center text-sm">
                    Not registered yet?{" "}
                    <a href="#" className="text-primary hover:underline font-medium">
                      Sign Up
                    </a>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
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
              
              {/* Properties Mobile Dropdown */}
              <div className="px-3 py-2">
                <div className="text-muted-foreground font-medium mb-2">Properties</div>
                <div className="ml-4 space-y-1">
                  <a href="#" className="block px-3 py-1 text-sm text-muted-foreground hover:text-primary">
                    All Properties
                  </a>
                  <a href="#" className="block px-3 py-1 text-sm text-muted-foreground hover:text-primary">
                    Luxury Homes
                  </a>
                  <a href="#" className="block px-3 py-1 text-sm text-muted-foreground hover:text-primary">
                    Apartments
                  </a>
                  <a href="#" className="block px-3 py-1 text-sm text-muted-foreground hover:text-primary">
                    Commercial
                  </a>
                  <a href="#" className="block px-3 py-1 text-sm text-muted-foreground hover:text-primary">
                    Investment Properties
                  </a>
                </div>
              </div>

              {/* Pages Mobile Dropdown */}
              <div className="px-3 py-2">
                <div className="text-muted-foreground font-medium mb-2">Pages</div>
                <div className="ml-4 space-y-1">
                  <a href="#" className="block px-3 py-1 text-sm text-muted-foreground hover:text-primary">
                    About Us
                  </a>
                  <a href="#" className="block px-3 py-1 text-sm text-muted-foreground hover:text-primary">
                    Our Team
                  </a>
                  <a href="#" className="block px-3 py-1 text-sm text-muted-foreground hover:text-primary">
                    Services
                  </a>
                  <a href="#" className="block px-3 py-1 text-sm text-muted-foreground hover:text-primary">
                    Testimonials
                  </a>
                  <a href="#" className="block px-3 py-1 text-sm text-muted-foreground hover:text-primary">
                    FAQ
                  </a>
                </div>
              </div>

              <a href="#" className="block px-3 py-2 text-muted-foreground hover:text-primary">
                Blog
              </a>
              <a href="#" className="block px-3 py-2 text-muted-foreground hover:text-primary">
                Contact
              </a>
              <div className="px-3 py-2">
                <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      Add property
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-serif">Log In</DialogTitle>
                    </DialogHeader>
                    
                    {/* Demo credentials hint */}
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                      <div className="text-sm text-orange-800">
                        <div>Your Name*: agent</div>
                        <div>Password*: demo</div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {/* Name/Email Field */}
                      <div className="space-y-2">
                        <Label htmlFor="mobile-name">Your Name*</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="mobile-name"
                            placeholder="Email or user name"
                            className="pl-10"
                            defaultValue="agent"
                          />
                        </div>
                      </div>

                      {/* Password Field */}
                      <div className="space-y-2">
                        <Label htmlFor="mobile-password">Password*</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="mobile-password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="pl-10 pr-10"
                            defaultValue="demo"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2"
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4 text-muted-foreground" />
                            ) : (
                              <Eye className="h-4 w-4 text-muted-foreground" />
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Forgot Password */}
                      <div className="text-right">
                        <a href="#" className="text-sm text-primary hover:underline">
                          Forgot password?
                        </a>
                      </div>

                      {/* Login Button */}
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                        Login
                      </Button>

                      {/* Divider */}
                      <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                          <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                          <span className="bg-background px-2 text-muted-foreground">
                            or sign up with
                          </span>
                        </div>
                      </div>

                      {/* Google Button */}
                      <Button variant="outline" className="w-full">
                        <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          />
                          <path
                            fill="currentColor"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          />
                          <path
                            fill="currentColor"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          />
                          <path
                            fill="currentColor"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          />
                        </svg>
                        Continue with Google
                      </Button>

                      {/* Sign Up Link */}
                      <div className="text-center text-sm">
                        Not registered yet?{" "}
                        <a href="#" className="text-primary hover:underline font-medium">
                          Sign Up
                        </a>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
