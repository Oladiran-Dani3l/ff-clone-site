import { Box, Flex, HStack } from "@chakra-ui/react";
import { motion, useMotionValue } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const MotionFlex = motion(Flex);

const ClickDragCarousel = () => {
  const carouselRef = useRef();
  const [width, setWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const x = useMotionValue(0);

  const videos = [
    "https://res.cloudinary.com/dm7vlpslq/video/upload/v1759642111/bheeicedy3ihyzyn31iuum3m4cldsk8dqlxe_wh4lip.mp4",
    "https://res.cloudinary.com/dm7vlpslq/video/upload/v1759642078/bheeicedz8a5tcbo6sr84repcz7zjtyfocua_zaf61j.mp4",
    "https://res.cloudinary.com/dm7vlpslq/video/upload/v1759639587/ILLpcsHOAB_576p_1744824343_vu4fee.mp4",
    "https://res.cloudinary.com/dxy9wpoyc/video/upload/v1759690107/about4_lpq6rx.mp4",
    "https://res.cloudinary.com/dm7vlpslq/video/upload/v1759639587/GWazvydWJs_576p_1744824344_wyftge.mp4",
    "https://res.cloudinary.com/dm7vlpslq/video/upload/v1759639607/LCVDnqXAon_576p_1751149542_a65jqv.mp4",
  ];

  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);

  useEffect(() => {
    const unsubscribe = x.onChange((latest) => {
      const containerWidth = carouselRef.current.offsetWidth;
      const visibleCount = window.innerWidth < 768 ? 1.25 : 3.5;
      const cardWidth = containerWidth / visibleCount;
      const index = Math.round(-latest / cardWidth);
      if (index >= 0 && index < videos.length) setActiveIndex(index);
    });
    return () => unsubscribe();
  }, [x, videos.length]);

  return (
    <Box overflow="hidden" width="100%" maxW="100vw" px={0} py={6}>
      <MotionFlex
        ref={carouselRef}
        cursor="grab"
        whileTap={{ cursor: "grabbing" }}
        drag="x"
        style={{ x }}
        dragConstraints={{ right: 0, left: -width }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {videos.map((src, index) => (
          <Box
            key={index}
            flex={{
              base: "0 0 calc(100% / 1.25)",
              md: "0 0 calc(100% / 3.5)",
            }}
            paddingRight="0.75rem"
          >
            <Box
              as="video"
              src={src}
              autoPlay
              muted
              loop
              playsInline
              objectFit="cover"
              w="100%"
              h="24.75rem"
              borderRadius="xl"
              boxShadow="md"
            />
          </Box>
        ))}
      </MotionFlex>

      <HStack
        justify="center"
        spacing={2}
        mt={4}
        display={{ base: "flex", md: "none" }}
      >
        {videos.map((_, i) => (
          <Box
            key={i}
            w="0.65rem"
            h="0.65rem"
            borderRadius="full"
            bg={i === activeIndex ? "black" : "gray.300"}
            transition="background 0.3s ease"
          />
        ))}
      </HStack>
    </Box>
  );
};

export default ClickDragCarousel;