import { ComponentProps, ComponentRef, forwardRef } from "react";

interface Props extends Omit<ComponentProps<"button">, "type"> {
  type?: "filled" | "outline" | "plain" | "unstyled";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  color?: "red" | "green" | "gray2";
  loading?: boolean;
}

export const Button = forwardRef<ComponentRef<"button">, Props>(
  (
    {
      className,
      type = "unstyled",
      size = "sm",
      color = "red",
      loading = false,
      disabled = false,
      children,
      ...props
    },
    ref
  ) => {
    let baseClassName =
      /*tw:*/ "inline-flex cursor-pointer items-center justify-center rounded-[4px] font-semibold outline-0 transition-all duration-300 hover:opacity-80";

    switch (color) {
      case "red":
        baseClassName += /*tw:*/ " border-red bg-red text-white";
        break;
      case "green":
        baseClassName += /*tw:*/ " border-green bg-green text-black";
        break;
      case "gray2":
        baseClassName += /*tw:*/ " border-gray2 bg-gray2 text-white";
        break;
    }

    switch (size) {
      case "xs":
        baseClassName += /*tw:*/ " h-[30px] border px-[16px] text-[12px]";
        break;
      case "sm":
        baseClassName += /*tw:*/ " h-[34px] border px-[16px] text-[12px]";
        break;
      case "md":
        baseClassName += /*tw:*/ " h-[40px] border-2 px-[20px] text-[14px]";
        break;
      case "lg":
        baseClassName += /*tw:*/ " h-[50px] border-2 px-[20px] text-[14px]";
        break;
      case "xl":
        baseClassName += /*tw:*/ " h-[56px] border-2 px-[30px] text-[16px]";
        break;
      case "2xl":
        baseClassName += /*tw:*/ " h-[64px] border-2 px-[30px] text-[16px]";
        break;
    }

    switch (type) {
      case "filled":
        baseClassName += /*tw:*/ "";
        break;
      case "outline":
        baseClassName += /*tw:*/ " bg-transparent text-[color:inherit]";
        break;
      case "plain":
        baseClassName +=
          /*tw:*/ " border-transparent bg-transparent text-[color:inherit]";
        break;
      case "unstyled":
        baseClassName +=
          /*tw:*/ " h-auto rounded-none border-0 bg-transparent px-0 text-[length:inherit] font-[number:inherit] text-[color:inherit]";
        break;
    }

    const disabledClassName =
      /*tw:*/ "cursor-not-allowed opacity-30 hover:opacity-30";

    return (
      <button
        ref={ref}
        className={`
          ${baseClassName}
          ${className}
          `}
        type="button"
        disabled={loading || disabled}
        {...props}
      >
        {/* {loading && <Spin className="mr-[10px]" />} */}
        {children}
      </button>
    );
  }
);
