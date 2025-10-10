import React from "react"
// import Awards from "../components/shared/Awards";
// import Sidebar from "../components/shared/Sidebar";
import { Flex, Heading, Text, Box, Button, Grid } from "@chakra-ui/react";

const HomePage = () => {
    return (
        <Flex direction="column" bgColor="red" minHeight="100vh">
            <Heading
            as="header" bgColor="green" h="19rem"
            display="flex" alignItems="center" justifyContent="center">
                
                <Text as="h1" fontSize="6.5rem">
                    Form&Fun
                </Text>
            </Heading>

            {/* 100% Video Block */}

            <Flex
        bgColor="yellow"
        my="6rem"
        justifyContent="flex-start"
        alignItems="flex-start"
        marginRight="2.75rem"
        h="14rem"
      >
        <Box
          display="flex"
          alignItems="flex-start"
          flexWrap="wrap"
          lineHeight="1.4"
        >
          <Text
            as="span"
            className="home-font-lg"
            bgColor="pink"
            sx={{
              display: "inline",
              wordSpacing: "13px",
              background: "linear-gradient(to bottom, #007BFF, #34d235)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            <Text
            as="span"
            className="home-font-sm"
            bgColor="blue"
            mr="139px"
            whiteSpace="nowrap"
          >
            The studio
          </Text>
            We are a global creative tech studio forging delightful experiences
            by blending design, technology, and storytelling. Driven to create
            value for people and brands through interaction
            <Button className="home-font"
            bg="black"
            color="white"
            borderRadius="full"
            w="6.25rem"
            h="2.5rem"
            alignSelf="flex-start"
            ml="1rem"
          >
            Learn more
          </Button>
          </Text>
          
        </Box>
      </Flex>

      {/* GRID OF DESIGNS */}


        </Flex>
    )
}

export default HomePage;