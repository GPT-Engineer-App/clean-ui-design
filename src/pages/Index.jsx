import { Box, Button, Container, Flex, Grid, Heading, Icon, IconButton, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaBell, FaMoon, FaSignInAlt, FaUserPlus, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex bg="white" color="black" p={4} justifyContent="space-between" alignItems="center">
        <Stack direction="row" spacing={8} fontWeight="bold">
          <Link>Home</Link>
          <Link>My Bookings</Link>
          <Link>Dashboard</Link>
          <Link>Help</Link>
        </Stack>
        <Stack direction="row" spacing={4} alignItems="center">
          <IconButton icon={<FaBell />} aria-label="Notifications" variant="ghost" />
          <IconButton icon={<FaMoon />} aria-label="Dark mode" variant="ghost" />
          <IconButton icon={<FaSignInAlt />} aria-label="Login" variant="ghost" />
          <Button colorScheme="blue" leftIcon={<FaUserPlus />}>
            Sign Up
          </Button>
        </Stack>
      </Flex>
      <VStack spacing={10} py={10} alignItems="center">
        <Heading>Timely Health Consultations</Heading>
        <Text color="gray.600">Ensure your health by booking with the best professionals in a timely manner.</Text>
        <Box border="2px" borderColor="gray.200" borderRadius="full" w="33%" p={8} textAlign="center">
          <Text fontSize="5xl" color="green.400">
            87
          </Text>
          <Text>Optimal Booking Rate</Text>
        </Box>
      </VStack>
      <Grid templateColumns="repeat(3, 1fr)" gap={6} p={6}>
        <Box p={4} border="1px" borderColor="gray.200" borderRadius="lg">
          <Flex>
            <Image src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjB1cGRhdGV8ZW58MHx8fHwxNzE1Mjg4MzgzfDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
            <Text ml={4}>Stay updated with the latest health practices and protocols.</Text>
          </Flex>
        </Box>
        <Box p={4} border="1px" borderColor="gray.200" borderRadius="lg">
          <VStack align="start">
            <Text fontWeight="bold">Trending Professionals</Text>
            <Link color="green.400">Dr. Jane Doe - Increased bookings</Link>
            <Link color="red.400">Dr. John Smith - Urgent availability</Link>
            <Link>Dr. Alice Johnson - Stable</Link>
          </VStack>
        </Box>
        <Box p={4} border="1px" borderColor="gray.200" borderRadius="lg">
          <Flex>
            <Image src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzeXN0ZW0lMjB0aXBzfGVufDB8fHx8MTcxNTI4ODM4M3ww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
            <Text ml={4}>Learn how to optimize your use of our booking system.</Text>
          </Flex>
        </Box>
      </Grid>
      <Flex justifyContent="space-between" p={4} bg="gray.100">
        <Stack>
          <Text color="gray.600">© 2023 HealthBooking Inc.</Text>
        </Stack>
        <Stack direction="row" spacing={4}>
          <Icon as={FaFacebook} w={5} h={5} />
          <Icon as={FaTwitter} w={5} h={5} />
          <Icon as={FaInstagram} w={5} h={5} />
        </Stack>
      </Flex>
    </Container>
  );
};

export default Index;
