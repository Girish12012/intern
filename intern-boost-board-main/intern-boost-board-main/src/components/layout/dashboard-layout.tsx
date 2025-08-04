import { ReactNode } from "react";
import { Navigation } from "@/components/ui/navigation";
import { Card } from "@/components/ui/card";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-background">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 min-h-screen p-6 border-r border-border/50">
          <div className="mb-8">
            <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              InternBoost
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Fundraising Dashboard
            </p>
          </div>
          <Navigation className="flex-1" />
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}