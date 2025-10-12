export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <rect width="32" height="32" rx="8" fill="#79d1a7" />
        <path d="M9 11h14M9 16h14M9 21h10" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="22" cy="21" r="2" fill="white" />
      </svg>
      <span className="text-xl font-bold tracking-tight">Eshada</span>
    </div>
  )
}
