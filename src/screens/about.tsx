import { Box } from "@chakra-ui/react";
import { AboutUs } from "../components/about-us";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

export const AboutScreen = () => {
  return (
    <Box>
      <Box bgColor={"#e9f5ff"}>
        <Header />
      </Box>
      <AboutUs />
      <Footer />
    </Box>
  );
};
