interface IconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
}

export function WhyUsIconChart({
  width = 24,
  height = 24,
  className = "",
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M8 16V10M12 16V8M16 16V12" />
    </svg>
  );
}
