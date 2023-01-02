import {border, Box, Button, ButtonGroup, Flex, Heading,  HStack,  Img,    Menu, MenuButton, MenuItem, MenuList, Select, Spacer, Text} from "@chakra-ui/react"
import {ChevronDownIcon}from '@chakra-ui/icons'
import { Link } from "react-router-dom"
export  const Navbar =()=>{

return(
    <Box background="white" pos="sticky" top={0} zIndex={1}  >
        <Flex  h='4rem' px='20' maxH='max-height' minW='min-width'   gap='2'>
    <Link to='/'>


    <Img src="https://storage.googleapis.com/lumen5-site-images/L5-logo/L5-logo-header.png" h='100%'  />
    </Link>
  
  <Spacer />
  <ButtonGroup   alignItems={'center'} gap='2'>
              <HStack fontSize={'lg'}  >

                 <Link>Pricing</Link>
                <Link>Enterprise</Link>
                <Link>Case studies</Link>
                <Menu preventOverflow  >
  <MenuButton  variant='ghost' rightIcon={<ChevronDownIcon />}  placeholder={'Learn'} as={Button} >
   
     Learn
     
  </MenuButton>
  <MenuList>
    <MenuItem>Resorce</MenuItem>
    <MenuItem>Blog</MenuItem>
    
  </MenuList>
</Menu>
              </HStack>
              
              
    <Button  px='1rem'  h='90%' borderRadius='50'  colorScheme='blue' variant={'outline'}>
      <Link  to='/login'>
      
      Login
      </Link>
    </Button>
              
    <Button px='1rem' h='90%' borderRadius='50' colorScheme='blue' bg='blue.600'>
      
      <Link to='/signup'>
      Sign Up
      
      </Link>
      </Button>
  </ButtonGroup>
</Flex>
       
    </Box>
)

}
