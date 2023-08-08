import { Box } from "@chakra-ui/react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { OurDifference } from "../components/our-difference";

export const OurDifferenceScreen = () => {
  return (
    <Box>
      <Box bgColor={["#f3e1ff", "#f8effd"]}>
        <Header />
      </Box>
      <OurDifference />
      <Footer />
    </Box>
  );
};
