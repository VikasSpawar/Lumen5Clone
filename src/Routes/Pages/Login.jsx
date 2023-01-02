import { Box, Button, Divider, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, HStack, Img, Input, Spacer, Text, VStack } from "@chakra-ui/react";
import axios from 'axios';
import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { FlexLogos } from "../../Components/FlexLogos";
import { AuthContext } from "../../Context/AuthContext";
import { LogoArray } from "./Home";


const Login = () => {

    const [loading,setLoading]=useState(false)

    const { setIsLoginPage } = useContext(AuthContext)
    const { isAuth, handleLog } = useContext(AuthContext)
    const [input, setInput] = useState({
        email: '',
        password: ''
    })

    useEffect(() => {
        setIsLoginPage(true)
        return (
            () => setIsLoginPage(false)
        )
    }, [])
    const handleInputChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
        // console.log(input)
    }
    const HandleSubmit = () => {
        setLoading(true)
        axios({
            method: 'POST',
            url: `https://reqres.in/api/login`,
            data: input
        }).then((res) => {
            setLoading(false)
            if (res.data.token) {
                alert('Login Successful!')
                handleLog(res.data)
            }
           

        }).catch((err)=>{
            setLoading(false)
            alert('Login Failed!')
            // <Alert status='error'>
           

        })
    }

    const isError = input === ''
    if (isAuth.isAuth) {
        return <Navigate to='/dashboard' />
    }



    return (
        <HStack  >
            <Box color='white' bg='rgb(88,70,246)' w={'45%'}>
                <Box px='10'>
                    <Link to='/'>
                        <Img w='120px' src='https://storage.googleapis.com/lumen5-site-images/L5-logo/logo-white_266x156.png' />

                    </Link>
                </Box>
                <VStack textAlign={'left'} p='5'  >
                    <Flex >

                        <FlexLogos spacing='5rem' Text='Join over 1,000,000 companies
using Lumen5 to tell their stories.' Heading="Grow your brank and drive demand with video at scale" LogoArray={LogoArray} />
                    </Flex>
                </VStack>
            </Box>
            <Box width={'100%'} >
                <VStack m='12' w={'80%'} mt='-15rem' p='5rem'>
                    <Box mb='5' w={'100%'} textAlign='left'  >

                        <Heading >Welcome Back</Heading>
                    </Box>
                    <FormControl isInvalid={isError}>
                        <FormLabel>WORK EMAIL</FormLabel>
                        <Input
                            // border={'0'}
                            variant={'flushed'}
                            name='email'
                            type='email'
                            value={input.email}
                            onChange={handleInputChange}
                        />
                        <Divider />
                        {!isError ? (
                            <FormHelperText>

                            </FormHelperText>
                        ) : (
                            <FormErrorMessage>Email is required.</FormErrorMessage>
                        )}
                        <FormLabel>PASSWORD</FormLabel>
                        <Input
                              variant={'flushed'}
                            name="password"
                            type='password'
                            value={input.password}
                            onChange={handleInputChange}
                        />
                        <Divider />
                        <FormHelperText textAlign={'right'} >Forgot Password?</FormHelperText>

                    </FormControl>
                    <Button
                        borderRadius={'5rem'}
                        onClick={HandleSubmit}
                        bg='rgb(88,70,246)'
                        color='white'
                        w='full'
                         isLoading={loading} 
                        spinnerPlacement="end"
                    >Login</Button>

                    <Spacer />
                    <Spacer />
                    <Spacer />
                    <Flex w='100%'  >
                        <Divider m='3' />
                        <Text>OR</Text>
                        <Divider m='3' />
                    </Flex>
                            <Spacer/>
                            <Spacer/>
                            <Spacer/>
                    <Button
                      
                        borderRadius={'5rem'}
                        onClick={HandleSubmit}
                            colorScheme='blue'
                        
                        w='full'
                        variant={'outline'}
                    >Login With Facebook</Button>
                    <HStack  w={'100%'} >
                        <Link to='/signup' color="blue">
                        <Heading mx='3' color={'blue'} fontSize={'sm'}>

                    create new account ?
                        </Heading>
                    </Link>
                    </HStack>
                    
                </VStack >




            </Box>
        </HStack>





    )



};

export default Login;
