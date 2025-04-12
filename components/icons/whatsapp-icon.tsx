import type React from "react"
export function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" fill="currentColor" stroke="none" />
      <path
        d="M13.5 13.5L15 15l-1.5 1.5M8.5 12.5 7 11l1.5-1.5M14 7.5 15.5 9 14 10.5M9.5 14l-1.5 1.5L9.5 17"
        fill="none"
      />
      <path d="M9.5 11.5a5 5 0 0 0 5 5" />
    </svg>
  )
}
