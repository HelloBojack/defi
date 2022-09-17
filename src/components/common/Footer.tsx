import { ComponentProps, FC } from "react";
import discord from "../../assets/images/mediums/discord.svg";
import github from "../../assets/images/mediums/github.svg";
import reddit from "../../assets/images/mediums/reddit.svg";
import telegram from "../../assets/images/mediums/telegram.svg";
import twitter from "../../assets/images/mediums/twitter.svg";
import { classNames } from "../../utils/classNames";
import { Container } from "./Container";

export const Footer: FC<ComponentProps<"div">> = ({ className, ...props }) => {
  return (
    <Container className={classNames("flex pb-[47px]", className)} {...props}>
      <div className="grow">
        <div className="font-tmr text-[22px]">HedgeCat</div>
        <div className="mt-[10px] text-[13px] text-white/60">
          AMM based Margin Trading Protocol for Web3
        </div>
        <div className="mt-[10px] text-[13px] text-white/60">
          contact@hedgecat.finance
        </div>

        <div className="mt-[114px] flex items-center space-x-[20px]">
          <a className="inline-flex items-center text-[color:inherit] no-underline transition-all duration-300 opacity-100 hover:opacity-80">
            <img src={telegram} alt="telegram" />
          </a>
          <a
            className="inline-flex items-center text-[color:inherit] no-underline transition-all duration-300 opacity-100 hover:opacity-80"
            href="https://github.com/HedgeCatFinance"
          >
            <img src={github} alt="github" />
          </a>
          <a
            className="inline-flex items-center text-[color:inherit] no-underline transition-all duration-300 opacity-100 hover:opacity-80"
            href="https://twitter.com/Hedge__Cat"
          >
            <img src={twitter} alt="twitter" />
          </a>
          <a className="inline-flex items-center text-[color:inherit] no-underline transition-all duration-300 opacity-100 hover:opacity-80">
            <img src={reddit} alt="reddit" />
          </a>
          <a
            className="inline-flex items-center text-[color:inherit] no-underline transition-all duration-300 opacity-100 hover:opacity-80"
            href="https://discord.gg/c33EYpWVph"
          >
            <img src={discord} alt="discord" />
          </a>
        </div>

        <div className="mt-[30px] text-[13px] text-white/60">
          ©2022 HedgeCat. All rights reserved
        </div>
      </div>

      <div className="flex space-x-[80px]">
        <div className="flex flex-col space-y-[20px]">
          <div className="text-[13px] font-semibold uppercase">ABOUT</div>

          <a className="inline-flex items-center text-[color:inherit] no-underline transition-all duration-300 opacity-60 hover:opacity-100 text-[13px] font-semibold uppercase">
            NEWSLETTER
          </a>
          <a className="inline-flex items-center text-[color:inherit] no-underline transition-all duration-300 opacity-60 hover:opacity-100 text-[13px] font-semibold uppercase">
            DOCUMENTATION
          </a>
          <a className="inline-flex items-center text-[color:inherit] no-underline transition-all duration-300 opacity-60 hover:opacity-100 text-[13px] font-semibold uppercase">
            JOBS
          </a>
          <a className="inline-flex items-center text-[color:inherit] no-underline transition-all duration-300 opacity-60 hover:opacity-100 text-[13px] font-semibold uppercase">
            PRESS KIT
          </a>
        </div>

        <div className="flex flex-col space-y-[20px]">
          <div className="text-[13px] font-semibold uppercase">DEVELOPERS</div>

          <a className="inline-flex items-center text-[color:inherit] no-underline transition-all duration-300 opacity-60 hover:opacity-100 text-[13px] font-semibold uppercase">
            Dev Ecosystem
          </a>
          <a className="inline-flex items-center text-[color:inherit] no-underline transition-all duration-300 opacity-60 hover:opacity-100 text-[13px] font-semibold uppercase">
            Documentation
          </a>
          <a className="inline-flex items-center text-[color:inherit] no-underline transition-all duration-300 opacity-60 hover:opacity-100 text-[13px] font-semibold uppercase">
            Github
          </a>
          <a className="inline-flex items-center text-[color:inherit] no-underline transition-all duration-300 opacity-60 hover:opacity-100 text-[13px] font-semibold uppercase">
            Audit
          </a>
          <a className="inline-flex items-center text-[color:inherit] no-underline transition-all duration-300 opacity-60 hover:opacity-100 text-[13px] font-semibold uppercase">
            Bug Bounty
          </a>
        </div>

        <div className="flex flex-col space-y-[20px]">
          <div className="text-[13px] font-semibold uppercase">Governance</div>

          <a className="inline-flex items-center text-[color:inherit] no-underline transition-all duration-300 opacity-60 hover:opacity-100 text-[13px] font-semibold uppercase">
            Forum
          </a>
          <a className="inline-flex items-center text-[color:inherit] no-underline transition-all duration-300 opacity-60 hover:opacity-100 text-[13px] font-semibold uppercase">
            VOTING
          </a>
        </div>
      </div>
    </Container>
  );
};
