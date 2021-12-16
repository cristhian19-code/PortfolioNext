import { ChakraProvider } from '@chakra-ui/react'
import {
  Flex,
} from '@chakra-ui/react'

import Presentation from '../components/Presentation'

import Navbar from '../components/Navbar';
import { DarkModeContext } from '../hooks/useDarkMode';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  
  const [darkmode, setDarkmode] = useState(false)

  return (
    <ChakraProvider>
      
      <DarkModeContext.Provider value={{darkmode, setDarkmode}}>
        <Navbar />
        
        <Flex
          bgColor={darkmode ? 'blackAlpha.900' : 'gray.100'}
          color={darkmode ? 'gray.300' :'blackAlpha.600'}
          direction={'column'}
          alignItems={'center'}
        >
        <Presentation />
            <Component {...pageProps} />
        </Flex>
      </DarkModeContext.Provider>
    </ChakraProvider>
  )
}

export default MyApp