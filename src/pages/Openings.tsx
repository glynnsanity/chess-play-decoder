import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const Openings = () => {
  const whiteOpenings = [
    {
      name: "Queen's Gambit",
      eco: "D06",
      games: 28,
      winRate: 68,
      pointsPerGame: 0.75
    },
    {
      name: "Italian Game",
      eco: "C50",
      games: 22,
      winRate: 73,
      pointsPerGame: 0.82
    },
    {
      name: "Ruy Lopez",
      eco: "C84",
      games: 18,
      winRate: 61,
      pointsPerGame: 0.67
    },
  ];

  const blackOpenings = [
    {
      name: "Sicilian Defense",
      eco: "B20",
      games: 34,
      winRate: 74,
      pointsPerGame: 0.79
    },
    {
      name: "French Defense",
      eco: "C02",
      games: 16,
      winRate: 56,
      pointsPerGame: 0.63
    },
    {
      name: "King's Indian Defense",
      eco: "E62",
      games: 19,
      winRate: 58,
      pointsPerGame: 0.66
    },
  ];

  const OpeningCard = ({ opening }: { opening: typeof whiteOpenings[0] }) => (
    <Card className="rounded-2xl shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-bold text-lg">{opening.name}</h3>
            <p className="text-muted-foreground text-sm">ECO: {opening.eco}</p>
          </div>
          <Badge variant="secondary" className="bg-indigo-100 text-indigo-700">
            {opening.games} games
          </Badge>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <div className="text-muted-foreground">Win Rate</div>
            <div className="font-semibold text-lg">{opening.winRate}%</div>
          </div>
          <div>
            <div className="text-muted-foreground">Points/Game</div>
            <div className="font-semibold text-lg">{opening.pointsPerGame}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="pb-20 px-4 pt-6 space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Openings & Defenses</h1>
        <p className="text-indigo-100">Your repertoire analysis</p>
      </div>

      {/* Tabs for White/Black */}
      <Tabs defaultValue="white" className="w-full">
        <TabsList className="grid w-full grid-cols-2 rounded-2xl">
          <TabsTrigger value="white" className="rounded-xl">Playing White</TabsTrigger>
          <TabsTrigger value="black" className="rounded-xl">Playing Black</TabsTrigger>
        </TabsList>

        <TabsContent value="white" className="space-y-4 mt-6">
          {whiteOpenings.map((opening, index) => (
            <OpeningCard key={index} opening={opening} />
          ))}
        </TabsContent>

        <TabsContent value="black" className="space-y-4 mt-6">
          {blackOpenings.map((opening, index) => (
            <OpeningCard key={index} opening={opening} />
          ))}
        </TabsContent>
      </Tabs>

      {/* Summary */}
      <Card className="rounded-2xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg">Opening Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Your strongest openings show consistent patterns. Focus on expanding 
            your repertoire in weaker areas and deepening preparation in your best lines.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Openings;