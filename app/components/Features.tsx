import { Box,Stack, HStack,StackProps,Text } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { ElementType } from "react";
import React from "react";
import { HassleFreeIcon, MoneyBackGuaranteeIcon, MonthlySubscriptionIcon } from "../icons/Icons";

interface FeatureProps extends StackProps{
    icon:ElementType;
}

function Feature(props:FeatureProps) {
    const {icon,children,...rest}=props;
    return(
        <HStack {...rest} spacing='24px' alignItems='start'>
            <Icon as={icon} boxSize={['8','8','12']}/>
            <Text textAlign='left' fontSize={'18px'} fontWeight='700'>{children}</Text>
        </HStack>
    );
}

export function Features(){
    return(
        <Box maxW='1024px' m='auto' pt="60px" pb="32px">
          <Stack px='12'spacing={['6','6','5']} direction={['column','column','row']}>
            <Feature icon={MoneyBackGuaranteeIcon}>30 days money back Guarantee </Feature>
            <Feature icon={HassleFreeIcon}>No setup fees 100% hassle-free</Feature>
            <Feature icon={MonthlySubscriptionIcon}>No monthly subscription Pay once and for all</Feature>
          </Stack>
        </Box>
    );
} 