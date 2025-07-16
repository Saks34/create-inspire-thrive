import { ArrowRight, Sparkles, Rocket, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl float"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-primary/20 rounded-full blur-xl float-delayed"></div>
      <div className="absolute bottom-32 left-20 w-24 h-24 bg-secondary/20 rounded-full blur-xl float"></div>
      <div className="absolute bottom-20 right-10 w-12 h-12 bg-accent/20 rounded-full blur-xl float-delayed"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8 animate-fade-in-up">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-white">Join 10,000+ Dreamers</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            Everything is
            <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              Possible
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
            Turn your wildest dreams into reality. Connect with creators, share ideas, 
            and build the future together in our vibrant community.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 animate-fade-in-up">
            <Button className="btn-hero text-xl px-10 py-6">
              <Rocket className="w-5 h-5 mr-2" />
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button className="btn-outline-hero text-xl px-10 py-6">
              <Sparkles className="w-5 h-5 mr-2" />
              Explore Ideas
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto animate-slide-in-right">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">10K+</div>
              <div className="text-sm text-white/80">Dreamers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-sm text-white/80">Ideas Shared</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">100+</div>
              <div className="text-sm text-white/80">Dreams Realized</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;