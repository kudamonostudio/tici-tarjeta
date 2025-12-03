export function WeddingRings({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Left ring */}
      <circle cx="35" cy="50" r="18" />

      {/* Right ring */}
      <circle cx="65" cy="50" r="18" />

      {/* Diamond on left ring */}
      <path d="M 35 28 L 38 32 L 35 36 L 32 32 Z" fill="currentColor" />

      {/* Diamond sparkle lines */}
      <line x1="35" y1="24" x2="35" y2="22" />
      <line x1="40" y1="26" x2="42" y2="24" />
      <line x1="30" y1="26" x2="28" y2="24" />
    </svg>
  )
}
