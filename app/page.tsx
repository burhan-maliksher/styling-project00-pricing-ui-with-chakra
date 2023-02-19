"use client"
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import {Button, Box, Flex, VStack,HStack,Stack,Text, Heading } from '@chakra-ui/react'
import { Header } from './components/Header'
const inter = Inter({ subsets: ['latin'] })
import { Pricing } from './components/Pricing'
import { ChakraProvider } from '@chakra-ui/react'
import {Features} from './components/Features'
export default function Home() {
  return (
    <>
    <ChakraProvider>
      <Header />
      <Pricing/>
      <Features/>
    </ChakraProvider>
    {/* <div align="center"> */}
      {/* <Box  bg="greenyellow" w="300px" h="300px" m="atuo" mt="32px" ml="210px" p="20px">
        <Text color="blue.600" fontFamily="monospace" fontSize="32px">this is google chakra</Text>
        <Button ml="32px" mt="32px" colorScheme="blue" _hover={{background:'green'}}>click me</Button>
      </Box> */}
      {/* <Heading as="h1" fontSize="20px"> chakra ui learning</Heading> */}
      {/* <Text noOfLines={2}>is a box</Text> */}
      {/* <Flex  align="center" justify="space-between"> */}
      {/* <Stack spacing="24" direction="row">
        <Box as='section' bg='green' w='120px' h='140px' color='yellow'>
          <Text as="i">this is a box</Text>
        </Box>
        <Box as='section' bg='red' w='100px' h='100px' color='yellow'>
        this is a box
        </Box>
        <Box as='section' bg='blue' w='300px' h='100px' color='yellow'>
          this is a box
        </Box>
        <Box as='section' bg='orange' w='100px' h='200px'  color='yellow'>
          this is a box
        </Box>
      </Stack>  */}
      {/* </Flex> */}
    {/* </div> */}
    </>
  )
}
