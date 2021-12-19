import { ChakraProvider } from '@chakra-ui/react'

import { DarkModeContext } from '../hooks/useDarkMode';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [darkmode, setDarkmode] = useState(false)

  return (
    <ChakraProvider>
      <DarkModeContext.Provider value={{
        darkmode, setDarkmode
      }}>
          <Component {...pageProps} />
      </DarkModeContext.Provider>
    </ChakraProvider>
  )
}

export default MyApp