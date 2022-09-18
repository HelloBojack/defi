import { Page } from "../common/Page";
import { LiquidityMarket } from "./LiquidityMarket";

export const Trade = () => {
  return (
    <Page>
      <div className="flex h-full space-x-[20px] p-[20px]">
        <LiquidityMarket />
        <div></div>
      </div>
    </Page>
  );
};
