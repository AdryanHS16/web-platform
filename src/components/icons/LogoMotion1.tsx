interface LogoOrbitProps {
  width?: number
  height?: number
  className?: string
}

export function LogoMotion1({
  width = 28,
  height = 28,
  className = "",
}: LogoOrbitProps) {
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
      <circle cx="12" cy="12" r="3" />
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <ellipse cx="12" cy="12" rx="4" ry="10" />
      
    </svg>
  )
}