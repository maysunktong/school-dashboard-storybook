import { BadgeCheck, BellRing, TriangleAlert } from "lucide-react";

type BadgeType = {
  variant?:
    | "default"
    | "secondary"
    | "success"
    | "warning"
    | "destructive"
    | "outline"
    | "verified"
    | "reminder";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  text?: string;
  children?: React.ReactNode;
};

export default function Badge({
  variant = "default",
  size = "xs",
  text = "This is a badge",
  children,
  ...props
}: BadgeType) {
  const baseStyle =
    "rounded-full transition-colors flex gap-1 justify-center items-center";

  const variants = {
    default: "bg-white text-gray-600 hover:bg-blue-100",
    secondary:
      "bg-gray-300 dark:bg-gray-300 text-white dark:text-slate-500 dark:hover:text-black hover:bg-gray-500 dark:hover:bg-gray-200",
    success: "bg-lime-500 dark:bg-green-600 text-white hover:bg-green-400",
    warning:
      "bg-amber-300 dark:bg-yellow-400 border border-white text-white hover:bg-black",
    destructive: "bg-red-600 text-white hover:bg-red-700",
    outline:
      "text-black dark:text-white border border-gray-400 bg-background text-gray-500",
    verified: "text-white bg-blue-500 hover:bg-blue-600",
    reminder: "bg-pink-400 hover:bg-pink-300 text-white",
  };

  const sizes = {
    xs: "px-2.5 py-1 text-xs",
    sm: "px-2.5 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
    xl: "px-6 py-4 text-xl",
  };

  const iconSizes = {
    xs: "size-3",
    sm: "size-4",
    md: "size-5",
    lg: "size-6",
    xl: "size-8",
  };

  const iconDisplay = () => {
    const iconClass = iconSizes[size];
    if (variant === "warning") return <TriangleAlert className={iconClass} />;
    if (variant === "verified") return <BadgeCheck className={iconClass} />;
    if (variant === "reminder") return <BellRing className={iconClass} />;
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${sizes[size]}`}
      {...props}
    >
      {iconDisplay()} {children ? children : text}
    </button>
  );
}
