import { Box, Divider, Heading, Stack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const links = [
    {
      to: "/dashboard/",
      title: "All Videos"
    },
    // {
    //   to: "/about",
    //   title: "About"
    // },
    {
      to: "/dashboard/instavideos",
      title: "Insta videos"
    },
    {
      to: "/dashboard/brandkits",
      title: "Brand Kits"
    },
    {
      to: "/dashboard/savedtemplates",
      title: "Saved templates"
    }
  ];
  
  // NavLinks
  const baseStyle = {
    color: "black",
    textDecoration: "none"
  };
  
  const activeStyle = {
    color: "blue",
    textDecoration: "none"
  };
  
export const SideNav=()=>{

    return(<Box  boxShadow={'xs'}  w={'25%'}  >

        <Stack flexDirection={'column'} h='full'  p='5' textAlign={'left'}>
             {links.map((item) => (
        // activeStyle, or activeClass
        <Stack key={item.to} >

        <NavLink 
            
          
          style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
          to={item.to}
          key={item.to}
          end
        >
            <Heading fontSize={'lg'}>

          {item.title}
            </Heading>
        </NavLink>
        </Stack>
      ))}
        <Divider/>
        </Stack>
    </Box>)
}