interface IconProps {
    width?: number | string;
    height?: number | string;
    className?: string;
  }
  
  export function WhyUsIconPlay({
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
        fill="currentColor"
        className={className}
      >
        <path d="M5 3L19 12L5 21V3Z" />
      </svg>
    );
  }