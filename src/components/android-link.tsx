import {
  Box,
  Button,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";

export const AndroidLink = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button as="a" variant={"link"} width={[140, 200]}>
          <Image src="/google-play-badge.png" alt="Get it on Google Play" />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Demo is invitation only!</PopoverHeader>
        <PopoverBody>
          Please send an email to&nbsp;
          <a href="mailto:amir@lingoblinks.com?body=Request to share the demo">
            <Box display={"inline"} color="teal.500">
              amir@lingoblinks.com
            </Box>
          </a>
          &nbsp; to get an invitation.
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
