import { ComponentProps, ComponentRef, forwardRef } from "react";

interface Props extends Omit<ComponentProps<"button">, "type"> {
  type?: "filled" | "outline" | "plain";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  color?: "red";
  loading?: boolean;
}

export const Button = forwardRef<ComponentRef<"button">, Props>(
  (
    {
      className,
      type,
      size = "sm",
      color = "red",
      loading,
      disabled = false,
      children,
      ...props
    },
    ref
  ) => {
    let baseClassName =
      "text-white border rounded-[4px] font-semibold transition-all duration-300 hover:opacity-80";

    switch (color) {
      case "red":
        baseClassName += " border-red bg-red";
        break;
    }
    switch (size) {
      case "xs":
        baseClassName += /*tw:*/ " h-[30px] border px-[16px] text-[12px]";
        break;
      case "sm":
        baseClassName += /*tw:*/ " h-[34px] border px-[16px] text-[12px]";
        break;
    }

    return (
      <button ref={ref} className={baseClassName} type="button" {...props}>
        {children}
      </button>
    );
  }
);
