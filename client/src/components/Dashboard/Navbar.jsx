import React from "react";
import {
  Box,
  Flex,
  Container,
  Input,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorMode,
  useToast,
} from "@chakra-ui/react";
import { ChevronDownIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const toast = useToast();

  const handleLogout = () => {
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });

    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  };

  return (
    <Box
      py={4}
      bgGradient="linear(to-b, #F59E0B, #D97706)"
      position="sticky"
      top={0}
      zIndex={100}
      boxShadow="lg"
    >
      <Container maxW="container.lg">
        <Flex justify="space-between" align="center">
          <Box w="60%">
            <Input
              type="text"
              placeholder="Search..."
              size="md"
              borderRadius="2xl"
              bg={colorMode === "light" ? "white" : "#FDE68A"}
              px={4}
              py={2}
              color={colorMode === "light" ? "gray.800" : "black"}
              _placeholder={{
                color: colorMode === "light" ? "gray.500" : "gray.300",
              }}
              _focus={{ outline: "none", border: "2px solid #F59E0B" }}
            />
          </Box>
          <Flex align="center">
            <IconButton
              aria-label="Toggle Theme"
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              bg="transparent"
              border="none"
              onClick={toggleColorMode}
              mr={4}
            />
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<ChevronDownIcon boxSize={6} />}
                variant="unstyled"
              />
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
