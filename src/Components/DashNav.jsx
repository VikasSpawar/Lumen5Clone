import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons'
import { Avatar, Box, Button, ButtonGroup, Center, Divider, Flex, HStack, Img, Input, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList, Spacer } from "@chakra-ui/react"
import { Link } from "react-router-dom"
export  const DashNav =()=>{

return(
    <Box >
        <Flex  h='4rem' px='20' maxH='max-height' minW='min-width'   gap='2'>
    <Link to='/'>


    <Img src="https://storage.googleapis.com/lumen5-site-images/L5-logo/L5-logo-header.png" h='100%'  />
    </Link>
  
  <Spacer />
  <ButtonGroup   alignItems={'center'} gap='2'>
              <HStack fontSize={'lg'}  >
                <SearchIcon/>
              <Input variant='flushed' placeholder='Search your videos' />
               
            
             
               

              </HStack>
              
              
    <Button  px='1rem'  h='60%' borderRadius='50'  colorScheme='blue' variant={'outline'}>
      <Link >
      
      Upgrade
      </Link>
    </Button>
              
  <Center height='50px'>
  <Divider orientation='vertical' />
</Center>
              
<Menu>
  <MenuButton  as={Avatar} colorScheme='pink'>
   
  </MenuButton>
  <MenuList minW='300px'>
    <MenuGroup title='Profile'>
      <MenuItem  >My Account</MenuItem>
      <MenuItem><HamburgerIcon/> All Videos </MenuItem>
    </MenuGroup>
    <MenuDivider />
    <MenuGroup>
           <MenuItem>Workspaces</MenuItem>
    <MenuItem>Team members</MenuItem>
    <MenuItem>Billing</MenuItem>
    <MenuItem>Account settings</MenuItem>
    </MenuGroup>
 
    <MenuDivider/>
    <MenuGroup>

    <MenuItem>Learning Hub</MenuItem>
    </MenuGroup>
    <MenuGroup title='Help'>
      <MenuItem>Docs</MenuItem>
      <MenuItem>FAQ</MenuItem>
    </MenuGroup>
  </MenuList>
</Menu>
    
  </ButtonGroup>
</Flex>
       






    </Box>
)

}