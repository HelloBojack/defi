import { createApi } from "@reduxjs/toolkit/query/react";
import { BaseQueryFn } from "@reduxjs/toolkit/query";
import { getProvider } from "../../utils/wallet";

export interface ProviderQueryArgs {
  method: string;
  args?: any[];
}

function providerBaseQuery(): BaseQueryFn<ProviderQueryArgs> {
  return async ({ method, args }) => {
    try {
      return {
        data: await (getProvider() as any)[method](),
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
