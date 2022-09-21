import { initializeConnector } from "@web3-react/core";
import { MetaMask } from "@web3-react/metamask";
import { Connector } from "@web3-react/types";

export const [metaMask, Web3ReactHooks, Web3ReactStore] =
  initializeConnector<MetaMask>((actions) => new MetaMask({ actions }));

export const connectors: [
  Connector,
  typeof Web3ReactHooks,
  typeof Web3ReactStore
][] = [[metaMask, Web3ReactHooks, Web3ReactStore]];

export const connectWallet = () => metaMask.activate();

export const disconnectWallet = () => metaMask.resetState();
