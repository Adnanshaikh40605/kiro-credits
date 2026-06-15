import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "dark";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  href?: string;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-deep shadow-sm transition-all duration-200 hover:shadow-md",
  secondary:
    "bg-secondary text-white hover:bg-canvas-night-soft shadow-sm transition-all duration-200",
  outline:
    "bg-canvas text-ink border border-hairline-strong hover:border-ink-mute-2 hover:bg-canvas-soft transition-all duration-200",
  ghost: "bg-transparent text-ink hover:bg-canvas-soft transition-all duration-200",
  dark: "bg-canvas-night text-white hover:bg-canvas-night-soft transition-all duration-200",
};

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm font-medium",
  lg: "px-6 py-3 text-base font-medium",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-[6px] font-medium cursor-pointer",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
