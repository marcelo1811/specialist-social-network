import { Button } from "@chakra-ui/button";
import { FormControl, FormHelperText, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Container, Heading, Text } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { Textarea } from "@chakra-ui/textarea";
import BaseFormControl from "components/BaseFormControl";
import { DefaultLayout } from "layouts/DefaultLayout";

function NewPostPage() {
  return (
    <Container>
      <Heading>Criar novo post</Heading>
      <BaseFormControl label='Conteúdo'>
        <Textarea placeholder="Compartilhe o que você está pensando" />
      </BaseFormControl>

      <BaseFormControl label='Assunto'>
        <Select placeholder="Selecione um assunto">
          <option>Tecnologia</option>
          <option>Marketing</option>
        </Select>
      </BaseFormControl>

      <Button colorScheme='teal'>
        Criar post
      </Button>
    </Container>

  )
}

export default NewPostPage;