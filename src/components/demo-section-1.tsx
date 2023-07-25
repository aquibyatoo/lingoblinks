import { Box, Heading } from "@chakra-ui/react";

export const DemoSection1 = () => {
  return (
    <Box
      bgImage={"/demo-section-1.jpg"}
      height={"80vh"}
      bgPosition={"center"}
      backgroundSize={"cover"}
    >
      <Box>
        <Heading as="h2" size="2xl" pt={"100"} pl={100} lineHeight={1.2}>
          Fun vocab learning!
        </Heading>
        <Heading
          as="h5"
          size="sm"
          pt={"100"}
          pl={120}
          paddingTop={10}
          width={400}
        >
          Match pictures, skip the old-school ways. Pronounce with confidence.
          No worries!
        </Heading>
      </Box>
    </Box>
  );
};
