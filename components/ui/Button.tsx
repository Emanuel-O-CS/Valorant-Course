import { type ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[#FF4655] hover:bg-[#cc3544] text-white border border-transparent",
  secondary:
    "bg-transparent hover:bg-white/5 text-white border border-[#2a2a2a] hover:border-[#3a3a3a]",
  ghost:
    "bg-transparent hover:bg-white/5 text-gray-400 hover:text-white border border-transparent",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-1.5 text-sm rounded-full",
  md: "px-6 py-2 text-sm rounded-full",
  lg: "px-8 py-3 text-base rounded-full",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "primary", size = "md", className = "", children, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={`
          inline-flex items-center justify-center gap-2
          font-semibold transition-colors duration-150
          disabled:opacity-50 disabled:cursor-not-allowed
          ${variantClasses[variant]}
          ${sizeClasses[size]}
          ${className}
        `}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
