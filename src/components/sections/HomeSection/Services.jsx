import React, { useRef, useState } from "react";
import {
  Flex,
  Text,
  Grid,
  Box,
  SimpleGrid,
  useBreakpointValue,
  HStack,
  Circle,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const experties = [
  {
    id: "cyan",
    color: "#97e5e9",
    bgColor: "#d5f2f6",
    video: "https://res.cloudinary.com/dm7vlpslq/video/upload/v1759642101/bhefcffg2eta2ry3k0f67vgol44t62chntda_hksyby.mp4",
    title: "Technology",
    capabilities: [
      "Spatial Computing (AR, VR, XR)",
      "AI Tools & Experiences",
      "Web Development",
      "WebGL Experiences",
      "Web3 / Blockchain",
      "Game Development",
      "Rapid Prototyping",
    ],
  },

  {
    id: "purple",
    color: "#d8aaeb",
    bgColor: "#fbefff",
    video: "https://res.cloudinary.com/dm7vlpslq/video/upload/f_auto,q_auto/v1759642090/bheeicecyrhzyi3dd26lfivkab97k907q706_qzzyps.mp4",
    title: "Design",
    capabilities: [
      "Creative Direction",
      "Art Direction",
      "User Experience Design",
      "User Interface Design",
      "Brand Identity",
      "Design Systems",
      "Concept Design",
    ],
  },

  {
    id: "green",
    color:"#a9d799",
    bgColor: "#e5f4e1",
    video: "https://res.cloudinary.com/dm7vlpslq/video/upload/v1759642090/bheeiceccip4dtalzn188e4w87papbecrhou_an9son.mp4",
    title: "Motion & CGI",
    capabilities: [
      "2D & 3D Animation",
      "2D & 3D Illustration",
      "Concept Art",
      "FOOH",
      "Character Design",
      "Motion Identity",
    ],
  },
];

const MotionBox = motion(Box);

const Services = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Flex direction="column" gap="1rem" w="100%">
      <Text className="home-font-sm">Expertise and Capabilities</Text>

      {/* Grid for desktop / horizontal scroll for mobile */}
      <Flex
        overflowX={isMobile ? "auto" : "visible"}
        overflowY="hidden"
        scrollSnapType={isMobile ? "x mandatory" : "none"}
        gap="0.75rem"
      >
        {experties.map((item, i) => {
          const videoRef = useRef(null);

          const handleMouseEnter = () => {
            if (videoRef.current) {
              videoRef.current.currentTime = 0;
              videoRef.current.play();
            }
          };

          const handleMouseLeave = () => {
            if (videoRef.current) {
              videoRef.current.pause();
              videoRef.current.currentTime = 0;
            }
          };

          return (
            <MotionBox
              key={item.id}
              h="35rem"
              w={{base:"21rem", md:"25.25rem"}}
              borderRadius="2xl"
              minW={isMobile ? "85%" : "auto"}
              scrollSnapAlign={isMobile ? "center" : "none"}
              whileHover={{backgroundColor: item.bgColor, padding: "1rem" }}
              transition={{duration: 0.1, ease:"easeIn"}}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Box
                position="relative"
                overflow="hidden"
                borderRadius="xl"
                mb="1rem"
              >
                <video
                  ref={videoRef}
                  src={item.video}
                  muted
                  loop
                  playsInline
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "inherit",
                  }}
                />
              </Box>

              <Text as="h2" fontSize="2.5rem" fontWeight="400" mb="0.75rem">
                {item.title}
              </Text>

              <SimpleGrid
                columns={{ base: 1, md: 2 }}
                // spacingY="0.5rem"
                // spacingX="1rem"
              >
                {item.capabilities.map((cap) => (
                  <Text key={cap} className="home-font-sm">
                    {cap}
                  </Text>
                ))}
              </SimpleGrid>
            </MotionBox>
          );
        })}
      </Flex>

      {/* Dot Indicators for mobile carousel */}
      {isMobile && (
        <HStack justify="center" mt="1rem">
          {experties.map((_, i) => (
            <Circle
              key={i}
              size="0.5rem"
              bg={i === activeIndex ? "black" : "gray.300"}
            />
          ))}
        </HStack>
      )}
    </Flex>
  );
};

export default Services;