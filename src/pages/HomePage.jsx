import React from "react"
// import Awards from "../components/shared/Awards";
import Sidebar from "../components/shared/Sidebar";
import { Flex } from "@chakra-ui/react";

const HomePage = () => {
    return (
        <Flex justifyContent="flex-end" bgColor="red" minHeight="100vh">
            <Sidebar/>
        </Flex>
    )
}

export default HomePage;