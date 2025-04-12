import type React from "react"

export function DiscordIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 9a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h4" />
      <circle cx="15" cy="12" r="1" />
      <circle cx="9" cy="12" r="1" />
      <path d="M9 15c.83.67 1.83 1 3 1 1.17 0 2.17-.33 3-1" />
      <path d="M20 16.5c-1.5 0-3-.5-3-2.5" />
      <path d="M20 16.5c1.5 0 3 .5 3 2.5v1h-6v-1c0-2 1.5-2.5 3-2.5Z" />
    </svg>
  )
}
