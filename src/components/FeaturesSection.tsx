import { Lightbulb, Users, Target, BookOpen, MessageSquare, Trophy } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "Idea Hub",
      description: "Share your wildest dreams and discover inspiring projects from fellow creators. Every idea has the potential to change the world.",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: Users,
      title: "Vibrant Community",
      description: "Connect with like-minded dreamers, collaborate on projects, and build lasting relationships with creators from around the globe.",
      gradient: "from-blue-400 to-purple-500"
    },
    {
      icon: Target,
      title: "Journey Tracker",
      description: "Set ambitious goals, track your progress, and celebrate milestones as you turn your dreams into reality, one step at a time.",
      gradient: "from-green-400 to-blue-500"
    },
    {
      icon: BookOpen,
      title: "Resource Vault",
      description: "Access curated tools, tutorials, and mentorship opportunities to accelerate your learning and skill development.",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: MessageSquare,
      title: "Real-time Chat",
      description: "Engage in meaningful conversations, get instant feedback on your ideas, and support others in their creative endeavors.",
      gradient: "from-pink-400 to-red-500"
    },
    {
      icon: Trophy,
      title: "Achievement System",
      description: "Unlock badges, level up your profile, and showcase your accomplishments as you grow within the community.",
      gradient: "from-indigo-400 to-blue-500"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need to
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Succeed
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform provides all the tools and community support you need to transform 
            your ideas into impactful realities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="group relative overflow-hidden border-0 bg-gradient-card backdrop-blur-sm hover:shadow-card-custom transition-all duration-300 hover:scale-105"
            >
              <CardHeader className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">
                    {feature.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;