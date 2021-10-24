import { Button } from "@chakra-ui/button";
import { Box, Text } from "@chakra-ui/layout";
import { auth } from "config/firebase";
import { DefaultLayout } from "layouts/DefaultLayout";

export function HomePage() {
  const handleLogout = () => {
    auth.signOut();
  }

  return (
    <DefaultLayout>
      <Box>
        <Text>HomePage</Text>
        <Text>Teste</Text>
        <Button onClick={handleLogout}>Sair</Button>
      </Box>
    </DefaultLayout>
  )
}