import { Box, Button, Stack } from "@chakra-ui/react";

export const Navigation = () => {
  return (
    <Box mt={10}>
      <Stack
        flex={{ base: 1, md: 0 }}
        justify={"space-between"}
        direction={"row"}
        spacing={6}
      >
        <Button as={"a"} fontWeight={400} variant={"link"} href={"/"}>
          Home
        </Button>
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
        <Button
          as={"a"}
          fontWeight={400}
          variant={"link"}
          href={"#connect__with_us_section"}
        >
          Contact
        </Button>
        <Button
          as={"a"}
          fontWeight={400}
          variant={"link"}
          href={"/our-mission"}
        >
          Mission
        </Button>
        <Button as={"a"} fontWeight={400} variant={"link"} href={"/support-us"}>
          Support Us
        </Button>
      </Stack>
    </Box>
  );
};
