import { ChakraProvider } from '@chakra-ui/react'

import { DarkModeContext } from '../hooks/useDarkMode';
import { useEffect, useState } from 'react';
import '../styles/burger.css'

function MyApp({ Component, pageProps }) {
  const [darkmode, setDarkmode] = useState(false)
  
  useEffect(async () => {
    const dark = await JSON.parse(localStorage.getItem('darkmode'));
    setDarkmode(dark)
  }, [])
  
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