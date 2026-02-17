import Link from "next/link";
import React from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "secondary-small";
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  href,
  onClick,
  disabled = false,
  type = "button",
  className = "",
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus:outline-none";

  const variantStyles = {
    primary:
      "px-6 py-2.5 bg-[#4ADE80] hover:bg-[#3CC973] text-[#002329] text-sm font-semibold hover:shadow-md",
    secondary:
      "bg-gray-600 text-white hover:bg-gray-700 px-6 py-3 text-base",
    "secondary-small":
      "bg-gray-600 text-white hover:bg-gray-700 px-4 py-2 text-sm",
  };

  const disabledStyles = "opacity-50 cursor-not-allowed pointer-events-none";

  const classes = `${baseStyles} ${variantStyles[variant]} ${
    disabled ? disabledStyles : ""
  } ${className}`;

  // Se tiver href → renderiza como Link
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  // Senão → renderiza como botão
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
};

export default Button;
