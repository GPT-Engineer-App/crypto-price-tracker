// Complete the Index page component here
// Use chakra-ui
import { Box, Container, Flex, Heading, Text, VStack, Image, Link, Spacer, Button } from "@chakra-ui/react";
import { FaBitcoin, FaEthereum, FaInfoCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      <Flex as="nav" bg="gray.800" color="white" p={4} align="center">
        <FaBitcoin size="2em" />
        <Heading as="h1" size="lg" ml={3}>
          CryptoDash
        </Heading>
        <Spacer />
        <Link px={3} href="#about">
          About
        </Link>
        <Link px={3} href="#features">
          Features
        </Link>
        <Link px={3} href="#contact">
          Contact
        </Link>
      </Flex>

      <Container maxW="container.xl" pt={10}>
        <VStack spacing={5}>
          <Heading as="h2" size="xl">
            Real-Time Crypto Prices
          </Heading>
          <Text fontSize="lg">Check the latest price updates for the top 100 cryptocurrencies.</Text>
          <Button colorScheme="orange" leftIcon={<FaInfoCircle />}>
            Learn More
          </Button>
        </VStack>
      </Container>

      <Container maxW="container.xl" py={10} id="about">
        <Flex direction={{ base: "column", md: "row" }} align="center">
          <Box flex="1">
            <Heading as="h3" size="lg">
              About CryptoDash
            </Heading>
            <Text mt={4}>CryptoDash is your one-stop hub for all things crypto. Track prices, watch trends, and stay ahead in the cryptocurrency market.</Text>
          </Box>
          <Box flex="1" mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
            <Image src="https://images.unsplash.com/photo-1639754390580-2e7437267698?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjcnlwdG9jdXJyZW5jeSUyMGNoYXJ0c3xlbnwwfHx8fDE3MTQzNzI1Mzd8MA&ixlib=rb-4.0.3&q=80&w=1080" />
          </Box>
        </Flex>
      </Container>

      <Container maxW="container.xl" py={10} id="features">
        <Heading as="h3" size="lg" mb={5}>
          Features
        </Heading>
        <Flex direction={{ base: "column", md: "row" }} gap={10}>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <Heading as="h4" size="md">
              Live Updates
            </Heading>
            <Text mt={2}>Get real-time updates on cryptocurrency prices and market changes.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <Heading as="h4" size="md">
              Extensive Database
            </Heading>
            <Text mt={2}>Access data on over 100 cryptocurrencies.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <Heading as="h4" size="md">
              User-Friendly Interface
            </Heading>
            <Text mt={2}>Our platform is designed for ease of use, regardless of your experience level with cryptocurrency.</Text>
          </Box>
        </Flex>
      </Container>

      <Container maxW="container.xl" py={10} id="contact">
        <VStack spacing={3}>
          <Heading as="h3" size="lg">
            Contact Us
          </Heading>
          <Text>If you have any questions, please feel free to reach out to us.</Text>
          <Button colorScheme="blue">Send a Message</Button>
        </VStack>
      </Container>

      <Flex as="footer" bg="gray.700" color="white" p={4} justify="center">
        <Text>&copy; {new Date().getFullYear()} CryptoDash. All rights reserved.</Text>
      </Flex>
    </Box>
  );
};

export default Index;
