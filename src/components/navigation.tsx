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
        <Button as={"a"} fontWeight={400} variant={"link"} href={"#home"}>
          Home
        </Button>
        <Button
          as={"a"}
          fontWeight={400}
          variant={"link"}
          href={"#section__our_difference"}
        >
          What Makes Us Different
        </Button>
        <Button
          as={"a"}
          fontWeight={400}
          variant={"link"}
          href={"#section__about_us"}
        >
          About
        </Button>
        {/* <Button as={"a"} fontWeight={400} variant={"link"} href={"/contact"}>
          Contact
        </Button> */}
        <Button
          as={"a"}
          fontWeight={400}
          variant={"link"}
          href={"#section__our_mission"}
        >
          Mission
        </Button>
        <Button
          as={"a"}
          fontWeight={400}
          variant={"link"}
          href={"#section__support_us"}
        >
          Support Us
        </Button>
      </Stack>
    </Box>
  );
};
