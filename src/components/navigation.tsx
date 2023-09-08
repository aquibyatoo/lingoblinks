import { Box, Button, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <Box mt={10}>
      <Stack
        flex={{ base: 1, md: 0 }}
        justify={"space-between"}
        direction={"row"}
        spacing={6}
      >
        <Link to={"/"}>
          <Button colorScheme="black" variant={"link"}>
            Home
          </Button>
        </Link>
        <Link to="/our-difference">
          <Button variant={"link"} colorScheme="black">
            What Makes Us Different
          </Button>
        </Link>
        <Button as={"a"} variant={"link"} colorScheme="black" href={"/about"}>
          About
        </Button>
        <Button
          as={"a"}
          variant={"link"}
          colorScheme="black"
          href={"#connect__with_us_section"}
        >
          Contact
        </Button>
        <Button
          as={"a"}
          variant={"link"}
          colorScheme="black"
          href={"/our-mission"}
        >
          Mission
        </Button>
        <Button
          as={"a"}
          variant={"link"}
          colorScheme="black"
          href={"/support-us"}
        >
          Support Us
        </Button>
      </Stack>
    </Box>
  );
};
