import { ComponentProps, FC } from "react";
import { classNames } from "../../utils/classNames";

export const Container: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={classNames(
        "w-full max-w-[1140px] mx-auto px-[20px]",
        className
      )}
      {...props}
    />
  );
};
