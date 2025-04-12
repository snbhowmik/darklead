import { Mail, MapPin, Phone, Send, Github, Linkedin, Instagram, MessageSquare } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="text-lg mb-6">
            Have questions about DarkLead! or want to get involved? We'd love to hear from you. Fill out the form or use
            one of our contact methods below.
          </p>

          <div className="space-y-6 mb-8">
            <div className="flex items-start">
              <Mail className="h-6 w-6 mr-4 text-primary" />
              <div>
                <h3 className="font-bold">Email</h3>
                <p>gowthaman@darklead.org</p>
              </div>
            </div>

            <div className="flex items-start">
              <MapPin className="h-6 w-6 mr-4 text-primary" />
              <div>
                <h3 className="font-bold">Office</h3>
                <p>
                  We work in shadows...
                  <br />
                  dare to catch!
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="h-6 w-6 mr-4 text-primary" />
              <div>
                <h3 className="font-bold">Phone</h3>
                <p>+91 6########4</p>
              </div>
            </div>
          </div>

          <div className="bg-secondary p-6 border border-border">
            <h2 className="text-xl font-bold mb-4">Connect With Us</h2>
            <p className="mb-4">
              Follow us on social media to stay updated with the latest news, events, and announcements.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/DarkLead-Community"
                className="bg-muted p-2 hover:bg-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/darklead/"
                className="bg-muted p-2 hover:bg-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/darklead.community/"
                className="bg-muted p-2 hover:bg-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://chat.whatsapp.com/K8G9cEZiUttAFKOmkgAEZ0"
                className="bg-muted p-2 hover:bg-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="h-6 w-6" />
              </a>
              <a
                href="https://discord.gg/ZgQExvkB"
                className="bg-muted p-2 hover:bg-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-secondary p-6 border border-border">
          <h2 className="text-xl font-bold mb-6">Send Us a Message</h2>
          <form>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 bg-muted border border-border text-white"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-1 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 bg-muted border border-border text-white"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-1 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full p-3 bg-muted border border-border text-white"
                  placeholder="What is this regarding?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-1 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full p-3 bg-muted border border-border text-white"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button type="submit" className="cta-button flex items-center justify-center w-full">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-secondary p-6 border border-border">
            <h3 className="font-bold mb-2">How can I join DarkLead!?</h3>
            <p>
              You can join DarkLead! by registering on our website and connecting with your local chapter. If there's no
              chapter in your area, you can start one!
            </p>
          </div>

          <div className="bg-secondary p-6 border border-border">
            <h3 className="font-bold mb-2">Is DarkLead! free to join?</h3>
            <p>
              Yes, DarkLead! is completely free to join. We're a volunteer-driven community focused on knowledge sharing
              and collaboration.
            </p>
          </div>

          <div className="bg-secondary p-6 border border-border">
            <h3 className="font-bold mb-2">How can I contribute to DarkLead!?</h3>
            <p>
              There are many ways to contribute: organize events, give talks, write blog posts, mentor others, or help
              with administrative tasks.
            </p>
          </div>

          <div className="bg-secondary p-6 border border-border">
            <h3 className="font-bold mb-2">Can my company sponsor DarkLead!?</h3>
            <p>
              We welcome sponsorships from companies that align with our values. Please contact us for more information
              about sponsorship opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
