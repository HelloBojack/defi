import useBlockNumber from "../../utils/hooks/useBlockNumber";
import { Page } from "../common/Page";
import { LiquidityMarket } from "./LiquidityMarket";

export const Trade = () => {
  const blockNumber = useBlockNumber();
  return (
    <Page>
      <div className="flex h-full space-x-[20px] p-[20px]">
        <LiquidityMarket />
        <div>blockNumber:{blockNumber}</div>
      </div>
    </Page>
  );
};
