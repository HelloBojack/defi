import { BaseQueryFn } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import {
  ClientError,
  gql,
  GraphQLClient,
  RequestDocument,
  Variables,
} from "graphql-request";

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
    getBlockNumber: builder.query<number, void>({
      query: () => ({
        document: gql`
          query getBlockNumber {
            blockNumber: _meta @_(get: "block.number") {
              block {
                number
              }
            }
          }
        `,
      }),
      transformResponse: (result: any) => result.blockNumber,
    }),
  }),
});
