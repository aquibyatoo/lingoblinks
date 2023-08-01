import { Box, Show } from "@chakra-ui/react";
import { Navigation } from "./navigation";
import { Logo } from "./logo";
import MobileNavigation from "./mobile-navigation";

export const Header = () => {
  return (
    <Box
      px={[6, 12]}
      py={[2, 4]}
      display={"flex"}
      justifyContent={"space-between"}
    >
      <Show below="sm">
        <MobileNavigation />
      </Show>
      <Logo />
      <Show above="md">
        <Navigation />
      </Show>
    </Box>
  );
};
