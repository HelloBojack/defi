import { connectWallet } from "../../utils/wallet";
import { Button } from "../base/Button";

export const Wallets = () => {
  return (
    <>
      <Button onClick={connectWallet}>Connect Wallet</Button>
    </>
  );
};
