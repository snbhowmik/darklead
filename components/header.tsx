"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Clock, User } from "lucide-react"

export default function Header() {
  const pathname = usePathname()
  const [time, setTime] = useState({
    utc: "",
    local: "",
    est: "",
  })

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()

      // UTC Time
      const utcHours = now.getUTCHours()
      const utcMinutes = now.getUTCMinutes()
      const utcTime = `UTC ${utcHours.toString().padStart(2, "0")}:${utcMinutes.toString().padStart(2, "0")}`

      // Local Time
      const localHours = now.getHours()
      const localMinutes = now.getMinutes()
      const localTime = `LOCAL ${localHours.toString().padStart(2, "0")}:${localMinutes.toString().padStart(2, "0")}`

      // EST Time (UTC-5)
      const estDate = new Date(now)
      estDate.setHours(now.getUTCHours() - 5)
      const estHours = estDate.getHours()
      const estMinutes = estDate.getMinutes()
      const estTime = `EST ${estHours.toString().padStart(2, "0")}:${estMinutes.toString().padStart(2, "0")}`

      setTime({
        utc: utcTime,
        local: localTime,
        est: estTime,
      })
    }

    updateTime()
    const interval = setInterval(updateTime, 60000)

    return () => clearInterval(interval)
  }, [])

  const isActive = (path: string) => {
    return pathname === path ? "active" : ""
  }

  return (
    <header className="border-b border-border">
      <div className="flex justify-between items-center">
        <Link href="/" className="p-4 text-black bg-primary">
          <span className="font-bold text-xl">DL!</span>
        </Link>

        <nav className="hidden md:flex">
          <Link href="/coming-soon" className={`nav-link ${isActive("/coming-soon")}`}>
            WORK
          </Link>
          <Link href="/coming-soon" className={`nav-link ${isActive("/coming-soon")}`}>
            INFO
          </Link>
          <Link href="/coming-soon" className={`nav-link ${isActive("/coming-soon")}`}>
            READ
          </Link>
          <Link href="/ctf" className={`nav-link ${isActive("/ctf")}`}>
            CTF
          </Link>
          <Link href="/events" className={`nav-link ${isActive("/events")}`}>
            EVENTS
          </Link>
          <Link href="/chapters" className={`nav-link ${isActive("/chapters")}`}>
            CHAPTERS
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4 px-4 time-display">
          <span>{time.local}</span>
          <span>{time.est}</span>
          <span>{time.utc}</span>
        </div>

        <div className="flex items-center">
          <Link href="/team" className="p-4 bg-secondary hover:bg-accent transition-colors">
            <User className="h-5 w-5" />
            <span className="sr-only">Team</span>
          </Link>
          <Link href="/contact" className="p-4 bg-secondary hover:bg-accent transition-colors">
            CONTACT
          </Link>
        </div>
      </div>

      <div className="md:hidden flex overflow-x-auto">
        <Link href="/coming-soon" className={`nav-link ${isActive("/coming-soon")}`}>
          WORK
        </Link>
        <Link href="/coming-soon" className={`nav-link ${isActive("/coming-soon")}`}>
          INFO
        </Link>
        <Link href="/coming-soon" className={`nav-link ${isActive("/coming-soon")}`}>
          READ
        </Link>
        <Link href="/ctf" className={`nav-link ${isActive("/ctf")}`}>
          CTF
        </Link>
        <Link href="/events" className={`nav-link ${isActive("/events")}`}>
          EVENTS
        </Link>
        <Link href="/chapters" className={`nav-link ${isActive("/chapters")}`}>
          CHAPTERS
        </Link>
      </div>

      <div className="md:hidden flex justify-center p-2 time-display border-t border-border">
        <Clock className="h-3 w-3 mr-1" />
        <span>{time.local}</span>
      </div>
    </header>
  )
}
