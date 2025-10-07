import { Box, Flex, Image, Text, HStack } from "@chakra-ui/react"
import FFLogo from "../../assets/Form-Fun Logo.svg"

const Navbar = () => {
 return (
    <Box
      as="nav"
      w="100%"
      px={{ base: 4, md: 8 }}
      py="11px"
      height="2.875rem"
      bg="transparent"
    >
      <Flex
        align="center"
        justify="space-between"
        w="100%"
      >
        <Image
          src={FFLogo}
          alt="Logo"
          h="1.5rem"
          w="1.5rem"
          flexShrink={0}
        />

        <Text
          display={{ base: "none", md: "block" }}
          fontWeight="medium"
          color="gray.700"
        >
          Creative Technology Studios
        </Text>
        <HStack
          spacing={{ base: 4, md: 6 }}
          pl={{ base: 0, md: "12rem" }}
        >
          {["Studio", "Contact", "Work"].map((label) => (
            <Text
              key={label}
              as="a"
              href={`#${label.toLowerCase()}`}
              fontWeight="500"
              _hover={{
                textDecoration: "underline"
              }}
            >
              {label}
            </Text>
          ))}
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar