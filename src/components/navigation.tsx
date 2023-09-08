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
        <Link to={"/about"}>
          <Button variant={"link"} colorScheme="black">
            About
          </Button>
        </Link>
        <Button
          as={"a"}
          variant={"link"}
          colorScheme="black"
          href={"#connect__with_us_section"}
        >
          Contact
        </Button>

        <Link to={"/our-mission"}>
          <Button variant={"link"} colorScheme="black">
            Mission
          </Button>
        </Link>

        <Link to={"/support-us"}>
          <Button variant={"link"} colorScheme="black">
            Support Us
          </Button>
        </Link>
      </Stack>
    </Box>
  );
};
