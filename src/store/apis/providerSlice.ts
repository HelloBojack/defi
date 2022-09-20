import { createApi } from "@reduxjs/toolkit/query/react";
import { BaseQueryFn } from "@reduxjs/toolkit/query";

export interface ProviderQueryArgs {
  method: string;
  args?: any[];
}

function providerBaseQuery(): BaseQueryFn<ProviderQueryArgs> {
  return async ({ method, args }) => {
    try {
      return {
        data: {},
        meta: {},
      };
    } catch (error) {
      return {
        data: error,
      };
    }
  };
}
export const providerApi = createApi({
  reducerPath: "provider",
  baseQuery: providerBaseQuery(),
  endpoints: (builder) => ({
    getBlockNumber: builder.query<number, void>({
      query: () => ({ method: "getBlockNumber" }),
    }),
  }),
});

export const { useGetBlockNumberQuery, useLazyGetBlockNumberQuery } =
  providerApi;
