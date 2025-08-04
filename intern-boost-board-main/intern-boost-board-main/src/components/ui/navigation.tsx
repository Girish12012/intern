import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  Trophy, 
  LogOut, 
  Gift,
  TrendingUp 
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  const location = useLocation();

  const navItems = [
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      href: "/leaderboard",
      label: "Leaderboard",
      icon: Trophy,
    },
    {
      href: "/rewards",
      label: "Rewards",
      icon: Gift,
    },
  ];

  return (
    <nav className={cn("flex flex-col space-y-2", className)}>
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.href;
        
        return (
          <Link key={item.href} to={item.href}>
            <Button
              variant={isActive ? "default" : "ghost"}
              className={cn(
                "w-full justify-start gap-3 h-12",
                isActive && "bg-gradient-primary shadow-glow"
              )}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </Button>
          </Link>
        );
      })}
      
      <div className="pt-4 mt-auto">
        <Link to="/login">
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 h-12 text-muted-foreground hover:text-foreground"
          >
            <LogOut className="h-5 w-5" />
            Sign Out
          </Button>
        </Link>
      </div>
    </nav>
  );
}