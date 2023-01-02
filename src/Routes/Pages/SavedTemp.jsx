import { Box, Flex, Heading } from "@chakra-ui/react"
import { useContext, useEffect } from "react"
import { DashNav } from "../../Components/DashNav"
import { SideNav } from "../../Components/SideNav"

import { AuthContext } from "../../Context/AuthContext"
export const Savedtemplates=()=>{
    const {setIsLoginPage}=useContext(AuthContext)
    useEffect(()=>{
        setIsLoginPage(true)
        return(()=>setIsLoginPage(false))
    },[])
   
    return(<Box>
            <DashNav/>
          <Flex>
            <SideNav/>
            <Box h='40rem' bg='rgb(240,240,244)' px='5' textAlign={'left'} w={'90%'} >
           
            {/* <DashRoutes/> */}
            <Heading>Saved Templates</Heading>
            
        </Box>
    </Flex>
    </Box>
  
      
    )
}