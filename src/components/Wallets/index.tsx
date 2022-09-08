import { useWallet } from "../../store/slices/wallet";
import { connectWallet } from "../../utils/wallet";
import { Button } from "../base/Button";

export const Wallets = () => {
  const wallet = useWallet();
  console.log(wallet);
  return (
    <>
      {wallet ? (
        wallet
      ) : (
        <Button onClick={connectWallet}>Connect Wallet</Button>
      )}
    </>
  );
};
