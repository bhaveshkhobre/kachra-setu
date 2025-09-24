import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-waste-management.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {/* <img
          src={heroImage.src}
          alt="कचरा सेतु - waste management with GPS tracking and modern city infrastructure"
          className="w-full h-full object-cover"
        /> */}
        <video src="/The Kabadiwala - Sell scrap online.mp4" autoPlay muted loop></video>
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            कचरा सेतु
            <span className="block bg-gradient-hero bg-clip-text text-primary">
              for Modern Cities
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Revolutionizing urban sanitation through GPS tracking, AI-powered solutions, 
            digital mapping, and citizen engagement. Build cleaner, smarter cities with 
            our integrated platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="default" size="lg" className="group">
              Explore Platform
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" size="lg" className="group">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">95%</div>
              <div className="text-sm text-muted-foreground">Collection Efficiency</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">GPS Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">AI</div>
              <div className="text-sm text-muted-foreground">Complaint Resolution</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Treatment Plants</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;