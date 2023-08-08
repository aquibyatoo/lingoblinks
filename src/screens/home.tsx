import { Box } from "@chakra-ui/react";
import { DemoSection1 } from "../components/demo-section-1";
import { DemoSection2 } from "../components/demo-section-2";
import { DemoSection3 } from "../components/demo-section-3";
import { Footer } from "../components/footer";
import { MainHero } from "../components/main-hero";
import { ConnectWithUs } from "../components/connect-with-us";

export const HomeScreen = () => {
  return (
    <Box>
      <MainHero />
      <DemoSection1 />
      <DemoSection2 />
      <DemoSection3 />
      <ConnectWithUs />
      <Footer />
    </Box>
  );
};
