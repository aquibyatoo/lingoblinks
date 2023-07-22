import { Button, Image } from "@chakra-ui/react";

export const AndroidLink = () => {
  return (
    <Button as="a" variant={"link"} width={200}>
      <Image src="/google-play-badge.png" alt="Get it on Google Play" />
    </Button>
  );
};
