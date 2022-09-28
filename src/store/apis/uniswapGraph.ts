import { BaseQueryFn } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import {
  ClientError,
  gql,
  GraphQLClient,
  RequestDocument,
  Variables,
} from "graphql-request";
import {
  DepositedLiquidity,
  Market,
  Pool,
  SupportedToken,
} from "../../utils/types";

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

export const uniswapGraphApi = createApi({
  reducerPath: "uniswapGraph",
  baseQuery: graphqlRequestBaseQuery({
    url: "https://api.thegraph.com/subgraphs/name/kennie-stacktrek/uniswap-v3-rinkeby",
  }),
  endpoints: (builder) => ({
    getPools: builder.query<Pool[], { poolIds: string[] }>({
      query: ({ poolIds }) => ({
        document: gql`
          query getPools($filter: Pool_filter) {
            pools(where: $filter) {
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
              feeTier
              tick
              sqrtPrice
              volumeUSD
            }
          }
        `,
        variables: { filter: { id_in: poolIds, sqrtPrice_not: "0" } },
      }),
      transformResponse: (result: any) => result.pools,
    }),
  }),
});

export const { useGetPoolsQuery } = uniswapGraphApi;
