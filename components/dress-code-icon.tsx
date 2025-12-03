export function DressCodeIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 3h5v5" />
      <path d="M8 3H3v5" />
      <path d="M12 22V8" />
      <path d="M9 8l3-5 3 5" />
      <path d="M16 8l-4 14" />
      <path d="M8 8l4 14" />
    </svg>
  )
}
