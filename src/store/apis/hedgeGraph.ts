import { BaseQueryFn } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import {
  ClientError,
  gql,
  GraphQLClient,
  RequestDocument,
  Variables,
} from "graphql-request";
import { DepositedLiquidity, Market, SupportedToken } from "../../utils/types";

export interface GraphqlRequestBaseQueryArgs {
  document: RequestDocument;
  variables?: Variables;
  requestHeaders?: HeadersInit;
}

function graphqlRequestBaseQuery({
  url,
}: {
  url: string;
}): BaseQueryFn<GraphqlRequestBaseQueryArgs> {
  return async ({ document, variables }) => {
    try {
      return {
        data: await new GraphQLClient(url).request(document, variables),
        meta: {},
      };
    } catch (error) {
      if (error instanceof ClientError) {
        const { name, message, stack, request, response } = error;
        return { error: { name, message, stack }, meta: { request, response } };
      }
      throw error;
    }
  };
}

export const hedgeGraphApi = createApi({
  reducerPath: "hedgeGraph",
  baseQuery: graphqlRequestBaseQuery({
    url: "https://api.thegraph.com/subgraphs/name/prodog/hedge-cat-rinkeby",
  }),
  endpoints: (builder) => ({
    getSupportedTokens: builder.query<SupportedToken[], void>({
      query: () => ({
        document: gql`
          query getSupportedTokens($filter: Token_filter) {
            supportedTokens: tokens(where: $filter) {
              id
              symbol
              decimals
              usdPoolId: USDPool
            }
          }
        `,
      }),
      transformResponse: (result: any) => result.supportedTokens,
    }),

    getMarkets: builder.query<Market[], void>({
      query: () => ({
        document: gql`
          query getMarkets($filter: HedgePool_filter) {
            markets: hedgePools(where: $filter) {
              token0 {
                id
                symbol
                decimals
              }
              token1 {
                id
                symbol
                decimals
              }
              id
              poolId: uniPool
              feeTier: fee
            }
          }
        `,
      }),
      transformResponse: (result: any) => result.markets,
    }),

    getDepositedLiquidities: builder.query<
      DepositedLiquidity[],
      {
        marketIds?: string[];
        provider?: string;
        liquidityIds?: string[];
        skip?: number;
        limit?: number;
        blockNumber?: number;
        orderBy?: string;
        orderDirection?: "asc" | "desc";
      }
    >({
      query: ({
        marketIds,
        provider,
        liquidityIds,
        skip,
        limit,
        blockNumber,
        orderBy,
        orderDirection,
      }) => ({
        document: gql`
          query getDepositedLiquidities(
            $filter: LiquidityInfo_filter
            $skip: Int
            $first: Int
            $orderBy: String
            $orderDirection: String
          ) {
            depositedLiquidities: liquidityInfos(
              where: $filter
              skip: $skip
              first: $first
              orderBy: $orderBy
              orderDirection: $orderDirection
            ) {
              id
              owner: hedgePool @_(get: "id") {
                id
              }
              poolId: hedgePool @_(get: "uniPool") {
                uniPool
              }
              lowerTick: tickLower
              upperTick: tickUpper
              amount: allLiquidity
              marketId: hedgePool @_(get: "id") {
                id
              }
              provider: liquidityProvider
              depositBlock
              endBlock: deadline
              feeToken: feeAsset {
                id
                symbol
                decimals
              }
              feePer1e6Block: feeAmount
              remainingAmount: remainingLiquidity
              positionsCount: currentPositions
              receivedFee: feeReceived
              claimedFee: feeClaimed
              paused: isOpen
            }
          }
        `,
        variables: {
          filter: {
            hedgePool_in: marketIds,
            liquidityProvider: provider,
            id_in: liquidityIds,
            isOpen: true,
            deadline_gt: blockNumber,
            tickLower_gt: -887220,
            tickUpper_lt: 887220,
          },
          skip,
          first: limit,
          orderBy:
            orderBy ??
            (provider != undefined ? "depositValueUSD" : "remainingValueUSD"),
          orderDirection: orderDirection ?? "desc",
        },
      }),
      transformResponse: (result: any) =>
        result.depositedLiquidities.map((item: any) => ({
          ...item,
          paused: item.paused !== true,
        })),
    }),
  }),
});

export const {
  useGetSupportedTokensQuery,
  useGetMarketsQuery,
  useGetDepositedLiquiditiesQuery,
} = hedgeGraphApi;
