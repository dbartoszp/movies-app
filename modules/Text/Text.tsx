import clsx from "clsx";
import { ReactNode } from "react";

type TextProps = {
  children: ReactNode;
  variant?: string;
};

type ClassNames = {
  [key: string]: string;
};

const variants: ClassNames = {
  default: "text-md",
  title: "text-3xl uppercase tracking-widest font-light",
  mainInfo: "text-lg font-normal",
};

export const Text = (props: TextProps) => {
  const { variant = "default" } = props;

  const className = clsx("", { [variants[variant]]: props.variant });

  if (props.variant === "mainInfo")
    return <h1 className={className}>{props.children}</h1>;
  return <h2 className={className}>{props.children}</h2>;
};
