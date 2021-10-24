import { Button } from "@chakra-ui/button";
import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Container, Heading, Text } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { Field, Form, Formik } from "formik";
import { useState } from "react";

enum FieldNames {
  Email = 'email',
  Name = 'name',
  Speciality = 'speciality',
}

function LoginPage() {
  // const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [speciality, setSpeciality] = useState<string>('');

  const handleChange = (e: any, field: string) => {
    const setFields: any = {
      // [FieldNames.Name]: (value: string) => setName(value),
      [FieldNames.Email]: (value: string) => setEmail(value),
      [FieldNames.Speciality]: (value: string) => setSpeciality(value),
    }

    setFields[field](e.target.value)
  }

  const handleLogin = () => {
    console.log({
      // name,
      email,
      speciality,
    })
  }

  const handleSubmit = (values: any, actions: any) => {
    console.log("🚀 ~ file: index.tsx ~ line 39 ~ handleSubmit ~ values", values)
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
                <Field name={FieldNames.Name}>
                  {({ field, form }: any) => (
                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                      <FormLabel htmlFor={FieldNames.Name}>Nome</FormLabel>
                      <Input {...field} placeholder='Nome' />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name={FieldNames.Email}>
                  {({ field, form }: any) => (
                    <FormControl isInvalid={form.errors.email && form.touched.email}>
                      <FormLabel htmlFor={FieldNames.Email}>Email</FormLabel>
                      <Input {...field} placeholder='Email' />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name={FieldNames.Speciality}>
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
                >
                  Login
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