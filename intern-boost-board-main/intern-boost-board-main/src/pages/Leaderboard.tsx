import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Trophy, Medal, Award, TrendingUp } from "lucide-react";

export default function Leaderboard() {
  // Dummy leaderboard data
  const leaderboardData = [
    { rank: 1, name: "abc", amount: 18750, referrals: 35, avatar: "SJ" },
    { rank: 2, name: "abc1", amount: 16200, referrals: 28, avatar: "MC" },
    { rank: 3, name: "xyz", amount: 14890, referrals: 31, avatar: "ER" },
    { rank: 4, name: "xyz1", amount: 13250, referrals: 24, avatar: "DK" },
    { rank: 5, name: "girish", amount: 12580, referrals: 23, avatar: "AC", isCurrentUser: true },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-5 w-5 text-yellow-500" />;
      case 2:
        return <Medal className="h-5 w-5 text-slate-400" />;
      case 3:
        return <Award className="h-5 w-5 text-amber-600" />;
      default:
        return <span className="h-5 w-5 flex items-center justify-center text-sm font-bold text-muted-foreground">#{rank}</span>;
    }
  };

  const getRankBadgeColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-yellow-500/20 text-yellow-500 border-yellow-500/30";
      case 2:
        return "bg-slate-400/20 text-slate-400 border-slate-400/30";
      case 3:
        return "bg-amber-600/20 text-amber-600 border-amber-600/30";
      default:
        return "bg-muted/20 text-muted-foreground border-border/50";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <Trophy className="h-8 w-8 text-primary" />
              Leaderboard
            </h1>
            <p className="text-muted-foreground mt-1">
              See how you rank against other interns
            </p>
          </div>
          <Badge variant="secondary" className="text-lg px-4 py-2">
            <TrendingUp className="h-4 w-4 mr-2" />
            Live Rankings
          </Badge>
        </div>

        {/* Top 3 Podium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {leaderboardData.slice(0, 3).map((user, index) => (
            <Card 
              key={user.rank} 
              className={`bg-gradient-card border-border/50 shadow-card {
                index === 0 ? 'order-2 md:order-1 scale-105 shadow-glow' : 
                index === 1 ? 'order-1 md:order-2' : 'order-3'
              }`}
            >
              <CardHeader className="text-center pb-2">
                <div className="flex justify-center mb-2">
                  {getRankIcon(user.rank)}
                </div>
                <Avatar className="h-16 w-16 mx-auto mb-2">
                  <AvatarFallback className="text-lg font-bold">
                    {user.avatar}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-lg">{user.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">
                  {user.amount.toLocaleString()}
                </div>
                <p className="text-sm text-muted-foreground">
                  {user.referrals} referrals
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Full Leaderboard */}
        <Card className="bg-gradient-card border-border/50 shadow-card">
          <CardHeader>
            <CardTitle>Full Rankings</CardTitle>
            <CardDescription>
              Complete leaderboard with all participants
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {leaderboardData.map((user) => (
                <div
                  key={user.rank}
                  className={`flex items-center gap-4 p-4 rounded-lg border transition-colors {
                    user.isCurrentUser 
                      ? 'bg-primary/10 border-primary/30' 
                      : 'bg-muted/5 border-border/30 hover:bg-muted/10'
                  }`}
                >
                  <div className="flex items-center justify-center w-8">
                    {getRankIcon(user.rank)}
                  </div>
                  
                  <Avatar className="h-10 w-10">
                    <AvatarFallback>{user.avatar}</AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{user.name}</p>
                      {user.isCurrentUser && (
                        <Badge variant="secondary" className="text-xs">
                          You
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {user.referrals} referrals
                    </p>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary">
                      {user.amount.toLocaleString()}
                    </div>
                    <Badge 
                      variant="outline" 
                      className={`text-xs {getRankBadgeColor(user.rank)}`}
                    >
                      Rank {user.rank}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}