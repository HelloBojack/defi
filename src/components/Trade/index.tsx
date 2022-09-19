import { useGetBlockNumberQuery } from "../../store/apis/hedgeGraph";
import { Page } from "../common/Page";
import { LiquidityMarket } from "./LiquidityMarket";

export const Trade = () => {
  const { currentData: blockNumber } = useGetBlockNumberQuery();
  console.log(blockNumber);

  return (
    <Page>
      <div className="flex h-full space-x-[20px] p-[20px]">
        <LiquidityMarket />
        <div></div>
      </div>
    </Page>
  );
};
