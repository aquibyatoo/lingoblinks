import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { Header } from "./header";
import { AndroidLink } from "./android-link";
import { AppStoreLink } from "./app-store-link";
import Typist from "react-typist";

export const MainHero = () => {
  return (
    <Box bgGradient={"linear(to-b, #d6e3ff, #e3ecff)"}>
      <Box
        height={["auto", "95vh"]}
        id="home"
        maxW={"1300px"}
        ml={"auto"}
        mr={"auto"}
      >
        <Box>
          <Header />
        </Box>
        <Flex justifyContent={"space-between"} direction={["column", "row"]}>
          <Box flex={1}>
            <Heading
              as="h2"
              size="2xl"
              pt={"100"}
              pl={[10, 100]}
              lineHeight={1.2}
              height={[220, 300]}
            >
              <Typist cursor={{ hideWhenDone: true }}>
                Immersive language <br />
                learning starts <br /> here
              </Typist>
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

          <Box paddingTop={[14, 0]} margin={"auto"} flex={1}>
            <Image src={"/new-anime.gif"} mt={"-100px"} width={500} />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
