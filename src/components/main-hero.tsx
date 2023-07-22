import { Box, Heading } from "@chakra-ui/react";
import { Header } from "./header";
import { AndroidLink } from "./android-link";
import { AppStoreLink } from "./app-store-link";

export const MainHero = () => {
  return (
    <Box
      bgImage={"/hero-main.jpg"}
      height={"80vh"}
      bgPosition={"center"}
      backgroundSize={"cover"}
    >
      <Box>
        <Header />
      </Box>
      <Box>
        <Heading as="h2" size="2xl" pt={"100"} pl={100} lineHeight={1.2}>
          Immersive language <br />
          learning starts <br /> here
        </Heading>
        <Box pl={100} pt={50} display={"flex"}>
          <Box mr={25}>
            <AndroidLink />
          </Box>
          <Box mt={"-1px"}>
            <AppStoreLink />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
