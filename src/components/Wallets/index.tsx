import { useEffect } from "react";
import { useWallet } from "../../store/slices/wallet";
import { connectWallet, initWallet } from "../../utils/wallet";
import { Button } from "../base/Button";

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
        <div className="flex font-semibold" onClick={() => console.log(wallet)}>
          <div className="bg-gray2 rounded-full px-[20px] h-[34px] leading-[34px]">
            {getChainNameFromId(wallet.chainId)}
          </div>
          <div className="bg-gray2 rounded-full flex items-center px-[20px] ml-[10px]">
            <div>{shortenAddress(wallet.address)}</div>
            <img
              className="ml-[10px] h-[24px] w-[24px] rounded-full bg-white/20 p-[3px]"
              src={wallet.logo}
              alt={wallet.name}
            />
          </div>
        </div>
      ) : (
        <Button onClick={connectWallet}>Connect Wallet</Button>
      )}
    </>
  );
};
