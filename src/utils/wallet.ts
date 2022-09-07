import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: "657c0bd9ad0a40a8acabdf8aacef04ed",
    },
  },
};

const web3Modal = new Web3Modal({
  providerOptions,
  cacheProvider: true,
});

export const connectWallet = async () => {
  const provider = await web3Modal.connect();
};
