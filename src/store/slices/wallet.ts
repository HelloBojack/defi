import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "..";

interface WalletState {
  name: string;
  logo: string;
  address: string;
  chainId: number;
}

export const walletSlice = createSlice({
  name: "wallet",
  initialState: {
    value: undefined as WalletState | undefined,
  },
  reducers: {
    setWallet: (state, action: PayloadAction<WalletState | undefined>) => {
      state.value = action.payload;
    },
  },
});

export const { setWallet } = walletSlice.actions;

export const useWallet = () =>
  useSelector((state: RootState) => state.wallet.value);

export default walletSlice.reducer;
