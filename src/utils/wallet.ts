import Web3Modal, { getProviderInfo } from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers, providers } from "ethers";
import { store } from "../store";
import { setWallet } from "../store/slices/wallet";

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
  theme: "dark",
  cacheProvider: true,
});

export const connectWallet = async () => {
  const provider = await web3Modal.connect();
  const providerInfo = getProviderInfo(provider);
  const ethersProvider = new providers.Web3Provider(provider);
  const chainId = (await ethersProvider.getNetwork()).chainId;
  const address = await ethersProvider.getSigner().getAddress();

  store.dispatch(
    setWallet({
      name: providerInfo.name,
      logo: providerInfo.logo,
      chainId,
      address,
    })
  );
};
