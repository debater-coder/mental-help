import {ChakraProvider, ColorModeScript} from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import App from "./App";
import React from "react"
import { IconContext } from "react-icons";

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <ChakraProvider>
            <ColorModeScript/>
            <IconContext.Provider value={{ style: { margin: "auto" } }}>
                <App/>
            </IconContext.Provider>
        </ChakraProvider>
    </React.StrictMode>,
)