import { Page } from "../common/Page";
import { Banner } from "./Banner";
import { Intros } from "./Intros";

export const Home = () => {
  return (
    <Page>
      <div className="py-[100px]">
        <Banner />
        <Intros className="mt-[100px]" />
      </div>
    </Page>
  );
};
