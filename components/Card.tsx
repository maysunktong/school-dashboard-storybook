import { EllipsisVertical } from "lucide-react";
import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  title?: string;
  bgColor?: string;
}

export default function Card({
  children,
  className,
  title,
  ...props
}: CardProps) {
  const baseStyle =
    "w-full relative rounded-2xl px-5 py-3 flex flex-col";
  return (
    <div className={`${baseStyle} ${className}`} {...props}>
      <EllipsisVertical className="absolute top-5 right-3 text-gray-400 cursor-pointer" />
      {title && <p className="text-sm md:text-xl font-bold py-3">{title}</p>}
      <div className="overflow-y-auto flex-1">{children}</div>
    </div>
  );
}
