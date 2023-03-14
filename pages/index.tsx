import { Heading, VStack, Card, CardBody, Button } from "@chakra-ui/react"
import Link from "next/link"

export default function Home() {
  const randomString = generateRandomString(16)

  function generateRandomString(length: number) {
    let result = ""
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * characters.length)
      const char = characters.charAt(index)
      result += char
    }

    return result
  }

  return (
    <VStack justifyContent="center">
      <Heading>Create a link</Heading>
      <Card>
        <CardBody>
          <VStack>
            <Link href="/[slug]" as={`/i#${randomString}`}>
              <Button>Create Link</Button>
            </Link>
          </VStack>
        </CardBody>
      </Card>
    </VStack>
  )
}
