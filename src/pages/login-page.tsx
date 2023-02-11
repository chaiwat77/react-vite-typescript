import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    FormErrorMessage,
    useToast,
  } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginFormInput } from '../app-types/login-form-input.type';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { useAppDispatch } from '../redux-toolkit/hooks';
import { loginThunk } from '../redux-toolkit/auth/auth-slice';
import { LoginErrorResponse } from '../app-types/login.type';

  export default function LoginPage() {
    const toast = useToast();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    //schema validation
    const schema = yup.object().shape({
        email: yup.string().required('กรุณาป้อนข้อมูล').email('รูปแบบอีเมลล์ไม่ถูกต้อง'),
        password: yup.string().required('กรุณาป้อนรหัสผ่าน').min(6,'กรุณาป้อนอย่างน้อย 6 ตัวอักษร')
    });

    const { register, handleSubmit, formState: { errors,isSubmitting } } = useForm<LoginFormInput>({
        resolver: yupResolver(schema), 
        mode: 'all'
    });

    // const onSubmit: SubmitHandler<LoginFormInput> = (data) => {  //from react-hook-form
    const onSubmit = async (data: LoginFormInput) => {

        try {
            const result = await dispatch(loginThunk(data)).unwrap();
            // console.log(result.access_token);
            if (result.access_token){
                toast({
                    title: 'Login Success',
                    // description: err.message,
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                    position: 'top-right'
                });
                navigate('/dashboard');
            }
            
           
        } catch (error: any) {
            let err : LoginErrorResponse = error;
            toast({
                title: 'Result',
                description: err.message,
                status: 'error',
                duration: 3000,
                isClosable: true,
                position: 'top-right'
            });
        }

        console.log(data);
        
    }


    

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Sign in</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                    to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                    <FormControl id="email" isInvalid={errors.email ? true : false}>
                        <FormLabel>Email address</FormLabel>
                        <Input type="email" {...register("email")}/>
                        <FormErrorMessage>
                            {errors.email && errors.email?.message}
                        </FormErrorMessage>
                    </FormControl>
                    <FormControl id="password" isInvalid={errors.password ? true : false}>
                        <FormLabel>Password</FormLabel>
                        <Input type="password" {...register("password")}/>
                        <FormErrorMessage>
                            {errors.password && errors.password.message}
                        </FormErrorMessage>
                    </FormControl>
                    <Stack spacing={10}>
                        <Stack
                            direction={{ base: 'column', sm: 'row' }}
                            align={'start'}
                            justify={'space-between'}>
                            <Checkbox>Remember me</Checkbox>
                            <Link color={'blue.400'}>Forgot password?</Link>
                        </Stack>
                        <Button
                            isLoading={isSubmitting}
                            loadingText='Loading'
                            type='submit'
                            bg={'blue.400'}
                            color={'white'}
                            _hover={{
                                bg: 'blue.500',
                        }}>
                        Sign in
                        </Button>
                        <Button
                            bg={'blue.400'}
                            color={'white'}
                            _hover={{
                                bg: 'blue.500',
                            }}
                            onClick={() => {
                                navigate('/');
                        }}>
                        Back
                        </Button>
                    </Stack>
                    </Stack>
                </Box>
                </Stack>
            </Flex>
        </form>  
    );
  }