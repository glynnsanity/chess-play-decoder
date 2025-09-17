import { Link, useLocation } from "react-router-dom";
import { BarChart3, Search, AlertTriangle, Crown } from "lucide-react";
import { cn } from "@/lib/utils";

const BottomNavigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: BarChart3, label: "Dashboard" },
    { path: "/games", icon: Search, label: "Games" },
    { path: "/mistakes", icon: AlertTriangle, label: "Mistakes" },
    { path: "/openings", icon: Crown, label: "Openings" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
      <div className="flex items-center justify-around py-2">
        {navItems.map(({ path, icon: Icon, label }) => (
          <Link
            key={path}
            to={path}
            className={cn(
              "flex flex-col items-center gap-1 p-3 rounded-lg transition-colors min-w-[44px] min-h-[44px]",
              location.pathname === path
                ? "text-primary bg-primary/10"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Icon size={20} />
            <span className="text-xs font-medium">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavigation;