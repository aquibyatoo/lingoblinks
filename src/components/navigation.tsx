import { Box, Button, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <Box ml={40}>
      <Stack
        flex={{ base: 1, md: 0 }}
        justify={"space-between"}
        direction={"row"}
        spacing={6}
      >
        <Button as={"a"} fontWeight={400} variant={"link"} href={"/"}>
          Home
        </Button>
        <Link to={"/our-difference"}>TEST 123</Link>
        <Button
          as={"a"}
          fontWeight={400}
          variant={"link"}
          href={"/our-difference"}
        >
          What Makes Us Different
        </Button>
        <Button as={"a"} fontWeight={400} variant={"link"} href={"/about"}>
          About
        </Button>
        <Button as={"a"} fontWeight={400} variant={"link"} href={"/contact"}>
          Contact
        </Button>
        <Button as={"a"} fontWeight={400} variant={"link"} href={"/mission"}>
          Mission
        </Button>
        <Button as={"a"} fontWeight={400} variant={"link"} href={"/support"}>
          Support Us
        </Button>
      </Stack>
    </Box>
  );
};
