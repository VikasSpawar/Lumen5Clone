import { Container, Flex, Heading, Img, Stack, Text } from "@chakra-ui/react"

export const FlexLogos=(props)=>{
// console.log(props)
    return(
        <Stack spacing={props.spacing} >
            <Container  >
               { props.Heading ?<Heading>
                   { props.Heading}
                </Heading>:null}
                <Text fontSize={'2xl'} >
                    {props.Text}
                </Text>

            </Container>
            <Flex wrap={'wrap'}  justifyContent={'space-evenly'} >
                {props.LogoArray.map((el)=>{
                    return<Img  key={el.id} alt='logo' src={el.src}/>
                })}
            </Flex>
            <Container>
            
            </Container>


        </Stack>
    )
}