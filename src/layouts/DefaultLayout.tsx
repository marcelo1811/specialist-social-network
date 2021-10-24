import { Box, Text } from "@chakra-ui/layout";
import Navbar from "components/Navbar";
import { auth } from "config/firebase";
import { ReactNode } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

interface IDefaultLayoutProps {
  children: ReactNode;
};

export function DefaultLayout({ children }: IDefaultLayoutProps) {
  const [user, loading, error] = useAuthState(auth);
  
  return (
    <Box>
      <Navbar user={user} />
      {children}
    </Box>
  )
}