import { Button } from "@chakra-ui/button";
import { useBoolean } from "@chakra-ui/hooks";
import { Image } from "@chakra-ui/image";
import { Box, Center, Flex, Text } from "@chakra-ui/layout";
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay } from "@chakra-ui/modal";
import { useState } from "react";

interface IImagePreviewerProps {
  images: any;
  onRemove: Function;
};

export function ImagePreviewer({ images, onRemove }: IImagePreviewerProps) {
  const [showPreview, setShowPreview] = useBoolean()
  const [selectedImage, setSelectedImage] = useState<any>(null);
  
  const handleClickImage = (image: any) => {
    setSelectedImage(image);
    setShowPreview.on();
  };

  const handleRemoveImage = (image: any) => {
    onRemove(selectedImage)
    setShowPreview.off();
  }

  return (
    <>
      <Box display='flex' flexDir='row' height='200px' width='100%'>
        {images.map((image: any, index: number) => (
          <Box
            bg='blackAlpha.100'
            style={{width: '500px'}}
            m={2}
            _hover={{
              cursor: 'pointer',
              opacity: 0.6,
            }}
            onClick={() => handleClickImage(image)}
          >
            <Image src={image.url} height='200px' fit='contain'/>
          </Box>
        ))}
      </Box>

      {selectedImage && (
        <Modal isOpen={showPreview} onClose={() => setShowPreview.off()}>
          <ModalOverlay />
          <ModalContent>
            <ModalBody>
              <Image src={selectedImage.url}/>
            </ModalBody>
            <ModalFooter>
              <Button mr={4} variant="ghost" onClick={() => handleRemoveImage(selectedImage)}>Remover</Button>
              <Button colorScheme="blue" mr={3} onClick={() => setShowPreview.off()}>
                Fechar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  )
}