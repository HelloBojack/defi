import { ComponentProps, FC } from "react";

export const Container: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={`w-full max-w-[1140px] mx-auto px-[20px] ${className}`}
      {...props}
    />
  );
};
