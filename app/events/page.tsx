import Link from "next/link"
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react"

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Upcoming Events</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {/* Event Card 1 */}
        <div className="bg-secondary border border-border">
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-primary text-white px-3 py-1 text-sm font-bold">FEATURED</div>
              <div className="text-sm text-muted-foreground">AUG 14, 2024</div>
            </div>

            <h2 className="text-xl font-bold mb-2">DarkLead! Community Day</h2>
            <p className="text-muted-foreground mb-4">
              DarkLead! Community Day.
              Founded in 2024 by Gowthaman GS.
            </p>

            <div className="space-y-2 mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-primary" />
                <span>April 20-22, 2025</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-primary" />
                <span>Online</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-primary" />
                <span>12:00 AM - 12:00 PM</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2 text-primary" />
                <span>___ attendees expected</span>
              </div>
            </div>

            <Link href="/events/annual-conference" className="text-primary hover:underline flex items-center">
              View details <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>

        {/* Event Card 2 */}
        <div className="bg-secondary border border-border">
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-muted text-white px-3 py-1 text-sm font-bold">Upcoming </div>
              <div className="text-sm text-muted-foreground">######, 2025</div>
            </div>

            <h2 className="text-xl font-bold mb-2">Shadow Apocalypse CTF</h2>
            <p className="text-muted-foreground mb-4">
             Shadow Apocalypse CTF by DarkLead! 
            </p>

            <div className="space-y-2 mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-primary" />
                <span>#####, 2025</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-primary" />
                <span>Online</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-primary" />
                <span>12:00 AM - 12:00 PM</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2 text-primary" />
                <span>___ attendees expected</span>
              </div>
            </div>

            <Link href="/events/web3-workshop" className="text-primary hover:underline flex items-center">
              View details <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>

        {/* Event Card 3 */}
        <div className="bg-secondary border border-border">
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-muted text-white px-3 py-1 text-sm font-bold">Upcoming</div>
              <div className="text-sm text-muted-foreground">#####, 2025</div>
            </div>

            <h2 className="text-xl font-bold mb-2">Shadow Apocalypse CTF Result</h2>
            <p className="text-muted-foreground mb-4">
              Scoreboard will be deployed.
            </p>

            <div className="space-y-2 mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-primary" />
                <span>#####, 2025</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-primary" />
                <span>Online</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-primary" />
                <span>Starts at ##:## AM</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2 text-primary" />
                <span>___ attendees expected</span>
              </div>
            </div>

            <Link href="/events/summer-hackathon" className="text-primary hover:underline flex items-center">
              View details <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Filter Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-secondary p-4 border border-border">
            <h3 className="font-bold mb-2">Event Type</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Conferences</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Workshops</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>CTF</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Meetups</span>
              </label>
            </div>
          </div>

          <div className="bg-secondary p-4 border border-border">
            <h3 className="font-bold mb-2">Location</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Online</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>North America</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Europe</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Asia</span>
              </label>
            </div>
          </div>

          <div className="bg-secondary p-4 border border-border">
            <h3 className="font-bold mb-2">Date</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>This Month</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Next Month</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Next 3 Months</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Next 6 Months</span>
              </label>
            </div>
          </div>

          <div className="bg-secondary p-4 border border-border">
            <h3 className="font-bold mb-2">Topic</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Web Development</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Mobile Development</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>AI/ML</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Blockchain</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h2>
        <p className="mb-6">Organize your own event with the support of the DarkLead! community.</p>
        <Link href="/organize-event" className="cta-button">
          Organize an Event
        </Link>
      </div>
    </div>
  )
}
