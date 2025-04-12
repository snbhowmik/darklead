import Link from "next/link"
import { Github, Instagram, Linkedin } from "lucide-react"
import { WhatsAppIcon } from "./icons/whatsapp-icon"
import { DiscordIcon } from "./icons/discord-icon"

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="flex justify-between">
        <div className="p-4 text-sm">
          <p>&copy; {new Date().getFullYear()} DarkLead! Community</p>
          <p className="text-muted-foreground">The Open Cybersecurity Community</p>
        </div>

        <div className="flex">
          <Link href="https://github.com/DarkLead-Community" className="social-icon">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://linkedin.com/company/darklead" className="social-icon">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="https://www.instagram.com/darklead.community/" className="social-icon">
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="https://chat.whatsapp.com/K8G9cEZiUttAFKOmkgAEZ0" className="social-icon">
            <WhatsAppIcon className="h-5 w-5" />
            <span className="sr-only">WhatsApp</span>
          </Link>
          <Link href="https://discord.gg/QbV5jjje" className="social-icon">
            <DiscordIcon className="h-5 w-5" />
            <span className="sr-only">Discord</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
