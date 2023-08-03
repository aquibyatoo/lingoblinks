import { Box, Flex, Heading, Image } from "@chakra-ui/react";

export const DemoSection1 = () => {
  return (
    <Box bgGradient={"linear(to-b, #e8e8ff, #f1f1ff)"}>
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
              Fun vocab learning!
            </Heading>
            <Heading
              as="h5"
              size="sm"
              pt={"100"}
              pl={[10, 120]}
              paddingTop={10}
              maxW={400}
            >
              Match pictures, skip the old-school ways. Pronounce with
              confidence. No worries!
            </Heading>
          </Box>
          <Box pt={[50, 0]}>
            <Image src="demo-update-1.png" maxW={[300, 500]} margin={"auto"} />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
