import Link from "next/link"
import { Github, Linkedin, Mail, ExternalLink, Award, Code, Terminal, Instagram } from "lucide-react"

export default function FounderPortfolio() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with About Me */}
      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-4">
          {/* Hero Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h1 className="text-5xl font-bold mb-4">Gowthaman GS</h1>
              <h2 className="text-2xl text-primary mb-6">Cybersecurity Enthusiast & Founder of DarkLead!</h2>
              <p className="text-lg mb-8">
                Passionate about Penetration Testing and ethical hacking. Aspiring Cloud Engineer and Pentester.
                Specializes in containers and Orchestration Technologies. Cybersecurity Enthusiast. Founder of DarkLead!, a
                next-gen cybersecurity community for hackers and CTF warriors.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/th-wolf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary p-3 hover:bg-accent transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/thw01f/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary p-3 hover:bg-accent transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href="https://www.instagram.com/th._.w0lf/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary p-3 hover:bg-accent transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="mailto:gowthaman@darklead.org" className="bg-secondary p-3 hover:bg-accent transition-colors">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-64 border-2 border-primary">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240522_141917.jpg-iUCzMUuK9QYx0k6jIyQU13XwQfd484.jpeg"
                  alt="Gowthaman GS"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* About Me Content */}
          <div>
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-4">Background</h3>
                <p className="mb-4">
                  Passionate about Penetration Testing and Ethical Hacking, with a strong drive to explore cyber defense
                  and offense. Aspiring Cloud Engineer and Pentester, blending security with scalable cloud
                  infrastructure. Specialized in containerized environments and orchestration technologies like Docker
                  and Kubernetes. Cybersecurity enthusiast committed to continuous learning and innovation in the
                  hacking space. Founder of DarkLead!, a next-gen community empowering hackers and CTF warriors
                  worldwide.
                </p>
                <p>
                  In 2024, I founded DarkLead!, a community dedicated to bringing together cybersecurity enthusiasts,
                  ethical hackers, and CTF warriors to share knowledge, collaborate on projects, and participate in
                  security challenges.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Skills & Expertise</h3>
                <ul className="space-y-3">
                  <li className="bullet-item">Penetration Testing & Vulnerability Assessment</li>
                  <li className="bullet-item">Web Application Security</li>
                  <li className="bullet-item">Network Security</li>
                  <li className="bullet-item">CTF Challenge Development</li>
                  <li className="bullet-item">Security Awareness Training</li>
                  <li className="bullet-item">DarkLead! Community & Leadership</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Meet Our Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-secondary p-6 border border-border text-center">
              <div className="flex justify-center mb-4">
                <div className="relative w-32 h-32 border-2 border-primary rounded-full overflow-hidden">
                  <img
                    src="/images/subir-profile.jpeg"
                    alt="Subir Nath Bhowmik"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">Subir Nath Bhowmik</h3>
              <p className="text-primary mb-3">Community Developer</p>
              <p className="text-sm text-muted-foreground mb-4">
                Open source tech enthusiast and aspiring DevSecOps Engineer.
              </p>
              <div className="flex justify-center space-x-3">
                <a
                  href="https://github.com/snbhowmik"
                  className="bg-muted p-2 hover:bg-accent transition-colors rounded-full"
                >
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/snbhowmik"
                  className="bg-muted p-2 hover:bg-accent transition-colors rounded-full"
                >
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-secondary p-6 border border-border text-center">
              <div className="flex justify-center mb-4">
                <div className="relative w-32 h-32 border-2 border-primary rounded-full overflow-hidden">
                  <img
                    src="/images/mehbub-profile.jpeg"
                    alt="Mehbub Muztaba Mazumder"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">Mehbub Muztaba Mazumder</h3>
              <p className="text-primary mb-3">Community Development Officer</p>
              <p className="text-sm text-muted-foreground mb-4">Aspiring Ethical Hacker and Focused in Offsec</p>
              <div className="flex justify-center space-x-3">
                <a
                  href="https://github.com/mehbub-lab/mehbub-lab"
                  className="bg-muted p-2 hover:bg-accent transition-colors rounded-full"
                >
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/mehbub-muztaba-mazumder-b47ba2322/"
                  className="bg-muted p-2 hover:bg-accent transition-colors rounded-full"
                >
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-secondary p-6 border border-border text-center">
              <div className="flex justify-center mb-4">
                <div className="relative w-32 h-32 border-2 border-primary rounded-full overflow-hidden">
                  <img src="/images/aflah-profile.jpeg" alt="Muhammed Aflah S" className="w-full h-full object-cover" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">Muhammed Aflah S</h3>
              <p className="text-primary mb-3">Community Manager</p>
              <p className="text-sm text-muted-foreground mb-4">
                AI/ML Ethical and CTF Player - OSINT, Steganography and Cryptography.
              </p>
              <div className="flex justify-center space-x-3">
                <a href="#" className="bg-muted p-2 hover:bg-accent transition-colors rounded-full">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammed-aflah-s-545a6135a/"
                  className="bg-muted p-2 hover:bg-accent transition-colors rounded-full"
                >
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="bg-secondary p-6 border border-border text-center">
              <div className="flex justify-center mb-4">
                <div className="relative w-32 h-32 border-2 border-primary rounded-full overflow-hidden">
                  <img
                    src="/images/nandakishore-profile.jpeg"
                    alt="Nandakishore V"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">Nandakishore V</h3>
              <p className="text-primary mb-3">Community Relations</p>
              <p className="text-sm text-muted-foreground mb-4">
                Cybersecurity enthusiast and CTF Player - Reverse Engineer.
              </p>
              <div className="flex justify-center space-x-3">
                <a
                  href="https://www.linkedin.com/in/nkofficial/"
                  className="bg-muted p-2 hover:bg-accent transition-colors rounded-full"
                >
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a href="#" className="bg-muted p-2 hover:bg-accent transition-colors rounded-full">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-secondary p-6 border border-border">
              <h3 className="text-xl font-bold mb-2">DarkLead! Community</h3>
              <p className="text-muted-foreground mb-4">
                Founded and built a next-gen cybersecurity community for hackers, CTF warriors, and cyber enthusiasts.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Code className="h-4 w-4 mr-2 text-primary" />
                  <span>Community Platform</span>
                </div>
                <Link href="/" className="text-primary hover:underline flex items-center">
                  View <ExternalLink className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-secondary p-6 border border-border">
              <h3 className="text-xl font-bold mb-2">CTF Framework</h3>
              <p className="text-muted-foreground mb-4">
                Developed an open-source framework for creating and hosting Capture The Flag competitions.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Terminal className="h-4 w-4 mr-2 text-primary" />
                  <span>Security Tool</span>
                </div>
                <a
                  href="https://github.com/gowthamangs/ctf-framework"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center"
                >
                  View <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-secondary p-6 border border-border">
              <h3 className="text-xl font-bold mb-2">Web Security Scanner</h3>
              <p className="text-muted-foreground mb-4">
                Created an automated tool for identifying common web vulnerabilities and security misconfigurations.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Terminal className="h-4 w-4 mr-2 text-primary" />
                  <span>Security Tool</span>
                </div>
                <a
                  href="https://github.com/gowthamangs/web-security-scanner"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center"
                >
                  View <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-secondary p-6 border border-border">
              <div className="flex items-start">
                <Award className="h-6 w-6 mr-4 text-primary" />
                <div>
                  <h3 className="text-xl font-bold mb-2">CTF Competitions</h3>
                  <p>
                    Placed in the top 100 in multiple international CTF competitions, including TryHackMe and HackTheBox
                    Pro Labs.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-secondary p-6 border border-border">
              <div className="flex items-start">
                <Award className="h-6 w-6 mr-4 text-primary" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Bug Bounty Programs</h3>
                  <p>Discovered and reported critical vulnerabilities in tech companies through bug bounty programs.</p>
                </div>
              </div>
            </div>
            <div className="bg-secondary p-6 border border-border">
              <div className="flex items-start">
                <Award className="h-6 w-6 mr-4 text-primary" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Certifications</h3>
                  <p>Obtained industry-recognized certifications.</p>
                </div>
              </div>
            </div>
            <div className="bg-secondary p-6 border border-border">
              <div className="flex items-start">
                <Award className="h-6 w-6 mr-4 text-primary" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Speaking Engagements</h3>
                  <p>
                    Presented at cybersecurity conferences on topics related to ethical hacking and security research.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Interested in collaborating on a project, speaking engagement, or just want to connect? Feel free to reach
            out!
          </p>
          <Link href="/contact" className="cta-button inline-flex items-center">
            Contact Me <Mail className="h-4 w-4 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
