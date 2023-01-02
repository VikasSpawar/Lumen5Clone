import { Box, Flex } from "@chakra-ui/react"
import { useContext, useEffect } from "react"
import { DashNav } from "../../Components/DashNav"
import { SideNav } from "../../Components/SideNav"

import { AuthContext } from "../../Context/AuthContext"
import { DashRoutes } from "../DashRoutes"
export const Dashboard=()=>{
    const {setIsLoginPage}=useContext(AuthContext)
    useEffect(()=>{
        setIsLoginPage(true)
        return(()=>setIsLoginPage(false))
    },[])
   
    return(<Box>
            <DashNav/>
          <Flex>
            <SideNav/>
          <Box  textAlign={'left'} w={'90%'} >
           
            <DashRoutes/>
            
        </Box>
    </Flex>
    </Box>
  
      
    )
}