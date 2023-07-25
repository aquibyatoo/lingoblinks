import { Box, Heading } from "@chakra-ui/react";

export const DemoSection3 = () => (
  <Box
    bgImage={"/demo-section-3.jpg"}
    height={"80vh"}
    bgPosition={"center"}
    backgroundSize={"cover"}
  >
    <Box>
      <Heading
        as="h2"
        size="2xl"
        pt={"100"}
        pl={100}
        lineHeight={1.2}
        maxWidth={600}
      >
        Step into a world of immersive learning!
      </Heading>
      <Heading
        as="h5"
        size="sm"
        pt={"100"}
        pl={120}
        paddingTop={10}
        width={400}
      >
        Dive into a fantasy world, become a hero, and conquer real-life
        communication skills.
      </Heading>
    </Box>
  </Box>
);
