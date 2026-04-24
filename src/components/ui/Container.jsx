import { createElement } from "react";

export default function Container({
  as = "div",
  size = "default",
  className = "",
  children,
  ...props
}) {
  const sizes = {
    sm: "max-w-4xl",
    default: "max-w-6xl",
    lg: "max-w-7xl",
    xl: "max-w-[90rem]",
  };

  return createElement(
    as,
    {
      ...props,
      className:
        `mx-auto w-full ${sizes[size]} px-4 sm:px-6 lg:px-8 ${className}`.trim(),
    },
    children,
  );
}
