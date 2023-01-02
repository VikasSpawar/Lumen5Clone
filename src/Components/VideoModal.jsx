import { ChevronRightIcon } from "@chakra-ui/icons"
import { AlertDialog, AlertDialogContent, AlertDialogOverlay, AspectRatio, Box, useDisclosure } from "@chakra-ui/react"
import { useRef } from "react"
import { Link } from "react-router-dom"

export function AlertDialogExample(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef()

  return (
    <>
      <Link style={{ alignSelf: 'center' }} color='blue' bg='white' onClick={onOpen}>
        <ChevronRightIcon boxSize={8}/>
      </Link>

      <AlertDialog
        size={'6xl'}
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay >
          <AlertDialogContent borderRadius={'25px'}   >



            <Box borderRadius={'25px'} >

              <AspectRatio ratio={16 / 9} >
                <iframe
                  style={{ borderRadius: '25px' }}
                  title='naruto'
                  src={props.src}

                />
              </AspectRatio>


            </Box>






          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}
