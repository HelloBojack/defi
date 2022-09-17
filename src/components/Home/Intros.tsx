import { ComponentProps } from "react";
import flyingCoins from "../../assets/images/intros/flying-coins.png";
import mining from "../../assets/images/intros/mining.png";
import rocket from "../../assets/images/intros/rocket.png";
import { classNames } from "../../utils/classNames";
import { Container } from "../common/Container";

export const Intros = ({ className }: ComponentProps<"div">) => {
  return (
    <Container className={classNames("space-y-[120px]", className)}>
      <div className="flex items-center justify-evenly">
        <div className="max-w-[50%]">
          <div className="text-[36px] font-semibold">
            No single counterparty
          </div>
          <div className="mt-[20px] font-semibold text-white/60">
            All the positions will be directly matched to DEX liquidity on-chain
            as counterparty
          </div>
        </div>
        <img src={rocket} alt="rocket" />
      </div>
      <div className="flex items-center justify-evenly">
        <img src={flyingCoins} alt="flying coins" />
        <div className="max-w-[50%]">
          <div className="text-[36px] font-semibold">
            100x with no liquidation
          </div>
          <div className="mt-[20px] font-semibold text-white/60">
            No liquidation of traders' positions and leverage ratio is
            completely decided by the available liquidity
          </div>
        </div>
      </div>
      <div className="flex items-center justify-evenly">
        <div className="max-w-[50%]">
          <div className="text-[36px] font-semibold">
            Earn from providing liquidity
          </div>
          <div className="mt-[20px] font-semibold text-white/60">
            All liquidity pairs on DEX can be utilized by HedgeCat and providers
            will earn funding fees
          </div>
        </div>
        <img src={mining} alt="mining" />
      </div>
    </Container>
  );
};
