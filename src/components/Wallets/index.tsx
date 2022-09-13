import { Popover } from "antd";
import { useEffect } from "react";
import { useWallet } from "../../store/slices/wallet";
import copy from "../../assets/copy.svg";
import {
  connectWallet,
  disconnectWallet,
  initWallet,
} from "../../utils/wallet";
import { Button } from "../base/Button";
import { copyText } from "../../utils/copyText";

enum SupportedChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GOERLI = 5,
}
const CHAIN_IDS_TO_NAMES = {
  [SupportedChainId.MAINNET]: "Ethereum",
  [SupportedChainId.ROPSTEN]: "Ropsten",
  [SupportedChainId.RINKEBY]: "Rinkeby",
  [SupportedChainId.GOERLI]: "Goerli",
};

const getChainNameFromId = (id: string | number) => {
  return CHAIN_IDS_TO_NAMES[id as SupportedChainId] || "";
};

function shortenAddress(address: string, chars = 4): string {
  return `${address.substring(0, chars + 2)}...${address.substring(
    42 - chars
  )}`;
}

export const Wallets = () => {
  const wallet = useWallet();

  useEffect(() => {
    initWallet();
  }, []);

  return (
    <>
      {wallet ? (
        <div className="flex font-semibold">
          <div className="bg-gray2 rounded-full px-[20px] h-[34px] leading-[34px]">
            {getChainNameFromId(wallet.chainId)}
          </div>

          <Popover
            content={
              <div className="w-max">
                <div className="flex items-center">
                  <img
                    className="h-[24px] w-[24px] rounded-full bg-white/20 p-[3px]"
                    src={wallet.logo}
                    alt={wallet.name}
                  />
                  <Button
                    className="ml-[10px]"
                    type="filled"
                    size="xs"
                    onClick={disconnectWallet}
                  >
                    Disconnect
                  </Button>
                </div>
                <div className="mt-[10px] flex items-center justify-between">
                  <div className="font-semibold">
                    {shortenAddress(wallet.address)}
                  </div>
                  <Button
                    className="ml-[10px]"
                    onClick={() => copyText(wallet.address)}
                  >
                    <img src={copy} alt="copy" />
                  </Button>
                </div>
              </div>
            }
          >
            <div className="bg-gray2 rounded-full flex items-center px-[20px] ml-[10px]">
              <div>{shortenAddress(wallet.address)}</div>
              <img
                className="ml-[10px] h-[24px] w-[24px] rounded-full bg-white/20 p-[3px]"
                src={wallet.logo}
                alt={wallet.name}
              />
            </div>
          </Popover>
        </div>
      ) : (
        <Button type="filled" onClick={connectWallet}>
          Connect Wallet
        </Button>
      )}
    </>
  );
};
