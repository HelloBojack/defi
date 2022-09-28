import useUrlState from "@ahooksjs/use-url-state";
import { useGetPoolsDayDataQuery } from "../../store/apis/uniswapGraph";
import {
  useDepositedLiquidityWrappers,
  usePoolsDayData,
} from "../../utils/hooks/useData";
import { Page } from "../common/Page";
import { LiquidityMarket } from "./LiquidityMarket";

export const Trade = () => {
  const [urlState, setUrlState] = useUrlState({
    token0: undefined,
    token1: undefined,
  });

  const { poolsDayData } = usePoolsDayData({
    selectedToken0Id: urlState.token0,
    selectedToken1Id: urlState.token1,
  });

  console.log(poolsDayData);

  return (
    <Page>
      <div className="flex h-full space-x-[20px] p-[20px]">
        <LiquidityMarket depositedLiquidity={poolsDayData} />
      </div>
    </Page>
  );
};
