import React from "react";
import {Box, chakra, Flex, SimpleGrid, useColorModeValue,} from "@chakra-ui/react";
import {PhoneIcon} from "@chakra-ui/icons";
import {FaBrain, FaDog, FaLeaf, FaQuestion, FaTeeth, FaTeethOpen} from "react-icons/all";
import Feature from "./Feature";

function FaTeethOPen() {
    return null;
}

export default function Websites() {
    return (
        <Flex
            bg={useColorModeValue("#F9FAFB", "gray.600")}
            p={20}
            w="auto"
            justifyContent="center"
            alignItems="center"
            _after={{
                content: '""',
                borderTopLeftRadius: "100%",
                borderTopRightRadius: "100%",
                position: "absolute",
                bottom: 0,
                zIndex: -1,
                width: "100%",
                height: "75%",
                backgroundColor: useColorModeValue("#F9FAFB", "gray.600")
            }}
        >
            <Box
                px={8}
                py={20}
                mx="auto"
                bg={useColorModeValue("white", "gray.800")}
                shadow="xl"
                rounded={20}
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
                        color="gray"
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
                        title="R U OK"
                        href={"https://www.ruok.org.au/"}
                        icon={
                            <FaQuestion />
                        }
                    >
                        R U OK is a resource to help you help others suffering mental problems.
                    </Feature>

                    <Feature
                        color="blue"
                        title="Bite Back"
                        href={"https://www.biteback.org.au/"}
                        icon={
                            <FaTeethOpen />
                        }
                    >
                        Bite Back is a mental fitness challenge to help you improve your mental fitness, increase your happiness, reduce stress, improve your friendship and your focus.
                    </Feature>

                </SimpleGrid>
            </Box>
        </Flex>
    );
}