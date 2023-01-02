import { Box, Button, Container, Flex, Heading, Img, Link, Spacer, Stack, Text, VStack } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
import { FlexLogos } from "../../Components/FlexLogos"

import { AlertDialogExample } from "../../Components/VideoModal"
import { Videos } from "../../Components/videos"


const MidCompsArray = [
    {
        id: 1,
        flx: 'row',
        leftImage: 'https://storage.googleapis.com/lumen5-site-images/website-assets/image-content.png',
        logo: "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-cisco-color.png",
        RightSideHeading: 'Templates designed to help you stay on bran on budget, and on time',
        RightSideText: 'Tap into hundreds of customizable designs made to help you communicate effectively and consistently.',
        RightSideComment: ' “Lumen5 provides a great library of images, video footage, and music to deliver the energy and traction you need for your social posts.”',
        RightCommenter: 'Shirley Pang',
        RightSideCommenterStatus: 'Global Social Media Manager',
        logo2: 'https://storage.googleapis.com/lumen5-site-images/website-assets/logo-siemens-color1.png'


    },
    {
        id: 2,
        flx: 'row-reverse',
        leftImage: 'https://storage.googleapis.com/lumen5-site-images/website-assets/image-customize.png',
        logo: "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-cisco-color.png",
        RightSideHeading: 'Templates designed to help you stay on bran on budget, and on time',
        RightSideText: 'Tap into hundreds of customizable designs made to help you communicate effectively and consistently.',
        RightSideComment: ' “Lumen5 provides a great library of images, video footage, and music to deliver the energy and traction you need for your social posts.”',
        RightCommenter: 'Shirley Pang',
        RightSideCommenterStatus: 'Global Social Media Manager',
        logo2: 'https://storage.googleapis.com/lumen5-site-images/website-assets/logo-siemens-color1.png'


    },
    {
        id: 3,
        flx: 'row',
        leftImage: 'https://storage.googleapis.com/lumen5-site-images/website-assets/image-media.png',
        logo: "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-cisco-color.png",
        RightSideHeading: 'Templates designed to help you stay on bran on budget, and on time',
        RightSideText: 'Tap into hundreds of customizable designs made to help you communicate effectively and consistently.',
        RightSideComment: ' “Lumen5 provides a great library of images, video footage, and music to deliver the energy and traction you need for your social posts.”',
        RightCommenter: 'Shirley Pang',
        RightSideCommenterStatus: 'Global Social Media Manager',
        logo2: 'https://storage.googleapis.com/lumen5-site-images/website-assets/logo-siemens-color1.png'


    },
]
const MidComps = (props = { flx: 'row' }) => {
    // const {heading,desc,image,name,logo}=props
    const { flx, leftImage, logo, RightSideHeading, RightSideText, RightSideComment, RightCommenter, RightSideCommenterStatus, logo2 } = props
    return (
        <Flex flexDirection={{ base: props.flx }} py={'5rem'} textAlign={'left'} >
            <Container margin={'auto'} >

                <Img src={leftImage} alt="image" />

            </Container>
            <Container>

                <Stack p={'1rem'}>
                    <Img w={'100px'} src={logo} alt='image' />
                    <Heading>
                        {RightSideHeading}
                    </Heading>
                    <Spacer />
                    <Text fontSize={'2xl'} >
                        {RightSideText}
                    </Text>
                    <Spacer />
                    <Link fontSize={'lg'} color={'blue'} >
                        Get started for free →
                    </Link>
                    <hr style={{ margin: '2rem 0rem 2rem 0rem' }} />
                    <Text>
                        {RightSideComment}
                    </Text>
                    <Container p='0' >
                        <Heading fontSize={'lg'}>
                            {RightCommenter}

                        </Heading>
                        <Spacer />
                        <Text>
                            {RightSideCommenterStatus}
                        </Text>

                    </Container>
                    <Box>
                        <Img width={'100px'} src={logo2} alt='image' />

                    </Box>

                </Stack>
            </Container>
        </Flex>

    )
}

export const LogoArray = [
    {
        id: 1,
        src: 'https://storage.googleapis.com/lumen5-site-images/website-assets/logo-salesforce-color.png'
    },
    {
        id: 2,
        src: 'https://storage.googleapis.com/lumen5-site-images/website-assets/logo-pwc-color.png'
    },
    {
        id: 3,
        src: 'https://storage.googleapis.com/lumen5-site-images/website-assets/logo-siemens-color1.png'
    },

    {
        id: 5,
        src: 'https://storage.googleapis.com/lumen5-site-images/website-assets/logo-kpmg-color.png'
    },
    {
        id: 6,
        src: 'https://storage.googleapis.com/lumen5-site-images/website-assets/logo-merk-color.png'
    },
    {
        id: 7,
        src: 'https://storage.googleapis.com/lumen5-site-images/website-assets/logo-sap-color.png'
    },
    {
        id: 8,
        src: 'https://storage.googleapis.com/lumen5-site-images/website-assets/logo-mitsubishi-color.png'
    },
    {
        id: 9,
        src: 'https://storage.googleapis.com/lumen5-site-images/website-assets/logo-cisco-color.png'
    },
]

const FooterArray = [
    {
        Heading: "EXPLORE",
        Links: [
            'About',
            'Features',
            'Careers',
            'LinkedIn',
            'Support ',
            'Product updates'
        ]
    },
    {
        Heading: "VIDEO TOOLS",
        Links: [
            'Add Text to Video',
            'Cut Video',
            'Merge Video',
            'Compress Video',
            'Resize Video ',
            'See all'
        ]
    },
    {
        Heading: "VIDEO CREATORS",
        Links: [
            'Video Editor',
            'Photo Video Maker',
            'Facebook Video Maker',
            'YouTube Intro Maker',
            'Instagram Video Maker ',
            'See all'
        ]
    },
]
const VidsArray = [
    {
        id: 1,
        src: "https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/Hydrogen%20Economy.mp4"
    },
    {
        id: 2,
        src: "https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/Responsible%20Investment.mp4"
    },
    {
        id: 3,
        src: "https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/siemens-content.mp4"
    },
    {
        id: 4,
        src: "https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/Workplace%20Evolution.mp4"
    },
    {
        id: 5,
        src: "https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/The%20Pandemic.mp4"
    },
    {
        id: 6,
        src: "https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/Supply%20Chain%20Resilience.mp4"
    },
]
const FooterVStack = (props) => {

    // console.log(props.Links)
    return (
        <Box align='left'   >
            <Box py={'5'}>

                <Heading fontSize={'md'}>{props.Heading}</Heading>
            </Box>

            <Stack py='2' spacing={8} >
                {
                    props.Links.map((el) => <Link key={el} >
                        <Heading fontSize={'sm'}>{el}</Heading>
                    </Link>)
                }


            </Stack>


        </Box>
    )
}
export const Home = () => {



    return (<Box>
        <Flex px={'5rem'} flexDirection={{ base: 'column', md: 'column' }} >

            {/* {Top Section Start} */}

            <Flex bg='rgb(240,240,244)' flexDirection={{ base: 'column', md: 'row' }}>
                <Container p='10' align='left'>

                    <VStack p='10' textAlign='left' >

                        <Heading textAlign={'left'} >Grow your brand and drive demand with video at scale</Heading>
                        <Spacer />
                        <Text lineHeight={7} fontSize='2xl' noOfLines={'4'} >
                            Our online video creator makes it easy anyone on your team to create enganging video content in minutes
                        </Text>
                    </VStack>

                    <Button ml='12' h={'16'} size='lg' px='1rem' borderRadius='50' colorScheme='blue' bg='blue.600'><NavLink to='/signup'>Sign up free</NavLink></Button>



                </Container>

                <Container>

                    <Box p='4' >


                        <Button m='0' p='0' color='blue' borderRadius='50%' bg='white' top={'15rem'} ><AlertDialogExample src={'https://storage.googleapis.com/lumen5-site-images/website-assets/product-tour-header.mp4'} /></Button>

                        <Img src='https://storage.googleapis.com/lumen5-site-images/website-assets/image-hero.png' />

                    </Box>
                </Container>

            </Flex>
            {/* Top Section End */}
            <Box p={'1rem'} >

                <FlexLogos Heading='' Text='Over 10 million videos created across every industry' LogoArray={LogoArray} />
            </Box>

            {/* <Flex flexDirection={{ base: 'column-reverse', md: 'row-reverse' }}>
                <Container p='10' align='left'>

                    <VStack justifyContent={'left'} p='14' textAlign='left' >

                        <Heading>Easier than building a slide deck</Heading>
                        <Spacer />
                        <Text lineHeight={7} fontSize='2xl' noOfLines={'4'} >
                            Creating with Lumen5 is just like making a presentation. Point and click, drag and drop, done and done.
                        </Text>
                    </VStack>

                    <Link fontSize={'lg'} ml='14' px='1rem' color='blue' >Get started for free 	→</Link>



                    <hr style={{ marginTop: '2rem', marginBottom: '2rem' }} width='90%' />
                    <Text lineHeight={7} fontSize='md' noOfLines={'4'}>
                        “One of our colleagues called Lumen5 the PowerPoint of video making. Everybody can use PowerPoint; it’s easy.”
                    </Text>
                </Container>

                <Spacer />

                <Container>

                    <Box p='4' >
                        <Img src='https://storage.googleapis.com/lumen5-site-images/website-assets/image-content.png' />
                    </Box>
                </Container>

            </Flex> */}




            {MidCompsArray.map((el) => <MidComps

                key={el.id}
                flx={el.flx}
                leftImage={el.leftImage}
                logo={el.logo}
                RightSideHeading={el.RightSideHeading}
                RightSideText={el.RightSideText}
                RightSideComment={el.RightSideComment}
                RightCommenter={el.RightCommenter}
                RightSideCommenterStatus={el.RightSideCommenterStatus}
                logo2={el.logo2}




            />)}






            <Box>

            </Box>
            <Flex gap={'0'} margin='auto' w='100%' justifyContent={'space-evenly'} wrap={'wrap'} >

                {
                    VidsArray.map((el) => <Videos key={el.id} src={el.src} />)
                }


            </Flex>

            <Box p='3rem' bg={'blue.600'} color={'white'} borderRadius={'1rem'} margin={'auto'} my='5rem' w={'94%'} >

                <Stack spacing={'5'} margin={'auto'} w={'66%'}  >

                    <Heading  >Join over 1,000,000 companies using Lumen5 to tell their stories.</Heading>
                    <Spacer />
                    <Text lineHeight={7} fontSize='2xl' noOfLines={'4'} >
                        Lumen5 is a video creation software that helps marketers, publishers, and brands create video content in a breeze, without any technical expertise.
                    </Text>
                    <Box>

                        <Button bg={'white'} variant={'outline'} h={'14'} size='lg' px='1rem' borderRadius='50' colorScheme='blue' ><NavLink to='/signup' >Sign up free</NavLink></Button>
                    </Box>
                </Stack>




            </Box>





        </Flex>
        {/* Footer starts */}


        <Box p={'5'} bg='rgb(36,40,47)' width={'100%'} >
            <Flex gap='5rem' spacing={'5rem'} py='4rem' color={'white'}  >
                <Box align='right' width={'45%'}  >
                    <Box align='left' width={'50%'}  >
                        <Box py={'5'}>

                            <Img w={'120px'} src="https://storage.googleapis.com/lumen5-site-images/L5-logo/L5-logo-white.png" />
                        </Box>
                        <Text textAlign={'left'}>Lumen5 combines powerful A.I. with a simple drag-and-drop interface to help you create professional video content in minutes.</Text>
                    </Box>
                </Box>
                <Flex justifyContent={'space-evenly'} width={'100%'} >
                    {
                        FooterArray.map((el) => {
                            return <FooterVStack key={el.Heading} Heading={el.Heading} Links={el.Links} />
                        })
                    }



                </Flex>
            </Flex>

        </Box>
    </Box>

    )
}













