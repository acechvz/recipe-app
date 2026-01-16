import type { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const ButtonVariants = {
  Primary: "primary",
  Secondary: "secondary",
  Tertiary: "tertiary",
  IconOnly: "iconOnly",
} as const;

type ButtonVariant = (typeof ButtonVariants)[keyof typeof ButtonVariants];

const buttonVariants = {
  [ButtonVariants.Primary]: "border-black",
  [ButtonVariants.Secondary]: "bg-dark text-white border-none",
  [ButtonVariants.Tertiary]: "bg-primary-2 text-black border-none",
  [ButtonVariants.IconOnly]:
    "px-0 py-0 w-8.5 h-8.5 rounded-full inline-flex justify-center items-center bg-dark/15 border-none",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
}

export function Button({
  children,
  variant = "primary",
  className,
  ...restProps
}: ButtonProps) {
  const buttonVariantClasses = buttonVariants[variant];

  const classes = {
    button: twMerge(
      "border py-3 px-6 rounded-3xl uppercase text-sm cursor-pointer",
      buttonVariantClasses,
      className
    ),
  };

  return (
    <button className={classes.button} {...restProps}>
      {children}
    </button>
  );
}
