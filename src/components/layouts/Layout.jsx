import React from "react"
import { Flex, Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({children}) => {
    return (
        <>
            <Flex direction="column" minHeight="100vh" mx="1rem"
            >
            <Navbar/>
            <Box flex="1" as="main">
                {children}
            </Box>
            <Footer/>
        </Flex>
        </>
    )
}

export default Layout;