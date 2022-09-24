import useUrlState from "@ahooksjs/use-url-state";
import { useDepositedLiquidityWrappers } from "../../utils/hooks/useData";
import { Page } from "../common/Page";
import { LiquidityMarket } from "./LiquidityMarket";

export const Trade = () => {
  const [urlState, setUrlState] = useUrlState({
    token0: undefined,
    token1: undefined,
  });

  const { depositedLiquidity } = useDepositedLiquidityWrappers({
    selectedToken0Id: urlState.token0,
    selectedToken1Id: urlState.token1,
  });

  return (
    <Page>
      <div className="flex h-full space-x-[20px] p-[20px]">
        <LiquidityMarket depositedLiquidity={depositedLiquidity} />
      </div>
    </Page>
  );
};
