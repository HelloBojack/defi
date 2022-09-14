import { ComponentProps } from "react";
import { Header } from "./Header";

export const Page = ({ children }: ComponentProps<"div">) => {
  return (
    <div className="flex min-w-[1440px] grow flex-col">
      <Header />
      <div className="grow">{children}</div>
    </div>
  );
};
