import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import { awards } from "../../data/awards";


const Awards = () => {
  return (
    // SCROLLBAR TO BE IMPLEMENTED HERE FOR MOBILE MODE
    <Flex w="100%" direction={{ base: "row", md: "column" }}>
      {awards.map((award) => (
        <Flex
          key={award.id}
          className="award"
          direction={{ base: "column", md: "row" }}
          py="1rem"
          borderBottom="1px solid"
          borderColor="gray.200"
        >
          <Box className="award-num" w="7.625rem">
            <Text>{String(award.id).padStart(2, "0")}</Text>
          </Box>

          <Box className="award-title">
            <Text>{award.title}</Text>
          </Box>

          <Box className="award-project">
            <Text className="awards-grey">Project</Text>
            <Text>{award.project}</Text>
          </Box>

          <Box className="award-project">
            <Text className="awards-grey">Category</Text>
            {award.category.map((cat, index) => (
              <Text key={index}>{cat}</Text>
            ))}
          </Box>

          <Box className="award-year" w="4.625rem">
            <Text className="awards-grey">Year</Text>
            <Text>{award.year}</Text>
          </Box>
        </Flex>
      ))}
    </Flex>
  );
};

export default Awards;