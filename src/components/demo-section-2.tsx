import { Box, Heading } from "@chakra-ui/react";

export const DemoSection2 = () => (
  <Box
    bgImage={"/demo-section-3.jpg"}
    height={"80vh"}
    bgPosition={"center"}
    backgroundSize={"cover"}
  >
    <Box>
      <Heading as="h2" size="2xl" pt={"100"} pl={100} lineHeight={1.2}>
        Game on!
      </Heading>
      <Heading
        as="h5"
        size="sm"
        pt={"100"}
        pl={120}
        paddingTop={10}
        width={400}
      >
        Create custom flashcards and level up your language skills. Play, learn,
        and conquer new words!
      </Heading>
    </Box>
  </Box>
);
