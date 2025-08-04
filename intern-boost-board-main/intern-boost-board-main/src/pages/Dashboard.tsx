import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  DollarSign, 
  Users, 
  TrendingUp, 
  Gift, 
  Copy, 
  Share,
  Target,
  Award
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Dashboard() {
  const { toast } = useToast();

  // Dummy data
  const userData = {
    name: "girish",
    referralCode: "girish2025",
    totalRaised: 12580,
    goal: 15000,
    referrals: 23,
    rank: 5
  };

  const rewards = [
    {
      title: "Bronze Achiever",
      description: "Raise 5,000",
      unlocked: true,
      icon: Award,
      color: "text-amber-500"
    },
    {
      title: "Silver Champion", 
      description: "Raise 10,000",
      unlocked: true,
      icon: Award,
      color: "text-slate-400"
    },
    {
      title: "Gold Master",
      description: "Raise 15,000", 
      unlocked: false,
      icon: Award,
      color: "text-yellow-500"
    },
    {
      title: "Platinum Elite",
      description: "Raise 25,000",
      unlocked: false,
      icon: Award,
      color: "text-slate-300"
    }
  ];

  const copyReferralCode = () => {
    navigator.clipboard.writeText(userData.referralCode);
    toast({
      title: "Copied!",
      description: "Referral code copied to clipboard",
    });
  };

  const shareCode = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Join me on InternBoost!',
        text: `Use my referral code: {userData.referralCode}`,
        url: window.location.origin
      });
    } else {
      copyReferralCode();
    }
  };

  const progressPercentage = (userData.totalRaised / userData.goal) * 100;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">
              Welcome back, {userData.name}! 👋
            </h1>
            <p className="text-muted-foreground mt-1">
              Here's your fundraising progress
            </p>
          </div>
          <Badge variant="secondary" className="text-lg px-4 py-2">
            Rank #{userData.rank}
          </Badge>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Raised</CardTitle>
              <DollarSign className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">
                {userData.totalRaised.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Referrals</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userData.referrals}</div>
              <p className="text-xs text-muted-foreground">
                +3 this week
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Goal Progress</CardTitle>
              <Target className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{progressPercentage.toFixed(1)}%</div>
              <p className="text-xs text-muted-foreground">
                {(userData.goal - userData.totalRaised).toLocaleString()} to go
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Referral Code Card */}
          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Share className="h-5 w-5" />
                Your Referral Code
              </CardTitle>
              <CardDescription>
                Share this code to earn referral bonuses
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 p-4 rounded-lg bg-muted/20 border border-border/50">
                <code className="flex-1 text-lg font-mono font-bold text-primary">
                  {userData.referralCode}
                </code>
                <div className="flex gap-2">
                  <Button size="sm" variant="ghost" onClick={copyReferralCode}>
                    <Copy className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost" onClick={shareCode}>
                    <Share className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Goal Progress</span>
                  <span>{progressPercentage.toFixed(1)}%</span>
                </div>
                <Progress value={progressPercentage} className="h-2" />
                <p className="text-sm text-muted-foreground">
                  {userData.totalRaised.toLocaleString()} of {userData.goal.toLocaleString()} goal
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Rewards Card */}
          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gift className="h-5 w-5" />
                Rewards & Achievements
              </CardTitle>
              <CardDescription>
                Unlock rewards as you hit milestones
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {rewards.map((reward, index) => {
                  const Icon = reward.icon;
                  return (
                    <div
                      key={index}
                      className={`flex items-center gap-3 p-3 rounded-lg border {
                        reward.unlocked 
                          ? 'bg-primary/10 border-primary/20' 
                          : 'bg-muted/10 border-border/50'
                      }`}
                    >
                      <Icon className={`h-5 w-5 {reward.unlocked ? reward.color : 'text-muted-foreground'}`} />
                      <div className="flex-1">
                        <p className={`font-medium {reward.unlocked ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {reward.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {reward.description}
                        </p>
                      </div>
                      {reward.unlocked && (
                        <Badge variant="default" className="bg-primary/20 text-primary border-primary/30">
                          Unlocked
                        </Badge>
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}