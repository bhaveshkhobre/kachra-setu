import FeatureCard from "@/components/FeatureCard";
import blueBin from "@/assets/blueBin.jpg"
import greenBin from "@/assets/greenbin2.png"
import redbin from "@/assets/redbin.png"
import yellowbin from "@/assets/yellowSanitarybin.png"
import Glassbin from "@/assets/glassBin.jpeg"
import bluewaste from "@/assets/bluewaste.jpg"
import greenwaste from "@/assets/greenwaste.jpg"
import redwaste from "@/assets/redwaste.jpg"
import yellowwaste from "@/assets/yellowwaste.jpg"
import glasswaste from "@/assets/glasswaste.jpg"
import { 
  Truck, 
  Map, 
  MessageCircle, 
  Recycle, 
  ShoppingCart, 
  GraduationCap
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Truck,
      title: "GPS Tracking",
      description: "Real-time monitoring of waste collection vehicles for optimized routes and schedules.",
      features: [
        "Live vehicle location tracking",
        "Route optimization algorithms",
        "Schedule monitoring & alerts",
        "Performance analytics dashboard"
      ]
    },
    {
      icon: Map,
      title: "Digital Mapping",
      description: "Interactive maps showcasing treatment plants, recycling centers, and disposal facilities.",
      features: [
        "Treatment plant locations",
        "Recycling center details",
        "Facility capacity information",
        "Service area coverage"
      ]
    },
    {
      icon: MessageCircle,
      title: "AI Chatbot",
      description: "Intelligent assistant for logging complaints, tracking status, and providing solutions.",
      features: [
        "24/7 complaint registration",
        "Status tracking & updates",
        "Instant solution suggestions",
        "Multi-language support"
      ]
    },
    {
      icon: Recycle,
      title: "Scrap Selling",
      description: "Online platform for households and businesses to sell recyclable materials.",
      features: [
        "Material price calculator",
        "Pickup scheduling",
        "Payment processing",
        "Environmental impact tracking"
      ]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Store",
      description: "Marketplace for dustbins, safety kits, and eco-friendly waste management tools.",
      features: [
        "Professional safety equipment",
        "Color-coded dustbins",
        "Eco-friendly products",
        "Bulk order discounts"
      ]
    },
    {
      icon: GraduationCap,
      title: "Learning Portal",
      description: "Educational resources and training programs for citizens and sanitation workers.",
      features: [
        "Video tutorials & guides",
        "Safety protocol training",
        "Certification programs",
        "Best practices documentation"
      ]
    }
  ];

  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Waste Management
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our integrated platform combines cutting-edge technology with citizen engagement 
            to create efficient, transparent, and sustainable waste management systems.
          </p>
        </div>
        {/* Bin Images Row */}
        <div className="flex flex-row justify-center items-center gap-6 mb-12 mt-60 flex-wrap">
          {/* Blue Bin */}
          <div className="relative group transition-transform">
            <img src="https://i.postimg.cc/x8cXBWp6/blueBin.jpg" alt="Blue Bin" className="h-58 w-48 object-contain rounded-lg shadow transition-transform duration-300 group-hover:scale-105 group-hover:ring-4 group-hover:ring-primary/40" />
            <img
              src="https://i.postimg.cc/Y9VnWLV8/bluewaste.jpg"
              alt="Blue Bin Popup"
              className="hidden group-hover:block absolute left-1/2 -translate-x-1/2 bottom-full mb-4 w-64 h-50 object-contain rounded-xl shadow-lg z-20 bg-white"
              style={{ pointerEvents: 'none' }}
            />
          </div>
          {/* Green Bin */}
          <div className="relative group transition-transform">
            <img src="https://i.postimg.cc/52xXVYrH/greenbin2.png" alt="Green Bin" className="h-58 w-48 object-contain rounded-lg shadow transition-transform duration-300 group-hover:scale-105 group-hover:ring-4 group-hover:ring-primary/40" />
            <img
              src="https://i.postimg.cc/Hsm0PtQX/greenwaste.jpg"
              alt="Green Bin Popup"
              className="hidden group-hover:block absolute left-1/2 -translate-x-1/2 bottom-full mb-4 w-64 h-50 object-contain rounded-xl shadow-lg z-20  bg-white"
              style={{ pointerEvents: 'none' }}
            />
          </div>
          {/* Red Bin */}
          <div className="relative group transition-transform">
            <img src="https://i.postimg.cc/x1cSM9Jx/redbin.png" alt="Red Bin" className="h-58 w-48 object-contain rounded-lg shadow transition-transform duration-300 group-hover:scale-105 group-hover:ring-4 group-hover:ring-primary/40" />
            <img
              src="https://i.postimg.cc/nrJmgHQp/redwaste.jpg"
              alt="Red Bin Popup"
              className="hidden group-hover:block absolute left-1/2 -translate-x-1/2 bottom-full mb-4 w-64 h-50 object-contain rounded-xl shadow-lg z-20  bg-white"
              style={{ pointerEvents: 'none' }}
            />
          </div>
          {/* Yellow Bin */}
          <div className="relative group transition-transform">
            <img src="https://i.postimg.cc/VsgyhJXZ/yellow-Sanitarybin.png" alt="Yellow Sanitary Bin" className="h-58 w-48 object-contain rounded-lg shadow transition-transform duration-300 group-hover:scale-105 group-hover:ring-4 group-hover:ring-primary/40" />
            <img
              src="https://i.postimg.cc/13jqP0NW/yellowwaste.jpg"
              alt="Yellow Bin Popup"
              className="hidden group-hover:block absolute left-1/2 -translate-x-1/2 bottom-full mb-4 w-64 h-50 object-contain rounded-xl shadow-lg z-20 bg-white"
              style={{ pointerEvents: 'none' }}
            />
          </div>
          {/* Glass Bin */}
          <div className="relative group transition-transform">
            <img src="https://i.postimg.cc/MTzP0Y36/glassBin.jpg" alt="Glass Bin" className="h-58 w-48 object-contain rounded-lg shadow transition-transform duration-300 group-hover:scale-105 group-hover:ring-4 group-hover:ring-primary/40" />
            <img
              src="https://i.postimg.cc/wvhyhS4P/glasswaste.jpg"
              alt="Glass Bin Popup"
              className="hidden group-hover:block absolute left-1/2 -translate-x-1/2 bottom-full mb-4 w-64 h-50 object-contain rounded-xl shadow-lg z-20  bg-white"
              style={{ pointerEvents: 'none' }}
            />
          </div>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              features={feature.features}
              buttonText="Explore Feature"
              onAction={() => {
                // Scroll to corresponding section
                const sectionId = feature.title.toLowerCase().replace(/\s+/g, '');
                const element = document.getElementById(sectionId);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Features;