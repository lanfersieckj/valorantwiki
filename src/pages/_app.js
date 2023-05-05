import Main from '@/components/main/main';
import NavBar from '@/components/nav/navBar';
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <NavBar/>
      <Main>
        <Component {...pageProps} />
      </Main>
    </ChakraProvider>
  );
}
