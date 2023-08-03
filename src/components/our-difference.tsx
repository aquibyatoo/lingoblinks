import { Box, Image, Show } from "@chakra-ui/react";

export const OurDifference = () => {
  return (
    <Box id="section__our_difference">
      <Show above="sm">
        <Image src="/what-makes-us-different.jpg" alt="our difference" />
      </Show>
      <Show below="sm">
        <Image src="/our-difference-mobile.png" alt="our difference" />
      </Show>
    </Box>
  );
};
