'use client' // ---> this line does the trick

import { ChakraProvider } from '@chakra-ui/react'
import { ReactNode } from 'react'
// import theme from 'src/ui/theme'

const Providers = ({ children }: { children: ReactNode }) => {
  return (
      <ChakraProvider resetCSS >
        {children}
      </ChakraProvider>
  )
}

export default Providers