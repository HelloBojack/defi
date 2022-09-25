import { ComponentProps, FC } from "react";
import { classNames } from "../../utils/classNames";
import { Pair } from "../../utils/types";
import { TokenIcon } from "./TokenIcon";

interface Props extends ComponentProps<"div"> {
  pair: Pair;
}

export const PairIcon = ({ pair, className }: Props) => {
  // const pairWrapper = new PairWrapper(pair);
  // const baseToken = pairWrapper.baseToken.token;
  // const quoteToken = pairWrapper.quoteToken.token;

  const { token0, token1 } = pair;

  // let quoteTokenBaseClassName = /*tw:*/ "";
  // switch (size) {
  //   case "sm":
  //     quoteTokenBaseClassName += /*tw:*/ " ml-[-10px]";
  //     break;
  //   case "md":
  //     quoteTokenBaseClassName += /*tw:*/ " ml-[-12px]";
  //     break;
  //   case "lg":
  //     quoteTokenBaseClassName += /*tw:*/ " ml-[-13px]";
  //     break;
  //   case "xl":
  //     quoteTokenBaseClassName += /*tw:*/ " ml-[-15px]";
  //     break;
  // }

  // let labelBaseClassName = /*tw:*/ "";
  // switch (size) {
  //   case 'sm':
  //     labelBaseClassName += /*tw:*/ ' ml-[10px] text-[12px]';
  //     break;
  //   case 'md':
  //     labelBaseClassName += /*tw:*/ ' ml-[10px]';
  //     break;
  //   case 'lg':
  //     labelBaseClassName += /*tw:*/ ' ml-[10px] text-[16px] font-semibold';
  //     break;
  //   case 'xl':
  //     labelBaseClassName += /*tw:*/ ' ml-[10px] text-[18px] font-semibold';
  //     break;
  // }

  return (
    <div className={classNames("isolate flex items-center", className)}>
      <TokenIcon className="z-10" token={token0} />
      <TokenIcon className="ml-[-10px]" token={token1} />
      {/* {showLabel && (
        <div className={labelBaseClassName}>
          {baseToken.symbol}-{quoteToken.symbol}
        </div>
      )} */}
    </div>
  );
};
