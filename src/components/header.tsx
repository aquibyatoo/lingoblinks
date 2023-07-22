import { Box } from "@chakra-ui/react";
import { Navigation } from "./navigation";
import { Logo } from "./logo";

export const Header = () => {
  return (
    <Box px={12} py={4} display="flex" alignItems={"center"}>
      <Logo />
      <Navigation />
    </Box>
  );
};
