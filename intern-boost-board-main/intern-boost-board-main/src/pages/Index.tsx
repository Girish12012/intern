import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  TrendingUp, 
  Users, 
  Trophy, 
  Target,
  ArrowRight,
  Star,
  Zap
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Track Progress",
      description: "Monitor your fundraising goals and achievements in real-time"
    },
    {
      icon: Users,
      title: "Referral System", 
      description: "Earn bonuses by referring new participants with your unique code"
    },
    {
      icon: Trophy,
      title: "Leaderboard",
      description: "Compete with other interns and climb the rankings"
    },
    {
      icon: Target,
      title: "Rewards Program",
      description: "Unlock exclusive rewards and recognition for your efforts"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20 text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-2">
            <Star className="h-4 w-4 mr-2" />
            Intern Fundraising Platform
          </Badge>
          
          <h1 className="text-6xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              InternBoost
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Empower your fundraising journey with our comprehensive dashboard. 
            Track progress, compete with peers, and unlock amazing rewards.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/login">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button size="lg" variant="outline">
                View Dashboard
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">250K+</div>
                <p className="text-muted-foreground">Total Raised</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">150+</div>
                <p className="text-muted-foreground">Active Interns</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">Rewards Unlocked</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform provides all the tools and motivation you need to reach your fundraising goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="bg-gradient-card border-border/50 shadow-card hover:scale-105 transition-transform">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-card border-border/50 shadow-card text-center">
          <CardContent className="pt-12 pb-12">
            <Zap className="h-12 w-12 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">
              Ready to boost your fundraising?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Join hundreds of interns who are already crushing their goals with InternBoost
            </p>
            <Link to="/login">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
