import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "..";

export const walletSlice = createSlice({
  name: "wallet",
  initialState: {
    address: "",
  },
  reducers: {
    setWallet: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
  },
});

export const { setWallet } = walletSlice.actions;

export const useWallet = () =>
  useSelector((state: RootState) => state.wallet.address);

export default walletSlice.reducer;
