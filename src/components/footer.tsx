import { Box, Button } from "@chakra-ui/react";
import { AndroidLink } from "./android-link";
import { AppStoreLink } from "./app-store-link";

export const Footer = () => {
  return (
    <Box minHeight={200} bgColor={"#718096"}>
      <Box pt={16} pb={8} display="flex" justifyContent={"space-evenly"}>
        <AndroidLink />
        <AppStoreLink />
      </Box>

      <Box borderBottom={"1px solid #ccc"} mx="10" />

      <Box display="flex" justifyContent="space-between" p={16}>
        <Box display={"flex"} flexDirection={"column"}>
          <Button
            as={"a"}
            fontWeight={400}
            variant={"link"}
            href={"#"}
            color={"#fff"}
            pb={2}
          >
            Facebook
          </Button>
          <Button
            as={"a"}
            fontWeight={400}
            variant={"link"}
            href={"#"}
            color={"#fff"}
            pb={2}
          >
            Instagram
          </Button>
          <Button
            as={"a"}
            fontWeight={400}
            variant={"link"}
            href={"#"}
            color={"#fff"}
            pb={2}
          >
            LinkedIn
          </Button>
          <Button
            as={"a"}
            fontWeight={400}
            variant={"link"}
            href={"#"}
            color={"#fff"}
            pb={2}
          >
            Twitter
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
