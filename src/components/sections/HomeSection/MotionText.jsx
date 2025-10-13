import React, { useRef } from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";

const MotionSpan = motion.span;

   const MotionText =() => {
  const ref = useRef(null);

  const aboutText = [
    "We", "are", "a", "global", "creative", "tech", "studio", "forging", "delightful",
    "experiences", "by", "blending", "design,", "technology,", "and", "storytelling.", "Driven",
    "to", "create", "value", "for", "people", "and", "brands", "through",
    "through", "interaction"
  ];

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 98%", "end"], 
  });

  

  return (
    <Box
      ref={ref}
      w="100%"
      minH="100vh"
      display="flex"
      alignItems="center"
      textAlign="left"
      overflow="hidden"
    >
      <Text
        fontSize={{ base: "1.25rem", md: "3.52rem" }}
        fontWeight="400"
        lineHeight="3.52rem"
        mr="0.75rem"
      >
        <Text as="span" className="home-font-sm" mr={{base:"3rem", md:"15rem"}}>The studio</Text>
        {aboutText.map((word, index) => {
          const start = index / aboutText.length;
          const end = (index + 1) / aboutText.length;

          const opacity = useTransform(
            scrollYProgress,
            [start, end],
            [0.2, 1]
          );

          return (
            <MotionSpan
              key={index}
              style={{ opacity,}}
              transition={{ duration: 0.3 }}
            >
              {word + " "}
            </MotionSpan>
          );
        })}
        
      <Button 
      bgColor="black"
      color="white"
      borderRadius="full"
      display={{base:"block", md:"inline-block"}}
      w={{base:"100%", md:"6.25rem"}}
      h="2.5rem"
      px="1rem"
      ml="1rem">
        Learn more
        </Button>
      </Text>
    </Box>
  );
};

export default MotionText