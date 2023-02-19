import React from "react";
import { Box, Heading ,Text} from "@chakra-ui/react";

export function Header(){
    return(
        <Box as="section" pb="112px" textAlign={['left','left','center']}>
            <Box  bg="#6B46C1" pt="90px" pb="198px" px="32px">
                <Heading textAlign="center" fontWeight="800" fontSize={['3xl','3xl',"5xl"]} color='#F7FAFC'>Simple pricing for your business</Heading>
                <Text textAlign="center" fontWeight="500" fontSize={['lg','lg','2xl']} color='#F7FAFC' pt="16px">Plans that are carefully created to suit your business.</Text>
            </Box> 
       </Box>

    );
}