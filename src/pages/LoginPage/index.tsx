import { Button } from "@chakra-ui/button";
import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Container, Heading, Text } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { Field, Form, Formik } from "formik";
import { useAuthState } from 'react-firebase-hooks/auth';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "config/firebase";
import { useState } from "react";
import { routes } from "constants/routes";
import { useHistory } from "react-router";

enum FieldNames {
  Email = 'email',
  Password = 'password',
}

function LoginPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const history = useHistory();

  const handleSubmit = async (values: any, actions: any) => {
    setIsLoading(true);
    try {
      const { email, password } = values;
      await signInWithEmailAndPassword(auth, email, password)
    } catch (err) {
      console.log("🚀 ~ file: index.tsx ~ line 25 ~ handleSubmit ~ err", err)
    } finally {
      setIsLoading(false);
    }
  }

  const validatePresence = (value: string) => {
    if (!value) {
      return 'Campo obrigatório'
    }
  }

  return (
    <Box>
      <Container>
        <Heading>Página de login</Heading>
        <Box>
          <Formik
            initialValues={{}}
            onSubmit={handleSubmit}>
            {(props) => (
              <Form>
                <Field name={FieldNames.Email} validate={validatePresence}>
                  {({ field, form }: any) => (
                    <FormControl isInvalid={form.errors.email && form.touched.email}>
                      <FormLabel htmlFor={FieldNames.Email}>Email</FormLabel>
                      <Input {...field} placeholder='Email' />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name={FieldNames.Password} validate={validatePresence}>
                  {({ field, form }: any) => (
                    <FormControl isInvalid={form.errors.password && form.touched.password}>
                      <FormLabel htmlFor={FieldNames.Password}>Senha</FormLabel>
                      <Input {...field} placeholder='Senha' type='password' />
                      <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Button
                  mt={4}
                  colorScheme="teal"
                  type='submit'
                  isLoading={isLoading}
                >
                  Entrar
                </Button>
                <Button
                  mt={4}
                  colorScheme="teal"
                  type='submit'
                  variant='outline'
                  ml={4}
                  onClick={() => history.push(routes.signup)}
                >
                  Criar conta
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Container>  
    </Box>
  )
}

export default LoginPage;