"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";

import { 
  Truck, 
  Map, 
  MessageCircle, 
  Recycle, 
  ShoppingCart, 
  GraduationCap,
  Menu,
  X
} from "lucide-react";
import logo from "@/assets/logo2.jpg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { icon: Truck, label: "GPS Tracking", href: "#tracking" },
    { icon: Map, label: "Facilities Map", href: "#map" },
    { icon: MessageCircle, label: "AI Chatbot", href: "#chatbot" },
    { icon: Recycle, label: "Scrap Selling", href: "#scrap" },
    { icon: ShoppingCart, label: "Store", href: "#store" },
    { icon: GraduationCap, label: "Learning", href: "#learning" },
  ];

  return (
    <nav className="bg-card/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center gap-3">
                <img 
                  src={logo.src} 
                  alt="कचरा सेतु Logo" 
                  className="h-10 w-10"
                />
                <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text ">
                  कचरा सेतु
                </h1>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-2"
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </a>
              ))}
            
            </div>
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center gap-2">
          
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t border-border">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

