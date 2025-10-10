import { Box, HStack, Text, VStack, Flex } from "@chakra-ui/react";
import { motion, useAnimation, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const MotionHStack = motion(HStack);

const WorkCarousel = () => {
  const words = [
    "BRAND",
    "DIGITAL", 
    "EXPERIENTIAL",
    "MOTION",
    "SPATIAL",
    "VR",
    "GEN-AI",
    "AR",
    "GAMING",
    "VIRTUAL-FASHION",
    "IMMERSIVE",
  ];

  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const controls = useAnimation();
  const [width, setWidth] = useState(0);

  const doubledWords = [...words, ...words];

  useEffect(() => {
    const totalWidth = containerRef.current.scrollWidth / 2;
    setWidth(totalWidth);


    const controls = animate(x, -totalWidth, {
      duration: 25,
      ease: "linear",
      repeat: Infinity,
    });

    return controls.stop;
  }, [x]);


  const handleDragEnd = () => {
    const totalWidth = containerRef.current.scrollWidth / 2;
    animate(x, -totalWidth, {
      duration: 25,
      ease: "linear",
      repeat: Infinity,
    });
  };

  return (
    <Box className="work-font">
        <Flex justifyContent="space-between" alignItems="flex-start">
            <Text>WORK</Text>
            <Box className="home-font-sm" lineHeight="1rem">
                <Text>Selected Work</Text>
                <Text textAlign="end" color={"#1D1D1D4D"}>(22-5)</Text>
            </Box>
        </Flex>

    <Box
      overflow="hidden"
      w="100%"
      py={4}
      cursor="grab"
      onMouseDown={() => controls.stop()}
    >
      <MotionHStack
        ref={containerRef}
        spacing={8}
        drag="x"
        dragConstraints={{ left: -width, right: 0 }}
        style={{ x }}
        onDragEnd={handleDragEnd}
      >
        {doubledWords.map((word, i) => (
          <Text
            key={i}
            whiteSpace="nowrap"
            mr={'2.5rem'}
            color={"#1D1D1D4D"}
          >
            {word}
          </Text>
        ))}
      </MotionHStack>
    </Box>
    </Box>
  );
};

export default WorkCarousel;