import { useEffect, useState } from "react"
import { Heading, VStack, Card, CardBody, Text, Button } from "@chakra-ui/react"
import { PublicKey } from "@solana/web3.js"
import axios from "axios"

export default function Link() {
  const [isReady, setIsReady] = useState(false)
  const [id, setId] = useState("")
  const [url, setUrl] = useState("")
  const [pubKey, setPubKey] = useState<PublicKey>()

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.post("/api/keypair", { id })
      console.log(response.data)
      setPubKey(new PublicKey(response.data.publicKey))
    }

    fetchData()
  }, [id])

  useEffect(() => {
    setIsReady(true)
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "")
      setId(hash)
      setUrl(window.location.href)
    }
  }, [isReady])

  return (
    <VStack justifyContent="center">
      <Heading>URL</Heading>
      <Card>
        <CardBody>
          <VStack>
            <Text>URL: {url}</Text>
            <Text>Fragment Identifier: {id}</Text>
            <Text>PubKey: {pubKey?.toString()}</Text>
          </VStack>
        </CardBody>
      </Card>
    </VStack>
  )
}
