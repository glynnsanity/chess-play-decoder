import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, ChevronRight } from "lucide-react";

const Mistakes = () => {
  const mistakes = [
    {
      id: 1,
      title: "Hanging Pieces",
      frequency: 23,
      color: "bg-red-500",
      description: "Leaving pieces undefended"
    },
    {
      id: 2,
      title: "Missed Recaptures",
      frequency: 18,
      color: "bg-orange-500",
      description: "Not recapturing when possible"
    },
    {
      id: 3,
      title: "Back-rank Weakness",
      frequency: 14,
      color: "bg-yellow-500",
      description: "Vulnerable back rank"
    },
    {
      id: 4,
      title: "Premature Attacks",
      frequency: 12,
      color: "bg-blue-500",
      description: "Attacking too early"
    },
    {
      id: 5,
      title: "Bad Trades",
      frequency: 9,
      color: "bg-purple-500",
      description: "Unfavorable piece exchanges"
    },
  ];

  return (
    <div className="pb-20 px-4 pt-6 space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Top 5 Mistakes</h1>
        <p className="text-indigo-100">Learn from your patterns</p>
      </div>

      {/* Mistakes List */}
      <div className="space-y-4">
        {mistakes.map((mistake) => (
          <Card key={mistake.id} className="rounded-2xl shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 ${mistake.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                  <AlertTriangle size={24} className="text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1">{mistake.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{mistake.description}</p>
                  <div className="text-sm font-medium text-red-600">
                    Occurred {mistake.frequency} times
                  </div>
                </div>

                <ChevronRight size={20} className="text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Help Text */}
      <Card className="rounded-2xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg">How to Use</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Tap on any mistake to learn more about it, see tips for improvement, 
            and view example games where this pattern occurred.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Mistakes;