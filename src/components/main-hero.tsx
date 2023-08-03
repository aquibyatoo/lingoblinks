import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { Header } from "./header";
import { AndroidLink } from "./android-link";
import { AppStoreLink } from "./app-store-link";

export const MainHero = () => {
  return (
    <Box bgColor={"#d6e3ff"}>
      <Box
        bgColor={"#d6e3ff"}
        height={["auto", "95vh"]}
        bgPosition={"center"}
        backgroundSize={"cover"}
        id="home"
        maxW={"1300px"}
        ml={"auto"}
        mr={"auto"}
      >
        <Box>
          <Header />
        </Box>
        <Flex justifyContent={"space-between"} direction={["column", "row"]}>
          <Box>
            <Heading
              as="h2"
              size="2xl"
              pt={"100"}
              pl={[10, 100]}
              lineHeight={1.2}
            >
              Immersive language <br />
              learning starts <br /> here
            </Heading>
            <Box pl={[10, 100]} pt={50} display={["flex"]}>
              <Box mr={[25]}>
                <AndroidLink />
              </Box>
              <Box mt={"-1px"}>
                <AppStoreLink />
              </Box>
            </Box>
          </Box>

          <Box mt={[0, 20]} mr={[0, 20]} paddingTop={[14, 0]} margin={"auto"}>
            <Image src={"/main-hero-animate.gif"} height={[400, 500]} />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
