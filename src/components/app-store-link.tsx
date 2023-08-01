import { Button, Image } from "@chakra-ui/react";

export const AppStoreLink = () => {
  return (
    <Button as="a" variant={"link"} width={[140, 200]}>
      <Image src="/app-store-badge.png" alt="Get it on Google Play" />
    </Button>
  );
};
