import React from "react";
import {
    Alert,
    AlertIcon,
    AlertTitle,
    Box, Button,
    chakra,
    Heading,
    Image, Spacer,
    Stack,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import {CopyIcon} from "@chakra-ui/icons";

const Hero = () => {
    const copy = text => () => navigator.clipboard.writeText(text)

    return (
        <Box px={8} py={24} mx="auto">
            <Box
                w={{base: "full", md: 11 / 12, xl: 9 / 12}}
                mx="auto"
                textAlign={{base: "left", md: "center"}}
            >
                <chakra.h1
                    mb={6}
                    fontSize={{base: "4xl", md: "6xl"}}
                    fontWeight="bold"
                    lineHeight="none"
                    letterSpacing={{base: "normal", md: "tight"}}
                    color={useColorModeValue("gray.900", "gray.100")}
                >
                    All your{" "}
                    <Text
                        display={{base: "block", lg: "inline"}}
                        w="full"
                        bgClip="text"
                        bgGradient="linear(to-r, green.400,purple.500)"
                        fontWeight="extrabold"
                    >
                        mental health needs
                    </Text>{" "}
                    in one single place.
                </chakra.h1>
                <chakra.p
                    px={{base: 0, lg: 24}}
                    mb={6}
                    fontSize={{base: "lg", md: "xl"}}
                    color={useColorModeValue("gray.600", "gray.300")}
                >
                    PsychoX mental help directory is a place to find all your favourite mental health services.
                </chakra.p>
                <Alert status={'error'} rounded={8} maxWidth={"fit-content"} ml={"auto"} mr={"auto"}>
                    <AlertIcon />
                    <AlertTitle>If life is in danger call 000.</AlertTitle>
                </Alert>
                <Stack direction={"row"} mt={5}>
                    <Spacer />
                    <Button onClick={copy("13 11 14")} leftIcon={<CopyIcon />}>Copy Lifeline Phone Number</Button>
                    <Button onClick={copy("1800 55 1800")} leftIcon={<CopyIcon />}>Copy Kids Helpline Phone Number</Button>
                    <Spacer />
                </Stack>
            </Box>
            <Box
                w={{base: "full", md: 10 / 12}}
                mx="auto"
                mt={10}
                textAlign="center"
            >
                <Image
                    w="full"
                    rounded="lg"
                    shadow="2xl"
                    src="https://www.drbenspencer.org.uk/sites/www.drbenspencer.org.uk/files/2020-11/mental-health.jpg"
                    alt="Mental Health"
                />
            </Box>
        </Box>
    );
};

export default Hero;