import { AspectRatio, Button, Container } from "@chakra-ui/react"
import { AlertDialogExample } from "./VideoModal"

export const Videos = (props) => {

    return (
        <Container maxW='sm' >

            <AspectRatio ratio={16 / 9}>
                <iframe
                title="Vids"
                    style={{ borderRadius: '1rem' }}
                    src={props.src}
                    
                    >

                </iframe>
            </AspectRatio>
            <Button m='0' p='0' borderRadius={'50%'} top={'-8rem'}>

                <AlertDialogExample src={props.src} />
            </Button >
        </Container>

    )
}