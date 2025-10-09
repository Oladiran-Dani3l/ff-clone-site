import React from "react"
import { Flex, Box, useDisclosure } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import Sidebar from "../shared/Sidebar";

const Layout = ({children}) => {
    // const {isOpen, onOpen, onClose} = useDisclosure();
    return (
        <>
            <Flex direction="column" minHeight="100vh" mx="1rem"
            >
            {/* <Navbar onOpenSidebar={onOpen}/> */}
            <Navbar/>
            <Box flex="1" as="main">
                {children}
            </Box>
            <Footer/>
            {/* <Sidebar isOpen={isOpen} onClose={onClose} /> */}
        </Flex>
        </>
    )
}

export default Layout;