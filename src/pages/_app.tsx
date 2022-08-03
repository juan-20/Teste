import type { AppProps } from 'next/app'
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import { ChakraProvider } from '@chakra-ui/react'
import dark from '../styles/theme/dark';
import light from '../styles/theme/light';
import Header from '../components/Header';

import '../styles/home.modules.css'

function MyApp({ Component, pageProps }: AppProps) {

  
  const [theme, setTheme] = useState(dark);

  const toggleTheme = () => {
    setTheme(theme.title === "dark" ? light : dark)
  }

  return(
     <ThemeProvider theme={theme}>
      <ChakraProvider>
        <GlobalStyles />
        <Header/>
       <Component {...pageProps} />
       </ChakraProvider>
     </ThemeProvider>
    )
}

export default MyApp
