import useUrlState from "@ahooksjs/use-url-state";
import {
  useDepositedLiquidityWrappers,
  usePools,
} from "../../utils/hooks/useData";
import { Page } from "../common/Page";
import { LiquidityMarket } from "./LiquidityMarket";

export const Trade = () => {
  const [urlState, setUrlState] = useUrlState({
    token0: undefined,
    token1: undefined,
  });

  const { pools } = usePools({
    selectedToken0Id: urlState.token0,
    selectedToken1Id: urlState.token1,
  });

  console.log(pools);

  return (
    <Page>
      <div className="flex h-full space-x-[20px] p-[20px]">
        <LiquidityMarket depositedLiquidity={pools} />
      </div>
    </Page>
  );
};
