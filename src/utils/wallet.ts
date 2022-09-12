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

export const initWallet = () => {
  if (web3Modal.cachedProvider) {
    connectWallet();
  }
};

const addWalletListeners = (web3ModalProvider: providers.Web3Provider) => {
  web3ModalProvider
    .on("accountsChanged", () => {
      window.location.reload();
    })
    .on("chainChanged", () => {
      window.location.reload();
    })
    .on("disconnect", () => {
      window.location.reload();
    });
};

export const connectWallet = async () => {
  const provider = await web3Modal.connect();
  const providerInfo = getProviderInfo(provider);
  const ethersProvider = new providers.Web3Provider(provider);
  const chainId = (await ethersProvider.getNetwork()).chainId;
  const address = await ethersProvider.getSigner().getAddress();

  addWalletListeners(provider);

  store.dispatch(
    setWallet({
      name: providerInfo.name,
      logo: providerInfo.logo,
      chainId,
      address,
    })
  );
};
