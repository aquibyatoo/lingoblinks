import { Box } from "@chakra-ui/react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { SupportUs } from "../components/support-us";

export const SupportUsScreen = () => {
  return (
    <Box>
      <Box>
        <Box bgColor={"#ebf6ff"}>
          <Header />
        </Box>
        <SupportUs />
        <Footer />
      </Box>
    </Box>
  );
};
