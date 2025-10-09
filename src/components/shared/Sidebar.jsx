


// import React from "react";
// import {
//   Button,
//   Drawer,
//   DrawerBody,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   CloseButton,
//   useDisclosure,
//   Box,
//   Text,
// } from "@chakra-ui/react";

// const Sidebar = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
//     <>
//       <Button colorScheme="teal" onClick={onOpen}>
//         Open Bottom Sheet
//       </Button>

//       <Drawer
//         isOpen={isOpen}
//         placement="bottom"
//         onClose={onClose}
//         trapFocus={false} // optional - avoids scroll lock issues
//       >
//         <DrawerOverlay />

//         <DrawerContent
//           h="40vh" // <— height of the “resting” position
//           borderTopRadius="2xl"
//           boxShadow="0 -5px 20px rgba(0,0,0,0.2)"
//           animation="slideUp 0.3s ease"
//         >
//           <Drawer.CloseTrigger asChild>
//                 <CloseButton size="sm" />
//             </Drawer.CloseTrigger>
//           <DrawerHeader textAlign="center">
//             Bottom Sheet
//           </DrawerHeader>

//           <DrawerBody>
//             <Box textAlign="center">
//               <Text>
//                 This drawer slides up from the bottom and rests partway.
//               </Text>
//             </Box>
//           </DrawerBody>
//         </DrawerContent>
//       </Drawer>
//     </>
//   );
// };

import {
  Drawer,
  Portal,
  Button,
  CloseButton,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";

const Sidebar = () => {
  const placement = "bottom";

  return (
    <Flex justify="flex-end" w="100%">
      <Drawer.Root placement={placement}>
        <Drawer.Trigger asChild>
          <Button variant="outline" size="sm">
            Open Drawer
          </Button>
        </Drawer.Trigger>

     {/* <Portal> */}
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Flex justify="flex-end" w="100%" mx="1rem">
              <Drawer.Content
                h="calc(100vh - 0.75rem)"
                w={{ base: "100%", md: "27.125rem" }}
                bg="white"
                border="none"
                borderTopRadius="2xl"
                boxShadow="-6px -6px 25px rgba(0,0,0,0.15)"
              >
                {/* <Drawer.Header>Right-Aligned Drawer</Drawer.Header>
                <Drawer.Body>
                  <Text>
                    This bottom drawer slides up and sits at the right edge.
                  </Text>
                </Drawer.Body>

                <Drawer.Footer justifyContent="center" gap={3}>
                  <Drawer.ActionTrigger asChild>
                    <Button variant="outline">Cancel</Button>
                  </Drawer.ActionTrigger>
                  <Button colorScheme="teal">Save</Button>
                </Drawer.Footer> */}

                <Drawer.CloseTrigger asChild>
                  <CloseButton position="absolute" top={3} right={3} />
                </Drawer.CloseTrigger>
              </Drawer.Content>
            </Flex>
          </Drawer.Positioner>
        {/* </Portal> */}
      </Drawer.Root>
    </Flex>
  );
};

export default Sidebar;








// const Sidebar = () => {
//   const placement = "bottom";

//   return (
//     <Drawer.Root placement={placement}>
//       <Drawer.Trigger asChild>
//         <Button variant="outline" size="sm">
//           Open Bottom Drawer
//         </Button>
//       </Drawer.Trigger>

//       <Portal>
//         {/* <Drawer.Backdrop /> */}
//         <Drawer.Positioner>
//           <Flex></Flex>
//         </Drawer.Positioner>
//       </Portal>
//     </Drawer.Root>
//   );
// }

// export default Sidebar;