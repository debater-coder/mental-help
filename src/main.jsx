import {ChakraProvider, ColorModeScript} from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import App from "./App";
import React from "react"

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <ChakraProvider>
            <ColorModeScript/>
            <App/>
        </ChakraProvider>
    </React.StrictMode>,
)