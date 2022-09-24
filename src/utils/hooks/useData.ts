import { skipToken } from "@reduxjs/toolkit/dist/query";
import { uniqueArray } from "..";
import {
  useGetDepositedLiquiditiesQuery,
  useGetMarketsQuery,
  useGetSupportedTokensQuery,
} from "../../store/apis/hedgeGraph";
import { useGetPoolsQuery } from "../../store/apis/uniswapGraph";
import useBlockNumber from "./useBlockNumber";

export function useTokens() {
  const { currentData: tokens, isFetching } = useGetSupportedTokensQuery();
  return { tokens, tokensLoading: isFetching };
}

export function useMarkets(params?: {
  selectedToken0Id?: string;
  selectedToken1Id?: string;
  // selectedMarketId?: string;
}) {
  const { currentData: markets, isFetching } = useGetMarketsQuery(
    params !== skipToken ? undefined : skipToken
  );
  return { markets, marketsLoading: isFetching };
}

export function usePools() {
  const { tokens, tokensLoading } = useTokens();
  const { markets, marketsLoading } = useMarkets();
  const poolIds =
    markets &&
    tokens &&
    uniqueArray(
      tokens
        .map((token) => token.usdPoolId)
        .concat(markets?.map((market) => market.poolId))
    );

  const { currentData: pools, isFetching } = useGetPoolsQuery(
    poolIds ? { poolIds } : skipToken
  );

  return {
    pools,
    poolsLoading: tokensLoading || marketsLoading || (isFetching && !pools),
  };
}

export function useDepositedLiquidityWrappers(params: {
  selectedToken0Id?: string;
  selectedToken1Id?: string;
}) {
  const blockNumber = useBlockNumber();
  const { currentData, isFetching } = useGetDepositedLiquiditiesQuery({
    blockNumber,
  });

  return {
    depositedLiquidity: currentData ? currentData : [],
    liquidityLoading: isFetching,
  };
}
