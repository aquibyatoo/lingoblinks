import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Image,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

export const ConnectWithUs = () => {
  const [message, setMessage] = React.useState({ subject: "", body: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };

  return (
    <Box
      py={[10, 20]}
      bgGradient={"linear(to-b, #ffe2ea, #ffeff7)"}
      id="connect__with_us_section"
    >
      <Box maxW={"1300px"} margin={"auto "} p={[10, 0]}>
        <Heading as="h2" size="2xl" lineHeight={1.2} textAlign={"center"}>
          Connect With Us
        </Heading>
        <Flex
          justifyContent={"space-between"}
          pt={[10, 20]}
          flexDirection={["column", "row"]}
        >
          <Box flex={1} textAlign={"center"}>
            <Heading as="h3" size="md" textAlign={"left"}>
              Write us a message
            </Heading>
            <FormControl width={["auto", 500]} py={8}>
              <Input
                placeholder="Subject"
                bgColor={"#fff"}
                name="subject"
                value={message.subject}
                onChange={handleChange}
                mb={6}
              />
              <Textarea
                placeholder="Start writing message here"
                bgColor={"#fff"}
                name="body"
                value={message.body}
                onChange={handleChange}
                mb={8}
              />
              <Button size={"lg"} colorScheme={"facebook"}>
                <a
                  href={`mailto:amir@lingoblinks.com?subject=${message.subject}&body=${message.body}`}
                >
                  Get Started
                </a>
              </Button>
            </FormControl>
          </Box>
          <Box flex={1} pt={[10, 0]}>
            <Heading as="h3" size="md" width={["auto", 500]} lineHeight={1.4}>
              Interested in Working Together? Fill out the form below, Our team
              of professionals will contact you to guide forward.
            </Heading>
            <Box pt={10}>
              <a
                href={`mailto:amir@lingoblinks.com?subject=${message.subject}&body=${message.body}`}
              >
                <Flex alignItems={"center"}>
                  <Image src="/mail-icon.png" width={10} /> &nbsp;
                  <Text fontWeight={"bold"}>amir@lingoblinks.com</Text>
                </Flex>
              </a>
              <a href="https://www.lingoblinks.com/">
                <Flex alignItems={"center"} pt={8}>
                  <Image src="/web-icon.png" width={10} /> &nbsp;
                  <Text fontWeight={"bold"}>www.lingoblinks.com</Text>
                </Flex>
              </a>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
