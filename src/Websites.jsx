import React from "react";
import {Box, chakra, Flex, SimpleGrid, useColorModeValue,} from "@chakra-ui/react";
import {PhoneIcon} from "@chakra-ui/icons";
import {FaBrain, FaDog, FaLeaf} from "react-icons/all";
import Feature from "./Feature";

export default function Websites() {
    return (
        <Flex
            bg={useColorModeValue("#F9FAFB", "gray.600")}
            p={20}
            w="auto"
            justifyContent="center"
            alignItems="center"
        >
            <Box
                px={8}
                py={20}
                mx="auto"
                bg={useColorModeValue("white", "gray.800")}
                shadow="xl"
            >
                <Box textAlign={{lg: "center"}}>
                    <chakra.p
                        mt={2}
                        fontSize={{base: "3xl", sm: "4xl"}}
                        lineHeight="8"
                        fontWeight="extrabold"
                        letterSpacing="tight"
                        color={useColorModeValue("gray.900")}
                    >
                        Websites
                    </chakra.p>
                    <chakra.p
                        mt={4}
                        maxW="2xl"
                        fontSize="xl"
                        mx={{lg: "auto"}}
                        color={useColorModeValue("gray.500", "gray.400")}
                    >
                        These websites will help you improve your mental health
                    </chakra.p>
                </Box>
                <SimpleGrid
                    columns={{base: 1, sm: 2, md: 3, lg: 4}}
                    spacingX={{base: 16, lg: 24}}
                    spacingY={20}
                    mt={6}
                >
                    <Feature
                        color="red"
                        title="Kids Helpline"
                        href={"https://kidshelpline.com.au/"}
                        icon={
                            <PhoneIcon/>
                        }
                    >
                        Kids Helpline is one of the most trusted children mental health websites.
                    </Feature>

                    <Feature
                        color="green"
                        title="Better Help"
                        href={"https://www.betterhelp.com/"}
                        icon={
                            <FaLeaf/>
                        }
                    >
                        Better Help is one of the leading mental heath websites which is easily accessible.
                    </Feature>

                    <Feature
                        color="yellow"
                        title="Black Dog Institute"
                        href={"https://www.blackdoginstitute.org.au/"}
                        icon={
                            <FaDog/>
                        }
                    >
                        Black Dog Institute is an excellent resource for helping you fix your mental help problems.
                    </Feature>

                    <Feature
                        color="orange"
                        title="Headspace"
                        href={"https://www.headspace.com/"}
                        icon={
                            <FaBrain/>
                        }
                    >
                        Headspace is the perfect app to help you 'be kind to your mind'.
                    </Feature>

                    <Feature
                        color="yellow"
                        title="RUOK"
                        href={"https://www.ruok.org.au/"}
                        icon={
                            <path
                                fillRule="evenodd"
                                d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                                clipRule="evenodd"
                            />
                        }
                    >
                        RUOK is pretty good.
                    </Feature>

                    <Feature
                        color="yellow"
                        title="Bite Back"
                        href={"https://www.biteback.org.au/"}
                        icon={
                            <path
                                fillRule="evenodd"
                                d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                                clipRule="evenodd"
                            />
                        }
                    >
                        Biteback is pretty good.
                    </Feature>

                </SimpleGrid>
            </Box>
        </Flex>
    );
}