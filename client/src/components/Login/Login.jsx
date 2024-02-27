import React, { useState } from "react";
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Heading,
} from "@chakra-ui/react";

const LoginPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
      window.location.href = "/dashboard";
    }, 2000);
  };

  return (
    <Box
      bgGradient="linear(to bottom right, #4CAF50, #2196F3)"
      minH="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Container
        p={8}
        borderWidth={1}
        borderRadius="lg"
        boxShadow="lg"
        borderColor="white"
        textAlign="center"
        bg="white"
      >
        <Heading as="h1" size="xl" mb={4} color="gray.700">
          Admin Login
        </Heading>
        <form>
          <FormControl>
            <FormLabel color="gray.700">Email Address</FormLabel>
            <Input
              type="text"
              placeholder="Enter your email"
              value="admin@gmail.com"
              borderColor="gray.300"
              disabled
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel color="gray.700">Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              value="admin"
              borderColor="gray.300"
              disabled
            />
          </FormControl>
          <Button
            colorScheme="blue"
            mt={6}
            w="100%"
            onClick={handleLogin}
            _hover={{ bg: "blue.600" }}
          >
            Login
          </Button>
          {/* AlertDialog */}
          <AlertDialog isOpen={isOpen} leastDestructiveRef={undefined}>
            <AlertDialogOverlay>
              <AlertDialogContent bg="blue.800" color="white">
                <AlertDialogHeader>Welcome Admin !!!</AlertDialogHeader>
                <AlertDialogBody>
                  Redirecting to the dashboard page...
                </AlertDialogBody>
                <AlertDialogFooter>
                  <Button onClick={() => setIsOpen(false)}>Cancel</Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </form>
      </Container>
    </Box>
  );
};

export default LoginPage;
