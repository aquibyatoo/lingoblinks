import { Box, Button, Stack } from "@chakra-ui/react";

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
        <Button
          as={"a"}
          fontWeight={400}
          variant={"link"}
          href={"/our-different"}
        >
          What Makes us Different
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
          Support US
        </Button>
      </Stack>
    </Box>
  );
};
