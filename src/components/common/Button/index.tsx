import { type ReactNode, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button"; href?: never };

type ButtonAsAnchor = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a"; href: string };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-orange-500 hover:bg-orange-600 text-white",
  secondary: "bg-black hover:bg-gray-900 text-white",
  outline: "border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white",
  ghost: "text-orange-500 hover:text-orange-600",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  icon,
  ...props
}: ButtonProps) {
  const base = `inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if ((props as ButtonAsAnchor).as === "a") {
    const { as: _as, ...anchorProps } = props as ButtonAsAnchor;
    return (
      <a className={base} {...anchorProps}>
        {children}
        {icon}
      </a>
    );
  }

  const { as: _as, ...buttonProps } = props as ButtonAsButton;
  return (
    <button className={base} {...buttonProps}>
      {children}
      {icon}
    </button>
  );
}
