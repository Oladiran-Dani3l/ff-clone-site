import { Box, HStack, Text, VStack, Flex } from "@chakra-ui/react";
import { motion, useAnimation, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const MotionHStack = motion(HStack);

const LogoCarousel = () => {
  const words = [
    "Form&Fun",
    "Creative Technology Studio",
  ];

  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const controls = useAnimation();
  const [width, setWidth] = useState(0);

  const tripledWords = [...words, ...words, ...words, ...words];

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
        {tripledWords.map((word, i) => (
  <Text
    key={i}
    whiteSpace="nowrap"
    mr="2.5rem"
    color="black"
    className={i % 2 !== 0 ? "home-font-sm" : "home-font-lg"}
  >
    {word}
  </Text>
))}
      </MotionHStack>
    </Box>
    </Box>
  );
};

export default LogoCarousel;