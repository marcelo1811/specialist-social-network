import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Container, Heading, Text } from "@chakra-ui/layout";

function LoginPage() {
  return (
    <Box>
      <Container>
        <Heading>Página de login</Heading>
        <Box>
          <FormControl isRequired>
            <FormLabel>Nome</FormLabel>
            <Input placeholder='Nome' />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input placeholder='Email' />
          </FormControl>
          <Button
            mt={4}
            colorScheme="teal"
            type="submit"
          >
            Login
          </Button>
        </Box>
      </Container>  
    </Box>
  )
}

export default LoginPage;