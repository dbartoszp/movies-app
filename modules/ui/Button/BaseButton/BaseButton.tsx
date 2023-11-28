import { MouseEvent, ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";

type BaseButtonProps = LinkVariantProps | ButtonVariantProps;

type BaseProps = {
  disabled?: boolean;
  children: ReactNode;
  size?: keyof typeof sizes;
  variant?: string;
  rounded?: boolean;
};

export type LinkVariantProps = {
  as: "a";
  href: string;
  onClick?: (e?: MouseEvent<HTMLAnchorElement>) => void;
} & BaseProps;
export type ButtonVariantProps = {
  as: "button";
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
} & BaseProps;

type Sizes = {
  sm: string;
  md: string;
  lg: string;
};

type ClassNames = {
  [key: string]: string;
};

const sizes: Sizes = {
  sm: "px-2.5 py-1.5",
  md: "px-3.5 py-2",
  lg: "px-6 py-3",
};

const variants: ClassNames = {
  primary: "bg-dark-blue enabled:hover:bg-light-blue",
  secondary:
    "enabled:hover:bg-light-olive-lighter bg-light-blue text-dark-blue",
  link: "text-elden-beige bg-transparent enabled:hover:bg-transparent enabled:hover:underline",
  danger:
    "bg-red-700 text-red-100 enabled:hover:bg-red-600  border border-red-50",
};
export const BaseButton = (props: BaseButtonProps) => {
  const { variant = "primary", size = "md", rounded = true } = props;
  const className = clsx("font-semibold transition-all duration-300", {
    [variants[variant]]: props.variant,
    [sizes[size]]: props.size,
    "rounded-xl": rounded,
  });
  if (props.as === "a") {
    return (
      <Link href={props.href} className={className}>
        {props.children}
      </Link>
    );
  }
  return (
    <button {...props} className={className}>
      {props.children}
    </button>
  );
};
