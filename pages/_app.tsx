import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import WalletContextProvider from "../contexts/WalletContextProvider"
import Navbar from "@/components/Navbar"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <WalletContextProvider>
        <Navbar />
        <Component {...pageProps} />
      </WalletContextProvider>
    </ChakraProvider>
  )
}
