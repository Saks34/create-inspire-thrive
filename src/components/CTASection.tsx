import { ArrowRight, Star, Heart, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '-2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '-4s' }}></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Icons */}
          <div className="flex justify-center space-x-4 mb-8">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-pulse-glow">
              <Star className="w-6 h-6 text-yellow-300" />
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-pulse-glow" style={{ animationDelay: '1s' }}>
              <Heart className="w-6 h-6 text-pink-300" />
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-pulse-glow" style={{ animationDelay: '2s' }}>
              <Zap className="w-6 h-6 text-blue-300" />
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Make
            <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              History?
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of visionaries who are already turning their dreams into reality. 
            Your journey to making the impossible possible starts with a single click.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button className="btn-hero text-xl px-12 py-6 shadow-2xl">
              <span>Join the Movement</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button className="btn-outline-hero text-xl px-12 py-6">
              Watch Demo
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 text-white/70">
            <p className="text-sm mb-4">Trusted by creators worldwide</p>
            <div className="flex justify-center items-center space-x-6">
              <div className="flex items-center space-x-1">
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-sm">4.9/5 rating</span>
              </div>
              <div className="text-sm">
                Free to join • No credit card required
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;