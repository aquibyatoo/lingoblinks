import { Box } from "@chakra-ui/react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { OurMission } from "../components/mission";

export const OurMissionScreen = () => {
  return (
    <Box>
      <Box bgColor={"#e9f5ff"}>
        <Header />
        <OurMission />
        <Footer />
      </Box>
    </Box>
  );
};
