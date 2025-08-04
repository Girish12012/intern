import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Gift, 
  Star, 
  Crown, 
  Zap, 
  Target,
  CheckCircle,
  Lock
} from "lucide-react";

export default function Rewards() {
  const currentAmount = 12580;

  const rewardTiers = [
    {
      title: "Starter Pack",
      requirement: 1000,
      unlocked: true,
      claimed: true,
      icon: Star,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      rewards: ["Welcome bonus", "Digital certificate", "Starter guide"]
    },
    {
      title: "Bronze Achiever",
      requirement: 5000,
      unlocked: true,
      claimed: true,
      icon: Target,
      color: "text-amber-600",
      bgColor: "bg-amber-600/10",
      borderColor: "border-amber-600/20",
      rewards: ["Bronze badge", "Exclusive content", "Mentorship session"]
    },
    {
      title: "Silver Champion",
      requirement: 10000,
      unlocked: true,
      claimed: false,
      icon: Crown,
      color: "text-slate-400",
      bgColor: "bg-slate-400/10",
      borderColor: "border-slate-400/20",
      rewards: ["Silver badge", "Networking event access", "50 gift card"]
    },
    {
      title: "Gold Master",
      requirement: 15000,
      unlocked: false,
      claimed: false,
      icon: Crown,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/20",
      rewards: ["Gold badge", "Executive mentorship", "100 gift card", "LinkedIn endorsement"]
    },
    {
      title: "Platinum Elite",
      requirement: 25000,
      unlocked: false,
      claimed: false,
      icon: Zap,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      rewards: ["Platinum badge", "Executive lunch", "250 gift card", "Job referral priority"]
    },
    {
      title: "Diamond Legend",
      requirement: 50000,
      unlocked: false,
      claimed: false,
      icon: Crown,
      color: "text-cyan-400",
      bgColor: "bg-cyan-400/10",
      borderColor: "border-cyan-400/20",
      rewards: ["Diamond badge", "Company presentation", "500 gift card", "Guaranteed interview"]
    }
  ];

  const upcomingRewards = [
    {
      title: "Weekly Challenge Bonus",
      description: "Complete 5 referrals this week",
      progress: 3,
      total: 5,
      reward: "+50 bonus"
    },
    {
      title: "Monthly Milestone",
      description: "Reach 15,000 by month end",
      progress: currentAmount,
      total: 15000,
      reward: "Gold tier unlock"
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <Gift className="h-8 w-8 text-primary" />
              Rewards & Achievements
            </h1>
            <p className="text-muted-foreground mt-1">
              Track your progress and claim amazing rewards
            </p>
          </div>
          <Badge variant="secondary" className="text-lg px-4 py-2">
            {currentAmount.toLocaleString()} raised
          </Badge>
        </div>

        {/* Upcoming Challenges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingRewards.map((challenge, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">{challenge.title}</CardTitle>
                <CardDescription>{challenge.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{challenge.progress} / {challenge.total}</span>
                  </div>
                  <Progress 
                    value={(challenge.progress / challenge.total) * 100} 
                    className="h-2"
                  />
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary" className="text-primary">
                      {challenge.reward}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {Math.round((challenge.progress / challenge.total) * 100)}% complete
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Reward Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rewardTiers.map((tier, index) => {
            const Icon = tier.icon;
            const progressPercentage = Math.min((currentAmount / tier.requirement) * 100, 100);
            
            return (
              <Card 
                key={index}
                className={`bg-gradient-card border-border/50 shadow-card transition-all hover:scale-105 {
                  tier.unlocked ? tier.borderColor : 'border-border/30'
                }`}
              >
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center {tier.bgColor} {tier.borderColor} border-2`}>
                    <Icon className={`h-8 w-8 {tier.color}`} />
                  </div>
                  <CardTitle className="text-xl">{tier.title}</CardTitle>
                  <CardDescription>
                    Raise {tier.requirement.toLocaleString()}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{progressPercentage.toFixed(0)}%</span>
                    </div>
                    <Progress value={progressPercentage} className="h-2" />
                    <p className="text-xs text-muted-foreground text-center">
                      {Math.min(currentAmount, tier.requirement).toLocaleString()} / {tier.requirement.toLocaleString()}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Rewards:</h4>
                    <ul className="space-y-1">
                      {tier.rewards.map((reward, rewardIndex) => (
                        <li key={rewardIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-primary" />
                          {reward}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    {tier.claimed ? (
                      <Badge className="w-full justify-center bg-success/20 text-success border-success/30">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Claimed
                      </Badge>
                    ) : tier.unlocked ? (
                      <Button className="w-full bg-gradient-primary hover:opacity-90">
                        Claim Reward
                      </Button>
                    ) : (
                      <Badge variant="outline" className="w-full justify-center">
                        <Lock className="h-4 w-4 mr-2" />
                        Locked
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
}