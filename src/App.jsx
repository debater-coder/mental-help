import {IconButton, useColorMode} from "@chakra-ui/react";
import Hero from "./Hero";
import Websites from "./Websites";
import {FaLightbulb} from "react-icons/all";

function App() {
    return (
        <div className="App">
            <Hero/>
            <Websites/>
        </div>
    )
}

export default App
