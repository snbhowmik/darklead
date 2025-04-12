import Link from "next/link"
import { Search, Filter, Flag, ArrowRight } from "lucide-react"

export default function ChallengesPage() {
  const challenges = [
    {
      id: "sql-injection-101",
      title: "SQL Injection 101",
      category: "Web",
      difficulty: "Easy",
      points: 250,
      solvedBy: 120,
    },
    {
      id: "broken-rsa",
      title: "Broken RSA",
      category: "Crypto",
      difficulty: "Medium",
      points: 500,
      solvedBy: 45,
    },
    {
      id: "hidden-secrets",
      title: "Hidden Secrets",
      category: "Forensics",
      difficulty: "Easy",
      points: 350,
      solvedBy: 78,
    },
    {
      id: "buffer-overflow",
      title: "Stack Smashing",
      category: "Binary",
      difficulty: "Hard",
      points: 750,
      solvedBy: 20,
    },
    {
      id: "reverse-me",
      title: "Reverse Me",
      category: "Reverse",
      difficulty: "Medium",
      points: 450,
      solvedBy: 55,
    },
    {
      id: "network-analysis",
      title: "Packet Detective",
      category: "Forensics",
      difficulty: "Medium",
      points: 400,
      solvedBy: 62,
    },
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-500"
      case "Medium":
        return "bg-yellow-500"
      case "Hard":
        return "bg-red-500"
      default:
        return "bg-blue-500"
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">CTF Challenges</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-secondary p-6 border border-border">
            <h2 className="text-xl font-bold mb-4">Search</h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Search challenges..."
                className="w-full p-3 pl-10 bg-muted border border-border text-white"
              />
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            </div>
          </div>

          <div className="bg-secondary p-6 border border-border">
            <h2 className="text-xl font-bold mb-4">Filters</h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-bold mb-2">Categories</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Web</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Crypto</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Binary</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Forensics</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Reverse</span>
                  </label>
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-2">Difficulty</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                      <span>Easy</span>
                    </div>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                      <span>Medium</span>
                    </div>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                      <span>Hard</span>
                    </div>
                  </label>
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-2">Status</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Solved</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Unsolved</span>
                  </label>
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-2">Points</h3>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    placeholder="Min"
                    className="w-full p-2 bg-muted border border-border text-white"
                  />
                  <span>-</span>
                  <input
                    type="number"
                    placeholder="Max"
                    className="w-full p-2 bg-muted border border-border text-white"
                  />
                </div>
              </div>
            </div>

            <button className="mt-4 bg-primary text-white px-4 py-2 font-bold transition-colors hover:bg-accent w-full flex items-center justify-center">
              <Filter className="h-4 w-4 mr-2" />
              Apply Filters
            </button>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">All Challenges</h2>
            <div className="flex items-center">
              <span className="mr-2">Sort by:</span>
              <select className="bg-secondary border border-border p-2">
                <option>Newest</option>
                <option>Points (High to Low)</option>
                <option>Points (Low to High)</option>
                <option>Most Solved</option>
                <option>Least Solved</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {challenges.map((challenge) => (
              <div key={challenge.id} className="bg-secondary p-6 border border-border">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className={`bg-primary text-white px-2 py-1 text-xs font-bold inline-block mb-2`}>
                      {challenge.category}
                    </span>
                    <h3 className="text-xl font-bold">{challenge.title}</h3>
                  </div>
                  <div className="font-mono text-lg">{challenge.points} pts</div>
                </div>

                <div className="flex items-center mb-4">
                  <div className={`w-3 h-3 rounded-full ${getDifficultyColor(challenge.difficulty)} mr-2`}></div>
                  <span className="mr-4">{challenge.difficulty}</span>
                  <Flag className="h-4 w-4 mr-2 text-primary" />
                  <span className="text-sm">Solved by {challenge.solvedBy} teams</span>
                </div>

                <Link
                  href={`/ctf/challenges/${challenge.id}`}
                  className="text-primary hover:underline flex items-center"
                >
                  View challenge <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
