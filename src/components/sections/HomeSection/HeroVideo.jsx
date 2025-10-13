import React from "react";
import { Flex, Box } from "@chakra-ui/react";


const HeroVideo = () => {
  return (
    <Flex w="100%" h={{base:"13rem", md:"38.75rem"}}>
        <Box
        as="video"
        src="https://res.cloudinary.com/dxy9wpoyc/video/upload/v1759689886/hero-video_ykvezb.mp4"
        autoPlay
        muted
        loop
        playsInline
        objectFit="cover"
        w="100%"
        h="100%"
        borderRadius="xl"
        boxShadow="md"
        />
    </Flex>
  )
}

export default HeroVideo;


