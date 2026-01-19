interface LogoProps {
  width?: number
  height?: number
  className?: string
}

export function Logo({ width = 22, height = 22, className = '' }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      className={className}
      viewBox="0 0 22 22"
    >
      <path
        d="M 22 9.253 C 22 8.241 21.179 7.42 20.167 7.42 L 14.546 7.42 L 14.546 1.833 C 14.546 0.821 13.725 0 12.713 0 L 9.236 0 C 8.223 0 7.426 0.833 7.179 1.815 C 6.518 4.454 4.447 6.531 1.815 7.195 C 0.833 7.443 0 8.241 0 9.253 L 0 12.747 C 0 13.759 0.821 14.58 1.833 14.58 L 7.402 14.58 L 7.402 20.167 C 7.402 21.179 8.223 22 9.236 22 L 12.713 22 C 13.725 22 14.523 21.166 14.772 20.185 C 15.443 17.545 17.542 15.468 20.185 14.804 C 21.167 14.557 22 13.759 22 12.747 Z"
        fill="rgba(255, 255, 255, 0.75)"
      />
    </svg>
  )
}
