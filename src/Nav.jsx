import {Flex, Heading, IconButton, Spacer} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import {FaLightbulb} from "react-icons/all";

export default () => {
    const { toggleColorMode }  = useColorMode()
    return <Flex
        minWidth='max-content'
        alignItems='center'
        gap='2'
        p={2}
    >
        <Heading size={"md"}>PsychoX</Heading>
        <Spacer />
        <IconButton
            aria-label={"Toggle dark mode"}
            icon={<FaLightbulb/>}
            onClick={toggleColorMode}
        />
    </Flex>;
}