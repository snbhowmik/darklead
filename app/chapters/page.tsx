import Link from "next/link"
import { MapPin, Users, Calendar, ArrowRight } from "lucide-react"

export default function ChaptersPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">DarkLead! Chapters</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <p className="text-lg mb-6">
            DarkLead! chapters are local communities of cybersecurity enthusiasts who meet regularly to learn, share
            knowledge, and collaborate on security projects. Each chapter is led by volunteers who are passionate about
            building a strong hacker community in their area.
          </p>
          <p className="text-lg mb-6">
            Our chapters organize various events including CTF competitions, security workshops and social
            gatherings. They provide a platform for security researchers to network, learn new skills, and stay updated
            with the latest trends in cybersecurity.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/start-chapter" className="cta-button">
              Start a Chapter
            </Link>
            <Link
              href="/chapter-guidelines"
              className="bg-secondary text-white px-6 py-3 font-bold transition-colors hover:bg-muted"
            >
              Chapter Guidelines
            </Link>
          </div>
        </div>

        <div className="bg-secondary p-6 border border-border">
          <h2 className="text-xl font-bold mb-4">Chapter Statistics</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mr-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">00</div>
                <div className="text-muted-foreground">Active Chapters</div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mr-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">____</div>
                <div className="text-muted-foreground">Community Members</div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mr-4">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">__</div>
                <div className="text-muted-foreground">Events Per Year</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6">Featured Chapters</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {/* Chapter Card 1 */}
        <div className="bg-secondary border border-border">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">INDIA</h3>
            <div className="flex items-center mb-4">
              <MapPin className="h-4 w-4 mr-2 text-primary" />
              <span>COMMING SOON</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Our meetup.
            </p>
            <div className="flex justify-between text-sm mb-4">
              <div>
                <span className="font-bold">___</span> Members
              </div>
              <div>
                <span className="font-bold">__</span> Events/Year
              </div>
            </div>
            <Link href="/chapters/san-francisco" className="text-primary hover:underline flex items-center">
              View chapter <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>

        {/* Chapter Card 2 */}
        <div className="bg-secondary border border-border">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">INDIA</h3>
            <div className="flex items-center mb-4">
              <MapPin className="h-4 w-4 mr-2 text-primary" />
              <span>UPCOMING EVENT</span>
            </div>
            <p className="text-muted-foreground mb-4">
              A diverse community of developers.
            </p>
            <div className="flex justify-between text-sm mb-4">
              <div>
                <span className="font-bold">___</span> Members
              </div>
              <div>
                <span className="font-bold">__</span> Events/Year
              </div>
            </div>
            <Link href="/chapters/london" className="text-primary hover:underline flex items-center">
              View chapter <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>

        {/* Chapter Card 3 */}
        <div className="bg-secondary border border-border">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">TRICHY</h3>
            <div className="flex items-center mb-4">
              <MapPin className="h-4 w-4 mr-2 text-primary" />
              <span>TRICHY, India</span>
            </div>
            <p className="text-muted-foreground mb-4">
              A rapidly growing chapter with a focus on cybersecurity.
            </p>
            <div className="flex justify-between text-sm mb-4">
              <div>
                <span className="font-bold">___</span> Members
              </div>
              <div>
                <span className="font-bold">__</span> Events/Year
              </div>
            </div>
            <Link href="/chapters/bangalore" className="text-primary hover:underline flex items-center">
              View chapter <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-muted p-8 mb-12">
        <h2 className="text-2xl font-bold mb-4">Find a Chapter Near You</h2>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Enter your location"
            className="w-full p-3 bg-secondary border border-border text-white"
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="bg-secondary p-2 hover:bg-accent transition-colors">TIRUCHIRAPPALLI</button>
          <button className="bg-secondary p-2 hover:bg-accent transition-colors">_______</button>
          <button className="bg-secondary p-2 hover:bg-accent transition-colors">_______</button>
          <button className="bg-secondary p-2 hover:bg-accent transition-colors">All Regions</button>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Start Your Own Chapter</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Don't see a chapter in your area? Start one! We provide resources, support, and guidance to help you build a
          thriving developer community.
        </p>
        <Link href="/start-chapter" className="cta-button">
          Start a Chapter
        </Link>
      </div>
    </div>
  )
}
