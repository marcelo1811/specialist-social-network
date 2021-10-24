import { Button } from "@chakra-ui/button";
import { Box, Text } from "@chakra-ui/layout";
import { auth } from "config/firebase";
import { DefaultLayout } from "layouts/DefaultLayout";

export default function HomePage() {
  const handleLogout = () => {
    auth.signOut();
  }

  return (
    <Box>
      <Text>HomePage</Text>
      <Text>Teste</Text>
      <Button onClick={handleLogout}>Sair</Button>
    </Box>
  )
}