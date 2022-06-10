import {chakra, Flex, Icon, useColorModeValue} from "@chakra-ui/react";

export default ({children, color, href, icon, title}) => {
    return (
        <a href={href} target={"_blank"}>
            <Flex
                direction={"column"}
                _hover={{bg: useColorModeValue("gray.200", "gray.500")}}
                p={2}
                rounded={10}
            >
                <Flex
                    alignItems="center"
                    justifyContent="center"
                    w={8}
                    h={8}
                    mb={4}
                    rounded="full"
                    color={useColorModeValue(`${color}.600`, `${color}.100`)}
                    bg={useColorModeValue(`${color}.100`, `${color}.600`)}
                >
                    <Icon
                        boxSize={5}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        margin={"auto"}
                    >
                        {icon}
                    </Icon>
                </Flex>
                <chakra.h3
                    mb={2}
                    fontWeight="semibold"
                    lineHeight="shorter"
                    color={useColorModeValue("gray.900")}
                >
                    {title}
                </chakra.h3>
                <chakra.p
                    fontSize="sm"
                    color={useColorModeValue("gray.500", "gray.400")}
                >
                    {children}
                </chakra.p>
            </Flex>
        </a>
    );
};