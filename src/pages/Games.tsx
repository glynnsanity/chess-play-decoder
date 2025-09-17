import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Games = () => {
  // Mock game data
  const games = [
    {
      id: 1,
      opponent: "ChessMaster2000",
      opponentRating: 1456,
      date: "2024-01-15",
      time: "14:30",
      timeControl: "10+0",
      opening: "Sicilian Defense",
      result: "win",
      color: "white",
      url: "https://chess.com/game/123456"
    },
    {
      id: 2,
      opponent: "KnightRider87",
      opponentRating: 1398,
      date: "2024-01-15",
      time: "13:45",
      timeControl: "5+3",
      opening: "Queen's Gambit",
      result: "loss",
      color: "black",
      url: "https://chess.com/game/123457"
    },
    {
      id: 3,
      opponent: "PawnStorm",
      opponentRating: 1523,
      date: "2024-01-14",
      time: "19:20",
      timeControl: "10+0",
      opening: "King's Indian Defense",
      result: "draw",
      color: "white",
      url: "https://chess.com/game/123458"
    },
  ];

  const getResultColor = (result: string) => {
    switch (result) {
      case "win": return "bg-green-100 text-green-700";
      case "loss": return "bg-red-100 text-red-700";
      case "draw": return "bg-yellow-100 text-yellow-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="pb-20 px-4 pt-6 space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Game Search</h1>
        <p className="text-indigo-100">Browse your game history</p>
      </div>

      {/* Filters */}
      <Card className="rounded-2xl shadow-lg">
        <CardContent className="p-4">
          <Button variant="outline" className="w-full justify-start">
            <Filter size={16} className="mr-2" />
            Filter Games
          </Button>
        </CardContent>
      </Card>

      {/* Games List */}
      <div className="space-y-4">
        {games.map((game) => (
          <Card key={game.id} className="rounded-2xl shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="font-semibold">{game.opponent}</div>
                  <div className="text-sm text-muted-foreground">({game.opponentRating})</div>
                </div>
                <Badge className={getResultColor(game.result)}>
                  {game.result.toUpperCase()}
                </Badge>
              </div>
              
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>{game.date} • {game.time}</span>
                  <span>{game.timeControl}</span>
                </div>
                <div className="flex justify-between">
                  <span>{game.opening}</span>
                  <span className="capitalize">Playing {game.color}</span>
                </div>
              </div>

              <Button
                variant="outline"
                size="sm"
                className="w-full mt-3"
                onClick={() => window.open(game.url, '_blank')}
              >
                <ExternalLink size={14} className="mr-2" />
                View on Chess.com
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Games;