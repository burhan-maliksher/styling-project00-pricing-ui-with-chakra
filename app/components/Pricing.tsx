import React from "react";
import { Icon,Box, Button, Flex ,Heading,HStack,StackProps,Text, Stack} from "@chakra-ui/react";
import { CheckIcon } from "../icons/Icons";


export const ListItem=(props:StackProps)=>{
    const { children, ...rest}=props;
    return(
        <HStack as="li" spacing="20px" alignItems='start' {...rest}>
            <Icon as={CheckIcon} w="22px" h="22px" />
            <Text textAlign={['left','left','center']}>{children}</Text>
        </HStack>
    )
}

export function Pricing(){
    return(
       <Box mx='6'>
        <Box maxW="994px"  margin="auto" mt="-256px" borderRadius="12px" overflow="hidden" 
        boxShadow='0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'>
           <Flex direction={['column','column','row']}>
            <Box bg="#F0EAFB" p="60px">
                <Text fontSize="24px" fontWeight="800">Premium PRO</Text>
                <Heading as="h3" fontSize={['5xl','5xl','6xl']} mt="16px">$329</Heading>
                <Text color="#171923" fontSize="18px" fontWeight="500" mt="16px">Builled just once</Text>
                <Button colorScheme="purple" size="lg" w="282px" mt="24px">Get Started</Button>
            </Box>
            <Box bg="white" p="60px" fontSize="18px">
                <Text textAlign="left">
                    Access these features when you get this pricing package business.
                </Text>
                <Stack as="ul" spacing="20px" pt="24px">
                    <ListItem>International calling and messaging API</ListItem>
                    <ListItem>Additional phone numbers</ListItem>
                    <ListItem>Automated messages via Zapier</ListItem>
                    <ListItem>24/7 support and consulting</ListItem>
                </Stack>
            </Box>
          </Flex> 
        </Box>
     </Box>
    );
}