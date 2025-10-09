import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react"
import FFLogo from "../../assets/Form-Fun Logo.svg"

const Footer = () => {
    return (
        <Flex height="7.875rem"justifyContent="flex-start" gap="38.125rem" mb="9.625rem">
            <Box>
                <Image src={FFLogo}
                height="2.5rem"
                width="2.5rem"></Image>
            </Box>
            <Flex gap="7px" justifyContent="space-between">

                <Flex direction="column" gap="10px" width="7.25rem">
                    <Text className="footer-grey">Menu</Text>
                    <Text as="a" className="link">Studio</Text>
                    <Text as="a" className="link">Contact</Text>
                    <Text as="a" className="link">Work</Text>
                </Flex>
                <Flex direction="column" gap="10px" width="7.25rem">
                    <Text className="footer-grey">Social</Text>
                    <Text as="a" className="link">Instagram</Text>
                    <Text as="a" className="link">LinkedIn</Text>
                    <Text as="a" className="link">Behance</Text>
                </Flex>

                
                <Flex direction="column" gap="1.875rem">

                    <Box>
                        <Text marginBottom="10px" className="footer-grey">Business enquiries</Text>
                        <Text as="a" className="link">hi@formandfun.co</Text>
                    </Box>
                    <Box>
                        <Text marginBottom="10px" className="footer-grey">Join our team</Text>
                        <Text as="a" className="link">apply@formandfun.co</Text>
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Footer;