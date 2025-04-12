import Link from "next/link"
import { ArrowRight, Trophy, Clock, Users, Flag, Shield, Terminal, Server, Database, Lock } from "lucide-react"

export default function CTFPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-primary py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">DarkLead! CTF</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Test your hacking skills, solve challenging puzzles, and compete with other cyber warriors in our Capture
              The Flag competitions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="https://forms.google.com/your-custom-form-url"
                className="bg-black text-white px-8 py-3 font-bold transition-colors hover:bg-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register Team
              </Link>
              <Link
                href="/ctf/challenges"
                className="bg-white text-primary px-8 py-3 font-bold transition-colors hover:bg-gray-200"
              >
                View Challenges
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming CTF */}
      <div className="py-12 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Upcoming CTF Events</h2>

          <div className="bg-secondary p-6 border border-border mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <div>
                <span className="bg-primary text-white px-3 py-1 text-sm font-bold inline-block mb-2">FEATURED</span>
                <h3 className="text-2xl font-bold">DarkLead! Happy Birthday R CTF 2025</h3>
              </div>
              <div className="flex items-center mt-2 md:mt-0">
                <Clock className="h-5 w-5 mr-2 text-primary" />
                <div className="font-mono">
                  <span className="countdown-value">##</span>d :<span className="countdown-value">##</span>h :
                  <span className="countdown-value">##</span>m :<span className="countdown-value">##</span>s
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <h4 className="font-bold mb-2">Date & Time</h4>
                <p>April 14, 2025 - April 14, 2025</p>
                <p>Starts at 12:00 IST</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Format</h4>
                <p>Jeopardy-style CTF</p>
                <p>Team-based (1-5 players)</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Prizes</h4>
                <p>1st Place: $10,000</p>
                <p>2nd Place: $6,000</p>
                <p>3rd Place: $4,000</p>
              </div>
            </div>

            <Link href="/ctf/events/summer-2025" className="text-primary hover:underline flex items-center">
              View details <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="bg-secondary p-6 border border-border mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <div>
                <span className="bg-primary text-white px-3 py-1 text-sm font-bold inline-block mb-2">FEATURED</span>
                <h3 className="text-2xl font-bold">DarkLead! Shadow Apocalypse CTF 2025</h3>
              </div>
              <div className="flex items-center mt-2 md:mt-0">
                <Clock className="h-5 w-5 mr-2 text-primary" />
                <div className="font-mono">
                  <span className="countdown-value">##</span>d :<span className="countdown-value">##</span>h :
                  <span className="countdown-value">##</span>m :<span className="countdown-value">##</span>s
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <h4 className="font-bold mb-2">Date & Time</h4>
                <p>#### ##, 2025 - #### ##, 2025</p>
                <p>Starts at 12:00 IST</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Format</h4>
                <p>Jeopardy-style CTF</p>
                <p>Team-based (1-3 players)</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Prizes</h4>
                <p>1st Place: $##,###</p>
                <p>2nd Place: $#,###</p>
                <p>3rd Place: $#,###</p>
              </div>
            </div>

            <Link href="/ctf/events/summer-2025" className="text-primary hover:underline flex items-center">
              View details <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-secondary p-6 border border-border">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">DarkLead! Mini CTF #12</h3>
                <span className="text-sm text-muted-foreground">Upcoming</span>
              </div>
              <p className="text-muted-foreground mb-4">
                A 24-hour mini CTF focused on web exploitation and cryptography challenges.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2 text-primary" />
                  <span>Individual</span>
                </div>
                <Link href="/ctf/events/mini-12" className="text-primary hover:underline flex items-center">
                  Details <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>

            <div className="bg-secondary p-6 border border-border">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">DarkLead! x Company CTF</h3>
                <span className="text-sm text-muted-foreground">Upcoming</span>
              </div>
              <p className="text-muted-foreground mb-4">
                A collaborative CTF with industry partners featuring real-world security challenges.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2 text-primary" />
                  <span>Teams (max 4)</span>
                </div>
                <Link href="/ctf/events/company-collab" className="text-primary hover:underline flex items-center">
                  Details <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Challenge Categories */}
      <div className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Challenge Categories</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-muted p-6 border border-border hover:border-primary transition-colors">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4">
                  <Terminal className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Web Exploitation</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Challenges focused on finding and exploiting vulnerabilities in web applications.
              </p>
              <div className="text-sm text-muted-foreground">SQL Injection, XSS, CSRF, Authentication Bypass</div>
            </div>

            <div className="bg-muted p-6 border border-border hover:border-primary transition-colors">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Cryptography</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Challenges that test your knowledge of cryptographic algorithms and their weaknesses.
              </p>
              <div className="text-sm text-muted-foreground">RSA, AES, Hashing, Encoding, Ciphers</div>
            </div>

            <div className="bg-muted p-6 border border-border hover:border-primary transition-colors">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Binary Exploitation</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Challenges that involve finding and exploiting vulnerabilities in binary programs.
              </p>
              <div className="text-sm text-muted-foreground">
                Buffer Overflow, ROP, Format String, Heap Exploitation
              </div>
            </div>

            <div className="bg-muted p-6 border border-border hover:border-primary transition-colors">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Forensics</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Challenges that involve analyzing and recovering data from various digital artifacts.
              </p>
              <div className="text-sm text-muted-foreground">Memory Analysis, Network Captures, Steganography</div>
            </div>
          </div>
        </div>
      </div>

      {/* Leaderboard */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Current Leaderboard</h2>
            <div className="flex items-center">
              <span className="mr-2">DarkLead! Summer CTF 2024</span>
              <select className="bg-secondary border border-border p-2">
                <option>DarkLead! Shadow Apocalypse CTF</option>
                <option>DarkLead! Mini CTF 2025</option>
                <option>DarkLead! Day CTF 2025</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-secondary">
                  <th className="p-4 text-left border-b border-border">Rank</th>
                  <th className="p-4 text-left border-b border-border">Team</th>
                  <th className="p-4 text-left border-b border-border">Score</th>
                  <th className="p-4 text-left border-b border-border">Solved</th>
                  <th className="p-4 text-left border-b border-border">Last Submission</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-muted border-b border-border">
                  <td className="p-4 flex items-center">
                    <Trophy className="h-4 w-4 text-yellow-500 mr-2" />1
                  </td>
                  <td className="p-4">ThW01f</td>
                  <td className="p-4 font-mono">####</td>
                  <td className="p-4">32/32</td>
                  <td className="p-4 text-muted-foreground"># days ago</td>
                </tr>
                <tr className="bg-secondary border-b border-border">
                  <td className="p-4 flex items-center">
                    <Trophy className="h-4 w-4 text-gray-400 mr-2" />2
                  </td>
                  <td className="p-4">Mr.Pop</td>
                  <td className="p-4 font-mono">####</td>
                  <td className="p-4">##/##</td>
                  <td className="p-4 text-muted-foreground"># day ago</td>
                </tr>
                <tr className="bg-muted border-b border-border">
                  <td className="p-4 flex items-center">
                    <Trophy className="h-4 w-4 text-amber-700 mr-2" />3
                  </td>
                  <td className="p-4">m3h6u6</td>
                  <td className="p-4 font-mono">####</td>
                  <td className="p-4">##/##</td>
                  <td className="p-4 text-muted-foreground"># days ago</td>
                </tr>
                <tr className="bg-secondary border-b border-border">
                  <td className="p-4">4</td>
                  <td className="p-4">Ryzael</td>
                  <td className="p-4 font-mono">####</td>
                  <td className="p-4">##/##</td>
                  <td className="p-4 text-muted-foreground"># days ago</td>
                </tr>
                <tr className="bg-muted border-b border-border">
                  <td className="p-4">5</td>
                  <td className="p-4">ascend_x</td>
                  <td className="p-4 font-mono">####</td>
                  <td className="p-4">##/##</td>
                  <td className="p-4 text-muted-foreground"># day ago</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 text-right">
            <Link href="/ctf/leaderboard" className="text-primary hover:underline flex items-center justify-end">
              View full leaderboard <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Active Challenges */}
      <div className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Active Challenges</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-muted p-6 border border-border">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="bg-primary text-white px-2 py-1 text-xs font-bold inline-block mb-2">WEB</span>
                  <h3 className="text-xl font-bold">SQL Injection 101</h3>
                </div>
                <div className="font-mono text-lg">250 pts</div>
              </div>
              <p className="text-muted-foreground mb-4">
                A simple web application with a login form. Can you bypass the authentication?
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Flag className="h-4 w-4 mr-2 text-primary" />
                  <span className="text-sm">Solved by 120 teams</span>
                </div>
                <Link
                  href="/ctf/challenges/sql-injection-101"
                  className="text-primary hover:underline flex items-center"
                >
                  Solve <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>

            <div className="bg-muted p-6 border border-border">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="bg-primary text-white px-2 py-1 text-xs font-bold inline-block mb-2">CRYPTO</span>
                  <h3 className="text-xl font-bold">Broken RSA</h3>
                </div>
                <div className="font-mono text-lg">500 pts</div>
              </div>
              <p className="text-muted-foreground mb-4">
                We intercepted an RSA encrypted message and some parameters. Can you decrypt it?
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Flag className="h-4 w-4 mr-2 text-primary" />
                  <span className="text-sm">Solved by 45 teams</span>
                </div>
                <Link href="/ctf/challenges/broken-rsa" className="text-primary hover:underline flex items-center">
                  Solve <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>

            <div className="bg-muted p-6 border border-border">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="bg-primary text-white px-2 py-1 text-xs font-bold inline-block mb-2">FORENSICS</span>
                  <h3 className="text-xl font-bold">Hidden Secrets</h3>
                </div>
                <div className="font-mono text-lg">350 pts</div>
              </div>
              <p className="text-muted-foreground mb-4">
                We found this image on a suspect's computer. Is there something hidden inside?
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Flag className="h-4 w-4 mr-2 text-primary" />
                  <span className="text-sm">Solved by 78 teams</span>
                </div>
                <Link href="/ctf/challenges/hidden-secrets" className="text-primary hover:underline flex items-center">
                  Solve <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/ctf/challenges" className="cta-button inline-flex items-center">
              View All Challenges <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">How DarkLead! CTF Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-secondary p-6 border border-border">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-4 font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold">Register Your Team</h3>
              </div>
              <p className="text-muted-foreground">
                Create an account and form a team with your friends or colleagues. Teams can have up to 4 members.
              </p>
            </div>

            <div className="bg-secondary p-6 border border-border">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-4 font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold">Solve Challenges</h3>
              </div>
              <p className="text-muted-foreground">
                Browse through various categories of challenges, download files, and find the hidden flags.
              </p>
            </div>

            <div className="bg-secondary p-6 border border-border">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-4 font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold">Submit Flags & Score</h3>
              </div>
              <p className="text-muted-foreground">
                Submit your flags in the format DL!{"{flag}"} to earn points. The more challenges you solve, the higher
                your ranking.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Resources */}
      <div className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Resources & Learning</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Getting Started with CTFs</h3>
              <ul className="space-y-3">
                <li className="bullet-item">
                  <Link href="/ctf/resources/beginners-guide" className="hover:text-primary">
                    Beginner's Guide to Capture The Flag Competitions
                  </Link>
                </li>
                <li className="bullet-item">
                  <Link href="/ctf/resources/tools" className="hover:text-primary">
                    Essential Tools for CTF Competitions
                  </Link>
                </li>
                <li className="bullet-item">
                  <Link href="/ctf/resources/web-exploitation" className="hover:text-primary">
                    Introduction to Networking Fundamentals
                  </Link>
                </li>
                <li className="bullet-item">
                  <Link href="/ctf/resources/cryptography" className="hover:text-primary">
                    Introduction to Web Exploitation
                  </Link>
                </li>
                <li className="bullet-item">
                  <Link href="/ctf/resources/binary-exploitation" className="hover:text-primary">
                    Cryptography Basics for CTFs
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-muted p-6 border border-border">
              <h3 className="text-xl font-bold mb-4">Practice Platforms</h3>
              <p className="mb-4">Sharpen your skills with these recommended practice platforms:</p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Shield className="h-4 w-4 mr-2 text-primary" />
                  <a
                    href="https://www.hackthebox.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    HackTheBox
                  </a>
                </li>
                <li className="flex items-center">
                  <Shield className="h-4 w-4 mr-2 text-primary" />
                  <a
                    href="https://tryhackme.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    TryHackMe
                  </a>
                </li>
                <li className="flex items-center">
                  <Shield className="h-4 w-4 mr-2 text-primary" />
                  <a
                    href="https://picoctf.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    picoCTF
                  </a>
                </li>
                <li className="flex items-center">
                  <Shield className="h-4 w-4 mr-2 text-primary" />
                  <a
                    href="https://www.vulnhub.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    VulnHub
                  </a>
                </li>
              </ul>
              <div className="mt-4">
                <Link href="/ctf/resources" className="text-primary hover:underline flex items-center">
                  View all resources <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-12 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Hack the Planet?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join the DarkLead! CTF community today and start solving challenges, competing in events, and connecting
            with other security enthusiasts.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://forms.google.com/your-registration-form"
              className="bg-black text-white px-8 py-3 font-bold transition-colors hover:bg-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register Now
            </a>
            <a
              href="https://discord.gg/ZgQExvkB"
              className="bg-white text-primary px-8 py-3 font-bold transition-colors hover:bg-gray-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Discord
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
