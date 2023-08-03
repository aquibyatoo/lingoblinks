import { Box, Flex, Heading, Image } from "@chakra-ui/react";

export const DemoSection3 = () => (
  <Box bgGradient={"linear(to-b, #fcebff, #fdf1ff)"}>
    <Box py={[20, 100]} maxW={"1300px"} ml={"auto"} mr={"auto"}>
      <Flex justifyContent={"space-between"} direction={["column", "row"]}>
        <Box>
          <Heading
            as="h2"
            size="2xl"
            pt={[0, 100]}
            pl={[10, 100]}
            lineHeight={1.2}
          >
            Step into a world of immersive learning!
          </Heading>
          <Heading
            as="h5"
            size="sm"
            pt={"100"}
            pl={[10, 120]}
            paddingTop={10}
            maxW={400}
          >
            Dive into a fantasy world, become a hero, and conquer real-life
            communication skills.
          </Heading>
        </Box>
        <Box pt={[50, 0]}>
          <Image src="demo-update-3.png" maxW={[300, 500]} margin={"auto"} />
        </Box>
      </Flex>
    </Box>
  </Box>
);
