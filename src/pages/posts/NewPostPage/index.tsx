import { Button } from "@chakra-ui/button";
import { FormControl, FormHelperText, FormLabel } from "@chakra-ui/form-control";
import { Image } from "@chakra-ui/image";
import { Input } from "@chakra-ui/input";
import { Box, Container, Heading, Text } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { Textarea } from "@chakra-ui/textarea";
import BaseFormControl from "components/BaseFormControl";
import { ImagePreviewer } from "components/ImagePreviewer";
import { DefaultLayout } from "layouts/DefaultLayout";
import { useState } from "react";

enum fieldNames {
  Content = 'content',
  Subject = 'subject',
  Photo = 'photo'
};

const maxContentLength = 10; 

function NewPostPage() {
  const [content, setContent] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [photos, setPhotos] = useState<any[]>([]);
  
  const validateContent = (content: string) => {
    if (content.length > maxContentLength) return false;
    return true;
  }

  const handleChangeInput = (value: any, field: string) => {
    let isValid = true;

    const validateByField: any = {
      [fieldNames.Content]: () => validateContent(value),
    }
  
    const setFuntionsByField: any = {
      [fieldNames.Content]: () => setContent(value),
      [fieldNames.Subject]: () => setSubject(value),
    }
    
    const validateFieldFunction = validateByField[field];
    if (validateFieldFunction) {
      isValid = validateFieldFunction();
    }

    if (isValid) {
      setFuntionsByField[field]();
    }
  }

  const handleChangePhotos = (fileList: any) => {
    console.log("🚀 ~ file: index.tsx ~ line 52 ~ handleChangePhotos ~ files", fileList);
    const files = Object.keys(fileList).map((key) => {
      const file = fileList[key];
      const url = URL.createObjectURL(file)
      return {...file, url};
    })
    setPhotos(files);
  }

  return (
    <Container>
      <Heading>Criar novo post</Heading>
      <BaseFormControl label='Conteúdo'>
        <Textarea placeholder="Compartilhe o que você está pensando"
          onChange={(e) => handleChangeInput(e.target.value, fieldNames.Content)}
          value={content}
        />
        <FormHelperText>{maxContentLength - content.length} caractéres restantes</FormHelperText>
      </BaseFormControl>

      <BaseFormControl
        label='Assunto'>
        <Select
          placeholder="Selecione um assunto" 
          onChange={(e) => handleChangeInput(e.target.value, fieldNames.Subject)}
          value={subject}
        >
          <option>Tecnologia</option>
          <option>Marketing</option>
        </Select>
      </BaseFormControl>

      {photos.length > 0 && <ImagePreviewer images={photos} />}
      <BaseFormControl label='Photo'>
        <Input type='file' height={12} padding='10px' multiple onChange={(e) => handleChangePhotos(e.target.files)} />
      </BaseFormControl>

      <Button colorScheme='teal'>
        Criar post
      </Button>
    </Container>

  )
}

export default NewPostPage;