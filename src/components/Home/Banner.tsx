import { useNavigate } from "react-router-dom";
import { Button } from "../base/Button";
import { Container } from "../common/Container";
import { ReactComponent as ArrowRight } from "../../assets/arrow-right.svg";
import { CatLogo } from "./CatLogo";

export const Banner = () => {
  const navigate = useNavigate();

  return (
    <Container className="flex justify-center items-center">
      <div>
        <div className="text-[46px] font-semibold">
          AMM Based Margin Trading Protocol for
          <span className="text-red"> Web3</span>
        </div>
        <div className="mt-[70px] ">
          <Button type="filled" size="2xl" onClick={() => navigate("/trading")}>
            <div>Start Trading</div>
            <ArrowRight className="ml-[64px]" />
          </Button>
          <Button
            className="ml-[20px]"
            type="filled"
            size="2xl"
            color="gray2"
            onClick={() =>
              window.open(
                "https://hedgecat.gitbook.io/product-docs/library/litepaper"
              )
            }
          >
            Litepaper
          </Button>
        </div>
      </div>

      <CatLogo />
    </Container>
  );
};
