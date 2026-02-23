interface LogoRadiusProps {
  width?: number
  height?: number
  className?: string
}

export function LogoMotion5({
  width = 28,
  height = 28,
  className = "",
}: LogoRadiusProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3v6a6 6 0 0 0 6 6h6" />
      <path d="M21 21v-6a6 6 0 0 0-6-6h-6" />

    </svg>
  )
}