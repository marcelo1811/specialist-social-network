import { Image } from "@chakra-ui/image";
import { Box, Center, Flex, Text } from "@chakra-ui/layout";

interface IImagePreviewerProps {
  images: any;
};

export function ImagePreviewer({ images }: IImagePreviewerProps) {
  return (
    <Flex>
      {images.map((image: any, index: number) => (
        <Box m={2} display='flex' flexDir='column' justifyContent='center' alignItems='center'>
          <Image src={image.url} fit='contain' boxSize='sm' />
          <Text>Imagem {index + 1}</Text>
        </Box>
      ))}
    </Flex>
  )
}