import Link from "next/link"
import { ArrowLeft, Flag, Download, Clock, Trophy, MessageSquare, ThumbsUp } from "lucide-react"

export default function ChallengePage({ params }: { params: { slug: string } }) {
  // This would normally fetch challenge data based on the slug
  const challenge = {
    id: "sql-injection-101",
    title: "SQL Injection 101",
    category: "Web",
    difficulty: "Easy",
    points: 250,
    description: "A simple web application with a login form. Can you bypass the authentication?",
    author: "DarkLead Admin",
    solvedBy: 120,
    createdAt: "2025-01-15",
    hints: ["Have you tried looking at the login request?", "What happens when you input special characters?"],
    files: [
      {
        name: "challenge.zip",
        size: "2.4 MB",
      },
    ],
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/ctf/challenges" className="flex items-center text-primary hover:underline mb-8">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Challenges
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-secondary p-6 border border-border mb-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="bg-primary text-white px-2 py-1 text-xs font-bold inline-block mb-2">
                  {challenge.category}
                </span>
                <h1 className="text-3xl font-bold">{challenge.title}</h1>
              </div>
              <div className="font-mono text-2xl">{challenge.points} pts</div>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2">Description</h2>
              <p className="text-muted-foreground">{challenge.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <h3 className="font-bold mb-1">Difficulty</h3>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <span>{challenge.difficulty}</span>
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-1">Author</h3>
                <span>{challenge.author}</span>
              </div>
              <div>
                <h3 className="font-bold mb-1">Created</h3>
                <span>{challenge.createdAt}</span>
              </div>
            </div>

            {challenge.files.length > 0 && (
              <div className="mb-6">
                <h2 className="text-xl font-bold mb-2">Files</h2>
                <div className="bg-muted p-4 border border-border">
                  {challenge.files.map((file, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span>{file.name}</span>
                      <div className="flex items-center">
                        <span className="text-sm text-muted-foreground mr-4">{file.size}</span>
                        <button className="bg-primary text-white p-2 hover:bg-accent transition-colors">
                          <Download className="h-4 w-4" />
                          <span className="sr-only">Download</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2">Submit Flag</h2>
              <div className="flex">
                <input
                  type="text"
                  placeholder="DL{flag}"
                  className="flex-1 p-3 bg-muted border border-border text-white"
                />
                <button className="bg-primary text-white px-6 py-3 font-bold transition-colors hover:bg-accent flex items-center">
                  <Flag className="h-4 w-4 mr-2" />
                  Submit
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">Hints</h2>
              <div className="space-y-4">
                {challenge.hints.map((hint, index) => (
                  <div key={index} className="bg-muted p-4 border border-border">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-bold">Hint #{index + 1}</h3>
                      <button className="text-primary hover:underline">Reveal (-50 points)</button>
                    </div>
                    <p className="text-muted-foreground">[Hidden]</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-secondary p-6 border border-border">
            <h2 className="text-xl font-bold mb-4">Discussion</h2>

            <div className="space-y-4 mb-6">
              <div className="bg-muted p-4 border border-border">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-primary rounded-full mr-3 flex items-center justify-center">
                      <span className="font-bold">JD</span>
                    </div>
                    <div>
                      <div className="font-bold">John Doe</div>
                      <div className="text-xs text-muted-foreground">2 days ago</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="text-muted-foreground hover:text-white">
                      <ThumbsUp className="h-4 w-4" />
                    </button>
                    <span className="text-sm">12</span>
                  </div>
                </div>
                <p>
                  This was a great introduction to SQL injection! I learned a lot about how to properly test for
                  vulnerabilities.
                </p>
              </div>

              <div className="bg-muted p-4 border border-border">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-primary rounded-full mr-3 flex items-center justify-center">
                      <span className="font-bold">AS</span>
                    </div>
                    <div>
                      <div className="font-bold">Alice Smith</div>
                      <div className="text-xs text-muted-foreground">1 day ago</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="text-muted-foreground hover:text-white">
                      <ThumbsUp className="h-4 w-4" />
                    </button>
                    <span className="text-sm">8</span>
                  </div>
                </div>
                <p>
                  I was stuck for a while until I realized I needed to URL encode some of my payloads. Great challenge!
                </p>
              </div>
            </div>

            <div>
              <textarea
                placeholder="Add your comment (no spoilers please!)"
                className="w-full p-3 bg-muted border border-border text-white mb-4"
                rows={4}
              ></textarea>
              <button className="bg-primary text-white px-6 py-2 font-bold transition-colors hover:bg-accent flex items-center">
                <MessageSquare className="h-4 w-4 mr-2" />
                Post Comment
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-secondary p-6 border border-border">
            <h2 className="text-xl font-bold mb-4">Challenge Stats</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold mb-1">Solved By</h3>
                <div className="flex items-center">
                  <Flag className="h-4 w-4 mr-2 text-primary" />
                  <span>{challenge.solvedBy} teams</span>
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-1">First Blood</h3>
                <div className="flex items-center">
                  <Trophy className="h-4 w-4 mr-2 text-yellow-500" />
                  <span>H4ck0r5 (00:12:45)</span>
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-1">Average Solve Time</h3>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-primary" />
                  <span>01:45:32</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-secondary p-6 border border-border">
            <h2 className="text-xl font-bold mb-4">Similar Challenges</h2>
            <ul className="space-y-3">
              <li>
                <Link href="/ctf/challenges/advanced-sql-injection" className="hover:text-primary">
                  Advanced SQL Injection
                </Link>
                <div className="text-sm text-muted-foreground">500 pts • Web</div>
              </li>
              <li>
                <Link href="/ctf/challenges/authentication-bypass" className="hover:text-primary">
                  Authentication Bypass
                </Link>
                <div className="text-sm text-muted-foreground">350 pts • Web</div>
              </li>
              <li>
                <Link href="/ctf/challenges/web-cookies" className="hover:text-primary">
                  Cookie Monster
                </Link>
                <div className="text-sm text-muted-foreground">300 pts • Web</div>
              </li>
            </ul>
          </div>

          <div className="bg-secondary p-6 border border-border">
            <h2 className="text-xl font-bold mb-4">Resources</h2>
            <ul className="space-y-3">
              <li className="bullet-item">
                <a href="#" className="hover:text-primary">
                  SQL Injection Cheat Sheet
                </a>
              </li>
              <li className="bullet-item">
                <a href="#" className="hover:text-primary">
                  Web Security Academy
                </a>
              </li>
              <li className="bullet-item">
                <a href="#" className="hover:text-primary">
                  OWASP Top 10
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
