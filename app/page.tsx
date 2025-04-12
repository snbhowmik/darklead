import Link from "next/link"
import { ArrowRight, Users, Calendar, Briefcase } from "lucide-react"

export default function Home() {
  return (
    <div>
      {/* Announcement Banner */}
      <div className="bg-primary p-4 flex justify-between items-center">
        <p className="text-white">
          DarkLead! CTF coming soon. Leading to DarkNess.......!{" "}
          <Link href="/ctf" className="underline">
            Learn more
          </Link>
        </p>
        <button className="text-white">×</button>
      </div>

      {/* Hero Section */}
      <div className="bg-black py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Welcome to <span className="text-primary">DarkLead!</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">The Next-Gen Cybersecurity Community</h2>
              <p className="text-lg mb-8">
                DarkLead! is a next-gen cybersecurity community built for hackers, CTF warriors, and cyber enthusiasts
                who live to explore, break, build, and defend digital systems. Whether you're a red teamer, a reverse
                engineer, a bug bounty hunter, or just starting out, DarkLead! is your home.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/join" className="cta-button">
                  Join The DarkLead! Community
                </Link>
                <Link
                  href="/start-chapter"
                  className="bg-secondary text-white px-6 py-3 font-bold transition-colors hover:bg-muted"
                >
                  Start a Chapter
                </Link>
              </div>
            </div>

            <div className="bg-secondary p-6 border border-border">
              <h3 className="text-xl font-bold mb-4">FEATURES</h3>
              <ul className="space-y-3">
                <li className="bullet-item">Leading to Darkness....!</li>
                <li className="bullet-item">$cat founder.txt="GOWTHAMAN"</li>
                <li className="bullet-item">$skill.txt = Penetration Tester</li>
                <li className="bullet-item">./connect</li>
                <li className="bullet-item">connecting to DarkLead!</li>
                <li className="bullet-item">Welcome to DarkLead! Community</li>
              </ul>

              <div className="mt-6 flex items-center">
                <span className="font-mono">BECOME#$[_</span>
                <span className="text-primary font-mono">MEMBER</span>
                <span className="ml-2 h-2 w-2 bg-primary rounded-full animate-blink"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-secondary py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/find-chapter"
              className="bg-muted p-4 hover:bg-accent transition-colors flex items-center justify-between"
            >
              <span className="font-medium">Find a Chapter Near You</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="bg-muted p-4 hover:bg-accent transition-colors flex items-center justify-between"
            >
              <span className="font-medium">Social Network Links</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/ctf"
              className="bg-muted p-4 hover:bg-accent transition-colors flex items-center justify-between"
            >
              <span className="font-medium">CTF</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">The Community at a Glance</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-box text-center">
              <h3 className="text-lg font-medium mb-4">Active Chapters</h3>
              <div className="flex items-center justify-center">
                <Users className="h-6 w-6 mr-2 text-primary" />
                <span className="text-4xl font-bold">00</span>
              </div>
            </div>

            <div className="feature-box text-center">
              <h3 className="text-lg font-medium mb-4">Upcoming Events</h3>
              <div className="flex items-center justify-center">
                <Calendar className="h-6 w-6 mr-2 text-primary" />
                <span className="text-4xl font-bold">01</span>
              </div>
            </div>

            <div className="feature-box text-center">
              <h3 className="text-lg font-medium mb-4">Projects</h3>
              <div className="flex items-center justify-center">
                <Briefcase className="h-6 w-6 mr-2 text-primary" />
                <span className="text-4xl font-bold">06</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <p className="mb-4">
                DarkLead! is a collective of minds obsessed with digital puzzles, ethical hacking, and cyber defense.
                We're all about learning, challenging, and growing together through collaboration, Capture The Flag
                competitions, and real-world cyber scenarios.
              </p>
              <p className="mb-4">
                Founded in 2024 by Gowthaman GS, DarkLead! began as a vision to unite curious minds under one banner—and
                today, it's grown into a global network of security researchers, students, professionals, and hobbyists
                from around the world. With chapters in multiple countries, our community is driven by a shared mission:
                to explore, learn, and lead in the world of cybersecurity.
              </p>
              <Link href="/about" className="text-primary hover:underline flex items-center">
                Learn more about our story <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="mb-4">
                To empower cybersecurity minds by creating a supportive, skilled, and fearless community where knowledge
                flows freely, and curiosity is the only requirement.
              </p>
              <ul className="space-y-4">
                <li className="bullet-item">
                  <div>
                    <h3 className="font-bold">Join a Local Chapter</h3>
                    <p>Connect with security researchers in your area and participate in local events.</p>
                  </div>
                </li>
                <li className="bullet-item">
                  <div>
                    <h3 className="font-bold">Compete in CTFs</h3>
                    <p>Test your skills in our regular Capture The Flag competitions.</p>
                  </div>
                </li>
                <li className="bullet-item">
                  <div>
                    <h3 className="font-bold">Share Knowledge</h3>
                    <p>Contribute to our knowledge base and help others learn.</p>
                  </div>
                </li>
                <li className="bullet-item">
                  <div>
                    <h3 className="font-bold">Build Security Tools</h3>
                    <p>Collaborate on open-source security tools and frameworks.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join the Cyber Elite?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Become part of DarkLead! today and connect with thousands of cybersecurity enthusiasts worldwide.
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
            <Link
              href="/learn-more"
              className="bg-white text-primary px-8 py-3 font-bold transition-colors hover:bg-gray-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
