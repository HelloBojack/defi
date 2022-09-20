import { initializeConnector } from "@web3-react/core";
import { MetaMask } from "@web3-react/metamask";

export const [metaMask, Web3ReactHooks, Web3ReactStore] =
  initializeConnector<MetaMask>((actions) => new MetaMask({ actions }));

export const connectWallet = () => metaMask.activate();

export const disconnectWallet = () => metaMask.resetState();
