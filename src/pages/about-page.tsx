import { Link } from "react-router-dom";
import { SelectAuthState, updateProfileAction } from "../redux-toolkit/auth/auth-slice";
import { useAppDispatch, useAppSelector } from "../redux-toolkit/hooks";
import { Box,Button,Container,Heading,CardBody,Card,Text,CardHeader,CardFooter, Stack,Flex,Image  } from '@chakra-ui/react'

const AboutPage = () => {
    const {profile,email} = useAppSelector(SelectAuthState)
    const dispatch = useAppDispatch();

    const updateProfile = () =>{
        dispatch(updateProfileAction())
    }

    return ( 
        <>
            {/* <Box display='colum'>
                <h1>About Page </h1>
                <Box>
                     <p> {profile} , {email } </p>    
                </Box>

                <Box>
                    <Button colorScheme='twitter' onClick={updateProfile}>Update </Button>
                    <Link to='/' replace={true}> กลับหน้าแรก </Link>
                </Box>

            </Box>  */}
            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                >
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Box
                    rounded={'lg'}
                    boxShadow={'lg'}
                    p={10}>
                    <Stack spacing={4}>  
                        <Stack spacing={10}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                            </Stack>
                            <Heading fontSize='4xl' textAlign='center'>About Page</Heading>
                                <Card align='center' size='lg' p='2'>
                                    <CardHeader>
                                        <Heading fontSize='2xl' textAlign='center' >User สำหรับ Login </Heading>
                                    </CardHeader>
                                    <CardBody>
                                        <Text fontSize='xl'>user: {profile}</Text>
                                        <Text fontSize='xl'>password: {email}</Text>
                                    </CardBody>
                                    <CardFooter >
                                        <Button colorScheme='twitter' size='sm' onClick={updateProfile}>Admin user</Button>   
                                        <Link to='/' replace={true}> 
                                            <Button colorScheme='twitter' size='sm'>
                                                Home Page
                                            </Button> 
                                        </Link>                                
                                    </CardFooter>
                                    
                                </Card>
                            </Stack>
                    </Stack>
                    
                </Box>
                </Stack>
            </Flex>      
        </>
    );
}
 
export default AboutPage;