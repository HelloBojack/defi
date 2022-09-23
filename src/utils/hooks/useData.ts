import { skipToken } from "@reduxjs/toolkit/dist/query";
import {
  useGetDepositedLiquiditiesQuery,
  useGetMarketsQuery,
} from "../../store/apis/hedgeGraph";
import useBlockNumber from "./useBlockNumber";

export function useDepositedLiquidityWrappers(params: {
  selectedToken0Id?: string;
  selectedToken1Id?: string;
}) {
  useMarkets(params);
}

export function useMarkets(params: {
  selectedToken0Id?: string;
  selectedToken1Id?: string;
  // selectedMarketId?: string;
}) {
  const { currentData: markets, isFetching } = useGetMarketsQuery(
    params !== skipToken ? undefined : skipToken
  );
  return { markets };
}
