import { twMerge } from "tailwind-merge";

interface BadgeProps {
  label: string;
  className?: string;
}
export function Badge({ label, className }: BadgeProps) {
  return (
    <div
      className={twMerge(
        "text-sm uppercase font-medium bg-primary-3 inline-flex py-1 px-2 rounded-2xl text-white",
        className
      )}
    >
      {label}
    </div>
  );
}
