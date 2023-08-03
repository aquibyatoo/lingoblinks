import { Box, Flex, Heading, Image } from "@chakra-ui/react";

export const DemoSection2 = () => (
  <Box bgGradient={"linear(to-b, #e7f4ff, #ebf6ff)"}>
    <Box py={[20, 100]} maxW={"1300px"} ml={"auto"} mr={"auto"}>
      <Flex justifyContent={"space-between"} direction={["column", "row"]}>
        <Box>
          <Image src="demo-update-2.png" maxW={[300, 500]} margin={"auto"} />
        </Box>
        <Box>
          <Heading
            as="h2"
            size="2xl"
            pt={[10, 100]}
            lineHeight={1.2}
            pl={[10, 0]}
          >
            Game on!
          </Heading>
          <Heading
            as="h5"
            size="sm"
            pt={"100"}
            pl={[10]}
            paddingTop={10}
            maxW={400}
          >
            Create custom flashcards and level up your language skills. Play,
            learn, and conquer new words!
          </Heading>
        </Box>
      </Flex>
    </Box>
  </Box>
);
