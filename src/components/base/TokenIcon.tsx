import { ComponentProps, FC } from "react";
import { getTokenIcon } from "../../utils";
import { classNames } from "../../utils/classNames";
import { Token } from "../../utils/types";

interface Props extends ComponentProps<"div"> {
  size?: "sm" | "md" | "lg" | "xl";
  token: Token;
  showLabel?: boolean;
}

export const TokenIcon: FC<Props> = ({
  className,
  size = "md",
  token,
  showLabel = false,
  ...props
}) => {
  let imageBaseClassName = /*tw:*/ "drop-shadow";
  switch (size) {
    case "sm":
      imageBaseClassName += /*tw:*/ " h-[20px] w-[20px]";
      break;
    case "md":
      imageBaseClassName += /*tw:*/ " h-[24px] w-[24px]";
      break;
    case "lg":
      imageBaseClassName += /*tw:*/ " h-[26px] w-[26px]";
      break;
    case "xl":
      imageBaseClassName += /*tw:*/ " h-[30px] w-[30px]";
      break;
  }

  let labelBaseClassName = /*tw:*/ "";
  switch (size) {
    case "sm":
      labelBaseClassName += /*tw:*/ " ml-[10px] text-[12px]";
      break;
    case "md":
      labelBaseClassName += /*tw:*/ " ml-[10px]";
      break;
    case "lg":
      labelBaseClassName += /*tw:*/ " ml-[10px] text-[16px] font-semibold";
      break;
    case "xl":
      labelBaseClassName += /*tw:*/ " ml-[10px] text-[18px] font-semibold";
      break;
  }

  return (
    <div className={classNames("flex items-center", className)} {...props}>
      <img
        className={imageBaseClassName}
        src={getTokenIcon(token.id)}
        alt={token.symbol}
      />
      {showLabel && <div className={labelBaseClassName}>{token.symbol}</div>}
    </div>
  );
};
