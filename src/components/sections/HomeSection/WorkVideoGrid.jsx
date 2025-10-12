import { Flex, Box, Button, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { FaPlus } from "react-icons/fa";

const MotionBox = motion(Box);

const WorkVideoGrid = () => {
  const videos = [
    {
      title: "Oreo x Pacman",
      description: "AR Experience",
      src: "https://res.cloudinary.com/dm7vlpslq/video/upload/v1759642096/bheeicdi21w0hkxyqiby6vxovghp64qh2wan_qwmt7l.mp4",
    },
    {
      title: "Doordash Summer of dashpass",
      description: "Campaign",
      src: "https://res.cloudinary.com/dm7vlpslq/video/upload/v1759642676/YThAIwoXKB_576p_1744824072_ccmg6f.mp4",
    },
    {
      title: "Windllet",
      description: "Coming Soon",
      src: "https://res.cloudinary.com/dm7vlpslq/video/upload/v1759642080/bheeicea8cwvkf21vcnbg8jhx3wo0wyb42im_q9yvuz.mp4",
    },
    {
      title: "Powerade Mindzone",
      description: "VR Experience",
      src: "https://res.cloudinary.com/dm7vlpslq/video/upload/v1759642089/bheeicea3wowr2ifyqckn5737cnu42mewpr1_a8wqzo.mp4",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Flex direction="column" gap="0.75rem" w="100%">
    
      <Flex w="100%" gap="0.75rem" direction={{base:"column", md:"row"}}>
    
        <VideoCard
          video={videos[0]}
          isHovered={hoveredIndex === 0}
          onHoverStart={() => setHoveredIndex(0)}
          onHoverEnd={() => setHoveredIndex(null)}
          flexValue={{base:"1", md:"39"}}
        />

        <VideoCard
          video={videos[1]}
          isHovered={hoveredIndex === 1}
          onHoverStart={() => setHoveredIndex(1)}
          onHoverEnd={() => setHoveredIndex(null)}
          flexValue={{base:"1", md:"20"}}
        />
      </Flex>

      <Flex w="100%" gap="0.75rem"  direction={{base:"column", md:"row"}}>
    
        <VideoCard
          video={videos[2]}
          isHovered={hoveredIndex === 2}
          onHoverStart={() => setHoveredIndex(2)}
          onHoverEnd={() => setHoveredIndex(null)}
          flexValue={{base:"1", md:"20"}}
        />
        
        <VideoCard
          video={videos[3]}
          isHovered={hoveredIndex === 3}
          onHoverStart={() => setHoveredIndex(3)}
          onHoverEnd={() => setHoveredIndex(null)}
          flexValue={{base:"1", md:"39"}}
        />
      </Flex>
    </Flex>
  );
};



const VideoCard = ({ video, flexValue, isHovered, onHoverStart, onHoverEnd }) => {
      const videoRef = useRef(null);

  const handleMouseEnter = () => {
    onHoverStart();
    if (videoRef.current) videoRef.current.play();
  };

  const handleMouseLeave = () => {
    onHoverEnd();
    if (videoRef.current) videoRef.current.pause();
  };

  return (
    <Box flex={flexValue} h="33.625rem" position="relative" 
    overflow="hidden" borderRadius="md"
    onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
    cursor="pointer">

      <video
        ref={videoRef}
        src={video.src}
        loop
        muted
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />

      <MotionBox
        position={{base:"relative", md:"absolute"}}
        inset="0"
        bg={{ base:"white", md:"rgba(0,0,0,0.45)"}}
        color={{ base:"black", md:"white"}}
        display="flex"
        justifyContent={{ base:"", md:"space-between"}}
        flexDirection={{ base:"column", md:"row"}}        
        alignItems="flex-start"
        p={2}
        opacity={{ base: 1, md: isHovered ? 1 : 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition="0.3s ease"
        onMouseEnter={onHoverStart}
        onMouseLeave={onHoverEnd}
        >
            <Text className="home-font-sm">{video.title}</Text>
            <Text className="home-font-sm">{video.description}</Text>

            <Box display={{ base: "none", md: "block" }}>
                <FaPlus />
            </Box>
      </MotionBox>
    </Box>
  );
};

export default WorkVideoGrid;
