import { AddIcon } from "@chakra-ui/icons"
import { Box, Button, Center, Flex, Heading, Input, SimpleGrid, Spacer } from "@chakra-ui/react"
import { useState } from "react"

const AllVideosArray=[
    {
        id:'1',
        title:'Project1'
    },
    {
        id:'5',
        title:'Project 2'
    },
    {
        id:'2',
        title:'Project 3'
    },
    {
        id:'4',
        title:'Project 4'
    }
]




export const AllVideos=()=>{
    const [text,setText]=useState('')
    const [data,setData]=useState(AllVideosArray)
    const handleDelete=(id)=>{
        // console.log(id)
        const newArr=data.filter((el)=>el.title!==id)
        setData(newArr)
    }
    const handleAdd=(text)=>{
        if(!text){
           return alert('invaid name')
        }
        const newBox={
            title:text
        }
        setData([...data,newBox])
    }
    const AddVidsBox=(props)=>{
    
        return <Box bg={'white'} borderRadius='.4rem' boxShadow={'md'}  height='250px'>
        <Flex  p='2' justifyContent={'space-between'} h='full'  direction={'column'}>
            <Box overflow={'hidden'} textAlign={'left'} >
    
        <Heading>{props.title}</Heading>
            </Box>
        <Box onClick={()=>handleDelete(props.title)} align={'right'}><Button bg={'skyblue'} colorScheme={'blue'}>Delete</Button></Box>
        </Flex>
    
    
    </Box>
    }


    return(
        <Box bg='rgb(240,240,244)'>
            <Box  px='5'>

            <Heading>All Videos</Heading>
            </Box>
             <SimpleGrid  width='100%' p='5' columns={[2, null, 4]} spacing='40px'>
        <Box p='1' borderRadius={'.4rem'} boxShadow={'md'} color='white'  bg='skyblue' height='250px'>
            <Heading fontSize={'2xl'} >Tip : Project Name Should Be Unique</Heading>
        <Center w='full'  h='50%' >
         <Input value={text} onChange={(e)=>setText(e.target.value)} width={'80%'} color={'black'} placeholder="Name your Project" bg={'white'} type={'text'} m='0' p='0'/>
        <Spacer/>
         <AddIcon onClick={()=>handleAdd(text)} boxSize={'10'} />
        </Center>
      
          
          </Box>
      
              {data.map((el)=><AddVidsBox key={el.title} title={el.title} />)}
      
       
      </SimpleGrid>
        </Box>
       
    )
}