interface IconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
}

export function ServiceIconDigital({
  width = 20,
  height = 20,
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
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 20v-6M6 20V10M18 20V4" />
    </svg>
  );
}
