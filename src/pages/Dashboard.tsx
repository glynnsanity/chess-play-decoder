import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Clock, Zap, Timer, Crown, Shield, Swords } from "lucide-react";

const Dashboard = () => {
  // Mock data for now
  const metrics = {
    winRate: 67,
    pointsPerGame: 0.73,
    totalGames: 156,
    recentDelta: 5.2
  };

  const timeControlData = [
    { name: "Blitz", games: 89, winRate: 71, height: 71, icon: Zap, color: "bg-yellow-500", hoverColor: "hover:bg-yellow-600" },
    { name: "Rapid", games: 45, winRate: 62, height: 62, icon: Clock, color: "bg-blue-500", hoverColor: "hover:bg-blue-600" },
    { name: "Bullet", games: 22, winRate: 59, height: 59, icon: Timer, color: "bg-red-500", hoverColor: "hover:bg-red-600" },
  ];

  const openingData = [
    { name: "Sicilian", games: 34, winRate: 74, height: 74, icon: Swords, color: "bg-emerald-500", hoverColor: "hover:bg-emerald-600" },
    { name: "Queen's Gambit", games: 28, winRate: 68, height: 68, icon: Crown, color: "bg-purple-500", hoverColor: "hover:bg-purple-600" },
    { name: "King's Indian", games: 19, winRate: 58, height: 58, icon: Shield, color: "bg-orange-500", hoverColor: "hover:bg-orange-600" },
  ];

  return (
    <div className="pb-20 px-4 pt-6 space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Chess Analytics</h1>
        <p className="text-indigo-100">Your performance insights</p>
      </div>

      {/* Main Metrics */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="rounded-2xl shadow-lg">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm text-muted-foreground">Win Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{metrics.winRate}%</div>
            <Badge variant="secondary" className="mt-2 bg-green-100 text-green-700">
              <TrendingUp size={12} className="mr-1" />
              +{metrics.recentDelta}%
            </Badge>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-lg">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm text-muted-foreground">Points/Game</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{metrics.pointsPerGame}</div>
            <div className="text-sm text-muted-foreground mt-2">{metrics.totalGames} games</div>
          </CardContent>
        </Card>
      </div>

      {/* Time Controls Chart */}
      <Card className="rounded-2xl shadow-lg">
        <CardHeader>
          <CardTitle>Performance by Time Control</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-end justify-between h-40 gap-4">
            {timeControlData.map((item) => (
              <div key={item.name} className="flex flex-col items-center flex-1 group">
                <div className="relative mb-3">
                  <div 
                    className={`w-full ${item.color} ${item.hoverColor} rounded-t-lg transition-all duration-300 cursor-pointer shadow-md group-hover:shadow-lg relative overflow-hidden`}
                    style={{ height: `${item.height * 1.2}px`, minHeight: '60px' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
                      <item.icon size={16} className="text-white" />
                    </div>
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-xs font-bold">
                      {item.winRate}%
                    </div>
                  </div>
                </div>
                <div className="text-xs font-medium text-center">
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-muted-foreground">{item.games} games</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Openings Chart */}
      <Card className="rounded-2xl shadow-lg">
        <CardHeader>
          <CardTitle>Top Openings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-end justify-between h-40 gap-4">
            {openingData.map((item) => (
              <div key={item.name} className="flex flex-col items-center flex-1 group">
                <div className="relative mb-3">
                  <div 
                    className={`w-full ${item.color} ${item.hoverColor} rounded-t-lg transition-all duration-300 cursor-pointer shadow-md group-hover:shadow-lg relative overflow-hidden`}
                    style={{ height: `${item.height * 1.2}px`, minHeight: '60px' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
                      <item.icon size={16} className="text-white" />
                    </div>
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-xs font-bold">
                      {item.winRate}%
                    </div>
                  </div>
                </div>
                <div className="text-xs font-medium text-center">
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-muted-foreground">{item.games} games</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;