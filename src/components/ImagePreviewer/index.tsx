import { Image } from "@chakra-ui/image";
import { Box, Center, Flex, Text } from "@chakra-ui/layout";
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay } from "@chakra-ui/modal";
import { useState } from "react";

interface IImagePreviewerProps {
  images: any;
};

export function ImagePreviewer({ images }: IImagePreviewerProps) {
  const [showPreview, setShowPreview] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  
  const handleClickImage = (image: any) => {
    setSelectedImage(image);
    setShowPreview(true);
  };

  return (
    <>
      <Box display='flex' overflowX='scroll'>
        {images.map((image: any, index: number) => (
          <Box
            m={2} display='flex' flexDir='column' justifyContent='center' alignItems='center'
            _hover={{
              cursor: 'pointer',
              opacity: 0.6,
            }}
            onClick={() => handleClickImage(image)}
          >
            <Image src={image.url} fit='contain' boxSize='sm' width='150px' />
          </Box>
        ))}
      </Box>

      {selectedImage && (
        <Modal isOpen={showPreview} onClose={() => setShowPreview(false)}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>
              <Image src={selectedImage.url}/>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </>
  )
}