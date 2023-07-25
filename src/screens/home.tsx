import { DemoSection1 } from "../components/demo-section-1";
import { DemoSection2 } from "../components/demo-section-2";
import { DemoSection3 } from "../components/demo-section-3";
import { MainHero } from "../components/main-hero";
import { OurMission } from "../components/mission";
import { OurDifference } from "../components/our-difference";
import { SupportUs } from "../components/support-us";

export const Home = () => {
  return (
    <div>
      <MainHero />
      <DemoSection1 />
      <DemoSection2 />
      <DemoSection3 />
      <OurDifference />
      <OurMission />
      <SupportUs />
    </div>
  );
};
