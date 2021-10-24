import { Button } from "@chakra-ui/button";
import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Container, Heading, Text } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { Field, Form, Formik } from "formik";
import { useAuthState } from 'react-firebase-hooks/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "config/firebase";
import { useState } from "react";

enum FieldNames {
  Email = 'email',
  Name = 'name',
  Speciality = 'speciality',
  Password = 'password',
}

function SignUpPage() {
  const [user, loading, error] = useAuthState(auth);
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSubmit = async (values: any, actions: any) => {
    setIsLoading(true);
    try {
      const { email, password } = values;
      await createUserWithEmailAndPassword(auth, email, password)
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
        <Heading>Página de cadastro</Heading>
        <Box>
          <Formik
            initialValues={{}}
            onSubmit={handleSubmit}>
            {(props) => (
              <Form>
                <Field name={FieldNames.Name} validate={validatePresence}>
                  {({ field, form }: any) => (
                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                      <FormLabel htmlFor={FieldNames.Name}>Nome</FormLabel>
                      <Input {...field} placeholder='Nome' />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
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
                <Field name={FieldNames.Speciality} validate={validatePresence}>
                  {({ field, form }: any) => (
                    <FormControl isInvalid={form.errors.speciality && form.touched.speciality}>
                      <FormLabel htmlFor={FieldNames.Speciality}>Especialidade</FormLabel>
                      <Select {...field} placeholder='Selecione uma especialidade'>
                        <option value='tech'>Tecnologia</option>
                        <option value='marketing'>Marketing</option>
                      </Select>
                      <FormErrorMessage>{form.errors.speciality}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Button
                  mt={4}
                  colorScheme="teal"
                  type='submit'
                  isLoading={isLoading}
                >
                  Cadastrar
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Container>  
    </Box>
  )
}

export default SignUpPage;